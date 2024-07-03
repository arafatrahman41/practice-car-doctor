import { useLoaderData } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useAuth();
  const { title, _id, price, img } = service;
  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            title: 'Success',
            text: 'Booking Added Successfully',
            icon: 'success',
            confirmButtonText: 'ok'
          })  
        }
      });
  };

  return (
    <div className="px-8 mt-12">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Book Services: {title}
      </h2>

      <form
        onSubmit={handleBookService}
        className="card-body bg-base-300 rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due About</span>
            </label>
            <input
              type="text"
              defaultValue={`$${price}`}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-warning"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
