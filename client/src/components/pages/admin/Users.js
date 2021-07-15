import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { EditUser, NewUser } from '../../forms';
import authHeader from '../../../services/auth-header';

const Users = () => {
  const [data, setData] = useState([]);
  const [userState, setUserState] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    role: '',
  });

  const [addForm, setAddForm] = useState(false);

  const [onEdit, setOnEdit] = useState(false);

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
    fetch('/api/users', {
      method: 'GET',
      headers: authHeader(),
      mode: 'cors',
      cache: 'default',
    })
      .then((res) => res.json())
      .then((response) => setData(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (row) => {
    fetch(`/api/users/${row.id}`, {
      method: 'DELETE',
      headers: authHeader(),
      mode: 'cors',
      cache: 'default',
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
    ],
    []
  );

  const passState = (row) => {
    setEditForm({
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
  };

  const lockModal = () => {
    document.querySelector('body').classList.add('modal-lock');
  };

  const unlockModal = () => {
    document.querySelector('body').classList.remove('modal-lock');
  };

  return (
    <>
      <Tables
        columns={columns}
        data={data}
        onAdd={() => {
          setAddForm(true);
          lockModal();
        }}
        onEdit={() => {
          setOnEdit(true);
          lockModal();
        }}
        passState={passState}
        handleDelete={handleDelete}
        headerIcon={faUsers}
        headerTitle='Users'
      />
      {addForm && (
        <NewUser
          onAdd={() => {
            setAddForm(false);
            unlockModal();
          }}
          eventState={userState}
          setEventState={setUserState}
        />
      )}
      {onEdit && (
        <EditUser
          editForm={editForm}
          onAdd={() => {
            setOnEdit(false);
            unlockModal();
          }}
          eventState={userState}
          setEventState={setUserState}
          setEditForm={setEditForm}
        />
      )}
    </>
  );
};

export default Users;
