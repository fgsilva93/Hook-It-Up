import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
// import { getQueriesForElement } from '@testing-library/react';
// import { useParams, useState, useEffect } from 'react-router-dom';

const Page = () => {
    const [user, setUser] = useState({});
    let { id } = useParams();


    useEffect(() => {
        const getUser = async () => {
            let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            let user = await res.json()
            setUser(user);
        }

        getUser();
    }, [id])

    return (
        <div className="container">
            <div>
                <h1>{user.name}</h1>
                <h3>{user.username}</h3>
                <h3>{user.email}</h3>
                <h3>{user.phone}</h3>
            </div>
        </div>
    )
}

export default Page
