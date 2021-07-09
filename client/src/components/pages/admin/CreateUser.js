import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { EditUser, NewUser } from '../../Forms';

const CreateUser = () => {
  const [data, setData] = useState([]);
  const [userState, setUserState] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    role: '',
  });

  const [addForm, setAddForm] = useState(false);

  const [editForm, setEditForm] = useState({
    show: false,
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

  const columns = React.useMemo(
    () => [
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
                  id: row.id,
                  email: row.email,
                  password: row.password,
                  first_name: row.first_name,
                  last_name: row.last_name,
                  role: row.role,
                  brand_id: row.brand_id,
                });
                setUserState({
                  email: row.email,
                  password: row.password,
                  first_name: row.first_name,
                  last_name: row.last_name,
                  role: row.role,
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
        width: 75,
      },
    ],
    []
  );

  return (
    <>
      <Tables
        columns={columns}
        data={data}
        onAdd={() => {
          setAddForm(true);
        }}
        editForm={editForm}
        setEditForm={setEditForm}
        eventState={userState}
        setEventState={setUserState}
        headerIcon={faUsers}
        headerTitle='Users'
      />
      {addForm && (
        <NewUser
          onAdd={() => setAddForm(false)}
          eventState={userState}
          setEventState={setUserState}
        />
      )}
      {editForm.show && (
        <EditUser
          editForm={editForm}
          onAdd={() =>
            setEditForm((prevState) => ({ ...prevState, show: false }))
          }
          eventState={userState}
          setEventState={setUserState}
          setEditForm={setEditForm}
        />
      )}
    </>
  );
};

export default CreateUser;
