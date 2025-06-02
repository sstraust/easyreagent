goog.provide('easyreagent.util');
easyreagent.util.curr_css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.util.reload_stylesheets = (function easyreagent$util$reload_stylesheets(){
var c__35291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35292__auto__ = (function (){var switch__35091__auto__ = (function (state_37562){
var state_val_37563 = (state_37562[(1)]);
if((state_val_37563 === (1))){
var inst_37538 = cljs.core.rand_int((1000000));
var inst_37539 = ["resources/global_output.css?v=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37538)].join('');
var inst_37540 = cljs_http.client.get(inst_37539);
var state_37562__$1 = state_37562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37562__$1,(2),inst_37540);
} else {
if((state_val_37563 === (2))){
var inst_37543 = (state_37562[(7)]);
var inst_37542 = (state_37562[(2)]);
var inst_37543__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37542);
var inst_37550 = cljs.core.deref(easyreagent.util.curr_css);
var inst_37553 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37550,inst_37543__$1);
var inst_37554 = (!(inst_37553));
var state_37562__$1 = (function (){var statearr_37564 = state_37562;
(statearr_37564[(7)] = inst_37543__$1);

return statearr_37564;
})();
if(inst_37554){
var statearr_37565_37591 = state_37562__$1;
(statearr_37565_37591[(1)] = (3));

} else {
var statearr_37566_37592 = state_37562__$1;
(statearr_37566_37592[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (3))){
var inst_37556 = reloadStylesheets();
var state_37562__$1 = state_37562;
var statearr_37567_37593 = state_37562__$1;
(statearr_37567_37593[(2)] = inst_37556);

(statearr_37567_37593[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (4))){
var state_37562__$1 = state_37562;
var statearr_37568_37594 = state_37562__$1;
(statearr_37568_37594[(2)] = null);

(statearr_37568_37594[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (5))){
var inst_37543 = (state_37562[(7)]);
var inst_37559 = (state_37562[(2)]);
var inst_37560 = cljs.core.reset_BANG_(easyreagent.util.curr_css,inst_37543);
var state_37562__$1 = (function (){var statearr_37569 = state_37562;
(statearr_37569[(8)] = inst_37559);

return statearr_37569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37562__$1,inst_37560);
} else {
return null;
}
}
}
}
}
});
return (function() {
var easyreagent$util$reload_stylesheets_$_state_machine__35092__auto__ = null;
var easyreagent$util$reload_stylesheets_$_state_machine__35092__auto____0 = (function (){
var statearr_37570 = [null,null,null,null,null,null,null,null,null];
(statearr_37570[(0)] = easyreagent$util$reload_stylesheets_$_state_machine__35092__auto__);

(statearr_37570[(1)] = (1));

return statearr_37570;
});
var easyreagent$util$reload_stylesheets_$_state_machine__35092__auto____1 = (function (state_37562){
while(true){
var ret_value__35093__auto__ = (function (){try{while(true){
var result__35094__auto__ = switch__35091__auto__(state_37562);
if(cljs.core.keyword_identical_QMARK_(result__35094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35094__auto__;
}
break;
}
}catch (e37571){var ex__35095__auto__ = e37571;
var statearr_37572_37595 = state_37562;
(statearr_37572_37595[(2)] = ex__35095__auto__);


if(cljs.core.seq((state_37562[(4)]))){
var statearr_37573_37596 = state_37562;
(statearr_37573_37596[(1)] = cljs.core.first((state_37562[(4)])));

} else {
throw ex__35095__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37597 = state_37562;
state_37562 = G__37597;
continue;
} else {
return ret_value__35093__auto__;
}
break;
}
});
easyreagent$util$reload_stylesheets_$_state_machine__35092__auto__ = function(state_37562){
switch(arguments.length){
case 0:
return easyreagent$util$reload_stylesheets_$_state_machine__35092__auto____0.call(this);
case 1:
return easyreagent$util$reload_stylesheets_$_state_machine__35092__auto____1.call(this,state_37562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$util$reload_stylesheets_$_state_machine__35092__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$util$reload_stylesheets_$_state_machine__35092__auto____0;
easyreagent$util$reload_stylesheets_$_state_machine__35092__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$util$reload_stylesheets_$_state_machine__35092__auto____1;
return easyreagent$util$reload_stylesheets_$_state_machine__35092__auto__;
})()
})();
var state__35293__auto__ = (function (){var statearr_37574 = f__35292__auto__();
(statearr_37574[(6)] = c__35291__auto__);

return statearr_37574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35293__auto__);
}));

return c__35291__auto__;
});
easyreagent.util.reload_css = (function easyreagent$util$reload_css(){
return setInterval((function (){
return easyreagent.util.reload_stylesheets();
}),(500));
});
easyreagent.util.dev_reload_css = (function easyreagent$util$dev_reload_css(){
return setTimeout((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"dev")){
return easyreagent.util.reload_css();
} else {
return null;
}
}),(3000));
});
easyreagent.util.load_page = (function easyreagent$util$load_page(location){
return (window.location.href = location);
});
easyreagent.util.write_json = (function easyreagent$util$write_json(clj_map){
return JSON.stringify(cljs.core.clj__GT_js(clj_map));
});
easyreagent.util.read_json_keywordize = (function easyreagent$util$read_json_keywordize(json_str){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(json_str),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});

/**
 * @interface
 */
easyreagent.util.Renderable = function(){};

var easyreagent$util$Renderable$render$dyn_37598 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (easyreagent.util.render[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null, this$));
} else {
var m__5389__auto__ = (easyreagent.util.render["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Renderable.render",this$);
}
}
});
easyreagent.util.render = (function easyreagent$util$render(this$){
if((((!((this$ == null)))) && ((!((this$.easyreagent$util$Renderable$render$arity$1 == null)))))){
return this$.easyreagent$util$Renderable$render$arity$1(this$);
} else {
return easyreagent$util$Renderable$render$dyn_37598(this$);
}
});

