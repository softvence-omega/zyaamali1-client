import React, { useState } from "react";
import {
  FaBuilding,
  FaEdit,
  FaTrashAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

// Import Redux hooks and actions/types
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store"; // Adjust path based on your project structure
import {
  addBusiness,
  updateBusiness,
  deleteBusiness,
  Business,
} from "../../store/Features/BusinessSlice/ businessSlice"; // Adjust path based on your project structure

// Import modal components
import AddBusinessModal from "./AddBusinessModal";
import EditBusinessModal from "./EditBusinessModal";

const BusinessManagement: React.FC = () => {
  // Use useSelector to get businesses from the Redux store
  const businesses = useSelector(
    (state: RootState) => state.business.businesses
  );
  const dispatch: AppDispatch = useDispatch();

  console.log(businesses);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingBusiness, setEditingBusiness] = useState<Business | null>(null);
  const [expandedBusinessId, setExpandedBusinessId] = useState<string | null>(
    null
  );

  // Function to handle adding a new business (dispatches Redux action)
  const handleAddBusiness = (newBusinessData: Omit<Business, "id">) => {
    dispatch(addBusiness(newBusinessData)); // Dispatch the addBusiness action
    setIsAddModalOpen(false); // Close the modal
  };

  // Function to handle updating an existing business (dispatches Redux action)
  const handleUpdateBusiness = (updatedBusiness: Business) => {
    dispatch(updateBusiness(updatedBusiness)); // Dispatch the updateBusiness action
    setIsEditModalOpen(false); // Close the modal
    setEditingBusiness(null); // Clear editing state
  };

  // Function to open the edit modal with the selected business
  const openEditModal = (business: Business) => {
    setEditingBusiness(business);
    setIsEditModalOpen(true);
  };

  // Function to handle deleting a business (dispatches Redux action)
  const handleDeleteBusiness = (id: string) => {
    dispatch(deleteBusiness(id)); // Dispatch the deleteBusiness action
  };

  // Function to toggle the visibility of business details
  const toggleBusinessDetails = (id: string) => {
    setExpandedBusinessId(expandedBusinessId === id ? null : id);
  };

  return (
    <div className="pb-6 border-b border-gray-200">
      {(isAddModalOpen || isEditModalOpen) && (
        <div className="fixed inset-0 bg-black/70 z-30"></div>
      )}
      <div className="flex flex-col  md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Business Management
        </h2>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <span className="mr-2">+</span> Add Business
        </button>
      </div>

      <div className="space-y-4">
        {businesses.map((business: Business) => (
          <div
            key={business.id}
            className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <FaBuilding className="text-blue-500 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">
                  {business.name}
                </h3>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => openEditModal(business)}
                  className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Edit"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDeleteBusiness(business.id)}
                  className="p-2 text-gray-500 hover:text-red-600 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Delete"
                >
                  <FaTrashAlt />
                </button>
                <button
                  onClick={() => toggleBusinessDetails(business.id)}
                  className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Toggle details"
                >
                  {expandedBusinessId === business.id ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
              </div>
            </div>
            {expandedBusinessId === business.id && (
              <div className="text-sm text-gray-600 space-y-3 pt-3 border-t border-gray-100 mt-3">
                <div>
                  <p className="font-medium text-gray-700 mb-1">Description</p>
                  <p>{business.description}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-1">Goal</p>
                  <p>{business.goal}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Business Modal */}
      <AddBusinessModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddBusiness} // This will dispatch the Redux action
      />

      {/* Edit Business Modal */}
      {editingBusiness && (
        <EditBusinessModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setEditingBusiness(null);
          }}
          business={editingBusiness}
          onUpdate={handleUpdateBusiness} // This will dispatch the Redux action
        />
      )}
    </div>
  );
};

export default BusinessManagement;
