(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{BCbF:function(t,e,i){"use strict";i.r(e),i.d(e,"PolygonRenderer",(function(){return u}));var n=i("mrSG"),s=i("f6yo"),a=i("GEp6"),l=i("jFln"),o=i("VaSN"),d=i("pJOz"),h=i("a7Ha"),r=i("VdBB"),_=i("Tmoa"),u=function(t){function e(e){var i=t.call(this)||this;return i._data=null,i._backHittest=new r.HitTestResult(r.HitTestResult.MOVEPOINT_BACKGROUND),i._points=[],i._hittest=e||new r.HitTestResult(r.HitTestResult.MOVEPOINT),i}return Object(n.__extends)(e,t),e.prototype.setData=function(t){this._data=t,this._points=t.points},e.prototype.hitTest=function(t){if(null===this._data||void 0!==this._data.mouseTouchable&&!this._data.mouseTouchable)return null;for(var e=Object(o.lastEventIsTouch)()?24:3,i=1;i<this._points.length;i++){var n=this._points[i-1],l=this._points[i];if(Object(a.distanceToSegment)(n,l,t).distance<=e)return this._hittest}if(this._data.filled&&this._data.fillBackground&&this._points.length>0){n=this._points[0],l=this._points[this._points.length-1];if(Object(a.distanceToSegment)(n,l,t).distance<=e)return this._hittest}return this._data.filled&&this._data.fillBackground&&Object(s.pointInPolygon)(t,this._data.points)?this._backHittest:null},e.prototype._drawImpl=function(t,e){if(null!==this._data&&0!==this._points.length){t.beginPath(),t.lineCap="butt",t.strokeStyle=this._data.color,t.lineWidth=this._data.linewidth,Object(l.setLineStyle)(t,this._data.linestyle);var i=this._points[0];t.moveTo(i.x,i.y);for(var n=0,s=this._points;n<s.length;n++){var a=s[n];t.lineTo(a.x,a.y)}this._data.filled&&this._data.fillBackground&&(t.fillStyle=Object(_.generateColor)(this._data.backcolor,this._data.transparency),t.fill()),this._data.filled&&!this._data.skipClosePath&&t.closePath(),this._data.linewidth>0&&t.stroke(),this._points.length>1&&(this._data.leftend===h.LineEnd.Arrow&&Object(d.drawArrow)(this._points[1],this._points[0],t,t.lineWidth,e.pixelRatio),this._data.rightend===h.LineEnd.Arrow&&Object(d.drawArrow)(this._points[this._points.length-2],this._points[this._points.length-1],t,t.lineWidth,e.pixelRatio))}},e}(i("cPgM").ScaledPaneRenderer)},NN6M:function(t,e,i){"use strict";i.r(e),i.d(e,"ParallelChannelRenderer",(function(){return u}));var n=i("mrSG"),s=i("Eyy1"),a=i("aO4+"),l=i("GEp6"),o=i("hBTJ"),d=i("jFln"),h=i("VdBB"),r=i("Zp/P"),_=i("Tmoa"),u=function(t){function e(e,i){var n=t.call(this)||this;return n._data=null,n._hittestResult=e||new h.HitTestResult(h.HitTestResult.MOVEPOINT),n._backHittestResult=i||new h.HitTestResult(h.HitTestResult.MOVEPOINT_BACKGROUND),n}return Object(n.__extends)(e,t),e.prototype.setData=function(t){this._data=t},e.prototype.hitTest=function(t,e){if(null===this._data||this._data.points.length<2)return null;var i=this._data.points,n=i[0],s=i[1],a=this._extendAndHitTestLineSegment(t,n,s,e);if(null!==a)return a;if(4===this._data.points.length&&!this._data.skipTopLine){var l=this._data.points,o=l[2],d=l[3],h=this._extendAndHitTestLineSegment(t,o,d,e);if(null!==h)return h;if(this._data.showMidline&&!this._data.skipLines){
var r=n.add(o).scaled(.5),_=s.add(d).scaled(.5),u=this._extendAndHitTestLineSegment(t,r,_,e);if(null!==u)return u}}return this._data.hittestOnBackground&&this._data.fillBackground?this._hitTestBackground(t):null},e.prototype._drawImpl=function(t,e){if(!(null===this._data||this._data.points.length<2)){t.lineCap="butt",t.strokeStyle=this._data.color,t.lineWidth=this._data.linewidth,Object(d.setLineStyle)(t,this._data.linestyle);var i=this._data.points,n=i[0],s=i[1];if(this._data.skipLines||this._extendAndDrawLineSegment(t,n,s,e),4===this._data.points.length){var a=this._data.points,l=a[2],o=a[3];if(this._data.skipLines||this._data.skipTopLine||this._extendAndDrawLineSegment(t,l,o,e),this._data.fillBackground&&this._drawBackground(t,this._data.points,e),this._data.showMidline&&!this._data.skipLines){t.strokeStyle=this._data.midcolor,t.lineWidth=this._data.midlinewidth,Object(d.setLineStyle)(t,this._data.midlinestyle);var h=n.add(l).scaled(.5),r=s.add(o).scaled(.5);this._extendAndDrawLineSegment(t,h,r,e)}}}},e.prototype._getColor=function(){var t=Object(s.ensureNotNull)(this._data);return Object(_.generateColor)(t.backcolor,t.transparency)},e.prototype._extendAndDrawLineSegment=function(t,e,i,n){var s=this._extendAndClipLineSegment(e,i,n);null!==s&&Object(d.drawLine)(t,s[0].x,s[0].y,s[1].x,s[1].y)},e.prototype._extendAndHitTestLineSegment=function(t,e,i,n){var s=this._extendAndClipLineSegment(e,i,n);if(null!==s&&Object(l.distanceToSegment)(s[0],s[1],t).distance<=3)return this._hittestResult;return null},e.prototype._extendAndClipLineSegment=function(t,e,i){var n=Object(s.ensureNotNull)(this._data);return Object(r.extendAndClipLineSegment)(t,e,i.cssWidth,i.cssHeight,n.extendleft,n.extendright)},e.prototype._drawBackground=function(t,e,i){var n=Object(s.ensureNotNull)(this._data),o=e[0],d=e[1],h=e[2],r=e[3];if(!(Object(a.equalPoints)(o,d)||Object(a.equalPoints)(h,r)||Object(l.distanceToLine)(o,d,h).distance<1e-6||Object(l.distanceToLine)(o,d,r).distance<1e-6||i.cssWidth<=0||i.cssHeight<=0)){var _=[new a.Point(0,0),new a.Point(i.cssWidth,0),new a.Point(i.cssWidth,i.cssHeight),new a.Point(0,i.cssHeight)];if(_=c(_,o,d,r),n.extendright||(_=c(_,d,r,h)),_=c(_,r,h,o),n.extendleft||(_=c(_,h,o,d)),null!==_){t.beginPath(),t.moveTo(_[0].x,_[0].y);for(var u=1;u<_.length;u++)t.lineTo(_[u].x,_[u].y);t.fillStyle=this._getColor(),t.fill()}}},e.prototype._hitTestBackground=function(t){var e=Object(s.ensureNotNull)(this._data);if(4!==e.points.length)return null;var i=e.points,n=i[0],a=i[1],l=i[2],o=(a.y-n.y)/(a.x-n.x),d=n.y+o*(t.x-n.x),h=l.y+o*(t.x-l.x),r=Math.max(d,h),_=Math.min(d,h),u=Math.min(n.x,a.x),c=Math.max(n.x,a.x);return!e.extendleft&&t.x<u||!e.extendright&&t.x>c?null:t.y>=_&&t.y<=r?this._backHittestResult:null},e}(i("cPgM").ScaledPaneRenderer);function c(t,e,i,n){return null!==t?Object(o.intersectPolygonAndHalfplane)(t,Object(a.halfplaneThroughPoint)(Object(a.lineThroughPoints)(e,i),n)):null}}}]);