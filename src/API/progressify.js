const baseURL = "http://localhost:8000/component/";

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
  // url would be http://localhost:8000/component/?include_thumbnails=true&thumbnails_size=300

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
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
  } catch (error) {
    console.error("Error during the fetch operation:", error);
    throw error;
  }
};

export default progressify;
