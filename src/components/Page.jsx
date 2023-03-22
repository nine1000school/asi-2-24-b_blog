import clsx from "clsx"

const { default: Link } = require("@/components/Link.jsx")

const Page = (props) => {
  const { children, className, noSpacing = false, title } = props

  return (
    <main className="flex flex-col">
      <header className="border-b border-b-neutral-300 p-2">
        <div className="mx-auto flex items-center justify-between md:max-w-4xl">
          <Link className="text-xl font-bold" href="/">
            My BLOG
          </Link>
          <nav>
            <ul className="flex items-center gap-2">
              <li>
                <Link href="/sign-in">Sign in</Link>
              </li>
              <li>
                <Link href="/sign-up">Sign up</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section>
        <div
          className={clsx(
            "mx-auto mt-8 md:max-w-4xl",
            {
              "flex flex-col gap-2": !noSpacing,
            },
            className
          )}
        >
          {title && <h1 className="mb-4 text-2xl font-semibold">{title}</h1>}
          {children}
        </div>
      </section>
    </main>
  )
}

export default Page
