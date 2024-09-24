/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import FewCart from "@/components/features/FewCart";
import { UseReloadWarnning } from "@/components/share/ReloadWarnning";
import { useGetAllCartsQuery } from "@/redux/api/api";
import { useEffect, useState } from "react";
const Products = () => {
  // const [ranges, setRanges] = useState("");
  const [searchTerms, setsearchTerm] = useState("");
  const [categorys, setCategorys] = useState("");
  const [sort, setSort] = useState("");
  //
  const [deduceSearch, setDeduceSearch] = useState(searchTerms);
  useEffect(() => {
    const handlerApi = setTimeout(() => setDeduceSearch(searchTerms), 3000);
    return () => clearTimeout(handlerApi);
  }, [searchTerms]);

  const handlefrom = (e: any) => {
    e.preventDefault();
    const searchValue = e.target.value;
    setsearchTerm(searchValue);
    // console.log(searchValue);
  };
  // console.log(searchTerms, "searchvalue");
  const handleDrop = (e: any) => {
    e.preventDefault();
    const rangesValues = e.target.value;
    setsearchTerm(rangesValues);
    // console.log(rangesValues);
  };
  const handleFilter = (e: any) => {
    e.preventDefault();
    const filter = e.target.value;
    setCategorys(filter);
    console.log(filter);
  };
  const handleSort = (e: any) => {
    e.preventDefault();
    const sortValue = e.target.value;
    setSort(sortValue);
    // console.log(sortValue);
  };
  const handleAllClean = () => {
    setCategorys("");
    // setRanges("");
    setSort("");
    setsearchTerm("");
  };

  const _id = "";
  const { data } = useGetAllCartsQuery({
    searchTerm: deduceSearch,
    categorys,
    sort,
    _id,
  });

  console.log(data);
  //  0-1000
  const options = [];
  for (let index = 0; index < 1000; index++) {
    // console.log(index)
    options.push(index);
  }
 // Reload
 UseReloadWarnning();
  // end get
  return (
    <div className="mx-auto min-h-[800px]  max-w-[1400px] h-auto ">
      <div className="  lg:pt-40 lg:flex   lg:h-40 justify-between  items-end ">
        <form
          onChange={handlefrom}
          className="flex lg:ml-8  z-10 justify-center items-center    lg:min-w-[400px]"
        >
          {" "}
          <input
            name="searchNames"
            type="text"
            value={searchTerms}
            placeholder="Type here"
            className="input input-bordered text-black  shadow-transparent  h-12 lg:h-[52px] min-w-[300px]  lg:w-[450px] lg:mt-36 mt-24 "
          />
        </form>

        {/* start */}
        <div className=" grid grid-rows-2 lg:pt-24 lg:flex items-center justify-start ml-14 lg:justify-around mr-7 lg:gap-10">
          {/* range */}

          {/* start */}

          <select
            className="lg:p-[10px] p-1 border-4  rounded-xl"
            name="cars"
            onClick={handleDrop}
            id="cars"
          >
            {options.map((item) => (
              <option key={item} value={item}>
                {item}$
              </option>
            ))}
          </select>

          {/* end */}
          {/* start */}

          <select
            className="lg:p-[10px] p-1 border-4  rounded-xl"
            name="cars"
            onChange={handleFilter}
            id="cars"
          >
            <option value="">Filters</option>
            <option value="cardio">Cardio</option>
            <option value="strength">Strength</option>
            <option value="cardio and strength">Cardio and Strength</option>
          </select>

          {/* end */}

          {/* start */}

          <select
            className="lg:p-[10px] p-1 border-4  rounded-xl"
            name="cars"
            onClick={handleSort}
            id="cars"
          >
            <option value="">Sorting</option>
            <option value="price">Ascending</option>
            <option value="">Descending</option>
          </select>

          {/* end */}
          <button onClick={handleAllClean} className="btn btn-[white]">
            Clean{" "}
          </button>
        </div>
        {/* end */}
      </div>
      {/* cart will be here  */}
      <p className="text-2xl text-center font-extrabold my-5">All Products</p>
      <div className="mx-auto my-10    max-w-[1400px] h-auto">
        <div className=" flex flex-col lg:grid  mx-auto justify-center lg:grid-cols-4 gap-2 grid-rows-auto lg:justify-evenly items-center">
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
