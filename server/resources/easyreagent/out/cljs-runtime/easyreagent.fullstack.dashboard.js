goog.provide('easyreagent.fullstack.dashboard');
easyreagent.fullstack.dashboard.dashboard_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
easyreagent.fullstack.dashboard.load_dashboard_data = (function easyreagent$fullstack$dashboard$load_dashboard_data(){
var c__35291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35292__auto__ = (function (){var switch__35091__auto__ = (function (state_37886){
var state_val_37887 = (state_37886[(1)]);
if((state_val_37887 === (7))){
var state_37886__$1 = state_37886;
var statearr_37888_37915 = state_37886__$1;
(statearr_37888_37915[(2)] = cljs.core.identity);

(statearr_37888_37915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (1))){
var inst_37844 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_37845 = cljs.core.PersistentHashMap.EMPTY;
var inst_37846 = [inst_37845];
var inst_37847 = cljs.core.PersistentHashMap.fromArrays(inst_37844,inst_37846);
var inst_37848 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/dashboard/getDashboardData",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37847], 0));
var state_37886__$1 = state_37886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37886__$1,(2),inst_37848);
} else {
if((state_val_37887 === (4))){
var inst_37850 = (state_37886[(7)]);
var inst_37861 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37850);
var inst_37862 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_37861);
var inst_37863 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37862,"json");
var state_37886__$1 = state_37886;
if(inst_37863){
var statearr_37889_37916 = state_37886__$1;
(statearr_37889_37916[(1)] = (9));

} else {
var statearr_37890_37917 = state_37886__$1;
(statearr_37890_37917[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (15))){
var inst_37850 = (state_37886[(7)]);
var inst_37874 = (function (){var result__37527__auto__ = inst_37850;
return (function (){
return alert("failed to load dashboard");
});
})();
var inst_37875 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37850);
var inst_37876 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_37875);
var inst_37877 = inst_37874(inst_37876);
var state_37886__$1 = state_37886;
var statearr_37891_37918 = state_37886__$1;
(statearr_37891_37918[(2)] = inst_37877);

(statearr_37891_37918[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (13))){
var state_37886__$1 = state_37886;
var statearr_37892_37919 = state_37886__$1;
(statearr_37892_37919[(2)] = cljs.core.identity);

(statearr_37892_37919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (6))){
var state_37886__$1 = state_37886;
var statearr_37893_37920 = state_37886__$1;
(statearr_37893_37920[(2)] = null);

(statearr_37893_37920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (17))){
var inst_37880 = (state_37886[(2)]);
var state_37886__$1 = state_37886;
var statearr_37894_37921 = state_37886__$1;
(statearr_37894_37921[(2)] = inst_37880);

(statearr_37894_37921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (3))){
var state_37886__$1 = state_37886;
var statearr_37896_37922 = state_37886__$1;
(statearr_37896_37922[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (12))){
var inst_37865 = (state_37886[(8)]);
var state_37886__$1 = state_37886;
var statearr_37897_37923 = state_37886__$1;
(statearr_37897_37923[(2)] = inst_37865);

(statearr_37897_37923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (2))){
var inst_37850 = (state_37886[(7)]);
var inst_37850__$1 = (state_37886[(2)]);
var inst_37851 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37850__$1);
var inst_37852 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_37851);
var inst_37853 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37852,"success");
var state_37886__$1 = (function (){var statearr_37898 = state_37886;
(statearr_37898[(7)] = inst_37850__$1);

return statearr_37898;
})();
if(inst_37853){
var statearr_37899_37924 = state_37886__$1;
(statearr_37899_37924[(1)] = (3));

} else {
var statearr_37900_37925 = state_37886__$1;
(statearr_37900_37925[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (11))){
var inst_37882 = (state_37886[(2)]);
var state_37886__$1 = state_37886;
var statearr_37901_37926 = state_37886__$1;
(statearr_37901_37926[(2)] = inst_37882);

(statearr_37901_37926[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (9))){
var inst_37865 = (state_37886[(8)]);
var inst_37850 = (state_37886[(7)]);
var inst_37865__$1 = (function (){var result__37527__auto__ = inst_37850;
return (function (p1__37843_SHARP_){
return cljs.core.reset_BANG_(easyreagent.fullstack.dashboard.dashboard_data,p1__37843_SHARP_);
});
})();
var state_37886__$1 = (function (){var statearr_37902 = state_37886;
(statearr_37902[(8)] = inst_37865__$1);

return statearr_37902;
})();
if(cljs.core.truth_(inst_37865__$1)){
var statearr_37903_37927 = state_37886__$1;
(statearr_37903_37927[(1)] = (12));

} else {
var statearr_37904_37928 = state_37886__$1;
(statearr_37904_37928[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (5))){
var inst_37884 = (state_37886[(2)]);
var state_37886__$1 = state_37886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37886__$1,inst_37884);
} else {
if((state_val_37887 === (14))){
var inst_37850 = (state_37886[(7)]);
var inst_37869 = (state_37886[(2)]);
var inst_37870 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37850);
var inst_37871 = (inst_37869.cljs$core$IFn$_invoke$arity$1 ? inst_37869.cljs$core$IFn$_invoke$arity$1(inst_37870) : inst_37869.call(null, inst_37870));
var state_37886__$1 = state_37886;
var statearr_37905_37929 = state_37886__$1;
(statearr_37905_37929[(2)] = inst_37871);

(statearr_37905_37929[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (16))){
var state_37886__$1 = state_37886;
var statearr_37906_37930 = state_37886__$1;
(statearr_37906_37930[(2)] = null);

(statearr_37906_37930[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (10))){
var state_37886__$1 = state_37886;
var statearr_37907_37931 = state_37886__$1;
(statearr_37907_37931[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37887 === (8))){
var inst_37858 = (state_37886[(2)]);
var inst_37859 = (inst_37858.cljs$core$IFn$_invoke$arity$0 ? inst_37858.cljs$core$IFn$_invoke$arity$0() : inst_37858.call(null, ));
var state_37886__$1 = state_37886;
var statearr_37909_37932 = state_37886__$1;
(statearr_37909_37932[(2)] = inst_37859);

(statearr_37909_37932[(1)] = (5));


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
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35092__auto__ = null;
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35092__auto____0 = (function (){
var statearr_37910 = [null,null,null,null,null,null,null,null,null];
(statearr_37910[(0)] = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35092__auto__);

(statearr_37910[(1)] = (1));

return statearr_37910;
});
var easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35092__auto____1 = (function (state_37886){
while(true){
var ret_value__35093__auto__ = (function (){try{while(true){
var result__35094__auto__ = switch__35091__auto__(state_37886);
if(cljs.core.keyword_identical_QMARK_(result__35094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35094__auto__;
}
break;
}
}catch (e37911){var ex__35095__auto__ = e37911;
var statearr_37912_37933 = state_37886;
(statearr_37912_37933[(2)] = ex__35095__auto__);


if(cljs.core.seq((state_37886[(4)]))){
var statearr_37913_37934 = state_37886;
(statearr_37913_37934[(1)] = cljs.core.first((state_37886[(4)])));

} else {
throw ex__35095__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37935 = state_37886;
state_37886 = G__37935;
continue;
} else {
return ret_value__35093__auto__;
}
break;
}
});
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35092__auto__ = function(state_37886){
switch(arguments.length){
case 0:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35092__auto____0.call(this);
case 1:
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35092__auto____1.call(this,state_37886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35092__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35092__auto____0;
easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35092__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35092__auto____1;
return easyreagent$fullstack$dashboard$load_dashboard_data_$_state_machine__35092__auto__;
})()
})();
var state__35293__auto__ = (function (){var statearr_37914 = f__35292__auto__();
(statearr_37914[(6)] = c__35291__auto__);

return statearr_37914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35293__auto__);
}));

return c__35291__auto__;
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
