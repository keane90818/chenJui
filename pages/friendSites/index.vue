<template>
  <div class=" tw-items-center tw-justify-center tw-p-0">
    <div class="tw-flex tw-py-20 tw-w-full tw-px-96 tw-bg-[#E5D2C2] tw-gap-20">
      <div class="tw-w-[36rem]">
        <p class="tw-font-extrabold tw-text-5xl tw-text-[#C07C56] text-shadow">友站連結</p>
        <hr class="tw-border-[#C07C56] tw-mt-3 tw-mb-10">
        <div class="tw-pt-5 tw-font-bold tw-text-[18px] tw-text-[#8D340F]">歷史建築
          <p> -南投戲院</p>
          <p> -登瀛書院</p>
        </div>
        <div class="tw-pt-5 tw-font-bold tw-text-[18px] tw-text-[#918D3B]">傳統技藝
          <p> -來發鐵店</p>
          <p> -冠德竹木精品社</p>
        </div>
        <div class="tw-pt-5 tw-font-bold tw-text-[18px] tw-text-[#710400]">美食老店
          <p> -黑狗兄傳統餅舖</p>
          <p> -源振發製麵廠</p>
        </div>
      </div>
      <div>
        <div class="tw-h-[400px] tw-w-[600px] ">
          <v-carousel hide-delimiters height="400">
            <v-carousel-item :src="carousel1" cover width="100%" height="400px"></v-carousel-item>
            <v-carousel-item :src="carousel2" cover width="100%" height="400px"></v-carousel-item>
            <v-carousel-item :src="carousel3" cover width="100%" height="400px"></v-carousel-item>
            <v-carousel-item :src="carousel4" cover width="100%" height="400px"></v-carousel-item>
            <v-carousel-item :src="carousel5" cover width="100%" height="400px"></v-carousel-item>
            <v-carousel-item :src="carousel6" cover width="100%" height="400px"></v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </div>
    <div class="tw-py-20 tw-w-full tw-px-96 tw-bg-[#F1EDE3] tw-gap-20">
      <ListItem name="NanTouTheater" category="historicBuildings" class="tw-mt-20"/>
      <ListItem name="DengYing" category="historicBuildings" class="tw-mt-20"/>
      <ListItem name="LaiFa" category="traditionalCrafts" class="tw-mt-20"/>
      <ListItem name="GuanDe" category="traditionalCrafts" class="tw-mt-20"/>
      <ListItem name="HeiGou" category="gourmetFood" class="tw-mt-20"/>
      <ListItem name="YuanJhenFa" category="gourmetFood" class="tw-mt-20"/>
    </div>
  </div>
</template>

<script setup>
import carousel1 from "../../assets/friendSites/1_1.jpg";
import carousel2 from "../../assets/friendSites/1_2.jpg";
import carousel3 from "../../assets/friendSites/1_3.jpg";
import carousel4 from "../../assets/friendSites/1_4.jpg";
import carousel5 from "../../assets/friendSites/1_5.jpg";
import carousel6 from "../../assets/friendSites/1_6.jpg";

import ListItem from "../../components/ListItem.vue";

</script>

<style lang="scss" scoped>
.text-shadow{
  text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.4);
}
</style>