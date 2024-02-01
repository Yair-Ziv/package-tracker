import React from 'react';

interface ShipmentData {
  shipmentId: number;
  shipmentOther: string;
}

const ShipmentView: React.FC<ShipmentData> = ({shipmentId, shipmentOther}) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>ShipmentId: {shipmentId}</h3>
      <p>Random: {shipmentOther}</p>
    </div>
  )
}

export default ShipmentView;