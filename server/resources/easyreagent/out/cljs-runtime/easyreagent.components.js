goog.provide('easyreagent.components');
easyreagent.components.easyreagent_global_elements = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
easyreagent.components.easyreagent_global_elements_id = "easyreagentGlobalState";
easyreagent.components.global_state_component = (function easyreagent$components$global_state_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5520__auto__ = (function easyreagent$components$global_state_component_$_iter__23566(s__23567){
return (new cljs.core.LazySeq(null,(function (){
var s__23567__$1 = s__23567;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__23567__$1);
if(temp__5823__auto__){
var s__23567__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23567__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__23567__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__23569 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__23568 = (0);
while(true){
if((i__23568 < size__5519__auto__)){
var elt = cljs.core._nth(c__5518__auto__,i__23568);
cljs.core.chunk_append(b__23569,elt);

var G__23698 = (i__23568 + (1));
i__23568 = G__23698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23569),easyreagent$components$global_state_component_$_iter__23566(cljs.core.chunk_rest(s__23567__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23569),null);
}
} else {
var elt = cljs.core.first(s__23567__$2);
return cljs.core.cons(elt,easyreagent$components$global_state_component_$_iter__23566(cljs.core.rest(s__23567__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.deref(easyreagent.components.easyreagent_global_elements));
})()], null);
});
easyreagent.components.add_component_to_global_state = (function easyreagent$components$add_component_to_global_state(new_component){
var curr_global = document.getElementById(easyreagent.components.easyreagent_global_elements_id);
if(cljs.core.not(curr_global)){
var new_elt_23702 = document.createElement("div");
(new_elt_23702.id = easyreagent.components.easyreagent_global_elements_id);

document.body.appendChild(new_elt_23702);

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.components.global_state_component], null),document.getElementById(easyreagent.components.easyreagent_global_elements_id));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(easyreagent.components.easyreagent_global_elements,cljs.core.conj,new_component);
});
cljss.core.css(".er-x-out",".er-x-out{float:right;font-size:24px;font-weight:500;margin-left:5px;position:relative;top:-15px;left:5px;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css(".er-modal-info-text-wrapper:hover",".er-modal-info-text-wrapper:hover{display:block;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css(".er-popup-window-container",".er-popup-window-container{position:fixed;left:0px;top:0px;width:100%;height:100%;z-index:1020;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css(".er-popup-window",".er-popup-window{margin-left:auto;background-color:white;margin-top:5%;width:fit-content;padding-right:20px;padding-left:25px;padding:16px;margin-right:auto;border-radius:16px;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css(".er-popup-window-background",".er-popup-window-background{position:fixed;left:0px;top:0px;width:100%;height:100%;background-color:black;opacity:0.7;z-index:-1;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css(".er-modal-info-container-div > .er-modal-info-text-wrapper",".er-modal-info-container-div > .er-modal-info-text-wrapper{display:none;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css(".er-x-out:focus",".er-x-out:focus{color:green;text-decoration:none;cursor:pointer;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css("v-box","v-box{display:flex;flex-direction:column;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css(".er-modal-info-container-div:hover > .er-modal-info-text-wrapper",".er-modal-info-container-div:hover > .er-modal-info-text-wrapper{display:block;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css(".er-x-out:hover",".er-x-out:hover{color:green;text-decoration:none;cursor:pointer;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css("h-box","h-box{display:flex;flex-direction:row;}",cljs.core.PersistentVector.EMPTY);
easyreagent.components.text_field = (function easyreagent$components$text_field(var_args){
var G__23580 = arguments.length;
switch (G__23580) {
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
return cljs.core.reset_BANG_(curr_value_atom,val.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),event.keyCode)) && ((!((new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(attr_map) == null)))))){
var fexpr__23585_23706 = new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(attr_map);
(fexpr__23585_23706.cljs$core$IFn$_invoke$arity$0 ? fexpr__23585_23706.cljs$core$IFn$_invoke$arity$0() : fexpr__23585_23706.call(null, ));

return event.preventDefault();
} else {
return null;
}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(curr_value_atom),new cljs.core.Keyword(null,"class","class",-2030961996),"input input-bordered w-full focus:outline-none focus:border-current"], null)], null);
}));

(easyreagent.components.text_field.cljs$core$IFn$_invoke$arity$2 = (function (attr_map,curr_value_atom){
var G__23576 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(attr_map);
var result__23560__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
return cljs.core.reset_BANG_(curr_value_atom,val.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),event.keyCode)) && ((!((new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23576)) == null)))))){
var fexpr__23588_23707 = new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23576));
(fexpr__23588_23707.cljs$core$IFn$_invoke$arity$0 ? fexpr__23588_23707.cljs$core$IFn$_invoke$arity$0() : fexpr__23588_23707.call(null, ));

