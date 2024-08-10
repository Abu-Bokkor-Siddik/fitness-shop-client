import { useGetAllCartsQuery } from "@/redux/api/api";
import { useParams } from "react-router-dom";

const Dynamic = () => {
  // const fewProducts = [
  //   {
  //     _id: 661,
  //     name: "bag",
  //     description: "A digital watch is here.",
  //     price: 999,
  //     category: "store",
  //     images: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
  //     stock: {
  //       quantity: 50,
  //       isStock: true,
  //     },
  //   },
  //   {
  //     _id: 662,
  //     name: "bag",
  //     description: "A digital watch is here.",
  //     price: 999,
  //     category: "store",
  //     images: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
  //     stock: {
  //       quantity: 50,
  //       isStock: true,
  //     },
  //   },
  //   {
  //     _id: 663,
  //     name: "bag",
  //     description: "A digital watch is here.",
  //     price: 999,
  //     category: "store",
  //     images: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
  //     stock: {
  //       quantity: 50,
  //       isStock: true,
  //     },
  //   },
  //   {
  //     _id: 664,
  //     name: "bag",
  //     description: "A digital watch is here.",
  //     price: 999,
  //     category: "store",
  //     images: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
  //     stock: {
  //       quantity: 50,
  //       isStock: true,
  //     },
  //   },
  //   {
  //     _id: 665,
  //     name: "bag",
  //     description: "A digital watch is here.",
  //     price: 999,
  //     category: "store",
  //     images: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
  //     stock: {
  //       quantity: 50,
  //       isStock: true,
  //     },
  //   },
  //   {
  //     _id: 666,
  //     name: "bag",
  //     description: "A digital watch is here.",
  //     price: 999,
  //     category: "store",
  //     images: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
  //     stock: {
  //       quantity: 50,
  //       isStock: true,
  //     },
  //   },
  // ];
  const param = useParams();
  // all card products here
  const searchTerm = "";
  const categorys = "";
  const sort = "";
  const _id = param?.id;
  // console.log(param.id,'id here')

  const { data } = useGetAllCartsQuery({
    searchTerm,
    categorys,
    sort,
    _id,
  });

  // console.log(data,'here single data')
  return (
    <div className="min-h-[950px] flex justify-center items-center  mx-auto">
      
      <div className=" ">
        <div className="card  max-w-[1000px] h-[500px]  lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
            className="h-full w-[450px] "
              src="https://i.ibb.co/rkx3Dv4/Basis-Peak.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
