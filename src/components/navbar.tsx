"use client"
import Link from "next/link"
export default function Navbar () {
    return (
        <>
            <nav style={{backgroundColor: "#ddd", color: "#fff"}}>
                <ul style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <li style={{listStyleType: "none", padding: "4px"}}><Link href={"/"}>Home</Link></li>
                    <li style={{listStyleType: "none", padding: "4px"}}><Link href={"/about"}>About</Link></li>
                    <li style={{listStyleType: "none", padding: "4px"}}><Link href={"/contact"}>Contact</Link></li>
                    <li style={{listStyleType: "none", padding: "4px"}}><Link href={"/guide"}>Guide</Link></li>
                    <li style={{listStyleType: "none", padding: "4px"}}><Link href={"/services"}>Services</Link></li>
                </ul>
            </nav>
        </>
    )
}