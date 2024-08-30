
type ProgLangType = {
    params: any;        // changing filhal key liye any diya hai
}
export default function ProgLangNames ({params}:ProgLangType) {
    const {langname} = params;

    console.log(params)    
    return (
        <>
            <h1>Programing Languages Names</h1>
            <p>Please Enter Data but url in / and enter your personal data.</p>
            <ul>
                <li>{langname}</li>
            </ul>
        </>
    )
}