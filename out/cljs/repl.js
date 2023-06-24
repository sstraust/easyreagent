// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9547){
var map__9548 = p__9547;
var map__9548__$1 = cljs.core.__destructure_map.call(null,map__9548);
var m = map__9548__$1;
var n = cljs.core.get.call(null,map__9548__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9548__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9549_9577 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9550_9578 = null;
var count__9551_9579 = (0);
var i__9552_9580 = (0);
while(true){
if((i__9552_9580 < count__9551_9579)){
var f_9581 = cljs.core._nth.call(null,chunk__9550_9578,i__9552_9580);
cljs.core.println.call(null,"  ",f_9581);


var G__9582 = seq__9549_9577;
var G__9583 = chunk__9550_9578;
var G__9584 = count__9551_9579;
var G__9585 = (i__9552_9580 + (1));
seq__9549_9577 = G__9582;
chunk__9550_9578 = G__9583;
count__9551_9579 = G__9584;
i__9552_9580 = G__9585;
continue;
} else {
var temp__5457__auto___9586 = cljs.core.seq.call(null,seq__9549_9577);
if(temp__5457__auto___9586){
var seq__9549_9587__$1 = temp__5457__auto___9586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9549_9587__$1)){
var c__5565__auto___9588 = cljs.core.chunk_first.call(null,seq__9549_9587__$1);
var G__9589 = cljs.core.chunk_rest.call(null,seq__9549_9587__$1);
var G__9590 = c__5565__auto___9588;
var G__9591 = cljs.core.count.call(null,c__5565__auto___9588);
var G__9592 = (0);
seq__9549_9577 = G__9589;
chunk__9550_9578 = G__9590;
count__9551_9579 = G__9591;
i__9552_9580 = G__9592;
continue;
} else {
var f_9593 = cljs.core.first.call(null,seq__9549_9587__$1);
cljs.core.println.call(null,"  ",f_9593);


var G__9594 = cljs.core.next.call(null,seq__9549_9587__$1);
var G__9595 = null;
var G__9596 = (0);
var G__9597 = (0);
seq__9549_9577 = G__9594;
chunk__9550_9578 = G__9595;
count__9551_9579 = G__9596;
i__9552_9580 = G__9597;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9598 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9598);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9598)))?cljs.core.second.call(null,arglists_9598):arglists_9598));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9553_9599 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9554_9600 = null;
var count__9555_9601 = (0);
var i__9556_9602 = (0);
while(true){
if((i__9556_9602 < count__9555_9601)){
var vec__9565_9603 = cljs.core._nth.call(null,chunk__9554_9600,i__9556_9602);
var name_9604 = cljs.core.nth.call(null,vec__9565_9603,(0),null);
var map__9568_9605 = cljs.core.nth.call(null,vec__9565_9603,(1),null);
var map__9568_9606__$1 = cljs.core.__destructure_map.call(null,map__9568_9605);
var doc_9607 = cljs.core.get.call(null,map__9568_9606__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9608 = cljs.core.get.call(null,map__9568_9606__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9604);

cljs.core.println.call(null," ",arglists_9608);

if(cljs.core.truth_(doc_9607)){
cljs.core.println.call(null," ",doc_9607);
} else {
}


var G__9609 = seq__9553_9599;
var G__9610 = chunk__9554_9600;
var G__9611 = count__9555_9601;
var G__9612 = (i__9556_9602 + (1));
seq__9553_9599 = G__9609;
chunk__9554_9600 = G__9610;
count__9555_9601 = G__9611;
i__9556_9602 = G__9612;
continue;
} else {
var temp__5457__auto___9613 = cljs.core.seq.call(null,seq__9553_9599);
if(temp__5457__auto___9613){
var seq__9553_9614__$1 = temp__5457__auto___9613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9553_9614__$1)){
var c__5565__auto___9615 = cljs.core.chunk_first.call(null,seq__9553_9614__$1);
var G__9616 = cljs.core.chunk_rest.call(null,seq__9553_9614__$1);
var G__9617 = c__5565__auto___9615;
var G__9618 = cljs.core.count.call(null,c__5565__auto___9615);
var G__9619 = (0);
seq__9553_9599 = G__9616;
chunk__9554_9600 = G__9617;
count__9555_9601 = G__9618;
i__9556_9602 = G__9619;
continue;
} else {
var vec__9569_9620 = cljs.core.first.call(null,seq__9553_9614__$1);
var name_9621 = cljs.core.nth.call(null,vec__9569_9620,(0),null);
var map__9572_9622 = cljs.core.nth.call(null,vec__9569_9620,(1),null);
var map__9572_9623__$1 = cljs.core.__destructure_map.call(null,map__9572_9622);
var doc_9624 = cljs.core.get.call(null,map__9572_9623__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9625 = cljs.core.get.call(null,map__9572_9623__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9621);

cljs.core.println.call(null," ",arglists_9625);

if(cljs.core.truth_(doc_9624)){
cljs.core.println.call(null," ",doc_9624);
} else {
}


var G__9626 = cljs.core.next.call(null,seq__9553_9614__$1);
var G__9627 = null;
var G__9628 = (0);
var G__9629 = (0);
seq__9553_9599 = G__9626;
chunk__9554_9600 = G__9627;
count__9555_9601 = G__9628;
i__9556_9602 = G__9629;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__9573 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__9574 = null;
var count__9575 = (0);
var i__9576 = (0);
while(true){
if((i__9576 < count__9575)){
var role = cljs.core._nth.call(null,chunk__9574,i__9576);
var temp__5457__auto___9630__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___9630__$1)){
var spec_9631 = temp__5457__auto___9630__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_9631));
} else {
}


var G__9632 = seq__9573;
var G__9633 = chunk__9574;
var G__9634 = count__9575;
var G__9635 = (i__9576 + (1));
seq__9573 = G__9632;
chunk__9574 = G__9633;
count__9575 = G__9634;
i__9576 = G__9635;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__9573);
if(temp__5457__auto____$1){
var seq__9573__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9573__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__9573__$1);
var G__9636 = cljs.core.chunk_rest.call(null,seq__9573__$1);
var G__9637 = c__5565__auto__;
var G__9638 = cljs.core.count.call(null,c__5565__auto__);
var G__9639 = (0);
seq__9573 = G__9636;
chunk__9574 = G__9637;
count__9575 = G__9638;
i__9576 = G__9639;
continue;
} else {
var role = cljs.core.first.call(null,seq__9573__$1);
var temp__5457__auto___9640__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___9640__$2)){
var spec_9641 = temp__5457__auto___9640__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_9641));
} else {
}


