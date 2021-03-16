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

async function init() {
    await createPost({ Title: 'Post Four', Content: 'This is Post Four.' });
    getPosts();
}
init();

//AsyncAwait with Fetch
async function fetchAllPosts() {
    let jsonData = await fetch('https://jsonplaceholder.typicode.com/users');   //Example URL of JSON API
    let postData = await jsonData.json();   //to convert raw object data into JSON format
    localStorage.setItem('JSONSample', JSON.stringify(postData));
    console.log(postData);
}
fetchAllPosts();