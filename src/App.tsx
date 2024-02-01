import React, {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import ShipmentView from './components/ShipmentView'
import loadShipments from './api/LoadShipments'

const App: React.FC = () => {
  const [shipments, setShipments] = useState<Array<{shipmentId: number, shipmentOther: string}>>([])

  useEffect(() => {
    loadShipments();
    const dummyShipments = [
      {shipmentId: 1, shipmentOther: 'GMK67'},
      {shipmentId: 2, shipmentOther: 'MarshmallowKeycaps'}
    ]

    setShipments(dummyShipments)

    return () => {
    }
  }, [])

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Shipment Tracker</h1>
      {shipments.map((shipment) => (<ShipmentView key={shipment.shipmentId} shipmentId={shipment.shipmentId} shipmentOther={shipment.shipmentOther} />))}
    </div>

  )
  return (<p>Hey</p>);
};

export default App;