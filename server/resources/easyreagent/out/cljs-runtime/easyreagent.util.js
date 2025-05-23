goog.provide('easyreagent.util');
easyreagent.util.curr_css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.util.reload_stylesheets = (function easyreagent$util$reload_stylesheets(){
var c__27839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27840__auto__ = (function (){var switch__27639__auto__ = (function (state_28877){
var state_val_28878 = (state_28877[(1)]);
if((state_val_28878 === (1))){
var inst_28861 = cljs.core.rand_int((1000000));
var inst_28862 = ["resources/global_output.css?v=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28861)].join('');
var inst_28863 = cljs_http.client.get(inst_28862);
var state_28877__$1 = state_28877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28877__$1,(2),inst_28863);
} else {
if((state_val_28878 === (2))){
var inst_28866 = (state_28877[(7)]);
var inst_28865 = (state_28877[(2)]);
var inst_28866__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28865);
var inst_28867 = cljs.core.deref(easyreagent.util.curr_css);
var inst_28868 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28867,inst_28866__$1);
var inst_28869 = (!(inst_28868));
var state_28877__$1 = (function (){var statearr_28882 = state_28877;
(statearr_28882[(7)] = inst_28866__$1);

return statearr_28882;
})();
if(inst_28869){
var statearr_28883_28917 = state_28877__$1;
(statearr_28883_28917[(1)] = (3));

} else {
var statearr_28884_28918 = state_28877__$1;
(statearr_28884_28918[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (3))){
var inst_28871 = reloadStylesheets();
var state_28877__$1 = state_28877;
var statearr_28888_28919 = state_28877__$1;
(statearr_28888_28919[(2)] = inst_28871);

(statearr_28888_28919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (4))){
var state_28877__$1 = state_28877;
var statearr_28889_28920 = state_28877__$1;
(statearr_28889_28920[(2)] = null);

(statearr_28889_28920[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (5))){
var inst_28866 = (state_28877[(7)]);
var inst_28874 = (state_28877[(2)]);
var inst_28875 = cljs.core.reset_BANG_(easyreagent.util.curr_css,inst_28866);
var state_28877__$1 = (function (){var statearr_28890 = state_28877;
(statearr_28890[(8)] = inst_28874);

return statearr_28890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28877__$1,inst_28875);
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
var statearr_28894 = [null,null,null,null,null,null,null,null,null];
(statearr_28894[(0)] = easyreagent$util$reload_stylesheets_$_state_machine__27640__auto__);

(statearr_28894[(1)] = (1));

return statearr_28894;
});
var easyreagent$util$reload_stylesheets_$_state_machine__27640__auto____1 = (function (state_28877){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__(state_28877);
if(cljs.core.keyword_identical_QMARK_(result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e28895){var ex__27643__auto__ = e28895;
var statearr_28896_28921 = state_28877;
(statearr_28896_28921[(2)] = ex__27643__auto__);


if(cljs.core.seq((state_28877[(4)]))){
var statearr_28897_28922 = state_28877;
(statearr_28897_28922[(1)] = cljs.core.first((state_28877[(4)])));

} else {
throw ex__27643__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28923 = state_28877;
state_28877 = G__28923;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
easyreagent$util$reload_stylesheets_$_state_machine__27640__auto__ = function(state_28877){
switch(arguments.length){
case 0:
return easyreagent$util$reload_stylesheets_$_state_machine__27640__auto____0.call(this);
case 1:
return easyreagent$util$reload_stylesheets_$_state_machine__27640__auto____1.call(this,state_28877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$util$reload_stylesheets_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$util$reload_stylesheets_$_state_machine__27640__auto____0;
easyreagent$util$reload_stylesheets_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$util$reload_stylesheets_$_state_machine__27640__auto____1;
return easyreagent$util$reload_stylesheets_$_state_machine__27640__auto__;
})()
})();
var state__27841__auto__ = (function (){var statearr_28901 = f__27840__auto__();
(statearr_28901[(6)] = c__27839__auto__);

return statearr_28901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27841__auto__);
}));

return c__27839__auto__;
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

var easyreagent$util$Renderable$render$dyn_28924 = (function (this$){
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
return easyreagent$util$Renderable$render$dyn_28924(this$);
}
});


//# sourceMappingURL=easyreagent.util.js.map
