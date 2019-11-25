!function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t(require("react")) : "function" == typeof define && define.amd ? define(["react"], t) : "object" == typeof exports ? exports.linearGradientPicker = t(require("react")) : e.linearGradientPicker = t(e.react)
}(global, (function (e) {
	return function (e) {
		var t = {};

		function n(r) {
			if (t[r]) return t[r].exports;
			var o = t[r] = { i: r, l: !1, exports: {} };
			return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
		}

		return n.m = e, n.c = t, n.d = function (e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
		}, n.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
		}, n.t = function (e, t) {
			if (1 & t && (e = n(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if (n.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
				return e[t]
			}.bind(null, o));
			return r
		}, n.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e.default
			} : function () {
				return e
			};
			return n.d(t, "a", t), t
		}, n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, n.p = "", n(n.s = 28)
	}([function (e, t, n) {
		e.exports = n(12)()
	}, function (t, n) {
		t.exports = e
	}, function (e, t, n) {
		var r = n(9), o = n(10), i = n(11);
		e.exports = function (e, t) {
			return r(e) || o(e, t) || i()
		}
	}, function (e, t, n) {
		"use strict";
		e.exports = function (e) {
			var t = [];
			return t.toString = function () {
				return this.map((function (t) {
					var n = function (e, t) {
						var n = e[1] || "", r = e[3];
						if (!r) return n;
						if (t && "function" == typeof btoa) {
							var o = (a = r, u = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u), "/*# ".concat(c, " */")),
								i = r.sources.map((function (e) {
									return "/*# sourceURL=".concat(r.sourceRoot).concat(e, " */")
								}));
							return [n].concat(i).concat([o]).join("\n")
						}
						var a, u, c;
						return [n].join("\n")
					}(t, e);
					return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n
				})).join("")
			}, t.i = function (e, n) {
				"string" == typeof e && (e = [[null, e, ""]]);
				for (var r = {}, o = 0; o < this.length; o++) {
					var i = this[o][0];
					null != i && (r[i] = !0)
				}
				for (var a = 0; a < e.length; a++) {
					var u = e[a];
					null != u[0] && r[u[0]] || (n && !u[2] ? u[2] = n : n && (u[2] = "(".concat(u[2], ") and (").concat(n, ")")), t.push(u))
				}
			}, t
		}
	}, function (e, t, n) {
		"use strict";
		var r, o = {}, i = function () {
			return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r
		}, a = function () {
			var e = {};
			return function (t) {
				if (void 0 === e[t]) {
					var n = document.querySelector(t);
					if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
						n = n.contentDocument.head
					} catch (e) {
						n = null
					}
					e[t] = n
				}
				return e[t]
			}
		}();

		function u(e, t) {
			for (var n = [], r = {}, o = 0; o < e.length; o++) {
				var i = e[o], a = t.base ? i[0] + t.base : i[0], u = { css: i[1], media: i[2], sourceMap: i[3] };
				r[a] ? r[a].parts.push(u) : n.push(r[a] = { id: a, parts: [u] })
			}
			return n
		}

		function c(e, t) {
			for (var n = 0; n < e.length; n++) {
				var r = e[n], i = o[r.id], a = 0;
				if (i) {
					for (i.refs++; a < i.parts.length; a++) i.parts[a](r.parts[a]);
					for (; a < r.parts.length; a++) i.parts.push(m(r.parts[a], t))
				} else {
					for (var u = []; a < r.parts.length; a++) u.push(m(r.parts[a], t));
					o[r.id] = { id: r.id, refs: 1, parts: u }
				}
			}
		}

		function s(e) {
			var t = document.createElement("style");
			if (void 0 === e.attributes.nonce) {
				var r = n.nc;
				r && (e.attributes.nonce = r)
			}
			if (Object.keys(e.attributes).forEach((function (n) {
				t.setAttribute(n, e.attributes[n])
			})), "function" == typeof e.insert) e.insert(t); else {
				var o = a(e.insert || "head");
				if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
				o.appendChild(t)
			}
			return t
		}

		var l, f = (l = [], function (e, t) {
			return l[e] = t, l.filter(Boolean).join("\n")
		});

		function p(e, t, n, r) {
			var o = n ? "" : r.css;
			if (e.styleSheet) e.styleSheet.cssText = f(t, o); else {
				var i = document.createTextNode(o), a = e.childNodes;
				a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
			}
		}

		function d(e, t, n) {
			var r = n.css, o = n.media, i = n.sourceMap;
			if (o && e.setAttribute("media", o), i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = r; else {
				for (; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(r))
			}
		}

		var v = null, h = 0;

		function m(e, t) {
			var n, r, o;
			if (t.singleton) {
				var i = h++;
				n = v || (v = s(t)), r = p.bind(null, n, i, !1), o = p.bind(null, n, i, !0)
			} else n = s(t), r = d.bind(null, n, t), o = function () {
				!function (e) {
					if (null === e.parentNode) return !1;
					e.parentNode.removeChild(e)
				}(n)
			};
			return r(e), function (t) {
				if (t) {
					if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
					r(e = t)
				} else o()
			}
		}

		e.exports = function (e, t) {
			(t = t || {}).attributes = "object" == typeof t.attributes ? t.attributes : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = i());
			var n = u(e, t);
			return c(n, t), function (e) {
				for (var r = [], i = 0; i < n.length; i++) {
					var a = n[i], s = o[a.id];
					s && (s.refs--, r.push(s))
				}
				e && c(u(e, t), t);
				for (var l = 0; l < r.length; l++) {
					var f = r[l];
					if (0 === f.refs) {
						for (var p = 0; p < f.parts.length; p++) f.parts[p]();
						delete o[f.id]
					}
				}
			}
		}
	}, function (e, t, n) {
		var r = n(16);
		e.exports = function (e, t) {
			if (null == e) return {};
			var n, o, i = r(e, t);
			if (Object.getOwnPropertySymbols) {
				var a = Object.getOwnPropertySymbols(e);
				for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
			}
			return i
		}
	}, function (e, t, n) {
		var r = n(17), o = n(18), i = n(19);
		e.exports = function (e) {
			return r(e) || o(e) || i()
		}
	}, function (e, t) {
		e.exports = function (e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
	}, function (e, t) {
		function n() {
			return e.exports = n = Object.assign || function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}, n.apply(this, arguments)
		}

		e.exports = n
	}, function (e, t) {
		e.exports = function (e) {
			if (Array.isArray(e)) return e
		}
	}, function (e, t) {
		e.exports = function (e, t) {
			if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
				var n = [], r = !0, o = !1, i = void 0;
				try {
					for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
				} catch (e) {
					o = !0, i = e
				} finally {
					try {
						r || null == u.return || u.return()
					} finally {
						if (o) throw i
					}
				}
				return n
			}
		}
	}, function (e, t) {
		e.exports = function () {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	}, function (e, t, n) {
		"use strict";
		var r = n(13);

		function o() {
		}

		function i() {
		}

		i.resetWarningCache = o, e.exports = function () {
			function e(e, t, n, o, i, a) {
				if (a !== r) {
					var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
					throw u.name = "Invariant Violation", u
				}
			}

			function t() {
				return e
			}

			e.isRequired = e;
			var n = {
				array: e,
				bool: e,
				func: e,
				number: e,
				object: e,
				string: e,
				symbol: e,
				any: e,
				arrayOf: t,
				element: e,
				elementType: e,
				instanceOf: t,
				node: e,
				objectOf: t,
				oneOf: t,
				oneOfType: t,
				shape: t,
				exact: t,
				checkPropTypes: i,
				resetWarningCache: o
			};
			return n.PropTypes = n, n
		}
	}, function (e, t, n) {
		"use strict";
		e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
	}, function (e, t, n) {
		var r = n(15);
		"string" == typeof r && (r = [[e.i, r, ""]]);
		var o = { insert: "head", singleton: !1 };
		n(4)(r, o);
		r.locals && (e.exports = r.locals)
	}, function (e, t, n) {
		(e.exports = n(3)(!1)).push([e.i, ".ap {\n    flex: none;\n    box-sizing: border-box;\n    background-color: #fff;\n    border: 1px solid #d2d5dc;\n    border-radius: 50%;\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n}\n\n.ap .apc {\n    width: 6px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.ap .aph {\n    width: 6px;\n    height: 6px;\n    background-color: #686ac9;\n    display: inline-block;\n    border-radius: 50%;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 4px;\n    margin: auto;\n    cursor: pointer;\n}", ""])
	}, function (e, t) {
		e.exports = function (e, t) {
			if (null == e) return {};
			var n, r, o = {}, i = Object.keys(e);
			for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
			return o
		}
	}, function (e, t) {
		e.exports = function (e) {
			if (Array.isArray(e)) {
				for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
				return n
			}
		}
	}, function (e, t) {
		e.exports = function (e) {
			if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
		}
	}, function (e, t) {
		e.exports = function () {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}
	}, function (e, t, n) {
		var r = n(21);
		"string" == typeof r && (r = [[e.i, r, ""]]);
		var o = { insert: "head", singleton: !1 };
		n(4)(r, o);
		r.locals && (e.exports = r.locals)
	}, function (e, t, n) {
		t = e.exports = n(3)(!1);
		var r = n(22)(n(23));
		t.push([e.i, ".cs {\n  height: 17px;\n  position: absolute;\n  width: 11px;\n  cursor: pointer;\n  background: url(" + r + ") right center;\n}\n\n.cs div {\n  height: 7px;\n  left: 2px;\n  width: 7px;\n  position: absolute;\n  top: 8px;\n}\n\n\n.active {\n  background-position: left center;\n}", ""])
	}, function (e, t, n) {
		"use strict";
		e.exports = function (e, t) {
			return "string" != typeof(e = e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) || t ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
		}
	}, function (e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAARCAQAAABzuJQIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAB7SURBVCjP3c7BDQMhDETRP4gyUlb6SEphe9w+JgdArIMPm2uGizV6MpbpERgBzGb0tuZcLvTbDSoHrMUMQmFrY/IaaOeKB7yE+1yTz43irZNXbXcCFosuXqFt9g0cyZICT7LkrU+b62vGeVv4IX+Phc+tfABZK3xj5cgHC29ECUeufxkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDUtMzFUMTg6NDE6MzIrMDI6MDD31tLGAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA1LTMxVDE4OjQxOjMyKzAyOjAwhotqegAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="
	}, function (e, t, n) {
		var r = n(25);
		"string" == typeof r && (r = [[e.i, r, ""]]);
		var o = { insert: "head", singleton: !1 };
		n(4)(r, o);
		r.locals && (e.exports = r.locals)
	}, function (e, t, n) {
		(e.exports = n(3)(!1)).push([e.i, ".cp div {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n}\n.cp div:hover {\n  border: 1px solid #fff;\n}\n", ""])
	}, function (e, t, n) {
		var r = n(27);
		"string" == typeof r && (r = [[e.i, r, ""]]);
		var o = { insert: "head", singleton: !1 };
		n(4)(r, o);
		r.locals && (e.exports = r.locals)
	}, function (e, t, n) {
		(e.exports = n(3)(!1)).push([e.i, ".gp {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}", ""])
	}, function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(2), o = n.n(r), i = n(1), a = n.n(i), u = n(0), c = n.n(u), s = Object(u.shape)({
				id: u.number.isRequired,
				color: u.string.isRequired,
				offset: u.number.isRequired,
				isActive: u.bool.isRequired,
				pointX: u.number
			}), l = Object(u.shape)({ min: u.number.isRequired, max: u.number.isRequired, drop: u.number }),
			f = Object(u.shape)({
				id: u.number.isRequired,
				color: u.string.isRequired,
				offset: u.string.isRequired,
				opacity: u.number
			}), p = {
				stop: s.isRequired,
				limits: l.isRequired,
				onPosChange: u.func.isRequired,
				onDeleteColor: u.func.isRequired,
				onDragStart: u.func,
				onDragEnd: u.func
			}, d = {
				width: u.number.isRequired,
				stops: Object(u.arrayOf)(s),
				limits: l,
				onPosChange: u.func.isRequired,
				onAddColor: u.func.isRequired,
				onDeleteColor: u.func.isRequired,
				onDragStart: u.func,
				onDragEnd: u.func
			}, v = { width: u.number.isRequired, height: u.number.isRequired, palette: Object(u.arrayOf)(f).isRequired },
			h = {
				onPaletteChange: u.func.isRequired,
				height: u.number,
				width: u.number,
				stopRemovalDrop: u.number,
				palette: Object(u.arrayOf)(Object(u.shape)({
					color: u.string.isRequired,
					offset: u.string.isRequired,
					opacity: u.number
				}))
			}, m = function (e, t) {
				return e.offset - t.offset
			}, g = function (e) {
				return e.sort(m)
			}, b = function () {
			}, y = function (e) {
				return e < 0 ? 360 + e : e > 360 ? e - 360 : e
			}, A = function (e) {
				if (!e) return { y: 0, x: 0 };
				var t = e.getBoundingClientRect(), n = t.top, r = t.left;
				return { y: n + t.height / 2, x: r + t.width / 2 }
			}, x = function (e, t, n) {
				var r = t - n.y, o = e - n.x, i = Math.atan2(r, o);
				return Math.round(i * (180 / Math.PI)) + 90
			}, O = function (e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = e % t;
				if (0 === n) return e;
				var r = n > t / 2 ? t - n : -1 * n;
				return e + r
			}, j = function (e) {
				var t = e.onDragStart, n = void 0 === t ? b : t, r = e.onDrag, a = e.onDragEnd, u = void 0 === a ? b : a,
					c = Object(i.useState)({}), s = o()(c, 2), l = s[0], f = s[1], p = Object(i.useState)(!1),
					d = o()(p, 2), v = d[0], h = d[1], m = function (e) {
						h(!0), n(e)
					}, g = function () {
						h(!1), u(l.change), f({})
					}, y = function (e) {
						v && (l.change = r(e))
					};
				return Object(i.useEffect)((function () {
					return v && (document.addEventListener("mousemove", y), document.addEventListener("mouseup", g)), function () {
						document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", g)
					}
				}), [v]), [function (e) {
					e.preventDefault(), e.stopPropagation(), e.button || m(e)
				}, m, g]
			}, E = (n(14), function (e) {
				var t = e.angle, n = e.onChange, r = e.size, u = void 0 === r ? 48 : r, c = e.snap,
					s = void 0 === c ? 5 : c, l = Object(i.useRef)(), f = { height: u, width: u }, p = function (e) {
						var t = e.clientX, r = e.clientY, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							i = A(l.current), a = x(t, r, i), u = y(a), c = o ? O(u, s) : u;
						return n(c), c
					}, d = j({
						onDragStart: function (e) {
							return p(e, !0)
						}, onDrag: p, onDragEnd: function (e) {
							if (e) {
								var t = O(e, s);
								n(t)
							}
						}
					}), v = o()(d, 1)[0];
				return a.a.createElement("div", {
					className: "ap",
					ref: l,
					onMouseDown: v,
					style: f
				}, a.a.createElement("span", {
					className: "apc",
					style: { transform: "rotate(".concat(t, "deg)"), height: u }
				}, a.a.createElement("i", { className: "aph" })))
			});
		E.propTypes = { PALETTE_PROP_TYPES: v };
		var w = E, R = n(5), C = n.n(R), S = n(7), D = n.n(S), P = n(6), M = n.n(P), T = n(8), F = n.n(T),
			q = function (e) {
				var t = e.limits, n = e.stop, r = e.initialPos, a = e.colorStopRef, u = e.onPosChange,
					c = e.onDragStart, s = e.onDragEnd, l = e.onDeleteColor, f = Object(i.useState)(r), p = o()(f, 2),
					d = p[0], v = p[1], h = j({
						onDragStart: function (e) {
							var t = e.clientX;
							v(t), c(n.id)
						}, onDrag: function (e) {
							var r, o = e.clientX, i = e.clientY, c = n.id, s = n.offset, f = t.min, p = t.max,
								v = (r = a).current ? r.current.getBoundingClientRect().top : 0;
							if (Math.abs(i - v) > t.drop) return l(c);
							var h = function (e, t, n) {
								return Math.max(Math.min(e, n), t)
							}(s - d + o, f, p);
							u({ id: c, offset: h })
						}, onDragEnd: function () {
							return s(n.id)
						}
					}), m = o()(h, 2), g = m[0], b = m[1];
				return Object(i.useEffect)((function () {
					var e = n.pointX;
					e && b({ clientX: e })
				}), []), [g]
			}, k = (n(20), function (e) {
				var t = e.stop, n = e.limits, r = e.onPosChange, u = e.onDeleteColor, c = e.onDragStart,
					s = void 0 === c ? b : c, l = e.onDragEnd, f = void 0 === l ? b : l, p = Object(i.useRef)(), d = q({
						stop: t,
						limits: n,
						onPosChange: r,
						onDragStart: s,
						onDragEnd: f,
						onDeleteColor: u,
						colorStopRef: p
					}), v = o()(d, 1)[0], h = t.offset, m = t.color, g = t.isActive;
				return a.a.createElement("div", {
					className: g ? "cs active" : "cs",
					ref: p,
					style: { left: h },
					onMouseDown: v
				}, a.a.createElement("div", { style: { backgroundColor: m } }))
			});
		k.propTypes = p;
		var I = k, B = function (e) {
			return { width: e, height: 17, position: "relative", cursor: "crosshair" }
		}, N = function (e) {
			var t = e.width, n = e.stops, r = e.onAddColor, o = C()(e, ["width", "stops", "onAddColor"]);
			return a.a.createElement("div", {
				className: "csh", style: B(t), onMouseDown: function (e) {
					if (e.preventDefault(), !e.button) {
						var t = e.clientX - e.target.getBoundingClientRect().left;
						r({ offset: t, pointX: e.clientX })
					}
				}
			}, n.map((function (e) {
				return a.a.createElement(I, F()({ key: e.id, stop: e }, o))
			})))
		};
		N.propTypes = d;
		var U = N, L = function () {
			return "" + Math.random().toString(36).substr(2, 9)
		}, X = function (e) {
			var t = e.palette, n = e.width, r = e.height, o = g(t), u = Object(i.useMemo)(L, [t.length]);
			return a.a.createElement("div", {
				className: "palette",
				style: { width: n, height: r }
			}, a.a.createElement("svg", {
				width: "100%",
				height: "100%"
			}, a.a.createElement("defs", null, a.a.createElement("linearGradient", {
				id: u,
				x1: "0",
				y1: "0.5",
				x2: "1",
				y2: "0.5"
			}, " ", o.map((function (e) {
				var t = e.id, n = e.offset, r = e.color, o = e.opacity, i = void 0 === o ? 1 : o;
				return a.a.createElement("stop", { key: t, offset: n, style: { stopColor: r, stopOpacity: i } })
			})))), a.a.createElement("rect", {
				x: "0",
				y: "0",
				width: "100%",
				height: "100%",
				fill: "url(#".concat(u, ")")
			})))
		};
		X.propTypes = v;
		var _ = X, G = [{ value: "#000000", name: "black" }, { value: "#808080", name: "gray" }, {
			value: "#C0C0C0",
			name: "silver"
		}, { value: "#FFFFFF", name: "white" }, { value: "#FF0000", name: "red" }, {
			value: "#800000",
			name: "maroon"
		}, { value: "#FFFF00", name: "yellow" }, { value: "#808000", name: "olive" }, {
			value: "#00FF00",
			name: "lime"
		}, { value: "#008000", name: "green" }, { value: "#00FFFF", name: "aqua" }, {
			value: "#008080",
			name: "teal"
		}, { value: "#0000FF", name: "blue" }, { value: "#000080", name: "navy" }, {
			value: "#FF00FF",
			name: "fuchsia"
		}, { value: "#800080", name: "purple" }], Y = (n(24), function (e) {
			var t = e.onSelect;
			return a.a.createElement("div", { className: "cp" }, G.map((function (e) {
				var n = e.value, r = e.name;
				return a.a.createElement("div", {
					onClick: function () {
						return t(n)
					}, key: r, title: r, style: { backgroundColor: n }
				})
			})))
		});
		Y.propTypes = { color: c.a.string.isRequired, onSelect: c.a.func.isRequired };
		var z = Y, J = [{ offset: "0", color: "#9adafa" }, { offset: "1", color: "#028080" }];
		n(26);

		function Q(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function V(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Q(n, !0).forEach((function (t) {
					D()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(n).forEach((function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		var H = function (e) {
			return Math.max.apply(Math, M()(e.map((function (e) {
				return e.id
			})))) + 1
		}, Z = function (e) {
			var t = e.palette, n = e.activeId, r = e.activePoint, o = e.width;
			return t.map((function (e) {
				return V({}, e, { id: e.id, offset: o * e.offset - 5, isActive: e.id === n, pointX: r })
			}))
		}, W = function (e, t) {
			var n = e.find((function (e) {
				return e.id === t
			}));
			return V({}, n, { offset: Number(n.offset) })
		}, K = function (e) {
			var t = e.palette, n = void 0 === t ? J : t, r = e.height, u = void 0 === r ? 32 : r, c = e.width,
				s = void 0 === c ? 400 : c, l = e.stopRemovalDrop, f = void 0 === l ? 50 : l, p = e.children,
				d = e.onPaletteChange;
			n = function (e) {
				return e.map((function (e, t) {
					return V({}, e, { id: e.id || t + 1 })
				}))
			}(n);
			var v = Object(i.useState)(1), h = o()(v, 2), m = h[0], b = h[1], y = Object(i.useState)(), A = o()(y, 2),
				x = A[0], O = A[1], j = Object(i.useMemo)((function () {
					return { min: -5, max: s - 5, drop: f }
				}), [s]), E = function (e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
					n = n.map((function (n) {
						return m === n.id ? V({}, n, { color: e, opacity: t }) : n
					})), w(n)
				}, w = function (e) {
					var t = g(e).map((function (e) {
						var t = e.offset, n = C()(e, ["offset"]);
						return V({ offset: Number(t).toFixed(3) }, n)
					}));
					d(t)
				}, R = s - 10;
			return a.a.createElement("div", { className: "gp" }, a.a.createElement(_, {
				width: R,
				height: u,
				palette: n
			}), a.a.createElement(U, {
				width: R,
				stops: Z({ activePoint: x, palette: n, width: R, activeId: m }),
				limits: j,
				onPosChange: function (e) {
					var t = e.id, r = e.offset, o = n.map((function (e) {
						return t === e.id ? V({}, e, { offset: (r + 5) / s }) : e
					}));
					w(o)
				},
				onAddColor: function (e) {
					var t = e.offset, r = e.pointX, o = W(n, m).color, i = { id: H(n), offset: t / s, color: o },
						a = [].concat(M()(n), [i]);
					O(r), w(a)
				},
				onDeleteColor: function (e) {
					if (!(n.length <= 2)) {
						var t = n.filter((function (t) {
							return t.id !== e
						})), r = t.reduce((function (e, t) {
							return t.offset < e.offset ? t : e
						}), n[0]).id;
						b(r), w(t)
					}
				},
				onDragStart: function (e) {
					b(e)
				}
			}), function () {
				var e = W(n, m), t = { color: e.color, opacity: e.opacity, onSelect: E };
				if (!p) return a.a.createElement(z, t);
				var r = a.a.Children.only(p);
				return a.a.cloneElement(r, t)
			}())
		};
		K.propTypes = h;
		var $ = K;
		n.d(t, "GradientPicker", (function () {
			return $
		})), n.d(t, "AnglePicker", (function () {
			return w
		}))
	}])
}));
//# sourceMappingURL=index.js.map