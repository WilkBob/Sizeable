import { Helmet } from "react-helmet-async";

const ProgressifyReactHelmet = () => {
  return (
    <Helmet>
      <title>progressify-react</title>
      <meta
        name="description"
        content="A React Library for Progressive Images"
      />
      <meta
        name="keywords"
        content="keywords, related, to, your,   
page"
      />

      {/* Open Graph tags */}
      <meta property="og:title" content="progressify-react" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://web-size.web.app/progressify-react"
      />
      <meta
        property="og:image"
        content="https://web-size.web.app/openg/OG-progressify-react.png"
      />
      <meta
        property="og:description"
        content="progressify-react is a React library that enables progressive image loading for your web applications."
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="progressify-react" />
      <meta
        name="twitter:description"
        content="progressify-react is a React library that enables progressive image loading for your web applications."
      />
      <meta
        name="twitter:image"
        content="https://web-size.web.app/openg/OG-progressify-react.png"
      />
    </Helmet>
  );
};

export default ProgressifyReactHelmet;
