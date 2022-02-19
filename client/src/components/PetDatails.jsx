import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { myContext } from '../context/myContext';

export const PetDatails = () => {
    const navigate = useNavigate();
    const [like, setLike] = useState(0)
    const [disableBtn, setDisableBtn] = useState('')
    let id = useParams().id;
    const { pets,deletePet } = useContext(myContext)
    const petDetail = pets.filter(pet => pet._id === id)
    const handlerOnClick = (e) =>{
        e.preventDefault();
        deletePet(petDetail[0])
        navigate('/')
    }
    const handlerOnClickLike = () =>{
        setLike(1)
        setDisableBtn('disabled')
    }
    return (
        <div>
            <div className='row'>
                <div className='col-7'>
                    <h3>Details about: {petDetail[0].name}</h3>
                </div>
                <div className='col-5 '>
                    <button onClick={(e) => handlerOnClick(e)} className='btn btn-outline-danger'>Adopt {petDetail[0].name}</button>
                </div>
            </div>
            <div className="card mt-3" >
                <div className='row card-body'>
                    <h4 className='col-4 card-title'>Pet type:</h4>
                    <h4 className='col-8 card-title'>{petDetail[0].type}</h4>
                </div>
                <div className='row card-body'>
                    <h4 className='col-4 card-title'>Description:</h4>
                    <h4 className='col-8 card-title'>{petDetail[0].description}</h4>
                </div>
                <div className='row card-body'>
                    <h4 className='col-4 card-title'>Skills:</h4>
                    <div className='col-8'>
                            <h4 className='row card-title'>{petDetail[0].skill[1]}</h4>
                            <h4 className='row card-title'>{petDetail[0].skill[2]}</h4>
                            <h4 className='row card-title'>{petDetail[0].skill[3]}</h4>
                    </div>
                </div>
                <div className='row card-body text-center'>
                    <button onClick={handlerOnClickLike} className={`btn btn-success col-4 card-title ${disableBtn}`}>Like {petDetail[0].name}</button>
                    <h6 className='col-8 card-title'>{like} Likes(s)</h6>
                </div>
            </div>
        </div>
    )
}
