import React, {useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper";



const ProductSlide = ({product}) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // console.log(product.id)



    return (

        <div className="product__slide">
            <Swiper
                spaceBetween={10}
                thumbs={{swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={`.${product.img[0]}`} alt={product.title}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`.${product.img[1]}`} alt={product.title}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={`.${product.img[2]}`} alt={product.title}/>
                </SwiperSlide>

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={`.${product.img[0]}`} alt={product.title}/>

                </SwiperSlide>

                <SwiperSlide>
                    <img src={`.${product.img[1]}`} alt={product.title}/>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={`.${product.img[2]}`} alt={product.title}/>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};










export default ProductSlide;