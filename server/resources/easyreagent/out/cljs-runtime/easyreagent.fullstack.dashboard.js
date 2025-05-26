goog.provide('easyreagent.fullstack.dashboard');
easyreagent.fullstack.dashboard.dashboard_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.fullstack.dashboard.load_dashboard_data = (function easyreagent$fullstack$dashboard$load_dashboard_data(){
var c__36139__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36140__auto__ = (function (){var switch__35939__auto__ = (function (state_38437){
var state_val_38438 = (state_38437[(1)]);
if((state_val_38438 === (7))){
var state_38437__$1 = state_38437;
var statearr_38439_38466 = state_38437__$1;
(statearr_38439_38466[(2)] = cljs.core.identity);

(statearr_38439_38466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (1))){
var inst_38395 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_38396 = cljs.core.PersistentHashMap.EMPTY;
var inst_38397 = [inst_38396];
var inst_38398 = cljs.core.PersistentHashMap.fromArrays(inst_38395,inst_38397);
var inst_38399 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/dashboard/getDashboardData",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_38398], 0));
var state_38437__$1 = state_38437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38437__$1,(2),inst_38399);
} else {
if((state_val_38438 === (4))){
var inst_38401 = (state_38437[(7)]);
var inst_38412 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_38401);
var inst_38413 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_38412);
var inst_38414 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38413,"json");
var state_38437__$1 = state_38437;
if(inst_38414){
var statearr_38440_38467 = state_38437__$1;
(statearr_38440_38467[(1)] = (9));

} else {
var statearr_38441_38468 = state_38437__$1;
(statearr_38441_38468[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (15))){
var inst_38401 = (state_38437[(7)]);
var inst_38425 = (function (){var result__38377__auto__ = inst_38401;
return (function (){
return alert("failed to load dashboard");
});
})();
var inst_38426 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_38401);
var inst_38427 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_38426);
var inst_38428 = inst_38425(inst_38427);
var state_38437__$1 = state_38437;
var statearr_38442_38469 = state_38437__$1;
(statearr_38442_38469[(2)] = inst_38428);

(statearr_38442_38469[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (13))){
var state_38437__$1 = state_38437;
var statearr_38443_38470 = state_38437__$1;
(statearr_38443_38470[(2)] = cljs.core.identity);

(statearr_38443_38470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (6))){
var state_38437__$1 = state_38437;
var statearr_38444_38471 = state_38437__$1;
(statearr_38444_38471[(2)] = null);

(statearr_38444_38471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (17))){
var inst_38431 = (state_38437[(2)]);
var state_38437__$1 = state_38437;
var statearr_38445_38472 = state_38437__$1;
(statearr_38445_38472[(2)] = inst_38431);

(statearr_38445_38472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (3))){
var state_38437__$1 = state_38437;
var statearr_38447_38473 = state_38437__$1;
(statearr_38447_38473[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (12))){
var inst_38416 = (state_38437[(8)]);
var state_38437__$1 = state_38437;
var statearr_38448_38474 = state_38437__$1;
(statearr_38448_38474[(2)] = inst_38416);

(statearr_38448_38474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (2))){
var inst_38401 = (state_38437[(7)]);
var inst_38401__$1 = (state_38437[(2)]);
var inst_38402 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_38401__$1);
var inst_38403 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_38402);
var inst_38404 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38403,"success");
var state_38437__$1 = (function (){var statearr_38449 = state_38437;
(statearr_38449[(7)] = inst_38401__$1);

return statearr_38449;
})();
if(inst_38404){
var statearr_38450_38475 = state_38437__$1;
(statearr_38450_38475[(1)] = (3));

} else {
var statearr_38451_38476 = state_38437__$1;
(statearr_38451_38476[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (11))){
var inst_38433 = (state_38437[(2)]);
var state_38437__$1 = state_38437;
var statearr_38452_38477 = state_38437__$1;
(statearr_38452_38477[(2)] = inst_38433);

(statearr_38452_38477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (9))){
var inst_38401 = (state_38437[(7)]);
var inst_38416 = (state_38437[(8)]);
var inst_38416__$1 = (function (){var result__38377__auto__ = inst_38401;
return (function (p1__38394_SHARP_){
return cljs.core.reset_BANG_(easyreagent.fullstack.dashboard.dashboard_data,p1__38394_SHARP_);
});
})();
var state_38437__$1 = (function (){var statearr_38453 = state_38437;
(statearr_38453[(8)] = inst_38416__$1);

return statearr_38453;
})();
if(cljs.core.truth_(inst_38416__$1)){
var statearr_38454_38478 = state_38437__$1;
(statearr_38454_38478[(1)] = (12));

} else {
var statearr_38455_38479 = state_38437__$1;
(statearr_38455_38479[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (5))){
var inst_38435 = (state_38437[(2)]);
var state_38437__$1 = state_38437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38437__$1,inst_38435);
} else {
if((state_val_38438 === (14))){
var inst_38401 = (state_38437[(7)]);
var inst_38420 = (state_38437[(2)]);
var inst_38421 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_38401);
var inst_38422 = (inst_38420.cljs$core$IFn$_invoke$arity$1 ? inst_38420.cljs$core$IFn$_invoke$arity$1(inst_38421) : inst_38420.call(null, inst_38421));
var state_38437__$1 = state_38437;
var statearr_38456_38480 = state_38437__$1;
(statearr_38456_38480[(2)] = inst_38422);

(statearr_38456_38480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (16))){
var state_38437__$1 = state_38437;
var statearr_38457_38481 = state_38437__$1;
(statearr_38457_38481[(2)] = null);

(statearr_38457_38481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (10))){
var state_38437__$1 = state_38437;
var statearr_38458_38482 = state_38437__$1;
(statearr_38458_38482[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38438 === (8))){
var inst_38409 = (state_38437[(2)]);
var inst_38410 = (inst_38409.cljs$core$IFn$_invoke$arity$0 ? inst_38409.cljs$core$IFn$_invoke$arity$0() : inst_38409.call(null, ));
var state_38437__$1 = state_38437;
var statearr_38460_38483 = state_38437__$1;
(statearr_38460_38483[(2)] = inst_38410);

(statearr_38460_38483[(1)] = (5));


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
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35940__auto__ = null;
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35940__auto____0 = (function (){
var statearr_38461 = [null,null,null,null,null,null,null,null,null];
(statearr_38461[(0)] = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35940__auto__);

(statearr_38461[(1)] = (1));

return statearr_38461;
});
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35940__auto____1 = (function (state_38437){
while(true){
var ret_value__35941__auto__ = (function (){try{while(true){
var result__35942__auto__ = switch__35939__auto__(state_38437);
if(cljs.core.keyword_identical_QMARK_(result__35942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35942__auto__;
}
break;
}
}catch (e38462){var ex__35943__auto__ = e38462;
var statearr_38463_38484 = state_38437;
(statearr_38463_38484[(2)] = ex__35943__auto__);


if(cljs.core.seq((state_38437[(4)]))){
var statearr_38464_38485 = state_38437;
(statearr_38464_38485[(1)] = cljs.core.first((state_38437[(4)])));

} else {
throw ex__35943__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35941__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38486 = state_38437;
state_38437 = G__38486;
continue;
} else {
return ret_value__35941__auto__;
}
break;
}
});
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35940__auto__ = function(state_38437){
switch(arguments.length){
case 0:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35940__auto____0.call(this);
case 1:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35940__auto____1.call(this,state_38437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35940__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35940__auto____0;
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35940__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35940__auto____1;
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35940__auto__;
})()
})();
var state__36141__auto__ = (function (){var statearr_38465 = f__36140__auto__();
(statearr_38465[(6)] = c__36139__auto__);

return statearr_38465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36141__auto__);
}));

return c__36139__auto__;
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
