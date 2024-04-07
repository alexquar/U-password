import { useState } from "react"
export default function CheckPassword({option}) {
    const [password,setPassword] = useState(option)
    const [strengthBar, setStrengthBar]= useState('')
    const checkPassword =()=>{
        let strength=0;
        if (password.match(/[a-z]+/)){
            strength+=1;
        }
        if (password.match(/[A-Z]+/)){
            strength+=1;
        }
        if (password.match(/[0-9]+/)){
            strength+=1;
        }
        if (password.match(/[$@#&!*^.'"|-_=+%,<>;;`~?]+/)){
            strength+=1;
    
            }
        setStrengthBar(`${strength}`)
    }
  return (
    <div>
      
    </div>
  )
}
