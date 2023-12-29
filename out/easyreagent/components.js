// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('easyreagent.components');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('easyreagent.create_component');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljss.core');
goog.require('reagent.core');
easyreagent.components.easyreagent_global_elements = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
easyreagent.components.easyreagent_global_elements_id = "easyreagentGlobalState";
easyreagent.components.global_state_component = (function easyreagent$components$global_state_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5520__auto__ = (function easyreagent$components$global_state_component_$_iter__2873(s__2874){
return (new cljs.core.LazySeq(null,(function (){
var s__2874__$1 = s__2874;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2874__$1);
if(temp__5457__auto__){
var s__2874__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2874__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__2874__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__2876 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__2875 = (0);
while(true){
if((i__2875 < size__5519__auto__)){
var elt = cljs.core._nth.call(null,c__5518__auto__,i__2875);
cljs.core.chunk_append.call(null,b__2876,elt);

var G__2877 = (i__2875 + (1));
i__2875 = G__2877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2876),easyreagent$components$global_state_component_$_iter__2873.call(null,cljs.core.chunk_rest.call(null,s__2874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2876),null);
}
} else {
var elt = cljs.core.first.call(null,s__2874__$2);
return cljs.core.cons.call(null,elt,easyreagent$components$global_state_component_$_iter__2873.call(null,cljs.core.rest.call(null,s__2874__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,cljs.core.deref.call(null,easyreagent.components.easyreagent_global_elements));
})()], null);
});
easyreagent.components.add_component_to_global_state = (function easyreagent$components$add_component_to_global_state(new_component){
var curr_global = document.getElementById(easyreagent.components.easyreagent_global_elements_id);
if(cljs.core.not.call(null,curr_global)){
var new_elt_2878 = document.createElement("div");
(new_elt_2878.id = easyreagent.components.easyreagent_global_elements_id);

document.body.appendChild(new_elt_2878);

reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.components.global_state_component], null),document.getElementById(easyreagent.components.easyreagent_global_elements_id));
} else {
}

return cljs.core.swap_BANG_.call(null,easyreagent.components.easyreagent_global_elements,cljs.core.conj,new_component);
});
cljss.core.css.call(null,".er-x-out",".er-x-out{float:right;font-size:24px;font-weight:500;margin-left:5px;position:relative;top:-15px;left:5px;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-modal-info-text-wrapper:hover",".er-modal-info-text-wrapper:hover{display:block;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-popup-window-container",".er-popup-window-container{position:fixed;left:0px;top:0px;width:100%;height:100%;z-index:1020;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-popup-window",".er-popup-window{margin-left:auto;background-color:white;margin-top:5%;width:fit-content;padding-right:20px;padding-left:25px;padding:16px;margin-right:auto;border-radius:16px;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-popup-window-background",".er-popup-window-background{position:fixed;left:0px;top:0px;width:100%;height:100%;background-color:black;opacity:0.7;z-index:-1;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-modal-info-container-div > .er-modal-info-text-wrapper",".er-modal-info-container-div > .er-modal-info-text-wrapper{display:none;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-x-out:focus",".er-x-out:focus{color:green;text-decoration:none;cursor:pointer;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,"v-box","v-box{display:flex;flex-direction:column;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-modal-info-container-div:hover > .er-modal-info-text-wrapper",".er-modal-info-container-div:hover > .er-modal-info-text-wrapper{display:block;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,".er-x-out:hover",".er-x-out:hover{color:green;text-decoration:none;cursor:pointer;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css.call(null,"h-box","h-box{display:flex;flex-direction:row;}",cljs.core.PersistentVector.EMPTY);
easyreagent.components.text_field = (function easyreagent$components$text_field(var_args){
var G__2881 = arguments.length;
switch (G__2881) {
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
var G__2879 = cljs.core.atom.call(null,attr_map);
var result__704__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
return cljs.core.reset_BANG_.call(null,curr_value_atom,val.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (event){
if(((cljs.core._EQ_.call(null,(13),event.keyCode)) && ((!((new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,G__2879)) == null)))))){
return new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,G__2879)).call(null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,curr_value_atom),new cljs.core.Keyword(null,"class","class",-2030961996),"input input-xs input-bordered w-full max-w-xs"], null)], null);
if((!(cljs.core.fn_QMARK_.call(null,result__704__auto__)))){
return easyreagent.create_component.with_attr_map.call(null,attr_map,result__704__auto__);
} else {
return (function (attr_map__$1,curr_value_atom__$1){
cljs.core.reset_BANG_.call(null,G__2879,attr_map__$1);

return easyreagent.create_component.with_attr_map.call(null,attr_map__$1,cljs.core.apply.call(null,result__704__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_value_atom__$1], null)));
});
}
}));

(easyreagent.components.text_field.cljs$lang$maxFixedArity = 2);

