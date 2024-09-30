import { FaFile, FaFolder } from "react-icons/fa";

const FullUsage = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Usage</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-rose-400">
            ImageProvider
          </h3>
          <div className="block bg-rose-200/20 border-2 p-4 rounded-md overflow-x-auto shadow-lg">
            <pre>
              <code>
                <span className="text-teal-300">import</span> React{" "}
                <span className="text-teal-300">from</span>{" "}
                <span className="text-lime-300">&apos;react&apos;</span>;
                <br />
                <span className="text-teal-300">import</span> {"{"}{" "}
                ImageProvider {"}"} <span className="text-teal-300">from</span>{" "}
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
                <span className="text-teal-300">const</span> {`Main = () => (`}
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
          <div className="block bg-rose-200/20 border-2 p-4 rounded-md overflow-x-auto shadow-lg">
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
                <span className="text-lime-300">&quot;any-old-class&quot;</span>
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

        <div className="mt-8 p-4 border-2 bg-rose-200/20 rounded-md">
          <h3 className="text-xl font-semibold mb-2 text-rose-400">
            Important
          </h3>
          <p>
            Ensure that your <code>public</code> or base directory contains the
            following structure:
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
  );
};

export default FullUsage;
