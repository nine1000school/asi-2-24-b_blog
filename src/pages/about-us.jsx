import Link from "@/components/Link.jsx"

const Home = () => {
  return (
    <main>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About us</Link>
        </li>
      </ul>
      <h1>About us</h1>
      <p>Best developer team ever!</p>
    </main>
  )
}

export default Home
