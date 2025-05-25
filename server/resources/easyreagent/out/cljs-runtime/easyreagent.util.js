goog.provide('easyreagent.util');
easyreagent.util.curr_css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.util.reload_stylesheets = (function easyreagent$util$reload_stylesheets(){
var c__27756__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27757__auto__ = (function (){var switch__27639__auto__ = (function (state_31376){
var state_val_31377 = (state_31376[(1)]);
if((state_val_31377 === (1))){
var inst_31360 = cljs.core.rand_int((1000000));
var inst_31361 = ["resources/global_output.css?v=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31360)].join('');
var inst_31362 = cljs_http.client.get(inst_31361);
var state_31376__$1 = state_31376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31376__$1,(2),inst_31362);
} else {
if((state_val_31377 === (2))){
var inst_31365 = (state_31376[(7)]);
var inst_31364 = (state_31376[(2)]);
var inst_31365__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31364);
var inst_31366 = cljs.core.deref(easyreagent.util.curr_css);
var inst_31367 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31366,inst_31365__$1);
var inst_31368 = (!(inst_31367));
var state_31376__$1 = (function (){var statearr_31378 = state_31376;
(statearr_31378[(7)] = inst_31365__$1);

return statearr_31378;
})();
if(inst_31368){
var statearr_31379_31405 = state_31376__$1;
(statearr_31379_31405[(1)] = (3));

} else {
var statearr_31380_31406 = state_31376__$1;
(statearr_31380_31406[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31377 === (3))){
var inst_31370 = reloadStylesheets();
var state_31376__$1 = state_31376;
var statearr_31381_31407 = state_31376__$1;
(statearr_31381_31407[(2)] = inst_31370);

(statearr_31381_31407[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31377 === (4))){
var state_31376__$1 = state_31376;
var statearr_31382_31408 = state_31376__$1;
(statearr_31382_31408[(2)] = null);

(statearr_31382_31408[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31377 === (5))){
var inst_31365 = (state_31376[(7)]);
var inst_31373 = (state_31376[(2)]);
var inst_31374 = cljs.core.reset_BANG_(easyreagent.util.curr_css,inst_31365);
var state_31376__$1 = (function (){var statearr_31383 = state_31376;
(statearr_31383[(8)] = inst_31373);

return statearr_31383;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31376__$1,inst_31374);
} else {
return null;
}
}
}
}
}
});
return (function() {
var easyreagent$util$reload_stylesheets_$_state_machine__27640__auto__ = null;
var easyreagent$util$reload_stylesheets_$_state_machine__27640__auto____0 = (function (){
var statearr_31384 = [null,null,null,null,null,null,null,null,null];
(statearr_31384[(0)] = easyreagent$util$reload_stylesheets_$_state_machine__27640__auto__);

(statearr_31384[(1)] = (1));

return statearr_31384;
});
var easyreagent$util$reload_stylesheets_$_state_machine__27640__auto____1 = (function (state_31376){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__(state_31376);
if(cljs.core.keyword_identical_QMARK_(result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e31385){var ex__27643__auto__ = e31385;
var statearr_31386_31410 = state_31376;
(statearr_31386_31410[(2)] = ex__27643__auto__);


if(cljs.core.seq((state_31376[(4)]))){
var statearr_31387_31411 = state_31376;
(statearr_31387_31411[(1)] = cljs.core.first((state_31376[(4)])));

} else {
throw ex__27643__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31412 = state_31376;
state_31376 = G__31412;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
easyreagent$util$reload_stylesheets_$_state_machine__27640__auto__ = function(state_31376){
switch(arguments.length){
case 0:
return easyreagent$util$reload_stylesheets_$_state_machine__27640__auto____0.call(this);
case 1:
return easyreagent$util$reload_stylesheets_$_state_machine__27640__auto____1.call(this,state_31376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$util$reload_stylesheets_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$util$reload_stylesheets_$_state_machine__27640__auto____0;
easyreagent$util$reload_stylesheets_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$util$reload_stylesheets_$_state_machine__27640__auto____1;
return easyreagent$util$reload_stylesheets_$_state_machine__27640__auto__;
})()
})();
var state__27758__auto__ = (function (){var statearr_31388 = f__27757__auto__();
(statearr_31388[(6)] = c__27756__auto__);

return statearr_31388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27758__auto__);
}));

return c__27756__auto__;
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

var easyreagent$util$Renderable$render$dyn_31424 = (function (this$){
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
return easyreagent$util$Renderable$render$dyn_31424(this$);
}
});

easyreagent.util.post_redirect = (function easyreagent$util$post_redirect(path,params){
var form = document.createElement("form");
(form.method = "POST");

(form.action = path);

(form.style = "display: none;");

var seq__31389_31444 = cljs.core.seq(params);
var chunk__31390_31445 = null;
var count__31391_31446 = (0);
var i__31392_31447 = (0);
while(true){
if((i__31392_31447 < count__31391_31446)){
var vec__31399_31448 = chunk__31390_31445.cljs$core$IIndexed$_nth$arity$2(null, i__31392_31447);
var k_31449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31399_31448,(0),null);
var v_31451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31399_31448,(1),null);
var input_31464 = document.createElement("input");
(input_31464.type = "hidden");

(input_31464.name = cljs.core.name(k_31449));

(input_31464.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_31451));

form.appendChild(input_31464);


var G__31465 = seq__31389_31444;
var G__31466 = chunk__31390_31445;
var G__31467 = count__31391_31446;
var G__31468 = (i__31392_31447 + (1));
seq__31389_31444 = G__31465;
chunk__31390_31445 = G__31466;
count__31391_31446 = G__31467;
i__31392_31447 = G__31468;
continue;
} else {
var temp__5823__auto___31469 = cljs.core.seq(seq__31389_31444);
if(temp__5823__auto___31469){
var seq__31389_31470__$1 = temp__5823__auto___31469;
if(cljs.core.chunked_seq_QMARK_(seq__31389_31470__$1)){
var c__5565__auto___31472 = cljs.core.chunk_first(seq__31389_31470__$1);
var G__31474 = cljs.core.chunk_rest(seq__31389_31470__$1);
var G__31475 = c__5565__auto___31472;
var G__31476 = cljs.core.count(c__5565__auto___31472);
var G__31477 = (0);
seq__31389_31444 = G__31474;
chunk__31390_31445 = G__31475;
count__31391_31446 = G__31476;
i__31392_31447 = G__31477;
continue;
} else {
var vec__31402_31478 = cljs.core.first(seq__31389_31470__$1);
var k_31479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31402_31478,(0),null);
var v_31480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31402_31478,(1),null);
var input_31482 = document.createElement("input");
(input_31482.type = "hidden");

(input_31482.name = cljs.core.name(k_31479));

(input_31482.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_31480));

form.appendChild(input_31482);


var G__31483 = cljs.core.next(seq__31389_31470__$1);
var G__31484 = null;
var G__31485 = (0);
var G__31486 = (0);
seq__31389_31444 = G__31483;
chunk__31390_31445 = G__31484;
count__31391_31446 = G__31485;
i__31392_31447 = G__31486;
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
