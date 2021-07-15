import React, { useState, useEffect } from 'react';
import Tables from '../../Tables/Tables';
import { faCashRegister } from '@fortawesome/free-solid-svg-icons';
import { EditCampaign, NewCampaign } from '../../forms';
import authHeader from '../../../services/auth-header';

const Campaign = () => {
  const [data, setData] = useState([]);
  const [campaignState, setCampaignState] = useState({
    name: '',
    brand_id: '',
  });

  const [addForm, setAddForm] = useState(false);

  const [onEdit, setOnEdit] = useState(false);

  const [editForm, setEditForm] = useState({
    // show: false,
    id: '',
    name: '',
    brand_id: '',
  });

  useEffect(() => {
    fetch('/api/campaigns', {
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
    fetch(`/api/campaigns/${row.id}`, {
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
        id: 'campaignName',
        Header: 'Campaign',
        accessor: 'name',
      },
      {
        id: 'brandName',
        Header: 'Brand',
        accessor: (row) => `${row.brand.name}`,
      },
    ],
    []
  );

  const passState = (row) => {
    setEditForm({
      id: row.id,
      name: row.name,
      brand_id: row.brand_id,
    });
    setCampaignState({
      name: row.name,
      brand: row.brand,
    });
  };

  return (
    <>
      <Tables
        columns={columns}
        data={data}
        onAdd={() => setAddForm(true)}
        onEdit={() => setOnEdit(true)}
        passState={passState}
        handleDelete={handleDelete}
        headerIcon={faCashRegister}
        headerTitle='Campaigns'
      />
      {addForm && (
        <NewCampaign
          onAdd={() => setAddForm(false)}
          eventState={campaignState}
          setEventState={setCampaignState}
        />
      )}
      {onEdit && (
        <EditCampaign
          editForm={editForm}
          onAdd={() => setOnEdit(false)}
          eventState={campaignState}
          setEventState={setCampaignState}
          setEditForm={setEditForm}
        />
      )}
    </>
  );
};

export default Campaign;
