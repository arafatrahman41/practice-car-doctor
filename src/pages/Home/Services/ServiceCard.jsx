import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, price, title, _id } = service;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-6 pt-6">
        <img
          src={img}
          alt="service image"
          className="rounded-xl h-60 w-full"
        />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title">{title}</h2>
        <p className="font-medium text-orange-600">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
          <button className="btn btn-circle">
            <FaArrowRight size={20}/>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
