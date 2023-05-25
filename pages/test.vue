<template>
  <div class="tals">
    <div class="tal" data-end="10">0</div>
    <div class="tal" data-end="20">0</div>
    <div class="tal" data-end="30">0</div>
  </div>
  <div id="classification">
    <div class="flex justify-center">
      <!-- <h1 class="text-7xl py-12">主題介紹</h1> -->
    </div>
    <div class="flex flex-wrap justify-around">
      <div class="beerDiv max-h-72">
        <img
          id="historyBeer"
          ref="historyBeerRef"
          class="relative right-1 max-w-xs max-h-80 beer animate__animated"
          src="../assets/historyBeer.png"
          alt=""
        />
      </div>
      <div class="beerDiv max-h-72">
        <img
          id="skillBeer"
          ref="skillBeerRef"
          class="relative right-1 max-w-xs max-h-80 beer animate__animated"
          src="../assets/skillBeer.png"
          alt=""
        />
      </div>
      <div class="beerDiv max-h-72">
        <img
          id="foodBeer"
          ref="foodBeerRef"
          class="relative right-1 max-w-xs max-h-80 beer animate__animated"
          src="../assets/foodBeer.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// https://icones.js.org/ Icon來這邊找

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  let start = { val: 0 };
  gsap.utils.toArray(".tal").forEach((label) => {
    start.val = 0;
    gsap.to(start, {
      duration: 1,
      scrollTrigger: {
        trigger: label,
        // 在這個情境 trigger 要是物件，不是選擇器
        toggleActions: "play none none none",
        start: "top center",
        markers: true
      },
      val: label.dataset.end,
      onUpdate: () => {
        label.innerHTML = Math.floor(Number(start.val));
      }
    });
  });
  gsap.utils.toArray(".beer").forEach((label) => {
    gsap.from(label, {
      x: "-100%", // 设置元素的初始位置在右侧
      duration: 1, // 动画持续时间
      scrollTrigger: {
        trigger: label,
        start: "top center", // 设置触发动画的位置
        toggleActions: "play none none none",
        markers: true // 调试标记，可选
      }
    });
  });
});
</script>
<style lang="scss" scoped>
body {
  background: #112222;
  color: #fff;
}
.tals {
  display: flex;
  flex-wrap: wrap;
}
.tal {
  height: 300px;
  width: 50%;
  font-size: 72px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .tal {
    width: 100%;
  }
}
</style>
