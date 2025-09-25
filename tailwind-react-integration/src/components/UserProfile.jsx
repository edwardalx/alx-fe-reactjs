import MyLogo from "../assets/react.svg"
function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 sm:max-w-sm md:mx-auto my-20 rounded-lg shadow-lg">
      {/* <img src={MyLogo} alt="Logo"  /> */}
      <img src="/vite.svg" alt="User" className="rounded-full  sm:w-24 sm:h-24 md:w-36 md:h-36"/>
      <h1 className="sm:text-lg md:text-xl text-blue-800 my-4" >John Doe</h1>
      <p className="text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;