import UserCard from "./UserCard";

const UsersList = ({ users, deleteUser, handleCilciEdit }) => {
  return (
    <section className="grid gap-10 auto-row grid-cols-[repeat(auto-fill,_250px)] justify-center">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          handleCilciEdit={handleCilciEdit}
        />
      ))}
    </section>
  );
};

export default UsersList;
