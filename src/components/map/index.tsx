import { useContext, useEffect, useState } from "react"
import GoogleMapReact from 'google-map-react';
import { IMapData, Datum } from "../../types";
import PlacesContext from "../../context/PlacesContext";

// const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function SimpleMap({ setMapChange }: any) {
    const { data }: any = useContext(PlacesContext);


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

    console.log("data", data)
    const renderMarkers = (map: any, maps: any) => {
        const markers = data?.data?.map((element: Datum, index: number) => {
            let marker = new maps.Marker({
                position: { lat: Number(element.latitude), lng: Number(element.longitude) },
                map,
                title: element.name,
                icon: element.photo?.images.thumbnail.url,

            });
            return marker
        })
        console.log('markers', markers)
        return markers
    }
    // const MarkersC = (lang: any, lng: any, text: string) => <div className="contact">{text}</div>;

    if (!!data) {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCVEhzYQrn3ZXwme5xiYUR5xYXR1PK8b8M" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    onGoogleApiLoaded={({ map, maps }) => {
                        renderMarkers(map, maps)
                    }}
                    onChange={(map: IMapData) => {
                        setMapChange(map)
                        // console.log(JSON.stringify(e))
                    }}
                >
                </GoogleMapReact>
            </div>
        );
    }
    else {
        return (
            <>Loading</>
        )
    }
}