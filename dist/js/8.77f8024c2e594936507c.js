webpackJsonp([8],{215:function(e,t,n){function i(e){n(679)}var o=n(54)(n(681),n(682),i,null,null);e.exports=o.exports},679:function(e,t,n){var i=n(680);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(202)("05073ff6",i,!0)},680:function(e,t,n){t=e.exports=n(201)(void 0),t.push([e.i,'body{margin:0;font:normal 75% Arial,Helvetica,sans-serif}canvas{display:block;vertical-align:bottom}#particles-js{position:absolute;width:100%;height:100%;left:0;right:0;top:180px;background-color:#064152;background-image:url("");background-repeat:no-repeat;background-size:cover;background-position:50% 50%}.count-particles{background:#002;position:absolute;top:48px;left:0;width:80px;color:#13e8e9;font-size:.8em;text-align:left;text-indent:4px;line-height:14px;padding-bottom:2px;font-family:Helvetica,Arial,sans-serif;font-weight:700}.js-count-particles{font-size:1.1em}#stats,.count-particles{-webkit-user-select:none}#stats{border-radius:3px 3px 0 0;overflow:hidden}.count-particles{border-radius:0 0 3px 3px}',""])},681:function(e,t,n){"use strict";function i(){particlesJS("particles-js",{particles:{number:{value:380,density:{enable:!0,value_area:800}},color:{value:"#caf55f"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});var e,t,n;t=new Stats,t.setMode(0),t.domElement.style.position="absolute",t.domElement.style.left="0px",t.domElement.style.top="0px",document.body.appendChild(t.domElement),e=document.querySelector(".js-count-particles"),n=function(){t.begin(),t.end(),window.pJSDom[0].pJS.particles&&window.pJSDom[0].pJS.particles.array&&(e.innerText=window.pJSDom[0].pJS.particles.array.length),requestAnimationFrame(n)},requestAnimationFrame(n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},mounted:function(){var e=this;i(),setTimeout(function(){e.$router.push("../results")},6e3)}}},682:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("div",{attrs:{id:"particles-js"}}),e._v(" "),n("div",{staticClass:"count-particles"},[n("span",{staticClass:"js-count-particles"},[e._v("--")]),e._v(" particles\n  ")])])}]}}});