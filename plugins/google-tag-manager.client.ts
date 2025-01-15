export default defineNuxtPlugin(() => {
    if (process.client) {
      const gtmScript = document.createElement('script');
      gtmScript.async = true;
      gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-K4M2P8GX';
      document.head.appendChild(gtmScript);
  
      const gtmNoScript = document.createElement('noscript');
      gtmNoScript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K4M2P8GX"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `;
      document.body.appendChild(gtmNoScript);
    }
  });
  