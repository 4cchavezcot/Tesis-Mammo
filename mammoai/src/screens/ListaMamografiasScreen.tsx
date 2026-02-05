import icon_header from "../assets/icon_header.png";

export const ListaMamografiasScreen = () => {
  return (
    <div className="bg-white w-screen h-screen">
      <header className="w-full h-10 bg-pink-600 flex items-center px-3 gap-2">
        <img src={icon_header}></img>
        <p className="text-start text-sm font-bold">MammoAI</p>
      </header>
      <div>
        <h1 className="text-black font-bold text-xl">Lista de mamografías</h1>
        <p className="text-black text-xs">Cargar mamografías</p>
        <table>
            
        </table>
      </div>
    </div>
  );
};
