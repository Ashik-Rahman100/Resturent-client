import React from 'react';
import featuedImage from "../../../assets/home/featured.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Featured.css';
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading={"Chek it out"} heading= "Featured Item" ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-70 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuedImage} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic ipsum debitis corporis quidem repellendus assumenda vitae quisquam, iste omnis sunt ea temporibus? Quis ipsam repudiandae magnam culpa expedita sint atque consequatur a dicta quod molestias ratione, est, cupiditate soluta neque dolorum modi natus accusantium tempora itaque! Vitae, reiciendis reprehenderit!</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white border-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;