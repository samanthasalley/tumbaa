(this.webpackJsonptumbaa=this.webpackJsonptumbaa||[]).push([[0],{24:function(e,n){e.exports={id:"react-anti-patterns",publishDate:"2017-12-13",title:'"i" is Not the Key (and other React Anti-Patterns)',content:"\n    <p>\n      A group of colleagues and I gave a talk on some common React anti-patterns and how to ensure you don't fall into them.\n    </p>\n  ",linkTo:"https://prezi.com/view/7FJIZAH5YKmad8ALUKj4/"}},25:function(e,n){e.exports={id:"state-of-vue-testing",publishDate:"2018-01-18",title:"The State of Testing Vue.js",content:"\n    <p>\n      A presentation on current testing tools available for Vue.js applications (as of 2017).\n    </p>\n  ",linkTo:"https://prezi.com/view/lpLNSEfYLJwwnpJLsxqs/"}},26:function(e,n){e.exports={id:"testing-and-debugging-vue",publishDate:"2017-12-14",title:"Testing and Debugging in Vue.js",content:"\n    <p>\n      An article on debugging Vue.js applications, and an introduction to a new developer tool, Vuetron.\n    </p>\n  ",linkTo:"https://medium.com/@samtumbaa/testing-and-debugging-in-vue-js-why-we-built-vuetron-63078bdbf9"}},30:function(e,n,t){e.exports=t(46)},35:function(e,n,t){},36:function(e,n,t){},43:function(e,n,t){var a={"./headshot.jpg":44};function r(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=43},44:function(e,n,t){e.exports=t.p+"static/media/headshot.5b761a00.jpg"},46:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(19),i=t.n(o),l=t(10),c=(t(35),t(36),t(1)),m=t(6),d=c.a.span.withConfig({displayName:"Link__LinkWrapper",componentId:"sc-16wjxv4-0"})((function(){return"\n  a {\n    color: var(--teal-light);\n    font-weight: var(--font-weight-semi-bold);\n  }\n"})),s=function(e){var n=e.children,t=e.linkTo,a="http"===t.slice(0,4)?r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n):function(e){return"mailto"===e.slice(0,6)}(t)?r.a.createElement("a",{href:t,target:"_top"},n):r.a.createElement(l.b,{to:"/tumbaa"+t},n);return r.a.createElement(d,null,a)},u={vertical:"\n    display: flex;\n    flex-direction: column;\n\n    > * {\n      margin-top: 3rem;\n    }\n\n    > :last-child {\n      margin-bottom: 3rem;\n    }\n  ",horizontal:"\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n  "},p=c.a.div.withConfig({displayName:"Group__GroupWrapper",componentId:"grvyi0-0"})((function(e){var n=e.theme,t=e.center;return"\n".concat(u[n],"\n\n").concat(t?"align-items: center;":"","\n")})),g=function(e){return r.a.createElement(p,e,e.children)};g.defaultProps={theme:"vertical"};var h=g,f=function(e,n,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return"\n  color: ".concat(t,";\n  background-color: ").concat(e,";\n  border: 4px solid ").concat(e,";\n  border-radius: var(--radius-default);\n\n  &:hover {\n    color: ").concat(a||t,";\n    border-color: ").concat(n,";\n    background-color: ").concat(n,";\n  }\n")},b=function(e,n,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return"\n  color: ".concat(t,";\n  border: 4px solid ").concat(e,";\n  border-radius: var(--radius-default);\n\n  &:hover {\n    color: ").concat(a||t,";\n    border-color: ").concat(n,";\n  }\n")},v={sm:"\n    padding: 8px;\n    font-size: 1.8rem;\n  ",md:"\n    padding: 10px;\n    font-size: 2rem;\n  ",lg:"\n  padding: 15px;\n  font-size: 2.2rem;\n  "},w={goldOutline:b("var(--gold-light)","var(--gold-primary)","var(--gold-primary)","var(--gold-primary)"),goldFilled:f("var(--gold-light)","var(--gold-primary)","var(--blurple-dark)"),blurpleOutline:b("var(--blurple-light)","var(--blurple-primary)","var(--blurple-light)","var(--blurple-primary)"),blurpleFilled:f("var(--blurple-light)","var(--blurple-primary)","var(--gold-light)"),transparent:"\n    background: transparent;\n    border: none;\n    border-radius: none;\n  "},E=c.a.button.withConfig({displayName:"Button__ButtonWrapper",componentId:"sc-18zrzkb-0"})((function(e){var n=e.theme,t=e.size;return"\n  font-weight: var(--font-weight-bold);\n  color: var(--charcoal-primary);\n  cursor: pointer;\n\n  ".concat(v[t],"\n  ").concat(w[n],"\n\n  &:disabled {\n    color: var(--charcoal-light);\n    border-color: var(--charcoal-light);\n    cursor: default;\n  }\n")})),y=function(e){return r.a.createElement(E,e)};y.defaultProps={type:"button",size:"md"};var k=y,T=function(e){var n=e.imgSrc,a=e.altText,o=e.caption,i=e.linkTo,l=t(43)("./"+n),c=r.a.createElement("figure",null,r.a.createElement("img",{src:l,alt:a}),o?r.a.createElement("caption",null,o):null);return i?r.a.createElement(s,{linkTo:i},c):c};T.defaultProps={altText:""};var x=T,z=t(17),_=t(27),I={borderImage:function(e,n,t){return"\n    border-width: 0 0 ".concat(t,";\n    border-style: solid;\n    border-color: ").concat(e,";\n    -webkit-border-image: -webkit-gradient(\n      linear,\n      0 0,\n      100 % 0,\n      from(").concat(e,"),\n      to(").concat(n,")\n    );\n    -webkit-border-image: -webkit-linear-gradient(left, ").concat(e,", ").concat(n,");\n    -moz-border-image: -moz-linear-gradient(left, ").concat(e,", ").concat(n,");\n    -o-border-image: -o-linear-gradient(left, ").concat(e,", ").concat(n,");\n    border-image: -webkit-linear-gradient(left, ").concat(e,", ").concat(n,") 20;\n  ")}},j=c.a.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-48ggtw-0"})((function(e){var n=e.center;return"\n  ".concat(n?"\n  display: flex;\n  justify-content: center;\n":"","\n")})),O=function(e){var n=e.removeMarginBottom,t=e.removeMarginTop,a=e.addPaddingTop,r=e.borderImage,o=e.theme;return"\n  font-family: var(--font-stack-headers);\n  font-weight: var(--font-weight-default);\n  color: var(--teal-primary);\n  width: fit-content;\n  ".concat(t?"margin-top: 0;":"","\n  ").concat(n?"margin-bottom: 0;":"","\n  ").concat(a?"padding-top: 5rem;":"","\n  ").concat(r?o.borderImage.apply(o,Object(_.a)(r)):"","\n")},P={h1:c.a.h1.withConfig({displayName:"Header__h1",componentId:"sc-48ggtw-1"})((function(e){var n=Object(z.a)({},e);return"\n      ".concat(O(n),"\n      font-weight: var(--font-weight-bold);\n      font-size: 4.8rem;\n      color: var(--teal-dark);\n  ")})),h2:c.a.h2.withConfig({displayName:"Header__h2",componentId:"sc-48ggtw-2"})((function(e){var n=Object(z.a)({},e);return"\n      ".concat(O(n),"\n      font-size: 3.6rem;\n  ")})),h3:c.a.h3.withConfig({displayName:"Header__h3",componentId:"sc-48ggtw-3"})((function(e){return"\n    ".concat(O(e),"\n    font-size: 2.8rem;\n  ")}))},H=function(e){var n=P[e.size];return e.includeWrapper?r.a.createElement(j,e,r.a.createElement(n,Object.assign({},e,{theme:I}),e.children)):r.a.createElement(n,Object.assign({},e,{theme:I}),e.children)};H.defaultProps={includeWrapper:!1};var W=H,L=c.a.p.withConfig({displayName:"Paragraph__ParagraphWrapper",componentId:"sc-15aqj4i-0"})((function(e){var n=e.center,t=e.singleSpaced;return"\n  color: var(--charcoal-primary);\n  ".concat(t?"\n  margin-top: 0;\n  margin-bottom: 0;\n":"","\n  ").concat(n?"text-align: center;":"","\n")})),M=function(e){return e.isHTML?r.a.createElement(L,Object.assign({},e,{dangerouslySetInnerHTML:{__html:e.content}})):r.a.createElement(L,e,e.content)};M.defaultProps={isHTML:!1};var N=M,S=c.a.section.withConfig({displayName:"PageWrapper",componentId:"sc-1y407to-0"})((function(){return"\n  display: flex;\n  flex-direction: column;\n  padding-top: 5rem;\n  max-width: 720px;\n  margin: auto;\n"})),C=function(e){return r.a.createElement(S,e,e.children)},D=c.a.div.withConfig({displayName:"Home__IntroGrid",componentId:"sc-1c8acsy-0"})(["display:grid;grid-template-columns:0.5fr 1fr;grid-column-gap:25px;margin-bottom:3rem;"]),A=function(){return r.a.createElement(C,null,r.a.createElement(D,null,r.a.createElement(x,{imgSrc:"headshot.jpg",altText:"Headshot"}),r.a.createElement("div",null,r.a.createElement(W,{size:"h1",includeWrapper:!0},"Hi, I'm Samantha."),r.a.createElement(W,{size:"h2"},"I ",r.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f")," JavaScript."),r.a.createElement(W,{size:"h3"},"... and teaching!"))),r.a.createElement(h,{theme:"horizontal"},r.a.createElement(s,{linkTo:"https://github.com/samanthasalley"},r.a.createElement(k,{theme:"blurpleOutline",size:"sm"},"GitHub")),r.a.createElement(s,{linkTo:"https://linkedin.com/in/samanthasalley"},r.a.createElement(k,{theme:"blurpleOutline",size:"sm"},"LinkedIn")),r.a.createElement(s,{linkTo:"mailto:samanthasalley+website@gmail.com"},r.a.createElement(k,{theme:"blurpleOutline",size:"sm"},"Email"))),r.a.createElement(N,{isHTML:!0,content:"I am an experienced software engineer with 7+ years in the industry. I enjoy everything from small bug fixes to platform architecture, and am especially passionate about mentoring other engineers. I have a particular interest in the ever-changing world of asynchronicity within the JavaScript ecosystem, and have led workshops as well as given in-depth lectures on this [and many other] concepts.\n<br />\n<br />\nOutside of coding, I very much enjoy snowboarding, traveling, and appealing to my inner Ron Swanson (sitting in my leather chair, reading, and drinking Scotch)."}),r.a.createElement(h,{theme:"horizontal"},r.a.createElement(s,{linkTo:"/teaching"},r.a.createElement(k,{theme:"blurpleFilled",size:"lg"},"Teaching")),r.a.createElement(s,{linkTo:"/blog"},r.a.createElement(k,{theme:"blurpleFilled",size:"lg"},"Public Work"))))},B=function(){return r.a.createElement(h,{theme:"horizontal"},r.a.createElement(s,{linkTo:"/"},"Back Home"))},F=c.a.div.withConfig({displayName:"Teaching__Intro",componentId:"qj4079-0"})(["align-self:center;"]),J=function(){return r.a.createElement(C,null,r.a.createElement(F,null,r.a.createElement(W,{size:"h1",includeWrapper:!0},"Watch Me Teach!")),r.a.createElement(h,{theme:"vertical",center:!0},r.a.createElement(W,{size:"h2"},"JavaScript - The Hard Parts"),r.a.createElement(s,{linkTo:"https://www.youtube.com/watch?v=KpGmW_P5Ygg"},r.a.createElement(k,{theme:"goldFilled",size:"lg"},"Async, Event Loop, & Promises - Part 1")),r.a.createElement(s,{linkTo:"https://www.youtube.com/watch?v=O_BYLu0POO0"},r.a.createElement(k,{theme:"goldFilled",size:"lg"},"Async, Event Loop, & Promises - Part 2"))),r.a.createElement(B,null))},Y=t(11),V=t.n(Y),G=t(24),K=t.n(G),R=t(25),q=t.n(R),U=t(26),Z=t.n(U),$={reactAntiPatterns:K.a,stateOfVueTesting:q.a,testingAndDebuggingVue:Z.a},Q=c.a.section.withConfig({displayName:"Section__SectionWrapper",componentId:"sc-1ylh42w-0"})((function(){return"\n  padding: 1rem 2rem;\n  background: white;\n  border: var(--border-default);\n  border-color: var(--gray-dark);\n  border-radius: var(--radius-default);\n  box-shadow: var(--box-shadow-default) var(--gray-primary);\n"})),X=function(e){return r.a.createElement(Q,e,e.children)},ee=function(e){e.id;var n=e.title,t=e.linkTo,a=e.content,o=e.publishDate;return r.a.createElement(h,null,r.a.createElement(X,null,r.a.createElement(W,{size:"h2",removeMarginTop:!0,removeMarginBottom:!0},n),r.a.createElement(N,{content:"<strong>".concat(V()(o).format("MMMM DD YYYY"),"</strong>"),isHTML:!0}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),t&&r.a.createElement(s,{linkTo:t},"Read More")))},ne=function(){var e=Object.values($).sort((function(e,n){return V()(e.publishDate).isBefore(V()(n.publishDate))?1:-1})).map((function(e){return r.a.createElement(ee,Object.assign({key:e.id},e))}));return r.a.createElement(C,null,r.a.createElement(W,{size:"h1"},"Public Works"),e,r.a.createElement(B,null))},te=c.a.div.withConfig({displayName:"App__Wrapper",componentId:"sc-1ne3zck-0"})(["min-height:100vh;padding:5rem 15rem;background:var(--gray-light);"]),ae=function(){return r.a.createElement(te,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/tumbaa/",component:A}),r.a.createElement(m.a,{exact:!0,path:"/tumbaa/teaching",component:J}),r.a.createElement(m.a,{exact:!0,path:"/tumbaa/blog",component:ne})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(l.a,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.7ce10f4e.chunk.js.map