easyreagent.components.text_area = (function easyreagent$components$text_area(var_args){
var G__2885 = arguments.length;
switch (G__2885) {
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
var G__2883 = cljs.core.atom.call(null,attr_map);
var result__704__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.reset_BANG_.call(null,curr_value_atom,val.target.value);

return new cljs.core.Keyword(null,"additional-on-change","additional-on-change",228616361).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,G__2883)).call(null);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,curr_value_atom),new cljs.core.Keyword(null,"class","class",-2030961996),"input input-xs input-bordered w-full max-w-xs"], null)], null);
if((!(cljs.core.fn_QMARK_.call(null,result__704__auto__)))){
return easyreagent.create_component.with_attr_map.call(null,attr_map,result__704__auto__);
} else {
return (function (attr_map__$1,curr_value_atom__$1){
cljs.core.reset_BANG_.call(null,G__2883,attr_map__$1);

return easyreagent.create_component.with_attr_map.call(null,attr_map__$1,cljs.core.apply.call(null,result__704__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_value_atom__$1], null)));
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
return [(((hours > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%02d",hours)),":"].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%02d",cljs.core.mod.call(null,minutes,(60)))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%02d",cljs.core.mod.call(null,seconds,(60))))].join('');
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
var G__2889 = arguments.length;
switch (G__2889) {
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
var G__2887 = cljs.core.atom.call(null,attr_map);
var result__704__auto__ = (function (){var curr_time = reagent.core.atom.call(null,Date.now());
var time_ended = reagent.core.atom.call(null,false);
setInterval((function (){
return easyreagent.components.reset_timer_and_check_end.call(null,curr_time,end_time,time_ended,cljs.core.deref.call(null,G__2887));
}),(100));

return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),easyreagent.components.get_date_str.call(null,(end_time - cljs.core.deref.call(null,curr_time)))], null);
});
})();
if((!(cljs.core.fn_QMARK_.call(null,result__704__auto__)))){
return easyreagent.create_component.with_attr_map.call(null,attr_map,result__704__auto__);
} else {
return (function (attr_map__$1,end_time__$1){
cljs.core.reset_BANG_.call(null,G__2887,attr_map__$1);

return easyreagent.create_component.with_attr_map.call(null,attr_map__$1,cljs.core.apply.call(null,result__704__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_time__$1], null)));
});
}
}));

(easyreagent.components.timer.cljs$lang$maxFixedArity = 2);

easyreagent.components.popup_window = (function easyreagent$components$popup_window(var_args){
var args__5772__auto__ = [];
var len__5766__auto___2894 = arguments.length;
var i__5767__auto___2895 = (0);
while(true){
if((i__5767__auto___2895 < len__5766__auto___2894)){
args__5772__auto__.push((arguments[i__5767__auto___2895]));

var G__2896 = (i__5767__auto___2895 + (1));
i__5767__auto___2895 = G__2896;
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
var G__2897__delegate = function (options__$1,is_shown__$1,body__$1){
if(cljs.core.truth_(cljs.core.deref.call(null,is_shown__$1))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"er-popup-window-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"er-popup-window-background",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,is_shown__$1,false);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),easyreagent.create_component.merge_attrs.call(null,options__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"er-popup-window"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"1rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"er-x-out",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,is_shown__$1,false);
})], null),goog.string.unescapeEntities("&times;")], null)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),body__$1))], null)], null);
} else {
return null;
}
};
var G__2897 = function (options__$1,is_shown__$1,var_args){
var body__$1 = null;
if (arguments.length > 2) {
var G__2898__i = 0, G__2898__a = new Array(arguments.length -  2);
while (G__2898__i < G__2898__a.length) {G__2898__a[G__2898__i] = arguments[G__2898__i + 2]; ++G__2898__i;}
  body__$1 = new cljs.core.IndexedSeq(G__2898__a,0,null);
} 
return G__2897__delegate.call(this,options__$1,is_shown__$1,body__$1);};
G__2897.cljs$lang$maxFixedArity = 2;
G__2897.cljs$lang$applyTo = (function (arglist__2899){
var options__$1 = cljs.core.first(arglist__2899);
arglist__2899 = cljs.core.next(arglist__2899);
var is_shown__$1 = cljs.core.first(arglist__2899);
var body__$1 = cljs.core.rest(arglist__2899);
return G__2897__delegate(options__$1,is_shown__$1,body__$1);
});
G__2897.cljs$core$IFn$_invoke$arity$variadic = G__2897__delegate;
return G__2897;
})()
;
}));

