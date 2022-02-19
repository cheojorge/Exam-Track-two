import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { myContext } from '../context/myContext'

export const Form = () => {
    let id = useParams().id;
    const {
        createPet,
        errorDescription,
        errorName,
        errorType,
        valid1,
        valid2,
        valid3,
        setValid1,
        setValid2,
        setValid3,
        pets,
        updatePet
    } = useContext(myContext)
    
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState('')
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    
    useEffect(() => {
        setValid1('')
        setValid2('')
        setValid3('')
        if(id){
            const petDetail = pets.filter(pet => pet._id === id)
            setName(petDetail[0].name)
            setType(petDetail[0].type)
            setDescription(petDetail[0].description)
            setSkill1(petDetail[0].skill[1])
            setSkill2(petDetail[0].skill[2])
            setSkill3(petDetail[0].skill[3])
            
        }
       
    }, [id])



    const handlerOnChangeName = (e) => {
        setName((e.target.value).toUpperCase())
        setValid1('')
    }
    const handlerOnChangeType = (e) => {
        setType((e.target.value).toUpperCase())
        setValid2('')
    }
    const handlerOnChangeDescription = (e) => {
        setDescription(e.target.value)
        setValid3('')
    }
    const handlerOnChangeSkill1 = (e) => {
        setSkill1(e.target.value)
    }
    const handlerOnChangeSkill2 = (e) => {
        setSkill2(e.target.value)
    }
    const handlerOnChangeSkill3 = (e) => {
        setSkill3(e.target.value)
    }
    const handlerOnSubmit = (e) => {
        e.preventDefault();
        if(id){
            const petSkill = {
                1: skill1,
                2: skill2,
                3: skill3,
            }
            updatePet(id, name, type, description, petSkill)
        }else{
            const petSkill = {
                1: skill1,
                2: skill2,
                3: skill3,
            }
            createPet(name, type, description, petSkill)
        }
        
    }
  
    return (
        <>
            <h4>Know a pet needing a home?</h4>
            <div className='p-2'>
                <form className="row g-4 mt-1 border  border-dark">
                    <div className='col-6'>
                        <label htmlFor="name" className="col-sm-2 col-form-label">Pet Name:</label>
                        <div className="col-sm-10 mb-3">
                            <input
                                onChange={handlerOnChangeName}
                                type="text"
                                className={`form-control ${valid1}`}
                                
                                id="name"
                                value={name}
                            />
                            <div className="invalid-feedback">
                                {errorName}
                            </div>
                        </div>
                        <label htmlFor="name" className="col-sm-2 col-form-label">Pet Type::</label>
                        <div className="col-sm-10 mb-3">
                            <input
                                onChange={handlerOnChangeType}
                                type="text"
                                className={`form-control ${valid2}`}
                                
                                id="name"
                                value={type}
                            />
                            <div className="invalid-feedback">
                                {errorType}
                            </div>
                        </div>
                        <label htmlFor="name" className="col-sm-2 col-form-label">Pet Description:</label>
                        <div className="col-sm-10 mb-3">
                            <input
                                onChange={handlerOnChangeDescription}
                                type="text"
                                className={`form-control ${valid3}`}
                                
                                id="name"
                                value={description}
                            />
                            <div className="invalid-feedback">
                                {errorDescription}
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <h6>Skills (optional)</h6>
                        <label htmlFor="name" className="col-sm-2 col-form-label">Skill 1:</label>
                        <div className="col-sm-10 mb-3">
                            <input
                                onChange={handlerOnChangeSkill1}
                                type="text"

                                className={`form-control`}
                                id="name"
                                value={skill1}
                            />

                        </div>
                        <label htmlFor="name" className="col-sm-2 col-form-label">Skill 2:</label>
                        <div className="col-sm-10 mb-3">
                            <input
                                onChange={handlerOnChangeSkill2}
                                type="text"

                                className={`form-control`}
                                id="name"
                                value={skill2}
                            />
                        </div>
                        <label htmlFor="name" className="col-sm-2 col-form-label">Skill 3:</label>
                        <div className="col-sm-10 mb-3">
                            <input
                                onChange={handlerOnChangeSkill3}
                                type="text"
                                className={`form-control`}
                                id="name"
                                value={skill3}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        {
                            id 
                            ?   <div className="col-auto text-center">
                                    <button onClick={handlerOnSubmit} type="button" className={`btn btn-outline-success`}>Edit Pet</button>
                                </div>
                            :   <div className="col-auto text-center">
                                    <button onClick={handlerOnSubmit} type="button" className={`btn btn-outline-success`}>Add Pet</button>
                                </div> 
                    }

                       

                    </div>
                </form>
            </div>
        </>
    )
}
