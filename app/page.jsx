import { db } from "@/db";
import Link from "next/link";

export default async function Home() {

  const snippets = await db.snippet.findMany()

  return (
    <div className="container px-10 mt-6">
      <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl py-4">
        <div className="me-48 flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap light:text-dark">Snippets</span>
        </div>
        <div class="flex items-center ms-48 space-x-6 rtl:space-x-reverse">
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link href='/snippets/new'>New Snippet</Link></button>
        </div>
      </div>
      {snippets.map(snippet => {
        return (
          <div key={snippet.id} class="mx-auto my-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
            <Link href={`/snippets/${snippet.id}`}>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-dark">{snippet.title}</h5>
            </Link>
            <Link href={`/snippets/${snippet.id}`} class="inline-flex items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              View
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
        )
      })
      }
    </div>
  );
}
