import { FormEvent, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog.tsx";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

import { IoMdAddCircleOutline } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select.tsx";
import { useAddCartsMutation } from "@/redux/api/api.ts";

const FormModal = () => {
  const [addCart] = useAddCartsMutation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const onSubmits = async (e: FormEvent) => {
    e.preventDefault();
    const postDetails = {
      name: name,
      description: description,
      price: price,
      category: category,
      images: images,
      stock: {
        quantity: quantity,
        isStock: true,
      },
      cart: "none",
    };
    // console.log(postDetails)
    // cell
    const postRes = await addCart(postDetails);
    console.log("here form value", postRes);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mb-10 bg-sky-600" variant="outline">
          <IoMdAddCircleOutline className="h-5 w-5 text-white"></IoMdAddCircleOutline>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          {/* <DialogDescription>
            Add your tasks that you want to finish.
          </DialogDescription> */}
        </DialogHeader>
        <form onSubmit={onSubmits}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                onBlur={(e) => setName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                onBlur={(e) => setDescription(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* start */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                onBlur={(e) => setPrice(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* end */}
            {/* start */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image URL
              </Label>
              <Input
                id="image"
                onBlur={(e) => setImages(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* end */}
            {/* start */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <Input
                id="quantity"
                onBlur={(e) => setQuantity(e.target.value)}
                className="col-span-3"
              />
            </div>
            {/* end */}

            {/* start */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Select onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="cardio">Cardio</SelectItem>
                    <SelectItem value="strength">Strength</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* end */}
          </div>

          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Post</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
