import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

const App = () => {
  const usersData = [
    {
      id: 1,
      name: "Uyen",
      student_id: "20176063",
      class: "LTU16B",
      generation: "K62",
      email: "email",
      phone: "0983748",
      image:
        "https://media.istockphoto.com/photos/aurora-borealis-over-in-the-dark-night-sky-over-the-snowy-mountains-picture-id1277499450",
      address: "ha noi",
    },
    {
      id: 2,
      name: "Tania",
      student_id: "20176063",
      class: "LTU16B",
      generation: "K62",
      email: "email",
      phone: "0983748",
      image: "imageddd",
      address: "ha noi",
    },
  ];

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);

  const initialFormState = {
    id: null,
    name: "",
    student_id: "",
    class: "",
    generation: "",
    email: "",
    phone: "",
    image: "",
    address: "",
  };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addRow = () => {
    setAdding(true);
  };

  const addUser = (user) => {
    setAdding(false);

    user.id = users.length + 1;
    setUsers([...users, user]);
    console.log(users);
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      student_id: user.student_id,
      class: user.class,
      generation: user.generation,
      email: user.email,
      phone: user.phone,
      image: user.image,
      address: user.address,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>Danh sách sinh viên</h1>
      <div>
        {editing ? (
          <div>
            <h2>Sửa sinh viên</h2>
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : null}
      </div>
      <div>
        {adding ? (
          <div>
            <h2>Thêm sinh viên</h2>
            <AddUserForm setAdding={setAdding} addUser={addUser} />
          </div>
        ) : null}
      </div>
      <div className="flex-large">
        {adding ? null : editing ? null : (
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
            addRow={addRow}
          />
        )}
      </div>
    </div>
  );
};

// const App = () => {
//   const { isShowing, toggle } = useModal();
//   return (
//     <div>
//       <button onClick={toggle}>Show Modal</button>
//       <Modal isShowing={isShowing} hide={toggle} />
//     </div>
//   );
// };

export default App;
