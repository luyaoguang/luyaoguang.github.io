webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},o,!1,function(e){n("dYeI")},null,null).exports,a=n("/ocq"),r=n("zL8q"),l=n.n(r),c=(n("tvR6"),n("v2ns"),n("7QTg")),p={name:"homePage",data:function(){return{swiperOptionTop:{spaceBetween:10,loop:!0,loopedSlides:5,grabCursor:!0,effect:"fade",speed:2e3,parallax:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}},swiperOptionBottom:{spaceBetween:10,slidesPerView:4,touchRatio:.2,loop:!0,grabCursor:!0,loopedSlides:5,slideToClickedSlide:!0},items:[{className:"bg01",header:"疏雨闲处",content:"纵我不甘于改写,缘我选择了我的路。我当无悔于初心,更要无愧于未,无端晚秋未晚。"},{className:"bg02",header:"过去",content:"将来"},{className:"bg03",header:"111",content:"222"},{className:"bg04",header:"333",content:"444"},{className:"bg05",header:"555",content:"666"}]}},components:{swiper:c.swiper,swiperSlide:c.swiperSlide},computed:{},mounted:function(){var e=this.$refs.mySwiperTop.swiper,t=this.$refs.mySwiperBottom.swiper;e.controller.control=t,t.controller.control=e},methods:{goPerson:function(){this.$router.push("/person")}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"homePage"},[n("swiper",{ref:"mySwiperTop",staticClass:"topBox",attrs:{options:e.swiperOptionTop}},[e._l(e.items,function(e){return n("swiper-slide",{key:e.id,class:[e.className]})}),e._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),e._v(" "),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),e._v(" "),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2),e._v(" "),n("swiper",{ref:"mySwiperBottom",staticClass:"bottomBox",attrs:{options:e.swiperOptionBottom}},e._l(e.items,function(e){return n("swiper-slide",{key:e.id,class:[e.className]})})),e._v(" "),n("div",{staticClass:"person animated tada"},[n("h1",[e._v("Hello,I'm Lue")]),e._v(" "),n("h2",[e._v("我叫路耀广")]),e._v(" "),n("h2",[e._v("一名前端工程师")]),e._v(" "),n("a",{staticClass:"enterBtn",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.goPerson(t)}}},[e._v("我的主页")])])],1)},staticRenderFns:[]};var d=n("VU/8")(p,u,!1,function(e){n("cS9e")},"data-v-b1f8bcd0",null).exports,m={name:"person",data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect:function(e,t){console.log(e,t)}}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"slide-fade"}},[t("div",[t("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":this.activeIndex2,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:this.handleSelect}},[t("el-menu-item",{attrs:{index:"1"}},[this._v("处理中心")]),this._v(" "),t("el-menu-item",{attrs:{index:"2"}},[this._v("消息中心")])],1)],1)])},staticRenderFns:[]},f=n("VU/8")(m,v,!1,null,null,null).exports;s.default.use(a.a),s.default.use(l.a);var h=new a.a({routes:[{path:"/",component:d},{path:"/person",name:"person",component:f}]});n("oPmM");s.default.config.productionTip=!1,new s.default({el:"#app",router:h,components:{App:i},template:"<App/>"})},cS9e:function(e,t){},dYeI:function(e,t){},oPmM:function(e,t){},tvR6:function(e,t){},v2ns:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.59bc686dd5857c175170.js.map