return event.preventDefault();
} else {
return null;
}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(curr_value_atom),new cljs.core.Keyword(null,"class","class",-2030961996),"input input-bordered w-full focus:outline-none focus:border-current"], null)], null);
if((!(cljs.core.fn_QMARK_(result__23560__auto__)))){
return easyreagent.create_component.with_attr_map(attr_map,result__23560__auto__);
} else {
return (function (attr_map__$1,curr_value_atom__$1){
cljs.core.reset_BANG_(G__23576,attr_map__$1);

return easyreagent.create_component.with_attr_map(attr_map__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(result__23560__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_value_atom__$1], null)));
});
}
}));

(easyreagent.components.text_field.cljs$lang$maxFixedArity = 2);

easyreagent.components.text_area = (function easyreagent$components$text_area(var_args){
var G__23592 = arguments.length;
switch (G__23592) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.reset_BANG_(curr_value_atom,val.target.value);

if((!((new cljs.core.Keyword(null,"additional-on-change","additional-on-change",228616361).cljs$core$IFn$_invoke$arity$1(attr_map) == null)))){
var fexpr__23593 = new cljs.core.Keyword(null,"additional-on-change","additional-on-change",228616361).cljs$core$IFn$_invoke$arity$1(attr_map);
return (fexpr__23593.cljs$core$IFn$_invoke$arity$0 ? fexpr__23593.cljs$core$IFn$_invoke$arity$0() : fexpr__23593.call(null, ));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),event.keyCode)) && ((!((new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(attr_map) == null)))))){
var fexpr__23595_23709 = new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(attr_map);
(fexpr__23595_23709.cljs$core$IFn$_invoke$arity$0 ? fexpr__23595_23709.cljs$core$IFn$_invoke$arity$0() : fexpr__23595_23709.call(null, ));

return event.preventDefault();
} else {
return null;
}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(curr_value_atom),new cljs.core.Keyword(null,"class","class",-2030961996),"input input-xs input-bordered w-full"], null)], null);
}));

(easyreagent.components.text_area.cljs$core$IFn$_invoke$arity$2 = (function (attr_map,curr_value_atom){
var G__23590 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(attr_map);
var result__23560__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
cljs.core.reset_BANG_(curr_value_atom,val.target.value);

if((!((new cljs.core.Keyword(null,"additional-on-change","additional-on-change",228616361).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23590)) == null)))){
var fexpr__23597 = new cljs.core.Keyword(null,"additional-on-change","additional-on-change",228616361).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23590));
return (fexpr__23597.cljs$core$IFn$_invoke$arity$0 ? fexpr__23597.cljs$core$IFn$_invoke$arity$0() : fexpr__23597.call(null, ));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),event.keyCode)) && ((!((new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23590)) == null)))))){
var fexpr__23599_23710 = new cljs.core.Keyword(null,"on-enter","on-enter",-928988216).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23590));
(fexpr__23599_23710.cljs$core$IFn$_invoke$arity$0 ? fexpr__23599_23710.cljs$core$IFn$_invoke$arity$0() : fexpr__23599_23710.call(null, ));

return event.preventDefault();
} else {
return null;
}
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(curr_value_atom),new cljs.core.Keyword(null,"class","class",-2030961996),"input input-xs input-bordered w-full"], null)], null);
if((!(cljs.core.fn_QMARK_(result__23560__auto__)))){
return easyreagent.create_component.with_attr_map(attr_map,result__23560__auto__);
} else {
return (function (attr_map__$1,curr_value_atom__$1){
cljs.core.reset_BANG_(G__23590,attr_map__$1);

return easyreagent.create_component.with_attr_map(attr_map__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(result__23560__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_value_atom__$1], null)));
});
}
}));

(easyreagent.components.text_area.cljs$lang$maxFixedArity = 2);

easyreagent.components.checkbox = (function easyreagent$components$checkbox(var_args){
var G__23606 = arguments.length;
switch (G__23606) {
case 1:
return easyreagent.components.checkbox.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return easyreagent.components.checkbox.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(easyreagent.components.checkbox.cljs$core$IFn$_invoke$arity$1 = (function (is_checked_atom){
var attr_map = null;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(is_checked_atom),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(is_checked_atom,cljs.core.not);
})], null)], null);
}));

