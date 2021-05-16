const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://kg-portal.ru/img/80411/main_2x.jpg',followed: true, fullName: "Valeriia", status: "senior HTML", location: {city: "Saint Petersburg", country: "Russia"}},
        // {id: 2, photoUrl: 'https://kg-portal.ru/img/80411/main_2x.jpg', followed: true, fullName: "Katya", status: "senior HTML", location: {city: "Amsterdam", country: "The Netherlands"}},
        // {id: 3, photoUrl: 'https://kg-portal.ru/img/80411/main_2x.jpg', followed: false, fullName: "Selena", status: "senior HTML", location: {city: "Berlin", country: "Germany"}} , 
    ],

    newPostText: ""
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id == action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id == action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default: return state;
    }
}

export const followAC = (userId) => {
   return {
        type: FOLLOW, 
        userId,
    }
}

export const unfollowAC = (userId) => ({type:UNFOLLOW, userId});
export const setUsersAC = (users) => ({type:SET_USERS, users});

