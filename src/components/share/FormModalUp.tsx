/* eslint-disable @typescript-eslint/no-explicit-any */
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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select.tsx";
import { useUpdateCartsMutation } from "@/redux/api/api.ts";
import { FaRegEdit } from "react-icons/fa";

const FormModalUp = ({ id }:any) => {
  console.log(id, "here");
  const [updateCart] = useUpdateCartsMutation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const onSubmits = async (e: FormEvent) => {
    e.preventDefault();
    const final = {
      id,
      payload: {
        name: name,
        description: description,
        price: price,
        category: category,
        images: images,
        stock: {
          quantity: quantity,
          isStock: true,
        },
      },
      cart: "none",
    };
    // console.log(updateDetails,id)
    // cell need id and data
    const postRes = await updateCart(final);
    console.log("here form value", postRes);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-green-300" variant="outline">
          <FaRegEdit className="h-5 w-5"></FaRegEdit>
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
              <Button type="submit">Update</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormModalUp;
