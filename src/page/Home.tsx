/* eslint-disable @typescript-eslint/no-explicit-any */
import Carosult from "../components/features/Carosult";
import Cards from "../components/features/Cards";

import FewCart from "@/components/features/FewCart";
import Feature from "@/components/features/Featured";
import Gallery from "@/components/features/Gallery";
import { UseReloadWarnning } from "@/components/share/ReloadWarnning";
import { useNavigate } from "react-router-dom";
import { useGetAllCartsQuery } from "@/redux/api/api";

const Home = () => {
  // Reload
  UseReloadWarnning();
  const navigate = useNavigate();
  const benefits = [
    {
      _id: 1,
      title: "Built to Last",
      describe: "Durable, high-quality materials designed for long-term use.",
      images: "",
    },
    {
      _id: 2,
      title: "Comfort Grip",
      describe: "Ergonomic designs for a comfortable workout experience.",
      images: "",
    },
    {
      _id: 3,
      title: "Eco-Friendly ",
      describe: "Sustainable materials for a greener workout. ensuring a sustainable workout experience.",
      images: "",
    },
    {
      _id: 4,
      title: "Affordable",
      describe: " High-quality products at prices that fit your budget and safe money",
      images: "",
    },
    {
      _id: 5,
      title: "Ergonomic",
      describe: "Crafted with user comfort in mind, featuring soft grips and adjustable components for a smooth workout.",
      images: "",
    },
    {
      _id: 6,
      title: "Versatile",
      describe: "Suitable for a variety of fitness routines, from strength training to cardio and flexibility exercises.",
      images: "",
    },
  ];
  const category = [
    {
      id: 1,
      imag: "https://i.ibb.co/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg",
      category: "Strength",
    },
    {
      id: 2,
      imag: "https://i.ibb.co/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg",
      category: "Cardio",
    },
    {
      id: 3,
      imag: "https://i.ibb.co/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg",
      category: "Tools Gear",
    },
    {
      id: 4,
      imag: "https://i.ibb.co/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg",
      category: "Equipment",
    },
  ];

  // http://localhost:3000/api/cart?searchTerm=watch&category=store&sort=price
  // test perpose
  const searchTerm = "";
  const categorys = "";
  const sort = "";
  const _id = "";

  const { data } = useGetAllCartsQuery({
    searchTerm,
    categorys,
    sort,
    _id,
  });
  // console.log(data);
  
  // category
  const handleCategory = () => {
    // console.log('hello category')
    navigate("/products");
  };
  return (
    <div className="max-w-screen ml-1  ">
      <Carosult></Carosult>
      <div className="grid grid-cols-2 lg:flex justify-center lg:gap-9 items-center w-auto my-5 mx-auto  max-w-[1200px] ">
        {category?.map((item) => (
          <button onClick={handleCategory} key={item.id}>
            {" "}
            <Cards category={item.category}></Cards>
          </button>
        ))}
      </div>

      {/* test redux */}
      {/* <button onClick={() => handleButton()}>click to post </button>
      <button onClick={() => handleUpdateButton()}>click to update </button>
      <button onClick={() => handleDeleteButton()}>click to delete </button> */}
      <p className="text-center text-4xl mt-16 font-mono">Some Features</p>
      <div className=" lg:max-w-[900px] grid grid-cols-1 lg:grid-cols-3 grid-rows-2 justify-evenly items-center mx-auto   ">

        {benefits?.map((item) => (
          <div key={item._id} className="mx-auto">
            <Feature item={item}></Feature>
          </div>
        ))}
      </div>
      {/* it will be change soon */}
      <p className="text-center text-4xl mb-10 font-mono"> Some Products </p>
      <div className="mx-auto max-w-[1200px] grid  grid-cols-1 lg:grid-cols-3 grid-rows-2 justify-evenly items-center my-5 ">
        {data?.data?.slice(1, 7).map((item: any) => (
          <div key={item._id} className="mx-auto  my-3">
            <FewCart item={item}></FewCart>
          </div>
        ))}
      </div>
      <p className="text-center text-4xl mb-10 font-mono">Gallery Show Products </p>
      <div className="  max-w-[1200px]   mx-auto max-h-[800px] ">
        <Gallery></Gallery>
      </div>
      {/* <Form></Form> */}
    </div>
  );
};

export default Home;
