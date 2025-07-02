goog.provide('easyreagent.util');
easyreagent.util.curr_css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.util.reload_stylesheets = (function easyreagent$util$reload_stylesheets(){
var c__21496__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21497__auto__ = (function (){var switch__21451__auto__ = (function (state_23676){
var state_val_23677 = (state_23676[(1)]);
if((state_val_23677 === (1))){
var inst_23660 = cljs.core.rand_int((1000000));
var inst_23661 = ["resources/global_output.css?v=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23660)].join('');
var inst_23662 = cljs_http.client.get(inst_23661);
var state_23676__$1 = state_23676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23676__$1,(2),inst_23662);
} else {
if((state_val_23677 === (2))){
var inst_23665 = (state_23676[(7)]);
var inst_23664 = (state_23676[(2)]);
var inst_23665__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23664);
var inst_23666 = cljs.core.deref(easyreagent.util.curr_css);
var inst_23667 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23666,inst_23665__$1);
var inst_23668 = (!(inst_23667));
var state_23676__$1 = (function (){var statearr_23678 = state_23676;
(statearr_23678[(7)] = inst_23665__$1);

return statearr_23678;
})();
if(inst_23668){
var statearr_23679_23705 = state_23676__$1;
(statearr_23679_23705[(1)] = (3));

} else {
var statearr_23680_23706 = state_23676__$1;
(statearr_23680_23706[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (3))){
var inst_23670 = reloadStylesheets();
var state_23676__$1 = state_23676;
var statearr_23681_23707 = state_23676__$1;
(statearr_23681_23707[(2)] = inst_23670);

(statearr_23681_23707[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (4))){
var state_23676__$1 = state_23676;
var statearr_23682_23708 = state_23676__$1;
(statearr_23682_23708[(2)] = null);

(statearr_23682_23708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (5))){
var inst_23665 = (state_23676[(7)]);
var inst_23673 = (state_23676[(2)]);
var inst_23674 = cljs.core.reset_BANG_(easyreagent.util.curr_css,inst_23665);
var state_23676__$1 = (function (){var statearr_23683 = state_23676;
(statearr_23683[(8)] = inst_23673);

return statearr_23683;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23676__$1,inst_23674);
} else {
return null;
}
}
}
}
}
});
return (function() {
var easyreagent$util$reload_stylesheets_$_state_machine__21452__auto__ = null;
var easyreagent$util$reload_stylesheets_$_state_machine__21452__auto____0 = (function (){
var statearr_23684 = [null,null,null,null,null,null,null,null,null];
(statearr_23684[(0)] = easyreagent$util$reload_stylesheets_$_state_machine__21452__auto__);

(statearr_23684[(1)] = (1));

return statearr_23684;
});
var easyreagent$util$reload_stylesheets_$_state_machine__21452__auto____1 = (function (state_23676){
while(true){
var ret_value__21453__auto__ = (function (){try{while(true){
var result__21454__auto__ = switch__21451__auto__(state_23676);
if(cljs.core.keyword_identical_QMARK_(result__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21454__auto__;
}
break;
}
}catch (e23685){var ex__21455__auto__ = e23685;
var statearr_23686_23709 = state_23676;
(statearr_23686_23709[(2)] = ex__21455__auto__);


if(cljs.core.seq((state_23676[(4)]))){
var statearr_23687_23710 = state_23676;
(statearr_23687_23710[(1)] = cljs.core.first((state_23676[(4)])));

} else {
throw ex__21455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23711 = state_23676;
state_23676 = G__23711;
continue;
} else {
return ret_value__21453__auto__;
}
break;
}
});
easyreagent$util$reload_stylesheets_$_state_machine__21452__auto__ = function(state_23676){
switch(arguments.length){
case 0:
return easyreagent$util$reload_stylesheets_$_state_machine__21452__auto____0.call(this);
case 1:
return easyreagent$util$reload_stylesheets_$_state_machine__21452__auto____1.call(this,state_23676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$util$reload_stylesheets_$_state_machine__21452__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$util$reload_stylesheets_$_state_machine__21452__auto____0;
easyreagent$util$reload_stylesheets_$_state_machine__21452__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$util$reload_stylesheets_$_state_machine__21452__auto____1;
return easyreagent$util$reload_stylesheets_$_state_machine__21452__auto__;
})()
})();
var state__21498__auto__ = (function (){var statearr_23688 = f__21497__auto__();
(statearr_23688[(6)] = c__21496__auto__);

return statearr_23688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21498__auto__);
}));

return c__21496__auto__;
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

var easyreagent$util$Renderable$render$dyn_23712 = (function (this$){
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
return easyreagent$util$Renderable$render$dyn_23712(this$);
}
});

easyreagent.util.post_redirect = (function easyreagent$util$post_redirect(path,params){
var form = document.createElement("form");
(form.method = "POST");

(form.action = path);

(form.style = "display: none;");

var seq__23689_23713 = cljs.core.seq(params);
var chunk__23690_23714 = null;
var count__23691_23715 = (0);
var i__23692_23716 = (0);
while(true){
if((i__23692_23716 < count__23691_23715)){
var vec__23699_23717 = chunk__23690_23714.cljs$core$IIndexed$_nth$arity$2(null, i__23692_23716);
var k_23718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23699_23717,(0),null);
var v_23719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23699_23717,(1),null);
var input_23720 = document.createElement("input");
(input_23720.type = "hidden");

(input_23720.name = cljs.core.name(k_23718));

(input_23720.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_23719));

form.appendChild(input_23720);


var G__23721 = seq__23689_23713;
var G__23722 = chunk__23690_23714;
var G__23723 = count__23691_23715;
var G__23724 = (i__23692_23716 + (1));
seq__23689_23713 = G__23721;
chunk__23690_23714 = G__23722;
count__23691_23715 = G__23723;
i__23692_23716 = G__23724;
continue;
} else {
var temp__5823__auto___23725 = cljs.core.seq(seq__23689_23713);
if(temp__5823__auto___23725){
var seq__23689_23726__$1 = temp__5823__auto___23725;
if(cljs.core.chunked_seq_QMARK_(seq__23689_23726__$1)){
var c__5565__auto___23727 = cljs.core.chunk_first(seq__23689_23726__$1);
var G__23728 = cljs.core.chunk_rest(seq__23689_23726__$1);
var G__23729 = c__5565__auto___23727;
var G__23730 = cljs.core.count(c__5565__auto___23727);
var G__23731 = (0);
seq__23689_23713 = G__23728;
chunk__23690_23714 = G__23729;
count__23691_23715 = G__23730;
i__23692_23716 = G__23731;
continue;
} else {
var vec__23702_23732 = cljs.core.first(seq__23689_23726__$1);
var k_23733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23702_23732,(0),null);
var v_23734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23702_23732,(1),null);
var input_23735 = document.createElement("input");
(input_23735.type = "hidden");

(input_23735.name = cljs.core.name(k_23733));

(input_23735.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_23734));

form.appendChild(input_23735);


var G__23736 = cljs.core.next(seq__23689_23726__$1);
var G__23737 = null;
var G__23738 = (0);
var G__23739 = (0);
seq__23689_23713 = G__23736;
chunk__23690_23714 = G__23737;
count__23691_23715 = G__23738;
i__23692_23716 = G__23739;
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
easyreagent.util.decode_html_entities_manual = (function easyreagent$util$decode_html_entities_manual(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(s,"&quot;","\""),"&apos;","'"),"&lt;","<"),"&gt;",">"),"&amp;","&");
});
easyreagent.util.get_server_side_data = (function easyreagent$util$get_server_side_data(){
var temp__5823__auto__ = document.querySelector("meta[id='global-easyreagent-metadata']");
if(cljs.core.truth_(temp__5823__auto__)){
var meta_el = temp__5823__auto__;
var temp__5823__auto____$1 = meta_el.getAttribute("server-data");
if(cljs.core.truth_(temp__5823__auto____$1)){
var content = temp__5823__auto____$1;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(easyreagent.util.decode_html_entities_manual(content)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=easyreagent.util.js.map
