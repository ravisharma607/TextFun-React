(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(5),r=a.n(c),o=(a(10),a(2)),l=(a(11),a(4)),i=a.n(l),d=a(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsxs)("a",{className:"navbar-brand",href:"#",children:[Object(d.jsx)("span",{children:"T"}),"ext",Object(d.jsx)("span",{children:"F"}),"un"]}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),Object(d.jsx)("div",{className:"modeControl",children:Object(d.jsxs)("div",{className:"custom-control d-flex custom-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(d.jsx)("input",{style:{height:"42px",width:"30px"},type:"checkbox",className:"custom-control-input mx-2 mt-2",onClick:e.toggleMoe,id:"customSwitches"}),Object(d.jsxs)("label",{className:"mode custom-control-label",htmlFor:"customSwitches",style:{color:"dark"===e.mode?"cyan":"white"},children:["m",Object(d.jsx)("span",{style:{color:"dark"===e.mode?"slateblue":"blue",fontWeight:"bolder"},children:"O"}),"de"]})]})})]})]})})}function u(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),s=a[0],c=a[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"cyan":"black"},children:[Object(d.jsx)("h3",{children:e.heading}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"white":"black",color:"dark"===e.mode?"black":"white"},id:"mybox",rows:"8",value:s,onChange:function(e){c(e.target.value)}})}),Object(d.jsx)("button",{disabled:0===s.length,className:"btn btn-primary my-1",onClick:function(){var t=s.toUpperCase();c(t),e.showAlert("Converted TO UpperCase","success")},children:"Convert To UpperCase"}),Object(d.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var t=s.toLowerCase();c(t),e.showAlert("Converted TO LowerCase","success")},children:"Convert To LowerCase"}),Object(d.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-2 my-1",onClick:function(){var t=s.replace(/\s+/g," ").trim();c(t),e.showAlert("Extra Spaces Has Been Removed","success")},children:"Remove Extra Spaces"}),Object(d.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-2 my-1",id:"getText",onClick:function(){var t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),document.getElementById("getText").innerHTML="Copied",e.showAlert("Copied To ClipBoard","success")},children:"Copy Text"}),Object(d.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-2 my-1",onClick:function(){c("")},children:"Clear Text"})]}),Object(d.jsx)("hr",{style:{color:"dark"===e.mode?"cyan":"black"}}),Object(d.jsxs)("div",{className:"container my-1",style:{color:"dark"===e.mode?"cyan":"black"},children:[Object(d.jsx)("h1",{children:"Your Text Summary"}),Object(d.jsxs)("p",{children:[s.split(" ").filter((function(e){return 0!==e.length})).length," words, ",s.length," Characters"]}),Object(d.jsxs)("p",{children:[.008*s.split(" ").filter((function(e){return 0!==e.length})).length," Minutes To Read"]})]}),Object(d.jsx)("hr",{style:{color:"dark"===e.mode?"cyan":"black"}})]})}function m(e){return Object(d.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(d.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," "]}),e.alert.msg]})})}b.prototype={title:i.a.string.isRequired,aboutText:i.a.string.isRequired},b.defaultProps={title:"Your Title here",aboutText:"About here"};var j=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(null),r=Object(o.a)(c,2),l=r[0],i=r[1],j=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),1500)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{aboutText:"About Us",services:"Our Services",mode:a,toggleMoe:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="black",j("Dark Mode Has Been Enabled","success")):(s("light"),document.body.style.backgroundColor="white",j("Light Mode Has Been Enabled","success"))}}),Object(d.jsx)(m,{alert:l}),Object(d.jsx)("div",{className:"container my-3",children:Object(d.jsx)(u,{heading:"Try TextFun - Word Counter, Character Counter, Remove Extra Spaces and Many More.",mode:a,showAlert:j})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.ff44a321.chunk.js.map