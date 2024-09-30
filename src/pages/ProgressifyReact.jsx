import { BiChevronRight, BiCode } from "react-icons/bi";
import { FiZap } from "react-icons/fi";
import { ImImage } from "react-icons/im";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaGithub, FaNpm, FaFolder, FaFile } from "react-icons/fa";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-rose-200/20 p-6 rounded-lg shadow-md">
    <Icon className="text-rose-400 w-12 h-12 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-lg">{description}</p>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const CodeBlock = ({ code }) => (
  <pre className="bg-rose-950/50 border-white border-2 text-lime-300 p-4 rounded-md overflow-x-auto">
    <code>{code}</code>
  </pre>
);

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
};

const ProgressifyReact = () => {
  return (
    <div className="flex flex-col container mx-auto max-w-full md:max-w-6xl my-4 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-rose-400 mb-4">
          Progressify React
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

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            icon={FiZap}
            title="Progressive Loading"
            description="Improve user experience with smooth image loading transitions"
          />
          <FeatureCard
            icon={ImImage}
            title="Lazy Loading"
            description="Optimize performance by loading images only when needed"
          />
          <FeatureCard
            icon={BiCode}
            title="Easy Integration"
            description="Simple to integrate with existing React applications"
          />
          <FeatureCard
            icon={BiChevronRight}
            title="Customizable"
            description="Flexible API to fit your specific needs"
          />
        </div>
      </section>
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

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Usage</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-rose-400">
              ImageProvider
            </h3>
            <div className="block bg-rose-950/50 border-2 p-4 rounded-md overflow-x-auto shadow-lg">
              <pre>
                <code>
                  <span className="text-teal-300">import</span> React{" "}
                  <span className="text-teal-300">from</span>{" "}
                  <span className="text-lime-300">&apos;react&apos;</span>;
                  <br />
                  <span className="text-teal-300">import</span> {"{"}{" "}
                  ImageProvider {"}"}{" "}
                  <span className="text-teal-300">from</span>{" "}
                  <span className="text-lime-300">
                    &apos;progressify-react&apos;
                  </span>
                  ;
                  <br />
                  <span className="text-teal-300">import</span> App{" "}
                  <span className="text-teal-300">from</span>{" "}
                  <span className="text-lime-300">&apos;./App&apos;</span>;
                  <br />
                  <br />
                  <span className="text-teal-300">const</span>{" "}
                  {`Main = () => (`}
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-teal-300">&lt;ImageProvider&gt;</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-teal-300">&lt;App /&gt;</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-teal-300">&lt;/ImageProvider&gt;</span>
                  <br />
                  {`);`}
                  <br />
                  <br />
                  <span className="text-teal-300">export default</span> Main;
                </code>
              </pre>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-rose-400">
              ProgressiveImage
            </h3>
            <div className="block bg-rose-950/50 border-2 p-4 rounded-md overflow-x-auto shadow-lg">
              <pre>
                <code>
                  <span className="text-teal-300">import</span> React{" "}
                  <span className="text-teal-300">from</span>{" "}
                  <span className="text-lime-300">&apos;react&apos;</span>;
                  <br />
                  <span className="text-teal-300">import</span> {"{"}{" "}
                  ProgressiveImage {"}"}{" "}
                  <span className="text-teal-300">from</span>{" "}
                  <span className="text-lime-300">
                    &apos;progressify-react&apos;
                  </span>
                  ;
                  <br />
                  <br />
                  <span className="text-teal-300">const</span> YourComponent =
                  {`() => (`}
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-teal-300">&lt;ProgressiveImage</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">src</span>=
                  <span className="text-lime-300">&quot;image-name&quot;</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">placeholderClassName</span>=
                  <span className="text-lime-300">&quot;blur-lg&quot;</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">className</span>=
                  <span className="text-lime-300">
                    &quot;any-old-class&quot;
                  </span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">alt</span>=
                  <span className="text-lime-300">
                    &quot;Description of the image&quot;
                  </span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">thumb</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-yellow-300">lazy</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-teal-300">/&gt;</span>
                  <br />
                  {`);`}
                  <br />
                  <br />
                  <span className="text-teal-300">export default</span>{" "}
                  YourComponent;
                </code>
              </pre>
            </div>
          </div>

          <div className="mt-8 p-4 bg-rose-200/20 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-rose-400">
              Important
            </h3>
            <p>
              Ensure that your <code>public</code> or base directory contains
              the following structure:
            </p>
            <div className="mt-4 ml-4">
              <div className="flex items-center">
                <FaFolder className="text-yellow-500 mr-2" />
                <span className="font-semibold">public</span>
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  <FaFolder className="text-yellow-500 mr-2" />
                  <span className="font-semibold">images</span>
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <FaFile className="text-gray-500 mr-2" />
                    <code>image.webp</code>
                  </div>
                  <div className="flex items-center">
                    <FaFile className="text-gray-500 mr-2" />
                    <code>image_tiny.webp</code>
                  </div>
                  <div className="flex items-center">
                    <FaFile className="text-gray-500 mr-2" />
                    <code>image_thumb.webp</code>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <FaFile className="text-gray-500 mr-2" />
                  <code>index.json</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">API Reference</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-rose-950/50">
            <tr>
              <th className="border border-gray-300 p-2">Prop</th>
              <th className="border border-gray-300 p-2">Type</th>
              <th className="border border-gray-300 p-2">Default</th>
              <th className="border border-gray-300 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">src</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">(required)</td>
              <td className="border border-gray-300 p-2">
                The source name of the image
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">
                className
              </td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">{`''`}</td>
              <td className="border border-gray-300 p-2">
                CSS class for the image element
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">
                placeholderClassName
              </td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">{`''`}</td>
              <td className="border border-gray-300 p-2">
                CSS class for the placeholder
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">alt</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">{`''`}</td>
              <td className="border border-gray-300 p-2">
                Alternative text for the image
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">
                thumb
              </td>
              <td className="border border-gray-300 p-2">boolean</td>
              <td className="border border-gray-300 p-2">false</td>
              <td className="border border-gray-300 p-2">
                Use thumbnail version of the image
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">lazy</td>
              <td className="border border-gray-300 p-2">boolean</td>
              <td className="border border-gray-300 p-2">false</td>
              <td className="border border-gray-300 p-2">
                Enable lazy loading for the image
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ProgressifyReact;
