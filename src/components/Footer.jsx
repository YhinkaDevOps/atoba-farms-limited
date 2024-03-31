import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" min-h-[200px] bg-[#222222] text-white px-4 py-10 md:py-16 border-dashed border-b-[1px] border-b-white">
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 ">
        <div className="flex flex-col gap-2">
          <span className="hover:opacity-70 flex items-center flex-shrink-0">
            <Image
              src="/assets/atoba-farms-logo.png"
              width={100}
              height={65}
              alt="footer-logo"
            />
          </span>

          <span className="text-sm">Atoba Farms Limited</span>
        </div>

        {/* Contact us */}
        <div className="pt-2 flex flex-col gap-2">
          <Link href="/contact">
            <button className="hover:opacity-70 flex items-center flex-shrink-0 font-bold hover:underline">
              Contact Us
            </button>
          </Link>
          <span className="text-sm">
            Phone: +(234) 08023049030 - enquiry <br />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+(234)
            08030799930
          </span>
          <span className="text-sm">
            <p>Email: atobafarmsltd@gmail.com</p>
          </span>
          <span className="text-sm">
            Address: Ikanna Oluwo Village Ajura, Obafemi Owode, LGA, Ogun State,
            Nigeria
          </span>
        </div>

        <span className="text-sm">
          Atoba Farms Limited is registered as a limited liability company with
          the Nigerian Corporate Affairs Commission.
        </span>
      </div>
    </div>
  );
};

export default Footer;
