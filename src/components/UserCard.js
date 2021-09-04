import React from 'react'
import './UserCard.css'


export default function UserCard({ response }) {

    return (
        <div className="user-card">
            <div className="user-card-inside">
                <img className="image" src={response['data'].avatar_url} alt="omkar787" />
                <div className="content">
                    <h3 className="name follow">{response['data'].name}</h3>
                    <h4 className="username follow">{response['data'].login}</h4>
                    <p className="top-follow follow">Followers : {response['data'].followers}</p>
                    <p className="follow">Following : {response['data'].following}</p>
                </div>
            </div>

        </div>
    )
}
