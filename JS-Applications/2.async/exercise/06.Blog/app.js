function attachEvents() {
     document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
     document.getElementById('btnViewPost').addEventListener('click', displaySelectedPost);
}

attachEvents();

async function getPosts(){
    const url = 'http://localhost:3030/jsonstore/blog/posts';
    const response = await fetch(url);
    const data = await response.json();

    const select = document.getElementById('posts');
    Object.values(data).map(createOption).forEach(o => select.appendChild(o));
}
function createOption(post) {
    const result = document.createElement('option');
    result.textContent = post.title;
    result.value = post.id;

    return result;
}
function displaySelectedPost(){
    // Find selected option
    const postId = document.getElementById('posts').value;
    getCommentsById(postId);
    // Execute getCommentsById with id
}
async function getCommentsById(postId) {
    const commentsUl = document.getElementById('post-comments');
    commentsUl.innerHTML = '';

    const postUrl = 'http://localhost:3030/jsonstore/blog/posts/' + postId
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    // making a one promise for two request
    const [postResponse, commentsResponse] = await Promise.all([
        fetch(postUrl),
        fetch(commentsUrl)
    ]);

    const postData = await postResponse.json();

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    if (!commentsResponse.ok) {
        throw new Error('Failed to fetch comments');
    }
    const commentsData = await commentsResponse.json(); // Wait for the JSON data

    const comments = Object.values(commentsData).filter(c => c.postId == postId);
    comments.map(createComment).forEach(c => commentsUl.appendChild(c));
}

function createComment(comment){
    const result = document.createElement('li');
    result.textContent = comment.text;
    result.id = comment.id;

    return result;
}
