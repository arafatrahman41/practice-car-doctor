import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";
import Booking from "./Booking";
import { FcDeleteDatabase } from "react-icons/fc";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    axios.get(url, {withCredentials: true})
    .then(res => {
      setBookings(res.data)
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setBookings(data);
    //   });
  }, [url]);

  // deleting
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = bookings.filter(booking => booking._id !== id)
              setBookings(remaining);
            }
          });
      }
    });
  };

  // updating
  const handleConfirm = id => {
   fetch(`http://localhost:5000/bookings/${id}`, {
    method: "PATCH",
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({status: 'confirm'})
   })
   .then(res => res.json())
   .then(data => {
    console.log(data);
    if(data.modifiedCount){
      Swal.fire({
        title: 'Success',
        text: 'Updated Successfully',
        icon: 'success',
        confirmButtonText: 'ok'
      })
      const remaining = bookings.filter(booking => booking._id !== id);
      const update = bookings.find(booking => booking._id === id);
      update.status = 'confirm'
      const newBookings = [update, ...remaining];
      setBookings(newBookings)
    }
   })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">
        Bookings:{" "}
        <span className="bg-amber-500 py-2 rounded-full px-4 text-white">
          {bookings.length}
        </span>
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <FcDeleteDatabase size={30} />
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <Booking
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></Booking>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
