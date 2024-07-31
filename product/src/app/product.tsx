import { productNameType } from "./product-item-type";

export default function Product({id, productName, price, category}: productNameType) {
   
    return (
        <>
                <tr>
                    <td style={{border: "1px solid black", padding: "12px"}}>{id}</td>
                    <td style={{border: "1px solid black", padding: "12px"}}>{productName}</td>
                    <td style={{border: "1px solid black", padding: "12px"}}><del>$1200</del> <ins>{price}</ins></td>
                    <td style={{border: "1px solid black", padding: "12px"}}>{category}</td>
                </tr>
        </>
    )
}