import React, { useState } from "react";
import "./FilterDropdown.css";

const FilterDropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const unselectAll = () => setSelectedOptions([]);

  return (
    <div className="filter-dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <strong>{label}</strong>
        <span className="arrow">{isOpen ? "▾" : "▸"}</span>
      </div>

      <div className="dropdown-label">All</div>

      {isOpen && (
        <div className="dropdown-options">
          <div className="unselect" onClick={unselectAll}>
            Unselect all
          </div>
          {options.map((option, idx) => (
            <label key={idx} className="checkbox-option">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
