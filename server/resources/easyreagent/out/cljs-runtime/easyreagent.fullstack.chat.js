goog.provide('easyreagent.fullstack.chat');
cljss.core.css(".er-fullstack-chat-prev-messages-view",".er-fullstack-chat-prev-messages-view{background-color:grey;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css(".er-fullstack-main-input-box",".er-fullstack-main-input-box{height:auto;max-width:none;align-self:stretch;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css(".er-fullstack-chat-submit",".er-fullstack-chat-submit{margin-left:0.25rem;}",cljs.core.PersistentVector.EMPTY);

cljss.core.css(".er-fullstack-chat-new-message-form",".er-fullstack-chat-new-message-form{margin-top:0.25rem;}",cljs.core.PersistentVector.EMPTY);
easyreagent.fullstack.chat.prev_messages = (function easyreagent$fullstack$chat$prev_messages(chat_id){
return (function (chat_id__$1){
easyreagent.fullstack.chat_state.fetch_messages_once(chat_id__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box.er-fullstack-chat-prev-messages-view","v-box.er-fullstack-chat-prev-messages-view",432009959),(function (){var iter__5520__auto__ = (function easyreagent$fullstack$chat$prev_messages_$_iter__24042(s__24043){
return (new cljs.core.LazySeq(null,(function (){
var s__24043__$1 = s__24043;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__24043__$1);
if(temp__5823__auto__){
var s__24043__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24043__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__24043__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__24045 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__24044 = (0);
while(true){
if((i__24044 < size__5519__auto__)){
var message = cljs.core._nth(c__5518__auto__,i__24044);
cljs.core.chunk_append(b__24045,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(message)], null));

var G__24046 = (i__24044 + (1));
i__24044 = G__24046;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24045),easyreagent$fullstack$chat$prev_messages_$_iter__24042(cljs.core.chunk_rest(s__24043__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24045),null);
}
} else {
var message = cljs.core.first(s__24043__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(message)], null),easyreagent$fullstack$chat$prev_messages_$_iter__24042(cljs.core.rest(s__24043__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(easyreagent.fullstack.chat_state.all_messages),chat_id__$1)));
})()], null);
});
});
easyreagent.fullstack.chat.new_message_input = (function easyreagent$fullstack$chat$new_message_input(chat_id){
var curr_text_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (chat_id__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.er-fullstack-chat-new-message-form","form.er-fullstack-chat-new-message-form",-1925162816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

easyreagent.fullstack.chat_state.send_message(chat_id__$1,cljs.core.deref(curr_text_input));

return cljs.core.reset_BANG_(curr_text_input,"");
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-box.items-end","h-box.items-end",-1958373854),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.components.text_field,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"er-fullstack-main-input-box",new cljs.core.Keyword(null,"name","name",1843675177),"message-contents",new cljs.core.Keyword(null,"id","id",-1388402092),"message-contents"], null),curr_text_input], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"name","name",1843675177),"chat-id",new cljs.core.Keyword(null,"id","id",-1388402092),"chat-id",new cljs.core.Keyword(null,"value","value",305978217),chat_id__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary.er-fullstack-chat-submit","input.btn.btn-primary.er-fullstack-chat-submit",-2109842192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Submit",new cljs.core.Keyword(null,"value","value",305978217),"Send"], null)], null)], null)], null);
});
});
easyreagent.fullstack.chat.chat_window = (function easyreagent$fullstack$chat$chat_window(chat_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box","v-box",-1635293073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.fullstack.chat.prev_messages,chat_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [easyreagent.fullstack.chat.new_message_input,chat_id], null)], null);
});

//# sourceMappingURL=easyreagent.fullstack.chat.js.map
