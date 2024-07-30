"use client"
type defineCate = {
    reciveCate: string[]
}


export default function Category({ reciveCate }: defineCate) {

    const selectCate = (cateName: string) => {
        console.log(cateName)
    }

    return (
        <>
            <div style={{ width: "90%", }} className="text-center m-1">
                {
                
                    reciveCate.map((curr, i)=> (
                        <button style={{ border: "2px solid blue", padding: "4px 18px" }} className="mr-2" onClick={ ()=>{selectCate(curr)} }>{curr}</button>
                    ))

                }
            </div>
        </>
    )
}