import React from "react";

const UserTable = (props) => {
  return (
    <div>
      <button
        className="button muted-button"
        onClick={() => {
          props.addRow();
        }}
      >
        Thêm
      </button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Họ tên</th>
            <th>Mã số sinh viên</th>
            <th>Lớp</th>
            <th>Khoá</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Ảnh</th>
            <th>Địa chỉ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <tr key={user._id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.student_id}</td>
                <td>{user.class}</td>
                <td>{user.generation}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <img src={user.image}></img>
                </td>
                <td>{user.address}</td>
                <td>
                  <button
                    className="button muted-button"
                    onClick={() => {
                      props.editRow(user);
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => props.deleteUser(user._id)}
                    className="button muted-button"
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={10}>Không có sinh viên nào</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
