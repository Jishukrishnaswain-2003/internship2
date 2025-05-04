import React, { useState } from "react";
import './small.css'
import { FaCheck, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";

const Smallcontent = ({ showFilter, setShowFilter }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="filter-header">
      <div className="filter-left">
        <span className="items-count">3425 ITEMS</span>
        <span className="hide-filter" onClick={() => setShowFilter(!showFilter)}>
          {showFilter ? (
            <>
              <FiChevronLeft className="svg" />
              HIDE FILTER
            </>
          ) : (
            <>
              <FaChevronRight className="svg" />
              SHOW FILTER
            </>
          )}
        </span>
      </div>

      <div className="filter-right">
        <span
          className="sort-option"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {selectedOption} <FaChevronDown size={10} className="svg" />
        </span>

        {isDropdownOpen && (
          <div className="dropdown-box">
            {options.map((option, idx) => (
              <div
                key={idx}
                className={`dropdown-item ${selectedOption === option ? "selected" : ""}`}
                onClick={() => handleSelect(option)}
              >
                {selectedOption === option && <FaCheck className="check-icon" />}
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Smallcontent;