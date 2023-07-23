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
    const handleAuth = ()=>{
        localStorage.setItem("auth",true)
        setisAuth(true)
        navigateHome("/cart")
    }
    const handleGetData = (e)=>{
        e.preventDefault()
        let userData = JSON.parse(localStorage.getItem("user")) || []
        if(userData.length == 0){
            console.log("userData")
            toast({
                title: `User Not Found !`,
                status: 'error',
                isClosable: true,
              })
        }else{
            console.log(userData)
            if(userData.email === formData.email && userData.password === formData.password){
                handleAuth()
            }else{
                toast({
                    title: `Wrong Credential !`,
                    status: 'error',
                    isClosable: true,
                  })
            }
        }
        
    }
    return( 
        <AuthContext.Provider value={{isAuth,formData,setformData,handleGetData}}>
        {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvide
