(function () {
  "use strict";
  {
    class e extends Error {
      constructor(t, o) {
        super(), (this.code = t), (this.message = o);
      }
    }
    (e.PERMISSION_DENIED = 1), (e.POSITION_UNAVAILABLE = 2), (e.TIMEOUT = 3);
    let a = 0;
    const i = { geos: [] },
      r = document.documentElement;
    r.addEventListener("responseLocationSpoofingAutoSwiper", (n) => {
      const t = n.detail;
      for (const [o, s] of i.geos)
        try {
          t.latitude && t.longitude
            ? o({
                timestamp: Date.now(),
                coords: {
                  latitude: t.latitude,
                  longitude: t.longitude,
                  altitude: null,
                  accuracy: 64.0999,
                  altitudeAccuracy: null,
                  heading: parseInt("NaN", 10),
                  velocity: null,
                },
              })
            : s(new e(e.POSITION_UNAVAILABLE, "Position unavailable"));
        } catch {}
      i.geos.length = 0;
    }),
      (navigator.geolocation.getCurrentPosition = new Proxy(
        navigator.geolocation.getCurrentPosition,
        {
          apply(n, t, o) {
            i.geos.push(o),
              r.dispatchEvent(new Event("requestLocationSpoofingAutoSwiper"));
          },
        }
      )),
      (navigator.geolocation.watchPosition = new Proxy(
        navigator.geolocation.watchPosition,
        {
          apply(n, t, o) {
            return navigator.geolocation.getCurrentPosition(...o), (a += 1), a;
          },
        }
      ));
  }
})();
