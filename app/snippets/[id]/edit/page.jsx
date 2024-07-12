import SnippetEditForm from "@/components/SnippetEditForm";
import { db } from "@/db"
import { notFound, redirect } from "next/navigation"

export default async function EditSnippetPage({ params }) {

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(params.id)
    }
  })

  if (!snippet) {
    return notFound()
  }


  return (
    <>
      <h1 className="flex justify-center dark:text-gray-600 font-bold text-lg m-6">Edit Snippet</h1>
      <SnippetEditForm snippet={snippet} />
      {/* <form class="max-w-sm mx-auto" action={editSnippet}>
        <div class="mb-5">
          <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Title</label>
          <input value={snippet.title} type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:text-dark-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div class="mb-5">
          <label for="code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Code</label>
          <textarea id="code" name="code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:text-dark-500 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {snippet.code}
          </textarea>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
      </form> */}
    </>
  )
}
