(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(60),l=n.n(o),c=(n(73),n(61)),i=n(62),s=n(66),u=n(63),d=n(67),m=n(131),f=function(e){var t=e.nameFood,n=e.priceFood,a=e.add;return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement("div",{class:"d-flex "},r.a.createElement("div",{class:" w-50 p-2"}," ",t,"  "),r.a.createElement("div",{class:" w-50 p-2"}," s/.",n,"   "),r.a.createElement("div",{class:" w-50 p-2"}," ",r.a.createElement("i",{class:"fas fa-plus",onClick:function(){return a(t,n,t)}})))))},p=n(34);p.initializeApp({apiKey:"AIzaSyBiLzAl05Fsx4v5xMqsT8_IoWxR1KBmITc",authDomain:"burguerqueen-92dd7.firebaseapp.com",databaseURL:"https://burguerqueen-92dd7.firebaseio.com",projectId:"burguerqueen-92dd7",storageBucket:"burguerqueen-92dd7.appspot.com",messagingSenderId:"184843712728"}),p.firestore().settings({timestampsInSnapshots:!0});var h=p,E=n(132),v=n(133),g=n(134),b=function(){return r.a.createElement(E.a,null,r.a.createElement(v.a,{xs:"12"},r.a.createElement(g.a,null,r.a.createElement("h1",{className:"display-5"},"Burguer Queen  ",r.a.createElement("i",{class:"fas fa-hamburger"})))))},w=(n(129),n(135)),k=n(136),y=n(137),C=n(138),T=n(139),O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onCollectionUpdate=function(e){e.forEach(function(e){n.setState({food:e.data()})})},n.handleClick=function(){h.firestore().collection("orders").add({userName:n.state.userName,countTotal:n.countTotal,list:n.state.list})},n.handleChange=function(e){n.setState({typefood:e.target.name})},n.handleAddItem=function(e,t,a){var r=n.state.list;r.find(function(e){return e.id===a})?(r.forEach(function(e){e.id===a&&(e.count++,e.price=t*e.count)}),n.sumTotalOrder(r)):(r.push({item:e,price:t,id:a,count:1}),r.forEach(function(e){e.id===a&&(e.price=t*e.count)}),n.sumTotalOrder(r))},n.deleteOrder=function(e,t){n.state.list.splice(e,1),n.setState({countTotal:n.countTotal-parseInt(n.price)})},n.sumTotalOrder=function(e){var t=0;e.forEach(function(e){var n=e.price;return t+=n}),n.countTotal=t,n.setState({list:e,countTotal:n.countTotal+parseInt(n.price)})},n.userName=function(e){n.setState({userName:e.target.value})},n.ref=h.firestore().collection("food"),n.unsubscribe=null,n.state={food:{},typefood:"breakfast",userName:"",countTotal:0,list:[]},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"render",value:function(){var e=this,t=this.state,n=t.typefood,a=t.food,o=t.list,l=Object.keys(a);return r.a.createElement(w.a,{class:"container-fluid"},r.a.createElement(b,null),r.a.createElement(E.a,null,r.a.createElement(v.a,{sm:""},r.a.createElement("div",{class:"d-flex"},r.a.createElement("div",{class:"p-2"}," ",r.a.createElement(k.a,{name:"breakfast",onClick:this.handleChange},"Desayuno")),r.a.createElement("div",{class:"p-2"},r.a.createElement(k.a,{name:"dinner",onClick:this.handleChange},"Almuerzo")," ")))),r.a.createElement("br",null),r.a.createElement(E.a,null,r.a.createElement(v.a,{sm:"4"},r.a.createElement(y.a,null,l.length?a[n].map(function(t){var n=t.item,a=t.price;return r.a.createElement(f,{nameFood:n,priceFood:a,key:n,add:e.handleAddItem})}):null)),r.a.createElement(v.a,{sm:"8"},r.a.createElement("div",{class:"d-flex"},r.a.createElement("div",{class:"w-50 p-2"},r.a.createElement(C.a,{placeholder:"nombre",type:"text",onChange:this.userName,value:this.userName})),r.a.createElement("div",{class:"w-50 p-2"},r.a.createElement(k.a,{onClick:this.handleClick},"Enviar"))),r.a.createElement("br",null),r.a.createElement(T.a,{hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Producto"),r.a.createElement("th",{scope:"col"},"Precio"),r.a.createElement("th",{scope:"col"},"Cantidad"))),r.a.createElement("tbody",null,o.map(function(t,n){var a=t.item,o=t.price,l=t.count;return r.a.createElement("tr",null,r.a.createElement("td",null," ",a),r.a.createElement("td",null,"s/.",o),r.a.createElement("td",null,l,"  "),r.a.createElement("td",null,r.a.createElement("i",{className:"fas fa-times",onClick:function(){return e.deleteOrder(n,a.id,o)}})," "))}),r.a.createElement("tr",null,r.a.createElement("td",null,"Total"),r.a.createElement("td",null,"s/. ",this.countTotal),r.a.createElement("td",null),r.a.createElement("td",null)))))))}}]),t}(a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(O,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sandraortiz/lim-2018-01-burger-queen",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/sandraortiz/lim-2018-01-burger-queen","/service-worker.js");S?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):A(t,e)})}}()},68:function(e,t,n){e.exports=n(130)},73:function(e,t,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.88e99a81.chunk.js.map