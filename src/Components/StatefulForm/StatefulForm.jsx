import { useState } from "react";


const StatefulForm = () => {
    const [email, setEmail]=useState(null);
    const [name,setName] =useState("person");
    const [password,setPassword]=useState("");

    const [error,setError]=useState("");



    const handleSubmit=e=>{
        e.preventDefault();
        if(password.length<6){
            setError("Password must me over 6 char")
        }
        else{            
            setError("");
              console.log(name,email,password);

        }
      
        
    }

    const handleNameChange= e=>{
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmailChange= e=> {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange= e=> {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input
                    onChange={handleNameChange}
                    value={name} type="text" name="name" />
                <br />
                <input 
                    onChange={handleEmailChange} 
                    type="email" name="email" id="" />
                <br />
                <input 
                    onChange={handlePasswordChange}
                    type="password" name="password" id="" required />
                <br />
                <input type="submit" />

            </form>
            <div>
           {
            error &&  <p>{error}</p>
           }
            </div>
        </div>
    );
};

export default StatefulForm;