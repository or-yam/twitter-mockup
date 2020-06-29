const twitter = TwitterModule();
const renderer = Renderer();

renderer.renderPosts(twitter.getPosts());


$('#post').on('click', function () {
  let text = $('#input').val();
  if (text) {
    twitter.addPost(text);
    renderer.renderPosts(twitter.getPosts());
  }
});


$('#posts').on('click', '.delete', function () {
  let id = $(this).closest('.post').data().id;
  twitter.removePost(id);
  renderer.renderPosts(twitter.getPosts());
});


$('#posts').on('click', '.delete-comment', function () {
  let postId = $(this).closest('.post').data().id;
  let commentId = $(this).closest('.comment').data().id;
  twitter.removeComment(postId, commentId);
  renderer.renderPosts(twitter.getPosts());
});


$('#posts').on('click', '.comment-btn', function () {
  let postId = $(this).closest('.post').data().id;
  let text = $(this).siblings('.comment-input').val();
  twitter.addComment(text, postId);
  renderer.renderPosts(twitter.getPosts());
});
