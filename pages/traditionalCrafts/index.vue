<template>
  <div>
    <div id="container" class="tw-w-full tw-flex-col tw-flex tw-items-center">
      <div class="info-container tw-flex tw-flex-row tw-my-16">
        <div class="text-container tw-pt-[20px]">
          <div class="title tw-text-7xl tw-font-semibold tw-mr-48 tw-text-[#c47f42]">傳統技藝</div>
          <div id="traditional-crafts-desc" class="desc tw-w-96 tw-text-[18px] tw-font-semibold tw-text-[#6b0020] tw-mt-24 tw-ml-6 tw-leading-[1.5em]">
            說到竹山第一個想到的肯定是竹子，那就不能不說到擁有百年歷史的來發鐵店，
            從製作傳統砍竹農具發跡到現在的客製化製刀，老師傅純手工鍛造所形成的迷人紋路，等著你來一探究竟。還有還有，不能不認識的竹山在地竹編大師劉興澤，絕妙的編織手法、富有故事性的作品以及時尚感滿滿的竹編包包，都值得讓你細心品味。
          </div>
        </div>
        <div class="img-container">
          <img src="../../assets/map/traditional-crafts-map.jpg" alt="traditional-crafts-map" height="436" width="624">
        </div>
      </div>
      <div class="detail-container tw-flex tw-flex-row">
        <div class="LaiFa-area tw-flex tw-flex-row">
          <div class="img-container">來發img</div>
          <div class="info-container">
            <div class="title">來發鐵店</div>
            <div class="desc">來發desc</div>
            <div class="navigate">Read More</div>
          </div>
        </div>
        <div class="GuanDe-area tw-flex tw-flex-row">
          <div class="img-container">冠德img</div>
          <div class="info-container">
            <div class="title">冠德竹木精品社</div>
            <div class="desc">冠德desc</div>
            <div class="navigate">Read More</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">&copy; Copyright 2022 POUND達. All Rights Reserved.</div>
  </div>
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
  height: 100vh;
}

#container {
  height: 1024px;
  width: 1905px;
}

</style>