import { useState } from 'react';
import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ReactTyped } from "react-typed";
import ProgressBar from "@ramonak/react-progress-bar";

function LandingPage () {
    return (
        <>
            <Navbar/>
            <div className="grid grid-cols-2 gap-2 pt-[120px] px-[90px] self-center mb-[30px] sm:px-[30px] sm:grid-cols-1 lg:px-[90px] lg:grid-cols-2" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='flex justify-center items-center'>
                    <img className='w-[45%] sm:w-[60%] md:w-[30%] lg:w-[45%]' src="/Images/Frame 3.png" alt="" srcSet="" />
                </div>
                <div className='mt-[40px]'>
                    <h1 className='font-bold text-[45px] w-[80%] mb-[20px] sm:w-full sm:text-[35px] lg:w-[80%] lg:text-[45px]'>Fully Backed   digital Japan currency</h1>
                    <p className='text-[18px] font-medium w-[70%] mb-[20px] sm:w-full md:w-[70%] lg:w-[70%]'>Built for rapid global payment  and 24/7 financial markets, JPY:YEN  is  a regulated digital currency that can be redeem for yen currency </p>
                    <a href=""><button className='text-red-700 px-[20px] py-[8px] rounded-b-md pl-[2px]' type="button">GET STARTED WITH JPY:YEN</button></a>
                </div>
            </div>
            <section id="" className='bg-[#E10B0B] px-20 sm:p-[25px] md:p-[25px] lg:px-20'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <h1 className='text-white text-bold text-[40px] w-[50%] sm:w-full sm:text-[30px] md:w-[70%] lg:w-[50%] lg:text-[40px]'>why businesses needs to choose JPY20</h1>
                <p className='text-white text-[20px] mt-[20px] w-[55%] sm:w-full sm:text-[16px] md:w-[70%] lg:w-[55%] lg:text-[20px]'>JPY20 works seamlessly across applications and platforms around the globe using blockchain infrastructure and merging it with a traditional currency makes it faster, less expensive, and more customizable than legacy rails. </p>
                <div className="grid grid-cols-3 gap-[2rem] mt-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
                    <div className='bg-white py-[20px] px-[30px] rounded-md'>
                        <h2 className='font-bold mb-[40px] text-center text-[20px] sm:mb-[20px] lg:mb-[40px]'>Stable and regulated</h2>
                        <p className=''>Jpy20 is  regulated and fully reserved. Reserved are transparently held at regulated financial institution</p>
                        <p className='mt-[30px] sm:text-[15px] lg:text-[16px]'>Unregulated, non-transparent currency take risk with their reserves</p>
                    </div>
                    <div className='bg-white py-[20px] px-[30px] rounded-md'>
                        <h2 className='font-bold mb-[40px] text-center text-[20px] sm:mb-[20px] lg:mb-[40px]'>Instant settlement</h2>
                        <p className='sm:text-[15px] lg:text-[16px]'>Jpy20 transaction can settle in seconds worldwid. All day, everyday</p>
                    </div>
                    <div className='bg-white py-[20px] px-[30px] rounded-md'>
                        <h2 className='font-bold mb-[40px] text-center text-[20px] sm:mb-[20px] lg:mb-[40px]'>Zero cost</h2>
                        <p className='sm:text-[15px] lg:text-[16px]'>Global payment can be made less. traditional currency is merge together with stablecoin and can be use to make pass accross different chains or traditional payment on any platform </p>
                    </div>
                </div>
            </section>
            <section className='px-[90px] py-[60px] sm:px-[30px] lg:px-[90px]'>
                <h1 className='text-[40px] font-bold mb-[30px] sm:text-[30px] lg:text-[40px]'>Stability & global Reach </h1>
                <p className='w-[55%] text-[17px] sm:w-full sm:text-[16px] md:w-[70%] lg:text-[17px]'>JPY20 enables local,digital businesses to offer payment connectivity, enabled trading in blockchain platform which serves as investment in brokerages, fundings, payment integration and supply chain and b2b payment settlement.</p>
                <div>
                    <div className='grid grid-cols-4 gap-4 mt-[30px] sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4'>
                        <div>
                          <h2 className='font-bold mb-[10px] sm:text-[15px] lg:text-[16px]'>Cross-border-payment</h2>
                          <img className='w-[55%]' src="/Images/Rectangle 9.png" alt="" />
                        </div>
                        <h2 className='font-bold sm:text-[15px] lg:text-[16px]'>Global hybrid currency</h2>
                        <h2 className='font-bold sm:text-[15px] lg:text-[16px]'>crypto/Exchange market</h2>
                        <h2 className='font-bold sm:text-[15px] lg:text-[16px]'>Investemnent/funding</h2>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 items-center self-center mt-[60px] sm:grid-cols-1 lg:grid-cols-2'>
                    <div className='relative bg-white left-[30%] px-[30px] py-[20px] rounded-md shadow-md mt-[50px] sm:left-0 lg:left-[30%]'>
                        <h1 className='font-bold mb-[20px] sm:text-[15px] lg:text-[16px]'>Send and receive funds  transfer faster</h1>
                        <p className='sm:text-[15px] lg:text-[16px]'>Enable payment in both blockchain or digital traditional transfer with stablecoin merge with native traditional currency.</p>  
                    </div>
                    <div className='w-full b flex justify-center items-center mt-[40px]'>
                        <img className='w-[35%] py-[20px] px-[30px] sm:w-[60%] md:w-[30%] lg:w-[35%]' src="/Images/img-validator_en 1.png" alt="" />
                    </div>
                </div>
            </section>
            <section id="" className='pt-[60px] px-[90px] sm:px-[20px] lg:px-[90px]'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <h1 className='font-bold text-[30px] mb-[20px] sm:text-[25px] lg:text-[30px]'>Get JPY20 TO YOUR BUSINESS</h1>
                <div className='grid grid-cols-2 gap-4 items-center sm:grid-cols-1 lg:grid-cols-2'>
                    <p className='font-medium w-[70%] sm:w-full md:w-[70%] lg:w-[70%]'>JPY20 allow businesses, platform to receive, trade currency in both fiat currency and stablecoin. All in one currency a stablecoin merge to native currency.</p>
                    <div className='flex justify-center items-center'>
                        <img className='w-[50%] md:w-[30%]' src="/Images/Yen Coin.png" alt="" srcSet="" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default LandingPage