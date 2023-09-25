// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5457__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5457__auto__)){
var req = temp__5457__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

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
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__15632){
var vec__15633 = p__15632;
var k = cljs.core.nth.call(null,vec__15633,(0),null);
var v = cljs.core.nth.call(null,vec__15633,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__15636 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__15636)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__15636)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__15636)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__15636)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__15636)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__15636)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15636)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__15637){
var map__15638 = p__15637;
var map__15638__$1 = cljs.core.__destructure_map.call(null,map__15638);
var request = map__15638__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__15638__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__15638__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__15638__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__15639 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__15639,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__15639,response_type);

G__15639.setTimeoutInterval(timeout);

G__15639.setWithCredentials(send_credentials);

return G__15639;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__15640){
var map__15641 = p__15640;
var map__15641__$1 = cljs.core.__destructure_map.call(null,map__15641);
var request = map__15641__$1;
var request_method = cljs.core.get.call(null,map__15641__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__15641__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__15641__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__15641__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__15641__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__5043__auto__ = request_method;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__12867__auto___15664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_15652){
var state_val_15653 = (state_15652[(1)]);
if((state_val_15653 === (1))){
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15652__$1,(2),cancel);
} else {
if((state_val_15653 === (2))){
var inst_15643 = (state_15652[(2)]);
var inst_15644 = xhr.isComplete();
var inst_15645 = cljs.core.not.call(null,inst_15644);
var state_15652__$1 = (function (){var statearr_15654 = state_15652;
(statearr_15654[(7)] = inst_15643);

return statearr_15654;
})();
if(inst_15645){
var statearr_15655_15665 = state_15652__$1;
(statearr_15655_15665[(1)] = (3));

} else {
var statearr_15656_15666 = state_15652__$1;
(statearr_15656_15666[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (3))){
var inst_15647 = xhr.abort();
var state_15652__$1 = state_15652;
var statearr_15657_15667 = state_15652__$1;
(statearr_15657_15667[(2)] = inst_15647);

(statearr_15657_15667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (4))){
var state_15652__$1 = state_15652;
var statearr_15658_15668 = state_15652__$1;
(statearr_15658_15668[(2)] = null);

(statearr_15658_15668[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (5))){
var inst_15650 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15652__$1,inst_15650);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__12851__auto__ = null;
var cljs_http$core$xhr_$_state_machine__12851__auto____0 = (function (){
var statearr_15659 = [null,null,null,null,null,null,null,null];
(statearr_15659[(0)] = cljs_http$core$xhr_$_state_machine__12851__auto__);

(statearr_15659[(1)] = (1));

return statearr_15659;
});
var cljs_http$core$xhr_$_state_machine__12851__auto____1 = (function (state_15652){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_15652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e15660){var ex__12854__auto__ = e15660;
var statearr_15661_15669 = state_15652;
(statearr_15661_15669[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_15652[(4)]))){
var statearr_15662_15670 = state_15652;
(statearr_15662_15670[(1)] = cljs.core.first.call(null,(state_15652[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15671 = state_15652;
state_15652 = G__15671;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__12851__auto__ = function(state_15652){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__12851__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__12851__auto____1.call(this,state_15652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__12851__auto____0;
cljs_http$core$xhr_$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__12851__auto____1;
return cljs_http$core$xhr_$_state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_15663 = f__12868__auto__.call(null);
(statearr_15663[(6)] = c__12867__auto___15664);

return statearr_15663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__15672){
var map__15673 = p__15672;
var map__15673__$1 = cljs.core.__destructure_map.call(null,map__15673);
var request = map__15673__$1;
var timeout = cljs.core.get.call(null,map__15673__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__15673__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__15673__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__15673__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_15686 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_15686], null));

if(cljs.core.truth_(cancel)){
var c__12867__auto___15687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_15678){
var state_val_15679 = (state_15678[(1)]);
if((state_val_15679 === (1))){
var state_15678__$1 = state_15678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15678__$1,(2),cancel);
} else {
if((state_val_15679 === (2))){
var inst_15675 = (state_15678[(2)]);
var inst_15676 = jsonp.cancel(req_15686);
var state_15678__$1 = (function (){var statearr_15680 = state_15678;
(statearr_15680[(7)] = inst_15675);

return statearr_15680;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15678__$1,inst_15676);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__12851__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__12851__auto____0 = (function (){
var statearr_15681 = [null,null,null,null,null,null,null,null];
(statearr_15681[(0)] = cljs_http$core$jsonp_$_state_machine__12851__auto__);

(statearr_15681[(1)] = (1));

return statearr_15681;
});
var cljs_http$core$jsonp_$_state_machine__12851__auto____1 = (function (state_15678){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_15678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e15682){var ex__12854__auto__ = e15682;
var statearr_15683_15688 = state_15678;
(statearr_15683_15688[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_15678[(4)]))){
var statearr_15684_15689 = state_15678;
(statearr_15684_15689[(1)] = cljs.core.first.call(null,(state_15678[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15690 = state_15678;
state_15678 = G__15690;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__12851__auto__ = function(state_15678){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__12851__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__12851__auto____1.call(this,state_15678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__12851__auto____0;
cljs_http$core$jsonp_$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__12851__auto____1;
return cljs_http$core$jsonp_$_state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_15685 = f__12868__auto__.call(null);
(statearr_15685[(6)] = c__12867__auto___15687);

return statearr_15685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__15691){
var map__15692 = p__15691;
var map__15692__$1 = cljs.core.__destructure_map.call(null,map__15692);
var request = map__15692__$1;
var request_method = cljs.core.get.call(null,map__15692__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
