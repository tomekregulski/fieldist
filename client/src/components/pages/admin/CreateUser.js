import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CreateUser = () => {
  const [data, setData] = useState([]);
  const [userState, setUserState] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    role: '',
    brand_id: '',
  });

  const [addForm, setAddForm] = useState({
    show: false,
    form: 'newUser',
  });

  const [editForm, setEditForm] = useState({
    show: false,
    form: 'editUser',
    id: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    role: '',
    brand_id: '',
  });

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((response) => setData(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (row) => {
    fetch(`/api/users/${row.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const columns = React.useMemo(() => [
    {
      id: 'lastName',
      Header: 'Last Name',
      accessor: 'last_name',
    },
    {
      id: 'firstName',
      Header: 'First Name',
      accessor: 'first_name',
    },
    {
      id: 'email',
      Header: 'Email',
      accessor: 'email',
    },
    {
      id: 'role',
      Header: 'Role',
      accessor: 'role',
    },
    {
      id: 'actions',
      Header: 'Actions',
      accessor: (row) => (
        <>
          <FontAwesomeIcon
            icon={faEdit}
            className='m-1 edit actions'
            onClick={() => {
              setEditForm({
                show: true,
                form: 'editUser',
                id: row.id,
                email: row.email,
                password: row.password,
                first_name: row.first_name,
                last_name: row.last_name,
                role: row.role,
                brand_id: row.brand_id,
              });
            }}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className='m-1 delete actions'
            onClick={() => handleDelete(row)}
          />
        </>
      ),
    },
  ]);
  return (
    <>
      <Tables
        columns={columns}
        data={data}
        addForm={addForm}
        setAddForm={setAddForm}
        editForm={editForm}
        setEditForm={setEditForm}
        eventState={userState}
        setEventState={setUserState}
      />
    </>
  );
};

export default CreateUser;

// import React, { Component } from "react";
// import "./formStyle.css"
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import axios from "axios";

// class CreateUser extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { role: "", first_name: "", last_name: "", email: "", password: "", brand_id: null};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }
//   handleSubmit(evt) {
//     evt.preventDefault();
//     const newUser = { ...this.state };
//     console.log(newUser);
//     axios.post('http://localhost:8081/api/users', newUser)
//         .then(response => console.log(response.data));
//     this.setState({
//       first_name: "",
//       last_name: "",
//       email: "",
//       password: "",
//       role: "",
//       brand_id: null
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Form className="form-container" onSubmit={this.handleSubmit}>
//           <h2 className="form-title">Create New User</h2>
//           <Form.Group controlId="user_role">
//             <Form.Label>User Role</Form.Label>
//             <Form.Control
//               as="select"
//               value={this.state.role}
//               name='role'
//               onChange={this.handleChange}
//             >
//               <option>Select a Role</option>
//               <option value='rep'>Rep</option>
//               <option value='contact'>Brand Contact</option>
//               <option value='admin'>Admin</option>
//             </Form.Control>
//           </Form.Group>
//           <Form.Group controlId="user_first_name">
//             <Form.Label>First Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="first_name"
//               value={this.state.first_name}
//               onChange={this.handleChange}
//               placeholder="First Name"
//             />
//           </Form.Group>
//           <Form.Group controlId="user_last_name">
//             <Form.Label>Last Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="last_name"
//               value={this.state.last_name}
//               onChange={this.handleChange}
//               placeholder="Last Name"
//             />
//           </Form.Group>
//           <Form.Group controlId="user_email">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </Form.Group>
//           <Form.Group controlId="user_password">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </Form.Group>
//           <Form.Group controlId="user_brand">
//             <Form.Label>If Brand Contact: Associated Brand</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Associated Brand"
//               name="brand_id"
//               value={this.state.brand_id}
//               onChange={this.handleChange}
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }
// export default CreateUser;
