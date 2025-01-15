<template>
  <main class="tw-flex tw-items-center tw-justify-center tw-flex-col tw-p-0">
    <div class="tw-w-full max-lg:tw-px-12 lg:tw-px-96 tw-pt-10">
      <div class="tw-flex tw-flex-row">
        <h1 class="tw-text-[#003C45] tw-text-7xl tw-font-extrabold tw-mb-8">源振發製麵廠</h1>
      </div>
      <div class="tw-flex tw-gap-20 tw-pb-10 max-lg:tw-flex-col">
        <div class="lg:tw-w-[19rem]">
          <h4 class="tw-font-bold tw-text-[#333333]">南投意麵創始店</h4>
          <h4 class="tw-font-bold tw-text-[#333333]">堅持古法走過百年</h4>
          <hr class="tw-border-gray-500 tw-my-1" />
          <p class="tw-text-end tw-mb-3 tw-text-gray-500 tw-pt-3">文/白欣卉</p>
          <p class="tw-text-[18px] tw-font-medium tw-tracking-wide tw-text-gray-500 tw-leading-[1.5em]">
            位於南投民族路上有一間傳承五代的製麵老店，從日治時期就以製麵為業的許家，一百三十多年都未曾搬離此地，目前老店已傳到第五代許嘉麟，他爺爺許星雲想要發展出有別於當時福州麵攤的福州細麵，且希望能夠結合在地特色，許星雲開始和客人一起嘗試研發後發展出了現在南投意麵的雛形。也因為意麵發音像是幼麵，總是容易與一些麵線或是小條的麵搞混，許星雲便正式把其麵更名為南投意麵，南投意麵由此誕生，源振發也接著成立。 
          </p>
          <p class="tw-text-[18px] tw-font-medium tw-tracking-wide tw-text-gray-500 tw-leading-[1.5em] tw-pt-5">
            南投意麵雖說是由源振發發明，卻因地區性的主食不能申請專利，所以市場上各家的製麵廠還是可以打著各種南投意麵的頭銜，但源振發始終相信遵循古法保留下來的傳統好味道。
          </p>
        </div>
        <div class="lg:tw-h-full lg:tw-w-[750px]">
          <img 
            src="../../../assets/gourmetFood/YuanJhenFa/yuan-jhen-fa-traditional-noodles.jpg" 
            alt="南投源振發展示傳統麵條製作，古早砝碼秤見證百年傳承" 
          />
          <p class="tw-text-start tw-text-gray-500 tw-pt-2">
            古早砝碼秤陪伴許家走過百年歲月。攝/蔡沛凌
          </p>
        </div>

      </div>
    </div>
    <div class="tw-w-full max-lg:tw-px-12 lg:tw-px-96 tw-bg-[#487178] tw-text-white tw-py-20">
      <div class="tw-flex tw-gap-20 max-lg:tw-flex-col">
        <div class="lg:tw-w-[33rem]">
          <h1 class="tw-font-bold tw-text-4xl ">獨創麵食輕薄軟Q</h1>
          <h1 class="tw-font-bold tw-text-4xl ">經驗拿捏百年精隨</h1>
          <p class="tw-text-[18px] tw-font-medium tw-tracking-wide tw-leading-[1.5em] tw-pt-10">
            源振發最大宗的產品就是南投意麵，而一般通俗的黃麵、白麵、陽春麵、烏龍麵、水餃皮、餛飩皮也通通都有，許嘉麟表示，自家麵條最大的特色就是不會死硬，可以軟中帶Q，能保有此美味的關鍵是因為其製作的材料都是精心挑選，原料使用上等的粉心粉，就連水也是經過逆滲透過濾而來。 
          </p>
          <p class="tw-text-[18px] tw-font-medium tw-tracking-wide tw-leading-[1.5em] tw-pt-5">
            在製程上，源振發從爺爺許星雲開始就以機器製作為主，許嘉麟則說製麵最困難的部分不是人為而是自然現象，屬於天氣與溫濕度的變化，像是遇到寒流平地溫度接近零度的時後，製麵就會非常不好操作，因為不管是麵粉的吸水性還是麵粉攪拌發酵的程度都會完全不一樣，溫度太低會導致麵糰攪拌不會發酵，這就必須由手工與人工的經驗來去預估筋性的變化，並判斷天氣進而調整麵團的溫濕度。製麵過程的判斷主要靠經驗，使用機器代替勞力製作，這其中技術的拿捏，就是百年來的精髓。
          </p>
        </div>
        <div class="lg:tw-h-[400px] lg:tw-w-[500px] lg:tw-pt-20">
          <v-carousel hide-delimiters height="400">
            <v-carousel-item :src="carousel1" cover width="100%"></v-carousel-item>
            <v-carousel-item :src="carousel2" cover width="100%"></v-carousel-item>
            <v-carousel-item :src="carousel3" cover width="100%"></v-carousel-item>
          </v-carousel>
        </div>
      </div>
    </div>
    <div class="tw-w-full max-lg:tw-px-12 lg:tw-pl-96 tw-pr-72 tw-bg-[#394A52] tw-text-white tw-py-20">
      <div class="tw-flex tw-gap-10 tw-h-full max-lg:tw-flex-col">
        <div class="lg:tw-w-[40rem]">
          <h1 class="tw-font-bold tw-text-3xl ">接下製麵傳承重擔</h1>
          <h1 class="tw-font-bold tw-text-3xl ">只為保留最初的傳統滋味</h1>
          <hr class="tw-my-4 tw-border-[#868176]" />
          <p class="tw-text-[18px] tw-font-medium tw-tracking-wide tw-leading-[1.5em]">
            在許嘉麟心中傳承家中的歷史並延續下來是一種社會責任，許嘉麟說道：「在青少年時當然會有想要出去外面發展的念頭，但回到家後總是看到爸爸很辛苦地工作，有一天心裡就萌生使命感，覺得需要把家中事業傳承接棒下來 。」但許嘉麟卻對未來的傳承不感到擔憂，許嘉麟認為這種問題應該平常心對待，如果以後自己的下一代有興趣想接手當然沒問題，就算沒有也可以另尋其他方法，許嘉麟認為好味道能夠流傳才是重點，接手的人不一定要是子孫。
          </p>
          <p class="tw-text-[18px] tw-font-medium tw-tracking-wide tw-leading-[1.5em] tw-pt-5">
            在未來的發展上，許嘉麟也不把話說死，雖然依然會想用傳統的方式去製作，但希望在不影響味道的狀況下，能夠以傳承傳統為前提下去開發，讓從農業時代一直到現在科技文化下的南投意麵也能既傳統又迎合時代。
          </p>
        </div>
        <div class="lg:tw-h-full lg:tw-w-[800px]">
          <img 
            src="../../../assets/gourmetFood/YuanJhenFa/yuan-jhen-fa-traditional-food-preparation.jpg" 
            class="" 
            alt="南投源振發秤量每份重量，傳承百年傳統製作技藝" 
          />
          <p class="tw-text-[14px] tw-font-medium tw-tracking-wide tw-leading-[1.5em] tw-pt-3">
            堅持傳統製作，只為保留百年好味道。攝/蔡沛凌
          </p>
        </div>
      </div>
    </div>
    <div class="tw-w-full max-lg:tw-px-12 lg:tw-px-96 tw-bg-[#E5E5E5] tw-text-[#535963] tw-py-20">
      <div class="tw-flex tw-gap-20">
        <iframe width="1259" height="708" src="https://www.youtube.com/embed/qBbR-DqwFcY" title="陳酒家釀-源振發製麵廠" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </main>
</template>
<script setup>
import carousel1 from "../../../assets/gourmetFood/YuanJhenFa/2_1.jpg";
import carousel2 from "../../../assets/gourmetFood/YuanJhenFa/2_2.jpg";
import carousel3 from "../../../assets/gourmetFood/YuanJhenFa/2_3.jpg";
</script>
<style scoped></style>