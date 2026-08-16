export default function Button({onClick}){
    return(
        <button onClick={onClick} className="outline-none bg-blue-600 text-white p-4 py-1 m-4 hover:bg-blue-800 rounded shrink-0 transition-colors">Copy</button>
    )
}