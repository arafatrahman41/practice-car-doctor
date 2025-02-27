import PropTypes from "prop-types";

const Booking = ({ booking, handleDelete, handleConfirm }) => {
  const { img, service, price, date, _id, status } = booking;
  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded h-24 w-24">
              {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        {
          status === 'confirm' ? <span className="text-primary font-bold">confirmed</span> : <button
          onClick={() => handleConfirm(_id)}
          className="btn btn-ghost btn-xs"
        >
          confirm
        </button>
        }
      </th>
    </tr>
  );
};

Booking.propTypes = {
  booking: PropTypes.object,
  handleDelete: PropTypes.func,
  handleConfirm: PropTypes.func,
};

export default Booking;
