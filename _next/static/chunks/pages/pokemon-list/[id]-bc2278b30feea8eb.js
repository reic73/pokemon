(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{8172:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(29),i=t(2777),a=t(2262),s=t(7794),c=t.n(s),o=t(9669),l=t.n(o),d=t(1376),u="https://pokeapi.co",m=function(){function e(){(0,i.Z)(this,e)}return(0,a.Z)(e,null,[{key:"retrievePokemonLists",value:function(){var e=(0,r.Z)(c().mark((function e(n){var t,i,a,s,o,m,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(u,"/api/v2/pokemon?limit=").concat(d.LZ,"&offset=").concat(d.LZ*(n-1)),i=(0,d.IJ)(),e.next=5,l().get(t);case 5:return a=e.sent,s=Math.ceil(a.data.count/d.LZ),o=a.data.results,m=o.map(function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get(n.url);case 2:t=e.sent,r=(0,d.t)(t.data.id,i),n.id=t.data.id,n.image=t.data.sprites.front_default,n.owned=r,n.name=(0,d.MR)(n.name);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=11,Promise.all(m);case 11:return f={data:o,maxPage:s},e.abrupt("return",f);case 15:e.prev=15,e.t0=e.catch(0),console.log("error",e.t0),alert("Pokemon data not found");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n){return e.apply(this,arguments)}}()},{key:"retrievePokemonDetails",value:function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,i,a,s,o,m,f,x,h,v,p;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(u,"/api/v2/pokemon/").concat(n),e.next=4,l().get(t);case 4:return r=e.sent,i=r.data,a=(0,d.CK)(i.abilities),s=(0,d.$E)(i.moves),o=(0,d.C5)(i.types),m=i.height,f=i.weight,x=(0,d.MR)(i.forms[0].name),h=i.sprites.front_default,v=i.id,p={ability:a,moves:s,types:o,height:m,weight:f,name:x,image:h,id:v},e.abrupt("return",p);case 18:e.prev=18,e.t0=e.catch(0),console.log("error",e.t0),alert("Pokemon data not found");case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(n){return e.apply(this,arguments)}}()}]),e}()},6059:function(e,n,t){"use strict";var r=t(9499),i=t(7294),a=t(6798),s=t(5568),c=t(5893);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}n.Z=function(e){var n=i.forwardRef((function(e,n){return(0,c.jsx)(s.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({elevation:6,ref:n,variant:"filled"},e))}));return(0,c.jsx)("div",{style:{zIndex:100},children:(0,c.jsx)(a.Z,{open:e.isOpen,autoHideDuration:3e3,onClose:e.onClose,anchorOrigin:{vertical:"top",horizontal:"center"},children:(0,c.jsx)(n,{severity:"success",onClose:e.onClose,sx:{width:"100%"},children:"Success update data"})})})}},2672:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});t(7294);var r=t(9008),i=t(1212),a=t(1163),s=t(95),c=t(1376),o=t(5893),l=function(){var e=(0,a.useRouter)();return(0,o.jsxs)("div",{className:"w-screen h-20 px-12 flex justify-between absolute md:fixed",style:{backgroundColor:i.Z.valencia,boxShadow:"0px 5px 10px ".concat(i.Z.eerieBlack),zIndex:10},children:[(0,o.jsx)("div",{className:"flex items-center cursor-pointer",onClick:function(){return e.push("/")},children:(0,o.jsx)("img",{src:(0,c.Gr)("/pokemon-logo.png"),alt:"pokemon-logo",style:{width:"80px"}})}),(0,o.jsx)("div",{className:"flex items-center",children:"/my-pokemon"!=e.pathname?(0,o.jsx)(s.Z,{desktop:(0,o.jsx)("div",{className:"text-white font-semibold text-lg cursor-pointer",onClick:function(){return e.push("/my-pokemon")},children:"My Pokemon"}),mobile:(0,o.jsx)("div",{className:"flex items-center cursor-pointer px-2",onClick:function(){return e.push("/my-pokemon")},children:(0,o.jsx)("img",{src:(0,c.Gr)("/pokeball-line.png"),alt:"pokemon-ball",style:{width:"30px"}})})}):null})]})},d=function(e){return(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsxs)(r.default,{children:[(0,o.jsx)("title",{children:e.title}),(0,o.jsx)("link",{rel:"icon",href:(0,c.Gr)("/pokeball.png")})]}),(0,o.jsx)(l,{}),(0,o.jsx)(s.Z,{desktop:(0,o.jsx)("div",{className:"p-20",children:e.children}),mobile:(0,o.jsx)("div",{className:"py-28 px-8",children:e.children})})]})}},95:function(e,n,t){"use strict";var r=t(46),i=t(7294),a=t(5893);n.Z=function(e){return(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(r.Z,{smDown:!0,implementation:"css",children:e.desktop}),(0,a.jsx)(r.Z,{mdUp:!0,implementation:"css",children:e.mobile})]})}},1212:function(e,n){"use strict";n.Z={valencia:"#D53939",white:"#FFFFFF",black:"#000000",eerieBlack:"#1b1b1b ",redCarpet:"#bd2024"}},1376:function(e,n,t){"use strict";t.d(n,{Y5:function(){return r},LZ:function(){return i},e8:function(){return a},MR:function(){return s},sO:function(){return o},IJ:function(){return l},t:function(){return d},CK:function(){return u},$E:function(){return m},C5:function(){return f},vY:function(){return x},ks:function(){return h},O1:function(){return v},vm:function(){return p},Gr:function(){return j}});var r="myPokemon",i=20,a=function(e){var n=e/100<1;return e/10<1?"#00".concat(e):n?"#0".concat(e):"#".concat(e)},s=function(e){var n=e.split("-");return c(n)},c=function(e){var n=e.length,t="";return e.map((function(e,r){var i=r==n-1?"":" ";t+=e[0].toUpperCase()+e.slice(1)+i})),t},o=function(e){try{JSON.parse(e)}catch(n){return!1}return!0},l=function(){var e={},n=sessionStorage.getItem(r);return n&&o(n)&&(e=JSON.parse(n)),e},d=function(e,n){var t=0;void 0!=n["".concat(e)]&&(t=n["".concat(e)].names.length);return t},u=function(e){return s(e["".concat(0)].ability.name)},m=function(e){var n=[];return e.slice(0,3).map((function(e){var t=s(e.move.name);n.push(t)})),n},f=function(e){var n=[];return e.slice(0,3).map((function(e){var t=s(e.type.name);n.push(t)})),n},x=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,r=(n-1)*t,a=0,s=Object.keys(e),c=[];s.map((function(n){var t=e["".concat(n)];t.names.map((function(e){var n={name:e,pokemonName:t.data.name,id:t.data.id,image:t.data.image};c.push(n),a++}))}));var o=a-r<t?a:t,l={data:c.slice(r,o),maxPage:Math.ceil(c.length/t),totalOwned:c.length};return l},h=function(e,n,t){e["".concat(n.id)]={names:["".concat(t)],data:{id:n.id,name:n.name,image:n.image}};var i=JSON.stringify(e);sessionStorage.setItem(r,i)},v=function(e,n,t){var i=e["".concat(n.id)].names;i.push(t),e["".concat(n.id)].names=i;var a=JSON.stringify(e);sessionStorage.setItem(r,a)},p=function(e,n,t){var i=e["".concat(n.id)].names.filter((function(e){return e!=n.name}));e["".concat(n.id)].names=i;var a=JSON.stringify(e);sessionStorage.setItem(r,a);var s=l();return x(s,t)},j=function(e){return"/pokemon"+e}},1342:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var r=t(29),i=t(7794),a=t.n(i),s=t(7294),c=t(8172),o=t(4416),l=t(2763),d=t(5302),u=t(2672),m=t(6059),f=t(95),x=t(1376),h={bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",pyschic:"#f366b9",steel:"#9eb7b",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"},v=t(2151),p=t(3321),j=t(1212),g=t(5893),b=function(e){var n=(0,v.ZP)(p.Z)((function(e){return{color:e.theme.palette.getContrastText(j.Z.valencia),backgroundColor:j.Z.valencia,"&:hover":{backgroundColor:j.Z.redCarpet}}}));return(0,g.jsx)("div",{className:"w-full",children:(0,g.jsx)(n,{onClick:e.onClick,fullWidth:e.fullWidth,disabled:e.disabled,children:e.children})})},y=function(e){return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"flex justify-center text-3xl text-center",children:(0,g.jsxs)("div",{children:[e.data.name," ",(0,g.jsx)("span",{className:"text-gray-500",children:(0,x.e8)(e.data.id)})]})}),(0,g.jsx)("div",{className:"flex justify-center bg-gray-200 rounded my-4 overflow-hidden",children:(0,g.jsx)("img",{src:e.data.image,alt:"pokemon-detail",style:{width:"400px"}})}),(0,g.jsxs)("div",{className:"bg-red-500 rounded-lg flex p-3 ",children:[(0,g.jsxs)("div",{className:"w-1/2",children:[(0,g.jsxs)("div",{className:"mb-2",children:[(0,g.jsx)("div",{className:"text-white text-sm",children:"Height"}),(0,g.jsx)("div",{className:"font-semibold text-xl",children:e.data.height})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"text-white text-sm",children:"Weight"}),(0,g.jsx)("div",{className:"font-semibold text-xl",children:e.data.weight})]})]}),(0,g.jsx)("div",{className:"w-1/2",children:(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"text-white text-sm",children:"Ability"}),(0,g.jsx)("div",{className:"font-semibold text-xl",children:e.data.ability})]})})]}),(0,g.jsxs)("div",{className:"mt-4",children:[(0,g.jsx)("div",{className:"text-xl font-semibold my-2",children:"Moves"}),(0,g.jsx)("div",{className:"flex",children:e.data.moves.length?e.data.moves.map((function(e,n){return(0,g.jsx)("div",{className:"border ml-2 px-2 py-1 rounded-xl border-gray-500 text-gray-500 text-xs",children:e},n)})):(0,g.jsx)("div",{children:"-"})})]}),(0,g.jsxs)("div",{className:"mt-4",children:[(0,g.jsx)("div",{className:"text-xl font-semibold my-2",children:"Types"}),(0,g.jsx)("div",{className:"flex",children:e.data.types.length?e.data.types.map((function(e,n){return(0,g.jsx)("div",{className:"ml-2 px-4 rounded-xl text-white text-sm",style:{backgroundColor:"".concat(h["".concat(e.toLowerCase())])},children:e},n)})):(0,g.jsx)("div",{children:"-"})})]}),(0,g.jsx)("div",{className:"fixed bottom-0 right-0 flex w-full p-4 bg-white border",children:(0,g.jsx)(b,{disabled:e.disabled,onClick:function(){return e.onClick()},fullWidth:!0,children:"Catch 'Em"})})]})},k=function(e){return(0,g.jsxs)("div",{className:"mt-10 mx-10 lg:mx-40",children:[(0,g.jsxs)("div",{className:"flex",children:[(0,g.jsx)("div",{className:"flex justify-center bg-gray-200 rounded overflow-hidden",children:(0,g.jsx)("img",{src:e.data.image,alt:"pokemon-detail",style:{width:"600px"}})}),(0,g.jsxs)("div",{className:"w-full ml-4 p-4",children:[(0,g.jsx)("div",{className:"flex justify-center text-4xl text-center",children:(0,g.jsxs)("div",{children:[e.data.name," ",(0,g.jsx)("span",{className:"text-gray-500",children:(0,x.e8)(e.data.id)})]})}),(0,g.jsxs)("div",{className:"bg-red-500 rounded-lg flex py-3 px-5 my-4",children:[(0,g.jsxs)("div",{className:"w-1/2",children:[(0,g.jsxs)("div",{className:"mb-2",children:[(0,g.jsx)("div",{className:"text-white",children:"Height"}),(0,g.jsx)("div",{className:"font-semibold text-2xl",children:e.data.height})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"text-white",children:"Weight"}),(0,g.jsx)("div",{className:"font-semibold text-2xl",children:e.data.weight})]})]}),(0,g.jsx)("div",{className:"w-1/2",children:(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"text-white",children:"Ability"}),(0,g.jsx)("div",{className:"font-semibold text-2xl",children:e.data.ability})]})})]}),(0,g.jsxs)("div",{className:"mt-4",children:[(0,g.jsx)("div",{className:"text-2xl font-semibold my-2",children:"Moves"}),(0,g.jsx)("div",{className:"flex",children:e.data.moves.length?e.data.moves.map((function(e,n){return(0,g.jsx)("div",{className:"border ml-2 px-2 py-1 rounded-xl border-gray-500 text-gray-500 text-sm",children:e},n)})):(0,g.jsx)("div",{children:"-"})})]}),(0,g.jsxs)("div",{className:"mt-4",children:[(0,g.jsx)("div",{className:"text-2xl font-semibold my-2",children:"Types"}),(0,g.jsx)("div",{className:"flex",children:e.data.types.length?e.data.types.map((function(e,n){return(0,g.jsx)("div",{className:"ml-2 px-4 rounded-xl text-white",style:{backgroundColor:"".concat(h["".concat(e.toLowerCase())])},children:e},n)})):(0,g.jsx)("div",{children:"-"})})]})]})]}),(0,g.jsx)("div",{className:"flex w-full my-8 bg-white",children:(0,g.jsx)(b,{onClick:function(){return e.onClick()},disabled:e.disabled,fullWidth:!0,children:"Catch 'Em"})})]})},N=function(e){return(0,g.jsx)(f.Z,{desktop:(0,g.jsx)(k,{data:e.data,onClick:e.onClick,disabled:2!=e.probability}),mobile:(0,g.jsx)(y,{data:e.data,onClick:e.onClick,disabled:2!=e.probability})})},w=function(e){var n=(0,v.ZP)(p.Z)((function(){return{color:j.Z.valencia,backgroundColor:j.Z.white,borderColor:j.Z.valencia,"&:hover":{borderColor:j.Z.redCarpet}}}));return(0,g.jsx)("div",{className:"w-full mx-2",children:(0,g.jsx)(n,{onClick:e.onClick,fullWidth:e.fullWidth,disabled:e.disabled,variant:"outlined",children:e.children})})},C=t(657),Z=t(7645),O=t(1425),P=t(6580),E=t(8951),S=t(903),_=function(e){var n,t,r,i=(null===(n=e.value)||void 0===n?void 0:n.length)>=12;return(0,g.jsxs)(C.Z,{open:e.isOpen,children:[(0,g.jsx)(Z.Z,{children:e.title}),(0,g.jsxs)(P.Z,{children:[(0,g.jsx)(E.Z,{children:e.text}),"notification"!=e.type?(0,g.jsx)("div",{children:(0,g.jsx)(S.Z,{margin:"dense",id:"name",label:"Name",fullWidth:!0,variant:"standard",onChange:e.onInputChange,value:e.value,error:i,helperText:i?"Max ".concat(12," characters."):"".concat(12-(null===(t=e.value)||void 0===t?void 0:t.length)," characters left.")})}):null]}),(0,g.jsx)(O.Z,{children:(0,g.jsxs)("div",{className:"flex justify-end mb-2",children:[(0,g.jsx)(w,{onClick:e.onClose,children:e.onCloseText}),"notification"!=e.type?(0,g.jsx)(b,{onClick:e.onKeep,disabled:i||0==(null===(r=e.value)||void 0===r?void 0:r.length),children:e.onKeepText}):null]})})]})},D=function(e){return(0,g.jsxs)("div",{children:[(0,g.jsx)(_,{isOpen:1==e.probability,title:"".concat(e.pokemonName," is successfully catched!"),text:"Please give new name:",value:e.inputValue,onInputChange:e.onChange,onKeep:e.onKeep,onKeepText:"Keep",onClose:e.onClose,onCloseText:"Release"}),(0,g.jsx)(_,{isOpen:0==e.probability,title:"".concat(e.pokemonName," is failed to be catched!"),text:"Don't worry you can try catch 'em again",value:e.inputValue,onClose:e.onClose,onCloseText:"close",type:"notification"})]})},T=t(1163),I=(0,o.$j)((function(e){return{user:e.user.user,pokemonDetails:e.pokemon.pokemonDetails}}),(function(e){return{setUser:function(n){return e((0,l.a)(n))},retrievePokemonDetails:function(n){return e((0,d.F)(n))}}}))((function(e){var n=(0,T.useRouter)(),t=e.pokemonDetails,i=(0,s.useState)(""),o=i[0],l=i[1],d=(0,s.useState)("0"),f=d[0],h=d[1],v=(0,s.useState)(2),p=v[0],j=v[1],b=(0,s.useState)(!1),y=b[0],k=b[1],w=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n;case 2:void 0!=(r=e.sent)&&(t(r),h(r.id));case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),C=function(){j(2),l("")};return(0,s.useEffect)((function(){var n=sessionStorage.getItem(x.Y5);if(n&&(0,x.sO)(n)){var t=JSON.parse(n);e.setUser(t)}}),[]),(0,s.useEffect)((function(){var t=null===n||void 0===n?void 0:n.query.id;""!=t&&void 0!=t&&w(c.Z.retrievePokemonDetails(t),e.retrievePokemonDetails)}),[n]),(0,g.jsxs)(u.Z,{title:"Pokemon | ".concat(t.name?t.name:""),children:[(0,g.jsx)(m.Z,{onClose:function(){k(!1)},isOpen:y}),"0"!=f?(0,g.jsx)(N,{data:t,onClick:function(){var e=Math.floor(2*Math.random());j(e)},probability:p}):(0,g.jsx)("div",{className:"border py-16 flex justify-center rounded",children:"Loading Data"}),(0,g.jsx)(D,{probability:p,pokemonName:t.name,inputValue:o,onChange:function(e){l(e.currentTarget.value)},onKeep:function(){var n=e.user;if(void 0==n["".concat(t.id)])(0,x.ks)(n,t,o),k(!0);else{if(!!n["".concat(t.id)].names.includes(o))return void alert("Pokemon name already exist. Please use another one !");(0,x.O1)(n,t,o),k(!0)}C()},onClose:C})]})}))},5302:function(e,n,t){"use strict";t.d(n,{j:function(){return r},F:function(){return i}});var r=function(e){return{type:"RETRIEVE_POKEMON_LIST",payload:e}},i=function(e){return{type:"RETRIEVE_POKEMON_DETAILS",payload:e}}},2763:function(e,n,t){"use strict";t.d(n,{a:function(){return r}});var r=function(e){return{type:"SET_USER",payload:e}}},1234:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pokemon-list/[id]",function(){return t(1342)}])}},function(e){e.O(0,[963,986,775,82,774,888,179],(function(){return n=1234,e(e.s=n);var n}));var n=e.O();_N_E=n}]);