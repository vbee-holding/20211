import React from "react";
import './ListStudents.css'



class TableHeader extends React.Component {
    render () {
        return  (
            <tr>
                <td key = "1"  className = "students-list__table__name-column">Họ Tên</td>
                <td key = "2"  className = "students-list__table__MSSV-column">MSSV</td>
                <td key = "3"  className = "students-list__table__class-column">Lớp</td>
                <td key = "4"  className = "students-list__table__khoa-column">Khóa</td>
                <td key = "5"  className = "students-list__table__email-column">Email</td>
                <td key = "6"  className = "students-list__table__sdt-column">SĐT</td>
                <td key = "7"  className = "students-list__table__diachi-column">Địa chỉ</td>
                <td key = "8"  className = "students-list__table__modifier-column">Sửa đổi</td>
                <td key = "9"  className = "students-list__table__delete-column">Xóa</td>
                <td key = "10" className = "students-list__table__detail-column">Chi tiết</td>
            </tr>
        )
    }

}

export default TableHeader;