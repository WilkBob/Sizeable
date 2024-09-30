import PropTypes from "prop-types";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-rose-200/20 p-6 rounded-lg shadow-md">
    <Icon className="text-rose-400 w-12 h-12 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-lg">{description}</p>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
