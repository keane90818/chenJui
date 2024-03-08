<template>
  <div class="tw-flex lg:tw-gap-20 max-lg:tw-flex-col">
    <div class="max-lg:tw-order-2 tw-flex lg:tw-w-[32rem] lg:tw-h-[20rem] max-lg:tw-py-2 tw-border-2 tw-border-[#B99775] tw-border-dashed tw-justify-center tw-items-center">
      <img :src=getImg alt="" class="tw-w-96" >
    </div>
    <div class="max-lg:tw-order-1 tw-mt-10">
      <p class="tw-font-bold" :class=getCategoryColor>{{ getCategoryData }}</p>
      <p class="tw-mt-3 tw-text-5xl">{{ getName }}</p>
      <a class="tw-text-[#A47C5B] tw-font-bold tw-mt-5 tw-text-xl" href="">網站連結 ></a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import imgNanTou from "../assets/historicBuildings/NanTouTheater/1.jpg";
import imgDengYing from "../assets/historicBuildings/DengYing/3_7.jpg";
import imgLaiFa from "../assets/traditionalCrafts/LaiFa/4.jpg";
import imgGuanDe from "../assets/traditionalCrafts/GuanDe/2.jpg";
import imgHeiGou from "../assets/gourmetFood/HeiGou/2_3.jpg";
import imgYuanJhenFa from "../assets/gourmetFood/YuanJhenFa/3.jpg";

const props = defineProps({
  name: String,
  category: String,
})

const table = {
  // "NanTouTheater" : {
  //   name: "南投戲院",
  //   img: imgNanTou,
  //   url: "https://www.nantoutheater.com/index",
  // },
  // "DengYing" : {
  //   name: "登瀛書院",
  //   img: imgDengYing,
  //   url: "https://www.dysy.org.tw/",
  // },
  // "LaiFa" : {
  //   name: "來發鐵店",
  //   img: imgLaiFa,
  //   url: "https://www.facebook.com/Laifarblacksmithshop/",
  // },
  // "GuanDe" : {
  //   name: "冠德竹木精品社",
  //   img: imgGuanDe,
  //   url: "#"
  // },
  // "HeiGou" : {
  //   name: "黑狗兄傳統餅舖",
  //   img: imgHeiGou,
  //   url: "https://www.facebook.com/nutodog/?locale=zh_TW",
  // },
  "YuanJhenFa" : {
    name: "源振發製麵廠",
    img: imgYuanJhenFa,
    url: "https://yuanjhenfa.weebly.com/"
  },
}

const categoryData = {
  "historicBuildings" : {
    category: "歷史建築",
    colorClass: "tw-text-[#8D340F]",
  },
  "gourmetFood" : {
    category: "美食老店",
    colorClass: "tw-text-[#710400]",
  },
  "traditionalCrafts" : {
    category: "傳統技藝",
    colorClass: "tw-text-[#918D3B]",
  },
}

const getImg = computed(() => {
  return table[props.name].img || "unknown";
})

const getCategoryData = computed(() => {
  return categoryData[props.category].category || "unknown";
})

const getCategoryColor = computed(() => {
  return categoryData[props.category].colorClass;
})

const getName = computed(() => {
  return table[props.name].name || "unknown";
})

</script>

<style lang="scss" scoped>

</style>