(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var i=c(1),r=c.n(i),n=c(3),s=c.n(n),a=(c(13),c(7)),d=c(2),l=c(8),o=c(0),j=function(e){var t=e.countCartItems;return Object(o.jsxs)("header",{className:"row block center",children:[Object(o.jsx)("div",{children:Object(o.jsx)("a",{href:"#",children:Object(o.jsx)("h1",{children:"MYshop"})})}),Object(o.jsx)("div",{children:Object(o.jsxs)("a",{href:"#/cart",children:["Cart"," ",t?Object(o.jsx)("button",{className:"badge",children:t}):" "]})})]})};function b(e){var t=e.product,c=e.onAdd;return Object(o.jsxs)("div",{className:"productBox",children:[Object(o.jsx)("img",{className:"small",src:t.image,alt:t.name}),Object(o.jsx)("h3",{children:t.name}),Object(o.jsxs)("div",{children:["\u20b9",t.price]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){return c(t)},className:"BTNstyle",children:"Add to Cart"})})]})}var h=function(e){var t=e.products,c=e.onAdd;return Object(o.jsxs)("main",{className:"block col-2",children:[Object(o.jsx)("h2",{children:"Products"}),Object(o.jsx)("div",{className:"row",children:t.map((function(e){return Object(o.jsx)(b,{product:e,onAdd:c},e.id)}))})]})},m=function(e){var t=e.cartItems,c=e.onAdd,i=e.onRemove,r=t.reduce((function(e,t){return e+t.price*t.qty}),0),n=.05*r,s=r>500?0:50,a=r+n+s;return Object(o.jsxs)("aside",{className:"block col-1",children:[Object(o.jsx)("h2",{children:"Cart Items"}),Object(o.jsx)("div",{children:0===t.length&&Object(o.jsx)("div",{children:"Cart is Empty"})}),t.map((function(e){return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-2",children:e.name}),Object(o.jsxs)("div",{className:"col-2",children:[Object(o.jsx)("button",{onClick:function(){return c(e)},className:"add",children:"+"}),Object(o.jsx)("button",{onClick:function(){return i(e)},className:"remove",children:"-"})]}),Object(o.jsxs)("div",{className:"col-2 text-right",children:[e.qty," x \u20b9",e.price.toFixed(2)]})]},e.id)})),0!==t.length&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-2",children:"Items Price"}),Object(o.jsxs)("div",{className:"col-1 text-right",children:["\u20b9",r.toFixed(2)]})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-2",children:"Tax Price"}),Object(o.jsxs)("div",{className:"col-1 text-right",children:["\u20b9",n.toFixed(2)]})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-2",children:"Shipping Price"}),Object(o.jsxs)("div",{className:"col-1 text-right",children:["\u20b9",s.toFixed(2)]})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-2",children:Object(o.jsx)("strong",{children:"Total Price"})}),Object(o.jsx)("div",{className:"col-1 text-right",children:Object(o.jsxs)("strong",{children:["\u20b9",a.toFixed(2)]})})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("button",{onClick:function(){return alert("Implement Checkout")},children:"Checkout"})})]})]})},u={products:[{id:"1",name:"Cap",price:499,image:"https://www.ibm.com/brand/systems/developer/static/69c089fe4fc9c472116c705fc8398e35/acfc1/03_IBM-Dev-BSBS-Hat-Black.png"},{id:"2",name:"T-Shirt",price:999,image:"https://ih1.redbubble.net/image.668438562.1961/ssrco,slim_fit_t_shirt,mens,fafafa:ca443f4786,front,square_product,600x600.u2.jpg"},{id:"3",name:"Mask",price:350,image:"https://ih1.redbubble.net/image.1441004422.5654/ur,mask_flatlay_front,product,600x600.jpg"},{id:"4",name:"Sticker",price:250,image:"https://ih1.redbubble.net/image.773875293.0470/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"},{id:"5",name:"Scarf",price:799,image:"https://ih1.redbubble.net/image.357694740.9694/scarf,x1050-pad,1000x1000,f8f8f8.u2.jpg"},{id:"6",name:"Laptop Skin",price:699,image:"https://ih1.redbubble.net/image.516923736.0581/pd,x450,macbook_air_13-pad,600x600,f8f8f8.u2.jpg"},{id:"7",name:"Notebook",price:350,image:"https://ih1.redbubble.net/image.1489568828.3003/sn,x1000-pad,1000x1000,f8f8f8.jpg"},{id:"8",name:"iPhone Cover",price:659,image:"https://ih1.redbubble.net/image.490376638.5557/icr,iphone_12_soft,back,a,x1000-pad,1000x1000,f8f8f8.jpg"},{id:"9",name:"Duvet Cover",price:3e3,image:"https://ih1.redbubble.net/image.555534306.7144/dc,1000x1000,twin,bed.u2.jpg"},{id:"10",name:"Mug",price:549,image:"https://ih1.redbubble.net/image.921528557.7514/mug,tall,x1000,right-pad,1000x1000,f8f8f8.jpg"},{id:"11",name:"Bottle",price:849,image:"https://ih1.redbubble.net/image.1008232940.7655/ur,water_bottle_metal_lid_on,square,1000x1000.2.jpg"},{id:"12",name:"Poster",price:100,image:"https://ih1.redbubble.net/image.561326186.8541/fposter,small,wall_texture,product,750x1000.u9.jpg"}]};var x=function(){var e=u.products,t=Object(i.useState)([]),c=Object(l.a)(t,2),r=c[0],n=c[1],s=function(e){console.log(e),console.log(r);var t=r.find((function(t){return t.id===e.id}));n(t?r.map((function(c){return c.id===e.id?Object(d.a)(Object(d.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(a.a)(r),[Object(d.a)(Object(d.a)({},e),{},{qty:1})]))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{countCartItems:r.length}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(h,{products:e,onAdd:s}),Object(o.jsx)(m,{cartItems:r,onAdd:s,onRemove:function(e){var t=r.find((function(t){return t.id===e.id}));1===t.qty?n(r.filter((function(t){return t.id!==e.id}))):n(r.map((function(c){return c.id===e.id?Object(d.a)(Object(d.a)({},t),{},{qty:t.qty-1}):c})))}})]})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),i(e),r(e),n(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.7f28bdf4.chunk.js.map