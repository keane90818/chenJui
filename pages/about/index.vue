<template>
  <div class="tw-flex tw-flex-col tw-p-0">
    <div class="tw-flex max-lg:tw-px-12 lg:tw-px-96 tw-pt-20 max-md:tw-flex-col">
      <div class="lg:tw-w-1/2 lg:tw-pt-40 max-lg:tw-pt-10 max-lg:tw-pb-20 tw-pr-10">
        <p class="tw-text-[#A77B50] tw-font-serif tw-font-extrabold lg:tw-text-6xl max-lg:tw-text-4xl">CHEN JIU</p>
        <p class="tw-text-[#A77B50] tw-font-serif tw-font-extrabold lg:tw-text-6xl max-lg:tw-text-4xl">JIA-NIANG</p>
        <div class="tw-text-end">
          <p class="bg-team-introduction tw-text-white tw-font-bold tw-mt-4 tw-font-mono lg:tw-text-[18px] max-lg:tw-text-[14px]">TEAM INTRODUCTION</p>
        </div>
      </div>
      <img src="../../assets/about/1.jpg" alt="" class="md:tw-w-[500px] lg:tw-w-[500px]">
    </div>
    <div class="tw-flex max-lg:tw-px-12 lg:tw-px-96 tw-pb-6 lg:tw-ml-5 max-lg:tw-flex-col">
      <img src="../../assets/about/logo.jpg" alt="" class="lg:tw-h-[300px] lg:tw-w-[300px] max-lg:tw-order-2">
      <div class="lg:tw-w-full lg:tw-pl-20 lg:tw-pr-[3rem] max-lg:tw-py-10">
        <p class="tw-italic tw-text-[26px] tw-text-[#B65E14] tw-font-medium">陳酒家釀</p>
        <hr class="tw-w-full tw-border-black tw-mb-10 tw-mt-2">
        <p class="tw-text-[#511D18] tw-text-[18px] tw-font-medium tw-tracking-[0.25em] tw-leading-[1.5em]">
          陳酒，是指存放多年的酒，存放的時間越久酒香越濃。聞起來香味純厚綿長,令人心醉,非常柔和；嚐起來香甜純正,後勁綿長,不易上頭。作品名稱的發想源自於酒會越陳越香，呼應我們的主旨經過長時間淬煉而來的歷史系列，可以藉此表達這些人事物經過歲月的洗禮不但沒有消失，反而歷久彌新。另一方面「酒」雙關「久」，表示歷史的悠久且富有韌性，與陳酒的後勁滋味相互照應。家釀原為佳釀，將佳改成家的寓意為連結到家庭故事或傳承的意思。
        </p>
      </div>
    </div>
    <div class="tw-flex max-lg:tw-px-12 lg:tw-px-96 tw-py-20 tw-gap-20 max-lg:tw-flex-col">
      <div class="lg:tw-w-[32rem] lg:tw-mt-40">
        <p class="tw-text-[#C5B4A6] tw-text-[24px] tw-italic tw-font-bold">POUND 達</p>
        <hr class="tw-border-black tw-mt-2 tw-mb-16">
        <p class="tw-text-[#BF834E] tw-text-[20px]">
          團隊名稱為 Pound 達，命名理念為我們是兩人小組，剛好組員的膚色也是一黑一白，跟熊貓的配色一樣，取名胖達的想法因此萌生。
        </p>
        <p class="tw-text-[#BF834E] tw-text-[20px]">
          而 Pound 達的 Pound 則取自胖的音，跟熊貓圓圓的身材一樣，達就是達人的意思，代表我們將採訪各路匠人。
        </p>
      </div>
      <img src="../../assets/about/poundDa.jpg" alt="" class="lg:tw-w-[500px]">
    </div>
    <div class="tw-flex max-lg:tw-px-12 lg:tw-px-96 lg:tw-pb-40 tw-gap-20 max-lg:tw-pb-20 max-lg:tw-flex-col">
      <div>
        <img src="../../assets/about/Cai.jpg" alt="" class="lg:tw-w-[505px]">
        <div class="tw-text-end tw-mr-8 tw-mt-8">
          <p class="bg-member tw-text-white tw-font-mono tw-font-bold">MEMBER_1</p>
        </div>
      </div>
      <div>
        <img src="../../assets/about/Bai.jpg" alt="" class="lg:tw-w-[505px]">
        <div class="tw-text-end tw-mr-8 tw-mt-8">
          <p class="bg-member tw-text-white tw-font-mono tw-font-bold">MEMBER_2</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    

  }
};
</script>

<style lang="scss" scoped>
.bg-team-introduction {
  position: relative;
  display: inline-block;
}
.bg-team-introduction::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130%;
  height: 250%;
  // transform: skewY(-3deg);
  background-color: #A77B50;
  border-radius: 50%;
  z-index: -1;
}

.bg-team-introduction::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-5deg);
  width: 130%;
  height: 250%;
  // transform: rotate(45deg);
  border: 1px solid #A77B50;
  border-radius: 50%;
  z-index: -2;
}

.bg-member {
  position: relative;
  display: inline-block;
}
.bg-member::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200%;
  height: 230%;
  // transform: skewY(-3deg);
  background-color: #A77B50;
  border-radius: 50%;
  z-index: -1;
}

.bg-member::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-8deg);
  width: 200%;
  height: 230%;
  // transform: rotate(45deg);
  border: 1px solid #A77B50;
  border-radius: 50%;
  z-index: -2;
}
</style>