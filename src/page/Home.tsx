/* eslint-disable @typescript-eslint/no-explicit-any */
import Carosult from "../components/features/Carosult";
import Cards from "../components/features/Cards";
// import {
//   useAddCartsMutation,
//   useDeleteCartsMutation,
//   useGetAllCartsQuery,
//   useUpdateCartsMutation,
// } from "@/redux/api/api";
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
      title: "hello",
      describe: "",
      images: "",
    },
    {
      _id: 2,
      title: "hello",
      describe: "",
      images: "",
    },
    {
      _id: 3,
      title: "hello",
      describe: "",
      images: "",
    },
    {
      _id: 4,
      title: "hello",
      describe: "",
      images: "",
    },
    {
      _id: 5,
      title: "hello",
      describe: "",
      images: "",
    },
    {
      _id: 6,
      title: "hello",
      describe: "",
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
  // test post
  // const [addCart] = useAddCartsMutation();
  // const handleButton = () => {
  //   // console.log("hello");
  //   const datas = {
  //     name: "bike",
  //     description: "A digital bike is here.",
  //     price: 10000,
  //     category: "caycale",
  //     images: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
  //     stock: {
  //       quantity: 10,
  //       isStock: true,
  //     },
  //   };

  //   // call
  //   addCart(datas);
  // };
  // const [update] = useUpdateCartsMutation();
  // // test update
  // const handleUpdateButton = () => {
  //   const _id = "66914426864a0845ac57d6af";
  //   // const dataes = {
  //   //   name: "car",
  //   //   description: "A digital bike is here.",
  //   //   price: 30000,
  //   //   category: "caycale",
  //   //   images: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
  //   //   stock: {
  //   //     quantity: 10,
  //   //     isStock: true,
  //   //   },
  //   // };
  //   const final = {
  //     _id,
  //     payload: {
  //       name: "car",
  //       description: "A digital bike is here.",
  //       price: 30000,
  //       category: "caycale",
  //       images: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
  //       stock: {
  //         quantity: 10,
  //         isStock: true,
  //       },
  //     },
  //   };
  //   update(final);
  // };
  // // end
  // // delete
  // const [Carddelete] = useDeleteCartsMutation();
  // const handleDeleteButton = () => {
  //   const _ids = "66901bbff551c8bae15a1cc6";
  //   Carddelete(_ids);
  // };
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
      <div className=" lg:max-w-[900px] grid grid-cols-1 lg:grid-cols-3 grid-rows-2 justify-evenly items-center mx-auto   ">
        {benefits?.map((item) => (
          <div key={item._id} className="mx-auto">
            <Feature></Feature>
          </div>
        ))}
      </div>
      {/* it will be change soon */}
      <div className="mx-auto max-w-[1200px] grid  grid-cols-1 lg:grid-cols-3 grid-rows-2 justify-evenly items-center my-5 ">
        {data?.data?.slice(1, 7).map((item: any) => (
          <div key={item._id} className="mx-auto  my-3">
            <FewCart item={item}></FewCart>
          </div>
        ))}
      </div>

      <div className="  max-w-[1200px]   mx-auto max-h-[800px] ">
        <Gallery></Gallery>
      </div>
      {/* <Form></Form> */}
    </div>
  );
};

export default Home;
