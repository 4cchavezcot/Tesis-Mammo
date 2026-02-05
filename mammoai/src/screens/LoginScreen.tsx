import logo from "../assets/logo_mammoai.png";

export const LoginScreen = () => {
  return (
    <div className="bg-white w-screen h-screen">
      <header className="w-full h-10 bg-pink-600"></header>
      <div className="grid grid-cols-3 items-center h-full">
        {/* FORMULARIO */}
        <div className="col-span-2 w-full h-full flex justify-center items-center">
          <div className="w-1/2 flex flex-col gap-5">
            <h1 className="text-black font-bold text-start text-3xl">MammoAI</h1>
            <div className="flex flex-col gap-1 mb-5">
              <label className="text-black text-xs text-start">Usuario</label>
              <input
                className="border-[1px] border-gray-300 text-black shadow rounded-md py-2 px-3 text-xs"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-black text-xs text-start">
                Contraseña
              </label>
              <input
                className="border-[1px] border-gray-300 text-black shadow rounded-md py-2 px-3 text-xs"
                type="password"
              ></input>
            </div>
            <button className="bg-">Iniciar sesión</button>
          </div>
        </div>
        {/* LOGO */}
        <div className="flex justify-end items-center pr-6">
          <img src={logo} alt="MammoAI logo" className="h-full w-auto" />
        </div>
      </div>
    </div>
  );
};