var G__9642 = cljs.core.next.call(null,seq__9573__$1);
var G__9643 = null;
var G__9644 = (0);
var G__9645 = (0);
seq__9573 = G__9642;
chunk__9574 = G__9643;
count__9575 = G__9644;
i__9576 = G__9645;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__9646 = cljs.core.conj.call(null,via,t);
var G__9647 = cljs.core.ex_cause.call(null,t);
via = G__9646;
t = G__9647;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__9650 = datafied_throwable;
var map__9650__$1 = cljs.core.__destructure_map.call(null,map__9650);
var via = cljs.core.get.call(null,map__9650__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__9650__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__9650__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__9651 = cljs.core.last.call(null,via);
var map__9651__$1 = cljs.core.__destructure_map.call(null,map__9651);
var type = cljs.core.get.call(null,map__9651__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__9651__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__9651__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__9652 = data;
var map__9652__$1 = cljs.core.__destructure_map.call(null,map__9652);
var problems = cljs.core.get.call(null,map__9652__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__9652__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__9652__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__9653 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__9653__$1 = cljs.core.__destructure_map.call(null,map__9653);
var top_data = map__9653__$1;
var source = cljs.core.get.call(null,map__9653__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__9654 = phase;
var G__9654__$1 = (((G__9654 instanceof cljs.core.Keyword))?G__9654.fqn:null);
switch (G__9654__$1) {
case "read-source":
var map__9655 = data;
var map__9655__$1 = cljs.core.__destructure_map.call(null,map__9655);
var line = cljs.core.get.call(null,map__9655__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__9655__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__9656 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__9656__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__9656,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__9656);
var G__9656__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__9656__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__9656__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__9656__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__9656__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__9657 = top_data;
var G__9657__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__9657,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__9657);
var G__9657__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__9657__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__9657__$1);
var G__9657__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__9657__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__9657__$2);
var G__9657__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__9657__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__9657__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__9657__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__9657__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__9658 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__9658,(0),null);
var method = cljs.core.nth.call(null,vec__9658,(1),null);
var file = cljs.core.nth.call(null,vec__9658,(2),null);
var line = cljs.core.nth.call(null,vec__9658,(3),null);
var G__9661 = top_data;
var G__9661__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__9661,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__9661);
var G__9661__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__9661__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__9661__$1);
var G__9661__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.call(null,G__9661__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__9661__$2);
var G__9661__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__9661__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__9661__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__9661__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__9661__$4;
}

break;
case "execution":
var vec__9662 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__9662,(0),null);
var method = cljs.core.nth.call(null,vec__9662,(1),null);
var file = cljs.core.nth.call(null,vec__9662,(2),null);
var line = cljs.core.nth.call(null,vec__9662,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__9649_SHARP_){
var or__5043__auto__ = (p1__9649_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__9649_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__9665 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__9665__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__9665,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__9665);
var G__9665__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__9665__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__9665__$1);
var G__9665__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.call(null,G__9665__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__9665__$2);
var G__9665__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__9665__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__9665__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__9665__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__9665__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9654__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__9669){
var map__9670 = p__9669;
var map__9670__$1 = cljs.core.__destructure_map.call(null,map__9670);
var triage_data = map__9670__$1;
var phase = cljs.core.get.call(null,map__9670__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__9670__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__9670__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__9670__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__9670__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__9670__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__9670__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__9670__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__9671 = phase;
var G__9671__$1 = (((G__9671 instanceof cljs.core.Keyword))?G__9671.fqn:null);
switch (G__9671__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9672_9681 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9673_9682 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9674_9683 = true;
var _STAR_print_fn_STAR__temp_val__9675_9684 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9674_9683);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9675_9684);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__9667_SHARP_){
return cljs.core.dissoc.call(null,p1__9667_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9673_9682);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9672_9681);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9676_9685 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9677_9686 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9678_9687 = true;
var _STAR_print_fn_STAR__temp_val__9679_9688 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9678_9687);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9679_9688);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__9668_SHARP_){
return cljs.core.dissoc.call(null,p1__9668_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9677_9686);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9676_9685);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9671__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
