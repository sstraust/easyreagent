goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___37528 = arguments.length;
var i__5767__auto___37529 = (0);
while(true){
if((i__5767__auto___37529 < len__5766__auto___37528)){
args__5772__auto__.push((arguments[i__5767__auto___37529]));

var G__37530 = (i__5767__auto___37529 + (1));
i__5767__auto___37529 = G__37530;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37098){
var G__37099 = cljs.core.first(seq37098);
var seq37098__$1 = cljs.core.next(seq37098);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37099,seq37098__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37149 = cljs.core.seq(sources);
var chunk__37150 = null;
var count__37151 = (0);
var i__37152 = (0);
while(true){
if((i__37152 < count__37151)){
var map__37157 = chunk__37150.cljs$core$IIndexed$_nth$arity$2(null, i__37152);
var map__37157__$1 = cljs.core.__destructure_map(map__37157);
var src = map__37157__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37158){var e_37531 = e37158;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37531);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37531.message)].join('')));
}

var G__37532 = seq__37149;
var G__37533 = chunk__37150;
var G__37534 = count__37151;
var G__37535 = (i__37152 + (1));
seq__37149 = G__37532;
chunk__37150 = G__37533;
count__37151 = G__37534;
i__37152 = G__37535;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37149);
if(temp__5823__auto__){
var seq__37149__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37149__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37149__$1);
var G__37536 = cljs.core.chunk_rest(seq__37149__$1);
var G__37537 = c__5565__auto__;
var G__37538 = cljs.core.count(c__5565__auto__);
var G__37539 = (0);
seq__37149 = G__37536;
chunk__37150 = G__37537;
count__37151 = G__37538;
i__37152 = G__37539;
continue;
} else {
var map__37159 = cljs.core.first(seq__37149__$1);
var map__37159__$1 = cljs.core.__destructure_map(map__37159);
var src = map__37159__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37159__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37160){var e_37540 = e37160;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37540);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37540.message)].join('')));
}

var G__37541 = cljs.core.next(seq__37149__$1);
var G__37542 = null;
var G__37543 = (0);
var G__37544 = (0);
seq__37149 = G__37541;
chunk__37150 = G__37542;
count__37151 = G__37543;
i__37152 = G__37544;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37166 = cljs.core.seq(js_requires);
var chunk__37167 = null;
var count__37168 = (0);
var i__37169 = (0);
while(true){
if((i__37169 < count__37168)){
var js_ns = chunk__37167.cljs$core$IIndexed$_nth$arity$2(null, i__37169);
var require_str_37545 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37545);


var G__37546 = seq__37166;
var G__37547 = chunk__37167;
var G__37548 = count__37168;
var G__37549 = (i__37169 + (1));
seq__37166 = G__37546;
chunk__37167 = G__37547;
count__37168 = G__37548;
i__37169 = G__37549;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37166);
if(temp__5823__auto__){
var seq__37166__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37166__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37166__$1);
var G__37550 = cljs.core.chunk_rest(seq__37166__$1);
var G__37551 = c__5565__auto__;
var G__37552 = cljs.core.count(c__5565__auto__);
var G__37553 = (0);
seq__37166 = G__37550;
chunk__37167 = G__37551;
count__37168 = G__37552;
i__37169 = G__37553;
continue;
} else {
var js_ns = cljs.core.first(seq__37166__$1);
var require_str_37554 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37554);


