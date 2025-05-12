import React from 'react'

function ProfileCard({ name, age, isGood, hobbies, onHobbyClick }) {
    return (
        <div className='profile-card'>
            <h3>Full Name: {name}</h3>
            <h3>Age: {age}</h3>
            <h3>Status: {isGood ? 'Yes' : 'No'}</h3>
            <h3>Hobbies</h3>
            <ul>
                {hobbies.map((hobby, index) => {
                    return <li key={index} onClick={() => { onHobbyClick(hobby) }}>{hobby}</li>
                    console.log(hobby);
                })}
            </ul>
        </div>
    )
}

export default ProfileCard