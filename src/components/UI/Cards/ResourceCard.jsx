import React from 'react';

const ResourceCard = ({ resource, onClick, className = '' }) => {
  return (
    <div
      className={`p-4 rounded-xl border border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors transform duration-500 hover:text-black hover:scale-[1.02] shadow-white shadow-md ${className}`}
      onClick={() => onClick(resource.uid)}
    >
      <h1 className="font-bold text-2xl">
        <span className='text-red-500'>{resource.properties?.name}</span>
      </h1>
      <h2 className="font-medium text-md">
        <span className='text-blue-500'>DOB</span> : {resource.properties?.birth_year}
      </h2>
      <h2 className="font-medium text-md">
        <span className='text-blue-500'>Eye</span> : {resource.properties?.eye_color}
      </h2>
      <h2 className="font-medium text-md">
        <span className='text-blue-500'>Gender</span> : {resource.properties?.gender}
      </h2>
      <h2 className="font-medium text-md">
        <span className='text-blue-500'>Hair</span> : {resource.properties?.hair_color}
      </h2>
      <h2 className="font-medium text-md">
        <span className='text-blue-500'>Height</span> : {resource.properties?.height}
      </h2>
      <h2 className="font-medium text-md">
        <span className='text-blue-500'>Mass</span> : {resource.properties?.mass}
      </h2>
      <h2 className="font-medium text-md">
        <span className='text-blue-500'>Complexity</span> : {resource.properties?.skin_color}
      </h2>
    </div>
  );
};

export default ResourceCard;