var G__37555 = cljs.core.next(seq__37166__$1);
var G__37556 = null;
var G__37557 = (0);
var G__37558 = (0);
seq__37166 = G__37555;
chunk__37167 = G__37556;
count__37168 = G__37557;
i__37169 = G__37558;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37178){
var map__37179 = p__37178;
var map__37179__$1 = cljs.core.__destructure_map(map__37179);
var msg = map__37179__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37179__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37179__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37180(s__37181){
return (new cljs.core.LazySeq(null,(function (){
var s__37181__$1 = s__37181;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__37181__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__37186 = cljs.core.first(xs__6383__auto__);
var map__37186__$1 = cljs.core.__destructure_map(map__37186);
var src = map__37186__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__37181__$1,map__37186,map__37186__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37179,map__37179__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37180_$_iter__37182(s__37183){
return (new cljs.core.LazySeq(null,((function (s__37181__$1,map__37186,map__37186__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37179,map__37179__$1,msg,info,reload_info){
return (function (){
var s__37183__$1 = s__37183;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__37183__$1);
if(temp__5823__auto____$1){
var s__37183__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37183__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__37183__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__37185 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__37184 = (0);
while(true){
if((i__37184 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__37184);
cljs.core.chunk_append(b__37185,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37559 = (i__37184 + (1));
i__37184 = G__37559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37185),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37180_$_iter__37182(cljs.core.chunk_rest(s__37183__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37185),null);
}
} else {
var warning = cljs.core.first(s__37183__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37180_$_iter__37182(cljs.core.rest(s__37183__$2)));
}
} else {
return null;
}
break;
}
});})(s__37181__$1,map__37186,map__37186__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37179,map__37179__$1,msg,info,reload_info))
,null,null));
});})(s__37181__$1,map__37186,map__37186__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37179,map__37179__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37180(cljs.core.rest(s__37181__$1)));
} else {
var G__37560 = cljs.core.rest(s__37181__$1);
s__37181__$1 = G__37560;
continue;
}
} else {
var G__37561 = cljs.core.rest(s__37181__$1);
s__37181__$1 = G__37561;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37190_37562 = cljs.core.seq(warnings);
var chunk__37191_37563 = null;
var count__37192_37564 = (0);
var i__37193_37565 = (0);
while(true){
if((i__37193_37565 < count__37192_37564)){
var map__37198_37566 = chunk__37191_37563.cljs$core$IIndexed$_nth$arity$2(null, i__37193_37565);
var map__37198_37567__$1 = cljs.core.__destructure_map(map__37198_37566);
var w_37568 = map__37198_37567__$1;
var msg_37569__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37198_37567__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37198_37567__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37198_37567__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37198_37567__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37572)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37570),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37571),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37569__$1)].join(''));


var G__37573 = seq__37190_37562;
var G__37574 = chunk__37191_37563;
var G__37575 = count__37192_37564;
var G__37576 = (i__37193_37565 + (1));
seq__37190_37562 = G__37573;
chunk__37191_37563 = G__37574;
count__37192_37564 = G__37575;
i__37193_37565 = G__37576;
continue;
} else {
var temp__5823__auto___37577 = cljs.core.seq(seq__37190_37562);
if(temp__5823__auto___37577){
var seq__37190_37578__$1 = temp__5823__auto___37577;
if(cljs.core.chunked_seq_QMARK_(seq__37190_37578__$1)){
var c__5565__auto___37579 = cljs.core.chunk_first(seq__37190_37578__$1);
var G__37580 = cljs.core.chunk_rest(seq__37190_37578__$1);
var G__37581 = c__5565__auto___37579;
var G__37582 = cljs.core.count(c__5565__auto___37579);
var G__37583 = (0);
seq__37190_37562 = G__37580;
chunk__37191_37563 = G__37581;
count__37192_37564 = G__37582;
i__37193_37565 = G__37583;
continue;
} else {
var map__37202_37584 = cljs.core.first(seq__37190_37578__$1);
var map__37202_37585__$1 = cljs.core.__destructure_map(map__37202_37584);
var w_37586 = map__37202_37585__$1;
var msg_37587__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37202_37585__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37202_37585__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37202_37585__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37202_37585__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37590)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37588),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37589),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37587__$1)].join(''));


