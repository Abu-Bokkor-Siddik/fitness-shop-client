/* eslint-disable @typescript-eslint/no-explicit-any */

import { UseReloadWarnning } from "@/components/share/ReloadWarnning";
import { removeCart, updateQuentity } from "@/redux/feature/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

import { Link } from "react-router-dom";

const Card = () => {
   // Reload
   UseReloadWarnning();
  // local store card
  const carts = useAppSelector((store) => store.cart.carts);
  const totalPrice = useAppSelector((store) => store.cart.totalPrice);
  console.log(carts);
  const dispatch = useAppDispatch();
  const handleButton = (type: string, id: string) => {
    dispatch(updateQuentity({ type, id }));
  };

  // remove

  const handleDelete = async (id: string) => {
    // console.log(id,"delete id")
    dispatch(removeCart(id));
  };
  return (
    <div className=" min-h-[800px] max-w-[1200px] mx-auto ">
      {/*  */}
      <div className="min-h-[450px]  overflow-x-scroll  min-w-full mx-auto pt-40">
        <table className="border min-h-auto border-collapse   min-w-[1200px] mx-auto ">
          <thead className="border  ">
            <tr className="border text-2xl">
              <th className="border py-4">Image</th>
              <th className="border">Products</th>
              <th className="border">price</th>
              <th className="border">Quantity</th>
              <th className="border">Remove</th>
            </tr>
          </thead>
          <tbody className="border">
            {carts?.map((item: any, i: any) => (
              <tr key={i}>
                <td className="border my-1 flex justify-center">
                  <img className="w-20" src={item.images} alt="" />
                </td>
                <td className="border mx-auto text-center">{item.name}</td>
                <td className="border text-center">{item.price}</td>
                <td className="border text-center">
                  <div className="flex justify-center items-center">
                    <button
                      onClick={() => {
                        handleButton("increment", item?._id);
                      }}
                      className="btn btn-active"
                    >
                      +
                    </button>
                    <p className="bg-slate-100 px-2">{item?.quantity}</p>{" "}
                    <button
                      onClick={() => {
                        handleButton("decrement", item?._id);
                      }}
                      className="btn btn-active"
                    >
                      -
                    </button>
                  </div>
                </td>
                <td className="  border  ">
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="btn btn-error text-white border flex justify-center items-center mx-auto  "
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  */}
      <div className="flex justify-end">
        <div className="card bg-base-100 w-96 h-60 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Total Price Cart</h2>
            <p>
              If you interest this products,You will buy this products by click
              the button
            </p>
            <p className="mt-4 font-semibold ">Total Price : {totalPrice}</p>
            <div className="card-actions justify-end">
              <Link to="/checkout">
                <button className="btn bg-[#b66a51] text-white  btn-active ">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Card;
