"use client";

import { createSnippet } from "@/actions";
import { useFormState } from 'react-dom';

export default function CreateSnippetPage() {
  const [formState, action] = useFormState(createSnippet, { message: '' })

  // const createSnippetAction = createSnippet.bind(null)

  return (
    <>
      <h1 className="flex justify-center dark:text-gray-600 font-bold text-lg m-6">Create a Snippet</h1>
      <form class="max-w-sm mx-auto" action={action}>
        <div class="mb-5">
          <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Title</label>
          <input type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:text-dark-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div class="mb-5">
          <label for="code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Code</label>
          <textarea id="code" name="code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:text-dark-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        {formState.message ? <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 light:bg-gray-800 dark:text-red-500" role="alert">
          <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            {formState.message}
          </div>
        </div> : null}
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
      </form>
    </>
  )
}
