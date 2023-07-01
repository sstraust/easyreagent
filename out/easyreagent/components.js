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

//# sourceMappingURL=components.js.map
