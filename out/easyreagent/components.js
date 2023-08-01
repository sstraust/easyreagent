// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('easyreagent.components');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('easyreagent.create_component');
goog.require('reagent.core');
easyreagent.components.text_field = (function easyreagent$components$text_field(var_args){
var G__712 = arguments.length;
switch (G__712) {
case 1:
return easyreagent.components.text_field.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return easyreagent.components.text_field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(easyreagent.components.text_field.cljs$core$IFn$_invoke$arity$1 = (function (curr_value_atom){
var attr_map = null;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
return cljs.core.reset_BANG_.call(null,curr_value_atom,val.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (event){
if(((cljs.core._EQ_.call(null,(13),event.keyCode)) && ((!((new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(attr_map) == null)))))){
return new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(attr_map).call(null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,curr_value_atom),new cljs.core.Keyword(null,"class","class",-2030961996),"input input-xs input-bordered w-full max-w-xs"], null)], null);
}));

(easyreagent.components.text_field.cljs$core$IFn$_invoke$arity$2 = (function (attr_map,curr_value_atom){
return (function (attr_map__$1,curr_value_atom__$1){
return easyreagent.create_component.with_attr_map.call(null,attr_map__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
return cljs.core.reset_BANG_.call(null,curr_value_atom__$1,val.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (event){
if(((cljs.core._EQ_.call(null,(13),event.keyCode)) && ((!((new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(attr_map__$1) == null)))))){
return new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(attr_map__$1).call(null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,curr_value_atom__$1),new cljs.core.Keyword(null,"class","class",-2030961996),"input input-xs input-bordered w-full max-w-xs"], null)], null));
});
}));

(easyreagent.components.text_field.cljs$lang$maxFixedArity = 2);

easyreagent.components.text_area = (function easyreagent$components$text_area(var_args){
var G__715 = arguments.length;
switch (G__715) {
case 1:
return easyreagent.components.text_area.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return easyreagent.components.text_area.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(easyreagent.components.text_area.cljs$core$IFn$_invoke$arity$1 = (function (curr_value_atom){
var attr_map = null;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
return cljs.core.reset_BANG_.call(null,curr_value_atom,val.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,curr_value_atom),new cljs.core.Keyword(null,"class","class",-2030961996),"input input-xs input-bordered w-full max-w-xs"], null)], null);
}));

(easyreagent.components.text_area.cljs$core$IFn$_invoke$arity$2 = (function (attr_map,curr_value_atom){
return (function (attr_map__$1,curr_value_atom__$1){
return easyreagent.create_component.with_attr_map.call(null,attr_map__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
return cljs.core.reset_BANG_.call(null,curr_value_atom__$1,val.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,curr_value_atom__$1),new cljs.core.Keyword(null,"class","class",-2030961996),"input input-xs input-bordered w-full max-w-xs"], null)], null));
});
}));

(easyreagent.components.text_area.cljs$lang$maxFixedArity = 2);

easyreagent.components.get_date_str = (function easyreagent$components$get_date_str(time_millis){
var seconds = cljs.core.quot.call(null,time_millis,(1000));
var minutes = cljs.core.quot.call(null,seconds,(60));
var hours = cljs.core.quot.call(null,minutes,(60));
var days = cljs.core.quot.call(null,hours,(24));
if((days > (0))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(days)," days"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,hours,(60))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,minutes,(60))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,seconds,(60)))].join('');
}
});
easyreagent.components.reset_timer_and_check_end = (function easyreagent$components$reset_timer_and_check_end(curr_time,end_time,time_ended){
if(cljs.core.truth_(cljs.core.deref.call(null,time_ended))){
return cljs.core.reset_BANG_.call(null,curr_time,end_time);
} else {
if((cljs.core.deref.call(null,curr_time) > end_time)){
return cljs.core.reset_BANG_.call(null,time_ended,true);
} else {
return cljs.core.reset_BANG_.call(null,curr_time,Date.now());
}
}
});
easyreagent.components.timer = (function easyreagent$components$timer(end_time){
var curr_time = reagent.core.atom.call(null,Date.now());
var time_ended = reagent.core.atom.call(null,false);
setInterval((function (){
return easyreagent.components.reset_timer_and_check_end.call(null,curr_time,end_time,time_ended);
}));

return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),easyreagent.components.get_date_str.call(null,(end_time - cljs.core.deref.call(null,curr_time)))], null);
});
});
easyreagent.components.popup_window = (function easyreagent$components$popup_window(var_args){
var args__5772__auto__ = [];
var len__5766__auto___720 = arguments.length;
var i__5767__auto___721 = (0);
while(true){
if((i__5767__auto___721 < len__5766__auto___720)){
args__5772__auto__.push((arguments[i__5767__auto___721]));

var G__722 = (i__5767__auto___721 + (1));
i__5767__auto___721 = G__722;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return easyreagent.components.popup_window.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(easyreagent.components.popup_window.cljs$core$IFn$_invoke$arity$variadic = (function (options,is_shown,body){
return (function() { 
var G__723__delegate = function (options__$1,is_shown__$1,body__$1){
if(cljs.core.truth_(cljs.core.deref.call(null,is_shown__$1))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),easyreagent.create_component.merge_attrs.call(null,options__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"popout-menu"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-ghost",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,is_shown__$1,cljs.core.not);
})], null),"X"], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),body__$1))], null);
} else {
return null;
}
};
var G__723 = function (options__$1,is_shown__$1,var_args){
var body__$1 = null;
if (arguments.length > 2) {
var G__724__i = 0, G__724__a = new Array(arguments.length -  2);
while (G__724__i < G__724__a.length) {G__724__a[G__724__i] = arguments[G__724__i + 2]; ++G__724__i;}
  body__$1 = new cljs.core.IndexedSeq(G__724__a,0,null);
} 
return G__723__delegate.call(this,options__$1,is_shown__$1,body__$1);};
G__723.cljs$lang$maxFixedArity = 2;
G__723.cljs$lang$applyTo = (function (arglist__725){
var options__$1 = cljs.core.first(arglist__725);
arglist__725 = cljs.core.next(arglist__725);
var is_shown__$1 = cljs.core.first(arglist__725);
var body__$1 = cljs.core.rest(arglist__725);
return G__723__delegate(options__$1,is_shown__$1,body__$1);
});
G__723.cljs$core$IFn$_invoke$arity$variadic = G__723__delegate;
return G__723;
})()
;
}));

(easyreagent.components.popup_window.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(easyreagent.components.popup_window.cljs$lang$applyTo = (function (seq717){
var G__718 = cljs.core.first.call(null,seq717);
var seq717__$1 = cljs.core.next.call(null,seq717);
var G__719 = cljs.core.first.call(null,seq717__$1);
var seq717__$2 = cljs.core.next.call(null,seq717__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__718,G__719,seq717__$2);
}));


//# sourceMappingURL=components.js.map
