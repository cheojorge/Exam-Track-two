import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const myContext = createContext();

export const MyProvide = ({children}) => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([])
    const [errorName, setErrorName] = useState("")
    const [errorType, setErrorType] = useState("")
    const [errorDescription, setErrorDescription] = useState("")
    const [valid1, setValid1] = useState("")
    const [valid2, setValid2] = useState("")
    const [valid3, setValid3] = useState("")
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet`)
            .then(res => setPets(res.data))
            .catch(err => console.log(err))
    }, [setPets])

    const deletePet = (item) => {
        axios.delete(`http://localhost:8000/api/pet/${item._id}`)
        .then(res => {
            setPets(pets.filter(pet => pet._id !== item._id))
            
            alert(`In good time ${item.name} was adopted`)
            

          })
    }
    const createPet = (name,type,description,skill) => {
        let checkName = pets?.find(pet => pet.name === name)
        if(checkName){
            alert(`pet with the name ${name} already exists`)
        }else{

        axios.post(`http://localhost:8000/api/pet`,{
            name,
            type,
            description,
            skill
        })
            .then(res => {
                setPets([...pets,res.data])
                alert("New Pet create")
                setErrorName('')
                setErrorType('')
                setErrorDescription('')
                navigate('/')
            })
            .catch(err => {
                if(err.response.data.errors.name){
                    setErrorName(err.response.data.errors.name.message)
                    setValid1('is-invalid')
                }
                if(err.response.data.errors.type){
                     setErrorType(err.response.data.errors.type.message)
                     setValid2('is-invalid')
                }
                if(err.response.data.errors.description){
                    setErrorDescription(err.response.data.errors.description.message)
                    setValid3('is-invalid')
                }    
            })     
        }
         
    }

    const updatePet = (id, name, type, description, skill) => {
        axios.put(`http://localhost:8000/api/pet/${id}`,{
            name,
            type,
            description,
            skill
        })
            .then(res => {
                alert("Pet edited")
                setErrorName('')
                setErrorType('')
                setErrorDescription('')
                navigate('/')
            })
            .catch(err => {
                if(err.response.data.errors.name){
                    setErrorName(err.response.data.errors.name.message)
                    setValid1('is-invalid')
                }
                if(err.response.data.errors.type){
                     setErrorType(err.response.data.errors.type.message)
                     setValid2('is-invalid')
                }
                if(err.response.data.errors.description){
                    setErrorDescription(err.response.data.errors.description.message)
                    setValid3('is-invalid')
                }
            })
    }
    return (
        <myContext.Provider 
            value={
                {
                    pets,
                    setPets,
                    createPet,
                    deletePet,
                    errorDescription,
                    errorName,
                    errorType,
                    valid1,
                    valid2,
                    valid3,
                    setValid1,
                    setValid2,
                    setValid3,
                    updatePet
                }
            }
        >
            {children}
        </myContext.Provider>
    )
}