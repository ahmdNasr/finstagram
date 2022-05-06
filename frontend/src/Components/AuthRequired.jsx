import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { apiBaseUrl } from "../api/api"

const AuthRequired = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(props.token) {
            // no need to get a new token... it already exists

            // auf deutsch:
            // wenn der token schon gesetzt ist,
            // dann brauche ich nicht fetchen...
            // (und es lädt auch nichts mehr)
            setLoading(false)
            return
        }

        // no token exists...
        // see if user can get one by using /api/users/refreshtoken
        fetch(apiBaseUrl + "/api/users/refreshtoken", {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        .then(response => response.json())
        .then((data) => {
            setLoading(false)
            console.log(data)
            if(data.token) {
                props.setToken(data.token)
            }
        })
    }, [props])
    
    // logik:
    // if /refrehstoken loading --> show loading indicator...
    // if not loading then
        // if got token --> set token & show the content (aka props.children)
        // if got error --> go to login page (aka /)

    if(loading) {
        return <p className='text-light'>Loading...</p>
    } 
    
    if(!props.token) {
        return <Navigate to="/" />
    }

    // Protected Inhalt anzeigen....
    return <>{props.children}</>
}
 
export default AuthRequired;