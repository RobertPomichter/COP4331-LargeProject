const _ = require('lodash');
const formidable = require('formidable');
const fs = require('fs');
const Post = require('../models/post');

// function to get all the posts
exports.getPosts = (req, res) => {
    const posts = Post.find()
        .populate("postedBy", "_id name")
        .select("_id title body")
        .then( posts => res.json({
            posts
        }))
        .catch( err => console.log(err));
};

// function to create a post
exports.createPost = (req, res, next) => {
    
    // create the from using formidable method
    let form = new formidable.IncomingForm();

    // keep the extensions (e.g., .png, .jpeg, etc.) 
    form.keepExtensions = true;

    // parse the form
    form.parse(req, (err, fields, files) => {

        // handle any errors
        if(err){
           return res.status(400).json({ error: "Image failed to upload."});
        } 

        // create the post from fields in the request
        let post = new Post(fields);

        // scrub the salt and hashed password
        req.profile.hashed_password = undefined;
        req.profile.salt = undefined;

        // add the user as the author of the post
        post.postedBy = req.profile;

        // if there is a photo in the file 
        if(files.photo){
           // add the photo to the post object
           post.photo.data = fs.readFileSync(files.photo.path);
           post.photo.contentType = files.photo.type;
        }

        // save the post to the db
        post.save( (err, result) => {
            // handel any errors
            if(err){
                return res.status(400).json({
                    error: err
                });
            }

            // otherwise return success and send json object
            res.json( result );
        });
    });
};

// function to get all posts by a single user
exports.postsByUser = (req, res) => {
    Post.find({postedBy: req.profile._id})
        .populate("postedBy", "_id name")
        .sort("_created")
        .exec( (err, posts) => {
            // handle errors if any
            if(err){
               return res.status(400).json({ 
                    error: "We didn't find any posts by that user."
                });
            }

            // otherwise send the posts as json
            res.json(posts);
        });

}

// function to get post by ID
exports.postById = (req, res, next, id) => {
    Post.findById(id)
    .populate("postedBy", "_id name")
    .exec( (err, post) => {
        // handle any errors
        if(err | !post){
            return res.status(400).json({
                error: err
            });
        }

        // otherwise add the post to the request body
        req.post = post;

        // go to next
        next();
    });
};

exports.isPoster = (req, res, next) => {
    // if there is a post, auth and the poster id is the same as auth id
    let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id;

    // if user is not the poster
    if(!isPoster){
        return res.status(403).json({
            error: "It looks like you are not authorized to complete this action."
        });
    }

    // otherwise we go to next without issue
    next();
}

// function to update a post
exports.updatePost = (req, res, next) => {
    // get the user profile
    let post = req.post;

    // use lodash extend to mutate the object
    post = _.extend(post, req.body);
    
    // set the time of the update
    post.updated = Date.now();
    
    // save updated user to db
    post.save( err => {
        // handle any errors
        if(err){
            return res.status(400).json({
                error: err
            });
        }

        // if no errors send json response
        res.status(200).json({post});
    });
};

exports.deletePost = (req, res) => {
    // store post from request in local variable post
    let post = req.post;

    post.remove( (err, deletedPost) => {
        // handle any errors
        if(err){
            return res.status(400).json({
                error: "Sorry, we encountered an error trying to delete the post."
            });
        }

        // otherwise no errors occurred
        res.status(200).json({
            message: "Succesfully deleted the post.",
            deletedPost: deletedPost
        });
    });
}
