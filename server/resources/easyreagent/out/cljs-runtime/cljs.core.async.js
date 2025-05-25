goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30132 = (function (f,blockable,meta30133){
this.f = f;
this.blockable = blockable;
this.meta30133 = meta30133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30134,meta30133__$1){
var self__ = this;
var _30134__$1 = this;
return (new cljs.core.async.t_cljs$core$async30132(self__.f,self__.blockable,meta30133__$1));
}));

(cljs.core.async.t_cljs$core$async30132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30134){
var self__ = this;
var _30134__$1 = this;
return self__.meta30133;
}));

(cljs.core.async.t_cljs$core$async30132.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30132.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30133","meta30133",-470530186,null)], null);
}));

(cljs.core.async.t_cljs$core$async30132.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30132");

(cljs.core.async.t_cljs$core$async30132.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async30132");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30132.
 */
cljs.core.async.__GT_t_cljs$core$async30132 = (function cljs$core$async$__GT_t_cljs$core$async30132(f,blockable,meta30133){
return (new cljs.core.async.t_cljs$core$async30132(f,blockable,meta30133));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30110 = arguments.length;
switch (G__30110) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async30132(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__30163 = arguments.length;
switch (G__30163) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__30165 = arguments.length;
switch (G__30165) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__30167 = arguments.length;
switch (G__30167) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32992 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32992) : fn1.call(null, val_32992));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32992) : fn1.call(null, val_32992));
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__30169 = arguments.length;
switch (G__30169) {
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
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___32999 = n;
var x_33000 = (0);
while(true){
if((x_33000 < n__5633__auto___32999)){
(a[x_33000] = x_33000);

var G__33001 = (x_33000 + (1));
x_33000 = G__33001;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30172 = (function (flag,meta30173){
this.flag = flag;
this.meta30173 = meta30173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30174,meta30173__$1){
var self__ = this;
var _30174__$1 = this;
return (new cljs.core.async.t_cljs$core$async30172(self__.flag,meta30173__$1));
}));

(cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30174){
var self__ = this;
var _30174__$1 = this;
return self__.meta30173;
}));

(cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30173","meta30173",2008999759,null)], null);
}));

(cljs.core.async.t_cljs$core$async30172.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30172");

(cljs.core.async.t_cljs$core$async30172.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async30172");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30172.
 */
cljs.core.async.__GT_t_cljs$core$async30172 = (function cljs$core$async$__GT_t_cljs$core$async30172(flag,meta30173){
return (new cljs.core.async.t_cljs$core$async30172(flag,meta30173));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async30172(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30177 = (function (flag,cb,meta30178){
this.flag = flag;
this.cb = cb;
this.meta30178 = meta30178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30179,meta30178__$1){
var self__ = this;
var _30179__$1 = this;
return (new cljs.core.async.t_cljs$core$async30177(self__.flag,self__.cb,meta30178__$1));
}));

(cljs.core.async.t_cljs$core$async30177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30179){
var self__ = this;
var _30179__$1 = this;
return self__.meta30178;
}));

(cljs.core.async.t_cljs$core$async30177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30178","meta30178",449523906,null)], null);
}));

