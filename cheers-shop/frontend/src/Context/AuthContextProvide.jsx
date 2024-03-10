import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
export const AuthContext = createContext()

const AuthContextProvide = (props)=>{
    const navigateHome = useNavigate()
    const [formData, setformData]= useState({
        email:"",
        password:""
    })
    const [isAuth, setisAuth] = useState(false)
    const toast = useToast()
   
    const handleUserLogin = async(e)=>{
        e.preventDefault()
        
        await fetch("https://cheersapi.onrender.com/user/login", {
            method : "POST",
            body : JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
              },
        })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          if(res.msg=== "invalid credential")
          {
           toast({
             title: 'Invalid Details',
             description: "Invalid Email or Password.",
             status: 'error',
             duration: 1500,
             isClosable: true,
             position:"top"
           })
          }else if (res.msg === "please try again later")
          {
            toast({
              title: 'Login Failed.',
              description: "Wrong email or Password.",
              status: 'error',
              duration: 3000,
              isClosable: true,
              position:"top"
            })
          }else if(res.msg === "Login successfull")
          {
            toast({
              title: 'Logged in Successfull.',
              description: "Welcome",
              status: 'success',
              duration: 2000,
              isClosable: true,
              position:"top"
            })
            let user = {
                name: res.name,
                email: res.email,
                address: res.address,
                mobile: res.mobile,
                token: res.token
            }
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("auth",true)
            setisAuth(true)
            navigateHome("/cart")
          }         
        }).catch((err) => console.log(err))

      
    }

    return( 
        <AuthContext.Provider value={{isAuth,formData,setformData,handleUserLogin}}>
        {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvide
