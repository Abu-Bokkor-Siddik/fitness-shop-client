const Gallery = () => {
  const images = [
    {
      src: "https://i.ibb.co.com/mDLjS3G/dumbbell-1.webp",
    
    },
    {
      src: "https://i.ibb.co.com/5Lw9RRF/pexels-pixabay-416717.jpg",
     
    },
    {
      src: "https://i.ibb.co.com/yWKV02N/a8e3ea0a-e92f-442d-af80-4c6b1ee623e8.webp",
      
    },
    {
      src: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
    
    },
    {
      src: "https://i.ibb.co.com/z82jp2H/408af9a4-8336-473c-97b3-2983bfa8f26f.webp",
     
    },
    {
      src: "https://i.ibb.co.com/HqSN9Jr/plastic-dumbbell.webp",
      
    },
    {
      src: "https://i.ibb.co.com/2WfzxzX/Exercise-bike-3d-art.webp",
      
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
