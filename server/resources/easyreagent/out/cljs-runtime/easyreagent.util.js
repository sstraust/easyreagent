goog.provide('easyreagent.util');
easyreagent.util.curr_css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.util.reload_stylesheets = (function easyreagent$util$reload_stylesheets(){
var c__21474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21475__auto__ = (function (){var switch__21436__auto__ = (function (state_23716){
var state_val_23719 = (state_23716[(1)]);
if((state_val_23719 === (1))){
var inst_23698 = cljs.core.rand_int((1000000));
var inst_23699 = ["resources/global_output.css?v=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23698)].join('');
var inst_23700 = cljs_http.client.get(inst_23699);
var state_23716__$1 = state_23716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23716__$1,(2),inst_23700);
} else {
if((state_val_23719 === (2))){
var inst_23703 = (state_23716[(7)]);
var inst_23702 = (state_23716[(2)]);
var inst_23703__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23702);
var inst_23704 = cljs.core.deref(easyreagent.util.curr_css);
var inst_23705 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23704,inst_23703__$1);
var inst_23706 = (!(inst_23705));
var state_23716__$1 = (function (){var statearr_23721 = state_23716;
(statearr_23721[(7)] = inst_23703__$1);

return statearr_23721;
})();
if(inst_23706){
var statearr_23722_23761 = state_23716__$1;
(statearr_23722_23761[(1)] = (3));

} else {
var statearr_23723_23762 = state_23716__$1;
(statearr_23723_23762[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23719 === (3))){
var inst_23709 = reloadStylesheets();
var state_23716__$1 = state_23716;
var statearr_23724_23763 = state_23716__$1;
(statearr_23724_23763[(2)] = inst_23709);

(statearr_23724_23763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23719 === (4))){
var state_23716__$1 = state_23716;
var statearr_23725_23764 = state_23716__$1;
(statearr_23725_23764[(2)] = null);

(statearr_23725_23764[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23719 === (5))){
var inst_23703 = (state_23716[(7)]);
var inst_23713 = (state_23716[(2)]);
var inst_23714 = cljs.core.reset_BANG_(easyreagent.util.curr_css,inst_23703);
var state_23716__$1 = (function (){var statearr_23726 = state_23716;
(statearr_23726[(8)] = inst_23713);

return statearr_23726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23716__$1,inst_23714);
} else {
return null;
}
}
}
}
}
});
return (function() {
var easyreagent$util$reload_stylesheets_$_state_machine__21437__auto__ = null;
var easyreagent$util$reload_stylesheets_$_state_machine__21437__auto____0 = (function (){
var statearr_23728 = [null,null,null,null,null,null,null,null,null];
(statearr_23728[(0)] = easyreagent$util$reload_stylesheets_$_state_machine__21437__auto__);

(statearr_23728[(1)] = (1));

return statearr_23728;
});
var easyreagent$util$reload_stylesheets_$_state_machine__21437__auto____1 = (function (state_23716){
while(true){
var ret_value__21438__auto__ = (function (){try{while(true){
var result__21439__auto__ = switch__21436__auto__(state_23716);
if(cljs.core.keyword_identical_QMARK_(result__21439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21439__auto__;
}
break;
}
}catch (e23730){var ex__21440__auto__ = e23730;
var statearr_23731_23766 = state_23716;
(statearr_23731_23766[(2)] = ex__21440__auto__);


if(cljs.core.seq((state_23716[(4)]))){
var statearr_23732_23768 = state_23716;
(statearr_23732_23768[(1)] = cljs.core.first((state_23716[(4)])));

} else {
throw ex__21440__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23769 = state_23716;
state_23716 = G__23769;
continue;
} else {
return ret_value__21438__auto__;
}
break;
}
});
easyreagent$util$reload_stylesheets_$_state_machine__21437__auto__ = function(state_23716){
switch(arguments.length){
case 0:
return easyreagent$util$reload_stylesheets_$_state_machine__21437__auto____0.call(this);
case 1:
return easyreagent$util$reload_stylesheets_$_state_machine__21437__auto____1.call(this,state_23716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$util$reload_stylesheets_$_state_machine__21437__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$util$reload_stylesheets_$_state_machine__21437__auto____0;
easyreagent$util$reload_stylesheets_$_state_machine__21437__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$util$reload_stylesheets_$_state_machine__21437__auto____1;
return easyreagent$util$reload_stylesheets_$_state_machine__21437__auto__;
})()
})();
var state__21476__auto__ = (function (){var statearr_23733 = f__21475__auto__();
(statearr_23733[(6)] = c__21474__auto__);

return statearr_23733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21476__auto__);
}));

return c__21474__auto__;
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

var easyreagent$util$Renderable$render$dyn_23770 = (function (this$){
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
return easyreagent$util$Renderable$render$dyn_23770(this$);
}
});

easyreagent.util.post_redirect = (function easyreagent$util$post_redirect(path,params){
var form = document.createElement("form");
(form.method = "POST");

(form.action = path);

(form.style = "display: none;");

var seq__23739_23772 = cljs.core.seq(params);
var chunk__23740_23773 = null;
var count__23741_23774 = (0);
var i__23742_23775 = (0);
while(true){
if((i__23742_23775 < count__23741_23774)){
var vec__23751_23776 = chunk__23740_23773.cljs$core$IIndexed$_nth$arity$2(null, i__23742_23775);
var k_23777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23751_23776,(0),null);
var v_23778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23751_23776,(1),null);
var input_23780 = document.createElement("input");
(input_23780.type = "hidden");

(input_23780.name = cljs.core.name(k_23777));

(input_23780.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_23778));

form.appendChild(input_23780);


var G__23781 = seq__23739_23772;
var G__23782 = chunk__23740_23773;
var G__23783 = count__23741_23774;
var G__23784 = (i__23742_23775 + (1));
seq__23739_23772 = G__23781;
chunk__23740_23773 = G__23782;
count__23741_23774 = G__23783;
i__23742_23775 = G__23784;
continue;
} else {
var temp__5823__auto___23785 = cljs.core.seq(seq__23739_23772);
if(temp__5823__auto___23785){
var seq__23739_23786__$1 = temp__5823__auto___23785;
if(cljs.core.chunked_seq_QMARK_(seq__23739_23786__$1)){
var c__5565__auto___23787 = cljs.core.chunk_first(seq__23739_23786__$1);
var G__23788 = cljs.core.chunk_rest(seq__23739_23786__$1);
var G__23789 = c__5565__auto___23787;
var G__23790 = cljs.core.count(c__5565__auto___23787);
var G__23791 = (0);
seq__23739_23772 = G__23788;
chunk__23740_23773 = G__23789;
count__23741_23774 = G__23790;
i__23742_23775 = G__23791;
continue;
} else {
var vec__23755_23792 = cljs.core.first(seq__23739_23786__$1);
var k_23793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23755_23792,(0),null);
var v_23794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23755_23792,(1),null);
var input_23796 = document.createElement("input");
(input_23796.type = "hidden");

(input_23796.name = cljs.core.name(k_23793));

(input_23796.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_23794));

form.appendChild(input_23796);


var G__23797 = cljs.core.next(seq__23739_23786__$1);
var G__23798 = null;
var G__23799 = (0);
var G__23800 = (0);
seq__23739_23772 = G__23797;
chunk__23740_23773 = G__23798;
count__23741_23774 = G__23799;
i__23742_23775 = G__23800;
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