(easyreagent.components.checkbox.cljs$core$IFn$_invoke$arity$2 = (function (attr_map,is_checked_atom){
var G__23604 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(attr_map);
var result__23560__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(is_checked_atom),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(is_checked_atom,cljs.core.not);
})], null)], null);
if((!(cljs.core.fn_QMARK_(result__23560__auto__)))){
return easyreagent.create_component.with_attr_map(attr_map,result__23560__auto__);
} else {
return (function (attr_map__$1,is_checked_atom__$1){
cljs.core.reset_BANG_(G__23604,attr_map__$1);

return easyreagent.create_component.with_attr_map(attr_map__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(result__23560__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [is_checked_atom__$1], null)));
});
}
}));

(easyreagent.components.checkbox.cljs$lang$maxFixedArity = 2);

easyreagent.components.slider = (function easyreagent$components$slider(var_args){
var G__23610 = arguments.length;
switch (G__23610) {
case 3:
return easyreagent.components.slider.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return easyreagent.components.slider.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(easyreagent.components.slider.cljs$core$IFn$_invoke$arity$3 = (function (current_value_atom,min,max){
var attr_map = null;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(current_value_atom),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(3)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
return cljs.core.reset_BANG_(current_value_atom,val.target.value);
})], null)], null);
}));

(easyreagent.components.slider.cljs$core$IFn$_invoke$arity$4 = (function (attr_map,current_value_atom,min,max){
var G__23607 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(attr_map);
var result__23560__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(current_value_atom),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(3)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
return cljs.core.reset_BANG_(current_value_atom,val.target.value);
})], null)], null);
if((!(cljs.core.fn_QMARK_(result__23560__auto__)))){
return easyreagent.create_component.with_attr_map(attr_map,result__23560__auto__);
} else {
return (function (attr_map__$1,current_value_atom__$1,min__$1,max__$1){
cljs.core.reset_BANG_(G__23607,attr_map__$1);

return easyreagent.create_component.with_attr_map(attr_map__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(result__23560__auto__,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_value_atom__$1,min__$1,max__$1], null)));
});
}
}));

(easyreagent.components.slider.cljs$lang$maxFixedArity = 4);

easyreagent.components.get_date_str = (function easyreagent$components$get_date_str(time_millis){
var seconds = cljs.core.quot(time_millis,(1000));
var minutes = cljs.core.quot(seconds,(60));
var hours = cljs.core.quot(minutes,(60));
var days = cljs.core.quot(hours,(24));
if((days > (0))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(days)," days"].join('');
} else {
return [(((hours > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%2d",hours)),":"].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%02d",cljs.core.mod(minutes,(60)))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%02d",cljs.core.mod(seconds,(60))))].join('');
}
});
easyreagent.components.reset_timer_and_check_end = (function easyreagent$components$reset_timer_and_check_end(curr_time,end_time,time_ended,attr_map){
if(cljs.core.truth_(cljs.core.deref(time_ended))){
return cljs.core.reset_BANG_(curr_time,end_time);
} else {
if((cljs.core.deref(curr_time) > end_time)){
cljs.core.reset_BANG_(time_ended,true);

if((!((new cljs.core.Keyword(null,"on-ended","on-ended",428118347).cljs$core$IFn$_invoke$arity$1(attr_map) == null)))){
var fexpr__23614 = new cljs.core.Keyword(null,"on-ended","on-ended",428118347).cljs$core$IFn$_invoke$arity$1(attr_map);
return (fexpr__23614.cljs$core$IFn$_invoke$arity$0 ? fexpr__23614.cljs$core$IFn$_invoke$arity$0() : fexpr__23614.call(null, ));
} else {
return null;
}
} else {
return cljs.core.reset_BANG_(curr_time,Date.now());
}
}
});
easyreagent.components.timer = (function easyreagent$components$timer(var_args){
var G__23617 = arguments.length;
switch (G__23617) {
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
var curr_time = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(Date.now());
var time_ended = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
setInterval((function (){
return easyreagent.components.reset_timer_and_check_end(curr_time,end_time,time_ended,attr_map);
}),(100));

return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),easyreagent.components.get_date_str((end_time - cljs.core.deref(curr_time)))], null);
});
}));

(easyreagent.components.timer.cljs$core$IFn$_invoke$arity$2 = (function (attr_map,end_time){
var G__23615 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(attr_map);
var result__23560__auto__ = (function (){var curr_time = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(Date.now());
var time_ended = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
setInterval((function (){
return easyreagent.components.reset_timer_and_check_end(curr_time,end_time,time_ended,cljs.core.deref(G__23615));
}),(100));

return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),easyreagent.components.get_date_str((end_time - cljs.core.deref(curr_time)))], null);
});
})();
if((!(cljs.core.fn_QMARK_(result__23560__auto__)))){
return easyreagent.create_component.with_attr_map(attr_map,result__23560__auto__);
} else {
return (function (attr_map__$1,end_time__$1){
cljs.core.reset_BANG_(G__23615,attr_map__$1);

return easyreagent.create_component.with_attr_map(attr_map__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(result__23560__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end_time__$1], null)));
});
}
}));

