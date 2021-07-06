import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CreateBrand = () => {
  const [data, setData] = useState([]);
  const [brandState, setBrandState] = useState({
    name: '',
  });

  const [addForm, setAddForm] = useState({
    show: false,
    form: 'newBrand',
  });

  const [editForm, setEditForm] = useState({
    show: false,
    form: 'editBrand',
    id: '',
    name: '',
  });

  useEffect(() => {
    fetch('/api/brands')
      .then((res) => res.json())
      .then((response) => setData(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (row) => {
    fetch(`/api/brands/${row.id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const columns = React.useMemo(
    () => [
      {
        id: 'name',
        Header: 'Name',
        accessor: 'name',
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
                  form: 'editBrand',
                  id: row.id,
                  name: row.name,
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
    ],
    []
  );

  return (
    <>
      <Tables
        columns={columns}
        data={data}
        addForm={addForm}
        setAddForm={setAddForm}
        editForm={editForm}
        setEditForm={setEditForm}
        eventState={brandState}
        setEventState={setBrandState}
      />
    </>
  );
};

export default CreateBrand;

// import React, { Component } from 'react';
// // import uuid from "uuid/v8";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// class CreateBrand extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(evt) {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//     });
//   }
//   handleSubmit(evt) {
//     evt.preventDefault();
//     const newBrand = { ...this.state };
//     console.log(newBrand);
//     axios
//       .post('/api/brands', newBrand)
//       .then((response) => console.log(response.data));
//     this.setState({
//       name: '',
//     });
//   }

//   render() {
//     return (
//       <Form className='form-container' onSubmit={this.handleSubmit}>
//         <h2 className='form-title'>Create Brand</h2>
//         <Form.Group controlId='brand_name'>
//           <Form.Label>Brand Name</Form.Label>
//           <Form.Control
//             type='text'
//             name='name'
//             value={this.state.name}
//             onChange={this.handleChange}
//             placeholder='Brand Name'
//           />
//         </Form.Group>
//         <Button variant='primary' type='submit'>
//           Submit
//         </Button>
//       </Form>
//     );
//   }
// }
// export default CreateBrand;
