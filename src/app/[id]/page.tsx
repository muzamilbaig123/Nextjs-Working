"use client"

import Navbar from "@/components/navbar"
import axios from 'axios'
import { useState, useEffect } from "react"
import { json } from "stream/consumers"

export default function Images ( {params} ) {
    const {id} = params

    const [users, setUsers] = useState("")
    const apiData = async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
        setUsers(data)
    }
  
    useEffect(() => {
      apiData()
    }, [])



    return (
        <>
        <h1> Images Section {users.username}</h1>
        
        <Navbar />
        <div>
            {JSON.stringify(users)}
        </div>
        </>
    )
}