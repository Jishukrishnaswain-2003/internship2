import React from "react";
import FilterDropdown from "./FilterDropdown";

const SidebarFilters = () => {
  return (
    <div className="sidebar">
      <FilterDropdown label="IDEAL FOR" options={["Men", "Women", "Baby & Kids"]} />
      <FilterDropdown label="OCCASION" options={["Casual", "Party", "Formal"]} />
      <FilterDropdown label="WORK" options={["Printed", "Embroidered", "Woven"]} />
      <FilterDropdown label="FABRIC" options={["Cotton", "Silk", "Linen"]} />
      <FilterDropdown label="SEGMENT" options={["Premium", "Budget", "Luxury"]} />
      <FilterDropdown label="SUITABLE FOR" options={["Summer", "Winter", "All Seasons"]} />
      <FilterDropdown label="RAW MATERIAL" options={["Organic", "Synthetic", "Blended"]} />
      <FilterDropdown label="PATTERN" options={["Solid", "Checked", "Striped"]} />
    </div>
  );
};

export default SidebarFilters;
