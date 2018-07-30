const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./post.schema');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true,'Name is Required.'],
        validate:{
            validator:(name)=>name.length >2,
            message:'Name must be longer than 2 character'
        }
    },
    likes: Number,
    // postCount: Number,(Virtual Property that we will define on the fly)
    posts: [PostSchema]
});

UserSchema.virtual('postCount').get(function(){
    console.log('Inside the Virtual Function');
    return this.posts.length;
});

const User = mongoose.model('user', UserSchema);

module.exports = User;

`SubDocument is when you embeded different schema to other schema with out
creating the separate model for that schema`