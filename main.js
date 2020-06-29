const twitter = TwitterModule();
const renderer = Renderer();

renderer.renderPosts(twitter.getPosts());

//Add new post
$('#post').on('click', function () {
  let text = $('#input').val();
  if (text) {
    twitter.addPost(text);
    $('#input').val('');
    renderer.renderPosts(twitter.getPosts());
  }
});

//Remove post by ID
$('#posts').on('click', '.delete', function () {
  let id = $(this).closest('.post').data().id;
  twitter.removePost(id);
  renderer.renderPosts(twitter.getPosts());
});

//Add comment by ID
$('#posts').on('click', '.comment-btn', function () {
  let postId = $(this).closest('.post').data().id;
  let text = $(this).siblings('.comment-input').val();
  if (text) {
    twitter.addComment(text, postId);
    renderer.renderPosts(twitter.getPosts());
  }
});

//Remove Comment by ID
$('#posts').on('click', '.delete-comment', function () {
  let postId = $(this).closest('.post').data().id;
  let commentId = $(this).closest('.comment').data().id;
  twitter.removeComment(postId, commentId);
  renderer.renderPosts(twitter.getPosts());
});
