goog.provide('easyreagent.fullstack.dashboard');
easyreagent.fullstack.dashboard.dashboard_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.fullstack.dashboard.load_dashboard_data = (function easyreagent$fullstack$dashboard$load_dashboard_data(){
var c__21496__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21497__auto__ = (function (){var switch__21451__auto__ = (function (state_24000){
var state_val_24001 = (state_24000[(1)]);
if((state_val_24001 === (7))){
var state_24000__$1 = state_24000;
var statearr_24002_24029 = state_24000__$1;
(statearr_24002_24029[(2)] = cljs.core.identity);

(statearr_24002_24029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (1))){
var inst_23958 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_23959 = cljs.core.PersistentHashMap.EMPTY;
var inst_23960 = [inst_23959];
var inst_23961 = cljs.core.PersistentHashMap.fromArrays(inst_23958,inst_23960);
var inst_23962 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/dashboard/getDashboardData",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_23961], 0));
var state_24000__$1 = state_24000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24000__$1,(2),inst_23962);
} else {
if((state_val_24001 === (4))){
var inst_23964 = (state_24000[(7)]);
var inst_23975 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23964);
var inst_23976 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_23975);
var inst_23977 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23976,"json");
var state_24000__$1 = state_24000;
if(inst_23977){
var statearr_24003_24030 = state_24000__$1;
(statearr_24003_24030[(1)] = (9));

} else {
var statearr_24004_24031 = state_24000__$1;
(statearr_24004_24031[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (15))){
var inst_23964 = (state_24000[(7)]);
var inst_23988 = (function (){var result__23652__auto__ = inst_23964;
return (function (){
return alert("failed to load dashboard");
});
})();
var inst_23989 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23964);
var inst_23990 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_23989);
var inst_23991 = inst_23988(inst_23990);
var state_24000__$1 = state_24000;
var statearr_24005_24032 = state_24000__$1;
(statearr_24005_24032[(2)] = inst_23991);

(statearr_24005_24032[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (13))){
var state_24000__$1 = state_24000;
var statearr_24006_24033 = state_24000__$1;
(statearr_24006_24033[(2)] = cljs.core.identity);

(statearr_24006_24033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (6))){
var state_24000__$1 = state_24000;
var statearr_24007_24034 = state_24000__$1;
(statearr_24007_24034[(2)] = null);

(statearr_24007_24034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (17))){
var inst_23994 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24008_24035 = state_24000__$1;
(statearr_24008_24035[(2)] = inst_23994);

(statearr_24008_24035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (3))){
var state_24000__$1 = state_24000;
var statearr_24010_24036 = state_24000__$1;
(statearr_24010_24036[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (12))){
var inst_23979 = (state_24000[(8)]);
var state_24000__$1 = state_24000;
var statearr_24011_24037 = state_24000__$1;
(statearr_24011_24037[(2)] = inst_23979);

(statearr_24011_24037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (2))){
var inst_23964 = (state_24000[(7)]);
var inst_23964__$1 = (state_24000[(2)]);
var inst_23965 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23964__$1);
var inst_23966 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_23965);
var inst_23967 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23966,"success");
var state_24000__$1 = (function (){var statearr_24012 = state_24000;
(statearr_24012[(7)] = inst_23964__$1);

return statearr_24012;
})();
if(inst_23967){
var statearr_24013_24038 = state_24000__$1;
(statearr_24013_24038[(1)] = (3));

} else {
var statearr_24014_24039 = state_24000__$1;
(statearr_24014_24039[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (11))){
var inst_23996 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
var statearr_24015_24040 = state_24000__$1;
(statearr_24015_24040[(2)] = inst_23996);

(statearr_24015_24040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (9))){
var inst_23979 = (state_24000[(8)]);
var inst_23964 = (state_24000[(7)]);
var inst_23979__$1 = (function (){var result__23652__auto__ = inst_23964;
return (function (p1__23957_SHARP_){
return cljs.core.reset_BANG_(easyreagent.fullstack.dashboard.dashboard_data,p1__23957_SHARP_);
});
})();
var state_24000__$1 = (function (){var statearr_24016 = state_24000;
(statearr_24016[(8)] = inst_23979__$1);

return statearr_24016;
})();
if(cljs.core.truth_(inst_23979__$1)){
var statearr_24017_24041 = state_24000__$1;
(statearr_24017_24041[(1)] = (12));

} else {
var statearr_24018_24042 = state_24000__$1;
(statearr_24018_24042[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (5))){
var inst_23998 = (state_24000[(2)]);
var state_24000__$1 = state_24000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24000__$1,inst_23998);
} else {
if((state_val_24001 === (14))){
var inst_23964 = (state_24000[(7)]);
var inst_23983 = (state_24000[(2)]);
var inst_23984 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23964);
var inst_23985 = (inst_23983.cljs$core$IFn$_invoke$arity$1 ? inst_23983.cljs$core$IFn$_invoke$arity$1(inst_23984) : inst_23983.call(null, inst_23984));
var state_24000__$1 = state_24000;
var statearr_24019_24043 = state_24000__$1;
(statearr_24019_24043[(2)] = inst_23985);

(statearr_24019_24043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (16))){
var state_24000__$1 = state_24000;
var statearr_24020_24044 = state_24000__$1;
(statearr_24020_24044[(2)] = null);

(statearr_24020_24044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (10))){
var state_24000__$1 = state_24000;
var statearr_24021_24045 = state_24000__$1;
(statearr_24021_24045[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24001 === (8))){
var inst_23972 = (state_24000[(2)]);
var inst_23973 = (inst_23972.cljs$core$IFn$_invoke$arity$0 ? inst_23972.cljs$core$IFn$_invoke$arity$0() : inst_23972.call(null, ));
var state_24000__$1 = state_24000;
var statearr_24023_24046 = state_24000__$1;
(statearr_24023_24046[(2)] = inst_23973);

(statearr_24023_24046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto__ = null;
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto____0 = (function (){
var statearr_24024 = [null,null,null,null,null,null,null,null,null];
(statearr_24024[(0)] = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto__);

(statearr_24024[(1)] = (1));

return statearr_24024;
});
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto____1 = (function (state_24000){
while(true){
var ret_value__21453__auto__ = (function (){try{while(true){
var result__21454__auto__ = switch__21451__auto__(state_24000);
if(cljs.core.keyword_identical_QMARK_(result__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21454__auto__;
}
break;
}
}catch (e24025){var ex__21455__auto__ = e24025;
var statearr_24026_24047 = state_24000;
(statearr_24026_24047[(2)] = ex__21455__auto__);


if(cljs.core.seq((state_24000[(4)]))){
var statearr_24027_24048 = state_24000;
(statearr_24027_24048[(1)] = cljs.core.first((state_24000[(4)])));

} else {
throw ex__21455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24049 = state_24000;
state_24000 = G__24049;
continue;
} else {
return ret_value__21453__auto__;
}
break;
}
});
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto__ = function(state_24000){
switch(arguments.length){
case 0:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto____0.call(this);
case 1:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto____1.call(this,state_24000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto____0;
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto____1;
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto__;
})()
})();
var state__21498__auto__ = (function (){var statearr_24028 = f__21497__auto__();
(statearr_24028[(6)] = c__21496__auto__);

return statearr_24028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21498__auto__);
}));

return c__21496__auto__;
});
easyreagent.fullstack.dashboard.dashboard = (function easyreagent$fullstack$dashboard$dashboard(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Dashboard!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Users count: ",new cljs.core.Keyword(null,"users-count","users-count",-712835550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(easyreagent.fullstack.dashboard.dashboard_data))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Feedback: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.fullstack.chat.prev_messages,"feedback-all"], null)], null);
});
easyreagent.fullstack.dashboard.load_dashboard = (function easyreagent$fullstack$dashboard$load_dashboard(){
easyreagent.fullstack.dashboard.load_dashboard_data();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.fullstack.dashboard.dashboard], null),document.getElementById("all-content"));
});
goog.exportSymbol('easyreagent.fullstack.dashboard.load_dashboard', easyreagent.fullstack.dashboard.load_dashboard);

//# sourceMappingURL=easyreagent.fullstack.dashboard.js.map
