const Gallery = () => {
  const images = [
    {
      src: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
    
    },
    {
      src: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
     
    },
    {
      src: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
      
    },
    {
      src: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
    
    },
    {
      src: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
     
    },
    {
      src: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
      
    },
    {
      src: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
      
    },
  ];
  return (
    <div className="grid max-h-[800px] grid-cols-3 gap-2 grid-rows-4">
      {images?.map((item, i) => (
        <div
          className={`${i===3 || i===6 || i===5 ?'lg:col-span-2  col-span-2':i===2 || i===4  ?'lg:row-span-2 row-span-2':''  }`}
          key={i}
        >
          <img
            src={item.src}
            alt={`${i + 1}`}
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
