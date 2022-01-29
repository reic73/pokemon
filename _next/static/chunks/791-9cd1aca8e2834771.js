"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{3538:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(4051),a=t.n(r),i=t(9669),o=t.n(i),c=t(1717);function s(e,n,t,r,a,i,o){try{var c=e[i](o),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,a)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){s(i,r,a,o,c,"next",e)}function c(e){s(i,r,a,o,c,"throw",e)}o(void 0)}))}}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d="https://pokeapi.co",f=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,r=[{key:"retrievePokemonLists",value:function(e){return l(a().mark((function n(){var t,r,i,s,u,f,m;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(d,"/api/v2/pokemon?limit=").concat(c.LZ,"&offset=").concat(c.LZ*(e-1)),r=(0,c.IJ)(),n.next=5,o().get(t);case 5:return i=n.sent,s=Math.ceil(i.data.count/c.LZ),u=i.data.results,f=u.map(function(){var e=l(a().mark((function e(n){var t,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get(n.url);case 2:t=e.sent,i=(0,c.t)(t.data.id,r),n.id=t.data.id,n.image=t.data.sprites.front_default,n.owned=i;case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.next=11,Promise.all(f);case 11:return m={data:u,maxPage:s},n.abrupt("return",m);case 15:n.prev=15,n.t0=n.catch(0),console.log("error",n.t0),alert("Pokemon data not found");case 19:case"end":return n.stop()}}),n,null,[[0,15]])})))()}},{key:"retrievePokemonDetails",value:function(e){return l(a().mark((function n(){var t,r,i,s,l,u,f,m,p,x,v,h;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="".concat(d,"/api/v2/pokemon/").concat(e),n.next=4,o().get(t);case 4:return r=n.sent,i=r.data,s=(0,c.CK)(i.abilities),l=(0,c.$E)(i.moves),u=(0,c.C5)(i.types),f=i.height,m=i.weight,p=(0,c.bC)(i.forms[0].name),x=i.sprites.front_default,v=i.id,h={ability:s,moves:l,types:u,height:f,weight:m,name:p,image:x,id:v},n.abrupt("return",h);case 18:n.prev=18,n.t0=n.catch(0),console.log("error",n.t0),alert("Pokemon data not found");case 22:case"end":return n.stop()}}),n,null,[[0,18]])})))()}}],(t=null)&&u(n.prototype,t),r&&u(n,r),e}()},5704:function(e,n,t){var r=t(5893),a=(t(7294),t(1717));n.Z=function(e){return(0,r.jsxs)("div",{className:"rounded-xl bg-gray-100 overflow-hidden hover:bg-gray-200 cursor-pointer",onClick:function(){return e.onSelect(e.data.id)},children:[(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)("img",{src:e.data.image,alt:"pokemon-list",style:{width:"185px"}})}),(0,r.jsxs)("div",{className:"flex justify-between px-4",children:[(0,r.jsx)("div",{className:"flex items-center my-3 font-bold text-lg",children:(0,r.jsxs)("div",{children:[e.data.name.toUpperCase(),(0,r.jsx)("div",{className:"text-base font-normal text-gray-500",children:(0,a.e8)(e.data.id)})]})}),(0,r.jsx)("div",{className:"flex items-center",children:e.isMyPokemonPage?(0,r.jsx)("div",{className:"text-red-500 border border-red-500 px-2 font-semibold rounded hover:bg-red-500 hover:text-white",onClick:function(n){n.stopPropagation(),e.onRelease&&e.onRelease({id:e.data.id,name:e.data.name})},style:{zIndex:10},children:"Release"}):(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-xs",children:"Owned"}),(0,r.jsx)("div",{className:"p-1 rounded bg-red-500 text-white flex justify-center",children:e.data.owned})]})})]})]})}},4349:function(e,n,t){var r=t(5893),a=(t(7294),t(1717));n.Z=function(e){return(0,r.jsxs)("div",{className:"flex my-2 p-2 rounded-xl cursor-pointer justify-between ".concat(e.id%2==0?"bg-gray-100":"border-2 border-gray-100 "),onClick:function(){return e.onSelect(e.data.id)},children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("img",{src:e.data.image,alt:"pokemon-list",style:{width:"75px"}}),(0,r.jsx)("div",{className:"flex items-center ml-3 font-bold text-sm",children:(0,r.jsxs)("div",{children:[e.data.name.toUpperCase(),(0,r.jsx)("div",{className:"text-xs font-normal text-gray-500",children:(0,a.e8)(e.data.id)})]})})]}),(0,r.jsx)("div",{className:"flex items-center pr-2",children:e.isMyPokemonPage?(0,r.jsx)("div",{className:"text-red-500 border border-red-500 px-2 text-sm font-semibold rounded",onClick:function(n){n.stopPropagation(),e.onRelease&&e.onRelease({id:e.data.id,name:e.data.name})},style:{zIndex:10},children:"Release"}):(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"p-1 rounded bg-red-500 text-white flex justify-center text-xs",children:e.data.owned}),(0,r.jsx)("div",{className:"p-1 text-xs text-gray-500",children:"Owned"})]})})]})}},3009:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(5893),a=(t(7294),t(9008)),i=t(1327),o=t(1163),c=t(6741),s=function(){var e=(0,o.useRouter)();return(0,r.jsxs)("div",{className:"w-screen h-20 px-12 flex justify-between absolute md:fixed",style:{backgroundColor:i.Z.valencia,boxShadow:"0px 5px 10px ".concat(i.Z.eerieBlack),zIndex:10},children:[(0,r.jsx)("div",{className:"flex items-center cursor-pointer",onClick:function(){return e.push("/pokemon-list")},children:(0,r.jsx)("img",{src:"/pokemon/pokemon-logo.png",alt:"pokemon-logo",style:{width:"80px"}})}),(0,r.jsx)("div",{className:"flex items-center",children:"/my-pokemon"!=e.pathname?(0,r.jsx)(c.Z,{desktop:(0,r.jsx)("div",{className:"text-white font-semibold text-lg cursor-pointer",onClick:function(){return e.push("/my-pokemon")},children:"My Pokemon"}),mobile:(0,r.jsx)("div",{className:"flex items-center cursor-pointer px-2",onClick:function(){return e.push("/my-pokemon")},children:(0,r.jsx)("img",{src:"/pokemon/pokeball-line.png",alt:"pokemon-ball",style:{width:"30px"}})})}):null})]})},l=function(e){return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:e.title}),(0,r.jsx)("link",{rel:"icon",href:"/pokeball.png"})]}),(0,r.jsx)(s,{}),(0,r.jsx)(c.Z,{desktop:(0,r.jsx)("div",{className:"p-20",children:e.children}),mobile:(0,r.jsx)("div",{className:"py-28 px-8",children:e.children})})]})}},9963:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(5893),a=function(e){var n=e.disabled,t=e.selected,a="border border-gray-400 w-full h-12 shadow focus:outline-none",i="".concat(a," text-blue-500 font-semibold hover:bg-gray-200 "),o="".concat(a," text-gray-500 font-semibold cursor-not-allowed"),c="".concat(a," text-gray-700 font-bold");return(0,r.jsx)("button",{type:"button",className:t?c:n?o:i,disabled:n,onClick:e.onClick,children:e.children})},i=t(7294),o=t(9583),c=function(e){var n=e.maxPage,t=(0,i.useState)(e.page),c=t[0],s=t[1],l=(0,i.useState)([1,2,3]),u=l[0],d=l[1],f=(0,i.useState)([]),m=f[0],p=f[1];return(0,i.useEffect)((function(){s(e.page)}),[e.page]),(0,i.useEffect)((function(){var e=[];u.map((function(t){e.push((0,r.jsx)(a,{onClick:function(){return s(t)},selected:t===c,disabled:t>n,children:t.toString()},t))})),p(e)}),[u,n]),(0,i.useEffect)((function(){var t=[],r=c-3<1?1:c-3,a=c+3>n?n:c+3;[-3,-2,-1,1,2,3].map((function(e){var t=c+e;t<1&&a++,t>n&&r>1&&r--}));for(var i=r;i<=a;i++)t.push(i);d(t),e.setPage(c)}),[c]),(0,r.jsxs)("div",{className:"flex justify-center mt-8 mb-16",children:[(0,r.jsx)(a,{disabled:1===c,onClick:function(){return s(1)},children:(0,r.jsx)(o.dL9,{className:"w-full"})}),(0,r.jsx)(a,{disabled:1===c,onClick:function(){return s(c-1)},children:(0,r.jsx)(o._HU,{className:"w-full"})}),u.includes(1)?(0,r.jsx)("div",{}):(0,r.jsx)(a,{children:"..."}),m,u.includes(n)||0===n?(0,r.jsx)("div",{}):(0,r.jsx)(a,{children:"..."}),(0,r.jsx)(a,{disabled:c===n||0===n,onClick:function(){return s(c+1)},children:(0,r.jsx)(o.H_v,{className:"w-full"})}),(0,r.jsx)(a,{disabled:c===n||0===n,onClick:function(){return s(n)},children:(0,r.jsx)(o.hPV,{className:"w-full"})})]})}},6741:function(e,n,t){var r=t(5893),a=t(46),i=t(7294);n.Z=function(e){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(a.Z,{smDown:!0,implementation:"css",children:e.desktop}),(0,r.jsx)(a.Z,{mdUp:!0,implementation:"css",children:e.mobile})]})}},1327:function(e,n){n.Z={valencia:"#D53939",white:"#FFFFFF",black:"#000000",eerieBlack:"#1b1b1b ",redCarpet:"#bd2024"}},1717:function(e,n,t){t.d(n,{Y5:function(){return r},LZ:function(){return a},e8:function(){return i},bC:function(){return c},sO:function(){return l},IJ:function(){return u},t:function(){return d},CK:function(){return f},$E:function(){return m},C5:function(){return p},vY:function(){return x},ks:function(){return v},O1:function(){return h},vm:function(){return g}});var r="myPokemon",a=20,i=function(e){var n=e/100<1;return e/10<1?"#00".concat(e):n?"#0".concat(e):"#".concat(e)},o=function(e){var n=e.split("-");return s(n)},c=function(e){var n=e.split(" ");return s(n)},s=function(e){var n=e.length,t="";return e.map((function(e,r){var a=r==n-1?"":" ";t+=e[0].toUpperCase()+e.slice(1)+a})),t},l=function(e){try{JSON.parse(e)}catch(n){return!1}return!0},u=function(){var e={},n=sessionStorage.getItem(r);return n&&l(n)&&(e=JSON.parse(n)),e},d=function(e,n){var t=0;void 0!=n["".concat(e)]&&(t=n["".concat(e)].names.length);return t},f=function(e){return o(e["".concat(0)].ability.name)},m=function(e){var n=[];return e.slice(0,3).map((function(e){var t=o(e.move.name);n.push(t)})),n},p=function(e){var n=[];return e.slice(0,3).map((function(e){var t=o(e.type.name);n.push(t)})),n},x=function(e,n){var t=(n-1)*a,r=0,i=Object.keys(e),o=[];i.map((function(n){var t=e["".concat(n)];t.names.map((function(e){var n={name:e,pokemonName:t.data.name,id:t.data.id,image:t.data.image};o.push(n),r++}))}));var c=r-t<a?r:a;return{data:o.slice(t,c),maxPage:Math.ceil(o.length/a),totalOwned:o.length}},v=function(e,n,t){e["".concat(n.id)]={names:["".concat(t)],data:{id:n.id,name:n.name,image:n.image}};var a=JSON.stringify(e);sessionStorage.setItem(r,a)},h=function(e,n,t){var a=e["".concat(n.id)].names;a.push(t),e["".concat(n.id)].names=a;var i=JSON.stringify(e);sessionStorage.setItem(r,i)},g=function(e,n,t){var a=e["".concat(n.id)].names.filter((function(e){return e!=n.name}));e["".concat(n.id)].names=a;var i=JSON.stringify(e);sessionStorage.setItem(r,i);var o=u();return x(o,t)}},6039:function(e,n,t){t.d(n,{j:function(){return r},F:function(){return a}});var r=function(e){return{type:"RETRIEVE_POKEMON_LIST",payload:e}},a=function(e){return{type:"RETRIEVE_POKEMON_DETAILS",payload:e}}},8357:function(e,n,t){t.d(n,{w_:function(){return l}});var r=t(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return(o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t};function s(e){return e&&e.map((function(e,n){return r.createElement(e.tag,o({key:n},e.attr),s(e.child))}))}function l(e){return function(n){return r.createElement(u,o({attr:o({},e.attr)},n),s(e.child))}}function u(e){var n=function(n){var t,a=e.attr,i=e.size,s=e.title,l=c(e,["attr","size","title"]),u=i||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,l,{className:t,style:o(o({color:e.color||n.color},n.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return n(e)})):n(a)}}}]);