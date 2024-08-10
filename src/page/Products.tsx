/* eslint-disable @typescript-eslint/no-explicit-any */
import FewCart from "@/components/features/FewCart";
import { useGetAllCartsQuery } from "@/redux/api/api";
import { useState } from "react";

const Products = () => {
  const [ranges, setRanges] = useState(0);
  //
  const handlefrom = (e: any) => {
    e.preventDefault();
    const searchValue = e.target.value;
    setRanges(searchValue);
    console.log(searchValue);
  };
  const handleDrop = (e: any) => {
    e.preventDefault();
    const searchValues = e.target.value;
      setRanges(searchValues)
    console.log(searchValues);
  };
  // all card products here
  const searchTerm = '';
  const categorys = "";
  const sort = "";
  const _id = "";
  const { data } = useGetAllCartsQuery({
    searchTerm,
    categorys,
    sort,
    _id,
  });

  // console.log(data?.data);
  //  0-1000
  const options = [];
  for (let index = 0; index < 1000; index++) {
    // console.log(index)
    options.push(index
    );
  }
  // console.log(options)
  // end get
  return (
    <div className="mx-auto   max-w-[1400px] h-auto ">
      <div className=" flex   h-40 justify-between  items-end ">
        <form
          onChange={handlefrom}
          className="flex lg:ml-8  z-10 justify-center items-center   lg:min-w-[400px]"
        >
          <input
            name="searchNames"
            type="text"
            placeholder="Type here"
            className="input input-bordered text-black  shadow-transparent  h-10 lg:h-[52px]  lg:w-[450px] mt-36  "
          />
        </form>

        {/* start */}
        <div className="flex items-center justify-around mr-7 lg:gap-10">
          {/* range */}

          {/* <p className="px-1 flex justify-center items-center gap-3">
            {ranges}$
            <input
              onChange={handlefrom}
              value={ranges}
              type="range"
              min="0"
              max="1000"
              name="value"
              id=""
            />
            1000$
          </p> */}
          {/* start */}

          <select
            className="lg:p-[10px] p-1 border-4  rounded-xl"
            name="cars"
            onClick={handleDrop}
            id="cars"
          >
            {
            options.map((item)=><option key={item} value={item}>{item}$</option>)
          }
          </select>

          {/* end */}
           {/* start */}

           <select
            className="lg:p-[10px] p-1 border-4  rounded-xl"
            name="cars"
            onClick={handleDrop}
            id="cars"
          >
            <option value="">Filters</option>
            <option value="cardio">Cardio</option>
            <option value="strength">Strength</option>
          </select>

          {/* end */}
          
          {/* start */}

          <select
            className="lg:p-[10px] p-1 border-4  rounded-xl"
            name="cars"
            onClick={handleDrop}
            id="cars"
          >
            <option value="">Sorting</option>
            <option value="+">Ascending</option>
            <option value="-">Descending</option>
          </select>

          {/* end */}
          <button className="btn btn-[white]">Clean </button>
        </div>
        {/* end */}
      </div>
      {/* cart will be here  */}
      <p className="text-2xl text-center font-extrabold my-5">All Products</p>
      <div className="mx-auto my-10    max-w-[1400px] h-auto">
        <div className="grid grid-cols-4 gap-2 grid-rows-auto justify-evenly items-center">
          {data?.data.map((item: any) => (
            <FewCart key={item._id} item={item}></FewCart>
          ))}
        </div>
      </div>
      {/* end */}
    </div>
  );
};

export default Products;
