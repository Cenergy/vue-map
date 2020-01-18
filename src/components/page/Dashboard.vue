<template>
  <div id="map"></div>
</template>

<script>
import * as components from "../content";
import mapboxgl from "mapbox-gl";
import Image from "../content/Image.vue";
import "mapbox-gl/dist/mapbox-gl.css";
import Vue from "vue";
import componentMarker from "../../utils/componentMarker";
export default {
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiY2VuZXJneSIsImEiOiJjajBjYWdsYnMwNGM1MnFsY21xcTc2d3ZjIn0.nOvNpzuvlXEObCK7xcb5oQ";
      const map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/mapbox/dark-v10", // stylesheet location
        center: [105.08052356963802, 36.04231948670001], // starting position [lng, lat]
        zoom: 9 // starting zoom
      });

      const coordinates = map.getCenter().toArray();

      const html = componentMarker({
        component: Image,
        parent: this,
        propsData: { hello: '这是模板生成的overlay' }
      });
      console.log(`Rd: initMap -> html`, html);

      const popover = new mapboxgl.Marker({
        element: html,
        anchor: "bottom"
      })
        .setLngLat(coordinates)
        .addTo(map);
    },
    component2html(options) {
      const { component = "", data = "" } = options;
      if (!component) return;
      const Template = Vue.extend(component);
      const instance = new Template({
        data,
        el: document.createElement("div")
      });
      return instance.$el;
    }
  }
};
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