var G__37595 = cljs.core.next(seq__37190_37578__$1);
var G__37596 = null;
var G__37597 = (0);
var G__37598 = (0);
seq__37190_37562 = G__37595;
chunk__37191_37563 = G__37596;
count__37192_37564 = G__37597;
i__37193_37565 = G__37598;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37177_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37177_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37203){
var map__37204 = p__37203;
var map__37204__$1 = cljs.core.__destructure_map(map__37204);
var msg = map__37204__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37205 = cljs.core.seq(updates);
var chunk__37207 = null;
var count__37208 = (0);
var i__37209 = (0);
while(true){
if((i__37209 < count__37208)){
var path = chunk__37207.cljs$core$IIndexed$_nth$arity$2(null, i__37209);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37340_37601 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37344_37602 = null;
var count__37345_37603 = (0);
var i__37346_37604 = (0);
while(true){
if((i__37346_37604 < count__37345_37603)){
var node_37605 = chunk__37344_37602.cljs$core$IIndexed$_nth$arity$2(null, i__37346_37604);
if(cljs.core.not(node_37605.shadow$old)){
var path_match_37606 = shadow.cljs.devtools.client.browser.match_paths(node_37605.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37606)){
var new_link_37607 = (function (){var G__37372 = node_37605.cloneNode(true);
G__37372.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37606),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37372;
})();
(node_37605.shadow$old = true);

(new_link_37607.onload = ((function (seq__37340_37601,chunk__37344_37602,count__37345_37603,i__37346_37604,seq__37205,chunk__37207,count__37208,i__37209,new_link_37607,path_match_37606,node_37605,path,map__37204,map__37204__$1,msg,updates,reload_info){
return (function (e){
var seq__37373_37608 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37375_37609 = null;
var count__37376_37610 = (0);
var i__37377_37611 = (0);
while(true){
if((i__37377_37611 < count__37376_37610)){
var map__37381_37612 = chunk__37375_37609.cljs$core$IIndexed$_nth$arity$2(null, i__37377_37611);
var map__37381_37613__$1 = cljs.core.__destructure_map(map__37381_37612);
var task_37614 = map__37381_37613__$1;
var fn_str_37615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381_37613__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381_37613__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37617 = goog.getObjectByName(fn_str_37615,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37616)].join(''));

(fn_obj_37617.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37617.cljs$core$IFn$_invoke$arity$2(path,new_link_37607) : fn_obj_37617.call(null, path,new_link_37607));


var G__37618 = seq__37373_37608;
var G__37619 = chunk__37375_37609;
var G__37620 = count__37376_37610;
var G__37621 = (i__37377_37611 + (1));
seq__37373_37608 = G__37618;
chunk__37375_37609 = G__37619;
count__37376_37610 = G__37620;
i__37377_37611 = G__37621;
continue;
} else {
var temp__5823__auto___37622 = cljs.core.seq(seq__37373_37608);
if(temp__5823__auto___37622){
var seq__37373_37623__$1 = temp__5823__auto___37622;
if(cljs.core.chunked_seq_QMARK_(seq__37373_37623__$1)){
var c__5565__auto___37624 = cljs.core.chunk_first(seq__37373_37623__$1);
var G__37625 = cljs.core.chunk_rest(seq__37373_37623__$1);
var G__37626 = c__5565__auto___37624;
var G__37627 = cljs.core.count(c__5565__auto___37624);
var G__37628 = (0);
seq__37373_37608 = G__37625;
chunk__37375_37609 = G__37626;
count__37376_37610 = G__37627;
i__37377_37611 = G__37628;
continue;
} else {
var map__37383_37629 = cljs.core.first(seq__37373_37623__$1);
var map__37383_37630__$1 = cljs.core.__destructure_map(map__37383_37629);
var task_37631 = map__37383_37630__$1;
var fn_str_37632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37383_37630__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37383_37630__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37637 = goog.getObjectByName(fn_str_37632,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37633)].join(''));

(fn_obj_37637.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37637.cljs$core$IFn$_invoke$arity$2(path,new_link_37607) : fn_obj_37637.call(null, path,new_link_37607));


var G__37638 = cljs.core.next(seq__37373_37623__$1);
var G__37639 = null;
var G__37640 = (0);
var G__37641 = (0);
seq__37373_37608 = G__37638;
chunk__37375_37609 = G__37639;
count__37376_37610 = G__37640;
i__37377_37611 = G__37641;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37605);
});})(seq__37340_37601,chunk__37344_37602,count__37345_37603,i__37346_37604,seq__37205,chunk__37207,count__37208,i__37209,new_link_37607,path_match_37606,node_37605,path,map__37204,map__37204__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37606], 0));

goog.dom.insertSiblingAfter(new_link_37607,node_37605);


var G__37642 = seq__37340_37601;
var G__37643 = chunk__37344_37602;
var G__37644 = count__37345_37603;
var G__37645 = (i__37346_37604 + (1));
seq__37340_37601 = G__37642;
chunk__37344_37602 = G__37643;
count__37345_37603 = G__37644;
i__37346_37604 = G__37645;
continue;
} else {
var G__37646 = seq__37340_37601;
var G__37647 = chunk__37344_37602;
var G__37648 = count__37345_37603;
var G__37649 = (i__37346_37604 + (1));
seq__37340_37601 = G__37646;
chunk__37344_37602 = G__37647;
count__37345_37603 = G__37648;
i__37346_37604 = G__37649;
continue;
}
} else {
var G__37650 = seq__37340_37601;
var G__37651 = chunk__37344_37602;
var G__37652 = count__37345_37603;
var G__37653 = (i__37346_37604 + (1));
seq__37340_37601 = G__37650;
chunk__37344_37602 = G__37651;
count__37345_37603 = G__37652;
i__37346_37604 = G__37653;
continue;
}
} else {
var temp__5823__auto___37654 = cljs.core.seq(seq__37340_37601);
if(temp__5823__auto___37654){
var seq__37340_37655__$1 = temp__5823__auto___37654;
if(cljs.core.chunked_seq_QMARK_(seq__37340_37655__$1)){
var c__5565__auto___37656 = cljs.core.chunk_first(seq__37340_37655__$1);
var G__37657 = cljs.core.chunk_rest(seq__37340_37655__$1);
var G__37658 = c__5565__auto___37656;
var G__37659 = cljs.core.count(c__5565__auto___37656);
var G__37660 = (0);
seq__37340_37601 = G__37657;
chunk__37344_37602 = G__37658;
count__37345_37603 = G__37659;
i__37346_37604 = G__37660;
continue;
} else {
var node_37661 = cljs.core.first(seq__37340_37655__$1);
if(cljs.core.not(node_37661.shadow$old)){
var path_match_37662 = shadow.cljs.devtools.client.browser.match_paths(node_37661.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37662)){
var new_link_37663 = (function (){var G__37387 = node_37661.cloneNode(true);
G__37387.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37662),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37387;
})();
(node_37661.shadow$old = true);

(new_link_37663.onload = ((function (seq__37340_37601,chunk__37344_37602,count__37345_37603,i__37346_37604,seq__37205,chunk__37207,count__37208,i__37209,new_link_37663,path_match_37662,node_37661,seq__37340_37655__$1,temp__5823__auto___37654,path,map__37204,map__37204__$1,msg,updates,reload_info){
return (function (e){
var seq__37390_37664 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37392_37665 = null;
var count__37393_37666 = (0);
var i__37394_37667 = (0);
while(true){
if((i__37394_37667 < count__37393_37666)){
var map__37398_37668 = chunk__37392_37665.cljs$core$IIndexed$_nth$arity$2(null, i__37394_37667);
var map__37398_37669__$1 = cljs.core.__destructure_map(map__37398_37668);
var task_37670 = map__37398_37669__$1;
var fn_str_37671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37398_37669__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37398_37669__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37673 = goog.getObjectByName(fn_str_37671,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37672)].join(''));

(fn_obj_37673.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37673.cljs$core$IFn$_invoke$arity$2(path,new_link_37663) : fn_obj_37673.call(null, path,new_link_37663));


var G__37674 = seq__37390_37664;
var G__37675 = chunk__37392_37665;
var G__37676 = count__37393_37666;
var G__37677 = (i__37394_37667 + (1));
seq__37390_37664 = G__37674;
chunk__37392_37665 = G__37675;
count__37393_37666 = G__37676;
i__37394_37667 = G__37677;
continue;
} else {
var temp__5823__auto___37678__$1 = cljs.core.seq(seq__37390_37664);
if(temp__5823__auto___37678__$1){
var seq__37390_37679__$1 = temp__5823__auto___37678__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37390_37679__$1)){
var c__5565__auto___37680 = cljs.core.chunk_first(seq__37390_37679__$1);
var G__37681 = cljs.core.chunk_rest(seq__37390_37679__$1);
var G__37682 = c__5565__auto___37680;
var G__37683 = cljs.core.count(c__5565__auto___37680);
var G__37684 = (0);
seq__37390_37664 = G__37681;
chunk__37392_37665 = G__37682;
count__37393_37666 = G__37683;
i__37394_37667 = G__37684;
continue;
} else {
var map__37401_37685 = cljs.core.first(seq__37390_37679__$1);
var map__37401_37686__$1 = cljs.core.__destructure_map(map__37401_37685);
var task_37687 = map__37401_37686__$1;
var fn_str_37688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37401_37686__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37401_37686__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37690 = goog.getObjectByName(fn_str_37688,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37689)].join(''));

(fn_obj_37690.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37690.cljs$core$IFn$_invoke$arity$2(path,new_link_37663) : fn_obj_37690.call(null, path,new_link_37663));


var G__37691 = cljs.core.next(seq__37390_37679__$1);
var G__37692 = null;
var G__37693 = (0);
var G__37694 = (0);
seq__37390_37664 = G__37691;
chunk__37392_37665 = G__37692;
count__37393_37666 = G__37693;
i__37394_37667 = G__37694;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37661);
});})(seq__37340_37601,chunk__37344_37602,count__37345_37603,i__37346_37604,seq__37205,chunk__37207,count__37208,i__37209,new_link_37663,path_match_37662,node_37661,seq__37340_37655__$1,temp__5823__auto___37654,path,map__37204,map__37204__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37662], 0));

goog.dom.insertSiblingAfter(new_link_37663,node_37661);


var G__37695 = cljs.core.next(seq__37340_37655__$1);
var G__37696 = null;
var G__37697 = (0);
var G__37698 = (0);
seq__37340_37601 = G__37695;
chunk__37344_37602 = G__37696;
count__37345_37603 = G__37697;
i__37346_37604 = G__37698;
continue;
} else {
var G__37699 = cljs.core.next(seq__37340_37655__$1);
var G__37700 = null;
var G__37701 = (0);
var G__37702 = (0);
seq__37340_37601 = G__37699;
chunk__37344_37602 = G__37700;
count__37345_37603 = G__37701;
i__37346_37604 = G__37702;
continue;
}
} else {
var G__37703 = cljs.core.next(seq__37340_37655__$1);
var G__37704 = null;
var G__37705 = (0);
var G__37706 = (0);
seq__37340_37601 = G__37703;
chunk__37344_37602 = G__37704;
count__37345_37603 = G__37705;
i__37346_37604 = G__37706;
continue;
}
}
} else {
}
}
break;
}


