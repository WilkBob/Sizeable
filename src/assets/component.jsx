import {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";
import PropTypes from "prop-types";

// Create context
const ImageContext = createContext();

// Image provider to fetch the index
export const ImageProvider = ({ children }) => {
  const [imageMap, setImageMap] = useState(new Map());
  const [loading, setLoading] = useState(true);

  // Fetch the index.json and populate image map
  const fetchImageIndex = async () => {
    try {
      const response = await fetch("/index.json");
      const data = await response.json();
      const imageMap = new Map(
        data.map((item) => [
          item.filename,
          {
            placeholder: item.base64_placeholder,
            original: item.original,
            thumbnail: item.thumbnail || item.original,
            dimensions: item.dimensions,
            aspectRatio: item.aspect_ratio,
            thumbnailSize: item.thumbnail_size || item.dimensions[0],
          },
        ])
      );
      setImageMap(imageMap);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching image index:", error);
    }
  };

  useEffect(() => {
    fetchImageIndex();
  }, []);

  return (
    <ImageContext.Provider value={{ imageMap, loading }}>
      {!loading && children}
    </ImageContext.Provider>
  );
};

export const ProgressiveImage = ({
  src,
  className = "",
  placeholderClassName = "",
  alt = "",
  thumb = false,
  lazy = false,
}) => {
  const { imageMap } = useContext(ImageContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(!lazy);

  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const loadImage = useCallback(() => {
    const imageData = imageMap.get(src);

    if (imageData) {
      // Set placeholder
      if (imageData.placeholder && imageData.dimensions) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const img = new Image();
        img.src = imageData.placeholder;

        img.onload = () => {
          canvas.width = imageData.dimensions[0];
          canvas.height = imageData.dimensions[1];
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
          if (imageRef.current) {
            imageRef.current.src = canvas.toDataURL();
          }
        };
      } else if (imageRef.current) {
        imageRef.current.src = imageData.placeholder;
      }

      // Load full image
      const fullImage = new Image();
      fullImage.src = thumb ? imageData.thumbnail : imageData.original;

      fullImage.onload = () => {
        if (imageRef.current) {
          imageRef.current.src = fullImage.src;
          imageRef.current.alt = alt;
          setIsLoaded(true);
        }
      };
    }
  }, [src, imageMap, thumb, alt]);

  useEffect(() => {
    if (!lazy || isIntersecting) {
      loadImage();
    }
  }, [lazy, isIntersecting, loadImage]);

  useEffect(() => {
    if (lazy && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        },
        { rootMargin: "200px" }
      );

      observer.observe(containerRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [lazy]);

  return (
    <div ref={containerRef}>
      {(isIntersecting || !lazy) && (
        <img
          ref={imageRef}
          alt={alt}
          className={`${className}${
            !isLoaded ? ` ${placeholderClassName}` : ""
          }`}
        />
      )}
    </div>
  );
};

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholderClassName: PropTypes.string,
  alt: PropTypes.string,
  thumb: PropTypes.bool,
  lazy: PropTypes.bool,
};

ImageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
