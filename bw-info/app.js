 var browserid;
      var browser = document.querySelector(".browser");
      var os = document.querySelector(".os");
      if (
        (navigator.userAgent.indexOf("Opera") ||
          navigator.userAgent.indexOf("OPR")) != -1
      ) {
        browserid = "Opera";
      } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        browserid = "Chrome";
      } else if (navigator.userAgent.indexOf("Safari") != -1) {
        browserid = "Safari";
      } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        browserid = "Firefox";
      } else if (
        navigator.userAgent.indexOf("MSIE") != -1 ||
        !!document.documentMode == true
      ) {
        //IF IE > 10
        browserid = "IE";
      } else {
        browserid = "Unknown";
      }
      //os
      const getUA = () => {
        let device = "Unknown";
        const ua = {
          "Generic Linux": /Linux/i,
          Android: /Android/i,
          BlackBerry: /BlackBerry/i,
          Bluebird: /EF500/i,
          "Chrome OS": /CrOS/i,
          Datalogic: /DL-AXIS/i,
          Honeywell: /CT50/i,
          iPad: /iPad/i,
          iPhone: /iPhone/i,
          iPod: /iPod/i,
          macOS: /Macintosh/i,
          Windows: /IEMobile|Windows/i,
          Zebra: /TC70|TC55/i,
        };
        Object.keys(ua).map(
          (v) => navigator.userAgent.match(ua[v]) && (device = v)
        );
        return device;
      };

      os.textContent = getUA();
      browser.textContent = browserid;
