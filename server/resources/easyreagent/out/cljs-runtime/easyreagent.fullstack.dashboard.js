goog.provide('easyreagent.fullstack.dashboard');
easyreagent.fullstack.dashboard.dashboard_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.fullstack.dashboard.load_dashboard_data = (function easyreagent$fullstack$dashboard$load_dashboard_data(){
var c__23566__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__23567__auto__ = (function (){var switch__21451__auto__ = (function (state_23793){
var state_val_23794 = (state_23793[(1)]);
if((state_val_23794 === (7))){
var state_23793__$1 = state_23793;
var statearr_23795_23822 = state_23793__$1;
(statearr_23795_23822[(2)] = cljs.core.identity);

(statearr_23795_23822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (1))){
var inst_23751 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_23752 = cljs.core.PersistentHashMap.EMPTY;
var inst_23753 = [inst_23752];
var inst_23754 = cljs.core.PersistentHashMap.fromArrays(inst_23751,inst_23753);
var inst_23755 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/dashboard/getDashboardData",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_23754], 0));
var state_23793__$1 = state_23793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23793__$1,(2),inst_23755);
} else {
if((state_val_23794 === (4))){
var inst_23757 = (state_23793[(7)]);
var inst_23768 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23757);
var inst_23769 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_23768);
var inst_23770 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23769,"json");
var state_23793__$1 = state_23793;
if(inst_23770){
var statearr_23796_23823 = state_23793__$1;
(statearr_23796_23823[(1)] = (9));

} else {
var statearr_23797_23824 = state_23793__$1;
(statearr_23797_23824[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (15))){
var inst_23757 = (state_23793[(7)]);
var inst_23781 = (function (){var result__23685__auto__ = inst_23757;
return (function (){
return alert("failed to load dashboard");
});
})();
var inst_23782 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23757);
var inst_23783 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_23782);
var inst_23784 = inst_23781(inst_23783);
var state_23793__$1 = state_23793;
var statearr_23798_23825 = state_23793__$1;
(statearr_23798_23825[(2)] = inst_23784);

(statearr_23798_23825[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (13))){
var state_23793__$1 = state_23793;
var statearr_23799_23826 = state_23793__$1;
(statearr_23799_23826[(2)] = cljs.core.identity);

(statearr_23799_23826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (6))){
var state_23793__$1 = state_23793;
var statearr_23800_23827 = state_23793__$1;
(statearr_23800_23827[(2)] = null);

(statearr_23800_23827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (17))){
var inst_23787 = (state_23793[(2)]);
var state_23793__$1 = state_23793;
var statearr_23801_23828 = state_23793__$1;
(statearr_23801_23828[(2)] = inst_23787);

(statearr_23801_23828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (3))){
var state_23793__$1 = state_23793;
var statearr_23803_23829 = state_23793__$1;
(statearr_23803_23829[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (12))){
var inst_23772 = (state_23793[(8)]);
var state_23793__$1 = state_23793;
var statearr_23804_23830 = state_23793__$1;
(statearr_23804_23830[(2)] = inst_23772);

(statearr_23804_23830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (2))){
var inst_23757 = (state_23793[(7)]);
var inst_23757__$1 = (state_23793[(2)]);
var inst_23758 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23757__$1);
var inst_23759 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_23758);
var inst_23760 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23759,"success");
var state_23793__$1 = (function (){var statearr_23805 = state_23793;
(statearr_23805[(7)] = inst_23757__$1);

return statearr_23805;
})();
if(inst_23760){
var statearr_23806_23831 = state_23793__$1;
(statearr_23806_23831[(1)] = (3));

} else {
var statearr_23807_23832 = state_23793__$1;
(statearr_23807_23832[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (11))){
var inst_23789 = (state_23793[(2)]);
var state_23793__$1 = state_23793;
var statearr_23808_23833 = state_23793__$1;
(statearr_23808_23833[(2)] = inst_23789);

(statearr_23808_23833[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (9))){
var inst_23757 = (state_23793[(7)]);
var inst_23772 = (state_23793[(8)]);
var inst_23772__$1 = (function (){var result__23685__auto__ = inst_23757;
return (function (p1__23749_SHARP_){
return cljs.core.reset_BANG_(easyreagent.fullstack.dashboard.dashboard_data,p1__23749_SHARP_);
});
})();
var state_23793__$1 = (function (){var statearr_23809 = state_23793;
(statearr_23809[(8)] = inst_23772__$1);

return statearr_23809;
})();
if(cljs.core.truth_(inst_23772__$1)){
var statearr_23810_23834 = state_23793__$1;
(statearr_23810_23834[(1)] = (12));

} else {
var statearr_23811_23835 = state_23793__$1;
(statearr_23811_23835[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (5))){
var inst_23791 = (state_23793[(2)]);
var state_23793__$1 = state_23793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23793__$1,inst_23791);
} else {
if((state_val_23794 === (14))){
var inst_23757 = (state_23793[(7)]);
var inst_23776 = (state_23793[(2)]);
var inst_23777 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23757);
var inst_23778 = (inst_23776.cljs$core$IFn$_invoke$arity$1 ? inst_23776.cljs$core$IFn$_invoke$arity$1(inst_23777) : inst_23776.call(null, inst_23777));
var state_23793__$1 = state_23793;
var statearr_23812_23836 = state_23793__$1;
(statearr_23812_23836[(2)] = inst_23778);

(statearr_23812_23836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (16))){
var state_23793__$1 = state_23793;
var statearr_23813_23837 = state_23793__$1;
(statearr_23813_23837[(2)] = null);

(statearr_23813_23837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (10))){
var state_23793__$1 = state_23793;
var statearr_23814_23838 = state_23793__$1;
(statearr_23814_23838[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (8))){
var inst_23765 = (state_23793[(2)]);
var inst_23766 = (inst_23765.cljs$core$IFn$_invoke$arity$0 ? inst_23765.cljs$core$IFn$_invoke$arity$0() : inst_23765.call(null, ));
var state_23793__$1 = state_23793;
var statearr_23816_23839 = state_23793__$1;
(statearr_23816_23839[(2)] = inst_23766);

(statearr_23816_23839[(1)] = (5));


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
var statearr_23817 = [null,null,null,null,null,null,null,null,null];
(statearr_23817[(0)] = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto__);

(statearr_23817[(1)] = (1));

return statearr_23817;
});
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto____1 = (function (state_23793){
while(true){
var ret_value__21453__auto__ = (function (){try{while(true){
var result__21454__auto__ = switch__21451__auto__(state_23793);
if(cljs.core.keyword_identical_QMARK_(result__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21454__auto__;
}
break;
}
}catch (e23818){var ex__21455__auto__ = e23818;
var statearr_23819_23840 = state_23793;
(statearr_23819_23840[(2)] = ex__21455__auto__);


if(cljs.core.seq((state_23793[(4)]))){
var statearr_23820_23841 = state_23793;
(statearr_23820_23841[(1)] = cljs.core.first((state_23793[(4)])));

} else {
throw ex__21455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23842 = state_23793;
state_23793 = G__23842;
continue;
} else {
return ret_value__21453__auto__;
}
break;
}
});
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto__ = function(state_23793){
switch(arguments.length){
case 0:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto____0.call(this);
case 1:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto____1.call(this,state_23793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto____0;
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto____1;
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21452__auto__;
})()
})();
var state__23568__auto__ = (function (){var statearr_23821 = f__23567__auto__();
(statearr_23821[(6)] = c__23566__auto__);

return statearr_23821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__23568__auto__);
}));

return c__23566__auto__;
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
