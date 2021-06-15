import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function DemoSort(props) {

  const handleBrandSort = () => {
        props.sortDemosByBrand()
        console.log('hello brand sort');
    }
  const handleRegionSort = () => {
        props.sortDemosByRegion()
        console.log('hello region sort');
    }

  return (
    // <div>
    //     <h1>Data Dashboard</h1>
    // </div>
    <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Sort Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item as='button' onClick={ handleBrandSort }>Sort by Brand</Dropdown.Item>
            <Dropdown.Item as='button' onClick={ handleRegionSort }>Sort by Region</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  );
}

export default DemoSort;

