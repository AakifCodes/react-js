export default function Button({ colorName = "Color", bgColor = "white", onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{ backgroundColor: bgColor }} 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
    >
      {colorName}
    </button>
  );
}