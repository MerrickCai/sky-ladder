import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col h-auto w-full flex-grow items-center justify-center px-4 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 text-center">
        Welcome to My Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        <section className="p-8 border rounded-xl shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I&apos;m a passionate developer with a love for learning and sharing knowledge. In this
            blog, you will find articles on various topics including programming, technology trends,
            and personal development.
          </p>
        </section>
        <section className="p-8 border rounded-xl shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            My Projects
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I enjoy working on a variety of projects, from web development to open-source
            contributions. Check out my latest projects and see what I&apos;m currently working on.
          </p>
        </section>
        <section className="p-8 border rounded-xl shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Feel free to reach out to me through the contact page. I&apos;m always open to
            discussing new ideas, collaborations, or just having a chat about technology.
          </p>
        </section>
        <section className="p-8 border rounded-xl shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Frontend Development Notes
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Explore my detailed notes on frontend development, where I document my learnings and
            best practices.
          </p>
          <Link
            href="https://merrickcai.notion.site/Frontend-Development-188e3a07cc988036a524c65fb43d2d06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:underline mt-4 block"
          >
            View Notes on Notion
          </Link>
        </section>
      </div>
    </div>
  );
}
