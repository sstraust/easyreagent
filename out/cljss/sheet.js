// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljss.sheet');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('cljss.utils');
goog.require('goog.object');
goog.scope(function(){
cljss.sheet.goog$module$goog$object = goog.module.get('goog.object');
});
cljss.sheet.limit = (65534);
cljss.sheet.make_style_tag = (function cljss$sheet$make_style_tag(){
var tag = goog.dom.createElement("style");
var head = (goog.dom.getElementsByTagNameAndClass("head")[(0)]);
cljss.sheet.goog$module$goog$object.set.call(null,tag,"type","text/css");

goog.dom.appendChild(tag,goog.dom.createTextNode(""));

goog.dom.appendChild(head,tag);

return tag;
});

/**
 * @interface
 */
cljss.sheet.ISheet = function(){};

var cljss$sheet$ISheet$insert_BANG_$dyn_556 = (function (this$,css,cls_name){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (cljss.sheet.insert_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,css,cls_name);
} else {
var m__5389__auto__ = (cljss.sheet.insert_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,css,cls_name);
} else {
throw cljs.core.missing_protocol.call(null,"ISheet.insert!",this$);
}
}
});
cljss.sheet.insert_BANG_ = (function cljss$sheet$insert_BANG_(this$,css,cls_name){
if((((!((this$ == null)))) && ((!((this$.cljss$sheet$ISheet$insert_BANG_$arity$3 == null)))))){
return this$.cljss$sheet$ISheet$insert_BANG_$arity$3(this$,css,cls_name);
} else {
return cljss$sheet$ISheet$insert_BANG_$dyn_556.call(null,this$,css,cls_name);
}
});

var cljss$sheet$ISheet$flush_BANG_$dyn_557 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (cljss.sheet.flush_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (cljss.sheet.flush_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISheet.flush!",this$);
}
}
});
cljss.sheet.flush_BANG_ = (function cljss$sheet$flush_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.cljss$sheet$ISheet$flush_BANG_$arity$1 == null)))))){
return this$.cljss$sheet$ISheet$flush_BANG_$arity$1(this$);
} else {
return cljss$sheet$ISheet$flush_BANG_$dyn_557.call(null,this$);
}
});

var cljss$sheet$ISheet$filled_QMARK_$dyn_558 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (cljss.sheet.filled_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (cljss.sheet.filled_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISheet.filled?",this$);
}
}
});
cljss.sheet.filled_QMARK_ = (function cljss$sheet$filled_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.cljss$sheet$ISheet$filled_QMARK_$arity$1 == null)))))){
return this$.cljss$sheet$ISheet$filled_QMARK_$arity$1(this$);
} else {
return cljss$sheet$ISheet$filled_QMARK_$dyn_558.call(null,this$);
}
});


/**
* @constructor
 * @implements {cljss.sheet.ISheet}
*/
cljss.sheet.Sheet = (function (tag,sheet,cache){
this.tag = tag;
this.sheet = sheet;
this.cache = cache;
});
(cljss.sheet.Sheet.prototype.cljss$sheet$ISheet$ = cljs.core.PROTOCOL_SENTINEL);

(cljss.sheet.Sheet.prototype.cljss$sheet$ISheet$insert_BANG_$arity$3 = (function (this$,rule,cls_name){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljss.sheet.filled_QMARK_.call(null,this$__$1))){
throw (new Error(["A stylesheet can only have ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljss.sheet.limit)," rules"].join('')));
} else {
}

if(cljs.core.truth_(cljs.core.deref.call(null,self__.cache).call(null,cls_name))){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.cache,cljs.core.conj,cls_name);

var rule__$1 = ((cljs.core.ifn_QMARK_.call(null,rule))?rule.call(null):rule);
var rules_count = cljss.sheet.goog$module$goog$object.get.call(null,cljss.sheet.goog$module$goog$object.get.call(null,self__.sheet,"cssRules"),"length");
if(cljss.utils.dev_QMARK_){
return goog.dom.appendChild(self__.tag,goog.dom.createTextNode(rule__$1));
} else {
try{return self__.sheet.insertRule(rule__$1,rules_count);
}catch (e559){var e = e559;
if(cljss.utils.dev_QMARK_){
return console.warn("Illegal CSS rule",rule__$1);
} else {
return null;
}
}}
}
}));

(cljss.sheet.Sheet.prototype.cljss$sheet$ISheet$flush_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.tag.parentNode.removeChild(self__.tag);
}));

(cljss.sheet.Sheet.prototype.cljss$sheet$ISheet$filled_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,self__.cache)),cljss.sheet.limit);
}));

(cljss.sheet.Sheet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"sheet","sheet",-418624267,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
}));

(cljss.sheet.Sheet.cljs$lang$type = true);

(cljss.sheet.Sheet.cljs$lang$ctorStr = "cljss.sheet/Sheet");

(cljss.sheet.Sheet.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljss.sheet/Sheet");
}));

/**
 * Positional factory function for cljss.sheet/Sheet.
 */
cljss.sheet.__GT_Sheet = (function cljss$sheet$__GT_Sheet(tag,sheet,cache){
return (new cljss.sheet.Sheet(tag,sheet,cache));
});

cljss.sheet.create_sheet = (function cljss$sheet$create_sheet(){
var tag = cljss.sheet.make_style_tag.call(null);
var sheet = cljss.sheet.goog$module$goog$object.get.call(null,tag,"sheet");
return (new cljss.sheet.Sheet(tag,sheet,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY)));
});

//# sourceMappingURL=sheet.js.map
