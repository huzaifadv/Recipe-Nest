import React from 'react'
import HeroFood from './HeroFood'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Banner() {
    return (
        <>
            <div id="banner">
                <div className="container mx-auto sm:pt-[200px] pt-[100px] sm:mb-[220px]" data-aos="fade"  data-aos-duration="2000">
                    <div className='grid lg:grid-cols-[55%_auto] '>

                        <div className='hero-text sm:pr-[200px] mr-[10px] ml-[20px] my-auto'>
                            <h3 className='sm:text-[20px] text-[17px] font-[700] text-[#EC3D08]'>Welcome to Recipe Nest!</h3>
                            <h1 className='sm:text-[62px] text-[33px] font-[800] text-[#fff] mt-[20px]'>Discover Delicious Recipes Dishes!</h1>
                            <p className='sm:text-[17px] text-[14px] mt-[20px] text-[#7a7878]'>A recipe includes ingredients, cooking steps, and instructions to create a flavorful dish. Your Recipe Hunt Starts Here — Simple Ingredients, Tasty Results!</p>
                            <button className='mt-[25px] btn-hero'>Shop Now</button>
                        </div>

                        <div className='text-center' data-aos="fade-left"  data-aos-duration="2000">
                            <HeroFood/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
