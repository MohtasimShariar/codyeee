import React from 'react';
import h1 from '../Assets/h2.svg'
const Hero = () => {
    return (
        <>
           <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Start Learning Coding
        <br class="hidden lg:inline-block"/>Anywhere, Anytime
      </h1>
      <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel distinctio quis eos! Cupiditate cum, totam similique ipsa, eius eum illum beatae obcaecati dignissimos dolores in vero molestiae. Modi illo iste veniam cumque voluptas, rerum molestias maiores cupiditate cum dicta consectetur distinctio et quia provident reprehenderit natus? Et distinctio possimus in?</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Contact Now</button>
        {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={h1}/>
    </div>
  </div>
</section>
        </>
    );
};

export default Hero;