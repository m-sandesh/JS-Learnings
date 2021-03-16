const posts = [
    { Title: 'Post One', Content: 'This is Post One.' },
    { Title: 'Post Tow', Content: 'This is Post Two.' },
    { Title: 'Post Three', Content: 'This is Post Three.' }
];

function getPosts() {
    setTimeout(() => {
        let printPost = '';
        posts.forEach((currentPost, index) => {
            printPost += `<li>${currentPost.Title}</li>`;
            document.body.innerHTML = printPost;
        });
    }, 1000);
}

function createPost(newPost, callback) {
    setTimeout(() => {
        posts.push(newPost);
        callback();
    }, 2000)
}

// getPosts(); //This outputs only post 1 2 3 as post 4 is created after call and after 2 seconds timeout. To fix this callbacks are used to call back a function if something would be missed later.

createPost({ Title: 'Post Four', Content: 'This is Post Four.' }, getPosts); //callbacks are without parenthesis