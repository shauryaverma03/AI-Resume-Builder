import Header from "@/components/custom/Header";
import React, { useEffect } from "react";
import heroSnapshot from "@/assets/heroSnapshot.png";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaCircle, FaInfoCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { startUser } from "../../Services/login.js";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "@/features/user/userFeatures.js";

function HomePage() {
  const user = useSelector((state) => state.editUser.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    window.open(
      "https://github.com/sahidrajaansari/Ai-Resume-Builder",
      "_blank"
    );
  };

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await startUser();
        if (response.statusCode == 200) {
          dispatch(addUserData(response.data));
        } else {
          dispatch(addUserData(""));
        }
      } catch (error) {
        console.log(
          "Printing from Home Page there was a error ->",
          error.message
        );
        dispatch(addUserData(""));
      }
    };
    fetchResponse();
  }, []);

  const hadnleGetStartedClick = () => {
    if (user) {
      console.log("Printing from Homepage User is There ");
      navigate("/dashboard");
    } else {
      console.log("Printing for Homepage User Not Found");
      navigate("/auth/sign-in");
    }
  };
  return (
    <>
      <Header user={user} />
      <section className="pt-24 pb-20 bg-white">
        <div className="px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>Start</span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                building a Resume
              </span>{" "}
              <span>for your next Job</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              Build. Refine. Shine. With AI-Driven Resumes
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <a
                className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0 hover:cursor-pointer"
                onClick={hadnleGetStartedClick}
              >
                Get Started
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
              <div className="relative overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 bg-gradient-to-r from-green-400 to-purple-500 h-11 rounded-t-xl">
                  <div className="flex space-x-1.5">
                    <FaCircle className="w-3 h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125" />
                    <FaCircle className="w-3 h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125" />
                    <FaCircle className="w-3 h-3 text-white hover:text-gray-300 transition duration-300 transform hover:scale-125" />
                  </div>
                  <FaInfoCircle className="text-white hover:text-gray-300 transition duration-300 transform hover:rotate-45" />
                </div>
                <img
                  className="object-cover py-2 px-4 rounded-b-lg transition duration-300 transform hover:scale-105"
                  src={heroSnapshot}
                  alt="Dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white" aria-labelledby="footer-heading">
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 p-5 flex justify-between items-center">
          <p className="text-xs leading-5 text-gray-500">
            &copy; 2024 Ai-Resume-Builder. All rights reserved.
          </p>
          <p className="text-xs leading-5 text-gray-500">
            Made by Sanekha, Rishi karthik, Abhinav
          </p>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
