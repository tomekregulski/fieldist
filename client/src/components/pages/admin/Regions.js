import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrashAlt,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { EditRegion, NewRegion } from '../../forms';
import authHeader from '../../../services/auth-header';

const Regions = () => {
  const [data, setData] = useState([]);
  const [regionState, setRegionState] = useState({
    name: '',
  });

  const [addForm, setAddForm] = useState(false);

  const [onEdit, setOnEdit] = useState(false);

  const [editForm, setEditForm] = useState({
    id: '',
    name: '',
  });

  useEffect(() => {
    fetch('/api/regions', {
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
    fetch(`/api/regions/${row.id}`, {
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
        id: 'name',
        Header: 'Name',
        accessor: 'name',
      },
    ],
    []
  );

  const passState = (row) => {
    setEditForm({
      id: row.id,
      name: row.name,
    });
    setRegionState({ name: row.name });
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
        headerIcon={faMapMarkedAlt}
        headerTitle='Regions'
      />
      {addForm && (
        <NewRegion
          onAdd={() => {
            setAddForm(false);
            unlockModal();
          }}
          eventState={regionState}
          setEventState={setRegionState}
        />
      )}
      {onEdit && (
        <EditRegion
          editForm={editForm}
          onAdd={() => {
            setOnEdit(false);
            unlockModal();
          }}
          eventState={regionState}
          setEventState={setRegionState}
          setEditForm={setEditForm}
        />
      )}
    </>
  );
};

export default Regions;
