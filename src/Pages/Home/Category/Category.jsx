import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    default as img1,
    default as img2,
} from "../../../assets/home/slide1.jpg";
import img3 from "../../../assets/home/slide2.jpg";
import img4 from "../../../assets/home/slide3.jpg";
import img5 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="py-10">
        <SectionTitle 
        subHeading={"From 11.00am to 10.00am"}
        heading={"Order Online"}
         />
      <section className="my-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className="text-center -mt-24 text-2xl">Salad</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img2} alt="" />
            <h3 className="text-center -mt-24 text-2xl">Salad</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img3} alt="" />
            <h3 className="text-center -mt-24 text-2xl">Pizza</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img4} alt="" />
            <h3 className="text-center -mt-24 text-2xl">Soup</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img5} alt="" />
            <h3 className="text-center -mt-24 text-2xl">Desert</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img5} alt="" />
            <h3 className="text-center -mt-24 text-2xl">Desert</h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={img5} alt="" />
            <h3 className="text-center -mt-24 text-2xl">Desert</h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
