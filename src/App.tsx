import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

interface Post {
  id: number;
  title: string;
}

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState<Post[]>([])

  const getPosts = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/posts/index`)
    .then(r => {
      console.log('r.data:',r.data)
      setPosts(r.data.posts)
    }).catch(e => console.log(e))
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={getPosts}>Get Posts</button>
        <ul>
          {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
