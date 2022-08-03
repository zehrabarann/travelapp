import  { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import { IMapData } from "../../types";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function SimpleMap({ setMapChange, setData } : any) {


    const [defaultProps, setDefaultProps] = useState({
        center: {
            lat: 38.99835602,
            lng: 35.01502627
            
        },
        zoom: 11
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setDefaultProps({
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                },
                zoom: 15
            })
        });
    }, [])


    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCVEhzYQrn3ZXwme5xiYUR5xYXR1PK8b8M" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onChange={(map : IMapData) => {
                    setMapChange(map)
                    // console.log(JSON.stringify(e))
                }}
            >
                {/* Marker */}
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}