# Student API - Week 7
# 20194270
 Application runs at: http://localhost:3000
## Run Project :  npm start
## Description 5 API
### Get all students

URL : /SinhVien/

Method : GET

##### Example Response
```json
[
  {
    "_id": "618e47a51b2c63fb4b46ea4b",
    "name": "Hai",
    "MSSV": "20194271",
    "Lop": "-1",
    "Khoa": "0",
    "Email": "email@email\n",
    "SDT": "-1",
    "Anh": "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    "DiaChi": "Ha Tay",
    "__v": 0
  },
  {
    "_id": "618e488f1b2c63fb4b46ea4e",
    "name": "Duy",
    "MSSV": "20194272",
    "Lop": "-1",
    "Khoa": "0",
    "Email": "email@email\n",
    "SDT": "-1",
    "Anh": "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    "DiaChi": "Ha Tay",
    "__v": 0
  }
]

```
### Get one student

URL : /SinhVien/:mssv

Method : GET

##### Example Response
```json
{
  "_id": "618e47a51b2c63fb4b46ea4b",
  "name": "Hai",
  "MSSV": "20194271",
  "Lop": "-1",
  "Khoa": "0",
  "Email": "email@email\n",
  "SDT": "-1",
  "Anh": "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
  "DiaChi": "Ha Tay",
  "__v": 0
}
```
### Create new student

URL : /SinhVien/

Method : POST

##### Example Data
```json
{
  "_id": "618e47a51b2c63fb4b46ea4b",
  "name": "Hai",
  "MSSV": "20194271",
  "Lop": "-1",
  "Khoa": "0",
  "Email": "email@email\n",
  "SDT": "-1",
  "Anh": "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
  "DiaChi": "Ha Tay",
  "__v": 0
}
```
### Update student

URL : /SinhVien/:MSSV

Method : PUT

##### Example Data and Response
```json
{
  "_id": "618e47a51b2c63fb4b46ea4b",
  "name": "Hai",
  "MSSV": "20194271",
  "Lop": "-1",
  "Khoa": "0",
  "Email": "email@email\n",
  "SDT": "-1",
  "Anh": "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
  "DiaChi": "Ha Tay",
  "__v": 0
}
````

### Delete student

URL : /SinhVien/:MSSV

Method : DELETE

