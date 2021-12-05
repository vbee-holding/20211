import React, { useState, useEffect } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [users, setUsers] = useState([]);
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

  const getUsers = () => {
    fetch("https://api-dev-bootcamp-aurora0210.herokuapp.com/student")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          if (result.length > 0) {
            for (let i = 0; i < result.length; i++) {
              result[i].id = i + 1;
            }
          }
          setUsers(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const postUser = (user) => {
    fetch("https://api-dev-bootcamp-aurora0210.herokuapp.com/student", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(user),
    })
      .then(() => {
        alert("Tạo thành công!!!");
      })
      .then(() => {
        getUsers();
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const addRow = () => {
    setAdding(true);
  };

  const addUser = (user) => {
    setAdding(false);

    postUser(user);
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      _id: user._id,
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

  const updateUser = (_id, updatedUser) => {
    setEditing(false);

    console.log(updatedUser);
    fetch(`https://api-dev-bootcamp-aurora0210.herokuapp.com/student/${_id}`, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(updatedUser),
    })
      .then(() => {
        console.log("Loading");
        alert("Sửa thành công!!!");
      })
      .then(() => {
        getUsers();
      });

    // setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (_id) => {
    fetch(`https://api-dev-bootcamp-aurora0210.herokuapp.com/student/${_id}`, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
    })
      .then(() => {
        console.log("Loading");
        alert("Xoá thành công!!!");
      })
      .then(() => {
        getUsers();
      });
  };

  if (!error) {
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
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
};

export default App;
