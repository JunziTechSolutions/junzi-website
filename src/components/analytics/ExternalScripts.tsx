import Script from "next/script";

const ExternalScripts = () => (
  <>
    <Script
      id="google-tag-manager-script"
      dangerouslySetInnerHTML={{
        __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window, document, 'script', 'dataLayer', 'GTM-KFBJ5NPL');
          `,
      }}
    />
    <Script
      id="microsoft-clarity-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "oubwvkjx3k");
                `,
      }}
    />

    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-16752703241"
      // onLoad={() => {
      //   console.log("Google Скрипт gtag.js  loaded"); // Отладка
      // }}
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16752703241');

          console.log('Google Analytics initialized:', window.dataLayer);
        `}
    </Script>
  </>
);

export default ExternalScripts; 