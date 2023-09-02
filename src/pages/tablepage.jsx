import React from "react";
// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

const TablePage = () => {
  const data = [
    { id: 2, name: "Mango", email: "mango@email.com", score: "3" },
    { id: 3, name: "Kiwi", email: "kiwi@email.com", score: "5" },
    { id: 1, name: "Apple", email: "apple@email.com", score: "2" },
    { id: 4, name: "Orange", email: "orange@email.com", score: "1" },
    { id: 5, name: "Papaya", email: "papaya@email.com", score: "6" },
    { id: 6, name: "Litchi", email: "litchi@email.com", score: "7" },
    { id: 7, name: "Watermelon", email: "watermelon@email.com", score: "4" },
  ];

  // const getSortValue = (data) => {
  //   return data.name;
  // };

  // const sortingOrder = "des";
  // sorting on numbers
  // const newData = [1, 4, 0, 19, 10];
  // newData.sort((a, b) => {
  //   return a - b;
  // });
  // sorting on strings
  // const newStrings = ["a", "A", "X", "c", "t"];
  // newStrings.sort((a, b) => {
  //   return a.localeCompare(b);
  // });
  // sorting on object (numbers)
  // data.sort((a, b) => {
  //   const val1 = getSortValue(a);
  //   const val2 = getSortValue(b);
  //   return val1 - val2;
  // });
  // sorting on objects (strings)
  // data.sort((a, b) => {
  //   const val1 = getSortValue(a);
  //   const val2 = getSortValue(b);
  //   const reverseOrder = sortingOrder === "asc" ? 1 : -1;
  //   if (typeof val1 === "string") {
  //     return val1.localeCompare(val2) * reverseOrder;
  //   } else {
  //     return (val1 - val2) * reverseOrder;
  //   }
  // });

  const config = [
    { label: "Id", render: (data) => data.id },
    {
      label: "Name",
      render: (data) => data.name,
      sortValue: (data) => data.name,
    },
    { label: "Email", render: (data) => data.email },
    {
      label: "Score",
      render: (data) => data.score,
      sortValue: (data) => data.score,
    },
  ];
  return (
    <div>
      <SortableTable data={data} config={config} />
    </div>
  );
};

export default TablePage;
