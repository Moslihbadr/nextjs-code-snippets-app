import Link from "next/link";

export default function NotFound() {
  return (
    <div class="flex items-center justify-center bg-white pt-40">
      <div class="flex flex-col">
                <div class="flex flex-col items-center">
          <div class="text-indigo-500 font-bold text-7xl">
            404
          </div>

          <div class="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            This page does not exist
          </div>

          <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
          <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
            Back to <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link href='/'>Home</Link></button>
          </div>
        </div>
        </div>
    </div>
  )
}
