(this.webpackJsonptumbaa=this.webpackJsonptumbaa||[]).push([[0],{23:function(e,n){e.exports={id:"react-anti-patterns",publishDate:"2017-12-13",title:'"i" is Not the Key (and other React Anti-Patterns)',content:"\n    <p>\n      A group of colleagues and I gave a talk on some common React anti-patterns and how to ensure you don't fall into them.\n    </p>\n  ",linkTo:"https://prezi.com/view/7FJIZAH5YKmad8ALUKj4/"}},24:function(e,n){e.exports={id:"state-of-vue-testing",publishDate:"2018-01-18",title:"The State of Testing Vue.js",content:"\n    <p>\n      A presentation on current testing tools available for Vue.js applications (as of 2017).\n    </p>\n  ",linkTo:"https://prezi.com/view/lpLNSEfYLJwwnpJLsxqs/"}},25:function(e,n){e.exports={id:"testing-and-debugging-vue",publishDate:"2017-12-14",title:"Testing and Debugging in Vue.js",content:"\n    <p>\n      An article on debugging Vue.js applications, and an introduction to a new developer tool, Vuetron.\n    </p>\n  ",linkTo:"https://medium.com/@samtumbaa/testing-and-debugging-in-vue-js-why-we-built-vuetron-63078bdbf9"}},29:function(e,n,t){e.exports=t(44)},34:function(e,n,t){},35:function(e,n,t){},42:function(e,n,t){var a={"./headshot.jpg":43};function r(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=42},43:function(e,n,t){e.exports=t.p+"static/media/headshot.5b761a00.jpg"},44:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(18),i=t.n(o),l=t(10),c=(t(34),t(35),t(1)),m=t(6),d=c.a.span.withConfig({displayName:"Link__LinkWrapper",componentId:"sc-16wjxv4-0"})((function(){return"\n  a {\n    color: var(--teal-light);\n    font-weight: var(--font-weight-semi-bold);\n  }\n"})),s=function(e){var n=e.children,t=e.linkTo;console.log("LINK: process.env.PUBLIC_URL: ","/tumbaa");var a="http"===t.slice(0,4)?r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n):function(e){return"mailto"===e.slice(0,6)}(t)?r.a.createElement("a",{href:t,target:"_top"},n):r.a.createElement(l.b,{to:"/tumbaa"+t},n);return r.a.createElement(d,null,a)},u={vertical:"\n    display: flex;\n    flex-direction: column;\n\n    > * {\n      margin-top: 3rem;\n    }\n\n    > :last-child {\n      margin-bottom: 3rem;\n    }\n  ",horizontal:"\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n  "},p=c.a.div.withConfig({displayName:"Group__GroupWrapper",componentId:"grvyi0-0"})((function(e){var n=e.theme,t=e.center;return"\n".concat(u[n],"\n\n").concat(t?"align-items: center;":"","\n")})),g=function(e){return r.a.createElement(p,e,e.children)};g.defaultProps={theme:"vertical"};var h=g,f=function(e,n,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return"\n  color: ".concat(t,";\n  background-color: ").concat(e,";\n  border: 4px solid ").concat(e,";\n  border-radius: var(--radius-default);\n\n  &:hover {\n    color: ").concat(a||t,";\n    border-color: ").concat(n,";\n    background-color: ").concat(n,";\n  }\n")},v=function(e,n,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return"\n  color: ".concat(t,";\n  border: 4px solid ").concat(e,";\n  border-radius: var(--radius-default);\n\n  &:hover {\n    color: ").concat(a||t,";\n    border-color: ").concat(n,";\n  }\n")},b={sm:"\n    padding: 8px;\n    font-size: 1.8rem;\n  ",md:"\n    padding: 10px;\n    font-size: 2rem;\n  ",lg:"\n  padding: 15px;\n  font-size: 2.2rem;\n  "},w={goldOutline:v("var(--gold-light)","var(--gold-primary)","var(--gold-primary)","var(--gold-primary)"),goldFilled:f("var(--gold-light)","var(--gold-primary)","var(--blurple-dark)"),blurpleOutline:v("var(--blurple-light)","var(--blurple-primary)","var(--blurple-light)","var(--blurple-primary)"),blurpleFilled:f("var(--blurple-light)","var(--blurple-primary)","var(--gold-light)"),transparent:"\n    background: transparent;\n    border: none;\n    border-radius: none;\n  "},y=c.a.button.withConfig({displayName:"Button__ButtonWrapper",componentId:"sc-18zrzkb-0"})((function(e){var n=e.theme,t=e.size;return"\n  font-weight: var(--font-weight-bold);\n  color: var(--charcoal-primary);\n  cursor: pointer;\n\n  ".concat(b[t],"\n  ").concat(w[n],"\n\n  &:disabled {\n    color: var(--charcoal-light);\n    border-color: var(--charcoal-light);\n    cursor: default;\n  }\n")})),E=function(e){return r.a.createElement(y,e)};E.defaultProps={type:"button",size:"md"};var k=E,_=function(e){var n=e.imgSrc,a=e.altText,o=e.caption,i=e.linkTo,l=t(42)("./"+n),c=r.a.createElement("figure",null,r.a.createElement("img",{src:l,alt:a}),o?r.a.createElement("caption",null,o):null);return i?r.a.createElement(s,{linkTo:i},c):c};_.defaultProps={altText:""};var I=_,T=t(16),x=t(26),z={borderImage:function(e,n,t){return"\n    border-width: 0 0 ".concat(t,";\n    border-style: solid;\n    border-color: ").concat(e,";\n    -webkit-border-image: -webkit-gradient(\n      linear,\n      0 0,\n      100 % 0,\n      from(").concat(e,"),\n      to(").concat(n,")\n    );\n    -webkit-border-image: -webkit-linear-gradient(left, ").concat(e,", ").concat(n,");\n    -moz-border-image: -moz-linear-gradient(left, ").concat(e,", ").concat(n,");\n    -o-border-image: -o-linear-gradient(left, ").concat(e,", ").concat(n,");\n    border-image: -webkit-linear-gradient(left, ").concat(e,", ").concat(n,") 20;\n  ")}},j=c.a.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-48ggtw-0"})((function(e){var n=e.center;return"\n  ".concat(n?"\n  display: flex;\n  justify-content: center;\n":"","\n")})),L=function(e){var n=e.removeMarginTop,t=e.addPaddingTop,a=e.theme,r=e.borderImage;return"\n  font-family: var(--font-stack-headers);\n  font-weight: var(--font-weight-default);\n  color: var(--teal-primary);\n  width: fit-content;\n  ".concat(n?"margin-top: 0;":"","\n  ").concat(t?"padding-top: 5rem;":"","\n  ").concat(r?a.borderImage.apply(a,Object(x.a)(r)):"","\n")},O={h1:c.a.h1.withConfig({displayName:"Header__h1",componentId:"sc-48ggtw-1"})((function(e){var n=Object(T.a)({},e);return"\n      ".concat(L(n),"\n      font-weight: var(--font-weight-bold);\n      font-size: 4.8rem;\n      color: var(--teal-dark);\n  ")})),h2:c.a.h2.withConfig({displayName:"Header__h2",componentId:"sc-48ggtw-2"})((function(e){var n=Object(T.a)({},e);return"\n      ".concat(L(n),"\n      font-size: 3.6rem;\n  ")})),h3:c.a.h3.withConfig({displayName:"Header__h3",componentId:"sc-48ggtw-3"})((function(e){return"\n    ".concat(L(e),"\n    font-size: 2.8rem;\n  ")}))},P=function(e){var n=O[e.size];return e.includeWrapper?r.a.createElement(j,e,r.a.createElement(n,Object.assign({},e,{theme:z}),e.children)):r.a.createElement(n,Object.assign({},e,{theme:z}),e.children)};P.defaultProps={includeWrapper:!1};var N=P,W=c.a.p.withConfig({displayName:"Paragraph__ParagraphWrapper",componentId:"sc-15aqj4i-0"})((function(e){var n=e.center,t=e.singleSpaced;return"\n  color: var(--charcoal-primary);\n  ".concat(t?"\n  margin-top: 0;\n  margin-bottom: 0;\n":"","\n  ").concat(n?"text-align: center;":"","\n")})),C=function(e){return e.isHTML?r.a.createElement(W,Object.assign({},e,{dangerouslySetInnerHTML:{__html:e.content}})):r.a.createElement(W,e,e.content)};C.defaultProps={isHTML:!1};var H=C,S=c.a.section.withConfig({displayName:"PageWrapper",componentId:"sc-1y407to-0"})((function(){return"\n  display: flex;\n  flex-direction: column;\n  padding-top: 5rem;\n  max-width: 720px;\n  margin: auto;\n"})),A=function(e){return r.a.createElement(S,e,e.children)},M=c.a.div.withConfig({displayName:"Home__Intro",componentId:"sc-1c8acsy-0"})(["align-self:center;"]),D=c.a.div.withConfig({displayName:"Home__IntroGrid",componentId:"sc-1c8acsy-1"})(["display:grid;grid-template-columns:0.5fr 1fr;grid-column-gap:25px;margin-bottom:3rem;"]),F=function(){return r.a.createElement(A,null,r.a.createElement(M,null,r.a.createElement(D,null,r.a.createElement(I,{imgSrc:"headshot.jpg",altText:"Headshot"}),r.a.createElement("div",null,r.a.createElement(N,{size:"h1",includeWrapper:!0},"Hi, I'm Samantha."),r.a.createElement(N,{size:"h2"},"I ",r.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f")," JavaScript."),r.a.createElement(N,{size:"h3"},"... and teaching!"))),r.a.createElement(h,{theme:"horizontal"},r.a.createElement(s,{linkTo:"https://github.com/samanthasalley"},r.a.createElement(k,{theme:"blurpleOutline",size:"sm"},"GitHub")),r.a.createElement(s,{linkTo:"https://linkedin.com/in/samanthasalley"},r.a.createElement(k,{theme:"blurpleOutline",size:"sm"},"LinkedIn")),r.a.createElement(s,{linkTo:"mailto:samanthasalley+website@gmail.com"},r.a.createElement(k,{theme:"blurpleOutline",size:"sm"},"Email")))),r.a.createElement(h,{theme:"vertical",center:!0},r.a.createElement(H,{isHTML:!0,content:"I am an experienced software engineer with 7+ years in the industry. I enjoy everything from small bug fixes to platform architecture, and am especially passionate about mentoring other engineers. I have a particular interest in the ever-changing world of asynchronicity within the JavaScript ecosystem, and have led workshops as well as given in-depth lectures on this [and many other] concepts.\n<br />\n<br />\nOutside of coding, I very much enjoy snowboarding, traveling, and appealing to my inner Ron Swanson (sitting in my leather chair, reading, and drinking Scotch)."}),r.a.createElement(s,{linkTo:"/teaching"},r.a.createElement(k,{theme:"blurpleFilled",size:"lg"},"Watch Me Teach!")),r.a.createElement(s,{linkTo:"/blog"},r.a.createElement(k,{theme:"blurpleFilled",size:"lg"},"Things I've Done!"))))},J=c.a.div.withConfig({displayName:"Teaching__Intro",componentId:"qj4079-0"})(["align-self:center;"]),B=function(){return r.a.createElement(A,null,r.a.createElement(J,null,r.a.createElement(N,{size:"h1",includeWrapper:!0},"Watch Me Teach!")),r.a.createElement(h,{theme:"vertical",center:!0},r.a.createElement(N,{size:"h2"},"JavaScript - The Hard Parts"),r.a.createElement(s,{linkTo:"https://www.youtube.com/watch?v=KpGmW_P5Ygg"},r.a.createElement(k,{theme:"goldFilled",size:"lg"},"Async, Event Loop, & Promises - Part 1")),r.a.createElement(s,{linkTo:"https://www.youtube.com/watch?v=O_BYLu0POO0"},r.a.createElement(k,{theme:"goldFilled",size:"lg"},"Async, Event Loop, & Promises - Part 2"))))},U=t(23),V=t.n(U),R=t(24),G=t.n(R),K=t(25),Y=t.n(K),q={reactAntiPatterns:V.a,stateOfVueTesting:G.a,testingAndDebuggingVue:Y.a},Z=c.a.section.withConfig({displayName:"Section__SectionWrapper",componentId:"sc-1ylh42w-0"})((function(){return"\n  padding: 1rem 2rem;\n  background: white;\n  border: var(--border-default);\n  border-color: var(--gray-dark);\n  border-radius: var(--radius-default);\n  box-shadow: var(--box-shadow-default) var(--gray-primary);\n"})),$=function(e){return r.a.createElement(Z,e,e.children)},Q=function(e){var n=e.id,t=e.title,a=e.content,o=e.linkTo;return r.a.createElement(h,null,r.a.createElement($,{key:n},r.a.createElement(N,{size:"h2",removeMarginTop:!0},t),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),o&&r.a.createElement(s,{linkTo:o},"Read More")))},X=function(){var e=Object.values(q).map((function(e){return r.a.createElement(Q,e)}));return r.a.createElement(A,null,r.a.createElement(N,{size:"h1"},"Public Works"),e)},ee=c.a.div.withConfig({displayName:"App__Wrapper",componentId:"sc-1ne3zck-0"})(["min-height:100vh;padding:5rem 15rem;background:var(--gray-light);"]),ne=function(){return console.log("process.env.PUBLIC_URL: ","/tumbaa"),r.a.createElement(ee,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/tumbaa/",component:F}),r.a.createElement(m.a,{exact:!0,path:"/tumbaa/teaching",component:B}),r.a.createElement(m.a,{exact:!0,path:"/tumbaa/blog",component:X})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(l.a,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.89a9b5e8.chunk.js.map