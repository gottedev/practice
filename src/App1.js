import React from "react";
function App() {
  return (
    // <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    //   <div class="sm:flex sm:items-center px-6 py-4">
    //     <img
    //       class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
    //       src="/jumbotron.jpg"
    //       alt="Woman's Face"
    //     />
    //     <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
    //       <p class="text-xl leading-tight">Erin Lindford</p>
    //       <p class="text-sm leading-tight text-gray-600">Product Engineer</p>
    //       <div class="mt-4">
    //         <button class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
    //           Message
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="md:flex mx-auto px-6 rounded-lg shadow-lg mt-16 bg-red-200 py-4">
      <div class="md:flex-shrink-0">
        <img
          class="rounded-lg md:w-56 md:h-40 object-cover"
          src="/jumbotron.jpg"
          alt="Woman paying for a purchase"
        />
      </div>
      <div class="mt-4 md:mt-0 md:ml-6">
        <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
          Marketing
        </div>
        <a
          href="#"
          class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
        >
          Finding customers for your new business
        </a>
        <p class="mt-2 text-gray-600">
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </p>
      </div>
    </div>
  );
}
export default App;
