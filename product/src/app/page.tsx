"use client"
import { useState } from "react";
import AllProducts from "./allproducts";
import Category from "./category";
import MyInfo from "./myinfo";

export default function App () {
  const [cateList, setCateList] = useState(
    ["Cars", "Mobile Phones", "Laptops", "Acceseries", "Clothes"]
  )
  return (
    <>
      <MyInfo />
      <Category reciveCate={cateList} />
      <AllProducts />
    </>
  )
}