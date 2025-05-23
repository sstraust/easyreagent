goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34560 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null, this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34560(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34561 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null, this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34561(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33036 = coll;
var G__33037 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33036,G__33037) : shadow.dom.lazy_native_coll_seq.call(null, G__33036,G__33037));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33088 = arguments.length;
switch (G__33088) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33107 = arguments.length;
switch (G__33107) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33118 = arguments.length;
switch (G__33118) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33127 = arguments.length;
switch (G__33127) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33150 = arguments.length;
switch (G__33150) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33169 = arguments.length;
switch (G__33169) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e33182){if((e33182 instanceof Object)){
var e = e33182;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33182;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33191 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33192 = null;
var count__33193 = (0);
var i__33194 = (0);
while(true){
if((i__33194 < count__33193)){
var el = chunk__33192.cljs$core$IIndexed$_nth$arity$2(null, i__33194);
var handler_34574__$1 = ((function (seq__33191,chunk__33192,count__33193,i__33194,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__33191,chunk__33192,count__33193,i__33194,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34574__$1);


var G__34575 = seq__33191;
var G__34576 = chunk__33192;
var G__34577 = count__33193;
var G__34578 = (i__33194 + (1));
seq__33191 = G__34575;
chunk__33192 = G__34576;
count__33193 = G__34577;
i__33194 = G__34578;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33191);
if(temp__5823__auto__){
var seq__33191__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33191__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__33191__$1);
var G__34579 = cljs.core.chunk_rest(seq__33191__$1);
var G__34580 = c__5565__auto__;
var G__34581 = cljs.core.count(c__5565__auto__);
var G__34582 = (0);
seq__33191 = G__34579;
chunk__33192 = G__34580;
count__33193 = G__34581;
i__33194 = G__34582;
continue;
} else {
var el = cljs.core.first(seq__33191__$1);
var handler_34583__$1 = ((function (seq__33191,chunk__33192,count__33193,i__33194,el,seq__33191__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__33191,chunk__33192,count__33193,i__33194,el,seq__33191__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34583__$1);


var G__34584 = cljs.core.next(seq__33191__$1);
var G__34585 = null;
var G__34586 = (0);
var G__34587 = (0);
seq__33191 = G__34584;
chunk__33192 = G__34585;
count__33193 = G__34586;
i__33194 = G__34587;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33219 = arguments.length;
switch (G__33219) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33225 = cljs.core.seq(events);
var chunk__33226 = null;
var count__33227 = (0);
var i__33228 = (0);
while(true){
if((i__33228 < count__33227)){
var vec__33242 = chunk__33226.cljs$core$IIndexed$_nth$arity$2(null, i__33228);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33242,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33242,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34593 = seq__33225;
var G__34594 = chunk__33226;
var G__34595 = count__33227;
var G__34596 = (i__33228 + (1));
seq__33225 = G__34593;
chunk__33226 = G__34594;
count__33227 = G__34595;
i__33228 = G__34596;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33225);
if(temp__5823__auto__){
var seq__33225__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33225__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__33225__$1);
var G__34597 = cljs.core.chunk_rest(seq__33225__$1);
var G__34598 = c__5565__auto__;
var G__34599 = cljs.core.count(c__5565__auto__);
var G__34600 = (0);
seq__33225 = G__34597;
chunk__33226 = G__34598;
count__33227 = G__34599;
i__33228 = G__34600;
continue;
} else {
var vec__33250 = cljs.core.first(seq__33225__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33250,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33250,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34601 = cljs.core.next(seq__33225__$1);
var G__34602 = null;
var G__34603 = (0);
var G__34604 = (0);
seq__33225 = G__34601;
chunk__33226 = G__34602;
count__33227 = G__34603;
i__33228 = G__34604;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33257 = cljs.core.seq(styles);
var chunk__33258 = null;
var count__33259 = (0);
var i__33260 = (0);
while(true){
if((i__33260 < count__33259)){
var vec__33270 = chunk__33258.cljs$core$IIndexed$_nth$arity$2(null, i__33260);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33270,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33270,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34605 = seq__33257;
var G__34606 = chunk__33258;
var G__34607 = count__33259;
var G__34608 = (i__33260 + (1));
seq__33257 = G__34605;
chunk__33258 = G__34606;
count__33259 = G__34607;
i__33260 = G__34608;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33257);
if(temp__5823__auto__){
var seq__33257__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33257__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__33257__$1);
var G__34609 = cljs.core.chunk_rest(seq__33257__$1);
var G__34610 = c__5565__auto__;
var G__34611 = cljs.core.count(c__5565__auto__);
var G__34612 = (0);
seq__33257 = G__34609;
chunk__33258 = G__34610;
count__33259 = G__34611;
i__33260 = G__34612;
continue;
} else {
var vec__33273 = cljs.core.first(seq__33257__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33273,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34613 = cljs.core.next(seq__33257__$1);
var G__34614 = null;
var G__34615 = (0);
var G__34616 = (0);
seq__33257 = G__34613;
chunk__33258 = G__34614;
count__33259 = G__34615;
i__33260 = G__34616;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33283_34617 = key;
var G__33283_34618__$1 = (((G__33283_34617 instanceof cljs.core.Keyword))?G__33283_34617.fqn:null);
switch (G__33283_34618__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34623 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_34623,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_34623,"aria-");
}
})())){
el.setAttribute(ks_34623,value);
} else {
(el[ks_34623] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33319){
var map__33321 = p__33319;
var map__33321__$1 = cljs.core.__destructure_map(map__33321);
var props = map__33321__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33321__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33324 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33324,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33324,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33324,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33337 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33337,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33337;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33343 = arguments.length;
switch (G__33343) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33347){
var vec__33349 = p__33347;
var seq__33350 = cljs.core.seq(vec__33349);
var first__33351 = cljs.core.first(seq__33350);
var seq__33350__$1 = cljs.core.next(seq__33350);
var nn = first__33351;
var first__33351__$1 = cljs.core.first(seq__33350__$1);
var seq__33350__$2 = cljs.core.next(seq__33350__$1);
var np = first__33351__$1;
var nc = seq__33350__$2;
var node = vec__33349;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33353 = nn;
var G__33354 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33353,G__33354) : create_fn.call(null, G__33353,G__33354));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33355 = nn;
var G__33356 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33355,G__33356) : create_fn.call(null, G__33355,G__33356));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33360 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33360,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33360,(1),null);
var seq__33371_34638 = cljs.core.seq(node_children);
var chunk__33372_34639 = null;
var count__33373_34640 = (0);
var i__33374_34641 = (0);
while(true){
if((i__33374_34641 < count__33373_34640)){
var child_struct_34642 = chunk__33372_34639.cljs$core$IIndexed$_nth$arity$2(null, i__33374_34641);
var children_34643 = shadow.dom.dom_node(child_struct_34642);
if(cljs.core.seq_QMARK_(children_34643)){
var seq__33482_34644 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34643));
var chunk__33484_34645 = null;
var count__33485_34646 = (0);
var i__33486_34647 = (0);
while(true){
if((i__33486_34647 < count__33485_34646)){
var child_34648 = chunk__33484_34645.cljs$core$IIndexed$_nth$arity$2(null, i__33486_34647);
if(cljs.core.truth_(child_34648)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34648);


var G__34649 = seq__33482_34644;
var G__34650 = chunk__33484_34645;
var G__34651 = count__33485_34646;
var G__34652 = (i__33486_34647 + (1));
seq__33482_34644 = G__34649;
chunk__33484_34645 = G__34650;
count__33485_34646 = G__34651;
i__33486_34647 = G__34652;
continue;
} else {
var G__34653 = seq__33482_34644;
var G__34654 = chunk__33484_34645;
var G__34655 = count__33485_34646;
var G__34656 = (i__33486_34647 + (1));
seq__33482_34644 = G__34653;
chunk__33484_34645 = G__34654;
count__33485_34646 = G__34655;
i__33486_34647 = G__34656;
continue;
}
} else {
var temp__5823__auto___34657 = cljs.core.seq(seq__33482_34644);
if(temp__5823__auto___34657){
var seq__33482_34658__$1 = temp__5823__auto___34657;
if(cljs.core.chunked_seq_QMARK_(seq__33482_34658__$1)){
var c__5565__auto___34659 = cljs.core.chunk_first(seq__33482_34658__$1);
var G__34660 = cljs.core.chunk_rest(seq__33482_34658__$1);
var G__34661 = c__5565__auto___34659;
var G__34662 = cljs.core.count(c__5565__auto___34659);
var G__34663 = (0);
seq__33482_34644 = G__34660;
chunk__33484_34645 = G__34661;
count__33485_34646 = G__34662;
i__33486_34647 = G__34663;
continue;
} else {
var child_34664 = cljs.core.first(seq__33482_34658__$1);
if(cljs.core.truth_(child_34664)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34664);


var G__34665 = cljs.core.next(seq__33482_34658__$1);
var G__34666 = null;
var G__34667 = (0);
var G__34668 = (0);
seq__33482_34644 = G__34665;
chunk__33484_34645 = G__34666;
count__33485_34646 = G__34667;
i__33486_34647 = G__34668;
continue;
} else {
var G__34669 = cljs.core.next(seq__33482_34658__$1);
var G__34670 = null;
var G__34671 = (0);
var G__34672 = (0);
seq__33482_34644 = G__34669;
chunk__33484_34645 = G__34670;
count__33485_34646 = G__34671;
i__33486_34647 = G__34672;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34643);
}


var G__34674 = seq__33371_34638;
var G__34675 = chunk__33372_34639;
var G__34676 = count__33373_34640;
var G__34677 = (i__33374_34641 + (1));
seq__33371_34638 = G__34674;
chunk__33372_34639 = G__34675;
count__33373_34640 = G__34676;
i__33374_34641 = G__34677;
continue;
} else {
var temp__5823__auto___34678 = cljs.core.seq(seq__33371_34638);
if(temp__5823__auto___34678){
var seq__33371_34679__$1 = temp__5823__auto___34678;
if(cljs.core.chunked_seq_QMARK_(seq__33371_34679__$1)){
var c__5565__auto___34680 = cljs.core.chunk_first(seq__33371_34679__$1);
var G__34681 = cljs.core.chunk_rest(seq__33371_34679__$1);
var G__34682 = c__5565__auto___34680;
var G__34683 = cljs.core.count(c__5565__auto___34680);
var G__34684 = (0);
seq__33371_34638 = G__34681;
chunk__33372_34639 = G__34682;
count__33373_34640 = G__34683;
i__33374_34641 = G__34684;
continue;
} else {
var child_struct_34685 = cljs.core.first(seq__33371_34679__$1);
var children_34686 = shadow.dom.dom_node(child_struct_34685);
if(cljs.core.seq_QMARK_(children_34686)){
var seq__33522_34687 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34686));
var chunk__33524_34688 = null;
var count__33525_34689 = (0);
var i__33526_34690 = (0);
while(true){
if((i__33526_34690 < count__33525_34689)){
var child_34691 = chunk__33524_34688.cljs$core$IIndexed$_nth$arity$2(null, i__33526_34690);
if(cljs.core.truth_(child_34691)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34691);


var G__34692 = seq__33522_34687;
var G__34693 = chunk__33524_34688;
var G__34694 = count__33525_34689;
var G__34695 = (i__33526_34690 + (1));
seq__33522_34687 = G__34692;
chunk__33524_34688 = G__34693;
count__33525_34689 = G__34694;
i__33526_34690 = G__34695;
continue;
} else {
var G__34696 = seq__33522_34687;
var G__34697 = chunk__33524_34688;
var G__34698 = count__33525_34689;
var G__34699 = (i__33526_34690 + (1));
seq__33522_34687 = G__34696;
chunk__33524_34688 = G__34697;
count__33525_34689 = G__34698;
i__33526_34690 = G__34699;
continue;
}
} else {
var temp__5823__auto___34700__$1 = cljs.core.seq(seq__33522_34687);
if(temp__5823__auto___34700__$1){
var seq__33522_34701__$1 = temp__5823__auto___34700__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33522_34701__$1)){
var c__5565__auto___34702 = cljs.core.chunk_first(seq__33522_34701__$1);
var G__34703 = cljs.core.chunk_rest(seq__33522_34701__$1);
var G__34704 = c__5565__auto___34702;
var G__34705 = cljs.core.count(c__5565__auto___34702);
var G__34706 = (0);
seq__33522_34687 = G__34703;
chunk__33524_34688 = G__34704;
count__33525_34689 = G__34705;
i__33526_34690 = G__34706;
continue;
} else {
var child_34711 = cljs.core.first(seq__33522_34701__$1);
if(cljs.core.truth_(child_34711)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34711);


var G__34712 = cljs.core.next(seq__33522_34701__$1);
var G__34713 = null;
var G__34714 = (0);
var G__34715 = (0);
seq__33522_34687 = G__34712;
chunk__33524_34688 = G__34713;
count__33525_34689 = G__34714;
i__33526_34690 = G__34715;
continue;
} else {
var G__34716 = cljs.core.next(seq__33522_34701__$1);
var G__34717 = null;
var G__34718 = (0);
var G__34719 = (0);
seq__33522_34687 = G__34716;
chunk__33524_34688 = G__34717;
count__33525_34689 = G__34718;
i__33526_34690 = G__34719;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34686);
}


var G__34720 = cljs.core.next(seq__33371_34679__$1);
var G__34721 = null;
var G__34722 = (0);
var G__34723 = (0);
seq__33371_34638 = G__34720;
chunk__33372_34639 = G__34721;
count__33373_34640 = G__34722;
i__33374_34641 = G__34723;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33576 = cljs.core.seq(node);
var chunk__33577 = null;
var count__33578 = (0);
var i__33579 = (0);
while(true){
if((i__33579 < count__33578)){
var n = chunk__33577.cljs$core$IIndexed$_nth$arity$2(null, i__33579);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__34728 = seq__33576;
var G__34729 = chunk__33577;
var G__34730 = count__33578;
var G__34731 = (i__33579 + (1));
seq__33576 = G__34728;
chunk__33577 = G__34729;
count__33578 = G__34730;
i__33579 = G__34731;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33576);
if(temp__5823__auto__){
var seq__33576__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33576__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__33576__$1);
var G__34733 = cljs.core.chunk_rest(seq__33576__$1);
var G__34734 = c__5565__auto__;
var G__34735 = cljs.core.count(c__5565__auto__);
var G__34736 = (0);
seq__33576 = G__34733;
chunk__33577 = G__34734;
count__33578 = G__34735;
i__33579 = G__34736;
continue;
} else {
var n = cljs.core.first(seq__33576__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__34737 = cljs.core.next(seq__33576__$1);
var G__34738 = null;
var G__34739 = (0);
var G__34740 = (0);
seq__33576 = G__34737;
chunk__33577 = G__34738;
count__33578 = G__34739;
i__33579 = G__34740;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33603 = arguments.length;
switch (G__33603) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33609 = arguments.length;
switch (G__33609) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33630 = arguments.length;
switch (G__33630) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___34755 = arguments.length;
var i__5767__auto___34756 = (0);
while(true){
if((i__5767__auto___34756 < len__5766__auto___34755)){
args__5772__auto__.push((arguments[i__5767__auto___34756]));

var G__34759 = (i__5767__auto___34756 + (1));
i__5767__auto___34756 = G__34759;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33679_34760 = cljs.core.seq(nodes);
var chunk__33680_34761 = null;
var count__33681_34762 = (0);
var i__33682_34763 = (0);
while(true){
if((i__33682_34763 < count__33681_34762)){
var node_34764 = chunk__33680_34761.cljs$core$IIndexed$_nth$arity$2(null, i__33682_34763);
fragment.appendChild(shadow.dom._to_dom(node_34764));


var G__34766 = seq__33679_34760;
var G__34767 = chunk__33680_34761;
var G__34768 = count__33681_34762;
var G__34769 = (i__33682_34763 + (1));
seq__33679_34760 = G__34766;
chunk__33680_34761 = G__34767;
count__33681_34762 = G__34768;
i__33682_34763 = G__34769;
continue;
} else {
var temp__5823__auto___34770 = cljs.core.seq(seq__33679_34760);
if(temp__5823__auto___34770){
var seq__33679_34771__$1 = temp__5823__auto___34770;
if(cljs.core.chunked_seq_QMARK_(seq__33679_34771__$1)){
var c__5565__auto___34772 = cljs.core.chunk_first(seq__33679_34771__$1);
var G__34773 = cljs.core.chunk_rest(seq__33679_34771__$1);
var G__34774 = c__5565__auto___34772;
var G__34775 = cljs.core.count(c__5565__auto___34772);
var G__34776 = (0);
seq__33679_34760 = G__34773;
chunk__33680_34761 = G__34774;
count__33681_34762 = G__34775;
i__33682_34763 = G__34776;
continue;
} else {
var node_34778 = cljs.core.first(seq__33679_34771__$1);
fragment.appendChild(shadow.dom._to_dom(node_34778));


var G__34779 = cljs.core.next(seq__33679_34771__$1);
var G__34780 = null;
var G__34781 = (0);
var G__34782 = (0);
seq__33679_34760 = G__34779;
chunk__33680_34761 = G__34780;
count__33681_34762 = G__34781;
i__33682_34763 = G__34782;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33665){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33665));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33717_34783 = cljs.core.seq(scripts);
var chunk__33718_34784 = null;
var count__33719_34785 = (0);
var i__33720_34786 = (0);
while(true){
if((i__33720_34786 < count__33719_34785)){
var vec__33742_34787 = chunk__33718_34784.cljs$core$IIndexed$_nth$arity$2(null, i__33720_34786);
var script_tag_34788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33742_34787,(0),null);
var script_body_34789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33742_34787,(1),null);
eval(script_body_34789);


var G__34790 = seq__33717_34783;
var G__34791 = chunk__33718_34784;
var G__34792 = count__33719_34785;
var G__34793 = (i__33720_34786 + (1));
seq__33717_34783 = G__34790;
chunk__33718_34784 = G__34791;
count__33719_34785 = G__34792;
i__33720_34786 = G__34793;
continue;
} else {
var temp__5823__auto___34794 = cljs.core.seq(seq__33717_34783);
if(temp__5823__auto___34794){
var seq__33717_34796__$1 = temp__5823__auto___34794;
if(cljs.core.chunked_seq_QMARK_(seq__33717_34796__$1)){
var c__5565__auto___34797 = cljs.core.chunk_first(seq__33717_34796__$1);
var G__34798 = cljs.core.chunk_rest(seq__33717_34796__$1);
var G__34799 = c__5565__auto___34797;
var G__34800 = cljs.core.count(c__5565__auto___34797);
var G__34801 = (0);
seq__33717_34783 = G__34798;
chunk__33718_34784 = G__34799;
count__33719_34785 = G__34800;
i__33720_34786 = G__34801;
continue;
} else {
var vec__33745_34805 = cljs.core.first(seq__33717_34796__$1);
var script_tag_34806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33745_34805,(0),null);
var script_body_34807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33745_34805,(1),null);
eval(script_body_34807);


var G__34808 = cljs.core.next(seq__33717_34796__$1);
var G__34809 = null;
var G__34810 = (0);
var G__34811 = (0);
seq__33717_34783 = G__34808;
chunk__33718_34784 = G__34809;
count__33719_34785 = G__34810;
i__33720_34786 = G__34811;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33748){
var vec__33749 = p__33748;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33749,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33749,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33760 = arguments.length;
switch (G__33760) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33827 = cljs.core.seq(style_keys);
var chunk__33828 = null;
var count__33829 = (0);
var i__33830 = (0);
while(true){
if((i__33830 < count__33829)){
var it = chunk__33828.cljs$core$IIndexed$_nth$arity$2(null, i__33830);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34817 = seq__33827;
var G__34818 = chunk__33828;
var G__34819 = count__33829;
var G__34820 = (i__33830 + (1));
seq__33827 = G__34817;
chunk__33828 = G__34818;
count__33829 = G__34819;
i__33830 = G__34820;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33827);
if(temp__5823__auto__){
var seq__33827__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33827__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__33827__$1);
var G__34822 = cljs.core.chunk_rest(seq__33827__$1);
var G__34823 = c__5565__auto__;
var G__34824 = cljs.core.count(c__5565__auto__);
var G__34825 = (0);
seq__33827 = G__34822;
chunk__33828 = G__34823;
count__33829 = G__34824;
i__33830 = G__34825;
continue;
} else {
var it = cljs.core.first(seq__33827__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34826 = cljs.core.next(seq__33827__$1);
var G__34827 = null;
var G__34828 = (0);
var G__34829 = (0);
seq__33827 = G__34826;
chunk__33828 = G__34827;
count__33829 = G__34828;
i__33830 = G__34829;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k33863,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__33879 = k33863;
var G__33879__$1 = (((G__33879 instanceof cljs.core.Keyword))?G__33879.fqn:null);
switch (G__33879__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33863,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__33895){
var vec__33896 = p__33895;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33896,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33896,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null, ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33862){
var self__ = this;
var G__33862__$1 = this;
return (new cljs.core.RecordIter((0),G__33862__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33864,other33865){
var self__ = this;
var this33864__$1 = this;
return (((!((other33865 == null)))) && ((((this33864__$1.constructor === other33865.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33864__$1.x,other33865.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33864__$1.y,other33865.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33864__$1.__extmap,other33865.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k33863){
var self__ = this;
var this__5347__auto____$1 = this;
var G__33927 = k33863;
var G__33927__$1 = (((G__33927 instanceof cljs.core.Keyword))?G__33927.fqn:null);
switch (G__33927__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33863);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__33862){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__33929 = cljs.core.keyword_identical_QMARK_;
var expr__33930 = k__5349__auto__;
if(cljs.core.truth_((pred__33929.cljs$core$IFn$_invoke$arity$2 ? pred__33929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33930) : pred__33929.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__33930)))){
return (new shadow.dom.Coordinate(G__33862,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33929.cljs$core$IFn$_invoke$arity$2 ? pred__33929.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33930) : pred__33929.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__33930)))){
return (new shadow.dom.Coordinate(self__.x,G__33862,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__33862),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__33862){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33862,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33866){
var extmap__5382__auto__ = (function (){var G__33944 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33866,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33866)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33944);
} else {
return G__33944;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33866),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33866),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k33970,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__33981 = k33970;
var G__33981__$1 = (((G__33981 instanceof cljs.core.Keyword))?G__33981.fqn:null);
switch (G__33981__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33970,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__33986){
var vec__33987 = p__33986;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33987,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33987,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null, ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33969){
var self__ = this;
var G__33969__$1 = this;
return (new cljs.core.RecordIter((0),G__33969__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33971,other33972){
var self__ = this;
var this33971__$1 = this;
return (((!((other33972 == null)))) && ((((this33971__$1.constructor === other33972.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33971__$1.w,other33972.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33971__$1.h,other33972.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33971__$1.__extmap,other33972.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k33970){
var self__ = this;
var this__5347__auto____$1 = this;
var G__34012 = k33970;
var G__34012__$1 = (((G__34012 instanceof cljs.core.Keyword))?G__34012.fqn:null);
switch (G__34012__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33970);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__33969){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__34017 = cljs.core.keyword_identical_QMARK_;
var expr__34018 = k__5349__auto__;
if(cljs.core.truth_((pred__34017.cljs$core$IFn$_invoke$arity$2 ? pred__34017.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34018) : pred__34017.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__34018)))){
return (new shadow.dom.Size(G__33969,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34017.cljs$core$IFn$_invoke$arity$2 ? pred__34017.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34018) : pred__34017.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__34018)))){
return (new shadow.dom.Size(self__.w,G__33969,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__33969),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__33969){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33969,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33974){
var extmap__5382__auto__ = (function (){var G__34038 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33974,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33974)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34038);
} else {
return G__34038;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33974),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33974),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__34936 = (i + (1));
var G__34937 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34936;
ret = G__34937;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34076){
var vec__34080 = p__34076;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34080,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34090 = arguments.length;
switch (G__34090) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34946 = ps;
var G__34947 = (i + (1));
el__$1 = G__34946;
i = G__34947;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34146 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34146,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34146,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34146,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34223_34969 = cljs.core.seq(props);
var chunk__34224_34970 = null;
var count__34225_34971 = (0);
var i__34226_34972 = (0);
while(true){
if((i__34226_34972 < count__34225_34971)){
var vec__34247_34976 = chunk__34224_34970.cljs$core$IIndexed$_nth$arity$2(null, i__34226_34972);
var k_34977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34247_34976,(0),null);
var v_34978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34247_34976,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_34977);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34977),v_34978);


var G__34979 = seq__34223_34969;
var G__34980 = chunk__34224_34970;
var G__34981 = count__34225_34971;
var G__34982 = (i__34226_34972 + (1));
seq__34223_34969 = G__34979;
chunk__34224_34970 = G__34980;
count__34225_34971 = G__34981;
i__34226_34972 = G__34982;
continue;
} else {
var temp__5823__auto___34984 = cljs.core.seq(seq__34223_34969);
if(temp__5823__auto___34984){
var seq__34223_34985__$1 = temp__5823__auto___34984;
if(cljs.core.chunked_seq_QMARK_(seq__34223_34985__$1)){
var c__5565__auto___34986 = cljs.core.chunk_first(seq__34223_34985__$1);
var G__34987 = cljs.core.chunk_rest(seq__34223_34985__$1);
var G__34988 = c__5565__auto___34986;
var G__34989 = cljs.core.count(c__5565__auto___34986);
var G__34990 = (0);
seq__34223_34969 = G__34987;
chunk__34224_34970 = G__34988;
count__34225_34971 = G__34989;
i__34226_34972 = G__34990;
continue;
} else {
var vec__34250_34991 = cljs.core.first(seq__34223_34985__$1);
var k_34992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34250_34991,(0),null);
var v_34993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34250_34991,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_34992);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34992),v_34993);


var G__34998 = cljs.core.next(seq__34223_34985__$1);
var G__34999 = null;
var G__35000 = (0);
var G__35001 = (0);
seq__34223_34969 = G__34998;
chunk__34224_34970 = G__34999;
count__34225_34971 = G__35000;
i__34226_34972 = G__35001;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34278 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34278,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34278,(1),null);
var seq__34281_35003 = cljs.core.seq(node_children);
var chunk__34283_35004 = null;
var count__34284_35005 = (0);
var i__34285_35006 = (0);
while(true){
if((i__34285_35006 < count__34284_35005)){
var child_struct_35007 = chunk__34283_35004.cljs$core$IIndexed$_nth$arity$2(null, i__34285_35006);
if((!((child_struct_35007 == null)))){
if(typeof child_struct_35007 === 'string'){
var text_35008 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35008),child_struct_35007].join(''));
} else {
var children_35009 = shadow.dom.svg_node(child_struct_35007);
if(cljs.core.seq_QMARK_(children_35009)){
var seq__34365_35011 = cljs.core.seq(children_35009);
var chunk__34367_35012 = null;
var count__34368_35013 = (0);
var i__34369_35014 = (0);
while(true){
if((i__34369_35014 < count__34368_35013)){
var child_35015 = chunk__34367_35012.cljs$core$IIndexed$_nth$arity$2(null, i__34369_35014);
if(cljs.core.truth_(child_35015)){
node.appendChild(child_35015);


var G__35016 = seq__34365_35011;
var G__35017 = chunk__34367_35012;
var G__35018 = count__34368_35013;
var G__35019 = (i__34369_35014 + (1));
seq__34365_35011 = G__35016;
chunk__34367_35012 = G__35017;
count__34368_35013 = G__35018;
i__34369_35014 = G__35019;
continue;
} else {
var G__35020 = seq__34365_35011;
var G__35021 = chunk__34367_35012;
var G__35022 = count__34368_35013;
var G__35023 = (i__34369_35014 + (1));
seq__34365_35011 = G__35020;
chunk__34367_35012 = G__35021;
count__34368_35013 = G__35022;
i__34369_35014 = G__35023;
continue;
}
} else {
var temp__5823__auto___35024 = cljs.core.seq(seq__34365_35011);
if(temp__5823__auto___35024){
var seq__34365_35025__$1 = temp__5823__auto___35024;
if(cljs.core.chunked_seq_QMARK_(seq__34365_35025__$1)){
var c__5565__auto___35026 = cljs.core.chunk_first(seq__34365_35025__$1);
var G__35027 = cljs.core.chunk_rest(seq__34365_35025__$1);
var G__35028 = c__5565__auto___35026;
var G__35029 = cljs.core.count(c__5565__auto___35026);
var G__35030 = (0);
seq__34365_35011 = G__35027;
chunk__34367_35012 = G__35028;
count__34368_35013 = G__35029;
i__34369_35014 = G__35030;
continue;
} else {
var child_35032 = cljs.core.first(seq__34365_35025__$1);
if(cljs.core.truth_(child_35032)){
node.appendChild(child_35032);


var G__35033 = cljs.core.next(seq__34365_35025__$1);
var G__35034 = null;
var G__35035 = (0);
var G__35036 = (0);
seq__34365_35011 = G__35033;
chunk__34367_35012 = G__35034;
count__34368_35013 = G__35035;
i__34369_35014 = G__35036;
continue;
} else {
var G__35037 = cljs.core.next(seq__34365_35025__$1);
var G__35038 = null;
var G__35039 = (0);
var G__35040 = (0);
seq__34365_35011 = G__35037;
chunk__34367_35012 = G__35038;
count__34368_35013 = G__35039;
i__34369_35014 = G__35040;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35009);
}
}


var G__35041 = seq__34281_35003;
var G__35042 = chunk__34283_35004;
var G__35043 = count__34284_35005;
var G__35044 = (i__34285_35006 + (1));
seq__34281_35003 = G__35041;
chunk__34283_35004 = G__35042;
count__34284_35005 = G__35043;
i__34285_35006 = G__35044;
continue;
} else {
var G__35045 = seq__34281_35003;
var G__35046 = chunk__34283_35004;
var G__35047 = count__34284_35005;
var G__35048 = (i__34285_35006 + (1));
seq__34281_35003 = G__35045;
chunk__34283_35004 = G__35046;
count__34284_35005 = G__35047;
i__34285_35006 = G__35048;
continue;
}
} else {
var temp__5823__auto___35049 = cljs.core.seq(seq__34281_35003);
if(temp__5823__auto___35049){
var seq__34281_35050__$1 = temp__5823__auto___35049;
if(cljs.core.chunked_seq_QMARK_(seq__34281_35050__$1)){
var c__5565__auto___35051 = cljs.core.chunk_first(seq__34281_35050__$1);
var G__35052 = cljs.core.chunk_rest(seq__34281_35050__$1);
var G__35053 = c__5565__auto___35051;
var G__35054 = cljs.core.count(c__5565__auto___35051);
var G__35055 = (0);
seq__34281_35003 = G__35052;
chunk__34283_35004 = G__35053;
count__34284_35005 = G__35054;
i__34285_35006 = G__35055;
continue;
} else {
var child_struct_35057 = cljs.core.first(seq__34281_35050__$1);
if((!((child_struct_35057 == null)))){
if(typeof child_struct_35057 === 'string'){
var text_35058 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35058),child_struct_35057].join(''));
} else {
var children_35059 = shadow.dom.svg_node(child_struct_35057);
if(cljs.core.seq_QMARK_(children_35059)){
var seq__34382_35060 = cljs.core.seq(children_35059);
var chunk__34384_35061 = null;
var count__34385_35062 = (0);
var i__34386_35063 = (0);
while(true){
if((i__34386_35063 < count__34385_35062)){
var child_35064 = chunk__34384_35061.cljs$core$IIndexed$_nth$arity$2(null, i__34386_35063);
if(cljs.core.truth_(child_35064)){
node.appendChild(child_35064);


var G__35065 = seq__34382_35060;
var G__35066 = chunk__34384_35061;
var G__35067 = count__34385_35062;
var G__35068 = (i__34386_35063 + (1));
seq__34382_35060 = G__35065;
chunk__34384_35061 = G__35066;
count__34385_35062 = G__35067;
i__34386_35063 = G__35068;
continue;
} else {
var G__35069 = seq__34382_35060;
var G__35070 = chunk__34384_35061;
var G__35071 = count__34385_35062;
var G__35072 = (i__34386_35063 + (1));
seq__34382_35060 = G__35069;
chunk__34384_35061 = G__35070;
count__34385_35062 = G__35071;
i__34386_35063 = G__35072;
continue;
}
} else {
var temp__5823__auto___35073__$1 = cljs.core.seq(seq__34382_35060);
if(temp__5823__auto___35073__$1){
var seq__34382_35074__$1 = temp__5823__auto___35073__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34382_35074__$1)){
var c__5565__auto___35079 = cljs.core.chunk_first(seq__34382_35074__$1);
var G__35080 = cljs.core.chunk_rest(seq__34382_35074__$1);
var G__35081 = c__5565__auto___35079;
var G__35082 = cljs.core.count(c__5565__auto___35079);
var G__35083 = (0);
seq__34382_35060 = G__35080;
chunk__34384_35061 = G__35081;
count__34385_35062 = G__35082;
i__34386_35063 = G__35083;
continue;
} else {
var child_35084 = cljs.core.first(seq__34382_35074__$1);
if(cljs.core.truth_(child_35084)){
node.appendChild(child_35084);


var G__35085 = cljs.core.next(seq__34382_35074__$1);
var G__35086 = null;
var G__35087 = (0);
var G__35088 = (0);
seq__34382_35060 = G__35085;
chunk__34384_35061 = G__35086;
count__34385_35062 = G__35087;
i__34386_35063 = G__35088;
continue;
} else {
var G__35089 = cljs.core.next(seq__34382_35074__$1);
var G__35090 = null;
var G__35091 = (0);
var G__35092 = (0);
seq__34382_35060 = G__35089;
chunk__34384_35061 = G__35090;
count__34385_35062 = G__35091;
i__34386_35063 = G__35092;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35059);
}
}


var G__35093 = cljs.core.next(seq__34281_35050__$1);
var G__35094 = null;
var G__35095 = (0);
var G__35096 = (0);
seq__34281_35003 = G__35093;
chunk__34283_35004 = G__35094;
count__34284_35005 = G__35095;
i__34285_35006 = G__35096;
continue;
} else {
var G__35097 = cljs.core.next(seq__34281_35050__$1);
var G__35098 = null;
var G__35099 = (0);
var G__35100 = (0);
seq__34281_35003 = G__35097;
chunk__34283_35004 = G__35098;
count__34284_35005 = G__35099;
i__34285_35006 = G__35100;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___35101 = arguments.length;
var i__5767__auto___35102 = (0);
while(true){
if((i__5767__auto___35102 < len__5766__auto___35101)){
args__5772__auto__.push((arguments[i__5767__auto___35102]));

var G__35103 = (i__5767__auto___35102 + (1));
i__5767__auto___35102 = G__35103;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34447){
var G__34448 = cljs.core.first(seq34447);
var seq34447__$1 = cljs.core.next(seq34447);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34448,seq34447__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34463 = arguments.length;
switch (G__34463) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__29895__auto___35113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_34491){
var state_val_34492 = (state_34491[(1)]);
if((state_val_34492 === (1))){
var state_34491__$1 = state_34491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34491__$1,(2),once_or_cleanup);
} else {
if((state_val_34492 === (2))){
var inst_34487 = (state_34491[(2)]);
var inst_34488 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34491__$1 = (function (){var statearr_34498 = state_34491;
(statearr_34498[(7)] = inst_34487);

return statearr_34498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34491__$1,inst_34488);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29377__auto__ = null;
var shadow$dom$state_machine__29377__auto____0 = (function (){
var statearr_34505 = [null,null,null,null,null,null,null,null];
(statearr_34505[(0)] = shadow$dom$state_machine__29377__auto__);

(statearr_34505[(1)] = (1));

return statearr_34505;
});
var shadow$dom$state_machine__29377__auto____1 = (function (state_34491){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_34491);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e34512){var ex__29380__auto__ = e34512;
var statearr_34513_35142 = state_34491;
(statearr_34513_35142[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_34491[(4)]))){
var statearr_34517_35144 = state_34491;
(statearr_34517_35144[(1)] = cljs.core.first((state_34491[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35146 = state_34491;
state_34491 = G__35146;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
shadow$dom$state_machine__29377__auto__ = function(state_34491){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29377__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29377__auto____1.call(this,state_34491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29377__auto____0;
shadow$dom$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29377__auto____1;
return shadow$dom$state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_34536 = f__29897__auto__();
(statearr_34536[(6)] = c__29895__auto___35113);

return statearr_34536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
