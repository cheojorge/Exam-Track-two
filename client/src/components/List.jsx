import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../context/myContext'

export const List = () => {
    const { pets, setPets } = useContext(myContext)
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet`)
            .then(res => setPets(res.data))
            .catch(err => console.log(err))
    }, [setPets])

  return (
    <div>
        <h4>These pets are looking fro a good home</h4>
         <table className="table table-striped table-hover border border-dark mt-3">
                    <thead className="table-dark ">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pets?.map((pet, index) =>
                                <tr key = {index}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <Link to={`/${pet._id}`}>details</Link>
                                        <em> | </em>
                                        <Link to={`/pets/${pet._id}/edit`}>edit</Link>
                                    </td>
                                </tr>

                            )
                        }
            

                    </tbody>
                </table>
    </div>
  )
}
