const TwitterModule = () => {
  let _posts = [
    {
      text: 'First post!🐱‍🏍',
      id: 'p1',
      comments: [
        { id: 'c1', text: 'First comment on first post!' },
        { id: 'c2', text: 'Second comment on first post!!' },
        { id: 'c3', text: 'Third comment on first post!!!' },
      ],
    },
    {
      text: 'Second Post✌',
      id: 'p2',
      comments: [
        {
          id: 'c4',
          text: "Don't wory second poster, you'll be first one day.😛",
        },
        { id: 'c5', text: 'Yeah, believe in yourself!' },
        { id: 'c6', text: 'Haha 🤣second place what a joke.' },
      ],
    },
  ];

  //managing unique IDs for comments and posts
  let lastPostId = 'p2';

  const createNewPostId = () => {
    lastPostId = `p${parseInt(lastPostId[1]) + 1}`;
    return lastPostId;
  };

  let lastCommentId = 'c6';
  const createNewCommentId = () => {
    lastCommentId = `c${parseInt(lastCommentId[1]) + 1}`;
    return lastPostId;
  };

  //NOT IN USE
  // const postIdCounter = () => {
  //   return _posts.length;
  // };

  // const commentIdCounter = () => {
  //   let counter = 0;
  //   for (const post of _posts) {
  //     counter += post.comments.length;
  //   }
  //   return counter;
  // };

  const getPosts = () => {
    return _posts;
  };

  const addPost = (text) => {
    newId = createNewPostId();
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
        newId = createNewCommentId();
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
    // postIdCounter: postIdCounter,
    // commentIdCounter: commentIdCounter,
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
};
