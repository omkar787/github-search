import React, { useState, useEffect } from 'react'
import './Container.css'
import axios from 'axios'
import UserCard from './UserCard'

export default function Container({ search }) {
    const url = "https://api.github.com"
    const [response, setresponse] = useState(null)

    function getUserData(username) {
        axios.get(`${url}/users/${username}`)
            .then((res) => {
                setresponse(res)
                console.log(response);
            })
    }
    
    // useEffect(() => {
    //     getUserData(search)
    // }, [])

    useEffect(() => {
        getUserData(search)
    },[search])

    return (
        <div className="container-inside">
            {
                response?<UserCard response={response} />:""
            }
            
        </div>
    )
}
