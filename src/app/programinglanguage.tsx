export default function ProgramingLanguage() {
    let alldata = [
        {
            images: `/react.png`,
            heading: "React",
            p: "The library for web and native user interfaces",
            button1: "Learn React",
            button2: "Api Reference"
        },
        {
            images: `/js.png`,
            heading: "JavaScript",
            p: "The library for web and native user interfaces",
            button1: "Learn JavaScript",
            button2: "Api Reference"

        },
        {
            images: `/python.png`,
            heading: "Python",
            p: "The library for web and native user interfaces",
            button1: "Learn Python",
            button2: "Api Reference"

        },
        {
            images: `/node.png`,
            heading: "Nodejs",
            p: "The library for web and native user interfaces",
            button1: "Learn Nodejs",
            button2: "Api Reference"

        },

    ]
  
        
  

    return (
        <>
            <>{

                alldata.map((e)=> (
                <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <img src={e.images} alt="language logo" width={100} height={100} />
                    <h1 style={{ fontWeight: "900", fontSize: "34px" }} className="mt-10">  {e.heading} </h1>
                    <p style={{ fontWeight: "600", fontSize: "20px" }} className="mt-10">{e.p}</p>
                    <div className="mt-10">
                        <button style={{ backgroundColor: "blue", color: "white", padding: "6px 18px" }} className="rounded" >{e.button1}</button>
                        <button style={{ padding: "6px 18px", marginLeft: "4px", border: "1px solid gray" }} className="rounded">Api Reference</button>
                    </div>
                </div>

                    ))
                }
            </>
        </>
    )
}