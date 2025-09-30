import { useEffect, useState } from "react";
import configData from "../data.json";
import Card from "./Card";

export default function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(configData);
    setData(configData);
  }, [configData]);

  return (
    <div>
      <div className="text-xl ">HomePage</div>
      <div className="flex  grid sm:grid-cols-2 md:grid-cols-3 gap-4">  {/*altternatively flex flex-wrap */}
        {data.map((x) => (
          <div key={x.id} className="p-4">
            <div className="user-profile bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl hover:p-10 ">
              <img
                src={x.img}
                alt="User"
                className="rounded-full  sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <h1 className="sm:text-lg md:text-xl text-blue-800 my-4">
                {x.title}
              </h1>
              <p className="text-gray-600 sm: text-sm md:text-base hover:text-blue-500">
                {x.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
