import AppContext from "@/components/AppContext.jsx"
import Page from "@/components/Page.jsx"
import { useContext, useEffect, useState } from "react"

const Home = () => {
  const [posts, setPosts] = useState([])
  const { api } = useContext(AppContext)

  useEffect(() => {
    ;(async () => {
      const {
        data: { result },
      } = await api.get("/posts")

      setPosts(result)
    })()
  })

  return (
    <Page title="Welcome to my blog!">
      {posts.map((post) => (
        <p key={post._id}>{post.title}</p>
      ))}
    </Page>
  )
}

export default Home
