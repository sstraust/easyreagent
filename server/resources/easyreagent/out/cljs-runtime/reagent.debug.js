goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36848__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36855__i = 0, G__36855__a = new Array(arguments.length -  0);
while (G__36855__i < G__36855__a.length) {G__36855__a[G__36855__i] = arguments[G__36855__i + 0]; ++G__36855__i;}
  args = new cljs.core.IndexedSeq(G__36855__a,0,null);
} 
return G__36848__delegate.call(this,args);};
G__36848.cljs$lang$maxFixedArity = 0;
G__36848.cljs$lang$applyTo = (function (arglist__36856){
var args = cljs.core.seq(arglist__36856);
return G__36848__delegate(args);
});
G__36848.cljs$core$IFn$_invoke$arity$variadic = G__36848__delegate;
return G__36848;
})()
);

(o.error = (function() { 
var G__36857__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36857 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36858__i = 0, G__36858__a = new Array(arguments.length -  0);
while (G__36858__i < G__36858__a.length) {G__36858__a[G__36858__i] = arguments[G__36858__i + 0]; ++G__36858__i;}
  args = new cljs.core.IndexedSeq(G__36858__a,0,null);
} 
return G__36857__delegate.call(this,args);};
G__36857.cljs$lang$maxFixedArity = 0;
G__36857.cljs$lang$applyTo = (function (arglist__36859){
var args = cljs.core.seq(arglist__36859);
return G__36857__delegate(args);
});
G__36857.cljs$core$IFn$_invoke$arity$variadic = G__36857__delegate;
return G__36857;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
