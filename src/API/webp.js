import { auth } from "./Firebase";
import { extractFilename } from "../utils/extractFilename";
const baseURL = "https://sizeable-437121.uc.r.appspot.com/";

// query = {include_thumbnails: true, thumbnails_size: 300}

const webp = async (images, query) => {
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
  const endpoint = images.length === 1 ? "webp/" : "webp-multiple/";
  const url = new URL(`${baseURL}${endpoint}`);
  if (query) {
    Object.keys(query).forEach((key) =>
      url.searchParams.append(key, query[key])
    );
  }
  // url would be https://sizeable-437121.uc.r.appspot.com/webp or https://sizeable-437121.uc.r.appspot.com/webp-multiple

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
    throw new Error(`${response.status} - ${errorText}`);
  }

  const filename = extractFilename(response.headers.get("content-disposition"));

  // The API returns an image, or a ZIP file containing processed images depending on the number of images
  const blob = await response.blob();
  const zipUrl = URL.createObjectURL(blob);

  return [zipUrl, filename];
};

export default webp;
