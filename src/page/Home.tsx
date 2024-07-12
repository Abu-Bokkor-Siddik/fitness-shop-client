
import Carosult from "../components/features/Carosult";
import Cards from "../components/features/Cards";
import {
  useAddCartsMutation,
  useDeleteCartsMutation,
  useGetAllCartsQuery,
  useUpdateCartsMutation,
} from "@/redux/api/api";
const Home = () => {
  const category = [
    {
      id: 1,
      imag: "https://i.ibb.co/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg",
    },
    {
      id: 2,
      imag: "https://i.ibb.co/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg",
    },
    {
      id: 3,
      imag: "https://i.ibb.co/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg",
    },
    {
      id: 4,
      imag: "https://i.ibb.co/1TnFJ5V/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg",
    },
  ];
  // http://localhost:3000/api/cart?searchTerm=watch&category=store&sort=price
  // test perpose
  const searchTerm = "";
  const categorys = "";
  const sort = "";
  const _id = "";

  const { data } = useGetAllCartsQuery({
    searchTerm,
    categorys,
    sort,
    _id,
  });
  console.log(data);
  // test post
  const [addCart] = useAddCartsMutation();
  const handleButton = () => {
    console.log("hello");
    const datas = {
      name: "bike",
      description: "A digital bike is here.",
      price: 10000,
      category: "caycale",
      images: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
      stock: {
        quantity: 10,
        isStock: true,
      },
    };

    // call
    addCart(datas);
  };
  const [update,] = useUpdateCartsMutation();
  // test update
  const handleUpdateButton = () => {
    const _id ="66914426864a0845ac57d6af";
    // const dataes = {
    //   name: "car",
    //   description: "A digital bike is here.",
    //   price: 30000,
    //   category: "caycale",
    //   images: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
    //   stock: {
    //     quantity: 10,
    //     isStock: true,
    //   },
    // };
    const final = {
      _id,
      payload: {
        name: "car",
        description: "A digital bike is here.",
        price: 30000,
        category: "caycale",
        images: "https://i.ibb.co/rkx3Dv4/Basis-Peak.webp",
        stock: {
          quantity: 10,
          isStock: true,
        },
      },
    };
    update(final);
  };
  // end 
  // delete 
  const [Carddelete]=useDeleteCartsMutation()
  const handleDeleteButton=()=>{
    const _ids='66901bbff551c8bae15a1cc6'
    Carddelete(_ids)
  }
  
  return (
    <div className="max-w-screen ml-1  ">
      <Carosult></Carosult>

      <div className="grid grid-cols-2 lg:flex justify-center gap-9 items-center w-auto my-5 mx-auto bg-black max-w-[1200px] ">
        {category?.map((item) => (
          <Cards key={item.id}></Cards>
        ))}
      </div>

      {/* test redux */}
      <button onClick={() => handleButton()}>click to post </button>
      <button onClick={() => handleUpdateButton()}>click to update </button>
      <button onClick={() => handleDeleteButton()}>click to delete </button>
    </div>
  );
};

export default Home;
