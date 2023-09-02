import { useState } from "react";

const useSort = (data, config) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleSortClick = (value) => {
    if (setSortBy && value !== sortBy) {
      setSortOrder("asc");
      setSortBy(value);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(value);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(value);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortBy,
    sortOrder,
    handleSortClick,
    sortedData,
  };
};
export default useSort;
