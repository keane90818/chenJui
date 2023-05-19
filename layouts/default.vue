<template>
  <div class="main-header">
    <div class="container">
      <img src="../assets/logo.png" alt="陳酒家釀" style="height: 70px" class="ml-10 mb-2" />
      <nav class="nav-content">
        <ul class="main-menu">
          <li><a href="#">首頁</a></li>
          <li class="dropdown">
            <a href="#">歷史建築</a>
            <ul class="dropdown-content">
              <li>
                <a href="#">南投戲院</a>
              </li>
              <li>
                <a href="#">登瀛書院</a>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#">傳統技藝</a>
            <ul class="dropdown-content">
              <li>
                <a href="#">來發鐵店</a>
              </li>
              <li>
                <a href="#">冠德竹木精品社</a>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#">美食老店</a>
            <ul class="dropdown-content">
              <li>
                <a href="#">黑狗兄傳統手工餅舖</a>
              </li>
              <li>
                <a href="#">源振發製麵廠</a>
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
</template>
<script setup lang="ts">
const drawer = ref(false);
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
    width: 1200px;
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
    min-width: 250px;
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

@media (max-width: 800px) {
  .nav-content {
    display: none;
  }
}
@media (min-width: 800px) {
  .nav-content {
    display: block;
  }
}
</style>
