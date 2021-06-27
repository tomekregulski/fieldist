import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const CampaignsDrop = () => {
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    fetch('/api/campaigns')
      .then((res) => res.json())
      .then((response) => setCampaign(response.map((res) => res)))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <Form.Group>
        <Form.Label>Campaign</Form.Label>
        <Form.Control as='select' name='campaign_id'>
          <option>Select a Campaign</option>
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
