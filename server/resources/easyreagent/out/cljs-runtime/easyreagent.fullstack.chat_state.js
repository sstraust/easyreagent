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
var c__21474__auto___23992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21475__auto__ = (function (){var switch__21436__auto__ = (function (state_23852){
var state_val_23853 = (state_23852[(1)]);
if((state_val_23853 === (7))){
var state_23852__$1 = state_23852;
var statearr_23856_23993 = state_23852__$1;
(statearr_23856_23993[(2)] = cljs.core.identity);

(statearr_23856_23993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (1))){
var inst_23807 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_23808 = [new cljs.core.Keyword(null,"chat-id","chat-id",1708052118)];
var inst_23809 = [chat_id];
var inst_23810 = cljs.core.PersistentHashMap.fromArrays(inst_23808,inst_23809);
var inst_23811 = [inst_23810];
var inst_23812 = cljs.core.PersistentHashMap.fromArrays(inst_23807,inst_23811);
var inst_23813 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/chat/getConversationMessages",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_23812], 0));
var state_23852__$1 = state_23852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23852__$1,(2),inst_23813);
} else {
if((state_val_23853 === (4))){
var inst_23815 = (state_23852[(7)]);
var inst_23826 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23815);
var inst_23827 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_23826);
var inst_23828 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23827,"json");
var state_23852__$1 = state_23852;
if(inst_23828){
var statearr_23858_23994 = state_23852__$1;
(statearr_23858_23994[(1)] = (9));

} else {
var statearr_23859_23995 = state_23852__$1;
(statearr_23859_23995[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (15))){
var inst_23815 = (state_23852[(7)]);
var inst_23840 = (function (){var result__23682__auto__ = inst_23815;
return (function (){
return alert("failed to load chat messages");
});
})();
var inst_23841 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23815);
var inst_23842 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_23841);
var inst_23843 = inst_23840(inst_23842);
var state_23852__$1 = state_23852;
var statearr_23863_23996 = state_23852__$1;
(statearr_23863_23996[(2)] = inst_23843);

(statearr_23863_23996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (13))){
var state_23852__$1 = state_23852;
var statearr_23865_23997 = state_23852__$1;
(statearr_23865_23997[(2)] = cljs.core.identity);

(statearr_23865_23997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (6))){
var state_23852__$1 = state_23852;
var statearr_23866_23998 = state_23852__$1;
(statearr_23866_23998[(2)] = null);

(statearr_23866_23998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (17))){
var inst_23846 = (state_23852[(2)]);
var state_23852__$1 = state_23852;
var statearr_23867_23999 = state_23852__$1;
(statearr_23867_23999[(2)] = inst_23846);

(statearr_23867_23999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (3))){
var state_23852__$1 = state_23852;
var statearr_23869_24000 = state_23852__$1;
(statearr_23869_24000[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (12))){
var inst_23831 = (state_23852[(8)]);
var state_23852__$1 = state_23852;
var statearr_23872_24001 = state_23852__$1;
(statearr_23872_24001[(2)] = inst_23831);

(statearr_23872_24001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (2))){
var inst_23815 = (state_23852[(7)]);
var inst_23815__$1 = (state_23852[(2)]);
var inst_23816 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23815__$1);
var inst_23817 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_23816);
var inst_23818 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23817,"success");
var state_23852__$1 = (function (){var statearr_23873 = state_23852;
(statearr_23873[(7)] = inst_23815__$1);

return statearr_23873;
})();
if(inst_23818){
var statearr_23874_24002 = state_23852__$1;
(statearr_23874_24002[(1)] = (3));

} else {
var statearr_23875_24003 = state_23852__$1;
(statearr_23875_24003[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (11))){
var inst_23848 = (state_23852[(2)]);
var state_23852__$1 = state_23852;
var statearr_23876_24004 = state_23852__$1;
(statearr_23876_24004[(2)] = inst_23848);

(statearr_23876_24004[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (9))){
var inst_23815 = (state_23852[(7)]);
var inst_23831 = (state_23852[(8)]);
var inst_23831__$1 = (function (){var result__23682__auto__ = inst_23815;
return (function (p1__23805_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(easyreagent.fullstack.chat_state.all_messages,cljs.core.assoc,chat_id,p1__23805_SHARP_);
});
})();
var state_23852__$1 = (function (){var statearr_23877 = state_23852;
(statearr_23877[(8)] = inst_23831__$1);

return statearr_23877;
})();
if(cljs.core.truth_(inst_23831__$1)){
var statearr_23878_24005 = state_23852__$1;
(statearr_23878_24005[(1)] = (12));

} else {
var statearr_23879_24006 = state_23852__$1;
(statearr_23879_24006[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (5))){
var inst_23850 = (state_23852[(2)]);
var state_23852__$1 = state_23852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23852__$1,inst_23850);
} else {
if((state_val_23853 === (14))){
var inst_23815 = (state_23852[(7)]);
var inst_23835 = (state_23852[(2)]);
var inst_23836 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23815);
var inst_23837 = (inst_23835.cljs$core$IFn$_invoke$arity$1 ? inst_23835.cljs$core$IFn$_invoke$arity$1(inst_23836) : inst_23835.call(null, inst_23836));
var state_23852__$1 = state_23852;
var statearr_23881_24007 = state_23852__$1;
(statearr_23881_24007[(2)] = inst_23837);

(statearr_23881_24007[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (16))){
var state_23852__$1 = state_23852;
var statearr_23882_24008 = state_23852__$1;
(statearr_23882_24008[(2)] = null);

(statearr_23882_24008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (10))){
var state_23852__$1 = state_23852;
var statearr_23883_24009 = state_23852__$1;
(statearr_23883_24009[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23853 === (8))){
var inst_23823 = (state_23852[(2)]);
var inst_23824 = (inst_23823.cljs$core$IFn$_invoke$arity$0 ? inst_23823.cljs$core$IFn$_invoke$arity$0() : inst_23823.call(null, ));
var state_23852__$1 = state_23852;
var statearr_23885_24010 = state_23852__$1;
(statearr_23885_24010[(2)] = inst_23824);

(statearr_23885_24010[(1)] = (5));


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
var easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21437__auto__ = null;
var easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21437__auto____0 = (function (){
var statearr_23887 = [null,null,null,null,null,null,null,null,null];
(statearr_23887[(0)] = easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21437__auto__);

(statearr_23887[(1)] = (1));

return statearr_23887;
});
var easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21437__auto____1 = (function (state_23852){
while(true){
var ret_value__21438__auto__ = (function (){try{while(true){
var result__21439__auto__ = switch__21436__auto__(state_23852);
if(cljs.core.keyword_identical_QMARK_(result__21439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21439__auto__;
}
break;
}
}catch (e23889){var ex__21440__auto__ = e23889;
var statearr_23891_24011 = state_23852;
(statearr_23891_24011[(2)] = ex__21440__auto__);


if(cljs.core.seq((state_23852[(4)]))){
var statearr_23892_24012 = state_23852;
(statearr_23892_24012[(1)] = cljs.core.first((state_23852[(4)])));

} else {
throw ex__21440__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24013 = state_23852;
state_23852 = G__24013;
continue;
} else {
return ret_value__21438__auto__;
}
break;
}
});
easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21437__auto__ = function(state_23852){
switch(arguments.length){
case 0:
return easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21437__auto____0.call(this);
case 1:
return easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21437__auto____1.call(this,state_23852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21437__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21437__auto____0;
easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21437__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21437__auto____1;
return easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21437__auto__;
})()
})();
var state__21476__auto__ = (function (){var statearr_23893 = f__21475__auto__();
(statearr_23893[(6)] = c__21474__auto___23992);

return statearr_23893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21476__auto__);
}));


return easyreagent.fullstack.chat_state.connect_web_socket(chat_id);
});
easyreagent.fullstack.chat_state.fetch_messages_once = cljs.core.memoize(easyreagent.fullstack.chat_state.fetch_messages);
easyreagent.fullstack.chat_state.send_message = (function easyreagent$fullstack$chat_state$send_message(var_args){
var args__5772__auto__ = [];
var len__5766__auto___24014 = arguments.length;
var i__5767__auto___24015 = (0);
while(true){
if((i__5767__auto___24015 < len__5766__auto___24014)){
args__5772__auto__.push((arguments[i__5767__auto___24015]));

var G__24016 = (i__5767__auto___24015 + (1));
i__5767__auto___24015 = G__24016;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return easyreagent.fullstack.chat_state.send_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(easyreagent.fullstack.chat_state.send_message.cljs$core$IFn$_invoke$arity$variadic = (function (chat_id,message,p__23900){
var map__23901 = p__23900;
var map__23901__$1 = cljs.core.__destructure_map(map__23901);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23901__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var c__21474__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21475__auto__ = (function (){var switch__21436__auto__ = (function (state_23951){
var state_val_23952 = (state_23951[(1)]);
if((state_val_23952 === (7))){
var state_23951__$1 = state_23951;
var statearr_23953_24017 = state_23951__$1;
(statearr_23953_24017[(2)] = cljs.core.identity);

(statearr_23953_24017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (20))){
var inst_23944 = (state_23951[(2)]);
var state_23951__$1 = state_23951;
var statearr_23955_24018 = state_23951__$1;
(statearr_23955_24018[(2)] = inst_23944);

(statearr_23955_24018[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (1))){
var inst_23902 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_23903 = [new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),new cljs.core.Keyword(null,"message-contents","message-contents",-126501954)];
var inst_23904 = [chat_id,message];
var inst_23905 = cljs.core.PersistentHashMap.fromArrays(inst_23903,inst_23904);
var inst_23906 = [inst_23905];
var inst_23907 = cljs.core.PersistentHashMap.fromArrays(inst_23902,inst_23906);
var inst_23908 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/chat/sendNewMessage",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_23907], 0));
var state_23951__$1 = state_23951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23951__$1,(2),inst_23908);
} else {
if((state_val_23952 === (4))){
var inst_23910 = (state_23951[(7)]);
var inst_23926 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23910);
var inst_23927 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_23926);
var inst_23928 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23927,"json");
var state_23951__$1 = state_23951;
if(inst_23928){
var statearr_23956_24019 = state_23951__$1;
(statearr_23956_24019[(1)] = (12));

} else {
var statearr_23957_24020 = state_23951__$1;
(statearr_23957_24020[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (15))){
var state_23951__$1 = state_23951;
var statearr_23958_24021 = state_23951__$1;
(statearr_23958_24021[(2)] = null);

(statearr_23958_24021[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (13))){
var state_23951__$1 = state_23951;
var statearr_23959_24022 = state_23951__$1;
(statearr_23959_24022[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (6))){
var inst_23915 = (state_23951[(8)]);
var state_23951__$1 = state_23951;
var statearr_23961_24023 = state_23951__$1;
(statearr_23961_24023[(2)] = inst_23915);

(statearr_23961_24023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (17))){
var inst_23910 = (state_23951[(7)]);
var inst_23933 = (state_23951[(2)]);
var inst_23934 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23910);
var inst_23935 = (inst_23933.cljs$core$IFn$_invoke$arity$1 ? inst_23933.cljs$core$IFn$_invoke$arity$1(inst_23934) : inst_23933.call(null, inst_23934));
var state_23951__$1 = state_23951;
var statearr_23963_24024 = state_23951__$1;
(statearr_23963_24024[(2)] = inst_23935);

(statearr_23963_24024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (3))){
var inst_23915 = (state_23951[(8)]);
var inst_23915__$1 = callback;
var state_23951__$1 = (function (){var statearr_23964 = state_23951;
(statearr_23964[(8)] = inst_23915__$1);

return statearr_23964;
})();
if(cljs.core.truth_(inst_23915__$1)){
var statearr_23965_24025 = state_23951__$1;
(statearr_23965_24025[(1)] = (6));

} else {
var statearr_23966_24026 = state_23951__$1;
(statearr_23966_24026[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (12))){
var state_23951__$1 = state_23951;
var statearr_23968_24027 = state_23951__$1;
(statearr_23968_24027[(1)] = (16));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (2))){
var inst_23910 = (state_23951[(7)]);
var inst_23910__$1 = (state_23951[(2)]);
var inst_23911 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23910__$1);
var inst_23912 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_23911);
var inst_23913 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23912,"success");
var state_23951__$1 = (function (){var statearr_23970 = state_23951;
(statearr_23970[(7)] = inst_23910__$1);

return statearr_23970;
})();
if(inst_23913){
var statearr_23971_24028 = state_23951__$1;
(statearr_23971_24028[(1)] = (3));

} else {
var statearr_23972_24029 = state_23951__$1;
(statearr_23972_24029[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (19))){
var state_23951__$1 = state_23951;
var statearr_23973_24030 = state_23951__$1;
(statearr_23973_24030[(2)] = null);

(statearr_23973_24030[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (11))){
var inst_23923 = (state_23951[(2)]);
var inst_23924 = (inst_23923.cljs$core$IFn$_invoke$arity$0 ? inst_23923.cljs$core$IFn$_invoke$arity$0() : inst_23923.call(null, ));
var state_23951__$1 = state_23951;
var statearr_23974_24031 = state_23951__$1;
(statearr_23974_24031[(2)] = inst_23924);

(statearr_23974_24031[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (9))){
var inst_23919 = (state_23951[(9)]);
var state_23951__$1 = state_23951;
var statearr_23978_24032 = state_23951__$1;
(statearr_23978_24032[(2)] = inst_23919);

(statearr_23978_24032[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (5))){
var inst_23948 = (state_23951[(2)]);
var state_23951__$1 = state_23951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23951__$1,inst_23948);
} else {
if((state_val_23952 === (14))){
var inst_23946 = (state_23951[(2)]);
var state_23951__$1 = state_23951;
var statearr_23979_24033 = state_23951__$1;
(statearr_23979_24033[(2)] = inst_23946);

(statearr_23979_24033[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (16))){
var state_23951__$1 = state_23951;
var statearr_23980_24034 = state_23951__$1;
(statearr_23980_24034[(2)] = cljs.core.identity);

(statearr_23980_24034[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (10))){
var state_23951__$1 = state_23951;
var statearr_23982_24035 = state_23951__$1;
(statearr_23982_24035[(2)] = cljs.core.identity);

(statearr_23982_24035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (18))){
var inst_23910 = (state_23951[(7)]);
var inst_23938 = (function (){var result__23682__auto__ = inst_23910;
return (function (p1__23894_SHARP_){
return alert(["message failed to send",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23894_SHARP_)].join(''));
});
})();
var inst_23939 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23910);
var inst_23940 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_23939);
var inst_23941 = inst_23938(inst_23940);
var state_23951__$1 = state_23951;
var statearr_23983_24036 = state_23951__$1;
(statearr_23983_24036[(2)] = inst_23941);

(statearr_23983_24036[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23952 === (8))){
var inst_23919 = (state_23951[(9)]);
var inst_23919__$1 = (state_23951[(2)]);
var state_23951__$1 = (function (){var statearr_23984 = state_23951;
(statearr_23984[(9)] = inst_23919__$1);

return statearr_23984;
})();
if(cljs.core.truth_(inst_23919__$1)){
var statearr_23985_24037 = state_23951__$1;
(statearr_23985_24037[(1)] = (9));

} else {
var statearr_23986_24038 = state_23951__$1;
(statearr_23986_24038[(1)] = (10));

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
var easyreagent$fullstack$chat_state$state_machine__21437__auto__ = null;
var easyreagent$fullstack$chat_state$state_machine__21437__auto____0 = (function (){
var statearr_23987 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23987[(0)] = easyreagent$fullstack$chat_state$state_machine__21437__auto__);

(statearr_23987[(1)] = (1));

return statearr_23987;
});
var easyreagent$fullstack$chat_state$state_machine__21437__auto____1 = (function (state_23951){
while(true){
var ret_value__21438__auto__ = (function (){try{while(true){
var result__21439__auto__ = switch__21436__auto__(state_23951);
if(cljs.core.keyword_identical_QMARK_(result__21439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21439__auto__;
}
break;
}
}catch (e23988){var ex__21440__auto__ = e23988;
var statearr_23989_24039 = state_23951;
(statearr_23989_24039[(2)] = ex__21440__auto__);


if(cljs.core.seq((state_23951[(4)]))){
var statearr_23990_24040 = state_23951;
(statearr_23990_24040[(1)] = cljs.core.first((state_23951[(4)])));

} else {
throw ex__21440__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21438__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24041 = state_23951;
state_23951 = G__24041;
continue;
} else {
return ret_value__21438__auto__;
}
break;
}
});
easyreagent$fullstack$chat_state$state_machine__21437__auto__ = function(state_23951){
switch(arguments.length){
case 0:
return easyreagent$fullstack$chat_state$state_machine__21437__auto____0.call(this);
case 1:
return easyreagent$fullstack$chat_state$state_machine__21437__auto____1.call(this,state_23951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$chat_state$state_machine__21437__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$chat_state$state_machine__21437__auto____0;
easyreagent$fullstack$chat_state$state_machine__21437__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$chat_state$state_machine__21437__auto____1;
return easyreagent$fullstack$chat_state$state_machine__21437__auto__;
})()
})();
var state__21476__auto__ = (function (){var statearr_23991 = f__21475__auto__();
(statearr_23991[(6)] = c__21474__auto__);

return statearr_23991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21476__auto__);
}));

return c__21474__auto__;
}));

(easyreagent.fullstack.chat_state.send_message.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(easyreagent.fullstack.chat_state.send_message.cljs$lang$applyTo = (function (seq23896){
var G__23897 = cljs.core.first(seq23896);
var seq23896__$1 = cljs.core.next(seq23896);
var G__23898 = cljs.core.first(seq23896__$1);
var seq23896__$2 = cljs.core.next(seq23896__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23897,G__23898,seq23896__$2);
}));


//# sourceMappingURL=easyreagent.fullstack.chat_state.js.map
