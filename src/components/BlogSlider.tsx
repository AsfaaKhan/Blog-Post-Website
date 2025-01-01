"use client"
import Link from "next/link";
import Image from "next/image";
import { Dancing_Script } from "next/font/google"

const Font2 = Dancing_Script({
    subsets: ["latin"],
    weight: ['700', '600', '500', '400']
})

import { Roboto_Mono } from "next/font/google"
import Container from "./Container";

const Font = Roboto_Mono({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700']
}
)



export default function Slider() {
    return (
        <div className="mt-28 mb-28">
            <Container>
                {/* Carousel  */}
                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                    {/* Indicators/dots  */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                        {/* <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button> */}
                    </div>

                    {/* The slideshow/carousel  */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Image src="/images/13.jpg" alt="Los Angeles" width={500} height={500} className="d-block w-100" />
                            <div className="carousel-caption">
                                <h3>AI in the Metaverse: Transforming Virtual Worlds</h3>
                                <p>Explore The Topics Related To These Topics</p>
                            </div>

                        </div>
                        <div className="carousel-item ">
                            <Image src="/images/5.jpg" alt="Los Angeles" width={500} height={500} className="d-block w-100" />
                            <div className="carousel-caption">
                                <h3>AI in the Metaverse: Transforming Virtual Worlds</h3>
                                <p>Explore The Topics Related To These Topics</p>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <Image src="/images/15.jpg" alt="Los Angeles" width={500} height={500} className="d-block w-100" />
                            <div className="carousel-caption">
                                <h3>AI in the Metaverse: Transforming Virtual Worlds</h3>
                                <p>Explore The Topics Related To These Topics</p>
                            </div>

                        </div>
                        <div className="carousel-item ">
                            <Image src="/images/17.jpg" alt="Los Angeles" width={500} height={500} className="d-block w-100" />
                            <div className="carousel-caption">
                                <h3>AI in the Metaverse: Transforming Virtual Worlds</h3>
                                <p>Explore The Topics Related To These Topics</p>
                            </div>

                        </div>
                        {/* <div className="carousel-item ">
                        <Image src="/images/12.jpg" alt="Los Angeles" width={500} height={500} className="d-block w-100" />
                       
                    </div> */}

                        {/* <div className="carousel-item">
                        <Image src="/images/11.jpg" alt="Chicago" width={500} height={500} className="d-block w-100" />
                        
                    </div> */}
                        {/* <div className="carousel-item">
                        <Image src="/images/bg.jpg" alt="New York" width={500} height={500} className="d-block w-100" />
                        
                    </div> */}
                    </div>

                    {/* Left and right controls/icons  */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </Container>
        </div>
    )
}