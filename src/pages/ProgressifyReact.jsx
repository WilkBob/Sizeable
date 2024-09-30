import { Link } from "react-router-dom";
import { FaGithub, FaNpm } from "react-icons/fa";
import ProgressifyReactHelmet from "./Helmets/ProgressifyReactHelmet";
import CodeBlock from "../components/progressifyreact/CodeBlock";

import FullUsage from "../components/FullUsage";
import APIReference from "../components/progressifyreact/APIReference";
import Features from "../components/progressifyreact/Features";

const ProgressifyReact = () => {
  return (
    <div className="flex flex-col container mx-auto max-w-full md:max-w-6xl my-4 px-4">
      <ProgressifyReactHelmet />
      <header className="text-center mb-12">
        <h1 className="text-4xl font-mono text-rose-400 mb-4">
          progressify-react
        </h1>
        <p className="text-xl">
          Enhance your React app with smooth, progressive image loading
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://www.npmjs.com/package/progressify-react"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-400 flex items-center gap-2 px-4 py-2 border border-rose-400 rounded hover:text-rose-600 hover:border-rose-600 transition duration-300"
          >
            <FaNpm size={24} />
            <span className="text-lg font-semibold">NPM</span>
          </a>
          <a
            href="https://github.com/wilkbob/progressify-react"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-400 flex items-center gap-2 px-4 py-2 border border-rose-400 rounded hover:text-rose-600 hover:border-rose-600 transition duration-300"
          >
            <FaGithub size={24} />
            <span className="text-lg font-semibold">GitHub</span>
          </a>
        </div>
      </header>
      <Features />
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Requirements</h2>
        <ul className="list-disc pl-6">
          <li className="text-lg">
            A directory of images processed with
            <Link
              to="/progressify"
              className="text-lime-300 hover:underline ml-2"
            >
              Progressify
            </Link>
          </li>
          <li className="text-lg">
            A React application with version 18.0 or higher
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Installation</h2>
        <CodeBlock code="npm install progressify-react" />
      </section>
      <FullUsage />
      <APIReference />
    </div>
  );
};

export default ProgressifyReact;
