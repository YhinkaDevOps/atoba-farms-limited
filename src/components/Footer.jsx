import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" min-h-[200px] bg-[#900C3F] text-white px-4 py-10 md:py-16 border-dashed border-b-[1px] border-b-white">
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 ">
        <div className="flex flex-col gap-2">
          <span className="hover:opacity-70 flex items-center flex-shrink-0">
            {/* <img
              src="/assets/footer_logo.png"
              className="h-[65px]"
              alt="footer_logo"
            /> */}
            <Image
              src="/assets/nav-logo.png"
              width={100}
              height={65}
              alt="footer-logo"
            />
          </span>

          <span className="text-sm">Rena Agricultural Services</span>
        </div>

        {/* Contact us */}
        <div className="pt-2 flex flex-col gap-2">
          <Link href="/contact">
            <button className="hover:opacity-70 flex items-center flex-shrink-0 font-bold hover:underline">
              Contact Us
            </button>
          </Link>
          {/* <span className="text-sm">
            https://chimkasimmatransportservices.vercel.app/
          </span> */}
          <span className="text-sm">+(234) 08033520427 - enquiry</span>
          <span className="text-sm">
            <p>renaagric@gmail.com</p>
          </span>
        </div>

        {/* Useful links */}
        {/* <div className="pt-2 flex flex-col gap-2">
          <h1 className="font-bold">Useful Links</h1>
          <Link href="#">
            <button className="hover:opacity-70 text-sm flex items-center flex-shrink-0  hover:underline">
              Terms and conditions
            </button>
          </Link>
          <Link href="#">
            <button className="hover:opacity-70 text-sm flex items-center flex-shrink-0 hover:underline">
              Privacy policy
            </button>
          </Link>
        </div> */}

        {/* Social Links */}
        <div className="pt-2 flex flex-col gap-2">
          <h1 className="font-bold">Connect With Us</h1>
          <div className="flex flex-row gap-3">
            {/* <button className="hover:opacity-70">
              <Link href="https://web.facebook.com/profile.php?id=100085566767107">
                <FaFacebook size={20} />
              </Link>
            </button> */}

            <button className="hover:opacity-70">
              <Link href="https://www.linkedin.com/in/ayo-salako-8424b120/?originalSubdomain=ng">
                <FaLinkedin size={30} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
