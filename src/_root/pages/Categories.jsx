import React, { useState } from "react";
import { Card, Modal, Sidebar } from "../../components";
import useAllProduct from "../../hooks/useAllProduct";
const Categories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("electronics");
  const categoryProduct = useAllProduct(categoryName);
  const [getSingle, setGetSingle] = useState();
  const [open, setOpen] = useState(false);
  async function getSingleProduct(id) {
    try {
      setIsLoading(true);
      let response = await fetch(`https://fakestoreapi.com/products/${id}`);
      response = await response.json();
      setGetSingle([response]);
      setIsLoading(false);
    } catch (error) {
      throw error;
    }
  }

  return (
    <>
      {isLoading ? (
        <h1 className="flex justify-center items-center">Loading...</h1>
      ) : (
        <div className="flex mt-12">
          <div className="">
            <Sidebar setCategoryName={setCategoryName} />
          </div>
          <div className="flex w-full justify-evenly space-x-2 items-center space-y-8 flex-wrap">
            {categoryProduct?.map((item) => (
              <div
                key={item.id}
                className="w-1/4  flex flex-col items-center justify-center "
              >
                <div className="">
                  <img src={item.image} className="w-full " alt="product" />
                </div>
                <div className="mt-5">
                  <h1 className="text-lg font-semibold ">{item.title}</h1>
                  <p>{item.description}</p>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => {
                        setOpen(true);
                        getSingleProduct(item.id);
                      }}
                      className="text-lg font-semibold px-6 py-2 bg-primary-100 text-white"
                    >
                      View Detail
                    </button>
                    <button className="text-lg font-semibold px-6 py-2 bg-primary-100 text-white">
                      {item.price}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Modal open={open} onClose={() => setOpen(false)}>
            <div>
              {getSingle?.map((item) => (
                <div className="flex justify-evenly items-center p-8 ">
                  <div className="w-1/2 flex flex-col space-y-8">
                    <div className="">
                      <img src={item.image} width={400} alt="productImage" />
                    </div>

                    <h1 className="text-lg font-semibold">
                      <span className="text-xl font-bold">Title:</span>{" "}
                      {item.title}
                    </h1>
                    <p className="text-lg font-semibold">
                      <span className="text-xl font-bold">Description:</span>{" "}
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <h1 className="px-6 py-2 text-white bg-primary-100 text-lg font-normal">
                      Price: {item.price}
                    </h1>
                    <button className="px-6 py-2 text-white bg-primary-100 font-semibold text-xl">
                      Purchase
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Categories;
