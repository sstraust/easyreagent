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
var c__21516__auto___23902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21517__auto__ = (function (){var switch__21451__auto__ = (function (state_23785){
var state_val_23786 = (state_23785[(1)]);
if((state_val_23786 === (7))){
var state_23785__$1 = state_23785;
var statearr_23787_23903 = state_23785__$1;
(statearr_23787_23903[(2)] = cljs.core.identity);

(statearr_23787_23903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (1))){
var inst_23741 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_23742 = [new cljs.core.Keyword(null,"chat-id","chat-id",1708052118)];
var inst_23743 = [chat_id];
var inst_23744 = cljs.core.PersistentHashMap.fromArrays(inst_23742,inst_23743);
var inst_23745 = [inst_23744];
var inst_23746 = cljs.core.PersistentHashMap.fromArrays(inst_23741,inst_23745);
var inst_23747 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/chat/getConversationMessages",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_23746], 0));
var state_23785__$1 = state_23785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23785__$1,(2),inst_23747);
} else {
if((state_val_23786 === (4))){
var inst_23749 = (state_23785[(7)]);
var inst_23760 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23749);
var inst_23761 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_23760);
var inst_23762 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23761,"json");
var state_23785__$1 = state_23785;
if(inst_23762){
var statearr_23788_23904 = state_23785__$1;
(statearr_23788_23904[(1)] = (9));

} else {
var statearr_23789_23905 = state_23785__$1;
(statearr_23789_23905[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (15))){
var inst_23749 = (state_23785[(7)]);
var inst_23773 = (function (){var result__23652__auto__ = inst_23749;
return (function (){
return alert("failed to load chat messages");
});
})();
var inst_23774 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23749);
var inst_23775 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_23774);
var inst_23776 = inst_23773(inst_23775);
var state_23785__$1 = state_23785;
var statearr_23790_23906 = state_23785__$1;
(statearr_23790_23906[(2)] = inst_23776);

(statearr_23790_23906[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (13))){
var state_23785__$1 = state_23785;
var statearr_23791_23907 = state_23785__$1;
(statearr_23791_23907[(2)] = cljs.core.identity);

(statearr_23791_23907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (6))){
var state_23785__$1 = state_23785;
var statearr_23792_23908 = state_23785__$1;
(statearr_23792_23908[(2)] = null);

(statearr_23792_23908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (17))){
var inst_23779 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23793_23909 = state_23785__$1;
(statearr_23793_23909[(2)] = inst_23779);

(statearr_23793_23909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (3))){
var state_23785__$1 = state_23785;
var statearr_23795_23910 = state_23785__$1;
(statearr_23795_23910[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (12))){
var inst_23764 = (state_23785[(8)]);
var state_23785__$1 = state_23785;
var statearr_23796_23911 = state_23785__$1;
(statearr_23796_23911[(2)] = inst_23764);

(statearr_23796_23911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (2))){
var inst_23749 = (state_23785[(7)]);
var inst_23749__$1 = (state_23785[(2)]);
var inst_23750 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23749__$1);
var inst_23751 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_23750);
var inst_23752 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23751,"success");
var state_23785__$1 = (function (){var statearr_23797 = state_23785;
(statearr_23797[(7)] = inst_23749__$1);

return statearr_23797;
})();
if(inst_23752){
var statearr_23798_23912 = state_23785__$1;
(statearr_23798_23912[(1)] = (3));

} else {
var statearr_23799_23913 = state_23785__$1;
(statearr_23799_23913[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (11))){
var inst_23781 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23800_23914 = state_23785__$1;
(statearr_23800_23914[(2)] = inst_23781);

(statearr_23800_23914[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (9))){
var inst_23749 = (state_23785[(7)]);
var inst_23764 = (state_23785[(8)]);
var inst_23764__$1 = (function (){var result__23652__auto__ = inst_23749;
return (function (p1__23740_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(easyreagent.fullstack.chat_state.all_messages,cljs.core.assoc,chat_id,p1__23740_SHARP_);
});
})();
var state_23785__$1 = (function (){var statearr_23801 = state_23785;
(statearr_23801[(8)] = inst_23764__$1);

return statearr_23801;
})();
if(cljs.core.truth_(inst_23764__$1)){
var statearr_23802_23915 = state_23785__$1;
(statearr_23802_23915[(1)] = (12));

} else {
var statearr_23803_23916 = state_23785__$1;
(statearr_23803_23916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (5))){
var inst_23783 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23785__$1,inst_23783);
} else {
if((state_val_23786 === (14))){
var inst_23749 = (state_23785[(7)]);
var inst_23768 = (state_23785[(2)]);
var inst_23769 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23749);
var inst_23770 = (inst_23768.cljs$core$IFn$_invoke$arity$1 ? inst_23768.cljs$core$IFn$_invoke$arity$1(inst_23769) : inst_23768.call(null, inst_23769));
var state_23785__$1 = state_23785;
var statearr_23804_23917 = state_23785__$1;
(statearr_23804_23917[(2)] = inst_23770);

(statearr_23804_23917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (16))){
var state_23785__$1 = state_23785;
var statearr_23805_23918 = state_23785__$1;
(statearr_23805_23918[(2)] = null);

(statearr_23805_23918[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (10))){
var state_23785__$1 = state_23785;
var statearr_23806_23919 = state_23785__$1;
(statearr_23806_23919[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (8))){
var inst_23757 = (state_23785[(2)]);
var inst_23758 = (inst_23757.cljs$core$IFn$_invoke$arity$0 ? inst_23757.cljs$core$IFn$_invoke$arity$0() : inst_23757.call(null, ));
var state_23785__$1 = state_23785;
var statearr_23808_23920 = state_23785__$1;
(statearr_23808_23920[(2)] = inst_23758);

(statearr_23808_23920[(1)] = (5));


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
var easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21452__auto__ = null;
var easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21452__auto____0 = (function (){
var statearr_23809 = [null,null,null,null,null,null,null,null,null];
(statearr_23809[(0)] = easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21452__auto__);

(statearr_23809[(1)] = (1));

return statearr_23809;
});
var easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21452__auto____1 = (function (state_23785){
while(true){
var ret_value__21453__auto__ = (function (){try{while(true){
var result__21454__auto__ = switch__21451__auto__(state_23785);
if(cljs.core.keyword_identical_QMARK_(result__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21454__auto__;
}
break;
}
}catch (e23810){var ex__21455__auto__ = e23810;
var statearr_23811_23921 = state_23785;
(statearr_23811_23921[(2)] = ex__21455__auto__);


if(cljs.core.seq((state_23785[(4)]))){
var statearr_23812_23922 = state_23785;
(statearr_23812_23922[(1)] = cljs.core.first((state_23785[(4)])));

} else {
throw ex__21455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23923 = state_23785;
state_23785 = G__23923;
continue;
} else {
return ret_value__21453__auto__;
}
break;
}
});
easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21452__auto__ = function(state_23785){
switch(arguments.length){
case 0:
return easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21452__auto____0.call(this);
case 1:
return easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21452__auto____1.call(this,state_23785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21452__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21452__auto____0;
easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21452__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21452__auto____1;
return easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__21452__auto__;
})()
})();
var state__21518__auto__ = (function (){var statearr_23813 = f__21517__auto__();
(statearr_23813[(6)] = c__21516__auto___23902);

return statearr_23813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21518__auto__);
}));


return easyreagent.fullstack.chat_state.connect_web_socket(chat_id);
});
easyreagent.fullstack.chat_state.fetch_messages_once = cljs.core.memoize(easyreagent.fullstack.chat_state.fetch_messages);
easyreagent.fullstack.chat_state.send_message = (function easyreagent$fullstack$chat_state$send_message(var_args){
var args__5772__auto__ = [];
var len__5766__auto___23924 = arguments.length;
var i__5767__auto___23925 = (0);
while(true){
if((i__5767__auto___23925 < len__5766__auto___23924)){
args__5772__auto__.push((arguments[i__5767__auto___23925]));

var G__23926 = (i__5767__auto___23925 + (1));
i__5767__auto___23925 = G__23926;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return easyreagent.fullstack.chat_state.send_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(easyreagent.fullstack.chat_state.send_message.cljs$core$IFn$_invoke$arity$variadic = (function (chat_id,message,p__23818){
var map__23819 = p__23818;
var map__23819__$1 = cljs.core.__destructure_map(map__23819);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23819__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var c__21516__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__21517__auto__ = (function (){var switch__21451__auto__ = (function (state_23868){
var state_val_23869 = (state_23868[(1)]);
if((state_val_23869 === (7))){
var state_23868__$1 = state_23868;
var statearr_23870_23927 = state_23868__$1;
(statearr_23870_23927[(2)] = cljs.core.identity);

(statearr_23870_23927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (20))){
var inst_23862 = (state_23868[(2)]);
var state_23868__$1 = state_23868;
var statearr_23871_23928 = state_23868__$1;
(statearr_23871_23928[(2)] = inst_23862);

(statearr_23871_23928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (1))){
var inst_23820 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_23821 = [new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),new cljs.core.Keyword(null,"message-contents","message-contents",-126501954)];
var inst_23822 = [chat_id,message];
var inst_23823 = cljs.core.PersistentHashMap.fromArrays(inst_23821,inst_23822);
var inst_23824 = [inst_23823];
var inst_23825 = cljs.core.PersistentHashMap.fromArrays(inst_23820,inst_23824);
var inst_23826 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/chat/sendNewMessage",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_23825], 0));
var state_23868__$1 = state_23868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23868__$1,(2),inst_23826);
} else {
if((state_val_23869 === (4))){
var inst_23828 = (state_23868[(7)]);
var inst_23844 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23828);
var inst_23845 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_23844);
var inst_23846 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23845,"json");
var state_23868__$1 = state_23868;
if(inst_23846){
var statearr_23872_23929 = state_23868__$1;
(statearr_23872_23929[(1)] = (12));

} else {
var statearr_23873_23930 = state_23868__$1;
(statearr_23873_23930[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (15))){
var state_23868__$1 = state_23868;
var statearr_23874_23931 = state_23868__$1;
(statearr_23874_23931[(2)] = null);

(statearr_23874_23931[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (13))){
var state_23868__$1 = state_23868;
var statearr_23875_23932 = state_23868__$1;
(statearr_23875_23932[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (6))){
var inst_23833 = (state_23868[(8)]);
var state_23868__$1 = state_23868;
var statearr_23877_23933 = state_23868__$1;
(statearr_23877_23933[(2)] = inst_23833);

(statearr_23877_23933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (17))){
var inst_23828 = (state_23868[(7)]);
var inst_23851 = (state_23868[(2)]);
var inst_23852 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23828);
var inst_23853 = (inst_23851.cljs$core$IFn$_invoke$arity$1 ? inst_23851.cljs$core$IFn$_invoke$arity$1(inst_23852) : inst_23851.call(null, inst_23852));
var state_23868__$1 = state_23868;
var statearr_23878_23934 = state_23868__$1;
(statearr_23878_23934[(2)] = inst_23853);

(statearr_23878_23934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (3))){
var inst_23833 = (state_23868[(8)]);
var inst_23833__$1 = callback;
var state_23868__$1 = (function (){var statearr_23879 = state_23868;
(statearr_23879[(8)] = inst_23833__$1);

return statearr_23879;
})();
if(cljs.core.truth_(inst_23833__$1)){
var statearr_23880_23935 = state_23868__$1;
(statearr_23880_23935[(1)] = (6));

} else {
var statearr_23881_23936 = state_23868__$1;
(statearr_23881_23936[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (12))){
var state_23868__$1 = state_23868;
var statearr_23883_23937 = state_23868__$1;
(statearr_23883_23937[(1)] = (16));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (2))){
var inst_23828 = (state_23868[(7)]);
var inst_23828__$1 = (state_23868[(2)]);
var inst_23829 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23828__$1);
var inst_23830 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_23829);
var inst_23831 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23830,"success");
var state_23868__$1 = (function (){var statearr_23884 = state_23868;
(statearr_23884[(7)] = inst_23828__$1);

return statearr_23884;
})();
if(inst_23831){
var statearr_23885_23938 = state_23868__$1;
(statearr_23885_23938[(1)] = (3));

} else {
var statearr_23886_23939 = state_23868__$1;
(statearr_23886_23939[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (19))){
var state_23868__$1 = state_23868;
var statearr_23887_23940 = state_23868__$1;
(statearr_23887_23940[(2)] = null);

(statearr_23887_23940[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (11))){
var inst_23841 = (state_23868[(2)]);
var inst_23842 = (inst_23841.cljs$core$IFn$_invoke$arity$0 ? inst_23841.cljs$core$IFn$_invoke$arity$0() : inst_23841.call(null, ));
var state_23868__$1 = state_23868;
var statearr_23888_23941 = state_23868__$1;
(statearr_23888_23941[(2)] = inst_23842);

(statearr_23888_23941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (9))){
var inst_23837 = (state_23868[(9)]);
var state_23868__$1 = state_23868;
var statearr_23889_23942 = state_23868__$1;
(statearr_23889_23942[(2)] = inst_23837);

(statearr_23889_23942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (5))){
var inst_23866 = (state_23868[(2)]);
var state_23868__$1 = state_23868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23868__$1,inst_23866);
} else {
if((state_val_23869 === (14))){
var inst_23864 = (state_23868[(2)]);
var state_23868__$1 = state_23868;
var statearr_23890_23943 = state_23868__$1;
(statearr_23890_23943[(2)] = inst_23864);

(statearr_23890_23943[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (16))){
var state_23868__$1 = state_23868;
var statearr_23891_23944 = state_23868__$1;
(statearr_23891_23944[(2)] = cljs.core.identity);

(statearr_23891_23944[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (10))){
var state_23868__$1 = state_23868;
var statearr_23892_23945 = state_23868__$1;
(statearr_23892_23945[(2)] = cljs.core.identity);

(statearr_23892_23945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (18))){
var inst_23828 = (state_23868[(7)]);
var inst_23856 = (function (){var result__23652__auto__ = inst_23828;
return (function (p1__23814_SHARP_){
return alert(["message failed to send",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23814_SHARP_)].join(''));
});
})();
var inst_23857 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23828);
var inst_23858 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_23857);
var inst_23859 = inst_23856(inst_23858);
var state_23868__$1 = state_23868;
var statearr_23893_23946 = state_23868__$1;
(statearr_23893_23946[(2)] = inst_23859);

(statearr_23893_23946[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23869 === (8))){
var inst_23837 = (state_23868[(9)]);
var inst_23837__$1 = (state_23868[(2)]);
var state_23868__$1 = (function (){var statearr_23894 = state_23868;
(statearr_23894[(9)] = inst_23837__$1);

return statearr_23894;
})();
if(cljs.core.truth_(inst_23837__$1)){
var statearr_23895_23947 = state_23868__$1;
(statearr_23895_23947[(1)] = (9));

} else {
var statearr_23896_23948 = state_23868__$1;
(statearr_23896_23948[(1)] = (10));

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
var easyreagent$fullstack$chat_state$state_machine__21452__auto__ = null;
var easyreagent$fullstack$chat_state$state_machine__21452__auto____0 = (function (){
var statearr_23897 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23897[(0)] = easyreagent$fullstack$chat_state$state_machine__21452__auto__);

(statearr_23897[(1)] = (1));

return statearr_23897;
});
var easyreagent$fullstack$chat_state$state_machine__21452__auto____1 = (function (state_23868){
while(true){
var ret_value__21453__auto__ = (function (){try{while(true){
var result__21454__auto__ = switch__21451__auto__(state_23868);
if(cljs.core.keyword_identical_QMARK_(result__21454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21454__auto__;
}
break;
}
}catch (e23898){var ex__21455__auto__ = e23898;
var statearr_23899_23949 = state_23868;
(statearr_23899_23949[(2)] = ex__21455__auto__);


if(cljs.core.seq((state_23868[(4)]))){
var statearr_23900_23950 = state_23868;
(statearr_23900_23950[(1)] = cljs.core.first((state_23868[(4)])));

} else {
throw ex__21455__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23951 = state_23868;
state_23868 = G__23951;
continue;
} else {
return ret_value__21453__auto__;
}
break;
}
});
easyreagent$fullstack$chat_state$state_machine__21452__auto__ = function(state_23868){
switch(arguments.length){
case 0:
return easyreagent$fullstack$chat_state$state_machine__21452__auto____0.call(this);
case 1:
return easyreagent$fullstack$chat_state$state_machine__21452__auto____1.call(this,state_23868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$chat_state$state_machine__21452__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$chat_state$state_machine__21452__auto____0;
easyreagent$fullstack$chat_state$state_machine__21452__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$chat_state$state_machine__21452__auto____1;
return easyreagent$fullstack$chat_state$state_machine__21452__auto__;
})()
})();
var state__21518__auto__ = (function (){var statearr_23901 = f__21517__auto__();
(statearr_23901[(6)] = c__21516__auto__);

return statearr_23901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21518__auto__);
}));

return c__21516__auto__;
}));

(easyreagent.fullstack.chat_state.send_message.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(easyreagent.fullstack.chat_state.send_message.cljs$lang$applyTo = (function (seq23815){
var G__23816 = cljs.core.first(seq23815);
var seq23815__$1 = cljs.core.next(seq23815);
var G__23817 = cljs.core.first(seq23815__$1);
var seq23815__$2 = cljs.core.next(seq23815__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23816,G__23817,seq23815__$2);
}));


//# sourceMappingURL=easyreagent.fullstack.chat_state.js.map
