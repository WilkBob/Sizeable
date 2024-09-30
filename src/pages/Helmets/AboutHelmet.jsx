import { Helmet } from "react-helmet-async";

const AboutHelmet = () => {
  return (
    <Helmet>
      <title>About - Sizeable</title>
      <meta name="description" content="A brief description of your page." />
      <meta
        name="keywords"
        content="keywords, related, to, your,   
 page"
      />

      {/* Open Graph tags */}
      <meta property="og:title" content="About - Sizeable" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://web-size.web.app/page-url" />
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
      <meta name="twitter:title" content="About - Sizeable" />
      <meta
        name="twitter:description"
        content="A   
 brief description of your page."
      />
      <meta
        name="twitter:image"
        content="https://web-size.web.app/openg/OG-Progressify.png"
      />
    </Helmet>
  );
};

export default AboutHelmet;
