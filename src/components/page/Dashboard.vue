<template>
  <div id="map"></div>
</template>

<script>
import * as components from "../content";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Vue from "vue";
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

      const html = this.component2html({
        component: components["image"],
        data: { hello: "这是vue模板生成的地图弹窗!" }
      });

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
