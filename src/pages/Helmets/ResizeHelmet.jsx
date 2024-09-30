import { Helmet } from "react-helmet-async";

const ResizeHelmet = () => {
  return (
    <Helmet>
      <title>Image Resizer</title>
      <meta name="description" content="A brief description of your page." />
      <meta
        name="keywords"
        content="keywords, related, to, your,   
page"
      />

      {/* Open Graph tags */}
      <meta property="og:title" content="Image Resizer" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://web-size.web.app/resize" />
      <meta
        property="og:image"
        content="https://web-size.web.app/openg/OG-resize.png"
      />
      <meta
        property="og:description"
        content="A resizing tool that makes optimizing images simple and accessible to everyone."
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sizeable" />
      <meta
        name="twitter:description"
        content="A resizing tool that makes optimizing images simple and accessible to everyone."
      />
      <meta
        name="twitter:image"
        content="https://web-size.web.app/openg/OG-resize.png"
      />
    </Helmet>
  );
};

export default ResizeHelmet;
