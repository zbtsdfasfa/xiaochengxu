(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/mp-html/components/mp-html/mp-html"],{"2dc8":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("89b1")),a=[],r={name:"mp-html",data:function(){return{nodes:[]}},props:{containerStyle:{type:String,default:""},content:{type:String,default:""},copyLink:{type:[Boolean,String],default:!0},domain:String,errorImg:{type:String,default:""},lazyLoad:{type:[Boolean,String],default:!1},loadingImg:{type:String,default:""},pauseVideo:{type:[Boolean,String],default:!0},previewImg:{type:[Boolean,String],default:!0},scrollTable:[Boolean,String],selectable:[Boolean,String],setTitle:{type:[Boolean,String],default:!0},showImgMenu:{type:[Boolean,String],default:!0},tagStyle:Object,useAnchor:[Boolean,Number]},components:{node:function(){n.e("uni_modules/mp-html/components/mp-html/node/node").then(function(){return resolve(n("f3c4"))}.bind(null,n)).catch(n.oe)}},watch:{content:function(t){this.setContent(t)}},created:function(){this.plugins=[];for(var t=a.length;t--;)this.plugins.push(new a[t](this))},mounted:function(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeDestroy:function(){this._hook("onDetached")},methods:{in:function(t,e,n){t&&e&&n&&(this._in={page:t,selector:e,scrollTop:n})},navigateTo:function(e,n){var i=this;return new Promise((function(o,a){if(i.useAnchor){n=n||parseInt(i.useAnchor)||0;">>>";var r=t.createSelectorQuery().in(i._in?i._in.page:i).select((i._in?i._in.selector:"._root")+(e?"".concat(">>>","#").concat(e):"")).boundingClientRect();i._in?r.select(i._in.selector).scrollOffset().select(i._in.selector).boundingClientRect():r.selectViewport().scrollOffset(),r.exec((function(e){if(e[0]){var r=e[1].scrollTop+e[0].top-(e[2]?e[2].top:0)+n;i._in?i._in.page[i._in.scrollTop]=r:t.pageScrollTo({scrollTop:r,duration:300}),o()}else a(Error("Label not found"))}))}else a(Error("Anchor is disabled"))}))},getText:function(t){var e="";return function t(n){for(var i=0;i<n.length;i++){var o=n[i];if("text"===o.type)e+=o.text.replace(/&amp;/g,"&");else if("br"===o.name)e+="\n";else{var a="p"===o.name||"div"===o.name||"tr"===o.name||"li"===o.name||"h"===o.name[0]&&o.name[1]>"0"&&o.name[1]<"7";a&&e&&"\n"!==e[e.length-1]&&(e+="\n"),o.children&&t(o.children),a&&"\n"!==e[e.length-1]?e+="\n":"td"!==o.name&&"th"!==o.name||(e+="\t")}}}(t||this.nodes),e},getRect:function(){var e=this;return new Promise((function(n,i){t.createSelectorQuery().in(e).select("#_root").boundingClientRect().exec((function(t){return t[0]?n(t[0]):i(Error("Root label not found"))}))}))},pauseMedia:function(){for(var t=(this._videos||[]).length;t--;)this._videos[t].pause()},setPlaybackRate:function(t){this.playbackRate=t;for(var e=(this._videos||[]).length;e--;)this._videos[e].playbackRate(t)},setContent:function(t,e){var n=this;e&&this.imgList||(this.imgList=[]);var i=new o.default(this).parse(t);if(this.$set(this,"nodes",e?(this.nodes||[]).concat(i):i),this._videos=[],this.$nextTick((function(){n._hook("onLoad"),n.$emit("load")})),this.lazyLoad||this.imgList._unloadimgs<this.imgList.length/2){var a=0,r=function t(e){e&&e.height||(e={}),e.height===a?n.$emit("ready",e):(a=e.height,setTimeout((function(){n.getRect().then(t).catch(t)}),350))};this.getRect().then(r).catch(r)}else this.imgList._unloadimgs||this.getRect().then((function(t){n.$emit("ready",t)})).catch((function(){n.$emit("ready",{})}))},_hook:function(t){for(var e=a.length;e--;)this.plugins[e][t]&&this.plugins[e][t]()}}};e.default=r}).call(this,n("543d")["default"])},7407:function(t,e,n){"use strict";n.r(e);var i=n("f7ae"),o=n("8f5c");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("aa8e");var r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=c.exports},"8f5c":function(t,e,n){"use strict";n.r(e);var i=n("2dc8"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},aa8e:function(t,e,n){"use strict";var i=n("f2f5"),o=n.n(i);o.a},f2f5:function(t,e,n){},f7ae:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/mp-html/components/mp-html/mp-html-create-component',
    {
        'uni_modules/mp-html/components/mp-html/mp-html-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7407"))
        })
    },
    [['uni_modules/mp-html/components/mp-html/mp-html-create-component']]
]);
