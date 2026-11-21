function d8(J,Z={},...k){let Y=document.createElement(J);for(let[R,Q]of Object.entries(Z)){if(Q==null||Q===!1)continue;if(R==="class")Y.className=String(Q);else if(R.startsWith("on")&&typeof Q==="function")Y.addEventListener(R.slice(2).toLowerCase(),Q);else if(R in Y&&R!=="list")Y[R]=Q;else Y.setAttribute(R,Q===!0?"":String(Q))}for(let R of k)if(R)Y.append(R);return Y}var FZ=(J,Z=document)=>Z.querySelector(J);function ZE(J,Z){try{let k=localStorage.getItem(J);return k?JSON.parse(k):Z}catch{return Z}}function kE(J,Z){try{localStorage.setItem(J,JSON.stringify(Z))}catch{}}var YE=(J)=>new Promise((Z)=>setTimeout(Z,J));var uQ="187";var dQ=0,XY=1,lQ=2;var bZ=1,cQ=2,V1=3,I1=0,Y8=1,N8=2,hZ=0,h1=1,NY=2,$Y=3,KY=4,nQ=5;var O1=100,sQ=101,iQ=102,oQ=103,aQ=104,rQ=200,tQ=201,eQ=202,J9=203,Z9=204,k9=205,Y9=206,R9=207,Q9=208,X9=209,N9=210,$9=211,K9=212,U9=213,W9=214,F9=0,G9=1,q9=2,UY=3,E9=4,B9=5,V9=6,I9=7,O9=0,H9=1,D9=2,f8=0,WY=1,FY=2,GY=3,g1=4,qY=5,EY=6,BY=7;var x1=301,H1=302,s6=303,i6=304,o6=1000,a6=1001,A9=1002,OZ=1003,M9=1004;var m1=1005;var E8=1006,r6=1007;var HZ=1008;var z8=1009,z9=1010,L9=1011,p1=1012,VY=1013,DZ=1014,a8=1015,v8=1016,IY=1017,OY=1018,gZ=1020,_9=35902,w9=35899,C9=1021,T9=1022,r8=1023,D1=1026,AZ=1027,P9=1028,HY=1029,xZ=1030,DY=1031;var AY=1033,t6=33776,e6=33777,Jk=33778,Zk=33779,MY=35840,zY=35841,LY=35842,_Y=35843,wY=36196,CY=37492,TY=37496,PY=37488,SY=37489,kk=37490,jY=37491,fY=37808,vY=37809,yY=37810,bY=37811,hY=37812,gY=37813,xY=37814,mY=37815,pY=37816,uY=37817,dY=37818,lY=37819,cY=37820,nY=37821,sY=36492,iY=36494,oY=36495,aY=36283,rY=36284,Yk=36285,tY=36286;var eY=0,S9=1,mZ="",u1="srgb",JR="srgb-linear",ZR="linear",FJ="srgb";var j9=512,f9=513,v9=514,kR=515,y9=516,b9=517,YR=518,RR=519;var QR=35048;var XR="300 es",NR=2000;function u7(J){for(let Z=J.length-1;Z>=0;--Z)if(J[Z]>=65535)return!0;return!1}function d7(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function E1(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function h9(){let J=E1("canvas");return J.style.display="block",J}var qQ={},B1=null;function $R(...J){let Z="THREE."+J.shift();if(B1)B1("log",Z,...J);else console.log(Z,...J)}function g9(J){let Z=J[0];if(typeof Z==="string"&&Z.startsWith("TSL:")){let k=J[1];if(k&&k.isStackTrace)J[0]+=" "+k.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function b0(...J){J=g9(J);let Z="THREE."+J.shift();if(B1)B1("warn",Z,...J);else{let k=J[0];if(k&&k.isStackTrace)console.warn(k.getError(Z));else console.warn(Z,...J)}}function x0(...J){J=g9(J);let Z="THREE."+J.shift();if(B1)B1("error",Z,...J);else{let k=J[0];if(k&&k.isStackTrace)console.error(k.getError(Z));else console.error(Z,...J)}}function b1(...J){let Z=J.join(" ");if(Z in qQ)return;qQ[Z]=!0,b0(...J)}function x9(J,Z,k){return new Promise(function(Y,R){function Q(){switch(J.clientWaitSync(Z,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:R();break;case J.TIMEOUT_EXPIRED:setTimeout(Q,k);break;default:Y()}}setTimeout(Q,k)})}var m9={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class t8{addEventListener(J,Z){if(this._listeners===void 0)this._listeners={};let k=this._listeners;if(k[J]===void 0)k[J]=[];if(k[J].indexOf(Z)===-1)k[J].push(Z)}hasEventListener(J,Z){let k=this._listeners;if(k===void 0)return!1;return k[J]!==void 0&&k[J].indexOf(Z)!==-1}removeEventListener(J,Z){let k=this._listeners;if(k===void 0)return;let Y=k[J];if(Y!==void 0){let R=Y.indexOf(Z);if(R!==-1)Y.splice(R,1)}}dispatchEvent(J){let Z=this._listeners;if(Z===void 0)return;let k=Z[J.type];if(k!==void 0){J.target=this;let Y=k.slice(0);for(let R=0,Q=Y.length;R<Q;R++)Y[R].call(this,J);J.target=null}}}var oJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var hk=Math.PI/180,d6=180/Math.PI;function d1(){let J=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,k=Math.random()*4294967295|0,Y=Math.random()*4294967295|0;return(oJ[J&255]+oJ[J>>8&255]+oJ[J>>16&255]+oJ[J>>24&255]+"-"+oJ[Z&255]+oJ[Z>>8&255]+"-"+oJ[Z>>16&15|64]+oJ[Z>>24&255]+"-"+oJ[k&63|128]+oJ[k>>8&255]+"-"+oJ[k>>16&255]+oJ[k>>24&255]+oJ[Y&255]+oJ[Y>>8&255]+oJ[Y>>16&255]+oJ[Y>>24&255]).toLowerCase()}function e0(J,Z,k){return Math.max(Z,Math.min(k,J))}function l7(J,Z){return(J%Z+Z)%Z}function gk(J,Z,k){return(1-k)*J+k*Z}function p9(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function KR(J){switch(J.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function c7(J,Z){if(Z.constructor===Float32Array)return J;let k=KR(Z);if(k===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(J/k,-1)}function n7(J,Z){if(Z.constructor===Float32Array)return J;let k=KR(Z);if(k===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(J*k)}class r0{static{this.prototype.isVector2=!0}constructor(J=0,Z=0){this.x=J,this.y=Z}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Z){return this.x=J,this.y=Z,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Z){switch(J){case 0:this.x=Z;break;case 1:this.y=Z;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Z){return this.x=J.x+Z.x,this.y=J.y+Z.y,this}addScaledVector(J,Z){return this.x+=J.x*Z,this.y+=J.y*Z,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Z){return this.x=J.x-Z.x,this.y=J.y-Z.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Z=this.x,k=this.y,Y=J.elements;return this.x=Y[0]*Z+Y[3]*k+Y[6],this.y=Y[1]*Z+Y[4]*k+Y[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Z){return this.x=e0(this.x,J.x,Z.x),this.y=e0(this.y,J.y,Z.y),this}clampScalar(J,Z){return this.x=e0(this.x,J,Z),this.y=e0(this.y,J,Z),this}clampLength(J,Z){let k=this.length();return this.divideScalar(k||1).multiplyScalar(e0(k,J,Z))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Z=Math.sqrt(this.lengthSq()*J.lengthSq());if(Z===0)return Math.PI/2;let k=this.dot(J)/Z;return Math.acos(e0(k,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Z=this.x-J.x,k=this.y-J.y;return Z*Z+k*k}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Z){return this.x+=(J.x-this.x)*Z,this.y+=(J.y-this.y)*Z,this}lerpVectors(J,Z,k){return this.x=J.x+(Z.x-J.x)*k,this.y=J.y+(Z.y-J.y)*k,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Z=0){return this.x=J[Z],this.y=J[Z+1],this}toArray(J=[],Z=0){return J[Z]=this.x,J[Z+1]=this.y,J}fromBufferAttribute(J,Z){return this.x=J.getX(Z),this.y=J.getY(Z),this}rotateAround(J,Z){let k=Math.cos(Z),Y=Math.sin(Z),R=this.x-J.x,Q=this.y-J.y;return this.x=R*k-Q*Y+J.x,this.y=R*Y+Q*k+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class e8{constructor(J=0,Z=0,k=0,Y=1){this.isQuaternion=!0,this._x=J,this._y=Z,this._z=k,this._w=Y}static slerpFlat(J,Z,k,Y,R,Q,X){let N=k[Y+0],$=k[Y+1],K=k[Y+2],W=k[Y+3],U=R[Q+0],F=R[Q+1],G=R[Q+2],B=R[Q+3];if(W!==B||N!==U||$!==F||K!==G){let V=N*U+$*F+K*G+W*B;if(V<0)U=-U,F=-F,G=-G,B=-B,V=-V;let E=1-X;if(V<0.9995){let q=Math.acos(V),O=Math.sin(q);E=Math.sin(E*q)/O,X=Math.sin(X*q)/O,N=N*E+U*X,$=$*E+F*X,K=K*E+G*X,W=W*E+B*X}else{N=N*E+U*X,$=$*E+F*X,K=K*E+G*X,W=W*E+B*X;let q=1/Math.sqrt(N*N+$*$+K*K+W*W);N*=q,$*=q,K*=q,W*=q}}J[Z]=N,J[Z+1]=$,J[Z+2]=K,J[Z+3]=W}static multiplyQuaternionsFlat(J,Z,k,Y,R,Q){let X=k[Y],N=k[Y+1],$=k[Y+2],K=k[Y+3],W=R[Q],U=R[Q+1],F=R[Q+2],G=R[Q+3];return J[Z]=X*G+K*W+N*F-$*U,J[Z+1]=N*G+K*U+$*W-X*F,J[Z+2]=$*G+K*F+X*U-N*W,J[Z+3]=K*G-X*W-N*U-$*F,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Z,k,Y){return this._x=J,this._y=Z,this._z=k,this._w=Y,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Z=!0){let{_x:k,_y:Y,_z:R,_order:Q}=J,X=Math.cos,N=Math.sin,$=X(k/2),K=X(Y/2),W=X(R/2),U=N(k/2),F=N(Y/2),G=N(R/2);switch(Q){case"XYZ":this._x=U*K*W+$*F*G,this._y=$*F*W-U*K*G,this._z=$*K*G+U*F*W,this._w=$*K*W-U*F*G;break;case"YXZ":this._x=U*K*W+$*F*G,this._y=$*F*W-U*K*G,this._z=$*K*G-U*F*W,this._w=$*K*W+U*F*G;break;case"ZXY":this._x=U*K*W-$*F*G,this._y=$*F*W+U*K*G,this._z=$*K*G+U*F*W,this._w=$*K*W-U*F*G;break;case"ZYX":this._x=U*K*W-$*F*G,this._y=$*F*W+U*K*G,this._z=$*K*G-U*F*W,this._w=$*K*W+U*F*G;break;case"YZX":this._x=U*K*W+$*F*G,this._y=$*F*W+U*K*G,this._z=$*K*G-U*F*W,this._w=$*K*W-U*F*G;break;case"XZY":this._x=U*K*W-$*F*G,this._y=$*F*W-U*K*G,this._z=$*K*G+U*F*W,this._w=$*K*W+U*F*G;break;default:b0("Quaternion: .setFromEuler() encountered an unknown order: "+Q)}if(Z===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Z){let k=Z/2,Y=Math.sin(k);return this._x=J.x*Y,this._y=J.y*Y,this._z=J.z*Y,this._w=Math.cos(k),this._onChangeCallback(),this}setFromRotationMatrix(J){let Z=J.elements,k=Z[0],Y=Z[4],R=Z[8],Q=Z[1],X=Z[5],N=Z[9],$=Z[2],K=Z[6],W=Z[10],U=k+X+W;if(U>0){let F=0.5/Math.sqrt(U+1);this._w=0.25/F,this._x=(K-N)*F,this._y=(R-$)*F,this._z=(Q-Y)*F}else if(k>X&&k>W){let F=2*Math.sqrt(1+k-X-W);this._w=(K-N)/F,this._x=0.25*F,this._y=(Y+Q)/F,this._z=(R+$)/F}else if(X>W){let F=2*Math.sqrt(1+X-k-W);this._w=(R-$)/F,this._x=(Y+Q)/F,this._y=0.25*F,this._z=(N+K)/F}else{let F=2*Math.sqrt(1+W-k-X);this._w=(Q-Y)/F,this._x=(R+$)/F,this._y=(N+K)/F,this._z=0.25*F}return this._onChangeCallback(),this}setFromUnitVectors(J,Z){let k=J.dot(Z)+1;if(k<0.00000001)if(k=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=k;else this._x=0,this._y=-J.z,this._z=J.y,this._w=k;else this._x=J.y*Z.z-J.z*Z.y,this._y=J.z*Z.x-J.x*Z.z,this._z=J.x*Z.y-J.y*Z.x,this._w=k;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(e0(this.dot(J),-1,1)))}rotateTowards(J,Z){let k=this.angleTo(J);if(k===0)return this;let Y=Math.min(1,Z/k);return this.slerp(J,Y),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Z){let{_x:k,_y:Y,_z:R,_w:Q}=J,X=Z._x,N=Z._y,$=Z._z,K=Z._w;return this._x=k*K+Q*X+Y*$-R*N,this._y=Y*K+Q*N+R*X-k*$,this._z=R*K+Q*$+k*N-Y*X,this._w=Q*K-k*X-Y*N-R*$,this._onChangeCallback(),this}slerp(J,Z){let{_x:k,_y:Y,_z:R,_w:Q}=J,X=this.dot(J);if(X<0)k=-k,Y=-Y,R=-R,Q=-Q,X=-X;let N=1-Z;if(X<0.9995){let $=Math.acos(X),K=Math.sin($);N=Math.sin(N*$)/K,Z=Math.sin(Z*$)/K,this._x=this._x*N+k*Z,this._y=this._y*N+Y*Z,this._z=this._z*N+R*Z,this._w=this._w*N+Q*Z,this._onChangeCallback()}else this._x=this._x*N+k*Z,this._y=this._y*N+Y*Z,this._z=this._z*N+R*Z,this._w=this._w*N+Q*Z,this.normalize();return this}slerpQuaternions(J,Z,k){return this.copy(J).slerp(Z,k)}random(){let J=2*Math.PI*Math.random(),Z=2*Math.PI*Math.random(),k=Math.random(),Y=Math.sqrt(1-k),R=Math.sqrt(k);return this.set(Y*Math.sin(J),Y*Math.cos(J),R*Math.sin(Z),R*Math.cos(Z))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Z=0){return this._x=J[Z],this._y=J[Z+1],this._z=J[Z+2],this._w=J[Z+3],this._onChangeCallback(),this}toArray(J=[],Z=0){return J[Z]=this._x,J[Z+1]=this._y,J[Z+2]=this._z,J[Z+3]=this._w,J}fromBufferAttribute(J,Z){return this._x=J.getX(Z),this._y=J.getY(Z),this._z=J.getZ(Z),this._w=J.getW(Z),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class d{static{this.prototype.isVector3=!0}constructor(J=0,Z=0,k=0){this.x=J,this.y=Z,this.z=k}set(J,Z,k){if(k===void 0)k=this.z;return this.x=J,this.y=Z,this.z=k,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Z){switch(J){case 0:this.x=Z;break;case 1:this.y=Z;break;case 2:this.z=Z;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Z){return this.x=J.x+Z.x,this.y=J.y+Z.y,this.z=J.z+Z.z,this}addScaledVector(J,Z){return this.x+=J.x*Z,this.y+=J.y*Z,this.z+=J.z*Z,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Z){return this.x=J.x-Z.x,this.y=J.y-Z.y,this.z=J.z-Z.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Z){return this.x=J.x*Z.x,this.y=J.y*Z.y,this.z=J.z*Z.z,this}applyEuler(J){return this.applyQuaternion(EQ.setFromEuler(J))}applyAxisAngle(J,Z){return this.applyQuaternion(EQ.setFromAxisAngle(J,Z))}applyMatrix3(J){let Z=this.x,k=this.y,Y=this.z,R=J.elements;return this.x=R[0]*Z+R[3]*k+R[6]*Y,this.y=R[1]*Z+R[4]*k+R[7]*Y,this.z=R[2]*Z+R[5]*k+R[8]*Y,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Z=this.x,k=this.y,Y=this.z,R=J.elements,Q=1/(R[3]*Z+R[7]*k+R[11]*Y+R[15]);return this.x=(R[0]*Z+R[4]*k+R[8]*Y+R[12])*Q,this.y=(R[1]*Z+R[5]*k+R[9]*Y+R[13])*Q,this.z=(R[2]*Z+R[6]*k+R[10]*Y+R[14])*Q,this}applyQuaternion(J){let Z=this.x,k=this.y,Y=this.z,R=J.x,Q=J.y,X=J.z,N=J.w,$=2*(Q*Y-X*k),K=2*(X*Z-R*Y),W=2*(R*k-Q*Z);return this.x=Z+N*$+Q*W-X*K,this.y=k+N*K+X*$-R*W,this.z=Y+N*W+R*K-Q*$,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Z=this.x,k=this.y,Y=this.z,R=J.elements;return this.x=R[0]*Z+R[4]*k+R[8]*Y,this.y=R[1]*Z+R[5]*k+R[9]*Y,this.z=R[2]*Z+R[6]*k+R[10]*Y,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Z){return this.x=e0(this.x,J.x,Z.x),this.y=e0(this.y,J.y,Z.y),this.z=e0(this.z,J.z,Z.z),this}clampScalar(J,Z){return this.x=e0(this.x,J,Z),this.y=e0(this.y,J,Z),this.z=e0(this.z,J,Z),this}clampLength(J,Z){let k=this.length();return this.divideScalar(k||1).multiplyScalar(e0(k,J,Z))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Z){return this.x+=(J.x-this.x)*Z,this.y+=(J.y-this.y)*Z,this.z+=(J.z-this.z)*Z,this}lerpVectors(J,Z,k){return this.x=J.x+(Z.x-J.x)*k,this.y=J.y+(Z.y-J.y)*k,this.z=J.z+(Z.z-J.z)*k,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Z){let{x:k,y:Y,z:R}=J,Q=Z.x,X=Z.y,N=Z.z;return this.x=Y*N-R*X,this.y=R*Q-k*N,this.z=k*X-Y*Q,this}projectOnVector(J){let Z=J.lengthSq();if(Z===0)return this.set(0,0,0);let k=J.dot(this)/Z;return this.copy(J).multiplyScalar(k)}projectOnPlane(J){return xk.copy(this).projectOnVector(J),this.sub(xk)}reflect(J){return this.sub(xk.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Z=Math.sqrt(this.lengthSq()*J.lengthSq());if(Z===0)return Math.PI/2;let k=this.dot(J)/Z;return Math.acos(e0(k,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Z=this.x-J.x,k=this.y-J.y,Y=this.z-J.z;return Z*Z+k*k+Y*Y}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Z,k){let Y=Math.sin(Z)*J;return this.x=Y*Math.sin(k),this.y=Math.cos(Z)*J,this.z=Y*Math.cos(k),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Z,k){return this.x=J*Math.sin(Z),this.y=k,this.z=J*Math.cos(Z),this}setFromMatrixPosition(J){let Z=J.elements;return this.x=Z[12],this.y=Z[13],this.z=Z[14],this}setFromMatrixScale(J){let Z=this.setFromMatrixColumn(J,0).length(),k=this.setFromMatrixColumn(J,1).length(),Y=this.setFromMatrixColumn(J,2).length();return this.x=Z,this.y=k,this.z=Y,this}setFromMatrixColumn(J,Z){return this.fromArray(J.elements,Z*4)}setFromMatrix3Column(J,Z){return this.fromArray(J.elements,Z*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Z=0){return this.x=J[Z],this.y=J[Z+1],this.z=J[Z+2],this}toArray(J=[],Z=0){return J[Z]=this.x,J[Z+1]=this.y,J[Z+2]=this.z,J}fromBufferAttribute(J,Z){return this.x=J.getX(Z),this.y=J.getY(Z),this.z=J.getZ(Z),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Z=Math.random()*2-1,k=Math.sqrt(1-Z*Z);return this.x=k*Math.cos(J),this.y=Z,this.z=k*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var xk=new d,EQ=new e8;class m0{static{this.prototype.isMatrix3=!0}constructor(J,Z,k,Y,R,Q,X,N,$){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Z,k,Y,R,Q,X,N,$)}set(J,Z,k,Y,R,Q,X,N,$){let K=this.elements;return K[0]=J,K[1]=Y,K[2]=X,K[3]=Z,K[4]=R,K[5]=N,K[6]=k,K[7]=Q,K[8]=$,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Z=this.elements,k=J.elements;return Z[0]=k[0],Z[1]=k[1],Z[2]=k[2],Z[3]=k[3],Z[4]=k[4],Z[5]=k[5],Z[6]=k[6],Z[7]=k[7],Z[8]=k[8],this}extractBasis(J,Z,k){return J.setFromMatrix3Column(this,0),Z.setFromMatrix3Column(this,1),k.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Z=J.elements;return this.set(Z[0],Z[4],Z[8],Z[1],Z[5],Z[9],Z[2],Z[6],Z[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Z){let k=J.elements,Y=Z.elements,R=this.elements,Q=k[0],X=k[3],N=k[6],$=k[1],K=k[4],W=k[7],U=k[2],F=k[5],G=k[8],B=Y[0],V=Y[3],E=Y[6],q=Y[1],O=Y[4],A=Y[7],H=Y[2],_=Y[5],C=Y[8];return R[0]=Q*B+X*q+N*H,R[3]=Q*V+X*O+N*_,R[6]=Q*E+X*A+N*C,R[1]=$*B+K*q+W*H,R[4]=$*V+K*O+W*_,R[7]=$*E+K*A+W*C,R[2]=U*B+F*q+G*H,R[5]=U*V+F*O+G*_,R[8]=U*E+F*A+G*C,this}multiplyScalar(J){let Z=this.elements;return Z[0]*=J,Z[3]*=J,Z[6]*=J,Z[1]*=J,Z[4]*=J,Z[7]*=J,Z[2]*=J,Z[5]*=J,Z[8]*=J,this}determinant(){let J=this.elements,Z=J[0],k=J[1],Y=J[2],R=J[3],Q=J[4],X=J[5],N=J[6],$=J[7],K=J[8];return Z*Q*K-Z*X*$-k*R*K+k*X*N+Y*R*$-Y*Q*N}invert(){let J=this.elements,Z=J[0],k=J[1],Y=J[2],R=J[3],Q=J[4],X=J[5],N=J[6],$=J[7],K=J[8],W=K*Q-X*$,U=X*N-K*R,F=$*R-Q*N,G=Z*W+k*U+Y*F;if(G===0)return this.set(0,0,0,0,0,0,0,0,0);let B=1/G;return J[0]=W*B,J[1]=(Y*$-K*k)*B,J[2]=(X*k-Y*Q)*B,J[3]=U*B,J[4]=(K*Z-Y*N)*B,J[5]=(Y*R-X*Z)*B,J[6]=F*B,J[7]=(k*N-$*Z)*B,J[8]=(Q*Z-k*R)*B,this}transpose(){let J,Z=this.elements;return J=Z[1],Z[1]=Z[3],Z[3]=J,J=Z[2],Z[2]=Z[6],Z[6]=J,J=Z[5],Z[5]=Z[7],Z[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Z=this.elements;return J[0]=Z[0],J[1]=Z[3],J[2]=Z[6],J[3]=Z[1],J[4]=Z[4],J[5]=Z[7],J[6]=Z[2],J[7]=Z[5],J[8]=Z[8],this}setUvTransform(J,Z,k,Y,R,Q,X){let N=Math.cos(R),$=Math.sin(R);return this.set(k*N,k*$,-k*(N*Q+$*X)+Q+J,-Y*$,Y*N,-Y*(-$*Q+N*X)+X+Z,0,0,1),this}scale(J,Z){return b1("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mk.makeScale(J,Z)),this}rotate(J){return b1("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mk.makeRotation(-J)),this}translate(J,Z){return b1("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mk.makeTranslation(J,Z)),this}makeTranslation(J,Z){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Z,0,0,1);return this}makeRotation(J){let Z=Math.cos(J),k=Math.sin(J);return this.set(Z,-k,0,k,Z,0,0,0,1),this}makeScale(J,Z){return this.set(J,0,0,0,Z,0,0,0,1),this}equals(J){let Z=this.elements,k=J.elements;for(let Y=0;Y<9;Y++)if(Z[Y]!==k[Y])return!1;return!0}fromArray(J,Z=0){for(let k=0;k<9;k++)this.elements[k]=J[k+Z];return this}toArray(J=[],Z=0){let k=this.elements;return J[Z]=k[0],J[Z+1]=k[1],J[Z+2]=k[2],J[Z+3]=k[3],J[Z+4]=k[4],J[Z+5]=k[5],J[Z+6]=k[6],J[Z+7]=k[7],J[Z+8]=k[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var mk=new m0,BQ=new m0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),VQ=new m0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function s7(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(R,Q,X){if(this.enabled===!1||Q===X||!Q||!X)return R;if(this.spaces[Q].transfer==="srgb")R.r=o8(R.r),R.g=o8(R.g),R.b=o8(R.b);if(this.spaces[Q].primaries!==this.spaces[X].primaries)R.applyMatrix3(this.spaces[Q].toXYZ),R.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")R.r=q1(R.r),R.g=q1(R.g),R.b=q1(R.b);return R},workingToColorSpace:function(R,Q){return this.convert(R,this.workingColorSpace,Q)},colorSpaceToWorking:function(R,Q){return this.convert(R,Q,this.workingColorSpace)},getPrimaries:function(R){return this.spaces[R].primaries},getTransfer:function(R){if(R==="")return"linear";return this.spaces[R].transfer},getToneMappingMode:function(R){return this.spaces[R].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(R,Q=this.workingColorSpace){return R.fromArray(this.spaces[Q].luminanceCoefficients)},define:function(R){Object.assign(this.spaces,R)},_getMatrix:function(R,Q,X){return R.copy(this.spaces[X].fromXYZ).multiply(this.spaces[Q].toXYZ)},_getDrawingBufferColorSpace:function(R){return this.spaces[R].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(R=this.workingColorSpace){return this.spaces[R].workingColorSpaceConfig.unpackColorSpace}},Z=[0.64,0.33,0.3,0.6,0.15,0.06],k=[0.2126,0.7152,0.0722],Y=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Z,whitePoint:Y,transfer:"linear",toXYZ:BQ,fromXYZ:VQ,luminanceCoefficients:k,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Z,whitePoint:Y,transfer:"srgb",toXYZ:BQ,fromXYZ:VQ,luminanceCoefficients:k,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var a0=s7();function o8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function q1(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var eZ;class UR{static getDataURL(J,Z="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let k;if(J instanceof HTMLCanvasElement)k=J;else{if(eZ===void 0)eZ=E1("canvas");eZ.width=J.width,eZ.height=J.height;let Y=eZ.getContext("2d");if(J instanceof ImageData)Y.putImageData(J,0,0);else Y.drawImage(J,0,0,J.width,J.height);k=eZ}return k.toDataURL(Z)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Z=E1("canvas");Z.width=J.width,Z.height=J.height;let k=Z.getContext("2d");k.drawImage(J,0,0,J.width,J.height);let Y=k.getImageData(0,0,J.width,J.height),R=Y.data;for(let Q=0;Q<R.length;Q++)R[Q]=o8(R[Q]/255)*255;return k.putImageData(Y,0,0),Z}else if(J.data){let Z=J.data.slice(0);for(let k=0;k<Z.length;k++)if(Z instanceof Uint8Array||Z instanceof Uint8ClampedArray)Z[k]=Math.floor(o8(Z[k]/255)*255);else Z[k]=o8(Z[k]);return{data:Z,width:J.width,height:J.height}}else return b0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var i7=0;class l1{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:i7++}),this.uuid=d1(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Z=this.data;if(typeof HTMLVideoElement<"u"&&Z instanceof HTMLVideoElement)J.set(Z.videoWidth,Z.videoHeight,0);else if(typeof VideoFrame<"u"&&Z instanceof VideoFrame)J.set(Z.displayWidth,Z.displayHeight,0);else if(Z!==null)J.set(Z.width||0,Z.height||0,Z.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Z=J===void 0||typeof J==="string";if(!Z&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let k={uuid:this.uuid,url:""},Y=this.data;if(Y!==null){let R;if(Array.isArray(Y)){R=[];for(let Q=0,X=Y.length;Q<X;Q++)if(Y[Q].isDataTexture)R.push(pk(Y[Q].image));else R.push(pk(Y[Q]))}else R=pk(Y);k.url=R}if(!Z)J.images[this.uuid]=k;return k}}function pk(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return UR.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return b0("Texture: Unable to serialize Texture."),{}}var o7=0,uk=new d;class dJ extends t8{constructor(J=dJ.DEFAULT_IMAGE,Z=dJ.DEFAULT_MAPPING,k=1001,Y=1001,R=1006,Q=1008,X=1023,N=1009,$=dJ.DEFAULT_ANISOTROPY,K=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:o7++}),this.uuid=d1(),this.name="",this.source=new l1(J),this.mipmaps=[],this.mapping=Z,this.channel=0,this.wrapS=k,this.wrapT=Y,this.magFilter=R,this.minFilter=Q,this.anisotropy=$,this.format=X,this.internalFormat=null,this.type=N,this.offset=new r0(0,0),this.repeat=new r0(1,1),this.center=new r0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new m0,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=K,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(uk).x}get height(){return this.source.getSize(uk).y}get depth(){return this.source.getSize(uk).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Z){this.updateRanges.push({start:J,count:Z})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.mipmapsAutoUpdate=J.mipmapsAutoUpdate,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isPMREMTexture=J.isPMREMTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Z in J){let k=J[Z];if(k===void 0){b0(`Texture.setValues(): parameter '${Z}' has value of undefined.`);continue}let Y=this[Z];if(Y===void 0){b0(`Texture.setValues(): property '${Z}' does not exist.`);continue}if(Y&&k&&(Y.isVector2&&k.isVector2))Y.copy(k);else if(Y&&k&&(Y.isVector3&&k.isVector3))Y.copy(k);else if(Y&&k&&(Y.isMatrix3&&k.isMatrix3))Y.copy(k);else this[Z]=k}}toJSON(J){let Z=J===void 0||typeof J==="string";if(!Z&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let k={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)k.userData=this.userData;if(!Z)J.textures[this.uuid]=k;return k}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}dJ.DEFAULT_IMAGE=null;dJ.DEFAULT_MAPPING=300;dJ.DEFAULT_ANISOTROPY=1;class IJ{static{this.prototype.isVector4=!0}constructor(J=0,Z=0,k=0,Y=1){this.x=J,this.y=Z,this.z=k,this.w=Y}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Z,k,Y){return this.x=J,this.y=Z,this.z=k,this.w=Y,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Z){switch(J){case 0:this.x=Z;break;case 1:this.y=Z;break;case 2:this.z=Z;break;case 3:this.w=Z;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Z){return this.x=J.x+Z.x,this.y=J.y+Z.y,this.z=J.z+Z.z,this.w=J.w+Z.w,this}addScaledVector(J,Z){return this.x+=J.x*Z,this.y+=J.y*Z,this.z+=J.z*Z,this.w+=J.w*Z,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Z){return this.x=J.x-Z.x,this.y=J.y-Z.y,this.z=J.z-Z.z,this.w=J.w-Z.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Z=this.x,k=this.y,Y=this.z,R=this.w,Q=J.elements;return this.x=Q[0]*Z+Q[4]*k+Q[8]*Y+Q[12]*R,this.y=Q[1]*Z+Q[5]*k+Q[9]*Y+Q[13]*R,this.z=Q[2]*Z+Q[6]*k+Q[10]*Y+Q[14]*R,this.w=Q[3]*Z+Q[7]*k+Q[11]*Y+Q[15]*R,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Z=Math.sqrt(1-J.w*J.w);if(Z<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Z,this.y=J.y/Z,this.z=J.z/Z;return this}setAxisAngleFromRotationMatrix(J){let Z,k,Y,R,Q=0.01,X=0.1,N=J.elements,$=N[0],K=N[4],W=N[8],U=N[1],F=N[5],G=N[9],B=N[2],V=N[6],E=N[10];if(Math.abs(K-U)<0.01&&Math.abs(W-B)<0.01&&Math.abs(G-V)<0.01){if(Math.abs(K+U)<0.1&&Math.abs(W+B)<0.1&&Math.abs(G+V)<0.1&&Math.abs($+F+E-3)<0.1)return this.set(1,0,0,0),this;Z=Math.PI;let O=($+1)/2,A=(F+1)/2,H=(E+1)/2,_=(K+U)/4,C=(W+B)/4,I=(G+V)/4;if(O>A&&O>H)if(O<0.01)k=0,Y=0.707106781,R=0.707106781;else k=Math.sqrt(O),Y=_/k,R=C/k;else if(A>H)if(A<0.01)k=0.707106781,Y=0,R=0.707106781;else Y=Math.sqrt(A),k=_/Y,R=I/Y;else if(H<0.01)k=0.707106781,Y=0.707106781,R=0;else R=Math.sqrt(H),k=C/R,Y=I/R;return this.set(k,Y,R,Z),this}let q=Math.sqrt((V-G)*(V-G)+(W-B)*(W-B)+(U-K)*(U-K));if(Math.abs(q)<0.001)q=1;return this.x=(V-G)/q,this.y=(W-B)/q,this.z=(U-K)/q,this.w=Math.acos(($+F+E-1)/2),this}setFromMatrixPosition(J){let Z=J.elements;return this.x=Z[12],this.y=Z[13],this.z=Z[14],this.w=Z[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Z){return this.x=e0(this.x,J.x,Z.x),this.y=e0(this.y,J.y,Z.y),this.z=e0(this.z,J.z,Z.z),this.w=e0(this.w,J.w,Z.w),this}clampScalar(J,Z){return this.x=e0(this.x,J,Z),this.y=e0(this.y,J,Z),this.z=e0(this.z,J,Z),this.w=e0(this.w,J,Z),this}clampLength(J,Z){let k=this.length();return this.divideScalar(k||1).multiplyScalar(e0(k,J,Z))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Z){return this.x+=(J.x-this.x)*Z,this.y+=(J.y-this.y)*Z,this.z+=(J.z-this.z)*Z,this.w+=(J.w-this.w)*Z,this}lerpVectors(J,Z,k){return this.x=J.x+(Z.x-J.x)*k,this.y=J.y+(Z.y-J.y)*k,this.z=J.z+(Z.z-J.z)*k,this.w=J.w+(Z.w-J.w)*k,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Z=0){return this.x=J[Z],this.y=J[Z+1],this.z=J[Z+2],this.w=J[Z+3],this}toArray(J=[],Z=0){return J[Z]=this.x,J[Z+1]=this.y,J[Z+2]=this.z,J[Z+3]=this.w,J}fromBufferAttribute(J,Z){return this.x=J.getX(Z),this.y=J.getY(Z),this.z=J.getZ(Z),this.w=J.getW(Z),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WR extends t8{constructor(J=1,Z=1,k={}){super();k=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},k),this.isRenderTarget=!0,this.width=J,this.height=Z,this.depth=k.depth,this.scissor=new IJ(0,0,J,Z),this.scissorTest=!1,this.viewport=new IJ(0,0,J,Z),this.textures=[];let Y=k.count;for(let R=0;R<Y;R++)this.textures[R]=new dJ({width:J,height:Z,depth:k.depth}),this.textures[R].isRenderTargetTexture=!0,this.textures[R].renderTarget=this;this._setTextureOptions(k),this.depthBuffer=k.depthBuffer,this.stencilBuffer=k.stencilBuffer,this.resolveColorBuffer=k.resolveColorBuffer,this.resolveDepthBuffer=k.resolveDepthBuffer,this.resolveStencilBuffer=k.resolveStencilBuffer,this.storeMultisampledColorBuffer=k.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=k.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=k.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=k.depthTexture,this.samples=k.samples,this.multiview=k.multiview,this.useArrayDepthTexture=k.useArrayDepthTexture}_setTextureOptions(J={}){let Z={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Z.mapping=J.mapping;if(J.wrapS!==void 0)Z.wrapS=J.wrapS;if(J.wrapT!==void 0)Z.wrapT=J.wrapT;if(J.wrapR!==void 0)Z.wrapR=J.wrapR;if(J.magFilter!==void 0)Z.magFilter=J.magFilter;if(J.minFilter!==void 0)Z.minFilter=J.minFilter;if(J.format!==void 0)Z.format=J.format;if(J.type!==void 0)Z.type=J.type;if(J.anisotropy!==void 0)Z.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Z.colorSpace=J.colorSpace;if(J.flipY!==void 0)Z.flipY=J.flipY;if(J.generateMipmaps!==void 0)Z.generateMipmaps=J.generateMipmaps;if(J.mipmapsAutoUpdate!==void 0)Z.mipmapsAutoUpdate=J.mipmapsAutoUpdate;if(J.internalFormat!==void 0)Z.internalFormat=J.internalFormat;for(let k=0;k<this.textures.length;k++)this.textures[k].setValues(Z)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Z,k=1){if(this.width!==J||this.height!==Z||this.depth!==k){this.width=J,this.height=Z,this.depth=k;for(let Y=0,R=this.textures.length;Y<R;Y++)if(this.textures[Y].image.width=J,this.textures[Y].image.height=Z,this.textures[Y].image.depth=k,this.textures[Y].isData3DTexture!==!0)this.textures[Y].isArrayTexture=this.textures[Y].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Z),this.scissor.set(0,0,J,Z)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Z=0,k=J.textures.length;Z<k;Z++){this.textures[Z]=J.textures[Z].clone(),this.textures[Z].isRenderTargetTexture=!0,this.textures[Z].renderTarget=this;let Y=Object.assign({},J.textures[Z].image);this.textures[Z].source=new l1(Y)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Z=J.depthTexture.clone();Z.renderTarget=null,this.depthTexture=Z}else this.depthTexture=J.depthTexture;else this.depthTexture=null;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class B8 extends WR{constructor(J=1,Z=1,k={}){super(J,Z,k);this.isWebGLRenderTarget=!0}}class Rk extends dJ{constructor(J=null,Z=1,k=1,Y=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Z,height:k,depth:Y},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class FR extends dJ{constructor(J=null,Z=1,k=1,Y=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Z,height:k,depth:Y},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class NJ{static{this.prototype.isMatrix4=!0}constructor(J,Z,k,Y,R,Q,X,N,$,K,W,U,F,G,B,V){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Z,k,Y,R,Q,X,N,$,K,W,U,F,G,B,V)}set(J,Z,k,Y,R,Q,X,N,$,K,W,U,F,G,B,V){let E=this.elements;return E[0]=J,E[4]=Z,E[8]=k,E[12]=Y,E[1]=R,E[5]=Q,E[9]=X,E[13]=N,E[2]=$,E[6]=K,E[10]=W,E[14]=U,E[3]=F,E[7]=G,E[11]=B,E[15]=V,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new NJ().fromArray(this.elements)}copy(J){let Z=this.elements,k=J.elements;return Z[0]=k[0],Z[1]=k[1],Z[2]=k[2],Z[3]=k[3],Z[4]=k[4],Z[5]=k[5],Z[6]=k[6],Z[7]=k[7],Z[8]=k[8],Z[9]=k[9],Z[10]=k[10],Z[11]=k[11],Z[12]=k[12],Z[13]=k[13],Z[14]=k[14],Z[15]=k[15],this}copyPosition(J){let Z=this.elements,k=J.elements;return Z[12]=k[12],Z[13]=k[13],Z[14]=k[14],this}setFromMatrix3(J){let Z=J.elements;return this.set(Z[0],Z[3],Z[6],0,Z[1],Z[4],Z[7],0,Z[2],Z[5],Z[8],0,0,0,0,1),this}extractBasis(J,Z,k){if(this.determinantAffine()===0)return J.set(1,0,0),Z.set(0,1,0),k.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Z.setFromMatrixColumn(this,1),k.setFromMatrixColumn(this,2),this}makeBasis(J,Z,k){return this.set(J.x,Z.x,k.x,0,J.y,Z.y,k.y,0,J.z,Z.z,k.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Z=this.elements,k=J.elements,Y=1/J1.setFromMatrixColumn(J,0).length(),R=1/J1.setFromMatrixColumn(J,1).length(),Q=1/J1.setFromMatrixColumn(J,2).length();return Z[0]=k[0]*Y,Z[1]=k[1]*Y,Z[2]=k[2]*Y,Z[3]=0,Z[4]=k[4]*R,Z[5]=k[5]*R,Z[6]=k[6]*R,Z[7]=0,Z[8]=k[8]*Q,Z[9]=k[9]*Q,Z[10]=k[10]*Q,Z[11]=0,Z[12]=0,Z[13]=0,Z[14]=0,Z[15]=1,this}makeRotationFromEuler(J){let Z=this.elements,k=J.x,Y=J.y,R=J.z,Q=Math.cos(k),X=Math.sin(k),N=Math.cos(Y),$=Math.sin(Y),K=Math.cos(R),W=Math.sin(R);if(J.order==="XYZ"){let U=Q*K,F=Q*W,G=X*K,B=X*W;Z[0]=N*K,Z[4]=-N*W,Z[8]=$,Z[1]=F+G*$,Z[5]=U-B*$,Z[9]=-X*N,Z[2]=B-U*$,Z[6]=G+F*$,Z[10]=Q*N}else if(J.order==="YXZ"){let U=N*K,F=N*W,G=$*K,B=$*W;Z[0]=U+B*X,Z[4]=G*X-F,Z[8]=Q*$,Z[1]=Q*W,Z[5]=Q*K,Z[9]=-X,Z[2]=F*X-G,Z[6]=B+U*X,Z[10]=Q*N}else if(J.order==="ZXY"){let U=N*K,F=N*W,G=$*K,B=$*W;Z[0]=U-B*X,Z[4]=-Q*W,Z[8]=G+F*X,Z[1]=F+G*X,Z[5]=Q*K,Z[9]=B-U*X,Z[2]=-Q*$,Z[6]=X,Z[10]=Q*N}else if(J.order==="ZYX"){let U=Q*K,F=Q*W,G=X*K,B=X*W;Z[0]=N*K,Z[4]=G*$-F,Z[8]=U*$+B,Z[1]=N*W,Z[5]=B*$+U,Z[9]=F*$-G,Z[2]=-$,Z[6]=X*N,Z[10]=Q*N}else if(J.order==="YZX"){let U=Q*N,F=Q*$,G=X*N,B=X*$;Z[0]=N*K,Z[4]=B-U*W,Z[8]=G*W+F,Z[1]=W,Z[5]=Q*K,Z[9]=-X*K,Z[2]=-$*K,Z[6]=F*W+G,Z[10]=U-B*W}else if(J.order==="XZY"){let U=Q*N,F=Q*$,G=X*N,B=X*$;Z[0]=N*K,Z[4]=-W,Z[8]=$*K,Z[1]=U*W+B,Z[5]=Q*K,Z[9]=F*W-G,Z[2]=G*W-F,Z[6]=X*K,Z[10]=B*W+U}return Z[3]=0,Z[7]=0,Z[11]=0,Z[12]=0,Z[13]=0,Z[14]=0,Z[15]=1,this}makeRotationFromQuaternion(J){return this.compose(a7,J,r7)}lookAt(J,Z,k){let Y=this.elements;if(Q8.subVectors(J,Z),Q8.lengthSq()===0)Q8.z=1;if(Q8.normalize(),GZ.crossVectors(k,Q8),GZ.lengthSq()===0){if(Math.abs(k.z)===1)Q8.x+=0.0001;else Q8.z+=0.0001;Q8.normalize(),GZ.crossVectors(k,Q8)}return GZ.normalize(),O6.crossVectors(Q8,GZ),Y[0]=GZ.x,Y[4]=O6.x,Y[8]=Q8.x,Y[1]=GZ.y,Y[5]=O6.y,Y[9]=Q8.y,Y[2]=GZ.z,Y[6]=O6.z,Y[10]=Q8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Z){let k=J.elements,Y=Z.elements,R=this.elements,Q=k[0],X=k[4],N=k[8],$=k[12],K=k[1],W=k[5],U=k[9],F=k[13],G=k[2],B=k[6],V=k[10],E=k[14],q=k[3],O=k[7],A=k[11],H=k[15],_=Y[0],C=Y[4],I=Y[8],M=Y[12],j=Y[1],y=Y[5],P=Y[9],S=Y[13],g=Y[2],w=Y[6],v=Y[10],s=Y[14],h=Y[3],J0=Y[7],l=Y[11],o=Y[15];return R[0]=Q*_+X*j+N*g+$*h,R[4]=Q*C+X*y+N*w+$*J0,R[8]=Q*I+X*P+N*v+$*l,R[12]=Q*M+X*S+N*s+$*o,R[1]=K*_+W*j+U*g+F*h,R[5]=K*C+W*y+U*w+F*J0,R[9]=K*I+W*P+U*v+F*l,R[13]=K*M+W*S+U*s+F*o,R[2]=G*_+B*j+V*g+E*h,R[6]=G*C+B*y+V*w+E*J0,R[10]=G*I+B*P+V*v+E*l,R[14]=G*M+B*S+V*s+E*o,R[3]=q*_+O*j+A*g+H*h,R[7]=q*C+O*y+A*w+H*J0,R[11]=q*I+O*P+A*v+H*l,R[15]=q*M+O*S+A*s+H*o,this}multiplyScalar(J){let Z=this.elements;return Z[0]*=J,Z[4]*=J,Z[8]*=J,Z[12]*=J,Z[1]*=J,Z[5]*=J,Z[9]*=J,Z[13]*=J,Z[2]*=J,Z[6]*=J,Z[10]*=J,Z[14]*=J,Z[3]*=J,Z[7]*=J,Z[11]*=J,Z[15]*=J,this}determinant(){let J=this.elements,Z=J[0],k=J[4],Y=J[8],R=J[12],Q=J[1],X=J[5],N=J[9],$=J[13],K=J[2],W=J[6],U=J[10],F=J[14],G=J[3],B=J[7],V=J[11],E=J[15],q=N*F-$*U,O=X*F-$*W,A=X*U-N*W,H=Q*F-$*K,_=Q*U-N*K,C=Q*W-X*K;return Z*(B*q-V*O+E*A)-k*(G*q-V*H+E*_)+Y*(G*O-B*H+E*C)-R*(G*A-B*_+V*C)}determinantAffine(){let J=this.elements,Z=J[0],k=J[4],Y=J[8],R=J[1],Q=J[5],X=J[9],N=J[2],$=J[6],K=J[10];return Z*(Q*K-X*$)-k*(R*K-X*N)+Y*(R*$-Q*N)}transpose(){let J=this.elements,Z;return Z=J[1],J[1]=J[4],J[4]=Z,Z=J[2],J[2]=J[8],J[8]=Z,Z=J[6],J[6]=J[9],J[9]=Z,Z=J[3],J[3]=J[12],J[12]=Z,Z=J[7],J[7]=J[13],J[13]=Z,Z=J[11],J[11]=J[14],J[14]=Z,this}setPosition(J,Z,k){let Y=this.elements;if(J.isVector3)Y[12]=J.x,Y[13]=J.y,Y[14]=J.z;else Y[12]=J,Y[13]=Z,Y[14]=k;return this}invert(){let J=this.elements,Z=J[0],k=J[1],Y=J[2],R=J[3],Q=J[4],X=J[5],N=J[6],$=J[7],K=J[8],W=J[9],U=J[10],F=J[11],G=J[12],B=J[13],V=J[14],E=J[15],q=Z*X-k*Q,O=Z*N-Y*Q,A=Z*$-R*Q,H=k*N-Y*X,_=k*$-R*X,C=Y*$-R*N,I=K*B-W*G,M=K*V-U*G,j=K*E-F*G,y=W*V-U*B,P=W*E-F*B,S=U*E-F*V,g=q*S-O*P+A*y+H*j-_*M+C*I;if(g===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/g;return J[0]=(X*S-N*P+$*y)*w,J[1]=(Y*P-k*S-R*y)*w,J[2]=(B*C-V*_+E*H)*w,J[3]=(U*_-W*C-F*H)*w,J[4]=(N*j-Q*S-$*M)*w,J[5]=(Z*S-Y*j+R*M)*w,J[6]=(V*A-G*C-E*O)*w,J[7]=(K*C-U*A+F*O)*w,J[8]=(Q*P-X*j+$*I)*w,J[9]=(k*j-Z*P-R*I)*w,J[10]=(G*_-B*A+E*q)*w,J[11]=(W*A-K*_-F*q)*w,J[12]=(X*M-Q*y-N*I)*w,J[13]=(Z*y-k*M+Y*I)*w,J[14]=(B*O-G*H-V*q)*w,J[15]=(K*H-W*O+U*q)*w,this}scale(J){let Z=this.elements,k=J.x,Y=J.y,R=J.z;return Z[0]*=k,Z[4]*=Y,Z[8]*=R,Z[1]*=k,Z[5]*=Y,Z[9]*=R,Z[2]*=k,Z[6]*=Y,Z[10]*=R,Z[3]*=k,Z[7]*=Y,Z[11]*=R,this}getMaxScaleOnAxis(){let J=this.elements,Z=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],k=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Y=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Z,k,Y))}makeTranslation(J,Z,k){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Z,0,0,1,k,0,0,0,1);return this}makeRotationX(J){let Z=Math.cos(J),k=Math.sin(J);return this.set(1,0,0,0,0,Z,-k,0,0,k,Z,0,0,0,0,1),this}makeRotationY(J){let Z=Math.cos(J),k=Math.sin(J);return this.set(Z,0,k,0,0,1,0,0,-k,0,Z,0,0,0,0,1),this}makeRotationZ(J){let Z=Math.cos(J),k=Math.sin(J);return this.set(Z,-k,0,0,k,Z,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Z){let k=Math.cos(Z),Y=Math.sin(Z),R=1-k,Q=J.x,X=J.y,N=J.z,$=R*Q,K=R*X;return this.set($*Q+k,$*X-Y*N,$*N+Y*X,0,$*X+Y*N,K*X+k,K*N-Y*Q,0,$*N-Y*X,K*N+Y*Q,R*N*N+k,0,0,0,0,1),this}makeScale(J,Z,k){return this.set(J,0,0,0,0,Z,0,0,0,0,k,0,0,0,0,1),this}makeShear(J,Z,k,Y,R,Q){return this.set(1,k,R,0,J,1,Q,0,Z,Y,1,0,0,0,0,1),this}compose(J,Z,k){let Y=this.elements,R=Z._x,Q=Z._y,X=Z._z,N=Z._w,$=R+R,K=Q+Q,W=X+X,U=R*$,F=R*K,G=R*W,B=Q*K,V=Q*W,E=X*W,q=N*$,O=N*K,A=N*W,H=k.x,_=k.y,C=k.z;return Y[0]=(1-(B+E))*H,Y[1]=(F+A)*H,Y[2]=(G-O)*H,Y[3]=0,Y[4]=(F-A)*_,Y[5]=(1-(U+E))*_,Y[6]=(V+q)*_,Y[7]=0,Y[8]=(G+O)*C,Y[9]=(V-q)*C,Y[10]=(1-(U+B))*C,Y[11]=0,Y[12]=J.x,Y[13]=J.y,Y[14]=J.z,Y[15]=1,this}decompose(J,Z,k){let Y=this.elements;J.x=Y[12],J.y=Y[13],J.z=Y[14];let R=this.determinantAffine();if(R===0)return k.set(1,1,1),Z.identity(),this;let Q=J1.set(Y[0],Y[1],Y[2]).length(),X=J1.set(Y[4],Y[5],Y[6]).length(),N=J1.set(Y[8],Y[9],Y[10]).length();if(R<0)Q=-Q;H8.copy(this);let $=1/Q,K=1/X,W=1/N;return H8.elements[0]*=$,H8.elements[1]*=$,H8.elements[2]*=$,H8.elements[4]*=K,H8.elements[5]*=K,H8.elements[6]*=K,H8.elements[8]*=W,H8.elements[9]*=W,H8.elements[10]*=W,Z.setFromRotationMatrix(H8),k.x=Q,k.y=X,k.z=N,this}makePerspective(J,Z,k,Y,R,Q,X=2000,N=!1){let $=this.elements,K=2*R/(Z-J),W=2*R/(k-Y),U=(Z+J)/(Z-J),F=(k+Y)/(k-Y),G,B;if(N)G=R/(Q-R),B=Q*R/(Q-R);else if(X===2000)G=-(Q+R)/(Q-R),B=-2*Q*R/(Q-R);else if(X===2001)G=-Q/(Q-R),B=-Q*R/(Q-R);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return $[0]=K,$[4]=0,$[8]=U,$[12]=0,$[1]=0,$[5]=W,$[9]=F,$[13]=0,$[2]=0,$[6]=0,$[10]=G,$[14]=B,$[3]=0,$[7]=0,$[11]=-1,$[15]=0,this}makeOrthographic(J,Z,k,Y,R,Q,X=2000,N=!1){let $=this.elements,K=2/(Z-J),W=2/(k-Y),U=-(Z+J)/(Z-J),F=-(k+Y)/(k-Y),G,B;if(N)G=1/(Q-R),B=Q/(Q-R);else if(X===2000)G=-2/(Q-R),B=-(Q+R)/(Q-R);else if(X===2001)G=-1/(Q-R),B=-R/(Q-R);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return $[0]=K,$[4]=0,$[8]=0,$[12]=U,$[1]=0,$[5]=W,$[9]=0,$[13]=F,$[2]=0,$[6]=0,$[10]=G,$[14]=B,$[3]=0,$[7]=0,$[11]=0,$[15]=1,this}equals(J){let Z=this.elements,k=J.elements;for(let Y=0;Y<16;Y++)if(Z[Y]!==k[Y])return!1;return!0}fromArray(J,Z=0){for(let k=0;k<16;k++)this.elements[k]=J[k+Z];return this}toArray(J=[],Z=0){let k=this.elements;return J[Z]=k[0],J[Z+1]=k[1],J[Z+2]=k[2],J[Z+3]=k[3],J[Z+4]=k[4],J[Z+5]=k[5],J[Z+6]=k[6],J[Z+7]=k[7],J[Z+8]=k[8],J[Z+9]=k[9],J[Z+10]=k[10],J[Z+11]=k[11],J[Z+12]=k[12],J[Z+13]=k[13],J[Z+14]=k[14],J[Z+15]=k[15],J}}var J1=new d,H8=new NJ,a7=new d(0,0,0),r7=new d(1,1,1),GZ=new d,O6=new d,Q8=new d,IQ=new NJ,OQ=new e8;class M8{constructor(J=0,Z=0,k=0,Y=M8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Z,this._z=k,this._order=Y}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Z,k,Y=this._order){return this._x=J,this._y=Z,this._z=k,this._order=Y,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Z=this._order,k=!0){let Y=J.elements,R=Y[0],Q=Y[4],X=Y[8],N=Y[1],$=Y[5],K=Y[9],W=Y[2],U=Y[6],F=Y[10];switch(Z){case"XYZ":if(this._y=Math.asin(e0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-K,F),this._z=Math.atan2(-Q,R);else this._x=Math.atan2(U,$),this._z=0;break;case"YXZ":if(this._x=Math.asin(-e0(K,-1,1)),Math.abs(K)<0.9999999)this._y=Math.atan2(X,F),this._z=Math.atan2(N,$);else this._y=Math.atan2(-W,R),this._z=0;break;case"ZXY":if(this._x=Math.asin(e0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(-W,F),this._z=Math.atan2(-Q,$);else this._y=0,this._z=Math.atan2(N,R);break;case"ZYX":if(this._y=Math.asin(-e0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(U,F),this._z=Math.atan2(N,R);else this._x=0,this._z=Math.atan2(-Q,$);break;case"YZX":if(this._z=Math.asin(e0(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(-K,$),this._y=Math.atan2(-W,R);else this._x=0,this._y=Math.atan2(X,F);break;case"XZY":if(this._z=Math.asin(-e0(Q,-1,1)),Math.abs(Q)<0.9999999)this._x=Math.atan2(U,$),this._y=Math.atan2(X,R);else this._x=Math.atan2(-K,F),this._y=0;break;default:b0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Z)}if(this._order=Z,k===!0)this._onChangeCallback();return this}setFromQuaternion(J,Z,k){return IQ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(IQ,Z,k)}setFromVector3(J,Z=this._order){return this.set(J.x,J.y,J.z,Z)}reorder(J){return OQ.setFromEuler(this),this.setFromQuaternion(OQ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Z=0){return J[Z]=this._x,J[Z+1]=this._y,J[Z+2]=this._z,J[Z+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}M8.DEFAULT_ORDER="XYZ";class Qk{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var t7=0,HQ=new d,Z1=new e8,l8=new NJ,H6=new d,T1=new d,e7=new d,JN=new e8,DQ=new d(1,0,0),AQ=new d(0,1,0),MQ=new d(0,0,1),zQ={type:"added"},ZN={type:"removed"},k1={type:"childadded",child:null},dk={type:"childremoved",child:null};class zJ extends t8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:t7++}),this.uuid=d1(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zJ.DEFAULT_UP.clone();let J=new d,Z=new M8,k=new e8,Y=new d(1,1,1);function R(){k.setFromEuler(Z,!1)}function Q(){Z.setFromQuaternion(k,void 0,!1)}Z._onChange(R),k._onChange(Q),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Z},quaternion:{configurable:!0,enumerable:!0,value:k},scale:{configurable:!0,enumerable:!0,value:Y},modelViewMatrix:{value:new NJ},normalMatrix:{value:new m0}}),this.matrix=new NJ,this.matrixWorld=new NJ,this.matrixAutoUpdate=zJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qk,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Z){this.quaternion.setFromAxisAngle(J,Z)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Z){return Z1.setFromAxisAngle(J,Z),this.quaternion.multiply(Z1),this}rotateOnWorldAxis(J,Z){return Z1.setFromAxisAngle(J,Z),this.quaternion.premultiply(Z1),this}rotateX(J){return this.rotateOnAxis(DQ,J)}rotateY(J){return this.rotateOnAxis(AQ,J)}rotateZ(J){return this.rotateOnAxis(MQ,J)}translateOnAxis(J,Z){return HQ.copy(J).applyQuaternion(this.quaternion),this.position.add(HQ.multiplyScalar(Z)),this}translateX(J){return this.translateOnAxis(DQ,J)}translateY(J){return this.translateOnAxis(AQ,J)}translateZ(J){return this.translateOnAxis(MQ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(l8.copy(this.matrixWorld).invert())}lookAt(J,Z,k){if(J.isVector3)H6.copy(J);else H6.set(J,Z,k);let Y=this.parent;if(this.updateWorldMatrix(!0,!1),T1.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)l8.lookAt(T1,H6,this.up);else l8.lookAt(H6,T1,this.up);if(this.quaternion.setFromRotationMatrix(l8),Y)l8.extractRotation(Y.matrixWorld),Z1.setFromRotationMatrix(l8),this.quaternion.premultiply(Z1.invert())}add(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.add(arguments[Z]);return this}if(J===this)return x0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(zQ),k1.child=J,this.dispatchEvent(k1),k1.child=null;else x0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let k=0;k<arguments.length;k++)this.remove(arguments[k]);return this}let Z=this.children.indexOf(J);if(Z!==-1)J.parent=null,this.children.splice(Z,1),J.dispatchEvent(ZN),dk.child=J,this.dispatchEvent(dk),dk.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),l8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),l8.multiply(J.parent.matrixWorld);return J.applyMatrix4(l8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(zQ),k1.child=J,this.dispatchEvent(k1),k1.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Z){if(this[J]===Z)return this;for(let k=0,Y=this.children.length;k<Y;k++){let Q=this.children[k].getObjectByProperty(J,Z);if(Q!==void 0)return Q}return}getObjectsByProperty(J,Z,k=[]){if(this[J]===Z)k.push(this);let Y=this.children;for(let R=0,Q=Y.length;R<Q;R++)Y[R].getObjectsByProperty(J,Z,k);return k}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(T1,J,e7),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(T1,JN,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Z=this.matrixWorld.elements;return J.set(Z[8],Z[9],Z[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(J){J(this);let Z=this.children;for(let k=0,Y=Z.length;k<Y;k++)Z[k].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Z=this.children;for(let k=0,Y=Z.length;k<Y;k++)Z[k].traverseVisible(J)}traverseAncestors(J){let Z=this.parent;if(Z!==null)J(Z),Z.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Z,y:k,z:Y}=J,R=this.matrix.elements;R[12]+=Z-R[0]*Z-R[4]*k-R[8]*Y,R[13]+=k-R[1]*Z-R[5]*k-R[9]*Y,R[14]+=Y-R[2]*Z-R[6]*k-R[10]*Y}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Z=this.children;for(let k=0,Y=Z.length;k<Y;k++)Z[k].updateMatrixWorld(J)}updateWorldMatrix(J,Z,k=!1){let Y=this.parent;if(J===!0&&Y!==null)Y.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||k){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,k=!0}if(Z===!0){let R=this.children;for(let Q=0,X=R.length;Q<X;Q++)R[Q].updateWorldMatrix(!1,!0,k)}}toJSON(J){let Z=J===void 0||typeof J==="string",k={};if(Z)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},k.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Y={};if(Y.uuid=this.uuid,Y.type=this.type,Y.name=this.name,Y.castShadow=this.castShadow,Y.receiveShadow=this.receiveShadow,Y.visible=this.visible,Y.frustumCulled=this.frustumCulled,Y.renderOrder=this.renderOrder,Y.static=this.static,Y.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Y.userData=this.userData;if(Y.layers=this.layers.mask,Y.matrix=this.matrix.toArray(),Y.up=this.up.toArray(),this.pivot!==null)Y.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Y.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Y.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Y.type="InstancedMesh",Y.count=this.count,Y.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Y.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Y.type="BatchedMesh",Y.perObjectFrustumCulled=this.perObjectFrustumCulled,Y.sortObjects=this.sortObjects,Y.drawRanges=this._drawRanges,Y.reservedRanges=this._reservedRanges,Y.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Y.instanceInfo=this._instanceInfo.map((X)=>({...X})),Y.availableInstanceIds=this._availableInstanceIds.slice(),Y.availableGeometryIds=this._availableGeometryIds.slice(),Y.nextIndexStart=this._nextIndexStart,Y.nextVertexStart=this._nextVertexStart,Y.geometryCount=this._geometryCount,Y.maxInstanceCount=this._maxInstanceCount,Y.maxVertexCount=this._maxVertexCount,Y.maxIndexCount=this._maxIndexCount,Y.geometryInitialized=this._geometryInitialized,Y.matricesTexture=this._matricesTexture.toJSON(J),Y.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Y.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Y.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Y.boundingBox=this.boundingBox.toJSON()}function R(X,N){if(X[N.uuid]===void 0)X[N.uuid]=N.toJSON(J);return N.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Y.background=this.background.toJSON();else if(this.background.isTexture)Y.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Y.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Y.geometry=R(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let N=X.shapes;if(Array.isArray(N))for(let $=0,K=N.length;$<K;$++){let W=N[$];R(J.shapes,W)}else R(J.shapes,N)}}if(this.isSkinnedMesh){if(Y.bindMode=this.bindMode,Y.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)R(J.skeletons,this.skeleton),Y.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let N=0,$=this.material.length;N<$;N++)X.push(R(J.materials,this.material[N]));Y.material=X}else Y.material=R(J.materials,this.material);if(this.children.length>0){Y.children=[];for(let X=0;X<this.children.length;X++)Y.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Y.animations=[];for(let X=0;X<this.animations.length;X++){let N=this.animations[X];Y.animations.push(R(J.animations,N))}}if(Z){let X=Q(J.geometries),N=Q(J.materials),$=Q(J.textures),K=Q(J.images),W=Q(J.shapes),U=Q(J.skeletons),F=Q(J.animations),G=Q(J.nodes);if(X.length>0)k.geometries=X;if(N.length>0)k.materials=N;if($.length>0)k.textures=$;if(K.length>0)k.images=K;if(W.length>0)k.shapes=W;if(U.length>0)k.skeletons=U;if(F.length>0)k.animations=F;if(G.length>0)k.nodes=G}return k.object=Y,k;function Q(X){let N=[];for(let $ in X){let K=X[$];delete K.metadata,N.push(K)}return N}}clone(J){return new this.constructor().copy(this,J)}copy(J,Z=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Z===!0)for(let k=0;k<J.children.length;k++){let Y=J.children[k];this.add(Y.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}zJ.DEFAULT_UP=new d(0,1,0);zJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;zJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class IZ extends zJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var kN={type:"move"};class c1{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new IZ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new IZ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new d,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new d;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new IZ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new d,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new d,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Z=this._hand;if(Z)for(let k of J.hand.values())this._getHandJoint(Z,k)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Z,k){let Y=null,R=null,Q=null,X=this._targetRay,N=this._grip,$=this._hand;if(J&&Z.session.visibilityState!=="visible-blurred"){if($&&J.hand){Q=!0;for(let B of J.hand.values()){let V=Z.getJointPose(B,k),E=this._getHandJoint($,B);if(V!==null)E.matrix.fromArray(V.transform.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale),E.matrixWorldNeedsUpdate=!0,E.jointRadius=V.radius;E.visible=V!==null}let K=$.joints["index-finger-tip"],W=$.joints["thumb-tip"],U=K.position.distanceTo(W.position),F=0.02,G=0.005;if($.inputState.pinching&&U>F+G)$.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!$.inputState.pinching&&U<=F-G)$.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(N!==null&&J.gripSpace){if(R=Z.getPose(J.gripSpace,k),R!==null){if(N.matrix.fromArray(R.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.matrixWorldNeedsUpdate=!0,R.linearVelocity)N.hasLinearVelocity=!0,N.linearVelocity.copy(R.linearVelocity);else N.hasLinearVelocity=!1;if(R.angularVelocity)N.hasAngularVelocity=!0,N.angularVelocity.copy(R.angularVelocity);else N.hasAngularVelocity=!1;if(N.eventsEnabled)N.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Y=Z.getPose(J.targetRaySpace,k),Y===null&&R!==null)Y=R;if(Y!==null){if(X.matrix.fromArray(Y.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.matrixWorldNeedsUpdate=!0,Y.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Y.linearVelocity);else X.hasLinearVelocity=!1;if(Y.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Y.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(kN)}}}if(X!==null)X.visible=Y!==null;if(N!==null)N.visible=R!==null;if($!==null)$.visible=Q!==null;return this}_getHandJoint(J,Z){if(J.joints[Z.jointName]===void 0){let k=new IZ;k.matrixAutoUpdate=!1,k.visible=!1,J.joints[Z.jointName]=k,J.add(k)}return J.joints[Z.jointName]}}var u9={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qZ={h:0,s:0,l:0},D6={h:0,s:0,l:0};function lk(J,Z,k){if(k<0)k+=1;if(k>1)k-=1;if(k<0.16666666666666666)return J+(Z-J)*6*k;if(k<0.5)return Z;if(k<0.6666666666666666)return J+(Z-J)*6*(0.6666666666666666-k);return J}class c0{constructor(J,Z,k){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Z,k)}set(J,Z,k){if(Z===void 0&&k===void 0){let Y=J;if(Y&&Y.isColor)this.copy(Y);else if(typeof Y==="number")this.setHex(Y);else if(typeof Y==="string")this.setStyle(Y)}else this.setRGB(J,Z,k);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Z="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,a0.colorSpaceToWorking(this,Z),this}setRGB(J,Z,k,Y=a0.workingColorSpace){return this.r=J,this.g=Z,this.b=k,a0.colorSpaceToWorking(this,Y),this}setHSL(J,Z,k,Y=a0.workingColorSpace){if(J=l7(J,1),Z=e0(Z,0,1),k=e0(k,0,1),Z===0)this.r=this.g=this.b=k;else{let R=k<=0.5?k*(1+Z):k+Z-k*Z,Q=2*k-R;this.r=lk(Q,R,J+0.3333333333333333),this.g=lk(Q,R,J),this.b=lk(Q,R,J-0.3333333333333333)}return a0.colorSpaceToWorking(this,Y),this}setStyle(J,Z="srgb"){function k(R){if(R===void 0)return;if(parseFloat(R)<1)b0("Color: Alpha component of "+J+" will be ignored.")}let Y;if(Y=/^(\w+)\(([^\)]*)\)/.exec(J)){let R,Q=Y[1],X=Y[2];switch(Q){case"rgb":case"rgba":if(R=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(X))return k(R[4]),this.setRGB(Math.min(255,parseInt(R[1],10))/255,Math.min(255,parseInt(R[2],10))/255,Math.min(255,parseInt(R[3],10))/255,Z);if(R=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(X))return k(R[4]),this.setRGB(Math.min(100,parseFloat(R[1]))/100,Math.min(100,parseFloat(R[2]))/100,Math.min(100,parseFloat(R[3]))/100,Z);break;case"hsl":case"hsla":if(R=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(X))return k(R[4]),this.setHSL(parseFloat(R[1])/360,parseFloat(R[2])/100,parseFloat(R[3])/100,Z);break;default:b0("Color: Unknown color model "+J)}}else if(Y=/^\#([A-Fa-f\d]+)$/.exec(J)){let R=Y[1],Q=R.length;if(Q===3)return this.setRGB(parseInt(R.charAt(0),16)/15,parseInt(R.charAt(1),16)/15,parseInt(R.charAt(2),16)/15,Z);else if(Q===6)return this.setHex(parseInt(R,16),Z);else b0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Z);return this}setColorName(J,Z="srgb"){let k=u9[J.toLowerCase()];if(k!==void 0)this.setHex(k,Z);else b0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=o8(J.r),this.g=o8(J.g),this.b=o8(J.b),this}copyLinearToSRGB(J){return this.r=q1(J.r),this.g=q1(J.g),this.b=q1(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return a0.workingToColorSpace(aJ.copy(this),J),Math.round(e0(aJ.r*255,0,255))*65536+Math.round(e0(aJ.g*255,0,255))*256+Math.round(e0(aJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Z=a0.workingColorSpace){a0.workingToColorSpace(aJ.copy(this),Z);let{r:k,g:Y,b:R}=aJ,Q=Math.max(k,Y,R),X=Math.min(k,Y,R),N,$,K=(X+Q)/2;if(X===Q)N=0,$=0;else{let W=Q-X;switch($=K<=0.5?W/(Q+X):W/(2-Q-X),Q){case k:N=(Y-R)/W+(Y<R?6:0);break;case Y:N=(R-k)/W+2;break;case R:N=(k-Y)/W+4;break}N/=6}return J.h=N,J.s=$,J.l=K,J}getRGB(J,Z=a0.workingColorSpace){return a0.workingToColorSpace(aJ.copy(this),Z),J.r=aJ.r,J.g=aJ.g,J.b=aJ.b,J}getStyle(J="srgb"){a0.workingToColorSpace(aJ.copy(this),J);let{r:Z,g:k,b:Y}=aJ;if(J!=="srgb")return`color(${J} ${Z.toFixed(3)} ${k.toFixed(3)} ${Y.toFixed(3)})`;return`rgb(${Math.round(Z*255)},${Math.round(k*255)},${Math.round(Y*255)})`}offsetHSL(J,Z,k){return this.getHSL(qZ),this.setHSL(qZ.h+J,qZ.s+Z,qZ.l+k)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Z){return this.r=J.r+Z.r,this.g=J.g+Z.g,this.b=J.b+Z.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Z){return this.r+=(J.r-this.r)*Z,this.g+=(J.g-this.g)*Z,this.b+=(J.b-this.b)*Z,this}lerpColors(J,Z,k){return this.r=J.r+(Z.r-J.r)*k,this.g=J.g+(Z.g-J.g)*k,this.b=J.b+(Z.b-J.b)*k,this}lerpHSL(J,Z){this.getHSL(qZ),J.getHSL(D6);let k=gk(qZ.h,D6.h,Z),Y=gk(qZ.s,D6.s,Z),R=gk(qZ.l,D6.l,Z);return this.setHSL(k,Y,R),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Z=this.r,k=this.g,Y=this.b,R=J.elements;return this.r=R[0]*Z+R[3]*k+R[6]*Y,this.g=R[1]*Z+R[4]*k+R[7]*Y,this.b=R[2]*Z+R[5]*k+R[8]*Y,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Z=0){return this.r=J[Z],this.g=J[Z+1],this.b=J[Z+2],this}toArray(J=[],Z=0){return J[Z]=this.r,J[Z+1]=this.g,J[Z+2]=this.b,J}fromBufferAttribute(J,Z){return this.r=J.getX(Z),this.g=J.getY(Z),this.b=J.getZ(Z),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var aJ=new c0;c0.NAMES=u9;class n1{constructor(J,Z=1,k=1000){this.isFog=!0,this.name="",this.color=new c0(J),this.near=Z,this.far=k}clone(){return new n1(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xk extends zJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new M8,this.environmentIntensity=1,this.environmentRotation=new M8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Z){return super.copy(J,Z),this.background=J.background!==null?J.background.clone():null,this.environment=J.environment!==null?J.environment.clone():null,this.fog=J.fog!==null?J.fog.clone():null,this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),this.overrideMaterial=J.overrideMaterial!==null?J.overrideMaterial.clone():null,this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Z=super.toJSON(J);if(this.fog!==null)Z.object.fog=this.fog.toJSON();return Z.object.backgroundBlurriness=this.backgroundBlurriness,Z.object.backgroundIntensity=this.backgroundIntensity,Z.object.backgroundRotation=this.backgroundRotation.toArray(),Z.object.environmentIntensity=this.environmentIntensity,Z.object.environmentRotation=this.environmentRotation.toArray(),Z}}var D8=new d,c8=new d,ck=new d,n8=new d,Y1=new d,R1=new d,LQ=new d,nk=new d,sk=new d,ik=new d,ok=new IJ,ak=new IJ,rk=new IJ;class G8{constructor(J=new d,Z=new d,k=new d){this.a=J,this.b=Z,this.c=k}static getNormal(J,Z,k,Y){Y.subVectors(k,Z),D8.subVectors(J,Z),Y.cross(D8);let R=Y.lengthSq();if(R>0)return Y.multiplyScalar(1/Math.sqrt(R));return Y.set(0,0,0)}static getBarycoord(J,Z,k,Y,R){D8.subVectors(Y,Z),c8.subVectors(k,Z),ck.subVectors(J,Z);let Q=D8.dot(D8),X=D8.dot(c8),N=D8.dot(ck),$=c8.dot(c8),K=c8.dot(ck),W=Q*$-X*X;if(W===0)return R.set(0,0,0),null;let U=1/W,F=($*N-X*K)*U,G=(Q*K-X*N)*U;return R.set(1-F-G,G,F)}static containsPoint(J,Z,k,Y){if(this.getBarycoord(J,Z,k,Y,n8)===null)return!1;return n8.x>=0&&n8.y>=0&&n8.x+n8.y<=1}static getInterpolation(J,Z,k,Y,R,Q,X,N){if(this.getBarycoord(J,Z,k,Y,n8)===null){if(N.x=0,N.y=0,"z"in N)N.z=0;if("w"in N)N.w=0;return null}return N.setScalar(0),N.addScaledVector(R,n8.x),N.addScaledVector(Q,n8.y),N.addScaledVector(X,n8.z),N}static getInterpolatedAttribute(J,Z,k,Y,R,Q){return ok.setScalar(0),ak.setScalar(0),rk.setScalar(0),ok.fromBufferAttribute(J,Z),ak.fromBufferAttribute(J,k),rk.fromBufferAttribute(J,Y),Q.setScalar(0),Q.addScaledVector(ok,R.x),Q.addScaledVector(ak,R.y),Q.addScaledVector(rk,R.z),Q}static isFrontFacing(J,Z,k,Y){return D8.subVectors(k,Z),c8.subVectors(J,Z),D8.cross(c8).dot(Y)<0}set(J,Z,k){return this.a.copy(J),this.b.copy(Z),this.c.copy(k),this}setFromPointsAndIndices(J,Z,k,Y){return this.a.copy(J[Z]),this.b.copy(J[k]),this.c.copy(J[Y]),this}setFromAttributeAndIndices(J,Z,k,Y){return this.a.fromBufferAttribute(J,Z),this.b.fromBufferAttribute(J,k),this.c.fromBufferAttribute(J,Y),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return D8.subVectors(this.c,this.b),c8.subVectors(this.a,this.b),D8.cross(c8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return G8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Z){return G8.getBarycoord(J,this.a,this.b,this.c,Z)}getInterpolation(J,Z,k,Y,R){return G8.getInterpolation(J,this.a,this.b,this.c,Z,k,Y,R)}containsPoint(J){return G8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return G8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Z){let k=this.a,Y=this.b,R=this.c,Q,X;Y1.subVectors(Y,k),R1.subVectors(R,k),nk.subVectors(J,k);let N=Y1.dot(nk),$=R1.dot(nk);if(N<=0&&$<=0)return Z.copy(k);sk.subVectors(J,Y);let K=Y1.dot(sk),W=R1.dot(sk);if(K>=0&&W<=K)return Z.copy(Y);let U=N*W-K*$;if(U<=0&&N>=0&&K<=0&&N-K>0)return Q=N/(N-K),Z.copy(k).addScaledVector(Y1,Q);ik.subVectors(J,R);let F=Y1.dot(ik),G=R1.dot(ik);if(G>=0&&F<=G)return Z.copy(R);let B=F*$-N*G;if(B<=0&&$>=0&&G<=0)return X=$/($-G),Z.copy(k).addScaledVector(R1,X);let V=K*G-F*W;if(V<=0&&W-K>=0&&F-G>=0)return LQ.subVectors(R,Y),X=(W-K)/(W-K+(F-G)),Z.copy(Y).addScaledVector(LQ,X);let E=1/(V+B+U);return Q=B*E,X=U*E,Z.copy(k).addScaledVector(Y1,Q).addScaledVector(R1,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class JZ{constructor(J=new d(1/0,1/0,1/0),Z=new d(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Z}set(J,Z){return this.min.copy(J),this.max.copy(Z),this}setFromArray(J){this.makeEmpty();for(let Z=0,k=J.length;Z<k;Z+=3)this.expandByPoint(A8.fromArray(J,Z));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Z=0,k=J.count;Z<k;Z++)this.expandByPoint(A8.fromBufferAttribute(J,Z));return this}setFromPoints(J){this.makeEmpty();for(let Z=0,k=J.length;Z<k;Z++)this.expandByPoint(J[Z]);return this}setFromCenterAndSize(J,Z){let k=A8.copy(Z).multiplyScalar(0.5);return this.min.copy(J).sub(k),this.max.copy(J).add(k),this}setFromObject(J,Z=!1){return this.makeEmpty(),this.expandByObject(J,Z)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Z=!1){J.updateWorldMatrix(!1,!1);let k=J.geometry;if(k!==void 0){let R=k.getAttribute("position");if(Z===!0&&R!==void 0&&J.isInstancedMesh!==!0&&J.isBatchedMesh!==!0)for(let Q=0,X=R.count;Q<X;Q++){if(J.isMesh===!0)J.getVertexPosition(Q,A8);else A8.fromBufferAttribute(R,Q);A8.applyMatrix4(J.matrixWorld),this.expandByPoint(A8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();A6.copy(J.boundingBox)}else{if(k.boundingBox===null)k.computeBoundingBox();A6.copy(k.boundingBox)}A6.applyMatrix4(J.matrixWorld),this.union(A6)}}let Y=J.children;for(let R=0,Q=Y.length;R<Q;R++)this.expandByObject(Y[R],Z);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Z){return Z.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,A8),A8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Z,k;if(J.normal.x>0)Z=J.normal.x*this.min.x,k=J.normal.x*this.max.x;else Z=J.normal.x*this.max.x,k=J.normal.x*this.min.x;if(J.normal.y>0)Z+=J.normal.y*this.min.y,k+=J.normal.y*this.max.y;else Z+=J.normal.y*this.max.y,k+=J.normal.y*this.min.y;if(J.normal.z>0)Z+=J.normal.z*this.min.z,k+=J.normal.z*this.max.z;else Z+=J.normal.z*this.max.z,k+=J.normal.z*this.min.z;return Z<=-J.constant&&k>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(P1),M6.subVectors(this.max,P1),Q1.subVectors(J.a,P1),X1.subVectors(J.b,P1),N1.subVectors(J.c,P1),EZ.subVectors(X1,Q1),BZ.subVectors(N1,X1),SZ.subVectors(Q1,N1);let Z=[0,-EZ.z,EZ.y,0,-BZ.z,BZ.y,0,-SZ.z,SZ.y,EZ.z,0,-EZ.x,BZ.z,0,-BZ.x,SZ.z,0,-SZ.x,-EZ.y,EZ.x,0,-BZ.y,BZ.x,0,-SZ.y,SZ.x,0];if(!tk(Z,Q1,X1,N1,M6))return!1;if(Z=[1,0,0,0,1,0,0,0,1],!tk(Z,Q1,X1,N1,M6))return!1;return z6.crossVectors(EZ,BZ),Z=[z6.x,z6.y,z6.z],tk(Z,Q1,X1,N1,M6)}clampPoint(J,Z){return Z.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,A8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(A8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return s8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),s8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),s8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),s8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),s8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),s8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),s8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),s8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(s8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var s8=[new d,new d,new d,new d,new d,new d,new d,new d],A8=new d,A6=new JZ,Q1=new d,X1=new d,N1=new d,EZ=new d,BZ=new d,SZ=new d,P1=new d,M6=new d,z6=new d,jZ=new d;function tk(J,Z,k,Y,R){for(let Q=0,X=J.length-3;Q<=X;Q+=3){jZ.fromArray(J,Q);let N=R.x*Math.abs(jZ.x)+R.y*Math.abs(jZ.y)+R.z*Math.abs(jZ.z),$=Z.dot(jZ),K=k.dot(jZ),W=Y.dot(jZ);if(Math.max(-Math.max($,K,W),Math.min($,K,W))>N)return!1}return!0}var wJ=new d,L6=new r0,YN=0;class q8 extends t8{constructor(J,Z,k=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YN++}),this.name="",this.array=J,this.itemSize=Z,this.count=J!==void 0?J.length/Z:0,this.normalized=k,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=J!==void 0?KR(J):void 0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Z){this.updateRanges.push({start:J,count:Z})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this._normalizationScale=J._normalizationScale,this}copyAt(J,Z,k){J*=this.itemSize,k*=Z.itemSize;for(let Y=0,R=this.itemSize;Y<R;Y++)this.array[J+Y]=Z.array[k+Y];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Z=0,k=this.count;Z<k;Z++)L6.fromBufferAttribute(this,Z),L6.applyMatrix3(J),this.setXY(Z,L6.x,L6.y);else if(this.itemSize===3)for(let Z=0,k=this.count;Z<k;Z++)wJ.fromBufferAttribute(this,Z),wJ.applyMatrix3(J),this.setXYZ(Z,wJ.x,wJ.y,wJ.z);return this}applyMatrix4(J){for(let Z=0,k=this.count;Z<k;Z++)wJ.fromBufferAttribute(this,Z),wJ.applyMatrix4(J),this.setXYZ(Z,wJ.x,wJ.y,wJ.z);return this}applyNormalMatrix(J){for(let Z=0,k=this.count;Z<k;Z++)wJ.fromBufferAttribute(this,Z),wJ.applyNormalMatrix(J),this.setXYZ(Z,wJ.x,wJ.y,wJ.z);return this}transformDirection(J){for(let Z=0,k=this.count;Z<k;Z++)wJ.fromBufferAttribute(this,Z),wJ.transformDirection(J),this.setXYZ(Z,wJ.x,wJ.y,wJ.z);return this}set(J,Z=0){return this.array.set(J,Z),this}getComponent(J,Z){let k=this.array[J*this.itemSize+Z];if(this.normalized)k=this._denormalize(k);return k}setComponent(J,Z,k){if(this.normalized)k=this._normalize(k);return this.array[J*this.itemSize+Z]=k,this}getX(J){let Z=this.array[J*this.itemSize];if(this.normalized)Z=this._denormalize(Z);return Z}setX(J,Z){if(this.normalized)Z=this._normalize(Z);return this.array[J*this.itemSize]=Z,this}getY(J){let Z=this.array[J*this.itemSize+1];if(this.normalized)Z=this._denormalize(Z);return Z}setY(J,Z){if(this.normalized)Z=this._normalize(Z);return this.array[J*this.itemSize+1]=Z,this}getZ(J){let Z=this.array[J*this.itemSize+2];if(this.normalized)Z=this._denormalize(Z);return Z}setZ(J,Z){if(this.normalized)Z=this._normalize(Z);return this.array[J*this.itemSize+2]=Z,this}getW(J){let Z=this.array[J*this.itemSize+3];if(this.normalized)Z=this._denormalize(Z);return Z}setW(J,Z){if(this.normalized)Z=this._normalize(Z);return this.array[J*this.itemSize+3]=Z,this}setXY(J,Z,k){if(J*=this.itemSize,this.normalized)Z=this._normalize(Z),k=this._normalize(k);return this.array[J+0]=Z,this.array[J+1]=k,this}setXYZ(J,Z,k,Y){if(J*=this.itemSize,this.normalized)Z=this._normalize(Z),k=this._normalize(k),Y=this._normalize(Y);return this.array[J+0]=Z,this.array[J+1]=k,this.array[J+2]=Y,this}setXYZW(J,Z,k,Y,R){if(J*=this.itemSize,this.normalized)Z=this._normalize(Z),k=this._normalize(k),Y=this._normalize(Y),R=this._normalize(R);return this.array[J+0]=Z,this.array[J+1]=k,this.array[J+2]=Y,this.array[J+3]=R,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(J){let Z=this._normalizationScale;return Z!==void 0?Math.max(J/Z,-1):c7(J,this.array)}_normalize(J){let Z=this._normalizationScale;return Z!==void 0?Math.round(J*Z):n7(J,this.array)}}class Nk extends q8{constructor(J,Z,k){super(new Uint16Array(J),Z,k)}}class $k extends q8{constructor(J,Z,k){super(new Uint32Array(J),Z,k)}}class mJ extends q8{constructor(J,Z,k){super(new Float32Array(J),Z,k)}}var RN=new JZ,S1=new d,ek=new d;class MZ{constructor(J=new d,Z=-1){this.isSphere=!0,this.center=J,this.radius=Z}set(J,Z){return this.center.copy(J),this.radius=Z,this}setFromPoints(J,Z){let k=this.center;if(Z!==void 0)k.copy(Z);else RN.setFromPoints(J).getCenter(k);let Y=0;for(let R=0,Q=J.length;R<Q;R++)Y=Math.max(Y,k.distanceToSquared(J[R]));return this.radius=Math.sqrt(Y),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Z=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Z*Z}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Z){let k=this.center.distanceToSquared(J);if(Z.copy(J),k>this.radius*this.radius)Z.sub(this.center).normalize(),Z.multiplyScalar(this.radius).add(this.center);return Z}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;S1.subVectors(J,this.center);let Z=S1.lengthSq();if(Z>this.radius*this.radius){let k=Math.sqrt(Z),Y=(k-this.radius)*0.5;this.center.addScaledVector(S1,Y/k),this.radius+=Y}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else ek.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(S1.copy(J.center).add(ek)),this.expandByPoint(S1.copy(J.center).sub(ek));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var QN=0,F8=new NJ,JY=new zJ,$1=new d,X8=new JZ,j1=new JZ,xJ=new d;class $8 extends t8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QN++}),this.uuid=d1(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((u7(J))?$k:Nk)(J,1);else this.index=J;return this}setIndirect(J,Z=0){return this.indirect=J,this.indirectOffset=Z,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Z){return this.attributes[J]=Z,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Z,k=0){this.groups.push({start:J,count:Z,materialIndex:k})}clearGroups(){this.groups=[]}setDrawRange(J,Z){this.drawRange.start=J,this.drawRange.count=Z}applyMatrix4(J){let Z=this.attributes.position;if(Z!==void 0)Z.applyMatrix4(J),Z.needsUpdate=!0;let k=this.attributes.normal;if(k!==void 0){let R=new m0().getNormalMatrix(J);k.applyNormalMatrix(R),k.needsUpdate=!0}let Y=this.attributes.tangent;if(Y!==void 0)Y.transformDirection(J),Y.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return F8.makeRotationFromQuaternion(J),this.applyMatrix4(F8),this}rotateX(J){return F8.makeRotationX(J),this.applyMatrix4(F8),this}rotateY(J){return F8.makeRotationY(J),this.applyMatrix4(F8),this}rotateZ(J){return F8.makeRotationZ(J),this.applyMatrix4(F8),this}translate(J,Z,k){return F8.makeTranslation(J,Z,k),this.applyMatrix4(F8),this}scale(J,Z,k){return F8.makeScale(J,Z,k),this.applyMatrix4(F8),this}lookAt(J){return JY.lookAt(J),JY.updateMatrix(),this.applyMatrix4(JY.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($1).negate(),this.translate($1.x,$1.y,$1.z),this}setFromPoints(J){let Z=this.getAttribute("position");if(Z===void 0){let k=[];for(let Y=0,R=J.length;Y<R;Y++){let Q=J[Y];k.push(Q.x,Q.y,Q.z||0)}this.setAttribute("position",new mJ(k,3))}else{let k=Math.min(J.length,Z.count);for(let Y=0;Y<k;Y++){let R=J[Y];Z.setXYZ(Y,R.x,R.y,R.z||0)}if(J.length>Z.count)b0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Z.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new JZ;let J=this.attributes.position,Z=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){x0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new d(-1/0,-1/0,-1/0),new d(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Z)for(let k=0,Y=Z.length;k<Y;k++){let R=Z[k];if(X8.setFromBufferAttribute(R),this.morphTargetsRelative)xJ.addVectors(this.boundingBox.min,X8.min),this.boundingBox.expandByPoint(xJ),xJ.addVectors(this.boundingBox.max,X8.max),this.boundingBox.expandByPoint(xJ);else this.boundingBox.expandByPoint(X8.min),this.boundingBox.expandByPoint(X8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))x0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new MZ;let J=this.attributes.position,Z=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){x0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new d,1/0);return}if(J){let k=this.boundingSphere.center;if(X8.setFromBufferAttribute(J),Z)for(let R=0,Q=Z.length;R<Q;R++){let X=Z[R];if(j1.setFromBufferAttribute(X),this.morphTargetsRelative)xJ.addVectors(X8.min,j1.min),X8.expandByPoint(xJ),xJ.addVectors(X8.max,j1.max),X8.expandByPoint(xJ);else X8.expandByPoint(j1.min),X8.expandByPoint(j1.max)}X8.getCenter(k);let Y=0;for(let R=0,Q=J.count;R<Q;R++)xJ.fromBufferAttribute(J,R),Y=Math.max(Y,k.distanceToSquared(xJ));if(Z)for(let R=0,Q=Z.length;R<Q;R++){let X=Z[R],N=this.morphTargetsRelative;for(let $=0,K=X.count;$<K;$++){if(xJ.fromBufferAttribute(X,$),N)$1.fromBufferAttribute(J,$),xJ.add($1);Y=Math.max(Y,k.distanceToSquared(xJ))}}if(this.boundingSphere.radius=Math.sqrt(Y),isNaN(this.boundingSphere.radius))x0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Z=this.attributes;if(J===null||Z.position===void 0||Z.normal===void 0||Z.uv===void 0){x0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:k,normal:Y,uv:R}=Z,Q=this.getAttribute("tangent");if(Q===void 0||Q.count!==k.count)Q=new q8(new Float32Array(4*k.count),4),this.setAttribute("tangent",Q);let X=[],N=[],$=new Uint8Array(k.count);for(let M=0;M<k.count;M++)X[M]=new d,N[M]=new d;let K=new d,W=new d,U=new d,F=new r0,G=new r0,B=new r0,V=new d,E=new d;function q(M,j,y){$[M]=$[j]=$[y]=1,K.fromBufferAttribute(k,M),W.fromBufferAttribute(k,j),U.fromBufferAttribute(k,y),F.fromBufferAttribute(R,M),G.fromBufferAttribute(R,j),B.fromBufferAttribute(R,y),W.sub(K),U.sub(K),G.sub(F),B.sub(F);let P=1/(G.x*B.y-B.x*G.y);if(!isFinite(P))return;V.copy(W).multiplyScalar(B.y).addScaledVector(U,-G.y).multiplyScalar(P),E.copy(U).multiplyScalar(G.x).addScaledVector(W,-B.x).multiplyScalar(P),X[M].add(V),X[j].add(V),X[y].add(V),N[M].add(E),N[j].add(E),N[y].add(E)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let M=0,j=O.length;M<j;++M){let y=O[M],P=y.start,S=y.count;for(let g=P,w=P+S;g<w;g+=3)q(J.getX(g+0),J.getX(g+1),J.getX(g+2))}let A=new d,H=new d,_=new d,C=new d;function I(M){_.fromBufferAttribute(Y,M),C.copy(_);let j=X[M];A.copy(j),A.sub(_.multiplyScalar(_.dot(j))).normalize(),H.crossVectors(C,j);let P=H.dot(N[M])<0?-1:1;Q.setXYZW(M,A.x,A.y,A.z,P)}for(let M=0,j=k.count;M<j;++M)if($[M])I(M);this._transformed=!0}computeVertexNormals(){let J=this.index,Z=this.getAttribute("position");if(Z!==void 0){let k=this.getAttribute("normal");if(k===void 0||k.count!==Z.count)k=new q8(new Float32Array(Z.count*3),3),this.setAttribute("normal",k);else for(let U=0,F=k.count;U<F;U++)k.setXYZ(U,0,0,0);let Y=new d,R=new d,Q=new d,X=new d,N=new d,$=new d,K=new d,W=new d;if(J)for(let U=0,F=J.count;U<F;U+=3){let G=J.getX(U+0),B=J.getX(U+1),V=J.getX(U+2);Y.fromBufferAttribute(Z,G),R.fromBufferAttribute(Z,B),Q.fromBufferAttribute(Z,V),K.subVectors(Q,R),W.subVectors(Y,R),K.cross(W),X.fromBufferAttribute(k,G),N.fromBufferAttribute(k,B),$.fromBufferAttribute(k,V),X.add(K),N.add(K),$.add(K),k.setXYZ(G,X.x,X.y,X.z),k.setXYZ(B,N.x,N.y,N.z),k.setXYZ(V,$.x,$.y,$.z)}else for(let U=0,F=Z.count;U<F;U+=3)Y.fromBufferAttribute(Z,U+0),R.fromBufferAttribute(Z,U+1),Q.fromBufferAttribute(Z,U+2),K.subVectors(Q,R),W.subVectors(Y,R),K.cross(W),k.setXYZ(U+0,K.x,K.y,K.z),k.setXYZ(U+1,K.x,K.y,K.z),k.setXYZ(U+2,K.x,K.y,K.z);this.normalizeNormals(),k.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Z=0,k=J.count;Z<k;Z++)xJ.fromBufferAttribute(J,Z),xJ.normalize(),J.setXYZ(Z,xJ.x,xJ.y,xJ.z)}toNonIndexed(){function J(X,N){let{array:$,itemSize:K,normalized:W}=X,U=new $.constructor(N.length*K),F=0,G=0;for(let B=0,V=N.length;B<V;B++){if(X.isInterleavedBufferAttribute)F=N[B]*X.data.stride+X.offset;else F=N[B]*K;for(let E=0;E<K;E++)U[G++]=$[F++]}return new q8(U,K,W)}if(this.index===null)return b0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Z=new $8,k=this.index.array,Y=this.attributes;for(let X in Y){let N=Y[X],$=J(N,k);Z.setAttribute(X,$)}let R=this.morphAttributes;for(let X in R){let N=[],$=R[X];for(let K=0,W=$.length;K<W;K++){let U=$[K],F=J(U,k);N.push(F)}Z.morphAttributes[X]=N}Z.morphTargetsRelative=this.morphTargetsRelative;let Q=this.groups;for(let X=0,N=Q.length;X<N;X++){let $=Q[X];Z.addGroup($.start,$.count,$.materialIndex)}return Z}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let N=this.parameters;for(let $ in N)if(N[$]!==void 0)J[$]=N[$];return J}J.data={attributes:{}};let Z=this.index;if(Z!==null)J.data.index={type:Z.array.constructor.name,array:Array.prototype.slice.call(Z.array)};let k=this.attributes;for(let N in k){let $=k[N];J.data.attributes[N]=$.toJSON(J.data)}let Y={},R=!1;for(let N in this.morphAttributes){let $=this.morphAttributes[N],K=[];for(let W=0,U=$.length;W<U;W++){let F=$[W];K.push(F.toJSON(J.data))}if(K.length>0)Y[N]=K,R=!0}if(R)J.data.morphAttributes=Y,J.data.morphTargetsRelative=this.morphTargetsRelative;let Q=this.groups;if(Q.length>0)J.data.groups=JSON.parse(JSON.stringify(Q));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Z={};this.name=J.name;let k=J.index;if(k!==null)this.setIndex(k.clone());let Y=J.attributes;for(let $ in Y){let K=Y[$];this.setAttribute($,K.clone(Z))}let R=J.morphAttributes;for(let $ in R){let K=[],W=R[$];for(let U=0,F=W.length;U<F;U++)K.push(W[U].clone(Z));this.morphAttributes[$]=K}this.morphTargetsRelative=J.morphTargetsRelative;let Q=J.groups;for(let $=0,K=Q.length;$<K;$++){let W=Q[$];this.addGroup(W.start,W.count,W.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let N=J.boundingSphere;if(N!==null)this.boundingSphere=N.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var ZY=new d,XN=new d,NN=new m0;class j8{constructor(J=new d(1,0,0),Z=0){this.isPlane=!0,this.normal=J,this.constant=Z}set(J,Z){return this.normal.copy(J),this.constant=Z,this}setComponents(J,Z,k,Y){return this.normal.set(J,Z,k),this.constant=Y,this}setFromNormalAndCoplanarPoint(J,Z){return this.normal.copy(J),this.constant=-Z.dot(this.normal),this}setFromCoplanarPoints(J,Z,k){let Y=ZY.subVectors(k,Z).cross(XN.subVectors(J,Z)).normalize();return this.setFromNormalAndCoplanarPoint(Y,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Z){return Z.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Z,k=!0){let Y=J.delta(ZY),R=this.normal.dot(Y);if(R===0){if(this.distanceToPoint(J.start)===0)return Z.copy(J.start);return null}let Q=-(J.start.dot(this.normal)+this.constant)/R;if(k===!0&&(Q<0||Q>1))return null;return Z.copy(J.start).addScaledVector(Y,Q)}intersectsLine(J){let Z=this.distanceToPoint(J.start),k=this.distanceToPoint(J.end);return Z<0&&k>0||k<0&&Z>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Z){let k=Z||NN.getNormalMatrix(J),Y=this.coplanarPoint(ZY).applyMatrix4(J),R=this.normal.applyMatrix3(k).normalize();return this.constant=-Y.dot(R),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var $N=0;class zZ extends t8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:$N++}),this.uuid=d1(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new c0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Z in J){let k=J[Z];if(k===void 0){b0(`Material: parameter '${Z}' has value of undefined.`);continue}let Y=this[Z];if(Y===void 0){b0(`Material: '${Z}' is not a property of THREE.${this.type}.`);continue}if(Y&&Y.isColor)Y.set(k);else if(Y&&Y.isVector2&&(k&&k.isVector2)||Y&&Y.isEuler&&(k&&k.isEuler)||Y&&Y.isVector3&&(k&&k.isVector3))Y.copy(k);else this[Z]=k}}toJSON(J){let Z=J===void 0||typeof J==="string";if(Z)J={textures:{},images:{}};let k={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(k.uuid=this.uuid,k.type=this.type,k.blending=this.blending,k.side=this.side,k.shadowSide=this.shadowSide,k.vertexColors=this.vertexColors,k.opacity=this.opacity,k.transparent=this.transparent,k.blendSrc=this.blendSrc,k.blendDst=this.blendDst,k.blendEquation=this.blendEquation,k.blendSrcAlpha=this.blendSrcAlpha,k.blendDstAlpha=this.blendDstAlpha,k.blendEquationAlpha=this.blendEquationAlpha,k.blendColor=this.blendColor.getHex(),k.blendAlpha=this.blendAlpha,k.depthFunc=this.depthFunc,k.depthTest=this.depthTest,k.depthWrite=this.depthWrite,k.colorWrite=this.colorWrite,k.clipIntersection=this.clipIntersection,k.clipShadows=this.clipShadows,k.stencilWriteMask=this.stencilWriteMask,k.stencilFunc=this.stencilFunc,k.stencilRef=this.stencilRef,k.stencilFuncMask=this.stencilFuncMask,k.stencilFail=this.stencilFail,k.stencilZFail=this.stencilZFail,k.stencilZPass=this.stencilZPass,k.stencilWrite=this.stencilWrite,k.polygonOffset=this.polygonOffset,k.polygonOffsetFactor=this.polygonOffsetFactor,k.polygonOffsetUnits=this.polygonOffsetUnits,k.dithering=this.dithering,k.alphaTest=this.alphaTest,k.alphaHash=this.alphaHash,k.alphaToCoverage=this.alphaToCoverage,k.premultipliedAlpha=this.premultipliedAlpha,k.forceSinglePass=this.forceSinglePass,k.allowOverride=this.allowOverride,k.visible=this.visible,k.toneMapped=this.toneMapped,k.name=this.name,this.color&&this.color.isColor)k.color=this.color.getHex();if(this.roughness!==void 0)k.roughness=this.roughness;if(this.metalness!==void 0)k.metalness=this.metalness;if(this.sheen!==void 0)k.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)k.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)k.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)k.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)k.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)k.specular=this.specular.getHex();if(this.specularIntensity!==void 0)k.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)k.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)k.shininess=this.shininess;if(this.clearcoat!==void 0)k.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)k.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)k.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)k.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(J).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)k.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)k.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)k.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,k.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)k.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)k.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)k.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)k.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)k.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)k.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)k.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)k.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)k.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)k.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)k.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)k.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)k.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)k.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)k.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)k.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)k.lightMap=this.lightMap.toJSON(J).uuid,k.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)k.aoMap=this.aoMap.toJSON(J).uuid,k.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)k.bumpMap=this.bumpMap.toJSON(J).uuid,k.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)k.normalMap=this.normalMap.toJSON(J).uuid,k.normalMapType=this.normalMapType,k.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)k.displacementMap=this.displacementMap.toJSON(J).uuid,k.displacementScale=this.displacementScale,k.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)k.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)k.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)k.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)k.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)k.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)k.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(k.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)k.combine=this.combine}if(this.envMapRotation!==void 0)k.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)k.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)k.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)k.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)k.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)k.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)k.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)k.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)k.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)k.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)k.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)k.size=this.size;if(this.sizeAttenuation!==void 0)k.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)k.clippingPlanes=this.clippingPlanes.map((R)=>R.toJSON());if(this.rotation!==void 0)k.rotation=this.rotation;if(this.depthPacking!==void 0)k.depthPacking=this.depthPacking;if(this.linewidth!==void 0)k.linewidth=this.linewidth;if(this.linecap!==void 0)k.linecap=this.linecap;if(this.linejoin!==void 0)k.linejoin=this.linejoin;if(this.dashSize!==void 0)k.dashSize=this.dashSize;if(this.gapSize!==void 0)k.gapSize=this.gapSize;if(this.scale!==void 0)k.scale=this.scale;if(this.wireframe!==void 0)k.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)k.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)k.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)k.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)k.flatShading=this.flatShading;if(this.fog!==void 0)k.fog=this.fog;if(Object.keys(this.userData).length>0)k.userData=this.userData;function Y(R){let Q=[];for(let X in R){let N=R[X];delete N.metadata,Q.push(N)}return Q}if(Z){let R=Y(J.textures),Q=Y(J.images);if(R.length>0)k.textures=R;if(Q.length>0)k.images=Q}return k}fromJSON(J,Z){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new c0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.diffuseRoughness!==void 0)this.diffuseRoughness=J.diffuseRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessMinimum;if(J.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=J.iridescenceThicknessMaximum;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=J.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=J.iridescenceThicknessRange[1];if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((k)=>new j8().fromJSON(k));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Z[J.map]||null;if(J.matcap!==void 0)this.matcap=Z[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Z[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Z[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Z[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let k=J.normalScale;if(Array.isArray(k)===!1)k=[k,k];this.normalScale=new r0().fromArray(k)}if(J.displacementMap!==void 0)this.displacementMap=Z[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Z[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Z[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Z[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Z[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Z[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Z[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Z[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Z[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Z[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Z[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Z[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Z[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Z[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new r0().fromArray(J.clearcoatNormalScale);if(J.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=Z[J.diffuseRoughnessMap]||null;if(J.iridescenceMap!==void 0)this.iridescenceMap=Z[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Z[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Z[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Z[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Z[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Z[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Z[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Z=J.clippingPlanes,k=null;if(Z!==null){let Y=Z.length;k=Array(Y);for(let R=0;R!==Y;++R)k[R]=Z[R].clone()}return this.clippingPlanes=k,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var i8=new d,kY=new d,_6=new d,w6=new d;class Kk{constructor(J=new d,Z=new d(0,0,-1)){this.origin=J,this.direction=Z}set(J,Z){return this.origin.copy(J),this.direction.copy(Z),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Z){return Z.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,i8)),this}closestPointToPoint(J,Z){Z.subVectors(J,this.origin);let k=Z.dot(this.direction);if(k<0)return Z.copy(this.origin);return Z.copy(this.origin).addScaledVector(this.direction,k)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Z=i8.subVectors(J,this.origin).dot(this.direction);if(Z<0)return this.origin.distanceToSquared(J);return i8.copy(this.origin).addScaledVector(this.direction,Z),i8.distanceToSquared(J)}distanceSqToSegment(J,Z,k,Y){kY.copy(J).add(Z).multiplyScalar(0.5),_6.copy(Z).sub(J).normalize(),w6.copy(this.origin).sub(kY);let R=J.distanceTo(Z)*0.5,Q=-this.direction.dot(_6),X=w6.dot(this.direction),N=-w6.dot(_6),$=w6.lengthSq(),K=Math.abs(1-Q*Q),W,U,F,G;if(K>0)if(W=Q*N-X,U=Q*X-N,G=R*K,W>=0)if(U>=-G)if(U<=G){let B=1/K;W*=B,U*=B,F=W*(W+Q*U+2*X)+U*(Q*W+U+2*N)+$}else U=R,W=Math.max(0,-(Q*U+X)),F=-W*W+U*(U+2*N)+$;else U=-R,W=Math.max(0,-(Q*U+X)),F=-W*W+U*(U+2*N)+$;else if(U<=-G)W=Math.max(0,-(-Q*R+X)),U=W>0?-R:Math.min(Math.max(-R,-N),R),F=-W*W+U*(U+2*N)+$;else if(U<=G)W=0,U=Math.min(Math.max(-R,-N),R),F=U*(U+2*N)+$;else W=Math.max(0,-(Q*R+X)),U=W>0?R:Math.min(Math.max(-R,-N),R),F=-W*W+U*(U+2*N)+$;else U=Q>0?-R:R,W=Math.max(0,-(Q*U+X)),F=-W*W+U*(U+2*N)+$;if(k)k.copy(this.origin).addScaledVector(this.direction,W);if(Y)Y.copy(kY).addScaledVector(_6,U);return F}intersectSphere(J,Z){if(J.radius<0)return null;i8.subVectors(J.center,this.origin);let k=i8.dot(this.direction),Y=i8.dot(i8)-k*k,R=J.radius*J.radius;if(Y>R)return null;let Q=Math.sqrt(R-Y),X=k-Q,N=k+Q;if(N<0)return null;if(X<0)return this.at(N,Z);return this.at(X,Z)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Z=J.normal.dot(this.direction);if(Z===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let k=-(this.origin.dot(J.normal)+J.constant)/Z;return k>=0?k:null}intersectPlane(J,Z){let k=this.distanceToPlane(J);if(k===null)return null;return this.at(k,Z)}intersectsPlane(J){let Z=J.distanceToPoint(this.origin);if(Z===0)return!0;if(J.normal.dot(this.direction)*Z<0)return!0;return!1}intersectBox(J,Z){let k,Y,R,Q,X,N,$=1/this.direction.x,K=1/this.direction.y,W=1/this.direction.z,U=this.origin;if($>=0)k=(J.min.x-U.x)*$,Y=(J.max.x-U.x)*$;else k=(J.max.x-U.x)*$,Y=(J.min.x-U.x)*$;if(K>=0)R=(J.min.y-U.y)*K,Q=(J.max.y-U.y)*K;else R=(J.max.y-U.y)*K,Q=(J.min.y-U.y)*K;if(k>Q||R>Y)return null;if(R>k||isNaN(k))k=R;if(Q<Y||isNaN(Y))Y=Q;if(W>=0)X=(J.min.z-U.z)*W,N=(J.max.z-U.z)*W;else X=(J.max.z-U.z)*W,N=(J.min.z-U.z)*W;if(k>N||X>Y)return null;if(X>k||k!==k)k=X;if(N<Y||Y!==Y)Y=N;if(Y<0)return null;return this.at(k>=0?k:Y,Z)}intersectsBox(J){return this.intersectBox(J,i8)!==null}intersectTriangle(J,Z,k,Y,R){let Q=this.origin,X=this.direction,N=X.x,$=X.y,K=X.z,W=J.x-Q.x,U=J.y-Q.y,F=J.z-Q.z,G=Z.x-Q.x,B=Z.y-Q.y,V=Z.z-Q.z,E=k.x-Q.x,q=k.y-Q.y,O=k.z-Q.z,A=Math.abs(N),H=Math.abs($),_=Math.abs(K),C,I,M,j,y,P,S,g,w,v,s,h;if(A>=H&&A>=_)if(M=N,P=W,w=G,h=E,N>=0)C=$,I=K,j=U,y=F,S=B,g=V,v=q,s=O;else C=K,I=$,j=F,y=U,S=V,g=B,v=O,s=q;else if(H>=_)if(M=$,P=U,w=B,h=q,$>=0)C=K,I=N,j=F,y=W,S=V,g=G,v=O,s=E;else C=N,I=K,j=W,y=F,S=G,g=V,v=E,s=O;else if(M=K,P=F,w=V,h=O,K>=0)C=N,I=$,j=W,y=U,S=G,g=B,v=E,s=q;else C=$,I=N,j=U,y=W,S=B,g=G,v=q,s=E;if(M===0)return null;let J0=C/M,l=I/M,o=1/M,n=j-J0*P,I0=y-l*P,e=S-J0*w,Y0=g-l*w,O0=v-J0*h,_0=s-l*h,f0=O0*Y0-_0*e,H0=n*_0-I0*O0,t0=e*I0-Y0*n;if(Y){if(f0<0||H0<0||t0<0)return null}else if((f0<0||H0<0||t0<0)&&(f0>0||H0>0||t0>0))return null;let d0=f0+H0+t0;if(d0===0)return null;let g0=o*(f0*P+H0*w+t0*h);if(d0>0?g0<0:g0>0)return null;return this.at(g0/d0,R)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pZ extends zZ{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new c0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new M8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var _Q=new NJ,fZ=new Kk,C6=new MZ,wQ=new d,T6=new d,P6=new d,S6=new d,YY=new d,j6=new d,CQ=new d,f6=new d;class OJ extends zJ{constructor(J=new $8,Z=new pZ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Z,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Z){if(super.copy(J,Z),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Z=this.geometry.morphAttributes,k=Object.keys(Z);if(k.length>0){let Y=Z[k[0]];if(Y!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let R=0,Q=Y.length;R<Q;R++){let X=Y[R].name||String(R);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=R}}}}getVertexPosition(J,Z){let k=this.geometry,Y=k.attributes.position,R=k.morphAttributes.position,Q=k.morphTargetsRelative;Z.fromBufferAttribute(Y,J);let X=this.morphTargetInfluences;if(R&&X){j6.set(0,0,0);for(let N=0,$=R.length;N<$;N++){let K=X[N],W=R[N];if(K===0)continue;if(YY.fromBufferAttribute(W,J),Q)j6.addScaledVector(YY,K);else j6.addScaledVector(YY.sub(Z),K)}Z.add(j6)}return Z}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Z){let k=this.geometry,Y=this.material,R=this.matrixWorld;if(Y===void 0)return;if(k.boundingSphere===null)k.computeBoundingSphere();if(C6.copy(k.boundingSphere),C6.applyMatrix4(R),fZ.copy(J.ray).recast(J.near),C6.containsPoint(fZ.origin)===!1){if(fZ.intersectSphere(C6,wQ)===null)return;if(fZ.origin.distanceToSquared(wQ)>(J.far-J.near)**2)return}if(_Q.copy(R).invert(),fZ.copy(J.ray).applyMatrix4(_Q),k.boundingBox!==null){if(fZ.intersectsBox(k.boundingBox)===!1)return}this._computeIntersections(J,Z,fZ)}_computeIntersections(J,Z,k){let Y,R=this.geometry,Q=this.material,X=R.index,N=R.attributes.position,$=R.attributes.uv,K=R.attributes.uv1,W=R.attributes.normal,U=R.groups,F=R.drawRange;if(X!==null)if(Array.isArray(Q))for(let G=0,B=U.length;G<B;G++){let V=U[G],E=Q[V.materialIndex],q=Math.max(V.start,F.start),O=Math.min(X.count,Math.min(V.start+V.count,F.start+F.count));for(let A=q,H=O;A<H;A+=3){let _=X.getX(A),C=X.getX(A+1),I=X.getX(A+2);if(Y=v6(this,E,J,k,$,K,W,_,C,I),Y)Y.faceIndex=Math.floor(A/3),Y.face.materialIndex=V.materialIndex,Z.push(Y)}}else{let G=Math.max(0,F.start),B=Math.min(X.count,F.start+F.count);for(let V=G,E=B;V<E;V+=3){let q=X.getX(V),O=X.getX(V+1),A=X.getX(V+2);if(Y=v6(this,Q,J,k,$,K,W,q,O,A),Y)Y.faceIndex=Math.floor(V/3),Z.push(Y)}}else if(N!==void 0)if(Array.isArray(Q))for(let G=0,B=U.length;G<B;G++){let V=U[G],E=Q[V.materialIndex],q=Math.max(V.start,F.start),O=Math.min(N.count,Math.min(V.start+V.count,F.start+F.count));for(let A=q,H=O;A<H;A+=3){let _=A,C=A+1,I=A+2;if(Y=v6(this,E,J,k,$,K,W,_,C,I),Y)Y.faceIndex=Math.floor(A/3),Y.face.materialIndex=V.materialIndex,Z.push(Y)}}else{let G=Math.max(0,F.start),B=Math.min(N.count,F.start+F.count);for(let V=G,E=B;V<E;V+=3){let q=V,O=V+1,A=V+2;if(Y=v6(this,Q,J,k,$,K,W,q,O,A),Y)Y.faceIndex=Math.floor(V/3),Z.push(Y)}}}}function KN(J,Z,k,Y,R,Q,X,N){let $;if(Z.side===1)$=Y.intersectTriangle(X,Q,R,!0,N);else $=Y.intersectTriangle(R,Q,X,Z.side===0,N);if($===null)return null;f6.copy(N),f6.applyMatrix4(J.matrixWorld);let K=k.ray.origin.distanceTo(f6);if(K<k.near||K>k.far)return null;return{distance:K,point:f6.clone(),object:J}}function v6(J,Z,k,Y,R,Q,X,N,$,K){J.getVertexPosition(N,T6),J.getVertexPosition($,P6),J.getVertexPosition(K,S6);let W=KN(J,Z,k,Y,T6,P6,S6,CQ);if(W){let U=new d;if(G8.getBarycoord(CQ,T6,P6,S6,U),R)W.uv=G8.getInterpolatedAttribute(R,N,$,K,U,new r0);if(Q)W.uv1=G8.getInterpolatedAttribute(Q,N,$,K,U,new r0);if(X){if(W.normal=G8.getInterpolatedAttribute(X,N,$,K,U,new d),W.normal.dot(Y.direction)>0)W.normal.multiplyScalar(-1)}let F={a:N,b:$,c:K,normal:new d,materialIndex:0};G8.getNormal(T6,P6,S6,F.normal),W.face=F,W.barycoord=U}return W}class Uk extends dJ{constructor(J=null,Z=1,k=1,Y,R,Q,X,N,$=1003,K=1003,W,U){super(null,Q,X,N,$,K,Y,R,W,U);this.isDataTexture=!0,this.image={data:J,width:Z,height:k},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class l6 extends q8{constructor(J,Z,k,Y=1){super(J,Z,k);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Y}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var K1=new NJ,TQ=new NJ,y6=[],PQ=new JZ,UN=new NJ,f1=new OJ,v1=new MZ;class Wk extends OJ{constructor(J,Z,k){super(J,Z);this.isInstancedMesh=!0,this.instanceMatrix=new l6(new Float32Array(k*16),16),this.instanceColor=null,this.morphTexture=null,this.count=k,this.boundingBox=null,this.boundingSphere=null;for(let Y=0;Y<k;Y++)this.setMatrixAt(Y,UN)}computeBoundingBox(){let J=this.geometry,Z=this.count;if(this.boundingBox===null)this.boundingBox=new JZ;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let k=0;k<Z;k++)this.getMatrixAt(k,K1),PQ.copy(J.boundingBox).applyMatrix4(K1),this.boundingBox.union(PQ)}computeBoundingSphere(){let J=this.geometry,Z=this.count;if(this.boundingSphere===null)this.boundingSphere=new MZ;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let k=0;k<Z;k++)this.getMatrixAt(k,K1),v1.copy(J.boundingSphere).applyMatrix4(K1),this.boundingSphere.union(v1)}copy(J,Z){return super.copy(J,Z),this.instanceMatrix.copy(J.instanceMatrix),this.morphTexture=J.morphTexture!==null?J.morphTexture.clone():null,this.instanceColor=J.instanceColor!==null?J.instanceColor.clone():null,this.count=J.count,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this}getColorAt(J,Z){if(this.instanceColor===null)return Z.setRGB(1,1,1);else return Z.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Z){return Z.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Z){let k=Z.morphTargetInfluences,Y=this.morphTexture.source.data.data,R=k.length+1,Q=J*R+1;for(let X=0;X<k.length;X++)k[X]=Y[Q+X]}raycast(J,Z){let k=this.matrixWorld,Y=this.count;if(f1.geometry=this.geometry,f1.material=this.material,f1.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(v1.copy(this.boundingSphere),v1.applyMatrix4(k),J.ray.intersectsSphere(v1)===!1)return;for(let R=0;R<Y;R++){this.getMatrixAt(R,K1),TQ.multiplyMatrices(k,K1),f1.matrixWorld=TQ,f1.raycast(J,y6);for(let Q=0,X=y6.length;Q<X;Q++){let N=y6[Q];N.instanceId=R,N.object=this,Z.push(N)}y6.length=0}}setColorAt(J,Z){if(this.instanceColor===null)this.instanceColor=new l6(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Z.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Z){return Z.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Z){let k=Z.morphTargetInfluences,Y=k.length+1;if(this.morphTexture===null)this.morphTexture=new Uk(new Float32Array(Y*this.count),Y,this.count,1028,1015);let R=this.morphTexture.source.data.data,Q=0;for(let $=0;$<k.length;$++)Q+=k[$];let X=this.geometry.morphTargetsRelative?1:1-Q,N=Y*J;return R[N]=X,R.set(k,N+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var vZ=new MZ,WN=new r0(0.5,0.5),b6=new d;class yZ{constructor(J=new j8,Z=new j8,k=new j8,Y=new j8,R=new j8,Q=new j8){this.planes=[J,Z,k,Y,R,Q]}set(J,Z,k,Y,R,Q){let X=this.planes;return X[0].copy(J),X[1].copy(Z),X[2].copy(k),X[3].copy(Y),X[4].copy(R),X[5].copy(Q),this}copy(J){let Z=this.planes;for(let k=0;k<6;k++)Z[k].copy(J.planes[k]);return this}setFromProjectionMatrix(J,Z=2000,k=!1){let Y=this.planes,R=J.elements,Q=R[0],X=R[1],N=R[2],$=R[3],K=R[4],W=R[5],U=R[6],F=R[7],G=R[8],B=R[9],V=R[10],E=R[11],q=R[12],O=R[13],A=R[14],H=R[15];if(Y[0].setComponents($-Q,F-K,E-G,H-q).normalize(),Y[1].setComponents($+Q,F+K,E+G,H+q).normalize(),Y[2].setComponents($+X,F+W,E+B,H+O).normalize(),Y[3].setComponents($-X,F-W,E-B,H-O).normalize(),k)Y[4].setComponents(N,U,V,A).normalize(),Y[5].setComponents($-N,F-U,E-V,H-A).normalize();else if(Y[4].setComponents($-N,F-U,E-V,H-A).normalize(),Z===2000)Y[5].setComponents($+N,F+U,E+V,H+A).normalize();else if(Z===2001)Y[5].setComponents(N,U,V,A).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Z);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();vZ.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Z=J.geometry;if(Z.boundingSphere===null)Z.computeBoundingSphere();vZ.copy(Z.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(vZ)}intersectsSprite(J){vZ.center.set(0,0,0);let Z=WN.distanceTo(J.center);return vZ.radius=0.7071067811865476+Z,vZ.applyMatrix4(J.matrixWorld),this.intersectsSphere(vZ)}intersectsSphere(J){let Z=this.planes,k=J.center,Y=-J.radius;for(let R=0;R<6;R++)if(Z[R].distanceToPoint(k)<Y)return!1;return!0}intersectsBox(J){let Z=this.planes;for(let k=0;k<6;k++){let Y=Z[k];if(b6.x=Y.normal.x>0?J.max.x:J.min.x,b6.y=Y.normal.y>0?J.max.y:J.min.y,b6.z=Y.normal.z>0?J.max.z:J.min.z,Y.distanceToPoint(b6)<0)return!1}return!0}containsPoint(J){let Z=this.planes;for(let k=0;k<6;k++)if(Z[k].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var SQ=new NJ;class Fk{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(J){let Z=J.cameras,k=this._frustums;for(let Y=0;Y<Z.length;Y++){let R=Z[Y];if(SQ.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),k[Y]===void 0)k[Y]=new yZ;k[Y].setFromProjectionMatrix(SQ,R.coordinateSystem,R.reversedDepth)}return this._count=Z.length,this}getFrustum(J){return this._frustums[J]}intersectsObject(J){let Z=this._frustums;for(let k=0;k<this._count;k++)if(Z[k].intersectsObject(J))return!0;return!1}intersectsSprite(J){let Z=this._frustums;for(let k=0;k<this._count;k++)if(Z[k].intersectsSprite(J))return!0;return!1}intersectsSphere(J){let Z=this._frustums;for(let k=0;k<this._count;k++)if(Z[k].intersectsSphere(J))return!0;return!1}intersectsBox(J){let Z=this._frustums;for(let k=0;k<this._count;k++)if(Z[k].intersectsBox(J))return!0;return!1}containsPoint(J){let Z=this._frustums;for(let k=0;k<this._count;k++)if(Z[k].containsPoint(J))return!0;return!1}copy(J){this.coordinateSystem=J.coordinateSystem;let Z=this._frustums,k=J._frustums;for(let Y=0;Y<J._count;Y++){if(Z[Y]===void 0)Z[Y]=new yZ;Z[Y].copy(k[Y])}return this._count=J._count,this}clone(){return new Fk().copy(this)}}class s1 extends zZ{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new c0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var c6=new d,n6=new d,jQ=new NJ,y1=new Kk,h6=new MZ,RY=new d,fQ=new d;class Gk extends zJ{constructor(J=new $8,Z=new s1){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Z,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Z){if(super.copy(J,Z),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Z=J.attributes.position,k=[0];for(let Y=1,R=Z.count;Y<R;Y++)c6.fromBufferAttribute(Z,Y-1),n6.fromBufferAttribute(Z,Y),k[Y]=k[Y-1],k[Y]+=c6.distanceTo(n6);J.setAttribute("lineDistance",new mJ(k,1))}else b0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Z){let k=this.geometry,Y=this.matrixWorld,R=J.params.Line.threshold,Q=k.drawRange;if(k.boundingSphere===null)k.computeBoundingSphere();if(h6.copy(k.boundingSphere),h6.applyMatrix4(Y),h6.radius+=R,J.ray.intersectsSphere(h6)===!1)return;jQ.copy(Y).invert(),y1.copy(J.ray).applyMatrix4(jQ);let X=R/((this.scale.x+this.scale.y+this.scale.z)/3),N=X*X,$=this.isLineSegments?2:1,K=k.index,U=k.attributes.position;if(K!==null){let F=Math.max(0,Q.start),G=Math.min(K.count,Q.start+Q.count);for(let B=F,V=G-1;B<V;B+=$){let E=K.getX(B),q=K.getX(B+1),O=g6(this,J,y1,N,E,q,B);if(O)Z.push(O)}if(this.isLineLoop){let B=K.getX(G-1),V=K.getX(F),E=g6(this,J,y1,N,B,V,G-1);if(E)Z.push(E)}}else{let F=Math.max(0,Q.start),G=Math.min(U.count,Q.start+Q.count);for(let B=F,V=G-1;B<V;B+=$){let E=g6(this,J,y1,N,B,B+1,B);if(E)Z.push(E)}if(this.isLineLoop){let B=g6(this,J,y1,N,G-1,F,G-1);if(B)Z.push(B)}}}updateMorphTargets(){let Z=this.geometry.morphAttributes,k=Object.keys(Z);if(k.length>0){let Y=Z[k[0]];if(Y!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let R=0,Q=Y.length;R<Q;R++){let X=Y[R].name||String(R);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=R}}}}}function g6(J,Z,k,Y,R,Q,X){let N=J.geometry.attributes.position;if(c6.fromBufferAttribute(N,R),n6.fromBufferAttribute(N,Q),k.distanceSqToSegment(c6,n6,RY,fQ)>Y)return;RY.applyMatrix4(J.matrixWorld);let K=Z.ray.origin.distanceTo(RY);if(K<Z.near||K>Z.far)return;return{distance:K,point:fQ.clone().applyMatrix4(J.matrixWorld),index:X,face:null,faceIndex:null,barycoord:null,object:J}}class qk extends dJ{constructor(J=[],Z=301,k,Y,R,Q,X,N,$,K){super(J,Z,k,Y,R,Q,X,N,$,K);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class LZ extends dJ{constructor(J,Z,k=1014,Y,R,Q,X=1003,N=1003,$,K=1026,W=1){if(K!==1026&&K!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let U={width:J,height:Z,depth:W};super(U,Y,R,Q,X,N,K,k,$);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new l1(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Z=super.toJSON(J);return Z.compareFunction=this.compareFunction,Z}}class Ek extends LZ{constructor(J,Z=1014,k=301,Y,R,Q=1003,X=1003,N,$=1026){let K={width:J,height:J,depth:1},W=[K,K,K,K,K,K];super(J,J,Z,k,Y,R,Q,X,N,$);this.image=W,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class Bk extends dJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class L8 extends $8{constructor(J=1,Z=1,k=1,Y=1,R=1,Q=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Z,depth:k,widthSegments:Y,heightSegments:R,depthSegments:Q};let X=this;Y=Math.floor(Y),R=Math.floor(R),Q=Math.floor(Q);let N=[],$=[],K=[],W=[],U=0,F=0;G("z","y","x",-1,-1,k,Z,J,Q,R,0),G("z","y","x",1,-1,k,Z,-J,Q,R,1),G("x","z","y",1,1,J,k,Z,Y,Q,2),G("x","z","y",1,-1,J,k,-Z,Y,Q,3),G("x","y","z",1,-1,J,Z,k,Y,R,4),G("x","y","z",-1,-1,J,Z,-k,Y,R,5),this.setIndex(N),this.setAttribute("position",new mJ($,3)),this.setAttribute("normal",new mJ(K,3)),this.setAttribute("uv",new mJ(W,2));function G(B,V,E,q,O,A,H,_,C,I,M){let j=A/C,y=H/I,P=A/2,S=H/2,g=_/2,w=C+1,v=I+1,s=0,h=0,J0=new d;for(let l=0;l<v;l++){let o=l*y-S;for(let n=0;n<w;n++){let I0=n*j-P;J0[B]=I0*q,J0[V]=o*O,J0[E]=g,$.push(J0.x,J0.y,J0.z),J0[B]=0,J0[V]=0,J0[E]=_>0?1:-1,K.push(J0.x,J0.y,J0.z),W.push(n/C),W.push(1-l/I),s+=1}}for(let l=0;l<I;l++)for(let o=0;o<C;o++){let n=U+o+w*l,I0=U+o+w*(l+1),e=U+(o+1)+w*(l+1),Y0=U+(o+1)+w*l;N.push(n,I0,Y0),N.push(I0,e,Y0),h+=6}X.addGroup(F,h,M),F+=h,U+=s}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new L8(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class i1 extends $8{constructor(J=1,Z=32,k=0,Y=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Z,thetaStart:k,thetaLength:Y},Z=Math.max(3,Z);let R=[],Q=[],X=[],N=[],$=new d,K=new r0;Q.push(0,0,0),X.push(0,0,1),N.push(0.5,0.5);for(let W=0,U=3;W<=Z;W++,U+=3){let F=k+W/Z*Y;$.x=J*Math.cos(F),$.y=J*Math.sin(F),Q.push($.x,$.y,$.z),X.push(0,0,1),K.x=(Q[U]/J+1)/2,K.y=(Q[U+1]/J+1)/2,N.push(K.x,K.y)}for(let W=1;W<=Z;W++)R.push(W,W+1,0);this.setIndex(R),this.setAttribute("position",new mJ(Q,3)),this.setAttribute("normal",new mJ(X,3)),this.setAttribute("uv",new mJ(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new i1(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class o1 extends $8{constructor(J=1,Z=1,k=1,Y=32,R=1,Q=!1,X=0,N=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Z,height:k,radialSegments:Y,heightSegments:R,openEnded:Q,thetaStart:X,thetaLength:N};let $=this;Y=Math.floor(Y),R=Math.floor(R);let K=[],W=[],U=[],F=[],G=0,B=[],V=k/2,E=0;if(q(),Q===!1){if(J>0)O(!0);if(Z>0)O(!1)}this.setIndex(K),this.setAttribute("position",new mJ(W,3)),this.setAttribute("normal",new mJ(U,3)),this.setAttribute("uv",new mJ(F,2));function q(){let A=new d,H=new d,_=0,C=(Z-J)/k;for(let I=0;I<=R;I++){let M=[],j=I/R,y=j*(Z-J)+J;for(let P=0;P<=Y;P++){let S=P/Y,g=S*N+X,w=Math.sin(g),v=Math.cos(g);H.x=y*w,H.y=-j*k+V,H.z=y*v,W.push(H.x,H.y,H.z),A.set(w,C,v).normalize(),U.push(A.x,A.y,A.z),F.push(S,1-j),M.push(G++)}B.push(M)}for(let I=0;I<Y;I++)for(let M=0;M<R;M++){let j=B[M][I],y=B[M+1][I],P=B[M+1][I+1],S=B[M][I+1];if(J>0||M!==0)K.push(j,y,S),_+=3;if(Z>0||M!==R-1)K.push(y,P,S),_+=3}$.addGroup(E,_,0),E+=_}function O(A){let H=G,_=new r0,C=new d,I=0,M=A===!0?J:Z,j=A===!0?1:-1;for(let P=1;P<=Y;P++)W.push(0,V*j,0),U.push(0,j,0),F.push(0.5,0.5),G++;let y=G;for(let P=0;P<=Y;P++){let g=P/Y*N+X,w=Math.cos(g),v=Math.sin(g);C.x=M*v,C.y=V*j,C.z=M*w,W.push(C.x,C.y,C.z),U.push(0,j,0),_.x=w*0.5+0.5,_.y=v*0.5*j+0.5,F.push(_.x,_.y),G++}for(let P=0;P<Y;P++){let S=H+P,g=y+P;if(A===!0)K.push(g,g+1,S);else K.push(g+1,g,S);I+=3}$.addGroup(E,I,A===!0?1:2),E+=I}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new o1(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class y8 extends $8{constructor(J=1,Z=1,k=1,Y=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Z,widthSegments:k,heightSegments:Y};let R=J/2,Q=Z/2,X=Math.floor(k),N=Math.floor(Y),$=X+1,K=N+1,W=J/X,U=Z/N,F=[],G=[],B=[],V=[];for(let E=0;E<K;E++){let q=E*U-Q;for(let O=0;O<$;O++){let A=O*W-R;G.push(A,-q,0),B.push(0,0,1),V.push(O/X),V.push(1-E/N)}}for(let E=0;E<N;E++)for(let q=0;q<X;q++){let O=q+$*E,A=q+$*(E+1),H=q+1+$*(E+1),_=q+1+$*E;F.push(O,A,_),F.push(A,H,_)}this.setIndex(F),this.setAttribute("position",new mJ(G,3)),this.setAttribute("normal",new mJ(B,3)),this.setAttribute("uv",new mJ(V,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new y8(J.width,J.height,J.widthSegments,J.heightSegments)}}function uZ(J){let Z={};for(let k in J){Z[k]={};for(let Y in J[k]){let R=J[k][Y];if(vQ(R))if(R.isRenderTargetTexture)b0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Z[k][Y]=null;else Z[k][Y]=R.clone();else if(Array.isArray(R))if(vQ(R[0])){let Q=[];for(let X=0,N=R.length;X<N;X++)Q[X]=R[X].clone();Z[k][Y]=Q}else Z[k][Y]=R.slice();else Z[k][Y]=R}}return Z}function rJ(J){let Z={};for(let k=0;k<J.length;k++){let Y=uZ(J[k]);for(let R in Y)Z[R]=Y[R]}return Z}function vQ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function FN(J){let Z=[];for(let k=0;k<J.length;k++)Z.push(J[k].clone());return Z}function GR(J){let Z=J.getRenderTarget();if(Z===null)return J.outputColorSpace;if(Z.isXRRenderTarget===!0)return Z.texture.colorSpace;return a0.workingColorSpace}var d9={clone:uZ,merge:rJ},GN=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qN=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ZZ extends zZ{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GN,this.fragmentShader=qN,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=uZ(J.uniforms),this.uniformsGroups=FN(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Z=super.toJSON(J);Z.glslVersion=this.glslVersion,Z.uniforms={};for(let Y in this.uniforms){let Q=this.uniforms[Y].value;if(Q&&Q.isTexture)Z.uniforms[Y]={type:"t",value:Q.toJSON(J).uuid};else if(Q&&Q.isColor)Z.uniforms[Y]={type:"c",value:Q.getHex()};else if(Q&&Q.isVector2)Z.uniforms[Y]={type:"v2",value:Q.toArray()};else if(Q&&Q.isVector3)Z.uniforms[Y]={type:"v3",value:Q.toArray()};else if(Q&&Q.isVector4)Z.uniforms[Y]={type:"v4",value:Q.toArray()};else if(Q&&Q.isMatrix3)Z.uniforms[Y]={type:"m3",value:Q.toArray()};else if(Q&&Q.isMatrix4)Z.uniforms[Y]={type:"m4",value:Q.toArray()};else Z.uniforms[Y]={value:Q}}if(Object.keys(this.defines).length>0)Z.defines=this.defines;Z.vertexShader=this.vertexShader,Z.fragmentShader=this.fragmentShader,Z.lights=this.lights,Z.clipping=this.clipping;let k={};for(let Y in this.extensions)if(this.extensions[Y]===!0)k[Y]=!0;if(Object.keys(k).length>0)Z.extensions=k;return Z}fromJSON(J,Z){if(super.fromJSON(J,Z),J.uniforms!==void 0)for(let k in J.uniforms){let Y=J.uniforms[k];switch(this.uniforms[k]={},Y.type){case"t":this.uniforms[k].value=Z[Y.value]||null;break;case"c":this.uniforms[k].value=new c0().setHex(Y.value);break;case"v2":this.uniforms[k].value=new r0().fromArray(Y.value);break;case"v3":this.uniforms[k].value=new d().fromArray(Y.value);break;case"v4":this.uniforms[k].value=new IJ().fromArray(Y.value);break;case"m3":this.uniforms[k].value=new m0().fromArray(Y.value);break;case"m4":this.uniforms[k].value=new NJ().fromArray(Y.value);break;default:this.uniforms[k].value=Y.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let k in J.extensions)this.extensions[k]=J.extensions[k];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class qR extends ZZ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kZ extends zZ{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new c0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new c0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new r0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new M8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class ER extends zZ{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class BR extends zZ{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function U1(J,Z){if(!J||J.constructor===Z)return J;if(typeof Z.BYTES_PER_ELEMENT==="number")return new Z(J);return Array.prototype.slice.call(J)}function x6(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class dZ{constructor(J,Z,k,Y){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Y!==void 0?Y:new Z.constructor(k),this.sampleValues=Z,this.valueSize=k,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Z=this.parameterPositions,k=this._cachedIndex,Y=Z[k],R=Z[k-1];k:{J:{let Q;Z:{Y:if(!(J<Y)){for(let X=k+2;;){if(Y===void 0){if(J<R)break Y;return k=Z.length,this._cachedIndex=k,this.copySampleValue_(k-1)}if(k===X)break;if(R=Y,Y=Z[++k],J<Y)break J}Q=Z.length;break Z}if(!(J>=R)){let X=Z[1];if(J<X)k=2,R=X;for(let N=k-2;;){if(R===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(k===N)break;if(Y=R,R=Z[--k-1],J>=R)break J}Q=k,k=0;break Z}break k}while(k<Q){let X=k+Q>>>1;if(J<Z[X])Q=X;else k=X+1}if(Y=Z[k],R=Z[k-1],R===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Y===void 0)return k=Z.length,this._cachedIndex=k,this.copySampleValue_(k-1)}this._cachedIndex=k,this.intervalChanged_(k,R,Y)}return this.interpolate_(k,R,J,Y)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Z=this.resultBuffer,k=this.sampleValues,Y=this.valueSize,R=J*Y;for(let Q=0;Q!==Y;++Q)Z[Q]=k[R+Q];return Z}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class VR extends dZ{constructor(J,Z,k,Y){super(J,Z,k,Y);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Z,k){let Y=this.parameterPositions,R=J-2,Q=J+1,X=Y[R],N=Y[Q];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:R=J,X=2*Z-k;break;case 2402:R=Y.length-2,X=Z+Y[R]-Y[R+1];break;default:R=J,X=k}if(N===void 0)switch(this.getSettings_().endingEnd){case 2401:Q=J,N=2*k-Z;break;case 2402:Q=1,N=k+Y[1]-Y[0];break;default:Q=J-1,N=Z}let $=(k-Z)*0.5,K=this.valueSize;this._weightPrev=$/(Z-X),this._weightNext=$/(N-k),this._offsetPrev=R*K,this._offsetNext=Q*K}interpolate_(J,Z,k,Y){let R=this.resultBuffer,Q=this.sampleValues,X=this.valueSize,N=J*X,$=N-X,K=this._offsetPrev,W=this._offsetNext,U=this._weightPrev,F=this._weightNext,G=(k-Z)/(Y-Z),B=G*G,V=B*G,E=-U*V+2*U*B-U*G,q=(1+U)*V+(-1.5-2*U)*B+(-0.5+U)*G+1,O=(-1-F)*V+(1.5+F)*B+0.5*G,A=F*V-F*B;for(let H=0;H!==X;++H)R[H]=E*Q[K+H]+q*Q[$+H]+O*Q[N+H]+A*Q[W+H];return R}}class IR extends dZ{constructor(J,Z,k,Y){super(J,Z,k,Y)}interpolate_(J,Z,k,Y){let R=this.resultBuffer,Q=this.sampleValues,X=this.valueSize,N=J*X,$=N-X,K=(k-Z)/(Y-Z),W=1-K;for(let U=0;U!==X;++U)R[U]=Q[$+U]*W+Q[N+U]*K;return R}}class OR extends dZ{constructor(J,Z,k,Y){super(J,Z,k,Y)}interpolate_(J){return this.copySampleValue_(J-1)}}class HR extends dZ{interpolate_(J,Z,k,Y){let R=this.resultBuffer,Q=this.sampleValues,X=this.valueSize,N=J*X,$=N-X,K=this.inTangents,W=this.outTangents;if(!K||!W){let G=(k-Z)/(Y-Z),B=1-G;for(let V=0;V!==X;++V)R[V]=Q[$+V]*B+Q[N+V]*G;return R}let U=X*2,F=J-1;for(let G=0;G!==X;++G){let B=Q[$+G],V=Q[N+G],E=F*U+G*2,q=W[E],O=W[E+1],A=J*U+G*2,H=K[A],_=K[A+1],C=BN(k,Z,q,H,Y);R[G]=l9(C,B,O,_,V)}return R}}function l9(J,Z,k,Y,R){let Q=1-J;return Q*Q*Q*Z+3*Q*Q*J*k+3*Q*J*J*Y+J*J*J*R}function EN(J,Z,k,Y,R){let Q=1-J;return 3*Q*Q*(k-Z)+6*Q*J*(Y-k)+3*J*J*(R-Y)}function BN(J,Z,k,Y,R){let Q=(J-Z)/(R-Z);for(let X=0;X<8;X++){let N=l9(Q,Z,k,Y,R)-J;if(Math.abs(N)<0.0000000001)break;let $=EN(Q,Z,k,Y,R);if(Math.abs($)<0.0000000001)break;Q=Math.max(0,Math.min(1,Q-N/$))}return Q}class V8{constructor(J,Z,k,Y){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Z===void 0||Z.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=U1(Z,this.TimeBufferType),this.values=U1(k,this.ValueBufferType),this.setInterpolation(Y||this.DefaultInterpolation)}static toJSON(J){let Z=J.constructor,k;if(Z.toJSON!==this.toJSON)k=Z.toJSON(J);else{k={name:J.name,times:U1(J.times,Array),values:U1(J.values,Array)};let Y=J.getInterpolation();if(Y!==J.DefaultInterpolation)k.interpolation=Y;if(x6(J.settings))k.settings={inTangents:U1(J.settings.inTangents,Array),outTangents:U1(J.settings.outTangents,Array)}}return k.type=J.ValueTypeName,k}InterpolantFactoryMethodDiscrete(J){return new OR(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new IR(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new VR(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Z=new HR(this.times,this.values,this.getValueSize(),J);if(this.settings)Z.inTangents=this.settings.inTangents,Z.outTangents=this.settings.outTangents;return Z}setInterpolation(J){let Z;switch(J){case 2300:Z=this.InterpolantFactoryMethodDiscrete;break;case 2301:Z=this.InterpolantFactoryMethodLinear;break;case 2302:Z=this.InterpolantFactoryMethodSmooth;break;case 2303:Z=this.InterpolantFactoryMethodBezier;break}if(Z===void 0){let k="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(k);return b0("KeyframeTrack:",k),this}return this.createInterpolant=Z,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Z=this.times;for(let k=0,Y=Z.length;k!==Y;++k)Z[k]+=J;if(x6(this.settings))yQ(this.settings.inTangents,J),yQ(this.settings.outTangents,J)}return this}scale(J){if(J!==1){let Z=this.times;for(let k=0,Y=Z.length;k!==Y;++k)Z[k]*=J;if(x6(this.settings))bQ(this.settings.inTangents,J),bQ(this.settings.outTangents,J)}return this}trim(J,Z){let k=this.times,Y=k.length,R=0,Q=Y-1;while(R!==Y&&k[R]<J)++R;while(Q!==-1&&k[Q]>Z)--Q;if(++Q,R!==0||Q!==Y){if(R>=Q)Q=Math.max(Q,1),R=Q-1;let X=this.getValueSize();this.times=k.slice(R,Q),this.values=this.values.slice(R*X,Q*X)}return this}validate(){let J=!0,Z=this.getValueSize();if(Z-Math.floor(Z)!==0)x0("KeyframeTrack: Invalid value size in track.",this),J=!1;let k=this.times,Y=this.values,R=k.length;if(R===0)x0("KeyframeTrack: Track is empty.",this),J=!1;let Q=null;for(let X=0;X!==R;X++){let N=k[X];if(typeof N==="number"&&isNaN(N)){x0("KeyframeTrack: Time is not a valid number.",this,X,N),J=!1;break}if(Q!==null&&Q>N){x0("KeyframeTrack: Out of order keys.",this,X,N,Q),J=!1;break}Q=N}if(Y!==void 0){if(d7(Y))for(let X=0,N=Y.length;X!==N;++X){let $=Y[X];if(isNaN($)){x0("KeyframeTrack: Value is not a valid number.",this,X,$),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Z=this.values.slice(),k=this.getValueSize(),Y=this.getInterpolation()===2302,R=J.length-1,Q=1;for(let X=1;X<R;++X){let N=!1,$=J[X],K=J[X+1];if($!==K&&(X!==1||$!==J[0]))if(!Y){let W=X*k,U=W-k,F=W+k;for(let G=0;G!==k;++G){let B=Z[W+G];if(B!==Z[U+G]||B!==Z[F+G]){N=!0;break}}}else N=!0;if(N){if(X!==Q){J[Q]=J[X];let W=X*k,U=Q*k;for(let F=0;F!==k;++F)Z[U+F]=Z[W+F]}++Q}}if(R>0){J[Q]=J[R];for(let X=R*k,N=Q*k,$=0;$!==k;++$)Z[N+$]=Z[X+$];++Q}if(Q!==J.length)this.times=J.slice(0,Q),this.values=Z.slice(0,Q*k);else this.times=J,this.values=Z;return this}clone(){let J=this.times.slice(),Z=this.values.slice(),Y=new this.constructor(this.name,J,Z);if(Y.createInterpolant=this.createInterpolant,x6(this.settings))Y.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Y}}function yQ(J,Z){for(let k=0,Y=J.length;k!==Y;k+=2)J[k]+=Z}function bQ(J,Z){for(let k=0,Y=J.length;k!==Y;k+=2)J[k]*=Z}V8.prototype.ValueTypeName="";V8.prototype.TimeBufferType=Float32Array;V8.prototype.ValueBufferType=Float32Array;V8.prototype.DefaultInterpolation=2301;class lZ extends V8{constructor(J,Z,k){super(J,Z,k)}}lZ.prototype.ValueTypeName="bool";lZ.prototype.ValueBufferType=Array;lZ.prototype.DefaultInterpolation=2300;lZ.prototype.InterpolantFactoryMethodLinear=void 0;lZ.prototype.InterpolantFactoryMethodSmooth=void 0;class DR extends V8{constructor(J,Z,k,Y){super(J,Z,k,Y)}}DR.prototype.ValueTypeName="color";class AR extends V8{constructor(J,Z,k,Y){super(J,Z,k,Y)}}AR.prototype.ValueTypeName="number";class MR extends dZ{constructor(J,Z,k,Y){super(J,Z,k,Y)}interpolate_(J,Z,k,Y){let R=this.resultBuffer,Q=this.sampleValues,X=this.valueSize,N=(k-Z)/(Y-Z),$=J*X;for(let K=$+X;$!==K;$+=4)e8.slerpFlat(R,0,Q,$-X,Q,$,N);return R}}class Vk extends V8{constructor(J,Z,k,Y){super(J,Z,k,Y)}InterpolantFactoryMethodLinear(J){return new MR(this.times,this.values,this.getValueSize(),J)}}Vk.prototype.ValueTypeName="quaternion";Vk.prototype.InterpolantFactoryMethodSmooth=void 0;class cZ extends V8{constructor(J,Z,k){super(J,Z,k)}}cZ.prototype.ValueTypeName="string";cZ.prototype.ValueBufferType=Array;cZ.prototype.DefaultInterpolation=2300;cZ.prototype.InterpolantFactoryMethodLinear=void 0;cZ.prototype.InterpolantFactoryMethodSmooth=void 0;class zR extends V8{constructor(J,Z,k,Y){super(J,Z,k,Y)}}zR.prototype.ValueTypeName="vector";var u6={enabled:!1,files:{},add:function(J,Z){if(this.enabled===!1)return;if(hQ(J))return;this.files[J]=Z},get:function(J){if(this.enabled===!1)return;if(hQ(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function hQ(J){try{let Z=J.slice(J.indexOf(":")+1);return new URL(Z).protocol==="blob:"}catch(Z){return!1}}class LR{constructor(J,Z,k){let Y=this,R=!1,Q=0,X=0,N=void 0,$=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Z,this.onError=k,this._abortController=null,this.itemStart=function(K){if(X++,R===!1){if(Y.onStart!==void 0)Y.onStart(K,Q,X)}R=!0},this.itemEnd=function(K){if(Q++,Y.onProgress!==void 0)Y.onProgress(K,Q,X);if(Q===X){if(R=!1,Y.onLoad!==void 0)Y.onLoad()}},this.itemError=function(K){if(Y.onError!==void 0)Y.onError(K)},this.resolveURL=function(K){if(K=K.normalize("NFC"),N)return N(K);return K},this.setURLModifier=function(K){return N=K,this},this.addHandler=function(K,W){return $.push(K,W),this},this.removeHandler=function(K){let W=$.indexOf(K);if(W!==-1)$.splice(W,2);return this},this.getHandler=function(K){for(let W=0,U=$.length;W<U;W+=2){let F=$[W],G=$[W+1];if(F.global)F.lastIndex=0;if(F.test(K))return G}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var c9=new LR;class a1{constructor(J){if(this.manager=J!==void 0?J:c9,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Z){let k=this;return new Promise(function(Y,R){k.load(J,Y,Z,R)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}setPriority(J){return this.priority=J,this}setCache(J){return this.cache=J,this}abort(){return this}}a1.DEFAULT_MATERIAL_NAME="__DEFAULT";var W1=new WeakMap;class _R extends a1{constructor(J){super(J)}load(J,Z,k,Y){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let R=this,Q=u6.get(`image:${J}`);if(Q!==void 0){if(Q.complete===!0)R.manager.itemStart(J),setTimeout(function(){if(Z)Z(Q);R.manager.itemEnd(J)},0);else{let W=W1.get(Q);if(W===void 0)W=[],W1.set(Q,W);W.push({onLoad:Z,onError:Y})}return Q}let X=E1("img");function N(){if(K(),Z)Z(this);let W=W1.get(this)||[];for(let U=0;U<W.length;U++){let F=W[U];if(F.onLoad)F.onLoad(this)}W1.delete(this),R.manager.itemEnd(J)}function $(W){if(K(),Y)Y(W);u6.remove(`image:${J}`);let U=W1.get(this)||[];for(let F=0;F<U.length;F++){let G=U[F];if(G.onError)G.onError(W)}W1.delete(this),R.manager.itemError(J),R.manager.itemEnd(J)}function K(){X.removeEventListener("load",N,!1),X.removeEventListener("error",$,!1)}if(X.addEventListener("load",N,!1),X.addEventListener("error",$,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)X.crossOrigin=this.crossOrigin}return u6.add(`image:${J}`,X),R.manager.itemStart(J),X.fetchPriority=this.priority,X.src=J,X}}class Ik extends a1{constructor(J){super(J)}load(J,Z,k,Y){let R=new dJ,Q=new _R(this.manager);return Q.setPriority(this.priority),Q.setCache(this.cache),Q.setCrossOrigin(this.crossOrigin),Q.setPath(this.path),Q.load(J,function(X){if(R.image=X,R.needsUpdate=!0,Z!==void 0)Z(R)},k,Y),R}}class Ok extends zJ{static registerNode(J){this.prototype._lightNode=J}constructor(J,Z=1){super();this.isLight=!0,this.type="Light",this.color=new c0(J),this.intensity=Z}copy(J,Z){return super.copy(J,Z),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Z=super.toJSON(J);return Z.object.color=this.color.getHex(),Z.object.intensity=this.intensity,Z}}class Hk extends Ok{constructor(J,Z,k){super(J,k);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new c0(Z)}copy(J,Z){return super.copy(J,Z),this.groundColor.copy(J.groundColor),this}toJSON(J){let Z=super.toJSON(J);return Z.object.groundColor=this.groundColor.getHex(),Z}}var QY=new NJ,gQ=new d,xQ=new d;class wR{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new r0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new NJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yZ,this._frameExtents=new r0(1,1),this._viewportCount=1,this._viewports=[new IJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Z=this.camera;gQ.setFromMatrixPosition(J.matrixWorld),Z.position.copy(gQ),xQ.setFromMatrixPosition(J.target.matrixWorld),Z.lookAt(xQ),Z.updateMatrixWorld(),this._updateMatrix(Z,this.matrix,this._frustum)}_updateMatrix(J,Z,k,Y){QY.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),k.setFromProjectionMatrix(QY,J.coordinateSystem,J.reversedDepth);let R=this._frameExtents,Q=Y?Y.z/R.x:1,X=Y?Y.w/R.y:1,N=Y?Y.x/R.x:0,$=Y?Y.y/R.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Z.set(0.5*Q,0,0,0.5*Q+N,0,0.5*X,0,0.5*X+$,0,0,1,0,0,0,0,1);else Z.set(0.5*Q,0,0,0.5*Q+N,0,0.5*X,0,0.5*X+$,0,0,0.5,0.5,0,0,0,1);Z.multiply(QY)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.mapType=J.mapType,this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.mapType=this.mapType,J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var m6=new d,p6=new e8,S8=new d;class Dk extends zJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new NJ,this.projectionMatrix=new NJ,this.projectionMatrixInverse=new NJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Z){return super.copy(J,Z),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(m6,p6,S8),S8.x===1&&S8.y===1&&S8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(m6,p6,S8.set(1,1,1)).invert()}updateWorldMatrix(J,Z,k=!1){if(super.updateWorldMatrix(J,Z,k),this.matrixWorld.decompose(m6,p6,S8),S8.x===1&&S8.y===1&&S8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(m6,p6,S8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var VZ=new d,mQ=new r0,pQ=new r0;class k8 extends Dk{constructor(J=50,Z=1,k=0.1,Y=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=k,this.far=Y,this.focus=10,this.aspect=Z,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Z){return super.copy(J,Z),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Z=0.5*this.getFilmHeight()/J;this.fov=d6*2*Math.atan(Z),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(hk*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return d6*2*Math.atan(Math.tan(hk*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Z,k){VZ.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(VZ.x,VZ.y).multiplyScalar(-J/VZ.z),VZ.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),k.set(VZ.x,VZ.y).multiplyScalar(-J/VZ.z)}getViewSize(J,Z){return this.getViewBounds(J,mQ,pQ),Z.subVectors(pQ,mQ)}setViewOffset(J,Z,k,Y,R,Q){if(this.aspect=J/Z,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Z,this.view.offsetX=k,this.view.offsetY=Y,this.view.width=R,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Z=J*Math.tan(hk*0.5*this.fov)/this.zoom,k=2*Z,Y=this.aspect*k,R=-0.5*Y,Q=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:N,fullHeight:$}=Q;R+=Q.offsetX*Y/N,Z-=Q.offsetY*k/$,Y*=Q.width/N,k*=Q.height/$}let X=this.filmOffset;if(X!==0)R+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(R,R+Y,Z,Z-k,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Z=super.toJSON(J);if(Z.object.fov=this.fov,Z.object.zoom=this.zoom,Z.object.near=this.near,Z.object.far=this.far,Z.object.focus=this.focus,Z.object.aspect=this.aspect,this.view!==null)Z.object.view=Object.assign({},this.view);return Z.object.filmGauge=this.filmGauge,Z.object.filmOffset=this.filmOffset,Z}}class Ak extends Dk{constructor(J=-1,Z=1,k=1,Y=-1,R=0.1,Q=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Z,this.top=k,this.bottom=Y,this.near=R,this.far=Q,this.updateProjectionMatrix()}copy(J,Z){return super.copy(J,Z),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Z,k,Y,R,Q){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Z,this.view.offsetX=k,this.view.offsetY=Y,this.view.width=R,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Z=(this.top-this.bottom)/(2*this.zoom),k=(this.right+this.left)/2,Y=(this.top+this.bottom)/2,R=k-J,Q=k+J,X=Y+Z,N=Y-Z;if(this.view!==null&&this.view.enabled){let $=(this.right-this.left)/this.view.fullWidth/this.zoom,K=(this.top-this.bottom)/this.view.fullHeight/this.zoom;R+=$*this.view.offsetX,Q=R+$*this.view.width,X-=K*this.view.offsetY,N=X-K*this.view.height}this.projectionMatrix.makeOrthographic(R,Q,X,N,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Z=super.toJSON(J);if(Z.object.zoom=this.zoom,Z.object.left=this.left,Z.object.right=this.right,Z.object.top=this.top,Z.object.bottom=this.bottom,Z.object.near=this.near,Z.object.far=this.far,this.view!==null)Z.object.view=Object.assign({},this.view);return Z}}class n9 extends wR{constructor(){super(new Ak(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class A1 extends Ok{constructor(J,Z){super(J,Z);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zJ.DEFAULT_UP),this.updateMatrix(),this.target=new zJ,this.shadow=new n9}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Z=super.toJSON(J);return Z.object.shadow=this.shadow.toJSON(),Z.object.target=this.target.uuid,Z}}var F1=-90,G1=1;class r1 extends zJ{constructor(J,Z,k){super();this.type="CubeCamera",this.renderTarget=k,this.coordinateSystem=null,this.activeMipmapLevel=0;let Y=new k8(F1,G1,J,Z);Y.layers=this.layers,this.add(Y);let R=new k8(F1,G1,J,Z);R.layers=this.layers,this.add(R);let Q=new k8(F1,G1,J,Z);Q.layers=this.layers,this.add(Q);let X=new k8(F1,G1,J,Z);X.layers=this.layers,this.add(X);let N=new k8(F1,G1,J,Z);N.layers=this.layers,this.add(N);let $=new k8(F1,G1,J,Z);$.layers=this.layers,this.add($)}updateCoordinateSystem(){let J=this.coordinateSystem,Z=this.children.concat(),[k,Y,R,Q,X,N]=Z;for(let $ of Z)this.remove($);if(J===2000)k.up.set(0,1,0),k.lookAt(1,0,0),Y.up.set(0,1,0),Y.lookAt(-1,0,0),R.up.set(0,0,-1),R.lookAt(0,1,0),Q.up.set(0,0,1),Q.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),N.up.set(0,1,0),N.lookAt(0,0,-1);else if(J===2001)k.up.set(0,-1,0),k.lookAt(-1,0,0),Y.up.set(0,-1,0),Y.lookAt(1,0,0),R.up.set(0,0,1),R.lookAt(0,1,0),Q.up.set(0,0,-1),Q.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),N.up.set(0,-1,0),N.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let $ of Z)this.add($),$.updateMatrixWorld()}update(J,Z){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:k,activeMipmapLevel:Y}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[R,Q,X,N,$,K]=this.children,W=J.getRenderTarget(),U=J.getActiveCubeFace(),F=J.getActiveMipmapLevel(),G=J.xr.enabled;J.xr.enabled=!1;let B=k.texture.mipmapsAutoUpdate;k.texture.mipmapsAutoUpdate=!1;let V=!1;if(J.isWebGLRenderer===!0)V=J.state.buffers.depth.getReversed();else V=J.reversedDepthBuffer;if(J.setRenderTarget(k,0,Y),V&&J.autoClear===!1)J.clearDepth();if(J.render(Z,R),J.setRenderTarget(k,1,Y),V&&J.autoClear===!1)J.clearDepth();if(J.render(Z,Q),J.setRenderTarget(k,2,Y),V&&J.autoClear===!1)J.clearDepth();if(J.render(Z,X),J.setRenderTarget(k,3,Y),V&&J.autoClear===!1)J.clearDepth();if(J.render(Z,N),J.setRenderTarget(k,4,Y),V&&J.autoClear===!1)J.clearDepth();if(J.render(Z,$),k.texture.mipmapsAutoUpdate=B,J.setRenderTarget(k,5,Y),V&&J.autoClear===!1)J.clearDepth();J.render(Z,K),J.setRenderTarget(W,U,F),J.xr.enabled=G,k.texture.needsPMREMUpdate=!0}}class CR extends k8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J,this.perCameraFrustumCulled=!1}}var TR="\\[\\]\\.:\\/",VN=new RegExp("["+TR+"]","g"),PR="[^"+TR+"]",IN="[^"+TR.replace("\\.","")+"]",ON=/((?:WC+[\/:])*)/.source.replace("WC",PR),HN=/(WCOD+)?/.source.replace("WCOD",IN),DN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",PR),AN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",PR),MN=new RegExp("^"+ON+HN+DN+AN+"$"),zN=["material","materials","bones","map"];class s9{constructor(J,Z,k){let Y=k||XJ.parseTrackName(Z);this._targetGroup=J,this._bindings=J.subscribe_(Z,Y)}getValue(J,Z){this.bind();let k=this._targetGroup.nCachedObjects_,Y=this._bindings[k];if(Y!==void 0)Y.getValue(J,Z)}setValue(J,Z){let k=this._bindings;for(let Y=this._targetGroup.nCachedObjects_,R=k.length;Y!==R;++Y)k[Y].setValue(J,Z)}bind(){let J=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,k=J.length;Z!==k;++Z)J[Z].bind()}unbind(){let J=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,k=J.length;Z!==k;++Z)J[Z].unbind()}}class XJ{constructor(J,Z,k){this.path=Z,this.parsedPath=k||XJ.parseTrackName(Z),this.node=XJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Z,k){if(!(J&&J.isAnimationObjectGroup))return new XJ(J,Z,k);else return new XJ.Composite(J,Z,k)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(VN,"")}static parseTrackName(J){let Z=MN.exec(J);if(Z===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let k={nodeName:Z[2],objectName:Z[3],objectIndex:Z[4],propertyName:Z[5],propertyIndex:Z[6]},Y=k.nodeName&&k.nodeName.lastIndexOf(".");if(Y!==void 0&&Y!==-1){let R=k.nodeName.substring(Y+1);if(zN.indexOf(R)!==-1)k.nodeName=k.nodeName.substring(0,Y),k.objectName=R}if(k.propertyName===null||k.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return k}static findNode(J,Z){if(Z===void 0||Z===""||Z==="."||Z===-1||Z===J.name||Z===J.uuid)return J;if(J.skeleton){let k=J.skeleton.getBoneByName(Z);if(k!==void 0)return k}if(J.children){let k=function(R){for(let Q=0;Q<R.length;Q++){let X=R[Q];if(X.name===Z||X.uuid===Z)return X;let N=k(X.children);if(N)return N}return null},Y=k(J.children);if(Y)return Y}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Z){J[Z]=this.targetObject[this.propertyName]}_getValue_array(J,Z){let k=this.resolvedProperty;for(let Y=0,R=k.length;Y!==R;++Y)J[Z++]=k[Y]}_getValue_arrayElement(J,Z){J[Z]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Z){this.resolvedProperty.toArray(J,Z)}_setValue_direct(J,Z){this.targetObject[this.propertyName]=J[Z]}_setValue_direct_setNeedsUpdate(J,Z){this.targetObject[this.propertyName]=J[Z],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Z){this.targetObject[this.propertyName]=J[Z],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Z){let k=this.resolvedProperty;for(let Y=0,R=k.length;Y!==R;++Y)k[Y]=J[Z++]}_setValue_array_setNeedsUpdate(J,Z){let k=this.resolvedProperty;for(let Y=0,R=k.length;Y!==R;++Y)k[Y]=J[Z++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Z){let k=this.resolvedProperty;for(let Y=0,R=k.length;Y!==R;++Y)k[Y]=J[Z++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Z){this.resolvedProperty[this.propertyIndex]=J[Z]}_setValue_arrayElement_setNeedsUpdate(J,Z){this.resolvedProperty[this.propertyIndex]=J[Z],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Z){this.resolvedProperty[this.propertyIndex]=J[Z],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Z){this.resolvedProperty.fromArray(J,Z)}_setValue_fromArray_setNeedsUpdate(J,Z){this.resolvedProperty.fromArray(J,Z),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Z){this.resolvedProperty.fromArray(J,Z),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Z){this.bind(),this.getValue(J,Z)}_setValue_unbound(J,Z){this.bind(),this.setValue(J,Z)}bind(){let J=this.node,Z=this.parsedPath,k=Z.objectName,Y=Z.propertyName,R=Z.propertyIndex;if(!J)J=XJ.findNode(this.rootNode,Z.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){b0("PropertyBinding: No target node found for track: "+this.path+".");return}if(k){let $=Z.objectIndex;switch(k){case"materials":if(!J.material){x0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){x0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){x0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let K=0;K<J.length;K++)if(J[K].name===$){$=K;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){x0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){x0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[k]===void 0){x0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[k]}if($!==void 0){if(J[$]===void 0){x0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[$]}}let Q=J[Y];if(Q===void 0){let $=Z.nodeName;x0("PropertyBinding: Trying to update property for track: "+$+"."+Y+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let N=this.BindingType.Direct;if(R!==void 0){if(Y==="morphTargetInfluences"){if(!J.geometry){x0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){x0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[R]!==void 0)R=J.morphTargetDictionary[R]}N=this.BindingType.ArrayElement,this.resolvedProperty=Q,this.propertyIndex=R}else if(Q.fromArray!==void 0&&Q.toArray!==void 0)N=this.BindingType.HasFromToArray,this.resolvedProperty=Q;else if(Array.isArray(Q))N=this.BindingType.EntireArray,this.resolvedProperty=Q;else this.propertyName=Y;this.getValue=this.GetterByBindingType[N],this.setValue=this.SetterByBindingTypeAndVersioning[N][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}XJ.Composite=s9;XJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};XJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};XJ.prototype.GetterByBindingType=[XJ.prototype._getValue_direct,XJ.prototype._getValue_array,XJ.prototype._getValue_arrayElement,XJ.prototype._getValue_toArray];XJ.prototype.SetterByBindingTypeAndVersioning=[[XJ.prototype._setValue_direct,XJ.prototype._setValue_direct_setNeedsUpdate,XJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[XJ.prototype._setValue_array,XJ.prototype._setValue_array_setNeedsUpdate,XJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[XJ.prototype._setValue_arrayElement,XJ.prototype._setValue_arrayElement_setNeedsUpdate,XJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[XJ.prototype._setValue_fromArray,XJ.prototype._setValue_fromArray_setNeedsUpdate,XJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QE=new Float32Array(1);class i9{static{this.prototype.isMatrix2=!0}constructor(J,Z,k,Y){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Z,k,Y)}identity(){return this.set(1,0,0,1),this}fromArray(J,Z=0){for(let k=0;k<4;k++)this.elements[k]=J[k+Z];return this}set(J,Z,k,Y){let R=this.elements;return R[0]=J,R[2]=Z,R[1]=k,R[3]=Y,this}}function SR(J,Z,k,Y){let R=LN(Y);switch(k){case 1021:return J*Z;case 1028:return J*Z/R.components*R.byteLength;case 1029:return J*Z/R.components*R.byteLength;case 1030:return J*Z*2/R.components*R.byteLength;case 1031:return J*Z*2/R.components*R.byteLength;case 1022:return J*Z*3/R.components*R.byteLength;case 1023:return J*Z*4/R.components*R.byteLength;case 1033:return J*Z*4/R.components*R.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Z+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Z+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Z,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Z,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Z+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Z+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Z+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Z+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Z+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Z+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Z+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Z+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Z+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Z+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Z+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Z+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Z+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Z+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Z+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Z+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Z/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Z/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Z/4)*16}throw Error(`Unable to determine texture byte length for ${k} format.`)}function LN(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)b0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function BX(){let J=null,Z=!1,k=null,Y=null;function R(Q,X){Y=J.requestAnimationFrame(R),k(Q,X)}return{start:function(){if(Z===!0)return;if(k===null)return;if(J===null)return;Y=J.requestAnimationFrame(R),Z=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Y);Z=!1},setAnimationLoop:function(Q){k=Q},setContext:function(Q){J=Q}}}function _N(J){let Z=new WeakMap;function k(N,$){let{array:K,usage:W}=N,U=K.byteLength,F=J.createBuffer();J.bindBuffer($,F),J.bufferData($,K,W),N.onUploadCallback();let G;if(K instanceof Float32Array)G=J.FLOAT;else if(typeof Float16Array<"u"&&K instanceof Float16Array)G=J.HALF_FLOAT;else if(K instanceof Uint16Array)if(N.isFloat16BufferAttribute)G=J.HALF_FLOAT;else G=J.UNSIGNED_SHORT;else if(K instanceof Int16Array)G=J.SHORT;else if(K instanceof Uint32Array)G=J.UNSIGNED_INT;else if(K instanceof Int32Array)G=J.INT;else if(K instanceof Int8Array)G=J.BYTE;else if(K instanceof Uint8Array)G=J.UNSIGNED_BYTE;else if(K instanceof Uint8ClampedArray)G=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+K);return{buffer:F,type:G,bytesPerElement:K.BYTES_PER_ELEMENT,version:N.version,size:U}}function Y(N,$,K){let{array:W,updateRanges:U}=$;if(J.bindBuffer(K,N),U.length===0)J.bufferSubData(K,0,W);else{U.sort((G,B)=>G.start-B.start);let F=0;for(let G=1;G<U.length;G++){let B=U[F],V=U[G];if(V.start<=B.start+B.count+1)B.count=Math.max(B.count,V.start+V.count-B.start);else++F,U[F]=V}U.length=F+1;for(let G=0,B=U.length;G<B;G++){let V=U[G];J.bufferSubData(K,V.start*W.BYTES_PER_ELEMENT,W,V.start,V.count)}$.clearUpdateRanges()}$.onUploadCallback()}function R(N){if(N.isInterleavedBufferAttribute)N=N.data;return Z.get(N)}function Q(N){if(N.isInterleavedBufferAttribute)N=N.data;let $=Z.get(N);if($)J.deleteBuffer($.buffer),Z.delete(N)}function X(N,$){if(N.isInterleavedBufferAttribute)N=N.data;if(N.isGLBufferAttribute){let W=Z.get(N);if(!W||W.version<N.version)Z.set(N,{buffer:N.buffer,type:N.type,bytesPerElement:N.elementSize,version:N.version});return}let K=Z.get(N);if(K===void 0)Z.set(N,k(N,$));else if(K.version<N.version){if(K.size!==N.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Y(K.buffer,N,$),K.version=N.version}}return{get:R,remove:Q,update:X}}var wN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CN=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,TN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SN=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fN=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yN=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xN=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mN=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pN=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uN=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,aN=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rN=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J$=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z$=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k$="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y$=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R$=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Q$=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,X$=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N$=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$$=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,K$=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U$=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W$=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F$=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G$=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q$=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E$=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B$=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V$=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,I$=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,O$=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H$=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D$=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A$=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M$=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z$=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,L$=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_$=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w$=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C$=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,T$=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P$=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S$=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j$=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f$=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v$=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y$=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b$=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h$=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g$=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x$=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m$=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p$=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u$=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d$=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l$=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c$=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n$=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s$=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i$=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,o$=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a$=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r$=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t$=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e$=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JK=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZK=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kK=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YK=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RK=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QK=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XK=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NK=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$K=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,KK=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UK=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WK=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FK=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GK=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qK=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EK=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BK=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VK=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IK=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OK=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HK=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DK=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LK=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_K=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wK=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TK=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SK=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jK=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fK=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vK=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yK=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,bK=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hK=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gK=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xK=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mK=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pK=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uK=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dK=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lK=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cK=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nK=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sK=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iK=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oK=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aK=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rK=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tK=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eK=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J5=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Z5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k5=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y5=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R5=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n0={alphahash_fragment:wN,alphahash_pars_fragment:CN,alphamap_fragment:TN,alphamap_pars_fragment:PN,alphatest_fragment:SN,alphatest_pars_fragment:jN,aomap_fragment:fN,aomap_pars_fragment:vN,batching_pars_vertex:yN,batching_vertex:bN,begin_vertex:hN,beginnormal_vertex:gN,bsdfs:xN,iridescence_fragment:mN,bumpmap_pars_fragment:pN,clipping_planes_fragment:uN,clipping_planes_pars_fragment:dN,clipping_planes_pars_vertex:lN,clipping_planes_vertex:cN,color_fragment:nN,color_pars_fragment:sN,color_pars_vertex:iN,color_vertex:oN,common:aN,defaultnormal_vertex:rN,displacementmap_pars_vertex:tN,displacementmap_vertex:eN,emissivemap_fragment:J$,emissivemap_pars_fragment:Z$,colorspace_fragment:k$,colorspace_pars_fragment:Y$,envmap_fragment:R$,envmap_common_pars_fragment:Q$,envmap_pars_fragment:X$,envmap_pars_vertex:N$,envmap_physical_pars_fragment:I$,envmap_vertex:$$,fog_vertex:K$,fog_pars_vertex:U$,fog_fragment:W$,fog_pars_fragment:F$,gradientmap_pars_fragment:G$,lightmap_pars_fragment:q$,lights_lambert_fragment:E$,lights_lambert_pars_fragment:B$,lights_pars_begin:V$,lights_toon_fragment:O$,lights_toon_pars_fragment:H$,lights_phong_fragment:D$,lights_phong_pars_fragment:A$,lights_physical_fragment:M$,lights_physical_pars_fragment:z$,lights_fragment_begin:L$,lights_fragment_maps:_$,lights_fragment_end:w$,lightprobes_pars_fragment:C$,logdepthbuf_fragment:T$,logdepthbuf_pars_fragment:P$,logdepthbuf_pars_vertex:S$,logdepthbuf_vertex:j$,map_fragment:f$,map_pars_fragment:v$,map_particle_fragment:y$,map_particle_pars_fragment:b$,metalnessmap_fragment:h$,metalnessmap_pars_fragment:g$,morphinstance_vertex:x$,morphcolor_vertex:m$,morphnormal_vertex:p$,morphtarget_pars_vertex:u$,morphtarget_vertex:d$,normal_fragment_begin:l$,normal_fragment_maps:c$,normal_pars_fragment:n$,normal_pars_vertex:s$,normal_vertex:i$,normalmap_pars_fragment:o$,clearcoat_normal_fragment_begin:a$,clearcoat_normal_fragment_maps:r$,clearcoat_pars_fragment:t$,iridescence_pars_fragment:e$,opaque_fragment:JK,packing:ZK,premultiplied_alpha_fragment:kK,project_vertex:YK,dithering_fragment:RK,dithering_pars_fragment:QK,roughnessmap_fragment:XK,roughnessmap_pars_fragment:NK,shadowmap_pars_fragment:$K,shadowmap_pars_vertex:KK,shadowmap_vertex:UK,shadowmask_pars_fragment:WK,skinbase_vertex:FK,skinning_pars_vertex:GK,skinning_vertex:qK,skinnormal_vertex:EK,specularmap_fragment:BK,specularmap_pars_fragment:VK,tonemapping_fragment:IK,tonemapping_pars_fragment:OK,transmission_fragment:HK,transmission_pars_fragment:DK,uv_pars_fragment:AK,uv_pars_vertex:MK,uv_vertex:zK,worldpos_vertex:LK,background_vert:_K,background_frag:wK,backgroundCube_vert:CK,backgroundCube_frag:TK,cube_vert:PK,cube_frag:SK,depth_vert:jK,depth_frag:fK,distance_vert:vK,distance_frag:yK,equirect_vert:bK,equirect_frag:hK,linedashed_vert:gK,linedashed_frag:xK,meshbasic_vert:mK,meshbasic_frag:pK,meshlambert_vert:uK,meshlambert_frag:dK,meshmatcap_vert:lK,meshmatcap_frag:cK,meshnormal_vert:nK,meshnormal_frag:sK,meshphong_vert:iK,meshphong_frag:oK,meshphysical_vert:aK,meshphysical_frag:rK,meshtoon_vert:tK,meshtoon_frag:eK,points_vert:J5,points_frag:Z5,shadow_vert:k5,shadow_frag:Y5,sprite_vert:R5,sprite_frag:Q5},E0={common:{diffuse:{value:new c0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new m0},alphaMap:{value:null},alphaMapTransform:{value:new m0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new m0}},envmap:{envMap:{value:null},envMapRotation:{value:new m0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new m0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new m0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new m0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new m0},normalScale:{value:new r0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new m0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new m0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new m0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new m0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new c0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new c0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new m0},alphaTest:{value:0},uvTransform:{value:new m0}},sprite:{diffuse:{value:new c0(16777215)},opacity:{value:1},center:{value:new r0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new m0},alphaMap:{value:null},alphaMapTransform:{value:new m0},alphaTest:{value:0}}},h8={basic:{uniforms:rJ([E0.common,E0.specularmap,E0.envmap,E0.aomap,E0.lightmap,E0.fog]),vertexShader:n0.meshbasic_vert,fragmentShader:n0.meshbasic_frag},lambert:{uniforms:rJ([E0.common,E0.specularmap,E0.envmap,E0.aomap,E0.lightmap,E0.emissivemap,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.fog,E0.lights,{emissive:{value:new c0(0)},envMapIntensity:{value:1}}]),vertexShader:n0.meshlambert_vert,fragmentShader:n0.meshlambert_frag},phong:{uniforms:rJ([E0.common,E0.specularmap,E0.envmap,E0.aomap,E0.lightmap,E0.emissivemap,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.fog,E0.lights,{emissive:{value:new c0(0)},specular:{value:new c0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:n0.meshphong_vert,fragmentShader:n0.meshphong_frag},standard:{uniforms:rJ([E0.common,E0.envmap,E0.aomap,E0.lightmap,E0.emissivemap,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.roughnessmap,E0.metalnessmap,E0.fog,E0.lights,{emissive:{value:new c0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:n0.meshphysical_vert,fragmentShader:n0.meshphysical_frag},toon:{uniforms:rJ([E0.common,E0.aomap,E0.lightmap,E0.emissivemap,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.gradientmap,E0.fog,E0.lights,{emissive:{value:new c0(0)}}]),vertexShader:n0.meshtoon_vert,fragmentShader:n0.meshtoon_frag},matcap:{uniforms:rJ([E0.common,E0.bumpmap,E0.normalmap,E0.displacementmap,E0.fog,{matcap:{value:null}}]),vertexShader:n0.meshmatcap_vert,fragmentShader:n0.meshmatcap_frag},points:{uniforms:rJ([E0.points,E0.fog]),vertexShader:n0.points_vert,fragmentShader:n0.points_frag},dashed:{uniforms:rJ([E0.common,E0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:n0.linedashed_vert,fragmentShader:n0.linedashed_frag},depth:{uniforms:rJ([E0.common,E0.displacementmap]),vertexShader:n0.depth_vert,fragmentShader:n0.depth_frag},normal:{uniforms:rJ([E0.common,E0.bumpmap,E0.normalmap,E0.displacementmap,{opacity:{value:1}}]),vertexShader:n0.meshnormal_vert,fragmentShader:n0.meshnormal_frag},sprite:{uniforms:rJ([E0.sprite,E0.fog]),vertexShader:n0.sprite_vert,fragmentShader:n0.sprite_frag},background:{uniforms:{uvTransform:{value:new m0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:n0.background_vert,fragmentShader:n0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new m0}},vertexShader:n0.backgroundCube_vert,fragmentShader:n0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:n0.cube_vert,fragmentShader:n0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:n0.equirect_vert,fragmentShader:n0.equirect_frag},distance:{uniforms:rJ([E0.common,E0.displacementmap,{referencePosition:{value:new d},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:n0.distance_vert,fragmentShader:n0.distance_frag},shadow:{uniforms:rJ([E0.lights,E0.fog,{color:{value:new c0(0)},opacity:{value:1}}]),vertexShader:n0.shadow_vert,fragmentShader:n0.shadow_frag}};h8.physical={uniforms:rJ([h8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new m0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new m0},clearcoatNormalScale:{value:new r0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new m0},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new m0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new m0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new m0},sheen:{value:0},sheenColor:{value:new c0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new m0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new m0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new m0},transmissionSamplerSize:{value:new r0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new m0},attenuationDistance:{value:0},attenuationColor:{value:new c0(0)},specularColor:{value:new c0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new m0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new m0},anisotropyVector:{value:new r0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new m0}}]),vertexShader:n0.meshphysical_vert,fragmentShader:n0.meshphysical_frag};var Mk={r:0,b:0,g:0},X5=new NJ,VX=new m0;VX.set(-1,0,0,0,1,0,0,0,1);function N5(J,Z,k,Y,R,Q){let X=new c0(0),N=R===!0?0:1,$,K,W=null,U=0,F=null;function G(O){let A=O.isScene===!0?O.background:null;if(A&&A.isTexture){let H=O.backgroundBlurriness>0;A=Z.get(A,H)}return A}function B(O){let A=!1,H=G(O);if(H===null)E(X,N);else if(H&&H.isColor)E(H,1),A=!0;let _=J.xr.getEnvironmentBlendMode();if(_==="additive")k.buffers.color.setClear(0,0,0,1,Q);else if(_==="alpha-blend")k.buffers.color.setClear(0,0,0,0,Q);if(J.autoClear||A)k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function V(O,A){let H=G(A);if(H&&H.isCubeTexture){if(K===void 0)K=new OJ(new L8(1,1,1),new ZZ({name:"BackgroundCubeMaterial",uniforms:uZ(h8.backgroundCube.uniforms),vertexShader:h8.backgroundCube.vertexShader,fragmentShader:h8.backgroundCube.fragmentShader,side:Y8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),K.geometry.deleteAttribute("normal"),K.geometry.deleteAttribute("uv"),K.onBeforeRender=function(_,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(K.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Y.update(K);if(K.material.uniforms.envMap.value=H,K.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,K.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,K.material.uniforms.backgroundRotation.value.setFromMatrix4(X5.makeRotationFromEuler(A.backgroundRotation)).transpose(),H.isRenderTargetTexture===!1)K.material.uniforms.backgroundRotation.value.premultiply(VX);if(K.material.toneMapped=a0.getTransfer(H.colorSpace)!==FJ,W!==H||U!==H.version||F!==J.toneMapping)K.material.needsUpdate=!0,W=H,U=H.version,F=J.toneMapping;K.layers.enableAll(),O.unshift(K,K.geometry,K.material,0,0,null)}else if(H&&H.isTexture){if($===void 0)$=new OJ(new y8(2,2),new ZZ({name:"BackgroundMaterial",uniforms:uZ(h8.background.uniforms),vertexShader:h8.background.vertexShader,fragmentShader:h8.background.fragmentShader,side:I1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),$.geometry.deleteAttribute("normal"),Object.defineProperty($.material,"map",{get:function(){return this.uniforms.t2D.value}}),Y.update($);if($.material.uniforms.t2D.value=H,$.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,$.material.toneMapped=a0.getTransfer(H.colorSpace)!==FJ,H.matrixAutoUpdate===!0)H.updateMatrix();if($.material.uniforms.uvTransform.value.copy(H.matrix),W!==H||U!==H.version||F!==J.toneMapping)$.material.needsUpdate=!0,W=H,U=H.version,F=J.toneMapping;$.layers.enableAll(),O.unshift($,$.geometry,$.material,0,0,null)}}function E(O,A){O.getRGB(Mk,GR(J)),k.buffers.color.setClear(Mk.r,Mk.g,Mk.b,A,Q)}function q(){if(K!==void 0)K.geometry.dispose(),K.material.dispose(),K=void 0;if($!==void 0)$.geometry.dispose(),$.material.dispose(),$=void 0}return{getClearColor:function(){return X},setClearColor:function(O,A=1){X.set(O),N=A,E(X,N)},getClearAlpha:function(){return N},setClearAlpha:function(O){N=O,E(X,N)},render:B,addToRenderList:V,dispose:q}}function $5(J,Z){let k=J.getParameter(J.MAX_VERTEX_ATTRIBS),Y={},R=F(null),Q=R,X=!1;function N(P,S,g,w,v){let s=!1,h=U(P,w,g,S);if(Q!==h)Q=h,K(Q.object);if(s=G(P,w,g,v),s)B(P,w,g,v);if(v!==null)Z.update(v,J.ELEMENT_ARRAY_BUFFER);if(s||X){if(X=!1,H(P,S,g,w),v!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Z.get(v).buffer)}}function $(){return J.createVertexArray()}function K(P){return J.bindVertexArray(P)}function W(P){return J.deleteVertexArray(P)}function U(P,S,g,w){let v=w.wireframe===!0,s=Y[S.id];if(s===void 0)s={},Y[S.id]=s;let h=P.isInstancedMesh===!0?P.id:0,J0=s[h];if(J0===void 0)J0={},s[h]=J0;let l=J0[g.id];if(l===void 0)l={},J0[g.id]=l;let o=l[v];if(o===void 0)o=F($()),l[v]=o;return o}function F(P){let S=[],g=[],w=[];for(let v=0;v<k;v++)S[v]=0,g[v]=0,w[v]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:g,attributeDivisors:w,object:P,attributes:{},index:null}}function G(P,S,g,w){let v=Q.attributes,s=S.attributes,h=0,J0=g.getAttributes();for(let l in J0)if(J0[l].location>=0){let n=v[l],I0=s[l];if(I0===void 0){if(l==="instanceMatrix"&&P.instanceMatrix)I0=P.instanceMatrix;if(l==="instanceColor"&&P.instanceColor)I0=P.instanceColor}if(n===void 0)return!0;if(n.attribute!==I0)return!0;if(I0&&n.data!==I0.data)return!0;h++}if(Q.attributesNum!==h)return!0;if(Q.index!==w)return!0;return!1}function B(P,S,g,w){let v={},s=S.attributes,h=0,J0=g.getAttributes();for(let l in J0)if(J0[l].location>=0){let n=s[l];if(n===void 0){if(l==="instanceMatrix"&&P.instanceMatrix)n=P.instanceMatrix;if(l==="instanceColor"&&P.instanceColor)n=P.instanceColor}let I0={};if(I0.attribute=n,n&&n.data)I0.data=n.data;v[l]=I0,h++}Q.attributes=v,Q.attributesNum=h,Q.index=w}function V(){let P=Q.newAttributes;for(let S=0,g=P.length;S<g;S++)P[S]=0}function E(P){q(P,0)}function q(P,S){let{newAttributes:g,enabledAttributes:w,attributeDivisors:v}=Q;if(g[P]=1,w[P]===0)J.enableVertexAttribArray(P),w[P]=1;if(v[P]!==S)J.vertexAttribDivisor(P,S),v[P]=S}function O(){let{newAttributes:P,enabledAttributes:S}=Q;for(let g=0,w=S.length;g<w;g++)if(S[g]!==P[g])J.disableVertexAttribArray(g),S[g]=0}function A(P,S,g,w,v,s,h){if(h===!0)J.vertexAttribIPointer(P,S,g,v,s);else J.vertexAttribPointer(P,S,g,w,v,s)}function H(P,S,g,w){V();let v=w.attributes,s=g.getAttributes(),h=S.defaultAttributeValues;for(let J0 in s){let l=s[J0];if(l.location>=0){let o=v[J0];if(o===void 0){if(J0==="instanceMatrix"&&P.instanceMatrix)o=P.instanceMatrix;if(J0==="instanceColor"&&P.instanceColor)o=P.instanceColor}if(o!==void 0){let{normalized:n,itemSize:I0}=o,e=Z.get(o);if(e===void 0)continue;let{buffer:Y0,type:O0,bytesPerElement:_0}=e,f0=O0===J.INT||O0===J.UNSIGNED_INT||o.gpuType===VY;if(o.isInterleavedBufferAttribute){let H0=o.data,t0=H0.isInterleavedBuffer===!0?H0.stride:H0.itemSize,d0=o.offset;if(H0.isInstancedInterleavedBuffer||H0.isInstancedBufferAttribute){for(let g0=0;g0<l.locationSize;g0++)q(l.location+g0,H0.meshPerAttribute);if(P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=H0.meshPerAttribute*H0.count}else for(let g0=0;g0<l.locationSize;g0++)E(l.location+g0);J.bindBuffer(J.ARRAY_BUFFER,Y0);for(let g0=0;g0<l.locationSize;g0++)A(l.location+g0,I0/l.locationSize,O0,n,t0*_0,(d0+I0/l.locationSize*g0)*_0,f0)}else{if(o.isInstancedBufferAttribute){for(let H0=0;H0<l.locationSize;H0++)q(l.location+H0,o.meshPerAttribute);if(P.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=o.meshPerAttribute*o.count}else for(let H0=0;H0<l.locationSize;H0++)E(l.location+H0);J.bindBuffer(J.ARRAY_BUFFER,Y0);for(let H0=0;H0<l.locationSize;H0++)A(l.location+H0,I0/l.locationSize,O0,n,I0*_0,I0/l.locationSize*H0*_0,f0)}}else if(h!==void 0){let n=h[J0];if(n!==void 0)switch(n.length){case 2:J.vertexAttrib2fv(l.location,n);break;case 3:J.vertexAttrib3fv(l.location,n);break;case 4:J.vertexAttrib4fv(l.location,n);break;default:J.vertexAttrib1fv(l.location,n)}}}}O()}function _(){j();for(let P in Y){let S=Y[P];for(let g in S){let w=S[g];for(let v in w){let s=w[v];for(let h in s)W(s[h].object),delete s[h];delete w[v]}}delete Y[P]}}function C(P){if(Y[P.id]===void 0)return;let S=Y[P.id];for(let g in S){let w=S[g];for(let v in w){let s=w[v];for(let h in s)W(s[h].object),delete s[h];delete w[v]}}delete Y[P.id]}function I(P){for(let S in Y){let g=Y[S];for(let w in g){let v=g[w];if(v[P.id]===void 0)continue;let s=v[P.id];for(let h in s)W(s[h].object),delete s[h];delete v[P.id]}}}function M(P){for(let S in Y){let g=Y[S],w=P.isInstancedMesh===!0?P.id:0,v=g[w];if(v===void 0)continue;for(let s in v){let h=v[s];for(let J0 in h)W(h[J0].object),delete h[J0];delete v[s]}if(delete g[w],Object.keys(g).length===0)delete Y[S]}}function j(){if(y(),X=!0,Q===R)return;Q=R,K(Q.object)}function y(){R.geometry=null,R.program=null,R.wireframe=!1}return{setup:N,reset:j,resetDefaultState:y,dispose:_,releaseStatesOfGeometry:C,releaseStatesOfObject:M,releaseStatesOfProgram:I,initAttributes:V,enableAttribute:E,disableUnusedAttributes:O}}function K5(J,Z,k){let Y;function R($){Y=$}function Q($,K){J.drawArrays(Y,$,K),k.update(K,Y,1)}function X($,K,W){if(W===0)return;J.drawArraysInstanced(Y,$,K,W),k.update(K,Y,W)}function N($,K,W){if(W===0)return;Z.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Y,$,0,K,0,W);let F=0;for(let G=0;G<W;G++)F+=K[G];k.update(F,Y,1)}this.setMode=R,this.render=Q,this.renderInstances=X,this.renderMultiDraw=N}function U5(J,Z,k,Y){let R;function Q(){if(R!==void 0)return R;if(Z.has("EXT_texture_filter_anisotropic")===!0){let I=Z.get("EXT_texture_filter_anisotropic");R=J.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else R=0;return R}function X(I){if(I!==r8&&Y.convert(I)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function N(I){let M=I===v8&&(Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float"));if(I!==z8&&I!==a8&&!M&&Y.convert(I)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function $(I){if(I==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";I="mediump"}if(I==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let K=k.precision!==void 0?k.precision:"highp",W=$(K);if(W!==K)b0("WebGLRenderer:",K,"not supported, using",W,"instead."),K=W;let U=k.reversedDepthBuffer===!0&&Z.has("EXT_clip_control"),F=k.logarithmicDepthBuffer===!0&&U===!1;if(k.reversedDepthBuffer===!0&&U===!1)b0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(k.logarithmicDepthBuffer===!0&&U===!0)b0("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let G=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),V=J.getParameter(J.MAX_TEXTURE_SIZE),E=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),q=J.getParameter(J.MAX_VERTEX_ATTRIBS),O=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),A=J.getParameter(J.MAX_VARYING_VECTORS),H=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),_=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Q,getMaxPrecision:$,textureFormatReadable:X,textureTypeReadable:N,precision:K,logarithmicDepthBuffer:F,reversedDepthBuffer:U,maxTextures:G,maxVertexTextures:B,maxTextureSize:V,maxCubemapSize:E,maxAttributes:q,maxVertexUniforms:O,maxVaryings:A,maxFragmentUniforms:H,maxSamples:_,samples:C}}function W5(J){let Z=this,k=null,Y=0,R=!1,Q=!1,X=new j8,N=new m0,$={value:null,needsUpdate:!1};this.uniform=$,this.numPlanes=0,this.numIntersection=0,this.init=function(U,F){let G=U.length!==0||F||Y!==0||R;return R=F,Y=U.length,G},this.beginShadows=function(){Q=!0,W(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(U,F){k=W(U,F,0)},this.setState=function(U,F,G){let{clippingPlanes:B,clipIntersection:V,clipShadows:E}=U,q=J.get(U);if(!R||B===null||B.length===0||Q&&!E)if(Q)W(null);else K();else{let O=Q?0:Y,A=O*4,H=q.clippingState||null;$.value=H,H=W(B,F,A,G);for(let _=0;_!==A;++_)H[_]=k[_];q.clippingState=H,this.numIntersection=V?this.numPlanes:0,this.numPlanes+=O}};function K(){if($.value!==k)$.value=k,$.needsUpdate=Y>0;Z.numPlanes=Y,Z.numIntersection=0}function W(U,F,G,B){let V=U!==null?U.length:0,E=null;if(V!==0){if(E=$.value,B!==!0||E===null){let q=G+V*4,O=F.matrixWorldInverse;if(N.getNormalMatrix(O),E===null||E.length<q)E=new Float32Array(q);for(let A=0,H=G;A!==V;++A,H+=4)X.copy(U[A]).applyMatrix4(O,N),X.normal.toArray(E,H),E[H+3]=X.constant}$.value=E,$.needsUpdate=!0}return Z.numPlanes=V,Z.numIntersection=0,E}}class _k extends B8{constructor(J=1,Z={}){super(J,J,Z);this.isWebGLCubeRenderTarget=!0;let k={width:J,height:J,depth:1},Y=[k,k,k,k,k,k];this.texture=new qk(Y),this._setTextureOptions(Z),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Z){this.texture.type=Z.type,this.texture.colorSpace=Z.colorSpace,this.texture.generateMipmaps=Z.generateMipmaps,this.texture.minFilter=Z.minFilter,this.texture.magFilter=Z.magFilter;let k={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Y=new L8(5,5,5),R=new ZZ({name:"CubemapFromEquirect",uniforms:uZ(k.uniforms),vertexShader:k.vertexShader,fragmentShader:k.fragmentShader,side:Y8,blending:hZ});R.uniforms.tEquirect.value=Z;let Q=new OJ(Y,R),X=Z.minFilter;if(Z.minFilter===HZ)Z.minFilter=E8;return new r1(1,10,this).update(J,Q),Z.minFilter=X,Q.geometry.dispose(),Q.material.dispose(),this}clear(J,Z=!0,k=!0,Y=!0){let R=J.getRenderTarget();for(let Q=0;Q<6;Q++)J.setRenderTarget(this,Q),J.clear(Z,k,Y);J.setRenderTarget(R)}}var o9=256,F5=3,G5=20,IX=256,OX=16,q5=3,E5=new d,B5=new c0;class Lk{constructor(J){this._renderer=J,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new r1(1,10,null),this._boxMesh=new OJ(new L8(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(J,Z=0,k=0.1,Y=100,R={}){let{size:Q=256,position:X=E5}=R,N=this._renderer;this._setSize(Q);let $=this._allocateTarget(),K=this._getSourceTarget(!0);if(Z>0)K.texture.mipmapsAutoUpdate=!1;let{autoClear:W,autoClearColor:U,autoClearDepth:F,autoClearStencil:G}=N,B=J.background;if(N.autoClear=!0,N.autoClearColor=!0,N.autoClearDepth=!0,N.autoClearStencil=!0,B===null)J.background=N.getClearColor(B5);let V=new r1(k,Y,K);if(V.position.copy(X),V.update(N,J),N.autoClear=W,N.autoClearColor=U,N.autoClearDepth=F,N.autoClearStencil=G,J.background=B,Z>0)K.texture.mipmapsAutoUpdate=!0,this._blur($,Z);return this._applyPMREM($),$}fromEquirectangular(J,Z=null){return this._fromTexture(J,Z)}fromCubemap(J,Z=null){return this._fromTexture(J,Z)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=t9(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=r9(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(J,Z){return Z>0?1-Math.sqrt(1-J/Z):0}_setSize(J){this._cubeSize=Math.max(o9,p9(J))}_fromTexture(J,Z){if(J.mapping===x1||J.mapping===H1)this._setSize(J.image.length===0?o9:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);let k=Z||this._allocateTarget();return this._textureToCubemap(J),this._applyPMREM(k),k}_allocateTarget(){let J=this._cubeSize,Z=a9(J,!1,!1),k=Math.log2(J)-F5;for(let Y=0;Y<=k;Y++)Z.texture.mipmaps.push({width:J>>Y,height:J>>Y});return Z.texture.name="PMREM",Z.texture.isPMREMTexture=!0,Z}_getSourceTarget(J=!1){let Z=this._cubeSize,k=this._sourceTarget;if(k===null||k.width!==Z||J&&k.depthBuffer===!1){if(k!==null)k.dispose();this._sourceTarget=a9(Z,!0,J)}return this._sourceTarget}_compileMaterial(J){this._boxMesh.material=J,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(J,Z,k){let Y=this._boxMesh,R=this._cubeCamera;Y.material=k,R.renderTarget=J,R.activeMipmapLevel=Z;let Q=J.width>>Z;J.viewport.set(0,0,Q,Q),R.update(this._renderer,Y),J.viewport.set(0,0,J.width,J.height)}_textureToCubemap(J){let Z;if(J.mapping===x1||J.mapping===H1){if(this._cubemapMaterial===null)this._cubemapMaterial=t9();Z=this._cubemapMaterial,Z.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=r9();Z=this._equirectMaterial}Z.uniforms.envMap.value=J,this._renderCube(this._getSourceTarget(),0,Z)}_applyPMREM(J){if(this._ggxMaterial===null)this._ggxMaterial=V5(),this._integrationMaterial=I5();let Z=this._cubeSize,k=J.texture.mipmaps.length-1,Y=this._ggxMaterial.uniforms;Y.envMap.value=this._sourceTarget.texture;let R=this._integrationMaterial.uniforms;R.envMap.value=this._sourceTarget.texture,R.sourceLod.value=Math.log2(Z/OX);for(let Q=0;Q<=k;Q++){let X=Lk.lodToRoughness(Q,k);if(Q>k-q5)R.roughness.value=X,this._renderCube(J,Q,this._integrationMaterial);else{let N=X>0?Math.log2(Z)+0.5*Math.log2(6/(IX*Math.pow(X,4)))+0.5:0;Y.roughness.value=X,Y.lodBias.value=N,this._renderCube(J,Q,this._ggxMaterial)}}}_blur(J,Z){if(this._blurMaterial===null)this._blurMaterial=O5();let k=this._blurMaterial,Y=k.uniforms,R=this._sourceTarget;Y.sigma.value=Math.min(Z,Math.PI)/Math.SQRT2,Y.envMap.value=R.texture,this._renderCube(J,0,k),Y.envMap.value=J.texture,this._renderCube(R,0,k)}}function a9(J,Z,k){return new _k(J,{minFilter:HZ,generateMipmaps:Z,type:v8,colorSpace:JR,depthBuffer:k})}function Z6(J,Z,k){return new ZZ({name:J,uniforms:Z,vertexShader:n0.cube_vert,fragmentShader:k,side:Y8,blending:hZ,depthTest:!1,depthWrite:!1})}function V5(){return Z6("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${IX}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function I5(){return Z6("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:OX}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function O5(){return Z6("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${G5}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function r9(){return Z6("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function t9(){return Z6("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function H5(J){let Z=new WeakMap,k=new WeakMap,Y=null;function R(F,G=!1){if(F===null||F===void 0)return null;if(G)return X(F);return Q(F)}function Q(F){if(F&&F.isTexture){let G=F.mapping;if(G===s6||G===i6)if(Z.has(F)){let B=Z.get(F).texture;return N(B,F.mapping)}else{let B=F.image;if(B&&B.height>0){let V=new _k(B.height);return V.fromEquirectangularTexture(J,F),Z.set(F,V),F.addEventListener("dispose",K),N(V.texture,F.mapping)}else return null}}return F}function X(F){if(F&&F.isTexture&&F.isPMREMTexture!==!0){let G=F.mapping,B=G===s6||G===i6,V=G===x1||G===H1;if(B||V){let E=k.get(F),q=E!==void 0?E.texture.pmremVersion:0;if(F.isRenderTargetTexture&&F.pmremVersion!==q){if(Y===null)Y=new Lk(J);return E=B?Y.fromEquirectangular(F,E):Y.fromCubemap(F,E),E.texture.pmremVersion=F.pmremVersion,k.set(F,E),E.texture}else if(E!==void 0)return E.texture;else{let O=F.image;if(B&&O&&O.height>0||V&&O&&$(O)){if(Y===null)Y=new Lk(J);return E=B?Y.fromEquirectangular(F):Y.fromCubemap(F),E.texture.pmremVersion=F.pmremVersion,k.set(F,E),F.addEventListener("dispose",W),E.texture}else return null}}}return F}function N(F,G){if(G===s6)F.mapping=x1;else if(G===i6)F.mapping=H1;return F}function $(F){let G=0,B=6;for(let V=0;V<B;V++)if(F[V]!==void 0)G++;return G===B}function K(F){let G=F.target;G.removeEventListener("dispose",K);let B=Z.get(G);if(B!==void 0)Z.delete(G),B.dispose()}function W(F){let G=F.target;G.removeEventListener("dispose",W);let B=k.get(G);if(B!==void 0)k.delete(G),B.dispose()}function U(){if(Z=new WeakMap,k=new WeakMap,Y!==null)Y.dispose(),Y=null}return{get:R,dispose:U}}function D5(J){let Z={};function k(Y){if(Z[Y]!==void 0)return Z[Y];let R=J.getExtension(Y);return Z[Y]=R,R}return{has:function(Y){return k(Y)!==null},init:function(){k("EXT_color_buffer_float"),k("WEBGL_clip_cull_distance"),k("OES_texture_float_linear"),k("EXT_color_buffer_half_float"),k("WEBGL_multisampled_render_to_texture"),k("WEBGL_render_shared_exponent")},get:function(Y){let R=k(Y);if(R===null)b1("WebGLRenderer: "+Y+" extension not supported.");return R}}}function A5(J,Z,k,Y){let R={},Q=new WeakMap,X=new FinalizationRegistry((B)=>delete R[B]);function N(B){$(B.target)}function $(B){if(B.index!==null)Z.remove(B.index);for(let E in B.attributes)Z.remove(B.attributes[E]);B.removeEventListener("dispose",N),delete R[B.id],X.unregister(B);let V=Q.get(B);if(V)Z.remove(V),Q.delete(B);if(Y.releaseStatesOfGeometry(B),B.isInstancedBufferGeometry===!0)delete B._maxInstanceCount;k.memory.geometries--}function K(B,V){if(R[V.id]!==void 0)return V;return V.addEventListener("dispose",N),R[V.id]=new WeakRef(V),X.register(V,V.id,V),k.memory.geometries++,V}function W(B){let V=B.attributes;for(let E in V)Z.update(V[E],J.ARRAY_BUFFER)}function U(B){let V=B.index,E=B.attributes.position,q=0;if(E===void 0)return;let O=V!==null?V.array.length:E.array.length/3-1,H=new(E.count>=65535?$k:Nk)(Math.ceil(O/3)*6,1),_=H.array;if(V!==null){let I=V.array;q=V.version;for(let M=0,j=0;M<O;M+=3){let y=I[M+0],P=I[M+1],S=I[M+2];_[j++]=y,_[j++]=P,_[j++]=P,_[j++]=S,_[j++]=S,_[j++]=y}}else{q=E.version;for(let I=0,M=0;I<O;I+=3){let j=I+0,y=I+1,P=I+2;_[M++]=j,_[M++]=y,_[M++]=y,_[M++]=P,_[M++]=P,_[M++]=j}}H.version=q;let C=Q.get(B);if(C)Z.remove(C);Q.set(B,H)}function F(B){let V=Q.get(B);if(V){let E=B.index;if(E!==null){if(V.version<E.version)U(B)}}else U(B);return Q.get(B)}function G(){for(let B in R){let V=R[B].deref();if(V!==void 0)$(V)}}return{get:K,update:W,getWireframeAttribute:F,dispose:G}}function M5(J,Z,k){let Y;function R(U){Y=U}let Q,X;function N(U){Q=U.type,X=U.bytesPerElement}function $(U,F){J.drawElements(Y,F,Q,U*X),k.update(F,Y,1)}function K(U,F,G){if(G===0)return;J.drawElementsInstanced(Y,F,Q,U*X,G),k.update(F,Y,G)}function W(U,F,G){if(G===0)return;Z.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Y,F,0,Q,U,0,G);let V=0;for(let E=0;E<G;E++)V+=F[E];k.update(V,Y,1)}this.setMode=R,this.setIndex=N,this.render=$,this.renderInstances=K,this.renderMultiDraw=W}function z5(J){let Z={geometries:0,textures:0},k={frame:0,calls:0,triangles:0,points:0,lines:0};function Y(Q,X,N){switch(k.calls++,X){case J.TRIANGLES:k.triangles+=N*(Q/3);break;case J.LINES:k.lines+=N*(Q/2);break;case J.LINE_STRIP:k.lines+=N*(Q-1);break;case J.LINE_LOOP:k.lines+=N*Q;break;case J.POINTS:k.points+=N*Q;break;default:x0("WebGLInfo: Unknown draw mode:",X);break}}function R(){k.calls=0,k.triangles=0,k.points=0,k.lines=0}return{memory:Z,render:k,programs:null,autoReset:!0,reset:R,update:Y}}function L5(J,Z,k){let Y=new WeakMap,R=new IJ;function Q(X,N,$){let K=X.morphTargetInfluences,W=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,U=W!==void 0?W.length:0,F=Y.get(N);if(F===void 0||F.count!==U){let j=function(){I.dispose(),Y.delete(N),N.removeEventListener("dispose",j)};if(F!==void 0)F.texture.dispose();let G=N.morphAttributes.position!==void 0,B=N.morphAttributes.normal!==void 0,V=N.morphAttributes.color!==void 0,E=N.morphAttributes.position||[],q=N.morphAttributes.normal||[],O=N.morphAttributes.color||[],A=0;if(G===!0)A=1;if(B===!0)A=2;if(V===!0)A=3;let H=N.attributes.position.count*A,_=1;if(H>Z.maxTextureSize)_=Math.ceil(H/Z.maxTextureSize),H=Z.maxTextureSize;let C=new Float32Array(H*_*4*U),I=new Rk(C,H,_,U);I.type=a8,I.needsUpdate=!0;let M=A*4;for(let y=0;y<U;y++){let P=E[y],S=q[y],g=O[y],w=H*_*4*y;for(let v=0;v<P.count;v++){let s=v*M;if(G===!0)R.fromBufferAttribute(P,v),C[w+s+0]=R.x,C[w+s+1]=R.y,C[w+s+2]=R.z,C[w+s+3]=0;if(B===!0)R.fromBufferAttribute(S,v),C[w+s+4]=R.x,C[w+s+5]=R.y,C[w+s+6]=R.z,C[w+s+7]=0;if(V===!0)R.fromBufferAttribute(g,v),C[w+s+8]=R.x,C[w+s+9]=R.y,C[w+s+10]=R.z,C[w+s+11]=g.itemSize===4?R.w:1}}F={count:U,texture:I,size:new r0(H,_)},Y.set(N,F),N.addEventListener("dispose",j)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)$.getUniforms().setValue(J,"morphTexture",X.morphTexture,k);else{let G=0;for(let V=0;V<K.length;V++)G+=K[V];let B=N.morphTargetsRelative?1:1-G;$.getUniforms().setValue(J,"morphTargetBaseInfluence",B),$.getUniforms().setValue(J,"morphTargetInfluences",K)}$.getUniforms().setValue(J,"morphTargetsTexture",F.texture,k),$.getUniforms().setValue(J,"morphTargetsTextureSize",F.size)}return{update:Q}}function _5(J,Z,k,Y,R){let Q=new WeakMap;function X(K){let W=R.render.frame,U=K.geometry,F=Z.get(K,U);if(Q.get(F)!==W)Z.update(F),Q.set(F,W);if(K.isInstancedMesh){if(K.hasEventListener("dispose",$)===!1)K.addEventListener("dispose",$);if(Q.get(K)!==W){if(k.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)k.update(K.instanceColor,J.ARRAY_BUFFER);Q.set(K,W)}}if(K.isSkinnedMesh){let G=K.skeleton;if(Q.get(G)!==W)G.update(),Q.set(G,W)}return F}function N(){Q=new WeakMap}function $(K){let W=K.target;if(W.removeEventListener("dispose",$),Y.releaseStatesOfObject(W),k.remove(W.instanceMatrix),W.instanceColor!==null)k.remove(W.instanceColor)}return{update:X,dispose:N}}var w5={[WY]:"LINEAR_TONE_MAPPING",[FY]:"REINHARD_TONE_MAPPING",[GY]:"CINEON_TONE_MAPPING",[g1]:"ACES_FILMIC_TONE_MAPPING",[EY]:"AGX_TONE_MAPPING",[BY]:"NEUTRAL_TONE_MAPPING",[qY]:"CUSTOM_TONE_MAPPING"};function C5(J,Z,k,Y,R,Q){let X=new B8(Z,k,{type:J,depthBuffer:R,stencilBuffer:Q,samples:Y?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),N=null,$=null,K=null,W=new $8;W.setAttribute("position",new mJ([-1,3,0,-1,-1,0,3,-1,0],3)),W.setAttribute("uv",new mJ([0,2,0,0,2,0],2));let U=new qR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),F=new OJ(W,U),G=new Ak(-1,1,1,-1,0,1),B=null,V=null,E=!1,q,O=null,A=[],H=!1;this.setSize=function(_,C){if(X.setSize(_,C),N!==null)N.setSize(_,C);if($!==null)$.setSize(_,C);for(let I=0;I<A.length;I++){let M=A[I];if(M.setSize)M.setSize(_,C)}},this.setEffects=function(_){A=_,H=A.length>0&&A[0].isRenderPass===!0;let{width:C,height:I}=X;if(A.length>0&&N===null)N=new B8(C,I,{type:v8,depthBuffer:!1,stencilBuffer:!1}),$=new B8(C,I,{type:v8,depthBuffer:!1,stencilBuffer:!1});let M=R===!0&&A.some((j)=>j.needsDepthTexture===!0);if(M!==(X.depthTexture!==null)){if(M===!0&&K===null){if(K=new LZ(C,I),Q===!0)K.format=AZ,K.type=gZ}X.dispose(),X.depthTexture=M?K:null,X.resolveDepthBuffer=M,X.storeMultisampledDepthBuffer=M}for(let j=0;j<A.length;j++){let y=A[j];if(y.setSize)y.setSize(C,I);if(M&&y.needsDepthTexture===!0&&y.setDepthTexture)y.setDepthTexture(K)}},this.begin=function(_,C){if(E)return!1;if(_.toneMapping===f8&&A.length===0)return!1;if(O=C,C!==null){let{width:I,height:M}=C;if(X.width!==I||X.height!==M)this.setSize(I,M)}if(H===!1)_.setRenderTarget(X);return q=_.toneMapping,_.toneMapping=f8,!0},this.hasRenderPass=function(){return H},this.end=function(_,C){_.toneMapping=q,E=!0;let I=X,M=N;for(let j=0;j<A.length;j++){let y=A[j];if(y.enabled===!1)continue;if(y.render(_,M,I,C),y.needsSwap!==!1)I=M,M=M===N?$:N}if(B!==_.outputColorSpace||V!==_.toneMapping){if(B=_.outputColorSpace,V=_.toneMapping,U.defines={},a0.getTransfer(B)===FJ)U.defines.SRGB_TRANSFER="";let j=w5[V];if(j)U.defines[j]="";U.needsUpdate=!0}U.uniforms.tDiffuse.value=I.texture,_.setRenderTarget(O),_.render(F,G),O=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){if(X.dispose(),N!==null)N.dispose();if($!==null)$.dispose();W.dispose(),U.dispose()}}var HX=new dJ,DX=new LZ(1,1),AX=new Ek(1),MX=new Rk,zX=new FR,LX=new qk,e9=[],JX=[],ZX=new Float32Array(16),kX=new Float32Array(9),YX=new Float32Array(4);function M1(J,Z,k){let Y=J[0];if(Y<=0||Y>0)return J;let R=Z*k,Q=e9[R];if(Q===void 0)Q=new Float32Array(R),e9[R]=Q;if(Z!==0){Y.toArray(Q,0);for(let X=1,N=0;X!==Z;++X)N+=k,J[X].toArray(Q,N)}return Q}function fJ(J,Z){if(J.length!==Z.length)return!1;for(let k=0,Y=J.length;k<Y;k++)if(J[k]!==Z[k])return!1;return!0}function vJ(J,Z){for(let k=0,Y=Z.length;k<Y;k++)J[k]=Z[k]}function wk(J,Z){let k=JX[Z];if(k===void 0)k=new Int32Array(Z),JX[Z]=k;for(let Y=0;Y!==Z;++Y)k[Y]=J.allocateTextureUnit();return k}function T5(J,Z){let k=this.cache;if(k[0]===Z)return;J.uniform1f(this.addr,Z),k[0]=Z}function P5(J,Z){let k=this.cache;if(Z.x!==void 0){if(k[0]!==Z.x||k[1]!==Z.y)J.uniform2f(this.addr,Z.x,Z.y),k[0]=Z.x,k[1]=Z.y}else{if(fJ(k,Z))return;J.uniform2fv(this.addr,Z),vJ(k,Z)}}function S5(J,Z){let k=this.cache;if(Z.x!==void 0){if(k[0]!==Z.x||k[1]!==Z.y||k[2]!==Z.z)J.uniform3f(this.addr,Z.x,Z.y,Z.z),k[0]=Z.x,k[1]=Z.y,k[2]=Z.z}else if(Z.r!==void 0){if(k[0]!==Z.r||k[1]!==Z.g||k[2]!==Z.b)J.uniform3f(this.addr,Z.r,Z.g,Z.b),k[0]=Z.r,k[1]=Z.g,k[2]=Z.b}else{if(fJ(k,Z))return;J.uniform3fv(this.addr,Z),vJ(k,Z)}}function j5(J,Z){let k=this.cache;if(Z.x!==void 0){if(k[0]!==Z.x||k[1]!==Z.y||k[2]!==Z.z||k[3]!==Z.w)J.uniform4f(this.addr,Z.x,Z.y,Z.z,Z.w),k[0]=Z.x,k[1]=Z.y,k[2]=Z.z,k[3]=Z.w}else{if(fJ(k,Z))return;J.uniform4fv(this.addr,Z),vJ(k,Z)}}function f5(J,Z){let k=this.cache,Y=Z.elements;if(Y===void 0){if(fJ(k,Z))return;J.uniformMatrix2fv(this.addr,!1,Z),vJ(k,Z)}else{if(fJ(k,Y))return;YX.set(Y),J.uniformMatrix2fv(this.addr,!1,YX),vJ(k,Y)}}function v5(J,Z){let k=this.cache,Y=Z.elements;if(Y===void 0){if(fJ(k,Z))return;J.uniformMatrix3fv(this.addr,!1,Z),vJ(k,Z)}else{if(fJ(k,Y))return;kX.set(Y),J.uniformMatrix3fv(this.addr,!1,kX),vJ(k,Y)}}function y5(J,Z){let k=this.cache,Y=Z.elements;if(Y===void 0){if(fJ(k,Z))return;J.uniformMatrix4fv(this.addr,!1,Z),vJ(k,Z)}else{if(fJ(k,Y))return;ZX.set(Y),J.uniformMatrix4fv(this.addr,!1,ZX),vJ(k,Y)}}function b5(J,Z){let k=this.cache;if(k[0]===Z)return;J.uniform1i(this.addr,Z),k[0]=Z}function h5(J,Z){let k=this.cache;if(Z.x!==void 0){if(k[0]!==Z.x||k[1]!==Z.y)J.uniform2i(this.addr,Z.x,Z.y),k[0]=Z.x,k[1]=Z.y}else{if(fJ(k,Z))return;J.uniform2iv(this.addr,Z),vJ(k,Z)}}function g5(J,Z){let k=this.cache;if(Z.x!==void 0){if(k[0]!==Z.x||k[1]!==Z.y||k[2]!==Z.z)J.uniform3i(this.addr,Z.x,Z.y,Z.z),k[0]=Z.x,k[1]=Z.y,k[2]=Z.z}else{if(fJ(k,Z))return;J.uniform3iv(this.addr,Z),vJ(k,Z)}}function x5(J,Z){let k=this.cache;if(Z.x!==void 0){if(k[0]!==Z.x||k[1]!==Z.y||k[2]!==Z.z||k[3]!==Z.w)J.uniform4i(this.addr,Z.x,Z.y,Z.z,Z.w),k[0]=Z.x,k[1]=Z.y,k[2]=Z.z,k[3]=Z.w}else{if(fJ(k,Z))return;J.uniform4iv(this.addr,Z),vJ(k,Z)}}function m5(J,Z){let k=this.cache;if(k[0]===Z)return;J.uniform1ui(this.addr,Z),k[0]=Z}function p5(J,Z){let k=this.cache;if(Z.x!==void 0){if(k[0]!==Z.x||k[1]!==Z.y)J.uniform2ui(this.addr,Z.x,Z.y),k[0]=Z.x,k[1]=Z.y}else{if(fJ(k,Z))return;J.uniform2uiv(this.addr,Z),vJ(k,Z)}}function u5(J,Z){let k=this.cache;if(Z.x!==void 0){if(k[0]!==Z.x||k[1]!==Z.y||k[2]!==Z.z)J.uniform3ui(this.addr,Z.x,Z.y,Z.z),k[0]=Z.x,k[1]=Z.y,k[2]=Z.z}else{if(fJ(k,Z))return;J.uniform3uiv(this.addr,Z),vJ(k,Z)}}function d5(J,Z){let k=this.cache;if(Z.x!==void 0){if(k[0]!==Z.x||k[1]!==Z.y||k[2]!==Z.z||k[3]!==Z.w)J.uniform4ui(this.addr,Z.x,Z.y,Z.z,Z.w),k[0]=Z.x,k[1]=Z.y,k[2]=Z.z,k[3]=Z.w}else{if(fJ(k,Z))return;J.uniform4uiv(this.addr,Z),vJ(k,Z)}}function Ck(J){if(J.version===0)J.compareFunction=RR,J.needsUpdate=!0;return J}function l5(J,Z,k){let Y=this.cache,R=k.allocateTextureUnit();if(Y[0]!==R)J.uniform1i(this.addr,R),Y[0]=R;let Q;if(this.type===J.SAMPLER_2D_SHADOW)Q=Ck(DX);else Q=HX;k.setTexture2D(Z||Q,R)}function c5(J,Z,k){let Y=this.cache,R=k.allocateTextureUnit();if(Y[0]!==R)J.uniform1i(this.addr,R),Y[0]=R;k.setTexture3D(Z||zX,R)}function n5(J,Z,k){let Y=this.cache,R=k.allocateTextureUnit();if(Y[0]!==R)J.uniform1i(this.addr,R),Y[0]=R;let Q;if(this.type===J.SAMPLER_CUBE_SHADOW)Q=Ck(AX);else Q=LX;k.setTextureCube(Z||Q,R)}function s5(J,Z,k){let Y=this.cache,R=k.allocateTextureUnit();if(Y[0]!==R)J.uniform1i(this.addr,R),Y[0]=R;k.setTexture2DArray(Z||MX,R)}function i5(J){switch(J){case 5126:return T5;case 35664:return P5;case 35665:return S5;case 35666:return j5;case 35674:return f5;case 35675:return v5;case 35676:return y5;case 5124:case 35670:return b5;case 35667:case 35671:return h5;case 35668:case 35672:return g5;case 35669:case 35673:return x5;case 5125:return m5;case 36294:return p5;case 36295:return u5;case 36296:return d5;case 35678:case 36198:case 36298:case 36306:case 35682:return l5;case 35679:case 36299:case 36307:return c5;case 35680:case 36300:case 36308:case 36293:return n5;case 36289:case 36303:case 36311:case 36292:return s5}}function o5(J,Z){J.uniform1fv(this.addr,Z)}function a5(J,Z){let k=M1(Z,this.size,2);J.uniform2fv(this.addr,k)}function r5(J,Z){let k=M1(Z,this.size,3);J.uniform3fv(this.addr,k)}function t5(J,Z){let k=M1(Z,this.size,4);J.uniform4fv(this.addr,k)}function e5(J,Z){let k=M1(Z,this.size,4);J.uniformMatrix2fv(this.addr,!1,k)}function JU(J,Z){let k=M1(Z,this.size,9);J.uniformMatrix3fv(this.addr,!1,k)}function ZU(J,Z){let k=M1(Z,this.size,16);J.uniformMatrix4fv(this.addr,!1,k)}function kU(J,Z){J.uniform1iv(this.addr,Z)}function YU(J,Z){J.uniform2iv(this.addr,Z)}function RU(J,Z){J.uniform3iv(this.addr,Z)}function QU(J,Z){J.uniform4iv(this.addr,Z)}function XU(J,Z){J.uniform1uiv(this.addr,Z)}function NU(J,Z){J.uniform2uiv(this.addr,Z)}function $U(J,Z){J.uniform3uiv(this.addr,Z)}function KU(J,Z){J.uniform4uiv(this.addr,Z)}function UU(J,Z,k){let Y=this.cache,R=Z.length,Q=wk(k,R);if(!fJ(Y,Q))J.uniform1iv(this.addr,Q),vJ(Y,Q);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=Ck(DX);else X=HX;for(let N=0;N!==R;++N)k.setTexture2D(Z[N]||X,Q[N])}function WU(J,Z,k){let Y=this.cache,R=Z.length,Q=wk(k,R);if(!fJ(Y,Q))J.uniform1iv(this.addr,Q),vJ(Y,Q);for(let X=0;X!==R;++X)k.setTexture3D(Z[X]||zX,Q[X])}function FU(J,Z,k){let Y=this.cache,R=Z.length,Q=wk(k,R);if(!fJ(Y,Q))J.uniform1iv(this.addr,Q),vJ(Y,Q);let X;if(this.type===J.SAMPLER_CUBE_SHADOW)X=Ck(AX);else X=LX;for(let N=0;N!==R;++N)k.setTextureCube(Z[N]||X,Q[N])}function GU(J,Z,k){let Y=this.cache,R=Z.length,Q=wk(k,R);if(!fJ(Y,Q))J.uniform1iv(this.addr,Q),vJ(Y,Q);for(let X=0;X!==R;++X)k.setTexture2DArray(Z[X]||MX,Q[X])}function qU(J){switch(J){case 5126:return o5;case 35664:return a5;case 35665:return r5;case 35666:return t5;case 35674:return e5;case 35675:return JU;case 35676:return ZU;case 5124:case 35670:return kU;case 35667:case 35671:return YU;case 35668:case 35672:return RU;case 35669:case 35673:return QU;case 5125:return XU;case 36294:return NU;case 36295:return $U;case 36296:return KU;case 35678:case 36198:case 36298:case 36306:case 35682:return UU;case 35679:case 36299:case 36307:return WU;case 35680:case 36300:case 36308:case 36293:return FU;case 36289:case 36303:case 36311:case 36292:return GU}}class _X{constructor(J,Z,k){this.id=J,this.addr=k,this.cache=[],this.type=Z.type,this.setValue=i5(Z.type)}}class wX{constructor(J,Z,k){this.id=J,this.addr=k,this.cache=[],this.type=Z.type,this.size=Z.size,this.setValue=qU(Z.type)}}class CX{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Z,k){let Y=this.seq;for(let R=0,Q=Y.length;R!==Q;++R){let X=Y[R];X.setValue(J,Z[X.id],k)}}}var jR=/(\w+)(\])?(\[|\.)?/g;function RX(J,Z){J.seq.push(Z),J.map[Z.id]=Z}function EU(J,Z,k){let Y=J.name,R=Y.length;jR.lastIndex=0;while(!0){let Q=jR.exec(Y),X=jR.lastIndex,N=Q[1],$=Q[2]==="]",K=Q[3];if($)N=N|0;if(K===void 0||K==="["&&X+2===R){RX(k,K===void 0?new _X(N,J,Z):new wX(N,J,Z));break}else{let U=k.map[N];if(U===void 0)U=new CX(N),RX(k,U);k=U}}}class J6{constructor(J,Z){this.seq=[],this.map={};let k=J.getProgramParameter(Z,J.ACTIVE_UNIFORMS);for(let Q=0;Q<k;++Q){let X=J.getActiveUniform(Z,Q),N=J.getUniformLocation(Z,X.name);EU(X,N,this)}let Y=[],R=[];for(let Q of this.seq)if(Q.type===J.SAMPLER_2D_SHADOW||Q.type===J.SAMPLER_CUBE_SHADOW||Q.type===J.SAMPLER_2D_ARRAY_SHADOW)Y.push(Q);else R.push(Q);if(Y.length>0)this.seq=Y.concat(R)}setValue(J,Z,k,Y){let R=this.map[Z];if(R!==void 0)R.setValue(J,k,Y)}setOptional(J,Z,k){let Y=Z[k];if(Y!==void 0)this.setValue(J,k,Y)}static upload(J,Z,k,Y){for(let R=0,Q=Z.length;R!==Q;++R){let X=Z[R],N=k[X.id];if(N.needsUpdate!==!1)X.setValue(J,N.value,Y)}}static seqWithValue(J,Z){let k=[];for(let Y=0,R=J.length;Y!==R;++Y){let Q=J[Y];if(Q.id in Z)k.push(Q)}return k}}function QX(J,Z,k){let Y=J.createShader(Z);return J.shaderSource(Y,k),J.compileShader(Y),Y}var BU=37297,VU=0;function IU(J,Z){let k=J.split(`
`),Y=[],R=Math.max(Z-6,0),Q=Math.min(Z+6,k.length);for(let X=R;X<Q;X++){let N=X+1;Y.push(`${N===Z?">":" "} ${N}: ${k[X]}`)}return Y.join(`
`)}var XX=new m0;function OU(J){a0._getMatrix(XX,a0.workingColorSpace,J);let Z=`mat3( ${XX.elements.map((k)=>k.toFixed(4))} )`;switch(a0.getTransfer(J)){case ZR:return[Z,"LinearTransferOETF"];case FJ:return[Z,"sRGBTransferOETF"];default:return b0("WebGLProgram: Unsupported color space: ",J),[Z,"LinearTransferOETF"]}}function NX(J,Z,k){let Y=J.getShaderParameter(Z,J.COMPILE_STATUS),Q=(J.getShaderInfoLog(Z)||"").trim();if(Y&&Q==="")return"";let X=/ERROR: 0:(\d+)/.exec(Q);if(X){let N=parseInt(X[1]);return k.toUpperCase()+`

`+Q+`

`+IU(J.getShaderSource(Z),N)}else return Q}function HU(J,Z){let k=OU(Z);return[`vec4 ${J}( vec4 value ) {`,`	return ${k[1]}( vec4( ${k[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var DU={[WY]:"Linear",[FY]:"Reinhard",[GY]:"Cineon",[g1]:"ACESFilmic",[EY]:"AgX",[BY]:"Neutral",[qY]:"Custom"};function AU(J,Z){let k=DU[Z];if(k===void 0)return b0("WebGLProgram: Unsupported toneMapping:",Z),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+k+"ToneMapping( color ); }"}var zk=new d;function MU(){a0.getLuminanceCoefficients(zk);let J=zk.x.toFixed(4),Z=zk.y.toFixed(4),k=zk.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Z}, ${k} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function zU(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(e1).join(`
`)}function LU(J){let Z=[];for(let k in J){let Y=J[k];if(Y===!1)continue;Z.push("#define "+k+" "+Y)}return Z.join(`
`)}function _U(J,Z){let k={},Y=J.getProgramParameter(Z,J.ACTIVE_ATTRIBUTES);for(let R=0;R<Y;R++){let Q=J.getActiveAttrib(Z,R),X=Q.name,N=1;if(Q.type===J.FLOAT_MAT2)N=2;if(Q.type===J.FLOAT_MAT3)N=3;if(Q.type===J.FLOAT_MAT4)N=4;k[X]={type:Q.type,location:J.getAttribLocation(Z,X),locationSize:N}}return k}function e1(J){return J!==""}function $X(J,Z){let k=Z.numSpotLightShadows+Z.numSpotLightMaps-Z.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Z.numSunLights).replace(/NUM_DIR_LIGHTS/g,Z.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Z.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Z.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,k).replace(/NUM_RECT_AREA_LIGHTS/g,Z.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Z.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Z.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Z.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Z.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Z.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Z.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Z.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,Z.numLightProbeGrids)}function KX(J,Z){return J.replace(/NUM_CLIPPING_PLANES/g,Z.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Z.numClippingPlanes-Z.numClipIntersection)}var wU=/^[ \t]*#include +<([\w\d./]+)>/gm;function vR(J){return J.replace(wU,CU)}function CU(J,Z){let k=n0[Z];if(k===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+Z+">");return vR(k)}var TU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function UX(J){return J.replace(TU,PU)}function PU(J,Z,k,Y){let R="";for(let Q=parseInt(Z);Q<parseInt(k);Q++)R+=Y.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return R}function WX(J){let Z=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Z+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Z+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Z+=`
#define LOW_PRECISION`;return Z}var SU={[bZ]:"SHADOWMAP_TYPE_PCF",[V1]:"SHADOWMAP_TYPE_VSM"};function jU(J){return SU[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fU={[H1]:"ENVMAP_MODE_REFRACTION"};function vU(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return fU[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yU={[O9]:"ENVMAP_BLENDING_MULTIPLY",[H9]:"ENVMAP_BLENDING_MIX",[D9]:"ENVMAP_BLENDING_ADD"};function bU(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return yU[J.combine]||"ENVMAP_BLENDING_NONE"}function hU(J,Z,k,Y){let R=J.getContext(),Q=k.defines,X=k.vertexShader,N=k.fragmentShader,$=jU(k),K=k.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",W=vU(k),U=bU(k),F=zU(k),G=LU(Q),B=R.createProgram(),V,E,q=k.glslVersion?"#version "+k.glslVersion+`
`:"";if(k.isRawShaderMaterial){if(V=["#define SHADER_TYPE "+k.shaderType,"#define SHADER_NAME "+k.shaderName,G].filter(e1).join(`
`),V.length>0)V+=`
`;if(E=["#define SHADER_TYPE "+k.shaderType,"#define SHADER_NAME "+k.shaderName,G].filter(e1).join(`
`),E.length>0)E+=`
`}else V=[WX(k),"#define SHADER_TYPE "+k.shaderType,"#define SHADER_NAME "+k.shaderName,G,k.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",k.batching?"#define USE_BATCHING":"",k.batchingColor?"#define USE_BATCHING_COLOR":"",k.instancing?"#define USE_INSTANCING":"",k.instancingColor?"#define USE_INSTANCING_COLOR":"",k.instancingMorph?"#define USE_INSTANCING_MORPH":"",k.useFog&&k.fog?"#define USE_FOG":"",k.useFog&&k.fogExp2?"#define FOG_EXP2":"",k.map?"#define USE_MAP":"",k.envMap?"#define USE_ENVMAP":"",k.envMap?"#define "+W:"",k.lightMap?"#define USE_LIGHTMAP":"",k.aoMap?"#define USE_AOMAP":"",k.bumpMap?"#define USE_BUMPMAP":"",k.normalMap?"#define USE_NORMALMAP":"",k.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",k.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",k.displacementMap?"#define USE_DISPLACEMENTMAP":"",k.emissiveMap?"#define USE_EMISSIVEMAP":"",k.anisotropy?"#define USE_ANISOTROPY":"",k.anisotropyMap?"#define USE_ANISOTROPYMAP":"",k.clearcoatMap?"#define USE_CLEARCOATMAP":"",k.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",k.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",k.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",k.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",k.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",k.specularMap?"#define USE_SPECULARMAP":"",k.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",k.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",k.roughnessMap?"#define USE_ROUGHNESSMAP":"",k.metalnessMap?"#define USE_METALNESSMAP":"",k.alphaMap?"#define USE_ALPHAMAP":"",k.alphaHash?"#define USE_ALPHAHASH":"",k.transmission?"#define USE_TRANSMISSION":"",k.transmissionMap?"#define USE_TRANSMISSIONMAP":"",k.thicknessMap?"#define USE_THICKNESSMAP":"",k.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",k.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",k.mapUv?"#define MAP_UV "+k.mapUv:"",k.alphaMapUv?"#define ALPHAMAP_UV "+k.alphaMapUv:"",k.lightMapUv?"#define LIGHTMAP_UV "+k.lightMapUv:"",k.aoMapUv?"#define AOMAP_UV "+k.aoMapUv:"",k.emissiveMapUv?"#define EMISSIVEMAP_UV "+k.emissiveMapUv:"",k.bumpMapUv?"#define BUMPMAP_UV "+k.bumpMapUv:"",k.normalMapUv?"#define NORMALMAP_UV "+k.normalMapUv:"",k.displacementMapUv?"#define DISPLACEMENTMAP_UV "+k.displacementMapUv:"",k.metalnessMapUv?"#define METALNESSMAP_UV "+k.metalnessMapUv:"",k.roughnessMapUv?"#define ROUGHNESSMAP_UV "+k.roughnessMapUv:"",k.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+k.anisotropyMapUv:"",k.clearcoatMapUv?"#define CLEARCOATMAP_UV "+k.clearcoatMapUv:"",k.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+k.clearcoatNormalMapUv:"",k.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+k.clearcoatRoughnessMapUv:"",k.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+k.diffuseRoughnessMapUv:"",k.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+k.iridescenceMapUv:"",k.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+k.iridescenceThicknessMapUv:"",k.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+k.sheenColorMapUv:"",k.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+k.sheenRoughnessMapUv:"",k.specularMapUv?"#define SPECULARMAP_UV "+k.specularMapUv:"",k.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+k.specularColorMapUv:"",k.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+k.specularIntensityMapUv:"",k.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+k.transmissionMapUv:"",k.thicknessMapUv?"#define THICKNESSMAP_UV "+k.thicknessMapUv:"",k.vertexTangents&&k.flatShading===!1?"#define USE_TANGENT":"",k.vertexNormals?"#define HAS_NORMAL":"",k.vertexColors?"#define USE_COLOR":"",k.vertexAlphas?"#define USE_COLOR_ALPHA":"",k.vertexUv1s?"#define USE_UV1":"",k.vertexUv2s?"#define USE_UV2":"",k.vertexUv3s?"#define USE_UV3":"",k.pointsUvs?"#define USE_POINTS_UV":"",k.flatShading?"#define FLAT_SHADED":"",k.skinning?"#define USE_SKINNING":"",k.morphTargets?"#define USE_MORPHTARGETS":"",k.morphNormals&&k.flatShading===!1?"#define USE_MORPHNORMALS":"",k.morphColors?"#define USE_MORPHCOLORS":"",k.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+k.morphTextureStride:"",k.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+k.morphTargetsCount:"",k.doubleSided?"#define DOUBLE_SIDED":"",k.flipSided?"#define FLIP_SIDED":"",k.shadowMapEnabled?"#define USE_SHADOWMAP":"",k.shadowMapEnabled?"#define "+$:"",k.sizeAttenuation?"#define USE_SIZEATTENUATION":"",k.numLightProbes>0?"#define USE_LIGHT_PROBES":"",k.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",k.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(e1).join(`
`),E=[WX(k),"#define SHADER_TYPE "+k.shaderType,"#define SHADER_NAME "+k.shaderName,G,k.useFog&&k.fog?"#define USE_FOG":"",k.useFog&&k.fogExp2?"#define FOG_EXP2":"",k.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",k.map?"#define USE_MAP":"",k.matcap?"#define USE_MATCAP":"",k.envMap?"#define USE_ENVMAP":"",k.envMap?"#define "+K:"",k.envMap?"#define "+W:"",k.envMap?"#define "+U:"",k.envMapPMREM?"#define ENVMAP_MAX_LOD "+k.envMapMaxLod+".0":"",k.envMapPMREM?"#define ENVMAP_SIZE "+k.envMapSize+".0":"",k.lightMap?"#define USE_LIGHTMAP":"",k.aoMap?"#define USE_AOMAP":"",k.bumpMap?"#define USE_BUMPMAP":"",k.normalMap?"#define USE_NORMALMAP":"",k.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",k.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",k.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",k.emissiveMap?"#define USE_EMISSIVEMAP":"",k.anisotropy?"#define USE_ANISOTROPY":"",k.anisotropyMap?"#define USE_ANISOTROPYMAP":"",k.clearcoat?"#define USE_CLEARCOAT":"",k.clearcoatMap?"#define USE_CLEARCOATMAP":"",k.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",k.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",k.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",k.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",k.dispersion?"#define USE_DISPERSION":"",k.retroreflection?"#define USE_RETROREFLECTION":"",k.iridescence?"#define USE_IRIDESCENCE":"",k.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",k.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",k.specularMap?"#define USE_SPECULARMAP":"",k.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",k.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",k.roughnessMap?"#define USE_ROUGHNESSMAP":"",k.metalnessMap?"#define USE_METALNESSMAP":"",k.alphaMap?"#define USE_ALPHAMAP":"",k.alphaTest?"#define USE_ALPHATEST":"",k.alphaHash?"#define USE_ALPHAHASH":"",k.sheen?"#define USE_SHEEN":"",k.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",k.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",k.transmission?"#define USE_TRANSMISSION":"",k.transmissionMap?"#define USE_TRANSMISSIONMAP":"",k.thicknessMap?"#define USE_THICKNESSMAP":"",k.vertexTangents&&k.flatShading===!1?"#define USE_TANGENT":"",k.vertexColors||k.instancingColor?"#define USE_COLOR":"",k.vertexAlphas||k.batchingColor?"#define USE_COLOR_ALPHA":"",k.vertexUv1s?"#define USE_UV1":"",k.vertexUv2s?"#define USE_UV2":"",k.vertexUv3s?"#define USE_UV3":"",k.pointsUvs?"#define USE_POINTS_UV":"",k.gradientMap?"#define USE_GRADIENTMAP":"",k.flatShading?"#define FLAT_SHADED":"",k.doubleSided?"#define DOUBLE_SIDED":"",k.flipSided?"#define FLIP_SIDED":"",k.shadowMapEnabled?"#define USE_SHADOWMAP":"",k.shadowMapEnabled?"#define "+$:"",k.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",k.numLightProbes>0?"#define USE_LIGHT_PROBES":"",k.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",k.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",k.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",k.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",k.toneMapping!==f8?"#define TONE_MAPPING":"",k.toneMapping!==f8?n0.tonemapping_pars_fragment:"",k.toneMapping!==f8?AU("toneMapping",k.toneMapping):"",k.dithering?"#define DITHERING":"",k.opaque?"#define OPAQUE":"",n0.colorspace_pars_fragment,HU("linearToOutputTexel",k.outputColorSpace),MU(),k.useDepthPacking?"#define DEPTH_PACKING "+k.depthPacking:"",`
`].filter(e1).join(`
`);if(X=vR(X),X=$X(X,k),X=KX(X,k),N=vR(N),N=$X(N,k),N=KX(N,k),X=UX(X),N=UX(N),k.isRawShaderMaterial!==!0)q=`#version 300 es
`,V=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+V,E=["#define varying in",k.glslVersion===XR?"":"layout(location = 0) out highp vec4 pc_fragColor;",k.glslVersion===XR?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let O=q+V+X,A=q+E+N,H=QX(R,R.VERTEX_SHADER,O),_=QX(R,R.FRAGMENT_SHADER,A);if(R.attachShader(B,H),R.attachShader(B,_),k.index0AttributeName!==void 0)R.bindAttribLocation(B,0,k.index0AttributeName);else if(k.hasPositionAttribute===!0)R.bindAttribLocation(B,0,"position");R.linkProgram(B);function C(y){if(J.debug.checkShaderErrors){let P=R.getProgramInfoLog(B)||"",S=R.getShaderInfoLog(H)||"",g=R.getShaderInfoLog(_)||"",w=P.trim(),v=S.trim(),s=g.trim(),h=!0,J0=!0;if(R.getProgramParameter(B,R.LINK_STATUS)===!1)if(h=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(R,B,H,_);else{let l=NX(R,H,"vertex"),o=NX(R,_,"fragment");x0("WebGLProgram: Shader Error "+R.getError()+" - VALIDATE_STATUS "+R.getProgramParameter(B,R.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+w+`
`+l+`
`+o)}else if(w!=="")b0("WebGLProgram: Program Info Log:",w);else if(v===""||s==="")J0=!1;if(J0)y.diagnostics={runnable:h,programLog:w,vertexShader:{log:v,prefix:V},fragmentShader:{log:s,prefix:E}}}R.deleteShader(H),R.deleteShader(_),I=new J6(R,B),M=_U(R,B)}let I;this.getUniforms=function(){if(I===void 0)C(this);return I};let M;this.getAttributes=function(){if(M===void 0)C(this);return M};let j=k.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(j===!1)j=R.getProgramParameter(B,BU);return j},this.destroy=function(){Y.releaseStatesOfProgram(this),R.deleteProgram(B),this.program=void 0},this.type=k.shaderType,this.name=k.shaderName,this.id=VU++,this.cacheKey=Z,this.usedTimes=1,this.program=B,this.vertexShader=H,this.fragmentShader=_,this}var gU=0;class TX{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Z,k){let Y=this._getShaderCacheForMaterial(J);if(Y.has(Z)===!1)Y.add(Z),Z.usedTimes++;if(Y.has(k)===!1)Y.add(k),k.usedTimes++;return this}remove(J){let Z=this.materialCache.get(J);for(let k of Z)if(k.usedTimes--,k.usedTimes===0)this.shaderCache.delete(k.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Z=this.materialCache,k=Z.get(J);if(k===void 0)k=new Set,Z.set(J,k);return k}_getShaderStage(J){let Z=this.shaderCache,k=Z.get(J);if(k===void 0)k=new PX(J),Z.set(J,k);return k}}class PX{constructor(J){this.id=gU++,this.code=J,this.usedTimes=0}}function xU(J){return J===xZ||J===kk||J===Yk}function mU(J,Z,k,Y,R,Q){let X=new Qk,N=new TX,$=new Set,K=[],W=new Map,U=Y.logarithmicDepthBuffer,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function G(I){if($.add(I),I===0)return"uv";return`uv${I}`}function B(I,M,j,y,P,S){let g=y.fog,w=P.geometry,v=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?y.environment:null,s=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,h=Z.get(I.envMap||v,s),J0=F[I.type],l=Y.precision;if(I.precision!==null){if(l=Y.getMaxPrecision(I.precision),l!==I.precision)b0("WebGLProgram.getParameters:",I.precision,"not supported, using",l,"instead.")}let o=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,n=o!==void 0?o.length:0,I0=0;if(w.morphAttributes.position!==void 0)I0=1;if(w.morphAttributes.normal!==void 0)I0=2;if(w.morphAttributes.color!==void 0)I0=3;let e,Y0,O0,_0;if(J0){let q0=h8[J0];e=q0.vertexShader,Y0=q0.fragmentShader}else{e=I.vertexShader,Y0=I.fragmentShader;let q0=N.getVertexShaderStage(I),YJ=N.getFragmentShaderStage(I);N.update(I,q0,YJ),O0=q0.id,_0=YJ.id}let f0=J.getRenderTarget(),H0=J.state.buffers.depth.getReversed(),t0=P.isInstancedMesh===!0,d0=P.isBatchedMesh===!0,g0=!!I.map,$J=!!I.matcap,l0=!!h,v0=l0&&h.isPMREMTexture===!0,BJ=!!I.aoMap,KJ=!!I.lightMap,bJ=!!I.bumpMap&&I.wireframe===!1,UJ=!!I.normalMap,PJ=!!I.displacementMap,SJ=!!I.emissiveMap,hJ=!!I.metalnessMap,Z8=!!I.roughnessMap,x=I.anisotropy>0,AJ=I.clearcoat>0,JJ=I.diffuseRoughness>0,HJ=I.dispersion>0,F0=I.retroreflectivity>0,kJ=I.iridescence>0,w0=I.sheen>0,P0=I.transmission>0,DJ=x&&!!I.anisotropyMap,T=AJ&&!!I.clearcoatMap,D=AJ&&!!I.clearcoatNormalMap,m=AJ&&!!I.clearcoatRoughnessMap,k0=JJ&&!!I.diffuseRoughnessMap,Z0=kJ&&!!I.iridescenceMap,Q0=kJ&&!!I.iridescenceThicknessMap,N0=w0&&!!I.sheenColorMap,i=w0&&!!I.sheenRoughnessMap,r=!!I.specularMap,$0=!!I.specularColorMap,f=!!I.specularIntensityMap,t=P0&&!!I.transmissionMap,a=P0&&!!I.thicknessMap,R0=!!I.gradientMap,X0=!!I.alphaMap,K0=I.alphaTest>0,S0=!!I.alphaHash,M0=!!I.extensions,G0=f8;if(I.toneMapped){if(f0===null||f0.isXRRenderTarget===!0)G0=J.toneMapping}let j0=v0?h.isCompressedCubeTexture?h.image[0].mipmaps:h.mipmaps:null,p0={shaderID:J0,shaderType:I.type,shaderName:I.name,vertexShader:e,fragmentShader:Y0,defines:I.defines,customVertexShaderID:O0,customFragmentShaderID:_0,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:l,batching:d0,batchingColor:d0&&P._colorsTexture!==null,instancing:t0,instancingColor:t0&&P.instanceColor!==null,instancingMorph:t0&&P.morphTexture!==null,outputColorSpace:f0===null?J.outputColorSpace:f0.isXRRenderTarget===!0?f0.texture.colorSpace:a0.workingColorSpace,alphaToCoverage:!!I.alphaToCoverage,map:g0,matcap:$J,envMap:l0,envMapMode:l0&&h.mapping,envMapPMREM:v0,envMapMaxLod:v0?j0.length-1:null,envMapSize:v0?j0[0].width:null,aoMap:BJ,lightMap:KJ,bumpMap:bJ,normalMap:UJ,displacementMap:PJ,emissiveMap:SJ,normalMapObjectSpace:UJ&&I.normalMapType===S9,normalMapTangentSpace:UJ&&I.normalMapType===eY,packedNormalMap:UJ&&I.normalMapType===eY&&xU(I.normalMap.format),metalnessMap:hJ,roughnessMap:Z8,anisotropy:x,anisotropyMap:DJ,clearcoat:AJ,clearcoatMap:T,clearcoatNormalMap:D,clearcoatRoughnessMap:m,diffuseRoughness:JJ,diffuseRoughnessMap:k0,dispersion:HJ,retroreflection:F0,iridescence:kJ,iridescenceMap:Z0,iridescenceThicknessMap:Q0,sheen:w0,sheenColorMap:N0,sheenRoughnessMap:i,specularMap:r,specularColorMap:$0,specularIntensityMap:f,transmission:P0,transmissionMap:t,thicknessMap:a,gradientMap:R0,opaque:I.transparent===!1&&I.blending===h1&&I.alphaToCoverage===!1,alphaMap:X0,alphaTest:K0,alphaHash:S0,combine:I.combine,mapUv:g0&&G(I.map.channel),aoMapUv:BJ&&G(I.aoMap.channel),lightMapUv:KJ&&G(I.lightMap.channel),bumpMapUv:bJ&&G(I.bumpMap.channel),normalMapUv:UJ&&G(I.normalMap.channel),displacementMapUv:PJ&&G(I.displacementMap.channel),emissiveMapUv:SJ&&G(I.emissiveMap.channel),metalnessMapUv:hJ&&G(I.metalnessMap.channel),roughnessMapUv:Z8&&G(I.roughnessMap.channel),anisotropyMapUv:DJ&&G(I.anisotropyMap.channel),clearcoatMapUv:T&&G(I.clearcoatMap.channel),clearcoatNormalMapUv:D&&G(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:m&&G(I.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:k0&&G(I.diffuseRoughnessMap.channel),iridescenceMapUv:Z0&&G(I.iridescenceMap.channel),iridescenceThicknessMapUv:Q0&&G(I.iridescenceThicknessMap.channel),sheenColorMapUv:N0&&G(I.sheenColorMap.channel),sheenRoughnessMapUv:i&&G(I.sheenRoughnessMap.channel),specularMapUv:r&&G(I.specularMap.channel),specularColorMapUv:$0&&G(I.specularColorMap.channel),specularIntensityMapUv:f&&G(I.specularIntensityMap.channel),transmissionMapUv:t&&G(I.transmissionMap.channel),thicknessMapUv:a&&G(I.thicknessMap.channel),alphaMapUv:X0&&G(I.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(UJ||x),vertexNormals:!!w.attributes.normal,vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!w.attributes.uv&&(g0||X0),fog:!!g,useFog:I.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:I.wireframe===!1&&(I.flatShading===!0||w.attributes.normal===void 0&&UJ===!1&&(I.isMeshLambertMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isMeshPhysicalMaterial)),sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:U,reversedDepthBuffer:H0,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:w.attributes.position!==void 0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:n,morphTextureStride:I0,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:S.filter((q0)=>q0.texture!==null).length,numClippingPlanes:Q.numPlanes,numClipIntersection:Q.numIntersection,dithering:I.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:G0,decodeVideoTexture:g0&&I.map.isVideoTexture===!0&&a0.getTransfer(I.map.colorSpace)===FJ,decodeVideoTextureEmissive:SJ&&I.emissiveMap.isVideoTexture===!0&&a0.getTransfer(I.emissiveMap.colorSpace)===FJ,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===N8,flipSided:I.side===Y8,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:M0&&I.extensions.clipCullDistance===!0&&k.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(M0&&I.extensions.multiDraw===!0||d0)&&k.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:k.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return p0.vertexUv1s=$.has(1),p0.vertexUv2s=$.has(2),p0.vertexUv3s=$.has(3),$.clear(),p0}function V(I){let M=[];if(I.shaderID)M.push(I.shaderID);else M.push(I.customVertexShaderID),M.push(I.customFragmentShaderID);if(I.defines!==void 0)for(let j in I.defines)M.push(j),M.push(I.defines[j]);if(I.isRawShaderMaterial===!1)E(M,I),q(M,I),M.push(J.outputColorSpace);return M.push(I.customProgramCacheKey),M.join()}function E(I,M){I.push(M.precision),I.push(M.outputColorSpace),I.push(M.envMapMode),I.push(M.envMapPMREM),I.push(M.envMapMaxLod),I.push(M.envMapSize),I.push(M.mapUv),I.push(M.alphaMapUv),I.push(M.lightMapUv),I.push(M.aoMapUv),I.push(M.bumpMapUv),I.push(M.normalMapUv),I.push(M.displacementMapUv),I.push(M.emissiveMapUv),I.push(M.metalnessMapUv),I.push(M.roughnessMapUv),I.push(M.anisotropyMapUv),I.push(M.clearcoatMapUv),I.push(M.clearcoatNormalMapUv),I.push(M.clearcoatRoughnessMapUv),I.push(M.diffuseRoughnessMapUv),I.push(M.iridescenceMapUv),I.push(M.iridescenceThicknessMapUv),I.push(M.sheenColorMapUv),I.push(M.sheenRoughnessMapUv),I.push(M.specularMapUv),I.push(M.specularColorMapUv),I.push(M.specularIntensityMapUv),I.push(M.transmissionMapUv),I.push(M.thicknessMapUv),I.push(M.combine),I.push(M.fogExp2),I.push(M.sizeAttenuation),I.push(M.morphTargetsCount),I.push(M.numSunLights),I.push(M.numDirLights),I.push(M.numPointLights),I.push(M.numSpotLights),I.push(M.numSpotLightMaps),I.push(M.numHemiLights),I.push(M.numRectAreaLights),I.push(M.numSunLightShadows),I.push(M.numDirLightShadows),I.push(M.numPointLightShadows),I.push(M.numSpotLightShadows),I.push(M.numSpotLightShadowsWithMaps),I.push(M.numLightProbes),I.push(M.numLightProbeGrids),I.push(M.shadowMapType),I.push(M.toneMapping),I.push(M.numClippingPlanes),I.push(M.numClipIntersection),I.push(M.depthPacking)}function q(I,M){if(X.disableAll(),M.instancing)X.enable(0);if(M.instancingColor)X.enable(1);if(M.instancingMorph)X.enable(2);if(M.matcap)X.enable(3);if(M.envMap)X.enable(4);if(M.normalMapObjectSpace)X.enable(5);if(M.normalMapTangentSpace)X.enable(6);if(M.clearcoat)X.enable(7);if(M.iridescence)X.enable(8);if(M.alphaTest)X.enable(9);if(M.vertexColors)X.enable(10);if(M.vertexAlphas)X.enable(11);if(M.vertexUv1s)X.enable(12);if(M.vertexUv2s)X.enable(13);if(M.vertexUv3s)X.enable(14);if(M.vertexTangents)X.enable(15);if(M.anisotropy)X.enable(16);if(M.alphaHash)X.enable(17);if(M.batching)X.enable(18);if(M.dispersion)X.enable(19);if(M.retroreflection)X.enable(24);if(M.diffuseRoughness)X.enable(25);if(M.batchingColor)X.enable(20);if(M.gradientMap)X.enable(21);if(M.packedNormalMap)X.enable(22);if(M.vertexNormals)X.enable(23);if(I.push(X.mask),X.disableAll(),M.fog)X.enable(0);if(M.useFog)X.enable(1);if(M.flatShading)X.enable(2);if(M.logarithmicDepthBuffer)X.enable(3);if(M.reversedDepthBuffer)X.enable(4);if(M.skinning)X.enable(5);if(M.morphTargets)X.enable(6);if(M.morphNormals)X.enable(7);if(M.morphColors)X.enable(8);if(M.premultipliedAlpha)X.enable(9);if(M.shadowMapEnabled)X.enable(10);if(M.doubleSided)X.enable(11);if(M.flipSided)X.enable(12);if(M.useDepthPacking)X.enable(13);if(M.dithering)X.enable(14);if(M.transmission)X.enable(15);if(M.sheen)X.enable(16);if(M.opaque)X.enable(17);if(M.pointsUvs)X.enable(18);if(M.decodeVideoTexture)X.enable(19);if(M.decodeVideoTextureEmissive)X.enable(20);if(M.alphaToCoverage)X.enable(21);if(M.numLightProbeGrids>0)X.enable(22);if(M.hasPositionAttribute)X.enable(23);I.push(X.mask)}function O(I){let M=F[I.type],j;if(M){let y=h8[M];j=d9.clone(y.uniforms)}else j=I.uniforms;return j}function A(I,M){let j=W.get(M);if(j!==void 0)++j.usedTimes;else j=new hU(J,M,I,R),K.push(j),W.set(M,j);return j}function H(I){if(--I.usedTimes===0){let M=K.indexOf(I);K[M]=K[K.length-1],K.pop(),W.delete(I.cacheKey),I.destroy()}}function _(I){N.remove(I)}function C(){N.dispose()}return{getParameters:B,getProgramCacheKey:V,getUniforms:O,acquireProgram:A,releaseProgram:H,releaseShaderCache:_,programs:K,dispose:C}}function pU(){let J=new WeakMap;function Z(X){return J.has(X)}function k(X){let N=J.get(X);if(N===void 0)N={},J.set(X,N);return N}function Y(X){J.delete(X)}function R(X,N,$){J.get(X)[N]=$}function Q(){J=new WeakMap}return{has:Z,get:k,remove:Y,update:R,dispose:Q}}function uU(J,Z){if(J.groupOrder!==Z.groupOrder)return J.groupOrder-Z.groupOrder;else if(J.renderOrder!==Z.renderOrder)return J.renderOrder-Z.renderOrder;else if(J.material.id!==Z.material.id)return J.material.id-Z.material.id;else if(J.materialVariant!==Z.materialVariant)return J.materialVariant-Z.materialVariant;else if(J.z!==Z.z)return J.z-Z.z;else return J.id-Z.id}function FX(J,Z){if(J.groupOrder!==Z.groupOrder)return J.groupOrder-Z.groupOrder;else if(J.renderOrder!==Z.renderOrder)return J.renderOrder-Z.renderOrder;else if(J.z!==Z.z)return Z.z-J.z;else return J.id-Z.id}function GX(){let J=[],Z=0,k=[],Y=[],R=[];function Q(){Z=0,k.length=0,Y.length=0,R.length=0}function X(F){let G=0;if(F.isInstancedMesh)G+=2;if(F.isSkinnedMesh)G+=1;return G}function N(F,G,B,V,E,q){let O=J[Z];if(O===void 0)O={id:F.id,object:F,geometry:G,material:B,materialVariant:X(F),groupOrder:V,renderOrder:F.renderOrder,z:E,group:q},J[Z]=O;else O.id=F.id,O.object=F,O.geometry=G,O.material=B,O.materialVariant=X(F),O.groupOrder=V,O.renderOrder=F.renderOrder,O.z=E,O.group=q;return Z++,O}function $(F,G,B,V,E,q,O){if(O.reversedDepth===!0)E=-E;let A=N(F,G,B,V,E,q);if(B.transmission>0)Y.push(A);else if(B.transparent===!0)R.push(A);else k.push(A)}function K(F,G,B,V,E,q){let O=N(F,G,B,V,E,q);if(B.transmission>0)Y.unshift(O);else if(B.transparent===!0)R.unshift(O);else k.unshift(O)}function W(F,G){if(k.length>1)k.sort(F||uU);if(Y.length>1)Y.sort(G||FX);if(R.length>1)R.sort(G||FX)}function U(){for(let F=Z,G=J.length;F<G;F++){let B=J[F];if(B.id===null)break;B.id=null,B.object=null,B.geometry=null,B.material=null,B.group=null}}return{opaque:k,transmissive:Y,transparent:R,init:Q,push:$,unshift:K,finish:U,sort:W}}function dU(){let J=new WeakMap;function Z(Y,R){let Q=J.get(Y),X;if(Q===void 0)X=new GX,J.set(Y,[X]);else if(R>=Q.length)X=new GX,Q.push(X);else X=Q[R];return X}function k(){J=new WeakMap}return{get:Z,dispose:k}}function lU(){let J={};return{get:function(Z){if(J[Z.id]!==void 0)return J[Z.id];let k;switch(Z.type){case"SunLight":case"DirectionalLight":k={direction:new d,color:new c0};break;case"SpotLight":k={position:new d,direction:new d,color:new c0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":k={position:new d,color:new c0,distance:0,decay:0};break;case"HemisphereLight":k={direction:new d,skyColor:new c0,groundColor:new c0};break;case"RectAreaLight":k={color:new c0,position:new d,halfWidth:new d,halfHeight:new d};break}return J[Z.id]=k,k}}}function cU(){let J={};return{get:function(Z){if(J[Z.id]!==void 0)return J[Z.id];let k;switch(Z.type){case"SunLight":case"DirectionalLight":k={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r0};break;case"SpotLight":k={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r0};break;case"PointLight":k={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Z.id]=k,k}}}var nU=0;function sU(J,Z){return(Z.castShadow?2:0)-(J.castShadow?2:0)+(Z.map?1:0)-(J.map?1:0)}function iU(J){let Z=new lU,k=cU(),Y={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let K=0;K<9;K++)Y.probe.push(new d);let R=new d,Q=new NJ,X=new NJ;function N(K){let W=0,U=0,F=0;for(let S=0;S<9;S++)Y.probe[S].set(0,0,0);let G=0,B=0,V=0,E=0,q=0,O=0,A=0,H=0,_=0,C=0,I=0,M=0,j=0,y=0;K.sort(sU);for(let S=0,g=K.length;S<g;S++){let w=K[S],v=w.color,s=w.intensity,h=w.distance,J0=null;if(w.shadow&&w.shadow.map)if(w.shadow.map.texture.format===xZ)J0=w.shadow.map.texture;else J0=w.shadow.map.depthTexture||w.shadow.map.texture;if(w.isAmbientLight)W+=v.r*s,U+=v.g*s,F+=v.b*s;else if(w.isLightProbe){for(let l=0;l<9;l++)Y.probe[l].addScaledVector(w.sh.coefficients[l],s);y++}else if(w.isSunLight){let l=Z.get(w);if(l.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let o=w.shadow,n=k.get(w);n.shadowIntensity=o.intensity,n.shadowBias=o.bias,n.shadowNormalBias=o.normalBias,n.shadowRadius=o.radius,n.shadowMapSize.copy(o.mapSize).multiply(o.getFrameExtents()),Y.sunShadow[B]=n,Y.sunShadowMap[B]=J0;let I0=o.getViewportCount();for(let e=0;e<I0;e++)Y.sunShadowMatrix[V+e]=o.getMatrix(e),Y.sunShadowCascade[V+e]=o._cascadeData[e];V+=I0,B++}Y.sun[G]=l,G++}else if(w.isDirectionalLight){let l=Z.get(w);if(l.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let o=w.shadow,n=k.get(w);n.shadowIntensity=o.intensity,n.shadowBias=o.bias,n.shadowNormalBias=o.normalBias,n.shadowRadius=o.radius,n.shadowMapSize=o.mapSize,Y.directionalShadow[E]=n,Y.directionalShadowMap[E]=J0,Y.directionalShadowMatrix[E]=w.shadow.matrix,_++}Y.directional[E]=l,E++}else if(w.isSpotLight){let l=Z.get(w);l.position.setFromMatrixPosition(w.matrixWorld),l.color.copy(v).multiplyScalar(s),l.distance=h,l.coneCos=Math.cos(w.angle),l.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),l.decay=w.decay,Y.spot[O]=l;let o=w.shadow;if(w.map){if(Y.spotLightMap[M]=w.map,M++,o.updateMatrices(w),w.castShadow)j++}if(Y.spotLightMatrix[O]=o.matrix,w.castShadow){let n=k.get(w);n.shadowIntensity=o.intensity,n.shadowBias=o.bias,n.shadowNormalBias=o.normalBias,n.shadowRadius=o.radius,n.shadowMapSize=o.mapSize,Y.spotShadow[O]=n,Y.spotShadowMap[O]=J0,I++}O++}else if(w.isRectAreaLight){let l=Z.get(w);l.color.copy(v).multiplyScalar(s),l.halfWidth.set(w.width*0.5,0,0),l.halfHeight.set(0,w.height*0.5,0),Y.rectArea[A]=l,A++}else if(w.isPointLight){let l=Z.get(w);if(l.color.copy(w.color).multiplyScalar(w.intensity),l.distance=w.distance,l.decay=w.decay,w.castShadow){let o=w.shadow,n=k.get(w);n.shadowIntensity=o.intensity,n.shadowBias=o.bias,n.shadowNormalBias=o.normalBias,n.shadowRadius=o.radius,n.shadowMapSize=o.mapSize,n.shadowCameraNear=o.camera.near,n.shadowCameraFar=o.camera.far,Y.pointShadow[q]=n,Y.pointShadowMap[q]=J0,Y.pointShadowMatrix[q]=w.shadow.matrix,C++}Y.point[q]=l,q++}else if(w.isHemisphereLight){let l=Z.get(w);l.skyColor.copy(w.color).multiplyScalar(s),l.groundColor.copy(w.groundColor).multiplyScalar(s),Y.hemi[H]=l,H++}}if(A>0)if(J.has("OES_texture_float_linear")===!0)Y.rectAreaLTC1=E0.LTC_FLOAT_1,Y.rectAreaLTC2=E0.LTC_FLOAT_2;else Y.rectAreaLTC1=E0.LTC_HALF_1,Y.rectAreaLTC2=E0.LTC_HALF_2;Y.ambient[0]=W,Y.ambient[1]=U,Y.ambient[2]=F;let P=Y.hash;if(P.sunLength!==G||P.directionalLength!==E||P.pointLength!==q||P.spotLength!==O||P.rectAreaLength!==A||P.hemiLength!==H||P.numSunShadows!==B||P.numDirectionalShadows!==_||P.numPointShadows!==C||P.numSpotShadows!==I||P.numSpotMaps!==M||P.numLightProbes!==y)Y.sun.length=G,Y.directional.length=E,Y.spot.length=O,Y.rectArea.length=A,Y.point.length=q,Y.hemi.length=H,Y.sunShadow.length=B,Y.sunShadowMap.length=B,Y.sunShadowMatrix.length=V,Y.sunShadowCascade.length=V,Y.directionalShadow.length=_,Y.directionalShadowMap.length=_,Y.directionalShadowMatrix.length=_,Y.pointShadow.length=C,Y.pointShadowMap.length=C,Y.pointShadowMatrix.length=C,Y.spotShadow.length=I,Y.spotShadowMap.length=I,Y.spotLightMatrix.length=I+M-j,Y.spotLightMap.length=M,Y.numSpotLightShadowsWithMaps=j,Y.numLightProbes=y,P.sunLength=G,P.directionalLength=E,P.pointLength=q,P.spotLength=O,P.rectAreaLength=A,P.hemiLength=H,P.numSunShadows=B,P.numDirectionalShadows=_,P.numPointShadows=C,P.numSpotShadows=I,P.numSpotMaps=M,P.numLightProbes=y,Y.version=nU++}function $(K,W){let U=0,F=0,G=0,B=0,V=0,E=0,q=W.matrixWorldInverse;for(let O=0,A=K.length;O<A;O++){let H=K[O];if(H.isSunLight){let _=Y.sun[U];_.direction.setFromMatrixPosition(H.matrixWorld),_.direction.transformDirection(q),U++}else if(H.isDirectionalLight){let _=Y.directional[F];_.direction.setFromMatrixPosition(H.matrixWorld),R.setFromMatrixPosition(H.target.matrixWorld),_.direction.sub(R),_.direction.transformDirection(q),F++}else if(H.isSpotLight){let _=Y.spot[B];_.position.setFromMatrixPosition(H.matrixWorld),_.position.applyMatrix4(q),_.direction.setFromMatrixPosition(H.matrixWorld),R.setFromMatrixPosition(H.target.matrixWorld),_.direction.sub(R),_.direction.transformDirection(q),B++}else if(H.isRectAreaLight){let _=Y.rectArea[V];_.position.setFromMatrixPosition(H.matrixWorld),_.position.applyMatrix4(q),X.identity(),Q.copy(H.matrixWorld),Q.premultiply(q),X.extractRotation(Q),_.halfWidth.set(H.width*0.5,0,0),_.halfHeight.set(0,H.height*0.5,0),_.halfWidth.applyMatrix4(X),_.halfHeight.applyMatrix4(X),V++}else if(H.isPointLight){let _=Y.point[G];_.position.setFromMatrixPosition(H.matrixWorld),_.position.applyMatrix4(q),G++}else if(H.isHemisphereLight){let _=Y.hemi[E];_.direction.setFromMatrixPosition(H.matrixWorld),_.direction.transformDirection(q),E++}}}return{setup:N,setupView:$,state:Y}}function qX(J){let Z=new iU(J),k=[],Y=[],R=[];function Q(U){W.camera=U,k.length=0,Y.length=0,R.length=0}function X(U){if(U.isLightProbeGrid)R.push(U);else k.push(U)}function N(U){Y.push(U)}function $(){Z.setup(k),R.sort((U,F)=>U.priority-F.priority||U.id-F.id)}function K(U){Z.setupView(k,U)}let W={lightsArray:k,shadowsArray:Y,lightProbeGridArray:R,camera:null,lights:Z,transmissionRenderTarget:{},textureUnits:0};return{init:Q,state:W,setupLights:$,setupLightsView:K,pushLight:X,pushShadow:N}}function oU(J){let Z=new WeakMap;function k(R,Q=0){let X=Z.get(R),N;if(X===void 0)N=new qX(J),Z.set(R,[N]);else if(Q>=X.length)N=new qX(J),X.push(N);else N=X[Q];return N}function Y(){Z=new WeakMap}return{get:k,dispose:Y}}var aU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tU=[new d(1,0,0),new d(-1,0,0),new d(0,1,0),new d(0,-1,0),new d(0,0,1),new d(0,0,-1)],eU=[new d(0,-1,0),new d(0,-1,0),new d(0,0,1),new d(0,0,-1),new d(0,-1,0),new d(0,-1,0)],EX=new NJ,t1=new d,fR=new d;function JW(J,Z,k){let Y=new yZ,R=new r0,Q=new r0,X=new IJ,N=new ER,$=new BR,K={},W=k.maxTextureSize,U={[I1]:Y8,[Y8]:I1,[N8]:N8},F=new ZZ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new r0},radius:{value:4}},vertexShader:aU,fragmentShader:rU}),G=F.clone();G.defines.HORIZONTAL_PASS=1;let B=new $8;B.setAttribute("position",new q8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let V=new OJ(B,F),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bZ;let q=this.type;this.render=function(C,I,M){if(E.enabled===!1)return;if(E.autoUpdate===!1&&E.needsUpdate===!1)return;if(C.length===0)return;if(this.type===cQ)b0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bZ;let j=J.getRenderTarget(),y=J.getActiveCubeFace(),P=J.getActiveMipmapLevel(),S=J.state;if(S.setBlending(hZ),S.buffers.depth.getReversed()===!0)S.buffers.color.setClear(0,0,0,0);else S.buffers.color.setClear(1,1,1,1);S.buffers.depth.setTest(!0),S.setScissorTest(!1);let g=q!==this.type;if(g)I.traverse(function(w){if(w.material)if(Array.isArray(w.material))w.material.forEach((v)=>v.needsUpdate=!0);else w.material.needsUpdate=!0});for(let w=0,v=C.length;w<v;w++){let s=C[w],h=s.shadow;if(h===void 0){b0("WebGLShadowMap:",s,"has no shadow.");continue}if(h.autoUpdate===!1&&h.needsUpdate===!1)continue;R.copy(h.mapSize);let J0=h.getFrameExtents();if(R.multiply(J0),Q.copy(h.mapSize),R.x>W||R.y>W){if(R.x>W)Q.x=Math.floor(W/J0.x),R.x=Q.x*J0.x,h.mapSize.x=Q.x;if(R.y>W)Q.y=Math.floor(W/J0.y),R.y=Q.y*J0.y,h.mapSize.y=Q.y}let l=J.state.buffers.depth.getReversed();if(h.camera._reversedDepth=l,h.map===null||g===!0){if(h.map!==null){if(h.map.depthTexture!==null)h.map.depthTexture.dispose(),h.map.depthTexture=null;h.map.dispose()}if(this.type===V1){if(s.isPointLight){b0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}h.map=new B8(R.x,R.y,{format:xZ,type:v8,minFilter:E8,magFilter:E8,generateMipmaps:!1}),h.map.texture.name=s.name+".shadowMap",h.map.depthTexture=new LZ(R.x,R.y,a8),h.map.depthTexture.name=s.name+".shadowMapDepth",h.map.depthTexture.format=D1,h.map.depthTexture.compareFunction=null,h.map.depthTexture.minFilter=OZ,h.map.depthTexture.magFilter=OZ}else{if(s.isPointLight)h.map=new _k(R.x),h.map.depthTexture=new Ek(R.x,DZ);else h.map=new B8(R.x,R.y),h.map.depthTexture=new LZ(R.x,R.y,DZ);if(h.map.depthTexture.name=s.name+".shadowMap",h.map.depthTexture.format=D1,this.type===bZ)h.map.depthTexture.compareFunction=l?YR:kR,h.map.depthTexture.minFilter=E8,h.map.depthTexture.magFilter=E8;else h.map.depthTexture.compareFunction=null,h.map.depthTexture.minFilter=OZ,h.map.depthTexture.magFilter=OZ}h.camera.updateProjectionMatrix()}if(h.map.isWebGLCubeRenderTarget!==!0&&(h.map.width!==R.x||h.map.height!==R.y))h.map.setSize(R.x,R.y);let o=h.map.isWebGLCubeRenderTarget?6:h.getViewportCount();if(s.isPointLight!==!0)h.updateMatrices(s,M);let n=(h.camera.layers.mask&4294967294)!==0?h.camera.layers:M.layers;for(let I0=0;I0<o;I0++){let e=h.getCamera(I0);if(s.isPointLight){let{camera:Y0,matrix:O0}=h,_0=s.distance||Y0.far;if(_0!==Y0.far)Y0.far=_0,Y0.updateProjectionMatrix();t1.setFromMatrixPosition(s.matrixWorld),Y0.position.copy(t1),fR.copy(Y0.position),fR.add(tU[I0]),Y0.up.copy(eU[I0]),Y0.lookAt(fR),Y0.updateMatrixWorld(),O0.makeTranslation(-t1.x,-t1.y,-t1.z),EX.multiplyMatrices(Y0.projectionMatrix,Y0.matrixWorldInverse),h._frustum.setFromProjectionMatrix(EX,Y0.coordinateSystem,Y0.reversedDepth)}if(h.map.isWebGLCubeRenderTarget)J.setRenderTarget(h.map,I0),J.clear();else{if(I0===0)J.setRenderTarget(h.map),J.clear();let Y0=h.getViewport(I0);X.set(Q.x*Y0.x,Q.y*Y0.y,Q.x*Y0.z,Q.y*Y0.w),S.viewport(X)}Y=h.getFrustum(I0),H(I,M,e,s,n,this.type)}if(h.isPointLightShadow!==!0&&this.type===V1)O(h,M);h.needsUpdate=!1}q=this.type,E.needsUpdate=!1,J.setRenderTarget(j,y,P)};function O(C,I){let M=Z.update(V);if(F.defines.VSM_SAMPLES!==C.blurSamples)F.defines.VSM_SAMPLES=C.blurSamples,G.defines.VSM_SAMPLES=C.blurSamples,F.needsUpdate=!0,G.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new B8(R.x,R.y,{format:xZ,type:v8});else if(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)C.mapPass.setSize(C.map.width,C.map.height);F.uniforms.shadow_pass.value=C.map.depthTexture,F.uniforms.resolution.value.set(C.map.width,C.map.height),F.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(I,null,M,F,V,null),G.uniforms.shadow_pass.value=C.mapPass.texture,G.uniforms.resolution.value.set(C.map.width,C.map.height),G.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(I,null,M,G,V,null)}function A(C,I,M,j){let y=null,P=M.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)y=P;else if(y=M.isPointLight===!0?$:N,J.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let S=y.uuid,g=I.uuid,w=K[S];if(w===void 0)w={},K[S]=w;let v=w[g];if(v===void 0)v=y.clone(),w[g]=v,I.addEventListener("dispose",_);y=v}if(y.visible=I.visible,y.wireframe=I.wireframe,j===V1)y.side=I.shadowSide!==null?I.shadowSide:I.side;else y.side=I.shadowSide!==null?I.shadowSide:U[I.side];if(y.alphaMap=I.alphaMap,y.alphaTest=I.alphaToCoverage===!0?0.5:I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,M.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let S=J.properties.get(y);S.light=M}return y}function H(C,I,M,j,y,P){if(C.visible===!1)return;if(C.layers.test(y)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&P===V1)&&(!C.frustumCulled||C.intersectsFrustum(Y))){C.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,C.matrixWorld);let w=Z.update(C),v=C.material;if(Array.isArray(v)){let s=w.groups;for(let h=0,J0=s.length;h<J0;h++){let l=s[h],o=v[l.materialIndex];if(o&&o.visible){let n=A(C,o,j,P);C.onBeforeShadow(J,C,I,M,w,n,l),J.renderBufferDirect(M,null,w,n,C,l),C.onAfterShadow(J,C,I,M,w,n,l)}}}else if(v.visible){let s=A(C,v,j,P);C.onBeforeShadow(J,C,I,M,w,s,null),J.renderBufferDirect(M,null,w,s,C,null),C.onAfterShadow(J,C,I,M,w,s,null)}}}let g=C.children;for(let w=0,v=g.length;w<v;w++)H(g[w],I,M,j,y,P)}function _(C){C.target.removeEventListener("dispose",_);for(let M in K){let j=K[M],y=C.target.uuid;if(y in j)j[y].dispose(),delete j[y]}}}function ZW(J,Z){function k(){let f=!1,t=new IJ,a=null,R0=new IJ(0,0,0,0);return{setMask:function(X0){if(a!==X0&&!f)J.colorMask(X0,X0,X0,X0),a=X0},setLocked:function(X0){f=X0},setClear:function(X0,K0,S0,M0,G0){if(G0===!0)X0*=M0,K0*=M0,S0*=M0;if(t.set(X0,K0,S0,M0),R0.equals(t)===!1)J.clearColor(X0,K0,S0,M0),R0.copy(t)},reset:function(){f=!1,a=null,R0.set(-1,0,0,0)}}}function Y(){let f=!1,t=!1,a=null,R0=null,X0=null;return{setReversed:function(K0){if(t!==K0){let S0=Z.get("EXT_clip_control");if(K0)S0.clipControlEXT(S0.LOWER_LEFT_EXT,S0.ZERO_TO_ONE_EXT);else S0.clipControlEXT(S0.LOWER_LEFT_EXT,S0.NEGATIVE_ONE_TO_ONE_EXT);t=K0;let M0=X0;X0=null,this.setClear(M0)}},getReversed:function(){return t},setTest:function(K0){if(K0)H0(J.DEPTH_TEST);else t0(J.DEPTH_TEST)},setMask:function(K0){if(a!==K0&&!f)J.depthMask(K0),a=K0},setFunc:function(K0){if(t)K0=m9[K0];if(R0!==K0){switch(K0){case F9:J.depthFunc(J.NEVER);break;case G9:J.depthFunc(J.ALWAYS);break;case q9:J.depthFunc(J.LESS);break;case UY:J.depthFunc(J.LEQUAL);break;case E9:J.depthFunc(J.EQUAL);break;case B9:J.depthFunc(J.GEQUAL);break;case V9:J.depthFunc(J.GREATER);break;case I9:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}R0=K0}},setLocked:function(K0){f=K0},setClear:function(K0){if(X0!==K0){if(X0=K0,t)K0=1-K0;J.clearDepth(K0)}},reset:function(){f=!1,a=null,R0=null,X0=null,t=!1}}}function R(){let f=!1,t=null,a=null,R0=null,X0=null,K0=null,S0=null,M0=null,G0=null;return{setTest:function(j0){if(!f)if(j0)H0(J.STENCIL_TEST);else t0(J.STENCIL_TEST)},setMask:function(j0){if(t!==j0&&!f)J.stencilMask(j0),t=j0},setFunc:function(j0,p0,q0){if(a!==j0||R0!==p0||X0!==q0)J.stencilFunc(j0,p0,q0),a=j0,R0=p0,X0=q0},setOp:function(j0,p0,q0){if(K0!==j0||S0!==p0||M0!==q0)J.stencilOp(j0,p0,q0),K0=j0,S0=p0,M0=q0},setLocked:function(j0){f=j0},setClear:function(j0){if(G0!==j0)J.clearStencil(j0),G0=j0},reset:function(){f=!1,t=null,a=null,R0=null,X0=null,K0=null,S0=null,M0=null,G0=null}}}let Q=new k,X=new Y,N=new R,$={},K=new WeakMap,W={},U={},F={},G=new WeakMap,B=[],V=null,E=!1,q=null,O=null,A=null,H=null,_=null,C=null,I=null,M=new c0(0,0,0),j=0,y=!1,P=null,S=null,g=null,w=null,v=null,s=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),h=!1,J0=0,l=J.getParameter(J.VERSION);if(l.indexOf("WebGL")!==-1)J0=parseFloat(/^WebGL (\d)/.exec(l)[1]),h=J0>=1;else if(l.indexOf("OpenGL ES")!==-1)J0=parseFloat(/^OpenGL ES (\d)/.exec(l)[1]),h=J0>=2;let o=null,n={},I0=J.getParameter(J.SCISSOR_BOX),e=J.getParameter(J.VIEWPORT),Y0=new IJ().fromArray(I0),O0=new IJ().fromArray(e);function _0(f,t,a,R0){let X0=new Uint8Array(4),K0=J.createTexture();J.bindTexture(f,K0),J.texParameteri(f,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(f,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let S0=0;S0<a;S0++)if(f===J.TEXTURE_3D||f===J.TEXTURE_2D_ARRAY)J.texImage3D(t,0,J.RGBA,1,1,R0,0,J.RGBA,J.UNSIGNED_BYTE,X0);else J.texImage2D(t+S0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,X0);return K0}let f0={};f0[J.TEXTURE_2D]=_0(J.TEXTURE_2D,J.TEXTURE_2D,1),f0[J.TEXTURE_CUBE_MAP]=_0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),f0[J.TEXTURE_2D_ARRAY]=_0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),f0[J.TEXTURE_3D]=_0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),Q.setClear(0,0,0,1),X.setClear(1),N.setClear(0),H0(J.DEPTH_TEST),X.setFunc(UY),bJ(!1),UJ(XY),H0(J.CULL_FACE),BJ(hZ);function H0(f){if(W[f]!==!0)J.enable(f),W[f]=!0}function t0(f){if(W[f]!==!1)J.disable(f),W[f]=!1}function d0(f,t){if(F[f]!==t){if(J.bindFramebuffer(f,t),F[f]=t,f===J.DRAW_FRAMEBUFFER)F[J.FRAMEBUFFER]=t;if(f===J.FRAMEBUFFER)F[J.DRAW_FRAMEBUFFER]=t;return!0}return!1}function g0(f,t){let a=B,R0=!1;if(f){if(a=G.get(t),a===void 0)a=[],G.set(t,a);let X0=f.textures;if(a.length!==X0.length||a[0]!==J.COLOR_ATTACHMENT0){for(let K0=0,S0=X0.length;K0<S0;K0++)a[K0]=J.COLOR_ATTACHMENT0+K0;a.length=X0.length,R0=!0}}else if(a[0]!==J.BACK)a[0]=J.BACK,R0=!0;if(R0)J.drawBuffers(a)}function $J(f){if(V!==f)return J.useProgram(f),V=f,!0;return!1}let l0={[O1]:J.FUNC_ADD,[sQ]:J.FUNC_SUBTRACT,[iQ]:J.FUNC_REVERSE_SUBTRACT};l0[oQ]=J.MIN,l0[aQ]=J.MAX;let v0={[rQ]:J.ZERO,[tQ]:J.ONE,[eQ]:J.SRC_COLOR,[Z9]:J.SRC_ALPHA,[N9]:J.SRC_ALPHA_SATURATE,[Q9]:J.DST_COLOR,[Y9]:J.DST_ALPHA,[J9]:J.ONE_MINUS_SRC_COLOR,[k9]:J.ONE_MINUS_SRC_ALPHA,[X9]:J.ONE_MINUS_DST_COLOR,[R9]:J.ONE_MINUS_DST_ALPHA,[$9]:J.CONSTANT_COLOR,[K9]:J.ONE_MINUS_CONSTANT_COLOR,[U9]:J.CONSTANT_ALPHA,[W9]:J.ONE_MINUS_CONSTANT_ALPHA};function BJ(f,t,a,R0,X0,K0,S0,M0,G0,j0){if(f===hZ){if(E===!0)t0(J.BLEND),E=!1;return}if(E===!1)H0(J.BLEND),E=!0;if(f!==nQ){if(f!==q||j0!==y){if(O!==O1||_!==O1)J.blendEquation(J.FUNC_ADD),O=O1,_=O1;if(j0)switch(f){case h1:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case NY:J.blendFunc(J.ONE,J.ONE);break;case $Y:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case KY:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:x0("WebGLState: Invalid blending: ",f);break}else switch(f){case h1:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case NY:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case $Y:x0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case KY:x0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:x0("WebGLState: Invalid blending: ",f);break}A=null,H=null,C=null,I=null,M.set(0,0,0),j=0,q=f,y=j0}return}if(X0=X0||t,K0=K0||a,S0=S0||R0,t!==O||X0!==_)J.blendEquationSeparate(l0[t],l0[X0]),O=t,_=X0;if(a!==A||R0!==H||K0!==C||S0!==I)J.blendFuncSeparate(v0[a],v0[R0],v0[K0],v0[S0]),A=a,H=R0,C=K0,I=S0;if(M0.equals(M)===!1||G0!==j)J.blendColor(M0.r,M0.g,M0.b,G0),M.copy(M0),j=G0;q=f,y=!1}function KJ(f,t){f.side===N8?t0(J.CULL_FACE):H0(J.CULL_FACE);let a=f.side===Y8;if(t)a=!a;bJ(a),f.blending===h1&&f.transparent===!1?BJ(hZ):BJ(f.blending,f.blendEquation,f.blendSrc,f.blendDst,f.blendEquationAlpha,f.blendSrcAlpha,f.blendDstAlpha,f.blendColor,f.blendAlpha,f.premultipliedAlpha),X.setFunc(f.depthFunc),X.setTest(f.depthTest),X.setMask(f.depthWrite),Q.setMask(f.colorWrite);let R0=f.stencilWrite;if(N.setTest(R0),R0)N.setMask(f.stencilWriteMask),N.setFunc(f.stencilFunc,f.stencilRef,f.stencilFuncMask),N.setOp(f.stencilFail,f.stencilZFail,f.stencilZPass);SJ(f.polygonOffset,f.polygonOffsetFactor,f.polygonOffsetUnits),f.alphaToCoverage===!0?H0(J.SAMPLE_ALPHA_TO_COVERAGE):t0(J.SAMPLE_ALPHA_TO_COVERAGE)}function bJ(f){if(P!==f){if(f)J.frontFace(J.CW);else J.frontFace(J.CCW);P=f}}function UJ(f){if(f!==dQ){if(H0(J.CULL_FACE),f!==S)if(f===XY)J.cullFace(J.BACK);else if(f===lQ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else t0(J.CULL_FACE);S=f}function PJ(f){if(f!==g){if(h)J.lineWidth(f);g=f}}function SJ(f,t,a){if(f){if(H0(J.POLYGON_OFFSET_FILL),w!==t||v!==a){if(w=t,v=a,X.getReversed())t=-t,a=-a;J.polygonOffset(t,a)}}else t0(J.POLYGON_OFFSET_FILL)}function hJ(f){if(f)H0(J.SCISSOR_TEST);else t0(J.SCISSOR_TEST)}function Z8(f){if(f===void 0)f=J.TEXTURE0+s-1;if(o!==f)J.activeTexture(f),o=f}function x(f,t,a){if(a===void 0)if(o===null)a=J.TEXTURE0+s-1;else a=o;let R0=n[a];if(R0===void 0)R0={type:void 0,texture:void 0},n[a]=R0;if(R0.type!==f||R0.texture!==t){if(o!==a)J.activeTexture(a),o=a;J.bindTexture(f,t||f0[f]),R0.type=f,R0.texture=t}}function AJ(){let f=n[o];if(f!==void 0&&f.type!==void 0)J.bindTexture(f.type,null),f.type=void 0,f.texture=void 0}function JJ(){try{J.compressedTexImage2D(...arguments)}catch(f){x0("WebGLState:",f)}}function HJ(){try{J.compressedTexImage3D(...arguments)}catch(f){x0("WebGLState:",f)}}function F0(){try{J.texSubImage2D(...arguments)}catch(f){x0("WebGLState:",f)}}function kJ(){try{J.texSubImage3D(...arguments)}catch(f){x0("WebGLState:",f)}}function w0(){try{J.compressedTexSubImage2D(...arguments)}catch(f){x0("WebGLState:",f)}}function P0(){try{J.compressedTexSubImage3D(...arguments)}catch(f){x0("WebGLState:",f)}}function DJ(){try{J.texStorage2D(...arguments)}catch(f){x0("WebGLState:",f)}}function T(){try{J.texStorage3D(...arguments)}catch(f){x0("WebGLState:",f)}}function D(){try{J.texImage2D(...arguments)}catch(f){x0("WebGLState:",f)}}function m(){try{J.texImage3D(...arguments)}catch(f){x0("WebGLState:",f)}}function k0(f){if(U[f]!==void 0)return U[f];else return J.getParameter(f)}function Z0(f,t){if(U[f]!==t)J.pixelStorei(f,t),U[f]=t}function Q0(f){if(Y0.equals(f)===!1)J.scissor(f.x,f.y,f.z,f.w),Y0.copy(f)}function N0(f){if(O0.equals(f)===!1)J.viewport(f.x,f.y,f.z,f.w),O0.copy(f)}function i(f,t){let a=K.get(t);if(a===void 0)a=new WeakMap,K.set(t,a);let R0=a.get(f);if(R0===void 0)R0=J.getUniformBlockIndex(t,f.name),J.uniformBlockBinding(t,R0,R0),a.set(f,R0)}function r(f,t,a){let X0=K.get(t).get(f);if($[X0]!==a)J.bindBufferBase(J.UNIFORM_BUFFER,X0,a),$[X0]=a}function $0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),W={},U={},o=null,n={},F={},$={},G=new WeakMap,B=[],V=null,E=!1,q=null,O=null,A=null,H=null,_=null,C=null,I=null,M=new c0(0,0,0),j=0,y=!1,P=null,S=null,g=null,w=null,v=null,Y0.set(0,0,J.canvas.width,J.canvas.height),O0.set(0,0,J.canvas.width,J.canvas.height),Q.reset(),X.reset(),N.reset()}return{buffers:{color:Q,depth:X,stencil:N},enable:H0,disable:t0,bindFramebuffer:d0,drawBuffers:g0,useProgram:$J,setBlending:BJ,setMaterial:KJ,setFlipSided:bJ,setCullFace:UJ,setLineWidth:PJ,setPolygonOffset:SJ,setScissorTest:hJ,activeTexture:Z8,bindTexture:x,unbindTexture:AJ,compressedTexImage2D:JJ,compressedTexImage3D:HJ,texImage2D:D,texImage3D:m,pixelStorei:Z0,getParameter:k0,updateUBOMapping:i,uniformBlockBinding:r,texStorage2D:DJ,texStorage3D:T,texSubImage2D:F0,texSubImage3D:kJ,compressedTexSubImage2D:w0,compressedTexSubImage3D:P0,scissor:Q0,viewport:N0,reset:$0}}function kW(J,Z,k,Y,R,Q,X){let N=Z.has("WEBGL_multisampled_render_to_texture")?Z.get("WEBGL_multisampled_render_to_texture"):null,$=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),K=new r0,W=new WeakMap,U=new Set,F,G=new WeakMap,B=new Set,V=new FinalizationRegistry((T)=>B.delete(T)),E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function q(T,D){return E?new OffscreenCanvas(T,D):E1("canvas")}function O(T,D,m){let k0=1,Z0=DJ(T);if(Z0.width>m||Z0.height>m)k0=m/Math.max(Z0.width,Z0.height);if(k0<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Q0=Math.floor(k0*Z0.width),N0=Math.floor(k0*Z0.height);if(F===void 0)F=q(Q0,N0);let i=D?q(Q0,N0):F;return i.width=Q0,i.height=N0,i.getContext("2d").drawImage(T,0,0,Q0,N0),b0("WebGLRenderer: Texture has been resized from ("+Z0.width+"x"+Z0.height+") to ("+Q0+"x"+N0+")."),i}else{if("data"in T)b0("WebGLRenderer: Image in DataTexture is too big ("+Z0.width+"x"+Z0.height+").");return T}return T}function A(T){return T.generateMipmaps}function H(T){J.generateMipmap(T)}function _(T){if(T.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(T.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function C(T,D,m,k0,Z0,Q0=!1){if(T!==null){if(J[T]!==void 0)return J[T];b0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let N0;if(k0){if(N0=Z.get("EXT_texture_norm16"),!N0)b0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let i=D;if(D===J.RED){if(m===J.FLOAT)i=J.R32F;if(m===J.HALF_FLOAT)i=J.R16F;if(m===J.UNSIGNED_BYTE)i=J.R8;if(m===J.UNSIGNED_SHORT&&N0)i=N0.R16_EXT;if(m===J.SHORT&&N0)i=N0.R16_SNORM_EXT}if(D===J.RED_INTEGER){if(m===J.UNSIGNED_BYTE)i=J.R8UI;if(m===J.UNSIGNED_SHORT)i=J.R16UI;if(m===J.UNSIGNED_INT)i=J.R32UI;if(m===J.BYTE)i=J.R8I;if(m===J.SHORT)i=J.R16I;if(m===J.INT)i=J.R32I}if(D===J.RG){if(m===J.FLOAT)i=J.RG32F;if(m===J.HALF_FLOAT)i=J.RG16F;if(m===J.UNSIGNED_BYTE)i=J.RG8;if(m===J.UNSIGNED_SHORT&&N0)i=N0.RG16_EXT;if(m===J.SHORT&&N0)i=N0.RG16_SNORM_EXT}if(D===J.RG_INTEGER){if(m===J.UNSIGNED_BYTE)i=J.RG8UI;if(m===J.UNSIGNED_SHORT)i=J.RG16UI;if(m===J.UNSIGNED_INT)i=J.RG32UI;if(m===J.BYTE)i=J.RG8I;if(m===J.SHORT)i=J.RG16I;if(m===J.INT)i=J.RG32I}if(D===J.RGB_INTEGER){if(m===J.UNSIGNED_BYTE)i=J.RGB8UI;if(m===J.UNSIGNED_SHORT)i=J.RGB16UI;if(m===J.UNSIGNED_INT)i=J.RGB32UI;if(m===J.BYTE)i=J.RGB8I;if(m===J.SHORT)i=J.RGB16I;if(m===J.INT)i=J.RGB32I}if(D===J.RGBA_INTEGER){if(m===J.UNSIGNED_BYTE)i=J.RGBA8UI;if(m===J.UNSIGNED_SHORT)i=J.RGBA16UI;if(m===J.UNSIGNED_INT)i=J.RGBA32UI;if(m===J.BYTE)i=J.RGBA8I;if(m===J.SHORT)i=J.RGBA16I;if(m===J.INT)i=J.RGBA32I}if(D===J.RGB){if(m===J.UNSIGNED_SHORT&&N0)i=N0.RGB16_EXT;if(m===J.SHORT&&N0)i=N0.RGB16_SNORM_EXT;if(m===J.UNSIGNED_INT_5_9_9_9_REV)i=J.RGB9_E5;if(m===J.UNSIGNED_INT_10F_11F_11F_REV)i=J.R11F_G11F_B10F}if(D===J.RGBA){let r=Q0?ZR:a0.getTransfer(Z0);if(m===J.FLOAT)i=J.RGBA32F;if(m===J.HALF_FLOAT)i=J.RGBA16F;if(m===J.UNSIGNED_BYTE)i=r===FJ?J.SRGB8_ALPHA8:J.RGBA8;if(m===J.UNSIGNED_SHORT&&N0)i=N0.RGBA16_EXT;if(m===J.SHORT&&N0)i=N0.RGBA16_SNORM_EXT;if(m===J.UNSIGNED_SHORT_4_4_4_4)i=J.RGBA4;if(m===J.UNSIGNED_SHORT_5_5_5_1)i=J.RGB5_A1}if(i===J.R16F||i===J.R32F||i===J.RG16F||i===J.RG32F||i===J.RGBA16F||i===J.RGBA32F)Z.get("EXT_color_buffer_float");return i}function I(T,D){let m;if(T){if(D===null||D===DZ||D===gZ)m=J.DEPTH24_STENCIL8;else if(D===a8)m=J.DEPTH32F_STENCIL8;else if(D===p1)m=J.DEPTH24_STENCIL8,b0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(D===null||D===DZ||D===gZ)m=J.DEPTH_COMPONENT24;else if(D===a8)m=J.DEPTH_COMPONENT32F;else if(D===p1)m=J.DEPTH_COMPONENT16;return m}function M(T,D){if(A(T)===!0||T.isFramebufferTexture&&T.minFilter!==OZ&&T.minFilter!==E8)return Math.log2(Math.max(D.width,D.height))+1;else if(T.mipmaps.length>0)return T.mipmaps.length;else if(T.isCompressedTexture&&Array.isArray(T.image))return D.mipmaps.length;else return 1}function j(T){let D=new WeakRef(T);Y.get(T).__ref=D,B.add(D),V.register(T,D,D)}function y(T){let D=Y.get(T).__ref;if(D===void 0)return;B.delete(D),V.unregister(D)}function P(T){g(T.target)}function S(T){w(T.target)}function g(T){if(T.removeEventListener("dispose",P),y(T),s(T),T.isVideoTexture)W.delete(T);if(T.isHTMLTexture)U.delete(T)}function w(T){T.removeEventListener("dispose",S),y(T),J0(T)}function v(){for(let T of B){let D=T.deref();if(D===void 0)continue;if(D.isRenderTarget===!0)w(D);else g(D)}B.clear(),U.clear()}function s(T){let D=Y.get(T);if(D.__webglInit===void 0)return;let m=T.source,k0=G.get(m);if(k0){let Z0=k0[D.__cacheKey];if(Z0.usedTimes--,Z0.usedTimes===0)h(T);if(Object.keys(k0).length===0)G.delete(m)}Y.remove(T)}function h(T){let D=Y.get(T);J.deleteTexture(D.__webglTexture);let m=T.source,k0=G.get(m);delete k0[D.__cacheKey],X.memory.textures--}function J0(T){let D=Y.get(T);if(D.__depthDisposeCallback)D.__depthDisposeCallback();let m=T.depthTexture;if(m&&m.renderTarget===T)g(m);if(T.isWebGLCubeRenderTarget)for(let Z0=0;Z0<6;Z0++){if(Array.isArray(D.__webglFramebuffer[Z0]))for(let Q0=0;Q0<D.__webglFramebuffer[Z0].length;Q0++)J.deleteFramebuffer(D.__webglFramebuffer[Z0][Q0]);else J.deleteFramebuffer(D.__webglFramebuffer[Z0]);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer[Z0])}else{if(Array.isArray(D.__webglFramebuffer))for(let Z0=0;Z0<D.__webglFramebuffer.length;Z0++)J.deleteFramebuffer(D.__webglFramebuffer[Z0]);else J.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer);if(D.__webglMultisampledFramebuffer)J.deleteFramebuffer(D.__webglMultisampledFramebuffer);if(D.__webglColorRenderbuffer){for(let Z0=0;Z0<D.__webglColorRenderbuffer.length;Z0++)if(D.__webglColorRenderbuffer[Z0])J.deleteRenderbuffer(D.__webglColorRenderbuffer[Z0])}if(D.__webglDepthRenderbuffer)J.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let k0=T.textures;for(let Z0=0,Q0=k0.length;Z0<Q0;Z0++){let N0=Y.get(k0[Z0]);if(N0.__webglTexture)J.deleteTexture(N0.__webglTexture),X.memory.textures--;Y.remove(k0[Z0])}Y.remove(T)}let l=0;function o(){l=0}function n(){return l}function I0(T){l=T}function e(){let T=l;if(T>=R.maxTextures)b0("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+R.maxTextures);return l+=1,T}function Y0(T){let D=[];return D.push(T.wrapS),D.push(T.wrapT),D.push(T.wrapR||0),D.push(T.magFilter),D.push(T.minFilter),D.push(T.anisotropy),D.push(T.internalFormat),D.push(T.format),D.push(T.type),D.push(T.generateMipmaps),D.push(T.mipmapsAutoUpdate),D.push(T.premultiplyAlpha),D.push(T.flipY),D.push(T.unpackAlignment),D.push(T.colorSpace),D.join()}function O0(T,D){let m=Y.get(T);if(T.isVideoTexture)w0(T);if(T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&m.__version!==T.version){let k0=T.image;if(k0===null)b0("WebGLRenderer: Texture marked for update but no image data found.");else if(k0.complete===!1)b0("WebGLRenderer: Texture marked for update but image is incomplete");else{KJ(m,T,D);return}}else if(T.isExternalTexture)m.__webglTexture=T.sourceTexture?T.sourceTexture:null;k.bindTexture(J.TEXTURE_2D,m.__webglTexture,J.TEXTURE0+D)}function _0(T,D){let m=Y.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&m.__version!==T.version){KJ(m,T,D);return}else if(T.isExternalTexture)m.__webglTexture=T.sourceTexture?T.sourceTexture:null;k.bindTexture(J.TEXTURE_2D_ARRAY,m.__webglTexture,J.TEXTURE0+D)}function f0(T,D){let m=Y.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&m.__version!==T.version){KJ(m,T,D);return}k.bindTexture(J.TEXTURE_3D,m.__webglTexture,J.TEXTURE0+D)}function H0(T,D){let m=Y.get(T);if(T.version>0&&m.__version!==T.version){bJ(m,T,D);return}k.bindTexture(J.TEXTURE_CUBE_MAP,m.__webglTexture,J.TEXTURE0+D)}let t0={[o6]:J.REPEAT,[a6]:J.CLAMP_TO_EDGE,[A9]:J.MIRRORED_REPEAT},d0={[OZ]:J.NEAREST,[M9]:J.NEAREST_MIPMAP_NEAREST,[m1]:J.NEAREST_MIPMAP_LINEAR,[E8]:J.LINEAR,[r6]:J.LINEAR_MIPMAP_NEAREST,[HZ]:J.LINEAR_MIPMAP_LINEAR},g0={[j9]:J.NEVER,[RR]:J.ALWAYS,[f9]:J.LESS,[kR]:J.LEQUAL,[v9]:J.EQUAL,[YR]:J.GEQUAL,[y9]:J.GREATER,[b9]:J.NOTEQUAL};function $J(T,D){if(D.type===a8&&Z.has("OES_texture_float_linear")===!1&&(D.magFilter===E8||D.magFilter===r6||D.magFilter===m1||D.magFilter===HZ||D.minFilter===E8||D.minFilter===r6||D.minFilter===m1||D.minFilter===HZ))b0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(T,J.TEXTURE_WRAP_S,t0[D.wrapS]),J.texParameteri(T,J.TEXTURE_WRAP_T,t0[D.wrapT]),T===J.TEXTURE_3D||T===J.TEXTURE_2D_ARRAY)J.texParameteri(T,J.TEXTURE_WRAP_R,t0[D.wrapR]);if(J.texParameteri(T,J.TEXTURE_MAG_FILTER,d0[D.magFilter]),J.texParameteri(T,J.TEXTURE_MIN_FILTER,d0[D.minFilter]),D.compareFunction)J.texParameteri(T,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(T,J.TEXTURE_COMPARE_FUNC,g0[D.compareFunction]);if(Z.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===OZ)return;if(D.minFilter!==m1&&D.minFilter!==HZ)return;if(D.type===a8&&Z.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||Y.get(D).__currentAnisotropy){let m=Z.get("EXT_texture_filter_anisotropic");J.texParameterf(T,m.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,R.getMaxAnisotropy())),Y.get(D).__currentAnisotropy=D.anisotropy}}}function l0(T,D){let m=!1;if(T.__webglInit===void 0)T.__webglInit=!0,D.addEventListener("dispose",P),j(D);let k0=D.source,Z0=G.get(k0);if(Z0===void 0)Z0={},G.set(k0,Z0);let Q0=Y0(D);if(Q0!==T.__cacheKey){if(Z0[Q0]===void 0)Z0[Q0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,m=!0;Z0[Q0].usedTimes++;let N0=Z0[T.__cacheKey];if(N0!==void 0){if(Z0[T.__cacheKey].usedTimes--,N0.usedTimes===0)h(D)}T.__cacheKey=Q0,T.__webglTexture=Z0[Q0].texture}return m}function v0(T,D,m){return Math.floor(Math.floor(T/m)/D)}function BJ(T,D,m,k0){let Q0=T.updateRanges;if(Q0.length===0)k.texSubImage2D(J.TEXTURE_2D,0,0,0,D.width,D.height,m,k0,D.data);else{Q0.sort((f,t)=>f.start-t.start);let N0=0;for(let f=1;f<Q0.length;f++){let t=Q0[N0],a=Q0[f],R0=t.start+t.count,X0=v0(a.start,D.width,4),K0=v0(t.start,D.width,4);if(a.start<=R0+1&&X0===K0&&v0(a.start+a.count-1,D.width,4)===X0)t.count=Math.max(t.count,a.start+a.count-t.start);else++N0,Q0[N0]=a}Q0.length=N0+1;let i=k.getParameter(J.UNPACK_ROW_LENGTH),r=k.getParameter(J.UNPACK_SKIP_PIXELS),$0=k.getParameter(J.UNPACK_SKIP_ROWS);k.pixelStorei(J.UNPACK_ROW_LENGTH,D.width);for(let f=0,t=Q0.length;f<t;f++){let a=Q0[f],R0=Math.floor(a.start/4),X0=Math.ceil(a.count/4),K0=R0%D.width,S0=Math.floor(R0/D.width),M0=X0,G0=1;k.pixelStorei(J.UNPACK_SKIP_PIXELS,K0),k.pixelStorei(J.UNPACK_SKIP_ROWS,S0),k.texSubImage2D(J.TEXTURE_2D,0,K0,S0,M0,1,m,k0,D.data)}T.clearUpdateRanges(),k.pixelStorei(J.UNPACK_ROW_LENGTH,i),k.pixelStorei(J.UNPACK_SKIP_PIXELS,r),k.pixelStorei(J.UNPACK_SKIP_ROWS,$0)}}function KJ(T,D,m){let k0=J.TEXTURE_2D;if(D.isDataArrayTexture||D.isCompressedArrayTexture)k0=J.TEXTURE_2D_ARRAY;if(D.isData3DTexture)k0=J.TEXTURE_3D;let Z0=l0(T,D),Q0=D.source;k.bindTexture(k0,T.__webglTexture,J.TEXTURE0+m);let N0=Y.get(Q0);if(Q0.version!==N0.__version||Z0===!0){if(k.activeTexture(J.TEXTURE0+m),(typeof ImageBitmap<"u"&&D.image instanceof ImageBitmap)===!1){let G0=a0.getPrimaries(a0.workingColorSpace),j0=D.colorSpace===mZ?null:a0.getPrimaries(D.colorSpace),p0=D.colorSpace===mZ||G0===j0?J.NONE:J.BROWSER_DEFAULT_WEBGL;k.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),k.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),k.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,p0)}k.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment);let r=O(D.image,!1,R.maxTextureSize);r=P0(D,r);let $0=Q.convert(D.format,D.colorSpace),f=Q.convert(D.type),t=C(D.internalFormat,$0,f,D.normalized,D.colorSpace,D.isVideoTexture);$J(k0,D);let a,R0=D.mipmaps,X0=D.isVideoTexture!==!0,K0=N0.__version===void 0||Z0===!0,S0=Q0.dataReady,M0=M(D,r);if(D.isDepthTexture){if(t=I(D.format===AZ,D.type),K0)if(X0)k.texStorage2D(J.TEXTURE_2D,1,t,r.width,r.height);else k.texImage2D(J.TEXTURE_2D,0,t,r.width,r.height,0,$0,f,null)}else if(D.isDataTexture)if(R0.length>0){if(X0&&K0)k.texStorage2D(J.TEXTURE_2D,M0,t,R0[0].width,R0[0].height);for(let G0=0,j0=R0.length;G0<j0;G0++)if(a=R0[G0],X0){if(S0)k.texSubImage2D(J.TEXTURE_2D,G0,0,0,a.width,a.height,$0,f,a.data)}else k.texImage2D(J.TEXTURE_2D,G0,t,a.width,a.height,0,$0,f,a.data);D.generateMipmaps=!1}else if(X0){if(K0)k.texStorage2D(J.TEXTURE_2D,M0,t,r.width,r.height);if(S0)BJ(D,r,$0,f)}else k.texImage2D(J.TEXTURE_2D,0,t,r.width,r.height,0,$0,f,r.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){if(X0&&K0)k.texStorage3D(J.TEXTURE_2D_ARRAY,M0,t,R0[0].width,R0[0].height,r.depth);for(let G0=0,j0=R0.length;G0<j0;G0++)if(a=R0[G0],D.format!==r8)if($0!==null)if(X0){if(S0)if(D.layerUpdates.size>0){let p0=SR(a.width,a.height,D.format,D.type);for(let q0 of D.layerUpdates){let YJ=a.data.subarray(q0*p0/a.data.BYTES_PER_ELEMENT,(q0+1)*p0/a.data.BYTES_PER_ELEMENT);k.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,G0,0,0,q0,a.width,a.height,1,$0,YJ)}}else k.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,G0,0,0,0,a.width,a.height,r.depth,$0,a.data)}else k.compressedTexImage3D(J.TEXTURE_2D_ARRAY,G0,t,a.width,a.height,r.depth,0,a.data,0,0);else b0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(X0){if(S0)k.texSubImage3D(J.TEXTURE_2D_ARRAY,G0,0,0,0,a.width,a.height,r.depth,$0,f,a.data)}else k.texImage3D(J.TEXTURE_2D_ARRAY,G0,t,a.width,a.height,r.depth,0,$0,f,a.data);if(D.layerUpdates.size>0)D.clearLayerUpdates()}else{if(X0&&K0)k.texStorage2D(J.TEXTURE_2D,M0,t,R0[0].width,R0[0].height);for(let G0=0,j0=R0.length;G0<j0;G0++)if(a=R0[G0],D.format!==r8)if($0!==null)if(X0){if(S0)k.compressedTexSubImage2D(J.TEXTURE_2D,G0,0,0,a.width,a.height,$0,a.data)}else k.compressedTexImage2D(J.TEXTURE_2D,G0,t,a.width,a.height,0,a.data);else b0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(X0){if(S0)k.texSubImage2D(J.TEXTURE_2D,G0,0,0,a.width,a.height,$0,f,a.data)}else k.texImage2D(J.TEXTURE_2D,G0,t,a.width,a.height,0,$0,f,a.data)}else if(D.isDataArrayTexture)if(X0){if(K0)k.texStorage3D(J.TEXTURE_2D_ARRAY,M0,t,r.width,r.height,r.depth);if(S0)if(D.layerUpdates.size>0){let G0=SR(r.width,r.height,D.format,D.type);for(let j0 of D.layerUpdates){let p0=r.data.subarray(j0*G0/r.data.BYTES_PER_ELEMENT,(j0+1)*G0/r.data.BYTES_PER_ELEMENT);k.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,j0,r.width,r.height,1,$0,f,p0)}D.clearLayerUpdates()}else k.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,r.width,r.height,r.depth,$0,f,r.data)}else k.texImage3D(J.TEXTURE_2D_ARRAY,0,t,r.width,r.height,r.depth,0,$0,f,r.data);else if(D.isData3DTexture)if(X0){if(K0)k.texStorage3D(J.TEXTURE_3D,M0,t,r.width,r.height,r.depth);if(S0)k.texSubImage3D(J.TEXTURE_3D,0,0,0,0,r.width,r.height,r.depth,$0,f,r.data)}else k.texImage3D(J.TEXTURE_3D,0,t,r.width,r.height,r.depth,0,$0,f,r.data);else if(D.isFramebufferTexture){if(K0)if(X0)k.texStorage2D(J.TEXTURE_2D,M0,t,r.width,r.height);else{let{width:G0,height:j0}=r;for(let p0=0;p0<M0;p0++)k.texImage2D(J.TEXTURE_2D,p0,t,G0,j0,0,$0,f,null),G0>>=1,j0>>=1}}else if(D.isHTMLTexture){if("texElementImage2D"in J){let G0=J.canvas;if(!G0.hasAttribute("layoutsubtree"))G0.setAttribute("layoutsubtree","true");if(r.parentNode!==G0){G0.appendChild(r),U.add(D),G0.onpaint=(j0)=>{let p0=j0.changedElements;for(let q0 of U)if(p0.includes(q0.image))q0.needsUpdate=!0},G0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,r);else{let{RGBA:p0,RGBA:q0,UNSIGNED_BYTE:YJ}=J;J.texElementImage2D(J.TEXTURE_2D,0,p0,q0,YJ,r)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(R0.length>0){if(X0&&K0){let G0=DJ(R0[0]);k.texStorage2D(J.TEXTURE_2D,M0,t,G0.width,G0.height)}for(let G0=0,j0=R0.length;G0<j0;G0++)if(a=R0[G0],X0){if(S0)k.texSubImage2D(J.TEXTURE_2D,G0,0,0,$0,f,a)}else k.texImage2D(J.TEXTURE_2D,G0,t,$0,f,a);D.generateMipmaps=!1}else if(X0){if(K0){let G0=DJ(r);k.texStorage2D(J.TEXTURE_2D,M0,t,G0.width,G0.height)}if(S0)k.texSubImage2D(J.TEXTURE_2D,0,0,0,$0,f,r)}else k.texImage2D(J.TEXTURE_2D,0,t,$0,f,r);if(A(D)&&D.mipmapsAutoUpdate===!0)H(k0);if(N0.__version=Q0.version,D.onUpdate)D.onUpdate(D)}T.__version=D.version}function bJ(T,D,m){if(D.image.length!==6)return;let k0=l0(T,D),Z0=D.source;k.bindTexture(J.TEXTURE_CUBE_MAP,T.__webglTexture,J.TEXTURE0+m);let Q0=Y.get(Z0);if(Z0.version!==Q0.__version||k0===!0){k.activeTexture(J.TEXTURE0+m);let N0=a0.getPrimaries(a0.workingColorSpace),i=D.colorSpace===mZ?null:a0.getPrimaries(D.colorSpace),r=D.colorSpace===mZ||N0===i?J.NONE:J.BROWSER_DEFAULT_WEBGL;k.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),k.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),k.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment),k.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,r);let $0=D.isCompressedTexture||D.image[0].isCompressedTexture,f=D.image[0]&&D.image[0].isDataTexture,t=[];for(let q0=0;q0<6;q0++){if(!$0&&!f)t[q0]=O(D.image[q0],!0,R.maxCubemapSize);else t[q0]=f?D.image[q0].image:D.image[q0];t[q0]=P0(D,t[q0])}let a=t[0],R0=Q.convert(D.format,D.colorSpace),X0=Q.convert(D.type),K0=C(D.internalFormat,R0,X0,D.normalized,D.colorSpace),S0=D.isVideoTexture!==!0,M0=Q0.__version===void 0||k0===!0,G0=Z0.dataReady,j0=M(D,a);$J(J.TEXTURE_CUBE_MAP,D);let p0;if(D.isDepthTexture){if(K0=I(D.format===AZ,D.type),M0)if(S0)k.texStorage2D(J.TEXTURE_CUBE_MAP,1,K0,a.width,a.height);else for(let q0=0;q0<6;q0++)k.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,0,K0,a.width,a.height,0,R0,X0,null)}else if($0){if(S0&&M0)k.texStorage2D(J.TEXTURE_CUBE_MAP,j0,K0,a.width,a.height);for(let q0=0;q0<6;q0++){p0=t[q0].mipmaps;for(let YJ=0;YJ<p0.length;YJ++){let MJ=p0[YJ];if(D.format!==r8)if(R0!==null)if(S0){if(G0)k.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,YJ,0,0,MJ.width,MJ.height,R0,MJ.data)}else k.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,YJ,K0,MJ.width,MJ.height,0,MJ.data);else b0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(S0){if(G0)k.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,YJ,0,0,MJ.width,MJ.height,R0,X0,MJ.data)}else k.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,YJ,K0,MJ.width,MJ.height,0,R0,X0,MJ.data)}}}else{if(p0=D.mipmaps,S0&&M0){if(p0.length>0)j0++;let q0=DJ(t[0]);k.texStorage2D(J.TEXTURE_CUBE_MAP,j0,K0,q0.width,q0.height)}for(let q0=0;q0<6;q0++)if(f){if(S0){if(G0)k.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,0,0,0,t[q0].width,t[q0].height,R0,X0,t[q0].data)}else k.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,0,K0,t[q0].width,t[q0].height,0,R0,X0,t[q0].data);for(let YJ=0;YJ<p0.length;YJ++){let W8=p0[YJ].image[q0].image;if(S0){if(G0)k.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,YJ+1,0,0,W8.width,W8.height,R0,X0,W8.data)}else k.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,YJ+1,K0,W8.width,W8.height,0,R0,X0,W8.data)}}else{if(S0){if(G0)k.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,0,0,0,R0,X0,t[q0])}else k.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,0,K0,R0,X0,t[q0]);for(let YJ=0;YJ<p0.length;YJ++){let MJ=p0[YJ];if(S0){if(G0)k.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,YJ+1,0,0,R0,X0,MJ.image[q0])}else k.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+q0,YJ+1,K0,R0,X0,MJ.image[q0])}}}if(A(D)&&D.mipmapsAutoUpdate===!0)H(J.TEXTURE_CUBE_MAP);if(Q0.__version=Z0.version,D.onUpdate)D.onUpdate(D)}T.__version=D.version}function UJ(T,D,m,k0,Z0,Q0){let N0=Q.convert(m.format,m.colorSpace),i=Q.convert(m.type),r=C(m.internalFormat,N0,i,m.normalized,m.colorSpace),$0=Y.get(D),f=Y.get(m);if(f.__renderTarget=D,!$0.__hasExternalTextures){let t=Math.max(1,D.width>>Q0),a=Math.max(1,D.height>>Q0);if(Z0===J.TEXTURE_3D||Z0===J.TEXTURE_2D_ARRAY)k.texImage3D(Z0,Q0,r,t,a,D.depth,0,N0,i,null);else k.texImage2D(Z0,Q0,r,t,a,0,N0,i,null)}if(k.bindFramebuffer(J.FRAMEBUFFER,T),kJ(D))N.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,k0,Z0,f.__webglTexture,0,F0(D));else if(Z0===J.TEXTURE_2D||Z0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&Z0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,k0,Z0,f.__webglTexture,Q0);k.bindFramebuffer(J.FRAMEBUFFER,null)}function PJ(T,D,m){if(J.bindRenderbuffer(J.RENDERBUFFER,T),D.depthBuffer){let k0=D.depthTexture,Z0=k0&&k0.isDepthTexture?k0.type:null,Q0=I(D.stencilBuffer,Z0),N0=D.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(kJ(D))N.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,F0(D),Q0,D.width,D.height);else if(m)J.renderbufferStorageMultisample(J.RENDERBUFFER,F0(D),Q0,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,Q0,D.width,D.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,N0,J.RENDERBUFFER,T)}else{let k0=D.textures;for(let Z0=0;Z0<k0.length;Z0++){let Q0=k0[Z0],N0=Q.convert(Q0.format,Q0.colorSpace),i=Q.convert(Q0.type),r=C(Q0.internalFormat,N0,i,Q0.normalized,Q0.colorSpace);if(kJ(D))N.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,F0(D),r,D.width,D.height);else if(m)J.renderbufferStorageMultisample(J.RENDERBUFFER,F0(D),r,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,r,D.width,D.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function SJ(T,D,m){let k0=D.isWebGLCubeRenderTarget===!0;if(k.bindFramebuffer(J.FRAMEBUFFER,T),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z0=Y.get(D.depthTexture);Z0.__renderTarget=D;let Q0=k0?D.depthTexture.image[0]:D.depthTexture.image;if(!Z0.__webglTexture||Q0.width!==D.width||Q0.height!==D.height)Q0.width=D.width,Q0.height=D.height,D.depthTexture.needsUpdate=!0;if(k0)H0(D.depthTexture,0);else O0(D.depthTexture,0);let N0=Z0.__webglTexture,i=F0(D),r=k0?J.TEXTURE_CUBE_MAP_POSITIVE_X+m:J.TEXTURE_2D,$0=D.depthTexture.format===AZ?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(D.depthTexture.format===D1)if(kJ(D))N.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,$0,r,N0,0,i);else J.framebufferTexture2D(J.FRAMEBUFFER,$0,r,N0,0);else if(D.depthTexture.format===AZ)if(kJ(D))N.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,$0,r,N0,0,i);else J.framebufferTexture2D(J.FRAMEBUFFER,$0,r,N0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function hJ(T){let D=Y.get(T),m=T.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==T.depthTexture){let k0=T.depthTexture;if(D.__depthDisposeCallback)D.__depthDisposeCallback();if(k0){let Z0=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,k0.removeEventListener("dispose",Z0)};k0.addEventListener("dispose",Z0),D.__depthDisposeCallback=Z0}D.__boundDepthTexture=k0}if(T.depthTexture&&!D.__autoAllocateDepthBuffer)if(m)for(let k0=0;k0<6;k0++)SJ(D.__webglFramebuffer[k0],T,k0);else if(T.texture.mipmaps.length>0)SJ(D.__webglFramebuffer[0],T,0);else SJ(D.__webglFramebuffer,T,0);else if(m){D.__webglDepthbuffer=[];for(let k0=0;k0<6;k0++)if(k.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[k0]),D.__webglDepthbuffer[k0]===void 0)D.__webglDepthbuffer[k0]=J.createRenderbuffer(),PJ(D.__webglDepthbuffer[k0],T,!1);else{let Z0=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Q0=D.__webglDepthbuffer[k0];J.bindRenderbuffer(J.RENDERBUFFER,Q0),J.framebufferRenderbuffer(J.FRAMEBUFFER,Z0,J.RENDERBUFFER,Q0)}}else{if(T.texture.mipmaps.length>0)k.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[0]);else k.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer);if(D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=J.createRenderbuffer(),PJ(D.__webglDepthbuffer,T,!1);else{let Z0=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Q0=D.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,Q0),J.framebufferRenderbuffer(J.FRAMEBUFFER,Z0,J.RENDERBUFFER,Q0)}}k.bindFramebuffer(J.FRAMEBUFFER,null)}function Z8(T,D,m){let k0=Y.get(T);if(D!==void 0)UJ(k0.__webglFramebuffer,T,T.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(m!==void 0)hJ(T)}function x(T){let D=T.texture,m=Y.get(T),k0=Y.get(D);T.addEventListener("dispose",S),j(T);let Z0=T.textures,Q0=T.isWebGLCubeRenderTarget===!0,N0=Z0.length>1;if(!N0){if(k0.__webglTexture===void 0)k0.__webglTexture=J.createTexture();k0.__version=D.version,X.memory.textures++}if(Q0){m.__webglFramebuffer=[];for(let i=0;i<6;i++)if(D.mipmaps.length>0){m.__webglFramebuffer[i]=[];for(let r=0;r<D.mipmaps.length;r++)m.__webglFramebuffer[i][r]=J.createFramebuffer()}else m.__webglFramebuffer[i]=J.createFramebuffer()}else{if(D.mipmaps.length>0){m.__webglFramebuffer=[];for(let i=0;i<D.mipmaps.length;i++)m.__webglFramebuffer[i]=J.createFramebuffer()}else m.__webglFramebuffer=J.createFramebuffer();if(N0)for(let i=0,r=Z0.length;i<r;i++){let $0=Y.get(Z0[i]);if($0.__webglTexture===void 0)$0.__webglTexture=J.createTexture(),X.memory.textures++}if(T.samples>0&&kJ(T)===!1){m.__webglMultisampledFramebuffer=J.createFramebuffer(),m.__webglColorRenderbuffer=[],k.bindFramebuffer(J.FRAMEBUFFER,m.__webglMultisampledFramebuffer);for(let i=0;i<Z0.length;i++){let r=Z0[i];m.__webglColorRenderbuffer[i]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,m.__webglColorRenderbuffer[i]);let $0=Q.convert(r.format,r.colorSpace),f=Q.convert(r.type),t=C(r.internalFormat,$0,f,r.normalized,r.colorSpace,T.isXRRenderTarget===!0),a=F0(T);J.renderbufferStorageMultisample(J.RENDERBUFFER,a,t,T.width,T.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+i,J.RENDERBUFFER,m.__webglColorRenderbuffer[i])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),T.depthBuffer)m.__webglDepthRenderbuffer=J.createRenderbuffer(),PJ(m.__webglDepthRenderbuffer,T,!0);k.bindFramebuffer(J.FRAMEBUFFER,null)}}if(Q0){k.bindTexture(J.TEXTURE_CUBE_MAP,k0.__webglTexture),$J(J.TEXTURE_CUBE_MAP,D);for(let i=0;i<6;i++)if(D.mipmaps.length>0)for(let r=0;r<D.mipmaps.length;r++)UJ(m.__webglFramebuffer[i][r],T,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+i,r);else UJ(m.__webglFramebuffer[i],T,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);if(A(D))H(J.TEXTURE_CUBE_MAP);else if(D.mipmaps.length>0)J.texParameteri(J.TEXTURE_CUBE_MAP,J.TEXTURE_MAX_LEVEL,D.mipmaps.length-1);k.unbindTexture()}else if(N0){for(let i=0,r=Z0.length;i<r;i++){let $0=Z0[i],f=Y.get($0),t=J.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)t=T.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(k.bindTexture(t,f.__webglTexture),$J(t,$0),UJ(m.__webglFramebuffer,T,$0,J.COLOR_ATTACHMENT0+i,t,0),A($0))H(t)}k.unbindTexture()}else{let i=J.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)i=T.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(k.bindTexture(i,k0.__webglTexture),$J(i,D),D.mipmaps.length>0)for(let r=0;r<D.mipmaps.length;r++)UJ(m.__webglFramebuffer[r],T,D,J.COLOR_ATTACHMENT0,i,r);else UJ(m.__webglFramebuffer,T,D,J.COLOR_ATTACHMENT0,i,0);if(A(D))H(i);else if(D.mipmaps.length>0)J.texParameteri(i,J.TEXTURE_MAX_LEVEL,D.mipmaps.length-1);k.unbindTexture()}if(T.depthBuffer)hJ(T)}function AJ(T){let D=T.textures;for(let m=0,k0=D.length;m<k0;m++){let Z0=D[m];if(A(Z0)&&Z0.mipmapsAutoUpdate===!0){let Q0=_(T),N0=Y.get(Z0).__webglTexture;k.bindTexture(Q0,N0),H(Q0),k.unbindTexture()}}}let JJ=[];function HJ(T){if(T.samples>0){if(kJ(T)===!1){let{textures:D,width:m,height:k0}=T,Z0=J.COLOR_BUFFER_BIT,Q0=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,N0=Y.get(T),i=D.length>1;if(i)for(let $0=0;$0<D.length;$0++)k.bindFramebuffer(J.FRAMEBUFFER,N0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+$0,J.RENDERBUFFER,null),k.bindFramebuffer(J.FRAMEBUFFER,N0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+$0,J.TEXTURE_2D,null,0);if(k.bindFramebuffer(J.READ_FRAMEBUFFER,N0.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0)k.bindFramebuffer(J.DRAW_FRAMEBUFFER,N0.__webglFramebuffer[0]);else k.bindFramebuffer(J.DRAW_FRAMEBUFFER,N0.__webglFramebuffer);for(let $0=0;$0<D.length;$0++){if(T.resolveDepthBuffer){if(T.depthBuffer)Z0|=J.DEPTH_BUFFER_BIT;if(T.stencilBuffer&&T.resolveStencilBuffer)Z0|=J.STENCIL_BUFFER_BIT}if(i){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,N0.__webglColorRenderbuffer[$0]);let f=Y.get(D[$0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,f,0)}if(J.blitFramebuffer(0,0,m,k0,0,0,m,k0,Z0,J.NEAREST),$===!0){if(JJ.length=0,JJ.push(J.COLOR_ATTACHMENT0+$0),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1)JJ.push(Q0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,JJ)}}if(k.bindFramebuffer(J.READ_FRAMEBUFFER,null),k.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),i)for(let $0=0;$0<D.length;$0++){k.bindFramebuffer(J.FRAMEBUFFER,N0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+$0,J.RENDERBUFFER,N0.__webglColorRenderbuffer[$0]);let f=Y.get(D[$0]).__webglTexture;k.bindFramebuffer(J.FRAMEBUFFER,N0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+$0,J.TEXTURE_2D,f,0)}k.bindFramebuffer(J.DRAW_FRAMEBUFFER,N0.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&$){let D=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[D])}}}function F0(T){return Math.min(R.maxSamples,T.samples)}function kJ(T){let D=Y.get(T);return T.samples>0&&Z.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function w0(T){let D=X.render.frame;if(W.get(T)!==D)W.set(T,D),T.update()}function P0(T,D){let{colorSpace:m,format:k0,type:Z0}=T;if(T.isCompressedTexture===!0||T.isVideoTexture===!0)return D;if(m!==JR&&m!==mZ)if(a0.getTransfer(m)===FJ){if(k0!==r8||Z0!==z8)b0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else x0("WebGLTextures: Unsupported texture color space:",m);return D}function DJ(T){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement)K.width=T.naturalWidth||T.width,K.height=T.naturalHeight||T.height;else if(typeof VideoFrame<"u"&&T instanceof VideoFrame)K.width=T.displayWidth,K.height=T.displayHeight;else K.width=T.width,K.height=T.height;return K}this.allocateTextureUnit=e,this.resetTextureUnits=o,this.getTextureUnits=n,this.setTextureUnits=I0,this.setTexture2D=O0,this.setTexture2DArray=_0,this.setTexture3D=f0,this.setTextureCube=H0,this.rebindTextures=Z8,this.setupRenderTarget=x,this.updateRenderTargetMipmap=AJ,this.updateMultisampleRenderTarget=HJ,this.setupDepthRenderbuffer=hJ,this.setupFrameBufferTexture=UJ,this.useMultisampledRTT=kJ,this.dispose=v}function YW(J,Z){function k(Y,R=mZ){let Q,X=a0.getTransfer(R);if(Y===z8)return J.UNSIGNED_BYTE;if(Y===IY)return J.UNSIGNED_SHORT_4_4_4_4;if(Y===OY)return J.UNSIGNED_SHORT_5_5_5_1;if(Y===_9)return J.UNSIGNED_INT_5_9_9_9_REV;if(Y===w9)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Y===z9)return J.BYTE;if(Y===L9)return J.SHORT;if(Y===p1)return J.UNSIGNED_SHORT;if(Y===VY)return J.INT;if(Y===DZ)return J.UNSIGNED_INT;if(Y===a8)return J.FLOAT;if(Y===v8)return J.HALF_FLOAT;if(Y===C9)return J.ALPHA;if(Y===T9)return J.RGB;if(Y===r8)return J.RGBA;if(Y===D1)return J.DEPTH_COMPONENT;if(Y===AZ)return J.DEPTH_STENCIL;if(Y===P9)return J.RED;if(Y===HY)return J.RED_INTEGER;if(Y===xZ)return J.RG;if(Y===DY)return J.RG_INTEGER;if(Y===AY)return J.RGBA_INTEGER;if(Y===t6||Y===e6||Y===Jk||Y===Zk)if(X===FJ)if(Q=Z.get("WEBGL_compressed_texture_s3tc_srgb"),Q!==null){if(Y===t6)return Q.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Y===e6)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Y===Jk)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Y===Zk)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Q=Z.get("WEBGL_compressed_texture_s3tc"),Q!==null){if(Y===t6)return Q.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Y===e6)return Q.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Y===Jk)return Q.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Y===Zk)return Q.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Y===MY||Y===zY||Y===LY||Y===_Y)if(Q=Z.get("WEBGL_compressed_texture_pvrtc"),Q!==null){if(Y===MY)return Q.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Y===zY)return Q.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Y===LY)return Q.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Y===_Y)return Q.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Y===wY||Y===CY||Y===TY||Y===PY||Y===SY||Y===kk||Y===jY)if(Q=Z.get("WEBGL_compressed_texture_etc"),Q!==null){if(Y===wY||Y===CY)return X===FJ?Q.COMPRESSED_SRGB8_ETC2:Q.COMPRESSED_RGB8_ETC2;if(Y===TY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Q.COMPRESSED_RGBA8_ETC2_EAC;if(Y===PY)return Q.COMPRESSED_R11_EAC;if(Y===SY)return Q.COMPRESSED_SIGNED_R11_EAC;if(Y===kk)return Q.COMPRESSED_RG11_EAC;if(Y===jY)return Q.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Y===fY||Y===vY||Y===yY||Y===bY||Y===hY||Y===gY||Y===xY||Y===mY||Y===pY||Y===uY||Y===dY||Y===lY||Y===cY||Y===nY)if(Q=Z.get("WEBGL_compressed_texture_astc"),Q!==null){if(Y===fY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Q.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Y===vY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Q.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Y===yY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Q.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Y===bY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Q.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Y===hY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Q.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Y===gY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Q.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Y===xY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Q.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Y===mY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Q.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Y===pY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Q.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Y===uY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Q.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Y===dY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Q.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Y===lY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Q.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Y===cY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Q.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Y===nY)return X===FJ?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Q.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Y===sY||Y===iY||Y===oY)if(Q=Z.get("EXT_texture_compression_bptc"),Q!==null){if(Y===sY)return X===FJ?Q.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Q.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Y===iY)return Q.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Y===oY)return Q.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Y===aY||Y===rY||Y===Yk||Y===tY)if(Q=Z.get("EXT_texture_compression_rgtc"),Q!==null){if(Y===aY)return Q.COMPRESSED_RED_RGTC1_EXT;if(Y===rY)return Q.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Y===Yk)return Q.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Y===tY)return Q.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Y===gZ)return J.UNSIGNED_INT_24_8;return J[Y]!==void 0?J[Y]:null}return{convert:k}}var RW=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QW=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SX{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Z){if(this.texture===null){let k=new Bk(J.texture);if(J.depthNear!==Z.depthNear||J.depthFar!==Z.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=k}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Z=J.cameras[0].viewport,k=new ZZ({vertexShader:RW,fragmentShader:QW,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Z.z},depthHeight:{value:Z.w}}});this.mesh=new OJ(new y8(20,20),k)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jX extends t8{constructor(J,Z){super();let k=this,Y=null,R=1,Q=null,X="local-floor",N=1,$=null,K=null,W=null,U=null,F=null,G=null,B=typeof XRWebGLBinding<"u",V=new SX,E={},q=Z.getContextAttributes(),O=null,A=null,H=[],_=[],C=new r0,I=null,M=null,j=new k8;j.viewport=new IJ;let y=new k8;y.viewport=new IJ;let P=[j,y],S=new CR,g=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let Y0=H[e];if(Y0===void 0)Y0=new c1,H[e]=Y0;return Y0.getTargetRaySpace()},this.getControllerGrip=function(e){let Y0=H[e];if(Y0===void 0)Y0=new c1,H[e]=Y0;return Y0.getGripSpace()},this.getHand=function(e){let Y0=H[e];if(Y0===void 0)Y0=new c1,H[e]=Y0;return Y0.getHandSpace()};function v(e){let Y0=_.indexOf(e.inputSource);if(Y0===-1)return;let O0=H[Y0];if(O0!==void 0)O0.update(e.inputSource,e.frame,$||Q),O0.dispatchEvent({type:e.type,data:e.inputSource})}function s(){Y.removeEventListener("select",v),Y.removeEventListener("selectstart",v),Y.removeEventListener("selectend",v),Y.removeEventListener("squeeze",v),Y.removeEventListener("squeezestart",v),Y.removeEventListener("squeezeend",v),Y.removeEventListener("end",s),Y.removeEventListener("inputsourceschange",h);for(let e=0;e<H.length;e++){let Y0=_[e];if(Y0===null)continue;_[e]=null,H[e].disconnect(Y0)}g=null,w=null,V.reset();for(let e in E)delete E[e];if(J.setRenderTarget(O),F=null,U=null,W=null,Y=null,A=null,I0.stop(),k.isPresenting=!1,J.setPixelRatio(I),J.setSize(C.width,C.height,!1),M!==null){let e=M.camera;e.fov=M.fov,e.zoom=M.zoom,e.updateProjectionMatrix(),M=null}k.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(e){if(R=e,k.isPresenting===!0)b0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){if(X=e,k.isPresenting===!0)b0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return $||Q},this.setReferenceSpace=function(e){$=e},this.getBaseLayer=function(){return U!==null?U:F},this.getBinding=function(){if(W===null&&B)W=new XRWebGLBinding(Y,Z);return W},this.getFrame=function(){return G},this.getSession=function(){return Y},this.setSession=async function(e){if(Y=e,Y!==null){if(O=J.getRenderTarget(),Y.addEventListener("select",v),Y.addEventListener("selectstart",v),Y.addEventListener("selectend",v),Y.addEventListener("squeeze",v),Y.addEventListener("squeezestart",v),Y.addEventListener("squeezeend",v),Y.addEventListener("end",s),Y.addEventListener("inputsourceschange",h),q.xrCompatible!==!0)await Z.makeXRCompatible();if(I=J.getPixelRatio(),J.getSize(C),!(B&&("createProjectionLayer"in XRWebGLBinding.prototype))){let O0={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:R};F=new XRWebGLLayer(Y,Z,O0),Y.updateRenderState({baseLayer:F}),J.setPixelRatio(1),J.setSize(F.framebufferWidth,F.framebufferHeight,!1),A=new B8(F.framebufferWidth,F.framebufferHeight,{format:r8,type:z8,colorSpace:J.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1,storeMultisampledDepthBuffer:F.ignoreDepthValues===!1,storeMultisampledStencilBuffer:F.ignoreDepthValues===!1})}else{let O0=null,_0=null,f0=null;if(q.depth)f0=q.stencil?Z.DEPTH24_STENCIL8:Z.DEPTH_COMPONENT24,O0=q.stencil?AZ:D1,_0=q.stencil?gZ:DZ;let H0={colorFormat:Z.RGBA8,depthFormat:f0,scaleFactor:R};W=this.getBinding(),U=W.createProjectionLayer(H0),Y.updateRenderState({layers:[U]}),J.setPixelRatio(1),J.setSize(U.textureWidth,U.textureHeight,!1),A=new B8(U.textureWidth,U.textureHeight,{format:r8,type:z8,depthTexture:new LZ(U.textureWidth,U.textureHeight,_0,void 0,void 0,void 0,void 0,void 0,void 0,O0),stencilBuffer:q.stencil,colorSpace:J.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:U.ignoreDepthValues===!1,resolveStencilBuffer:U.ignoreDepthValues===!1,storeMultisampledDepthBuffer:U.ignoreDepthValues===!1,storeMultisampledStencilBuffer:U.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(N),$=null,Q=await Y.requestReferenceSpace(X),I0.setContext(Y),I0.start(),k.isPresenting=!0,k.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Y!==null)return Y.environmentBlendMode},this.getDepthTexture=function(){return V.getDepthTexture()};function h(e){for(let Y0=0;Y0<e.removed.length;Y0++){let O0=e.removed[Y0],_0=_.indexOf(O0);if(_0>=0)_[_0]=null,H[_0].disconnect(O0)}for(let Y0=0;Y0<e.added.length;Y0++){let O0=e.added[Y0],_0=_.indexOf(O0);if(_0===-1){for(let H0=0;H0<H.length;H0++)if(H0>=_.length){_.push(O0),_0=H0;break}else if(_[H0]===null){_[H0]=O0,_0=H0;break}if(_0===-1)break}let f0=H[_0];if(f0)f0.connect(O0)}}function J0(e,Y0){if(Y0===null)e.matrixWorld.copy(e.matrix);else e.matrixWorld.multiplyMatrices(Y0.matrixWorld,e.matrix);e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(Y===null)return;let{near:Y0,far:O0}=e;if(V.texture!==null){if(V.depthNear>0)Y0=V.depthNear;if(V.depthFar>0)O0=V.depthFar}if(S.near=y.near=j.near=Y0,S.far=y.far=j.far=O0,g!==S.near||w!==S.far)Y.updateRenderState({depthNear:S.near,depthFar:S.far}),g=S.near,w=S.far;S.layers.mask=e.layers.mask|6,j.layers.mask=S.layers.mask&-5,y.layers.mask=S.layers.mask&-3;let _0=e.parent,f0=S.cameras;J0(S,_0);for(let H0=0;H0<f0.length;H0++)J0(f0[H0],_0);if(S.projectionMatrix.copy(j.projectionMatrix),S.projectionMatrixInverse.copy(j.projectionMatrixInverse),M===null&&e.isPerspectiveCamera)M={camera:e,fov:e.fov,zoom:e.zoom};l(e,S,_0)};function l(e,Y0,O0){if(O0===null)e.matrix.copy(Y0.matrixWorld);else e.matrix.copy(O0.matrixWorld),e.matrix.invert(),e.matrix.multiply(Y0.matrixWorld);if(e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(Y0.projectionMatrix),e.projectionMatrixInverse.copy(Y0.projectionMatrixInverse),e.isPerspectiveCamera)e.fov=d6*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1}this.getCamera=function(){return S},this.getFoveation=function(){if(U===null&&F===null)return;return N},this.setFoveation=function(e){if(N=e,U!==null)U.fixedFoveation=e;if(F!==null&&F.fixedFoveation!==void 0)F.fixedFoveation=e},this.hasDepthSensing=function(){return V.texture!==null},this.getDepthSensingMesh=function(){return V.getMesh(S)},this.getCameraTexture=function(e){return E[e]};let o=null;function n(e,Y0){if(K=Y0.getViewerPose($||Q),G=Y0,K!==null){let O0=K.views;if(F!==null)J.setRenderTargetFramebuffer(A,F.framebuffer),J.setRenderTarget(A);let _0=!1;if(O0.length!==S.cameras.length)S.cameras.length=0,_0=!0;for(let d0=0;d0<O0.length;d0++){let g0=O0[d0],$J=null;if(F!==null)$J=F.getViewport(g0);else{let v0=W.getViewSubImage(U,g0);if($J=v0.viewport,d0===0)J.setRenderTargetTextures(A,v0.colorTexture,v0.depthStencilTexture),J.setRenderTarget(A)}let l0=P[d0];if(l0===void 0)l0=new k8,l0.layers.enable(d0),l0.viewport=new IJ,P[d0]=l0;if(l0.matrix.fromArray(g0.transform.matrix),l0.matrix.decompose(l0.position,l0.quaternion,l0.scale),l0.projectionMatrix.fromArray(g0.projectionMatrix),l0.projectionMatrixInverse.copy(l0.projectionMatrix).invert(),l0.viewport.set($J.x,$J.y,$J.width,$J.height),d0===0)S.matrix.copy(l0.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale);if(_0===!0)S.cameras.push(l0)}let f0=Y.enabledFeatures;if(f0&&f0.includes("depth-sensing")&&Y.depthUsage=="gpu-optimized"&&B){W=k.getBinding();let d0=W.getDepthInformation(O0[0]);if(d0&&d0.isValid&&d0.texture)V.init(d0,Y.renderState)}if(f0&&f0.includes("camera-access")&&B){J.state.unbindTexture(),W=k.getBinding();for(let d0=0;d0<O0.length;d0++){let g0=O0[d0].camera;if(g0){let $J=E[g0];if(!$J)$J=new Bk,E[g0]=$J;let l0=W.getCameraImage(g0);$J.sourceTexture=l0}}}}for(let O0=0;O0<H.length;O0++){let _0=_[O0],f0=H[O0];if(_0!==null&&f0!==void 0)f0.update(_0,Y0,$||Q)}if(o)o(e,Y0);if(Y0.detectedPlanes)k.dispatchEvent({type:"planesdetected",data:Y0});G=null}let I0=new BX;I0.setAnimationLoop(n),this.setAnimationLoop=function(e){o=e},this.dispose=function(){}}}var XW=new NJ,fX=new m0;fX.set(-1,0,0,0,1,0,0,0,1);function NW(J,Z){function k(E,q){if(E.matrixAutoUpdate===!0)E.updateMatrix();q.value.copy(E.matrix)}function Y(E,q){if(q.color.getRGB(E.fogColor.value,GR(J)),q.isFog)E.fogNear.value=q.near,E.fogFar.value=q.far;else if(q.isFogExp2)E.fogDensity.value=q.density}function R(E,q,O,A,H){if(q.isNodeMaterial)q.uniformsNeedUpdate=!1;else if(q.isMeshBasicMaterial)Q(E,q);else if(q.isMeshLambertMaterial){if(Q(E,q),q.envMap)E.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshToonMaterial)Q(E,q),U(E,q);else if(q.isMeshPhongMaterial){if(Q(E,q),W(E,q),q.envMap)E.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshStandardMaterial){if(Q(E,q),F(E,q),q.isMeshPhysicalMaterial)G(E,q,H)}else if(q.isMeshMatcapMaterial)Q(E,q),B(E,q);else if(q.isMeshDepthMaterial)Q(E,q);else if(q.isMeshDistanceMaterial)Q(E,q),V(E,q);else if(q.isMeshNormalMaterial)Q(E,q);else if(q.isLineBasicMaterial){if(X(E,q),q.isLineDashedMaterial)N(E,q)}else if(q.isPointsMaterial)$(E,q,O,A);else if(q.isSpriteMaterial)K(E,q);else if(q.isShadowMaterial)E.color.value.copy(q.color),E.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function Q(E,q){if(E.opacity.value=q.opacity,q.color)E.diffuse.value.copy(q.color);if(q.emissive)E.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)E.map.value=q.map,k(q.map,E.mapTransform);if(q.alphaMap)E.alphaMap.value=q.alphaMap,k(q.alphaMap,E.alphaMapTransform);if(q.bumpMap){if(E.bumpMap.value=q.bumpMap,k(q.bumpMap,E.bumpMapTransform),E.bumpScale.value=q.bumpScale,q.side===Y8)E.bumpScale.value*=-1}if(q.normalMap){if(E.normalMap.value=q.normalMap,k(q.normalMap,E.normalMapTransform),E.normalScale.value.copy(q.normalScale),q.side===Y8)E.normalScale.value.negate()}if(q.displacementMap)E.displacementMap.value=q.displacementMap,k(q.displacementMap,E.displacementMapTransform),E.displacementScale.value=q.displacementScale,E.displacementBias.value=q.displacementBias;if(q.emissiveMap)E.emissiveMap.value=q.emissiveMap,k(q.emissiveMap,E.emissiveMapTransform);if(q.specularMap)E.specularMap.value=q.specularMap,k(q.specularMap,E.specularMapTransform);if(q.alphaTest>0)E.alphaTest.value=q.alphaTest;let O=Z.get(q),A=O.envMap,H=O.envMapRotation;if(A){if(E.envMap.value=A,E.envMapRotation.value.setFromMatrix4(XW.makeRotationFromEuler(H)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1)E.envMapRotation.value.premultiply(fX);E.reflectivity.value=q.reflectivity,E.ior.value=q.ior,E.refractionRatio.value=q.refractionRatio}if(q.lightMap)E.lightMap.value=q.lightMap,E.lightMapIntensity.value=q.lightMapIntensity,k(q.lightMap,E.lightMapTransform);if(q.aoMap)E.aoMap.value=q.aoMap,E.aoMapIntensity.value=q.aoMapIntensity,k(q.aoMap,E.aoMapTransform)}function X(E,q){if(E.diffuse.value.copy(q.color),E.opacity.value=q.opacity,q.map)E.map.value=q.map,k(q.map,E.mapTransform)}function N(E,q){E.dashSize.value=q.dashSize,E.totalSize.value=q.dashSize+q.gapSize,E.scale.value=q.scale}function $(E,q,O,A){if(E.diffuse.value.copy(q.color),E.opacity.value=q.opacity,E.size.value=q.size*O,E.scale.value=A*0.5,q.map)E.map.value=q.map,k(q.map,E.uvTransform);if(q.alphaMap)E.alphaMap.value=q.alphaMap,k(q.alphaMap,E.alphaMapTransform);if(q.alphaTest>0)E.alphaTest.value=q.alphaTest}function K(E,q){if(E.diffuse.value.copy(q.color),E.opacity.value=q.opacity,E.rotation.value=q.rotation,q.map)E.map.value=q.map,k(q.map,E.mapTransform);if(q.alphaMap)E.alphaMap.value=q.alphaMap,k(q.alphaMap,E.alphaMapTransform);if(q.alphaTest>0)E.alphaTest.value=q.alphaTest}function W(E,q){E.specular.value.copy(q.specular),E.shininess.value=Math.max(q.shininess,0.0001)}function U(E,q){if(q.gradientMap)E.gradientMap.value=q.gradientMap}function F(E,q){if(E.metalness.value=q.metalness,q.metalnessMap)E.metalnessMap.value=q.metalnessMap,k(q.metalnessMap,E.metalnessMapTransform);if(E.roughness.value=q.roughness,q.roughnessMap)E.roughnessMap.value=q.roughnessMap,k(q.roughnessMap,E.roughnessMapTransform);if(q.envMap)E.envMapIntensity.value=q.envMapIntensity}function G(E,q,O){if(E.ior.value=q.ior,q.diffuseRoughness>0){if(E.diffuseRoughness.value=q.diffuseRoughness,q.diffuseRoughnessMap)E.diffuseRoughnessMap.value=q.diffuseRoughnessMap,k(q.diffuseRoughnessMap,E.diffuseRoughnessMapTransform)}if(q.sheen>0){if(E.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),E.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)E.sheenColorMap.value=q.sheenColorMap,k(q.sheenColorMap,E.sheenColorMapTransform);if(q.sheenRoughnessMap)E.sheenRoughnessMap.value=q.sheenRoughnessMap,k(q.sheenRoughnessMap,E.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(E.clearcoat.value=q.clearcoat,E.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)E.clearcoatMap.value=q.clearcoatMap,k(q.clearcoatMap,E.clearcoatMapTransform);if(q.clearcoatRoughnessMap)E.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,k(q.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(E.clearcoatNormalMap.value=q.clearcoatNormalMap,k(q.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===Y8)E.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)E.dispersion.value=q.dispersion;if(q.retroreflectivity>0)E.retroreflectivity.value=q.retroreflectivity;if(q.iridescence>0){if(E.iridescence.value=q.iridescence,E.iridescenceIOR.value=q.iridescenceIOR,E.iridescenceThicknessMinimum.value=q.iridescenceThicknessMinimum,E.iridescenceThicknessMaximum.value=q.iridescenceThicknessMaximum,q.iridescenceMap)E.iridescenceMap.value=q.iridescenceMap,k(q.iridescenceMap,E.iridescenceMapTransform);if(q.iridescenceThicknessMap)E.iridescenceThicknessMap.value=q.iridescenceThicknessMap,k(q.iridescenceThicknessMap,E.iridescenceThicknessMapTransform)}if(q.transmission>0){if(E.transmission.value=q.transmission,E.transmissionSamplerMap.value=O.texture,E.transmissionSamplerSize.value.set(O.width,O.height),q.transmissionMap)E.transmissionMap.value=q.transmissionMap,k(q.transmissionMap,E.transmissionMapTransform);if(E.thickness.value=q.thickness,q.thicknessMap)E.thicknessMap.value=q.thicknessMap,k(q.thicknessMap,E.thicknessMapTransform);E.attenuationDistance.value=q.attenuationDistance,E.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(E.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)E.anisotropyMap.value=q.anisotropyMap,k(q.anisotropyMap,E.anisotropyMapTransform)}if(E.specularIntensity.value=q.specularIntensity,E.specularColor.value.copy(q.specularColor),q.specularColorMap)E.specularColorMap.value=q.specularColorMap,k(q.specularColorMap,E.specularColorMapTransform);if(q.specularIntensityMap)E.specularIntensityMap.value=q.specularIntensityMap,k(q.specularIntensityMap,E.specularIntensityMapTransform)}function B(E,q){if(q.matcap)E.matcap.value=q.matcap}function V(E,q){let O=Z.get(q).light;E.referencePosition.value.setFromMatrixPosition(O.matrixWorld),E.nearDistance.value=O.shadow.camera.near,E.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:Y,refreshMaterialUniforms:R}}function $W(J,Z,k,Y){let R={},Q={};function X(O,A){let H=A.program;Y.uniformBlockBinding(O,H,R[O.id])}function N(O,A){let H=R[O.id];if(H===void 0)B(O),H=$(O),R[O.id]=H,O.addEventListener("dispose",E);let _=A.program;Y.updateUBOMapping(O,_);let C=Z.render.frame;if(Q[O.id]!==C)K(O),Q[O.id]=C}function $(O){let A=J.createBuffer(),H=O.__size,_=O.usage;return J.bindBuffer(J.UNIFORM_BUFFER,A),J.bufferData(J.UNIFORM_BUFFER,H,_),J.bindBuffer(J.UNIFORM_BUFFER,null),A}function K(O){let A=R[O.id],H=O.uniforms,_=O.__cache;J.bindBuffer(J.UNIFORM_BUFFER,A);for(let C=0,I=H.length;C<I;C++){let M=H[C];if(Array.isArray(M))for(let j=0,y=M.length;j<y;j++)W(M[j],C,j,_);else W(M,C,0,_)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function W(O,A,H,_){if(F(O,A,H,_)===!0){let{__offset:C,value:I}=O;if(Array.isArray(I)){let M=0;for(let j=0;j<I.length;j++){let y=I[j],P=V(y,!0);U(y,O.__data,M),M+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else U(I,O.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,C,O.__data)}}function U(O,A,H){if(typeof O==="number"||typeof O==="boolean")A[H]=O;else if(O.isMatrix3)A[H]=O.elements[0],A[H+1]=O.elements[1],A[H+2]=O.elements[2],A[H+3]=0,A[H+4]=O.elements[3],A[H+5]=O.elements[4],A[H+6]=O.elements[5],A[H+7]=0,A[H+8]=O.elements[6],A[H+9]=O.elements[7],A[H+10]=O.elements[8],A[H+11]=0;else if(ArrayBuffer.isView(O))A.set(O.subarray(0,A.length-H),H);else O.toArray(A,H)}function F(O,A,H,_){let C=O.value,I=A+"_"+H;if(Array.isArray(C)){if(_[I]===void 0)_[I]=[];let M=_[I],j=!1;for(let y=0;y<C.length;y++)if(G(C[y],M,y)===!0)j=!0;return j}return G(C,_,I)}function G(O,A,H){if(A[H]===void 0){if(typeof O==="number"||typeof O==="boolean")A[H]=O;else if(ArrayBuffer.isView(O))A[H]=O.slice();else A[H]=O.clone();return!0}else{let _=A[H];if(typeof O==="number"||typeof O==="boolean"){if(_!==O)return A[H]=O,!0}else if(ArrayBuffer.isView(O))return!0;else if(_.equals(O)===!1)return _.copy(O),!0}return!1}function B(O){let A=O.uniforms,H=0,_=16;for(let I=0,M=A.length;I<M;I++){let j=Array.isArray(A[I])?A[I]:[A[I]];for(let y=0,P=j.length;y<P;y++){let S=j[y],g=Array.isArray(S.value)?S.value:[S.value],w=Array.isArray(A[I])||Array.isArray(S.value),v=H;for(let h=0,J0=g.length;h<J0;h++){let l=g[h],o=V(l,w),n=H%_,I0=n%o.boundary,e=n+I0;if(H+=I0,e!==0&&_-e<o.storage)H+=_-e;if(h===0)v=H;H+=o.storage}let s=S.type==="int"?Int32Array:S.type==="uint"?Uint32Array:Float32Array;S.__data=new s((H-v)/Float32Array.BYTES_PER_ELEMENT),S.__offset=v}}let C=H%_;if(C>0)H+=_-C;return O.__size=H,O.__cache={},this}function V(O,A){let H={boundary:0,storage:0};if(typeof O==="number"||typeof O==="boolean")H.boundary=4,H.storage=4;else if(O.isVector2)H.boundary=8,H.storage=8;else if(O.isVector3||O.isColor)H.boundary=16,H.storage=12;else if(O.isVector4)H.boundary=16,H.storage=16;else if(O.isMatrix3)H.boundary=16,H.storage=48;else if(O.isMatrix4)H.boundary=16,H.storage=64;else if(O.isTexture)b0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(O))H.boundary=16,H.storage=O.byteLength;else b0("WebGLRenderer: Unsupported uniform value type.",O);if(A===!0)H.boundary=16,H.storage=Math.ceil(H.storage/16)*16;return H}function E(O){let A=O.target;A.removeEventListener("dispose",E),J.deleteBuffer(R[A.id]),delete R[A.id],delete Q[A.id]}function q(){for(let O in R)J.deleteBuffer(R[O]);R={},Q={}}return{bind:X,update:N,dispose:q}}var KW=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),b8=null;function UW(){if(b8===null)b8=new Uk(KW,16,16,xZ,v8),b8.name="DFG_LUT",b8.minFilter=E8,b8.magFilter=E8,b8.wrapS=a6,b8.wrapT=a6,b8.generateMipmaps=!1,b8.needsUpdate=!0;return b8}class yR{constructor(J={}){let{canvas:Z=h9(),context:k=null,depth:Y=!0,stencil:R=!1,alpha:Q=!1,antialias:X=!1,premultipliedAlpha:N=!0,preserveDrawingBuffer:$=!1,powerPreference:K="default",failIfMajorPerformanceCaveat:W=!1,reversedDepthBuffer:U=!1,outputBufferType:F=z8}=J;this.isWebGLRenderer=!0;let G;if(k!==null){if(typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");G=k.getContextAttributes().alpha}else G=Q;let B=F,V=new Set([AY,DY,HY]),E=new Set([z8,DZ,p1,gZ,IY,OY]),q=new Uint32Array(4),O=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},H=null,_=null,C=[],I=[],M=null;this.domElement=Z,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=f8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,y=!1,P=null,S=null,g=null,w=null;this._outputColorSpace=u1;let v=0,s=0,h=null,J0=-1,l=null,o=new IJ,n=new IJ,I0=null,e=new c0(0),Y0=0,O0=Z.width,_0=Z.height,f0=1,H0=null,t0=null,d0=new IJ(0,0,O0,_0),g0=new IJ(0,0,O0,_0),$J=!1,l0=new yZ,v0=new Fk,BJ=!1,KJ=!1,bJ=new NJ,UJ=new d,PJ=new IJ,SJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},hJ=!1;function Z8(){return h===null?f0:1}let x=k;function AJ(z,b){return Z.getContext(z,b)}let JJ,HJ,F0,kJ,w0,P0,DJ,T,D,m,k0,Z0,Q0,N0,i,r,$0,f,t,a,R0,X0,K0;try{let z={alpha:!0,depth:Y,stencil:R,antialias:X,premultipliedAlpha:N,preserveDrawingBuffer:$,powerPreference:K,failIfMajorPerformanceCaveat:W};if("setAttribute"in Z)Z.setAttribute("data-engine",`three.js r${uQ}`);if(Z.addEventListener("webglcontextlost",G0,!1),Z.addEventListener("webglcontextrestored",j0,!1),Z.addEventListener("webglcontextcreationerror",p0,!1),x===null){if(x=AJ("webgl2",z),x===null)if(AJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}S0()}catch(z){throw Z.removeEventListener("webglcontextlost",G0,!1),Z.removeEventListener("webglcontextrestored",j0,!1),Z.removeEventListener("webglcontextcreationerror",p0,!1),x0("WebGLRenderer: "+z.message),z}function S0(){if(JJ=new D5(x),JJ.init(),R0=new YW(x,JJ),HJ=new U5(x,JJ,J,R0),F0=new ZW(x,JJ),HJ.reversedDepthBuffer&&U)F0.buffers.depth.setReversed(!0);S=x.createFramebuffer(),g=x.createFramebuffer(),w=x.createFramebuffer(),kJ=new z5(x),w0=new pU,P0=new kW(x,JJ,F0,w0,HJ,R0,kJ),DJ=new H5(j),T=new _N(x),X0=new $5(x,T),D=new A5(x,T,kJ,X0),m=new _5(x,D,T,X0,kJ),f=new L5(x,HJ,P0),i=new W5(w0),k0=new mU(j,DJ,JJ,HJ,X0,i),Z0=new NW(j,w0),Q0=new dU,N0=new oU(JJ),$0=new N5(j,DJ,F0,m,G,N),r=new JW(j,m,HJ),K0=new $W(x,kJ,HJ,F0),t=new K5(x,JJ,kJ),a=new M5(x,JJ,kJ),kJ.programs=k0.programs,j.capabilities=HJ,j.extensions=JJ,j.properties=w0,j.renderLists=Q0,j.shadowMap=r,j.state=F0,j.info=kJ}if(B!==z8)M=new C5(B,Z.width,Z.height,X,Y,R);let M0=new jX(j,x);this.xr=M0,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){let z=JJ.get("WEBGL_lose_context");if(z)z.loseContext()},this.forceContextRestore=function(){let z=JJ.get("WEBGL_lose_context");if(z)z.restoreContext()},this.getPixelRatio=function(){return f0},this.setPixelRatio=function(z){if(z===void 0)return;f0=z,this.setSize(O0,_0,!1)},this.getSize=function(z){return z.set(O0,_0)},this.setSize=function(z,b,c=!0){if(M0.isPresenting){b0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(O0=z,_0=b,Z.width=Math.floor(z*f0),Z.height=Math.floor(b*f0),c===!0)Z.style.width=z+"px",Z.style.height=b+"px";if(M!==null)M.setSize(Z.width,Z.height);this.setViewport(0,0,z,b)},this.getDrawingBufferSize=function(z){return z.set(O0*f0,_0*f0).floor()},this.setDrawingBufferSize=function(z,b,c){O0=z,_0=b,f0=c,Z.width=Math.floor(z*c),Z.height=Math.floor(b*c),this.setViewport(0,0,z,b)},this.setEffects=function(z){if(B===z8){x0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(z){for(let b=0;b<z.length;b++)if(z[b].isOutputPass===!0){b0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(z||[])},this.getCurrentViewport=function(z){return z.copy(o)},this.getViewport=function(z){return z.copy(d0)},this.setViewport=function(z,b,c,p){if(z.isVector4)d0.set(z.x,z.y,z.z,z.w);else d0.set(z,b,c,p);F0.viewport(o.copy(d0).multiplyScalar(Z8()).round())},this.getScissor=function(z){return z.copy(g0)},this.setScissor=function(z,b,c,p){if(z.isVector4)g0.set(z.x,z.y,z.z,z.w);else g0.set(z,b,c,p);F0.scissor(n.copy(g0).multiplyScalar(Z8()).round())},this.getScissorTest=function(){return $J},this.setScissorTest=function(z){F0.setScissorTest($J=z)},this.setOpaqueSort=function(z){H0=z},this.setTransparentSort=function(z){t0=z},this.getClearColor=function(z){return z.copy($0.getClearColor())},this.setClearColor=function(){$0.setClearColor(...arguments)},this.getClearAlpha=function(){return $0.getClearAlpha()},this.setClearAlpha=function(){$0.setClearAlpha(...arguments)},this.clear=function(z=!0,b=!0,c=!0){let p=0;if(z){let u=!1;if(h!==null){let W0=h.texture.format;u=V.has(W0)}if(u){let W0=h.texture.type,D0=E.has(W0),U0=$0.getClearColor(),B0=$0.getClearAlpha(),T0=U0.r,u0=U0.g,i0=U0.b;if(D0)q[0]=T0,q[1]=u0,q[2]=i0,q[3]=B0,x.clearBufferuiv(x.COLOR,0,q);else O[0]=T0,O[1]=u0,O[2]=i0,O[3]=B0,x.clearBufferiv(x.COLOR,0,O)}else p|=x.COLOR_BUFFER_BIT}if(b)p|=x.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(c)p|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(p!==0)x.clear(p)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(z){z.setRenderer(this),P=z},this.dispose=function(){Z.removeEventListener("webglcontextlost",G0,!1),Z.removeEventListener("webglcontextrestored",j0,!1),Z.removeEventListener("webglcontextcreationerror",p0,!1),$0.dispose(),Q0.dispose(),N0.dispose(),P0.dispose(),w0.dispose(),DJ.dispose(),m.dispose(),D.dispose(),X0.dispose(),K0.dispose(),k0.dispose(),M0.dispose(),M0.removeEventListener("sessionstart",y0),M0.removeEventListener("sessionend",h0),C0.stop()};function G0(z){z.preventDefault(),$R("WebGLRenderer: Context Lost."),y=!0}function j0(){$R("WebGLRenderer: Context Restored."),y=!1;let z=kJ.autoReset,b=r.enabled,c=r.autoUpdate,p=r.needsUpdate,u=r.type;S0(),kJ.autoReset=z,r.enabled=b,r.autoUpdate=c,r.needsUpdate=p,r.type=u}function p0(z){x0("WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function q0(z){let b=z.target;b.removeEventListener("dispose",q0),YJ(b)}function YJ(z){MJ(z),w0.remove(z)}function MJ(z){let b=w0.get(z).programs;if(b!==void 0){if(b.forEach(function(c){k0.releaseProgram(c)}),z.isShaderMaterial)k0.releaseShaderCache(z)}}this.renderBufferDirect=function(z,b,c,p,u,W0){if(b===null)b=SJ;let D0=u.isMesh&&u.matrixWorld.determinantAffine()<0,U0=tZ(z,b,c,p,u);F0.setMaterial(p,D0);let B0=c.index,T0=1;if(p.wireframe===!0){if(B0=D.getWireframeAttribute(c),B0===void 0)return;T0=2}let u0=c.drawRange,i0=c.attributes.position,z0=u0.start*T0,o0=(u0.start+u0.count)*T0;if(W0!==null)z0=Math.max(z0,W0.start*T0),o0=Math.min(o0,(W0.start+W0.count)*T0);if(B0!==null)z0=Math.max(z0,0),o0=Math.min(o0,B0.count);else if(i0!==void 0&&i0!==null)z0=Math.max(z0,0),o0=Math.min(o0,i0.count);let _J=o0-z0;if(_J<0||_J===1/0)return;X0.setup(u,p,U0,c,B0);let qJ,WJ=t;if(B0!==null)qJ=T.get(B0),WJ=a,WJ.setIndex(qJ);if(u.isMesh)if(p.wireframe===!0)F0.setLineWidth(p.wireframeLinewidth*Z8()),WJ.setMode(x.LINES);else WJ.setMode(x.TRIANGLES);else if(u.isLine){let sJ=p.linewidth;if(sJ===void 0)sJ=1;if(F0.setLineWidth(sJ*Z8()),u.isLineSegments)WJ.setMode(x.LINES);else if(u.isLineLoop)WJ.setMode(x.LINE_LOOP);else WJ.setMode(x.LINE_STRIP)}else if(u.isPoints)WJ.setMode(x.POINTS);else if(u.isSprite)WJ.setMode(x.TRIANGLES);if(u.isBatchedMesh)if(!JJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:sJ,_multiDrawCounts:L0,_multiDrawCount:tJ}=u,RJ=B0?T.get(B0).bytesPerElement:1,TZ=w0.get(p).currentProgram.getUniforms();for(let iJ=0;iJ<tJ;iJ++)TZ.setValue(x,"_gl_DrawID",iJ),WJ.render(sJ[iJ]/RJ,L0[iJ])}else WJ.renderMultiDraw(u._multiDrawStarts,u._multiDrawCounts,u._multiDrawCount);else if(u.isInstancedMesh)WJ.renderInstances(z0,_J,u.count);else if(c.isInstancedBufferGeometry){let sJ=c._maxInstanceCount!==void 0?c._maxInstanceCount:1/0,L0=Math.min(c.instanceCount,sJ);WJ.renderInstances(z0,_J,L0)}else WJ.render(z0,_J)};function W8(z,b,c,p){if(P!==null&&z.isNodeMaterial)P.setObject(p,z);if(BJ===!0)i.setState(z,c,!1);if(z.transparent===!0&&z.side===N8&&z.forceSinglePass===!1)z.side=Y8,z.needsUpdate=!0,p8(z,b,p),z.side=I1,z.needsUpdate=!0,p8(z,b,p),z.side=N8;else p8(z,b,p)}this.compile=function(z,b,c=null){if(c===null)c=z;if(P!==null)P.renderStart(z,b,c);if(_=N0.get(c),_.init(b),I.push(_),c.traverseVisible(function(u){if(u.isLight&&u.layers.test(b.layers)){if(_.pushLight(u),u.castShadow)_.pushShadow(u)}}),z!==c)z.traverseVisible(function(u){if(u.isLight&&u.layers.test(b.layers)){if(_.pushLight(u),u.castShadow)_.pushShadow(u)}});if(_.setupLights(),P!==null)P.updateLights(_.state.lightsArray);if(KJ=this.localClippingEnabled,BJ=i.init(this.clippingPlanes,KJ),BJ===!0)i.setGlobalState(this.clippingPlanes,b);if(P!==null)r.render(_.state.shadowsArray,c,b);let p=new Set;if(z.traverse(function(u){if(!(u.isMesh||u.isPoints||u.isLine||u.isSprite))return;let W0=u.material;if(W0)if(Array.isArray(W0))for(let D0=0;D0<W0.length;D0++){let U0=W0[D0];W8(U0,c,b,u),p.add(U0)}else W8(W0,c,b,u),p.add(W0)}),_=I.pop(),P!==null)P.renderEnd();return p},this.compileAsync=function(z,b,c=null){let p=this.compile(z,b,c);return new Promise((u)=>{function W0(){if(p.forEach(function(D0){let B0=w0.get(D0).currentProgram;if(B0===void 0||B0.isReady())p.delete(D0)}),p.size===0){u(z);return}setTimeout(W0,10)}if(JJ.get("KHR_parallel_shader_compile")!==null)W0();else setTimeout(W0,10)})};let rZ=null;function B6(z){if(rZ)rZ(z)}function y0(){C0.stop()}function h0(){C0.start()}let C0=new BX;if(C0.setAnimationLoop(B6),typeof self<"u")C0.setContext(self);this.setAnimationLoop=function(z){rZ=z,M0.setAnimationLoop(z),z===null?C0.stop():C0.start()},M0.addEventListener("sessionstart",y0),M0.addEventListener("sessionend",h0),this.render=function(z,b){if(b!==void 0&&b.isCamera!==!0){x0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(P!==null)P.renderStart(z,b);let c=M0.enabled===!0&&M0.isPresenting===!0,p=M!==null&&(h===null||c)&&M.begin(j,h);if(z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(b.parent===null&&b.matrixWorldAutoUpdate===!0)b.updateMatrixWorld();if(M0.enabled===!0&&M0.isPresenting===!0&&(M===null||M.isCompositing()===!1)){if(M0.cameraAutoUpdate===!0)M0.updateCamera(b);b=M0.getCamera()}if(z.isScene===!0)z.onBeforeRender(j,z,b,h);if(_=N0.get(z,I.length),_.init(b),_.state.textureUnits=P0.getTextureUnits(),I.push(_),bJ.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),b.isArrayCamera)v0.setFromArrayCamera(b);else l0.setFromProjectionMatrix(bJ,NR,b.reversedDepth);if(KJ=this.localClippingEnabled,BJ=i.init(this.clippingPlanes,KJ),H=Q0.get(z,C.length),H.init(),C.push(H),this.info.render.frame++,M0.enabled===!0&&M0.isPresenting===!0){let D0=j.xr.getDepthSensingMesh();if(D0!==null)GJ(D0,b,-1/0,j.sortObjects)}if(GJ(z,b,0,j.sortObjects),H.finish(),P!==null)P.updateLights(_.state.lightsArray);if(j.sortObjects===!0)H.sort(H0,t0);if(hJ=M0.enabled===!1||M0.isPresenting===!1||M0.hasDepthSensing()===!1,hJ)$0.addToRenderList(H,z);if(this.info.autoReset===!0)this.info.reset();if(BJ===!0)i.beginShadows();let u=_.state.shadowsArray;if(r.render(u,z,b),BJ===!0)i.endShadows();if((p&&M.hasRenderPass())===!1){let{opaque:D0,transmissive:U0}=H;if(_.setupLights(),b.isArrayCamera){let B0=b.cameras;if(U0.length>0)for(let T0=0,u0=B0.length;T0<u0;T0++){let i0=B0[T0];nJ(D0,U0,z,i0)}if(hJ)$0.render(z);for(let T0=0,u0=B0.length;T0<u0;T0++){let i0=B0[T0];jJ(H,z,i0,i0.viewport)}}else{if(U0.length>0)nJ(D0,U0,z,b);if(hJ)$0.render(z);jJ(H,z,b)}}if(h!==null&&s===0)P0.updateMultisampleRenderTarget(h),P0.updateRenderTargetMipmap(h);if(p)M.end(j);if(z.isScene===!0)z.onAfterRender(j,z,b);if(X0.resetDefaultState(),J0=-1,l=null,I.pop(),I.length>0){if(_=I[I.length-1],P0.setTextureUnits(_.state.textureUnits),BJ===!0)i.setGlobalState(j.clippingPlanes,_.state.camera)}else _=null;if(C.pop(),C.length>0)H=C[C.length-1];else H=null;if(P!==null)P.renderEnd()};function GJ(z,b,c,p){if(z.visible===!1)return;if(z.layers.test(b.layers)){if(z.isGroup)c=z.renderOrder;else if(z.isLOD){if(z.autoUpdate===!0)z.update(b)}else if(z.isLight){if(_.pushLight(z),z.castShadow)_.pushShadow(z)}else if(z.isSprite){let D0=b.isArrayCamera?v0:l0;if(!z.frustumCulled||z.intersectsFrustum(D0)){if(p)PJ.setFromMatrixPosition(z.matrixWorld).applyMatrix4(bJ);let U0=m.update(z),B0=z.material;if(B0.visible)H.push(z,U0,B0,c,PJ.z,null,b)}}else if(z.isMesh||z.isLine||z.isPoints){let D0=b.isArrayCamera?v0:l0;if(!z.frustumCulled||z.intersectsFrustum(D0)){let U0=m.update(z),B0=z.material;if(p){if(z.boundingSphere!==void 0){if(z.boundingSphere===null)z.computeBoundingSphere();PJ.copy(z.boundingSphere.center)}else{if(U0.boundingSphere===null)U0.computeBoundingSphere();PJ.copy(U0.boundingSphere.center)}PJ.applyMatrix4(z.matrixWorld).applyMatrix4(bJ)}if(Array.isArray(B0)){let T0=U0.groups;for(let u0=0,i0=T0.length;u0<i0;u0++){let z0=T0[u0],o0=B0[z0.materialIndex];if(o0&&o0.visible)H.push(z,U0,o0,c,PJ.z,z0,b)}}else if(B0.visible)H.push(z,U0,B0,c,PJ.z,null,b)}}}let W0=z.children;for(let D0=0,U0=W0.length;D0<U0;D0++)GJ(W0[D0],b,c,p)}function jJ(z,b,c,p){let{opaque:u,transmissive:W0,transparent:D0}=z;if(_.setupLightsView(c),BJ===!0)i.setGlobalState(j.clippingPlanes,c);if(p)F0.viewport(o.copy(p));if(u.length>0)P8(u,b,c);if(W0.length>0)P8(W0,b,c);if(D0.length>0)P8(D0,b,c);F0.buffers.depth.setTest(!0),F0.buffers.depth.setMask(!0),F0.buffers.color.setMask(!0),F0.setPolygonOffset(!1)}function nJ(z,b,c,p){if((c.isScene===!0?c.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[p.id]===void 0){let z0=JJ.has("EXT_color_buffer_half_float")||JJ.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[p.id]=new B8(1,1,{generateMipmaps:!0,type:z0?v8:z8,minFilter:HZ,samples:Math.max(4,HJ.samples),stencilBuffer:R,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:a0.workingColorSpace})}let W0=_.state.transmissionRenderTarget[p.id],D0=p.viewport||o;W0.setSize(D0.z*j.transmissionResolutionScale,D0.w*j.transmissionResolutionScale);let U0=j.getRenderTarget(),B0=j.getActiveCubeFace(),T0=j.getActiveMipmapLevel();if(j.setRenderTarget(W0),j.getClearColor(e),Y0=j.getClearAlpha(),Y0<1)j.setClearColor(16777215,0.5);if(j.clear(),hJ)$0.render(c);let u0=j.toneMapping;j.toneMapping=f8;let i0=p.viewport;if(p.viewport!==void 0)p.viewport=void 0;if(_.setupLightsView(p),BJ===!0)i.setGlobalState(j.clippingPlanes,p);if(P8(z,c,p),P0.updateMultisampleRenderTarget(W0),P0.updateRenderTargetMipmap(W0),JJ.has("WEBGL_multisampled_render_to_texture")===!1){let z0=!1;for(let o0=0,_J=b.length;o0<_J;o0++){let qJ=b[o0],{object:WJ,geometry:sJ,material:L0,group:tJ}=qJ;if(L0.side===N8&&WJ.layers.test(p.layers)){let RJ=L0.side;L0.side=Y8,L0.needsUpdate=!0,UZ(WJ,c,p,sJ,L0,tJ),L0.side=RJ,L0.needsUpdate=!0,z0=!0}}if(z0===!0)P0.updateMultisampleRenderTarget(W0),P0.updateRenderTargetMipmap(W0)}if(j.setRenderTarget(U0,B0,T0),j.setClearColor(e,Y0),i0!==void 0)p.viewport=i0;j.toneMapping=u0}function P8(z,b,c){let p=b.isScene===!0?b.overrideMaterial:null;for(let u=0,W0=z.length;u<W0;u++){let D0=z[u],{object:U0,geometry:B0,group:T0}=D0,u0=D0.material;if(u0.allowOverride===!0&&p!==null)u0=p;if(U0.layers.test(c.layers))UZ(U0,b,c,B0,u0,T0)}}function UZ(z,b,c,p,u,W0){if(P!==null&&u.isNodeMaterial)P.setObject(z,u);if(z.onBeforeRender(j,b,c,p,u,W0),z.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),u.onBeforeRender(j,b,c,p,z,W0),u.transparent===!0&&u.side===N8&&u.forceSinglePass===!1)u.side=Y8,u.needsUpdate=!0,j.renderBufferDirect(c,b,p,u,z,W0),u.side=I1,u.needsUpdate=!0,j.renderBufferDirect(c,b,p,u,z,W0),u.side=N8;else j.renderBufferDirect(c,b,p,u,z,W0);z.onAfterRender(j,b,c,p,u,W0)}function I8(z){let b=0;for(let c of z)if(c.texture!==null)b++;return b}function p8(z,b,c){if(b.isScene!==!0)b=SJ;let p=w0.get(z),u=_.state.lights,W0=_.state.shadowsArray,D0=u.state.version,U0=k0.getParameters(z,u.state,W0,b,c,_.state.lightProbeGridArray),B0=k0.getProgramCacheKey(U0),T0=p.programs;p.environment=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?b.environment:null,p.fog=b.fog;let u0=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap;if(p.envMap=DJ.get(z.envMap||p.environment,u0),p.envMapRotation=p.environment!==null&&z.envMap===null?b.environmentRotation:z.envMapRotation,T0===void 0)z.addEventListener("dispose",q0),T0=new Map,p.programs=T0,p.programVariants=new Map;let i0=T0.get(B0);if(i0!==void 0){if(p.currentProgram===i0&&p.lightsStateVersion===D0)return V6(z,U0),i0}else{if(U0.uniforms=k0.getUniforms(z),P!==null&&z.isNodeMaterial)P.build(z,c,U0);z.onBeforeCompile(U0,j),i0=k0.acquireProgram(U0,B0),T0.set(B0,i0),p.uniforms=U0.uniforms}let z0=p.uniforms;if(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)z0.clippingPlanes=i.uniform;if(V6(z,U0),p.needsLights=p7(z),p.lightsStateVersion=D0,p.needsLights)z0.ambientLightColor.value=u.state.ambient,z0.lightProbe.value=u.state.probe,z0.sunLights.value=u.state.sun,z0.sunLightShadows.value=u.state.sunShadow,z0.directionalLights.value=u.state.directional,z0.directionalLightShadows.value=u.state.directionalShadow,z0.spotLights.value=u.state.spot,z0.spotLightShadows.value=u.state.spotShadow,z0.rectAreaLights.value=u.state.rectArea,z0.ltc_1.value=u.state.rectAreaLTC1,z0.ltc_2.value=u.state.rectAreaLTC2,z0.pointLights.value=u.state.point,z0.pointLightShadows.value=u.state.pointShadow,z0.hemisphereLights.value=u.state.hemi,z0.sunShadowMatrix.value=u.state.sunShadowMatrix,z0.sunShadowCascade.value=u.state.sunShadowCascade,z0.directionalShadowMatrix.value=u.state.directionalShadowMatrix,z0.spotLightMatrix.value=u.state.spotLightMatrix,z0.spotLightMap.value=u.state.spotLightMap,z0.pointShadowMatrix.value=u.state.pointShadowMatrix;return p.numLightProbeGrids=I8(_.state.lightProbeGridArray),p.currentProgram=i0,p.uniformsList=null,i0}function C1(z,b,c,p,u){let W0=w0.get(z),D0=W0.currentProgram.id+","+p+","+u,U0=W0.programVariants.get(D0);if(U0===void 0)U0=p8(z,b,c),W0.programVariants.set(D0,U0);else W0.currentProgram=U0,W0.uniformsList=null,W0.outputColorSpace=p,W0.toneMapping=u;return U0}function CZ(z){if(z.uniformsList===null){let b=z.currentProgram.getUniforms();z.uniformsList=J6.seqWithValue(b.seq,z.uniforms)}return z.uniformsList}function V6(z,b){let c=w0.get(z);c.outputColorSpace=b.outputColorSpace,c.batching=b.batching,c.batchingColor=b.batchingColor,c.instancing=b.instancing,c.instancingColor=b.instancingColor,c.instancingMorph=b.instancingMorph,c.skinning=b.skinning,c.morphTargets=b.morphTargets,c.morphNormals=b.morphNormals,c.morphColors=b.morphColors,c.morphTargetsCount=b.morphTargetsCount,c.numClippingPlanes=b.numClippingPlanes,c.numIntersection=b.numClipIntersection,c.vertexAlphas=b.vertexAlphas,c.vertexTangents=b.vertexTangents,c.toneMapping=b.toneMapping}function tZ(z,b,c,p,u){if(b.isScene!==!0)b=SJ;P0.resetTextureUnits();let W0=b.fog,D0=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?b.environment:null,U0=h===null?j.outputColorSpace:h.isXRRenderTarget===!0?h.texture.colorSpace:a0.workingColorSpace,B0=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,T0=DJ.get(p.envMap||D0,B0),u0=p.vertexColors===!0&&!!c.attributes.color&&c.attributes.color.itemSize===4,i0=!!c.attributes.tangent&&(!!p.normalMap||p.anisotropy>0),z0=!!c.morphAttributes.position,o0=!!c.morphAttributes.normal,_J=!!c.morphAttributes.color,qJ=f8;if(p.toneMapped){if(h===null||h.isXRRenderTarget===!0)qJ=j.toneMapping}let WJ=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,sJ=WJ!==void 0?WJ.length:0,L0=w0.get(p),tJ=_.state.lights;if(BJ===!0){if(KJ===!0||z!==l){let VJ=z===l&&p.id===J0;i.setState(p,z,VJ)}}let RJ=!1,TZ=!1;if(p.version===L0.__version){if(L0.needsLights&&L0.lightsStateVersion!==tJ.state.version)RJ=!0;else if(u.isBatchedMesh&&L0.batching===!1)RJ=!0;else if(!u.isBatchedMesh&&L0.batching===!0)RJ=!0;else if(u.isBatchedMesh&&L0.batchingColor===!0&&u._colorsTexture===null)RJ=!0;else if(u.isBatchedMesh&&L0.batchingColor===!1&&u._colorsTexture!==null)RJ=!0;else if(u.isInstancedMesh&&L0.instancing===!1)RJ=!0;else if(!u.isInstancedMesh&&L0.instancing===!0)RJ=!0;else if(u.isSkinnedMesh&&L0.skinning===!1)RJ=!0;else if(!u.isSkinnedMesh&&L0.skinning===!0)RJ=!0;else if(u.isInstancedMesh&&L0.instancingColor===!0&&u.instanceColor===null)RJ=!0;else if(u.isInstancedMesh&&L0.instancingColor===!1&&u.instanceColor!==null)RJ=!0;else if(u.isInstancedMesh&&L0.instancingMorph===!0&&u.morphTexture===null)RJ=!0;else if(u.isInstancedMesh&&L0.instancingMorph===!1&&u.morphTexture!==null)RJ=!0;else if(L0.envMap!==T0)RJ=!0;else if(p.fog===!0&&L0.fog!==W0)RJ=!0;else if(L0.numClippingPlanes!==void 0&&(L0.numClippingPlanes!==i.numPlanes||L0.numIntersection!==i.numIntersection))RJ=!0;else if(L0.vertexAlphas!==u0)RJ=!0;else if(L0.vertexTangents!==i0)RJ=!0;else if(L0.morphTargets!==z0)RJ=!0;else if(L0.morphNormals!==o0)RJ=!0;else if(L0.morphColors!==_J)RJ=!0;else if(L0.morphTargetsCount!==sJ)RJ=!0;else if(L0.numLightProbeGrids!==I8(_.state.lightProbeGridArray))RJ=!0;else if(L0.outputColorSpace!==U0||L0.toneMapping!==qJ)TZ=!0}else RJ=!0,L0.__version=p.version;let iJ=L0.currentProgram;if(RJ===!0||TZ===!0){if(iJ=TZ===!0?C1(p,b,u,U0,qJ):p8(p,b,u),P&&p.isNodeMaterial)P.onUpdateProgram(p,iJ,L0)}let I6=!1,WZ=!1,PZ=!1,ZJ=iJ.getUniforms(),uJ=L0.uniforms;if(F0.useProgram(iJ.program))I6=!0,WZ=!0,PZ=!0;if(p.id!==J0)J0=p.id,WZ=!0;if(I6||l!==z){if(F0.buffers.depth.getReversed()&&z.reversedDepth!==!0)z._reversedDepth=!0,z.updateProjectionMatrix();ZJ.setValue(x,"projectionMatrix",z.projectionMatrix),ZJ.setValue(x,"viewMatrix",z.matrixWorldInverse);let gJ=ZJ.map.cameraPosition;if(gJ!==void 0)gJ.setValue(x,UJ.setFromMatrixPosition(z.matrixWorld));if(HJ.logarithmicDepthBuffer)ZJ.setValue(x,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2));if(p.isMeshPhongMaterial||p.isMeshToonMaterial||p.isMeshLambertMaterial||p.isMeshBasicMaterial||p.isMeshStandardMaterial||p.isShaderMaterial)ZJ.setValue(x,"isOrthographic",z.isOrthographicCamera===!0);if(l!==z)l=z,WZ=!0,PZ=!0}if(L0.needsLights){if(tJ.state.sunShadowMap.length>0)ZJ.setValue(x,"sunShadowMap",tJ.state.sunShadowMap,P0);if(tJ.state.directionalShadowMap.length>0)ZJ.setValue(x,"directionalShadowMap",tJ.state.directionalShadowMap,P0);if(tJ.state.spotShadowMap.length>0)ZJ.setValue(x,"spotShadowMap",tJ.state.spotShadowMap,P0);if(tJ.state.pointShadowMap.length>0)ZJ.setValue(x,"pointShadowMap",tJ.state.pointShadowMap,P0)}if(u.isSkinnedMesh){ZJ.setOptional(x,u,"bindMatrix"),ZJ.setOptional(x,u,"bindMatrixInverse");let VJ=u.skeleton;if(VJ){if(VJ.boneTexture===null)VJ.computeBoneTexture();ZJ.setValue(x,"boneTexture",VJ.boneTexture,P0)}}if(u.isBatchedMesh){if(ZJ.setOptional(x,u,"batchingTexture"),ZJ.setValue(x,"batchingTexture",u._matricesTexture,P0),ZJ.setOptional(x,u,"batchingIdTexture"),ZJ.setValue(x,"batchingIdTexture",u._indirectTexture,P0),ZJ.setOptional(x,u,"batchingColorTexture"),u._colorsTexture!==null)ZJ.setValue(x,"batchingColorTexture",u._colorsTexture,P0)}let O8=c.morphAttributes;if(O8.position!==void 0||O8.normal!==void 0||O8.color!==void 0)f.update(u,c,iJ);if(WZ||L0.receiveShadow!==u.receiveShadow)L0.receiveShadow=u.receiveShadow,ZJ.setValue(x,"receiveShadow",u.receiveShadow);if((p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial)&&p.envMap===null&&b.environment!==null)uJ.envMapIntensity.value=b.environmentIntensity;if(uJ.dfgLUT!==void 0)uJ.dfgLUT.value=UW();if(WZ){if(ZJ.setValue(x,"toneMappingExposure",j.toneMappingExposure),L0.needsLights)m7(uJ,PZ);if(W0&&p.fog===!0)Z0.refreshFogUniforms(uJ,W0);if(Z0.refreshMaterialUniforms(uJ,p,f0,_0,_.state.transmissionRenderTarget[z.id]),L0.needsLights&&L0.numLightProbeGrids>0){let VJ=A,gJ=0;for(let u8 of _.state.lightProbeGridArray){if(u8.texture===null)continue;VJ.textures[gJ]=u8.texture,VJ.min[gJ]=u8.boundingBox.min,VJ.max[gJ]=u8.boundingBox.max,VJ.resolution[gJ]=u8.resolution,gJ++}for(let u8 in VJ)VJ[u8].length=gJ;uJ.probesSH.value=VJ.textures,uJ.probesMin.value=VJ.min,uJ.probesMax.value=VJ.max,uJ.probesResolution.value=VJ.resolution}J6.upload(x,CZ(L0),uJ,P0)}if(p.isShaderMaterial&&p.uniformsNeedUpdate===!0)J6.upload(x,CZ(L0),uJ,P0),p.uniformsNeedUpdate=!1;if(p.isSpriteMaterial)ZJ.setValue(x,"center",u.center);if(ZJ.setValue(x,"modelViewMatrix",u.modelViewMatrix),ZJ.setValue(x,"normalMatrix",u.normalMatrix),ZJ.setValue(x,"modelMatrix",u.matrixWorld),p.uniformsGroups!==void 0){let VJ=p.uniformsGroups;for(let gJ=0,u8=VJ.length;gJ<u8;gJ++){let GQ=VJ[gJ];K0.update(GQ,iJ),K0.bind(GQ,iJ)}}return iJ}function m7(z,b){z.ambientLightColor.needsUpdate=b,z.lightProbe.needsUpdate=b,z.sunLights.needsUpdate=b,z.sunLightShadows.needsUpdate=b,z.directionalLights.needsUpdate=b,z.directionalLightShadows.needsUpdate=b,z.pointLights.needsUpdate=b,z.pointLightShadows.needsUpdate=b,z.spotLights.needsUpdate=b,z.spotLightShadows.needsUpdate=b,z.rectAreaLights.needsUpdate=b,z.hemisphereLights.needsUpdate=b}function p7(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return s},this.getRenderTarget=function(){return h},this.setRenderTargetTextures=function(z,b,c){let p=w0.get(z);if(p.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,p.__autoAllocateDepthBuffer===!1)p.__useRenderToTexture=!1;w0.get(z.texture).__webglTexture=b,w0.get(z.depthTexture).__webglTexture=p.__autoAllocateDepthBuffer?void 0:c,p.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,b){let c=w0.get(z);c.__webglFramebuffer=b,c.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(z,b=0,c=0){h=z,v=b,s=c;let p=null,u=!1,W0=!1;if(z){let U0=w0.get(z);if(U0.__useDefaultFramebuffer!==void 0){F0.bindFramebuffer(x.FRAMEBUFFER,U0.__webglFramebuffer),o.copy(z.viewport),n.copy(z.scissor),I0=z.scissorTest,F0.viewport(o),F0.scissor(n),F0.setScissorTest(I0),J0=-1;return}else if(U0.__webglFramebuffer===void 0)P0.setupRenderTarget(z);else if(U0.__hasExternalTextures)P0.rebindTextures(z,w0.get(z.texture).__webglTexture,w0.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let u0=z.depthTexture;if(U0.__boundDepthTexture!==u0){if(u0!==null&&w0.has(u0)&&(z.width!==u0.image.width||z.height!==u0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");P0.setupDepthRenderbuffer(z)}}let B0=z.texture;if(B0.isData3DTexture||B0.isDataArrayTexture||B0.isCompressedArrayTexture)W0=!0;let T0=w0.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget){if(Array.isArray(T0[b]))p=T0[b][c];else p=T0[b];u=!0}else if(z.samples>0&&P0.useMultisampledRTT(z)===!1)p=w0.get(z).__webglMultisampledFramebuffer;else if(Array.isArray(T0))p=T0[c];else p=T0;o.copy(z.viewport),n.copy(z.scissor),I0=z.scissorTest}else o.copy(d0).multiplyScalar(f0).floor(),n.copy(g0).multiplyScalar(f0).floor(),I0=$J;if(c!==0)p=S;if(F0.bindFramebuffer(x.FRAMEBUFFER,p))F0.drawBuffers(z,p);if(F0.viewport(o),F0.scissor(n),F0.setScissorTest(I0),u){let U0=w0.get(z.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+b,U0.__webglTexture,c)}else if(W0){let U0=b;for(let B0=0;B0<z.textures.length;B0++){let T0=w0.get(z.textures[B0]);x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0+B0,T0.__webglTexture,c,U0)}}else if(z!==null&&c!==0){let U0=w0.get(z.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,U0.__webglTexture,c)}J0=-1};function FQ(z){let b=w0.get(z);if(b.__readFormat!==z.format||b.__readType!==z.type)b.__readFormat=z.format,b.__readType=z.type,b.__formatReadable=HJ.textureFormatReadable(z.format),b.__typeReadable=HJ.textureTypeReadable(z.type);return b}if(this.readRenderTargetPixels=function(z,b,c,p,u,W0,D0,U0=0){if(!(z&&z.isWebGLRenderTarget)){x0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let B0=w0.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&D0!==void 0){if(B0=B0[D0],Array.isArray(B0))B0=B0[0]}if(B0){F0.bindFramebuffer(x.FRAMEBUFFER,B0);try{let T0=z.textures[U0],u0=T0.format,i0=T0.type;if(z.textures.length>1)x.readBuffer(x.COLOR_ATTACHMENT0+U0);let z0=FQ(T0);if(z0.__formatReadable===!1){x0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(z0.__typeReadable===!1){x0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(b>=0&&b<=z.width-p&&(c>=0&&c<=z.height-u))x.readPixels(b,c,p,u,R0.convert(u0),R0.convert(i0),W0)}finally{let T0=h!==null?w0.get(h).__webglFramebuffer:null;F0.bindFramebuffer(x.FRAMEBUFFER,T0)}}},this.readRenderTargetPixelsAsync=async function(z,b,c,p,u,W0,D0,U0=0){if(!(z&&z.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let B0=w0.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&D0!==void 0){if(B0=B0[D0],Array.isArray(B0))B0=B0[0]}if(B0)if(b>=0&&b<=z.width-p&&(c>=0&&c<=z.height-u)){F0.bindFramebuffer(x.FRAMEBUFFER,B0);let T0=z.textures[U0],u0=T0.format,i0=T0.type;if(z.textures.length>1)x.readBuffer(x.COLOR_ATTACHMENT0+U0);let z0=FQ(T0);if(z0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(z0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let o0=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,o0),x.bufferData(x.PIXEL_PACK_BUFFER,W0.byteLength,x.STREAM_READ),x.readPixels(b,c,p,u,R0.convert(u0),R0.convert(i0),0),x.bindBuffer(x.PIXEL_PACK_BUFFER,null);let _J=h!==null?w0.get(h).__webglFramebuffer:null;F0.bindFramebuffer(x.FRAMEBUFFER,_J);let qJ=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await x9(x,qJ,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,o0),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,W0),x.bindBuffer(x.PIXEL_PACK_BUFFER,null),x.deleteBuffer(o0),x.deleteSync(qJ),W0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,b=null,c=0){let p=Math.pow(2,-c),u=Math.floor(z.image.width*p),W0=Math.floor(z.image.height*p),D0=b!==null?b.x:0,U0=b!==null?b.y:0;P0.setTexture2D(z,0),x.copyTexSubImage2D(x.TEXTURE_2D,c,0,0,D0,U0,u,W0),F0.unbindTexture()},this.copyTextureToTexture=function(z,b,c=null,p=null,u=0,W0=0){let D0,U0,B0,T0,u0,i0,z0,o0,_J,qJ=z.isCompressedTexture?z.mipmaps[W0]:z.image;if(c!==null)D0=c.max.x-c.min.x,U0=c.max.y-c.min.y,B0=c.isBox3?c.max.z-c.min.z:1,T0=c.min.x,u0=c.min.y,i0=c.isBox3?c.min.z:0;else{let ZJ=Math.pow(2,-u);if(D0=Math.floor(qJ.width*ZJ),U0=Math.floor(qJ.height*ZJ),z.isDataArrayTexture)B0=qJ.depth;else if(z.isData3DTexture)B0=Math.floor(qJ.depth*ZJ);else B0=1;T0=0,u0=0,i0=0}if(p!==null)z0=p.x,o0=p.y,_J=p.z;else z0=0,o0=0,_J=0;let WJ=R0.convert(b.format),sJ=R0.convert(b.type),L0;if(b.isData3DTexture)P0.setTexture3D(b,0),L0=x.TEXTURE_3D;else if(b.isDataArrayTexture||b.isCompressedArrayTexture)P0.setTexture2DArray(b,0),L0=x.TEXTURE_2D_ARRAY;else P0.setTexture2D(b,0),L0=x.TEXTURE_2D;F0.activeTexture(x.TEXTURE0),F0.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,b.flipY),F0.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),F0.pixelStorei(x.UNPACK_ALIGNMENT,b.unpackAlignment);let tJ=F0.getParameter(x.UNPACK_ROW_LENGTH),RJ=F0.getParameter(x.UNPACK_IMAGE_HEIGHT),TZ=F0.getParameter(x.UNPACK_SKIP_PIXELS),iJ=F0.getParameter(x.UNPACK_SKIP_ROWS),I6=F0.getParameter(x.UNPACK_SKIP_IMAGES);F0.pixelStorei(x.UNPACK_ROW_LENGTH,qJ.width),F0.pixelStorei(x.UNPACK_IMAGE_HEIGHT,qJ.height),F0.pixelStorei(x.UNPACK_SKIP_PIXELS,T0),F0.pixelStorei(x.UNPACK_SKIP_ROWS,u0),F0.pixelStorei(x.UNPACK_SKIP_IMAGES,i0);let WZ=z.isDataArrayTexture||z.isData3DTexture,PZ=b.isDataArrayTexture||b.isData3DTexture;if(z.isDepthTexture){let ZJ=w0.get(z),uJ=w0.get(b),O8=w0.get(ZJ.__renderTarget),VJ=w0.get(uJ.__renderTarget);F0.bindFramebuffer(x.READ_FRAMEBUFFER,O8.__webglFramebuffer),F0.bindFramebuffer(x.DRAW_FRAMEBUFFER,VJ.__webglFramebuffer);for(let gJ=0;gJ<B0;gJ++){if(WZ)x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,w0.get(z).__webglTexture,u,i0+gJ),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,w0.get(b).__webglTexture,W0,_J+gJ);x.blitFramebuffer(T0,u0,T0+D0,u0+U0,z0,o0,z0+D0,o0+U0,x.DEPTH_BUFFER_BIT,x.NEAREST)}F0.bindFramebuffer(x.READ_FRAMEBUFFER,null),F0.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(u!==0||z.isRenderTargetTexture||w0.has(z)){let ZJ=w0.get(z),uJ=w0.get(b);F0.bindFramebuffer(x.READ_FRAMEBUFFER,g),F0.bindFramebuffer(x.DRAW_FRAMEBUFFER,w);for(let O8=0;O8<B0;O8++){if(WZ)x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,ZJ.__webglTexture,u,i0+O8);else x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,ZJ.__webglTexture,u);if(PZ)x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,uJ.__webglTexture,W0,_J+O8);else x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,uJ.__webglTexture,W0);if(u!==0)x.blitFramebuffer(T0,u0,T0+D0,u0+U0,z0,o0,z0+D0,o0+U0,x.COLOR_BUFFER_BIT,x.NEAREST);else if(PZ)x.copyTexSubImage3D(L0,W0,z0,o0,_J+O8,T0,u0,D0,U0);else x.copyTexSubImage2D(L0,W0,z0,o0,T0,u0,D0,U0)}F0.bindFramebuffer(x.READ_FRAMEBUFFER,null),F0.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(PZ)if(z.isDataTexture||z.isData3DTexture)x.texSubImage3D(L0,W0,z0,o0,_J,D0,U0,B0,WJ,sJ,qJ.data);else if(b.isCompressedArrayTexture)x.compressedTexSubImage3D(L0,W0,z0,o0,_J,D0,U0,B0,WJ,qJ.data);else x.texSubImage3D(L0,W0,z0,o0,_J,D0,U0,B0,WJ,sJ,qJ);else if(z.isDataTexture)x.texSubImage2D(x.TEXTURE_2D,W0,z0,o0,D0,U0,WJ,sJ,qJ.data);else if(z.isCompressedTexture)x.compressedTexSubImage2D(x.TEXTURE_2D,W0,z0,o0,qJ.width,qJ.height,WJ,qJ.data);else x.texSubImage2D(x.TEXTURE_2D,W0,z0,o0,D0,U0,WJ,sJ,qJ);if(F0.pixelStorei(x.UNPACK_ROW_LENGTH,tJ),F0.pixelStorei(x.UNPACK_IMAGE_HEIGHT,RJ),F0.pixelStorei(x.UNPACK_SKIP_PIXELS,TZ),F0.pixelStorei(x.UNPACK_SKIP_ROWS,iJ),F0.pixelStorei(x.UNPACK_SKIP_IMAGES,I6),W0===0&&b.generateMipmaps===!0&&b.mipmapsAutoUpdate===!0)x.generateMipmap(L0);F0.unbindTexture()},this.initRenderTarget=function(z){if(w0.get(z).__webglFramebuffer===void 0)P0.setupRenderTarget(z)},this.initTexture=function(z){if(z.isCubeTexture)P0.setTextureCube(z,0);else if(z.isData3DTexture)P0.setTexture3D(z,0);else if(z.isDataArrayTexture||z.isCompressedArrayTexture)P0.setTexture2DArray(z,0);else P0.setTexture2D(z,0);F0.unbindTexture()},this.resetState=function(){v=0,s=0,h=null,F0.reset(),X0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return NR}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Z=this.getContext();Z.drawingBufferColorSpace=a0._getDrawingBufferColorSpace(J),Z.unpackColorSpace=a0._getUnpackColorSpace()}}class w8{constructor(J){if(J===void 0)J=[0,0,0,0,0,0,0,0,0];this.elements=J}identity(){let J=this.elements;J[0]=1,J[1]=0,J[2]=0,J[3]=0,J[4]=1,J[5]=0,J[6]=0,J[7]=0,J[8]=1}setZero(){let J=this.elements;J[0]=0,J[1]=0,J[2]=0,J[3]=0,J[4]=0,J[5]=0,J[6]=0,J[7]=0,J[8]=0}setTrace(J){let Z=this.elements;Z[0]=J.x,Z[4]=J.y,Z[8]=J.z}getTrace(J){if(J===void 0)J=new L;let Z=this.elements;return J.x=Z[0],J.y=Z[4],J.z=Z[8],J}vmult(J,Z){if(Z===void 0)Z=new L;let k=this.elements,Y=J.x,R=J.y,Q=J.z;return Z.x=k[0]*Y+k[1]*R+k[2]*Q,Z.y=k[3]*Y+k[4]*R+k[5]*Q,Z.z=k[6]*Y+k[7]*R+k[8]*Q,Z}smult(J){for(let Z=0;Z<this.elements.length;Z++)this.elements[Z]*=J}mmult(J,Z){if(Z===void 0)Z=new w8;let k=this.elements,Y=J.elements,R=Z.elements,Q=k[0],X=k[1],N=k[2],$=k[3],K=k[4],W=k[5],U=k[6],F=k[7],G=k[8],B=Y[0],V=Y[1],E=Y[2],q=Y[3],O=Y[4],A=Y[5],H=Y[6],_=Y[7],C=Y[8];return R[0]=Q*B+X*q+N*H,R[1]=Q*V+X*O+N*_,R[2]=Q*E+X*A+N*C,R[3]=$*B+K*q+W*H,R[4]=$*V+K*O+W*_,R[5]=$*E+K*A+W*C,R[6]=U*B+F*q+G*H,R[7]=U*V+F*O+G*_,R[8]=U*E+F*A+G*C,Z}scale(J,Z){if(Z===void 0)Z=new w8;let k=this.elements,Y=Z.elements;for(let R=0;R!==3;R++)Y[3*R+0]=J.x*k[3*R+0],Y[3*R+1]=J.y*k[3*R+1],Y[3*R+2]=J.z*k[3*R+2];return Z}solve(J,Z){if(Z===void 0)Z=new L;let k=3,Y=4,R=[],Q,X;for(Q=0;Q<k*Y;Q++)R.push(0);for(Q=0;Q<3;Q++)for(X=0;X<3;X++)R[Q+Y*X]=this.elements[Q+3*X];R[3]=J.x,R[7]=J.y,R[11]=J.z;let N=3,$=N,K,W=4,U;do{if(Q=$-N,R[Q+Y*Q]===0){for(X=Q+1;X<$;X++)if(R[Q+Y*X]!==0){K=W;do U=W-K,R[U+Y*Q]+=R[U+Y*X];while(--K);break}}if(R[Q+Y*Q]!==0)for(X=Q+1;X<$;X++){let F=R[Q+Y*X]/R[Q+Y*Q];K=W;do U=W-K,R[U+Y*X]=U<=Q?0:R[U+Y*X]-R[U+Y*Q]*F;while(--K)}}while(--N);if(Z.z=R[2*Y+3]/R[2*Y+2],Z.y=(R[1*Y+3]-R[1*Y+2]*Z.z)/R[1*Y+1],Z.x=(R[0*Y+3]-R[0*Y+2]*Z.z-R[0*Y+1]*Z.y)/R[0*Y+0],isNaN(Z.x)||isNaN(Z.y)||isNaN(Z.z)||Z.x===1/0||Z.y===1/0||Z.z===1/0)throw`Could not solve equation! Got x=[${Z.toString()}], b=[${J.toString()}], A=[${this.toString()}]`;return Z}e(J,Z,k){if(k===void 0)return this.elements[Z+3*J];else this.elements[Z+3*J]=k}copy(J){for(let Z=0;Z<J.elements.length;Z++)this.elements[Z]=J.elements[Z];return this}toString(){let J="",Z=",";for(let k=0;k<9;k++)J+=this.elements[k]+Z;return J}reverse(J){if(J===void 0)J=new w8;let Z=3,k=6,Y=FW,R,Q;for(R=0;R<3;R++)for(Q=0;Q<3;Q++)Y[R+k*Q]=this.elements[R+3*Q];Y[3]=1,Y[9]=0,Y[15]=0,Y[4]=0,Y[10]=1,Y[16]=0,Y[5]=0,Y[11]=0,Y[17]=1;let X=3,N=X,$,K=k,W;do{if(R=N-X,Y[R+k*R]===0){for(Q=R+1;Q<N;Q++)if(Y[R+k*Q]!==0){$=K;do W=K-$,Y[W+k*R]+=Y[W+k*Q];while(--$);break}}if(Y[R+k*R]!==0)for(Q=R+1;Q<N;Q++){let U=Y[R+k*Q]/Y[R+k*R];$=K;do W=K-$,Y[W+k*Q]=W<=R?0:Y[W+k*Q]-Y[W+k*R]*U;while(--$)}}while(--X);R=2;do{Q=R-1;do{let U=Y[R+k*Q]/Y[R+k*R];$=k;do W=k-$,Y[W+k*Q]=Y[W+k*Q]-Y[W+k*R]*U;while(--$)}while(Q--)}while(--R);R=2;do{let U=1/Y[R+k*R];$=k;do W=k-$,Y[W+k*R]=Y[W+k*R]*U;while(--$)}while(R--);R=2;do{Q=2;do{if(W=Y[Z+Q+k*R],isNaN(W)||W===1/0)throw`Could not reverse! A=[${this.toString()}]`;J.e(R,Q,W)}while(Q--)}while(R--);return J}setRotationFromQuaternion(J){let{x:Z,y:k,z:Y,w:R}=J,Q=Z+Z,X=k+k,N=Y+Y,$=Z*Q,K=Z*X,W=Z*N,U=k*X,F=k*N,G=Y*N,B=R*Q,V=R*X,E=R*N,q=this.elements;return q[0]=1-(U+G),q[1]=K-E,q[2]=W+V,q[3]=K+E,q[4]=1-($+G),q[5]=F-B,q[6]=W-V,q[7]=F+B,q[8]=1-($+U),this}transpose(J){if(J===void 0)J=new w8;let Z=this.elements,k=J.elements,Y;return k[0]=Z[0],k[4]=Z[4],k[8]=Z[8],Y=Z[1],k[1]=Z[3],k[3]=Y,Y=Z[2],k[2]=Z[6],k[6]=Y,Y=Z[5],k[5]=Z[7],k[7]=Y,J}}var FW=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class L{constructor(J,Z,k){if(J===void 0)J=0;if(Z===void 0)Z=0;if(k===void 0)k=0;this.x=J,this.y=Z,this.z=k}cross(J,Z){if(Z===void 0)Z=new L;let{x:k,y:Y,z:R}=J,Q=this.x,X=this.y,N=this.z;return Z.x=X*R-N*Y,Z.y=N*k-Q*R,Z.z=Q*Y-X*k,Z}set(J,Z,k){return this.x=J,this.y=Z,this.z=k,this}setZero(){this.x=this.y=this.z=0}vadd(J,Z){if(Z)Z.x=J.x+this.x,Z.y=J.y+this.y,Z.z=J.z+this.z;else return new L(this.x+J.x,this.y+J.y,this.z+J.z)}vsub(J,Z){if(Z)Z.x=this.x-J.x,Z.y=this.y-J.y,Z.z=this.z-J.z;else return new L(this.x-J.x,this.y-J.y,this.z-J.z)}crossmat(){return new w8([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let J=this.x,Z=this.y,k=this.z,Y=Math.sqrt(J*J+Z*Z+k*k);if(Y>0){let R=1/Y;this.x*=R,this.y*=R,this.z*=R}else this.x=0,this.y=0,this.z=0;return Y}unit(J){if(J===void 0)J=new L;let Z=this.x,k=this.y,Y=this.z,R=Math.sqrt(Z*Z+k*k+Y*Y);if(R>0)R=1/R,J.x=Z*R,J.y=k*R,J.z=Y*R;else J.x=1,J.y=0,J.z=0;return J}length(){let J=this.x,Z=this.y,k=this.z;return Math.sqrt(J*J+Z*Z+k*k)}lengthSquared(){return this.dot(this)}distanceTo(J){let Z=this.x,k=this.y,Y=this.z,R=J.x,Q=J.y,X=J.z;return Math.sqrt((R-Z)*(R-Z)+(Q-k)*(Q-k)+(X-Y)*(X-Y))}distanceSquared(J){let Z=this.x,k=this.y,Y=this.z,R=J.x,Q=J.y,X=J.z;return(R-Z)*(R-Z)+(Q-k)*(Q-k)+(X-Y)*(X-Y)}scale(J,Z){if(Z===void 0)Z=new L;let k=this.x,Y=this.y,R=this.z;return Z.x=J*k,Z.y=J*Y,Z.z=J*R,Z}vmul(J,Z){if(Z===void 0)Z=new L;return Z.x=J.x*this.x,Z.y=J.y*this.y,Z.z=J.z*this.z,Z}addScaledVector(J,Z,k){if(k===void 0)k=new L;return k.x=this.x+J*Z.x,k.y=this.y+J*Z.y,k.z=this.z+J*Z.z,k}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(J){if(J===void 0)J=new L;return J.x=-this.x,J.y=-this.y,J.z=-this.z,J}tangents(J,Z){let k=this.length();if(k>0){let Y=GW,R=1/k;Y.set(this.x*R,this.y*R,this.z*R);let Q=qW;if(Math.abs(Y.x)<0.9)Q.set(1,0,0),Y.cross(Q,J);else Q.set(0,1,0),Y.cross(Q,J);Y.cross(J,Z)}else J.set(1,0,0),Z.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}lerp(J,Z,k){let Y=this.x,R=this.y,Q=this.z;k.x=Y+(J.x-Y)*Z,k.y=R+(J.y-R)*Z,k.z=Q+(J.z-Q)*Z}almostEquals(J,Z){if(Z===void 0)Z=0.000001;if(Math.abs(this.x-J.x)>Z||Math.abs(this.y-J.y)>Z||Math.abs(this.z-J.z)>Z)return!1;return!0}almostZero(J){if(J===void 0)J=0.000001;if(Math.abs(this.x)>J||Math.abs(this.y)>J||Math.abs(this.z)>J)return!1;return!0}isAntiparallelTo(J,Z){return this.negate(vX),vX.almostEquals(J,Z)}clone(){return new L(this.x,this.y,this.z)}}L.ZERO=new L(0,0,0);L.UNIT_X=new L(1,0,0);L.UNIT_Y=new L(0,1,0);L.UNIT_Z=new L(0,0,1);var GW=new L,qW=new L,vX=new L;class K8{constructor(J){if(J===void 0)J={};if(this.lowerBound=new L,this.upperBound=new L,J.lowerBound)this.lowerBound.copy(J.lowerBound);if(J.upperBound)this.upperBound.copy(J.upperBound)}setFromPoints(J,Z,k,Y){let R=this.lowerBound,Q=this.upperBound,X=k;if(R.copy(J[0]),X)X.vmult(R,R);Q.copy(R);for(let N=1;N<J.length;N++){let $=J[N];if(X)X.vmult($,yX),$=yX;if($.x>Q.x)Q.x=$.x;if($.x<R.x)R.x=$.x;if($.y>Q.y)Q.y=$.y;if($.y<R.y)R.y=$.y;if($.z>Q.z)Q.z=$.z;if($.z<R.z)R.z=$.z}if(Z)Z.vadd(R,R),Z.vadd(Q,Q);if(Y)R.x-=Y,R.y-=Y,R.z-=Y,Q.x+=Y,Q.y+=Y,Q.z+=Y;return this}copy(J){return this.lowerBound.copy(J.lowerBound),this.upperBound.copy(J.upperBound),this}clone(){return new K8().copy(this)}extend(J){this.lowerBound.x=Math.min(this.lowerBound.x,J.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,J.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,J.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,J.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,J.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,J.upperBound.z)}overlaps(J){let Z=this.lowerBound,k=this.upperBound,Y=J.lowerBound,R=J.upperBound,Q=Y.x<=k.x&&k.x<=R.x||Z.x<=R.x&&R.x<=k.x,X=Y.y<=k.y&&k.y<=R.y||Z.y<=R.y&&R.y<=k.y,N=Y.z<=k.z&&k.z<=R.z||Z.z<=R.z&&R.z<=k.z;return Q&&X&&N}volume(){let J=this.lowerBound,Z=this.upperBound;return(Z.x-J.x)*(Z.y-J.y)*(Z.z-J.z)}contains(J){let Z=this.lowerBound,k=this.upperBound,Y=J.lowerBound,R=J.upperBound;return Z.x<=Y.x&&k.x>=R.x&&Z.y<=Y.y&&k.y>=R.y&&Z.z<=Y.z&&k.z>=R.z}getCorners(J,Z,k,Y,R,Q,X,N){let $=this.lowerBound,K=this.upperBound;J.copy($),Z.set(K.x,$.y,$.z),k.set(K.x,K.y,$.z),Y.set($.x,K.y,K.z),R.set(K.x,$.y,K.z),Q.set($.x,K.y,$.z),X.set($.x,$.y,K.z),N.copy(K)}toLocalFrame(J,Z){let k=bX,Y=k[0],R=k[1],Q=k[2],X=k[3],N=k[4],$=k[5],K=k[6],W=k[7];this.getCorners(Y,R,Q,X,N,$,K,W);for(let U=0;U!==8;U++){let F=k[U];J.pointToLocal(F,F)}return Z.setFromPoints(k)}toWorldFrame(J,Z){let k=bX,Y=k[0],R=k[1],Q=k[2],X=k[3],N=k[4],$=k[5],K=k[6],W=k[7];this.getCorners(Y,R,Q,X,N,$,K,W);for(let U=0;U!==8;U++){let F=k[U];J.pointToWorld(F,F)}return Z.setFromPoints(k)}overlapsRay(J){let{direction:Z,from:k}=J,Y=1/Z.x,R=1/Z.y,Q=1/Z.z,X=(this.lowerBound.x-k.x)*Y,N=(this.upperBound.x-k.x)*Y,$=(this.lowerBound.y-k.y)*R,K=(this.upperBound.y-k.y)*R,W=(this.lowerBound.z-k.z)*Q,U=(this.upperBound.z-k.z)*Q,F=Math.max(Math.max(Math.min(X,N),Math.min($,K)),Math.min(W,U)),G=Math.min(Math.min(Math.max(X,N),Math.max($,K)),Math.max(W,U));if(G<0)return!1;if(F>G)return!1;return!0}}var yX=new L,bX=[new L,new L,new L,new L,new L,new L,new L,new L];class uR{constructor(){this.matrix=[]}get(J,Z){let{index:k}=J,{index:Y}=Z;if(Y>k){let R=Y;Y=k,k=R}return this.matrix[(k*(k+1)>>1)+Y-1]}set(J,Z,k){let{index:Y}=J,{index:R}=Z;if(R>Y){let Q=R;R=Y,Y=Q}this.matrix[(Y*(Y+1)>>1)+R-1]=k?1:0}reset(){for(let J=0,Z=this.matrix.length;J!==Z;J++)this.matrix[J]=0}setNumObjects(J){this.matrix.length=J*(J-1)>>1}}class nR{addEventListener(J,Z){if(this._listeners===void 0)this._listeners={};let k=this._listeners;if(k[J]===void 0)k[J]=[];if(!k[J].includes(Z))k[J].push(Z);return this}hasEventListener(J,Z){if(this._listeners===void 0)return!1;let k=this._listeners;if(k[J]!==void 0&&k[J].includes(Z))return!0;return!1}hasAnyEventListener(J){if(this._listeners===void 0)return!1;return this._listeners[J]!==void 0}removeEventListener(J,Z){if(this._listeners===void 0)return this;let k=this._listeners;if(k[J]===void 0)return this;let Y=k[J].indexOf(Z);if(Y!==-1)k[J].splice(Y,1);return this}dispatchEvent(J){if(this._listeners===void 0)return this;let k=this._listeners[J.type];if(k!==void 0){J.target=this;for(let Y=0,R=k.length;Y<R;Y++)k[Y].call(this,J)}return this}}class TJ{constructor(J,Z,k,Y){if(J===void 0)J=0;if(Z===void 0)Z=0;if(k===void 0)k=0;if(Y===void 0)Y=1;this.x=J,this.y=Z,this.z=k,this.w=Y}set(J,Z,k,Y){return this.x=J,this.y=Z,this.z=k,this.w=Y,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(J,Z){let k=Math.sin(Z*0.5);return this.x=J.x*k,this.y=J.y*k,this.z=J.z*k,this.w=Math.cos(Z*0.5),this}toAxisAngle(J){if(J===void 0)J=new L;this.normalize();let Z=2*Math.acos(this.w),k=Math.sqrt(1-this.w*this.w);if(k<0.001)J.x=this.x,J.y=this.y,J.z=this.z;else J.x=this.x/k,J.y=this.y/k,J.z=this.z/k;return[J,Z]}setFromVectors(J,Z){if(J.isAntiparallelTo(Z)){let k=EW,Y=BW;J.tangents(k,Y),this.setFromAxisAngle(k,Math.PI)}else{let k=J.cross(Z);this.x=k.x,this.y=k.y,this.z=k.z,this.w=Math.sqrt(J.length()**2*Z.length()**2)+J.dot(Z),this.normalize()}return this}mult(J,Z){if(Z===void 0)Z=new TJ;let k=this.x,Y=this.y,R=this.z,Q=this.w,X=J.x,N=J.y,$=J.z,K=J.w;return Z.x=k*K+Q*X+Y*$-R*N,Z.y=Y*K+Q*N+R*X-k*$,Z.z=R*K+Q*$+k*N-Y*X,Z.w=Q*K-k*X-Y*N-R*$,Z}inverse(J){if(J===void 0)J=new TJ;let Z=this.x,k=this.y,Y=this.z,R=this.w;this.conjugate(J);let Q=1/(Z*Z+k*k+Y*Y+R*R);return J.x*=Q,J.y*=Q,J.z*=Q,J.w*=Q,J}conjugate(J){if(J===void 0)J=new TJ;return J.x=-this.x,J.y=-this.y,J.z=-this.z,J.w=this.w,J}normalize(){let J=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);if(J===0)this.x=0,this.y=0,this.z=0,this.w=0;else J=1/J,this.x*=J,this.y*=J,this.z*=J,this.w*=J;return this}normalizeFast(){let J=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;if(J===0)this.x=0,this.y=0,this.z=0,this.w=0;else this.x*=J,this.y*=J,this.z*=J,this.w*=J;return this}vmult(J,Z){if(Z===void 0)Z=new L;let{x:k,y:Y,z:R}=J,Q=this.x,X=this.y,N=this.z,$=this.w,K=$*k+X*R-N*Y,W=$*Y+N*k-Q*R,U=$*R+Q*Y-X*k,F=-Q*k-X*Y-N*R;return Z.x=K*$+F*-Q+W*-N-U*-X,Z.y=W*$+F*-X+U*-Q-K*-N,Z.z=U*$+F*-N+K*-X-W*-Q,Z}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w,this}toEuler(J,Z){if(Z===void 0)Z="YZX";let k,Y,R,Q=this.x,X=this.y,N=this.z,$=this.w;switch(Z){case"YZX":let K=Q*X+N*$;if(K>0.499)k=2*Math.atan2(Q,$),Y=Math.PI/2,R=0;if(K<-0.499)k=-2*Math.atan2(Q,$),Y=-Math.PI/2,R=0;if(k===void 0){let W=Q*Q,U=X*X,F=N*N;k=Math.atan2(2*X*$-2*Q*N,1-2*U-2*F),Y=Math.asin(2*K),R=Math.atan2(2*Q*$-2*X*N,1-2*W-2*F)}break;default:throw Error(`Euler order ${Z} not supported yet.`)}J.y=k,J.z=Y,J.x=R}setFromEuler(J,Z,k,Y){if(Y===void 0)Y="XYZ";let R=Math.cos(J/2),Q=Math.cos(Z/2),X=Math.cos(k/2),N=Math.sin(J/2),$=Math.sin(Z/2),K=Math.sin(k/2);if(Y==="XYZ")this.x=N*Q*X+R*$*K,this.y=R*$*X-N*Q*K,this.z=R*Q*K+N*$*X,this.w=R*Q*X-N*$*K;else if(Y==="YXZ")this.x=N*Q*X+R*$*K,this.y=R*$*X-N*Q*K,this.z=R*Q*K-N*$*X,this.w=R*Q*X+N*$*K;else if(Y==="ZXY")this.x=N*Q*X-R*$*K,this.y=R*$*X+N*Q*K,this.z=R*Q*K+N*$*X,this.w=R*Q*X-N*$*K;else if(Y==="ZYX")this.x=N*Q*X-R*$*K,this.y=R*$*X+N*Q*K,this.z=R*Q*K-N*$*X,this.w=R*Q*X+N*$*K;else if(Y==="YZX")this.x=N*Q*X+R*$*K,this.y=R*$*X+N*Q*K,this.z=R*Q*K-N*$*X,this.w=R*Q*X-N*$*K;else if(Y==="XZY")this.x=N*Q*X-R*$*K,this.y=R*$*X-N*Q*K,this.z=R*Q*K+N*$*X,this.w=R*Q*X+N*$*K;return this}clone(){return new TJ(this.x,this.y,this.z,this.w)}slerp(J,Z,k){if(k===void 0)k=new TJ;let Y=this.x,R=this.y,Q=this.z,X=this.w,N=J.x,$=J.y,K=J.z,W=J.w,U,F,G,B,V;if(F=Y*N+R*$+Q*K+X*W,F<0)F=-F,N=-N,$=-$,K=-K,W=-W;if(1-F>0.000001)U=Math.acos(F),G=Math.sin(U),B=Math.sin((1-Z)*U)/G,V=Math.sin(Z*U)/G;else B=1-Z,V=Z;return k.x=B*Y+V*N,k.y=B*R+V*$,k.z=B*Q+V*K,k.w=B*X+V*W,k}integrate(J,Z,k,Y){if(Y===void 0)Y=new TJ;let R=J.x*k.x,Q=J.y*k.y,X=J.z*k.z,N=this.x,$=this.y,K=this.z,W=this.w,U=Z*0.5;return Y.x+=U*(R*W+Q*K-X*$),Y.y+=U*(Q*W+X*N-R*K),Y.z+=U*(X*W+R*$-Q*N),Y.w+=U*(-R*N-Q*$-X*K),Y}}var EW=new L,BW=new L,VW={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class A0{constructor(J){if(J===void 0)J={};this.id=A0.idCounter++,this.type=J.type||0,this.boundingSphereRadius=0,this.collisionResponse=J.collisionResponse?J.collisionResponse:!0,this.collisionFilterGroup=J.collisionFilterGroup!==void 0?J.collisionFilterGroup:1,this.collisionFilterMask=J.collisionFilterMask!==void 0?J.collisionFilterMask:-1,this.material=J.material?J.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(J,Z){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(J,Z,k,Y){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}A0.idCounter=0;A0.types=VW;class QJ{constructor(J){if(J===void 0)J={};if(this.position=new L,this.quaternion=new TJ,J.position)this.position.copy(J.position);if(J.quaternion)this.quaternion.copy(J.quaternion)}pointToLocal(J,Z){return QJ.pointToLocalFrame(this.position,this.quaternion,J,Z)}pointToWorld(J,Z){return QJ.pointToWorldFrame(this.position,this.quaternion,J,Z)}vectorToWorldFrame(J,Z){if(Z===void 0)Z=new L;return this.quaternion.vmult(J,Z),Z}static pointToLocalFrame(J,Z,k,Y){if(Y===void 0)Y=new L;return k.vsub(J,Y),Z.conjugate(hX),hX.vmult(Y,Y),Y}static pointToWorldFrame(J,Z,k,Y){if(Y===void 0)Y=new L;return Z.vmult(k,Y),Y.vadd(J,Y),Y}static vectorToWorldFrame(J,Z,k){if(k===void 0)k=new L;return J.vmult(Z,k),k}static vectorToLocalFrame(J,Z,k,Y){if(Y===void 0)Y=new L;return Z.w*=-1,Z.vmult(k,Y),Z.w*=-1,Y}}var hX=new TJ;class X6 extends A0{constructor(J){if(J===void 0)J={};let{vertices:Z=[],faces:k=[],normals:Y=[],axes:R,boundingSphereRadius:Q}=J;super({type:A0.types.CONVEXPOLYHEDRON});if(this.vertices=Z,this.faces=k,this.faceNormals=Y,this.faceNormals.length===0)this.computeNormals();if(!Q)this.updateBoundingSphereRadius();else this.boundingSphereRadius=Q;this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=R?R.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let J=this.faces,Z=this.vertices,k=this.uniqueEdges;k.length=0;let Y=new L;for(let R=0;R!==J.length;R++){let Q=J[R],X=Q.length;for(let N=0;N!==X;N++){let $=(N+1)%X;Z[Q[N]].vsub(Z[Q[$]],Y),Y.normalize();let K=!1;for(let W=0;W!==k.length;W++)if(k[W].almostEquals(Y)||k[W].almostEquals(Y)){K=!0;break}if(!K)k.push(Y.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let J=0;J<this.faces.length;J++){for(let Y=0;Y<this.faces[J].length;Y++)if(!this.vertices[this.faces[J][Y]])throw Error(`Vertex ${this.faces[J][Y]} not found!`);let Z=this.faceNormals[J]||new L;this.getFaceNormal(J,Z),Z.negate(Z),this.faceNormals[J]=Z;let k=this.vertices[this.faces[J][0]];if(Z.dot(k)<0){console.error(`.faceNormals[${J}] = Vec3(${Z.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let Y=0;Y<this.faces[J].length;Y++)console.warn(`.vertices[${this.faces[J][Y]}] = Vec3(${this.vertices[this.faces[J][Y]].toString()})`)}}}getFaceNormal(J,Z){let k=this.faces[J],Y=this.vertices[k[0]],R=this.vertices[k[1]],Q=this.vertices[k[2]];X6.computeNormal(Y,R,Q,Z)}static computeNormal(J,Z,k,Y){let R=new L,Q=new L;if(Z.vsub(J,Q),k.vsub(Z,R),R.cross(Q,Y),!Y.isZero())Y.normalize()}clipAgainstHull(J,Z,k,Y,R,Q,X,N,$){let K=new L,W=-1,U=-Number.MAX_VALUE;for(let G=0;G<k.faces.length;G++){K.copy(k.faceNormals[G]),R.vmult(K,K);let B=K.dot(Q);if(B>U)U=B,W=G}let F=[];for(let G=0;G<k.faces[W].length;G++){let B=k.vertices[k.faces[W][G]],V=new L;V.copy(B),R.vmult(V,V),Y.vadd(V,V),F.push(V)}if(W>=0)this.clipFaceAgainstHull(Q,J,Z,F,X,N,$)}findSeparatingAxis(J,Z,k,Y,R,Q,X,N){let $=new L,K=new L,W=new L,U=new L,F=new L,G=new L,B=Number.MAX_VALUE,V=this;if(!V.uniqueAxes){let E=X?X.length:V.faces.length;for(let q=0;q<E;q++){let O=X?X[q]:q;$.copy(V.faceNormals[O]),k.vmult($,$);let A=V.testSepAxis($,J,Z,k,Y,R);if(A===!1)return!1;if(A<B)B=A,Q.copy($)}}else for(let E=0;E!==V.uniqueAxes.length;E++){k.vmult(V.uniqueAxes[E],$);let q=V.testSepAxis($,J,Z,k,Y,R);if(q===!1)return!1;if(q<B)B=q,Q.copy($)}if(!J.uniqueAxes){let E=N?N.length:J.faces.length;for(let q=0;q<E;q++){let O=N?N[q]:q;K.copy(J.faceNormals[O]),R.vmult(K,K);let A=V.testSepAxis(K,J,Z,k,Y,R);if(A===!1)return!1;if(A<B)B=A,Q.copy(K)}}else for(let E=0;E!==J.uniqueAxes.length;E++){R.vmult(J.uniqueAxes[E],K);let q=V.testSepAxis(K,J,Z,k,Y,R);if(q===!1)return!1;if(q<B)B=q,Q.copy(K)}for(let E=0;E!==V.uniqueEdges.length;E++){k.vmult(V.uniqueEdges[E],U);for(let q=0;q!==J.uniqueEdges.length;q++)if(R.vmult(J.uniqueEdges[q],F),U.cross(F,G),!G.almostZero()){G.normalize();let O=V.testSepAxis(G,J,Z,k,Y,R);if(O===!1)return!1;if(O<B)B=O,Q.copy(G)}}if(Y.vsub(Z,W),W.dot(Q)>0)Q.negate(Q);return!0}testSepAxis(J,Z,k,Y,R,Q){let X=this;X6.project(X,J,k,Y,bR),X6.project(Z,J,R,Q,hR);let N=bR[0],$=bR[1],K=hR[0],W=hR[1];if(N<W||K<$)return!1;let U=N-W,F=K-$;return U<F?U:F}calculateLocalInertia(J,Z){let k=new L,Y=new L;this.computeLocalAABB(Y,k);let R=k.x-Y.x,Q=k.y-Y.y,X=k.z-Y.z;Z.x=0.08333333333333333*J*(2*Q*2*Q+2*X*2*X),Z.y=0.08333333333333333*J*(2*R*2*R+2*X*2*X),Z.z=0.08333333333333333*J*(2*Q*2*Q+2*R*2*R)}getPlaneConstantOfFace(J){let Z=this.faces[J],k=this.faceNormals[J],Y=this.vertices[Z[0]];return-k.dot(Y)}clipFaceAgainstHull(J,Z,k,Y,R,Q,X){let N=new L,$=new L,K=new L,W=new L,U=new L,F=new L,G=new L,B=new L,V=this,E=[],q=Y,O=E,A=-1,H=Number.MAX_VALUE;for(let j=0;j<V.faces.length;j++){N.copy(V.faceNormals[j]),k.vmult(N,N);let y=N.dot(J);if(y<H)H=y,A=j}if(A<0)return;let _=V.faces[A];_.connectedFaces=[];for(let j=0;j<V.faces.length;j++)for(let y=0;y<V.faces[j].length;y++)if(_.indexOf(V.faces[j][y])!==-1&&j!==A&&_.connectedFaces.indexOf(j)===-1)_.connectedFaces.push(j);let C=_.length;for(let j=0;j<C;j++){let y=V.vertices[_[j]],P=V.vertices[_[(j+1)%C]];y.vsub(P,$),K.copy($),k.vmult(K,K),Z.vadd(K,K),W.copy(this.faceNormals[A]),k.vmult(W,W),Z.vadd(W,W),K.cross(W,U),U.negate(U),F.copy(y),k.vmult(F,F),Z.vadd(F,F);let S=_.connectedFaces[j];G.copy(this.faceNormals[S]);let g=this.getPlaneConstantOfFace(S);B.copy(G),k.vmult(B,B);let w=g-B.dot(Z);this.clipFaceAgainstPlane(q,O,B,w);while(q.length)q.shift();while(O.length)q.push(O.shift())}G.copy(this.faceNormals[A]);let I=this.getPlaneConstantOfFace(A);B.copy(G),k.vmult(B,B);let M=I-B.dot(Z);for(let j=0;j<q.length;j++){let y=B.dot(q[j])+M;if(y<=R)console.log(`clamped: depth=${y} to minDist=${R}`),y=R;if(y<=Q){let P=q[j];if(y<=0.000001){let S={point:P,normal:B,depth:y};X.push(S)}}}}clipFaceAgainstPlane(J,Z,k,Y){let R,Q,X=J.length;if(X<2)return Z;let N=J[J.length-1],$=J[0];R=k.dot(N)+Y;for(let K=0;K<X;K++){if($=J[K],Q=k.dot($)+Y,R<0)if(Q<0){let W=new L;W.copy($),Z.push(W)}else{let W=new L;N.lerp($,R/(R-Q),W),Z.push(W)}else if(Q<0){let W=new L;N.lerp($,R/(R-Q),W),Z.push(W),Z.push($)}N=$,R=Q}return Z}computeWorldVertices(J,Z){while(this.worldVertices.length<this.vertices.length)this.worldVertices.push(new L);let k=this.vertices,Y=this.worldVertices;for(let R=0;R!==this.vertices.length;R++)Z.vmult(k[R],Y[R]),J.vadd(Y[R],Y[R]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(J,Z){let k=this.vertices;J.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),Z.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let Y=0;Y<this.vertices.length;Y++){let R=k[Y];if(R.x<J.x)J.x=R.x;else if(R.x>Z.x)Z.x=R.x;if(R.y<J.y)J.y=R.y;else if(R.y>Z.y)Z.y=R.y;if(R.z<J.z)J.z=R.z;else if(R.z>Z.z)Z.z=R.z}}computeWorldFaceNormals(J){let Z=this.faceNormals.length;while(this.worldFaceNormals.length<Z)this.worldFaceNormals.push(new L);let k=this.faceNormals,Y=this.worldFaceNormals;for(let R=0;R!==Z;R++)J.vmult(k[R],Y[R]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let J=0,Z=this.vertices;for(let k=0;k!==Z.length;k++){let Y=Z[k].lengthSquared();if(Y>J)J=Y}this.boundingSphereRadius=Math.sqrt(J)}calculateWorldAABB(J,Z,k,Y){let R=this.vertices,Q,X,N,$,K,W,U=new L;for(let F=0;F<R.length;F++){U.copy(R[F]),Z.vmult(U,U),J.vadd(U,U);let G=U;if(Q===void 0||G.x<Q)Q=G.x;if($===void 0||G.x>$)$=G.x;if(X===void 0||G.y<X)X=G.y;if(K===void 0||G.y>K)K=G.y;if(N===void 0||G.z<N)N=G.z;if(W===void 0||G.z>W)W=G.z}k.set(Q,X,N),Y.set($,K,W)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(J){if(J===void 0)J=new L;let Z=this.vertices;for(let k=0;k<Z.length;k++)J.vadd(Z[k],J);return J.scale(1/Z.length,J),J}transformAllPoints(J,Z){let k=this.vertices.length,Y=this.vertices;if(Z){for(let R=0;R<k;R++){let Q=Y[R];Z.vmult(Q,Q)}for(let R=0;R<this.faceNormals.length;R++){let Q=this.faceNormals[R];Z.vmult(Q,Q)}}if(J)for(let R=0;R<k;R++){let Q=Y[R];Q.vadd(J,Q)}}pointIsInside(J){let Z=this.vertices,k=this.faces,Y=this.faceNormals,R=null,Q=new L;this.getAveragePointLocal(Q);for(let X=0;X<this.faces.length;X++){let N=Y[X],$=Z[k[X][0]],K=new L;J.vsub($,K);let W=N.dot(K),U=new L;Q.vsub($,U);let F=N.dot(U);if(W<0&&F>0||W>0&&F<0)return!1}return-1}static project(J,Z,k,Y,R){let Q=J.vertices.length,X=OW,N=0,$=0,K=HW,W=J.vertices;K.setZero(),QJ.vectorToLocalFrame(k,Y,Z,X),QJ.pointToLocalFrame(k,Y,K,K);let U=K.dot(X);$=N=W[0].dot(X);for(let F=1;F<Q;F++){let G=W[F].dot(X);if(G>N)N=G;if(G<$)$=G}if($-=U,N-=U,$>N){let F=$;$=N,N=F}R[0]=N,R[1]=$}}var bR=[],hR=[],IW=new L,OW=new L,HW=new L;class wZ extends A0{constructor(J){super({type:A0.types.BOX});this.halfExtents=J,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let J=this.halfExtents.x,Z=this.halfExtents.y,k=this.halfExtents.z,Y=L,R=[new Y(-J,-Z,-k),new Y(J,-Z,-k),new Y(J,Z,-k),new Y(-J,Z,-k),new Y(-J,-Z,k),new Y(J,-Z,k),new Y(J,Z,k),new Y(-J,Z,k)],Q=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],X=[new Y(0,0,1),new Y(0,1,0),new Y(1,0,0)],N=new X6({vertices:R,faces:Q,axes:X});this.convexPolyhedronRepresentation=N,N.material=this.material}calculateLocalInertia(J,Z){if(Z===void 0)Z=new L;return wZ.calculateInertia(this.halfExtents,J,Z),Z}static calculateInertia(J,Z,k){let Y=J;k.x=0.08333333333333333*Z*(2*Y.y*2*Y.y+2*Y.z*2*Y.z),k.y=0.08333333333333333*Z*(2*Y.x*2*Y.x+2*Y.z*2*Y.z),k.z=0.08333333333333333*Z*(2*Y.y*2*Y.y+2*Y.x*2*Y.x)}getSideNormals(J,Z){let k=J,Y=this.halfExtents;if(k[0].set(Y.x,0,0),k[1].set(0,Y.y,0),k[2].set(0,0,Y.z),k[3].set(-Y.x,0,0),k[4].set(0,-Y.y,0),k[5].set(0,0,-Y.z),Z!==void 0)for(let R=0;R!==k.length;R++)Z.vmult(k[R],k[R]);return k}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(J,Z,k){let Y=this.halfExtents,R=[[Y.x,Y.y,Y.z],[-Y.x,Y.y,Y.z],[-Y.x,-Y.y,Y.z],[-Y.x,-Y.y,-Y.z],[Y.x,-Y.y,-Y.z],[Y.x,Y.y,-Y.z],[-Y.x,Y.y,-Y.z],[Y.x,-Y.y,Y.z]];for(let Q=0;Q<R.length;Q++)_Z.set(R[Q][0],R[Q][1],R[Q][2]),Z.vmult(_Z,_Z),J.vadd(_Z,_Z),k(_Z.x,_Z.y,_Z.z)}calculateWorldAABB(J,Z,k,Y){let R=this.halfExtents;g8[0].set(R.x,R.y,R.z),g8[1].set(-R.x,R.y,R.z),g8[2].set(-R.x,-R.y,R.z),g8[3].set(-R.x,-R.y,-R.z),g8[4].set(R.x,-R.y,-R.z),g8[5].set(R.x,R.y,-R.z),g8[6].set(-R.x,R.y,-R.z),g8[7].set(R.x,-R.y,R.z);let Q=g8[0];Z.vmult(Q,Q),J.vadd(Q,Q),Y.copy(Q),k.copy(Q);for(let X=1;X<8;X++){let N=g8[X];Z.vmult(N,N),J.vadd(N,N);let{x:$,y:K,z:W}=N;if($>Y.x)Y.x=$;if(K>Y.y)Y.y=K;if(W>Y.z)Y.z=W;if($<k.x)k.x=$;if(K<k.y)k.y=K;if(W<k.z)k.z=W}}}var _Z=new L,g8=[new L,new L,new L,new L,new L,new L,new L,new L],sR={DYNAMIC:1,STATIC:2,KINEMATIC:4},iR={AWAKE:0,SLEEPY:1,SLEEPING:2};class V0 extends nR{constructor(J){if(J===void 0)J={};super();if(this.id=V0.idCounter++,this.index=-1,this.world=null,this.vlambda=new L,this.collisionFilterGroup=typeof J.collisionFilterGroup==="number"?J.collisionFilterGroup:1,this.collisionFilterMask=typeof J.collisionFilterMask==="number"?J.collisionFilterMask:-1,this.collisionResponse=typeof J.collisionResponse==="boolean"?J.collisionResponse:!0,this.position=new L,this.previousPosition=new L,this.interpolatedPosition=new L,this.initPosition=new L,J.position)this.position.copy(J.position),this.previousPosition.copy(J.position),this.interpolatedPosition.copy(J.position),this.initPosition.copy(J.position);if(this.velocity=new L,J.velocity)this.velocity.copy(J.velocity);this.initVelocity=new L,this.force=new L;let Z=typeof J.mass==="number"?J.mass:0;if(this.mass=Z,this.invMass=Z>0?1/Z:0,this.material=J.material||null,this.linearDamping=typeof J.linearDamping==="number"?J.linearDamping:0.01,this.type=Z<=0?V0.STATIC:V0.DYNAMIC,typeof J.type===typeof V0.STATIC)this.type=J.type;if(this.allowSleep=typeof J.allowSleep<"u"?J.allowSleep:!0,this.sleepState=V0.AWAKE,this.sleepSpeedLimit=typeof J.sleepSpeedLimit<"u"?J.sleepSpeedLimit:0.1,this.sleepTimeLimit=typeof J.sleepTimeLimit<"u"?J.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new L,this.quaternion=new TJ,this.initQuaternion=new TJ,this.previousQuaternion=new TJ,this.interpolatedQuaternion=new TJ,J.quaternion)this.quaternion.copy(J.quaternion),this.initQuaternion.copy(J.quaternion),this.previousQuaternion.copy(J.quaternion),this.interpolatedQuaternion.copy(J.quaternion);if(this.angularVelocity=new L,J.angularVelocity)this.angularVelocity.copy(J.angularVelocity);if(this.initAngularVelocity=new L,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new L,this.invInertia=new L,this.invInertiaWorld=new w8,this.invMassSolve=0,this.invInertiaSolve=new L,this.invInertiaWorldSolve=new w8,this.fixedRotation=typeof J.fixedRotation<"u"?J.fixedRotation:!1,this.angularDamping=typeof J.angularDamping<"u"?J.angularDamping:0.01,this.linearFactor=new L(1,1,1),J.linearFactor)this.linearFactor.copy(J.linearFactor);if(this.angularFactor=new L(1,1,1),J.angularFactor)this.angularFactor.copy(J.angularFactor);if(this.aabb=new K8,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new L,this.isTrigger=Boolean(J.isTrigger),J.shape)this.addShape(J.shape);this.updateMassProperties()}wakeUp(){let J=this.sleepState;if(this.sleepState=V0.AWAKE,this.wakeUpAfterNarrowphase=!1,J===V0.SLEEPING)this.dispatchEvent(V0.wakeupEvent)}sleep(){this.sleepState=V0.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(J){if(this.allowSleep){let Z=this.sleepState,k=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),Y=this.sleepSpeedLimit**2;if(Z===V0.AWAKE&&k<Y)this.sleepState=V0.SLEEPY,this.timeLastSleepy=J,this.dispatchEvent(V0.sleepyEvent);else if(Z===V0.SLEEPY&&k>Y)this.wakeUp();else if(Z===V0.SLEEPY&&J-this.timeLastSleepy>this.sleepTimeLimit)this.sleep(),this.dispatchEvent(V0.sleepEvent)}}updateSolveMassProperties(){if(this.sleepState===V0.SLEEPING||this.type===V0.KINEMATIC)this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero();else this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld)}pointToLocalFrame(J,Z){if(Z===void 0)Z=new L;return J.vsub(this.position,Z),this.quaternion.conjugate().vmult(Z,Z),Z}vectorToLocalFrame(J,Z){if(Z===void 0)Z=new L;return this.quaternion.conjugate().vmult(J,Z),Z}pointToWorldFrame(J,Z){if(Z===void 0)Z=new L;return this.quaternion.vmult(J,Z),Z.vadd(this.position,Z),Z}vectorToWorldFrame(J,Z){if(Z===void 0)Z=new L;return this.quaternion.vmult(J,Z),Z}addShape(J,Z,k){let Y=new L,R=new TJ;if(Z)Y.copy(Z);if(k)R.copy(k);return this.shapes.push(J),this.shapeOffsets.push(Y),this.shapeOrientations.push(R),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,J.body=this,this}removeShape(J){let Z=this.shapes.indexOf(J);if(Z===-1)return console.warn("Shape does not belong to the body"),this;return this.shapes.splice(Z,1),this.shapeOffsets.splice(Z,1),this.shapeOrientations.splice(Z,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,J.body=null,this}updateBoundingRadius(){let J=this.shapes,Z=this.shapeOffsets,k=J.length,Y=0;for(let R=0;R!==k;R++){let Q=J[R];Q.updateBoundingSphereRadius();let X=Z[R].length(),N=Q.boundingSphereRadius;if(X+N>Y)Y=X+N}this.boundingRadius=Y}updateAABB(){let J=this.shapes,Z=this.shapeOffsets,k=this.shapeOrientations,Y=J.length,R=DW,Q=AW,X=this.quaternion,N=this.aabb,$=MW;for(let K=0;K!==Y;K++){let W=J[K];if(X.vmult(Z[K],R),R.vadd(this.position,R),X.mult(k[K],Q),W.calculateWorldAABB(R,Q,$.lowerBound,$.upperBound),K===0)N.copy($);else N.extend($)}this.aabbNeedsUpdate=!1}updateInertiaWorld(J){let Z=this.invInertia;if(Z.x===Z.y&&Z.y===Z.z&&!J);else{let k=zW,Y=LW;k.setRotationFromQuaternion(this.quaternion),k.transpose(Y),k.scale(Z,k),k.mmult(Y,this.invInertiaWorld)}}applyForce(J,Z){if(Z===void 0)Z=new L;if(this.type!==V0.DYNAMIC)return;if(this.sleepState===V0.SLEEPING)this.wakeUp();let k=wW;Z.cross(J,k),this.force.vadd(J,this.force),this.torque.vadd(k,this.torque)}applyLocalForce(J,Z){if(Z===void 0)Z=new L;if(this.type!==V0.DYNAMIC)return;let k=CW,Y=TW;this.vectorToWorldFrame(J,k),this.vectorToWorldFrame(Z,Y),this.applyForce(k,Y)}applyTorque(J){if(this.type!==V0.DYNAMIC)return;if(this.sleepState===V0.SLEEPING)this.wakeUp();this.torque.vadd(J,this.torque)}applyImpulse(J,Z){if(Z===void 0)Z=new L;if(this.type!==V0.DYNAMIC)return;if(this.sleepState===V0.SLEEPING)this.wakeUp();let k=Z,Y=PW;Y.copy(J),Y.scale(this.invMass,Y),this.velocity.vadd(Y,this.velocity);let R=SW;k.cross(J,R),this.invInertiaWorld.vmult(R,R),this.angularVelocity.vadd(R,this.angularVelocity)}applyLocalImpulse(J,Z){if(Z===void 0)Z=new L;if(this.type!==V0.DYNAMIC)return;let k=jW,Y=fW;this.vectorToWorldFrame(J,k),this.vectorToWorldFrame(Z,Y),this.applyImpulse(k,Y)}updateMassProperties(){let J=vW;this.invMass=this.mass>0?1/this.mass:0;let Z=this.inertia,k=this.fixedRotation;this.updateAABB(),J.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),wZ.calculateInertia(J,this.mass,Z),this.invInertia.set(Z.x>0&&!k?1/Z.x:0,Z.y>0&&!k?1/Z.y:0,Z.z>0&&!k?1/Z.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(J,Z){let k=new L;return J.vsub(this.position,k),this.angularVelocity.cross(k,Z),this.velocity.vadd(Z,Z),Z}integrate(J,Z,k){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===V0.DYNAMIC||this.type===V0.KINEMATIC)||this.sleepState===V0.SLEEPING)return;let Y=this.velocity,R=this.angularVelocity,Q=this.position,X=this.force,N=this.torque,$=this.quaternion,K=this.invMass,W=this.invInertiaWorld,U=this.linearFactor,F=K*J;Y.x+=X.x*F*U.x,Y.y+=X.y*F*U.y,Y.z+=X.z*F*U.z;let G=W.elements,B=this.angularFactor,V=N.x*B.x,E=N.y*B.y,q=N.z*B.z;if(R.x+=J*(G[0]*V+G[1]*E+G[2]*q),R.y+=J*(G[3]*V+G[4]*E+G[5]*q),R.z+=J*(G[6]*V+G[7]*E+G[8]*q),Q.x+=Y.x*J,Q.y+=Y.y*J,Q.z+=Y.z*J,$.integrate(this.angularVelocity,J,this.angularFactor,$),Z)if(k)$.normalizeFast();else $.normalize();this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}V0.idCounter=0;V0.COLLIDE_EVENT_NAME="collide";V0.DYNAMIC=sR.DYNAMIC;V0.STATIC=sR.STATIC;V0.KINEMATIC=sR.KINEMATIC;V0.AWAKE=iR.AWAKE;V0.SLEEPY=iR.SLEEPY;V0.SLEEPING=iR.SLEEPING;V0.wakeupEvent={type:"wakeup"};V0.sleepyEvent={type:"sleepy"};V0.sleepEvent={type:"sleep"};var DW=new L,AW=new TJ,MW=new K8,zW=new w8,LW=new w8,_W=new w8,wW=new L,CW=new L,TW=new L,PW=new L,SW=new L,jW=new L,fW=new L,vW=new L;class oR{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(J,Z,k){throw Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(J,Z){if((J.collisionFilterGroup&Z.collisionFilterMask)===0||(Z.collisionFilterGroup&J.collisionFilterMask)===0)return!1;if(((J.type&V0.STATIC)!==0||J.sleepState===V0.SLEEPING)&&((Z.type&V0.STATIC)!==0||Z.sleepState===V0.SLEEPING))return!1;return!0}intersectionTest(J,Z,k,Y){if(this.useBoundingBoxes)this.doBoundingBoxBroadphase(J,Z,k,Y);else this.doBoundingSphereBroadphase(J,Z,k,Y)}doBoundingSphereBroadphase(J,Z,k,Y){let R=yW;Z.position.vsub(J.position,R);let Q=(J.boundingRadius+Z.boundingRadius)**2;if(R.lengthSquared()<Q)k.push(J),Y.push(Z)}doBoundingBoxBroadphase(J,Z,k,Y){if(J.aabbNeedsUpdate)J.updateAABB();if(Z.aabbNeedsUpdate)Z.updateAABB();if(J.aabb.overlaps(Z.aabb))k.push(J),Y.push(Z)}makePairsUnique(J,Z){let k=bW,Y=hW,R=gW,Q=J.length;for(let X=0;X!==Q;X++)Y[X]=J[X],R[X]=Z[X];J.length=0,Z.length=0;for(let X=0;X!==Q;X++){let N=Y[X].id,$=R[X].id,K=N<$?`${N},${$}`:`${$},${N}`;k[K]=X,k.keys.push(K)}for(let X=0;X!==k.keys.length;X++){let N=k.keys.pop(),$=k[N];J.push(Y[$]),Z.push(R[$]),delete k[N]}}setWorld(J){}static boundingSphereCheck(J,Z){let k=new L;J.position.vsub(Z.position,k);let Y=J.shapes[0],R=Z.shapes[0];return Math.pow(Y.boundingSphereRadius+R.boundingSphereRadius,2)>k.lengthSquared()}aabbQuery(J,Z,k){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}var yW=new L;new L;new TJ;new L;var bW={keys:[]},hW=[],gW=[];new L;var n4=new L;new L;class oX extends oR{constructor(){super()}collisionPairs(J,Z,k){let Y=J.bodies,R=Y.length,Q,X;for(let N=0;N!==R;N++)for(let $=0;$!==N;$++){if(Q=Y[N],X=Y[$],!this.needBroadphaseCollision(Q,X))continue;this.intersectionTest(Q,X,Z,k)}}aabbQuery(J,Z,k){if(k===void 0)k=[];for(let Y=0;Y<J.bodies.length;Y++){let R=J.bodies[Y];if(R.aabbNeedsUpdate)R.updateAABB();if(R.aabb.overlaps(Z))k.push(R)}return k}}class N6{constructor(){this.rayFromWorld=new L,this.rayToWorld=new L,this.hitNormalWorld=new L,this.hitPointWorld=new L,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(J,Z,k,Y,R,Q,X){this.rayFromWorld.copy(J),this.rayToWorld.copy(Z),this.hitNormalWorld.copy(k),this.hitPointWorld.copy(Y),this.shape=R,this.body=Q,this.distance=X}}var aX,rX,tX,eX,J7,Z7,k7,aR={CLOSEST:1,ANY:2,ALL:4};aX=A0.types.SPHERE;rX=A0.types.PLANE;tX=A0.types.BOX;eX=A0.types.CYLINDER;J7=A0.types.CONVEXPOLYHEDRON;Z7=A0.types.HEIGHTFIELD;k7=A0.types.TRIMESH;class CJ{get[aX](){return this._intersectSphere}get[rX](){return this._intersectPlane}get[tX](){return this._intersectBox}get[eX](){return this._intersectConvex}get[J7](){return this._intersectConvex}get[Z7](){return this._intersectHeightfield}get[k7](){return this._intersectTrimesh}constructor(J,Z){if(J===void 0)J=new L;if(Z===void 0)Z=new L;this.from=J.clone(),this.to=Z.clone(),this.direction=new L,this.precision=0.0001,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=CJ.ANY,this.result=new N6,this.hasHit=!1,this.callback=(k)=>{}}intersectWorld(J,Z){if(this.mode=Z.mode||CJ.ANY,this.result=Z.result||new N6,this.skipBackfaces=!!Z.skipBackfaces,this.collisionFilterMask=typeof Z.collisionFilterMask<"u"?Z.collisionFilterMask:-1,this.collisionFilterGroup=typeof Z.collisionFilterGroup<"u"?Z.collisionFilterGroup:-1,this.checkCollisionResponse=typeof Z.checkCollisionResponse<"u"?Z.checkCollisionResponse:!0,Z.from)this.from.copy(Z.from);if(Z.to)this.to.copy(Z.to);return this.callback=Z.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(gX),gR.length=0,J.broadphase.aabbQuery(J,gX,gR),this.intersectBodies(gR),this.hasHit}intersectBody(J,Z){if(Z)this.result=Z,this.updateDirection();let k=this.checkCollisionResponse;if(k&&!J.collisionResponse)return;if((this.collisionFilterGroup&J.collisionFilterMask)===0||(J.collisionFilterGroup&this.collisionFilterMask)===0)return;let Y=xW,R=mW;for(let Q=0,X=J.shapes.length;Q<X;Q++){let N=J.shapes[Q];if(k&&!N.collisionResponse)continue;if(J.quaternion.mult(J.shapeOrientations[Q],R),J.quaternion.vmult(J.shapeOffsets[Q],Y),Y.vadd(J.position,Y),this.intersectShape(N,R,Y,J),this.result.shouldStop)break}}intersectBodies(J,Z){if(Z)this.result=Z,this.updateDirection();for(let k=0,Y=J.length;!this.result.shouldStop&&k<Y;k++)this.intersectBody(J[k])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(J,Z,k,Y){let R=this.from;if(kF(R,this.direction,k)>J.boundingSphereRadius)return;let X=this[J.type];if(X)X.call(this,J,Z,k,Y,J)}_intersectBox(J,Z,k,Y,R){return this._intersectConvex(J.convexPolyhedronRepresentation,Z,k,Y,R)}_intersectPlane(J,Z,k,Y,R){let Q=this.from,X=this.to,N=this.direction,$=new L(0,0,1);Z.vmult($,$);let K=new L;Q.vsub(k,K);let W=K.dot($);X.vsub(k,K);let U=K.dot($);if(W*U>0)return;if(Q.distanceTo(X)<W)return;let F=$.dot(N);if(Math.abs(F)<this.precision)return;let G=new L,B=new L,V=new L;Q.vsub(k,G);let E=-$.dot(G)/F;N.scale(E,B),Q.vadd(B,V),this.reportIntersection($,V,R,Y,-1)}getAABB(J){let{lowerBound:Z,upperBound:k}=J,Y=this.to,R=this.from;Z.x=Math.min(Y.x,R.x),Z.y=Math.min(Y.y,R.y),Z.z=Math.min(Y.z,R.z),k.x=Math.max(Y.x,R.x),k.y=Math.max(Y.y,R.y),k.z=Math.max(Y.z,R.z)}_intersectHeightfield(J,Z,k,Y,R){J.data,J.elementSize;let Q=pW;Q.from.copy(this.from),Q.to.copy(this.to),QJ.pointToLocalFrame(k,Z,Q.from,Q.from),QJ.pointToLocalFrame(k,Z,Q.to,Q.to),Q.updateDirection();let X=uW,N,$,K,W;N=$=0,K=W=J.data.length-1;let U=new K8;Q.getAABB(U),J.getIndexOfPosition(U.lowerBound.x,U.lowerBound.y,X,!0),N=Math.max(N,X[0]),$=Math.max($,X[1]),J.getIndexOfPosition(U.upperBound.x,U.upperBound.y,X,!0),K=Math.min(K,X[0]+1),W=Math.min(W,X[1]+1);for(let F=N;F<K;F++)for(let G=$;G<W;G++){if(this.result.shouldStop)return;if(J.getAabbAtIndex(F,G,U),!U.overlapsRay(Q))continue;if(J.getConvexTrianglePillar(F,G,!1),QJ.pointToWorldFrame(k,Z,J.pillarOffset,Tk),this._intersectConvex(J.pillarConvex,Z,Tk,Y,R,xX),this.result.shouldStop)return;J.getConvexTrianglePillar(F,G,!0),QJ.pointToWorldFrame(k,Z,J.pillarOffset,Tk),this._intersectConvex(J.pillarConvex,Z,Tk,Y,R,xX)}}_intersectSphere(J,Z,k,Y,R){let Q=this.from,X=this.to,N=J.radius,$=(X.x-Q.x)**2+(X.y-Q.y)**2+(X.z-Q.z)**2,K=2*((X.x-Q.x)*(Q.x-k.x)+(X.y-Q.y)*(Q.y-k.y)+(X.z-Q.z)*(Q.z-k.z)),W=(Q.x-k.x)**2+(Q.y-k.y)**2+(Q.z-k.z)**2-N**2,U=K**2-4*$*W,F=dW,G=lW;if(U<0)return;else if(U===0)Q.lerp(X,U,F),F.vsub(k,G),G.normalize(),this.reportIntersection(G,F,R,Y,-1);else{let B=(-K-Math.sqrt(U))/(2*$),V=(-K+Math.sqrt(U))/(2*$);if(B>=0&&B<=1)Q.lerp(X,B,F),F.vsub(k,G),G.normalize(),this.reportIntersection(G,F,R,Y,-1);if(this.result.shouldStop)return;if(V>=0&&V<=1)Q.lerp(X,V,F),F.vsub(k,G),G.normalize(),this.reportIntersection(G,F,R,Y,-1)}}_intersectConvex(J,Z,k,Y,R,Q){let X=cW,N=mX,$=Q&&Q.faceList||null,K=J.faces,W=J.vertices,U=J.faceNormals,F=this.direction,G=this.from,B=this.to,V=G.distanceTo(B),E=$?$.length:K.length,q=this.result;for(let O=0;!q.shouldStop&&O<E;O++){let A=$?$[O]:O,H=K[A],_=U[A],C=Z,I=k;N.copy(W[H[0]]),C.vmult(N,N),N.vadd(I,N),N.vsub(G,N),C.vmult(_,X);let M=F.dot(X);if(Math.abs(M)<this.precision)continue;let j=X.dot(N)/M;if(j<0)continue;F.scale(j,R8),R8.vadd(G,R8),_8.copy(W[H[0]]),C.vmult(_8,_8),I.vadd(_8,_8);for(let y=1;!q.shouldStop&&y<H.length-1;y++){x8.copy(W[H[y]]),m8.copy(W[H[y+1]]),C.vmult(x8,x8),C.vmult(m8,m8),I.vadd(x8,x8),I.vadd(m8,m8);let P=R8.distanceTo(G);if(!(CJ.pointInTriangle(R8,_8,x8,m8)||CJ.pointInTriangle(R8,x8,_8,m8))||P>V)continue;this.reportIntersection(X,R8,R,Y,A)}}}_intersectTrimesh(J,Z,k,Y,R,Q){let X=iW,N=JF,$=ZF,K=mX,W=oW,U=aW,F=rW,G=eW,B=tW,V=J.indices;J.vertices;let E=this.from,q=this.to,O=this.direction;$.position.copy(k),$.quaternion.copy(Z),QJ.vectorToLocalFrame(k,Z,O,W),QJ.pointToLocalFrame(k,Z,E,U),QJ.pointToLocalFrame(k,Z,q,F),F.x*=J.scale.x,F.y*=J.scale.y,F.z*=J.scale.z,U.x*=J.scale.x,U.y*=J.scale.y,U.z*=J.scale.z,F.vsub(U,W),W.normalize();let A=U.distanceSquared(F);J.tree.rayQuery(this,$,N);for(let H=0,_=N.length;!this.result.shouldStop&&H!==_;H++){let C=N[H];J.getNormal(C,X),J.getVertex(V[C*3],_8),_8.vsub(U,K);let I=W.dot(X),M=X.dot(K)/I;if(M<0)continue;W.scale(M,R8),R8.vadd(U,R8),J.getVertex(V[C*3+1],x8),J.getVertex(V[C*3+2],m8);let j=R8.distanceSquared(U);if(!(CJ.pointInTriangle(R8,x8,_8,m8)||CJ.pointInTriangle(R8,_8,x8,m8))||j>A)continue;QJ.vectorToWorldFrame(Z,X,B),QJ.pointToWorldFrame(k,Z,R8,G),this.reportIntersection(B,G,R,Y,C)}N.length=0}reportIntersection(J,Z,k,Y,R){let Q=this.from,X=this.to,N=Q.distanceTo(Z),$=this.result;if(this.skipBackfaces&&J.dot(this.direction)>0)return;switch($.hitFaceIndex=typeof R<"u"?R:-1,this.mode){case CJ.ALL:this.hasHit=!0,$.set(Q,X,J,Z,k,Y,N),$.hasHit=!0,this.callback($);break;case CJ.CLOSEST:if(N<$.distance||!$.hasHit)this.hasHit=!0,$.hasHit=!0,$.set(Q,X,J,Z,k,Y,N);break;case CJ.ANY:this.hasHit=!0,$.hasHit=!0,$.set(Q,X,J,Z,k,Y,N),$.shouldStop=!0;break}}static pointInTriangle(J,Z,k,Y){Y.vsub(Z,sZ),k.vsub(Z,k6),J.vsub(Z,xR);let R=sZ.dot(sZ),Q=sZ.dot(k6),X=sZ.dot(xR),N=k6.dot(k6),$=k6.dot(xR),K,W;return(K=N*X-Q*$)>=0&&(W=R*$-Q*X)>=0&&K+W<R*N-Q*Q}}CJ.CLOSEST=aR.CLOSEST;CJ.ANY=aR.ANY;CJ.ALL=aR.ALL;var gX=new K8,gR=[],k6=new L,xR=new L,xW=new L,mW=new TJ,R8=new L,_8=new L,x8=new L,m8=new L;new L;new N6;var xX={faceList:[0]},Tk=new L,pW=new CJ,uW=[],dW=new L,lW=new L,cW=new L,nW=new L,sW=new L,mX=new L,iW=new L,oW=new L,aW=new L,rW=new L,tW=new L,eW=new L;new K8;var JF=[],ZF=new QJ,sZ=new L,Pk=new L;function kF(J,Z,k){k.vsub(J,sZ);let Y=sZ.dot(Z);return Z.scale(Y,Pk),Pk.vadd(J,Pk),k.distanceTo(Pk)}class iZ extends oR{static checkBounds(J,Z,k){let Y,R;if(k===0)Y=J.position.x,R=Z.position.x;else if(k===1)Y=J.position.y,R=Z.position.y;else if(k===2)Y=J.position.z,R=Z.position.z;let Q=J.boundingRadius,X=Z.boundingRadius,N=Y+Q;return R-X<N}static insertionSortX(J){for(let Z=1,k=J.length;Z<k;Z++){let Y=J[Z],R;for(R=Z-1;R>=0;R--){if(J[R].aabb.lowerBound.x<=Y.aabb.lowerBound.x)break;J[R+1]=J[R]}J[R+1]=Y}return J}static insertionSortY(J){for(let Z=1,k=J.length;Z<k;Z++){let Y=J[Z],R;for(R=Z-1;R>=0;R--){if(J[R].aabb.lowerBound.y<=Y.aabb.lowerBound.y)break;J[R+1]=J[R]}J[R+1]=Y}return J}static insertionSortZ(J){for(let Z=1,k=J.length;Z<k;Z++){let Y=J[Z],R;for(R=Z-1;R>=0;R--){if(J[R].aabb.lowerBound.z<=Y.aabb.lowerBound.z)break;J[R+1]=J[R]}J[R+1]=Y}return J}constructor(J){super();this.axisList=[],this.world=null,this.axisIndex=0;let Z=this.axisList;if(this._addBodyHandler=(k)=>{Z.push(k.body)},this._removeBodyHandler=(k)=>{let Y=Z.indexOf(k.body);if(Y!==-1)Z.splice(Y,1)},J)this.setWorld(J)}setWorld(J){this.axisList.length=0;for(let Z=0;Z<J.bodies.length;Z++)this.axisList.push(J.bodies[Z]);J.removeEventListener("addBody",this._addBodyHandler),J.removeEventListener("removeBody",this._removeBodyHandler),J.addEventListener("addBody",this._addBodyHandler),J.addEventListener("removeBody",this._removeBodyHandler),this.world=J,this.dirty=!0}collisionPairs(J,Z,k){let Y=this.axisList,R=Y.length,Q=this.axisIndex,X,N;if(this.dirty)this.sortList(),this.dirty=!1;for(X=0;X!==R;X++){let $=Y[X];for(N=X+1;N<R;N++){let K=Y[N];if(!this.needBroadphaseCollision($,K))continue;if(!iZ.checkBounds($,K,Q))break;this.intersectionTest($,K,Z,k)}}}sortList(){let J=this.axisList,Z=this.axisIndex,k=J.length;for(let Y=0;Y!==k;Y++){let R=J[Y];if(R.aabbNeedsUpdate)R.updateAABB()}if(Z===0)iZ.insertionSortX(J);else if(Z===1)iZ.insertionSortY(J);else if(Z===2)iZ.insertionSortZ(J)}autoDetectAxis(){let J=0,Z=0,k=0,Y=0,R=0,Q=0,X=this.axisList,N=X.length,$=1/N;for(let F=0;F!==N;F++){let G=X[F],B=G.position.x;J+=B,Z+=B*B;let V=G.position.y;k+=V,Y+=V*V;let E=G.position.z;R+=E,Q+=E*E}let K=Z-J*J*$,W=Y-k*k*$,U=Q-R*R*$;if(K>W)if(K>U)this.axisIndex=0;else this.axisIndex=2;else if(W>U)this.axisIndex=1;else this.axisIndex=2}aabbQuery(J,Z,k){if(k===void 0)k=[];if(this.dirty)this.sortList(),this.dirty=!1;let Y=this.axisIndex,R="x";if(Y===1)R="y";if(Y===2)R="z";let Q=this.axisList;Z.lowerBound[R],Z.upperBound[R];for(let X=0;X<Q.length;X++){let N=Q[X];if(N.aabbNeedsUpdate)N.updateAABB();if(N.aabb.overlaps(Z))k.push(N)}return k}}class rR{static defaults(J,Z){if(J===void 0)J={};for(let k in Z)if(!(k in J))J[k]=Z[k];return J}}class tR{constructor(J,Z,k){if(k===void 0)k={};if(k=rR.defaults(k,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=J,this.bodyB=Z,this.id=tR.idCounter++,this.collideConnected=k.collideConnected,k.wakeUpBodies){if(J)J.wakeUp();if(Z)Z.wakeUp()}}update(){throw Error("method update() not implmemented in this Constraint subclass!")}enable(){let J=this.equations;for(let Z=0;Z<J.length;Z++)J[Z].enabled=!0}disable(){let J=this.equations;for(let Z=0;Z<J.length;Z++)J[Z].enabled=!1}}tR.idCounter=0;class dR{constructor(){this.spatial=new L,this.rotational=new L}multiplyElement(J){return J.spatial.dot(this.spatial)+J.rotational.dot(this.rotational)}multiplyVectors(J,Z){return J.dot(this.spatial)+Z.dot(this.rotational)}}class $6{constructor(J,Z,k,Y){if(k===void 0)k=-1e6;if(Y===void 0)Y=1e6;this.id=$6.idCounter++,this.minForce=k,this.maxForce=Y,this.bi=J,this.bj=Z,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new dR,this.jacobianElementB=new dR,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,0.016666666666666666)}setSpookParams(J,Z,k){let Y=Z,R=J,Q=k;this.a=4/(Q*(1+4*Y)),this.b=4*Y/(1+4*Y),this.eps=4/(Q*Q*R*(1+4*Y))}computeB(J,Z,k){let Y=this.computeGW(),R=this.computeGq(),Q=this.computeGiMf();return-R*J-Y*Z-Q*k}computeGq(){let J=this.jacobianElementA,Z=this.jacobianElementB,k=this.bi,Y=this.bj,R=k.position,Q=Y.position;return J.spatial.dot(R)+Z.spatial.dot(Q)}computeGW(){let J=this.jacobianElementA,Z=this.jacobianElementB,k=this.bi,Y=this.bj,R=k.velocity,Q=Y.velocity,X=k.angularVelocity,N=Y.angularVelocity;return J.multiplyVectors(R,X)+Z.multiplyVectors(Q,N)}computeGWlambda(){let J=this.jacobianElementA,Z=this.jacobianElementB,k=this.bi,Y=this.bj,R=k.vlambda,Q=Y.vlambda,X=k.wlambda,N=Y.wlambda;return J.multiplyVectors(R,X)+Z.multiplyVectors(Q,N)}computeGiMf(){let J=this.jacobianElementA,Z=this.jacobianElementB,k=this.bi,Y=this.bj,R=k.force,Q=k.torque,X=Y.force,N=Y.torque,$=k.invMassSolve,K=Y.invMassSolve;return R.scale($,pX),X.scale(K,uX),k.invInertiaWorldSolve.vmult(Q,dX),Y.invInertiaWorldSolve.vmult(N,lX),J.multiplyVectors(pX,dX)+Z.multiplyVectors(uX,lX)}computeGiMGt(){let J=this.jacobianElementA,Z=this.jacobianElementB,k=this.bi,Y=this.bj,R=k.invMassSolve,Q=Y.invMassSolve,X=k.invInertiaWorldSolve,N=Y.invInertiaWorldSolve,$=R+Q;return X.vmult(J.rotational,Sk),$+=Sk.dot(J.rotational),N.vmult(Z.rotational,Sk),$+=Sk.dot(Z.rotational),$}addToWlambda(J){let Z=this.jacobianElementA,k=this.jacobianElementB,Y=this.bi,R=this.bj,Q=YF;Y.vlambda.addScaledVector(Y.invMassSolve*J,Z.spatial,Y.vlambda),R.vlambda.addScaledVector(R.invMassSolve*J,k.spatial,R.vlambda),Y.invInertiaWorldSolve.vmult(Z.rotational,Q),Y.wlambda.addScaledVector(J,Q,Y.wlambda),R.invInertiaWorldSolve.vmult(k.rotational,Q),R.wlambda.addScaledVector(J,Q,R.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}$6.idCounter=0;var pX=new L,uX=new L,dX=new L,lX=new L,Sk=new L,YF=new L;class Y7 extends $6{constructor(J,Z,k){if(k===void 0)k=1e6;super(J,Z,0,k);this.restitution=0,this.ri=new L,this.rj=new L,this.ni=new L}computeB(J){let Z=this.a,k=this.b,Y=this.bi,R=this.bj,Q=this.ri,X=this.rj,N=RF,$=QF,K=Y.velocity,W=Y.angularVelocity;Y.force,Y.torque;let{velocity:U,angularVelocity:F}=R;R.force,R.torque;let G=XF,B=this.jacobianElementA,V=this.jacobianElementB,E=this.ni;Q.cross(E,N),X.cross(E,$),E.negate(B.spatial),N.negate(B.rotational),V.spatial.copy(E),V.rotational.copy($),G.copy(R.position),G.vadd(X,G),G.vsub(Y.position,G),G.vsub(Q,G);let q=E.dot(G),O=this.restitution+1,A=O*U.dot(E)-O*K.dot(E)+F.dot($)-W.dot(N),H=this.computeGiMf();return-q*Z-A*k-J*H}getImpactVelocityAlongNormal(){let J=NF,Z=$F,k=KF,Y=UF,R=WF;return this.bi.position.vadd(this.ri,k),this.bj.position.vadd(this.rj,Y),this.bi.getVelocityAtWorldPoint(k,J),this.bj.getVelocityAtWorldPoint(Y,Z),J.vsub(Z,R),this.ni.dot(R)}}var RF=new L,QF=new L,XF=new L,NF=new L,$F=new L,KF=new L,UF=new L,WF=new L;var s4=new L,i4=new L;var o4=new L,a4=new L;new L;new L;var r4=new L,t4=new L;var e4=new L,JI=new L;class lR extends $6{constructor(J,Z,k){super(J,Z,-k,k);this.ri=new L,this.rj=new L,this.t=new L}computeB(J){this.a;let Z=this.b;this.bi,this.bj;let k=this.ri,Y=this.rj,R=FF,Q=GF,X=this.t;k.cross(X,R),Y.cross(X,Q);let N=this.jacobianElementA,$=this.jacobianElementB;X.negate(N.spatial),R.negate(N.rotational),$.spatial.copy(X),$.rotational.copy(Q);let K=this.computeGW(),W=this.computeGiMf();return-K*Z-J*W}}var FF=new L,GF=new L;class _1{constructor(J,Z,k){k=rR.defaults(k,{friction:0.3,restitution:0.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=_1.idCounter++,this.materials=[J,Z],this.friction=k.friction,this.restitution=k.restitution,this.contactEquationStiffness=k.contactEquationStiffness,this.contactEquationRelaxation=k.contactEquationRelaxation,this.frictionEquationStiffness=k.frictionEquationStiffness,this.frictionEquationRelaxation=k.frictionEquationRelaxation}}_1.idCounter=0;class oZ{constructor(J){if(J===void 0)J={};let Z="";if(typeof J==="string")Z=J,J={};this.name=Z,this.id=oZ.idCounter++,this.friction=typeof J.friction<"u"?J.friction:-1,this.restitution=typeof J.restitution<"u"?J.restitution:-1}}oZ.idCounter=0;var ZI=new L,kI=new L,YI=new L,RI=new L,QI=new L,XI=new L,NI=new L,$I=new L,KI=new L,UI=new L,WI=new L;var FI=new L,GI=new L;new L;new L;new L;var qI=new L,EI=new L,BI=new L;new CJ;new L;var VI=new L,II=new L,OI=[new L(1,0,0),new L(0,1,0),new L(0,0,1)],HI=new L;var DI=new L,AI=new L,MI=new L;var zI=new L,LI=new L,_I=new L,wI=new L;var CI=new L,TI=new L,PI=new L;class eR extends A0{constructor(J){super({type:A0.types.SPHERE});if(this.radius=J!==void 0?J:1,this.radius<0)throw Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(J,Z){if(Z===void 0)Z=new L;let k=2*J*this.radius*this.radius/5;return Z.x=k,Z.y=k,Z.z=k,Z}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(J,Z,k,Y){let R=this.radius,Q=["x","y","z"];for(let X=0;X<Q.length;X++){let N=Q[X];k[N]=J[N]-R,Y[N]=J[N]+R}}}var SI=new L,jI=new L;var fI=new L,vI=new L,yI=new L,bI=new L,hI=new L,gI=new L,xI=new L;var mI=new L;var pI=new L,uI=new L,dI=new L,lI=new L,cI=new L,nI=new L,sI=new L,iI=new L,oI=new L;var aI=new L,rI=new K8;var tI=new L,eI=new K8,JO=new L,ZO=new L,kO=new L,YO=new L,RO=new L,QO=new L,XO=new L,NO=new K8,$O=new L,KO=new QJ,UO=new K8;class R7{constructor(){this.equations=[]}solve(J,Z){return 0}addEquation(J){if(J.enabled&&!J.bi.isTrigger&&!J.bj.isTrigger)this.equations.push(J)}removeEquation(J){let Z=this.equations,k=Z.indexOf(J);if(k!==-1)Z.splice(k,1)}removeAllEquations(){this.equations.length=0}}class Q7 extends R7{constructor(){super();this.iterations=10,this.tolerance=0.0000001}solve(J,Z){let k=0,Y=this.iterations,R=this.tolerance*this.tolerance,Q=this.equations,X=Q.length,N=Z.bodies,$=N.length,K=J,W,U,F,G,B,V;if(X!==0)for(let A=0;A!==$;A++)N[A].updateSolveMassProperties();let E=EF,q=BF,O=qF;E.length=X,q.length=X,O.length=X;for(let A=0;A!==X;A++){let H=Q[A];O[A]=0,q[A]=H.computeB(K),E[A]=1/H.computeC()}if(X!==0){for(let _=0;_!==$;_++){let C=N[_],I=C.vlambda,M=C.wlambda;I.set(0,0,0),M.set(0,0,0)}for(k=0;k!==Y;k++){G=0;for(let _=0;_!==X;_++){let C=Q[_];if(W=q[_],U=E[_],V=O[_],B=C.computeGWlambda(),F=U*(W-B-C.eps*V),V+F<C.minForce)F=C.minForce-V;else if(V+F>C.maxForce)F=C.maxForce-V;O[_]+=F,G+=F>0?F:-F,C.addToWlambda(F)}if(G*G<R)break}for(let _=0;_!==$;_++){let C=N[_],I=C.velocity,M=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),I.vadd(C.vlambda,I),C.wlambda.vmul(C.angularFactor,C.wlambda),M.vadd(C.wlambda,M)}let A=Q.length,H=1/K;while(A--)Q[A].multiplier=O[A]*H}return k}}var qF=[],EF=[],BF=[];var WO=V0.STATIC;class X7{constructor(){this.objects=[],this.type=Object}release(){let J=arguments.length;for(let Z=0;Z!==J;Z++)this.objects.push(Z<0||arguments.length<=Z?void 0:arguments[Z]);return this}get(){if(this.objects.length===0)return this.constructObject();else return this.objects.pop()}constructObject(){throw Error("constructObject() not implemented in this Pool subclass yet!")}resize(J){let Z=this.objects;while(Z.length>J)Z.pop();while(Z.length<J)Z.push(this.constructObject());return this}}class N7 extends X7{constructor(){super(...arguments);this.type=L}constructObject(){return new L}}var EJ={sphereSphere:A0.types.SPHERE,spherePlane:A0.types.SPHERE|A0.types.PLANE,boxBox:A0.types.BOX|A0.types.BOX,sphereBox:A0.types.SPHERE|A0.types.BOX,planeBox:A0.types.PLANE|A0.types.BOX,convexConvex:A0.types.CONVEXPOLYHEDRON,sphereConvex:A0.types.SPHERE|A0.types.CONVEXPOLYHEDRON,planeConvex:A0.types.PLANE|A0.types.CONVEXPOLYHEDRON,boxConvex:A0.types.BOX|A0.types.CONVEXPOLYHEDRON,sphereHeightfield:A0.types.SPHERE|A0.types.HEIGHTFIELD,boxHeightfield:A0.types.BOX|A0.types.HEIGHTFIELD,convexHeightfield:A0.types.CONVEXPOLYHEDRON|A0.types.HEIGHTFIELD,sphereParticle:A0.types.PARTICLE|A0.types.SPHERE,planeParticle:A0.types.PLANE|A0.types.PARTICLE,boxParticle:A0.types.BOX|A0.types.PARTICLE,convexParticle:A0.types.PARTICLE|A0.types.CONVEXPOLYHEDRON,cylinderCylinder:A0.types.CYLINDER,sphereCylinder:A0.types.SPHERE|A0.types.CYLINDER,planeCylinder:A0.types.PLANE|A0.types.CYLINDER,boxCylinder:A0.types.BOX|A0.types.CYLINDER,convexCylinder:A0.types.CONVEXPOLYHEDRON|A0.types.CYLINDER,heightfieldCylinder:A0.types.HEIGHTFIELD|A0.types.CYLINDER,particleCylinder:A0.types.PARTICLE|A0.types.CYLINDER,sphereTrimesh:A0.types.SPHERE|A0.types.TRIMESH,planeTrimesh:A0.types.PLANE|A0.types.TRIMESH};class $7{get[EJ.sphereSphere](){return this.sphereSphere}get[EJ.spherePlane](){return this.spherePlane}get[EJ.boxBox](){return this.boxBox}get[EJ.sphereBox](){return this.sphereBox}get[EJ.planeBox](){return this.planeBox}get[EJ.convexConvex](){return this.convexConvex}get[EJ.sphereConvex](){return this.sphereConvex}get[EJ.planeConvex](){return this.planeConvex}get[EJ.boxConvex](){return this.boxConvex}get[EJ.sphereHeightfield](){return this.sphereHeightfield}get[EJ.boxHeightfield](){return this.boxHeightfield}get[EJ.convexHeightfield](){return this.convexHeightfield}get[EJ.sphereParticle](){return this.sphereParticle}get[EJ.planeParticle](){return this.planeParticle}get[EJ.boxParticle](){return this.boxParticle}get[EJ.convexParticle](){return this.convexParticle}get[EJ.cylinderCylinder](){return this.convexConvex}get[EJ.sphereCylinder](){return this.sphereConvex}get[EJ.planeCylinder](){return this.planeConvex}get[EJ.boxCylinder](){return this.boxConvex}get[EJ.convexCylinder](){return this.convexConvex}get[EJ.heightfieldCylinder](){return this.heightfieldCylinder}get[EJ.particleCylinder](){return this.particleCylinder}get[EJ.sphereTrimesh](){return this.sphereTrimesh}get[EJ.planeTrimesh](){return this.planeTrimesh}constructor(J){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new N7,this.world=J,this.currentContactMaterial=J.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(J,Z,k,Y,R,Q){let X;if(this.contactPointPool.length)X=this.contactPointPool.pop(),X.bi=J,X.bj=Z;else X=new Y7(J,Z);X.enabled=J.collisionResponse&&Z.collisionResponse&&k.collisionResponse&&Y.collisionResponse;let N=this.currentContactMaterial;X.restitution=N.restitution,X.setSpookParams(N.contactEquationStiffness,N.contactEquationRelaxation,this.world.dt);let $=k.material||J.material,K=Y.material||Z.material;if($&&K&&$.restitution>=0&&K.restitution>=0)X.restitution=$.restitution*K.restitution;return X.si=R||k,X.sj=Q||Y,X}createFrictionEquationsFromContact(J,Z){let{bi:k,bj:Y,si:R,sj:Q}=J,X=this.world,N=this.currentContactMaterial,$=N.friction,K=R.material||k.material,W=Q.material||Y.material;if(K&&W&&K.friction>=0&&W.friction>=0)$=K.friction*W.friction;if($>0){let U=$*(X.frictionGravity||X.gravity).length(),F=k.invMass+Y.invMass;if(F>0)F=1/F;let G=this.frictionEquationPool,B=G.length?G.pop():new lR(k,Y,U*F),V=G.length?G.pop():new lR(k,Y,U*F);return B.bi=V.bi=k,B.bj=V.bj=Y,B.minForce=V.minForce=-U*F,B.maxForce=V.maxForce=U*F,B.ri.copy(J.ri),B.rj.copy(J.rj),V.ri.copy(J.ri),V.rj.copy(J.rj),J.ni.tangents(B.t,V.t),B.setSpookParams(N.frictionEquationStiffness,N.frictionEquationRelaxation,X.dt),V.setSpookParams(N.frictionEquationStiffness,N.frictionEquationRelaxation,X.dt),B.enabled=V.enabled=J.enabled,Z.push(B,V),!0}return!1}createFrictionFromAverage(J){let Z=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(Z,this.frictionResult)||J===1)return;let k=this.frictionResult[this.frictionResult.length-2],Y=this.frictionResult[this.frictionResult.length-1];nZ.setZero(),z1.setZero(),L1.setZero();let R=Z.bi;Z.bj;for(let X=0;X!==J;X++)if(Z=this.result[this.result.length-1-X],Z.bi!==R)nZ.vadd(Z.ni,nZ),z1.vadd(Z.ri,z1),L1.vadd(Z.rj,L1);else nZ.vsub(Z.ni,nZ),z1.vadd(Z.rj,z1),L1.vadd(Z.ri,L1);let Q=1/J;z1.scale(Q,k.ri),L1.scale(Q,k.rj),Y.ri.copy(k.ri),Y.rj.copy(k.rj),nZ.normalize(),nZ.tangents(k.t,Y.t)}getContacts(J,Z,k,Y,R,Q,X){this.contactPointPool=R,this.frictionEquationPool=X,this.result=Y,this.frictionResult=Q;let N=OF,$=HF,K=VF,W=IF;for(let U=0,F=J.length;U!==F;U++){let G=J[U],B=Z[U],V=null;if(G.material&&B.material)V=k.getContactMaterial(G.material,B.material)||null;let E=G.type&V0.KINEMATIC&&B.type&V0.STATIC||G.type&V0.STATIC&&B.type&V0.KINEMATIC||G.type&V0.KINEMATIC&&B.type&V0.KINEMATIC;for(let q=0;q<G.shapes.length;q++){G.quaternion.mult(G.shapeOrientations[q],N),G.quaternion.vmult(G.shapeOffsets[q],K),K.vadd(G.position,K);let O=G.shapes[q];for(let A=0;A<B.shapes.length;A++){B.quaternion.mult(B.shapeOrientations[A],$),B.quaternion.vmult(B.shapeOffsets[A],W),W.vadd(B.position,W);let H=B.shapes[A];if(!(O.collisionFilterMask&H.collisionFilterGroup&&H.collisionFilterMask&O.collisionFilterGroup))continue;if(K.distanceTo(W)>O.boundingSphereRadius+H.boundingSphereRadius)continue;let _=null;if(O.material&&H.material)_=k.getContactMaterial(O.material,H.material)||null;this.currentContactMaterial=_||V||k.defaultContactMaterial;let C=O.type|H.type,I=this[C];if(I){let M=!1;if(O.type<H.type)M=I.call(this,O,H,K,W,N,$,G,B,O,H,E);else M=I.call(this,H,O,W,K,$,N,B,G,O,H,E);if(M&&E)k.shapeOverlapKeeper.set(O.id,H.id),k.bodyOverlapKeeper.set(G.id,B.id)}}}}}sphereSphere(J,Z,k,Y,R,Q,X,N,$,K,W){if(W)return k.distanceSquared(Y)<(J.radius+Z.radius)**2;let U=this.createContactEquation(X,N,J,Z,$,K);Y.vsub(k,U.ni),U.ni.normalize(),U.ri.copy(U.ni),U.rj.copy(U.ni),U.ri.scale(J.radius,U.ri),U.rj.scale(-Z.radius,U.rj),U.ri.vadd(k,U.ri),U.ri.vsub(X.position,U.ri),U.rj.vadd(Y,U.rj),U.rj.vsub(N.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}spherePlane(J,Z,k,Y,R,Q,X,N,$,K,W){let U=this.createContactEquation(X,N,J,Z,$,K);if(U.ni.set(0,0,1),Q.vmult(U.ni,U.ni),U.ni.negate(U.ni),U.ni.normalize(),U.ni.scale(J.radius,U.ri),k.vsub(Y,jk),U.ni.scale(U.ni.dot(jk),cX),jk.vsub(cX,U.rj),-jk.dot(U.ni)<=J.radius){if(W)return!0;let{ri:F,rj:G}=U;F.vadd(k,F),F.vsub(X.position,F),G.vadd(Y,G),G.vsub(N.position,G),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}boxBox(J,Z,k,Y,R,Q,X,N,$,K,W){return J.convexPolyhedronRepresentation.material=J.material,Z.convexPolyhedronRepresentation.material=Z.material,J.convexPolyhedronRepresentation.collisionResponse=J.collisionResponse,Z.convexPolyhedronRepresentation.collisionResponse=Z.collisionResponse,this.convexConvex(J.convexPolyhedronRepresentation,Z.convexPolyhedronRepresentation,k,Y,R,Q,X,N,J,Z,W)}sphereBox(J,Z,k,Y,R,Q,X,N,$,K,W){let U=this.v3pool,F=nF;k.vsub(Y,fk),Z.getSideNormals(F,Q);let G=J.radius,B=!1,V=iF,E=oF,q=aF,O=null,A=0,H=0,_=0,C=null;for(let v=0,s=F.length;v!==s&&B===!1;v++){let h=dF;h.copy(F[v]);let J0=h.length();h.normalize();let l=fk.dot(h);if(l<J0+G&&l>0){let o=lF,n=cF;o.copy(F[(v+1)%3]),n.copy(F[(v+2)%3]);let I0=o.length(),e=n.length();o.normalize(),n.normalize();let Y0=fk.dot(o),O0=fk.dot(n);if(Y0<I0&&Y0>-I0&&O0<e&&O0>-e){let _0=Math.abs(l-J0-G);if(C===null||_0<C){if(C=_0,H=Y0,_=O0,O=J0,V.copy(h),E.copy(o),q.copy(n),A++,W)return!0}}}}if(A){B=!0;let v=this.createContactEquation(X,N,J,Z,$,K);V.scale(-G,v.ri),v.ni.copy(V),v.ni.negate(v.ni),V.scale(O,V),E.scale(H,E),V.vadd(E,V),q.scale(_,q),V.vadd(q,v.rj),v.ri.vadd(k,v.ri),v.ri.vsub(X.position,v.ri),v.rj.vadd(Y,v.rj),v.rj.vsub(N.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}let I=U.get(),M=sF;for(let v=0;v!==2&&!B;v++)for(let s=0;s!==2&&!B;s++)for(let h=0;h!==2&&!B;h++){if(I.set(0,0,0),v)I.vadd(F[0],I);else I.vsub(F[0],I);if(s)I.vadd(F[1],I);else I.vsub(F[1],I);if(h)I.vadd(F[2],I);else I.vsub(F[2],I);if(Y.vadd(I,M),M.vsub(k,M),M.lengthSquared()<G*G){if(W)return!0;B=!0;let J0=this.createContactEquation(X,N,J,Z,$,K);J0.ri.copy(M),J0.ri.normalize(),J0.ni.copy(J0.ri),J0.ri.scale(G,J0.ri),J0.rj.copy(I),J0.ri.vadd(k,J0.ri),J0.ri.vsub(X.position,J0.ri),J0.rj.vadd(Y,J0.rj),J0.rj.vsub(N.position,J0.rj),this.result.push(J0),this.createFrictionEquationsFromContact(J0,this.frictionResult)}}U.release(I),I=null;let j=U.get(),y=U.get(),P=U.get(),S=U.get(),g=U.get(),w=F.length;for(let v=0;v!==w&&!B;v++)for(let s=0;s!==w&&!B;s++)if(v%3!==s%3){F[s].cross(F[v],j),j.normalize(),F[v].vadd(F[s],y),P.copy(k),P.vsub(y,P),P.vsub(Y,P);let h=P.dot(j);j.scale(h,S);let J0=0;while(J0===v%3||J0===s%3)J0++;g.copy(k),g.vsub(S,g),g.vsub(y,g),g.vsub(Y,g);let l=Math.abs(h),o=g.length();if(l<F[J0].length()&&o<G){if(W)return!0;B=!0;let n=this.createContactEquation(X,N,J,Z,$,K);y.vadd(S,n.rj),n.rj.copy(n.rj),g.negate(n.ni),n.ni.normalize(),n.ri.copy(n.rj),n.ri.vadd(Y,n.ri),n.ri.vsub(k,n.ri),n.ri.normalize(),n.ri.scale(G,n.ri),n.ri.vadd(k,n.ri),n.ri.vsub(X.position,n.ri),n.rj.vadd(Y,n.rj),n.rj.vsub(N.position,n.rj),this.result.push(n),this.createFrictionEquationsFromContact(n,this.frictionResult)}}U.release(j,y,P,S,g)}planeBox(J,Z,k,Y,R,Q,X,N,$,K,W){return Z.convexPolyhedronRepresentation.material=Z.material,Z.convexPolyhedronRepresentation.collisionResponse=Z.collisionResponse,Z.convexPolyhedronRepresentation.id=Z.id,this.planeConvex(J,Z.convexPolyhedronRepresentation,k,Y,R,Q,X,N,J,Z,W)}convexConvex(J,Z,k,Y,R,Q,X,N,$,K,W,U,F){let G=WG;if(k.distanceTo(Y)>J.boundingSphereRadius+Z.boundingSphereRadius)return;if(J.findSeparatingAxis(Z,k,R,Y,Q,G,U,F)){let B=[],V=FG;J.clipAgainstHull(k,R,Z,Y,Q,G,-100,100,B);let E=0;for(let q=0;q!==B.length;q++){if(W)return!0;let O=this.createContactEquation(X,N,J,Z,$,K),A=O.ri,H=O.rj;if(G.negate(O.ni),B[q].normal.negate(V),V.scale(B[q].depth,V),B[q].point.vadd(V,A),H.copy(B[q].point),A.vsub(k,A),H.vsub(Y,H),A.vadd(k,A),A.vsub(X.position,A),H.vadd(Y,H),H.vsub(N.position,H),this.result.push(O),E++,!this.enableFrictionReduction)this.createFrictionEquationsFromContact(O,this.frictionResult)}if(this.enableFrictionReduction&&E)this.createFrictionFromAverage(E)}}sphereConvex(J,Z,k,Y,R,Q,X,N,$,K,W){let U=this.v3pool;k.vsub(Y,rF);let{faceNormals:F,faces:G,vertices:B}=Z,V=J.radius,E=!1;for(let q=0;q!==B.length;q++){let O=B[q],A=ZG;Q.vmult(O,A),Y.vadd(A,A);let H=JG;if(A.vsub(k,H),H.lengthSquared()<V*V){if(W)return!0;E=!0;let _=this.createContactEquation(X,N,J,Z,$,K);_.ri.copy(H),_.ri.normalize(),_.ni.copy(_.ri),_.ri.scale(V,_.ri),A.vsub(Y,_.rj),_.ri.vadd(k,_.ri),_.ri.vsub(X.position,_.ri),_.rj.vadd(Y,_.rj),_.rj.vsub(N.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult);return}}for(let q=0,O=G.length;q!==O&&E===!1;q++){let A=F[q],H=G[q],_=kG;Q.vmult(A,_);let C=YG;Q.vmult(B[H[0]],C),C.vadd(Y,C);let I=RG;_.scale(-V,I),k.vadd(I,I);let M=QG;I.vsub(C,M);let j=M.dot(_),y=XG;if(k.vsub(C,y),j<0&&y.dot(_)>0){let P=[];for(let S=0,g=H.length;S!==g;S++){let w=U.get();Q.vmult(B[H[S]],w),Y.vadd(w,w),P.push(w)}if(uF(P,_,k)){if(W)return!0;E=!0;let S=this.createContactEquation(X,N,J,Z,$,K);_.scale(-V,S.ri),_.negate(S.ni);let g=U.get();_.scale(-j,g);let w=U.get();_.scale(-V,w),k.vsub(Y,S.rj),S.rj.vadd(w,S.rj),S.rj.vadd(g,S.rj),S.rj.vadd(Y,S.rj),S.rj.vsub(N.position,S.rj),S.ri.vadd(k,S.ri),S.ri.vsub(X.position,S.ri),U.release(g),U.release(w),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);for(let v=0,s=P.length;v!==s;v++)U.release(P[v]);return}else for(let S=0;S!==H.length;S++){let g=U.get(),w=U.get();Q.vmult(B[H[(S+1)%H.length]],g),Q.vmult(B[H[(S+2)%H.length]],w),Y.vadd(g,g),Y.vadd(w,w);let v=tF;w.vsub(g,v);let s=eF;v.unit(s);let h=U.get(),J0=U.get();k.vsub(g,J0);let l=J0.dot(s);s.scale(l,h),h.vadd(g,h);let o=U.get();if(h.vsub(k,o),l>0&&l*l<v.lengthSquared()&&o.lengthSquared()<V*V){if(W)return!0;let n=this.createContactEquation(X,N,J,Z,$,K);h.vsub(Y,n.rj),h.vsub(k,n.ni),n.ni.normalize(),n.ni.scale(V,n.ri),n.rj.vadd(Y,n.rj),n.rj.vsub(N.position,n.rj),n.ri.vadd(k,n.ri),n.ri.vsub(X.position,n.ri),this.result.push(n),this.createFrictionEquationsFromContact(n,this.frictionResult);for(let I0=0,e=P.length;I0!==e;I0++)U.release(P[I0]);U.release(g),U.release(w),U.release(h),U.release(o),U.release(J0);return}U.release(g),U.release(w),U.release(h),U.release(o),U.release(J0)}for(let S=0,g=P.length;S!==g;S++)U.release(P[S])}}}planeConvex(J,Z,k,Y,R,Q,X,N,$,K,W){let U=NG,F=$G;F.set(0,0,1),R.vmult(F,F);let G=0,B=KG;for(let V=0;V!==Z.vertices.length;V++)if(U.copy(Z.vertices[V]),Q.vmult(U,U),Y.vadd(U,U),U.vsub(k,B),F.dot(B)<=0){if(W)return!0;let q=this.createContactEquation(X,N,J,Z,$,K),O=UG;if(F.scale(F.dot(B),O),U.vsub(O,O),O.vsub(k,q.ri),q.ni.copy(F),U.vsub(Y,q.rj),q.ri.vadd(k,q.ri),q.ri.vsub(X.position,q.ri),q.rj.vadd(Y,q.rj),q.rj.vsub(N.position,q.rj),this.result.push(q),G++,!this.enableFrictionReduction)this.createFrictionEquationsFromContact(q,this.frictionResult)}if(this.enableFrictionReduction&&G)this.createFrictionFromAverage(G)}boxConvex(J,Z,k,Y,R,Q,X,N,$,K,W){return J.convexPolyhedronRepresentation.material=J.material,J.convexPolyhedronRepresentation.collisionResponse=J.collisionResponse,this.convexConvex(J.convexPolyhedronRepresentation,Z,k,Y,R,Q,X,N,J,Z,W)}sphereHeightfield(J,Z,k,Y,R,Q,X,N,$,K,W){let U=Z.data,F=J.radius,G=Z.elementSize,B=zG,V=MG;QJ.pointToLocalFrame(Y,Q,k,V);let E=Math.floor((V.x-F)/G)-1,q=Math.ceil((V.x+F)/G)+1,O=Math.floor((V.y-F)/G)-1,A=Math.ceil((V.y+F)/G)+1;if(q<0||A<0||E>U.length||O>U[0].length)return;if(E<0)E=0;if(q<0)q=0;if(O<0)O=0;if(A<0)A=0;if(E>=U.length)E=U.length-1;if(q>=U.length)q=U.length-1;if(A>=U[0].length)A=U[0].length-1;if(O>=U[0].length)O=U[0].length-1;let H=[];Z.getRectMinMax(E,O,q,A,H);let _=H[0],C=H[1];if(V.z-F>C||V.z+F<_)return;let I=this.result;for(let M=E;M<q;M++)for(let j=O;j<A;j++){let y=I.length,P=!1;if(Z.getConvexTrianglePillar(M,j,!1),QJ.pointToWorldFrame(Y,Q,Z.pillarOffset,B),k.distanceTo(B)<Z.pillarConvex.boundingSphereRadius+J.boundingSphereRadius)P=this.sphereConvex(J,Z.pillarConvex,k,B,R,Q,X,N,J,Z,W);if(W&&P)return!0;if(Z.getConvexTrianglePillar(M,j,!0),QJ.pointToWorldFrame(Y,Q,Z.pillarOffset,B),k.distanceTo(B)<Z.pillarConvex.boundingSphereRadius+J.boundingSphereRadius)P=this.sphereConvex(J,Z.pillarConvex,k,B,R,Q,X,N,J,Z,W);if(W&&P)return!0;if(I.length-y>2)return}}boxHeightfield(J,Z,k,Y,R,Q,X,N,$,K,W){return J.convexPolyhedronRepresentation.material=J.material,J.convexPolyhedronRepresentation.collisionResponse=J.collisionResponse,this.convexHeightfield(J.convexPolyhedronRepresentation,Z,k,Y,R,Q,X,N,J,Z,W)}convexHeightfield(J,Z,k,Y,R,Q,X,N,$,K,W){let{data:U,elementSize:F}=Z,G=J.boundingSphereRadius,B=DG,V=AG,E=HG;QJ.pointToLocalFrame(Y,Q,k,E);let q=Math.floor((E.x-G)/F)-1,O=Math.ceil((E.x+G)/F)+1,A=Math.floor((E.y-G)/F)-1,H=Math.ceil((E.y+G)/F)+1;if(O<0||H<0||q>U.length||A>U[0].length)return;if(q<0)q=0;if(O<0)O=0;if(A<0)A=0;if(H<0)H=0;if(q>=U.length)q=U.length-1;if(O>=U.length)O=U.length-1;if(H>=U[0].length)H=U[0].length-1;if(A>=U[0].length)A=U[0].length-1;let _=[];Z.getRectMinMax(q,A,O,H,_);let C=_[0],I=_[1];if(E.z-G>I||E.z+G<C)return;for(let M=q;M<O;M++)for(let j=A;j<H;j++){let y=!1;if(Z.getConvexTrianglePillar(M,j,!1),QJ.pointToWorldFrame(Y,Q,Z.pillarOffset,B),k.distanceTo(B)<Z.pillarConvex.boundingSphereRadius+J.boundingSphereRadius)y=this.convexConvex(J,Z.pillarConvex,k,B,R,Q,X,N,null,null,W,V,null);if(W&&y)return!0;if(Z.getConvexTrianglePillar(M,j,!0),QJ.pointToWorldFrame(Y,Q,Z.pillarOffset,B),k.distanceTo(B)<Z.pillarConvex.boundingSphereRadius+J.boundingSphereRadius)y=this.convexConvex(J,Z.pillarConvex,k,B,R,Q,X,N,null,null,W,V,null);if(W&&y)return!0}}sphereParticle(J,Z,k,Y,R,Q,X,N,$,K,W){let U=BG;if(U.set(0,0,1),Y.vsub(k,U),U.lengthSquared()<=J.radius*J.radius){if(W)return!0;let G=this.createContactEquation(N,X,Z,J,$,K);U.normalize(),G.rj.copy(U),G.rj.scale(J.radius,G.rj),G.ni.copy(U),G.ni.negate(G.ni),G.ri.set(0,0,0),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}planeParticle(J,Z,k,Y,R,Q,X,N,$,K,W){let U=GG;U.set(0,0,1),X.quaternion.vmult(U,U);let F=qG;if(Y.vsub(X.position,F),U.dot(F)<=0){if(W)return!0;let B=this.createContactEquation(N,X,Z,J,$,K);B.ni.copy(U),B.ni.negate(B.ni),B.ri.set(0,0,0);let V=EG;U.scale(U.dot(Y),V),Y.vsub(V,V),B.rj.copy(V),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}boxParticle(J,Z,k,Y,R,Q,X,N,$,K,W){return J.convexPolyhedronRepresentation.material=J.material,J.convexPolyhedronRepresentation.collisionResponse=J.collisionResponse,this.convexParticle(J.convexPolyhedronRepresentation,Z,k,Y,R,Q,X,N,J,Z,W)}convexParticle(J,Z,k,Y,R,Q,X,N,$,K,W){let U=-1,F=IG,G=OG,B=null,V=VG;if(V.copy(Y),V.vsub(k,V),R.conjugate(nX),nX.vmult(V,V),J.pointIsInside(V)){if(J.worldVerticesNeedsUpdate)J.computeWorldVertices(k,R);if(J.worldFaceNormalsNeedsUpdate)J.computeWorldFaceNormals(R);for(let E=0,q=J.faces.length;E!==q;E++){let O=[J.worldVertices[J.faces[E][0]]],A=J.worldFaceNormals[E];Y.vsub(O[0],sX);let H=-A.dot(sX);if(B===null||Math.abs(H)<Math.abs(B)){if(W)return!0;B=H,U=E,F.copy(A)}}if(U!==-1){let E=this.createContactEquation(N,X,Z,J,$,K);F.scale(B,G),G.vadd(Y,G),G.vsub(k,G),E.rj.copy(G),F.negate(E.ni),E.ri.set(0,0,0);let{ri:q,rj:O}=E;q.vadd(Y,q),q.vsub(N.position,q),O.vadd(k,O),O.vsub(X.position,O),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(J,Z,k,Y,R,Q,X,N,$,K,W){return this.convexHeightfield(Z,J,Y,k,Q,R,N,X,$,K,W)}particleCylinder(J,Z,k,Y,R,Q,X,N,$,K,W){return this.convexParticle(Z,J,Y,k,Q,R,N,X,$,K,W)}sphereTrimesh(J,Z,k,Y,R,Q,X,N,$,K,W){let U=CF,F=TF,G=PF,B=SF,V=jF,E=fF,q=hF,O=wF,A=LF,H=gF;QJ.pointToLocalFrame(Y,Q,k,V);let _=J.radius;q.lowerBound.set(V.x-_,V.y-_,V.z-_),q.upperBound.set(V.x+_,V.y+_,V.z+_),Z.getTrianglesInAABB(q,H);let C=_F,I=J.radius*J.radius;for(let S=0;S<H.length;S++)for(let g=0;g<3;g++)if(Z.getVertex(Z.indices[H[S]*3+g],C),C.vsub(V,A),A.lengthSquared()<=I){if(O.copy(C),QJ.pointToWorldFrame(Y,Q,O,C),C.vsub(k,A),W)return!0;let w=this.createContactEquation(X,N,J,Z,$,K);w.ni.copy(A),w.ni.normalize(),w.ri.copy(w.ni),w.ri.scale(J.radius,w.ri),w.ri.vadd(k,w.ri),w.ri.vsub(X.position,w.ri),w.rj.copy(C),w.rj.vsub(N.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult)}for(let S=0;S<H.length;S++)for(let g=0;g<3;g++){Z.getVertex(Z.indices[H[S]*3+g],U),Z.getVertex(Z.indices[H[S]*3+(g+1)%3],F),F.vsub(U,G),V.vsub(F,E);let w=E.dot(G);V.vsub(U,E);let v=E.dot(G);if(v>0&&w<0){if(V.vsub(U,E),B.copy(G),B.normalize(),v=E.dot(B),B.scale(v,E),E.vadd(U,E),E.distanceTo(V)<J.radius){if(W)return!0;let h=this.createContactEquation(X,N,J,Z,$,K);E.vsub(V,h.ni),h.ni.normalize(),h.ni.scale(J.radius,h.ri),h.ri.vadd(k,h.ri),h.ri.vsub(X.position,h.ri),QJ.pointToWorldFrame(Y,Q,E,E),E.vsub(N.position,h.rj),QJ.vectorToWorldFrame(Q,h.ni,h.ni),QJ.vectorToWorldFrame(Q,h.ri,h.ri),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}}let M=vF,j=yF,y=bF,P=zF;for(let S=0,g=H.length;S!==g;S++){Z.getTriangleVertices(H[S],M,j,y),Z.getNormal(H[S],P),V.vsub(M,E);let w=E.dot(P);if(P.scale(w,E),V.vsub(E,E),w=E.distanceTo(V),CJ.pointInTriangle(E,M,j,y)&&w<J.radius){if(W)return!0;let v=this.createContactEquation(X,N,J,Z,$,K);E.vsub(V,v.ni),v.ni.normalize(),v.ni.scale(J.radius,v.ri),v.ri.vadd(k,v.ri),v.ri.vsub(X.position,v.ri),QJ.pointToWorldFrame(Y,Q,E,E),E.vsub(N.position,v.rj),QJ.vectorToWorldFrame(Q,v.ni,v.ni),QJ.vectorToWorldFrame(Q,v.ri,v.ri),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}H.length=0}planeTrimesh(J,Z,k,Y,R,Q,X,N,$,K,W){let U=new L,F=DF;F.set(0,0,1),R.vmult(F,F);for(let G=0;G<Z.vertices.length/3;G++){Z.getVertex(G,U);let B=new L;B.copy(U),QJ.pointToWorldFrame(Y,Q,B,U);let V=AF;if(U.vsub(k,V),F.dot(V)<=0){if(W)return!0;let q=this.createContactEquation(X,N,J,Z,$,K);q.ni.copy(F);let O=MF;F.scale(V.dot(F),O),U.vsub(O,O),q.ri.copy(O),q.ri.vsub(X.position,q.ri),q.rj.copy(U),q.rj.vsub(N.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}}}var nZ=new L,z1=new L,L1=new L,VF=new L,IF=new L,OF=new TJ,HF=new TJ,DF=new L,AF=new L,MF=new L,zF=new L,LF=new L;new L;var _F=new L,wF=new L,CF=new L,TF=new L,PF=new L,SF=new L,jF=new L,fF=new L,vF=new L,yF=new L,bF=new L,hF=new K8,gF=[],jk=new L,cX=new L,xF=new L,mF=new L,pF=new L;function uF(J,Z,k){let Y=null,R=J.length;for(let Q=0;Q!==R;Q++){let X=J[Q],N=xF;J[(Q+1)%R].vsub(X,N);let $=mF;N.cross(Z,$);let K=pF;k.vsub(X,K);let W=$.dot(K);if(Y===null||W>0&&Y===!0||W<=0&&Y===!1){if(Y===null)Y=W>0;continue}else return!1}return!0}var fk=new L,dF=new L,lF=new L,cF=new L,nF=[new L,new L,new L,new L,new L,new L],sF=new L,iF=new L,oF=new L,aF=new L,rF=new L,tF=new L,eF=new L,JG=new L,ZG=new L,kG=new L,YG=new L,RG=new L,QG=new L,XG=new L;new L;new L;var NG=new L,$G=new L,KG=new L,UG=new L,WG=new L,FG=new L,GG=new L,qG=new L,EG=new L,BG=new L,nX=new TJ,VG=new L;new L;var IG=new L,sX=new L,OG=new L,HG=new L,DG=new L,AG=[0],MG=new L,zG=new L;class cR{constructor(){this.current=[],this.previous=[]}getKey(J,Z){if(Z<J){let k=Z;Z=J,J=k}return J<<16|Z}set(J,Z){let k=this.getKey(J,Z),Y=this.current,R=0;while(k>Y[R])R++;if(k===Y[R])return;for(let Q=Y.length-1;Q>=R;Q--)Y[Q+1]=Y[Q];Y[R]=k}tick(){let J=this.current;this.current=this.previous,this.previous=J,this.current.length=0}getDiff(J,Z){let k=this.current,Y=this.previous,R=k.length,Q=Y.length,X=0;for(let N=0;N<R;N++){let $=!1,K=k[N];while(K>Y[X])X++;if($=K===Y[X],!$)iX(J,K)}X=0;for(let N=0;N<Q;N++){let $=!1,K=Y[N];while(K>k[X])X++;if($=k[X]===K,!$)iX(Z,K)}}}function iX(J,Z){J.push((Z&4294901760)>>16,Z&65535)}var mR=(J,Z)=>J<Z?`${J}-${Z}`:`${Z}-${J}`;class K7{constructor(){this.data={keys:[]}}get(J,Z){let k=mR(J,Z);return this.data[k]}set(J,Z,k){let Y=mR(J,Z);if(!this.get(J,Z))this.data.keys.push(Y);this.data[Y]=k}delete(J,Z){let k=mR(J,Z),Y=this.data.keys.indexOf(k);if(Y!==-1)this.data.keys.splice(Y,1);delete this.data[k]}reset(){let J=this.data,Z=J.keys;while(Z.length>0){let k=Z.pop();delete J[k]}}}class JQ extends nR{constructor(J){if(J===void 0)J={};super();if(this.dt=-1,this.allowSleep=!!J.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=J.quatNormalizeSkip!==void 0?J.quatNormalizeSkip:0,this.quatNormalizeFast=J.quatNormalizeFast!==void 0?J.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=0.016666666666666666,this.nextId=0,this.gravity=new L,J.gravity)this.gravity.copy(J.gravity);if(J.frictionGravity)this.frictionGravity=new L,this.frictionGravity.copy(J.frictionGravity);this.broadphase=J.broadphase!==void 0?J.broadphase:new oX,this.bodies=[],this.hasActiveBodies=!1,this.solver=J.solver!==void 0?J.solver:new Q7,this.constraints=[],this.narrowphase=new $7(this),this.collisionMatrix=new uR,this.collisionMatrixPrevious=new uR,this.bodyOverlapKeeper=new cR,this.shapeOverlapKeeper=new cR,this.contactmaterials=[],this.contactMaterialTable=new K7,this.defaultMaterial=new oZ("default"),this.defaultContactMaterial=new _1(this.defaultMaterial,this.defaultMaterial,{friction:0.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(J,Z){return this.contactMaterialTable.get(J.id,Z.id)}collisionMatrixTick(){let J=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=J,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(J){this.constraints.push(J)}removeConstraint(J){let Z=this.constraints.indexOf(J);if(Z!==-1)this.constraints.splice(Z,1)}rayTest(J,Z,k){if(k instanceof N6)this.raycastClosest(J,Z,{skipBackfaces:!0},k);else this.raycastAll(J,Z,{skipBackfaces:!0},k)}raycastAll(J,Z,k,Y){if(k===void 0)k={};return k.mode=CJ.ALL,k.from=J,k.to=Z,k.callback=Y,pR.intersectWorld(this,k)}raycastAny(J,Z,k,Y){if(k===void 0)k={};return k.mode=CJ.ANY,k.from=J,k.to=Z,k.result=Y,pR.intersectWorld(this,k)}raycastClosest(J,Z,k,Y){if(k===void 0)k={};return k.mode=CJ.CLOSEST,k.from=J,k.to=Z,k.result=Y,pR.intersectWorld(this,k)}addBody(J){if(this.bodies.includes(J))return;if(J.index=this.bodies.length,this.bodies.push(J),J.world=this,J.initPosition.copy(J.position),J.initVelocity.copy(J.velocity),J.timeLastSleepy=this.time,J instanceof V0)J.initAngularVelocity.copy(J.angularVelocity),J.initQuaternion.copy(J.quaternion);this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=J,this.idToBodyMap[J.id]=J,this.dispatchEvent(this.addBodyEvent)}removeBody(J){J.world=null;let Z=this.bodies.length-1,k=this.bodies,Y=k.indexOf(J);if(Y!==-1){k.splice(Y,1);for(let R=0;R!==k.length;R++)k[R].index=R;this.collisionMatrix.setNumObjects(Z),this.removeBodyEvent.body=J,delete this.idToBodyMap[J.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(J){return this.idToBodyMap[J]}getShapeById(J){let Z=this.bodies;for(let k=0;k<Z.length;k++){let Y=Z[k].shapes;for(let R=0;R<Y.length;R++){let Q=Y[R];if(Q.id===J)return Q}}return null}addContactMaterial(J){this.contactmaterials.push(J),this.contactMaterialTable.set(J.materials[0].id,J.materials[1].id,J)}removeContactMaterial(J){let Z=this.contactmaterials.indexOf(J);if(Z===-1)return;this.contactmaterials.splice(Z,1),this.contactMaterialTable.delete(J.materials[0].id,J.materials[1].id)}fixedStep(J,Z){if(J===void 0)J=0.016666666666666666;if(Z===void 0)Z=10;let k=yJ.now()/1000;if(!this.lastCallTime)this.step(J,void 0,Z);else{let Y=k-this.lastCallTime;this.step(J,Y,Z)}this.lastCallTime=k}step(J,Z,k){if(k===void 0)k=10;if(Z===void 0)this.internalStep(J),this.time+=J;else{this.accumulator+=Z;let Y=yJ.now(),R=0;while(this.accumulator>=J&&R<k)if(this.internalStep(J),this.accumulator-=J,R++,yJ.now()-Y>J*1000)break;this.accumulator=this.accumulator%J;let Q=this.accumulator/J;for(let X=0;X!==this.bodies.length;X++){let N=this.bodies[X];N.previousPosition.lerp(N.position,Q,N.interpolatedPosition),N.previousQuaternion.slerp(N.quaternion,Q,N.interpolatedQuaternion),N.previousQuaternion.normalize()}this.time+=Z}}internalStep(J){this.dt=J;let Z=this.contacts,k=TG,Y=PG,R=this.bodies.length,Q=this.bodies,X=this.solver,N=this.gravity,$=this.doProfiling,K=this.profile,W=V0.DYNAMIC,U=-1/0,F=this.constraints,G=CG;N.length();let{x:B,y:V,z:E}=N,q=0;if($)U=yJ.now();for(q=0;q!==R;q++){let S=Q[q];if(S.type===W){let{force:g,mass:w}=S;g.x+=w*B,g.y+=w*V,g.z+=w*E}}for(let S=0,g=this.subsystems.length;S!==g;S++)this.subsystems[S].update();if($)U=yJ.now();if(k.length=0,Y.length=0,this.broadphase.collisionPairs(this,k,Y),$)K.broadphase=yJ.now()-U;let O=F.length;for(q=0;q!==O;q++){let S=F[q];if(!S.collideConnected){for(let g=k.length-1;g>=0;g-=1)if(S.bodyA===k[g]&&S.bodyB===Y[g]||S.bodyB===k[g]&&S.bodyA===Y[g])k.splice(g,1),Y.splice(g,1)}}if(this.collisionMatrixTick(),$)U=yJ.now();let A=wG,H=Z.length;for(q=0;q!==H;q++)A.push(Z[q]);Z.length=0;let _=this.frictionEquations.length;for(q=0;q!==_;q++)G.push(this.frictionEquations[q]);if(this.frictionEquations.length=0,this.narrowphase.getContacts(k,Y,this,Z,A,this.frictionEquations,G),$)K.narrowphase=yJ.now()-U;if($)U=yJ.now();for(q=0;q<this.frictionEquations.length;q++)X.addEquation(this.frictionEquations[q]);let C=Z.length;for(let S=0;S!==C;S++){let g=Z[S],w=g.bi,v=g.bj,s=g.si,h=g.sj,J0;if(w.material&&v.material)J0=this.getContactMaterial(w.material,v.material)||this.defaultContactMaterial;else J0=this.defaultContactMaterial;if(J0.friction,w.material&&v.material){if(w.material.friction>=0&&v.material.friction>=0)w.material.friction*v.material.friction;if(w.material.restitution>=0&&v.material.restitution>=0)g.restitution=w.material.restitution*v.material.restitution}if(X.addEquation(g),w.allowSleep&&w.type===V0.DYNAMIC&&w.sleepState===V0.SLEEPING&&v.sleepState===V0.AWAKE&&v.type!==V0.STATIC){let l=v.velocity.lengthSquared()+v.angularVelocity.lengthSquared(),o=v.sleepSpeedLimit**2;if(l>=o*2)w.wakeUpAfterNarrowphase=!0}if(v.allowSleep&&v.type===V0.DYNAMIC&&v.sleepState===V0.SLEEPING&&w.sleepState===V0.AWAKE&&w.type!==V0.STATIC){let l=w.velocity.lengthSquared()+w.angularVelocity.lengthSquared(),o=w.sleepSpeedLimit**2;if(l>=o*2)v.wakeUpAfterNarrowphase=!0}if(this.collisionMatrix.set(w,v,!0),!this.collisionMatrixPrevious.get(w,v))Y6.body=v,Y6.contact=g,w.dispatchEvent(Y6),Y6.body=w,v.dispatchEvent(Y6);this.bodyOverlapKeeper.set(w.id,v.id),this.shapeOverlapKeeper.set(s.id,h.id)}if(this.emitContactEvents(),$)K.makeContactConstraints=yJ.now()-U,U=yJ.now();for(q=0;q!==R;q++){let S=Q[q];if(S.wakeUpAfterNarrowphase)S.wakeUp(),S.wakeUpAfterNarrowphase=!1}O=F.length;for(q=0;q!==O;q++){let S=F[q];S.update();for(let g=0,w=S.equations.length;g!==w;g++){let v=S.equations[g];X.addEquation(v)}}if(X.solve(J,this),$)K.solve=yJ.now()-U;X.removeAllEquations();let I=Math.pow;for(q=0;q!==R;q++){let S=Q[q];if(S.type&W){let g=I(1-S.linearDamping,J),w=S.velocity;w.scale(g,w);let v=S.angularVelocity;if(v){let s=I(1-S.angularDamping,J);v.scale(s,v)}}}if(this.dispatchEvent(_G),$)U=yJ.now();let j=this.stepnumber%(this.quatNormalizeSkip+1)===0,y=this.quatNormalizeFast;for(q=0;q!==R;q++)Q[q].integrate(J,j,y);if(this.clearForces(),this.broadphase.dirty=!0,$)K.integrate=yJ.now()-U;this.stepnumber+=1,this.dispatchEvent(LG);let P=!0;if(this.allowSleep){P=!1;for(q=0;q!==R;q++){let S=Q[q];if(S.sleepTick(this.time),S.sleepState!==V0.SLEEPING)P=!0}}this.hasActiveBodies=P}emitContactEvents(){let J=this.hasAnyEventListener("beginContact"),Z=this.hasAnyEventListener("endContact");if(J||Z)this.bodyOverlapKeeper.getDiff(YZ,RZ);if(J){for(let R=0,Q=YZ.length;R<Q;R+=2)R6.bodyA=this.getBodyById(YZ[R]),R6.bodyB=this.getBodyById(YZ[R+1]),this.dispatchEvent(R6);R6.bodyA=R6.bodyB=null}if(Z){for(let R=0,Q=RZ.length;R<Q;R+=2)Q6.bodyA=this.getBodyById(RZ[R]),Q6.bodyB=this.getBodyById(RZ[R+1]),this.dispatchEvent(Q6);Q6.bodyA=Q6.bodyB=null}YZ.length=RZ.length=0;let k=this.hasAnyEventListener("beginShapeContact"),Y=this.hasAnyEventListener("endShapeContact");if(k||Y)this.shapeOverlapKeeper.getDiff(YZ,RZ);if(k){for(let R=0,Q=YZ.length;R<Q;R+=2){let X=this.getShapeById(YZ[R]),N=this.getShapeById(YZ[R+1]);if(QZ.shapeA=X,QZ.shapeB=N,X)QZ.bodyA=X.body;if(N)QZ.bodyB=N.body;this.dispatchEvent(QZ)}QZ.bodyA=QZ.bodyB=QZ.shapeA=QZ.shapeB=null}if(Y){for(let R=0,Q=RZ.length;R<Q;R+=2){let X=this.getShapeById(RZ[R]),N=this.getShapeById(RZ[R+1]);if(XZ.shapeA=X,XZ.shapeB=N,X)XZ.bodyA=X.body;if(N)XZ.bodyB=N.body;this.dispatchEvent(XZ)}XZ.bodyA=XZ.bodyB=XZ.shapeA=XZ.shapeB=null}}clearForces(){let J=this.bodies,Z=J.length;for(let k=0;k!==Z;k++){let Y=J[k];Y.force,Y.torque,Y.force.set(0,0,0),Y.torque.set(0,0,0)}}}new K8;var pR=new CJ,yJ=globalThis.performance||{};if(!yJ.now){let J=Date.now();if(yJ.timing&&yJ.timing.navigationStart)J=yJ.timing.navigationStart;yJ.now=()=>Date.now()-J}new L;var LG={type:"postStep"},_G={type:"preStep"},Y6={type:V0.COLLIDE_EVENT_NAME,body:null,contact:null},wG=[],CG=[],TG=[],PG=[],YZ=[],RZ=[],R6={type:"beginContact",bodyA:null,bodyB:null},Q6={type:"endContact",bodyA:null,bodyB:null},QZ={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},XZ={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class ZQ{ctx=null;master=null;muted=!1;noiseBuf=null;ambientOn=!1;unlock(){let J=this.ensure();if(J&&J.state==="suspended")J.resume();if(J)this.startAmbient()}ensure(){if(typeof window>"u")return null;if(!this.ctx){let J=window.AudioContext||window.webkitAudioContext;if(!J)return null;try{this.ctx=new J}catch{return null}this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:0.5,this.master.connect(this.ctx.destination);let Z=this.ctx.sampleRate;this.noiseBuf=this.ctx.createBuffer(1,Z,this.ctx.sampleRate);let k=this.noiseBuf.getChannelData(0);for(let Y=0;Y<Z;Y++)k[Y]=Math.random()*2-1}return this.ctx}noiseSource(J){if(!this.noiseBuf)return null;let Z=J.createBufferSource();return Z.buffer=this.noiseBuf,Z.loop=!0,Z}startAmbient(){let J=this.ctx;if(!J||!this.master||this.ambientOn)return;this.ambientOn=!0;let Z=J.createGain();Z.gain.value=0.05;let k=J.createBiquadFilter();k.type="lowpass",k.frequency.value=640,k.Q.value=0.4,Z.connect(k).connect(this.master);let Y=[[110,"sine",0.5],[164.81,"sine",0.36],[220,"triangle",0.2],[261.63,"sine",0.14]];for(let[N,$,K]of Y){let W=J.createOscillator();W.type=$,W.frequency.value=N*(1+(Math.random()-0.5)*0.004);let U=J.createGain();U.gain.value=K,W.connect(U).connect(Z),W.start()}let R=J.createOscillator();R.type="sine",R.frequency.value=0.08;let Q=J.createGain();Q.gain.value=0.022,R.connect(Q).connect(Z.gain),R.start();let X=this.noiseSource(J);if(X){let N=J.createBiquadFilter();N.type="lowpass",N.frequency.value=380;let $=J.createGain();$.gain.value=0.012,X.connect(N).connect($).connect(this.master),X.start()}}throwWhoosh(J=1){let Z=this.ensure();if(!Z||!this.master)return;let k=Z.currentTime,Y=this.noiseSource(Z);if(!Y)return;let R=Z.createBiquadFilter();R.type="bandpass",R.Q.value=1.1,R.frequency.setValueAtTime(320+240*J,k),R.frequency.exponentialRampToValueAtTime(1400+800*J,k+0.22);let Q=Z.createGain();Q.gain.setValueAtTime(0.0001,k),Q.gain.exponentialRampToValueAtTime(0.16+0.14*J,k+0.05),Q.gain.exponentialRampToValueAtTime(0.0001,k+0.32),Y.connect(R).connect(Q).connect(this.master),Y.start(k),Y.stop(k+0.38)}impact(J=0.5){let Z=this.ensure();if(!Z||!this.master)return;let k=Z.currentTime,Y=Z.createOscillator();Y.type="triangle",Y.frequency.setValueAtTime(150+60*J,k),Y.frequency.exponentialRampToValueAtTime(62,k+0.09);let R=Z.createGain();R.gain.setValueAtTime(0.1+0.18*J,k),R.gain.exponentialRampToValueAtTime(0.0001,k+0.11),Y.connect(R).connect(this.master),Y.start(k),Y.stop(k+0.13);let Q=this.noiseSource(Z);if(!Q)return;let X=Z.createBiquadFilter();X.type="lowpass",X.frequency.value=900+1400*J;let N=Z.createGain();N.gain.setValueAtTime(0.08+0.12*J,k),N.gain.exponentialRampToValueAtTime(0.0001,k+0.06),Q.connect(X).connect(N).connect(this.master),Q.start(k),Q.stop(k+0.08)}score(){let J=this.ensure();if(!J||!this.master)return;let Z=this.master,k=J.currentTime;[523.25,783.99].forEach((N,$)=>{let K=J.createOscillator();K.type="sine",K.frequency.value=N;let W=J.createGain(),U=k+$*0.09;W.gain.setValueAtTime(0.0001,U),W.gain.exponentialRampToValueAtTime(0.2,U+0.02),W.gain.exponentialRampToValueAtTime(0.0001,U+0.5),K.connect(W).connect(Z),K.start(U),K.stop(U+0.55)});let R=this.noiseSource(J);if(!R)return;let Q=J.createBiquadFilter();Q.type="highpass",Q.frequency.value=1600;let X=J.createGain();X.gain.setValueAtTime(0.14,k),X.gain.exponentialRampToValueAtTime(0.0001,k+0.26),R.connect(Q).connect(X).connect(this.master),R.start(k),R.stop(k+0.28)}miss(){let J=this.ensure();if(!J||!this.master)return;let Z=J.currentTime,k=J.createOscillator();k.type="sine",k.frequency.setValueAtTime(220,Z),k.frequency.exponentialRampToValueAtTime(110,Z+0.25);let Y=J.createGain();Y.gain.setValueAtTime(0.12,Z),Y.gain.exponentialRampToValueAtTime(0.0001,Z+0.3),k.connect(Y).connect(this.master),k.start(Z),k.stop(Z+0.32)}setMuted(J){if(this.muted=J,this.master)this.master.gain.value=J?0:0.5}dispose(){if(this.ctx)this.ctx.close().catch(()=>{return});this.ctx=null,this.master=null}}var s0={gravity:8,rimY:0.85,binX:0,binZ:-0.15,binHalf:0.2,wallT:0.045,binH:0.85,cupR:0.06,spawn:{x:0,y:0.36,z:0.59},levitateY:0.3,powerRef:1.5,vUpBase:3,vUpGain:1.6,latGain:0.85,latMax:1.1,damping:0.08};function jG(J){let Z=s0.binH-s0.levitateY,k=J*J-2*s0.gravity*Z,Y=k>0?(J+Math.sqrt(k))/s0.gravity:0.4,R=s0.binZ+s0.binHalf*0.15;return Math.max(0.3,(s0.spawn.z-R)/Y)}var K6=(J,Z,k)=>Math.max(Z,Math.min(k,J));function fG(J){let Z=new IZ,k=new kZ({map:J,color:16777215,roughness:0.86,metalness:0,side:N8}),Y=new o1(0.074,0.052,0.132,30,1,!0),R=new OJ(Y,k);R.castShadow=!0;let Q=new i1(0.052,24),X=new OJ(Q,k);return X.rotation.x=-Math.PI/2,X.position.y=-0.065,Z.add(R,X),Z}function U7(J,Z){let k=new ZQ,Y=[],R=Math.min(window.innerWidth,window.innerHeight)<720,Q=new yR({antialias:!0,alpha:!1});Q.setPixelRatio(Math.min(window.devicePixelRatio||1,R?1.75:2)),Q.shadowMap.enabled=!0,Q.shadowMap.type=bZ,Q.toneMapping=g1,Q.toneMappingExposure=1.05,Q.outputColorSpace=u1,Q.domElement.style.width="100%",Q.domElement.style.height="100%",Q.domElement.style.display="block",Q.domElement.style.touchAction="none",Q.domElement.setAttribute("aria-hidden","true"),J.appendChild(Q.domElement);let X=new Xk;X.background=new c0(16250868),X.fog=new n1(16250868,9,24);let N=new k8(44,1,0.1,60),$=new d(0,1.5,2.2);N.position.copy($),N.lookAt(0,0.42,-0.15);let K=new Ik,W=(y0,h0)=>{let C0=K.load(y0);if(C0.colorSpace=u1,C0.anisotropy=8,h0)C0.wrapS=C0.wrapT=o6,C0.repeat.set(h0[0],h0[1]);return C0},U=W("../textures/bin-loop.png"),F=W("../textures/bin-photo.png"),G=W("../textures/cup-black.png"),B=W("../textures/floor-wood.png",[7,7]),V=W("../textures/backdrop.png",[5,2]);X.add(new Hk(16777215,13623506,1.15));let E=new A1(16777215,2.6);E.position.set(3,6,3),E.castShadow=!0,E.shadow.mapSize.set(R?1024:2048,R?1024:2048),E.shadow.camera.left=-4,E.shadow.camera.right=4,E.shadow.camera.top=4,E.shadow.camera.bottom=-4,E.shadow.camera.far=20,E.shadow.bias=-0.0004,X.add(E);let q=new A1(15136490,0.8);q.position.set(-4,3,2),X.add(q);let O=new A1(12447435,0.9);O.position.set(0,2.5,-5),X.add(O);let A=new kZ({map:B,roughness:0.92,metalness:0.02}),H=new OJ(new y8(30,30),A);H.rotation.x=-Math.PI/2,H.receiveShadow=!0,X.add(H),Y.push(A,H.geometry);let _=new pZ({map:V}),C=new OJ(new y8(40,16),_);C.position.set(0,5.4,-9.5),X.add(C),Y.push(_,C.geometry);let I=new JQ({gravity:new L(0,-s0.gravity,0)});I.broadphase=new iZ(I),I.allowSleep=!0;let M=new oZ("world"),j=new oZ("cup");I.addContactMaterial(new _1(M,j,{friction:0.42,restitution:0.42}));let{binX:y,binZ:P,binHalf:S,wallT:g,binH:w}=s0,v=new V0({mass:0,material:M,shape:new wZ(new L(15,0.05,15)),position:new L(0,-0.05,0)});I.addBody(v);let s=new V0({mass:0,material:M,shape:new wZ(new L(S,0.015,S)),position:new L(y,0.015,P)});I.addBody(s);let h=new kZ({map:U,roughness:0.55,metalness:0.12}),J0=new kZ({color:1140296,roughness:0.8,metalness:0.05}),l=new kZ({color:1409894,roughness:0.6,metalness:0.1}),o=new kZ({color:1007434,roughness:0.5,metalness:0.15});Y.push(h,J0,l,o);function n(y0,h0,C0,GJ,jJ,nJ,P8){let UZ=new L8(y0,h0,C0),I8=[],p8={px:"nx",nx:"px",pz:"nz",nz:"pz"},C1=["px","nx","py","ny","pz","nz"];for(let tZ of C1)if(tZ===P8)I8.push(h);else if(tZ===p8[P8])I8.push(J0);else if(tZ==="py"||tZ==="ny")I8.push(J0);else I8.push(l);let CZ=new OJ(UZ,I8);CZ.position.set(GJ,jJ,nJ),CZ.castShadow=!0,CZ.receiveShadow=!0,X.add(CZ);let V6=new V0({mass:0,material:M,shape:new wZ(new L(y0/2,h0/2,C0/2)),position:new L(GJ,jJ,nJ)});I.addBody(V6),Y.push(UZ)}n(S*2,w,g,y,w/2,P-(S-g/2),"nz"),n(S*2,w,g,y,w/2,P+(S-g/2),"pz"),n(g,w,S*2-g*2,y-(S-g/2),w/2,P,"nx"),n(g,w,S*2-g*2,y+(S-g/2),w/2,P,"px");let I0=0.46488294314381273,e=w,Y0=e*I0,O0=new pZ({map:F,transparent:!0,alphaTest:0.02,toneMapped:!1}),_0=new OJ(new y8(Y0,e),O0);_0.position.set(y,e/2,P+S+0.012),_0.renderOrder=2,X.add(_0),Y.push(O0,_0.geometry);let f0=new L8(S*2,0.03,S*2),H0=new OJ(f0,J0);H0.position.set(y,0.015,P),H0.receiveShadow=!0,X.add(H0),Y.push(f0);let t0=new L8(S*2+0.02,0.02,0.024),d0=new L8(0.024,0.02,S*2+0.02),g0=[new OJ(t0,o),new OJ(t0,o),new OJ(d0,o),new OJ(d0,o)];g0[0].position.set(y,w+0.007,P-S),g0[1].position.set(y,w+0.007,P+S),g0[2].position.set(y-S,w+0.007,P),g0[3].position.set(y+S,w+0.007,P);for(let y0 of g0)y0.castShadow=!0,X.add(y0);Y.push(t0,d0);let $J=[[12,0.5,0,6],[12,0.5,0,-8],[0.5,14,7,-1],[0.5,14,-7,-1]];for(let[y0,h0,C0,GJ]of $J){let jJ=new V0({mass:0,material:M,shape:new wZ(new L(y0/2,2,h0/2)),position:new L(C0,2,GJ)});I.addBody(jJ)}let l0=fG(G);X.add(l0),Y.push(...l0.children.map((y0)=>y0.geometry));let v0=new V0({mass:0.02,type:V0.KINEMATIC,material:j,shape:new eR(s0.cupR),position:new L(s0.spawn.x,s0.spawn.y,s0.spawn.z),linearDamping:s0.damping,angularDamping:0.45,allowSleep:!0,sleepSpeedLimit:0.3,sleepTimeLimit:0.5});v0.angularVelocity.set(0.12,0.18,-0.09),I.addBody(v0);let BJ=26,KJ=[],bJ=new Float32Array(BJ*3),UJ=new $8;UJ.setAttribute("position",new q8(bJ,3).setUsage(QR)),UJ.setDrawRange(0,0);let PJ=new s1({color:1483594,transparent:!0,opacity:0.26}),SJ=new Gk(UJ,PJ);SJ.frustumCulled=!1,X.add(SJ),Y.push(UJ,PJ);let hJ=R?22:36,Z8=new y8(0.022,0.028),x=new pZ({color:4906624,side:N8}),AJ=new Wk(Z8,x,hJ);AJ.frustumCulled=!1,AJ.visible=!1,X.add(AJ),Y.push(Z8,x);let JJ=[],HJ=[],F0=[],kJ=0,w0=new zJ,P0="ready",DJ=0,T=0;try{T=Number(window.localStorage.getItem("ctl-best")||"0")||0}catch{T=0}let D=0,m=0,k0=0,Z0=!1,Q0=[],N0=new Set,i="";function r(){let y0={phase:P0,score:DJ,best:T},h0=JSON.stringify(y0);if(h0!==i)i=h0,Z.onState(y0)}r();function $0(y0,h0){let C0=K6(y0/s0.powerRef,0,1.08),GJ=s0.vUpBase+s0.vUpGain*Math.pow(C0,0.85),jJ=jG(GJ),nJ=K6(h0*s0.latGain,-s0.latMax,s0.latMax)*0.85;v0.type=V0.DYNAMIC,v0.wakeUp(),v0.position.y=Math.max(v0.position.y,s0.levitateY),v0.position.z=s0.spawn.z,v0.velocity.set(nJ,GJ,-jJ),v0.angularVelocity.set((Math.random()-0.5)*5,(Math.random()-0.5)*6,(Math.random()-0.5)*5),v0.aabbNeedsUpdate=!0,P0="flight",D=0,m=0,k0=0,Z0=!1,KJ.length=0,k.throwWhoosh(K6(C0,0.3,1)),r()}function f(){v0.type=V0.KINEMATIC,v0.position.set(s0.spawn.x+(Math.random()-0.5)*0.06,s0.spawn.y,s0.spawn.z+(Math.random()-0.5)*0.08),v0.quaternion.set(0,0,0,1),v0.velocity.set(0,0,0),v0.angularVelocity.set((Math.random()-0.5)*0.3,(Math.random()-0.5)*0.4,(Math.random()-0.5)*0.3),v0.aabbNeedsUpdate=!0,v0.wakeUp(),P0="ready",r()}function t(){let y0=v0.position;if(Math.abs(y0.x-y)<S-s0.cupR*0.6&&Math.abs(y0.z-P)<S-s0.cupR*0.6&&y0.y<s0.rimY-0.08&&!Z0){if(Z0=!0,P0="scored",DJ+=1,DJ>T){T=DJ;try{window.localStorage.setItem("ctl-best",String(T))}catch{}}if(k.score(),a(),"vibrate"in navigator)navigator.vibrate(25);Z.onMessage("+1","good"),r()}else if(!Z0)P0="miss",k.miss(),r();else P0="scored";let C0=setTimeout(()=>{N0.delete(C0),f()},P0==="scored"?900:650);N0.add(C0)}function a(){kJ=1,AJ.visible=!0,JJ.length=0,HJ.length=0,F0.length=0;for(let y0=0;y0<hJ;y0++){let h0=Math.random()*Math.PI*2,C0=Math.random()*S*0.7;JJ.push(new d(y+Math.cos(h0)*C0,s0.rimY+0.05,P+Math.sin(h0)*C0)),HJ.push(new d(Math.cos(h0)*(0.4+Math.random()*1.2),1.1+Math.random()*1.7,Math.sin(h0)*(0.4+Math.random()*1.2))),F0.push(new M8(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI)),w0.position.copy(JJ[y0]),w0.rotation.copy(F0[y0]),w0.scale.setScalar(1),w0.updateMatrix(),AJ.setMatrixAt(y0,w0.matrix)}AJ.instanceMatrix.needsUpdate=!0}let R0={x:0,y:0},X0=!1;function K0(y0){if(k.unlock(),P0!=="ready")return;X0=!0,P0="aiming",Q0.length=0,Q0.push({t:performance.now(),x:y0.clientX,y:y0.clientY}),Q.domElement.setPointerCapture?.(y0.pointerId),r()}function S0(y0){let h0=Q.domElement.getBoundingClientRect();if(R0.x=(y0.clientX-h0.left)/h0.width*2-1,R0.y=(y0.clientY-h0.top)/h0.height*2-1,!X0)return;if(Q0.push({t:performance.now(),x:y0.clientX,y:y0.clientY}),Q0.length>40)Q0.shift()}function M0(){if(!X0)return;X0=!1;let y0=performance.now(),h0=Q0.filter((C1)=>y0-C1.t<=140),C0=h0.length>1?h0[0]:Q0[0],GJ=Q0[Q0.length-1];if(!C0||!GJ||GJ.t===C0.t){P0="ready",r();return}let jJ=Math.max(GJ.t-C0.t,16),nJ=(GJ.x-C0.x)/jJ,P8=(GJ.y-C0.y)/jJ,UZ=800/Math.max(400,J.clientHeight),I8=-P8*UZ,p8=nJ*UZ;if(I8<0.2){P0="ready",r();return}$0(I8,p8)}Q.domElement.addEventListener("pointerdown",K0),window.addEventListener("pointermove",S0),window.addEventListener("pointerup",M0),window.addEventListener("pointercancel",M0);function G0(){let y0=J.clientWidth||1,h0=J.clientHeight||1;Q.setSize(y0,h0,!1),N.aspect=y0/h0,N.updateProjectionMatrix()}let j0=new ResizeObserver(G0);j0.observe(J),G0();let p0=!0,q0=new IntersectionObserver((y0)=>{p0=y0[0]?.isIntersecting??!0},{rootMargin:"60px"});q0.observe(J);let YJ=0,MJ=(y0)=>{let h0=performance.now(),C0=Math.abs(y0.contact.getImpactVelocityAlongNormal());if(C0>1.1&&h0-YJ>90)YJ=h0,k.impact(K6(C0/6,0.1,1))};v0.addEventListener("collide",MJ);let W8=performance.now(),rZ=0;function B6(){if(rZ=requestAnimationFrame(B6),!p0)return;let y0=performance.now(),h0=Math.min((y0-W8)/1000,0.05);if(W8=y0,P0==="aiming"){let C0=s0.spawn.x+R0.x*0.1,GJ=s0.levitateY+Math.max(0,-R0.y)*0.05;v0.position.x+=(C0-v0.position.x)*0.14,v0.position.y+=(GJ-v0.position.y)*0.14,v0.position.z+=(s0.spawn.z-v0.position.z)*0.14,v0.aabbNeedsUpdate=!0}if(I.step(0.008333333333333333,h0,8),l0.position.copy(v0.position),l0.quaternion.copy(v0.quaternion),P0==="flight"){if(D+=h0,KJ.push(l0.position.clone()),KJ.length>BJ)KJ.shift();let C0=v0.position,GJ=v0.velocity.length(),jJ=v0.angularVelocity.length(),nJ=Math.abs(C0.x-y)<S-s0.cupR*0.4&&Math.abs(C0.z-P)<S-s0.cupR*0.4;if(!Z0&&nJ&&C0.y<s0.rimY-0.22&&v0.velocity.y<0.6)t();else if(!Z0){if(GJ<0.4&&jJ<1.2){if(m+=h0,m>0.45)t()}else m=0;if(C0.y<0.2&&!nJ){if(k0+=h0,k0>0.7)t()}else k0=0;if(D>4)t();if(v0.sleepState===V0.SLEEPING)t()}}else if(KJ.length)KJ.shift();if(KJ.length>1){for(let C0=0;C0<KJ.length;C0++)bJ[C0*3]=KJ[C0].x,bJ[C0*3+1]=KJ[C0].y,bJ[C0*3+2]=KJ[C0].z;UJ.attributes.position.needsUpdate=!0,UJ.setDrawRange(0,KJ.length),SJ.visible=!0}else SJ.visible=!1;if(kJ>0){kJ-=h0*0.9;for(let C0=0;C0<hJ;C0++){let GJ=JJ[C0],jJ=HJ[C0],nJ=F0[C0];jJ.y-=5.2*h0,GJ.x+=jJ.x*h0,GJ.y+=jJ.y*h0,GJ.z+=jJ.z*h0,nJ.x+=h0*4,nJ.z+=h0*3,w0.position.copy(GJ),w0.rotation.copy(nJ),w0.scale.setScalar(K6(kJ,0,1)),w0.updateMatrix(),AJ.setMatrixAt(C0,w0.matrix)}if(AJ.instanceMatrix.needsUpdate=!0,kJ<=0)AJ.visible=!1}N.position.x+=($.x+R0.x*0.08-N.position.x)*0.05,N.position.y+=($.y-R0.y*0.07-N.position.y)*0.05,N.lookAt(0,0.42,-0.15),Q.render(X,N)}return B6(),{destroy(){cancelAnimationFrame(rZ),j0.disconnect(),q0.disconnect(),Q.domElement.removeEventListener("pointerdown",K0),window.removeEventListener("pointermove",S0),window.removeEventListener("pointerup",M0),window.removeEventListener("pointercancel",M0),v0.removeEventListener("collide",MJ);for(let y0 of N0)clearTimeout(y0);if(N0.clear(),Y.forEach((y0)=>y0.dispose()),Q.dispose(),Q.domElement.parentElement===J)J.removeChild(Q.domElement);k.dispose()},reset(){for(let y0 of N0)clearTimeout(y0);N0.clear(),DJ=0,P0="ready",f(),r()}}}var J8={STEM_GROWTH_RATE:1.5,LEAF_START:0.3,LEAF_GROWTH_RATE:2,FLOWER_START:0.5,FLOWER_GROWTH_RATE:2,FOLIAGE_START:0.4,FOLIAGE_GROWTH_RATE:1.7,PLUME_START:0.8,BUSH_FLOWER_START:0.7,BUSH_FLOWER_START_COMPLEX:0.5,LAVENDER_SPIKE_START:0.5,PALM_FROND_START:0.3,CONIFER_FOLIAGE_START:0.2},pJ={FLOWER_CENTER_GOLD:"#FFD700",FLOWER_CENTER_DARK:"#2D2D2D",SUNFLOWER_CENTER:"#4A3728",SUNFLOWER_CENTER_INNER:"#3D2D20",LILY_STAMENS:"#8B4513",DAHLIA_CENTER:"#DAA520",GRASS_PLUME:"#F5F5DC",LAVENDER_STEM:"#4A7C40",TULIP_STRIPE:"#FFFFFF",GROUND_COLOR:"rgba(139, 119, 101, 0.08)",CANVAS_BACKGROUND:"transparent",DEFAULT_ACCENT:"#F6821F",DEFAULT_FADE_COLOR:"#ffffff"},aZ={DEFAULT_DURATION:600,DEFAULT_GENERATIONS:47,DEFAULT_TARGET_FPS:30,DEFAULT_MAX_PIXEL_RATIO:2,RESIZE_DEBOUNCE_MS:100,GROUND_HEIGHT:8},vG={DEFAULT_MAX_HEIGHT:0.35,TALL_PLANT_HEIGHT_THRESHOLD:0.5,TALL_GARDEN_THRESHOLD:0.35,HEIGHT_BIAS_FACTOR:0.5,TREE_TRUNK_RATIO:0.6,CONIFER_TRUNK_RATIO:0.95,TROPICAL_TRUNK_RATIO:0.5,TALL_FLOWER_STEM_RATIO:1};var w1={SIZE_MULTIPLIER:1,HEIGHT_MULTIPLIER:1,PETAL_COUNT_MODIFIER:0,THICKNESS_MULTIPLIER:1,LEAN_MULTIPLIER:1,COMPLEXITY:0.5};var yG={LINE_CAP:"round",PLUME_ALPHA:0.7,TULIP_STRIPE_ALPHA:0.3},vk={TWO_PI:Math.PI*2,PI:Math.PI,HALF_PI:Math.PI/2,BEZIER_CP_RATIO:0.7,STEM_CP1_HEIGHT:0.4,STEM_CP2_HEIGHT:0.7,STEM_CP1_LEAN:0.3,STEM_CP2_LEAN:0.6},KQ={DURATION:{min:1,max:86400},GENERATIONS:{min:1,max:1000},MAX_HEIGHT:{min:0.05,max:1},SPEED:{min:0.01,max:100},MAX_PIXEL_RATIO:{min:0.5,max:4},TARGET_FPS:{min:1,max:120},OPACITY:{min:0,max:1},FADE_HEIGHT:{min:0,max:1},Z_INDEX:{min:-9999,max:9999},SEED:{min:0,max:1e9}},O7={sparse:[4,6],normal:[8,13],dense:[14,20],lush:[22,30]};function H7(J){let Z=Math.floor(J),k=J-Z,Y=Z>>>0^Math.imul(Math.floor(k*1073741824),2246822507);return Y=Math.imul(Y^Y>>>16,569420461),Y=Math.imul(Y^Y>>>15,1935289751),Y=(Y^Y>>>15)>>>0,Y/4294967296}var bG=class J{constructor(Z){let k=Number.isFinite(Z)?Z:0;this._initialSeed=k,this._seed=k}get seed(){return this._seed}get initialSeed(){return this._initialSeed}next(){return H7(this._seed++)}reset(){this._seed=this._initialSeed}setSeed(Z){let k=Number.isFinite(Z)?Z:0;this._seed=k,this._initialSeed=k}fork(){return new J(this._seed*1000+Math.floor(this.next()*1000))}createGenerator(){let Z=this.fork();return()=>Z.next()}range(Z,k){return Z+this.next()*(k-Z)}int(Z,k){return Math.floor(this.range(Z,k+1))}below(Z){return Math.floor(this.next()*Z)}centered(Z){return(this.next()-0.5)*2*Z}around(Z,k){return Z+this.centered(k)}bool(){return this.next()<0.5}chance(Z){return this.next()<Z}sign(){return this.bool()?1:-1}pick(Z){if(Z.length===0)throw Error("SeededRandom.pick: Cannot pick from empty array");return Z[this.below(Z.length)]}pickIndex(Z){if(Z.length===0)throw Error("SeededRandom.pickIndex: Cannot pick from empty array");return this.below(Z.length)}pickMultiple(Z,k){if(k>Z.length)throw Error("SeededRandom.pickMultiple: Count exceeds array length");let Y=[],R=new Set;while(Y.length<k){let Q=this.below(Z.length);if(!R.has(Q))R.add(Q),Y.push(Z[Q])}return Y}weightedPick(Z){if(Z.length===0)throw Error("SeededRandom.weightedPick: Cannot pick from empty array");let k=Z.reduce((R,Q)=>R+Q.weight,0),Y=this.next()*k;for(let R of Z)if(Y-=R.weight,Y<=0)return R.value;return Z[Z.length-1].value}shuffle(Z){for(let k=Z.length-1;k>0;k--){let Y=this.below(k+1);[Z[k],Z[Y]]=[Z[Y],Z[k]]}return Z}shuffled(Z){let k=[...Z];return this.shuffle(k)}gaussian(Z=0,k=1){let Y=Math.max(this.next(),0.000000000001),R=this.next();return Math.sqrt(-2*Math.log(Y))*Math.cos(2*Math.PI*R)*k+Z}exponential(Z=1){return-Math.log(1-this.next())/Z}biased(Z){return Math.pow(this.next(),Z)}centeredBias(){return(this.next()+this.next())/2}edgeBias(){let Z=this.next()*2-1;return Math.abs(Z)}angle(){return this.next()*Math.PI*2}degrees(){return this.next()*360}pointInCircle(){let Z=this.angle(),k=Math.sqrt(this.next());return{x:Math.cos(Z)*k,y:Math.sin(Z)*k}}pointOnCircle(){let Z=this.angle();return{x:Math.cos(Z),y:Math.sin(Z)}}pointInRect(Z,k){return{x:this.next()*Z,y:this.next()*k}}getState(){return{seed:this._seed,initialSeed:this._initialSeed}}setState(Z){this._seed=Z.seed,this._initialSeed=Z.initialSeed}skip(Z){this._seed+=Z}static random(){return new J(Math.random()*1e5)}static fromString(Z){let k=0;for(let Y=0;Y<Z.length;Y++){let R=Z.charCodeAt(Y);k=(k<<5)-k+R,k=k&k}return new J(Math.abs(k))}};function T8(J){return H7(J)}function W7(J){let Z=J;return()=>T8(Z++)}function kQ(J,Z,k){return J+k()*(Z-J)}var U8=class J{constructor(Z,k,Y,R=1){this._hexCache=null,this._r=Math.round(Math.max(0,Math.min(255,Z))),this._g=Math.round(Math.max(0,Math.min(255,k))),this._b=Math.round(Math.max(0,Math.min(255,Y))),this._a=Math.max(0,Math.min(1,R))}get r(){return this._r}get g(){return this._g}get b(){return this._b}get a(){return this._a}get rgb(){return{r:this._r,g:this._g,b:this._b}}static fromHex(Z){let k=Z.replace("#",""),Y,R,Q,X=255;if(k.length===3)Y=parseInt(k[0]+k[0],16),R=parseInt(k[1]+k[1],16),Q=parseInt(k[2]+k[2],16);else if(k.length===6)Y=parseInt(k.substring(0,2),16),R=parseInt(k.substring(2,4),16),Q=parseInt(k.substring(4,6),16);else if(k.length===8)Y=parseInt(k.substring(0,2),16),R=parseInt(k.substring(2,4),16),Q=parseInt(k.substring(4,6),16),X=parseInt(k.substring(6,8),16);else return null;if(isNaN(Y)||isNaN(R)||isNaN(Q)||isNaN(X))return null;return new J(Y,R,Q,X/255)}static fromRGB(Z,k=1){return new J(Z.r,Z.g,Z.b,k)}static fromHSL(Z,k,Y,R=1){let Q=k/100,X=Y/100,N=(1-Math.abs(2*X-1))*Q,$=N*(1-Math.abs(Z/60%2-1)),K=X-N/2,W=0,U=0,F=0;if(Z<60)W=N,U=$,F=0;else if(Z<120)W=$,U=N,F=0;else if(Z<180)W=0,U=N,F=$;else if(Z<240)W=0,U=$,F=N;else if(Z<300)W=$,U=0,F=N;else W=N,U=0,F=$;return new J((W+K)*255,(U+K)*255,(F+K)*255,R)}static parse(Z){if(Z=Z.trim().toLowerCase(),Z.startsWith("#"))return J.fromHex(Z);let k=Z.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/);if(k)return new J(parseInt(k[1]),parseInt(k[2]),parseInt(k[3]),k[4]?parseFloat(k[4]):1);let Y=Z.match(/hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*(?:,\s*([\d.]+))?\s*\)/);if(Y)return J.fromHSL(parseInt(Y[1]),parseInt(Y[2]),parseInt(Y[3]),Y[4]?parseFloat(Y[4]):1);return null}toHex(Z=!1){if(!Z&&this._hexCache)return this._hexCache;let k="#"+this._r.toString(16).padStart(2,"0")+this._g.toString(16).padStart(2,"0")+this._b.toString(16).padStart(2,"0")+(Z?Math.round(this._a*255).toString(16).padStart(2,"0"):"");if(!Z)this._hexCache=k;return k}toRGBString(Z=!1){if(this._a<1||Z)return"rgba(".concat(this._r,", ").concat(this._g,", ").concat(this._b,", ").concat(this._a,")");return"rgb(".concat(this._r,", ").concat(this._g,", ").concat(this._b,")")}toHSL(){let Z=this._r/255,k=this._g/255,Y=this._b/255,R=Math.max(Z,k,Y),Q=Math.min(Z,k,Y),X=(R+Q)/2;if(R===Q)return{h:0,s:0,l:X*100};let N=R-Q,$=X>0.5?N/(2-R-Q):N/(R+Q),K=0;if(R===Z)K=((k-Y)/N+(k<Y?6:0))/6;else if(R===k)K=((Y-Z)/N+2)/6;else K=((Z-k)/N+4)/6;return{h:K*360,s:$*100,l:X*100}}lighten(Z){return new J(this._r+(255-this._r)*Z,this._g+(255-this._g)*Z,this._b+(255-this._b)*Z,this._a)}darken(Z){return new J(this._r*(1-Z),this._g*(1-Z),this._b*(1-Z),this._a)}withAlpha(Z){return new J(this._r,this._g,this._b,Z)}mix(Z,k=0.5){let Y=Math.max(0,Math.min(1,k));return new J(this._r+(Z._r-this._r)*Y,this._g+(Z._g-this._g)*Y,this._b+(Z._b-this._b)*Y,this._a+(Z._a-this._a)*Y)}complement(){return new J(255-this._r,255-this._g,255-this._b,this._a)}saturate(Z){let k=this.toHSL();return k.s=Math.min(100,k.s+Z*100),J.fromHSL(k.h,k.s,k.l,this._a)}desaturate(Z){let k=this.toHSL();return k.s=Math.max(0,k.s-Z*100),J.fromHSL(k.h,k.s,k.l,this._a)}rotateHue(Z){let k=this.toHSL();if(k.h=(k.h+Z)%360,k.h<0)k.h+=360;return J.fromHSL(k.h,k.s,k.l,this._a)}luminance(){let Z=this._r/255,k=this._g/255,Y=this._b/255,R=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4),Q=k<=0.03928?k/12.92:Math.pow((k+0.055)/1.055,2.4),X=Y<=0.03928?Y/12.92:Math.pow((Y+0.055)/1.055,2.4);return 0.2126*R+0.7152*Q+0.0722*X}contrastWith(Z){let k=this.luminance(),Y=Z.luminance(),R=Math.max(k,Y),Q=Math.min(k,Y);return(R+0.05)/(Q+0.05)}isLight(){return this.luminance()>0.5}isDark(){return this.luminance()<=0.5}equals(Z){return this._r===Z._r&&this._g===Z._g&&this._b===Z._b&&this._a===Z._a}approximatelyEquals(Z,k=1){return Math.abs(this._r-Z._r)<=k&&Math.abs(this._g-Z._g)<=k&&Math.abs(this._b-Z._b)<=k&&Math.abs(this._a-Z._a)<=k/255}clone(){return new J(this._r,this._g,this._b,this._a)}toString(){return this.toHex(this._a<1)}};U8.WHITE=new U8(255,255,255);U8.BLACK=new U8(0,0,0);U8.TRANSPARENT=new U8(0,0,0,0);U8.RED=new U8(255,0,0);U8.GREEN=new U8(0,255,0);U8.BLUE=new U8(0,0,255);var UQ=U8;function hG(J){let Z=UQ.fromHex(J);return Z?Z.rgb:null}function F6(J,Z){let k=UQ.fromHex(J);if(!k)return J;return k.lighten(Z).toHex()}function eJ(J,Z){let k=UQ.fromHex(J);if(!k)return J;return k.darken(Z).toHex()}var E6=class{static detect(){if(this._cached)return this._cached;if(!(typeof window<"u"&&typeof document<"u"))return this._cached={isBrowser:!1,hasCanvas:!1,hasResizeObserver:!1,hasRAF:!1,isHighDPI:!1,pixelRatio:1,hasTouch:!1,isMobile:!1,prefersReducedMotion:!1,prefersDarkMode:!1,isPageVisible:!0},this._cached;let Z=window.devicePixelRatio||1;return this._cached={isBrowser:!0,hasCanvas:this.checkCanvasSupport(),hasResizeObserver:typeof ResizeObserver<"u",hasRAF:typeof requestAnimationFrame<"u",isHighDPI:Z>1,pixelRatio:Z,hasTouch:this.checkTouchSupport(),isMobile:this.checkMobile(),prefersReducedMotion:this.checkReducedMotion(),prefersDarkMode:this.checkDarkMode(),isPageVisible:this.checkPageVisibility()},this._cached}static clearCache(){this._cached=null}static checkCanvasSupport(){try{let J=document.createElement("canvas");return!!(J.getContext&&J.getContext("2d"))}catch(J){return!1}}static checkTouchSupport(){return"ontouchstart"in window||navigator.maxTouchPoints>0||(navigator.msMaxTouchPoints||0)>0}static checkMobile(){let J=navigator.userAgent.toLowerCase(),k=["android","webos","iphone","ipad","ipod","blackberry","windows phone"].some((Q)=>J.includes(Q)),Y=window.innerWidth<=768,R=this.checkTouchSupport();return k||R&&Y}static checkReducedMotion(){if(typeof window>"u")return!1;return window.matchMedia("(prefers-reduced-motion: reduce)").matches}static checkDarkMode(){if(typeof window>"u")return!1;return window.matchMedia("(prefers-color-scheme: dark)").matches}static checkPageVisibility(){if(typeof document>"u")return!0;return!document.hidden}static prefersReducedMotion(){return this.checkReducedMotion()}static prefersDarkMode(){return this.checkDarkMode()}static getPixelRatio(J=2){if(typeof window>"u")return 1;let Z=window.devicePixelRatio||1;return Math.min(Z,J)}static isPageVisible(){if(typeof document>"u")return!0;return!document.hidden}static isSupported(){let J=this.detect();return J.isBrowser&&J.hasCanvas&&J.hasRAF}static getRecommendedSettings(){let J=this.detect();if(J.isMobile&&J.pixelRatio>2)return{maxPixelRatio:1.5,targetFPS:24,density:"sparse"};if(J.isMobile)return{maxPixelRatio:2,targetFPS:30,density:"normal"};if(J.isHighDPI)return{maxPixelRatio:2,targetFPS:30,density:"normal"};return{maxPixelRatio:1,targetFPS:30,density:"dense"}}static onVisibilityChange(J){if(typeof document>"u")return()=>{};if(this._visibilityListeners.add(J),!this._visibilityHandler)this._visibilityHandler=()=>{let Z=!document.hidden;for(let k of this._visibilityListeners)try{k(Z)}catch(Y){console.error("Error in visibility change handler:",Y)}},document.addEventListener("visibilitychange",this._visibilityHandler);return()=>{if(this._visibilityListeners.delete(J),this._visibilityListeners.size===0&&this._visibilityHandler)document.removeEventListener("visibilitychange",this._visibilityHandler),this._visibilityHandler=null}}static onReducedMotionChange(J){if(typeof window>"u")return()=>{};let Z=window.matchMedia("(prefers-reduced-motion: reduce)"),k=(Y)=>{this._cached=null,J(Y.matches)};if(Z.addEventListener)return Z.addEventListener("change",k),()=>Z.removeEventListener("change",k);return Z.addListener(k),()=>Z.removeListener(k)}static onDarkModeChange(J){if(typeof window>"u")return()=>{};let Z=window.matchMedia("(prefers-color-scheme: dark)"),k=(Y)=>{this._cached=null,J(Y.matches)};if(Z.addEventListener)return Z.addEventListener("change",k),()=>Z.removeEventListener("change",k);return Z.addListener(k),()=>Z.removeListener(k)}static onResize(J){if(typeof window>"u")return()=>{};let Z=()=>{this._cached=null,J(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Z),()=>window.removeEventListener("resize",Z)}};E6._cached=null;E6._visibilityListeners=new Set;E6._visibilityHandler=null;function gG(){return E6.prefersReducedMotion()}function xG(J){return E6.getPixelRatio(J)}function q6(J){let Z={};if(!J)return Z;for(let k of Object.keys(J))if(J[k]!==void 0)Z[k]=J[k];return Z}function mG(J,Z){let k,Y=(...R)=>{if(k!==void 0)clearTimeout(k);k=setTimeout(()=>J(...R),Z)};return Y.cancel=()=>{if(k!==void 0)clearTimeout(k),k=void 0},Y}function pG(J){if(typeof J==="number")return Math.max(0.1,Math.min(10,J));switch(J){case"ease-out":return 2;case"ease-in":return 0.5;case"ease-in-out":return 1;case"linear":default:return 1}}function F7(J,Z,k){if(Z<=0)return 0;let Y=J/Z;if(k==="linear"||k===1)return Y;if(k==="ease-in-out"){let Q=Y;return Q*Q*(3-2*Q)}let R=pG(k);if(R>1)return 1-Math.pow(1-Y,R);else return Math.pow(Y,1/R)}var G6={accent:pJ.DEFAULT_ACCENT,palette:"natural",flowerColors:[],foliageColors:[],accentWeight:0.4},uG={},LJ={duration:aZ.DEFAULT_DURATION,generations:aZ.DEFAULT_GENERATIONS,maxHeight:vG.DEFAULT_MAX_HEIGHT,density:"normal",categories:null,loop:!1,speed:1,autoplay:!0,respectReducedMotion:!0,maxPixelRatio:aZ.DEFAULT_MAX_PIXEL_RATIO,targetFPS:aZ.DEFAULT_TARGET_FPS,timingCurve:"linear",background:pJ.CANVAS_BACKGROUND,zIndex:-1,opacity:1,fadeHeight:0,fadeColor:pJ.DEFAULT_FADE_COLOR},dG={duration:"DURATION",generations:"GENERATIONS",maxHeight:"MAX_HEIGHT",speed:"SPEED",maxPixelRatio:"MAX_PIXEL_RATIO",targetFPS:"TARGET_FPS",opacity:"OPACITY",fadeHeight:"FADE_HEIGHT",zIndex:"Z_INDEX",seed:"SEED"};function NZ(J,Z,k){let Y=typeof J==="number"&&Number.isFinite(J)?J:Z,R=dG[k];if(!R)return Y;let{min:Q,max:X}=KQ[R];return Math.min(X,Math.max(Q,Y))}function lG(J){let{max:Z}=KQ.SEED;return(J%Z+Z)%Z}function cG(J,Z){let k=typeof J==="number"&&Number.isFinite(J)?J:Z;return Math.min(1,Math.max(0,k))}var nG=O7,sG=Object.keys(O7),iG=["natural","warm","cool","grayscale","vibrant","monotone"];function yk(J,Z,k){var Y;if(typeof process<"u"&&((Y=process==null?void 0:process.env)==null?void 0:Y.NODE_ENV)!=="production")console.warn("Garten: Invalid ".concat(J," ").concat(JSON.stringify(Z),"; using ").concat(JSON.stringify(k),"."))}function oG(J){if(J===void 0)return LJ.density;if(sG.includes(J))return J;return yk("density",J,LJ.density),LJ.density}function aG(J){if(J===void 0)return G6.palette;if(iG.includes(J))return J;return yk("colors.palette",J,G6.palette),G6.palette}function rG(J){if(J===void 0||J===null)return LJ.categories;if(Array.isArray(J))return J;return yk("categories",J,null),null}function tG(J){if(J===void 0)return LJ.timingCurve;if(typeof J==="number"&&!Number.isFinite(J))return yk("timingCurve",J,LJ.timingCurve),LJ.timingCurve;return J}function eG(J){try{return document.querySelector(J),!0}catch(Z){return!1}}function G7(J){var Z,k,Y,R,Q;let X;if(typeof J.container==="string"){if(typeof document>"u")throw Error("Garten: document is not available. Garten requires a browser environment when the container is given as a selector string.");if(!eG(J.container))throw Error('Garten: Invalid selector format "'.concat(J.container,'". Use simple selectors like "#id" or ".class".'));let W=document.querySelector(J.container);if(!W||!(W instanceof HTMLElement))throw Error('Garten: Container "'.concat(J.container,'" not found'));X=W}else X=J.container;if(typeof process<"u"&&((Z=process==null?void 0:process.env)==null?void 0:Z.NODE_ENV)!=="production"){if(!X.isConnected)console.warn("Garten: Container is not connected to the DOM. Animation may not render.")}let N={...G6,...q6(J.colors)},$={...N,palette:aG(N.palette),flowerColors:Array.isArray(N.flowerColors)?N.flowerColors:[],foliageColors:Array.isArray(N.foliageColors)?N.foliageColors:[],accentWeight:cG(N.accentWeight,G6.accentWeight)},K={...uG,...q6(J.events)};return{container:X,duration:NZ(J.duration,LJ.duration,"duration"),generations:NZ(J.generations,LJ.generations,"generations"),maxHeight:NZ(J.maxHeight,LJ.maxHeight,"maxHeight"),colors:$,density:oG(J.density),categories:rG(J.categories),loop:(k=J.loop)!=null?k:LJ.loop,speed:NZ(J.speed,LJ.speed,"speed"),autoplay:(Y=J.autoplay)!=null?Y:LJ.autoplay,respectReducedMotion:(R=J.respectReducedMotion)!=null?R:LJ.respectReducedMotion,seed:lG(typeof J.seed==="number"&&Number.isFinite(J.seed)?J.seed:Math.random()*1e5),maxPixelRatio:NZ(J.maxPixelRatio,LJ.maxPixelRatio,"maxPixelRatio"),targetFPS:NZ(J.targetFPS,LJ.targetFPS,"targetFPS"),timingCurve:tG(J.timingCurve),background:typeof J.background==="string"?J.background:LJ.background,zIndex:NZ(J.zIndex,LJ.zIndex,"zIndex"),opacity:NZ(J.opacity,LJ.opacity,"opacity"),fadeHeight:NZ(J.fadeHeight,LJ.fadeHeight,"fadeHeight"),fadeColor:(Q=J.fadeColor)!=null?Q:LJ.fadeColor,events:K}}var D7=((J)=>{return J[J.SimpleFlower=0]="SimpleFlower",J[J.Tulip=1]="Tulip",J[J.Daisy=2]="Daisy",J[J.Wildflower=3]="Wildflower",J[J.Grass=4]="Grass",J[J.Fern=5]="Fern",J[J.Bush=6]="Bush",J[J.Rose=7]="Rose",J[J.Lily=8]="Lily",J[J.Orchid=9]="Orchid",J[J.Succulent=10]="Succulent",J[J.Herb=11]="Herb",J[J.Specialty=12]="Specialty",J[J.TallFlower=13]="TallFlower",J[J.GiantGrass=14]="GiantGrass",J[J.Climber=15]="Climber",J[J.SmallTree=16]="SmallTree",J[J.Tropical=17]="Tropical",J[J.Conifer=18]="Conifer",J})(D7||{});var YQ={x:0,y:0};function $Z(J,Z,k,Y,R,Q,X,N){if(N<=0)return null;let $=Y*Math.min(1,N);J.beginPath(),J.moveTo(Z,k);let K=Z+X*$*vk.STEM_CP1_LEAN,W=k-$*vk.STEM_CP1_HEIGHT,U=Z+X*$*vk.STEM_CP2_LEAN,F=k-$*vk.STEM_CP2_HEIGHT,G=Z+X*$,B=k-$;return J.bezierCurveTo(K,W,U,F,G,B),J.strokeStyle=Q,J.lineWidth=R,J.lineCap=yG.LINE_CAP,J.stroke(),YQ.x=G,YQ.y=B,YQ}function cJ(J,Z,k,Y,R,Q){if(R<1)return;J.save(),J.translate(Z,k),J.rotate(Y),J.beginPath(),J.moveTo(0,0),J.bezierCurveTo(R*0.3,-R*0.15,R*0.7,-R*0.15,R,0),J.bezierCurveTo(R*0.7,R*0.15,R*0.3,R*0.15,0,0),J.fillStyle=Q,J.fill(),J.restore()}var q7={natural:["#E85D75","#D64550","#F4A4B0","#C71585","#F4D03F","#FFDB58","#FFE135","#DAA520","#9B72AA","#7B68EE","#6A5ACD","#8A2BE2","#FFFEF0","#FFF8DC","#FFEFD5","#FAF0E6"],warm:["#FF6B6B","#FFA07A","#FFD93D","#FF8C42","#E85D75","#F4A4B0","#FFDB58","#FFE135","#FFF8DC","#FFEFD5"],cool:["#7B68EE","#6A5ACD","#9B72AA","#8A2BE2","#87CEEB","#B0E0E6","#ADD8E6","#E6E6FA","#FFFEF0","#F0F8FF"],grayscale:["#FFFFFF","#F5F5F5","#E8E8E8","#DCDCDC","#D3D3D3","#C0C0C0","#A9A9A9","#989898"],vibrant:["#FF1493","#FF4500","#FFD700","#32CD32","#00CED1","#1E90FF","#9400D3","#FF69B4","#FFA500","#ADFF2F"],monotone:[]},Jq={natural:{leaves:["#228B22","#2E8B57","#3CB371","#6B8E23","#556B2F","#8FBC8F"],stems:["#2D5A27","#3D6B37","#4A7C40","#5D8A52"]},warm:{leaves:["#6B8E23","#808000","#9ACD32","#7CFC00","#556B2F"],stems:["#5D5A27","#6D6B37","#5A6C40","#7D8A52"]},cool:{leaves:["#2E8B57","#20B2AA","#3CB371","#00FA9A","#66CDAA"],stems:["#2D5A47","#3D6B57","#4A7C60","#5D8A72"]},grayscale:{leaves:["#696969","#808080","#A9A9A9","#778899","#708090"],stems:["#4D4D4D","#5D5D5D","#6A6A6A","#7D7D7D"]},vibrant:{leaves:["#00FF00","#32CD32","#00FA9A","#7FFF00","#ADFF2F"],stems:["#228B22","#008000","#006400","#2E8B57"]},monotone:{leaves:[],stems:[]}};function Zq(J){return[J,F6(J,0.15),eJ(J,0.15),F6(J,0.3),eJ(J,0.08)]}function kq(J){return[F6(J,0.45),F6(J,0.3),F6(J,0.15),J,eJ(J,0.1),eJ(J,0.2),eJ(J,0.35)]}function Yq(J){return{leaves:[eJ(J,0.25),eJ(J,0.35),eJ(J,0.3),eJ(J,0.4),eJ(J,0.2)],stems:[eJ(J,0.5),eJ(J,0.55),eJ(J,0.6),eJ(J,0.45)]}}var Rq=9;function Qq(J){var Z,k;let Y=(Z=J.flowerColors)!=null?Z:[];if(Y.length>0)return Y;if(J.palette==="grayscale")return q7.grayscale;if(J.palette==="monotone")return kq(J.accent);let R=q7[J.palette],Q=Math.min(1,Math.max(0,(k=J.accentWeight)!=null?k:0));if(Q<=0)return[...R];let X=Zq(J.accent);if(Q>=1)return[...X];let N=Math.min(R.length*Rq,Math.max(1,Math.round(R.length*Q/(1-Q)))),$=[];for(let K=0;K<N;K++)$.push(X[K%X.length]);return $.push(...R),$}function Xq(J){var Z;let k=(Z=J.foliageColors)!=null?Z:[];if(k.length>0)return{leaves:k,stems:k.map((Y)=>eJ(Y,0.2))};if(J.palette==="monotone")return Yq(J.accent);return Jq[J.palette]}var E7={sizeMultiplier:w1.SIZE_MULTIPLIER,heightMultiplier:w1.HEIGHT_MULTIPLIER,petalCountModifier:w1.PETAL_COUNT_MODIFIER,thicknessMultiplier:w1.THICKNESS_MULTIPLIER,leanMultiplier:w1.LEAN_MULTIPLIER,complexity:w1.COMPLEXITY},Nq=new Map([["simple-flower-small",{sizeMultiplier:0.7,heightMultiplier:0.8,petalCountModifier:-1,thicknessMultiplier:0.8,complexity:0.3}],["simple-flower-large",{sizeMultiplier:1.4,heightMultiplier:1.1,petalCountModifier:2,thicknessMultiplier:1.2,leanMultiplier:0.8,complexity:0.7}],["simple-flower-tall",{sizeMultiplier:0.9,heightMultiplier:1.3,thicknessMultiplier:0.9,leanMultiplier:0.7}],["simple-flower-short",{sizeMultiplier:1.1,heightMultiplier:0.7,petalCountModifier:1,thicknessMultiplier:1.1,leanMultiplier:1.2,complexity:0.4}],["simple-flower-wide",{sizeMultiplier:1.3,heightMultiplier:0.9,petalCountModifier:3,complexity:0.6}],["simple-flower-narrow",{sizeMultiplier:0.8,heightMultiplier:1.1,petalCountModifier:-2,thicknessMultiplier:0.8,leanMultiplier:0.9,complexity:0.4}],["simple-flower-double",{sizeMultiplier:1.2,petalCountModifier:5,thicknessMultiplier:1.1,leanMultiplier:0.9,complexity:0.8}],["simple-flower-clustered",{sizeMultiplier:0.6,heightMultiplier:0.9,petalCountModifier:-1,thicknessMultiplier:0.9,leanMultiplier:1.3,complexity:0.7}],["simple-flower-spiral",{petalCountModifier:2,leanMultiplier:1.5,complexity:0.9}],["tulip",{leanMultiplier:0.5}],["tulip-tall",{sizeMultiplier:0.9,heightMultiplier:1.3,thicknessMultiplier:0.9,leanMultiplier:0.4}],["tulip-short",{sizeMultiplier:1.1,heightMultiplier:0.7,thicknessMultiplier:1.1,leanMultiplier:0.6,complexity:0.4}],["tulip-double",{sizeMultiplier:1.2,petalCountModifier:3,thicknessMultiplier:1.1,leanMultiplier:0.5,complexity:0.8}],["tulip-fringed",{leanMultiplier:0.5,complexity:0.9}],["tulip-parrot",{sizeMultiplier:1.3,heightMultiplier:0.95,petalCountModifier:2,leanMultiplier:0.7,complexity:1}],["tulip-lily",{sizeMultiplier:1.1,heightMultiplier:1.1,thicknessMultiplier:0.9,leanMultiplier:0.6,complexity:0.6}],["tulip-rembrandt",{leanMultiplier:0.5,complexity:0.7}],["tulip-darwin",{sizeMultiplier:1.15,heightMultiplier:1.2,leanMultiplier:0.4}],["tulip-triumph",{sizeMultiplier:1.05,heightMultiplier:1.1,thicknessMultiplier:1.05,leanMultiplier:0.5}],["daisy-small",{sizeMultiplier:0.7,heightMultiplier:0.8,petalCountModifier:-2,thicknessMultiplier:0.8,complexity:0.3}],["daisy-large",{sizeMultiplier:1.4,heightMultiplier:1.1,petalCountModifier:4,thicknessMultiplier:1.2,leanMultiplier:0.8,complexity:0.7}],["daisy-double",{sizeMultiplier:1.2,petalCountModifier:8,thicknessMultiplier:1.1,leanMultiplier:0.9,complexity:0.9}],["daisy-gerbera",{sizeMultiplier:1.5,petalCountModifier:6,thicknessMultiplier:1.3,leanMultiplier:0.7,complexity:0.8}],["daisy-shasta",{sizeMultiplier:1.3,heightMultiplier:1.15,petalCountModifier:4,thicknessMultiplier:1.1,leanMultiplier:0.8,complexity:0.6}],["daisy-african",{sizeMultiplier:1.1,heightMultiplier:0.9,petalCountModifier:2,complexity:0.7}],["daisy-oxeye",{sizeMultiplier:0.9,thicknessMultiplier:0.9,leanMultiplier:1.1,complexity:0.4}],["daisy-painted",{heightMultiplier:0.95,petalCountModifier:2,complexity:0.8}],["daisy-marguerite",{sizeMultiplier:1.1,heightMultiplier:1.05,petalCountModifier:3,leanMultiplier:0.9}],["wildflower-clustered",{sizeMultiplier:0.8,heightMultiplier:0.9,petalCountModifier:2,thicknessMultiplier:0.9,leanMultiplier:1.2,complexity:0.7}],["wildflower-scattered",{sizeMultiplier:0.7,petalCountModifier:-1,thicknessMultiplier:0.8,leanMultiplier:1.5,complexity:0.6}],["wildflower-tall",{sizeMultiplier:0.9,heightMultiplier:1.4,thicknessMultiplier:0.9,leanMultiplier:0.8}],["wildflower-meadow",{sizeMultiplier:1.1,petalCountModifier:1,leanMultiplier:1.3,complexity:0.6}],["wildflower-prairie",{heightMultiplier:1.2,thicknessMultiplier:1.1}],["wildflower-alpine",{sizeMultiplier:0.6,heightMultiplier:0.7,petalCountModifier:-1,thicknessMultiplier:0.8,leanMultiplier:0.8,complexity:0.4}],["wildflower-woodland",{sizeMultiplier:0.9,heightMultiplier:0.9,petalCountModifier:1,thicknessMultiplier:0.9,leanMultiplier:1.1,complexity:0.6}],["wildflower-coastal",{sizeMultiplier:0.8,heightMultiplier:0.8,leanMultiplier:1.4}],["wildflower-desert",{sizeMultiplier:0.7,heightMultiplier:0.6,petalCountModifier:-1,thicknessMultiplier:1.1,leanMultiplier:0.9,complexity:0.4}],["grass",{complexity:0.3}],["grass-tall",{heightMultiplier:1.5,petalCountModifier:1,thicknessMultiplier:0.9,leanMultiplier:0.8,complexity:0.4}],["grass-short",{heightMultiplier:0.6,thicknessMultiplier:1.1,leanMultiplier:1.2,complexity:0.2}],["grass-wispy",{sizeMultiplier:0.8,heightMultiplier:1.2,petalCountModifier:2,thicknessMultiplier:0.6,leanMultiplier:1.5}],["grass-thick",{sizeMultiplier:1.2,heightMultiplier:0.9,petalCountModifier:-1,thicknessMultiplier:1.5,leanMultiplier:0.7,complexity:0.3}],["grass-pampas",{sizeMultiplier:1.3,heightMultiplier:1.8,petalCountModifier:3,thicknessMultiplier:1.2,complexity:0.8}],["grass-fountain",{sizeMultiplier:1.1,heightMultiplier:1.3,petalCountModifier:4,thicknessMultiplier:0.8,leanMultiplier:1.8,complexity:0.7}],["grass-blue",{sizeMultiplier:0.9,heightMultiplier:0.8,petalCountModifier:1,complexity:0.4}],["grass-feather",{heightMultiplier:1.4,petalCountModifier:2,thicknessMultiplier:0.7,leanMultiplier:1.3,complexity:0.6}],["grass-reed",{sizeMultiplier:0.9,heightMultiplier:1.6,thicknessMultiplier:1.3,leanMultiplier:0.5,complexity:0.4}],["fern",{complexity:0.6}],["fern-small",{sizeMultiplier:0.6,heightMultiplier:0.7,petalCountModifier:-2,thicknessMultiplier:0.8,complexity:0.4}],["fern-large",{sizeMultiplier:1.4,heightMultiplier:1.3,petalCountModifier:3,thicknessMultiplier:1.2,leanMultiplier:0.8,complexity:0.8}],["fern-curly",{heightMultiplier:0.9,petalCountModifier:1,leanMultiplier:1.8,complexity:0.9}],["fern-straight",{sizeMultiplier:0.9,heightMultiplier:1.2,leanMultiplier:0.3,complexity:0.4}],["fern-maidenhair",{sizeMultiplier:0.7,heightMultiplier:0.8,petalCountModifier:4,thicknessMultiplier:0.6,leanMultiplier:1.5,complexity:0.9}],["fern-boston",{sizeMultiplier:1.2,petalCountModifier:2,leanMultiplier:1.6,complexity:0.7}],["fern-staghorn",{sizeMultiplier:1.3,heightMultiplier:0.9,thicknessMultiplier:1.3,complexity:0.8}],["fern-bird",{sizeMultiplier:1.1,heightMultiplier:1.1,petalCountModifier:-1,thicknessMultiplier:1.2,leanMultiplier:0.7}],["fern-tree",{sizeMultiplier:1.5,heightMultiplier:1.5,petalCountModifier:4,thicknessMultiplier:1.4,leanMultiplier:0.5,complexity:0.9}],["bush",{complexity:0.6}],["bush-small",{sizeMultiplier:0.6,heightMultiplier:0.7,petalCountModifier:-2,thicknessMultiplier:0.9,complexity:0.4}],["bush-large",{sizeMultiplier:1.5,heightMultiplier:1.3,petalCountModifier:3,thicknessMultiplier:1.2,leanMultiplier:0.8,complexity:0.8}],["bush-flowering",{sizeMultiplier:1.1,petalCountModifier:4,complexity:0.9}],["bush-berry",{sizeMultiplier:0.9,heightMultiplier:0.9,thicknessMultiplier:1.1,leanMultiplier:0.9,complexity:0.7}],["bush-round",{sizeMultiplier:1.2,heightMultiplier:0.8,petalCountModifier:2,thicknessMultiplier:1.2,leanMultiplier:0.5}],["bush-spreading",{sizeMultiplier:1.3,heightMultiplier:0.7,petalCountModifier:1,leanMultiplier:1.5,complexity:0.6}],["bush-compact",{sizeMultiplier:0.8,heightMultiplier:0.8,thicknessMultiplier:1.3,leanMultiplier:0.7,complexity:0.4}],["bush-wild",{sizeMultiplier:1.1,heightMultiplier:1.1,petalCountModifier:2,thicknessMultiplier:0.9,leanMultiplier:1.4,complexity:0.8}],["bush-ornamental",{petalCountModifier:3,leanMultiplier:0.8,complexity:0.7}],["rose",{leanMultiplier:0.8,complexity:0.8}],["rose-climbing",{sizeMultiplier:0.9,heightMultiplier:1.5,thicknessMultiplier:0.9,leanMultiplier:1.2,complexity:0.7}],["rose-miniature",{sizeMultiplier:0.5,heightMultiplier:0.6,petalCountModifier:-2,thicknessMultiplier:0.7,leanMultiplier:0.9,complexity:0.6}],["rose-wild",{sizeMultiplier:0.8,heightMultiplier:1.1,petalCountModifier:-3,thicknessMultiplier:0.8,leanMultiplier:1.3}],["rose-double",{sizeMultiplier:1.2,petalCountModifier:8,thicknessMultiplier:1.1,leanMultiplier:0.7,complexity:1}],["lily",{leanMultiplier:0.7,complexity:0.7}],["lily-tiger",{sizeMultiplier:1.1,heightMultiplier:1.1,leanMultiplier:0.8,complexity:0.9}],["lily-calla",{sizeMultiplier:0.9,heightMultiplier:1.2,petalCountModifier:-4,thicknessMultiplier:1.1,leanMultiplier:0.5,complexity:0.6}],["lily-daylily",{heightMultiplier:0.9,thicknessMultiplier:0.9}],["lily-stargazer",{sizeMultiplier:1.2,leanMultiplier:0.6,complexity:0.8}],["orchid",{leanMultiplier:0.6,complexity:0.9}],["orchid-moth",{sizeMultiplier:1.1,heightMultiplier:0.9,thicknessMultiplier:0.9,leanMultiplier:0.7,complexity:0.8}],["orchid-dendrobium",{sizeMultiplier:0.8,heightMultiplier:1.2,petalCountModifier:2,thicknessMultiplier:0.8,leanMultiplier:0.8,complexity:0.9}],["orchid-cattleya",{sizeMultiplier:1.3,heightMultiplier:0.95,thicknessMultiplier:1.1,leanMultiplier:0.5,complexity:1}],["orchid-vanda",{heightMultiplier:1.1,petalCountModifier:1,thicknessMultiplier:0.9,leanMultiplier:0.7,complexity:0.85}],["succulent",{thicknessMultiplier:1.5,leanMultiplier:0.3}],["succulent-rosette",{sizeMultiplier:1.1,heightMultiplier:0.6,petalCountModifier:3,thicknessMultiplier:1.4,leanMultiplier:0.2,complexity:0.7}],["succulent-spiky",{sizeMultiplier:0.9,heightMultiplier:1.2,petalCountModifier:-2,thicknessMultiplier:1.6,leanMultiplier:0.4,complexity:0.6}],["succulent-trailing",{sizeMultiplier:0.7,heightMultiplier:0.5,petalCountModifier:2,thicknessMultiplier:1.3,leanMultiplier:2,complexity:0.6}],["succulent-flowering",{heightMultiplier:0.8,petalCountModifier:4,thicknessMultiplier:1.4,leanMultiplier:0.3,complexity:0.8}],["lavender",{thicknessMultiplier:0.8,leanMultiplier:0.8,complexity:0.7}],["lavender-tall",{sizeMultiplier:0.9,heightMultiplier:1.4,petalCountModifier:2,thicknessMultiplier:0.7,leanMultiplier:0.6,complexity:0.7}],["sage",{sizeMultiplier:1.1,heightMultiplier:0.8,thicknessMultiplier:1.1,leanMultiplier:0.9}],["thyme",{sizeMultiplier:0.6,heightMultiplier:0.5,petalCountModifier:-1,thicknessMultiplier:0.7,leanMultiplier:1.2,complexity:0.4}],["rosemary",{sizeMultiplier:0.8,heightMultiplier:1.1,thicknessMultiplier:0.9,leanMultiplier:0.7,complexity:0.6}],["poppy",{petalCountModifier:-1,thicknessMultiplier:0.8,leanMultiplier:1.2,complexity:0.6}],["sunflower",{sizeMultiplier:1.8,heightMultiplier:1.6,petalCountModifier:8,thicknessMultiplier:1.5,leanMultiplier:0.4,complexity:0.7}],["iris",{sizeMultiplier:1.1,heightMultiplier:1.2,leanMultiplier:0.5,complexity:0.8}],["peony",{sizeMultiplier:1.4,heightMultiplier:0.9,petalCountModifier:10,thicknessMultiplier:1.3,leanMultiplier:0.6,complexity:1}],["hydrangea",{sizeMultiplier:1.5,heightMultiplier:0.85,petalCountModifier:15,thicknessMultiplier:1.4,leanMultiplier:0.5,complexity:0.9}],["dahlia",{sizeMultiplier:1.3,petalCountModifier:12,thicknessMultiplier:1.2,leanMultiplier:0.6,complexity:0.95}],["hollyhock",{thicknessMultiplier:1.2,leanMultiplier:0.3,complexity:0.7}],["hollyhock-double",{sizeMultiplier:1.2,heightMultiplier:1.1,petalCountModifier:5,thicknessMultiplier:1.3,leanMultiplier:0.2,complexity:0.9}],["delphinium",{sizeMultiplier:0.8,heightMultiplier:1.2,petalCountModifier:2,leanMultiplier:0.2,complexity:0.8}],["delphinium-tall",{sizeMultiplier:0.7,heightMultiplier:1.4,petalCountModifier:3,thicknessMultiplier:0.9,leanMultiplier:0.15,complexity:0.85}],["foxglove",{sizeMultiplier:0.9,heightMultiplier:1.1,thicknessMultiplier:1.1,leanMultiplier:0.25,complexity:0.75}],["foxglove-tall",{sizeMultiplier:0.85,heightMultiplier:1.3,petalCountModifier:2,leanMultiplier:0.2,complexity:0.8}],["gladiolus",{sizeMultiplier:1.1,heightMultiplier:1.15,petalCountModifier:1,thicknessMultiplier:1.2,leanMultiplier:0.2,complexity:0.7}],["lupine",{sizeMultiplier:0.9,petalCountModifier:4,leanMultiplier:0.3,complexity:0.75}],["bamboo",{thicknessMultiplier:0.8,leanMultiplier:0.15,complexity:0.6}],["bamboo-tall",{sizeMultiplier:0.9,heightMultiplier:1.3,thicknessMultiplier:0.7,leanMultiplier:0.1,complexity:0.65}],["bamboo-clump",{sizeMultiplier:1.2,heightMultiplier:0.9,petalCountModifier:3,thicknessMultiplier:0.9,leanMultiplier:0.2,complexity:0.7}],["giant-reed",{sizeMultiplier:1.1,heightMultiplier:1.1,leanMultiplier:0.25}],["elephant-grass",{sizeMultiplier:1.3,heightMultiplier:1.2,petalCountModifier:2,thicknessMultiplier:1.2,leanMultiplier:0.3,complexity:0.55}],["miscanthus",{petalCountModifier:1,thicknessMultiplier:0.9,leanMultiplier:0.35,complexity:0.6}],["miscanthus-tall",{sizeMultiplier:0.95,heightMultiplier:1.25,petalCountModifier:2,thicknessMultiplier:0.85,leanMultiplier:0.3,complexity:0.65}],["cortaderia",{sizeMultiplier:1.4,heightMultiplier:1.15,petalCountModifier:3,thicknessMultiplier:1.1,leanMultiplier:0.4,complexity:0.7}],["vine",{thicknessMultiplier:0.6,leanMultiplier:0.8,complexity:0.6}],["vine-flowering",{sizeMultiplier:1.2,petalCountModifier:3,thicknessMultiplier:0.7,leanMultiplier:0.7,complexity:0.75}],["vine-ivy",{sizeMultiplier:0.8,heightMultiplier:1.1,thicknessMultiplier:0.5,leanMultiplier:0.9,complexity:0.7}],["wisteria",{sizeMultiplier:1.3,heightMultiplier:1.15,petalCountModifier:5,thicknessMultiplier:0.8,leanMultiplier:0.6,complexity:0.85}],["wisteria-cascade",{sizeMultiplier:1.4,heightMultiplier:1.25,petalCountModifier:8,thicknessMultiplier:0.9,leanMultiplier:0.5,complexity:0.9}],["clematis",{sizeMultiplier:1.1,petalCountModifier:2,thicknessMultiplier:0.6,leanMultiplier:0.75,complexity:0.7}],["clematis-large",{sizeMultiplier:1.4,heightMultiplier:1.1,petalCountModifier:4,thicknessMultiplier:0.7,leanMultiplier:0.65,complexity:0.8}],["morning-glory",{sizeMultiplier:1.2,heightMultiplier:1.05,thicknessMultiplier:0.55,leanMultiplier:0.85,complexity:0.65}],["sapling",{leanMultiplier:0.1}],["sapling-oak",{sizeMultiplier:1.2,heightMultiplier:0.95,petalCountModifier:2,thicknessMultiplier:1.3,leanMultiplier:0.08,complexity:0.6}],["sapling-maple",{sizeMultiplier:1.1,petalCountModifier:3,thicknessMultiplier:1.1,leanMultiplier:0.12,complexity:0.65}],["sapling-birch",{sizeMultiplier:0.9,heightMultiplier:1.15,petalCountModifier:1,thicknessMultiplier:0.8,leanMultiplier:0.15,complexity:0.55}],["tree-young",{sizeMultiplier:1.15,heightMultiplier:1.1,petalCountModifier:2,thicknessMultiplier:1.2,leanMultiplier:0.1,complexity:0.6}],["tree-ornamental",{sizeMultiplier:1.3,heightMultiplier:0.9,petalCountModifier:5,thicknessMultiplier:1.1,leanMultiplier:0.12,complexity:0.75}],["birch",{sizeMultiplier:0.85,heightMultiplier:1.2,thicknessMultiplier:0.75,leanMultiplier:0.18,complexity:0.6}],["willow",{sizeMultiplier:1.2,petalCountModifier:4,leanMultiplier:0.2,complexity:0.7}],["willow-weeping",{sizeMultiplier:1.4,heightMultiplier:1.1,petalCountModifier:6,thicknessMultiplier:1.1,leanMultiplier:0.15,complexity:0.85}],["cherry-blossom",{sizeMultiplier:1.3,heightMultiplier:0.95,petalCountModifier:8,leanMultiplier:0.12,complexity:0.9}],["palm-small",{leanMultiplier:0.15,complexity:0.6}],["palm-fan",{sizeMultiplier:1.3,heightMultiplier:0.9,petalCountModifier:3,thicknessMultiplier:1.2,leanMultiplier:0.1,complexity:0.7}],["bird-of-paradise",{sizeMultiplier:1.1,thicknessMultiplier:0.9,leanMultiplier:0.2,complexity:0.8}],["bird-of-paradise-tall",{heightMultiplier:1.2,petalCountModifier:1,thicknessMultiplier:0.85,leanMultiplier:0.18,complexity:0.85}],["banana",{sizeMultiplier:1.4,heightMultiplier:1.1,petalCountModifier:2,thicknessMultiplier:1.4,leanMultiplier:0.12,complexity:0.65}],["banana-small",{sizeMultiplier:1.1,heightMultiplier:0.85,petalCountModifier:1,thicknessMultiplier:1.2,leanMultiplier:0.15,complexity:0.6}],["pine",{thicknessMultiplier:1.2,leanMultiplier:0.05,complexity:0.6}],["pine-young",{sizeMultiplier:0.8,heightMultiplier:0.85,petalCountModifier:-1,leanMultiplier:0.08}],["cypress",{sizeMultiplier:0.7,heightMultiplier:1.15,thicknessMultiplier:0.9,leanMultiplier:0.03,complexity:0.55}],["cypress-tall",{sizeMultiplier:0.6,heightMultiplier:1.3,thicknessMultiplier:0.85,leanMultiplier:0.02,complexity:0.6}],["juniper",{sizeMultiplier:1.1,heightMultiplier:0.9,petalCountModifier:1,thicknessMultiplier:1.1,leanMultiplier:0.1,complexity:0.55}],["juniper-tall",{sizeMultiplier:0.9,heightMultiplier:1.1,leanMultiplier:0.07,complexity:0.6}]]);function A7(J){let Z=Nq.get(J);if(!Z)return E7;return{...E7,...Z}}var $Q={"simple-flower":0,tulip:1,daisy:2,wildflower:3,grass:4,fern:5,bush:6,rose:7,lily:8,orchid:9,succulent:10,herb:11,specialty:12,"tall-flower":13,"giant-grass":14,climber:15,"small-tree":16,tropical:17,conifer:18},EO=Object.keys($Q);function $q(J){var Z;if(!J||J.length===0)return null;let k=new Set;for(let Y of J){let R=$Q[Y.toLowerCase()];if(R!==void 0)k.add(R);else if(typeof process<"u"&&((Z=process==null?void 0:process.env)==null?void 0:Z.NODE_ENV)!=="production"){let Q=Object.keys($Q).join(", ");console.warn('Garten: Unknown category "'.concat(Y,'". Valid categories: ').concat(Q))}}return k.size>0?k:null}var Kq=[{category:0,weight:0.15},{category:1,weight:0.1},{category:2,weight:0.1},{category:3,weight:0.1},{category:4,weight:0.12},{category:5,weight:0.08},{category:6,weight:0.08},{category:7,weight:0.06},{category:8,weight:0.05},{category:9,weight:0.04},{category:10,weight:0.04},{category:11,weight:0.04},{category:12,weight:0.04},{category:13,weight:0.06},{category:14,weight:0.05},{category:15,weight:0.04},{category:16,weight:0.04},{category:17,weight:0.03},{category:18,weight:0.03}],M7={[0]:["simple-flower","simple-flower-small","simple-flower-large","simple-flower-tall","simple-flower-short","simple-flower-wide","simple-flower-narrow","simple-flower-double","simple-flower-clustered","simple-flower-spiral"],[1]:["tulip","tulip-tall","tulip-short","tulip-double","tulip-fringed","tulip-parrot","tulip-lily","tulip-rembrandt","tulip-darwin","tulip-triumph"],[2]:["daisy","daisy-small","daisy-large","daisy-double","daisy-gerbera","daisy-shasta","daisy-african","daisy-oxeye","daisy-painted","daisy-marguerite"],[3]:["wildflower","wildflower-clustered","wildflower-scattered","wildflower-tall","wildflower-meadow","wildflower-prairie","wildflower-alpine","wildflower-woodland","wildflower-coastal","wildflower-desert"],[4]:["grass","grass-tall","grass-short","grass-wispy","grass-thick","grass-pampas","grass-fountain","grass-blue","grass-feather","grass-reed"],[5]:["fern","fern-small","fern-large","fern-curly","fern-straight","fern-maidenhair","fern-boston","fern-staghorn","fern-bird","fern-tree"],[6]:["bush","bush-small","bush-large","bush-flowering","bush-berry","bush-round","bush-spreading","bush-compact","bush-wild","bush-ornamental"],[7]:["rose","rose-climbing","rose-miniature","rose-wild","rose-double"],[8]:["lily","lily-tiger","lily-calla","lily-daylily","lily-stargazer"],[9]:["orchid","orchid-moth","orchid-dendrobium","orchid-cattleya","orchid-vanda"],[10]:["succulent","succulent-rosette","succulent-spiky","succulent-trailing","succulent-flowering"],[11]:["lavender","lavender-tall","sage","thyme","rosemary"],[12]:["poppy","sunflower","iris","peony","hydrangea","dahlia"],[13]:["hollyhock","hollyhock-double","delphinium","delphinium-tall","foxglove","foxglove-tall","gladiolus","lupine"],[14]:["bamboo","bamboo-tall","bamboo-clump","giant-reed","elephant-grass","miscanthus","miscanthus-tall","cortaderia"],[15]:["vine","vine-flowering","vine-ivy","wisteria","wisteria-cascade","clematis","clematis-large","morning-glory"],[16]:["sapling","sapling-oak","sapling-maple","sapling-birch","tree-young","tree-ornamental","birch","willow","willow-weeping","cherry-blossom"],[17]:["palm-small","palm-fan","bird-of-paradise","bird-of-paradise-tall","banana","banana-small"],[18]:["pine","pine-young","cypress","cypress-tall","juniper","juniper-tall"]},z7={[0]:[0.1,0.22],[1]:[0.12,0.22],[2]:[0.1,0.2],[3]:[0.08,0.18],[4]:[0.03,0.1],[5]:[0.06,0.14],[6]:[0.08,0.16],[7]:[0.12,0.25],[8]:[0.14,0.26],[9]:[0.1,0.2],[10]:[0.04,0.1],[11]:[0.06,0.14],[12]:[0.12,0.28],[13]:[0.3,0.5],[14]:[0.4,0.7],[15]:[0.5,0.9],[16]:[0.6,1],[17]:[0.5,0.85],[18]:[0.55,1]},bk=new Map;for(let J of Object.values(D7).filter((Z)=>typeof Z==="number")){let Z=M7[J];if(Z)for(let k of Z)bk.set(k,J)}var Uq=new Set([13,14,15,16,17,18]);function Wq(J,Z){var k;let Y=Kq.filter(({category:N})=>{let[$]=z7[N];if($>J)return!1;if(Z&&!Z.has(N))return!1;return!0});if(Y.length===0){if(typeof process<"u"&&((k=process==null?void 0:process.env)==null?void 0:k.NODE_ENV)!=="production")console.warn("Garten: No categories available for current maxHeight. Falling back to SimpleFlower.");let N=Z&&Z.size>0?Z.values().next().value:0;return{adjustedWeights:[{category:N,weight:1}],totalWeight:1,fallback:N}}let R=1+Math.max(0,(J-0.35)/0.65)*3,Q=0;return{adjustedWeights:Y.map(({category:N,weight:$})=>{let K=Uq.has(N)?$*R:$;return Q+=K,{category:N,weight:K}}),totalWeight:Q,fallback:Y[0].category}}function Fq(J,Z){let{adjustedWeights:k,totalWeight:Y,fallback:R}=Z,Q=J()*Y,X=0;for(let{category:N,weight:$}of k)if(X+=$,Q<X)return N;return R}function Gq(J,Z){let k=Fq(J,Z),Y=M7[k];if(!Y||Y.length===0)return"simple-flower";return Y[Math.floor(J()*Y.length)]}function qq(J,Z){var k;let Y=(k=bk.get(J))!=null?k:0,[R,Q]=z7[Y];return[R,Math.min(Q,Z)]}function Eq(J,Z,k,Y){let R=Z-J;if(k>0.5&&Z>0.4){let Q=(k-0.5)/0.5,X=Math.pow(Y(),1-Q*0.5);return J+R*X}return J+R*Y()}var B7=1e5,Bq=137,Vq=50000;function RQ(J){var Z;let{duration:k,generations:Y,maxHeight:R,density:Q,seed:X,colors:N,timingCurve:$,categories:K}=J,[W,U]=nG[Q],F=$q(K),G=Wq(R,F),B=Qq(N),V=Xq(N);if(B.length===0)throw Error("Garten: No flower colors available. Check palette configuration.");if(V.leaves.length===0||V.stems.length===0)throw Error("Garten: No foliage colors available. Check palette configuration.");let E=[],q=0;for(let O=0;O<Y;O++){let A=F7(O,Y,$),H=F7(O+1,Y,$),_=A*k,C=(H-A)*k,I=W7(X+O*B7+Vq),M=Math.floor(kQ(W,U+1,I));for(let j=0;j<M;j++){let y=X+O*B7+j*Bq,P=W7(y),S=Gq(P,G),g=P(),[w,v]=qq(S,R),s=Eq(w,v,R,P),h=Math.floor(P()*B.length),J0=Math.floor(P()*V.leaves.length),l=Math.floor(P()*V.stems.length),o=Math.max(0.1,k*0.01),n=_+P()*C*0.5,I0=Math.min(n,k-o),e=C*kQ(0.6,1,P),Y0=Math.max(o,Math.min(e,k-I0)),O0=5+Math.floor(P()*4),_0=(P()-0.5)*0.3,f0=Math.max(0.1,kQ(0.7,1.2,P)),H0=(Z=bk.get(S))!=null?Z:0,t0=A7(S);E.push({id:q++,type:S,x:g,maxHeight:s,flowerColor:B[h],stemColor:V.stems[l],leafColor:V.leaves[J0],delay:I0,growDuration:Y0,seed:y,petals:O0,lean:_0,scale:f0,generation:O,category:H0,variation:t0})}}return E.sort((O,A)=>A.maxHeight-O.maxHeight),E}function QQ(J,Z,k){if(k<=0||Z<=0||!Number.isFinite(J)||J<=0)return 0;let Y=Z/k;return Math.min(k,Math.floor(J/Y))}function Iq(J){var Z;return(Z=bk.get(J))!=null?Z:0}var L7=class J{constructor(Z,k=J.defaultConfig){this._config=k,this._progress=Math.max(0,Math.min(1,Z)),this._stem=Math.min(1,this._progress*k.stemRate),this._leaf=Math.max(0,Math.min(1,(this._progress-k.leafStart)*k.leafRate)),this._flower=Math.max(0,Math.min(1,(this._progress-k.flowerStart)*k.flowerRate)),this._foliage=Math.max(0,Math.min(1,(this._progress-J8.FOLIAGE_START)*J8.FOLIAGE_GROWTH_RATE)),this._plume=this._progress>J8.PLUME_START?(this._progress-J8.PLUME_START)/(1-J8.PLUME_START):0}static calculate(Z,k,Y,R){let Q=(Z-k)/Y;return new J(Q,J.mergeConfig(R))}static fromProgress(Z,k){return new J(Z,J.mergeConfig(k))}static mergeConfig(Z){if(!Z)return J.defaultConfig;return{...J.defaultConfig,...q6(Z)}}static inactive(){return new J(0)}static complete(){return new J(1)}get progress(){return this._progress}get stem(){return this._stem}get leaf(){return this._leaf}get flower(){return this._flower}get foliage(){return this._foliage}get plume(){return this._plume}get isActive(){return this._progress>0}get isComplete(){return this._progress>=1}get hasLeaves(){return this._leaf>0}get hasFlower(){return this._flower>0}get hasFoliage(){return this._foliage>0}get hasPlume(){return this._plume>0}toObject(){return{progress:this._progress,stem:this._stem,leaf:this._leaf,flower:this._flower}}toExtendedObject(){return{progress:this._progress,stem:this._stem,leaf:this._leaf,flower:this._flower,foliage:this._foliage,plume:this._plume}}isInRange(Z,k){return this._progress>=Z&&this._progress<k}getPhaseProgress(Z,k){if(this._progress<=Z)return 0;if(this._progress>=k)return 1;return(this._progress-Z)/(k-Z)}eased(Z="linear"){let k=this._progress;switch(Z){case"ease-in":return k*k;case"ease-out":return k*(2-k);case"ease-in-out":return k<0.5?2*k*k:-1+(4-2*k)*k;case"linear":default:return k}}easedStem(Z="ease-out"){return this._applyEasing(this._stem,Z)}easedFlower(Z="ease-out"){return this._applyEasing(this._flower,Z)}_applyEasing(Z,k){let Y=Z;switch(k){case"ease-in":return Y*Y;case"ease-out":return Y*(2-Y);case"ease-in-out":return Y<0.5?2*Y*Y:-1+(4-2*Y)*Y;case"linear":default:return Y}}equals(Z){return this._progress===Z._progress&&this._stem===Z._stem&&this._leaf===Z._leaf&&this._flower===Z._flower&&this._foliage===Z._foliage&&this._plume===Z._plume}approximatelyEquals(Z,k=0.0001){return Math.abs(this._progress-Z._progress)<k&&Math.abs(this._stem-Z._stem)<k&&Math.abs(this._leaf-Z._leaf)<k&&Math.abs(this._flower-Z._flower)<k&&Math.abs(this._foliage-Z._foliage)<k&&Math.abs(this._plume-Z._plume)<k}clone(){return new J(this._progress,this._config)}toString(){return"GrowthProgress(".concat(this._progress.toFixed(2),": stem=").concat(this._stem.toFixed(2),", leaf=").concat(this._leaf.toFixed(2),", flower=").concat(this._flower.toFixed(2),")")}};L7.defaultConfig={stemRate:J8.STEM_GROWTH_RATE,leafStart:J8.LEAF_START,leafRate:J8.LEAF_GROWTH_RATE,flowerStart:J8.FLOWER_START,flowerRate:J8.FLOWER_GROWTH_RATE};var Oq=L7;var Hq=1024,Dq=2,Aq=16384,Mq=32768,zq=0.25,Lq=60,_q=10,XQ=class{constructor(){this.progress=0,this.stem=0,this.leaf=0,this.flower=0,this.foliage=0,this.plume=0}reset(){if(this.progress=0,this.stem=0,this.leaf=0,this.flower=0,this.foliage=0,this.plume=0,this._frameAcquired!==void 0)this._released=!0,this._frameAcquired=-1,this._acquireStack=void 0;return this}calculateMut(J,Z,k,Y=Oq.defaultConfig){let R=(J-Z)/k;return this.progress=Math.max(0,Math.min(1,R)),this.stem=Math.min(1,this.progress*Y.stemRate),this.leaf=Math.max(0,Math.min(1,(this.progress-Y.leafStart)*Y.leafRate)),this.flower=Math.max(0,Math.min(1,(this.progress-Y.flowerStart)*Y.flowerRate)),this.foliage=Math.max(0,Math.min(1,(this.progress-J8.FOLIAGE_START)*J8.FOLIAGE_GROWTH_RATE)),this.plume=this.progress>J8.PLUME_START?(this.progress-J8.PLUME_START)/(1-J8.PLUME_START):0,this}get isActive(){return this.progress>0}get isComplete(){return this.progress>=1}get hasLeaves(){return this.leaf>0}get hasFlower(){return this.flower>0}get hasFoliage(){return this.foliage>0}get hasPlume(){return this.plume>0}},_7=class{constructor(J={}){this.pool=[],this.poolMembers=new WeakSet,this.acquireIndex=0,this.frameNumber=0,this.inFrame=!1,this.peakUsage=0,this.growthEvents=0,this.totalAcquired=0,this.totalReleased=0,this.consecutiveLowUsageFrames=0,this.frameHistoryIndex=0,this.frameHistoryCount=0,this.maxHistorySize=Lq;var Z,k,Y;let R=(X,N,$,K)=>{let W=typeof X==="number"&&Number.isFinite(X)?X:N;return Math.max($,Math.min(K,W))};this.initialSize=R(J.initialSize,Hq,1,1e6);let Q=!1;if(typeof process<"u"&&((Z=process==null?void 0:process.env)==null?void 0:Z.NODE_ENV)!=="production")Q=!0;this.devMode=(k=J.devMode)!=null?k:Q,this.strictMode=(Y=J.strictMode)!=null?Y:this.devMode,this.growthFactor=R(J.growthFactor,Dq,1.1,4),this.maxSizeWarning=R(J.maxSizeWarning,Aq,1,1e6),this.maxSize=R(J.maxSize,Mq,1,1e6),this.shrinkThreshold=R(J.shrinkThreshold,zq,0.01,0.99),this.lowUsageFramesBeforeShrink=R(J.lowUsageFramesBeforeShrink,_q,1,1e4),this.frameHistory=Array(this.maxHistorySize);for(let X=0;X<this.maxHistorySize;X++)this.frameHistory[X]={frameNumber:0,usage:0,timestamp:0};this.pool=Array(this.initialSize);for(let X=0;X<this.initialSize;X++)this.pool[X]=new XQ,this.poolMembers.add(this.pool[X])}beginFrame(){if(this.inFrame){if(this.devMode)console.warn("GrowthProgressPool: beginFrame() called while already in frame. Did you forget endFrame()?");if(this.strictMode)throw Error("GrowthProgressPool: beginFrame() called while already in frame. Did you forget endFrame()?");this.acquireIndex=0}this.frameNumber++,this.inFrame=!0,this.acquireIndex=0}endFrame(){if(!this.inFrame){if(this.devMode)console.warn("GrowthProgressPool: endFrame() called outside of frame");if(this.strictMode)throw Error("GrowthProgressPool: endFrame() called outside of frame");return}let J=this.acquireIndex;if(J>this.peakUsage)this.peakUsage=J;this.totalReleased+=J;let Z=this.frameHistory[this.frameHistoryIndex%this.maxHistorySize];if(Z.frameNumber=this.frameNumber,Z.usage=J,Z.timestamp=Date.now(),this.frameHistoryIndex++,this.frameHistoryCount<this.maxHistorySize)this.frameHistoryCount++;for(let k=0;k<this.acquireIndex;k++)this.pool[k].reset();this.inFrame=!1,this.maybeShrink(J)}acquire(){if(!this.inFrame){if(this.devMode||this.strictMode)throw Error("GrowthProgressPool: acquire() called outside of frame. Call beginFrame() first.");this.beginFrame()}if(this.acquireIndex>=this.pool.length)this.grow();let J=this.pool[this.acquireIndex];if(this.devMode)J._frameAcquired=this.frameNumber,J._released=!1;return this.acquireIndex++,this.totalAcquired++,J}acquireAndCalculate(J,Z,k,Y){return this.acquire().calculateMut(J,Z,k,Y)}grow(){let J=this.pool.length,Z=Math.floor(J*this.growthFactor);if(Z>this.maxSize)throw Error("GrowthProgressPool: Maximum size ".concat(this.maxSize," exceeded. ")+"This indicates a leak or unexpectedly high plant count.");if(this.devMode&&Z>this.maxSizeWarning)console.warn("GrowthProgressPool: Pool grew to ".concat(Z," objects. ")+"This may indicate a leak or unexpectedly high plant count.");for(let k=J;k<Z;k++){let Y=new XQ;this.pool.push(Y),this.poolMembers.add(Y)}this.growthEvents++,this.consecutiveLowUsageFrames=0}maybeShrink(J){if(this.pool.length<=this.initialSize){this.consecutiveLowUsageFrames=0;return}if(J/this.pool.length<this.shrinkThreshold){if(this.consecutiveLowUsageFrames++,this.consecutiveLowUsageFrames>=this.lowUsageFramesBeforeShrink)this.shrink()}else this.consecutiveLowUsageFrames=0}shrink(){let J=Math.max(this.initialSize,Math.floor(this.pool.length/this.growthFactor));if(J>=this.pool.length)return;this.pool.length=J,this.consecutiveLowUsageFrames=0}getStats(){return{poolSize:this.pool.length,acquired:this.totalAcquired,released:this.totalReleased,peakUsage:this.peakUsage,growthEvents:this.growthEvents,currentFrameUsage:this.acquireIndex}}getFrameHistory(){if(this.frameHistoryCount<this.maxHistorySize)return this.frameHistory.slice(0,this.frameHistoryCount);let J=this.frameHistoryIndex%this.maxHistorySize;return[...this.frameHistory.slice(J),...this.frameHistory.slice(0,J)]}detectLeaks(){if(!this.devMode)return[];let J=[];for(let Z=0;Z<this.pool.length;Z++){let k=this.pool[Z];if(k._released===!1&&k._frameAcquired!==void 0&&k._frameAcquired<this.frameNumber)J.push({frameAcquired:k._frameAcquired,acquireStack:k._acquireStack})}return J}validateObject(J){var Z,k;if(!this.devMode)return!0;if(!this.poolMembers.has(J))throw Error("GrowthProgressPool: Object is not from this pool");if(J._released){let Y=Error().stack;throw Error("GrowthProgressPool: Use-after-release detected. "+"Object was acquired at frame ".concat((Z=J._frameAcquired)!=null?Z:"unknown",", ")+"current frame is ".concat(this.frameNumber,`.
`)+`Validation location:
`.concat(Y))}if(J._frameAcquired!==this.frameNumber)throw Error("GrowthProgressPool: Stale object detected. "+"Object from frame ".concat((k=J._frameAcquired)!=null?k:"unknown"," used in frame ").concat(this.frameNumber,"."));return!0}reset(){if(this.pool.length>this.initialSize)this.pool.length=this.initialSize;for(let J=0;J<this.initialSize;J++){if(!this.pool[J]){let Z=new XQ;this.pool[J]=Z,this.poolMembers.add(Z)}this.pool[J].reset()}this.acquireIndex=0,this.frameNumber=0,this.inFrame=!1,this.peakUsage=0,this.growthEvents=0,this.totalAcquired=0,this.totalReleased=0,this.consecutiveLowUsageFrames=0,this.frameHistoryIndex=0,this.frameHistoryCount=0;for(let J=0;J<this.maxHistorySize;J++)this.frameHistory[J].frameNumber=0,this.frameHistory[J].usage=0,this.frameHistory[J].timestamp=0}getFrameNumber(){return this.frameNumber}isInFrame(){return this.inFrame}},NQ=null;function wq(){return NQ!=null?NQ:NQ=new _7}var lJ=new bG(0);function C8(J,Z,k,Y){if((J-Z)/k<=0)return null;return(Y!=null?Y:wq()).acquireAndCalculate(J,Z,k)}var U6={x:0,baseY:0,plantHeight:0,phases:null};function KZ(J,Z,k,Y,R,Q){let X=C8(Y,J.delay,J.growDuration,Q);if(!X)return null;return U6.x=J.x*Z,U6.baseY=k,U6.plantHeight=J.maxHeight*k*R.heightMultiplier,U6.phases=X,U6}function W6(J,Z,k,Y,R,Q,X,N){if(X<=0)return;let $=Y*X*N.sizeMultiplier,K=Math.max(3,Q+N.petalCountModifier);for(let W=0;W<K;W++){let U=W/K*Math.PI*2;J.save(),J.translate(Z,k),J.rotate(U),J.beginPath(),J.ellipse($*0.5,0,$*0.5,$*0.25,0,0,Math.PI*2),J.fillStyle=R,J.fill(),J.restore()}J.beginPath(),J.arc(Z,k,$*0.25,0,Math.PI*2),J.fillStyle=pJ.FLOWER_CENTER_GOLD,J.fill()}function Cq(J,Z,k,Y,R,Q,X){if(Q<=0)return;let N=Y*Q*X.sizeMultiplier;if(J.beginPath(),J.moveTo(Z-N*0.3,k),J.bezierCurveTo(Z-N*0.4,k-N*0.5,Z-N*0.2,k-N*0.9,Z,k-N),J.bezierCurveTo(Z+N*0.2,k-N*0.9,Z+N*0.4,k-N*0.5,Z+N*0.3,k),J.bezierCurveTo(Z+N*0.1,k-N*0.2,Z-N*0.1,k-N*0.2,Z-N*0.3,k),J.fillStyle=R,J.fill(),X.complexity>0.6)J.globalAlpha=0.3,J.beginPath(),J.moveTo(Z,k-N*0.2),J.lineTo(Z,k-N*0.9),J.strokeStyle=pJ.TULIP_STRIPE,J.lineWidth=N*0.08,J.stroke(),J.globalAlpha=1}function Tq(J,Z,k,Y,R,Q,X){if(Q<=0)return;let N=Y*Q*X.sizeMultiplier,$=Math.max(8,12+X.petalCountModifier);for(let K=0;K<$;K++){let W=K/$*Math.PI*2;J.save(),J.translate(Z,k),J.rotate(W),J.beginPath(),J.ellipse(N*0.45,0,N*0.4,N*0.12,0,0,Math.PI*2),J.fillStyle=R,J.fill(),J.restore()}J.beginPath(),J.arc(Z,k,N*0.22,0,Math.PI*2),J.fillStyle=pJ.FLOWER_CENTER_GOLD,J.fill()}function Pq(J,Z,k,Y,R,Q,X){if(Q<=0)return;let N=Y*Q*X.sizeMultiplier,$=Math.max(3,5+X.petalCountModifier);for(let K=0;K<$;K++){let W=K/$*Math.PI*2+0.3,U=N*0.3,F=Z+Math.cos(W)*U,G=k+Math.sin(W)*U;J.beginPath(),J.arc(F,G,N*0.18,0,Math.PI*2),J.fillStyle=R,J.fill()}J.beginPath(),J.arc(Z,k,N*0.15,0,Math.PI*2),J.fillStyle=R,J.fill()}function Sq(J,Z,k,Y,R,Q,X,N){if(X<=0)return;let $=Y*Math.min(1,X)*N.heightMultiplier,K=1.5*N.thicknessMultiplier,W=Math.max(2,3+Math.floor(T8(Q)*3)+N.petalCountModifier);for(let U=0;U<W;U++){let F=T8(Q+U*10),G=(F-0.5)*0.4*N.leanMultiplier,B=$*(0.6+F*0.4);J.beginPath(),J.moveTo(Z+(U-W/2)*3,k),J.quadraticCurveTo(Z+(U-W/2)*3+G*B,k-B*0.6,Z+(U-W/2)*3+G*B*1.5,k-B),J.strokeStyle=R,J.lineWidth=K,J.lineCap="round",J.stroke()}if(N.complexity>0.7&&X>0.8){let U=(X-0.8)/0.2;J.globalAlpha=U*0.7;for(let F=0;F<W;F++){let G=T8(Q+F*10),B=(G-0.5)*0.4*N.leanMultiplier,V=$*(0.6+G*0.4),E=Z+(F-W/2)*3+B*V*1.5,q=k-V;J.beginPath(),J.ellipse(E,q-$*0.1,$*0.08,$*0.15,0,0,Math.PI*2),J.fillStyle=pJ.GRASS_PLUME,J.fill()}J.globalAlpha=1}}function jq(J,Z,k,Y,R,Q,X,N){if(X<=0)return;let $=Y*Math.min(1,X)*N.heightMultiplier,K=(T8(Q)-0.5)*0.3*N.leanMultiplier,W=1.5*N.thicknessMultiplier;J.beginPath(),J.moveTo(Z,k),J.quadraticCurveTo(Z+K*$*0.5,k-$*0.5,Z+K*$,k-$),J.strokeStyle=R,J.lineWidth=W,J.stroke();let U=Math.max(4,6+N.petalCountModifier);for(let F=0;F<U;F++){let G=(F+1)/(U+1),B=Z+K*$*G,V=k-$*G,E=F%2===0?1:-1,q=$*0.25*(1-G*0.5),O=N.complexity>0.7?0.5:0.2;J.beginPath(),J.moveTo(B,V),J.quadraticCurveTo(B+E*q*0.7,V-q*O,B+E*q,V+q*O),J.strokeStyle=R,J.lineWidth=1,J.stroke()}}function fq(J,Z,k,Y,R,Q,X,N,$){if(N<=0)return;let K=Y*Math.min(1,N)*$.sizeMultiplier,W=Math.max(5,8+$.petalCountModifier);for(let F=0;F<W;F++){let G=T8(X+F*7),B=F/W*Math.PI*2+G*0.5,V=K*(0.3+G*0.4),E=Z+Math.cos(B)*V*$.leanMultiplier,q=k-K*0.3+Math.sin(B)*V*0.5;cJ(J,E,q,B+Math.PI,K*0.4,R)}let U=$.complexity>0.8?0.5:0.7;if(N>U){let F=(N-U)/(1-U),G=$.complexity>0.8?5:3;for(let B=0;B<G;B++){let V=T8(X+B*13),E=Z+(V-0.5)*K*0.6,q=k-K*0.3-V*K*0.3;J.beginPath(),J.arc(E,q,K*0.12*F,0,Math.PI*2),J.fillStyle=Q,J.fill()}}}function vq(J,Z,k,Y,R,Q,X){if(Q<=0)return;let N=Y*Q*X.sizeMultiplier,$=X.complexity>0.8?4:3;for(let K=0;K<$;K++){let W=N*(1-K*0.2),U=5+K,F=K*0.3;for(let G=0;G<U;G++){let B=G/U*Math.PI*2+F;J.save(),J.translate(Z,k),J.rotate(B),J.beginPath(),J.ellipse(W*0.35,0,W*0.4,W*0.25,0,0,Math.PI*2),J.fillStyle=R,J.fill(),J.restore()}}J.beginPath(),J.arc(Z,k,N*0.15,0,Math.PI*2),J.fillStyle=pJ.FLOWER_CENTER_GOLD,J.fill()}function yq(J,Z,k,Y,R,Q,X){if(Q<=0)return;let N=Y*Q*X.sizeMultiplier,$=Math.max(4,6+X.petalCountModifier);for(let K=0;K<$;K++){let W=K/$*Math.PI*2;J.save(),J.translate(Z,k),J.rotate(W),J.beginPath(),J.moveTo(0,0),J.bezierCurveTo(N*0.2,-N*0.3,N*0.6,-N*0.2,N*0.8,0),J.bezierCurveTo(N*0.6,N*0.15,N*0.2,N*0.1,0,0),J.fillStyle=R,J.fill(),J.restore()}J.beginPath(),J.arc(Z,k,N*0.12,0,Math.PI*2),J.fillStyle=pJ.LILY_STAMENS,J.fill()}function bq(J,Z,k,Y,R,Q,X){if(Q<=0)return;let N=Y*Q*X.sizeMultiplier;for(let $=0;$<3;$++){let K=$/3*Math.PI*2-Math.PI/2;J.save(),J.translate(Z,k),J.rotate(K),J.beginPath(),J.ellipse(N*0.5,0,N*0.5,N*0.15,0,0,Math.PI*2),J.fillStyle=R,J.fill(),J.restore()}for(let $=0;$<2;$++){let K=($===0?-0.4:0.4)+Math.PI/2;J.save(),J.translate(Z,k),J.rotate(K),J.beginPath(),J.ellipse(N*0.35,0,N*0.35,N*0.2,0,0,Math.PI*2),J.fillStyle=R,J.fill(),J.restore()}J.beginPath(),J.ellipse(Z,k+N*0.3,N*0.25,N*0.15,0,0,Math.PI*2),J.fillStyle=pJ.FLOWER_CENTER_GOLD,J.fill()}function hq(J,Z,k,Y,R,Q,X){if(Q<=0)return;let N=Y*Q*X.sizeMultiplier,$=X.complexity>0.6?4:3,K=Math.max(3,6+X.petalCountModifier);for(let W=0;W<$;W++){let U=N*(1-W*0.2),F=W*0.5;for(let G=0;G<K;G++){let B=G/K*Math.PI*2+F,V=Z+Math.cos(B)*U*0.4,E=k-W*N*0.1+Math.sin(B)*U*0.2;J.beginPath(),J.ellipse(V,E,U*0.2,U*0.35,B,0,Math.PI*2),J.fillStyle=R,J.fill()}}}function gq(J,Z,k,Y,R,Q,X,N){if(X<=0)return;let $=Y*Math.min(1,X)*N.heightMultiplier,K=(T8(Q)-0.5)*0.2*N.leanMultiplier;if(J.beginPath(),J.moveTo(Z,k),J.quadraticCurveTo(Z+K*$*0.5,k-$*0.5,Z+K*$,k-$),J.strokeStyle=pJ.LAVENDER_STEM,J.lineWidth=1.5*N.thicknessMultiplier,J.stroke(),X>0.5){let W=(X-0.5)/0.5,U=$*0.3*W,F=k-$+U/2,G=Z+K*$,B=Math.floor(8*W);for(let V=0;V<B;V++){let E=F-V/B*U,q=G+(T8(Q+V)-0.5)*4;J.beginPath(),J.arc(q,E,2.5,0,Math.PI*2),J.fillStyle=R,J.fill()}}}function xq(J,Z,k,Y,R,Q,X){if(Q<=0)return;let N=Y*Q*X.sizeMultiplier;for(let $=0;$<4;$++){let K=$/4*Math.PI*2+Math.PI/4;J.save(),J.translate(Z,k),J.rotate(K),J.beginPath(),J.moveTo(0,0),J.bezierCurveTo(N*0.2,-N*0.3,N*0.5,-N*0.2,N*0.6,0),J.bezierCurveTo(N*0.5,N*0.2,N*0.2,N*0.3,0,0),J.fillStyle=R,J.fill(),J.restore()}J.beginPath(),J.arc(Z,k,N*0.2,0,Math.PI*2),J.fillStyle=pJ.FLOWER_CENTER_DARK,J.fill()}function mq(J,Z,k,Y,R,Q,X){if(Q<=0)return;let N=Y*Q*X.sizeMultiplier,$=Math.max(8,16+X.petalCountModifier);for(let K=0;K<$;K++){let W=K/$*Math.PI*2;J.save(),J.translate(Z,k),J.rotate(W),J.beginPath(),J.moveTo(N*0.3,0),J.bezierCurveTo(N*0.4,-N*0.08,N*0.7,-N*0.05,N*0.85,0),J.bezierCurveTo(N*0.7,N*0.05,N*0.4,N*0.08,N*0.3,0),J.fillStyle=R,J.fill(),J.restore()}J.beginPath(),J.arc(Z,k,N*0.35,0,Math.PI*2),J.fillStyle=pJ.SUNFLOWER_CENTER,J.fill(),J.beginPath(),J.arc(Z,k,N*0.25,0,Math.PI*2),J.fillStyle=pJ.SUNFLOWER_CENTER_INNER,J.fill()}function pq(J,Z,k,Y,R,Q,X){if(Q<=0)return;let N=Y*Q*X.sizeMultiplier;for(let $=0;$<3;$++){let K=$/3*Math.PI*2;J.save(),J.translate(Z,k),J.rotate(K),J.beginPath(),J.moveTo(0,0),J.bezierCurveTo(N*0.1,-N*0.4,N*0.2,-N*0.6,0,-N*0.7),J.bezierCurveTo(-N*0.2,-N*0.6,-N*0.1,-N*0.4,0,0),J.fillStyle=R,J.fill(),J.restore()}for(let $=0;$<3;$++){let K=$/3*Math.PI*2+Math.PI/3;J.save(),J.translate(Z,k),J.rotate(K),J.beginPath(),J.moveTo(0,0),J.bezierCurveTo(N*0.3,N*0.2,N*0.4,N*0.5,N*0.2,N*0.6),J.bezierCurveTo(0,N*0.5,-N*0.1,N*0.2,0,0),J.fillStyle=R,J.fill(),J.restore()}}function uq(J,Z,k,Y,R,Q,X){if(Q<=0)return;let N=Y*Q*X.sizeMultiplier,$=5;for(let K=0;K<$;K++){let W=N*(1-K*0.15),U=8+K*2,F=K*0.4;for(let G=0;G<U;G++){let B=G/U*Math.PI*2+F;J.save(),J.translate(Z,k),J.rotate(B),J.beginPath(),J.ellipse(W*0.3,0,W*0.35,W*0.2,0,0,Math.PI*2),J.fillStyle=R,J.fill(),J.restore()}}J.beginPath(),J.arc(Z,k,N*0.12,0,Math.PI*2),J.fillStyle=pJ.FLOWER_CENTER_GOLD,J.fill()}function dq(J,Z,k,Y,R,Q,X,N){if(X<=0)return;let $=Y*X*N.sizeMultiplier,K=Math.max(8,20+N.petalCountModifier);for(let W=0;W<K;W++){let U=T8(Q+W*7),F=T8(Q+W*11),G=U*Math.PI*2,B=F*$*0.4,V=Z+Math.cos(G)*B,E=k+Math.sin(G)*B*0.6-$*0.1;for(let q=0;q<4;q++){let O=q/4*Math.PI*2;J.beginPath(),J.ellipse(V+Math.cos(O)*$*0.06,E+Math.sin(O)*$*0.06,$*0.05,$*0.03,O,0,Math.PI*2),J.fillStyle=R,J.fill()}}}function lq(J,Z,k,Y,R,Q,X){if(Q<=0)return;let N=Y*Q*X.sizeMultiplier,$=4;for(let K=0;K<$;K++){let W=N*(1-K*0.18),U=Math.max(4,10+K*2+X.petalCountModifier),F=K*0.25;for(let G=0;G<U;G++){let B=G/U*Math.PI*2+F;J.save(),J.translate(Z,k),J.rotate(B),J.beginPath(),J.moveTo(0,0),J.bezierCurveTo(W*0.15,-W*0.08,W*0.35,-W*0.05,W*0.45,0),J.bezierCurveTo(W*0.35,W*0.05,W*0.15,W*0.08,0,0),J.fillStyle=R,J.fill(),J.restore()}}J.beginPath(),J.arc(Z,k,N*0.08,0,Math.PI*2),J.fillStyle=pJ.DAHLIA_CENTER,J.fill()}var cq={[0]:(J,Z,k,Y,R,Q,X)=>{let N=KZ(Z,k,Y,R,Q,X);if(!N)return;let{x:$,baseY:K,plantHeight:W,phases:U}=N,F=$Z(J,$,K,W,2*Z.scale*Q.thicknessMultiplier,Z.stemColor,Z.lean*Q.leanMultiplier,U.stem);if(F&&U.leaf>0){let G=K-W*0.4*U.stem,B=$+Z.lean*Q.leanMultiplier*W*0.4;cJ(J,B-3,G,-0.5-Z.lean,15*Z.scale*U.leaf,Z.leafColor),cJ(J,B+3,G+5,0.5-Z.lean,12*Z.scale*U.leaf,Z.leafColor)}if(F&&U.flower>0)W6(J,F.x,F.y,18*Z.scale,Z.flowerColor,Z.petals,U.flower,Q)},[1]:(J,Z,k,Y,R,Q,X)=>{let N=KZ(Z,k,Y,R,Q,X);if(!N)return;let{x:$,baseY:K,plantHeight:W,phases:U}=N,F=$Z(J,$,K,W,2.5*Z.scale*Q.thicknessMultiplier,Z.stemColor,Z.lean*0.5*Q.leanMultiplier,U.stem);if(F&&U.leaf>0){let G=K-W*0.2*U.stem;cJ(J,$-2,G,-0.8,25*Z.scale*U.leaf,Z.leafColor),cJ(J,$+2,G,0.8,22*Z.scale*U.leaf,Z.leafColor)}if(F&&U.flower>0)Cq(J,F.x,F.y,22*Z.scale,Z.flowerColor,U.flower,Q)},[2]:(J,Z,k,Y,R,Q,X)=>{let N=KZ(Z,k,Y,R,Q,X);if(!N)return;let{x:$,baseY:K,plantHeight:W,phases:U}=N,F=$Z(J,$,K,W,1.5*Z.scale*Q.thicknessMultiplier,Z.stemColor,Z.lean*Q.leanMultiplier,U.stem);if(F&&U.leaf>0){let G=K-W*0.3*U.stem,B=$+Z.lean*Q.leanMultiplier*W*0.3;cJ(J,B,G,-0.3,12*Z.scale*U.leaf,Z.leafColor)}if(F&&U.flower>0)Tq(J,F.x,F.y,16*Z.scale,Z.flowerColor,U.flower,Q)},[3]:(J,Z,k,Y,R,Q,X)=>{let N=KZ(Z,k,Y,R,Q,X);if(!N)return;let{x:$,baseY:K,plantHeight:W,phases:U}=N,F=$Z(J,$,K,W*0.85,1.5*Z.scale*Q.thicknessMultiplier,Z.stemColor,Z.lean*Q.leanMultiplier,U.stem);if(F&&U.flower>0)Pq(J,F.x,F.y,14*Z.scale,Z.flowerColor,U.flower,Q)},[4]:(J,Z,k,Y,R,Q,X)=>{let N=C8(R,Z.delay,Z.growDuration,X);if(!N)return;let $=Z.x*k,K=Y,W=Z.maxHeight*Y,U=N.stem;Sq(J,$,K,W,Z.leafColor,Z.seed,U,Q)},[5]:(J,Z,k,Y,R,Q,X)=>{let N=C8(R,Z.delay,Z.growDuration,X);if(!N)return;let $=Z.x*k,K=Y,W=Z.maxHeight*Y,U=N.stem;jq(J,$,K,W,Z.leafColor,Z.seed,U,Q)},[6]:(J,Z,k,Y,R,Q,X)=>{let N=C8(R,Z.delay,Z.growDuration,X);if(!N)return;let $=Z.x*k,K=Y,W=Z.maxHeight*Y,U=Math.min(1,N.progress*1.2);fq(J,$,K-5,W*0.7,Z.leafColor,Z.flowerColor,Z.seed,U,Q)},[7]:(J,Z,k,Y,R,Q,X)=>{let N=KZ(Z,k,Y,R,Q,X);if(!N)return;let{x:$,baseY:K,plantHeight:W,phases:U}=N,F=$Z(J,$,K,W,2.5*Z.scale*Q.thicknessMultiplier,Z.stemColor,Z.lean*Q.leanMultiplier,U.stem);if(F&&U.leaf>0){let G=K-W*0.4*U.stem;cJ(J,$-4,G,-0.6,18*Z.scale*U.leaf,Z.leafColor),cJ(J,$+4,G+8,0.6,16*Z.scale*U.leaf,Z.leafColor)}if(F&&U.flower>0)vq(J,F.x,F.y,20*Z.scale,Z.flowerColor,U.flower,Q)},[8]:(J,Z,k,Y,R,Q,X)=>{let N=KZ(Z,k,Y,R,Q,X);if(!N)return;let{x:$,baseY:K,plantHeight:W,phases:U}=N,F=$Z(J,$,K,W,2*Z.scale*Q.thicknessMultiplier,Z.stemColor,Z.lean*Q.leanMultiplier,U.stem);if(F&&U.leaf>0){let G=K-W*0.3*U.stem;cJ(J,$-2,G,-0.4,20*Z.scale*U.leaf,Z.leafColor),cJ(J,$+2,G+10,0.4,18*Z.scale*U.leaf,Z.leafColor)}if(F&&U.flower>0)yq(J,F.x,F.y,22*Z.scale,Z.flowerColor,U.flower,Q)},[9]:(J,Z,k,Y,R,Q,X)=>{let N=KZ(Z,k,Y,R,Q,X);if(!N)return;let{x:$,baseY:K,plantHeight:W,phases:U}=N,F=$Z(J,$,K,W,1.5*Z.scale*Q.thicknessMultiplier,Z.stemColor,Z.lean*Q.leanMultiplier,U.stem);if(F&&U.flower>0)bq(J,F.x,F.y,18*Z.scale,Z.flowerColor,U.flower,Q)},[10]:(J,Z,k,Y,R,Q,X)=>{let N=C8(R,Z.delay,Z.growDuration,X);if(!N)return;let $=Z.x*k,K=Y,W=Z.maxHeight*Y,U=Math.min(1,N.progress*1.2);hq(J,$,K-5,W*0.6,Z.leafColor,U,Q)},[11]:(J,Z,k,Y,R,Q,X)=>{let N=C8(R,Z.delay,Z.growDuration,X);if(!N)return;let $=Z.x*k,K=Y,W=Z.maxHeight*Y,U=Math.min(1,N.progress*1.3);gq(J,$,K,W,Z.flowerColor,Z.seed,U,Q)},[12]:(J,Z,k,Y,R,Q,X)=>{let N=KZ(Z,k,Y,R,Q,X);if(!N)return;let{x:$,baseY:K,plantHeight:W,phases:U}=N,F=$Z(J,$,K,W,2.5*Z.scale*Q.thicknessMultiplier,Z.stemColor,Z.lean*Q.leanMultiplier,U.stem);if(F&&U.leaf>0){let G=K-W*0.35*U.stem;cJ(J,$-3,G,-0.5,16*Z.scale*U.leaf,Z.leafColor),cJ(J,$+3,G+6,0.5,14*Z.scale*U.leaf,Z.leafColor)}if(F&&U.flower>0)switch(Z.type){case"poppy":xq(J,F.x,F.y,18*Z.scale,Z.flowerColor,U.flower,Q);break;case"sunflower":mq(J,F.x,F.y,25*Z.scale,Z.flowerColor,U.flower,Q);break;case"iris":pq(J,F.x,F.y,20*Z.scale,Z.flowerColor,U.flower,Q);break;case"peony":uq(J,F.x,F.y,22*Z.scale,Z.flowerColor,U.flower,Q);break;case"hydrangea":dq(J,F.x,F.y,28*Z.scale,Z.flowerColor,Z.seed,U.flower,Q);break;case"dahlia":lq(J,F.x,F.y,24*Z.scale,Z.flowerColor,U.flower,Q);break;default:W6(J,F.x,F.y,18*Z.scale,Z.flowerColor,Z.petals,U.flower,Q)}},[13]:(J,Z,k,Y,R,Q,X)=>{let N=KZ(Z,k,Y,R,Q,X);if(!N)return;let{x:$,baseY:K,plantHeight:W,phases:U}=N,F=$Z(J,$,K,W,3*Z.scale*Q.thicknessMultiplier,Z.stemColor,Z.lean*Q.leanMultiplier*0.5,U.stem);if(U.leaf>0){let G=3+Math.floor(Q.complexity*3);for(let B=0;B<G;B++){let V=0.2+B/G*0.5,E=K-W*V*U.stem,q=$+Z.lean*Q.leanMultiplier*W*V*0.5,O=B%2===0?-1:1;cJ(J,q,E,O*0.6,20*Z.scale*U.leaf,Z.leafColor)}}if(F&&U.flower>0){let G=4+Math.floor(Q.complexity*4);for(let B=0;B<G;B++){let V=0.5+B/G*0.45,E=K-W*V*U.stem,q=$+Z.lean*Q.leanMultiplier*W*V*0.5,O=(8+B*1.5)*Z.scale*Q.sizeMultiplier,A=Math.max(0,(U.flower-B*0.08)*1.5);if(A>0)W6(J,q,E,O,Z.flowerColor,Z.petals,Math.min(1,A),Q)}}},[14]:(J,Z,k,Y,R,Q,X)=>{let N=C8(R,Z.delay,Z.growDuration,X);if(!N)return;let $=Z.x*k,K=Y,W=Z.maxHeight*Y*Q.heightMultiplier,U=Math.min(1,N.progress*1.3),F=2+Math.floor(Q.complexity*3);lJ.setSeed(Z.seed);for(let G=0;G<F;G++){let B=(lJ.next()-0.5)*20*Q.sizeMultiplier,V=W*(0.7+lJ.next()*0.3)*U,E=(lJ.next()-0.5)*0.15*Q.leanMultiplier,q=4+Math.floor(lJ.next()*4),O=V/q;J.strokeStyle=Z.stemColor,J.lineWidth=3*Z.scale*Q.thicknessMultiplier,J.lineCap="round";let A=K,H=$+B;for(let _=0;_<q;_++){let C=A-O,I=H+E*O;if(J.beginPath(),J.moveTo(H,A),J.lineTo(I,C),J.stroke(),_<q-1)J.beginPath(),J.arc(I,C,4*Z.scale,0,Math.PI*2),J.fillStyle=Z.stemColor,J.fill();A=C,H=I}if(U>0.5){let _=(U-0.5)*2;for(let C=0;C<3;C++){let I=(C-1)*0.4+E;cJ(J,H,A,I,30*Z.scale*_,Z.leafColor)}}}},[15]:(J,Z,k,Y,R,Q,X)=>{let N=C8(R,Z.delay,Z.growDuration,X);if(!N)return;let $=Z.x*k,K=Y,W=Z.maxHeight*Y*Q.heightMultiplier,U=Math.min(1,N.progress*1.2);lJ.setSeed(Z.seed),J.strokeStyle=Z.stemColor,J.lineWidth=2*Z.scale*Q.thicknessMultiplier,J.lineCap="round",J.beginPath(),J.moveTo($,K);let F=8,G=$,B=K;for(let V=1;V<=F;V++){let E=V/F,q=K-W*E*U,O=Math.sin(E*Math.PI*3)*15*Q.leanMultiplier,A=$+O+Z.lean*W*E*0.3;J.quadraticCurveTo((G+A)/2+(lJ.next()-0.5)*10,(B+q)/2,A,q),G=A,B=q}J.stroke();for(let V=1;V<=F;V++){let E=V/F;if(E>0.1&&U>E){let q=K-W*E*U,O=Math.sin(E*Math.PI*3)*15*Q.leanMultiplier,A=$+O+Z.lean*W*E*0.3,H=12*Z.scale*Math.min(1,(U-E)*3);if(V%2===0)cJ(J,A-5,q,-0.8,H,Z.leafColor);else cJ(J,A+5,q,0.8,H,Z.leafColor)}}if(U>0.6&&Q.complexity>0.6){let V=(U-0.6)*2.5,E=Math.max(1,3+Math.floor(Q.petalCountModifier));for(let q=0;q<E;q++){let O=0.3+lJ.next()*0.5,A=K-W*O*U,H=$+Math.sin(O*Math.PI*3)*15*Q.leanMultiplier+Z.lean*W*O*0.3;W6(J,H,A,10*Z.scale,Z.flowerColor,5,Math.min(1,V),Q)}}},[16]:(J,Z,k,Y,R,Q,X)=>{let N=C8(R,Z.delay,Z.growDuration,X);if(!N)return;let $=Z.x*k,K=Y,W=Z.maxHeight*Y*Q.heightMultiplier,U=Math.min(1,N.progress*1.2),F=N.foliage;lJ.setSeed(Z.seed);let G=W*0.6*U,B=6*Z.scale*Q.thicknessMultiplier;if(J.fillStyle=Z.stemColor,J.beginPath(),J.moveTo($-B/2,K),J.lineTo($+B/2,K),J.lineTo($+B/4,K-G),J.lineTo($-B/4,K-G),J.closePath(),J.fill(),F>0){let V=K-G,E=25*Z.scale*Q.sizeMultiplier*F,q=5+Math.floor(Q.complexity*4);for(let O=0;O<q;O++){let A=O/q*Math.PI*2+lJ.next()*0.5,H=E*(0.4+lJ.next()*0.6),_=$+Math.cos(A)*H*0.8,C=V-Math.abs(Math.sin(A))*H*0.6-E*0.3,I=E*(0.4+lJ.next()*0.3);J.beginPath(),J.arc(_,C,I,0,Math.PI*2),J.fillStyle=Z.leafColor,J.fill()}if(Q.petalCountModifier>4&&F>0.5){let O=Math.max(1,Math.floor(Q.petalCountModifier));for(let A=0;A<O;A++){let H=lJ.next()*Math.PI*2,_=E*(0.5+lJ.next()*0.5),C=$+Math.cos(H)*_*0.8,I=V-Math.abs(Math.sin(H))*_*0.6-E*0.3;W6(J,C,I,6*Z.scale,Z.flowerColor,5,F,Q)}}}},[17]:(J,Z,k,Y,R,Q,X)=>{let N=C8(R,Z.delay,Z.growDuration,X);if(!N)return;let $=Z.x*k,K=Y,W=Z.maxHeight*Y*Q.heightMultiplier,U=Math.min(1,N.progress*1.2);lJ.setSeed(Z.seed);let F=W*0.5*U;if(J.strokeStyle=Z.stemColor,J.lineWidth=5*Z.scale*Q.thicknessMultiplier,J.lineCap="round",J.beginPath(),J.moveTo($,K),J.lineTo($+Z.lean*F*0.3,K-F),J.stroke(),U>0.3){let G=(U-0.3)*1.4,B=5+Math.floor(Q.complexity*3),V=K-F,E=$+Z.lean*F*0.3;for(let q=0;q<B;q++){let O=q/B*Math.PI-Math.PI/2+(lJ.next()-0.5)*0.3,A=35*Z.scale*Q.sizeMultiplier*G,H=0.3+lJ.next()*0.3;J.strokeStyle=Z.leafColor,J.lineWidth=2*Z.scale,J.beginPath(),J.moveTo(E,V);let _=E+Math.cos(O)*A,C=V+Math.sin(O)*A*0.5+A*H,I=E+Math.cos(O)*A*0.6,M=V+Math.sin(O)*A*0.3;J.quadraticCurveTo(I,M,_,C),J.stroke();let j=6;for(let y=1;y<j;y++){let P=y/j,S=E+(_-E)*P*0.8,g=V+(C-V)*P*0.5+A*H*P*P,w=8*Z.scale*(1-P*0.5)*G;cJ(J,S,g,O+(y%2===0?0.5:-0.5),w,Z.leafColor)}}}},[18]:(J,Z,k,Y,R,Q,X)=>{let N=C8(R,Z.delay,Z.growDuration,X);if(!N)return;let $=Z.x*k,K=Y,W=Z.maxHeight*Y*Q.heightMultiplier,U=Math.min(1,N.progress*1.2),F=W*U,G=4*Z.scale*Q.thicknessMultiplier;if(J.fillStyle=Z.stemColor,J.beginPath(),J.moveTo($-G/2,K),J.lineTo($+G/2,K),J.lineTo($+G/4,K-F),J.lineTo($-G/4,K-F),J.closePath(),J.fill(),U>0.2){let B=(U-0.2)*1.25,V=4+Math.floor(Q.complexity*3),E=20*Z.scale*Q.sizeMultiplier;J.fillStyle=Z.leafColor;for(let q=0;q<V;q++){let O=q/V,A=K-F*(0.2+O*0.75),H=E*(1-O*0.7)*B,_=W*0.15*(1-O*0.3);J.beginPath(),J.moveTo($,A-_),J.lineTo($-H,A),J.lineTo($+H,A),J.closePath(),J.fill()}}}};function nq(J,Z,k,Y,R,Q){var X,N;let $=(X=Z.category)!=null?X:Iq(Z.type),K=(N=Z.variation)!=null?N:A7(Z.type),W=cq[$];if(!W){console.warn("Garten: No renderer for category ".concat($));return}W(J,Z,k,Y,R,K,Q)}var V7=class{constructor(J){this.resizeObserver=null,this.resizeHandler=null,this.debouncedResize=null,this.dpr=1,this.width=0,this.height=0,this.lastPlants=null,this.lastTime=0,this.warnedInvalidFadeColor=!1,this.fadeGradientCache=null,this.options=J,this.container=J.container,this.pool=new _7,this.canvas=document.createElement("canvas"),this.canvas.style.cssText=`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: `.concat(J.zIndex,`;
      opacity: `).concat(J.opacity,`;
    `),this.canvas.setAttribute("aria-hidden","true"),this.canvas.setAttribute("role","presentation");let Z=this.canvas.getContext("2d");if(!Z)throw Error("Garten: Could not create 2D canvas context. Check that browser supports the Canvas API.");this.ctx=Z,this.setupContainer(),this.container.insertBefore(this.canvas,this.container.firstChild),this.resize(),this.setupResizeObserver()}setupContainer(){if(window.getComputedStyle(this.container).position==="static")this.container.style.position="relative"}setupResizeObserver(){if(this.debouncedResize=mG(()=>this.resize(),aZ.RESIZE_DEBOUNCE_MS),typeof ResizeObserver<"u")this.resizeObserver=new ResizeObserver(this.debouncedResize),this.resizeObserver.observe(this.container);else this.resizeHandler=this.debouncedResize,window.addEventListener("resize",this.resizeHandler)}resize(){this.dpr=xG(this.options.maxPixelRatio);let J=this.container.getBoundingClientRect();if(J.width<=0||J.height<=0)return;if(this.width=J.width,this.height=J.height,this.canvas.width=this.width*this.dpr,this.canvas.height=this.height*this.dpr,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(this.dpr,this.dpr),this.lastPlants)this.render(this.lastPlants,this.lastTime)}clear(){let{background:J}=this.options;if(!J||J==="transparent"){this.ctx.clearRect(0,0,this.width,this.height);return}this.ctx.fillStyle=J,this.ctx.fillRect(0,0,this.width,this.height)}drawGround(){this.ctx.fillStyle=pJ.GROUND_COLOR,this.ctx.fillRect(0,this.height-aZ.GROUND_HEIGHT,this.width,aZ.GROUND_HEIGHT)}applyVerticalFade(){let{fadeHeight:J,fadeColor:Z,maxHeight:k}=this.options;if(J<=0)return;let Y=this.fadeGradientCache;if(!Y||Y.fadeColor!==Z||Y.fadeHeight!==J||Y.maxHeight!==k||Y.width!==this.width||Y.height!==this.height){let X=hG(Z);if(!X){if(!this.warnedInvalidFadeColor)this.warnedInvalidFadeColor=!0,console.warn("Garten: fadeColor ".concat(JSON.stringify(Z)," is not a valid hex color; the fade effect is disabled."));return}let N=this.height*(1-k),$=N,K=Math.max(0,N-this.height*J),W=this.ctx.createLinearGradient(0,K,0,$);W.addColorStop(0,"rgba(".concat(X.r,", ").concat(X.g,", ").concat(X.b,", 1)")),W.addColorStop(1,"rgba(".concat(X.r,", ").concat(X.g,", ").concat(X.b,", 0)")),this.fadeGradientCache={fadeColor:Z,fadeHeight:J,maxHeight:k,width:this.width,height:this.height,gradient:W,fadeStartY:$}}let{gradient:R,fadeStartY:Q}=this.fadeGradientCache;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=R,this.ctx.fillRect(0,0,this.width,Q),this.ctx.globalCompositeOperation="source-over"}render(J,Z){this.lastPlants=J,this.lastTime=Z,this.pool.beginFrame();try{this.clear(),this.drawGround();for(let k of J){if(Z<k.delay)continue;nq(this.ctx,k,this.width,this.height,Z,this.pool)}this.applyVerticalFade()}finally{this.pool.endFrame()}}renderStatic(J,Z){let k=Z*this.options.duration;this.render(J,k)}getDimensions(){return{width:this.width,height:this.height}}getCanvas(){return this.canvas}setOptions(J){this.options=J,this.fadeGradientCache=null,this.warnedInvalidFadeColor=!1,this.canvas.style.zIndex=String(J.zIndex),this.canvas.style.opacity=String(J.opacity),this.resize()}destroy(){if(this.debouncedResize)this.debouncedResize.cancel(),this.debouncedResize=null;if(this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;if(this.resizeHandler)window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null;if(this.pool.reset(),this.fadeGradientCache=null,this.lastPlants=null,this.canvas.parentNode)this.canvas.parentNode.removeChild(this.canvas)}},sq=class{constructor(){this.listeners=new Map}on(J,Z){if(!this.listeners.has(J))this.listeners.set(J,new Set);let k={handler:Z,once:!1};return this.listeners.get(J).add(k),()=>{this.off(J,Z)}}once(J,Z){if(!this.listeners.has(J))this.listeners.set(J,new Set);let k={handler:Z,once:!0};return this.listeners.get(J).add(k),()=>{this.off(J,Z)}}off(J,Z){let k=this.listeners.get(J);if(!k)return;for(let Y of k)if(Y.handler===Z){k.delete(Y);break}if(k.size===0)this.listeners.delete(J)}emit(J,Z){let k=this.listeners.get(J);if(!k)return;let Y=[];for(let R of k){try{R.handler(Z)}catch(Q){console.error('Error in event handler for "'.concat(J,'":'),Q)}if(R.once)Y.push(R)}for(let R of Y)k.delete(R);if(k.size===0)this.listeners.delete(J)}hasListeners(J){let Z=this.listeners.get(J);return Z!==void 0&&Z.size>0}listenerCount(J){let Z=this.listeners.get(J);return Z?Z.size:0}removeAllListeners(J){if(J)this.listeners.delete(J);else this.listeners.clear()}eventNames(){return Array.from(this.listeners.keys())}};var w7=class{constructor(J){if(this.plants=[],this.emitter=new sq,this.destroyed=!1,this.state="idle",this.animationId=null,this.startTime=0,this.pausedAt=0,this.elapsedTime=0,this.speed=1,this.lastFrameTime=0,this.lastReportedGeneration=-1,this.tick=(Z)=>{if(this.state!=="playing")return;if(Z-this.lastFrameTime<this.frameInterval){this.animationId=requestAnimationFrame(this.tick);return}this.lastFrameTime=Z;let k;try{k=this.advanceFrame(Z)}catch(Y){this.handleFrameError(Y);return}if(k)this.animationId=requestAnimationFrame(this.tick)},this.options=G7(J),this.speed=this.options.speed,this.frameInterval=1000/this.options.targetFPS,this.options.respectReducedMotion&&gG()){this.handleReducedMotion();return}if(this.renderer=new V7(this.options),this.plants=RQ(this.options),this.options.autoplay)this.play()}handleReducedMotion(){this.renderer=new V7(this.options),this.plants=RQ(this.options),this.renderer.renderStatic(this.plants,1),this.state="complete",this.emitStateChange()}advanceFrame(J){var Z,k,Y,R;this.elapsedTime=(J-this.startTime)*this.speed/1000,this.emitGenerationEvents();let Q=Math.min(1,this.elapsedTime/this.options.duration);if((k=(Z=this.options.events).onProgress)==null||k.call(Z,Q,this.elapsedTime),this.emitter.hasListeners("progress"))this.emitter.emit("progress",{progress:Q,elapsedTime:this.elapsedTime});let X=Math.min(this.elapsedTime,this.options.duration);if(this.renderer.render(this.plants,X),this.elapsedTime>=this.options.duration)if(this.options.loop)this.startTime=J,this.elapsedTime=0,this.lastReportedGeneration=-1;else return this.state="complete",this.emitStateChange(),(R=(Y=this.options.events).onComplete)==null||R.call(Y),this.emitter.emit("complete",void 0),!1;return!0}emitGenerationEvents(){var J,Z;let{duration:k,generations:Y}=this.options,R=QQ(this.elapsedTime,k,Y);for(let Q=Math.max(1,this.lastReportedGeneration+1);Q<=R;Q++)if((Z=(J=this.options.events).onGenerationComplete)==null||Z.call(J,Q,Y),this.emitter.hasListeners("generationComplete"))this.emitter.emit("generationComplete",{generation:Q,totalGenerations:Y});if(R>this.lastReportedGeneration)this.lastReportedGeneration=R}handleFrameError(J){if(this.animationId!==null)cancelAnimationFrame(this.animationId),this.animationId=null;this.pausedAt=this.elapsedTime,this.state="paused",this.emitStateChange(),console.error("Garten: A rendering error occurred; the animation has been paused. Call play() to retry.",J)}emitStateChange(){var J,Z;if((Z=(J=this.options.events).onStateChange)==null||Z.call(J,this.state),this.emitter.hasListeners("stateChange"))this.emitter.emit("stateChange",{state:this.state})}play(){if(this.destroyed||this.state==="playing")return;let J=this.options.duration,Z=this.state==="paused"?this.pausedAt:this.elapsedTime>0&&this.elapsedTime<J?this.elapsedTime:0;if(Z===0)this.elapsedTime=0,this.lastReportedGeneration=-1;this.startTime=performance.now()-Z*1000/this.speed,this.state="playing",this.emitStateChange(),this.emitter.emit("play",void 0),this.lastFrameTime=performance.now()-this.frameInterval,this.animationId=requestAnimationFrame(this.tick)}pause(){if(this.destroyed||this.state!=="playing")return;if(this.animationId!==null)cancelAnimationFrame(this.animationId),this.animationId=null;this.pausedAt=this.elapsedTime,this.state="paused",this.emitStateChange(),this.emitter.emit("pause",void 0)}stop(){if(this.destroyed)return;if(this.animationId!==null)cancelAnimationFrame(this.animationId),this.animationId=null;this.elapsedTime=0,this.pausedAt=0,this.lastReportedGeneration=-1,this.state="idle",this.emitStateChange(),this.emitter.emit("stop",void 0),this.renderer.render(this.plants,0)}seek(J){var Z,k;if(this.destroyed||!Number.isFinite(J))return;let Y=Math.max(0,Math.min(J,this.options.duration));if(this.state==="playing")this.startTime=performance.now()-Y*1000/this.speed;else this.pausedAt=Y;if(this.elapsedTime=Y,this.lastReportedGeneration=QQ(Y,this.options.duration,this.options.generations),this.renderer.render(this.plants,Y),Y>=this.options.duration&&!this.options.loop){if(this.animationId!==null)cancelAnimationFrame(this.animationId),this.animationId=null;if(this.state!=="complete")this.state="complete",this.emitStateChange(),(k=(Z=this.options.events).onComplete)==null||k.call(Z),this.emitter.emit("complete",void 0)}else if(this.state==="complete")this.state="paused",this.emitStateChange()}setSpeed(J){if(this.destroyed)return;if(typeof J!=="number"||!Number.isFinite(J)||J<=0)throw Error("Garten: Speed must be a positive finite number");let{min:Z,max:k}=KQ.SPEED,Y=Math.min(k,Math.max(Z,J)),R=this.state==="playing";if(R)this.pause();if(this.speed=Y,this.options.speed=Y,R)this.play()}getState(){return this.state}getProgress(){return Math.min(1,this.elapsedTime/this.options.duration)}getElapsedTime(){return this.elapsedTime}on(J,Z){return this.emitter.on(J,Z)}once(J,Z){return this.emitter.once(J,Z)}off(J,Z){this.emitter.off(J,Z)}setOptions(J){var Z;if(this.destroyed)return;if(J.speed!==void 0){if(typeof J.speed!=="number"||!Number.isFinite(J.speed)||J.speed<=0)throw Error("Garten: Speed must be a positive finite number")}if(J.container!==void 0){if((typeof J.container==="string"?document.querySelector(J.container):J.container)!==this.options.container)throw Error("Garten: container cannot be changed after construction. Destroy this instance and create a new one instead.")}let k=J.generations!==void 0||J.density!==void 0||J.maxHeight!==void 0||J.colors!==void 0||J.seed!==void 0||J.categories!==void 0||J.timingCurve!==void 0||J.duration!==void 0,Y=J.colors?{accent:this.options.colors.accent,palette:this.options.colors.palette,accentWeight:this.options.colors.accentWeight,flowerColors:this.options.colors.flowerColors,foliageColors:this.options.colors.foliageColors,...q6(J.colors)}:void 0;if(this.options=G7({container:this.options.container,duration:this.options.duration,generations:this.options.generations,maxHeight:this.options.maxHeight,density:this.options.density,categories:(Z=this.options.categories)!=null?Z:void 0,seed:this.options.seed,timingCurve:this.options.timingCurve,background:this.options.background,opacity:this.options.opacity,zIndex:this.options.zIndex,loop:this.options.loop,speed:this.options.speed,autoplay:this.options.autoplay,respectReducedMotion:this.options.respectReducedMotion,maxPixelRatio:this.options.maxPixelRatio,targetFPS:this.options.targetFPS,fadeHeight:this.options.fadeHeight,fadeColor:this.options.fadeColor,events:this.options.events,colors:{accent:this.options.colors.accent,palette:this.options.colors.palette,accentWeight:this.options.colors.accentWeight,flowerColors:this.options.colors.flowerColors,foliageColors:this.options.colors.foliageColors},...q6(J),...Y?{colors:Y}:{}}),this.renderer.setOptions(this.options),J.duration!==void 0)this.pausedAt=Math.min(this.pausedAt,this.options.duration),this.elapsedTime=Math.min(this.elapsedTime,this.options.duration);if(this.frameInterval=1000/this.options.targetFPS,this.emitter.hasListeners("optionsChange"))this.emitter.emit("optionsChange",{options:J});if(k)this.regenerate();else if(this.state!=="playing")this.renderer.render(this.plants,Math.min(this.elapsedTime,this.options.duration));if(J.speed!==void 0)this.setSpeed(this.options.speed)}regenerate(){if(this.destroyed)return;let J=this.state==="playing";if(J)this.pause();if(this.plants=RQ(this.options),this.lastReportedGeneration=QQ(this.elapsedTime,this.options.duration,this.options.generations),this.renderer.render(this.plants,this.elapsedTime),this.emitter.emit("regenerate",void 0),J)this.play()}destroy(){if(this.destroyed)return;if(this.destroyed=!0,this.animationId!==null)cancelAnimationFrame(this.animationId),this.animationId=null;this.renderer.destroy(),this.options.events={},this.emitter.removeAllListeners(),this.plants=[],this.elapsedTime=0,this.pausedAt=0,this.state="idle"}},I7=class J{constructor(Z,k){this.x=Z,this.y=k}static from(Z){return new J(Z.x,Z.y)}static fromArray(Z){return new J(Z[0],Z[1])}static fromPolar(Z,k){return new J(Math.cos(Z)*k,Math.sin(Z)*k)}static zero(){return new J(0,0)}static up(){return new J(0,-1)}static down(){return new J(0,1)}static left(){return new J(-1,0)}static right(){return new J(1,0)}static lerp(Z,k,Y){return new J(Z.x+(k.x-Z.x)*Y,Z.y+(k.y-Z.y)*Y)}static distance(Z,k){let Y=k.x-Z.x,R=k.y-Z.y;return Math.sqrt(Y*Y+R*R)}static distanceSquared(Z,k){let Y=k.x-Z.x,R=k.y-Z.y;return Y*Y+R*R}static angleBetween(Z,k){return Math.atan2(k.y-Z.y,k.x-Z.x)}static temp(Z,k){return J._tempVec.x=Z,J._tempVec.y=k,J._tempVec}add(Z){return new J(this.x+Z.x,this.y+Z.y)}subtract(Z){return new J(this.x-Z.x,this.y-Z.y)}multiply(Z){return new J(this.x*Z,this.y*Z)}divide(Z){if(Z===0)throw Error("Vec2: Division by zero");return new J(this.x/Z,this.y/Z)}negate(){return new J(-this.x,-this.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}lengthSquared(){return this.x*this.x+this.y*this.y}normalize(){let Z=this.length();if(Z===0)return new J(0,0);return new J(this.x/Z,this.y/Z)}setLength(Z){return this.normalize().multiply(Z)}limit(Z){if(this.lengthSquared()>Z*Z)return this.setLength(Z);return this}dot(Z){return this.x*Z.x+this.y*Z.y}cross(Z){return this.x*Z.y-this.y*Z.x}angle(){return Math.atan2(this.y,this.x)}rotate(Z){let k=Math.cos(Z),Y=Math.sin(Z);return new J(this.x*k-this.y*Y,this.x*Y+this.y*k)}perpendicular(){return new J(-this.y,this.x)}reflect(Z){let k=2*this.dot(Z);return new J(this.x-k*Z.x,this.y-k*Z.y)}projectOnto(Z){let k=Z.lengthSquared();if(k===0)return J.zero();let Y=this.dot(Z)/k;return Z.multiply(Y)}lerp(Z,k){return new J(this.x+(Z.x-this.x)*k,this.y+(Z.y-this.y)*k)}moveTowards(Z,k){let Y=Z.x-this.x,R=Z.y-this.y,Q=Y*Y+R*R;if(Q===0||Q<=k*k)return new J(Z.x,Z.y);let X=Math.sqrt(Q);return new J(this.x+Y/X*k,this.y+R/X*k)}distanceTo(Z){return J.distance(this,Z)}distanceToSquared(Z){return J.distanceSquared(this,Z)}angleTo(Z){return J.angleBetween(this,Z)}clamp(Z,k,Y,R){return new J(Math.max(Z,Math.min(Y,this.x)),Math.max(k,Math.min(R,this.y)))}round(){return new J(Math.round(this.x),Math.round(this.y))}floor(){return new J(Math.floor(this.x),Math.floor(this.y))}ceil(){return new J(Math.ceil(this.x),Math.ceil(this.y))}abs(){return new J(Math.abs(this.x),Math.abs(this.y))}equals(Z){return this.x===Z.x&&this.y===Z.y}approximatelyEquals(Z,k=0.0001){return Math.abs(this.x-Z.x)<k&&Math.abs(this.y-Z.y)<k}isZero(){return this.x===0&&this.y===0}toArray(){return[this.x,this.y]}toObject(){return{x:this.x,y:this.y}}clone(){return new J(this.x,this.y)}toString(){return"Vec2(".concat(this.x,", ").concat(this.y,")")}};I7._tempVec=new I7(0,0);var BO={natural:{name:"Natural",palette:"natural",accent:pJ.DEFAULT_ACCENT},sunset:{name:"Sunset",palette:"warm",accent:"#FF6B35",fadeColor:"#FFF5EB"},ocean:{name:"Ocean",palette:"cool",accent:"#0077B6",fadeColor:"#F0F8FF"},grayscale:{name:"Grayscale",palette:"grayscale",accent:"#666666",fadeColor:"#F5F5F5"},vibrant:{name:"Vibrant",palette:"vibrant",accent:"#FF1493"},sakura:{name:"Sakura",palette:"natural",accent:"#FFB7C5",flowerColors:["#FFB7C5","#FFDCE5","#FFC0CB","#FF69B4","#FFFFFF"],fadeColor:"#FFF5F7"},lavender:{name:"Lavender",palette:"cool",accent:"#9370DB",flowerColors:["#9370DB","#E6E6FA","#DDA0DD","#BA55D3","#8B008B"],foliageColors:["#556B2F","#6B8E23","#808000"],fadeColor:"#F5F0FF"},autumn:{name:"Autumn",palette:"warm",accent:"#D2691E",flowerColors:["#D2691E","#CD853F","#DAA520","#B8860B","#8B4513","#FF8C00"],foliageColors:["#8B4513","#A0522D","#CD853F","#D2691E"],fadeColor:"#FFF8DC"},midnight:{name:"Midnight",palette:"cool",accent:"#4169E1",flowerColors:["#4169E1","#6A5ACD","#9932CC","#8A2BE2","#483D8B"],foliageColors:["#2F4F4F","#006400","#228B22"],fadeColor:"#1A1A2E"},tropical:{name:"Tropical",palette:"vibrant",accent:"#FF4500",flowerColors:["#FF4500","#FF6347","#FFD700","#00CED1","#FF1493","#32CD32"],foliageColors:["#006400","#228B22","#32CD32"]},zen:{name:"Zen",palette:"grayscale",accent:"#8B8B83",flowerColors:["#FFFFFF","#F5F5F5","#E8E8E8","#98FB98"],foliageColors:["#556B2F","#6B8E23"],fadeColor:"#FAFAFA"}};var C7={name:"HSCON",full:"The Sustainability Conference ’26",host:"Hult Sustainability Society",tagline:"Speakers in fashion, finance, diplomacy, tech and more. Breakfast and lunch included.",dateLabel:"21 November 2026",time:"10:00–16:00",venue:"Hult UG Campus",address:"35 Commercial Road, London E1 1LD",repo:"",partners:["Hult Founders Lab","Hult AI Collective","Business of Style","Hult Asian Society","Social Impact Club","Latam Society","Women in Business"],agenda:[{time:"10:00-10:30",session:"Arrival & breakfast",speaker:"-",href:"#experience"},{time:"10:30–11:00",session:"Fashion",speaker:"John Atcheson"},{time:"11:00–12:00",session:"Sustainability Panel",speaker:"Natasha Turner, Amanda Brasil-Leigh & Dr. Stephanie Daher"},{time:"12:00-13:00",session:"Lunch",speaker:"-",href:"#experience"},{time:"13:00–13:30",session:"Global Affairs",speaker:"Nicole Jacobo"},{time:"13:30–14:30",session:"Consumer Goods",speaker:"Lemonaid"},{time:"14:30–15:30",session:"Tech & Start-ups",speaker:"HFL",href:"session/",highlight:!0},{time:"15:30–16:00",session:"Closing",speaker:"—"}],links:[{label:"Closing the Loop Wordle",note:"Guess a five-letter word about using resources again",href:"wordle/"},{label:"HSCON Connections",note:"Group ideas from circularity and the conference tracks",href:"connections/"},{label:"Paper Toss",note:"Flick the cup into the recycling bin in 3D",href:"cup-toss/"},{label:"Tech & Start-ups session",note:"Facilitator run of show and live game links",href:"session/"},{label:"Pitch scoreboard",note:"Teams, scoring, ranking and timer",href:"pitch/"}],session:[{min:4,title:"Intro",detail:"HSCON, HFL and the sustainability tech theme.",kind:"talk"},{min:7,title:"Estimation game",detail:"Schaetzorama on the big screen; phones join through the displayed link.",kind:"game"},{min:6,title:"Circular economy and carbon credits",detail:"Connect the economics and finance vocabulary to real decisions.",kind:"talk"},{min:6,title:"Word Tiles or Buzzwort",detail:"Use startup and climate tech terms as prompts.",kind:"game"},{min:4,title:"AI footprint and frugal innovation",detail:"Two more trends, then the mini pitch prompt.",kind:"talk"},{min:20,title:"Breakout: mini pitch",detail:"What is the idea? Who is it for? Where does it work? Why now? Pitch it.",kind:"breakout"},{min:10,title:"Pitch and score",detail:"Teams present. Score What, Who, Where, Why and Pitch on the host scoreboard.",kind:"score"},{min:3,title:"Winners and close",detail:"Reveal results, give the gift and point people back to the event site.",kind:"talk"}]};function T7(){let J=document.querySelector(".brand");if(J&&!J.querySelector(".brand-title")){J.replaceChildren();let Z=document.createElement("span");Z.className="brand-title",Z.textContent="HSCON";let k=document.createElement("span");k.className="brand-sub",k.textContent="Closing the Loop",J.append(Z,k),J.dataset.flowerWordmark="small",J.setAttribute("aria-label","HSCON, Closing the Loop, Home")}for(let Z of document.querySelectorAll("[data-flower-wordmark]")){if(Z.querySelector(".flower-canvas"))continue;if(Z!==J&&Z.childElementCount===0){let G=document.createElement("span");G.className="bloom-lettering",G.textContent=Z.textContent,Z.replaceChildren(G)}let k=document.createElement("canvas");k.className="flower-canvas",k.setAttribute("aria-hidden","true"),Z.prepend(k);let Y=k.getContext("2d");if(!Y)continue;let R=Z.dataset.flowerWordmark==="small",Q=matchMedia("(prefers-reduced-motion: reduce)").matches,X=performance.now(),N=0,$=0,K=0,W=()=>{let G=Z.getBoundingClientRect(),B=Math.min(devicePixelRatio||1,2);N=Math.max(1,G.width),$=Math.max(1,G.height),k.width=Math.round(N*B),k.height=Math.round($*B),Y.setTransform(B,0,0,B,0,0),U(performance.now())},U=(G)=>{Y.clearRect(0,0,N,$);let B=R?5:Math.min(8,Math.max(3,Math.round(N/75))),V=R?4.4:Math.min(10,Math.max(5,N/70));for(let E=0;E<B;E++){let q=N*(E+0.55)/B,O=(Math.sin(E*9.7)+1)*0.16+0.42,A=$*(1-O),H=$*(R?0.88:0.96),_=Q?1:Math.max(0,Math.min(1,(G-X-E*85)/1100)),C=1-(1-_)**3,I=H+(A-H)*C;if(Y.strokeStyle=E%2?"#336b4b":"#477d54",Y.lineWidth=R?1.1:1.8,Y.lineCap="round",Y.beginPath(),Y.moveTo(q+V*0.5,H),Y.quadraticCurveTo(q-V*1.2,(H+I)/2,q,I),Y.stroke(),_<0.38)continue;let M=Math.min(1,(_-0.38)/0.62),j=V*M;Y.fillStyle=E%3===0?"#d62839":E%3===1?"#e88479":"#b93446";for(let y=0;y<5;y++){let P=y*Math.PI*2/5-Math.PI/2;Y.beginPath(),Y.ellipse(q+Math.cos(P)*j*0.7,I+Math.sin(P)*j*0.7,j*0.72,j*0.45,P,0,Math.PI*2),Y.fill()}Y.fillStyle="#eec969",Y.beginPath(),Y.arc(q,I,j*0.35,0,Math.PI*2),Y.fill()}if(!Q&&G-X<2200)K=requestAnimationFrame(U)},F=new ResizeObserver(W);F.observe(Z),K=requestAnimationFrame(U),window.addEventListener("pagehide",()=>{cancelAnimationFrame(K),F.disconnect()},{once:!0})}}var P7="#d62839";function S7(J={}){if(J.decorations!==!1&&!document.querySelector("#name")&&!document.querySelector(".page-bloom")){let Q=document.createElement("p");Q.className="page-bloom",Q.dataset.flowerWordmark="hero",Q.textContent="Closing the Loop",document.querySelector("main")?.before(Q)}if(J.decorations!==!1){T7();let Q=document.querySelector(".partner-marquee");if(!Q)Q=document.createElement("div"),Q.className="partner-marquee",Q.setAttribute("aria-label","Official partners"),document.body.prepend(Q);let X=document.createElement("div");X.className="partner-track";for(let N=0;N<2;N++){let $=document.createElement("div");if($.className="partner-group",N)$.setAttribute("aria-hidden","true");for(let K of C7.partners){let W=document.createElement("span");W.textContent=K,$.append(W)}X.append($)}Q.replaceChildren(X)}let Z=J.duration??90,k=J.container??document.getElementById("garden");if(!k)k=document.createElement("div"),k.id="garden",k.setAttribute("aria-hidden","true"),document.body.prepend(k);let Y=null;try{if(Y=new w7({container:k,duration:Z,generations:30,maxHeight:0.75,density:"dense",categories:["rose","tulip","daisy","wildflower","fern"],seed:J.seed??2111,autoplay:!J.manual&&!matchMedia("(prefers-reduced-motion: reduce)").matches,loop:!1,targetFPS:30,colors:{accent:P7,palette:"natural",accentWeight:0.55,flowerColors:[P7,"#e88479","#f0c5a9","#e9d790"],foliageColors:["#285b3d","#3e7950","#6a8d5a"]},zIndex:0}),matchMedia("(prefers-reduced-motion: reduce)").matches)Y.seek(Z);else if(J.manual&&J.startAt)Y.seek(J.startAt*Z)}catch(Q){console.warn("Garten unavailable",Q)}let R=0;return{garden:Y,growTo(Q,X=1400){if(!Y)return;if(cancelAnimationFrame(R),Y.pause(),matchMedia("(prefers-reduced-motion: reduce)").matches){Y.seek(Z);return}let N=Y.getProgress(),$=Math.max(0,Math.min(1,Q)),K=performance.now(),W=(U)=>{let F=Math.min(1,(U-K)/X),G=1-Math.pow(1-F,3);if(Y.seek((N+($-N)*G)*Z),F<1)R=requestAnimationFrame(W)};R=requestAnimationFrame(W)}}}var j7="hscon.break-trail.v1",f7=[{id:"wordle",label:"Wordle",href:"../wordle/"},{id:"connections",label:"Connections",href:"../connections/"},{id:"cup-toss",label:"Paper Toss",href:"../cup-toss/"}];function v7(){try{let J=JSON.parse(localStorage.getItem(j7)||"[]");return Array.isArray(J)?f7.map((Z)=>Z.id).filter((Z)=>J.includes(Z)):[]}catch{return[]}}function y7(J){let Z=new Set(v7());if(Z.has(J))return;Z.add(J);try{localStorage.setItem(j7,JSON.stringify([...Z]))}catch{}document.querySelectorAll("[data-break-trail]").forEach((k)=>b7(k,J))}function b7(J,Z){let k=new Set(v7());J.replaceChildren(d8("div",{class:"break-trail-heading"},d8("span",{},"The break collection"),d8("span",{},`${k.size} / 3 played`)),d8("nav",{class:"break-trail-steps",ariaLabel:"Breakfast and lunch games"},...f7.map((Y,R)=>d8("a",{href:Y.href,class:`break-step${Z===Y.id?" current":""}${k.has(Y.id)?" complete":""}`,ariaCurrent:Z===Y.id?"page":void 0},d8("span",{class:"break-step-number"},k.has(Y.id)?"✓":String(R+1).padStart(2,"0")),d8("span",{},Y.label)))))}function h7(J){let Z=document.querySelector("main");if(!Z)return;let k=d8("div",{class:"break-trail","data-break-trail":""});Z.prepend(k),b7(k,J)}h7("cup-toss");S7({duration:15});var oq=FZ("#cup-score"),aq=FZ("#cup-best"),WQ=FZ("#cup-message"),rq=FZ("#cup-phase"),g7=FZ("#cup-reset"),tq=FZ("#cup-reflection"),x7=!1;try{let J=U7(FZ("#cup-game"),{onState:(Z)=>{if(oq.textContent=String(Z.score),aq.textContent=String(Z.best),rq.textContent={ready:"Ready to toss",aiming:"Aim and flick up",flight:"Cup in flight",scored:"Basket scored",miss:"Try again"}[Z.phase],Z.score>0||Z.best>0){if(!x7)y7("cup-toss"),x7=!0;tq.hidden=!1}},onMessage:(Z)=>{WQ.textContent=Z}});g7.onclick=()=>{J.reset(),WQ.textContent="New run. Flick the cup upward to toss."},window.addEventListener("pagehide",J.destroy,{once:!0})}catch{WQ.textContent="The 3D game could not start on this device.",g7.disabled=!0}
