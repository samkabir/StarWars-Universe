import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableRow, Paper, Typography
} from '@mui/material';
import formatDate from '../../utils/DateConverter/DateConverter';
import SmallNameCards from '../UI/Cards/SmallNameCard';
import { useNavigate } from 'react-router-dom';

const SingleResource = ({ resource, resourceType, }) => {
  const navigate = useNavigate();
  const handleResourceClick = (character, resourceType) => {
    navigate(`/${resourceType}/${character.id}`);
  };


  if (resourceType == 'planets') {
    const properties = resource?.properties || {};

    const rows = [
      { label: 'Resource Type', value: 'Planet' },
      { label: 'Terrain', value: properties.terrain },
      { label: 'Climate', value: properties.climate },
      { label: 'Gravity', value: properties.gravity },
      { label: 'Population', value: properties.population },
      { label: 'Diameter', value: properties.diameter },
      { label: 'Orbital Period', value: properties.orbital_period },
      { label: 'Rotation Period', value: properties.rotation_period },
      { label: 'Surface Water', value: properties.surface_water },
    ];
    return (
      <div
        className={`p-4 rounded-xl border border-gray-300 shadow-white shadow-md bg-gray-800`}
      >
        <h1 className="font-bold text-center text-4xl">
          <span className='text-red-500'>{resource.properties?.name}</span>
        </h1>
        <TableContainer component={Paper} className="rounded-lg shadow-md overflow-hidden my-10">
          <Table className="min-w-full">
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-500' : 'bg-gray-600'}>
                  <TableCell className="py-3 px-4 border-none">
                    <span className='text-gray-900 font-bold text-lg'>{row.label}</span>
                  </TableCell>
                  <TableCell className="py-3 px-4 border-none">
                    <span className='text-gray-900 font-bold text-lg'>{row.value ?? 'N/A'}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  } else if (resourceType == 'people') {
    const properties = resource?.properties || {};

    const rows = [
      { label: 'Resource Type', value: 'People' },
      { label: 'DOB', value: properties.birth_year },
      { label: 'Eye', value: properties.eye_color },
      { label: 'Gender', value: properties.gender },
      { label: 'Hair', value: properties.hair_color },
      { label: 'Height', value: properties.height },
      { label: 'Mass', value: properties.mass },
      { label: 'Complexity', value: properties.skin_color },
    ];
    return (
      <div
        className={`p-4 rounded-xl border border-gray-300 shadow-white shadow-md bg-gray-800`}
      >
        <h1 className="font-bold text-center text-4xl">
          <span className='text-red-500'>{resource.properties?.name}</span>
        </h1>
        <TableContainer component={Paper} className="rounded-lg shadow-md overflow-hidden my-10">
          <Table className="min-w-full">
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-500' : 'bg-gray-600'}>
                  <TableCell className="py-3 px-4 border-none">
                    <span className='text-gray-900 font-bold text-lg'>{row.label}</span>
                  </TableCell>
                  <TableCell className="py-3 px-4 border-none">
                    <span className='text-gray-900 font-bold text-lg'>{row.value ?? 'N/A'}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {properties?.homeworld && (
          <SmallNameCards
            resourceUrls={[properties.homeworld]}
            onresourceClick={handleResourceClick}
            title="HomeWorld"
            resourceType="planets"
          />
        )}
      </div>
    );
  } else if (resourceType == 'species') {
    const properties = resource?.properties || {};

    const rows = [
      { label: 'Resource Type', value: 'Species' },
      { label: 'Classification', value: properties.classification },
      { label: 'Designation', value: properties.designation },
      { label: 'Language', value: properties.language },
      { label: 'Average Lifespan', value: properties.average_lifespan },
      { label: 'Average Height', value: properties.average_height },
      { label: 'Skin Colors', value: properties.skin_colors },
      { label: 'Eye Colors', value: properties.eye_colors },
      { label: 'Hair Colors', value: properties.hair_colors },
    ];
    return (
      <div
        className={`p-4 rounded-xl border border-gray-300 shadow-white shadow-md bg-gray-800`}
      >
        <h1 className="font-bold text-center text-4xl">
          <span className='text-red-500'>{resource.properties?.name}</span>
        </h1>
        <TableContainer component={Paper} className="rounded-lg shadow-md overflow-hidden my-10">
          <Table className="min-w-full">
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-500' : 'bg-gray-600'}>
                  <TableCell className="py-3 px-4 border-none">
                    <span className='text-gray-900 font-bold text-lg'>{row.label}</span>
                  </TableCell>
                  <TableCell className="py-3 px-4 border-none">
                    <span className='text-gray-900 font-bold text-lg'>{row.value ?? 'N/A'}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {properties?.people && 
        <SmallNameCards
          resourceUrls={properties?.people}
          onresourceClick={handleResourceClick}
          title="Characters of this species"
          resourceType="people"
        />
        }
        
      </div>
    );
  } else if (resourceType == 'starships') {
    const properties = resource?.properties || {};

    const rows = [
      { label: 'Resource Type', value: 'Starship' },
      { label: 'Model', value: properties.model },
      { label: 'Starship Class', value: properties.starship_class },
      { label: 'Manufacturer', value: properties.manufacturer },
      { label: 'MGLT', value: properties.MGLT },
      { label: 'Cargo Capacity', value: properties.cargo_capacity },
      { label: 'Consumables', value: properties.consumables },
      { label: 'Crew', value: properties.crew },
      { label: 'Hyperdrive Rating', value: properties.hyperdrive_rating },
      { label: 'Length', value: properties.length },
      { label: 'Max Atmosphering Speed', value: properties.max_atmosphering_speed },
      { label: 'cost_in_credits', value: properties.cost_in_credits },
    ];
    return (
      <div
        className={`p-4 rounded-xl border border-gray-300 shadow-white shadow-md bg-gray-800`}
        onClick={() => onClick(resource.uid)}
      >
        <h1 className="font-bold text-center text-4xl">
          <span className='text-red-500'>{resource.properties?.name}</span>
        </h1>
        <TableContainer component={Paper} className="rounded-lg shadow-md overflow-hidden my-10">
          <Table className="min-w-full">
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-500' : 'bg-gray-600'}>
                  <TableCell className="py-3 px-4 border-none">
                    <span className='text-gray-900 font-bold text-lg'>{row.label.replaceAll('_', ' ').replace(/\b\w/g, char => char.toUpperCase())}</span>
                  </TableCell>
                  <TableCell className="py-3 px-4 border-none">
                    <span className='text-gray-900 font-bold text-lg'>{row.value ?? 'N/A'}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {properties?.films &&
          <SmallNameCards
            resourceUrls={properties?.films}
            onresourceClick={handleResourceClick}
            title="Starship seen in these Films"
            resourceType="films"
          />
        }
       
        {properties?.pilots?.length > 0 &&
          <SmallNameCards
            resourceUrls={properties?.pilots}
            onresourceClick={handleResourceClick}
            title="Pilots of this Starship"
            resourceType="people"
          />}
      </div>
    );
  } else if (resourceType == 'vehicles') {
    const properties = resource?.properties || {};

    const rows = [
      { label: 'Resource Type', value: 'Vehicle' },
      { label: 'Model', value: properties.model },
      { label: 'vehicle_class', value: properties.vehicle_class },
      { label: 'Manufacturer', value: properties.manufacturer },
      { label: 'passengers', value: properties.passengers },
      { label: 'Cargo Capacity', value: properties.cargo_capacity },
      { label: 'Consumables', value: properties.consumables },
      { label: 'Crew', value: properties.crew },
      { label: 'Length', value: properties.length },
      { label: 'Max Atmosphering Speed', value: properties.max_atmosphering_speed },
      { label: 'cost_in_credits', value: properties.cost_in_credits },
    ];
    return (
      <div
        className={`p-4 rounded-xl border border-gray-300 shadow-white shadow-md bg-gray-800`}
      >
        <h1 className="font-bold text-center text-4xl">
          <span className='text-red-500'>{resource.properties?.name}</span>
        </h1>
        <TableContainer component={Paper} className="rounded-lg shadow-md overflow-hidden my-10">
          <Table className="min-w-full">
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-500' : 'bg-gray-600'}>
                  <TableCell className="py-3 px-4 border-none">
                    <span className='text-gray-900 font-bold text-lg'>{row.label.replaceAll('_', ' ').replace(/\b\w/g, char => char.toUpperCase())}</span>
                  </TableCell>
                  <TableCell className="py-3 px-4 border-none">
                    <span className='text-gray-900 font-bold text-lg'>{row.value ?? 'N/A'}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {properties?.films && 
         <SmallNameCards
          resourceUrls={properties?.films}
          onresourceClick={handleResourceClick}
          title="Vehicles seen in these Films"
          resourceType="films"
        />
        }
       
        {properties?.pilots?.length > 0 &&
          <SmallNameCards
            resourceUrls={properties?.pilots}
            onresourceClick={handleResourceClick}
            title="Pilots who drove this vehicle"
            resourceType="people"
          />}

      </div>
    );
  } else {
    const properties = resource?.properties || {};

    const rows = [
      { label: 'Resource Type', value: 'Film' },
      { label: 'description', value: resource?.description },
      { label: 'director', value: properties?.director },
      { label: 'producer', value: properties?.producer },
      { label: 'release_date', value: formatDate(properties?.release_date, { month: 'short', day: 'numeric', year: 'numeric' }) },

    ];

    return (
      <div
        className={`p-4 rounded-xl border border-gray-300 shadow-white shadow-md bg-gray-800`}
      >
        <h1 className="font-bold text-center text-4xl">
          <span className='text-red-500'>{resource.properties?.title}</span>
        </h1>
        <h1 className="font-semibold text-center text-xl mt-5">
          <span className='text-gray-200'>{resource.properties?.opening_crawl}</span>
        </h1>
        <TableContainer component={Paper} className="rounded-lg shadow-md overflow-hidden my-10">
          <Table className="min-w-full">
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-500' : 'bg-gray-600'}>
                  <TableCell className="py-3 px-4 border-none">
                    <span className='text-gray-900 font-bold text-lg'>{row.label.replaceAll('_', ' ').replace(/\b\w/g, char => char.toUpperCase())}</span>
                  </TableCell>
                  <TableCell className="py-3 px-4 border-none">
                    <span className='text-gray-900 font-bold text-lg'>{row.value ?? 'N/A'}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <SmallNameCards
          resourceUrls={properties?.characters}
          onresourceClick={handleResourceClick}
          title="Characters in this Film"
          resourceType="people"
        />
        <SmallNameCards
          resourceUrls={properties?.planets}
          onresourceClick={handleResourceClick}
          title="Planets in this Film"
          resourceType="planets"
        />
        <SmallNameCards
          resourceUrls={properties?.starships}
          onresourceClick={handleResourceClick}
          title="Starships in this Film"
          resourceType="starships"
        />
        <SmallNameCards
          resourceUrls={properties?.vehicles}
          onresourceClick={handleResourceClick}
          title="Vehicles in this Film"
          resourceType="vehicles"
        />
      </div>
    );
  }
}

export default SingleResource;