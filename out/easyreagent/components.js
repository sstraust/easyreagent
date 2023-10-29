// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('easyreagent.components');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('easyreagent.create_component');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljss.core');
goog.require('reagent.core');
cljss.core.css.call(null,"v-box","v-box{display:flex;flex-direction:column;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,"h-box","h-box{display:flex;flex-direction:row;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-popup-window-container",".er-popup-window-container{position:fixed;left:0px;top:0px;width:100%;height:100%;z-index:1020;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-popup-window-background",".er-popup-window-background{position:fixed;left:0px;top:0px;width:100%;height:100%;background-color:black;opacity:0.7;z-index:-1;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-popup-window",".er-popup-window{margin-top:5%;margin-left:auto;margin-right:auto;background-color:white;width:fit-content;padding:16px;padding-left:25px;border-radius:16px;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-x-out",".er-x-out{float:right;font-size:24px;font-weight:500;margin-left:5px;position:relative;top:-15px;left:5px;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-x-out:hover",".er-x-out:hover{color:green;text-decoration:none;cursor:pointer;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-x-out:focus",".er-x-out:focus{color:green;text-decoration:none;cursor:pointer;}",cljs.core.PersistentVector.EMPTY);
easyreagent.components.text_field = (function easyreagent$components$text_field(var_args){
var G__2872 = arguments.length;
switch (G__2872) {
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
var result__702__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
return cljs.core.reset_BANG_.call(null,curr_value_atom,val.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (event){
if(((cljs.core._EQ_.call(null,(13),event.keyCode)) && ((!((new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(attr_map) == null)))))){
return new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(attr_map).call(null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,curr_value_atom),new cljs.core.Keyword(null,"class","class",-2030961996),"input input-xs input-bordered w-full max-w-xs"], null)], null);
if((!(cljs.core.fn_QMARK_.call(null,result__702__auto__)))){
return easyreagent.create_component.with_attr_map.call(null,attr_map,result__702__auto__);
} else {
return (function (attr_map__$1,curr_value_atom__$1){
return easyreagent.create_component.with_attr_map.call(null,attr_map__$1,cljs.core.apply.call(null,result__702__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_value_atom__$1], null)));
});
}
}));

(easyreagent.components.text_field.cljs$lang$maxFixedArity = 2);

easyreagent.components.text_area = (function easyreagent$components$text_area(var_args){
var G__2875 = arguments.length;
switch (G__2875) {
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
cljs.core.reset_BANG_.call(null,curr_value_atom,val.target.value);

return new cljs.core.Keyword(null,"additional-on-change","additional-on-change",228616361).cljs$core$IFn$_invoke$arity$1(attr_map).call(null);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,curr_value_atom),new cljs.core.Keyword(null,"class","class",-2030961996),"input input-xs input-bordered w-full max-w-xs"], null)], null);
}));

(easyreagent.components.text_area.cljs$core$IFn$_invoke$arity$2 = (function (attr_map,curr_value_atom){
var result__702__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.reset_BANG_.call(null,curr_value_atom,val.target.value);

return new cljs.core.Keyword(null,"additional-on-change","additional-on-change",228616361).cljs$core$IFn$_invoke$arity$1(attr_map).call(null);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,curr_value_atom),new cljs.core.Keyword(null,"class","class",-2030961996),"input input-xs input-bordered w-full max-w-xs"], null)], null);
if((!(cljs.core.fn_QMARK_.call(null,result__702__auto__)))){
return easyreagent.create_component.with_attr_map.call(null,attr_map,result__702__auto__);
} else {
return (function (attr_map__$1,curr_value_atom__$1){
return easyreagent.create_component.with_attr_map.call(null,attr_map__$1,cljs.core.apply.call(null,result__702__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_value_atom__$1], null)));
});
}
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
return [(((cljs.core.mod.call(null,hours,(60)) > (0)))?(function (){
goog.string.format("%02d",cljs.core.mod.call(null,hours,(60)));

return ":";
})()
:null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%02d",cljs.core.mod.call(null,minutes,(60)))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%02d",cljs.core.mod.call(null,seconds,(60))))].join('');
}
});
easyreagent.components.reset_timer_and_check_end = (function easyreagent$components$reset_timer_and_check_end(curr_time,end_time,time_ended,attr_map){
if(cljs.core.truth_(cljs.core.deref.call(null,time_ended))){
return cljs.core.reset_BANG_.call(null,curr_time,end_time);
} else {
if((cljs.core.deref.call(null,curr_time) > end_time)){
cljs.core.reset_BANG_.call(null,time_ended,true);

if((!((new cljs.core.Keyword(null,"on-ended","on-ended",428118347).cljs$core$IFn$_invoke$arity$1(attr_map) == null)))){
return new cljs.core.Keyword(null,"on-ended","on-ended",428118347).cljs$core$IFn$_invoke$arity$1(attr_map).call(null);
} else {
return null;
}
} else {
return cljs.core.reset_BANG_.call(null,curr_time,Date.now());
}
}
});
easyreagent.components.timer = (function easyreagent$components$timer(var_args){
var G__2878 = arguments.length;
switch (G__2878) {
case 1:
return easyreagent.components.timer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return easyreagent.components.timer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(easyreagent.components.timer.cljs$core$IFn$_invoke$arity$1 = (function (end_time){
var attr_map = null;
var curr_time = reagent.core.atom.call(null,Date.now());
var time_ended = reagent.core.atom.call(null,false);
setInterval((function (){
return easyreagent.components.reset_timer_and_check_end.call(null,curr_time,end_time,time_ended,attr_map);
}),(100));

return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),easyreagent.components.get_date_str.call(null,(end_time - cljs.core.deref.call(null,curr_time)))], null);
});
}));

