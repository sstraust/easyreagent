// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13137 = arguments.length;
switch (G__13137) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13138 = (function (f,blockable,meta13139){
this.f = f;
this.blockable = blockable;
this.meta13139 = meta13139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13140,meta13139__$1){
var self__ = this;
var _13140__$1 = this;
return (new cljs.core.async.t_cljs$core$async13138(self__.f,self__.blockable,meta13139__$1));
}));

(cljs.core.async.t_cljs$core$async13138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13140){
var self__ = this;
var _13140__$1 = this;
return self__.meta13139;
}));

(cljs.core.async.t_cljs$core$async13138.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13139","meta13139",1987674762,null)], null);
}));

(cljs.core.async.t_cljs$core$async13138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13138");

(cljs.core.async.t_cljs$core$async13138.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async13138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13138.
 */
cljs.core.async.__GT_t_cljs$core$async13138 = (function cljs$core$async$__GT_t_cljs$core$async13138(f__$1,blockable__$1,meta13139){
return (new cljs.core.async.t_cljs$core$async13138(f__$1,blockable__$1,meta13139));
});

}

return (new cljs.core.async.t_cljs$core$async13138(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13144 = arguments.length;
switch (G__13144) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13147 = arguments.length;
switch (G__13147) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13150 = arguments.length;
switch (G__13150) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13152 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13152);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_13152);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13154 = arguments.length;
switch (G__13154) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___13156 = n;
var x_13157 = (0);
while(true){
if((x_13157 < n__5633__auto___13156)){
(a[x_13157] = x_13157);

var G__13158 = (x_13157 + (1));
x_13157 = G__13158;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13159 = (function (flag,meta13160){
this.flag = flag;
this.meta13160 = meta13160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13161,meta13160__$1){
var self__ = this;
var _13161__$1 = this;
return (new cljs.core.async.t_cljs$core$async13159(self__.flag,meta13160__$1));
}));

(cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13161){
var self__ = this;
var _13161__$1 = this;
return self__.meta13160;
}));

(cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13160","meta13160",1105733710,null)], null);
}));

(cljs.core.async.t_cljs$core$async13159.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13159");

(cljs.core.async.t_cljs$core$async13159.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async13159");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13159.
 */
cljs.core.async.__GT_t_cljs$core$async13159 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13159(flag__$1,meta13160){
return (new cljs.core.async.t_cljs$core$async13159(flag__$1,meta13160));
});

}

return (new cljs.core.async.t_cljs$core$async13159(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13162 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13162 = (function (flag,cb,meta13163){
this.flag = flag;
this.cb = cb;
this.meta13163 = meta13163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13164,meta13163__$1){
var self__ = this;
var _13164__$1 = this;
return (new cljs.core.async.t_cljs$core$async13162(self__.flag,self__.cb,meta13163__$1));
}));

(cljs.core.async.t_cljs$core$async13162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13164){
var self__ = this;
var _13164__$1 = this;
return self__.meta13163;
}));

(cljs.core.async.t_cljs$core$async13162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async13162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13163","meta13163",978822438,null)], null);
}));

(cljs.core.async.t_cljs$core$async13162.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13162");

(cljs.core.async.t_cljs$core$async13162.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async13162");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13162.
 */
cljs.core.async.__GT_t_cljs$core$async13162 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13162(flag__$1,cb__$1,meta13163){
return (new cljs.core.async.t_cljs$core$async13162(flag__$1,cb__$1,meta13163));
});

}

