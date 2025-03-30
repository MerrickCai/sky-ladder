export default function Loading() {
  return (
    <div className="flex flex-col h-auto flex-grow items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Loading...</h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Please wait while we load the content for you.
      </p>
    </div>
  );
}
