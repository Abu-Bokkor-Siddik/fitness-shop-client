

const Card = () => {
 const hello= [
    { image: 'https://i.ibb.co/rkx3Dv4/Basis-Peak.webp', product: 'Item 1', price: '10' },
    { image: 'https://i.ibb.co/rkx3Dv4/Basis-Peak.webp', product: 'Item 2', price: '20' },
    { image: 'https://i.ibb.co/rkx3Dv4/Basis-Peak.webp', product: 'Item 3', price: '30' },
];

  return (
    
    // <h1 className='text-black p-60'>card</h1>
    <div className="min-h-[850px] overflow-x-scroll  max-w-full mx-auto pt-40">
      <table className="border min-h-auto border-collapse   min-w-[1200px] mx-auto ">
        <thead className="border  ">
          <tr className="border px-20  text-2xl">
            <th className="border py-4">Image</th>
            <th className="border">Products</th>
            <th className="border">price</th>
            <th className="border">Quantity</th>
            <th className="border">Total Price</th>
            <th className="border">Remove</th>
          </tr>
        </thead>
        <tbody className="border">
          {
            hello.map((item,i)=><tr key={i}>
              <td className="border my-1 flex justify-center"><img className="w-20" src={item.image} alt=""  /></td>
              <td className="border mx-auto text-center">{item.price}</td>
              <td className="border text-center">total</td>
              <td className="border text-center"><div className="flex justify-center items-center"><button className="btn btn-active">+</button><p className="bg-slate-100 px-2">hello</p> <button className="btn btn-active">-</button></div></td>
              <td className="border text-center">total price</td>
              <td className="  border  "><button className="btn btn-error text-white border flex justify-center items-center mx-auto">Remove</button></td>
            </tr>)
          }
        </tbody>
      </table>
    </div>   
  )
}

export default Card
