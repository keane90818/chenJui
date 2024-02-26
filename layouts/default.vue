<template>
  <div class="main-header">
    <div class="container">
      <img src="../assets/logo.png" alt="陳酒家釀" style="height: 70px" class="ml-10 mb-2" />

      <button class="hamburger mt-5 mr-5">
        <v-icon size="30" icon="mdi mdi-menu" @click.stop="drawer = !drawer"></v-icon>
        <v-layout class="mt-5">
          <v-navigation-drawer v-model="drawer" location="right" temporary>
            <v-list v-model:opened="open">
              <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

              <v-list-group value="historyBuild">
                <template v-slot:activator="{ props }">
                  <v-list-item
                    v-bind="props"
                    prepend-icon="mdi mdi-home-group-plus"
                    title="歷史建築"
                  ></v-list-item>
                </template>
                <v-list-item
                  v-for="([title, icon], i) in historyBuild"
                  :key="i"
                  :value="title"
                  :title="title"
                  :prepend-icon="icon"
                ></v-list-item>
              </v-list-group>
              <v-list-group value="skills">
                <template v-slot:activator="{ props }">
                  <v-list-item
                    v-bind="props"
                    prepend-icon="mdi mdi-arm-flex-outline"
                    title="傳統技藝"
                  ></v-list-item>
                </template>
                <v-list-item
                  v-for="([title, icon], i) in skills"
                  :key="i"
                  :value="title"
                  :title="title"
                  :prepend-icon="icon"
                ></v-list-item>
              </v-list-group>
              <v-list-group value="foodStore">
                <template v-slot:activator="{ props }">
                  <v-list-item
                    v-bind="props"
                    prepend-icon="mdi mdi-food"
                    title="美食老店"
                  ></v-list-item>
                </template>
                <v-list-item
                  v-for="([title, icon], i) in foodStore"
                  :key="i"
                  :value="title"
                  :title="title"
                  :prepend-icon="icon"
                ></v-list-item>
              </v-list-group>
            </v-list>
          </v-navigation-drawer>
        </v-layout>
      </button>

      <nav class="nav-content">
        <ul class="main-menu">
          <li><a href="/">首頁</a></li>
          <li class="dropdown">
            <a href="/historicBuildings">歷史建築</a>
            <ul class="dropdown-content">
              <li>
                <a href="/historicBuildings/NanTouTheater">南投戲院</a>
              </li>
              <li>
                <a href="/historicBuildings/DengYing">登瀛書院</a>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="/traditionalCrafts">傳統技藝</a>
            <ul class="dropdown-content">
              <li>
                <a href="/traditionalCrafts/LaiFa">來發鐵店</a>
              </li>
              <li>
                <a href="/traditionalCrafts/GuanDe">冠德竹木精品社</a>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="/gourmetFood">美食老店</a>
            <ul class="dropdown-content">
              <li>
                <a href="/gourmetFood/HeiGou">黑狗兄傳統手工餅舖</a>
              </li>
              <li>
                <a href="/gourmetFood/YuanZhenFa">源振發製麵廠</a>
              </li>
            </ul>
          </li>
          <li><a href="#">團隊介紹</a></li>
          <li><a href="#">友站連結</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <slot />
  <footer class="tw-bg-myColor tw-px-10 tw-py-6 tw-text-white">
    &copy; Copyright 2022 POUND達. All Rights Reserved.
  </footer>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      open: ["Users"],
      historyBuild: [
        ["南投戲院", "mdi mdi-theater"],
        ["登瀛書院", "mdi mdi-bookshelf"]
      ],
      skills: [
        ["來發鐵店", "mdi mdi-iron-board"],
        ["冠德竹木精品社", "mdi mdi-pine-tree-variant-outline"]
      ],
      foodStore: [
        ["源振發製麵廠", "mdi mdi-noodles"],
        ["黑狗兄傳統手工餅舖", "mdi mdi-food-hot-dog"]
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap");

a {
  display: block;
  text-decoration: none;
  color: black;
}

.main-header {
  width: 100%;
  background-color: white;
  .container {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .main-menu {
    display: flex;
    li {
      position: relative;
      transition: 0.5s;
      a {
        padding: 10px 30px;
        font-size: 15px;
        font-weight: 700;
        line-height: 60px;
      }
    }
    li::after {
      content: "";
      position: absolute;
      height: 4px;
      left: 50%;
      right: 50%;
      bottom: 0;
      background-color: #fff;
      transition: 0.5s;
    }
    li:hover {
      background-color: lightblue;
    }
    li:hover::after {
      left: 0;
      right: 0;
    }
  }
}

.dropdown {
  position: relative;
  display: inline-block;
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 300px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    border-radius: 10px;
    z-index: 1;
    li {
      a {
        padding: 0px 30px;
      }
    }
  }
  &:hover {
    .dropdown-content {
      display: block;
    }
  }
}

@media (max-width: 1000px) {
  .nav-content {
    display: none;
  }
  .hamburger {
    display: block;
  }
}
@media (min-width: 1000px) {
  .nav-content {
    display: block;
  }
  .hamburger {
    display: block;
  }
}
</style>
