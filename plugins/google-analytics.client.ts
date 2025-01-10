export default defineNuxtPlugin(() => {
    if (process.client) {
      // 插入 Google Analytics 主腳本
      const scriptTag = document.createElement('script');
      scriptTag.async = true;
      scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-V3VTFF8PLS';
      document.head.appendChild(scriptTag);
  
      // 插入初始化腳本
      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-V3VTFF8PLS');
      `;
      document.head.appendChild(inlineScript);
    }
  });
  