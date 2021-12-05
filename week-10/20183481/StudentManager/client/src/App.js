import React, { useState, useEffect } from "react";
import "./App.css";

function StudentForm() {
  const [student, setStudent] = useState({
    fullName: "",
    code: "",
    class: "",
    course: "",
    email: "",
    mobile: "",
    address: "",
    image: "/image/default.jpg",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      student.fullName &&
      student.code &&
      student.class &&
      student.course &&
      student.email &&
      student.mobile &&
      student.address
    ) {
      setValid(true);
    }
    setSubmitted(true);
    fetch("/student/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: student.fullName,
        code: student.code,
        class: student.class,
        course: student.course,
        email: student.email,
        mobile: student.mobile,
        address: student.address,
        image: student.image,
      }),
    }).then((res) => res.json());
  };

  return (
    <div>
      <h2>Add new student to the database</h2>
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {valid && (
            <div className="success-message">
              Success! Thank you for registering
            </div>
          )}
          <input
            id="full-name"
            className="form-field"
            type="text"
            placeholder="Full Name"
            name="fullName"
            onChange={(e) =>
              setStudent({ ...student, fullName: e.target.value })
            }
            value={student.fullName}
          />
          {submitted && !student.fullName && (
            <span id="full-name-error">Please enter full name</span>
          )}
          <input
            id="student-code"
            className="form-field"
            type="text"
            placeholder="Student Code"
            name="studentCode"
            onChange={(e) => setStudent({ ...student, code: e.target.value })}
            value={student.code}
          />
          {submitted && !student.code && (
            <span id="student-code-error">Please enter a student code</span>
          )}
          <input
            id="major"
            className="form-field"
            type="text"
            placeholder="Major"
            name="Major"
            onChange={(e) => setStudent({ ...student, class: e.target.value })}
            value={student.class}
          />
          {submitted && !student.class && (
            <span id="major-error">Please enter a major</span>
          )}
          <input
            id="course"
            className="form-field"
            type="text"
            placeholder="Course"
            name="Course"
            onChange={(e) => setStudent({ ...student, course: e.target.value })}
            value={student.course}
          />
          {submitted && !student.course && (
            <span id="course-error">Please enter a course</span>
          )}
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
            value={student.email}
          />
          {submitted && !student.email && (
            <span id="email-error">Please enter an email address</span>
          )}
          <input
            id="phone-number"
            className="form-field"
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={(e) => setStudent({ ...student, mobile: e.target.value })}
            value={student.mobile}
          />
          {submitted && !student.mobile && (
            <span id="phone-number-error">Please enter a phone number</span>
          )}
          <input
            id="address"
            className="form-field"
            type="text"
            placeholder="Address"
            name="address"
            onChange={(e) =>
              setStudent({ ...student, address: e.target.value })
            }
            value={student.address}
          />
          {submitted && !student.address && (
            <span id="address-error">Please enter an address</span>
          )}
          <button className="form-field" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

function UpdateForm(props) {
  console.log(props.data)

  const [student, setStudent] = useState(props.data);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      student.fullName &&
      student.code &&
      student.class &&
      student.course &&
      student.email &&
      student.mobile &&
      student.address
    ) {
      setValid(true);
    }
    setSubmitted(true);
    fetch("/student/update/" + student._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: student.fullName,
        code: student.code,
        class: student.class,
        course: student.course,
        email: student.email,
        mobile: student.mobile,
        address: student.address,
        image: student.image,
      }),
    }).then((res) => res.json());
  };

  return (
    <div>
      <h2>Edit student's information</h2>
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {valid && <div className="success-message">Edit successfully</div>}
          <img type="image" src={"http://localhost:3001" + student.image} alt="Avatar" />
          <input
            className="form-field"
            type="text"
            name="fullName"
            onChange={(e) =>
              setStudent({ ...student, fullName: e.target.value })
            }
            value={student.fullName}
          />
          {submitted && !student.fullName && (
            <span id="full-name-error">Please enter full name</span>
          )}
          <input
            className="form-field"
            type="text"
            name="studentCode"
            onChange={(e) => setStudent({ ...student, code: e.target.value })}
            value={student.code}
          />
          {submitted && !student.code && (
            <span id="student-code-error">Please enter a student code</span>
          )}
          <input
            className="form-field"
            type="text"
            name="Major"
            onChange={(e) => setStudent({ ...student, class: e.target.value })}
            value={student.class}
          />
          {submitted && !student.class && (
            <span id="major-error">Please enter a major</span>
          )}
          <input
            className="form-field"
            type="text"
            name="Course"
            onChange={(e) => setStudent({ ...student, course: e.target.value })}
            value={student.course}
          />
          {submitted && !student.course && (
            <span id="course-error">Please enter a course</span>
          )}
          <input
            className="form-field"
            type="text"
            name="email"
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
            value={student.email}
          />
          {submitted && !student.email && (
            <span id="email-error">Please enter an email address</span>
          )}
          <input
            className="form-field"
            type="text"
            name="phoneNumber"
            onChange={(e) => setStudent({ ...student, mobile: e.target.value })}
            value={student.mobile}
          />
          {submitted && !student.mobile && (
            <span id="phone-number-error">Please enter a phone number</span>
          )}
          <input
            className="form-field"
            type="text"
            name="address"
            onChange={(e) =>
              setStudent({ ...student, address: e.target.value })
            }
            value={student.address}
          />
          {submitted && !student.address && (
            <span id="address-error">Please enter an address</span>
          )}
          <button className="form-field" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [data, setData] = useState([]);
  const [addNew, setAddNew] = useState(false);
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch("/student/list", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        setData(json.data);
      };
      return getData();
    } catch (e) {
      console.error(e);
    }
  }, []);

  const formShow = () => {
    setAddNew(!addNew);
  }

  const updateItem = (e) => {
    const idx = e.target.getAttribute("idx");
    setUpdate(idx);
  }

  const closeForm = () => {
    setAddNew(false);
    setUpdate(null);
  }

  const handleRemoveItem = (e) => {
    const itemID = e.target.getAttribute("itemID");
    fetch("/student/delete/" + itemID, {
      method: "DELETE",
    });
    alert("Delete successfully. Please reload this page.");
  };

  return (
    <div className="App">
      <div>
        <button className="btn btnAdd" onClick={formShow}>
          Add New Student
        </button>
        <h1>Student Manager</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Full Name</th>
              <th>Student Code</th>
              <th>Major</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.fullName}</td>
                <td>{item.code}</td>
                <td>{item.class}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.address}</td>
                <td>
                  <button className="btn btnEdit" idx={idx} onClick={updateItem}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btnDelete" itemID={item._id} onClick={handleRemoveItem}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {addNew && <StudentForm />}
      {update && <UpdateForm data={data[update]}/>}
      {(addNew || update) && <button className="btn btnClose" onClick={closeForm}>Close</button>}
    </div>
  );
}