var G__37707 = seq__37205;
var G__37708 = chunk__37207;
var G__37709 = count__37208;
var G__37710 = (i__37209 + (1));
seq__37205 = G__37707;
chunk__37207 = G__37708;
count__37208 = G__37709;
i__37209 = G__37710;
continue;
} else {
var G__37711 = seq__37205;
var G__37712 = chunk__37207;
var G__37713 = count__37208;
var G__37714 = (i__37209 + (1));
seq__37205 = G__37711;
chunk__37207 = G__37712;
count__37208 = G__37713;
i__37209 = G__37714;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37205);
if(temp__5823__auto__){
var seq__37205__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37205__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37205__$1);
var G__37715 = cljs.core.chunk_rest(seq__37205__$1);
var G__37716 = c__5565__auto__;
var G__37717 = cljs.core.count(c__5565__auto__);
var G__37718 = (0);
seq__37205 = G__37715;
chunk__37207 = G__37716;
count__37208 = G__37717;
i__37209 = G__37718;
continue;
} else {
var path = cljs.core.first(seq__37205__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37406_37719 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37410_37720 = null;
var count__37411_37721 = (0);
var i__37412_37722 = (0);
while(true){
if((i__37412_37722 < count__37411_37721)){
var node_37723 = chunk__37410_37720.cljs$core$IIndexed$_nth$arity$2(null, i__37412_37722);
if(cljs.core.not(node_37723.shadow$old)){
var path_match_37724 = shadow.cljs.devtools.client.browser.match_paths(node_37723.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37724)){
var new_link_37725 = (function (){var G__37462 = node_37723.cloneNode(true);
G__37462.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37724),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37462;
})();
(node_37723.shadow$old = true);

(new_link_37725.onload = ((function (seq__37406_37719,chunk__37410_37720,count__37411_37721,i__37412_37722,seq__37205,chunk__37207,count__37208,i__37209,new_link_37725,path_match_37724,node_37723,path,seq__37205__$1,temp__5823__auto__,map__37204,map__37204__$1,msg,updates,reload_info){
return (function (e){
var seq__37464_37726 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37466_37727 = null;
var count__37467_37728 = (0);
var i__37468_37729 = (0);
while(true){
if((i__37468_37729 < count__37467_37728)){
var map__37478_37730 = chunk__37466_37727.cljs$core$IIndexed$_nth$arity$2(null, i__37468_37729);
var map__37478_37731__$1 = cljs.core.__destructure_map(map__37478_37730);
var task_37732 = map__37478_37731__$1;
var fn_str_37733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37478_37731__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37478_37731__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37735 = goog.getObjectByName(fn_str_37733,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37734)].join(''));

(fn_obj_37735.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37735.cljs$core$IFn$_invoke$arity$2(path,new_link_37725) : fn_obj_37735.call(null, path,new_link_37725));


var G__37736 = seq__37464_37726;
var G__37737 = chunk__37466_37727;
var G__37738 = count__37467_37728;
var G__37739 = (i__37468_37729 + (1));
seq__37464_37726 = G__37736;
chunk__37466_37727 = G__37737;
count__37467_37728 = G__37738;
i__37468_37729 = G__37739;
continue;
} else {
var temp__5823__auto___37740__$1 = cljs.core.seq(seq__37464_37726);
if(temp__5823__auto___37740__$1){
var seq__37464_37741__$1 = temp__5823__auto___37740__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37464_37741__$1)){
var c__5565__auto___37742 = cljs.core.chunk_first(seq__37464_37741__$1);
var G__37743 = cljs.core.chunk_rest(seq__37464_37741__$1);
var G__37744 = c__5565__auto___37742;
var G__37745 = cljs.core.count(c__5565__auto___37742);
var G__37746 = (0);
seq__37464_37726 = G__37743;
chunk__37466_37727 = G__37744;
count__37467_37728 = G__37745;
i__37468_37729 = G__37746;
continue;
} else {
var map__37479_37747 = cljs.core.first(seq__37464_37741__$1);
var map__37479_37748__$1 = cljs.core.__destructure_map(map__37479_37747);
var task_37749 = map__37479_37748__$1;
var fn_str_37750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37479_37748__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37479_37748__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37752 = goog.getObjectByName(fn_str_37750,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37751)].join(''));

(fn_obj_37752.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37752.cljs$core$IFn$_invoke$arity$2(path,new_link_37725) : fn_obj_37752.call(null, path,new_link_37725));


var G__37753 = cljs.core.next(seq__37464_37741__$1);
var G__37754 = null;
var G__37755 = (0);
var G__37756 = (0);
seq__37464_37726 = G__37753;
chunk__37466_37727 = G__37754;
count__37467_37728 = G__37755;
i__37468_37729 = G__37756;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37723);
});})(seq__37406_37719,chunk__37410_37720,count__37411_37721,i__37412_37722,seq__37205,chunk__37207,count__37208,i__37209,new_link_37725,path_match_37724,node_37723,path,seq__37205__$1,temp__5823__auto__,map__37204,map__37204__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37724], 0));

goog.dom.insertSiblingAfter(new_link_37725,node_37723);


var G__37757 = seq__37406_37719;
var G__37758 = chunk__37410_37720;
var G__37759 = count__37411_37721;
var G__37760 = (i__37412_37722 + (1));
seq__37406_37719 = G__37757;
chunk__37410_37720 = G__37758;
count__37411_37721 = G__37759;
i__37412_37722 = G__37760;
continue;
} else {
var G__37764 = seq__37406_37719;
var G__37765 = chunk__37410_37720;
var G__37766 = count__37411_37721;
var G__37767 = (i__37412_37722 + (1));
seq__37406_37719 = G__37764;
chunk__37410_37720 = G__37765;
count__37411_37721 = G__37766;
i__37412_37722 = G__37767;
continue;
}
} else {
var G__37768 = seq__37406_37719;
var G__37769 = chunk__37410_37720;
var G__37770 = count__37411_37721;
var G__37771 = (i__37412_37722 + (1));
seq__37406_37719 = G__37768;
chunk__37410_37720 = G__37769;
count__37411_37721 = G__37770;
i__37412_37722 = G__37771;
continue;
}
} else {
var temp__5823__auto___37772__$1 = cljs.core.seq(seq__37406_37719);
if(temp__5823__auto___37772__$1){
var seq__37406_37773__$1 = temp__5823__auto___37772__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37406_37773__$1)){
var c__5565__auto___37774 = cljs.core.chunk_first(seq__37406_37773__$1);
var G__37775 = cljs.core.chunk_rest(seq__37406_37773__$1);
var G__37776 = c__5565__auto___37774;
var G__37777 = cljs.core.count(c__5565__auto___37774);
var G__37778 = (0);
seq__37406_37719 = G__37775;
chunk__37410_37720 = G__37776;
count__37411_37721 = G__37777;
i__37412_37722 = G__37778;
continue;
} else {
var node_37779 = cljs.core.first(seq__37406_37773__$1);
if(cljs.core.not(node_37779.shadow$old)){
var path_match_37780 = shadow.cljs.devtools.client.browser.match_paths(node_37779.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37780)){
var new_link_37781 = (function (){var G__37485 = node_37779.cloneNode(true);
G__37485.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37780),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37485;
})();
(node_37779.shadow$old = true);

(new_link_37781.onload = ((function (seq__37406_37719,chunk__37410_37720,count__37411_37721,i__37412_37722,seq__37205,chunk__37207,count__37208,i__37209,new_link_37781,path_match_37780,node_37779,seq__37406_37773__$1,temp__5823__auto___37772__$1,path,seq__37205__$1,temp__5823__auto__,map__37204,map__37204__$1,msg,updates,reload_info){
return (function (e){
var seq__37486_37784 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37488_37785 = null;
var count__37489_37786 = (0);
var i__37490_37787 = (0);
while(true){
if((i__37490_37787 < count__37489_37786)){
var map__37496_37788 = chunk__37488_37785.cljs$core$IIndexed$_nth$arity$2(null, i__37490_37787);
var map__37496_37789__$1 = cljs.core.__destructure_map(map__37496_37788);
var task_37790 = map__37496_37789__$1;
var fn_str_37791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37496_37789__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37496_37789__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37793 = goog.getObjectByName(fn_str_37791,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37792)].join(''));

(fn_obj_37793.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37793.cljs$core$IFn$_invoke$arity$2(path,new_link_37781) : fn_obj_37793.call(null, path,new_link_37781));


var G__37794 = seq__37486_37784;
var G__37795 = chunk__37488_37785;
var G__37796 = count__37489_37786;
var G__37797 = (i__37490_37787 + (1));
seq__37486_37784 = G__37794;
chunk__37488_37785 = G__37795;
count__37489_37786 = G__37796;
i__37490_37787 = G__37797;
continue;
} else {
var temp__5823__auto___37798__$2 = cljs.core.seq(seq__37486_37784);
if(temp__5823__auto___37798__$2){
var seq__37486_37799__$1 = temp__5823__auto___37798__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37486_37799__$1)){
var c__5565__auto___37800 = cljs.core.chunk_first(seq__37486_37799__$1);
var G__37801 = cljs.core.chunk_rest(seq__37486_37799__$1);
var G__37802 = c__5565__auto___37800;
var G__37803 = cljs.core.count(c__5565__auto___37800);
var G__37804 = (0);
seq__37486_37784 = G__37801;
chunk__37488_37785 = G__37802;
count__37489_37786 = G__37803;
i__37490_37787 = G__37804;
continue;
} else {
var map__37498_37805 = cljs.core.first(seq__37486_37799__$1);
var map__37498_37806__$1 = cljs.core.__destructure_map(map__37498_37805);
var task_37807 = map__37498_37806__$1;
var fn_str_37808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37498_37806__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37498_37806__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37810 = goog.getObjectByName(fn_str_37808,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37809)].join(''));

(fn_obj_37810.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37810.cljs$core$IFn$_invoke$arity$2(path,new_link_37781) : fn_obj_37810.call(null, path,new_link_37781));


var G__37811 = cljs.core.next(seq__37486_37799__$1);
var G__37812 = null;
var G__37813 = (0);
var G__37814 = (0);
seq__37486_37784 = G__37811;
chunk__37488_37785 = G__37812;
count__37489_37786 = G__37813;
i__37490_37787 = G__37814;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37779);
});})(seq__37406_37719,chunk__37410_37720,count__37411_37721,i__37412_37722,seq__37205,chunk__37207,count__37208,i__37209,new_link_37781,path_match_37780,node_37779,seq__37406_37773__$1,temp__5823__auto___37772__$1,path,seq__37205__$1,temp__5823__auto__,map__37204,map__37204__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37780], 0));

