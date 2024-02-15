import axios from "axios"

const loader = async () => {
    const token = localStorage.getItem("token")
    try {
        const res = await axios.get("api/user", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
       if(res.status == 200) {
            return window.location.href = "/home"
       }
    } catch (error) {
       if(error.response.status == 500) {
        console.error(error)
       }
    }
    return null
}

export default loader