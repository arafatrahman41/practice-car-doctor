import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  // const [min, setMin] = useState(undefined)
  // const [max, setMax] = useState(undefined)

  useEffect(() => {
    // fetch(`http://localhost:5000/services?sort=${'asc' : 'desc'}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setServices(data);
    //   });
    axios(`http://localhost:5000/services?sort=${asc ? "asc" : "desc"}`).then(
      (res) => setServices(res.data)
    );
  }, [asc]);

  const handleSearch = e => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
  }

  return (
    <div className="text-center mb-20 space-y-4">
      <h3 className="text-xl md:text-2xl font-bold text-orange-600">Service</h3>
      <h2 className="text-3xl md:text-5xl font-bold">Our Service Area</h2>
      <p className="w-1/2 mx-auto">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.{" "}
      </p>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <input type="submit" value="Search" className="btn btn-accent" />
      </form>
      <button onClick={() => setAsc(!asc)} className="btn btn-accent">
        {asc ? "Price: High to Low" : "Price: Low to High"}
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
