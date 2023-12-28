// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
goog.scope(function(){
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object = goog.module.get('goog.object');
});
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__12256 = Object.getPrototypeOf(obj__$1);
var G__12259 = cljs.core.conj.call(null,protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors.call(null,obj__$1)], null));
obj__$1 = G__12256;
protos = G__12259;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$property_names_and_types(var_args){
var G__12265 = arguments.length;
switch (G__12265) {
case 1:
return cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.call(null,js_obj,null);
}));

(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__5520__auto__ = (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__12270(s__12272){
return (new cljs.core.LazySeq(null,(function (){
var s__12272__$1 = s__12272;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__12272__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var vec__12289 = cljs.core.first.call(null,xs__6012__auto__);
var i = cljs.core.nth.call(null,vec__12289,(0),null);
var map__12295 = cljs.core.nth.call(null,vec__12289,(1),null);
var map__12295__$1 = cljs.core.__destructure_map.call(null,map__12295);
var _obj = cljs.core.get.call(null,map__12295__$1,new cljs.core.Keyword(null,"_obj","_obj",-592966725));
var props = cljs.core.get.call(null,map__12295__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__5516__auto__ = ((function (s__12272__$1,vec__12289,i,map__12295,map__12295__$1,_obj,props,xs__6012__auto__,temp__5457__auto__,seen){
return (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__12270_$_iter__12275(s__12279){
return (new cljs.core.LazySeq(null,((function (s__12272__$1,vec__12289,i,map__12295,map__12295__$1,_obj,props,xs__6012__auto__,temp__5457__auto__,seen){
return (function (){
var s__12279__$1 = s__12279;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__12279__$1);
if(temp__5457__auto____$1){
var s__12279__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12279__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__12279__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__12285 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__12280 = (0);
while(true){
if((i__12280 < size__5519__auto__)){
var key = cljs.core._nth.call(null,c__5518__auto__,i__12280);
if(((cljs.core.not.call(null,cljs.core.get.call(null,seen,key))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
cljs.core.chunk_append.call(null,b__12285,(function (){var prop = cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get.call(null,props,key);
cljs.core.conj_BANG_.call(null,seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5455__auto__ = (function (){var or__5043__auto__ = cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get.call(null,prop,"value");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.apply.call(null,cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get.call(null,prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e12299){if((e12299 instanceof Error)){
var _e = e12299;
return "var";
} else {
throw e12299;

}
}})()], null);
})());

var G__12328 = (i__12280 + (1));
i__12280 = G__12328;
continue;
} else {
var G__12329 = (i__12280 + (1));
i__12280 = G__12329;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12285),cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__12270_$_iter__12275.call(null,cljs.core.chunk_rest.call(null,s__12279__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12285),null);
}
} else {
var key = cljs.core.first.call(null,s__12279__$2);
if(((cljs.core.not.call(null,cljs.core.get.call(null,seen,key))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
return cljs.core.cons.call(null,(function (){var prop = cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get.call(null,props,key);
cljs.core.conj_BANG_.call(null,seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5455__auto__ = (function (){var or__5043__auto__ = cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get.call(null,prop,"value");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.apply.call(null,cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get.call(null,prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e12307){if((e12307 instanceof Error)){
var _e = e12307;
return "var";
} else {
throw e12307;

}
}})()], null);
})(),cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__12270_$_iter__12275.call(null,cljs.core.rest.call(null,s__12279__$2)));
} else {
var G__12336 = cljs.core.rest.call(null,s__12279__$2);
s__12279__$1 = G__12336;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__12272__$1,vec__12289,i,map__12295,map__12295__$1,_obj,props,xs__6012__auto__,temp__5457__auto__,seen))
,null,null));
});})(s__12272__$1,vec__12289,i,map__12295,map__12295__$1,_obj,props,xs__6012__auto__,temp__5457__auto__,seen))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,cljs.core.js_keys.call(null,props)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__12270.call(null,cljs.core.rest.call(null,s__12272__$1)));
} else {
var G__12337 = cljs.core.rest.call(null,s__12272__$1);
s__12272__$1 = G__12337;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype.call(null,js_obj)));
}));

(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=js_introspection.js.map
