import Product from "./product";
import { productNameType } from "./product-item-type";

type ProductListtypeArray = {
    prodList: productNameType[]
}

export default function AllProducts ({prodList}: ProductListtypeArray) {
    return (
        <>
             <table style={{width: "90%"}}>
                <thead>
                <tr>
                    <th style={{border: "1px solid black", padding: "12px"}}>Serial No</th>
                    <th style={{border: "1px solid black", padding: "12px"}}>Product Name</th>
                    <th style={{border: "1px solid black", padding: "12px"}}>Price</th>
                    <th style={{border: "1px solid black", padding: "12px"}}>Category</th>
                </tr>
                </thead>
                <tbody>
                    {
                        prodList.map(({id, productName, price, category})=> (
                            <Product 
                            key={productName + id}
                            id={id}
                            productName={productName}
                            price={price}
                            category={category}
                            />
                        ))

                    }

                </tbody>
            </table>
        </>
    )
}