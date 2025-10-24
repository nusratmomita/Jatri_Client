import React, { useContext } from "react";
import { FaEnvelope, FaUser, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../../Authentication/AuthContext";

const UserProfile = () => {

    const {user} = useContext(AuthContext);
    console.log(user);

    if (!user) {
        return (
        <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-600">
            Please log in to view your profile.
        </div>
        );
    }

    return (
        <div className="mt-30 max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6">
        <div className="flex flex-col items-center">
            <img
            src={user.photoURL || "https://i.ibb.co/Qkq8r5V/default-avatar.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-500"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-1">{user.displayName || "Name"}</h2>
            <p className="text-gray-500 mb-4">{user.email || "email@example.com"}</p>

            <div className="w-full space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
                <FaUser className="text-blue-600" />
                <span><strong>Full Name:</strong> {user.displayName || "Not provided"}</span>
            </div>
            <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <span><strong>Email:</strong> {user.email || "Not provided"}</span>
            </div>
            <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-blue-600" />
                <span><strong>Joined:</strong> {user.metadata.creationTime || "Unknown"}</span>
            </div>
            </div>
        </div>
        </div>
    );
};

export default UserProfile;
