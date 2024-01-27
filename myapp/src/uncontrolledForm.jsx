export function UncontrolledFOrm(){
    function handleSub(e){
        e.preventDefault()
        const formData= new FormData(e.target)
        const data={
         username: formData.get("username"),
         password: formData.get("password"),
         checkbox:formData.get("session")==="on" ? true:false
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