import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import ProcessForm from "../components/tools/ProcessForm";
import { AuthContext } from "../components/context/AuthContext";
import { IoInformationCircle } from "react-icons/io5";
import { CgGoogle } from "react-icons/cg";

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
  const { currentUser, login } = useContext(AuthContext);
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

      <div className="flex rounded-xl bg-rose-200/20 mb-6">
        {tools.map((tool) => (
          <NavLink
            key={tool.value + "x nav"}
            to={`/tools/${tool.value}`}
            className={({ isActive }) =>
              `block text-center w-full first:rounded-l-xl last:rounded-r-xl py-4 text-sm font-medium leading-5 transition-all duration-150
         
             ${
               isActive
                 ? "bg-rose-200/20 shadow-lg"
                 : "hover:bg-white/[0.12] hover:text-white"
             }`
            }
          >
            <div className="text-lg">{tool.name}</div>
            <div className="text-xs text-gray-400">{tool.subtext}</div>
          </NavLink>
        ))}
      </div>
      {!currentUser && (
        <div className="bg-rose-200/20 border-l-4 border-rose-500  p-4 rounded-md flex items-center space-x-4 mb-6">
          <IoInformationCircle className="text-2xl text-rose-500" />
          <div>
            <h3 className="text-lg font-semibold text-rose-500">
              You aren&apos;t logged in!
            </h3>
            <p className="text-sm">
              To keep this service free, users must login to process multiple
              images at once. Currently, you can only process one image at a
              time.
            </p>
          </div>
          <button
            onClick={login}
            className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors duration-300 flex items-center space-x-2"
          >
            <CgGoogle className="text-lg" />
            <span>Login with Google</span>
          </button>
        </div>
      )}
      <div key={selectedTool}>
        <ProcessForm processToUse={selectedTool} />
      </div>
    </div>
  );
};

export default Tools;
