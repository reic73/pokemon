(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6999)}])},6999:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var o=t(4051),r=t.n(o),s=t(5893),i=t(7294),u=t(4416),c=t(3538),a=t(6039),l=t(3009),f=t(9963),m=t(1163),d=t(6741),p=t(4349),v=t(5704),k=function(e){return(0,s.jsx)("div",{className:"md:flex md:flex-wrap",children:e.pokemonList.data.map((function(n,t){return(0,s.jsx)("div",{className:"lg:w-1/5 md:w-1/3 md:p-1 lg:my-5 lg:p-2 my-3",children:(0,s.jsx)(d.Z,{desktop:(0,s.jsx)(v.Z,{data:n,onSelect:e.onSelect},t),mobile:(0,s.jsx)(p.Z,{data:n,onSelect:e.onSelect,id:t},t)})},t)}))})};function x(e,n,t,o,r,s,i){try{var u=e[s](i),c=u.value}catch(a){return void t(a)}u.done?n(c):Promise.resolve(c).then(o,r)}var h=(0,u.$j)((function(e){return{pokemonLists:e.pokemon.pokemonLists}}),(function(e){return{retrievePokemonLists:function(n){return e((0,a.j)(n))}}}))((function(e){var n=(0,m.useRouter)(),t=e.pokemonLists,o=(0,i.useState)(1),u=o[0],a=o[1],d=(0,i.useRef)(null),p=function(){var e,n=(e=r().mark((function e(n,t){var o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n;case 2:o=e.sent,t(o);case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(o,r){var s=e.apply(n,t);function i(e){x(s,o,r,i,u,"next",e)}function u(e){x(s,o,r,i,u,"throw",e)}i(void 0)}))});return function(e,t){return n.apply(this,arguments)}}();return(0,i.useEffect)((function(){var n;p(c.Z.retrievePokemonLists(u),e.retrievePokemonLists),null===(n=d.current)||void 0===n||n.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}),[e.retrievePokemonLists,u]),(0,s.jsxs)(l.Z,{title:"Pokemon List",children:[(0,s.jsx)("div",{className:"flex justify-center text-2xl font-bold py-2 text-red-500",ref:d,children:"Pokemon Lists"}),(0,s.jsx)(k,{pokemonList:t,onSelect:function(e){n.push("/pokemon-list/".concat(e))}}),(0,s.jsx)(f.Z,{page:u,setPage:a,maxPage:t.maxPage})]})}))}},function(e){e.O(0,[445,963,669,791,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);