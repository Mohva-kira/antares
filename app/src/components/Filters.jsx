import React from "react";

const FilterForm = ({ filters, handleFilterChange }) => {
  // Function to determine input type based on the filter key or value type
  const getInputType = (key, value) => {
    if (typeof value === "number") {
      return "number";
    }
    if (key.toLowerCase().includes("email")) {
      return "email";
    }
    return "text"; // Default type
  };

  return (
    <div className="w-1/4 flex items-center justify-start flex-col p-4 h-fit rounded-2xl bg-slate-50 fixed top-10 mt-20 m-3  shadow-lg">
      {Object.keys(filters).map((filterKey) => (
        <div key={filterKey} className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={filterKey}>
            {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
          </label>
          <input
            type={getInputType(filterKey, filters[filterKey])}
            name={filterKey}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={`Enter ${filterKey}`}
            value={filters[filterKey]}
            onChange={handleFilterChange}
          />
        </div>
      ))}
    </div>
  );
};

export default FilterForm;
