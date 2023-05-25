<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      class="max-w-lg justify-center"
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://hackmd.io/_uploads/B187wj2H3.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>
<style>
.v-img__img,
.v-img__picture,
.v-img__gradient,
.v-img__placeholder,
.v-img__error {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 50;
  /* width: 100%; */
  height: 100%;
}
</style>
