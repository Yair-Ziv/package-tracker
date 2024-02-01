import React from 'react';
import ShipmentProp from '../types/Shipment';

const ShipmentView: React.FC<ShipmentProp> = (prop :ShipmentProp) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>ShipmentId: {prop.id}</h3>
      <p>Shipment Name: {prop.name}</p>
    </div>
  )
}

export default ShipmentView;