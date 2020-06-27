const Renderer = () => {
  const renderPosts = (posts) => {
    $('#posts').empty();
    for (const post of posts) {
      let postText = post.text;
      let postId = post.id;
      let comments = post.comments;
      let postTemplate = `<div class="post" data-id=${postId}> <div class="post-text">${postText} </div>
      <div class="comments"></div>
      <input class="comment-input" type="text" />
      <button class="comment-btn">Comment</button>
      <button class="delete">Delete Post</button>
    </div>`;

      $('#posts').append(postTemplate);

      for (const comment of comments) {
        let commentId = comment.id;
        let commentText = comment.text;
        let commentTemplate = `<div class="comment" data-id=${comment.id}>
        <span class="delete-comment">❌</span>
        <span class="comment-text">${comment.text}</span>
      </div>`;
        $(`[data-id=${postId}]`).find('.comments').append(commentTemplate);
      }
    }
  };

  return { renderPosts };
};
