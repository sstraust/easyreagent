// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljss.core');
goog.require('cljs.core');
goog.require('cljss.sheet');
goog.require('cljss.utils');
goog.require('clojure.string');
cljss.core.sheets = cljs.core.atom.call(null,(new cljs.core.List(null,cljss.sheet.create_sheet.call(null),null,(1),null)));
cljss.core.remove_styles_BANG_ = (function cljss$core$remove_styles_BANG_(){
cljs.core.run_BANG_.call(null,cljss.sheet.flush_BANG_,cljs.core.deref.call(null,cljss.core.sheets));

return cljs.core.reset_BANG_.call(null,cljss.core.sheets,(new cljs.core.List(null,cljss.sheet.create_sheet.call(null),null,(1),null)));
});
/**
 * Takes class name, static styles and dynamic styles.
 * Injects styles and returns a string of generated class names.
 */
cljss.core.css = (function cljss$core$css(cls,static$,vars){
var static$__$1 = ((typeof static$ === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [static$], null):static$);
var sheet = cljs.core.first.call(null,cljs.core.deref.call(null,cljss.core.sheets));
if(cljs.core.truth_(cljss.sheet.filled_QMARK_.call(null,sheet))){
cljs.core.swap_BANG_.call(null,cljss.core.sheets,cljs.core.conj,cljss.sheet.create_sheet.call(null));

return cljss.core.css.call(null,cls,static$__$1,vars);
} else {
var G__565_575 = static$__$1;
var vec__566_576 = G__565_575;
var seq__567_577 = cljs.core.seq.call(null,vec__566_576);
var first__568_578 = cljs.core.first.call(null,seq__567_577);
var seq__567_579__$1 = cljs.core.next.call(null,seq__567_577);
var s_580 = first__568_578;
var static_581__$2 = seq__567_579__$1;
var idx_582 = (0);
var G__565_583__$1 = G__565_575;
var idx_584__$1 = idx_582;
while(true){
var vec__572_585 = G__565_583__$1;
var seq__573_586 = cljs.core.seq.call(null,vec__572_585);
var first__574_587 = cljs.core.first.call(null,seq__573_586);
var seq__573_588__$1 = cljs.core.next.call(null,seq__573_586);
var s_589__$1 = first__574_587;
var static_590__$3 = seq__573_588__$1;
var idx_591__$2 = idx_584__$1;
var cls_592__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_591__$2)].join('');
cljss.sheet.insert_BANG_.call(null,sheet,s_589__$1,cls_592__$1);

if(cljs.core.empty_QMARK_.call(null,static_590__$3)){
} else {
var G__593 = static_590__$3;
var G__594 = (idx_591__$2 + (1));
G__565_583__$1 = G__593;
idx_584__$1 = G__594;
continue;
}
break;
}

if((cljs.core.count.call(null,vars) > (0))){
var var_cls = ["vars-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,vars))].join('');
cljss.sheet.insert_BANG_.call(null,sheet,(function (){
return cljss.utils.build_css.call(null,var_cls,vars);
}),var_cls);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls)," ",var_cls].join('');
} else {
return cls;
}
}
});
/**
 * Takes CSS animation name, static styles and dynamic styles.
 * Injects styles and returns generated CSS animation name.
 */
