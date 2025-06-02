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
var c__35291__auto___37788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35292__auto__ = (function (){var switch__35091__auto__ = (function (state_37671){
var state_val_37672 = (state_37671[(1)]);
if((state_val_37672 === (7))){
var state_37671__$1 = state_37671;
var statearr_37673_37789 = state_37671__$1;
(statearr_37673_37789[(2)] = cljs.core.identity);

(statearr_37673_37789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (1))){
var inst_37627 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_37628 = [new cljs.core.Keyword(null,"chat-id","chat-id",1708052118)];
var inst_37629 = [chat_id];
var inst_37630 = cljs.core.PersistentHashMap.fromArrays(inst_37628,inst_37629);
var inst_37631 = [inst_37630];
var inst_37632 = cljs.core.PersistentHashMap.fromArrays(inst_37627,inst_37631);
var inst_37633 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/chat/getConversationMessages",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37632], 0));
var state_37671__$1 = state_37671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37671__$1,(2),inst_37633);
} else {
if((state_val_37672 === (4))){
var inst_37635 = (state_37671[(7)]);
var inst_37646 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37635);
var inst_37647 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_37646);
var inst_37648 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37647,"json");
var state_37671__$1 = state_37671;
if(inst_37648){
var statearr_37674_37790 = state_37671__$1;
(statearr_37674_37790[(1)] = (9));

} else {
var statearr_37675_37791 = state_37671__$1;
(statearr_37675_37791[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (15))){
var inst_37635 = (state_37671[(7)]);
var inst_37659 = (function (){var result__37527__auto__ = inst_37635;
return (function (){
return alert("failed to load chat messages");
});
})();
var inst_37660 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37635);
var inst_37661 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_37660);
var inst_37662 = inst_37659(inst_37661);
var state_37671__$1 = state_37671;
var statearr_37676_37792 = state_37671__$1;
(statearr_37676_37792[(2)] = inst_37662);

(statearr_37676_37792[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (13))){
var state_37671__$1 = state_37671;
var statearr_37677_37793 = state_37671__$1;
(statearr_37677_37793[(2)] = cljs.core.identity);

(statearr_37677_37793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (6))){
var state_37671__$1 = state_37671;
var statearr_37678_37794 = state_37671__$1;
(statearr_37678_37794[(2)] = null);

(statearr_37678_37794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (17))){
var inst_37665 = (state_37671[(2)]);
var state_37671__$1 = state_37671;
var statearr_37679_37795 = state_37671__$1;
(statearr_37679_37795[(2)] = inst_37665);

(statearr_37679_37795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (3))){
var state_37671__$1 = state_37671;
var statearr_37681_37796 = state_37671__$1;
(statearr_37681_37796[(1)] = (7));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (12))){
var inst_37650 = (state_37671[(8)]);
var state_37671__$1 = state_37671;
var statearr_37682_37797 = state_37671__$1;
(statearr_37682_37797[(2)] = inst_37650);

(statearr_37682_37797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (2))){
var inst_37635 = (state_37671[(7)]);
var inst_37635__$1 = (state_37671[(2)]);
var inst_37636 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37635__$1);
var inst_37637 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_37636);
var inst_37638 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37637,"success");
var state_37671__$1 = (function (){var statearr_37683 = state_37671;
(statearr_37683[(7)] = inst_37635__$1);

return statearr_37683;
})();
if(inst_37638){
var statearr_37684_37798 = state_37671__$1;
(statearr_37684_37798[(1)] = (3));

} else {
var statearr_37685_37799 = state_37671__$1;
(statearr_37685_37799[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (11))){
var inst_37667 = (state_37671[(2)]);
var state_37671__$1 = state_37671;
var statearr_37686_37800 = state_37671__$1;
(statearr_37686_37800[(2)] = inst_37667);

(statearr_37686_37800[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (9))){
var inst_37650 = (state_37671[(8)]);
var inst_37635 = (state_37671[(7)]);
var inst_37650__$1 = (function (){var result__37527__auto__ = inst_37635;
return (function (p1__37626_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(easyreagent.fullstack.chat_state.all_messages,cljs.core.assoc,chat_id,p1__37626_SHARP_);
});
})();
var state_37671__$1 = (function (){var statearr_37687 = state_37671;
(statearr_37687[(8)] = inst_37650__$1);

return statearr_37687;
})();
if(cljs.core.truth_(inst_37650__$1)){
var statearr_37688_37801 = state_37671__$1;
(statearr_37688_37801[(1)] = (12));

} else {
var statearr_37689_37802 = state_37671__$1;
(statearr_37689_37802[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (5))){
var inst_37669 = (state_37671[(2)]);
var state_37671__$1 = state_37671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37671__$1,inst_37669);
} else {
if((state_val_37672 === (14))){
var inst_37635 = (state_37671[(7)]);
var inst_37654 = (state_37671[(2)]);
var inst_37655 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37635);
var inst_37656 = (inst_37654.cljs$core$IFn$_invoke$arity$1 ? inst_37654.cljs$core$IFn$_invoke$arity$1(inst_37655) : inst_37654.call(null, inst_37655));
var state_37671__$1 = state_37671;
var statearr_37690_37803 = state_37671__$1;
(statearr_37690_37803[(2)] = inst_37656);

(statearr_37690_37803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (16))){
var state_37671__$1 = state_37671;
var statearr_37691_37804 = state_37671__$1;
(statearr_37691_37804[(2)] = null);

(statearr_37691_37804[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (10))){
var state_37671__$1 = state_37671;
var statearr_37692_37805 = state_37671__$1;
(statearr_37692_37805[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37672 === (8))){
var inst_37643 = (state_37671[(2)]);
var inst_37644 = (inst_37643.cljs$core$IFn$_invoke$arity$0 ? inst_37643.cljs$core$IFn$_invoke$arity$0() : inst_37643.call(null, ));
var state_37671__$1 = state_37671;
var statearr_37694_37806 = state_37671__$1;
(statearr_37694_37806[(2)] = inst_37644);

(statearr_37694_37806[(1)] = (5));


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
var easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__35092__auto__ = null;
var easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__35092__auto____0 = (function (){
var statearr_37695 = [null,null,null,null,null,null,null,null,null];
(statearr_37695[(0)] = easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__35092__auto__);

(statearr_37695[(1)] = (1));

return statearr_37695;
});
var easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__35092__auto____1 = (function (state_37671){
while(true){
var ret_value__35093__auto__ = (function (){try{while(true){
var result__35094__auto__ = switch__35091__auto__(state_37671);
if(cljs.core.keyword_identical_QMARK_(result__35094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35094__auto__;
}
break;
}
}catch (e37696){var ex__35095__auto__ = e37696;
var statearr_37697_37807 = state_37671;
(statearr_37697_37807[(2)] = ex__35095__auto__);


if(cljs.core.seq((state_37671[(4)]))){
var statearr_37698_37808 = state_37671;
(statearr_37698_37808[(1)] = cljs.core.first((state_37671[(4)])));

} else {
throw ex__35095__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37809 = state_37671;
state_37671 = G__37809;
continue;
} else {
return ret_value__35093__auto__;
}
break;
}
});
easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__35092__auto__ = function(state_37671){
switch(arguments.length){
case 0:
return easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__35092__auto____0.call(this);
case 1:
return easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__35092__auto____1.call(this,state_37671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__35092__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__35092__auto____0;
easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__35092__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__35092__auto____1;
return easyreagent$fullstack$chat_state$fetch_messages_$_state_machine__35092__auto__;
})()
})();
var state__35293__auto__ = (function (){var statearr_37699 = f__35292__auto__();
(statearr_37699[(6)] = c__35291__auto___37788);

return statearr_37699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35293__auto__);
}));


return easyreagent.fullstack.chat_state.connect_web_socket(chat_id);
});
easyreagent.fullstack.chat_state.fetch_messages_once = cljs.core.memoize(easyreagent.fullstack.chat_state.fetch_messages);
easyreagent.fullstack.chat_state.send_message = (function easyreagent$fullstack$chat_state$send_message(var_args){
var args__5772__auto__ = [];
var len__5766__auto___37810 = arguments.length;
var i__5767__auto___37811 = (0);
while(true){
if((i__5767__auto___37811 < len__5766__auto___37810)){
args__5772__auto__.push((arguments[i__5767__auto___37811]));

var G__37812 = (i__5767__auto___37811 + (1));
i__5767__auto___37811 = G__37812;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return easyreagent.fullstack.chat_state.send_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(easyreagent.fullstack.chat_state.send_message.cljs$core$IFn$_invoke$arity$variadic = (function (chat_id,message,p__37704){
var map__37705 = p__37704;
var map__37705__$1 = cljs.core.__destructure_map(map__37705);
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37705__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var c__35291__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35292__auto__ = (function (){var switch__35091__auto__ = (function (state_37754){
var state_val_37755 = (state_37754[(1)]);
if((state_val_37755 === (7))){
var state_37754__$1 = state_37754;
var statearr_37756_37813 = state_37754__$1;
(statearr_37756_37813[(2)] = cljs.core.identity);

(statearr_37756_37813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (20))){
var inst_37748 = (state_37754[(2)]);
var state_37754__$1 = state_37754;
var statearr_37757_37814 = state_37754__$1;
(statearr_37757_37814[(2)] = inst_37748);

(statearr_37757_37814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (1))){
var inst_37706 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_37707 = [new cljs.core.Keyword(null,"chat-id","chat-id",1708052118),new cljs.core.Keyword(null,"message-contents","message-contents",-126501954)];
var inst_37708 = [chat_id,message];
var inst_37709 = cljs.core.PersistentHashMap.fromArrays(inst_37707,inst_37708);
var inst_37710 = [inst_37709];
var inst_37711 = cljs.core.PersistentHashMap.fromArrays(inst_37706,inst_37710);
var inst_37712 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/easyreagent/fullstack/chat/sendNewMessage",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37711], 0));
var state_37754__$1 = state_37754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37754__$1,(2),inst_37712);
} else {
if((state_val_37755 === (4))){
var inst_37714 = (state_37754[(7)]);
var inst_37730 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37714);
var inst_37731 = new cljs.core.Keyword(null,"easyreagent-result-type","easyreagent-result-type",37994365).cljs$core$IFn$_invoke$arity$1(inst_37730);
var inst_37732 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37731,"json");
var state_37754__$1 = state_37754;
if(inst_37732){
var statearr_37758_37815 = state_37754__$1;
(statearr_37758_37815[(1)] = (12));

} else {
var statearr_37759_37816 = state_37754__$1;
(statearr_37759_37816[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (15))){
var state_37754__$1 = state_37754;
var statearr_37760_37817 = state_37754__$1;
(statearr_37760_37817[(2)] = null);

(statearr_37760_37817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (13))){
var state_37754__$1 = state_37754;
var statearr_37761_37818 = state_37754__$1;
(statearr_37761_37818[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (6))){
var inst_37719 = (state_37754[(8)]);
var state_37754__$1 = state_37754;
var statearr_37763_37819 = state_37754__$1;
(statearr_37763_37819[(2)] = inst_37719);

(statearr_37763_37819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (17))){
var inst_37714 = (state_37754[(7)]);
var inst_37737 = (state_37754[(2)]);
var inst_37738 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37714);
var inst_37739 = (inst_37737.cljs$core$IFn$_invoke$arity$1 ? inst_37737.cljs$core$IFn$_invoke$arity$1(inst_37738) : inst_37737.call(null, inst_37738));
var state_37754__$1 = state_37754;
var statearr_37764_37820 = state_37754__$1;
(statearr_37764_37820[(2)] = inst_37739);

(statearr_37764_37820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (3))){
var inst_37719 = (state_37754[(8)]);
var inst_37719__$1 = callback;
var state_37754__$1 = (function (){var statearr_37765 = state_37754;
(statearr_37765[(8)] = inst_37719__$1);

return statearr_37765;
})();
if(cljs.core.truth_(inst_37719__$1)){
var statearr_37766_37821 = state_37754__$1;
(statearr_37766_37821[(1)] = (6));

} else {
var statearr_37767_37822 = state_37754__$1;
(statearr_37767_37822[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (12))){
var state_37754__$1 = state_37754;
var statearr_37769_37823 = state_37754__$1;
(statearr_37769_37823[(1)] = (16));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (2))){
var inst_37714 = (state_37754[(7)]);
var inst_37714__$1 = (state_37754[(2)]);
var inst_37715 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37714__$1);
var inst_37716 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(inst_37715);
var inst_37717 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37716,"success");
var state_37754__$1 = (function (){var statearr_37770 = state_37754;
(statearr_37770[(7)] = inst_37714__$1);

return statearr_37770;
})();
if(inst_37717){
var statearr_37771_37824 = state_37754__$1;
(statearr_37771_37824[(1)] = (3));

} else {
var statearr_37772_37825 = state_37754__$1;
(statearr_37772_37825[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (19))){
var state_37754__$1 = state_37754;
var statearr_37773_37826 = state_37754__$1;
(statearr_37773_37826[(2)] = null);

(statearr_37773_37826[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (11))){
var inst_37727 = (state_37754[(2)]);
var inst_37728 = (inst_37727.cljs$core$IFn$_invoke$arity$0 ? inst_37727.cljs$core$IFn$_invoke$arity$0() : inst_37727.call(null, ));
var state_37754__$1 = state_37754;
var statearr_37774_37827 = state_37754__$1;
(statearr_37774_37827[(2)] = inst_37728);

(statearr_37774_37827[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (9))){
var inst_37723 = (state_37754[(9)]);
var state_37754__$1 = state_37754;
var statearr_37775_37828 = state_37754__$1;
(statearr_37775_37828[(2)] = inst_37723);

(statearr_37775_37828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (5))){
var inst_37752 = (state_37754[(2)]);
var state_37754__$1 = state_37754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37754__$1,inst_37752);
} else {
if((state_val_37755 === (14))){
var inst_37750 = (state_37754[(2)]);
var state_37754__$1 = state_37754;
var statearr_37776_37829 = state_37754__$1;
(statearr_37776_37829[(2)] = inst_37750);

(statearr_37776_37829[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (16))){
var state_37754__$1 = state_37754;
var statearr_37777_37830 = state_37754__$1;
(statearr_37777_37830[(2)] = cljs.core.identity);

(statearr_37777_37830[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (10))){
var state_37754__$1 = state_37754;
var statearr_37778_37831 = state_37754__$1;
(statearr_37778_37831[(2)] = cljs.core.identity);

(statearr_37778_37831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (18))){
var inst_37714 = (state_37754[(7)]);
var inst_37742 = (function (){var result__37527__auto__ = inst_37714;
return (function (p1__37700_SHARP_){
return alert(["message failed to send",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37700_SHARP_)].join(''));
});
})();
var inst_37743 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_37714);
var inst_37744 = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(inst_37743);
var inst_37745 = inst_37742(inst_37744);
var state_37754__$1 = state_37754;
var statearr_37779_37832 = state_37754__$1;
(statearr_37779_37832[(2)] = inst_37745);

(statearr_37779_37832[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37755 === (8))){
var inst_37723 = (state_37754[(9)]);
var inst_37723__$1 = (state_37754[(2)]);
var state_37754__$1 = (function (){var statearr_37780 = state_37754;
(statearr_37780[(9)] = inst_37723__$1);

return statearr_37780;
})();
if(cljs.core.truth_(inst_37723__$1)){
var statearr_37781_37833 = state_37754__$1;
(statearr_37781_37833[(1)] = (9));

} else {
var statearr_37782_37834 = state_37754__$1;
(statearr_37782_37834[(1)] = (10));

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
var easyreagent$fullstack$chat_state$state_machine__35092__auto__ = null;
var easyreagent$fullstack$chat_state$state_machine__35092__auto____0 = (function (){
var statearr_37783 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37783[(0)] = easyreagent$fullstack$chat_state$state_machine__35092__auto__);

(statearr_37783[(1)] = (1));

return statearr_37783;
});
var easyreagent$fullstack$chat_state$state_machine__35092__auto____1 = (function (state_37754){
while(true){
var ret_value__35093__auto__ = (function (){try{while(true){
var result__35094__auto__ = switch__35091__auto__(state_37754);
if(cljs.core.keyword_identical_QMARK_(result__35094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35094__auto__;
}
break;
}
}catch (e37784){var ex__35095__auto__ = e37784;
var statearr_37785_37835 = state_37754;
(statearr_37785_37835[(2)] = ex__35095__auto__);


if(cljs.core.seq((state_37754[(4)]))){
var statearr_37786_37836 = state_37754;
(statearr_37786_37836[(1)] = cljs.core.first((state_37754[(4)])));

} else {
throw ex__35095__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37837 = state_37754;
state_37754 = G__37837;
continue;
} else {
return ret_value__35093__auto__;
}
break;
}
});
easyreagent$fullstack$chat_state$state_machine__35092__auto__ = function(state_37754){
switch(arguments.length){
case 0:
return easyreagent$fullstack$chat_state$state_machine__35092__auto____0.call(this);
case 1:
return easyreagent$fullstack$chat_state$state_machine__35092__auto____1.call(this,state_37754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
easyreagent$fullstack$chat_state$state_machine__35092__auto__.cljs$core$IFn$_invoke$arity$0 = easyreagent$fullstack$chat_state$state_machine__35092__auto____0;
easyreagent$fullstack$chat_state$state_machine__35092__auto__.cljs$core$IFn$_invoke$arity$1 = easyreagent$fullstack$chat_state$state_machine__35092__auto____1;
return easyreagent$fullstack$chat_state$state_machine__35092__auto__;
})()
})();
var state__35293__auto__ = (function (){var statearr_37787 = f__35292__auto__();
(statearr_37787[(6)] = c__35291__auto__);

return statearr_37787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35293__auto__);
}));

return c__35291__auto__;
}));

(easyreagent.fullstack.chat_state.send_message.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(easyreagent.fullstack.chat_state.send_message.cljs$lang$applyTo = (function (seq37701){
var G__37702 = cljs.core.first(seq37701);
var seq37701__$1 = cljs.core.next(seq37701);
var G__37703 = cljs.core.first(seq37701__$1);
var seq37701__$2 = cljs.core.next(seq37701__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37702,G__37703,seq37701__$2);
}));


//# sourceMappingURL=easyreagent.fullstack.chat_state.js.map
