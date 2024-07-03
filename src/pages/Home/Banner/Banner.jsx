import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../../assets/images/homeCarousel/1.jpg";
import img2 from "../../../assets/images/homeCarousel/2.jpg";
import img3 from "../../../assets/images/homeCarousel/3.jpg";
import img4 from "../../../assets/images/homeCarousel/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full my-16">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img src={img1} className="w-full object-cover object-center rounded-xl" />
        <div className="absolute pl-20 flex flex-col h-full justify-center gap-8 text-white lg:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <h2 className="text-2xl md:text-5xl font-bold">Affordable Price For Car Servicing</h2>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <div className="space-x-6">
         <button className="bg-orange-600 py-3 px-6 font-medium hover:opacity-85 rounded-lg">Discover More</button>
         <button className="outline outline-1 py-3 px-6 rounded-lg font-medium cursor-pointer">Latest Project</button>
         </div>
        </div>
        <div className="absolute right-10 bottom-5 flex gap-4 -translate-y-1/2 transform">
          <a
            href="#slide4"
            className="flex justify-center items-center w-16 h-16 rounded-full bg-[#FFFFFF33] hover:bg-orange-600 duration-300"
          >
            <FaArrowLeft color="white" size={20} />
          </a>
          <a
            href="#slide2"
            className="flex justify-center items-center w-16 h-16 rounded-full bg-[#FFFFFF33] hover:bg-orange-600 duration-300"
          >
            <FaArrowRight color="white" size={20} />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img src={img2} className="w-full object-cover object-center rounded-xl" />
        <div className="absolute pl-20 flex flex-col h-full justify-center gap-8 text-white lg:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
          <h2 className="text-2xl md:text-5xl font-bold">Affordable Price For Car Servicing</h2>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <div className="space-x-6">
         <button className="bg-orange-600 py-3 px-6 font-medium hover:opacity-85 rounded-lg">Discover More</button>
         <button className="outline outline-1 py-3 px-6 rounded-lg font-medium cursor-pointer">Latest Project</button>
         </div>
        </div>
        <div className="absolute right-10 bottom-5 flex gap-4 -translate-y-1/2 transform">
          <a href="#slide1" className="flex justify-center items-center w-16 h-16 rounded-full bg-[#FFFFFF33] hover:bg-orange-600 duration-300">
            <FaArrowLeft color="white" size={20} />
          </a>
          <a href="#slide3" className="flex justify-center items-center w-16 h-16 rounded-full bg-[#FFFFFF33] hover:bg-orange-600 duration-300">
           <FaArrowRight color="white" size={20} />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
