export default function Button({colorName = "Color", bgColor = "white"}){
    return(
        <button style={{ backgroundColor: bgColor }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">{colorName}</button>
    )
}