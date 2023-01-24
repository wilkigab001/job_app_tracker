import {useState, useEffect, useCallback, createContext} from 'react'

let logoutTimer

const AuthContext = createContext({
    token:'',
    login: () => {},
    logout: () => {},
    userId: null,
})

const calculateTimeRemaining = exp => {
    const currentTime = new Date().getTime()
    const expTime = exp
    const remainingTime = expTime - currentTime
    return remainingTime
}

const getLocalData = () => {
    const storedToken = localStorage.getItem('token')
    const storedExp = localStorage.getItem('exp')
    const storedId = localStorage.getItem('userId')

    const remainingTime = calculateTimeRemaining(storedExp)

    if(remainingTime <= 1000 * 60 * 30){
        localStorage.removeItem('userId')
        localStorage.removeItem('exp')
        localStorage.removeItem('token')
        return null
    }

    return{
        token: storedToken,
        duration: remainingTime,
        userId: +storedId
    }
}

export const AuthContextProvider = (props) => {
    const localData = getLocalData()

    let initialTime
    let initialId
    if(localDate){
        initialToken = localData.token
        initialId = localData.userId
    }
    const [token, setToken] = useState(initialToken)
    const [userId, setUserId] = useState(initialId)

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem('token')
        localStorage.removeItem('exp')
        localStorage.removeItem('userId')
    
        if(logoutTimer){
            clearTimeout(logoutTimer)
        }
    }, [])

    const login = (token, exp, userId) => {
        setToken(token)
        setUserId(userId)

        localStorage.setItem('userId', userId)
        localStorage.setItem('token', token)
        localStorage.setItem('exp', exp)

        const remainingTime = calculateTimeRemaining(exp)

        logoutTimer = setTimeout(logout, remainingTime)
    }

    useEffect(() =>{
        if(localData)
        logoutTimer = setTimeout(logout, localData.duration)
    }, [localData, logout])

    const contextValue = {
        token,
        login,
        logout,
        userId
    }

    return (
        <AuthContext.Provider value = {contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
} 