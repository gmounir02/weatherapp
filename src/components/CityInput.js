import React from 'react';
import './CityInput.css';

export default class CityInput extends React.Component {
  render() {
    const onKlickHandler = async (e) => {
      e.persist();
      const eventKey = e.which ? e.which : e.keyCode;
      const city = e.target.value;

      // check if input contains only letters after Enter was pressed
      if (eventKey === 13) {
        if (/^[a-zA-ZäöüÄÖÜß ]+$/.test(city)) {
          e.target.classList.add('loading');

          if (await this.props.makeApiCall(city)) e.target.placeholder = 'Enter a City...';
          else e.target.placeholder = 'City was not found, try again...';
        } else e.target.placeholder = 'Please enter a valid city name...';
        e.target.classList.remove('loading');
        e.target.value = '';
      }
    };

    const style = {
      width: '90%', // Adjusted width for responsiveness
      maxWidth: '600px', // Maximum width to maintain readability
      display: 'inline-block',
      padding: '15px 20px', // Adjusted padding for better spacing
      lineHeight: '140%', // Increased line height for better readability
      position: 'relative',
      borderRadius: '20px',
      outline: 'none',
      fontSize: '20px',
      border: '2px solid #ccc', // Add a border for visual separation
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow for depth
      backgroundColor: '#f9f9f9', // Add a light background color
      color: '#333', // Set text color
    };

    return (
      <input
        className='city-input'
        style={style}
        type='text'
        placeholder='Enter a City...'
        onKeyPress={onKlickHandler}
      />
    );
  }
}
