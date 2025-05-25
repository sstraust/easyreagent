goog.provide('easyreagent.fullstack.dashboard');
easyreagent.fullstack.dashboard.dashboard_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.fullstack.dashboard.load_dashboard_data = (function easyreagent$fullstack$dashboard$load_dashboard_data(){
var c__27756__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27757__auto__ = (function (){var switch__27639__auto__ = (function (state_31471){
var state_val_31487 = (state_31471[(1)]);
if((state_val_31487 === (7))){
var state_31471__$1 = state_31471;
var statearr_31514_31587 = state_31471__$1;
(statearr_31514_31587[(2)] = cljs.core.identity);

(statearr_31514_31587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (1))){
var inst_31413 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_31414 = cljs.core.PersistentHashMap.EMPTY;
var inst_31415 = [inst_31414];
var inst_31416 = cljs.core.PersistentHashMap.fromArrays(inst_31413,inst_31415);
var inst_31417 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/dashboard/getDashboardData",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_31416], 0));
var state_31471__$1 = state_31471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31471__$1,(2),inst_31417);
} else {
if((state_val_31487 === (4))){
var inst_31419 = (state_31471[(7)]);
var inst_31431 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31419);
var inst_31432 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_31431);
var inst_31433 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31432,"json");
var state_31471__$1 = state_31471;
if(inst_31433){
var statearr_31533_31588 = state_31471__$1;
(statearr_31533_31588[(1)] = (9));

} else {
var statearr_31534_31590 = state_31471__$1;
(statearr_31534_31590[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (15))){
var inst_31419 = (state_31471[(7)]);
var inst_31452 = (function (){var result__30077__auto__ = inst_31419;
return (function (){
return alert("failed to load dashboard");
});
})();
var inst_31453 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31419);
var inst_31454 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_31453);
var inst_31455 = inst_31452(inst_31454);
var state_31471__$1 = state_31471;
var statearr_31536_31592 = state_31471__$1;
(statearr_31536_31592[(2)] = inst_31455);

(statearr_31536_31592[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (13))){
var state_31471__$1 = state_31471;
var statearr_31537_31600 = state_31471__$1;
(statearr_31537_31600[(2)] = cljs.core.identity);

(statearr_31537_31600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (6))){
var state_31471__$1 = state_31471;
var statearr_31538_31605 = state_31471__$1;
(statearr_31538_31605[(2)] = null);

(statearr_31538_31605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (17))){
var inst_31458 = (state_31471[(2)]);
var state_31471__$1 = state_31471;
var statearr_31539_31607 = state_31471__$1;
(statearr_31539_31607[(2)] = inst_31458);

(statearr_31539_31607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (3))){
var state_31471__$1 = state_31471;
var statearr_31543_31614 = state_31471__$1;
(statearr_31543_31614[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (12))){
var inst_31435 = (state_31471[(8)]);
var state_31471__$1 = state_31471;
var statearr_31545_31619 = state_31471__$1;
(statearr_31545_31619[(2)] = inst_31435);

(statearr_31545_31619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (2))){
var inst_31419 = (state_31471[(7)]);
var inst_31419__$1 = (state_31471[(2)]);
var inst_31420 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31419__$1);
var inst_31421 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_31420);
var inst_31422 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31421,"success");
var state_31471__$1 = (function (){var statearr_31547 = state_31471;
(statearr_31547[(7)] = inst_31419__$1);

return statearr_31547;
})();
if(inst_31422){
var statearr_31549_31627 = state_31471__$1;
(statearr_31549_31627[(1)] = (3));

} else {
var statearr_31550_31629 = state_31471__$1;
(statearr_31550_31629[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (11))){
var inst_31460 = (state_31471[(2)]);
var state_31471__$1 = state_31471;
var statearr_31552_31641 = state_31471__$1;
(statearr_31552_31641[(2)] = inst_31460);

(statearr_31552_31641[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (9))){
var inst_31435 = (state_31471[(8)]);
var inst_31419 = (state_31471[(7)]);
var inst_31435__$1 = (function (){var result__30077__auto__ = inst_31419;
return (function (p1__31409_SHARP_){
return cljs.core.reset_BANG_(easyreagent.fullstack.dashboard.dashboard_data,p1__31409_SHARP_);
});
})();
var state_31471__$1 = (function (){var statearr_31556 = state_31471;
(statearr_31556[(8)] = inst_31435__$1);

return statearr_31556;
})();
if(cljs.core.truth_(inst_31435__$1)){
var statearr_31557_31645 = state_31471__$1;
(statearr_31557_31645[(1)] = (12));

} else {
var statearr_31558_31646 = state_31471__$1;
(statearr_31558_31646[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (5))){
var inst_31462 = (state_31471[(2)]);
var state_31471__$1 = state_31471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31471__$1,inst_31462);
} else {
if((state_val_31487 === (14))){
var inst_31419 = (state_31471[(7)]);
var inst_31439 = (state_31471[(2)]);
var inst_31441 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31419);
var inst_31442 = (inst_31439.cljs$core$IFn$_invoke$arity$1 ? inst_31439.cljs$core$IFn$_invoke$arity$1(inst_31441) : inst_31439.call(null, inst_31441));
var state_31471__$1 = state_31471;
var statearr_31562_31647 = state_31471__$1;
(statearr_31562_31647[(2)] = inst_31442);

(statearr_31562_31647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (16))){
var state_31471__$1 = state_31471;
var statearr_31564_31648 = state_31471__$1;
(statearr_31564_31648[(2)] = null);

(statearr_31564_31648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (10))){
var state_31471__$1 = state_31471;
var statearr_31565_31649 = state_31471__$1;
(statearr_31565_31649[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (8))){
var inst_31428 = (state_31471[(2)]);
var inst_31429 = (inst_31428.cljs$core$IFn$_invoke$arity$0 ? inst_31428.cljs$core$IFn$_invoke$arity$0() : inst_31428.call(null, ));
var state_31471__$1 = state_31471;
var statearr_31570_31650 = state_31471__$1;
(statearr_31570_31650[(2)] = inst_31429);

(statearr_31570_31650[(1)] = (5));


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
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto__ = null;
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto____0 = (function (){
var statearr_31572 = [null,null,null,null,null,null,null,null,null];
(statearr_31572[(0)] = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto__);

(statearr_31572[(1)] = (1));

return statearr_31572;
});
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto____1 = (function (state_31471){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__(state_31471);
if(cljs.core.keyword_identical_QMARK_(result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e31576){var ex__27643__auto__ = e31576;
var statearr_31577_31652 = state_31471;
(statearr_31577_31652[(2)] = ex__27643__auto__);


if(cljs.core.seq((state_31471[(4)]))){
var statearr_31579_31655 = state_31471;
(statearr_31579_31655[(1)] = cljs.core.first((state_31471[(4)])));

} else {
throw ex__27643__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31656 = state_31471;
state_31471 = G__31656;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto__ = function(state_31471){
switch(arguments.length){
case 0:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto____0.call(this);
case 1:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto____1.call(this,state_31471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto____0;
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto____1;
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto__;
})()
})();
var state__27758__auto__ = (function (){var statearr_31581 = f__27757__auto__();
(statearr_31581[(6)] = c__27756__auto__);

return statearr_31581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27758__auto__);
}));

return c__27756__auto__;
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
