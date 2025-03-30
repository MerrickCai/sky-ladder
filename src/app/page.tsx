export default async function Home() {
  return (
    <div className="flex flex-col h-auto flex-grow items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Hi, I&apos;m Merrick. Welcome to my personal blog where I share my
        thoughts on coding, technology, and more. Join me on my journey as I
        explore new ideas, share my experiences, and connect with like-minded
        individuals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        <section className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-600">
            I&apos;m a passionate developer with a love for learning and sharing
            knowledge. In this blog, you will find articles on various topics
            including programming, technology trends, and personal development.
          </p>
        </section>
        <section className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">My Projects</h2>
          <p className="text-gray-600">
            I enjoy working on a variety of projects, from web development to
            open-source contributions. Check out my latest projects and see what
            I&apos;m currently working on.
          </p>
        </section>
        <section className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-600">
            Feel free to reach out to me through the contact page. I&apos;m
            always open to discussing new ideas, collaborations, or just having
            a chat about technology.
          </p>
        </section>
      </div>
    </div>
  );
}
