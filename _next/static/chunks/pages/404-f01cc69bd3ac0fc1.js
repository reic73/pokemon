(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{9014:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(5838)}])},3009:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r=t(5893),i=(t(7294),t(9008)),c=t(1327),o=t(1163),a=t(6741),s=t(1717),u=function(){var n=(0,o.useRouter)();return(0,r.jsxs)("div",{className:"w-screen h-20 px-12 flex justify-between absolute md:fixed",style:{backgroundColor:c.Z.valencia,boxShadow:"0px 5px 10px ".concat(c.Z.eerieBlack),zIndex:10},children:[(0,r.jsx)("div",{className:"flex items-center cursor-pointer",onClick:function(){return n.push("/")},children:(0,r.jsx)("img",{src:(0,s.Gr)("/pokemon-logo.png"),alt:"pokemon-logo",style:{width:"80px"}})}),(0,r.jsx)("div",{className:"flex items-center",children:"/my-pokemon"!=n.pathname?(0,r.jsx)(a.Z,{desktop:(0,r.jsx)("div",{className:"text-white font-semibold text-lg cursor-pointer",onClick:function(){return n.push("/my-pokemon")},children:"My Pokemon"}),mobile:(0,r.jsx)("div",{className:"flex items-center cursor-pointer px-2",onClick:function(){return n.push("/my-pokemon")},children:(0,r.jsx)("img",{src:(0,s.Gr)("/pokeball-line.png"),alt:"pokemon-ball",style:{width:"30px"}})})}):null})]})},l=function(n){return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:n.title}),(0,r.jsx)("link",{rel:"icon",href:(0,s.Gr)("/pokeball.png")})]}),(0,r.jsx)(u,{}),(0,r.jsx)(a.Z,{desktop:(0,r.jsx)("div",{className:"p-20",children:n.children}),mobile:(0,r.jsx)("div",{className:"py-28 px-8",children:n.children})})]})}},6741:function(n,e,t){"use strict";var r=t(5893),i=t(46),c=t(7294);e.Z=function(n){return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(i.Z,{smDown:!0,implementation:"css",children:n.desktop}),(0,r.jsx)(i.Z,{mdUp:!0,implementation:"css",children:n.mobile})]})}},1327:function(n,e){"use strict";e.Z={valencia:"#D53939",white:"#FFFFFF",black:"#000000",eerieBlack:"#1b1b1b ",redCarpet:"#bd2024"}},1717:function(n,e,t){"use strict";t.d(e,{Y5:function(){return r},LZ:function(){return i},e8:function(){return c},bC:function(){return a},sO:function(){return u},IJ:function(){return l},t:function(){return m},CK:function(){return f},$E:function(){return d},C5:function(){return p},vY:function(){return v},ks:function(){return x},O1:function(){return h},vm:function(){return k},Gr:function(){return g}});var r="myPokemon",i=20,c=function(n){var e=n/100<1;return n/10<1?"#00".concat(n):e?"#0".concat(n):"#".concat(n)},o=function(n){var e=n.split("-");return s(e)},a=function(n){var e=n.split(" ");return s(e)},s=function(n){var e=n.length,t="";return n.map((function(n,r){var i=r==e-1?"":" ";t+=n[0].toUpperCase()+n.slice(1)+i})),t},u=function(n){try{JSON.parse(n)}catch(e){return!1}return!0},l=function(){var n={},e=sessionStorage.getItem(r);return e&&u(e)&&(n=JSON.parse(e)),n},m=function(n,e){var t=0;void 0!=e["".concat(n)]&&(t=e["".concat(n)].names.length);return t},f=function(n){return o(n["".concat(0)].ability.name)},d=function(n){var e=[];return n.slice(0,3).map((function(n){var t=o(n.move.name);e.push(t)})),e},p=function(n){var e=[];return n.slice(0,3).map((function(n){var t=o(n.type.name);e.push(t)})),e},v=function(n,e){var t=(e-1)*i,r=0,c=Object.keys(n),o=[];c.map((function(e){var t=n["".concat(e)];t.names.map((function(n){var e={name:n,pokemonName:t.data.name,id:t.data.id,image:t.data.image};o.push(e),r++}))}));var a=r-t<i?r:i;return{data:o.slice(t,a),maxPage:Math.ceil(o.length/i),totalOwned:o.length}},x=function(n,e,t){n["".concat(e.id)]={names:["".concat(t)],data:{id:e.id,name:e.name,image:e.image}};var i=JSON.stringify(n);sessionStorage.setItem(r,i)},h=function(n,e,t){var i=n["".concat(e.id)].names;i.push(t),n["".concat(e.id)].names=i;var c=JSON.stringify(n);sessionStorage.setItem(r,c)},k=function(n,e,t){var i=n["".concat(e.id)].names.filter((function(n){return n!=e.name}));n["".concat(e.id)].names=i;var c=JSON.stringify(n);sessionStorage.setItem(r,c);var o=l();return v(o,t)},g=function(n){return n}},5838:function(n,e,t){"use strict";t.r(e);var r=t(5893),i=(t(7294),t(3009));e.default=function(){return(0,r.jsx)(i.Z,{title:"Pokemon List",children:(0,r.jsx)("div",{className:"border my-10 p-10 sm:p-40 flex justify-center font-bold sm:text-2xl text-red-500 rounded",children:"PAGE NOT FOUND"})})}}},function(n){n.O(0,[963,774,888,179],(function(){return e=9014,n(n.s=e);var e}));var e=n.O();_N_E=e}]);