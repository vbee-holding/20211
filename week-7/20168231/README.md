# Student API 

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
            "_id": "6188abc78cc43614ffc6a782",
            "name": "Phan Huy",
            "email": "huynp@gmail.com",
            "phone": "0356956464",
            "image": "test.png",
            "student_id": "20168231",
            "class": "LTU15",
            "generation": "K61",
            "address": "Hà Nội",
            "__v": 0
        },
        {
            "_id": "6188ac052cc43614ffc6a829",
            "name": "Nguyen Phan Huy",
            "email": "huysw@gmail.com",
            "phone": "0356956464",
            "image": "testupdate.png",
            "student_id": "20168231",
            "class": "LTU15",
            "address": "Dong Anh, Hà Nội",
            "generation": "K61",
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
       "_id": "6188ac052cc43614ffc6a829",
        "name": "Nguyen Phan Huy",
         "email": "huysw@gmail.com",
         "phone": "0356956464",
         "image": "testupdate.png",
         "student_id": "20168231",
         "class": "LTU15",
         "address": "Dong Anh, Hà Nội",
         "generation": "K61",
         "__v": 0
    }
    ```

3. Create new student

    Endpoint: POST http://localhost:3000/api/student

    Headers: Content-Type: application/json

    Request JSON:
    ```
    {
        "_id": "6188ac052cc43614ffc6a829",
        "name": "Nguyen Phan Huy",
        "email": "huysw@gmail.com",
        "phone": "0356956464",
        "image": "testupdate.png",
        "student_id": "20168231",
        "class": "LTU15",
        "address": "Dong Anh, Hà Nội",
         "generation": "K61",
         "__v": 0
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
        "_id": "6188ac052cc43614ffc6a829",
        "name": "Nguyen Phan Huy",
        "email": "huysw@gmail.com",
        "phone": "0356956464",
        "image": "testupdate.png",
        "student_id": "20168231",
        "class": "LTU15",
        "address": "Dong Anh, Hà Nội",
        "generation": "K61",
        "__v": 0
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



