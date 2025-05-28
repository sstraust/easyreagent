goog.provide('easyreagent.fullstack.dashboard');
easyreagent.fullstack.dashboard.dashboard_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.fullstack.dashboard.load_dashboard_data = (function easyreagent$fullstack$dashboard$load_dashboard_data(){
var c__21459__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21460__auto__ = (function (){var switch__21382__auto__ = (function (state_23703){
var state_val_23704 = (state_23703[(1)]);
if((state_val_23704 === (7))){
var state_23703__$1 = state_23703;
var statearr_23705_23732 = state_23703__$1;
(statearr_23705_23732[(2)] = cljs.core.identity);

(statearr_23705_23732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (1))){
var inst_23661 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_23662 = cljs.core.PersistentHashMap.EMPTY;
var inst_23663 = [inst_23662];
var inst_23664 = cljs.core.PersistentHashMap.fromArrays(inst_23661,inst_23663);
var inst_23665 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/dashboard/getDashboardData",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_23664], 0));
var state_23703__$1 = state_23703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23703__$1,(2),inst_23665);
} else {
if((state_val_23704 === (4))){
var inst_23667 = (state_23703[(7)]);
var inst_23678 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23667);
var inst_23679 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_23678);
var inst_23680 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23679,"json");
var state_23703__$1 = state_23703;
if(inst_23680){
var statearr_23706_23733 = state_23703__$1;
(statearr_23706_23733[(1)] = (9));

} else {
var statearr_23707_23734 = state_23703__$1;
(statearr_23707_23734[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (15))){
var inst_23667 = (state_23703[(7)]);
var inst_23691 = (function (){var result__23652__auto__ = inst_23667;
return (function (){
return alert("failed to load dashboard");
});
})();
var inst_23692 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23667);
var inst_23693 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_23692);
var inst_23694 = inst_23691(inst_23693);
var state_23703__$1 = state_23703;
var statearr_23708_23735 = state_23703__$1;
(statearr_23708_23735[(2)] = inst_23694);

(statearr_23708_23735[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (13))){
var state_23703__$1 = state_23703;
var statearr_23709_23736 = state_23703__$1;
(statearr_23709_23736[(2)] = cljs.core.identity);

(statearr_23709_23736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (6))){
var state_23703__$1 = state_23703;
var statearr_23710_23737 = state_23703__$1;
(statearr_23710_23737[(2)] = null);

(statearr_23710_23737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (17))){
var inst_23697 = (state_23703[(2)]);
var state_23703__$1 = state_23703;
var statearr_23711_23738 = state_23703__$1;
(statearr_23711_23738[(2)] = inst_23697);

(statearr_23711_23738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (3))){
var state_23703__$1 = state_23703;
var statearr_23713_23739 = state_23703__$1;
(statearr_23713_23739[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (12))){
var inst_23682 = (state_23703[(8)]);
var state_23703__$1 = state_23703;
var statearr_23714_23740 = state_23703__$1;
(statearr_23714_23740[(2)] = inst_23682);

(statearr_23714_23740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (2))){
var inst_23667 = (state_23703[(7)]);
var inst_23667__$1 = (state_23703[(2)]);
var inst_23668 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23667__$1);
var inst_23669 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_23668);
var inst_23670 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23669,"success");
var state_23703__$1 = (function (){var statearr_23715 = state_23703;
(statearr_23715[(7)] = inst_23667__$1);

return statearr_23715;
})();
if(inst_23670){
var statearr_23716_23741 = state_23703__$1;
(statearr_23716_23741[(1)] = (3));

} else {
var statearr_23717_23742 = state_23703__$1;
(statearr_23717_23742[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (11))){
var inst_23699 = (state_23703[(2)]);
var state_23703__$1 = state_23703;
var statearr_23718_23743 = state_23703__$1;
(statearr_23718_23743[(2)] = inst_23699);

(statearr_23718_23743[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (9))){
var inst_23682 = (state_23703[(8)]);
var inst_23667 = (state_23703[(7)]);
var inst_23682__$1 = (function (){var result__23652__auto__ = inst_23667;
return (function (p1__23660_SHARP_){
return cljs.core.reset_BANG_(easyreagent.fullstack.dashboard.dashboard_data,p1__23660_SHARP_);
});
})();
var state_23703__$1 = (function (){var statearr_23719 = state_23703;
(statearr_23719[(8)] = inst_23682__$1);

return statearr_23719;
})();
if(cljs.core.truth_(inst_23682__$1)){
var statearr_23720_23744 = state_23703__$1;
(statearr_23720_23744[(1)] = (12));

} else {
var statearr_23721_23745 = state_23703__$1;
(statearr_23721_23745[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (5))){
var inst_23701 = (state_23703[(2)]);
var state_23703__$1 = state_23703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23703__$1,inst_23701);
} else {
if((state_val_23704 === (14))){
var inst_23667 = (state_23703[(7)]);
var inst_23686 = (state_23703[(2)]);
var inst_23687 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23667);
var inst_23688 = (inst_23686.cljs$core$IFn$_invoke$arity$1 ? inst_23686.cljs$core$IFn$_invoke$arity$1(inst_23687) : inst_23686.call(null, inst_23687));
var state_23703__$1 = state_23703;
var statearr_23722_23746 = state_23703__$1;
(statearr_23722_23746[(2)] = inst_23688);

(statearr_23722_23746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (16))){
var state_23703__$1 = state_23703;
var statearr_23723_23747 = state_23703__$1;
(statearr_23723_23747[(2)] = null);

(statearr_23723_23747[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (10))){
var state_23703__$1 = state_23703;
var statearr_23724_23748 = state_23703__$1;
(statearr_23724_23748[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23704 === (8))){
var inst_23675 = (state_23703[(2)]);
var inst_23676 = (inst_23675.cljs$core$IFn$_invoke$arity$0 ? inst_23675.cljs$core$IFn$_invoke$arity$0() : inst_23675.call(null, ));
var state_23703__$1 = state_23703;
var statearr_23726_23749 = state_23703__$1;
(statearr_23726_23749[(2)] = inst_23676);

(statearr_23726_23749[(1)] = (5));


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
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21383__auto__ = null;
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21383__auto____0 = (function (){
var statearr_23727 = [null,null,null,null,null,null,null,null,null];
(statearr_23727[(0)] = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21383__auto__);

(statearr_23727[(1)] = (1));

return statearr_23727;
});
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21383__auto____1 = (function (state_23703){
while(true){
var ret_value__21384__auto__ = (function (){try{while(true){
var result__21385__auto__ = switch__21382__auto__(state_23703);
if(cljs.core.keyword_identical_QMARK_(result__21385__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21385__auto__;
}
break;
}
}catch (e23728){var ex__21386__auto__ = e23728;
var statearr_23729_23750 = state_23703;
(statearr_23729_23750[(2)] = ex__21386__auto__);


if(cljs.core.seq((state_23703[(4)]))){
var statearr_23730_23751 = state_23703;
(statearr_23730_23751[(1)] = cljs.core.first((state_23703[(4)])));

} else {
throw ex__21386__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23752 = state_23703;
state_23703 = G__23752;
continue;
} else {
return ret_value__21384__auto__;
}
break;
}
});
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21383__auto__ = function(state_23703){
switch(arguments.length){
case 0:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21383__auto____0.call(this);
case 1:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21383__auto____1.call(this,state_23703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21383__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21383__auto____0;
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21383__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21383__auto____1;
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__21383__auto__;
})()
})();
var state__21461__auto__ = (function (){var statearr_23731 = f__21460__auto__();
(statearr_23731[(6)] = c__21459__auto__);

return statearr_23731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21461__auto__);
}));

return c__21459__auto__;
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
