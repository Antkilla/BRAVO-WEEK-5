//Create a component named StringList in a separate file. 
//It should take an array of strings as props and render each string as a list item <li> inside of an unordered list <ul> tag 
//Import and use this component in App.js with an array of any three strings.

// StringList.js

import React from 'react';

const StringList = ({ strings }) => {
  return (
    <ul>
      {strings.map((str, index) => (
        <li key={index}>{str}</li>
      ))}
    </ul>
  );
};

export default StringList;


