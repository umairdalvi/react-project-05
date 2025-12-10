import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../custom/ReviewCard";
import { useRef } from "react";

export default function SimpleSlider() {
    const sliderRef = useRef(null);
    const NextArrow = ({ onClick }) => {
        return (
            <button className="button bg-transparent" onClick={onClick}>
                <i className="ri-arrow-right-long-line"></i>
            </button>
        );
    };
    const PrevArrow = ({ onClick }) => {
        return (
            <button className="button bg-transparent" onClick={onClick}>
                <i className="ri-arrow-left-long-line"></i>
            </button>
        );
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className="slider-wrapper">
            <Slider ref={sliderRef} {...settings} className="slider">
                <div className="slider-slide">
                    <ReviewCard
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates tenetur nulla ab corrupti itaque illum repellendus autem cum architecto quibusdam eligendi quia, inventore dolorem rem aut doloribus, atque reprehenderit ullam."
                        name="John Doe"
                        job="Designer"
                    />
                </div>
                <div>
                    <ReviewCard
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates tenetur nulla ab corrupti itaque illum repellendus autem cum architecto quibusdam eligendi quia, inventore dolorem rem aut doloribus, atque reprehenderit ullam."
                        name="Jane Doe"
                        job="Developer"
                    />
                </div>
                <div>
                    <ReviewCard
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates tenetur nulla ab corrupti itaque illum repellendus autem cum architecto quibusdam eligendi quia, inventore dolorem rem aut doloribus, atque reprehenderit ullam."
                        name="Alice Smith"
                        job="Mktg. Manager"
                    />
                </div>
            </Slider>

            <div className="slider-buttons d-flex gap-3">
                <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
                <NextArrow onClick={() => sliderRef.current.slickNext()} />
            </div>
        </div>
    );
}
