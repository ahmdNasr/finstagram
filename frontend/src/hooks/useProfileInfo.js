import { useEffect, useState } from "react"
import { apiBaseUrl } from "../api/api"

// custom hook
export const useProfileInfo = (token) => {
    const [profileInfo, setProfileInfo] = useState(null)

    useEffect(() => {
        if(!token) {
            return
        }

        fetch(apiBaseUrl + "/api/users/myProfileInfo", {
            headers: {
                token: "JWT " + token
            }
        })
        .then(response => response.json())
        .then(profileInfoResult => setProfileInfo(profileInfoResult))
    }, [token])

    return profileInfo
}