(easyreagent.components.timer.cljs$lang$maxFixedArity = 2);

easyreagent.components.pausable_timer = (function easyreagent$components$pausable_timer(var_args){
var G__23623 = arguments.length;
switch (G__23623) {
case 1:
return easyreagent.components.pausable_timer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return easyreagent.components.pausable_timer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(easyreagent.components.pausable_timer.cljs$core$IFn$_invoke$arity$1 = (function (secs_left){
var attr_map = null;
var start_time = Date.now();
var time_ended = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
setInterval((function (){
if((((cljs.core.deref(secs_left) > (0))) && (cljs.core.not((function (){var and__5041__auto____$1 = new cljs.core.Keyword(null,"is-timer-paused","is-timer-paused",-2007418263).cljs$core$IFn$_invoke$arity$1(attr_map);
if(cljs.core.truth_(and__5041__auto____$1)){
var fexpr__23624 = new cljs.core.Keyword(null,"is-timer-paused","is-timer-paused",-2007418263).cljs$core$IFn$_invoke$arity$1(attr_map);
return (fexpr__23624.cljs$core$IFn$_invoke$arity$0 ? fexpr__23624.cljs$core$IFn$_invoke$arity$0() : fexpr__23624.call(null, ));
} else {
return and__5041__auto____$1;
}
})())))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secs_left,cljs.core.dec);
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(secs_left),(0))) && (((cljs.core.not(cljs.core.deref(time_ended))) && ((!((new cljs.core.Keyword(null,"on-ended","on-ended",428118347).cljs$core$IFn$_invoke$arity$1(attr_map) == null)))))))){
var fexpr__23626_23733 = new cljs.core.Keyword(null,"on-ended","on-ended",428118347).cljs$core$IFn$_invoke$arity$1(attr_map);
(fexpr__23626_23733.cljs$core$IFn$_invoke$arity$0 ? fexpr__23626_23733.cljs$core$IFn$_invoke$arity$0() : fexpr__23626_23733.call(null, ));

return cljs.core.reset_BANG_(time_ended,true);
} else {
return null;
}
}),(1000));

return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),easyreagent.components.get_date_str(((1000) * cljs.core.deref(secs_left)))], null);
});
}));

(easyreagent.components.pausable_timer.cljs$core$IFn$_invoke$arity$2 = (function (attr_map,secs_left){
var G__23621 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(attr_map);
var result__23560__auto__ = (function (){var start_time = Date.now();
var time_ended = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
setInterval((function (){
if((((cljs.core.deref(secs_left) > (0))) && (cljs.core.not((function (){var and__5041__auto____$1 = new cljs.core.Keyword(null,"is-timer-paused","is-timer-paused",-2007418263).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23621));
if(cljs.core.truth_(and__5041__auto____$1)){
var fexpr__23627 = new cljs.core.Keyword(null,"is-timer-paused","is-timer-paused",-2007418263).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23621));
return (fexpr__23627.cljs$core$IFn$_invoke$arity$0 ? fexpr__23627.cljs$core$IFn$_invoke$arity$0() : fexpr__23627.call(null, ));
} else {
return and__5041__auto____$1;
}
})())))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secs_left,cljs.core.dec);
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(secs_left),(0))) && (((cljs.core.not(cljs.core.deref(time_ended))) && ((!((new cljs.core.Keyword(null,"on-ended","on-ended",428118347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23621)) == null)))))))){
var fexpr__23628_23734 = new cljs.core.Keyword(null,"on-ended","on-ended",428118347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23621));
(fexpr__23628_23734.cljs$core$IFn$_invoke$arity$0 ? fexpr__23628_23734.cljs$core$IFn$_invoke$arity$0() : fexpr__23628_23734.call(null, ));

return cljs.core.reset_BANG_(time_ended,true);
} else {
return null;
}
}),(1000));

return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),easyreagent.components.get_date_str(((1000) * cljs.core.deref(secs_left)))], null);
});
})();
if((!(cljs.core.fn_QMARK_(result__23560__auto__)))){
return easyreagent.create_component.with_attr_map(attr_map,result__23560__auto__);
} else {
return (function (attr_map__$1,secs_left__$1){
cljs.core.reset_BANG_(G__23621,attr_map__$1);

return easyreagent.create_component.with_attr_map(attr_map__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(result__23560__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secs_left__$1], null)));
});
}
}));

