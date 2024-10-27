import React from "react";

const PaginatedTable = ({ currentUsers, pageButtons }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="page-buttons">{pageButtons}</div>
    </>
  );
};

export default PaginatedTable;
