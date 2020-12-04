(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{162:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return u})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return l})),n.d(e,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(171)),i=n(174),u={id:"run_nautilus",title:"Run Nautilus without Autonomous Loop Closure"},c={id:"run_nautilus",title:"Run Nautilus without Autonomous Loop Closure",description:"For this tutorial we will be using the [bag file here](https://drive.google.com/open?id=1thDp4MJF6l2yZ9Z_JFAmdhMQZrld0oQ5). Download it and put it in ```<catkin_workspace_path>/src/nautilus_stack/nautilus/data```. You will have to create this folder.",source:"@site/docs/run_nautilus.mdx",permalink:"/nautilus_stack/docs/run_nautilus",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/run_nautilus.mdx",sidebar:"sidebar",previous:{title:"Installing Nautilus",permalink:"/nautilus_stack/docs/install_nautilus"},next:{title:"Generate a Vector Map",permalink:"/nautilus_stack/docs/vectorize"}},l=[],s={rightToc:l};function p(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For this tutorial we will be using the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://drive.google.com/open?id=1thDp4MJF6l2yZ9Z_JFAmdhMQZrld0oQ5"}),"bag file here"),". Download it and put it in ",Object(o.b)("inlineCode",{parentName:"p"},"<catkin_workspace_path>/src/nautilus_stack/nautilus/data"),". You will have to create this folder."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"cd <catkin_workspace_path>/src/nautilus_stack/nautilus\nmkdir data\nmv ~/Downloads/<bag_file_name> data/\n")),Object(o.b)("p",null,"Now this bag file already has a launch file and config created for it, so from the catkin root we can just run it like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"cd <catkin_workspace_path>\nroslaunch src/nautilus_stack/launch/run_stack.launch\n")),Object(o.b)("p",null,"You should see RViz open and soon after the pointclouds from the bag file will appear in the window. Once the program prints ",Object(o.b)("inlineCode",{parentName:"p"},"Waiting for Loop Closure input.")," you can begin to fix any errors that it may have made. For example here is what the LRGC Bag looks like after running through the initial optimization."),Object(o.b)("img",{alt:"Nautilus Pre-Loop Closure",src:Object(i.a)("img/LGRC_Nautilus.png")}),Object(o.b)("p",null,'We can see this isn\'t perfect, the hallway on the left side is still not connected totally. To fix this we are going to use the Human in the Loop tool offered in nautilus. Click the "Hitl Slam Tool" Button that should be on your RViz toolbar. It looks like this:'),Object(o.b)("img",{alt:"HITL Button",src:Object(i.a)("img/HITL_slam_button.png")}),Object(o.b)("p",null,"After clicking that you will ",Object(o.b)("strong",{parentName:"p"},"not")," be able to move your camera. You can hit ESC to cancel the operation to get your camera into a better position if needed. From here you will have to draw two lines on the points that are supposed to be in the same place. This allows nautilus to slide the walls along each other until they are correct."),Object(o.b)("p",null,"After you do that you should see something like this as the final results:"),Object(o.b)("img",{alt:"Nautilus Post-Loop Closure",src:Object(i.a)("img/LGRC_Nautilus_Finished.png")}))}p.isMDXComponent=!0},171:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=a.a.createContext({}),s=function(t){var e=a.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):u({},e,{},t)),n},p=function(t){var e=s(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},b=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||h[b]||o;return n?a.a.createElement(d,u({ref:e},l,{components:n})):a.a.createElement(d,u({ref:e},l))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=b;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},172:function(t,e,n){"use strict";var r=n(0),a=n(54);e.a=function(){return Object(r.useContext)(a.a)}},174:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(176);var r=n(172);function a(t){var e=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?n+t.slice(1):n+t}},176:function(t,e,n){"use strict";var r=n(12),a=n(25),o=n(177),i="".startsWith;r(r.P+r.F*n(178)("startsWith"),"String",{startsWith:function(t){var e=o(this,t,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return i?i.call(e,r,n):e.slice(n,n+r.length)===r}})},177:function(t,e,n){var r=n(76),a=n(26);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(t))}},178:function(t,e,n){var r=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(a){}}return!0}}}]);