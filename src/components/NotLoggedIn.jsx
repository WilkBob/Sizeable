import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { BiError } from "react-icons/bi";

const NotLoggedIn = () => {
  const { currentUser, login } = useContext(AuthContext);

  if (currentUser) {
    return null;
  }

  return (
    <div className="flex flex-col  text-white p-2">
      <div className="my-4 p-2">
        <hr className="mb-4" />
        <h2 className="text-2xl font-bold mb-4 text-rose-400">
          <BiError className="inline-block mr-1 text-4xl text-rose-400" />
          In order to make this service free, users must sign in to process
          multiple files.
        </h2>
        <p className="mb-6">
          Our auth system stores no information and uses your Google account.
          Please sign in.
        </p>
        <button
          onClick={login}
          className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default NotLoggedIn;
