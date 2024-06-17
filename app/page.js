import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";

export default function Home() {
  return (
    <div>
      <Header/>
     <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <span className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">Preparing for an Interview?</span> <span className="text-sm font-medium">Don't worry,we got you covered!</span> 
            {/* <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> */}
        </span>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">MockAI</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Double your chances of landing that job offer

with AI-powered interview prep</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">

  

            <div class="bg-white shadow-2xl rounded-xl p-8 max-w-3xl w-full">
        <h1 class="text-3xl font-extrabold text-gray-900 mb-6 text-center">Top Features Include:</h1>
        <ul class="list-inside space-y-4">
            <li class="text-xl font-semibold text-gray-800 flex items-center">
                <svg class="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L10 13.414 7.293 10.707a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414L10 11.586 4.707 6.293a1 1 0 00-1.414 0z" clip-rule="evenodd"></path></svg>
                AI-Generated Interview Questions
            </li>
            <li class="text-xl font-semibold text-gray-800 flex items-center">
                <svg class="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L10 13.414 7.293 10.707a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414L10 11.586 4.707 6.293a1 1 0 00-1.414 0z" clip-rule="evenodd"></path></svg>
                AI Analysis and Feedback
            </li>
            <li class="text-xl font-semibold text-gray-800 flex items-center">
                <svg class="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L10 13.414 7.293 10.707a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414L10 11.586 4.707 6.293a1 1 0 00-1.414 0z" clip-rule="evenodd"></path></svg>
                Webcam Integration and Record your Answers
            </li>
            <li class="text-xl font-semibold text-gray-800 flex items-center">
                <svg class="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L10 13.414 7.293 10.707a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414L10 11.586 4.707 6.293a1 1 0 00-1.414 0z" clip-rule="evenodd"></path></svg>
                Correct Answers and Best Practices
            </li>
            <li class="text-xl font-semibold text-gray-800 flex items-center">
                <svg class="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L10 13.414 7.293 10.707a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414L10 11.586 4.707 6.293a1 1 0 00-1.414 0z" clip-rule="evenodd"></path></svg>
                Progress Tracking and History
            </li>
            <li class="text-xl font-semibold text-gray-800 flex items-center">
                <svg class="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L10 13.414 7.293 10.707a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414L10 11.586 4.707 6.293a1 1 0 00-1.414 0z" clip-rule="evenodd"></path></svg>
                Unlimited Practice
            </li>
           
        </ul>
    </div>












            
    </div>

    </div>
</section>
    </div>

  );
}
