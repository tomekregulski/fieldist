import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function DemoFilter(props) {

  const handleBrandFilter = () => {
        props.filterDemos( 'Simmer' )
        console.log('hello brand filter');
    }
  const handleRegionFilter = () => {
        props.filterRegions( 'Northeast' )
        console.log('hello region filter');
    }

  const handleReset = () => {
      props.resetFilter()
      console.log('hello reset');
  }

  return (
    // <div>
    //     <h1>Data Dashboard</h1>
    // </div>
    <Dropdown className="mr-2">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Filter Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item as='button' onClick={ handleBrandFilter }>Filter Brands</Dropdown.Item>
            <Dropdown.Item as='button' onClick={ handleRegionFilter }>Filter Regions</Dropdown.Item>
            <Dropdown.Item as='button' onClick={ handleReset }>Clear Filters</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  );
}

export default DemoFilter;

