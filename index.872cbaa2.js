function n(n){return n&&n.__esModule?n.default:n}var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,f=u||l||Function("return this")(),s=Object.prototype.toString,p=Math.max,g=Math.min,d=function(){return f.Date.now()};function y(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function m(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==s.call(n)}(n))return NaN;if(y(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=y(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(o,"");var e=r.test(n);return e||a.test(n)?c(n.slice(2),e?2:8):i.test(n)?NaN:+n}t=function(n,t,e){var o,i,r,a,c,u,l=0,f=!1,s=!1,v=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function h(t){var e=o,r=i;return o=i=void 0,l=t,a=n.apply(r,e)}function b(n){return l=n,c=setTimeout($,t),f?h(n):a}function j(n){var e=n-u;return void 0===u||e>=t||e<0||s&&n-l>=r}function $(){var n=d();if(j(n))return T(n);c=setTimeout($,function(n){var e=t-(n-u);return s?g(e,r-(n-l)):e}(n))}function T(n){return c=void 0,v&&o?h(n):(o=i=void 0,a)}function w(){var n=d(),e=j(n);if(o=arguments,i=this,u=n,e){if(void 0===c)return b(u);if(s)return c=setTimeout($,t),h(u)}return void 0===c&&(c=setTimeout($,t)),a}return t=m(t)||0,y(e)&&(f=!!e.leading,r=(s="maxWait"in e)?p(m(e.maxWait)||0,t):r,v="trailing"in e?!!e.trailing:v),w.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=u=i=c=void 0},w.flush=function(){return void 0===c?a:T(d())},w};const v=document.querySelector("#search-box"),h=document.querySelector(".country-list"),b=document.querySelector(".country-info");v.addEventListener("input",n(t)((function(){(n=this.value,fetch(`https://restcountries.com/v3/name/${n}?fields=name,capital,population,flags,languages`).then((n=>n.json()))).then((n=>{n.length>10?alert("Too many matches found. Please enter a more specific name."):n.length>=2&&n.length<=10?function(n){const t=n.map((n=>`<li class="country-item">\n        <img src='${n.flags[0]}' class="country-item-flag" alt="Flag" width="120">\n        <p class="country-item-name">${n.name.official}</p>\n      </li>`)).join("");h.innerHTML=t}(n):1===n.length&&function(n){const t=n[0];console.log(t);const e=t.flags,o=Object.values(t.languages);console.log(o);const i=`<div class="country-info-head">\n        <img class = "country-info-flag" src="${e[0]}" alt="Flag of Country" width="220">\n        <h2 class="country-info-tittle">${t.name.official}</h2>\n      </div>\n      <p class="country-info-capital"><strong>Capital: </strong>${t.capital}</p>\n      <p class="country-info-population"><strong>Population: </strong>${t.population}</p>\n      <p class="country-info-languages"><strong>Languages: </strong>${o[0]}, ${o[1]}</p>`;b.innerHTML=i}(n)})).catch((n=>{console.error(n)}));var n}),300));
//# sourceMappingURL=index.872cbaa2.js.map
