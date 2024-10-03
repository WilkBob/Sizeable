import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProcessForm from "../components/tools/ProcessForm";

const Tools = () => {
  const { tool } = useParams();
  const navigate = useNavigate();
  const tools = [
    {
      name: "Resize",
      value: "resize",
      subtext: "Change image dimensions",
    },
    { name: "WebP", value: "webp", subtext: "Convert images to WebP format" },
    {
      name: "Progressify✨",
      value: "progressify",
      subtext: "Progressive Images for your React app",
    },
  ];
  const [selectedTool, setSelectedTool] = useState("resize");

  useEffect(() => {
    const tools = [
      {
        name: "Resize",
        value: "resize",
        subtext: "Change image dimensions",
      },
      { name: "WebP", value: "webp", subtext: "Convert images to WebP format" },
      {
        name: "Progressify",
        value: "progressify",
        subtext: "Progressive Images for your React app",
      },
    ];
    const validTool = tools.find((t) => t.value === tool);
    if (validTool) {
      setSelectedTool(validTool.value);
    } else {
      navigate(`/tools/${tools[0].value}`);
    }
  }, [tool, navigate]);

  const handleToolChange = (value) => {
    setSelectedTool(value);
    navigate(`/tools/${value}`);
  };

  return (
    <div className="text-lg flex flex-col container mx-auto max-w-full md:max-w-6xl md:p-6">
      <header className="text-center mb-12 pt-16 min-h-[20vh] flex flex-col justify-center">
        <h1 className="text-6xl font-bold mb-4">
          Welcome to <span className="text-rose-400">Sizeable</span>
        </h1>
        <p className="text-2xl">
          Your one-stop solution for image resizing, optimization, and
          progressive loading.
        </p>
      </header>

      <div className="flex space-x-1 rounded-xl bg-rose-200/20 p-1 mb-6">
        {tools.map((tool) => (
          <button
            key={tool.value}
            className={`w-full rounded-lg py-4 text-sm font-medium leading-5
                       focus:outline-none focus:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-rose-400
                       ${
                         selectedTool === tool.value
                           ? "bg-rose-200/20 shadow"
                           : "hover:bg-white/[0.12] hover:text-white"
                       }`}
            onClick={() => handleToolChange(tool.value)}
          >
            <div className="text-lg">{tool.name}</div>
            <div className="text-xs text-gray-400">{tool.subtext}</div>
          </button>
        ))}
      </div>

      <div key={selectedTool}>
        <ProcessForm processToUse={selectedTool} />
      </div>
    </div>
  );
};

export default Tools;
