import { useState } from "react"
import HeaderComponent from "../components/header"
import List from "../components/list"
import MainMap from "../components/map"
import SelectFindStore from "../components/selectFindStore"
import { IMapData } from "../types"


const Home = () => {

    const [mapChange, setMapChange] = useState<IMapData>({ "center": { "lat": 39.05783143383019, "lng": 35.070644556132805 }, "zoom": 10, "bounds": { "nw": { "lat": 39.39028651668633, "lng": 33.917080103007805 }, "se": { "lat": 38.72380361044924, "lng": 36.224209009257805 }, "sw": { "lat": 38.72380361044924, "lng": 33.917080103007805 }, "ne": { "lat": 39.39028651668633, "lng": 36.224209009257805 } }, "marginBounds": { "nw": { "lat": 39.39028651668633, "lng": 33.917080103007805 }, "se": { "lat": 38.72380361044924, "lng": 36.224209009257805 }, "sw": { "lat": 38.72380361044924, "lng": 33.917080103007805 }, "ne": { "lat": 39.39028651668633, "lng": 36.224209009257805 } }, "size": { "width": 1680, "height": 625 } });


    return (
        <>
            <HeaderComponent />
            <List mapValue={mapChange} />
            <SelectFindStore />
            <MainMap setMapChange={setMapChange} />
        </>
    )
}

export default Home