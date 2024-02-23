<template>
  <main id="container" class="tw-flex tw-items-center tw-justify-center tw-flex-col tw-p-0">
    <div class="intro-container tw-flex tw-my-16  md:tw-flex-col lg:tw-flex-row sm:tw-flex-col">
      <div class="left-container tw-pt-[20px] sm:tw-mb-6 md:tw-mb-6 lg:tw-mb-0">
        <div class="tw-text-7xl tw-font-semibold tw-mr-48 tw-text-[#c47f42]">美食老店</div>
        <div class="tw-w-96 tw-text-[18px] tw-font-semibold tw-text-[#6b0020] tw-ml-6 tw-mt-24 tw-leading-[1.5em]">
          來南投旅遊吃膩了一般早餐，一定不要錯過位在中興新村的黑狗兄 ! 獨特的眷村風味肯定能抓住你的味蕾。對了 ! 說到南投怎麼能不提到南投意麵 ? 源振發製麵廠為南投意麵創始店，不僅能在現場觀看意麵的製作過程，還能當伴手禮帶回家，後方也有源振發現煮麵攤能直接品嚐，一條龍的體驗怎麼能不來試試 ?
        </div>
      </div>
      <div class="right-container">
        <img src="../../assets/map/gourmet-food-map.jpg" alt="traditional-crafts-map" height="436" width="624">
      </div>
    </div>
    <v-card class="detail-container tw-mb-10 sm:tw-flex-col md:tw-flex-col lg:tw-flex-row">
      <div class="LaiFa-area tw-flex sm:tw-flex-col md:tw-flex-row">
        <img src="../../assets/imgs/shaobing.jpg" alt="HeiGou" class="traditional-crafts-img tw-mr-4 tw-h-[320px] tw-w-[240px]">
        <div class="area-info-container tw-w-[320px] tw-h-[320px] tw-px-9 tw-py-5">
          <div class="title tw-text-lg tw-font-semibold tw-text-[#535963]">黑狗兄傳統手工餅舖</div>
          <div class="desc tw-h-[160px] tw-break-all tw-text-sm tw-my-6 tw-leading-loose tw-text-[#4F5168]">
            黑狗兄文華早餐店，是一間位於南投中興新村的傳統餅舖，目前已傳承到第四代張竣凱及張珮慈手上，好滋味已留存超過五十年，也成為在地饕客必訪的眷村美食。
          </div>
          <NuxtLink to="/gourmetFood/HeiGou" class="navigate tw-text-sm tw-font-semibold tw-text-[#FF6734]">Read More &rarr;</NuxtLink>
        </div>
      </div>
      <div class="GuanDe-area tw-flex sm:tw-flex-col md:tw-flex-row">
        <img src="../../assets/imgs/noodle.png" alt="YuanZhenFa" class="traditional-crafts-img tw-mr-4 tw-h-[320px] tw-w-[240px]">
        <div class="area-info-container tw-w-[320px] tw-h-[320px] tw-px-9 tw-py-5">
            <div class="title tw-text-lg tw-font-semibold tw-text-[#535963]">源振發製麵廠</div>
            <div class="desc tw-h-[160px] tw-break-all tw-text-sm tw-my-6 tw-leading-loose tw-text-[#4F5168]">
              南投意麵雖說是由源振發發明，卻因地區性的主食不能申請專利，所以市場上各家的製麵廠還是可以打著各種南投意麵的頭銜，但源振發始終相信遵循古法保留下來的傳統好味道。
            </div>
            <NuxtLink to="/gourmetFood/YuanZhenFa" class="navigate tw-text-sm tw-font-semibold tw-text-[#FF6734]">Read More &rarr;</NuxtLink>
          </div>
      </div>
    </v-card>
  </main>
</template>

<script>
  export default {
    setup() {

    }
  };
</script>

<style lang="scss" scoped>
#container {
  background: url("../../assets/background/classificationBgImg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 100%;
}

.detail-container {
  display: flex;
  padding: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

.traditional-crafts-img,
.area-info-container {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}
</style>