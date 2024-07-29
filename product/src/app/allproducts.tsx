import Product from "./product";

export default function AllProducts () {
    return (
        <>
             <table style={{width: "90%"}}>
                <thead>
                <tr>
                    <th style={{border: "1px solid black", padding: "12px"}}>Serial No</th>
                    <th style={{border: "1px solid black", padding: "12px"}}>Product Name</th>
                    <th style={{border: "1px solid black", padding: "12px"}}>Price</th>
                    <th style={{border: "1px solid black", padding: "12px"}}>Quantity</th>
                </tr>
                </thead>
                <tbody>
                    <Product />
                    <Product />
                    <Product />

                    <Product />
                    <Product />
                    <Product />

                </tbody>
            </table>
        </>
    )
}