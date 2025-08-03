import React from 'react';

export default function DetachmentTable({ detachments, onRemove }) {
  if (!detachments || detachments.length === 0) {
    return <p>No detachments added yet.</p>;
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {detachments.map((d, idx) => (
          <tr key={d._id || idx}>
            <td>{d.name}</td>
            <td>{d.type?.name || 'Unknown'}</td>
            <td>
              <button onClick={() => onRemove(d._id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}