/* eslint-disable no-undef */
import { Link } from "react-router-dom";

const GroupClass = [
  {
    link: "Inbound Marketing Masterclass",
    courseImg: "groupclass/sales-marketing.png",
  },
  {
    link: "Google ( Ads ) Masterclass",
    courseImg: "groupclass/google-adword.png",
  },
  {
    link: "Digital Analytics Masterclass",
    courseImg: "groupclass/google-analytics.png",
  },
];

const GroupMasterClass = () => {
  console.log(GroupClass);
  return (
    <div className="py-12 bg-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-start text-2xl font-extrabold text-gray-900">
          Group Masterclasses
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {GroupClass.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border border-slate-200 py-10"
            >
              <img
                src={item.courseImg}
                alt={item.link}
                className="rounded-full p-2 w-225px text-wrap"
              />

              <Link
                href="#"
                className=" text-2xl font-medium text-blue-900 underline my-5"
              >
                {item.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupMasterClass;
