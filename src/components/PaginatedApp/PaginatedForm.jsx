import React from "react";

const PaginatedForm = ({ searchTerm, handleSearch, handleSort }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        className="paginated-input"
      />
      <div className="sorting-buttons">
        <button onClick={() => handleSort("name")}>Sort by Name</button>
        <button onClick={() => handleSort("email")}>Sort by Email</button>
      </div>
    </>
  );
};

export default PaginatedForm;
