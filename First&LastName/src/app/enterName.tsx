"use client"
import { useState } from "react"
type submitBtnType = {
    a: string
}


export default function FirstLastNames () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    


    return (
        <>
            <form>
             
                <label>Enter FirstName: <input type="text" placeholder="First Name" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} /></label>
                <br />
                <br />
                <label>Enter LastName: <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => {setLastName(e.target.value)}} /></label>
                <br />
                <br />
                <button type="submit">Click</button>
                <h1>{`${firstName}: ${lastName} `}</h1>
            </form>
        </>
    )
}