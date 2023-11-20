"use client";

import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import classes from "./MapBox.module.css";


export default function MapBox() {
	const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

	return (
		<main className={classes.mainStyle}>
			<Map
				mapboxAccessToken={mapboxToken}
				mapStyle="mapbox://styles/mapbox/streets-v12"
				style={classes.mapStyle}
				initialViewState={{ latitude: 31.868092, longitude: -116.64881, zoom: 13 }}
				maxZoom={40}
				minZoom={10}
			>
				<Marker longitude={-116.64881} latitude={31.868092} anchor="bottom" >
					<img src="./pin.png" width={30}/>
				</Marker>
			</Map>
		</main>
	);
}
