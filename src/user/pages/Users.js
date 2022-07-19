import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Utsav Acharya",
      image:
        "https://torange.biz/photofxnew/76/HD/lion-profile-picture-76801.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
