import React, { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [singleContact, setSingleContact] = useState(null);

  useEffect(() => {
    const fetchSingleContact = async () => {
      try {
        const url = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`;
        const response = await fetch(url);
        const contact = await response.json();
        setSingleContact(contact);
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedContactId) {
      fetchSingleContact();
    }
  }, [selectedContactId]);

  const handleGoBack = () => {
    setSelectedContactId(null);
  };

  return (
    <div>
      <h2>Contact Details</h2>
      {singleContact ? (
        <>
          <p>Name: {singleContact.name}</p>
          <p>Email: {singleContact.email}</p>
          <p>Phone: {singleContact.phone}</p>
          <button onClick={handleGoBack}>Go Back</button>{" "}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
