import React from "react";
import girlicon from "../../public/assets/girl.png";
import sun from "../../public/assets/sun.gif";
import ball from "../../public/assets/ball.gif";
import graph from "../../public/assets/graph.gif";
import cheque from "../../public/assets/cheque.gif";
import Image from "next/image";

const WhyUS = () => {
  return (
    <div className="min-h-[500px] px-4 lg:px-0 py-16 bg-[#f6f6f6]">
      <div className="max-w-[1100px] mx-auto">
        <h6 className="text-center text-3xl service-header text-[#cc1c10] mb-3">
          WHY CHOOSE US
        </h6>

        <p className="font-sans text-center">
          A Trusted Name with Proficient Professionals Bringing Extensive
          Expertise!
        </p>

        <div className="hidden lg:block relative">
          <span className="rounded absolute left-[-200px] top-[41px]">
            <Image src={girlicon} width={270} height={500} alt="girl-icon" />
          </span>
        </div>

        <div className="max-w-[800px] mt-10 mx-auto font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-7">
            <div className="flex gap-3">
              <div className="rounded inline-block">
                <Image src={cheque} width={150} height={50} alt="cheque" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-lg">Farm Management</h5>
                <p className="text-justify text-sm">
                  We lead the way in Nigeria, offering cost-effective solutions
                  with assured Returns on Investments.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded inline-block">
                <Image src={sun} width={100} height={50} alt="sun-gif" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-lg">Animal production</h5>
                <p className="text-justify text-sm">
                  We prioritize the rapid production of various animal products.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="rounded inline-block">
                <Image src={ball} width={130} height={50} alt="sun-gif" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-lg">Crop production</h5>
                <p className="text-justify text-sm">
                  We prioritize quality in every aspect of our crop production
                  process, from seed selection to harvest.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="rounded inline-block">
                <Image src={graph} width={100} height={50} alt="sun-gif" />
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-lg">Sales & Distribution</h5>
                <p className="text-justify text-sm">
                  We prioritize the rapid production of various animal products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
