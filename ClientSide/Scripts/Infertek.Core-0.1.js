if(!Array.isArray){Array.isArray=function(a){return Object.prototype.toString.call(a)=="[object Array]"}}if(!Function.isFunction){Function.isFunction=function(a){return Object.prototype.toString.call(a)=="[object Function]"}}var Namespace={Register:function(c){var a;var b="";var e=c.split(".");for(var d=0;d<e.length;d++){if(b!=""){b+="."}b+=e[d];a=this.Exists(b);if(!a){this.Create(b)}}},Create:function(source){eval("window."+source+" = new Object();")},Exists:function(source){var ne=false;eval("try{if("+source+"){ne = true;}else{ne = false;}}catch(err){ne=false;}");return ne}};Namespace.Register("Infertek");Infertek.ScriptManager={LoadScripts:function(d,c){if(d!=null&&Array.isArray(d)){if(d.length>0){var a=0;for(var b in d){$.getScript(d[b],function(){a++;if(a==d.length){if(c!=null&&Function.isFunction(c)){c()}}})}}else{if(c!=null&&Function.isFunction(c)){c()}}}}};