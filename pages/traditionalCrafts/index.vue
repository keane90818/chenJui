<template>
  <main id="container" class="tw-flex tw-items-center tw-justify-center tw-flex-col tw-p-0">
    <div class="intro-container tw-flex tw-my-16 max-lg:tw-flex-col lg:tw-flex-row lg:tw-gap-20">
      <div class="left-container tw-pt-[20px] max-lg:tw-my-10 max-lg:tw-mx-2">
        <div class="tw-text-7xl tw-font-semibold md:tw-mr-5 tw-text-[#c47f42]">傳統技藝</div>
        <div class="tw-w-96 tw-text-[18px] tw-font-semibold tw-text-[#6b0020] lg:tw-ml-6 lg:tw-mt-24 max-lg:tw-mt-5 max-lg:tw-ml-2 tw-leading-[1.5em]">說到竹山第一個想到的肯定是竹子，那就不能不說到擁有百年歷史的來發鐵店，從製作傳統砍竹農具發跡到現在的客製化製刀，老師傅純手工鍛造所形成的迷人紋路，等著你來一探究竟。還有還有，不能不認識的竹山在地竹編大師劉興澤，絕妙的編織手法、富有故事性的作品以及時尚感滿滿的竹編包包，都值得讓你細心品味。</div>
      </div>
      <div class="right-container">
        <img src="../../assets/map/traditional-crafts-map.jpg" alt="traditional-crafts-map" height="436" width="624">
      </div>
    </div>
    <v-card class="detail-container tw-mb-10 max-lg:tw-flex-col lg:tw-flex-row">
      <div class="LaiFa-area tw-flex max-md:tw-flex-col md:tw-flex-row lg:tw-flex-row">
        <img src="../../assets/imgs/LaiFaImg.png" alt="LaiFa" height="320" width="220" class="traditional-crafts-img tw-mr-4">
        <div class="area-info-container tw-w-[220px] tw-px-9 tw-py-5">
          <div class="title tw-text-lg tw-font-semibold tw-text-[#000763]">來發鐵店</div>
          <div class="desc tw-h-[280px] tw-break-all tw-text-sm tw-my-6 tw-leading-loose tw-text-[#4F5168]">當地第一間從清朝末年開始發跡的百年鐵舖「來發鐵店」，至今仍不改迷人的打鐵風景，堅持手工打造的鑄鐵技術遠近馳名，在現代更顯得特殊而珍貴，也讓人喜愛上手工鐵具獨有的溫度。</div>
          <NuxtLink to="/traditionalCrafts/LaiFa" class="navigate tw-text-sm tw-font-semibold tw-text-[#FF6734]">Read More &rarr;</NuxtLink>
        </div>
      </div>
      <div class="GuanDe-area tw-flex max-md:tw-flex-col md:tw-flex-row lg:tw-flex-row">
        <img src="../../assets/imgs/GuanDeImg.png" alt="GuanDe" height="320" width="220" class="traditional-crafts-img tw-mr-4">
        <div class="area-info-container tw-w-[220px] tw-px-9 tw-py-5">
            <div class="title tw-text-lg tw-font-semibold tw-text-[#000763]">冠德竹木精品社</div>
            <div class="desc tw-h-[280px] tw-break-all tw-text-sm tw-my-6 tw-leading-loose tw-text-[#4F5168]">劉興澤自幼家境清寒，從國中畢業就因父親於竹木加工廠工作，開始接觸傳統竹工藝，在一次機緣下，開始跟著國寶級竹編大師黃塗山學習竹藝，成功成為黃塗山的嫡傳三大弟子之一，更獲得台灣工藝之家的評選認證。</div>
            <NuxtLink to="/traditionalCrafts/GuanDe" class="navigate tw-text-sm tw-font-semibold tw-text-[#FF6734]">Read More &rarr;</NuxtLink>
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