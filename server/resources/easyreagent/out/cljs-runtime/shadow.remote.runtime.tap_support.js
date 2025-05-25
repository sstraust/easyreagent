goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36352,p__36353){
var map__36354 = p__36352;
var map__36354__$1 = cljs.core.__destructure_map(map__36354);
var svc = map__36354__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36355 = p__36353;
var map__36355__$1 = cljs.core.__destructure_map(map__36355);
var msg = map__36355__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36355__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36355__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36355__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36355__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36359,p__36360){
var map__36361 = p__36359;
var map__36361__$1 = cljs.core.__destructure_map(map__36361);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36361__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36362 = p__36360;
var map__36362__$1 = cljs.core.__destructure_map(map__36362);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36362__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36364,p__36365){
var map__36366 = p__36364;
var map__36366__$1 = cljs.core.__destructure_map(map__36366);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36366__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36366__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36367 = p__36365;
var map__36367__$1 = cljs.core.__destructure_map(map__36367);
var msg = map__36367__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36367__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36369,tid){
var map__36370 = p__36369;
var map__36370__$1 = cljs.core.__destructure_map(map__36370);
var svc = map__36370__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36370__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36385 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36386 = null;
var count__36387 = (0);
var i__36388 = (0);
while(true){
if((i__36388 < count__36387)){
var vec__36415 = chunk__36386.cljs$core$IIndexed$_nth$arity$2(null, i__36388);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36415,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36415,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36446 = seq__36385;
var G__36447 = chunk__36386;
var G__36448 = count__36387;
var G__36449 = (i__36388 + (1));
seq__36385 = G__36446;
chunk__36386 = G__36447;
count__36387 = G__36448;
i__36388 = G__36449;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36385);
if(temp__5823__auto__){
var seq__36385__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36385__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__36385__$1);
var G__36452 = cljs.core.chunk_rest(seq__36385__$1);
var G__36453 = c__5565__auto__;
var G__36454 = cljs.core.count(c__5565__auto__);
var G__36455 = (0);
seq__36385 = G__36452;
chunk__36386 = G__36453;
count__36387 = G__36454;
i__36388 = G__36455;
continue;
} else {
var vec__36420 = cljs.core.first(seq__36385__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36420,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36420,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36457 = cljs.core.next(seq__36385__$1);
var G__36458 = null;
var G__36459 = (0);
var G__36460 = (0);
seq__36385 = G__36457;
chunk__36386 = G__36458;
count__36387 = G__36459;
i__36388 = G__36460;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36374_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36374_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36375_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36375_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36376_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36376_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36377_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36377_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36429){
var map__36431 = p__36429;
var map__36431__$1 = cljs.core.__destructure_map(map__36431);
var svc = map__36431__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36431__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36431__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
