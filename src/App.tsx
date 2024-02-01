import React, {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import ShipmentView from './components/ShipmentView'
import loadShipments from './api/LoadShipments'
import ShipmentProp from './types/Shipment'

const App: React.FC = () => {
  const [shipments, setShipments] = useState<Array<ShipmentProp>>([])

  useEffect(() => {
    let userShipments = loadShipments();

    setShipments(userShipments)

    return () => {
    }
  }, [])

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Shipment Tracker</h1>
      {
        shipments.map((ship) => {
          return <ShipmentView id={ship.id} name={ship.name}/>
        })
      }
    </div>
  )
  return (<p>Hey</p>);
};

export default App;