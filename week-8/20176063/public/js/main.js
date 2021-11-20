(function ($) {
  $("#add").click(() => {
    let student = {};

    student.name = $("#name").val();
    student.student_id = $("#MSSV").val();
    student.class = $("#class").val();
    student.generation = $("#generation").val();
    student.email = $("#email").val();
    student.phone = $("#phone").val();
    student.address = $("#address").val();
    student.image = image.src;

    fetch("https://api-dev-bootcamp-aurora0210.herokuapp.com/student", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(student),
    })
      .then((data) => {
        console.log("Success:", data);
        alert("Tạo thành công");
        location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  imgInp.onchange = (evt) => {
    const file = imgInp.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        image.src = reader.result;
      };
    }
  };

  function dataTable(data) {
    if (data != undefined && data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        $("tbody").append(
          `
            <tr class="row100 body">
                <td class="column0">${i + 1}</td>
                <td class="column1">${data[i].name}</td>
                <td class="column2">${data[i].student_id}</td>
                <td class="column3">${data[i].class}</td>
                <td class="column4">${data[i].generation}</td>
                <td class="column5">${data[i].email}</td>
                <td class="column6">${data[i].phone}</td>
                <td class="column7"><img src="${data[i].image}"/></td>
                <td class="column8">${data[i].address}</td>
                <td class="column9">
                    <div class="box">
                        <button 
                            data-toggle="modal"
                            data-target="#editModal"
                            onclick=getDetail('${data[i]._id}')>
                        <i class="fa fa-pencil fa-2x"></i></button>
                        <button 
                            data-toggle="modal"
                            data-target="#deleteModal" 
                            onclick=Selected('${data[i]._id}')>
                            <i class="fa fa-trash fa-2x"></i>
                        </button>
                    </div>
                </td>
            </tr>`
        );
      }
    }
  }

  fetch("https://api-dev-bootcamp-aurora0210.herokuapp.com/student")
    .then((response) => response.json())
    .then((data) => dataTable(data));
})(jQuery);

var selected = {};

let result = {};

function getDetail(id) {
  fetch(`https://api-dev-bootcamp-aurora0210.herokuapp.com/student/${id}`)
    .then((response) => response.json())
    .then((data) => {
      result = data;
      $("#edit_name").val(data.name);
      $("#edit_MSSV").val(data.student_id);
      $("#edit_class").val(data.class);
      $("#edit_generation").val(data.generation);
      $("#edit_email").val(data.email);
      $("#edit_phone").val(data.phone);
      $("#edit_address").val(data.address);
      edit_image.src = data.image;
    });
}

edit_imgInp.onchange = (evt) => {
  const file = edit_imgInp.files[0];
  const reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
    reader.onload = () => {
      edit_image.src = reader.result;
    };
  }
};

function Edit() {
  let student = {};
  student._id = result._id;
  student.name = $("#edit_name").val();
  student.student_id = $("#edit_MSSV").val();
  student.class = $("#edit_class").val();
  student.generation = $("#edit_generation").val();
  student.email = $("#edit_email").val();
  student.phone = $("#edit_phone").val();
  student.address = $("#edit_address").val();
  student.image = edit_image.src;

  fetch(
    `https://api-dev-bootcamp-aurora0210.herokuapp.com/student/${student._id}`,
    {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(student),
    }
  )
    .then((data) => {
      console.log("Success:", data);
      alert("Sửa thành công");
      location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function Selected(id) {
  selected = id;
}

function Delete() {
  console.log(selected);
  fetch(
    `https://api-dev-bootcamp-aurora0210.herokuapp.com/student/${selected}`,
    {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
    }
  );

  alert("Xoá thành công!!!");
  location.reload();
}
