goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5823__auto__ = (function (){var fexpr__28606 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__28606.cljs$core$IFn$_invoke$arity$1 ? fexpr__28606.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__28606.call(null, channel));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var req = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28607){
var vec__28608 = p__28607;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28608,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28608,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__28611 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__28611)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__28611)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__28611)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__28611)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__28611)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28611)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28611)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__28612){
var map__28613 = p__28612;
var map__28613__$1 = cljs.core.__destructure_map(map__28613);
var request = map__28613__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28613__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28613__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28613__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__28614 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__28614,default_headers);

cljs_http.core.apply_response_type_BANG_(G__28614,response_type);

G__28614.setTimeoutInterval(timeout);

G__28614.setWithCredentials(send_credentials);

return G__28614;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__28615){
var map__28616 = p__28615;
var map__28616__$1 = cljs.core.__destructure_map(map__28616);
var request = map__28616__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28616__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28616__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28616__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28616__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28616__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5043__auto__ = request_method;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__28617 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__28617) : cljs_http.core.error_kw.call(null, G__28617));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__27839__auto___28656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27840__auto__ = (function (){var switch__27639__auto__ = (function (state_28628){
var state_val_28629 = (state_28628[(1)]);
if((state_val_28629 === (1))){
var state_28628__$1 = state_28628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28628__$1,(2),cancel);
} else {
if((state_val_28629 === (2))){
var inst_28619 = (state_28628[(2)]);
var inst_28620 = xhr.isComplete();
var inst_28621 = cljs.core.not(inst_28620);
var state_28628__$1 = (function (){var statearr_28630 = state_28628;
(statearr_28630[(7)] = inst_28619);

return statearr_28630;
})();
if(inst_28621){
var statearr_28631_28657 = state_28628__$1;
(statearr_28631_28657[(1)] = (3));

} else {
var statearr_28632_28658 = state_28628__$1;
(statearr_28632_28658[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28629 === (3))){
var inst_28623 = xhr.abort();
var state_28628__$1 = state_28628;
var statearr_28633_28659 = state_28628__$1;
(statearr_28633_28659[(2)] = inst_28623);

(statearr_28633_28659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28629 === (4))){
var state_28628__$1 = state_28628;
var statearr_28634_28660 = state_28628__$1;
(statearr_28634_28660[(2)] = null);

(statearr_28634_28660[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28629 === (5))){
var inst_28626 = (state_28628[(2)]);
var state_28628__$1 = state_28628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28628__$1,inst_28626);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__27640__auto__ = null;
var cljs_http$core$xhr_$_state_machine__27640__auto____0 = (function (){
var statearr_28635 = [null,null,null,null,null,null,null,null];
(statearr_28635[(0)] = cljs_http$core$xhr_$_state_machine__27640__auto__);

(statearr_28635[(1)] = (1));

return statearr_28635;
});
var cljs_http$core$xhr_$_state_machine__27640__auto____1 = (function (state_28628){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__(state_28628);
if(cljs.core.keyword_identical_QMARK_(result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e28636){var ex__27643__auto__ = e28636;
var statearr_28637_28661 = state_28628;
(statearr_28637_28661[(2)] = ex__27643__auto__);


if(cljs.core.seq((state_28628[(4)]))){
var statearr_28638_28662 = state_28628;
(statearr_28638_28662[(1)] = cljs.core.first((state_28628[(4)])));

} else {
throw ex__27643__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28663 = state_28628;
state_28628 = G__28663;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__27640__auto__ = function(state_28628){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__27640__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__27640__auto____1.call(this,state_28628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__27640__auto____0;
cljs_http$core$xhr_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__27640__auto____1;
return cljs_http$core$xhr_$_state_machine__27640__auto__;
})()
})();
var state__27841__auto__ = (function (){var statearr_28639 = f__27840__auto__();
(statearr_28639[(6)] = c__27839__auto___28656);

return statearr_28639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27841__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__28640){
var map__28641 = p__28640;
var map__28641__$1 = cljs.core.__destructure_map(map__28641);
var request = map__28641__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28641__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28641__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28641__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28641__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_28664 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_28664], null));

if(cljs.core.truth_(cancel)){
var c__27839__auto___28665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27840__auto__ = (function (){var switch__27639__auto__ = (function (state_28646){
var state_val_28647 = (state_28646[(1)]);
if((state_val_28647 === (1))){
var state_28646__$1 = state_28646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28646__$1,(2),cancel);
} else {
if((state_val_28647 === (2))){
var inst_28643 = (state_28646[(2)]);
var inst_28644 = jsonp.cancel(req_28664);
var state_28646__$1 = (function (){var statearr_28648 = state_28646;
(statearr_28648[(7)] = inst_28643);

return statearr_28648;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28646__$1,inst_28644);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__27640__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__27640__auto____0 = (function (){
var statearr_28649 = [null,null,null,null,null,null,null,null];
(statearr_28649[(0)] = cljs_http$core$jsonp_$_state_machine__27640__auto__);

(statearr_28649[(1)] = (1));

return statearr_28649;
});
var cljs_http$core$jsonp_$_state_machine__27640__auto____1 = (function (state_28646){
while(true){
var ret_value__27641__auto__ = (function (){try{while(true){
var result__27642__auto__ = switch__27639__auto__(state_28646);
if(cljs.core.keyword_identical_QMARK_(result__27642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27642__auto__;
}
break;
}
}catch (e28650){var ex__27643__auto__ = e28650;
var statearr_28651_28666 = state_28646;
(statearr_28651_28666[(2)] = ex__27643__auto__);


if(cljs.core.seq((state_28646[(4)]))){
var statearr_28652_28667 = state_28646;
(statearr_28652_28667[(1)] = cljs.core.first((state_28646[(4)])));

} else {
throw ex__27643__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28668 = state_28646;
state_28646 = G__28668;
continue;
} else {
return ret_value__27641__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__27640__auto__ = function(state_28646){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__27640__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__27640__auto____1.call(this,state_28646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__27640__auto____0;
cljs_http$core$jsonp_$_state_machine__27640__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__27640__auto____1;
return cljs_http$core$jsonp_$_state_machine__27640__auto__;
})()
})();
var state__27841__auto__ = (function (){var statearr_28653 = f__27840__auto__();
(statearr_28653[(6)] = c__27839__auto___28665);

return statearr_28653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27841__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__28654){
var map__28655 = p__28654;
var map__28655__$1 = cljs.core.__destructure_map(map__28655);
var request = map__28655__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28655__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
