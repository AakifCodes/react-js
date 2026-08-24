import { useEffect, useState } from "react"

export default function Github(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/user/190688141`)
        .then(res => res.json())
        .then(data => {
            console.log();
            setData(data)
        })
    }, [])
    return(
        <div className="text-center p-4 bg-gray-600 text-white text-3xl">Github Followers {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}