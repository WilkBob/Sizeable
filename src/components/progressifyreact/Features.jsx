import { BiChevronRight, BiCode } from "react-icons/bi";
import FeatureCard from "./FeatureCard";
import { ImImage } from "react-icons/im";
import { FiZap } from "react-icons/fi";

const Features = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          icon={FiZap}
          title="Progressive Loading"
          description="Improve user experience with smooth image loading transitions"
        />
        <FeatureCard
          icon={ImImage}
          title="Lazy Loading"
          description="Optimize performance by loading images only when needed"
        />
        <FeatureCard
          icon={BiCode}
          title="Easy Integration"
          description="Simple to integrate with existing React applications"
        />
        <FeatureCard
          icon={BiChevronRight}
          title="Customizable"
          description="Flexible API to fit your specific needs"
        />
      </div>
    </section>
  );
};

export default Features;
