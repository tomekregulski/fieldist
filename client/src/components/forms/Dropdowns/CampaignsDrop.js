import React, { useState, useEffect, useMemo } from 'react';
import Form from 'react-bootstrap/Form';

const CampaignsDrop = ({ handleChange, value }) => {
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    fetch('/api/campaigns')
      .then((res) => res.json())
      .then((response) => setCampaign(response.map((res) => res)))
      .catch((err) => console.log(err));
  }, []);

  const currValue = useMemo(
    () =>
      value && campaign.length
        ? campaign.find(({ id }) => id.toString() === value).name
        : 'Select a Campaign',
    [campaign, value]
  );
  return (
    <>
      <Form.Group>
        <Form.Label>Campaign</Form.Label>
        <Form.Control
          as='select'
          name='campaign_id'
          value={value}
          onChange={handleChange}
        >
          <option>{currValue}</option>
          {campaign.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </>
  );
};

export default CampaignsDrop;
