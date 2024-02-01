import shipments from '../assets/shipments.json'
import ShipmentProp from '../types/Shipment'

export default function loadShipments() : Array<ShipmentProp> {
    return shipments.map((object, index) => {
        return (new ShipmentProp(object.orderId, object.name))
    })
}