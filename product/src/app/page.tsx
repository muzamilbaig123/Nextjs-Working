"use client"
import { useState } from "react";
import AllProducts from "./allproducts";
import Category from "./category";
import MyInfo from "./myinfo";
import { productNameType } from "./product-item-type";


const products: productNameType[] = [
  {
    id: 1,
    productName: 'Laptop i5 10th gen',
    price: 2400,
    category: "Laptops"
  },
  {
    id: 2,
    productName: 'Civic',
    price: 427000,
    category: "Cars"
  },
  {
    id: 3,
    productName: 'Oppo A3s',
    price: 178,
    category: "Mobile Phones"
  },
  {
    id: 4,
    productName: 'Speaker Bluetoot',
    price: 18,
    category: "Acceseries"
  },
  {
    id: 5,
    productName: 'Mal Mal Kapra ',
    price: 18,
    category: "Clothes"
  },
  
]






export default function App () {
  const [cateList, setCateList] = useState(
    ["All" ,"Cars", "Mobile Phones", "Laptops", "Acceseries", "Clothes"]
  )

  const [productList, setProductList] = useState(products)
  return (
    <>
      <MyInfo />
      <Category reciveCate={cateList} />
      <AllProducts prodList={productList} />
    </>
  )
}