import React from "react";

export default function ContactRow({ setSelectedContactId, contact }) {
  const handleContactClick = () => {
    setSelectedContactId(contact.id);
  };

  return (
    <tr onClick={handleContactClick}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