(easyreagent.components.pausable_timer.cljs$lang$maxFixedArity = 2);

easyreagent.components.popup_window = (function easyreagent$components$popup_window(var_args){
var args__5772__auto__ = [];
var len__5766__auto___23735 = arguments.length;
var i__5767__auto___23736 = (0);
while(true){
if((i__5767__auto___23736 < len__5766__auto___23735)){
args__5772__auto__.push((arguments[i__5767__auto___23736]));

var G__23737 = (i__5767__auto___23736 + (1));
i__5767__auto___23736 = G__23737;
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
var G__23738__delegate = function (options__$1,is_shown__$1,body__$1){
if(cljs.core.truth_(cljs.core.deref(is_shown__$1))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"er-popup-window-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"er-popup-window-background",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(is_shown__$1,false);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),easyreagent.create_component.merge_attrs(options__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"er-popup-window min-w-64 min-h-20"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1rem",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"left","left",-399115937),"0.6rem",new cljs.core.Keyword(null,"top","top",-1856271961),"0.4rem"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"er-x-out",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(is_shown__$1,false);
})], null),goog.string.unescapeEntities("&times;")], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),body__$1))], null)], null);
} else {
return null;
}
};
var G__23738 = function (options__$1,is_shown__$1,var_args){
var body__$1 = null;
if (arguments.length > 2) {
var G__23739__i = 0, G__23739__a = new Array(arguments.length -  2);
while (G__23739__i < G__23739__a.length) {G__23739__a[G__23739__i] = arguments[G__23739__i + 2]; ++G__23739__i;}
  body__$1 = new cljs.core.IndexedSeq(G__23739__a,0,null);
} 
return G__23738__delegate.call(this,options__$1,is_shown__$1,body__$1);};
G__23738.cljs$lang$maxFixedArity = 2;
G__23738.cljs$lang$applyTo = (function (arglist__23740){
var options__$1 = cljs.core.first(arglist__23740);
arglist__23740 = cljs.core.next(arglist__23740);
var is_shown__$1 = cljs.core.first(arglist__23740);
var body__$1 = cljs.core.rest(arglist__23740);
return G__23738__delegate(options__$1,is_shown__$1,body__$1);
});
G__23738.cljs$core$IFn$_invoke$arity$variadic = G__23738__delegate;
return G__23738;
})()
;
}));

(easyreagent.components.popup_window.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(easyreagent.components.popup_window.cljs$lang$applyTo = (function (seq23630){
var G__23631 = cljs.core.first(seq23630);
var seq23630__$1 = cljs.core.next(seq23630);
var G__23632 = cljs.core.first(seq23630__$1);
var seq23630__$2 = cljs.core.next(seq23630__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23631,G__23632,seq23630__$2);
}));

easyreagent.components.create_popup = (function easyreagent$components$create_popup(var_args){
var G__23641 = arguments.length;
switch (G__23641) {
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
return easyreagent.components.create_popup.cljs$core$IFn$_invoke$arity$3(null,is_shown,content);
}));

(easyreagent.components.create_popup.cljs$core$IFn$_invoke$arity$3 = (function (options,is_shown,content){
return easyreagent.components.add_component_to_global_state(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.components.popup_window,options,is_shown,content], null));
}));

(easyreagent.components.create_popup.cljs$lang$maxFixedArity = 3);

easyreagent.components.submit_button = (function easyreagent$components$submit_button(var_args){
var G__23643 = arguments.length;
switch (G__23643) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-box.w-full.justify-end.er-submit-button-container.mt-4","h-box.w-full.justify-end.er-submit-button-container.mt-4",914032107),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),options,content], null)], null);
}));

(easyreagent.components.submit_button.cljs$lang$maxFixedArity = 2);

