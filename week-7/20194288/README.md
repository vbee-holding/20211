# Student API
## Enviroment
You need to install Node: https://nodejs.org
# Install
`npm i`
## Run
`npm start`
Application run at: http://localhost:3000/
## Description
### 5 APIs
#### 1.GET all students
##### URL: http://localhost:3000/
##### Response JSON
```
[
    {
        "_id": "6190b7a2e1a2948d183114fa",
        "name": "Minh",
        "mssv": "20194222",
        "class": "IT2",
        "generation": "K64",
        "email": "minh.vh@sis.hust.edu.vn",
        "phone": "091321321",
        "image": "image.PNG",
        "address": "Trung Quoc"
    },
    {
        "_id": "6190c9107412ab4f073e8fd5",
        "name": "Anh",
        "mssv": "20194221",
        "class": "IT2",
        "generation": "K64",
        "email": "anh.nt@sis.hust.edu.vn",
        "phone": "09231311132",
        "image": "image.PNG",
        "address": "England",
        "__v": 0
    }
]
```
#### 2.GET student by mssv
##### URL: http://localhost:3000/search
##### Response JSON
```
{
    "_id": "6190c9107412ab4f073e8fd5",
    "name": "Anh",
    "mssv": "20194221",
    "class": "IT2",
    "generation": "K64",
    "email": "anh.nt@sis.hust.edu.vn",
    "phone": "09231311132",
    "image": "image.PNG",
    "address": "England",
    "__v": 0
}
```
#### 3.POST: create student
##### URL: http://localhost:3000/add
##### Response JSON
```
{
    "name": "Huan",
    "mssv": "20194288",
    "class": "IT2",
    "generation": "K64",
    "email": "huan.nh194288@sis.hust.edu.vn",
    "phone:: "0948275791",
    "image": "abc.PNG",
    "address": "Viet Nam",
    "_id": "61912154cb0dad3402e0768d",
    "__v": 0
}
```
#### 4.PUT: update student
##### URL: http://localhost:3000/update
##### Response JSON
```
{"acknowledged":true,"modifiedCount":1,"upsertedId":null,"upsertedCount":0,"matchedCount":1}
```
#### 5.DELETE Student
##### URL: http://localhost:3000/delete
##### Response JSON
``` 
{"deletedCount":1}
```