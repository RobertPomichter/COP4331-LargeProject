import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
// import { Card, Carousel } from 'react-bootstrap';
// import { Button } from'@material-ui/core';

const Collage = () => {
    const [images, setImages] = React.useState([]);
    const [loaded, setIsLoaded] = React.useState(false);
  
    React.useEffect(() => {
      fetchImages();
    }, []);

    const fetchImages = (count = 100) => {
        const apiKey = "https://source.unsplash.com";
    
        Axios
          .get(`${apiKey}/?food,beverage,coffee,dessert/&count=${count}`)
          .then (res => {
            setImages([...images, ...res.data]);
            setIsLoaded(true);
          });
    };
    return (images, loaded);
}; 

const UnsplashImage = ({ url, key }) => (
    <div className="image" key={key} >
      <img src={url} />
    </div>
); 
class Home extends Component {

    render() {
        // const {images, loaded} = Collage;
        // Render images in the header
        return (
            <div className='container'>
                <div className="header">
                {/* <InfiniteScroll 
                    dataLength={images}
                    next={ () => Collage.fetchImages(5) }
                    hasMore={true}
                    loader={ <img src="https://i.gifer.com/ZZ5H.gif" alt="loading"/> }
                >
                <div className="image-grid" style={{ marginTop: "30px" }}>
                    { loaded ? images.map((image, index) => (
                        <UnsplashImage url={image.urls.regular} key={index} />
                        ))
                    : ""}
                </div>
                </InfiniteScroll> */}
                <div className='jumbotron'>
                <h1>Welcome to the Dashboard!</h1>
                </div>
                
                </div>
                <div className="body"></div>
                <div className="footer"></div>
            </div>
        );
    }
}

ReactDOM.render(<Collage />, document.getElementById("root"));
export default Home;