easyreagent.components.confirm_action_popup = (function easyreagent$components$confirm_action_popup(var_args){
var args__5772__auto__ = [];
var len__5766__auto___23743 = arguments.length;
var i__5767__auto___23744 = (0);
while(true){
if((i__5767__auto___23744 < len__5766__auto___23743)){
args__5772__auto__.push((arguments[i__5767__auto___23744]));

var G__23745 = (i__5767__auto___23744 + (1));
i__5767__auto___23744 = G__23745;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return easyreagent.components.confirm_action_popup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(easyreagent.components.confirm_action_popup.cljs$core$IFn$_invoke$arity$variadic = (function (text,callback,p__23649){
var map__23650 = p__23649;
var map__23650__$1 = cljs.core.__destructure_map(map__23650);
var show_loading = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23650__$1,new cljs.core.Keyword(null,"show-loading","show-loading",163267390),false);
var with_let23651 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let23651","with-let23651",-2001104061));
var temp__5827__auto___23746 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5827__auto___23746 == null)){
} else {
var c__20050__auto___23747 = temp__5827__auto___23746;
if((with_let23651.generation === c__20050__auto___23747.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let23651.generation = c__20050__auto___23747.ratomGeneration);
}

var init23652 = (with_let23651.length === (0));
var callback_shown = ((((init23652) || (cljs.core.not(with_let23651.hasOwnProperty((0))))))?(with_let23651[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true)):(with_let23651[(0)]));
var is_loading = ((((init23652) || (cljs.core.not(with_let23651.hasOwnProperty((1))))))?(with_let23651[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let23651[(1)]));
var res23653 = easyreagent.components.create_popup.cljs$core$IFn$_invoke$arity$2(callback_shown,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box.p-2.px-4","v-box.p-2.px-4",-92371918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-box.w-full.justify-between.er-submit-button-container.mt-4","h-box.w-full.justify-between.er-submit-button-container.mt-4",-1093861155),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(callback_shown,cljs.core.not);
})], null),"No"], null),(cljs.core.truth_(cljs.core.deref(is_loading))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"loading..."], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(show_loading)){
cljs.core.reset_BANG_(is_loading,true);

return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(callback_shown) : callback.call(null, callback_shown));
} else {
(callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(callback_shown,cljs.core.not);
}
})], null),"Yes"], null))], null)], null));
return res23653;
}));

(easyreagent.components.confirm_action_popup.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(easyreagent.components.confirm_action_popup.cljs$lang$applyTo = (function (seq23646){
var G__23647 = cljs.core.first(seq23646);
var seq23646__$1 = cljs.core.next(seq23646);
var G__23648 = cljs.core.first(seq23646__$1);
var seq23646__$2 = cljs.core.next(seq23646__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23647,G__23648,seq23646__$2);
}));

easyreagent.components.create_alert = (function easyreagent$components$create_alert(var_args){
var G__23655 = arguments.length;
switch (G__23655) {
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
return easyreagent.components.create_alert.cljs$core$IFn$_invoke$arity$2(null,content);
}));

(easyreagent.components.create_alert.cljs$core$IFn$_invoke$arity$2 = (function (options,content){
var is_shown = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return easyreagent.components.create_popup.cljs$core$IFn$_invoke$arity$3(options,is_shown,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box.er-alert-popup-container.min-w-64.pl-2","v-box.er-alert-popup-container.min-w-64.pl-2",939333687),content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.components.submit_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(is_shown,false);
})], null),"Got It"], null)], null));
}));

(easyreagent.components.create_alert.cljs$lang$maxFixedArity = 2);

easyreagent.components.rand_id = (function easyreagent$components$rand_id(){
return ["id-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(((1000000) * Math.random()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(((1000000) * Math.random())))].join('');
});
easyreagent.components.modal_info_view_width = (500);
easyreagent.components.with_modal_info = (function easyreagent$components$with_modal_info(var_args){
var G__23658 = arguments.length;
switch (G__23658) {
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
var is_shown = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"is-shown","is-shown",-1781593754).cljs$core$IFn$_invoke$arity$1(attr_map);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var y_offset = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"y-offset","y-offset",-1716542).cljs$core$IFn$_invoke$arity$1(attr_map);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var x_offset = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"x-offset","x-offset",-1499732449).cljs$core$IFn$_invoke$arity$1(attr_map);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var curr_id = easyreagent.components.rand_id();
var curr_pos_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var curr_pos_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var bounding_rect = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (description__$1,content__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.er-modal-info-container-div","div.er-modal-info-container-div",1962436396),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),curr_id,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (e){
console.log(curr_id);

if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.getElementById(curr_id).getBoundingClientRect().left,cljs.core.deref(curr_pos_x))))){
cljs.core.reset_BANG_(curr_pos_x,document.getElementById(curr_id).getBoundingClientRect().left);
} else {
}

if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.getElementById(curr_id).getBoundingClientRect(),cljs.core.deref(bounding_rect))))){
cljs.core.reset_BANG_(bounding_rect,document.getElementById(curr_id).getBoundingClientRect());
} else {
}

if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.getElementById(curr_id).getBoundingClientRect().top,cljs.core.deref(curr_pos_y))))){
cljs.core.reset_BANG_(curr_pos_y,document.getElementById(curr_id).getBoundingClientRect().top);
} else {
}

