export function UncontrolledFOrm(){
    function handleSub(e){
        e.preventDefault()
        const username= e.target.elements.namedItem("username").value
        const password= e.target.elements.namedItem("password").value
        const checkbox= e.target.elements.namedItem("session").checked
        const data={
         username,
         password,
         checkbox
        }
        console.log(data)
    }
    return(
        <form onSubmit={handleSub}action=" ">
            <h1>Uncontrolled Form</h1>
            <input name={"username"}type="text" />
            <input name={"password"} type="text" />
            <input name={"session"}type="checkbox" />
            <button>Submit</button>
            <button type="reset">Reset</button>
        </form>
    )
}