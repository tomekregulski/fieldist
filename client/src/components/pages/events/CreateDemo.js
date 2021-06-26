import React, { Component } from 'react';
// import uuid from "uuid/v8";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import API from '../../utils/API';

class CreateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand_id: '',
      date: '',
      campaign_id: '',
      venue_id: '',
      user_id: '',
      start_time: '',
      duration: '',
      brands: [],
      campaigns: [],
      venues: [],
      reps: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    API.getBrands()
      .then((res) => console.log(res.data.results))
      .then((res) => {
        console.log(res.data);
        this.setState({
          brands: res.data,
        });
      })
      .catch((err) => console.log(err));
    API.getCampaigns()
      // .then(res => console.log(res.data.results))
      .then((res) => {
        console.log(res.data);
        this.setState({
          campaigns: res.data,
        });
      })
      .catch((err) => console.log(err));
    API.getVenues()
      // .then(res => console.log(res.data.results))
      .then((res) => {
        console.log(res.data);
        this.setState({
          venues: res.data,
        });
      })
      .catch((err) => console.log(err));
    API.getReps()
      // .then(res => console.log(res.data.results))
      .then((res) => {
        console.log(res.data);
        this.setState({
          reps: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  handleChange(evt) {
    console.log(evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newDemo = {
      brand_id: parseInt(this.state.brand_id),
      campaign_id: parseInt(this.state.campaign_id),
      venue_id: parseInt(this.state.venue_id),
      user_id: parseInt(this.state.user_id),
      date: this.state.date,
      start_time: this.state.start_time,
      duration: this.state.duration,
    };
    console.log(newDemo);
    axios
      .post('http://localhost:8081/api/demos', newDemo)
      .then((response) => console.log(response.data));
    this.setState({
      brand_id: '',
      campaign_id: '',
      venue_id: '',
      user_id: '',
      start_time: '',
      duration: '',
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              as='select'
              name='brand_id'
              value={this.state.brand_id}
              onChange={this.handleChange}
            >
              <option>Select a Brand</option>
              {this.state.brands.map((brand, j) => (
                <option key={j} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Campaign</Form.Label>
            <Form.Control
              as='select'
              name='campaign_id'
              value={this.state.campaign_id}
              onChange={this.handleChange}
            >
              <option>Select a Brand</option>
              {this.state.campaigns.map((campaign, j) => (
                <option key={j} value={campaign.id}>
                  {campaign.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Venue</Form.Label>
            <Form.Control
              as='select'
              value={this.state.venue_id}
              name='venue_id'
              onChange={this.handleChange}
            >
              <option>Select a Venue</option>
              {this.state.venues.map((venue, j) => (
                <option key={j} value={venue.id}>
                  {venue.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Brand Ambassador</Form.Label>
            <Form.Control
              as='select'
              value={this.state.user_id}
              name='user_id'
              onChange={this.handleChange}
            >
              <option>Select a Brand Ambassador</option>
              {this.state.reps.map((rep, j) => (
                <option key={j} value={rep.id}>
                  {rep.first_name} {rep.last_name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='demo_start_time'>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type='text'
              placeholder='Date'
              name='date'
              value={this.state.date}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='demo_start_time'>
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              type='text'
              placeholder='Start Time'
              name='start_time'
              value={this.state.start_time}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='demo_duration'>
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type='text'
              placeholder='Duration'
              name='duration'
              value={this.state.duration}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default CreateDemo;