if(((cljs.core.not(cljs.core.deref(is_shown))) && (cljs.core.not(new cljs.core.Keyword(null,"is-shown","is-shown",-1781593754).cljs$core$IFn$_invoke$arity$1(attr_map))))){
return cljs.core.reset_BANG_(is_shown,true);
} else {
return null;
}
})], null),content__$1,(cljs.core.truth_(cljs.core.deref(is_shown))?(function (){var position_map = (function (){var G__23671 = new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665).cljs$core$IFn$_invoke$arity$1(attr_map);
var G__23671__$1 = (((G__23671 instanceof cljs.core.Keyword))?G__23671.fqn:null);
switch (G__23671__$1) {
case "right":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(curr_pos_y),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref(bounding_rect).right], null);

break;
case "bottom":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(bounding_rect).bottom,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref(bounding_rect).left], null);

break;
case "top":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(curr_pos_y),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref(bounding_rect).left], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(curr_pos_y),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref(curr_pos_x)], null);

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.er-modal-info-text-wrapper","div.er-modal-info-text-wrapper",-924881075),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(10)], null),position_map], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__23683 = new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665).cljs$core$IFn$_invoke$arity$1(attr_map);
var G__23683__$1 = (((G__23683 instanceof cljs.core.Keyword))?G__23683.fqn:null);
switch (G__23683__$1) {
case "right":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),x_offset,new cljs.core.Keyword(null,"top","top",-1856271961),y_offset], null);

break;
case "bottom":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),x_offset,new cljs.core.Keyword(null,"top","top",-1856271961),y_offset], null);

break;
case "top":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),x_offset,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(- y_offset)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(- x_offset),new cljs.core.Keyword(null,"top","top",-1856271961),y_offset], null);

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.er-modal-info-text.text-base-content.bg-base-100.border-base-content.border-solid.border-2","div.er-modal-info-text.text-base-content.bg-base-100.border-base-content.border-solid.border-2",-61157337),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"fit-content",new cljs.core.Keyword(null,"height","height",1025178622),"fit-content"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),description__$1], null)], null)], null)], null);
})():null)], null);
});
}));

(easyreagent.components.with_modal_info.cljs$core$IFn$_invoke$arity$3 = (function (attr_map,description,content){
var G__23656 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(attr_map);
var result__23560__auto__ = (function (){var is_shown = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"is-shown","is-shown",-1781593754).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23656));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
})();
var y_offset = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"y-offset","y-offset",-1716542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23656));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var x_offset = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"x-offset","x-offset",-1499732449).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23656));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var curr_id = easyreagent.components.rand_id();
var curr_pos_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var curr_pos_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var bounding_rect = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (description__$1,content__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.er-modal-info-container-div","div.er-modal-info-container-div",1962436396),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),curr_id,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (e){
console.log(curr_id);

if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.getElementById(curr_id).getBoundingClientRect().left,cljs.core.deref(curr_pos_x))))){
cljs.core.reset_BANG_(curr_pos_x,document.getElementById(curr_id).getBoundingClientRect().left);
} else {
}

if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.getElementById(curr_id).getBoundingClientRect(),cljs.core.deref(bounding_rect))))){
cljs.core.reset_BANG_(bounding_rect,document.getElementById(curr_id).getBoundingClientRect());
} else {
}

if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.getElementById(curr_id).getBoundingClientRect().top,cljs.core.deref(curr_pos_y))))){
cljs.core.reset_BANG_(curr_pos_y,document.getElementById(curr_id).getBoundingClientRect().top);
} else {
}

if(((cljs.core.not(cljs.core.deref(is_shown))) && (cljs.core.not(new cljs.core.Keyword(null,"is-shown","is-shown",-1781593754).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23656)))))){
return cljs.core.reset_BANG_(is_shown,true);
} else {
return null;
}
})], null),content__$1,(cljs.core.truth_(cljs.core.deref(is_shown))?(function (){var position_map = (function (){var G__23688 = new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23656));
var G__23688__$1 = (((G__23688 instanceof cljs.core.Keyword))?G__23688.fqn:null);
switch (G__23688__$1) {
case "right":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(curr_pos_y),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref(bounding_rect).right], null);

break;
case "bottom":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(bounding_rect).bottom,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref(bounding_rect).left], null);

break;
case "top":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(curr_pos_y),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref(bounding_rect).left], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(curr_pos_y),new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.deref(curr_pos_x)], null);

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.er-modal-info-text-wrapper","div.er-modal-info-text-wrapper",-924881075),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(10)], null),position_map], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__23689 = new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(G__23656));
var G__23689__$1 = (((G__23689 instanceof cljs.core.Keyword))?G__23689.fqn:null);
switch (G__23689__$1) {
case "right":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),x_offset,new cljs.core.Keyword(null,"top","top",-1856271961),y_offset], null);

