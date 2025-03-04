"use client";
import { Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { HEADER_DATA_LIST, SOCIAL_DATA_LIST } from "@/utils/helper";
import Link from "next/link";

const Header = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open && window.innerWidth < 1024) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <div className="mx-auto w-100 d-flex justify-content-center py-lg-4 py-3">
            <Image className="position-absolute start-0 top-0 hero-blue-img" src="/assets/images/webp/header-blue-img.webp" alt="blue-img" />
            <div className="w-100 header-padding mx-auto">
                <div className="d-flex justify-content-between align-items-center mx-auto w-100 rounded-3 overflow-hidden">
                    <Link className="text-decoration-none" href="/">
                        <h2 className="text-uppercase font-franklin text-white header-name position-relative z-1">NEKOZUMA</h2>
                    </Link>
                    <div className={`d-lg-none d-block d-flex justify-content-center ${open ? "position-fixed bottom-0 start-0 h-100 z-2 min-vh-100 w-100 flex-column bg-black" : "position-absolute start-100"}`}>
                        <div className="d-flex flex-column align-items-lg-start align-items-center nav-list">
                            <div className="nav-list d-flex flex-column align-items-lg-start align-items-center">
                                {HEADER_DATA_LIST.map((item, index) => (
                                    <Link onClick={() => setOpen(!open)} href={item.path} className="text-white text-decoration-none header-link font-sarabun" key={index}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                            <div className="d-flex nav-list-2">
                                {SOCIAL_DATA_LIST.map((item, index) => (
                                    <Link onClick={() => setOpen(!open)} target="_blank" href={item.path} className="text-white text-decoration-none social-icon" key={index}>
                                        <Image src={item.image} alt={item.alt} width={24} height={24} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setOpen(!open)}
                        className="d-flex gap-2 flex-column d-lg-none justify-content-center align-items-end z-3">
                        <span className={`toggle-button ${open ? "open" : "close"}`}></span>
                        <span className={`toggle-button ${open ? "open-two" : "close"}`}></span>
                    </div>
                    <div className="d-lg-block d-none">
                        <div className="d-flex nav-list">
                            <div className="nav-list d-flex">
                                {HEADER_DATA_LIST.map((item, index) => (
                                    <Link href={item.path} className="text-white text-decoration-none header-link font-sarabun" key={index}>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                            <div className="d-flex nav-list-2">
                                {SOCIAL_DATA_LIST.map((item, index) => (
                                    <Link href={item.path} target="_blank" className="text-white text-decoration-none social-icon" key={index}>
                                        <Image src={item.image} alt={item.alt} width={24} height={24} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Header;  