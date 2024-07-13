import { deleteSnippet } from "@/actions"
import { db } from "@/db"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function SnippetPage({ params }) {

  await new Promise((res) => setTimeout(res, 3000))

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(params.id)
    }
  })

  if (!snippet) {
    return notFound()
  }

  const deleteSnippetAction = deleteSnippet.bind(null, params.id)

  return (
    <dl class="mt-6 max-w-sm mx-auto text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
      <div class="flex flex-col pb-3">
        <div className="flex">
          <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 mb-4">{snippet.title}</dt>
          <div className="">
            <Link href={`/snippets/${snippet.id}/edit`} class="inline-flex items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Edit
            </Link>
            <form action={deleteSnippetAction} class="inline-flex items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <button type="submit">Delete</button>
            </form>
          </div>
        </div>
        <dd class="text-lg font-semibold">
          <div class="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4">
            <div class="overflow-scroll max-h-full">
              <pre>
                <code id="code-block" class="text-sm text-gray-500 dark:text-gray-400 whitespace-pre">{snippet.code}</code>
              </pre>
            </div>
          </div>
        </dd>
      </div>
    </dl>
  )
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany()

  return snippets.map(snippet => {
    return {
      id: snippet.id.toString()
    }
  })
}