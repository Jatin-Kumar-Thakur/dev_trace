import React from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
    const updateFilter = (field, value) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="bg-[#121212] px-4 py-2 shadow  w-full sm:w-1/4 mb-4 sm:mb-0 sm:mr-4 border border-[#2A2A2A] text-[#FFFFFF]">
            <h2 className="font-bold mb-2">Filters</h2>
            <div className="mb-3">
                <label className="block text-sm font-medium">Method</label>
                <select
                    className="w-full border rounded p-1 bg-[#1C1C1C]"
                    value={filters.method}
                    onChange={(e) => updateFilter('method', e.target.value)}
                >
                    <option value="">All</option>
                    <option>GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium ">Status Code</label>
                <input
                    type="text"
                    className="w-full border rounded p-1 bg-[#1C1C1C]"
                    placeholder="e.g. 200, 404"
                    value={filters.statusCode}
                    onChange={(e) => updateFilter('statusCode', e.target.value)}
                />
            </div>
        </div>
    );
};

export default FilterSidebar;