(cljs.core.async.t_cljs$core$async30177.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30177");

(cljs.core.async.t_cljs$core$async30177.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async30177");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30177.
 */
cljs.core.async.__GT_t_cljs$core$async30177 = (function cljs$core$async$__GT_t_cljs$core$async30177(flag,cb,meta30178){
return (new cljs.core.async.t_cljs$core$async30177(flag,cb,meta30178));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async30177(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30207_SHARP_){
var G__30269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30207_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30269) : fret.call(null, G__30269));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30213_SHARP_){
var G__30270 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30213_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30270) : fret.call(null, G__30270));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33029 = (i + (1));
i = G__33029;
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
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__5766__auto___33031 = arguments.length;
var i__5767__auto___33032 = (0);
while(true){
if((i__5767__auto___33032 < len__5766__auto___33031)){
args__5772__auto__.push((arguments[i__5767__auto___33032]));

var G__33035 = (i__5767__auto___33032 + (1));
i__5767__auto___33032 = G__33035;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30275){
var map__30276 = p__30275;
var map__30276__$1 = cljs.core.__destructure_map(map__30276);
var opts = map__30276__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30272){
var G__30273 = cljs.core.first(seq30272);
var seq30272__$1 = cljs.core.next(seq30272);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30273,seq30272__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__30284 = arguments.length;
switch (G__30284) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29895__auto___33052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_30372){
var state_val_30373 = (state_30372[(1)]);
if((state_val_30373 === (7))){
var inst_30360 = (state_30372[(2)]);
var state_30372__$1 = state_30372;
var statearr_30388_33057 = state_30372__$1;
(statearr_30388_33057[(2)] = inst_30360);

(statearr_30388_33057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30373 === (1))){
var state_30372__$1 = state_30372;
var statearr_30389_33059 = state_30372__$1;
(statearr_30389_33059[(2)] = null);

(statearr_30389_33059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30373 === (4))){
var inst_30332 = (state_30372[(7)]);
var inst_30332__$1 = (state_30372[(2)]);
var inst_30339 = (inst_30332__$1 == null);
var state_30372__$1 = (function (){var statearr_30390 = state_30372;
(statearr_30390[(7)] = inst_30332__$1);

return statearr_30390;
})();
if(cljs.core.truth_(inst_30339)){
var statearr_30391_33060 = state_30372__$1;
(statearr_30391_33060[(1)] = (5));

} else {
var statearr_30392_33061 = state_30372__$1;
(statearr_30392_33061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30373 === (13))){
var state_30372__$1 = state_30372;
var statearr_30393_33062 = state_30372__$1;
(statearr_30393_33062[(2)] = null);

(statearr_30393_33062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30373 === (6))){
var inst_30332 = (state_30372[(7)]);
var state_30372__$1 = state_30372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30372__$1,(11),to,inst_30332);
} else {
if((state_val_30373 === (3))){
var inst_30364 = (state_30372[(2)]);
var state_30372__$1 = state_30372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30372__$1,inst_30364);
} else {
if((state_val_30373 === (12))){
var state_30372__$1 = state_30372;
var statearr_30394_33066 = state_30372__$1;
(statearr_30394_33066[(2)] = null);

(statearr_30394_33066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30373 === (2))){
var state_30372__$1 = state_30372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30372__$1,(4),from);
} else {
if((state_val_30373 === (11))){
var inst_30350 = (state_30372[(2)]);
var state_30372__$1 = state_30372;
if(cljs.core.truth_(inst_30350)){
var statearr_30395_33067 = state_30372__$1;
(statearr_30395_33067[(1)] = (12));

} else {
var statearr_30396_33068 = state_30372__$1;
(statearr_30396_33068[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30373 === (9))){
var state_30372__$1 = state_30372;
var statearr_30397_33069 = state_30372__$1;
(statearr_30397_33069[(2)] = null);

(statearr_30397_33069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30373 === (5))){
var state_30372__$1 = state_30372;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30398_33070 = state_30372__$1;
(statearr_30398_33070[(1)] = (8));

} else {
var statearr_30399_33071 = state_30372__$1;
(statearr_30399_33071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30373 === (14))){
var inst_30358 = (state_30372[(2)]);
var state_30372__$1 = state_30372;
var statearr_30400_33072 = state_30372__$1;
(statearr_30400_33072[(2)] = inst_30358);

(statearr_30400_33072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30373 === (10))){
var inst_30347 = (state_30372[(2)]);
var state_30372__$1 = state_30372;
var statearr_30401_33073 = state_30372__$1;
(statearr_30401_33073[(2)] = inst_30347);

(statearr_30401_33073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30373 === (8))){
var inst_30343 = cljs.core.async.close_BANG_(to);
var state_30372__$1 = state_30372;
var statearr_30402_33074 = state_30372__$1;
(statearr_30402_33074[(2)] = inst_30343);

(statearr_30402_33074[(1)] = (10));


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
var cljs$core$async$state_machine__29377__auto__ = null;
var cljs$core$async$state_machine__29377__auto____0 = (function (){
var statearr_30403 = [null,null,null,null,null,null,null,null];
(statearr_30403[(0)] = cljs$core$async$state_machine__29377__auto__);

(statearr_30403[(1)] = (1));

return statearr_30403;
});
var cljs$core$async$state_machine__29377__auto____1 = (function (state_30372){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_30372);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e30404){var ex__29380__auto__ = e30404;
var statearr_30405_33075 = state_30372;
(statearr_30405_33075[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_30372[(4)]))){
var statearr_30406_33076 = state_30372;
(statearr_30406_33076[(1)] = cljs.core.first((state_30372[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33078 = state_30372;
state_30372 = G__33078;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$state_machine__29377__auto__ = function(state_30372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29377__auto____1.call(this,state_30372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29377__auto____0;
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29377__auto____1;
return cljs$core$async$state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_30407 = f__29897__auto__();
(statearr_30407[(6)] = c__29895__auto___33052);

return statearr_30407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__30408){
var vec__30409 = p__30408;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30409,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30409,(1),null);
var job = vec__30409;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29895__auto___33090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_30416){
var state_val_30417 = (state_30416[(1)]);
if((state_val_30417 === (1))){
var state_30416__$1 = state_30416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30416__$1,(2),res,v);
} else {
if((state_val_30417 === (2))){
var inst_30413 = (state_30416[(2)]);
var inst_30414 = cljs.core.async.close_BANG_(res);
var state_30416__$1 = (function (){var statearr_30418 = state_30416;
(statearr_30418[(7)] = inst_30413);

return statearr_30418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30416__$1,inst_30414);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0 = (function (){
var statearr_30419 = [null,null,null,null,null,null,null,null];
(statearr_30419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__);

(statearr_30419[(1)] = (1));

return statearr_30419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1 = (function (state_30416){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_30416);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e30420){var ex__29380__auto__ = e30420;
var statearr_30421_33102 = state_30416;
(statearr_30421_33102[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_30416[(4)]))){
var statearr_30422_33103 = state_30416;
(statearr_30422_33103[(1)] = cljs.core.first((state_30416[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33105 = state_30416;
state_30416 = G__33105;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__ = function(state_30416){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1.call(this,state_30416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_30423 = f__29897__auto__();
(statearr_30423[(6)] = c__29895__auto___33090);

return statearr_30423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30424){
var vec__30425 = p__30424;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30425,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30425,(1),null);
var job = vec__30425;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___33108 = n;
var __33109 = (0);
while(true){
if((__33109 < n__5633__auto___33108)){
var G__30429_33110 = type;
var G__30429_33111__$1 = (((G__30429_33110 instanceof cljs.core.Keyword))?G__30429_33110.fqn:null);
switch (G__30429_33111__$1) {
case "compute":
var c__29895__auto___33114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33109,c__29895__auto___33114,G__30429_33110,G__30429_33111__$1,n__5633__auto___33108,jobs,results,process__$1,async){
return (function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = ((function (__33109,c__29895__auto___33114,G__30429_33110,G__30429_33111__$1,n__5633__auto___33108,jobs,results,process__$1,async){
return (function (state_30442){
var state_val_30443 = (state_30442[(1)]);
if((state_val_30443 === (1))){
var state_30442__$1 = state_30442;
var statearr_30444_33116 = state_30442__$1;
(statearr_30444_33116[(2)] = null);

(statearr_30444_33116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (2))){
var state_30442__$1 = state_30442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30442__$1,(4),jobs);
} else {
if((state_val_30443 === (3))){
var inst_30440 = (state_30442[(2)]);
var state_30442__$1 = state_30442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30442__$1,inst_30440);
} else {
if((state_val_30443 === (4))){
var inst_30432 = (state_30442[(2)]);
var inst_30433 = process__$1(inst_30432);
var state_30442__$1 = state_30442;
if(cljs.core.truth_(inst_30433)){
var statearr_30445_33120 = state_30442__$1;
(statearr_30445_33120[(1)] = (5));

} else {
var statearr_30446_33121 = state_30442__$1;
(statearr_30446_33121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (5))){
var state_30442__$1 = state_30442;
var statearr_30447_33122 = state_30442__$1;
(statearr_30447_33122[(2)] = null);

(statearr_30447_33122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (6))){
var state_30442__$1 = state_30442;
var statearr_30448_33123 = state_30442__$1;
(statearr_30448_33123[(2)] = null);

(statearr_30448_33123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30443 === (7))){
var inst_30438 = (state_30442[(2)]);
var state_30442__$1 = state_30442;
var statearr_30449_33124 = state_30442__$1;
(statearr_30449_33124[(2)] = inst_30438);

(statearr_30449_33124[(1)] = (3));


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
});})(__33109,c__29895__auto___33114,G__30429_33110,G__30429_33111__$1,n__5633__auto___33108,jobs,results,process__$1,async))
;
return ((function (__33109,switch__29376__auto__,c__29895__auto___33114,G__30429_33110,G__30429_33111__$1,n__5633__auto___33108,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0 = (function (){
var statearr_30450 = [null,null,null,null,null,null,null];
(statearr_30450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__);

(statearr_30450[(1)] = (1));

return statearr_30450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1 = (function (state_30442){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_30442);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e30451){var ex__29380__auto__ = e30451;
var statearr_30452_33128 = state_30442;
(statearr_30452_33128[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_30442[(4)]))){
var statearr_30453_33129 = state_30442;
(statearr_30453_33129[(1)] = cljs.core.first((state_30442[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33131 = state_30442;
state_30442 = G__33131;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__ = function(state_30442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1.call(this,state_30442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__;
})()
;})(__33109,switch__29376__auto__,c__29895__auto___33114,G__30429_33110,G__30429_33111__$1,n__5633__auto___33108,jobs,results,process__$1,async))
})();
var state__29898__auto__ = (function (){var statearr_30454 = f__29897__auto__();
(statearr_30454[(6)] = c__29895__auto___33114);

return statearr_30454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
});})(__33109,c__29895__auto___33114,G__30429_33110,G__30429_33111__$1,n__5633__auto___33108,jobs,results,process__$1,async))
);


break;
case "async":
var c__29895__auto___33134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33109,c__29895__auto___33134,G__30429_33110,G__30429_33111__$1,n__5633__auto___33108,jobs,results,process__$1,async){
return (function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = ((function (__33109,c__29895__auto___33134,G__30429_33110,G__30429_33111__$1,n__5633__auto___33108,jobs,results,process__$1,async){
return (function (state_30467){
var state_val_30468 = (state_30467[(1)]);
if((state_val_30468 === (1))){
var state_30467__$1 = state_30467;
var statearr_30469_33140 = state_30467__$1;
(statearr_30469_33140[(2)] = null);

(statearr_30469_33140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (2))){
var state_30467__$1 = state_30467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30467__$1,(4),jobs);
} else {
if((state_val_30468 === (3))){
var inst_30465 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30467__$1,inst_30465);
} else {
if((state_val_30468 === (4))){
var inst_30457 = (state_30467[(2)]);
var inst_30458 = async(inst_30457);
var state_30467__$1 = state_30467;
if(cljs.core.truth_(inst_30458)){
var statearr_30470_33141 = state_30467__$1;
(statearr_30470_33141[(1)] = (5));

} else {
var statearr_30471_33142 = state_30467__$1;
(statearr_30471_33142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (5))){
var state_30467__$1 = state_30467;
var statearr_30472_33146 = state_30467__$1;
(statearr_30472_33146[(2)] = null);

(statearr_30472_33146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (6))){
var state_30467__$1 = state_30467;
var statearr_30473_33147 = state_30467__$1;
(statearr_30473_33147[(2)] = null);

(statearr_30473_33147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30468 === (7))){
var inst_30463 = (state_30467[(2)]);
var state_30467__$1 = state_30467;
var statearr_30474_33149 = state_30467__$1;
(statearr_30474_33149[(2)] = inst_30463);

(statearr_30474_33149[(1)] = (3));


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
});})(__33109,c__29895__auto___33134,G__30429_33110,G__30429_33111__$1,n__5633__auto___33108,jobs,results,process__$1,async))
;
return ((function (__33109,switch__29376__auto__,c__29895__auto___33134,G__30429_33110,G__30429_33111__$1,n__5633__auto___33108,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0 = (function (){
var statearr_30475 = [null,null,null,null,null,null,null];
(statearr_30475[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__);

(statearr_30475[(1)] = (1));

return statearr_30475;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1 = (function (state_30467){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_30467);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e30476){var ex__29380__auto__ = e30476;
var statearr_30477_33153 = state_30467;
(statearr_30477_33153[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_30467[(4)]))){
var statearr_30478_33156 = state_30467;
(statearr_30478_33156[(1)] = cljs.core.first((state_30467[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33157 = state_30467;
state_30467 = G__33157;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__ = function(state_30467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1.call(this,state_30467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__;
})()
;})(__33109,switch__29376__auto__,c__29895__auto___33134,G__30429_33110,G__30429_33111__$1,n__5633__auto___33108,jobs,results,process__$1,async))
})();
var state__29898__auto__ = (function (){var statearr_30479 = f__29897__auto__();
(statearr_30479[(6)] = c__29895__auto___33134);

return statearr_30479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
});})(__33109,c__29895__auto___33134,G__30429_33110,G__30429_33111__$1,n__5633__auto___33108,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30429_33111__$1)].join('')));

}

var G__33160 = (__33109 + (1));
__33109 = G__33160;
continue;
} else {
}
break;
}

var c__29895__auto___33161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_30507){
var state_val_30508 = (state_30507[(1)]);
if((state_val_30508 === (7))){
var inst_30503 = (state_30507[(2)]);
var state_30507__$1 = state_30507;
var statearr_30520_33162 = state_30507__$1;
(statearr_30520_33162[(2)] = inst_30503);

(statearr_30520_33162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (1))){
var state_30507__$1 = state_30507;
var statearr_30522_33163 = state_30507__$1;
(statearr_30522_33163[(2)] = null);

(statearr_30522_33163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (4))){
var inst_30484 = (state_30507[(7)]);
var inst_30484__$1 = (state_30507[(2)]);
var inst_30485 = (inst_30484__$1 == null);
var state_30507__$1 = (function (){var statearr_30523 = state_30507;
(statearr_30523[(7)] = inst_30484__$1);

return statearr_30523;
})();
if(cljs.core.truth_(inst_30485)){
var statearr_30524_33166 = state_30507__$1;
(statearr_30524_33166[(1)] = (5));

} else {
var statearr_30525_33168 = state_30507__$1;
(statearr_30525_33168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (6))){
var inst_30489 = (state_30507[(8)]);
var inst_30484 = (state_30507[(7)]);
var inst_30489__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30495 = [inst_30484,inst_30489__$1];
var inst_30496 = (new cljs.core.PersistentVector(null,2,(5),inst_30493,inst_30495,null));
var state_30507__$1 = (function (){var statearr_30527 = state_30507;
(statearr_30527[(8)] = inst_30489__$1);

return statearr_30527;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30507__$1,(8),jobs,inst_30496);
} else {
if((state_val_30508 === (3))){
var inst_30505 = (state_30507[(2)]);
var state_30507__$1 = state_30507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30507__$1,inst_30505);
} else {
if((state_val_30508 === (2))){
var state_30507__$1 = state_30507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30507__$1,(4),from);
} else {
if((state_val_30508 === (9))){
var inst_30500 = (state_30507[(2)]);
var state_30507__$1 = (function (){var statearr_30528 = state_30507;
(statearr_30528[(9)] = inst_30500);

return statearr_30528;
})();
var statearr_30529_33174 = state_30507__$1;
(statearr_30529_33174[(2)] = null);

(statearr_30529_33174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (5))){
var inst_30487 = cljs.core.async.close_BANG_(jobs);
var state_30507__$1 = state_30507;
var statearr_30530_33175 = state_30507__$1;
(statearr_30530_33175[(2)] = inst_30487);

(statearr_30530_33175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30508 === (8))){
var inst_30489 = (state_30507[(8)]);
var inst_30498 = (state_30507[(2)]);
var state_30507__$1 = (function (){var statearr_30531 = state_30507;
(statearr_30531[(10)] = inst_30498);

return statearr_30531;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30507__$1,(9),results,inst_30489);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0 = (function (){
var statearr_30534 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__);

(statearr_30534[(1)] = (1));

return statearr_30534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1 = (function (state_30507){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_30507);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e30537){var ex__29380__auto__ = e30537;
var statearr_30538_33180 = state_30507;
(statearr_30538_33180[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_30507[(4)]))){
var statearr_30539_33181 = state_30507;
(statearr_30539_33181[(1)] = cljs.core.first((state_30507[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33183 = state_30507;
state_30507 = G__33183;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__ = function(state_30507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1.call(this,state_30507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_30540 = f__29897__auto__();
(statearr_30540[(6)] = c__29895__auto___33161);

return statearr_30540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));


var c__29895__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_30583){
var state_val_30584 = (state_30583[(1)]);
if((state_val_30584 === (7))){
var inst_30579 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
var statearr_30587_33184 = state_30583__$1;
(statearr_30587_33184[(2)] = inst_30579);

(statearr_30587_33184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (20))){
var state_30583__$1 = state_30583;
var statearr_30592_33185 = state_30583__$1;
(statearr_30592_33185[(2)] = null);

(statearr_30592_33185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (1))){
var state_30583__$1 = state_30583;
var statearr_30595_33186 = state_30583__$1;
(statearr_30595_33186[(2)] = null);

(statearr_30595_33186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (4))){
var inst_30544 = (state_30583[(7)]);
var inst_30544__$1 = (state_30583[(2)]);
var inst_30545 = (inst_30544__$1 == null);
var state_30583__$1 = (function (){var statearr_30597 = state_30583;
(statearr_30597[(7)] = inst_30544__$1);

return statearr_30597;
})();
if(cljs.core.truth_(inst_30545)){
var statearr_30598_33188 = state_30583__$1;
(statearr_30598_33188[(1)] = (5));

} else {
var statearr_30599_33189 = state_30583__$1;
(statearr_30599_33189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (15))){
var inst_30559 = (state_30583[(8)]);
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30583__$1,(18),to,inst_30559);
} else {
if((state_val_30584 === (21))){
var inst_30573 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
var statearr_30604_33190 = state_30583__$1;
(statearr_30604_33190[(2)] = inst_30573);

(statearr_30604_33190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (13))){
var inst_30576 = (state_30583[(2)]);
var state_30583__$1 = (function (){var statearr_30606 = state_30583;
(statearr_30606[(9)] = inst_30576);

return statearr_30606;
})();
var statearr_30607_33195 = state_30583__$1;
(statearr_30607_33195[(2)] = null);

(statearr_30607_33195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (6))){
var inst_30544 = (state_30583[(7)]);
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30583__$1,(11),inst_30544);
} else {
if((state_val_30584 === (17))){
var inst_30568 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
if(cljs.core.truth_(inst_30568)){
var statearr_30609_33196 = state_30583__$1;
(statearr_30609_33196[(1)] = (19));

} else {
var statearr_30610_33197 = state_30583__$1;
(statearr_30610_33197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (3))){
var inst_30581 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30583__$1,inst_30581);
} else {
if((state_val_30584 === (12))){
var inst_30554 = (state_30583[(10)]);
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30583__$1,(14),inst_30554);
} else {
if((state_val_30584 === (2))){
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30583__$1,(4),results);
} else {
if((state_val_30584 === (19))){
var state_30583__$1 = state_30583;
var statearr_30611_33200 = state_30583__$1;
(statearr_30611_33200[(2)] = null);

(statearr_30611_33200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (11))){
var inst_30554 = (state_30583[(2)]);
var state_30583__$1 = (function (){var statearr_30612 = state_30583;
(statearr_30612[(10)] = inst_30554);

return statearr_30612;
})();
var statearr_30613_33202 = state_30583__$1;
(statearr_30613_33202[(2)] = null);

(statearr_30613_33202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (9))){
var state_30583__$1 = state_30583;
var statearr_30614_33203 = state_30583__$1;
(statearr_30614_33203[(2)] = null);

(statearr_30614_33203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (5))){
var state_30583__$1 = state_30583;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30615_33204 = state_30583__$1;
(statearr_30615_33204[(1)] = (8));

} else {
var statearr_30616_33205 = state_30583__$1;
(statearr_30616_33205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (14))){
var inst_30562 = (state_30583[(11)]);
var inst_30559 = (state_30583[(8)]);
var inst_30559__$1 = (state_30583[(2)]);
var inst_30561 = (inst_30559__$1 == null);
var inst_30562__$1 = cljs.core.not(inst_30561);
var state_30583__$1 = (function (){var statearr_30617 = state_30583;
(statearr_30617[(11)] = inst_30562__$1);

(statearr_30617[(8)] = inst_30559__$1);

return statearr_30617;
})();
if(inst_30562__$1){
var statearr_30618_33209 = state_30583__$1;
(statearr_30618_33209[(1)] = (15));

} else {
var statearr_30619_33210 = state_30583__$1;
(statearr_30619_33210[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (16))){
var inst_30562 = (state_30583[(11)]);
var state_30583__$1 = state_30583;
var statearr_30620_33211 = state_30583__$1;
(statearr_30620_33211[(2)] = inst_30562);

(statearr_30620_33211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (10))){
var inst_30551 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
var statearr_30621_33212 = state_30583__$1;
(statearr_30621_33212[(2)] = inst_30551);

(statearr_30621_33212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (18))){
var inst_30565 = (state_30583[(2)]);
var state_30583__$1 = state_30583;
var statearr_30622_33213 = state_30583__$1;
(statearr_30622_33213[(2)] = inst_30565);

(statearr_30622_33213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30584 === (8))){
var inst_30548 = cljs.core.async.close_BANG_(to);
var state_30583__$1 = state_30583;
var statearr_30623_33214 = state_30583__$1;
(statearr_30623_33214[(2)] = inst_30548);

(statearr_30623_33214[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0 = (function (){
var statearr_30624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__);

(statearr_30624[(1)] = (1));

return statearr_30624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1 = (function (state_30583){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_30583);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e30625){var ex__29380__auto__ = e30625;
var statearr_30626_33220 = state_30583;
(statearr_30626_33220[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_30583[(4)]))){
var statearr_30627_33221 = state_30583;
(statearr_30627_33221[(1)] = cljs.core.first((state_30583[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33222 = state_30583;
state_30583 = G__33222;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__ = function(state_30583){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1.call(this,state_30583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_30628 = f__29897__auto__();
(statearr_30628[(6)] = c__29895__auto__);

return statearr_30628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));

return c__29895__auto__;
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
var G__30630 = arguments.length;
switch (G__30630) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__30637 = arguments.length;
switch (G__30637) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__30640 = arguments.length;
switch (G__30640) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29895__auto___33236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_30670){
var state_val_30671 = (state_30670[(1)]);
if((state_val_30671 === (7))){
var inst_30666 = (state_30670[(2)]);
var state_30670__$1 = state_30670;
var statearr_30674_33240 = state_30670__$1;
(statearr_30674_33240[(2)] = inst_30666);

(statearr_30674_33240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (1))){
var state_30670__$1 = state_30670;
var statearr_30675_33241 = state_30670__$1;
(statearr_30675_33241[(2)] = null);

(statearr_30675_33241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (4))){
var inst_30647 = (state_30670[(7)]);
var inst_30647__$1 = (state_30670[(2)]);
var inst_30648 = (inst_30647__$1 == null);
var state_30670__$1 = (function (){var statearr_30676 = state_30670;
(statearr_30676[(7)] = inst_30647__$1);

return statearr_30676;
})();
if(cljs.core.truth_(inst_30648)){
var statearr_30677_33245 = state_30670__$1;
(statearr_30677_33245[(1)] = (5));

} else {
var statearr_30678_33246 = state_30670__$1;
(statearr_30678_33246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (13))){
var state_30670__$1 = state_30670;
var statearr_30679_33247 = state_30670__$1;
(statearr_30679_33247[(2)] = null);

(statearr_30679_33247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (6))){
var inst_30647 = (state_30670[(7)]);
var inst_30653 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30647) : p.call(null, inst_30647));
var state_30670__$1 = state_30670;
if(cljs.core.truth_(inst_30653)){
var statearr_30680_33248 = state_30670__$1;
(statearr_30680_33248[(1)] = (9));

} else {
var statearr_30681_33249 = state_30670__$1;
(statearr_30681_33249[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (3))){
var inst_30668 = (state_30670[(2)]);
var state_30670__$1 = state_30670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30670__$1,inst_30668);
} else {
if((state_val_30671 === (12))){
var state_30670__$1 = state_30670;
var statearr_30682_33253 = state_30670__$1;
(statearr_30682_33253[(2)] = null);

(statearr_30682_33253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (2))){
var state_30670__$1 = state_30670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30670__$1,(4),ch);
} else {
if((state_val_30671 === (11))){
var inst_30647 = (state_30670[(7)]);
var inst_30657 = (state_30670[(2)]);
var state_30670__$1 = state_30670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30670__$1,(8),inst_30657,inst_30647);
} else {
if((state_val_30671 === (9))){
var state_30670__$1 = state_30670;
var statearr_30683_33255 = state_30670__$1;
(statearr_30683_33255[(2)] = tc);

(statearr_30683_33255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (5))){
var inst_30650 = cljs.core.async.close_BANG_(tc);
var inst_30651 = cljs.core.async.close_BANG_(fc);
var state_30670__$1 = (function (){var statearr_30684 = state_30670;
(statearr_30684[(8)] = inst_30650);

return statearr_30684;
})();
var statearr_30685_33261 = state_30670__$1;
(statearr_30685_33261[(2)] = inst_30651);

(statearr_30685_33261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (14))){
var inst_30664 = (state_30670[(2)]);
var state_30670__$1 = state_30670;
var statearr_30686_33266 = state_30670__$1;
(statearr_30686_33266[(2)] = inst_30664);

(statearr_30686_33266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (10))){
var state_30670__$1 = state_30670;
var statearr_30687_33276 = state_30670__$1;
(statearr_30687_33276[(2)] = fc);

(statearr_30687_33276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30671 === (8))){
var inst_30659 = (state_30670[(2)]);
var state_30670__$1 = state_30670;
if(cljs.core.truth_(inst_30659)){
var statearr_30688_33277 = state_30670__$1;
(statearr_30688_33277[(1)] = (12));

} else {
var statearr_30689_33278 = state_30670__$1;
(statearr_30689_33278[(1)] = (13));

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
var cljs$core$async$state_machine__29377__auto__ = null;
var cljs$core$async$state_machine__29377__auto____0 = (function (){
var statearr_30690 = [null,null,null,null,null,null,null,null,null];
(statearr_30690[(0)] = cljs$core$async$state_machine__29377__auto__);

(statearr_30690[(1)] = (1));

return statearr_30690;
});
var cljs$core$async$state_machine__29377__auto____1 = (function (state_30670){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_30670);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e30691){var ex__29380__auto__ = e30691;
var statearr_30692_33279 = state_30670;
(statearr_30692_33279[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_30670[(4)]))){
var statearr_30693_33280 = state_30670;
(statearr_30693_33280[(1)] = cljs.core.first((state_30670[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33281 = state_30670;
state_30670 = G__33281;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$state_machine__29377__auto__ = function(state_30670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29377__auto____1.call(this,state_30670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29377__auto____0;
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29377__auto____1;
return cljs$core$async$state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_30694 = f__29897__auto__();
(statearr_30694[(6)] = c__29895__auto___33236);

return statearr_30694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
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
var c__29895__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_30727){
var state_val_30728 = (state_30727[(1)]);
if((state_val_30728 === (7))){
var inst_30720 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30731_33282 = state_30727__$1;
(statearr_30731_33282[(2)] = inst_30720);

(statearr_30731_33282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (1))){
var inst_30698 = init;
var inst_30700 = inst_30698;
var state_30727__$1 = (function (){var statearr_30735 = state_30727;
(statearr_30735[(7)] = inst_30700);

return statearr_30735;
})();
var statearr_30736_33284 = state_30727__$1;
(statearr_30736_33284[(2)] = null);

(statearr_30736_33284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (4))){
var inst_30705 = (state_30727[(8)]);
var inst_30705__$1 = (state_30727[(2)]);
var inst_30707 = (inst_30705__$1 == null);
var state_30727__$1 = (function (){var statearr_30738 = state_30727;
(statearr_30738[(8)] = inst_30705__$1);

return statearr_30738;
})();
if(cljs.core.truth_(inst_30707)){
var statearr_30739_33286 = state_30727__$1;
(statearr_30739_33286[(1)] = (5));

} else {
var statearr_30741_33287 = state_30727__$1;
(statearr_30741_33287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (6))){
var inst_30700 = (state_30727[(7)]);
var inst_30710 = (state_30727[(9)]);
var inst_30705 = (state_30727[(8)]);
var inst_30710__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30700,inst_30705) : f.call(null, inst_30700,inst_30705));
var inst_30711 = cljs.core.reduced_QMARK_(inst_30710__$1);
var state_30727__$1 = (function (){var statearr_30745 = state_30727;
(statearr_30745[(9)] = inst_30710__$1);

return statearr_30745;
})();
if(inst_30711){
var statearr_30746_33288 = state_30727__$1;
(statearr_30746_33288[(1)] = (8));

} else {
var statearr_30748_33289 = state_30727__$1;
(statearr_30748_33289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (3))){
var inst_30722 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30727__$1,inst_30722);
} else {
if((state_val_30728 === (2))){
var state_30727__$1 = state_30727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30727__$1,(4),ch);
} else {
if((state_val_30728 === (9))){
var inst_30710 = (state_30727[(9)]);
var inst_30700 = inst_30710;
var state_30727__$1 = (function (){var statearr_30756 = state_30727;
(statearr_30756[(7)] = inst_30700);

return statearr_30756;
})();
var statearr_30757_33290 = state_30727__$1;
(statearr_30757_33290[(2)] = null);

(statearr_30757_33290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (5))){
var inst_30700 = (state_30727[(7)]);
var state_30727__$1 = state_30727;
var statearr_30758_33291 = state_30727__$1;
(statearr_30758_33291[(2)] = inst_30700);

(statearr_30758_33291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (10))){
var inst_30718 = (state_30727[(2)]);
var state_30727__$1 = state_30727;
var statearr_30763_33295 = state_30727__$1;
(statearr_30763_33295[(2)] = inst_30718);

(statearr_30763_33295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30728 === (8))){
var inst_30710 = (state_30727[(9)]);
var inst_30714 = cljs.core.deref(inst_30710);
var state_30727__$1 = state_30727;
var statearr_30767_33298 = state_30727__$1;
(statearr_30767_33298[(2)] = inst_30714);

(statearr_30767_33298[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29377__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29377__auto____0 = (function (){
var statearr_30771 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30771[(0)] = cljs$core$async$reduce_$_state_machine__29377__auto__);

(statearr_30771[(1)] = (1));

return statearr_30771;
});
var cljs$core$async$reduce_$_state_machine__29377__auto____1 = (function (state_30727){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_30727);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e30772){var ex__29380__auto__ = e30772;
var statearr_30773_33301 = state_30727;
(statearr_30773_33301[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_30727[(4)]))){
var statearr_30774_33302 = state_30727;
(statearr_30774_33302[(1)] = cljs.core.first((state_30727[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33303 = state_30727;
state_30727 = G__33303;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29377__auto__ = function(state_30727){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29377__auto____1.call(this,state_30727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29377__auto____0;
cljs$core$async$reduce_$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29377__auto____1;
return cljs$core$async$reduce_$_state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_30776 = f__29897__auto__();
(statearr_30776[(6)] = c__29895__auto__);

return statearr_30776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));

return c__29895__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__29895__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_30791){
var state_val_30792 = (state_30791[(1)]);
if((state_val_30792 === (1))){
var inst_30785 = cljs.core.async.reduce(f__$1,init,ch);
var state_30791__$1 = state_30791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30791__$1,(2),inst_30785);
} else {
if((state_val_30792 === (2))){
var inst_30787 = (state_30791[(2)]);
var inst_30789 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30787) : f__$1.call(null, inst_30787));
var state_30791__$1 = state_30791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30791__$1,inst_30789);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29377__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29377__auto____0 = (function (){
var statearr_30797 = [null,null,null,null,null,null,null];
(statearr_30797[(0)] = cljs$core$async$transduce_$_state_machine__29377__auto__);

(statearr_30797[(1)] = (1));

return statearr_30797;
});
var cljs$core$async$transduce_$_state_machine__29377__auto____1 = (function (state_30791){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_30791);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e30798){var ex__29380__auto__ = e30798;
var statearr_30800_33304 = state_30791;
(statearr_30800_33304[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_30791[(4)]))){
var statearr_30801_33305 = state_30791;
(statearr_30801_33305[(1)] = cljs.core.first((state_30791[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33306 = state_30791;
state_30791 = G__33306;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29377__auto__ = function(state_30791){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29377__auto____1.call(this,state_30791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29377__auto____0;
cljs$core$async$transduce_$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29377__auto____1;
return cljs$core$async$transduce_$_state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_30803 = f__29897__auto__();
(statearr_30803[(6)] = c__29895__auto__);

return statearr_30803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));

return c__29895__auto__;
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
var G__30811 = arguments.length;
switch (G__30811) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29895__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_30847){
var state_val_30848 = (state_30847[(1)]);
if((state_val_30848 === (7))){
var inst_30824 = (state_30847[(2)]);
var state_30847__$1 = state_30847;
var statearr_30851_33311 = state_30847__$1;
(statearr_30851_33311[(2)] = inst_30824);

(statearr_30851_33311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30848 === (1))){
var inst_30818 = cljs.core.seq(coll);
var inst_30819 = inst_30818;
var state_30847__$1 = (function (){var statearr_30852 = state_30847;
(statearr_30852[(7)] = inst_30819);

return statearr_30852;
})();
var statearr_30853_33312 = state_30847__$1;
(statearr_30853_33312[(2)] = null);

(statearr_30853_33312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30848 === (4))){
var inst_30819 = (state_30847[(7)]);
var inst_30822 = cljs.core.first(inst_30819);
var state_30847__$1 = state_30847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30847__$1,(7),ch,inst_30822);
} else {
if((state_val_30848 === (13))){
var inst_30839 = (state_30847[(2)]);
var state_30847__$1 = state_30847;
var statearr_30854_33313 = state_30847__$1;
(statearr_30854_33313[(2)] = inst_30839);

(statearr_30854_33313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30848 === (6))){
var inst_30828 = (state_30847[(2)]);
var state_30847__$1 = state_30847;
if(cljs.core.truth_(inst_30828)){
var statearr_30855_33314 = state_30847__$1;
(statearr_30855_33314[(1)] = (8));

} else {
var statearr_30856_33315 = state_30847__$1;
(statearr_30856_33315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30848 === (3))){
var inst_30843 = (state_30847[(2)]);
var state_30847__$1 = state_30847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30847__$1,inst_30843);
} else {
if((state_val_30848 === (12))){
var state_30847__$1 = state_30847;
var statearr_30857_33316 = state_30847__$1;
(statearr_30857_33316[(2)] = null);

(statearr_30857_33316[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30848 === (2))){
var inst_30819 = (state_30847[(7)]);
var state_30847__$1 = state_30847;
if(cljs.core.truth_(inst_30819)){
var statearr_30858_33317 = state_30847__$1;
(statearr_30858_33317[(1)] = (4));

} else {
var statearr_30859_33318 = state_30847__$1;
(statearr_30859_33318[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30848 === (11))){
var inst_30836 = cljs.core.async.close_BANG_(ch);
var state_30847__$1 = state_30847;
var statearr_30860_33320 = state_30847__$1;
(statearr_30860_33320[(2)] = inst_30836);

(statearr_30860_33320[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30848 === (9))){
var state_30847__$1 = state_30847;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30861_33322 = state_30847__$1;
(statearr_30861_33322[(1)] = (11));

} else {
var statearr_30862_33323 = state_30847__$1;
(statearr_30862_33323[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30848 === (5))){
var inst_30819 = (state_30847[(7)]);
var state_30847__$1 = state_30847;
var statearr_30863_33328 = state_30847__$1;
(statearr_30863_33328[(2)] = inst_30819);

(statearr_30863_33328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30848 === (10))){
var inst_30841 = (state_30847[(2)]);
var state_30847__$1 = state_30847;
var statearr_30864_33333 = state_30847__$1;
(statearr_30864_33333[(2)] = inst_30841);

(statearr_30864_33333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30848 === (8))){
var inst_30819 = (state_30847[(7)]);
var inst_30830 = cljs.core.next(inst_30819);
var inst_30819__$1 = inst_30830;
var state_30847__$1 = (function (){var statearr_30865 = state_30847;
(statearr_30865[(7)] = inst_30819__$1);

return statearr_30865;
})();
var statearr_30866_33338 = state_30847__$1;
(statearr_30866_33338[(2)] = null);

(statearr_30866_33338[(1)] = (2));


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
var cljs$core$async$state_machine__29377__auto__ = null;
var cljs$core$async$state_machine__29377__auto____0 = (function (){
var statearr_30867 = [null,null,null,null,null,null,null,null];
(statearr_30867[(0)] = cljs$core$async$state_machine__29377__auto__);

(statearr_30867[(1)] = (1));

return statearr_30867;
});
var cljs$core$async$state_machine__29377__auto____1 = (function (state_30847){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_30847);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e30868){var ex__29380__auto__ = e30868;
var statearr_30869_33339 = state_30847;
(statearr_30869_33339[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_30847[(4)]))){
var statearr_30870_33341 = state_30847;
(statearr_30870_33341[(1)] = cljs.core.first((state_30847[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33342 = state_30847;
state_30847 = G__33342;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$state_machine__29377__auto__ = function(state_30847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29377__auto____1.call(this,state_30847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29377__auto____0;
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29377__auto____1;
return cljs$core$async$state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_30871 = f__29897__auto__();
(statearr_30871[(6)] = c__29895__auto__);

return statearr_30871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));

return c__29895__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30873 = arguments.length;
switch (G__30873) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33345 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null, _));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33345(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33346 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33346(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33348 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null, m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33348(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33352 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null, m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33352(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30898 = (function (ch,cs,meta30899){
this.ch = ch;
this.cs = cs;
this.meta30899 = meta30899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30900,meta30899__$1){
var self__ = this;
var _30900__$1 = this;
return (new cljs.core.async.t_cljs$core$async30898(self__.ch,self__.cs,meta30899__$1));
}));

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30900){
var self__ = this;
var _30900__$1 = this;
return self__.meta30899;
}));

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30898.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30899","meta30899",-663134514,null)], null);
}));

(cljs.core.async.t_cljs$core$async30898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30898");

(cljs.core.async.t_cljs$core$async30898.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async30898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30898.
 */
cljs.core.async.__GT_t_cljs$core$async30898 = (function cljs$core$async$__GT_t_cljs$core$async30898(ch,cs,meta30899){
return (new cljs.core.async.t_cljs$core$async30898(ch,cs,meta30899));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async30898(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29895__auto___33381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_31109){
var state_val_31110 = (state_31109[(1)]);
if((state_val_31110 === (7))){
var inst_31092 = (state_31109[(2)]);
var state_31109__$1 = state_31109;
var statearr_31127_33392 = state_31109__$1;
(statearr_31127_33392[(2)] = inst_31092);

(statearr_31127_33392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (20))){
var inst_30969 = (state_31109[(7)]);
var inst_30990 = cljs.core.first(inst_30969);
var inst_30991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30990,(0),null);
var inst_30992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30990,(1),null);
var state_31109__$1 = (function (){var statearr_31140 = state_31109;
(statearr_31140[(8)] = inst_30991);

return statearr_31140;
})();
if(cljs.core.truth_(inst_30992)){
var statearr_31141_33406 = state_31109__$1;
(statearr_31141_33406[(1)] = (22));

} else {
var statearr_31143_33413 = state_31109__$1;
(statearr_31143_33413[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (27))){
var inst_31033 = (state_31109[(9)]);
var inst_30934 = (state_31109[(10)]);
var inst_31026 = (state_31109[(11)]);
var inst_31028 = (state_31109[(12)]);
var inst_31033__$1 = cljs.core._nth(inst_31026,inst_31028);
var inst_31034 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31033__$1,inst_30934,done);
var state_31109__$1 = (function (){var statearr_31144 = state_31109;
(statearr_31144[(9)] = inst_31033__$1);

return statearr_31144;
})();
if(cljs.core.truth_(inst_31034)){
var statearr_31146_33417 = state_31109__$1;
(statearr_31146_33417[(1)] = (30));

} else {
var statearr_31147_33420 = state_31109__$1;
(statearr_31147_33420[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (1))){
var state_31109__$1 = state_31109;
var statearr_31148_33421 = state_31109__$1;
(statearr_31148_33421[(2)] = null);

(statearr_31148_33421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (24))){
var inst_30969 = (state_31109[(7)]);
var inst_31000 = (state_31109[(2)]);
var inst_31001 = cljs.core.next(inst_30969);
var inst_30943 = inst_31001;
var inst_30944 = null;
var inst_30945 = (0);
var inst_30946 = (0);
var state_31109__$1 = (function (){var statearr_31154 = state_31109;
(statearr_31154[(13)] = inst_30943);

(statearr_31154[(14)] = inst_30944);

(statearr_31154[(15)] = inst_31000);

(statearr_31154[(16)] = inst_30945);

(statearr_31154[(17)] = inst_30946);

return statearr_31154;
})();
var statearr_31156_33422 = state_31109__$1;
(statearr_31156_33422[(2)] = null);

(statearr_31156_33422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (39))){
var state_31109__$1 = state_31109;
var statearr_31163_33433 = state_31109__$1;
(statearr_31163_33433[(2)] = null);

(statearr_31163_33433[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (4))){
var inst_30934 = (state_31109[(10)]);
var inst_30934__$1 = (state_31109[(2)]);
var inst_30935 = (inst_30934__$1 == null);
var state_31109__$1 = (function (){var statearr_31164 = state_31109;
(statearr_31164[(10)] = inst_30934__$1);

return statearr_31164;
})();
if(cljs.core.truth_(inst_30935)){
var statearr_31165_33443 = state_31109__$1;
(statearr_31165_33443[(1)] = (5));

} else {
var statearr_31166_33444 = state_31109__$1;
(statearr_31166_33444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (15))){
var inst_30943 = (state_31109[(13)]);
var inst_30944 = (state_31109[(14)]);
var inst_30945 = (state_31109[(16)]);
var inst_30946 = (state_31109[(17)]);
var inst_30965 = (state_31109[(2)]);
var inst_30966 = (inst_30946 + (1));
var tmp31159 = inst_30943;
var tmp31161 = inst_30944;
var tmp31162 = inst_30945;
var inst_30943__$1 = tmp31159;
var inst_30944__$1 = tmp31161;
var inst_30945__$1 = tmp31162;
var inst_30946__$1 = inst_30966;
var state_31109__$1 = (function (){var statearr_31168 = state_31109;
(statearr_31168[(13)] = inst_30943__$1);

(statearr_31168[(18)] = inst_30965);

(statearr_31168[(14)] = inst_30944__$1);

(statearr_31168[(16)] = inst_30945__$1);

(statearr_31168[(17)] = inst_30946__$1);

return statearr_31168;
})();
var statearr_31170_33451 = state_31109__$1;
(statearr_31170_33451[(2)] = null);

(statearr_31170_33451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (21))){
var inst_31004 = (state_31109[(2)]);
var state_31109__$1 = state_31109;
var statearr_31178_33452 = state_31109__$1;
(statearr_31178_33452[(2)] = inst_31004);

(statearr_31178_33452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (31))){
var inst_31033 = (state_31109[(9)]);
var inst_31037 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_31033);
var state_31109__$1 = state_31109;
var statearr_31180_33453 = state_31109__$1;
(statearr_31180_33453[(2)] = inst_31037);

(statearr_31180_33453[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (32))){
var inst_31026 = (state_31109[(11)]);
var inst_31025 = (state_31109[(19)]);
var inst_31028 = (state_31109[(12)]);
var inst_31027 = (state_31109[(20)]);
var inst_31039 = (state_31109[(2)]);
var inst_31042 = (inst_31028 + (1));
var tmp31174 = inst_31026;
var tmp31175 = inst_31025;
var tmp31176 = inst_31027;
var inst_31025__$1 = tmp31175;
var inst_31026__$1 = tmp31174;
var inst_31027__$1 = tmp31176;
var inst_31028__$1 = inst_31042;
var state_31109__$1 = (function (){var statearr_31185 = state_31109;
(statearr_31185[(21)] = inst_31039);

(statearr_31185[(11)] = inst_31026__$1);

(statearr_31185[(19)] = inst_31025__$1);

(statearr_31185[(12)] = inst_31028__$1);

(statearr_31185[(20)] = inst_31027__$1);

return statearr_31185;
})();
var statearr_31189_33460 = state_31109__$1;
(statearr_31189_33460[(2)] = null);

(statearr_31189_33460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (40))){
var inst_31056 = (state_31109[(22)]);
var inst_31061 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_31056);
var state_31109__$1 = state_31109;
var statearr_31190_33463 = state_31109__$1;
(statearr_31190_33463[(2)] = inst_31061);

(statearr_31190_33463[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (33))){
var inst_31046 = (state_31109[(23)]);
var inst_31049 = cljs.core.chunked_seq_QMARK_(inst_31046);
var state_31109__$1 = state_31109;
if(inst_31049){
var statearr_31194_33464 = state_31109__$1;
(statearr_31194_33464[(1)] = (36));

} else {
var statearr_31195_33465 = state_31109__$1;
(statearr_31195_33465[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (13))){
var inst_30959 = (state_31109[(24)]);
var inst_30962 = cljs.core.async.close_BANG_(inst_30959);
var state_31109__$1 = state_31109;
var statearr_31200_33466 = state_31109__$1;
(statearr_31200_33466[(2)] = inst_30962);

(statearr_31200_33466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (22))){
var inst_30991 = (state_31109[(8)]);
var inst_30997 = cljs.core.async.close_BANG_(inst_30991);
var state_31109__$1 = state_31109;
var statearr_31201_33473 = state_31109__$1;
(statearr_31201_33473[(2)] = inst_30997);

(statearr_31201_33473[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (36))){
var inst_31046 = (state_31109[(23)]);
var inst_31051 = cljs.core.chunk_first(inst_31046);
var inst_31052 = cljs.core.chunk_rest(inst_31046);
var inst_31053 = cljs.core.count(inst_31051);
var inst_31025 = inst_31052;
var inst_31026 = inst_31051;
var inst_31027 = inst_31053;
var inst_31028 = (0);
var state_31109__$1 = (function (){var statearr_31205 = state_31109;
(statearr_31205[(11)] = inst_31026);

(statearr_31205[(19)] = inst_31025);

(statearr_31205[(12)] = inst_31028);

(statearr_31205[(20)] = inst_31027);

return statearr_31205;
})();
var statearr_31206_33477 = state_31109__$1;
(statearr_31206_33477[(2)] = null);

(statearr_31206_33477[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (41))){
var inst_31046 = (state_31109[(23)]);
var inst_31063 = (state_31109[(2)]);
var inst_31071 = cljs.core.next(inst_31046);
var inst_31025 = inst_31071;
var inst_31026 = null;
var inst_31027 = (0);
var inst_31028 = (0);
var state_31109__$1 = (function (){var statearr_31212 = state_31109;
(statearr_31212[(11)] = inst_31026);

(statearr_31212[(19)] = inst_31025);

(statearr_31212[(12)] = inst_31028);

(statearr_31212[(25)] = inst_31063);

(statearr_31212[(20)] = inst_31027);

return statearr_31212;
})();
var statearr_31214_33479 = state_31109__$1;
(statearr_31214_33479[(2)] = null);

(statearr_31214_33479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (43))){
var state_31109__$1 = state_31109;
var statearr_31219_33480 = state_31109__$1;
(statearr_31219_33480[(2)] = null);

(statearr_31219_33480[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (29))){
var inst_31079 = (state_31109[(2)]);
var state_31109__$1 = state_31109;
var statearr_31222_33481 = state_31109__$1;
(statearr_31222_33481[(2)] = inst_31079);

(statearr_31222_33481[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (44))){
var inst_31089 = (state_31109[(2)]);
var state_31109__$1 = (function (){var statearr_31225 = state_31109;
(statearr_31225[(26)] = inst_31089);

return statearr_31225;
})();
var statearr_31232_33488 = state_31109__$1;
(statearr_31232_33488[(2)] = null);

(statearr_31232_33488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (6))){
var inst_31017 = (state_31109[(27)]);
var inst_31016 = cljs.core.deref(cs);
var inst_31017__$1 = cljs.core.keys(inst_31016);
var inst_31018 = cljs.core.count(inst_31017__$1);
var inst_31019 = cljs.core.reset_BANG_(dctr,inst_31018);
var inst_31024 = cljs.core.seq(inst_31017__$1);
var inst_31025 = inst_31024;
var inst_31026 = null;
var inst_31027 = (0);
var inst_31028 = (0);
var state_31109__$1 = (function (){var statearr_31243 = state_31109;
(statearr_31243[(27)] = inst_31017__$1);

(statearr_31243[(11)] = inst_31026);

(statearr_31243[(19)] = inst_31025);

(statearr_31243[(12)] = inst_31028);

(statearr_31243[(20)] = inst_31027);

(statearr_31243[(28)] = inst_31019);

return statearr_31243;
})();
var statearr_31245_33500 = state_31109__$1;
(statearr_31245_33500[(2)] = null);

(statearr_31245_33500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (28))){
var inst_31046 = (state_31109[(23)]);
var inst_31025 = (state_31109[(19)]);
var inst_31046__$1 = cljs.core.seq(inst_31025);
var state_31109__$1 = (function (){var statearr_31250 = state_31109;
(statearr_31250[(23)] = inst_31046__$1);

return statearr_31250;
})();
if(inst_31046__$1){
var statearr_31252_33501 = state_31109__$1;
(statearr_31252_33501[(1)] = (33));

} else {
var statearr_31253_33502 = state_31109__$1;
(statearr_31253_33502[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (25))){
var inst_31028 = (state_31109[(12)]);
var inst_31027 = (state_31109[(20)]);
var inst_31030 = (inst_31028 < inst_31027);
var inst_31031 = inst_31030;
var state_31109__$1 = state_31109;
if(cljs.core.truth_(inst_31031)){
var statearr_31264_33503 = state_31109__$1;
(statearr_31264_33503[(1)] = (27));

} else {
var statearr_31266_33504 = state_31109__$1;
(statearr_31266_33504[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (34))){
var state_31109__$1 = state_31109;
var statearr_31267_33505 = state_31109__$1;
(statearr_31267_33505[(2)] = null);

(statearr_31267_33505[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (17))){
var state_31109__$1 = state_31109;
var statearr_31274_33508 = state_31109__$1;
(statearr_31274_33508[(2)] = null);

(statearr_31274_33508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (3))){
var inst_31096 = (state_31109[(2)]);
var state_31109__$1 = state_31109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31109__$1,inst_31096);
} else {
if((state_val_31110 === (12))){
var inst_31009 = (state_31109[(2)]);
var state_31109__$1 = state_31109;
var statearr_31276_33510 = state_31109__$1;
(statearr_31276_33510[(2)] = inst_31009);

(statearr_31276_33510[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (2))){
var state_31109__$1 = state_31109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31109__$1,(4),ch);
} else {
if((state_val_31110 === (23))){
var state_31109__$1 = state_31109;
var statearr_31285_33513 = state_31109__$1;
(statearr_31285_33513[(2)] = null);

(statearr_31285_33513[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (35))){
var inst_31077 = (state_31109[(2)]);
var state_31109__$1 = state_31109;
var statearr_31287_33514 = state_31109__$1;
(statearr_31287_33514[(2)] = inst_31077);

(statearr_31287_33514[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (19))){
var inst_30969 = (state_31109[(7)]);
var inst_30977 = cljs.core.chunk_first(inst_30969);
var inst_30980 = cljs.core.chunk_rest(inst_30969);
var inst_30982 = cljs.core.count(inst_30977);
var inst_30943 = inst_30980;
var inst_30944 = inst_30977;
var inst_30945 = inst_30982;
var inst_30946 = (0);
var state_31109__$1 = (function (){var statearr_31294 = state_31109;
(statearr_31294[(13)] = inst_30943);

(statearr_31294[(14)] = inst_30944);

(statearr_31294[(16)] = inst_30945);

(statearr_31294[(17)] = inst_30946);

return statearr_31294;
})();
var statearr_31295_33521 = state_31109__$1;
(statearr_31295_33521[(2)] = null);

(statearr_31295_33521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (11))){
var inst_30943 = (state_31109[(13)]);
var inst_30969 = (state_31109[(7)]);
var inst_30969__$1 = cljs.core.seq(inst_30943);
var state_31109__$1 = (function (){var statearr_31297 = state_31109;
(statearr_31297[(7)] = inst_30969__$1);

return statearr_31297;
})();
if(inst_30969__$1){
var statearr_31298_33528 = state_31109__$1;
(statearr_31298_33528[(1)] = (16));

} else {
var statearr_31301_33529 = state_31109__$1;
(statearr_31301_33529[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (9))){
var inst_31011 = (state_31109[(2)]);
var state_31109__$1 = state_31109;
var statearr_31305_33530 = state_31109__$1;
(statearr_31305_33530[(2)] = inst_31011);

(statearr_31305_33530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (5))){
var inst_30941 = cljs.core.deref(cs);
var inst_30942 = cljs.core.seq(inst_30941);
var inst_30943 = inst_30942;
var inst_30944 = null;
var inst_30945 = (0);
var inst_30946 = (0);
var state_31109__$1 = (function (){var statearr_31306 = state_31109;
(statearr_31306[(13)] = inst_30943);

(statearr_31306[(14)] = inst_30944);

(statearr_31306[(16)] = inst_30945);

(statearr_31306[(17)] = inst_30946);

return statearr_31306;
})();
var statearr_31308_33534 = state_31109__$1;
(statearr_31308_33534[(2)] = null);

(statearr_31308_33534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (14))){
var state_31109__$1 = state_31109;
var statearr_31311_33535 = state_31109__$1;
(statearr_31311_33535[(2)] = null);

(statearr_31311_33535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (45))){
var inst_31086 = (state_31109[(2)]);
var state_31109__$1 = state_31109;
var statearr_31314_33537 = state_31109__$1;
(statearr_31314_33537[(2)] = inst_31086);

(statearr_31314_33537[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (26))){
var inst_31017 = (state_31109[(27)]);
var inst_31081 = (state_31109[(2)]);
var inst_31083 = cljs.core.seq(inst_31017);
var state_31109__$1 = (function (){var statearr_31317 = state_31109;
(statearr_31317[(29)] = inst_31081);

return statearr_31317;
})();
if(inst_31083){
var statearr_31320_33539 = state_31109__$1;
(statearr_31320_33539[(1)] = (42));

} else {
var statearr_31322_33541 = state_31109__$1;
(statearr_31322_33541[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (16))){
var inst_30969 = (state_31109[(7)]);
var inst_30974 = cljs.core.chunked_seq_QMARK_(inst_30969);
var state_31109__$1 = state_31109;
if(inst_30974){
var statearr_31323_33543 = state_31109__$1;
(statearr_31323_33543[(1)] = (19));

} else {
var statearr_31325_33544 = state_31109__$1;
(statearr_31325_33544[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (38))){
var inst_31074 = (state_31109[(2)]);
var state_31109__$1 = state_31109;
var statearr_31327_33547 = state_31109__$1;
(statearr_31327_33547[(2)] = inst_31074);

(statearr_31327_33547[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (30))){
var state_31109__$1 = state_31109;
var statearr_31332_33548 = state_31109__$1;
(statearr_31332_33548[(2)] = null);

(statearr_31332_33548[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (10))){
var inst_30944 = (state_31109[(14)]);
var inst_30946 = (state_31109[(17)]);
var inst_30956 = cljs.core._nth(inst_30944,inst_30946);
var inst_30959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30956,(0),null);
var inst_30960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30956,(1),null);
var state_31109__$1 = (function (){var statearr_31334 = state_31109;
(statearr_31334[(24)] = inst_30959);

return statearr_31334;
})();
if(cljs.core.truth_(inst_30960)){
var statearr_31335_33552 = state_31109__$1;
(statearr_31335_33552[(1)] = (13));

} else {
var statearr_31336_33553 = state_31109__$1;
(statearr_31336_33553[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (18))){
var inst_31007 = (state_31109[(2)]);
var state_31109__$1 = state_31109;
var statearr_31338_33556 = state_31109__$1;
(statearr_31338_33556[(2)] = inst_31007);

(statearr_31338_33556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (42))){
var state_31109__$1 = state_31109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31109__$1,(45),dchan);
} else {
if((state_val_31110 === (37))){
var inst_31046 = (state_31109[(23)]);
var inst_30934 = (state_31109[(10)]);
var inst_31056 = (state_31109[(22)]);
var inst_31056__$1 = cljs.core.first(inst_31046);
var inst_31058 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31056__$1,inst_30934,done);
var state_31109__$1 = (function (){var statearr_31344 = state_31109;
(statearr_31344[(22)] = inst_31056__$1);

return statearr_31344;
})();
if(cljs.core.truth_(inst_31058)){
var statearr_31346_33557 = state_31109__$1;
(statearr_31346_33557[(1)] = (39));

} else {
var statearr_31347_33558 = state_31109__$1;
(statearr_31347_33558[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31110 === (8))){
var inst_30945 = (state_31109[(16)]);
var inst_30946 = (state_31109[(17)]);
var inst_30948 = (inst_30946 < inst_30945);
var inst_30949 = inst_30948;
var state_31109__$1 = state_31109;
if(cljs.core.truth_(inst_30949)){
var statearr_31348_33563 = state_31109__$1;
(statearr_31348_33563[(1)] = (10));

} else {
var statearr_31349_33564 = state_31109__$1;
(statearr_31349_33564[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29377__auto__ = null;
var cljs$core$async$mult_$_state_machine__29377__auto____0 = (function (){
var statearr_31350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31350[(0)] = cljs$core$async$mult_$_state_machine__29377__auto__);

(statearr_31350[(1)] = (1));

return statearr_31350;
});
var cljs$core$async$mult_$_state_machine__29377__auto____1 = (function (state_31109){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_31109);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e31351){var ex__29380__auto__ = e31351;
var statearr_31353_33566 = state_31109;
(statearr_31353_33566[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_31109[(4)]))){
var statearr_31354_33567 = state_31109;
(statearr_31354_33567[(1)] = cljs.core.first((state_31109[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33568 = state_31109;
state_31109 = G__33568;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29377__auto__ = function(state_31109){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29377__auto____1.call(this,state_31109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29377__auto____0;
cljs$core$async$mult_$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29377__auto____1;
return cljs$core$async$mult_$_state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_31355 = f__29897__auto__();
(statearr_31355[(6)] = c__29895__auto___33381);

return statearr_31355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
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
var G__31358 = arguments.length;
switch (G__31358) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33570 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null, m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33570(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33572 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null, m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33572(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33580 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null, m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33580(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33582 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null, m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33582(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33584 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null, m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33584(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___33585 = arguments.length;
var i__5767__auto___33586 = (0);
while(true){
if((i__5767__auto___33586 < len__5766__auto___33585)){
args__5772__auto__.push((arguments[i__5767__auto___33586]));

var G__33587 = (i__5767__auto___33586 + (1));
i__5767__auto___33586 = G__33587;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31386){
var map__31387 = p__31386;
var map__31387__$1 = cljs.core.__destructure_map(map__31387);
var opts = map__31387__$1;
var statearr_31389_33593 = state;
(statearr_31389_33593[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31394_33597 = state;
(statearr_31394_33597[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_31395_33598 = state;
(statearr_31395_33598[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31382){
var G__31383 = cljs.core.first(seq31382);
var seq31382__$1 = cljs.core.next(seq31382);
var G__31384 = cljs.core.first(seq31382__$1);
var seq31382__$2 = cljs.core.next(seq31382__$1);
var G__31385 = cljs.core.first(seq31382__$2);
var seq31382__$3 = cljs.core.next(seq31382__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31383,G__31384,G__31385,seq31382__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31404 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31405){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31405 = meta31405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31406,meta31405__$1){
var self__ = this;
var _31406__$1 = this;
return (new cljs.core.async.t_cljs$core$async31404(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31405__$1));
}));

(cljs.core.async.t_cljs$core$async31404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31406){
var self__ = this;
var _31406__$1 = this;
return self__.meta31405;
}));

(cljs.core.async.t_cljs$core$async31404.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31404.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31404.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31404.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async31404.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async31404.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async31404.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async31404.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async31404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31405","meta31405",-1679549721,null)], null);
}));

(cljs.core.async.t_cljs$core$async31404.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31404");

(cljs.core.async.t_cljs$core$async31404.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async31404");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31404.
 */
cljs.core.async.__GT_t_cljs$core$async31404 = (function cljs$core$async$__GT_t_cljs$core$async31404(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31405){
return (new cljs.core.async.t_cljs$core$async31404(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31405));
});


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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async31404(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__29895__auto___33626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_31497){
var state_val_31498 = (state_31497[(1)]);
if((state_val_31498 === (7))){
var inst_31454 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
if(cljs.core.truth_(inst_31454)){
var statearr_31504_33627 = state_31497__$1;
(statearr_31504_33627[(1)] = (8));

} else {
var statearr_31506_33628 = state_31497__$1;
(statearr_31506_33628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (20))){
var inst_31445 = (state_31497[(7)]);
var state_31497__$1 = state_31497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31497__$1,(23),out,inst_31445);
} else {
if((state_val_31498 === (1))){
var inst_31427 = calc_state();
var inst_31428 = cljs.core.__destructure_map(inst_31427);
var inst_31429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31428,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31428,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31428,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31432 = inst_31427;
var state_31497__$1 = (function (){var statearr_31512 = state_31497;
(statearr_31512[(8)] = inst_31429);

(statearr_31512[(9)] = inst_31431);

(statearr_31512[(10)] = inst_31432);

(statearr_31512[(11)] = inst_31430);

return statearr_31512;
})();
var statearr_31515_33631 = state_31497__$1;
(statearr_31515_33631[(2)] = null);

(statearr_31515_33631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (24))){
var inst_31435 = (state_31497[(12)]);
var inst_31432 = inst_31435;
var state_31497__$1 = (function (){var statearr_31516 = state_31497;
(statearr_31516[(10)] = inst_31432);

return statearr_31516;
})();
var statearr_31517_33633 = state_31497__$1;
(statearr_31517_33633[(2)] = null);

(statearr_31517_33633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (4))){
var inst_31445 = (state_31497[(7)]);
var inst_31447 = (state_31497[(13)]);
var inst_31444 = (state_31497[(2)]);
var inst_31445__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31444,(0),null);
var inst_31446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31444,(1),null);
var inst_31447__$1 = (inst_31445__$1 == null);
var state_31497__$1 = (function (){var statearr_31523 = state_31497;
(statearr_31523[(14)] = inst_31446);

(statearr_31523[(7)] = inst_31445__$1);

(statearr_31523[(13)] = inst_31447__$1);

return statearr_31523;
})();
if(cljs.core.truth_(inst_31447__$1)){
var statearr_31524_33641 = state_31497__$1;
(statearr_31524_33641[(1)] = (5));

} else {
var statearr_31525_33646 = state_31497__$1;
(statearr_31525_33646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (15))){
var inst_31468 = (state_31497[(15)]);
var inst_31436 = (state_31497[(16)]);
var inst_31468__$1 = cljs.core.empty_QMARK_(inst_31436);
var state_31497__$1 = (function (){var statearr_31526 = state_31497;
(statearr_31526[(15)] = inst_31468__$1);

return statearr_31526;
})();
if(inst_31468__$1){
var statearr_31527_33647 = state_31497__$1;
(statearr_31527_33647[(1)] = (17));

} else {
var statearr_31528_33648 = state_31497__$1;
(statearr_31528_33648[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (21))){
var inst_31435 = (state_31497[(12)]);
var inst_31432 = inst_31435;
var state_31497__$1 = (function (){var statearr_31530 = state_31497;
(statearr_31530[(10)] = inst_31432);

return statearr_31530;
})();
var statearr_31531_33650 = state_31497__$1;
(statearr_31531_33650[(2)] = null);

(statearr_31531_33650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (13))){
var inst_31461 = (state_31497[(2)]);
var inst_31462 = calc_state();
var inst_31432 = inst_31462;
var state_31497__$1 = (function (){var statearr_31533 = state_31497;
(statearr_31533[(17)] = inst_31461);

(statearr_31533[(10)] = inst_31432);

return statearr_31533;
})();
var statearr_31535_33651 = state_31497__$1;
(statearr_31535_33651[(2)] = null);

(statearr_31535_33651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (22))){
var inst_31491 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
var statearr_31537_33653 = state_31497__$1;
(statearr_31537_33653[(2)] = inst_31491);

(statearr_31537_33653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (6))){
var inst_31446 = (state_31497[(14)]);
var inst_31452 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31446,change);
var state_31497__$1 = state_31497;
var statearr_31538_33654 = state_31497__$1;
(statearr_31538_33654[(2)] = inst_31452);

(statearr_31538_33654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (25))){
var state_31497__$1 = state_31497;
var statearr_31540_33655 = state_31497__$1;
(statearr_31540_33655[(2)] = null);

(statearr_31540_33655[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (17))){
var inst_31437 = (state_31497[(18)]);
var inst_31446 = (state_31497[(14)]);
var inst_31472 = (inst_31437.cljs$core$IFn$_invoke$arity$1 ? inst_31437.cljs$core$IFn$_invoke$arity$1(inst_31446) : inst_31437.call(null, inst_31446));
var inst_31473 = cljs.core.not(inst_31472);
var state_31497__$1 = state_31497;
var statearr_31542_33656 = state_31497__$1;
(statearr_31542_33656[(2)] = inst_31473);

(statearr_31542_33656[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (3))){
var inst_31495 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31497__$1,inst_31495);
} else {
if((state_val_31498 === (12))){
var state_31497__$1 = state_31497;
var statearr_31546_33657 = state_31497__$1;
(statearr_31546_33657[(2)] = null);

(statearr_31546_33657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (2))){
var inst_31435 = (state_31497[(12)]);
var inst_31432 = (state_31497[(10)]);
var inst_31435__$1 = cljs.core.__destructure_map(inst_31432);
var inst_31436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31435__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31435__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31435__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31497__$1 = (function (){var statearr_31549 = state_31497;
(statearr_31549[(12)] = inst_31435__$1);

(statearr_31549[(18)] = inst_31437);

(statearr_31549[(16)] = inst_31436);

return statearr_31549;
})();
return cljs.core.async.ioc_alts_BANG_(state_31497__$1,(4),inst_31438);
} else {
if((state_val_31498 === (23))){
var inst_31482 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
if(cljs.core.truth_(inst_31482)){
var statearr_31555_33660 = state_31497__$1;
(statearr_31555_33660[(1)] = (24));

} else {
var statearr_31556_33661 = state_31497__$1;
(statearr_31556_33661[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (19))){
var inst_31476 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
var statearr_31558_33663 = state_31497__$1;
(statearr_31558_33663[(2)] = inst_31476);

(statearr_31558_33663[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (11))){
var inst_31446 = (state_31497[(14)]);
var inst_31458 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31446);
var state_31497__$1 = state_31497;
var statearr_31560_33664 = state_31497__$1;
(statearr_31560_33664[(2)] = inst_31458);

(statearr_31560_33664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (9))){
var inst_31446 = (state_31497[(14)]);
var inst_31465 = (state_31497[(19)]);
var inst_31436 = (state_31497[(16)]);
var inst_31465__$1 = (inst_31436.cljs$core$IFn$_invoke$arity$1 ? inst_31436.cljs$core$IFn$_invoke$arity$1(inst_31446) : inst_31436.call(null, inst_31446));
var state_31497__$1 = (function (){var statearr_31562 = state_31497;
(statearr_31562[(19)] = inst_31465__$1);

return statearr_31562;
})();
if(cljs.core.truth_(inst_31465__$1)){
var statearr_31563_33666 = state_31497__$1;
(statearr_31563_33666[(1)] = (14));

} else {
var statearr_31564_33667 = state_31497__$1;
(statearr_31564_33667[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (5))){
var inst_31447 = (state_31497[(13)]);
var state_31497__$1 = state_31497;
var statearr_31567_33668 = state_31497__$1;
(statearr_31567_33668[(2)] = inst_31447);

(statearr_31567_33668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (14))){
var inst_31465 = (state_31497[(19)]);
var state_31497__$1 = state_31497;
var statearr_31568_33671 = state_31497__$1;
(statearr_31568_33671[(2)] = inst_31465);

(statearr_31568_33671[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (26))){
var inst_31487 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
var statearr_31574_33674 = state_31497__$1;
(statearr_31574_33674[(2)] = inst_31487);

(statearr_31574_33674[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (16))){
var inst_31478 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
if(cljs.core.truth_(inst_31478)){
var statearr_31576_33678 = state_31497__$1;
(statearr_31576_33678[(1)] = (20));

} else {
var statearr_31579_33683 = state_31497__$1;
(statearr_31579_33683[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (10))){
var inst_31493 = (state_31497[(2)]);
var state_31497__$1 = state_31497;
var statearr_31580_33686 = state_31497__$1;
(statearr_31580_33686[(2)] = inst_31493);

(statearr_31580_33686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (18))){
var inst_31468 = (state_31497[(15)]);
var state_31497__$1 = state_31497;
var statearr_31581_33692 = state_31497__$1;
(statearr_31581_33692[(2)] = inst_31468);

(statearr_31581_33692[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31498 === (8))){
var inst_31445 = (state_31497[(7)]);
var inst_31456 = (inst_31445 == null);
var state_31497__$1 = state_31497;
if(cljs.core.truth_(inst_31456)){
var statearr_31583_33694 = state_31497__$1;
(statearr_31583_33694[(1)] = (11));

} else {
var statearr_31584_33699 = state_31497__$1;
(statearr_31584_33699[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__29377__auto__ = null;
var cljs$core$async$mix_$_state_machine__29377__auto____0 = (function (){
var statearr_31589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31589[(0)] = cljs$core$async$mix_$_state_machine__29377__auto__);

(statearr_31589[(1)] = (1));

return statearr_31589;
});
var cljs$core$async$mix_$_state_machine__29377__auto____1 = (function (state_31497){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_31497);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e31590){var ex__29380__auto__ = e31590;
var statearr_31591_33708 = state_31497;
(statearr_31591_33708[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_31497[(4)]))){
var statearr_31592_33709 = state_31497;
(statearr_31592_33709[(1)] = cljs.core.first((state_31497[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33710 = state_31497;
state_31497 = G__33710;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29377__auto__ = function(state_31497){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29377__auto____1.call(this,state_31497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29377__auto____0;
cljs$core$async$mix_$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29377__auto____1;
return cljs$core$async$mix_$_state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_31596 = f__29897__auto__();
(statearr_31596[(6)] = c__29895__auto___33626);

return statearr_31596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33715 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33715(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33716 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null, p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33716(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33724 = (function() {
var G__33725 = null;
var G__33725__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null, p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33725__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null, p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33725 = function(p,v){
switch(arguments.length){
case 1:
return G__33725__1.call(this,p);
case 2:
return G__33725__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33725.cljs$core$IFn$_invoke$arity$1 = G__33725__1;
G__33725.cljs$core$IFn$_invoke$arity$2 = G__33725__2;
return G__33725;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31629 = arguments.length;
switch (G__31629) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33724(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33724(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31647 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31648){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31648 = meta31648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31649,meta31648__$1){
var self__ = this;
var _31649__$1 = this;
return (new cljs.core.async.t_cljs$core$async31647(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31648__$1));
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31649){
var self__ = this;
var _31649__$1 = this;
return self__.meta31648;
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31647.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31648","meta31648",-67931589,null)], null);
}));

(cljs.core.async.t_cljs$core$async31647.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31647");

(cljs.core.async.t_cljs$core$async31647.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async31647");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31647.
 */
cljs.core.async.__GT_t_cljs$core$async31647 = (function cljs$core$async$__GT_t_cljs$core$async31647(ch,topic_fn,buf_fn,mults,ensure_mult,meta31648){
return (new cljs.core.async.t_cljs$core$async31647(ch,topic_fn,buf_fn,mults,ensure_mult,meta31648));
});


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
var G__31641 = arguments.length;
switch (G__31641) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31636_SHARP_){
if(cljs.core.truth_((p1__31636_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31636_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31636_SHARP_.call(null, topic)))){
return p1__31636_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31636_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async31647(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__29895__auto___33757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_31739){
var state_val_31740 = (state_31739[(1)]);
if((state_val_31740 === (7))){
var inst_31732 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31742_33759 = state_31739__$1;
(statearr_31742_33759[(2)] = inst_31732);

(statearr_31742_33759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (20))){
var state_31739__$1 = state_31739;
var statearr_31743_33761 = state_31739__$1;
(statearr_31743_33761[(2)] = null);

(statearr_31743_33761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (1))){
var state_31739__$1 = state_31739;
var statearr_31744_33765 = state_31739__$1;
(statearr_31744_33765[(2)] = null);

(statearr_31744_33765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (24))){
var inst_31713 = (state_31739[(7)]);
var inst_31722 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31713);
var state_31739__$1 = state_31739;
var statearr_31749_33770 = state_31739__$1;
(statearr_31749_33770[(2)] = inst_31722);

(statearr_31749_33770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (4))){
var inst_31662 = (state_31739[(8)]);
var inst_31662__$1 = (state_31739[(2)]);
var inst_31663 = (inst_31662__$1 == null);
var state_31739__$1 = (function (){var statearr_31751 = state_31739;
(statearr_31751[(8)] = inst_31662__$1);

return statearr_31751;
})();
if(cljs.core.truth_(inst_31663)){
var statearr_31752_33776 = state_31739__$1;
(statearr_31752_33776[(1)] = (5));

} else {
var statearr_31753_33777 = state_31739__$1;
(statearr_31753_33777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (15))){
var inst_31707 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31755_33781 = state_31739__$1;
(statearr_31755_33781[(2)] = inst_31707);

(statearr_31755_33781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (21))){
var inst_31729 = (state_31739[(2)]);
var state_31739__$1 = (function (){var statearr_31756 = state_31739;
(statearr_31756[(9)] = inst_31729);

return statearr_31756;
})();
var statearr_31757_33782 = state_31739__$1;
(statearr_31757_33782[(2)] = null);

(statearr_31757_33782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (13))){
var inst_31686 = (state_31739[(10)]);
var inst_31688 = cljs.core.chunked_seq_QMARK_(inst_31686);
var state_31739__$1 = state_31739;
if(inst_31688){
var statearr_31760_33785 = state_31739__$1;
(statearr_31760_33785[(1)] = (16));

} else {
var statearr_31764_33787 = state_31739__$1;
(statearr_31764_33787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (22))){
var inst_31719 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
if(cljs.core.truth_(inst_31719)){
var statearr_31765_33790 = state_31739__$1;
(statearr_31765_33790[(1)] = (23));

} else {
var statearr_31766_33792 = state_31739__$1;
(statearr_31766_33792[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (6))){
var inst_31715 = (state_31739[(11)]);
var inst_31662 = (state_31739[(8)]);
var inst_31713 = (state_31739[(7)]);
var inst_31713__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31662) : topic_fn.call(null, inst_31662));
var inst_31714 = cljs.core.deref(mults);
var inst_31715__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31714,inst_31713__$1);
var state_31739__$1 = (function (){var statearr_31772 = state_31739;
(statearr_31772[(11)] = inst_31715__$1);

(statearr_31772[(7)] = inst_31713__$1);

return statearr_31772;
})();
if(cljs.core.truth_(inst_31715__$1)){
var statearr_31773_33806 = state_31739__$1;
(statearr_31773_33806[(1)] = (19));

} else {
var statearr_31775_33808 = state_31739__$1;
(statearr_31775_33808[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (25))){
var inst_31724 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31776_33814 = state_31739__$1;
(statearr_31776_33814[(2)] = inst_31724);

(statearr_31776_33814[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (17))){
var inst_31686 = (state_31739[(10)]);
var inst_31698 = cljs.core.first(inst_31686);
var inst_31699 = cljs.core.async.muxch_STAR_(inst_31698);
var inst_31700 = cljs.core.async.close_BANG_(inst_31699);
var inst_31701 = cljs.core.next(inst_31686);
var inst_31672 = inst_31701;
var inst_31673 = null;
var inst_31674 = (0);
var inst_31675 = (0);
var state_31739__$1 = (function (){var statearr_31778 = state_31739;
(statearr_31778[(12)] = inst_31674);

(statearr_31778[(13)] = inst_31672);

(statearr_31778[(14)] = inst_31700);

(statearr_31778[(15)] = inst_31675);

(statearr_31778[(16)] = inst_31673);

return statearr_31778;
})();
var statearr_31779_33817 = state_31739__$1;
(statearr_31779_33817[(2)] = null);

(statearr_31779_33817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (3))){
var inst_31734 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31739__$1,inst_31734);
} else {
if((state_val_31740 === (12))){
var inst_31709 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31784_33822 = state_31739__$1;
(statearr_31784_33822[(2)] = inst_31709);

(statearr_31784_33822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (2))){
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31739__$1,(4),ch);
} else {
if((state_val_31740 === (23))){
var state_31739__$1 = state_31739;
var statearr_31785_33834 = state_31739__$1;
(statearr_31785_33834[(2)] = null);

(statearr_31785_33834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (19))){
var inst_31715 = (state_31739[(11)]);
var inst_31662 = (state_31739[(8)]);
var inst_31717 = cljs.core.async.muxch_STAR_(inst_31715);
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31739__$1,(22),inst_31717,inst_31662);
} else {
if((state_val_31740 === (11))){
var inst_31672 = (state_31739[(13)]);
var inst_31686 = (state_31739[(10)]);
var inst_31686__$1 = cljs.core.seq(inst_31672);
var state_31739__$1 = (function (){var statearr_31786 = state_31739;
(statearr_31786[(10)] = inst_31686__$1);

return statearr_31786;
})();
if(inst_31686__$1){
var statearr_31787_33839 = state_31739__$1;
(statearr_31787_33839[(1)] = (13));

} else {
var statearr_31788_33840 = state_31739__$1;
(statearr_31788_33840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (9))){
var inst_31711 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31790_33845 = state_31739__$1;
(statearr_31790_33845[(2)] = inst_31711);

(statearr_31790_33845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (5))){
var inst_31669 = cljs.core.deref(mults);
var inst_31670 = cljs.core.vals(inst_31669);
var inst_31671 = cljs.core.seq(inst_31670);
var inst_31672 = inst_31671;
var inst_31673 = null;
var inst_31674 = (0);
var inst_31675 = (0);
var state_31739__$1 = (function (){var statearr_31791 = state_31739;
(statearr_31791[(12)] = inst_31674);

(statearr_31791[(13)] = inst_31672);

(statearr_31791[(15)] = inst_31675);

(statearr_31791[(16)] = inst_31673);

return statearr_31791;
})();
var statearr_31792_33855 = state_31739__$1;
(statearr_31792_33855[(2)] = null);

(statearr_31792_33855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (14))){
var state_31739__$1 = state_31739;
var statearr_31796_33857 = state_31739__$1;
(statearr_31796_33857[(2)] = null);

(statearr_31796_33857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (16))){
var inst_31686 = (state_31739[(10)]);
var inst_31693 = cljs.core.chunk_first(inst_31686);
var inst_31694 = cljs.core.chunk_rest(inst_31686);
var inst_31695 = cljs.core.count(inst_31693);
var inst_31672 = inst_31694;
var inst_31673 = inst_31693;
var inst_31674 = inst_31695;
var inst_31675 = (0);
var state_31739__$1 = (function (){var statearr_31797 = state_31739;
(statearr_31797[(12)] = inst_31674);

(statearr_31797[(13)] = inst_31672);

(statearr_31797[(15)] = inst_31675);

(statearr_31797[(16)] = inst_31673);

return statearr_31797;
})();
var statearr_31798_33861 = state_31739__$1;
(statearr_31798_33861[(2)] = null);

(statearr_31798_33861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (10))){
var inst_31674 = (state_31739[(12)]);
var inst_31672 = (state_31739[(13)]);
var inst_31675 = (state_31739[(15)]);
var inst_31673 = (state_31739[(16)]);
var inst_31680 = cljs.core._nth(inst_31673,inst_31675);
var inst_31681 = cljs.core.async.muxch_STAR_(inst_31680);
var inst_31682 = cljs.core.async.close_BANG_(inst_31681);
var inst_31683 = (inst_31675 + (1));
var tmp31793 = inst_31674;
var tmp31794 = inst_31672;
var tmp31795 = inst_31673;
var inst_31672__$1 = tmp31794;
var inst_31673__$1 = tmp31795;
var inst_31674__$1 = tmp31793;
var inst_31675__$1 = inst_31683;
var state_31739__$1 = (function (){var statearr_31800 = state_31739;
(statearr_31800[(12)] = inst_31674__$1);

(statearr_31800[(17)] = inst_31682);

(statearr_31800[(13)] = inst_31672__$1);

(statearr_31800[(15)] = inst_31675__$1);

(statearr_31800[(16)] = inst_31673__$1);

return statearr_31800;
})();
var statearr_31804_33867 = state_31739__$1;
(statearr_31804_33867[(2)] = null);

(statearr_31804_33867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (18))){
var inst_31704 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31805_33870 = state_31739__$1;
(statearr_31805_33870[(2)] = inst_31704);

(statearr_31805_33870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (8))){
var inst_31674 = (state_31739[(12)]);
var inst_31675 = (state_31739[(15)]);
var inst_31677 = (inst_31675 < inst_31674);
var inst_31678 = inst_31677;
var state_31739__$1 = state_31739;
if(cljs.core.truth_(inst_31678)){
var statearr_31806_33873 = state_31739__$1;
(statearr_31806_33873[(1)] = (10));

} else {
var statearr_31807_33874 = state_31739__$1;
(statearr_31807_33874[(1)] = (11));

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
var cljs$core$async$state_machine__29377__auto__ = null;
var cljs$core$async$state_machine__29377__auto____0 = (function (){
var statearr_31810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31810[(0)] = cljs$core$async$state_machine__29377__auto__);

(statearr_31810[(1)] = (1));

return statearr_31810;
});
var cljs$core$async$state_machine__29377__auto____1 = (function (state_31739){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_31739);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e31811){var ex__29380__auto__ = e31811;
var statearr_31812_33878 = state_31739;
(statearr_31812_33878[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_31739[(4)]))){
var statearr_31813_33880 = state_31739;
(statearr_31813_33880[(1)] = cljs.core.first((state_31739[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33885 = state_31739;
state_31739 = G__33885;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$state_machine__29377__auto__ = function(state_31739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29377__auto____1.call(this,state_31739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29377__auto____0;
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29377__auto____1;
return cljs$core$async$state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_31814 = f__29897__auto__();
(statearr_31814[(6)] = c__29895__auto___33757);

return statearr_31814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
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
var G__31821 = arguments.length;
switch (G__31821) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31833 = arguments.length;
switch (G__31833) {
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
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__31839 = arguments.length;
switch (G__31839) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29895__auto___33903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_31897){
var state_val_31898 = (state_31897[(1)]);
if((state_val_31898 === (7))){
var state_31897__$1 = state_31897;
var statearr_31900_33904 = state_31897__$1;
(statearr_31900_33904[(2)] = null);

(statearr_31900_33904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (1))){
var state_31897__$1 = state_31897;
var statearr_31901_33905 = state_31897__$1;
(statearr_31901_33905[(2)] = null);

(statearr_31901_33905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (4))){
var inst_31850 = (state_31897[(7)]);
var inst_31849 = (state_31897[(8)]);
var inst_31853 = (inst_31850 < inst_31849);
var state_31897__$1 = state_31897;
if(cljs.core.truth_(inst_31853)){
var statearr_31902_33906 = state_31897__$1;
(statearr_31902_33906[(1)] = (6));

} else {
var statearr_31903_33907 = state_31897__$1;
(statearr_31903_33907[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (15))){
var inst_31879 = (state_31897[(9)]);
var inst_31885 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31879);
var state_31897__$1 = state_31897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31897__$1,(17),out,inst_31885);
} else {
if((state_val_31898 === (13))){
var inst_31879 = (state_31897[(9)]);
var inst_31879__$1 = (state_31897[(2)]);
var inst_31880 = cljs.core.some(cljs.core.nil_QMARK_,inst_31879__$1);
var state_31897__$1 = (function (){var statearr_31907 = state_31897;
(statearr_31907[(9)] = inst_31879__$1);

return statearr_31907;
})();
if(cljs.core.truth_(inst_31880)){
var statearr_31908_33908 = state_31897__$1;
(statearr_31908_33908[(1)] = (14));

} else {
var statearr_31909_33909 = state_31897__$1;
(statearr_31909_33909[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (6))){
var state_31897__$1 = state_31897;
var statearr_31913_33910 = state_31897__$1;
(statearr_31913_33910[(2)] = null);

(statearr_31913_33910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (17))){
var inst_31887 = (state_31897[(2)]);
var state_31897__$1 = (function (){var statearr_31925 = state_31897;
(statearr_31925[(10)] = inst_31887);

return statearr_31925;
})();
var statearr_31926_33915 = state_31897__$1;
(statearr_31926_33915[(2)] = null);

(statearr_31926_33915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (3))){
var inst_31892 = (state_31897[(2)]);
var state_31897__$1 = state_31897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31897__$1,inst_31892);
} else {
if((state_val_31898 === (12))){
var _ = (function (){var statearr_31931 = state_31897;
(statearr_31931[(4)] = cljs.core.rest((state_31897[(4)])));

return statearr_31931;
})();
var state_31897__$1 = state_31897;
var ex31920 = (state_31897__$1[(2)]);
var statearr_31932_33917 = state_31897__$1;
(statearr_31932_33917[(5)] = ex31920);


if((ex31920 instanceof Object)){
var statearr_31934_33918 = state_31897__$1;
(statearr_31934_33918[(1)] = (11));

(statearr_31934_33918[(5)] = null);

} else {
throw ex31920;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (2))){
var inst_31848 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31849 = cnt;
var inst_31850 = (0);
var state_31897__$1 = (function (){var statearr_31940 = state_31897;
(statearr_31940[(7)] = inst_31850);

(statearr_31940[(8)] = inst_31849);

(statearr_31940[(11)] = inst_31848);

return statearr_31940;
})();
var statearr_31941_33925 = state_31897__$1;
(statearr_31941_33925[(2)] = null);

(statearr_31941_33925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (11))){
var inst_31858 = (state_31897[(2)]);
var inst_31859 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31897__$1 = (function (){var statearr_31948 = state_31897;
(statearr_31948[(12)] = inst_31858);

return statearr_31948;
})();
var statearr_31950_33926 = state_31897__$1;
(statearr_31950_33926[(2)] = inst_31859);

(statearr_31950_33926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (9))){
var inst_31850 = (state_31897[(7)]);
var _ = (function (){var statearr_31951 = state_31897;
(statearr_31951[(4)] = cljs.core.cons((12),(state_31897[(4)])));

return statearr_31951;
})();
var inst_31865 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31850) : chs__$1.call(null, inst_31850));
var inst_31866 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31850) : done.call(null, inst_31850));
var inst_31867 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31865,inst_31866);
var ___$1 = (function (){var statearr_31953 = state_31897;
(statearr_31953[(4)] = cljs.core.rest((state_31897[(4)])));

return statearr_31953;
})();
var state_31897__$1 = state_31897;
var statearr_31954_33933 = state_31897__$1;
(statearr_31954_33933[(2)] = inst_31867);

(statearr_31954_33933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (5))){
var inst_31877 = (state_31897[(2)]);
var state_31897__$1 = (function (){var statearr_31957 = state_31897;
(statearr_31957[(13)] = inst_31877);

return statearr_31957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31897__$1,(13),dchan);
} else {
if((state_val_31898 === (14))){
var inst_31882 = cljs.core.async.close_BANG_(out);
var state_31897__$1 = state_31897;
var statearr_31959_33934 = state_31897__$1;
(statearr_31959_33934[(2)] = inst_31882);

(statearr_31959_33934[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (16))){
var inst_31890 = (state_31897[(2)]);
var state_31897__$1 = state_31897;
var statearr_31960_33935 = state_31897__$1;
(statearr_31960_33935[(2)] = inst_31890);

(statearr_31960_33935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (10))){
var inst_31850 = (state_31897[(7)]);
var inst_31870 = (state_31897[(2)]);
var inst_31871 = (inst_31850 + (1));
var inst_31850__$1 = inst_31871;
var state_31897__$1 = (function (){var statearr_31962 = state_31897;
(statearr_31962[(7)] = inst_31850__$1);

(statearr_31962[(14)] = inst_31870);

return statearr_31962;
})();
var statearr_31963_33936 = state_31897__$1;
(statearr_31963_33936[(2)] = null);

(statearr_31963_33936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31898 === (8))){
var inst_31875 = (state_31897[(2)]);
var state_31897__$1 = state_31897;
var statearr_31966_33937 = state_31897__$1;
(statearr_31966_33937[(2)] = inst_31875);

(statearr_31966_33937[(1)] = (5));


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
var cljs$core$async$state_machine__29377__auto__ = null;
var cljs$core$async$state_machine__29377__auto____0 = (function (){
var statearr_31968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31968[(0)] = cljs$core$async$state_machine__29377__auto__);

(statearr_31968[(1)] = (1));

return statearr_31968;
});
var cljs$core$async$state_machine__29377__auto____1 = (function (state_31897){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_31897);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e31970){var ex__29380__auto__ = e31970;
var statearr_31971_33941 = state_31897;
(statearr_31971_33941[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_31897[(4)]))){
var statearr_31972_33942 = state_31897;
(statearr_31972_33942[(1)] = cljs.core.first((state_31897[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33943 = state_31897;
state_31897 = G__33943;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$state_machine__29377__auto__ = function(state_31897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29377__auto____1.call(this,state_31897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29377__auto____0;
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29377__auto____1;
return cljs$core$async$state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_31977 = f__29897__auto__();
(statearr_31977[(6)] = c__29895__auto___33903);

return statearr_31977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
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
var G__31984 = arguments.length;
switch (G__31984) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29895__auto___33947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_32034){
var state_val_32035 = (state_32034[(1)]);
if((state_val_32035 === (7))){
var inst_32007 = (state_32034[(7)]);
var inst_32006 = (state_32034[(8)]);
var inst_32006__$1 = (state_32034[(2)]);
var inst_32007__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32006__$1,(0),null);
var inst_32008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32006__$1,(1),null);
var inst_32009 = (inst_32007__$1 == null);
var state_32034__$1 = (function (){var statearr_32040 = state_32034;
(statearr_32040[(7)] = inst_32007__$1);

(statearr_32040[(9)] = inst_32008);

(statearr_32040[(8)] = inst_32006__$1);

return statearr_32040;
})();
if(cljs.core.truth_(inst_32009)){
var statearr_32041_33965 = state_32034__$1;
(statearr_32041_33965[(1)] = (8));

} else {
var statearr_32043_33966 = state_32034__$1;
(statearr_32043_33966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (1))){
var inst_31994 = cljs.core.vec(chs);
var inst_31995 = inst_31994;
var state_32034__$1 = (function (){var statearr_32044 = state_32034;
(statearr_32044[(10)] = inst_31995);

return statearr_32044;
})();
var statearr_32045_33967 = state_32034__$1;
(statearr_32045_33967[(2)] = null);

(statearr_32045_33967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (4))){
var inst_31995 = (state_32034[(10)]);
var state_32034__$1 = state_32034;
return cljs.core.async.ioc_alts_BANG_(state_32034__$1,(7),inst_31995);
} else {
if((state_val_32035 === (6))){
var inst_32027 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
var statearr_32049_33973 = state_32034__$1;
(statearr_32049_33973[(2)] = inst_32027);

(statearr_32049_33973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (3))){
var inst_32029 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32034__$1,inst_32029);
} else {
if((state_val_32035 === (2))){
var inst_31995 = (state_32034[(10)]);
var inst_31997 = cljs.core.count(inst_31995);
var inst_31998 = (inst_31997 > (0));
var state_32034__$1 = state_32034;
if(cljs.core.truth_(inst_31998)){
var statearr_32054_33976 = state_32034__$1;
(statearr_32054_33976[(1)] = (4));

} else {
var statearr_32055_33977 = state_32034__$1;
(statearr_32055_33977[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (11))){
var inst_31995 = (state_32034[(10)]);
var inst_32020 = (state_32034[(2)]);
var tmp32050 = inst_31995;
var inst_31995__$1 = tmp32050;
var state_32034__$1 = (function (){var statearr_32059 = state_32034;
(statearr_32059[(11)] = inst_32020);

(statearr_32059[(10)] = inst_31995__$1);

return statearr_32059;
})();
var statearr_32060_33978 = state_32034__$1;
(statearr_32060_33978[(2)] = null);

(statearr_32060_33978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (9))){
var inst_32007 = (state_32034[(7)]);
var state_32034__$1 = state_32034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32034__$1,(11),out,inst_32007);
} else {
if((state_val_32035 === (5))){
var inst_32025 = cljs.core.async.close_BANG_(out);
var state_32034__$1 = state_32034;
var statearr_32066_33979 = state_32034__$1;
(statearr_32066_33979[(2)] = inst_32025);

(statearr_32066_33979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (10))){
var inst_32023 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
var statearr_32067_33980 = state_32034__$1;
(statearr_32067_33980[(2)] = inst_32023);

(statearr_32067_33980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (8))){
var inst_32007 = (state_32034[(7)]);
var inst_31995 = (state_32034[(10)]);
var inst_32008 = (state_32034[(9)]);
var inst_32006 = (state_32034[(8)]);
var inst_32014 = (function (){var cs = inst_31995;
var vec__32002 = inst_32006;
var v = inst_32007;
var c = inst_32008;
return (function (p1__31979_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31979_SHARP_);
});
})();
var inst_32016 = cljs.core.filterv(inst_32014,inst_31995);
var inst_31995__$1 = inst_32016;
var state_32034__$1 = (function (){var statearr_32069 = state_32034;
(statearr_32069[(10)] = inst_31995__$1);

return statearr_32069;
})();
var statearr_32072_33982 = state_32034__$1;
(statearr_32072_33982[(2)] = null);

(statearr_32072_33982[(1)] = (2));


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
var cljs$core$async$state_machine__29377__auto__ = null;
var cljs$core$async$state_machine__29377__auto____0 = (function (){
var statearr_32074 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32074[(0)] = cljs$core$async$state_machine__29377__auto__);

(statearr_32074[(1)] = (1));

return statearr_32074;
});
var cljs$core$async$state_machine__29377__auto____1 = (function (state_32034){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_32034);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e32076){var ex__29380__auto__ = e32076;
var statearr_32077_33990 = state_32034;
(statearr_32077_33990[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_32034[(4)]))){
var statearr_32080_33991 = state_32034;
(statearr_32080_33991[(1)] = cljs.core.first((state_32034[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33992 = state_32034;
state_32034 = G__33992;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$state_machine__29377__auto__ = function(state_32034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29377__auto____1.call(this,state_32034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29377__auto____0;
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29377__auto____1;
return cljs$core$async$state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_32084 = f__29897__auto__();
(statearr_32084[(6)] = c__29895__auto___33947);

return statearr_32084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32092 = arguments.length;
switch (G__32092) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29895__auto___33996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_32125){
var state_val_32126 = (state_32125[(1)]);
if((state_val_32126 === (7))){
var inst_32104 = (state_32125[(7)]);
var inst_32104__$1 = (state_32125[(2)]);
var inst_32105 = (inst_32104__$1 == null);
var inst_32106 = cljs.core.not(inst_32105);
var state_32125__$1 = (function (){var statearr_32132 = state_32125;
(statearr_32132[(7)] = inst_32104__$1);

return statearr_32132;
})();
if(inst_32106){
var statearr_32135_33997 = state_32125__$1;
(statearr_32135_33997[(1)] = (8));

} else {
var statearr_32137_33998 = state_32125__$1;
(statearr_32137_33998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (1))){
var inst_32097 = (0);
var state_32125__$1 = (function (){var statearr_32138 = state_32125;
(statearr_32138[(8)] = inst_32097);

return statearr_32138;
})();
var statearr_32140_33999 = state_32125__$1;
(statearr_32140_33999[(2)] = null);

(statearr_32140_33999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (4))){
var state_32125__$1 = state_32125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32125__$1,(7),ch);
} else {
if((state_val_32126 === (6))){
var inst_32118 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
var statearr_32142_34000 = state_32125__$1;
(statearr_32142_34000[(2)] = inst_32118);

(statearr_32142_34000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (3))){
var inst_32120 = (state_32125[(2)]);
var inst_32122 = cljs.core.async.close_BANG_(out);
var state_32125__$1 = (function (){var statearr_32146 = state_32125;
(statearr_32146[(9)] = inst_32120);

return statearr_32146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32125__$1,inst_32122);
} else {
if((state_val_32126 === (2))){
var inst_32097 = (state_32125[(8)]);
var inst_32100 = (inst_32097 < n);
var state_32125__$1 = state_32125;
if(cljs.core.truth_(inst_32100)){
var statearr_32147_34006 = state_32125__$1;
(statearr_32147_34006[(1)] = (4));

} else {
var statearr_32149_34007 = state_32125__$1;
(statearr_32149_34007[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (11))){
var inst_32097 = (state_32125[(8)]);
var inst_32109 = (state_32125[(2)]);
var inst_32110 = (inst_32097 + (1));
var inst_32097__$1 = inst_32110;
var state_32125__$1 = (function (){var statearr_32151 = state_32125;
(statearr_32151[(8)] = inst_32097__$1);

(statearr_32151[(10)] = inst_32109);

return statearr_32151;
})();
var statearr_32154_34008 = state_32125__$1;
(statearr_32154_34008[(2)] = null);

(statearr_32154_34008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (9))){
var state_32125__$1 = state_32125;
var statearr_32157_34009 = state_32125__$1;
(statearr_32157_34009[(2)] = null);

(statearr_32157_34009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (5))){
var state_32125__$1 = state_32125;
var statearr_32158_34011 = state_32125__$1;
(statearr_32158_34011[(2)] = null);

(statearr_32158_34011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (10))){
var inst_32114 = (state_32125[(2)]);
var state_32125__$1 = state_32125;
var statearr_32160_34016 = state_32125__$1;
(statearr_32160_34016[(2)] = inst_32114);

(statearr_32160_34016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32126 === (8))){
var inst_32104 = (state_32125[(7)]);
var state_32125__$1 = state_32125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32125__$1,(11),out,inst_32104);
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
var cljs$core$async$state_machine__29377__auto__ = null;
var cljs$core$async$state_machine__29377__auto____0 = (function (){
var statearr_32169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32169[(0)] = cljs$core$async$state_machine__29377__auto__);

(statearr_32169[(1)] = (1));

return statearr_32169;
});
var cljs$core$async$state_machine__29377__auto____1 = (function (state_32125){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_32125);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e32170){var ex__29380__auto__ = e32170;
var statearr_32172_34020 = state_32125;
(statearr_32172_34020[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_32125[(4)]))){
var statearr_32173_34021 = state_32125;
(statearr_32173_34021[(1)] = cljs.core.first((state_32125[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34025 = state_32125;
state_32125 = G__34025;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$state_machine__29377__auto__ = function(state_32125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29377__auto____1.call(this,state_32125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29377__auto____0;
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29377__auto____1;
return cljs$core$async$state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_32180 = f__29897__auto__();
(statearr_32180[(6)] = c__29895__auto___33996);

return statearr_32180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32193 = (function (f,ch,meta32184,_,fn1,meta32194){
this.f = f;
this.ch = ch;
this.meta32184 = meta32184;
this._ = _;
this.fn1 = fn1;
this.meta32194 = meta32194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32195,meta32194__$1){
var self__ = this;
var _32195__$1 = this;
return (new cljs.core.async.t_cljs$core$async32193(self__.f,self__.ch,self__.meta32184,self__._,self__.fn1,meta32194__$1));
}));

(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32195){
var self__ = this;
var _32195__$1 = this;
return self__.meta32194;
}));

(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32182_SHARP_){
var G__32200 = (((p1__32182_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32182_SHARP_) : self__.f.call(null, p1__32182_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32200) : f1.call(null, G__32200));
});
}));

(cljs.core.async.t_cljs$core$async32193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32184","meta32184",-791249900,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32183","cljs.core.async/t_cljs$core$async32183",-777053587,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32194","meta32194",807601772,null)], null);
}));

(cljs.core.async.t_cljs$core$async32193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32193");

(cljs.core.async.t_cljs$core$async32193.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async32193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32193.
 */
cljs.core.async.__GT_t_cljs$core$async32193 = (function cljs$core$async$__GT_t_cljs$core$async32193(f,ch,meta32184,_,fn1,meta32194){
return (new cljs.core.async.t_cljs$core$async32193(f,ch,meta32184,_,fn1,meta32194));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32183 = (function (f,ch,meta32184){
this.f = f;
this.ch = ch;
this.meta32184 = meta32184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32185,meta32184__$1){
var self__ = this;
var _32185__$1 = this;
return (new cljs.core.async.t_cljs$core$async32183(self__.f,self__.ch,meta32184__$1));
}));

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32185){
var self__ = this;
var _32185__$1 = this;
return self__.meta32184;
}));

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async32193(self__.f,self__.ch,self__.meta32184,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32202 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32202) : self__.f.call(null, G__32202));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32184","meta32184",-791249900,null)], null);
}));

(cljs.core.async.t_cljs$core$async32183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32183");

(cljs.core.async.t_cljs$core$async32183.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async32183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32183.
 */
cljs.core.async.__GT_t_cljs$core$async32183 = (function cljs$core$async$__GT_t_cljs$core$async32183(f,ch,meta32184){
return (new cljs.core.async.t_cljs$core$async32183(f,ch,meta32184));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32183(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32207 = (function (f,ch,meta32208){
this.f = f;
this.ch = ch;
this.meta32208 = meta32208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32209,meta32208__$1){
var self__ = this;
var _32209__$1 = this;
return (new cljs.core.async.t_cljs$core$async32207(self__.f,self__.ch,meta32208__$1));
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32209){
var self__ = this;
var _32209__$1 = this;
return self__.meta32208;
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32208","meta32208",1044250196,null)], null);
}));

(cljs.core.async.t_cljs$core$async32207.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32207");

(cljs.core.async.t_cljs$core$async32207.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async32207");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32207.
 */
cljs.core.async.__GT_t_cljs$core$async32207 = (function cljs$core$async$__GT_t_cljs$core$async32207(f,ch,meta32208){
return (new cljs.core.async.t_cljs$core$async32207(f,ch,meta32208));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32207(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32226 = (function (p,ch,meta32227){
this.p = p;
this.ch = ch;
this.meta32227 = meta32227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32228,meta32227__$1){
var self__ = this;
var _32228__$1 = this;
return (new cljs.core.async.t_cljs$core$async32226(self__.p,self__.ch,meta32227__$1));
}));

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32228){
var self__ = this;
var _32228__$1 = this;
return self__.meta32227;
}));

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32227","meta32227",1069254993,null)], null);
}));

(cljs.core.async.t_cljs$core$async32226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32226");

(cljs.core.async.t_cljs$core$async32226.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async32226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32226.
 */
cljs.core.async.__GT_t_cljs$core$async32226 = (function cljs$core$async$__GT_t_cljs$core$async32226(p,ch,meta32227){
return (new cljs.core.async.t_cljs$core$async32226(p,ch,meta32227));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async32226(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32250 = arguments.length;
switch (G__32250) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29895__auto___34072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_32283){
var state_val_32284 = (state_32283[(1)]);
if((state_val_32284 === (7))){
var inst_32278 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
var statearr_32293_34073 = state_32283__$1;
(statearr_32293_34073[(2)] = inst_32278);

(statearr_32293_34073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (1))){
var state_32283__$1 = state_32283;
var statearr_32294_34074 = state_32283__$1;
(statearr_32294_34074[(2)] = null);

(statearr_32294_34074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (4))){
var inst_32260 = (state_32283[(7)]);
var inst_32260__$1 = (state_32283[(2)]);
var inst_32261 = (inst_32260__$1 == null);
var state_32283__$1 = (function (){var statearr_32296 = state_32283;
(statearr_32296[(7)] = inst_32260__$1);

return statearr_32296;
})();
if(cljs.core.truth_(inst_32261)){
var statearr_32297_34079 = state_32283__$1;
(statearr_32297_34079[(1)] = (5));

} else {
var statearr_32300_34083 = state_32283__$1;
(statearr_32300_34083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (6))){
var inst_32260 = (state_32283[(7)]);
var inst_32269 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32260) : p.call(null, inst_32260));
var state_32283__$1 = state_32283;
if(cljs.core.truth_(inst_32269)){
var statearr_32302_34085 = state_32283__$1;
(statearr_32302_34085[(1)] = (8));

} else {
var statearr_32303_34086 = state_32283__$1;
(statearr_32303_34086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (3))){
var inst_32280 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32283__$1,inst_32280);
} else {
if((state_val_32284 === (2))){
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32283__$1,(4),ch);
} else {
if((state_val_32284 === (11))){
var inst_32272 = (state_32283[(2)]);
var state_32283__$1 = state_32283;
var statearr_32314_34087 = state_32283__$1;
(statearr_32314_34087[(2)] = inst_32272);

(statearr_32314_34087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (9))){
var state_32283__$1 = state_32283;
var statearr_32320_34089 = state_32283__$1;
(statearr_32320_34089[(2)] = null);

(statearr_32320_34089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (5))){
var inst_32263 = cljs.core.async.close_BANG_(out);
var state_32283__$1 = state_32283;
var statearr_32322_34091 = state_32283__$1;
(statearr_32322_34091[(2)] = inst_32263);

(statearr_32322_34091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (10))){
var inst_32275 = (state_32283[(2)]);
var state_32283__$1 = (function (){var statearr_32324 = state_32283;
(statearr_32324[(8)] = inst_32275);

return statearr_32324;
})();
var statearr_32326_34092 = state_32283__$1;
(statearr_32326_34092[(2)] = null);

(statearr_32326_34092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32284 === (8))){
var inst_32260 = (state_32283[(7)]);
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32283__$1,(11),out,inst_32260);
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
var cljs$core$async$state_machine__29377__auto__ = null;
var cljs$core$async$state_machine__29377__auto____0 = (function (){
var statearr_32338 = [null,null,null,null,null,null,null,null,null];
(statearr_32338[(0)] = cljs$core$async$state_machine__29377__auto__);

(statearr_32338[(1)] = (1));

return statearr_32338;
});
var cljs$core$async$state_machine__29377__auto____1 = (function (state_32283){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_32283);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e32339){var ex__29380__auto__ = e32339;
var statearr_32340_34094 = state_32283;
(statearr_32340_34094[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_32283[(4)]))){
var statearr_32348_34095 = state_32283;
(statearr_32348_34095[(1)] = cljs.core.first((state_32283[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34096 = state_32283;
state_32283 = G__34096;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$state_machine__29377__auto__ = function(state_32283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29377__auto____1.call(this,state_32283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29377__auto____0;
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29377__auto____1;
return cljs$core$async$state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_32354 = f__29897__auto__();
(statearr_32354[(6)] = c__29895__auto___34072);

return statearr_32354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32364 = arguments.length;
switch (G__32364) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29895__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_32450){
var state_val_32451 = (state_32450[(1)]);
if((state_val_32451 === (7))){
var inst_32444 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32460_34098 = state_32450__$1;
(statearr_32460_34098[(2)] = inst_32444);

(statearr_32460_34098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (20))){
var inst_32409 = (state_32450[(7)]);
var inst_32425 = (state_32450[(2)]);
var inst_32426 = cljs.core.next(inst_32409);
var inst_32388 = inst_32426;
var inst_32389 = null;
var inst_32390 = (0);
var inst_32391 = (0);
var state_32450__$1 = (function (){var statearr_32466 = state_32450;
(statearr_32466[(8)] = inst_32388);

(statearr_32466[(9)] = inst_32391);

(statearr_32466[(10)] = inst_32390);

(statearr_32466[(11)] = inst_32425);

(statearr_32466[(12)] = inst_32389);

return statearr_32466;
})();
var statearr_32467_34107 = state_32450__$1;
(statearr_32467_34107[(2)] = null);

(statearr_32467_34107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (1))){
var state_32450__$1 = state_32450;
var statearr_32468_34109 = state_32450__$1;
(statearr_32468_34109[(2)] = null);

(statearr_32468_34109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (4))){
var inst_32376 = (state_32450[(13)]);
var inst_32376__$1 = (state_32450[(2)]);
var inst_32377 = (inst_32376__$1 == null);
var state_32450__$1 = (function (){var statearr_32472 = state_32450;
(statearr_32472[(13)] = inst_32376__$1);

return statearr_32472;
})();
if(cljs.core.truth_(inst_32377)){
var statearr_32474_34111 = state_32450__$1;
(statearr_32474_34111[(1)] = (5));

} else {
var statearr_32475_34112 = state_32450__$1;
(statearr_32475_34112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (15))){
var state_32450__$1 = state_32450;
var statearr_32479_34113 = state_32450__$1;
(statearr_32479_34113[(2)] = null);

(statearr_32479_34113[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (21))){
var state_32450__$1 = state_32450;
var statearr_32482_34114 = state_32450__$1;
(statearr_32482_34114[(2)] = null);

(statearr_32482_34114[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (13))){
var inst_32388 = (state_32450[(8)]);
var inst_32391 = (state_32450[(9)]);
var inst_32390 = (state_32450[(10)]);
var inst_32389 = (state_32450[(12)]);
var inst_32402 = (state_32450[(2)]);
var inst_32405 = (inst_32391 + (1));
var tmp32476 = inst_32388;
var tmp32477 = inst_32390;
var tmp32478 = inst_32389;
var inst_32388__$1 = tmp32476;
var inst_32389__$1 = tmp32478;
var inst_32390__$1 = tmp32477;
var inst_32391__$1 = inst_32405;
var state_32450__$1 = (function (){var statearr_32484 = state_32450;
(statearr_32484[(8)] = inst_32388__$1);

(statearr_32484[(9)] = inst_32391__$1);

(statearr_32484[(10)] = inst_32390__$1);

(statearr_32484[(14)] = inst_32402);

(statearr_32484[(12)] = inst_32389__$1);

return statearr_32484;
})();
var statearr_32485_34125 = state_32450__$1;
(statearr_32485_34125[(2)] = null);

(statearr_32485_34125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (22))){
var state_32450__$1 = state_32450;
var statearr_32490_34127 = state_32450__$1;
(statearr_32490_34127[(2)] = null);

(statearr_32490_34127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (6))){
var inst_32376 = (state_32450[(13)]);
var inst_32386 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32376) : f.call(null, inst_32376));
var inst_32387 = cljs.core.seq(inst_32386);
var inst_32388 = inst_32387;
var inst_32389 = null;
var inst_32390 = (0);
var inst_32391 = (0);
var state_32450__$1 = (function (){var statearr_32491 = state_32450;
(statearr_32491[(8)] = inst_32388);

(statearr_32491[(9)] = inst_32391);

(statearr_32491[(10)] = inst_32390);

(statearr_32491[(12)] = inst_32389);

return statearr_32491;
})();
var statearr_32496_34128 = state_32450__$1;
(statearr_32496_34128[(2)] = null);

(statearr_32496_34128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (17))){
var inst_32409 = (state_32450[(7)]);
var inst_32417 = cljs.core.chunk_first(inst_32409);
var inst_32418 = cljs.core.chunk_rest(inst_32409);
var inst_32419 = cljs.core.count(inst_32417);
var inst_32388 = inst_32418;
var inst_32389 = inst_32417;
var inst_32390 = inst_32419;
var inst_32391 = (0);
var state_32450__$1 = (function (){var statearr_32501 = state_32450;
(statearr_32501[(8)] = inst_32388);

(statearr_32501[(9)] = inst_32391);

(statearr_32501[(10)] = inst_32390);

(statearr_32501[(12)] = inst_32389);

return statearr_32501;
})();
var statearr_32502_34133 = state_32450__$1;
(statearr_32502_34133[(2)] = null);

(statearr_32502_34133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (3))){
var inst_32446 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32450__$1,inst_32446);
} else {
if((state_val_32451 === (12))){
var inst_32434 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32503_34135 = state_32450__$1;
(statearr_32503_34135[(2)] = inst_32434);

(statearr_32503_34135[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (2))){
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32450__$1,(4),in$);
} else {
if((state_val_32451 === (23))){
var inst_32442 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32508_34136 = state_32450__$1;
(statearr_32508_34136[(2)] = inst_32442);

(statearr_32508_34136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (19))){
var inst_32429 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32509_34137 = state_32450__$1;
(statearr_32509_34137[(2)] = inst_32429);

(statearr_32509_34137[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (11))){
var inst_32388 = (state_32450[(8)]);
var inst_32409 = (state_32450[(7)]);
var inst_32409__$1 = cljs.core.seq(inst_32388);
var state_32450__$1 = (function (){var statearr_32514 = state_32450;
(statearr_32514[(7)] = inst_32409__$1);

return statearr_32514;
})();
if(inst_32409__$1){
var statearr_32515_34139 = state_32450__$1;
(statearr_32515_34139[(1)] = (14));

} else {
var statearr_32516_34140 = state_32450__$1;
(statearr_32516_34140[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (9))){
var inst_32436 = (state_32450[(2)]);
var inst_32437 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32450__$1 = (function (){var statearr_32517 = state_32450;
(statearr_32517[(15)] = inst_32436);

return statearr_32517;
})();
if(cljs.core.truth_(inst_32437)){
var statearr_32518_34141 = state_32450__$1;
(statearr_32518_34141[(1)] = (21));

} else {
var statearr_32519_34142 = state_32450__$1;
(statearr_32519_34142[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (5))){
var inst_32379 = cljs.core.async.close_BANG_(out);
var state_32450__$1 = state_32450;
var statearr_32523_34143 = state_32450__$1;
(statearr_32523_34143[(2)] = inst_32379);

(statearr_32523_34143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (14))){
var inst_32409 = (state_32450[(7)]);
var inst_32414 = cljs.core.chunked_seq_QMARK_(inst_32409);
var state_32450__$1 = state_32450;
if(inst_32414){
var statearr_32525_34144 = state_32450__$1;
(statearr_32525_34144[(1)] = (17));

} else {
var statearr_32526_34145 = state_32450__$1;
(statearr_32526_34145[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (16))){
var inst_32432 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32531_34149 = state_32450__$1;
(statearr_32531_34149[(2)] = inst_32432);

(statearr_32531_34149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (10))){
var inst_32391 = (state_32450[(9)]);
var inst_32389 = (state_32450[(12)]);
var inst_32396 = cljs.core._nth(inst_32389,inst_32391);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32450__$1,(13),out,inst_32396);
} else {
if((state_val_32451 === (18))){
var inst_32409 = (state_32450[(7)]);
var inst_32422 = cljs.core.first(inst_32409);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32450__$1,(20),out,inst_32422);
} else {
if((state_val_32451 === (8))){
var inst_32391 = (state_32450[(9)]);
var inst_32390 = (state_32450[(10)]);
var inst_32393 = (inst_32391 < inst_32390);
var inst_32394 = inst_32393;
var state_32450__$1 = state_32450;
if(cljs.core.truth_(inst_32394)){
var statearr_32541_34150 = state_32450__$1;
(statearr_32541_34150[(1)] = (10));

} else {
var statearr_32542_34151 = state_32450__$1;
(statearr_32542_34151[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29377__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29377__auto____0 = (function (){
var statearr_32545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32545[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29377__auto__);

(statearr_32545[(1)] = (1));

return statearr_32545;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29377__auto____1 = (function (state_32450){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_32450);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e32550){var ex__29380__auto__ = e32550;
var statearr_32551_34152 = state_32450;
(statearr_32551_34152[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_32450[(4)]))){
var statearr_32555_34153 = state_32450;
(statearr_32555_34153[(1)] = cljs.core.first((state_32450[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34154 = state_32450;
state_32450 = G__34154;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29377__auto__ = function(state_32450){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29377__auto____1.call(this,state_32450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29377__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29377__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_32558 = f__29897__auto__();
(statearr_32558[(6)] = c__29895__auto__);

return statearr_32558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));

return c__29895__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32566 = arguments.length;
switch (G__32566) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32574 = arguments.length;
switch (G__32574) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32583 = arguments.length;
switch (G__32583) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29895__auto___34158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_32614){
var state_val_32615 = (state_32614[(1)]);
if((state_val_32615 === (7))){
var inst_32609 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32617_34159 = state_32614__$1;
(statearr_32617_34159[(2)] = inst_32609);

(statearr_32617_34159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (1))){
var inst_32591 = null;
var state_32614__$1 = (function (){var statearr_32618 = state_32614;
(statearr_32618[(7)] = inst_32591);

return statearr_32618;
})();
var statearr_32619_34160 = state_32614__$1;
(statearr_32619_34160[(2)] = null);

(statearr_32619_34160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (4))){
var inst_32594 = (state_32614[(8)]);
var inst_32594__$1 = (state_32614[(2)]);
var inst_32595 = (inst_32594__$1 == null);
var inst_32596 = cljs.core.not(inst_32595);
var state_32614__$1 = (function (){var statearr_32620 = state_32614;
(statearr_32620[(8)] = inst_32594__$1);

return statearr_32620;
})();
if(inst_32596){
var statearr_32621_34161 = state_32614__$1;
(statearr_32621_34161[(1)] = (5));

} else {
var statearr_32622_34162 = state_32614__$1;
(statearr_32622_34162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (6))){
var state_32614__$1 = state_32614;
var statearr_32625_34163 = state_32614__$1;
(statearr_32625_34163[(2)] = null);

(statearr_32625_34163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (3))){
var inst_32611 = (state_32614[(2)]);
var inst_32612 = cljs.core.async.close_BANG_(out);
var state_32614__$1 = (function (){var statearr_32627 = state_32614;
(statearr_32627[(9)] = inst_32611);

return statearr_32627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32614__$1,inst_32612);
} else {
if((state_val_32615 === (2))){
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32614__$1,(4),ch);
} else {
if((state_val_32615 === (11))){
var inst_32594 = (state_32614[(8)]);
var inst_32603 = (state_32614[(2)]);
var inst_32591 = inst_32594;
var state_32614__$1 = (function (){var statearr_32630 = state_32614;
(statearr_32630[(10)] = inst_32603);

(statearr_32630[(7)] = inst_32591);

return statearr_32630;
})();
var statearr_32631_34164 = state_32614__$1;
(statearr_32631_34164[(2)] = null);

(statearr_32631_34164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (9))){
var inst_32594 = (state_32614[(8)]);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32614__$1,(11),out,inst_32594);
} else {
if((state_val_32615 === (5))){
var inst_32594 = (state_32614[(8)]);
var inst_32591 = (state_32614[(7)]);
var inst_32598 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32594,inst_32591);
var state_32614__$1 = state_32614;
if(inst_32598){
var statearr_32633_34165 = state_32614__$1;
(statearr_32633_34165[(1)] = (8));

} else {
var statearr_32634_34166 = state_32614__$1;
(statearr_32634_34166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (10))){
var inst_32606 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32635_34167 = state_32614__$1;
(statearr_32635_34167[(2)] = inst_32606);

(statearr_32635_34167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (8))){
var inst_32591 = (state_32614[(7)]);
var tmp32632 = inst_32591;
var inst_32591__$1 = tmp32632;
var state_32614__$1 = (function (){var statearr_32640 = state_32614;
(statearr_32640[(7)] = inst_32591__$1);

return statearr_32640;
})();
var statearr_32641_34168 = state_32614__$1;
(statearr_32641_34168[(2)] = null);

(statearr_32641_34168[(1)] = (2));


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
var cljs$core$async$state_machine__29377__auto__ = null;
var cljs$core$async$state_machine__29377__auto____0 = (function (){
var statearr_32644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32644[(0)] = cljs$core$async$state_machine__29377__auto__);

(statearr_32644[(1)] = (1));

return statearr_32644;
});
var cljs$core$async$state_machine__29377__auto____1 = (function (state_32614){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_32614);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e32649){var ex__29380__auto__ = e32649;
var statearr_32650_34169 = state_32614;
(statearr_32650_34169[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_32614[(4)]))){
var statearr_32652_34170 = state_32614;
(statearr_32652_34170[(1)] = cljs.core.first((state_32614[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34171 = state_32614;
state_32614 = G__34171;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$state_machine__29377__auto__ = function(state_32614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29377__auto____1.call(this,state_32614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29377__auto____0;
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29377__auto____1;
return cljs$core$async$state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_32653 = f__29897__auto__();
(statearr_32653[(6)] = c__29895__auto___34158);

return statearr_32653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32660 = arguments.length;
switch (G__32660) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29895__auto___34173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_32710){
var state_val_32711 = (state_32710[(1)]);
if((state_val_32711 === (7))){
var inst_32704 = (state_32710[(2)]);
var state_32710__$1 = state_32710;
var statearr_32712_34174 = state_32710__$1;
(statearr_32712_34174[(2)] = inst_32704);

(statearr_32712_34174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (1))){
var inst_32663 = (new Array(n));
var inst_32664 = inst_32663;
var inst_32665 = (0);
var state_32710__$1 = (function (){var statearr_32713 = state_32710;
(statearr_32713[(7)] = inst_32664);

(statearr_32713[(8)] = inst_32665);

return statearr_32713;
})();
var statearr_32714_34175 = state_32710__$1;
(statearr_32714_34175[(2)] = null);

(statearr_32714_34175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (4))){
var inst_32671 = (state_32710[(9)]);
var inst_32671__$1 = (state_32710[(2)]);
var inst_32672 = (inst_32671__$1 == null);
var inst_32673 = cljs.core.not(inst_32672);
var state_32710__$1 = (function (){var statearr_32718 = state_32710;
(statearr_32718[(9)] = inst_32671__$1);

return statearr_32718;
})();
if(inst_32673){
var statearr_32721_34176 = state_32710__$1;
(statearr_32721_34176[(1)] = (5));

} else {
var statearr_32722_34177 = state_32710__$1;
(statearr_32722_34177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (15))){
var inst_32696 = (state_32710[(2)]);
var state_32710__$1 = state_32710;
var statearr_32725_34178 = state_32710__$1;
(statearr_32725_34178[(2)] = inst_32696);

(statearr_32725_34178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (13))){
var state_32710__$1 = state_32710;
var statearr_32726_34179 = state_32710__$1;
(statearr_32726_34179[(2)] = null);

(statearr_32726_34179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (6))){
var inst_32665 = (state_32710[(8)]);
var inst_32692 = (inst_32665 > (0));
var state_32710__$1 = state_32710;
if(cljs.core.truth_(inst_32692)){
var statearr_32727_34180 = state_32710__$1;
(statearr_32727_34180[(1)] = (12));

} else {
var statearr_32728_34181 = state_32710__$1;
(statearr_32728_34181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (3))){
var inst_32706 = (state_32710[(2)]);
var state_32710__$1 = state_32710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32710__$1,inst_32706);
} else {
if((state_val_32711 === (12))){
var inst_32664 = (state_32710[(7)]);
var inst_32694 = cljs.core.vec(inst_32664);
var state_32710__$1 = state_32710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32710__$1,(15),out,inst_32694);
} else {
if((state_val_32711 === (2))){
var state_32710__$1 = state_32710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32710__$1,(4),ch);
} else {
if((state_val_32711 === (11))){
var inst_32685 = (state_32710[(2)]);
var inst_32687 = (new Array(n));
var inst_32664 = inst_32687;
var inst_32665 = (0);
var state_32710__$1 = (function (){var statearr_32747 = state_32710;
(statearr_32747[(7)] = inst_32664);

(statearr_32747[(8)] = inst_32665);

(statearr_32747[(10)] = inst_32685);

return statearr_32747;
})();
var statearr_32748_34182 = state_32710__$1;
(statearr_32748_34182[(2)] = null);

(statearr_32748_34182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (9))){
var inst_32664 = (state_32710[(7)]);
var inst_32683 = cljs.core.vec(inst_32664);
var state_32710__$1 = state_32710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32710__$1,(11),out,inst_32683);
} else {
if((state_val_32711 === (5))){
var inst_32671 = (state_32710[(9)]);
var inst_32664 = (state_32710[(7)]);
var inst_32665 = (state_32710[(8)]);
var inst_32677 = (state_32710[(11)]);
var inst_32675 = (inst_32664[inst_32665] = inst_32671);
var inst_32677__$1 = (inst_32665 + (1));
var inst_32679 = (inst_32677__$1 < n);
var state_32710__$1 = (function (){var statearr_32773 = state_32710;
(statearr_32773[(12)] = inst_32675);

(statearr_32773[(11)] = inst_32677__$1);

return statearr_32773;
})();
if(cljs.core.truth_(inst_32679)){
var statearr_32775_34183 = state_32710__$1;
(statearr_32775_34183[(1)] = (8));

} else {
var statearr_32779_34184 = state_32710__$1;
(statearr_32779_34184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (14))){
var inst_32701 = (state_32710[(2)]);
var inst_32702 = cljs.core.async.close_BANG_(out);
var state_32710__$1 = (function (){var statearr_32781 = state_32710;
(statearr_32781[(13)] = inst_32701);

return statearr_32781;
})();
var statearr_32782_34185 = state_32710__$1;
(statearr_32782_34185[(2)] = inst_32702);

(statearr_32782_34185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (10))){
var inst_32690 = (state_32710[(2)]);
var state_32710__$1 = state_32710;
var statearr_32783_34186 = state_32710__$1;
(statearr_32783_34186[(2)] = inst_32690);

(statearr_32783_34186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (8))){
var inst_32664 = (state_32710[(7)]);
var inst_32677 = (state_32710[(11)]);
var tmp32780 = inst_32664;
var inst_32664__$1 = tmp32780;
var inst_32665 = inst_32677;
var state_32710__$1 = (function (){var statearr_32784 = state_32710;
(statearr_32784[(7)] = inst_32664__$1);

(statearr_32784[(8)] = inst_32665);

return statearr_32784;
})();
var statearr_32785_34187 = state_32710__$1;
(statearr_32785_34187[(2)] = null);

(statearr_32785_34187[(1)] = (2));


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
var cljs$core$async$state_machine__29377__auto__ = null;
var cljs$core$async$state_machine__29377__auto____0 = (function (){
var statearr_32787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32787[(0)] = cljs$core$async$state_machine__29377__auto__);

(statearr_32787[(1)] = (1));

return statearr_32787;
});
var cljs$core$async$state_machine__29377__auto____1 = (function (state_32710){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_32710);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e32788){var ex__29380__auto__ = e32788;
var statearr_32791_34188 = state_32710;
(statearr_32791_34188[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_32710[(4)]))){
var statearr_32793_34189 = state_32710;
(statearr_32793_34189[(1)] = cljs.core.first((state_32710[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34190 = state_32710;
state_32710 = G__34190;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$state_machine__29377__auto__ = function(state_32710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29377__auto____1.call(this,state_32710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29377__auto____0;
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29377__auto____1;
return cljs$core$async$state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_32803 = f__29897__auto__();
(statearr_32803[(6)] = c__29895__auto___34173);

return statearr_32803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32807 = arguments.length;
switch (G__32807) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29895__auto___34192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29897__auto__ = (function (){var switch__29376__auto__ = (function (state_32880){
var state_val_32887 = (state_32880[(1)]);
if((state_val_32887 === (7))){
var inst_32876 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32890_34193 = state_32880__$1;
(statearr_32890_34193[(2)] = inst_32876);

(statearr_32890_34193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (1))){
var inst_32819 = [];
var inst_32820 = inst_32819;
var inst_32821 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32880__$1 = (function (){var statearr_32891 = state_32880;
(statearr_32891[(7)] = inst_32821);

(statearr_32891[(8)] = inst_32820);

return statearr_32891;
})();
var statearr_32892_34194 = state_32880__$1;
(statearr_32892_34194[(2)] = null);

(statearr_32892_34194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (4))){
var inst_32824 = (state_32880[(9)]);
var inst_32824__$1 = (state_32880[(2)]);
var inst_32825 = (inst_32824__$1 == null);
var inst_32826 = cljs.core.not(inst_32825);
var state_32880__$1 = (function (){var statearr_32900 = state_32880;
(statearr_32900[(9)] = inst_32824__$1);

return statearr_32900;
})();
if(inst_32826){
var statearr_32901_34195 = state_32880__$1;
(statearr_32901_34195[(1)] = (5));

} else {
var statearr_32902_34196 = state_32880__$1;
(statearr_32902_34196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (15))){
var inst_32820 = (state_32880[(8)]);
var inst_32866 = cljs.core.vec(inst_32820);
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32880__$1,(18),out,inst_32866);
} else {
if((state_val_32887 === (13))){
var inst_32855 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32906_34197 = state_32880__$1;
(statearr_32906_34197[(2)] = inst_32855);

(statearr_32906_34197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (6))){
var inst_32820 = (state_32880[(8)]);
var inst_32863 = inst_32820.length;
var inst_32864 = (inst_32863 > (0));
var state_32880__$1 = state_32880;
if(cljs.core.truth_(inst_32864)){
var statearr_32910_34198 = state_32880__$1;
(statearr_32910_34198[(1)] = (15));

} else {
var statearr_32911_34199 = state_32880__$1;
(statearr_32911_34199[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (17))){
var inst_32872 = (state_32880[(2)]);
var inst_32874 = cljs.core.async.close_BANG_(out);
var state_32880__$1 = (function (){var statearr_32912 = state_32880;
(statearr_32912[(10)] = inst_32872);

return statearr_32912;
})();
var statearr_32913_34200 = state_32880__$1;
(statearr_32913_34200[(2)] = inst_32874);

(statearr_32913_34200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (3))){
var inst_32878 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32880__$1,inst_32878);
} else {
if((state_val_32887 === (12))){
var inst_32820 = (state_32880[(8)]);
var inst_32842 = cljs.core.vec(inst_32820);
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32880__$1,(14),out,inst_32842);
} else {
if((state_val_32887 === (2))){
var state_32880__$1 = state_32880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32880__$1,(4),ch);
} else {
if((state_val_32887 === (11))){
var inst_32830 = (state_32880[(11)]);
var inst_32820 = (state_32880[(8)]);
var inst_32824 = (state_32880[(9)]);
var inst_32838 = inst_32820.push(inst_32824);
var tmp32914 = inst_32820;
var inst_32820__$1 = tmp32914;
var inst_32821 = inst_32830;
var state_32880__$1 = (function (){var statearr_32915 = state_32880;
(statearr_32915[(7)] = inst_32821);

(statearr_32915[(12)] = inst_32838);

(statearr_32915[(8)] = inst_32820__$1);

return statearr_32915;
})();
var statearr_32916_34201 = state_32880__$1;
(statearr_32916_34201[(2)] = null);

(statearr_32916_34201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (9))){
var inst_32821 = (state_32880[(7)]);
var inst_32834 = cljs.core.keyword_identical_QMARK_(inst_32821,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32880__$1 = state_32880;
var statearr_32918_34202 = state_32880__$1;
(statearr_32918_34202[(2)] = inst_32834);

(statearr_32918_34202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (5))){
var inst_32821 = (state_32880[(7)]);
var inst_32831 = (state_32880[(13)]);
var inst_32830 = (state_32880[(11)]);
var inst_32824 = (state_32880[(9)]);
var inst_32830__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32824) : f.call(null, inst_32824));
var inst_32831__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32830__$1,inst_32821);
var state_32880__$1 = (function (){var statearr_32922 = state_32880;
(statearr_32922[(13)] = inst_32831__$1);

(statearr_32922[(11)] = inst_32830__$1);

return statearr_32922;
})();
if(inst_32831__$1){
var statearr_32926_34203 = state_32880__$1;
(statearr_32926_34203[(1)] = (8));

} else {
var statearr_32927_34204 = state_32880__$1;
(statearr_32927_34204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (14))){
var inst_32830 = (state_32880[(11)]);
var inst_32824 = (state_32880[(9)]);
var inst_32846 = (state_32880[(2)]);
var inst_32851 = [];
var inst_32852 = inst_32851.push(inst_32824);
var inst_32820 = inst_32851;
var inst_32821 = inst_32830;
var state_32880__$1 = (function (){var statearr_32928 = state_32880;
(statearr_32928[(14)] = inst_32846);

(statearr_32928[(7)] = inst_32821);

(statearr_32928[(8)] = inst_32820);

(statearr_32928[(15)] = inst_32852);

return statearr_32928;
})();
var statearr_32929_34205 = state_32880__$1;
(statearr_32929_34205[(2)] = null);

(statearr_32929_34205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (16))){
var state_32880__$1 = state_32880;
var statearr_32930_34206 = state_32880__$1;
(statearr_32930_34206[(2)] = null);

(statearr_32930_34206[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (10))){
var inst_32836 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
if(cljs.core.truth_(inst_32836)){
var statearr_32931_34207 = state_32880__$1;
(statearr_32931_34207[(1)] = (11));

} else {
var statearr_32932_34208 = state_32880__$1;
(statearr_32932_34208[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (18))){
var inst_32868 = (state_32880[(2)]);
var state_32880__$1 = state_32880;
var statearr_32933_34209 = state_32880__$1;
(statearr_32933_34209[(2)] = inst_32868);

(statearr_32933_34209[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (8))){
var inst_32831 = (state_32880[(13)]);
var state_32880__$1 = state_32880;
var statearr_32940_34210 = state_32880__$1;
(statearr_32940_34210[(2)] = inst_32831);

(statearr_32940_34210[(1)] = (10));


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
var cljs$core$async$state_machine__29377__auto__ = null;
var cljs$core$async$state_machine__29377__auto____0 = (function (){
var statearr_32941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32941[(0)] = cljs$core$async$state_machine__29377__auto__);

(statearr_32941[(1)] = (1));

return statearr_32941;
});
var cljs$core$async$state_machine__29377__auto____1 = (function (state_32880){
while(true){
var ret_value__29378__auto__ = (function (){try{while(true){
var result__29379__auto__ = switch__29376__auto__(state_32880);
if(cljs.core.keyword_identical_QMARK_(result__29379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29379__auto__;
}
break;
}
}catch (e32942){var ex__29380__auto__ = e32942;
var statearr_32943_34211 = state_32880;
(statearr_32943_34211[(2)] = ex__29380__auto__);


if(cljs.core.seq((state_32880[(4)]))){
var statearr_32944_34212 = state_32880;
(statearr_32944_34212[(1)] = cljs.core.first((state_32880[(4)])));

} else {
throw ex__29380__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34213 = state_32880;
state_32880 = G__34213;
continue;
} else {
return ret_value__29378__auto__;
}
break;
}
});
cljs$core$async$state_machine__29377__auto__ = function(state_32880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29377__auto____1.call(this,state_32880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29377__auto____0;
cljs$core$async$state_machine__29377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29377__auto____1;
return cljs$core$async$state_machine__29377__auto__;
})()
})();
var state__29898__auto__ = (function (){var statearr_32949 = f__29897__auto__();
(statearr_32949[(6)] = c__29895__auto___34192);

return statearr_32949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29898__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
