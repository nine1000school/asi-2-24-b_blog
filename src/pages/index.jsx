import AppContext from "@/components/AppContext.jsx"
import Page from "@/components/Page.jsx"
import Post from "@/components/Post.jsx"
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
  }, [api])

  return (
    <Page title="Welcome to my blog!" className="gap-12">
      {posts.map((post) => (
        <Post key={post._id} post={post} summary />
      ))}
    </Page>
  )
}

export default Home
