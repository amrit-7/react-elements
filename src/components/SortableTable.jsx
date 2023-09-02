import { useState } from "react";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";
import Table from "./Table";
import useSort from "../custom-hooks/use-sort";
const SortableTable = (props) => {
  // const [sortOrder, setSortOrder] = useState(null);
  // const [sortBy, setSortBy] = useState(null);

  // const handleSortClick = (value) => {
  //   if (setSortBy && value !== sortBy) {
  //     setSortOrder("asc");
  //     setSortBy(value);
  //     return;
  //   }
  //   if (sortOrder === null) {
  //     setSortOrder("asc");
  //     setSortBy(value);
  //   } else if (sortOrder === "asc") {
  //     setSortOrder("desc");
  //     setSortBy(value);
  //   } else if (sortOrder === "desc") {
  //     setSortOrder(null);
  //     setSortBy(null);
  //   }
  // };

  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, handleSortClick } = useSort(
    data,
    config
  );
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleSortClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });
  const getIcons = (label, sortby, sortorder) => {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    }
    if (sortOrder === null) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return <GoArrowSmallUp />;
    } else {
      return <GoArrowSmallDown />;
    }
  };

  // let sortedData = data;
  // if (sortBy && sortOrder) {
  //   const { sortValue } = config.find((column) => column.label === sortBy);
  //   sortedData = [...data].sort((a, b) => {
  //     const valueA = sortValue(a);
  //     const valueB = sortValue(b);
  //     const reverseOrder = sortOrder === "asc" ? 1 : -1;
  //     if (typeof valueA === "string") {
  //       return valueA.localeCompare(valueB) * reverseOrder;
  //     } else {
  //       return (valueA - valueB) * reverseOrder;
  //     }
  //   });
  // }
  return (
    <div>
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  );
};

export default SortableTable;
