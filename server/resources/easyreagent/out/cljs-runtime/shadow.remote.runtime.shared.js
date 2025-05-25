goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__29845){
var map__29847 = p__29845;
var map__29847__$1 = cljs.core.__destructure_map(map__29847);
var runtime = map__29847__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29847__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_30102 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_30102)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__29848 = runtime;
var G__29849 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_30102);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__29848,G__29849) : shadow.remote.runtime.shared.process.call(null, G__29848,G__29849));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__29850,res){
var map__29851 = p__29850;
var map__29851__$1 = cljs.core.__destructure_map(map__29851);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29851__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29851__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__29852 = res;
var G__29852__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29852,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__29852);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29852__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__29852__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__29854 = arguments.length;
switch (G__29854) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__29855,msg,handlers,timeout_after_ms){
var map__29856 = p__29855;
var map__29856__$1 = cljs.core.__destructure_map(map__29856);
var runtime = map__29856__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29856__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___30106 = arguments.length;
var i__5767__auto___30107 = (0);
while(true){
if((i__5767__auto___30107 < len__5766__auto___30106)){
args__5772__auto__.push((arguments[i__5767__auto___30107]));

var G__30108 = (i__5767__auto___30107 + (1));
i__5767__auto___30107 = G__30108;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__29879,ev,args){
var map__29882 = p__29879;
var map__29882__$1 = cljs.core.__destructure_map(map__29882);
var runtime = map__29882__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29882__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__29883 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29886 = null;
var count__29887 = (0);
var i__29888 = (0);
while(true){
if((i__29888 < count__29887)){
var ext = chunk__29886.cljs$core$IIndexed$_nth$arity$2(null, i__29888);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30112 = seq__29883;
var G__30113 = chunk__29886;
var G__30114 = count__29887;
var G__30115 = (i__29888 + (1));
seq__29883 = G__30112;
chunk__29886 = G__30113;
count__29887 = G__30114;
i__29888 = G__30115;
continue;
} else {
var G__30116 = seq__29883;
var G__30117 = chunk__29886;
var G__30118 = count__29887;
var G__30119 = (i__29888 + (1));
seq__29883 = G__30116;
chunk__29886 = G__30117;
count__29887 = G__30118;
i__29888 = G__30119;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__29883);
if(temp__5823__auto__){
var seq__29883__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29883__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__29883__$1);
var G__30120 = cljs.core.chunk_rest(seq__29883__$1);
var G__30121 = c__5565__auto__;
var G__30122 = cljs.core.count(c__5565__auto__);
var G__30123 = (0);
seq__29883 = G__30120;
chunk__29886 = G__30121;
count__29887 = G__30122;
i__29888 = G__30123;
continue;
} else {
var ext = cljs.core.first(seq__29883__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30124 = cljs.core.next(seq__29883__$1);
var G__30125 = null;
var G__30126 = (0);
var G__30127 = (0);
seq__29883 = G__30124;
chunk__29886 = G__30125;
count__29887 = G__30126;
i__29888 = G__30127;
continue;
} else {
var G__30128 = cljs.core.next(seq__29883__$1);
var G__30129 = null;
var G__30130 = (0);
var G__30131 = (0);
seq__29883 = G__30128;
chunk__29886 = G__30129;
count__29887 = G__30130;
i__29888 = G__30131;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq29857){
var G__29858 = cljs.core.first(seq29857);
var seq29857__$1 = cljs.core.next(seq29857);
var G__29859 = cljs.core.first(seq29857__$1);
var seq29857__$2 = cljs.core.next(seq29857__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29858,G__29859,seq29857__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__29929,p__29930){
var map__29931 = p__29929;
var map__29931__$1 = cljs.core.__destructure_map(map__29931);
var runtime = map__29931__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29931__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29932 = p__29930;
var map__29932__$1 = cljs.core.__destructure_map(map__29932);
var msg = map__29932__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29932__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__29938 = cljs.core.deref(state_ref);
var map__29938__$1 = cljs.core.__destructure_map(map__29938);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29938__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29938__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__29961,msg){
var map__29982 = p__29961;
var map__29982__$1 = cljs.core.__destructure_map(map__29982);
var runtime = map__29982__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29982__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__29989,key,p__29990){
var map__29994 = p__29989;
var map__29994__$1 = cljs.core.__destructure_map(map__29994);
var state = map__29994__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29994__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__29998 = p__29990;
var map__29998__$1 = cljs.core.__destructure_map(map__29998);
var spec = map__29998__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29998__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29998__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__30036,key,spec){
var map__30037 = p__30036;
var map__30037__$1 = cljs.core.__destructure_map(map__30037);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30037__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__30040_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__30040_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__30041_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__30041_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__30042_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__30042_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__30043_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__30043_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__30044_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__30044_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__30053,key){
var map__30054 = p__30053;
var map__30054__$1 = cljs.core.__destructure_map(map__30054);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30054__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__30057,msg){
var map__30061 = p__30057;
var map__30061__$1 = cljs.core.__destructure_map(map__30061);
var runtime = map__30061__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30061__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__30069,p__30070){
var map__30071 = p__30069;
var map__30071__$1 = cljs.core.__destructure_map(map__30071);
var runtime = map__30071__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30071__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30072 = p__30070;
var map__30072__$1 = cljs.core.__destructure_map(map__30072);
var msg = map__30072__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30072__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30072__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__30077 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30079 = null;
var count__30080 = (0);
var i__30081 = (0);
while(true){
if((i__30081 < count__30080)){
var map__30089 = chunk__30079.cljs$core$IIndexed$_nth$arity$2(null, i__30081);
var map__30089__$1 = cljs.core.__destructure_map(map__30089);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30089__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__30187 = seq__30077;
var G__30188 = chunk__30079;
var G__30189 = count__30080;
var G__30190 = (i__30081 + (1));
seq__30077 = G__30187;
chunk__30079 = G__30188;
count__30080 = G__30189;
i__30081 = G__30190;
continue;
} else {
var G__30195 = seq__30077;
var G__30196 = chunk__30079;
var G__30197 = count__30080;
var G__30198 = (i__30081 + (1));
seq__30077 = G__30195;
chunk__30079 = G__30196;
count__30080 = G__30197;
i__30081 = G__30198;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__30077);
if(temp__5823__auto__){
var seq__30077__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30077__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__30077__$1);
var G__30208 = cljs.core.chunk_rest(seq__30077__$1);
var G__30209 = c__5565__auto__;
var G__30210 = cljs.core.count(c__5565__auto__);
var G__30211 = (0);
seq__30077 = G__30208;
chunk__30079 = G__30209;
count__30080 = G__30210;
i__30081 = G__30211;
continue;
} else {
var map__30093 = cljs.core.first(seq__30077__$1);
var map__30093__$1 = cljs.core.__destructure_map(map__30093);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30093__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__30218 = cljs.core.next(seq__30077__$1);
var G__30219 = null;
var G__30220 = (0);
var G__30221 = (0);
seq__30077 = G__30218;
chunk__30079 = G__30219;
count__30080 = G__30220;
i__30081 = G__30221;
continue;
} else {
var G__30222 = cljs.core.next(seq__30077__$1);
var G__30223 = null;
var G__30224 = (0);
var G__30225 = (0);
seq__30077 = G__30222;
chunk__30079 = G__30223;
count__30080 = G__30224;
i__30081 = G__30225;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