break;
case "bottom":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),x_offset,new cljs.core.Keyword(null,"top","top",-1856271961),y_offset], null);

break;
case "top":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),x_offset,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(- y_offset)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(- x_offset),new cljs.core.Keyword(null,"top","top",-1856271961),y_offset], null);

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.er-modal-info-text.text-base-content.bg-base-100.border-base-content.border-solid.border-2","div.er-modal-info-text.text-base-content.bg-base-100.border-base-content.border-solid.border-2",-61157337),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"fit-content",new cljs.core.Keyword(null,"height","height",1025178622),"fit-content"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),description__$1], null)], null)], null)], null);
})():null)], null);
});
})();
if((!(cljs.core.fn_QMARK_(result__23560__auto__)))){
return easyreagent.create_component.with_attr_map(attr_map,result__23560__auto__);
} else {
return (function (attr_map__$1,description__$1,content__$1){
cljs.core.reset_BANG_(G__23656,attr_map__$1);

return easyreagent.create_component.with_attr_map(attr_map__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(result__23560__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [description__$1,content__$1], null)));
});
}
}));

(easyreagent.components.with_modal_info.cljs$lang$maxFixedArity = 3);

easyreagent.components.heroed_content = (function easyreagent$components$heroed_content(var_args){
var args__5772__auto__ = [];
var len__5766__auto___23754 = arguments.length;
var i__5767__auto___23755 = (0);
while(true){
if((i__5767__auto___23755 < len__5766__auto___23754)){
args__5772__auto__.push((arguments[i__5767__auto___23755]));

var G__23756 = (i__5767__auto___23755 + (1));
i__5767__auto___23755 = G__23756;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return easyreagent.components.heroed_content.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(easyreagent.components.heroed_content.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
var attr_map = ((cljs.core.map_QMARK_(cljs.core.first(contents)))?cljs.core.first(contents):null);
var contents__$1 = ((cljs.core.map_QMARK_(cljs.core.first(contents)))?cljs.core.rest(contents):contents);
return easyreagent.create_component.with_attr_map(attr_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero","div.hero",116748844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"48vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-content","div.hero-content",1708749333),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),contents__$1))], null)], null));
}));

(easyreagent.components.heroed_content.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(easyreagent.components.heroed_content.cljs$lang$applyTo = (function (seq23690){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23690));
}));

easyreagent.components.phone_input_us = (function easyreagent$components$phone_input_us(var_args){
var G__23693 = arguments.length;
switch (G__23693) {
case 1:
return easyreagent.components.phone_input_us.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return easyreagent.components.phone_input_us.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(easyreagent.components.phone_input_us.cljs$core$IFn$_invoke$arity$1 = (function (phone_number_atom){
var attr_map = null;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$react_phone_number_input$default),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"e.g. 321 456 7890",new cljs.core.Keyword(null,"class","class",-2030961996),"input input-bordered input-sm w-full phone-input",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(phone_number_atom),new cljs.core.Keyword(null,"defaultCountry","defaultCountry",944120324),"US",new cljs.core.Keyword(null,"addInternationalOption","addInternationalOption",-923939129),false,new cljs.core.Keyword(null,"countries","countries",863192750),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["US"], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (val){
return cljs.core.reset_BANG_(phone_number_atom,val);
})], null)], null);
}));

(easyreagent.components.phone_input_us.cljs$core$IFn$_invoke$arity$2 = (function (attr_map,phone_number_atom){
var G__23691 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(attr_map);
var result__23560__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$react_phone_number_input$default),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"e.g. 321 456 7890",new cljs.core.Keyword(null,"class","class",-2030961996),"input input-bordered input-sm w-full phone-input",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(phone_number_atom),new cljs.core.Keyword(null,"defaultCountry","defaultCountry",944120324),"US",new cljs.core.Keyword(null,"addInternationalOption","addInternationalOption",-923939129),false,new cljs.core.Keyword(null,"countries","countries",863192750),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["US"], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (val){
return cljs.core.reset_BANG_(phone_number_atom,val);
})], null)], null);
if((!(cljs.core.fn_QMARK_(result__23560__auto__)))){
return easyreagent.create_component.with_attr_map(attr_map,result__23560__auto__);
} else {
return (function (attr_map__$1,phone_number_atom__$1){
cljs.core.reset_BANG_(G__23691,attr_map__$1);

return easyreagent.create_component.with_attr_map(attr_map__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(result__23560__auto__,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phone_number_atom__$1], null)));
});
}
}));

(easyreagent.components.phone_input_us.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=easyreagent.components.js.map
