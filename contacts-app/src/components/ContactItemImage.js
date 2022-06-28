import React from "react";

const ContactItemImage = ({ imageUrl, name }) => {
  return <img src={imageUrl} alt={name} />;
};

export default ContactItemImage;
