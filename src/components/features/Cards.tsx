/* eslint-disable @typescript-eslint/no-explicit-any */
import './css/cards.css'
const Cards = ({category}:any) => {
  
  return (
    <div>
      <div className=" cards lg:h-[200px] my-2 h-[150px] ">
        
          <img src="https://i.ibb.co/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg" alt="image" />
          <p className='text-3xl text-center text-black absolute font-extralight top-14  right-12'>{category}</p>
     
      </div>
    </div>
  );
};

export default Cards;
