import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", student_id: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Họ tên</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />

      <label>Mã số sinh viên</label>
      <input
        type="text"
        name="student_id"
        value={user.student_id}
        onChange={handleInputChange}
      />
      <label>Lớp</label>
      <input
        type="text"
        name="class"
        value={user.class}
        onChange={handleInputChange}
      />
      <label>Khoá</label>
      <input
        type="text"
        name="generation"
        value={user.generation}
        onChange={handleInputChange}
      />

      <label>Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <label>Số điện thoại</label>
      <input
        type="text"
        name="phone"
        value={user.phone}
        onChange={handleInputChange}
      />

      <label>Ảnh</label>
      <input
        type="text"
        name="image"
        value={user.image}
        onChange={handleInputChange}
      />
      <label>Địa chỉ</label>
      <input
        type="text"
        name="address"
        value={user.address}
        onChange={handleInputChange}
      />

      <button>Tạo</button>
      <button
        onClick={() => props.setAdding(false)}
        className="button muted-button"
      >
        Huỷ
      </button>
    </form>
  );
};

export default AddUserForm;
