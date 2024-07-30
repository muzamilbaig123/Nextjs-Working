export default function ProgramingLanguage() {
    let alldata = [
        {
            images: `<svg width="10%" height="10%" viewBox="-10.5 -9.45 21 18.9" fill="blue" xmlns="http://www.w3.org/2000/svg" className="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="blue"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>`,
            heading: "React",
            p: "The library for web and native user interfaces",
            button1: "Learn React",
            button2: "Api Reference"
        },
        {
            images: `<svg width="10%" height="10%" viewBox="-10.5 -9.45 21 18.9" fill="blue" xmlns="http://www.w3.org/2000/svg" className="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="blue"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>`,
            heading: "JavaScript",
            p: "The library for web and native user interfaces",
            button1: "Learn JavaScript",
            button2: "Api Reference"

        },
        {
            images: `<svg width="10%" height="10%" viewBox="-10.5 -9.45 21 18.9" fill="blue" xmlns="http://www.w3.org/2000/svg" className="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="blue"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>`,
            heading: "Python",
            p: "The library for web and native user interfaces",
            button1: "Learn Python",
            button2: "Api Reference"

        },
        {
            images: `<svg width="10%" height="10%" viewBox="-10.5 -9.45 21 18.9" fill="blue" xmlns="http://www.w3.org/2000/svg" className="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="blue"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>`,
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
                    <svg width="10%" height="10%" viewBox="-10.5 -9.45 21 18.9" fill="blue" xmlns="http://www.w3.org/2000/svg" className="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="blue"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
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