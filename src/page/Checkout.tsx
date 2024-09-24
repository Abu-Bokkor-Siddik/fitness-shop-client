/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { removeCart } from "@/redux/feature/cartSlice";
import { usePaymentMutation } from "@/redux/api/paymentApi/paymentApi";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [payment] = usePaymentMutation();
  const carts = useAppSelector((store) => store.cart.carts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleBooking = async (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.phoneNumber.value;
    const address = e.target.address.value;
    const transactionId = `txr-${Date.now()}`;
    const mainData = {
      name,
      email,
      phoneNumber,
      address,
      transactionId,
      carts,
    };
    // console.log(mainData)
    // call here
    const paymentRes = await payment(mainData).unwrap();
    // console.log(paymentRes, "here");
    if (paymentRes.success) {
      navigate("/success");
    }
  };
  const handleDelete = (id: string) => {
    // console.log(id)
    dispatch(removeCart(id));
  };
  return (
    <div className="mx-auto pt-32 bg-slate-50 min-h-[800px] max-w-[1200px] h-auto ">
      {/* <Booking></Booking> */}
      <div className=" flex flex-col justify-center mx-auto lg:grid lg:grid-cols-2 lg:justify-around ">
        {/* st */}

        <div>
          {carts?.map((item: any, index: any) => (
            <div
              key={index}
              className="card bg-base-100  mb-5 ml-20 w-80 h-44 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">Name :{item?.name}</h2>
                <p>Price :{item?.price}</p>
                <p>Quantity :{item?.quantity}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-sm mb-2 btn-active"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
        <div>
          <div className="hero-content flex-col ">
            <div className="card  flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <form onSubmit={handleBooking} className="card-body">
                <div className="">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">phone number</span>
                    </label>
                    <input
                      name="phoneNumber"
                      type="text"
                      placeholder="phone number"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/*  */}
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <input
                      name="address"
                      type="text"
                      placeholder="address"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-[#b66a51] text-white btn-active"
                  >
                    Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Checkout;
