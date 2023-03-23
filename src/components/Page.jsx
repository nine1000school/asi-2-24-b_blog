import AppContext from "@/components/AppContext.jsx"
import Button from "@/components/Button.jsx"
import clsx from "clsx"
import { useContext } from "react"

const { default: Link } = require("@/components/Link.jsx")

const Page = (props) => {
  const { children, className, noSpacing = false, title } = props
  const {
    actions: { signOut },
    state: { session },
  } = useContext(AppContext)

  return (
    <main className="flex flex-col">
      <header className="border-b border-b-neutral-300 p-2">
        <div className="mx-auto flex items-center justify-between md:max-w-4xl">
          <Link className="text-xl font-bold" href="/">
            My BLOG
          </Link>
          <nav>
            <ul className="flex items-center gap-3">
              {session ? (
                <>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/posts/create">Add a post</Link>
                  </li>
                  <li>
                    <Button
                      variant="secondary"
                      size="inherit"
                      onClick={signOut}
                    >
                      Sign out
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/sign-in">Sign in</Link>
                  </li>
                  <li>
                    <Link href="/sign-up">Sign up</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <section>
        {title && (
          <h1 className="mb-2 mt-6 p-4 text-2xl font-semibold">{title}</h1>
        )}
        <div
          className={clsx(
            "mx-auto p-4 md:max-w-4xl lg:p-0",
            {
              "flex flex-col gap-2": !noSpacing,
            },
            className
          )}
        >
          {children}
        </div>
      </section>
    </main>
  )
}

export default Page
