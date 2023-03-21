function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,s=c||f||Function("return this")(),l=Object.prototype.toString,p=Math.max,g=Math.min,d=function(){return s.Date.now()};function y(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var e=r.test(t);return e||a.test(t)?u(t.slice(2),e?2:8):i.test(t)?NaN:+t}e=function(t,n,e){var o,i,r,a,u,c,f=0,s=!1,l=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(n){var e=o,r=i;return o=i=void 0,f=n,a=t.apply(r,e)}function b(t){return f=t,u=setTimeout(T,n),s?h(t):a}function j(t){var e=t-c;return void 0===c||e>=n||e<0||l&&t-f>=r}function T(){var t=d();if(j(t))return w(t);u=setTimeout(T,function(t){var e=n-(t-c);return l?g(e,r-(t-f)):e}(t))}function w(t){return u=void 0,v&&o?h(t):(o=i=void 0,a)}function $(){var t=d(),e=j(t);if(o=arguments,i=this,c=t,e){if(void 0===u)return b(c);if(l)return u=setTimeout(T,n),h(c)}return void 0===u&&(u=setTimeout(T,n)),a}return n=m(n)||0,y(e)&&(s=!!e.leading,r=(l="maxWait"in e)?p(m(e.maxWait)||0,n):r,v="trailing"in e?!!e.trailing:v),$.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=c=i=u=void 0},$.flush=function(){return void 0===u?a:w(d())},$};const v=document.querySelector("#search-box"),h=document.querySelector(".country-list"),b=document.querySelector(".country-info");v.addEventListener("input",t(e)((function(){const t=v.value.trim();""===t&&(h.innerHTML="",b.innerHTML="");(n=t,fetch(`https://restcountries.com/v3/name/${n}?fields=name,capital,population,flags,languages`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))).then((t=>{t.length>=2&&t.length<=10?function(t){const n=t.map((({name:{official:t},flags:{svg:n}})=>`<li class="country-item">\n        <img src='${n}' class="country-item-flag" alt="Flag" width="120">\n        <p class="country-item-name">${t}</p>\n      </li>`)).join("");h.innerHTML=n}(t):1===t.length?function(t){const n=t.map((({name:{official:t},flags:{svg:n},capital:e,population:o,languages:i})=>`<div class="country-info-head">\n         <img class = "country-info-flag" src="${n}" alt="Flag of Country" width="220">\n         <h2 class="country-info-tittle">${t}</h2>\n       </div>\n       <p class="country-info-capital"><strong>Capital: </strong>${e}</p>\n       <p class="country-info-population"><strong>Population: </strong>${o}</p>\n       <p class="country-info-languages"><strong>Languages: </strong>${Object.values(i).join(", ")}</p>`)).join("");b.innerHTML=n}(t):t.length>10&&alert("Too many matches found. Please enter a more specific name.")})).catch((t=>{alert("Oops, there is no country with that name")}));var n}),300));
//# sourceMappingURL=index.bd2f1ae1.js.map
