import React from 'react';
import formatDate from '../../../utils/DateConverter/DateConverter';

const ResourceCard = ({ resource, onClick, className = '', resourceType }) => {
  console.log(resource)
  if (resourceType == 'planets') {
    return (
      <div
        className={`p-4 rounded-xl border border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors transform duration-500 hover:text-black hover:scale-[1.02] shadow-white shadow-md ${className}`}
        onClick={() => onClick(resource.uid)}
      >
        <h1 className="font-bold text-2xl">
          <span className='text-red-500'>{resource.properties?.name}</span>
        </h1>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Climate</span> : {resource.properties?.climate}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>terrain</span> : {resource.properties?.terrain}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Diameter</span> : {resource.properties?.diameter}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Gravity</span> : {resource.properties?.gravity}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Orbital Period</span> : {resource.properties?.orbital_period}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Population</span> : {resource.properties?.population}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Rotation Period</span> : {resource.properties?.rotation_period}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Surface Water</span> : {resource.properties?.surface_water}
        </h2>
        
      </div>
    );
  } else if (resourceType == 'people'){
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
  } else if (resourceType == 'species'){
     return (
      <div
        className={`p-4 rounded-xl border border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors transform duration-500 hover:text-black hover:scale-[1.02] shadow-white shadow-md ${className}`}
        onClick={() => onClick(resource.uid)}
      >
        <h1 className="font-bold text-2xl">
          <span className='text-red-500'>{resource.properties?.name}</span>
        </h1>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Average Lifespan</span> : {resource.properties?.average_lifespan}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Classification</span> : {resource.properties?.classification}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Designation</span> : {resource.properties?.designation}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Eye Colors</span> : {resource.properties?.eye_colors}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Language</span> : {resource.properties?.language}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Skin Colors</span> : {resource.properties?.skin_colors}
        </h2>
      </div>
     );
  } else if (resourceType == 'starships'){
     return (
      <div
        className={`p-4 rounded-xl border border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors transform duration-500 hover:text-black hover:scale-[1.02] shadow-white shadow-md ${className}`}
        onClick={() => onClick(resource.uid)}
      >
        <h1 className="font-bold text-2xl">
          <span className='text-red-500'>{resource.properties?.name}</span>
        </h1>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Model</span> : {resource.properties?.model}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Starship Class</span> : {resource.properties?.starship_class}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Manufacturer</span> : {resource.properties?.manufacturer}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Cost In Credits</span> : {resource.properties?.cost_in_credits}
        </h2>
      </div>
     );
  } else if (resourceType == 'vehicles'){
     return (
      <div
        className={`p-4 rounded-xl border border-gray-300 cursor-pointer hover:bg-red-100 transition-colors transform duration-500 hover:text-black hover:scale-[1.02] shadow-white shadow-md ${className}`}
        onClick={() => onClick(resource.uid)}
      >
        <h1 className="font-bold text-2xl">
          <span className='text-red-500'>{resource.properties?.name}</span>
        </h1>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Model</span> : {resource.properties?.model}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Vehicle Class</span> : {resource.properties?.vehicle_class}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Manufacturer</span> : {resource.properties?.manufacturer}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Cost In Credits</span> : {resource.properties?.cost_in_credits}
        </h2>
      </div>
     );
  } else {
     return (
      <div
        className={`p-4 rounded-xl border border-gray-300 cursor-pointer hover:bg-red-100 transition-colors transform duration-500 hover:text-black hover:scale-[1.02] shadow-white shadow-md ${className}`}
        onClick={() => onClick(resource.uid)}
      >
        <h1 className="font-bold text-2xl">
          <span className='text-red-500'>{resource.properties?.title}</span>
        </h1>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Released Date</span> : {formatDate(resource.properties?.release_date, {month: 'short',  day: 'numeric', year: 'numeric' })}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Vehicle Class</span> : {resource.properties?.vehicle_class}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Director</span> : {resource.properties?.director}
        </h2>
        <h2 className="font-medium text-md">
          <span className='text-blue-500'>Producer</span> : {resource.properties?.producer}
        </h2>
      </div>
     );
  }


};

export default ResourceCard;