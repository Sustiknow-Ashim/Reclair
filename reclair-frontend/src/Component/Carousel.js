import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import carouselImage from '../images/about/1.jpg'



export default function Carousel() {
    const navigate = useNavigate()
    const [project, setProject] = useState([])

    const getProjects = async () => {
        const { data } = await axios.get('http://localhost:5000/api/project')
        setProject(data)
    }
    console.log(project)
    useEffect(() => {
        getProjects()
    }, [])



    return (
        <div className="container mx-auto">
            <h4 className="text-center text-4xl mb-2 mt-8 font-extrabold">Our Latest Projects</h4>
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} naturalSlideHeight={125} isIntrinsicHeight={true} totalSlides={3} isPlaying={true} visibleSlides={2} step={1} infinite={true} interval={3000} >
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0} onClick={() => { navigate('/project') }}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={project[0]?.image} alt="black chair and white table" className="object-cover object-center w-full rounded-lg" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{project[0].organization}</h2> */}
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{project[0]?.organization}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={project[2]?.image} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{project[1]?.organization}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={project[3]?.image} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{project[3]?.organization}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={project[3]?.image} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{project[3]?.organization}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>

                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={2} step={1} infinite={true} interval={100}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">

                                    <Slide index={0} onClick={() => { navigate('/project') }}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={project[0]?.image} alt="black chair and white table" className="object-cover object-center w-full rounded-lg" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{project[0].organization}</h2> */}
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{project[0]?.organization}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={project[2]?.image} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{project[1]?.organization}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={project[3]?.image} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{project[3]?.organization}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={project[3]?.image} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{project[3]?.organization}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>

                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0} onClick={() => { navigate('/project') }}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={project[0]?.image} alt="black chair and white table" className="object-cover object-center w-full rounded-lg" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{project[0].organization}</h2> */}
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{project[0]?.organization}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={project[2]?.image} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{project[1]?.organization}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={project[3]?.image} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                {/* <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2> */}
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{project[3]?.organization}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
