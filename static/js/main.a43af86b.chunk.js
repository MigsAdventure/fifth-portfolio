(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,s){"use strict";s.r(t),s.d(t,"projects_filter",function(){return n}),s.d(t,"projects",function(){return a}),s.d(t,"contact_form",function(){return o}),s.d(t,"footer",function(){return i});var n={all:"All Projects",ncsoft:"NcSoft",personal:"Personal",2019:"2019",2018:"2018",2017:"2017",2016:"2016",2015:"2015"},a={headers:{resp:{en:"Responsibilities",es:"Responsibilities",jp:"Responsibilities",kr:"Responsibilities"},tech:{en:"Technologies",es:"Technologies",jp:"Technologies",kr:"Technologies"}},btn:{en:"Go To Site",es:"Ir al Sitio",jp:"\u30b5\u30a4\u30c8\u3078",kr:"\uc0ac\uc774\ud2b8\ub85c \uc774\ub3d9"}},o={name:{en:"Name",es:"Nombre",jp:"Name",kr:"Name"},email:{en:"Email",es:"Email",jp:"Email",kr:"Email"},message:{en:"Message",es:"Mensaje",jp:"Message",kr:"Message"}},i={copyright:"Miguel Guzman",social:{resume:"assets/pdf/resume.pdf",github:"https://github.com/migsadventure",linkedin:"https://www.linkedin.com/in/migsadventure/"}}},,,function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(1),i=(s(58),s(5)),r=s.n(i);t.default=Object(o.g)(function(e){var t=e.content,n=e.selectedProjectCB,o=e.previewOpen,i=t.name,c=(t.url,t.type),l=t.year,p=(t.tech,t.api,t.id),m=(t.number,l.length>1?l[l.length-1]+"-"+l[0]:l);return a.a.createElement("main",{key:t.number,onClick:function(e){return n(e,t)},className:r()("project-card",{active:o===p},{inactive:o!==p&&-1!==o}),style:{backgroundImage:"url(".concat(function(e){try{return s(115)("./"+e)}catch(t){return s(30)}}("".concat(p,"-site-card-logo.jpeg")),")")}},a.a.createElement("section",null,a.a.createElement("div",{className:"title-wrapper"},a.a.createElement("h1",null,i)),a.a.createElement("div",{className:"info"},a.a.createElement("p",{className:"type"},c),a.a.createElement("p",{className:"year"},m))))})},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(1),i=s(5),r=s.n(i),c=(s(61),s(18)),l=s(9);s(23);t.default=Object(o.g)(function(e){var t=e.content,n=e.previewOpen,o=e.isMobile,i=e.lang;console.log(i);var p=t.id,m=t.url,u=t.tech,d=t.responsibilities,g=t.description,f=t.name,b=l.projects.btn,h=l.projects.headers,j=o?"desktop":"mobile";return a.a.createElement("main",{className:r()("project-preview",{"preview-open":n===p},{"scroll-projects-active":-1!==n&&!o})},a.a.createElement("a",{className:"project-preview-image",href:m},a.a.createElement("img",{src:function(e){try{return s(116)("./"+e)}catch(t){return s(30)}}("".concat(j,"/screenshots/").concat(p,"-site.jpeg")),alt:t.name})),a.a.createElement("section",{className:"project-info"},a.a.createElement("div",{className:"header"},a.a.createElement("h1",null,f)),a.a.createElement("div",{className:"description"},a.a.createElement("h3",null,"Description"),a.a.createElement("p",null,g)),a.a.createElement("div",{className:"responsibilities"},a.a.createElement("h3",null,h.resp[i]),a.a.createElement("ul",{className:"resp-list"},d.map(function(e,t){return a.a.createElement("li",{key:t,className:"resp-item"},"\u25ba ",e)}))),a.a.createElement("div",{className:"tech"},a.a.createElement("h3",null,h.tech[i]),a.a.createElement("p",null,u)),a.a.createElement("div",{className:"cta"},a.a.createElement(c.default,{type:"btn",text:b[i],url:m,isExternal:!0,arrow:"right"}))))})},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(1),i=s(15),r=s(36);t.default=Object(o.g)(function(e){var t=e.lang;return a.a.createElement("main",{className:"header"},a.a.createElement("section",null,a.a.createElement(i.default,{lang:t,content:r.header.banner})))})},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(1);s(56);t.default=Object(o.g)(function(e){var t=e.content,s=e.lang;return a.a.createElement("main",{className:"banner"},a.a.createElement("div",{className:"banner-image"}),a.a.createElement("div",{className:"banner-text"},a.a.createElement("h1",null,t.text.headline[s]),a.a.createElement("h3",null,t.text.sub_headline[s])))})},function(e,t,s){"use strict";s.r(t);var n=s(41),a=s(24),o=s(25),i=s(27),r=s(26),c=s(28),l=s(2),p=s(0),m=s.n(p),u=s(1),d=s(12),g=s(37),f=s(17),b=(s(60),s(13)),h=s(23),j=s(5),v=s.n(j),w=s(38),E=function(e){function t(e){var s;return Object(a.a)(this,t),(s=Object(i.a)(this,Object(r.a)(t).call(this,e))).handleFilterChange=function(e){s.setState({current_filter:e,preview_open:-1})},s.handleSelectedProject=function(e,t){var n=s.state,a=n.preview_open,o=n.mobile_view,i=e.target;if(s.setState({selected_project:t,preview_open:a===t.id?-1:t.id},function(){this.state.selected_project&&-1===a&&!o&&setTimeout(function(){i&&i.scrollIntoView({block:"end"})},300)}),!s.state.mobile_view){var r=document.getElementById("projects").offsetTop;Object(w.scrollTo)(document.body,r,50)}},s.state={current_filter:"2019",preview_open:-1,selected_project:null,mobile_view:Object(h.isMobile)()},s.renderProjects=s.renderProjects.bind(Object(l.a)(Object(l.a)(s))),s.handleFilterChange=s.handleFilterChange.bind(Object(l.a)(Object(l.a)(s))),s.checkIfMobile=s.checkIfMobile.bind(Object(l.a)(Object(l.a)(s))),s}return Object(c.a)(t,e),Object(o.a)(t,[{key:"checkIfMobile",value:function(){this.setState({mobile_view:Object(h.isMobile)()})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.checkIfMobile)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkIfMobile)}},{key:"renderProjects",value:function(){var e=this,t=this.state,s=t.current_filter,a=t.preview_open,o=t.selected_project,i=t.mobile_view,r=this.props.lang,c=o&&o.id&&a||-1;console.log(o),console.log(a);var l=g.map(function(t,o){var l=window.innerWidth<=768&&c&&m.a.createElement(b.default,{lang:r,previewOpen:a,content:Object(n.a)({},t,{number:o}),isMobile:i});return t.year.includes(s)||s===t.type?[m.a.createElement(d.default,{content:Object(n.a)({},t,{number:o}),previewOpen:a,selectedProjectCB:e.handleSelectedProject}),l]:"all"===s?[m.a.createElement(d.default,{content:Object(n.a)({},t,{number:o}),previewOpen:a,selectedProjectCB:e.handleSelectedProject}),l]:null});return l}},{key:"render",value:function(){var e=this.state,t=e.current_filter,s=e.selected_project,n=e.preview_open,a=e.mobile_view,o=this.props.lang;return m.a.createElement("main",{id:"projects",className:v()("projects main-section",{mobile:a})},m.a.createElement("div",{className:v()("projects-bg",{mobile:a,desktop:-1!==n})}),m.a.createElement("section",{className:"project-preview-desktop-wrapper"},!a&&s&&m.a.createElement(b.default,{lang:o,previewOpen:n,content:s})),(a||-1===n)&&m.a.createElement("section",{className:"header"},m.a.createElement("h1",{className:"title"},"Projects")),m.a.createElement("section",{className:v()("projects-wrapper",{"scroll-projects":-1!==n&&!a})},(a||-1===n)&&m.a.createElement(f.default,{currentFilter:t,changeFilterCB:this.handleFilterChange}),m.a.createElement("div",{className:"project-cards"},this.renderProjects())))}}]),t}(p.Component);t.default=Object(u.g)(E)},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(1),i=(s(59),s(9)),r=s(5),c=s.n(r);t.default=Object(o.g)(function(e){var t=e.currentFilter,s=e.changeFilterCB;return a.a.createElement("main",{className:"projects-filter"},a.a.createElement("section",null,a.a.createElement("div",{className:"current-filter-item"},t," ",a.a.createElement("i",{className:"fa fa-chevron-down"})),a.a.createElement("div",{className:"nav-filter-items"},Object.keys(i.projects_filter).map(function(e,n){return a.a.createElement("div",{key:n,onClick:s.bind(void 0,e),className:c()("nav-item",{active:t===e})},i.projects_filter[e])}))))})},function(e,t,s){"use strict";s.r(t);var n=s(34);s.d(t,"default",function(){return n.default})},function(e,t,s){"use strict";s.r(t);var n=s(11),a=s(24),o=s(25),i=s(27),r=s(26),c=s(28),l=s(2),p=s(0),m=s.n(p),u=s(1),d=(s(89),s(39)),g=function(e){function t(e){var s;return Object(a.a)(this,t),(s=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={name:"",email:"",message:"",form_valid:!1,is_loading:!1,form_success:""},s.submitForm=s.submitForm.bind(Object(l.a)(Object(l.a)(s))),s.validateForm=s.validateForm.bind(Object(l.a)(Object(l.a)(s))),s.validateEmail=s.validateEmail.bind(Object(l.a)(Object(l.a)(s))),s.validateInputs=s.validateInputs.bind(Object(l.a)(Object(l.a)(s))),s}return Object(c.a)(t,e),Object(o.a)(t,[{key:"submitForm",value:function(e){var t=this;e.preventDefault();var s=this.state,n={name:s.name,email:s.email,message:s.message};s.form_valid&&(this.setState({is_loading:!0}),Object(d.sendEmail)(n,function(e){return t.setState({form_success:e,is_loading:!1})}))}},{key:"validateEmail",value:function(e){return/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(e)}},{key:"validateInputs",value:function(e){var t=this,s=e.target;this.setState(Object(n.a)({},s.name,s.value),function(){t.setState({form_valid:t.validateForm()})})}},{key:"validateForm",value:function(){var e=this.state,t=e.name,s=e.email,n=e.message;return!(""===t||""===s||""===n||!this.validateEmail(s))}},{key:"render",value:function(){console.log(this.state);var e=this.state,t=(e.name,e.email,e.message,e.form_valid),s=e.is_loading,n=e.form_success;return m.a.createElement("main",{className:"contact main-section"},m.a.createElement("div",{className:"contact-bg"}),[n&&"success"===n&&alert("It works!!!"),n&&"error"===n&&alert("Sorry! There was an error")],m.a.createElement("section",{className:"contact-header"},m.a.createElement("div",null,m.a.createElement("h1",null,"Contact Me"))),m.a.createElement("section",{className:"contact-form-wrapper"},s&&m.a.createElement("div",null,m.a.createElement("h1",{style:{color:"white"},color:"white"},"...Is Loading")),m.a.createElement("form",{onChange:this.validateInputs,onSubmit:this.submitForm},m.a.createElement("div",{className:"input-wrapper"},m.a.createElement("label",{htmlFor:"name"},"Name"),m.a.createElement("input",{name:"name",className:"form-input name",type:"text",required:!0})),m.a.createElement("div",{className:"input-wrapper"},m.a.createElement("label",{htmlFor:"email"},"Email"),m.a.createElement("input",{name:"email",className:"form-input email",type:"email",required:!0})),m.a.createElement("div",{className:"input-wrapper"},m.a.createElement("label",{htmlFor:"message"},"Message"),m.a.createElement("textarea",{name:"message",className:"form-input message",type:"text",required:!0})),m.a.createElement("button",{className:"submit-btn",disabled:!t,type:"submit"},"Send Message!"))))}}]),t}(p.Component);t.default=Object(u.g)(g)},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(1),i=s(9);s(98);t.default=Object(o.g)(function(e){e.lang;var t=(new Date).getFullYear(),n=i.footer.copyright,o=i.footer.social;return a.a.createElement("main",{className:"footer"},a.a.createElement("section",{className:"social-icons"},a.a.createElement("a",{className:"social-icon resume",target:"_blank",rel:"noopener noreferrer",href:s(134)("./".concat(o.resume))},a.a.createElement("i",{className:"far fa-file"})),a.a.createElement("a",{className:"social-icon github",target:"_blank",rel:"noopener noreferrer",href:o.github},a.a.createElement("i",{className:"fab fa-github-square"})),a.a.createElement("a",{className:"social-icon linkedin",target:"_blank",rel:"noopener noreferrer",href:o.linkedin},a.a.createElement("i",{className:"fab fa-linkedin"}))),a.a.createElement("section",{className:"copyright"},a.a.createElement("p",null,n," \xa9 ",t)))})},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(1);t.default=Object(o.g)(function(){return a.a.createElement("main",{className:"not-found"},a.a.createElement("section",null,a.a.createElement("h1",null,"NOT FOUND!!!!")))})},function(e,t,s){"use strict";s.r(t);var n=s(24),a=s(25),o=s(27),i=s(26),r=s(28),c=s(0),l=s.n(c),p=s(1),m=(s(55),s(14)),u=s(16),d=s(19),g=s(20),f=window.location.pathname,b=["en","jp","kr","es"].includes(f)?window.location.pathname.substring(1,3):"en";console.log(b);var h=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).call(this))}return Object(r.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m.default,{lang:b}),l.a.createElement(u.default,{lang:b}),l.a.createElement(d.default,{lang:b}),l.a.createElement(g.default,{lang:b}))}}]),t}(c.Component);t.default=Object(p.g)(h)},function(e,t,s){"use strict";s.r(t),s.d(t,"isMobile",function(){return n});var n=function(){var e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone|iPad|iPhone|iPod|android|Blackberry|webOS|Android|Mobile|Lumia|PlayBook|Tablet/i.test(e)||window.innerWidth<=768}},,,,,,,function(e,t){e.exports="./src/assets/images/global/aion-site-card-logo.jpeg.3c8476a324a9969fbe6fd227878d52a1"},,,function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(32),i=s.n(o),r=s(4),c=s(1),l=s(22),p=s(21),m=s(40);i.a.render(a.a.createElement(function(){return a.a.createElement(r.a,{basename:"/"},window.location.pathname.match(/(\/)$/)&&a.a.createElement(c.a,{to:"/en"}),a.a.createElement(c.d,null,a.a.createElement(c.b,{path:"/:lang",component:l.default}),a.a.createElement(c.b,{path:"*",component:p.default})))},null),document.getElementById("app")),m.unregister()},function(e,t,s){"use strict";s.r(t);var n=s(11),a=s(0),o=s.n(a),i=s(4),r=s(5),c=s.n(r),l=(s(62),function(e){var t,s=e.text,a=e.type,r=e.large,l=e.isExternal,p=e.url,m=e.isActive,u=e.callback,d=e.arrow,g=e.externalNewTab,f=c()((t={btn:!0},Object(n.a)(t,a,a),Object(n.a)(t,"active",m),Object(n.a)(t,"large",r),t)),b=function(){return o.a.createElement("i",{className:c()("btn-arrow","fas","fa-arrow-".concat(d))})};return l?o.a.createElement("a",{className:c()(f,"arrow-".concat(d)),href:p,target:g?"_blank":"_self"},d&&"left"===d&&b(),s,d&&"left"!==d&&b()):o.a.createElement("div",{"data-nchide":!0,className:c()(f,"arrow-".concat(d),Object(n.a)({},"no-url",!p)),onClick:u?function(e){u(e)}:function(){return!1}},d&&"left"===d&&b(),p?o.a.createElement(i.b,{to:p},s):s,d&&"left"!==d&&b())});l.defaultProps={type:"",text:"Go to Site",isExternal:!1,isActive:!1,large:!1,arrow:!1,externalNewTab:!0},t.default=l},function(e,t,s){"use strict";s.r(t);s(0)},function(e,t){e.exports={header:{banner:{text:{headline:{en:"Mig",es:"Miguel Guzman",kr:"\ubbf8\uad6c\uc5d8 \uad6c\uc988\ub9cc",jp:"\u30df\u30b2\u30eb\u30fb\u30b0\u30ba\u30de\u30f3"},sub_headline:{en:"Web Engineer",es:"Web Engineer",kr:"\uc6f9 \uc5d4\uc9c0\ub2c8\uc5b4",jp:"U~ebu enjinia"}}}}}},function(e){e.exports=[{name:"Lineage II",url:"https://www.lineage2.com",type:"ncsoft",year:["2019","2018"],tech:"React, Scss, Internal CMS, WebPack, NPM, GraphQL, AWS",api:["internal"],id:"lineage2",responsibilities:["Content Updates","Bug Fixes"],description:"The official site for the Lineage 2 PC Game."},{name:"Aion",url:"https://www.aiononline.com",type:"ncsoft",year:["2019","2018"],tech:"React, Scss, Internal CMS, WebPack, NPM, GraphQL, AWS",api:["internal"],id:"aion",responsibilities:["Main Developer","Content Updates","Bug Fixes"],description:"The official site for the Aion PC Game."},{name:"NcSoft",url:"https://www.ncsoft.com",type:"ncsoft",year:["2019","2018","2017"],tech:"jQuery, Scss, Grunt, NPM, MT5",api:["internal"],id:"ncsoft",responsibilities:["Main Developer","Content Updates","Bug Fixes"],description:"The official corporate site for NcSoft."},{name:"Launcher SignUp",url:"https://www.web.ncsoft.com/signup",type:"ncsoft",year:["2019"],tech:"React, Scss, Gatsby, AWS, NPM, WebPack, GraphQL",api:null,id:"launcher-signup",responsibilities:["Main Developer","Built from scratch","Content Updates","Bug Fixes"],description:"The launcher sign up page for NcSoft PC Games."},{name:"Aion Legions",url:"https://www.aionlegionsofwar.com",type:"ncsoft",year:["2019"],tech:"React, Scss, NPM, Webpack, AWS, GraphQL",api:["internal"],id:"aion-legions",responsibilities:["Main Developer(2018, 2019)","Content Updates","Bug Fixes","Special Events"],description:"The official site for the Aion: Legions of War Mobile Game."},{name:"Blade and Soul",url:"https://www.bladeandsoul.com",type:"ncsoft",year:["2019","2018","2017"],tech:"React, Scss, jQuery, NPM, Bower, Grunt, Jekyll, GraphQL, Internal CMS",api:["internal"],id:"bns",responsibilities:["Content Updates","Bug Fixes","Special Events"],description:"The official site for the Blade and Soul PC Game."},{name:"Blade and Soul Esports",url:"https://www.esports.bladeandsoul.com",type:"ncsoft",year:["2018","2017"],tech:"React, Scss, NPM, GraphQL, Internal CMS",api:["internal"],id:"bns-esports",responsibilities:["Main Developer(2017)","Built from scratch","Content Updates","Bug Fixes","Special Events"],description:"The official site for Blade and Soul eSports."},{name:"Blade and Soul Forums",url:"https://forums.bladeandsoul.com",type:"ncsoft",year:["2018","2017"],tech:"Scss, IPBoard, PHP, Compass, NPM",api:null,id:"bns-forums",responsibilities:["Main Developer","Implemented Design and front-end structure"],description:"The official forums for the Blade and Soul PC Game."},{name:"Aion Forums",url:"https://forums.aiononline.com",type:"ncsoft",year:["2017"],tech:"Scss, IPBoard, PHP, Compass, NPM",api:["internal"],id:"aion-forums",responsibilities:["Main Developer","Implemented Design and front-end structure"],description:"The official forums for the Aion PC Game."},{name:"Lineage II Forums",url:"https://forums.lineage2.com",type:"ncsoft",year:["2018"],tech:"Scss, IPBoard, PHP, Compass, NPM",api:["internal"],id:"lineage2-forums",responsibilities:["Main Developer","Implemented Design and front-end structure"],description:"The official forums for the Lineage II PC Game."},{name:"Aion Legions Forums",url:"https://forums.aionlegionsofwar.com",type:"ncsoft",year:["2018","2019"],tech:"Scss, IPBoard, PHP, Compass, NPM",api:["internal"],id:"aion-legions-forums",responsibilities:["Main Developer","Implemented front-end structure for development"],description:"The official forums for the Aion: Legions of War Mobile Game."},{name:"Anime LunchBox",url:"http://anime-lunchbox-app.herokuapp.com/",type:"personal",year:["2016"],tech:"React, Scss, NPM, WebPack, Node, Express, Firebase",api:["kitsu"],id:"lunch-box",responsibilities:["Main Developer","Designed and Implemented project"],description:"Anime web app that helps us search, favorite, and add anime to our watchlist!"},{name:"Goku Hangman",url:"https://migsadventure.github.io/GokuHangman/",type:"personal",year:["2016"],tech:"jQuery",api:null,id:"hangman",responsibilities:["Sole Developer","Designed and Implemented project"],description:"Simple Goku Hangman game that has a large array words with one free hint."},{name:"PokedexGo",url:"https://migsadventure.github.io/pokedexgo/",type:"personal",year:["2016"],tech:"jQuery",api:null,id:"pokedex",responsibilities:["Sole Developer","Designed and Implemented project"],description:"Inspired by the PokemonGO game. Listen to the original pokemon sounds, search pokemon, and use the CP calculator."}]},function(e,t,s){"use strict";s.r(t),s.d(t,"scrollTo",function(){return n});var n=function e(t,s,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(!(n<=0)){var o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,i=(s+a-o)/n*2;setTimeout(function(){window.scrollTo(0,o+i),e(t,s,n-2,a)},10)}}},function(e,t,s){"use strict";s.r(t),s.d(t,"sendEmail",function(){return o});var n=s(105),a=s.n(n),o=function(e,t){a.a.post("http://localhost:8000/api/email/portfolio-contact",e).then(function(e){return e.data.accepted&&t("success")}).catch(function(e){return e&&t("error")})}},function(e,t,s){"use strict";s.r(t),s.d(t,"register",function(){return a}),s.d(t,"unregister",function(){return i});var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function a(e){if("serviceWorker"in navigator){if(new URL("/fifth-portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/fifth-portfolio","/service-worker.js");n?(!function(e,t){fetch(e).then(function(s){var n=s.headers.get("content-type");404===s.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):o(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):o(t,e)})}}function o(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var s=e.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}function i(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},,,function(e,t){e.exports="./src/assets/images/global/aion-forums-site-card-logo.jpeg.553522cbf3990a764f9fc01a41615112"},function(e,t){e.exports="./src/assets/images/global/aion-legions-forums-site-card-logo.jpeg.7cece27071f702cc140a56c7b9fd094d"},function(e,t){e.exports="./src/assets/images/global/aion-legions-site-card-logo.jpeg.42e7c94ed7bb7e1329352d9284bbb681"},function(e,t){e.exports="./src/assets/images/global/bns-esports-site-card-logo.jpeg.3d5ed5f7d6b73ed7b7c08b6f6f38177e"},function(e,t){e.exports="./src/assets/images/global/bns-site-card-logo.jpeg.41e362b86c67941b154d0013b8f13ee7"},function(e,t){e.exports="./src/assets/images/global/lineage2-forums-site-card-logo.jpeg.bae9f75b82dec7a6f51dd849d108306d"},function(e,t){e.exports="./src/assets/images/global/lineage2-site-card-logo.jpeg.a9da45ab9afba42c01b86ff0bc517800"},function(e,t){e.exports="./src/assets/images/global/ncsoft-site-card-logo.jpeg.8f13b7f0d6c782dc42ee43b07882425d"},,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t){e.exports="./src/assets/images/desktop/screenshots/aion-forums-site.jpeg.b060cea6b24230359883e01d058aa80e"},function(e,t){e.exports="./src/assets/images/desktop/screenshots/aion-legacy-site.jpeg.b608853db6b4858792413650fe964d76"},function(e,t){e.exports="./src/assets/images/desktop/screenshots/aion-legions-forums-site.jpeg.1eeb0ce03538fcc540d3c1bc4274e3bb"},function(e,t){e.exports="./src/assets/images/desktop/screenshots/aion-legions-site.jpeg.38ef3823004eee52725a059f4a680ab6"},function(e,t){e.exports="./src/assets/images/desktop/screenshots/aion-site.jpeg.74143b18611766a67c6d26c3703cb36e"},function(e,t){e.exports="./src/assets/images/desktop/screenshots/bns-forums-site.jpeg.9117527a4830f9e6a41803f9150b36b1"},function(e,t){e.exports="./src/assets/images/desktop/screenshots/bns-site.jpeg.9e3efb58e818230c0e5d984276ab1a1d"},function(e,t){e.exports="./src/assets/images/desktop/screenshots/launcher-signup-site.jpeg.f8f9b183779180eec2036c9f3c140982"},function(e,t){e.exports="./src/assets/images/desktop/screenshots/lineage2-forums-site.jpeg.1904adb5bc956e48bef541ba3c48e13a"},function(e,t){e.exports="./src/assets/images/desktop/screenshots/lineage2-legacy-site.jpeg.25da702afbd45fbaf645c6322147e6eb"},function(e,t){e.exports="./src/assets/images/desktop/screenshots/lineage2-site.jpeg.6bd9a9fc75b2a4aa8268af23da707965"},function(e,t){e.exports="./src/assets/images/desktop/screenshots/ncsoft-site.jpeg.bc88e90e7643e843c3afc5cf053f9ce0"},function(e,t){e.exports="./src/assets/images/desktop/speedway-night.jpeg.97fd95c25e9255a31c78208fe3d28688"},function(e,t){e.exports="./src/assets/images/mobile/screenshots/aion-forums-site.jpeg.94fdb0baa72d918ae62ff95fcd23215b"},function(e,t){e.exports="./src/assets/images/mobile/screenshots/aion-legacy-site.jpeg.2fd6ed1cdfd5eb60d98cd1fac207f77e"},function(e,t){e.exports="./src/assets/images/mobile/screenshots/aion-legions-forums.jpeg.f8cfcf535d61025571729e63e60d68ad"},function(e,t){e.exports="./src/assets/images/mobile/screenshots/aion-legions-site.jpeg.a32e4d57efafd93672c0135e7a453053"},function(e,t){e.exports="./src/assets/images/mobile/screenshots/aion-site.jpeg.cb72ee3773570c1c52faa7d007757835"},function(e,t){e.exports="./src/assets/images/mobile/screenshots/bns-forums-site.jpeg.fdf3c77a47e652c99336525c8dc1fd32"},function(e,t){e.exports="./src/assets/images/mobile/screenshots/bns-site.jpeg.13230ed1b3df0b9ec03185ec777dc21a"},function(e,t){e.exports="./src/assets/images/mobile/screenshots/launcher-signup-site.jpeg.db784dab72eca69010a9f526b7cf7702"},function(e,t){e.exports="./src/assets/images/mobile/screenshots/lineage2-forums-site.jpeg.349f9dfe20535a02b1bb206c73655081"},function(e,t){e.exports="./src/assets/images/mobile/screenshots/lineage2-legacy-site.jpeg.132d89bd5902c3f2727d022d163fb772"},function(e,t){e.exports="./src/assets/images/mobile/screenshots/lineage2-site.jpeg.72445e7093bf9ff859f02ff9e6171bc6"},function(e,t){e.exports="./src/assets/images/mobile/screenshots/ncsoft-site.jpeg.a7c6c82e7779f88ac3f8de7f88bd2885"},function(e,t){e.exports="./src/assets/images/mobile/speedway-night.jpeg.37aabb61638e52d0bca50d2b4609f22b"},function(e,t,s){},,,,,,,,,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(32),i=s.n(o),r=s(22);it("renders without crashing",function(){var e=document.createElement("div");i.a.render(a.a.createElement(r.default,null),e),i.a.unmountComponentAtNode(e)})},function(e,t,s){"use strict";s.r(t),s.d(t,"CDN_URL",function(){return n}),s.d(t,"IMAGES_PATH",function(){return a});var n="https://s3-us-west-1.amazonaws.com/cdn.migsadventure.com/portfolio/images/",a="assets/images/"},function(e){!function(){var e=new Error("Cannot find module './constants/data/cdn-files.json'");throw e.code="MODULE_NOT_FOUND",e}()},function(e,t){},,,,function(e,t,s){e.exports=s(33)},,,,,,,,,function(e,t,s){var n={"./aion-forums-site-card-logo.jpeg":43,"./aion-legions-forums-site-card-logo.jpeg":44,"./aion-legions-site-card-logo.jpeg":45,"./aion-site-card-logo.jpeg":30,"./bns-esports-site-card-logo.jpeg":46,"./bns-site-card-logo.jpeg":47,"./lineage2-forums-site-card-logo.jpeg":48,"./lineage2-site-card-logo.jpeg":49,"./ncsoft-site-card-logo.jpeg":50};function a(e){var t=o(e);return s(t)}function o(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=115},function(e,t,s){var n={"./desktop/screenshots/aion-forums-site.jpeg":63,"./desktop/screenshots/aion-legacy-site.jpeg":64,"./desktop/screenshots/aion-legions-forums-site.jpeg":65,"./desktop/screenshots/aion-legions-site.jpeg":66,"./desktop/screenshots/aion-site.jpeg":67,"./desktop/screenshots/bns-forums-site.jpeg":68,"./desktop/screenshots/bns-site.jpeg":69,"./desktop/screenshots/launcher-signup-site.jpeg":70,"./desktop/screenshots/lineage2-forums-site.jpeg":71,"./desktop/screenshots/lineage2-legacy-site.jpeg":72,"./desktop/screenshots/lineage2-site.jpeg":73,"./desktop/screenshots/ncsoft-site.jpeg":74,"./desktop/speedway-night.jpeg":75,"./global/aion-forums-site-card-logo.jpeg":43,"./global/aion-legions-forums-site-card-logo.jpeg":44,"./global/aion-legions-site-card-logo.jpeg":45,"./global/aion-site-card-logo.jpeg":30,"./global/bns-esports-site-card-logo.jpeg":46,"./global/bns-site-card-logo.jpeg":47,"./global/lineage2-forums-site-card-logo.jpeg":48,"./global/lineage2-site-card-logo.jpeg":49,"./global/ncsoft-site-card-logo.jpeg":50,"./mobile/screenshots/aion-forums-site.jpeg":76,"./mobile/screenshots/aion-legacy-site.jpeg":77,"./mobile/screenshots/aion-legions-forums.jpeg":78,"./mobile/screenshots/aion-legions-site.jpeg":79,"./mobile/screenshots/aion-site.jpeg":80,"./mobile/screenshots/bns-forums-site.jpeg":81,"./mobile/screenshots/bns-site.jpeg":82,"./mobile/screenshots/launcher-signup-site.jpeg":83,"./mobile/screenshots/lineage2-forums-site.jpeg":84,"./mobile/screenshots/lineage2-legacy-site.jpeg":85,"./mobile/screenshots/lineage2-site.jpeg":86,"./mobile/screenshots/ncsoft-site.jpeg":87,"./mobile/speedway-night.jpeg":88};function a(e){var t=o(e);return s(t)}function o(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=116},,,,,,,,,,,,,,,,,,function(e,t,s){var n={"./":33,"./Api/contact":39,"./Api/contact.js":39,"./App.test":99,"./App.test.js":99,"./app.scss":135,"./assets/images/desktop/screenshots/aion-forums-site.jpeg":63,"./assets/images/desktop/screenshots/aion-legacy-site.jpeg":64,"./assets/images/desktop/screenshots/aion-legions-forums-site.jpeg":65,"./assets/images/desktop/screenshots/aion-legions-site.jpeg":66,"./assets/images/desktop/screenshots/aion-site.jpeg":67,"./assets/images/desktop/screenshots/bns-forums-site.jpeg":68,"./assets/images/desktop/screenshots/bns-site.jpeg":69,"./assets/images/desktop/screenshots/launcher-signup-site.jpeg":70,"./assets/images/desktop/screenshots/lineage2-forums-site.jpeg":71,"./assets/images/desktop/screenshots/lineage2-legacy-site.jpeg":72,"./assets/images/desktop/screenshots/lineage2-site.jpeg":73,"./assets/images/desktop/screenshots/ncsoft-site.jpeg":74,"./assets/images/desktop/speedway-night.jpeg":75,"./assets/images/global/aion-forums-site-card-logo.jpeg":43,"./assets/images/global/aion-legions-forums-site-card-logo.jpeg":44,"./assets/images/global/aion-legions-site-card-logo.jpeg":45,"./assets/images/global/aion-site-card-logo.jpeg":30,"./assets/images/global/bns-esports-site-card-logo.jpeg":46,"./assets/images/global/bns-site-card-logo.jpeg":47,"./assets/images/global/lineage2-forums-site-card-logo.jpeg":48,"./assets/images/global/lineage2-site-card-logo.jpeg":49,"./assets/images/global/ncsoft-site-card-logo.jpeg":50,"./assets/images/mobile/screenshots/aion-forums-site.jpeg":76,"./assets/images/mobile/screenshots/aion-legacy-site.jpeg":77,"./assets/images/mobile/screenshots/aion-legions-forums.jpeg":78,"./assets/images/mobile/screenshots/aion-legions-site.jpeg":79,"./assets/images/mobile/screenshots/aion-site.jpeg":80,"./assets/images/mobile/screenshots/bns-forums-site.jpeg":81,"./assets/images/mobile/screenshots/bns-site.jpeg":82,"./assets/images/mobile/screenshots/launcher-signup-site.jpeg":83,"./assets/images/mobile/screenshots/lineage2-forums-site.jpeg":84,"./assets/images/mobile/screenshots/lineage2-legacy-site.jpeg":85,"./assets/images/mobile/screenshots/lineage2-site.jpeg":86,"./assets/images/mobile/screenshots/ncsoft-site.jpeg":87,"./assets/images/mobile/speedway-night.jpeg":88,"./assets/pdf/resume.pdf":136,"./components/About":35,"./components/About/":35,"./components/About/about.scss":137,"./components/About/index":35,"./components/About/index.js":35,"./components/App":22,"./components/App.js":22,"./components/Contact":19,"./components/Contact/":19,"./components/Contact/contact.scss":89,"./components/Contact/index":19,"./components/Contact/index.js":19,"./components/Footer":20,"./components/Footer/":20,"./components/Footer/footer.scss":98,"./components/Footer/index":20,"./components/Footer/index.js":20,"./components/Header":14,"./components/Header/":14,"./components/Header/Banner":15,"./components/Header/Banner/":15,"./components/Header/Banner/banner.scss":56,"./components/Header/Banner/index":15,"./components/Header/Banner/index.js":15,"./components/Header/header.scss":138,"./components/Header/index":14,"./components/Header/index.js":14,"./components/NotFound":21,"./components/NotFound/":21,"./components/NotFound/index":21,"./components/NotFound/index.js":21,"./components/NotFound/not-found.scss":139,"./components/Projects":16,"./components/Projects/":16,"./components/Projects/ProjectCard":12,"./components/Projects/ProjectCard/":12,"./components/Projects/ProjectCard/index":12,"./components/Projects/ProjectCard/index.js":12,"./components/Projects/ProjectCard/project-card.scss":58,"./components/Projects/ProjectPreview":13,"./components/Projects/ProjectPreview/":13,"./components/Projects/ProjectPreview/index":13,"./components/Projects/ProjectPreview/index.js":13,"./components/Projects/ProjectPreview/project-preview.scss":61,"./components/Projects/ProjectsFilter":17,"./components/Projects/ProjectsFilter/":17,"./components/Projects/ProjectsFilter/index":17,"./components/Projects/ProjectsFilter/index.js":17,"./components/Projects/ProjectsFilter/projects-filter.scss":59,"./components/Projects/index":16,"./components/Projects/index.js":16,"./components/Projects/projects.scss":60,"./components/_global/Button":18,"./components/_global/Button/":18,"./components/_global/Button/button":34,"./components/_global/Button/button.js":34,"./components/_global/Button/button.scss":62,"./components/_global/Button/index":18,"./components/_global/Button/index.js":18,"./constants/config":100,"./constants/config.js":100,"./constants/data/cdn-files":101,"./constants/data/cdn-files.json":101,"./constants/data/global":9,"./constants/data/global.js":9,"./constants/data/header":36,"./constants/data/header.js":36,"./constants/data/projects":37,"./constants/data/projects.json":37,"./index":33,"./index.js":33,"./logo.svg":140,"./serviceWorker":40,"./serviceWorker.js":40,"./styles/base.scss":55,"./styles/global.scss":141,"./styles/partials/_animations.scss":142,"./styles/partials/_mixins.scss":143,"./styles/partials/_placeholders.scss":144,"./styles/partials/_settings.scss":145,"./styles/vendor/fa.scss":146,"./styles/vendor/fonts.scss":147,"./styles/vendor/normalize.scss":148,"./utils/dom":38,"./utils/dom.js":38,"./utils/screen":23,"./utils/screen.js":23,"./utils/url":102,"./utils/url.js":102};function a(e){var t=o(e);return s(t)}function o(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=134},function(e,t,s){},function(e,t,s){e.exports=s.p+"static/media/resume.d5a58c84.pdf"},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){e.exports=s.p+"static/media/logo.5d5d9eef.svg"},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){}],[[106,1,2]]]);
//# sourceMappingURL=main.a43af86b.chunk.js.map