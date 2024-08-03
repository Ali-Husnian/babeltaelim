import { Link } from "react-router-dom";

const SpecializedCourses = () => {
  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-start text-2xl font-extrabold text-gray-900">
          Specialized Courses
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          <div className="flex flex-col items-center text-center border border-slate-200 space-y-10">
            <Link className="mt-4 text-sm text-blue-600">
              Be a sales champion
            </Link>
            <img
              src="course/linkedIn.png"
              alt="Programmatic Advertising"
              className="bg-[#f0f0f0] shadow-xl rounded-md p-2 w-200px text-wrap"
            />

            <Link
              href="#"
              className="pb-100px text-2xl font-medium text-blue-900 underline"
            >
              LinkedIn Markiting <br /> Masterclass
            </Link>
          </div>

          <div className="flex flex-col items-center text-center border border-slate-200 space-y-10">
            <Link className="mt-4 text-sm text-blue-600">
              Programmatic Advertising
            </Link>
            <img
              src="course/paragon-removebg-preview.png"
              alt="Programmatic Advertising"
              className="bg-[#f0f0f0] shadow-xl rounded-md p-2 w-200px text-wrap"
            />

            <Link
              href="#"
              className="pb-100px text-2xl font-medium text-blue-900 underline"
            >
              Programmatic <br />
              Advertising
            </Link>
          </div>

          <div className="flex flex-col items-center text-center border border-slate-200 space-y-10">
            <Link className="mt-4 text-sm text-blue-600">
              Follow your prospects
            </Link>
            <img
              src="course/arrow-removebg-preview.png"
              alt="Follow your prospects"
              className="bg-[#f0f0f0] shadow-xl rounded-md p-2 w-200px text-wrap"
            />

            <Link
              href="#"
              className="pb-100px text-2xl font-medium text-blue-900 underline text-wrap"
            >
              Cross-Channel <br /> Remarketing
            </Link>
          </div>
        </div>

        <center className="mt-12">
          <Link
            to="#"
            className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 "
          >
            All Specialized Courses
          </Link>
        </center>
      </div>
    </div>
  );
};

export default SpecializedCourses;
