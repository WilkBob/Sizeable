import { Link } from "react-router-dom";
import { ImageProvider, ProgressiveImage } from "../assets/component";

const Home = () => {
  return (
    <ImageProvider>
      <div className="flex flex-col container mx-auto max-w-full md:max-w-5xl p-6">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Sizeable</h1>
          <p className="text-lg">
            Your one-stop solution for image resizing and optimization.
          </p>
        </header>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-6">
            <li>Quickly resize images to your desired dimensions.</li>
            <li>Convert images to WebP format for better performance.</li>
            <li>Progressive image loading for a smoother user experience.</li>
          </ul>
          <div className="my-[1000px]">
            <ProgressiveImage
              src="engagement2"
              alt="small image"
              placeholderClassName="blur-3xl"
              className="rounded-xl shadow-lg my-4 hover:scale-105 transition-all duration-300"
              lazy
            />
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              to="/resize"
              className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors duration-300 text-center"
            >
              Resize Images
            </Link>
            <Link
              to="/webp"
              className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors duration-300 text-center"
            >
              Convert to WebP
            </Link>
            <Link
              to="/progressify"
              className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors duration-300 text-center"
            >
              Progressive Loading
            </Link>
          </div>
        </section>
      </div>{" "}
    </ImageProvider>
  );
};

export default Home;
