import React from 'react';
import './styles.css'

const Card = ({ children }) => {
    // The component returns JSX: a div element
    return (
      <div className="card">
        {/* The 'children' prop contains whatever is placed between the opening
            and closing <Card> tags when the component is used. */}
        {children}
      </div>
    );
  };
  
  // Export the component so it can be imported and used elsewhere
  export default Card;