(easyreagent.components.timer.cljs$core$IFn$_invoke$arity$2 = (function (attr_map,end_time){
var result__702__auto__ = (function (){var curr_time = reagent.core.atom.call(null,Date.now());
var time_ended = reagent.core.atom.call(null,false);
setInterval((function (){
return easyreagent.components.reset_timer_and_check_end.call(null,curr_time,end_time,time_ended,attr_map);
}),(100));

return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),easyreagent.components.get_date_str.call(null,(end_time - cljs.core.deref.call(null,curr_time)))], null);
});
})();
if((!(cljs.core.fn_QMARK_.call(null,result__702__auto__)))){
return easyreagent.create_component.with_attr_map.call(null,attr_map,result__702__auto__);
} else {
return (function (attr_map__$1,end_time__$1){
return easyreagent.create_component.with_attr_map.call(null,attr_map__$1,cljs.core.apply.call(null,result__702__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_time__$1], null)));
});
}
}));

(easyreagent.components.timer.cljs$lang$maxFixedArity = 2);

easyreagent.components.popup_window = (function easyreagent$components$popup_window(var_args){
var args__5772__auto__ = [];
var len__5766__auto___2883 = arguments.length;
var i__5767__auto___2884 = (0);
while(true){
if((i__5767__auto___2884 < len__5766__auto___2883)){
args__5772__auto__.push((arguments[i__5767__auto___2884]));

var G__2885 = (i__5767__auto___2884 + (1));
i__5767__auto___2884 = G__2885;
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
var G__2886__delegate = function (options__$1,is_shown__$1,body__$1){
if(cljs.core.truth_(cljs.core.deref.call(null,is_shown__$1))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"er-popup-window-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"er-popup-window-background",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,is_shown__$1,false);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),easyreagent.create_component.merge_attrs.call(null,options__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"er-popup-window"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"er-x-out",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,is_shown__$1,false);
})], null),goog.string.unescapeEntities("&times;")], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),body__$1))], null)], null);
} else {
return null;
}
};
var G__2886 = function (options__$1,is_shown__$1,var_args){
var body__$1 = null;
if (arguments.length > 2) {
var G__2887__i = 0, G__2887__a = new Array(arguments.length -  2);
while (G__2887__i < G__2887__a.length) {G__2887__a[G__2887__i] = arguments[G__2887__i + 2]; ++G__2887__i;}
  body__$1 = new cljs.core.IndexedSeq(G__2887__a,0,null);
} 
return G__2886__delegate.call(this,options__$1,is_shown__$1,body__$1);};
G__2886.cljs$lang$maxFixedArity = 2;
G__2886.cljs$lang$applyTo = (function (arglist__2888){
var options__$1 = cljs.core.first(arglist__2888);
arglist__2888 = cljs.core.next(arglist__2888);
var is_shown__$1 = cljs.core.first(arglist__2888);
var body__$1 = cljs.core.rest(arglist__2888);
return G__2886__delegate(options__$1,is_shown__$1,body__$1);
});
G__2886.cljs$core$IFn$_invoke$arity$variadic = G__2886__delegate;
return G__2886;
})()
;
}));

(easyreagent.components.popup_window.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(easyreagent.components.popup_window.cljs$lang$applyTo = (function (seq2880){
var G__2881 = cljs.core.first.call(null,seq2880);
var seq2880__$1 = cljs.core.next.call(null,seq2880);
var G__2882 = cljs.core.first.call(null,seq2880__$1);
var seq2880__$2 = cljs.core.next.call(null,seq2880__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2881,G__2882,seq2880__$2);
}));


//# sourceMappingURL=components.js.map
