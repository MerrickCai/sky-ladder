export default function Loading() {
  return (
    <div className="flex flex-col h-auto w-full flex-grow items-center justify-center px-4 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-black dark:text-white">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Loading...</h1>
      <p className="text-xl mb-8 text-center max-w-2xl text-black dark:text-white">
        Please wait while we load the content for you.
      </p>
    </div>
  );
}
