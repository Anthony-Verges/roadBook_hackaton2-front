import Header from "./Components/Header/Header";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* <MapContainer
        id="mapId"
        // style={{ width: "100px", heigth: "100px" }}
        center={[43.477, -1.565]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
      {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      {/* </MapContainer> */}
      <Footer />
    </div>
  );
}

export default App;