return (new cljs.core.async.t_cljs$core$async13162(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13165_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13165_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13166_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13166_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13167 = (i + (1));
i = G__13167;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__5041__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___13172 = arguments.length;
var i__5767__auto___13173 = (0);
while(true){
if((i__5767__auto___13173 < len__5766__auto___13172)){
args__5772__auto__.push((arguments[i__5767__auto___13173]));

var G__13174 = (i__5767__auto___13173 + (1));
i__5767__auto___13173 = G__13174;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13170){
var map__13171 = p__13170;
var map__13171__$1 = cljs.core.__destructure_map.call(null,map__13171);
var opts = map__13171__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13168){
var G__13169 = cljs.core.first.call(null,seq13168);
var seq13168__$1 = cljs.core.next.call(null,seq13168);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13169,seq13168__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13176 = arguments.length;
switch (G__13176) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12867__auto___13223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_13200){
var state_val_13201 = (state_13200[(1)]);
if((state_val_13201 === (7))){
var inst_13196 = (state_13200[(2)]);
var state_13200__$1 = state_13200;
var statearr_13202_13224 = state_13200__$1;
(statearr_13202_13224[(2)] = inst_13196);

(statearr_13202_13224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (1))){
var state_13200__$1 = state_13200;
var statearr_13203_13225 = state_13200__$1;
(statearr_13203_13225[(2)] = null);

(statearr_13203_13225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (4))){
var inst_13179 = (state_13200[(7)]);
var inst_13179__$1 = (state_13200[(2)]);
var inst_13180 = (inst_13179__$1 == null);
var state_13200__$1 = (function (){var statearr_13204 = state_13200;
(statearr_13204[(7)] = inst_13179__$1);

return statearr_13204;
})();
if(cljs.core.truth_(inst_13180)){
var statearr_13205_13226 = state_13200__$1;
(statearr_13205_13226[(1)] = (5));

} else {
var statearr_13206_13227 = state_13200__$1;
(statearr_13206_13227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (13))){
var state_13200__$1 = state_13200;
var statearr_13207_13228 = state_13200__$1;
(statearr_13207_13228[(2)] = null);

(statearr_13207_13228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (6))){
var inst_13179 = (state_13200[(7)]);
var state_13200__$1 = state_13200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13200__$1,(11),to,inst_13179);
} else {
if((state_val_13201 === (3))){
var inst_13198 = (state_13200[(2)]);
var state_13200__$1 = state_13200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13200__$1,inst_13198);
} else {
if((state_val_13201 === (12))){
var state_13200__$1 = state_13200;
var statearr_13208_13229 = state_13200__$1;
(statearr_13208_13229[(2)] = null);

(statearr_13208_13229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (2))){
var state_13200__$1 = state_13200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13200__$1,(4),from);
} else {
if((state_val_13201 === (11))){
var inst_13189 = (state_13200[(2)]);
var state_13200__$1 = state_13200;
if(cljs.core.truth_(inst_13189)){
var statearr_13209_13230 = state_13200__$1;
(statearr_13209_13230[(1)] = (12));

} else {
var statearr_13210_13231 = state_13200__$1;
(statearr_13210_13231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (9))){
var state_13200__$1 = state_13200;
var statearr_13211_13232 = state_13200__$1;
(statearr_13211_13232[(2)] = null);

(statearr_13211_13232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (5))){
var state_13200__$1 = state_13200;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13212_13233 = state_13200__$1;
(statearr_13212_13233[(1)] = (8));

} else {
var statearr_13213_13234 = state_13200__$1;
(statearr_13213_13234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (14))){
var inst_13194 = (state_13200[(2)]);
var state_13200__$1 = state_13200;
var statearr_13214_13235 = state_13200__$1;
(statearr_13214_13235[(2)] = inst_13194);

(statearr_13214_13235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (10))){
var inst_13186 = (state_13200[(2)]);
var state_13200__$1 = state_13200;
var statearr_13215_13236 = state_13200__$1;
(statearr_13215_13236[(2)] = inst_13186);

(statearr_13215_13236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (8))){
var inst_13183 = cljs.core.async.close_BANG_.call(null,to);
var state_13200__$1 = state_13200;
var statearr_13216_13237 = state_13200__$1;
(statearr_13216_13237[(2)] = inst_13183);

(statearr_13216_13237[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__12851__auto__ = null;
var cljs$core$async$state_machine__12851__auto____0 = (function (){
var statearr_13217 = [null,null,null,null,null,null,null,null];
(statearr_13217[(0)] = cljs$core$async$state_machine__12851__auto__);

(statearr_13217[(1)] = (1));

return statearr_13217;
});
var cljs$core$async$state_machine__12851__auto____1 = (function (state_13200){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_13200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e13218){var ex__12854__auto__ = e13218;
var statearr_13219_13238 = state_13200;
(statearr_13219_13238[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_13200[(4)]))){
var statearr_13220_13239 = state_13200;
(statearr_13220_13239[(1)] = cljs.core.first.call(null,(state_13200[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13240 = state_13200;
state_13200 = G__13240;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$state_machine__12851__auto__ = function(state_13200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12851__auto____1.call(this,state_13200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12851__auto____0;
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12851__auto____1;
return cljs$core$async$state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_13221 = f__12868__auto__.call(null);
(statearr_13221[(6)] = c__12867__auto___13223);

return statearr_13221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__13241){
var vec__13242 = p__13241;
var v = cljs.core.nth.call(null,vec__13242,(0),null);
var p = cljs.core.nth.call(null,vec__13242,(1),null);
var job = vec__13242;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12867__auto___13418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_13249){
var state_val_13250 = (state_13249[(1)]);
if((state_val_13250 === (1))){
var state_13249__$1 = state_13249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13249__$1,(2),res,v);
} else {
if((state_val_13250 === (2))){
var inst_13246 = (state_13249[(2)]);
var inst_13247 = cljs.core.async.close_BANG_.call(null,res);
var state_13249__$1 = (function (){var statearr_13251 = state_13249;
(statearr_13251[(7)] = inst_13246);

return statearr_13251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13249__$1,inst_13247);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0 = (function (){
var statearr_13252 = [null,null,null,null,null,null,null,null];
(statearr_13252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__);

(statearr_13252[(1)] = (1));

return statearr_13252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1 = (function (state_13249){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_13249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e13253){var ex__12854__auto__ = e13253;
var statearr_13254_13419 = state_13249;
(statearr_13254_13419[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_13249[(4)]))){
var statearr_13255_13420 = state_13249;
(statearr_13255_13420[(1)] = cljs.core.first.call(null,(state_13249[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13421 = state_13249;
state_13249 = G__13421;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__ = function(state_13249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1.call(this,state_13249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_13256 = f__12868__auto__.call(null);
(statearr_13256[(6)] = c__12867__auto___13418);

return statearr_13256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__13257){
var vec__13258 = p__13257;
var v = cljs.core.nth.call(null,vec__13258,(0),null);
var p = cljs.core.nth.call(null,vec__13258,(1),null);
var job = vec__13258;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5633__auto___13422 = n;
var __13423 = (0);
while(true){
if((__13423 < n__5633__auto___13422)){
var G__13261_13424 = type;
var G__13261_13425__$1 = (((G__13261_13424 instanceof cljs.core.Keyword))?G__13261_13424.fqn:null);
switch (G__13261_13425__$1) {
case "compute":
var c__12867__auto___13427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13423,c__12867__auto___13427,G__13261_13424,G__13261_13425__$1,n__5633__auto___13422,jobs,results,process__$1,async){
return (function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = ((function (__13423,c__12867__auto___13427,G__13261_13424,G__13261_13425__$1,n__5633__auto___13422,jobs,results,process__$1,async){
return (function (state_13274){
var state_val_13275 = (state_13274[(1)]);
if((state_val_13275 === (1))){
var state_13274__$1 = state_13274;
var statearr_13276_13428 = state_13274__$1;
(statearr_13276_13428[(2)] = null);

(statearr_13276_13428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (2))){
var state_13274__$1 = state_13274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13274__$1,(4),jobs);
} else {
if((state_val_13275 === (3))){
var inst_13272 = (state_13274[(2)]);
var state_13274__$1 = state_13274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13274__$1,inst_13272);
} else {
if((state_val_13275 === (4))){
var inst_13264 = (state_13274[(2)]);
var inst_13265 = process__$1.call(null,inst_13264);
var state_13274__$1 = state_13274;
if(cljs.core.truth_(inst_13265)){
var statearr_13277_13429 = state_13274__$1;
(statearr_13277_13429[(1)] = (5));

} else {
var statearr_13278_13430 = state_13274__$1;
(statearr_13278_13430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (5))){
var state_13274__$1 = state_13274;
var statearr_13279_13431 = state_13274__$1;
(statearr_13279_13431[(2)] = null);

(statearr_13279_13431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (6))){
var state_13274__$1 = state_13274;
var statearr_13280_13432 = state_13274__$1;
(statearr_13280_13432[(2)] = null);

(statearr_13280_13432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13275 === (7))){
var inst_13270 = (state_13274[(2)]);
var state_13274__$1 = state_13274;
var statearr_13281_13433 = state_13274__$1;
(statearr_13281_13433[(2)] = inst_13270);

(statearr_13281_13433[(1)] = (3));


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
});})(__13423,c__12867__auto___13427,G__13261_13424,G__13261_13425__$1,n__5633__auto___13422,jobs,results,process__$1,async))
;
return ((function (__13423,switch__12850__auto__,c__12867__auto___13427,G__13261_13424,G__13261_13425__$1,n__5633__auto___13422,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0 = (function (){
var statearr_13282 = [null,null,null,null,null,null,null];
(statearr_13282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__);

(statearr_13282[(1)] = (1));

return statearr_13282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1 = (function (state_13274){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_13274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e13283){var ex__12854__auto__ = e13283;
var statearr_13284_13434 = state_13274;
(statearr_13284_13434[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_13274[(4)]))){
var statearr_13285_13435 = state_13274;
(statearr_13285_13435[(1)] = cljs.core.first.call(null,(state_13274[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13436 = state_13274;
state_13274 = G__13436;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__ = function(state_13274){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1.call(this,state_13274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__;
})()
;})(__13423,switch__12850__auto__,c__12867__auto___13427,G__13261_13424,G__13261_13425__$1,n__5633__auto___13422,jobs,results,process__$1,async))
})();
var state__12869__auto__ = (function (){var statearr_13286 = f__12868__auto__.call(null);
(statearr_13286[(6)] = c__12867__auto___13427);

return statearr_13286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
});})(__13423,c__12867__auto___13427,G__13261_13424,G__13261_13425__$1,n__5633__auto___13422,jobs,results,process__$1,async))
);


break;
case "async":
var c__12867__auto___13437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13423,c__12867__auto___13437,G__13261_13424,G__13261_13425__$1,n__5633__auto___13422,jobs,results,process__$1,async){
return (function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = ((function (__13423,c__12867__auto___13437,G__13261_13424,G__13261_13425__$1,n__5633__auto___13422,jobs,results,process__$1,async){
return (function (state_13299){
var state_val_13300 = (state_13299[(1)]);
if((state_val_13300 === (1))){
var state_13299__$1 = state_13299;
var statearr_13301_13438 = state_13299__$1;
(statearr_13301_13438[(2)] = null);

(statearr_13301_13438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13300 === (2))){
var state_13299__$1 = state_13299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13299__$1,(4),jobs);
} else {
if((state_val_13300 === (3))){
var inst_13297 = (state_13299[(2)]);
var state_13299__$1 = state_13299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13299__$1,inst_13297);
} else {
if((state_val_13300 === (4))){
var inst_13289 = (state_13299[(2)]);
var inst_13290 = async.call(null,inst_13289);
var state_13299__$1 = state_13299;
if(cljs.core.truth_(inst_13290)){
var statearr_13302_13439 = state_13299__$1;
(statearr_13302_13439[(1)] = (5));

} else {
var statearr_13303_13440 = state_13299__$1;
(statearr_13303_13440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13300 === (5))){
var state_13299__$1 = state_13299;
var statearr_13304_13441 = state_13299__$1;
(statearr_13304_13441[(2)] = null);

(statearr_13304_13441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13300 === (6))){
var state_13299__$1 = state_13299;
var statearr_13305_13442 = state_13299__$1;
(statearr_13305_13442[(2)] = null);

(statearr_13305_13442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13300 === (7))){
var inst_13295 = (state_13299[(2)]);
var state_13299__$1 = state_13299;
var statearr_13306_13443 = state_13299__$1;
(statearr_13306_13443[(2)] = inst_13295);

(statearr_13306_13443[(1)] = (3));


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
});})(__13423,c__12867__auto___13437,G__13261_13424,G__13261_13425__$1,n__5633__auto___13422,jobs,results,process__$1,async))
;
return ((function (__13423,switch__12850__auto__,c__12867__auto___13437,G__13261_13424,G__13261_13425__$1,n__5633__auto___13422,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0 = (function (){
var statearr_13307 = [null,null,null,null,null,null,null];
(statearr_13307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__);

(statearr_13307[(1)] = (1));

return statearr_13307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1 = (function (state_13299){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_13299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e13308){var ex__12854__auto__ = e13308;
var statearr_13309_13444 = state_13299;
(statearr_13309_13444[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_13299[(4)]))){
var statearr_13310_13445 = state_13299;
(statearr_13310_13445[(1)] = cljs.core.first.call(null,(state_13299[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13446 = state_13299;
state_13299 = G__13446;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__ = function(state_13299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1.call(this,state_13299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__;
})()
;})(__13423,switch__12850__auto__,c__12867__auto___13437,G__13261_13424,G__13261_13425__$1,n__5633__auto___13422,jobs,results,process__$1,async))
})();
var state__12869__auto__ = (function (){var statearr_13311 = f__12868__auto__.call(null);
(statearr_13311[(6)] = c__12867__auto___13437);

return statearr_13311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
});})(__13423,c__12867__auto___13437,G__13261_13424,G__13261_13425__$1,n__5633__auto___13422,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13261_13425__$1)].join('')));

}

var G__13447 = (__13423 + (1));
__13423 = G__13447;
continue;
} else {
}
break;
}

var c__12867__auto___13448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_13333){
var state_val_13334 = (state_13333[(1)]);
if((state_val_13334 === (1))){
var state_13333__$1 = state_13333;
var statearr_13335_13449 = state_13333__$1;
(statearr_13335_13449[(2)] = null);

(statearr_13335_13449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13334 === (2))){
var state_13333__$1 = state_13333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13333__$1,(4),from);
} else {
if((state_val_13334 === (3))){
var inst_13331 = (state_13333[(2)]);
var state_13333__$1 = state_13333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13333__$1,inst_13331);
} else {
if((state_val_13334 === (4))){
var inst_13314 = (state_13333[(7)]);
var inst_13314__$1 = (state_13333[(2)]);
var inst_13315 = (inst_13314__$1 == null);
var state_13333__$1 = (function (){var statearr_13336 = state_13333;
(statearr_13336[(7)] = inst_13314__$1);

return statearr_13336;
})();
if(cljs.core.truth_(inst_13315)){
var statearr_13337_13450 = state_13333__$1;
(statearr_13337_13450[(1)] = (5));

} else {
var statearr_13338_13451 = state_13333__$1;
(statearr_13338_13451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13334 === (5))){
var inst_13317 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13333__$1 = state_13333;
var statearr_13339_13452 = state_13333__$1;
(statearr_13339_13452[(2)] = inst_13317);

(statearr_13339_13452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13334 === (6))){
var inst_13319 = (state_13333[(8)]);
var inst_13314 = (state_13333[(7)]);
var inst_13319__$1 = cljs.core.async.chan.call(null,(1));
var inst_13320 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13321 = [inst_13314,inst_13319__$1];
var inst_13322 = (new cljs.core.PersistentVector(null,2,(5),inst_13320,inst_13321,null));
var state_13333__$1 = (function (){var statearr_13340 = state_13333;
(statearr_13340[(8)] = inst_13319__$1);

return statearr_13340;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13333__$1,(8),jobs,inst_13322);
} else {
if((state_val_13334 === (7))){
var inst_13329 = (state_13333[(2)]);
var state_13333__$1 = state_13333;
var statearr_13341_13453 = state_13333__$1;
(statearr_13341_13453[(2)] = inst_13329);

(statearr_13341_13453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13334 === (8))){
var inst_13319 = (state_13333[(8)]);
var inst_13324 = (state_13333[(2)]);
var state_13333__$1 = (function (){var statearr_13342 = state_13333;
(statearr_13342[(9)] = inst_13324);

return statearr_13342;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13333__$1,(9),results,inst_13319);
} else {
if((state_val_13334 === (9))){
var inst_13326 = (state_13333[(2)]);
var state_13333__$1 = (function (){var statearr_13343 = state_13333;
(statearr_13343[(10)] = inst_13326);

return statearr_13343;
})();
var statearr_13344_13454 = state_13333__$1;
(statearr_13344_13454[(2)] = null);

(statearr_13344_13454[(1)] = (2));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0 = (function (){
var statearr_13345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__);

(statearr_13345[(1)] = (1));

return statearr_13345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1 = (function (state_13333){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_13333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e13346){var ex__12854__auto__ = e13346;
var statearr_13347_13455 = state_13333;
(statearr_13347_13455[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_13333[(4)]))){
var statearr_13348_13456 = state_13333;
(statearr_13348_13456[(1)] = cljs.core.first.call(null,(state_13333[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13457 = state_13333;
state_13333 = G__13457;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__ = function(state_13333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1.call(this,state_13333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_13349 = f__12868__auto__.call(null);
(statearr_13349[(6)] = c__12867__auto___13448);

return statearr_13349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


var c__12867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_13387){
var state_val_13388 = (state_13387[(1)]);
if((state_val_13388 === (7))){
var inst_13383 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13389_13458 = state_13387__$1;
(statearr_13389_13458[(2)] = inst_13383);

(statearr_13389_13458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (20))){
var state_13387__$1 = state_13387;
var statearr_13390_13459 = state_13387__$1;
(statearr_13390_13459[(2)] = null);

(statearr_13390_13459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (1))){
var state_13387__$1 = state_13387;
var statearr_13391_13460 = state_13387__$1;
(statearr_13391_13460[(2)] = null);

(statearr_13391_13460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (4))){
var inst_13352 = (state_13387[(7)]);
var inst_13352__$1 = (state_13387[(2)]);
var inst_13353 = (inst_13352__$1 == null);
var state_13387__$1 = (function (){var statearr_13392 = state_13387;
(statearr_13392[(7)] = inst_13352__$1);

return statearr_13392;
})();
if(cljs.core.truth_(inst_13353)){
var statearr_13393_13461 = state_13387__$1;
(statearr_13393_13461[(1)] = (5));

} else {
var statearr_13394_13462 = state_13387__$1;
(statearr_13394_13462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (15))){
var inst_13365 = (state_13387[(8)]);
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13387__$1,(18),to,inst_13365);
} else {
if((state_val_13388 === (21))){
var inst_13378 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13395_13463 = state_13387__$1;
(statearr_13395_13463[(2)] = inst_13378);

(statearr_13395_13463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (13))){
var inst_13380 = (state_13387[(2)]);
var state_13387__$1 = (function (){var statearr_13396 = state_13387;
(statearr_13396[(9)] = inst_13380);

return statearr_13396;
})();
var statearr_13397_13464 = state_13387__$1;
(statearr_13397_13464[(2)] = null);

(statearr_13397_13464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (6))){
var inst_13352 = (state_13387[(7)]);
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13387__$1,(11),inst_13352);
} else {
if((state_val_13388 === (17))){
var inst_13373 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
if(cljs.core.truth_(inst_13373)){
var statearr_13398_13465 = state_13387__$1;
(statearr_13398_13465[(1)] = (19));

} else {
var statearr_13399_13466 = state_13387__$1;
(statearr_13399_13466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (3))){
var inst_13385 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13387__$1,inst_13385);
} else {
if((state_val_13388 === (12))){
var inst_13362 = (state_13387[(10)]);
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13387__$1,(14),inst_13362);
} else {
if((state_val_13388 === (2))){
var state_13387__$1 = state_13387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13387__$1,(4),results);
} else {
if((state_val_13388 === (19))){
var state_13387__$1 = state_13387;
var statearr_13400_13467 = state_13387__$1;
(statearr_13400_13467[(2)] = null);

(statearr_13400_13467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (11))){
var inst_13362 = (state_13387[(2)]);
var state_13387__$1 = (function (){var statearr_13401 = state_13387;
(statearr_13401[(10)] = inst_13362);

return statearr_13401;
})();
var statearr_13402_13468 = state_13387__$1;
(statearr_13402_13468[(2)] = null);

(statearr_13402_13468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (9))){
var state_13387__$1 = state_13387;
var statearr_13403_13469 = state_13387__$1;
(statearr_13403_13469[(2)] = null);

(statearr_13403_13469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (5))){
var state_13387__$1 = state_13387;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13404_13470 = state_13387__$1;
(statearr_13404_13470[(1)] = (8));

} else {
var statearr_13405_13471 = state_13387__$1;
(statearr_13405_13471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (14))){
var inst_13367 = (state_13387[(11)]);
var inst_13365 = (state_13387[(8)]);
var inst_13365__$1 = (state_13387[(2)]);
var inst_13366 = (inst_13365__$1 == null);
var inst_13367__$1 = cljs.core.not.call(null,inst_13366);
var state_13387__$1 = (function (){var statearr_13406 = state_13387;
(statearr_13406[(11)] = inst_13367__$1);

(statearr_13406[(8)] = inst_13365__$1);

return statearr_13406;
})();
if(inst_13367__$1){
var statearr_13407_13472 = state_13387__$1;
(statearr_13407_13472[(1)] = (15));

} else {
var statearr_13408_13473 = state_13387__$1;
(statearr_13408_13473[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (16))){
var inst_13367 = (state_13387[(11)]);
var state_13387__$1 = state_13387;
var statearr_13409_13474 = state_13387__$1;
(statearr_13409_13474[(2)] = inst_13367);

(statearr_13409_13474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (10))){
var inst_13359 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13410_13475 = state_13387__$1;
(statearr_13410_13475[(2)] = inst_13359);

(statearr_13410_13475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (18))){
var inst_13370 = (state_13387[(2)]);
var state_13387__$1 = state_13387;
var statearr_13411_13476 = state_13387__$1;
(statearr_13411_13476[(2)] = inst_13370);

(statearr_13411_13476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13388 === (8))){
var inst_13356 = cljs.core.async.close_BANG_.call(null,to);
var state_13387__$1 = state_13387;
var statearr_13412_13477 = state_13387__$1;
(statearr_13412_13477[(2)] = inst_13356);

(statearr_13412_13477[(1)] = (10));


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
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0 = (function (){
var statearr_13413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__);

(statearr_13413[(1)] = (1));

return statearr_13413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1 = (function (state_13387){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_13387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e13414){var ex__12854__auto__ = e13414;
var statearr_13415_13478 = state_13387;
(statearr_13415_13478[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_13387[(4)]))){
var statearr_13416_13479 = state_13387;
(statearr_13416_13479[(1)] = cljs.core.first.call(null,(state_13387[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13480 = state_13387;
state_13387 = G__13480;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__ = function(state_13387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1.call(this,state_13387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_13417 = f__12868__auto__.call(null);
(statearr_13417[(6)] = c__12867__auto__);

return statearr_13417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));

return c__12867__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13482 = arguments.length;
switch (G__13482) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__13485 = arguments.length;
switch (G__13485) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__13488 = arguments.length;
switch (G__13488) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12867__auto___13538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_13514){
var state_val_13515 = (state_13514[(1)]);
if((state_val_13515 === (7))){
var inst_13510 = (state_13514[(2)]);
var state_13514__$1 = state_13514;
var statearr_13516_13539 = state_13514__$1;
(statearr_13516_13539[(2)] = inst_13510);

(statearr_13516_13539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (1))){
var state_13514__$1 = state_13514;
var statearr_13517_13540 = state_13514__$1;
(statearr_13517_13540[(2)] = null);

(statearr_13517_13540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (4))){
var inst_13491 = (state_13514[(7)]);
var inst_13491__$1 = (state_13514[(2)]);
var inst_13492 = (inst_13491__$1 == null);
var state_13514__$1 = (function (){var statearr_13518 = state_13514;
(statearr_13518[(7)] = inst_13491__$1);

return statearr_13518;
})();
if(cljs.core.truth_(inst_13492)){
var statearr_13519_13541 = state_13514__$1;
(statearr_13519_13541[(1)] = (5));

} else {
var statearr_13520_13542 = state_13514__$1;
(statearr_13520_13542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (13))){
var state_13514__$1 = state_13514;
var statearr_13521_13543 = state_13514__$1;
(statearr_13521_13543[(2)] = null);

(statearr_13521_13543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (6))){
var inst_13491 = (state_13514[(7)]);
var inst_13497 = p.call(null,inst_13491);
var state_13514__$1 = state_13514;
if(cljs.core.truth_(inst_13497)){
var statearr_13522_13544 = state_13514__$1;
(statearr_13522_13544[(1)] = (9));

} else {
var statearr_13523_13545 = state_13514__$1;
(statearr_13523_13545[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (3))){
var inst_13512 = (state_13514[(2)]);
var state_13514__$1 = state_13514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13514__$1,inst_13512);
} else {
if((state_val_13515 === (12))){
var state_13514__$1 = state_13514;
var statearr_13524_13546 = state_13514__$1;
(statearr_13524_13546[(2)] = null);

(statearr_13524_13546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (2))){
var state_13514__$1 = state_13514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13514__$1,(4),ch);
} else {
if((state_val_13515 === (11))){
var inst_13491 = (state_13514[(7)]);
var inst_13501 = (state_13514[(2)]);
var state_13514__$1 = state_13514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13514__$1,(8),inst_13501,inst_13491);
} else {
if((state_val_13515 === (9))){
var state_13514__$1 = state_13514;
var statearr_13525_13547 = state_13514__$1;
(statearr_13525_13547[(2)] = tc);

(statearr_13525_13547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (5))){
var inst_13494 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13495 = cljs.core.async.close_BANG_.call(null,fc);
var state_13514__$1 = (function (){var statearr_13526 = state_13514;
(statearr_13526[(8)] = inst_13494);

return statearr_13526;
})();
var statearr_13527_13548 = state_13514__$1;
(statearr_13527_13548[(2)] = inst_13495);

(statearr_13527_13548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (14))){
var inst_13508 = (state_13514[(2)]);
var state_13514__$1 = state_13514;
var statearr_13528_13549 = state_13514__$1;
(statearr_13528_13549[(2)] = inst_13508);

(statearr_13528_13549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (10))){
var state_13514__$1 = state_13514;
var statearr_13529_13550 = state_13514__$1;
(statearr_13529_13550[(2)] = fc);

(statearr_13529_13550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13515 === (8))){
var inst_13503 = (state_13514[(2)]);
var state_13514__$1 = state_13514;
if(cljs.core.truth_(inst_13503)){
var statearr_13530_13551 = state_13514__$1;
(statearr_13530_13551[(1)] = (12));

} else {
var statearr_13531_13552 = state_13514__$1;
(statearr_13531_13552[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__12851__auto__ = null;
var cljs$core$async$state_machine__12851__auto____0 = (function (){
var statearr_13532 = [null,null,null,null,null,null,null,null,null];
(statearr_13532[(0)] = cljs$core$async$state_machine__12851__auto__);

(statearr_13532[(1)] = (1));

return statearr_13532;
});
var cljs$core$async$state_machine__12851__auto____1 = (function (state_13514){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_13514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e13533){var ex__12854__auto__ = e13533;
var statearr_13534_13553 = state_13514;
(statearr_13534_13553[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_13514[(4)]))){
var statearr_13535_13554 = state_13514;
(statearr_13535_13554[(1)] = cljs.core.first.call(null,(state_13514[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13555 = state_13514;
state_13514 = G__13555;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$state_machine__12851__auto__ = function(state_13514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12851__auto____1.call(this,state_13514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12851__auto____0;
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12851__auto____1;
return cljs$core$async$state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_13536 = f__12868__auto__.call(null);
(statearr_13536[(6)] = c__12867__auto___13538);

return statearr_13536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_13577){
var state_val_13578 = (state_13577[(1)]);
if((state_val_13578 === (7))){
var inst_13573 = (state_13577[(2)]);
var state_13577__$1 = state_13577;
var statearr_13579_13598 = state_13577__$1;
(statearr_13579_13598[(2)] = inst_13573);

(statearr_13579_13598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13578 === (1))){
var inst_13556 = init;
var inst_13557 = inst_13556;
var state_13577__$1 = (function (){var statearr_13580 = state_13577;
(statearr_13580[(7)] = inst_13557);

return statearr_13580;
})();
var statearr_13581_13599 = state_13577__$1;
(statearr_13581_13599[(2)] = null);

(statearr_13581_13599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13578 === (4))){
var inst_13560 = (state_13577[(8)]);
var inst_13560__$1 = (state_13577[(2)]);
var inst_13561 = (inst_13560__$1 == null);
var state_13577__$1 = (function (){var statearr_13582 = state_13577;
(statearr_13582[(8)] = inst_13560__$1);

return statearr_13582;
})();
if(cljs.core.truth_(inst_13561)){
var statearr_13583_13600 = state_13577__$1;
(statearr_13583_13600[(1)] = (5));

} else {
var statearr_13584_13601 = state_13577__$1;
(statearr_13584_13601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13578 === (6))){
var inst_13564 = (state_13577[(9)]);
var inst_13557 = (state_13577[(7)]);
var inst_13560 = (state_13577[(8)]);
var inst_13564__$1 = f.call(null,inst_13557,inst_13560);
var inst_13565 = cljs.core.reduced_QMARK_.call(null,inst_13564__$1);
var state_13577__$1 = (function (){var statearr_13585 = state_13577;
(statearr_13585[(9)] = inst_13564__$1);

return statearr_13585;
})();
if(inst_13565){
var statearr_13586_13602 = state_13577__$1;
(statearr_13586_13602[(1)] = (8));

} else {
var statearr_13587_13603 = state_13577__$1;
(statearr_13587_13603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13578 === (3))){
var inst_13575 = (state_13577[(2)]);
var state_13577__$1 = state_13577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13577__$1,inst_13575);
} else {
if((state_val_13578 === (2))){
var state_13577__$1 = state_13577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13577__$1,(4),ch);
} else {
if((state_val_13578 === (9))){
var inst_13564 = (state_13577[(9)]);
var inst_13557 = inst_13564;
var state_13577__$1 = (function (){var statearr_13588 = state_13577;
(statearr_13588[(7)] = inst_13557);

return statearr_13588;
})();
var statearr_13589_13604 = state_13577__$1;
(statearr_13589_13604[(2)] = null);

(statearr_13589_13604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13578 === (5))){
var inst_13557 = (state_13577[(7)]);
var state_13577__$1 = state_13577;
var statearr_13590_13605 = state_13577__$1;
(statearr_13590_13605[(2)] = inst_13557);

(statearr_13590_13605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13578 === (10))){
var inst_13571 = (state_13577[(2)]);
var state_13577__$1 = state_13577;
var statearr_13591_13606 = state_13577__$1;
(statearr_13591_13606[(2)] = inst_13571);

(statearr_13591_13606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13578 === (8))){
var inst_13564 = (state_13577[(9)]);
var inst_13567 = cljs.core.deref.call(null,inst_13564);
var state_13577__$1 = state_13577;
var statearr_13592_13607 = state_13577__$1;
(statearr_13592_13607[(2)] = inst_13567);

(statearr_13592_13607[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__12851__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12851__auto____0 = (function (){
var statearr_13593 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13593[(0)] = cljs$core$async$reduce_$_state_machine__12851__auto__);

(statearr_13593[(1)] = (1));

return statearr_13593;
});
var cljs$core$async$reduce_$_state_machine__12851__auto____1 = (function (state_13577){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_13577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e13594){var ex__12854__auto__ = e13594;
var statearr_13595_13608 = state_13577;
(statearr_13595_13608[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_13577[(4)]))){
var statearr_13596_13609 = state_13577;
(statearr_13596_13609[(1)] = cljs.core.first.call(null,(state_13577[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13610 = state_13577;
state_13577 = G__13610;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12851__auto__ = function(state_13577){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12851__auto____1.call(this,state_13577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12851__auto____0;
cljs$core$async$reduce_$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12851__auto____1;
return cljs$core$async$reduce_$_state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_13597 = f__12868__auto__.call(null);
(statearr_13597[(6)] = c__12867__auto__);

return statearr_13597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));

return c__12867__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__12867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_13616){
var state_val_13617 = (state_13616[(1)]);
if((state_val_13617 === (1))){
var inst_13611 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13616__$1 = state_13616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13616__$1,(2),inst_13611);
} else {
if((state_val_13617 === (2))){
var inst_13613 = (state_13616[(2)]);
var inst_13614 = f__$1.call(null,inst_13613);
var state_13616__$1 = state_13616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13616__$1,inst_13614);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12851__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12851__auto____0 = (function (){
var statearr_13618 = [null,null,null,null,null,null,null];
(statearr_13618[(0)] = cljs$core$async$transduce_$_state_machine__12851__auto__);

(statearr_13618[(1)] = (1));

return statearr_13618;
});
var cljs$core$async$transduce_$_state_machine__12851__auto____1 = (function (state_13616){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_13616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e13619){var ex__12854__auto__ = e13619;
var statearr_13620_13623 = state_13616;
(statearr_13620_13623[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_13616[(4)]))){
var statearr_13621_13624 = state_13616;
(statearr_13621_13624[(1)] = cljs.core.first.call(null,(state_13616[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13625 = state_13616;
state_13616 = G__13625;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12851__auto__ = function(state_13616){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12851__auto____1.call(this,state_13616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12851__auto____0;
cljs$core$async$transduce_$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12851__auto____1;
return cljs$core$async$transduce_$_state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_13622 = f__12868__auto__.call(null);
(statearr_13622[(6)] = c__12867__auto__);

return statearr_13622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));

return c__12867__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__13627 = arguments.length;
switch (G__13627) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_13652){
var state_val_13653 = (state_13652[(1)]);
if((state_val_13653 === (7))){
var inst_13634 = (state_13652[(2)]);
var state_13652__$1 = state_13652;
var statearr_13654_13676 = state_13652__$1;
(statearr_13654_13676[(2)] = inst_13634);

(statearr_13654_13676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13653 === (1))){
var inst_13628 = cljs.core.seq.call(null,coll);
var inst_13629 = inst_13628;
var state_13652__$1 = (function (){var statearr_13655 = state_13652;
(statearr_13655[(7)] = inst_13629);

return statearr_13655;
})();
var statearr_13656_13677 = state_13652__$1;
(statearr_13656_13677[(2)] = null);

(statearr_13656_13677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13653 === (4))){
var inst_13629 = (state_13652[(7)]);
var inst_13632 = cljs.core.first.call(null,inst_13629);
var state_13652__$1 = state_13652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13652__$1,(7),ch,inst_13632);
} else {
if((state_val_13653 === (13))){
var inst_13646 = (state_13652[(2)]);
var state_13652__$1 = state_13652;
var statearr_13657_13678 = state_13652__$1;
(statearr_13657_13678[(2)] = inst_13646);

(statearr_13657_13678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13653 === (6))){
var inst_13637 = (state_13652[(2)]);
var state_13652__$1 = state_13652;
if(cljs.core.truth_(inst_13637)){
var statearr_13658_13679 = state_13652__$1;
(statearr_13658_13679[(1)] = (8));

} else {
var statearr_13659_13680 = state_13652__$1;
(statearr_13659_13680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13653 === (3))){
var inst_13650 = (state_13652[(2)]);
var state_13652__$1 = state_13652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13652__$1,inst_13650);
} else {
if((state_val_13653 === (12))){
var state_13652__$1 = state_13652;
var statearr_13660_13681 = state_13652__$1;
(statearr_13660_13681[(2)] = null);

(statearr_13660_13681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13653 === (2))){
var inst_13629 = (state_13652[(7)]);
var state_13652__$1 = state_13652;
if(cljs.core.truth_(inst_13629)){
var statearr_13661_13682 = state_13652__$1;
(statearr_13661_13682[(1)] = (4));

} else {
var statearr_13662_13683 = state_13652__$1;
(statearr_13662_13683[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13653 === (11))){
var inst_13643 = cljs.core.async.close_BANG_.call(null,ch);
var state_13652__$1 = state_13652;
var statearr_13663_13684 = state_13652__$1;
(statearr_13663_13684[(2)] = inst_13643);

(statearr_13663_13684[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13653 === (9))){
var state_13652__$1 = state_13652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13664_13685 = state_13652__$1;
(statearr_13664_13685[(1)] = (11));

} else {
var statearr_13665_13686 = state_13652__$1;
(statearr_13665_13686[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13653 === (5))){
var inst_13629 = (state_13652[(7)]);
var state_13652__$1 = state_13652;
var statearr_13666_13687 = state_13652__$1;
(statearr_13666_13687[(2)] = inst_13629);

(statearr_13666_13687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13653 === (10))){
var inst_13648 = (state_13652[(2)]);
var state_13652__$1 = state_13652;
var statearr_13667_13688 = state_13652__$1;
(statearr_13667_13688[(2)] = inst_13648);

(statearr_13667_13688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13653 === (8))){
var inst_13629 = (state_13652[(7)]);
var inst_13639 = cljs.core.next.call(null,inst_13629);
var inst_13629__$1 = inst_13639;
var state_13652__$1 = (function (){var statearr_13668 = state_13652;
(statearr_13668[(7)] = inst_13629__$1);

return statearr_13668;
})();
var statearr_13669_13689 = state_13652__$1;
(statearr_13669_13689[(2)] = null);

(statearr_13669_13689[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12851__auto__ = null;
var cljs$core$async$state_machine__12851__auto____0 = (function (){
var statearr_13670 = [null,null,null,null,null,null,null,null];
(statearr_13670[(0)] = cljs$core$async$state_machine__12851__auto__);

(statearr_13670[(1)] = (1));

return statearr_13670;
});
var cljs$core$async$state_machine__12851__auto____1 = (function (state_13652){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_13652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e13671){var ex__12854__auto__ = e13671;
var statearr_13672_13690 = state_13652;
(statearr_13672_13690[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_13652[(4)]))){
var statearr_13673_13691 = state_13652;
(statearr_13673_13691[(1)] = cljs.core.first.call(null,(state_13652[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13692 = state_13652;
state_13652 = G__13692;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$state_machine__12851__auto__ = function(state_13652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12851__auto____1.call(this,state_13652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12851__auto____0;
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12851__auto____1;
return cljs$core$async$state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_13674 = f__12868__auto__.call(null);
(statearr_13674[(6)] = c__12867__auto__);

return statearr_13674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));

return c__12867__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__13694 = arguments.length;
switch (G__13694) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_13696 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,_);
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_13696.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_13697 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_13697.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_13698 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_13698.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_13699 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_13699.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13700 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13700 = (function (ch,cs,meta13701){
this.ch = ch;
this.cs = cs;
this.meta13701 = meta13701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13702,meta13701__$1){
var self__ = this;
var _13702__$1 = this;
return (new cljs.core.async.t_cljs$core$async13700(self__.ch,self__.cs,meta13701__$1));
}));

(cljs.core.async.t_cljs$core$async13700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13702){
var self__ = this;
var _13702__$1 = this;
return self__.meta13701;
}));

(cljs.core.async.t_cljs$core$async13700.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13700.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13700.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13700.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async13700.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async13700.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async13700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13701","meta13701",-1610280636,null)], null);
}));

(cljs.core.async.t_cljs$core$async13700.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13700");

(cljs.core.async.t_cljs$core$async13700.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async13700");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13700.
 */
cljs.core.async.__GT_t_cljs$core$async13700 = (function cljs$core$async$mult_$___GT_t_cljs$core$async13700(ch__$1,cs__$1,meta13701){
return (new cljs.core.async.t_cljs$core$async13700(ch__$1,cs__$1,meta13701));
});

}

return (new cljs.core.async.t_cljs$core$async13700(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__12867__auto___13919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_13835){
var state_val_13836 = (state_13835[(1)]);
if((state_val_13836 === (7))){
var inst_13831 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13837_13920 = state_13835__$1;
(statearr_13837_13920[(2)] = inst_13831);

(statearr_13837_13920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (20))){
var inst_13736 = (state_13835[(7)]);
var inst_13748 = cljs.core.first.call(null,inst_13736);
var inst_13749 = cljs.core.nth.call(null,inst_13748,(0),null);
var inst_13750 = cljs.core.nth.call(null,inst_13748,(1),null);
var state_13835__$1 = (function (){var statearr_13838 = state_13835;
(statearr_13838[(8)] = inst_13749);

return statearr_13838;
})();
if(cljs.core.truth_(inst_13750)){
var statearr_13839_13921 = state_13835__$1;
(statearr_13839_13921[(1)] = (22));

} else {
var statearr_13840_13922 = state_13835__$1;
(statearr_13840_13922[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (27))){
var inst_13778 = (state_13835[(9)]);
var inst_13785 = (state_13835[(10)]);
var inst_13705 = (state_13835[(11)]);
var inst_13780 = (state_13835[(12)]);
var inst_13785__$1 = cljs.core._nth.call(null,inst_13778,inst_13780);
var inst_13786 = cljs.core.async.put_BANG_.call(null,inst_13785__$1,inst_13705,done);
var state_13835__$1 = (function (){var statearr_13841 = state_13835;
(statearr_13841[(10)] = inst_13785__$1);

return statearr_13841;
})();
if(cljs.core.truth_(inst_13786)){
var statearr_13842_13923 = state_13835__$1;
(statearr_13842_13923[(1)] = (30));

} else {
var statearr_13843_13924 = state_13835__$1;
(statearr_13843_13924[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (1))){
var state_13835__$1 = state_13835;
var statearr_13844_13925 = state_13835__$1;
(statearr_13844_13925[(2)] = null);

(statearr_13844_13925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (24))){
var inst_13736 = (state_13835[(7)]);
var inst_13755 = (state_13835[(2)]);
var inst_13756 = cljs.core.next.call(null,inst_13736);
var inst_13714 = inst_13756;
var inst_13715 = null;
var inst_13716 = (0);
var inst_13717 = (0);
var state_13835__$1 = (function (){var statearr_13845 = state_13835;
(statearr_13845[(13)] = inst_13717);

(statearr_13845[(14)] = inst_13714);

(statearr_13845[(15)] = inst_13715);

(statearr_13845[(16)] = inst_13716);

(statearr_13845[(17)] = inst_13755);

return statearr_13845;
})();
var statearr_13846_13926 = state_13835__$1;
(statearr_13846_13926[(2)] = null);

(statearr_13846_13926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (39))){
var state_13835__$1 = state_13835;
var statearr_13850_13927 = state_13835__$1;
(statearr_13850_13927[(2)] = null);

(statearr_13850_13927[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (4))){
var inst_13705 = (state_13835[(11)]);
var inst_13705__$1 = (state_13835[(2)]);
var inst_13706 = (inst_13705__$1 == null);
var state_13835__$1 = (function (){var statearr_13851 = state_13835;
(statearr_13851[(11)] = inst_13705__$1);

return statearr_13851;
})();
if(cljs.core.truth_(inst_13706)){
var statearr_13852_13928 = state_13835__$1;
(statearr_13852_13928[(1)] = (5));

} else {
var statearr_13853_13929 = state_13835__$1;
(statearr_13853_13929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (15))){
var inst_13717 = (state_13835[(13)]);
var inst_13714 = (state_13835[(14)]);
var inst_13715 = (state_13835[(15)]);
var inst_13716 = (state_13835[(16)]);
var inst_13732 = (state_13835[(2)]);
var inst_13733 = (inst_13717 + (1));
var tmp13847 = inst_13714;
var tmp13848 = inst_13715;
var tmp13849 = inst_13716;
var inst_13714__$1 = tmp13847;
var inst_13715__$1 = tmp13848;
var inst_13716__$1 = tmp13849;
var inst_13717__$1 = inst_13733;
var state_13835__$1 = (function (){var statearr_13854 = state_13835;
(statearr_13854[(13)] = inst_13717__$1);

(statearr_13854[(14)] = inst_13714__$1);

(statearr_13854[(15)] = inst_13715__$1);

(statearr_13854[(16)] = inst_13716__$1);

(statearr_13854[(18)] = inst_13732);

return statearr_13854;
})();
var statearr_13855_13930 = state_13835__$1;
(statearr_13855_13930[(2)] = null);

(statearr_13855_13930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (21))){
var inst_13759 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13859_13931 = state_13835__$1;
(statearr_13859_13931[(2)] = inst_13759);

(statearr_13859_13931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (31))){
var inst_13785 = (state_13835[(10)]);
var inst_13789 = cljs.core.async.untap_STAR_.call(null,m,inst_13785);
var state_13835__$1 = state_13835;
var statearr_13860_13932 = state_13835__$1;
(statearr_13860_13932[(2)] = inst_13789);

(statearr_13860_13932[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (32))){
var inst_13777 = (state_13835[(19)]);
var inst_13778 = (state_13835[(9)]);
var inst_13779 = (state_13835[(20)]);
var inst_13780 = (state_13835[(12)]);
var inst_13791 = (state_13835[(2)]);
var inst_13792 = (inst_13780 + (1));
var tmp13856 = inst_13777;
var tmp13857 = inst_13778;
var tmp13858 = inst_13779;
var inst_13777__$1 = tmp13856;
var inst_13778__$1 = tmp13857;
var inst_13779__$1 = tmp13858;
var inst_13780__$1 = inst_13792;
var state_13835__$1 = (function (){var statearr_13861 = state_13835;
(statearr_13861[(19)] = inst_13777__$1);

(statearr_13861[(9)] = inst_13778__$1);

(statearr_13861[(20)] = inst_13779__$1);

(statearr_13861[(12)] = inst_13780__$1);

(statearr_13861[(21)] = inst_13791);

return statearr_13861;
})();
var statearr_13862_13933 = state_13835__$1;
(statearr_13862_13933[(2)] = null);

(statearr_13862_13933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (40))){
var inst_13804 = (state_13835[(22)]);
var inst_13808 = cljs.core.async.untap_STAR_.call(null,m,inst_13804);
var state_13835__$1 = state_13835;
var statearr_13863_13934 = state_13835__$1;
(statearr_13863_13934[(2)] = inst_13808);

(statearr_13863_13934[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (33))){
var inst_13795 = (state_13835[(23)]);
var inst_13797 = cljs.core.chunked_seq_QMARK_.call(null,inst_13795);
var state_13835__$1 = state_13835;
if(inst_13797){
var statearr_13864_13935 = state_13835__$1;
(statearr_13864_13935[(1)] = (36));

} else {
var statearr_13865_13936 = state_13835__$1;
(statearr_13865_13936[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (13))){
var inst_13726 = (state_13835[(24)]);
var inst_13729 = cljs.core.async.close_BANG_.call(null,inst_13726);
var state_13835__$1 = state_13835;
var statearr_13866_13937 = state_13835__$1;
(statearr_13866_13937[(2)] = inst_13729);

(statearr_13866_13937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (22))){
var inst_13749 = (state_13835[(8)]);
var inst_13752 = cljs.core.async.close_BANG_.call(null,inst_13749);
var state_13835__$1 = state_13835;
var statearr_13867_13938 = state_13835__$1;
(statearr_13867_13938[(2)] = inst_13752);

(statearr_13867_13938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (36))){
var inst_13795 = (state_13835[(23)]);
var inst_13799 = cljs.core.chunk_first.call(null,inst_13795);
var inst_13800 = cljs.core.chunk_rest.call(null,inst_13795);
var inst_13801 = cljs.core.count.call(null,inst_13799);
var inst_13777 = inst_13800;
var inst_13778 = inst_13799;
var inst_13779 = inst_13801;
var inst_13780 = (0);
var state_13835__$1 = (function (){var statearr_13868 = state_13835;
(statearr_13868[(19)] = inst_13777);

(statearr_13868[(9)] = inst_13778);

(statearr_13868[(20)] = inst_13779);

(statearr_13868[(12)] = inst_13780);

return statearr_13868;
})();
var statearr_13869_13939 = state_13835__$1;
(statearr_13869_13939[(2)] = null);

(statearr_13869_13939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (41))){
var inst_13795 = (state_13835[(23)]);
var inst_13810 = (state_13835[(2)]);
var inst_13811 = cljs.core.next.call(null,inst_13795);
var inst_13777 = inst_13811;
var inst_13778 = null;
var inst_13779 = (0);
var inst_13780 = (0);
var state_13835__$1 = (function (){var statearr_13870 = state_13835;
(statearr_13870[(19)] = inst_13777);

(statearr_13870[(9)] = inst_13778);

(statearr_13870[(20)] = inst_13779);

(statearr_13870[(12)] = inst_13780);

(statearr_13870[(25)] = inst_13810);

return statearr_13870;
})();
var statearr_13871_13940 = state_13835__$1;
(statearr_13871_13940[(2)] = null);

(statearr_13871_13940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (43))){
var state_13835__$1 = state_13835;
var statearr_13872_13941 = state_13835__$1;
(statearr_13872_13941[(2)] = null);

(statearr_13872_13941[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (29))){
var inst_13819 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13873_13942 = state_13835__$1;
(statearr_13873_13942[(2)] = inst_13819);

(statearr_13873_13942[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (44))){
var inst_13828 = (state_13835[(2)]);
var state_13835__$1 = (function (){var statearr_13874 = state_13835;
(statearr_13874[(26)] = inst_13828);

return statearr_13874;
})();
var statearr_13875_13943 = state_13835__$1;
(statearr_13875_13943[(2)] = null);

(statearr_13875_13943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (6))){
var inst_13769 = (state_13835[(27)]);
var inst_13768 = cljs.core.deref.call(null,cs);
var inst_13769__$1 = cljs.core.keys.call(null,inst_13768);
var inst_13770 = cljs.core.count.call(null,inst_13769__$1);
var inst_13771 = cljs.core.reset_BANG_.call(null,dctr,inst_13770);
var inst_13776 = cljs.core.seq.call(null,inst_13769__$1);
var inst_13777 = inst_13776;
var inst_13778 = null;
var inst_13779 = (0);
var inst_13780 = (0);
var state_13835__$1 = (function (){var statearr_13876 = state_13835;
(statearr_13876[(19)] = inst_13777);

(statearr_13876[(27)] = inst_13769__$1);

(statearr_13876[(9)] = inst_13778);

(statearr_13876[(20)] = inst_13779);

(statearr_13876[(12)] = inst_13780);

(statearr_13876[(28)] = inst_13771);

return statearr_13876;
})();
var statearr_13877_13944 = state_13835__$1;
(statearr_13877_13944[(2)] = null);

(statearr_13877_13944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (28))){
var inst_13777 = (state_13835[(19)]);
var inst_13795 = (state_13835[(23)]);
var inst_13795__$1 = cljs.core.seq.call(null,inst_13777);
var state_13835__$1 = (function (){var statearr_13878 = state_13835;
(statearr_13878[(23)] = inst_13795__$1);

return statearr_13878;
})();
if(inst_13795__$1){
var statearr_13879_13945 = state_13835__$1;
(statearr_13879_13945[(1)] = (33));

} else {
var statearr_13880_13946 = state_13835__$1;
(statearr_13880_13946[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (25))){
var inst_13779 = (state_13835[(20)]);
var inst_13780 = (state_13835[(12)]);
var inst_13782 = (inst_13780 < inst_13779);
var inst_13783 = inst_13782;
var state_13835__$1 = state_13835;
if(cljs.core.truth_(inst_13783)){
var statearr_13881_13947 = state_13835__$1;
(statearr_13881_13947[(1)] = (27));

} else {
var statearr_13882_13948 = state_13835__$1;
(statearr_13882_13948[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (34))){
var state_13835__$1 = state_13835;
var statearr_13883_13949 = state_13835__$1;
(statearr_13883_13949[(2)] = null);

(statearr_13883_13949[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (17))){
var state_13835__$1 = state_13835;
var statearr_13884_13950 = state_13835__$1;
(statearr_13884_13950[(2)] = null);

(statearr_13884_13950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (3))){
var inst_13833 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13835__$1,inst_13833);
} else {
if((state_val_13836 === (12))){
var inst_13764 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13885_13951 = state_13835__$1;
(statearr_13885_13951[(2)] = inst_13764);

(statearr_13885_13951[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (2))){
var state_13835__$1 = state_13835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13835__$1,(4),ch);
} else {
if((state_val_13836 === (23))){
var state_13835__$1 = state_13835;
var statearr_13886_13952 = state_13835__$1;
(statearr_13886_13952[(2)] = null);

(statearr_13886_13952[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (35))){
var inst_13817 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13887_13953 = state_13835__$1;
(statearr_13887_13953[(2)] = inst_13817);

(statearr_13887_13953[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (19))){
var inst_13736 = (state_13835[(7)]);
var inst_13740 = cljs.core.chunk_first.call(null,inst_13736);
var inst_13741 = cljs.core.chunk_rest.call(null,inst_13736);
var inst_13742 = cljs.core.count.call(null,inst_13740);
var inst_13714 = inst_13741;
var inst_13715 = inst_13740;
var inst_13716 = inst_13742;
var inst_13717 = (0);
var state_13835__$1 = (function (){var statearr_13888 = state_13835;
(statearr_13888[(13)] = inst_13717);

(statearr_13888[(14)] = inst_13714);

(statearr_13888[(15)] = inst_13715);

(statearr_13888[(16)] = inst_13716);

return statearr_13888;
})();
var statearr_13889_13954 = state_13835__$1;
(statearr_13889_13954[(2)] = null);

(statearr_13889_13954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (11))){
var inst_13736 = (state_13835[(7)]);
var inst_13714 = (state_13835[(14)]);
var inst_13736__$1 = cljs.core.seq.call(null,inst_13714);
var state_13835__$1 = (function (){var statearr_13890 = state_13835;
(statearr_13890[(7)] = inst_13736__$1);

return statearr_13890;
})();
if(inst_13736__$1){
var statearr_13891_13955 = state_13835__$1;
(statearr_13891_13955[(1)] = (16));

} else {
var statearr_13892_13956 = state_13835__$1;
(statearr_13892_13956[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (9))){
var inst_13766 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13893_13957 = state_13835__$1;
(statearr_13893_13957[(2)] = inst_13766);

(statearr_13893_13957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (5))){
var inst_13712 = cljs.core.deref.call(null,cs);
var inst_13713 = cljs.core.seq.call(null,inst_13712);
var inst_13714 = inst_13713;
var inst_13715 = null;
var inst_13716 = (0);
var inst_13717 = (0);
var state_13835__$1 = (function (){var statearr_13894 = state_13835;
(statearr_13894[(13)] = inst_13717);

(statearr_13894[(14)] = inst_13714);

(statearr_13894[(15)] = inst_13715);

(statearr_13894[(16)] = inst_13716);

return statearr_13894;
})();
var statearr_13895_13958 = state_13835__$1;
(statearr_13895_13958[(2)] = null);

(statearr_13895_13958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (14))){
var state_13835__$1 = state_13835;
var statearr_13896_13959 = state_13835__$1;
(statearr_13896_13959[(2)] = null);

(statearr_13896_13959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (45))){
var inst_13825 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13897_13960 = state_13835__$1;
(statearr_13897_13960[(2)] = inst_13825);

(statearr_13897_13960[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (26))){
var inst_13769 = (state_13835[(27)]);
var inst_13821 = (state_13835[(2)]);
var inst_13822 = cljs.core.seq.call(null,inst_13769);
var state_13835__$1 = (function (){var statearr_13898 = state_13835;
(statearr_13898[(29)] = inst_13821);

return statearr_13898;
})();
if(inst_13822){
var statearr_13899_13961 = state_13835__$1;
(statearr_13899_13961[(1)] = (42));

} else {
var statearr_13900_13962 = state_13835__$1;
(statearr_13900_13962[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (16))){
var inst_13736 = (state_13835[(7)]);
var inst_13738 = cljs.core.chunked_seq_QMARK_.call(null,inst_13736);
var state_13835__$1 = state_13835;
if(inst_13738){
var statearr_13901_13963 = state_13835__$1;
(statearr_13901_13963[(1)] = (19));

} else {
var statearr_13902_13964 = state_13835__$1;
(statearr_13902_13964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (38))){
var inst_13814 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13903_13965 = state_13835__$1;
(statearr_13903_13965[(2)] = inst_13814);

(statearr_13903_13965[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (30))){
var state_13835__$1 = state_13835;
var statearr_13904_13966 = state_13835__$1;
(statearr_13904_13966[(2)] = null);

(statearr_13904_13966[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (10))){
var inst_13717 = (state_13835[(13)]);
var inst_13715 = (state_13835[(15)]);
var inst_13725 = cljs.core._nth.call(null,inst_13715,inst_13717);
var inst_13726 = cljs.core.nth.call(null,inst_13725,(0),null);
var inst_13727 = cljs.core.nth.call(null,inst_13725,(1),null);
var state_13835__$1 = (function (){var statearr_13905 = state_13835;
(statearr_13905[(24)] = inst_13726);

return statearr_13905;
})();
if(cljs.core.truth_(inst_13727)){
var statearr_13906_13967 = state_13835__$1;
(statearr_13906_13967[(1)] = (13));

} else {
var statearr_13907_13968 = state_13835__$1;
(statearr_13907_13968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (18))){
var inst_13762 = (state_13835[(2)]);
var state_13835__$1 = state_13835;
var statearr_13908_13969 = state_13835__$1;
(statearr_13908_13969[(2)] = inst_13762);

(statearr_13908_13969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (42))){
var state_13835__$1 = state_13835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13835__$1,(45),dchan);
} else {
if((state_val_13836 === (37))){
var inst_13795 = (state_13835[(23)]);
var inst_13705 = (state_13835[(11)]);
var inst_13804 = (state_13835[(22)]);
var inst_13804__$1 = cljs.core.first.call(null,inst_13795);
var inst_13805 = cljs.core.async.put_BANG_.call(null,inst_13804__$1,inst_13705,done);
var state_13835__$1 = (function (){var statearr_13909 = state_13835;
(statearr_13909[(22)] = inst_13804__$1);

return statearr_13909;
})();
if(cljs.core.truth_(inst_13805)){
var statearr_13910_13970 = state_13835__$1;
(statearr_13910_13970[(1)] = (39));

} else {
var statearr_13911_13971 = state_13835__$1;
(statearr_13911_13971[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13836 === (8))){
var inst_13717 = (state_13835[(13)]);
var inst_13716 = (state_13835[(16)]);
var inst_13719 = (inst_13717 < inst_13716);
var inst_13720 = inst_13719;
var state_13835__$1 = state_13835;
if(cljs.core.truth_(inst_13720)){
var statearr_13912_13972 = state_13835__$1;
(statearr_13912_13972[(1)] = (10));

} else {
var statearr_13913_13973 = state_13835__$1;
(statearr_13913_13973[(1)] = (11));

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__12851__auto__ = null;
var cljs$core$async$mult_$_state_machine__12851__auto____0 = (function (){
var statearr_13914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13914[(0)] = cljs$core$async$mult_$_state_machine__12851__auto__);

(statearr_13914[(1)] = (1));

return statearr_13914;
});
var cljs$core$async$mult_$_state_machine__12851__auto____1 = (function (state_13835){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_13835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e13915){var ex__12854__auto__ = e13915;
var statearr_13916_13974 = state_13835;
(statearr_13916_13974[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_13835[(4)]))){
var statearr_13917_13975 = state_13835;
(statearr_13917_13975[(1)] = cljs.core.first.call(null,(state_13835[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13976 = state_13835;
state_13835 = G__13976;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12851__auto__ = function(state_13835){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12851__auto____1.call(this,state_13835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12851__auto____0;
cljs$core$async$mult_$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12851__auto____1;
return cljs$core$async$mult_$_state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_13918 = f__12868__auto__.call(null);
(statearr_13918[(6)] = c__12867__auto___13919);

return statearr_13918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__13978 = arguments.length;
switch (G__13978) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_13980 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_13980.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_13981 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_13981.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_13982 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_13982.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_13983 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,state_map);
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_13983.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_13984 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,mode);
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_13984.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___13994 = arguments.length;
var i__5767__auto___13995 = (0);
while(true){
if((i__5767__auto___13995 < len__5766__auto___13994)){
args__5772__auto__.push((arguments[i__5767__auto___13995]));

var G__13996 = (i__5767__auto___13995 + (1));
i__5767__auto___13995 = G__13996;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13989){
var map__13990 = p__13989;
var map__13990__$1 = cljs.core.__destructure_map.call(null,map__13990);
var opts = map__13990__$1;
var statearr_13991_13997 = state;
(statearr_13991_13997[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_13992_13998 = state;
(statearr_13992_13998[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_13993_13999 = state;
(statearr_13993_13999[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13985){
var G__13986 = cljs.core.first.call(null,seq13985);
var seq13985__$1 = cljs.core.next.call(null,seq13985);
var G__13987 = cljs.core.first.call(null,seq13985__$1);
var seq13985__$2 = cljs.core.next.call(null,seq13985__$1);
var G__13988 = cljs.core.first.call(null,seq13985__$2);
var seq13985__$3 = cljs.core.next.call(null,seq13985__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13986,G__13987,G__13988,seq13985__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14000 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta14001){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta14001 = meta14001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14002,meta14001__$1){
var self__ = this;
var _14002__$1 = this;
return (new cljs.core.async.t_cljs$core$async14000(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta14001__$1));
}));

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14002){
var self__ = this;
var _14002__$1 = this;
return self__.meta14001;
}));

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14000.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async14000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta14001","meta14001",1342726642,null)], null);
}));

(cljs.core.async.t_cljs$core$async14000.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14000");

(cljs.core.async.t_cljs$core$async14000.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async14000");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14000.
 */
cljs.core.async.__GT_t_cljs$core$async14000 = (function cljs$core$async$mix_$___GT_t_cljs$core$async14000(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14001){
return (new cljs.core.async.t_cljs$core$async14000(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta14001));
});

}

return (new cljs.core.async.t_cljs$core$async14000(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12867__auto___14115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_14070){
var state_val_14071 = (state_14070[(1)]);
if((state_val_14071 === (7))){
var inst_14030 = (state_14070[(2)]);
var state_14070__$1 = state_14070;
if(cljs.core.truth_(inst_14030)){
var statearr_14072_14116 = state_14070__$1;
(statearr_14072_14116[(1)] = (8));

} else {
var statearr_14073_14117 = state_14070__$1;
(statearr_14073_14117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (20))){
var inst_14023 = (state_14070[(7)]);
var state_14070__$1 = state_14070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14070__$1,(23),out,inst_14023);
} else {
if((state_val_14071 === (1))){
var inst_14006 = calc_state.call(null);
var inst_14007 = cljs.core.__destructure_map.call(null,inst_14006);
var inst_14008 = cljs.core.get.call(null,inst_14007,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14009 = cljs.core.get.call(null,inst_14007,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14010 = cljs.core.get.call(null,inst_14007,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14011 = inst_14006;
var state_14070__$1 = (function (){var statearr_14074 = state_14070;
(statearr_14074[(8)] = inst_14008);

(statearr_14074[(9)] = inst_14009);

(statearr_14074[(10)] = inst_14010);

(statearr_14074[(11)] = inst_14011);

return statearr_14074;
})();
var statearr_14075_14118 = state_14070__$1;
(statearr_14075_14118[(2)] = null);

(statearr_14075_14118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (24))){
var inst_14014 = (state_14070[(12)]);
var inst_14011 = inst_14014;
var state_14070__$1 = (function (){var statearr_14076 = state_14070;
(statearr_14076[(11)] = inst_14011);

return statearr_14076;
})();
var statearr_14077_14119 = state_14070__$1;
(statearr_14077_14119[(2)] = null);

(statearr_14077_14119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (4))){
var inst_14023 = (state_14070[(7)]);
var inst_14025 = (state_14070[(13)]);
var inst_14022 = (state_14070[(2)]);
var inst_14023__$1 = cljs.core.nth.call(null,inst_14022,(0),null);
var inst_14024 = cljs.core.nth.call(null,inst_14022,(1),null);
var inst_14025__$1 = (inst_14023__$1 == null);
var state_14070__$1 = (function (){var statearr_14078 = state_14070;
(statearr_14078[(7)] = inst_14023__$1);

(statearr_14078[(14)] = inst_14024);

(statearr_14078[(13)] = inst_14025__$1);

return statearr_14078;
})();
if(cljs.core.truth_(inst_14025__$1)){
var statearr_14079_14120 = state_14070__$1;
(statearr_14079_14120[(1)] = (5));

} else {
var statearr_14080_14121 = state_14070__$1;
(statearr_14080_14121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (15))){
var inst_14044 = (state_14070[(15)]);
var inst_14015 = (state_14070[(16)]);
var inst_14044__$1 = cljs.core.empty_QMARK_.call(null,inst_14015);
var state_14070__$1 = (function (){var statearr_14081 = state_14070;
(statearr_14081[(15)] = inst_14044__$1);

return statearr_14081;
})();
if(inst_14044__$1){
var statearr_14082_14122 = state_14070__$1;
(statearr_14082_14122[(1)] = (17));

} else {
var statearr_14083_14123 = state_14070__$1;
(statearr_14083_14123[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (21))){
var inst_14014 = (state_14070[(12)]);
var inst_14011 = inst_14014;
var state_14070__$1 = (function (){var statearr_14084 = state_14070;
(statearr_14084[(11)] = inst_14011);

return statearr_14084;
})();
var statearr_14085_14124 = state_14070__$1;
(statearr_14085_14124[(2)] = null);

(statearr_14085_14124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (13))){
var inst_14037 = (state_14070[(2)]);
var inst_14038 = calc_state.call(null);
var inst_14011 = inst_14038;
var state_14070__$1 = (function (){var statearr_14086 = state_14070;
(statearr_14086[(17)] = inst_14037);

(statearr_14086[(11)] = inst_14011);

return statearr_14086;
})();
var statearr_14087_14125 = state_14070__$1;
(statearr_14087_14125[(2)] = null);

(statearr_14087_14125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (22))){
var inst_14064 = (state_14070[(2)]);
var state_14070__$1 = state_14070;
var statearr_14088_14126 = state_14070__$1;
(statearr_14088_14126[(2)] = inst_14064);

(statearr_14088_14126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (6))){
var inst_14024 = (state_14070[(14)]);
var inst_14028 = cljs.core._EQ_.call(null,inst_14024,change);
var state_14070__$1 = state_14070;
var statearr_14089_14127 = state_14070__$1;
(statearr_14089_14127[(2)] = inst_14028);

(statearr_14089_14127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (25))){
var state_14070__$1 = state_14070;
var statearr_14090_14128 = state_14070__$1;
(statearr_14090_14128[(2)] = null);

(statearr_14090_14128[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (17))){
var inst_14024 = (state_14070[(14)]);
var inst_14016 = (state_14070[(18)]);
var inst_14046 = inst_14016.call(null,inst_14024);
var inst_14047 = cljs.core.not.call(null,inst_14046);
var state_14070__$1 = state_14070;
var statearr_14091_14129 = state_14070__$1;
(statearr_14091_14129[(2)] = inst_14047);

(statearr_14091_14129[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (3))){
var inst_14068 = (state_14070[(2)]);
var state_14070__$1 = state_14070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14070__$1,inst_14068);
} else {
if((state_val_14071 === (12))){
var state_14070__$1 = state_14070;
var statearr_14092_14130 = state_14070__$1;
(statearr_14092_14130[(2)] = null);

(statearr_14092_14130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (2))){
var inst_14014 = (state_14070[(12)]);
var inst_14011 = (state_14070[(11)]);
var inst_14014__$1 = cljs.core.__destructure_map.call(null,inst_14011);
var inst_14015 = cljs.core.get.call(null,inst_14014__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14016 = cljs.core.get.call(null,inst_14014__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14017 = cljs.core.get.call(null,inst_14014__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14070__$1 = (function (){var statearr_14093 = state_14070;
(statearr_14093[(12)] = inst_14014__$1);

(statearr_14093[(16)] = inst_14015);

(statearr_14093[(18)] = inst_14016);

return statearr_14093;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14070__$1,(4),inst_14017);
} else {
if((state_val_14071 === (23))){
var inst_14055 = (state_14070[(2)]);
var state_14070__$1 = state_14070;
if(cljs.core.truth_(inst_14055)){
var statearr_14094_14131 = state_14070__$1;
(statearr_14094_14131[(1)] = (24));

} else {
var statearr_14095_14132 = state_14070__$1;
(statearr_14095_14132[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (19))){
var inst_14050 = (state_14070[(2)]);
var state_14070__$1 = state_14070;
var statearr_14096_14133 = state_14070__$1;
(statearr_14096_14133[(2)] = inst_14050);

(statearr_14096_14133[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (11))){
var inst_14024 = (state_14070[(14)]);
var inst_14034 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14024);
var state_14070__$1 = state_14070;
var statearr_14097_14134 = state_14070__$1;
(statearr_14097_14134[(2)] = inst_14034);

(statearr_14097_14134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (9))){
var inst_14041 = (state_14070[(19)]);
var inst_14015 = (state_14070[(16)]);
var inst_14024 = (state_14070[(14)]);
var inst_14041__$1 = inst_14015.call(null,inst_14024);
var state_14070__$1 = (function (){var statearr_14098 = state_14070;
(statearr_14098[(19)] = inst_14041__$1);

return statearr_14098;
})();
if(cljs.core.truth_(inst_14041__$1)){
var statearr_14099_14135 = state_14070__$1;
(statearr_14099_14135[(1)] = (14));

} else {
var statearr_14100_14136 = state_14070__$1;
(statearr_14100_14136[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (5))){
var inst_14025 = (state_14070[(13)]);
var state_14070__$1 = state_14070;
var statearr_14101_14137 = state_14070__$1;
(statearr_14101_14137[(2)] = inst_14025);

(statearr_14101_14137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (14))){
var inst_14041 = (state_14070[(19)]);
var state_14070__$1 = state_14070;
var statearr_14102_14138 = state_14070__$1;
(statearr_14102_14138[(2)] = inst_14041);

(statearr_14102_14138[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (26))){
var inst_14060 = (state_14070[(2)]);
var state_14070__$1 = state_14070;
var statearr_14103_14139 = state_14070__$1;
(statearr_14103_14139[(2)] = inst_14060);

(statearr_14103_14139[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (16))){
var inst_14052 = (state_14070[(2)]);
var state_14070__$1 = state_14070;
if(cljs.core.truth_(inst_14052)){
var statearr_14104_14140 = state_14070__$1;
(statearr_14104_14140[(1)] = (20));

} else {
var statearr_14105_14141 = state_14070__$1;
(statearr_14105_14141[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (10))){
var inst_14066 = (state_14070[(2)]);
var state_14070__$1 = state_14070;
var statearr_14106_14142 = state_14070__$1;
(statearr_14106_14142[(2)] = inst_14066);

(statearr_14106_14142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (18))){
var inst_14044 = (state_14070[(15)]);
var state_14070__$1 = state_14070;
var statearr_14107_14143 = state_14070__$1;
(statearr_14107_14143[(2)] = inst_14044);

(statearr_14107_14143[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14071 === (8))){
var inst_14023 = (state_14070[(7)]);
var inst_14032 = (inst_14023 == null);
var state_14070__$1 = state_14070;
if(cljs.core.truth_(inst_14032)){
var statearr_14108_14144 = state_14070__$1;
(statearr_14108_14144[(1)] = (11));

} else {
var statearr_14109_14145 = state_14070__$1;
(statearr_14109_14145[(1)] = (12));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__12851__auto__ = null;
var cljs$core$async$mix_$_state_machine__12851__auto____0 = (function (){
var statearr_14110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14110[(0)] = cljs$core$async$mix_$_state_machine__12851__auto__);

(statearr_14110[(1)] = (1));

return statearr_14110;
});
var cljs$core$async$mix_$_state_machine__12851__auto____1 = (function (state_14070){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_14070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e14111){var ex__12854__auto__ = e14111;
var statearr_14112_14146 = state_14070;
(statearr_14112_14146[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_14070[(4)]))){
var statearr_14113_14147 = state_14070;
(statearr_14113_14147[(1)] = cljs.core.first.call(null,(state_14070[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14148 = state_14070;
state_14070 = G__14148;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12851__auto__ = function(state_14070){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12851__auto____1.call(this,state_14070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12851__auto____0;
cljs$core$async$mix_$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12851__auto____1;
return cljs$core$async$mix_$_state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_14114 = f__12868__auto__.call(null);
(statearr_14114[(6)] = c__12867__auto___14115);

return statearr_14114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_14151 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_14151.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_14152 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_14152.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_14153 = (function() {
var G__14154 = null;
var G__14154__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__14154__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__14154 = function(p,v){
switch(arguments.length){
case 1:
return G__14154__1.call(this,p);
case 2:
return G__14154__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14154.cljs$core$IFn$_invoke$arity$1 = G__14154__1;
G__14154.cljs$core$IFn$_invoke$arity$2 = G__14154__2;
return G__14154;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14150 = arguments.length;
switch (G__14150) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14153.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_14153.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14158 = arguments.length;
switch (G__14158) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__14156_SHARP_){
if(cljs.core.truth_(p1__14156_SHARP_.call(null,topic))){
return p1__14156_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14156_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14159 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14160){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14160 = meta14160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14161,meta14160__$1){
var self__ = this;
var _14161__$1 = this;
return (new cljs.core.async.t_cljs$core$async14159(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14160__$1));
}));

(cljs.core.async.t_cljs$core$async14159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14161){
var self__ = this;
var _14161__$1 = this;
return self__.meta14160;
}));

(cljs.core.async.t_cljs$core$async14159.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14159.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14159.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14159.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14159.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14159.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14160","meta14160",-257552360,null)], null);
}));

(cljs.core.async.t_cljs$core$async14159.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14159");

(cljs.core.async.t_cljs$core$async14159.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async14159");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14159.
 */
cljs.core.async.__GT_t_cljs$core$async14159 = (function cljs$core$async$__GT_t_cljs$core$async14159(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14160){
return (new cljs.core.async.t_cljs$core$async14159(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14160));
});

}

return (new cljs.core.async.t_cljs$core$async14159(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12867__auto___14280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_14233){
var state_val_14234 = (state_14233[(1)]);
if((state_val_14234 === (7))){
var inst_14229 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14235_14281 = state_14233__$1;
(statearr_14235_14281[(2)] = inst_14229);

(statearr_14235_14281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (20))){
var state_14233__$1 = state_14233;
var statearr_14236_14282 = state_14233__$1;
(statearr_14236_14282[(2)] = null);

(statearr_14236_14282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (1))){
var state_14233__$1 = state_14233;
var statearr_14237_14283 = state_14233__$1;
(statearr_14237_14283[(2)] = null);

(statearr_14237_14283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (24))){
var inst_14212 = (state_14233[(7)]);
var inst_14221 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14212);
var state_14233__$1 = state_14233;
var statearr_14238_14284 = state_14233__$1;
(statearr_14238_14284[(2)] = inst_14221);

(statearr_14238_14284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (4))){
var inst_14164 = (state_14233[(8)]);
var inst_14164__$1 = (state_14233[(2)]);
var inst_14165 = (inst_14164__$1 == null);
var state_14233__$1 = (function (){var statearr_14239 = state_14233;
(statearr_14239[(8)] = inst_14164__$1);

return statearr_14239;
})();
if(cljs.core.truth_(inst_14165)){
var statearr_14240_14285 = state_14233__$1;
(statearr_14240_14285[(1)] = (5));

} else {
var statearr_14241_14286 = state_14233__$1;
(statearr_14241_14286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (15))){
var inst_14206 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14242_14287 = state_14233__$1;
(statearr_14242_14287[(2)] = inst_14206);

(statearr_14242_14287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (21))){
var inst_14226 = (state_14233[(2)]);
var state_14233__$1 = (function (){var statearr_14243 = state_14233;
(statearr_14243[(9)] = inst_14226);

return statearr_14243;
})();
var statearr_14244_14288 = state_14233__$1;
(statearr_14244_14288[(2)] = null);

(statearr_14244_14288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (13))){
var inst_14188 = (state_14233[(10)]);
var inst_14190 = cljs.core.chunked_seq_QMARK_.call(null,inst_14188);
var state_14233__$1 = state_14233;
if(inst_14190){
var statearr_14245_14289 = state_14233__$1;
(statearr_14245_14289[(1)] = (16));

} else {
var statearr_14246_14290 = state_14233__$1;
(statearr_14246_14290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (22))){
var inst_14218 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
if(cljs.core.truth_(inst_14218)){
var statearr_14247_14291 = state_14233__$1;
(statearr_14247_14291[(1)] = (23));

} else {
var statearr_14248_14292 = state_14233__$1;
(statearr_14248_14292[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (6))){
var inst_14212 = (state_14233[(7)]);
var inst_14164 = (state_14233[(8)]);
var inst_14214 = (state_14233[(11)]);
var inst_14212__$1 = topic_fn.call(null,inst_14164);
var inst_14213 = cljs.core.deref.call(null,mults);
var inst_14214__$1 = cljs.core.get.call(null,inst_14213,inst_14212__$1);
var state_14233__$1 = (function (){var statearr_14249 = state_14233;
(statearr_14249[(7)] = inst_14212__$1);

(statearr_14249[(11)] = inst_14214__$1);

return statearr_14249;
})();
if(cljs.core.truth_(inst_14214__$1)){
var statearr_14250_14293 = state_14233__$1;
(statearr_14250_14293[(1)] = (19));

} else {
var statearr_14251_14294 = state_14233__$1;
(statearr_14251_14294[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (25))){
var inst_14223 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14252_14295 = state_14233__$1;
(statearr_14252_14295[(2)] = inst_14223);

(statearr_14252_14295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (17))){
var inst_14188 = (state_14233[(10)]);
var inst_14197 = cljs.core.first.call(null,inst_14188);
var inst_14198 = cljs.core.async.muxch_STAR_.call(null,inst_14197);
var inst_14199 = cljs.core.async.close_BANG_.call(null,inst_14198);
var inst_14200 = cljs.core.next.call(null,inst_14188);
var inst_14174 = inst_14200;
var inst_14175 = null;
var inst_14176 = (0);
var inst_14177 = (0);
var state_14233__$1 = (function (){var statearr_14253 = state_14233;
(statearr_14253[(12)] = inst_14199);

(statearr_14253[(13)] = inst_14176);

(statearr_14253[(14)] = inst_14175);

(statearr_14253[(15)] = inst_14177);

(statearr_14253[(16)] = inst_14174);

return statearr_14253;
})();
var statearr_14254_14296 = state_14233__$1;
(statearr_14254_14296[(2)] = null);

(statearr_14254_14296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (3))){
var inst_14231 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14233__$1,inst_14231);
} else {
if((state_val_14234 === (12))){
var inst_14208 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14255_14297 = state_14233__$1;
(statearr_14255_14297[(2)] = inst_14208);

(statearr_14255_14297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (2))){
var state_14233__$1 = state_14233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14233__$1,(4),ch);
} else {
if((state_val_14234 === (23))){
var state_14233__$1 = state_14233;
var statearr_14256_14298 = state_14233__$1;
(statearr_14256_14298[(2)] = null);

(statearr_14256_14298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (19))){
var inst_14164 = (state_14233[(8)]);
var inst_14214 = (state_14233[(11)]);
var inst_14216 = cljs.core.async.muxch_STAR_.call(null,inst_14214);
var state_14233__$1 = state_14233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14233__$1,(22),inst_14216,inst_14164);
} else {
if((state_val_14234 === (11))){
var inst_14188 = (state_14233[(10)]);
var inst_14174 = (state_14233[(16)]);
var inst_14188__$1 = cljs.core.seq.call(null,inst_14174);
var state_14233__$1 = (function (){var statearr_14257 = state_14233;
(statearr_14257[(10)] = inst_14188__$1);

return statearr_14257;
})();
if(inst_14188__$1){
var statearr_14258_14299 = state_14233__$1;
(statearr_14258_14299[(1)] = (13));

} else {
var statearr_14259_14300 = state_14233__$1;
(statearr_14259_14300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (9))){
var inst_14210 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14260_14301 = state_14233__$1;
(statearr_14260_14301[(2)] = inst_14210);

(statearr_14260_14301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (5))){
var inst_14171 = cljs.core.deref.call(null,mults);
var inst_14172 = cljs.core.vals.call(null,inst_14171);
var inst_14173 = cljs.core.seq.call(null,inst_14172);
var inst_14174 = inst_14173;
var inst_14175 = null;
var inst_14176 = (0);
var inst_14177 = (0);
var state_14233__$1 = (function (){var statearr_14261 = state_14233;
(statearr_14261[(13)] = inst_14176);

(statearr_14261[(14)] = inst_14175);

(statearr_14261[(15)] = inst_14177);

(statearr_14261[(16)] = inst_14174);

return statearr_14261;
})();
var statearr_14262_14302 = state_14233__$1;
(statearr_14262_14302[(2)] = null);

(statearr_14262_14302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (14))){
var state_14233__$1 = state_14233;
var statearr_14266_14303 = state_14233__$1;
(statearr_14266_14303[(2)] = null);

(statearr_14266_14303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (16))){
var inst_14188 = (state_14233[(10)]);
var inst_14192 = cljs.core.chunk_first.call(null,inst_14188);
var inst_14193 = cljs.core.chunk_rest.call(null,inst_14188);
var inst_14194 = cljs.core.count.call(null,inst_14192);
var inst_14174 = inst_14193;
var inst_14175 = inst_14192;
var inst_14176 = inst_14194;
var inst_14177 = (0);
var state_14233__$1 = (function (){var statearr_14267 = state_14233;
(statearr_14267[(13)] = inst_14176);

(statearr_14267[(14)] = inst_14175);

(statearr_14267[(15)] = inst_14177);

(statearr_14267[(16)] = inst_14174);

return statearr_14267;
})();
var statearr_14268_14304 = state_14233__$1;
(statearr_14268_14304[(2)] = null);

(statearr_14268_14304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (10))){
var inst_14176 = (state_14233[(13)]);
var inst_14175 = (state_14233[(14)]);
var inst_14177 = (state_14233[(15)]);
var inst_14174 = (state_14233[(16)]);
var inst_14182 = cljs.core._nth.call(null,inst_14175,inst_14177);
var inst_14183 = cljs.core.async.muxch_STAR_.call(null,inst_14182);
var inst_14184 = cljs.core.async.close_BANG_.call(null,inst_14183);
var inst_14185 = (inst_14177 + (1));
var tmp14263 = inst_14176;
var tmp14264 = inst_14175;
var tmp14265 = inst_14174;
var inst_14174__$1 = tmp14265;
var inst_14175__$1 = tmp14264;
var inst_14176__$1 = tmp14263;
var inst_14177__$1 = inst_14185;
var state_14233__$1 = (function (){var statearr_14269 = state_14233;
(statearr_14269[(17)] = inst_14184);

(statearr_14269[(13)] = inst_14176__$1);

(statearr_14269[(14)] = inst_14175__$1);

(statearr_14269[(15)] = inst_14177__$1);

(statearr_14269[(16)] = inst_14174__$1);

return statearr_14269;
})();
var statearr_14270_14305 = state_14233__$1;
(statearr_14270_14305[(2)] = null);

(statearr_14270_14305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (18))){
var inst_14203 = (state_14233[(2)]);
var state_14233__$1 = state_14233;
var statearr_14271_14306 = state_14233__$1;
(statearr_14271_14306[(2)] = inst_14203);

(statearr_14271_14306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14234 === (8))){
var inst_14176 = (state_14233[(13)]);
var inst_14177 = (state_14233[(15)]);
var inst_14179 = (inst_14177 < inst_14176);
var inst_14180 = inst_14179;
var state_14233__$1 = state_14233;
if(cljs.core.truth_(inst_14180)){
var statearr_14272_14307 = state_14233__$1;
(statearr_14272_14307[(1)] = (10));

} else {
var statearr_14273_14308 = state_14233__$1;
(statearr_14273_14308[(1)] = (11));

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12851__auto__ = null;
var cljs$core$async$state_machine__12851__auto____0 = (function (){
var statearr_14274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14274[(0)] = cljs$core$async$state_machine__12851__auto__);

(statearr_14274[(1)] = (1));

return statearr_14274;
});
var cljs$core$async$state_machine__12851__auto____1 = (function (state_14233){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_14233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e14275){var ex__12854__auto__ = e14275;
var statearr_14276_14309 = state_14233;
(statearr_14276_14309[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_14233[(4)]))){
var statearr_14277_14310 = state_14233;
(statearr_14277_14310[(1)] = cljs.core.first.call(null,(state_14233[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14311 = state_14233;
state_14233 = G__14311;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$state_machine__12851__auto__ = function(state_14233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12851__auto____1.call(this,state_14233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12851__auto____0;
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12851__auto____1;
return cljs$core$async$state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_14278 = f__12868__auto__.call(null);
(statearr_14278[(6)] = c__12867__auto___14280);

return statearr_14278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14313 = arguments.length;
switch (G__14313) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14316 = arguments.length;
switch (G__14316) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14319 = arguments.length;
switch (G__14319) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__12867__auto___14397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_14362){
var state_val_14363 = (state_14362[(1)]);
if((state_val_14363 === (7))){
var state_14362__$1 = state_14362;
var statearr_14364_14398 = state_14362__$1;
(statearr_14364_14398[(2)] = null);

(statearr_14364_14398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (1))){
var state_14362__$1 = state_14362;
var statearr_14365_14399 = state_14362__$1;
(statearr_14365_14399[(2)] = null);

(statearr_14365_14399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (4))){
var inst_14322 = (state_14362[(7)]);
var inst_14323 = (state_14362[(8)]);
var inst_14325 = (inst_14323 < inst_14322);
var state_14362__$1 = state_14362;
if(cljs.core.truth_(inst_14325)){
var statearr_14366_14400 = state_14362__$1;
(statearr_14366_14400[(1)] = (6));

} else {
var statearr_14367_14401 = state_14362__$1;
(statearr_14367_14401[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (15))){
var inst_14348 = (state_14362[(9)]);
var inst_14353 = cljs.core.apply.call(null,f,inst_14348);
var state_14362__$1 = state_14362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14362__$1,(17),out,inst_14353);
} else {
if((state_val_14363 === (13))){
var inst_14348 = (state_14362[(9)]);
var inst_14348__$1 = (state_14362[(2)]);
var inst_14349 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14348__$1);
var state_14362__$1 = (function (){var statearr_14368 = state_14362;
(statearr_14368[(9)] = inst_14348__$1);

return statearr_14368;
})();
if(cljs.core.truth_(inst_14349)){
var statearr_14369_14402 = state_14362__$1;
(statearr_14369_14402[(1)] = (14));

} else {
var statearr_14370_14403 = state_14362__$1;
(statearr_14370_14403[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (6))){
var state_14362__$1 = state_14362;
var statearr_14371_14404 = state_14362__$1;
(statearr_14371_14404[(2)] = null);

(statearr_14371_14404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (17))){
var inst_14355 = (state_14362[(2)]);
var state_14362__$1 = (function (){var statearr_14373 = state_14362;
(statearr_14373[(10)] = inst_14355);

return statearr_14373;
})();
var statearr_14374_14405 = state_14362__$1;
(statearr_14374_14405[(2)] = null);

(statearr_14374_14405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (3))){
var inst_14360 = (state_14362[(2)]);
var state_14362__$1 = state_14362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14362__$1,inst_14360);
} else {
if((state_val_14363 === (12))){
var _ = (function (){var statearr_14375 = state_14362;
(statearr_14375[(4)] = cljs.core.rest.call(null,(state_14362[(4)])));

return statearr_14375;
})();
var state_14362__$1 = state_14362;
var ex14372 = (state_14362__$1[(2)]);
var statearr_14376_14406 = state_14362__$1;
(statearr_14376_14406[(5)] = ex14372);


if((ex14372 instanceof Object)){
var statearr_14377_14407 = state_14362__$1;
(statearr_14377_14407[(1)] = (11));

(statearr_14377_14407[(5)] = null);

} else {
throw ex14372;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (2))){
var inst_14321 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14322 = cnt;
var inst_14323 = (0);
var state_14362__$1 = (function (){var statearr_14378 = state_14362;
(statearr_14378[(7)] = inst_14322);

(statearr_14378[(8)] = inst_14323);

(statearr_14378[(11)] = inst_14321);

return statearr_14378;
})();
var statearr_14379_14408 = state_14362__$1;
(statearr_14379_14408[(2)] = null);

(statearr_14379_14408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (11))){
var inst_14327 = (state_14362[(2)]);
var inst_14328 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14362__$1 = (function (){var statearr_14380 = state_14362;
(statearr_14380[(12)] = inst_14327);

return statearr_14380;
})();
var statearr_14381_14409 = state_14362__$1;
(statearr_14381_14409[(2)] = inst_14328);

(statearr_14381_14409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (9))){
var inst_14323 = (state_14362[(8)]);
var _ = (function (){var statearr_14382 = state_14362;
(statearr_14382[(4)] = cljs.core.cons.call(null,(12),(state_14362[(4)])));

return statearr_14382;
})();
var inst_14334 = chs__$1.call(null,inst_14323);
var inst_14335 = done.call(null,inst_14323);
var inst_14336 = cljs.core.async.take_BANG_.call(null,inst_14334,inst_14335);
var ___$1 = (function (){var statearr_14383 = state_14362;
(statearr_14383[(4)] = cljs.core.rest.call(null,(state_14362[(4)])));

return statearr_14383;
})();
var state_14362__$1 = state_14362;
var statearr_14384_14410 = state_14362__$1;
(statearr_14384_14410[(2)] = inst_14336);

(statearr_14384_14410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (5))){
var inst_14346 = (state_14362[(2)]);
var state_14362__$1 = (function (){var statearr_14385 = state_14362;
(statearr_14385[(13)] = inst_14346);

return statearr_14385;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14362__$1,(13),dchan);
} else {
if((state_val_14363 === (14))){
var inst_14351 = cljs.core.async.close_BANG_.call(null,out);
var state_14362__$1 = state_14362;
var statearr_14386_14411 = state_14362__$1;
(statearr_14386_14411[(2)] = inst_14351);

(statearr_14386_14411[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (16))){
var inst_14358 = (state_14362[(2)]);
var state_14362__$1 = state_14362;
var statearr_14387_14412 = state_14362__$1;
(statearr_14387_14412[(2)] = inst_14358);

(statearr_14387_14412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (10))){
var inst_14323 = (state_14362[(8)]);
var inst_14339 = (state_14362[(2)]);
var inst_14340 = (inst_14323 + (1));
var inst_14323__$1 = inst_14340;
var state_14362__$1 = (function (){var statearr_14388 = state_14362;
(statearr_14388[(8)] = inst_14323__$1);

(statearr_14388[(14)] = inst_14339);

return statearr_14388;
})();
var statearr_14389_14413 = state_14362__$1;
(statearr_14389_14413[(2)] = null);

(statearr_14389_14413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14363 === (8))){
var inst_14344 = (state_14362[(2)]);
var state_14362__$1 = state_14362;
var statearr_14390_14414 = state_14362__$1;
(statearr_14390_14414[(2)] = inst_14344);

(statearr_14390_14414[(1)] = (5));


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
var cljs$core$async$state_machine__12851__auto__ = null;
var cljs$core$async$state_machine__12851__auto____0 = (function (){
var statearr_14391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14391[(0)] = cljs$core$async$state_machine__12851__auto__);

(statearr_14391[(1)] = (1));

return statearr_14391;
});
var cljs$core$async$state_machine__12851__auto____1 = (function (state_14362){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_14362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e14392){var ex__12854__auto__ = e14392;
var statearr_14393_14415 = state_14362;
(statearr_14393_14415[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_14362[(4)]))){
var statearr_14394_14416 = state_14362;
(statearr_14394_14416[(1)] = cljs.core.first.call(null,(state_14362[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14417 = state_14362;
state_14362 = G__14417;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$state_machine__12851__auto__ = function(state_14362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12851__auto____1.call(this,state_14362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12851__auto____0;
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12851__auto____1;
return cljs$core$async$state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_14395 = f__12868__auto__.call(null);
(statearr_14395[(6)] = c__12867__auto___14397);

return statearr_14395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14420 = arguments.length;
switch (G__14420) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12867__auto___14475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_14452){
var state_val_14453 = (state_14452[(1)]);
if((state_val_14453 === (7))){
var inst_14432 = (state_14452[(7)]);
var inst_14431 = (state_14452[(8)]);
var inst_14431__$1 = (state_14452[(2)]);
var inst_14432__$1 = cljs.core.nth.call(null,inst_14431__$1,(0),null);
var inst_14433 = cljs.core.nth.call(null,inst_14431__$1,(1),null);
var inst_14434 = (inst_14432__$1 == null);
var state_14452__$1 = (function (){var statearr_14454 = state_14452;
(statearr_14454[(7)] = inst_14432__$1);

(statearr_14454[(9)] = inst_14433);

(statearr_14454[(8)] = inst_14431__$1);

return statearr_14454;
})();
if(cljs.core.truth_(inst_14434)){
var statearr_14455_14476 = state_14452__$1;
(statearr_14455_14476[(1)] = (8));

} else {
var statearr_14456_14477 = state_14452__$1;
(statearr_14456_14477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (1))){
var inst_14421 = cljs.core.vec.call(null,chs);
var inst_14422 = inst_14421;
var state_14452__$1 = (function (){var statearr_14457 = state_14452;
(statearr_14457[(10)] = inst_14422);

return statearr_14457;
})();
var statearr_14458_14478 = state_14452__$1;
(statearr_14458_14478[(2)] = null);

(statearr_14458_14478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (4))){
var inst_14422 = (state_14452[(10)]);
var state_14452__$1 = state_14452;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14452__$1,(7),inst_14422);
} else {
if((state_val_14453 === (6))){
var inst_14448 = (state_14452[(2)]);
var state_14452__$1 = state_14452;
var statearr_14459_14479 = state_14452__$1;
(statearr_14459_14479[(2)] = inst_14448);

(statearr_14459_14479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (3))){
var inst_14450 = (state_14452[(2)]);
var state_14452__$1 = state_14452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14452__$1,inst_14450);
} else {
if((state_val_14453 === (2))){
var inst_14422 = (state_14452[(10)]);
var inst_14424 = cljs.core.count.call(null,inst_14422);
var inst_14425 = (inst_14424 > (0));
var state_14452__$1 = state_14452;
if(cljs.core.truth_(inst_14425)){
var statearr_14461_14480 = state_14452__$1;
(statearr_14461_14480[(1)] = (4));

} else {
var statearr_14462_14481 = state_14452__$1;
(statearr_14462_14481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (11))){
var inst_14422 = (state_14452[(10)]);
var inst_14441 = (state_14452[(2)]);
var tmp14460 = inst_14422;
var inst_14422__$1 = tmp14460;
var state_14452__$1 = (function (){var statearr_14463 = state_14452;
(statearr_14463[(10)] = inst_14422__$1);

(statearr_14463[(11)] = inst_14441);

return statearr_14463;
})();
var statearr_14464_14482 = state_14452__$1;
(statearr_14464_14482[(2)] = null);

(statearr_14464_14482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (9))){
var inst_14432 = (state_14452[(7)]);
var state_14452__$1 = state_14452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14452__$1,(11),out,inst_14432);
} else {
if((state_val_14453 === (5))){
var inst_14446 = cljs.core.async.close_BANG_.call(null,out);
var state_14452__$1 = state_14452;
var statearr_14465_14483 = state_14452__$1;
(statearr_14465_14483[(2)] = inst_14446);

(statearr_14465_14483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (10))){
var inst_14444 = (state_14452[(2)]);
var state_14452__$1 = state_14452;
var statearr_14466_14484 = state_14452__$1;
(statearr_14466_14484[(2)] = inst_14444);

(statearr_14466_14484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14453 === (8))){
var inst_14422 = (state_14452[(10)]);
var inst_14432 = (state_14452[(7)]);
var inst_14433 = (state_14452[(9)]);
var inst_14431 = (state_14452[(8)]);
var inst_14436 = (function (){var cs = inst_14422;
var vec__14427 = inst_14431;
var v = inst_14432;
var c = inst_14433;
return (function (p1__14418_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14418_SHARP_);
});
})();
var inst_14437 = cljs.core.filterv.call(null,inst_14436,inst_14422);
var inst_14422__$1 = inst_14437;
var state_14452__$1 = (function (){var statearr_14467 = state_14452;
(statearr_14467[(10)] = inst_14422__$1);

return statearr_14467;
})();
var statearr_14468_14485 = state_14452__$1;
(statearr_14468_14485[(2)] = null);

(statearr_14468_14485[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12851__auto__ = null;
var cljs$core$async$state_machine__12851__auto____0 = (function (){
var statearr_14469 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14469[(0)] = cljs$core$async$state_machine__12851__auto__);

(statearr_14469[(1)] = (1));

return statearr_14469;
});
var cljs$core$async$state_machine__12851__auto____1 = (function (state_14452){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_14452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e14470){var ex__12854__auto__ = e14470;
var statearr_14471_14486 = state_14452;
(statearr_14471_14486[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_14452[(4)]))){
var statearr_14472_14487 = state_14452;
(statearr_14472_14487[(1)] = cljs.core.first.call(null,(state_14452[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14488 = state_14452;
state_14452 = G__14488;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$state_machine__12851__auto__ = function(state_14452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12851__auto____1.call(this,state_14452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12851__auto____0;
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12851__auto____1;
return cljs$core$async$state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_14473 = f__12868__auto__.call(null);
(statearr_14473[(6)] = c__12867__auto___14475);

return statearr_14473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14490 = arguments.length;
switch (G__14490) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12867__auto___14536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_14514){
var state_val_14515 = (state_14514[(1)]);
if((state_val_14515 === (7))){
var inst_14496 = (state_14514[(7)]);
var inst_14496__$1 = (state_14514[(2)]);
var inst_14497 = (inst_14496__$1 == null);
var inst_14498 = cljs.core.not.call(null,inst_14497);
var state_14514__$1 = (function (){var statearr_14516 = state_14514;
(statearr_14516[(7)] = inst_14496__$1);

return statearr_14516;
})();
if(inst_14498){
var statearr_14517_14537 = state_14514__$1;
(statearr_14517_14537[(1)] = (8));

} else {
var statearr_14518_14538 = state_14514__$1;
(statearr_14518_14538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14515 === (1))){
var inst_14491 = (0);
var state_14514__$1 = (function (){var statearr_14519 = state_14514;
(statearr_14519[(8)] = inst_14491);

return statearr_14519;
})();
var statearr_14520_14539 = state_14514__$1;
(statearr_14520_14539[(2)] = null);

(statearr_14520_14539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14515 === (4))){
var state_14514__$1 = state_14514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14514__$1,(7),ch);
} else {
if((state_val_14515 === (6))){
var inst_14509 = (state_14514[(2)]);
var state_14514__$1 = state_14514;
var statearr_14521_14540 = state_14514__$1;
(statearr_14521_14540[(2)] = inst_14509);

(statearr_14521_14540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14515 === (3))){
var inst_14511 = (state_14514[(2)]);
var inst_14512 = cljs.core.async.close_BANG_.call(null,out);
var state_14514__$1 = (function (){var statearr_14522 = state_14514;
(statearr_14522[(9)] = inst_14511);

return statearr_14522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14514__$1,inst_14512);
} else {
if((state_val_14515 === (2))){
var inst_14491 = (state_14514[(8)]);
var inst_14493 = (inst_14491 < n);
var state_14514__$1 = state_14514;
if(cljs.core.truth_(inst_14493)){
var statearr_14523_14541 = state_14514__$1;
(statearr_14523_14541[(1)] = (4));

} else {
var statearr_14524_14542 = state_14514__$1;
(statearr_14524_14542[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14515 === (11))){
var inst_14491 = (state_14514[(8)]);
var inst_14501 = (state_14514[(2)]);
var inst_14502 = (inst_14491 + (1));
var inst_14491__$1 = inst_14502;
var state_14514__$1 = (function (){var statearr_14525 = state_14514;
(statearr_14525[(8)] = inst_14491__$1);

(statearr_14525[(10)] = inst_14501);

return statearr_14525;
})();
var statearr_14526_14543 = state_14514__$1;
(statearr_14526_14543[(2)] = null);

(statearr_14526_14543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14515 === (9))){
var state_14514__$1 = state_14514;
var statearr_14527_14544 = state_14514__$1;
(statearr_14527_14544[(2)] = null);

(statearr_14527_14544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14515 === (5))){
var state_14514__$1 = state_14514;
var statearr_14528_14545 = state_14514__$1;
(statearr_14528_14545[(2)] = null);

(statearr_14528_14545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14515 === (10))){
var inst_14506 = (state_14514[(2)]);
var state_14514__$1 = state_14514;
var statearr_14529_14546 = state_14514__$1;
(statearr_14529_14546[(2)] = inst_14506);

(statearr_14529_14546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14515 === (8))){
var inst_14496 = (state_14514[(7)]);
var state_14514__$1 = state_14514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14514__$1,(11),out,inst_14496);
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
});
return (function() {
var cljs$core$async$state_machine__12851__auto__ = null;
var cljs$core$async$state_machine__12851__auto____0 = (function (){
var statearr_14530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14530[(0)] = cljs$core$async$state_machine__12851__auto__);

(statearr_14530[(1)] = (1));

return statearr_14530;
});
var cljs$core$async$state_machine__12851__auto____1 = (function (state_14514){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_14514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e14531){var ex__12854__auto__ = e14531;
var statearr_14532_14547 = state_14514;
(statearr_14532_14547[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_14514[(4)]))){
var statearr_14533_14548 = state_14514;
(statearr_14533_14548[(1)] = cljs.core.first.call(null,(state_14514[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14549 = state_14514;
state_14514 = G__14549;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$state_machine__12851__auto__ = function(state_14514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12851__auto____1.call(this,state_14514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12851__auto____0;
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12851__auto____1;
return cljs$core$async$state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_14534 = f__12868__auto__.call(null);
(statearr_14534[(6)] = c__12867__auto___14536);

return statearr_14534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14551 = (function (f,ch,meta14552){
this.f = f;
this.ch = ch;
this.meta14552 = meta14552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14553,meta14552__$1){
var self__ = this;
var _14553__$1 = this;
return (new cljs.core.async.t_cljs$core$async14551(self__.f,self__.ch,meta14552__$1));
}));

(cljs.core.async.t_cljs$core$async14551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14553){
var self__ = this;
var _14553__$1 = this;
return self__.meta14552;
}));

(cljs.core.async.t_cljs$core$async14551.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14551.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14551.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14551.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14551.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14554 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14554 = (function (f,ch,meta14552,_,fn1,meta14555){
this.f = f;
this.ch = ch;
this.meta14552 = meta14552;
this._ = _;
this.fn1 = fn1;
this.meta14555 = meta14555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14556,meta14555__$1){
var self__ = this;
var _14556__$1 = this;
return (new cljs.core.async.t_cljs$core$async14554(self__.f,self__.ch,self__.meta14552,self__._,self__.fn1,meta14555__$1));
}));

(cljs.core.async.t_cljs$core$async14554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14556){
var self__ = this;
var _14556__$1 = this;
return self__.meta14555;
}));

(cljs.core.async.t_cljs$core$async14554.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14554.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__14550_SHARP_){
return f1.call(null,(((p1__14550_SHARP_ == null))?null:self__.f.call(null,p1__14550_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async14554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14552","meta14552",-368211778,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14551","cljs.core.async/t_cljs$core$async14551",-1803843395,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14555","meta14555",-1179902739,null)], null);
}));

(cljs.core.async.t_cljs$core$async14554.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14554");

(cljs.core.async.t_cljs$core$async14554.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async14554");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14554.
 */
cljs.core.async.__GT_t_cljs$core$async14554 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14554(f__$1,ch__$1,meta14552__$1,___$2,fn1__$1,meta14555){
return (new cljs.core.async.t_cljs$core$async14554(f__$1,ch__$1,meta14552__$1,___$2,fn1__$1,meta14555));
});

}

return (new cljs.core.async.t_cljs$core$async14554(self__.f,self__.ch,self__.meta14552,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14551.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14551.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14552","meta14552",-368211778,null)], null);
}));

(cljs.core.async.t_cljs$core$async14551.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14551");

(cljs.core.async.t_cljs$core$async14551.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async14551");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14551.
 */
cljs.core.async.__GT_t_cljs$core$async14551 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14551(f__$1,ch__$1,meta14552){
return (new cljs.core.async.t_cljs$core$async14551(f__$1,ch__$1,meta14552));
});

}

return (new cljs.core.async.t_cljs$core$async14551(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14557 = (function (f,ch,meta14558){
this.f = f;
this.ch = ch;
this.meta14558 = meta14558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14559,meta14558__$1){
var self__ = this;
var _14559__$1 = this;
return (new cljs.core.async.t_cljs$core$async14557(self__.f,self__.ch,meta14558__$1));
}));

(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14559){
var self__ = this;
var _14559__$1 = this;
return self__.meta14558;
}));

(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async14557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14558","meta14558",1508680548,null)], null);
}));

(cljs.core.async.t_cljs$core$async14557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14557");

(cljs.core.async.t_cljs$core$async14557.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async14557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14557.
 */
cljs.core.async.__GT_t_cljs$core$async14557 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14557(f__$1,ch__$1,meta14558){
return (new cljs.core.async.t_cljs$core$async14557(f__$1,ch__$1,meta14558));
});

}

return (new cljs.core.async.t_cljs$core$async14557(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14560 = (function (p,ch,meta14561){
this.p = p;
this.ch = ch;
this.meta14561 = meta14561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14562,meta14561__$1){
var self__ = this;
var _14562__$1 = this;
return (new cljs.core.async.t_cljs$core$async14560(self__.p,self__.ch,meta14561__$1));
}));

(cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14562){
var self__ = this;
var _14562__$1 = this;
return self__.meta14561;
}));

(cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14560.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14561","meta14561",-537907070,null)], null);
}));

(cljs.core.async.t_cljs$core$async14560.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14560");

(cljs.core.async.t_cljs$core$async14560.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async14560");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14560.
 */
cljs.core.async.__GT_t_cljs$core$async14560 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14560(p__$1,ch__$1,meta14561){
return (new cljs.core.async.t_cljs$core$async14560(p__$1,ch__$1,meta14561));
});

}

return (new cljs.core.async.t_cljs$core$async14560(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__14564 = arguments.length;
switch (G__14564) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12867__auto___14605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_14585){
var state_val_14586 = (state_14585[(1)]);
if((state_val_14586 === (7))){
var inst_14581 = (state_14585[(2)]);
var state_14585__$1 = state_14585;
var statearr_14587_14606 = state_14585__$1;
(statearr_14587_14606[(2)] = inst_14581);

(statearr_14587_14606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (1))){
var state_14585__$1 = state_14585;
var statearr_14588_14607 = state_14585__$1;
(statearr_14588_14607[(2)] = null);

(statearr_14588_14607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (4))){
var inst_14567 = (state_14585[(7)]);
var inst_14567__$1 = (state_14585[(2)]);
var inst_14568 = (inst_14567__$1 == null);
var state_14585__$1 = (function (){var statearr_14589 = state_14585;
(statearr_14589[(7)] = inst_14567__$1);

return statearr_14589;
})();
if(cljs.core.truth_(inst_14568)){
var statearr_14590_14608 = state_14585__$1;
(statearr_14590_14608[(1)] = (5));

} else {
var statearr_14591_14609 = state_14585__$1;
(statearr_14591_14609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (6))){
var inst_14567 = (state_14585[(7)]);
var inst_14572 = p.call(null,inst_14567);
var state_14585__$1 = state_14585;
if(cljs.core.truth_(inst_14572)){
var statearr_14592_14610 = state_14585__$1;
(statearr_14592_14610[(1)] = (8));

} else {
var statearr_14593_14611 = state_14585__$1;
(statearr_14593_14611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (3))){
var inst_14583 = (state_14585[(2)]);
var state_14585__$1 = state_14585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14585__$1,inst_14583);
} else {
if((state_val_14586 === (2))){
var state_14585__$1 = state_14585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14585__$1,(4),ch);
} else {
if((state_val_14586 === (11))){
var inst_14575 = (state_14585[(2)]);
var state_14585__$1 = state_14585;
var statearr_14594_14612 = state_14585__$1;
(statearr_14594_14612[(2)] = inst_14575);

(statearr_14594_14612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (9))){
var state_14585__$1 = state_14585;
var statearr_14595_14613 = state_14585__$1;
(statearr_14595_14613[(2)] = null);

(statearr_14595_14613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (5))){
var inst_14570 = cljs.core.async.close_BANG_.call(null,out);
var state_14585__$1 = state_14585;
var statearr_14596_14614 = state_14585__$1;
(statearr_14596_14614[(2)] = inst_14570);

(statearr_14596_14614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (10))){
var inst_14578 = (state_14585[(2)]);
var state_14585__$1 = (function (){var statearr_14597 = state_14585;
(statearr_14597[(8)] = inst_14578);

return statearr_14597;
})();
var statearr_14598_14615 = state_14585__$1;
(statearr_14598_14615[(2)] = null);

(statearr_14598_14615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14586 === (8))){
var inst_14567 = (state_14585[(7)]);
var state_14585__$1 = state_14585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14585__$1,(11),out,inst_14567);
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
});
return (function() {
var cljs$core$async$state_machine__12851__auto__ = null;
var cljs$core$async$state_machine__12851__auto____0 = (function (){
var statearr_14599 = [null,null,null,null,null,null,null,null,null];
(statearr_14599[(0)] = cljs$core$async$state_machine__12851__auto__);

(statearr_14599[(1)] = (1));

return statearr_14599;
});
var cljs$core$async$state_machine__12851__auto____1 = (function (state_14585){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_14585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e14600){var ex__12854__auto__ = e14600;
var statearr_14601_14616 = state_14585;
(statearr_14601_14616[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_14585[(4)]))){
var statearr_14602_14617 = state_14585;
(statearr_14602_14617[(1)] = cljs.core.first.call(null,(state_14585[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14618 = state_14585;
state_14585 = G__14618;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$state_machine__12851__auto__ = function(state_14585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12851__auto____1.call(this,state_14585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12851__auto____0;
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12851__auto____1;
return cljs$core$async$state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_14603 = f__12868__auto__.call(null);
(statearr_14603[(6)] = c__12867__auto___14605);

return statearr_14603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14620 = arguments.length;
switch (G__14620) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_14683){
var state_val_14684 = (state_14683[(1)]);
if((state_val_14684 === (7))){
var inst_14679 = (state_14683[(2)]);
var state_14683__$1 = state_14683;
var statearr_14685_14724 = state_14683__$1;
(statearr_14685_14724[(2)] = inst_14679);

(statearr_14685_14724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (20))){
var inst_14649 = (state_14683[(7)]);
var inst_14660 = (state_14683[(2)]);
var inst_14661 = cljs.core.next.call(null,inst_14649);
var inst_14635 = inst_14661;
var inst_14636 = null;
var inst_14637 = (0);
var inst_14638 = (0);
var state_14683__$1 = (function (){var statearr_14686 = state_14683;
(statearr_14686[(8)] = inst_14636);

(statearr_14686[(9)] = inst_14638);

(statearr_14686[(10)] = inst_14635);

(statearr_14686[(11)] = inst_14637);

(statearr_14686[(12)] = inst_14660);

return statearr_14686;
})();
var statearr_14687_14725 = state_14683__$1;
(statearr_14687_14725[(2)] = null);

(statearr_14687_14725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (1))){
var state_14683__$1 = state_14683;
var statearr_14688_14726 = state_14683__$1;
(statearr_14688_14726[(2)] = null);

(statearr_14688_14726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (4))){
var inst_14624 = (state_14683[(13)]);
var inst_14624__$1 = (state_14683[(2)]);
var inst_14625 = (inst_14624__$1 == null);
var state_14683__$1 = (function (){var statearr_14689 = state_14683;
(statearr_14689[(13)] = inst_14624__$1);

return statearr_14689;
})();
if(cljs.core.truth_(inst_14625)){
var statearr_14690_14727 = state_14683__$1;
(statearr_14690_14727[(1)] = (5));

} else {
var statearr_14691_14728 = state_14683__$1;
(statearr_14691_14728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (15))){
var state_14683__$1 = state_14683;
var statearr_14695_14729 = state_14683__$1;
(statearr_14695_14729[(2)] = null);

(statearr_14695_14729[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (21))){
var state_14683__$1 = state_14683;
var statearr_14696_14730 = state_14683__$1;
(statearr_14696_14730[(2)] = null);

(statearr_14696_14730[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (13))){
var inst_14636 = (state_14683[(8)]);
var inst_14638 = (state_14683[(9)]);
var inst_14635 = (state_14683[(10)]);
var inst_14637 = (state_14683[(11)]);
var inst_14645 = (state_14683[(2)]);
var inst_14646 = (inst_14638 + (1));
var tmp14692 = inst_14636;
var tmp14693 = inst_14635;
var tmp14694 = inst_14637;
var inst_14635__$1 = tmp14693;
var inst_14636__$1 = tmp14692;
var inst_14637__$1 = tmp14694;
var inst_14638__$1 = inst_14646;
var state_14683__$1 = (function (){var statearr_14697 = state_14683;
(statearr_14697[(8)] = inst_14636__$1);

(statearr_14697[(9)] = inst_14638__$1);

(statearr_14697[(10)] = inst_14635__$1);

(statearr_14697[(14)] = inst_14645);

(statearr_14697[(11)] = inst_14637__$1);

return statearr_14697;
})();
var statearr_14698_14731 = state_14683__$1;
(statearr_14698_14731[(2)] = null);

(statearr_14698_14731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (22))){
var state_14683__$1 = state_14683;
var statearr_14699_14732 = state_14683__$1;
(statearr_14699_14732[(2)] = null);

(statearr_14699_14732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (6))){
var inst_14624 = (state_14683[(13)]);
var inst_14633 = f.call(null,inst_14624);
var inst_14634 = cljs.core.seq.call(null,inst_14633);
var inst_14635 = inst_14634;
var inst_14636 = null;
var inst_14637 = (0);
var inst_14638 = (0);
var state_14683__$1 = (function (){var statearr_14700 = state_14683;
(statearr_14700[(8)] = inst_14636);

(statearr_14700[(9)] = inst_14638);

(statearr_14700[(10)] = inst_14635);

(statearr_14700[(11)] = inst_14637);

return statearr_14700;
})();
var statearr_14701_14733 = state_14683__$1;
(statearr_14701_14733[(2)] = null);

(statearr_14701_14733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (17))){
var inst_14649 = (state_14683[(7)]);
var inst_14653 = cljs.core.chunk_first.call(null,inst_14649);
var inst_14654 = cljs.core.chunk_rest.call(null,inst_14649);
var inst_14655 = cljs.core.count.call(null,inst_14653);
var inst_14635 = inst_14654;
var inst_14636 = inst_14653;
var inst_14637 = inst_14655;
var inst_14638 = (0);
var state_14683__$1 = (function (){var statearr_14702 = state_14683;
(statearr_14702[(8)] = inst_14636);

(statearr_14702[(9)] = inst_14638);

(statearr_14702[(10)] = inst_14635);

(statearr_14702[(11)] = inst_14637);

return statearr_14702;
})();
var statearr_14703_14734 = state_14683__$1;
(statearr_14703_14734[(2)] = null);

(statearr_14703_14734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (3))){
var inst_14681 = (state_14683[(2)]);
var state_14683__$1 = state_14683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14683__$1,inst_14681);
} else {
if((state_val_14684 === (12))){
var inst_14669 = (state_14683[(2)]);
var state_14683__$1 = state_14683;
var statearr_14704_14735 = state_14683__$1;
(statearr_14704_14735[(2)] = inst_14669);

(statearr_14704_14735[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (2))){
var state_14683__$1 = state_14683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14683__$1,(4),in$);
} else {
if((state_val_14684 === (23))){
var inst_14677 = (state_14683[(2)]);
var state_14683__$1 = state_14683;
var statearr_14705_14736 = state_14683__$1;
(statearr_14705_14736[(2)] = inst_14677);

(statearr_14705_14736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (19))){
var inst_14664 = (state_14683[(2)]);
var state_14683__$1 = state_14683;
var statearr_14706_14737 = state_14683__$1;
(statearr_14706_14737[(2)] = inst_14664);

(statearr_14706_14737[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (11))){
var inst_14635 = (state_14683[(10)]);
var inst_14649 = (state_14683[(7)]);
var inst_14649__$1 = cljs.core.seq.call(null,inst_14635);
var state_14683__$1 = (function (){var statearr_14707 = state_14683;
(statearr_14707[(7)] = inst_14649__$1);

return statearr_14707;
})();
if(inst_14649__$1){
var statearr_14708_14738 = state_14683__$1;
(statearr_14708_14738[(1)] = (14));

} else {
var statearr_14709_14739 = state_14683__$1;
(statearr_14709_14739[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (9))){
var inst_14671 = (state_14683[(2)]);
var inst_14672 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14683__$1 = (function (){var statearr_14710 = state_14683;
(statearr_14710[(15)] = inst_14671);

return statearr_14710;
})();
if(cljs.core.truth_(inst_14672)){
var statearr_14711_14740 = state_14683__$1;
(statearr_14711_14740[(1)] = (21));

} else {
var statearr_14712_14741 = state_14683__$1;
(statearr_14712_14741[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (5))){
var inst_14627 = cljs.core.async.close_BANG_.call(null,out);
var state_14683__$1 = state_14683;
var statearr_14713_14742 = state_14683__$1;
(statearr_14713_14742[(2)] = inst_14627);

(statearr_14713_14742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (14))){
var inst_14649 = (state_14683[(7)]);
var inst_14651 = cljs.core.chunked_seq_QMARK_.call(null,inst_14649);
var state_14683__$1 = state_14683;
if(inst_14651){
var statearr_14714_14743 = state_14683__$1;
(statearr_14714_14743[(1)] = (17));

} else {
var statearr_14715_14744 = state_14683__$1;
(statearr_14715_14744[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (16))){
var inst_14667 = (state_14683[(2)]);
var state_14683__$1 = state_14683;
var statearr_14716_14745 = state_14683__$1;
(statearr_14716_14745[(2)] = inst_14667);

(statearr_14716_14745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14684 === (10))){
var inst_14636 = (state_14683[(8)]);
var inst_14638 = (state_14683[(9)]);
var inst_14643 = cljs.core._nth.call(null,inst_14636,inst_14638);
var state_14683__$1 = state_14683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14683__$1,(13),out,inst_14643);
} else {
if((state_val_14684 === (18))){
var inst_14649 = (state_14683[(7)]);
var inst_14658 = cljs.core.first.call(null,inst_14649);
var state_14683__$1 = state_14683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14683__$1,(20),out,inst_14658);
} else {
if((state_val_14684 === (8))){
var inst_14638 = (state_14683[(9)]);
var inst_14637 = (state_14683[(11)]);
var inst_14640 = (inst_14638 < inst_14637);
var inst_14641 = inst_14640;
var state_14683__$1 = state_14683;
if(cljs.core.truth_(inst_14641)){
var statearr_14717_14746 = state_14683__$1;
(statearr_14717_14746[(1)] = (10));

} else {
var statearr_14718_14747 = state_14683__$1;
(statearr_14718_14747[(1)] = (11));

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
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12851__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12851__auto____0 = (function (){
var statearr_14719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14719[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12851__auto__);

(statearr_14719[(1)] = (1));

return statearr_14719;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12851__auto____1 = (function (state_14683){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_14683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e14720){var ex__12854__auto__ = e14720;
var statearr_14721_14748 = state_14683;
(statearr_14721_14748[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_14683[(4)]))){
var statearr_14722_14749 = state_14683;
(statearr_14722_14749[(1)] = cljs.core.first.call(null,(state_14683[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14750 = state_14683;
state_14683 = G__14750;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12851__auto__ = function(state_14683){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12851__auto____1.call(this,state_14683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12851__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12851__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_14723 = f__12868__auto__.call(null);
(statearr_14723[(6)] = c__12867__auto__);

return statearr_14723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));

return c__12867__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14752 = arguments.length;
switch (G__14752) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__14755 = arguments.length;
switch (G__14755) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__14758 = arguments.length;
switch (G__14758) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12867__auto___14806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_14782){
var state_val_14783 = (state_14782[(1)]);
if((state_val_14783 === (7))){
var inst_14777 = (state_14782[(2)]);
var state_14782__$1 = state_14782;
var statearr_14784_14807 = state_14782__$1;
(statearr_14784_14807[(2)] = inst_14777);

(statearr_14784_14807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (1))){
var inst_14759 = null;
var state_14782__$1 = (function (){var statearr_14785 = state_14782;
(statearr_14785[(7)] = inst_14759);

return statearr_14785;
})();
var statearr_14786_14808 = state_14782__$1;
(statearr_14786_14808[(2)] = null);

(statearr_14786_14808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (4))){
var inst_14762 = (state_14782[(8)]);
var inst_14762__$1 = (state_14782[(2)]);
var inst_14763 = (inst_14762__$1 == null);
var inst_14764 = cljs.core.not.call(null,inst_14763);
var state_14782__$1 = (function (){var statearr_14787 = state_14782;
(statearr_14787[(8)] = inst_14762__$1);

return statearr_14787;
})();
if(inst_14764){
var statearr_14788_14809 = state_14782__$1;
(statearr_14788_14809[(1)] = (5));

} else {
var statearr_14789_14810 = state_14782__$1;
(statearr_14789_14810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (6))){
var state_14782__$1 = state_14782;
var statearr_14790_14811 = state_14782__$1;
(statearr_14790_14811[(2)] = null);

(statearr_14790_14811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (3))){
var inst_14779 = (state_14782[(2)]);
var inst_14780 = cljs.core.async.close_BANG_.call(null,out);
var state_14782__$1 = (function (){var statearr_14791 = state_14782;
(statearr_14791[(9)] = inst_14779);

return statearr_14791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14782__$1,inst_14780);
} else {
if((state_val_14783 === (2))){
var state_14782__$1 = state_14782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14782__$1,(4),ch);
} else {
if((state_val_14783 === (11))){
var inst_14762 = (state_14782[(8)]);
var inst_14771 = (state_14782[(2)]);
var inst_14759 = inst_14762;
var state_14782__$1 = (function (){var statearr_14792 = state_14782;
(statearr_14792[(10)] = inst_14771);

(statearr_14792[(7)] = inst_14759);

return statearr_14792;
})();
var statearr_14793_14812 = state_14782__$1;
(statearr_14793_14812[(2)] = null);

(statearr_14793_14812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (9))){
var inst_14762 = (state_14782[(8)]);
var state_14782__$1 = state_14782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14782__$1,(11),out,inst_14762);
} else {
if((state_val_14783 === (5))){
var inst_14762 = (state_14782[(8)]);
var inst_14759 = (state_14782[(7)]);
var inst_14766 = cljs.core._EQ_.call(null,inst_14762,inst_14759);
var state_14782__$1 = state_14782;
if(inst_14766){
var statearr_14795_14813 = state_14782__$1;
(statearr_14795_14813[(1)] = (8));

} else {
var statearr_14796_14814 = state_14782__$1;
(statearr_14796_14814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (10))){
var inst_14774 = (state_14782[(2)]);
var state_14782__$1 = state_14782;
var statearr_14797_14815 = state_14782__$1;
(statearr_14797_14815[(2)] = inst_14774);

(statearr_14797_14815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14783 === (8))){
var inst_14759 = (state_14782[(7)]);
var tmp14794 = inst_14759;
var inst_14759__$1 = tmp14794;
var state_14782__$1 = (function (){var statearr_14798 = state_14782;
(statearr_14798[(7)] = inst_14759__$1);

return statearr_14798;
})();
var statearr_14799_14816 = state_14782__$1;
(statearr_14799_14816[(2)] = null);

(statearr_14799_14816[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12851__auto__ = null;
var cljs$core$async$state_machine__12851__auto____0 = (function (){
var statearr_14800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14800[(0)] = cljs$core$async$state_machine__12851__auto__);

(statearr_14800[(1)] = (1));

return statearr_14800;
});
var cljs$core$async$state_machine__12851__auto____1 = (function (state_14782){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_14782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e14801){var ex__12854__auto__ = e14801;
var statearr_14802_14817 = state_14782;
(statearr_14802_14817[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_14782[(4)]))){
var statearr_14803_14818 = state_14782;
(statearr_14803_14818[(1)] = cljs.core.first.call(null,(state_14782[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14819 = state_14782;
state_14782 = G__14819;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$state_machine__12851__auto__ = function(state_14782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12851__auto____1.call(this,state_14782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12851__auto____0;
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12851__auto____1;
return cljs$core$async$state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_14804 = f__12868__auto__.call(null);
(statearr_14804[(6)] = c__12867__auto___14806);

return statearr_14804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14821 = arguments.length;
switch (G__14821) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12867__auto___14888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_14859){
var state_val_14860 = (state_14859[(1)]);
if((state_val_14860 === (7))){
var inst_14855 = (state_14859[(2)]);
var state_14859__$1 = state_14859;
var statearr_14861_14889 = state_14859__$1;
(statearr_14861_14889[(2)] = inst_14855);

(statearr_14861_14889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (1))){
var inst_14822 = (new Array(n));
var inst_14823 = inst_14822;
var inst_14824 = (0);
var state_14859__$1 = (function (){var statearr_14862 = state_14859;
(statearr_14862[(7)] = inst_14823);

(statearr_14862[(8)] = inst_14824);

return statearr_14862;
})();
var statearr_14863_14890 = state_14859__$1;
(statearr_14863_14890[(2)] = null);

(statearr_14863_14890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (4))){
var inst_14827 = (state_14859[(9)]);
var inst_14827__$1 = (state_14859[(2)]);
var inst_14828 = (inst_14827__$1 == null);
var inst_14829 = cljs.core.not.call(null,inst_14828);
var state_14859__$1 = (function (){var statearr_14864 = state_14859;
(statearr_14864[(9)] = inst_14827__$1);

return statearr_14864;
})();
if(inst_14829){
var statearr_14865_14891 = state_14859__$1;
(statearr_14865_14891[(1)] = (5));

} else {
var statearr_14866_14892 = state_14859__$1;
(statearr_14866_14892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (15))){
var inst_14849 = (state_14859[(2)]);
var state_14859__$1 = state_14859;
var statearr_14867_14893 = state_14859__$1;
(statearr_14867_14893[(2)] = inst_14849);

(statearr_14867_14893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (13))){
var state_14859__$1 = state_14859;
var statearr_14868_14894 = state_14859__$1;
(statearr_14868_14894[(2)] = null);

(statearr_14868_14894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (6))){
var inst_14824 = (state_14859[(8)]);
var inst_14845 = (inst_14824 > (0));
var state_14859__$1 = state_14859;
if(cljs.core.truth_(inst_14845)){
var statearr_14869_14895 = state_14859__$1;
(statearr_14869_14895[(1)] = (12));

} else {
var statearr_14870_14896 = state_14859__$1;
(statearr_14870_14896[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (3))){
var inst_14857 = (state_14859[(2)]);
var state_14859__$1 = state_14859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14859__$1,inst_14857);
} else {
if((state_val_14860 === (12))){
var inst_14823 = (state_14859[(7)]);
var inst_14847 = cljs.core.vec.call(null,inst_14823);
var state_14859__$1 = state_14859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14859__$1,(15),out,inst_14847);
} else {
if((state_val_14860 === (2))){
var state_14859__$1 = state_14859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14859__$1,(4),ch);
} else {
if((state_val_14860 === (11))){
var inst_14839 = (state_14859[(2)]);
var inst_14840 = (new Array(n));
var inst_14823 = inst_14840;
var inst_14824 = (0);
var state_14859__$1 = (function (){var statearr_14871 = state_14859;
(statearr_14871[(10)] = inst_14839);

(statearr_14871[(7)] = inst_14823);

(statearr_14871[(8)] = inst_14824);

return statearr_14871;
})();
var statearr_14872_14897 = state_14859__$1;
(statearr_14872_14897[(2)] = null);

(statearr_14872_14897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (9))){
var inst_14823 = (state_14859[(7)]);
var inst_14837 = cljs.core.vec.call(null,inst_14823);
var state_14859__$1 = state_14859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14859__$1,(11),out,inst_14837);
} else {
if((state_val_14860 === (5))){
var inst_14823 = (state_14859[(7)]);
var inst_14827 = (state_14859[(9)]);
var inst_14824 = (state_14859[(8)]);
var inst_14832 = (state_14859[(11)]);
var inst_14831 = (inst_14823[inst_14824] = inst_14827);
var inst_14832__$1 = (inst_14824 + (1));
var inst_14833 = (inst_14832__$1 < n);
var state_14859__$1 = (function (){var statearr_14873 = state_14859;
(statearr_14873[(12)] = inst_14831);

(statearr_14873[(11)] = inst_14832__$1);

return statearr_14873;
})();
if(cljs.core.truth_(inst_14833)){
var statearr_14874_14898 = state_14859__$1;
(statearr_14874_14898[(1)] = (8));

} else {
var statearr_14875_14899 = state_14859__$1;
(statearr_14875_14899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (14))){
var inst_14852 = (state_14859[(2)]);
var inst_14853 = cljs.core.async.close_BANG_.call(null,out);
var state_14859__$1 = (function (){var statearr_14877 = state_14859;
(statearr_14877[(13)] = inst_14852);

return statearr_14877;
})();
var statearr_14878_14900 = state_14859__$1;
(statearr_14878_14900[(2)] = inst_14853);

(statearr_14878_14900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (10))){
var inst_14843 = (state_14859[(2)]);
var state_14859__$1 = state_14859;
var statearr_14879_14901 = state_14859__$1;
(statearr_14879_14901[(2)] = inst_14843);

(statearr_14879_14901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14860 === (8))){
var inst_14823 = (state_14859[(7)]);
var inst_14832 = (state_14859[(11)]);
var tmp14876 = inst_14823;
var inst_14823__$1 = tmp14876;
var inst_14824 = inst_14832;
var state_14859__$1 = (function (){var statearr_14880 = state_14859;
(statearr_14880[(7)] = inst_14823__$1);

(statearr_14880[(8)] = inst_14824);

return statearr_14880;
})();
var statearr_14881_14902 = state_14859__$1;
(statearr_14881_14902[(2)] = null);

(statearr_14881_14902[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__12851__auto__ = null;
var cljs$core$async$state_machine__12851__auto____0 = (function (){
var statearr_14882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14882[(0)] = cljs$core$async$state_machine__12851__auto__);

(statearr_14882[(1)] = (1));

return statearr_14882;
});
var cljs$core$async$state_machine__12851__auto____1 = (function (state_14859){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_14859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e14883){var ex__12854__auto__ = e14883;
var statearr_14884_14903 = state_14859;
(statearr_14884_14903[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_14859[(4)]))){
var statearr_14885_14904 = state_14859;
(statearr_14885_14904[(1)] = cljs.core.first.call(null,(state_14859[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14905 = state_14859;
state_14859 = G__14905;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$state_machine__12851__auto__ = function(state_14859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12851__auto____1.call(this,state_14859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12851__auto____0;
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12851__auto____1;
return cljs$core$async$state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_14886 = f__12868__auto__.call(null);
(statearr_14886[(6)] = c__12867__auto___14888);

return statearr_14886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14907 = arguments.length;
switch (G__14907) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12867__auto___14985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12868__auto__ = (function (){var switch__12850__auto__ = (function (state_14952){
var state_val_14953 = (state_14952[(1)]);
if((state_val_14953 === (7))){
var inst_14948 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14954_14986 = state_14952__$1;
(statearr_14954_14986[(2)] = inst_14948);

(statearr_14954_14986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (1))){
var inst_14908 = [];
var inst_14909 = inst_14908;
var inst_14910 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14952__$1 = (function (){var statearr_14955 = state_14952;
(statearr_14955[(7)] = inst_14910);

(statearr_14955[(8)] = inst_14909);

return statearr_14955;
})();
var statearr_14956_14987 = state_14952__$1;
(statearr_14956_14987[(2)] = null);

(statearr_14956_14987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (4))){
var inst_14913 = (state_14952[(9)]);
var inst_14913__$1 = (state_14952[(2)]);
var inst_14914 = (inst_14913__$1 == null);
var inst_14915 = cljs.core.not.call(null,inst_14914);
var state_14952__$1 = (function (){var statearr_14957 = state_14952;
(statearr_14957[(9)] = inst_14913__$1);

return statearr_14957;
})();
if(inst_14915){
var statearr_14958_14988 = state_14952__$1;
(statearr_14958_14988[(1)] = (5));

} else {
var statearr_14959_14989 = state_14952__$1;
(statearr_14959_14989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (15))){
var inst_14909 = (state_14952[(8)]);
var inst_14940 = cljs.core.vec.call(null,inst_14909);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14952__$1,(18),out,inst_14940);
} else {
if((state_val_14953 === (13))){
var inst_14935 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14960_14990 = state_14952__$1;
(statearr_14960_14990[(2)] = inst_14935);

(statearr_14960_14990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (6))){
var inst_14909 = (state_14952[(8)]);
var inst_14937 = inst_14909.length;
var inst_14938 = (inst_14937 > (0));
var state_14952__$1 = state_14952;
if(cljs.core.truth_(inst_14938)){
var statearr_14961_14991 = state_14952__$1;
(statearr_14961_14991[(1)] = (15));

} else {
var statearr_14962_14992 = state_14952__$1;
(statearr_14962_14992[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (17))){
var inst_14945 = (state_14952[(2)]);
var inst_14946 = cljs.core.async.close_BANG_.call(null,out);
var state_14952__$1 = (function (){var statearr_14963 = state_14952;
(statearr_14963[(10)] = inst_14945);

return statearr_14963;
})();
var statearr_14964_14993 = state_14952__$1;
(statearr_14964_14993[(2)] = inst_14946);

(statearr_14964_14993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (3))){
var inst_14950 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14952__$1,inst_14950);
} else {
if((state_val_14953 === (12))){
var inst_14909 = (state_14952[(8)]);
var inst_14928 = cljs.core.vec.call(null,inst_14909);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14952__$1,(14),out,inst_14928);
} else {
if((state_val_14953 === (2))){
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14952__$1,(4),ch);
} else {
if((state_val_14953 === (11))){
var inst_14917 = (state_14952[(11)]);
var inst_14913 = (state_14952[(9)]);
var inst_14909 = (state_14952[(8)]);
var inst_14925 = inst_14909.push(inst_14913);
var tmp14965 = inst_14909;
var inst_14909__$1 = tmp14965;
var inst_14910 = inst_14917;
var state_14952__$1 = (function (){var statearr_14966 = state_14952;
(statearr_14966[(12)] = inst_14925);

(statearr_14966[(7)] = inst_14910);

(statearr_14966[(8)] = inst_14909__$1);

return statearr_14966;
})();
var statearr_14967_14994 = state_14952__$1;
(statearr_14967_14994[(2)] = null);

(statearr_14967_14994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (9))){
var inst_14910 = (state_14952[(7)]);
var inst_14921 = cljs.core.keyword_identical_QMARK_.call(null,inst_14910,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_14952__$1 = state_14952;
var statearr_14968_14995 = state_14952__$1;
(statearr_14968_14995[(2)] = inst_14921);

(statearr_14968_14995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (5))){
var inst_14917 = (state_14952[(11)]);
var inst_14913 = (state_14952[(9)]);
var inst_14918 = (state_14952[(13)]);
var inst_14910 = (state_14952[(7)]);
var inst_14917__$1 = f.call(null,inst_14913);
var inst_14918__$1 = cljs.core._EQ_.call(null,inst_14917__$1,inst_14910);
var state_14952__$1 = (function (){var statearr_14969 = state_14952;
(statearr_14969[(11)] = inst_14917__$1);

(statearr_14969[(13)] = inst_14918__$1);

return statearr_14969;
})();
if(inst_14918__$1){
var statearr_14970_14996 = state_14952__$1;
(statearr_14970_14996[(1)] = (8));

} else {
var statearr_14971_14997 = state_14952__$1;
(statearr_14971_14997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (14))){
var inst_14917 = (state_14952[(11)]);
var inst_14913 = (state_14952[(9)]);
var inst_14930 = (state_14952[(2)]);
var inst_14931 = [];
var inst_14932 = inst_14931.push(inst_14913);
var inst_14909 = inst_14931;
var inst_14910 = inst_14917;
var state_14952__$1 = (function (){var statearr_14972 = state_14952;
(statearr_14972[(14)] = inst_14932);

(statearr_14972[(7)] = inst_14910);

(statearr_14972[(8)] = inst_14909);

(statearr_14972[(15)] = inst_14930);

return statearr_14972;
})();
var statearr_14973_14998 = state_14952__$1;
(statearr_14973_14998[(2)] = null);

(statearr_14973_14998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (16))){
var state_14952__$1 = state_14952;
var statearr_14974_14999 = state_14952__$1;
(statearr_14974_14999[(2)] = null);

(statearr_14974_14999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (10))){
var inst_14923 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
if(cljs.core.truth_(inst_14923)){
var statearr_14975_15000 = state_14952__$1;
(statearr_14975_15000[(1)] = (11));

} else {
var statearr_14976_15001 = state_14952__$1;
(statearr_14976_15001[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (18))){
var inst_14942 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14977_15002 = state_14952__$1;
(statearr_14977_15002[(2)] = inst_14942);

(statearr_14977_15002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (8))){
var inst_14918 = (state_14952[(13)]);
var state_14952__$1 = state_14952;
var statearr_14978_15003 = state_14952__$1;
(statearr_14978_15003[(2)] = inst_14918);

(statearr_14978_15003[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__12851__auto__ = null;
var cljs$core$async$state_machine__12851__auto____0 = (function (){
var statearr_14979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14979[(0)] = cljs$core$async$state_machine__12851__auto__);

(statearr_14979[(1)] = (1));

return statearr_14979;
});
var cljs$core$async$state_machine__12851__auto____1 = (function (state_14952){
while(true){
var ret_value__12852__auto__ = (function (){try{while(true){
var result__12853__auto__ = switch__12850__auto__.call(null,state_14952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12853__auto__;
}
break;
}
}catch (e14980){var ex__12854__auto__ = e14980;
var statearr_14981_15004 = state_14952;
(statearr_14981_15004[(2)] = ex__12854__auto__);


if(cljs.core.seq.call(null,(state_14952[(4)]))){
var statearr_14982_15005 = state_14952;
(statearr_14982_15005[(1)] = cljs.core.first.call(null,(state_14952[(4)])));

} else {
throw ex__12854__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15006 = state_14952;
state_14952 = G__15006;
continue;
} else {
return ret_value__12852__auto__;
}
break;
}
});
cljs$core$async$state_machine__12851__auto__ = function(state_14952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12851__auto____1.call(this,state_14952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12851__auto____0;
cljs$core$async$state_machine__12851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12851__auto____1;
return cljs$core$async$state_machine__12851__auto__;
})()
})();
var state__12869__auto__ = (function (){var statearr_14983 = f__12868__auto__.call(null);
(statearr_14983[(6)] = c__12867__auto___14985);

return statearr_14983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12869__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
