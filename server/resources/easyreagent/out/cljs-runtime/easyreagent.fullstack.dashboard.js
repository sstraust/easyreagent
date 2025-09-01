goog.provide('easyreagent.fullstack.dashboard');
easyreagent.fullstack.dashboard.dashboard_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.fullstack.dashboard.load_dashboard_data = (function easyreagent$fullstack$dashboard$load_dashboard_data(){
var c__21474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21475__auto__ = (function (){var switch__21436__auto__ = (function (state_24090){
var state_val_24091 = (state_24090[(1)]);
if((state_val_24091 === (7))){
var state_24090__$1 = state_24090;
var statearr_24092_24119 = state_24090__$1;
(statearr_24092_24119[(2)] = cljs.core.identity);

(statearr_24092_24119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (1))){
var inst_24048 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_24049 = cljs.core.PersistentHashMap.EMPTY;
var inst_24050 = [inst_24049];
var inst_24051 = cljs.core.PersistentHashMap.fromArrays(inst_24048,inst_24050);
var inst_24052 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/dashboard/getDashboardData",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_24051], 0));
var state_24090__$1 = state_24090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24090__$1,(2),inst_24052);
} else {
if((state_val_24091 === (4))){
var inst_24054 = (state_24090[(7)]);
var inst_24065 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24054);
var inst_24066 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_24065);
var inst_24067 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24066,"json");
var state_24090__$1 = state_24090;
if(inst_24067){
var statearr_24093_24120 = state_24090__$1;
(statearr_24093_24120[(1)] = (9));

} else {
var statearr_24094_24121 = state_24090__$1;
(statearr_24094_24121[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (15))){
var inst_24054 = (state_24090[(7)]);
var inst_24078 = (function (){var result__23682__auto__ = inst_24054;
return (function (){
return alert("failed to load dashboard");
});
})();
var inst_24079 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24054);
var inst_24080 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_24079);
var inst_24081 = inst_24078(inst_24080);
var state_24090__$1 = state_24090;
var statearr_24095_24122 = state_24090__$1;
(statearr_24095_24122[(2)] = inst_24081);

(statearr_24095_24122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (13))){
var state_24090__$1 = state_24090;
var statearr_24096_24123 = state_24090__$1;
(statearr_24096_24123[(2)] = cljs.core.identity);

(statearr_24096_24123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (6))){
var state_24090__$1 = state_24090;
var statearr_24097_24124 = state_24090__$1;
(statearr_24097_24124[(2)] = null);

(statearr_24097_24124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (17))){
var inst_24084 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
var statearr_24098_24125 = state_24090__$1;
(statearr_24098_24125[(2)] = inst_24084);

(statearr_24098_24125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (3))){
var state_24090__$1 = state_24090;
var statearr_24100_24126 = state_24090__$1;
(statearr_24100_24126[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (12))){
var inst_24069 = (state_24090[(8)]);
var state_24090__$1 = state_24090;
var statearr_24101_24127 = state_24090__$1;
(statearr_24101_24127[(2)] = inst_24069);

(statearr_24101_24127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (2))){
var inst_24054 = (state_24090[(7)]);
var inst_24054__$1 = (state_24090[(2)]);
var inst_24055 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24054__$1);
var inst_24056 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_24055);
var inst_24057 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24056,"success");
var state_24090__$1 = (function (){var statearr_24102 = state_24090;
(statearr_24102[(7)] = inst_24054__$1);

return statearr_24102;
})();
if(inst_24057){
var statearr_24103_24128 = state_24090__$1;
(statearr_24103_24128[(1)] = (3));

} else {
var statearr_24104_24129 = state_24090__$1;
(statearr_24104_24129[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (11))){
var inst_24086 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
var statearr_24105_24130 = state_24090__$1;
(statearr_24105_24130[(2)] = inst_24086);

(statearr_24105_24130[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (9))){
var inst_24069 = (state_24090[(8)]);
var inst_24054 = (state_24090[(7)]);
var inst_24069__$1 = (function (){var result__23682__auto__ = inst_24054;
return (function (p1__24047_SHARP_){
return cljs.core.reset_BANG_(easyreagent.fullstack.dashboard.dashboard_data,p1__24047_SHARP_);
});
})();
var state_24090__$1 = (function (){var statearr_24106 = state_24090;
(statearr_24106[(8)] = inst_24069__$1);

return statearr_24106;
})();
if(cljs.core.truth_(inst_24069__$1)){
var statearr_24107_24131 = state_24090__$1;
(statearr_24107_24131[(1)] = (12));

} else {
var statearr_24108_24132 = state_24090__$1;
(statearr_24108_24132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (5))){
var inst_24088 = (state_24090[(2)]);
var state_24090__$1 = state_24090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24090__$1,inst_24088);
} else {
if((state_val_24091 === (14))){
var inst_24054 = (state_24090[(7)]);
var inst_24073 = (state_24090[(2)]);
var inst_24074 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_24054);
var inst_24075 = (inst_24073.cljs$core$IFn$_invoke$arity$1 ? inst_24073.cljs$core$IFn$_invoke$arity$1(inst_24074) : inst_24073.call(null, inst_24074));
var state_24090__$1 = state_24090;
var statearr_24109_24133 = state_24090__$1;
(statearr_24109_24133[(2)] = inst_24075);

(statearr_24109_24133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (16))){
var state_24090__$1 = state_24090;
var statearr_24110_24134 = state_24090__$1;
(statearr_24110_24134[(2)] = null);

(statearr_24110_24134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (10))){
var state_24090__$1 = state_24090;
var statearr_24111_24135 = state_24090__$1;
(statearr_24111_24135[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24091 === (8))){
var inst_24062 = (state_24090[(2)]);
var inst_24063 = (inst_24062.cljs$core$IFn$_invoke$arity$0 ? inst_24062.cljs$core$IFn$_invoke$arity$0() : inst_24062.call(null, ));
var state_24090__$1 = state_24090;
var statearr_24113_24136 = state_24090__$1;
(statearr_24113_24136[(2)] = inst_24063);

(statearr_24113_24136[(1)] = (5));


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
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto__ = null;
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto____0 = (function (){
var statearr_24114 = [null,null,null,null,null,null,null,null,null];
(statearr_24114[(0)] = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto__);

(statearr_24114[(1)] = (1));

return statearr_24114;
});
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto____1 = (function (state_24090){
while(true){
var ret_value__21438__auto__ = (function (){try{while(true){
var result__21439__auto__ = switch__21436__auto__(state_24090);
if(cljs.core.keyword_identical_QMARK_(result__21439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21439__auto__;
}
break;
}
}catch (e24115){var ex__21440__auto__ = e24115;
var statearr_24116_24137 = state_24090;
(statearr_24116_24137[(2)] = ex__21440__auto__);


if(cljs.core.seq((state_24090[(4)]))){
var statearr_24117_24138 = state_24090;
(statearr_24117_24138[(1)] = cljs.core.first((state_24090[(4)])));

} else {
throw ex__21440__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24139 = state_24090;
state_24090 = G__24139;
continue;
} else {
return ret_value__21438__auto__;
}
break;
}
});
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto__ = function(state_24090){
switch(arguments.length){
case 0:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto____0.call(this);
case 1:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto____1.call(this,state_24090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto____0;
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto____1;
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto__;
})()
})();
var state__21476__auto__ = (function (){var statearr_24118 = f__21475__auto__();
(statearr_24118[(6)] = c__21474__auto__);

return statearr_24118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21476__auto__);
}));

return c__21474__auto__;
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
