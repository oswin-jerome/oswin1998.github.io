(this.webpackJsonppublic=this.webpackJsonppublic||[]).push([[0],{21:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},28:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},29:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(12),r=a.n(l),s=(a(26),a(2)),c=a.n(s),i=a(13),m=a(14),u=a(15),d=a(19),h=a(16),p=a(20),v=(a(28),a(29),a(17),a(18)),w=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={size:500,showLoader:!1,showDownload:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("nav",null,o.a.createElement("p",{className:"logo"},"Image compressor ")),this.state.showLoader?o.a.createElement("div",{className:"loader"},o.a.createElement("div",{class:"lds-grid"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement("h1",{className:"h"},"Compressing")):null,o.a.createElement("div",{className:"conatiner"},o.a.createElement("form",{className:"form",id:"frm",enctype:"multipart/form-data",method:"POST",action:"/"},o.a.createElement("input",{type:"number",name:"size",id:"size",placeholder:"Picture size in px ",onChange:function(t){console.log(t.target.value),e.setState({size:t.target.value})}}),o.a.createElement("input",{type:"file",name:"image",id:"image",onChange:function(t){console.log(t.target.files[0]),e.setState({img:t.target.files[0],showDownload:!1,showLoader:!1})}}),this.state.showDownload?null:o.a.createElement("input",{type:"button",value:"submit",className:"convert",onClick:function(){var t=Object(i.a)(c.a.mark((function t(a){var n,o,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({showLoader:!0}),n={maxSizeMB:e.state.size/1e3,useWebWorker:!0},t.prev=2,t.next=5,Object(v.a)(e.state.img,n);case 5:o=t.sent,console.log("err"),console.log(o),l=URL.createObjectURL(o),e.setState({link:l,download:o.name,showDownload:!0,showLoader:!1}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}()}),this.state.showDownload?o.a.createElement("a",{className:"download",href:this.state.link,download:"compressed-"+this.state.download},"DOWNLOAD"):null)))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.67f5c036.chunk.js.map