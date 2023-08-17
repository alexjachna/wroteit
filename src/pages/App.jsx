import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Community from "./Community";
import PostPage from "./PostPage";
import { useState, useEffect } from "react";
import EditProfile from "./EditProfile";

function App() {
  const [username, setUsername] = useState(() => {
    const currentUsername = localStorage.getItem("username");
    if (currentUsername == null) {
      return "";
    } else {
      return currentUsername;
    }
  });
  const [bio, setBio] = useState("Wroteit User");
  const [posts, setPosts] = useState(() => {
    const localVal = sessionStorage.getItem("items");
    if (localVal == null) {
      return [
        {
          username: "alexjachna123",
          id: crypto.randomUUID(),
          community: "react",
          title: "hello world",
          desc: "hello world, this is react.",
          likes: 36,
          liked: false,
          disliked: false,
          comments: [
            {
              id: crypto.randomUUID(),
              username: "alexjachna123",
              message: "hello there",
            },
            {
              id: crypto.randomUUID(),
              username: "dantheman45",
              message: "this is awesome.",
            },
          ],
        },
        {
          username: "krazykoala45",
          id: crypto.randomUUID(),
          community: "theworld",
          title: "This is my World.",
          desc: "Hello world, the world is mine!!!!",
          likes: 122,
          liked: false,
          disliked: false,
          comments: [
            {
              id: crypto.randomUUID(),
              username: "alexjachna123",
              message: "hello there",
            },
          ],
        },
      ];
    }

    return JSON.parse(localVal);
  });

  function handleVote(id, num, ifLiked, setLiked, setDisliked) {
    setPosts((currentPosts) => {
      return currentPosts.map((post) => {
        if (post.id === id) {
          if (ifLiked) {
            return {
              ...post,
              likes: post.likes + num,
              liked: setLiked,
              disliked: setDisliked,
            };
          } else {
            return {
              ...post,
              likes: post.likes - num,
              liked: setLiked,
              disliked: setDisliked,
            };
          }
        }
        return post;
      });
    });
  }

  function addComment(id, msg) {
    setPosts((currentPosts) => {
      return currentPosts.map((post) => {
        if (post.id === id) {
          console.log(post.comments);
          return {
            ...post,
            comments: [
              {
                id: crypto.randomUUID(),
                username: username,
                message: msg,
              },
              ...post.comments,
            ],
          };
        }
        return post;
      });
    });
  }

  // Save username & posts on refresh
  useEffect(() => {
    sessionStorage.setItem("items", JSON.stringify(posts));
    localStorage.setItem("username", username);
  }, []);

  // Reset all posts' liked and disliked flags
  useEffect(() => {
    setPosts((currentPosts) => {
      return currentPosts.map((post) => {
        return { ...post, liked: false, disliked: false };
      });
    });
  }, [username]);

  return (
    <div className="w-full h-screen flex flex-col">
      <Router>
        <Routes>
          <Route path="/" element={<Login setUsername={setUsername} />} />
          <Route
            path="/Home"
            element={
              <Home
                username={username}
                bio={bio}
                posts={posts}
                setPosts={setPosts}
                handleVote={handleVote}
              />
            }
          />
          <Route
            path="/Profile"
            element={
              <Profile
                username={username}
                bio={bio}
                posts={posts}
                handleVote={handleVote}
              />
            }
          />
          <Route
            path="/EditProfile"
            element={
              <EditProfile
                username={username}
                setUsername={setUsername}
                bio={bio}
                setBio={setBio}
              />
            }
          />
          <Route
            path="/:community"
            element={
              <Community
                username={username}
                bio={bio}
                posts={posts}
                setPosts={setPosts}
                handleVote={handleVote}
              />
            }
          />
          <Route
            path="/post/:id"
            element={
              <PostPage
                username={username}
                bio={bio}
                posts={posts}
                addComment={addComment}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
