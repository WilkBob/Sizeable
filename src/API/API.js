import { auth } from "./Firebase";
import { extractFilename } from "../utils/extractFilename";
// const baseURL = "https://sizeable-437121.uc.r.appspot.com/";
const baseURL = "http://127.0.0.1:8000/";

// query = {include_thumbnails: true, thumbnails_size: 300}

const processImagesAPI = async (type, images, query) => {
  if (images.length === 0) {
    return;
  }
  console.log(images, "API FILE");
  const formData = new FormData();
  if (images.length === 1) {
    formData.append("file", images[0]); // Ensure the key matches the server's expectation
  } else {
    images.forEach((image) => {
      formData.append("files", image); // Ensure the key matches the server's expectation
    });
  }

  const endpoint =
    type === "progressify"
      ? `/component`
      : images.length === 1
      ? `${type}/`
      : `${type}-multiple/`;
  console.log("API FILE", "got endpoint", endpoint);

  try {
    const url = new URL(`${baseURL}${endpoint}`);
    console.log("API FILE", "got url", url);

    if (query) {
      Object.keys(query).forEach((key) => {
        console.log(`Appending query param: ${key}=${query[key]}`);
        url.searchParams.append(key, query[key]);
      });
    }

    console.log("API FILE", "final url with query params", url);

    const headers = {};
    if (images.length > 1) {
      const user = auth.currentUser;
      const token = user ? await user.getIdToken() : null;
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    }
    console.log("boutta fetch: " + url);
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      headers,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network response was not ok: ${response.status} - ${errorText}`
      );
    }
    const filename = extractFilename(
      response.headers.get("content-disposition")
    );

    // The API returns an image, or a ZIP file containing processed images depending on the number of images
    const blob = await response.blob();
    const zipUrl = URL.createObjectURL(blob);

    return [zipUrl, filename];
  } catch (error) {
    console.error("Error constructing URL or making API request:", error);
    throw error;
  }
};

export default processImagesAPI;
