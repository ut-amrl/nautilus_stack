(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return b}));var n=a(2),o=a(9),i=(a(0),a(171)),r=a(174),c={id:"running_example_bags",title:"Running Example Bags"},l={id:"running_example_bags",title:"Running Example Bags",description:"Here is a collection of example bags and how to run them and the expected results you should get after the initial optimization using Nautilus. Good luck!",source:"@site/docs/running_example_bags.mdx",permalink:"/nautilus_stack/docs/running_example_bags",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/running_example_bags.mdx"},u=[{value:"Downloading the example files:",id:"downloading-the-example-files",children:[]},{value:"General Tutorial Structure:",id:"general-tutorial-structure",children:[]},{value:"CMU Cobot Bag:",id:"cmu-cobot-bag",children:[]},{value:"Jackal 2020 Bag",id:"jackal-2020-bag",children:[]},{value:"UT Automata Bag:",id:"ut-automata-bag",children:[]}],s={rightToc:u};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Here is a collection of example bags and how to run them and the expected results you should get after the initial optimization using Nautilus. Good luck!"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"These tutorials assume you have already installed and have Nautilus up and running")),Object(i.b)("h3",{id:"downloading-the-example-files"},"Downloading the example files:"),Object(i.b)("p",null,"All the files needed for the examples are in the following ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/TheCynosure/nautilus_examples"}),"github repository.")),Object(i.b)("p",null,"Clone this outside your catkin workspace which you should have created before installing nautilus."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone git@github.com:TheCynosure/nautilus_examples.git\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Whenever you see two angled brackets like <catkin_ws> this means to replace this part with the path to this folder, and remove the angle brackets. For example, on my computer catkin_ws is a folder inside my home directory so I would replace <catkin_ws> with ",Object(i.b)("inlineCode",{parentName:"p"},"~/catkin_ws"),"."))),Object(i.b)("h3",{id:"general-tutorial-structure"},"General Tutorial Structure:"),Object(i.b)("p",null,"Nautilus requires three things to run for most tutorials. It needs a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://wiki.ros.org/Bags"}),"bag file")," with your data from running your robot. Then it requires a configuration file written in lua that specifies the location of the bag and the topics inside the bag, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/nautilus_stack/docs/write_config"}),"more on that here"),". Lastly, a launch file that specifies the location of the config file."),Object(i.b)("h3",{id:"cmu-cobot-bag"},"CMU Cobot Bag:"),Object(i.b)("p",null,"The CMU Cobot Bag is a bag that was collected at Carnegie Mellon University on the Cobot. It exhibits poor LiDAR but good odometry. To run this bag first create a data folder inside the nautilus repository if not yet already created:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"cd <catkin_ws>/src/nautilus_stack/nautilus\nmkdir data\n")),Object(i.b)("p",null,"Now we need to move the CMU Cobot bag into this folder."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"cp <nautilus_examples>/bags/cmu-cobot.bag data/\n")),Object(i.b)("p",null,"The bag is now in the right location and we should create a configuration file for this specific robot, there is an already made configuration file named ",Object(i.b)("inlineCode",{parentName:"p"},"<nautilus_examples>/config/cmu_cobot_config.lua")," but we will explain it here first."),Object(i.b)("p",null,"First, let's copy it into the correct directory."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"cp <nautilus_examples>/configs/cmu_cobot_config.lua configs/\n")),Object(i.b)("p",null,"This is what the config looks like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'dofile(debug.getinfo(1).source:match("@?(.*/)") .. \'/default_config.lua\')\nbag_path="data/cmu-cobot.bag"          \nlidar_topic="laser"              \nodom_topic="odom"\nauto_lc=false\npose_number=1000\n')),Object(i.b)("p",null,"And now I will explain these lines one by one:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"dofile(debug.getinfo(1).source:match(\"@?(.*/)\") .. '/default_config.lua')\n")),Object(i.b)("p",null,"This line includes the ",Object(i.b)("inlineCode",{parentName:"p"},"default_config.lua")," file which contains the default values for many of the parameters of nautilus. All of these are describes in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/nautilus_stack/docs/config_params"}),"the config parameters API documentation.")," Although, only a few should be changed for a basic bag file."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'bag_path="data/cmu-cobot.bag"\n')),Object(i.b)("p",null,"This is the path to the bag relative to the root of ",Object(i.b)("inlineCode",{parentName:"p"},"nautilus_stack/nautilus"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'lidar_topic="laser"\nodom_topic="odom"\n')),Object(i.b)("p",null,"These are the topics for the LiDAR and odometry data respectively. How to get these values is explained in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/nautilus_stack/docs/write_config"}),"the write your own config tutorial"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"auto_lc=false\n")),Object(i.b)("p",null,"This tells nautilus not to perform automatic loop closure after the initial optimization. This feature is currently being rebuilt and is unstable, so don't use it."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"pose_number=1000\n")),Object(i.b)("p",null,"This means to collect up to 1000 poses from the bag file. If there are less then it will collect all possible poses. Poses are collected from the bag when there is sufficient movement between LiDAR scans to warrant adding that scan to the map. The pose is the center of the scan usually."),Object(i.b)("p",null,"Now that we have copied the bag and the config into the correct locations we are ready to write a launch file. A launch file is just a file that allows ROS to launch all the nodes needed for a program. Let's copy the example launch file into the right location."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"cp <nautilus_examples>/launch/run_cmu_cobot.launch <catkin_ws>/src/nautilus_stack/launch\n")),Object(i.b)("p",null,"This file is not important to look at, the only change that is needed between bag files is the config name on line 2."),Object(i.b)("p",null,"Now we are finally as set to run the example! To run simply run the following commands and wait for output in RViz."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"cd <catkin_ws>\ncatkin_make\nsource devel/setup.sh\nroslaunch src/nautilus_stack/launch/run_cmu_cobot.launch\n")),Object(i.b)("p",null,"After running that RViz will open and in a couple seconds you should see output like the following, this is the optimized map."),Object(i.b)("img",{alt:"CMU Cobot Initial Optimization Results",src:Object(r.a)("img/cmu-cobot-results.png")}),Object(i.b)("p",null,"This of course still needs loop closure. You can learn how to apply Human-In-The-Loop Loop Closure in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/nautilus_stack/docs/run_nautilus"}),"run nautilus tutorial"),"."),Object(i.b)("h3",{id:"jackal-2020-bag"},"Jackal 2020 Bag"),Object(i.b)("p",null,"If you skipped the above tutorial and need more explanation on any of these files then read the CMU Cobot Bag tutorial first. Then come back and copy all the files."),Object(i.b)("p",null,"The Jackal is a robot with poor odometry but good LiDAR. We start by copying all the files to their proper location froms the example folder."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"cp <nautilus_examples>/bags/jackal-2020.bag <catkin_ws>/src/nautilus_stack/nautilus/data/\ncp <nautilus_examples>/configs/jackal_2020_config.lua <catkin_ws>/src/nautilus_stack/nautilus/config\ncp <nautilus_examples>/launch/run_jackal_2020.laucnh <catkin_ws>/src/nautilus_stack/launch/\n")),Object(i.b)("p",null,"Then to run use just navigate to the catkin_ws root and use roslaunch like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"cd <catkin_ws>\nroslaunch src/nautilus_stack/launch/run_jackal_2020.launch\n")),Object(i.b)("p",null,"You should get results like the following:"),Object(i.b)("img",{alt:"Jackal 2020 Results Initial Optimization",src:Object(r.a)("img/jackal-2020-results.png")}),Object(i.b)("h3",{id:"ut-automata-bag"},"UT Automata Bag:"),Object(i.b)("p",null,"Again, if you have not done the CMU Cobot Bag tutorial above then I would suggest you do it so you know why we have these three separate files and what they each do. The UT Automata are small RC Cars that have short range LiDAR and poor odometry."),Object(i.b)("p",null,"First we have to copy all the relevant files."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"cp <nautilus_examples>/bags/ut-automata.bag <catkin_ws>/src/nautilus_stack/nautilus/data/\ncp <nautilus_examples>/configs/ut_automata_config.lua <catkin_ws>/src/nautilus_stack/nautilus/config\ncp <nautilus_examples>/launch/run_ut_automata.laucnh <catkin_ws>/src/nautilus_stack/launch/\n")),Object(i.b)("p",null,"Then you run the program like before:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"cd <catkin_ws>\nroslaunch src/nautilus_stack/launch/run_ut_automata.launch\n")),Object(i.b)("p",null,"Then you should get results like this:"),Object(i.b)("img",{alt:"UT Automata Results Initial Optimization",src:Object(r.a)("img/ut-automata-results.png")}),Object(i.b)("p",null,"This will also need HITL loop closure as mentioned in the CMU Cobot Tutorial. This is because the loop is not connecting back to the place it initially started due to odometry drift and there are no constraints added automatically (as of now) to correct for this. Refer to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/nautilus_stack/docs/run_nautilus"}),"run nautilus tutorial")," to see how to use HITL loop closure in nautilus."))}b.isMDXComponent=!0},171:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(a),h=n,d=b["".concat(r,".").concat(h)]||b[h]||p[h]||i;return a?o.a.createElement(d,c({ref:t},u,{components:a})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var u=2;u<i;u++)r[u]=a[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},172:function(e,t,a){"use strict";var n=a(0),o=a(54);t.a=function(){return Object(n.useContext)(o.a)}},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(176);var n=a(172);function o(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},176:function(e,t,a){"use strict";var n=a(12),o=a(25),i=a(177),r="".startsWith;n(n.P+n.F*a(178)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return r?r.call(t,n,a):t.slice(a,a+n.length)===n}})},177:function(e,t,a){var n=a(76),o=a(26);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(o(e))}},178:function(e,t,a){var n=a(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);