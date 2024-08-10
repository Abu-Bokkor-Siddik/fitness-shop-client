
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
const Management = () => {
  const hello= [
    { image: 'https://i.ibb.co/rkx3Dv4/Basis-Peak.webp', product: 'Item 1', price: '10' },
    { image: 'https://i.ibb.co/rkx3Dv4/Basis-Peak.webp', product: 'Item 2', price: '20' },
    { image: 'https://i.ibb.co/rkx3Dv4/Basis-Peak.webp', product: 'Item 3', price: '30' },
]
  return (
    <div className="min-h-[850px]   overflow-x-scroll  max-w-full mx-auto pt-40">
      <div className="flex max-w-[1000px] mx-auto justify-end items-center">
      <button className=" btn btn-info text-white mb-2  "><IoMdAddCircleOutline className="h-5 w-5"></IoMdAddCircleOutline> </button>
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
          {
            hello.map((item,i)=><tr key={i}>
              <td className=" border flex justify-center">{i+1}</td>
              <td className="border py-2 mx-auto text-center">name</td>
              <td className="border text-center">100</td>
              <td className="border text-center">hello</td>
              
              <td className="  border flex justify-evenly items-center  mx-auto "><button className="btn btn-success text-white border "><FaRegEdit className="h-5 w-5"></FaRegEdit></button><button className="btn btn-error text-white border "><MdOutlineDelete className="h-6 w-6"></MdOutlineDelete></button></td>
            </tr>)
          }
        </tbody>
      </table>
    </div> 
  )
}

export default Management
