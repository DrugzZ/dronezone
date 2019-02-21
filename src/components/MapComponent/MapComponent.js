import React, { Component } from "react";
import { Map, View } from "ol";
import "./ol.css";
import TileLayer from "ol/layer/Tile";
import { Vector as VectorLayer } from "ol/layer.js";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature.js";
import Point from "ol/geom/Point.js";
import { Icon, Style } from "ol/style.js";
import VectorSource from "ol/source/Vector.js";

import PinIcon from "../../assets/media/location-pin_icon.png";

export default class MapComponent extends Component {
  componentDidMount() {
    const pointOne = new Feature({
      geometry: new Point(fromLonLat([-73.935242, 40.73061]))
    });

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [pointOne]
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          color: "red",
          src: PinIcon
        })
      })
    });

    new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "http://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          })
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat([-73.935242, 40.73061]),
        zoom: 10
      })
    });
  }

  render() {
    return <div id="map" style={{ height: "400px" }} />;
  }
}
