// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__8863__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8864__i = 0, G__8864__a = new Array(arguments.length -  0);
while (G__8864__i < G__8864__a.length) {G__8864__a[G__8864__i] = arguments[G__8864__i + 0]; ++G__8864__i;}
  args = new cljs.core.IndexedSeq(G__8864__a,0,null);
} 
return G__8863__delegate.call(this,args);};
G__8863.cljs$lang$maxFixedArity = 0;
G__8863.cljs$lang$applyTo = (function (arglist__8865){
var args = cljs.core.seq(arglist__8865);
return G__8863__delegate(args);
});
G__8863.cljs$core$IFn$_invoke$arity$variadic = G__8863__delegate;
return G__8863;
})()
);

(o.error = (function() { 
var G__8866__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8867__i = 0, G__8867__a = new Array(arguments.length -  0);
while (G__8867__i < G__8867__a.length) {G__8867__a[G__8867__i] = arguments[G__8867__i + 0]; ++G__8867__i;}
  args = new cljs.core.IndexedSeq(G__8867__a,0,null);
} 
return G__8866__delegate.call(this,args);};
G__8866.cljs$lang$maxFixedArity = 0;
G__8866.cljs$lang$applyTo = (function (arglist__8868){
var args = cljs.core.seq(arglist__8868);
return G__8866__delegate(args);
});
G__8866.cljs$core$IFn$_invoke$arity$variadic = G__8866__delegate;
return G__8866;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
