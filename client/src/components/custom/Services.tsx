import servicesData from "../../assets/data/serviceData.ts";
import PropTypes from "prop-types";
import 'remixicon/fonts/remixicon.css'
const ServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </div>
  );
};

const ServiceItem = ({ item }) => (
  <div className="mb-6">
    <div className="bg-gradient-to-r from-zinc-50 to-zinc-300 rounded-lg shadow-md p-6">
      <span className="mb-3 inline-block">
        <i className={item.icon} />
      </span>

      <h6 className="text-lg font-semibold">{item.title}</h6>
      <p className="text-gray-600 mt-2">{item.desc}</p>
    </div>
  </div>
);

ServiceItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};


export default ServicesList;
