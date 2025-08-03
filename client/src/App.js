import React, { useEffect, useState } from 'react';
import FormControls from './components/FormControls';

const App = () => {
  const [units, setUnits] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState('');

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const response = await fetch('/api/units');
        const data = await response.json();
        setUnits(data);
      } catch (error) {
        console.error('Failed to fetch units:', error);
      }
    };

    fetchUnits();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedUnit(e.target.value);
  };

  return (
    <div>
      <FormControls
        units={units}
        onSelectChange={handleSelectChange}
      />
      <p>Selected: {selectedUnit}</p>
    </div>
  );
};

export default App;