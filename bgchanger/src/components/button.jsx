export default function Button({ colorName = "Color", textColor = "black", bgColor = "white", onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }} 
      className="outline-none px-4 py-1 rounded-full shadow-lg cursor-pointer"
    >
      {colorName}
    </button>
  );
}