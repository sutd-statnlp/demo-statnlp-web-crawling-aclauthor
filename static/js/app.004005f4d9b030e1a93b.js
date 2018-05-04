webpackJsonp([1],{"6VMD":function(t,s){},DQ4o:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")({name:"App"},n,!1,function(t){e("6VMD")},null,null).exports,i=e("/ocq"),o={name:"HomePage",data:function(){return{isCrawling:!1,table:null,title:"All Authors"}},methods:{crawlAllAuthors:function(){this.isCrawling=!0,this.$store.dispatch("author/crawlAllAuthors"),this.title="All Authors"},crawlAllLastAuthors:function(){this.isCrawling=!0,this.$store.dispatch("author/crawlAllLastAuthors"),this.title="All Last Authors"},crawlAllUniqueAuthors:function(){this.isCrawling=!0,this.$store.dispatch("author/crawlAllUniqueAuthors"),this.title="All Unique Authors"},crawlAllLastUniqueAuthors:function(){this.isCrawling=!0,this.$store.dispatch("author/crawlAllLastUniqueAuthors"),this.title="All Last Unique Authors"},shrinkTable:function(){this.table=$("#table-author").DataTable({dom:"Bfrtip",buttons:[{extend:"copy",title:this.title},{extend:"excel",title:this.title},{extend:"pdf",title:this.title},{extend:"csv",title:this.title},{extend:"print",title:this.title}],destroy:!0})}},computed:{authors:function(){return this.$store.getters["author/getAuthors"]}},watch:{authors:function(t){t.length>0&&(this.isCrawling=!1)}},updated:function(){this.shrinkTable()},beforeUpdate:function(){this.table&&this.table.destroy()}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"m-home"},[t._m(0),t._v(" "),e("div",{staticClass:"row pt-4"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-primary mt-2",on:{click:function(s){t.crawlAllAuthors()}}},[t._v("Crawl All Authors")]),t._v(" "),e("button",{staticClass:"btn btn-primary mt-2",on:{click:function(s){t.crawlAllLastAuthors()}}},[t._v("Crawl Last Authors")]),t._v(" "),e("button",{staticClass:"btn btn-primary mt-2",on:{click:function(s){t.crawlAllUniqueAuthors()}}},[t._v("Crawl Unique Authors")]),t._v(" "),e("button",{staticClass:"btn btn-primary mt-2",on:{click:function(s){t.crawlAllLastUniqueAuthors()}}},[t._v("Crawl Last Unique Authors")])]),t._v(" "),t.isCrawling?e("div",{staticClass:"progress mt-2"},[e("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuemax":"100"}})]):t._e()]),t._v(" "),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped display",attrs:{id:"table-author"}},[t._m(1),t._v(" "),e("tbody",t._l(t.authors,function(s,a){return e("tr",{key:a},[e("th",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),t._v(" "),e("td",[t._v(t._s(s))])])}))])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row justify-content-center pt-2"},[s("h1",[this._v("Crawl ACL Authors with Accepted Papers")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[this._v("#")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Name")])])])}]};var u=e("VU/8")(o,l,!1,function(t){e("DQ4o")},"data-v-68bd9a2a",null).exports;a.a.use(i.a);var c=new i.a({routes:[{path:"/",name:"HomePage",component:u}]}),h=e("NYxO"),p=e("mtWM"),A=e.n(p),d=e("Zrlr"),f=e.n(d),v=e("wxAW"),w=e.n(v),m=new(function(){function t(){f()(this,t),this.httpSchema="http://",this.port=":8220",this.servers=[{name:"StatNLP 0",ip:"172.18.240.110",status:!1}],this.server=this.servers[0]}return w()(t,[{key:"getAuthorsEndpoint",value:function(){return this.getEndpoint()+"/api/acl/authors/accepted"}},{key:"getEndpoint",value:function(){return this.httpSchema+this.server.ip+this.port}},{key:"getLastAuthorsEndpoint",value:function(){return this.getEndpoint()+"/api/acl/authors/accepted/last"}},{key:"getUniqueAuthorsEndpoint",value:function(){return this.getEndpoint()+"/api/acl/authors/accepted/unique"}},{key:"getLastUniqueAuthorsEndpoint",value:function(){return this.getEndpoint()+"/api/acl/authors/accepted/last/unique"}}]),t}()),g={namespaced:!0,state:{authors:[]},getters:{getAuthors:function(t){return t.authors}},mutations:{crawlAllAuthors:function(t){var s=m.getAuthorsEndpoint();A.a.get(s).then(function(s){t.authors=s.data}).catch(function(t){console.log(t)})},crawlAllLastAuthors:function(t){var s=m.getLastAuthorsEndpoint();A.a.get(s).then(function(s){t.authors=s.data}).catch(function(t){console.log(t)})},crawlAllUniqueAuthors:function(t){var s=m.getUniqueAuthorsEndpoint();A.a.get(s).then(function(s){t.authors=s.data}).catch(function(t){console.log(t)})},crawlAllLastUniqueAuthors:function(t){var s=m.getLastUniqueAuthorsEndpoint();A.a.get(s).then(function(s){t.authors=s.data}).catch(function(t){console.log(t)})}},actions:{crawlAllAuthors:function(t){t.commit("crawlAllAuthors")},crawlAllLastAuthors:function(t){t.commit("crawlAllLastAuthors")},crawlAllUniqueAuthors:function(t){t.commit("crawlAllUniqueAuthors")},crawlAllLastUniqueAuthors:function(t){t.commit("crawlAllLastUniqueAuthors")}}};a.a.use(h.a);var b=new h.a.Store({modules:{author:g},state:{},getters:{},mutations:{},actions:{}});a.a.config.productionTip=!1,new a.a({el:"#app",store:b,router:c,components:{App:r},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.004005f4d9b030e1a93b.js.map