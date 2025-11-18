goog.provide('easyreagent.fullstack.dashboard');
easyreagent.fullstack.dashboard.dashboard_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.fullstack.dashboard.load_dashboard_data = (function easyreagent$fullstack$dashboard$load_dashboard_data(){
var c__21496__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21497__auto__ = (function (){var switch__21436__auto__ = (function (state_23800){
var state_val_23801 = (state_23800[(1)]);
if((state_val_23801 === (7))){
var state_23800__$1 = state_23800;
var statearr_23808_23835 = state_23800__$1;
(statearr_23808_23835[(2)] = cljs.core.identity);

(statearr_23808_23835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (1))){
var inst_23754 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_23756 = cljs.core.PersistentHashMap.EMPTY;
var inst_23757 = [inst_23756];
var inst_23758 = cljs.core.PersistentHashMap.fromArrays(inst_23754,inst_23757);
var inst_23759 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/dashboard/getDashboardData",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_23758], 0));
var state_23800__$1 = state_23800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23800__$1,(2),inst_23759);
} else {
if((state_val_23801 === (4))){
var inst_23761 = (state_23800[(7)]);
var inst_23774 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23761);
var inst_23775 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_23774);
var inst_23776 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23775,"json");
var state_23800__$1 = state_23800;
if(inst_23776){
var statearr_23809_23836 = state_23800__$1;
(statearr_23809_23836[(1)] = (9));

} else {
var statearr_23810_23837 = state_23800__$1;
(statearr_23810_23837[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (15))){
var inst_23761 = (state_23800[(7)]);
var inst_23788 = (function (){var result__23688__auto__ = inst_23761;
return (function (){
return alert("failed to load dashboard");
});
})();
var inst_23789 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23761);
var inst_23790 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_23789);
var inst_23791 = inst_23788(inst_23790);
var state_23800__$1 = state_23800;
var statearr_23811_23838 = state_23800__$1;
(statearr_23811_23838[(2)] = inst_23791);

(statearr_23811_23838[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (13))){
var state_23800__$1 = state_23800;
var statearr_23812_23839 = state_23800__$1;
(statearr_23812_23839[(2)] = cljs.core.identity);

(statearr_23812_23839[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (6))){
var state_23800__$1 = state_23800;
var statearr_23813_23840 = state_23800__$1;
(statearr_23813_23840[(2)] = null);

(statearr_23813_23840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (17))){
var inst_23794 = (state_23800[(2)]);
var state_23800__$1 = state_23800;
var statearr_23814_23841 = state_23800__$1;
(statearr_23814_23841[(2)] = inst_23794);

(statearr_23814_23841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (3))){
var state_23800__$1 = state_23800;
var statearr_23816_23842 = state_23800__$1;
(statearr_23816_23842[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (12))){
var inst_23779 = (state_23800[(8)]);
var state_23800__$1 = state_23800;
var statearr_23817_23843 = state_23800__$1;
(statearr_23817_23843[(2)] = inst_23779);

(statearr_23817_23843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (2))){
var inst_23761 = (state_23800[(7)]);
var inst_23761__$1 = (state_23800[(2)]);
var inst_23762 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23761__$1);
var inst_23763 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_23762);
var inst_23764 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23763,"success");
var state_23800__$1 = (function (){var statearr_23818 = state_23800;
(statearr_23818[(7)] = inst_23761__$1);

return statearr_23818;
})();
if(inst_23764){
var statearr_23819_23844 = state_23800__$1;
(statearr_23819_23844[(1)] = (3));

} else {
var statearr_23820_23845 = state_23800__$1;
(statearr_23820_23845[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (11))){
var inst_23796 = (state_23800[(2)]);
var state_23800__$1 = state_23800;
var statearr_23821_23846 = state_23800__$1;
(statearr_23821_23846[(2)] = inst_23796);

(statearr_23821_23846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (9))){
var inst_23779 = (state_23800[(8)]);
var inst_23761 = (state_23800[(7)]);
var inst_23779__$1 = (function (){var result__23688__auto__ = inst_23761;
return (function (p1__23740_SHARP_){
return cljs.core.reset_BANG_(easyreagent.fullstack.dashboard.dashboard_data,p1__23740_SHARP_);
});
})();
var state_23800__$1 = (function (){var statearr_23822 = state_23800;
(statearr_23822[(8)] = inst_23779__$1);

return statearr_23822;
})();
if(cljs.core.truth_(inst_23779__$1)){
var statearr_23823_23847 = state_23800__$1;
(statearr_23823_23847[(1)] = (12));

} else {
var statearr_23824_23848 = state_23800__$1;
(statearr_23824_23848[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (5))){
var inst_23798 = (state_23800[(2)]);
var state_23800__$1 = state_23800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23800__$1,inst_23798);
} else {
if((state_val_23801 === (14))){
var inst_23761 = (state_23800[(7)]);
var inst_23783 = (state_23800[(2)]);
var inst_23784 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23761);
var inst_23785 = (inst_23783.cljs$core$IFn$_invoke$arity$1 ? inst_23783.cljs$core$IFn$_invoke$arity$1(inst_23784) : inst_23783.call(null, inst_23784));
var state_23800__$1 = state_23800;
var statearr_23825_23849 = state_23800__$1;
(statearr_23825_23849[(2)] = inst_23785);

(statearr_23825_23849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (16))){
var state_23800__$1 = state_23800;
var statearr_23826_23850 = state_23800__$1;
(statearr_23826_23850[(2)] = null);

(statearr_23826_23850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (10))){
var state_23800__$1 = state_23800;
var statearr_23827_23851 = state_23800__$1;
(statearr_23827_23851[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23801 === (8))){
var inst_23769 = (state_23800[(2)]);
var inst_23772 = (inst_23769.cljs$core$IFn$_invoke$arity$0 ? inst_23769.cljs$core$IFn$_invoke$arity$0() : inst_23769.call(null, ));
var state_23800__$1 = state_23800;
var statearr_23829_23852 = state_23800__$1;
(statearr_23829_23852[(2)] = inst_23772);

(statearr_23829_23852[(1)] = (5));


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
var statearr_23830 = [null,null,null,null,null,null,null,null,null];
(statearr_23830[(0)] = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto__);

(statearr_23830[(1)] = (1));

return statearr_23830;
});
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto____1 = (function (state_23800){
while(true){
var ret_value__21438__auto__ = (function (){try{while(true){
var result__21439__auto__ = switch__21436__auto__(state_23800);
if(cljs.core.keyword_identical_QMARK_(result__21439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21439__auto__;
}
break;
}
}catch (e23831){var ex__21440__auto__ = e23831;
var statearr_23832_23853 = state_23800;
(statearr_23832_23853[(2)] = ex__21440__auto__);


if(cljs.core.seq((state_23800[(4)]))){
var statearr_23833_23854 = state_23800;
(statearr_23833_23854[(1)] = cljs.core.first((state_23800[(4)])));

} else {
throw ex__21440__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23855 = state_23800;
state_23800 = G__23855;
continue;
} else {
return ret_value__21438__auto__;
}
break;
}
});
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto__ = function(state_23800){
switch(arguments.length){
case 0:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto____0.call(this);
case 1:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto____1.call(this,state_23800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto____0;
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto____1;
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21437__auto__;
})()
})();
var state__21498__auto__ = (function (){var statearr_23834 = f__21497__auto__();
(statearr_23834[(6)] = c__21496__auto__);

return statearr_23834;
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
