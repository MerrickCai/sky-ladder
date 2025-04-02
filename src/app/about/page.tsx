export default async function About() {
  return (
    <div className="flex flex-col h-auto w-full flex-grow items-center justify-center px-4 py-4 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <h2 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 text-center">
        About Me
      </h2>
      <div className="p-8 border rounded-xl shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 max-w-4xl">
        <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          🛠 Tech Stack
        </h3>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>
            ⚡ <span className="font-bold">Next.js</span> – React framework for optimized
            performance
          </li>
          <li>
            ⚛️ <span className="font-bold">React</span> – Modern UI development with great DX
          </li>
          <li>
            🏗 <span className="font-bold">TypeScript</span> – Type-safe code for scalability and
            maintainability
          </li>
          <li>
            🎨 <span className="font-bold">Tailwind CSS</span> – Utility-first styling for
            flexibility and responsiveness
          </li>
          <li>
            ☁️ <span className="font-bold">Vercel</span> – Fast and reliable deployment
          </li>
        </ul>
      </div>
    </div>
  );
}
