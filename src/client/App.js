import React, { useState } from "react";
import "../../assets/css/style.css";
import { Helmet } from 'react-helmet'

const initialPosts = [
  {
    id: 2,
    text: "Loren ipsum",
    user: {
      avatar:
        "/uploads/avatar1.png",
      username: "Test user",
    },
  },
  {
    id: 1,
    text: "Lorem ipsum",
    user: {
      avatar:
        "/uploads/avatar2.png",
      username: "Test User 2",
    },
  },
];

const App = () => {
  const [posts, setPost] = useState(initialPosts);
  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPost = {
        id: posts.length + 1,
        text: postContent,
        user: {
            avatar: '/uploads/avatar1.png',
            username: 'Fake user'
        }
    }
    setPost([newPost, ...posts]);
    setPostContent('')
  }
  return (
    <div className="container">
        <Helmet>
            <title>GraphBook - Feed</title>
            <meta name="description" content="Newsfeed of all your friends" />
        </Helmet>
      <div className="postForm">
        <form onSubmit={handleSubmit}>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Write your post"
          />
          <input type="submit" value="submit" />
        </form>
      </div>
      <div className="feed">
        {initialPosts.map((post, i) => (
          <div key={post.id} className="post">
            <div className="header">
              <img src={post.user.avatar} />
              <h2>{post.user.username}</h2>
            </div>
            <p className="content">{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
