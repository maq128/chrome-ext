var require, define;
!
function(e) { // 建立 require / define 支持
	function t(e, t) {
		function n() {
			clearTimeout(o)
		}
		if (!(e in s)) {
			s[e] = !0;
			var i = document.createElement("script");
			if (t) {
				var o = setTimeout(t, require.timeout);
				i.onerror = function() {
					clearTimeout(o), t()
				}, "onload" in i ? i.onload = n : i.onreadystatechange = function() {
					("loaded" == this.readyState || "complete" == this.readyState) && n()
				}
			}
			return i.type = "text/javascript", i.src = e, r.appendChild(i), i
		}
	}
	function n(e, n, r) {
		var o = i[e] || (i[e] = []);
		o.push(n);
		var a, s = u[e] || u[e + ".js"] || {},
			c = s.pkg;
		a = c ? l[c].url : s.url || e, t(a, r &&
		function() {
			r(e)
		})
	}
	if (!require) {
		var r = document.getElementsByTagName("head")[0],
			i = {},
			o = {},
			a = {},
			s = {},
			u = {},
			l = {};
		define = function(e, t) {
			e = e.replace(/\.js$/i, ""), o[e] = t;
			var n = i[e];
			if (n) {
				for (var r = 0, a = n.length; a > r; r++) n[r]();
				delete i[e]
			}
		}, require = function(e) {
			if (e && e.splice) return require.async.apply(this, arguments);
			e = require.alias(e);
			var t = a[e];
			if (t) return t.exports;
			var n = o[e];
			if (!n) throw "[ModJS] Cannot find module `" + e + "`";
			t = a[e] = {
				exports: {}
			};
			var r = "function" == typeof n ? n.apply(t, [require, t.exports, t]) : n;
			return r && (t.exports = r), t.exports
		}, require.async = function(t, r, i) {
			function a(e) {
				for (var t = 0, r = e.length; r > t; t++) {
					var f = require.alias(e[t]);
					if (f in o) {
						var d = u[f] || u[f + ".js"];
						d && "deps" in d && a(d.deps)
					} else if (!(f in l)) {
						l[f] = !0, c++, n(f, s, i);
						var d = u[f] || u[f + ".js"];
						d && "deps" in d && a(d.deps)
					}
				}
			}
			function s() {
				if (0 == c--) {
					for (var n = [], i = 0, o = t.length; o > i; i++) n[i] = require(t[i]);
					r && r.apply(e, n)
				}
			}
			"string" == typeof t && (t = [t]);
			var l = {},
				c = 0;
			a(t), s()
		}, require.resourceMap = function(e) {
			var t, n;
			n = e.res;
			for (t in n) n.hasOwnProperty(t) && (u[t] = n[t]);
			n = e.pkg;
			for (t in n) n.hasOwnProperty(t) && (l[t] = n[t])
		}, require.loadJs = function(e) {
			t(e)
		}, require.loadCss = function(e) {
			if (e.content) {
				var t = document.createElement("style");
				t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e.content : t.innerHTML = e.content, r.appendChild(t)
			} else if (e.url) {
				var n = document.createElement("link");
				n.href = e.url, n.rel = "stylesheet", n.type = "text/css", r.appendChild(n)
			}
		}, require.alias = function(e) {
			return e.replace(/\.js$/i, "")
		}, require.timeout = 5e3
	}
}(this),

define("jquery.js", function(e, t, n) { // 引入 jQuery
	!
	function(e, t) {
		"object" == typeof n && "object" == typeof n.exports ? n.exports = e.document ? t(e, !0) : function(e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return t(e)
		} : t(e)
	}("undefined" != typeof window ? window : this, function(e, t) {
		function n(e) {
			var t = e.length,
				n = it.type(e);
			return "function" === n || it.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
		}
		function r(e, t, n) {
			if (it.isFunction(t)) return it.grep(e, function(e, r) {
				return !!t.call(e, r, e) !== n
			});
			if (t.nodeType) return it.grep(e, function(e) {
				return e === t !== n
			});
			if ("string" == typeof t) {
				if (dt.test(t)) return it.filter(t, e, n);
				t = it.filter(t, e)
			}
			return it.grep(e, function(e) {
				return it.inArray(e, t) >= 0 !== n
			})
		}
		function i(e, t) {
			do e = e[t];
			while (e && 1 !== e.nodeType);
			return e
		}
		function o(e) {
			var t = bt[e] = {};
			return it.each(e.match($t) || [], function(e, n) {
				t[n] = !0
			}), t
		}
		function a() {
			ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ht.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
		}
		function s() {
			(ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (a(), it.ready())
		}
		function u(e, t, n) {
			if (void 0 === n && 1 === e.nodeType) {
				var r = "data-" + t.replace(Tt, "-$1").toLowerCase();
				if (n = e.getAttribute(r), "string" == typeof n) {
					try {
						n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : St.test(n) ? it.parseJSON(n) : n
					} catch (i) {}
					it.data(e, t, n)
				} else n = void 0
			}
			return n
		}
		function l(e) {
			var t;
			for (t in e) if (("data" !== t || !it.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
			return !0
		}
		function c(e, t, n, r) {
			if (it.acceptData(e)) {
				var i, o, a = it.expando,
					s = e.nodeType,
					u = s ? it.cache : e,
					l = s ? e[a] : e[a] && a;
				if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = X.pop() || it.guid++ : a), u[l] || (u[l] = s ? {} : {
					toJSON: it.noop
				}), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = it.extend(u[l], t) : u[l].data = it.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[it.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[it.camelCase(t)])) : i = o, i
			}
		}
		function f(e, t, n) {
			if (it.acceptData(e)) {
				var r, i, o = e.nodeType,
					a = o ? it.cache : e,
					s = o ? e[it.expando] : it.expando;
				if (a[s]) {
					if (t && (r = n ? a[s] : a[s].data)) {
						it.isArray(t) ? t = t.concat(it.map(t, it.camelCase)) : t in r ? t = [t] : (t = it.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
						for (; i--;) delete r[t[i]];
						if (n ? !l(r) : !it.isEmptyObject(r)) return
					}(n || (delete a[s].data, l(a[s]))) && (o ? it.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
				}
			}
		}
		function d() {
			return !0
		}
		function p() {
			return !1
		}
		function h() {
			try {
				return ht.activeElement
			} catch (e) {}
		}
		function v(e) {
			var t = Rt.split("|"),
				n = e.createDocumentFragment();
			if (n.createElement) for (; t.length;) n.createElement(t.pop());
			return n
		}
		function g(e, t) {
			var n, r, i = 0,
				o = typeof e.getElementsByTagName !== Ct ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ct ? e.querySelectorAll(t || "*") : void 0;
			if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)!t || it.nodeName(r, t) ? o.push(r) : it.merge(o, g(r, t));
			return void 0 === t || t && it.nodeName(e, t) ? it.merge([e], o) : o
		}
		function m(e) {
			_t.test(e.type) && (e.defaultChecked = e.checked)
		}
		function y(e, t) {
			return it.nodeName(e, "table") && it.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
		}
		function $(e) {
			return e.type = (null !== it.find.attr(e, "type")) + "/" + e.type, e
		}
		function b(e) {
			var t = Qt.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"), e
		}
		function w(e, t) {
			for (var n, r = 0; null != (n = e[r]); r++) it._data(n, "globalEval", !t || it._data(t[r], "globalEval"))
		}
		function x(e, t) {
			if (1 === t.nodeType && it.hasData(e)) {
				var n, r, i, o = it._data(e),
					a = it._data(t, o),
					s = o.events;
				if (s) {
					delete a.handle, a.events = {};
					for (n in s) for (r = 0, i = s[n].length; i > r; r++) it.event.add(t, n, s[n][r])
				}
				a.data && (a.data = it.extend({}, a.data))
			}
		}
		function C(e, t) {
			var n, r, i;
			if (1 === t.nodeType) {
				if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[it.expando]) {
					i = it._data(t);
					for (r in i.events) it.removeEvent(t, r, i.handle);
					t.removeAttribute(it.expando)
				}
				"script" === n && t.text !== e.text ? ($(t).text = e.text, b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !it.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && _t.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
			}
		}
		function S(t, n) {
			var r, i = it(n.createElement(t)).appendTo(n.body),
				o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : it.css(i[0], "display");
			return i.detach(), o
		}
		function T(e) {
			var t = ht,
				n = Zt[e];
			return n || (n = S(e, t), "none" !== n && n || (Kt = (Kt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Kt[0].contentWindow || Kt[0].contentDocument).document, t.write(), t.close(), n = S(e, t), Kt.detach()), Zt[e] = n), n
		}
		function E(e, t) {
			return {
				get: function() {
					var n = e();
					return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
				}
			}
		}
		function A(e, t) {
			if (t in e) return t;
			for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = pn.length; i--;) if (t = pn[i] + n, t in e) return t;
			return r
		}
		function k(e, t) {
			for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = it._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && kt(r) && (o[a] = it._data(r, "olddisplay", T(r.nodeName)))) : (i = kt(r), (n && "none" !== n || !i) && it._data(r, "olddisplay", i ? n : it.css(r, "display"))));
			for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
			return e
		}
		function N(e, t, n) {
			var r = ln.exec(t);
			return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
		}
		function _(e, t, n, r, i) {
			for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += it.css(e, n + At[o], !0, i)), r ? ("content" === n && (a -= it.css(e, "padding" + At[o], !0, i)), "margin" !== n && (a -= it.css(e, "border" + At[o] + "Width", !0, i))) : (a += it.css(e, "padding" + At[o], !0, i), "padding" !== n && (a += it.css(e, "border" + At[o] + "Width", !0, i)));
			return a
		}
		function D(e, t, n) {
			var r = !0,
				i = "width" === t ? e.offsetWidth : e.offsetHeight,
				o = en(e),
				a = nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, o);
			if (0 >= i || null == i) {
				if (i = tn(e, t, o), (0 > i || null == i) && (i = e.style[t]), rn.test(i)) return i;
				r = a && (nt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
			}
			return i + _(e, t, n || (a ? "border" : "content"), r, o) + "px"
		}
		function M(e, t, n, r, i) {
			return new M.prototype.init(e, t, n, r, i)
		}
		function O() {
			return setTimeout(function() {
				hn = void 0
			}), hn = it.now()
		}
		function P(e, t) {
			var n, r = {
				height: e
			},
				i = 0;
			for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = At[i], r["margin" + n] = r["padding" + n] = e;
			return t && (r.opacity = r.width = e), r
		}
		function j(e, t, n) {
			for (var r, i = (bn[t] || []).concat(bn["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r
		}
		function R(e, t, n) {
			var r, i, o, a, s, u, l, c, f = this,
				d = {},
				p = e.style,
				h = e.nodeType && kt(e),
				v = it._data(e, "fxshow");
			n.queue || (s = it._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
				s.unqueued || u()
			}), s.unqueued++, f.always(function() {
				f.always(function() {
					s.unqueued--, it.queue(e, "fx").length || s.empty.fire()
				})
			})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = it.css(e, "display"), c = "none" === l ? it._data(e, "olddisplay") || T(e.nodeName) : l, "inline" === c && "none" === it.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || f.always(function() {
				p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
			}));
			for (r in t) if (i = t[r], gn.exec(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
					if ("show" !== i || !v || void 0 === v[r]) continue;
					h = !0
				}
				d[r] = v && v[r] || it.style(e, r)
			} else l = void 0;
			if (it.isEmptyObject(d))"inline" === ("none" === l ? T(e.nodeName) : l) && (p.display = l);
			else {
				v ? "hidden" in v && (h = v.hidden) : v = it._data(e, "fxshow", {}), o && (v.hidden = !h), h ? it(e).show() : f.done(function() {
					it(e).hide()
				}), f.done(function() {
					var t;
					it._removeData(e, "fxshow");
					for (t in d) it.style(e, t, d[t])
				});
				for (r in d) a = j(h ? v[r] : 0, r, f), r in v || (v[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
			}
		}
		function L(e, t) {
			var n, r, i, o, a;
			for (n in e) if (r = it.camelCase(n), i = t[r], o = e[n], it.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = it.cssHooks[r], a && "expand" in a) {
				o = a.expand(o), delete e[r];
				for (n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
		}
		function q(e, t, n) {
			var r, i, o = 0,
				a = $n.length,
				s = it.Deferred().always(function() {
					delete u.elem
				}),
				u = function() {
					if (i) return !1;
					for (var t = hn || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
					return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
				},
				l = s.promise({
					elem: e,
					props: it.extend({}, t),
					opts: it.extend(!0, {
						specialEasing: {}
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: hn || O(),
					duration: n.duration,
					tweens: [],
					createTween: function(t, n) {
						var r = it.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
						return l.tweens.push(r), r
					},
					stop: function(t) {
						var n = 0,
							r = t ? l.tweens.length : 0;
						if (i) return this;
						for (i = !0; r > n; n++) l.tweens[n].run(1);
						return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
					}
				}),
				c = l.props;
			for (L(c, l.opts.specialEasing); a > o; o++) if (r = $n[o].call(l, e, c, l.opts)) return r;
			return it.map(c, j, l), it.isFunction(l.opts.start) && l.opts.start.call(e, l), it.fx.timer(it.extend(u, {
				elem: e,
				anim: l,
				queue: l.opts.queue
			})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
		}
		function I(e) {
			return function(t, n) {
				"string" != typeof t && (n = t, t = "*");
				var r, i = 0,
					o = t.toLowerCase().match($t) || [];
				if (it.isFunction(n)) for (; r = o[i++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
			}
		}
		function F(e, t, n, r) {
			function i(s) {
				var u;
				return o[s] = !0, it.each(e[s] || [], function(e, s) {
					var l = s(t, n, r);
					return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
				}), u
			}
			var o = {},
				a = e === Bn;
			return i(t.dataTypes[0]) || !o["*"] && i("*")
		}
		function H(e, t) {
			var n, r, i = it.ajaxSettings.flatOptions || {};
			for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
			return n && it.extend(!0, e, n), e
		}
		function V(e, t, n) {
			for (var r, i, o, a, s = e.contents, u = e.dataTypes;
			"*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
			if (i) for (a in s) if (s[a] && s[a].test(i)) {
				u.unshift(a);
				break
			}
			if (u[0] in n) o = u[0];
			else {
				for (a in n) {
					if (!u[0] || e.converters[a + " " + u[0]]) {
						o = a;
						break
					}
					r || (r = a)
				}
				o = o || r
			}
			return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
		}
		function W(e, t, n, r) {
			var i, o, a, s, u, l = {},
				c = e.dataTypes.slice();
			if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
			for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
			else if ("*" !== u && u !== o) {
				if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
					a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
					break
				}
				if (a !== !0) if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (f) {
					return {
						state: "parsererror",
						error: a ? f : "No conversion from " + u + " to " + o
					}
				}
			}
			return {
				state: "success",
				data: t
			}
		}
		function B(e, t, n, r) {
			var i;
			if (it.isArray(t)) it.each(t, function(t, i) {
				n || Xn.test(e) ? r(e, i) : B(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
			});
			else if (n || "object" !== it.type(t)) r(e, t);
			else for (i in t) B(e + "[" + i + "]", t[i], n, r)
		}
		function z() {
			try {
				return new e.XMLHttpRequest
			} catch (t) {}
		}
		function U() {
			try {
				return new e.ActiveXObject("Microsoft.XMLHTTP")
			} catch (t) {}
		}
		function Q(e) {
			return it.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
		}
		var X = [],
			Y = X.slice,
			J = X.concat,
			G = X.push,
			K = X.indexOf,
			Z = {},
			et = Z.toString,
			tt = Z.hasOwnProperty,
			nt = {},
			rt = "1.11.2",
			it = function(e, t) {
				return new it.fn.init(e, t)
			},
			ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			at = /^-ms-/,
			st = /-([\da-z])/gi,
			ut = function(e, t) {
				return t.toUpperCase()
			};
		it.fn = it.prototype = {
			jquery: rt,
			constructor: it,
			selector: "",
			length: 0,
			toArray: function() {
				return Y.call(this)
			},
			get: function(e) {
				return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
			},
			pushStack: function(e) {
				var t = it.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function(e, t) {
				return it.each(this, e, t)
			},
			map: function(e) {
				return this.pushStack(it.map(this, function(t, n) {
					return e.call(t, n, t)
				}))
			},
			slice: function() {
				return this.pushStack(Y.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(e) {
				var t = this.length,
					n = +e + (0 > e ? t : 0);
				return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor(null)
			},
			push: G,
			sort: X.sort,
			splice: X.splice
		}, it.extend = it.fn.extend = function() {
			var e, t, n, r, i, o, a = arguments[0] || {},
				s = 1,
				u = arguments.length,
				l = !1;
			for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || it.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++) if (null != (i = arguments[s])) for (r in i) e = a[r], n = i[r], a !== n && (l && n && (it.isPlainObject(n) || (t = it.isArray(n))) ? (t ? (t = !1, o = e && it.isArray(e) ? e : []) : o = e && it.isPlainObject(e) ? e : {}, a[r] = it.extend(l, o, n)) : void 0 !== n && (a[r] = n));
			return a
		}, it.extend({
			expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(e) {
				throw new Error(e)
			},
			noop: function() {},
			isFunction: function(e) {
				return "function" === it.type(e)
			},
			isArray: Array.isArray ||
			function(e) {
				return "array" === it.type(e)
			},
			isWindow: function(e) {
				return null != e && e == e.window
			},
			isNumeric: function(e) {
				return !it.isArray(e) && e - parseFloat(e) + 1 >= 0
			},
			isEmptyObject: function(e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			isPlainObject: function(e) {
				var t;
				if (!e || "object" !== it.type(e) || e.nodeType || it.isWindow(e)) return !1;
				try {
					if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
				} catch (n) {
					return !1
				}
				if (nt.ownLast) for (t in e) return tt.call(e, t);
				for (t in e);
				return void 0 === t || tt.call(e, t)
			},
			type: function(e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
			},
			globalEval: function(t) {
				t && it.trim(t) && (e.execScript ||
				function(t) {
					e.eval.call(e, t)
				})(t)
			},
			camelCase: function(e) {
				return e.replace(at, "ms-").replace(st, ut)
			},
			nodeName: function(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function(e, t, r) {
				var i, o = 0,
					a = e.length,
					s = n(e);
				if (r) {
					if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
					else for (o in e) if (i = t.apply(e[o], r), i === !1) break
				} else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
				else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
				return e
			},
			trim: function(e) {
				return null == e ? "" : (e + "").replace(ot, "")
			},
			makeArray: function(e, t) {
				var r = t || [];
				return null != e && (n(Object(e)) ? it.merge(r, "string" == typeof e ? [e] : e) : G.call(r, e)), r
			},
			inArray: function(e, t, n) {
				var r;
				if (t) {
					if (K) return K.call(t, e, n);
					for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
				}
				return -1
			},
			merge: function(e, t) {
				for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
				if (n !== n) for (; void 0 !== t[r];) e[i++] = t[r++];
				return e.length = i, e
			},
			grep: function(e, t, n) {
				for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
				return i
			},
			map: function(e, t, r) {
				var i, o = 0,
					a = e.length,
					s = n(e),
					u = [];
				if (s) for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
				else for (o in e) i = t(e[o], o, r), null != i && u.push(i);
				return J.apply([], u)
			},
			guid: 1,
			proxy: function(e, t) {
				var n, r, i;
				return "string" == typeof t && (i = e[t], t = e, e = i), it.isFunction(e) ? (n = Y.call(arguments, 2), r = function() {
					return e.apply(t || this, n.concat(Y.call(arguments)))
				}, r.guid = e.guid = e.guid || it.guid++, r) : void 0
			},
			now: function() {
				return +new Date
			},
			support: nt
		}), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
			Z["[object " + t + "]"] = t.toLowerCase()
		});
		var lt = function(e) {
				function t(e, t, n, r) {
					var i, o, a, s, u, l, f, p, h, v;
					if ((t ? t.ownerDocument || t : F) !== M && D(t), t = t || M, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
					if (!r && P) {
						if (11 !== s && (i = yt.exec(e))) if (a = i[1]) {
							if (9 === s) {
								if (o = t.getElementById(a), !o || !o.parentNode) return n;
								if (o.id === a) return n.push(o), n
							} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && q(t, o) && o.id === a) return n.push(o), n
						} else {
							if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
							if ((a = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
						}
						if (w.qsa && (!j || !j.test(e))) {
							if (p = f = I, h = t, v = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
								for (l = T(e), (f = t.getAttribute("id")) ? p = f.replace(bt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + d(l[u]);
								h = $t.test(e) && c(t.parentNode) || t, v = l.join(",")
							}
							if (v) try {
								return K.apply(n, h.querySelectorAll(v)), n
							} catch (g) {} finally {
								f || t.removeAttribute("id")
							}
						}
					}
					return A(e.replace(ut, "$1"), t, n, r)
				}
				function n() {
					function e(n, r) {
						return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r
					}
					var t = [];
					return e
				}
				function r(e) {
					return e[I] = !0, e
				}
				function i(e) {
					var t = M.createElement("div");
					try {
						return !!e(t)
					} catch (n) {
						return !1
					} finally {
						t.parentNode && t.parentNode.removeChild(t), t = null
					}
				}
				function o(e, t) {
					for (var n = e.split("|"), r = e.length; r--;) x.attrHandle[n[r]] = t
				}
				function a(e, t) {
					var n = t && e,
						r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
					if (r) return r;
					if (n) for (; n = n.nextSibling;) if (n === t) return -1;
					return e ? 1 : -1
				}
				function s(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return "input" === n && t.type === e
					}
				}
				function u(e) {
					return function(t) {
						var n = t.nodeName.toLowerCase();
						return ("input" === n || "button" === n) && t.type === e
					}
				}
				function l(e) {
					return r(function(t) {
						return t = +t, r(function(n, r) {
							for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
						})
					})
				}
				function c(e) {
					return e && "undefined" != typeof e.getElementsByTagName && e
				}
				function f() {}
				function d(e) {
					for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
					return r
				}
				function p(e, t, n) {
					var r = t.dir,
						i = n && "parentNode" === r,
						o = V++;
					return t.first ?
					function(t, n, o) {
						for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
					} : function(t, n, a) {
						var s, u, l = [H, o];
						if (a) {
							for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return !0
						} else for (; t = t[r];) if (1 === t.nodeType || i) {
							if (u = t[I] || (t[I] = {}), (s = u[r]) && s[0] === H && s[1] === o) return l[2] = s[2];
							if (u[r] = l, l[2] = e(t, n, a)) return !0
						}
					}
				}
				function h(e) {
					return e.length > 1 ?
					function(t, n, r) {
						for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
						return !0
					} : e[0]
				}
				function v(e, n, r) {
					for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
					return r
				}
				function g(e, t, n, r, i) {
					for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
					return a
				}
				function m(e, t, n, i, o, a) {
					return i && !i[I] && (i = m(i)), o && !o[I] && (o = m(o, a)), r(function(r, a, s, u) {
						var l, c, f, d = [],
							p = [],
							h = a.length,
							m = r || v(t || "*", s.nodeType ? [s] : s, []),
							y = !e || !r && t ? m : g(m, d, e, s, u),
							$ = n ? o || (r ? e : h || i) ? [] : a : y;
						if (n && n(y, $, s, u), i) for (l = g($, p), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && ($[p[c]] = !(y[p[c]] = f));
						if (r) {
							if (o || e) {
								if (o) {
									for (l = [], c = $.length; c--;)(f = $[c]) && l.push(y[c] = f);
									o(null, $ = [], l, u)
								}
								for (c = $.length; c--;)(f = $[c]) && (l = o ? et(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
							}
						} else $ = g($ === a ? $.splice(h, $.length) : $), o ? o(null, a, $, u) : K.apply(a, $)
					})
				}
				function y(e) {
					for (var t, n, r, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = p(function(e) {
						return e === t
					}, a, !0), l = p(function(e) {
						return et(t, e) > -1
					}, a, !0), c = [function(e, n, r) {
						var i = !o && (r || n !== k) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
						return t = null, i
					}]; i > s; s++) if (n = x.relative[e[s].type]) c = [p(h(c), n)];
					else {
						if (n = x.filter[e[s].type].apply(null, e[s].matches), n[I]) {
							for (r = ++s; i > r && !x.relative[e[r].type]; r++);
							return m(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
								value: " " === e[s - 2].type ? "*" : ""
							})).replace(ut, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && d(e))
						}
						c.push(n)
					}
					return h(c)
				}
				function $(e, n) {
					var i = n.length > 0,
						o = e.length > 0,
						a = function(r, a, s, u, l) {
							var c, f, d, p = 0,
								h = "0",
								v = r && [],
								m = [],
								y = k,
								$ = r || o && x.find.TAG("*", l),
								b = H += null == y ? 1 : Math.random() || .1,
								w = $.length;
							for (l && (k = a !== M && a); h !== w && null != (c = $[h]); h++) {
								if (o && c) {
									for (f = 0; d = e[f++];) if (d(c, a, s)) {
										u.push(c);
										break
									}
									l && (H = b)
								}
								i && ((c = !d && c) && p--, r && v.push(c))
							}
							if (p += h, i && h !== p) {
								for (f = 0; d = n[f++];) d(v, m, a, s);
								if (r) {
									if (p > 0) for (; h--;) v[h] || m[h] || (m[h] = J.call(u));
									m = g(m)
								}
								K.apply(u, m), l && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(u)
							}
							return l && (H = b, k = y), v
						};
					return i ? r(a) : a
				}
				var b, w, x, C, S, T, E, A, k, N, _, D, M, O, P, j, R, L, q, I = "sizzle" + 1 * new Date,
					F = e.document,
					H = 0,
					V = 0,
					W = n(),
					B = n(),
					z = n(),
					U = function(e, t) {
						return e === t && (_ = !0), 0
					},
					Q = 1 << 31,
					X = {}.hasOwnProperty,
					Y = [],
					J = Y.pop,
					G = Y.push,
					K = Y.push,
					Z = Y.slice,
					et = function(e, t) {
						for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
						return -1
					},
					tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
					nt = "[\\x20\\t\\r\\n\\f]",
					rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
					it = rt.replace("w", "w#"),
					ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
					at = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
					st = new RegExp(nt + "+", "g"),
					ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
					lt = new RegExp("^" + nt + "*," + nt + "*"),
					ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
					ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
					dt = new RegExp(at),
					pt = new RegExp("^" + it + "$"),
					ht = {
						ID: new RegExp("^#(" + rt + ")"),
						CLASS: new RegExp("^\\.(" + rt + ")"),
						TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
						ATTR: new RegExp("^" + ot),
						PSEUDO: new RegExp("^" + at),
						CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
						bool: new RegExp("^(?:" + tt + ")$", "i"),
						needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
					},
					vt = /^(?:input|select|textarea|button)$/i,
					gt = /^h\d$/i,
					mt = /^[^{]+\{\s*\[native \w/,
					yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					$t = /[+~]/,
					bt = /'|\\/g,
					wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
					xt = function(e, t, n) {
						var r = "0x" + t - 65536;
						return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
					},
					Ct = function() {
						D()
					};
				try {
					K.apply(Y = Z.call(F.childNodes), F.childNodes), Y[F.childNodes.length].nodeType
				} catch (St) {
					K = {
						apply: Y.length ?
						function(e, t) {
							G.apply(e, Z.call(t))
						} : function(e, t) {
							for (var n = e.length, r = 0; e[n++] = t[r++];);
							e.length = n - 1
						}
					}
				}
				w = t.support = {}, S = t.isXML = function(e) {
					var t = e && (e.ownerDocument || e).documentElement;
					return t ? "HTML" !== t.nodeName : !1
				}, D = t.setDocument = function(e) {
					var t, n, r = e ? e.ownerDocument || e : F;
					return r !== M && 9 === r.nodeType && r.documentElement ? (M = r, O = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), P = !S(r), w.attributes = i(function(e) {
						return e.className = "i", !e.getAttribute("className")
					}), w.getElementsByTagName = i(function(e) {
						return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
					}), w.getElementsByClassName = mt.test(r.getElementsByClassName), w.getById = i(function(e) {
						return O.appendChild(e).id = I, !r.getElementsByName || !r.getElementsByName(I).length
					}), w.getById ? (x.find.ID = function(e, t) {
						if ("undefined" != typeof t.getElementById && P) {
							var n = t.getElementById(e);
							return n && n.parentNode ? [n] : []
						}
					}, x.filter.ID = function(e) {
						var t = e.replace(wt, xt);
						return function(e) {
							return e.getAttribute("id") === t
						}
					}) : (delete x.find.ID, x.filter.ID = function(e) {
						var t = e.replace(wt, xt);
						return function(e) {
							var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
							return n && n.value === t
						}
					}), x.find.TAG = w.getElementsByTagName ?
					function(e, t) {
						return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
					} : function(e, t) {
						var n, r = [],
							i = 0,
							o = t.getElementsByTagName(e);
						if ("*" === e) {
							for (; n = o[i++];) 1 === n.nodeType && r.push(n);
							return r
						}
						return o
					}, x.find.CLASS = w.getElementsByClassName &&
					function(e, t) {
						return P ? t.getElementsByClassName(e) : void 0
					}, R = [], j = [], (w.qsa = mt.test(r.querySelectorAll)) && (i(function(e) {
						O.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + I + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || j.push(".#.+[+~]")
					}), i(function(e) {
						var t = r.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
					})), (w.matchesSelector = mt.test(L = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function(e) {
						w.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), R.push("!=", at)
					}), j = j.length && new RegExp(j.join("|")), R = R.length && new RegExp(R.join("|")), t = mt.test(O.compareDocumentPosition), q = t || mt.test(O.contains) ?
					function(e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e,
							r = t && t.parentNode;
						return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
					} : function(e, t) {
						if (t) for (; t = t.parentNode;) if (t === e) return !0;
						return !1
					}, U = t ?
					function(e, t) {
						if (e === t) return _ = !0, 0;
						var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === F && q(F, e) ? -1 : t === r || t.ownerDocument === F && q(F, t) ? 1 : N ? et(N, e) - et(N, t) : 0 : 4 & n ? -1 : 1)
					} : function(e, t) {
						if (e === t) return _ = !0, 0;
						var n, i = 0,
							o = e.parentNode,
							s = t.parentNode,
							u = [e],
							l = [t];
						if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : N ? et(N, e) - et(N, t) : 0;
						if (o === s) return a(e, t);
						for (n = e; n = n.parentNode;) u.unshift(n);
						for (n = t; n = n.parentNode;) l.unshift(n);
						for (; u[i] === l[i];) i++;
						return i ? a(u[i], l[i]) : u[i] === F ? -1 : l[i] === F ? 1 : 0
					}, r) : M
				}, t.matches = function(e, n) {
					return t(e, null, null, n)
				}, t.matchesSelector = function(e, n) {
					if ((e.ownerDocument || e) !== M && D(e), n = n.replace(ft, "='$1']"), !(!w.matchesSelector || !P || R && R.test(n) || j && j.test(n))) try {
						var r = L.call(e, n);
						if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
					} catch (i) {}
					return t(n, M, null, [e]).length > 0
				}, t.contains = function(e, t) {
					return (e.ownerDocument || e) !== M && D(e), q(e, t)
				}, t.attr = function(e, t) {
					(e.ownerDocument || e) !== M && D(e);
					var n = x.attrHandle[t.toLowerCase()],
						r = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
					return void 0 !== r ? r : w.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
				}, t.error = function(e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, t.uniqueSort = function(e) {
					var t, n = [],
						r = 0,
						i = 0;
					if (_ = !w.detectDuplicates, N = !w.sortStable && e.slice(0), e.sort(U), _) {
						for (; t = e[i++];) t === e[i] && (r = n.push(i));
						for (; r--;) e.splice(n[r], 1)
					}
					return N = null, e
				}, C = t.getText = function(e) {
					var t, n = "",
						r = 0,
						i = e.nodeType;
					if (i) {
						if (1 === i || 9 === i || 11 === i) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
						} else if (3 === i || 4 === i) return e.nodeValue
					} else for (; t = e[r++];) n += C(t);
					return n
				}, x = t.selectors = {
					cacheLength: 50,
					createPseudo: r,
					match: ht,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function(e) {
							return e[1] = e[1].replace(wt, xt), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, xt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function(e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
						},
						PSEUDO: function(e) {
							var t, n = !e[6] && e[2];
							return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && dt.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function(e) {
							var t = e.replace(wt, xt).toLowerCase();
							return "*" === e ?
							function() {
								return !0
							} : function(e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function(e) {
							var t = W[e + " "];
							return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && W(e, function(e) {
								return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
							})
						},
						ATTR: function(e, n, r) {
							return function(i) {
								var o = t.attr(i, e);
								return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
							}
						},
						CHILD: function(e, t, n, r, i) {
							var o = "nth" !== e.slice(0, 3),
								a = "last" !== e.slice(-4),
								s = "of-type" === t;
							return 1 === r && 0 === i ?
							function(e) {
								return !!e.parentNode
							} : function(t, n, u) {
								var l, c, f, d, p, h, v = o !== a ? "nextSibling" : "previousSibling",
									g = t.parentNode,
									m = s && t.nodeName.toLowerCase(),
									y = !u && !s;
								if (g) {
									if (o) {
										for (; v;) {
											for (f = t; f = f[v];) if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
											h = v = "only" === e && !h && "nextSibling"
										}
										return !0
									}
									if (h = [a ? g.firstChild : g.lastChild], a && y) {
										for (c = g[I] || (g[I] = {}), l = c[e] || [], p = l[0] === H && l[1], d = l[0] === H && l[2], f = p && g.childNodes[p]; f = ++p && f && f[v] || (d = p = 0) || h.pop();) if (1 === f.nodeType && ++d && f === t) {
											c[e] = [H, p, d];
											break
										}
									} else if (y && (l = (t[I] || (t[I] = {}))[e]) && l[0] === H) d = l[1];
									else for (;
									(f = ++p && f && f[v] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++d || (y && ((f[I] || (f[I] = {}))[e] = [H, d]), f !== t)););
									return d -= i, d === r || d % r === 0 && d / r >= 0
								}
							}
						},
						PSEUDO: function(e, n) {
							var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
							return o[I] ? o(n) : o.length > 1 ? (i = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
								for (var r, i = o(e, n), a = i.length; a--;) r = et(e, i[a]), e[r] = !(t[r] = i[a])
							}) : function(e) {
								return o(e, 0, i)
							}) : o
						}
					},
					pseudos: {
						not: r(function(e) {
							var t = [],
								n = [],
								i = E(e.replace(ut, "$1"));
							return i[I] ? r(function(e, t, n, r) {
								for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
							}) : function(e, r, o) {
								return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
							}
						}),
						has: r(function(e) {
							return function(n) {
								return t(e, n).length > 0
							}
						}),
						contains: r(function(e) {
							return e = e.replace(wt, xt), function(t) {
								return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
							}
						}),
						lang: r(function(e) {
							return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, xt).toLowerCase(), function(t) {
								var n;
								do
								if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
								while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
						}),
						target: function(t) {
							var n = e.location && e.location.hash;
							return n && n.slice(1) === t.id
						},
						root: function(e) {
							return e === O
						},
						focus: function(e) {
							return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
						},
						enabled: function(e) {
							return e.disabled === !1
						},
						disabled: function(e) {
							return e.disabled === !0
						},
						checked: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !! e.checked || "option" === t && !! e.selected
						},
						selected: function(e) {
							return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
						},
						empty: function(e) {
							for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
							return !0
						},
						parent: function(e) {
							return !x.pseudos.empty(e)
						},
						header: function(e) {
							return gt.test(e.nodeName)
						},
						input: function(e) {
							return vt.test(e.nodeName)
						},
						button: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function(e) {
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
						},
						first: l(function() {
							return [0]
						}),
						last: l(function(e, t) {
							return [t - 1]
						}),
						eq: l(function(e, t, n) {
							return [0 > n ? n + t : n]
						}),
						even: l(function(e, t) {
							for (var n = 0; t > n; n += 2) e.push(n);
							return e
						}),
						odd: l(function(e, t) {
							for (var n = 1; t > n; n += 2) e.push(n);
							return e
						}),
						lt: l(function(e, t, n) {
							for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
							return e
						}),
						gt: l(function(e, t, n) {
							for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
							return e
						})
					}
				}, x.pseudos.nth = x.pseudos.eq;
				for (b in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) x.pseudos[b] = s(b);
				for (b in {
					submit: !0,
					reset: !0
				}) x.pseudos[b] = u(b);
				return f.prototype = x.filters = x.pseudos, x.setFilters = new f, T = t.tokenize = function(e, n) {
					var r, i, o, a, s, u, l, c = B[e + " "];
					if (c) return n ? 0 : c.slice(0);
					for (s = e, u = [], l = x.preFilter; s;) {
						(!r || (i = lt.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({
							value: r,
							type: i[0].replace(ut, " ")
						}), s = s.slice(r.length));
						for (a in x.filter)!(i = ht[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
							value: r,
							type: a,
							matches: i
						}), s = s.slice(r.length));
						if (!r) break
					}
					return n ? s.length : s ? t.error(e) : B(e, u).slice(0)
				}, E = t.compile = function(e, t) {
					var n, r = [],
						i = [],
						o = z[e + " "];
					if (!o) {
						for (t || (t = T(e)), n = t.length; n--;) o = y(t[n]), o[I] ? r.push(o) : i.push(o);
						o = z(e, $(i, r)), o.selector = e
					}
					return o
				}, A = t.select = function(e, t, n, r) {
					var i, o, a, s, u, l = "function" == typeof e && e,
						f = !r && T(e = l.selector || e);
					if (n = n || [], 1 === f.length) {
						if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && P && x.relative[o[1].type]) {
							if (t = (x.find.ID(a.matches[0].replace(wt, xt), t) || [])[0], !t) return n;
							l && (t = t.parentNode), e = e.slice(o.shift().value.length)
						}
						for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);) if ((u = x.find[s]) && (r = u(a.matches[0].replace(wt, xt), $t.test(o[0].type) && c(t.parentNode) || t))) {
							if (o.splice(i, 1), e = r.length && d(o), !e) return K.apply(n, r), n;
							break
						}
					}
					return (l || E(e, f))(r, t, !P, n, $t.test(e) && c(t.parentNode) || t), n
				}, w.sortStable = I.split("").sort(U).join("") === I, w.detectDuplicates = !! _, D(), w.sortDetached = i(function(e) {
					return 1 & e.compareDocumentPosition(M.createElement("div"))
				}), i(function(e) {
					return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
				}) || o("type|href|height|width", function(e, t, n) {
					return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
				}), w.attributes && i(function(e) {
					return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
				}) || o("value", function(e, t, n) {
					return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
				}), i(function(e) {
					return null == e.getAttribute("disabled")
				}) || o(tt, function(e, t, n) {
					var r;
					return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
				}), t
			}(e);
		it.find = lt, it.expr = lt.selectors, it.expr[":"] = it.expr.pseudos, it.unique = lt.uniqueSort, it.text = lt.getText, it.isXMLDoc = lt.isXML, it.contains = lt.contains;
		var ct = it.expr.match.needsContext,
			ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			dt = /^.[^:#\[\.,]*$/;
		it.filter = function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? it.find.matchesSelector(r, e) ? [r] : [] : it.find.matches(e, it.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		}, it.fn.extend({
			find: function(e) {
				var t, n = [],
					r = this,
					i = r.length;
				if ("string" != typeof e) return this.pushStack(it(e).filter(function() {
					for (t = 0; i > t; t++) if (it.contains(r[t], this)) return !0
				}));
				for (t = 0; i > t; t++) it.find(e, r[t], n);
				return n = this.pushStack(i > 1 ? it.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
			},
			filter: function(e) {
				return this.pushStack(r(this, e || [], !1))
			},
			not: function(e) {
				return this.pushStack(r(this, e || [], !0))
			},
			is: function(e) {
				return !!r(this, "string" == typeof e && ct.test(e) ? it(e) : e || [], !1).length
			}
		});
		var pt, ht = e.document,
			vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			gt = it.fn.init = function(e, t) {
				var n, r;
				if (!e) return this;
				if ("string" == typeof e) {
					if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : vt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
					if (n[1]) {
						if (t = t instanceof it ? t[0] : t, it.merge(this, it.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)), ft.test(n[1]) && it.isPlainObject(t)) for (n in t) it.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
						return this
					}
					if (r = ht.getElementById(n[2]), r && r.parentNode) {
						if (r.id !== n[2]) return pt.find(e);
						this.length = 1, this[0] = r
					}
					return this.context = ht, this.selector = e, this
				}
				return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : it.isFunction(e) ? "undefined" != typeof pt.ready ? pt.ready(e) : e(it) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), it.makeArray(e, this))
			};
		gt.prototype = it.fn, pt = it(ht);
		var mt = /^(?:parents|prev(?:Until|All))/,
			yt = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		it.extend({
			dir: function(e, t, n) {
				for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
				return r
			},
			sibling: function(e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			}
		}), it.fn.extend({
			has: function(e) {
				var t, n = it(e, this),
					r = n.length;
				return this.filter(function() {
					for (t = 0; r > t; t++) if (it.contains(this, n[t])) return !0
				})
			},
			closest: function(e, t) {
				for (var n, r = 0, i = this.length, o = [], a = ct.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) {
					o.push(n);
					break
				}
				return this.pushStack(o.length > 1 ? it.unique(o) : o)
			},
			index: function(e) {
				return e ? "string" == typeof e ? it.inArray(this[0], it(e)) : it.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(e, t) {
				return this.pushStack(it.unique(it.merge(this.get(), it(e, t))))
			},
			addBack: function(e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), it.each({
			parent: function(e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function(e) {
				return it.dir(e, "parentNode")
			},
			parentsUntil: function(e, t, n) {
				return it.dir(e, "parentNode", n)
			},
			next: function(e) {
				return i(e, "nextSibling")
			},
			prev: function(e) {
				return i(e, "previousSibling")
			},
			nextAll: function(e) {
				return it.dir(e, "nextSibling")
			},
			prevAll: function(e) {
				return it.dir(e, "previousSibling")
			},
			nextUntil: function(e, t, n) {
				return it.dir(e, "nextSibling", n)
			},
			prevUntil: function(e, t, n) {
				return it.dir(e, "previousSibling", n)
			},
			siblings: function(e) {
				return it.sibling((e.parentNode || {}).firstChild, e)
			},
			children: function(e) {
				return it.sibling(e.firstChild)
			},
			contents: function(e) {
				return it.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : it.merge([], e.childNodes)
			}
		}, function(e, t) {
			it.fn[e] = function(n, r) {
				var i = it.map(this, t, n);
				return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = it.filter(r, i)), this.length > 1 && (yt[e] || (i = it.unique(i)), mt.test(e) && (i = i.reverse())), this.pushStack(i)
			}
		});
		var $t = /\S+/g,
			bt = {};
		it.Callbacks = function(e) {
			e = "string" == typeof e ? bt[e] || o(e) : it.extend({}, e);
			var t, n, r, i, a, s, u = [],
				l = !e.once && [],
				c = function(o) {
					for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++) if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
						n = !1;
						break
					}
					t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : f.disable())
				},
				f = {
					add: function() {
						if (u) {
							var r = u.length;
							!
							function o(t) {
								it.each(t, function(t, n) {
									var r = it.type(n);
									"function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
								})
							}(arguments), t ? i = u.length : n && (s = r, c(n))
						}
						return this
					},
					remove: function() {
						return u && it.each(arguments, function(e, n) {
							for (var r;
							(r = it.inArray(n, u, r)) > -1;) u.splice(r, 1), t && (i >= r && i--, a >= r && a--)
						}), this
					},
					has: function(e) {
						return e ? it.inArray(e, u) > -1 : !(!u || !u.length)
					},
					empty: function() {
						return u = [], i = 0, this
					},
					disable: function() {
						return u = l = n = void 0, this
					},
					disabled: function() {
						return !u
					},
					lock: function() {
						return l = void 0, n || f.disable(), this
					},
					locked: function() {
						return !l
					},
					fireWith: function(e, n) {
						return !u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
					},
					fire: function() {
						return f.fireWith(this, arguments), this
					},
					fired: function() {
						return !!r
					}
				};
			return f
		}, it.extend({
			Deferred: function(e) {
				var t = [
					["resolve", "done", it.Callbacks("once memory"), "resolved"],
					["reject", "fail", it.Callbacks("once memory"), "rejected"],
					["notify", "progress", it.Callbacks("memory")]
				],
					n = "pending",
					r = {
						state: function() {
							return n
						},
						always: function() {
							return i.done(arguments).fail(arguments), this
						},
						then: function() {
							var e = arguments;
							return it.Deferred(function(n) {
								it.each(t, function(t, o) {
									var a = it.isFunction(e[t]) && e[t];
									i[o[1]](function() {
										var e = a && a.apply(this, arguments);
										e && it.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						promise: function(e) {
							return null != e ? it.extend(e, r) : r
						}
					},
					i = {};
				return r.pipe = r.then, it.each(t, function(e, o) {
					var a = o[2],
						s = o[3];
					r[o[1]] = a.add, s && a.add(function() {
						n = s
					}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
						return i[o[0] + "With"](this === i ? r : this, arguments), this
					}, i[o[0] + "With"] = a.fireWith
				}), r.promise(i), e && e.call(i, i), i
			},
			when: function(e) {
				var t, n, r, i = 0,
					o = Y.call(arguments),
					a = o.length,
					s = 1 !== a || e && it.isFunction(e.promise) ? a : 0,
					u = 1 === s ? e : it.Deferred(),
					l = function(e, n, r) {
						return function(i) {
							n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
						}
					};
				if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && it.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
				return s || u.resolveWith(r, o), u.promise()
			}
		});
		var wt;
		it.fn.ready = function(e) {
			return it.ready.promise().done(e), this
		}, it.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? it.readyWait++ : it.ready(!0)
			},
			ready: function(e) {
				if (e === !0 ? !--it.readyWait : !it.isReady) {
					if (!ht.body) return setTimeout(it.ready);
					it.isReady = !0, e !== !0 && --it.readyWait > 0 || (wt.resolveWith(ht, [it]), it.fn.triggerHandler && (it(ht).triggerHandler("ready"), it(ht).off("ready")))
				}
			}
		}), it.ready.promise = function(t) {
			if (!wt) if (wt = it.Deferred(), "complete" === ht.readyState) setTimeout(it.ready);
			else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
			else {
				ht.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
				var n = !1;
				try {
					n = null == e.frameElement && ht.documentElement
				} catch (r) {}
				n && n.doScroll && !
				function i() {
					if (!it.isReady) {
						try {
							n.doScroll("left")
						} catch (e) {
							return setTimeout(i, 50)
						}
						a(), it.ready()
					}
				}()
			}
			return wt.promise(t)
		};
		var xt, Ct = "undefined";
		for (xt in it(nt)) break;
		nt.ownLast = "0" !== xt, nt.inlineBlockNeedsLayout = !1, it(function() {
			var e, t, n, r;
			n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
		}), function() {
			var e = ht.createElement("div");
			if (null == nt.deleteExpando) {
				nt.deleteExpando = !0;
				try {
					delete e.test
				} catch (t) {
					nt.deleteExpando = !1
				}
			}
			e = null
		}(), it.acceptData = function(e) {
			var t = it.noData[(e.nodeName + " ").toLowerCase()],
				n = +e.nodeType || 1;
			return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
		};
		var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			Tt = /([A-Z])/g;
		it.extend({
			cache: {},
			noData: {
				"applet ": !0,
				"embed ": !0,
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function(e) {
				return e = e.nodeType ? it.cache[e[it.expando]] : e[it.expando], !! e && !l(e)
			},
			data: function(e, t, n) {
				return c(e, t, n)
			},
			removeData: function(e, t) {
				return f(e, t)
			},
			_data: function(e, t, n) {
				return c(e, t, n, !0)
			},
			_removeData: function(e, t) {
				return f(e, t, !0)
			}
		}), it.fn.extend({
			data: function(e, t) {
				var n, r, i, o = this[0],
					a = o && o.attributes;
				if (void 0 === e) {
					if (this.length && (i = it.data(o), 1 === o.nodeType && !it._data(o, "parsedAttrs"))) {
						for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = it.camelCase(r.slice(5)), u(o, r, i[r])));
						it._data(o, "parsedAttrs", !0)
					}
					return i
				}
				return "object" == typeof e ? this.each(function() {
					it.data(this, e)
				}) : arguments.length > 1 ? this.each(function() {
					it.data(this, e, t)
				}) : o ? u(o, e, it.data(o, e)) : void 0
			},
			removeData: function(e) {
				return this.each(function() {
					it.removeData(this, e)
				})
			}
		}), it.extend({
			queue: function(e, t, n) {
				var r;
				return e ? (t = (t || "fx") + "queue", r = it._data(e, t), n && (!r || it.isArray(n) ? r = it._data(e, t, it.makeArray(n)) : r.push(n)), r || []) : void 0
			},
			dequeue: function(e, t) {
				t = t || "fx";
				var n = it.queue(e, t),
					r = n.length,
					i = n.shift(),
					o = it._queueHooks(e, t),
					a = function() {
						it.dequeue(e, t)
					};
				"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
			},
			_queueHooks: function(e, t) {
				var n = t + "queueHooks";
				return it._data(e, n) || it._data(e, n, {
					empty: it.Callbacks("once memory").add(function() {
						it._removeData(e, t + "queue"), it._removeData(e, n)
					})
				})
			}
		}), it.fn.extend({
			queue: function(e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? it.queue(this[0], e) : void 0 === t ? this : this.each(function() {
					var n = it.queue(this, e, t);
					it._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && it.dequeue(this, e)
				})
			},
			dequeue: function(e) {
				return this.each(function() {
					it.dequeue(this, e)
				})
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", [])
			},
			promise: function(e, t) {
				var n, r = 1,
					i = it.Deferred(),
					o = this,
					a = this.length,
					s = function() {
						--r || i.resolveWith(o, [o])
					};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = it._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
				return s(), i.promise(t)
			}
		});
		var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			At = ["Top", "Right", "Bottom", "Left"],
			kt = function(e, t) {
				return e = t || e, "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e)
			},
			Nt = it.access = function(e, t, n, r, i, o, a) {
				var s = 0,
					u = e.length,
					l = null == n;
				if ("object" === it.type(n)) {
					i = !0;
					for (s in n) it.access(e, t, s, n[s], !0, o, a)
				} else if (void 0 !== r && (i = !0, it.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
					return l.call(it(e), n)
				})), t)) for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
				return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
			},
			_t = /^(?:checkbox|radio)$/i;
		!
		function() {
			var e = ht.createElement("input"),
				t = ht.createElement("div"),
				n = ht.createDocumentFragment();
			if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !! t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
				nt.noCloneEvent = !1
			}), t.cloneNode(!0).click()), null == nt.deleteExpando) {
				nt.deleteExpando = !0;
				try {
					delete t.test
				} catch (r) {
					nt.deleteExpando = !1
				}
			}
		}(), function() {
			var t, n, r = ht.createElement("div");
			for (t in {
				submit: !0,
				change: !0,
				focusin: !0
			}) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), nt[t + "Bubbles"] = r.attributes[n].expando === !1);
			r = null
		}();
		var Dt = /^(?:input|select|textarea)$/i,
			Mt = /^key/,
			Ot = /^(?:mouse|pointer|contextmenu)|click/,
			Pt = /^(?:focusinfocus|focusoutblur)$/,
			jt = /^([^.]*)(?:\.(.+)|)$/;
		it.event = {
			global: {},
			add: function(e, t, n, r, i) {
				var o, a, s, u, l, c, f, d, p, h, v, g = it._data(e);
				if (g) {
					for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = it.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
						return typeof it === Ct || e && it.event.triggered === e.type ? void 0 : it.event.dispatch.apply(c.elem, arguments)
					}, c.elem = e), t = (t || "").match($t) || [""], s = t.length; s--;) o = jt.exec(t[s]) || [], p = v = o[1], h = (o[2] || "").split(".").sort(), p && (l = it.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = it.event.special[p] || {}, f = it.extend({
						type: p,
						origType: v,
						data: r,
						handler: n,
						guid: n.guid,
						selector: i,
						needsContext: i && it.expr.match.needsContext.test(i),
						namespace: h.join(".")
					}, u), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), it.event.global[p] = !0);
					e = null
				}
			},
			remove: function(e, t, n, r, i) {
				var o, a, s, u, l, c, f, d, p, h, v, g = it.hasData(e) && it._data(e);
				if (g && (c = g.events)) {
					for (t = (t || "").match($t) || [""], l = t.length; l--;) if (s = jt.exec(t[l]) || [], p = v = s[1], h = (s[2] || "").split(".").sort(), p) {
						for (f = it.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o], !i && v !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
						u && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || it.removeEvent(e, p, g.handle), delete c[p])
					} else for (p in c) it.event.remove(e, p + t[l], n, r, !0);
					it.isEmptyObject(c) && (delete g.handle, it._removeData(e, "events"))
				}
			},
			trigger: function(t, n, r, i) {
				var o, a, s, u, l, c, f, d = [r || ht],
					p = tt.call(t, "type") ? t.type : t,
					h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
				if (s = c = r = r || ht, 3 !== r.nodeType && 8 !== r.nodeType && !Pt.test(p + it.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[it.expando] ? t : new it.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : it.makeArray(n, [t]), l = it.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
					if (!i && !l.noBubble && !it.isWindow(r)) {
						for (u = l.delegateType || p, Pt.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
						c === (r.ownerDocument || ht) && d.push(c.defaultView || c.parentWindow || e)
					}
					for (f = 0;
					(s = d[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? u : l.bindType || p, o = (it._data(s, "events") || {})[t.type] && it._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && it.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
					if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && it.acceptData(r) && a && r[p] && !it.isWindow(r)) {
						c = r[a], c && (r[a] = null), it.event.triggered = p;
						try {
							r[p]()
						} catch (v) {}
						it.event.triggered = void 0, c && (r[a] = c)
					}
					return t.result
				}
			},
			dispatch: function(e) {
				e = it.event.fix(e);
				var t, n, r, i, o, a = [],
					s = Y.call(arguments),
					u = (it._data(this, "events") || {})[e.type] || [],
					l = it.event.special[e.type] || {};
				if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
					for (a = it.event.handlers.call(this, e, u), t = 0;
					(i = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, o = 0;
					(r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((it.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
					return l.postDispatch && l.postDispatch.call(this, e), e.result
				}
			},
			handlers: function(e, t) {
				var n, r, i, o, a = [],
					s = t.delegateCount,
					u = e.target;
				if (s && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
					for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? it(n, this).index(u) >= 0 : it.find(n, this, null, [u]).length), i[n] && i.push(r);
					i.length && a.push({
						elem: u,
						handlers: i
					})
				}
				return s < t.length && a.push({
					elem: this,
					handlers: t.slice(s)
				}), a
			},
			fix: function(e) {
				if (e[it.expando]) return e;
				var t, n, r, i = e.type,
					o = e,
					a = this.fixHooks[i];
				for (a || (this.fixHooks[i] = a = Ot.test(i) ? this.mouseHooks : Mt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new it.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
				return e.target || (e.target = o.srcElement || ht), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, a.filter ? a.filter(e, o) : e
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(e, t) {
					return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(e, t) {
					var n, r, i, o = t.button,
						a = t.fromElement;
					return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || ht, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
				}
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						if (this !== h() && this.focus) try {
							return this.focus(), !1
						} catch (e) {}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						return this === h() && this.blur ? (this.blur(), !1) : void 0
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						return it.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
					},
					_default: function(e) {
						return it.nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			},
			simulate: function(e, t, n, r) {
				var i = it.extend(new it.Event, n, {
					type: e,
					isSimulated: !0,
					originalEvent: {}
				});
				r ? it.event.trigger(i, null, t) : it.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
			}
		}, it.removeEvent = ht.removeEventListener ?
		function(e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n, !1)
		} : function(e, t, n) {
			var r = "on" + t;
			e.detachEvent && (typeof e[r] === Ct && (e[r] = null), e.detachEvent(r, n))
		}, it.Event = function(e, t) {
			return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d : p) : this.type = e, t && it.extend(this, t), this.timeStamp = e && e.timeStamp || it.now(), void(this[it.expando] = !0)) : new it.Event(e, t)
		}, it.Event.prototype = {
			isDefaultPrevented: p,
			isPropagationStopped: p,
			isImmediatePropagationStopped: p,
			preventDefault: function() {
				var e = this.originalEvent;
				this.isDefaultPrevented = d, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
			},
			stopPropagation: function() {
				var e = this.originalEvent;
				this.isPropagationStopped = d, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
			},
			stopImmediatePropagation: function() {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = d, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, it.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(e, t) {
			it.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function(e) {
					var n, r = this,
						i = e.relatedTarget,
						o = e.handleObj;
					return (!i || i !== r && !it.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), nt.submitBubbles || (it.event.special.submit = {
			setup: function() {
				return it.nodeName(this, "form") ? !1 : void it.event.add(this, "click._submit keypress._submit", function(e) {
					var t = e.target,
						n = it.nodeName(t, "input") || it.nodeName(t, "button") ? t.form : void 0;
					n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit", function(e) {
						e._submit_bubble = !0
					}), it._data(n, "submitBubbles", !0))
				})
			},
			postDispatch: function(e) {
				e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && it.event.simulate("submit", this.parentNode, e, !0))
			},
			teardown: function() {
				return it.nodeName(this, "form") ? !1 : void it.event.remove(this, "._submit")
			}
		}), nt.changeBubbles || (it.event.special.change = {
			setup: function() {
				return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (it.event.add(this, "propertychange._change", function(e) {
					"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
				}), it.event.add(this, "click._change", function(e) {
					this._just_changed && !e.isTrigger && (this._just_changed = !1), it.event.simulate("change", this, e, !0)
				})), !1) : void it.event.add(this, "beforeactivate._change", function(e) {
					var t = e.target;
					Dt.test(t.nodeName) && !it._data(t, "changeBubbles") && (it.event.add(t, "change._change", function(e) {
						!this.parentNode || e.isSimulated || e.isTrigger || it.event.simulate("change", this.parentNode, e, !0)
					}), it._data(t, "changeBubbles", !0))
				})
			},
			handle: function(e) {
				var t = e.target;
				return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
			},
			teardown: function() {
				return it.event.remove(this, "._change"), !Dt.test(this.nodeName)
			}
		}), nt.focusinBubbles || it.each({
			focus: "focusin",
			blur: "focusout"
		}, function(e, t) {
			var n = function(e) {
					it.event.simulate(t, e.target, it.event.fix(e), !0)
				};
			it.event.special[t] = {
				setup: function() {
					var r = this.ownerDocument || this,
						i = it._data(r, t);
					i || r.addEventListener(e, n, !0), it._data(r, t, (i || 0) + 1)
				},
				teardown: function() {
					var r = this.ownerDocument || this,
						i = it._data(r, t) - 1;
					i ? it._data(r, t, i) : (r.removeEventListener(e, n, !0), it._removeData(r, t))
				}
			}
		}), it.fn.extend({
			on: function(e, t, n, r, i) {
				var o, a;
				if ("object" == typeof e) {
					"string" != typeof t && (n = n || t, t = void 0);
					for (o in e) this.on(o, t, n, e[o], i);
					return this
				}
				if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
				else if (!r) return this;
				return 1 === i && (a = r, r = function(e) {
					return it().off(e), a.apply(this, arguments)
				}, r.guid = a.guid || (a.guid = it.guid++)), this.each(function() {
					it.event.add(this, e, r, n, t)
				})
			},
			one: function(e, t, n, r) {
				return this.on(e, t, n, r, 1)
			},
			off: function(e, t, n) {
				var r, i;
				if (e && e.preventDefault && e.handleObj) return r = e.handleObj, it(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if ("object" == typeof e) {
					for (i in e) this.off(i, t, e[i]);
					return this
				}
				return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
					it.event.remove(this, e, n, t)
				})
			},
			trigger: function(e, t) {
				return this.each(function() {
					it.event.trigger(e, t, this)
				})
			},
			triggerHandler: function(e, t) {
				var n = this[0];
				return n ? it.event.trigger(e, t, n, !0) : void 0
			}
		});
		var Rt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			Lt = / jQuery\d+="(?:null|\d+)"/g,
			qt = new RegExp("<(?:" + Rt + ")[\\s/>]", "i"),
			It = /^\s+/,
			Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			Ht = /<([\w:]+)/,
			Vt = /<tbody/i,
			Wt = /<|&#?\w+;/,
			Bt = /<(?:script|style|link)/i,
			zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Ut = /^$|\/(?:java|ecma)script/i,
			Qt = /^true\/(.*)/,
			Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			Yt = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				area: [1, "<map>", "</map>"],
				param: [1, "<object>", "</object>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
			},
			Jt = v(ht),
			Gt = Jt.appendChild(ht.createElement("div"));
		Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td, it.extend({
			clone: function(e, t, n) {
				var r, i, o, a, s, u = it.contains(e.ownerDocument, e);
				if (nt.html5Clone || it.isXMLDoc(e) || !qt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Gt.innerHTML = e.outerHTML, Gt.removeChild(o = Gt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e))) for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
				if (t) if (n) for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) x(i, r[a]);
				else x(e, o);
				return r = g(o, "script"), r.length > 0 && w(r, !u && g(e, "script")), r = s = i = null, o
			},
			buildFragment: function(e, t, n, r) {
				for (var i, o, a, s, u, l, c, f = e.length, d = v(t), p = [], h = 0; f > h; h++) if (o = e[h], o || 0 === o) if ("object" === it.type(o)) it.merge(p, o.nodeType ? [o] : o);
				else if (Wt.test(o)) {
					for (s = s || d.appendChild(t.createElement("div")), u = (Ht.exec(o) || ["", ""])[1].toLowerCase(), c = Yt[u] || Yt._default, s.innerHTML = c[1] + o.replace(Ft, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
					if (!nt.leadingWhitespace && It.test(o) && p.push(t.createTextNode(It.exec(o)[0])), !nt.tbody) for (o = "table" !== u || Vt.test(o) ? "<table>" !== c[1] || Vt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) it.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
					for (it.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
					s = d.lastChild
				} else p.push(t.createTextNode(o));
				for (s && d.removeChild(s), nt.appendChecked || it.grep(g(p, "input"), m), h = 0; o = p[h++];) if ((!r || -1 === it.inArray(o, r)) && (a = it.contains(o.ownerDocument, o), s = g(d.appendChild(o), "script"), a && w(s), n)) for (i = 0; o = s[i++];) Ut.test(o.type || "") && n.push(o);
				return s = null, d
			},
			cleanData: function(e, t) {
				for (var n, r, i, o, a = 0, s = it.expando, u = it.cache, l = nt.deleteExpando, c = it.event.special; null != (n = e[a]); a++) if ((t || it.acceptData(n)) && (i = n[s], o = i && u[i])) {
					if (o.events) for (r in o.events) c[r] ? it.event.remove(n, r) : it.removeEvent(n, r, o.handle);
					u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Ct ? n.removeAttribute(s) : n[s] = null, X.push(i))
				}
			}
		}), it.fn.extend({
			text: function(e) {
				return Nt(this, function(e) {
					return void 0 === e ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
				}, null, e, arguments.length)
			},
			append: function() {
				return this.domManip(arguments, function(e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = y(this, e);
						t.appendChild(e)
					}
				})
			},
			prepend: function() {
				return this.domManip(arguments, function(e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = y(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function() {
				return this.domManip(arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function() {
				return this.domManip(arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			remove: function(e, t) {
				for (var n, r = e ? it.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || it.cleanData(g(n)), n.parentNode && (t && it.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
				return this
			},
			empty: function() {
				for (var e, t = 0; null != (e = this[t]); t++) {
					for (1 === e.nodeType && it.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
					e.options && it.nodeName(e, "select") && (e.options.length = 0)
				}
				return this
			},
			clone: function(e, t) {
				return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
					return it.clone(this, e, t)
				})
			},
			html: function(e) {
				return Nt(this, function(e) {
					var t = this[0] || {},
						n = 0,
						r = this.length;
					if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Lt, "") : void 0;
					if (!("string" != typeof e || Bt.test(e) || !nt.htmlSerialize && qt.test(e) || !nt.leadingWhitespace && It.test(e) || Yt[(Ht.exec(e) || ["", ""])[1].toLowerCase()])) {
						e = e.replace(Ft, "<$1></$2>");
						try {
							for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (it.cleanData(g(t, !1)), t.innerHTML = e);
							t = 0
						} catch (i) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function() {
				var e = arguments[0];
				return this.domManip(arguments, function(t) {
					e = this.parentNode, it.cleanData(g(this)), e && e.replaceChild(t, this)
				}), e && (e.length || e.nodeType) ? this : this.remove()
			},
			detach: function(e) {
				return this.remove(e, !0)
			},
			domManip: function(e, t) {
				e = J.apply([], e);
				var n, r, i, o, a, s, u = 0,
					l = this.length,
					c = this,
					f = l - 1,
					d = e[0],
					p = it.isFunction(d);
				if (p || l > 1 && "string" == typeof d && !nt.checkClone && zt.test(d)) return this.each(function(n) {
					var r = c.eq(n);
					p && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
				});
				if (l && (s = it.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
					for (o = it.map(g(s, "script"), $), i = o.length; l > u; u++) r = s, u !== f && (r = it.clone(r, !0, !0), i && it.merge(o, g(r, "script"))), t.call(this[u], r, u);
					if (i) for (a = o[o.length - 1].ownerDocument, it.map(o, b), u = 0; i > u; u++) r = o[u], Ut.test(r.type || "") && !it._data(r, "globalEval") && it.contains(a, r) && (r.src ? it._evalUrl && it._evalUrl(r.src) : it.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Xt, "")));
					s = n = null
				}
				return this
			}
		}), it.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, t) {
			it.fn[e] = function(e) {
				for (var n, r = 0, i = [], o = it(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), it(o[r])[t](n), G.apply(i, n.get());
				return this.pushStack(i)
			}
		});
		var Kt, Zt = {};
		!
		function() {
			var e;
			nt.shrinkWrapBlocks = function() {
				if (null != e) return e;
				e = !1;
				var t, n, r;
				return n = ht.getElementsByTagName("body")[0], n && n.style ? (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
			}
		}();
		var en, tn, nn = /^margin/,
			rn = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"),
			on = /^(top|right|bottom|left)$/;
		e.getComputedStyle ? (en = function(t) {
			return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
		}, tn = function(e, t, n) {
			var r, i, o, a, s = e.style;
			return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || it.contains(e.ownerDocument, e) || (a = it.style(e, t)), rn.test(a) && nn.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
		}) : ht.documentElement.currentStyle && (en = function(e) {
			return e.currentStyle
		}, tn = function(e, t, n) {
			var r, i, o, a, s = e.style;
			return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rn.test(a) && !on.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
		}), !
		function() {
			function t() {
				var t, n, r, i;
				n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
					width: "4px"
				}).width, i = t.appendChild(ht.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
			}
			var n, r, i, o, a, s, u;
			n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], (r = i && i.style) && (r.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === r.opacity, nt.cssFloat = !! r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, it.extend(nt, {
				reliableHiddenOffsets: function() {
					return null == s && t(), s
				},
				boxSizingReliable: function() {
					return null == a && t(), a
				},
				pixelPosition: function() {
					return null == o && t(), o
				},
				reliableMarginRight: function() {
					return null == u && t(), u
				}
			}))
		}(), it.swap = function(e, t, n, r) {
			var i, o, a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t) e.style[o] = a[o];
			return i
		};
		var an = /alpha\([^)]*\)/i,
			sn = /opacity\s*=\s*([^)]*)/,
			un = /^(none|table(?!-c[ea]).+)/,
			ln = new RegExp("^(" + Et + ")(.*)$", "i"),
			cn = new RegExp("^([+-])=(" + Et + ")", "i"),
			fn = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			dn = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			pn = ["Webkit", "O", "Moz", "ms"];
		it.extend({
			cssHooks: {
				opacity: {
					get: function(e, t) {
						if (t) {
							var n = tn(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": nt.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(e, t, n, r) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var i, o, a, s = it.camelCase(t),
						u = e.style;
					if (t = it.cssProps[s] || (it.cssProps[s] = A(u, s)), a = it.cssHooks[t] || it.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
					if (o = typeof n, "string" === o && (i = cn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || it.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
						u[t] = n
					} catch (l) {}
				}
			},
			css: function(e, t, n, r) {
				var i, o, a, s = it.camelCase(t);
				return t = it.cssProps[s] || (it.cssProps[s] = A(e.style, s)), a = it.cssHooks[t] || it.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tn(e, t, r)), "normal" === o && t in dn && (o = dn[t]), "" === n || n ? (i = parseFloat(o), n === !0 || it.isNumeric(i) ? i || 0 : o) : o
			}
		}), it.each(["height", "width"], function(e, t) {
			it.cssHooks[t] = {
				get: function(e, n, r) {
					return n ? un.test(it.css(e, "display")) && 0 === e.offsetWidth ? it.swap(e, fn, function() {
						return D(e, t, r)
					}) : D(e, t, r) : void 0
				},
				set: function(e, n, r) {
					var i = r && en(e);
					return N(e, n, r ? _(e, t, r, nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, i), i) : 0)
				}
			}
		}), nt.opacity || (it.cssHooks.opacity = {
			get: function(e, t) {
				return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
			},
			set: function(e, t) {
				var n = e.style,
					r = e.currentStyle,
					i = it.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
					o = r && r.filter || n.filter || "";
				n.zoom = 1, (t >= 1 || "" === t) && "" === it.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i)
			}
		}), it.cssHooks.marginRight = E(nt.reliableMarginRight, function(e, t) {
			return t ? it.swap(e, {
				display: "inline-block"
			}, tn, [e, "marginRight"]) : void 0
		}), it.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, t) {
			it.cssHooks[e + t] = {
				expand: function(n) {
					for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + At[r] + t] = o[r] || o[r - 2] || o[0];
					return i
				}
			}, nn.test(e) || (it.cssHooks[e + t].set = N)
		}), it.fn.extend({
			css: function(e, t) {
				return Nt(this, function(e, t, n) {
					var r, i, o = {},
						a = 0;
					if (it.isArray(t)) {
						for (r = en(e), i = t.length; i > a; a++) o[t[a]] = it.css(e, t[a], !1, r);
						return o
					}
					return void 0 !== n ? it.style(e, t, n) : it.css(e, t)
				}, e, t, arguments.length > 1)
			},
			show: function() {
				return k(this, !0)
			},
			hide: function() {
				return k(this)
			},
			toggle: function(e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
					kt(this) ? it(this).show() : it(this).hide()
				})
			}
		}), it.Tween = M, M.prototype = {
			constructor: M,
			init: function(e, t, n, r, i, o) {
				this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (it.cssNumber[n] ? "" : "px")
			},
			cur: function() {
				var e = M.propHooks[this.prop];
				return e && e.get ? e.get(this) : M.propHooks._default.get(this)
			},
			run: function(e) {
				var t, n = M.propHooks[this.prop];
				return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
			}
		}, M.prototype.init.prototype = M.prototype, M.propHooks = {
			_default: {
				get: function(e) {
					var t;
					return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = it.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
				},
				set: function(e) {
					it.fx.step[e.prop] ? it.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop]) ? it.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
				}
			}
		}, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
			set: function(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, it.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2
			}
		}, it.fx = M.prototype.init, it.fx.step = {};
		var hn, vn, gn = /^(?:toggle|show|hide)$/,
			mn = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"),
			yn = /queueHooks$/,
			$n = [R],
			bn = {
				"*": [function(e, t) {
					var n = this.createTween(e, t),
						r = n.cur(),
						i = mn.exec(t),
						o = i && i[3] || (it.cssNumber[e] ? "" : "px"),
						a = (it.cssNumber[e] || "px" !== o && +r) && mn.exec(it.css(n.elem, e)),
						s = 1,
						u = 20;
					if (a && a[3] !== o) {
						o = o || a[3], i = i || [], a = +r || 1;
						do s = s || ".5", a /= s, it.style(n.elem, e, a + o);
						while (s !== (s = n.cur() / r) && 1 !== s && --u)
					}
					return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
				}]
			};
		it.Animation = it.extend(q, {
			tweener: function(e, t) {
				it.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for (var n, r = 0, i = e.length; i > r; r++) n = e[r], bn[n] = bn[n] || [], bn[n].unshift(t)
			},
			prefilter: function(e, t) {
				t ? $n.unshift(e) : $n.push(e)
			}
		}), it.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? it.extend({}, e) : {
				complete: n || !n && t || it.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !it.isFunction(t) && t
			};
			return r.duration = it.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in it.fx.speeds ? it.fx.speeds[r.duration] : it.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				it.isFunction(r.old) && r.old.call(this), r.queue && it.dequeue(this, r.queue)
			}, r
		}, it.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(kt).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(e, t, n, r) {
				var i = it.isEmptyObject(e),
					o = it.speed(t, n, r),
					a = function() {
						var t = q(this, it.extend({}, e), o);
						(i || it._data(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(e, t, n) {
				var r = function(e) {
						var t = e.stop;
						delete e.stop, t(n)
					};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						i = null != e && e + "queueHooks",
						o = it.timers,
						a = it._data(this);
					if (i) a[i] && a[i].stop && r(a[i]);
					else for (i in a) a[i] && a[i].stop && yn.test(i) && r(a[i]);
					for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
					(t || !n) && it.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = it._data(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						o = it.timers,
						a = r ? r.length : 0;
					for (n.finish = !0, it.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}), it.each(["toggle", "show", "hide"], function(e, t) {
			var n = it.fn[t];
			it.fn[t] = function(e, r, i) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i)
			}
		}), it.each({
			slideDown: P("show"),
			slideUp: P("hide"),
			slideToggle: P("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			it.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), it.timers = [], it.fx.tick = function() {
			var e, t = it.timers,
				n = 0;
			for (hn = it.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
			t.length || it.fx.stop(), hn = void 0
		}, it.fx.timer = function(e) {
			it.timers.push(e), e() ? it.fx.start() : it.timers.pop()
		}, it.fx.interval = 13, it.fx.start = function() {
			vn || (vn = setInterval(it.fx.tick, it.fx.interval))
		}, it.fx.stop = function() {
			clearInterval(vn), vn = null
		}, it.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, it.fn.delay = function(e, t) {
			return e = it.fx ? it.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		}, function() {
			var e, t, n, r, i;
			t = ht.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = ht.createElement("select"), i = n.appendChild(ht.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(r.getAttribute("style")), nt.hrefNormalized = "/a" === r.getAttribute("href"), nt.checkOn = !! e.value, nt.optSelected = i.selected, nt.enctype = !! ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !i.disabled, e = ht.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
		}();
		var wn = /\r/g;
		it.fn.extend({
			val: function(e) {
				var t, n, r, i = this[0];
				return arguments.length ? (r = it.isFunction(e), this.each(function(n) {
					var i;
					1 === this.nodeType && (i = r ? e.call(this, n, it(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function(e) {
						return null == e ? "" : e + ""
					})), t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				})) : i ? (t = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)) : void 0
			}
		}), it.extend({
			valHooks: {
				option: {
					get: function(e) {
						var t = it.find.attr(e, "value");
						return null != t ? t : it.trim(it.text(e))
					}
				},
				select: {
					get: function(e) {
						for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
							if (t = it(n).val(), o) return t;
							a.push(t)
						}
						return a
					},
					set: function(e, t) {
						for (var n, r, i = e.options, o = it.makeArray(t), a = i.length; a--;) if (r = i[a], it.inArray(it.valHooks.option.get(r), o) >= 0) try {
							r.selected = n = !0
						} catch (s) {
							r.scrollHeight
						} else r.selected = !1;
						return n || (e.selectedIndex = -1), i
					}
				}
			}
		}), it.each(["radio", "checkbox"], function() {
			it.valHooks[this] = {
				set: function(e, t) {
					return it.isArray(t) ? e.checked = it.inArray(it(e).val(), t) >= 0 : void 0
				}
			}, nt.checkOn || (it.valHooks[this].get = function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		});
		var xn, Cn, Sn = it.expr.attrHandle,
			Tn = /^(?:checked|selected)$/i,
			En = nt.getSetAttribute,
			An = nt.input;
		it.fn.extend({
			attr: function(e, t) {
				return Nt(this, it.attr, e, t, arguments.length > 1)
			},
			removeAttr: function(e) {
				return this.each(function() {
					it.removeAttr(this, e)
				})
			}
		}), it.extend({
			attr: function(e, t, n) {
				var r, i, o = e.nodeType;
				return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Ct ? it.prop(e, t, n) : (1 === o && it.isXMLDoc(e) || (t = t.toLowerCase(), r = it.attrHooks[t] || (it.expr.match.bool.test(t) ? Cn : xn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = it.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void it.removeAttr(e, t)) : void 0
			},
			removeAttr: function(e, t) {
				var n, r, i = 0,
					o = t && t.match($t);
				if (o && 1 === e.nodeType) for (; n = o[i++];) r = it.propFix[n] || n, it.expr.match.bool.test(n) ? An && En || !Tn.test(n) ? e[r] = !1 : e[it.camelCase("default-" + n)] = e[r] = !1 : it.attr(e, n, ""), e.removeAttribute(En ? n : r)
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						if (!nt.radioValue && "radio" === t && it.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			}
		}), Cn = {
			set: function(e, t, n) {
				return t === !1 ? it.removeAttr(e, n) : An && En || !Tn.test(n) ? e.setAttribute(!En && it.propFix[n] || n, n) : e[it.camelCase("default-" + n)] = e[n] = !0, n
			}
		}, it.each(it.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var n = Sn[t] || it.find.attr;
			Sn[t] = An && En || !Tn.test(t) ?
			function(e, t, r) {
				var i, o;
				return r || (o = Sn[t], Sn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Sn[t] = o), i
			} : function(e, t, n) {
				return n ? void 0 : e[it.camelCase("default-" + t)] ? t.toLowerCase() : null
			}
		}), An && En || (it.attrHooks.value = {
			set: function(e, t, n) {
				return it.nodeName(e, "input") ? void(e.defaultValue = t) : xn && xn.set(e, t, n)
			}
		}), En || (xn = {
			set: function(e, t, n) {
				var r = e.getAttributeNode(n);
				return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
			}
		}, Sn.id = Sn.name = Sn.coords = function(e, t, n) {
			var r;
			return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
		}, it.valHooks.button = {
			get: function(e, t) {
				var n = e.getAttributeNode(t);
				return n && n.specified ? n.value : void 0
			},
			set: xn.set
		}, it.attrHooks.contenteditable = {
			set: function(e, t, n) {
				xn.set(e, "" === t ? !1 : t, n)
			}
		}, it.each(["width", "height"], function(e, t) {
			it.attrHooks[t] = {
				set: function(e, n) {
					return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
				}
			}
		})), nt.style || (it.attrHooks.style = {
			get: function(e) {
				return e.style.cssText || void 0
			},
			set: function(e, t) {
				return e.style.cssText = t + ""
			}
		});
		var kn = /^(?:input|select|textarea|button|object)$/i,
			Nn = /^(?:a|area)$/i;
		it.fn.extend({
			prop: function(e, t) {
				return Nt(this, it.prop, e, t, arguments.length > 1)
			},
			removeProp: function(e) {
				return e = it.propFix[e] || e, this.each(function() {
					try {
						this[e] = void 0, delete this[e]
					} catch (t) {}
				})
			}
		}), it.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
			prop: function(e, t, n) {
				var r, i, o, a = e.nodeType;
				return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !it.isXMLDoc(e), o && (t = it.propFix[t] || t, i = it.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
			},
			propHooks: {
				tabIndex: {
					get: function(e) {
						var t = it.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : kn.test(e.nodeName) || Nn.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			}
		}), nt.hrefNormalized || it.each(["href", "src"], function(e, t) {
			it.propHooks[t] = {
				get: function(e) {
					return e.getAttribute(t, 4)
				}
			}
		}), nt.optSelected || (it.propHooks.selected = {
			get: function(e) {
				var t = e.parentNode;
				return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
			}
		}), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			it.propFix[this.toLowerCase()] = this
		}), nt.enctype || (it.propFix.enctype = "encoding");
		var _n = /[\t\r\n\f]/g;
		it.fn.extend({
			addClass: function(e) {
				var t, n, r, i, o, a, s = 0,
					u = this.length,
					l = "string" == typeof e && e;
				if (it.isFunction(e)) return this.each(function(t) {
					it(this).addClass(e.call(this, t, this.className))
				});
				if (l) for (t = (e || "").match($t) || []; u > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(_n, " ") : " ")) {
					for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
					a = it.trim(r), n.className !== a && (n.className = a)
				}
				return this
			},
			removeClass: function(e) {
				var t, n, r, i, o, a, s = 0,
					u = this.length,
					l = 0 === arguments.length || "string" == typeof e && e;
				if (it.isFunction(e)) return this.each(function(t) {
					it(this).removeClass(e.call(this, t, this.className))
				});
				if (l) for (t = (e || "").match($t) || []; u > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(_n, " ") : "")) {
					for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
					a = e ? it.trim(r) : "", n.className !== a && (n.className = a)
				}
				return this
			},
			toggleClass: function(e, t) {
				var n = typeof e;
				return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(it.isFunction(e) ?
				function(n) {
					it(this).toggleClass(e.call(this, n, this.className, t), t)
				} : function() {
					if ("string" === n) for (var t, r = 0, i = it(this), o = e.match($t) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
					else(n === Ct || "boolean" === n) && (this.className && it._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : it._data(this, "__className__") || "")
				})
			},
			hasClass: function(e) {
				for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(_n, " ").indexOf(t) >= 0) return !0;
				return !1
			}
		}), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
			it.fn[t] = function(e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), it.fn.extend({
			hover: function(e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			},
			bind: function(e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function(e, t) {
				return this.off(e, null, t)
			},
			delegate: function(e, t, n, r) {
				return this.on(t, e, n, r)
			},
			undelegate: function(e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		});
		var Dn = it.now(),
			Mn = /\?/,
			On = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
		it.parseJSON = function(t) {
			if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
			var n, r = null,
				i = it.trim(t + "");
			return i && !it.trim(i.replace(On, function(e, t, i, o) {
				return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
			})) ? Function("return " + i)() : it.error("Invalid JSON: " + t)
		}, it.parseXML = function(t) {
			var n, r;
			if (!t || "string" != typeof t) return null;
			try {
				e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
			} catch (i) {
				n = void 0
			}
			return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + t), n
		};
		var Pn, jn, Rn = /#.*$/,
			Ln = /([?&])_=[^&]*/,
			qn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			In = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Fn = /^(?:GET|HEAD)$/,
			Hn = /^\/\//,
			Vn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			Wn = {},
			Bn = {},
			zn = "*/".concat("*");
		try {
			jn = location.href
		} catch (Un) {
			jn = ht.createElement("a"), jn.href = "", jn = jn.href
		}
		Pn = Vn.exec(jn.toLowerCase()) || [], it.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: jn,
				type: "GET",
				isLocal: In.test(Pn[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": zn,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": it.parseJSON,
					"text xml": it.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(e, t) {
				return t ? H(H(e, it.ajaxSettings), t) : H(it.ajaxSettings, e)
			},
			ajaxPrefilter: I(Wn),
			ajaxTransport: I(Bn),
			ajax: function(e, t) {
				function n(e, t, n, r) {
					var i, c, m, y, b, x = t;
					2 !== $ && ($ = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = V(f, w, n)), y = W(f, y, w, i), i ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (it.lastModified[o] = b), b = w.getResponseHeader("etag"), b && (it.etag[o] = b)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = y.state, c = y.data, m = y.error, i = !m)) : (m = x, (e || !x) && (x = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || x) + "", i ? h.resolveWith(d, [c, x, w]) : h.rejectWith(d, [w, x, m]), w.statusCode(g), g = void 0, u && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? c : m]), v.fireWith(d, [w, x]), u && (p.trigger("ajaxComplete", [w, f]), --it.active || it.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var r, i, o, a, s, u, l, c, f = it.ajaxSetup({}, t),
					d = f.context || f,
					p = f.context && (d.nodeType || d.jquery) ? it(d) : it.event,
					h = it.Deferred(),
					v = it.Callbacks("once memory"),
					g = f.statusCode || {},
					m = {},
					y = {},
					$ = 0,
					b = "canceled",
					w = {
						readyState: 0,
						getResponseHeader: function(e) {
							var t;
							if (2 === $) {
								if (!c) for (c = {}; t = qn.exec(a);) c[t[1].toLowerCase()] = t[2];
								t = c[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function() {
							return 2 === $ ? a : null
						},
						setRequestHeader: function(e, t) {
							var n = e.toLowerCase();
							return $ || (e = y[n] = y[n] || e, m[e] = t), this
						},
						overrideMimeType: function(e) {
							return $ || (f.mimeType = e), this
						},
						statusCode: function(e) {
							var t;
							if (e) if (2 > $) for (t in e) g[t] = [g[t], e[t]];
							else w.always(e[w.status]);
							return this
						},
						abort: function(e) {
							var t = e || b;
							return l && l.abort(t), n(0, t), this
						}
					};
				if (h.promise(w).complete = v.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || jn) + "").replace(Rn, "").replace(Hn, Pn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = it.trim(f.dataType || "*").toLowerCase().match($t) || [""], null == f.crossDomain && (r = Vn.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === Pn[1] && r[2] === Pn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Pn[3] || ("http:" === Pn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = it.param(f.data, f.traditional)), F(Wn, f, t, w), 2 === $) return w;
				u = it.event && f.global, u && 0 === it.active++ && it.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Fn.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (Mn.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Ln.test(o) ? o.replace(Ln, "$1_=" + Dn++) : o + (Mn.test(o) ? "&" : "?") + "_=" + Dn++)), f.ifModified && (it.lastModified[o] && w.setRequestHeader("If-Modified-Since", it.lastModified[o]), it.etag[o] && w.setRequestHeader("If-None-Match", it.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + zn + "; q=0.01" : "") : f.accepts["*"]);
				for (i in f.headers) w.setRequestHeader(i, f.headers[i]);
				if (f.beforeSend && (f.beforeSend.call(d, w, f) === !1 || 2 === $)) return w.abort();
				b = "abort";
				for (i in {
					success: 1,
					error: 1,
					complete: 1
				}) w[i](f[i]);
				if (l = F(Bn, f, t, w)) {
					w.readyState = 1, u && p.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
						w.abort("timeout")
					}, f.timeout));
					try {
						$ = 1, l.send(m, n)
					} catch (x) {
						if (!(2 > $)) throw x;
						n(-1, x)
					}
				} else n(-1, "No Transport");
				return w
			},
			getJSON: function(e, t, n) {
				return it.get(e, t, n, "json")
			},
			getScript: function(e, t) {
				return it.get(e, void 0, t, "script")
			}
		}), it.each(["get", "post"], function(e, t) {
			it[t] = function(e, n, r, i) {
				return it.isFunction(n) && (i = i || r, r = n, n = void 0), it.ajax({
					url: e,
					type: t,
					dataType: i,
					data: n,
					success: r
				})
			}
		}), it._evalUrl = function(e) {
			return it.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}, it.fn.extend({
			wrapAll: function(e) {
				if (it.isFunction(e)) return this.each(function(t) {
					it(this).wrapAll(e.call(this, t))
				});
				if (this[0]) {
					var t = it(e, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
						for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
						return e
					}).append(this)
				}
				return this
			},
			wrapInner: function(e) {
				return this.each(it.isFunction(e) ?
				function(t) {
					it(this).wrapInner(e.call(this, t))
				} : function() {
					var t = it(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function(e) {
				var t = it.isFunction(e);
				return this.each(function(n) {
					it(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
				}).end()
			}
		}), it.expr.filters.hidden = function(e) {
			return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || it.css(e, "display"))
		}, it.expr.filters.visible = function(e) {
			return !it.expr.filters.hidden(e)
		};
		var Qn = /%20/g,
			Xn = /\[\]$/,
			Yn = /\r?\n/g,
			Jn = /^(?:submit|button|image|reset|file)$/i,
			Gn = /^(?:input|select|textarea|keygen)/i;
		it.param = function(e, t) {
			var n, r = [],
				i = function(e, t) {
					t = it.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			if (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(e) || e.jquery && !it.isPlainObject(e)) it.each(e, function() {
				i(this.name, this.value)
			});
			else for (n in e) B(n, e[n], t, i);
			return r.join("&").replace(Qn, "+")
		}, it.fn.extend({
			serialize: function() {
				return it.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map(function() {
					var e = it.prop(this, "elements");
					return e ? it.makeArray(e) : this
				}).filter(function() {
					var e = this.type;
					return this.name && !it(this).is(":disabled") && Gn.test(this.nodeName) && !Jn.test(e) && (this.checked || !_t.test(e))
				}).map(function(e, t) {
					var n = it(this).val();
					return null == n ? null : it.isArray(n) ? it.map(n, function(e) {
						return {
							name: t.name,
							value: e.replace(Yn, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(Yn, "\r\n")
					}
				}).get()
			}
		}), it.ajaxSettings.xhr = void 0 !== e.ActiveXObject ?
		function() {
			return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && z() || U()
		} : z;
		var Kn = 0,
			Zn = {},
			er = it.ajaxSettings.xhr();
		e.attachEvent && e.attachEvent("onunload", function() {
			for (var e in Zn) Zn[e](void 0, !0)
		}), nt.cors = !! er && "withCredentials" in er, er = nt.ajax = !! er, er && it.ajaxTransport(function(e) {
			if (!e.crossDomain || nt.cors) {
				var t;
				return {
					send: function(n, r) {
						var i, o = e.xhr(),
							a = ++Kn;
						if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
						e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
						for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
						o.send(e.hasContent && e.data || null), t = function(n, i) {
							var s, u, l;
							if (t && (i || 4 === o.readyState)) if (delete Zn[a], t = void 0, o.onreadystatechange = it.noop, i) 4 !== o.readyState && o.abort();
							else {
								l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
								try {
									u = o.statusText
								} catch (c) {
									u = ""
								}
								s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
							}
							l && r(s, u, l, o.getAllResponseHeaders())
						}, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zn[a] = t : t()
					},
					abort: function() {
						t && t(void 0, !0)
					}
				}
			}
		}), it.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function(e) {
					return it.globalEval(e), e
				}
			}
		}), it.ajaxPrefilter("script", function(e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
		}), it.ajaxTransport("script", function(e) {
			if (e.crossDomain) {
				var t, n = ht.head || it("head")[0] || ht.documentElement;
				return {
					send: function(r, i) {
						t = ht.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
							(n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
						}, n.insertBefore(t, n.firstChild)
					},
					abort: function() {
						t && t.onload(void 0, !0)
					}
				}
			}
		});
		var tr = [],
			nr = /(=)\?(?=&|$)|\?\?/;
		it.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = tr.pop() || it.expando + "_" + Dn++;
				return this[e] = !0, e
			}
		}), it.ajaxPrefilter("json jsonp", function(t, n, r) {
			var i, o, a, s = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
			return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Mn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
				return a || it.error(i + " was not called"), a[0]
			}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
				a = arguments
			}, r.always(function() {
				e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), a && it.isFunction(o) && o(a[0]), a = o = void 0
			}), "script") : void 0
		}), it.parseHTML = function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || ht;
			var r = ft.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = it.buildFragment([e], t, i), i && i.length && it(i).remove(), it.merge([], r.childNodes))
		};
		var rr = it.fn.load;
		it.fn.load = function(e, t, n) {
			if ("string" != typeof e && rr) return rr.apply(this, arguments);
			var r, i, o, a = this,
				s = e.indexOf(" ");
			return s >= 0 && (r = it.trim(e.slice(s, e.length)), e = e.slice(0, s)), it.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && it.ajax({
				url: e,
				type: o,
				dataType: "html",
				data: t
			}).done(function(e) {
				i = arguments, a.html(r ? it("<div>").append(it.parseHTML(e)).find(r) : e)
			}).complete(n &&
			function(e, t) {
				a.each(n, i || [e.responseText, t, e])
			}), this
		}, it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
			it.fn[t] = function(e) {
				return this.on(t, e)
			}
		}), it.expr.filters.animated = function(e) {
			return it.grep(it.timers, function(t) {
				return e === t.elem
			}).length
		};
		var ir = e.document.documentElement;
		it.offset = {
			setOffset: function(e, t, n) {
				var r, i, o, a, s, u, l, c = it.css(e, "position"),
					f = it(e),
					d = {};
				"static" === c && (e.style.position = "relative"), s = f.offset(), o = it.css(e, "top"), u = it.css(e, "left"), l = ("absolute" === c || "fixed" === c) && it.inArray("auto", [o, u]) > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), it.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
			}
		}, it.fn.extend({
			offset: function(e) {
				if (arguments.length) return void 0 === e ? this : this.each(function(t) {
					it.offset.setOffset(this, e, t)
				});
				var t, n, r = {
					top: 0,
					left: 0
				},
					i = this[0],
					o = i && i.ownerDocument;
				return o ? (t = o.documentElement, it.contains(t, i) ? (typeof i.getBoundingClientRect !== Ct && (r = i.getBoundingClientRect()), n = Q(o), {
					top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
					left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
				}) : r) : void 0
			},
			position: function() {
				if (this[0]) {
					var e, t, n = {
						top: 0,
						left: 0
					},
						r = this[0];
					return "fixed" === it.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), it.nodeName(e[0], "html") || (n = e.offset()), n.top += it.css(e[0], "borderTopWidth", !0), n.left += it.css(e[0], "borderLeftWidth", !0)), {
						top: t.top - n.top - it.css(r, "marginTop", !0),
						left: t.left - n.left - it.css(r, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var e = this.offsetParent || ir; e && !it.nodeName(e, "html") && "static" === it.css(e, "position");) e = e.offsetParent;
					return e || ir
				})
			}
		}), it.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(e, t) {
			var n = /Y/.test(t);
			it.fn[e] = function(r) {
				return Nt(this, function(e, r, i) {
					var o = Q(e);
					return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? it(o).scrollLeft() : i, n ? i : it(o).scrollTop()) : e[r] = i)
				}, e, r, arguments.length, null)
			}
		}), it.each(["top", "left"], function(e, t) {
			it.cssHooks[t] = E(nt.pixelPosition, function(e, n) {
				return n ? (n = tn(e, t), rn.test(n) ? it(e).position()[t] + "px" : n) : void 0
			})
		}), it.each({
			Height: "height",
			Width: "width"
		}, function(e, t) {
			it.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function(n, r) {
				it.fn[r] = function(r, i) {
					var o = arguments.length && (n || "boolean" != typeof r),
						a = n || (r === !0 || i === !0 ? "margin" : "border");
					return Nt(this, function(t, n, r) {
						var i;
						return it.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? it.css(t, n, a) : it.style(t, n, r, a)
					}, t, o ? r : void 0, o, null)
				}
			})
		}), it.fn.size = function() {
			return this.length
		}, it.fn.andSelf = it.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
			return it
		});
		var or = e.jQuery,
			ar = e.$;
		return it.noConflict = function(t) {
			return e.$ === it && (e.$ = ar), t && e.jQuery === it && (e.jQuery = or), it
		}, typeof t === Ct && (e.jQuery = e.$ = it), it
	})
}), window.$ = window.jQuery = require("jquery.js"),

!
function(e, t, n) { // 引入 angular
	"use strict";

	function r(e) {
		return function() {
			var t, n, r = arguments[0],
				i = "[" + (e ? e + ":" : "") + r + "] ",
				o = arguments[1],
				a = arguments,
				s = function(e) {
					return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e
				};
			for (t = i + o.replace(/\{\d+\}/g, function(e) {
				var t, n = +e.slice(1, -1);
				return n + 2 < a.length ? (t = a[n + 2], "function" == typeof t ? t.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof t ? "undefined" : "string" != typeof t ? V(t) : t) : e
			}), t = t + "\nhttp://errors.angularjs.org/1.2.28/" + (e ? e + "/" : "") + r, n = 2; n < arguments.length; n++) t = t + (2 == n ? "?" : "&") + "p" + (n - 2) + "=" + encodeURIComponent(s(arguments[n]));
			return new Error(t)
		}
	}
	function i(e) {
		if (null == e || T(e)) return !1;
		var t = e.length;
		return 1 === e.nodeType && t ? !0 : b(e) || Dr(e) || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}
	function o(e, t, n) {
		var r;
		if (e) if (C(e)) for (r in e)"prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r);
		else if (Dr(e) || i(e)) for (r = 0; r < e.length; r++) t.call(n, e[r], r);
		else if (e.forEach && e.forEach !== o) e.forEach(t, n);
		else for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
		return e
	}
	function a(e) {
		var t = [];
		for (var n in e) e.hasOwnProperty(n) && t.push(n);
		return t.sort()
	}
	function s(e, t, n) {
		for (var r = a(e), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
		return r
	}
	function u(e) {
		return function(t, n) {
			e(n, t)
		}
	}
	function l() {
		for (var e, t = _r.length; t;) {
			if (t--, e = _r[t].charCodeAt(0), 57 == e) return _r[t] = "A", _r.join("");
			if (90 != e) return _r[t] = String.fromCharCode(e + 1), _r.join("");
			_r[t] = "0"
		}
		return _r.unshift("0"), _r.join("")
	}
	function c(e, t) {
		t ? e.$$hashKey = t : delete e.$$hashKey
	}
	function f(e) {
		var t = e.$$hashKey;
		return o(arguments, function(t) {
			t !== e && o(t, function(t, n) {
				e[n] = t
			})
		}), c(e, t), e
	}
	function d(e) {
		return parseInt(e, 10)
	}
	function p(e, t) {
		return f(new(f(function() {}, {
			prototype: e
		})), t)
	}
	function h() {}
	function v(e) {
		return e
	}
	function g(e) {
		return function() {
			return e
		}
	}
	function m(e) {
		return "undefined" == typeof e
	}
	function y(e) {
		return "undefined" != typeof e
	}
	function $(e) {
		return null != e && "object" == typeof e
	}
	function b(e) {
		return "string" == typeof e
	}
	function w(e) {
		return "number" == typeof e
	}
	function x(e) {
		return "[object Date]" === Ar.call(e)
	}
	function C(e) {
		return "function" == typeof e
	}
	function S(e) {
		return "[object RegExp]" === Ar.call(e)
	}
	function T(e) {
		return e && e.document && e.location && e.alert && e.setInterval
	}
	function E(e) {
		return e && e.$evalAsync && e.$watch
	}
	function A(e) {
		return "[object File]" === Ar.call(e)
	}
	function k(e) {
		return "[object Blob]" === Ar.call(e)
	}
	function N(e) {
		return e && C(e.then)
	}
	function _(e) {
		return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
	}
	function D(e, t, n) {
		var r = [];
		return o(e, function(e, i, o) {
			r.push(t.call(n, e, i, o))
		}), r
	}
	function M(e, t) {
		return -1 != O(e, t)
	}
	function O(e, t) {
		if (e.indexOf) return e.indexOf(t);
		for (var n = 0; n < e.length; n++) if (t === e[n]) return n;
		return -1
	}
	function P(e, t) {
		var n = O(e, t);
		return n >= 0 && e.splice(n, 1), t
	}
	function j(e, t, n, r) {
		if (T(e) || E(e)) throw kr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
		if (t) {
			if (e === t) throw kr("cpi", "Can't copy! Source and destination are identical.");
			if (n = n || [], r = r || [], $(e)) {
				var i = O(n, e);
				if (-1 !== i) return r[i];
				n.push(e), r.push(t)
			}
			var a;
			if (Dr(e)) {
				t.length = 0;
				for (var s = 0; s < e.length; s++) a = j(e[s], null, n, r), $(e[s]) && (n.push(e[s]), r.push(a)), t.push(a)
			} else {
				var u = t.$$hashKey;
				Dr(t) ? t.length = 0 : o(t, function(e, n) {
					delete t[n]
				});
				for (var l in e) a = j(e[l], null, n, r), $(e[l]) && (n.push(e[l]), r.push(a)), t[l] = a;
				c(t, u)
			}
		} else t = e, e && (Dr(e) ? t = j(e, [], n, r) : x(e) ? t = new Date(e.getTime()) : S(e) ? (t = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex) : $(e) && (t = j(e, {}, n, r)));
		return t
	}
	function R(e, t) {
		if (Dr(e)) {
			t = t || [];
			for (var n = 0; n < e.length; n++) t[n] = e[n]
		} else if ($(e)) {
			t = t || {};
			for (var r in e)!gr.call(e, r) || "$" === r.charAt(0) && "$" === r.charAt(1) || (t[r] = e[r])
		}
		return t || e
	}
	function L(e, t) {
		if (e === t) return !0;
		if (null === e || null === t) return !1;
		if (e !== e && t !== t) return !0;
		var r, i, o, a = typeof e,
			s = typeof t;
		if (a == s && "object" == a) {
			if (!Dr(e)) {
				if (x(e)) return x(t) ? isNaN(e.getTime()) && isNaN(t.getTime()) || e.getTime() === t.getTime() : !1;
				if (S(e) && S(t)) return e.toString() == t.toString();
				if (E(e) || E(t) || T(e) || T(t) || Dr(t)) return !1;
				o = {};
				for (i in e) if ("$" !== i.charAt(0) && !C(e[i])) {
					if (!L(e[i], t[i])) return !1;
					o[i] = !0
				}
				for (i in t) if (!o.hasOwnProperty(i) && "$" !== i.charAt(0) && t[i] !== n && !C(t[i])) return !1;
				return !0
			}
			if (!Dr(t)) return !1;
			if ((r = e.length) == t.length) {
				for (i = 0; r > i; i++) if (!L(e[i], t[i])) return !1;
				return !0
			}
		}
		return !1
	}
	function q(e, t, n) {
		return e.concat(Tr.call(t, n))
	}
	function I(e, t) {
		return Tr.call(e, t || 0)
	}
	function F(e, t) {
		var n = arguments.length > 2 ? I(arguments, 2) : [];
		return !C(t) || t instanceof RegExp ? t : n.length ?
		function() {
			return arguments.length ? t.apply(e, n.concat(Tr.call(arguments, 0))) : t.apply(e, n)
		} : function() {
			return arguments.length ? t.apply(e, arguments) : t.call(e)
		}
	}
	function H(e, r) {
		var i = r;
		return "string" == typeof e && "$" === e.charAt(0) ? i = n : T(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : E(r) && (i = "$SCOPE"), i
	}
	function V(e, t) {
		return "undefined" == typeof e ? n : JSON.stringify(e, H, t ? "  " : null)
	}
	function W(e) {
		return b(e) ? JSON.parse(e) : e
	}
	function B(e) {
		if ("function" == typeof e) e = !0;
		else if (e && 0 !== e.length) {
			var t = vr("" + e);
			e = !("f" == t || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)
		} else e = !1;
		return e
	}
	function z(e) {
		e = wr(e).clone();
		try {
			e.empty()
		} catch (t) {}
		var n = 3,
			r = wr("<div>").append(e).html();
		try {
			return e[0].nodeType === n ? vr(r) : r.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
				return "<" + vr(t)
			})
		} catch (t) {
			return vr(r)
		}
	}
	function U(e) {
		try {
			return decodeURIComponent(e)
		} catch (t) {}
	}
	function Q(e) {
		var t, n, r = {};
		return o((e || "").split("&"), function(e) {
			if (e && (t = e.replace(/\+/g, "%20").split("="), n = U(t[0]), y(n))) {
				var i = y(t[1]) ? U(t[1]) : !0;
				gr.call(r, n) ? Dr(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
			}
		}), r
	}
	function X(e) {
		var t = [];
		return o(e, function(e, n) {
			Dr(e) ? o(e, function(e) {
				t.push(J(n, !0) + (e === !0 ? "" : "=" + J(e, !0)))
			}) : t.push(J(n, !0) + (e === !0 ? "" : "=" + J(e, !0)))
		}), t.length ? t.join("&") : ""
	}
	function Y(e) {
		return J(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
	}
	function J(e, t) {
		return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
	}
	function G(e, n) {
		function r(e) {
			e && s.push(e)
		}
		var i, a, s = [e],
			u = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
			l = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
		o(u, function(n) {
			u[n] = !0, r(t.getElementById(n)), n = n.replace(":", "\\:"), e.querySelectorAll && (o(e.querySelectorAll("." + n), r), o(e.querySelectorAll("." + n + "\\:"), r), o(e.querySelectorAll("[" + n + "]"), r))
		}), o(s, function(e) {
			if (!i) {
				var t = " " + e.className + " ",
					n = l.exec(t);
				n ? (i = e, a = (n[2] || "").replace(/\s+/g, ",")) : o(e.attributes, function(t) {
					!i && u[t.name] && (i = e, a = t.value)
				})
			}
		}), i && n(i, a ? [a] : [])
	}
	function K(n, r) {
		var i = function() {
				if (n = wr(n), n.injector()) {
					var e = n[0] === t ? "document" : z(n);
					throw kr("btstrpd", "App Already Bootstrapped with this Element '{0}'", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
				}
				r = r || [], r.unshift(["$provide", function(e) {
					e.value("$rootElement", n)
				}]), r.unshift("ng");
				var i = Ot(r);
				return i.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(e, t, n, r) {
					e.$apply(function() {
						t.data("$injector", r), n(t)(e)
					})
				}]), i
			},
			a = /^NG_DEFER_BOOTSTRAP!/;
		return e && !a.test(e.name) ? i() : (e.name = e.name.replace(a, ""), void(Nr.resumeBootstrap = function(e) {
			o(e, function(e) {
				r.push(e)
			}), i()
		}))
	}
	function Z(e, t) {
		return t = t || "_", e.replace(Pr, function(e, n) {
			return (n ? t : "") + e.toLowerCase()
		})
	}
	function et() {
		xr = e.jQuery, xr && xr.fn.on ? (wr = xr, f(xr.fn, {
			scope: Xr.scope,
			isolateScope: Xr.isolateScope,
			controller: Xr.controller,
			injector: Xr.injector,
			inheritedData: Xr.inheritedData
		}), ct("remove", !0, !0, !1), ct("empty", !1, !1, !1), ct("html", !1, !1, !0)) : wr = ht, Nr.element = wr
	}
	function tt(e, t, n) {
		if (!e) throw kr("areq", "Argument '{0}' is {1}", t || "?", n || "required");
		return e
	}
	function nt(e, t, n) {
		return n && Dr(e) && (e = e[e.length - 1]), tt(C(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
	}
	function rt(e, t) {
		if ("hasOwnProperty" === e) throw kr("badname", "hasOwnProperty is not a valid {0} name", t)
	}
	function it(e, t, n) {
		if (!t) return e;
		for (var r, i = t.split("."), o = e, a = i.length, s = 0; a > s; s++) r = i[s], e && (e = (o = e)[r]);
		return !n && C(e) ? F(o, e) : e
	}
	function ot(e) {
		var t = e[0],
			n = e[e.length - 1];
		if (t === n) return wr(t);
		var r = t,
			i = [r];
		do {
			if (r = r.nextSibling, !r) break;
			i.push(r)
		} while (r !== n);
		return wr(i)
	}
	function at(e) {
		function t(e, t, n) {
			return e[t] || (e[t] = n())
		}
		var n = r("$injector"),
			i = r("ng"),
			o = t(e, "angular", Object);
		return o.$$minErr = o.$$minErr || r, t(o, "module", function() {
			var e = {};
			return function(r, o, a) {
				var s = function(e, t) {
						if ("hasOwnProperty" === e) throw i("badname", "hasOwnProperty is not a valid {0} name", t)
					};
				return s(r, "module"), o && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function() {
					function e(e, n, r) {
						return function() {
							return t[r || "push"]([e, n, arguments]), u
						}
					}
					if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
					var t = [],
						i = [],
						s = e("$injector", "invoke"),
						u = {
							_invokeQueue: t,
							_runBlocks: i,
							requires: o,
							name: r,
							provider: e("$provide", "provider"),
							factory: e("$provide", "factory"),
							service: e("$provide", "service"),
							value: e("$provide", "value"),
							constant: e("$provide", "constant", "unshift"),
							animation: e("$animateProvider", "register"),
							filter: e("$filterProvider", "register"),
							controller: e("$controllerProvider", "register"),
							directive: e("$compileProvider", "directive"),
							config: s,
							run: function(e) {
								return i.push(e), this
							}
						};
					return a && s(a), u
				})
			}
		})
	}
	function st(t) {
		f(t, {
			bootstrap: K,
			copy: j,
			extend: f,
			equals: L,
			element: wr,
			forEach: o,
			injector: Ot,
			noop: h,
			bind: F,
			toJson: V,
			fromJson: W,
			identity: v,
			isUndefined: m,
			isDefined: y,
			isString: b,
			isFunction: C,
			isObject: $,
			isNumber: w,
			isElement: _,
			isArray: Dr,
			version: jr,
			isDate: x,
			lowercase: vr,
			uppercase: mr,
			callbacks: {
				counter: 0
			},
			$$minErr: r,
			$$csp: Or
		}), Cr = at(e);
		try {
			Cr("ngLocale")
		} catch (n) {
			Cr("ngLocale", []).provider("$locale", nn)
		}
		Cr("ng", ["ngLocale"], ["$provide", function(e) {
			e.provider({
				$$sanitizeUri: Dn
			}), e.provider("$compile", Ft).directive({
				a: Mi,
				input: Wi,
				textarea: Wi,
				form: Ri,
				script: Eo,
				select: No,
				style: Do,
				option: _o,
				ngBind: to,
				ngBindHtml: ro,
				ngBindTemplate: no,
				ngClass: io,
				ngClassEven: ao,
				ngClassOdd: oo,
				ngCloak: so,
				ngController: uo,
				ngForm: Li,
				ngHide: bo,
				ngIf: fo,
				ngInclude: po,
				ngInit: vo,
				ngNonBindable: go,
				ngPluralize: mo,
				ngRepeat: yo,
				ngShow: $o,
				ngStyle: wo,
				ngSwitch: xo,
				ngSwitchWhen: Co,
				ngSwitchDefault: So,
				ngOptions: ko,
				ngTransclude: To,
				ngModel: Yi,
				ngList: Ki,
				ngChange: Ji,
				required: Gi,
				ngRequired: Gi,
				ngValue: eo
			}).directive({
				ngInclude: ho
			}).directive(Oi).directive(lo), e.provider({
				$anchorScroll: Pt,
				$animate: ri,
				$browser: Lt,
				$cacheFactory: qt,
				$controller: Wt,
				$document: Bt,
				$exceptionHandler: zt,
				$filter: Vn,
				$interpolate: en,
				$interval: tn,
				$http: Jt,
				$httpBackend: Kt,
				$location: gn,
				$log: mn,
				$parse: En,
				$rootScope: _n,
				$q: An,
				$sce: Rn,
				$sceDelegate: jn,
				$sniffer: Ln,
				$templateCache: It,
				$timeout: qn,
				$window: Hn,
				$$rAF: Nn,
				$$asyncCallback: jt
			})
		}])
	}
	function ut() {
		return ++Lr
	}
	function lt(e) {
		return e.replace(Fr, function(e, t, n, r) {
			return r ? n.toUpperCase() : n
		}).replace(Hr, "Moz$1")
	}
	function ct(e, t, n, r) {
		function i(e) {
			var i, a, s, u, l, c, f, d = n && e ? [this.filter(e)] : [this],
				p = t;
			if (!r || null != e) for (; d.length;) for (i = d.shift(), a = 0, s = i.length; s > a; a++) for (u = wr(i[a]), p ? u.triggerHandler("$destroy") : p = !p, l = 0, c = (f = u.children()).length; c > l; l++) d.push(xr(f[l]));
			return o.apply(this, arguments)
		}
		var o = xr.fn[e];
		o = o.$original || o, i.$original = o, xr.fn[e] = i
	}
	function ft(e) {
		return !Br.test(e)
	}
	function dt(e, t) {
		var n, r, i, o, a, s, u = t.createDocumentFragment(),
			l = [];
		if (ft(e)) l.push(t.createTextNode(e));
		else {
			for (n = u.appendChild(t.createElement("div")), r = (zr.exec(e) || ["", ""])[1].toLowerCase(), i = Qr[r] || Qr._default, n.innerHTML = "<div>&#160;</div>" + i[1] + e.replace(Ur, "<$1></$2>") + i[2], n.removeChild(n.firstChild), o = i[0]; o--;) n = n.lastChild;
			for (a = 0, s = n.childNodes.length; s > a; ++a) l.push(n.childNodes[a]);
			n = u.firstChild, n.textContent = ""
		}
		return u.textContent = "", u.innerHTML = "", l
	}
	function pt(e, n) {
		n = n || t;
		var r;
		return (r = Wr.exec(e)) ? [n.createElement(r[1])] : dt(e, n)
	}
	function ht(e) {
		if (e instanceof ht) return e;
		if (b(e) && (e = Mr(e)), !(this instanceof ht)) {
			if (b(e) && "<" != e.charAt(0)) throw Vr("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
			return new ht(e)
		}
		if (b(e)) {
			St(this, pt(e));
			var n = wr(t.createDocumentFragment());
			n.append(this)
		} else St(this, e)
	}
	function vt(e) {
		return e.cloneNode(!0)
	}
	function gt(e) {
		yt(e);
		for (var t = 0, n = e.childNodes || []; t < n.length; t++) gt(n[t])
	}
	function mt(e, t, n, r) {
		if (y(r)) throw Vr("offargs", "jqLite#off() does not support the `selector` argument");
		var i = $t(e, "events"),
			a = $t(e, "handle");
		a && (m(t) ? o(i, function(t, n) {
			Ir(e, n, t), delete i[n]
		}) : o(t.split(" "), function(t) {
			m(n) ? (Ir(e, t, i[t]), delete i[t]) : P(i[t] || [], n)
		}))
	}
	function yt(e, t) {
		var r = e.ng339,
			i = Rr[r];
		if (i) {
			if (t) return void delete Rr[r].data[t];
			i.handle && (i.events.$destroy && i.handle({}, "$destroy"), mt(e)), delete Rr[r], e.ng339 = n
		}
	}
	function $t(e, t, n) {
		var r = e.ng339,
			i = Rr[r || -1];
		return y(n) ? (i || (e.ng339 = r = ut(), i = Rr[r] = {}), void(i[t] = n)) : i && i[t]
	}
	function bt(e, t, n) {
		var r = $t(e, "data"),
			i = y(n),
			o = !i && y(t),
			a = o && !$(t);
		if (r || a || $t(e, "data", r = {}), i) r[t] = n;
		else {
			if (!o) return r;
			if (a) return r && r[t];
			f(r, t)
		}
	}
	function wt(e, t) {
		return e.getAttribute ? (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1 : !1
	}
	function xt(e, t) {
		t && e.setAttribute && o(t.split(" "), function(t) {
			e.setAttribute("class", Mr((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Mr(t) + " ", " ")))
		})
	}
	function Ct(e, t) {
		if (t && e.setAttribute) {
			var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
			o(t.split(" "), function(e) {
				e = Mr(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
			}), e.setAttribute("class", Mr(n))
		}
	}
	function St(e, t) {
		if (t) {
			t = t.nodeName || !y(t.length) || T(t) ? [t] : t;
			for (var n = 0; n < t.length; n++) e.push(t[n])
		}
	}
	function Tt(e, t) {
		return Et(e, "$" + (t || "ngController") + "Controller")
	}
	function Et(e, t, r) {
		9 == e.nodeType && (e = e.documentElement);
		for (var i = Dr(t) ? t : [t]; e;) {
			for (var o = 0, a = i.length; a > o; o++) if ((r = wr.data(e, i[o])) !== n) return r;
			e = e.parentNode || 11 === e.nodeType && e.host
		}
	}
	function At(e) {
		for (var t = 0, n = e.childNodes; t < n.length; t++) gt(n[t]);
		for (; e.firstChild;) e.removeChild(e.firstChild)
	}
	function kt(e, t) {
		var n = Yr[t.toLowerCase()];
		return n && Jr[e.nodeName] && n
	}
	function Nt(e, n) {
		var r = function(r, i) {
				if (r.preventDefault || (r.preventDefault = function() {
					r.returnValue = !1
				}), r.stopPropagation || (r.stopPropagation = function() {
					r.cancelBubble = !0
				}), r.target || (r.target = r.srcElement || t), m(r.defaultPrevented)) {
					var a = r.preventDefault;
					r.preventDefault = function() {
						r.defaultPrevented = !0, a.call(r)
					}, r.defaultPrevented = !1
				}
				r.isDefaultPrevented = function() {
					return r.defaultPrevented || r.returnValue === !1
				};
				var s = R(n[i || r.type] || []);
				o(s, function(t) {
					t.call(e, r)
				}), 8 >= br ? (r.preventDefault = null, r.stopPropagation = null, r.isDefaultPrevented = null) : (delete r.preventDefault, delete r.stopPropagation, delete r.isDefaultPrevented)
			};
		return r.elem = e, r
	}
	function _t(e, t) {
		var r, i = typeof e;
		return "function" == i || "object" == i && null !== e ? "function" == typeof(r = e.$$hashKey) ? r = e.$$hashKey() : r === n && (r = e.$$hashKey = (t || l)()) : r = e, i + ":" + r
	}
	function Dt(e, t) {
		if (t) {
			var n = 0;
			this.nextUid = function() {
				return ++n
			}
		}
		o(e, this.put, this)
	}
	function Mt(e) {
		var t, n, r, i;
		return "function" == typeof e ? (t = e.$inject) || (t = [], e.length && (n = e.toString().replace(ei, ""), r = n.match(Gr), o(r[1].split(Kr), function(e) {
			e.replace(Zr, function(e, n, r) {
				t.push(r)
			})
		})), e.$inject = t) : Dr(e) ? (i = e.length - 1, nt(e[i], "fn"), t = e.slice(0, i)) : nt(e, "fn", !0), t
	}
	function Ot(e) {
		function t(e) {
			return function(t, n) {
				return $(t) ? void o(t, u(e)) : e(t, n)
			}
		}
		function n(e, t) {
			if (rt(e, "service"), (C(t) || Dr(t)) && (t = w.instantiate(t)), !t.$get) throw ti("pget", "Provider '{0}' must define $get factory method.", e);
			return y[e + p] = t
		}
		function r(e, t) {
			return n(e, {
				$get: t
			})
		}
		function i(e, t) {
			return r(e, ["$injector", function(e) {
				return e.instantiate(t)
			}])
		}
		function a(e, t) {
			return r(e, g(t))
		}
		function s(e, t) {
			rt(e, "constant"), y[e] = t, x[e] = t
		}
		function l(e, t) {
			var n = w.get(e + p),
				r = n.$get;
			n.$get = function() {
				var e = S.invoke(r, n);
				return S.invoke(t, null, {
					$delegate: e
				})
			}
		}
		function c(e) {
			var t, n, r, i, a = [];
			return o(e, function(e) {
				if (!m.get(e)) {
					m.put(e, !0);
					try {
						if (b(e)) for (t = Cr(e), a = a.concat(c(t.requires)).concat(t._runBlocks), n = t._invokeQueue, r = 0, i = n.length; i > r; r++) {
							var o = n[r],
								s = w.get(o[0]);
							s[o[1]].apply(s, o[2])
						} else C(e) ? a.push(w.invoke(e)) : Dr(e) ? a.push(w.invoke(e)) : nt(e, "module")
					} catch (u) {
						throw Dr(e) && (e = e[e.length - 1]), u.message && u.stack && -1 == u.stack.indexOf(u.message) && (u = u.message + "\n" + u.stack), ti("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, u.stack || u.message || u)
					}
				}
			}), a
		}
		function f(e, t) {
			function n(n) {
				if (e.hasOwnProperty(n)) {
					if (e[n] === d) throw ti("cdep", "Circular dependency found: {0}", n + " <- " + v.join(" <- "));
					return e[n]
				}
				try {
					return v.unshift(n), e[n] = d, e[n] = t(n)
				} catch (r) {
					throw e[n] === d && delete e[n], r
				} finally {
					v.shift()
				}
			}
			function r(e, t, r) {
				var i, o, a, s = [],
					u = Mt(e);
				for (o = 0, i = u.length; i > o; o++) {
					if (a = u[o], "string" != typeof a) throw ti("itkn", "Incorrect injection token! Expected service name as string, got {0}", a);
					s.push(r && r.hasOwnProperty(a) ? r[a] : n(a))
				}
				return Dr(e) && (e = e[i]), e.apply(t, s)
			}
			function i(e, t) {
				var n, i, o = function() {};
				return o.prototype = (Dr(e) ? e[e.length - 1] : e).prototype, n = new o, i = r(e, n, t), $(i) || C(i) ? i : n
			}
			return {
				invoke: r,
				instantiate: i,
				get: n,
				annotate: Mt,
				has: function(t) {
					return y.hasOwnProperty(t + p) || e.hasOwnProperty(t)
				}
			}
		}
		var d = {},
			p = "Provider",
			v = [],
			m = new Dt([], !0),
			y = {
				$provide: {
					provider: t(n),
					factory: t(r),
					service: t(i),
					value: t(a),
					constant: t(s),
					decorator: l
				}
			},
			w = y.$injector = f(y, function() {
				throw ti("unpr", "Unknown provider: {0}", v.join(" <- "))
			}),
			x = {},
			S = x.$injector = f(x, function(e) {
				var t = w.get(e + p);
				return S.invoke(t.$get, t)
			});
		return o(c(e), function(e) {
			S.invoke(e || h)
		}), S
	}
	function Pt() {
		var e = !0;
		this.disableAutoScrolling = function() {
			e = !1
		}, this.$get = ["$window", "$location", "$rootScope", function(t, n, r) {
			function i(e) {
				var t = null;
				return o(e, function(e) {
					t || "a" !== vr(e.nodeName) || (t = e)
				}), t
			}
			function a() {
				var e, r = n.hash();
				r ? (e = s.getElementById(r)) ? e.scrollIntoView() : (e = i(s.getElementsByName(r))) ? e.scrollIntoView() : "top" === r && t.scrollTo(0, 0) : t.scrollTo(0, 0)
			}
			var s = t.document;
			return e && r.$watch(function() {
				return n.hash()
			}, function() {
				r.$evalAsync(a)
			}), a
		}]
	}
	function jt() {
		this.$get = ["$$rAF", "$timeout", function(e, t) {
			return e.supported ?
			function(t) {
				return e(t)
			} : function(e) {
				return t(e, 0, !1)
			}
		}]
	}
	function Rt(e, t, r, i) {
		function a(e) {
			try {
				e.apply(null, I(arguments, 1))
			} finally {
				if (y--, 0 === y) for (; $.length;) try {
					$.pop()()
				} catch (t) {
					r.error(t)
				}
			}
		}
		function s(e, t) {
			!
			function n() {
				o(x, function(e) {
					e()
				}), w = t(n, e)
			}()
		}
		function u() {
			C != l.url() && (C = l.url(), o(E, function(e) {
				e(l.url())
			}))
		}
		var l = this,
			c = t[0],
			f = e.location,
			d = e.history,
			p = e.setTimeout,
			v = e.clearTimeout,
			g = {};
		l.isMock = !1;
		var y = 0,
			$ = [];
		l.$$completeOutstandingRequest = a, l.$$incOutstandingRequestCount = function() {
			y++
		}, l.notifyWhenNoOutstandingRequests = function(e) {
			o(x, function(e) {
				e()
			}), 0 === y ? e() : $.push(e)
		};
		var w, x = [];
		l.addPollFn = function(e) {
			return m(w) && s(100, p), x.push(e), e
		};
		var C = f.href,
			S = t.find("base"),
			T = null;
		l.url = function(t, n) {
			if (f !== e.location && (f = e.location), d !== e.history && (d = e.history), t) {
				if (C == t) return;
				var r = C && un(C) === un(t);
				return C = t, !r && i.history ? n ? d.replaceState(null, "", t) : (d.pushState(null, "", t), S.attr("href", S.attr("href"))) : (r || (T = t), n ? f.replace(t) : f.href = t), l
			}
			return T || f.href.replace(/%27/g, "'")
		};
		var E = [],
			A = !1;
		l.onUrlChange = function(t) {
			return A || (i.history && wr(e).on("popstate", u), i.hashchange ? wr(e).on("hashchange", u) : l.addPollFn(u), A = !0), E.push(t), t
		}, l.$$checkUrlChange = u, l.baseHref = function() {
			var e = S.attr("href");
			return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
		};
		var k = {},
			N = "",
			_ = l.baseHref();
		l.cookies = function(e, t) {
			var i, o, a, s, u;
			if (!e) {
				if (c.cookie !== N) for (N = c.cookie, o = N.split("; "), k = {}, s = 0; s < o.length; s++) a = o[s], u = a.indexOf("="), u > 0 && (e = unescape(a.substring(0, u)), k[e] === n && (k[e] = unescape(a.substring(u + 1))));
				return k
			}
			t === n ? c.cookie = escape(e) + "=;path=" + _ + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : b(t) && (i = (c.cookie = escape(e) + "=" + escape(t) + ";path=" + _).length + 1, i > 4096 && r.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
		}, l.defer = function(e, t) {
			var n;
			return y++, n = p(function() {
				delete g[n], a(e)
			}, t || 0), g[n] = !0, n
		}, l.defer.cancel = function(e) {
			return g[e] ? (delete g[e], v(e), a(h), !0) : !1
		}
	}
	function Lt() {
		this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
			return new Rt(e, r, t, n)
		}]
	}
	function qt() {
		this.$get = function() {
			function e(e, n) {
				function i(e) {
					e != d && (p ? p == e && (p = e.n) : p = e, o(e.n, e.p), o(e, d), d = e, d.n = null)
				}
				function o(e, t) {
					e != t && (e && (e.p = t), t && (t.n = e))
				}
				if (e in t) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
				var a = 0,
					s = f({}, n, {
						id: e
					}),
					u = {},
					l = n && n.capacity || Number.MAX_VALUE,
					c = {},
					d = null,
					p = null;
				return t[e] = {
					put: function(e, t) {
						if (l < Number.MAX_VALUE) {
							var n = c[e] || (c[e] = {
								key: e
							});
							i(n)
						}
						return m(t) ? void 0 : (e in u || a++, u[e] = t, a > l && this.remove(p.key), t)
					},
					get: function(e) {
						if (l < Number.MAX_VALUE) {
							var t = c[e];
							if (!t) return;
							i(t)
						}
						return u[e]
					},
					remove: function(e) {
						if (l < Number.MAX_VALUE) {
							var t = c[e];
							if (!t) return;
							t == d && (d = t.p), t == p && (p = t.n), o(t.n, t.p), delete c[e]
						}
						delete u[e], a--
					},
					removeAll: function() {
						u = {}, a = 0, c = {}, d = p = null
					},
					destroy: function() {
						u = null, s = null, c = null, delete t[e]
					},
					info: function() {
						return f({}, s, {
							size: a
						})
					}
				}
			}
			var t = {};
			return e.info = function() {
				var e = {};
				return o(t, function(t, n) {
					e[n] = t.info()
				}), e
			}, e.get = function(e) {
				return t[e]
			}, e
		}
	}
	function It() {
		this.$get = ["$cacheFactory", function(e) {
			return e("templates")
		}]
	}
	function Ft(e, r) {
		var i = {},
			a = "Directive",
			s = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
			l = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
			c = /^(on[a-z]+|formaction)$/;
		this.directive = function d(t, n) {
			return rt(t, "directive"), b(t) ? (tt(n, "directiveFactory"), i.hasOwnProperty(t) || (i[t] = [], e.factory(t + a, ["$injector", "$exceptionHandler", function(e, n) {
				var r = [];
				return o(i[t], function(i, o) {
					try {
						var a = e.invoke(i);
						C(a) ? a = {
							compile: g(a)
						} : !a.compile && a.link && (a.compile = g(a.link)), a.priority = a.priority || 0, a.index = o, a.name = a.name || t, a.require = a.require || a.controller && a.name, a.restrict = a.restrict || "A", r.push(a)
					} catch (s) {
						n(s)
					}
				}), r
			}])), i[t].push(n)) : o(t, u(d)), this
		}, this.aHrefSanitizationWhitelist = function(e) {
			return y(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
		}, this.imgSrcSanitizationWhitelist = function(e) {
			return y(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
		}, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(e, r, u, d, h, g, m, y, w, x, S, T) {
			function E(e, t, n, r, i) {
				e instanceof wr || (e = wr(e)), o(e, function(t, n) {
					3 == t.nodeType && t.nodeValue.match(/\S+/) && (e[n] = t = wr(t).wrap("<span></span>").parent()[0])
				});
				var a = k(e, t, e, n, r, i);
				return A(e, "ng-scope"), function(t, n, r, i) {
					tt(t, "scope");
					var s = n ? Xr.clone.call(e) : e;
					o(r, function(e, t) {
						s.data("$" + t + "Controller", e)
					});
					for (var u = 0, l = s.length; l > u; u++) {
						var c = s[u],
							f = c.nodeType;
						(1 === f || 9 === f) && s.eq(u).data("$scope", t)
					}
					return n && n(s, t), a && a(t, s, s, i), s
				}
			}
			function A(e, t) {
				try {
					e.addClass(t)
				} catch (n) {}
			}
			function k(e, t, r, i, o, a) {
				function s(e, r, i, o) {
					var a, s, u, l, c, f, d, p, v = r.length,
						g = new Array(v);
					for (c = 0; v > c; c++) g[c] = r[c];
					for (c = 0, d = 0, f = h.length; f > c; d++) u = g[d], a = h[c++], s = h[c++], a ? (a.scope ? (l = e.$new(), wr.data(u, "$scope", l)) : l = e, p = a.transcludeOnThisElement ? N(e, a.transclude, o) : !a.templateOnThisElement && o ? o : !o && t ? N(e, t) : null, a(s, l, u, i, p)) : s && s(e, u.childNodes, n, o)
				}
				for (var u, l, c, f, d, p, h = [], v = 0; v < e.length; v++) u = new Y, l = _(e[v], [], u, 0 === v ? i : n, o), c = l.length ? O(l, e[v], u, t, r, null, [], [], a) : null, c && c.scope && A(u.$$element, "ng-scope"), d = c && c.terminal || !(f = e[v].childNodes) || !f.length ? null : k(f, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : t), h.push(c, d), p = p || c || d, a = null;
				return p ? s : null
			}
			function N(e, t, n) {
				var r = function(r, i, o) {
						var a = !1;
						r || (r = e.$new(), r.$$transcluded = !0, a = !0);
						var s = t(r, i, o, n);
						return a && s.on("$destroy", function() {
							r.$destroy()
						}), s
					};
				return r
			}
			function _(e, t, n, r, i) {
				var o, a, u = e.nodeType,
					c = n.$attr;
				switch (u) {
				case 1:
					j(t, Ht(Sr(e).toLowerCase()), "E", r, i);
					for (var f, d, p, h, v, g, m = e.attributes, y = 0, $ = m && m.length; $ > y; y++) {
						var w = !1,
							x = !1;
						if (f = m[y], !br || br >= 8 || f.specified) {
							d = f.name, v = Mr(f.value), h = Ht(d), (g = et.test(h)) && (d = Z(h.substr(6), "-"));
							var C = h.replace(/(Start|End)$/, "");
							h === C + "Start" && (w = d, x = d.substr(0, d.length - 5) + "end", d = d.substr(0, d.length - 6)), p = Ht(d.toLowerCase()), c[p] = d, (g || !n.hasOwnProperty(p)) && (n[p] = v, kt(e, p) && (n[p] = !0)), U(e, t, v, p), j(t, p, "A", r, i, w, x)
						}
					}
					if (a = e.className, b(a) && "" !== a) for (; o = l.exec(a);) p = Ht(o[2]), j(t, p, "C", r, i) && (n[p] = Mr(o[3])), a = a.substr(o.index + o[0].length);
					break;
				case 3:
					W(t, e.nodeValue);
					break;
				case 8:
					try {
						o = s.exec(e.nodeValue), o && (p = Ht(o[1]), j(t, p, "M", r, i) && (n[p] = Mr(o[2])))
					} catch (S) {}
				}
				return t.sort(H), t
			}
			function D(e, t, n) {
				var r = [],
					i = 0;
				if (t && e.hasAttribute && e.hasAttribute(t)) {
					do {
						if (!e) throw ii("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
						1 == e.nodeType && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
					} while (i > 0)
				} else r.push(e);
				return wr(r)
			}
			function M(e, t, n) {
				return function(r, i, o, a, s) {
					return i = D(i[0], t, n), e(r, i, o, a, s)
				}
			}
			function O(e, i, a, s, l, c, f, d, p) {
				function h(e, t, n, r) {
					e && (n && (e = M(e, n, r)), e.require = x.require, e.directiveName = S, (H === x || x.$$isolateScope) && (e = X(e, {
						isolateScope: !0
					})), f.push(e)), t && (n && (t = M(t, n, r)), t.require = x.require, t.directiveName = S, (H === x || x.$$isolateScope) && (t = X(t, {
						isolateScope: !0
					})), d.push(t))
				}
				function v(e, t, n, r) {
					var i, a = "data",
						s = !1;
					if (b(t)) {
						for (;
						"^" == (i = t.charAt(0)) || "?" == i;) t = t.substr(1), "^" == i && (a = "inheritedData"), s = s || "?" == i;
						if (i = null, r && "data" === a && (i = r[t]), i = i || n[a]("$" + t + "Controller"), !i && !s) throw ii("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", t, e);
						return i
					}
					return Dr(t) && (i = [], o(t, function(t) {
						i.push(v(e, t, n, r))
					})), i
				}
				function y(e, t, s, l, c) {
					function p(e, t) {
						var r;
						return arguments.length < 2 && (t = e, e = n), G && (r = T), c(e, t, r)
					}
					var h, y, $, b, w, x, C, S, T = {};
					if (h = i === s ? a : R(a, new Y(wr(s), a.$attr)), y = h.$$element, H) {
						var E = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
						C = t.$new(!0), !W || W !== H && W !== H.$$originalDirective ? y.data("$isolateScopeNoTemplate", C) : y.data("$isolateScope", C), A(y, "ng-isolate-scope"), o(H.scope, function(e, n) {
							var i, o, a, s, u = e.match(E) || [],
								l = u[3] || n,
								c = "?" == u[2],
								f = u[1];
							switch (C.$$isolateBindings[n] = f + l, f) {
							case "@":
								h.$observe(l, function(e) {
									C[n] = e
								}), h.$$observers[l].$$scope = t, h[l] && (C[n] = r(h[l])(t));
								break;
							case "=":
								if (c && !h[l]) return;
								o = g(h[l]), s = o.literal ? L : function(e, t) {
									return e === t || e !== e && t !== t
								}, a = o.assign ||
								function() {
									throw i = C[n] = o(t), ii("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", h[l], H.name)
								}, i = C[n] = o(t), C.$watch(function() {
									var e = o(t);
									return s(e, C[n]) || (s(e, i) ? a(t, e = C[n]) : C[n] = e), i = e
								}, null, o.literal);
								break;
							case "&":
								o = g(h[l]), C[n] = function(e) {
									return o(t, e)
								};
								break;
							default:
								throw ii("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", H.name, n, e)
							}
						})
					}
					for (S = c && p, j && o(j, function(e) {
						var n, r = {
							$scope: e === H || e.$$isolateScope ? C : t,
							$element: y,
							$attrs: h,
							$transclude: S
						};
						x = e.controller, "@" == x && (x = h[e.name]), n = m(x, r), T[e.name] = n, G || y.data("$" + e.name + "Controller", n), e.controllerAs && (r.$scope[e.controllerAs] = n)
					}), $ = 0, b = f.length; b > $; $++) try {
						(w = f[$])(w.isolateScope ? C : t, y, h, w.require && v(w.directiveName, w.require, y, T), S)
					} catch (k) {
						u(k, z(y))
					}
					var N = t;
					for (H && (H.template || null === H.templateUrl) && (N = C), e && e(N, s.childNodes, n, c), $ = d.length - 1; $ >= 0; $--) try {
						(w = d[$])(w.isolateScope ? C : t, y, h, w.require && v(w.directiveName, w.require, y, T), S)
					} catch (k) {
						u(k, z(y))
					}
				}
				p = p || {};
				for (var w, x, S, T, k, N, O = -Number.MAX_VALUE, j = p.controllerDirectives, H = p.newIsolateScopeDirective, W = p.templateDirective, B = p.nonTlbTranscludeDirective, U = !1, J = !1, G = p.hasElementTranscludeDirective, Z = a.$$element = wr(i), et = c, tt = s, nt = 0, rt = e.length; rt > nt; nt++) {
					x = e[nt];
					var it = x.$$start,
						ot = x.$$end;
					if (it && (Z = D(i, it, ot)), T = n, O > x.priority) break;
					if ((N = x.scope) && (w = w || x, x.templateUrl || (V("new/isolated scope", H, x, Z), $(N) && (H = x))), S = x.name, !x.templateUrl && x.controller && (N = x.controller, j = j || {}, V("'" + S + "' controller", j[S], x, Z), j[S] = x), (N = x.transclude) && (U = !0, x.$$tlb || (V("transclusion", B, x, Z), B = x), "element" == N ? (G = !0, O = x.priority, T = Z, Z = a.$$element = wr(t.createComment(" " + S + ": " + a[S] + " ")), i = Z[0], Q(l, I(T), i), tt = E(T, s, O, et && et.name, {
						nonTlbTranscludeDirective: B
					})) : (T = wr(vt(i)).contents(), Z.empty(), tt = E(T, s))), x.template) if (J = !0, V("template", W, x, Z), W = x, N = C(x.template) ? x.template(Z, a) : x.template, N = K(N), x.replace) {
						if (et = x, T = ft(N) ? [] : wr(Mr(N)), i = T[0], 1 != T.length || 1 !== i.nodeType) throw ii("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", S, "");
						Q(l, Z, i);
						var at = {
							$attr: {}
						},
							st = _(i, [], at),
							ut = e.splice(nt + 1, e.length - (nt + 1));
						H && P(st), e = e.concat(st).concat(ut), q(a, at), rt = e.length
					} else Z.html(N);
					if (x.templateUrl) J = !0, V("template", W, x, Z), W = x, x.replace && (et = x), y = F(e.splice(nt, e.length - nt), Z, a, l, U && tt, f, d, {
						controllerDirectives: j,
						newIsolateScopeDirective: H,
						templateDirective: W,
						nonTlbTranscludeDirective: B
					}), rt = e.length;
					else if (x.compile) try {
						k = x.compile(Z, a, tt), C(k) ? h(null, k, it, ot) : k && h(k.pre, k.post, it, ot)
					} catch (lt) {
						u(lt, z(Z))
					}
					x.terminal && (y.terminal = !0, O = Math.max(O, x.priority))
				}
				return y.scope = w && w.scope === !0, y.transcludeOnThisElement = U, y.templateOnThisElement = J, y.transclude = tt, p.hasElementTranscludeDirective = G, y
			}
			function P(e) {
				for (var t = 0, n = e.length; n > t; t++) e[t] = p(e[t], {
					$$isolateScope: !0
				})
			}
			function j(t, r, o, s, l, c, f) {
				if (r === l) return null;
				var d = null;
				if (i.hasOwnProperty(r)) for (var h, v = e.get(r + a), g = 0, m = v.length; m > g; g++) try {
					h = v[g], (s === n || s > h.priority) && -1 != h.restrict.indexOf(o) && (c && (h = p(h, {
						$$start: c,
						$$end: f
					})), t.push(h), d = h)
				} catch (y) {
					u(y)
				}
				return d
			}
			function q(e, t) {
				var n = t.$attr,
					r = e.$attr,
					i = e.$$element;
				o(e, function(r, i) {
					"$" != i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
				}), o(t, function(t, o) {
					"class" == o ? (A(i, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == o ? (i.attr("style", i.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == o.charAt(0) || e.hasOwnProperty(o) || (e[o] = t, r[o] = n[o])
				})
			}
			function F(e, t, n, r, i, a, s, u) {
				var l, c, p = [],
					v = t[0],
					g = e.shift(),
					m = f({}, g, {
						templateUrl: null,
						transclude: null,
						replace: null,
						$$originalDirective: g
					}),
					y = C(g.templateUrl) ? g.templateUrl(t, n) : g.templateUrl;
				return t.empty(), d.get(x.getTrustedResourceUrl(y), {
					cache: h
				}).success(function(f) {
					var d, h, b, w;
					if (f = K(f), g.replace) {
						if (b = ft(f) ? [] : wr(Mr(f)), d = b[0], 1 != b.length || 1 !== d.nodeType) throw ii("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g.name, y);
						h = {
							$attr: {}
						}, Q(r, t, d);
						var x = _(d, [], h);
						$(g.scope) && P(x), e = x.concat(e), q(n, h)
					} else d = v, t.html(f);
					for (e.unshift(m), l = O(e, d, n, i, t, g, a, s, u), o(r, function(e, n) {
						e == d && (r[n] = t[0])
					}), c = k(t[0].childNodes, i); p.length;) {
						var C = p.shift(),
							S = p.shift(),
							T = p.shift(),
							E = p.shift(),
							D = t[0];
						if (S !== v) {
							var M = S.className;
							u.hasElementTranscludeDirective && g.replace || (D = vt(d)), Q(T, wr(S), D), A(wr(D), M)
						}
						w = l.transcludeOnThisElement ? N(C, l.transclude, E) : E, l(c, C, D, r, w)
					}
					p = null
				}).error(function(e, t, n, r) {
					throw ii("tpload", "Failed to load template: {0}", r.url)
				}), function(e, t, n, r, i) {
					var o = i;
					p ? (p.push(t), p.push(n), p.push(r), p.push(o)) : (l.transcludeOnThisElement && (o = N(t, l.transclude, i)), l(c, t, n, r, o))
				}
			}
			function H(e, t) {
				var n = t.priority - e.priority;
				return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
			}
			function V(e, t, n, r) {
				if (t) throw ii("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", t.name, n.name, e, z(r))
			}
			function W(e, t) {
				var n = r(t, !0);
				n && e.push({
					priority: 0,
					compile: function(e) {
						var t = e.parent(),
							r = t.length;
						return r && A(e.parent(), "ng-binding"), function(e, t) {
							var i = t.parent(),
								o = i.data("$binding") || [];
							o.push(n), i.data("$binding", o), r || A(i, "ng-binding"), e.$watch(n, function(e) {
								t[0].nodeValue = e
							})
						}
					}
				})
			}
			function B(e, t) {
				if ("srcdoc" == t) return x.HTML;
				var n = Sr(e);
				return "xlinkHref" == t || "FORM" == n && "action" == t || "IMG" != n && ("src" == t || "ngSrc" == t) ? x.RESOURCE_URL : void 0
			}
			function U(e, t, n, i) {
				var o = r(n, !0);
				if (o) {
					if ("multiple" === i && "SELECT" === Sr(e)) throw ii("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", z(e));
					t.push({
						priority: 100,
						compile: function() {
							return {
								pre: function(t, n, a) {
									var s = a.$$observers || (a.$$observers = {});
									if (c.test(i)) throw ii("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
									o = r(a[i], !0, B(e, i)), o && (a[i] = o(t), (s[i] || (s[i] = [])).$$inter = !0, (a.$$observers && a.$$observers[i].$$scope || t).$watch(o, function(e, t) {
										"class" === i && e != t ? a.$updateClass(e, t) : a.$set(i, e)
									}))
								}
							}
						}
					})
				}
			}
			function Q(e, n, r) {
				var i, o, a = n[0],
					s = n.length,
					u = a.parentNode;
				if (e) for (i = 0, o = e.length; o > i; i++) if (e[i] == a) {
					e[i++] = r;
					for (var l = i, c = l + s - 1, f = e.length; f > l; l++, c++) f > c ? e[l] = e[c] : delete e[l];
					e.length -= s - 1;
					break
				}
				u && u.replaceChild(r, a);
				var d = t.createDocumentFragment();
				d.appendChild(a), r[wr.expando] = a[wr.expando];
				for (var p = 1, h = n.length; h > p; p++) {
					var v = n[p];
					wr(v).remove(), d.appendChild(v), delete n[p]
				}
				n[0] = r, n.length = 1
			}
			function X(e, t) {
				return f(function() {
					return e.apply(null, arguments)
				}, e, t)
			}
			var Y = function(e, t) {
					this.$$element = e, this.$attr = t || {}
				};
			Y.prototype = {
				$normalize: Ht,
				$addClass: function(e) {
					e && e.length > 0 && S.addClass(this.$$element, e)
				},
				$removeClass: function(e) {
					e && e.length > 0 && S.removeClass(this.$$element, e)
				},
				$updateClass: function(e, t) {
					var n = Vt(e, t),
						r = Vt(t, e);
					0 === n.length ? S.removeClass(this.$$element, r) : 0 === r.length ? S.addClass(this.$$element, n) : S.setClass(this.$$element, n, r)
				},
				$set: function(e, t, r, i) {
					var a, s = kt(this.$$element[0], e);
					s && (this.$$element.prop(e, t), i = s), this[e] = t, i ? this.$attr[e] = i : (i = this.$attr[e], i || (this.$attr[e] = i = Z(e, "-"))), a = Sr(this.$$element), ("A" === a && "href" === e || "IMG" === a && "src" === e) && (this[e] = t = T(t, "src" === e)), r !== !1 && (null === t || t === n ? this.$$element.removeAttr(i) : this.$$element.attr(i, t));
					var l = this.$$observers;
					l && o(l[e], function(e) {
						try {
							e(t)
						} catch (n) {
							u(n)
						}
					})
				},
				$observe: function(e, t) {
					var n = this,
						r = n.$$observers || (n.$$observers = {}),
						i = r[e] || (r[e] = []);
					return i.push(t), y.$evalAsync(function() {
						i.$$inter || t(n[e])
					}), t
				}
			};
			var J = r.startSymbol(),
				G = r.endSymbol(),
				K = "{{" == J || "}}" == G ? v : function(e) {
					return e.replace(/\{\{/g, J).replace(/}}/g, G)
				},
				et = /^ngAttr[A-Z]/;
			return E
		}]
	}
	function Ht(e) {
		return lt(e.replace(oi, ""))
	}
	function Vt(e, t) {
		var n = "",
			r = e.split(/\s+/),
			i = t.split(/\s+/);
		e: for (var o = 0; o < r.length; o++) {
			for (var a = r[o], s = 0; s < i.length; s++) if (a == i[s]) continue e;
			n += (n.length > 0 ? " " : "") + a
		}
		return n
	}
	function Wt() {
		var e = {},
			t = /^(\S+)(\s+as\s+(\w+))?$/;
		this.register = function(t, n) {
			rt(t, "controller"), $(t) ? f(e, t) : e[t] = n
		}, this.$get = ["$injector", "$window", function(n, i) {
			return function(o, a) {
				var s, u, l, c;
				if (b(o) && (u = o.match(t), l = u[1], c = u[3], o = e.hasOwnProperty(l) ? e[l] : it(a.$scope, l, !0) || it(i, l, !0), nt(o, l, !0)), s = n.instantiate(o, a), c) {
					if (!a || "object" != typeof a.$scope) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", l || o.name, c);
					a.$scope[c] = s
				}
				return s
			}
		}]
	}
	function Bt() {
		this.$get = ["$window", function(e) {
			return wr(e.document)
		}]
	}
	function zt() {
		this.$get = ["$log", function(e) {
			return function() {
				e.error.apply(e, arguments)
			}
		}]
	}
	function Ut(e) {
		var t, n, r, i = {};
		return e ? (o(e.split("\n"), function(e) {
			r = e.indexOf(":"), t = vr(Mr(e.substr(0, r))), n = Mr(e.substr(r + 1)), t && (i[t] = i[t] ? i[t] + ", " + n : n)
		}), i) : i
	}
	function Qt(e) {
		var t = $(e) ? e : n;
		return function(n) {
			return t || (t = Ut(e)), n ? t[vr(n)] || null : t
		}
	}
	function Xt(e, t, n) {
		return C(n) ? n(e, t) : (o(n, function(n) {
			e = n(e, t)
		}), e)
	}
	function Yt(e) {
		return e >= 200 && 300 > e
	}
	function Jt() {
		var e = /^\s*(\[|\{[^\{])/,
			t = /[\}\]]\s*$/,
			r = /^\)\]\}',?\n/,
			i = {
				"Content-Type": "application/json;charset=utf-8"
			},
			a = this.defaults = {
				transformResponse: [function(n) {
					return b(n) && (n = n.replace(r, ""), e.test(n) && t.test(n) && (n = W(n))), n
				}],
				transformRequest: [function(e) {
					return !$(e) || A(e) || k(e) ? e : V(e)
				}],
				headers: {
					common: {
						Accept: "application/json, text/plain, */*"
					},
					post: R(i),
					put: R(i),
					patch: R(i)
				},
				xsrfCookieName: "XSRF-TOKEN",
				xsrfHeaderName: "X-XSRF-TOKEN"
			},
			u = this.interceptors = [],
			l = this.responseInterceptors = [];
		this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(e, t, r, i, c, d) {
			function p(e) {
				function t(e) {
					var t = f({}, e, {
						data: Xt(e.data, e.headers, i.transformResponse)
					});
					return Yt(e.status) ? t : c.reject(t)
				}
				function r(e) {
					function t(e) {
						var t;
						o(e, function(n, r) {
							C(n) && (t = n(), null != t ? e[r] = t : delete e[r])
						})
					}
					var n, r, i, s = a.headers,
						u = f({}, e.headers);
					s = f({}, s.common, s[vr(e.method)]);
					e: for (n in s) {
						r = vr(n);
						for (i in u) if (vr(i) === r) continue e;
						u[n] = s[n]
					}
					return t(u),
					u
				}
				var i = {
					method: "get",
					transformRequest: a.transformRequest,
					transformResponse: a.transformResponse
				},
					s = r(e);
				f(i, e), i.headers = s, i.method = mr(i.method);
				var u = function(e) {
						s = e.headers;
						var n = Xt(e.data, Qt(s), e.transformRequest);
						return m(n) && o(s, function(e, t) {
							"content-type" === vr(t) && delete s[t]
						}), m(e.withCredentials) && !m(a.withCredentials) && (e.withCredentials = a.withCredentials), g(e, n, s).then(t, t)
					},
					l = [u, n],
					d = c.when(i);
				for (o(T, function(e) {
					(e.request || e.requestError) && l.unshift(e.request, e.requestError), (e.response || e.responseError) && l.push(e.response, e.responseError)
				}); l.length;) {
					var p = l.shift(),
						h = l.shift();
					d = d.then(p, h)
				}
				return d.success = function(e) {
					return d.then(function(t) {
						e(t.data, t.status, t.headers, i)
					}), d
				}, d.error = function(e) {
					return d.then(null, function(t) {
						e(t.data, t.status, t.headers, i)
					}), d
				}, d
			}
			function h() {
				o(arguments, function(e) {
					p[e] = function(t, n) {
						return p(f(n || {}, {
							method: e,
							url: t
						}))
					}
				})
			}
			function v() {
				o(arguments, function(e) {
					p[e] = function(t, n, r) {
						return p(f(r || {}, {
							method: e,
							url: t,
							data: n
						}))
					}
				})
			}
			function g(r, o, s) {
				function u(e, t, n, r) {
					d && (Yt(e) ? d.put(b, [e, t, Ut(n), r]) : d.remove(b)), l(t, e, n, r), i.$$phase || i.$apply()
				}
				function l(e, t, n, i) {
					t = Math.max(t, 0), (Yt(t) ? v.resolve : v.reject)({
						data: e,
						status: t,
						headers: Qt(n),
						config: r,
						statusText: i
					})
				}
				function f() {
					var e = O(p.pendingRequests, r); - 1 !== e && p.pendingRequests.splice(e, 1)
				}
				var d, h, v = c.defer(),
					g = v.promise,
					b = w(r.url, r.params);
				if (p.pendingRequests.push(r), g.then(f, f), !r.cache && !a.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (d = $(r.cache) ? r.cache : $(a.cache) ? a.cache : S), d) if (h = d.get(b), y(h)) {
					if (N(h)) return h.then(f, f), h;
					Dr(h) ? l(h[1], h[0], R(h[2]), h[3]) : l(h, 200, {}, "OK")
				} else d.put(b, g);
				if (m(h)) {
					var x = Fn(r.url) ? t.cookies()[r.xsrfCookieName || a.xsrfCookieName] : n;
					x && (s[r.xsrfHeaderName || a.xsrfHeaderName] = x), e(r.method, b, o, u, s, r.timeout, r.withCredentials, r.responseType)
				}
				return g
			}
			function w(e, t) {
				if (!t) return e;
				var n = [];
				return s(t, function(e, t) {
					null === e || m(e) || (Dr(e) || (e = [e]), o(e, function(e) {
						$(e) && (e = x(e) ? e.toISOString() : V(e)), n.push(J(t) + "=" + J(e))
					}))
				}), n.length > 0 && (e += (-1 == e.indexOf("?") ? "?" : "&") + n.join("&")), e
			}
			var S = r("$http"),
				T = [];
			return o(u, function(e) {
				T.unshift(b(e) ? d.get(e) : d.invoke(e))
			}), o(l, function(e, t) {
				var n = b(e) ? d.get(e) : d.invoke(e);
				T.splice(t, 0, {
					response: function(e) {
						return n(c.when(e))
					},
					responseError: function(e) {
						return n(c.reject(e))
					}
				})
			}), p.pendingRequests = [], h("get", "delete", "head", "jsonp"), v("post", "put", "patch"), p.defaults = a, p
		}]
	}
	function Gt(t) {
		if (8 >= br && (!t.match(/^(get|post|head|put|delete|options)$/i) || !e.XMLHttpRequest)) return new e.ActiveXObject("Microsoft.XMLHTTP");
		if (e.XMLHttpRequest) return new e.XMLHttpRequest;
		throw r("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
	}
	function Kt() {
		this.$get = ["$browser", "$window", "$document", function(e, t, n) {
			return Zt(e, Gt, e.defer, t.angular.callbacks, n[0])
		}]
	}
	function Zt(e, t, n, r, i) {
		function a(e, t, n) {
			var o = i.createElement("script"),
				a = null;
			return o.type = "text/javascript", o.src = e, o.async = !0, a = function(e) {
				Ir(o, "load", a), Ir(o, "error", a), i.body.removeChild(o), o = null;
				var s = -1,
					u = "unknown";
				e && ("load" !== e.type || r[t].called || (e = {
					type: "error"
				}), u = e.type, s = "error" === e.type ? 404 : 200), n && n(s, u)
			}, qr(o, "load", a), qr(o, "error", a), 8 >= br && (o.onreadystatechange = function() {
				b(o.readyState) && /loaded|complete/.test(o.readyState) && (o.onreadystatechange = null, a({
					type: "load"
				}))
			}), i.body.appendChild(o), a
		}
		var s = -1;
		return function(i, u, l, c, f, d, p, v) {
			function g() {
				$ = s, w && w(), x && x.abort()
			}
			function m(t, r, i, o, a) {
				S && n.cancel(S), w = x = null, 0 === r && (r = i ? 200 : "file" == In(u).protocol ? 404 : 0), r = 1223 === r ? 204 : r, a = a || "", t(r, i, o, a), e.$$completeOutstandingRequest(h)
			}
			var $;
			if (e.$$incOutstandingRequestCount(), u = u || e.url(), "jsonp" == vr(i)) {
				var b = "_" + (r.counter++).toString(36);
				r[b] = function(e) {
					r[b].data = e, r[b].called = !0
				};
				var w = a(u.replace("JSON_CALLBACK", "angular.callbacks." + b), b, function(e, t) {
					m(c, e, r[b].data, "", t), r[b] = h
				})
			} else {
				var x = t(i);
				if (x.open(i, u, !0), o(f, function(e, t) {
					y(e) && x.setRequestHeader(t, e)
				}), x.onreadystatechange = function() {
					if (x && 4 == x.readyState) {
						var e = null,
							t = null,
							n = "";
						$ !== s && (e = x.getAllResponseHeaders(), t = "response" in x ? x.response : x.responseText), $ === s && 10 > br || (n = x.statusText), m(c, $ || x.status, t, e, n)
					}
				}, p && (x.withCredentials = !0), v) try {
					x.responseType = v
				} catch (C) {
					if ("json" !== v) throw C
				}
				x.send(l || null)
			}
			if (d > 0) var S = n(g, d);
			else N(d) && d.then(g)
		}
	}
	function en() {
		var e = "{{",
			t = "}}";
		this.startSymbol = function(t) {
			return t ? (e = t, this) : e
		}, this.endSymbol = function(e) {
			return e ? (t = e, this) : t
		}, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
			function o(o, u, l) {
				for (var c, f, d, p, h = 0, v = [], g = o.length, m = !1, y = []; g > h;) - 1 != (c = o.indexOf(e, h)) && -1 != (f = o.indexOf(t, c + a)) ? (h != c && v.push(o.substring(h, c)), v.push(d = n(p = o.substring(c + a, f))), d.exp = p, h = f + s, m = !0) : (h != g && v.push(o.substring(h)), h = g);
				if ((g = v.length) || (v.push(""), g = 1), l && v.length > 1) throw ai("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
				return !u || m ? (y.length = g, d = function(e) {
					try {
						for (var t, n = 0, a = g; a > n; n++) {
							if ("function" == typeof(t = v[n])) if (t = t(e), t = l ? i.getTrusted(l, t) : i.valueOf(t), null == t) t = "";
							else switch (typeof t) {
							case "string":
								break;
							case "number":
								t = "" + t;
								break;
							default:
								t = V(t)
							}
							y[n] = t
						}
						return y.join("")
					} catch (s) {
						var u = ai("interr", "Can't interpolate: {0}\n{1}", o, s.toString());
						r(u)
					}
				}, d.exp = o, d.parts = v, d) : void 0
			}
			var a = e.length,
				s = t.length;
			return o.startSymbol = function() {
				return e
			}, o.endSymbol = function() {
				return t
			}, o
		}]
	}
	function tn() {
		this.$get = ["$rootScope", "$window", "$q", function(e, t, n) {
			function r(r, o, a, s) {
				var u = t.setInterval,
					l = t.clearInterval,
					c = n.defer(),
					f = c.promise,
					d = 0,
					p = y(s) && !s;
				return a = y(a) ? a : 0, f.then(null, null, r), f.$$intervalId = u(function() {
					c.notify(d++), a > 0 && d >= a && (c.resolve(d), l(f.$$intervalId), delete i[f.$$intervalId]), p || e.$apply()
				}, o), i[f.$$intervalId] = c, f
			}
			var i = {};
			return r.cancel = function(e) {
				return e && e.$$intervalId in i ? (i[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete i[e.$$intervalId], !0) : !1
			}, r
		}]
	}
	function nn() {
		this.$get = function() {
			return {
				id: "en-us",
				NUMBER_FORMATS: {
					DECIMAL_SEP: ".",
					GROUP_SEP: ",",
					PATTERNS: [{
						minInt: 1,
						minFrac: 0,
						maxFrac: 3,
						posPre: "",
						posSuf: "",
						negPre: "-",
						negSuf: "",
						gSize: 3,
						lgSize: 3
					}, {
						minInt: 1,
						minFrac: 2,
						maxFrac: 2,
						posPre: "¤",
						posSuf: "",
						negPre: "(¤",
						negSuf: ")",
						gSize: 3,
						lgSize: 3
					}],
					CURRENCY_SYM: "$"
				},
				DATETIME_FORMATS: {
					MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
					SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
					DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
					SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
					AMPMS: ["AM", "PM"],
					medium: "MMM d, y h:mm:ss a",
					"short": "M/d/yy h:mm a",
					fullDate: "EEEE, MMMM d, y",
					longDate: "MMMM d, y",
					mediumDate: "MMM d, y",
					shortDate: "M/d/yy",
					mediumTime: "h:mm:ss a",
					shortTime: "h:mm a"
				},
				pluralCat: function(e) {
					return 1 === e ? "one" : "other"
				}
			}
		}
	}
	function rn(e) {
		for (var t = e.split("/"), n = t.length; n--;) t[n] = Y(t[n]);
		return t.join("/")
	}
	function on(e, t, n) {
		var r = In(e, n);
		t.$$protocol = r.protocol, t.$$host = r.hostname, t.$$port = d(r.port) || ui[r.protocol] || null
	}
	function an(e, t, n) {
		var r = "/" !== e.charAt(0);
		r && (e = "/" + e);
		var i = In(e, n);
		t.$$path = decodeURIComponent(r && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname), t.$$search = Q(i.search), t.$$hash = decodeURIComponent(i.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
	}
	function sn(e, t) {
		return 0 === t.indexOf(e) ? t.substr(e.length) : void 0
	}
	function un(e) {
		var t = e.indexOf("#");
		return -1 == t ? e : e.substr(0, t)
	}
	function ln(e) {
		return e.substr(0, un(e).lastIndexOf("/") + 1)
	}
	function cn(e) {
		return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
	}
	function fn(e, t) {
		this.$$html5 = !0, t = t || "";
		var r = ln(e);
		on(e, this, e), this.$$parse = function(t) {
			var n = sn(r, t);
			if (!b(n)) throw li("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, r);
			an(n, this, e), this.$$path || (this.$$path = "/"), this.$$compose()
		}, this.$$compose = function() {
			var e = X(this.$$search),
				t = this.$$hash ? "#" + Y(this.$$hash) : "";
			this.$$url = rn(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + this.$$url.substr(1)
		}, this.$$parseLinkUrl = function(i) {
			var o, a, s;
			return (o = sn(e, i)) !== n ? (a = o, s = (o = sn(t, o)) !== n ? r + (sn("/", o) || o) : e + a) : (o = sn(r, i)) !== n ? s = r + o : r == i + "/" && (s = r), s && this.$$parse(s), !! s
		}
	}
	function dn(e, t) {
		var n = ln(e);
		on(e, this, e), this.$$parse = function(r) {
			function i(e, t, n) {
				var r, i = /^\/[A-Z]:(\/.*)/;
				return 0 === t.indexOf(n) && (t = t.replace(n, "")), i.exec(t) ? e : (r = i.exec(e), r ? r[1] : e)
			}
			var o = sn(e, r) || sn(n, r),
				a = "#" == o.charAt(0) ? sn(t, o) : this.$$html5 ? o : "";
			if (!b(a)) throw li("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', r, t);
			an(a, this, e), this.$$path = i(this.$$path, a, e), this.$$compose()
		}, this.$$compose = function() {
			var n = X(this.$$search),
				r = this.$$hash ? "#" + Y(this.$$hash) : "";
			this.$$url = rn(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + (this.$$url ? t + this.$$url : "")
		}, this.$$parseLinkUrl = function(t) {
			return un(e) == un(t) ? (this.$$parse(t), !0) : !1
		}
	}
	function pn(e, t) {
		this.$$html5 = !0, dn.apply(this, arguments);
		var n = ln(e);
		this.$$parseLinkUrl = function(r) {
			var i, o;
			return e == un(r) ? i = r : (o = sn(n, r)) ? i = e + t + o : n === r + "/" && (i = n), i && this.$$parse(i), !! i
		}, this.$$compose = function() {
			var n = X(this.$$search),
				r = this.$$hash ? "#" + Y(this.$$hash) : "";
			this.$$url = rn(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + t + this.$$url
		}
	}
	function hn(e) {
		return function() {
			return this[e]
		}
	}
	function vn(e, t) {
		return function(n) {
			return m(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
		}
	}
	function gn() {
		var t = "",
			n = !1;
		this.hashPrefix = function(e) {
			return y(e) ? (t = e, this) : t
		}, this.html5Mode = function(e) {
			return y(e) ? (n = e, this) : n
		}, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(r, i, o, a) {
			function s(e) {
				r.$broadcast("$locationChangeSuccess", u.absUrl(), e)
			}
			var u, l, c, f = i.baseHref(),
				d = i.url();
			n ? (c = cn(d) + (f || "/"), l = o.history ? fn : pn) : (c = un(d), l = dn), u = new l(c, "#" + t), u.$$parseLinkUrl(d, d);
			var p = /^\s*(javascript|mailto):/i;
			a.on("click", function(t) {
				if (!t.ctrlKey && !t.metaKey && 2 != t.which) {
					for (var n = wr(t.target);
					"a" !== vr(n[0].nodeName);) if (n[0] === a[0] || !(n = n.parent())[0]) return;
					var o = n.prop("href"),
						s = n.attr("href") || n.attr("xlink:href");
					$(o) && "[object SVGAnimatedString]" === o.toString() && (o = In(o.animVal).href), p.test(o) || !o || n.attr("target") || t.isDefaultPrevented() || u.$$parseLinkUrl(o, s) && (t.preventDefault(), u.absUrl() != i.url() && (r.$apply(), e.angular["ff-684208-preventDefault"] = !0))
				}
			}), u.absUrl() != d && i.url(u.absUrl(), !0), i.onUrlChange(function(e) {
				u.absUrl() != e && (r.$evalAsync(function() {
					var t = u.absUrl();
					u.$$parse(e), r.$broadcast("$locationChangeStart", e, t).defaultPrevented ? (u.$$parse(t), i.url(t)) : s(t)
				}), r.$$phase || r.$digest())
			});
			var h = 0;
			return r.$watch(function() {
				var e = i.url(),
					t = u.$$replace;
				return h && e == u.absUrl() || (h++, r.$evalAsync(function() {
					r.$broadcast("$locationChangeStart", u.absUrl(), e).defaultPrevented ? u.$$parse(e) : (i.url(u.absUrl(), t), s(e))
				})), u.$$replace = !1, h
			}), u
		}]
	}
	function mn() {
		var e = !0,
			t = this;
		this.debugEnabled = function(t) {
			return y(t) ? (e = t, this) : e
		}, this.$get = ["$window", function(n) {
			function r(e) {
				return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
			}
			function i(e) {
				var t = n.console || {},
					i = t[e] || t.log || h,
					a = !1;
				try {
					a = !! i.apply
				} catch (s) {}
				return a ?
				function() {
					var e = [];
					return o(arguments, function(t) {
						e.push(r(t))
					}), i.apply(t, e)
				} : function(e, t) {
					i(e, null == t ? "" : t)
				}
			}
			return {
				log: i("log"),
				info: i("info"),
				warn: i("warn"),
				error: i("error"),
				debug: function() {
					var n = i("debug");
					return function() {
						e && n.apply(t, arguments)
					}
				}()
			}
		}]
	}
	function yn(e, t) {
		if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw fi("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
		return e
	}
	function $n(e, t) {
		if (e) {
			if (e.constructor === e) throw fi("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
			if (e.document && e.location && e.alert && e.setInterval) throw fi("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
			if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw fi("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
			if (e === Object) throw fi("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
		}
		return e
	}
	function bn(e, t) {
		if (e) {
			if (e.constructor === e) throw fi("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
			if (e === pi || e === hi || vi && e === vi) throw fi("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
		}
	}
	function wn(e, t, r, i, o) {
		$n(e, i), o = o || {};
		for (var a, s = t.split("."), u = 0; s.length > 1; u++) {
			a = yn(s.shift(), i);
			var l = $n(e[a], i);
			l || (l = {}, e[a] = l), e = l, e.then && o.unwrapPromises && (ci(i), "$$v" in e || !
			function(e) {
				e.then(function(t) {
					e.$$v = t
				})
			}(e), e.$$v === n && (e.$$v = {}), e = e.$$v)
		}
		return a = yn(s.shift(), i), $n(e[a], i), e[a] = r, r
	}
	function xn(e) {
		return "constructor" == e
	}
	function Cn(e, t, r, i, o, a, s) {
		yn(e, a), yn(t, a), yn(r, a), yn(i, a), yn(o, a);
		var u = function(e) {
				return $n(e, a)
			},
			l = s.expensiveChecks,
			c = l || xn(e) ? u : v,
			f = l || xn(t) ? u : v,
			d = l || xn(r) ? u : v,
			p = l || xn(i) ? u : v,
			h = l || xn(o) ? u : v;
		return s.unwrapPromises ?
		function(s, u) {
			var l, v = u && u.hasOwnProperty(e) ? u : s;
			return null == v ? v : (v = c(v[e]), v && v.then && (ci(a), "$$v" in v || (l = v, l.$$v = n, l.then(function(e) {
				l.$$v = c(e)
			})), v = c(v.$$v)), t ? null == v ? n : (v = f(v[t]), v && v.then && (ci(a), "$$v" in v || (l = v, l.$$v = n, l.then(function(e) {
				l.$$v = f(e)
			})), v = f(v.$$v)), r ? null == v ? n : (v = d(v[r]), v && v.then && (ci(a), "$$v" in v || (l = v, l.$$v = n, l.then(function(e) {
				l.$$v = d(e)
			})), v = d(v.$$v)), i ? null == v ? n : (v = p(v[i]), v && v.then && (ci(a), "$$v" in v || (l = v, l.$$v = n, l.then(function(e) {
				l.$$v = p(e)
			})), v = p(v.$$v)), o ? null == v ? n : (v = h(v[o]), v && v.then && (ci(a), "$$v" in v || (l = v, l.$$v = n, l.then(function(e) {
				l.$$v = h(e)
			})), v = h(v.$$v)), v) : v) : v) : v) : v)
		} : function(a, s) {
			var u = s && s.hasOwnProperty(e) ? s : a;
			return null == u ? u : (u = c(u[e]), t ? null == u ? n : (u = f(u[t]), r ? null == u ? n : (u = d(u[r]), i ? null == u ? n : (u = p(u[i]), o ? null == u ? n : u = h(u[o]) : u) : u) : u) : u)
		}
	}
	function Sn(e, t) {
		return function(n, r) {
			return e(n, r, ci, $n, t)
		}
	}
	function Tn(e, t, r) {
		var i = t.expensiveChecks,
			a = i ? wi : bi;
		if (a.hasOwnProperty(e)) return a[e];
		var s, u = e.split("."),
			l = u.length;
		if (t.csp) s = 6 > l ? Cn(u[0], u[1], u[2], u[3], u[4], r, t) : function(e, i) {
			var o, a = 0;
			do o = Cn(u[a++], u[a++], u[a++], u[a++], u[a++], r, t)(e, i), i = n, e = o;
			while (l > a);
			return o
		};
		else {
			var c = "var p;\n";
			i && (c += "s = eso(s, fe);\nl = eso(l, fe);\n");
			var f = i;
			o(u, function(e, n) {
				yn(e, r);
				var o = (n ? "s" : '((l&&l.hasOwnProperty("' + e + '"))?l:s)') + '["' + e + '"]',
					a = i || xn(e);
				a && (o = "eso(" + o + ", fe)", f = !0), c += "if(s == null) return undefined;\ns=" + o + ";\n", t.unwrapPromises && (c += 'if (s && s.then) {\n pw("' + r.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (a ? "eso(v)" : "v") + ";});\n}\n s=" + (a ? "eso(s.$$v)" : "s.$$v") + "\n}\n")
			}), c += "return s;";
			var d = new Function("s", "l", "pw", "eso", "fe", c);
			d.toString = g(c), (f || t.unwrapPromises) && (d = Sn(d, r)), s = d
		}
		return "hasOwnProperty" !== e && (a[e] = s), s
	}
	function En() {
		var e = {},
			t = {},
			n = {
				csp: !1,
				unwrapPromises: !1,
				logPromiseWarnings: !0,
				expensiveChecks: !1
			};
		this.unwrapPromises = function(e) {
			return y(e) ? (n.unwrapPromises = !! e, this) : n.unwrapPromises
		}, this.logPromiseWarnings = function(e) {
			return y(e) ? (n.logPromiseWarnings = e, this) : n.logPromiseWarnings
		}, this.$get = ["$filter", "$sniffer", "$log", function(r, i, o) {
			n.csp = i.csp;
			var a = {
				csp: n.csp,
				unwrapPromises: n.unwrapPromises,
				logPromiseWarnings: n.logPromiseWarnings,
				expensiveChecks: !0
			};
			return ci = function(e) {
				n.logPromiseWarnings && !di.hasOwnProperty(e) && (di[e] = !0, o.warn("[$parse] Promise found in the expression `" + e + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
			}, function(i, o) {
				var s;
				switch (typeof i) {
				case "string":
					var u = o ? t : e;
					if (u.hasOwnProperty(i)) return u[i];
					var l = o ? a : n,
						c = new yi(l),
						f = new $i(c, r, l);
					return s = f.parse(i), "hasOwnProperty" !== i && (u[i] = s), s;
				case "function":
					return i;
				default:
					return h
				}
			}
		}]
	}
	function An() {
		this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
			return kn(function(t) {
				e.$evalAsync(t)
			}, t)
		}]
	}
	function kn(e, t) {
		function r(e) {
			return e
		}
		function i(e) {
			return l(e)
		}
		function a(e) {
			var t = s(),
				n = 0,
				r = Dr(e) ? [] : {};
			return o(e, function(e, i) {
				n++, u(e).then(function(e) {
					r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
				}, function(e) {
					r.hasOwnProperty(i) || t.reject(e)
				})
			}), 0 === n && t.resolve(r), t.promise
		}
		var s = function() {
				var o, a, l = [];
				return a = {
					resolve: function(t) {
						if (l) {
							var r = l;
							l = n, o = u(t), r.length && e(function() {
								for (var e, t = 0, n = r.length; n > t; t++) e = r[t], o.then(e[0], e[1], e[2])
							})
						}
					},
					reject: function(e) {
						a.resolve(c(e))
					},
					notify: function(t) {
						if (l) {
							var n = l;
							l.length && e(function() {
								for (var e, r = 0, i = n.length; i > r; r++) e = n[r], e[2](t)
							})
						}
					},
					promise: {
						then: function(e, n, a) {
							var u = s(),
								c = function(n) {
									try {
										u.resolve((C(e) ? e : r)(n))
									} catch (i) {
										u.reject(i), t(i)
									}
								},
								f = function(e) {
									try {
										u.resolve((C(n) ? n : i)(e))
									} catch (r) {
										u.reject(r), t(r)
									}
								},
								d = function(e) {
									try {
										u.notify((C(a) ? a : r)(e))
									} catch (n) {
										t(n)
									}
								};
							return l ? l.push([c, f, d]) : o.then(c, f, d), u.promise
						},
						"catch": function(e) {
							return this.then(null, e)
						},
						"finally": function(e) {
							function t(e, t) {
								var n = s();
								return t ? n.resolve(e) : n.reject(e), n.promise
							}
							function n(n, i) {
								var o = null;
								try {
									o = (e || r)()
								} catch (a) {
									return t(a, !1)
								}
								return N(o) ? o.then(function() {
									return t(n, i)
								}, function(e) {
									return t(e, !1)
								}) : t(n, i)
							}
							return this.then(function(e) {
								return n(e, !0)
							}, function(e) {
								return n(e, !1)
							})
						}
					}
				}
			},
			u = function(t) {
				return N(t) ? t : {
					then: function(n) {
						var r = s();
						return e(function() {
							r.resolve(n(t))
						}), r.promise
					}
				}
			},
			l = function(e) {
				var t = s();
				return t.reject(e), t.promise
			},
			c = function(n) {
				return {
					then: function(r, o) {
						var a = s();
						return e(function() {
							try {
								a.resolve((C(o) ? o : i)(n))
							} catch (e) {
								a.reject(e), t(e)
							}
						}), a.promise
					}
				}
			},
			f = function(n, o, a, c) {
				var f, d = s(),
					p = function(e) {
						try {
							return (C(o) ? o : r)(e)
						} catch (n) {
							return t(n), l(n)
						}
					},
					h = function(e) {
						try {
							return (C(a) ? a : i)(e)
						} catch (n) {
							return t(n), l(n)
						}
					},
					v = function(e) {
						try {
							return (C(c) ? c : r)(e)
						} catch (n) {
							t(n)
						}
					};
				return e(function() {
					u(n).then(function(e) {
						f || (f = !0, d.resolve(u(e).then(p, h, v)))
					}, function(e) {
						f || (f = !0, d.resolve(h(e)))
					}, function(e) {
						f || d.notify(v(e))
					})
				}), d.promise
			};
		return {
			defer: s,
			reject: l,
			when: f,
			all: a
		}
	}
	function Nn() {
		this.$get = ["$window", "$timeout", function(e, t) {
			var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame,
				r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
				i = !! n,
				o = i ?
			function(e) {
				var t = n(e);
				return function() {
					r(t)
				}
			} : function(e) {
				var n = t(e, 16.66, !1);
				return function() {
					t.cancel(n)
				}
			};
			return o.supported = i, o
		}]
	}
	function _n() {
		var e = 10,
			t = r("$rootScope"),
			n = null;
		this.digestTtl = function(t) {
			return arguments.length && (e = t), e
		}, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(r, a, s, u) {
			function c() {
				this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
			}
			function f(e) {
				if (m.$$phase) throw t("inprog", "{0} already in progress", m.$$phase);
				m.$$phase = e
			}
			function d() {
				m.$$phase = null
			}
			function p(e, t) {
				var n = s(e);
				return nt(n, t), n
			}
			function v(e, t, n) {
				do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n];
				while (e = e.$parent)
			}
			function g() {}
			c.prototype = {
				constructor: c,
				$new: function(e) {
					var t;
					return e ? (t = new c, t.$root = this.$root, t.$$asyncQueue = this.$$asyncQueue, t.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
						this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = l(), this.$$childScopeClass = null
					}, this.$$childScopeClass.prototype = this), t = new this.$$childScopeClass), t["this"] = t, t.$parent = this, t.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = t, this.$$childTail = t) : this.$$childHead = this.$$childTail = t, t
				},
				$watch: function(e, t, r) {
					var i = this,
						o = p(e, "watch"),
						a = i.$$watchers,
						s = {
							fn: t,
							last: g,
							get: o,
							exp: e,
							eq: !! r
						};
					if (n = null, !C(t)) {
						var u = p(t || h, "listener");
						s.fn = function(e, t, n) {
							u(n)
						}
					}
					if ("string" == typeof e && o.constant) {
						var l = s.fn;
						s.fn = function(e, t, n) {
							l.call(this, e, t, n), P(a, s)
						}
					}
					return a || (a = i.$$watchers = []), a.unshift(s), function() {
						P(a, s), n = null
					}
				},
				$watchCollection: function(e, t) {
					function n() {
						o = d(l);
						var e, t, n;
						if ($(o)) if (i(o)) {
							a !== p && (a = p, g = a.length = 0, f++), e = o.length, g !== e && (f++, a.length = g = e);
							for (var r = 0; e > r; r++) n = a[r] !== a[r] && o[r] !== o[r], n || a[r] === o[r] || (f++, a[r] = o[r])
						} else {
							a !== h && (a = h = {}, g = 0, f++), e = 0;
							for (t in o) o.hasOwnProperty(t) && (e++, a.hasOwnProperty(t) ? (n = a[t] !== a[t] && o[t] !== o[t], n || a[t] === o[t] || (f++, a[t] = o[t])) : (g++, a[t] = o[t], f++));
							if (g > e) {
								f++;
								for (t in a) a.hasOwnProperty(t) && !o.hasOwnProperty(t) && (g--, delete a[t])
							}
						} else a !== o && (a = o, f++);
						return f
					}
					function r() {
						if (v ? (v = !1, t(o, o, l)) : t(o, u, l), c) if ($(o)) if (i(o)) {
							u = new Array(o.length);
							for (var e = 0; e < o.length; e++) u[e] = o[e]
						} else {
							u = {};
							for (var n in o) gr.call(o, n) && (u[n] = o[n])
						} else u = o
					}
					var o, a, u, l = this,
						c = t.length > 1,
						f = 0,
						d = s(e),
						p = [],
						h = {},
						v = !0,
						g = 0;
					return this.$watch(n, r)
				},
				$digest: function() {
					var r, i, o, s, l, c, p, h, v, m, y, $ = this.$$asyncQueue,
						b = this.$$postDigestQueue,
						w = e,
						x = this,
						S = [];
					f("$digest"), u.$$checkUrlChange(), n = null;
					do {
						for (c = !1, h = x; $.length;) {
							try {
								y = $.shift(), y.scope.$eval(y.expression)
							} catch (T) {
								d(), a(T)
							}
							n = null
						}
						e: do {
							if (s = h.$$watchers) for (l = s.length; l--;) try {
								if (r = s[l]) if ((i = r.get(h)) === (o = r.last) || (r.eq ? L(i, o) : "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))) {
									if (r === n) {
										c = !1;
										break e
									}
								} else c = !0, n = r, r.last = r.eq ? j(i, null) : i, r.fn(i, o === g ? i : o, h), 5 > w && (v = 4 - w, S[v] || (S[v] = []), m = C(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, m += "; newVal: " + V(i) + "; oldVal: " + V(o), S[v].push(m))
							} catch (T) {
								d(), a(T)
							}
							if (!(p = h.$$childHead || h !== x && h.$$nextSibling)) for (; h !== x && !(p = h.$$nextSibling);) h = h.$parent
						} while (h = p);
						if ((c || $.length) && !w--) throw d(), t("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, V(S))
					}
					while (c || $.length);
					for (d(); b.length;) try {
						b.shift()()
					} catch (T) {
						a(T)
					}
				},
				$destroy: function() {
					if (!this.$$destroyed) {
						var e = this.$parent;
						this.$broadcast("$destroy"), this.$$destroyed = !0, this !== m && (o(this.$$listenerCount, F(null, v, this)), e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = h, this.$on = this.$watch = function() {
							return h
						})
					}
				},
				$eval: function(e, t) {
					return s(e)(this, t)
				},
				$evalAsync: function(e) {
					m.$$phase || m.$$asyncQueue.length || u.defer(function() {
						m.$$asyncQueue.length && m.$digest()
					}), this.$$asyncQueue.push({
						scope: this,
						expression: e
					})
				},
				$$postDigest: function(e) {
					this.$$postDigestQueue.push(e)
				},
				$apply: function(e) {
					try {
						return f("$apply"), this.$eval(e)
					} catch (t) {
						a(t)
					} finally {
						d();
						try {
							m.$digest()
						} catch (t) {
							throw a(t), t
						}
					}
				},
				$on: function(e, t) {
					var n = this.$$listeners[e];
					n || (this.$$listeners[e] = n = []), n.push(t);
					var r = this;
					do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++;
					while (r = r.$parent);
					var i = this;
					return function() {
						var r = O(n, t); - 1 !== r && (n[r] = null, v(i, 1, e))
					}
				},
				$emit: function(e) {
					var t, n, r, i = [],
						o = this,
						s = !1,
						u = {
							name: e,
							targetScope: o,
							stopPropagation: function() {
								s = !0
							},
							preventDefault: function() {
								u.defaultPrevented = !0
							},
							defaultPrevented: !1
						},
						l = q([u], arguments, 1);
					do {
						for (t = o.$$listeners[e] || i, u.currentScope = o, n = 0, r = t.length; r > n; n++) if (t[n]) try {
							t[n].apply(null, l)
						} catch (c) {
							a(c)
						} else t.splice(n, 1), n--, r--;
						if (s) return u;
						o = o.$parent
					} while (o);
					return u
				},
				$broadcast: function(e) {
					for (var t, n, r, i = this, o = i, s = i, u = {
						name: e,
						targetScope: i,
						preventDefault: function() {
							u.defaultPrevented = !0
						},
						defaultPrevented: !1
					}, l = q([u], arguments, 1); o = s;) {
						for (u.currentScope = o, t = o.$$listeners[e] || [], n = 0, r = t.length; r > n; n++) if (t[n]) try {
							t[n].apply(null, l)
						} catch (c) {
							a(c)
						} else t.splice(n, 1), n--, r--;
						if (!(s = o.$$listenerCount[e] && o.$$childHead || o !== i && o.$$nextSibling)) for (; o !== i && !(s = o.$$nextSibling);) o = o.$parent
					}
					return u
				}
			};
			var m = new c;
			return m
		}]
	}
	function Dn() {
		var e = /^\s*(https?|ftp|mailto|tel|file):/,
			t = /^\s*((https?|ftp|file):|data:image\/)/;
		this.aHrefSanitizationWhitelist = function(t) {
			return y(t) ? (e = t, this) : e
		}, this.imgSrcSanitizationWhitelist = function(e) {
			return y(e) ? (t = e, this) : t
		}, this.$get = function() {
			return function(n, r) {
				var i, o = r ? t : e;
				return br && !(br >= 8) || (i = In(n).href, "" === i || i.match(o)) ? n : "unsafe:" + i
			}
		}
	}
	function Mn(e) {
		return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
	}
	function On(e) {
		if ("self" === e) return e;
		if (b(e)) {
			if (e.indexOf("***") > -1) throw xi("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
			return e = Mn(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
		}
		if (S(e)) return new RegExp("^" + e.source + "$");
		throw xi("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
	}
	function Pn(e) {
		var t = [];
		return y(e) && o(e, function(e) {
			t.push(On(e))
		}), t
	}
	function jn() {
		this.SCE_CONTEXTS = Ci;
		var e = ["self"],
			t = [];
		this.resourceUrlWhitelist = function(t) {
			return arguments.length && (e = Pn(t)), e
		}, this.resourceUrlBlacklist = function(e) {
			return arguments.length && (t = Pn(e)), t
		}, this.$get = ["$injector", function(r) {
			function i(e, t) {
				return "self" === e ? Fn(t) : !! e.exec(t.href)
			}
			function o(n) {
				var r, o, a = In(n.toString()),
					s = !1;
				for (r = 0, o = e.length; o > r; r++) if (i(e[r], a)) {
					s = !0;
					break
				}
				if (s) for (r = 0, o = t.length; o > r; r++) if (i(t[r], a)) {
					s = !1;
					break
				}
				return s
			}
			function a(e) {
				var t = function(e) {
						this.$$unwrapTrustedValue = function() {
							return e
						}
					};
				return e && (t.prototype = new e), t.prototype.valueOf = function() {
					return this.$$unwrapTrustedValue()
				}, t.prototype.toString = function() {
					return this.$$unwrapTrustedValue().toString()
				}, t
			}
			function s(e, t) {
				var r = d.hasOwnProperty(e) ? d[e] : null;
				if (!r) throw xi("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
				if (null === t || t === n || "" === t) return t;
				if ("string" != typeof t) throw xi("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
				return new r(t)
			}
			function u(e) {
				return e instanceof f ? e.$$unwrapTrustedValue() : e
			}
			function l(e, t) {
				if (null === t || t === n || "" === t) return t;
				var r = d.hasOwnProperty(e) ? d[e] : null;
				if (r && t instanceof r) return t.$$unwrapTrustedValue();
				if (e === Ci.RESOURCE_URL) {
					if (o(t)) return t;
					throw xi("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
				}
				if (e === Ci.HTML) return c(t);
				throw xi("unsafe", "Attempting to use an unsafe value in a safe context.")
			}
			var c = function() {
					throw xi("unsafe", "Attempting to use an unsafe value in a safe context.")
				};
			r.has("$sanitize") && (c = r.get("$sanitize"));
			var f = a(),
				d = {};
			return d[Ci.HTML] = a(f), d[Ci.CSS] = a(f), d[Ci.URL] = a(f), d[Ci.JS] = a(f), d[Ci.RESOURCE_URL] = a(d[Ci.URL]), {
				trustAs: s,
				getTrusted: l,
				valueOf: u
			}
		}]
	}
	function Rn() {
		var e = !0;
		this.enabled = function(t) {
			return arguments.length && (e = !! t), e
		}, this.$get = ["$parse", "$sniffer", "$sceDelegate", function(t, n, r) {
			if (e && n.msie && n.msieDocumentMode < 8) throw xi("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
			var i = R(Ci);
			i.isEnabled = function() {
				return e
			}, i.trustAs = r.trustAs, i.getTrusted = r.getTrusted, i.valueOf = r.valueOf, e || (i.trustAs = i.getTrusted = function(e, t) {
				return t
			}, i.valueOf = v), i.parseAs = function(e, n) {
				var r = t(n);
				return r.literal && r.constant ? r : function(t, n) {
					return i.getTrusted(e, r(t, n))
				}
			};
			var a = i.parseAs,
				s = i.getTrusted,
				u = i.trustAs;
			return o(Ci, function(e, t) {
				var n = vr(t);
				i[lt("parse_as_" + n)] = function(t) {
					return a(e, t)
				}, i[lt("get_trusted_" + n)] = function(t) {
					return s(e, t)
				}, i[lt("trust_as_" + n)] = function(t) {
					return u(e, t)
				}
			}), i
		}]
	}
	function Ln() {
		this.$get = ["$window", "$document", function(e, t) {
			var n, r, i = {},
				o = d((/android (\d+)/.exec(vr((e.navigator || {}).userAgent)) || [])[1]),
				a = /Boxee/i.test((e.navigator || {}).userAgent),
				s = t[0] || {},
				u = s.documentMode,
				l = /^(Moz|webkit|O|ms)(?=[A-Z])/,
				c = s.body && s.body.style,
				f = !1,
				p = !1;
			if (c) {
				for (var h in c) if (r = l.exec(h)) {
					n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
					break
				}
				n || (n = "WebkitOpacity" in c && "webkit"), f = !! ("transition" in c || n + "Transition" in c), p = !! ("animation" in c || n + "Animation" in c), !o || f && p || (f = b(s.body.style.webkitTransition), p = b(s.body.style.webkitAnimation))
			}
			return {
				history: !(!e.history || !e.history.pushState || 4 > o || a),
				hashchange: "onhashchange" in e && (!u || u > 7),
				hasEvent: function(e) {
					if ("input" == e && 9 == br) return !1;
					if (m(i[e])) {
						var t = s.createElement("div");
						i[e] = "on" + e in t
					}
					return i[e]
				},
				csp: Or(),
				vendorPrefix: n,
				transitions: f,
				animations: p,
				android: o,
				msie: br,
				msieDocumentMode: u
			}
		}]
	}
	function qn() {
		this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(e, t, n, r) {
			function i(i, a, s) {
				var u, l = n.defer(),
					c = l.promise,
					f = y(s) && !s;
				return u = t.defer(function() {
					try {
						l.resolve(i())
					} catch (t) {
						l.reject(t), r(t)
					} finally {
						delete o[c.$$timeoutId]
					}
					f || e.$apply()
				}, a), c.$$timeoutId = u, o[u] = l, c
			}
			var o = {};
			return i.cancel = function(e) {
				return e && e.$$timeoutId in o ? (o[e.$$timeoutId].reject("canceled"), delete o[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
			}, i
		}]
	}
	function In(e) {
		var t = e;
		return br && (Si.setAttribute("href", t), t = Si.href), Si.setAttribute("href", t), {
			href: Si.href,
			protocol: Si.protocol ? Si.protocol.replace(/:$/, "") : "",
			host: Si.host,
			search: Si.search ? Si.search.replace(/^\?/, "") : "",
			hash: Si.hash ? Si.hash.replace(/^#/, "") : "",
			hostname: Si.hostname,
			port: Si.port,
			pathname: "/" === Si.pathname.charAt(0) ? Si.pathname : "/" + Si.pathname
		}
	}
	function Fn(e) {
		var t = b(e) ? In(e) : e;
		return t.protocol === Ti.protocol && t.host === Ti.host
	}
	function Hn() {
		this.$get = g(e)
	}
	function Vn(e) {
		function t(r, i) {
			if ($(r)) {
				var a = {};
				return o(r, function(e, n) {
					a[n] = t(n, e)
				}), a
			}
			return e.factory(r + n, i)
		}
		var n = "Filter";
		this.register = t, this.$get = ["$injector", function(e) {
			return function(t) {
				return e.get(t + n)
			}
		}], t("currency", Bn), t("date", Kn), t("filter", Wn), t("json", Zn), t("limitTo", er), t("lowercase", _i), t("number", zn), t("orderBy", tr), t("uppercase", Di)
	}
	function Wn() {
		return function(e, t, n) {
			if (!Dr(e)) return e;
			var r = typeof n,
				i = [];
			i.check = function(e) {
				for (var t = 0; t < i.length; t++) if (!i[t](e)) return !1;
				return !0
			}, "function" !== r && (n = "boolean" === r && n ?
			function(e, t) {
				return Nr.equals(e, t)
			} : function(e, t) {
				if (e && t && "object" == typeof e && "object" == typeof t) {
					for (var r in e) if ("$" !== r.charAt(0) && gr.call(e, r) && n(e[r], t[r])) return !0;
					return !1
				}
				return t = ("" + t).toLowerCase(), ("" + e).toLowerCase().indexOf(t) > -1
			});
			var o = function(e, t) {
					if ("string" == typeof t && "!" === t.charAt(0)) return !o(e, t.substr(1));
					switch (typeof e) {
					case "boolean":
					case "number":
					case "string":
						return n(e, t);
					case "object":
						switch (typeof t) {
						case "object":
							return n(e, t);
						default:
							for (var r in e) if ("$" !== r.charAt(0) && o(e[r], t)) return !0
						}
						return !1;
					case "array":
						for (var i = 0; i < e.length; i++) if (o(e[i], t)) return !0;
						return !1;
					default:
						return !1
					}
				};
			switch (typeof t) {
			case "boolean":
			case "number":
			case "string":
				t = {
					$: t
				};
			case "object":
				for (var a in t)!
				function(e) {
					"undefined" != typeof t[e] && i.push(function(n) {
						return o("$" == e ? n : n && n[e], t[e])
					})
				}(a);
				break;
			case "function":
				i.push(t);
				break;
			default:
				return e
			}
			for (var s = [], u = 0; u < e.length; u++) {
				var l = e[u];
				i.check(l) && s.push(l)
			}
			return s
		}
	}
	function Bn(e) {
		var t = e.NUMBER_FORMATS;
		return function(e, n) {
			return m(n) && (n = t.CURRENCY_SYM), Un(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
		}
	}
	function zn(e) {
		var t = e.NUMBER_FORMATS;
		return function(e, n) {
			return Un(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
		}
	}
	function Un(e, t, n, r, i) {
		if (null == e || !isFinite(e) || $(e)) return "";
		var o = 0 > e;
		e = Math.abs(e);
		var a = e + "",
			s = "",
			u = [],
			l = !1;
		if (-1 !== a.indexOf("e")) {
			var c = a.match(/([\d\.]+)e(-?)(\d+)/);
			c && "-" == c[2] && c[3] > i + 1 ? (a = "0", e = 0) : (s = a, l = !0)
		}
		if (l) i > 0 && e > -1 && 1 > e && (s = e.toFixed(i));
		else {
			var f = (a.split(Ei)[1] || "").length;
			m(i) && (i = Math.min(Math.max(t.minFrac, f), t.maxFrac)), e = +(Math.round(+(e.toString() + "e" + i)).toString() + "e" + -i), 0 === e && (o = !1);
			var d = ("" + e).split(Ei),
				p = d[0];
			d = d[1] || "";
			var h, v = 0,
				g = t.lgSize,
				y = t.gSize;
			if (p.length >= g + y) for (v = p.length - g, h = 0; v > h; h++)(v - h) % y === 0 && 0 !== h && (s += n), s += p.charAt(h);
			for (h = v; h < p.length; h++)(p.length - h) % g === 0 && 0 !== h && (s += n), s += p.charAt(h);
			for (; d.length < i;) d += "0";
			i && "0" !== i && (s += r + d.substr(0, i))
		}
		return u.push(o ? t.negPre : t.posPre), u.push(s), u.push(o ? t.negSuf : t.posSuf), u.join("")
	}
	function Qn(e, t, n) {
		var r = "";
		for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
		return n && (e = e.substr(e.length - t)), r + e
	}
	function Xn(e, t, n, r) {
		return n = n || 0, function(i) {
			var o = i["get" + e]();
			return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), Qn(o, t, r)
		}
	}
	function Yn(e, t) {
		return function(n, r) {
			var i = n["get" + e](),
				o = mr(t ? "SHORT" + e : e);
			return r[o][i]
		}
	}
	function Jn(e) {
		var t = -1 * e.getTimezoneOffset(),
			n = t >= 0 ? "+" : "";
		return n += Qn(Math[t > 0 ? "floor" : "ceil"](t / 60), 2) + Qn(Math.abs(t % 60), 2)
	}
	function Gn(e, t) {
		return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
	}
	function Kn(e) {
		function t(e) {
			var t;
			if (t = e.match(n)) {
				var r = new Date(0),
					i = 0,
					o = 0,
					a = t[8] ? r.setUTCFullYear : r.setFullYear,
					s = t[8] ? r.setUTCHours : r.setHours;
				t[9] && (i = d(t[9] + t[10]), o = d(t[9] + t[11])), a.call(r, d(t[1]), d(t[2]) - 1, d(t[3]));
				var u = d(t[4] || 0) - i,
					l = d(t[5] || 0) - o,
					c = d(t[6] || 0),
					f = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
				return s.call(r, u, l, c, f), r
			}
			return e
		}
		var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function(n, r) {
			var i, a, s = "",
				u = [];
			if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, b(n) && (n = Ni.test(n) ? d(n) : t(n)), w(n) && (n = new Date(n)), !x(n)) return n;
			for (; r;) a = ki.exec(r), a ? (u = q(u, a, 1), r = u.pop()) : (u.push(r), r = null);
			return o(u, function(t) {
				i = Ai[t], s += i ? i(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
			}), s
		}
	}
	function Zn() {
		return function(e) {
			return V(e, !0)
		}
	}
	function er() {
		return function(e, t) {
			if (!Dr(e) && !b(e)) return e;
			if (t = 1 / 0 === Math.abs(Number(t)) ? Number(t) : d(t), b(e)) return t ? t >= 0 ? e.slice(0, t) : e.slice(t, e.length) : "";
			var n, r, i = [];
			for (t > e.length ? t = e.length : t < -e.length && (t = -e.length), t > 0 ? (n = 0, r = t) : (n = e.length + t, r = e.length); r > n; n++) i.push(e[n]);
			return i
		}
	}
	function tr(e) {
		return function(t, n, r) {
			function o(e, t) {
				for (var r = 0; r < n.length; r++) {
					var i = n[r](e, t);
					if (0 !== i) return i
				}
				return 0
			}
			function a(e, t) {
				return B(t) ?
				function(t, n) {
					return e(n, t)
				} : e
			}
			function s(e, t) {
				var n = typeof e,
					r = typeof t;
				return n == r ? (x(e) && x(t) && (e = e.valueOf(), t = t.valueOf()), "string" == n && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? 0 : t > e ? -1 : 1) : r > n ? -1 : 1
			}
			return i(t) ? (n = Dr(n) ? n : [n], 0 === n.length && (n = ["+"]), n = D(n, function(t) {
				var n = !1,
					r = t || v;
				if (b(t)) {
					if (("+" == t.charAt(0) || "-" == t.charAt(0)) && (n = "-" == t.charAt(0), t = t.substring(1)), "" === t) return a(function(e, t) {
						return s(e, t)
					}, n);
					if (r = e(t), r.constant) {
						var i = r();
						return a(function(e, t) {
							return s(e[i], t[i])
						}, n)
					}
				}
				return a(function(e, t) {
					return s(r(e), r(t))
				}, n)
			}), Tr.call(t).sort(a(o, r))) : t
		}
	}
	function nr(e) {
		return C(e) && (e = {
			link: e
		}), e.restrict = e.restrict || "AC", g(e)
	}
	function rr(e, t, n, r) {
		function i(t, n) {
			n = n ? "-" + Z(n, "-") : "", r.setClass(e, (t ? Bi : zi) + n, (t ? zi : Bi) + n)
		}
		var a = this,
			s = e.parent().controller("form") || Pi,
			u = 0,
			l = a.$error = {},
			c = [];
		a.$name = t.name || t.ngForm, a.$dirty = !1, a.$pristine = !0, a.$valid = !0, a.$invalid = !1, s.$addControl(a), e.addClass(Ui), i(!0), a.$addControl = function(e) {
			rt(e.$name, "input"), c.push(e), e.$name && (a[e.$name] = e)
		}, a.$removeControl = function(e) {
			e.$name && a[e.$name] === e && delete a[e.$name], o(l, function(t, n) {
				a.$setValidity(n, !0, e)
			}), P(c, e)
		}, a.$setValidity = function(e, t, n) {
			var r = l[e];
			if (t) r && (P(r, n), r.length || (u--, u || (i(t), a.$valid = !0, a.$invalid = !1), l[e] = !1, i(!0, e), s.$setValidity(e, !0, a)));
			else {
				if (u || i(t), r) {
					if (M(r, n)) return
				} else l[e] = r = [], u++, i(!1, e), s.$setValidity(e, !1, a);
				r.push(n), a.$valid = !1, a.$invalid = !0
			}
		}, a.$setDirty = function() {
			r.removeClass(e, Ui), r.addClass(e, Qi), a.$dirty = !0, a.$pristine = !1, s.$setDirty()
		}, a.$setPristine = function() {
			r.removeClass(e, Qi), r.addClass(e, Ui), a.$dirty = !1, a.$pristine = !0, o(c, function(e) {
				e.$setPristine()
			})
		}
	}
	function ir(e, t, r, i) {
		return e.$setValidity(t, r), r ? i : n
	}
	function or(e, t) {
		var n, r;
		if (t) for (n = 0; n < t.length; ++n) if (r = t[n], e[r]) return !0;
		return !1
	}
	function ar(e, t, n, r, i) {
		if ($(i)) {
			e.$$hasNativeValidators = !0;
			var o = function(o) {
					return e.$error[t] || or(i, r) || !or(i, n) ? o : void e.$setValidity(t, !1)
				};
			e.$parsers.push(o)
		}
	}
	function sr(e, t, n, i, o, a) {
		var s = t.prop(hr),
			u = t[0].placeholder,
			l = {},
			c = vr(t[0].type);
		if (i.$$validityState = s, !o.android) {
			var f = !1;
			t.on("compositionstart", function() {
				f = !0
			}), t.on("compositionend", function() {
				f = !1, p()
			})
		}
		var p = function(r) {
				if (!f) {
					var o = t.val();
					if (br && "input" === (r || l).type && t[0].placeholder !== u) return void(u = t[0].placeholder);
					"password" !== c && B(n.ngTrim || "T") && (o = Mr(o));
					var a = s && i.$$hasNativeValidators;
					(i.$viewValue !== o || "" === o && a) && (e.$root.$$phase ? i.$setViewValue(o) : e.$apply(function() {
						i.$setViewValue(o)
					}))
				}
			};
		if (o.hasEvent("input")) t.on("input", p);
		else {
			var h, v = function() {
					h || (h = a.defer(function() {
						p(), h = null
					}))
				};
			t.on("keydown", function(e) {
				var t = e.keyCode;
				91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || v()
			}), o.hasEvent("paste") && t.on("paste cut", v)
		}
		t.on("change", p), i.$render = function() {
			t.val(i.$isEmpty(i.$viewValue) ? "" : i.$viewValue)
		};
		var g, m, y = n.ngPattern;
		if (y) {
			var $ = function(e, t) {
					return ir(i, "pattern", i.$isEmpty(t) || e.test(t), t)
				};
			m = y.match(/^\/(.*)\/([gim]*)$/), m ? (y = new RegExp(m[1], m[2]), g = function(e) {
				return $(y, e)
			}) : g = function(n) {
				var i = e.$eval(y);
				if (!i || !i.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", y, i, z(t));
				return $(i, n)
			}, i.$formatters.push(g), i.$parsers.push(g)
		}
		if (n.ngMinlength) {
			var b = d(n.ngMinlength),
				w = function(e) {
					return ir(i, "minlength", i.$isEmpty(e) || e.length >= b, e)
				};
			i.$parsers.push(w), i.$formatters.push(w)
		}
		if (n.ngMaxlength) {
			var x = d(n.ngMaxlength),
				C = function(e) {
					return ir(i, "maxlength", i.$isEmpty(e) || e.length <= x, e)
				};
			i.$parsers.push(C), i.$formatters.push(C)
		}
	}
	function ur(e, t, r, i, o, a) {
		if (sr(e, t, r, i, o, a), i.$parsers.push(function(e) {
			var t = i.$isEmpty(e);
			return t || Fi.test(e) ? (i.$setValidity("number", !0), "" === e ? null : t ? e : parseFloat(e)) : (i.$setValidity("number", !1), n)
		}), ar(i, "number", Vi, null, i.$$validityState), i.$formatters.push(function(e) {
			return i.$isEmpty(e) ? "" : "" + e
		}), r.min) {
			var s = function(e) {
					var t = parseFloat(r.min);
					return ir(i, "min", i.$isEmpty(e) || e >= t, e)
				};
			i.$parsers.push(s), i.$formatters.push(s)
		}
		if (r.max) {
			var u = function(e) {
					var t = parseFloat(r.max);
					return ir(i, "max", i.$isEmpty(e) || t >= e, e)
				};
			i.$parsers.push(u), i.$formatters.push(u)
		}
		i.$formatters.push(function(e) {
			return ir(i, "number", i.$isEmpty(e) || w(e), e)
		})
	}
	function lr(e, t, n, r, i, o) {
		sr(e, t, n, r, i, o);
		var a = function(e) {
				return ir(r, "url", r.$isEmpty(e) || qi.test(e), e)
			};
		r.$formatters.push(a), r.$parsers.push(a)
	}
	function cr(e, t, n, r, i, o) {
		sr(e, t, n, r, i, o);
		var a = function(e) {
				return ir(r, "email", r.$isEmpty(e) || Ii.test(e), e)
			};
		r.$formatters.push(a), r.$parsers.push(a)
	}
	function fr(e, t, n, r) {
		m(n.name) && t.attr("name", l()), t.on("click", function() {
			t[0].checked && e.$apply(function() {
				r.$setViewValue(n.value)
			})
		}), r.$render = function() {
			var e = n.value;
			t[0].checked = e == r.$viewValue
		}, n.$observe("value", r.$render)
	}
	function dr(e, t, n, r) {
		var i = n.ngTrueValue,
			o = n.ngFalseValue;
		b(i) || (i = !0), b(o) || (o = !1), t.on("click", function() {
			e.$apply(function() {
				r.$setViewValue(t[0].checked)
			})
		}), r.$render = function() {
			t[0].checked = r.$viewValue
		}, r.$isEmpty = function(e) {
			return e !== i
		}, r.$formatters.push(function(e) {
			return e === i
		}), r.$parsers.push(function(e) {
			return e ? i : o
		})
	}
	function pr(e, t) {
		return e = "ngClass" + e, ["$animate", function(n) {
			function r(e, t) {
				var n = [];
				e: for (var r = 0; r < e.length; r++) {
					for (var i = e[r], o = 0; o < t.length; o++) if (i == t[o]) continue e;
					n.push(i)
				}
				return n
			}
			function i(e) {
				if (Dr(e)) return e;
				if (b(e)) return e.split(" ");
				if ($(e)) {
					var t = [];
					return o(e, function(e, n) {
						e && (t = t.concat(n.split(" ")))
					}), t
				}
				return e
			}
			return {
				restrict: "AC",
				link: function(a, s, u) {
					function l(e) {
						var t = f(e, 1);
						u.$addClass(t)
					}
					function c(e) {
						var t = f(e, -1);
						u.$removeClass(t)
					}
					function f(e, t) {
						var n = s.data("$classCounts") || {},
							r = [];
						return o(e, function(e) {
							(t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e))
						}), s.data("$classCounts", n), r.join(" ")
					}
					function d(e, t) {
						var i = r(t, e),
							o = r(e, t);
						o = f(o, -1), i = f(i, 1), 0 === i.length ? n.removeClass(s, o) : 0 === o.length ? n.addClass(s, i) : n.setClass(s, i, o)
					}
					function p(e) {
						if (t === !0 || a.$index % 2 === t) {
							var n = i(e || []);
							if (h) {
								if (!L(e, h)) {
									var r = i(h);
									d(r, n)
								}
							} else l(n)
						}
						h = R(e)
					}
					var h;
					a.$watch(u[e], p, !0), u.$observe("class", function() {
						p(a.$eval(u[e]))
					}), "ngClass" !== e && a.$watch("$index", function(n, r) {
						var o = 1 & n;
						if (o !== (1 & r)) {
							var s = i(a.$eval(u[e]));
							o === t ? l(s) : c(s)
						}
					})
				}
			}
		}]
	}
	var hr = "validity",
		vr = function(e) {
			return b(e) ? e.toLowerCase() : e
		},
		gr = Object.prototype.hasOwnProperty,
		mr = function(e) {
			return b(e) ? e.toUpperCase() : e
		},
		yr = function(e) {
			return b(e) ? e.replace(/[A-Z]/g, function(e) {
				return String.fromCharCode(32 | e.charCodeAt(0))
			}) : e
		},
		$r = function(e) {
			return b(e) ? e.replace(/[a-z]/g, function(e) {
				return String.fromCharCode(-33 & e.charCodeAt(0))
			}) : e
		};
	"i" !== "I".toLowerCase() && (vr = yr, mr = $r);
	var br, wr, xr, Cr, Sr, Tr = [].slice,
		Er = [].push,
		Ar = Object.prototype.toString,
		kr = r("ng"),
		Nr = e.angular || (e.angular = {}),
		_r = ["0", "0", "0"];
	br = d((/msie (\d+)/.exec(vr(navigator.userAgent)) || [])[1]), isNaN(br) && (br = d((/trident\/.*; rv:(\d+)/.exec(vr(navigator.userAgent)) || [])[1])), h.$inject = [], v.$inject = [];
	var Dr = function() {
			return C(Array.isArray) ? Array.isArray : function(e) {
				return "[object Array]" === Ar.call(e)
			}
		}(),
		Mr = function() {
			return String.prototype.trim ?
			function(e) {
				return b(e) ? e.trim() : e
			} : function(e) {
				return b(e) ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : e
			}
		}();
	Sr = 9 > br ?
	function(e) {
		return e = e.nodeName ? e : e[0], e.scopeName && "HTML" != e.scopeName ? mr(e.scopeName + ":" + e.nodeName) : e.nodeName
	} : function(e) {
		return e.nodeName ? e.nodeName : e[0].nodeName
	};
	var Or = function() {
			if (y(Or.isActive_)) return Or.isActive_;
			var e = !(!t.querySelector("[ng-csp]") && !t.querySelector("[data-ng-csp]"));
			if (!e) try {
				new Function("")
			} catch (n) {
				e = !0
			}
			return Or.isActive_ = e
		},
		Pr = /[A-Z]/g,
		jr = {
			full: "1.2.28",
			major: 1,
			minor: 2,
			dot: 28,
			codeName: "finnish-disembarkation"
		};
	ht.expando = "ng339";
	var Rr = ht.cache = {},
		Lr = 1,
		qr = e.document.addEventListener ?
	function(e, t, n) {
		e.addEventListener(t, n, !1)
	} : function(e, t, n) {
		e.attachEvent("on" + t, n)
	}, Ir = e.document.removeEventListener ?
	function(e, t, n) {
		e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		e.detachEvent("on" + t, n)
	}, Fr = (ht._data = function(e) {
		return this.cache[e[this.expando]] || {}
	}, /([\:\-\_]+(.))/g), Hr = /^moz([A-Z])/, Vr = r("jqLite"), Wr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Br = /<|&#?\w+;/, zr = /<([\w:]+)/, Ur = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Qr = {
		option: [1, '<select multiple="multiple">', "</select>"],
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};
	Qr.optgroup = Qr.option, Qr.tbody = Qr.tfoot = Qr.colgroup = Qr.caption = Qr.thead, Qr.th = Qr.td;
	var Xr = ht.prototype = {
		ready: function(n) {
			function r() {
				i || (i = !0, n())
			}
			var i = !1;
			"complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), ht(e).on("load", r))
		},
		toString: function() {
			var e = [];
			return o(this, function(t) {
				e.push("" + t)
			}), "[" + e.join(", ") + "]"
		},
		eq: function(e) {
			return wr(e >= 0 ? this[e] : this[this.length + e])
		},
		length: 0,
		push: Er,
		sort: [].sort,
		splice: [].splice
	},
		Yr = {};
	o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
		Yr[vr(e)] = e
	});
	var Jr = {};
	o("input,select,option,textarea,button,form,details".split(","), function(e) {
		Jr[mr(e)] = !0
	}), o({
		data: bt,
		removeData: yt
	}, function(e, t) {
		ht[t] = e
	}), o({
		data: bt,
		inheritedData: Et,
		scope: function(e) {
			return wr.data(e, "$scope") || Et(e.parentNode || e, ["$isolateScope", "$scope"])
		},
		isolateScope: function(e) {
			return wr.data(e, "$isolateScope") || wr.data(e, "$isolateScopeNoTemplate")
		},
		controller: Tt,
		injector: function(e) {
			return Et(e, "$injector")
		},
		removeAttr: function(e, t) {
			e.removeAttribute(t)
		},
		hasClass: wt,
		css: function(e, t, r) {
			if (t = lt(t), !y(r)) {
				var i;
				return 8 >= br && (i = e.currentStyle && e.currentStyle[t], "" === i && (i = "auto")), i = i || e.style[t], 8 >= br && (i = "" === i ? n : i), i
			}
			e.style[t] = r
		},
		attr: function(e, t, r) {
			var i = vr(t);
			if (Yr[i]) {
				if (!y(r)) return e[t] || (e.attributes.getNamedItem(t) || h).specified ? i : n;
				r ? (e[t] = !0, e.setAttribute(t, i)) : (e[t] = !1, e.removeAttribute(i))
			} else if (y(r)) e.setAttribute(t, r);
			else if (e.getAttribute) {
				var o = e.getAttribute(t, 2);
				return null === o ? n : o
			}
		},
		prop: function(e, t, n) {
			return y(n) ? void(e[t] = n) : e[t]
		},
		text: function() {
			function e(e, n) {
				var r = t[e.nodeType];
				return m(n) ? r ? e[r] : "" : void(e[r] = n)
			}
			var t = [];
			return 9 > br ? (t[1] = "innerText", t[3] = "nodeValue") : t[1] = t[3] = "textContent", e.$dv = "", e
		}(),
		val: function(e, t) {
			if (m(t)) {
				if ("SELECT" === Sr(e) && e.multiple) {
					var n = [];
					return o(e.options, function(e) {
						e.selected && n.push(e.value || e.text)
					}), 0 === n.length ? null : n
				}
				return e.value
			}
			e.value = t
		},
		html: function(e, t) {
			if (m(t)) return e.innerHTML;
			for (var n = 0, r = e.childNodes; n < r.length; n++) gt(r[n]);
			e.innerHTML = t
		},
		empty: At
	}, function(e, t) {
		ht.prototype[t] = function(t, r) {
			var i, o, a = this.length;
			if (e !== At && (2 == e.length && e !== wt && e !== Tt ? t : r) === n) {
				if ($(t)) {
					for (i = 0; a > i; i++) if (e === bt) e(this[i], t);
					else for (o in t) e(this[i], o, t[o]);
					return this
				}
				for (var s = e.$dv, u = s === n ? Math.min(a, 1) : a, l = 0; u > l; l++) {
					var c = e(this[l], t, r);
					s = s ? s + c : c
				}
				return s
			}
			for (i = 0; a > i; i++) e(this[i], t, r);
			return this
		}
	}), o({
		removeData: yt,
		dealoc: gt,
		on: function Mo(e, n, r, i) {
			if (y(i)) throw Vr("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
			var a = $t(e, "events"),
				s = $t(e, "handle");
			a || $t(e, "events", a = {}), s || $t(e, "handle", s = Nt(e, a)), o(n.split(" "), function(n) {
				var i = a[n];
				if (!i) {
					if ("mouseenter" == n || "mouseleave" == n) {
						var o = t.body.contains || t.body.compareDocumentPosition ?
						function(e, t) {
							var n = 9 === e.nodeType ? e.documentElement : e,
								r = t && t.parentNode;
							return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
						} : function(e, t) {
							if (t) for (; t = t.parentNode;) if (t === e) return !0;
							return !1
						};
						a[n] = [];
						var u = {
							mouseleave: "mouseout",
							mouseenter: "mouseover"
						};
						Mo(e, u[n], function(e) {
							var t = this,
								r = e.relatedTarget;
							(!r || r !== t && !o(t, r)) && s(e, n)
						})
					} else qr(e, n, s), a[n] = [];
					i = a[n]
				}
				i.push(r)
			})
		},
		off: mt,
		one: function(e, t, n) {
			e = wr(e), e.on(t, function r() {
				e.off(t, n), e.off(t, r)
			}), e.on(t, n)
		},
		replaceWith: function(e, t) {
			var n, r = e.parentNode;
			gt(e), o(new ht(t), function(t) {
				n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
			})
		},
		children: function(e) {
			var t = [];
			return o(e.childNodes, function(e) {
				1 === e.nodeType && t.push(e)
			}), t
		},
		contents: function(e) {
			return e.contentDocument || e.childNodes || []
		},
		append: function(e, t) {
			o(new ht(t), function(t) {
				(1 === e.nodeType || 11 === e.nodeType) && e.appendChild(t)
			})
		},
		prepend: function(e, t) {
			if (1 === e.nodeType) {
				var n = e.firstChild;
				o(new ht(t), function(t) {
					e.insertBefore(t, n)
				})
			}
		},
		wrap: function(e, t) {
			t = wr(t)[0];
			var n = e.parentNode;
			n && n.replaceChild(t, e), t.appendChild(e)
		},
		remove: function(e) {
			gt(e);
			var t = e.parentNode;
			t && t.removeChild(e)
		},
		after: function(e, t) {
			var n = e,
				r = e.parentNode;
			o(new ht(t), function(e) {
				r.insertBefore(e, n.nextSibling), n = e
			})
		},
		addClass: Ct,
		removeClass: xt,
		toggleClass: function(e, t, n) {
			t && o(t.split(" "), function(t) {
				var r = n;
				m(r) && (r = !wt(e, t)), (r ? Ct : xt)(e, t)
			})
		},
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		next: function(e) {
			if (e.nextElementSibling) return e.nextElementSibling;
			for (var t = e.nextSibling; null != t && 1 !== t.nodeType;) t = t.nextSibling;
			return t
		},
		find: function(e, t) {
			return e.getElementsByTagName ? e.getElementsByTagName(t) : []
		},
		clone: vt,
		triggerHandler: function(e, t, n) {
			var r, i, a, s = t.type || t,
				u = ($t(e, "events") || {})[s];
			u && (r = {
				preventDefault: function() {
					this.defaultPrevented = !0
				},
				isDefaultPrevented: function() {
					return this.defaultPrevented === !0
				},
				stopPropagation: h,
				type: s,
				target: e
			}, t.type && (r = f(r, t)), i = R(u), a = n ? [r].concat(n) : [r], o(i, function(t) {
				t.apply(e, a)
			}))
		}
	}, function(e, t) {
		ht.prototype[t] = function(t, n, r) {
			for (var i, o = 0; o < this.length; o++) m(i) ? (i = e(this[o], t, n, r), y(i) && (i = wr(i))) : St(i, e(this[o], t, n, r));
			return y(i) ? i : this
		}, ht.prototype.bind = ht.prototype.on, ht.prototype.unbind = ht.prototype.off
	}), Dt.prototype = {
		put: function(e, t) {
			this[_t(e, this.nextUid)] = t
		},
		get: function(e) {
			return this[_t(e, this.nextUid)]
		},
		remove: function(e) {
			var t = this[e = _t(e, this.nextUid)];
			return delete this[e], t
		}
	};
	var Gr = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
		Kr = /,/,
		Zr = /^\s*(_?)(\S+?)\1\s*$/,
		ei = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
		ti = r("$injector"),
		ni = r("$animate"),
		ri = ["$provide", function(e) {
			this.$$selectors = {}, this.register = function(t, n) {
				var r = t + "-animation";
				if (t && "." != t.charAt(0)) throw ni("notcsel", "Expecting class selector starting with '.' got '{0}'.", t);
				this.$$selectors[t.substr(1)] = r, e.factory(r, n)
			}, this.classNameFilter = function(e) {
				return 1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null), this.$$classNameFilter
			}, this.$get = ["$timeout", "$$asyncCallback", function(e, t) {
				function n(e) {
					e && t(e)
				}
				return {
					enter: function(e, t, r, i) {
						r ? r.after(e) : (t && t[0] || (t = r.parent()), t.append(e)), n(i)
					},
					leave: function(e, t) {
						e.remove(), n(t)
					},
					move: function(e, t, n, r) {
						this.enter(e, t, n, r)
					},
					addClass: function(e, t, r) {
						t = b(t) ? t : Dr(t) ? t.join(" ") : "", o(e, function(e) {
							Ct(e, t)
						}), n(r)
					},
					removeClass: function(e, t, r) {
						t = b(t) ? t : Dr(t) ? t.join(" ") : "", o(e, function(e) {
							xt(e, t)
						}), n(r)
					},
					setClass: function(e, t, r, i) {
						o(e, function(e) {
							Ct(e, t), xt(e, r)
						}), n(i)
					},
					enabled: h
				}
			}]
		}],
		ii = r("$compile");
	Ft.$inject = ["$provide", "$$sanitizeUriProvider"];
	var oi = /^(x[\:\-_]|data[\:\-_])/i,
		ai = r("$interpolate"),
		si = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
		ui = {
			http: 80,
			https: 443,
			ftp: 21
		},
		li = r("$location");
	pn.prototype = dn.prototype = fn.prototype = {
		$$html5: !1,
		$$replace: !1,
		absUrl: hn("$$absUrl"),
		url: function(e) {
			if (m(e)) return this.$$url;
			var t = si.exec(e);
			return t[1] && this.path(decodeURIComponent(t[1])), (t[2] || t[1]) && this.search(t[3] || ""), this.hash(t[5] || ""), this
		},
		protocol: hn("$$protocol"),
		host: hn("$$host"),
		port: hn("$$port"),
		path: vn("$$path", function(e) {
			return e = null !== e ? e.toString() : "", "/" == e.charAt(0) ? e : "/" + e
		}),
		search: function(e, t) {
			switch (arguments.length) {
			case 0:
				return this.$$search;
			case 1:
				if (b(e) || w(e)) e = e.toString(), this.$$search = Q(e);
				else {
					if (!$(e)) throw li("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
					o(e, function(t, n) {
						null == t && delete e[n]
					}), this.$$search = e
				}
				break;
			default:
				m(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
			}
			return this.$$compose(), this
		},
		hash: vn("$$hash", function(e) {
			return null !== e ? e.toString() : ""
		}),
		replace: function() {
			return this.$$replace = !0, this
		}
	};
	var ci, fi = r("$parse"),
		di = {},
		pi = Function.prototype.call,
		hi = Function.prototype.apply,
		vi = Function.prototype.bind,
		gi = {
			"null": function() {
				return null
			},
			"true": function() {
				return !0
			},
			"false": function() {
				return !1
			},
			undefined: h,
			"+": function(e, t, r, i) {
				return r = r(e, t), i = i(e, t), y(r) ? y(i) ? r + i : r : y(i) ? i : n
			},
			"-": function(e, t, n, r) {
				return n = n(e, t), r = r(e, t), (y(n) ? n : 0) - (y(r) ? r : 0)
			},
			"*": function(e, t, n, r) {
				return n(e, t) * r(e, t)
			},
			"/": function(e, t, n, r) {
				return n(e, t) / r(e, t)
			},
			"%": function(e, t, n, r) {
				return n(e, t) % r(e, t)
			},
			"^": function(e, t, n, r) {
				return n(e, t) ^ r(e, t)
			},
			"=": h,
			"===": function(e, t, n, r) {
				return n(e, t) === r(e, t)
			},
			"!==": function(e, t, n, r) {
				return n(e, t) !== r(e, t)
			},
			"==": function(e, t, n, r) {
				return n(e, t) == r(e, t)
			},
			"!=": function(e, t, n, r) {
				return n(e, t) != r(e, t)
			},
			"<": function(e, t, n, r) {
				return n(e, t) < r(e, t)
			},
			">": function(e, t, n, r) {
				return n(e, t) > r(e, t)
			},
			"<=": function(e, t, n, r) {
				return n(e, t) <= r(e, t)
			},
			">=": function(e, t, n, r) {
				return n(e, t) >= r(e, t)
			},
			"&&": function(e, t, n, r) {
				return n(e, t) && r(e, t)
			},
			"||": function(e, t, n, r) {
				return n(e, t) || r(e, t)
			},
			"&": function(e, t, n, r) {
				return n(e, t) & r(e, t)
			},
			"|": function(e, t, n, r) {
				return r(e, t)(e, t, n(e, t))
			},
			"!": function(e, t, n) {
				return !n(e, t)
			}
		},
		mi = {
			n: "\n",
			f: "\f",
			r: "\r",
			t: "	",
			v: "",
			"'": "'",
			'"': '"'
		},
		yi = function(e) {
			this.options = e
		};
	yi.prototype = {
		constructor: yi,
		lex: function(e) {
			for (this.text = e, this.index = 0, this.ch = n, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
				if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
				else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
				else if (this.isIdent(this.ch)) this.readIdent();
				else if (this.is("(){}[].,;:?")) this.tokens.push({
					index: this.index,
					text: this.ch
				}), this.index++;
				else {
					if (this.isWhitespace(this.ch)) {
						this.index++;
						continue
					}
					var t = this.ch + this.peek(),
						r = t + this.peek(2),
						i = gi[this.ch],
						o = gi[t],
						a = gi[r];
					a ? (this.tokens.push({
						index: this.index,
						text: r,
						fn: a
					}), this.index += 3) : o ? (this.tokens.push({
						index: this.index,
						text: t,
						fn: o
					}), this.index += 2) : i ? (this.tokens.push({
						index: this.index,
						text: this.ch,
						fn: i
					}), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
				}
				this.lastCh = this.ch
			}
			return this.tokens
		},
		is: function(e) {
			return -1 !== e.indexOf(this.ch)
		},
		was: function(e) {
			return -1 !== e.indexOf(this.lastCh)
		},
		peek: function(e) {
			var t = e || 1;
			return this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
		},
		isNumber: function(e) {
			return e >= "0" && "9" >= e
		},
		isWhitespace: function(e) {
			return " " === e || "\r" === e || "	" === e || "\n" === e || "" === e || " " === e
		},
		isIdent: function(e) {
			return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
		},
		isExpOperator: function(e) {
			return "-" === e || "+" === e || this.isNumber(e)
		},
		throwError: function(e, t, n) {
			n = n || this.index;
			var r = y(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
			throw fi("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
		},
		readNumber: function() {
			for (var e = "", t = this.index; this.index < this.text.length;) {
				var n = vr(this.text.charAt(this.index));
				if ("." == n || this.isNumber(n)) e += n;
				else {
					var r = this.peek();
					if ("e" == n && this.isExpOperator(r)) e += n;
					else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n;
					else {
						if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
						this.throwError("Invalid exponent")
					}
				}
				this.index++
			}
			e = 1 * e, this.tokens.push({
				index: t,
				text: e,
				literal: !0,
				constant: !0,
				fn: function() {
					return e
				}
			})
		},
		readIdent: function() {
			for (var e, t, n, r, i = this, o = "", a = this.index; this.index < this.text.length && (r = this.text.charAt(this.index), "." === r || this.isIdent(r) || this.isNumber(r));)"." === r && (e = this.index), o += r, this.index++;
			if (e) for (t = this.index; t < this.text.length;) {
				if (r = this.text.charAt(t), "(" === r) {
					n = o.substr(e - a + 1), o = o.substr(0, e - a), this.index = t;
					break
				}
				if (!this.isWhitespace(r)) break;
				t++
			}
			var s = {
				index: a,
				text: o
			};
			if (gi.hasOwnProperty(o)) s.fn = gi[o], s.literal = !0, s.constant = !0;
			else {
				var u = Tn(o, this.options, this.text);
				s.fn = f(function(e, t) {
					return u(e, t)
				}, {
					assign: function(e, t) {
						return wn(e, o, t, i.text, i.options)
					}
				})
			}
			this.tokens.push(s), n && (this.tokens.push({
				index: e,
				text: "."
			}), this.tokens.push({
				index: e + 1,
				text: n
			}))
		},
		readString: function(e) {
			var t = this.index;
			this.index++;
			for (var n = "", r = e, i = !1; this.index < this.text.length;) {
				var o = this.text.charAt(this.index);
				if (r += o, i) {
					if ("u" === o) {
						var a = this.text.substring(this.index + 1, this.index + 5);
						a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
					} else {
						var s = mi[o];
						n += s || o
					}
					i = !1
				} else if ("\\" === o) i = !0;
				else {
					if (o === e) return this.index++, void this.tokens.push({
						index: t,
						text: r,
						string: n,
						literal: !0,
						constant: !0,
						fn: function() {
							return n
						}
					});
					n += o
				}
				this.index++
			}
			this.throwError("Unterminated quote", t)
		}
	};
	var $i = function(e, t, n) {
			this.lexer = e, this.$filter = t, this.options = n
		};
	$i.ZERO = f(function() {
		return 0
	}, {
		constant: !0
	}), $i.prototype = {
		constructor: $i,
		parse: function(e) {
			this.text = e, this.tokens = this.lexer.lex(e);
			var t = this.statements();
			return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t.literal = !! t.literal, t.constant = !! t.constant, t
		},
		primary: function() {
			var e;
			if (this.expect("(")) e = this.filterChain(), this.consume(")");
			else if (this.expect("[")) e = this.arrayDeclaration();
			else if (this.expect("{")) e = this.object();
			else {
				var t = this.expect();
				e = t.fn, e || this.throwError("not a primary expression", t), e.literal = !! t.literal, e.constant = !! t.constant
			}
			for (var n, r; n = this.expect("(", "[", ".");)"(" === n.text ? (e = this.functionCall(e, r), r = null) : "[" === n.text ? (r = e, e = this.objectIndex(e)) : "." === n.text ? (r = e, e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
			return e
		},
		throwError: function(e, t) {
			throw fi("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
		},
		peekToken: function() {
			if (0 === this.tokens.length) throw fi("ueoe", "Unexpected end of expression: {0}", this.text);
			return this.tokens[0]
		},
		peek: function(e, t, n, r) {
			if (this.tokens.length > 0) {
				var i = this.tokens[0],
					o = i.text;
				if (o === e || o === t || o === n || o === r || !e && !t && !n && !r) return i
			}
			return !1
		},
		expect: function(e, t, n, r) {
			var i = this.peek(e, t, n, r);
			return i ? (this.tokens.shift(), i) : !1
		},
		consume: function(e) {
			this.expect(e) || this.throwError("is unexpected, expecting [" + e + "]", this.peek())
		},
		unaryFn: function(e, t) {
			return f(function(n, r) {
				return e(n, r, t)
			}, {
				constant: t.constant
			})
		},
		ternaryFn: function(e, t, n) {
			return f(function(r, i) {
				return e(r, i) ? t(r, i) : n(r, i)
			}, {
				constant: e.constant && t.constant && n.constant
			})
		},
		binaryFn: function(e, t, n) {
			return f(function(r, i) {
				return t(r, i, e, n)
			}, {
				constant: e.constant && n.constant
			})
		},
		statements: function() {
			for (var e = [];;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.filterChain()), !this.expect(";")) return 1 === e.length ? e[0] : function(t, n) {
				for (var r, i = 0; i < e.length; i++) {
					var o = e[i];
					o && (r = o(t, n))
				}
				return r
			}
		},
		filterChain: function() {
			for (var e, t = this.expression();;) {
				if (!(e = this.expect("|"))) return t;
				t = this.binaryFn(t, e.fn, this.filter())
			}
		},
		filter: function() {
			for (var e = this.expect(), t = this.$filter(e.text), n = [];;) {
				if (!(e = this.expect(":"))) {
					var r = function(e, r, i) {
							for (var o = [i], a = 0; a < n.length; a++) o.push(n[a](e, r));
							return t.apply(e, o)
						};
					return function() {
						return r
					}
				}
				n.push(this.expression())
			}
		},
		expression: function() {
			return this.assignment()
		},
		assignment: function() {
			var e, t, n = this.ternary();
			return (t = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, t.index) + "] can not be assigned to", t), e = this.ternary(), function(t, r) {
				return n.assign(t, e(t, r), r)
			}) : n
		},
		ternary: function() {
			var e, t, n = this.logicalOR();
			return (t = this.expect("?")) ? (e = this.assignment(), (t = this.expect(":")) ? this.ternaryFn(n, e, this.assignment()) : void this.throwError("expected :", t)) : n
		},
		logicalOR: function() {
			for (var e, t = this.logicalAND();;) {
				if (!(e = this.expect("||"))) return t;
				t = this.binaryFn(t, e.fn, this.logicalAND())
			}
		},
		logicalAND: function() {
			var e, t = this.equality();
			return (e = this.expect("&&")) && (t = this.binaryFn(t, e.fn, this.logicalAND())), t
		},
		equality: function() {
			var e, t = this.relational();
			return (e = this.expect("==", "!=", "===", "!==")) && (t = this.binaryFn(t, e.fn, this.equality())), t
		},
		relational: function() {
			var e, t = this.additive();
			return (e = this.expect("<", ">", "<=", ">=")) && (t = this.binaryFn(t, e.fn, this.relational())), t
		},
		additive: function() {
			for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = this.binaryFn(t, e.fn, this.multiplicative());
			return t
		},
		multiplicative: function() {
			for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = this.binaryFn(t, e.fn, this.unary());
			return t
		},
		unary: function() {
			var e;
			return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn($i.ZERO, e.fn, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.fn, this.unary()) : this.primary()
		},
		fieldAccess: function(e) {
			var t = this,
				n = this.expect().text,
				r = Tn(n, this.options, this.text);
			return f(function(t, n, i) {
				return r(i || e(t, n))
			}, {
				assign: function(r, i, o) {
					var a = e(r, o);
					return a || e.assign(r, a = {}), wn(a, n, i, t.text, t.options)
				}
			})
		},
		objectIndex: function(e) {
			var t = this,
				r = this.expression();
			return this.consume("]"), f(function(i, o) {
				var a, s, u = e(i, o),
					l = r(i, o);
				return yn(l, t.text), u ? (a = $n(u[l], t.text), a && a.then && t.options.unwrapPromises && (s = a, "$$v" in a || (s.$$v = n, s.then(function(e) {
					s.$$v = e
				})), a = a.$$v), a) : n
			}, {
				assign: function(n, i, o) {
					var a = yn(r(n, o), t.text),
						s = $n(e(n, o), t.text);
					return s || e.assign(n, s = {}), s[a] = i
				}
			})
		},
		functionCall: function(e, t) {
			var n = [];
			if (")" !== this.peekToken().text) do n.push(this.expression());
			while (this.expect(","));
			this.consume(")");
			var r = this;
			return function(i, o) {
				for (var a = [], s = t ? t(i, o) : i, u = 0; u < n.length; u++) a.push($n(n[u](i, o), r.text));
				var l = e(i, o, s) || h;
				$n(s, r.text), bn(l, r.text);
				var c = l.apply ? l.apply(s, a) : l(a[0], a[1], a[2], a[3], a[4]);
				return $n(c, r.text)
			}
		},
		arrayDeclaration: function() {
			var e = [],
				t = !0;
			if ("]" !== this.peekToken().text) do {
				if (this.peek("]")) break;
				var n = this.expression();
				e.push(n), n.constant || (t = !1)
			} while (this.expect(","));
			return this.consume("]"), f(function(t, n) {
				for (var r = [], i = 0; i < e.length; i++) r.push(e[i](t, n));
				return r
			}, {
				literal: !0,
				constant: t
			})
		},
		object: function() {
			var e = [],
				t = !0;
			if ("}" !== this.peekToken().text) do {
				if (this.peek("}")) break;
				var n = this.expect(),
					r = n.string || n.text;
				this.consume(":");
				var i = this.expression();
				e.push({
					key: r,
					value: i
				}), i.constant || (t = !1)
			} while (this.expect(","));
			return this.consume("}"), f(function(t, n) {
				for (var r = {}, i = 0; i < e.length; i++) {
					var o = e[i];
					r[o.key] = o.value(t, n)
				}
				return r
			}, {
				literal: !0,
				constant: t
			})
		}
	};
	var bi = {},
		wi = {},
		xi = r("$sce"),
		Ci = {
			HTML: "html",
			CSS: "css",
			URL: "url",
			RESOURCE_URL: "resourceUrl",
			JS: "js"
		},
		Si = t.createElement("a"),
		Ti = In(e.location.href, !0);
	Vn.$inject = ["$provide"], Bn.$inject = ["$locale"], zn.$inject = ["$locale"];
	var Ei = ".",
		Ai = {
			yyyy: Xn("FullYear", 4),
			yy: Xn("FullYear", 2, 0, !0),
			y: Xn("FullYear", 1),
			MMMM: Yn("Month"),
			MMM: Yn("Month", !0),
			MM: Xn("Month", 2, 1),
			M: Xn("Month", 1, 1),
			dd: Xn("Date", 2),
			d: Xn("Date", 1),
			HH: Xn("Hours", 2),
			H: Xn("Hours", 1),
			hh: Xn("Hours", 2, -12),
			h: Xn("Hours", 1, -12),
			mm: Xn("Minutes", 2),
			m: Xn("Minutes", 1),
			ss: Xn("Seconds", 2),
			s: Xn("Seconds", 1),
			sss: Xn("Milliseconds", 3),
			EEEE: Yn("Day"),
			EEE: Yn("Day", !0),
			a: Gn,
			Z: Jn
		},
		ki = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
		Ni = /^\-?\d+$/;
	Kn.$inject = ["$locale"];
	var _i = g(vr),
		Di = g(mr);
	tr.$inject = ["$parse"];
	var Mi = g({
		restrict: "E",
		compile: function(e, n) {
			return 8 >= br && (n.href || n.name || n.$set("href", ""), e.append(t.createComment("IE fix"))), n.href || n.xlinkHref || n.name ? void 0 : function(e, t) {
				var n = "[object SVGAnimatedString]" === Ar.call(t.prop("href")) ? "xlink:href" : "href";
				t.on("click", function(e) {
					t.attr(n) || e.preventDefault()
				})
			}
		}
	}),
		Oi = {};
	o(Yr, function(e, t) {
		if ("multiple" != e) {
			var n = Ht("ng-" + t);
			Oi[n] = function() {
				return {
					priority: 100,
					link: function(e, r, i) {
						e.$watch(i[n], function(e) {
							i.$set(t, !! e)
						})
					}
				}
			}
		}
	}), o(["src", "srcset", "href"], function(e) {
		var t = Ht("ng-" + e);
		Oi[t] = function() {
			return {
				priority: 99,
				link: function(n, r, i) {
					var o = e,
						a = e;
					"href" === e && "[object SVGAnimatedString]" === Ar.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(t, function(t) {
						return t ? (i.$set(a, t), void(br && o && r.prop(o, i[a]))) : void("href" === e && i.$set(a, null))
					})
				}
			}
		}
	});
	var Pi = {
		$addControl: h,
		$removeControl: h,
		$setValidity: h,
		$setDirty: h,
		$setPristine: h
	};
	rr.$inject = ["$element", "$attrs", "$scope", "$animate"];
	var ji = function(e) {
			return ["$timeout", function(t) {
				var r = {
					name: "form",
					restrict: e ? "EAC" : "E",
					controller: rr,
					compile: function() {
						return {
							pre: function(e, r, i, o) {
								if (!i.action) {
									var a = function(e) {
											e.preventDefault ? e.preventDefault() : e.returnValue = !1
										};
									qr(r[0], "submit", a), r.on("$destroy", function() {
										t(function() {
											Ir(r[0], "submit", a)
										}, 0, !1)
									})
								}
								var s = r.parent().controller("form"),
									u = i.name || i.ngForm;
								u && wn(e, u, o, u), s && r.on("$destroy", function() {
									s.$removeControl(o), u && wn(e, u, n, u), f(o, Pi)
								})
							}
						}
					}
				};
				return r
			}]
		},
		Ri = ji(),
		Li = ji(!0),
		qi = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
		Ii = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
		Fi = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
		Hi = {
			text: sr,
			number: ur,
			url: lr,
			email: cr,
			radio: fr,
			checkbox: dr,
			hidden: h,
			button: h,
			submit: h,
			reset: h,
			file: h
		},
		Vi = ["badInput"],
		Wi = ["$browser", "$sniffer", function(e, t) {
			return {
				restrict: "E",
				require: "?ngModel",
				link: function(n, r, i, o) {
					o && (Hi[vr(i.type)] || Hi.text)(n, r, i, o, t, e)
				}
			}
		}],
		Bi = "ng-valid",
		zi = "ng-invalid",
		Ui = "ng-pristine",
		Qi = "ng-dirty",
		Xi = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(e, t, n, i, a, s) {
			function u(e, t) {
				t = t ? "-" + Z(t, "-") : "", s.removeClass(i, (e ? zi : Bi) + t), s.addClass(i, (e ? Bi : zi) + t)
			}
			this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = n.name;
			var l = a(n.ngModel),
				c = l.assign;
			if (!c) throw r("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", n.ngModel, z(i));
			this.$render = h, this.$isEmpty = function(e) {
				return m(e) || "" === e || null === e || e !== e
			};
			var f = i.inheritedData("$formController") || Pi,
				d = 0,
				p = this.$error = {};
			i.addClass(Ui), u(!0), this.$setValidity = function(e, t) {
				p[e] !== !t && (t ? (p[e] && d--, d || (u(!0), this.$valid = !0, this.$invalid = !1)) : (u(!1), this.$invalid = !0, this.$valid = !1, d++), p[e] = !t, u(t, e), f.$setValidity(e, t, this))
			}, this.$setPristine = function() {
				this.$dirty = !1, this.$pristine = !0, s.removeClass(i, Qi), s.addClass(i, Ui)
			}, this.$setViewValue = function(n) {
				this.$viewValue = n, this.$pristine && (this.$dirty = !0, this.$pristine = !1, s.removeClass(i, Ui), s.addClass(i, Qi), f.$setDirty()), o(this.$parsers, function(e) {
					n = e(n)
				}), this.$modelValue !== n && (this.$modelValue = n, c(e, n), o(this.$viewChangeListeners, function(e) {
					try {
						e()
					} catch (n) {
						t(n)
					}
				}))
			};
			var v = this;
			e.$watch(function() {
				var t = l(e);
				if (v.$modelValue !== t) {
					var n = v.$formatters,
						r = n.length;
					for (v.$modelValue = t; r--;) t = n[r](t);
					v.$viewValue !== t && (v.$viewValue = t, v.$render())
				}
				return t
			})
		}],
		Yi = function() {
			return {
				require: ["ngModel", "^?form"],
				controller: Xi,
				link: function(e, t, n, r) {
					var i = r[0],
						o = r[1] || Pi;
					o.$addControl(i), e.$on("$destroy", function() {
						o.$removeControl(i)
					})
				}
			}
		},
		Ji = g({
			require: "ngModel",
			link: function(e, t, n, r) {
				r.$viewChangeListeners.push(function() {
					e.$eval(n.ngChange)
				})
			}
		}),
		Gi = function() {
			return {
				require: "?ngModel",
				link: function(e, t, n, r) {
					if (r) {
						n.required = !0;
						var i = function(e) {
								return n.required && r.$isEmpty(e) ? void r.$setValidity("required", !1) : (r.$setValidity("required", !0), e)
							};
						r.$formatters.push(i), r.$parsers.unshift(i), n.$observe("required", function() {
							i(r.$viewValue)
						})
					}
				}
			}
		},
		Ki = function() {
			return {
				require: "ngModel",
				link: function(e, t, r, i) {
					var a = /\/(.*)\//.exec(r.ngList),
						s = a && new RegExp(a[1]) || r.ngList || ",",
						u = function(e) {
							if (!m(e)) {
								var t = [];
								return e && o(e.split(s), function(e) {
									e && t.push(Mr(e))
								}), t
							}
						};
					i.$parsers.push(u), i.$formatters.push(function(e) {
						return Dr(e) ? e.join(", ") : n
					}), i.$isEmpty = function(e) {
						return !e || !e.length
					}
				}
			}
		},
		Zi = /^(true|false|\d+)$/,
		eo = function() {
			return {
				priority: 100,
				compile: function(e, t) {
					return Zi.test(t.ngValue) ?
					function(e, t, n) {
						n.$set("value", e.$eval(n.ngValue))
					} : function(e, t, n) {
						e.$watch(n.ngValue, function(e) {
							n.$set("value", e)
						})
					}
				}
			}
		},
		to = nr({
			compile: function(e) {
				return e.addClass("ng-binding"), function(e, t, r) {
					t.data("$binding", r.ngBind), e.$watch(r.ngBind, function(e) {
						t.text(e == n ? "" : e)
					})
				}
			}
		}),
		no = ["$interpolate", function(e) {
			return function(t, n, r) {
				var i = e(n.attr(r.$attr.ngBindTemplate));
				n.addClass("ng-binding").data("$binding", i), r.$observe("ngBindTemplate", function(e) {
					n.text(e)
				})
			}
		}],
		ro = ["$sce", "$parse", function(e, t) {
			return {
				compile: function(n) {
					return n.addClass("ng-binding"), function(n, r, i) {
						function o() {
							return (a(n) || "").toString()
						}
						r.data("$binding", i.ngBindHtml);
						var a = t(i.ngBindHtml);
						n.$watch(o, function() {
							r.html(e.getTrustedHtml(a(n)) || "")
						})
					}
				}
			}
		}],
		io = pr("", !0),
		oo = pr("Odd", 0),
		ao = pr("Even", 1),
		so = nr({
			compile: function(e, t) {
				t.$set("ngCloak", n), e.removeClass("ng-cloak")
			}
		}),
		uo = [function() {
			return {
				scope: !0,
				controller: "@",
				priority: 500
			}
		}],
		lo = {},
		co = {
			blur: !0,
			focus: !0
		};
	o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
		var t = Ht("ng-" + e);
		lo[t] = ["$parse", "$rootScope", function(n, r) {
			return {
				compile: function(i, o) {
					var a = n(o[t], !0);
					return function(t, n) {
						n.on(e, function(n) {
							var i = function() {
									a(t, {
										$event: n
									})
								};
							co[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
						})
					}
				}
			}
		}]
	});
	var fo = ["$animate", function(e) {
		return {
			transclude: "element",
			priority: 600,
			terminal: !0,
			restrict: "A",
			$$tlb: !0,
			link: function(n, r, i, o, a) {
				var s, u, l;
				n.$watch(i.ngIf, function(o) {
					B(o) ? u || (u = n.$new(), a(u, function(n) {
						n[n.length++] = t.createComment(" end ngIf: " + i.ngIf + " "), s = {
							clone: n
						}, e.enter(n, r.parent(), r)
					})) : (l && (l.remove(), l = null), u && (u.$destroy(), u = null), s && (l = ot(s.clone), e.leave(l, function() {
						l = null
					}), s = null))
				})
			}
		}
	}],
		po = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(e, t, n, r, i) {
			return {
				restrict: "ECA",
				priority: 400,
				terminal: !0,
				transclude: "element",
				controller: Nr.noop,
				compile: function(o, a) {
					var s = a.ngInclude || a.src,
						u = a.onload || "",
						l = a.autoscroll;
					return function(o, a, c, f, d) {
						var p, h, v, g = 0,
							m = function() {
								h && (h.remove(), h = null), p && (p.$destroy(), p = null), v && (r.leave(v, function() {
									h = null
								}), h = v, v = null)
							};
						o.$watch(i.parseAsResourceUrl(s), function(i) {
							var s = function() {
									!y(l) || l && !o.$eval(l) || n()
								},
								c = ++g;
							i ? (e.get(i, {
								cache: t
							}).success(function(e) {
								if (c === g) {
									var t = o.$new();
									f.template = e;
									var n = d(t, function(e) {
										m(), r.enter(e, null, a, s)
									});
									p = t, v = n, p.$emit("$includeContentLoaded"), o.$eval(u)
								}
							}).error(function() {
								c === g && m()
							}), o.$emit("$includeContentRequested")) : (m(), f.template = null)
						})
					}
				}
			}
		}],
		ho = ["$compile", function(e) {
			return {
				restrict: "ECA",
				priority: -400,
				require: "ngInclude",
				link: function(t, n, r, i) {
					n.html(i.template), e(n.contents())(t)
				}
			}
		}],
		vo = nr({
			priority: 450,
			compile: function() {
				return {
					pre: function(e, t, n) {
						e.$eval(n.ngInit)
					}
				}
			}
		}),
		go = nr({
			terminal: !0,
			priority: 1e3
		}),
		mo = ["$locale", "$interpolate", function(e, t) {
			var n = /{}/g;
			return {
				restrict: "EA",
				link: function(r, i, a) {
					var s = a.count,
						u = a.$attr.when && i.attr(a.$attr.when),
						l = a.offset || 0,
						c = r.$eval(u) || {},
						f = {},
						d = t.startSymbol(),
						p = t.endSymbol(),
						h = /^when(Minus)?(.+)$/;
					o(a, function(e, t) {
						h.test(t) && (c[vr(t.replace("when", "").replace("Minus", "-"))] = i.attr(a.$attr[t]))
					}), o(c, function(e, r) {
						f[r] = t(e.replace(n, d + s + "-" + l + p))
					}), r.$watch(function() {
						var t = parseFloat(r.$eval(s));
						return isNaN(t) ? "" : (t in c || (t = e.pluralCat(t - l)), f[t](r, i, !0))
					}, function(e) {
						i.text(e)
					})
				}
			}
		}],
		yo = ["$parse", "$animate", function(e, n) {
			function a(e) {
				return e.clone[0]
			}
			function s(e) {
				return e.clone[e.clone.length - 1]
			}
			var u = "$$NG_REMOVED",
				l = r("ngRepeat");
			return {
				transclude: "element",
				priority: 1e3,
				terminal: !0,
				$$tlb: !0,
				link: function(r, c, f, d, p) {
					var h, v, g, m, y, $, b, w, x, C = f.ngRepeat,
						S = C.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
						T = {
							$id: _t
						};
					if (!S) throw l("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", C);
					if ($ = S[1], b = S[2], h = S[3], h ? (v = e(h), g = function(e, t, n) {
						return x && (T[x] = e), T[w] = t, T.$index = n, v(r, T)
					}) : (m = function(e, t) {
						return _t(t)
					}, y = function(e) {
						return e
					}), S = $.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !S) throw l("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", $);
					w = S[3] || S[1], x = S[2];
					var E = {};
					r.$watchCollection(b, function(e) {
						var f, d, h, v, $, b, S, T, A, k, N, _, D = c[0],
							M = {},
							O = [];
						if (i(e)) k = e, A = g || m;
						else {
							A = g || y, k = [];
							for (b in e) e.hasOwnProperty(b) && "$" != b.charAt(0) && k.push(b);
							k.sort()
						}
						for (v = k.length, d = O.length = k.length, f = 0; d > f; f++) if (b = e === k ? f : k[f], S = e[b], T = A(b, S, f), rt(T, "`track by` id"), E.hasOwnProperty(T)) N = E[T], delete E[T], M[T] = N, O[f] = N;
						else {
							if (M.hasOwnProperty(T)) throw o(O, function(e) {
								e && e.scope && (E[e.id] = e)
							}), l("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", C, T, V(S));
							O[f] = {
								id: T
							}, M[T] = !1
						}
						for (b in E) E.hasOwnProperty(b) && (N = E[b], _ = ot(N.clone), n.leave(_), o(_, function(e) {
							e[u] = !0
						}), N.scope.$destroy());
						for (f = 0, d = k.length; d > f; f++) {
							if (b = e === k ? f : k[f], S = e[b], N = O[f], O[f - 1] && (D = s(O[f - 1])), N.scope) {
								$ = N.scope, h = D;
								do h = h.nextSibling;
								while (h && h[u]);
								a(N) != h && n.move(ot(N.clone), null, wr(D)), D = s(N)
							} else $ = r.$new();
							$[w] = S, x && ($[x] = b), $.$index = f, $.$first = 0 === f, $.$last = f === v - 1, $.$middle = !($.$first || $.$last), $.$odd = !($.$even = 0 === (1 & f)), N.scope || p($, function(e) {
								e[e.length++] = t.createComment(" end ngRepeat: " + C + " "), n.enter(e, null, wr(D)), D = e, N.scope = $, N.clone = e, M[N.id] = N
							})
						}
						E = M
					})
				}
			}
		}],
		$o = ["$animate", function(e) {
			return function(t, n, r) {
				t.$watch(r.ngShow, function(t) {
					e[B(t) ? "removeClass" : "addClass"](n, "ng-hide")
				})
			}
		}],
		bo = ["$animate", function(e) {
			return function(t, n, r) {
				t.$watch(r.ngHide, function(t) {
					e[B(t) ? "addClass" : "removeClass"](n, "ng-hide")
				})
			}
		}],
		wo = nr(function(e, t, n) {
			e.$watch(n.ngStyle, function(e, n) {
				n && e !== n && o(n, function(e, n) {
					t.css(n, "")
				}), e && t.css(e)
			}, !0)
		}),
		xo = ["$animate", function(e) {
			return {
				restrict: "EA",
				require: "ngSwitch",
				controller: ["$scope", function() {
					this.cases = {}
				}],
				link: function(t, n, r, i) {
					var a = r.ngSwitch || r.on,
						s = [],
						u = [],
						l = [],
						c = [];
					t.$watch(a, function(n) {
						var a, f;
						for (a = 0, f = l.length; f > a; ++a) l[a].remove();
						for (l.length = 0, a = 0, f = c.length; f > a; ++a) {
							var d = u[a];
							c[a].$destroy(), l[a] = d, e.leave(d, function() {
								l.splice(a, 1)
							})
						}
						u.length = 0, c.length = 0, (s = i.cases["!" + n] || i.cases["?"]) && (t.$eval(r.change), o(s, function(n) {
							var r = t.$new();
							c.push(r), n.transclude(r, function(t) {
								var r = n.element;
								u.push(t), e.enter(t, r.parent(), r)
							})
						}))
					})
				}
			}
		}],
		Co = nr({
			transclude: "element",
			priority: 800,
			require: "^ngSwitch",
			link: function(e, t, n, r, i) {
				r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
					transclude: i,
					element: t
				})
			}
		}),
		So = nr({
			transclude: "element",
			priority: 800,
			require: "^ngSwitch",
			link: function(e, t, n, r, i) {
				r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
					transclude: i,
					element: t
				})
			}
		}),
		To = nr({
			link: function(e, t, n, i, o) {
				if (!o) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", z(t));
				o(function(e) {
					t.empty(), t.append(e)
				})
			}
		}),
		Eo = ["$templateCache", function(e) {
			return {
				restrict: "E",
				terminal: !0,
				compile: function(t, n) {
					if ("text/ng-template" == n.type) {
						var r = n.id,
							i = t[0].text;
						e.put(r, i)
					}
				}
			}
		}],
		Ao = r("ngOptions"),
		ko = g({
			terminal: !0
		}),
		No = ["$compile", "$parse", function(e, r) {
			var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
				s = {
					$setViewValue: h
				};
			return {
				restrict: "E",
				require: ["select", "?ngModel"],
				controller: ["$element", "$scope", "$attrs", function(e, t, n) {
					var r, i, o = this,
						a = {},
						u = s;
					o.databound = n.ngModel, o.init = function(e, t, n) {
						u = e, r = t, i = n
					}, o.addOption = function(t) {
						rt(t, '"option value"'), a[t] = !0, u.$viewValue == t && (e.val(t), i.parent() && i.remove())
					}, o.removeOption = function(e) {
						this.hasOption(e) && (delete a[e], u.$viewValue == e && this.renderUnknownOption(e))
					}, o.renderUnknownOption = function(t) {
						var n = "? " + _t(t) + " ?";
						i.val(n), e.prepend(i), e.val(n), i.prop("selected", !0)
					}, o.hasOption = function(e) {
						return a.hasOwnProperty(e)
					}, t.$on("$destroy", function() {
						o.renderUnknownOption = h
					})
				}],
				link: function(s, u, l, c) {
					function f(e, t, n, r) {
						n.$render = function() {
							var e = n.$viewValue;
							r.hasOption(e) ? (S.parent() && S.remove(), t.val(e), "" === e && h.prop("selected", !0)) : m(e) && h ? t.val("") : r.renderUnknownOption(e)
						}, t.on("change", function() {
							e.$apply(function() {
								S.parent() && S.remove(), n.$setViewValue(t.val())
							})
						})
					}
					function d(e, t, n) {
						var r;
						n.$render = function() {
							var e = new Dt(n.$viewValue);
							o(t.find("option"), function(t) {
								t.selected = y(e.get(t.value))
							})
						}, e.$watch(function() {
							L(r, n.$viewValue) || (r = R(n.$viewValue), n.$render())
						}), t.on("change", function() {
							e.$apply(function() {
								var e = [];
								o(t.find("option"), function(t) {
									t.selected && e.push(t.value)
								}), n.$setViewValue(e)
							})
						})
					}
					function p(t, o, s) {
						function u() {
							var e = !1;
							if ($) {
								var n = s.$modelValue;
								if (T && Dr(n)) {
									e = new Dt([]);
									for (var r = {}, i = 0; i < n.length; i++) r[d] = n[i], e.put(T(t, r), n[i])
								} else e = new Dt(n)
							}
							return e
						}
						function l() {
							var e, n, r, i, l, c, b, S, A, k, N, _, D, M, O, P = {
								"": []
							},
								j = [""],
								R = s.$modelValue,
								L = m(t) || [],
								q = p ? a(L) : L,
								I = {},
								F = u();
							for (N = 0; A = q.length, A > N; N++) {
								if (b = N, p) {
									if (b = q[N], "$" === b.charAt(0)) continue;
									I[p] = b
								}
								if (I[d] = L[b], e = h(t, I) || "", (n = P[e]) || (n = P[e] = [], j.push(e)), $) _ = y(F.remove(T ? T(t, I) : g(t, I)));
								else {
									if (T) {
										var H = {};
										H[d] = R, _ = T(t, H) === T(t, I)
									} else _ = R === g(t, I);
									F = F || _
								}
								O = f(t, I), O = y(O) ? O : "", n.push({
									id: T ? T(t, I) : p ? q[N] : N,
									label: O,
									selected: _
								})
							}
							for ($ || (w || null === R ? P[""].unshift({
								id: "",
								label: "",
								selected: !F
							}) : F || P[""].unshift({
								id: "?",
								label: "",
								selected: !0
							})), k = 0, S = j.length; S > k; k++) {
								for (e = j[k], n = P[e], E.length <= k ? (i = {
									element: C.clone().attr("label", e),
									label: n.label
								}, l = [i], E.push(l), o.append(i.element)) : (l = E[k], i = l[0], i.label != e && i.element.attr("label", i.label = e)), D = null, N = 0, A = n.length; A > N; N++) r = n[N], (c = l[N + 1]) ? (D = c.element, c.label !== r.label && (D.text(c.label = r.label), D.prop("label", c.label)), c.id !== r.id && D.val(c.id = r.id), D[0].selected !== r.selected && (D.prop("selected", c.selected = r.selected), br && D.prop("selected", c.selected))) : ("" === r.id && w ? M = w : (M = x.clone()).val(r.id).prop("selected", r.selected).attr("selected", r.selected).prop("label", r.label).text(r.label), l.push(c = {
									element: M,
									label: r.label,
									id: r.id,
									selected: r.selected
								}), v.addOption(r.label, M), D ? D.after(M) : i.element.append(M), D = M);
								for (N++; l.length > N;) r = l.pop(), v.removeOption(r.label), r.element.remove()
							}
							for (; E.length > k;) E.pop()[0].element.remove()
						}
						var c;
						if (!(c = b.match(i))) throw Ao("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", b, z(o));
						var f = r(c[2] || c[1]),
							d = c[4] || c[6],
							p = c[5],
							h = r(c[3] || ""),
							g = r(c[2] ? c[1] : d),
							m = r(c[7]),
							S = c[8],
							T = S ? r(c[8]) : null,
							E = [
								[{
									element: o,
									label: ""
								}]
							];
						w && (e(w)(t), w.removeClass("ng-scope"), w.remove()), o.empty(), o.on("change", function() {
							t.$apply(function() {
								var e, r, i, a, u, c, f, h, v, y = m(t) || [],
									b = {};
								if ($) {
									for (i = [], c = 0, h = E.length; h > c; c++) for (e = E[c], u = 1, f = e.length; f > u; u++) if ((a = e[u].element)[0].selected) {
										if (r = a.val(), p && (b[p] = r), T) for (v = 0; v < y.length && (b[d] = y[v], T(t, b) != r); v++);
										else b[d] = y[r];
										i.push(g(t, b))
									}
								} else if (r = o.val(), "?" == r) i = n;
								else if ("" === r) i = null;
								else if (T) {
									for (v = 0; v < y.length; v++) if (b[d] = y[v], T(t, b) == r) {
										i = g(t, b);
										break
									}
								} else b[d] = y[r], p && (b[p] = r), i = g(t, b);
								s.$setViewValue(i), l()
							})
						}), s.$render = l, t.$watchCollection(m, l), t.$watchCollection(function() {
							var e = {},
								n = m(t);
							if (n) {
								for (var r = new Array(n.length), i = 0, o = n.length; o > i; i++) e[d] = n[i], r[i] = f(t, e);
								return r
							}
						}, l), $ && t.$watchCollection(function() {
							return s.$modelValue
						}, l)
					}
					if (c[1]) {
						for (var h, v = c[0], g = c[1], $ = l.multiple, b = l.ngOptions, w = !1, x = wr(t.createElement("option")), C = wr(t.createElement("optgroup")), S = x.clone(), T = 0, E = u.children(), A = E.length; A > T; T++) if ("" === E[T].value) {
							h = w = E.eq(T);
							break
						}
						v.init(g, w, S), $ && (g.$isEmpty = function(e) {
							return !e || 0 === e.length
						}), b ? p(s, u, g) : $ ? d(s, u, g) : f(s, u, g, v)
					}
				}
			}
		}],
		_o = ["$interpolate", function(e) {
			var t = {
				addOption: h,
				removeOption: h
			};
			return {
				restrict: "E",
				priority: 100,
				compile: function(n, r) {
					if (m(r.value)) {
						var i = e(n.text(), !0);
						i || r.$set("value", n.text())
					}
					return function(e, n, r) {
						var o = "$selectController",
							a = n.parent(),
							s = a.data(o) || a.parent().data(o);
						s && s.databound ? n.prop("selected", !1) : s = t, i ? e.$watch(i, function(e, t) {
							r.$set("value", e), e !== t && s.removeOption(t), s.addOption(e)
						}) : s.addOption(r.value), n.on("$destroy", function() {
							s.removeOption(r.value)
						})
					}
				}
			}
		}],
		Do = g({
			restrict: "E",
			terminal: !0
		});
	return e.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (et(), st(Nr), void wr(t).ready(function() {
		G(t, K)
	}))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'),

!
function(e, t, n) { // 基于 angular 定义一堆模块
	"use strict";
	t.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function() {
		return function(e, n, r) {
			r = r.ngAnimateChildren, t.isString(r) && 0 === r.length ? n.data("$$ngAnimateChildren", !0) : e.$watch(r, function(e) {
				n.data("$$ngAnimateChildren", !! e)
			})
		}
	}).factory("$$animateReflow", ["$$rAF", "$document", function(e) {
		return function(t) {
			return e(function() {
				t()
			})
		}
	}]).config(["$provide", "$animateProvider", function(r, i) {
		function o(e) {
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				if (n.nodeType == c) return n
			}
		}
		function a(e) {
			return t.element(o(e))
		}
		var s = t.noop,
			u = t.forEach,
			l = i.$$selectors,
			c = 1,
			f = "$$ngAnimateState",
			d = "$$ngAnimateChildren",
			p = "ng-animate",
			h = {
				running: !0
			};
		r.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", function(e, n, r, c, v, g) {
			function m(e) {
				var t = e.data(f) || {};
				t.running = !0, e.data(f, t)
			}
			function y(e) {
				if (e) {
					var t = [],
						i = {};
					e = e.substr(1).split("."), (r.transitions || r.animations) && t.push(n.get(l[""]));
					for (var o = 0; o < e.length; o++) {
						var a = e[o],
							s = l[a];
						s && !i[a] && (t.push(n.get(s)), i[a] = !0)
					}
					return t
				}
			}
			function $(e, n, r) {
				function i(e, t) {
					var n = e[t],
						r = e["before" + t.charAt(0).toUpperCase() + t.substr(1)];
					return n || r ? ("leave" == t && (r = n, n = null), b.push({
						event: t,
						fn: n
					}), g.push({
						event: t,
						fn: r
					}), !0) : void 0
				}
				function o(t, n, i) {
					var o = [];
					u(t, function(e) {
						e.fn && o.push(e)
					});
					var a = 0;
					u(o, function(t, u) {
						var f = function() {
								e: {
									if (n) {
										if ((n[u] || s)(), ++a < o.length) break e;
										n = null
									}
									i()
								}
							};
						switch (t.event) {
						case "setClass":
							n.push(t.fn(e, l, c, f));
							break;
						case "addClass":
							n.push(t.fn(e, l || r, f));
							break;
						case "removeClass":
							n.push(t.fn(e, c || r, f));
							break;
						default:
							n.push(t.fn(e, f))
						}
					}), n && 0 === n.length && i()
				}
				var a = e[0];
				if (a) {
					var l, c, f = "setClass" == n,
						d = f || "addClass" == n || "removeClass" == n;
					t.isArray(r) && (l = r[0], c = r[1], r = l + " " + c);
					var p = e.attr("class") + " " + r;
					if (E(p)) {
						var h = s,
							v = [],
							g = [],
							m = s,
							$ = [],
							b = [],
							p = (" " + p).replace(/\s+/g, ".");
						return u(y(p), function(e) {
							!i(e, n) && f && (i(e, "addClass"), i(e, "removeClass"))
						}), {
							node: a,
							event: n,
							className: r,
							isClassBased: d,
							isSetClassOperation: f,
							before: function(e) {
								h = e, o(g, v, function() {
									h = s, e()
								})
							},
							after: function(e) {
								m = e, o(b, $, function() {
									m = s, e()
								})
							},
							cancel: function() {
								v && (u(v, function(e) {
									(e || s)(!0)
								}), h(!0)), $ && (u($, function(e) {
									(e || s)(!0)
								}), m(!0))
							}
						}
					}
				}
			}
			function b(e, n, r, i, o, a, s) {
				function l(t) {
					var i = "$animate:" + t;
					b && b[i] && 0 < b[i].length && v(function() {
						r.triggerHandler(i, {
							event: e,
							className: n
						})
					})
				}
				function c() {
					l("before")
				}
				function d() {
					l("after")
				}
				function h() {
					l("close"), s && v(function() {
						s()
					})
				}
				function g() {
					g.hasBeenRun || (g.hasBeenRun = !0, a())
				}
				function m() {
					if (!m.hasBeenRun) {
						m.hasBeenRun = !0;
						var t = r.data(f);
						t && (y && y.isClassBased ? x(r, n) : (v(function() {
							var t = r.data(f) || {};
							N == t.index && x(r, n, e)
						}), r.data(f, t))), h()
					}
				}
				var y = $(r, e, n);
				if (y) {
					n = y.className;
					var b = t.element._data(y.node),
						b = b && b.events;
					i || (i = o ? o.parent() : r.parent());
					var w = r.data(f) || {};
					o = w.active || {};
					var T, E = w.totalActive || 0,
						A = w.last;
					if (y.isClassBased && (T = w.running || w.disabled || A && !A.isClassBased), T || C(r, i)) g(), c(), d(), m();
					else {
						if (i = !1, E > 0) {
							if (T = [], y.isClassBased)"setClass" == A.event ? (T.push(A), x(r, n)) : o[n] && (k = o[n], k.event == e ? i = !0 : (T.push(k), x(r, n)));
							else if ("leave" == e && o["ng-leave"]) i = !0;
							else {
								for (var k in o) T.push(o[k]), x(r, k);
								o = {}, E = 0
							}
							0 < T.length && u(T, function(e) {
								e.cancel()
							})
						}
						if (!y.isClassBased || y.isSetClassOperation || i || (i = "addClass" == e == r.hasClass(n)), i) g(), c(), d(), h();
						else {
							"leave" == e && r.one("$destroy", function(e) {
								e = t.element(this);
								var n = e.data(f);
								n && (n = n.active["ng-leave"]) && (n.cancel(), x(e, "ng-leave"))
							}), r.addClass(p);
							var N = S++;
							E++, o[n] = y, r.data(f, {
								last: y,
								active: o,
								index: N,
								totalActive: E
							}), c(), y.before(function(t) {
								var i = r.data(f);
								t = t || !i || !i.active[n] || y.isClassBased && i.active[n].event != e, g(), !0 === t ? m() : (d(), y.after(m))
							})
						}
					}
				} else g(), c(), d(), m()
			}
			function w(e) {
				(e = o(e)) && (e = t.isFunction(e.getElementsByClassName) ? e.getElementsByClassName(p) : e.querySelectorAll("." + p), u(e, function(e) {
					e = t.element(e), (e = e.data(f)) && e.active && u(e.active, function(e) {
						e.cancel()
					})
				}))
			}
			function x(e, t) {
				if (o(e) == o(c)) h.disabled || (h.running = !1, h.structural = !1);
				else if (t) {
					var n = e.data(f) || {},
						r = !0 === t;
					!r && n.active && n.active[t] && (n.totalActive--, delete n.active[t]), (r || !n.totalActive) && (e.removeClass(p), e.removeData(f))
				}
			}
			function C(e, n) {
				if (h.disabled) return !0;
				if (o(e) == o(c)) return h.running;
				var r, i, a;
				do {
					if (0 === n.length) break;
					var s = o(n) == o(c),
						u = s ? h : n.data(f) || {};
					if (u.disabled) return !0;
					s && (a = !0), !1 !== r && (s = n.data(d), t.isDefined(s) && (r = s)), i = i || u.running || u.last && !u.last.isClassBased
				} while (n = n.parent());
				return !a || !r && i
			}
			var S = 0;
			c.data(f, h), g.$$postDigest(function() {
				g.$$postDigest(function() {
					h.running = !1
				})
			});
			var T = i.classNameFilter(),
				E = T ?
			function(e) {
				return T.test(e)
			} : function() {
				return !0
			};
			return {
				enter: function(n, r, i, o) {
					n = t.element(n), r = r && t.element(r), i = i && t.element(i), m(n), e.enter(n, r, i), g.$$postDigest(function() {
						n = a(n), b("enter", "ng-enter", n, r, i, s, o)
					})
				},
				leave: function(n, r) {
					n = t.element(n), w(n), m(n), g.$$postDigest(function() {
						b("leave", "ng-leave", a(n), null, null, function() {
							e.leave(n)
						}, r)
					})
				},
				move: function(n, r, i, o) {
					n = t.element(n), r = r && t.element(r), i = i && t.element(i), w(n), m(n), e.move(n, r, i), g.$$postDigest(function() {
						n = a(n), b("move", "ng-move", n, r, i, s, o)
					})
				},
				addClass: function(n, r, i) {
					n = t.element(n), n = a(n), b("addClass", r, n, null, null, function() {
						e.addClass(n, r)
					}, i)
				},
				removeClass: function(n, r, i) {
					n = t.element(n), n = a(n), b("removeClass", r, n, null, null, function() {
						e.removeClass(n, r)
					}, i)
				},
				setClass: function(n, r, i, o) {
					n = t.element(n), n = a(n), b("setClass", [r, i], n, null, null, function() {
						e.setClass(n, r, i)
					}, o)
				},
				enabled: function(e, t) {
					switch (arguments.length) {
					case 2:
						if (e) x(t);
						else {
							var n = t.data(f) || {};
							n.disabled = !0, t.data(f, n)
						}
						break;
					case 1:
						h.disabled = !e;
						break;
					default:
						e = !h.disabled
					}
					return !!e
				}
			}
		}]), i.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function(r, i, a, l) {
			function f() {
				P || (P = l(function() {
					Q = [], P = null, z = {}
				}))
			}
			function d(e, t) {
				P && P(), Q.push(t), P = l(function() {
					u(Q, function(e) {
						e()
					}), Q = [], P = null, z = {}
				})
			}
			function p(e, n) {
				var r = o(e);
				e = t.element(r), J.push(e), r = Date.now() + n, Y >= r || (a.cancel(X), Y = r, X = a(function() {
					h(J), J = []
				}, n, !1))
			}
			function h(e) {
				u(e, function(e) {
					(e = e.data(F)) && (e.closeAnimationFn || s)()
				})
			}
			function v(e, t) {
				var n = t ? z[t] : null;
				if (!n) {
					var i, o, a, s, l = 0,
						f = 0,
						d = 0,
						p = 0;
					u(e, function(e) {
						if (e.nodeType == c) {
							e = r.getComputedStyle(e) || {}, a = e[N + j], l = Math.max(g(a), l), s = e[N + R], i = e[N + L], f = Math.max(g(i), f), o = e[D + L], p = Math.max(g(o), p);
							var t = g(e[D + j]);
							t > 0 && (t *= parseInt(e[D + q], 10) || 1), d = Math.max(t, d)
						}
					}), n = {
						total: 0,
						transitionPropertyStyle: s,
						transitionDurationStyle: a,
						transitionDelayStyle: i,
						transitionDelay: f,
						transitionDuration: l,
						animationDelayStyle: o,
						animationDelay: p,
						animationDuration: d
					}, t && (z[t] = n)
				}
				return n
			}
			function g(e) {
				var n = 0;
				return e = t.isString(e) ? e.split(/\s*,\s*/) : [], u(e, function(e) {
					n = Math.max(parseFloat(e) || 0, n)
				}), n
			}
			function m(e) {
				var t = e.parent(),
					n = t.data(I);
				return n || (t.data(I, ++U), n = U), n + "-" + o(e).getAttribute("class")
			}
			function y(e, t, n, r) {
				var i = m(t),
					a = i + " " + n,
					u = z[a] ? ++z[a].total : 0,
					l = {};
				if (u > 0) {
					var c = n + "-stagger",
						l = i + " " + c;
					(i = !z[l]) && t.addClass(c), l = v(t, l), i && t.removeClass(c)
				}
				r = r ||
				function(e) {
					return e()
				}, t.addClass(n);
				var c = t.data(F) || {},
					f = r(function() {
						return v(t, a)
					});
				return r = f.transitionDuration, i = f.animationDuration, 0 === r && 0 === i ? (t.removeClass(n), !1) : (t.data(F, {
					running: c.running || 0,
					itemIndex: u,
					stagger: l,
					timings: f,
					closeAnimationFn: s
				}), e = 0 < c.running || "setClass" == e, r > 0 && $(t, n, e), i > 0 && 0 < l.animationDelay && 0 === l.animationDuration && (o(t).style[D] = "none 0s"), !0)
			}
			function $(e, t, n) {
				"ng-enter" != t && "ng-move" != t && "ng-leave" != t && n ? e.addClass(H) : o(e).style[N + R] = "none"
			}
			function b(e) {
				var t = N + R,
					n = o(e);
				n.style[t] && 0 < n.style[t].length && (n.style[t] = ""), e.removeClass(H)
			}
			function w(e) {
				var t = D;
				e = o(e), e.style[t] && 0 < e.style[t].length && (e.style[t] = "")
			}
			function x(e, t, n, r) {
				function i(e) {
					t.off(y, a), t.removeClass(l), A(t, n), e = o(t);
					for (var r in b) e.style.removeProperty(b[r])
				}
				function a(e) {
					e.stopPropagation();
					var t = e.originalEvent || e;
					e = t.$manualTimeStamp || t.timeStamp || Date.now(), t = parseFloat(t.elapsedTime.toFixed(V)), Math.max(e - m, 0) >= g && t >= h && r()
				}
				var s = o(t);
				if (e = t.data(F), -1 != s.getAttribute("class").indexOf(n) && e) {
					var l = "";
					u(n.split(" "), function(e, t) {
						l += (t > 0 ? " " : "") + e + "-active"
					});
					var c = e.stagger,
						f = e.timings,
						d = e.itemIndex,
						h = Math.max(f.transitionDuration, f.animationDuration),
						v = Math.max(f.transitionDelay, f.animationDelay),
						g = v * B,
						m = Date.now(),
						y = M + " " + _,
						$ = "",
						b = [];
					if (0 < f.transitionDuration) {
						var w = f.transitionPropertyStyle; - 1 == w.indexOf("all") && ($ += O + "transition-property: " + w + ";", $ += O + "transition-duration: " + f.transitionDurationStyle + ";", b.push(O + "transition-property"), b.push(O + "transition-duration"))
					}
					return d > 0 && (0 < c.transitionDelay && 0 === c.transitionDuration && ($ += O + "transition-delay: " + C(f.transitionDelayStyle, c.transitionDelay, d) + "; ", b.push(O + "transition-delay")), 0 < c.animationDelay && 0 === c.animationDuration && ($ += O + "animation-delay: " + C(f.animationDelayStyle, c.animationDelay, d) + "; ", b.push(O + "animation-delay"))), 0 < b.length && (f = s.getAttribute("style") || "", s.setAttribute("style", f + "; " + $)), t.on(y, a), t.addClass(l), e.closeAnimationFn = function() {
						i(), r()
					}, s = (d * (Math.max(c.animationDelay, c.transitionDelay) || 0) + (v + h) * W) * B, e.running++, p(t, s), i
				}
				r()
			}
			function C(e, t, n) {
				var r = "";
				return u(e.split(","), function(e, i) {
					r += (i > 0 ? "," : "") + (n * t + parseInt(e, 10)) + "s"
				}), r
			}
			function S(e, t, n, r) {
				return y(e, t, n, r) ?
				function(e) {
					e && A(t, n)
				} : void 0
			}
			function T(e, t, n, r) {
				return t.data(F) ? x(e, t, n, r) : (A(t, n), void r())
			}
			function E(e, t, n, r) {
				var i = S(e, t, n);
				if (i) {
					var o = i;
					return d(t, function() {
						b(t, n), w(t), o = T(e, t, n, r)
					}), function(e) {
						(o || s)(e)
					}
				}
				f(), r()
			}
			function A(e, t) {
				e.removeClass(t);
				var n = e.data(F);
				n && (n.running && n.running--, n.running && 0 !== n.running || e.removeData(F))
			}
			function k(e, n) {
				var r = "";
				return e = t.isArray(e) ? e : e.split(/\s+/), u(e, function(e, t) {
					e && 0 < e.length && (r += (t > 0 ? " " : "") + e + n)
				}), r
			}
			var N, _, D, M, O = "";
			e.ontransitionend === n && e.onwebkittransitionend !== n ? (O = "-webkit-", N = "WebkitTransition", _ = "webkitTransitionEnd transitionend") : (N = "transition", _ = "transitionend"), e.onanimationend === n && e.onwebkitanimationend !== n ? (O = "-webkit-", D = "WebkitAnimation", M = "webkitAnimationEnd animationend") : (D = "animation", M = "animationend");
			var P, j = "Duration",
				R = "Property",
				L = "Delay",
				q = "IterationCount",
				I = "$$ngAnimateKey",
				F = "$$ngAnimateCSS3Data",
				H = "ng-animate-block-transitions",
				V = 3,
				W = 1.5,
				B = 1e3,
				z = {},
				U = 0,
				Q = [],
				X = null,
				Y = 0,
				J = [];
			return {
				enter: function(e, t) {
					return E("enter", e, "ng-enter", t)
				},
				leave: function(e, t) {
					return E("leave", e, "ng-leave", t)
				},
				move: function(e, t) {
					return E("move", e, "ng-move", t)
				},
				beforeSetClass: function(e, t, n, r) {
					var i = k(n, "-remove") + " " + k(t, "-add"),
						o = S("setClass", e, i, function(r) {
							var i = e.attr("class");
							return e.removeClass(n), e.addClass(t), r = r(), e.attr("class", i), r
						});
					return o ? (d(e, function() {
						b(e, i), w(e), r()
					}), o) : (f(), void r())
				},
				beforeAddClass: function(e, t, n) {
					var r = S("addClass", e, k(t, "-add"), function(n) {
						return e.addClass(t), n = n(), e.removeClass(t), n
					});
					return r ? (d(e, function() {
						b(e, t), w(e), n()
					}), r) : (f(), void n())
				},
				setClass: function(e, t, n, r) {
					return n = k(n, "-remove"), t = k(t, "-add"), T("setClass", e, n + " " + t, r)
				},
				addClass: function(e, t, n) {
					return T("addClass", e, k(t, "-add"), n)
				},
				beforeRemoveClass: function(e, t, n) {
					var r = S("removeClass", e, k(t, "-remove"), function(n) {
						var r = e.attr("class");
						return e.removeClass(t), n = n(), e.attr("class", r), n
					});
					return r ? (d(e, function() {
						b(e, t), w(e), n()
					}), r) : void n()
				},
				removeClass: function(e, t, n) {
					return T("removeClass", e, k(t, "-remove"), n)
				}
			}
		}])
	}])
}(window, window.angular), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),


function(e, t, n) {
	"use strict";

	function r(e, t) {
		return q(new(q(function() {}, {
			prototype: e
		})), t)
	}
	function i(e) {
		return L(arguments, function(t) {
			t !== e && L(t, function(t, n) {
				e.hasOwnProperty(n) || (e[n] = t)
			})
		}), e
	}
	function o(e, t) {
		var n = [];
		for (var r in e.path) {
			if (e.path[r] !== t.path[r]) break;
			n.push(e.path[r])
		}
		return n
	}
	function a(e) {
		if (Object.keys) return Object.keys(e);
		var n = [];
		return t.forEach(e, function(e, t) {
			n.push(t)
		}), n
	}
	function s(e, t) {
		if (Array.prototype.indexOf) return e.indexOf(t, Number(arguments[2]) || 0);
		var n = e.length >>> 0,
			r = Number(arguments[2]) || 0;
		for (r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += n); n > r; r++) if (r in e && e[r] === t) return r;
		return -1
	}
	function u(e, t, n, r) {
		var i, u = o(n, r),
			l = {},
			c = [];
		for (var f in u) if (u[f].params && (i = a(u[f].params), i.length)) for (var d in i) s(c, i[d]) >= 0 || (c.push(i[d]), l[i[d]] = e[i[d]]);
		return q({}, l, t)
	}
	function l(e, t, n) {
		if (!n) {
			n = [];
			for (var r in e) n.push(r)
		}
		for (var i = 0; i < n.length; i++) {
			var o = n[i];
			if (e[o] != t[o]) return !1
		}
		return !0
	}
	function c(e, t) {
		var n = {};
		return L(e, function(e) {
			n[e] = t[e]
		}), n
	}
	function f(e) {
		var t = {},
			n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
		for (var r in e) - 1 == s(n, r) && (t[r] = e[r]);
		return t
	}
	function d(e, t) {
		var n = R(e),
			r = n ? [] : {};
		return L(e, function(e, i) {
			t(e, i) && (r[n ? r.length : i] = e)
		}), r
	}
	function p(e, t) {
		var n = R(e) ? [] : {};
		return L(e, function(e, r) {
			n[r] = t(e, r)
		}), n
	}
	function h(e, t) {
		var r = 1,
			o = 2,
			u = {},
			l = [],
			c = u,
			d = q(e.when(u), {
				$$promises: u,
				$$values: u
			});
		this.study = function(u) {
			function p(e, n) {
				if (y[n] !== o) {
					if (m.push(n), y[n] === r) throw m.splice(0, s(m, n)), new Error("Cyclic dependency: " + m.join(" -> "));
					if (y[n] = r, P(e)) g.push(n, [function() {
						return t.get(e)
					}], l);
					else {
						var i = t.annotate(e);
						L(i, function(e) {
							e !== n && u.hasOwnProperty(e) && p(u[e], e)
						}), g.push(n, e, i)
					}
					m.pop(), y[n] = o
				}
			}
			function h(e) {
				return j(e) && e.then && e.$$promises
			}
			if (!j(u)) throw new Error("'invocables' must be an object");
			var v = a(u || {}),
				g = [],
				m = [],
				y = {};
			return L(u, p), u = m = y = null, function(r, o, a) {
				function s() {
					--b || (w || i($, o.$$values), m.$$values = $, m.$$promises = m.$$promises || !0, delete m.$$inheritedValues, p.resolve($))
				}
				function u(e) {
					m.$$failure = e, p.reject(e)
				}
				function l(n, i, o) {
					function l(e) {
						f.reject(e), u(e)
					}
					function c() {
						if (!M(m.$$failure)) try {
							f.resolve(t.invoke(i, a, $)), f.promise.then(function(e) {
								$[n] = e, s()
							}, l)
						} catch (e) {
							l(e)
						}
					}
					var f = e.defer(),
						d = 0;
					L(o, function(e) {
						y.hasOwnProperty(e) && !r.hasOwnProperty(e) && (d++, y[e].then(function(t) {
							$[e] = t, --d || c()
						}, l))
					}), d || c(), y[n] = f.promise
				}
				if (h(r) && a === n && (a = o, o = r, r = null), r) {
					if (!j(r)) throw new Error("'locals' must be an object")
				} else r = c;
				if (o) {
					if (!h(o)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
				} else o = d;
				var p = e.defer(),
					m = p.promise,
					y = m.$$promises = {},
					$ = q({}, r),
					b = 1 + g.length / 3,
					w = !1;
				if (M(o.$$failure)) return u(o.$$failure), m;
				o.$$inheritedValues && i($, f(o.$$inheritedValues, v)), q(y, o.$$promises), o.$$values ? (w = i($, f(o.$$values, v)), m.$$inheritedValues = f(o.$$values, v), s()) : (o.$$inheritedValues && (m.$$inheritedValues = f(o.$$inheritedValues, v)), o.then(s, u));
				for (var x = 0, C = g.length; C > x; x += 3) r.hasOwnProperty(g[x]) ? s() : l(g[x], g[x + 1], g[x + 2]);
				return m
			}
		}, this.resolve = function(e, t, n, r) {
			return this.study(e)(t, n, r)
		}
	}
	function v(e, t, n) {
		this.fromConfig = function(e, t, n) {
			return M(e.template) ? this.fromString(e.template, t) : M(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : M(e.templateProvider) ? this.fromProvider(e.templateProvider, t, n) : null
		}, this.fromString = function(e, t) {
			return O(e) ? e(t) : e
		}, this.fromUrl = function(n, r) {
			return O(n) && (n = n(r)), null == n ? null : e.get(n, {
				cache: t,
				headers: {
					Accept: "text/html"
				}
			}).then(function(e) {
				return e.data
			})
		}, this.fromProvider = function(e, t, r) {
			return n.invoke(e, null, r || {
				params: t
			})
		}
	}
	function g(e, t, i) {
		function o(t, n, r, i) {
			if (g.push(t), h[t]) return h[t];
			if (!/^\w+(-+\w+)*(?:\[\])?$/.test(t)) throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
			if (v[t]) throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
			return v[t] = new F.Param(t, n, r, i), v[t]
		}
		function a(e, t, n) {
			var r = ["", ""],
				i = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
			if (!t) return i;
			switch (n) {
			case !1:
				r = ["(", ")"];
				break;
			case !0:
				r = ["?(", ")?"];
				break;
			default:
				r = ["(" + n + "|", ")?"]
			}
			return i + r[0] + t + r[1]
		}
		function s(n, i) {
			var o, a, s, u, l;
			return o = n[2] || n[3], l = t.params[o], s = e.substring(d, n.index), a = i ? n[4] : n[4] || ("*" == n[1] ? ".*" : null), u = F.type(a || "string") || r(F.type("string"), {
				pattern: new RegExp(a)
			}), {
				id: o,
				regexp: a,
				segment: s,
				type: u,
				cfg: l
			}
		}
		t = q({
			params: {}
		}, j(t) ? t : {});
		var u, l = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
			c = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
			f = "^",
			d = 0,
			p = this.segments = [],
			h = i ? i.params : {},
			v = this.params = i ? i.params.$$new() : new F.ParamSet,
			g = [];
		this.source = e;
		for (var m, y, $;
		(u = l.exec(e)) && (m = s(u, !1), !(m.segment.indexOf("?") >= 0));) y = o(m.id, m.type, m.cfg, "path"), f += a(m.segment, y.type.pattern.source, y.squash), p.push(m.segment), d = l.lastIndex;
		$ = e.substring(d);
		var b = $.indexOf("?");
		if (b >= 0) {
			var w = this.sourceSearch = $.substring(b);
			if ($ = $.substring(0, b), this.sourcePath = e.substring(0, d + b), w.length > 0) for (d = 0; u = c.exec(w);) m = s(u, !0), y = o(m.id, m.type, m.cfg, "search"), d = l.lastIndex
		} else this.sourcePath = e, this.sourceSearch = "";
		f += a($) + (t.strict === !1 ? "/?" : "") + "$", p.push($), this.regexp = new RegExp(f, t.caseInsensitive ? "i" : n), this.prefix = p[0], this.$$paramNames = g
	}
	function m(e) {
		q(this, e)
	}
	function y() {
		function e(e) {
			return null != e ? e.toString().replace(/\//g, "%2F") : e
		}
		function i(e) {
			return null != e ? e.toString().replace(/%2F/g, "/") : e
		}
		function o(e) {
			return this.pattern.test(e)
		}
		function u() {
			return {
				strict: $,
				caseInsensitive: v
			}
		}
		function l(e) {
			return O(e) || R(e) && O(e[e.length - 1])
		}
		function c() {
			for (; C.length;) {
				var e = C.shift();
				if (e.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
				t.extend(w[e.name], h.invoke(e.def))
			}
		}
		function f(e) {
			q(this, e || {})
		}
		F = this;
		var h, v = !1,
			$ = !0,
			b = !1,
			w = {},
			x = !0,
			C = [],
			S = {
				string: {
					encode: e,
					decode: i,
					is: o,
					pattern: /[^/]*/
				},
				"int": {
					encode: e,
					decode: function(e) {
						return parseInt(e, 10)
					},
					is: function(e) {
						return M(e) && this.decode(e.toString()) === e
					},
					pattern: /\d+/
				},
				bool: {
					encode: function(e) {
						return e ? 1 : 0
					},
					decode: function(e) {
						return 0 !== parseInt(e, 10)
					},
					is: function(e) {
						return e === !0 || e === !1
					},
					pattern: /0|1/
				},
				date: {
					encode: function(e) {
						return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : n
					},
					decode: function(e) {
						if (this.is(e)) return e;
						var t = this.capture.exec(e);
						return t ? new Date(t[1], t[2] - 1, t[3]) : n
					},
					is: function(e) {
						return e instanceof Date && !isNaN(e.valueOf())
					},
					equals: function(e, t) {
						return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
					},
					pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
					capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
				},
				json: {
					encode: t.toJson,
					decode: t.fromJson,
					is: t.isObject,
					equals: t.equals,
					pattern: /[^/]*/
				},
				any: {
					encode: t.identity,
					decode: t.identity,
					is: t.identity,
					equals: t.equals,
					pattern: /.*/
				}
			};
		y.$$getDefaultValue = function(e) {
			if (!l(e.value)) return e.value;
			if (!h) throw new Error("Injectable functions cannot be called at configuration time");
			return h.invoke(e.value)
		}, this.caseInsensitive = function(e) {
			return M(e) && (v = e), v
		}, this.strictMode = function(e) {
			return M(e) && ($ = e), $
		}, this.defaultSquashPolicy = function(e) {
			if (!M(e)) return b;
			if (e !== !0 && e !== !1 && !P(e)) throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
			return b = e, e
		}, this.compile = function(e, t) {
			return new g(e, q(u(), t))
		}, this.isMatcher = function(e) {
			if (!j(e)) return !1;
			var t = !0;
			return L(g.prototype, function(n, r) {
				O(n) && (t = t && M(e[r]) && O(e[r]))
			}), t
		}, this.type = function(e, t, n) {
			if (!M(t)) return w[e];
			if (w.hasOwnProperty(e)) throw new Error("A type named '" + e + "' has already been defined.");
			return w[e] = new m(q({
				name: e
			}, t)), n && (C.push({
				name: e,
				def: n
			}), x || c()), this
		}, L(S, function(e, t) {
			w[t] = new m(q({
				name: t
			}, e))
		}), w = r(w, {}), this.$get = ["$injector", function(e) {
			return h = e, x = !1, c(), L(S, function(e, t) {
				w[t] || (w[t] = new m(e))
			}), this
		}], this.Param = function(e, t, r, i) {
			function o(e) {
				var t = j(e) ? a(e) : [],
					n = -1 === s(t, "value") && -1 === s(t, "type") && -1 === s(t, "squash") && -1 === s(t, "array");
				return n && (e = {
					value: e
				}), e.$$fn = l(e.value) ? e.value : function() {
					return e.value
				}, e
			}
			function u(t, n, r) {
				if (t.type && n) throw new Error("Param '" + e + "' has two type configurations.");
				return n ? n : t.type ? t.type instanceof m ? t.type : new m(t.type) : "config" === r ? w.any : w.string
			}
			function c() {
				var t = {
					array: "search" === i ? "auto" : !1
				},
					n = e.match(/\[\]$/) ? {
						array: !0
					} : {};
				return q(t, n, r).array
			}
			function f(e, t) {
				var n = e.squash;
				if (!t || n === !1) return !1;
				if (!M(n) || null == n) return b;
				if (n === !0 || P(n)) return n;
				throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
			}
			function v(e, t, r, i) {
				var o, a, u = [{
					from: "",
					to: r || t ? n : ""
				}, {
					from: null,
					to: r || t ? n : ""
				}];
				return o = R(e.replace) ? e.replace : [], P(i) && o.push({
					from: i,
					to: n
				}), a = p(o, function(e) {
					return e.from
				}), d(u, function(e) {
					return -1 === s(a, e.from)
				}).concat(o)
			}
			function g() {
				if (!h) throw new Error("Injectable functions cannot be called at configuration time");
				return h.invoke(r.$$fn)
			}
			function y(e) {
				function t(e) {
					return function(t) {
						return t.from === e
					}
				}
				function n(e) {
					var n = p(d(x.replace, t(e)), function(e) {
						return e.to
					});
					return n.length ? n[0] : e
				}
				return e = n(e), M(e) ? x.type.decode(e) : g()
			}
			function $() {
				return "{Param:" + e + " " + t + " squash: '" + T + "' optional: " + S + "}"
			}
			var x = this;
			r = o(r), t = u(r, t, i);
			var C = c();
			t = C ? t.$asArray(C, "search" === i) : t, "string" !== t.name || C || "path" !== i || r.value !== n || (r.value = "");
			var S = r.value !== n,
				T = f(r, S),
				E = v(r, C, S, T);
			q(this, {
				id: e,
				type: t,
				location: i,
				array: C,
				squash: T,
				replace: E,
				isOptional: S,
				value: y,
				dynamic: n,
				config: r,
				toString: $
			})
		}, f.prototype = {
			$$new: function() {
				return r(this, q(new f, {
					$$parent: this
				}))
			},
			$$keys: function() {
				for (var e = [], t = [], n = this, r = a(f.prototype); n;) t.push(n), n = n.$$parent;
				return t.reverse(), L(t, function(t) {
					L(a(t), function(t) {
						-1 === s(e, t) && -1 === s(r, t) && e.push(t)
					})
				}), e
			},
			$$values: function(e) {
				var t = {},
					n = this;
				return L(n.$$keys(), function(r) {
					t[r] = n[r].value(e && e[r])
				}), t
			},
			$$equals: function(e, t) {
				var n = !0,
					r = this;
				return L(r.$$keys(), function(i) {
					var o = e && e[i],
						a = t && t[i];
					r[i].type.equals(o, a) || (n = !1)
				}), n
			},
			$$validates: function(e) {
				var t, n, r, i = !0,
					o = this;
				return L(this.$$keys(), function(a) {
					r = o[a], n = e[a], t = !n && r.isOptional, i = i && (t || !! r.type.is(n))
				}), i
			},
			$$parent: n
		}, this.ParamSet = f
	}
	function $(e, r) {
		function i(e) {
			var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
			return null != t ? t[1].replace(/\\(.)/g, "$1") : ""
		}
		function o(e, t) {
			return e.replace(/\$(\$|\d{1,2})/, function(e, n) {
				return t["$" === n ? 0 : Number(n)]
			})
		}
		function a(e, t, n) {
			if (!n) return !1;
			var r = e.invoke(t, t, {
				$match: n
			});
			return M(r) ? r : !0
		}
		function s(r, i, o, a) {
			function s(e, t, n) {
				return "/" === v ? e : t ? v.slice(0, -1) + e : n ? v.slice(1) + e : e
			}
			function d(e) {
				function t(e) {
					var t = e(o, r);
					return t ? (P(t) && r.replace().url(t), !0) : !1
				}
				if (!e || !e.defaultPrevented) {
					var i = h && r.url() === h;
					if (h = n, i) return !0;
					var a, s = l.length;
					for (a = 0; s > a; a++) if (t(l[a])) return;
					c && t(c)
				}
			}
			function p() {
				return u = u || i.$on("$locationChangeSuccess", d)
			}
			var h, v = a.baseHref(),
				g = r.url();
			return f || p(), {
				sync: function() {
					d()
				},
				listen: function() {
					return p()
				},
				update: function(e) {
					return e ? void(g = r.url()) : void(r.url() !== g && (r.url(g), r.replace()))
				},
				push: function(e, t, i) {
					r.url(e.format(t || {})), h = i && i.$$avoidResync ? r.url() : n, i && i.replace && r.replace()
				},
				href: function(n, i, o) {
					if (!n.validates(i)) return null;
					var a = e.html5Mode();
					t.isObject(a) && (a = a.enabled);
					var u = n.format(i);
					if (o = o || {}, a || null === u || (u = "#" + e.hashPrefix() + u), u = s(u, a, o.absolute), !o.absolute || !u) return u;
					var l = !a && u ? "/" : "",
						c = r.port();
					return c = 80 === c || 443 === c ? "" : ":" + c, [r.protocol(), "://", r.host(), c, l, u].join("")
				}
			}
		}
		var u, l = [],
			c = null,
			f = !1;
		this.rule = function(e) {
			if (!O(e)) throw new Error("'rule' must be a function");
			return l.push(e), this
		}, this.otherwise = function(e) {
			if (P(e)) {
				var t = e;
				e = function() {
					return t
				}
			} else if (!O(e)) throw new Error("'rule' must be a function");
			return c = e, this
		}, this.when = function(e, t) {
			var n, s = P(t);
			if (P(e) && (e = r.compile(e)), !s && !O(t) && !R(t)) throw new Error("invalid 'handler' in when()");
			var u = {
				matcher: function(e, t) {
					return s && (n = r.compile(t), t = ["$match", function(e) {
						return n.format(e)
					}]), q(function(n, r) {
						return a(n, t, e.exec(r.path(), r.search()))
					}, {
						prefix: P(e.prefix) ? e.prefix : ""
					})
				},
				regex: function(e, t) {
					if (e.global || e.sticky) throw new Error("when() RegExp must not be global or sticky");
					return s && (n = t, t = ["$match", function(e) {
						return o(n, e)
					}]), q(function(n, r) {
						return a(n, t, e.exec(r.path()))
					}, {
						prefix: i(e)
					})
				}
			},
				l = {
					matcher: r.isMatcher(e),
					regex: e instanceof RegExp
				};
			for (var c in l) if (l[c]) return this.rule(u[c](e, t));
			throw new Error("invalid 'what' in when()")
		}, this.deferIntercept = function(e) {
			e === n && (e = !0), f = e
		}, this.$get = s, s.$inject = ["$location", "$rootScope", "$injector", "$browser"]
	}
	function b(e, i) {
		function o(e) {
			return 0 === e.indexOf(".") || 0 === e.indexOf("^")
		}
		function f(e, t) {
			if (!e) return n;
			var r = P(e),
				i = r ? e : e.name,
				a = o(i);
			if (a) {
				if (!t) throw new Error("No reference point given for path '" + i + "'");
				t = f(t);
				for (var s = i.split("."), u = 0, l = s.length, c = t; l > u; u++) if ("" !== s[u] || 0 !== u) {
					if ("^" !== s[u]) break;
					if (!c.parent) throw new Error("Path '" + i + "' not valid for state '" + t.name + "'");
					c = c.parent
				} else c = t;
				s = s.slice(u).join("."), i = c.name + (c.name && s ? "." : "") + s
			}
			var d = S[i];
			return !d || !r && (r || d !== e && d.self !== e) ? n : d
		}
		function d(e, t) {
			T[e] || (T[e] = []), T[e].push(t)
		}
		function h(e) {
			for (var t = T[e] || []; t.length;) v(t.shift())
		}
		function v(t) {
			t = r(t, {
				self: t,
				resolve: t.resolve || {},
				toString: function() {
					return this.name
				}
			});
			var n = t.name;
			if (!P(n) || n.indexOf("@") >= 0) throw new Error("State must have a valid name");
			if (S.hasOwnProperty(n)) throw new Error("State '" + n + "'' is already defined");
			var i = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : P(t.parent) ? t.parent : j(t.parent) && P(t.parent.name) ? t.parent.name : "";
			if (i && !S[i]) return d(i, t.self);
			for (var o in A) O(A[o]) && (t[o] = A[o](t, A.$delegates[o]));
			return S[n] = t, !t[E] && t.url && e.when(t.url, ["$match", "$stateParams", function(e, n) {
				C.$current.navigable == t && l(e, n) || C.transitionTo(t, e, {
					inherit: !0,
					location: !1
				})
			}]), h(n), t
		}
		function g(e) {
			return e.indexOf("*") > -1
		}
		function m(e) {
			var t = e.split("."),
				n = C.$current.name.split(".");
			if ("**" === t[0] && (n = n.slice(s(n, t[1])), n.unshift("**")), "**" === t[t.length - 1] && (n.splice(s(n, t[t.length - 2]) + 1, Number.MAX_VALUE), n.push("**")), t.length != n.length) return !1;
			for (var r = 0, i = t.length; i > r; r++)"*" === t[r] && (n[r] = "*");
			return n.join("") === t.join("")
		}
		function y(e, t) {
			return P(e) && !M(t) ? A[e] : O(t) && P(e) ? (A[e] && !A.$delegates[e] && (A.$delegates[e] = A[e]), A[e] = t, this) : this
		}
		function $(e, t) {
			return j(e) ? t = e : t.name = e, v(t), this
		}
		function b(e, i, o, s, d, h, v) {
			function y(t, n, r, o) {
				var a = e.$broadcast("$stateNotFound", t, n, r);
				if (a.defaultPrevented) return v.update(), A;
				if (!a.retry) return null;
				if (o.$retry) return v.update(), k;
				var s = C.transition = i.when(a.retry);
				return s.then(function() {
					return s !== C.transition ? b : (t.options.$retry = !0, C.transitionTo(t.to, t.toParams, t.options))
				}, function() {
					return A
				}), v.update(), s
			}
			function $(e, n, r, a, u, l) {
				var f = r ? n : c(e.params.$$keys(), n),
					p = {
						$stateParams: f
					};
				u.resolve = d.resolve(e.resolve, p, u.resolve, e);
				var h = [u.resolve.then(function(e) {
					u.globals = e
				})];
				return a && h.push(a), L(e.views, function(n, r) {
					var i = n.resolve && n.resolve !== e.resolve ? n.resolve : {};
					i.$template = [function() {
						return o.load(r, {
							view: n,
							locals: p,
							params: f,
							notify: l.notify
						}) || ""
					}], h.push(d.resolve(i, p, u.resolve, e).then(function(o) {
						if (O(n.controllerProvider) || R(n.controllerProvider)) {
							var a = t.extend({}, i, p);
							o.$$controller = s.invoke(n.controllerProvider, null, a)
						} else o.$$controller = n.controller;
						o.$$state = e, o.$$controllerAs = n.controllerAs, u[r] = o
					}))
				}), i.all(h).then(function() {
					return u
				})
			}
			var b = i.reject(new Error("transition superseded")),
				T = i.reject(new Error("transition prevented")),
				A = i.reject(new Error("transition aborted")),
				k = i.reject(new Error("transition failed"));
			return x.locals = {
				resolve: null,
				globals: {
					$stateParams: {}
				}
			}, C = {
				params: {},
				current: x.self,
				$current: x,
				transition: null
			}, C.reload = function() {
				return C.transitionTo(C.current, h, {
					reload: !0,
					inherit: !1,
					notify: !0
				})
			}, C.go = function(e, t, n) {
				return C.transitionTo(e, t, q({
					inherit: !0,
					relative: C.$current
				}, n))
			}, C.transitionTo = function(t, n, o) {
				n = n || {}, o = q({
					location: !0,
					inherit: !1,
					relative: null,
					notify: !0,
					reload: !1,
					$retry: !1
				}, o || {});
				var a, l = C.$current,
					d = C.params,
					p = l.path,
					g = f(t, o.relative);
				if (!M(g)) {
					var m = {
						to: t,
						toParams: n,
						options: o
					},
						S = y(m, l.self, d, o);
					if (S) return S;
					if (t = m.to, n = m.toParams, o = m.options, g = f(t, o.relative), !M(g)) {
						if (!o.relative) throw new Error("No such state '" + t + "'");
						throw new Error("Could not resolve '" + t + "' from state '" + o.relative + "'")
					}
				}
				if (g[E]) throw new Error("Cannot transition to abstract state '" + t + "'");
				if (o.inherit && (n = u(h, n || {}, C.$current, g)), !g.params.$$validates(n)) return k;
				n = g.params.$$values(n), t = g;
				var A = t.path,
					N = 0,
					_ = A[N],
					D = x.locals,
					O = [];
				if (!o.reload) for (; _ && _ === p[N] && _.ownParams.$$equals(n, d);) D = O[N] = _.locals, N++, _ = A[N];
				if (w(t, l, D, o)) return t.self.reloadOnSearch !== !1 && v.update(), C.transition = null, i.when(C.current);
				if (n = c(t.params.$$keys(), n || {}), o.notify && e.$broadcast("$stateChangeStart", t.self, n, l.self, d).defaultPrevented) return v.update(), T;
				for (var P = i.when(D), j = N; j < A.length; j++, _ = A[j]) D = O[j] = r(D), P = $(_, n, _ === t, P, D, o);
				var R = C.transition = P.then(function() {
					var r, i, a;
					if (C.transition !== R) return b;
					for (r = p.length - 1; r >= N; r--) a = p[r], a.self.onExit && s.invoke(a.self.onExit, a.self, a.locals.globals), a.locals = null;
					for (r = N; r < A.length; r++) i = A[r], i.locals = O[r], i.self.onEnter && s.invoke(i.self.onEnter, i.self, i.locals.globals);
					return C.transition !== R ? b : (C.$current = t, C.current = t.self, C.params = n, I(C.params, h), C.transition = null, o.location && t.navigable && v.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
						$$avoidResync: !0,
						replace: "replace" === o.location
					}), o.notify && e.$broadcast("$stateChangeSuccess", t.self, n, l.self, d), v.update(!0), C.current)
				}, function(r) {
					return C.transition !== R ? b : (C.transition = null, a = e.$broadcast("$stateChangeError", t.self, n, l.self, d, r), a.defaultPrevented || v.update(), i.reject(r))
				});
				return R
			}, C.is = function(e, t, r) {
				r = q({
					relative: C.$current
				}, r || {});
				var i = f(e, r.relative);
				return M(i) ? C.$current !== i ? !1 : t ? l(i.params.$$values(t), h) : !0 : n
			}, C.includes = function(e, t, r) {
				if (r = q({
					relative: C.$current
				}, r || {}), P(e) && g(e)) {
					if (!m(e)) return !1;
					e = C.$current.name
				}
				var i = f(e, r.relative);
				return M(i) ? M(C.$current.includes[i.name]) ? t ? l(i.params.$$values(t), h, a(t)) : !0 : !1 : n
			}, C.href = function(e, t, r) {
				r = q({
					lossy: !0,
					inherit: !0,
					absolute: !1,
					relative: C.$current
				}, r || {});
				var i = f(e, r.relative);
				if (!M(i)) return null;
				r.inherit && (t = u(h, t || {}, C.$current, i));
				var o = i && r.lossy ? i.navigable : i;
				return o && o.url !== n && null !== o.url ? v.href(o.url, c(i.params.$$keys(), t || {}), {
					absolute: r.absolute
				}) : null
			}, C.get = function(e, t) {
				if (0 === arguments.length) return p(a(S), function(e) {
					return S[e].self
				});
				var n = f(e, t || C.$current);
				return n && n.self ? n.self : null
			}, C
		}
		function w(e, t, n, r) {
			return e !== t || (n !== t.locals || r.reload) && e.self.reloadOnSearch !== !1 ? void 0 : !0
		}
		var x, C, S = {},
			T = {},
			E = "abstract",
			A = {
				parent: function(e) {
					if (M(e.parent) && e.parent) return f(e.parent);
					var t = /^(.+)\.[^.]+$/.exec(e.name);
					return t ? f(t[1]) : x
				},
				data: function(e) {
					return e.parent && e.parent.data && (e.data = e.self.data = q({}, e.parent.data, e.data)), e.data
				},
				url: function(e) {
					var t = e.url,
						n = {
							params: e.params || {}
						};
					if (P(t)) return "^" == t.charAt(0) ? i.compile(t.substring(1), n) : (e.parent.navigable || x).url.concat(t, n);
					if (!t || i.isMatcher(t)) return t;
					throw new Error("Invalid url '" + t + "' in state '" + e + "'")
				},
				navigable: function(e) {
					return e.url ? e : e.parent ? e.parent.navigable : null
				},
				ownParams: function(e) {
					var t = e.url && e.url.params || new F.ParamSet;
					return L(e.params || {}, function(e, n) {
						t[n] || (t[n] = new F.Param(n, null, e, "config"))
					}), t
				},
				params: function(e) {
					return e.parent && e.parent.params ? q(e.parent.params.$$new(), e.ownParams) : new F.ParamSet
				},
				views: function(e) {
					var t = {};
					return L(M(e.views) ? e.views : {
						"": e
					}, function(n, r) {
						r.indexOf("@") < 0 && (r += "@" + e.parent.name), t[r] = n
					}), t
				},
				path: function(e) {
					return e.parent ? e.parent.path.concat(e) : []
				},
				includes: function(e) {
					var t = e.parent ? q({}, e.parent.includes) : {};
					return t[e.name] = !0, t
				},
				$delegates: {}
			};
		x = v({
			name: "",
			url: "^",
			views: null,
			"abstract": !0
		}), x.navigable = null, this.decorator = y, this.state = $, this.$get = b, b.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
	}
	function w() {
		function e(e, t) {
			return {
				load: function(n, r) {
					var i, o = {
						template: null,
						controller: null,
						view: null,
						locals: null,
						notify: !0,
						async: !0,
						params: {}
					};
					return r = q(o, r), r.view && (i = t.fromConfig(r.view, r.params, r.locals)), i && r.notify && e.$broadcast("$viewContentLoading", r), i
				}
			}
		}
		this.$get = e, e.$inject = ["$rootScope", "$templateFactory"]
	}
	function x() {
		var e = !1;
		this.useAnchorScroll = function() {
			e = !0
		}, this.$get = ["$anchorScroll", "$timeout", function(t, n) {
			return e ? t : function(e) {
				n(function() {
					e[0].scrollIntoView()
				}, 0, !1)
			}
		}]
	}
	function C(e, n, r, i) {
		function o() {
			return n.has ?
			function(e) {
				return n.has(e) ? n.get(e) : null
			} : function(e) {
				try {
					return n.get(e)
				} catch (t) {
					return null
				}
			}
		}
		function a(e, t) {
			var n = function() {
					return {
						enter: function(e, t, n) {
							t.after(e), n()
						},
						leave: function(e, t) {
							e.remove(), t()
						}
					}
				};
			if (l) return {
				enter: function(e, t, n) {
					var r = l.enter(e, null, t, n);
					r && r.then && r.then(n)
				},
				leave: function(e, t) {
					var n = l.leave(e, t);
					n && n.then && n.then(t)
				}
			};
			if (u) {
				var r = u && u(t, e);
				return {
					enter: function(e, t, n) {
						r.enter(e, null, t), n()
					},
					leave: function(e, t) {
						r.leave(e), t()
					}
				}
			}
			return n()
		}
		var s = o(),
			u = s("$animator"),
			l = s("$animate"),
			c = {
				restrict: "ECA",
				terminal: !0,
				priority: 400,
				transclude: "element",
				compile: function(n, o, s) {
					return function(n, o, u) {
						function l() {
							f && (f.remove(), f = null), p && (p.$destroy(), p = null), d && (m.leave(d, function() {
								f = null
							}), f = d, d = null)
						}
						function c(a) {
							var c, f = T(n, u, o, i),
								y = f && e.$current && e.$current.locals[f];
							if (a || y !== h) {
								c = n.$new(), h = e.$current.locals[f];
								var $ = s(c, function(e) {
									m.enter(e, o, function() {
										p && p.$emit("$viewContentAnimationEnded"), (t.isDefined(g) && !g || n.$eval(g)) && r(e)
									}), l()
								});
								d = $, p = c, p.$emit("$viewContentLoaded"), p.$eval(v)
							}
						}
						var f, d, p, h, v = u.onload || "",
							g = u.autoscroll,
							m = a(u, n);
						n.$on("$stateChangeSuccess", function() {
							c(!1)
						}), n.$on("$viewContentLoading", function() {
							c(!1)
						}), c(!0)
					}
				}
			};
		return c
	}
	function S(e, t, n, r) {
		return {
			restrict: "ECA",
			priority: -400,
			compile: function(i) {
				var o = i.html();
				return function(i, a, s) {
					var u = n.$current,
						l = T(i, s, a, r),
						c = u && u.locals[l];
					if (c) {
						a.data("$uiView", {
							name: l,
							state: c.$$state
						}), a.html(c.$template ? c.$template : o);
						var f = e(a.contents());
						if (c.$$controller) {
							c.$scope = i;
							var d = t(c.$$controller, c);
							c.$$controllerAs && (i[c.$$controllerAs] = d), a.data("$ngControllerController", d), a.children().data("$ngControllerController", d)
						}
						f(i)
					}
				}
			}
		}
	}
	function T(e, t, n, r) {
		var i = r(t.uiView || t.name || "")(e),
			o = n.inheritedData("$uiView");
		return i.indexOf("@") >= 0 ? i : i + "@" + (o ? o.state.name : "")
	}
	function E(e, t) {
		var n, r = e.match(/^\s*({[^}]*})\s*$/);
		if (r && (e = t + "(" + r[1] + ")"), n = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length) throw new Error("Invalid state ref '" + e + "'");
		return {
			state: n[1],
			paramExpr: n[3] || null
		}
	}
	function A(e) {
		var t = e.parent().inheritedData("$uiView");
		return t && t.state && t.state.name ? t.state : void 0
	}
	function k(e, n) {
		var r = ["location", "inherit", "reload"];
		return {
			restrict: "A",
			require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
			link: function(i, o, a, s) {
				var u = E(a.uiSref, e.current.name),
					l = null,
					c = A(o) || e.$current,
					f = null,
					d = "A" === o.prop("tagName"),
					p = "FORM" === o[0].nodeName,
					h = p ? "action" : "href",
					v = !0,
					g = {
						relative: c,
						inherit: !0
					},
					m = i.$eval(a.uiSrefOpts) || {};
				t.forEach(r, function(e) {
					e in m && (g[e] = m[e])
				});
				var y = function(n) {
						if (n && (l = t.copy(n)), v) {
							f = e.href(u.state, l, g);
							var r = s[1] || s[0];
							return r && r.$$setStateInfo(u.state, l), null === f ? (v = !1, !1) : void a.$set(h, f)
						}
					};
				u.paramExpr && (i.$watch(u.paramExpr, function(e) {
					e !== l && y(e)
				}, !0), l = t.copy(i.$eval(u.paramExpr))), y(), p || o.bind("click", function(t) {
					var r = t.which || t.button;
					if (!(r > 1 || t.ctrlKey || t.metaKey || t.shiftKey || o.attr("target"))) {
						var i = n(function() {
							e.go(u.state, l, g)
						});
						t.preventDefault();
						var a = d && !f ? 1 : 0;
						t.preventDefault = function() {
							a-- <= 0 && n.cancel(i)
						}
					}
				})
			}
		}
	}
	function N(e, t, n) {
		return {
			restrict: "A",
			controller: ["$scope", "$element", "$attrs", function(t, r, i) {
				function o() {
					a() ? r.addClass(l) : r.removeClass(l)
				}
				function a() {
					return "undefined" != typeof i.uiSrefActiveEq ? s && e.is(s.name, u) : s && e.includes(s.name, u)
				}
				var s, u, l;
				l = n(i.uiSrefActiveEq || i.uiSrefActive || "", !1)(t), this.$$setStateInfo = function(t, n) {
					s = e.get(t, A(r)), u = n, o()
				}, t.$on("$stateChangeSuccess", o)
			}]
		}
	}
	function _(e) {
		var t = function(t) {
				return e.is(t)
			};
		return t.$stateful = !0, t
	}
	function D(e) {
		var t = function(t) {
				return e.includes(t)
			};
		return t.$stateful = !0, t
	}
	var M = t.isDefined,
		O = t.isFunction,
		P = t.isString,
		j = t.isObject,
		R = t.isArray,
		L = t.forEach,
		q = t.extend,
		I = t.copy;
	t.module("ui.router.util", ["ng"]), t.module("ui.router.router", ["ui.router.util"]), t.module("ui.router.state", ["ui.router.router", "ui.router.util"]), t.module("ui.router", ["ui.router.state"]), t.module("ui.router.compat", ["ui.router"]), h.$inject = ["$q", "$injector"], t.module("ui.router.util").service("$resolve", h), v.$inject = ["$http", "$templateCache", "$injector"], t.module("ui.router.util").service("$templateFactory", v);
	var F;
	g.prototype.concat = function(e, t) {
		var n = {
			caseInsensitive: F.caseInsensitive(),
			strict: F.strictMode(),
			squash: F.defaultSquashPolicy()
		};
		return new g(this.sourcePath + e + this.sourceSearch, q(n, t), this)
	}, g.prototype.toString = function() {
		return this.source
	}, g.prototype.exec = function(e, t) {
		function n(e) {
			function t(e) {
				return e.split("").reverse().join("")
			}
			function n(e) {
				return e.replace(/\\-/, "-")
			}
			var r = t(e).split(/-(?!\\)/),
				i = p(r, t);
			return p(i, n).reverse()
		}
		var r = this.regexp.exec(e);
		if (!r) return null;
		t = t || {};
		var i, o, a, s = this.parameters(),
			u = s.length,
			l = this.segments.length - 1,
			c = {};
		if (l !== r.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
		for (i = 0; l > i; i++) {
			a = s[i];
			var f = this.params[a],
				d = r[i + 1];
			for (o = 0; o < f.replace; o++) f.replace[o].from === d && (d = f.replace[o].to);
			d && f.array === !0 && (d = n(d)), c[a] = f.value(d)
		}
		for (; u > i; i++) a = s[i], c[a] = this.params[a].value(t[a]);
		return c
	}, g.prototype.parameters = function(e) {
		return M(e) ? this.params[e] || null : this.$$paramNames
	}, g.prototype.validates = function(e) {
		return this.params.$$validates(e)
	}, g.prototype.format = function(e) {
		function t(e) {
			return encodeURIComponent(e).replace(/-/g, function(e) {
				return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
			})
		}
		e = e || {};
		var n = this.segments,
			r = this.parameters(),
			i = this.params;
		if (!this.validates(e)) return null;
		var o, a = !1,
			s = n.length - 1,
			u = r.length,
			l = n[0];
		for (o = 0; u > o; o++) {
			var c = s > o,
				f = r[o],
				d = i[f],
				h = d.value(e[f]),
				v = d.isOptional && d.type.equals(d.value(), h),
				g = v ? d.squash : !1,
				m = d.type.encode(h);
			if (c) {
				var y = n[o + 1];
				if (g === !1) null != m && (l += R(m) ? p(m, t).join("-") : encodeURIComponent(m)), l += y;
				else if (g === !0) {
					var $ = l.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
					l += y.match($)[1]
				} else P(g) && (l += g + y)
			} else {
				if (null == m || v && g !== !1) continue;
				R(m) || (m = [m]), m = p(m, encodeURIComponent).join("&" + f + "="), l += (a ? "&" : "?") + (f + "=" + m), a = !0
			}
		}
		return l
	}, m.prototype.is = function() {
		return !0
	}, m.prototype.encode = function(e) {
		return e
	}, m.prototype.decode = function(e) {
		return e
	}, m.prototype.equals = function(e, t) {
		return e == t
	}, m.prototype.$subPattern = function() {
		var e = this.pattern.toString();
		return e.substr(1, e.length - 2)
	}, m.prototype.pattern = /.*/, m.prototype.toString = function() {
		return "{Type:" + this.name + "}"
	}, m.prototype.$asArray = function(e, t) {
		function r(e, t) {
			function r(e, t) {
				return function() {
					return e[t].apply(e, arguments)
				}
			}
			function i(e) {
				return R(e) ? e : M(e) ? [e] : []
			}
			function o(e) {
				switch (e.length) {
				case 0:
					return n;
				case 1:
					return "auto" === t ? e[0] : e;
				default:
					return e
				}
			}
			function a(e) {
				return !e
			}
			function s(e, t) {
				return function(n) {
					n = i(n);
					var r = p(n, e);
					return t === !0 ? 0 === d(r, a).length : o(r)
				}
			}
			function u(e) {
				return function(t, n) {
					var r = i(t),
						o = i(n);
					if (r.length !== o.length) return !1;
					for (var a = 0; a < r.length; a++) if (!e(r[a], o[a])) return !1;
					return !0
				}
			}
			this.encode = s(r(e, "encode")), this.decode = s(r(e, "decode")), this.is = s(r(e, "is"), !0), this.equals = u(r(e, "equals")), this.pattern = e.pattern, this.$arrayMode = t
		}
		if (!e) return this;
		if ("auto" === e && !t) throw new Error("'auto' array mode is for query parameters only");
		return new r(this, e)
	},
	t.module("ui.router.util").provider("$urlMatcherFactory", y),
	t.module("ui.router.util").run(["$urlMatcherFactory", function() {}]),
	$.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"],
	t.module("ui.router.router").provider("$urlRouter", $),
	b.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"],
	t.module("ui.router.state").value("$stateParams", {}).provider("$state", b),
	w.$inject = [], t.module("ui.router.state").provider("$view", w),
	t.module("ui.router.state").provider("$uiViewScroll", x),
	C.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"],
	S.$inject = ["$compile", "$controller", "$state", "$interpolate"],
	t.module("ui.router.state").directive("uiView", C),
	t.module("ui.router.state").directive("uiView", S),
	k.$inject = ["$state", "$timeout"],
	N.$inject = ["$state", "$stateParams", "$interpolate"],
	t.module("ui.router.state").directive("uiSref", k).directive("uiSrefActive", N).directive("uiSrefActiveEq", N),
	_.$inject = ["$state"],
	D.$inject = ["$state"],
	t.module("ui.router.state").filter("isState", _).filter("includedByState", D)
}(window, window.angular),


window.jQuery &&
function(e) { // jquery 扩展功能
	e.extend({
		xml2json: function(t, n) {
			function r(t, a) {
				if (!t) return null;
				var s = "",
					u = null,
					l = null;
				t.nodeType, i(t.localName || t.nodeName), t.text || t.nodeValue || "", t.childNodes && t.childNodes.length > 0 && e.each(t.childNodes, function(e, t) {
					var n = t.nodeType,
						a = i(t.localName || t.nodeName),
						l = t.text || t.nodeValue || "";
					if (8 != n) if (3 != n && 4 != n && a) u = u || {}, u[a] ? (u[a].length || (u[a] = o(u[a])), u[a] = o(u[a]), u[a][u[a].length] = r(t, !0), u[a].length = u[a].length) : u[a] = r(t);
					else {
						if (l.match(/^\s+$/)) return;
						s += l.replace(/^\s+/, "").replace(/\s+$/, "")
					}
				}), t.attributes && t.attributes.length > 0 && (l = {}, u = u || {}, e.each(t.attributes, function(e, t) {
					var n = i(t.name),
						r = t.value;
					l[n] = r, u[n] ? (u[cnn] = o(u[cnn]), u[n][u[n].length] = r, u[n].length = u[n].length) : u[n] = r
				})), u && (u = e.extend("" != s ? new String(s) : {}, u || {}), s = u.text ? [u.text || ""].concat([s]) : s, s && (u.text = s), s = "");
				var c = u || s;
				return n && (s && (c = {}), s = c.text || s || "", s && (c.text = s), a || (c = o(c))), c
			}
			if (!t) return {};
			var i = function(e) {
					return String(e || "").replace(/-/g, "_")
				},
				o = function(t) {
					return e.isArray(t) || (t = [t]), t.length = t.length, t
				};
			if ("string" == typeof t && (t = e.text2xml(t)), t.nodeType) {
				if (3 == t.nodeType || 4 == t.nodeType) return t.nodeValue;
				var a = 9 == t.nodeType ? t.documentElement : t,
					s = r(a, !0);
				return t = null, a = null, s
			}
		},
		text2xml: function(t) {
			return e.parseXML(t)
		}
	})
}(jQuery), !
function(e, t, n) {
	"use strict";

	function r(t) {
		if (c.webkit && !t) return {
			height: 0,
			width: 0
		};
		if (!c.data.outer) {
			var n = {
				border: "none",
				"box-sizing": "content-box",
				height: "200px",
				margin: "0",
				padding: "0",
				width: "200px"
			};
			c.data.inner = e("<div>").css(e.extend({}, n)), c.data.outer = e("<div>").css(e.extend({
				left: "-1000px",
				overflow: "scroll",
				position: "absolute",
				top: "-1000px"
			}, n)).append(c.data.inner).appendTo("body")
		}
		return c.data.outer.scrollLeft(1e3).scrollTop(1e3), {
			height: Math.ceil(c.data.outer.offset().top - c.data.inner.offset().top || 0),
			width: Math.ceil(c.data.outer.offset().left - c.data.inner.offset().left || 0)
		}
	}
	function i(n, r) {
		return e(t).on({
			"blur.scrollbar": function() {
				e(t).add("body").off(".scrollbar"), n && n()
			},
			"dragstart.scrollbar": function(e) {
				return e.preventDefault(), !1
			},
			"mouseup.scrollbar": function() {
				e(t).add("body").off(".scrollbar"), n && n()
			}
		}), e("body").on({
			"selectstart.scrollbar": function(e) {
				return e.preventDefault(), !1
			}
		}), r && r.preventDefault(), !1
	}
	function o() {
		var e = r(!0);
		return !(e.height || e.width)
	}
	function a(e) {
		var t = e.originalEvent;
		return t.axis && t.axis === t.HORIZONTAL_AXIS ? !1 : t.wheelDeltaX ? !1 : !0
	}
	var s = !1,
		u = 1,
		l = "px",
		c = {
			data: {},
			macosx: -1 !== n.navigator.platform.toLowerCase().indexOf("mac"),
			mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(n.navigator.userAgent),
			overlay: null,
			scroll: null,
			scrolls: [],
			webkit: /WebKit/.test(n.navigator.userAgent),
			log: s ?
			function(t, r) {
				var i = t;
				r && "string" != typeof t && (i = [], e.each(t, function(e, t) {
					i.push('"' + e + '": ' + t)
				}), i = i.join(", ")), n.console && n.console.log ? n.console.log(i) : alert(i)
			} : function() {}
		},
		f = {
			autoScrollSize: !0,
			autoUpdate: !0,
			debug: !1,
			disableBodyScroll: !1,
			duration: 200,
			ignoreMobile: !0,
			ignoreOverlay: !0,
			scrollStep: 30,
			showArrows: !1,
			stepScrolling: !0,
			type: "simple",
			scrollx: null,
			scrolly: null,
			onDestroy: null,
			onInit: null,
			onScroll: null,
			onUpdate: null
		},
		d = function(t, i) {
			c.scroll || (c.log("Init jQuery Scrollbar v0.2.6"), c.overlay = o(), c.scroll = r(), v(), e(n).resize(function() {
				var e = !1;
				if (c.scroll && (c.scroll.height || c.scroll.width)) {
					var t = r();
					(t.height != c.scroll.height || t.width != c.scroll.width) && (c.scroll = t, e = !0)
				}
				v(e)
			})), this.container = t, this.options = e.extend({}, f, n.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, this.init(i)
		};
	d.prototype = {
		destroy: function() {
			if (this.wrapper) {
				var n = this.container.scrollLeft(),
					r = this.container.scrollTop();
				this.container.insertBefore(this.wrapper).css({
					height: "",
					margin: ""
				}).removeClass("scroll-content").removeClass("scroll-scrollx_visible").removeClass("scroll-scrolly_visible").off(".scrollbar").scrollLeft(n).scrollTop(r), this.scrollx.scrollbar.removeClass("scroll-scrollx_visible").find("div").andSelf().off(".scrollbar"), this.scrolly.scrollbar.removeClass("scroll-scrolly_visible").find("div").andSelf().off(".scrollbar"), this.wrapper.remove(), e(t).add("body").off(".scrollbar"), e.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
			}
		},
		getScrollbar: function(t) {
			var n = this.options["scroll" + t],
				r = {
					advanced: '<div class="scroll-element_corner"></div><div class="scroll-arrow scroll-arrow_less"></div><div class="scroll-arrow scroll-arrow_more"></div><div class="scroll-element_outer">    <div class="scroll-element_size"></div>    <div class="scroll-element_inner-wrapper">        <div class="scroll-element_inner scroll-element_track">            <div class="scroll-element_inner-bottom"></div>        </div>    </div>    <div class="scroll-bar">        <div class="scroll-bar_body">            <div class="scroll-bar_body-inner"></div>        </div>        <div class="scroll-bar_bottom"></div>        <div class="scroll-bar_center"></div>    </div></div>',
					simple: '<div class="scroll-element_outer">    <div class="scroll-element_size"></div>    <div class="scroll-element_track"></div>    <div class="scroll-bar"></div></div>'
				},
				i = r[this.options.type] ? this.options.type : "advanced";
			return n = n ? "string" == typeof n ? e(n).appendTo(this.wrapper) : e(n) : e("<div>").addClass("scroll-element").html(r[i]).appendTo(this.wrapper), this.options.showArrows && n.addClass("scroll-element_arrows_visible"), n.addClass("scroll-" + t)
		},
		init: function(n) {
			var r = this,
				o = this.container,
				s = this.containerWrapper || o,
				f = e.extend(this.options, n || {}),
				d = {
					x: this.scrollx,
					y: this.scrolly
				},
				p = this.wrapper,
				h = {
					scrollLeft: o.scrollLeft(),
					scrollTop: o.scrollTop()
				};
			if (c.mobile && f.ignoreMobile || c.overlay && f.ignoreOverlay || c.macosx && !c.webkit) return !1;
			if (p) s.css({
				height: "",
				"margin-bottom": -1 * c.scroll.height + l,
				"margin-right": -1 * c.scroll.width + l
			});
			else {
				if (this.wrapper = p = e("<div>").addClass("scroll-wrapper").addClass(o.attr("class")).css("position", "absolute" == o.css("position") ? "absolute" : "relative").insertBefore(o).append(o), o.is("textarea") && (this.containerWrapper = s = e("<div>").insertBefore(o).append(o), p.addClass("scroll-textarea")), s.addClass("scroll-content").css({
					height: "",
					"margin-bottom": -1 * c.scroll.height + l,
					"margin-right": -1 * c.scroll.width + l
				}), o.on("scroll.scrollbar", function() {
					e.isFunction(f.onScroll) && f.onScroll.call(r, {
						maxScroll: d.y.maxScrollOffset,
						scroll: o.scrollTop(),
						size: d.y.size,
						visible: d.y.visible
					}, {
						maxScroll: d.x.maxScrollOffset,
						scroll: o.scrollLeft(),
						size: d.x.size,
						visible: d.x.visible
					}), d.x.isVisible && d.x.scroller.css("left", o.scrollLeft() * d.x.kx + l), d.y.isVisible && d.y.scroller.css("top", o.scrollTop() * d.y.kx + l)
				}), p.on("scroll", function() {
					p.scrollTop(0).scrollLeft(0)
				}), f.disableBodyScroll) {
					var v = function(e) {
							a(e) ? d.y.isVisible && d.y.mousewheel(e) : d.x.isVisible && d.x.mousewheel(e)
						};
					p.on({
						"MozMousePixelScroll.scrollbar": v,
						"mousewheel.scrollbar": v
					}), c.mobile && p.on("touchstart.scrollbar", function(n) {
						var r = n.originalEvent.touches && n.originalEvent.touches[0] || n,
							i = {
								pageX: r.pageX,
								pageY: r.pageY
							},
							a = {
								left: o.scrollLeft(),
								top: o.scrollTop()
							};
						e(t).on({
							"touchmove.scrollbar": function(e) {
								var t = e.originalEvent.targetTouches && e.originalEvent.targetTouches[0] || e;
								o.scrollLeft(a.left + i.pageX - t.pageX), o.scrollTop(a.top + i.pageY - t.pageY), e.preventDefault()
							},
							"touchend.scrollbar": function() {
								e(t).off(".scrollbar")
							}
						})
					})
				}
				e.isFunction(f.onInit) && f.onInit.apply(this, [o])
			}
			e.each(d, function(n, s) {
				var l = null,
					c = 1,
					p = "x" == n ? "scrollLeft" : "scrollTop",
					h = f.scrollStep,
					v = function() {
						var e = o[p]();
						o[p](e + h), 1 == c && e + h >= g && (e = o[p]()), -1 == c && g >= e + h && (e = o[p]()), o[p]() == e && l && l()
					},
					g = 0;
				s.scrollbar || (s.scrollbar = r.getScrollbar(n), s.scroller = s.scrollbar.find(".scroll-bar"), s.mousewheel = function(e) {
					if (!s.isVisible || "x" == n && a(e)) return !0;
					if ("y" == n && !a(e)) return d.x.mousewheel(e), !0;
					var t = -1 * e.originalEvent.wheelDelta || e.originalEvent.detail,
						i = s.size - s.visible - s.offset;
					return 0 >= g && 0 > t || g >= i && t > 0 || (g += t, 0 > g && (g = 0), g > i && (g = i), r.scrollTo = r.scrollTo || {}, r.scrollTo[p] = g, setTimeout(function() {
						r.scrollTo && (o.stop().animate(r.scrollTo, 240, "linear", function() {
							g = o[p]()
						}), r.scrollTo = null)
					}, 1)), e.preventDefault(), !1
				}, s.scrollbar.on({
					"MozMousePixelScroll.scrollbar": s.mousewheel,
					"mousewheel.scrollbar": s.mousewheel,
					"mouseenter.scrollbar": function() {
						g = o[p]()
					}
				}), s.scrollbar.find(".scroll-arrow, .scroll-element_track").on("mousedown.scrollbar", function(t) {
					if (t.which != u) return !0;
					c = 1;
					var a = {
						eventOffset: t["x" == n ? "pageX" : "pageY"],
						maxScrollValue: s.size - s.visible - s.offset,
						scrollbarOffset: s.scroller.offset()["x" == n ? "left" : "top"],
						scrollbarSize: s.scroller["x" == n ? "outerWidth" : "outerHeight"]()
					},
						d = 0,
						m = 0;
					return e(this).hasClass("scroll-arrow") ? (c = e(this).hasClass("scroll-arrow_more") ? 1 : -1, h = f.scrollStep * c, g = c > 0 ? a.maxScrollValue : 0) : (c = a.eventOffset > a.scrollbarOffset + a.scrollbarSize ? 1 : a.eventOffset < a.scrollbarOffset ? -1 : 0, h = Math.round(.75 * s.visible) * c, g = a.eventOffset - a.scrollbarOffset - (f.stepScrolling ? 1 == c ? a.scrollbarSize : 0 : Math.round(a.scrollbarSize / 2)), g = o[p]() + g / s.kx), r.scrollTo = r.scrollTo || {}, r.scrollTo[p] = f.stepScrolling ? o[p]() + h : g, f.stepScrolling && (l = function() {
						g = o[p](), clearInterval(m), clearTimeout(d), d = 0, m = 0
					}, d = setTimeout(function() {
						m = setInterval(v, 40)
					}, f.duration + 100)), setTimeout(function() {
						r.scrollTo && (o.animate(r.scrollTo, f.duration), r.scrollTo = null)
					}, 1), i(l, t)
				}), s.scroller.on("mousedown.scrollbar", function(r) {
					if (r.which != u) return !0;
					var a = r["x" == n ? "pageX" : "pageY"],
						l = o[p]();
					return s.scrollbar.addClass("scroll-draggable"), e(t).on("mousemove.scrollbar", function(e) {
						var t = parseInt((e["x" == n ? "pageX" : "pageY"] - a) / s.kx, 10);
						o[p](l + t)
					}), i(function() {
						s.scrollbar.removeClass("scroll-draggable"), g = o[p]()
					}, r)
				}))
			}), e.each(d, function(e, t) {
				var n = "scroll-scroll" + e + "_visible",
					r = "x" == e ? d.y : d.x;
				t.scrollbar.removeClass(n), r.scrollbar.removeClass(n), s.removeClass(n)
			}), e.each(d, function(t, n) {
				e.extend(n, "x" == t ? {
					offset: parseInt(o.css("left"), 10) || 0,
					size: o.prop("scrollWidth"),
					visible: p.width()
				} : {
					offset: parseInt(o.css("top"), 10) || 0,
					size: o.prop("scrollHeight"),
					visible: p.height()
				})
			});
			var g = function(t, n) {
					var r = "scroll-scroll" + t + "_visible",
						i = "x" == t ? d.y : d.x,
						a = parseInt(o.css("x" == t ? "left" : "top"), 10) || 0,
						u = n.size,
						f = n.visible + a;
					n.isVisible = u - f > 1, n.isVisible ? (n.scrollbar.addClass(r), i.scrollbar.addClass(r), s.addClass(r)) : (n.scrollbar.removeClass(r), i.scrollbar.removeClass(r), s.removeClass(r)), "y" == t && (n.isVisible || n.size < n.visible) && s.css("height", f + c.scroll.height + l), (d.x.size != o.prop("scrollWidth") || d.y.size != o.prop("scrollHeight") || d.x.visible != p.width() || d.y.visible != p.height() || d.x.offset != (parseInt(o.css("left"), 10) || 0) || d.y.offset != (parseInt(o.css("top"), 10) || 0)) && (e.each(d, function(t, n) {
						e.extend(n, "x" == t ? {
							offset: parseInt(o.css("left"), 10) || 0,
							size: o.prop("scrollWidth"),
							visible: p.width()
						} : {
							offset: parseInt(o.css("top"), 10) || 0,
							size: o.prop("scrollHeight"),
							visible: p.height()
						})
					}), g("x" == t ? "y" : "x", i))
				};
			e.each(d, g), e.isFunction(f.onUpdate) && f.onUpdate.apply(this, [o]), e.each(d, function(e, t) {
				var n = "x" == e ? "left" : "top",
					r = "x" == e ? "outerWidth" : "outerHeight",
					i = "x" == e ? "width" : "height",
					a = parseInt(o.css(n), 10) || 0,
					s = t.size,
					u = t.visible + a,
					c = t.scrollbar.find(".scroll-element_size");
				c = c[r]() + (parseInt(c.css(n), 10) || 0), f.autoScrollSize && (t.scrollbarSize = parseInt(c * u / s, 10), t.scroller.css(i, t.scrollbarSize + l)), t.scrollbarSize = t.scroller[r](), t.kx = (c - t.scrollbarSize) / (s - u) || 1, t.maxScrollOffset = s - u
			}), o.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger("scroll")
		}
	}, e.fn.scrollbar = function(t, n) {
		var r = this;
		return "get" === t && (r = null), this.each(function() {
			var i = e(this);
			if (i.hasClass("scroll-wrapper") || "body" == i.get(0).nodeName) return !0;
			var o = i.data("scrollbar");
			if (o) {
				if ("get" === t) return r = o, !1;
				var a = "string" == typeof t && o[t] ? t : "init";
				if (o[a].apply(o, e.isArray(n) ? n : []), "destroy" === t) for (i.removeData("scrollbar"); e.inArray(o, c.scrolls) >= 0;) c.scrolls.splice(e.inArray(o, c.scrolls), 1)
			} else "string" != typeof t && (o = new d(i, t), i.data("scrollbar", o), c.scrolls.push(o));
			return !0
		}), r
	}, e.fn.scrollbar.options = f, n.angular && !
	function(e) {
		var t = e.module("jQueryScrollbar", []);
		t.directive("jqueryScrollbar", function() {
			return {
				link: function(e, t) {
					t.scrollbar(e.options).on("$destroy", function() {
						t.scrollbar("destroy")
					})
				},
				restring: "AC",
				scope: {
					options: "=jqueryScrollbar"
				}
			}
		})
	}(n.angular);
	var p = 0,
		h = 0,
		v = function(e) {
			var t, n, r, i, o, a, u;
			for (t = 0; t < c.scrolls.length; t++) i = c.scrolls[t], n = i.container, r = i.options, o = i.wrapper, a = i.scrollx, u = i.scrolly, (e || r.autoUpdate && o && o.is(":visible") && (n.prop("scrollWidth") != a.size || n.prop("scrollHeight") != u.size || o.width() != a.visible || o.height() != u.visible)) && (i.init(), s && (c.log({
				scrollHeight: n.prop("scrollHeight") + ":" + i.scrolly.size,
				scrollWidth: n.prop("scrollWidth") + ":" + i.scrollx.size,
				visibleHeight: o.height() + ":" + i.scrolly.visible,
				visibleWidth: o.width() + ":" + i.scrollx.visible
			}, !0), h++));
			s && h > 10 ? (c.log("Scroll updates exceed 10"), v = function() {}) : (clearTimeout(p), p = setTimeout(v, 300))
		}
}(jQuery, document, window),

!
function(e, t, n, r) {
	var i = e(t);
	e.fn.lazyload = function(o) {
		function a() {
			var t = 0;
			u.each(function() {
				var n = e(this);
				if (!l.skip_invisible || n.is(":visible")) if (e.abovethetop(this, l) || e.leftofbegin(this, l));
				else if (e.belowthefold(this, l) || e.rightoffold(this, l)) {
					if (++t > l.failure_limit) return !1
				} else n.trigger("appear"), t = 0
			})
		}
		var s, u = this,
			l = {
				threshold: 0,
				failure_limit: 0,
				event: "scroll",
				effect: "show",
				container: t,
				data_attribute: "original",
				skip_invisible: !0,
				appear: null,
				load: null,
				placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
			};
		return o && (r !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), r !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), e.extend(l, o)), s = l.container === r || l.container === t ? i : e(l.container), 0 === l.event.indexOf("scroll") && s.bind(l.event, function() {
			return a()
		}), this.each(function() {
			var t = this,
				n = e(t);
			t.loaded = !1, (n.attr("src") === r || n.attr("src") === !1) && n.is("img") && n.attr("src", l.placeholder), n.one("appear", function() {
				if (!this.loaded) {
					if (l.appear) {
						var r = u.length;
						l.appear.call(t, r, l)
					}
					e("<img />").bind("load", function() {
						var r = n.attr("data-" + l.data_attribute);
						n.hide(), n.is("img") ? n.attr("src", r) : n.css("background-image", "url('" + r + "')"), n[l.effect](l.effect_speed), t.loaded = !0;
						var i = e.grep(u, function(e) {
							return !e.loaded
						});
						if (u = e(i), l.load) {
							var o = u.length;
							l.load.call(t, o, l)
						}
					}).attr("src", n.attr("data-" + l.data_attribute))
				}
			}), 0 !== l.event.indexOf("scroll") && n.bind(l.event, function() {
				t.loaded || n.trigger("appear")
			})
		}), i.bind("resize", function() {
			a()
		}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && i.bind("pageshow", function(t) {
			t.originalEvent && t.originalEvent.persisted && u.each(function() {
				e(this).trigger("appear")
			})
		}), e(n).ready(function() {
			a()
		}), this
	}, e.belowthefold = function(n, o) {
		var a;
		return a = o.container === r || o.container === t ? (t.innerHeight ? t.innerHeight : i.height()) + i.scrollTop() : e(o.container).offset().top + e(o.container).height(), a <= e(n).offset().top - o.threshold
	}, e.rightoffold = function(n, o) {
		var a;
		return a = o.container === r || o.container === t ? i.width() + i.scrollLeft() : e(o.container).offset().left + e(o.container).width(), a <= e(n).offset().left - o.threshold
	}, e.abovethetop = function(n, o) {
		var a;
		return a = o.container === r || o.container === t ? i.scrollTop() : e(o.container).offset().top, a >= e(n).offset().top + o.threshold + e(n).height()
	}, e.leftofbegin = function(n, o) {
		var a;
		return a = o.container === r || o.container === t ? i.scrollLeft() : e(o.container).offset().left, a >= e(n).offset().left + o.threshold + e(n).width()
	}, e.inviewport = function(t, n) {
		return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
	}, e.extend(e.expr[":"], {
		"below-the-fold": function(t) {
			return e.belowthefold(t, {
				threshold: 0
			})
		},
		"above-the-top": function(t) {
			return !e.belowthefold(t, {
				threshold: 0
			})
		},
		"right-of-screen": function(t) {
			return e.rightoffold(t, {
				threshold: 0
			})
		},
		"left-of-screen": function(t) {
			return !e.rightoffold(t, {
				threshold: 0
			})
		},
		"in-viewport": function(t) {
			return e.inviewport(t, {
				threshold: 0
			})
		},
		"above-the-fold": function(t) {
			return !e.belowthefold(t, {
				threshold: 0
			})
		},
		"right-of-fold": function(t) {
			return e.rightoffold(t, {
				threshold: 0
			})
		},
		"left-of-fold": function(t) {
			return !e.rightoffold(t, {
				threshold: 0
			})
		}
	})
}(jQuery, window, document),


!
function(_aoUndefined) {
	function _getNameId(e) {
		var t = typeof e;
		return "number" == t ? e : "string" == t ? _oNameMap[e] : _aoUndefined
	}
	function _getWebkitContentType(e, t) {
		return navigator && navigator.mimeTypes && navigator.mimeTypes[e] ? e : t
	}
	function _compareVersion(e, t) {
		for (var n = e.split("."), r = n.length, i = t.split("."), o = i.length, a = 0; r > a && o > a; a++) {
			var s = parseInt(n[a]),
				u = parseInt(i[a]);
			if (s != u) return s > u ? 1 : -1
		}
		return r > a ? 1 : o > a ? -1 : 0
	}
	function _checkPlugin(e) {
		if (!(_bIsWin || _bIsMac && _compareVersion(_sMacVer, "10.6.8") >= 0)) return -5;
		if (_bIsWin) {
			if (_sFFVer && _compareVersion(_sFFVer, "3.0.8") < 0 && (!navigator.buildID || parseInt(navigator.buildID.substr(0, 8)) < 20090701) || _sQBVer && _compareVersion(_sQBVer, "6.5") < 0) return -3
		} else if (_bIsMac && (_sFFVer && _compareVersion(_sFFVer, "3.6") < -1 || _sChromeVer && _compareVersion(_sChromeVer, "8") < -1 || _sSafariVer && _compareVersion(_sSafariVer, "5") < -1)) return -3;
		var t = _QMAXInfo.get("name")[e],
			n = _QMAXInfo.get("type")[e],
			r = navigator.plugins,
			i = !1;
		if (!r) return -3;
		try {
			r.refresh(!1)
		} catch (o) {}
		if (!t) return -6;
		var a = navigator.mimeTypes[n];
		if (a) for (; !(3 != e && (_sAgent.indexOf("vista") > -1 || /nt 6/gi.test(_sAgent)) && "application/x-tencent-qmail" == n && a.enabledPlugin && !a.enabledPlugin.description.split("#")[1] || _bIsMac && 3 != e && "1.0.0.0" == (/(\d+(?:\.\d+)+)/.test(a.enabledPlugin && a.enabledPlugin.description || "") ? RegExp.$1 : "1.0.0.0"));) {
			i = !0;
			break
		}
		return i ? 0 : -2
	}
	function _createWebkitPlugin(e, t, n) {
		var r, i = null,
			o = _QMAXInfo.get("type")[e],
			t = t || window;
		if (0 == _checkPlugin(e)) {
			var a = n || "QQMailPluginIns" + o;
			(r = t.document.getElementById(a)) || (r = t.document.createElement("embed"), r.id = a, r.type = o, r.style.cssText = "width:1px;height:1px;position:absolute;top:0;left:0", t.document.body.insertBefore(r, t.document.body.firstChild));
			try {
				switch (e) {
				case 0:
					i = r.CreateScreenCapture();
					break;
				case 2:
					i = r.CreateUploader();
					break;
				case 3:
					i = r
				}
			} catch (s) {}
		}
		return i
	}
	function _createActiveX(e, t) {
		t = t || window;
		var n = null;
		try {
			if (n = new t.ActiveXObject(_QMAXInfo._moInfos_IE.progID[e]), 4 == e) {
				var r = new t.ActiveXObject(_QMAXInfo._moInfos_IE.progID[0]),
					i = "";
				try {
					i = r.GetDLLFileName()
				} catch (o) {}
				var a = document.createElement("div");
				a.innerHTML = '<object classid="CLSID:' + (-1 != i.indexOf("_2.dll") ? "B0F77C07-8507-4AB9-B130-CC882FDDC046" : "F4BA5508-8AB7-45C1-8D0A-A1237AD82399") + '"></object>', n = a.firstChild
			}
		} catch (s) {}
		return n
	}
	function _getVersion(e) {
		var t = _getNameId(e),
			n = /(number|string)/.test(typeof e) ? (_bSupportActiveX ? _createActiveX : _createWebkitPlugin)(t) : e,
			r = "";
		try {
			r = n.Version || ""
		} catch (i) {}
		return r
	}
	function _create(e, t, n) {
		t = t || window;
		var r = _getNameId(e),
			i = (_bSupportActiveX ? _createActiveX : _createWebkitPlugin)(r, t, n);
		return i
	}
	function _hackSafari(e) {
		if (_sSafariVer && e != window) {
			var t = _createWebkitPlugin(_anPluginId, e, _asAddonInstanceId);
			try {
				switch (_anPluginId) {
				case 0:
					t.OnCaptureFinished = function() {};
					break;
				case 2:
				case 3:
					t.OnEvent = function() {}
				}
			} catch (n) {}
		}
	}
	function _isSupport(e) {
		var t = _getNameId(e),
			n = _QMAXInfo.get("lastVer")[t],
			r = _QMAXInfo.get("miniVer")[t];
		if (t !== _aoUndefined && n) {
			if (!_bSupportActiveX) {
				var i = _checkPlugin(t);
				if (0 > i) return i
			}
			var o = (_bSupportActiveX ? _createActiveX : _createWebkitPlugin)(t),
				a = _getVersion(o);
			return !o || 4 != t && !a ? -2 : 4 == t ? 2 : _compareVersion(a, n) < 0 ? _compareVersion(a, r) < 0 ? -1 : 1 : 2
		}
		return -6
	}
	var _sAgent = navigator.userAgent.toLowerCase(),
		_bIsWin = /(windows|win32)/.test(_sAgent),
		_bIsMac = /(macintosh|mac os x)/.test(_sAgent),
		_sMacVer = /mac os x ((\d+|\.|_)+)/.test(_sAgent) && RegExp.$1.replace(/_/g, "."),
		_sFFVer = /firefox\/((\d|\.)+)/.test(_sAgent) && "" + RegExp.$1,
		_sChromeVer = /chrome\/((\d|\.)+)/.test(_sAgent) && "" + RegExp.$1,
		_sSafariVer = /version\/((\d|\.)+)/i.test(_sAgent) && "" + RegExp.$1,
		_sQBVer = /qqbrowser\/((\d|\.)+)/i.test(_sAgent) && RegExp.$1,
		_bSupportActiveX = window.ActiveXObject != _aoUndefined,
		_oNameMap = {
			screencapture: 0,
			uploader: 2,
			ftn: 3,
			dropfile: 4
		},
		_sQQMailContentType = _getWebkitContentType("application/x-tencent-qmail-webkit", "application/x-tencent-qmail"),
		_sFtnContentType = _getWebkitContentType("application/txftn-webkit", "application/txftn"),
		_sWinIEQQMailLastVersion = "1.0.1.51",
		_sWinIEQQMailMiniVersion = "1.0.1.28",
		_sWinWebkitQQMailLastVersion = "1.0.1.51",
		_sWinWebkitQQMailMiniVersion = "1.0.1.28",
		_sMacWebkitQQMailLastVersion = "1.0.1.34",
		_sMacWebkitQQMailMiniVersion = "1.0.1.34",
		_QMAXInfo = {
			_moInfos_IE: {
				progID: ["TXGYMailActiveX.ScreenCapture", "", "TXGYMailActiveX.Uploader", "TXFTNActiveX.FTNUpload", "TXGYMailActiveX.DropFile"],
				lastVer: [_sWinIEQQMailLastVersion, "", _sWinIEQQMailLastVersion, "1.0.0.18", _sWinIEQQMailLastVersion],
				miniVer: [_sWinIEQQMailMiniVersion, "", _sWinIEQQMailMiniVersion, "1.0.0.11", _sWinIEQQMailMiniVersion]
			},
			_moInfos_WebKit: {
				name: ["QQMail Plugin", "", "QQMail Plugin", "Tencent FTN plug-in", ""],
				type: [_sQQMailContentType, "", _sQQMailContentType, _sFtnContentType, ""],
				lastVer: [_sWinWebkitQQMailLastVersion, "", _sWinWebkitQQMailLastVersion, "1.0.0.3", ""],
				miniVer: [_sWinWebkitQQMailMiniVersion, "", _sWinWebkitQQMailMiniVersion, "1.0.0.1", ""]
			},
			_moInfos_WebKitForMac: {
				name: ["QQMailPlugin", "", "QQMailPlugin", "Tencent FTN Plug-in", ""],
				type: [_sQQMailContentType, "", _sQQMailContentType, _sFtnContentType, ""],
				lastVer: [_sMacWebkitQQMailLastVersion, "", _sMacWebkitQQMailLastVersion, "1.0.0.3", ""],
				miniVer: [_sMacWebkitQQMailMiniVersion, "", _sMacWebkitQQMailMiniVersion, "1.0.0.3", ""]
			},
			get: function(e) {
				return (_bIsMac ? this._moInfos_WebKitForMac : _bSupportActiveX ? this._moInfos_IE : this._moInfos_WebKit)[e]
			}
		};
	window.QMActivex = {
		create: _create,
		isSupport: _isSupport,
		hackSafari: _hackSafari,
		getVersion: _getVersion,
		installUrl: location.protocol + "//mail.qq.com/cgi-bin/readtemplate?check=false&t=browser_addon",
		_getQMActivexPrivate: function(_asValue) {
			return eval(_asValue)
		}
	}
}(),

!
function(e, t, n) {
	"use strict";
	"undefined" != typeof module && module.exports ? module.exports = n(t, e) : "function" == typeof define && define.amd ? define("detect-zoom", function() {
		return n(t, e)
	}) : e[t] = n(t, e)
}(window, "detectZoom",

 function() {
	var e = function() {
			return window.devicePixelRatio || 1
		},
		t = function() {
			return {
				zoom: 1,
				devicePxPerCssPx: 1
			}
		},
		n = function() {
			var t = Math.round(screen.deviceXDPI / screen.logicalXDPI * 100) / 100;
			return {
				zoom: t,
				devicePxPerCssPx: t * e()
			}
		},
		r = function() {
			var t = Math.round(document.documentElement.offsetHeight / window.innerHeight * 100) / 100;
			return {
				zoom: t,
				devicePxPerCssPx: t * e()
			}
		},
		i = function() {
			var t = Math.round(window.outerWidth / window.innerWidth * 100) / 100;
			return {
				zoom: t,
				devicePxPerCssPx: t * e()
			}
		},
		o = function() {
			var t = Math.round(document.documentElement.clientWidth / window.innerWidth * 100) / 100;
			return {
				zoom: t,
				devicePxPerCssPx: t * e()
			}
		},
		a = function() {
			var t = 90 == Math.abs(window.orientation) ? screen.height : screen.width,
				n = t / window.innerWidth;
			return {
				zoom: n,
				devicePxPerCssPx: n * e()
			}
		},
		s = function() {
			var t = function(e) {
					return e.replace(/;/g, " !important;")
				},
				n = document.createElement("div");
			n.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0", n.setAttribute("style", t("font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;"));
			var r = document.createElement("div");
			r.setAttribute("style", t("width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;")), r.appendChild(n), document.body.appendChild(r);
			var i = 1e3 / n.clientHeight;
			return i = Math.round(100 * i) / 100, document.body.removeChild(r), {
				zoom: i,
				devicePxPerCssPx: i * e()
			}
		},
		u = function() {
			var e = f("min--moz-device-pixel-ratio", "", 0, 10, 20, 1e-4);
			return e = Math.round(100 * e) / 100, {
				zoom: e,
				devicePxPerCssPx: e
			}
		},
		l = function() {
			return {
				zoom: u().zoom,
				devicePxPerCssPx: e()
			}
		},
		c = function() {
			var t = window.top.outerWidth / window.top.innerWidth;
			return t = Math.round(100 * t) / 100, {
				zoom: t,
				devicePxPerCssPx: t * e()
			}
		},
		f = function(e, t, n, r, i, o) {
			function a(n, r, i) {
				var u = (n + r) / 2;
				if (0 >= i || o > r - n) return u;
				var l = "(" + e + ":" + u + t + ")";
				return s(l).matches ? a(u, r, i - 1) : a(n, u, i - 1)
			}
			var s, u, l, c;
			window.matchMedia ? s = window.matchMedia : (u = document.getElementsByTagName("head")[0], l = document.createElement("style"), u.appendChild(l), c = document.createElement("div"), c.className = "mediaQueryBinarySearch", c.style.display = "none", document.body.appendChild(c), s = function(e) {
				l.sheet.insertRule("@media " + e + "{.mediaQueryBinarySearch {text-decoration: underline} }", 0);
				var t = "underline" == getComputedStyle(c, null).textDecoration;
				return l.sheet.deleteRule(0), {
					matches: t
				}
			});
			var f = a(n, r, i);
			return c && (u.removeChild(l), document.body.removeChild(c)), f
		},
		d = function() {
			var e = t;
			return isNaN(screen.logicalXDPI) || isNaN(screen.systemXDPI) ? window.navigator.msMaxTouchPoints ? e = r : window.chrome && !(window.opera || navigator.userAgent.indexOf(" Opera") >= 0) ? e = i : Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? e = o : "orientation" in window && "webkitRequestAnimationFrame" in window ? e = a : "webkitRequestAnimationFrame" in window ? e = s : navigator.userAgent.indexOf("Opera") >= 0 ? e = c : window.devicePixelRatio ? e = l : u().zoom > .001 && (e = u) : e = n, e
		}();
	return {
		zoom: function() {
			return d().zoom
		},
		device: function() {
			return d().devicePxPerCssPx
		}
	}
}),

!
function(e) {
	e.fn.range = function() {
		return e.Range(this[0])
	};
	var t = function(e) {
			return e.replace(/([a-z])([a-z]+)/gi, function(e, t, n) {
				return t + n.toLowerCase()
			}).replace(/_/g, "")
		},
		n = function(e) {
			return e.replace(/^([a-z]+)_TO_([a-z]+)/i, function(e, t, n) {
				return n + "_TO_" + t
			})
		},
		r = function(e) {
			return e ? e.ownerDocument.defaultView || e.ownerDocument.parentWindow : window
		},
		i = {};
	e.Range = function(t) {
		return this.constructor !== e.Range ? new e.Range(t) : (t && t.jquery && (t = t[0]), void(!t || t.nodeType ? (this.win = r(t), this.win.document.createRange ? this.range = this.win.document.createRange() : this.win && this.win.document.body && this.win.document.body.createTextRange && (this.range = this.win.document.body.createTextRange()), t && this.select(t)) : null != t.clientX || null != t.pageX || null != t.left ? this.moveToPoint(t) : t.originalEvent && t.originalEvent.touches && t.originalEvent.touches.length ? this.moveToPoint(t.originalEvent.touches[0]) : t.originalEvent && t.originalEvent.changedTouches && t.originalEvent.changedTouches.length ? this.moveToPoint(t.originalEvent.changedTouches[0]) : this.range = t))
	}, e.Range.current = function(t) {
		var n, i = r(t);
		return i.getSelection ? (n = i.getSelection(), new e.Range(n.rangeCount ? n.getRangeAt(0) : i.document.createRange())) : new e.Range(i.document.selection.createRange())
	}, e.extend(e.Range.prototype, {
		moveToPoint: function(t) {
			var n = t.clientX,
				r = t.clientY;
			if (!n) {
				var a = h();
				n = (t.pageX || t.left || 0) - a.left, r = (t.pageY || t.top || 0) - a.top
			}
			if (i.moveToPoint) return this.range = e.Range().range, this.range.moveToPoint(n, r), this;
			for (var s = document.elementFromPoint(n, r), u = 0; u < s.childNodes.length; u++) {
				var l = s.childNodes[u];
				if (3 === l.nodeType || 4 === l.nodeType) for (var c = e.Range(l), f = c.toString().length, d = 1; f + 1 > d; d++) {
					var p = c.end(d).rect();
					if (p.left <= n && p.left + p.width >= n && p.top <= r && p.top + p.height >= r) return c.start(d - 1), this.range = c.range, this
				}
			}
			var v;
			o(s.childNodes, function(n) {
				var r = e.Range(n);
				return r.rect().top > t.clientY ? !1 : void(v = r)
			}), v ? (v.start(v.toString().length), this.range = v.range) : this.range = e.Range(s).range
		},
		window: function() {
			return this.win || window
		},
		overlaps: function(t) {
			t.nodeType && (t = e.Range(t).select(t));
			var n = this.compare("START_TO_START", t),
				r = this.compare("END_TO_END", t);
			return 0 >= n && r >= 0 ? !0 : n >= 0 && this.compare("START_TO_END", t) <= 0 ? !0 : this.compare("END_TO_START", t) >= 0 && 0 >= r ? !0 : !1
		},
		collapse: function(e) {
			return this.range.collapse(void 0 === e ? !0 : e), this
		},
		toString: function() {
			return "string" == typeof this.range.text ? this.range.text : this.range.toString()
		},
		start: function(t) {
			if (void 0 === t) {
				if (this.range.startContainer) return {
					container: this.range.startContainer,
					offset: this.range.startOffset
				};
				var n = this.clone().collapse().parent(),
					r = e.Range(n).select(n).collapse();
				return r.move("END_TO_START", this), {
					container: n,
					offset: r.toString().length
				}
			}
			if (this.range.setStart) if ("number" == typeof t) this.range.setStart(this.range.startContainer, t);
			else if ("string" == typeof t) {
				var i = c(this.range.startContainer, this.range.startOffset, parseInt(t, 10));
				this.range.setStart(i.node, i.offset)
			} else this.range.setStart(t.container, t.offset);
			else if ("string" == typeof t) this.range.moveStart("character", parseInt(t, 10));
			else {
				var o, a = this.start().container;
				"number" == typeof t ? o = t : (a = t.container, o = t.offset);
				var s = e.Range(a).collapse();
				s.range.move(o), this.move("START_TO_START", s)
			}
			return this
		},
		end: function(t) {
			if (void 0 === t) {
				if (this.range.startContainer) return {
					container: this.range.endContainer,
					offset: this.range.endOffset
				};
				var n = this.clone().collapse(!1).parent(),
					r = e.Range(n).select(n).collapse();
				return r.move("END_TO_END", this), {
					container: n,
					offset: r.toString().length
				}
			}
			if (this.range.setEnd) if ("number" == typeof t) this.range.setEnd(this.range.endContainer, t);
			else if ("string" == typeof t) {
				var i = c(this.range.endContainer, this.range.endOffset, parseInt(t, 10));
				this.range.setEnd(i.node, i.offset)
			} else this.range.setEnd(t.container, t.offset);
			else if ("string" == typeof t) this.range.moveEnd("character", parseInt(t, 10));
			else {
				var o, a = this.end().container;
				"number" == typeof t ? o = t : (a = t.container, o = t.offset);
				var s = e.Range(a).collapse();
				s.range.move(o), this.move("END_TO_START", s)
			}
			return this
		},
		parent: function() {
			if (this.range.commonAncestorContainer) return this.range.commonAncestorContainer;
			var t = this.range.parentElement(),
				n = this.range;
			return o(t.childNodes, function(r) {
				return e.Range(r).range.inRange(n) ? (t = r, !1) : void 0
			}), t
		},
		rect: function(t) {
			var n = this.range.getBoundingClientRect();
			if (n.height || n.width || (n = this.range.getClientRects()[0]), "page" === t) {
				var r = h();
				n = e.extend({}, n), n.top += r.top, n.left += r.left
			}
			return n
		},
		rects: function(t) {
			var n, r = e.map(e.makeArray(this.range.getClientRects()).sort(function(e, t) {
				return t.width * t.height - e.width * e.height
			}), function(t) {
				return e.extend({}, t)
			}),
				i = 0;
			for (r.length; i < r.length;) {
				var o = r[i],
					a = !1;
				for (n = i + 1; n < r.length;) if (p(o, r[n])) {
					if (r[n].width) {
						a = r[n];
						break
					}
					r.splice(n, 1)
				} else n++;
				a ? r.splice(i, 1) : i++
			}
			if ("page" == t) {
				var s = h();
				return e.each(r, function(e, t) {
					t.top += s.top, t.left += s.left
				})
			}
			return r
		}
	}), function() {
		var r = e.Range.prototype,
			i = e.Range().range;
		r.compare = i.compareBoundaryPoints ?
		function(e, t) {
			return this.range.compareBoundaryPoints(this.window().Range[n(e)], t.range)
		} : function(e, n) {
			return this.range.compareEndPoints(t(e), n.range)
		}, r.move = i.setStart ?
		function(e, t) {
			var n = t.range;
			switch (e) {
			case "START_TO_END":
				this.range.setStart(n.endContainer, n.endOffset);
				break;
			case "START_TO_START":
				this.range.setStart(n.startContainer, n.startOffset);
				break;
			case "END_TO_END":
				this.range.setEnd(n.endContainer, n.endOffset);
				break;
			case "END_TO_START":
				this.range.setEnd(n.startContainer, n.startOffset)
			}
			return this
		} : function(e, n) {
			return this.range.setEndPoint(t(e), n.range), this
		};
		var a = i.cloneRange ? "cloneRange" : "duplicate";
		i.selectNodeContents ? "selectNodeContents" : "moveToElementText", r.clone = function() {
			return e.Range(this.range[a]())
		}, r.select = i.selectNodeContents ?
		function(e) {
			if (e) this.range.selectNodeContents(e);
			else {
				var t = this.window().getSelection();
				t.removeAllRanges(), t.addRange(this.range)
			}
			return this
		} : function(e) {
			if (e) if (3 === e.nodeType) {
				var t, n = e.parentNode,
					r = 0;
				o(n.childNodes, function(n) {
					return n === e ? (t = r + n.nodeValue.length, !1) : void(r += n.nodeValue.length)
				}), this.range.moveToElementText(n), this.range.moveEnd("character", t - this.range.text.length), this.range.moveStart("character", r)
			} else this.range.moveToElementText(e);
			else this.range.select();
			return this
		}
	}();
	var o = function(e, t) {
			for (var n, r = 0; e[r]; r++) if (n = e[r], 3 === n.nodeType || 4 === n.nodeType) {
				if (t(n) === !1) return !1
			} else if (8 !== n.nodeType && o(n.childNodes, t) === !1) return !1
		},
		a = function(e) {
			return 3 === e.nodeType || 4 === e.nodeType
		},
		s = function(e, t) {
			return function(n, r) {
				return n[e] && !r ? a(n[e]) ? n[e] : arguments.callee(n[e]) : n[t] ? a(n[t]) ? n[t] : arguments.callee(n[t]) : n.parentNode ? arguments.callee(n.parentNode, !0) : void 0
			}
		},
		u = s("firstChild", "nextSibling"),
		l = s("lastChild", "previousSibling"),
		c = function(e, t, n) {
			var r = 0 > n ? l : u;
			return a(e) ? 0 > t + n ? f(r(e), t + n) : f(e, t + n) : (e = e.childNodes[t] ? e.childNodes[t] : e.lastChild, a(e) || (e = r(e)), f(e, n))
		},
		f = function(e, t) {
			var n = 0 > t ? l : u;
			for (t = Math.abs(t); e && t >= e.nodeValue.length;) t -= e.nodeValue.length, e = n(e);
			return {
				node: e,
				offset: n === u ? t : e.nodeValue.length - t
			}
		},
		d = function(e, t) {
			return e.left <= t.clientX && e.left + e.width >= t.clientX && e.top <= t.clientY && e.top + e.height >= t.clientY
		},
		p = function(e, t) {
			return d(e, {
				clientX: t.left,
				clientY: t.top
			}) && d(e, {
				clientX: t.left + t.width,
				clientY: t.top
			}) && d(e, {
				clientX: t.left,
				clientY: t.top + t.height
			}) && d(e, {
				clientX: t.left + t.width,
				clientY: t.top + t.height
			})
		},
		h = function(e) {
			var e = e || window;
			return doc = e.document.documentElement, body = e.document.body, {
				left: (doc && doc.scrollLeft || body && body.scrollLeft || 0) + (doc.clientLeft || 0),
				top: (doc && doc.scrollTop || body && body.scrollTop || 0) + (doc.clientTop || 0)
			}
		};
	return i.moveToPoint = !! e.Range().range.moveToPoint, e
}(jQuery);
