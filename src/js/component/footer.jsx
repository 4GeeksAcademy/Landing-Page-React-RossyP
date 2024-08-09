import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export const Footer = () => {
    return (
        <div className="footer bg-dark text-white mt-5 p-5">
            Copyright <FontAwesomeIcon icon={faCopyright} />  Your Website 2024
        </div>
    );
};