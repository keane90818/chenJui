<template>
  <div id="banner-part">
    <div class="container tw-flex tw-justify-center tw-flex-wrap tw-pt-16">
      <div class="tw-flex tw-flex-col tw-flex-none tw-max-w-xl tw-justify-center tw-pr-16">
        <span class="tw-mb-16 tw-text-6xl tw-flex tw-justify-left">歷史建築</span>
        <div class="desciption-part tw-p-5">
          來南投旅遊吃膩了一般早餐，一定不要錯過位在中興新村的黑狗兄 !
          獨特的眷村風味肯定能抓住你的味蕾。對了 ! 說到南投怎麼能不提到南投意麵 ?
          源振發製麵廠為南投意麵創始店，不僅能在現場觀看意麵的製作過程，還能當伴手禮帶回家，後方也有源振發現煮麵攤能直接品嚐，一條龍的體驗怎麼能不來試試
          ?
        </div>
      </div>
      <div class="tw-max-w-xl tw-mt-6">
        <img src="../../assets/maps/historyBuilding-map.jpg" alt="南投歷史建築" />
      </div>
    </div>
    <div class="container tw-flex tw-justify-center">
      <div class="m-card tw-flex tw-justify-center">
        <div class="photo">
          <img
            src="https://www.chenjiou.com/wp-content/uploads/2023/03/5D623C79-6F9D-48F4-9264-4F7A2E53F08A.png"
          />
        </div>
        <h1 class="m-card-title">登瀛書院</h1>
        <!-- <h2 class="m-card-secTitle">拜拜好所在</h2>
        <span class="m-card-text"> <span>考試前才會去的地方</span> </span>
        <a class="m-card-a" href="dengying_academy1.html">了解更多</a> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#banner-part {
  background: url("../../assets/background/secondFloor-part.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
}
.desciption-part {
  background-color: bisque;
  border-radius: 0px 260px 260px 0px;
}

.m-card {
  position: relative;
  width: 300px;
  height: 450px;
  margin: 20px;
  background-color: #7591ad;
  border-radius: 20px;
  box-shadow: 0 0 30px #2c2c2c;
  color: #e8f6fd;
}

.photo {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  border-radius: 0%;
  overflow: hidden;
  transition: 0.5s;
}

.photo::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
}

.m-card:hover .photo::before {
  display: none;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.m-card:hover .photo {
  width: 120px;
  height: 120px;
  top: 30px;
  border-radius: 50%;
  box-shadow: 0 0 20px #111;
}
</style>
