(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1oc3":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("TSYQ"),c=a.n(i),o=a("vOnD"),l=a("G85M"),s=a.n(l),d=o.a.div.withConfig({displayName:"Hero__Wrapper",componentId:"y2bpdt-0"})(["position:relative;width:100vw;min-height:",";height:",";overflow:hidden;.video-wrapper{height:100%;top:0;left:0;overflow:hidden;position:absolute;width:100%;z-index:0;video{width:100%;height:100%;object-fit:cover;}}.content{background:rgba(17,17,17,.2);width:100%;height:100%;display:flex;justify-content:center;align-items:center;}&:before{background:url(",");",' @media screen and (max-width:991px){content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-attachment:fixed;background-repeat:no-repeat;background-size:cover;background-position:center center;}}.chevron-down{position:absolute;bottom:30px;left:50%;transform:translate(-50%);cursor:pointer;}'],(function(e){return e.isBig?"100vh":"75vh"}),(function(e){return e.isVideo?"100vh":"none"}),(function(e){return e.bgImage}),(function(e){return!e.isVideo&&'\n            content: "";\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 75vh;\n            object-fit: cover;\n            background-attachment: fixed;\n            background-repeat: no-repeat;\n            background-size: cover;\n            background-position: center center;\n            // filter: brightness(60%);\n        '})),m=function(e){var t=e.isBig,a=e.img,i=e.title,o=e.subtitle,l=e.children,m=e.isVideo,u=Object(n.useRef)(null);return Object(n.useEffect)((function(){u&&u.current&&(u.current.play(),u.current.oncanplaythrough=function(){u.current.muted=!0,u.current.play()})}),[u]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(d,{bgImage:a,isBig:t,isVideo:m,className:c()("header-wrapper")},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"video-wrapper"},r.a.createElement("video",{ref:u,controls:!1,muted:!0,autoPlay:!0,loop:!0,width:"100%"},r.a.createElement("source",{src:s.a,type:"video/mp4"})))),r.a.createElement("div",{className:"content"},r.a.createElement("div",null,r.a.createElement("h1",null,i),r.a.createElement("hr",{className:"my-4 white"}),o&&r.a.createElement("p",{className:"text-heading"},o),r.a.createElement("div",null,l),t&&r.a.createElement("a",{href:"#chevron",className:"chevron-down",id:"chevron"},r.a.createElement("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",class:"bi bi-chevron-down",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}))))))))};m.defaultProps={isBig:!1,img:"",title:"",subtitle:""},t.a=m},G85M:function(e,t,a){e.exports=a.p+"static/hero-89910070c1d9e4e314025d5707b3cb7c.mp4"},zIjM:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return l}));var n=a("q1tI"),r=a.n(n),i=a("7oih"),c=a("1oc3"),o=a("EwW3"),l="3635145071";t.default=Object(o.a)((function(e){var t=e.data,a=e.t,o=Object(n.useState)(0),l=o[0],s=o[1];Object(n.useEffect)((function(){window.location.hash&&s(window.location.hash.slice(1))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:a("site.pages.FaqPage.meta.title"),description:a("site.pages.FaqPage.meta.description")},r.a.createElement(c.a,{isDark:!0,title:a("site.pages.FaqPage.title"),alt:a("site.pages.FaqPage.headerAlt"),img:t.header.childImageSharp.fluid.src}),r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{id:"accordion"},a("site.pages.FaqPage.list").map((function(e,t){return r.a.createElement("div",{className:"card",key:t},r.a.createElement("div",{id:t,className:"fixanchor"}),r.a.createElement("div",{className:"card-header py-3 text-center",id:"heading"+t,"data-toggle":"collapse","data-target":"#collapse"+t,"aria-expanded":t==l,"aria-controls":"collapse"+t},r.a.createElement("h5",{className:"mb-0"},r.a.createElement("span",{className:"faq-question"},e.question))),r.a.createElement("div",{id:"collapse"+t,className:"collapse "+(t==l&&"show"),"aria-labelledby":"heading"+t,"data-parent":"#accordion"},r.a.createElement("div",{className:"card-body",dangerouslySetInnerHTML:(n=e.text,{__html:""+a(n)})})));var n}))))))}))}}]);
//# sourceMappingURL=component---src-pages-faq-js-fe4c3a4686635f511b6b.js.map