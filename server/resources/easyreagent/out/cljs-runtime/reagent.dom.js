goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__28031 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__28032 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__28032);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__28034 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__28035 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__28035);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__28034);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__28031);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__28043 = arguments.length;
switch (G__28043) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__28048 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28048,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28048,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__28055_28072 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__28056_28073 = null;
var count__28057_28074 = (0);
var i__28058_28075 = (0);
while(true){
if((i__28058_28075 < count__28057_28074)){
var vec__28065_28076 = chunk__28056_28073.cljs$core$IIndexed$_nth$arity$2(null, i__28058_28075);
var container_28077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28065_28076,(0),null);
var comp_28078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28065_28076,(1),null);
reagent.dom.re_render_component(comp_28078,container_28077);


var G__28079 = seq__28055_28072;
var G__28080 = chunk__28056_28073;
var G__28081 = count__28057_28074;
var G__28082 = (i__28058_28075 + (1));
seq__28055_28072 = G__28079;
chunk__28056_28073 = G__28080;
count__28057_28074 = G__28081;
i__28058_28075 = G__28082;
continue;
} else {
var temp__5823__auto___28083 = cljs.core.seq(seq__28055_28072);
if(temp__5823__auto___28083){
var seq__28055_28084__$1 = temp__5823__auto___28083;
if(cljs.core.chunked_seq_QMARK_(seq__28055_28084__$1)){
var c__5565__auto___28085 = cljs.core.chunk_first(seq__28055_28084__$1);
var G__28086 = cljs.core.chunk_rest(seq__28055_28084__$1);
var G__28087 = c__5565__auto___28085;
var G__28088 = cljs.core.count(c__5565__auto___28085);
var G__28089 = (0);
seq__28055_28072 = G__28086;
chunk__28056_28073 = G__28087;
count__28057_28074 = G__28088;
i__28058_28075 = G__28089;
continue;
} else {
var vec__28068_28090 = cljs.core.first(seq__28055_28084__$1);
var container_28091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28068_28090,(0),null);
var comp_28092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28068_28090,(1),null);
reagent.dom.re_render_component(comp_28092,container_28091);


var G__28093 = cljs.core.next(seq__28055_28084__$1);
var G__28094 = null;
var G__28095 = (0);
var G__28096 = (0);
seq__28055_28072 = G__28093;
chunk__28056_28073 = G__28094;
count__28057_28074 = G__28095;
i__28058_28075 = G__28096;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
