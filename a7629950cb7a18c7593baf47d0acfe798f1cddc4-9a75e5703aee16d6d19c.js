/*! For license information please see a7629950cb7a18c7593baf47d0acfe798f1cddc4-9a75e5703aee16d6d19c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0xIW":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("q1tI");t.default=function(e){r.useEffect(e,[])}},"1VFP":function(e,t,n){"use strict";n.d(t,"a",(function(){return $}));var r=n("q1tI"),i=n.n(r),o=n("qKvR"),a=n("wLTh"),l=n("6R+2"),c=n.n(l),u=n("pW3x"),s=n.n(u),d=n("wTIg");var f=Object(d.a)("div",{target:"e1efxos60"})({name:"15t48j3",styles:"position:sticky;top:0;order:2;padding-top:72px;max-height:calc(100vh - 72px);overflow-y:auto;width:100%;max-width:200px;@media (max-width:1200px){position:relative;top:auto;order:0;max-width:100%;margin-left:0;padding-top:0;}"}),p=Object(d.a)("div",{target:"e1efxos61"})({name:"157u13d",styles:"h2{text-transform:uppercase;font-size:14px;font-weight:bold;letter-spacing:0.142em;margin-top:0rem;border:none;margin:0 0 16px 0;}nav ul{padding-left:0;margin-bottom:0;list-style:none;li{margin-bottom:12px;line-height:1.1;a{font-size:14px;font-weight:400;text-decoration:none;transition:all 0.2s;&:hover{text-decoration:underline;}}}}@media (max-width:1200px){margin:0 0 24px 0;padding-bottom:16px;border-bottom:1px solid rgba(120,117,122,0.2);}"});function m(e){var t=e.headings,n=e.disableTOC,i=e.contentRef,l=c()().y,u=Object(a.b)(),d=s()(),m=d.width,b=d.height,g=Object(r.useState)([]),h=g[0],y=g[1],v=m<=1200;Object(r.useEffect)((function(){if(!v||n){var e,t=null===(e=i.current)||void 0===e?void 0:e.querySelectorAll("h2, h3");y(t&&Array.from(t).map((function(e){var t=e.querySelector("a");return t?{id:e.id,offset:e.offsetTop+t.offsetTop}:{}})).filter(Boolean))}}),[m,b,i,v,n]);var O=Object(r.useMemo)((function(){if(!v||n){var e=l+b/2;if(h)for(var t=h.length-1;t>=0;t-=1){var r=h[t],i=r.id;if(e>=r.offset)return i}}}),[h,b,l,v,n]);return n?Object(o.d)(f,null):Object(o.d)(f,null,Object(o.d)(p,null,Object(o.d)("h2",null,"On this page"),Object(o.d)("nav",null,Object(o.d)("ul",null,t.filter((function(e){return 2===e.depth||3===e.depth})).map((function(e){var t=e.value.toString().toLowerCase().trim().replace(/\s/g,"-").replace(/[^\w\-\u00b4\u00C0-\u00C3\u00c7\u00C9-\u00CA\u00CD\u00D3-\u00D5\u00DA\u00E0-\u00E3\u00E7\u00E9-\u00EA\u00ED\u00F3-\u00F5\u00FA]+/g,"");return Object(o.d)("li",{key:e.value,style:{marginLeft:3===e.depth?"8px":null}},Object(o.d)("a",{href:"#"+t,style:{color:O===t?u.colors.primary:u.colors.text}},e.value))}))))))}m.defaultProps={headings:null};var b=n("xNgg"),g=n.n(b),h=[{node:{id:g()(),label:"Introduction",items:null,link:"/docs/introduction"}},{node:{id:g()(),label:"Releases",items:null,link:"/docs/releases"}},{node:{id:g()(),label:"Downloads",items:null,link:"/download"}},{node:{id:g()(),label:"Getting started",items:[{label:"Collector",link:"/docs/getting-started/collector"},{label:"Go",link:"/docs/getting-started/go-sdk"},{label:"Java",link:"/docs/getting-started/java-sdk"},{label:"JavaScript",link:"/docs/getting-started/javascript-sdk"},{label:"Python",link:"/docs/getting-started/python-sdk"},{label:".NET",link:"/docs/getting-started/dotnet-sdk"},{label:"Lambda",link:"/docs/getting-started/lambda"},{label:"Prometheus (AMP)",link:"/docs/getting-started/prometheus-remote-write-exporter"},{label:"Prometheus Configurations",link:"/docs/getting-started/advanced-prometheus-remote-write-configurations"},{label:"CloudWatch Metrics",link:"/docs/getting-started/cloudwatch-metrics"},{label:"X-Ray",link:"/docs/getting-started/x-ray"}],link:"/docs/null"}},{node:{id:g()(),label:"Setup",items:[{label:"Permissions",link:"/docs/setup/permissions"},{label:"Docker Images",link:"/docs/setup/docker-images"},{label:"ECS",link:"/docs/setup/ecs"},{label:"EC2",link:"/docs/setup/ec2"},{label:"EKS",link:"/docs/setup/eks"},{label:"On-Premises",link:"/docs/setup/on-premises"},{label:"Debian",link:"/docs/setup/build-collector-as-debian"},{label:"RPM",link:"/docs/setup/build-collector-as-rpm"},{label:"MS-Windows",link:"/docs/setup/build-collector-on-windows"}],link:"/docs/null"}},{node:{id:g()(),label:"Components",items:[{label:"OTLP Exporters",link:"/docs/components/otlp-exporter"},{label:"Prometheus Exporters",link:"/docs/components/prometheus-exporters"},{label:"CloudWatch EMF Exporter",link:"/docs/getting-started/cloudwatch-metrics#cloudwatch-emf-exporter-awsemf"},{label:"X-Ray Exporter",link:"/docs/getting-started/x-ray#configuring-the-aws-x-ray-exporter"},{label:"Logging Exporter",link:"/docs/components/misc-exporters#logging-exporter"},{label:"File Exporter",link:"/docs/components/misc-exporters#file-exporter"},{label:"ECS Container Metrics Receiver",link:"/docs/components/ecs-metrics-receiver"},{label:"X-Ray Receiver",link:"/docs/components/x-ray-receiver"},{label:"StatsD Receiver",link:"/docs/components/statsd-receiver"},{label:"Jaeger Receiver",link:"/docs/components/jaeger-zipkin-receiver#jaeger-receiver"},{label:"Zipkin Receiver",link:"/docs/components/jaeger-zipkin-receiver#zipkin-receiver"}],link:"/docs/null"}},{node:{id:g()(),label:"Partners",items:[{label:"Datadog",link:"/docs/partners/datadog"},{label:"Dynatrace",link:"/docs/partners/dynatrace"},{label:"New Relic",link:"/docs/partners/new-relic"},{label:"Splunk",link:"/docs/partners/splunk"},{label:"Logz.io",link:"/docs/partners/logzio"}],link:"/docs/null"}},{node:{id:g()(),label:"Know Your Data",items:[{label:"Traces",link:"https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/overview.md"},{label:"Metrics",link:"https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/overview.md"}],link:"/docs/null"}},{node:{id:g()(),label:"Other",items:[{label:"FAQ",link:"https://aws.amazon.com/otel/faqs/"},{label:"Glossary",link:"https://github.com/open-telemetry/opentelemetry-specification/blob/master/specification/glossary.md"},{label:"Resources",link:"/resources"}],link:"/docs/null"}}];var y=Object(d.a)("aside",{target:"e1c4kqi70"})("width:300px;display:flex;justify-content:space-between;align-items:center;flex-direction:column;position:sticky;top:0;padding-top:36px;transition:transform 0.5s;height:100%;nav{width:100%;padding-top:24px;align-self:flex-start;flex:1;}@media (max-width:780px){height:calc(100vh - 210px);overflow-y:auto;max-width:75%;min-width:auto;z-index:1001;position:fixed;top:0;bottom:0;left:0;padding-top:32px;background:",(function(e){return e.theme.colors.background}),";transform:translate3d( ",(function(e){return e.isMenuOpen?"0":"-100%"}),",0,0 );}"),v=(Object(d.a)("div",{target:"e1c4kqi71"})({name:"2yrou",styles:"width:100%;a{width:100%;padding-left:30px;display:flex;justify-content:flex-start;align-items:center;}"}),Object(d.a)("ul",{target:"e1c4kqi72"})({name:"mbmci8",styles:"list-style:none;width:100%;padding-left:0;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;"})),O=Object(d.a)("li",{target:"e1c4kqi73"})("padding-left:30px;width:100%;text-transform:uppercase;font-size:14px;font-weight:bold;margin-top:20px;color:",(function(e){return e.theme.colors.title}),";letter-spacing:0.142em;"),w=Object(d.a)("li",{target:"e1c4kqi74"})("font-size:15px;width:100%;transition:all 200ms ease-in-out;padding:0 20px;cursor:pointer;a,span{display:block;font-size:15px;color:",(function(e){return e.theme.colors.text}),";background-color:",(function(e){return e.theme.colors.background}),";padding:4px 10px;margin:4px 0;border-radius:4px;font-weight:normal;text-decoration:none;width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;margin:0 auto;transition:all 0.2s ease;svg{width:20px;height:20px;margin-right:10px;}&:not(.active-link):hover{color:",(function(e){return e.theme.colors.primary}),";}&.active-link{color:",(function(e){return e.theme.colors.primary}),";background-color:",(function(e){return e.theme.colors.shape}),";}@media (max-width:780px){&.active-link{background:",(function(e){return e.theme.colors.shape}),";}}}"),x=Object(d.a)(v,{target:"e1c4kqi75"})({name:"1lo7kqu",styles:"margin:5px 0 0 0;"}),j=n("Tgqd");function k(e){var t=e.link,n=e.label;return Object(o.d)("a",{href:t,rel:"noopener noreferrer"},n,Object(o.d)(j.a,{style:{width:"16px",height:"16px",marginLeft:"10px"}}))}var _=n("Wbzz");function S(e){var t=e.link,n=e.label;return Object(o.d)(_.Link,{to:t,activeClassName:"active-link"},n)}function P(e){var t=e.children,n=e.text;e.link;return Object(o.d)(i.a.Fragment,null,Object(o.d)(O,null,n),Object(o.d)(x,null,t))}function E(e){var t=e.isMenuOpen,n=h;function r(e,t){return n=e,new RegExp("^((https?:)?//)","i").test(n)?Object(o.d)(k,{link:e,label:t}):Object(o.d)(S,{link:e,label:t});var n}return Object(o.d)(y,{isMenuOpen:t},Object(o.d)("nav",null,Object(o.d)(v,null,n.map((function(e){var t=e.node,n=t.label,i=t.link,a=t.items,l=t.id;if(Array.isArray(a)){var c=a.map((function(e){return Object(o.d)(w,{key:e.link},r(e.link,e.label))}));return Object(o.d)(P,{key:l,text:n,link:i},c)}return Object(o.d)(w,{key:l},r(i,n))})))))}var C=n("tjd4");var M=Object(d.a)("header",{target:"effkwtq0"})({name:"9q3p0l",styles:"display:flex;justify-content:flex-start;align-items:center;height:40px;margin-bottom:24px;h2{margin:0;border:none;padding:0;font-size:18px;@media (max-width:359px){font-size:14px;}}button{border:none;background:none;cursor:pointer;margin-right:16px;display:flex;justify-content:flex-start;align-items:center;}@media (min-width:780px){display:none;}"});function R(e){var t=e.handleMenuOpen,n=Object(_.useStaticQuery)("973074209").site.siteMetadata.siteTitle;return Object(o.d)(M,null,Object(o.d)("button",{"aria-label":"Open sidebar",type:"button",onClick:t},Object(o.d)(C.a,{size:23,"aria-hidden":"true"})),Object(o.d)("h2",null,n))}var T=n("wx14"),q=n("zLVn");function z(e){var t=e.isMenuOpen,n=Object(q.a)(e,["isMenuOpen"]);return Object(o.d)("div",Object(T.a)({css:Object(o.c)("::after{content:'';position:fixed;width:100%;height:100%;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.8);z-index:999;display:",t?"block":"none",";}"),"aria-label":"Close menu"},n))}z.defaultProps={isMenuOpen:!1};var I=Object(d.a)("div",{target:"e162ec8l0"})({name:"1i3ij69",styles:"width:100%;max-width:1400px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:280px calc(100% - 320px);grid-auto-flow:row;grid-gap:40px;@media (max-width:780px){padding:24px;grid-template-columns:100%;}"}),D=Object(d.a)("main",{target:"e162ec8l1"})({name:"19vacph",styles:"height:100%;padding-top:36px;width:100%;display:flex;justify-content:flex-start;position:relative;@media (max-width:1200px){flex-direction:column;}@media (max-width:780px){padding-top:0;}"}),A=Object(d.a)("div",{target:"e162ec8l2"})({name:"1ehkd4h",styles:"width:100%;max-width:calc(75% - 64px);padding-right:64px;@media (max-width:1200px){max-width:100%;padding-right:0;order:3;}"}),L=n("Xhe4"),F=n("H9WF"),W=n("s4cb");var N={name:"enx1eb",styles:"display:none;@media (max-width:1200px){display:block;}"},G={name:"1n3b8my",styles:"@media (max-width:1200px){display:none;}"};function $(e){var t=e.children,i=e.disableTableOfContents,a=e.title,l=e.headings,c=Object(r.useRef)(null),u=Object(r.useState)(!1),s=u[0],d=u[1],f=!0===i||!l||0===l.length;function p(){d(!s)}return Object(o.d)("div",{style:{backgroundColor:"white"}},Object(o.d)(L.a,{brand:n("rQF/"),rightLinks:Object(o.d)(F.a,null),color:"dark"}),Object(o.d)(z,{isMenuOpen:s,onClick:p}),Object(o.d)(I,null,Object(o.d)(E,{isMenuOpen:s}),Object(o.d)(D,null,Object(o.d)(R,{handleMenuOpen:p}),a&&Object(o.d)("h1",{css:N},a),Object(o.d)(A,{ref:c},a&&Object(o.d)("h1",{css:G},a),t),Object(o.d)(m,{headings:l,disableTOC:f,contentRef:c}))),Object(o.d)("div",{style:{height:"110px"}}),Object(o.d)(W.a,null))}$.defaultProps={disableTableOfContents:!1,title:"",headings:null}},"6R+2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mrSG"),i=n("q1tI"),o=n("9+Sh"),a=r.__importDefault(n("eM9k"));t.default=function(){var e=a.default({x:o.isClient?window.pageXOffset:0,y:o.isClient?window.pageYOffset:0}),t=e[0],n=e[1];return i.useEffect((function(){var e=function(){n({x:window.pageXOffset,y:window.pageYOffset})};return window.addEventListener("scroll",e,{capture:!1,passive:!0}),function(){window.removeEventListener("scroll",e)}}),[]),t}},"9+Sh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDeepEqual=t.off=t.on=t.isClient=void 0;var r=n("mrSG").__importDefault(n("nkPT"));t.isClient="object"==typeof window,t.on=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.addEventListener.apply(e,t)},t.off=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.removeEventListener.apply(e,t)},t.isDeepEqual=r.default},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};function c(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var n,i=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,c=e.title,u=l(e,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:a({color:e.color||t.color},t.style,e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},"T/ZZ":function(e,t,n){var r,i,o;o=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var i=e[r];if("string"!=typeof i)throw new TypeError("Url must be a string. Received "+i);""!==i&&(r>0&&(i=i.replace(/^[\/]+/,"")),i=r<e.length-1?i.replace(/[\/]+$/,""):i.replace(/[\/]+$/,"/"),t.push(i))}var o=t.join("/"),a=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=a.shift()+(a.length>0?"?":"")+a.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=o():void 0===(i="function"==typeof(r=o)?r.call(t,n,t,e):r)||(e.exports=i)},d9hB:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("q1tI");var r=n("TJpk"),i=n.n(r),o=n("T/ZZ"),a=n.n(o),l=n("Wbzz"),c=n("qKvR");function u(e){var t=e.description,n=e.title,r=e.slug,o=e.image,u=e.children,s=Object(l.useStaticQuery)("2501019404").site.siteMetadata,d=s.siteTitle,f=s.siteTitleShort,p=s.siteUrl,m=s.defaultTitle,b=s.siteImage,g=s.siteDescription,h=s.siteLanguage,y=s.siteAuthor,v=s.siteIcon,O=n?n+" | "+d:m,w=a()(p,r),x=a()(p,o||b),j=t||g,k=[{"@context":"http://schema.org","@type":"WebSite",url:w,name:n,alternateName:f}];return Object(c.d)(i.a,{htmlAttributes:{lang:h},title:O},v&&Object(c.d)("link",{rel:"icon",href:v}),Object(c.d)("meta",{name:"description",content:j}),Object(c.d)("meta",{name:"image",content:x}),Object(c.d)("meta",{httpEquiv:"x-ua-compatible",content:"IE=edge,chrome=1"}),Object(c.d)("meta",{name:"MobileOptimized",content:"320"}),Object(c.d)("meta",{name:"HandheldFriendly",content:"True"}),Object(c.d)("meta",{name:"google",content:"notranslate"}),Object(c.d)("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),Object(c.d)("meta",{property:"og:url",content:w}),Object(c.d)("meta",{property:"og:type",content:"website"}),Object(c.d)("meta",{property:"og:title",content:O}),Object(c.d)("meta",{property:"og:description",content:j}),Object(c.d)("meta",{property:"og:locale",content:h}),Object(c.d)("meta",{property:"og:site_name",content:d}),Object(c.d)("meta",{property:"og:image",content:x}),Object(c.d)("meta",{property:"og:image:secure_url",content:x}),Object(c.d)("meta",{property:"og:image:alt",content:"Banner"}),Object(c.d)("meta",{property:"og:image:type",content:"image/png"}),Object(c.d)("meta",{property:"og:image:width",content:"1200"}),Object(c.d)("meta",{property:"og:image:height",content:"630"}),Object(c.d)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(c.d)("meta",{name:"twitter:title",content:O}),Object(c.d)("meta",{name:"twitter:site",content:y}),Object(c.d)("meta",{name:"twitter:creator",content:y}),Object(c.d)("meta",{name:"twitter:image",content:x}),Object(c.d)("meta",{name:"twitter:image:src",content:x}),Object(c.d)("meta",{name:"twitter:image:alt",content:"Banner"}),Object(c.d)("meta",{name:"twitter:image:width",content:"1200"}),Object(c.d)("meta",{name:"twitter:image:height",content:"630"}),Object(c.d)("script",{type:"application/ld+json"},JSON.stringify(k)),u)}u.defaultProps={title:"",description:"",slug:"",image:"",children:""}},eM9k:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mrSG"),i=n("q1tI"),o=r.__importDefault(n("n5OK"));t.default=function(e){var t=i.useRef(0),n=i.useState(e),r=n[0],a=n[1],l=i.useCallback((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){a(e)}))}),[]);return o.default((function(){cancelAnimationFrame(t.current)})),[r,l]}},mrSG:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return i})),n.d(t,"__assign",(function(){return o})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return l})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return u})),n.d(t,"__awaiter",(function(){return s})),n.d(t,"__generator",(function(){return d})),n.d(t,"__createBinding",(function(){return f})),n.d(t,"__exportStar",(function(){return p})),n.d(t,"__values",(function(){return m})),n.d(t,"__read",(function(){return b})),n.d(t,"__spread",(function(){return g})),n.d(t,"__spreadArrays",(function(){return h})),n.d(t,"__await",(function(){return y})),n.d(t,"__asyncGenerator",(function(){return v})),n.d(t,"__asyncDelegator",(function(){return O})),n.d(t,"__asyncValues",(function(){return w})),n.d(t,"__makeTemplateObject",(function(){return x})),n.d(t,"__importStar",(function(){return k})),n.d(t,"__importDefault",(function(){return _})),n.d(t,"__classPrivateFieldGet",(function(){return S})),n.d(t,"__classPrivateFieldSet",(function(){return P}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function i(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function l(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((r=r.apply(e,t||[])).next())}))}function d(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(l){o=[6,l],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}var f=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||f(t,e,n)}function m(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(l){i={error:l}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function h(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,l=o.length;a<l;a++,i++)r[i]=o[a];return r}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function v(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(e,t||[]),o=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||l(e,t)}))})}function l(e,t){try{(n=i[e](t)).value instanceof y?Promise.resolve(n.value.v).then(c,u):s(o[0][2],n)}catch(r){s(o[0][3],r)}var n}function c(e){l("next",e)}function u(e){l("throw",e)}function s(e,t){e(t),o.shift(),o.length&&l(o[0][0],o[0][1])}}function O(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:i?i(t):t}:i}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=m(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,i,(t=e[n](t)).done,t.value)}))}}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var j=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function k(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&f(t,e,n);return j(t,e),t}function _(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function P(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},n5OK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mrSG"),i=n("q1tI"),o=r.__importDefault(n("0xIW"));t.default=function(e){var t=i.useRef(e);t.current=e,o.default((function(){return function(){return t.current()}}))}},nkPT:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;0!=i--;){var a=o[i];if(("_owner"!==a||!t.$$typeof)&&!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},pW3x:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mrSG"),i=n("q1tI"),o=r.__importDefault(n("eM9k")),a=n("9+Sh");t.default=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=o.default({width:a.isClient?window.innerWidth:e,height:a.isClient?window.innerHeight:t}),r=n[0],l=n[1];return i.useEffect((function(){if(a.isClient){var e=function(){l({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[]),r}},xNgg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=(r=n("q1tI"))&&"object"==typeof r&&"default"in r?r.default:r,o="id",a=0;function l(e){return a++,"".concat(e||o).concat(a)}var c=function(e,t){for(var n=[],r=0;r<e;r++)n.push(l(t));return n};function u(e){var t=i.useRef();return i.useEffect((function(){t.current=e})),t.current}t.default=l,t.resetId=function(){a=0},t.setPrefix=function(e){o=e},t.useId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,n=i.useRef([]),r=u(e),o=u(t);return e===r&&o===t||(n.current=c(e,t)),n.current}}}]);
//# sourceMappingURL=a7629950cb7a18c7593baf47d0acfe798f1cddc4-9a75e5703aee16d6d19c.js.map