import React from "react";
import { FaCamera, FaPassport, FaFileInvoiceDollar } from "react-icons/fa";
import { FaHome, FaPlane, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const UAE = () => {
  return (
    <div>
      {/*---banner image----*/}
      <div className="uae-bg">
        <h1 className="text-5xl max-[600px]:text-2xl flex items-center justify-center h-full text-white font-[600]  py-6">
          United Arab Emirates
        </h1>
      </div>
      {/*---about United Arab Emirates---*/}
      <div className="container mx-auto py-6">
        <h2 className="text-center text-[#00cc99] text-3xl font-[600] pb-6">
          About United Arab Emirates
        </h2>
        <div className="flex gap-3 max-[1000px]:flex-col mx-6">
          <div className="w-2/3 max-[1000px]:w-full">
            <p>
              The United Arab Emirates(UAE), or simply the Emirates,is a country
              in West Asia, in the Middle East, at the eastern end of the
              Arabian Peninsula. It is a federal, elective monarchy composed of
              seven emirates, with Abu Dhabi as its capital.It shares land
              borders with Oman to the east and northeast, and with Saudi Arabia
              to the southwest; as well as maritime borders in the Persian Gulf
              with Qatar and Iran, and with Oman in the Gulf of Oman.
            </p>
            <br />
            <p>
              As of 2024, the UAE has an estimated population of over 10
              million, of which 11% are Emiratis; Dubai is the most populous
              city and is an international hub.Islam is the official religion
              and Arabic is the official language, while English is the most
              spoken language and the language of business.
            </p>
          </div>
          <div className="w-1/3 max-[1000px]:w-full space-y-8 text-center fade-in">
            {/* UAE Flag Section */}
            <div className="transform transition duration-500 py-3 ease-in-out hover:scale-105 hover:shadow-lg">
              <p className="mb-2 text-gray-700 font-semibold">
                United Arab Emirates flag
              </p>
              <img
                src="/images/uae_flag.png"
                className="mx-auto rounded-lg"
                alt="uae-flag"
              />
            </div>

            {/* UAE Emblem Section */}
            <div className="transform transition duration-500 py-3 ease-in-out hover:scale-105 hover:shadow-lg">
              <p className="mb-2 text-gray-700 font-semibold">
                United Arab Emirates emblem
              </p>
              <img
                src="/images/emblem_uae.png"
                className="mx-auto rounded-lg"
                alt="emblem-uae"
              />
            </div>
          </div>
        </div>
      </div>
      {/*---requirements-----*/}
      <div className="container mx-auto">
        <h2 className="text-center text-[#00cc99] text-3xl font-[600] pb-6">
          United Arab Emirates Visa Requirements
        </h2>
        <div className="grid grid-cols-3 gap-6 max-[600px]:grid-cols-1">
          {/* Photo Section */}
          <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 text-center">
            <div className="text-4xl text-[#00cc99] mb-4 ">
              <FaCamera className="mx-auto" /> {/* Icon for photograph */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Photograph
            </h3>
            <p className="text-gray-600">
              Submit your recent passport-sized photograph with a clear
              background.
            </p>
          </div>

          {/* Passport Section */}
          <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 text-center">
            <div className="text-4xl text-[#00cc99] mb-4">
              <FaPassport className="mx-auto" /> {/* Icon for passport */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Passport
            </h3>
            <p className="text-gray-600">
              Provide a copy of your valid passport with your personal details.
            </p>
          </div>

          {/* Bank Statement Section */}
          <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 text-center">
            <div className="text-4xl text-[#00cc99] mb-4">
              <FaFileInvoiceDollar className="mx-auto" />{" "}
              {/* Icon for bank statement */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Bank Statement
            </h3>
            <p className="text-gray-600">
              Submit your latest bank statement to verify financial information.
            </p>
          </div>
        </div>
      </div>
      {/*----visa works----*/}
      <div className="container mx-auto pt-12 px-6">
        <h2 className="text-3xl text-center font-bold text-[#00cc99] mb-12">
          Visa Application Process
        </h2>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex items-center gap-6 bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105">
            <div className="text-6xl text-[#00cc99]">
              <FaPassport /> {/* Icon for passport */}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Step 1: Apply on Atlys
              </h3>
              <p className="text-gray-600">
                Add passport information, travel details, and other information
                required by the embassy.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-6 bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105">
            <div className="text-6xl text-[#00cc99]">
              <FaHome /> {/* Icon for passport pick-up */}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Step 2: Passport Pick-Up From Your Home
              </h3>
              <p className="text-gray-600">
                Atlys verifies your documents and sends a partner to collect
                your passport for processing.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-6 bg-white p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105">
            <div className="text-6xl text-[#00cc99]">
              <FaPlane /> {/* Icon for visa processing */}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Step 3: Your Visa Gets Processed
              </h3>
              <p className="text-gray-600">
                We work with Immigration to ensure you get your visa on time.
                <br />
                <span className="text-sm text-gray-500">
                  Application sent to immigration supervisor – 8 Jan, 5:45 AM
                  (On time)
                </span>
                <br />
                <span className="text-sm text-gray-500">
                  Application sent to internal intelligence – 8 Jan, 5:45 AM (On
                  time)
                </span>
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105">
            <div className="text-6xl text-[#00cc99]">
              <FaCheckCircle /> {/* Icon for delivery */}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Step 4: Passport and Visa Delivered
              </h3>
              <p className="text-gray-600">
                Your passport and visa will be delivered on 08 Nov, 11:59 PM.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*-----start application----*/}
      <div className="text-center my-4">
        <Link to="/imageFormLayout#form">
          <button className="bg-[#00cc99] text-white px-8 py-2 rounded-full">
            Start Application
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UAE;
