/* eslint-disable @typescript-eslint/no-explicit-any */

import { CiLight } from "react-icons/ci";
const Featured = ({item}:any) => {
  // const images =
  //   "https://i.ibb.co/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg";
  return (
    <div
      className="card bg-url bg-gray-200  w-60 h-48 my-5 lg:my-14 shadow-xl"
      // style={{
      //   backgroundImage: `url(${images})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      
      <div className="card-body ">
        <div className="flex justify-between items-center  -mt-3">
          <h2 className="card-title text-black">{item?.title}</h2>{" "}
          <h1 className=" ">
            <CiLight className="h-6 w-6  "></CiLight>
          </h1>
        </div>
        <p>
          {item?.describe}
        </p>
      </div>
    </div>
  );
};

export default Featured;
