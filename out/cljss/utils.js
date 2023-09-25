// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljss.utils');
goog.require('cljs.core');
goog.require('clojure.string');
cljss.utils.dev_QMARK_ = goog.DEBUG;
cljss.utils.pseudo_QMARK_ = (function cljss$utils$pseudo_QMARK_(p__537){
var vec__538 = p__537;
var rule = cljs.core.nth.call(null,vec__538,(0),null);
var value = cljs.core.nth.call(null,vec__538,(1),null);
var and__5041__auto__ = cljs.core.re_matches.call(null,/&:.*/,cljs.core.name.call(null,rule));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.map_QMARK_.call(null,value);
} else {
return and__5041__auto__;
}
});
cljss.utils.nested_QMARK_ = (function cljss$utils$nested_QMARK_(p__541){
var vec__542 = p__541;
var rule = cljs.core.nth.call(null,vec__542,(0),null);
var value = cljs.core.nth.call(null,vec__542,(1),null);
return ((typeof rule === 'string') && (cljs.core.map_QMARK_.call(null,value)));
});
cljss.utils.literal_QMARK_ = (function cljss$utils$literal_QMARK_(x){
return ((typeof x === 'string') || (typeof x === 'number'));
});
cljss.utils.escape_val = (function cljss$utils$escape_val(rule,val){
if(cljs.core._EQ_.call(null,rule,new cljs.core.Keyword(null,"content","content",15833224))){
return cljs.core.pr_str.call(null,val);
} else {
return val;
}
});
cljss.utils.build_css = (function cljss$utils$build_css(cls,styles){
return (function (p1__545_SHARP_){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__545_SHARP_),"}"].join('');
}).call(null,clojure.string.join.call(null,"",cljs.core.map.call(null,(function (p__546){
var vec__547 = p__546;
var rule = cljs.core.nth.call(null,vec__547,(0),null);
var val = cljs.core.nth.call(null,vec__547,(1),null);
return [cljs.core.name.call(null,rule),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljss.utils.escape_val.call(null,rule,val)),";"].join('');
}),styles)));
});
cljss.utils.compile_css_rule = (function cljss$utils$compile_css_rule(p__550){
var vec__551 = p__550;
var rule = cljs.core.nth.call(null,vec__551,(0),null);
var val = cljs.core.nth.call(null,vec__551,(1),null);
var r = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.name.call(null,rule),":"].join('')], null);
var r__$1 = ((cljs.core.vector_QMARK_.call(null,val))?cljs.core.into.call(null,r,val):cljs.core.conj.call(null,r,val));
return cljs.core.conj.call(null,r__$1,";");
});
cljss.utils.reduce_str = (function cljss$utils$reduce_str(s){
return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (s__$1,s1){
var s0 = cljs.core.first.call(null,s__$1);
var srest = cljs.core.rest.call(null,s__$1);
if(((cljss.utils.literal_QMARK_.call(null,s1)) && (typeof s0 === 'string'))){
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s0),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1)].join(''),srest);
} else {
return cljs.core.cons.call(null,s1,s__$1);
}
}),(new cljs.core.List(null,"",null,(1),null)),s));
});

//# sourceMappingURL=utils.js.map