easyreagent.util.post_redirect = (function easyreagent$util$post_redirect(path,params){
var form = document.createElement("form");
(form.method = "POST");

(form.action = path);

(form.style = "display: none;");

var seq__37575_37599 = cljs.core.seq(params);
var chunk__37576_37600 = null;
var count__37577_37601 = (0);
var i__37578_37602 = (0);
while(true){
if((i__37578_37602 < count__37577_37601)){
var vec__37585_37603 = chunk__37576_37600.cljs$core$IIndexed$_nth$arity$2(null, i__37578_37602);
var k_37604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37585_37603,(0),null);
var v_37605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37585_37603,(1),null);
var input_37606 = document.createElement("input");
(input_37606.type = "hidden");

(input_37606.name = cljs.core.name(k_37604));

(input_37606.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37605));

form.appendChild(input_37606);


var G__37607 = seq__37575_37599;
var G__37608 = chunk__37576_37600;
var G__37609 = count__37577_37601;
var G__37610 = (i__37578_37602 + (1));
seq__37575_37599 = G__37607;
chunk__37576_37600 = G__37608;
count__37577_37601 = G__37609;
i__37578_37602 = G__37610;
continue;
} else {
var temp__5823__auto___37611 = cljs.core.seq(seq__37575_37599);
if(temp__5823__auto___37611){
var seq__37575_37612__$1 = temp__5823__auto___37611;
if(cljs.core.chunked_seq_QMARK_(seq__37575_37612__$1)){
var c__5565__auto___37613 = cljs.core.chunk_first(seq__37575_37612__$1);
var G__37614 = cljs.core.chunk_rest(seq__37575_37612__$1);
var G__37615 = c__5565__auto___37613;
var G__37616 = cljs.core.count(c__5565__auto___37613);
var G__37617 = (0);
seq__37575_37599 = G__37614;
chunk__37576_37600 = G__37615;
count__37577_37601 = G__37616;
i__37578_37602 = G__37617;
continue;
} else {
var vec__37588_37618 = cljs.core.first(seq__37575_37612__$1);
var k_37619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37588_37618,(0),null);
var v_37620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37588_37618,(1),null);
var input_37621 = document.createElement("input");
(input_37621.type = "hidden");

(input_37621.name = cljs.core.name(k_37619));

(input_37621.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_37620));

form.appendChild(input_37621);


var G__37622 = cljs.core.next(seq__37575_37612__$1);
var G__37623 = null;
var G__37624 = (0);
var G__37625 = (0);
seq__37575_37599 = G__37622;
chunk__37576_37600 = G__37623;
count__37577_37601 = G__37624;
i__37578_37602 = G__37625;
continue;
}
} else {
}
}
break;
}

document.body.appendChild(form);

return form.submit();
});

//# sourceMappingURL=easyreagent.util.js.map
