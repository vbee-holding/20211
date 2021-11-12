# Quản lý sinh viên - API week7

Application run at: http://localhost:3000/

## Description

5 APIs

1. Lấy danh sách sinh viên

    Endpoint: GET http://localhost:3000/sinhviens/show

    Response: HTTP Code 200

    Response JSON:
    ```
    [
        {
            "_id":"618d2c3c4ab7f287c1b786b2",
            "hoten":"Lalisa Manobal",
            "mssv":"20184214",
            "lop":"Blackpink",
            "khoa":"1997",
            "sdt":"0987654321",
            "image":"https://img-cache.coccoc.com/image?url=https://upload.wikimedia.org/wikipedia/commons/7/72/Lisa_for_Vogue_Taiwan_June_2021_(3).jpg&f=w",
            "address":"Buri Ram, Thailand",
            "email":"lisa@bp.com"
        },
        {
            "_id":"618d36aa4ab7f287c1b786be",
            "hoten":"Rose",
            "mssv":"20175214",
            "lop":"Blackpink",
            "khoa":"1997",
            "sdt":"033333333",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtcQCvHuPrRaP0KHaDPCJQWRwb7u9inLa0g&usqp=CAU",
            "address":"Auckland, NZ",
            "email":"róe@bp.com"
        }
    ]
    ```

2. Lấy thông tin sinh viên

    Endpoint: GET http://localhost:3000/sinhviens/student/{_id}

    Response: HTTP Code 200

    Response JSON example:

    ```
    {
            "_id":"618d36aa4ab7f287c1b786be",
            "hoten":"Rose",
            "mssv":"20175214",
            "lop":"Blackpink",
            "khoa":"1997",
            "sdt":"033333333",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtcQCvHuPrRaP0KHaDPCJQWRwb7u9inLa0g&usqp=CAU",
            "address":"Auckland, NZ",
            "email":"róe@bp.com"
        }
    ```

3. Tạo mới một sinh viên

    Endpoint: POST http://localhost:3000/sinhviens/create

    Headers: Content-Type: application/json

    Request JSON:
    ```
    {
            "_id":"618d5ef1576ff384118885c7",
            "hoten":"Jisoo",
            "mssv":"2015211",
            "lop":"Blackpink",
            "khoa":"1995",
            "sdt":"0326431",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7EClmtcW1jfgfljNarZeudcaNPAXa71q1g&usqp=CAU",
            "address":"Sanbon-dong, Gunpo, Hàn Quốc",
            "email":"jisoo@bp.com"
        }
    ```

    Response: HTTP Code 200

    Response JSON example:

    ```
    { 
        Message: "student created!!!" 
    }
    ```

4. Cập nhật thông tin sinh viên

    Endpoint: PUT http://localhost:3000/sinhviens/{_id}

    Headers: Content-Type: application/json

    Request JSON:
    ```
    {
        "hoten": "Jennie Kim",
        "mssv": "20187288"
        "lop": "Blackpink",
        "khoa": "1996"  
        "sdt": "033333333",
        "image": "testupdate.png",
        "address": "Gangnam-gu",
        "email": "jenniekim@bp.com",   
    }
    ```

    Response: HTTP Code 200

    Response JSON example:

    ```
    { 
        Message: "student updated!!!" 
    }
    ```

5. Xóa sinh viên

    Endpoint: DELETE http://localhost:3000/sinhviens/{_id}

    Response: HTTP Code 200

