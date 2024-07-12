"use client";

import { editSnippet } from "@/actions";
import { useState } from "react";

export default function SnippetEditForm({ snippet, action }) {

  const [title, setTitle] = useState(snippet.title)
  const [code, setCode] = useState(snippet.code)

  const editSnippetAction = editSnippet.bind(null, snippet.id)

  return (
    <form class="max-w-sm mx-auto" action={editSnippetAction}>
        <div class="mb-5">
          <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:text-dark-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div class="mb-5">
          <label for="code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Code</label>
          <textarea id="code" onChange={(e) => setCode(e.target.value)} name="code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:text-dark-500 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {code}
          </textarea>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
      </form>
  )
}
