const TwitterModule = () => {
  let _posts = [
    {
      text: 'First post!',
      id: 'p1',
      comments: [
        { id: 'c1', text: 'First comment on first post!' },
        { id: 'c2', text: 'Second comment on first post!!' },
        { id: 'c3', text: 'Third comment on first post!!!' },
      ],
    },
    {
      text: 'Aw man, I wanted to be first',
      id: 'p2',
      comments: [
        {
          id: 'c4',
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: 'c5', text: 'Yeah, believe in yourself!' },
        { id: 'c6', text: 'Haha second place what a joke.' },
      ],
    },
  ];

  let postIdCount = 2;
  let commentIdCount = 6;

  const postIdCounter = () => {
    postIdCount++;
    return `p${postIdCount}`;
  };

  const commentIdCounter = () => {
    commentIdCount++;
    return `c${commentIdCount}`;
  };

  const getPosts = () => {
    return _posts;
  };

  const addPost = (text) => {
    newId = postIdCounter();
    newPost = {
      text: text,
      id: newId,
      comments: [],
    };
    _posts.push(newPost);
  };

  const removePost = (postId) => {
    for (const post of _posts) {
      if (post.id === postId) {
        let index = _posts.indexOf(post);
        _posts.splice(index, 1);
        break;
      }
    }
  };

  const addComment = (text, postId) => {
    for (const post of _posts) {
      if (post.id === postId) {
        newId = commentIdCounter();
        newComment = {
          id: newId,
          text: text,
        };
        post.comments.push(newComment);
        break;
      }
    }
  };

  const removeComment = (postId, commentId) => {
    for (const post of _posts) {
      if (post.id === postId) {
        for (const comment of post.comments) {
          if (comment.id === commentId) {
            let index = post.comments.indexOf(comment);
            post.comments.splice(index, 1);
            break;
          }
        }
      }
    }
  };

  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
};
