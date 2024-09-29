import { auth } from "./Firebase";
const baseURL = "https://sizeable-437121.uc.r.appspot.com/component/";

// query = {include_thumbnails: true, thumbnails_size: 300}

const progressify = async (images, query) => {
  // images are the files to be uploaded
  // query contains the options for the API
  const formData = new FormData();
  images.forEach((image) => {
    formData.append("files", image); // Ensure the key matches the server's expectation
  });

  const url = new URL(baseURL);
  if (query) {
    Object.keys(query).forEach((key) =>
      url.searchParams.append(key, query[key])
    );
  }
  // url would be https://sizeable-437121.uc.r.appspot.com/component/?include_thumbnails=true&thumbnails_size=300
  const user = auth.currentUser;
  const token = user ? await user.getIdToken() : null;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Network response was not ok: ${response.status} - ${errorText}`
    );
  }

  // The API returns a ZIP file containing processed images
  const blob = await response.blob();
  const zipUrl = URL.createObjectURL(blob);

  return zipUrl;
};

export default progressify;
