import React, { useState } from 'react';
import { FiChevronDown,FiChevronUp } from "react-icons/fi";

const Select_Dropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option);
    };

    return (
        <div className="custom-dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedOption || 'Select an option'}
                <span className="arrow">{isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20}  />}</span>
            </div>
            <div className={`dropdown-options ${isOpen ? 'open' : ''}`}>
                {options.map((option, index) => (
                    <div
                        key={index}
                        className="dropdown-option"
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Select_Dropdown;
