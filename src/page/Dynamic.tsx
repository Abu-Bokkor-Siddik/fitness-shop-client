/* eslint-disable @typescript-eslint/no-explicit-any */

import { useLoaderData} from "react-router-dom";
import { useAppDispatch } from "@/redux/hook";
import { addCart } from "@/redux/feature/cartSlice";
import { UseReloadWarnning } from "@/components/share/ReloadWarnning";
const Dynamic = () => {
  const dispatch = useAppDispatch();
  // const param = useParams();
  const { data }:any = useLoaderData();
  console.log(data,'loaderData');
  // all card products here
 // Reload
 UseReloadWarnning();
  // handle update state
  const updateDataHandle = (_id: string, item: any) => {
    console.log(item);
    console.log(_id);
    dispatch(addCart(item));
  };
  return (
    <div className="min-h-[950px] flex justify-center items-center  mx-auto">
      <div className=" ">
        <div className="card  max-w-[1000px] h-[500px]   lg:h-[300px]  lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-full w-[450px] "
              src={data?.images}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-center">{data?.name}</h2>
            <div className="flex justify-between items-center">
              <p>Price :{data?.price}</p>
              <p>Category :{data?.category}</p>
              <p>Quantity : {data?.stock?.quantity}</p>
            </div>
            <p> Description : Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <p>
                {" "}
                Stock:
                {data?.stock.quantity <= 0 ? "Out of Stack" : "Available"}
              </p>
              <button
                disabled={data?.stock.quantity <= 0}
                onClick={() => updateDataHandle(data?._id, data)}
                className="btn bg-[#b66a51] text-white"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
