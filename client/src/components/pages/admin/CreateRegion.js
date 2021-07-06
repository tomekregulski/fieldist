import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrashAlt,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';

const CreateRegion = () => {
  const [data, setData] = useState([]);
  const [regionState, setRegionState] = useState({
    name: '',
  });

  const [addForm, setAddForm] = useState({
    show: false,
    form: 'newRegion',
  });

  const [editForm, setEditForm] = useState({
    show: false,
    form: 'editRegion',
    id: '',
    name: '',
  });

  useEffect(() => {
    fetch('/api/regions')
      .then((res) => res.json())
      .then((response) => setData(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (row) => {
    fetch(`/api/regions/${row.id}`, {
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
                  form: 'editRegion',
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
        width: 20,
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
        eventState={regionState}
        setEventState={setRegionState}
        headerTitle='Regions'
        headerIcon={faMapMarkedAlt}
      />
    </>
  );
};

export default CreateRegion;

// import React, { Component } from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import axios from "axios";

// class CreateRegion extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(evt) {
//     this.setState({
//       [evt.target.name]: evt.target.value
//     });
//   }
//   handleSubmit(evt) {
//     evt.preventDefault();
//     const newRegion = { ...this.state };
//     console.log(newRegion);
//     axios.post('/api/regions', newRegion)
//         .then(response => console.log(response.data.id));
//     this.setState({
//       region_name: "",
//     });
//   }

//   render() {
//     return (
//       <Form className="form-container" onSubmit={this.handleSubmit}>
//         <h2 className="form-title">Create Region</h2>
//         <Form.Group controlId="region_name">
//           <Form.Label>Region Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             placeholder="Region Name"
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     );
//   }
// }
// export default CreateRegion;
