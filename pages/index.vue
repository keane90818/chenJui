<template>
  <div class="body">
    <div id="banner">
      <div class="topic">
        <h1>CHEN JIA</h1>
        <h1>JIU-NIANG</h1>
      </div>
      <div class="subtitle">
        <h1>陳酒家釀</h1>
        <img
          id="wineCabinet"
          class="animate__animated animate__fadeInUp"
          src="../assets/wineCabinet.png"
          alt="陳酒家釀"
        />
      </div>
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
            class="relative right-1 max-w-xs max-h-80 beer"
            src="../assets/historyBeer.png"
            alt=""
          />
        </div>
        <div class="beerDiv max-h-72">
          <img
            id="skillBeer"
            ref="skillBeerRef"
            class="relative right-1 max-w-xs max-h-80 beer"
            src="../assets/skillBeer.png"
            alt=""
          />
        </div>
        <div class="beerDiv max-h-72">
          <img
            id="foodBeer"
            ref="foodBeerRef"
            class="relative right-1 max-w-xs max-h-80 beer"
            src="../assets/foodBeer.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div :style="{ backgroundColor: state.elementColor }">
    <!-- 其他组件内容 -->
    {{ state.elementColor }}
  </div>
</template>

<script>
import { reactive, onMounted, onBeforeUnmount, watch } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  setup() {
    const state = reactive({
      elementColor: "" // 初始化元素颜色
    });
    const handleWindowResize = () => {
      const windowWidth = window.innerWidth;
      console.log("windowWidth=" + windowWidth);
      if (windowWidth >= 1200) {
        state.elementColor = "red";
      } else if (windowWidth >= 768) {
        state.elementColor = "green";
      } else {
        state.elementColor = "blue";
      }
    };
    // 以上為抓取螢幕寬度
    const triggers = ScrollTrigger.getAll();
    // 以上為抓取scroll
    onMounted(() => {
      handleWindowResize(); // 初始化处理
      // 监听窗口大小变化
      window.addEventListener("resize", handleWindowResize);

      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".beer").forEach((label) => {
        gsap.fromTo(
          label,
          {
            x: "-150%" // 设置元素的初始位置在右侧
          },
          {
            x: "0%", // 设置元素的最终位置在原始位置
            duration: 1, // 动画持续时间
            scrollTrigger: {
              trigger: label,
              start: "center bottom", // 设置触发动画的位置
              toggleActions: "play none none none",
              markers: false // 调试标记，可选
            }
          }
        );
      });
    });
    onBeforeUnmount(() => {
      // 在组件销毁前移除事件监听
      window.removeEventListener("resize", handleWindowResize);
    });

    // 监听state.elementColor变化
    watch(
      () => state.elementColor,
      (newValue, oldValue) => {
        // 处理state.elementColor的变化
      }
    );

    return {
      state
    };
  }
};
</script>

<style lang="scss">
.body {
  margin-top: 0rem;
  background-color: rgba(196, 187, 184, 0.45);
}
//banner-part-start

@media (max-width: 768px) {
  #banner {
    background: url("../assets/bannerImg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    // height: 100vh;
  }
  .topic {
    height: 5rem;
    padding-top: 5rem;
    padding-left: 2rem;
    h1 {
      font-size: 40px;
      height: auto;
      line-height: normal;
      color: #c4b4a5;
      font-weight: 700;
      font-family: "Cormorant Infant", Georgia, "Times New Roman", serif;
    }
  }
  .subtitle {
    padding-top: 15rem;
    overflow: hidden;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    h1 {
      margin-left: 6rem;
      font-weight: 800;
      font-size: 50px;
      color: #c4b4a5;
    }
    #wineCabinet {
      margin-top: 5rem;

      width: 400px;
      overflow: hidden;
    }
  }
}
@media (max-width: 1200px) and (min-width: 768px) {
  #banner {
    background: url("../assets/bannerImg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    //height: 80vh;
  }
  .topic {
    height: 5rem;
    padding-top: 5rem;
    padding-left: 5rem;
    h1 {
      font-size: 60px;
      height: auto;
      line-height: normal;
      color: #c4b4a5;
      font-weight: 700;
      font-family: "Cormorant Infant", Georgia, "Times New Roman", serif;
    }
  }
  .subtitle {
    padding-top: 10rem;
    overflow: hidden;
    display: flex;
    justify-content: start;
    margin-left: 5rem;
    flex-wrap: nowrap;

    h1 {
      width: 15rem;
      margin-top: 2rem;
      font-weight: 800;
      font-size: 40px;
      color: #c4b4a5;
    }
    #wineCabinet {
      // position: absolute;
      // right: 0%;
      // top: 50%;
      width: 500px;
    }
  }
}
@media (min-width: 1200px) {
  #banner {
    background: url("../assets/bannerImg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    // height: 100vh;
  }
  .topic {
    height: 5rem;
    padding-top: 3rem;
    padding-left: 12rem;
    h1 {
      height: auto;
      line-height: normal;
      color: #c4b4a5;
      font-weight: 700;
      font-family: "Cormorant Infant", Georgia, "Times New Roman", serif;
      font-size: 80px;
    }
  }
  .subtitle {
    padding-top: 10rem;
    overflow: hidden;
    display: flex;
    justify-content: start;
    flex-wrap: nowrap;

    h1 {
      margin-top: 5rem;
      margin-left: 10rem;
      font-weight: 800;
      font-size: 50px;
      color: #c4b4a5;
    }
    #wineCabinet {
      // position: absolute;
      // right: 10%;
      // top: 40%;
      max-width: 600px;
    }
  }
}
//banner-part-end
//classification-part-start
#classification {
  position: relative;
  background: url("../assets/classification-part.png");
  background-size: cover;
  background-repeat: repeat;
  background-position: center center;
  .beerDiv {
    // background: orange;
    // border-radius: 300px 300px 200px 200px;
    #historyBeer {
      &:hover {
        content: url("../assets/historyBeer-open.png");
      }
    }
    #skillBeer {
      &:hover {
        content: url("../assets/skillBeer-open.png");
      }
    }
    #foodBeer {
      &:hover {
        content: url("../assets/foodBeer-open.png");
      }
    }
  }
}
//classification-part-end
</style>
