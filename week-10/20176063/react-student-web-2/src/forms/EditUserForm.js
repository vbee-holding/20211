import React, { useState } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    if (event.target.files) {
      let file = event.target.files[0];

      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          // console.log(reader.result);
          value = reader.result;

          setUser({ ...user, [name]: value });
        };
      }
    } else {
      setUser({ ...user, [name]: value });
    }
    
  };

  //   useEffect(() => {
  //     setUser(props.currentUser);
  //   }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user._id, user);
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
        type="file"
        accept="image/*"
        name="image"
        alt=""
        
        onChange={handleInputChange}
      />
      <label>Địa chỉ</label>
      <input
        type="text"
        name="address"
        value={user.address}
        onChange={handleInputChange}
      />

      <button>Sửa</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Huỷ
      </button>
    </form>
  );
};

export default EditUserForm;
