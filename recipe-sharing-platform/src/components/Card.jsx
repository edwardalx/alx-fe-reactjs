
export default function Card({img,title,summary}) {
  return (
    <div>
      <div className="user-profile bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl hover:p-10">
        <img
          src={img}
          alt={"User"}
          className="rounded-full  sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <h1 className="sm:text-lg md:text-xl text-blue-800 my-4">{title}</h1>
        <p className="text-gray-600 sm: text-sm md:text-base hover:text-blue-500">
          {summary}
        </p>
      </div>
    </div>
  );
}
