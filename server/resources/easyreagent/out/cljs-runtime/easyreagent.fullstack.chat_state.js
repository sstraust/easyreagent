goog.provide('easyreagent.fullstack.chat_state');
easyreagent.fullstack.chat_state.all_messages = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
easyreagent.fullstack.chat_state.get_socket_url = (function easyreagent$fullstack$chat_state$get_socket_url(){
var connection_type = (cljs.core.truth_(location.host.startsWith("localhost"))?"ws://":"wss://");
var socket_url = [connection_type,cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host),"/easyreagent/fullstack/chat/ws"].join('');
return socket_url;
});
easyreagent.fullstack.chat_state.connect_web_socket = (function easyreagent$fullstack$chat_state$connect_web_socket(chat_id){
var temp__5823__auto__ = (new WebSocket(easyreagent.fullstack.chat_state.get_socket_url()));
if(cljs.core.truth_(temp__5823__auto__)){
var chan = temp__5823__auto__;
(chan.onopen = (function (){
chan.send(easyreagent.util.write_json(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),chat_id], null)));

return setInterval((function (){
return chan.send("beat");
}),(5000));
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(easyreagent.fullstack.chat_state.all_messages,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chat_id,new cljs.core.Keyword(null,"socket","socket",59137063)], null),chan);

return (chan.onmessage = (function (msg){
easyreagent.fullstack.chat_state.zz = msg;

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(easyreagent.fullstack.chat_state.all_messages,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [chat_id,new cljs.core.Keyword(null,"messages","messages",345434482)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([easyreagent.util.read_json_keywordize(msg.data)], 0));
}));
} else {
return null;
}
});
easyreagent.fullstack.chat_state.fetch_messages = (function easyreagent$fullstack$chat_state$fetch_messages(chat_id){
var c__27756__auto___32090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27757__auto__ = (function (){var switch__27639__auto__ = (function (state_31973){
var state_val_31974 = (state_31973[(1)]);
if((state_val_31974 === (7))){
var state_31973__$1 = state_31973;
var statearr_31975_32091 = state_31973__$1;
(statearr_31975_32091[(2)] = cljs.core.identity);

(statearr_31975_32091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (1))){
var inst_31929 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_31930 = [new cljs.core.Keyword(null,"chat-id","chat-id",1708052118)];
var inst_31931 = [chat_id];
var inst_31932 = cljs.core.PersistentHashMap.fromArrays(inst_31930,inst_31931);
var inst_31933 = [inst_31932];
var inst_31934 = cljs.core.PersistentHashMap.fromArrays(inst_31929,inst_31933);
var inst_31935 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/chat/getConversationMessages",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_31934], 0));
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31973__$1,(2),inst_31935);
} else {
if((state_val_31974 === (4))){
var inst_31937 = (state_31973[(7)]);
var inst_31948 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31937);
var inst_31949 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_31948);
var inst_31950 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31949,"json");
var state_31973__$1 = state_31973;
if(inst_31950){
var statearr_31976_32092 = state_31973__$1;
(statearr_31976_32092[(1)] = (9));

} else {
var statearr_31977_32093 = state_31973__$1;
(statearr_31977_32093[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (15))){
var inst_31937 = (state_31973[(7)]);
var inst_31961 = (function (){var result__30077__auto__ = inst_31937;
return (function (){
return alert("failed to load chat messages");
});
})();
var inst_31962 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31937);
var inst_31963 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_31962);
var inst_31964 = inst_31961(inst_31963);
var state_31973__$1 = state_31973;
var statearr_31978_32094 = state_31973__$1;
(statearr_31978_32094[(2)] = inst_31964);

(statearr_31978_32094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (13))){
var state_31973__$1 = state_31973;
var statearr_31979_32095 = state_31973__$1;
(statearr_31979_32095[(2)] = cljs.core.identity);

(statearr_31979_32095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (6))){
var state_31973__$1 = state_31973;
var statearr_31980_32096 = state_31973__$1;
(statearr_31980_32096[(2)] = null);

(statearr_31980_32096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (17))){
var inst_31967 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
var statearr_31981_32097 = state_31973__$1;
(statearr_31981_32097[(2)] = inst_31967);

(statearr_31981_32097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (3))){
var state_31973__$1 = state_31973;
var statearr_31983_32098 = state_31973__$1;
(statearr_31983_32098[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (12))){
var inst_31952 = (state_31973[(8)]);
var state_31973__$1 = state_31973;
var statearr_31984_32099 = state_31973__$1;
(statearr_31984_32099[(2)] = inst_31952);

(statearr_31984_32099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (2))){
var inst_31937 = (state_31973[(7)]);
var inst_31937__$1 = (state_31973[(2)]);
var inst_31938 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31937__$1);
var inst_31939 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_31938);
var inst_31940 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31939,"success");
var state_31973__$1 = (function (){var statearr_31985 = state_31973;
(statearr_31985[(7)] = inst_31937__$1);

return statearr_31985;
})();
if(inst_31940){
var statearr_31986_32100 = state_31973__$1;
(statearr_31986_32100[(1)] = (3));

} else {
var statearr_31987_32101 = state_31973__$1;
(statearr_31987_32101[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (11))){
var inst_31969 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
var statearr_31988_32102 = state_31973__$1;
(statearr_31988_32102[(2)] = inst_31969);

(statearr_31988_32102[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (9))){
var inst_31937 = (state_31973[(7)]);
var inst_31952 = (state_31973[(8)]);
var inst_31952__$1 = (function (){var result__30077__auto__ = inst_31937;
return (function (p1__31928_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(easyreagent.fullstack.chat_state.all_messages,cljs.core.assoc,chat_id,p1__31928_SHARP_);
});
})();
var state_31973__$1 = (function (){var statearr_31989 = state_31973;
(statearr_31989[(8)] = inst_31952__$1);

return statearr_31989;
})();
if(cljs.core.truth_(inst_31952__$1)){
var statearr_31990_32103 = state_31973__$1;
(statearr_31990_32103[(1)] = (12));

} else {
var statearr_31991_32104 = state_31973__$1;
(statearr_31991_32104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (5))){
var inst_31971 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31973__$1,inst_31971);
} else {
if((state_val_31974 === (14))){
var inst_31937 = (state_31973[(7)]);
var inst_31956 = (state_31973[(2)]);
var inst_31957 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31937);
var inst_31958 = (inst_31956.cljs$core$IFn$_invoke$arity$1 ? inst_31956.cljs$core$IFn$_invoke$arity$1(inst_31957) : inst_31956.call(null, inst_31957));
var state_31973__$1 = state_31973;
var statearr_31992_32105 = state_31973__$1;
(statearr_31992_32105[(2)] = inst_31958);

(statearr_31992_32105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (16))){
var state_31973__$1 = state_31973;
var statearr_31993_32106 = state_31973__$1;
(statearr_31993_32106[(2)] = null);

(statearr_31993_32106[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (10))){
var state_31973__$1 = state_31973;
var statearr_31994_32107 = state_31973__$1;
(statearr_31994_32107[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (8))){
var inst_31945 = (state_31973[(2)]);
var inst_31946 = (inst_31945.cljs$core$IFn$_invoke$arity$0 ? inst_31945.cljs$core$IFn$_invoke$arity$0() : inst_31945.call(null, ));
var state_31973__$1 = state_31973;
var statearr_31996_32108 = state_31973__$1;
(statearr_31996_32108[(2)] = inst_31946);

(statearr_31996_32108[(1)] = (5));


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
var easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__27640__auto__ = null;
var easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__27640__auto____0 = (function (){
var statearr_31997 = [null,null,null,null,null,null,null,null,null];
(statearr_31997[(0)] = easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__27640__auto__);

(statearr_31997[(1)] = (1));

return statearr_31997;
});
var easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__27640__auto____1 = (function (state_31973){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__(state_31973);
if(cljs.core.keyword_identical_QMARK_(result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e31998){var ex__27643__auto__ = e31998;
var statearr_31999_32109 = state_31973;
(statearr_31999_32109[(2)] = ex__27643__auto__);


if(cljs.core.seq((state_31973[(4)]))){
var statearr_32000_32110 = state_31973;
(statearr_32000_32110[(1)] = cljs.core.first((state_31973[(4)])));

} else {
throw ex__27643__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32111 = state_31973;
state_31973 = G__32111;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__27640__auto__ = function(state_31973){
switch(arguments.length){
case 0:
return easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__27640__auto____0.call(this);
case 1:
return easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__27640__auto____1.call(this,state_31973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__27640__auto____0;
easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__27640__auto____1;
return easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__27640__auto__;
})()
})();
var state__27758__auto__ = (function (){var statearr_32001 = f__27757__auto__();
(statearr_32001[(6)] = c__27756__auto___32090);

return statearr_32001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27758__auto__);
}));


return easyreagent.fullstack.chat_state.connect_web_socket(chat_id);
});
easyreagent.fullstack.chat_state.fetch_messages_once = cljs.core.memoize(easyreagent.fullstack.chat_state.fetch_messages);
easyreagent.fullstack.chat_state.send_message = (function easyreagent$fullstack$chat_state$send_message(var_args){
var args__5772__auto__ = [];
var len__5766__auto___32112 = arguments.length;
var i__5767__auto___32113 = (0);
while(true){
if((i__5767__auto___32113 < len__5766__auto___32112)){
args__5772__auto__.push((arguments[i__5767__auto___32113]));

var G__32114 = (i__5767__auto___32113 + (1));
i__5767__auto___32113 = G__32114;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return easyreagent.fullstack.chat_state.send_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(easyreagent.fullstack.chat_state.send_message.cljs$core$IFn$_invoke$arity$variadic = (function (chat_id,message,p__32006){
var map__32007 = p__32006;
var map__32007__$1 = cljs.core.__destructure_map(map__32007);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32007__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var c__27756__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27757__auto__ = (function (){var switch__27639__auto__ = (function (state_32056){
var state_val_32057 = (state_32056[(1)]);
if((state_val_32057 === (7))){
var state_32056__$1 = state_32056;
var statearr_32058_32119 = state_32056__$1;
(statearr_32058_32119[(2)] = cljs.core.identity);

(statearr_32058_32119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (20))){
var inst_32050 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32059_32120 = state_32056__$1;
(statearr_32059_32120[(2)] = inst_32050);

(statearr_32059_32120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (1))){
var inst_32008 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_32009 = [new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),new cljs.core.Keyword(null,"message-contents","message-contents",-126501954)];
var inst_32010 = [chat_id,message];
var inst_32011 = cljs.core.PersistentHashMap.fromArrays(inst_32009,inst_32010);
var inst_32012 = [inst_32011];
var inst_32013 = cljs.core.PersistentHashMap.fromArrays(inst_32008,inst_32012);
var inst_32014 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/chat/sendNewMessage",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32013], 0));
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32056__$1,(2),inst_32014);
} else {
if((state_val_32057 === (4))){
var inst_32016 = (state_32056[(7)]);
var inst_32032 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32016);
var inst_32033 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_32032);
var inst_32034 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32033,"json");
var state_32056__$1 = state_32056;
if(inst_32034){
var statearr_32060_32121 = state_32056__$1;
(statearr_32060_32121[(1)] = (12));

} else {
var statearr_32061_32122 = state_32056__$1;
(statearr_32061_32122[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (15))){
var state_32056__$1 = state_32056;
var statearr_32062_32123 = state_32056__$1;
(statearr_32062_32123[(2)] = null);

(statearr_32062_32123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (13))){
var state_32056__$1 = state_32056;
var statearr_32063_32124 = state_32056__$1;
(statearr_32063_32124[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (6))){
var inst_32021 = (state_32056[(8)]);
var state_32056__$1 = state_32056;
var statearr_32065_32125 = state_32056__$1;
(statearr_32065_32125[(2)] = inst_32021);

(statearr_32065_32125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (17))){
var inst_32016 = (state_32056[(7)]);
var inst_32039 = (state_32056[(2)]);
var inst_32040 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32016);
var inst_32041 = (inst_32039.cljs$core$IFn$_invoke$arity$1 ? inst_32039.cljs$core$IFn$_invoke$arity$1(inst_32040) : inst_32039.call(null, inst_32040));
var state_32056__$1 = state_32056;
var statearr_32066_32126 = state_32056__$1;
(statearr_32066_32126[(2)] = inst_32041);

(statearr_32066_32126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (3))){
var inst_32021 = (state_32056[(8)]);
var inst_32021__$1 = callback;
var state_32056__$1 = (function (){var statearr_32067 = state_32056;
(statearr_32067[(8)] = inst_32021__$1);

return statearr_32067;
})();
if(cljs.core.truth_(inst_32021__$1)){
var statearr_32068_32127 = state_32056__$1;
(statearr_32068_32127[(1)] = (6));

} else {
var statearr_32069_32128 = state_32056__$1;
(statearr_32069_32128[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (12))){
var state_32056__$1 = state_32056;
var statearr_32071_32129 = state_32056__$1;
(statearr_32071_32129[(1)] = (16));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (2))){
var inst_32016 = (state_32056[(7)]);
var inst_32016__$1 = (state_32056[(2)]);
var inst_32017 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32016__$1);
var inst_32018 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_32017);
var inst_32019 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32018,"success");
var state_32056__$1 = (function (){var statearr_32072 = state_32056;
(statearr_32072[(7)] = inst_32016__$1);

return statearr_32072;
})();
if(inst_32019){
var statearr_32073_32130 = state_32056__$1;
(statearr_32073_32130[(1)] = (3));

} else {
var statearr_32074_32131 = state_32056__$1;
(statearr_32074_32131[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (19))){
var state_32056__$1 = state_32056;
var statearr_32075_32132 = state_32056__$1;
(statearr_32075_32132[(2)] = null);

(statearr_32075_32132[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (11))){
var inst_32029 = (state_32056[(2)]);
var inst_32030 = (inst_32029.cljs$core$IFn$_invoke$arity$0 ? inst_32029.cljs$core$IFn$_invoke$arity$0() : inst_32029.call(null, ));
var state_32056__$1 = state_32056;
var statearr_32076_32133 = state_32056__$1;
(statearr_32076_32133[(2)] = inst_32030);

(statearr_32076_32133[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (9))){
var inst_32025 = (state_32056[(9)]);
var state_32056__$1 = state_32056;
var statearr_32077_32134 = state_32056__$1;
(statearr_32077_32134[(2)] = inst_32025);

(statearr_32077_32134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (5))){
var inst_32054 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32056__$1,inst_32054);
} else {
if((state_val_32057 === (14))){
var inst_32052 = (state_32056[(2)]);
var state_32056__$1 = state_32056;
var statearr_32078_32135 = state_32056__$1;
(statearr_32078_32135[(2)] = inst_32052);

(statearr_32078_32135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (16))){
var state_32056__$1 = state_32056;
var statearr_32079_32136 = state_32056__$1;
(statearr_32079_32136[(2)] = cljs.core.identity);

(statearr_32079_32136[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (10))){
var state_32056__$1 = state_32056;
var statearr_32080_32137 = state_32056__$1;
(statearr_32080_32137[(2)] = cljs.core.identity);

(statearr_32080_32137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (18))){
var inst_32016 = (state_32056[(7)]);
var inst_32044 = (function (){var result__30077__auto__ = inst_32016;
return (function (p1__32002_SHARP_){
return alert(["message failed to send",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32002_SHARP_)].join(''));
});
})();
var inst_32045 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32016);
var inst_32046 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_32045);
var inst_32047 = inst_32044(inst_32046);
var state_32056__$1 = state_32056;
var statearr_32081_32138 = state_32056__$1;
(statearr_32081_32138[(2)] = inst_32047);

(statearr_32081_32138[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32057 === (8))){
var inst_32025 = (state_32056[(9)]);
var inst_32025__$1 = (state_32056[(2)]);
var state_32056__$1 = (function (){var statearr_32082 = state_32056;
(statearr_32082[(9)] = inst_32025__$1);

return statearr_32082;
})();
if(cljs.core.truth_(inst_32025__$1)){
var statearr_32083_32139 = state_32056__$1;
(statearr_32083_32139[(1)] = (9));

} else {
var statearr_32084_32140 = state_32056__$1;
(statearr_32084_32140[(1)] = (10));

}

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
}
}
}
});
return (function() {
var easyreagent$fullstack$chat_state$state_machine__27640__auto__ = null;
var easyreagent$fullstack$chat_state$state_machine__27640__auto____0 = (function (){
var statearr_32085 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32085[(0)] = easyreagent$fullstack$chat_state$state_machine__27640__auto__);

(statearr_32085[(1)] = (1));

return statearr_32085;
});
var easyreagent$fullstack$chat_state$state_machine__27640__auto____1 = (function (state_32056){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__(state_32056);
if(cljs.core.keyword_identical_QMARK_(result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e32086){var ex__27643__auto__ = e32086;
var statearr_32087_32141 = state_32056;
(statearr_32087_32141[(2)] = ex__27643__auto__);


if(cljs.core.seq((state_32056[(4)]))){
var statearr_32088_32142 = state_32056;
(statearr_32088_32142[(1)] = cljs.core.first((state_32056[(4)])));

} else {
throw ex__27643__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32143 = state_32056;
state_32056 = G__32143;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
easyreagent$fullstack$chat_state$state_machine__27640__auto__ = function(state_32056){
switch(arguments.length){
case 0:
return easyreagent$fullstack$chat_state$state_machine__27640__auto____0.call(this);
case 1:
return easyreagent$fullstack$chat_state$state_machine__27640__auto____1.call(this,state_32056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$chat_state$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$chat_state$state_machine__27640__auto____0;
easyreagent$fullstack$chat_state$state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$chat_state$state_machine__27640__auto____1;
return easyreagent$fullstack$chat_state$state_machine__27640__auto__;
})()
})();
var state__27758__auto__ = (function (){var statearr_32089 = f__27757__auto__();
(statearr_32089[(6)] = c__27756__auto__);

return statearr_32089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27758__auto__);
}));

return c__27756__auto__;
}));

(easyreagent.fullstack.chat_state.send_message.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(easyreagent.fullstack.chat_state.send_message.cljs$lang$applyTo = (function (seq32003){
var G__32004 = cljs.core.first(seq32003);
var seq32003__$1 = cljs.core.next(seq32003);
var G__32005 = cljs.core.first(seq32003__$1);
var seq32003__$2 = cljs.core.next(seq32003__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32004,G__32005,seq32003__$2);
}));


//# sourceMappingURL=easyreagent.fullstack.chat_state.js.map
