# Student API - Week 7

    Application runs at: http://localhost:3333

## Run Project
    node app.js

## Description 5 API

 1. Get all students

    **URL** : `/api/v1/student/all`

    **Method** : `GET`

    **Example Response**

    ```json
    [
        {
            "_id": "618e2a35827007e182a55b47",
            "mssv": 20170001,
            "ten": "Tran Van A",
            "lop": "KHMT-04",
            "khoa": "K62",
            "email": "test@email.com",
            "sdt": "09123456",
            "anh": "https://example.com/avatar1",
            "diaChi": "Hai Ba Trung - Ha Noi",
            "__v": 0
        },
        {
            "_id": "618e2a74827007e182a55b4b",
            "mssv": 20170002,
            "ten": "Hoang Van B",
            "lop": "KHMT-04",
            "khoa": "K62",
            "email": "HoangVanB@email.com",
            "sdt": "09123457",
            "anh": "https://example.com/avatar2",
            "diaChi": "Thanh Xuan - Ha Noi",
            "__v": 0
        }
    ]
    ```

2. Get student 

    **URL** : `/api/v1/student/:mssv`

    **Method** : `GET`

    **Example Response**

    ```json
    {
        "_id": "618e2a35827007e182a55b47",
        "mssv": 20170001,
        "ten": "Tran Van A",
        "lop": "KHMT-04",
        "khoa": "K62",
        "email": "test@email.com",
        "sdt": "09123456",
        "anh": "https://example.com/avatar1",
        "diaChi": "Hai Ba Trung - Ha Noi",
        "__v": 0
    }
    ```

3. Create new student

    **URL** : `/api/v1/student/`

    **Method** : `POST`

    **Example Data**

    ```json
    {
        "mssv": 20170001,
        "ten": "Tran Van A",
        "lop": "KHMT-04",
        "khoa": "K62",
        "email": "test@email.com",
        "sdt": "09123456",
        "anh": "https://example.com/avatar1",
        "diaChi": "Hai Ba Trung - Ha Noi",
    }
    ```

4. Update student

    **URL** : `/api/v1/student/:mssv`

    **Method** : `PUT`

    **Example Data**

    ```json
    {
        "ten": "Tran Van A",
        "lop": "KHMT-04",
        "khoa": "K62",
        "email": "test@email.com",
        "sdt": "09123456",
        "anh": "https://example.com/avatar1",
        "diaChi": "Hai Ba Trung - Ha Noi",
    }
    ```

5. Delete student

    **URL** : `/api/v1/student/:mssv`

    **Method** : `DELETE`


