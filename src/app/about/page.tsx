"use client"
import Navbar from "@/components/navbar";
import axios from "axios";
import { link } from "fs";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function About () {

  const [user, setUsers] = useState([])
  const apiData = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(data)
    setUsers(data)
    console.log(user)
  }

  useEffect(() => {
    apiData()
  }, [])

    return (
      <>
      <Navbar/>
      <h1>About Page</h1>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam quaerat, dolorum exercitationem commodi hic. Odit doloremque molestiae hic. Iusto vitae consectetur officiis, assumenda voluptatem eos eveniet quos soluta vero.
      </p>
      <button onClick={apiData}>click</button>
      <div style={{backgroundColor: "gray", color: "white", margin: "10px"}}>
        <ul>
            {
              user.map((e: HTMLElement) => {
                return <li>{e.id} --- <Link href={`/${e.id}`}>explore</Link></li>
              })
            }
        </ul>
      </div>
      </>
    )
  }