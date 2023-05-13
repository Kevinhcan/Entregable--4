const Header = ({ setIsShowForm }) => {
  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm);
  };

  return (
    <header className="grid grid-cols-1 sm:grid-cols-2 m-4">
      <h1 className="col-span-1 text-4xl ml-10 font-bold">Ususarios</h1>
      <div className="col-span-1 flex justify-end ">
        <button
          onClick={handleClickShowModal}
          className=" bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm w-48 h-10 m-2 flex items-center justify-center sm:justify-start">
          <i className="bx bx-plus-circle text-xl m-2"></i>Crear nuevo usuario{" "}
        </button>
      </div>
    </header>

    
  );
};

export default Header;
