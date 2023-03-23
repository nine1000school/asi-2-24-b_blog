import AppContext from "@/components/AppContext.jsx"
import Loader from "@/components/Loader.jsx"
import Page from "@/components/Page.jsx"
import Post from "@/components/Post.jsx"
import { useContext, useEffect, useState } from "react"

export const getServerSideProps = async ({ params }) => ({
  props: {
    params: {
      postId: params.postId,
    },
  },
})

const PostPage = (props) => {
  const {
    params: { postId },
  } = props
  const [post, setPost] = useState(null)
  const { api } = useContext(AppContext)

  useEffect(() => {
    ;(async () => {
      const {
        data: {
          result: [post],
        },
      } = await api.get(`/posts/${postId}`)

      setPost(post)
    })()
  }, [api, postId])

  if (!post) {
    return <Loader />
  }

  return (
    <Page>
      <Post post={post} />
    </Page>
  )
}

export default PostPage
