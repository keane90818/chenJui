<template>
  <main id="container" class="tw-flex tw-items-center tw-justify-center tw-flex-col tw-p-0">
    <div class="intro-container tw-flex tw-my-16 max-lg:tw-flex-col lg:tw-flex-row lg:tw-gap-20">
      <div class="left-container tw-pt-[20px] max-lg:tw-my-10 max-lg:tw-mx-2">
        <div class="tw-text-7xl tw-font-semibold md:tw-mr-5 tw-text-[#c47f42]">歷史建築</div>
        <div class="tw-w-96 tw-text-[18px] tw-font-semibold tw-text-[#6b0020] lg:tw-ml-6 lg:tw-mt-24 max-lg:tw-mt-5 tw-leading-[1.5em]">
          民間習俗大考前都會拜拜祈求考試順利，香火鼎盛的登瀛書院不只是開啟智慧的拜拜好所在，更是擁有百年歷史的縣定古蹟。結束惱人的考試後，好不容易有時間想要好好看場電影，卻又不想花大錢大老遠跑去台中，帶有在地溫暖人情的文創老建築南投戲院是你的最佳選擇 !
        </div>
      </div>
      <div class="right-container">
        <img src="../../assets/map/historic-buildings-map.jpg" alt="traditional-crafts-map" height="436" width="624">
      </div>
    </div>
    <v-card class="detail-container tw-mb-10 max-lg:tw-flex-col lg:tw-flex-row">
      <div class="DengYing-area tw-flex max-md:tw-flex-col md:tw-flex-row lg:tw-flex-row">
        <img src="../../assets/imgs/DengYing.png" alt="DengYing" class="traditional-crafts-img tw-mr-4 tw-h-[320px] tw-w-[240px] max-md:tw-w-full max-md:tw-h-[400px]">
        <div class="area-info-container tw-w-[320px] tw-h-[320px] tw-px-9 tw-py-5">
          <div class="title tw-text-lg tw-font-semibold tw-text-[#535963]">登瀛書院</div>
          <div class="desc tw-h-[180px] tw-break-all tw-text-sm tw-my-6 tw-leading-loose tw-text-[#4F5168]">
            登瀛書院為草屯首學，至今已有175年的歷史，在清朝時期道光27年，當時因爲教育不普及，民間社會崇尚透過讀書增識益智，因此地方仕紳為了讓大家有一個能夠學習的機會，並發起民間書社來倡議募資設立學堂，登瀛書院就此成立。
          </div>
          <NuxtLink to="/historicBuildings/DengYing" class="navigate tw-text-sm tw-font-semibold tw-text-[#FF6734]">Read More &rarr;</NuxtLink>
        </div>
      </div>
      <div class="NanTouTheater-area tw-flex max-md:tw-flex-col md:tw-flex-row lg:tw-flex-lg">
        <img src="../../assets/imgs/NanTou.png" alt="NanTouTheater" class="traditional-crafts-img tw-mr-4 tw-h-[320px] tw-w-[240px] max-md:tw-w-full max-md:tw-h-[400px]">
        <div class="area-info-container tw-w-[320px] tw-h-[320px] tw-px-9 tw-py-5">
            <div class="title tw-text-lg tw-font-semibold tw-text-[#535963]">南投戲院</div>
            <div class="desc tw-h-[180px] tw-break-all tw-text-sm tw-my-6 tw-leading-loose tw-text-[#4F5168]">
              「南投戲院」為南投市僅存的唯一戲院，也是目前全台灣首輪電影院中歷史最悠久的一家老戲院。
            </div>
            <NuxtLink to="/historicBuildings/NanTouTheater" class="navigate tw-text-sm tw-font-semibold tw-text-[#FF6734]">Read More &rarr;</NuxtLink>
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