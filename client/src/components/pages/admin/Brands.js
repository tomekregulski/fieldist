import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faTags } from '@fortawesome/free-solid-svg-icons';
import { EditBrand, NewBrand } from '../../Forms';
import BrandCard from '../../Cards';

import './formStyle.css';

const Brands = () => {
  const [data, setData] = useState([]);
  const [brandState, setBrandState] = useState({
    name: '',
  });

  const [addForm, setAddForm] = useState(false);

  const [editForm, setEditForm] = useState({
    show: false,
    id: '',
    name: '',
  });

  const [card, setCard] = useState({
    show: false,
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
        accessor: (row) => (
          <span
            className='card-accessor'
            onClick={() =>
              setCard((prevState) => ({
                ...prevState,
                show: true,
                id: row.id,
              }))
            }
          >
            {row.name}
          </span>
        ),
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
                setBrandState({ name: row.name });
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
      {card.show === true && <BrandCard cardID={card.id} setCard={setCard} />}
      <Tables
        columns={columns}
        data={data}
        onAdd={() => {
          setAddForm(true);
        }}
        editForm={editForm}
        setEditForm={setEditForm}
        eventState={brandState}
        setEventState={setBrandState}
        headerIcon={faTags}
        headerTitle='Brands'
        card={card}
        setCard={setCard}
      />
      {addForm && (
        <NewBrand
          onAdd={() => setAddForm(false)}
          eventState={brandState}
          setEventState={setBrandState}
        />
      )}
      {editForm.show && (
        <EditBrand
          editForm={editForm}
          onAdd={() =>
            setEditForm((prevState) => ({ ...prevState, show: false }))
          }
          eventState={brandState}
          setEventState={setBrandState}
          setEditForm={setEditForm}
        />
      )}
    </>
  );
};

export default Brands;