(easyreagent.components.popup_window.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(easyreagent.components.popup_window.cljs$lang$applyTo = (function (seq2891){
var G__2892 = cljs.core.first.call(null,seq2891);
var seq2891__$1 = cljs.core.next.call(null,seq2891);
var G__2893 = cljs.core.first.call(null,seq2891__$1);
var seq2891__$2 = cljs.core.next.call(null,seq2891__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2892,G__2893,seq2891__$2);
}));

easyreagent.components.create_popup = (function easyreagent$components$create_popup(var_args){
var G__2901 = arguments.length;
switch (G__2901) {
case 2:
return easyreagent.components.create_popup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return easyreagent.components.create_popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(easyreagent.components.create_popup.cljs$core$IFn$_invoke$arity$2 = (function (is_shown,content){
return easyreagent.components.create_popup.call(null,null,is_shown,content);
}));

(easyreagent.components.create_popup.cljs$core$IFn$_invoke$arity$3 = (function (options,is_shown,content){
return easyreagent.components.add_component_to_global_state.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.components.popup_window,options,is_shown,content], null));
}));

(easyreagent.components.create_popup.cljs$lang$maxFixedArity = 3);

easyreagent.components.submit_button = (function easyreagent$components$submit_button(var_args){
var G__2904 = arguments.length;
switch (G__2904) {
case 1:
return easyreagent.components.submit_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return easyreagent.components.submit_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(easyreagent.components.submit_button.cljs$core$IFn$_invoke$arity$1 = (function (content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.components.submit_button,null,content], null);
}));

(easyreagent.components.submit_button.cljs$core$IFn$_invoke$arity$2 = (function (options,content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-box.w-full.justify-end.er-submit-button-container","h-box.w-full.justify-end.er-submit-button-container",1464242410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),options,content], null)], null);
}));

(easyreagent.components.submit_button.cljs$lang$maxFixedArity = 2);

easyreagent.components.create_alert = (function easyreagent$components$create_alert(var_args){
var G__2907 = arguments.length;
switch (G__2907) {
case 1:
return easyreagent.components.create_alert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return easyreagent.components.create_alert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(easyreagent.components.create_alert.cljs$core$IFn$_invoke$arity$1 = (function (content){
return easyreagent.components.create_alert.call(null,null,content);
}));

(easyreagent.components.create_alert.cljs$core$IFn$_invoke$arity$2 = (function (options,content){
var is_shown = reagent.core.atom.call(null,true);
return easyreagent.components.create_popup.call(null,options,is_shown,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box.er-alert-popup-container","v-box.er-alert-popup-container",1375368322),content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.components.submit_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,is_shown,false);
})], null),"Got It"], null)], null));
}));

(easyreagent.components.create_alert.cljs$lang$maxFixedArity = 2);

easyreagent.components.rand_id = (function easyreagent$components$rand_id(){
return ["id-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(((1000000) * Math.random()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(((1000000) * Math.random())))].join('');
});
easyreagent.components.modal_info_view_width = (500);
easyreagent.components.with_modal_info = (function easyreagent$components$with_modal_info(var_args){
var G__2911 = arguments.length;
switch (G__2911) {
case 2:
return easyreagent.components.with_modal_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return easyreagent.components.with_modal_info.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(easyreagent.components.with_modal_info.cljs$core$IFn$_invoke$arity$2 = (function (description,content){
var attr_map = null;
var is_shown = reagent.core.atom.call(null,false);
var curr_id = easyreagent.components.rand_id.call(null);
var curr_pos_x = reagent.core.atom.call(null,null);
var curr_pos_y = reagent.core.atom.call(null,null);
var bounding_rect = reagent.core.atom.call(null,null);
return (function (description__$1,content__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.er-modal-info-container-div","div.er-modal-info-container-div",1962436396),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),curr_id,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (e){
console.log(curr_id);

if((!(cljs.core._EQ_.call(null,document.getElementById(curr_id).getBoundingClientRect().left,cljs.core.deref.call(null,curr_pos_x))))){
cljs.core.reset_BANG_.call(null,curr_pos_x,document.getElementById(curr_id).getBoundingClientRect().left);
} else {
}

if((!(cljs.core._EQ_.call(null,document.getElementById(curr_id).getBoundingClientRect(),cljs.core.deref.call(null,bounding_rect))))){
cljs.core.reset_BANG_.call(null,bounding_rect,document.getElementById(curr_id).getBoundingClientRect());
} else {
}

if((!(cljs.core._EQ_.call(null,document.getElementById(curr_id).getBoundingClientRect().top,cljs.core.deref.call(null,curr_pos_y))))){
cljs.core.reset_BANG_.call(null,curr_pos_y,document.getElementById(curr_id).getBoundingClientRect().top);
} else {
}

if(cljs.core.not.call(null,cljs.core.deref.call(null,is_shown))){
return cljs.core.reset_BANG_.call(null,is_shown,true);
} else {
return null;
}
})], null),content__$1,(cljs.core.truth_(cljs.core.deref.call(null,is_shown))?(function (){var position_map = (function (){var G__2912 = new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665).cljs$core$IFn$_invoke$arity$1(attr_map);
var G__2912__$1 = (((G__2912 instanceof cljs.core.Keyword))?G__2912.fqn:null);
switch (G__2912__$1) {
case "right":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref.call(null,curr_pos_y),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref.call(null,bounding_rect).right], null);

break;
case "bottom":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref.call(null,bounding_rect).bottom,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref.call(null,bounding_rect).left], null);

break;
case "top":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref.call(null,curr_pos_y),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref.call(null,bounding_rect).left], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref.call(null,curr_pos_y),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref.call(null,curr_pos_x)], null);

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.er-modal-info-text-wrapper","div.er-modal-info-text-wrapper",-924881075),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(10)], null),position_map)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__2913 = new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665).cljs$core$IFn$_invoke$arity$1(attr_map);
var G__2913__$1 = (((G__2913 instanceof cljs.core.Keyword))?G__2913.fqn:null);
switch (G__2913__$1) {
case "right":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null);

break;
case "bottom":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null);

break;
case "top":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null);

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.er-modal-info-text","div.er-modal-info-text",-1633027799),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),description__$1], null)], null)], null)], null);
})():null)], null);
});
}));

