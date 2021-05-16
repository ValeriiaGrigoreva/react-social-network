import React from "react"
import styles from './users.module.css'

const Users = (props) => {
    if(props.users.length == 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://kg-portal.ru/img/80411/main_2x.jpg',followed: true, fullName: "Valeriia", status: "senior HTML", location: {city: "Saint Petersburg", country: "Russia"}},
            {id: 2, photoUrl: 'https://kg-portal.ru/img/80411/main_2x.jpg', followed: true, fullName: "Katya", status: "senior HTML", location: {city: "Amsterdam", country: "The Netherlands"}},
            {id: 3, photoUrl: 'https://kg-portal.ru/img/80411/main_2x.jpg', followed: false, fullName: "Selena", status: "senior HTML", location: {city: "Berlin", country: "Germany"}} , 
        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button> 
                            : <button onClick={ () => {props.follow(u.id)} }>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users