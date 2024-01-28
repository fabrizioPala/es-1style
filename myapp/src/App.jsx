import { Login } from "./Login";
import { Welcome } from "./Welcome.jsx";
import { UncontrolledFOrm } from "./uncontrolledForm.jsx";


function handleLogin(logindata){
 console.log(logindata)
}
export function App() {
    return (
        <div>
           
           <Welcome name={"Jhon"}/>         
        </div>
        
    );
}