(easyreagent.components.with_modal_info.cljs$core$IFn$_invoke$arity$3 = (function (attr_map,description,content){
var G__2909 = cljs.core.atom.call(null,attr_map);
var result__704__auto__ = (function (){var is_shown = reagent.core.atom.call(null,false);
var curr_id = easyreagent.components.rand_id.call(null);
var curr_pos_x = reagent.core.atom.call(null,null);
var curr_pos_y = reagent.core.atom.call(null,null);
var bounding_rect = reagent.core.atom.call(null,null);
return (function (description__$1,content__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.er-modal-info-container-div","div.er-modal-info-container-div",1962436396),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),curr_id,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (e){
console.log(curr_id);

if((!(cljs.core._EQ_.call(null,document.getElementById(curr_id).getBoundingClientRect().left,cljs.core.deref.call(null,curr_pos_x))))){
cljs.core.reset_BANG_.call(null,curr_pos_x,document.getElementById(curr_id).getBoundingClientRect().left);
} else {
}

if((!(cljs.core._EQ_.call(null,document.getElementById(curr_id).getBoundingClientRect(),cljs.core.deref.call(null,bounding_rect))))){
cljs.core.reset_BANG_.call(null,bounding_rect,document.getElementById(curr_id).getBoundingClientRect());
} else {
}

if((!(cljs.core._EQ_.call(null,document.getElementById(curr_id).getBoundingClientRect().top,cljs.core.deref.call(null,curr_pos_y))))){
cljs.core.reset_BANG_.call(null,curr_pos_y,document.getElementById(curr_id).getBoundingClientRect().top);
} else {
}

if(cljs.core.not.call(null,cljs.core.deref.call(null,is_shown))){
return cljs.core.reset_BANG_.call(null,is_shown,true);
} else {
return null;
}
})], null),content__$1,(cljs.core.truth_(cljs.core.deref.call(null,is_shown))?(function (){var position_map = (function (){var G__2914 = new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,G__2909));
var G__2914__$1 = (((G__2914 instanceof cljs.core.Keyword))?G__2914.fqn:null);
switch (G__2914__$1) {
case "right":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref.call(null,curr_pos_y),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref.call(null,bounding_rect).right], null);

break;
case "bottom":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref.call(null,bounding_rect).bottom,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref.call(null,bounding_rect).left], null);

break;
case "top":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref.call(null,curr_pos_y),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref.call(null,bounding_rect).left], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref.call(null,curr_pos_y),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref.call(null,curr_pos_x)], null);

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.er-modal-info-text-wrapper","div.er-modal-info-text-wrapper",-924881075),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(10)], null),position_map)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__2915 = new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,G__2909));
var G__2915__$1 = (((G__2915 instanceof cljs.core.Keyword))?G__2915.fqn:null);
switch (G__2915__$1) {
case "right":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null);

break;
case "bottom":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null);

break;
case "top":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null);

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.er-modal-info-text","div.er-modal-info-text",-1633027799),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),description__$1], null)], null)], null)], null);
})():null)], null);
});
})();
if((!(cljs.core.fn_QMARK_.call(null,result__704__auto__)))){
return easyreagent.create_component.with_attr_map.call(null,attr_map,result__704__auto__);
} else {
return (function (attr_map__$1,description__$1,content__$1){
cljs.core.reset_BANG_.call(null,G__2909,attr_map__$1);

return easyreagent.create_component.with_attr_map.call(null,attr_map__$1,cljs.core.apply.call(null,result__704__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [description__$1,content__$1], null)));
});
}
}));

(easyreagent.components.with_modal_info.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=components.js.map
