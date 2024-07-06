import React, { useState } from "react";
import { useTheme } from "next-themes";
import Modal from "react-modal";
import DatePickerComponent from "../DatePicker"; // Assurez-vous que ce chemin est correct
import data from "../../data/portfolio.json";

Modal.setAppElement("#__next"); // Définir l'élément racine pour l'accessibilité

const Button = ({ children, type, onClick, classes, showDatePicker }) => {
    const { theme } = useTheme();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleDateSelect = (date) => {
        console.log("Selected date:", date);
        closeModal();
    };

    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        }
        if (showDatePicker) {
            openModal();
        }
    };

    const getButtonStyles = () => {
        if (type === "primary") {
            return `text-sm tablet:text-base p-1 laptop:p-5 m-1 laptop:m-2 rounded-lg ${
                theme === "dark"
                    ? "bg-white text-white"
                    : "bg-blue-700 text-white"
            } transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${
                data.showCursor && "cursor-none"
            } ${classes}`;
        } else {
            return `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
                theme === "dark"
                    ? "hover:bg-slate-600 text-white"
                    : "hover:bg-slate-100"
            } hover:scale-105 active:scale-100 tablet:first:ml-0 ${
                data.showCursor && "cursor-none"
            } ${classes} link`;
        }
    };

    return (
        <>
            <button
                onClick={handleClick}
                type="button"
                className={getButtonStyles()}
            >
                {children}
            </button>
            {showDatePicker && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Select a date"
                    className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75"
                    overlayClassName=""
                >
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                        <h2 className="text-lg font-medium mb-4">
                            Select a date for your appointment
                        </h2>
                        <DatePickerComponent onDateSelect={handleDateSelect} />
                        <button
                            onClick={closeModal}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Button;
