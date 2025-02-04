  <script setup>
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";

  // Register GSAP plugins (client-side only)
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }

  </script>

  <template>
    <div>
      <!-- Google Tag Manager (noscript) -->
      <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-K4M2P8GX"
      height="0"
      width="0"
      style="display:none;visibility:hidden"
    ></iframe>
  </noscript>

      <!-- End Google Tag Manager (noscript) -->
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </template>
