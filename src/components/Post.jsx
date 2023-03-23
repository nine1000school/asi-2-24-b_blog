import Link from "@/components/Link.jsx"
import clsx from "clsx"
import { Fragment } from "react"

const formatDate = (date) =>
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(date))

const Post = (props) => {
  const {
    summary = false,
    post: {
      _id,
      title,
      content,
      createdAt,
      updatedAt,
      author: { id: userId, firstName, lastName },
    },
  } = props

  return (
    <article className="flex flex-col gap-4">
      <header className="flex flex-col gap-1">
        <h1
          className={clsx({
            "text-4xl font-bold": !summary,
            "text-xl font-semibold": summary,
          })}
        >
          <Link className="text-indigo-900" href={`/posts/${_id}`}>
            {title}
          </Link>
        </h1>
        <p className="text-sm italic text-neutral-600">
          Posted on {formatDate(createdAt)}{" "}
          {createdAt !== updatedAt ? "(edited)" : ""} by{" "}
          <span>
            {firstName} {lastName}
          </span>
        </p>
      </header>
      <div className="flex flex-col gap-2">
        {summary
          ? `${content.split("\n")[0].slice(0, 100)}...`
          : content.split("\n\n").flatMap((paragraph, index) => (
              <p key={`${paragraph}${index}`}>
                {paragraph.split("\n").map((line, i) => (
                  <Fragment key={`${line}${i}`}>
                    {line}
                    <br />
                  </Fragment>
                ))}
              </p>
            ))}
      </div>
    </article>
  )
}

export default Post
