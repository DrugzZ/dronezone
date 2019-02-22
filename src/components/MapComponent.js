import React, { Component } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { Vector as VectorLayer } from "ol/layer.js";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature.js";
import Point from "ol/geom/Point.js";
import { Icon, Style } from "ol/style.js";
import VectorSource from "ol/source/Vector.js";

import PinIcon from "../assets/media/location-pin_icon.png";

export default class MapComponent extends Component {
  componentDidMount() {
    const pointOne = new Feature({
      geometry: new Point(fromLonLat([-74.077644, 40.728157]))
    });
    const pointTwo = new Feature({
      geometry: new Point(fromLonLat([-74.200974, 40.666058]))
    });
    const pointThree = new Feature({
      geometry: new Point(fromLonLat([-73.769417, 40.742054]))
    });
    const pointFour = new Feature({
      geometry: new Point(fromLonLat([-73.708466, 40.664268]))
    });
    const pointFive = new Feature({
      geometry: new Point(fromLonLat([-73.897766, 40.71085]))
    });

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [pointOne, pointTwo, pointThree, pointFour, pointFive]
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 120],
          anchorXUnits: "fraction",
          anchorYUnits: "pixels",
          src: PinIcon,
          scale: 0.4
        })
      })
    });

    const map = new Map({
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
        zoom: 11,
        minZoom: 9,
        maxZoom: 17
      })
    });

    map.on("pointermove", e => {
      let hit = e.map.hasFeatureAtPixel(e.pixel);
      map.getTargetElement().style.cursor = hit ? "pointer" : "";
    });
  }

  render() {
    //height must be declared explicitly
    return <section id="map" style={{ height: `${this.props.height}px` }} />;
  }
}
