import { motion } from "framer-motion";

const APIReference = () => {
  const propsData = [
    {
      prop: "src",
      type: "string",
      default: "(required)",
      description: "The source name of the image",
    },
    {
      prop: "className",
      type: "string",
      default: "''",
      description: "CSS class for the image element",
    },
    {
      prop: "placeholderClassName",
      type: "string",
      default: "''",
      description:
        "CSS class for the placeholder (useful for blur, or opacity effects)",
    },
    {
      prop: "alt",
      type: "string",
      default: "''",
      description: "Alternative text for the image",
    },
    {
      prop: "thumb",
      type: "boolean",
      default: "false",
      description: "Use thumbnail version of the image",
    },
    {
      prop: "lazy",
      type: "boolean",
      default: "false",
      description: "Enable lazy loading for the image",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-lime-300 mb-6">
        - Component Props
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {propsData.map((propData, index) => (
          <motion.div
            key={index}
            className="bg-rose-200/20 p-4 rounded-lg shadow-lg border border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-rose-400">
              {propData.prop}
            </h3>
            <p className="mb-1">
              <span className="font-semibold">Type:</span> {propData.type}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Default:</span> {propData.default}
            </p>
            <p>
              <span className="font-semibold">Description:</span>{" "}
              {propData.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default APIReference;
