export const extractFilename = (contentDisposition) => {
  if (!contentDisposition) return "processed-image.webp";
  const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
  const matches = filenameRegex.exec(contentDisposition);
  return matches && matches[1]
    ? matches[1].replace(/['"]/g, "")
    : "processed-image.webp";
};
