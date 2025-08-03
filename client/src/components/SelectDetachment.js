import React, { useEffect, useState } from 'react';

export default function SelectDetachment({ value, onChange }) {
  const [detachments, setDetachments] = useState([]);

  useEffect(() => {
    fetch('/api/detachments')
      .then(res => res.json())
      .then(setDetachments)
      .catch(err => console.error('Failed to fetch detachments:', err));
  }, []);

  return (
    <div>
      <label htmlFor="detachment-select">Select a Detachment:</label>
      <select
        id="detachment-select"
        value={value?._id || ''}
        onChange={e => {
          const selected = detachments.find(d => d._id === e.target.value);
          onChange(selected || null);
        }}
      >
        <option value="">-- Choose --</option>
        {detachments.map(d => (
          <option key={d._id} value={d._id}>
            {d.name} ({d.type?.name})
          </option>
        ))}
      </select>
    </div>
  );
}