goog.dom.insertSiblingAfter(new_link_37781,node_37779);


var G__37815 = cljs.core.next(seq__37406_37773__$1);
var G__37816 = null;
var G__37817 = (0);
var G__37818 = (0);
seq__37406_37719 = G__37815;
chunk__37410_37720 = G__37816;
count__37411_37721 = G__37817;
i__37412_37722 = G__37818;
continue;
} else {
var G__37819 = cljs.core.next(seq__37406_37773__$1);
var G__37820 = null;
var G__37821 = (0);
var G__37822 = (0);
seq__37406_37719 = G__37819;
chunk__37410_37720 = G__37820;
count__37411_37721 = G__37821;
i__37412_37722 = G__37822;
continue;
}
} else {
var G__37823 = cljs.core.next(seq__37406_37773__$1);
var G__37824 = null;
var G__37825 = (0);
var G__37826 = (0);
seq__37406_37719 = G__37823;
chunk__37410_37720 = G__37824;
count__37411_37721 = G__37825;
i__37412_37722 = G__37826;
continue;
}
}
} else {
}
}
break;
}


var G__37829 = cljs.core.next(seq__37205__$1);
var G__37830 = null;
var G__37831 = (0);
var G__37832 = (0);
seq__37205 = G__37829;
chunk__37207 = G__37830;
count__37208 = G__37831;
i__37209 = G__37832;
continue;
} else {
var G__37833 = cljs.core.next(seq__37205__$1);
var G__37834 = null;
var G__37835 = (0);
var G__37836 = (0);
seq__37205 = G__37833;
chunk__37207 = G__37834;
count__37208 = G__37835;
i__37209 = G__37836;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__37502){
var map__37503 = p__37502;
var map__37503__$1 = cljs.core.__destructure_map(map__37503);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37503__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37506,done,error){
var map__37507 = p__37506;
var map__37507__$1 = cljs.core.__destructure_map(map__37507);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37507__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37508,done,error){
var map__37509 = p__37508;
var map__37509__$1 = cljs.core.__destructure_map(map__37509);
var msg = map__37509__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37509__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37509__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37509__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37510){
var map__37511 = p__37510;
var map__37511__$1 = cljs.core.__destructure_map(map__37511);
var src = map__37511__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37511__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37512 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37512) : done.call(null, G__37512));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37513){
var map__37514 = p__37513;
var map__37514__$1 = cljs.core.__destructure_map(map__37514);
var msg__$1 = map__37514__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37514__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e37515){var ex = e37515;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37516){
var map__37517 = p__37516;
var map__37517__$1 = cljs.core.__destructure_map(map__37517);
var env = map__37517__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37517__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37522){
var map__37523 = p__37522;
var map__37523__$1 = cljs.core.__destructure_map(map__37523);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37523__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37523__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37524){
var map__37525 = p__37524;
var map__37525__$1 = cljs.core.__destructure_map(map__37525);
var svc = map__37525__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37525__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
