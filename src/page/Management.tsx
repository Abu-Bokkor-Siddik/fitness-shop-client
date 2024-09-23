/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { MdOutlineDelete } from "react-icons/md";

import FormModal from "@/components/share/FormModal";
import FormModalUp from "@/components/share/FormModalUp";
import { useDeleteCartsMutation, useGetAllCartsQuery } from "@/redux/api/api";

const Management = () => {
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
  const [DeleteCart] = useDeleteCartsMutation();
  // console.log(data);
  // const hello = [
  //   {
  //     image: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
  //     product: "Item 1",
  //     price: "10",
  //   },
  //   {
  //     image: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
  //     product: "Item 2",
  //     price: "20",
  //   },
  //   {
  //     image: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
  //     product: "Item 3",
  //     price: "30",
  //   },
  // ];
  const handleDelete = async (id: string) => {
    // console.log(id,"delete id")
    const deleteRes = await DeleteCart(id);
    console.log(deleteRes,'delete')
  };
  return (
    <div className="min-h-[850px]   overflow-x-scroll  max-w-full mx-auto pt-40">
      <div className="flex max-w-[1000px] mx-auto justify-end items-center">
        <div className="  ">
          <FormModal></FormModal>{" "}
        </div>
      </div>
      <table className="border min-h-auto border-collapse   min-w-[1000px] mx-auto ">
        <thead className="border  ">
          <tr className="border  text-2xl">
            <th className="border py-4">Id</th>
            <th className="border">Name</th>
            <th className="border">Price</th>
            <th className="border">Category</th>

            <th className="border ">Actions</th>
          </tr>
        </thead>
        <tbody className="border">
          {data?.data?.map((item: any, i: number) => (
            <tr key={i}>
              <td className=" border flex justify-center">{i + 1}</td>
              <td className="border py-2 mx-auto text-center">{item?.name}</td>
              <td className="border text-center">100</td>
              <td className="border text-center">hello</td>
              <td className="  border flex justify-evenly items-center  mx-auto ">
                <div className=" ">
                  <FormModalUp id={item?._id}></FormModalUp>
                </div>
                <button
                  onClick={() => handleDelete(item?._id)}
                  className="btn btn-error text-white border "
                >
                  <MdOutlineDelete className="h-6 w-6"></MdOutlineDelete>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Management;
