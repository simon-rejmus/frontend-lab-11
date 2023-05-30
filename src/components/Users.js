import React, { useState } from "react";
import 'isomorphic-fetch';

function Users() {
    const [user, setUser] = useState('');

    const fetchUser = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            setUser(data.results[0]);
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    return (
        <div>
            <h1>Users</h1>
            <br/>
            <button onClick={fetchUser}>Losuj użytkownika</button>
            <br/>
            {user && (
                <div className="user">
                    <img src={user.picture.medium} alt="User profile"/>
                    <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
                    <p>Email: {user.email}</p>
                    <p>Nationality: {user.nat}</p>
                </div>
            )}
        </div>
    );
}

export default Users;