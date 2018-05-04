webpackJsonp([1],{"6VMD":function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var r=a("7+uW"),e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},e,!1,function(t){a("6VMD")},null,null).exports,i=a("/ocq"),o={name:"HomePage",data:function(){return{isCrawling:!1,table:null}},methods:{crawlAllAuhtors:function(){this.isCrawling=!0,this.$store.dispatch("author/crawlAllAuthors")},crawlLastAuhtors:function(){this.isCrawling=!0,this.$store.dispatch("author/crawlAllLastAuthors")},shrinkTable:function(){this.table=$("#table-author").DataTable({dom:"Bfrtip",buttons:["copy","csv","excel","pdf","print"],destroy:!0})}},computed:{authors:function(){return this.$store.getters["author/getAuthors"]}},watch:{authors:function(t){t.length>0&&(this.isCrawling=!1)}},updated:function(){this.shrinkTable()},beforeUpdate:function(){this.table&&this.table.destroy()}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"m-home"},[t._m(0),t._v(" "),a("div",{staticClass:"row pt-4"},[a("div",{staticClass:"col"},[a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-primary",on:{click:function(s){t.crawlAllAuhtors()}}},[t._v("Crawl All Authors")]),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:function(s){t.crawlLastAuhtors()}}},[t._v("Crawl Last Authors")])]),t._v(" "),t.isCrawling?a("div",{staticClass:"progress mt-2"},[a("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuemax":"100"}})]):t._e()]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-striped display",attrs:{id:"table-author"}},[a("caption",[t._v("ACL Authors")]),t._v(" "),t._m(1),t._v(" "),a("tbody",t._l(t.authors,function(s,r){return a("tr",{key:r},[a("th",{attrs:{scope:"row"}},[t._v(t._s(r+1))]),t._v(" "),a("td",[t._v(t._s(s))])])}))])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row justify-content-center pt-2"},[s("h1",[this._v("Crawl ACL Auhtors with Accepted Papers")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[this._v("#")]),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Name")])])])}]};var c=a("VU/8")(o,l,!1,function(t){a("a6Ia")},"data-v-629df6b4",null).exports;r.a.use(i.a);var u=new i.a({routes:[{path:"/",name:"HomePage",component:c}]}),h=a("NYxO"),p=a("mtWM"),d=a.n(p),v=a("Zrlr"),f=a.n(v),A=a("wxAW"),m=a.n(A),w=new(function(){function t(){f()(this,t),this.httpSchema="http://",this.port=":8220",this.servers=[{name:"StatNLP 0",ip:"172.18.240.110",status:!1}],this.server=this.servers[0]}return m()(t,[{key:"getCrawlingAllAuthorsEndpoint",value:function(){return this.getEndpoint()+"/api/acl/authors/accepted"}},{key:"getEndpoint",value:function(){return this.httpSchema+this.server.ip+this.port}},{key:"getCrawlingAllLastAuthorsEndpoint",value:function(){return this.getEndpoint()+"/api/acl/authors/accepted/last"}}]),t}()),g={namespaced:!0,state:{authors:[]},getters:{getAuthors:function(t){return t.authors}},mutations:{crawlAllAuthors:function(t){var s=w.getCrawlingAllAuthorsEndpoint();d.a.get(s).then(function(s){t.authors=s.data}).catch(function(t){console.log(t)})},crawlAllLastAuthors:function(t){var s=w.getCrawlingAllLastAuthorsEndpoint();d.a.get(s).then(function(s){t.authors=s.data}).catch(function(t){console.log(t)})}},actions:{crawlAllAuthors:function(t){t.commit("crawlAllAuthors")},crawlAllLastAuthors:function(t){t.commit("crawlAllLastAuthors")}}};r.a.use(h.a);var _=new h.a.Store({modules:{author:g},state:{},getters:{},mutations:{},actions:{}});r.a.config.productionTip=!1,new r.a({el:"#app",store:_,router:u,components:{App:n},template:"<App/>"})},a6Ia:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.4edb2e6141e08a482ee0.js.map