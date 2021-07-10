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

  const [editForm, setEditForm] = useState({
    show: false,
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
                  name: row.name,
                });
                setRegionState({ name: row.name });
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
        onAdd={() => {
          setAddForm(true);
        }}
        editForm={editForm}
        setEditForm={setEditForm}
        eventState={regionState}
        setEventState={setRegionState}
        headerIcon={faMapMarkedAlt}
        headerTitle='Regions'
      />
      {addForm && (
        <NewRegion
          onAdd={() => setAddForm(false)}
          eventState={regionState}
          setEventState={setRegionState}
        />
      )}
      {editForm.show && (
        <EditRegion
          editForm={editForm}
          onAdd={() =>
            setEditForm((prevState) => ({ ...prevState, show: false }))
          }
          eventState={regionState}
          setEventState={setRegionState}
          setEditForm={setEditForm}
        />
      )}
    </>
  );
};

export default Regions;
