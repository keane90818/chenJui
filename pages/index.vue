<template>
  <div class="body">
    <div id="banner">
      <div class="topic">
        <h1>CHEN JIA</h1>
        <h1>JIU-NIANG</h1>
      </div>
      <div class="subtitle">
        <h1>陳酒家釀</h1>
        <img id="wineCabinet" src="../assets/wineCabinet.png" alt="陳酒家釀" />
      </div>
    </div>
    <div id="classification">
      <div class="flex justify-center">
        <!-- <h1 class="text-7xl py-12">主題介紹</h1> -->
      </div>
      <div class="flex justify-around">
        <div class="beerDiv max-h-72">
          <img
            id="historyBeer"
            class="relative right-1 max-w-xs max-h-80"
            src="../assets/historyBeer.png"
            alt=""
          />
        </div>
        <div class="beerDiv max-h-72">
          <img
            id="skillBeer"
            class="relative right-1 max-w-xs max-h-80"
            src="../assets/skillBeer.png"
            alt=""
          />
        </div>
        <div class="beerDiv max-h-72">
          <img
            id="foodBeer"
            class="relative right-1 max-w-xs max-h-80"
            src="../assets/foodBeer.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div>123</div>
</template>

<script setup></script>

<style lang="scss">
.body {
  margin-top: 0rem;
  background-color: rgba(196, 187, 184, 0.45);
}
//banner-part-start
#banner {
  background: url("../assets/bannerImg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
}
@media (max-width: 480px) {
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
@media (max-width: 800px) and (min-width: 480px) {
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
      margin-top: 2rem;
      font-weight: 800;
      font-size: 30px;
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
@media (min-width: 800px) {
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
  background-repeat: no-repeat;
  background-position: center center;
  height: 50vh;
  .beerDiv {
    // background: orange;
    border-radius: 300px 300px 200px 200px;
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
