import Vue from "vue";
/**
 *
 * @param {*} options
 * 地图marker和popup使用组件
 * component是导入的组件的名字
 * parent 是挂载实例，
 *  propsData是prop数据
 *  
   const starRating = componentMarker({
      component: Image,  
      vue: this,
      propsData: { hello: 12321 }
    });

    // marker示例
     const popover = new mapboxgl.Marker({
      element: starRating,
      anchor: "bottom"
    })
      .setLngLat(coordinates)
      .addTo(map);

      //popup 示例
    var popup = new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setDOMContent(starRating)
      .setMaxWidth("300px")
      .addTo(map);
 */
export default function(options) {
  const { component, propsData, parent } = options;
  if (!component) return;
  const starRating = new Vue({
    ...component,
    parent,
    propsData
  }).$mount();
  return starRating.$el;
}
