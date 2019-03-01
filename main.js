
var mongoose=require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
var Post=mongoose.model('Post',schema,'post');

var post=new Post({
    title:'Post1',
    author:'Alejandra Gonzalez',
    body:'post1',
    comments:[{body:'post1',date:'2019-02-28'}],
    meta: {
        votes:2,
        favs:2
    }
});

Post.find(function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
});

Post.find({author: 'Alejandra Gonzalez'},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
});

post.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado");
    process.exit(0);
});


Post.update({_id:'5c76e35df3528b330ab5fc92'},{$set: {author: 'Luz Gonzalez'}},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
    process.exit(0);
});

Post.findByIdAndRemove({_id:'5c78be76aef91127a76d2513'}, function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(docs);
    process.exit(0);
});
