<template>
  <div class="own-popup">123 ---{{ hello }}</div>
</template>

<script>
export default {
  props: {
    hello: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.own-popup {
  padding: 10px;
  max-width: 200px;
  background: #fff;
  border-radius: 4px;
}
</style>