cljss.core.css_keyframes = (function cljss$core$css_keyframes(cls,static$,vars){
var sheet = cljs.core.first.call(null,cljs.core.deref.call(null,cljss.core.sheets));
if(cljs.core.truth_(cljss.sheet.filled_QMARK_.call(null,sheet))){
cljs.core.swap_BANG_.call(null,cljss.core.sheets,cljs.core.conj,cljss.sheet.create_sheet.call(null));

return cljss.core.css_keyframes.call(null,cls,static$,vars);
} else {
var inner = cljs.core.reduce.call(null,(function (s,p__595){
var vec__596 = p__595;
var id = cljs.core.nth.call(null,vec__596,(0),null);
var val = cljs.core.nth.call(null,vec__596,(1),null);
return clojure.string.replace.call(null,s,id,val);
}),static$,vars);
var anim_name = ["animation-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,vars))].join('');
var keyframes = ["@keyframes ",anim_name,"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner),"}"].join('');
cljss.sheet.insert_BANG_.call(null,sheet,keyframes,anim_name);

return anim_name;
}
});
cljss.core._camel_case = (function cljss$core$_camel_case(k){
if((((k instanceof cljs.core.Keyword)) || (((typeof k === 'string') || ((k instanceof cljs.core.Symbol)))))){
var vec__599 = clojure.string.split.call(null,cljs.core.name.call(null,k),/-/);
var seq__600 = cljs.core.seq.call(null,vec__599);
var first__601 = cljs.core.first.call(null,seq__600);
var seq__600__$1 = cljs.core.next.call(null,seq__600);
var first_word = first__601;
var words = seq__600__$1;
if(((cljs.core.empty_QMARK_.call(null,words)) || (((cljs.core._EQ_.call(null,"aria",first_word)) || (cljs.core._EQ_.call(null,"data",first_word)))))){
return k;
} else {
return cljs.core.keyword.call(null,clojure.string.join.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,clojure.string.capitalize,words),first_word)));
}
} else {
return k;
}
});
cljss.core._compile_class_name = (function cljss$core$_compile_class_name(props){
var className = cljs.core.filter.call(null,cljs.core.identity,cljs.core.vals.call(null,cljs.core.select_keys.call(null,props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class-name","class-name",945142584)], null))));
if(cljs.core.empty_QMARK_.call(null,className)){
return null;
} else {
return [clojure.string.join.call(null," ",className)," "].join('');
}
});
cljss.core._mk_var_class = (function cljss$core$_mk_var_class(props,vars,cls,static$){
return cljss.core.css.call(null,cls,static$,cljs.core.map.call(null,(function (p__603){
var vec__604 = p__603;
var cls__$1 = cljs.core.nth.call(null,vec__604,(0),null);
var v = cljs.core.nth.call(null,vec__604,(1),null);
if((function (){var and__5041__auto__ = cljs.core.ifn_QMARK_.call(null,v);
if(and__5041__auto__){
if((!((v == null)))){
if((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$)))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,v);
}
} else {
return and__5041__auto__;
}
})()){
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,cljs.core.apply.call(null,v,cljs.core.map.call(null,(function (p1__602_SHARP_){
return cljs.core.get.call(null,props,p1__602_SHARP_,null);
}),cljs.core.flatten.call(null,(new cljs.core.List(null,cljs.core.meta.call(null,v),null,(1),null))))),null,(1),null)),(2),null));
} else {
if(cljs.core.ifn_QMARK_.call(null,v)){
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,v.call(null,props),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,v,null,(1),null)),(2),null));

}
}
}),vars));
});
cljss.core._meta_attrs = (function cljss$core$_meta_attrs(vars){
return cljs.core.set.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.meta,cljs.core.filter.call(null,(function (p1__608_SHARP_){
if((!((p1__608_SHARP_ == null)))){
if((((p1__608_SHARP_.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === p1__608_SHARP_.cljs$core$IWithMeta$)))){
return true;
} else {
if((!p1__608_SHARP_.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,p1__608_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,p1__608_SHARP_);
}
}),cljs.core.map.call(null,cljs.core.second,vars)))));
});
cljss.core._camel_case_attrs = (function cljss$core$_camel_case_attrs(props){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var k__$1 = (function (){var G__610 = k;
var G__610__$1 = (((G__610 instanceof cljs.core.Keyword))?G__610.fqn:null);
switch (G__610__$1) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return cljss.core._camel_case.call(null,k);

}
})();
return cljs.core.assoc.call(null,m,k__$1,v);
}),cljs.core.PersistentArrayMap.EMPTY,props);
});
cljss.core._styled = (function cljss$core$_styled(cls,static$,vars,attrs,create_element){
var clsn = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null))].join('');
var static$__$1 = ((cljss.utils.dev_QMARK_)?cljs.core.map.call(null,(function (p1__612_SHARP_){
return clojure.string.replace.call(null,p1__612_SHARP_,cls,clsn);
}),static$):static$);
var vars__$1 = ((cljss.utils.dev_QMARK_)?cljs.core.map.call(null,(function (p__613){
var vec__614 = p__613;
var k = cljs.core.nth.call(null,vec__614,(0),null);
var v = cljs.core.nth.call(null,vec__614,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace.call(null,k,cls,clsn),v], null);
}),vars):vars);
var cls__$1 = ((cljss.utils.dev_QMARK_)?clsn:cls);
return (function() { 
var G__620__delegate = function (props,children){
var vec__617 = ((cljs.core.map_QMARK_.call(null,props))?[props,children]:[cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.array,props,children)]);
var props__$1 = cljs.core.nth.call(null,vec__617,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__617,(1),null);
var var_class = cljss.core._mk_var_class.call(null,props__$1,vars__$1,cls__$1,static$__$1);
var meta_attrs = cljss.core._meta_attrs.call(null,vars__$1);
var className = [cljss.core._compile_class_name.call(null,props__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_class)].join('');
var props__$2 = cljss.core._camel_case_attrs.call(null,cljs.core.assoc.call(null,cljs.core.apply.call(null,cljs.core.dissoc,props__$1,cljs.core.concat.call(null,attrs,meta_attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"className","className",-1983287057)], null))),new cljs.core.Keyword(null,"className","className",-1983287057),className));
return create_element.call(null,props__$2,children__$1);
};
var G__620 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__621__i = 0, G__621__a = new Array(arguments.length -  1);
while (G__621__i < G__621__a.length) {G__621__a[G__621__i] = arguments[G__621__i + 1]; ++G__621__i;}
  children = new cljs.core.IndexedSeq(G__621__a,0,null);
} 
return G__620__delegate.call(this,props,children);};
G__620.cljs$lang$maxFixedArity = 1;
G__620.cljs$lang$applyTo = (function (arglist__622){
var props = cljs.core.first(arglist__622);
var children = cljs.core.rest(arglist__622);
return G__620__delegate(props,children);
});
G__620.cljs$core$IFn$_invoke$arity$variadic = G__620__delegate;
return G__620;
})()
;
});

//# sourceMappingURL=core.js.map
