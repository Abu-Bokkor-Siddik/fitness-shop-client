/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from 'react-router-dom'
import TextLength from '../share/TextLength'
import './css/cards.css'
const FewCart = ({item}:any) => {
  // console.log(item)
   const texts:string= "If a dog chews shoes whose shoes does he cho"
  return (
    <div className="card bg-base-100 mb-5 max-w-[300px] shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co/rkx3Dv4/Basis-Peak.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title gap-3  ">
    {TextLength('Watchaasjk',6)}
      <div className="badge bgColour text-slate-50 ">NEW</div>
      <div className="badge bgColour text-slate-50">Price:500$</div>
    </h2>
    <p className='mb-2'>{TextLength(texts,40)}</p>
    <div className="card-actions justify-between ">
      
      <Link to={`/cart/${item?._id}`}><button className="badge badge-outline px-8">View</button></Link>
      <button className="badge badge-outline ">Explore more</button>
    </div>
  </div>
</div>
  )
}

export default FewCart
