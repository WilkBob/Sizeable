import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const OtherTools = ({ location }) => {
  const tools = [
    {
      name: "Image Resizer",
      description: "Resize your images quickly and easily.",
      link: "/resize",
    },
    {
      name: "WebP Converter",
      description: "Convert images to WebP format.",
      link: "/webp",
    },
    {
      name: "Progressify",
      description: "Progressive Image Loading Tool.",
      link: "/progressify",
    },
  ];

  return (
    <div className="my-4">
      <h2 className="text-2xl font-semibold mb-4">Other Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => {
          if (tool.link === location.pathname) return null;
          return (
            <div
              key={tool.name}
              className="bg-rose-200/20 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className=" mb-4">{tool.description}</p>
              <Link
                to={tool.link}
                className="inline-block bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors duration-300"
              >
                Try {tool.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

OtherTools.propTypes = {
  location: PropTypes.object.isRequired,
};
