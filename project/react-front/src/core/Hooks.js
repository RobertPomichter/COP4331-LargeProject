import { useEffect, useCallback, useRef } from 'react';
import Axios from 'axios';
// make API calls and pass the returned data via dispatch
// export const useFetch = (data, dispatch) => {
//     dispatch({ type: 'FETCHING_IMAGES', fetching: true });
    
//         Axios
//           .get(`${apiKey}/?food,beverage,coffee,dessert/&count=${count}`)
//           .then (res => {
//             setImages([...images, ...res.data]);
//             setIsLoaded(true);
//           })
//           .catch(e => {
//             dispatch({ type: 'FETCHING_IMAGES', fetching: false });
//             return e;
//           });
//     }
//     return (images, loaded);
// }


// lazy load images with intersection observer
export const lazyLoading = (imgSelect, items) => {

    const imgObserver = useCallback(node => {
        const intObs = new IntersectionObserver(entries => {
            entries.forEach(en => {
                if (en.intersectionRatio > 0) {
                    const currentImg = en.target;
                    const newImgSrc = currentImg.dataset.src;
                // if new url exists then swap
                    if (!newImgSrc) {
                        console.error('Image source is invalid');
                    } else {
                        currentImg.src = newImgSrc;
                    }
                intObs.unobserve(node); // detach the observer when done
                }
            });
        })
        intObs.observe(node);
    }, []);

    const imagesRef = useRef(null);
    
    useEffect(() => {
        imagesRef.current = document.querySelectorAll(imgSelect);
        if (imagesRef.current) {
            imagesRef.current.forEach(img => imgObserver(img));
        }
    }, [imgObserver, imagesRef, imgSelect, items])
}