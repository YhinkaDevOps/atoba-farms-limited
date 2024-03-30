import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full min-h-[500px] py-16 bg-[#f4f5f7] text-black ">
      <div className="text-center mb-10">
        <h6 className="text-center text-3xl service-header text-[#cc1c10] mb-3">
          TESTIMONIALS
        </h6>
        <p className="text-xl text-[#71717a] mt-3">
          What our customers say about us
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto max-w-[1090px] p-2 font-sans">
        <div className="testimonials-bg bg-[#333663] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-4">
          <div>
            <p className="text-justify text-white">
              "Working with Atoba Farms Limited has been an absolute pleasure.
              Their commitment to quality and sustainability is evident in every
              product they deliver. Whether it's their succulent chicken, crisp
              vegetables, or tender beef, I always know I'm getting the best
              when I shop at Atoba Farms. Highly recommend!."
            </p>
            <p className="mt-4 text-center font-semibold text-white">
              Kunmi Olayinka
            </p>
          </div>
        </div>
        <div className="testimonials-bg bg-[#333663] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-4">
          <div>
            <p className="text-justify text-white">
              "As a fellow farmer, I've had the privilege of partnering with
              Atoba Farms Limited for my crop production needs. Their expertise
              in farm management and dedication to sustainable practices have
              helped me increase my yields and optimize my operations. I'm
              grateful for their support and guidance, and I look forward to
              continuing our partnership for years to come."
            </p>
            <p className="mt-4 text-center font-semibold text-white">
              Olaniya Dara
            </p>
          </div>
        </div>
        <div className="testimonials-bg bg-[#333663] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-4">
          <div>
            <p className="text-justify text-white">
              "I can't say enough good things about Atoba Farms Limited. Their
              butcher services are second to none, and the quality of their
              meats is exceptional. Whether it's their juicy steaks, flavorful
              chicken, or tender goat, every bite is a testament to their
              commitment to excellence. Plus, knowing that their animals are
              ethically raised makes each purchase even more satisfying. Atoba
              Farms has earned a customer for life!"
            </p>
            <p className="mt-4 text-center font-semibold text-white">
              Akeh Micheal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
