import { auth } from "./Firebase";
import { extractFilename } from "../utils/extractFilename";
const baseURL = "http://localhost:8000/";

// query = {include_thumbnails: true, thumbnails_size: 300}

const resize = async (images, query) => {
  //console.log(images, query);
  const formData = new FormData();
  if (images.length === 0) {
    return;
  }

  if (images.length === 1) {
    formData.append("file", images[0]); // Ensure the key matches the server's expectation
  } else {
    images.forEach((image) => {
      formData.append("files", image); // Ensure the key matches the server's expectation
    });
  }

  // Determine the endpoint based on the number of images
  const endpoint = images.length === 1 ? "resize/" : "resize-multiple/";
  const url = new URL(`${baseURL}${endpoint}`);
  if (query) {
    Object.keys(query).forEach((key) =>
      url.searchParams.append(key, query[key])
    );
  }
  // url would be http://localhost:8000/resize or http://localhost:8000/resize-multiple

  const headers = {};
  if (images.length > 1) {
    const user = auth.currentUser;
    const token = user ? await user.getIdToken() : null;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

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
  const filename = extractFilename(response.headers.get("content-disposition"));

  // The API returns an image, or a ZIP file containing processed images depending on the number of images
  const blob = await response.blob();
  const zipUrl = URL.createObjectURL(blob);

  return [zipUrl, filename];
};

export default resize;
