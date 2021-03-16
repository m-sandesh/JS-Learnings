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

function createPost(newPost) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(newPost);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong.');
            }
        }, 2000);
    });
}

getPosts();
createPost({ Title: 'Post Four', Content: 'This is Post Four.' })
    .then(getPosts)
    .catch(err => console.log(err));

let examplePromise1 = Promise.resolve('I am a example for multi-promise.');
let examplePromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Ok Good!');
    setTimeout(reject, 2000, 'Ok Good!');
});

Promise.all([examplePromise1, examplePromise2]).then(value => console.log(value));