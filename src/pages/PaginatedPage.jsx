import React, { useState, useEffect } from "react";
import axios from "axios";
import PaginatedForm from "../components/PaginatedApp/PaginatedForm";
import PaginatedTable from "../components/PaginatedApp/PaginatedTable";

const PaginatedPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
      console.log(response.data);
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    let sortedUsers;

    if (sortOrder === "asc") {
      sortedUsers = [...users].sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      });
      setSortOrder("desc");
    } else {
      sortedUsers = [...users].sort((a, b) => {
        if (a[key] < b[key]) {
          return 1;
        }
        if (a[key] > b[key]) {
          return -1;
        }
        return 0;
      });
      setSortOrder("asc");
    }

    setUsers(sortedUsers);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageCount = Math.ceil(filteredUsers.length / usersPerPage);
  const pageButtons = [];

  for (let index = 0; index < pageCount; index++) {
    const pageNumber = index + 1;
    pageButtons.push(
      <button
        key={pageNumber}
        onClick={() => paginate(pageNumber)}
        className={currentPage === pageNumber ? "active" : ""}
      >
        {pageNumber}
      </button>
    );
  }

  return (
    <div id="paginated-page">
      <div className="paginated-page container">
        <PaginatedForm
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          handleSort={handleSort}
        />
        <PaginatedTable currentUsers={currentUsers} pageButtons={pageButtons} />
      </div>
    </div>
  );
};

export default PaginatedPage;
