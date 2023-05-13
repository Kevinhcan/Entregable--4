import React from "react";

const UserCard = ({ user, deleteUser, handleCilciEdit }) => {
  return (
    <article className="border border-gray-400 border-1 bg-slate-100 rounded-md">
      <div>
        <img
          className="w-[150px] aspect-[5/5] object-cover mx-auto m-2 rounded-md"
          src={user.image_url ? user.image_url : "/images/profile.png"}
          alt=""
        />
      </div>
      <h3 className="m-2 ">
        <span className="grid text-zinc-500 text-xs ">NOMBRE</span>
        {user.first_name} {user.last_name}
      </h3>
      <ul>
        <li className="m-2 ">
          <h4 className="text-zinc-500 text-xs">CORREO</h4>
          <span>{user.email}</span>
        </li>
        <li className="m-2">
          <h4 className="text-zinc-500 text-xs">CUMPLEAÑOS</h4>
          <span>
            <i className="bx bx-gift m-1 text-xl"></i>
            {user.birthday}
          </span>
        </li>
      </ul>
      <div className="float-right m-2">
        <button className="m-1 items-center justify-center bg-red-500 h-8 w-8 rounded-md hover:bg-purple-p/90 transition-colors" onClick={() => deleteUser(user.id)}>
          <i className="bx bx-trash text-xl "></i>
        </button>
        <button className="m-1 bg-gray-500 bg-opacity-30 h-8 w-8 rounded-md items-center justify-center hover:bg-purple-p/90 transition-colors" onClick={() => handleCilciEdit(user)}>
          <i className="bx bx-pencil text-xl"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
