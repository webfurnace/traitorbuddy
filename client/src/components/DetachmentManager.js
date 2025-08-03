import React, { useState } from 'react';
import SelectDetachment from './SelectDetachment';
import DetachmentTable from './DetachmentTable';

export default function DetachmentManager() {
  const [selectedDetachment, setSelectedDetachment] = useState(null);
  const [addedDetachments, setAddedDetachments] = useState([]);

  const handleAdd = () => {
    if (
      selectedDetachment &&
      !addedDetachments.some(d => d._id === selectedDetachment._id)
    ) {
      setAddedDetachments(prev => [...prev, selectedDetachment]);
      setSelectedDetachment(null);
    }
  };

  const handleRemove = (id) => {
    setAddedDetachments(prev => prev.filter(d => d._id !== id));
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
        <SelectDetachment
          value={selectedDetachment}
          onChange={setSelectedDetachment}
        />
        <button
          style={{ marginTop: '1rem' }}
          onClick={handleAdd}
          disabled={!selectedDetachment}
        >
          Add
        </button>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
        <DetachmentTable
          detachments={addedDetachments}
          onRemove={handleRemove}
        />
      </div>
    </div>
  );
}