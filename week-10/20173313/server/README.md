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
            "_id": "61927e0394482c8ae3d1857a",
            "studentId": 20170002,
            "name": "Hoang Van B",
            "class": "KHMT-04",
            "generation": "K62",
            "email": "HoangVanB@email.com",
            "phone": "09123457",
            "image": "https://example.com/avatar2",
            "address": "Thanh Xuan - Ha Noi",
            "__v": 0
        },
        {
            "_id": "61927e84558a5ed8584afa57",
            "studentId": 20170001,
            "name": "Hoang Van A",
            "class": "KHMT-04",
            "generation": "K62",
            "email": "HoangVanB@email.com",
            "phone": "09123466",
            "image": "https://example.com/avatar",
            "address": "Thanh Xuan - Ha Noi",
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
        "studentId": 20170001,
        "name": "Hoang Van A",
        "class": "KHMT-04",
        "generation": "K62",
        "email": "HoangVanB@email.com",
        "phone": "09123466",
        "image": "https://example.com/avatar",
        "address": "Thanh Xuan - Ha Noi"
    }
    ```

4. Update student

    **URL** : `/api/v1/student/:mssv`

    **Method** : `PUT`

    **Example Data**

    ```json
    {
        "name": "Hoang Van A",
        "class": "KHMT-04",
        "generation": "K62",
        "email": "HoangVanB@email.com",
        "phone": "09123466",
        "image": "https://example.com/avatar",
        "address": "Thanh Xuan - Ha Noi"
    }
    ```

5. Delete student

    **URL** : `/api/v1/student/:mssv`

    **Method** : `DELETE`


