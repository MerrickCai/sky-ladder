export default async function About() {
  return (
    <div className="flex flex-col h-auto flex-grow items-center justify-center px-4">
      <h2 className="text-2xl font-semibold text-gray-700">🛠 Tech Stack</h2>
      <ul>
        <li>
          ⚡ <span className="font-bold">Next.js</span> – React framework for optimized performance
        </li>
        <li>
          ⚛️ <span className="font-bold">React</span> – Modern UI development with great DX
        </li>
        <li>
          🏗 <span className="font-bold">TypeScript</span> – Type-safe code for scalability and
          maintainability
        </li>
        <li>
          🎨 <span className="font-bold">Tailwind CSS</span> – Utility-first styling for flexibility
          and responsiveness
        </li>
        <li>
          ☁️ <span className="font-bold">Vercel</span> – Fast and reliable deployment
        </li>
      </ul>
    </div>
  );
}
