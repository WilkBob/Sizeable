import { Helmet } from "react-helmet-async";

const ToolsHelmet = () => {
  return (
    <Helmet>
      <title>Tools - Sizeable</title>
      <meta
        name="description"
        content="Sizeable is a free image processing tool that makes optimizing images simple and accessible to everyone."
      />
      <meta
        name="keywords"
        content="images, webp, converter, resize, optimization, progressive, loading, react, library"
      />

      {/* Open Graph tags */}
      <meta property="og:title" content="Tools - Sizeable" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://web-size.web.app/tools" />
      <meta
        property="og:image"
        content="https://web-size.web.app/openg/OG-Progressify.png"
      />
      <meta
        property="og:description"
        content="Sizeable is a free image processing tool that makes optimizing images simple and accessible to everyone."
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sizeable" />
      <meta
        name="twitter:description"
        content="Sizeable is a free image processing tool that makes optimizing images simple and accessible to everyone."
      />
      <meta
        name="twitter:image"
        content="https://web-size.web.app/openg/OG-Progressify.png"
      />
    </Helmet>
  );
};

export default ToolsHelmet;
