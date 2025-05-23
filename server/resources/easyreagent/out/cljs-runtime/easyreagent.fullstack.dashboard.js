goog.provide('easyreagent.fullstack.dashboard');
easyreagent.fullstack.dashboard.dashboard_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.fullstack.dashboard.load_dashboard_data = (function easyreagent$fullstack$dashboard$load_dashboard_data(){
var c__27756__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27757__auto__ = (function (){var switch__27639__auto__ = (function (state_28144){
var state_val_28145 = (state_28144[(1)]);
if((state_val_28145 === (7))){
var state_28144__$1 = state_28144;
var statearr_28146_28173 = state_28144__$1;
(statearr_28146_28173[(2)] = cljs.core.identity);

(statearr_28146_28173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (1))){
var inst_28094 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_28095 = cljs.core.PersistentHashMap.EMPTY;
var inst_28096 = [inst_28095];
var inst_28097 = cljs.core.PersistentHashMap.fromArrays(inst_28094,inst_28096);
var inst_28098 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/dashboard/getDashboardData",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_28097], 0));
var state_28144__$1 = state_28144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28144__$1,(2),inst_28098);
} else {
if((state_val_28145 === (4))){
var inst_28100 = (state_28144[(7)]);
var inst_28119 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28100);
var inst_28120 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_28119);
var inst_28121 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28120,"json");
var state_28144__$1 = state_28144;
if(inst_28121){
var statearr_28147_28174 = state_28144__$1;
(statearr_28147_28174[(1)] = (9));

} else {
var statearr_28148_28175 = state_28144__$1;
(statearr_28148_28175[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (15))){
var inst_28100 = (state_28144[(7)]);
var inst_28132 = (function (){var result__28082__auto__ = inst_28100;
return (function (){
return alert("failed to load dashboard");
});
})();
var inst_28133 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28100);
var inst_28134 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_28133);
var inst_28135 = inst_28132(inst_28134);
var state_28144__$1 = state_28144;
var statearr_28149_28176 = state_28144__$1;
(statearr_28149_28176[(2)] = inst_28135);

(statearr_28149_28176[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (13))){
var state_28144__$1 = state_28144;
var statearr_28150_28177 = state_28144__$1;
(statearr_28150_28177[(2)] = cljs.core.identity);

(statearr_28150_28177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (6))){
var state_28144__$1 = state_28144;
var statearr_28151_28178 = state_28144__$1;
(statearr_28151_28178[(2)] = null);

(statearr_28151_28178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (17))){
var inst_28138 = (state_28144[(2)]);
var state_28144__$1 = state_28144;
var statearr_28152_28179 = state_28144__$1;
(statearr_28152_28179[(2)] = inst_28138);

(statearr_28152_28179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (3))){
var state_28144__$1 = state_28144;
var statearr_28154_28180 = state_28144__$1;
(statearr_28154_28180[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (12))){
var inst_28123 = (state_28144[(8)]);
var state_28144__$1 = state_28144;
var statearr_28155_28181 = state_28144__$1;
(statearr_28155_28181[(2)] = inst_28123);

(statearr_28155_28181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (2))){
var inst_28100 = (state_28144[(7)]);
var inst_28100__$1 = (state_28144[(2)]);
var inst_28107 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28100__$1);
var inst_28108 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_28107);
var inst_28109 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28108,"success");
var state_28144__$1 = (function (){var statearr_28156 = state_28144;
(statearr_28156[(7)] = inst_28100__$1);

return statearr_28156;
})();
if(inst_28109){
var statearr_28157_28182 = state_28144__$1;
(statearr_28157_28182[(1)] = (3));

} else {
var statearr_28158_28183 = state_28144__$1;
(statearr_28158_28183[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (11))){
var inst_28140 = (state_28144[(2)]);
var state_28144__$1 = state_28144;
var statearr_28159_28184 = state_28144__$1;
(statearr_28159_28184[(2)] = inst_28140);

(statearr_28159_28184[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (9))){
var inst_28123 = (state_28144[(8)]);
var inst_28100 = (state_28144[(7)]);
var inst_28123__$1 = (function (){var result__28082__auto__ = inst_28100;
return (function (p1__28092_SHARP_){
return cljs.core.reset_BANG_(easyreagent.fullstack.dashboard.dashboard_data,p1__28092_SHARP_);
});
})();
var state_28144__$1 = (function (){var statearr_28160 = state_28144;
(statearr_28160[(8)] = inst_28123__$1);

return statearr_28160;
})();
if(cljs.core.truth_(inst_28123__$1)){
var statearr_28161_28185 = state_28144__$1;
(statearr_28161_28185[(1)] = (12));

} else {
var statearr_28162_28186 = state_28144__$1;
(statearr_28162_28186[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (5))){
var inst_28142 = (state_28144[(2)]);
var state_28144__$1 = state_28144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28144__$1,inst_28142);
} else {
if((state_val_28145 === (14))){
var inst_28100 = (state_28144[(7)]);
var inst_28127 = (state_28144[(2)]);
var inst_28128 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28100);
var inst_28129 = (inst_28127.cljs$core$IFn$_invoke$arity$1 ? inst_28127.cljs$core$IFn$_invoke$arity$1(inst_28128) : inst_28127.call(null, inst_28128));
var state_28144__$1 = state_28144;
var statearr_28163_28187 = state_28144__$1;
(statearr_28163_28187[(2)] = inst_28129);

(statearr_28163_28187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (16))){
var state_28144__$1 = state_28144;
var statearr_28164_28188 = state_28144__$1;
(statearr_28164_28188[(2)] = null);

(statearr_28164_28188[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (10))){
var state_28144__$1 = state_28144;
var statearr_28165_28189 = state_28144__$1;
(statearr_28165_28189[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28145 === (8))){
var inst_28116 = (state_28144[(2)]);
var inst_28117 = (inst_28116.cljs$core$IFn$_invoke$arity$0 ? inst_28116.cljs$core$IFn$_invoke$arity$0() : inst_28116.call(null, ));
var state_28144__$1 = state_28144;
var statearr_28167_28190 = state_28144__$1;
(statearr_28167_28190[(2)] = inst_28117);

(statearr_28167_28190[(1)] = (5));


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
var statearr_28168 = [null,null,null,null,null,null,null,null,null];
(statearr_28168[(0)] = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto__);

(statearr_28168[(1)] = (1));

return statearr_28168;
});
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto____1 = (function (state_28144){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__(state_28144);
if(cljs.core.keyword_identical_QMARK_(result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e28169){var ex__27643__auto__ = e28169;
var statearr_28170_28191 = state_28144;
(statearr_28170_28191[(2)] = ex__27643__auto__);


if(cljs.core.seq((state_28144[(4)]))){
var statearr_28171_28192 = state_28144;
(statearr_28171_28192[(1)] = cljs.core.first((state_28144[(4)])));

} else {
throw ex__27643__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28193 = state_28144;
state_28144 = G__28193;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto__ = function(state_28144){
switch(arguments.length){
case 0:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto____0.call(this);
case 1:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto____1.call(this,state_28144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto____0;
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto____1;
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__27640__auto__;
})()
})();
var state__27758__auto__ = (function (){var statearr_28172 = f__27757__auto__();
(statearr_28172[(6)] = c__27756__auto__);

return statearr_28172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27758__auto__);
}));

return c__27756__auto__;
});
easyreagent.fullstack.dashboard.dashboard = (function easyreagent$fullstack$dashboard$dashboard(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Dashboard!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Users count: ",new cljs.core.Keyword(null,"users-count","users-count",-712835550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(easyreagent.fullstack.dashboard.dashboard_data))], null)], null);
});
easyreagent.fullstack.dashboard.load_dashboard = (function easyreagent$fullstack$dashboard$load_dashboard(){
easyreagent.fullstack.dashboard.load_dashboard_data();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.fullstack.dashboard.dashboard], null),document.getElementById("all-content"));
});
goog.exportSymbol('easyreagent.fullstack.dashboard.load_dashboard', easyreagent.fullstack.dashboard.load_dashboard);

//# sourceMappingURL=easyreagent.fullstack.dashboard.js.map
