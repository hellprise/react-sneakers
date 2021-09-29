(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{19:function(e,t,r){e.exports={overlay:"Drawer_overlay__SojAo",overlayVisible:"Drawer_overlayVisible__1VGkg",drawer:"Drawer_drawer__1z6V1",items:"Drawer_items__18U4m"}},20:function(e,t,r){e.exports={card:"Card_card__393zM",plus:"Card_plus__1aTpd",favorite:"Card_favorite__2phsA"}},41:function(e,t,r){},72:function(e,t,r){"use strict";r.r(t);var c=r(0),a=r.n(c),n=r(14),s=r(33),i=r.n(s),o=(r(41),r(42),r(11)),l=r(12),d=r(8),j=r.n(d),u=r(13),b=r(4),x=r(2),m=r(5),f=r.n(m),h=a.a.createContext({}),p=function(){var e=a.a.useContext(h),t=e.cartItems,r=e.setCartItems,c=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:r,totalPrice:c}},O=r(1);var v=function(e){var t=p().totalPrice;return Object(O.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(O.jsx)(n.b,{to:"/",children:Object(O.jsxs)("div",{className:"d-flex align-center",children:[Object(O.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"logo"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(O.jsx)("p",{className:"opacity-3",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(O.jsxs)("ul",{className:"d-flex",children:[Object(O.jsxs)("li",{onClick:e.onClickCart,className:"mr-30 cu-p",children:[Object(O.jsx)("img",{src:"img/cart.svg",alt:"cart user"}),Object(O.jsxs)("span",{children:[t," UAH"]})]}),Object(O.jsx)("li",{className:"mr-20 cu-p",children:Object(O.jsx)(n.b,{to:"favorites",children:Object(O.jsx)("img",{src:"img/heart.svg",alt:"favorite"})})}),Object(O.jsx)(n.b,{to:"orders",children:Object(O.jsx)("img",{src:"img/user.svg",alt:"profile"})})]})]})},g=function(e){var t=e.title,r=e.image,c=e.description,n=a.a.useContext(h).setCartOpened;return Object(O.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(O.jsx)("img",{className:"mb-20",width:"120px",src:r,alt:"don't have item in cart"}),Object(O.jsx)("h2",{children:t}),Object(O.jsx)("p",{className:"opacity-6",children:c}),Object(O.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(O.jsx)("img",{src:"img/arrow.svg",alt:"arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},N=r(19),k=r.n(N),w=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var C=function(e){var t=e.onClose,r=e.onRemove,c=e.items,n=void 0===c?[]:c,s=e.opened,i=p(),o=i.cartItems,l=i.setCartItems,d=i.totalPrice,x=a.a.useState(null),m=Object(b.a)(x,2),h=m[0],v=m[1],N=a.a.useState(!1),C=Object(b.a)(N,2),y=C[0],I=C[1],_=a.a.useState(!1),S=Object(b.a)(_,2),A=S[0],T=S[1],F=function(){var e=Object(u.a)(j.a.mark((function e(){var t,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,f.a.post("https://614f4927b4f6d30017b48544.mockapi.io/orders",{items:o});case 4:t=e.sent,r=t.data,v(r.id),I(!0),l([]),c=0;case 10:if(!(c<o.length)){e.next=19;break}return a=o[c],e.next=14,f.a.delete("https://614f4927b4f6d30017b48544.mockapi.io/cart/"+a.id);case 14:return e.next=16,w(1e3);case 16:c++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430! :(");case 24:T(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"".concat(k.a.overlay," ").concat(s?k.a.overlayVisible:""),children:Object(O.jsxs)("div",{className:k.a.drawer,children:[Object(O.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430"," ",Object(O.jsx)("img",{onClick:t,className:"cu-p",src:"img/btn-remove.svg",alt:"close cart"})]}),n.length>0?Object(O.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(O.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(O.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(O.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(O.jsxs)("div",{className:"mr-20 flex",children:[Object(O.jsx)("p",{className:"mb-5",children:e.title}),Object(O.jsxs)("b",{children:[e.price," uah"]})]}),Object(O.jsx)("img",{onClick:function(){return r(e.id)},className:"removeBtn",src:"img/btn-remove.svg",alt:"remove item"})]},e.id)}))}),Object(O.jsxs)("div",{className:"cartTotalBlock",children:[Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u0418\u0442\u043e\u0433:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[d," uah"]})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[d/100*5," uah"]})]})]}),Object(O.jsxs)("button",{disabled:A,onClick:F,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(O.jsx)("img",{src:"img/arrow.svg",alt:"arrow"})]})]})]}):Object(O.jsx)(g,{title:y?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:y?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u2116".concat(h," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437",image:y?"img/complete-order.jpg":"img/empty-cart.jpg"})]})})},y=r(36),I=r(20),_=r.n(I);var S=function(e){var t=e.id,r=e.imageUrl,c=e.title,n=e.price,s=e.onPlus,i=e.onFavorite,o=e.favorited,l=void 0!==o&&o,d=e.loading,j=void 0!==d&&d,u=a.a.useContext(h).isItemAdded,x=a.a.useState(l),m=Object(b.a)(x,2),f=m[0],p=m[1],v={id:t,parentId:t,title:c,imageUrl:r,price:n};return Object(O.jsx)("div",{className:_.a.card,children:j?Object(O.jsxs)(y.a,{speed:2,width:155,height:250,viewBox:"0 0 150 250",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(O.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(O.jsx)("rect",{x:"0",y:"165",rx:"5",ry:"5",width:"155",height:"15"}),Object(O.jsx)("rect",{x:"118",y:"220",rx:"5",ry:"5",width:"32",height:"32"}),Object(O.jsx)("rect",{x:"0",y:"225",rx:"5",ry:"5",width:"80",height:"25"}),Object(O.jsx)("rect",{x:"0",y:"190",rx:"5",ry:"5",width:"100",height:"15"})]}):Object(O.jsxs)(O.Fragment,{children:[i&&Object(O.jsx)("div",{className:_.a.favorite,onClick:function(){i(v),p(!f)},children:Object(O.jsx)("img",{src:f?"img/liked.svg":"img/unliked.svg",alt:"unliked"})}),Object(O.jsx)("img",{width:"100%",height:135,src:r,alt:"sneakers"}),Object(O.jsx)("h5",{children:c}),Object(O.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(O.jsxs)("b",{children:[n," uah."]})]}),s&&Object(O.jsx)("img",{className:_.a.plus,onClick:function(){s(v)},src:u(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"plus"})]})]})})};var A=function(e){var t=e.items,r=e.searchValue,c=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,i=e.isLoading;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsxs)("div",{className:"d-flex align-center mb-40 justify-between",children:[Object(O.jsx)("h1",{children:r?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(r,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(O.jsxs)("div",{className:"search-block d-flex",children:[Object(O.jsx)("img",{src:"img/search.svg",alt:"search"}),r&&Object(O.jsx)("img",{onClick:function(){return c("")},className:"clear cu-p",src:"img/btn-remove.svg",alt:"clear filter"}),Object(O.jsx)("input",{onChange:a,value:r,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})]})]}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())}));return(i?Object(l.a)(Array(10)):e).map((function(e,t){return Object(O.jsx)(S,Object(o.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:i},e),t)}))}()})]})};var T=function(){var e=a.a.useContext(h),t=e.favorites,r=e.onAddToFavorite;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsx)("div",{className:"d-flex align-center mb-40 justify-between",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(O.jsx)(S,Object(o.a)({favorited:!0,onFavorite:r},e),t)}))})]})};var F=function(){var e=a.a.useContext(h),t=(e.onAddToFavorite,e.onAddToCart,a.a.useState([])),r=Object(b.a)(t,2),c=r[0],n=r[1],s=a.a.useState(!0),i=Object(b.a)(s,2),d=i[0],x=i[1];return a.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://614f4927b4f6d30017b48544.mockapi.io/orders");case 3:t=e.sent,r=t.data,n(r.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),x(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432!"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsx)("div",{className:"d-flex align-center mb-40 justify-between",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:(d?Object(l.a)(Array(10)):c).map((function(e,t){return Object(O.jsx)(S,Object(o.a)({loading:d},e),t)}))})]})};var V=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),r=t[0],c=t[1],n=a.a.useState([]),s=Object(b.a)(n,2),i=s[0],d=s[1],m=a.a.useState([]),p=Object(b.a)(m,2),g=p[0],N=p[1],k=a.a.useState(""),w=Object(b.a)(k,2),y=w[0],I=w[1],_=a.a.useState(!1),S=Object(b.a)(_,2),V=S[0],P=S[1],B=a.a.useState(!0),U=Object(b.a)(B,2),D=U[0],E=U[1];a.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,r,a,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([f.a.get("https://614f4927b4f6d30017b48544.mockapi.io/cart"),f.a.get("https://614f4927b4f6d30017b48544.mockapi.io/favorites"),f.a.get("https://614f4927b4f6d30017b48544.mockapi.io/items")]);case 3:t=e.sent,r=Object(b.a)(t,3),a=r[0],n=r[1],s=r[2],E(!1),d(a.data),N(n.data),c(s.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445!");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var L=function(){var e=Object(u.a)(j.a.mark((function e(t){var r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,f.a.delete("https://614f4927b4f6d30017b48544.mockapi.io/cart/".concat(r.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=11,f.a.post("https://614f4927b4f6d30017b48544.mockapi.io/cart",t);case 11:c=e.sent,a=c.data,d((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(o.a)(Object(o.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443..."),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(j.a.mark((function e(t){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!g.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}f.a.delete("https://614f4927b4f6d30017b48544.mockapi.io/favorites/".concat(t.id)),N((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,f.a.post("https://614f4927b4f6d30017b48544.mockapi.io/favorites",t);case 8:r=e.sent,c=r.data,N((function(e){return[].concat(Object(l.a)(e),[c])}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0444\u0430\u0432\u043e\u0440\u0438\u0442\u044b");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(h.Provider,{value:{items:r,cartItems:i,favorites:g,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:R,onAddToCart:L,setCartOpened:P,setCartItems:d},children:Object(O.jsxs)("div",{className:"wrapper clear",children:[Object(O.jsx)(C,{items:i,onClose:function(){return P(!1)},onRemove:function(e){try{f.a.delete("https://614f4927b4f6d30017b48544.mockapi.io/cart/".concat(e)),d((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b!"),console.error(t)}},opened:V}),Object(O.jsx)(v,{onClickCart:function(){return P(!0)}}),Object(O.jsx)(x.a,{path:"",exact:!0,children:Object(O.jsx)(A,{items:r,cartItems:i,searchValue:y,setSearchValue:I,onChangeSearchInput:function(e){I(e.target.value)},onAddToFavorite:R,onAddToCart:L,isLoading:D})}),Object(O.jsx)(x.a,{path:"/favorites",exact:!0,children:Object(O.jsx)(T,{})}),Object(O.jsx)(x.a,{path:"/orders",exact:!0,children:Object(O.jsx)(F,{})})]})})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(n.a,{children:Object(O.jsx)(V,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.127d0153.chunk.js.map