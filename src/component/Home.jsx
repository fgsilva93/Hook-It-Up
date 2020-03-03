import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const [user, setUser] = useState([]);

    const getUser = async () => {
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let user = await res.json()
        setUser(user);
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className="container">
            <div>
                {user.map(user => {
                    return (
                        <div key={user.id}>
                            <h1>{user.name}</h1>
                            <Link to={`/${user.id}/details`}>
                            <button>Learn More</button>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
