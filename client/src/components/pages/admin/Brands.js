import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faTags } from '@fortawesome/free-solid-svg-icons';
import { EditBrand, NewBrand } from '../../forms';
import BrandCard from '../../Cards';
import authHeader from '../../../services/auth-header';

import './formStyle.css';

const Brands = () => {
  const [data, setData] = useState([]);
  const [brandState, setBrandState] = useState({
    name: '',
    image: '',
  });

  const [addForm, setAddForm] = useState(false);

  const [onEdit, setOnEdit] = useState(false);

  const [editForm, setEditForm] = useState({
    show: false,
    id: '',
    name: '',
  });

  const [card, setCard] = useState({
    show: false,
  });

  useEffect(() => {
    fetch('/api/brands', {
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
    fetch(`/api/brands/${row.id}`, {
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
    ],
    []
  );

  const passState = (row) => {
    setEditForm({
      id: row.id,
      name: row.name,
    });
    setBrandState({ name: row.name });
  };

  const lockModal = () => {
    document.querySelector('body').classList.add('modal-lock');
  };

  const unlockModal = () => {
    document.querySelector('body').classList.remove('modal-lock');
  };

  return (
    <>
      {card.show === true && <BrandCard cardID={card.id} setCard={setCard} />}
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
        headerIcon={faTags}
        headerTitle='Brands'
        card={card}
        setCard={setCard}
      />
      {addForm && (
        <NewBrand
          onAdd={() => {
            setAddForm(false);
            unlockModal();
          }}
          eventState={brandState}
          setEventState={setBrandState}
        />
      )}
      {onEdit && (
        <EditBrand
          editForm={editForm}
          onAdd={() => {
            setOnEdit(false);
            unlockModal();
          }}
          eventState={brandState}
          setEventState={setBrandState}
          setEditForm={setEditForm}
        />
      )}
    </>
  );
};

export default Brands;
