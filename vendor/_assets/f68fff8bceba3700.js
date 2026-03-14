(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[37329],{

/***/ 341086:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var w=__c.w;var Z9c,a$c,$9c,c8;Z9c=function(a){return(Math.ceil(Math.sqrt(Math.max(1,Math.ceil(a/2))*4)/2)*2)**2};
a$c=function(a,b){const c=Math.ceil(b/1E6*200),d=Math.ceil(Math.ceil(b/1E6*a.sampleRate)/c),e=Array.from({length:a.numberOfChannels},(g,h)=>{g=Math.floor(0*a.sampleRate);const k=Math.min(Math.floor((0+b)/1E6*a.sampleRate),a.length);return a.getChannelData(h).subarray(g,k)}),f=new Float32Array(Z9c(c));for(let g=0;g<c;g++){const h=$9c(e,g,d),k=g*2;f[k]=h.max;f[k+1]=h.min}return{buffer:f,Q_:c}};
$9c=function(a,b,c){var d=Math.floor(b*c);b=Math.min(Math.floor((b+1)*c),a[0].length,d+500);c=Infinity;let e=-Infinity;for(;d<b;d++){let f=0;for(let g=0;g<a.length;++g)f+=a[g][d];c=Math.min(c,f);e=Math.max(e,f)}return{min:isFinite(c)?c/a.length:0,max:isFinite(e)?e/a.length:0}};
c8=class{static BHb(a){w(!0);w(!0);w(!0);const b=a.duration*1E6;w(a.duration*1E6>=b,"Duration of {}s exceeds audio length of {}s",b/1E6,a.duration);const {buffer:c,Q_:d}=a$c(a,b);return new c8(c,0,d,200)}trim(a,b){w(a>=0&&b>=0);a=Math.floor(a/1E6*this.daa);return new c8(this.buffer,this.Sqa+a,Math.min(Math.ceil(b/1E6*this.daa),this.Q_-a),this.daa)}split(a){w(a>0);if(a<=1)return[this];const b=Math.ceil(this.Q_/a);return Array.from({length:Math.ceil(a)},(c,d)=>{c=this.Sqa+d*b;return new c8(this.buffer,
c,Math.min(c+b,this.Sqa+this.Q_)-c,this.daa)})}repeat(a){w(a>0);if(a<=1)return this;const b=this.Q_*a,c=new Float32Array(Z9c(b));var d=this.Sqa*2;d=this.buffer.subarray(d,d+this.Q_*2);for(let e=0;e<a;e++)c.set(d,e*d.length);return new c8(c,0,b,this.daa)}constructor(a,b,c,d){this.buffer=a;this.Sqa=b;this.Q_=c;this.daa=d;w(c*2<=a.length)}};__c.BCa={};__c.BCa.Sub=c8;
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/f68fff8bceba3700.js.map