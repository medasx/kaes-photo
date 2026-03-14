(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[77828],{

/***/ 385379:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var nBc=async function(a,b,c){const d=mBc()();try{const e=__c.y(a.Zk.context),f=d.r(await d.s(a.fetch(b.url,{signal:c})));if(!f.ok)throw Error(`Audio file fetch failed with ${f.status}`);const g=d.r(await d.s(f.arrayBuffer()));return new Promise((h,k)=>{e.decodeAudioData(g,h,k)})}finally{d.s()}},pBc=function(a,b,c,d){if(d){var e=a.cache.get(b);e||(e={buffer:c,n_:new Set},c.catch(oBc.wrap(()=>{a.cache.delete(b)})),a.cache.set(b,e));e.n_.add(d);d.addEventListener("abort",()=>{e?.n_.delete(d);e&&e.n_.size===
0&&a.cache.delete(b);e=void 0},{once:!0})}},oBc=__webpack_require__(245307).Fm;var mBc=__webpack_require__(75402)._;var qBc,rBc;qBc=(...a)=>fetch(...a);
rBc=class{async uc(a,b,c){const d=mBc()();try{__c.w(b.ea>=0&&b.K>=0);const m=__c.Ir(this.ek,a);if(m){var e=this.cache.get(a)?.buffer||nBc(this,m,c);pBc(this,a,e,c);var f=d.r(await d.s(e)),g=b.K-f.duration*1E6;if(b.ea===0&&(g>=0||Math.abs(g)<=100))return f;var h=b.K/1E6*f.sampleRate;if(h<=0)return f;var k=new AudioBuffer({length:h,numberOfChannels:f.numberOfChannels,sampleRate:f.sampleRate}),l=Math.floor(f.sampleRate*b.ea/1E6);for(a=0;a<f.numberOfChannels;a++){const n=f.getChannelData(a).subarray(l,
l+h);k.copyToChannel(n,a)}return k}}finally{d.s()}}constructor(a,b,c=qBc){this.Zk=a;this.ek=b;this.fetch=c;this.cache=new Map}};__c.ICa={};__c.ICa.ltb=rBc;
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/2b1d14a992585a84.js.map