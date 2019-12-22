'use strict';(function(root,factory){if(typeof define==="function"&&define.amd){define(factory);}else if(typeof exports==="object"){module.exports=factory();}else{root.ResizeSensor=factory();}}(typeof window!=='undefined'?window:this,function(){if(typeof window==="undefined"){return null;}
var globalWindow=typeof window!='undefined'&&window.Math==Math?window:typeof self!='undefined'&&self.Math==Math?self:Function('return this')();var requestAnimationFrame=globalWindow.requestAnimationFrame||globalWindow.mozRequestAnimationFrame||globalWindow.webkitRequestAnimationFrame||function(fn){return globalWindow.setTimeout(fn,20);};function forEachElement(elements,callback){var elementsType=Object.prototype.toString.call(elements);var isCollectionTyped=('[object Array]'===elementsType||('[object NodeList]'===elementsType)||('[object HTMLCollection]'===elementsType)||('[object Object]'===elementsType)||('undefined'!==typeof jQuery&&elements instanceof jQuery)||('undefined'!==typeof Elements&&elements instanceof Elements));var i=0,j=elements.length;if(isCollectionTyped){for(;i<j;i++){callback(elements[i]);}}else{callback(elements);}}
function getElementSize(element){if(!element.getBoundingClientRect){return{width:element.offsetWidth,height:element.offsetHeight}}
var rect=element.getBoundingClientRect();return{width:Math.round(rect.width),height:Math.round(rect.height)}}
function setStyle(element,style){Object.keys(style).forEach(function(key){element.style[key]=style[key];});}
var ResizeSensor=function(element,callback){function EventQueue(){var q=[];this.add=function(ev){q.push(ev);};var i,j;this.call=function(sizeInfo){for(i=0,j=q.length;i<j;i++){q[i].call(this,sizeInfo);}};this.remove=function(ev){var newQueue=[];for(i=0,j=q.length;i<j;i++){if(q[i]!==ev)newQueue.push(q[i]);}
q=newQueue;};this.length=function(){return q.length;}}
function attachResizeEvent(element,resized){if(!element)return;if(element.resizedAttached){element.resizedAttached.add(resized);return;}
element.resizedAttached=new EventQueue();element.resizedAttached.add(resized);element.resizeSensor=document.createElement('div');element.resizeSensor.dir='ltr';element.resizeSensor.className='resize-sensor';var style={pointerEvents:'none',position:'absolute',left:'0px',top:'0px',right:'0px',bottom:'0px',overflow:'hidden',zIndex:'-1',visibility:'hidden',maxWidth:'100%'};var styleChild={position:'absolute',left:'0px',top:'0px',transition:'0s',};setStyle(element.resizeSensor,style);var expand=document.createElement('div');expand.className='resize-sensor-expand';setStyle(expand,style);var expandChild=document.createElement('div');setStyle(expandChild,styleChild);expand.appendChild(expandChild);var shrink=document.createElement('div');shrink.className='resize-sensor-shrink';setStyle(shrink,style);var shrinkChild=document.createElement('div');setStyle(shrinkChild,styleChild);setStyle(shrinkChild,{width:'200%',height:'200%'});shrink.appendChild(shrinkChild);element.resizeSensor.appendChild(expand);element.resizeSensor.appendChild(shrink);element.appendChild(element.resizeSensor);var computedStyle=window.getComputedStyle(element);var position=computedStyle?computedStyle.getPropertyValue('position'):null;if('absolute'!==position&&'relative'!==position&&'fixed'!==position){element.style.position='relative';}
var dirty,rafId;var size=getElementSize(element);var lastWidth=0;var lastHeight=0;var initialHiddenCheck=true;var lastAnimationFrame=0;var resetExpandShrink=function(){var width=element.offsetWidth;var height=element.offsetHeight;expandChild.style.width=(width+10)+'px';expandChild.style.height=(height+10)+'px';expand.scrollLeft=width+10;expand.scrollTop=height+10;shrink.scrollLeft=width+10;shrink.scrollTop=height+10;};var reset=function(){if(initialHiddenCheck){var invisible=element.offsetWidth===0&&element.offsetHeight===0;if(invisible){if(!lastAnimationFrame){lastAnimationFrame=requestAnimationFrame(function(){lastAnimationFrame=0;reset();});}
return;}else{initialHiddenCheck=false;}}
resetExpandShrink();};element.resizeSensor.resetSensor=reset;var onResized=function(){rafId=0;if(!dirty)return;lastWidth=size.width;lastHeight=size.height;if(element.resizedAttached){element.resizedAttached.call(size);}};var onScroll=function(){size=getElementSize(element);dirty=size.width!==lastWidth||size.height!==lastHeight;if(dirty&&!rafId){rafId=requestAnimationFrame(onResized);}
reset();};var addEvent=function(el,name,cb){if(el.attachEvent){el.attachEvent('on'+name,cb);}else{el.addEventListener(name,cb);}};addEvent(expand,'scroll',onScroll);addEvent(shrink,'scroll',onScroll);requestAnimationFrame(reset);}
forEachElement(element,function(elem){attachResizeEvent(elem,callback);});this.detach=function(ev){ResizeSensor.detach(element,ev);};this.reset=function(){element.resizeSensor.resetSensor();};};ResizeSensor.reset=function(element){forEachElement(element,function(elem){elem.resizeSensor.resetSensor();});};ResizeSensor.detach=function(element,ev){forEachElement(element,function(elem){if(!elem)return;if(elem.resizedAttached&&typeof ev==="function"){elem.resizedAttached.remove(ev);if(elem.resizedAttached.length())return;}
if(elem.resizeSensor){if(elem.contains(elem.resizeSensor)){elem.removeChild(elem.resizeSensor);}
delete elem.resizeSensor;delete elem.resizedAttached;}});};if(typeof MutationObserver!=="undefined"){var observer=new MutationObserver(function(mutations){for(var i in mutations){if(mutations.hasOwnProperty(i)){var items=mutations[i].addedNodes;for(var j=0;j<items.length;j++){if(items[j].resizeSensor){ResizeSensor.reset(items[j]);}}}}});document.addEventListener("DOMContentLoaded",function(event){observer.observe(document.body,{childList:true,subtree:true,});});}
return ResizeSensor;}));