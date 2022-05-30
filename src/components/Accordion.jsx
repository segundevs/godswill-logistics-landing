import React from 'react';

const Accordion = ({ title, content }) => {

  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className={isActive ? "accordion active-color" : "accordion"}>
      <div className="accordion_title" onClick={() => setIsActive(!isActive)}>
        <div className={isActive ? "is_active" : "title"}>{title}</div>
        <div className={isActive ? "is_active icon" : "icon"}>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion_content">{content}</div>}
    </div>
  );
};

export default Accordion