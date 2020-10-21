(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"+J+G":function(e,t,n){e.exports=n.p+"alarm_clock.48d3df0afe4d4981523b8a12e4e25f92.mp3"},"/k9u":function(e,t,n){e.exports=n.p+"beep_beep.b0a574ec7e1237d53fd1c736fd463cbc.mp3"},"26oy":function(e,t,n){e.exports=n.p+"notification.9344fa5a37d4769a5b7801274fe5e5a6.mp3"},"5AtP":function(e,t,n){e.exports=n.p+"calling.e1e2e9645beebf2fe7634628b33a7fef.mp3"},AwvN:function(e,t,n){e.exports=n.p+"chirpy.6792fab6703f7222b9e671731318b1a8.mp3"},EDyN:function(e,t,n){e.exports=n.p+"call.961bf7a7267717c572de1c89456459d0.mp3"},EvA2:function(e,t,n){e.exports=n.p+"message.49f6f04e7c116770d4573e094e4a0013.mp3"},FsUC:function(e,t,n){e.exports=n.p+"fault.f9561694f3fce480ca1f9acbf8fca8f1.mp3"},PIGS:function(e,t,n){e.exports=n.p+"hand_bell.8fa7de2a7a40d51c4ee62d478d137e10.mp3"},QciA:function(e,t,n){e.exports=n.p+"calling.a4d0d2424e7055609cc4b3e053d83cb7.mp3"},UEYJ:function(e,t,n){e.exports=n.p+"3_notes_reverb.09e1400a89db8dd7527e5f3fa415051a.mp3"},"hp/T":function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_SOUNDS",(function(){return A})),n.d(t,"availableSounds",(function(){return E})),n.d(t,"play",(function(){return N})),n.d(t,"stop",(function(){return _})),n.d(t,"onStopped",(function(){return x})),n.d(t,"isPlaying",(function(){return S})),n.d(t,"enableAlertSoundsForMobile",(function(){return O})),n.d(t,"enableForMobile",(function(){return k}));n("YFKU");var o=n("mNbo"),a=n("txPx"),r=n("hY0g"),i=n.n(r),l=n("+J+G"),c=n("/k9u"),u=n("QciA"),d=n("5AtP"),f=n("EDyN"),p=n("AwvN"),s=n("FsUC"),h=n("qDTG"),m=n("PIGS"),b=n("iS7k"),g=n("EvA2"),w=n("26oy"),y=n("qOS0"),v=n("UEYJ"),P=Object(a.getLogger)("Lib.Sound",{color:"#dea433"}),A={sound:"notification/notification",alert:"alert/fired"},E=[{title:window.t("Alarm Clock"),path:"alert/alarm_clock",soundForAlerts:!0,filePath:l}];E.unshift({path:A.sound,title:window.t("Default"),common:!0,filePath:w},{title:window.t("Chat Message"),path:"chat/message",filePath:g,common:!0},{title:window.t("Chat Popup"),path:"chat/popup",filePath:y,common:!0},{title:window.t("Chat Call"),path:"chat/call",filePath:f},{title:window.t("Chat Calling"),path:"chat/calling",filePath:d},{title:window.t("Chat Hangup"),path:"chat/hangup",filePath:b},{title:window.t("Thin"),path:A.alert,filePath:h,soundForAlerts:!0},{title:window.t("3 Notes Reverb"),path:"alert/3_notes_reverb",filePath:v,soundForAlerts:!0}),E.push({title:window.t("Beep-beep"),path:"alert/beep_beep",filePath:c,soundForAlerts:!0},{title:window.t("Calling"),path:"alert/calling",filePath:u,soundForAlerts:!0},{title:window.t("Chirpy"),path:"alert/chirpy",filePath:p,soundForAlerts:!0},{title:window.t("Fault"),path:"alert/fault",filePath:s,soundForAlerts:!0},{title:window.t("Hand Bell"),path:"alert/hand_bell",filePath:m,soundForAlerts:!0});var F={};function N(e,t){return void 0===e&&(e=A.sound),Object(o.isOnMobileAppPage)("any")?Promise.resolve():(P.logNormal('Sound play attempt for "'+e+'" duration-'+t+"s;"),C(e).play(t))}function _(e){if(!Object(o.isOnMobileAppPage)("any")){var t=[];e?t.push(C(e)):t=Object.values(F),
t.forEach((function(e){e.stop()}))}}function x(e,t){Object(o.isOnMobileAppPage)("any")||C(e).playing.subscribe((function(e){e||t()}),{once:!0})}function S(e){return!Object(o.isOnMobileAppPage)("any")&&C(e).playing.value()}function O(){k(E.filter((function(e){return!!e.soundForAlerts})).map((function(e){return e.path})))}function k(e){if(!Object(o.isOnMobileAppPage)("any")&&(e&&/iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(window.navigator.userAgent)))if(Array.isArray(e)||(e=[e]),0!==(e=e.filter((function(e){var t=C(e);return!(!t||!t.el.load||t._mobilePreloadActive)&&(t._mobilePreloadActive=!0,!0)}))).length){var t=function(){var o=[];Array.isArray(e)&&e.forEach((function(e){var t=C(e);t.el.load();var n=t.play().catch((function(e){if("AbortError"!==e.name)throw P.logError('enableForMobile for "'+t.el.src+'" preload error: - '+e.message),e}));t.el.pause(),o.push(n)})),Promise.all(o).then((function(){P.logNormal("enableForMobile sounds initialized")})),n.forEach((function(e){document.removeEventListener(e,t,!0)}))},n=["click","touchend","keydown"];n.forEach((function(e){document.addEventListener(e,t,!0)}))}else P.logNormal("enableForMobile no sounds passed")}var C=function(e){if(e in F)return F[e];P.logNormal("requested sound  "+e+" not cached, building a new audio element");var t=E.find((function(t){return t.path===e}));if(void 0===t)throw new Error('Cannot find sound "'+e+'"');var n=new Audio(t.filePath),o={el:n,playing:new i.a(!1),play:function(t){return void 0===t&&(t=0),o.playing.value()?(P.logNormal("sound already playing"),Promise.reject("already playing")):(o.playing.setValue(!0),new Promise((function(n,a){var r=t>0,i=function(){(function(e){try{P.logNormal('"'+e.el.src+'" triggering html5 play method, readyState - '+e.el.readyState+"; muted - "+e.el.muted+"; volume - "+e.el.volume+"; currentTime - "+e.el.currentTime);var t=e.el.play();return t||(t=Promise.resolve()),t}catch(n){return P.logError('play method for "'+e.el.src+'" catch error - '+n.message),Promise.reject(n)}})(o).catch((function(t){P.logNormal('stop counting sound "'+e+'"; as playing due to an error: '+t.message),o.stop(),a(t)}))};o._onEnded=function(){r?i():(o.stop(),n())},o.el.addEventListener("ended",o._onEnded),r&&setTimeout((function(){P.logNormal('"'+e+'" repeat timeout - '+t+"s off"),r=!1}),1e3*t),i()})))},stop:function(){o.el.pause(),o.playing.setValue(!1),o._onEnded&&o.el.removeEventListener("ended",o._onEnded)}};F[e]=o;return["canplaythrough","error"].forEach((function(t){n.addEventListener(t,(function(){P.logNormal('for sound "'+e+'", event - '+t+" is fired")}),!1)})),P.logNormal("canPlayType - "+n.canPlayType("audio/mp3")),F[e]};k(E.filter((function(e){return!!e.common})).map((function(e){return e.path})))},iS7k:function(e,t,n){e.exports=n.p+"hangup.a9dcd5a2dc2fc37abba02c7d688c13ca.mp3"},qDTG:function(e,t,n){e.exports=n.p+"fired.ecfdbbef82db7347aed64ea12a69d5df.mp3"},qOS0:function(e,t,n){e.exports=n.p+"popup.0fae26fafe80bd033b16c1aff723016e.mp3"}}]);