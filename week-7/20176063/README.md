# Student API - Week 7

## Enviroment

You need to install Node: https://nodejs.org

## Install
    npm i

## Run
    npm start

Application run at: http://localhost:3000/

## Description

5 APIs

1. Get all students

    Endpoint: GET http://localhost:3000/api/student
    
    Response: HTTP Code 200

    Response JSON:
    ```
    [
        {
            "_id": "6188abc78cc43614ffc6a620",
            "name": "minh uyen",
            "email": "uyen.cdm176063@sis.hust.edu.vn",
            "phone": "0838287172",
            "image": "test.png",
            "student_id": "20176063",
            "class": "LTU16B",
            "generation": "K62",
            "address": "Hà Nội",
            "__v": 0
        },
        {
            "_id": "6188ac088cc43614ffc6a623",
            "name": "cong dao minh uyen",
            "email": "uyen.cdm176063@sis.hust.edu.vn 01",
            "phone": "0838287172",
            "image": "testupdate.png",
            "student_id": "20176063",
            "class": "LTU16B",
            "address": "Tây Hồ, Hà Nội",
            "generation": "K62",
            "__v": 0
        }
    ]
    ```

2. Get student detail

    Endpoint: GET http://localhost:3000/api/student/{_id}
    
    Response: HTTP Code 200

    Response JSON example:

    ```
    {
        "_id": "6188ac088cc43614ffc6a623",
        "name": "cong dao minh uyen",
        "email": "uyen.cdm176063@sis.hust.edu.vn 01",
        "phone": "0838287172",
        "image": "testupdate.png",
        "student_id": "20176063",
        "class": "LTU16B",
        "address": "Tây Hồ, Hà Nội",
        "generation": "K62",
        "__v": 0
    }
    ```

3. Create new student

    Endpoint: POST http://localhost:3000/api/student

    Headers: Content-Type: application/json

    Request JSON:
    ```
    {
        "name": "cong dao minh uyen",
        "email": "uyen.cdm176063@sis.hust.edu.vn 01",
        "phone": "0838287172",
        "image": "testupdate.png",
        "student_id": "20176063",
        "class": "LTU16B",
        "address": "Tây Hồ, Hà Nội",
        "generation": "K62"
    }
    ```

    Response: HTTP Code 200

    Response JSON example:

    ```
    { 
        Message: "student created!!!" 
    }

    ```

4. Update student

    Endpoint: PUT http://localhost:3000/api/student/{_id}

    Headers: Content-Type: application/json

    Request JSON:
    ```
    {
        "name": "cong dao minh uyen",
        "email": "uyen.cdm176063@sis.hust.edu.vn 01",
        "phone": "0838287172",
        "image": "testupdate.png",
        "student_id": "20176063",
        "class": "LTU16B",
        "address": "Tây Hồ, Hà Nội",
        "generation": "K62"
    }
    ```

    Response: HTTP Code 200

    Response JSON example:

    ```
    { 
        Message: "student updated!!!" 
    }

    ```

5. Delete student

    Endpoint: DELETE http://localhost:3000/api/student/{_id}

    Response: HTTP Code 200



