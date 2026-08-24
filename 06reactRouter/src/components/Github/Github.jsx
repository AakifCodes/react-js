import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Github(){
    const data = useLoaderData()
    
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/AakifCodes`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log();
    //         setData(data)
    //     })
    // }, [])

    return(
        <div className="text-center p-4 bg-gray-600 text-white text-3xl">Github Followers {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/user/190688141`)
    return response.json()
}