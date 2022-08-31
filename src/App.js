import React, { useState, useEffect } from "react";
import parse from "html-react-parser"

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const url = "http://localhost/wp-json/wp/v2/posts"

    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  console.log(posts)

  return (
    <div>
      {posts.length > 0 && posts.map(post => {
        return <div key={post.id}>
          <h1>{post.title.rendered}</h1>
          {parse(post.content.rendered)}
          <p>{post.date.split("T")[0]} {post.date.split("T")[1]}</p>
        </div>
      })}
    </div>
  );
}

export default App;
