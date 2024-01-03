/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var UP = Object.create;
    var Pi = Object.defineProperty;
    var WP = Object.getOwnPropertyDescriptor;
    var XP = Object.getOwnPropertyNames;
    var $P = Object.getPrototypeOf,
        KP = Object.prototype.hasOwnProperty;
    var pe = (e, t) => () => (e && (t = e(e = 0)), t);
    var E = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Ge = (e, t) => {
            for (var r in t) Pi(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        $h = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of XP(t)) !KP.call(e, i) && i !== r && Pi(e, i, {
                    get: () => t[i],
                    enumerable: !(n = WP(t, i)) || n.enumerable
                });
            return e
        };
    var le = (e, t, r) => (r = e != null ? UP($P(e)) : {}, $h(t || !e || !e.__esModule ? Pi(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        ht = e => $h(Pi({}, "__esModule", {
            value: !0
        }), e);
    var ks = E(() => {
        "use strict";
        window.tram = function(e) {
            function t(I, q) {
                var k = new U.Bare;
                return k.init(I, q)
            }

            function r(I) {
                return I.replace(/[A-Z]/g, function(q) {
                    return "-" + q.toLowerCase()
                })
            }

            function n(I) {
                var q = parseInt(I.slice(1), 16),
                    k = q >> 16 & 255,
                    G = q >> 8 & 255,
                    B = 255 & q;
                return [k, G, B]
            }

            function i(I, q, k) {
                return "#" + (1 << 24 | I << 16 | q << 8 | k).toString(16).slice(1)
            }

            function a() {}

            function s(I, q) {
                c("Type warning: Expected: [" + I + "] Got: [" + typeof q + "] " + q)
            }

            function o(I, q, k) {
                c("Units do not match [" + I + "]: " + q + ", " + k)
            }

            function l(I, q, k) {
                if (q !== void 0 && (k = q), I === void 0) return k;
                var G = k;
                return xt.test(I) || !Je.test(I) ? G = parseInt(I, 10) : Je.test(I) && (G = 1e3 * parseFloat(I)), 0 > G && (G = 0), G === G ? G : k
            }

            function c(I) {
                he.debug && window && window.console.warn(I)
            }

            function u(I) {
                for (var q = -1, k = I ? I.length : 0, G = []; ++q < k;) {
                    var B = I[q];
                    B && G.push(B)
                }
                return G
            }
            var f = function(I, q, k) {
                    function G(Z) {
                        return typeof Z == "object"
                    }

                    function B(Z) {
                        return typeof Z == "function"
                    }

                    function V() {}

                    function K(Z, oe) {
                        function W() {
                            var Be = new ie;
                            return B(Be.init) && Be.init.apply(Be, arguments), Be
                        }

                        function ie() {}
                        oe === k && (oe = Z, Z = Object), W.Bare = ie;
                        var ae, ve = V[I] = Z[I],
                            _t = ie[I] = W[I] = new V;
                        return _t.constructor = W, W.mixin = function(Be) {
                            return ie[I] = W[I] = K(W, Be)[I], W
                        }, W.open = function(Be) {
                            if (ae = {}, B(Be) ? ae = Be.call(W, _t, ve, W, Z) : G(Be) && (ae = Be), G(ae))
                                for (var bn in ae) q.call(ae, bn) && (_t[bn] = ae[bn]);
                            return B(_t.init) || (_t.init = Z), W
                        }, W.open(oe)
                    }
                    return K
                }("prototype", {}.hasOwnProperty),
                g = {
                    ease: ["ease", function(I, q, k, G) {
                        var B = (I /= G) * I,
                            V = B * I;
                        return q + k * (-2.75 * V * B + 11 * B * B + -15.5 * V + 8 * B + .25 * I)
                    }],
                    "ease-in": ["ease-in", function(I, q, k, G) {
                        var B = (I /= G) * I,
                            V = B * I;
                        return q + k * (-1 * V * B + 3 * B * B + -3 * V + 2 * B)
                    }],
                    "ease-out": ["ease-out", function(I, q, k, G) {
                        var B = (I /= G) * I,
                            V = B * I;
                        return q + k * (.3 * V * B + -1.6 * B * B + 2.2 * V + -1.8 * B + 1.9 * I)
                    }],
                    "ease-in-out": ["ease-in-out", function(I, q, k, G) {
                        var B = (I /= G) * I,
                            V = B * I;
                        return q + k * (2 * V * B + -5 * B * B + 2 * V + 2 * B)
                    }],
                    linear: ["linear", function(I, q, k, G) {
                        return k * I / G + q
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(I, q, k, G) {
                        return k * (I /= G) * I + q
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(I, q, k, G) {
                        return -k * (I /= G) * (I - 2) + q
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(I, q, k, G) {
                        return (I /= G / 2) < 1 ? k / 2 * I * I + q : -k / 2 * (--I * (I - 2) - 1) + q
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(I, q, k, G) {
                        return k * (I /= G) * I * I + q
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(I, q, k, G) {
                        return k * ((I = I / G - 1) * I * I + 1) + q
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(I, q, k, G) {
                        return (I /= G / 2) < 1 ? k / 2 * I * I * I + q : k / 2 * ((I -= 2) * I * I + 2) + q
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(I, q, k, G) {
                        return k * (I /= G) * I * I * I + q
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(I, q, k, G) {
                        return -k * ((I = I / G - 1) * I * I * I - 1) + q
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(I, q, k, G) {
                        return (I /= G / 2) < 1 ? k / 2 * I * I * I * I + q : -k / 2 * ((I -= 2) * I * I * I - 2) + q
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(I, q, k, G) {
                        return k * (I /= G) * I * I * I * I + q
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(I, q, k, G) {
                        return k * ((I = I / G - 1) * I * I * I * I + 1) + q
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(I, q, k, G) {
                        return (I /= G / 2) < 1 ? k / 2 * I * I * I * I * I + q : k / 2 * ((I -= 2) * I * I * I * I + 2) + q
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(I, q, k, G) {
                        return -k * Math.cos(I / G * (Math.PI / 2)) + k + q
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(I, q, k, G) {
                        return k * Math.sin(I / G * (Math.PI / 2)) + q
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(I, q, k, G) {
                        return -k / 2 * (Math.cos(Math.PI * I / G) - 1) + q
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(I, q, k, G) {
                        return I === 0 ? q : k * Math.pow(2, 10 * (I / G - 1)) + q
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(I, q, k, G) {
                        return I === G ? q + k : k * (-Math.pow(2, -10 * I / G) + 1) + q
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(I, q, k, G) {
                        return I === 0 ? q : I === G ? q + k : (I /= G / 2) < 1 ? k / 2 * Math.pow(2, 10 * (I - 1)) + q : k / 2 * (-Math.pow(2, -10 * --I) + 2) + q
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(I, q, k, G) {
                        return -k * (Math.sqrt(1 - (I /= G) * I) - 1) + q
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(I, q, k, G) {
                        return k * Math.sqrt(1 - (I = I / G - 1) * I) + q
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(I, q, k, G) {
                        return (I /= G / 2) < 1 ? -k / 2 * (Math.sqrt(1 - I * I) - 1) + q : k / 2 * (Math.sqrt(1 - (I -= 2) * I) + 1) + q
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(I, q, k, G, B) {
                        return B === void 0 && (B = 1.70158), k * (I /= G) * I * ((B + 1) * I - B) + q
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(I, q, k, G, B) {
                        return B === void 0 && (B = 1.70158), k * ((I = I / G - 1) * I * ((B + 1) * I + B) + 1) + q
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(I, q, k, G, B) {
                        return B === void 0 && (B = 1.70158), (I /= G / 2) < 1 ? k / 2 * I * I * (((B *= 1.525) + 1) * I - B) + q : k / 2 * ((I -= 2) * I * (((B *= 1.525) + 1) * I + B) + 2) + q
                    }]
                },
                d = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                p = document,
                m = window,
                h = "bkwld-tram",
                v = /[\-\.0-9]/g,
                y = /[A-Z]/,
                b = "number",
                S = /^(rgb|#)/,
                x = /(em|cm|mm|in|pt|pc|px)$/,
                T = /(em|cm|mm|in|pt|pc|px|%)$/,
                _ = /(deg|rad|turn)$/,
                P = "unitless",
                F = /(all|none) 0s ease 0s/,
                w = /^(width|height)$/,
                C = " ",
                R = p.createElement("a"),
                O = ["Webkit", "Moz", "O", "ms"],
                M = ["-webkit-", "-moz-", "-o-", "-ms-"],
                N = function(I) {
                    if (I in R.style) return {
                        dom: I,
                        css: I
                    };
                    var q, k, G = "",
                        B = I.split("-");
                    for (q = 0; q < B.length; q++) G += B[q].charAt(0).toUpperCase() + B[q].slice(1);
                    for (q = 0; q < O.length; q++)
                        if (k = O[q] + G, k in R.style) return {
                            dom: k,
                            css: M[q] + I
                        }
                },
                z = t.support = {
                    bind: Function.prototype.bind,
                    transform: N("transform"),
                    transition: N("transition"),
                    backface: N("backface-visibility"),
                    timing: N("transition-timing-function")
                };
            if (z.transition) {
                var $ = z.timing.dom;
                if (R.style[$] = g["ease-in-back"][0], !R.style[$])
                    for (var A in d) g[A][0] = d[A]
            }
            var D = t.frame = function() {
                    var I = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || m.msRequestAnimationFrame;
                    return I && z.bind ? I.bind(m) : function(q) {
                        m.setTimeout(q, 16)
                    }
                }(),
                L = t.now = function() {
                    var I = m.performance,
                        q = I && (I.now || I.webkitNow || I.msNow || I.mozNow);
                    return q && z.bind ? q.bind(I) : Date.now || function() {
                        return +new Date
                    }
                }(),
                H = f(function(I) {
                    function q(ee, ue) {
                        var be = u(("" + ee).split(C)),
                            ce = be[0];
                        ue = ue || {};
                        var Ve = ne[ce];
                        if (!Ve) return c("Unsupported property: " + ce);
                        if (!ue.weak || !this.props[ce]) {
                            var ut = Ve[0],
                                $e = this.props[ce];
                            return $e || ($e = this.props[ce] = new ut.Bare), $e.init(this.$el, be, Ve, ue), $e
                        }
                    }

                    function k(ee, ue, be) {
                        if (ee) {
                            var ce = typeof ee;
                            if (ue || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), ce == "number" && ue) return this.timer = new re({
                                duration: ee,
                                context: this,
                                complete: V
                            }), void(this.active = !0);
                            if (ce == "string" && ue) {
                                switch (ee) {
                                    case "hide":
                                        W.call(this);
                                        break;
                                    case "stop":
                                        K.call(this);
                                        break;
                                    case "redraw":
                                        ie.call(this);
                                        break;
                                    default:
                                        q.call(this, ee, be && be[1])
                                }
                                return V.call(this)
                            }
                            if (ce == "function") return void ee.call(this, this);
                            if (ce == "object") {
                                var Ve = 0;
                                _t.call(this, ee, function(Ce, jP) {
                                    Ce.span > Ve && (Ve = Ce.span), Ce.stop(), Ce.animate(jP)
                                }, function(Ce) {
                                    "wait" in Ce && (Ve = l(Ce.wait, 0))
                                }), ve.call(this), Ve > 0 && (this.timer = new re({
                                    duration: Ve,
                                    context: this
                                }), this.active = !0, ue && (this.timer.complete = V));
                                var ut = this,
                                    $e = !1,
                                    Ai = {};
                                D(function() {
                                    _t.call(ut, ee, function(Ce) {
                                        Ce.active && ($e = !0, Ai[Ce.name] = Ce.nextStyle)
                                    }), $e && ut.$el.css(Ai)
                                })
                            }
                        }
                    }

                    function G(ee) {
                        ee = l(ee, 0), this.active ? this.queue.push({
                            options: ee
                        }) : (this.timer = new re({
                            duration: ee,
                            context: this,
                            complete: V
                        }), this.active = !0)
                    }

                    function B(ee) {
                        return this.active ? (this.queue.push({
                            options: ee,
                            args: arguments
                        }), void(this.timer.complete = V)) : c("No active transition timer. Use start() or wait() before then().")
                    }

                    function V() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ee = this.queue.shift();
                            k.call(this, ee.options, !0, ee.args)
                        }
                    }

                    function K(ee) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var ue;
                        typeof ee == "string" ? (ue = {}, ue[ee] = 1) : ue = typeof ee == "object" && ee != null ? ee : this.props, _t.call(this, ue, Be), ve.call(this)
                    }

                    function Z(ee) {
                        K.call(this, ee), _t.call(this, ee, bn, zP)
                    }

                    function oe(ee) {
                        typeof ee != "string" && (ee = "block"), this.el.style.display = ee
                    }

                    function W() {
                        K.call(this), this.el.style.display = "none"
                    }

                    function ie() {
                        this.el.offsetHeight
                    }

                    function ae() {
                        K.call(this), e.removeData(this.el, h), this.$el = this.el = null
                    }

                    function ve() {
                        var ee, ue, be = [];
                        this.upstream && be.push(this.upstream);
                        for (ee in this.props) ue = this.props[ee], ue.active && be.push(ue.string);
                        be = be.join(","), this.style !== be && (this.style = be, this.el.style[z.transition.dom] = be)
                    }

                    function _t(ee, ue, be) {
                        var ce, Ve, ut, $e, Ai = ue !== Be,
                            Ce = {};
                        for (ce in ee) ut = ee[ce], ce in Me ? (Ce.transform || (Ce.transform = {}), Ce.transform[ce] = ut) : (y.test(ce) && (ce = r(ce)), ce in ne ? Ce[ce] = ut : ($e || ($e = {}), $e[ce] = ut));
                        for (ce in Ce) {
                            if (ut = Ce[ce], Ve = this.props[ce], !Ve) {
                                if (!Ai) continue;
                                Ve = q.call(this, ce)
                            }
                            ue.call(this, Ve, ut)
                        }
                        be && $e && be.call(this, $e)
                    }

                    function Be(ee) {
                        ee.stop()
                    }

                    function bn(ee, ue) {
                        ee.set(ue)
                    }

                    function zP(ee) {
                        this.$el.css(ee)
                    }

                    function lt(ee, ue) {
                        I[ee] = function() {
                            return this.children ? HP.call(this, ue, arguments) : (this.el && ue.apply(this, arguments), this)
                        }
                    }

                    function HP(ee, ue) {
                        var be, ce = this.children.length;
                        for (be = 0; ce > be; be++) ee.apply(this.children[be], ue);
                        return this
                    }
                    I.init = function(ee) {
                        if (this.$el = e(ee), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, he.keepInherited && !he.fallback) {
                            var ue = Pe(this.el, "transition");
                            ue && !F.test(ue) && (this.upstream = ue)
                        }
                        z.backface && he.hideBackface && Ee(this.el, z.backface.css, "hidden")
                    }, lt("add", q), lt("start", k), lt("wait", G), lt("then", B), lt("next", V), lt("stop", K), lt("set", Z), lt("show", oe), lt("hide", W), lt("redraw", ie), lt("destroy", ae)
                }),
                U = f(H, function(I) {
                    function q(k, G) {
                        var B = e.data(k, h) || e.data(k, h, new H.Bare);
                        return B.el || B.init(k), G ? B.start(G) : B
                    }
                    I.init = function(k, G) {
                        var B = e(k);
                        if (!B.length) return this;
                        if (B.length === 1) return q(B[0], G);
                        var V = [];
                        return B.each(function(K, Z) {
                            V.push(q(Z, G))
                        }), this.children = V, this
                    }
                }),
                j = f(function(I) {
                    function q() {
                        var V = this.get();
                        this.update("auto");
                        var K = this.get();
                        return this.update(V), K
                    }

                    function k(V, K, Z) {
                        return K !== void 0 && (Z = K), V in g ? V : Z
                    }

                    function G(V) {
                        var K = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(V);
                        return (K ? i(K[1], K[2], K[3]) : V).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var B = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    I.init = function(V, K, Z, oe) {
                        this.$el = V, this.el = V[0];
                        var W = K[0];
                        Z[2] && (W = Z[2]), Te[W] && (W = Te[W]), this.name = W, this.type = Z[1], this.duration = l(K[1], this.duration, B.duration), this.ease = k(K[2], this.ease, B.ease), this.delay = l(K[3], this.delay, B.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = w.test(this.name), this.unit = oe.unit || this.unit || he.defaultUnit, this.angle = oe.angle || this.angle || he.defaultAngle, he.fallback || oe.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + C + this.duration + "ms" + (this.ease != "ease" ? C + g[this.ease][0] : "") + (this.delay ? C + this.delay + "ms" : ""))
                    }, I.set = function(V) {
                        V = this.convert(V, this.type), this.update(V), this.redraw()
                    }, I.transition = function(V) {
                        this.active = !0, V = this.convert(V, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), V == "auto" && (V = q.call(this))), this.nextStyle = V
                    }, I.fallback = function(V) {
                        var K = this.el.style[this.name] || this.convert(this.get(), this.type);
                        V = this.convert(V, this.type), this.auto && (K == "auto" && (K = this.convert(this.get(), this.type)), V == "auto" && (V = q.call(this))), this.tween = new X({
                            from: K,
                            to: V,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, I.get = function() {
                        return Pe(this.el, this.name)
                    }, I.update = function(V) {
                        Ee(this.el, this.name, V)
                    }, I.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, Ee(this.el, this.name, this.get()));
                        var V = this.tween;
                        V && V.context && V.destroy()
                    }, I.convert = function(V, K) {
                        if (V == "auto" && this.auto) return V;
                        var Z, oe = typeof V == "number",
                            W = typeof V == "string";
                        switch (K) {
                            case b:
                                if (oe) return V;
                                if (W && V.replace(v, "") === "") return +V;
                                Z = "number(unitless)";
                                break;
                            case S:
                                if (W) {
                                    if (V === "" && this.original) return this.original;
                                    if (K.test(V)) return V.charAt(0) == "#" && V.length == 7 ? V : G(V)
                                }
                                Z = "hex or rgb string";
                                break;
                            case x:
                                if (oe) return V + this.unit;
                                if (W && K.test(V)) return V;
                                Z = "number(px) or string(unit)";
                                break;
                            case T:
                                if (oe) return V + this.unit;
                                if (W && K.test(V)) return V;
                                Z = "number(px) or string(unit or %)";
                                break;
                            case _:
                                if (oe) return V + this.angle;
                                if (W && K.test(V)) return V;
                                Z = "number(deg) or string(angle)";
                                break;
                            case P:
                                if (oe || W && T.test(V)) return V;
                                Z = "number(unitless) or string(unit or %)"
                        }
                        return s(Z, V), V
                    }, I.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                Y = f(j, function(I, q) {
                    I.init = function() {
                        q.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), S))
                    }
                }),
                Q = f(j, function(I, q) {
                    I.init = function() {
                        q.init.apply(this, arguments), this.animate = this.fallback
                    }, I.get = function() {
                        return this.$el[this.name]()
                    }, I.update = function(k) {
                        this.$el[this.name](k)
                    }
                }),
                J = f(j, function(I, q) {
                    function k(G, B) {
                        var V, K, Z, oe, W;
                        for (V in G) oe = Me[V], Z = oe[0], K = oe[1] || V, W = this.convert(G[V], Z), B.call(this, K, W, Z)
                    }
                    I.init = function() {
                        q.init.apply(this, arguments), this.current || (this.current = {}, Me.perspective && he.perspective && (this.current.perspective = he.perspective, Ee(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, I.set = function(G) {
                        k.call(this, G, function(B, V) {
                            this.current[B] = V
                        }), Ee(this.el, this.name, this.style(this.current)), this.redraw()
                    }, I.transition = function(G) {
                        var B = this.values(G);
                        this.tween = new Ae({
                            current: this.current,
                            values: B,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var V, K = {};
                        for (V in this.current) K[V] = V in B ? B[V] : this.current[V];
                        this.active = !0, this.nextStyle = this.style(K)
                    }, I.fallback = function(G) {
                        var B = this.values(G);
                        this.tween = new Ae({
                            current: this.current,
                            values: B,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, I.update = function() {
                        Ee(this.el, this.name, this.style(this.current))
                    }, I.style = function(G) {
                        var B, V = "";
                        for (B in G) V += B + "(" + G[B] + ") ";
                        return V
                    }, I.values = function(G) {
                        var B, V = {};
                        return k.call(this, G, function(K, Z, oe) {
                            V[K] = Z, this.current[K] === void 0 && (B = 0, ~K.indexOf("scale") && (B = 1), this.current[K] = this.convert(B, oe))
                        }), V
                    }
                }),
                X = f(function(I) {
                    function q(W) {
                        Z.push(W) === 1 && D(k)
                    }

                    function k() {
                        var W, ie, ae, ve = Z.length;
                        if (ve)
                            for (D(k), ie = L(), W = ve; W--;) ae = Z[W], ae && ae.render(ie)
                    }

                    function G(W) {
                        var ie, ae = e.inArray(W, Z);
                        ae >= 0 && (ie = Z.slice(ae + 1), Z.length = ae, ie.length && (Z = Z.concat(ie)))
                    }

                    function B(W) {
                        return Math.round(W * oe) / oe
                    }

                    function V(W, ie, ae) {
                        return i(W[0] + ae * (ie[0] - W[0]), W[1] + ae * (ie[1] - W[1]), W[2] + ae * (ie[2] - W[2]))
                    }
                    var K = {
                        ease: g.ease[1],
                        from: 0,
                        to: 1
                    };
                    I.init = function(W) {
                        this.duration = W.duration || 0, this.delay = W.delay || 0;
                        var ie = W.ease || K.ease;
                        g[ie] && (ie = g[ie][1]), typeof ie != "function" && (ie = K.ease), this.ease = ie, this.update = W.update || a, this.complete = W.complete || a, this.context = W.context || this, this.name = W.name;
                        var ae = W.from,
                            ve = W.to;
                        ae === void 0 && (ae = K.from), ve === void 0 && (ve = K.to), this.unit = W.unit || "", typeof ae == "number" && typeof ve == "number" ? (this.begin = ae, this.change = ve - ae) : this.format(ve, ae), this.value = this.begin + this.unit, this.start = L(), W.autoplay !== !1 && this.play()
                    }, I.play = function() {
                        this.active || (this.start || (this.start = L()), this.active = !0, q(this))
                    }, I.stop = function() {
                        this.active && (this.active = !1, G(this))
                    }, I.render = function(W) {
                        var ie, ae = W - this.start;
                        if (this.delay) {
                            if (ae <= this.delay) return;
                            ae -= this.delay
                        }
                        if (ae < this.duration) {
                            var ve = this.ease(ae, 0, 1, this.duration);
                            return ie = this.startRGB ? V(this.startRGB, this.endRGB, ve) : B(this.begin + ve * this.change), this.value = ie + this.unit, void this.update.call(this.context, this.value)
                        }
                        ie = this.endHex || this.begin + this.change, this.value = ie + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, I.format = function(W, ie) {
                        if (ie += "", W += "", W.charAt(0) == "#") return this.startRGB = n(ie), this.endRGB = n(W), this.endHex = W, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ae = ie.replace(v, ""),
                                ve = W.replace(v, "");
                            ae !== ve && o("tween", ie, W), this.unit = ae
                        }
                        ie = parseFloat(ie), W = parseFloat(W), this.begin = this.value = ie, this.change = W - ie
                    }, I.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = a
                    };
                    var Z = [],
                        oe = 1e3
                }),
                re = f(X, function(I) {
                    I.init = function(q) {
                        this.duration = q.duration || 0, this.complete = q.complete || a, this.context = q.context, this.play()
                    }, I.render = function(q) {
                        var k = q - this.start;
                        k < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                Ae = f(X, function(I, q) {
                    I.init = function(k) {
                        this.context = k.context, this.update = k.update, this.tweens = [], this.current = k.current;
                        var G, B;
                        for (G in k.values) B = k.values[G], this.current[G] !== B && this.tweens.push(new X({
                            name: G,
                            from: this.current[G],
                            to: B,
                            duration: k.duration,
                            delay: k.delay,
                            ease: k.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, I.render = function(k) {
                        var G, B, V = this.tweens.length,
                            K = !1;
                        for (G = V; G--;) B = this.tweens[G], B.context && (B.render(k), this.current[B.name] = B.value, K = !0);
                        return K ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, I.destroy = function() {
                        if (q.destroy.call(this), this.tweens) {
                            var k, G = this.tweens.length;
                            for (k = G; k--;) this.tweens[k].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                he = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !z.transition,
                    agentTests: []
                };
            t.fallback = function(I) {
                if (!z.transition) return he.fallback = !0;
                he.agentTests.push("(" + I + ")");
                var q = new RegExp(he.agentTests.join("|"), "i");
                he.fallback = q.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(I) {
                return new X(I)
            }, t.delay = function(I, q, k) {
                return new re({
                    complete: q,
                    duration: I,
                    context: k
                })
            }, e.fn.tram = function(I) {
                return t.call(null, this, I)
            };
            var Ee = e.style,
                Pe = e.css,
                Te = {
                    transform: z.transform && z.transform.css
                },
                ne = {
                    color: [Y, S],
                    background: [Y, S, "background-color"],
                    "outline-color": [Y, S],
                    "border-color": [Y, S],
                    "border-top-color": [Y, S],
                    "border-right-color": [Y, S],
                    "border-bottom-color": [Y, S],
                    "border-left-color": [Y, S],
                    "border-width": [j, x],
                    "border-top-width": [j, x],
                    "border-right-width": [j, x],
                    "border-bottom-width": [j, x],
                    "border-left-width": [j, x],
                    "border-spacing": [j, x],
                    "letter-spacing": [j, x],
                    margin: [j, x],
                    "margin-top": [j, x],
                    "margin-right": [j, x],
                    "margin-bottom": [j, x],
                    "margin-left": [j, x],
                    padding: [j, x],
                    "padding-top": [j, x],
                    "padding-right": [j, x],
                    "padding-bottom": [j, x],
                    "padding-left": [j, x],
                    "outline-width": [j, x],
                    opacity: [j, b],
                    top: [j, T],
                    right: [j, T],
                    bottom: [j, T],
                    left: [j, T],
                    "font-size": [j, T],
                    "text-indent": [j, T],
                    "word-spacing": [j, T],
                    width: [j, T],
                    "min-width": [j, T],
                    "max-width": [j, T],
                    height: [j, T],
                    "min-height": [j, T],
                    "max-height": [j, T],
                    "line-height": [j, P],
                    "scroll-top": [Q, b, "scrollTop"],
                    "scroll-left": [Q, b, "scrollLeft"]
                },
                Me = {};
            z.transform && (ne.transform = [J], Me = {
                x: [T, "translateX"],
                y: [T, "translateY"],
                rotate: [_],
                rotateX: [_],
                rotateY: [_],
                scale: [b],
                scaleX: [b],
                scaleY: [b],
                skew: [_],
                skewX: [_],
                skewY: [_]
            }), z.transform && z.backface && (Me.z = [T, "translateZ"], Me.rotateZ = [_], Me.scaleZ = [b], Me.perspective = [x]);
            var xt = /ms/,
                Je = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Yh = E((jJ, Kh) => {
        "use strict";
        var YP = window.$,
            QP = ks() && YP.tram;
        Kh.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                a = r.push,
                s = r.slice,
                o = r.concat,
                l = n.toString,
                c = n.hasOwnProperty,
                u = r.forEach,
                f = r.map,
                g = r.reduce,
                d = r.reduceRight,
                p = r.filter,
                m = r.every,
                h = r.some,
                v = r.indexOf,
                y = r.lastIndexOf,
                b = Array.isArray,
                S = Object.keys,
                x = i.bind,
                T = e.each = e.forEach = function(O, M, N) {
                    if (O == null) return O;
                    if (u && O.forEach === u) O.forEach(M, N);
                    else if (O.length === +O.length) {
                        for (var z = 0, $ = O.length; z < $; z++)
                            if (M.call(N, O[z], z, O) === t) return
                    } else
                        for (var A = e.keys(O), z = 0, $ = A.length; z < $; z++)
                            if (M.call(N, O[A[z]], A[z], O) === t) return;
                    return O
                };
            e.map = e.collect = function(O, M, N) {
                var z = [];
                return O == null ? z : f && O.map === f ? O.map(M, N) : (T(O, function($, A, D) {
                    z.push(M.call(N, $, A, D))
                }), z)
            }, e.find = e.detect = function(O, M, N) {
                var z;
                return _(O, function($, A, D) {
                    if (M.call(N, $, A, D)) return z = $, !0
                }), z
            }, e.filter = e.select = function(O, M, N) {
                var z = [];
                return O == null ? z : p && O.filter === p ? O.filter(M, N) : (T(O, function($, A, D) {
                    M.call(N, $, A, D) && z.push($)
                }), z)
            };
            var _ = e.some = e.any = function(O, M, N) {
                M || (M = e.identity);
                var z = !1;
                return O == null ? z : h && O.some === h ? O.some(M, N) : (T(O, function($, A, D) {
                    if (z || (z = M.call(N, $, A, D))) return t
                }), !!z)
            };
            e.contains = e.include = function(O, M) {
                return O == null ? !1 : v && O.indexOf === v ? O.indexOf(M) != -1 : _(O, function(N) {
                    return N === M
                })
            }, e.delay = function(O, M) {
                var N = s.call(arguments, 2);
                return setTimeout(function() {
                    return O.apply(null, N)
                }, M)
            }, e.defer = function(O) {
                return e.delay.apply(e, [O, 1].concat(s.call(arguments, 1)))
            }, e.throttle = function(O) {
                var M, N, z;
                return function() {
                    M || (M = !0, N = arguments, z = this, QP.frame(function() {
                        M = !1, O.apply(z, N)
                    }))
                }
            }, e.debounce = function(O, M, N) {
                var z, $, A, D, L, H = function() {
                    var U = e.now() - D;
                    U < M ? z = setTimeout(H, M - U) : (z = null, N || (L = O.apply(A, $), A = $ = null))
                };
                return function() {
                    A = this, $ = arguments, D = e.now();
                    var U = N && !z;
                    return z || (z = setTimeout(H, M)), U && (L = O.apply(A, $), A = $ = null), L
                }
            }, e.defaults = function(O) {
                if (!e.isObject(O)) return O;
                for (var M = 1, N = arguments.length; M < N; M++) {
                    var z = arguments[M];
                    for (var $ in z) O[$] === void 0 && (O[$] = z[$])
                }
                return O
            }, e.keys = function(O) {
                if (!e.isObject(O)) return [];
                if (S) return S(O);
                var M = [];
                for (var N in O) e.has(O, N) && M.push(N);
                return M
            }, e.has = function(O, M) {
                return c.call(O, M)
            }, e.isObject = function(O) {
                return O === Object(O)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var P = /(.)^/,
                F = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                w = /\\|'|\r|\n|\u2028|\u2029/g,
                C = function(O) {
                    return "\\" + F[O]
                },
                R = /^\s*(\w|\$)+\s*$/;
            return e.template = function(O, M, N) {
                !M && N && (M = N), M = e.defaults({}, M, e.templateSettings);
                var z = RegExp([(M.escape || P).source, (M.interpolate || P).source, (M.evaluate || P).source].join("|") + "|$", "g"),
                    $ = 0,
                    A = "__p+='";
                O.replace(z, function(U, j, Y, Q, J) {
                    return A += O.slice($, J).replace(w, C), $ = J + U.length, j ? A += `'+
((__t=(` + j + `))==null?'':_.escape(__t))+
'` : Y ? A += `'+
((__t=(` + Y + `))==null?'':__t)+
'` : Q && (A += `';
` + Q + `
__p+='`), U
                }), A += `';
`;
                var D = M.variable;
                if (D) {
                    if (!R.test(D)) throw new Error("variable is not a bare identifier: " + D)
                } else A = `with(obj||{}){
` + A + `}
`, D = "obj";
                A = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + A + `return __p;
`;
                var L;
                try {
                    L = new Function(M.variable || "obj", "_", A)
                } catch (U) {
                    throw U.source = A, U
                }
                var H = function(U) {
                    return L.call(this, U, e)
                };
                return H.source = "function(" + D + `){
` + A + "}", H
            }, e
        }()
    });
    var pt = E((UJ, ic) => {
        "use strict";
        var fe = {},
            Mr = {},
            Or = [],
            Bs = window.Webflow || [],
            Kt = window.jQuery,
            ft = Kt(window),
            ZP = Kt(document),
            Tt = Kt.isFunction,
            ct = fe._ = Yh(),
            Zh = fe.tram = ks() && Kt.tram,
            wi = !1,
            Vs = !1;
        Zh.config.hideBackface = !1;
        Zh.config.keepInherited = !0;
        fe.define = function(e, t, r) {
            Mr[e] && ec(Mr[e]);
            var n = Mr[e] = t(Kt, ct, r) || {};
            return Jh(n), n
        };
        fe.require = function(e) {
            return Mr[e]
        };

        function Jh(e) {
            fe.env() && (Tt(e.design) && ft.on("__wf_design", e.design), Tt(e.preview) && ft.on("__wf_preview", e.preview)), Tt(e.destroy) && ft.on("__wf_destroy", e.destroy), e.ready && Tt(e.ready) && JP(e)
        }

        function JP(e) {
            if (wi) {
                e.ready();
                return
            }
            ct.contains(Or, e.ready) || Or.push(e.ready)
        }

        function ec(e) {
            Tt(e.design) && ft.off("__wf_design", e.design), Tt(e.preview) && ft.off("__wf_preview", e.preview), Tt(e.destroy) && ft.off("__wf_destroy", e.destroy), e.ready && Tt(e.ready) && eC(e)
        }

        function eC(e) {
            Or = ct.filter(Or, function(t) {
                return t !== e.ready
            })
        }
        fe.push = function(e) {
            if (wi) {
                Tt(e) && e();
                return
            }
            Bs.push(e)
        };
        fe.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var Ci = navigator.userAgent.toLowerCase(),
            tc = fe.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            tC = fe.env.chrome = /chrome/.test(Ci) && /Google/.test(navigator.vendor) && parseInt(Ci.match(/chrome\/(\d+)\./)[1], 10),
            rC = fe.env.ios = /(ipod|iphone|ipad)/.test(Ci);
        fe.env.safari = /safari/.test(Ci) && !tC && !rC;
        var Ns;
        tc && ZP.on("touchstart mousedown", function(e) {
            Ns = e.target
        });
        fe.validClick = tc ? function(e) {
            return e === Ns || Kt.contains(e, Ns)
        } : function() {
            return !0
        };
        var rc = "resize.webflow orientationchange.webflow load.webflow",
            nC = "scroll.webflow " + rc;
        fe.resize = Gs(ft, rc);
        fe.scroll = Gs(ft, nC);
        fe.redraw = Gs();

        function Gs(e, t) {
            var r = [],
                n = {};
            return n.up = ct.throttle(function(i) {
                ct.each(r, function(a) {
                    a(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (ct.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = ct.filter(r, function(a) {
                    return a !== i
                })
            }, n
        }
        fe.location = function(e) {
            window.location = e
        };
        fe.env() && (fe.location = function() {});
        fe.ready = function() {
            wi = !0, Vs ? iC() : ct.each(Or, Qh), ct.each(Bs, Qh), fe.resize.up()
        };

        function Qh(e) {
            Tt(e) && e()
        }

        function iC() {
            Vs = !1, ct.each(Mr, Jh)
        }
        var fr;
        fe.load = function(e) {
            fr.then(e)
        };

        function nc() {
            fr && (fr.reject(), ft.off("load", fr.resolve)), fr = new Kt.Deferred, ft.on("load", fr.resolve)
        }
        fe.destroy = function(e) {
            e = e || {}, Vs = !0, ft.triggerHandler("__wf_destroy"), e.domready != null && (wi = e.domready), ct.each(Mr, ec), fe.resize.off(), fe.scroll.off(), fe.redraw.off(), Or = [], Bs = [], fr.state() === "pending" && nc()
        };
        Kt(fe.ready);
        nc();
        ic.exports = window.Webflow = fe
    });
    var zs = E((WJ, ac) => {
        function aC(e, t, r, n) {
            for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i;)
                if (t(e[a], a, e)) return a;
            return -1
        }
        ac.exports = aC
    });
    var oc = E((XJ, sc) => {
        function sC() {
            this.__data__ = [], this.size = 0
        }
        sc.exports = sC
    });
    var Mi = E(($J, lc) => {
        function oC(e, t) {
            return e === t || e !== e && t !== t
        }
        lc.exports = oC
    });
    var Sn = E((KJ, uc) => {
        var lC = Mi();

        function uC(e, t) {
            for (var r = e.length; r--;)
                if (lC(e[r][0], t)) return r;
            return -1
        }
        uc.exports = uC
    });
    var cc = E((YJ, hc) => {
        var hC = Sn(),
            cC = Array.prototype,
            fC = cC.splice;

        function pC(e) {
            var t = this.__data__,
                r = hC(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : fC.call(t, r, 1), --this.size, !0
        }
        hc.exports = pC
    });
    var pc = E((QJ, fc) => {
        var dC = Sn();

        function mC(e) {
            var t = this.__data__,
                r = dC(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        fc.exports = mC
    });
    var mc = E((ZJ, dc) => {
        var gC = Sn();

        function vC(e) {
            return gC(this.__data__, e) > -1
        }
        dc.exports = vC
    });
    var vc = E((JJ, gc) => {
        var yC = Sn();

        function EC(e, t) {
            var r = this.__data__,
                n = yC(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        gc.exports = EC
    });
    var xn = E((eee, yc) => {
        var bC = oc(),
            SC = cc(),
            xC = pc(),
            _C = mc(),
            TC = vc();

        function Dr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Dr.prototype.clear = bC;
        Dr.prototype.delete = SC;
        Dr.prototype.get = xC;
        Dr.prototype.has = _C;
        Dr.prototype.set = TC;
        yc.exports = Dr
    });
    var bc = E((tee, Ec) => {
        var IC = xn();

        function AC() {
            this.__data__ = new IC, this.size = 0
        }
        Ec.exports = AC
    });
    var xc = E((ree, Sc) => {
        function PC(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        Sc.exports = PC
    });
    var Tc = E((nee, _c) => {
        function CC(e) {
            return this.__data__.get(e)
        }
        _c.exports = CC
    });
    var Ac = E((iee, Ic) => {
        function wC(e) {
            return this.__data__.has(e)
        }
        Ic.exports = wC
    });
    var Hs = E((aee, Pc) => {
        var MC = typeof global == "object" && global && global.Object === Object && global;
        Pc.exports = MC
    });
    var dt = E((see, Cc) => {
        var OC = Hs(),
            DC = typeof self == "object" && self && self.Object === Object && self,
            FC = OC || DC || Function("return this")();
        Cc.exports = FC
    });
    var Fr = E((oee, wc) => {
        var RC = dt(),
            qC = RC.Symbol;
        wc.exports = qC
    });
    var Fc = E((lee, Dc) => {
        var Mc = Fr(),
            Oc = Object.prototype,
            LC = Oc.hasOwnProperty,
            kC = Oc.toString,
            _n = Mc ? Mc.toStringTag : void 0;

        function NC(e) {
            var t = LC.call(e, _n),
                r = e[_n];
            try {
                e[_n] = void 0;
                var n = !0
            } catch {}
            var i = kC.call(e);
            return n && (t ? e[_n] = r : delete e[_n]), i
        }
        Dc.exports = NC
    });
    var qc = E((uee, Rc) => {
        var BC = Object.prototype,
            VC = BC.toString;

        function GC(e) {
            return VC.call(e)
        }
        Rc.exports = GC
    });
    var Yt = E((hee, Nc) => {
        var Lc = Fr(),
            zC = Fc(),
            HC = qc(),
            jC = "[object Null]",
            UC = "[object Undefined]",
            kc = Lc ? Lc.toStringTag : void 0;

        function WC(e) {
            return e == null ? e === void 0 ? UC : jC : kc && kc in Object(e) ? zC(e) : HC(e)
        }
        Nc.exports = WC
    });
    var It = E((cee, Bc) => {
        function XC(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        Bc.exports = XC
    });
    var js = E((fee, Vc) => {
        var $C = Yt(),
            KC = It(),
            YC = "[object AsyncFunction]",
            QC = "[object Function]",
            ZC = "[object GeneratorFunction]",
            JC = "[object Proxy]";

        function ew(e) {
            if (!KC(e)) return !1;
            var t = $C(e);
            return t == QC || t == ZC || t == YC || t == JC
        }
        Vc.exports = ew
    });
    var zc = E((pee, Gc) => {
        var tw = dt(),
            rw = tw["__core-js_shared__"];
        Gc.exports = rw
    });
    var Uc = E((dee, jc) => {
        var Us = zc(),
            Hc = function() {
                var e = /[^.]+$/.exec(Us && Us.keys && Us.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function nw(e) {
            return !!Hc && Hc in e
        }
        jc.exports = nw
    });
    var Ws = E((mee, Wc) => {
        var iw = Function.prototype,
            aw = iw.toString;

        function sw(e) {
            if (e != null) {
                try {
                    return aw.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Wc.exports = sw
    });
    var $c = E((gee, Xc) => {
        var ow = js(),
            lw = Uc(),
            uw = It(),
            hw = Ws(),
            cw = /[\\^$.*+?()[\]{}|]/g,
            fw = /^\[object .+?Constructor\]$/,
            pw = Function.prototype,
            dw = Object.prototype,
            mw = pw.toString,
            gw = dw.hasOwnProperty,
            vw = RegExp("^" + mw.call(gw).replace(cw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function yw(e) {
            if (!uw(e) || lw(e)) return !1;
            var t = ow(e) ? vw : fw;
            return t.test(hw(e))
        }
        Xc.exports = yw
    });
    var Yc = E((vee, Kc) => {
        function Ew(e, t) {
            return e ? .[t]
        }
        Kc.exports = Ew
    });
    var Qt = E((yee, Qc) => {
        var bw = $c(),
            Sw = Yc();

        function xw(e, t) {
            var r = Sw(e, t);
            return bw(r) ? r : void 0
        }
        Qc.exports = xw
    });
    var Oi = E((Eee, Zc) => {
        var _w = Qt(),
            Tw = dt(),
            Iw = _w(Tw, "Map");
        Zc.exports = Iw
    });
    var Tn = E((bee, Jc) => {
        var Aw = Qt(),
            Pw = Aw(Object, "create");
        Jc.exports = Pw
    });
    var rf = E((See, tf) => {
        var ef = Tn();

        function Cw() {
            this.__data__ = ef ? ef(null) : {}, this.size = 0
        }
        tf.exports = Cw
    });
    var af = E((xee, nf) => {
        function ww(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        nf.exports = ww
    });
    var of = E((_ee, sf) => {
        var Mw = Tn(),
            Ow = "__lodash_hash_undefined__",
            Dw = Object.prototype,
            Fw = Dw.hasOwnProperty;

        function Rw(e) {
            var t = this.__data__;
            if (Mw) {
                var r = t[e];
                return r === Ow ? void 0 : r
            }
            return Fw.call(t, e) ? t[e] : void 0
        }
        sf.exports = Rw
    });
    var uf = E((Tee, lf) => {
        var qw = Tn(),
            Lw = Object.prototype,
            kw = Lw.hasOwnProperty;

        function Nw(e) {
            var t = this.__data__;
            return qw ? t[e] !== void 0 : kw.call(t, e)
        }
        lf.exports = Nw
    });
    var cf = E((Iee, hf) => {
        var Bw = Tn(),
            Vw = "__lodash_hash_undefined__";

        function Gw(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = Bw && t === void 0 ? Vw : t, this
        }
        hf.exports = Gw
    });
    var pf = E((Aee, ff) => {
        var zw = rf(),
            Hw = af(),
            jw = of (),
            Uw = uf(),
            Ww = cf();

        function Rr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Rr.prototype.clear = zw;
        Rr.prototype.delete = Hw;
        Rr.prototype.get = jw;
        Rr.prototype.has = Uw;
        Rr.prototype.set = Ww;
        ff.exports = Rr
    });
    var gf = E((Pee, mf) => {
        var df = pf(),
            Xw = xn(),
            $w = Oi();

        function Kw() {
            this.size = 0, this.__data__ = {
                hash: new df,
                map: new($w || Xw),
                string: new df
            }
        }
        mf.exports = Kw
    });
    var yf = E((Cee, vf) => {
        function Yw(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        vf.exports = Yw
    });
    var In = E((wee, Ef) => {
        var Qw = yf();

        function Zw(e, t) {
            var r = e.__data__;
            return Qw(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Ef.exports = Zw
    });
    var Sf = E((Mee, bf) => {
        var Jw = In();

        function eM(e) {
            var t = Jw(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        bf.exports = eM
    });
    var _f = E((Oee, xf) => {
        var tM = In();

        function rM(e) {
            return tM(this, e).get(e)
        }
        xf.exports = rM
    });
    var If = E((Dee, Tf) => {
        var nM = In();

        function iM(e) {
            return nM(this, e).has(e)
        }
        Tf.exports = iM
    });
    var Pf = E((Fee, Af) => {
        var aM = In();

        function sM(e, t) {
            var r = aM(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        Af.exports = sM
    });
    var Di = E((Ree, Cf) => {
        var oM = gf(),
            lM = Sf(),
            uM = _f(),
            hM = If(),
            cM = Pf();

        function qr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        qr.prototype.clear = oM;
        qr.prototype.delete = lM;
        qr.prototype.get = uM;
        qr.prototype.has = hM;
        qr.prototype.set = cM;
        Cf.exports = qr
    });
    var Mf = E((qee, wf) => {
        var fM = xn(),
            pM = Oi(),
            dM = Di(),
            mM = 200;

        function gM(e, t) {
            var r = this.__data__;
            if (r instanceof fM) {
                var n = r.__data__;
                if (!pM || n.length < mM - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new dM(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        wf.exports = gM
    });
    var Xs = E((Lee, Of) => {
        var vM = xn(),
            yM = bc(),
            EM = xc(),
            bM = Tc(),
            SM = Ac(),
            xM = Mf();

        function Lr(e) {
            var t = this.__data__ = new vM(e);
            this.size = t.size
        }
        Lr.prototype.clear = yM;
        Lr.prototype.delete = EM;
        Lr.prototype.get = bM;
        Lr.prototype.has = SM;
        Lr.prototype.set = xM;
        Of.exports = Lr
    });
    var Ff = E((kee, Df) => {
        var _M = "__lodash_hash_undefined__";

        function TM(e) {
            return this.__data__.set(e, _M), this
        }
        Df.exports = TM
    });
    var qf = E((Nee, Rf) => {
        function IM(e) {
            return this.__data__.has(e)
        }
        Rf.exports = IM
    });
    var kf = E((Bee, Lf) => {
        var AM = Di(),
            PM = Ff(),
            CM = qf();

        function Fi(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new AM; ++t < r;) this.add(e[t])
        }
        Fi.prototype.add = Fi.prototype.push = PM;
        Fi.prototype.has = CM;
        Lf.exports = Fi
    });
    var Bf = E((Vee, Nf) => {
        function wM(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        Nf.exports = wM
    });
    var Gf = E((Gee, Vf) => {
        function MM(e, t) {
            return e.has(t)
        }
        Vf.exports = MM
    });
    var $s = E((zee, zf) => {
        var OM = kf(),
            DM = Bf(),
            FM = Gf(),
            RM = 1,
            qM = 2;

        function LM(e, t, r, n, i, a) {
            var s = r & RM,
                o = e.length,
                l = t.length;
            if (o != l && !(s && l > o)) return !1;
            var c = a.get(e),
                u = a.get(t);
            if (c && u) return c == t && u == e;
            var f = -1,
                g = !0,
                d = r & qM ? new OM : void 0;
            for (a.set(e, t), a.set(t, e); ++f < o;) {
                var p = e[f],
                    m = t[f];
                if (n) var h = s ? n(m, p, f, t, e, a) : n(p, m, f, e, t, a);
                if (h !== void 0) {
                    if (h) continue;
                    g = !1;
                    break
                }
                if (d) {
                    if (!DM(t, function(v, y) {
                            if (!FM(d, y) && (p === v || i(p, v, r, n, a))) return d.push(y)
                        })) {
                        g = !1;
                        break
                    }
                } else if (!(p === m || i(p, m, r, n, a))) {
                    g = !1;
                    break
                }
            }
            return a.delete(e), a.delete(t), g
        }
        zf.exports = LM
    });
    var jf = E((Hee, Hf) => {
        var kM = dt(),
            NM = kM.Uint8Array;
        Hf.exports = NM
    });
    var Wf = E((jee, Uf) => {
        function BM(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        Uf.exports = BM
    });
    var $f = E((Uee, Xf) => {
        function VM(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Xf.exports = VM
    });
    var Jf = E((Wee, Zf) => {
        var Kf = Fr(),
            Yf = jf(),
            GM = Mi(),
            zM = $s(),
            HM = Wf(),
            jM = $f(),
            UM = 1,
            WM = 2,
            XM = "[object Boolean]",
            $M = "[object Date]",
            KM = "[object Error]",
            YM = "[object Map]",
            QM = "[object Number]",
            ZM = "[object RegExp]",
            JM = "[object Set]",
            eO = "[object String]",
            tO = "[object Symbol]",
            rO = "[object ArrayBuffer]",
            nO = "[object DataView]",
            Qf = Kf ? Kf.prototype : void 0,
            Ks = Qf ? Qf.valueOf : void 0;

        function iO(e, t, r, n, i, a, s) {
            switch (r) {
                case nO:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case rO:
                    return !(e.byteLength != t.byteLength || !a(new Yf(e), new Yf(t)));
                case XM:
                case $M:
                case QM:
                    return GM(+e, +t);
                case KM:
                    return e.name == t.name && e.message == t.message;
                case ZM:
                case eO:
                    return e == t + "";
                case YM:
                    var o = HM;
                case JM:
                    var l = n & UM;
                    if (o || (o = jM), e.size != t.size && !l) return !1;
                    var c = s.get(e);
                    if (c) return c == t;
                    n |= WM, s.set(e, t);
                    var u = zM(o(e), o(t), n, i, a, s);
                    return s.delete(e), u;
                case tO:
                    if (Ks) return Ks.call(e) == Ks.call(t)
            }
            return !1
        }
        Zf.exports = iO
    });
    var Ri = E((Xee, ep) => {
        function aO(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        ep.exports = aO
    });
    var Re = E(($ee, tp) => {
        var sO = Array.isArray;
        tp.exports = sO
    });
    var Ys = E((Kee, rp) => {
        var oO = Ri(),
            lO = Re();

        function uO(e, t, r) {
            var n = t(e);
            return lO(e) ? n : oO(n, r(e))
        }
        rp.exports = uO
    });
    var ip = E((Yee, np) => {
        function hO(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n;) {
                var s = e[r];
                t(s, r, e) && (a[i++] = s)
            }
            return a
        }
        np.exports = hO
    });
    var Qs = E((Qee, ap) => {
        function cO() {
            return []
        }
        ap.exports = cO
    });
    var Zs = E((Zee, op) => {
        var fO = ip(),
            pO = Qs(),
            dO = Object.prototype,
            mO = dO.propertyIsEnumerable,
            sp = Object.getOwnPropertySymbols,
            gO = sp ? function(e) {
                return e == null ? [] : (e = Object(e), fO(sp(e), function(t) {
                    return mO.call(e, t)
                }))
            } : pO;
        op.exports = gO
    });
    var up = E((Jee, lp) => {
        function vO(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        lp.exports = vO
    });
    var qt = E((ete, hp) => {
        function yO(e) {
            return e != null && typeof e == "object"
        }
        hp.exports = yO
    });
    var fp = E((tte, cp) => {
        var EO = Yt(),
            bO = qt(),
            SO = "[object Arguments]";

        function xO(e) {
            return bO(e) && EO(e) == SO
        }
        cp.exports = xO
    });
    var An = E((rte, mp) => {
        var pp = fp(),
            _O = qt(),
            dp = Object.prototype,
            TO = dp.hasOwnProperty,
            IO = dp.propertyIsEnumerable,
            AO = pp(function() {
                return arguments
            }()) ? pp : function(e) {
                return _O(e) && TO.call(e, "callee") && !IO.call(e, "callee")
            };
        mp.exports = AO
    });
    var vp = E((nte, gp) => {
        function PO() {
            return !1
        }
        gp.exports = PO
    });
    var qi = E((Pn, kr) => {
        var CO = dt(),
            wO = vp(),
            bp = typeof Pn == "object" && Pn && !Pn.nodeType && Pn,
            yp = bp && typeof kr == "object" && kr && !kr.nodeType && kr,
            MO = yp && yp.exports === bp,
            Ep = MO ? CO.Buffer : void 0,
            OO = Ep ? Ep.isBuffer : void 0,
            DO = OO || wO;
        kr.exports = DO
    });
    var Li = E((ite, Sp) => {
        var FO = 9007199254740991,
            RO = /^(?:0|[1-9]\d*)$/;

        function qO(e, t) {
            var r = typeof e;
            return t = t ? ? FO, !!t && (r == "number" || r != "symbol" && RO.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Sp.exports = qO
    });
    var ki = E((ate, xp) => {
        var LO = 9007199254740991;

        function kO(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= LO
        }
        xp.exports = kO
    });
    var Tp = E((ste, _p) => {
        var NO = Yt(),
            BO = ki(),
            VO = qt(),
            GO = "[object Arguments]",
            zO = "[object Array]",
            HO = "[object Boolean]",
            jO = "[object Date]",
            UO = "[object Error]",
            WO = "[object Function]",
            XO = "[object Map]",
            $O = "[object Number]",
            KO = "[object Object]",
            YO = "[object RegExp]",
            QO = "[object Set]",
            ZO = "[object String]",
            JO = "[object WeakMap]",
            eD = "[object ArrayBuffer]",
            tD = "[object DataView]",
            rD = "[object Float32Array]",
            nD = "[object Float64Array]",
            iD = "[object Int8Array]",
            aD = "[object Int16Array]",
            sD = "[object Int32Array]",
            oD = "[object Uint8Array]",
            lD = "[object Uint8ClampedArray]",
            uD = "[object Uint16Array]",
            hD = "[object Uint32Array]",
            me = {};
        me[rD] = me[nD] = me[iD] = me[aD] = me[sD] = me[oD] = me[lD] = me[uD] = me[hD] = !0;
        me[GO] = me[zO] = me[eD] = me[HO] = me[tD] = me[jO] = me[UO] = me[WO] = me[XO] = me[$O] = me[KO] = me[YO] = me[QO] = me[ZO] = me[JO] = !1;

        function cD(e) {
            return VO(e) && BO(e.length) && !!me[NO(e)]
        }
        _p.exports = cD
    });
    var Ap = E((ote, Ip) => {
        function fD(e) {
            return function(t) {
                return e(t)
            }
        }
        Ip.exports = fD
    });
    var Cp = E((Cn, Nr) => {
        var pD = Hs(),
            Pp = typeof Cn == "object" && Cn && !Cn.nodeType && Cn,
            wn = Pp && typeof Nr == "object" && Nr && !Nr.nodeType && Nr,
            dD = wn && wn.exports === Pp,
            Js = dD && pD.process,
            mD = function() {
                try {
                    var e = wn && wn.require && wn.require("util").types;
                    return e || Js && Js.binding && Js.binding("util")
                } catch {}
            }();
        Nr.exports = mD
    });
    var Ni = E((lte, Op) => {
        var gD = Tp(),
            vD = Ap(),
            wp = Cp(),
            Mp = wp && wp.isTypedArray,
            yD = Mp ? vD(Mp) : gD;
        Op.exports = yD
    });
    var eo = E((ute, Dp) => {
        var ED = up(),
            bD = An(),
            SD = Re(),
            xD = qi(),
            _D = Li(),
            TD = Ni(),
            ID = Object.prototype,
            AD = ID.hasOwnProperty;

        function PD(e, t) {
            var r = SD(e),
                n = !r && bD(e),
                i = !r && !n && xD(e),
                a = !r && !n && !i && TD(e),
                s = r || n || i || a,
                o = s ? ED(e.length, String) : [],
                l = o.length;
            for (var c in e)(t || AD.call(e, c)) && !(s && (c == "length" || i && (c == "offset" || c == "parent") || a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || _D(c, l))) && o.push(c);
            return o
        }
        Dp.exports = PD
    });
    var Bi = E((hte, Fp) => {
        var CD = Object.prototype;

        function wD(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || CD;
            return e === r
        }
        Fp.exports = wD
    });
    var to = E((cte, Rp) => {
        function MD(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        Rp.exports = MD
    });
    var Lp = E((fte, qp) => {
        var OD = to(),
            DD = OD(Object.keys, Object);
        qp.exports = DD
    });
    var Vi = E((pte, kp) => {
        var FD = Bi(),
            RD = Lp(),
            qD = Object.prototype,
            LD = qD.hasOwnProperty;

        function kD(e) {
            if (!FD(e)) return RD(e);
            var t = [];
            for (var r in Object(e)) LD.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        kp.exports = kD
    });
    var pr = E((dte, Np) => {
        var ND = js(),
            BD = ki();

        function VD(e) {
            return e != null && BD(e.length) && !ND(e)
        }
        Np.exports = VD
    });
    var Mn = E((mte, Bp) => {
        var GD = eo(),
            zD = Vi(),
            HD = pr();

        function jD(e) {
            return HD(e) ? GD(e) : zD(e)
        }
        Bp.exports = jD
    });
    var Gp = E((gte, Vp) => {
        var UD = Ys(),
            WD = Zs(),
            XD = Mn();

        function $D(e) {
            return UD(e, XD, WD)
        }
        Vp.exports = $D
    });
    var jp = E((vte, Hp) => {
        var zp = Gp(),
            KD = 1,
            YD = Object.prototype,
            QD = YD.hasOwnProperty;

        function ZD(e, t, r, n, i, a) {
            var s = r & KD,
                o = zp(e),
                l = o.length,
                c = zp(t),
                u = c.length;
            if (l != u && !s) return !1;
            for (var f = l; f--;) {
                var g = o[f];
                if (!(s ? g in t : QD.call(t, g))) return !1
            }
            var d = a.get(e),
                p = a.get(t);
            if (d && p) return d == t && p == e;
            var m = !0;
            a.set(e, t), a.set(t, e);
            for (var h = s; ++f < l;) {
                g = o[f];
                var v = e[g],
                    y = t[g];
                if (n) var b = s ? n(y, v, g, t, e, a) : n(v, y, g, e, t, a);
                if (!(b === void 0 ? v === y || i(v, y, r, n, a) : b)) {
                    m = !1;
                    break
                }
                h || (h = g == "constructor")
            }
            if (m && !h) {
                var S = e.constructor,
                    x = t.constructor;
                S != x && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof x == "function" && x instanceof x) && (m = !1)
            }
            return a.delete(e), a.delete(t), m
        }
        Hp.exports = ZD
    });
    var Wp = E((yte, Up) => {
        var JD = Qt(),
            eF = dt(),
            tF = JD(eF, "DataView");
        Up.exports = tF
    });
    var $p = E((Ete, Xp) => {
        var rF = Qt(),
            nF = dt(),
            iF = rF(nF, "Promise");
        Xp.exports = iF
    });
    var Yp = E((bte, Kp) => {
        var aF = Qt(),
            sF = dt(),
            oF = aF(sF, "Set");
        Kp.exports = oF
    });
    var ro = E((Ste, Qp) => {
        var lF = Qt(),
            uF = dt(),
            hF = lF(uF, "WeakMap");
        Qp.exports = hF
    });
    var Gi = E((xte, id) => {
        var no = Wp(),
            io = Oi(),
            ao = $p(),
            so = Yp(),
            oo = ro(),
            nd = Yt(),
            Br = Ws(),
            Zp = "[object Map]",
            cF = "[object Object]",
            Jp = "[object Promise]",
            ed = "[object Set]",
            td = "[object WeakMap]",
            rd = "[object DataView]",
            fF = Br(no),
            pF = Br(io),
            dF = Br(ao),
            mF = Br(so),
            gF = Br(oo),
            dr = nd;
        (no && dr(new no(new ArrayBuffer(1))) != rd || io && dr(new io) != Zp || ao && dr(ao.resolve()) != Jp || so && dr(new so) != ed || oo && dr(new oo) != td) && (dr = function(e) {
            var t = nd(e),
                r = t == cF ? e.constructor : void 0,
                n = r ? Br(r) : "";
            if (n) switch (n) {
                case fF:
                    return rd;
                case pF:
                    return Zp;
                case dF:
                    return Jp;
                case mF:
                    return ed;
                case gF:
                    return td
            }
            return t
        });
        id.exports = dr
    });
    var fd = E((_te, cd) => {
        var lo = Xs(),
            vF = $s(),
            yF = Jf(),
            EF = jp(),
            ad = Gi(),
            sd = Re(),
            od = qi(),
            bF = Ni(),
            SF = 1,
            ld = "[object Arguments]",
            ud = "[object Array]",
            zi = "[object Object]",
            xF = Object.prototype,
            hd = xF.hasOwnProperty;

        function _F(e, t, r, n, i, a) {
            var s = sd(e),
                o = sd(t),
                l = s ? ud : ad(e),
                c = o ? ud : ad(t);
            l = l == ld ? zi : l, c = c == ld ? zi : c;
            var u = l == zi,
                f = c == zi,
                g = l == c;
            if (g && od(e)) {
                if (!od(t)) return !1;
                s = !0, u = !1
            }
            if (g && !u) return a || (a = new lo), s || bF(e) ? vF(e, t, r, n, i, a) : yF(e, t, l, r, n, i, a);
            if (!(r & SF)) {
                var d = u && hd.call(e, "__wrapped__"),
                    p = f && hd.call(t, "__wrapped__");
                if (d || p) {
                    var m = d ? e.value() : e,
                        h = p ? t.value() : t;
                    return a || (a = new lo), i(m, h, r, n, a)
                }
            }
            return g ? (a || (a = new lo), EF(e, t, r, n, i, a)) : !1
        }
        cd.exports = _F
    });
    var uo = E((Tte, md) => {
        var TF = fd(),
            pd = qt();

        function dd(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !pd(e) && !pd(t) ? e !== e && t !== t : TF(e, t, r, n, dd, i)
        }
        md.exports = dd
    });
    var vd = E((Ite, gd) => {
        var IF = Xs(),
            AF = uo(),
            PF = 1,
            CF = 2;

        function wF(e, t, r, n) {
            var i = r.length,
                a = i,
                s = !n;
            if (e == null) return !a;
            for (e = Object(e); i--;) {
                var o = r[i];
                if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1
            }
            for (; ++i < a;) {
                o = r[i];
                var l = o[0],
                    c = e[l],
                    u = o[1];
                if (s && o[2]) {
                    if (c === void 0 && !(l in e)) return !1
                } else {
                    var f = new IF;
                    if (n) var g = n(c, u, l, e, t, f);
                    if (!(g === void 0 ? AF(u, c, PF | CF, n, f) : g)) return !1
                }
            }
            return !0
        }
        gd.exports = wF
    });
    var ho = E((Ate, yd) => {
        var MF = It();

        function OF(e) {
            return e === e && !MF(e)
        }
        yd.exports = OF
    });
    var bd = E((Pte, Ed) => {
        var DF = ho(),
            FF = Mn();

        function RF(e) {
            for (var t = FF(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, DF(i)]
            }
            return t
        }
        Ed.exports = RF
    });
    var co = E((Cte, Sd) => {
        function qF(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Sd.exports = qF
    });
    var _d = E((wte, xd) => {
        var LF = vd(),
            kF = bd(),
            NF = co();

        function BF(e) {
            var t = kF(e);
            return t.length == 1 && t[0][2] ? NF(t[0][0], t[0][1]) : function(r) {
                return r === e || LF(r, e, t)
            }
        }
        xd.exports = BF
    });
    var On = E((Mte, Td) => {
        var VF = Yt(),
            GF = qt(),
            zF = "[object Symbol]";

        function HF(e) {
            return typeof e == "symbol" || GF(e) && VF(e) == zF
        }
        Td.exports = HF
    });
    var Hi = E((Ote, Id) => {
        var jF = Re(),
            UF = On(),
            WF = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            XF = /^\w*$/;

        function $F(e, t) {
            if (jF(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || UF(e) ? !0 : XF.test(e) || !WF.test(e) || t != null && e in Object(t)
        }
        Id.exports = $F
    });
    var Cd = E((Dte, Pd) => {
        var Ad = Di(),
            KF = "Expected a function";

        function fo(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(KF);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    a = r.cache;
                if (a.has(i)) return a.get(i);
                var s = e.apply(this, n);
                return r.cache = a.set(i, s) || a, s
            };
            return r.cache = new(fo.Cache || Ad), r
        }
        fo.Cache = Ad;
        Pd.exports = fo
    });
    var Md = E((Fte, wd) => {
        var YF = Cd(),
            QF = 500;

        function ZF(e) {
            var t = YF(e, function(n) {
                    return r.size === QF && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        wd.exports = ZF
    });
    var Dd = E((Rte, Od) => {
        var JF = Md(),
            eR = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            tR = /\\(\\)?/g,
            rR = JF(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(eR, function(r, n, i, a) {
                    t.push(i ? a.replace(tR, "$1") : n || r)
                }), t
            });
        Od.exports = rR
    });
    var po = E((qte, Fd) => {
        function nR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        Fd.exports = nR
    });
    var Bd = E((Lte, Nd) => {
        var Rd = Fr(),
            iR = po(),
            aR = Re(),
            sR = On(),
            oR = 1 / 0,
            qd = Rd ? Rd.prototype : void 0,
            Ld = qd ? qd.toString : void 0;

        function kd(e) {
            if (typeof e == "string") return e;
            if (aR(e)) return iR(e, kd) + "";
            if (sR(e)) return Ld ? Ld.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -oR ? "-0" : t
        }
        Nd.exports = kd
    });
    var Gd = E((kte, Vd) => {
        var lR = Bd();

        function uR(e) {
            return e == null ? "" : lR(e)
        }
        Vd.exports = uR
    });
    var Dn = E((Nte, zd) => {
        var hR = Re(),
            cR = Hi(),
            fR = Dd(),
            pR = Gd();

        function dR(e, t) {
            return hR(e) ? e : cR(e, t) ? [e] : fR(pR(e))
        }
        zd.exports = dR
    });
    var Vr = E((Bte, Hd) => {
        var mR = On(),
            gR = 1 / 0;

        function vR(e) {
            if (typeof e == "string" || mR(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -gR ? "-0" : t
        }
        Hd.exports = vR
    });
    var ji = E((Vte, jd) => {
        var yR = Dn(),
            ER = Vr();

        function bR(e, t) {
            t = yR(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[ER(t[r++])];
            return r && r == n ? e : void 0
        }
        jd.exports = bR
    });
    var Ui = E((Gte, Ud) => {
        var SR = ji();

        function xR(e, t, r) {
            var n = e == null ? void 0 : SR(e, t);
            return n === void 0 ? r : n
        }
        Ud.exports = xR
    });
    var Xd = E((zte, Wd) => {
        function _R(e, t) {
            return e != null && t in Object(e)
        }
        Wd.exports = _R
    });
    var Kd = E((Hte, $d) => {
        var TR = Dn(),
            IR = An(),
            AR = Re(),
            PR = Li(),
            CR = ki(),
            wR = Vr();

        function MR(e, t, r) {
            t = TR(t, e);
            for (var n = -1, i = t.length, a = !1; ++n < i;) {
                var s = wR(t[n]);
                if (!(a = e != null && r(e, s))) break;
                e = e[s]
            }
            return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && CR(i) && PR(s, i) && (AR(e) || IR(e)))
        }
        $d.exports = MR
    });
    var Qd = E((jte, Yd) => {
        var OR = Xd(),
            DR = Kd();

        function FR(e, t) {
            return e != null && DR(e, t, OR)
        }
        Yd.exports = FR
    });
    var Jd = E((Ute, Zd) => {
        var RR = uo(),
            qR = Ui(),
            LR = Qd(),
            kR = Hi(),
            NR = ho(),
            BR = co(),
            VR = Vr(),
            GR = 1,
            zR = 2;

        function HR(e, t) {
            return kR(e) && NR(t) ? BR(VR(e), t) : function(r) {
                var n = qR(r, e);
                return n === void 0 && n === t ? LR(r, e) : RR(t, n, GR | zR)
            }
        }
        Zd.exports = HR
    });
    var Wi = E((Wte, em) => {
        function jR(e) {
            return e
        }
        em.exports = jR
    });
    var mo = E((Xte, tm) => {
        function UR(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        tm.exports = UR
    });
    var nm = E(($te, rm) => {
        var WR = ji();

        function XR(e) {
            return function(t) {
                return WR(t, e)
            }
        }
        rm.exports = XR
    });
    var am = E((Kte, im) => {
        var $R = mo(),
            KR = nm(),
            YR = Hi(),
            QR = Vr();

        function ZR(e) {
            return YR(e) ? $R(QR(e)) : KR(e)
        }
        im.exports = ZR
    });
    var Zt = E((Yte, sm) => {
        var JR = _d(),
            eq = Jd(),
            tq = Wi(),
            rq = Re(),
            nq = am();

        function iq(e) {
            return typeof e == "function" ? e : e == null ? tq : typeof e == "object" ? rq(e) ? eq(e[0], e[1]) : JR(e) : nq(e)
        }
        sm.exports = iq
    });
    var lm = E((Qte, om) => {
        var aq = /\s/;

        function sq(e) {
            for (var t = e.length; t-- && aq.test(e.charAt(t)););
            return t
        }
        om.exports = sq
    });
    var hm = E((Zte, um) => {
        var oq = lm(),
            lq = /^\s+/;

        function uq(e) {
            return e && e.slice(0, oq(e) + 1).replace(lq, "")
        }
        um.exports = uq
    });
    var Xi = E((Jte, pm) => {
        var hq = hm(),
            cm = It(),
            cq = On(),
            fm = 0 / 0,
            fq = /^[-+]0x[0-9a-f]+$/i,
            pq = /^0b[01]+$/i,
            dq = /^0o[0-7]+$/i,
            mq = parseInt;

        function gq(e) {
            if (typeof e == "number") return e;
            if (cq(e)) return fm;
            if (cm(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = cm(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = hq(e);
            var r = pq.test(e);
            return r || dq.test(e) ? mq(e.slice(2), r ? 2 : 8) : fq.test(e) ? fm : +e
        }
        pm.exports = gq
    });
    var gm = E((ere, mm) => {
        var vq = Xi(),
            dm = 1 / 0,
            yq = 17976931348623157e292;

        function Eq(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = vq(e), e === dm || e === -dm) {
                var t = e < 0 ? -1 : 1;
                return t * yq
            }
            return e === e ? e : 0
        }
        mm.exports = Eq
    });
    var go = E((tre, vm) => {
        var bq = gm();

        function Sq(e) {
            var t = bq(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        vm.exports = Sq
    });
    var vo = E((rre, ym) => {
        var xq = zs(),
            _q = Zt(),
            Tq = go(),
            Iq = Math.max;

        function Aq(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : Tq(r);
            return i < 0 && (i = Iq(n + i, 0)), xq(e, _q(t, 3), i)
        }
        ym.exports = Aq
    });
    var te = E((nre, Em) => {
        var $i = function(e) {
            return e && e.Math == Math && e
        };
        Em.exports = $i(typeof globalThis == "object" && globalThis) || $i(typeof window == "object" && window) || $i(typeof self == "object" && self) || $i(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var Oe = E((ire, bm) => {
        bm.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var mt = E((are, Sm) => {
        var Pq = Oe();
        Sm.exports = !Pq(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var et = E((sre, xm) => {
        var Fn = Function.prototype.call;
        xm.exports = Fn.bind ? Fn.bind(Fn) : function() {
            return Fn.apply(Fn, arguments)
        }
    });
    var Am = E(Im => {
        "use strict";
        var _m = {}.propertyIsEnumerable,
            Tm = Object.getOwnPropertyDescriptor,
            Cq = Tm && !_m.call({
                1: 2
            }, 1);
        Im.f = Cq ? function(t) {
            var r = Tm(this, t);
            return !!r && r.enumerable
        } : _m
    });
    var Rn = E((lre, Pm) => {
        Pm.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var ge = E((ure, wm) => {
        var Cm = Function.prototype,
            yo = Cm.bind,
            Eo = Cm.call,
            wq = yo && yo.bind(Eo);
        wm.exports = yo ? function(e) {
            return e && wq(Eo, e)
        } : function(e) {
            return e && function() {
                return Eo.apply(e, arguments)
            }
        }
    });
    var Gr = E((hre, Om) => {
        var Mm = ge(),
            Mq = Mm({}.toString),
            Oq = Mm("".slice);
        Om.exports = function(e) {
            return Oq(Mq(e), 8, -1)
        }
    });
    var mr = E((cre, Dm) => {
        var Dq = te(),
            Fq = ge(),
            Rq = Oe(),
            qq = Gr(),
            bo = Dq.Object,
            Lq = Fq("".split);
        Dm.exports = Rq(function() {
            return !bo("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return qq(e) == "String" ? Lq(e, "") : bo(e)
        } : bo
    });
    var Ki = E((fre, Fm) => {
        var kq = te(),
            Nq = kq.TypeError;
        Fm.exports = function(e) {
            if (e == null) throw Nq("Can't call method on " + e);
            return e
        }
    });
    var At = E((pre, Rm) => {
        var Bq = mr(),
            Vq = Ki();
        Rm.exports = function(e) {
            return Bq(Vq(e))
        }
    });
    var Se = E((dre, qm) => {
        qm.exports = function(e) {
            return typeof e == "function"
        }
    });
    var ze = E((mre, Lm) => {
        var Gq = Se();
        Lm.exports = function(e) {
            return typeof e == "object" ? e !== null : Gq(e)
        }
    });
    var tt = E((gre, km) => {
        var So = te(),
            zq = Se(),
            Hq = function(e) {
                return zq(e) ? e : void 0
            };
        km.exports = function(e, t) {
            return arguments.length < 2 ? Hq(So[e]) : So[e] && So[e][t]
        }
    });
    var Yi = E((vre, Nm) => {
        var jq = ge();
        Nm.exports = jq({}.isPrototypeOf)
    });
    var Jt = E((yre, Bm) => {
        var Uq = tt();
        Bm.exports = Uq("navigator", "userAgent") || ""
    });
    var er = E((Ere, Um) => {
        var jm = te(),
            xo = Jt(),
            Vm = jm.process,
            Gm = jm.Deno,
            zm = Vm && Vm.versions || Gm && Gm.version,
            Hm = zm && zm.v8,
            gt, Qi;
        Hm && (gt = Hm.split("."), Qi = gt[0] > 0 && gt[0] < 4 ? 1 : +(gt[0] + gt[1]));
        !Qi && xo && (gt = xo.match(/Edge\/(\d+)/), (!gt || gt[1] >= 74) && (gt = xo.match(/Chrome\/(\d+)/), gt && (Qi = +gt[1])));
        Um.exports = Qi
    });
    var _o = E((bre, Xm) => {
        var Wm = er(),
            Wq = Oe();
        Xm.exports = !!Object.getOwnPropertySymbols && !Wq(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Wm && Wm < 41
        })
    });
    var To = E((Sre, $m) => {
        var Xq = _o();
        $m.exports = Xq && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var Io = E((xre, Km) => {
        var $q = te(),
            Kq = tt(),
            Yq = Se(),
            Qq = Yi(),
            Zq = To(),
            Jq = $q.Object;
        Km.exports = Zq ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = Kq("Symbol");
            return Yq(t) && Qq(t.prototype, Jq(e))
        }
    });
    var qn = E((_re, Ym) => {
        var e2 = te(),
            t2 = e2.String;
        Ym.exports = function(e) {
            try {
                return t2(e)
            } catch {
                return "Object"
            }
        }
    });
    var vt = E((Tre, Qm) => {
        var r2 = te(),
            n2 = Se(),
            i2 = qn(),
            a2 = r2.TypeError;
        Qm.exports = function(e) {
            if (n2(e)) return e;
            throw a2(i2(e) + " is not a function")
        }
    });
    var tr = E((Ire, Zm) => {
        var s2 = vt();
        Zm.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : s2(r)
        }
    });
    var eg = E((Are, Jm) => {
        var o2 = te(),
            Ao = et(),
            Po = Se(),
            Co = ze(),
            l2 = o2.TypeError;
        Jm.exports = function(e, t) {
            var r, n;
            if (t === "string" && Po(r = e.toString) && !Co(n = Ao(r, e)) || Po(r = e.valueOf) && !Co(n = Ao(r, e)) || t !== "string" && Po(r = e.toString) && !Co(n = Ao(r, e))) return n;
            throw l2("Can't convert object to primitive value")
        }
    });
    var zr = E((Pre, tg) => {
        tg.exports = !1
    });
    var Zi = E((Cre, ng) => {
        var rg = te(),
            u2 = Object.defineProperty;
        ng.exports = function(e, t) {
            try {
                u2(rg, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                rg[e] = t
            }
            return t
        }
    });
    var Ln = E((wre, ag) => {
        var h2 = te(),
            c2 = Zi(),
            ig = "__core-js_shared__",
            f2 = h2[ig] || c2(ig, {});
        ag.exports = f2
    });
    var wo = E((Mre, og) => {
        var p2 = zr(),
            sg = Ln();
        (og.exports = function(e, t) {
            return sg[e] || (sg[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: p2 ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var Ie = E((Ore, lg) => {
        var d2 = te(),
            m2 = Ki(),
            g2 = d2.Object;
        lg.exports = function(e) {
            return g2(m2(e))
        }
    });
    var rt = E((Dre, ug) => {
        var v2 = ge(),
            y2 = Ie(),
            E2 = v2({}.hasOwnProperty);
        ug.exports = Object.hasOwn || function(t, r) {
            return E2(y2(t), r)
        }
    });
    var Ji = E((Fre, hg) => {
        var b2 = ge(),
            S2 = 0,
            x2 = Math.random(),
            _2 = b2(1.toString);
        hg.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + _2(++S2 + x2, 36)
        }
    });
    var xe = E((Rre, mg) => {
        var T2 = te(),
            I2 = wo(),
            cg = rt(),
            A2 = Ji(),
            fg = _o(),
            dg = To(),
            Hr = I2("wks"),
            gr = T2.Symbol,
            pg = gr && gr.for,
            P2 = dg ? gr : gr && gr.withoutSetter || A2;
        mg.exports = function(e) {
            if (!cg(Hr, e) || !(fg || typeof Hr[e] == "string")) {
                var t = "Symbol." + e;
                fg && cg(gr, e) ? Hr[e] = gr[e] : dg && pg ? Hr[e] = pg(t) : Hr[e] = P2(t)
            }
            return Hr[e]
        }
    });
    var Eg = E((qre, yg) => {
        var C2 = te(),
            w2 = et(),
            gg = ze(),
            vg = Io(),
            M2 = tr(),
            O2 = eg(),
            D2 = xe(),
            F2 = C2.TypeError,
            R2 = D2("toPrimitive");
        yg.exports = function(e, t) {
            if (!gg(e) || vg(e)) return e;
            var r = M2(e, R2),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = w2(r, e, t), !gg(n) || vg(n)) return n;
                throw F2("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), O2(e, t)
        }
    });
    var kn = E((Lre, bg) => {
        var q2 = Eg(),
            L2 = Io();
        bg.exports = function(e) {
            var t = q2(e, "string");
            return L2(t) ? t : t + ""
        }
    });
    var ea = E((kre, xg) => {
        var k2 = te(),
            Sg = ze(),
            Mo = k2.document,
            N2 = Sg(Mo) && Sg(Mo.createElement);
        xg.exports = function(e) {
            return N2 ? Mo.createElement(e) : {}
        }
    });
    var Oo = E((Nre, _g) => {
        var B2 = mt(),
            V2 = Oe(),
            G2 = ea();
        _g.exports = !B2 && !V2(function() {
            return Object.defineProperty(G2("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var ta = E(Ig => {
        var z2 = mt(),
            H2 = et(),
            j2 = Am(),
            U2 = Rn(),
            W2 = At(),
            X2 = kn(),
            $2 = rt(),
            K2 = Oo(),
            Tg = Object.getOwnPropertyDescriptor;
        Ig.f = z2 ? Tg : function(t, r) {
            if (t = W2(t), r = X2(r), K2) try {
                return Tg(t, r)
            } catch {}
            if ($2(t, r)) return U2(!H2(j2.f, t, r), t[r])
        }
    });
    var ke = E((Vre, Pg) => {
        var Ag = te(),
            Y2 = ze(),
            Q2 = Ag.String,
            Z2 = Ag.TypeError;
        Pg.exports = function(e) {
            if (Y2(e)) return e;
            throw Z2(Q2(e) + " is not an object")
        }
    });
    var nt = E(Mg => {
        var J2 = te(),
            eL = mt(),
            tL = Oo(),
            Cg = ke(),
            rL = kn(),
            nL = J2.TypeError,
            wg = Object.defineProperty;
        Mg.f = eL ? wg : function(t, r, n) {
            if (Cg(t), r = rL(r), Cg(n), tL) try {
                return wg(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw nL("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var Nn = E((zre, Og) => {
        var iL = mt(),
            aL = nt(),
            sL = Rn();
        Og.exports = iL ? function(e, t, r) {
            return aL.f(e, t, sL(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var Bn = E((Hre, Dg) => {
        var oL = ge(),
            lL = Se(),
            Do = Ln(),
            uL = oL(Function.toString);
        lL(Do.inspectSource) || (Do.inspectSource = function(e) {
            return uL(e)
        });
        Dg.exports = Do.inspectSource
    });
    var qg = E((jre, Rg) => {
        var hL = te(),
            cL = Se(),
            fL = Bn(),
            Fg = hL.WeakMap;
        Rg.exports = cL(Fg) && /native code/.test(fL(Fg))
    });
    var ra = E((Ure, kg) => {
        var pL = wo(),
            dL = Ji(),
            Lg = pL("keys");
        kg.exports = function(e) {
            return Lg[e] || (Lg[e] = dL(e))
        }
    });
    var Vn = E((Wre, Ng) => {
        Ng.exports = {}
    });
    var yr = E((Xre, Hg) => {
        var mL = qg(),
            zg = te(),
            Fo = ge(),
            gL = ze(),
            vL = Nn(),
            Ro = rt(),
            qo = Ln(),
            yL = ra(),
            EL = Vn(),
            Bg = "Object already initialized",
            ko = zg.TypeError,
            bL = zg.WeakMap,
            na, Gn, ia, SL = function(e) {
                return ia(e) ? Gn(e) : na(e, {})
            },
            xL = function(e) {
                return function(t) {
                    var r;
                    if (!gL(t) || (r = Gn(t)).type !== e) throw ko("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        mL || qo.state ? (rr = qo.state || (qo.state = new bL), Vg = Fo(rr.get), Lo = Fo(rr.has), Gg = Fo(rr.set), na = function(e, t) {
            if (Lo(rr, e)) throw new ko(Bg);
            return t.facade = e, Gg(rr, e, t), t
        }, Gn = function(e) {
            return Vg(rr, e) || {}
        }, ia = function(e) {
            return Lo(rr, e)
        }) : (vr = yL("state"), EL[vr] = !0, na = function(e, t) {
            if (Ro(e, vr)) throw new ko(Bg);
            return t.facade = e, vL(e, vr, t), t
        }, Gn = function(e) {
            return Ro(e, vr) ? e[vr] : {}
        }, ia = function(e) {
            return Ro(e, vr)
        });
        var rr, Vg, Lo, Gg, vr;
        Hg.exports = {
            set: na,
            get: Gn,
            has: ia,
            enforce: SL,
            getterFor: xL
        }
    });
    var Vo = E(($re, Ug) => {
        var No = mt(),
            _L = rt(),
            jg = Function.prototype,
            TL = No && Object.getOwnPropertyDescriptor,
            Bo = _L(jg, "name"),
            IL = Bo && function() {}.name === "something",
            AL = Bo && (!No || No && TL(jg, "name").configurable);
        Ug.exports = {
            EXISTS: Bo,
            PROPER: IL,
            CONFIGURABLE: AL
        }
    });
    var Lt = E((Kre, Kg) => {
        var PL = te(),
            Wg = Se(),
            CL = rt(),
            Xg = Nn(),
            wL = Zi(),
            ML = Bn(),
            $g = yr(),
            OL = Vo().CONFIGURABLE,
            DL = $g.get,
            FL = $g.enforce,
            RL = String(String).split("String");
        (Kg.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                a = n ? !!n.enumerable : !1,
                s = n ? !!n.noTargetGet : !1,
                o = n && n.name !== void 0 ? n.name : t,
                l;
            if (Wg(r) && (String(o).slice(0, 7) === "Symbol(" && (o = "[" + String(o).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!CL(r, "name") || OL && r.name !== o) && Xg(r, "name", o), l = FL(r), l.source || (l.source = RL.join(typeof o == "string" ? o : ""))), e === PL) {
                a ? e[t] = r : wL(t, r);
                return
            } else i ? !s && e[t] && (a = !0) : delete e[t];
            a ? e[t] = r : Xg(e, t, r)
        })(Function.prototype, "toString", function() {
            return Wg(this) && DL(this).source || ML(this)
        })
    });
    var nr = E((Yre, Yg) => {
        var qL = Math.ceil,
            LL = Math.floor;
        Yg.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? LL : qL)(t)
        }
    });
    var jr = E((Qre, Qg) => {
        var kL = nr(),
            NL = Math.max,
            BL = Math.min;
        Qg.exports = function(e, t) {
            var r = kL(e);
            return r < 0 ? NL(r + t, 0) : BL(r, t)
        }
    });
    var Jg = E((Zre, Zg) => {
        var VL = nr(),
            GL = Math.min;
        Zg.exports = function(e) {
            return e > 0 ? GL(VL(e), 9007199254740991) : 0
        }
    });
    var ye = E((Jre, ev) => {
        var zL = Jg();
        ev.exports = function(e) {
            return zL(e.length)
        }
    });
    var aa = E((ene, rv) => {
        var HL = At(),
            jL = jr(),
            UL = ye(),
            tv = function(e) {
                return function(t, r, n) {
                    var i = HL(t),
                        a = UL(i),
                        s = jL(n, a),
                        o;
                    if (e && r != r) {
                        for (; a > s;)
                            if (o = i[s++], o != o) return !0
                    } else
                        for (; a > s; s++)
                            if ((e || s in i) && i[s] === r) return e || s || 0;
                    return !e && -1
                }
            };
        rv.exports = {
            includes: tv(!0),
            indexOf: tv(!1)
        }
    });
    var zo = E((tne, iv) => {
        var WL = ge(),
            Go = rt(),
            XL = At(),
            $L = aa().indexOf,
            KL = Vn(),
            nv = WL([].push);
        iv.exports = function(e, t) {
            var r = XL(e),
                n = 0,
                i = [],
                a;
            for (a in r) !Go(KL, a) && Go(r, a) && nv(i, a);
            for (; t.length > n;) Go(r, a = t[n++]) && (~$L(i, a) || nv(i, a));
            return i
        }
    });
    var sa = E((rne, av) => {
        av.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var oa = E(sv => {
        var YL = zo(),
            QL = sa(),
            ZL = QL.concat("length", "prototype");
        sv.f = Object.getOwnPropertyNames || function(t) {
            return YL(t, ZL)
        }
    });
    var lv = E(ov => {
        ov.f = Object.getOwnPropertySymbols
    });
    var hv = E((ane, uv) => {
        var JL = tt(),
            ek = ge(),
            tk = oa(),
            rk = lv(),
            nk = ke(),
            ik = ek([].concat);
        uv.exports = JL("Reflect", "ownKeys") || function(t) {
            var r = tk.f(nk(t)),
                n = rk.f;
            return n ? ik(r, n(t)) : r
        }
    });
    var fv = E((sne, cv) => {
        var ak = rt(),
            sk = hv(),
            ok = ta(),
            lk = nt();
        cv.exports = function(e, t) {
            for (var r = sk(t), n = lk.f, i = ok.f, a = 0; a < r.length; a++) {
                var s = r[a];
                ak(e, s) || n(e, s, i(t, s))
            }
        }
    });
    var la = E((one, pv) => {
        var uk = Oe(),
            hk = Se(),
            ck = /#|\.prototype\./,
            zn = function(e, t) {
                var r = pk[fk(e)];
                return r == mk ? !0 : r == dk ? !1 : hk(t) ? uk(t) : !!t
            },
            fk = zn.normalize = function(e) {
                return String(e).replace(ck, ".").toLowerCase()
            },
            pk = zn.data = {},
            dk = zn.NATIVE = "N",
            mk = zn.POLYFILL = "P";
        pv.exports = zn
    });
    var se = E((lne, dv) => {
        var Ho = te(),
            gk = ta().f,
            vk = Nn(),
            yk = Lt(),
            Ek = Zi(),
            bk = fv(),
            Sk = la();
        dv.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                a, s, o, l, c, u;
            if (n ? s = Ho : i ? s = Ho[r] || Ek(r, {}) : s = (Ho[r] || {}).prototype, s)
                for (o in t) {
                    if (c = t[o], e.noTargetGet ? (u = gk(s, o), l = u && u.value) : l = s[o], a = Sk(n ? o : r + (i ? "." : "#") + o, e.forced), !a && l !== void 0) {
                        if (typeof c == typeof l) continue;
                        bk(c, l)
                    }(e.sham || l && l.sham) && vk(c, "sham", !0), yk(s, o, c, e)
                }
        }
    });
    var yt = E((une, vv) => {
        var mv = ge(),
            xk = vt(),
            gv = mv(mv.bind);
        vv.exports = function(e, t) {
            return xk(e), t === void 0 ? e : gv ? gv(e, t) : function() {
                return e.apply(t, arguments)
            }
        }
    });
    var jo = E((hne, Ev) => {
        var _k = et(),
            yv = ke(),
            Tk = tr();
        Ev.exports = function(e, t, r) {
            var n, i;
            yv(e);
            try {
                if (n = Tk(e, "return"), !n) {
                    if (t === "throw") throw r;
                    return r
                }
                n = _k(n, e)
            } catch (a) {
                i = !0, n = a
            }
            if (t === "throw") throw r;
            if (i) throw n;
            return yv(n), r
        }
    });
    var Sv = E((cne, bv) => {
        var Ik = ke(),
            Ak = jo();
        bv.exports = function(e, t, r, n) {
            try {
                return n ? t(Ik(r)[0], r[1]) : t(r)
            } catch (i) {
                Ak(e, "throw", i)
            }
        }
    });
    var Ur = E((fne, xv) => {
        xv.exports = {}
    });
    var Uo = E((pne, _v) => {
        var Pk = xe(),
            Ck = Ur(),
            wk = Pk("iterator"),
            Mk = Array.prototype;
        _v.exports = function(e) {
            return e !== void 0 && (Ck.Array === e || Mk[wk] === e)
        }
    });
    var ua = E((dne, Iv) => {
        var Ok = xe(),
            Dk = Ok("toStringTag"),
            Tv = {};
        Tv[Dk] = "z";
        Iv.exports = String(Tv) === "[object z]"
    });
    var Hn = E((mne, Av) => {
        var Fk = te(),
            Rk = ua(),
            qk = Se(),
            ha = Gr(),
            Lk = xe(),
            kk = Lk("toStringTag"),
            Nk = Fk.Object,
            Bk = ha(function() {
                return arguments
            }()) == "Arguments",
            Vk = function(e, t) {
                try {
                    return e[t]
                } catch {}
            };
        Av.exports = Rk ? ha : function(e) {
            var t, r, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof(r = Vk(t = Nk(e), kk)) == "string" ? r : Bk ? ha(t) : (n = ha(t)) == "Object" && qk(t.callee) ? "Arguments" : n
        }
    });
    var Er = E((gne, Mv) => {
        var Gk = ge(),
            zk = Oe(),
            Pv = Se(),
            Hk = Hn(),
            jk = tt(),
            Uk = Bn(),
            Cv = function() {},
            Wk = [],
            wv = jk("Reflect", "construct"),
            Wo = /^\s*(?:class|function)\b/,
            Xk = Gk(Wo.exec),
            $k = !Wo.exec(Cv),
            jn = function(e) {
                if (!Pv(e)) return !1;
                try {
                    return wv(Cv, Wk, e), !0
                } catch {
                    return !1
                }
            },
            Kk = function(e) {
                if (!Pv(e)) return !1;
                switch (Hk(e)) {
                    case "AsyncFunction":
                    case "GeneratorFunction":
                    case "AsyncGeneratorFunction":
                        return !1
                }
                return $k || !!Xk(Wo, Uk(e))
            };
        Mv.exports = !wv || zk(function() {
            var e;
            return jn(jn.call) || !jn(Object) || !jn(function() {
                e = !0
            }) || e
        }) ? Kk : jn
    });
    var Wr = E((vne, Ov) => {
        "use strict";
        var Yk = kn(),
            Qk = nt(),
            Zk = Rn();
        Ov.exports = function(e, t, r) {
            var n = Yk(t);
            n in e ? Qk.f(e, n, Zk(0, r)) : e[n] = r
        }
    });
    var Un = E((yne, Fv) => {
        var Jk = Hn(),
            Dv = tr(),
            eN = Ur(),
            tN = xe(),
            rN = tN("iterator");
        Fv.exports = function(e) {
            if (e != null) return Dv(e, rN) || Dv(e, "@@iterator") || eN[Jk(e)]
        }
    });
    var Wn = E((Ene, Rv) => {
        var nN = te(),
            iN = et(),
            aN = vt(),
            sN = ke(),
            oN = qn(),
            lN = Un(),
            uN = nN.TypeError;
        Rv.exports = function(e, t) {
            var r = arguments.length < 2 ? lN(e) : t;
            if (aN(r)) return sN(iN(r, e));
            throw uN(oN(e) + " is not iterable")
        }
    });
    var Nv = E((bne, kv) => {
        "use strict";
        var hN = te(),
            cN = yt(),
            fN = et(),
            pN = Ie(),
            dN = Sv(),
            mN = Uo(),
            gN = Er(),
            vN = ye(),
            qv = Wr(),
            yN = Wn(),
            EN = Un(),
            Lv = hN.Array;
        kv.exports = function(t) {
            var r = pN(t),
                n = gN(this),
                i = arguments.length,
                a = i > 1 ? arguments[1] : void 0,
                s = a !== void 0;
            s && (a = cN(a, i > 2 ? arguments[2] : void 0));
            var o = EN(r),
                l = 0,
                c, u, f, g, d, p;
            if (o && !(this == Lv && mN(o)))
                for (g = yN(r, o), d = g.next, u = n ? new this : []; !(f = fN(d, g)).done; l++) p = s ? dN(g, a, [f.value, l], !0) : f.value, qv(u, l, p);
            else
                for (c = vN(r), u = n ? new this(c) : Lv(c); c > l; l++) p = s ? a(r[l], l) : r[l], qv(u, l, p);
            return u.length = l, u
        }
    });
    var ca = E((Sne, zv) => {
        var bN = xe(),
            Vv = bN("iterator"),
            Gv = !1;
        try {
            Bv = 0, Xo = {
                next: function() {
                    return {
                        done: !!Bv++
                    }
                },
                return: function() {
                    Gv = !0
                }
            }, Xo[Vv] = function() {
                return this
            }, Array.from(Xo, function() {
                throw 2
            })
        } catch {}
        var Bv, Xo;
        zv.exports = function(e, t) {
            if (!t && !Gv) return !1;
            var r = !1;
            try {
                var n = {};
                n[Vv] = function() {
                    return {
                        next: function() {
                            return {
                                done: r = !0
                            }
                        }
                    }
                }, e(n)
            } catch {}
            return r
        }
    });
    var Hv = E(() => {
        var SN = se(),
            xN = Nv(),
            _N = ca(),
            TN = !_N(function(e) {
                Array.from(e)
            });
        SN({
            target: "Array",
            stat: !0,
            forced: TN
        }, {
            from: xN
        })
    });
    var ir = E((Tne, jv) => {
        var IN = Gr();
        jv.exports = Array.isArray || function(t) {
            return IN(t) == "Array"
        }
    });
    var Uv = E(() => {
        var AN = se(),
            PN = ir();
        AN({
            target: "Array",
            stat: !0
        }, {
            isArray: PN
        })
    });
    var Xv = E(() => {
        "use strict";
        var CN = se(),
            wN = te(),
            MN = Oe(),
            ON = Er(),
            DN = Wr(),
            Wv = wN.Array,
            FN = MN(function() {
                function e() {}
                return !(Wv.of.call(e) instanceof e)
            });
        CN({
            target: "Array",
            stat: !0,
            forced: FN
        }, { of: function() {
                for (var t = 0, r = arguments.length, n = new(ON(this) ? this : Wv)(r); r > t;) DN(n, t, arguments[t++]);
                return n.length = r, n
            }
        })
    });
    var Kv = E((wne, $v) => {
        var RN = zo(),
            qN = sa();
        $v.exports = Object.keys || function(t) {
            return RN(t, qN)
        }
    });
    var Qv = E((Mne, Yv) => {
        var LN = mt(),
            kN = nt(),
            NN = ke(),
            BN = At(),
            VN = Kv();
        Yv.exports = LN ? Object.defineProperties : function(t, r) {
            NN(t);
            for (var n = BN(r), i = VN(r), a = i.length, s = 0, o; a > s;) kN.f(t, o = i[s++], n[o]);
            return t
        }
    });
    var $o = E((One, Zv) => {
        var GN = tt();
        Zv.exports = GN("document", "documentElement")
    });
    var ar = E((Dne, ay) => {
        var zN = ke(),
            HN = Qv(),
            Jv = sa(),
            jN = Vn(),
            UN = $o(),
            WN = ea(),
            XN = ra(),
            ey = ">",
            ty = "<",
            Yo = "prototype",
            Qo = "script",
            ny = XN("IE_PROTO"),
            Ko = function() {},
            iy = function(e) {
                return ty + Qo + ey + e + ty + "/" + Qo + ey
            },
            ry = function(e) {
                e.write(iy("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            $N = function() {
                var e = WN("iframe"),
                    t = "java" + Qo + ":",
                    r;
                return e.style.display = "none", UN.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(iy("document.F=Object")), r.close(), r.F
            },
            fa, pa = function() {
                try {
                    fa = new ActiveXObject("htmlfile")
                } catch {}
                pa = typeof document < "u" ? document.domain && fa ? ry(fa) : $N() : ry(fa);
                for (var e = Jv.length; e--;) delete pa[Yo][Jv[e]];
                return pa()
            };
        jN[ny] = !0;
        ay.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Ko[Yo] = zN(t), n = new Ko, Ko[Yo] = null, n[ny] = t) : n = pa(), r === void 0 ? n : HN(n, r)
        }
    });
    var we = E((Fne, sy) => {
        var KN = xe(),
            YN = ar(),
            QN = nt(),
            Zo = KN("unscopables"),
            Jo = Array.prototype;
        Jo[Zo] == null && QN.f(Jo, Zo, {
            configurable: !0,
            value: YN(null)
        });
        sy.exports = function(e) {
            Jo[Zo][e] = !0
        }
    });
    var el = E(() => {
        "use strict";
        var ZN = se(),
            JN = Ie(),
            eB = ye(),
            tB = nr(),
            rB = we();
        ZN({
            target: "Array",
            proto: !0
        }, {
            at: function(t) {
                var r = JN(this),
                    n = eB(r),
                    i = tB(t),
                    a = i >= 0 ? i : n + i;
                return a < 0 || a >= n ? void 0 : r[a]
            }
        });
        rB("at")
    });
    var tl = E((Lne, uy) => {
        var nB = te(),
            oy = ir(),
            iB = Er(),
            aB = ze(),
            sB = xe(),
            oB = sB("species"),
            ly = nB.Array;
        uy.exports = function(e) {
            var t;
            return oy(e) && (t = e.constructor, iB(t) && (t === ly || oy(t.prototype)) ? t = void 0 : aB(t) && (t = t[oB], t === null && (t = void 0))), t === void 0 ? ly : t
        }
    });
    var br = E((kne, hy) => {
        var lB = tl();
        hy.exports = function(e, t) {
            return new(lB(e))(t === 0 ? 0 : t)
        }
    });
    var Xr = E((Nne, cy) => {
        var uB = Oe(),
            hB = xe(),
            cB = er(),
            fB = hB("species");
        cy.exports = function(e) {
            return cB >= 51 || !uB(function() {
                var t = [],
                    r = t.constructor = {};
                return r[fB] = function() {
                    return {
                        foo: 1
                    }
                }, t[e](Boolean).foo !== 1
            })
        }
    });
    var vy = E(() => {
        "use strict";
        var pB = se(),
            dB = te(),
            mB = Oe(),
            gB = ir(),
            vB = ze(),
            yB = Ie(),
            EB = ye(),
            fy = Wr(),
            bB = br(),
            SB = Xr(),
            xB = xe(),
            _B = er(),
            gy = xB("isConcatSpreadable"),
            py = 9007199254740991,
            dy = "Maximum allowed index exceeded",
            my = dB.TypeError,
            TB = _B >= 51 || !mB(function() {
                var e = [];
                return e[gy] = !1, e.concat()[0] !== e
            }),
            IB = SB("concat"),
            AB = function(e) {
                if (!vB(e)) return !1;
                var t = e[gy];
                return t !== void 0 ? !!t : gB(e)
            },
            PB = !TB || !IB;
        pB({
            target: "Array",
            proto: !0,
            forced: PB
        }, {
            concat: function(t) {
                var r = yB(this),
                    n = bB(r, 0),
                    i = 0,
                    a, s, o, l, c;
                for (a = -1, o = arguments.length; a < o; a++)
                    if (c = a === -1 ? r : arguments[a], AB(c)) {
                        if (l = EB(c), i + l > py) throw my(dy);
                        for (s = 0; s < l; s++, i++) s in c && fy(n, i, c[s])
                    } else {
                        if (i >= py) throw my(dy);
                        fy(n, i++, c)
                    }
                return n.length = i, n
            }
        })
    });
    var Ey = E((Gne, yy) => {
        "use strict";
        var CB = Ie(),
            rl = jr(),
            wB = ye(),
            MB = Math.min;
        yy.exports = [].copyWithin || function(t, r) {
            var n = CB(this),
                i = wB(n),
                a = rl(t, i),
                s = rl(r, i),
                o = arguments.length > 2 ? arguments[2] : void 0,
                l = MB((o === void 0 ? i : rl(o, i)) - s, i - a),
                c = 1;
            for (s < a && a < s + l && (c = -1, s += l - 1, a += l - 1); l-- > 0;) s in n ? n[a] = n[s] : delete n[a], a += c, s += c;
            return n
        }
    });
    var by = E(() => {
        var OB = se(),
            DB = Ey(),
            FB = we();
        OB({
            target: "Array",
            proto: !0
        }, {
            copyWithin: DB
        });
        FB("copyWithin")
    });
    var Pt = E((jne, xy) => {
        var RB = yt(),
            qB = ge(),
            LB = mr(),
            kB = Ie(),
            NB = ye(),
            BB = br(),
            Sy = qB([].push),
            sr = function(e) {
                var t = e == 1,
                    r = e == 2,
                    n = e == 3,
                    i = e == 4,
                    a = e == 6,
                    s = e == 7,
                    o = e == 5 || a;
                return function(l, c, u, f) {
                    for (var g = kB(l), d = LB(g), p = RB(c, u), m = NB(d), h = 0, v = f || BB, y = t ? v(l, m) : r || s ? v(l, 0) : void 0, b, S; m > h; h++)
                        if ((o || h in d) && (b = d[h], S = p(b, h, g), e))
                            if (t) y[h] = S;
                            else if (S) switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return b;
                        case 6:
                            return h;
                        case 2:
                            Sy(y, b)
                    } else switch (e) {
                        case 4:
                            return !1;
                        case 7:
                            Sy(y, b)
                    }
                    return a ? -1 : n || i ? i : y
                }
            };
        xy.exports = {
            forEach: sr(0),
            map: sr(1),
            filter: sr(2),
            some: sr(3),
            every: sr(4),
            find: sr(5),
            findIndex: sr(6),
            filterReject: sr(7)
        }
    });
    var Ct = E((Une, _y) => {
        "use strict";
        var VB = Oe();
        _y.exports = function(e, t) {
            var r = [][e];
            return !!r && VB(function() {
                r.call(null, t || function() {
                    throw 1
                }, 1)
            })
        }
    });
    var Ty = E(() => {
        "use strict";
        var GB = se(),
            zB = Pt().every,
            HB = Ct(),
            jB = HB("every");
        GB({
            target: "Array",
            proto: !0,
            forced: !jB
        }, {
            every: function(t) {
                return zB(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    });
    var Py = E(($ne, Ay) => {
        "use strict";
        var UB = Ie(),
            Iy = jr(),
            WB = ye();
        Ay.exports = function(t) {
            for (var r = UB(this), n = WB(r), i = arguments.length, a = Iy(i > 1 ? arguments[1] : void 0, n), s = i > 2 ? arguments[2] : void 0, o = s === void 0 ? n : Iy(s, n); o > a;) r[a++] = t;
            return r
        }
    });
    var Cy = E(() => {
        var XB = se(),
            $B = Py(),
            KB = we();
        XB({
            target: "Array",
            proto: !0
        }, {
            fill: $B
        });
        KB("fill")
    });
    var wy = E(() => {
        "use strict";
        var YB = se(),
            QB = Pt().filter,
            ZB = Xr(),
            JB = ZB("filter");
        YB({
            target: "Array",
            proto: !0,
            forced: !JB
        }, {
            filter: function(t) {
                return QB(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    });
    var Oy = E(() => {
        "use strict";
        var eV = se(),
            tV = Pt().find,
            rV = we(),
            nl = "find",
            My = !0;
        nl in [] && Array(1)[nl](function() {
            My = !1
        });
        eV({
            target: "Array",
            proto: !0,
            forced: My
        }, {
            find: function(t) {
                return tV(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        rV(nl)
    });
    var Fy = E(() => {
        "use strict";
        var nV = se(),
            iV = Pt().findIndex,
            aV = we(),
            il = "findIndex",
            Dy = !0;
        il in [] && Array(1)[il](function() {
            Dy = !1
        });
        nV({
            target: "Array",
            proto: !0,
            forced: Dy
        }, {
            findIndex: function(t) {
                return iV(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        aV(il)
    });
    var al = E((nie, qy) => {
        "use strict";
        var sV = te(),
            oV = ir(),
            lV = ye(),
            uV = yt(),
            hV = sV.TypeError,
            Ry = function(e, t, r, n, i, a, s, o) {
                for (var l = i, c = 0, u = s ? uV(s, o) : !1, f, g; c < n;) {
                    if (c in r) {
                        if (f = u ? u(r[c], c, t) : r[c], a > 0 && oV(f)) g = lV(f), l = Ry(e, t, f, g, l, a - 1) - 1;
                        else {
                            if (l >= 9007199254740991) throw hV("Exceed the acceptable array length");
                            e[l] = f
                        }
                        l++
                    }
                    c++
                }
                return l
            };
        qy.exports = Ry
    });
    var Ly = E(() => {
        "use strict";
        var cV = se(),
            fV = al(),
            pV = Ie(),
            dV = ye(),
            mV = nr(),
            gV = br();
        cV({
            target: "Array",
            proto: !0
        }, {
            flat: function() {
                var t = arguments.length ? arguments[0] : void 0,
                    r = pV(this),
                    n = dV(r),
                    i = gV(r, 0);
                return i.length = fV(i, r, r, n, 0, t === void 0 ? 1 : mV(t)), i
            }
        })
    });
    var ky = E(() => {
        "use strict";
        var vV = se(),
            yV = al(),
            EV = vt(),
            bV = Ie(),
            SV = ye(),
            xV = br();
        vV({
            target: "Array",
            proto: !0
        }, {
            flatMap: function(t) {
                var r = bV(this),
                    n = SV(r),
                    i;
                return EV(t), i = xV(r, 0), i.length = yV(i, r, r, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), i
            }
        })
    });
    var By = E((lie, Ny) => {
        "use strict";
        var _V = Pt().forEach,
            TV = Ct(),
            IV = TV("forEach");
        Ny.exports = IV ? [].forEach : function(t) {
            return _V(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Gy = E(() => {
        "use strict";
        var AV = se(),
            Vy = By();
        AV({
            target: "Array",
            proto: !0,
            forced: [].forEach != Vy
        }, {
            forEach: Vy
        })
    });
    var sl = E(() => {
        "use strict";
        var PV = se(),
            CV = aa().includes,
            wV = we();
        PV({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return CV(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        wV("includes")
    });
    var Hy = E(() => {
        "use strict";
        var MV = se(),
            OV = ge(),
            DV = aa().indexOf,
            FV = Ct(),
            ol = OV([].indexOf),
            zy = !!ol && 1 / ol([1], 1, -0) < 0,
            RV = FV("indexOf");
        MV({
            target: "Array",
            proto: !0,
            forced: zy || !RV
        }, {
            indexOf: function(t) {
                var r = arguments.length > 1 ? arguments[1] : void 0;
                return zy ? ol(this, t, r) || 0 : DV(this, t, r)
            }
        })
    });
    var Uy = E((mie, jy) => {
        var qV = Oe();
        jy.exports = !qV(function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })
    });
    var da = E((gie, Xy) => {
        var LV = te(),
            kV = rt(),
            NV = Se(),
            BV = Ie(),
            VV = ra(),
            GV = Uy(),
            Wy = VV("IE_PROTO"),
            ll = LV.Object,
            zV = ll.prototype;
        Xy.exports = GV ? ll.getPrototypeOf : function(e) {
            var t = BV(e);
            if (kV(t, Wy)) return t[Wy];
            var r = t.constructor;
            return NV(r) && t instanceof r ? r.prototype : t instanceof ll ? zV : null
        }
    });
    var fl = E((vie, Yy) => {
        "use strict";
        var HV = Oe(),
            jV = Se(),
            UV = ar(),
            $y = da(),
            WV = Lt(),
            XV = xe(),
            $V = zr(),
            cl = XV("iterator"),
            Ky = !1,
            kt, ul, hl;
        [].keys && (hl = [].keys(), "next" in hl ? (ul = $y($y(hl)), ul !== Object.prototype && (kt = ul)) : Ky = !0);
        var KV = kt == null || HV(function() {
            var e = {};
            return kt[cl].call(e) !== e
        });
        KV ? kt = {} : $V && (kt = UV(kt));
        jV(kt[cl]) || WV(kt, cl, function() {
            return this
        });
        Yy.exports = {
            IteratorPrototype: kt,
            BUGGY_SAFARI_ITERATORS: Ky
        }
    });
    var Xn = E((yie, Zy) => {
        var YV = nt().f,
            QV = rt(),
            ZV = xe(),
            Qy = ZV("toStringTag");
        Zy.exports = function(e, t, r) {
            e && !QV(e = r ? e : e.prototype, Qy) && YV(e, Qy, {
                configurable: !0,
                value: t
            })
        }
    });
    var e0 = E((Eie, Jy) => {
        "use strict";
        var JV = fl().IteratorPrototype,
            eG = ar(),
            tG = Rn(),
            rG = Xn(),
            nG = Ur(),
            iG = function() {
                return this
            };
        Jy.exports = function(e, t, r) {
            var n = t + " Iterator";
            return e.prototype = eG(JV, {
                next: tG(1, r)
            }), rG(e, n, !1, !0), nG[n] = iG, e
        }
    });
    var n0 = E((bie, r0) => {
        var t0 = te(),
            aG = Se(),
            sG = t0.String,
            oG = t0.TypeError;
        r0.exports = function(e) {
            if (typeof e == "object" || aG(e)) return e;
            throw oG("Can't set " + sG(e) + " as a prototype")
        }
    });
    var ma = E((Sie, i0) => {
        var lG = ge(),
            uG = ke(),
            hG = n0();
        i0.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e = !1,
                t = {},
                r;
            try {
                r = lG(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set), r(t, []), e = t instanceof Array
            } catch {}
            return function(i, a) {
                return uG(i), hG(a), e ? r(i, a) : i.__proto__ = a, i
            }
        }() : void 0)
    });
    var ya = E((xie, d0) => {
        "use strict";
        var cG = se(),
            fG = et(),
            ga = zr(),
            f0 = Vo(),
            pG = Se(),
            dG = e0(),
            a0 = da(),
            s0 = ma(),
            mG = Xn(),
            gG = Nn(),
            pl = Lt(),
            vG = xe(),
            o0 = Ur(),
            p0 = fl(),
            yG = f0.PROPER,
            EG = f0.CONFIGURABLE,
            l0 = p0.IteratorPrototype,
            va = p0.BUGGY_SAFARI_ITERATORS,
            $n = vG("iterator"),
            u0 = "keys",
            Kn = "values",
            h0 = "entries",
            c0 = function() {
                return this
            };
        d0.exports = function(e, t, r, n, i, a, s) {
            dG(r, t, n);
            var o = function(v) {
                    if (v === i && g) return g;
                    if (!va && v in u) return u[v];
                    switch (v) {
                        case u0:
                            return function() {
                                return new r(this, v)
                            };
                        case Kn:
                            return function() {
                                return new r(this, v)
                            };
                        case h0:
                            return function() {
                                return new r(this, v)
                            }
                    }
                    return function() {
                        return new r(this)
                    }
                },
                l = t + " Iterator",
                c = !1,
                u = e.prototype,
                f = u[$n] || u["@@iterator"] || i && u[i],
                g = !va && f || o(i),
                d = t == "Array" && u.entries || f,
                p, m, h;
            if (d && (p = a0(d.call(new e)), p !== Object.prototype && p.next && (!ga && a0(p) !== l0 && (s0 ? s0(p, l0) : pG(p[$n]) || pl(p, $n, c0)), mG(p, l, !0, !0), ga && (o0[l] = c0))), yG && i == Kn && f && f.name !== Kn && (!ga && EG ? gG(u, "name", Kn) : (c = !0, g = function() {
                    return fG(f, this)
                })), i)
                if (m = {
                        values: o(Kn),
                        keys: a ? g : o(u0),
                        entries: o(h0)
                    }, s)
                    for (h in m)(va || c || !(h in u)) && pl(u, h, m[h]);
                else cG({
                    target: t,
                    proto: !0,
                    forced: va || c
                }, m);
            return (!ga || s) && u[$n] !== g && pl(u, $n, g, {
                name: i
            }), o0[t] = g, m
        }
    });
    var E0 = E((_ie, y0) => {
        "use strict";
        var bG = At(),
            dl = we(),
            m0 = Ur(),
            g0 = yr(),
            SG = ya(),
            v0 = "Array Iterator",
            xG = g0.set,
            _G = g0.getterFor(v0);
        y0.exports = SG(Array, "Array", function(e, t) {
            xG(this, {
                type: v0,
                target: bG(e),
                index: 0,
                kind: t
            })
        }, function() {
            var e = _G(this),
                t = e.target,
                r = e.kind,
                n = e.index++;
            return !t || n >= t.length ? (e.target = void 0, {
                value: void 0,
                done: !0
            }) : r == "keys" ? {
                value: n,
                done: !1
            } : r == "values" ? {
                value: t[n],
                done: !1
            } : {
                value: [n, t[n]],
                done: !1
            }
        }, "values");
        m0.Arguments = m0.Array;
        dl("keys");
        dl("values");
        dl("entries")
    });
    var b0 = E(() => {
        "use strict";
        var TG = se(),
            IG = ge(),
            AG = mr(),
            PG = At(),
            CG = Ct(),
            wG = IG([].join),
            MG = AG != Object,
            OG = CG("join", ",");
        TG({
            target: "Array",
            proto: !0,
            forced: MG || !OG
        }, {
            join: function(t) {
                return wG(PG(this), t === void 0 ? "," : t)
            }
        })
    });
    var Ea = E((Aie, _0) => {
        var ml = Function.prototype,
            S0 = ml.apply,
            DG = ml.bind,
            x0 = ml.call;
        _0.exports = typeof Reflect == "object" && Reflect.apply || (DG ? x0.bind(S0) : function() {
            return x0.apply(S0, arguments)
        })
    });
    var A0 = E((Pie, I0) => {
        "use strict";
        var FG = Ea(),
            RG = At(),
            qG = nr(),
            LG = ye(),
            kG = Ct(),
            NG = Math.min,
            gl = [].lastIndexOf,
            T0 = !!gl && 1 / [1].lastIndexOf(1, -0) < 0,
            BG = kG("lastIndexOf"),
            VG = T0 || !BG;
        I0.exports = VG ? function(t) {
            if (T0) return FG(gl, this, arguments) || 0;
            var r = RG(this),
                n = LG(r),
                i = n - 1;
            for (arguments.length > 1 && (i = NG(i, qG(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--)
                if (i in r && r[i] === t) return i || 0;
            return -1
        } : gl
    });
    var C0 = E(() => {
        var GG = se(),
            P0 = A0();
        GG({
            target: "Array",
            proto: !0,
            forced: P0 !== [].lastIndexOf
        }, {
            lastIndexOf: P0
        })
    });
    var w0 = E(() => {
        "use strict";
        var zG = se(),
            HG = Pt().map,
            jG = Xr(),
            UG = jG("map");
        zG({
            target: "Array",
            proto: !0,
            forced: !UG
        }, {
            map: function(t) {
                return HG(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    });
    var vl = E((Die, O0) => {
        var WG = te(),
            XG = vt(),
            $G = Ie(),
            KG = mr(),
            YG = ye(),
            QG = WG.TypeError,
            M0 = function(e) {
                return function(t, r, n, i) {
                    XG(r);
                    var a = $G(t),
                        s = KG(a),
                        o = YG(a),
                        l = e ? o - 1 : 0,
                        c = e ? -1 : 1;
                    if (n < 2)
                        for (;;) {
                            if (l in s) {
                                i = s[l], l += c;
                                break
                            }
                            if (l += c, e ? l < 0 : o <= l) throw QG("Reduce of empty array with no initial value")
                        }
                    for (; e ? l >= 0 : o > l; l += c) l in s && (i = r(i, s[l], l, a));
                    return i
                }
            };
        O0.exports = {
            left: M0(!1),
            right: M0(!0)
        }
    });
    var $r = E((Fie, D0) => {
        var ZG = Gr(),
            JG = te();
        D0.exports = ZG(JG.process) == "process"
    });
    var R0 = E(() => {
        "use strict";
        var e3 = se(),
            t3 = vl().left,
            r3 = Ct(),
            F0 = er(),
            n3 = $r(),
            i3 = r3("reduce"),
            a3 = !n3 && F0 > 79 && F0 < 83;
        e3({
            target: "Array",
            proto: !0,
            forced: !i3 || a3
        }, {
            reduce: function(t) {
                var r = arguments.length;
                return t3(this, t, r, r > 1 ? arguments[1] : void 0)
            }
        })
    });
    var L0 = E(() => {
        "use strict";
        var s3 = se(),
            o3 = vl().right,
            l3 = Ct(),
            q0 = er(),
            u3 = $r(),
            h3 = l3("reduceRight"),
            c3 = !u3 && q0 > 79 && q0 < 83;
        s3({
            target: "Array",
            proto: !0,
            forced: !h3 || c3
        }, {
            reduceRight: function(t) {
                return o3(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    });
    var N0 = E(() => {
        "use strict";
        var f3 = se(),
            p3 = ge(),
            d3 = ir(),
            m3 = p3([].reverse),
            k0 = [1, 2];
        f3({
            target: "Array",
            proto: !0,
            forced: String(k0) === String(k0.reverse())
        }, {
            reverse: function() {
                return d3(this) && (this.length = this.length), m3(this)
            }
        })
    });
    var Yn = E((Vie, B0) => {
        var g3 = ge();
        B0.exports = g3([].slice)
    });
    var z0 = E(() => {
        "use strict";
        var v3 = se(),
            y3 = te(),
            V0 = ir(),
            E3 = Er(),
            b3 = ze(),
            G0 = jr(),
            S3 = ye(),
            x3 = At(),
            _3 = Wr(),
            T3 = xe(),
            I3 = Xr(),
            A3 = Yn(),
            P3 = I3("slice"),
            C3 = T3("species"),
            yl = y3.Array,
            w3 = Math.max;
        v3({
            target: "Array",
            proto: !0,
            forced: !P3
        }, {
            slice: function(t, r) {
                var n = x3(this),
                    i = S3(n),
                    a = G0(t, i),
                    s = G0(r === void 0 ? i : r, i),
                    o, l, c;
                if (V0(n) && (o = n.constructor, E3(o) && (o === yl || V0(o.prototype)) ? o = void 0 : b3(o) && (o = o[C3], o === null && (o = void 0)), o === yl || o === void 0)) return A3(n, a, s);
                for (l = new(o === void 0 ? yl : o)(w3(s - a, 0)), c = 0; a < s; a++, c++) a in n && _3(l, c, n[a]);
                return l.length = c, l
            }
        })
    });
    var H0 = E(() => {
        "use strict";
        var M3 = se(),
            O3 = Pt().some,
            D3 = Ct(),
            F3 = D3("some");
        M3({
            target: "Array",
            proto: !0,
            forced: !F3
        }, {
            some: function(t) {
                return O3(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    });
    var ba = E((Uie, j0) => {
        var R3 = te(),
            q3 = Hn(),
            L3 = R3.String;
        j0.exports = function(e) {
            if (q3(e) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
            return L3(e)
        }
    });
    var X0 = E((Wie, W0) => {
        var U0 = Yn(),
            k3 = Math.floor,
            El = function(e, t) {
                var r = e.length,
                    n = k3(r / 2);
                return r < 8 ? N3(e, t) : B3(e, El(U0(e, 0, n), t), El(U0(e, n), t), t)
            },
            N3 = function(e, t) {
                for (var r = e.length, n = 1, i, a; n < r;) {
                    for (a = n, i = e[n]; a && t(e[a - 1], i) > 0;) e[a] = e[--a];
                    a !== n++ && (e[a] = i)
                }
                return e
            },
            B3 = function(e, t, r, n) {
                for (var i = t.length, a = r.length, s = 0, o = 0; s < i || o < a;) e[s + o] = s < i && o < a ? n(t[s], r[o]) <= 0 ? t[s++] : r[o++] : s < i ? t[s++] : r[o++];
                return e
            };
        W0.exports = El
    });
    var Y0 = E((Xie, K0) => {
        var V3 = Jt(),
            $0 = V3.match(/firefox\/(\d+)/i);
        K0.exports = !!$0 && +$0[1]
    });
    var Z0 = E(($ie, Q0) => {
        var G3 = Jt();
        Q0.exports = /MSIE|Trident/.test(G3)
    });
    var t1 = E((Kie, e1) => {
        var z3 = Jt(),
            J0 = z3.match(/AppleWebKit\/(\d+)\./);
        e1.exports = !!J0 && +J0[1]
    });
    var u1 = E(() => {
        "use strict";
        var H3 = se(),
            o1 = ge(),
            j3 = vt(),
            U3 = Ie(),
            W3 = ye(),
            r1 = ba(),
            bl = Oe(),
            X3 = X0(),
            $3 = Ct(),
            n1 = Y0(),
            K3 = Z0(),
            i1 = er(),
            a1 = t1(),
            or = [],
            s1 = o1(or.sort),
            Y3 = o1(or.push),
            Q3 = bl(function() {
                or.sort(void 0)
            }),
            Z3 = bl(function() {
                or.sort(null)
            }),
            J3 = $3("sort"),
            l1 = !bl(function() {
                if (i1) return i1 < 70;
                if (!(n1 && n1 > 3)) {
                    if (K3) return !0;
                    if (a1) return a1 < 603;
                    var e = "",
                        t, r, n, i;
                    for (t = 65; t < 76; t++) {
                        switch (r = String.fromCharCode(t), t) {
                            case 66:
                            case 69:
                            case 70:
                            case 72:
                                n = 3;
                                break;
                            case 68:
                            case 71:
                                n = 4;
                                break;
                            default:
                                n = 2
                        }
                        for (i = 0; i < 47; i++) or.push({
                            k: r + i,
                            v: n
                        })
                    }
                    for (or.sort(function(a, s) {
                            return s.v - a.v
                        }), i = 0; i < or.length; i++) r = or[i].k.charAt(0), e.charAt(e.length - 1) !== r && (e += r);
                    return e !== "DGBEFHACIJK"
                }
            }),
            e5 = Q3 || !Z3 || !J3 || !l1,
            t5 = function(e) {
                return function(t, r) {
                    return r === void 0 ? -1 : t === void 0 ? 1 : e !== void 0 ? +e(t, r) || 0 : r1(t) > r1(r) ? 1 : -1
                }
            };
        H3({
            target: "Array",
            proto: !0,
            forced: e5
        }, {
            sort: function(t) {
                t !== void 0 && j3(t);
                var r = U3(this);
                if (l1) return t === void 0 ? s1(r) : s1(r, t);
                var n = [],
                    i = W3(r),
                    a, s;
                for (s = 0; s < i; s++) s in r && Y3(n, r[s]);
                for (X3(n, t5(t)), a = n.length, s = 0; s < a;) r[s] = n[s++];
                for (; s < i;) delete r[s++];
                return r
            }
        })
    });
    var Sa = E((Zie, c1) => {
        "use strict";
        var r5 = tt(),
            n5 = nt(),
            i5 = xe(),
            a5 = mt(),
            h1 = i5("species");
        c1.exports = function(e) {
            var t = r5(e),
                r = n5.f;
            a5 && t && !t[h1] && r(t, h1, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    });
    var f1 = E(() => {
        var s5 = Sa();
        s5("Array")
    });
    var p1 = E(() => {
        "use strict";
        var o5 = se(),
            l5 = te(),
            u5 = jr(),
            h5 = nr(),
            c5 = ye(),
            f5 = Ie(),
            p5 = br(),
            d5 = Wr(),
            m5 = Xr(),
            g5 = m5("splice"),
            v5 = l5.TypeError,
            y5 = Math.max,
            E5 = Math.min,
            b5 = 9007199254740991,
            S5 = "Maximum allowed length exceeded";
        o5({
            target: "Array",
            proto: !0,
            forced: !g5
        }, {
            splice: function(t, r) {
                var n = f5(this),
                    i = c5(n),
                    a = u5(t, i),
                    s = arguments.length,
                    o, l, c, u, f, g;
                if (s === 0 ? o = l = 0 : s === 1 ? (o = 0, l = i - a) : (o = s - 2, l = E5(y5(h5(r), 0), i - a)), i + o - l > b5) throw v5(S5);
                for (c = p5(n, l), u = 0; u < l; u++) f = a + u, f in n && d5(c, u, n[f]);
                if (c.length = l, o < l) {
                    for (u = a; u < i - l; u++) f = u + l, g = u + o, f in n ? n[g] = n[f] : delete n[g];
                    for (u = i; u > i - l + o; u--) delete n[u - 1]
                } else if (o > l)
                    for (u = i - l; u > a; u--) f = u + l - 1, g = u + o - 1, f in n ? n[g] = n[f] : delete n[g];
                for (u = 0; u < o; u++) n[u + a] = arguments[u + 2];
                return n.length = i - l + o, c
            }
        })
    });
    var d1 = E(() => {
        var x5 = we();
        x5("flat")
    });
    var m1 = E(() => {
        var _5 = we();
        _5("flatMap")
    });
    var v1 = E((oae, g1) => {
        "use strict";
        var T5 = ua(),
            I5 = Hn();
        g1.exports = T5 ? {}.toString : function() {
            return "[object " + I5(this) + "]"
        }
    });
    var y1 = E(() => {
        var A5 = ua(),
            P5 = Lt(),
            C5 = v1();
        A5 || P5(Object.prototype, "toString", C5, {
            unsafe: !0
        })
    });
    var x1 = E((hae, S1) => {
        var Sl = ge(),
            w5 = nr(),
            M5 = ba(),
            O5 = Ki(),
            D5 = Sl("".charAt),
            E1 = Sl("".charCodeAt),
            F5 = Sl("".slice),
            b1 = function(e) {
                return function(t, r) {
                    var n = M5(O5(t)),
                        i = w5(r),
                        a = n.length,
                        s, o;
                    return i < 0 || i >= a ? e ? "" : void 0 : (s = E1(n, i), s < 55296 || s > 56319 || i + 1 === a || (o = E1(n, i + 1)) < 56320 || o > 57343 ? e ? D5(n, i) : s : e ? F5(n, i, i + 2) : (s - 55296 << 10) + (o - 56320) + 65536)
                }
            };
        S1.exports = {
            codeAt: b1(!1),
            charAt: b1(!0)
        }
    });
    var I1 = E(() => {
        "use strict";
        var R5 = x1().charAt,
            q5 = ba(),
            _1 = yr(),
            L5 = ya(),
            T1 = "String Iterator",
            k5 = _1.set,
            N5 = _1.getterFor(T1);
        L5(String, "String", function(e) {
            k5(this, {
                type: T1,
                string: q5(e),
                index: 0
            })
        }, function() {
            var t = N5(this),
                r = t.string,
                n = t.index,
                i;
            return n >= r.length ? {
                value: void 0,
                done: !0
            } : (i = R5(r, n), t.index += i.length, {
                value: i,
                done: !1
            })
        })
    });
    var P1 = E((pae, A1) => {
        var B5 = te();
        A1.exports = B5
    });
    var w1 = E((dae, C1) => {
        Hv();
        Uv();
        Xv();
        el();
        vy();
        by();
        Ty();
        Cy();
        wy();
        Oy();
        Fy();
        Ly();
        ky();
        Gy();
        sl();
        Hy();
        E0();
        b0();
        C0();
        w0();
        R0();
        L0();
        N0();
        z0();
        H0();
        u1();
        f1();
        p1();
        d1();
        m1();
        y1();
        I1();
        var V5 = P1();
        C1.exports = V5.Array
    });
    var O1 = E((mae, M1) => {
        var G5 = w1();
        M1.exports = G5
    });
    var q1 = E((gae, R1) => {
        var z5 = Gr(),
            H5 = At(),
            D1 = oa().f,
            j5 = Yn(),
            F1 = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            U5 = function(e) {
                try {
                    return D1(e)
                } catch {
                    return j5(F1)
                }
            };
        R1.exports.f = function(t) {
            return F1 && z5(t) == "Window" ? U5(t) : D1(H5(t))
        }
    });
    var k1 = E((vae, L1) => {
        var W5 = Oe();
        L1.exports = !W5(function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })
    });
    var Il = E((yae, V1) => {
        var X5 = se(),
            $5 = ge(),
            K5 = Vn(),
            Y5 = ze(),
            xl = rt(),
            Q5 = nt().f,
            N1 = oa(),
            Z5 = q1(),
            J5 = Ji(),
            ez = k1(),
            B1 = !1,
            Nt = J5("meta"),
            tz = 0,
            _l = Object.isExtensible || function() {
                return !0
            },
            Tl = function(e) {
                Q5(e, Nt, {
                    value: {
                        objectID: "O" + tz++,
                        weakData: {}
                    }
                })
            },
            rz = function(e, t) {
                if (!Y5(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
                if (!xl(e, Nt)) {
                    if (!_l(e)) return "F";
                    if (!t) return "E";
                    Tl(e)
                }
                return e[Nt].objectID
            },
            nz = function(e, t) {
                if (!xl(e, Nt)) {
                    if (!_l(e)) return !0;
                    if (!t) return !1;
                    Tl(e)
                }
                return e[Nt].weakData
            },
            iz = function(e) {
                return ez && B1 && _l(e) && !xl(e, Nt) && Tl(e), e
            },
            az = function() {
                sz.enable = function() {}, B1 = !0;
                var e = N1.f,
                    t = $5([].splice),
                    r = {};
                r[Nt] = 1, e(r).length && (N1.f = function(n) {
                    for (var i = e(n), a = 0, s = i.length; a < s; a++)
                        if (i[a] === Nt) {
                            t(i, a, 1);
                            break
                        }
                    return i
                }, X5({
                    target: "Object",
                    stat: !0,
                    forced: !0
                }, {
                    getOwnPropertyNames: Z5.f
                }))
            },
            sz = V1.exports = {
                enable: az,
                fastKey: rz,
                getWeakData: nz,
                onFreeze: iz
            };
        K5[Nt] = !0
    });
    var _a = E((Eae, j1) => {
        var oz = te(),
            lz = yt(),
            uz = et(),
            hz = ke(),
            cz = qn(),
            fz = Uo(),
            pz = ye(),
            G1 = Yi(),
            dz = Wn(),
            mz = Un(),
            z1 = jo(),
            gz = oz.TypeError,
            xa = function(e, t) {
                this.stopped = e, this.result = t
            },
            H1 = xa.prototype;
        j1.exports = function(e, t, r) {
            var n = r && r.that,
                i = !!(r && r.AS_ENTRIES),
                a = !!(r && r.IS_ITERATOR),
                s = !!(r && r.INTERRUPTED),
                o = lz(t, n),
                l, c, u, f, g, d, p, m = function(v) {
                    return l && z1(l, "normal", v), new xa(!0, v)
                },
                h = function(v) {
                    return i ? (hz(v), s ? o(v[0], v[1], m) : o(v[0], v[1])) : s ? o(v, m) : o(v)
                };
            if (a) l = e;
            else {
                if (c = mz(e), !c) throw gz(cz(e) + " is not iterable");
                if (fz(c)) {
                    for (u = 0, f = pz(e); f > u; u++)
                        if (g = h(e[u]), g && G1(H1, g)) return g;
                    return new xa(!1)
                }
                l = dz(e, c)
            }
            for (d = l.next; !(p = uz(d, l)).done;) {
                try {
                    g = h(p.value)
                } catch (v) {
                    z1(l, "throw", v)
                }
                if (typeof g == "object" && g && G1(H1, g)) return g
            }
            return new xa(!1)
        }
    });
    var Ta = E((bae, U1) => {
        var vz = te(),
            yz = Yi(),
            Ez = vz.TypeError;
        U1.exports = function(e, t) {
            if (yz(t, e)) return e;
            throw Ez("Incorrect invocation")
        }
    });
    var $1 = E((Sae, X1) => {
        var bz = Se(),
            Sz = ze(),
            W1 = ma();
        X1.exports = function(e, t, r) {
            var n, i;
            return W1 && bz(n = t.constructor) && n !== r && Sz(i = n.prototype) && i !== r.prototype && W1(e, i), e
        }
    });
    var Q1 = E((xae, Y1) => {
        "use strict";
        var xz = se(),
            _z = te(),
            Tz = ge(),
            K1 = la(),
            Iz = Lt(),
            Az = Il(),
            Pz = _a(),
            Cz = Ta(),
            wz = Se(),
            Al = ze(),
            Pl = Oe(),
            Mz = ca(),
            Oz = Xn(),
            Dz = $1();
        Y1.exports = function(e, t, r) {
            var n = e.indexOf("Map") !== -1,
                i = e.indexOf("Weak") !== -1,
                a = n ? "set" : "add",
                s = _z[e],
                o = s && s.prototype,
                l = s,
                c = {},
                u = function(v) {
                    var y = Tz(o[v]);
                    Iz(o, v, v == "add" ? function(S) {
                        return y(this, S === 0 ? 0 : S), this
                    } : v == "delete" ? function(b) {
                        return i && !Al(b) ? !1 : y(this, b === 0 ? 0 : b)
                    } : v == "get" ? function(S) {
                        return i && !Al(S) ? void 0 : y(this, S === 0 ? 0 : S)
                    } : v == "has" ? function(S) {
                        return i && !Al(S) ? !1 : y(this, S === 0 ? 0 : S)
                    } : function(S, x) {
                        return y(this, S === 0 ? 0 : S, x), this
                    })
                },
                f = K1(e, !wz(s) || !(i || o.forEach && !Pl(function() {
                    new s().entries().next()
                })));
            if (f) l = r.getConstructor(t, e, n, a), Az.enable();
            else if (K1(e, !0)) {
                var g = new l,
                    d = g[a](i ? {} : -0, 1) != g,
                    p = Pl(function() {
                        g.has(1)
                    }),
                    m = Mz(function(v) {
                        new s(v)
                    }),
                    h = !i && Pl(function() {
                        for (var v = new s, y = 5; y--;) v[a](y, y);
                        return !v.has(-0)
                    });
                m || (l = t(function(v, y) {
                    Cz(v, o);
                    var b = Dz(new s, v, l);
                    return y != null && Pz(y, b[a], {
                        that: b,
                        AS_ENTRIES: n
                    }), b
                }), l.prototype = o, o.constructor = l), (p || h) && (u("delete"), u("has"), n && u("get")), (h || d) && u(a), i && o.clear && delete o.clear
            }
            return c[e] = l, xz({
                global: !0,
                forced: l != s
            }, c), Oz(l, e), i || r.setStrong(l, e, n), l
        }
    });
    var Ia = E((_ae, Z1) => {
        var Fz = Lt();
        Z1.exports = function(e, t, r) {
            for (var n in t) Fz(e, n, t[n], r);
            return e
        }
    });
    var iE = E((Tae, nE) => {
        "use strict";
        var Rz = nt().f,
            qz = ar(),
            J1 = Ia(),
            Lz = yt(),
            kz = Ta(),
            Nz = _a(),
            Bz = ya(),
            Vz = Sa(),
            Qn = mt(),
            eE = Il().fastKey,
            rE = yr(),
            tE = rE.set,
            Cl = rE.getterFor;
        nE.exports = {
            getConstructor: function(e, t, r, n) {
                var i = e(function(c, u) {
                        kz(c, a), tE(c, {
                            type: t,
                            index: qz(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        }), Qn || (c.size = 0), u != null && Nz(u, c[n], {
                            that: c,
                            AS_ENTRIES: r
                        })
                    }),
                    a = i.prototype,
                    s = Cl(t),
                    o = function(c, u, f) {
                        var g = s(c),
                            d = l(c, u),
                            p, m;
                        return d ? d.value = f : (g.last = d = {
                            index: m = eE(u, !0),
                            key: u,
                            value: f,
                            previous: p = g.last,
                            next: void 0,
                            removed: !1
                        }, g.first || (g.first = d), p && (p.next = d), Qn ? g.size++ : c.size++, m !== "F" && (g.index[m] = d)), c
                    },
                    l = function(c, u) {
                        var f = s(c),
                            g = eE(u),
                            d;
                        if (g !== "F") return f.index[g];
                        for (d = f.first; d; d = d.next)
                            if (d.key == u) return d
                    };
                return J1(a, {
                    clear: function() {
                        for (var u = this, f = s(u), g = f.index, d = f.first; d;) d.removed = !0, d.previous && (d.previous = d.previous.next = void 0), delete g[d.index], d = d.next;
                        f.first = f.last = void 0, Qn ? f.size = 0 : u.size = 0
                    },
                    delete: function(c) {
                        var u = this,
                            f = s(u),
                            g = l(u, c);
                        if (g) {
                            var d = g.next,
                                p = g.previous;
                            delete f.index[g.index], g.removed = !0, p && (p.next = d), d && (d.previous = p), f.first == g && (f.first = d), f.last == g && (f.last = p), Qn ? f.size-- : u.size--
                        }
                        return !!g
                    },
                    forEach: function(u) {
                        for (var f = s(this), g = Lz(u, arguments.length > 1 ? arguments[1] : void 0), d; d = d ? d.next : f.first;)
                            for (g(d.value, d.key, this); d && d.removed;) d = d.previous
                    },
                    has: function(u) {
                        return !!l(this, u)
                    }
                }), J1(a, r ? {
                    get: function(u) {
                        var f = l(this, u);
                        return f && f.value
                    },
                    set: function(u, f) {
                        return o(this, u === 0 ? 0 : u, f)
                    }
                } : {
                    add: function(u) {
                        return o(this, u = u === 0 ? 0 : u, u)
                    }
                }), Qn && Rz(a, "size", {
                    get: function() {
                        return s(this).size
                    }
                }), i
            },
            setStrong: function(e, t, r) {
                var n = t + " Iterator",
                    i = Cl(t),
                    a = Cl(n);
                Bz(e, t, function(s, o) {
                    tE(this, {
                        type: n,
                        target: s,
                        state: i(s),
                        kind: o,
                        last: void 0
                    })
                }, function() {
                    for (var s = a(this), o = s.kind, l = s.last; l && l.removed;) l = l.previous;
                    return !s.target || !(s.last = l = l ? l.next : s.state.first) ? (s.target = void 0, {
                        value: void 0,
                        done: !0
                    }) : o == "keys" ? {
                        value: l.key,
                        done: !1
                    } : o == "values" ? {
                        value: l.value,
                        done: !1
                    } : {
                        value: [l.key, l.value],
                        done: !1
                    }
                }, r ? "entries" : "values", !r, !0), Vz(t)
            }
        }
    });
    var aE = E(() => {
        "use strict";
        var Gz = Q1(),
            zz = iE();
        Gz("Map", function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }, zz)
    });
    var oE = E((Pae, sE) => {
        var Hz = te();
        sE.exports = Hz.Promise
    });
    var uE = E((Cae, lE) => {
        var jz = te(),
            Uz = Er(),
            Wz = qn(),
            Xz = jz.TypeError;
        lE.exports = function(e) {
            if (Uz(e)) return e;
            throw Xz(Wz(e) + " is not a constructor")
        }
    });
    var fE = E((wae, cE) => {
        var hE = ke(),
            $z = uE(),
            Kz = xe(),
            Yz = Kz("species");
        cE.exports = function(e, t) {
            var r = hE(e).constructor,
                n;
            return r === void 0 || (n = hE(r)[Yz]) == null ? t : $z(n)
        }
    });
    var wl = E((Mae, pE) => {
        var Qz = Jt();
        pE.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(Qz)
    });
    var Nl = E((Oae, SE) => {
        var Ke = te(),
            Zz = Ea(),
            Jz = yt(),
            dE = Se(),
            eH = rt(),
            tH = Oe(),
            mE = $o(),
            rH = Yn(),
            gE = ea(),
            nH = wl(),
            iH = $r(),
            ql = Ke.setImmediate,
            Ll = Ke.clearImmediate,
            aH = Ke.process,
            Ml = Ke.Dispatch,
            sH = Ke.Function,
            vE = Ke.MessageChannel,
            oH = Ke.String,
            Ol = 0,
            Zn = {},
            yE = "onreadystatechange",
            Jn, Sr, Dl, Fl;
        try {
            Jn = Ke.location
        } catch {}
        var kl = function(e) {
                if (eH(Zn, e)) {
                    var t = Zn[e];
                    delete Zn[e], t()
                }
            },
            Rl = function(e) {
                return function() {
                    kl(e)
                }
            },
            EE = function(e) {
                kl(e.data)
            },
            bE = function(e) {
                Ke.postMessage(oH(e), Jn.protocol + "//" + Jn.host)
            };
        (!ql || !Ll) && (ql = function(t) {
            var r = rH(arguments, 1);
            return Zn[++Ol] = function() {
                Zz(dE(t) ? t : sH(t), void 0, r)
            }, Sr(Ol), Ol
        }, Ll = function(t) {
            delete Zn[t]
        }, iH ? Sr = function(e) {
            aH.nextTick(Rl(e))
        } : Ml && Ml.now ? Sr = function(e) {
            Ml.now(Rl(e))
        } : vE && !nH ? (Dl = new vE, Fl = Dl.port2, Dl.port1.onmessage = EE, Sr = Jz(Fl.postMessage, Fl)) : Ke.addEventListener && dE(Ke.postMessage) && !Ke.importScripts && Jn && Jn.protocol !== "file:" && !tH(bE) ? (Sr = bE, Ke.addEventListener("message", EE, !1)) : yE in gE("script") ? Sr = function(e) {
            mE.appendChild(gE("script"))[yE] = function() {
                mE.removeChild(this), kl(e)
            }
        } : Sr = function(e) {
            setTimeout(Rl(e), 0)
        });
        SE.exports = {
            set: ql,
            clear: Ll
        }
    });
    var _E = E((Dae, xE) => {
        var lH = Jt(),
            uH = te();
        xE.exports = /ipad|iphone|ipod/i.test(lH) && uH.Pebble !== void 0
    });
    var IE = E((Fae, TE) => {
        var hH = Jt();
        TE.exports = /web0s(?!.*chrome)/i.test(hH)
    });
    var RE = E((Rae, FE) => {
        var _r = te(),
            AE = yt(),
            cH = ta().f,
            Bl = Nl().set,
            fH = wl(),
            pH = _E(),
            dH = IE(),
            Vl = $r(),
            PE = _r.MutationObserver || _r.WebKitMutationObserver,
            CE = _r.document,
            wE = _r.process,
            Aa = _r.Promise,
            ME = cH(_r, "queueMicrotask"),
            DE = ME && ME.value,
            ei, xr, ti, Kr, Gl, zl, Pa, OE;
        DE || (ei = function() {
            var e, t;
            for (Vl && (e = wE.domain) && e.exit(); xr;) {
                t = xr.fn, xr = xr.next;
                try {
                    t()
                } catch (r) {
                    throw xr ? Kr() : ti = void 0, r
                }
            }
            ti = void 0, e && e.enter()
        }, !fH && !Vl && !dH && PE && CE ? (Gl = !0, zl = CE.createTextNode(""), new PE(ei).observe(zl, {
            characterData: !0
        }), Kr = function() {
            zl.data = Gl = !Gl
        }) : !pH && Aa && Aa.resolve ? (Pa = Aa.resolve(void 0), Pa.constructor = Aa, OE = AE(Pa.then, Pa), Kr = function() {
            OE(ei)
        }) : Vl ? Kr = function() {
            wE.nextTick(ei)
        } : (Bl = AE(Bl, _r), Kr = function() {
            Bl(ei)
        }));
        FE.exports = DE || function(e) {
            var t = {
                fn: e,
                next: void 0
            };
            ti && (ti.next = t), xr || (xr = t, Kr()), ti = t
        }
    });
    var Hl = E((qae, LE) => {
        "use strict";
        var qE = vt(),
            mH = function(e) {
                var t, r;
                this.promise = new e(function(n, i) {
                    if (t !== void 0 || r !== void 0) throw TypeError("Bad Promise constructor");
                    t = n, r = i
                }), this.resolve = qE(t), this.reject = qE(r)
            };
        LE.exports.f = function(e) {
            return new mH(e)
        }
    });
    var NE = E((Lae, kE) => {
        var gH = ke(),
            vH = ze(),
            yH = Hl();
        kE.exports = function(e, t) {
            if (gH(e), vH(t) && t.constructor === e) return t;
            var r = yH.f(e),
                n = r.resolve;
            return n(t), r.promise
        }
    });
    var VE = E((kae, BE) => {
        var EH = te();
        BE.exports = function(e, t) {
            var r = EH.console;
            r && r.error && (arguments.length == 1 ? r.error(e) : r.error(e, t))
        }
    });
    var zE = E((Nae, GE) => {
        GE.exports = function(e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (t) {
                return {
                    error: !0,
                    value: t
                }
            }
        }
    });
    var jE = E((Bae, HE) => {
        HE.exports = typeof window == "object"
    });
    var cb = E(() => {
        "use strict";
        var Da = se(),
            wa = zr(),
            Bt = te(),
            bH = tt(),
            Vt = et(),
            Ma = oE(),
            UE = Lt(),
            SH = Ia(),
            WE = ma(),
            xH = Xn(),
            _H = Sa(),
            jl = vt(),
            ri = Se(),
            TH = ze(),
            IH = Ta(),
            AH = Bn(),
            XE = _a(),
            PH = ca(),
            CH = fE(),
            eb = Nl().set,
            tb = RE(),
            wH = NE(),
            MH = VE(),
            rb = Hl(),
            Ul = zE(),
            Kl = yr(),
            OH = la(),
            DH = xe(),
            FH = jE(),
            Oa = $r(),
            $E = er(),
            RH = DH("species"),
            Gt = "Promise",
            KE = Kl.get,
            qH = Kl.set,
            LH = Kl.getterFor(Gt),
            Tr = Ma && Ma.prototype,
            it = Ma,
            Yr = Tr,
            nb = Bt.TypeError,
            Wl = Bt.document,
            Yl = Bt.process,
            Jr = rb.f,
            kH = Jr,
            NH = !!(Wl && Wl.createEvent && Bt.dispatchEvent),
            ib = ri(Bt.PromiseRejectionEvent),
            ab = "unhandledrejection",
            BH = "rejectionhandled",
            YE = 0,
            sb = 1,
            VH = 2,
            Ql = 1,
            lb = 2,
            Xl = !1,
            Ca, QE, Zl, ZE, ni = OH(Gt, function() {
                var e = AH(it),
                    t = e !== String(it);
                if (!t && $E === 66 || wa && !Yr.finally) return !0;
                if ($E >= 51 && /native code/.test(e)) return !1;
                var r = new it(function(a) {
                        a(1)
                    }),
                    n = function(a) {
                        a(function() {}, function() {})
                    },
                    i = r.constructor = {};
                return i[RH] = n, Xl = r.then(function() {}) instanceof n, Xl ? !t && FH && !ib : !0
            }),
            GH = ni || !PH(function(e) {
                it.all(e).catch(function() {})
            }),
            ub = function(e) {
                var t;
                return TH(e) && ri(t = e.then) ? t : !1
            },
            Jl = function(e, t) {
                if (!e.notified) {
                    e.notified = !0;
                    var r = e.reactions;
                    tb(function() {
                        for (var n = e.value, i = e.state == sb, a = 0; r.length > a;) {
                            var s = r[a++],
                                o = i ? s.ok : s.fail,
                                l = s.resolve,
                                c = s.reject,
                                u = s.domain,
                                f, g, d;
                            try {
                                o ? (i || (e.rejection === lb && HH(e), e.rejection = Ql), o === !0 ? f = n : (u && u.enter(), f = o(n), u && (u.exit(), d = !0)), f === s.promise ? c(nb("Promise-chain cycle")) : (g = ub(f)) ? Vt(g, f, l, c) : l(f)) : c(n)
                            } catch (p) {
                                u && !d && u.exit(), c(p)
                            }
                        }
                        e.reactions = [], e.notified = !1, t && !e.rejection && zH(e)
                    })
                }
            },
            hb = function(e, t, r) {
                var n, i;
                NH ? (n = Wl.createEvent("Event"), n.promise = t, n.reason = r, n.initEvent(e, !1, !0), Bt.dispatchEvent(n)) : n = {
                    promise: t,
                    reason: r
                }, !ib && (i = Bt["on" + e]) ? i(n) : e === ab && MH("Unhandled promise rejection", r)
            },
            zH = function(e) {
                Vt(eb, Bt, function() {
                    var t = e.facade,
                        r = e.value,
                        n = JE(e),
                        i;
                    if (n && (i = Ul(function() {
                            Oa ? Yl.emit("unhandledRejection", r, t) : hb(ab, t, r)
                        }), e.rejection = Oa || JE(e) ? lb : Ql, i.error)) throw i.value
                })
            },
            JE = function(e) {
                return e.rejection !== Ql && !e.parent
            },
            HH = function(e) {
                Vt(eb, Bt, function() {
                    var t = e.facade;
                    Oa ? Yl.emit("rejectionHandled", t) : hb(BH, t, e.value)
                })
            },
            Qr = function(e, t, r) {
                return function(n) {
                    e(t, n, r)
                }
            },
            Zr = function(e, t, r) {
                e.done || (e.done = !0, r && (e = r), e.value = t, e.state = VH, Jl(e, !0))
            },
            $l = function(e, t, r) {
                if (!e.done) {
                    e.done = !0, r && (e = r);
                    try {
                        if (e.facade === t) throw nb("Promise can't be resolved itself");
                        var n = ub(t);
                        n ? tb(function() {
                            var i = {
                                done: !1
                            };
                            try {
                                Vt(n, t, Qr($l, i, e), Qr(Zr, i, e))
                            } catch (a) {
                                Zr(i, a, e)
                            }
                        }) : (e.value = t, e.state = sb, Jl(e, !1))
                    } catch (i) {
                        Zr({
                            done: !1
                        }, i, e)
                    }
                }
            };
        if (ni && (it = function(t) {
                IH(this, Yr), jl(t), Vt(Ca, this);
                var r = KE(this);
                try {
                    t(Qr($l, r), Qr(Zr, r))
                } catch (n) {
                    Zr(r, n)
                }
            }, Yr = it.prototype, Ca = function(t) {
                qH(this, {
                    type: Gt,
                    done: !1,
                    notified: !1,
                    parent: !1,
                    reactions: [],
                    rejection: !1,
                    state: YE,
                    value: void 0
                })
            }, Ca.prototype = SH(Yr, {
                then: function(t, r) {
                    var n = LH(this),
                        i = n.reactions,
                        a = Jr(CH(this, it));
                    return a.ok = ri(t) ? t : !0, a.fail = ri(r) && r, a.domain = Oa ? Yl.domain : void 0, n.parent = !0, i[i.length] = a, n.state != YE && Jl(n, !1), a.promise
                },
                catch: function(e) {
                    return this.then(void 0, e)
                }
            }), QE = function() {
                var e = new Ca,
                    t = KE(e);
                this.promise = e, this.resolve = Qr($l, t), this.reject = Qr(Zr, t)
            }, rb.f = Jr = function(e) {
                return e === it || e === Zl ? new QE(e) : kH(e)
            }, !wa && ri(Ma) && Tr !== Object.prototype)) {
            ZE = Tr.then, Xl || (UE(Tr, "then", function(t, r) {
                var n = this;
                return new it(function(i, a) {
                    Vt(ZE, n, i, a)
                }).then(t, r)
            }, {
                unsafe: !0
            }), UE(Tr, "catch", Yr.catch, {
                unsafe: !0
            }));
            try {
                delete Tr.constructor
            } catch {}
            WE && WE(Tr, Yr)
        }
        Da({
            global: !0,
            wrap: !0,
            forced: ni
        }, {
            Promise: it
        });
        xH(it, Gt, !1, !0);
        _H(Gt);
        Zl = bH(Gt);
        Da({
            target: Gt,
            stat: !0,
            forced: ni
        }, {
            reject: function(t) {
                var r = Jr(this);
                return Vt(r.reject, void 0, t), r.promise
            }
        });
        Da({
            target: Gt,
            stat: !0,
            forced: wa || ni
        }, {
            resolve: function(t) {
                return wH(wa && this === Zl ? it : this, t)
            }
        });
        Da({
            target: Gt,
            stat: !0,
            forced: GH
        }, {
            all: function(t) {
                var r = this,
                    n = Jr(r),
                    i = n.resolve,
                    a = n.reject,
                    s = Ul(function() {
                        var o = jl(r.resolve),
                            l = [],
                            c = 0,
                            u = 1;
                        XE(t, function(f) {
                            var g = c++,
                                d = !1;
                            u++, Vt(o, r, f).then(function(p) {
                                d || (d = !0, l[g] = p, --u || i(l))
                            }, a)
                        }), --u || i(l)
                    });
                return s.error && a(s.value), n.promise
            },
            race: function(t) {
                var r = this,
                    n = Jr(r),
                    i = n.reject,
                    a = Ul(function() {
                        var s = jl(r.resolve);
                        XE(t, function(o) {
                            Vt(s, r, o).then(n.resolve, i)
                        })
                    });
                return a.error && i(a.value), n.promise
            }
        })
    });
    var bb = E((zae, Eb) => {
        var gb = te(),
            vb = Ln(),
            yb = Se(),
            jH = ar(),
            Fa = da(),
            UH = Lt(),
            WH = xe(),
            XH = zr(),
            fb = "USE_FUNCTION_CONSTRUCTOR",
            pb = WH("asyncIterator"),
            db = gb.AsyncIterator,
            mb = vb.AsyncIteratorPrototype,
            wt, eu;
        if (mb) wt = mb;
        else if (yb(db)) wt = db.prototype;
        else if (vb[fb] || gb[fb]) try {
            eu = Fa(Fa(Fa(Function("return async function*(){}()")()))), Fa(eu) === Object.prototype && (wt = eu)
        } catch {}
        wt ? XH && (wt = jH(wt)) : wt = {};
        yb(wt[pb]) || UH(wt, pb, function() {
            return this
        });
        Eb.exports = wt
    });
    var iu = E((Hae, Tb) => {
        "use strict";
        var tu = Ea(),
            Ra = ke(),
            $H = ar(),
            Sb = tr(),
            KH = Ia(),
            xb = yr(),
            YH = tt(),
            QH = bb(),
            qa = YH("Promise"),
            ZH = xb.set,
            ru = xb.get,
            nu = function(e, t, r) {
                var n = e.done;
                qa.resolve(e.value).then(function(i) {
                    t({
                        done: n,
                        value: i
                    })
                }, r)
            },
            _b = function(t) {
                ZH(this, {
                    iterator: Ra(t),
                    next: t.next
                })
            };
        _b.prototype = KH($H(QH), {
            next: function(t) {
                var r = ru(this),
                    n = !!arguments.length;
                return new qa(function(i, a) {
                    var s = Ra(tu(r.next, r.iterator, n ? [t] : []));
                    nu(s, i, a)
                })
            },
            return: function(e) {
                var t = ru(this).iterator,
                    r = !!arguments.length;
                return new qa(function(n, i) {
                    var a = Sb(t, "return");
                    if (a === void 0) return n({
                        done: !0,
                        value: e
                    });
                    var s = Ra(tu(a, t, r ? [e] : []));
                    nu(s, n, i)
                })
            },
            throw: function(e) {
                var t = ru(this).iterator,
                    r = !!arguments.length;
                return new qa(function(n, i) {
                    var a = Sb(t, "throw");
                    if (a === void 0) return i(e);
                    var s = Ra(tu(a, t, r ? [e] : []));
                    nu(s, n, i)
                })
            }
        });
        Tb.exports = _b
    });
    var Ab = E((jae, Ib) => {
        var JH = et(),
            ej = iu(),
            tj = ke(),
            rj = Wn(),
            nj = tr(),
            ij = xe(),
            aj = ij("asyncIterator");
        Ib.exports = function(e, t) {
            var r = arguments.length < 2 ? nj(e, aj) : t;
            return r ? tj(JH(r, e)) : new ej(rj(e))
        }
    });
    var Cb = E((Uae, Pb) => {
        var sj = te();
        Pb.exports = function(e) {
            return sj[e].prototype
        }
    });
    var Db = E((Wae, Ob) => {
        "use strict";
        var oj = te(),
            wb = et(),
            Mb = vt(),
            au = ke(),
            lj = tt(),
            uj = tr(),
            hj = 9007199254740991,
            cj = oj.TypeError,
            ii = function(e) {
                var t = e == 0,
                    r = e == 1,
                    n = e == 2,
                    i = e == 3;
                return function(a, s, o) {
                    au(a);
                    var l = lj("Promise"),
                        c = Mb(a.next),
                        u = 0,
                        f = s !== void 0;
                    return (f || !t) && Mb(s), new l(function(g, d) {
                        var p = function(v, y) {
                                try {
                                    var b = uj(a, "return");
                                    if (b) return l.resolve(wb(b, a)).then(function() {
                                        v(y)
                                    }, function(S) {
                                        d(S)
                                    })
                                } catch (S) {
                                    return d(S)
                                }
                                v(y)
                            },
                            m = function(v) {
                                p(d, v)
                            },
                            h = function() {
                                try {
                                    if (t && u > hj && f) throw cj("The allowed number of iterations has been exceeded");
                                    l.resolve(au(wb(c, a))).then(function(v) {
                                        try {
                                            if (au(v).done) t ? (o.length = u, g(o)) : g(i ? !1 : n || void 0);
                                            else {
                                                var y = v.value;
                                                f ? l.resolve(t ? s(y, u) : s(y)).then(function(b) {
                                                    r ? h() : n ? b ? h() : p(g, !1) : t ? (o[u++] = b, h()) : b ? p(g, i || y) : h()
                                                }, m) : (o[u++] = y, h())
                                            }
                                        } catch (b) {
                                            m(b)
                                        }
                                    }, m)
                                } catch (v) {
                                    m(v)
                                }
                            };
                        h()
                    })
                }
            };
        Ob.exports = {
            toArray: ii(0),
            forEach: ii(1),
            every: ii(2),
            some: ii(3),
            find: ii(4)
        }
    });
    var Rb = E((Xae, Fb) => {
        "use strict";
        var fj = yt(),
            pj = Ie(),
            dj = Er(),
            mj = Ab(),
            gj = Wn(),
            vj = Un(),
            yj = tr(),
            Ej = Cb(),
            bj = tt(),
            Sj = xe(),
            xj = iu(),
            _j = Db().toArray,
            Tj = Sj("asyncIterator"),
            Ij = Ej("Array").values;
        Fb.exports = function(t) {
            var r = this,
                n = arguments.length,
                i = n > 1 ? arguments[1] : void 0,
                a = n > 2 ? arguments[2] : void 0;
            return new(bj("Promise"))(function(s) {
                var o = pj(t);
                i !== void 0 && (i = fj(i, a));
                var l = yj(o, Tj),
                    c = l ? void 0 : vj(o) || Ij,
                    u = dj(r) ? new r : [],
                    f = l ? mj(o, l) : new xj(gj(o, c));
                s(_j(f, i, u))
            })
        }
    });
    var qb = E(() => {
        var Aj = se(),
            Pj = Rb();
        Aj({
            target: "Array",
            stat: !0
        }, {
            fromAsync: Pj
        })
    });
    var Lb = E(() => {
        el()
    });
    var kb = E(() => {
        "use strict";
        var Cj = se(),
            wj = Pt().filterReject,
            Mj = we();
        Cj({
            target: "Array",
            proto: !0
        }, {
            filterOut: function(t) {
                return wj(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        Mj("filterOut")
    });
    var Nb = E(() => {
        "use strict";
        var Oj = se(),
            Dj = Pt().filterReject,
            Fj = we();
        Oj({
            target: "Array",
            proto: !0
        }, {
            filterReject: function(t) {
                return Dj(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        Fj("filterReject")
    });
    var su = E((rse, Vb) => {
        var Rj = yt(),
            qj = mr(),
            Lj = Ie(),
            kj = ye(),
            Bb = function(e) {
                var t = e == 1;
                return function(r, n, i) {
                    for (var a = Lj(r), s = qj(a), o = Rj(n, i), l = kj(s), c, u; l-- > 0;)
                        if (c = s[l], u = o(c, l, a), u) switch (e) {
                            case 0:
                                return c;
                            case 1:
                                return l
                        }
                    return t ? -1 : void 0
                }
            };
        Vb.exports = {
            findLast: Bb(0),
            findLastIndex: Bb(1)
        }
    });
    var Gb = E(() => {
        "use strict";
        var Nj = se(),
            Bj = su().findLast,
            Vj = we();
        Nj({
            target: "Array",
            proto: !0
        }, {
            findLast: function(t) {
                return Bj(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        Vj("findLast")
    });
    var zb = E(() => {
        "use strict";
        var Gj = se(),
            zj = su().findLastIndex,
            Hj = we();
        Gj({
            target: "Array",
            proto: !0
        }, {
            findLastIndex: function(t) {
                return zj(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        Hj("findLastIndex")
    });
    var jb = E((ose, Hb) => {
        Hb.exports = function(e, t) {
            for (var r = 0, n = t.length, i = new e(n); n > r;) i[r] = t[r++];
            return i
        }
    });
    var Wb = E((lse, Ub) => {
        var jj = te(),
            Uj = yt(),
            Wj = ge(),
            Xj = mr(),
            $j = Ie(),
            Kj = kn(),
            Yj = ye(),
            Qj = ar(),
            Zj = jb(),
            Jj = jj.Array,
            eU = Wj([].push);
        Ub.exports = function(e, t, r, n) {
            for (var i = $j(e), a = Xj(i), s = Uj(t, r), o = Qj(null), l = Yj(a), c = 0, u, f, g; l > c; c++) g = a[c], f = Kj(s(g, c, i)), f in o ? eU(o[f], g) : o[f] = [g];
            if (n && (u = n(i), u !== Jj))
                for (f in o) o[f] = Zj(u, o[f]);
            return o
        }
    });
    var Xb = E(() => {
        "use strict";
        var tU = se(),
            rU = Wb(),
            nU = tl(),
            iU = we();
        tU({
            target: "Array",
            proto: !0
        }, {
            groupBy: function(t) {
                var r = arguments.length > 1 ? arguments[1] : void 0;
                return rU(this, t, r, nU)
            }
        });
        iU("groupBy")
    });
    var Yb = E(() => {
        var aU = se(),
            sU = ir(),
            $b = Object.isFrozen,
            Kb = function(e, t) {
                if (!$b || !sU(e) || !$b(e)) return !1;
                for (var r = 0, n = e.length, i; r < n;)
                    if (i = e[r++], !(typeof i == "string" || t && typeof i > "u")) return !1;
                return n !== 0
            };
        aU({
            target: "Array",
            stat: !0
        }, {
            isTemplateObject: function(t) {
                if (!Kb(t, !0)) return !1;
                var r = t.raw;
                return !(r.length !== t.length || !Kb(r, !1))
            }
        })
    });
    var Jb = E(() => {
        "use strict";
        var oU = mt(),
            lU = we(),
            Qb = Ie(),
            Zb = ye(),
            uU = nt().f;
        oU && !("lastItem" in []) && (uU(Array.prototype, "lastItem", {
            configurable: !0,
            get: function() {
                var t = Qb(this),
                    r = Zb(t);
                return r == 0 ? void 0 : t[r - 1]
            },
            set: function(t) {
                var r = Qb(this),
                    n = Zb(r);
                return r[n == 0 ? 0 : n - 1] = t
            }
        }), lU("lastItem"))
    });
    var eS = E(() => {
        "use strict";
        var hU = mt(),
            cU = we(),
            fU = Ie(),
            pU = ye(),
            dU = nt().f;
        hU && !("lastIndex" in []) && (dU(Array.prototype, "lastIndex", {
            configurable: !0,
            get: function() {
                var t = fU(this),
                    r = pU(t);
                return r == 0 ? 0 : r - 1
            }
        }), cU("lastIndex"))
    });
    var nS = E((vse, rS) => {
        "use strict";
        var mU = tt(),
            La = ge(),
            gU = vt(),
            vU = ye(),
            yU = Ie(),
            EU = br(),
            tS = mU("Map"),
            ou = tS.prototype,
            bU = La(ou.forEach),
            SU = La(ou.has),
            xU = La(ou.set),
            _U = La([].push);
        rS.exports = function(t) {
            var r = yU(this),
                n = vU(r),
                i = EU(r, 0),
                a = new tS,
                s = t != null ? gU(t) : function(u) {
                    return u
                },
                o, l, c;
            for (o = 0; o < n; o++) l = r[o], c = s(l), SU(a, c) || xU(a, c, l);
            return bU(a, function(u) {
                _U(i, u)
            }), i
        }
    });
    var iS = E(() => {
        "use strict";
        var TU = se(),
            IU = we(),
            AU = nS();
        TU({
            target: "Array",
            proto: !0
        }, {
            uniqueBy: AU
        });
        IU("uniqueBy")
    });
    var sS = E((bse, aS) => {
        var PU = O1();
        aE();
        cb();
        qb();
        Lb();
        kb();
        Nb();
        Gb();
        zb();
        Xb();
        Yb();
        Jb();
        eS();
        iS();
        aS.exports = PU
    });
    var TS = E(za => {
        "use strict";
        Object.defineProperty(za, "__esModule", {
            value: !0
        });
        za.strFromU8 = _S;
        za.unzip = VU;
        var oS = {},
            CU = function(e, t, r, n, i) {
                let a = new Worker(oS[t] || (oS[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
                    type: "text/javascript"
                }))));
                return a.onmessage = function(s) {
                    let o = s.data,
                        l = o.$e$;
                    if (l) {
                        let c = new Error(l[0]);
                        c.code = l[1], c.stack = l[2], i(c, null)
                    } else i(null, o)
                }, a.postMessage(r, n), a
            },
            je = Uint8Array,
            ur = Uint16Array,
            lu = Uint32Array,
            uu = new je([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
            hu = new je([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
            cS = new je([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
            fS = function(e, t) {
                let r = new ur(31);
                for (var n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
                let i = new lu(r[30]);
                for (n = 1; n < 30; ++n)
                    for (let a = r[n]; a < r[n + 1]; ++a) i[a] = a - r[n] << 5 | n;
                return [r, i]
            },
            pS = fS(uu, 2),
            cu = pS[0],
            wU = pS[1];
        cu[28] = 258, wU[258] = 28;
        var MU = fS(hu, 0),
            dS = MU[0],
            Va = new ur(32768);
        for (de = 0; de < 32768; ++de) {
            let e = (43690 & de) >>> 1 | (21845 & de) << 1;
            e = (52428 & e) >>> 2 | (13107 & e) << 2, e = (61680 & e) >>> 4 | (3855 & e) << 4, Va[de] = ((65280 & e) >>> 8 | (255 & e) << 8) >>> 1
        }
        var de, en = function(e, t, r) {
                let n = e.length,
                    i = 0,
                    a = new ur(t);
                for (; i < n; ++i) e[i] && ++a[e[i] - 1];
                let s = new ur(t);
                for (i = 0; i < t; ++i) s[i] = s[i - 1] + a[i - 1] << 1;
                let o;
                if (r) {
                    o = new ur(1 << t);
                    let l = 15 - t;
                    for (i = 0; i < n; ++i)
                        if (e[i]) {
                            let c = i << 4 | e[i],
                                u = t - e[i],
                                f = s[e[i] - 1]++ << u;
                            for (let g = f | (1 << u) - 1; f <= g; ++f) o[Va[f] >>> l] = c
                        }
                } else
                    for (o = new ur(n), i = 0; i < n; ++i) e[i] && (o[i] = Va[s[e[i] - 1]++] >>> 15 - e[i]);
                return o
            },
            ai = new je(288);
        for (de = 0; de < 144; ++de) ai[de] = 8;
        for (de = 144; de < 256; ++de) ai[de] = 9;
        for (de = 256; de < 280; ++de) ai[de] = 7;
        for (de = 280; de < 288; ++de) ai[de] = 8;
        var mS = new je(32);
        for (de = 0; de < 32; ++de) mS[de] = 5;
        var gS = en(ai, 9, 1),
            vS = en(mS, 5, 1),
            Na = function(e) {
                let t = e[0];
                for (let r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
                return t
            },
            at = function(e, t, r) {
                let n = t / 8 | 0;
                return (e[n] | e[n + 1] << 8) >> (7 & t) & r
            },
            Ba = function(e, t) {
                let r = t / 8 | 0;
                return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (7 & t)
            },
            yS = function(e) {
                return (e + 7) / 8 | 0
            },
            Ga = function(e, t, r) {
                (t == null || t < 0) && (t = 0), (r == null || r > e.length) && (r = e.length);
                let n = new(e.BYTES_PER_ELEMENT === 2 ? ur : e.BYTES_PER_ELEMENT === 4 ? lu : je)(r - t);
                return n.set(e.subarray(t, r)), n
            },
            ES = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
            He = function(e, t, r) {
                let n = new Error(t || ES[e]);
                if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, He), !r) throw n;
                return n
            },
            bS = function(e, t, r) {
                let n = e.length;
                if (!n || r && r.f && !r.l) return t || new je(0);
                let i = !t || r,
                    a = !r || r.i;
                r || (r = {}), t || (t = new je(3 * n));
                let s = function(S) {
                        let x = t.length;
                        if (S > x) {
                            let T = new je(Math.max(2 * x, S));
                            T.set(t), t = T
                        }
                    },
                    o = r.f || 0,
                    l = r.p || 0,
                    c = r.b || 0,
                    u = r.l,
                    f = r.d,
                    g = r.m,
                    d = r.n,
                    p = 8 * n;
                do {
                    if (!u) {
                        o = at(e, l, 1);
                        let _ = at(e, l + 1, 3);
                        if (l += 3, !_) {
                            let P = e[(h = yS(l) + 4) - 4] | e[h - 3] << 8,
                                F = h + P;
                            if (F > n) {
                                a && He(0);
                                break
                            }
                            i && s(c + P), t.set(e.subarray(h, F), c), r.b = c += P, r.p = l = 8 * F, r.f = o;
                            continue
                        }
                        if (_ === 1) u = gS, f = vS, g = 9, d = 5;
                        else if (_ === 2) {
                            let P = at(e, l, 31) + 257,
                                F = at(e, l + 10, 15) + 4,
                                w = P + at(e, l + 5, 31) + 1;
                            l += 14;
                            let C = new je(w),
                                R = new je(19);
                            for (var m = 0; m < F; ++m) R[cS[m]] = at(e, l + 3 * m, 7);
                            l += 3 * F;
                            let O = Na(R),
                                M = (1 << O) - 1,
                                N = en(R, O, 1);
                            for (m = 0; m < w;) {
                                let $ = N[at(e, l, M)];
                                var h;
                                if (l += 15 & $, (h = $ >>> 4) < 16) C[m++] = h;
                                else {
                                    var v = 0;
                                    let A = 0;
                                    for (h === 16 ? (A = 3 + at(e, l, 3), l += 2, v = C[m - 1]) : h === 17 ? (A = 3 + at(e, l, 7), l += 3) : h === 18 && (A = 11 + at(e, l, 127), l += 7); A--;) C[m++] = v
                                }
                            }
                            let z = C.subarray(0, P);
                            var y = C.subarray(P);
                            g = Na(z), d = Na(y), u = en(z, g, 1), f = en(y, d, 1)
                        } else He(1);
                        if (l > p) {
                            a && He(0);
                            break
                        }
                    }
                    i && s(c + 131072);
                    let S = (1 << g) - 1,
                        x = (1 << d) - 1,
                        T = l;
                    for (;; T = l) {
                        let _ = (v = u[Ba(e, l) & S]) >>> 4;
                        if (l += 15 & v, l > p) {
                            a && He(0);
                            break
                        }
                        if (v || He(2), _ < 256) t[c++] = _;
                        else {
                            if (_ === 256) {
                                T = l, u = null;
                                break
                            } {
                                let P = _ - 254;
                                if (_ > 264) {
                                    var b = uu[m = _ - 257];
                                    P = at(e, l, (1 << b) - 1) + cu[m], l += b
                                }
                                let F = f[Ba(e, l) & x],
                                    w = F >>> 4;
                                if (F || He(3), l += 15 & F, y = dS[w], w > 3 && (b = hu[w], y += Ba(e, l) & (1 << b) - 1, l += b), l > p) {
                                    a && He(0);
                                    break
                                }
                                i && s(c + 131072);
                                let C = c + P;
                                for (; c < C; c += 4) t[c] = t[c - y], t[c + 1] = t[c + 1 - y], t[c + 2] = t[c + 2 - y], t[c + 3] = t[c + 3 - y];
                                c = C
                            }
                        }
                    }
                    r.l = u, r.p = T, r.b = c, r.f = o, u && (o = 1, r.m = g, r.d = f, r.n = d)
                } while (!o);
                return c === t.length ? t : Ga(t, 0, c)
            },
            OU = function(e, t) {
                let r = {};
                for (var n in e) r[n] = e[n];
                for (var n in t) r[n] = t[n];
                return r
            },
            lS = function(e, t, r) {
                let n = e(),
                    i = e.toString(),
                    a = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/\s+/g, "").split(",");
                for (let s = 0; s < n.length; ++s) {
                    let o = n[s],
                        l = a[s];
                    if (typeof o == "function") {
                        t += ";" + l + "=";
                        let c = o.toString();
                        if (o.prototype)
                            if (c.indexOf("[native code]") !== -1) {
                                let u = c.indexOf(" ", 8) + 1;
                                t += c.slice(u, c.indexOf("(", u))
                            } else {
                                t += c;
                                for (let u in o.prototype) t += ";" + l + ".prototype." + u + "=" + o.prototype[u].toString()
                            }
                        else t += c
                    } else r[l] = o
                }
                return [t, r]
            },
            ka = [],
            DU = function(e) {
                let t = [];
                for (let r in e) e[r].buffer && t.push((e[r] = new e[r].constructor(e[r])).buffer);
                return t
            },
            FU = function(e, t, r, n) {
                let i;
                if (!ka[r]) {
                    let s = "",
                        o = {},
                        l = e.length - 1;
                    for (let c = 0; c < l; ++c) i = lS(e[c], s, o), s = i[0], o = i[1];
                    ka[r] = lS(e[l], s, o)
                }
                let a = OU({}, ka[r][1]);
                return CU(ka[r][0] + ";onmessage=function(e){for(var kz in e.data)self[kz]=e.data[kz];onmessage=" + t.toString() + "}", r, a, DU(a), n)
            },
            RU = function() {
                return [je, ur, lu, uu, hu, cS, cu, dS, gS, vS, Va, ES, en, Na, at, Ba, yS, Ga, He, bS, fu, SS, xS]
            },
            SS = function(e) {
                return postMessage(e, [e.buffer])
            },
            xS = function(e) {
                return e && e.size && new je(e.size)
            },
            qU = function(e, t, r, n, i, a) {
                var s = FU(r, n, i, function(o, l) {
                    s.terminate(), a(o, l)
                });
                return s.postMessage([e, t], t.consume ? [e.buffer] : []),
                    function() {
                        s.terminate()
                    }
            },
            lr = function(e, t) {
                return e[t] | e[t + 1] << 8
            },
            zt = function(e, t) {
                return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
            };

        function LU(e, t, r) {
            return r || (r = t, t = {}), typeof r != "function" && He(7), qU(e, t, [RU], function(n) {
                return SS(fu(n.data[0], xS(n.data[1])))
            }, 1, r)
        }

        function fu(e, t) {
            return bS(e, t)
        }
        var uS = typeof TextDecoder < "u" && new TextDecoder,
            kU = function(e) {
                for (let t = "", r = 0;;) {
                    let n = e[r++],
                        i = (n > 127) + (n > 223) + (n > 239);
                    if (r + i > e.length) return [t, Ga(e, r - 1)];
                    i ? i === 3 ? (n = ((15 & n) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536, t += String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)) : t += 1 & i ? String.fromCharCode((31 & n) << 6 | 63 & e[r++]) : String.fromCharCode((15 & n) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : t += String.fromCharCode(n)
                }
            };

        function _S(e, t) {
            if (t) {
                let r = "";
                for (let n = 0; n < e.length; n += 16384) r += String.fromCharCode.apply(null, e.subarray(n, n + 16384));
                return r
            }
            if (uS) return uS.decode(e); {
                let r = kU(e),
                    n = r[0];
                return r[1].length && He(8), n
            }
        }
        var NU = function(e, t) {
                return t + 30 + lr(e, t + 26) + lr(e, t + 28)
            },
            BU = function(e, t, r) {
                let n = lr(e, t + 28),
                    i = _S(e.subarray(t + 46, t + 46 + n), !(2048 & lr(e, t + 8))),
                    a = t + 46 + n,
                    s = zt(e, t + 20),
                    o = r && s === 4294967295 ? z64e(e, a) : [s, zt(e, t + 24), zt(e, t + 42)],
                    l = o[0],
                    c = o[1],
                    u = o[2];
                return [lr(e, t + 10), l, c, i, a + lr(e, t + 30) + lr(e, t + 32), u]
            },
            hS = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(e) {
                e()
            };

        function VU(e, t, r) {
            r || (r = t, t = {}), typeof r != "function" && He(7);
            let n = [],
                i = function() {
                    for (let c = 0; c < n.length; ++c) n[c]()
                },
                a = {},
                s = function(c, u) {
                    hS(function() {
                        r(c, u)
                    })
                };
            hS(function() {
                s = r
            });
            let o = e.length - 22;
            for (; zt(e, o) !== 101010256; --o)
                if (!o || e.length - o > 65558) return s(He(13, 0, 1), null), i;
            let l = lr(e, o + 8);
            if (l) {
                let c = l,
                    u = zt(e, o + 16),
                    f = u === 4294967295 || c === 65535;
                if (f) {
                    let p = zt(e, o - 12);
                    f = zt(e, p) === 101075792, f && (c = l = zt(e, p + 32), u = zt(e, p + 48))
                }
                let g = t && t.filter,
                    d = function() {
                        let p = BU(e, u, f),
                            m = p[0],
                            h = p[1],
                            v = p[2],
                            y = p[3],
                            b = p[4],
                            S = p[5],
                            x = NU(e, S);
                        u = b;
                        let T = function(_, P) {
                            _ ? (i(), s(_, null)) : (P && (a[y] = P), --l || s(null, a))
                        };
                        if (!g || g({
                                name: y,
                                size: h,
                                originalSize: v,
                                compression: m
                            }))
                            if (m)
                                if (m === 8) {
                                    let _ = e.subarray(x, x + h);
                                    if (h < 32e4) try {
                                        T(null, fu(_, new je(v)))
                                    } catch (P) {
                                        T(P, null)
                                    } else n.push(LU(_, {
                                        size: v
                                    }, T))
                                } else T(He(14, "unknown compression type " + m, 1), null);
                        else T(null, Ga(e, x, x + h));
                        else T(null, null)
                    };
                for (let p = 0; p < c; ++p) d(p)
            } else s(null, {});
            return i
        }
    });

    function GU(e) {
        let t = JSON.parse(e);
        if (!("animations" in t)) throw new Error("Manifest not found");
        if (t.animations.length === 0) throw new Error("No animations listed in the manifest");
        return t
    }

    function zU(e) {
        let t = new Uint8Array(e, 0, 32);
        return t[0] === 80 && t[1] === 75 && t[2] === 3 && t[3] === 4
    }
    async function HU(e) {
        return await fetch(new URL(e).href).then(t => t.arrayBuffer())
    }
    async function jU(e) {
        return (await new Promise(r => {
            let n = new FileReader;
            n.readAsDataURL(new Blob([e])), n.onload = () => r(n.result)
        })).split(",", 2)[1]
    }
    async function UU(e) {
        let t = new Uint8Array(e),
            r = await new Promise((n, i) => {
                (0, Ha.unzip)(t, (a, s) => a ? i(a) : n(s))
            });
        return {
            read: n => (0, Ha.strFromU8)(r[n]),
            readB64: async n => await jU(r[n])
        }
    }
    async function WU(e, t) {
        if (!("assets" in e)) return e;
        async function r(i) {
            let {
                p: a
            } = i;
            if (a == null || t.read(`images/${a}`) == null) return i;
            let s = a.split(".").pop(),
                o = await t.readB64(`images/${a}`);
            if (s ? .startsWith("data:")) return i.p = s, i.e = 1, i;
            switch (s) {
                case "svg":
                case "svg+xml":
                    i.p = `data:image/svg+xml;base64,${o}`;
                    break;
                case "png":
                case "jpg":
                case "jpeg":
                case "gif":
                case "webp":
                    i.p = `data:image/${s};base64,${o}`;
                    break;
                default:
                    i.p = `data:;base64,${o}`
            }
            return i.e = 1, i
        }
        return (await Promise.all(e.assets.map(r))).map((i, a) => {
            e.assets[a] = i
        }), e
    }
    async function XU(e) {
        let t = await UU(e),
            r = GU(t.read("manifest.json"));
        return (await Promise.all(r.animations.map(i => {
            let a = JSON.parse(t.read(`animations/${i.id}.json`));
            return WU(a, t)
        })))[0]
    }
    async function IS(e) {
        let t = await HU(e);
        return zU(t) ? await XU(t) : JSON.parse(new TextDecoder().decode(t))
    }
    var Ha, AS = pe(() => {
        "use strict";
        Ha = le(TS())
    });
    var OS = {};
    Ge(OS, {
        cleanupElement: () => mu,
        createInstance: () => wS,
        destroy: () => YU,
        init: () => MS,
        ready: () => QU
    });
    var ja, _se, $U, KU, si, pu, Ua, PS, du, CS, wS, mu, MS, YU, QU, DS = pe(() => {
        "use strict";
        ja = le(vo()), _se = le(sS());
        AS();
        $U = () => window.Webflow.require("lottie").lottie, KU = () => !!(window.Webflow.env("design") || window.Webflow.env("preview")), si = {
            Playing: "playing",
            Stopped: "stopped"
        }, pu = class {
            _cache = [];
            set(t, r) {
                let n = (0, ja.default)(this._cache, ({
                    wrapper: i
                }) => i === t);
                n !== -1 && this._cache.splice(n, 1), this._cache.push({
                    wrapper: t,
                    instance: r
                })
            }
            delete(t) {
                let r = (0, ja.default)(this._cache, ({
                    wrapper: n
                }) => n === t);
                r !== -1 && this._cache.splice(r, 1)
            }
            get(t) {
                let r = (0, ja.default)(this._cache, ({
                    wrapper: n
                }) => n === t);
                return r !== -1 ? this._cache[r].instance : null
            }
        }, Ua = new pu, PS = {}, du = class {
            config = null;
            currentState = si.Stopped;
            animationItem;
            handlers = {
                enterFrame: [],
                complete: [],
                loop: [],
                dataReady: [],
                destroy: [],
                error: []
            };
            load(t) {
                let n = (t.dataset || PS).src || "";
                n.endsWith(".lottie") ? IS(n).then(i => {
                    this._loadAnimation(t, i)
                }) : this._loadAnimation(t, void 0), Ua.set(t, this), this.container = t
            }
            _loadAnimation(t, r) {
                let n = t.dataset || PS,
                    i = n.src || "",
                    a = n.preserveAspectRatio || "xMidYMid meet",
                    s = n.renderer || "svg",
                    o = parseFloat(n.loop) === 1,
                    l = parseFloat(n.direction) || 1,
                    c = parseFloat(n.autoplay) === 1,
                    u = parseFloat(n.duration) || 0,
                    f = parseFloat(n.isIx2Target) === 1,
                    g = parseFloat(n.ix2InitialState);
                isNaN(g) && (g = null);
                let d = {
                    src: i,
                    loop: o,
                    autoplay: c,
                    renderer: s,
                    direction: l,
                    duration: u,
                    hasIx2: f,
                    ix2InitialValue: g,
                    preserveAspectRatio: a
                };
                if (this.animationItem && this.config && this.config.src === i && s === this.config.renderer && a === this.config.preserveAspectRatio) {
                    if (o !== this.config.loop && this.setLooping(o), f || (l !== this.config.direction && this.setDirection(l), u !== this.config.duration && (u > 0 && u !== this.duration ? this.setSpeed(this.duration / u) : this.setSpeed(1))), c && this.play(), g && g !== this.config.ix2InitialValue) {
                        let m = g / 100;
                        this.goToFrame(this.frames * m)
                    }
                    this.config = d;
                    return
                }
                let p = {
                    container: t,
                    loop: o,
                    autoplay: c,
                    renderer: s,
                    rendererSettings: {
                        preserveAspectRatio: a,
                        progressiveLoad: !0,
                        hideOnTransparent: !0
                    }
                };
                try {
                    this.animationItem && this.destroy(), this.animationItem = $U().loadAnimation({ ...p,
                        ...r ? {
                            animationData: r
                        } : {
                            path: i
                        }
                    })
                } catch (m) {
                    this.handlers.error.forEach(h => h(m));
                    return
                }
                this.animationItem && (KU() && (this.animationItem.addEventListener("enterFrame", () => {
                    if (!this.isPlaying) return;
                    let {
                        currentFrame: m,
                        totalFrames: h,
                        playDirection: v
                    } = this.animationItem, y = m / h * 100, b = Math.round(v === 1 ? y : 100 - y);
                    this.handlers.enterFrame.forEach(S => S(b, m))
                }), this.animationItem.addEventListener("complete", () => {
                    if (this.currentState !== si.Playing) {
                        this.handlers.complete.forEach(m => m());
                        return
                    }
                    if (!this.animationItem.loop) {
                        this.handlers.complete.forEach(m => m());
                        return
                    }
                    this.currentState = si.Stopped
                }), this.animationItem.addEventListener("loopComplete", m => {
                    this.handlers.loop.forEach(h => h(m))
                }), this.animationItem.addEventListener("data_failed", m => {
                    this.handlers.error.forEach(h => h(m))
                }), this.animationItem.addEventListener("error", m => {
                    this.handlers.error.forEach(h => h(m))
                })), this.isLoaded ? (this.handlers.dataReady.forEach(m => m()), c && this.play()) : this.animationItem.addEventListener("data_ready", () => {
                    if (this.handlers.dataReady.forEach(m => m()), f || (this.setDirection(l), u > 0 && u !== this.duration && this.setSpeed(this.duration / u), c && this.play()), g) {
                        let m = g / 100;
                        this.goToFrame(this.frames * m)
                    }
                }), this.config = d)
            }
            onFrameChange(t) {
                this.handlers.enterFrame.indexOf(t) === -1 && this.handlers.enterFrame.push(t)
            }
            onPlaybackComplete(t) {
                this.handlers.complete.indexOf(t) === -1 && this.handlers.complete.push(t)
            }
            onLoopComplete(t) {
                this.handlers.loop.indexOf(t) === -1 && this.handlers.loop.push(t)
            }
            onDestroy(t) {
                this.handlers.destroy.indexOf(t) === -1 && this.handlers.destroy.push(t)
            }
            onDataReady(t) {
                this.handlers.dataReady.indexOf(t) === -1 && this.handlers.dataReady.push(t)
            }
            onError(t) {
                this.handlers.error.indexOf(t) === -1 && this.handlers.error.push(t)
            }
            play() {
                if (!this.animationItem) return;
                let t = this.animationItem.playDirection === 1 ? 0 : this.frames;
                this.animationItem.goToAndPlay(t, !0), this.currentState = si.Playing
            }
            stop() {
                if (this.animationItem) {
                    if (this.isPlaying) {
                        let {
                            playDirection: t
                        } = this.animationItem, r = t === 1 ? 0 : this.frames;
                        this.animationItem.goToAndStop(r, !0)
                    }
                    this.currentState = si.Stopped
                }
            }
            destroy() {
                this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(t => t()), this.container && Ua.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(t => this.handlers[t].length = 0), this.animationItem = null, this.container = null, this.config = null)
            }
            get isPlaying() {
                return this.animationItem ? !this.animationItem.isPaused : !1
            }
            get isPaused() {
                return this.animationItem ? this.animationItem.isPaused : !1
            }
            get duration() {
                return this.animationItem ? this.animationItem.getDuration() : 0
            }
            get frames() {
                return this.animationItem ? this.animationItem.totalFrames : 0
            }
            get direction() {
                return this.animationItem ? this.animationItem.playDirection : 1
            }
            get isLoaded() {
                return this.animationItem, this.animationItem.isLoaded
            }
            get ix2InitialValue() {
                return this.config ? this.config.ix2InitialValue : null
            }
            goToFrame(t) {
                this.animationItem && this.animationItem.setCurrentRawFrameValue(t)
            }
            setSubframe(t) {
                this.animationItem && this.animationItem.setSubframe(t)
            }
            setSpeed(t = 1) {
                this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t))
            }
            setLooping(t) {
                this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = t)
            }
            setDirection(t) {
                this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(t), this.goToFrame(t === 1 ? 0 : this.frames))
            }
        }, CS = () => Array.from(document.querySelectorAll('[data-animation-type="lottie"]')), wS = e => {
            let t = Ua.get(e);
            return t == null && (t = new du), t.load(e), t
        }, mu = e => {
            let t = Ua.get(e);
            t && t.destroy()
        }, MS = () => {
            CS().forEach(e => {
                parseFloat(e.getAttribute("data-is-ix2-target")) === 1 || mu(e), wS(e)
            })
        }, YU = () => {
            CS().forEach(mu)
        }, QU = MS
    });
    var FS = E((exports, module) => {
        typeof navigator < "u" && function(e, t) {
            typeof exports == "object" && typeof module < "u" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis < "u" ? globalThis : e || self).lottie = t()
        }(exports, function() {
            "use strict";
            var svgNS = "http://www.w3.org/2000/svg",
                locationHref = "",
                _useWebWorker = !1,
                initialDefaultFrame = -999999,
                setWebWorker = function(e) {
                    _useWebWorker = !!e
                },
                getWebWorker = function() {
                    return _useWebWorker
                },
                setLocationHref = function(e) {
                    locationHref = e
                },
                getLocationHref = function() {
                    return locationHref
                };

            function createTag(e) {
                return document.createElement(e)
            }

            function extendPrototype(e, t) {
                var r, n, i = e.length;
                for (r = 0; r < i; r += 1)
                    for (var a in n = e[r].prototype) Object.prototype.hasOwnProperty.call(n, a) && (t.prototype[a] = n[a])
            }

            function getDescriptor(e, t) {
                return Object.getOwnPropertyDescriptor(e, t)
            }

            function createProxyFunction(e) {
                function t() {}
                return t.prototype = e, t
            }
            var audioControllerFactory = function() {
                    function e(t) {
                        this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                    }
                    return e.prototype = {
                            addAudio: function(t) {
                                this.audios.push(t)
                            },
                            pause: function() {
                                var t, r = this.audios.length;
                                for (t = 0; t < r; t += 1) this.audios[t].pause()
                            },
                            resume: function() {
                                var t, r = this.audios.length;
                                for (t = 0; t < r; t += 1) this.audios[t].resume()
                            },
                            setRate: function(t) {
                                var r, n = this.audios.length;
                                for (r = 0; r < n; r += 1) this.audios[r].setRate(t)
                            },
                            createAudio: function(t) {
                                return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                                    src: [t]
                                }) : {
                                    isPlaying: !1,
                                    play: function() {
                                        this.isPlaying = !0
                                    },
                                    seek: function() {
                                        this.isPlaying = !1
                                    },
                                    playing: function() {},
                                    rate: function() {},
                                    setVolume: function() {}
                                }
                            },
                            setAudioFactory: function(t) {
                                this.audioFactory = t
                            },
                            setVolume: function(t) {
                                this._volume = t, this._updateVolume()
                            },
                            mute: function() {
                                this._isMuted = !0, this._updateVolume()
                            },
                            unmute: function() {
                                this._isMuted = !1, this._updateVolume()
                            },
                            getVolume: function() {
                                return this._volume
                            },
                            _updateVolume: function() {
                                var t, r = this.audios.length;
                                for (t = 0; t < r; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                            }
                        },
                        function() {
                            return new e
                        }
                }(),
                createTypedArray = function() {
                    function e(t, r) {
                        var n, i = 0,
                            a = [];
                        switch (t) {
                            case "int16":
                            case "uint8c":
                                n = 1;
                                break;
                            default:
                                n = 1.1
                        }
                        for (i = 0; i < r; i += 1) a.push(n);
                        return a
                    }
                    return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? function(t, r) {
                        return t === "float32" ? new Float32Array(r) : t === "int16" ? new Int16Array(r) : t === "uint8c" ? new Uint8ClampedArray(r) : e(t, r)
                    } : e
                }();

            function createSizedArray(e) {
                return Array.apply(null, {
                    length: e
                })
            }

            function _typeof$6(e) {
                return _typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$6(e)
            }
            var subframeEnabled = !0,
                expressionsPlugin = null,
                expressionsInterfaces = null,
                idPrefix$1 = "",
                isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                _shouldRoundValues = !1,
                bmPow = Math.pow,
                bmSqrt = Math.sqrt,
                bmFloor = Math.floor,
                bmMax = Math.max,
                bmMin = Math.min,
                BMMath = {};

            function ProjectInterface$1() {
                return {}
            }(function() {
                var e, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                    r = t.length;
                for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
            })(), BMMath.random = Math.random, BMMath.abs = function(e) {
                if (_typeof$6(e) === "object" && e.length) {
                    var t, r = createSizedArray(e.length),
                        n = e.length;
                    for (t = 0; t < n; t += 1) r[t] = Math.abs(e[t]);
                    return r
                }
                return Math.abs(e)
            };
            var defaultCurveSegments = 150,
                degToRads = Math.PI / 180,
                roundCorner = .5519;

            function roundValues(e) {
                _shouldRoundValues = !!e
            }

            function bmRnd(e) {
                return _shouldRoundValues ? Math.round(e) : e
            }

            function styleDiv(e) {
                e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d"
            }

            function BMEnterFrameEvent(e, t, r, n) {
                this.type = e, this.currentTime = t, this.totalTime = r, this.direction = n < 0 ? -1 : 1
            }

            function BMCompleteEvent(e, t) {
                this.type = e, this.direction = t < 0 ? -1 : 1
            }

            function BMCompleteLoopEvent(e, t, r, n) {
                this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = n < 0 ? -1 : 1
            }

            function BMSegmentStartEvent(e, t, r) {
                this.type = e, this.firstFrame = t, this.totalFrames = r
            }

            function BMDestroyEvent(e, t) {
                this.type = e, this.target = t
            }

            function BMRenderFrameErrorEvent(e, t) {
                this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
            }

            function BMConfigErrorEvent(e) {
                this.type = "configError", this.nativeError = e
            }

            function BMAnimationConfigErrorEvent(e, t) {
                this.type = e, this.nativeError = t
            }
            var createElementID = (_count = 0, function() {
                    return idPrefix$1 + "__lottie_element_" + (_count += 1)
                }),
                _count;

            function HSVtoRGB(e, t, r) {
                var n, i, a, s, o, l, c, u;
                switch (l = r * (1 - t), c = r * (1 - (o = 6 * e - (s = Math.floor(6 * e))) * t), u = r * (1 - (1 - o) * t), s % 6) {
                    case 0:
                        n = r, i = u, a = l;
                        break;
                    case 1:
                        n = c, i = r, a = l;
                        break;
                    case 2:
                        n = l, i = r, a = u;
                        break;
                    case 3:
                        n = l, i = c, a = r;
                        break;
                    case 4:
                        n = u, i = l, a = r;
                        break;
                    case 5:
                        n = r, i = l, a = c
                }
                return [n, i, a]
            }

            function RGBtoHSV(e, t, r) {
                var n, i = Math.max(e, t, r),
                    a = Math.min(e, t, r),
                    s = i - a,
                    o = i === 0 ? 0 : s / i,
                    l = i / 255;
                switch (i) {
                    case a:
                        n = 0;
                        break;
                    case e:
                        n = t - r + s * (t < r ? 6 : 0), n /= 6 * s;
                        break;
                    case t:
                        n = r - e + 2 * s, n /= 6 * s;
                        break;
                    case r:
                        n = e - t + 4 * s, n /= 6 * s
                }
                return [n, o, l]
            }

            function addSaturationToRGB(e, t) {
                var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
                return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
            }

            function addBrightnessToRGB(e, t) {
                var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
                return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
            }

            function addHueToRGB(e, t) {
                var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
                return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
            }
            var rgbToHex = function() {
                    var e, t, r = [];
                    for (e = 0; e < 256; e += 1) t = e.toString(16), r[e] = t.length === 1 ? "0" + t : t;
                    return function(n, i, a) {
                        return n < 0 && (n = 0), i < 0 && (i = 0), a < 0 && (a = 0), "#" + r[n] + r[i] + r[a]
                    }
                }(),
                setSubframeEnabled = function(e) {
                    subframeEnabled = !!e
                },
                getSubframeEnabled = function() {
                    return subframeEnabled
                },
                setExpressionsPlugin = function(e) {
                    expressionsPlugin = e
                },
                getExpressionsPlugin = function() {
                    return expressionsPlugin
                },
                setExpressionInterfaces = function(e) {
                    expressionsInterfaces = e
                },
                getExpressionInterfaces = function() {
                    return expressionsInterfaces
                },
                setDefaultCurveSegments = function(e) {
                    defaultCurveSegments = e
                },
                getDefaultCurveSegments = function() {
                    return defaultCurveSegments
                },
                setIdPrefix = function(e) {
                    idPrefix$1 = e
                },
                getIdPrefix = function() {
                    return idPrefix$1
                };

            function createNS(e) {
                return document.createElementNS(svgNS, e)
            }

            function _typeof$5(e) {
                return _typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$5(e)
            }
            var dataManager = function() {
                    var e, t, r = 1,
                        n = [],
                        i = {
                            onmessage: function() {},
                            postMessage: function(l) {
                                e({
                                    data: l
                                })
                            }
                        },
                        a = {
                            postMessage: function(l) {
                                i.onmessage({
                                    data: l
                                })
                            }
                        };

                    function s() {
                        t || (t = function(l) {
                            if (window.Worker && window.Blob && getWebWorker()) {
                                var c = new Blob(["var _workerSelf = self; self.onmessage = ", l.toString()], {
                                        type: "text/javascript"
                                    }),
                                    u = URL.createObjectURL(c);
                                return new Worker(u)
                            }
                            return e = l, i
                        }(function(l) {
                            if (a.dataManager || (a.dataManager = function() {
                                    function u(_, P) {
                                        var F, w, C, R, O, M, N = _.length;
                                        for (w = 0; w < N; w += 1)
                                            if ("ks" in (F = _[w]) && !F.completed) {
                                                if (F.completed = !0, F.hasMask) {
                                                    var z = F.masksProperties;
                                                    for (R = z.length, C = 0; C < R; C += 1)
                                                        if (z[C].pt.k.i) d(z[C].pt.k);
                                                        else
                                                            for (M = z[C].pt.k.length, O = 0; O < M; O += 1) z[C].pt.k[O].s && d(z[C].pt.k[O].s[0]), z[C].pt.k[O].e && d(z[C].pt.k[O].e[0])
                                                }
                                                F.ty === 0 ? (F.layers = f(F.refId, P), u(F.layers, P)) : F.ty === 4 ? g(F.shapes) : F.ty === 5 && x(F)
                                            }
                                    }

                                    function f(_, P) {
                                        var F = function(w, C) {
                                            for (var R = 0, O = C.length; R < O;) {
                                                if (C[R].id === w) return C[R];
                                                R += 1
                                            }
                                            return null
                                        }(_, P);
                                        return F ? F.layers.__used ? JSON.parse(JSON.stringify(F.layers)) : (F.layers.__used = !0, F.layers) : null
                                    }

                                    function g(_) {
                                        var P, F, w;
                                        for (P = _.length - 1; P >= 0; P -= 1)
                                            if (_[P].ty === "sh")
                                                if (_[P].ks.k.i) d(_[P].ks.k);
                                                else
                                                    for (w = _[P].ks.k.length, F = 0; F < w; F += 1) _[P].ks.k[F].s && d(_[P].ks.k[F].s[0]), _[P].ks.k[F].e && d(_[P].ks.k[F].e[0]);
                                        else _[P].ty === "gr" && g(_[P].it)
                                    }

                                    function d(_) {
                                        var P, F = _.i.length;
                                        for (P = 0; P < F; P += 1) _.i[P][0] += _.v[P][0], _.i[P][1] += _.v[P][1], _.o[P][0] += _.v[P][0], _.o[P][1] += _.v[P][1]
                                    }

                                    function p(_, P) {
                                        var F = P ? P.split(".") : [100, 100, 100];
                                        return _[0] > F[0] || !(F[0] > _[0]) && (_[1] > F[1] || !(F[1] > _[1]) && (_[2] > F[2] || !(F[2] > _[2]) && null))
                                    }
                                    var m, h = function() {
                                            var _ = [4, 4, 14];

                                            function P(F) {
                                                var w, C, R, O = F.length;
                                                for (w = 0; w < O; w += 1) F[w].ty === 5 && (R = void 0, R = (C = F[w]).t.d, C.t.d = {
                                                    k: [{
                                                        s: R,
                                                        t: 0
                                                    }]
                                                })
                                            }
                                            return function(F) {
                                                if (p(_, F.v) && (P(F.layers), F.assets)) {
                                                    var w, C = F.assets.length;
                                                    for (w = 0; w < C; w += 1) F.assets[w].layers && P(F.assets[w].layers)
                                                }
                                            }
                                        }(),
                                        v = (m = [4, 7, 99], function(_) {
                                            if (_.chars && !p(m, _.v)) {
                                                var P, F = _.chars.length;
                                                for (P = 0; P < F; P += 1) {
                                                    var w = _.chars[P];
                                                    w.data && w.data.shapes && (g(w.data.shapes), w.data.ip = 0, w.data.op = 99999, w.data.st = 0, w.data.sr = 1, w.data.ks = {
                                                        p: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        s: {
                                                            k: [100, 100],
                                                            a: 0
                                                        },
                                                        a: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        r: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        o: {
                                                            k: 100,
                                                            a: 0
                                                        }
                                                    }, _.chars[P].t || (w.data.shapes.push({
                                                        ty: "no"
                                                    }), w.data.shapes[0].it.push({
                                                        p: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        s: {
                                                            k: [100, 100],
                                                            a: 0
                                                        },
                                                        a: {
                                                            k: [0, 0],
                                                            a: 0
                                                        },
                                                        r: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        o: {
                                                            k: 100,
                                                            a: 0
                                                        },
                                                        sk: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        sa: {
                                                            k: 0,
                                                            a: 0
                                                        },
                                                        ty: "tr"
                                                    })))
                                                }
                                            }
                                        }),
                                        y = function() {
                                            var _ = [5, 7, 15];

                                            function P(F) {
                                                var w, C, R = F.length;
                                                for (w = 0; w < R; w += 1) F[w].ty === 5 && (C = void 0, typeof(C = F[w].t.p).a == "number" && (C.a = {
                                                    a: 0,
                                                    k: C.a
                                                }), typeof C.p == "number" && (C.p = {
                                                    a: 0,
                                                    k: C.p
                                                }), typeof C.r == "number" && (C.r = {
                                                    a: 0,
                                                    k: C.r
                                                }))
                                            }
                                            return function(F) {
                                                if (p(_, F.v) && (P(F.layers), F.assets)) {
                                                    var w, C = F.assets.length;
                                                    for (w = 0; w < C; w += 1) F.assets[w].layers && P(F.assets[w].layers)
                                                }
                                            }
                                        }(),
                                        b = function() {
                                            var _ = [4, 1, 9];

                                            function P(w) {
                                                var C, R, O, M = w.length;
                                                for (C = 0; C < M; C += 1)
                                                    if (w[C].ty === "gr") P(w[C].it);
                                                    else if (w[C].ty === "fl" || w[C].ty === "st")
                                                    if (w[C].c.k && w[C].c.k[0].i)
                                                        for (O = w[C].c.k.length, R = 0; R < O; R += 1) w[C].c.k[R].s && (w[C].c.k[R].s[0] /= 255, w[C].c.k[R].s[1] /= 255, w[C].c.k[R].s[2] /= 255, w[C].c.k[R].s[3] /= 255), w[C].c.k[R].e && (w[C].c.k[R].e[0] /= 255, w[C].c.k[R].e[1] /= 255, w[C].c.k[R].e[2] /= 255, w[C].c.k[R].e[3] /= 255);
                                                    else w[C].c.k[0] /= 255, w[C].c.k[1] /= 255, w[C].c.k[2] /= 255, w[C].c.k[3] /= 255
                                            }

                                            function F(w) {
                                                var C, R = w.length;
                                                for (C = 0; C < R; C += 1) w[C].ty === 4 && P(w[C].shapes)
                                            }
                                            return function(w) {
                                                if (p(_, w.v) && (F(w.layers), w.assets)) {
                                                    var C, R = w.assets.length;
                                                    for (C = 0; C < R; C += 1) w.assets[C].layers && F(w.assets[C].layers)
                                                }
                                            }
                                        }(),
                                        S = function() {
                                            var _ = [4, 4, 18];

                                            function P(w) {
                                                var C, R, O;
                                                for (C = w.length - 1; C >= 0; C -= 1)
                                                    if (w[C].ty === "sh")
                                                        if (w[C].ks.k.i) w[C].ks.k.c = w[C].closed;
                                                        else
                                                            for (O = w[C].ks.k.length, R = 0; R < O; R += 1) w[C].ks.k[R].s && (w[C].ks.k[R].s[0].c = w[C].closed), w[C].ks.k[R].e && (w[C].ks.k[R].e[0].c = w[C].closed);
                                                else w[C].ty === "gr" && P(w[C].it)
                                            }

                                            function F(w) {
                                                var C, R, O, M, N, z, $ = w.length;
                                                for (R = 0; R < $; R += 1) {
                                                    if ((C = w[R]).hasMask) {
                                                        var A = C.masksProperties;
                                                        for (M = A.length, O = 0; O < M; O += 1)
                                                            if (A[O].pt.k.i) A[O].pt.k.c = A[O].cl;
                                                            else
                                                                for (z = A[O].pt.k.length, N = 0; N < z; N += 1) A[O].pt.k[N].s && (A[O].pt.k[N].s[0].c = A[O].cl), A[O].pt.k[N].e && (A[O].pt.k[N].e[0].c = A[O].cl)
                                                    }
                                                    C.ty === 4 && P(C.shapes)
                                                }
                                            }
                                            return function(w) {
                                                if (p(_, w.v) && (F(w.layers), w.assets)) {
                                                    var C, R = w.assets.length;
                                                    for (C = 0; C < R; C += 1) w.assets[C].layers && F(w.assets[C].layers)
                                                }
                                            }
                                        }();

                                    function x(_) {
                                        _.t.a.length === 0 && _.t.p
                                    }
                                    var T = {
                                        completeData: function(_) {
                                            _.__complete || (b(_), h(_), v(_), y(_), S(_), u(_.layers, _.assets), function(P, F) {
                                                if (P) {
                                                    var w = 0,
                                                        C = P.length;
                                                    for (w = 0; w < C; w += 1) P[w].t === 1 && (P[w].data.layers = f(P[w].data.refId, F), u(P[w].data.layers, F))
                                                }
                                            }(_.chars, _.assets), _.__complete = !0)
                                        }
                                    };
                                    return T.checkColors = b, T.checkChars = v, T.checkPathProperties = y, T.checkShapes = S, T.completeLayers = u, T
                                }()), a.assetLoader || (a.assetLoader = function() {
                                    function u(f) {
                                        var g = f.getResponseHeader("content-type");
                                        return g && f.responseType === "json" && g.indexOf("json") !== -1 || f.response && _typeof$5(f.response) === "object" ? f.response : f.response && typeof f.response == "string" ? JSON.parse(f.response) : f.responseText ? JSON.parse(f.responseText) : null
                                    }
                                    return {
                                        load: function(f, g, d, p) {
                                            var m, h = new XMLHttpRequest;
                                            try {
                                                h.responseType = "json"
                                            } catch {}
                                            h.onreadystatechange = function() {
                                                if (h.readyState === 4)
                                                    if (h.status === 200) m = u(h), d(m);
                                                    else try {
                                                        m = u(h), d(m)
                                                    } catch (v) {
                                                        p && p(v)
                                                    }
                                            };
                                            try {
                                                h.open(["G", "E", "T"].join(""), f, !0)
                                            } catch {
                                                h.open(["G", "E", "T"].join(""), g + "/" + f, !0)
                                            }
                                            h.send()
                                        }
                                    }
                                }()), l.data.type === "loadAnimation") a.assetLoader.load(l.data.path, l.data.fullPath, function(u) {
                                a.dataManager.completeData(u), a.postMessage({
                                    id: l.data.id,
                                    payload: u,
                                    status: "success"
                                })
                            }, function() {
                                a.postMessage({
                                    id: l.data.id,
                                    status: "error"
                                })
                            });
                            else if (l.data.type === "complete") {
                                var c = l.data.animation;
                                a.dataManager.completeData(c), a.postMessage({
                                    id: l.data.id,
                                    payload: c,
                                    status: "success"
                                })
                            } else l.data.type === "loadData" && a.assetLoader.load(l.data.path, l.data.fullPath, function(u) {
                                a.postMessage({
                                    id: l.data.id,
                                    payload: u,
                                    status: "success"
                                })
                            }, function() {
                                a.postMessage({
                                    id: l.data.id,
                                    status: "error"
                                })
                            })
                        }), t.onmessage = function(l) {
                            var c = l.data,
                                u = c.id,
                                f = n[u];
                            n[u] = null, c.status === "success" ? f.onComplete(c.payload) : f.onError && f.onError()
                        })
                    }

                    function o(l, c) {
                        var u = "processId_" + (r += 1);
                        return n[u] = {
                            onComplete: l,
                            onError: c
                        }, u
                    }
                    return {
                        loadAnimation: function(l, c, u) {
                            s();
                            var f = o(c, u);
                            t.postMessage({
                                type: "loadAnimation",
                                path: l,
                                fullPath: window.location.origin + window.location.pathname,
                                id: f
                            })
                        },
                        loadData: function(l, c, u) {
                            s();
                            var f = o(c, u);
                            t.postMessage({
                                type: "loadData",
                                path: l,
                                fullPath: window.location.origin + window.location.pathname,
                                id: f
                            })
                        },
                        completeAnimation: function(l, c, u) {
                            s();
                            var f = o(c, u);
                            t.postMessage({
                                type: "complete",
                                animation: l,
                                id: f
                            })
                        }
                    }
                }(),
                ImagePreloader = function() {
                    var e = function() {
                        var o = createTag("canvas");
                        o.width = 1, o.height = 1;
                        var l = o.getContext("2d");
                        return l.fillStyle = "rgba(0,0,0,0)", l.fillRect(0, 0, 1, 1), o
                    }();

                    function t() {
                        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }

                    function r() {
                        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                    }

                    function n(o, l, c) {
                        var u = "";
                        if (o.e) u = o.p;
                        else if (l) {
                            var f = o.p;
                            f.indexOf("images/") !== -1 && (f = f.split("/")[1]), u = l + f
                        } else u = c, u += o.u ? o.u : "", u += o.p;
                        return u
                    }

                    function i(o) {
                        var l = 0,
                            c = setInterval(function() {
                                (o.getBBox().width || l > 500) && (this._imageLoaded(), clearInterval(c)), l += 1
                            }.bind(this), 50)
                    }

                    function a(o) {
                        var l = {
                                assetData: o
                            },
                            c = n(o, this.assetsPath, this.path);
                        return dataManager.loadData(c, function(u) {
                            l.img = u, this._footageLoaded()
                        }.bind(this), function() {
                            l.img = {}, this._footageLoaded()
                        }.bind(this)), l
                    }

                    function s() {
                        this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = i.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                    }
                    return s.prototype = {
                        loadAssets: function(o, l) {
                            var c;
                            this.imagesLoadedCb = l;
                            var u = o.length;
                            for (c = 0; c < u; c += 1) o[c].layers || (o[c].t && o[c].t !== "seq" ? o[c].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(o[c]))) : (this.totalImages += 1, this.images.push(this._createImageData(o[c]))))
                        },
                        setAssetsPath: function(o) {
                            this.assetsPath = o || ""
                        },
                        setPath: function(o) {
                            this.path = o || ""
                        },
                        loadedImages: function() {
                            return this.totalImages === this.loadedAssets
                        },
                        loadedFootages: function() {
                            return this.totalFootages === this.loadedFootagesCount
                        },
                        destroy: function() {
                            this.imagesLoadedCb = null, this.images.length = 0
                        },
                        getAsset: function(o) {
                            for (var l = 0, c = this.images.length; l < c;) {
                                if (this.images[l].assetData === o) return this.images[l].img;
                                l += 1
                            }
                            return null
                        },
                        createImgData: function(o) {
                            var l = n(o, this.assetsPath, this.path),
                                c = createTag("img");
                            c.crossOrigin = "anonymous", c.addEventListener("load", this._imageLoaded, !1), c.addEventListener("error", function() {
                                u.img = e, this._imageLoaded()
                            }.bind(this), !1), c.src = l;
                            var u = {
                                img: c,
                                assetData: o
                            };
                            return u
                        },
                        createImageData: function(o) {
                            var l = n(o, this.assetsPath, this.path),
                                c = createNS("image");
                            isSafari ? this.testImageLoaded(c) : c.addEventListener("load", this._imageLoaded, !1), c.addEventListener("error", function() {
                                u.img = e, this._imageLoaded()
                            }.bind(this), !1), c.setAttributeNS("http://www.w3.org/1999/xlink", "href", l), this._elementHelper.append ? this._elementHelper.append(c) : this._elementHelper.appendChild(c);
                            var u = {
                                img: c,
                                assetData: o
                            };
                            return u
                        },
                        imageLoaded: t,
                        footageLoaded: r,
                        setCacheType: function(o, l) {
                            o === "svg" ? (this._elementHelper = l, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                        }
                    }, s
                }();

            function BaseEvent() {}
            BaseEvent.prototype = {
                triggerEvent: function(e, t) {
                    if (this._cbs[e])
                        for (var r = this._cbs[e], n = 0; n < r.length; n += 1) r[n](t)
                },
                addEventListener: function(e, t) {
                    return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t),
                        function() {
                            this.removeEventListener(e, t)
                        }.bind(this)
                },
                removeEventListener: function(e, t) {
                    if (t) {
                        if (this._cbs[e]) {
                            for (var r = 0, n = this._cbs[e].length; r < n;) this._cbs[e][r] === t && (this._cbs[e].splice(r, 1), r -= 1, n -= 1), r += 1;
                            this._cbs[e].length || (this._cbs[e] = null)
                        }
                    } else this._cbs[e] = null
                }
            };
            var markerParser = function() {
                    function e(t) {
                        for (var r, n = t.split(`\r
`), i = {}, a = 0, s = 0; s < n.length; s += 1)(r = n[s].split(":")).length === 2 && (i[r[0]] = r[1].trim(), a += 1);
                        if (a === 0) throw new Error;
                        return i
                    }
                    return function(t) {
                        for (var r = [], n = 0; n < t.length; n += 1) {
                            var i = t[n],
                                a = {
                                    time: i.tm,
                                    duration: i.dr
                                };
                            try {
                                a.payload = JSON.parse(t[n].cm)
                            } catch {
                                try {
                                    a.payload = e(t[n].cm)
                                } catch {
                                    a.payload = {
                                        name: t[n].cm
                                    }
                                }
                            }
                            r.push(a)
                        }
                        return r
                    }
                }(),
                ProjectInterface = function() {
                    function e(t) {
                        this.compositions.push(t)
                    }
                    return function() {
                        function t(r) {
                            for (var n = 0, i = this.compositions.length; n < i;) {
                                if (this.compositions[n].data && this.compositions[n].data.nm === r) return this.compositions[n].prepareFrame && this.compositions[n].data.xt && this.compositions[n].prepareFrame(this.currentFrame), this.compositions[n].compInterface;
                                n += 1
                            }
                            return null
                        }
                        return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
                    }
                }(),
                renderers = {},
                registerRenderer = function(e, t) {
                    renderers[e] = t
                };

            function getRenderer(e) {
                return renderers[e]
            }

            function getRegisteredRenderer() {
                if (renderers.canvas) return "canvas";
                for (var e in renderers)
                    if (renderers[e]) return e;
                return ""
            }

            function _typeof$4(e) {
                return _typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$4(e)
            }
            var AnimationItem = function() {
                this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
            };
            extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) {
                (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
                var t = "svg";
                e.animType ? t = e.animType : e.renderer && (t = e.renderer);
                var r = getRenderer(t);
                this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, e.loop === "" || e.loop === null || e.loop === void 0 || e.loop === !0 ? this.loop = !0 : e.loop === !1 ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(e, "autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (e.path.lastIndexOf("\\") !== -1 ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError))
            }, AnimationItem.prototype.onSetupError = function() {
                this.trigger("data_failed")
            }, AnimationItem.prototype.setupAnimation = function(e) {
                dataManager.completeAnimation(e, this.configAnimation)
            }, AnimationItem.prototype.setData = function(e, t) {
                t && _typeof$4(t) !== "object" && (t = JSON.parse(t));
                var r = {
                        wrapper: e,
                        animationData: t
                    },
                    n = e.attributes;
                r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
                var i = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
                i === "false" ? r.loop = !1 : i === "true" ? r.loop = !0 : i !== "" && (r.loop = parseInt(i, 10));
                var a = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
                r.autoplay = a !== "false", r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
            }, AnimationItem.prototype.includeLayers = function(e) {
                e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
                var t, r, n = this.animationData.layers,
                    i = n.length,
                    a = e.layers,
                    s = a.length;
                for (r = 0; r < s; r += 1)
                    for (t = 0; t < i;) {
                        if (n[t].id === a[r].id) {
                            n[t] = a[r];
                            break
                        }
                        t += 1
                    }
                if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
                    for (i = e.assets.length, t = 0; t < i; t += 1) this.animationData.assets.push(e.assets[t]);
                this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
            }, AnimationItem.prototype.onSegmentComplete = function(e) {
                this.animationData = e;
                var t = getExpressionsPlugin();
                t && t.initExpressions(this), this.loadNextSegment()
            }, AnimationItem.prototype.loadNextSegment = function() {
                var e = this.animationData.segments;
                if (!e || e.length === 0 || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                var t = e.shift();
                this.timeCompleted = t.time * this.frameRate;
                var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
                this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
                    this.trigger("data_failed")
                }.bind(this))
            }, AnimationItem.prototype.loadSegments = function() {
                this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
            }, AnimationItem.prototype.imagesLoaded = function() {
                this.trigger("loaded_images"), this.checkLoaded()
            }, AnimationItem.prototype.preloadImages = function() {
                this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
            }, AnimationItem.prototype.configAnimation = function(e) {
                if (this.renderer) try {
                    this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                } catch (t) {
                    this.triggerConfigError(t)
                }
            }, AnimationItem.prototype.waitForFontsLoaded = function() {
                this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
            }, AnimationItem.prototype.checkLoaded = function() {
                if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                    this.isLoaded = !0;
                    var e = getExpressionsPlugin();
                    e && e.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                        this.trigger("DOMLoaded")
                    }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                }
            }, AnimationItem.prototype.resize = function(e, t) {
                var r = typeof e == "number" ? e : void 0,
                    n = typeof t == "number" ? t : void 0;
                this.renderer.updateContainerSize(r, n)
            }, AnimationItem.prototype.setSubframe = function(e) {
                this.isSubframeEnabled = !!e
            }, AnimationItem.prototype.gotoFrame = function() {
                this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
            }, AnimationItem.prototype.renderFrame = function() {
                if (this.isLoaded !== !1 && this.renderer) try {
                    this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                } catch (e) {
                    this.triggerRenderFrameError(e)
                }
            }, AnimationItem.prototype.play = function(e) {
                e && this.name !== e || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
            }, AnimationItem.prototype.pause = function(e) {
                e && this.name !== e || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
            }, AnimationItem.prototype.togglePause = function(e) {
                e && this.name !== e || (this.isPaused === !0 ? this.play() : this.pause())
            }, AnimationItem.prototype.stop = function(e) {
                e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
            }, AnimationItem.prototype.getMarkerData = function(e) {
                for (var t, r = 0; r < this.markers.length; r += 1)
                    if ((t = this.markers[r]).payload && t.payload.name === e) return t;
                return null
            }, AnimationItem.prototype.goToAndStop = function(e, t, r) {
                if (!r || this.name === r) {
                    var n = Number(e);
                    if (isNaN(n)) {
                        var i = this.getMarkerData(e);
                        i && this.goToAndStop(i.time, !0)
                    } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
                    this.pause()
                }
            }, AnimationItem.prototype.goToAndPlay = function(e, t, r) {
                if (!r || this.name === r) {
                    var n = Number(e);
                    if (isNaN(n)) {
                        var i = this.getMarkerData(e);
                        i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0))
                    } else this.goToAndStop(n, t, r);
                    this.play()
                }
            }, AnimationItem.prototype.advanceTime = function(e) {
                if (this.isPaused !== !0 && this.isLoaded !== !1) {
                    var t = this.currentRawFrame + e * this.frameModifier,
                        r = !1;
                    t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && this.loop !== !0 ? (r = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
                }
            }, AnimationItem.prototype.adjustSegment = function(e, t) {
                this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
            }, AnimationItem.prototype.setSegment = function(e, t) {
                var r = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0)
            }, AnimationItem.prototype.playSegments = function(e, t) {
                if (t && (this.segments.length = 0), _typeof$4(e[0]) === "object") {
                    var r, n = e.length;
                    for (r = 0; r < n; r += 1) this.segments.push(e[r])
                } else this.segments.push(e);
                this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
            }, AnimationItem.prototype.resetSegments = function(e) {
                this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
            }, AnimationItem.prototype.checkSegments = function(e) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0)
            }, AnimationItem.prototype.destroy = function(e) {
                e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
            }, AnimationItem.prototype.setCurrentRawFrameValue = function(e) {
                this.currentRawFrame = e, this.gotoFrame()
            }, AnimationItem.prototype.setSpeed = function(e) {
                this.playSpeed = e, this.updaFrameModifier()
            }, AnimationItem.prototype.setDirection = function(e) {
                this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
            }, AnimationItem.prototype.setLoop = function(e) {
                this.loop = e
            }, AnimationItem.prototype.setVolume = function(e, t) {
                t && this.name !== t || this.audioController.setVolume(e)
            }, AnimationItem.prototype.getVolume = function() {
                return this.audioController.getVolume()
            }, AnimationItem.prototype.mute = function(e) {
                e && this.name !== e || this.audioController.mute()
            }, AnimationItem.prototype.unmute = function(e) {
                e && this.name !== e || this.audioController.unmute()
            }, AnimationItem.prototype.updaFrameModifier = function() {
                this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
            }, AnimationItem.prototype.getPath = function() {
                return this.path
            }, AnimationItem.prototype.getAssetsPath = function(e) {
                var t = "";
                if (e.e) t = e.p;
                else if (this.assetsPath) {
                    var r = e.p;
                    r.indexOf("images/") !== -1 && (r = r.split("/")[1]), t = this.assetsPath + r
                } else t = this.path, t += e.u ? e.u : "", t += e.p;
                return t
            }, AnimationItem.prototype.getAssetData = function(e) {
                for (var t = 0, r = this.assets.length; t < r;) {
                    if (e === this.assets[t].id) return this.assets[t];
                    t += 1
                }
                return null
            }, AnimationItem.prototype.hide = function() {
                this.renderer.hide()
            }, AnimationItem.prototype.show = function() {
                this.renderer.show()
            }, AnimationItem.prototype.getDuration = function(e) {
                return e ? this.totalFrames : this.totalFrames / this.frameRate
            }, AnimationItem.prototype.updateDocumentData = function(e, t, r) {
                try {
                    this.renderer.getElementByPath(e).updateDocumentData(t, r)
                } catch {}
            }, AnimationItem.prototype.trigger = function(e) {
                if (this._cbs && this._cbs[e]) switch (e) {
                    case "enterFrame":
                        this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
                        break;
                    case "drawnFrame":
                        this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
                        break;
                    case "loopComplete":
                        this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
                        break;
                    case "complete":
                        this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
                        break;
                    case "segmentStart":
                        this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
                        break;
                    case "destroy":
                        this.triggerEvent(e, new BMDestroyEvent(e, this));
                        break;
                    default:
                        this.triggerEvent(e)
                }
                e === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), e === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), e === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), e === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), e === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
            }, AnimationItem.prototype.triggerRenderFrameError = function(e) {
                var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
                this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
            }, AnimationItem.prototype.triggerConfigError = function(e) {
                var t = new BMConfigErrorEvent(e, this.currentFrame);
                this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
            };
            var animationManager = function() {
                    var e = {},
                        t = [],
                        r = 0,
                        n = 0,
                        i = 0,
                        a = !0,
                        s = !1;

                    function o(m) {
                        for (var h = 0, v = m.target; h < n;) t[h].animation === v && (t.splice(h, 1), h -= 1, n -= 1, v.isPaused || u()), h += 1
                    }

                    function l(m, h) {
                        if (!m) return null;
                        for (var v = 0; v < n;) {
                            if (t[v].elem === m && t[v].elem !== null) return t[v].animation;
                            v += 1
                        }
                        var y = new AnimationItem;
                        return f(y, m), y.setData(m, h), y
                    }

                    function c() {
                        i += 1, p()
                    }

                    function u() {
                        i -= 1
                    }

                    function f(m, h) {
                        m.addEventListener("destroy", o), m.addEventListener("_active", c), m.addEventListener("_idle", u), t.push({
                            elem: h,
                            animation: m
                        }), n += 1
                    }

                    function g(m) {
                        var h, v = m - r;
                        for (h = 0; h < n; h += 1) t[h].animation.advanceTime(v);
                        r = m, i && !s ? window.requestAnimationFrame(g) : a = !0
                    }

                    function d(m) {
                        r = m, window.requestAnimationFrame(g)
                    }

                    function p() {
                        !s && i && a && (window.requestAnimationFrame(d), a = !1)
                    }
                    return e.registerAnimation = l, e.loadAnimation = function(m) {
                        var h = new AnimationItem;
                        return f(h, null), h.setParams(m), h
                    }, e.setSpeed = function(m, h) {
                        var v;
                        for (v = 0; v < n; v += 1) t[v].animation.setSpeed(m, h)
                    }, e.setDirection = function(m, h) {
                        var v;
                        for (v = 0; v < n; v += 1) t[v].animation.setDirection(m, h)
                    }, e.play = function(m) {
                        var h;
                        for (h = 0; h < n; h += 1) t[h].animation.play(m)
                    }, e.pause = function(m) {
                        var h;
                        for (h = 0; h < n; h += 1) t[h].animation.pause(m)
                    }, e.stop = function(m) {
                        var h;
                        for (h = 0; h < n; h += 1) t[h].animation.stop(m)
                    }, e.togglePause = function(m) {
                        var h;
                        for (h = 0; h < n; h += 1) t[h].animation.togglePause(m)
                    }, e.searchAnimations = function(m, h, v) {
                        var y, b = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                            S = b.length;
                        for (y = 0; y < S; y += 1) v && b[y].setAttribute("data-bm-type", v), l(b[y], m);
                        if (h && S === 0) {
                            v || (v = "svg");
                            var x = document.getElementsByTagName("body")[0];
                            x.innerText = "";
                            var T = createTag("div");
                            T.style.width = "100%", T.style.height = "100%", T.setAttribute("data-bm-type", v), x.appendChild(T), l(T, m)
                        }
                    }, e.resize = function() {
                        var m;
                        for (m = 0; m < n; m += 1) t[m].animation.resize()
                    }, e.goToAndStop = function(m, h, v) {
                        var y;
                        for (y = 0; y < n; y += 1) t[y].animation.goToAndStop(m, h, v)
                    }, e.destroy = function(m) {
                        var h;
                        for (h = n - 1; h >= 0; h -= 1) t[h].animation.destroy(m)
                    }, e.freeze = function() {
                        s = !0
                    }, e.unfreeze = function() {
                        s = !1, p()
                    }, e.setVolume = function(m, h) {
                        var v;
                        for (v = 0; v < n; v += 1) t[v].animation.setVolume(m, h)
                    }, e.mute = function(m) {
                        var h;
                        for (h = 0; h < n; h += 1) t[h].animation.mute(m)
                    }, e.unmute = function(m) {
                        var h;
                        for (h = 0; h < n; h += 1) t[h].animation.unmute(m)
                    }, e.getRegisteredAnimations = function() {
                        var m, h = t.length,
                            v = [];
                        for (m = 0; m < h; m += 1) v.push(t[m].animation);
                        return v
                    }, e
                }(),
                BezierFactory = function() {
                    var e = {
                            getBezierEasing: function(u, f, g, d, p) {
                                var m = p || ("bez_" + u + "_" + f + "_" + g + "_" + d).replace(/\./g, "p");
                                if (t[m]) return t[m];
                                var h = new c([u, f, g, d]);
                                return t[m] = h, h
                            }
                        },
                        t = {},
                        r = .1,
                        n = typeof Float32Array == "function";

                    function i(u, f) {
                        return 1 - 3 * f + 3 * u
                    }

                    function a(u, f) {
                        return 3 * f - 6 * u
                    }

                    function s(u) {
                        return 3 * u
                    }

                    function o(u, f, g) {
                        return ((i(f, g) * u + a(f, g)) * u + s(f)) * u
                    }

                    function l(u, f, g) {
                        return 3 * i(f, g) * u * u + 2 * a(f, g) * u + s(f)
                    }

                    function c(u) {
                        this._p = u, this._mSampleValues = n ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                    }
                    return c.prototype = {
                        get: function(u) {
                            var f = this._p[0],
                                g = this._p[1],
                                d = this._p[2],
                                p = this._p[3];
                            return this._precomputed || this._precompute(), f === g && d === p ? u : u === 0 ? 0 : u === 1 ? 1 : o(this._getTForX(u), g, p)
                        },
                        _precompute: function() {
                            var u = this._p[0],
                                f = this._p[1],
                                g = this._p[2],
                                d = this._p[3];
                            this._precomputed = !0, u === f && g === d || this._calcSampleValues()
                        },
                        _calcSampleValues: function() {
                            for (var u = this._p[0], f = this._p[2], g = 0; g < 11; ++g) this._mSampleValues[g] = o(g * r, u, f)
                        },
                        _getTForX: function(u) {
                            for (var f = this._p[0], g = this._p[2], d = this._mSampleValues, p = 0, m = 1; m !== 10 && d[m] <= u; ++m) p += r;
                            var h = p + (u - d[--m]) / (d[m + 1] - d[m]) * r,
                                v = l(h, f, g);
                            return v >= .001 ? function(y, b, S, x) {
                                for (var T = 0; T < 4; ++T) {
                                    var _ = l(b, S, x);
                                    if (_ === 0) return b;
                                    b -= (o(b, S, x) - y) / _
                                }
                                return b
                            }(u, h, f, g) : v === 0 ? h : function(y, b, S, x, T) {
                                var _, P, F = 0;
                                do(_ = o(P = b + (S - b) / 2, x, T) - y) > 0 ? S = P : b = P; while (Math.abs(_) > 1e-7 && ++F < 10);
                                return P
                            }(u, p, p + r, f, g)
                        }
                    }, e
                }(),
                pooling = {
                    double: function(e) {
                        return e.concat(createSizedArray(e.length))
                    }
                },
                poolFactory = function(e, t, r) {
                    var n = 0,
                        i = e,
                        a = createSizedArray(i);
                    return {
                        newElement: function() {
                            return n ? a[n -= 1] : t()
                        },
                        release: function(s) {
                            n === i && (a = pooling.double(a), i *= 2), r && r(s), a[n] = s, n += 1
                        }
                    }
                },
                bezierLengthPool = poolFactory(8, function() {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", getDefaultCurveSegments()),
                        lengths: createTypedArray("float32", getDefaultCurveSegments())
                    }
                }),
                segmentsLengthPool = poolFactory(8, function() {
                    return {
                        lengths: [],
                        totalLength: 0
                    }
                }, function(e) {
                    var t, r = e.lengths.length;
                    for (t = 0; t < r; t += 1) bezierLengthPool.release(e.lengths[t]);
                    e.lengths.length = 0
                });

            function bezFunction() {
                var e = Math;

                function t(c, u, f, g, d, p) {
                    var m = c * g + u * d + f * p - d * g - p * c - f * u;
                    return m > -.001 && m < .001
                }
                var r = function(c, u, f, g) {
                    var d, p, m, h, v, y, b = getDefaultCurveSegments(),
                        S = 0,
                        x = [],
                        T = [],
                        _ = bezierLengthPool.newElement();
                    for (m = f.length, d = 0; d < b; d += 1) {
                        for (v = d / (b - 1), y = 0, p = 0; p < m; p += 1) h = bmPow(1 - v, 3) * c[p] + 3 * bmPow(1 - v, 2) * v * f[p] + 3 * (1 - v) * bmPow(v, 2) * g[p] + bmPow(v, 3) * u[p], x[p] = h, T[p] !== null && (y += bmPow(x[p] - T[p], 2)), T[p] = x[p];
                        y && (S += y = bmSqrt(y)), _.percents[d] = v, _.lengths[d] = S
                    }
                    return _.addedLength = S, _
                };

                function n(c) {
                    this.segmentLength = 0, this.points = new Array(c)
                }

                function i(c, u) {
                    this.partialLength = c, this.point = u
                }
                var a, s = (a = {}, function(c, u, f, g) {
                    var d = (c[0] + "_" + c[1] + "_" + u[0] + "_" + u[1] + "_" + f[0] + "_" + f[1] + "_" + g[0] + "_" + g[1]).replace(/\./g, "p");
                    if (!a[d]) {
                        var p, m, h, v, y, b, S, x = getDefaultCurveSegments(),
                            T = 0,
                            _ = null;
                        c.length === 2 && (c[0] !== u[0] || c[1] !== u[1]) && t(c[0], c[1], u[0], u[1], c[0] + f[0], c[1] + f[1]) && t(c[0], c[1], u[0], u[1], u[0] + g[0], u[1] + g[1]) && (x = 2);
                        var P = new n(x);
                        for (h = f.length, p = 0; p < x; p += 1) {
                            for (S = createSizedArray(h), y = p / (x - 1), b = 0, m = 0; m < h; m += 1) v = bmPow(1 - y, 3) * c[m] + 3 * bmPow(1 - y, 2) * y * (c[m] + f[m]) + 3 * (1 - y) * bmPow(y, 2) * (u[m] + g[m]) + bmPow(y, 3) * u[m], S[m] = v, _ !== null && (b += bmPow(S[m] - _[m], 2));
                            T += b = bmSqrt(b), P.points[p] = new i(b, S), _ = S
                        }
                        P.segmentLength = T, a[d] = P
                    }
                    return a[d]
                });

                function o(c, u) {
                    var f = u.percents,
                        g = u.lengths,
                        d = f.length,
                        p = bmFloor((d - 1) * c),
                        m = c * u.addedLength,
                        h = 0;
                    if (p === d - 1 || p === 0 || m === g[p]) return f[p];
                    for (var v = g[p] > m ? -1 : 1, y = !0; y;)
                        if (g[p] <= m && g[p + 1] > m ? (h = (m - g[p]) / (g[p + 1] - g[p]), y = !1) : p += v, p < 0 || p >= d - 1) {
                            if (p === d - 1) return f[p];
                            y = !1
                        }
                    return f[p] + (f[p + 1] - f[p]) * h
                }
                var l = createTypedArray("float32", 8);
                return {
                    getSegmentsLength: function(c) {
                        var u, f = segmentsLengthPool.newElement(),
                            g = c.c,
                            d = c.v,
                            p = c.o,
                            m = c.i,
                            h = c._length,
                            v = f.lengths,
                            y = 0;
                        for (u = 0; u < h - 1; u += 1) v[u] = r(d[u], d[u + 1], p[u], m[u + 1]), y += v[u].addedLength;
                        return g && h && (v[u] = r(d[u], d[0], p[u], m[0]), y += v[u].addedLength), f.totalLength = y, f
                    },
                    getNewSegment: function(c, u, f, g, d, p, m) {
                        d < 0 ? d = 0 : d > 1 && (d = 1);
                        var h, v = o(d, m),
                            y = o(p = p > 1 ? 1 : p, m),
                            b = c.length,
                            S = 1 - v,
                            x = 1 - y,
                            T = S * S * S,
                            _ = v * S * S * 3,
                            P = v * v * S * 3,
                            F = v * v * v,
                            w = S * S * x,
                            C = v * S * x + S * v * x + S * S * y,
                            R = v * v * x + S * v * y + v * S * y,
                            O = v * v * y,
                            M = S * x * x,
                            N = v * x * x + S * y * x + S * x * y,
                            z = v * y * x + S * y * y + v * x * y,
                            $ = v * y * y,
                            A = x * x * x,
                            D = y * x * x + x * y * x + x * x * y,
                            L = y * y * x + x * y * y + y * x * y,
                            H = y * y * y;
                        for (h = 0; h < b; h += 1) l[4 * h] = e.round(1e3 * (T * c[h] + _ * f[h] + P * g[h] + F * u[h])) / 1e3, l[4 * h + 1] = e.round(1e3 * (w * c[h] + C * f[h] + R * g[h] + O * u[h])) / 1e3, l[4 * h + 2] = e.round(1e3 * (M * c[h] + N * f[h] + z * g[h] + $ * u[h])) / 1e3, l[4 * h + 3] = e.round(1e3 * (A * c[h] + D * f[h] + L * g[h] + H * u[h])) / 1e3;
                        return l
                    },
                    getPointInSegment: function(c, u, f, g, d, p) {
                        var m = o(d, p),
                            h = 1 - m;
                        return [e.round(1e3 * (h * h * h * c[0] + (m * h * h + h * m * h + h * h * m) * f[0] + (m * m * h + h * m * m + m * h * m) * g[0] + m * m * m * u[0])) / 1e3, e.round(1e3 * (h * h * h * c[1] + (m * h * h + h * m * h + h * h * m) * f[1] + (m * m * h + h * m * m + m * h * m) * g[1] + m * m * m * u[1])) / 1e3]
                    },
                    buildBezierData: s,
                    pointOnLine2D: t,
                    pointOnLine3D: function(c, u, f, g, d, p, m, h, v) {
                        if (f === 0 && p === 0 && v === 0) return t(c, u, g, d, m, h);
                        var y, b = e.sqrt(e.pow(g - c, 2) + e.pow(d - u, 2) + e.pow(p - f, 2)),
                            S = e.sqrt(e.pow(m - c, 2) + e.pow(h - u, 2) + e.pow(v - f, 2)),
                            x = e.sqrt(e.pow(m - g, 2) + e.pow(h - d, 2) + e.pow(v - p, 2));
                        return (y = b > S ? b > x ? b - S - x : x - S - b : x > S ? x - S - b : S - b - x) > -1e-4 && y < 1e-4
                    }
                }
            }
            var bez = bezFunction(),
                initFrame = initialDefaultFrame,
                mathAbs = Math.abs;

            function interpolateValue(e, t) {
                var r, n = this.offsetTime;
                this.propType === "multidimensional" && (r = createTypedArray("float32", this.pv.length));
                for (var i, a, s, o, l, c, u, f, g, d = t.lastIndex, p = d, m = this.keyframes.length - 1, h = !0; h;) {
                    if (i = this.keyframes[p], a = this.keyframes[p + 1], p === m - 1 && e >= a.t - n) {
                        i.h && (i = a), d = 0;
                        break
                    }
                    if (a.t - n > e) {
                        d = p;
                        break
                    }
                    p < m - 1 ? p += 1 : (d = 0, h = !1)
                }
                s = this.keyframesMetadata[p] || {};
                var v, y = a.t - n,
                    b = i.t - n;
                if (i.to) {
                    s.bezierData || (s.bezierData = bez.buildBezierData(i.s, a.s || i.e, i.to, i.ti));
                    var S = s.bezierData;
                    if (e >= y || e < b) {
                        var x = e >= y ? S.points.length - 1 : 0;
                        for (l = S.points[x].point.length, o = 0; o < l; o += 1) r[o] = S.points[x].point[o]
                    } else {
                        s.__fnct ? g = s.__fnct : (g = BezierFactory.getBezierEasing(i.o.x, i.o.y, i.i.x, i.i.y, i.n).get, s.__fnct = g), c = g((e - b) / (y - b));
                        var T, _ = S.segmentLength * c,
                            P = t.lastFrame < e && t._lastKeyframeIndex === p ? t._lastAddedLength : 0;
                        for (f = t.lastFrame < e && t._lastKeyframeIndex === p ? t._lastPoint : 0, h = !0, u = S.points.length; h;) {
                            if (P += S.points[f].partialLength, _ === 0 || c === 0 || f === S.points.length - 1) {
                                for (l = S.points[f].point.length, o = 0; o < l; o += 1) r[o] = S.points[f].point[o];
                                break
                            }
                            if (_ >= P && _ < P + S.points[f + 1].partialLength) {
                                for (T = (_ - P) / S.points[f + 1].partialLength, l = S.points[f].point.length, o = 0; o < l; o += 1) r[o] = S.points[f].point[o] + (S.points[f + 1].point[o] - S.points[f].point[o]) * T;
                                break
                            }
                            f < u - 1 ? f += 1 : h = !1
                        }
                        t._lastPoint = f, t._lastAddedLength = P - S.points[f].partialLength, t._lastKeyframeIndex = p
                    }
                } else {
                    var F, w, C, R, O;
                    if (m = i.s.length, v = a.s || i.e, this.sh && i.h !== 1) e >= y ? (r[0] = v[0], r[1] = v[1], r[2] = v[2]) : e <= b ? (r[0] = i.s[0], r[1] = i.s[1], r[2] = i.s[2]) : quaternionToEuler(r, slerp(createQuaternion(i.s), createQuaternion(v), (e - b) / (y - b)));
                    else
                        for (p = 0; p < m; p += 1) i.h !== 1 && (e >= y ? c = 1 : e < b ? c = 0 : (i.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[p] ? g = s.__fnct[p] : (F = i.o.x[p] === void 0 ? i.o.x[0] : i.o.x[p], w = i.o.y[p] === void 0 ? i.o.y[0] : i.o.y[p], C = i.i.x[p] === void 0 ? i.i.x[0] : i.i.x[p], R = i.i.y[p] === void 0 ? i.i.y[0] : i.i.y[p], g = BezierFactory.getBezierEasing(F, w, C, R).get, s.__fnct[p] = g)) : s.__fnct ? g = s.__fnct : (F = i.o.x, w = i.o.y, C = i.i.x, R = i.i.y, g = BezierFactory.getBezierEasing(F, w, C, R).get, i.keyframeMetadata = g), c = g((e - b) / (y - b)))), v = a.s || i.e, O = i.h === 1 ? i.s[p] : i.s[p] + (v[p] - i.s[p]) * c, this.propType === "multidimensional" ? r[p] = O : r = O
                }
                return t.lastIndex = d, r
            }

            function slerp(e, t, r) {
                var n, i, a, s, o, l = [],
                    c = e[0],
                    u = e[1],
                    f = e[2],
                    g = e[3],
                    d = t[0],
                    p = t[1],
                    m = t[2],
                    h = t[3];
                return (i = c * d + u * p + f * m + g * h) < 0 && (i = -i, d = -d, p = -p, m = -m, h = -h), 1 - i > 1e-6 ? (n = Math.acos(i), a = Math.sin(n), s = Math.sin((1 - r) * n) / a, o = Math.sin(r * n) / a) : (s = 1 - r, o = r), l[0] = s * c + o * d, l[1] = s * u + o * p, l[2] = s * f + o * m, l[3] = s * g + o * h, l
            }

            function quaternionToEuler(e, t) {
                var r = t[0],
                    n = t[1],
                    i = t[2],
                    a = t[3],
                    s = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i),
                    o = Math.asin(2 * r * n + 2 * i * a),
                    l = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i);
                e[0] = s / degToRads, e[1] = o / degToRads, e[2] = l / degToRads
            }

            function createQuaternion(e) {
                var t = e[0] * degToRads,
                    r = e[1] * degToRads,
                    n = e[2] * degToRads,
                    i = Math.cos(t / 2),
                    a = Math.cos(r / 2),
                    s = Math.cos(n / 2),
                    o = Math.sin(t / 2),
                    l = Math.sin(r / 2),
                    c = Math.sin(n / 2);
                return [o * l * s + i * a * c, o * a * s + i * l * c, i * l * s - o * a * c, i * a * s - o * l * c]
            }

            function getValueAtCurrentTime() {
                var e = this.comp.renderedFrame - this.offsetTime,
                    t = this.keyframes[0].t - this.offsetTime,
                    r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < t && e < t))) {
                    this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                    var n = this.interpolateValue(e, this._caching);
                    this.pv = n
                }
                return this._caching.lastFrame = e, this.pv
            }

            function setVValue(e) {
                var t;
                if (this.propType === "unidimensional") t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
                else
                    for (var r = 0, n = this.v.length; r < n;) t = e[r] * this.mult, mathAbs(this.v[r] - t) > 1e-5 && (this.v[r] = t, this._mdf = !0), r += 1
            }

            function processEffectsSequence() {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                    if (this.lock) this.setVValue(this.pv);
                    else {
                        var e;
                        this.lock = !0, this._mdf = this._isFirstFrame;
                        var t = this.effectsSequence.length,
                            r = this.kf ? this.pv : this.data.k;
                        for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
                        this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
            }

            function addEffect(e) {
                this.effectsSequence.push(e), this.container.addDynamicProperty(this)
            }

            function ValueProperty(e, t, r, n) {
                this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
            }

            function MultiDimensionalProperty(e, t, r, n) {
                var i;
                this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                var a = t.k.length;
                for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), i = 0; i < a; i += 1) this.v[i] = t.k[i] * this.mult, this.pv[i] = t.k[i];
                this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
            }

            function KeyframedValueProperty(e, t, r, n) {
                this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                    lastFrame: initFrame,
                    lastIndex: 0,
                    value: 0,
                    _lastKeyframeIndex: -1
                }, this.k = !0, this.kf = !0, this.data = t, this.mult = r || 1, this.elem = e, this.container = n, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
            }

            function KeyframedMultidimensionalProperty(e, t, r, n) {
                var i;
                this.propType = "multidimensional";
                var a, s, o, l, c = t.k.length;
                for (i = 0; i < c - 1; i += 1) t.k[i].to && t.k[i].s && t.k[i + 1] && t.k[i + 1].s && (a = t.k[i].s, s = t.k[i + 1].s, o = t.k[i].to, l = t.k[i].ti, (a.length === 2 && (a[0] !== s[0] || a[1] !== s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || a.length === 3 && (a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (t.k[i].to = null, t.k[i].ti = null), a[0] === s[0] && a[1] === s[1] && o[0] === 0 && o[1] === 0 && l[0] === 0 && l[1] === 0 && (a.length === 2 || a[2] === s[2] && o[2] === 0 && l[2] === 0) && (t.k[i].to = null, t.k[i].ti = null));
                this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = n, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
                var u = t.k[0].s.length;
                for (this.v = createTypedArray("float32", u), this.pv = createTypedArray("float32", u), i = 0; i < u; i += 1) this.v[i] = initFrame, this.pv[i] = initFrame;
                this._caching = {
                    lastFrame: initFrame,
                    lastIndex: 0,
                    value: createTypedArray("float32", u)
                }, this.addEffect = addEffect
            }
            var PropertyFactory = {
                getProp: function(e, t, r, n, i) {
                    var a;
                    if (t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length)
                        if (typeof t.k[0] == "number") a = new MultiDimensionalProperty(e, t, n, i);
                        else switch (r) {
                            case 0:
                                a = new KeyframedValueProperty(e, t, n, i);
                                break;
                            case 1:
                                a = new KeyframedMultidimensionalProperty(e, t, n, i)
                        } else a = new ValueProperty(e, t, n, i);
                    return a.effectsSequence.length && i.addDynamicProperty(a), a
                }
            };

            function DynamicPropertyContainer() {}
            DynamicPropertyContainer.prototype = {
                addDynamicProperty: function(e) {
                    this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
                },
                iterateDynamicProperties: function() {
                    var e;
                    this._mdf = !1;
                    var t = this.dynamicProperties.length;
                    for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
                },
                initDynamicPropertyContainer: function(e) {
                    this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                }
            };
            var pointPool = poolFactory(8, function() {
                return createTypedArray("float32", 2)
            });

            function ShapePath() {
                this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
            }
            ShapePath.prototype.setPathData = function(e, t) {
                this.c = e, this.setLength(t);
                for (var r = 0; r < t;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
            }, ShapePath.prototype.setLength = function(e) {
                for (; this._maxLength < e;) this.doubleArrayLength();
                this._length = e
            }, ShapePath.prototype.doubleArrayLength = function() {
                this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
            }, ShapePath.prototype.setXYAt = function(e, t, r, n, i) {
                var a;
                switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                    case "v":
                        a = this.v;
                        break;
                    case "i":
                        a = this.i;
                        break;
                    case "o":
                        a = this.o;
                        break;
                    default:
                        a = []
                }(!a[n] || a[n] && !i) && (a[n] = pointPool.newElement()), a[n][0] = e, a[n][1] = t
            }, ShapePath.prototype.setTripleAt = function(e, t, r, n, i, a, s, o) {
                this.setXYAt(e, t, "v", s, o), this.setXYAt(r, n, "o", s, o), this.setXYAt(i, a, "i", s, o)
            }, ShapePath.prototype.reverse = function() {
                var e = new ShapePath;
                e.setPathData(this.c, this._length);
                var t = this.v,
                    r = this.o,
                    n = this.i,
                    i = 0;
                this.c && (e.setTripleAt(t[0][0], t[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), i = 1);
                var a, s = this._length - 1,
                    o = this._length;
                for (a = i; a < o; a += 1) e.setTripleAt(t[s][0], t[s][1], n[s][0], n[s][1], r[s][0], r[s][1], a, !1), s -= 1;
                return e
            }, ShapePath.prototype.length = function() {
                return this._length
            };
            var shapePool = (factory = poolFactory(4, function() {
                    return new ShapePath
                }, function(e) {
                    var t, r = e._length;
                    for (t = 0; t < r; t += 1) pointPool.release(e.v[t]), pointPool.release(e.i[t]), pointPool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
                    e._length = 0, e.c = !1
                }), factory.clone = function(e) {
                    var t, r = factory.newElement(),
                        n = e._length === void 0 ? e.v.length : e._length;
                    for (r.setLength(n), r.c = e.c, t = 0; t < n; t += 1) r.setTripleAt(e.v[t][0], e.v[t][1], e.o[t][0], e.o[t][1], e.i[t][0], e.i[t][1], t);
                    return r
                }, factory),
                factory;

            function ShapeCollection() {
                this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
            }
            ShapeCollection.prototype.addShape = function(e) {
                this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
            }, ShapeCollection.prototype.releaseShapes = function() {
                var e;
                for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
                this._length = 0
            };
            var shapeCollectionPool = (ob = {
                    newShapeCollection: function() {
                        return _length ? pool[_length -= 1] : new ShapeCollection
                    },
                    release: function(e) {
                        var t, r = e._length;
                        for (t = 0; t < r; t += 1) shapePool.release(e.shapes[t]);
                        e._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = e, _length += 1
                    }
                }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
                ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
                    var e = -999999;

                    function t(d, p, m) {
                        var h, v, y, b, S, x, T, _, P, F = m.lastIndex,
                            w = this.keyframes;
                        if (d < w[0].t - this.offsetTime) h = w[0].s[0], y = !0, F = 0;
                        else if (d >= w[w.length - 1].t - this.offsetTime) h = w[w.length - 1].s ? w[w.length - 1].s[0] : w[w.length - 2].e[0], y = !0;
                        else {
                            for (var C, R, O, M = F, N = w.length - 1, z = !0; z && (C = w[M], !((R = w[M + 1]).t - this.offsetTime > d));) M < N - 1 ? M += 1 : z = !1;
                            if (O = this.keyframesMetadata[M] || {}, F = M, !(y = C.h === 1)) {
                                if (d >= R.t - this.offsetTime) _ = 1;
                                else if (d < C.t - this.offsetTime) _ = 0;
                                else {
                                    var $;
                                    O.__fnct ? $ = O.__fnct : ($ = BezierFactory.getBezierEasing(C.o.x, C.o.y, C.i.x, C.i.y).get, O.__fnct = $), _ = $((d - (C.t - this.offsetTime)) / (R.t - this.offsetTime - (C.t - this.offsetTime)))
                                }
                                v = R.s ? R.s[0] : C.e[0]
                            }
                            h = C.s[0]
                        }
                        for (x = p._length, T = h.i[0].length, m.lastIndex = F, b = 0; b < x; b += 1)
                            for (S = 0; S < T; S += 1) P = y ? h.i[b][S] : h.i[b][S] + (v.i[b][S] - h.i[b][S]) * _, p.i[b][S] = P, P = y ? h.o[b][S] : h.o[b][S] + (v.o[b][S] - h.o[b][S]) * _, p.o[b][S] = P, P = y ? h.v[b][S] : h.v[b][S] + (v.v[b][S] - h.v[b][S]) * _, p.v[b][S] = P
                    }

                    function r() {
                        var d = this.comp.renderedFrame - this.offsetTime,
                            p = this.keyframes[0].t - this.offsetTime,
                            m = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                            h = this._caching.lastFrame;
                        return h !== e && (h < p && d < p || h > m && d > m) || (this._caching.lastIndex = h < d ? this._caching.lastIndex : 0, this.interpolateShape(d, this.pv, this._caching)), this._caching.lastFrame = d, this.pv
                    }

                    function n() {
                        this.paths = this.localShapeCollection
                    }

                    function i(d) {
                        (function(p, m) {
                            if (p._length !== m._length || p.c !== m.c) return !1;
                            var h, v = p._length;
                            for (h = 0; h < v; h += 1)
                                if (p.v[h][0] !== m.v[h][0] || p.v[h][1] !== m.v[h][1] || p.o[h][0] !== m.o[h][0] || p.o[h][1] !== m.o[h][1] || p.i[h][0] !== m.i[h][0] || p.i[h][1] !== m.i[h][1]) return !1;
                            return !0
                        })(this.v, d) || (this.v = shapePool.clone(d), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                    }

                    function a() {
                        if (this.elem.globalData.frameId !== this.frameId)
                            if (this.effectsSequence.length)
                                if (this.lock) this.setVValue(this.pv);
                                else {
                                    var d, p;
                                    this.lock = !0, this._mdf = !1, d = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                    var m = this.effectsSequence.length;
                                    for (p = 0; p < m; p += 1) d = this.effectsSequence[p](d);
                                    this.setVValue(d), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                        else this._mdf = !1
                    }

                    function s(d, p, m) {
                        this.propType = "shape", this.comp = d.comp, this.container = d, this.elem = d, this.data = p, this.k = !1, this.kf = !1, this._mdf = !1;
                        var h = m === 3 ? p.pt.k : p.ks.k;
                        this.v = shapePool.clone(h), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = n, this.effectsSequence = []
                    }

                    function o(d) {
                        this.effectsSequence.push(d), this.container.addDynamicProperty(this)
                    }

                    function l(d, p, m) {
                        this.propType = "shape", this.comp = d.comp, this.elem = d, this.container = d, this.offsetTime = d.data.st, this.keyframes = m === 3 ? p.pt.k : p.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                        var h = this.keyframes[0].s[0].i.length;
                        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, h), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = n, this._caching = {
                            lastFrame: e,
                            lastIndex: 0
                        }, this.effectsSequence = [r.bind(this)]
                    }
                    s.prototype.interpolateShape = t, s.prototype.getValue = a, s.prototype.setVValue = i, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = t, l.prototype.setVValue = i, l.prototype.addEffect = o;
                    var c = function() {
                            var d = roundCorner;

                            function p(m, h) {
                                this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = h.d, this.elem = m, this.comp = m.comp, this.frameId = -1, this.initDynamicPropertyContainer(m), this.p = PropertyFactory.getProp(m, h.p, 1, 0, this), this.s = PropertyFactory.getProp(m, h.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                            }
                            return p.prototype = {
                                reset: n,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                },
                                convertEllToPath: function() {
                                    var m = this.p.v[0],
                                        h = this.p.v[1],
                                        v = this.s.v[0] / 2,
                                        y = this.s.v[1] / 2,
                                        b = this.d !== 3,
                                        S = this.v;
                                    S.v[0][0] = m, S.v[0][1] = h - y, S.v[1][0] = b ? m + v : m - v, S.v[1][1] = h, S.v[2][0] = m, S.v[2][1] = h + y, S.v[3][0] = b ? m - v : m + v, S.v[3][1] = h, S.i[0][0] = b ? m - v * d : m + v * d, S.i[0][1] = h - y, S.i[1][0] = b ? m + v : m - v, S.i[1][1] = h - y * d, S.i[2][0] = b ? m + v * d : m - v * d, S.i[2][1] = h + y, S.i[3][0] = b ? m - v : m + v, S.i[3][1] = h + y * d, S.o[0][0] = b ? m + v * d : m - v * d, S.o[0][1] = h - y, S.o[1][0] = b ? m + v : m - v, S.o[1][1] = h + y * d, S.o[2][0] = b ? m - v * d : m + v * d, S.o[2][1] = h + y, S.o[3][0] = b ? m - v : m + v, S.o[3][1] = h - y * d
                                }
                            }, extendPrototype([DynamicPropertyContainer], p), p
                        }(),
                        u = function() {
                            function d(p, m) {
                                this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = p, this.comp = p.comp, this.data = m, this.frameId = -1, this.d = m.d, this.initDynamicPropertyContainer(p), m.sy === 1 ? (this.ir = PropertyFactory.getProp(p, m.ir, 0, 0, this), this.is = PropertyFactory.getProp(p, m.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(p, m.pt, 0, 0, this), this.p = PropertyFactory.getProp(p, m.p, 1, 0, this), this.r = PropertyFactory.getProp(p, m.r, 0, degToRads, this), this.or = PropertyFactory.getProp(p, m.or, 0, 0, this), this.os = PropertyFactory.getProp(p, m.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                            }
                            return d.prototype = {
                                reset: n,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                },
                                convertStarToPath: function() {
                                    var p, m, h, v, y = 2 * Math.floor(this.pt.v),
                                        b = 2 * Math.PI / y,
                                        S = !0,
                                        x = this.or.v,
                                        T = this.ir.v,
                                        _ = this.os.v,
                                        P = this.is.v,
                                        F = 2 * Math.PI * x / (2 * y),
                                        w = 2 * Math.PI * T / (2 * y),
                                        C = -Math.PI / 2;
                                    C += this.r.v;
                                    var R = this.data.d === 3 ? -1 : 1;
                                    for (this.v._length = 0, p = 0; p < y; p += 1) {
                                        h = S ? _ : P, v = S ? F : w;
                                        var O = (m = S ? x : T) * Math.cos(C),
                                            M = m * Math.sin(C),
                                            N = O === 0 && M === 0 ? 0 : M / Math.sqrt(O * O + M * M),
                                            z = O === 0 && M === 0 ? 0 : -O / Math.sqrt(O * O + M * M);
                                        O += +this.p.v[0], M += +this.p.v[1], this.v.setTripleAt(O, M, O - N * v * h * R, M - z * v * h * R, O + N * v * h * R, M + z * v * h * R, p, !0), S = !S, C += b * R
                                    }
                                },
                                convertPolygonToPath: function() {
                                    var p, m = Math.floor(this.pt.v),
                                        h = 2 * Math.PI / m,
                                        v = this.or.v,
                                        y = this.os.v,
                                        b = 2 * Math.PI * v / (4 * m),
                                        S = .5 * -Math.PI,
                                        x = this.data.d === 3 ? -1 : 1;
                                    for (S += this.r.v, this.v._length = 0, p = 0; p < m; p += 1) {
                                        var T = v * Math.cos(S),
                                            _ = v * Math.sin(S),
                                            P = T === 0 && _ === 0 ? 0 : _ / Math.sqrt(T * T + _ * _),
                                            F = T === 0 && _ === 0 ? 0 : -T / Math.sqrt(T * T + _ * _);
                                        T += +this.p.v[0], _ += +this.p.v[1], this.v.setTripleAt(T, _, T - P * b * y * x, _ - F * b * y * x, T + P * b * y * x, _ + F * b * y * x, p, !0), S += h * x
                                    }
                                    this.paths.length = 0, this.paths[0] = this.v
                                }
                            }, extendPrototype([DynamicPropertyContainer], d), d
                        }(),
                        f = function() {
                            function d(p, m) {
                                this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = p, this.comp = p.comp, this.frameId = -1, this.d = m.d, this.initDynamicPropertyContainer(p), this.p = PropertyFactory.getProp(p, m.p, 1, 0, this), this.s = PropertyFactory.getProp(p, m.s, 1, 0, this), this.r = PropertyFactory.getProp(p, m.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                            }
                            return d.prototype = {
                                convertRectToPath: function() {
                                    var p = this.p.v[0],
                                        m = this.p.v[1],
                                        h = this.s.v[0] / 2,
                                        v = this.s.v[1] / 2,
                                        y = bmMin(h, v, this.r.v),
                                        b = y * (1 - roundCorner);
                                    this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(p + h, m - v + y, p + h, m - v + y, p + h, m - v + b, 0, !0), this.v.setTripleAt(p + h, m + v - y, p + h, m + v - b, p + h, m + v - y, 1, !0), y !== 0 ? (this.v.setTripleAt(p + h - y, m + v, p + h - y, m + v, p + h - b, m + v, 2, !0), this.v.setTripleAt(p - h + y, m + v, p - h + b, m + v, p - h + y, m + v, 3, !0), this.v.setTripleAt(p - h, m + v - y, p - h, m + v - y, p - h, m + v - b, 4, !0), this.v.setTripleAt(p - h, m - v + y, p - h, m - v + b, p - h, m - v + y, 5, !0), this.v.setTripleAt(p - h + y, m - v, p - h + y, m - v, p - h + b, m - v, 6, !0), this.v.setTripleAt(p + h - y, m - v, p + h - b, m - v, p + h - y, m - v, 7, !0)) : (this.v.setTripleAt(p - h, m + v, p - h + b, m + v, p - h, m + v, 2), this.v.setTripleAt(p - h, m - v, p - h, m - v + b, p - h, m - v, 3))) : (this.v.setTripleAt(p + h, m - v + y, p + h, m - v + b, p + h, m - v + y, 0, !0), y !== 0 ? (this.v.setTripleAt(p + h - y, m - v, p + h - y, m - v, p + h - b, m - v, 1, !0), this.v.setTripleAt(p - h + y, m - v, p - h + b, m - v, p - h + y, m - v, 2, !0), this.v.setTripleAt(p - h, m - v + y, p - h, m - v + y, p - h, m - v + b, 3, !0), this.v.setTripleAt(p - h, m + v - y, p - h, m + v - b, p - h, m + v - y, 4, !0), this.v.setTripleAt(p - h + y, m + v, p - h + y, m + v, p - h + b, m + v, 5, !0), this.v.setTripleAt(p + h - y, m + v, p + h - b, m + v, p + h - y, m + v, 6, !0), this.v.setTripleAt(p + h, m + v - y, p + h, m + v - y, p + h, m + v - b, 7, !0)) : (this.v.setTripleAt(p - h, m - v, p - h + b, m - v, p - h, m - v, 1, !0), this.v.setTripleAt(p - h, m + v, p - h, m + v - b, p - h, m + v, 2, !0), this.v.setTripleAt(p + h, m + v, p + h - b, m + v, p + h, m + v, 3, !0)))
                                },
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                },
                                reset: n
                            }, extendPrototype([DynamicPropertyContainer], d), d
                        }(),
                        g = {
                            getShapeProp: function(d, p, m) {
                                var h;
                                return m === 3 || m === 4 ? h = (m === 3 ? p.pt : p.ks).k.length ? new l(d, p, m) : new s(d, p, m) : m === 5 ? h = new f(d, p) : m === 6 ? h = new c(d, p) : m === 7 && (h = new u(d, p)), h.k && d.addDynamicProperty(h), h
                            },
                            getConstructorFunction: function() {
                                return s
                            },
                            getKeyframedConstructorFunction: function() {
                                return l
                            }
                        };
                    return g
                }(),
                Matrix = function() {
                    var e = Math.cos,
                        t = Math.sin,
                        r = Math.tan,
                        n = Math.round;

                    function i() {
                        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                    }

                    function a(A) {
                        if (A === 0) return this;
                        var D = e(A),
                            L = t(A);
                        return this._t(D, -L, 0, 0, L, D, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function s(A) {
                        if (A === 0) return this;
                        var D = e(A),
                            L = t(A);
                        return this._t(1, 0, 0, 0, 0, D, -L, 0, 0, L, D, 0, 0, 0, 0, 1)
                    }

                    function o(A) {
                        if (A === 0) return this;
                        var D = e(A),
                            L = t(A);
                        return this._t(D, 0, L, 0, 0, 1, 0, 0, -L, 0, D, 0, 0, 0, 0, 1)
                    }

                    function l(A) {
                        if (A === 0) return this;
                        var D = e(A),
                            L = t(A);
                        return this._t(D, -L, 0, 0, L, D, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function c(A, D) {
                        return this._t(1, D, A, 1, 0, 0)
                    }

                    function u(A, D) {
                        return this.shear(r(A), r(D))
                    }

                    function f(A, D) {
                        var L = e(D),
                            H = t(D);
                        return this._t(L, H, 0, 0, -H, L, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(A), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(L, -H, 0, 0, H, L, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                    }

                    function g(A, D, L) {
                        return L || L === 0 || (L = 1), A === 1 && D === 1 && L === 1 ? this : this._t(A, 0, 0, 0, 0, D, 0, 0, 0, 0, L, 0, 0, 0, 0, 1)
                    }

                    function d(A, D, L, H, U, j, Y, Q, J, X, re, Ae, he, Ee, Pe, Te) {
                        return this.props[0] = A, this.props[1] = D, this.props[2] = L, this.props[3] = H, this.props[4] = U, this.props[5] = j, this.props[6] = Y, this.props[7] = Q, this.props[8] = J, this.props[9] = X, this.props[10] = re, this.props[11] = Ae, this.props[12] = he, this.props[13] = Ee, this.props[14] = Pe, this.props[15] = Te, this
                    }

                    function p(A, D, L) {
                        return L = L || 0, A !== 0 || D !== 0 || L !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, A, D, L, 1) : this
                    }

                    function m(A, D, L, H, U, j, Y, Q, J, X, re, Ae, he, Ee, Pe, Te) {
                        var ne = this.props;
                        if (A === 1 && D === 0 && L === 0 && H === 0 && U === 0 && j === 1 && Y === 0 && Q === 0 && J === 0 && X === 0 && re === 1 && Ae === 0) return ne[12] = ne[12] * A + ne[15] * he, ne[13] = ne[13] * j + ne[15] * Ee, ne[14] = ne[14] * re + ne[15] * Pe, ne[15] *= Te, this._identityCalculated = !1, this;
                        var Me = ne[0],
                            xt = ne[1],
                            Je = ne[2],
                            I = ne[3],
                            q = ne[4],
                            k = ne[5],
                            G = ne[6],
                            B = ne[7],
                            V = ne[8],
                            K = ne[9],
                            Z = ne[10],
                            oe = ne[11],
                            W = ne[12],
                            ie = ne[13],
                            ae = ne[14],
                            ve = ne[15];
                        return ne[0] = Me * A + xt * U + Je * J + I * he, ne[1] = Me * D + xt * j + Je * X + I * Ee, ne[2] = Me * L + xt * Y + Je * re + I * Pe, ne[3] = Me * H + xt * Q + Je * Ae + I * Te, ne[4] = q * A + k * U + G * J + B * he, ne[5] = q * D + k * j + G * X + B * Ee, ne[6] = q * L + k * Y + G * re + B * Pe, ne[7] = q * H + k * Q + G * Ae + B * Te, ne[8] = V * A + K * U + Z * J + oe * he, ne[9] = V * D + K * j + Z * X + oe * Ee, ne[10] = V * L + K * Y + Z * re + oe * Pe, ne[11] = V * H + K * Q + Z * Ae + oe * Te, ne[12] = W * A + ie * U + ae * J + ve * he, ne[13] = W * D + ie * j + ae * X + ve * Ee, ne[14] = W * L + ie * Y + ae * re + ve * Pe, ne[15] = W * H + ie * Q + ae * Ae + ve * Te, this._identityCalculated = !1, this
                    }

                    function h(A) {
                        var D = A.props;
                        return this.transform(D[0], D[1], D[2], D[3], D[4], D[5], D[6], D[7], D[8], D[9], D[10], D[11], D[12], D[13], D[14], D[15])
                    }

                    function v() {
                        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
                    }

                    function y(A) {
                        for (var D = 0; D < 16;) {
                            if (A.props[D] !== this.props[D]) return !1;
                            D += 1
                        }
                        return !0
                    }

                    function b(A) {
                        var D;
                        for (D = 0; D < 16; D += 1) A.props[D] = this.props[D];
                        return A
                    }

                    function S(A) {
                        var D;
                        for (D = 0; D < 16; D += 1) this.props[D] = A[D]
                    }

                    function x(A, D, L) {
                        return {
                            x: A * this.props[0] + D * this.props[4] + L * this.props[8] + this.props[12],
                            y: A * this.props[1] + D * this.props[5] + L * this.props[9] + this.props[13],
                            z: A * this.props[2] + D * this.props[6] + L * this.props[10] + this.props[14]
                        }
                    }

                    function T(A, D, L) {
                        return A * this.props[0] + D * this.props[4] + L * this.props[8] + this.props[12]
                    }

                    function _(A, D, L) {
                        return A * this.props[1] + D * this.props[5] + L * this.props[9] + this.props[13]
                    }

                    function P(A, D, L) {
                        return A * this.props[2] + D * this.props[6] + L * this.props[10] + this.props[14]
                    }

                    function F() {
                        var A = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                            D = this.props[5] / A,
                            L = -this.props[1] / A,
                            H = -this.props[4] / A,
                            U = this.props[0] / A,
                            j = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / A,
                            Y = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / A,
                            Q = new Matrix;
                        return Q.props[0] = D, Q.props[1] = L, Q.props[4] = H, Q.props[5] = U, Q.props[12] = j, Q.props[13] = Y, Q
                    }

                    function w(A) {
                        return this.getInverseMatrix().applyToPointArray(A[0], A[1], A[2] || 0)
                    }

                    function C(A) {
                        var D, L = A.length,
                            H = [];
                        for (D = 0; D < L; D += 1) H[D] = w(A[D]);
                        return H
                    }

                    function R(A, D, L) {
                        var H = createTypedArray("float32", 6);
                        if (this.isIdentity()) H[0] = A[0], H[1] = A[1], H[2] = D[0], H[3] = D[1], H[4] = L[0], H[5] = L[1];
                        else {
                            var U = this.props[0],
                                j = this.props[1],
                                Y = this.props[4],
                                Q = this.props[5],
                                J = this.props[12],
                                X = this.props[13];
                            H[0] = A[0] * U + A[1] * Y + J, H[1] = A[0] * j + A[1] * Q + X, H[2] = D[0] * U + D[1] * Y + J, H[3] = D[0] * j + D[1] * Q + X, H[4] = L[0] * U + L[1] * Y + J, H[5] = L[0] * j + L[1] * Q + X
                        }
                        return H
                    }

                    function O(A, D, L) {
                        return this.isIdentity() ? [A, D, L] : [A * this.props[0] + D * this.props[4] + L * this.props[8] + this.props[12], A * this.props[1] + D * this.props[5] + L * this.props[9] + this.props[13], A * this.props[2] + D * this.props[6] + L * this.props[10] + this.props[14]]
                    }

                    function M(A, D) {
                        if (this.isIdentity()) return A + "," + D;
                        var L = this.props;
                        return Math.round(100 * (A * L[0] + D * L[4] + L[12])) / 100 + "," + Math.round(100 * (A * L[1] + D * L[5] + L[13])) / 100
                    }

                    function N() {
                        for (var A = 0, D = this.props, L = "matrix3d("; A < 16;) L += n(1e4 * D[A]) / 1e4, L += A === 15 ? ")" : ",", A += 1;
                        return L
                    }

                    function z(A) {
                        return A < 1e-6 && A > 0 || A > -1e-6 && A < 0 ? n(1e4 * A) / 1e4 : A
                    }

                    function $() {
                        var A = this.props;
                        return "matrix(" + z(A[0]) + "," + z(A[1]) + "," + z(A[4]) + "," + z(A[5]) + "," + z(A[12]) + "," + z(A[13]) + ")"
                    }
                    return function() {
                        this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = u, this.skewFromAxis = f, this.shear = c, this.scale = g, this.setTransform = d, this.translate = p, this.transform = m, this.multiply = h, this.applyToPoint = x, this.applyToX = T, this.applyToY = _, this.applyToZ = P, this.applyToPointArray = O, this.applyToTriplePoints = R, this.applyToPointStringified = M, this.toCSS = N, this.to2dCSS = $, this.clone = b, this.cloneFromProps = S, this.equals = y, this.inversePoints = C, this.inversePoint = w, this.getInverseMatrix = F, this._t = this.transform, this.isIdentity = v, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                    }
                }();

            function _typeof$3(e) {
                return _typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$3(e)
            }
            var lottie = {},
                standalone = "__[STANDALONE]__",
                animationData = "__[ANIMATIONDATA]__",
                renderer = "";

            function setLocation(e) {
                setLocationHref(e)
            }

            function searchAnimations() {
                standalone === !0 ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
            }

            function setSubframeRendering(e) {
                setSubframeEnabled(e)
            }

            function setPrefix(e) {
                setIdPrefix(e)
            }

            function loadAnimation(e) {
                return standalone === !0 && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
            }

            function setQuality(e) {
                if (typeof e == "string") switch (e) {
                    case "high":
                        setDefaultCurveSegments(200);
                        break;
                    default:
                    case "medium":
                        setDefaultCurveSegments(50);
                        break;
                    case "low":
                        setDefaultCurveSegments(10)
                } else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
                getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
            }

            function inBrowser() {
                return typeof navigator < "u"
            }

            function installPlugin(e, t) {
                e === "expressions" && setExpressionsPlugin(t)
            }

            function getFactory(e) {
                switch (e) {
                    case "propertyFactory":
                        return PropertyFactory;
                    case "shapePropertyFactory":
                        return ShapePropertyFactory;
                    case "matrix":
                        return Matrix;
                    default:
                        return null
                }
            }

            function checkReady() {
                document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
            }

            function getQueryVariable(e) {
                for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
                    var n = t[r].split("=");
                    if (decodeURIComponent(n[0]) == e) return decodeURIComponent(n[1])
                }
                return null
            }
            lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
            var queryString = "";
            if (standalone) {
                var scripts = document.getElementsByTagName("script"),
                    index = scripts.length - 1,
                    myScript = scripts[index] || {
                        src: ""
                    };
                queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
            }
            var readyStateCheckInterval = setInterval(checkReady, 100);
            try {
                (typeof exports > "u" ? "undefined" : _typeof$3(exports)) === "object" && typeof module < "u" || typeof define == "function" && define.amd || (window.bodymovin = lottie)
            } catch (e) {}
            var ShapeModifiers = function() {
                var e = {},
                    t = {};
                return e.registerModifier = function(r, n) {
                    t[r] || (t[r] = n)
                }, e.getModifier = function(r, n, i) {
                    return new t[r](n, i)
                }, e
            }();

            function ShapeModifier() {}

            function TrimModifier() {}

            function PuckerAndBloatModifier() {}
            ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(e) {
                if (!this.closed) {
                    e.sh.container.addDynamicProperty(e.sh);
                    var t = {
                        shape: e.sh,
                        data: e,
                        localShapeCollection: shapeCollectionPool.newShapeCollection()
                    };
                    this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
                }
            }, ShapeModifier.prototype.init = function(e, t) {
                this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }, ShapeModifier.prototype.processKeys = function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
            }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) {
                this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
            }, TrimModifier.prototype.addShapeToModifier = function(e) {
                e.pathsData = []
            }, TrimModifier.prototype.calculateShapeEdges = function(e, t, r, n, i) {
                var a = [];
                t <= 1 ? a.push({
                    s: e,
                    e: t
                }) : e >= 1 ? a.push({
                    s: e - 1,
                    e: t - 1
                }) : (a.push({
                    s: e,
                    e: 1
                }), a.push({
                    s: 0,
                    e: t - 1
                }));
                var s, o, l = [],
                    c = a.length;
                for (s = 0; s < c; s += 1) {
                    var u, f;
                    (o = a[s]).e * i < n || o.s * i > n + r || (u = o.s * i <= n ? 0 : (o.s * i - n) / r, f = o.e * i >= n + r ? 1 : (o.e * i - n) / r, l.push([u, f]))
                }
                return l.length || l.push([0, 0]), l
            }, TrimModifier.prototype.releasePathsData = function(e) {
                var t, r = e.length;
                for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
                return e.length = 0, e
            }, TrimModifier.prototype.processShapes = function(e) {
                var t, r, n, i;
                if (this._mdf || e) {
                    var a = this.o.v % 360 / 360;
                    if (a < 0 && (a += 1), (t = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
                        var s = t;
                        t = r, r = s
                    }
                    t = 1e-4 * Math.round(1e4 * t), r = 1e-4 * Math.round(1e4 * r), this.sValue = t, this.eValue = r
                } else t = this.sValue, r = this.eValue;
                var o, l, c, u, f, g = this.shapes.length,
                    d = 0;
                if (r === t)
                    for (i = 0; i < g; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape._mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection, this._mdf && (this.shapes[i].pathsData.length = 0);
                else if (r === 1 && t === 0 || r === 0 && t === 1) {
                    if (this._mdf)
                        for (i = 0; i < g; i += 1) this.shapes[i].pathsData.length = 0, this.shapes[i].shape._mdf = !0
                } else {
                    var p, m, h = [];
                    for (i = 0; i < g; i += 1)
                        if ((p = this.shapes[i]).shape._mdf || this._mdf || e || this.m === 2) {
                            if (l = (n = p.shape.paths)._length, f = 0, !p.shape._mdf && p.pathsData.length) f = p.totalShapeLength;
                            else {
                                for (c = this.releasePathsData(p.pathsData), o = 0; o < l; o += 1) u = bez.getSegmentsLength(n.shapes[o]), c.push(u), f += u.totalLength;
                                p.totalShapeLength = f, p.pathsData = c
                            }
                            d += f, p.shape._mdf = !0
                        } else p.shape.paths = p.localShapeCollection;
                    var v, y = t,
                        b = r,
                        S = 0;
                    for (i = g - 1; i >= 0; i -= 1)
                        if ((p = this.shapes[i]).shape._mdf) {
                            for ((m = p.localShapeCollection).releaseShapes(), this.m === 2 && g > 1 ? (v = this.calculateShapeEdges(t, r, p.totalShapeLength, S, d), S += p.totalShapeLength) : v = [
                                    [y, b]
                                ], l = v.length, o = 0; o < l; o += 1) {
                                y = v[o][0], b = v[o][1], h.length = 0, b <= 1 ? h.push({
                                    s: p.totalShapeLength * y,
                                    e: p.totalShapeLength * b
                                }) : y >= 1 ? h.push({
                                    s: p.totalShapeLength * (y - 1),
                                    e: p.totalShapeLength * (b - 1)
                                }) : (h.push({
                                    s: p.totalShapeLength * y,
                                    e: p.totalShapeLength
                                }), h.push({
                                    s: 0,
                                    e: p.totalShapeLength * (b - 1)
                                }));
                                var x = this.addShapes(p, h[0]);
                                if (h[0].s !== h[0].e) {
                                    if (h.length > 1)
                                        if (p.shape.paths.shapes[p.shape.paths._length - 1].c) {
                                            var T = x.pop();
                                            this.addPaths(x, m), x = this.addShapes(p, h[1], T)
                                        } else this.addPaths(x, m), x = this.addShapes(p, h[1]);
                                    this.addPaths(x, m)
                                }
                            }
                            p.shape.paths = m
                        }
                }
            }, TrimModifier.prototype.addPaths = function(e, t) {
                var r, n = e.length;
                for (r = 0; r < n; r += 1) t.addShape(e[r])
            }, TrimModifier.prototype.addSegment = function(e, t, r, n, i, a, s) {
                i.setXYAt(t[0], t[1], "o", a), i.setXYAt(r[0], r[1], "i", a + 1), s && i.setXYAt(e[0], e[1], "v", a), i.setXYAt(n[0], n[1], "v", a + 1)
            }, TrimModifier.prototype.addSegmentFromArray = function(e, t, r, n) {
                t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), n && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
            }, TrimModifier.prototype.addShapes = function(e, t, r) {
                var n, i, a, s, o, l, c, u, f = e.pathsData,
                    g = e.shape.paths.shapes,
                    d = e.shape.paths._length,
                    p = 0,
                    m = [],
                    h = !0;
                for (r ? (o = r._length, u = r._length) : (r = shapePool.newElement(), o = 0, u = 0), m.push(r), n = 0; n < d; n += 1) {
                    for (l = f[n].lengths, r.c = g[n].c, a = g[n].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
                        if (p + (s = l[i - 1]).addedLength < t.s) p += s.addedLength, r.c = !1;
                        else {
                            if (p > t.e) {
                                r.c = !1;
                                break
                            }
                            t.s <= p && t.e >= p + s.addedLength ? (this.addSegment(g[n].v[i - 1], g[n].o[i - 1], g[n].i[i], g[n].v[i], r, o, h), h = !1) : (c = bez.getNewSegment(g[n].v[i - 1], g[n].v[i], g[n].o[i - 1], g[n].i[i], (t.s - p) / s.addedLength, (t.e - p) / s.addedLength, l[i - 1]), this.addSegmentFromArray(c, r, o, h), h = !1, r.c = !1), p += s.addedLength, o += 1
                        }
                    if (g[n].c && l.length) {
                        if (s = l[i - 1], p <= t.e) {
                            var v = l[i - 1].addedLength;
                            t.s <= p && t.e >= p + v ? (this.addSegment(g[n].v[i - 1], g[n].o[i - 1], g[n].i[0], g[n].v[0], r, o, h), h = !1) : (c = bez.getNewSegment(g[n].v[i - 1], g[n].v[0], g[n].o[i - 1], g[n].i[0], (t.s - p) / v, (t.e - p) / v, l[i - 1]), this.addSegmentFromArray(c, r, o, h), h = !1, r.c = !1)
                        } else r.c = !1;
                        p += s.addedLength, o += 1
                    }
                    if (r._length && (r.setXYAt(r.v[u][0], r.v[u][1], "i", u), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), p > t.e) break;
                    n < d - 1 && (r = shapePool.newElement(), h = !0, m.push(r), o = 0)
                }
                return m
            }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(e, t) {
                this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
            }, PuckerAndBloatModifier.prototype.processPath = function(e, t) {
                var r = t / 100,
                    n = [0, 0],
                    i = e._length,
                    a = 0;
                for (a = 0; a < i; a += 1) n[0] += e.v[a][0], n[1] += e.v[a][1];
                n[0] /= i, n[1] /= i;
                var s, o, l, c, u, f, g = shapePool.newElement();
                for (g.c = e.c, a = 0; a < i; a += 1) s = e.v[a][0] + (n[0] - e.v[a][0]) * r, o = e.v[a][1] + (n[1] - e.v[a][1]) * r, l = e.o[a][0] + (n[0] - e.o[a][0]) * -r, c = e.o[a][1] + (n[1] - e.o[a][1]) * -r, u = e.i[a][0] + (n[0] - e.i[a][0]) * -r, f = e.i[a][1] + (n[1] - e.i[a][1]) * -r, g.setTripleAt(s, o, l, c, u, f, a);
                return g
            }, PuckerAndBloatModifier.prototype.processShapes = function(e) {
                var t, r, n, i, a, s, o = this.shapes.length,
                    l = this.amount.v;
                if (l !== 0)
                    for (r = 0; r < o; r += 1) {
                        if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                            for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            };
            var TransformPropertyFactory = function() {
                var e = [0, 0];

                function t(r, n, i) {
                    if (this.elem = r, this.frameId = -1, this.propType = "transform", this.data = n, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || r), n.p && n.p.s ? (this.px = PropertyFactory.getProp(r, n.p.x, 0, 0, this), this.py = PropertyFactory.getProp(r, n.p.y, 0, 0, this), n.p.z && (this.pz = PropertyFactory.getProp(r, n.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(r, n.p || {
                            k: [0, 0, 0]
                        }, 1, 0, this), n.rx) {
                        if (this.rx = PropertyFactory.getProp(r, n.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(r, n.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(r, n.rz, 0, degToRads, this), n.or.k[0].ti) {
                            var a, s = n.or.k.length;
                            for (a = 0; a < s; a += 1) n.or.k[a].to = null, n.or.k[a].ti = null
                        }
                        this.or = PropertyFactory.getProp(r, n.or, 1, degToRads, this), this.or.sh = !0
                    } else this.r = PropertyFactory.getProp(r, n.r || {
                        k: 0
                    }, 0, degToRads, this);
                    n.sk && (this.sk = PropertyFactory.getProp(r, n.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(r, n.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(r, n.a || {
                        k: [0, 0, 0]
                    }, 1, 0, this), this.s = PropertyFactory.getProp(r, n.s || {
                        k: [100, 100, 100]
                    }, 1, .01, this), n.o ? this.o = PropertyFactory.getProp(r, n.o, 0, .01, r) : this.o = {
                        _mdf: !1,
                        v: 1
                    }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                }
                return t.prototype = {
                    applyToMatrix: function(r) {
                        var n = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || n, this.a && r.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && r.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && r.skewFromAxis(-this.sk.v, this.sa.v), this.r ? r.rotate(-this.r.v) : r.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? r.translate(this.px.v, this.py.v, -this.pz.v) : r.translate(this.px.v, this.py.v, 0) : r.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    },
                    getValue: function(r) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || r) {
                                var n;
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    var i, a;
                                    if (n = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / n, 0), a = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / n, 0), a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / n, 0)) : (i = this.p.pv, a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / n, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        i = [], a = [];
                                        var s = this.px,
                                            o = this.py;
                                        s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (i[0] = s.getValueAtTime((s.keyframes[0].t + .01) / n, 0), i[1] = o.getValueAtTime((o.keyframes[0].t + .01) / n, 0), a[0] = s.getValueAtTime(s.keyframes[0].t / n, 0), a[1] = o.getValueAtTime(o.keyframes[0].t / n, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (i[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / n, 0), i[1] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / n, 0), a[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / n, 0), a[1] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / n, 0)) : (i = [s.pv, o.pv], a[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / n, s.offsetTime), a[1] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / n, o.offsetTime))
                                    } else i = a = e;
                                    this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    },
                    precalculateMatrix: function() {
                        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    },
                    autoOrient: function() {}
                }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function(r) {
                    this._addDynamicProperty(r), this.elem.addDynamicProperty(r), this._isDirty = !0
                }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                    getTransformProperty: function(r, n, i) {
                        return new t(r, n, i)
                    }
                }
            }();

            function RepeaterModifier() {}

            function RoundCornersModifier() {}

            function floatEqual(e, t) {
                return 1e5 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t))
            }

            function floatZero(e) {
                return Math.abs(e) <= 1e-5
            }

            function lerp(e, t, r) {
                return e * (1 - r) + t * r
            }

            function lerpPoint(e, t, r) {
                return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)]
            }

            function quadRoots(e, t, r) {
                if (e === 0) return [];
                var n = t * t - 4 * e * r;
                if (n < 0) return [];
                var i = -t / (2 * e);
                if (n === 0) return [i];
                var a = Math.sqrt(n) / (2 * e);
                return [i - a, i + a]
            }

            function polynomialCoefficients(e, t, r, n) {
                return [3 * t - e - 3 * r + n, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
            }

            function singlePoint(e) {
                return new PolynomialBezier(e, e, e, e, !1)
            }

            function PolynomialBezier(e, t, r, n, i) {
                i && pointEqual(e, t) && (t = lerpPoint(e, n, 1 / 3)), i && pointEqual(r, n) && (r = lerpPoint(e, n, 2 / 3));
                var a = polynomialCoefficients(e[0], t[0], r[0], n[0]),
                    s = polynomialCoefficients(e[1], t[1], r[1], n[1]);
                this.a = [a[0], s[0]], this.b = [a[1], s[1]], this.c = [a[2], s[2]], this.d = [a[3], s[3]], this.points = [e, t, r, n]
            }

            function extrema(e, t) {
                var r = e.points[0][t],
                    n = e.points[e.points.length - 1][t];
                if (r > n) {
                    var i = n;
                    n = r, r = i
                }
                for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), s = 0; s < a.length; s += 1)
                    if (a[s] > 0 && a[s] < 1) {
                        var o = e.point(a[s])[t];
                        o < r ? r = o : o > n && (n = o)
                    }
                return {
                    min: r,
                    max: n
                }
            }

            function intersectData(e, t, r) {
                var n = e.boundingBox();
                return {
                    cx: n.cx,
                    cy: n.cy,
                    width: n.width,
                    height: n.height,
                    bez: e,
                    t: (t + r) / 2,
                    t1: t,
                    t2: r
                }
            }

            function splitData(e) {
                var t = e.bez.split(.5);
                return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)]
            }

            function boxIntersect(e, t) {
                return 2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height
            }

            function intersectsImpl(e, t, r, n, i, a) {
                if (boxIntersect(e, t))
                    if (r >= a || e.width <= n && e.height <= n && t.width <= n && t.height <= n) i.push([e.t, t.t]);
                    else {
                        var s = splitData(e),
                            o = splitData(t);
                        intersectsImpl(s[0], o[0], r + 1, n, i, a), intersectsImpl(s[0], o[1], r + 1, n, i, a), intersectsImpl(s[1], o[0], r + 1, n, i, a), intersectsImpl(s[1], o[1], r + 1, n, i, a)
                    }
            }

            function crossProduct(e, t) {
                return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
            }

            function lineIntersection(e, t, r, n) {
                var i = [e[0], e[1], 1],
                    a = [t[0], t[1], 1],
                    s = [r[0], r[1], 1],
                    o = [n[0], n[1], 1],
                    l = crossProduct(crossProduct(i, a), crossProduct(s, o));
                return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
            }

            function polarOffset(e, t, r) {
                return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r]
            }

            function pointDistance(e, t) {
                return Math.hypot(e[0] - t[0], e[1] - t[1])
            }

            function pointEqual(e, t) {
                return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1])
            }

            function ZigZagModifier() {}

            function setPoint(e, t, r, n, i, a, s) {
                var o = r - Math.PI / 2,
                    l = r + Math.PI / 2,
                    c = t[0] + Math.cos(r) * n * i,
                    u = t[1] - Math.sin(r) * n * i;
                e.setTripleAt(c, u, c + Math.cos(o) * a, u - Math.sin(o) * a, c + Math.cos(l) * s, u - Math.sin(l) * s, e.length())
            }

            function getPerpendicularVector(e, t) {
                var r = [t[0] - e[0], t[1] - e[1]],
                    n = .5 * -Math.PI;
                return [Math.cos(n) * r[0] - Math.sin(n) * r[1], Math.sin(n) * r[0] + Math.cos(n) * r[1]]
            }

            function getProjectingAngle(e, t) {
                var r = t === 0 ? e.length() - 1 : t - 1,
                    n = (t + 1) % e.length(),
                    i = getPerpendicularVector(e.v[r], e.v[n]);
                return Math.atan2(0, 1) - Math.atan2(i[1], i[0])
            }

            function zigZagCorner(e, t, r, n, i, a, s) {
                var o = getProjectingAngle(t, r),
                    l = t.v[r % t._length],
                    c = t.v[r === 0 ? t._length - 1 : r - 1],
                    u = t.v[(r + 1) % t._length],
                    f = a === 2 ? Math.sqrt(Math.pow(l[0] - c[0], 2) + Math.pow(l[1] - c[1], 2)) : 0,
                    g = a === 2 ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0;
                setPoint(e, t.v[r % t._length], o, s, n, g / (2 * (i + 1)), f / (2 * (i + 1)), a)
            }

            function zigZagSegment(e, t, r, n, i, a) {
                for (var s = 0; s < n; s += 1) {
                    var o = (s + 1) / (n + 1),
                        l = i === 2 ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
                        c = t.normalAngle(o);
                    setPoint(e, t.point(o), c, a, r, l / (2 * (n + 1)), l / (2 * (n + 1)), i), a = -a
                }
                return a
            }

            function linearOffset(e, t, r) {
                var n = Math.atan2(t[0] - e[0], t[1] - e[1]);
                return [polarOffset(e, n, r), polarOffset(t, n, r)]
            }

            function offsetSegment(e, t) {
                var r, n, i, a, s, o, l;
                r = (l = linearOffset(e.points[0], e.points[1], t))[0], n = l[1], i = (l = linearOffset(e.points[1], e.points[2], t))[0], a = l[1], s = (l = linearOffset(e.points[2], e.points[3], t))[0], o = l[1];
                var c = lineIntersection(r, n, i, a);
                c === null && (c = n);
                var u = lineIntersection(s, o, i, a);
                return u === null && (u = s), new PolynomialBezier(r, c, u, o)
            }

            function joinLines(e, t, r, n, i) {
                var a = t.points[3],
                    s = r.points[0];
                if (n === 3 || pointEqual(a, s)) return a;
                if (n === 2) {
                    var o = -t.tangentAngle(1),
                        l = -r.tangentAngle(0) + Math.PI,
                        c = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
                        u = c ? pointDistance(c, a) : pointDistance(a, s) / 2,
                        f = polarOffset(a, o, 2 * u * roundCorner);
                    return e.setXYAt(f[0], f[1], "o", e.length() - 1), f = polarOffset(s, l, 2 * u * roundCorner), e.setTripleAt(s[0], s[1], s[0], s[1], f[0], f[1], e.length()), s
                }
                var g = lineIntersection(pointEqual(a, t.points[2]) ? t.points[0] : t.points[2], a, s, pointEqual(s, r.points[1]) ? r.points[3] : r.points[1]);
                return g && pointDistance(g, a) < i ? (e.setTripleAt(g[0], g[1], g[0], g[1], g[0], g[1], e.length()), g) : a
            }

            function getIntersection(e, t) {
                var r = e.intersections(t);
                return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
            }

            function pruneSegmentIntersection(e, t) {
                var r = e.slice(),
                    n = t.slice(),
                    i = getIntersection(e[e.length - 1], t[0]);
                return i && (r[e.length - 1] = e[e.length - 1].split(i[0])[0], n[0] = t[0].split(i[1])[1]), e.length > 1 && t.length > 1 && (i = getIntersection(e[0], t[t.length - 1])) ? [
                    [e[0].split(i[0])[0]],
                    [t[t.length - 1].split(i[1])[1]]
                ] : [r, n]
            }

            function pruneIntersections(e) {
                for (var t, r = 1; r < e.length; r += 1) t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
                return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e
            }

            function offsetSegmentSplit(e, t) {
                var r, n, i, a, s = e.inflectionPoints();
                if (s.length === 0) return [offsetSegment(e, t)];
                if (s.length === 1 || floatEqual(s[1], 1)) return r = (i = e.split(s[0]))[0], n = i[1], [offsetSegment(r, t), offsetSegment(n, t)];
                r = (i = e.split(s[0]))[0];
                var o = (s[1] - s[0]) / (1 - s[0]);
                return a = (i = i[1].split(o))[0], n = i[1], [offsetSegment(r, t), offsetSegment(a, t), offsetSegment(n, t)]
            }

            function OffsetPathModifier() {}

            function getFontProperties(e) {
                for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", n = "normal", i = t.length, a = 0; a < i; a += 1) switch (t[a].toLowerCase()) {
                    case "italic":
                        n = "italic";
                        break;
                    case "bold":
                        r = "700";
                        break;
                    case "black":
                        r = "900";
                        break;
                    case "medium":
                        r = "500";
                        break;
                    case "regular":
                    case "normal":
                        r = "400";
                        break;
                    case "light":
                    case "thin":
                        r = "200"
                }
                return {
                    style: n,
                    weight: e.fWeight || r
                }
            }
            extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
                this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
            }, RepeaterModifier.prototype.applyTransforms = function(e, t, r, n, i, a) {
                var s = a ? -1 : 1,
                    o = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
                    l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
                e.translate(n.p.v[0] * s * i, n.p.v[1] * s * i, n.p.v[2]), t.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), t.rotate(-n.r.v * s * i), t.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(n.a.v[0], n.a.v[1], n.a.v[2])
            }, RepeaterModifier.prototype.init = function(e, t, r, n) {
                for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0;) r -= 1, this._elements.unshift(t[r]);
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }, RepeaterModifier.prototype.resetElements = function(e) {
                var t, r = e.length;
                for (t = 0; t < r; t += 1) e[t]._processed = !1, e[t].ty === "gr" && this.resetElements(e[t].it)
            }, RepeaterModifier.prototype.cloneElements = function(e) {
                var t = JSON.parse(JSON.stringify(e));
                return this.resetElements(t), t
            }, RepeaterModifier.prototype.changeGroupRender = function(e, t) {
                var r, n = e.length;
                for (r = 0; r < n; r += 1) e[r]._render = t, e[r].ty === "gr" && this.changeGroupRender(e[r].it, t)
            }, RepeaterModifier.prototype.processShapes = function(e) {
                var t, r, n, i, a, s = !1;
                if (this._mdf || e) {
                    var o, l = Math.ceil(this.c.v);
                    if (this._groups.length < l) {
                        for (; this._groups.length < l;) {
                            var c = {
                                it: this.cloneElements(this._elements),
                                ty: "gr"
                            };
                            c.it.push({
                                a: {
                                    a: 0,
                                    ix: 1,
                                    k: [0, 0]
                                },
                                nm: "Transform",
                                o: {
                                    a: 0,
                                    ix: 7,
                                    k: 100
                                },
                                p: {
                                    a: 0,
                                    ix: 2,
                                    k: [0, 0]
                                },
                                r: {
                                    a: 1,
                                    ix: 6,
                                    k: [{
                                        s: 0,
                                        e: 0,
                                        t: 0
                                    }, {
                                        s: 0,
                                        e: 0,
                                        t: 1
                                    }]
                                },
                                s: {
                                    a: 0,
                                    ix: 3,
                                    k: [100, 100]
                                },
                                sa: {
                                    a: 0,
                                    ix: 5,
                                    k: 0
                                },
                                sk: {
                                    a: 0,
                                    ix: 4,
                                    k: 0
                                },
                                ty: "tr"
                            }), this.arr.splice(0, 0, c), this._groups.splice(0, 0, c), this._currentCopies += 1
                        }
                        this.elem.reloadShapes(), s = !0
                    }
                    for (a = 0, n = 0; n <= this._groups.length - 1; n += 1) {
                        if (o = a < l, this._groups[n]._render = o, this.changeGroupRender(this._groups[n].it, o), !o) {
                            var u = this.elemsData[n].it,
                                f = u[u.length - 1];
                            f.transform.op.v !== 0 ? (f.transform.op._mdf = !0, f.transform.op.v = 0) : f.transform.op._mdf = !1
                        }
                        a += 1
                    }
                    this._currentCopies = l;
                    var g = this.o.v,
                        d = g % 1,
                        p = g > 0 ? Math.floor(g) : Math.ceil(g),
                        m = this.pMatrix.props,
                        h = this.rMatrix.props,
                        v = this.sMatrix.props;
                    this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                    var y, b, S = 0;
                    if (g > 0) {
                        for (; S < p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), S += 1;
                        d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), S += d)
                    } else if (g < 0) {
                        for (; S > p;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), S -= 1;
                        d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), S -= d)
                    }
                    for (n = this.data.m === 1 ? 0 : this._currentCopies - 1, i = this.data.m === 1 ? 1 : -1, a = this._currentCopies; a;) {
                        if (b = (r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), S !== 0) {
                            for ((n !== 0 && i === 1 || n !== this._currentCopies - 1 && i === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9], h[10], h[11], h[12], h[13], h[14], h[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
                            this.matrix.reset()
                        } else
                            for (this.matrix.reset(), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
                        S += 1, a -= 1, n += i
                    }
                } else
                    for (a = this._currentCopies, n = 0, i = 1; a;) r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, n += i;
                return s
            }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
                this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
            }, RoundCornersModifier.prototype.processPath = function(e, t) {
                var r, n = shapePool.newElement();
                n.c = e.c;
                var i, a, s, o, l, c, u, f, g, d, p, m, h = e._length,
                    v = 0;
                for (r = 0; r < h; r += 1) i = e.v[r], s = e.o[r], a = e.i[r], i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? r !== 0 && r !== h - 1 || e.c ? (o = r === 0 ? e.v[h - 1] : e.v[r - 1], c = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = p = i[0] + (o[0] - i[0]) * c, f = m = i[1] - (i[1] - o[1]) * c, g = u - (u - i[0]) * roundCorner, d = f - (f - i[1]) * roundCorner, n.setTripleAt(u, f, g, d, p, m, v), v += 1, o = r === h - 1 ? e.v[0] : e.v[r + 1], c = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = g = i[0] + (o[0] - i[0]) * c, f = d = i[1] + (o[1] - i[1]) * c, p = u - (u - i[0]) * roundCorner, m = f - (f - i[1]) * roundCorner, n.setTripleAt(u, f, g, d, p, m, v), v += 1) : (n.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], v), v += 1) : (n.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], v), v += 1);
                return n
            }, RoundCornersModifier.prototype.processShapes = function(e) {
                var t, r, n, i, a, s, o = this.shapes.length,
                    l = this.rd.v;
                if (l !== 0)
                    for (r = 0; r < o; r += 1) {
                        if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                            for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }, PolynomialBezier.prototype.point = function(e) {
                return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]]
            }, PolynomialBezier.prototype.derivative = function(e) {
                return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]]
            }, PolynomialBezier.prototype.tangentAngle = function(e) {
                var t = this.derivative(e);
                return Math.atan2(t[1], t[0])
            }, PolynomialBezier.prototype.normalAngle = function(e) {
                var t = this.derivative(e);
                return Math.atan2(t[0], t[1])
            }, PolynomialBezier.prototype.inflectionPoints = function() {
                var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                if (floatZero(e)) return [];
                var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e,
                    r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
                if (r < 0) return [];
                var n = Math.sqrt(r);
                return floatZero(n) ? n > 0 && n < 1 ? [t] : [] : [t - n, t + n].filter(function(i) {
                    return i > 0 && i < 1
                })
            }, PolynomialBezier.prototype.split = function(e) {
                if (e <= 0) return [singlePoint(this.points[0]), this];
                if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                var t = lerpPoint(this.points[0], this.points[1], e),
                    r = lerpPoint(this.points[1], this.points[2], e),
                    n = lerpPoint(this.points[2], this.points[3], e),
                    i = lerpPoint(t, r, e),
                    a = lerpPoint(r, n, e),
                    s = lerpPoint(i, a, e);
                return [new PolynomialBezier(this.points[0], t, i, s, !0), new PolynomialBezier(s, a, n, this.points[3], !0)]
            }, PolynomialBezier.prototype.bounds = function() {
                return {
                    x: extrema(this, 0),
                    y: extrema(this, 1)
                }
            }, PolynomialBezier.prototype.boundingBox = function() {
                var e = this.bounds();
                return {
                    left: e.x.min,
                    right: e.x.max,
                    top: e.y.min,
                    bottom: e.y.max,
                    width: e.x.max - e.x.min,
                    height: e.y.max - e.y.min,
                    cx: (e.x.max + e.x.min) / 2,
                    cy: (e.y.max + e.y.min) / 2
                }
            }, PolynomialBezier.prototype.intersections = function(e, t, r) {
                t === void 0 && (t = 2), r === void 0 && (r = 7);
                var n = [];
                return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, n, r), n
            }, PolynomialBezier.shapeSegment = function(e, t) {
                var r = (t + 1) % e.length();
                return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0)
            }, PolynomialBezier.shapeSegmentInverted = function(e, t) {
                var r = (t + 1) % e.length();
                return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0)
            }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(e, t) {
                this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
            }, ZigZagModifier.prototype.processPath = function(e, t, r, n) {
                var i = e._length,
                    a = shapePool.newElement();
                if (a.c = e.c, e.c || (i -= 1), i === 0) return a;
                var s = -1,
                    o = PolynomialBezier.shapeSegment(e, 0);
                zigZagCorner(a, e, 0, t, r, n, s);
                for (var l = 0; l < i; l += 1) s = zigZagSegment(a, o, t, r, n, -s), o = l !== i - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % i) : null, zigZagCorner(a, e, l + 1, t, r, n, s);
                return a
            }, ZigZagModifier.prototype.processShapes = function(e) {
                var t, r, n, i, a, s, o = this.shapes.length,
                    l = this.amplitude.v,
                    c = Math.max(0, Math.round(this.frequency.v)),
                    u = this.pointsType.v;
                if (l !== 0)
                    for (r = 0; r < o; r += 1) {
                        if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                            for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l, c, u));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(e, t) {
                this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
            }, OffsetPathModifier.prototype.processPath = function(e, t, r, n) {
                var i = shapePool.newElement();
                i.c = e.c;
                var a, s, o, l = e.length();
                e.c || (l -= 1);
                var c = [];
                for (a = 0; a < l; a += 1) o = PolynomialBezier.shapeSegment(e, a), c.push(offsetSegmentSplit(o, t));
                if (!e.c)
                    for (a = l - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(e, a), c.push(offsetSegmentSplit(o, t));
                c = pruneIntersections(c);
                var u = null,
                    f = null;
                for (a = 0; a < c.length; a += 1) {
                    var g = c[a];
                    for (f && (u = joinLines(i, f, g[0], r, n)), f = g[g.length - 1], s = 0; s < g.length; s += 1) o = g[s], u && pointEqual(o.points[0], u) ? i.setXYAt(o.points[1][0], o.points[1][1], "o", i.length() - 1) : i.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], i.length()), i.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], i.length()), u = o.points[3]
                }
                return c.length && joinLines(i, f, c[0][0], r, n), i
            }, OffsetPathModifier.prototype.processShapes = function(e) {
                var t, r, n, i, a, s, o = this.shapes.length,
                    l = this.amount.v,
                    c = this.miterLimit.v,
                    u = this.lineJoin;
                if (l !== 0)
                    for (r = 0; r < o; r += 1) {
                        if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                            for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l, u, c));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            };
            var FontManager = function() {
                var e = {
                        w: 0,
                        size: 0,
                        shapes: [],
                        data: {
                            shapes: []
                        }
                    },
                    t = [];
                t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                var r = 127988,
                    n = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

                function i(u, f) {
                    var g = createTag("span");
                    g.setAttribute("aria-hidden", !0), g.style.fontFamily = f;
                    var d = createTag("span");
                    d.innerText = "giItT1WQy@!-/#", g.style.position = "absolute", g.style.left = "-10000px", g.style.top = "-10000px", g.style.fontSize = "300px", g.style.fontVariant = "normal", g.style.fontStyle = "normal", g.style.fontWeight = "normal", g.style.letterSpacing = "0", g.appendChild(d), document.body.appendChild(g);
                    var p = d.offsetWidth;
                    return d.style.fontFamily = function(m) {
                        var h, v = m.split(","),
                            y = v.length,
                            b = [];
                        for (h = 0; h < y; h += 1) v[h] !== "sans-serif" && v[h] !== "monospace" && b.push(v[h]);
                        return b.join(",")
                    }(u) + ", " + f, {
                        node: d,
                        w: p,
                        parent: g
                    }
                }

                function a(u, f) {
                    var g, d = document.body && f ? "svg" : "canvas",
                        p = getFontProperties(u);
                    if (d === "svg") {
                        var m = createNS("text");
                        m.style.fontSize = "100px", m.setAttribute("font-family", u.fFamily), m.setAttribute("font-style", p.style), m.setAttribute("font-weight", p.weight), m.textContent = "1", u.fClass ? (m.style.fontFamily = "inherit", m.setAttribute("class", u.fClass)) : m.style.fontFamily = u.fFamily, f.appendChild(m), g = m
                    } else {
                        var h = new OffscreenCanvas(500, 500).getContext("2d");
                        h.font = p.style + " " + p.weight + " 100px " + u.fFamily, g = h
                    }
                    return {
                        measureText: function(v) {
                            return d === "svg" ? (g.textContent = v, g.getComputedTextLength()) : g.measureText(v).width
                        }
                    }
                }

                function s(u) {
                    var f = 0,
                        g = u.charCodeAt(0);
                    if (g >= 55296 && g <= 56319) {
                        var d = u.charCodeAt(1);
                        d >= 56320 && d <= 57343 && (f = 1024 * (g - 55296) + d - 56320 + 65536)
                    }
                    return f
                }

                function o(u) {
                    var f = s(u);
                    return f >= 127462 && f <= 127487
                }
                var l = function() {
                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                };
                l.isModifier = function(u, f) {
                    var g = u.toString(16) + f.toString(16);
                    return n.indexOf(g) !== -1
                }, l.isZeroWidthJoiner = function(u) {
                    return u === 8205
                }, l.isFlagEmoji = function(u) {
                    return o(u.substr(0, 2)) && o(u.substr(2, 2))
                }, l.isRegionalCode = o, l.isCombinedCharacter = function(u) {
                    return t.indexOf(u) !== -1
                }, l.isRegionalFlag = function(u, f) {
                    var g = s(u.substr(f, 2));
                    if (g !== r) return !1;
                    var d = 0;
                    for (f += 2; d < 5;) {
                        if ((g = s(u.substr(f, 2))) < 917601 || g > 917626) return !1;
                        d += 1, f += 2
                    }
                    return s(u.substr(f, 2)) === 917631
                }, l.isVariationSelector = function(u) {
                    return u === 65039
                }, l.BLACK_FLAG_CODE_POINT = r;
                var c = {
                    addChars: function(u) {
                        if (u) {
                            var f;
                            this.chars || (this.chars = []);
                            var g, d, p = u.length,
                                m = this.chars.length;
                            for (f = 0; f < p; f += 1) {
                                for (g = 0, d = !1; g < m;) this.chars[g].style === u[f].style && this.chars[g].fFamily === u[f].fFamily && this.chars[g].ch === u[f].ch && (d = !0), g += 1;
                                d || (this.chars.push(u[f]), m += 1)
                            }
                        }
                    },
                    addFonts: function(u, f) {
                        if (u) {
                            if (this.chars) return this.isLoaded = !0, void(this.fonts = u.list);
                            if (!document.body) return this.isLoaded = !0, u.list.forEach(function(T) {
                                T.helper = a(T), T.cache = {}
                            }), void(this.fonts = u.list);
                            var g, d = u.list,
                                p = d.length,
                                m = p;
                            for (g = 0; g < p; g += 1) {
                                var h, v, y = !0;
                                if (d[g].loaded = !1, d[g].monoCase = i(d[g].fFamily, "monospace"), d[g].sansCase = i(d[g].fFamily, "sans-serif"), d[g].fPath) {
                                    if (d[g].fOrigin === "p" || d[g].origin === 3) {
                                        if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + d[g].fFamily + '"], style[f-origin="3"][f-family="' + d[g].fFamily + '"]')).length > 0 && (y = !1), y) {
                                            var b = createTag("style");
                                            b.setAttribute("f-forigin", d[g].fOrigin), b.setAttribute("f-origin", d[g].origin), b.setAttribute("f-family", d[g].fFamily), b.type = "text/css", b.innerText = "@font-face {font-family: " + d[g].fFamily + "; font-style: normal; src: url('" + d[g].fPath + "');}", f.appendChild(b)
                                        }
                                    } else if (d[g].fOrigin === "g" || d[g].origin === 1) {
                                        for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), v = 0; v < h.length; v += 1) h[v].href.indexOf(d[g].fPath) !== -1 && (y = !1);
                                        if (y) {
                                            var S = createTag("link");
                                            S.setAttribute("f-forigin", d[g].fOrigin), S.setAttribute("f-origin", d[g].origin), S.type = "text/css", S.rel = "stylesheet", S.href = d[g].fPath, document.body.appendChild(S)
                                        }
                                    } else if (d[g].fOrigin === "t" || d[g].origin === 2) {
                                        for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), v = 0; v < h.length; v += 1) d[g].fPath === h[v].src && (y = !1);
                                        if (y) {
                                            var x = createTag("link");
                                            x.setAttribute("f-forigin", d[g].fOrigin), x.setAttribute("f-origin", d[g].origin), x.setAttribute("rel", "stylesheet"), x.setAttribute("href", d[g].fPath), f.appendChild(x)
                                        }
                                    }
                                } else d[g].loaded = !0, m -= 1;
                                d[g].helper = a(d[g], f), d[g].cache = {}, this.fonts.push(d[g])
                            }
                            m === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else this.isLoaded = !0
                    },
                    getCharData: function(u, f, g) {
                        for (var d = 0, p = this.chars.length; d < p;) {
                            if (this.chars[d].ch === u && this.chars[d].style === f && this.chars[d].fFamily === g) return this.chars[d];
                            d += 1
                        }
                        return (typeof u == "string" && u.charCodeAt(0) !== 13 || !u) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", u, f, g)), e
                    },
                    getFontByName: function(u) {
                        for (var f = 0, g = this.fonts.length; f < g;) {
                            if (this.fonts[f].fName === u) return this.fonts[f];
                            f += 1
                        }
                        return this.fonts[0]
                    },
                    measureText: function(u, f, g) {
                        var d = this.getFontByName(f),
                            p = u;
                        if (!d.cache[p]) {
                            var m = d.helper;
                            if (u === " ") {
                                var h = m.measureText("|" + u + "|"),
                                    v = m.measureText("||");
                                d.cache[p] = (h - v) / 100
                            } else d.cache[p] = m.measureText(u) / 100
                        }
                        return d.cache[p] * g
                    },
                    checkLoadedFonts: function() {
                        var u, f, g, d = this.fonts.length,
                            p = d;
                        for (u = 0; u < d; u += 1) this.fonts[u].loaded ? p -= 1 : this.fonts[u].fOrigin === "n" || this.fonts[u].origin === 0 ? this.fonts[u].loaded = !0 : (f = this.fonts[u].monoCase.node, g = this.fonts[u].monoCase.w, f.offsetWidth !== g ? (p -= 1, this.fonts[u].loaded = !0) : (f = this.fonts[u].sansCase.node, g = this.fonts[u].sansCase.w, f.offsetWidth !== g && (p -= 1, this.fonts[u].loaded = !0)), this.fonts[u].loaded && (this.fonts[u].sansCase.parent.parentNode.removeChild(this.fonts[u].sansCase.parent), this.fonts[u].monoCase.parent.parentNode.removeChild(this.fonts[u].monoCase.parent)));
                        p !== 0 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    },
                    setIsLoaded: function() {
                        this.isLoaded = !0
                    }
                };
                return l.prototype = c, l
            }();

            function SlotManager(e) {
                this.animationData = e
            }

            function slotFactory(e) {
                return new SlotManager(e)
            }

            function RenderableElement() {}
            SlotManager.prototype.getProp = function(e) {
                return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e
            }, RenderableElement.prototype = {
                initRenderable: function() {
                    this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                },
                addRenderableComponent: function(e) {
                    this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e)
                },
                removeRenderableComponent: function(e) {
                    this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
                },
                prepareRenderableFrame: function(e) {
                    this.checkLayerLimits(e)
                },
                checkTransparency: function() {
                    this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                },
                checkLayerLimits: function(e) {
                    this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                },
                renderRenderable: function() {
                    var e, t = this.renderableComponents.length;
                    for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
                },
                sourceRectAtTime: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100
                    }
                },
                getLayerSize: function() {
                    return this.data.ty === 5 ? {
                        w: this.data.textData.width,
                        h: this.data.textData.height
                    } : {
                        w: this.data.width,
                        h: this.data.height
                    }
                }
            };
            var getBlendMode = (blendModeEnums = {
                    0: "source-over",
                    1: "multiply",
                    2: "screen",
                    3: "overlay",
                    4: "darken",
                    5: "lighten",
                    6: "color-dodge",
                    7: "color-burn",
                    8: "hard-light",
                    9: "soft-light",
                    10: "difference",
                    11: "exclusion",
                    12: "hue",
                    13: "saturation",
                    14: "color",
                    15: "luminosity"
                }, function(e) {
                    return blendModeEnums[e] || ""
                }),
                blendModeEnums;

            function SliderEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
            }

            function AngleEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
            }

            function ColorEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
            }

            function PointEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
            }

            function LayerIndexEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
            }

            function MaskIndexEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
            }

            function CheckboxEffect(e, t, r) {
                this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
            }

            function NoValueEffect() {
                this.p = {}
            }

            function EffectsManager(e, t) {
                var r, n = e.ef || [];
                this.effectElements = [];
                var i, a = n.length;
                for (r = 0; r < a; r += 1) i = new GroupEffect(n[r], t), this.effectElements.push(i)
            }

            function GroupEffect(e, t) {
                this.init(e, t)
            }

            function BaseElement() {}

            function FrameElement() {}

            function FootageElement(e, t, r) {
                this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r)
            }

            function AudioElement(e, t, r) {
                this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
                var n = this.globalData.getAssetsPath(this.assetData);
                this.audio = this.globalData.audioController.createAudio(n), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
                    _placeholder: !0
                }, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {
                    k: [100]
                }, 1, .01, this)
            }

            function BaseRenderer() {}
            extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
                var r;
                this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
                var n, i = this.data.ef.length,
                    a = this.data.ef;
                for (r = 0; r < i; r += 1) {
                    switch (n = null, a[r].ty) {
                        case 0:
                            n = new SliderEffect(a[r], t, this);
                            break;
                        case 1:
                            n = new AngleEffect(a[r], t, this);
                            break;
                        case 2:
                            n = new ColorEffect(a[r], t, this);
                            break;
                        case 3:
                            n = new PointEffect(a[r], t, this);
                            break;
                        case 4:
                        case 7:
                            n = new CheckboxEffect(a[r], t, this);
                            break;
                        case 10:
                            n = new LayerIndexEffect(a[r], t, this);
                            break;
                        case 11:
                            n = new MaskIndexEffect(a[r], t, this);
                            break;
                        case 5:
                            n = new EffectsManager(a[r], t, this);
                            break;
                        default:
                            n = new NoValueEffect(a[r], t, this)
                    }
                    n && this.effectElements.push(n)
                }
            }, BaseElement.prototype = {
                checkMasks: function() {
                    if (!this.data.hasMask) return !1;
                    for (var e = 0, t = this.data.masksProperties.length; e < t;) {
                        if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1) return !0;
                        e += 1
                    }
                    return !1
                },
                initExpressions: function() {
                    var e = getExpressionInterfaces();
                    if (e) {
                        var t = e("layer"),
                            r = e("effects"),
                            n = e("shape"),
                            i = e("text"),
                            a = e("comp");
                        this.layerInterface = t(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                        var s = r.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(s), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = n(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = i(this), this.layerInterface.text = this.layerInterface.textInterface)
                    }
                },
                setBlendMode: function() {
                    var e = getBlendMode(this.data.bm);
                    (this.baseElement || this.layerElement).style["mix-blend-mode"] = e
                },
                initBaseData: function(e, t, r) {
                    this.globalData = t, this.comp = r, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                },
                getType: function() {
                    return this.type
                },
                sourceRectAtTime: function() {}
            }, FrameElement.prototype = {
                initFrame: function() {
                    this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                },
                prepareProperties: function(e, t) {
                    var r, n = this.dynamicProperties.length;
                    for (r = 0; r < n; r += 1)(t || this._isParent && this.dynamicProperties[r].propType === "transform") && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                },
                addDynamicProperty: function(e) {
                    this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e)
                }
            }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                return null
            }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                var e = getExpressionInterfaces();
                if (e) {
                    var t = e("footage");
                    this.layerInterface = t(this)
                }
            }, FootageElement.prototype.getFootageData = function() {
                return this.footageData
            }, AudioElement.prototype.prepareFrame = function(e) {
                if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr;
                else {
                    var t = this.tm.v;
                    this._currentTime = t
                }
                this._volume = this.lv.v[0];
                var r = this._volume * this._volumeMultiplier;
                this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
            }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
            }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                this.audio.pause(), this._isPlaying = !1
            }, AudioElement.prototype.pause = function() {
                this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
            }, AudioElement.prototype.resume = function() {
                this._canPlay = !0
            }, AudioElement.prototype.setRate = function(e) {
                this.audio.rate(e)
            }, AudioElement.prototype.volume = function(e) {
                this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume)
            }, AudioElement.prototype.getBaseElement = function() {
                return null
            }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(e) {
                var t, r, n = this.layers.length;
                for (this.completeLayers = !0, t = n - 1; t >= 0; t -= 1) this.elements[t] || (r = this.layers[t]).ip - r.st <= e - this.layers[t].st && r.op - r.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
                this.checkPendingElements()
            }, BaseRenderer.prototype.createItem = function(e) {
                switch (e.ty) {
                    case 2:
                        return this.createImage(e);
                    case 0:
                        return this.createComp(e);
                    case 1:
                        return this.createSolid(e);
                    case 3:
                    default:
                        return this.createNull(e);
                    case 4:
                        return this.createShape(e);
                    case 5:
                        return this.createText(e);
                    case 6:
                        return this.createAudio(e);
                    case 13:
                        return this.createCamera(e);
                    case 15:
                        return this.createFootage(e)
                }
            }, BaseRenderer.prototype.createCamera = function() {
                throw new Error("You're using a 3d camera. Try the html renderer.")
            }, BaseRenderer.prototype.createAudio = function(e) {
                return new AudioElement(e, this.globalData, this)
            }, BaseRenderer.prototype.createFootage = function(e) {
                return new FootageElement(e, this.globalData, this)
            }, BaseRenderer.prototype.buildAllItems = function() {
                var e, t = this.layers.length;
                for (e = 0; e < t; e += 1) this.buildItem(e);
                this.checkPendingElements()
            }, BaseRenderer.prototype.includeLayers = function(e) {
                var t;
                this.completeLayers = !1;
                var r, n = e.length,
                    i = this.layers.length;
                for (t = 0; t < n; t += 1)
                    for (r = 0; r < i;) {
                        if (this.layers[r].id === e[t].id) {
                            this.layers[r] = e[t];
                            break
                        }
                        r += 1
                    }
            }, BaseRenderer.prototype.setProjectInterface = function(e) {
                this.globalData.projectInterface = e
            }, BaseRenderer.prototype.initItems = function() {
                this.globalData.progressiveLoad || this.buildAllItems()
            }, BaseRenderer.prototype.buildElementParenting = function(e, t, r) {
                for (var n = this.elements, i = this.layers, a = 0, s = i.length; a < s;) i[a].ind == t && (n[a] && n[a] !== !0 ? (r.push(n[a]), n[a].setAsParent(), i[a].parent !== void 0 ? this.buildElementParenting(e, i[a].parent, r) : e.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(e))), a += 1
            }, BaseRenderer.prototype.addPendingElement = function(e) {
                this.pendingElements.push(e)
            }, BaseRenderer.prototype.searchExtraCompositions = function(e) {
                var t, r = e.length;
                for (t = 0; t < r; t += 1)
                    if (e[t].xt) {
                        var n = this.createComp(e[t]);
                        n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
                    }
            }, BaseRenderer.prototype.getElementById = function(e) {
                var t, r = this.elements.length;
                for (t = 0; t < r; t += 1)
                    if (this.elements[t].data.ind === e) return this.elements[t];
                return null
            }, BaseRenderer.prototype.getElementByPath = function(e) {
                var t, r = e.shift();
                if (typeof r == "number") t = this.elements[r];
                else {
                    var n, i = this.elements.length;
                    for (n = 0; n < i; n += 1)
                        if (this.elements[n].data.nm === r) {
                            t = this.elements[n];
                            break
                        }
                }
                return e.length === 0 ? t : t.getElementByPath(e)
            }, BaseRenderer.prototype.setupGlobalData = function(e, t) {
                this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
                    w: e.w,
                    h: e.h
                }
            };
            var effectTypes = {
                TRANSFORM_EFFECT: "transformEFfect"
            };

            function TransformElement() {}

            function MaskElement(e, t, r) {
                this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                var n, i, a = this.globalData.defs,
                    s = this.masksProperties ? this.masksProperties.length : 0;
                this.viewData = createSizedArray(s), this.solidPath = "";
                var o, l, c, u, f, g, d = this.masksProperties,
                    p = 0,
                    m = [],
                    h = createElementID(),
                    v = "clipPath",
                    y = "clip-path";
                for (n = 0; n < s; n += 1)
                    if ((d[n].mode !== "a" && d[n].mode !== "n" || d[n].inv || d[n].o.k !== 100 || d[n].o.x) && (v = "mask", y = "mask"), d[n].mode !== "s" && d[n].mode !== "i" || p !== 0 ? c = null : ((c = createNS("rect")).setAttribute("fill", "#ffffff"), c.setAttribute("width", this.element.comp.data.w || 0), c.setAttribute("height", this.element.comp.data.h || 0), m.push(c)), i = createNS("path"), d[n].mode === "n") this.viewData[n] = {
                        op: PropertyFactory.getProp(this.element, d[n].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
                        elem: i,
                        lastPath: ""
                    }, a.appendChild(i);
                    else {
                        var b;
                        if (p += 1, i.setAttribute("fill", d[n].mode === "s" ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), d[n].x.k !== 0 ? (v = "mask", y = "mask", g = PropertyFactory.getProp(this.element, d[n].x, 0, null, this.element), b = createElementID(), (u = createNS("filter")).setAttribute("id", b), (f = createNS("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), u.appendChild(f), a.appendChild(u), i.setAttribute("stroke", d[n].mode === "s" ? "#000000" : "#ffffff")) : (f = null, g = null), this.storedData[n] = {
                                elem: i,
                                x: g,
                                expan: f,
                                lastPath: "",
                                lastOperator: "",
                                filterId: b,
                                lastRadius: 0
                            }, d[n].mode === "i") {
                            l = m.length;
                            var S = createNS("g");
                            for (o = 0; o < l; o += 1) S.appendChild(m[o]);
                            var x = createNS("mask");
                            x.setAttribute("mask-type", "alpha"), x.setAttribute("id", h + "_" + p), x.appendChild(i), a.appendChild(x), S.setAttribute("mask", "url(" + getLocationHref() + "#" + h + "_" + p + ")"), m.length = 0, m.push(S)
                        } else m.push(i);
                        d[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
                            elem: i,
                            lastPath: "",
                            op: PropertyFactory.getProp(this.element, d[n].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, d[n], 3),
                            invRect: c
                        }, this.viewData[n].prop.k || this.drawPath(d[n], this.viewData[n].prop.v, this.viewData[n])
                    }
                for (this.maskElement = createNS(v), s = m.length, n = 0; n < s; n += 1) this.maskElement.appendChild(m[n]);
                p > 0 && (this.maskElement.setAttribute("id", h), this.element.maskedElement.setAttribute(y, "url(" + getLocationHref() + "#" + h + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
            }
            TransformElement.prototype = {
                initTransform: function() {
                    var e = new Matrix;
                    this.finalTransform = {
                        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                            o: 0
                        },
                        _matMdf: !1,
                        _localMatMdf: !1,
                        _opMdf: !1,
                        mat: e,
                        localMat: e,
                        localOpacity: 1
                    }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                },
                renderTransform: function() {
                    if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                        var e, t = this.finalTransform.mat,
                            r = 0,
                            n = this.hierarchy.length;
                        if (!this.finalTransform._matMdf)
                            for (; r < n;) {
                                if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                    this.finalTransform._matMdf = !0;
                                    break
                                }
                                r += 1
                            }
                        if (this.finalTransform._matMdf)
                            for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), r = 0; r < n; r += 1) t.multiply(this.hierarchy[r].finalTransform.mProp.v)
                    }
                    this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
                },
                renderLocalTransform: function() {
                    if (this.localTransforms) {
                        var e = 0,
                            t = this.localTransforms.length;
                        if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                            for (; e < t;) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
                        if (this.finalTransform._localMatMdf) {
                            var r = this.finalTransform.localMat;
                            for (this.localTransforms[0].matrix.clone(r), e = 1; e < t; e += 1) {
                                var n = this.localTransforms[e].matrix;
                                r.multiply(n)
                            }
                            r.multiply(this.finalTransform.mat)
                        }
                        if (this.finalTransform._opMdf) {
                            var i = this.finalTransform.localOpacity;
                            for (e = 0; e < t; e += 1) i *= .01 * this.localTransforms[e].opacity;
                            this.finalTransform.localOpacity = i
                        }
                    }
                },
                searchEffectTransforms: function() {
                    if (this.renderableEffectsManager) {
                        var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                        if (e.length) {
                            this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                            var t = 0,
                                r = e.length;
                            for (t = 0; t < r; t += 1) this.localTransforms.push(e[t])
                        }
                    }
                },
                globalToLocal: function(e) {
                    var t = [];
                    t.push(this.finalTransform);
                    for (var r, n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && t.splice(0, 0, i.finalTransform), i = i.comp) : n = !1;
                    var a, s = t.length;
                    for (r = 0; r < s; r += 1) a = t[r].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0];
                    return e
                },
                mHelper: new Matrix
            }, MaskElement.prototype.getMaskProperty = function(e) {
                return this.viewData[e].prop
            }, MaskElement.prototype.renderFrame = function(e) {
                var t, r = this.element.finalTransform.mat,
                    n = this.masksProperties.length;
                for (t = 0; t < n; t += 1)
                    if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), this.masksProperties[t].mode !== "n" && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e))) {
                        var i = this.storedData[t].expan;
                        this.storedData[t].x.v < 0 ? (this.storedData[t].lastOperator !== "erode" && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[t].filterId + ")")), i.setAttribute("radius", -this.storedData[t].x.v)) : (this.storedData[t].lastOperator !== "dilate" && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
                    }
            }, MaskElement.prototype.getMaskelement = function() {
                return this.maskElement
            }, MaskElement.prototype.createLayerSolidPath = function() {
                var e = "M0,0 ";
                return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " "
            }, MaskElement.prototype.drawPath = function(e, t, r) {
                var n, i, a = " M" + t.v[0][0] + "," + t.v[0][1];
                for (i = t._length, n = 1; n < i; n += 1) a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[n][0] + "," + t.i[n][1] + " " + t.v[n][0] + "," + t.v[n][1];
                if (t.c && i > 1 && (a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== a) {
                    var s = "";
                    r.elem && (t.c && (s = e.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
                }
            }, MaskElement.prototype.destroy = function() {
                this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
            };
            var filtersFactory = function() {
                    var e = {};
                    return e.createFilter = function(t, r) {
                        var n = createNS("filter");
                        return n.setAttribute("id", t), r !== !0 && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n
                    }, e.createAlphaToLuminanceFilter = function() {
                        var t = createNS("feColorMatrix");
                        return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                    }, e
                }(),
                featureSupport = function() {
                    var e = {
                        maskType: !0,
                        svgLumaHidden: !0,
                        offscreenCanvas: typeof OffscreenCanvas < "u"
                    };
                    return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
                }(),
                registeredEffects$1 = {},
                idPrefix = "filter_result_";

            function SVGEffects(e) {
                var t, r, n = "SourceGraphic",
                    i = e.data.ef ? e.data.ef.length : 0,
                    a = createElementID(),
                    s = filtersFactory.createFilter(a, !0),
                    o = 0;
                for (this.filters = [], t = 0; t < i; t += 1) {
                    r = null;
                    var l = e.data.ef[t].ty;
                    registeredEffects$1[l] && (r = new registeredEffects$1[l].effect(s, e.effectsManager.effectElements[t], e, idPrefix + o, n), n = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), r && this.filters.push(r)
                }
                o && (e.globalData.defs.appendChild(s), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && e.addRenderableComponent(this)
            }

            function registerEffect$1(e, t, r) {
                registeredEffects$1[e] = {
                    effect: t,
                    countsAsEffect: r
                }
            }

            function SVGBaseElement() {}

            function HierarchyElement() {}

            function RenderableDOMElement() {}

            function IImageElement(e, t, r) {
                this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, r), this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h
                }
            }

            function ProcessedElement(e, t) {
                this.elem = e, this.pos = t
            }

            function IShapeElement() {}
            SVGEffects.prototype.renderFrame = function(e) {
                var t, r = this.filters.length;
                for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
            }, SVGEffects.prototype.getEffects = function(e) {
                var t, r = this.filters.length,
                    n = [];
                for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
                return n
            }, SVGBaseElement.prototype = {
                initRendererElement: function() {
                    this.layerElement = createNS("g")
                },
                createContainerElements: function() {
                    this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                    var e = null;
                    if (this.data.td) {
                        this.matteMasks = {};
                        var t = createNS("g");
                        t.setAttribute("id", this.layerId), t.appendChild(this.layerElement), e = t, this.globalData.defs.appendChild(t)
                    } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                    if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
                        var r = createNS("clipPath"),
                            n = createNS("path");
                        n.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                        var i = createElementID();
                        if (r.setAttribute("id", i), r.appendChild(n), this.globalData.defs.appendChild(r), this.checkMasks()) {
                            var a = createNS("g");
                            a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                        } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")")
                    }
                    this.data.bm !== 0 && this.setBlendMode()
                },
                renderElement: function() {
                    this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
                },
                destroyBaseElement: function() {
                    this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                },
                getBaseElement: function() {
                    return this.data.hd ? null : this.baseElement
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
                },
                getMatte: function(e) {
                    if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
                        var t, r, n, i, a = this.layerId + "_" + e;
                        if (e === 1 || e === 3) {
                            var s = createNS("mask");
                            s.setAttribute("id", a), s.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), s.appendChild(n), this.globalData.defs.appendChild(s), featureSupport.maskType || e !== 1 || (s.setAttribute("mask-type", "luminance"), t = createElementID(), r = filtersFactory.createFilter(t), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(n), s.appendChild(i), i.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"))
                        } else if (e === 2) {
                            var o = createNS("mask");
                            o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
                            var l = createNS("g");
                            o.appendChild(l), t = createElementID(), r = filtersFactory.createFilter(t);
                            var c = createNS("feComponentTransfer");
                            c.setAttribute("in", "SourceGraphic"), r.appendChild(c);
                            var u = createNS("feFuncA");
                            u.setAttribute("type", "table"), u.setAttribute("tableValues", "1.0 0.0"), c.appendChild(u), this.globalData.defs.appendChild(r);
                            var f = createNS("rect");
                            f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"), l.appendChild(f), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), l.appendChild(f), i.appendChild(this.layerElement), l.appendChild(i)), this.globalData.defs.appendChild(o)
                        }
                        this.matteMasks[e] = a
                    }
                    return this.matteMasks[e]
                },
                setMatte: function(e) {
                    this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
                }
            }, HierarchyElement.prototype = {
                initHierarchy: function() {
                    this.hierarchy = [], this._isParent = !1, this.checkParenting()
                },
                setHierarchy: function(e) {
                    this.hierarchy = e
                },
                setAsParent: function() {
                    this._isParent = !0
                },
                checkParenting: function() {
                    this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
                }
            }, extendPrototype([RenderableElement, createProxyFunction({
                initElement: function(e, t, r) {
                    this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                },
                hide: function() {
                    this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                },
                show: function() {
                    this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function() {},
                prepareFrame: function(e) {
                    this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
                },
                destroy: function() {
                    this.innerElem = null, this.destroyBaseElement()
                }
            })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                var e = this.globalData.getAssetsPath(this.assetData);
                this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
            }, IImageElement.prototype.sourceRectAtTime = function() {
                return this.sourceRect
            }, IShapeElement.prototype = {
                addShapeToModifiers: function(e) {
                    var t, r = this.shapeModifiers.length;
                    for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e)
                },
                isShapeInAnimatedModifiers: function(e) {
                    for (var t = this.shapeModifiers.length; 0 < t;)
                        if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
                    return !1
                },
                renderModifiers: function() {
                    if (this.shapeModifiers.length) {
                        var e, t = this.shapes.length;
                        for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
                        for (e = (t = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
                    }
                },
                searchProcessedElement: function(e) {
                    for (var t = this.processedElements, r = 0, n = t.length; r < n;) {
                        if (t[r].elem === e) return t[r].pos;
                        r += 1
                    }
                    return 0
                },
                addProcessedElement: function(e, t) {
                    for (var r = this.processedElements, n = r.length; n;)
                        if (r[n -= 1].elem === e) return void(r[n].pos = t);
                    r.push(new ProcessedElement(e, t))
                },
                prepareFrame: function(e) {
                    this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
                }
            };
            var lineCapEnum = {
                    1: "butt",
                    2: "round",
                    3: "square"
                },
                lineJoinEnum = {
                    1: "miter",
                    2: "round",
                    3: "bevel"
                };

            function SVGShapeData(e, t, r) {
                this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
                for (var n = 0, i = e.length; n < i;) {
                    if (e[n].mProps.dynamicProperties.length) {
                        this._isAnimated = !0;
                        break
                    }
                    n += 1
                }
            }

            function SVGStyleData(e, t) {
                this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = e.hd === !0, this.pElem = createNS("path"), this.msElem = null
            }

            function DashProperty(e, t, r, n) {
                var i;
                this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
                var a, s = t.length || 0;
                for (i = 0; i < s; i += 1) a = PropertyFactory.getProp(e, t[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
                    n: t[i].n,
                    p: a
                };
                this.k || this.getValue(!0), this._isAnimated = this.k
            }

            function SVGStrokeStyleData(e, t, r) {
                this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
            }

            function SVGFillStyleData(e, t, r) {
                this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
            }

            function SVGNoStyleData(e, t, r) {
                this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r
            }

            function GradientProperty(e, t, r) {
                this.data = t, this.c = createTypedArray("uint8c", 4 * t.p);
                var n = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
                this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
            }

            function SVGGradientFillStyleData(e, t, r) {
                this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
            }

            function SVGGradientStrokeStyleData(e, t, r) {
                this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
            }

            function ShapeGroupData() {
                this.it = [], this.prevViewData = [], this.gr = createNS("g")
            }

            function SVGTransformData(e, t, r) {
                this.transform = {
                    mProps: e,
                    op: t,
                    container: r
                }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
            }
            SVGShapeData.prototype.setAsAnimated = function() {
                this._isAnimated = !0
            }, SVGStyleData.prototype.reset = function() {
                this.d = "", this._mdf = !1
            }, DashProperty.prototype.getValue = function(e) {
                if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
                    var t = 0,
                        r = this.dataProps.length;
                    for (this.renderer === "svg" && (this.dashStr = ""), t = 0; t < r; t += 1) this.dataProps[t].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
                }
            }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(e, t) {
                for (var r = 0, n = this.o.length / 2; r < n;) {
                    if (Math.abs(e[4 * r] - e[4 * t + 2 * r]) > .01) return !1;
                    r += 1
                }
                return !0
            }, GradientProperty.prototype.checkCollapsable = function() {
                if (this.o.length / 2 != this.c.length / 4) return !1;
                if (this.data.k.k[0].s)
                    for (var e = 0, t = this.data.k.k.length; e < t;) {
                        if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
                        e += 1
                    } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                return !0
            }, GradientProperty.prototype.getValue = function(e) {
                if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
                    var t, r, n, i = 4 * this.data.p;
                    for (t = 0; t < i; t += 1) r = t % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[t] * r), this.c[t] !== n && (this.c[t] = n, this._cmdf = !e);
                    if (this.o.length)
                        for (i = this.prop.v.length, t = 4 * this.data.p; t < i; t += 1) r = t % 2 == 0 ? 100 : 1, n = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== n && (this.o[t - 4 * this.data.p] = n, this._omdf = !e);
                    this._mdf = !e
                }
            }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(e, t, r) {
                this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
                    k: 0
                }, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {
                    k: 0
                }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
            }, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) {
                var r = createElementID(),
                    n = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
                n.setAttribute("id", r), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse");
                var i, a, s, o = [];
                for (s = 4 * t.g.p, a = 0; a < s; a += 4) i = createNS("stop"), n.appendChild(i), o.push(i);
                e.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = n, this.cst = o
            }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var r, n, i, a = createNS("mask"),
                        s = createNS("path");
                    a.appendChild(s);
                    var o = createElementID(),
                        l = createElementID();
                    a.setAttribute("id", l);
                    var c = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
                    c.setAttribute("id", o), c.setAttribute("spreadMethod", "pad"), c.setAttribute("gradientUnits", "userSpaceOnUse"), i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
                    var u = this.stops;
                    for (n = 4 * e.g.p; n < i; n += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), c.appendChild(r), u.push(r);
                    s.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), e.ty === "gs" && (s.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), e.lj === 1 && s.setAttribute("stroke-miterlimit", e.ml)), this.of = c, this.ms = a, this.ost = u, this.maskId = l, t.msElem = s
                }
            }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
            var buildShapeString = function(e, t, r, n) {
                    if (t === 0) return "";
                    var i, a = e.o,
                        s = e.i,
                        o = e.v,
                        l = " M" + n.applyToPointStringified(o[0][0], o[0][1]);
                    for (i = 1; i < t; i += 1) l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[i][0], s[i][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]);
                    return r && t && (l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[0][0], s[0][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
                },
                SVGElementsRenderer = function() {
                    var e = new Matrix,
                        t = new Matrix;

                    function r(c, u, f) {
                        (f || u.transform.op._mdf) && u.transform.container.setAttribute("opacity", u.transform.op.v), (f || u.transform.mProps._mdf) && u.transform.container.setAttribute("transform", u.transform.mProps.v.to2dCSS())
                    }

                    function n() {}

                    function i(c, u, f) {
                        var g, d, p, m, h, v, y, b, S, x, T = u.styles.length,
                            _ = u.lvl;
                        for (v = 0; v < T; v += 1) {
                            if (m = u.sh._mdf || f, u.styles[v].lvl < _) {
                                for (b = t.reset(), S = _ - u.styles[v].lvl, x = u.transformers.length - 1; !m && S > 0;) m = u.transformers[x].mProps._mdf || m, S -= 1, x -= 1;
                                if (m)
                                    for (S = _ - u.styles[v].lvl, x = u.transformers.length - 1; S > 0;) b.multiply(u.transformers[x].mProps.v), S -= 1, x -= 1
                            } else b = e;
                            if (d = (y = u.sh.paths)._length, m) {
                                for (p = "", g = 0; g < d; g += 1)(h = y.shapes[g]) && h._length && (p += buildShapeString(h, h._length, h.c, b));
                                u.caches[v] = p
                            } else p = u.caches[v];
                            u.styles[v].d += c.hd === !0 ? "" : p, u.styles[v]._mdf = m || u.styles[v]._mdf
                        }
                    }

                    function a(c, u, f) {
                        var g = u.style;
                        (u.c._mdf || f) && g.pElem.setAttribute("fill", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || f) && g.pElem.setAttribute("fill-opacity", u.o.v)
                    }

                    function s(c, u, f) {
                        o(c, u, f), l(c, u, f)
                    }

                    function o(c, u, f) {
                        var g, d, p, m, h, v = u.gf,
                            y = u.g._hasOpacity,
                            b = u.s.v,
                            S = u.e.v;
                        if (u.o._mdf || f) {
                            var x = c.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                            u.style.pElem.setAttribute(x, u.o.v)
                        }
                        if (u.s._mdf || f) {
                            var T = c.t === 1 ? "x1" : "cx",
                                _ = T === "x1" ? "y1" : "cy";
                            v.setAttribute(T, b[0]), v.setAttribute(_, b[1]), y && !u.g._collapsable && (u.of.setAttribute(T, b[0]), u.of.setAttribute(_, b[1]))
                        }
                        if (u.g._cmdf || f) {
                            g = u.cst;
                            var P = u.g.c;
                            for (p = g.length, d = 0; d < p; d += 1)(m = g[d]).setAttribute("offset", P[4 * d] + "%"), m.setAttribute("stop-color", "rgb(" + P[4 * d + 1] + "," + P[4 * d + 2] + "," + P[4 * d + 3] + ")")
                        }
                        if (y && (u.g._omdf || f)) {
                            var F = u.g.o;
                            for (p = (g = u.g._collapsable ? u.cst : u.ost).length, d = 0; d < p; d += 1) m = g[d], u.g._collapsable || m.setAttribute("offset", F[2 * d] + "%"), m.setAttribute("stop-opacity", F[2 * d + 1])
                        }
                        if (c.t === 1)(u.e._mdf || f) && (v.setAttribute("x2", S[0]), v.setAttribute("y2", S[1]), y && !u.g._collapsable && (u.of.setAttribute("x2", S[0]), u.of.setAttribute("y2", S[1])));
                        else if ((u.s._mdf || u.e._mdf || f) && (h = Math.sqrt(Math.pow(b[0] - S[0], 2) + Math.pow(b[1] - S[1], 2)), v.setAttribute("r", h), y && !u.g._collapsable && u.of.setAttribute("r", h)), u.e._mdf || u.h._mdf || u.a._mdf || f) {
                            h || (h = Math.sqrt(Math.pow(b[0] - S[0], 2) + Math.pow(b[1] - S[1], 2)));
                            var w = Math.atan2(S[1] - b[1], S[0] - b[0]),
                                C = u.h.v;
                            C >= 1 ? C = .99 : C <= -1 && (C = -.99);
                            var R = h * C,
                                O = Math.cos(w + u.a.v) * R + b[0],
                                M = Math.sin(w + u.a.v) * R + b[1];
                            v.setAttribute("fx", O), v.setAttribute("fy", M), y && !u.g._collapsable && (u.of.setAttribute("fx", O), u.of.setAttribute("fy", M))
                        }
                    }

                    function l(c, u, f) {
                        var g = u.style,
                            d = u.d;
                        d && (d._mdf || f) && d.dashStr && (g.pElem.setAttribute("stroke-dasharray", d.dashStr), g.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])), u.c && (u.c._mdf || f) && g.pElem.setAttribute("stroke", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || f) && g.pElem.setAttribute("stroke-opacity", u.o.v), (u.w._mdf || f) && (g.pElem.setAttribute("stroke-width", u.w.v), g.msElem && g.msElem.setAttribute("stroke-width", u.w.v))
                    }
                    return {
                        createRenderFunction: function(c) {
                            switch (c.ty) {
                                case "fl":
                                    return a;
                                case "gf":
                                    return o;
                                case "gs":
                                    return s;
                                case "st":
                                    return l;
                                case "sh":
                                case "el":
                                case "rc":
                                case "sr":
                                    return i;
                                case "tr":
                                    return r;
                                case "no":
                                    return n;
                                default:
                                    return null
                            }
                        }
                    }
                }();

            function SVGShapeElement(e, t, r) {
                this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
            }

            function LetterProps(e, t, r, n, i, a) {
                this.o = e, this.sw = t, this.sc = r, this.fc = n, this.m = i, this.p = a, this._mdf = {
                    o: !0,
                    sw: !!t,
                    sc: !!r,
                    fc: !!n,
                    m: !0,
                    p: !0
                }
            }

            function TextProperty(e, t) {
                this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                    ascent: 0,
                    boxWidth: this.defaultBoxWidth,
                    f: "",
                    fStyle: "",
                    fWeight: "",
                    fc: "",
                    j: "",
                    justifyOffset: "",
                    l: [],
                    lh: 0,
                    lineWidths: [],
                    ls: "",
                    of: "",
                    s: "",
                    sc: "",
                    sw: 0,
                    t: 0,
                    tr: 0,
                    sz: 0,
                    ps: null,
                    fillColorAnim: !1,
                    strokeColorAnim: !1,
                    strokeWidthAnim: !1,
                    yOffset: 0,
                    finalSize: 0,
                    finalText: [],
                    finalLineHeight: 0,
                    __complete: !1
                }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
            }
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
            }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                var e, t, r, n, i = this.shapes.length,
                    a = this.stylesList.length,
                    s = [],
                    o = !1;
                for (r = 0; r < a; r += 1) {
                    for (n = this.stylesList[r], o = !1, s.length = 0, e = 0; e < i; e += 1)(t = this.shapes[e]).styles.indexOf(n) !== -1 && (s.push(t), o = t._isAnimated || o);
                    s.length > 1 && o && this.setShapesAsAnimated(s)
                }
            }, SVGShapeElement.prototype.setShapesAsAnimated = function(e) {
                var t, r = e.length;
                for (t = 0; t < r; t += 1) e[t].setAsAnimated()
            }, SVGShapeElement.prototype.createStyleElement = function(e, t) {
                var r, n = new SVGStyleData(e, t),
                    i = n.pElem;
                return e.ty === "st" ? r = new SVGStrokeStyleData(this, e, n) : e.ty === "fl" ? r = new SVGFillStyleData(this, e, n) : e.ty === "gf" || e.ty === "gs" ? (r = new(e.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, n), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : e.ty === "no" && (r = new SVGNoStyleData(this, e, n)), e.ty !== "st" && e.ty !== "gs" || (i.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), i.setAttribute("fill-opacity", "0"), e.lj === 1 && i.setAttribute("stroke-miterlimit", e.ml)), e.r === 2 && i.setAttribute("fill-rule", "evenodd"), e.ln && i.setAttribute("id", e.ln), e.cl && i.setAttribute("class", e.cl), e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(n), this.addToAnimatedContents(e, r), r
            }, SVGShapeElement.prototype.createGroupElement = function(e) {
                var t = new ShapeGroupData;
                return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
            }, SVGShapeElement.prototype.createTransformElement = function(e, t) {
                var r = TransformPropertyFactory.getTransformProperty(this, e, this),
                    n = new SVGTransformData(r, r.o, t);
                return this.addToAnimatedContents(e, n), n
            }, SVGShapeElement.prototype.createShapeElement = function(e, t, r) {
                var n = 4;
                e.ty === "rc" ? n = 5 : e.ty === "el" ? n = 6 : e.ty === "sr" && (n = 7);
                var i = new SVGShapeData(t, r, ShapePropertyFactory.getShapeProp(this, e, n, this));
                return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i
            }, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) {
                for (var r = 0, n = this.animatedContents.length; r < n;) {
                    if (this.animatedContents[r].element === t) return;
                    r += 1
                }
                this.animatedContents.push({
                    fn: SVGElementsRenderer.createRenderFunction(e),
                    element: t,
                    data: e
                })
            }, SVGShapeElement.prototype.setElementStyles = function(e) {
                var t, r = e.styles,
                    n = this.stylesList.length;
                for (t = 0; t < n; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t])
            }, SVGShapeElement.prototype.reloadShapes = function() {
                var e;
                this._isFirstFrame = !0;
                var t = this.itemsData.length;
                for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                this.renderModifiers()
            }, SVGShapeElement.prototype.searchShapes = function(e, t, r, n, i, a, s) {
                var o, l, c, u, f, g, d = [].concat(a),
                    p = e.length - 1,
                    m = [],
                    h = [];
                for (o = p; o >= 0; o -= 1) {
                    if ((g = this.searchProcessedElement(e[o])) ? t[o] = r[g - 1] : e[o]._render = s, e[o].ty === "fl" || e[o].ty === "st" || e[o].ty === "gf" || e[o].ty === "gs" || e[o].ty === "no") g ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], i), e[o]._render && t[o].style.pElem.parentNode !== n && n.appendChild(t[o].style.pElem), m.push(t[o].style);
                    else if (e[o].ty === "gr") {
                        if (g)
                            for (c = t[o].it.length, l = 0; l < c; l += 1) t[o].prevViewData[l] = t[o].it[l];
                        else t[o] = this.createGroupElement(e[o]);
                        this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, i + 1, d, s), e[o]._render && t[o].gr.parentNode !== n && n.appendChild(t[o].gr)
                    } else e[o].ty === "tr" ? (g || (t[o] = this.createTransformElement(e[o], n)), u = t[o].transform, d.push(u)) : e[o].ty === "sh" || e[o].ty === "rc" || e[o].ty === "el" || e[o].ty === "sr" ? (g || (t[o] = this.createShapeElement(e[o], d, i)), this.setElementStyles(t[o])) : e[o].ty === "tm" || e[o].ty === "rd" || e[o].ty === "ms" || e[o].ty === "pb" || e[o].ty === "zz" || e[o].ty === "op" ? (g ? (f = t[o]).closed = !1 : ((f = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]), t[o] = f, this.shapeModifiers.push(f)), h.push(f)) : e[o].ty === "rp" && (g ? (f = t[o]).closed = !0 : (f = ShapeModifiers.getModifier(e[o].ty), t[o] = f, f.init(this, e, o, t), this.shapeModifiers.push(f), s = !1), h.push(f));
                    this.addProcessedElement(e[o], o + 1)
                }
                for (p = m.length, o = 0; o < p; o += 1) m[o].closed = !0;
                for (p = h.length, o = 0; o < p; o += 1) h[o].closed = !0
            }, SVGShapeElement.prototype.renderInnerContent = function() {
                var e;
                this.renderModifiers();
                var t = this.stylesList.length;
                for (e = 0; e < t; e += 1) this.stylesList[e].reset();
                for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
            }, SVGShapeElement.prototype.renderShape = function() {
                var e, t, r = this.animatedContents.length;
                for (e = 0; e < r; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && t.data !== !0 && t.fn(t.data, t.element, this._isFirstFrame)
            }, SVGShapeElement.prototype.destroy = function() {
                this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
            }, LetterProps.prototype.update = function(e, t, r, n, i, a) {
                this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                var s = !1;
                return this.o !== e && (this.o = e, this._mdf.o = !0, s = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== n && (this.fc = n, this._mdf.fc = !0, s = !0), this.m !== i && (this.m = i, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
            }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }, TextProperty.prototype.setCurrentData = function(e) {
                e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
            }, TextProperty.prototype.searchProperty = function() {
                return this.searchKeyframes()
            }, TextProperty.prototype.searchKeyframes = function() {
                return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
            }, TextProperty.prototype.addEffect = function(e) {
                this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.getValue = function(e) {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var t = this.currentData,
                        r = this.keysIndex;
                    if (this.lock) this.setCurrentData(this.currentData);
                    else {
                        var n;
                        this.lock = !0, this._mdf = !1;
                        var i = this.effectsSequence.length,
                            a = e || this.data.d.k[this.keysIndex].s;
                        for (n = 0; n < i; n += 1) a = r !== this.keysIndex ? this.effectsSequence[n](a, a.t) : this.effectsSequence[n](this.currentData, a.t);
                        t !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }
            }, TextProperty.prototype.getKeyframeValue = function() {
                for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, n = e.length; r <= n - 1 && !(r === n - 1 || e[r + 1].t > t);) r += 1;
                return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
            }, TextProperty.prototype.buildFinalText = function(e) {
                for (var t, r, n = [], i = 0, a = e.length, s = !1, o = !1, l = ""; i < a;) s = o, o = !1, t = e.charCodeAt(i), l = e.charAt(i), FontManager.isCombinedCharacter(t) ? s = !0 : t >= 55296 && t <= 56319 ? FontManager.isRegionalFlag(e, i) ? l = e.substr(i, 14) : (r = e.charCodeAt(i + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(t, r) ? (l = e.substr(i, 2), s = !0) : l = FontManager.isFlagEmoji(e.substr(i, 4)) ? e.substr(i, 4) : e.substr(i, 2)) : t > 56319 ? (r = e.charCodeAt(i + 1), FontManager.isVariationSelector(t) && (s = !0)) : FontManager.isZeroWidthJoiner(t) && (s = !0, o = !0), s ? (n[n.length - 1] += l, s = !1) : n.push(l), i += l.length;
                return n
            }, TextProperty.prototype.completeTextData = function(e) {
                e.__complete = !0;
                var t, r, n, i, a, s, o, l = this.elem.globalData.fontManager,
                    c = this.data,
                    u = [],
                    f = 0,
                    g = c.m.g,
                    d = 0,
                    p = 0,
                    m = 0,
                    h = [],
                    v = 0,
                    y = 0,
                    b = l.getFontByName(e.f),
                    S = 0,
                    x = getFontProperties(b);
                e.fWeight = x.weight, e.fStyle = x.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), r = e.finalText.length, e.finalLineHeight = e.lh;
                var T, _ = e.tr / 1e3 * e.finalSize;
                if (e.sz)
                    for (var P, F, w = !0, C = e.sz[0], R = e.sz[1]; w;) {
                        P = 0, v = 0, r = (F = this.buildFinalText(e.t)).length, _ = e.tr / 1e3 * e.finalSize;
                        var O = -1;
                        for (t = 0; t < r; t += 1) T = F[t].charCodeAt(0), n = !1, F[t] === " " ? O = t : T !== 13 && T !== 3 || (v = 0, n = !0, P += e.finalLineHeight || 1.2 * e.finalSize), l.chars ? (o = l.getCharData(F[t], b.fStyle, b.fFamily), S = n ? 0 : o.w * e.finalSize / 100) : S = l.measureText(F[t], e.f, e.finalSize), v + S > C && F[t] !== " " ? (O === -1 ? r += 1 : t = O, P += e.finalLineHeight || 1.2 * e.finalSize, F.splice(t, O === t ? 1 : 0, "\r"), O = -1, v = 0) : (v += S, v += _);
                        P += b.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && R < P ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = F, r = e.finalText.length, w = !1)
                    }
                v = -_, S = 0;
                var M, N = 0;
                for (t = 0; t < r; t += 1)
                    if (n = !1, (T = (M = e.finalText[t]).charCodeAt(0)) === 13 || T === 3 ? (N = 0, h.push(v), y = v > y ? v : y, v = -2 * _, i = "", n = !0, m += 1) : i = M, l.chars ? (o = l.getCharData(M, b.fStyle, l.getFontByName(e.f).fFamily), S = n ? 0 : o.w * e.finalSize / 100) : S = l.measureText(i, e.f, e.finalSize), M === " " ? N += S + _ : (v += S + _ + N, N = 0), u.push({
                            l: S,
                            an: S,
                            add: d,
                            n,
                            anIndexes: [],
                            val: i,
                            line: m,
                            animatorJustifyOffset: 0
                        }), g == 2) {
                        if (d += S, i === "" || i === " " || t === r - 1) {
                            for (i !== "" && i !== " " || (d -= S); p <= t;) u[p].an = d, u[p].ind = f, u[p].extra = S, p += 1;
                            f += 1, d = 0
                        }
                    } else if (g == 3) {
                    if (d += S, i === "" || t === r - 1) {
                        for (i === "" && (d -= S); p <= t;) u[p].an = d, u[p].ind = f, u[p].extra = S, p += 1;
                        d = 0, f += 1
                    }
                } else u[f].ind = f, u[f].extra = 0, f += 1;
                if (e.l = u, y = v > y ? v : y, h.push(v), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
                else switch (e.boxWidth = y, e.j) {
                    case 1:
                        e.justifyOffset = -e.boxWidth;
                        break;
                    case 2:
                        e.justifyOffset = -e.boxWidth / 2;
                        break;
                    default:
                        e.justifyOffset = 0
                }
                e.lineWidths = h;
                var z, $, A, D, L = c.a;
                s = L.length;
                var H = [];
                for (a = 0; a < s; a += 1) {
                    for ((z = L[a]).a.sc && (e.strokeColorAnim = !0), z.a.sw && (e.strokeWidthAnim = !0), (z.a.fc || z.a.fh || z.a.fs || z.a.fb) && (e.fillColorAnim = !0), D = 0, A = z.s.b, t = 0; t < r; t += 1)($ = u[t]).anIndexes[a] = D, (A == 1 && $.val !== "" || A == 2 && $.val !== "" && $.val !== " " || A == 3 && ($.n || $.val == " " || t == r - 1) || A == 4 && ($.n || t == r - 1)) && (z.s.rn === 1 && H.push(D), D += 1);
                    c.a[a].s.totalChars = D;
                    var U, j = -1;
                    if (z.s.rn === 1)
                        for (t = 0; t < r; t += 1) j != ($ = u[t]).anIndexes[a] && (j = $.anIndexes[a], U = H.splice(Math.floor(Math.random() * H.length), 1)[0]), $.anIndexes[a] = U
                }
                e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = b.ascent * e.finalSize / 100
            }, TextProperty.prototype.updateDocumentData = function(e, t) {
                t = t === void 0 ? this.keysIndex : t;
                var r = this.copyData({}, this.data.d.k[t].s);
                r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.setCurrentData(r), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.recalculate = function(e) {
                var t = this.data.d.k[e].s;
                t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
            }, TextProperty.prototype.canResizeFont = function(e) {
                this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
            }, TextProperty.prototype.setMinimumFontSize = function(e) {
                this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
            };
            var TextSelectorProp = function() {
                var e = Math.max,
                    t = Math.min,
                    r = Math.floor;

                function n(i, a) {
                    this._currentTextLength = -1, this.k = !1, this.data = a, this.elem = i, this.comp = i.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(i), this.s = PropertyFactory.getProp(i, a.s || {
                        k: 0
                    }, 0, 0, this), this.e = "e" in a ? PropertyFactory.getProp(i, a.e, 0, 0, this) : {
                        v: 100
                    }, this.o = PropertyFactory.getProp(i, a.o || {
                        k: 0
                    }, 0, 0, this), this.xe = PropertyFactory.getProp(i, a.xe || {
                        k: 0
                    }, 0, 0, this), this.ne = PropertyFactory.getProp(i, a.ne || {
                        k: 0
                    }, 0, 0, this), this.sm = PropertyFactory.getProp(i, a.sm || {
                        k: 100
                    }, 0, 0, this), this.a = PropertyFactory.getProp(i, a.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                }
                return n.prototype = {
                    getMult: function(i) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var a = 0,
                            s = 0,
                            o = 1,
                            l = 1;
                        this.ne.v > 0 ? a = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? o = 1 - this.xe.v / 100 : l = 1 + this.xe.v / 100;
                        var c = BezierFactory.getBezierEasing(a, s, o, l).get,
                            u = 0,
                            f = this.finalS,
                            g = this.finalE,
                            d = this.data.sh;
                        if (d === 2) u = c(u = g === f ? i >= g ? 1 : 0 : e(0, t(.5 / (g - f) + (i - f) / (g - f), 1)));
                        else if (d === 3) u = c(u = g === f ? i >= g ? 0 : 1 : 1 - e(0, t(.5 / (g - f) + (i - f) / (g - f), 1)));
                        else if (d === 4) g === f ? u = 0 : (u = e(0, t(.5 / (g - f) + (i - f) / (g - f), 1))) < .5 ? u *= 2 : u = 1 - 2 * (u - .5), u = c(u);
                        else if (d === 5) {
                            if (g === f) u = 0;
                            else {
                                var p = g - f,
                                    m = -p / 2 + (i = t(e(0, i + .5 - f), g - f)),
                                    h = p / 2;
                                u = Math.sqrt(1 - m * m / (h * h))
                            }
                            u = c(u)
                        } else d === 6 ? (g === f ? u = 0 : (i = t(e(0, i + .5 - f), g - f), u = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (g - f))) / 2), u = c(u)) : (i >= r(f) && (u = e(0, t(i - f < 0 ? t(g, 1) - (f - i) : g - i, 1))), u = c(u));
                        if (this.sm.v !== 100) {
                            var v = .01 * this.sm.v;
                            v === 0 && (v = 1e-8);
                            var y = .5 - .5 * v;
                            u < y ? u = 0 : (u = (u - y) / v) > 1 && (u = 1)
                        }
                        return u * this.a.v
                    },
                    getValue: function(i) {
                        this.iterateDynamicProperties(), this._mdf = i || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, i && this.data.r === 2 && (this.e.v = this._currentTextLength);
                        var a = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
                            s = this.o.v / a,
                            o = this.s.v / a + s,
                            l = this.e.v / a + s;
                        if (o > l) {
                            var c = o;
                            o = l, l = c
                        }
                        this.finalS = o, this.finalE = l
                    }
                }, extendPrototype([DynamicPropertyContainer], n), {
                    getTextSelectorProp: function(i, a, s) {
                        return new n(i, a, s)
                    }
                }
            }();

            function TextAnimatorDataProperty(e, t, r) {
                var n = {
                        propType: !1
                    },
                    i = PropertyFactory.getProp,
                    a = t.a;
                this.a = {
                    r: a.r ? i(e, a.r, 0, degToRads, r) : n,
                    rx: a.rx ? i(e, a.rx, 0, degToRads, r) : n,
                    ry: a.ry ? i(e, a.ry, 0, degToRads, r) : n,
                    sk: a.sk ? i(e, a.sk, 0, degToRads, r) : n,
                    sa: a.sa ? i(e, a.sa, 0, degToRads, r) : n,
                    s: a.s ? i(e, a.s, 1, .01, r) : n,
                    a: a.a ? i(e, a.a, 1, 0, r) : n,
                    o: a.o ? i(e, a.o, 0, .01, r) : n,
                    p: a.p ? i(e, a.p, 1, 0, r) : n,
                    sw: a.sw ? i(e, a.sw, 0, 0, r) : n,
                    sc: a.sc ? i(e, a.sc, 1, 0, r) : n,
                    fc: a.fc ? i(e, a.fc, 1, 0, r) : n,
                    fh: a.fh ? i(e, a.fh, 0, 0, r) : n,
                    fs: a.fs ? i(e, a.fs, 0, .01, r) : n,
                    fb: a.fb ? i(e, a.fb, 0, .01, r) : n,
                    t: a.t ? i(e, a.t, 0, 0, r) : n
                }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
            }

            function TextAnimatorProperty(e, t, r) {
                this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                    alignment: {}
                }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
            }

            function ITextElement() {}
            TextAnimatorProperty.prototype.searchProperties = function() {
                var e, t, r = this._textData.a.length,
                    n = PropertyFactory.getProp;
                for (e = 0; e < r; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
                this._textData.p && "m" in this._textData.p ? (this._pathData = {
                    a: n(this._elem, this._textData.p.a, 0, 0, this),
                    f: n(this._elem, this._textData.p.f, 0, 0, this),
                    l: n(this._elem, this._textData.p.l, 0, 0, this),
                    r: n(this._elem, this._textData.p.r, 0, 0, this),
                    p: n(this._elem, this._textData.p.p, 0, 0, this),
                    m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
            }, TextAnimatorProperty.prototype.getMeasures = function(e, t) {
                if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) {
                    this._isFirstFrame = !1;
                    var r, n, i, a, s, o, l, c, u, f, g, d, p, m, h, v, y, b, S, x = this._moreOptions.alignment.v,
                        T = this._animatorsData,
                        _ = this._textData,
                        P = this.mHelper,
                        F = this._renderType,
                        w = this.renderedLetters.length,
                        C = e.l;
                    if (this._hasMaskedPath) {
                        if (S = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                            var R, O = S.v;
                            for (this._pathData.r.v && (O = O.reverse()), s = {
                                    tLength: 0,
                                    segments: []
                                }, a = O._length - 1, v = 0, i = 0; i < a; i += 1) R = bez.buildBezierData(O.v[i], O.v[i + 1], [O.o[i][0] - O.v[i][0], O.o[i][1] - O.v[i][1]], [O.i[i + 1][0] - O.v[i + 1][0], O.i[i + 1][1] - O.v[i + 1][1]]), s.tLength += R.segmentLength, s.segments.push(R), v += R.segmentLength;
                            i = a, S.v.c && (R = bez.buildBezierData(O.v[i], O.v[0], [O.o[i][0] - O.v[i][0], O.o[i][1] - O.v[i][1]], [O.i[0][0] - O.v[0][0], O.i[0][1] - O.v[0][1]]), s.tLength += R.segmentLength, s.segments.push(R), v += R.segmentLength), this._pathData.pi = s
                        }
                        if (s = this._pathData.pi, o = this._pathData.f.v, g = 0, f = 1, c = 0, u = !0, m = s.segments, o < 0 && S.v.c)
                            for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), f = (p = m[g = m.length - 1].points).length - 1; o < 0;) o += p[f].partialLength, (f -= 1) < 0 && (f = (p = m[g -= 1].points).length - 1);
                        d = (p = m[g].points)[f - 1], h = (l = p[f]).partialLength
                    }
                    a = C.length, r = 0, n = 0;
                    var M, N, z, $, A, D = 1.2 * e.finalSize * .714,
                        L = !0;
                    z = T.length;
                    var H, U, j, Y, Q, J, X, re, Ae, he, Ee, Pe, Te = -1,
                        ne = o,
                        Me = g,
                        xt = f,
                        Je = -1,
                        I = "",
                        q = this.defaultPropsArray;
                    if (e.j === 2 || e.j === 1) {
                        var k = 0,
                            G = 0,
                            B = e.j === 2 ? -.5 : -1,
                            V = 0,
                            K = !0;
                        for (i = 0; i < a; i += 1)
                            if (C[i].n) {
                                for (k && (k += G); V < i;) C[V].animatorJustifyOffset = k, V += 1;
                                k = 0, K = !0
                            } else {
                                for (N = 0; N < z; N += 1)(M = T[N].a).t.propType && (K && e.j === 2 && (G += M.t.v * B), (A = T[N].s.getMult(C[i].anIndexes[N], _.a[N].s.totalChars)).length ? k += M.t.v * A[0] * B : k += M.t.v * A * B);
                                K = !1
                            }
                        for (k && (k += G); V < i;) C[V].animatorJustifyOffset = k, V += 1
                    }
                    for (i = 0; i < a; i += 1) {
                        if (P.reset(), Y = 1, C[i].n) r = 0, n += e.yOffset, n += L ? 1 : 0, o = ne, L = !1, this._hasMaskedPath && (f = xt, d = (p = m[g = Me].points)[f - 1], h = (l = p[f]).partialLength, c = 0), I = "", Ee = "", Ae = "", Pe = "", q = this.defaultPropsArray;
                        else {
                            if (this._hasMaskedPath) {
                                if (Je !== C[i].line) {
                                    switch (e.j) {
                                        case 1:
                                            o += v - e.lineWidths[C[i].line];
                                            break;
                                        case 2:
                                            o += (v - e.lineWidths[C[i].line]) / 2
                                    }
                                    Je = C[i].line
                                }
                                Te !== C[i].ind && (C[Te] && (o += C[Te].extra), o += C[i].an / 2, Te = C[i].ind), o += x[0] * C[i].an * .005;
                                var Z = 0;
                                for (N = 0; N < z; N += 1)(M = T[N].a).p.propType && ((A = T[N].s.getMult(C[i].anIndexes[N], _.a[N].s.totalChars)).length ? Z += M.p.v[0] * A[0] : Z += M.p.v[0] * A), M.a.propType && ((A = T[N].s.getMult(C[i].anIndexes[N], _.a[N].s.totalChars)).length ? Z += M.a.v[0] * A[0] : Z += M.a.v[0] * A);
                                for (u = !0, this._pathData.a.v && (o = .5 * C[0].an + (v - this._pathData.f.v - .5 * C[0].an - .5 * C[C.length - 1].an) * Te / (a - 1), o += this._pathData.f.v); u;) c + h >= o + Z || !p ? (y = (o + Z - c) / l.partialLength, U = d.point[0] + (l.point[0] - d.point[0]) * y, j = d.point[1] + (l.point[1] - d.point[1]) * y, P.translate(-x[0] * C[i].an * .005, -x[1] * D * .01), u = !1) : p && (c += l.partialLength, (f += 1) >= p.length && (f = 0, m[g += 1] ? p = m[g].points : S.v.c ? (f = 0, p = m[g = 0].points) : (c -= l.partialLength, p = null)), p && (d = l, h = (l = p[f]).partialLength));
                                H = C[i].an / 2 - C[i].add, P.translate(-H, 0, 0)
                            } else H = C[i].an / 2 - C[i].add, P.translate(-H, 0, 0), P.translate(-x[0] * C[i].an * .005, -x[1] * D * .01, 0);
                            for (N = 0; N < z; N += 1)(M = T[N].a).t.propType && (A = T[N].s.getMult(C[i].anIndexes[N], _.a[N].s.totalChars), r === 0 && e.j === 0 || (this._hasMaskedPath ? A.length ? o += M.t.v * A[0] : o += M.t.v * A : A.length ? r += M.t.v * A[0] : r += M.t.v * A));
                            for (e.strokeWidthAnim && (J = e.sw || 0), e.strokeColorAnim && (Q = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (X = [e.fc[0], e.fc[1], e.fc[2]]), N = 0; N < z; N += 1)(M = T[N].a).a.propType && ((A = T[N].s.getMult(C[i].anIndexes[N], _.a[N].s.totalChars)).length ? P.translate(-M.a.v[0] * A[0], -M.a.v[1] * A[1], M.a.v[2] * A[2]) : P.translate(-M.a.v[0] * A, -M.a.v[1] * A, M.a.v[2] * A));
                            for (N = 0; N < z; N += 1)(M = T[N].a).s.propType && ((A = T[N].s.getMult(C[i].anIndexes[N], _.a[N].s.totalChars)).length ? P.scale(1 + (M.s.v[0] - 1) * A[0], 1 + (M.s.v[1] - 1) * A[1], 1) : P.scale(1 + (M.s.v[0] - 1) * A, 1 + (M.s.v[1] - 1) * A, 1));
                            for (N = 0; N < z; N += 1) {
                                if (M = T[N].a, A = T[N].s.getMult(C[i].anIndexes[N], _.a[N].s.totalChars), M.sk.propType && (A.length ? P.skewFromAxis(-M.sk.v * A[0], M.sa.v * A[1]) : P.skewFromAxis(-M.sk.v * A, M.sa.v * A)), M.r.propType && (A.length ? P.rotateZ(-M.r.v * A[2]) : P.rotateZ(-M.r.v * A)), M.ry.propType && (A.length ? P.rotateY(M.ry.v * A[1]) : P.rotateY(M.ry.v * A)), M.rx.propType && (A.length ? P.rotateX(M.rx.v * A[0]) : P.rotateX(M.rx.v * A)), M.o.propType && (A.length ? Y += (M.o.v * A[0] - Y) * A[0] : Y += (M.o.v * A - Y) * A), e.strokeWidthAnim && M.sw.propType && (A.length ? J += M.sw.v * A[0] : J += M.sw.v * A), e.strokeColorAnim && M.sc.propType)
                                    for (re = 0; re < 3; re += 1) A.length ? Q[re] += (M.sc.v[re] - Q[re]) * A[0] : Q[re] += (M.sc.v[re] - Q[re]) * A;
                                if (e.fillColorAnim && e.fc) {
                                    if (M.fc.propType)
                                        for (re = 0; re < 3; re += 1) A.length ? X[re] += (M.fc.v[re] - X[re]) * A[0] : X[re] += (M.fc.v[re] - X[re]) * A;
                                    M.fh.propType && (X = A.length ? addHueToRGB(X, M.fh.v * A[0]) : addHueToRGB(X, M.fh.v * A)), M.fs.propType && (X = A.length ? addSaturationToRGB(X, M.fs.v * A[0]) : addSaturationToRGB(X, M.fs.v * A)), M.fb.propType && (X = A.length ? addBrightnessToRGB(X, M.fb.v * A[0]) : addBrightnessToRGB(X, M.fb.v * A))
                                }
                            }
                            for (N = 0; N < z; N += 1)(M = T[N].a).p.propType && (A = T[N].s.getMult(C[i].anIndexes[N], _.a[N].s.totalChars), this._hasMaskedPath ? A.length ? P.translate(0, M.p.v[1] * A[0], -M.p.v[2] * A[1]) : P.translate(0, M.p.v[1] * A, -M.p.v[2] * A) : A.length ? P.translate(M.p.v[0] * A[0], M.p.v[1] * A[1], -M.p.v[2] * A[2]) : P.translate(M.p.v[0] * A, M.p.v[1] * A, -M.p.v[2] * A));
                            if (e.strokeWidthAnim && (Ae = J < 0 ? 0 : J), e.strokeColorAnim && (he = "rgb(" + Math.round(255 * Q[0]) + "," + Math.round(255 * Q[1]) + "," + Math.round(255 * Q[2]) + ")"), e.fillColorAnim && e.fc && (Ee = "rgb(" + Math.round(255 * X[0]) + "," + Math.round(255 * X[1]) + "," + Math.round(255 * X[2]) + ")"), this._hasMaskedPath) {
                                if (P.translate(0, -e.ls), P.translate(0, x[1] * D * .01 + n, 0), this._pathData.p.v) {
                                    b = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
                                    var oe = 180 * Math.atan(b) / Math.PI;
                                    l.point[0] < d.point[0] && (oe += 180), P.rotate(-oe * Math.PI / 180)
                                }
                                P.translate(U, j, 0), o -= x[0] * C[i].an * .005, C[i + 1] && Te !== C[i + 1].ind && (o += C[i].an / 2, o += .001 * e.tr * e.finalSize)
                            } else {
                                switch (P.translate(r, n, 0), e.ps && P.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                                    case 1:
                                        P.translate(C[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[C[i].line]), 0, 0);
                                        break;
                                    case 2:
                                        P.translate(C[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[C[i].line]) / 2, 0, 0)
                                }
                                P.translate(0, -e.ls), P.translate(H, 0, 0), P.translate(x[0] * C[i].an * .005, x[1] * D * .01, 0), r += C[i].l + .001 * e.tr * e.finalSize
                            }
                            F === "html" ? I = P.toCSS() : F === "svg" ? I = P.to2dCSS() : q = [P.props[0], P.props[1], P.props[2], P.props[3], P.props[4], P.props[5], P.props[6], P.props[7], P.props[8], P.props[9], P.props[10], P.props[11], P.props[12], P.props[13], P.props[14], P.props[15]], Pe = Y
                        }
                        w <= i ? ($ = new LetterProps(Pe, Ae, he, Ee, I, q), this.renderedLetters.push($), w += 1, this.lettersChangedFlag = !0) : ($ = this.renderedLetters[i], this.lettersChangedFlag = $.update(Pe, Ae, he, Ee, I, q) || this.lettersChangedFlag)
                    }
                }
            }, TextAnimatorProperty.prototype.getValue = function() {
                this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
            }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(e, t, r) {
                this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
            }, ITextElement.prototype.prepareFrame = function(e) {
                this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
            }, ITextElement.prototype.createPathShape = function(e, t) {
                var r, n, i = t.length,
                    a = "";
                for (r = 0; r < i; r += 1) t[r].ty === "sh" && (n = t[r].ks.k, a += buildShapeString(n, n.i.length, !0, e));
                return a
            }, ITextElement.prototype.updateDocumentData = function(e, t) {
                this.textProperty.updateDocumentData(e, t)
            }, ITextElement.prototype.canResizeFont = function(e) {
                this.textProperty.canResizeFont(e)
            }, ITextElement.prototype.setMinimumFontSize = function(e) {
                this.textProperty.setMinimumFontSize(e)
            }, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, r, n, i) {
                switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
                    case 1:
                        t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
                        break;
                    case 2:
                        t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0)
                }
                t.translate(n, i, 0)
            }, ITextElement.prototype.buildColor = function(e) {
                return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
            }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
                (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
            };
            var emptyShapeData = {
                shapes: []
            };

            function SVGTextLottieElement(e, t, r) {
                this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
            }

            function ISolidElement(e, t, r) {
                this.initElement(e, t, r)
            }

            function NullElement(e, t, r) {
                this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
            }

            function SVGRendererBase() {}

            function ICompElement() {}

            function SVGCompElement(e, t, r) {
                this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function SVGRenderer(e, t) {
                this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                var r = "";
                if (t && t.title) {
                    var n = createNS("title"),
                        i = createElementID();
                    n.setAttribute("id", i), n.textContent = t.title, this.svgElement.appendChild(n), r += i
                }
                if (t && t.description) {
                    var a = createNS("desc"),
                        s = createElementID();
                    a.setAttribute("id", s), a.textContent = t.description, this.svgElement.appendChild(a), r += " " + s
                }
                r && this.svgElement.setAttribute("aria-labelledby", r);
                var o = createNS("defs");
                this.svgElement.appendChild(o);
                var l = createNS("g");
                this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
                    preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: t && t.contentVisibility || "visible",
                    progressiveLoad: t && t.progressiveLoad || !1,
                    hideOnTransparent: !(t && t.hideOnTransparent === !1),
                    viewBoxOnly: t && t.viewBoxOnly || !1,
                    viewBoxSize: t && t.viewBoxSize || !1,
                    className: t && t.className || "",
                    id: t && t.id || "",
                    focusable: t && t.focusable,
                    filterSize: {
                        width: t && t.filterSize && t.filterSize.width || "100%",
                        height: t && t.filterSize && t.filterSize.height || "100%",
                        x: t && t.filterSize && t.filterSize.x || "0%",
                        y: t && t.filterSize && t.filterSize.y || "0%"
                    },
                    width: t && t.width,
                    height: t && t.height,
                    runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: o,
                    renderConfig: this.renderConfig
                }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
            }

            function ShapeTransformManager() {
                this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
            }
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
            }, SVGTextLottieElement.prototype.buildTextContents = function(e) {
                for (var t = 0, r = e.length, n = [], i = ""; t < r;) e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (n.push(i), i = "") : i += e[t], t += 1;
                return n.push(i), n
            }, SVGTextLottieElement.prototype.buildShapeData = function(e, t) {
                if (e.shapes && e.shapes.length) {
                    var r = e.shapes[0];
                    if (r.it) {
                        var n = r.it[r.it.length - 1];
                        n.s && (n.s.k[0] = t, n.s.k[1] = t)
                    }
                }
                return e
            }, SVGTextLottieElement.prototype.buildNewText = function() {
                var e, t;
                this.addDynamicProperty(this);
                var r = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
                var n = this.globalData.fontManager.getFontByName(r.f);
                if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
                else {
                    this.layerElement.setAttribute("font-family", n.fFamily);
                    var i = r.fWeight,
                        a = r.fStyle;
                    this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
                }
                this.layerElement.setAttribute("aria-label", r.t);
                var s, o = r.l || [],
                    l = !!this.globalData.fontManager.chars;
                t = o.length;
                var c = this.mHelper,
                    u = this.data.singleShape,
                    f = 0,
                    g = 0,
                    d = !0,
                    p = .001 * r.tr * r.finalSize;
                if (!u || l || r.sz) {
                    var m, h = this.textSpans.length;
                    for (e = 0; e < t; e += 1) {
                        if (this.textSpans[e] || (this.textSpans[e] = {
                                span: null,
                                childSpan: null,
                                glyph: null
                            }), !l || !u || e === 0) {
                            if (s = h > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), h <= e) {
                                if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = s, l) {
                                    var v = createNS("g");
                                    s.appendChild(v), this.textSpans[e].childSpan = v
                                }
                                this.textSpans[e].span = s, this.layerElement.appendChild(s)
                            }
                            s.style.display = "inherit"
                        }
                        if (c.reset(), u && (o[e].n && (f = -p, g += r.yOffset, g += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(r, c, o[e].line, f, g), f += o[e].l || 0, f += p), l) {
                            var y;
                            if ((m = this.globalData.fontManager.getCharData(r.finalText[e], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t === 1) y = new SVGCompElement(m.data, this.globalData, this);
                            else {
                                var b = emptyShapeData;
                                m.data && m.data.shapes && (b = this.buildShapeData(m.data, r.finalSize)), y = new SVGShapeElement(b, this.globalData, this)
                            }
                            if (this.textSpans[e].glyph) {
                                var S = this.textSpans[e].glyph;
                                this.textSpans[e].childSpan.removeChild(S.layerElement), S.destroy()
                            }
                            this.textSpans[e].glyph = y, y._debug = !0, y.prepareFrame(0), y.renderFrame(), this.textSpans[e].childSpan.appendChild(y.layerElement), m.t === 1 && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
                        } else u && s.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), s.textContent = o[e].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                    }
                    u && s && s.setAttribute("d", "")
                } else {
                    var x = this.textContainer,
                        T = "start";
                    switch (r.j) {
                        case 1:
                            T = "end";
                            break;
                        case 2:
                            T = "middle";
                            break;
                        default:
                            T = "start"
                    }
                    x.setAttribute("text-anchor", T), x.setAttribute("letter-spacing", p);
                    var _ = this.buildTextContents(r.finalText);
                    for (t = _.length, g = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1)(s = this.textSpans[e].span || createNS("tspan")).textContent = _[e], s.setAttribute("x", 0), s.setAttribute("y", g), s.style.display = "inherit", x.appendChild(s), this.textSpans[e] || (this.textSpans[e] = {
                        span: null,
                        glyph: null
                    }), this.textSpans[e].span = s, g += r.finalLineHeight;
                    this.layerElement.appendChild(x)
                }
                for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
                this._sizeChanged = !0
            }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                    this._sizeChanged = !1;
                    var e = this.layerElement.getBBox();
                    this.bbox = {
                        top: e.y,
                        left: e.x,
                        width: e.width,
                        height: e.height
                    }
                }
                return this.bbox
            }, SVGTextLottieElement.prototype.getValue = function() {
                var e, t, r = this.textSpans.length;
                for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < r; e += 1)(t = this.textSpans[e].glyph) && (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0))
            }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                    var e, t;
                    this._sizeChanged = !0;
                    var r, n, i, a = this.textAnimator.renderedLetters,
                        s = this.textProperty.currentData.l;
                    for (t = s.length, e = 0; e < t; e += 1) s[e].n || (r = a[e], n = this.textSpans[e].span, (i = this.textSpans[e].glyph) && i.renderFrame(), r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc))
                }
            }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                var e = createNS("rect");
                e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
            }, NullElement.prototype.prepareFrame = function(e) {
                this.prepareProperties(e, !0)
            }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                return null
            }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(e) {
                return new NullElement(e, this.globalData, this)
            }, SVGRendererBase.prototype.createShape = function(e) {
                return new SVGShapeElement(e, this.globalData, this)
            }, SVGRendererBase.prototype.createText = function(e) {
                return new SVGTextLottieElement(e, this.globalData, this)
            }, SVGRendererBase.prototype.createImage = function(e) {
                return new IImageElement(e, this.globalData, this)
            }, SVGRendererBase.prototype.createSolid = function(e) {
                return new ISolidElement(e, this.globalData, this)
            }, SVGRendererBase.prototype.configAnimation = function(e) {
                this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                var t = this.globalData.defs;
                this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
                var r = createNS("clipPath"),
                    n = createNS("rect");
                n.setAttribute("width", e.w), n.setAttribute("height", e.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
                var i = createElementID();
                r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
            }, SVGRendererBase.prototype.destroy = function() {
                var e;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                var t = this.layers ? this.layers.length : 0;
                for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null
            }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(e) {
                var t = 0,
                    r = this.layers.length;
                for (t = 0; t < r; t += 1)
                    if (this.layers[t].ind === e) return t;
                return -1
            }, SVGRendererBase.prototype.buildItem = function(e) {
                var t = this.elements;
                if (!t[e] && this.layers[e].ty !== 99) {
                    t[e] = !0;
                    var r = this.createItem(this.layers[e]);
                    if (t[e] = r, getExpressionsPlugin() && (this.layers[e].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
                        var n = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
                        if (n === -1) return;
                        if (this.elements[n] && this.elements[n] !== !0) {
                            var i = t[n].getMatte(this.layers[e].tt);
                            r.setMatte(i)
                        } else this.buildItem(n), this.addPendingElement(r)
                    }
                }
            }, SVGRendererBase.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) {
                    var e = this.pendingElements.pop();
                    if (e.checkParenting(), e.data.tt)
                        for (var t = 0, r = this.elements.length; t < r;) {
                            if (this.elements[t] === e) {
                                var n = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                                    i = this.elements[n].getMatte(this.layers[t].tt);
                                e.setMatte(i);
                                break
                            }
                            t += 1
                        }
                }
            }, SVGRendererBase.prototype.renderFrame = function(e) {
                if (this.renderedFrame !== e && !this.destroyed) {
                    var t;
                    e === null ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
                    var r = this.layers.length;
                    for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
                    if (this.globalData._mdf)
                        for (t = 0; t < r; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }
            }, SVGRendererBase.prototype.appendElementInPos = function(e, t) {
                var r = e.getBaseElement();
                if (r) {
                    for (var n, i = 0; i < t;) this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
                    n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r)
                }
            }, SVGRendererBase.prototype.hide = function() {
                this.layerElement.style.display = "none"
            }, SVGRendererBase.prototype.show = function() {
                this.layerElement.style.display = "block"
            }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(e, t, r) {
                this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
            }, ICompElement.prototype.prepareFrame = function(e) {
                if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) {
                    if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
                    else {
                        var t = this.tm.v;
                        t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
                    }
                    var r, n = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
                }
            }, ICompElement.prototype.renderInnerContent = function() {
                var e, t = this.layers.length;
                for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }, ICompElement.prototype.setElements = function(e) {
                this.elements = e
            }, ICompElement.prototype.getElements = function() {
                return this.elements
            }, ICompElement.prototype.destroyElements = function() {
                var e, t = this.layers.length;
                for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
            }, ICompElement.prototype.destroy = function() {
                this.destroyElements(), this.destroyBaseElement()
            }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(e) {
                return new SVGCompElement(e, this.globalData, this)
            }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(e) {
                return new SVGCompElement(e, this.globalData, this)
            }, ShapeTransformManager.prototype = {
                addTransformSequence: function(e) {
                    var t, r = e.length,
                        n = "_";
                    for (t = 0; t < r; t += 1) n += e[t].transform.key + "_";
                    var i = this.sequences[n];
                    return i || (i = {
                        transforms: [].concat(e),
                        finalTransform: new Matrix,
                        _mdf: !1
                    }, this.sequences[n] = i, this.sequenceList.push(i)), i
                },
                processSequence: function(e, t) {
                    for (var r = 0, n = e.transforms.length, i = t; r < n && !t;) {
                        if (e.transforms[r].transform.mProps._mdf) {
                            i = !0;
                            break
                        }
                        r += 1
                    }
                    if (i)
                        for (e.finalTransform.reset(), r = n - 1; r >= 0; r -= 1) e.finalTransform.multiply(e.transforms[r].transform.mProps.v);
                    e._mdf = i
                },
                processSequences: function(e) {
                    var t, r = this.sequenceList.length;
                    for (t = 0; t < r; t += 1) this.processSequence(this.sequenceList[t], e)
                },
                getNewKey: function() {
                    return this.transform_key_count += 1, "_" + this.transform_key_count
                }
            };
            var lumaLoader = function() {
                var e = "__lottie_element_luma_buffer",
                    t = null,
                    r = null,
                    n = null;

                function i() {
                    var a, s, o;
                    t || (a = createNS("svg"), s = createNS("filter"), o = createNS("feColorMatrix"), s.setAttribute("id", e), o.setAttribute("type", "matrix"), o.setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), s.appendChild(o), a.appendChild(s), a.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (a.style.display = "none"), n = a, document.body.appendChild(n), t = createTag("canvas"), (r = t.getContext("2d")).filter = "url(#" + e + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
                }
                return {
                    load: i,
                    get: function(a) {
                        return t || i(), t.width = a.width, t.height = a.height, r.filter = "url(#" + e + ")", t
                    }
                }
            };

            function createCanvas(e, t) {
                if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
                var r = createTag("canvas");
                return r.width = e, r.height = t, r
            }
            var assetLoader = {
                    loadLumaCanvas: lumaLoader.load,
                    getLumaCanvas: lumaLoader.get,
                    createCanvas
                },
                registeredEffects = {};

            function CVEffects(e) {
                var t, r, n = e.data.ef ? e.data.ef.length : 0;
                for (this.filters = [], t = 0; t < n; t += 1) {
                    r = null;
                    var i = e.data.ef[t].ty;
                    registeredEffects[i] && (r = new registeredEffects[i].effect(e.effectsManager.effectElements[t], e)), r && this.filters.push(r)
                }
                this.filters.length && e.addRenderableComponent(this)
            }

            function registerEffect(e, t) {
                registeredEffects[e] = {
                    effect: t
                }
            }

            function CVMaskElement(e, t) {
                var r;
                this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                var n = this.masksProperties.length,
                    i = !1;
                for (r = 0; r < n; r += 1) this.masksProperties[r].mode !== "n" && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
                this.hasMasks = i, i && this.element.addRenderableComponent(this)
            }

            function CVBaseElement() {}
            CVEffects.prototype.renderFrame = function(e) {
                var t, r = this.filters.length;
                for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
            }, CVEffects.prototype.getEffects = function(e) {
                var t, r = this.filters.length,
                    n = [];
                for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
                return n
            }, CVMaskElement.prototype.renderFrame = function() {
                if (this.hasMasks) {
                    var e, t, r, n, i = this.element.finalTransform.mat,
                        a = this.element.canvasContext,
                        s = this.masksProperties.length;
                    for (a.beginPath(), e = 0; e < s; e += 1)
                        if (this.masksProperties[e].mode !== "n") {
                            var o;
                            this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), n = this.viewData[e].v, t = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), a.moveTo(t[0], t[1]);
                            var l = n._length;
                            for (o = 1; o < l; o += 1) r = i.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                            r = i.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
                        }
                    this.element.globalData.renderer.save(!0), a.clip()
                }
            }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                this.element = null
            };
            var operationsMap = {
                1: "source-in",
                2: "source-out",
                3: "source-in",
                4: "source-out"
            };

            function CVShapeData(e, t, r, n) {
                this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                var i, a = 4;
                t.ty === "rc" ? a = 5 : t.ty === "el" ? a = 6 : t.ty === "sr" && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e);
                var s, o = r.length;
                for (i = 0; i < o; i += 1) r[i].closed || (s = {
                    transforms: n.addTransformSequence(r[i].transforms),
                    trNodes: []
                }, this.styledShapes.push(s), r[i].elements.push(s))
            }

            function CVShapeElement(e, t, r) {
                this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
            }

            function CVTextElement(e, t, r) {
                this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                    fill: "rgba(0,0,0,0)",
                    stroke: "rgba(0,0,0,0)",
                    sWidth: 0,
                    fValue: ""
                }, this.initElement(e, t, r)
            }

            function CVImageElement(e, t, r) {
                this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r)
            }

            function CVSolidElement(e, t, r) {
                this.initElement(e, t, r)
            }

            function CanvasRendererBase() {}

            function CanvasContext() {
                this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
            }

            function CVContextData() {
                var e;
                for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, e = 0; e < 15; e += 1) {
                    var t = new CanvasContext;
                    this.stack[e] = t
                }
                this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
            }

            function CVCompElement(e, t, r) {
                this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function CanvasRenderer(e, t) {
                this.animationItem = e, this.renderConfig = {
                    clearCanvas: !t || t.clearCanvas === void 0 || t.clearCanvas,
                    context: t && t.context || null,
                    progressiveLoad: t && t.progressiveLoad || !1,
                    preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                    contentVisibility: t && t.contentVisibility || "visible",
                    className: t && t.className || "",
                    id: t && t.id || "",
                    runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
                }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                    frameNum: -1,
                    _mdf: !1,
                    renderConfig: this.renderConfig,
                    currentGlobalAlpha: -1
                }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
            }

            function HBaseElement() {}

            function HSolidElement(e, t, r) {
                this.initElement(e, t, r)
            }

            function HShapeElement(e, t, r) {
                this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }
            }

            function HTextElement(e, t, r) {
                this.textSpans = [], this.textPaths = [], this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
            }

            function HCameraElement(e, t, r) {
                this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
                var n = PropertyFactory.getProp;
                if (this.pe = n(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = n(this, e.ks.p.x, 1, 0, this), this.py = n(this, e.ks.p.y, 1, 0, this), this.pz = n(this, e.ks.p.z, 1, 0, this)) : this.p = n(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = n(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
                    var i, a = e.ks.or.k.length;
                    for (i = 0; i < a; i += 1) e.ks.or.k[i].to = null, e.ks.or.k[i].ti = null
                }
                this.or = n(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, e.ks.rx, 0, degToRads, this), this.ry = n(this, e.ks.ry, 0, degToRads, this), this.rz = n(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                    mProp: this
                }
            }

            function HImageElement(e, t, r) {
                this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
            }

            function HybridRendererBase(e, t) {
                this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                    className: t && t.className || "",
                    imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !(t && t.hideOnTransparent === !1),
                    filterSize: {
                        width: t && t.filterSize && t.filterSize.width || "400%",
                        height: t && t.filterSize && t.filterSize.height || "400%",
                        x: t && t.filterSize && t.filterSize.x || "-100%",
                        y: t && t.filterSize && t.filterSize.y || "-100%"
                    }
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
            }

            function HCompElement(e, t, r) {
                this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
                    _placeholder: !0
                }
            }

            function HybridRenderer(e, t) {
                this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                    className: t && t.className || "",
                    imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !(t && t.hideOnTransparent === !1),
                    filterSize: {
                        width: t && t.filterSize && t.filterSize.width || "400%",
                        height: t && t.filterSize && t.filterSize.height || "400%",
                        x: t && t.filterSize && t.filterSize.x || "-100%",
                        y: t && t.filterSize && t.filterSize.y || "-100%"
                    },
                    runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
                }, this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
            }
            CVBaseElement.prototype = {
                createElements: function() {},
                initRendererElement: function() {},
                createContainerElements: function() {
                    if (this.data.tt >= 1) {
                        this.buffers = [];
                        var e = this.globalData.canvasContext,
                            t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                        this.buffers.push(t);
                        var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                        this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                    }
                    this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
                },
                createContent: function() {},
                setBlendMode: function() {
                    var e = this.globalData;
                    if (e.blendMode !== this.data.bm) {
                        e.blendMode = this.data.bm;
                        var t = getBlendMode(this.data.bm);
                        e.canvasContext.globalCompositeOperation = t
                    }
                },
                createRenderableComponents: function() {
                    this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
                },
                hideElement: function() {
                    this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                },
                showElement: function() {
                    this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                },
                clearCanvas: function(e) {
                    e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
                },
                prepareLayer: function() {
                    if (this.data.tt >= 1) {
                        var e = this.buffers[0].getContext("2d");
                        this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                    }
                },
                exitLayer: function() {
                    if (this.data.tt >= 1) {
                        var e = this.buffers[1],
                            t = e.getContext("2d");
                        if (this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                            var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                            r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
                        }
                        this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                    }
                },
                renderFrame: function(e) {
                    if (!this.hidden && !this.data.hd && (this.data.td !== 1 || e)) {
                        this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                        var t = this.data.ty === 0;
                        this.prepareLayer(), this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(t), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                    }
                },
                destroy: function() {
                    this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                },
                mHelper: new Matrix
            }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                opacity: 1,
                _opMdf: !1
            }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
            }, CVShapeElement.prototype.createStyleElement = function(e, t) {
                var r = {
                        data: e,
                        type: e.ty,
                        preTransforms: this.transformsManager.addTransformSequence(t),
                        transforms: [],
                        elements: [],
                        closed: e.hd === !0
                    },
                    n = {};
                if (e.ty === "fl" || e.ty === "st" ? (n.c = PropertyFactory.getProp(this, e.c, 1, 255, this), n.c.k || (r.co = "rgb(" + bmFloor(n.c.v[0]) + "," + bmFloor(n.c.v[1]) + "," + bmFloor(n.c.v[2]) + ")")) : e.ty !== "gf" && e.ty !== "gs" || (n.s = PropertyFactory.getProp(this, e.s, 1, null, this), n.e = PropertyFactory.getProp(this, e.e, 1, null, this), n.h = PropertyFactory.getProp(this, e.h || {
                        k: 0
                    }, 0, .01, this), n.a = PropertyFactory.getProp(this, e.a || {
                        k: 0
                    }, 0, degToRads, this), n.g = new GradientProperty(this, e.g, this)), n.o = PropertyFactory.getProp(this, e.o, 0, .01, this), e.ty === "st" || e.ty === "gs") {
                    if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], e.lj == 1 && (r.ml = e.ml), n.w = PropertyFactory.getProp(this, e.w, 0, null, this), n.w.k || (r.wi = n.w.v), e.d) {
                        var i = new DashProperty(this, e.d, "canvas", this);
                        n.d = i, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0])
                    }
                } else r.r = e.r === 2 ? "evenodd" : "nonzero";
                return this.stylesList.push(r), n.style = r, n
            }, CVShapeElement.prototype.createGroupElement = function() {
                return {
                    it: [],
                    prevViewData: []
                }
            }, CVShapeElement.prototype.createTransformElement = function(e) {
                return {
                    transform: {
                        opacity: 1,
                        _opMdf: !1,
                        key: this.transformsManager.getNewKey(),
                        op: PropertyFactory.getProp(this, e.o, 0, .01, this),
                        mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
                    }
                }
            }, CVShapeElement.prototype.createShapeElement = function(e) {
                var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
                return this.shapes.push(t), this.addShapeToModifiers(t), t
            }, CVShapeElement.prototype.reloadShapes = function() {
                var e;
                this._isFirstFrame = !0;
                var t = this.itemsData.length;
                for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
            }, CVShapeElement.prototype.addTransformToStyleList = function(e) {
                var t, r = this.stylesList.length;
                for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
            }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                var e, t = this.stylesList.length;
                for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
            }, CVShapeElement.prototype.closeStyles = function(e) {
                var t, r = e.length;
                for (t = 0; t < r; t += 1) e[t].closed = !0
            }, CVShapeElement.prototype.searchShapes = function(e, t, r, n, i) {
                var a, s, o, l, c, u, f = e.length - 1,
                    g = [],
                    d = [],
                    p = [].concat(i);
                for (a = f; a >= 0; a -= 1) {
                    if ((l = this.searchProcessedElement(e[a])) ? t[a] = r[l - 1] : e[a]._shouldRender = n, e[a].ty === "fl" || e[a].ty === "st" || e[a].ty === "gf" || e[a].ty === "gs") l ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], p), g.push(t[a].style);
                    else if (e[a].ty === "gr") {
                        if (l)
                            for (o = t[a].it.length, s = 0; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s];
                        else t[a] = this.createGroupElement(e[a]);
                        this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, n, p)
                    } else e[a].ty === "tr" ? (l || (u = this.createTransformElement(e[a]), t[a] = u), p.push(t[a]), this.addTransformToStyleList(t[a])) : e[a].ty === "sh" || e[a].ty === "rc" || e[a].ty === "el" || e[a].ty === "sr" ? l || (t[a] = this.createShapeElement(e[a])) : e[a].ty === "tm" || e[a].ty === "rd" || e[a].ty === "pb" || e[a].ty === "zz" || e[a].ty === "op" ? (l ? (c = t[a]).closed = !1 : ((c = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = c, this.shapeModifiers.push(c)), d.push(c)) : e[a].ty === "rp" && (l ? (c = t[a]).closed = !0 : (c = ShapeModifiers.getModifier(e[a].ty), t[a] = c, c.init(this, e, a, t), this.shapeModifiers.push(c), n = !1), d.push(c));
                    this.addProcessedElement(e[a], a + 1)
                }
                for (this.removeTransformFromStyleList(), this.closeStyles(g), f = d.length, a = 0; a < f; a += 1) d[a].closed = !0
            }, CVShapeElement.prototype.renderInnerContent = function() {
                this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
            }, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
                (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
            }, CVShapeElement.prototype.drawLayer = function() {
                var e, t, r, n, i, a, s, o, l, c = this.stylesList.length,
                    u = this.globalData.renderer,
                    f = this.globalData.canvasContext;
                for (e = 0; e < c; e += 1)
                    if (((o = (l = this.stylesList[e]).type) !== "st" && o !== "gs" || l.wi !== 0) && l.data._shouldRender && l.coOp !== 0 && this.globalData.currentGlobalAlpha !== 0) {
                        for (u.save(), a = l.elements, o === "st" || o === "gs" ? (u.ctxStrokeStyle(o === "st" ? l.co : l.grd), u.ctxLineWidth(l.wi), u.ctxLineCap(l.lc), u.ctxLineJoin(l.lj), u.ctxMiterLimit(l.ml || 0)) : u.ctxFillStyle(o === "fl" ? l.co : l.grd), u.ctxOpacity(l.coOp), o !== "st" && o !== "gs" && f.beginPath(), u.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, t = 0; t < r; t += 1) {
                            for (o !== "st" && o !== "gs" || (f.beginPath(), l.da && (f.setLineDash(l.da), f.lineDashOffset = l.do)), i = (s = a[t].trNodes).length, n = 0; n < i; n += 1) s[n].t === "m" ? f.moveTo(s[n].p[0], s[n].p[1]) : s[n].t === "c" ? f.bezierCurveTo(s[n].pts[0], s[n].pts[1], s[n].pts[2], s[n].pts[3], s[n].pts[4], s[n].pts[5]) : f.closePath();
                            o !== "st" && o !== "gs" || (u.ctxStroke(), l.da && f.setLineDash(this.dashResetter))
                        }
                        o !== "st" && o !== "gs" && this.globalData.renderer.ctxFill(l.r), u.restore()
                    }
            }, CVShapeElement.prototype.renderShape = function(e, t, r, n) {
                var i, a;
                for (a = e, i = t.length - 1; i >= 0; i -= 1) t[i].ty === "tr" ? (a = r[i].transform, this.renderShapeTransform(e, a)) : t[i].ty === "sh" || t[i].ty === "el" || t[i].ty === "rc" || t[i].ty === "sr" ? this.renderPath(t[i], r[i]) : t[i].ty === "fl" ? this.renderFill(t[i], r[i], a) : t[i].ty === "st" ? this.renderStroke(t[i], r[i], a) : t[i].ty === "gf" || t[i].ty === "gs" ? this.renderGradientFill(t[i], r[i], a) : t[i].ty === "gr" ? this.renderShape(a, t[i].it, r[i].it) : t[i].ty;
                n && this.drawLayer()
            }, CVShapeElement.prototype.renderStyledShape = function(e, t) {
                if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
                    var r, n, i, a = e.trNodes,
                        s = t.paths,
                        o = s._length;
                    a.length = 0;
                    var l = e.transforms.finalTransform;
                    for (i = 0; i < o; i += 1) {
                        var c = s.shapes[i];
                        if (c && c.v) {
                            for (n = c._length, r = 1; r < n; r += 1) r === 1 && a.push({
                                t: "m",
                                p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                            }), a.push({
                                t: "c",
                                pts: l.applyToTriplePoints(c.o[r - 1], c.i[r], c.v[r])
                            });
                            n === 1 && a.push({
                                t: "m",
                                p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                            }), c.c && n && (a.push({
                                t: "c",
                                pts: l.applyToTriplePoints(c.o[r - 1], c.i[0], c.v[0])
                            }), a.push({
                                t: "z"
                            }))
                        }
                    }
                    e.trNodes = a
                }
            }, CVShapeElement.prototype.renderPath = function(e, t) {
                if (e.hd !== !0 && e._shouldRender) {
                    var r, n = t.styledShapes.length;
                    for (r = 0; r < n; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
                }
            }, CVShapeElement.prototype.renderFill = function(e, t, r) {
                var n = t.style;
                (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity)
            }, CVShapeElement.prototype.renderGradientFill = function(e, t, r) {
                var n, i = t.style;
                if (!i.grd || t.g._mdf || t.s._mdf || t.e._mdf || e.t !== 1 && (t.h._mdf || t.a._mdf)) {
                    var a, s = this.globalData.canvasContext,
                        o = t.s.v,
                        l = t.e.v;
                    if (e.t === 1) n = s.createLinearGradient(o[0], o[1], l[0], l[1]);
                    else {
                        var c = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                            u = Math.atan2(l[1] - o[1], l[0] - o[0]),
                            f = t.h.v;
                        f >= 1 ? f = .99 : f <= -1 && (f = -.99);
                        var g = c * f,
                            d = Math.cos(u + t.a.v) * g + o[0],
                            p = Math.sin(u + t.a.v) * g + o[1];
                        n = s.createRadialGradient(d, p, 0, o[0], o[1], c)
                    }
                    var m = e.g.p,
                        h = t.g.c,
                        v = 1;
                    for (a = 0; a < m; a += 1) t.g._hasOpacity && t.g._collapsable && (v = t.g.o[2 * a + 1]), n.addColorStop(h[4 * a] / 100, "rgba(" + h[4 * a + 1] + "," + h[4 * a + 2] + "," + h[4 * a + 3] + "," + v + ")");
                    i.grd = n
                }
                i.coOp = t.o.v * r.opacity
            }, CVShapeElement.prototype.renderStroke = function(e, t, r) {
                var n = t.style,
                    i = t.d;
                i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (n.wi = t.w.v)
            }, CVShapeElement.prototype.destroy = function() {
                this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                var e = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
                var t = !1;
                e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
                var r = !1;
                e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
                var n, i, a, s, o, l, c, u, f, g, d, p, m = this.globalData.fontManager.getFontByName(e.f),
                    h = e.l,
                    v = this.mHelper;
                this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, i = e.finalText.length;
                var y = this.data.singleShape,
                    b = .001 * e.tr * e.finalSize,
                    S = 0,
                    x = 0,
                    T = !0,
                    _ = 0;
                for (n = 0; n < i; n += 1) {
                    s = (a = this.globalData.fontManager.getCharData(e.finalText[n], m.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && a.data || {}, v.reset(), y && h[n].n && (S = -b, x += e.yOffset, x += T ? 1 : 0, T = !1), f = (c = s.shapes ? s.shapes[0].it : []).length, v.scale(e.finalSize / 100, e.finalSize / 100), y && this.applyTextPropertiesToMatrix(e, v, h[n].line, S, x), d = createSizedArray(f - 1);
                    var P = 0;
                    for (u = 0; u < f; u += 1)
                        if (c[u].ty === "sh") {
                            for (l = c[u].ks.k.i.length, g = c[u].ks.k, p = [], o = 1; o < l; o += 1) o === 1 && p.push(v.applyToX(g.v[0][0], g.v[0][1], 0), v.applyToY(g.v[0][0], g.v[0][1], 0)), p.push(v.applyToX(g.o[o - 1][0], g.o[o - 1][1], 0), v.applyToY(g.o[o - 1][0], g.o[o - 1][1], 0), v.applyToX(g.i[o][0], g.i[o][1], 0), v.applyToY(g.i[o][0], g.i[o][1], 0), v.applyToX(g.v[o][0], g.v[o][1], 0), v.applyToY(g.v[o][0], g.v[o][1], 0));
                            p.push(v.applyToX(g.o[o - 1][0], g.o[o - 1][1], 0), v.applyToY(g.o[o - 1][0], g.o[o - 1][1], 0), v.applyToX(g.i[0][0], g.i[0][1], 0), v.applyToY(g.i[0][0], g.i[0][1], 0), v.applyToX(g.v[0][0], g.v[0][1], 0), v.applyToY(g.v[0][0], g.v[0][1], 0)), d[P] = p, P += 1
                        }
                    y && (S += h[n].l, S += b), this.textSpans[_] ? this.textSpans[_].elem = d : this.textSpans[_] = {
                        elem: d
                    }, _ += 1
                }
            }, CVTextElement.prototype.renderInnerContent = function() {
                var e, t, r, n, i, a;
                this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var s, o = this.textAnimator.renderedLetters,
                    l = this.textProperty.currentData.l;
                t = l.length;
                var c, u, f = null,
                    g = null,
                    d = null,
                    p = this.globalData.renderer;
                for (e = 0; e < t; e += 1)
                    if (!l[e].n) {
                        if ((s = o[e]) && (p.save(), p.ctxTransform(s.p), p.ctxOpacity(s.o)), this.fill) {
                            for (s && s.fc ? f !== s.fc && (p.ctxFillStyle(s.fc), f = s.fc) : f !== this.values.fill && (f = this.values.fill, p.ctxFillStyle(this.values.fill)), n = (c = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                                for (a = (u = c[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
                            this.globalData.canvasContext.closePath(), p.ctxFill()
                        }
                        if (this.stroke) {
                            for (s && s.sw ? d !== s.sw && (d = s.sw, p.ctxLineWidth(s.sw)) : d !== this.values.sWidth && (d = this.values.sWidth, p.ctxLineWidth(this.values.sWidth)), s && s.sc ? g !== s.sc && (g = s.sc, p.ctxStrokeStyle(s.sc)) : g !== this.values.stroke && (g = this.values.stroke, p.ctxStrokeStyle(this.values.stroke)), n = (c = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                                for (a = (u = c[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
                            this.globalData.canvasContext.closePath(), p.ctxStroke()
                        }
                        s && this.globalData.renderer.restore()
                    }
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                    var e = createTag("canvas");
                    e.width = this.assetData.w, e.height = this.assetData.h;
                    var t, r, n = e.getContext("2d"),
                        i = this.img.width,
                        a = this.img.height,
                        s = i / a,
                        o = this.assetData.w / this.assetData.h,
                        l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                    s > o && l === "xMidYMid slice" || s < o && l !== "xMidYMid slice" ? t = (r = a) * o : r = (t = i) / o, n.drawImage(this.img, (i - t) / 2, (a - r) / 2, t, r, 0, 0, this.assetData.w, this.assetData.h), this.img = e
                }
            }, CVImageElement.prototype.renderInnerContent = function() {
                this.canvasContext.drawImage(this.img, 0, 0)
            }, CVImageElement.prototype.destroy = function() {
                this.img = null
            }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
            }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(e) {
                return new CVShapeElement(e, this.globalData, this)
            }, CanvasRendererBase.prototype.createText = function(e) {
                return new CVTextElement(e, this.globalData, this)
            }, CanvasRendererBase.prototype.createImage = function(e) {
                return new CVImageElement(e, this.globalData, this)
            }, CanvasRendererBase.prototype.createSolid = function(e) {
                return new CVSolidElement(e, this.globalData, this)
            }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(e) {
                e[0] === 1 && e[1] === 0 && e[4] === 0 && e[5] === 1 && e[12] === 0 && e[13] === 0 || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
            }, CanvasRendererBase.prototype.ctxOpacity = function(e) {
                this.canvasContext.globalAlpha *= e < 0 ? 0 : e
            }, CanvasRendererBase.prototype.ctxFillStyle = function(e) {
                this.canvasContext.fillStyle = e
            }, CanvasRendererBase.prototype.ctxStrokeStyle = function(e) {
                this.canvasContext.strokeStyle = e
            }, CanvasRendererBase.prototype.ctxLineWidth = function(e) {
                this.canvasContext.lineWidth = e
            }, CanvasRendererBase.prototype.ctxLineCap = function(e) {
                this.canvasContext.lineCap = e
            }, CanvasRendererBase.prototype.ctxLineJoin = function(e) {
                this.canvasContext.lineJoin = e
            }, CanvasRendererBase.prototype.ctxMiterLimit = function(e) {
                this.canvasContext.miterLimit = e
            }, CanvasRendererBase.prototype.ctxFill = function(e) {
                this.canvasContext.fill(e)
            }, CanvasRendererBase.prototype.ctxFillRect = function(e, t, r, n) {
                this.canvasContext.fillRect(e, t, r, n)
            }, CanvasRendererBase.prototype.ctxStroke = function() {
                this.canvasContext.stroke()
            }, CanvasRendererBase.prototype.reset = function() {
                this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
            }, CanvasRendererBase.prototype.save = function() {
                this.canvasContext.save()
            }, CanvasRendererBase.prototype.restore = function(e) {
                this.renderConfig.clearCanvas ? (e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e)) : this.canvasContext.restore()
            }, CanvasRendererBase.prototype.configAnimation = function(e) {
                if (this.animationItem.wrapper) {
                    this.animationItem.container = createTag("canvas");
                    var t = this.animationItem.container.style;
                    t.width = "100%", t.height = "100%";
                    var r = "0px 0px 0px";
                    t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                } else this.canvasContext = this.renderConfig.context;
                this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
                    w: e.w,
                    h: e.h,
                    sx: 0,
                    sy: 0,
                    tx: 0,
                    ty: 0
                }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
            }, CanvasRendererBase.prototype.updateContainerSize = function(e, t) {
                var r, n, i, a;
                if (this.reset(), e ? (r = e, n = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = n) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, n = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, n = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = n * this.renderConfig.dpr), this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
                    var s = this.renderConfig.preserveAspectRatio.split(" "),
                        o = s[1] || "meet",
                        l = s[0] || "xMidYMid",
                        c = l.substr(0, 4),
                        u = l.substr(4);
                    i = r / n, (a = this.transformCanvas.w / this.transformCanvas.h) > i && o === "meet" || a < i && o === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = c === "xMid" && (a < i && o === "meet" || a > i && o === "slice") ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : c === "xMax" && (a < i && o === "meet" || a > i && o === "slice") ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = u === "YMid" && (a > i && o === "meet" || a < i && o === "slice") ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : u === "YMax" && (a > i && o === "meet" || a < i && o === "slice") ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
            }, CanvasRendererBase.prototype.destroy = function() {
                var e;
                for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
            }, CanvasRendererBase.prototype.renderFrame = function(e, t) {
                if ((this.renderedFrame !== e || this.renderConfig.clearCanvas !== !0 || t) && !this.destroyed && e !== -1) {
                    var r;
                    this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
                    var n = this.layers.length;
                    for (this.completeLayers || this.checkLayers(e), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
                    if (this.globalData._mdf) {
                        for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                        this.renderConfig.clearCanvas !== !0 && this.restore()
                    }
                }
            }, CanvasRendererBase.prototype.buildItem = function(e) {
                var t = this.elements;
                if (!t[e] && this.layers[e].ty !== 99) {
                    var r = this.createItem(this.layers[e], this, this.globalData);
                    t[e] = r, r.initExpressions()
                }
            }, CanvasRendererBase.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
            }, CanvasRendererBase.prototype.hide = function() {
                this.animationItem.container.style.display = "none"
            }, CanvasRendererBase.prototype.show = function() {
                this.animationItem.container.style.display = "block"
            }, CVContextData.prototype.duplicate = function() {
                var e = 2 * this._length,
                    t = 0;
                for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext;
                this._length = e
            }, CVContextData.prototype.reset = function() {
                this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
            }, CVContextData.prototype.restore = function(e) {
                this.cArrPos -= 1;
                var t, r = this.stack[this.cArrPos],
                    n = r.transform,
                    i = this.cTr.props;
                for (t = 0; t < 16; t += 1) i[t] = n[t];
                if (e) {
                    this.nativeContext.restore();
                    var a = this.stack[this.cArrPos + 1];
                    this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
                }
                this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]), (e || r.opacity !== -1 && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
            }, CVContextData.prototype.save = function(e) {
                e && this.nativeContext.save();
                var t = this.cTr.props;
                this._length <= this.cArrPos && this.duplicate();
                var r, n = this.stack[this.cArrPos];
                for (r = 0; r < 16; r += 1) n.transform[r] = t[r];
                this.cArrPos += 1;
                var i = this.stack[this.cArrPos];
                i.opacity = n.opacity, i.fillStyle = n.fillStyle, i.strokeStyle = n.strokeStyle, i.lineWidth = n.lineWidth, i.lineCap = n.lineCap, i.lineJoin = n.lineJoin, i.miterLimit = n.miterLimit
            }, CVContextData.prototype.setOpacity = function(e) {
                this.stack[this.cArrPos].opacity = e
            }, CVContextData.prototype.setContext = function(e) {
                this.nativeContext = e
            }, CVContextData.prototype.fillStyle = function(e) {
                this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e)
            }, CVContextData.prototype.strokeStyle = function(e) {
                this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e)
            }, CVContextData.prototype.lineWidth = function(e) {
                this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e)
            }, CVContextData.prototype.lineCap = function(e) {
                this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e)
            }, CVContextData.prototype.lineJoin = function(e) {
                this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e)
            }, CVContextData.prototype.miterLimit = function(e) {
                this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e)
            }, CVContextData.prototype.transform = function(e) {
                this.transformMat.cloneFromProps(e);
                var t = this.cTr;
                this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
                var r = t.props;
                this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
            }, CVContextData.prototype.opacity = function(e) {
                var t = this.stack[this.cArrPos].opacity;
                t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t)
            }, CVContextData.prototype.fill = function(e) {
                this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e)
            }, CVContextData.prototype.fillRect = function(e, t, r, n) {
                this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, r, n)
            }, CVContextData.prototype.stroke = function() {
                this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
            }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                var e, t = this.canvasContext;
                for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }, CVCompElement.prototype.destroy = function() {
                var e;
                for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
                this.layers = null, this.elements = null
            }, CVCompElement.prototype.createComp = function(e) {
                return new CVCompElement(e, this.globalData, this)
            }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(e) {
                return new CVCompElement(e, this.globalData, this)
            }, HBaseElement.prototype = {
                checkBlendMode: function() {},
                initRendererElement: function() {
                    this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                },
                createContainerElements: function() {
                    this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode()
                },
                renderElement: function() {
                    var e = this.transformedElement ? this.transformedElement.style : {};
                    if (this.finalTransform._matMdf) {
                        var t = this.finalTransform.mat.toCSS();
                        e.transform = t, e.webkitTransform = t
                    }
                    this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                },
                destroy: function() {
                    this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data, this, this.globalData)
                },
                addEffects: function() {},
                setMatte: function() {}
            }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                var e;
                this.data.hasMask ? ((e = createNS("rect")).setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((e = createTag("div")).style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
            }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                var e;
                if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
                else {
                    e = createNS("svg");
                    var t = this.comp.data ? this.comp.data : this.globalData.compSize;
                    e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
                }
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
            }, HShapeElement.prototype.getTransformedPoint = function(e, t) {
                var r, n = e.length;
                for (r = 0; r < n; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
                return t
            }, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) {
                var r, n, i, a, s, o = e.sh.v,
                    l = e.transformers,
                    c = o._length;
                if (!(c <= 1)) {
                    for (r = 0; r < c - 1; r += 1) n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(n, i, a, s, t);
                    o.c && (n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(n, i, a, s, t))
                }
            }, HShapeElement.prototype.checkBounds = function(e, t, r, n, i) {
                this.getBoundsOfCurve(e, t, r, n);
                var a = this.shapeBoundingBox;
                i.x = bmMin(a.left, i.x), i.xMax = bmMax(a.right, i.xMax), i.y = bmMin(a.top, i.y), i.yMax = bmMax(a.bottom, i.yMax)
            }, HShapeElement.prototype.shapeBoundingBox = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, HShapeElement.prototype.tempBoundingBox = {
                x: 0,
                xMax: 0,
                y: 0,
                yMax: 0,
                width: 0,
                height: 0
            }, HShapeElement.prototype.getBoundsOfCurve = function(e, t, r, n) {
                for (var i, a, s, o, l, c, u, f = [
                        [e[0], n[0]],
                        [e[1], n[1]]
                    ], g = 0; g < 2; ++g) a = 6 * e[g] - 12 * t[g] + 6 * r[g], i = -3 * e[g] + 9 * t[g] - 9 * r[g] + 3 * n[g], s = 3 * t[g] - 3 * e[g], a |= 0, s |= 0, (i |= 0) === 0 && a === 0 || (i === 0 ? (o = -s / a) > 0 && o < 1 && f[g].push(this.calculateF(o, e, t, r, n, g)) : (l = a * a - 4 * s * i) >= 0 && ((c = (-a + bmSqrt(l)) / (2 * i)) > 0 && c < 1 && f[g].push(this.calculateF(c, e, t, r, n, g)), (u = (-a - bmSqrt(l)) / (2 * i)) > 0 && u < 1 && f[g].push(this.calculateF(u, e, t, r, n, g))));
                this.shapeBoundingBox.left = bmMin.apply(null, f[0]), this.shapeBoundingBox.top = bmMin.apply(null, f[1]), this.shapeBoundingBox.right = bmMax.apply(null, f[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, f[1])
            }, HShapeElement.prototype.calculateF = function(e, t, r, n, i, a) {
                return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * r[a] + 3 * (1 - e) * bmPow(e, 2) * n[a] + bmPow(e, 3) * i[a]
            }, HShapeElement.prototype.calculateBoundingBox = function(e, t) {
                var r, n = e.length;
                for (r = 0; r < n; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t)
            }, HShapeElement.prototype.expandStrokeBoundingBox = function(e, t) {
                var r = 0;
                if (e.keyframes) {
                    for (var n = 0; n < e.keyframes.length; n += 1) {
                        var i = e.keyframes[n].s;
                        i > r && (r = i)
                    }
                    r *= e.mult
                } else r = e.v * e.mult;
                t.x -= r, t.xMax += r, t.y -= r, t.yMax += r
            }, HShapeElement.prototype.currentBoxContains = function(e) {
                return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
            }, HShapeElement.prototype.renderInnerContent = function() {
                if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var e = this.tempBoundingBox,
                        t = 999999;
                    if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
                    var r = !1;
                    if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
                        this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                        var n = this.shapeCont.style,
                            i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        n.transform = i, n.webkitTransform = i
                    }
                }
            }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                if (this.isMasked = this.checkMasks(), this.isMasked) {
                    this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                    var e = createNS("g");
                    this.maskedElement.appendChild(e), this.innerElem = e
                } else this.renderType = "html", this.innerElem = this.layerElement;
                this.checkParenting()
            }, HTextElement.prototype.buildNewText = function() {
                var e = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
                var t = this.innerElem.style,
                    r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
                t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
                var n, i, a = this.globalData.fontManager.getFontByName(e.f);
                if (!this.globalData.fontManager.chars)
                    if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
                    else {
                        t.fontFamily = a.fFamily;
                        var s = e.fWeight,
                            o = e.fStyle;
                        t.fontStyle = o, t.fontWeight = s
                    }
                var l, c, u, f = e.l;
                i = f.length;
                var g, d = this.mHelper,
                    p = "",
                    m = 0;
                for (n = 0; n < i; n += 1) {
                    if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? u = (c = this.textSpans[m]).children[0] : ((c = createTag("div")).style.lineHeight = 0, (u = createNS("svg")).appendChild(l), styleDiv(c)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (c = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(c = createTag("span")), styleDiv(l = createTag("span")), c.appendChild(l)), this.globalData.fontManager.chars) {
                        var h, v = this.globalData.fontManager.getCharData(e.finalText[n], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
                        if (h = v ? v.data : null, d.reset(), h && h.shapes && h.shapes.length && (g = h.shapes[0].it, d.scale(e.finalSize / 100, e.finalSize / 100), p = this.createPathShape(d, g), l.setAttribute("d", p)), this.isMasked) this.innerElem.appendChild(l);
                        else {
                            if (this.innerElem.appendChild(c), h && h.shapes) {
                                document.body.appendChild(u);
                                var y = u.getBBox();
                                u.setAttribute("width", y.width + 2), u.setAttribute("height", y.height + 2), u.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2));
                                var b = u.style,
                                    S = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
                                b.transform = S, b.webkitTransform = S, f[n].yOffset = y.y - 1
                            } else u.setAttribute("width", 1), u.setAttribute("height", 1);
                            c.appendChild(u)
                        }
                    } else if (l.textContent = f[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
                    else {
                        this.innerElem.appendChild(c);
                        var x = l.style,
                            T = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
                        x.transform = T, x.webkitTransform = T
                    }
                    this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = c, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
                }
                for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
            }, HTextElement.prototype.renderInnerContent = function() {
                var e;
                if (this.validateText(), this.data.singleShape) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                    if (this.isMasked && this.finalTransform._matMdf) {
                        this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
                        var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                        e.transform = t, e.webkitTransform = t
                    }
                }
                if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                    var r, n, i, a, s, o = 0,
                        l = this.textAnimator.renderedLetters,
                        c = this.textProperty.currentData.l;
                    for (n = c.length, r = 0; r < n; r += 1) c[r].n ? o += 1 : (a = this.textSpans[r], s = this.textPaths[r], i = l[o], o += 1, i._mdf.m && (this.isMasked ? a.setAttribute("transform", i.m) : (a.style.webkitTransform = i.m, a.style.transform = i.m)), a.style.opacity = i.o, i.sw && i._mdf.sw && s.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && s.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (s.setAttribute("fill", i.fc), s.style.color = i.fc));
                    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var u = this.innerElem.getBBox();
                        if (this.currentBBox.w !== u.width && (this.currentBBox.w = u.width, this.svgElement.setAttribute("width", u.width)), this.currentBBox.h !== u.height && (this.currentBBox.h = u.height, this.svgElement.setAttribute("height", u.height)), this.currentBBox.w !== u.width + 2 || this.currentBBox.h !== u.height + 2 || this.currentBBox.x !== u.x - 1 || this.currentBBox.y !== u.y - 1) {
                            this.currentBBox.w = u.width + 2, this.currentBBox.h = u.height + 2, this.currentBBox.x = u.x - 1, this.currentBBox.y = u.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
                            var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            e.transform = f, e.webkitTransform = f
                        }
                    }
                }
            }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                var e, t, r, n, i = this.comp.threeDElements.length;
                for (e = 0; e < i; e += 1)
                    if ((t = this.comp.threeDElements[e]).type === "3d") {
                        r = t.perspectiveElem.style, n = t.container.style;
                        var a = this.pe.v + "px",
                            s = "0px 0px 0px",
                            o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        r.perspective = a, r.webkitPerspective = a, n.transformOrigin = s, n.mozTransformOrigin = s, n.webkitTransformOrigin = s, r.transform = o, r.webkitTransform = o
                    }
            }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                var e, t, r = this._isFirstFrame;
                if (this.hierarchy)
                    for (t = this.hierarchy.length, e = 0; e < t; e += 1) r = this.hierarchy[e].finalTransform.mProp._mdf || r;
                if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                    if (this.mat.reset(), this.hierarchy)
                        for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) {
                            var n = this.hierarchy[e].finalTransform.mProp;
                            this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
                        }
                    if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                        var i;
                        i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                        var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
                            s = [i[0] / a, i[1] / a, i[2] / a],
                            o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                            l = Math.atan2(s[1], o),
                            c = Math.atan2(s[0], -s[2]);
                        this.mat.rotateY(c).rotateX(-l)
                    }
                    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                    var u = !this._prevMat.equals(this.mat);
                    if ((u || this.pe._mdf) && this.comp.threeDElements) {
                        var f, g, d;
                        for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1)
                            if ((f = this.comp.threeDElements[e]).type === "3d") {
                                if (u) {
                                    var p = this.mat.toCSS();
                                    (d = f.container.style).transform = p, d.webkitTransform = p
                                }
                                this.pe._mdf && ((g = f.perspectiveElem.style).perspective = this.pe.v + "px", g.webkitPerspective = this.pe.v + "px")
                            }
                        this.mat.clone(this._prevMat)
                    }
                }
                this._isFirstFrame = !1
            }, HCameraElement.prototype.prepareFrame = function(e) {
                this.prepareProperties(e, !0)
            }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                return null
            }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                var e = this.globalData.getAssetsPath(this.assetData),
                    t = new Image;
                this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
            }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
            }, HybridRendererBase.prototype.appendElementInPos = function(e, t) {
                var r = e.getBaseElement();
                if (r) {
                    var n = this.layers[t];
                    if (n.ddd && this.supports3d) this.addTo3dContainer(r, t);
                    else if (this.threeDElements) this.addTo3dContainer(r, t);
                    else {
                        for (var i, a, s = 0; s < t;) this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (a = this.elements[s], i = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || i), s += 1;
                        i ? n.ddd && this.supports3d || this.layerElement.insertBefore(r, i) : n.ddd && this.supports3d || this.layerElement.appendChild(r)
                    }
                }
            }, HybridRendererBase.prototype.createShape = function(e) {
                return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
            }, HybridRendererBase.prototype.createText = function(e) {
                return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this)
            }, HybridRendererBase.prototype.createCamera = function(e) {
                return this.camera = new HCameraElement(e, this.globalData, this), this.camera
            }, HybridRendererBase.prototype.createImage = function(e) {
                return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
            }, HybridRendererBase.prototype.createSolid = function(e) {
                return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
            }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(e) {
                for (var t = 0, r = this.threeDElements.length; t < r;) {
                    if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
                    t += 1
                }
                return null
            }, HybridRendererBase.prototype.createThreeDContainer = function(e, t) {
                var r, n, i = createTag("div");
                styleDiv(i);
                var a = createTag("div");
                if (styleDiv(a), t === "3d") {
                    (r = i.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
                    var s = "50% 50%";
                    r.webkitTransformOrigin = s, r.mozTransformOrigin = s, r.transformOrigin = s;
                    var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    (n = a.style).transform = o, n.webkitTransform = o
                }
                i.appendChild(a);
                var l = {
                    container: a,
                    perspectiveElem: i,
                    startPos: e,
                    endPos: e,
                    type: t
                };
                return this.threeDElements.push(l), l
            }, HybridRendererBase.prototype.build3dContainers = function() {
                var e, t, r = this.layers.length,
                    n = "";
                for (e = 0; e < r; e += 1) this.layers[e].ddd && this.layers[e].ty !== 3 ? (n !== "3d" && (n = "3d", t = this.createThreeDContainer(e, "3d")), t.endPos = Math.max(t.endPos, e)) : (n !== "2d" && (n = "2d", t = this.createThreeDContainer(e, "2d")), t.endPos = Math.max(t.endPos, e));
                for (e = (r = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
            }, HybridRendererBase.prototype.addTo3dContainer = function(e, t) {
                for (var r = 0, n = this.threeDElements.length; r < n;) {
                    if (t <= this.threeDElements[r].endPos) {
                        for (var i, a = this.threeDElements[r].startPos; a < t;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
                        i ? this.threeDElements[r].container.insertBefore(e, i) : this.threeDElements[r].container.appendChild(e);
                        break
                    }
                    r += 1
                }
            }, HybridRendererBase.prototype.configAnimation = function(e) {
                var t = createTag("div"),
                    r = this.animationItem.wrapper,
                    n = t.style;
                n.width = e.w + "px", n.height = e.h + "px", this.resizerElem = t, styleDiv(t), n.transformStyle = "flat", n.mozTransformStyle = "flat", n.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), n.overflow = "hidden";
                var i = createNS("svg");
                i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
                var a = createNS("defs");
                i.appendChild(a), this.data = e, this.setupGlobalData(e, i), this.globalData.defs = a, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
            }, HybridRendererBase.prototype.destroy = function() {
                var e;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                var t = this.layers ? this.layers.length : 0;
                for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                this.elements.length = 0, this.destroyed = !0, this.animationItem = null
            }, HybridRendererBase.prototype.updateContainerSize = function() {
                var e, t, r, n, i = this.animationItem.wrapper.offsetWidth,
                    a = this.animationItem.wrapper.offsetHeight,
                    s = i / a;
                this.globalData.compSize.w / this.globalData.compSize.h > s ? (e = i / this.globalData.compSize.w, t = i / this.globalData.compSize.w, r = 0, n = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (e = a / this.globalData.compSize.h, t = a / this.globalData.compSize.h, r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, n = 0);
                var o = this.resizerElem.style;
                o.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + r + "," + n + ",0,1)", o.transform = o.webkitTransform
            }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
                this.resizerElem.style.display = "none"
            }, HybridRendererBase.prototype.show = function() {
                this.resizerElem.style.display = "block"
            }, HybridRendererBase.prototype.initItems = function() {
                if (this.buildAllItems(), this.camera) this.camera.setup();
                else {
                    var e, t = this.globalData.compSize.w,
                        r = this.globalData.compSize.h,
                        n = this.threeDElements.length;
                    for (e = 0; e < n; e += 1) {
                        var i = this.threeDElements[e].perspectiveElem.style;
                        i.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) + "px", i.perspective = i.webkitPerspective
                    }
                }
            }, HybridRendererBase.prototype.searchExtraCompositions = function(e) {
                var t, r = e.length,
                    n = createTag("div");
                for (t = 0; t < r; t += 1)
                    if (e[t].xt) {
                        var i = this.createComp(e[t], n, this.globalData.comp, null);
                        i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                    }
            }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
            }, HCompElement.prototype.addTo3dContainer = function(e, t) {
                for (var r, n = 0; n < t;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
                r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e)
            }, HCompElement.prototype.createComp = function(e) {
                return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
            }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(e) {
                return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
            };
            var CompExpressionInterface = function(e) {
                function t(r) {
                    for (var n = 0, i = e.layers.length; n < i;) {
                        if (e.layers[n].nm === r || e.layers[n].ind === r) return e.elements[n].layerInterface;
                        n += 1
                    }
                    return null
                }
                return Object.defineProperty(t, "_name", {
                    value: e.data.nm
                }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
            };

            function _typeof$2(e) {
                return _typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$2(e)
            }

            function seedRandom(e, t) {
                var r, n = this,
                    i = 256,
                    a = t.pow(i, 6),
                    s = t.pow(2, 52),
                    o = 2 * s,
                    l = 255;

                function c(p) {
                    var m, h = p.length,
                        v = this,
                        y = 0,
                        b = v.i = v.j = 0,
                        S = v.S = [];
                    for (h || (p = [h++]); y < i;) S[y] = y++;
                    for (y = 0; y < i; y++) S[y] = S[b = l & b + p[y % h] + (m = S[y])], S[b] = m;
                    v.g = function(x) {
                        for (var T, _ = 0, P = v.i, F = v.j, w = v.S; x--;) T = w[P = l & P + 1], _ = _ * i + w[l & (w[P] = w[F = l & F + T]) + (w[F] = T)];
                        return v.i = P, v.j = F, _
                    }
                }

                function u(p, m) {
                    return m.i = p.i, m.j = p.j, m.S = p.S.slice(), m
                }

                function f(p, m) {
                    var h, v = [],
                        y = _typeof$2(p);
                    if (m && y == "object")
                        for (h in p) try {
                            v.push(f(p[h], m - 1))
                        } catch {}
                    return v.length ? v : y == "string" ? p : p + "\0"
                }

                function g(p, m) {
                    for (var h, v = p + "", y = 0; y < v.length;) m[l & y] = l & (h ^= 19 * m[l & y]) + v.charCodeAt(y++);
                    return d(m)
                }

                function d(p) {
                    return String.fromCharCode.apply(0, p)
                }
                t.seedrandom = function(p, m, h) {
                    var v = [],
                        y = g(f((m = m === !0 ? {
                            entropy: !0
                        } : m || {}).entropy ? [p, d(e)] : p === null ? function() {
                            try {
                                var x = new Uint8Array(i);
                                return (n.crypto || n.msCrypto).getRandomValues(x), d(x)
                            } catch {
                                var T = n.navigator,
                                    _ = T && T.plugins;
                                return [+new Date, n, _, n.screen, d(e)]
                            }
                        }() : p, 3), v),
                        b = new c(v),
                        S = function() {
                            for (var x = b.g(6), T = a, _ = 0; x < s;) x = (x + _) * i, T *= i, _ = b.g(1);
                            for (; x >= o;) x /= 2, T /= 2, _ >>>= 1;
                            return (x + _) / T
                        };
                    return S.int32 = function() {
                        return 0 | b.g(4)
                    }, S.quick = function() {
                        return b.g(4) / 4294967296
                    }, S.double = S, g(d(b.S), e), (m.pass || h || function(x, T, _, P) {
                        return P && (P.S && u(P, b), x.state = function() {
                            return u(b, {})
                        }), _ ? (t.random = x, T) : x
                    })(S, y, "global" in m ? m.global : this == t, m.state)
                }, g(t.random(), e)
            }

            function initialize$2(e) {
                seedRandom([], e)
            }
            var propTypes = {
                SHAPE: "shape"
            };

            function _typeof$1(e) {
                return _typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof$1(e)
            }
            var ExpressionManager = function() {
                    var ob = {},
                        Math = BMMath,
                        window = null,
                        document = null,
                        XMLHttpRequest = null,
                        fetch = null,
                        frames = null,
                        _lottieGlobal = {};

                    function resetFrame() {
                        _lottieGlobal = {}
                    }

                    function $bm_isInstanceOfArray(e) {
                        return e.constructor === Array || e.constructor === Float32Array
                    }

                    function isNumerable(e, t) {
                        return e === "number" || t instanceof Number || e === "boolean" || e === "string"
                    }

                    function $bm_neg(e) {
                        var t = _typeof$1(e);
                        if (t === "number" || e instanceof Number || t === "boolean") return -e;
                        if ($bm_isInstanceOfArray(e)) {
                            var r, n = e.length,
                                i = [];
                            for (r = 0; r < n; r += 1) i[r] = -e[r];
                            return i
                        }
                        return e.propType ? e.v : -e
                    }
                    initialize$2(BMMath);
                    var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                        easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                        easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                    function sum(e, t) {
                        var r = _typeof$1(e),
                            n = _typeof$1(t);
                        if (isNumerable(r, e) && isNumerable(n, t) || r === "string" || n === "string") return e + t;
                        if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] += t, e;
                        if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t;
                        if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                            for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)(typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? o[i] = e[i] + t[i] : o[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
                            return o
                        }
                        return 0
                    }
                    var add = sum;

                    function sub(e, t) {
                        var r = _typeof$1(e),
                            n = _typeof$1(t);
                        if (isNumerable(r, e) && isNumerable(n, t)) return r === "string" && (e = parseInt(e, 10)), n === "string" && (t = parseInt(t, 10)), e - t;
                        if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] -= t, e;
                        if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t;
                        if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                            for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)(typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? o[i] = e[i] - t[i] : o[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
                            return o
                        }
                        return 0
                    }

                    function mul(e, t) {
                        var r, n, i, a = _typeof$1(e),
                            s = _typeof$1(t);
                        if (isNumerable(a, e) && isNumerable(s, t)) return e * t;
                        if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                            for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] * t;
                            return r
                        }
                        if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                            for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e * t[n];
                            return r
                        }
                        return 0
                    }

                    function div(e, t) {
                        var r, n, i, a = _typeof$1(e),
                            s = _typeof$1(t);
                        if (isNumerable(a, e) && isNumerable(s, t)) return e / t;
                        if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                            for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] / t;
                            return r
                        }
                        if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                            for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e / t[n];
                            return r
                        }
                        return 0
                    }

                    function mod(e, t) {
                        return typeof e == "string" && (e = parseInt(e, 10)), typeof t == "string" && (t = parseInt(t, 10)), e % t
                    }
                    var $bm_sum = sum,
                        $bm_sub = sub,
                        $bm_mul = mul,
                        $bm_div = div,
                        $bm_mod = mod;

                    function clamp(e, t, r) {
                        if (t > r) {
                            var n = r;
                            r = t, t = n
                        }
                        return Math.min(Math.max(e, t), r)
                    }

                    function radiansToDegrees(e) {
                        return e / degToRads
                    }
                    var radians_to_degrees = radiansToDegrees;

                    function degreesToRadians(e) {
                        return e * degToRads
                    }
                    var degrees_to_radians = radiansToDegrees,
                        helperLengthArray = [0, 0, 0, 0, 0, 0];

                    function length(e, t) {
                        if (typeof e == "number" || e instanceof Number) return t = t || 0, Math.abs(e - t);
                        var r;
                        t || (t = helperLengthArray);
                        var n = Math.min(e.length, t.length),
                            i = 0;
                        for (r = 0; r < n; r += 1) i += Math.pow(t[r] - e[r], 2);
                        return Math.sqrt(i)
                    }

                    function normalize(e) {
                        return div(e, length(e))
                    }

                    function rgbToHsl(e) {
                        var t, r, n = e[0],
                            i = e[1],
                            a = e[2],
                            s = Math.max(n, i, a),
                            o = Math.min(n, i, a),
                            l = (s + o) / 2;
                        if (s === o) t = 0, r = 0;
                        else {
                            var c = s - o;
                            switch (r = l > .5 ? c / (2 - s - o) : c / (s + o), s) {
                                case n:
                                    t = (i - a) / c + (i < a ? 6 : 0);
                                    break;
                                case i:
                                    t = (a - n) / c + 2;
                                    break;
                                case a:
                                    t = (n - i) / c + 4
                            }
                            t /= 6
                        }
                        return [t, r, l, e[3]]
                    }

                    function hue2rgb(e, t, r) {
                        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
                    }

                    function hslToRgb(e) {
                        var t, r, n, i = e[0],
                            a = e[1],
                            s = e[2];
                        if (a === 0) t = s, n = s, r = s;
                        else {
                            var o = s < .5 ? s * (1 + a) : s + a - s * a,
                                l = 2 * s - o;
                            t = hue2rgb(l, o, i + 1 / 3), r = hue2rgb(l, o, i), n = hue2rgb(l, o, i - 1 / 3)
                        }
                        return [t, r, n, e[3]]
                    }

                    function linear(e, t, r, n, i) {
                        if (n !== void 0 && i !== void 0 || (n = t, i = r, t = 0, r = 1), r < t) {
                            var a = r;
                            r = t, t = a
                        }
                        if (e <= t) return n;
                        if (e >= r) return i;
                        var s, o = r === t ? 0 : (e - t) / (r - t);
                        if (!n.length) return n + (i - n) * o;
                        var l = n.length,
                            c = createTypedArray("float32", l);
                        for (s = 0; s < l; s += 1) c[s] = n[s] + (i[s] - n[s]) * o;
                        return c
                    }

                    function random(e, t) {
                        if (t === void 0 && (e === void 0 ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
                            var r, n = t.length;
                            e || (e = createTypedArray("float32", n));
                            var i = createTypedArray("float32", n),
                                a = BMMath.random();
                            for (r = 0; r < n; r += 1) i[r] = e[r] + a * (t[r] - e[r]);
                            return i
                        }
                        return e === void 0 && (e = 0), e + BMMath.random() * (t - e)
                    }

                    function createPath(e, t, r, n) {
                        var i, a = e.length,
                            s = shapePool.newElement();
                        s.setPathData(!!n, a);
                        var o, l, c = [0, 0];
                        for (i = 0; i < a; i += 1) o = t && t[i] ? t[i] : c, l = r && r[i] ? r[i] : c, s.setTripleAt(e[i][0], e[i][1], l[0] + e[i][0], l[1] + e[i][1], o[0] + e[i][0], o[1] + e[i][1], i, !0);
                        return s
                    }

                    function initiateExpression(elem, data, property) {
                        function noOp(e) {
                            return e
                        }
                        if (!elem.globalData.renderConfig.runExpressions) return noOp;
                        var val = data.x,
                            needsVelocity = /velocity(?![\w\d])/.test(val),
                            _needsRandom = val.indexOf("random") !== -1,
                            elemType = elem.data.ty,
                            transform, $bm_transform, content, effect, thisProperty = property;
                        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                            get: function() {
                                return thisProperty.v
                            }
                        }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                        var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                            outPoint = elem.data.op / elem.comp.globalData.frameRate,
                            width = elem.data.sw ? elem.data.sw : 0,
                            height = elem.data.sh ? elem.data.sh : 0,
                            name = elem.data.nm,
                            loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                            numKeys = property.kf ? data.k.length : 0,
                            active = !this.data || this.data.hd !== !0,
                            wiggle = function(e, t) {
                                var r, n, i = this.pv.length ? this.pv.length : 1,
                                    a = createTypedArray("float32", i),
                                    s = Math.floor(5 * time);
                                for (r = 0, n = 0; r < s;) {
                                    for (n = 0; n < i; n += 1) a[n] += -t + 2 * t * BMMath.random();
                                    r += 1
                                }
                                var o = 5 * time,
                                    l = o - Math.floor(o),
                                    c = createTypedArray("float32", i);
                                if (i > 1) {
                                    for (n = 0; n < i; n += 1) c[n] = this.pv[n] + a[n] + (-t + 2 * t * BMMath.random()) * l;
                                    return c
                                }
                                return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l
                            }.bind(this);

                        function loopInDuration(e, t) {
                            return loopIn(e, t, !0)
                        }

                        function loopOutDuration(e, t) {
                            return loopOut(e, t, !0)
                        }
                        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                            time, velocity, value, text, textIndex, textTotal, selectorValue;

                        function lookAt(e, t) {
                            var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                                n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                            return [-Math.atan2(r[1], r[2]) / degToRads, n, 0]
                        }

                        function easeOut(e, t, r, n, i) {
                            return applyEase(easeOutBez, e, t, r, n, i)
                        }

                        function easeIn(e, t, r, n, i) {
                            return applyEase(easeInBez, e, t, r, n, i)
                        }

                        function ease(e, t, r, n, i) {
                            return applyEase(easeInOutBez, e, t, r, n, i)
                        }

                        function applyEase(e, t, r, n, i, a) {
                            i === void 0 ? (i = r, a = n) : t = (t - r) / (n - r), t > 1 ? t = 1 : t < 0 && (t = 0);
                            var s = e(t);
                            if ($bm_isInstanceOfArray(i)) {
                                var o, l = i.length,
                                    c = createTypedArray("float32", l);
                                for (o = 0; o < l; o += 1) c[o] = (a[o] - i[o]) * s + i[o];
                                return c
                            }
                            return (a - i) * s + i
                        }

                        function nearestKey(e) {
                            var t, r, n, i = data.k.length;
                            if (data.k.length && typeof data.k[0] != "number")
                                if (r = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, n = data.k[0].t;
                                else {
                                    for (t = 0; t < i - 1; t += 1) {
                                        if (e === data.k[t].t) {
                                            r = t + 1, n = data.k[t].t;
                                            break
                                        }
                                        if (e > data.k[t].t && e < data.k[t + 1].t) {
                                            e - data.k[t].t > data.k[t + 1].t - e ? (r = t + 2, n = data.k[t + 1].t) : (r = t + 1, n = data.k[t].t);
                                            break
                                        }
                                    }
                                    r === -1 && (r = t + 1, n = data.k[t].t)
                                }
                            else r = 0, n = 0;
                            var a = {};
                            return a.index = r, a.time = n / elem.comp.globalData.frameRate, a
                        }

                        function key(e) {
                            var t, r, n;
                            if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + e);
                            e -= 1, t = {
                                time: data.k[e].t / elem.comp.globalData.frameRate,
                                value: []
                            };
                            var i = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
                            for (n = i.length, r = 0; r < n; r += 1) t[r] = i[r], t.value[r] = i[r];
                            return t
                        }

                        function framesToTime(e, t) {
                            return t || (t = elem.comp.globalData.frameRate), e / t
                        }

                        function timeToFrames(e, t) {
                            return e || e === 0 || (e = time), t || (t = elem.comp.globalData.frameRate), e * t
                        }

                        function seedRandom(e) {
                            BMMath.seedrandom(randSeed + e)
                        }

                        function sourceRectAtTime() {
                            return elem.sourceRectAtTime()
                        }

                        function substring(e, t) {
                            return typeof value == "string" ? t === void 0 ? value.substring(e) : value.substring(e, t) : ""
                        }

                        function substr(e, t) {
                            return typeof value == "string" ? t === void 0 ? value.substr(e) : value.substr(e, t) : ""
                        }

                        function posterizeTime(e) {
                            time = e === 0 ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
                        }
                        var index = elem.data.ind,
                            hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                            parent, randSeed = Math.floor(1e6 * Math.random()),
                            globalData = elem.globalData;

                        function executeExpression(e) {
                            return value = e, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType !== 4 || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                        }
                        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                    }
                    return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
                }(),
                Expressions = function() {
                    var e = {};
                    return e.initExpressions = function(t) {
                        var r = 0,
                            n = [];
                        t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                            r += 1
                        }, t.renderer.globalData.popExpression = function() {
                            (r -= 1) == 0 && function() {
                                var i, a = n.length;
                                for (i = 0; i < a; i += 1) n[i].release();
                                n.length = 0
                            }()
                        }, t.renderer.globalData.registerExpressionProperty = function(i) {
                            n.indexOf(i) === -1 && n.push(i)
                        }
                    }, e.resetFrame = ExpressionManager.resetFrame, e
                }(),
                MaskManagerInterface = function() {
                    function e(t, r) {
                        this._mask = t, this._data = r
                    }
                    return Object.defineProperty(e.prototype, "maskPath", {
                            get: function() {
                                return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                            }
                        }), Object.defineProperty(e.prototype, "maskOpacity", {
                            get: function() {
                                return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                            }
                        }),
                        function(t) {
                            var r, n = createSizedArray(t.viewData.length),
                                i = t.viewData.length;
                            for (r = 0; r < i; r += 1) n[r] = new e(t.viewData[r], t.masksProperties[r]);
                            return function(a) {
                                for (r = 0; r < i;) {
                                    if (t.masksProperties[r].nm === a) return n[r];
                                    r += 1
                                }
                                return null
                            }
                        }
                }(),
                ExpressionPropertyInterface = function() {
                    var e = {
                            pv: 0,
                            v: 0,
                            mult: 1
                        },
                        t = {
                            pv: [0, 0, 0],
                            v: [0, 0, 0],
                            mult: 1
                        };

                    function r(i, a, s) {
                        Object.defineProperty(i, "velocity", {
                            get: function() {
                                return a.getVelocityAtTime(a.comp.currentFrame)
                            }
                        }), i.numKeys = a.keyframes ? a.keyframes.length : 0, i.key = function(o) {
                            if (!i.numKeys) return 0;
                            var l = "";
                            l = "s" in a.keyframes[o - 1] ? a.keyframes[o - 1].s : "e" in a.keyframes[o - 2] ? a.keyframes[o - 2].e : a.keyframes[o - 2].s;
                            var c = s === "unidimensional" ? new Number(l) : Object.assign({}, l);
                            return c.time = a.keyframes[o - 1].t / a.elem.comp.globalData.frameRate, c.value = s === "unidimensional" ? l[0] : l, c
                        }, i.valueAtTime = a.getValueAtTime, i.speedAtTime = a.getSpeedAtTime, i.velocityAtTime = a.getVelocityAtTime, i.propertyGroup = a.propertyGroup
                    }

                    function n() {
                        return e
                    }
                    return function(i) {
                        return i ? i.propType === "unidimensional" ? function(a) {
                            a && "pv" in a || (a = e);
                            var s = 1 / a.mult,
                                o = a.pv * s,
                                l = new Number(o);
                            return l.value = o, r(l, a, "unidimensional"),
                                function() {
                                    return a.k && a.getValue(), o = a.v * s, l.value !== o && ((l = new Number(o)).value = o, r(l, a, "unidimensional")), l
                                }
                        }(i) : function(a) {
                            a && "pv" in a || (a = t);
                            var s = 1 / a.mult,
                                o = a.data && a.data.l || a.pv.length,
                                l = createTypedArray("float32", o),
                                c = createTypedArray("float32", o);
                            return l.value = c, r(l, a, "multidimensional"),
                                function() {
                                    a.k && a.getValue();
                                    for (var u = 0; u < o; u += 1) c[u] = a.v[u] * s, l[u] = c[u];
                                    return l
                                }
                        }(i) : n
                    }
                }(),
                TransformExpressionInterface = function(e) {
                    function t(s) {
                        switch (s) {
                            case "scale":
                            case "Scale":
                            case "ADBE Scale":
                            case 6:
                                return t.scale;
                            case "rotation":
                            case "Rotation":
                            case "ADBE Rotation":
                            case "ADBE Rotate Z":
                            case 10:
                                return t.rotation;
                            case "ADBE Rotate X":
                                return t.xRotation;
                            case "ADBE Rotate Y":
                                return t.yRotation;
                            case "position":
                            case "Position":
                            case "ADBE Position":
                            case 2:
                                return t.position;
                            case "ADBE Position_0":
                                return t.xPosition;
                            case "ADBE Position_1":
                                return t.yPosition;
                            case "ADBE Position_2":
                                return t.zPosition;
                            case "anchorPoint":
                            case "AnchorPoint":
                            case "Anchor Point":
                            case "ADBE AnchorPoint":
                            case 1:
                                return t.anchorPoint;
                            case "opacity":
                            case "Opacity":
                            case 11:
                                return t.opacity;
                            default:
                                return null
                        }
                    }
                    var r, n, i, a;
                    return Object.defineProperty(t, "rotation", {
                        get: ExpressionPropertyInterface(e.r || e.rz)
                    }), Object.defineProperty(t, "zRotation", {
                        get: ExpressionPropertyInterface(e.rz || e.r)
                    }), Object.defineProperty(t, "xRotation", {
                        get: ExpressionPropertyInterface(e.rx)
                    }), Object.defineProperty(t, "yRotation", {
                        get: ExpressionPropertyInterface(e.ry)
                    }), Object.defineProperty(t, "scale", {
                        get: ExpressionPropertyInterface(e.s)
                    }), e.p ? a = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), n = ExpressionPropertyInterface(e.py), e.pz && (i = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
                        get: function() {
                            return e.p ? a() : [r(), n(), i ? i() : 0]
                        }
                    }), Object.defineProperty(t, "xPosition", {
                        get: ExpressionPropertyInterface(e.px)
                    }), Object.defineProperty(t, "yPosition", {
                        get: ExpressionPropertyInterface(e.py)
                    }), Object.defineProperty(t, "zPosition", {
                        get: ExpressionPropertyInterface(e.pz)
                    }), Object.defineProperty(t, "anchorPoint", {
                        get: ExpressionPropertyInterface(e.a)
                    }), Object.defineProperty(t, "opacity", {
                        get: ExpressionPropertyInterface(e.o)
                    }), Object.defineProperty(t, "skew", {
                        get: ExpressionPropertyInterface(e.sk)
                    }), Object.defineProperty(t, "skewAxis", {
                        get: ExpressionPropertyInterface(e.sa)
                    }), Object.defineProperty(t, "orientation", {
                        get: ExpressionPropertyInterface(e.or)
                    }), t
                },
                LayerExpressionInterface = function() {
                    function e(c) {
                        var u = new Matrix;
                        return c !== void 0 ? this._elem.finalTransform.mProp.getValueAtTime(c).clone(u) : this._elem.finalTransform.mProp.applyToMatrix(u), u
                    }

                    function t(c, u) {
                        var f = this.getMatrix(u);
                        return f.props[12] = 0, f.props[13] = 0, f.props[14] = 0, this.applyPoint(f, c)
                    }

                    function r(c, u) {
                        var f = this.getMatrix(u);
                        return this.applyPoint(f, c)
                    }

                    function n(c, u) {
                        var f = this.getMatrix(u);
                        return f.props[12] = 0, f.props[13] = 0, f.props[14] = 0, this.invertPoint(f, c)
                    }

                    function i(c, u) {
                        var f = this.getMatrix(u);
                        return this.invertPoint(f, c)
                    }

                    function a(c, u) {
                        if (this._elem.hierarchy && this._elem.hierarchy.length) {
                            var f, g = this._elem.hierarchy.length;
                            for (f = 0; f < g; f += 1) this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(c)
                        }
                        return c.applyToPointArray(u[0], u[1], u[2] || 0)
                    }

                    function s(c, u) {
                        if (this._elem.hierarchy && this._elem.hierarchy.length) {
                            var f, g = this._elem.hierarchy.length;
                            for (f = 0; f < g; f += 1) this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(c)
                        }
                        return c.inversePoint(u)
                    }

                    function o(c) {
                        var u = new Matrix;
                        if (u.reset(), this._elem.finalTransform.mProp.applyToMatrix(u), this._elem.hierarchy && this._elem.hierarchy.length) {
                            var f, g = this._elem.hierarchy.length;
                            for (f = 0; f < g; f += 1) this._elem.hierarchy[f].finalTransform.mProp.applyToMatrix(u);
                            return u.inversePoint(c)
                        }
                        return u.inversePoint(c)
                    }

                    function l() {
                        return [1, 1, 1, 1]
                    }
                    return function(c) {
                        var u;

                        function f(d) {
                            switch (d) {
                                case "ADBE Root Vectors Group":
                                case "Contents":
                                case 2:
                                    return f.shapeInterface;
                                case 1:
                                case 6:
                                case "Transform":
                                case "transform":
                                case "ADBE Transform Group":
                                    return u;
                                case 4:
                                case "ADBE Effect Parade":
                                case "effects":
                                case "Effects":
                                    return f.effect;
                                case "ADBE Text Properties":
                                    return f.textInterface;
                                default:
                                    return null
                            }
                        }
                        f.getMatrix = e, f.invertPoint = s, f.applyPoint = a, f.toWorld = r, f.toWorldVec = t, f.fromWorld = i, f.fromWorldVec = n, f.toComp = r, f.fromComp = o, f.sampleImage = l, f.sourceRectAtTime = c.sourceRectAtTime.bind(c), f._elem = c;
                        var g = getDescriptor(u = TransformExpressionInterface(c.finalTransform.mProp), "anchorPoint");
                        return Object.defineProperties(f, {
                            hasParent: {
                                get: function() {
                                    return c.hierarchy.length
                                }
                            },
                            parent: {
                                get: function() {
                                    return c.hierarchy[0].layerInterface
                                }
                            },
                            rotation: getDescriptor(u, "rotation"),
                            scale: getDescriptor(u, "scale"),
                            position: getDescriptor(u, "position"),
                            opacity: getDescriptor(u, "opacity"),
                            anchorPoint: g,
                            anchor_point: g,
                            transform: {
                                get: function() {
                                    return u
                                }
                            },
                            active: {
                                get: function() {
                                    return c.isInRange
                                }
                            }
                        }), f.startTime = c.data.st, f.index = c.data.ind, f.source = c.data.refId, f.height = c.data.ty === 0 ? c.data.h : 100, f.width = c.data.ty === 0 ? c.data.w : 100, f.inPoint = c.data.ip / c.comp.globalData.frameRate, f.outPoint = c.data.op / c.comp.globalData.frameRate, f._name = c.data.nm, f.registerMaskInterface = function(d) {
                            f.mask = new MaskManagerInterface(d, c)
                        }, f.registerEffectsInterface = function(d) {
                            f.effect = d
                        }, f
                    }
                }(),
                propertyGroupFactory = function(e, t) {
                    return function(r) {
                        return (r = r === void 0 ? 1 : r) <= 0 ? e : t(r - 1)
                    }
                },
                PropertyInterface = function(e, t) {
                    var r = {
                        _name: e
                    };
                    return function(n) {
                        return (n = n === void 0 ? 1 : n) <= 0 ? r : t(n - 1)
                    }
                },
                EffectsExpressionInterface = function() {
                    function e(r, n, i, a) {
                        function s(f) {
                            for (var g = r.ef, d = 0, p = g.length; d < p;) {
                                if (f === g[d].nm || f === g[d].mn || f === g[d].ix) return g[d].ty === 5 ? c[d] : c[d]();
                                d += 1
                            }
                            throw new Error
                        }
                        var o, l = propertyGroupFactory(s, i),
                            c = [],
                            u = r.ef.length;
                        for (o = 0; o < u; o += 1) r.ef[o].ty === 5 ? c.push(e(r.ef[o], n.effectElements[o], n.effectElements[o].propertyGroup, a)) : c.push(t(n.effectElements[o], r.ef[o].ty, a, l));
                        return r.mn === "ADBE Color Control" && Object.defineProperty(s, "color", {
                            get: function() {
                                return c[0]()
                            }
                        }), Object.defineProperties(s, {
                            numProperties: {
                                get: function() {
                                    return r.np
                                }
                            },
                            _name: {
                                value: r.nm
                            },
                            propertyGroup: {
                                value: l
                            }
                        }), s.enabled = r.en !== 0, s.active = s.enabled, s
                    }

                    function t(r, n, i, a) {
                        var s = ExpressionPropertyInterface(r.p);
                        return r.p.setGroupProperty && r.p.setGroupProperty(PropertyInterface("", a)),
                            function() {
                                return n === 10 ? i.comp.compInterface(r.p.v) : s()
                            }
                    }
                    return {
                        createEffectsInterface: function(r, n) {
                            if (r.effectsManager) {
                                var i, a = [],
                                    s = r.data.ef,
                                    o = r.effectsManager.effectElements.length;
                                for (i = 0; i < o; i += 1) a.push(e(s[i], r.effectsManager.effectElements[i], n, r));
                                var l = r.data.ef || [],
                                    c = function(u) {
                                        for (i = 0, o = l.length; i < o;) {
                                            if (u === l[i].nm || u === l[i].mn || u === l[i].ix) return a[i];
                                            i += 1
                                        }
                                        return null
                                    };
                                return Object.defineProperty(c, "numProperties", {
                                    get: function() {
                                        return l.length
                                    }
                                }), c
                            }
                            return null
                        }
                    }
                }(),
                ShapePathInterface = function(e, t, r) {
                    var n = t.sh;

                    function i(s) {
                        return s === "Shape" || s === "shape" || s === "Path" || s === "path" || s === "ADBE Vector Shape" || s === 2 ? i.path : null
                    }
                    var a = propertyGroupFactory(i, r);
                    return n.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(i, {
                        path: {
                            get: function() {
                                return n.k && n.getValue(), n
                            }
                        },
                        shape: {
                            get: function() {
                                return n.k && n.getValue(), n
                            }
                        },
                        _name: {
                            value: e.nm
                        },
                        ix: {
                            value: e.ix
                        },
                        propertyIndex: {
                            value: e.ix
                        },
                        mn: {
                            value: e.mn
                        },
                        propertyGroup: {
                            value: r
                        }
                    }), i
                },
                ShapeExpressionInterface = function() {
                    function e(d, p, m) {
                        var h, v = [],
                            y = d ? d.length : 0;
                        for (h = 0; h < y; h += 1) d[h].ty === "gr" ? v.push(t(d[h], p[h], m)) : d[h].ty === "fl" ? v.push(r(d[h], p[h], m)) : d[h].ty === "st" ? v.push(a(d[h], p[h], m)) : d[h].ty === "tm" ? v.push(s(d[h], p[h], m)) : d[h].ty === "tr" || (d[h].ty === "el" ? v.push(l(d[h], p[h], m)) : d[h].ty === "sr" ? v.push(c(d[h], p[h], m)) : d[h].ty === "sh" ? v.push(ShapePathInterface(d[h], p[h], m)) : d[h].ty === "rc" ? v.push(u(d[h], p[h], m)) : d[h].ty === "rd" ? v.push(f(d[h], p[h], m)) : d[h].ty === "rp" ? v.push(g(d[h], p[h], m)) : d[h].ty === "gf" ? v.push(n(d[h], p[h], m)) : v.push(i(d[h], p[h])));
                        return v
                    }

                    function t(d, p, m) {
                        var h = function(b) {
                            switch (b) {
                                case "ADBE Vectors Group":
                                case "Contents":
                                case 2:
                                    return h.content;
                                default:
                                    return h.transform
                            }
                        };
                        h.propertyGroup = propertyGroupFactory(h, m);
                        var v = function(b, S, x) {
                                var T, _ = function(F) {
                                    for (var w = 0, C = T.length; w < C;) {
                                        if (T[w]._name === F || T[w].mn === F || T[w].propertyIndex === F || T[w].ix === F || T[w].ind === F) return T[w];
                                        w += 1
                                    }
                                    return typeof F == "number" ? T[F - 1] : null
                                };
                                _.propertyGroup = propertyGroupFactory(_, x), T = e(b.it, S.it, _.propertyGroup), _.numProperties = T.length;
                                var P = o(b.it[b.it.length - 1], S.it[S.it.length - 1], _.propertyGroup);
                                return _.transform = P, _.propertyIndex = b.cix, _._name = b.nm, _
                            }(d, p, h.propertyGroup),
                            y = o(d.it[d.it.length - 1], p.it[p.it.length - 1], h.propertyGroup);
                        return h.content = v, h.transform = y, Object.defineProperty(h, "_name", {
                            get: function() {
                                return d.nm
                            }
                        }), h.numProperties = d.np, h.propertyIndex = d.ix, h.nm = d.nm, h.mn = d.mn, h
                    }

                    function r(d, p, m) {
                        function h(v) {
                            return v === "Color" || v === "color" ? h.color : v === "Opacity" || v === "opacity" ? h.opacity : null
                        }
                        return Object.defineProperties(h, {
                            color: {
                                get: ExpressionPropertyInterface(p.c)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(p.o)
                            },
                            _name: {
                                value: d.nm
                            },
                            mn: {
                                value: d.mn
                            }
                        }), p.c.setGroupProperty(PropertyInterface("Color", m)), p.o.setGroupProperty(PropertyInterface("Opacity", m)), h
                    }

                    function n(d, p, m) {
                        function h(v) {
                            return v === "Start Point" || v === "start point" ? h.startPoint : v === "End Point" || v === "end point" ? h.endPoint : v === "Opacity" || v === "opacity" ? h.opacity : null
                        }
                        return Object.defineProperties(h, {
                            startPoint: {
                                get: ExpressionPropertyInterface(p.s)
                            },
                            endPoint: {
                                get: ExpressionPropertyInterface(p.e)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(p.o)
                            },
                            type: {
                                get: function() {
                                    return "a"
                                }
                            },
                            _name: {
                                value: d.nm
                            },
                            mn: {
                                value: d.mn
                            }
                        }), p.s.setGroupProperty(PropertyInterface("Start Point", m)), p.e.setGroupProperty(PropertyInterface("End Point", m)), p.o.setGroupProperty(PropertyInterface("Opacity", m)), h
                    }

                    function i() {
                        return function() {
                            return null
                        }
                    }

                    function a(d, p, m) {
                        var h, v = propertyGroupFactory(T, m),
                            y = propertyGroupFactory(x, v);

                        function b(_) {
                            Object.defineProperty(x, d.d[_].nm, {
                                get: ExpressionPropertyInterface(p.d.dataProps[_].p)
                            })
                        }
                        var S = d.d ? d.d.length : 0,
                            x = {};
                        for (h = 0; h < S; h += 1) b(h), p.d.dataProps[h].p.setGroupProperty(y);

                        function T(_) {
                            return _ === "Color" || _ === "color" ? T.color : _ === "Opacity" || _ === "opacity" ? T.opacity : _ === "Stroke Width" || _ === "stroke width" ? T.strokeWidth : null
                        }
                        return Object.defineProperties(T, {
                            color: {
                                get: ExpressionPropertyInterface(p.c)
                            },
                            opacity: {
                                get: ExpressionPropertyInterface(p.o)
                            },
                            strokeWidth: {
                                get: ExpressionPropertyInterface(p.w)
                            },
                            dash: {
                                get: function() {
                                    return x
                                }
                            },
                            _name: {
                                value: d.nm
                            },
                            mn: {
                                value: d.mn
                            }
                        }), p.c.setGroupProperty(PropertyInterface("Color", v)), p.o.setGroupProperty(PropertyInterface("Opacity", v)), p.w.setGroupProperty(PropertyInterface("Stroke Width", v)), T
                    }

                    function s(d, p, m) {
                        function h(y) {
                            return y === d.e.ix || y === "End" || y === "end" ? h.end : y === d.s.ix ? h.start : y === d.o.ix ? h.offset : null
                        }
                        var v = propertyGroupFactory(h, m);
                        return h.propertyIndex = d.ix, p.s.setGroupProperty(PropertyInterface("Start", v)), p.e.setGroupProperty(PropertyInterface("End", v)), p.o.setGroupProperty(PropertyInterface("Offset", v)), h.propertyIndex = d.ix, h.propertyGroup = m, Object.defineProperties(h, {
                            start: {
                                get: ExpressionPropertyInterface(p.s)
                            },
                            end: {
                                get: ExpressionPropertyInterface(p.e)
                            },
                            offset: {
                                get: ExpressionPropertyInterface(p.o)
                            },
                            _name: {
                                value: d.nm
                            }
                        }), h.mn = d.mn, h
                    }

                    function o(d, p, m) {
                        function h(y) {
                            return d.a.ix === y || y === "Anchor Point" ? h.anchorPoint : d.o.ix === y || y === "Opacity" ? h.opacity : d.p.ix === y || y === "Position" ? h.position : d.r.ix === y || y === "Rotation" || y === "ADBE Vector Rotation" ? h.rotation : d.s.ix === y || y === "Scale" ? h.scale : d.sk && d.sk.ix === y || y === "Skew" ? h.skew : d.sa && d.sa.ix === y || y === "Skew Axis" ? h.skewAxis : null
                        }
                        var v = propertyGroupFactory(h, m);
                        return p.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", v)), p.transform.mProps.p.setGroupProperty(PropertyInterface("Position", v)), p.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", v)), p.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", v)), p.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", v)), p.transform.mProps.sk && (p.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", v)), p.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", v))), p.transform.op.setGroupProperty(PropertyInterface("Opacity", v)), Object.defineProperties(h, {
                            opacity: {
                                get: ExpressionPropertyInterface(p.transform.mProps.o)
                            },
                            position: {
                                get: ExpressionPropertyInterface(p.transform.mProps.p)
                            },
                            anchorPoint: {
                                get: ExpressionPropertyInterface(p.transform.mProps.a)
                            },
                            scale: {
                                get: ExpressionPropertyInterface(p.transform.mProps.s)
                            },
                            rotation: {
                                get: ExpressionPropertyInterface(p.transform.mProps.r)
                            },
                            skew: {
                                get: ExpressionPropertyInterface(p.transform.mProps.sk)
                            },
                            skewAxis: {
                                get: ExpressionPropertyInterface(p.transform.mProps.sa)
                            },
                            _name: {
                                value: d.nm
                            }
                        }), h.ty = "tr", h.mn = d.mn, h.propertyGroup = m, h
                    }

                    function l(d, p, m) {
                        function h(b) {
                            return d.p.ix === b ? h.position : d.s.ix === b ? h.size : null
                        }
                        var v = propertyGroupFactory(h, m);
                        h.propertyIndex = d.ix;
                        var y = p.sh.ty === "tm" ? p.sh.prop : p.sh;
                        return y.s.setGroupProperty(PropertyInterface("Size", v)), y.p.setGroupProperty(PropertyInterface("Position", v)), Object.defineProperties(h, {
                            size: {
                                get: ExpressionPropertyInterface(y.s)
                            },
                            position: {
                                get: ExpressionPropertyInterface(y.p)
                            },
                            _name: {
                                value: d.nm
                            }
                        }), h.mn = d.mn, h
                    }

                    function c(d, p, m) {
                        function h(b) {
                            return d.p.ix === b ? h.position : d.r.ix === b ? h.rotation : d.pt.ix === b ? h.points : d.or.ix === b || b === "ADBE Vector Star Outer Radius" ? h.outerRadius : d.os.ix === b ? h.outerRoundness : !d.ir || d.ir.ix !== b && b !== "ADBE Vector Star Inner Radius" ? d.is && d.is.ix === b ? h.innerRoundness : null : h.innerRadius
                        }
                        var v = propertyGroupFactory(h, m),
                            y = p.sh.ty === "tm" ? p.sh.prop : p.sh;
                        return h.propertyIndex = d.ix, y.or.setGroupProperty(PropertyInterface("Outer Radius", v)), y.os.setGroupProperty(PropertyInterface("Outer Roundness", v)), y.pt.setGroupProperty(PropertyInterface("Points", v)), y.p.setGroupProperty(PropertyInterface("Position", v)), y.r.setGroupProperty(PropertyInterface("Rotation", v)), d.ir && (y.ir.setGroupProperty(PropertyInterface("Inner Radius", v)), y.is.setGroupProperty(PropertyInterface("Inner Roundness", v))), Object.defineProperties(h, {
                            position: {
                                get: ExpressionPropertyInterface(y.p)
                            },
                            rotation: {
                                get: ExpressionPropertyInterface(y.r)
                            },
                            points: {
                                get: ExpressionPropertyInterface(y.pt)
                            },
                            outerRadius: {
                                get: ExpressionPropertyInterface(y.or)
                            },
                            outerRoundness: {
                                get: ExpressionPropertyInterface(y.os)
                            },
                            innerRadius: {
                                get: ExpressionPropertyInterface(y.ir)
                            },
                            innerRoundness: {
                                get: ExpressionPropertyInterface(y.is)
                            },
                            _name: {
                                value: d.nm
                            }
                        }), h.mn = d.mn, h
                    }

                    function u(d, p, m) {
                        function h(b) {
                            return d.p.ix === b ? h.position : d.r.ix === b ? h.roundness : d.s.ix === b || b === "Size" || b === "ADBE Vector Rect Size" ? h.size : null
                        }
                        var v = propertyGroupFactory(h, m),
                            y = p.sh.ty === "tm" ? p.sh.prop : p.sh;
                        return h.propertyIndex = d.ix, y.p.setGroupProperty(PropertyInterface("Position", v)), y.s.setGroupProperty(PropertyInterface("Size", v)), y.r.setGroupProperty(PropertyInterface("Rotation", v)), Object.defineProperties(h, {
                            position: {
                                get: ExpressionPropertyInterface(y.p)
                            },
                            roundness: {
                                get: ExpressionPropertyInterface(y.r)
                            },
                            size: {
                                get: ExpressionPropertyInterface(y.s)
                            },
                            _name: {
                                value: d.nm
                            }
                        }), h.mn = d.mn, h
                    }

                    function f(d, p, m) {
                        function h(b) {
                            return d.r.ix === b || b === "Round Corners 1" ? h.radius : null
                        }
                        var v = propertyGroupFactory(h, m),
                            y = p;
                        return h.propertyIndex = d.ix, y.rd.setGroupProperty(PropertyInterface("Radius", v)), Object.defineProperties(h, {
                            radius: {
                                get: ExpressionPropertyInterface(y.rd)
                            },
                            _name: {
                                value: d.nm
                            }
                        }), h.mn = d.mn, h
                    }

                    function g(d, p, m) {
                        function h(b) {
                            return d.c.ix === b || b === "Copies" ? h.copies : d.o.ix === b || b === "Offset" ? h.offset : null
                        }
                        var v = propertyGroupFactory(h, m),
                            y = p;
                        return h.propertyIndex = d.ix, y.c.setGroupProperty(PropertyInterface("Copies", v)), y.o.setGroupProperty(PropertyInterface("Offset", v)), Object.defineProperties(h, {
                            copies: {
                                get: ExpressionPropertyInterface(y.c)
                            },
                            offset: {
                                get: ExpressionPropertyInterface(y.o)
                            },
                            _name: {
                                value: d.nm
                            }
                        }), h.mn = d.mn, h
                    }
                    return function(d, p, m) {
                        var h;

                        function v(y) {
                            if (typeof y == "number") return (y = y === void 0 ? 1 : y) === 0 ? m : h[y - 1];
                            for (var b = 0, S = h.length; b < S;) {
                                if (h[b]._name === y) return h[b];
                                b += 1
                            }
                            return null
                        }
                        return v.propertyGroup = propertyGroupFactory(v, function() {
                            return m
                        }), h = e(d, p, v.propertyGroup), v.numProperties = h.length, v._name = "Contents", v
                    }
                }(),
                TextExpressionInterface = function(e) {
                    var t;

                    function r(n) {
                        return n === "ADBE Text Document" ? r.sourceText : null
                    }
                    return Object.defineProperty(r, "sourceText", {
                        get: function() {
                            e.textProperty.getValue();
                            var n = e.textProperty.currentData.t;
                            return t && n === t.value || ((t = new String(n)).value = n || new String(n), Object.defineProperty(t, "style", {
                                get: function() {
                                    return {
                                        fillColor: e.textProperty.currentData.fc
                                    }
                                }
                            })), t
                        }
                    }), r
                };

            function _typeof(e) {
                return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _typeof(e)
            }
            var FootageInterface = (dataInterfaceFactory = function(e) {
                    function t(r) {
                        return r === "Outline" ? t.outlineInterface() : null
                    }
                    return t._name = "Outline", t.outlineInterface = function(r) {
                        var n = "",
                            i = r.getFootageData();

                        function a(s) {
                            if (i[s]) return n = s, _typeof(i = i[s]) === "object" ? a : i;
                            var o = s.indexOf(n);
                            if (o !== -1) {
                                var l = parseInt(s.substr(o + n.length), 10);
                                return _typeof(i = i[l]) === "object" ? a : i
                            }
                            return ""
                        }
                        return function() {
                            return n = "", i = r.getFootageData(), a
                        }
                    }(e), t
                }, function(e) {
                    function t(r) {
                        return r === "Data" ? t.dataInterface : null
                    }
                    return t._name = "Data", t.dataInterface = dataInterfaceFactory(e), t
                }),
                dataInterfaceFactory, interfaces = {
                    layer: LayerExpressionInterface,
                    effects: EffectsExpressionInterface,
                    comp: CompExpressionInterface,
                    shape: ShapeExpressionInterface,
                    text: TextExpressionInterface,
                    footage: FootageInterface
                };

            function getInterface(e) {
                return interfaces[e] || null
            }
            var expressionHelpers = {
                searchExpressions: function(e, t, r) {
                    t.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(e, t, r).bind(r)))
                },
                getSpeedAtTime: function(e) {
                    var t = this.getValueAtTime(e),
                        r = this.getValueAtTime(e + -.01),
                        n = 0;
                    if (t.length) {
                        var i;
                        for (i = 0; i < t.length; i += 1) n += Math.pow(r[i] - t[i], 2);
                        n = 100 * Math.sqrt(n)
                    } else n = 0;
                    return n
                },
                getVelocityAtTime: function(e) {
                    if (this.vel !== void 0) return this.vel;
                    var t, r, n = -.001,
                        i = this.getValueAtTime(e),
                        a = this.getValueAtTime(e + n);
                    if (i.length)
                        for (t = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) t[r] = (a[r] - i[r]) / n;
                    else t = (a - i) / n;
                    return t
                },
                getValueAtTime: function(e) {
                    return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value
                },
                getStaticValueAtTime: function() {
                    return this.pv
                },
                setGroupProperty: function(e) {
                    this.propertyGroup = e
                }
            };

            function addPropertyDecorator() {
                function e(f, g, d) {
                    if (!this.k || !this.keyframes) return this.pv;
                    f = f ? f.toLowerCase() : "";
                    var p, m, h, v, y, b = this.comp.renderedFrame,
                        S = this.keyframes,
                        x = S[S.length - 1].t;
                    if (b <= x) return this.pv;
                    if (d ? m = x - (p = g ? Math.abs(x - this.elem.comp.globalData.frameRate * g) : Math.max(0, x - this.elem.data.ip)) : ((!g || g > S.length - 1) && (g = S.length - 1), p = x - (m = S[S.length - 1 - g].t)), f === "pingpong") {
                        if (Math.floor((b - m) / p) % 2 != 0) return this.getValueAtTime((p - (b - m) % p + m) / this.comp.globalData.frameRate, 0)
                    } else {
                        if (f === "offset") {
                            var T = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
                                _ = this.getValueAtTime(x / this.comp.globalData.frameRate, 0),
                                P = this.getValueAtTime(((b - m) % p + m) / this.comp.globalData.frameRate, 0),
                                F = Math.floor((b - m) / p);
                            if (this.pv.length) {
                                for (v = (y = new Array(T.length)).length, h = 0; h < v; h += 1) y[h] = (_[h] - T[h]) * F + P[h];
                                return y
                            }
                            return (_ - T) * F + P
                        }
                        if (f === "continue") {
                            var w = this.getValueAtTime(x / this.comp.globalData.frameRate, 0),
                                C = this.getValueAtTime((x - .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (v = (y = new Array(w.length)).length, h = 0; h < v; h += 1) y[h] = w[h] + (w[h] - C[h]) * ((b - x) / this.comp.globalData.frameRate) / 5e-4;
                                return y
                            }
                            return w + (b - x) / .001 * (w - C)
                        }
                    }
                    return this.getValueAtTime(((b - m) % p + m) / this.comp.globalData.frameRate, 0)
                }

                function t(f, g, d) {
                    if (!this.k) return this.pv;
                    f = f ? f.toLowerCase() : "";
                    var p, m, h, v, y, b = this.comp.renderedFrame,
                        S = this.keyframes,
                        x = S[0].t;
                    if (b >= x) return this.pv;
                    if (d ? m = x + (p = g ? Math.abs(this.elem.comp.globalData.frameRate * g) : Math.max(0, this.elem.data.op - x)) : ((!g || g > S.length - 1) && (g = S.length - 1), p = (m = S[g].t) - x), f === "pingpong") {
                        if (Math.floor((x - b) / p) % 2 == 0) return this.getValueAtTime(((x - b) % p + x) / this.comp.globalData.frameRate, 0)
                    } else {
                        if (f === "offset") {
                            var T = this.getValueAtTime(x / this.comp.globalData.frameRate, 0),
                                _ = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
                                P = this.getValueAtTime((p - (x - b) % p + x) / this.comp.globalData.frameRate, 0),
                                F = Math.floor((x - b) / p) + 1;
                            if (this.pv.length) {
                                for (v = (y = new Array(T.length)).length, h = 0; h < v; h += 1) y[h] = P[h] - (_[h] - T[h]) * F;
                                return y
                            }
                            return P - (_ - T) * F
                        }
                        if (f === "continue") {
                            var w = this.getValueAtTime(x / this.comp.globalData.frameRate, 0),
                                C = this.getValueAtTime((x + .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (v = (y = new Array(w.length)).length, h = 0; h < v; h += 1) y[h] = w[h] + (w[h] - C[h]) * (x - b) / .001;
                                return y
                            }
                            return w + (w - C) * (x - b) / .001
                        }
                    }
                    return this.getValueAtTime((p - ((x - b) % p + x)) / this.comp.globalData.frameRate, 0)
                }

                function r(f, g) {
                    if (!this.k) return this.pv;
                    if (f = .5 * (f || .4), (g = Math.floor(g || 5)) <= 1) return this.pv;
                    var d, p, m = this.comp.renderedFrame / this.comp.globalData.frameRate,
                        h = m - f,
                        v = g > 1 ? (m + f - h) / (g - 1) : 1,
                        y = 0,
                        b = 0;
                    for (d = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; y < g;) {
                        if (p = this.getValueAtTime(h + y * v), this.pv.length)
                            for (b = 0; b < this.pv.length; b += 1) d[b] += p[b];
                        else d += p;
                        y += 1
                    }
                    if (this.pv.length)
                        for (b = 0; b < this.pv.length; b += 1) d[b] /= g;
                    else d /= g;
                    return d
                }

                function n(f) {
                    this._transformCachingAtTime || (this._transformCachingAtTime = {
                        v: new Matrix
                    });
                    var g = this._transformCachingAtTime.v;
                    if (g.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                        var d = this.a.getValueAtTime(f);
                        g.translate(-d[0] * this.a.mult, -d[1] * this.a.mult, d[2] * this.a.mult)
                    }
                    if (this.appliedTransformations < 2) {
                        var p = this.s.getValueAtTime(f);
                        g.scale(p[0] * this.s.mult, p[1] * this.s.mult, p[2] * this.s.mult)
                    }
                    if (this.sk && this.appliedTransformations < 3) {
                        var m = this.sk.getValueAtTime(f),
                            h = this.sa.getValueAtTime(f);
                        g.skewFromAxis(-m * this.sk.mult, h * this.sa.mult)
                    }
                    if (this.r && this.appliedTransformations < 4) {
                        var v = this.r.getValueAtTime(f);
                        g.rotate(-v * this.r.mult)
                    } else if (!this.r && this.appliedTransformations < 4) {
                        var y = this.rz.getValueAtTime(f),
                            b = this.ry.getValueAtTime(f),
                            S = this.rx.getValueAtTime(f),
                            x = this.or.getValueAtTime(f);
                        g.rotateZ(-y * this.rz.mult).rotateY(b * this.ry.mult).rotateX(S * this.rx.mult).rotateZ(-x[2] * this.or.mult).rotateY(x[1] * this.or.mult).rotateX(x[0] * this.or.mult)
                    }
                    if (this.data.p && this.data.p.s) {
                        var T = this.px.getValueAtTime(f),
                            _ = this.py.getValueAtTime(f);
                        if (this.data.p.z) {
                            var P = this.pz.getValueAtTime(f);
                            g.translate(T * this.px.mult, _ * this.py.mult, -P * this.pz.mult)
                        } else g.translate(T * this.px.mult, _ * this.py.mult, 0)
                    } else {
                        var F = this.p.getValueAtTime(f);
                        g.translate(F[0] * this.p.mult, F[1] * this.p.mult, -F[2] * this.p.mult)
                    }
                    return g
                }

                function i() {
                    return this.v.clone(new Matrix)
                }
                var a = TransformPropertyFactory.getTransformProperty;
                TransformPropertyFactory.getTransformProperty = function(f, g, d) {
                    var p = a(f, g, d);
                    return p.dynamicProperties.length ? p.getValueAtTime = n.bind(p) : p.getValueAtTime = i.bind(p), p.setGroupProperty = expressionHelpers.setGroupProperty, p
                };
                var s = PropertyFactory.getProp;
                PropertyFactory.getProp = function(f, g, d, p, m) {
                    var h = s(f, g, d, p, m);
                    h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = e, h.loopIn = t, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = g.a === 1 ? g.k.length : 0, h.propertyIndex = g.ix;
                    var v = 0;
                    return d !== 0 && (v = createTypedArray("float32", g.a === 1 ? g.k[0].s.length : g.k.length)), h._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: v
                    }, expressionHelpers.searchExpressions(f, g, h), h.k && m.addDynamicProperty(h), h
                };
                var o = ShapePropertyFactory.getConstructorFunction(),
                    l = ShapePropertyFactory.getKeyframedConstructorFunction();

                function c() {}
                c.prototype = {
                    vertices: function(f, g) {
                        this.k && this.getValue();
                        var d, p = this.v;
                        g !== void 0 && (p = this.getValueAtTime(g, 0));
                        var m = p._length,
                            h = p[f],
                            v = p.v,
                            y = createSizedArray(m);
                        for (d = 0; d < m; d += 1) y[d] = f === "i" || f === "o" ? [h[d][0] - v[d][0], h[d][1] - v[d][1]] : [h[d][0], h[d][1]];
                        return y
                    },
                    points: function(f) {
                        return this.vertices("v", f)
                    },
                    inTangents: function(f) {
                        return this.vertices("i", f)
                    },
                    outTangents: function(f) {
                        return this.vertices("o", f)
                    },
                    isClosed: function() {
                        return this.v.c
                    },
                    pointOnPath: function(f, g) {
                        var d = this.v;
                        g !== void 0 && (d = this.getValueAtTime(g, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(d));
                        for (var p, m = this._segmentsLength, h = m.lengths, v = m.totalLength * f, y = 0, b = h.length, S = 0; y < b;) {
                            if (S + h[y].addedLength > v) {
                                var x = y,
                                    T = d.c && y === b - 1 ? 0 : y + 1,
                                    _ = (v - S) / h[y].addedLength;
                                p = bez.getPointInSegment(d.v[x], d.v[T], d.o[x], d.i[T], _, h[y]);
                                break
                            }
                            S += h[y].addedLength, y += 1
                        }
                        return p || (p = d.c ? [d.v[0][0], d.v[0][1]] : [d.v[d._length - 1][0], d.v[d._length - 1][1]]), p
                    },
                    vectorOnPath: function(f, g, d) {
                        f == 1 ? f = this.v.c : f == 0 && (f = .999);
                        var p = this.pointOnPath(f, g),
                            m = this.pointOnPath(f + .001, g),
                            h = m[0] - p[0],
                            v = m[1] - p[1],
                            y = Math.sqrt(Math.pow(h, 2) + Math.pow(v, 2));
                        return y === 0 ? [0, 0] : d === "tangent" ? [h / y, v / y] : [-v / y, h / y]
                    },
                    tangentOnPath: function(f, g) {
                        return this.vectorOnPath(f, g, "tangent")
                    },
                    normalOnPath: function(f, g) {
                        return this.vectorOnPath(f, g, "normal")
                    },
                    setGroupProperty: expressionHelpers.setGroupProperty,
                    getValueAtTime: expressionHelpers.getStaticValueAtTime
                }, extendPrototype([c], o), extendPrototype([c], l), l.prototype.getValueAtTime = function(f) {
                    return this._cachingAtTime || (this._cachingAtTime = {
                        shapeValue: shapePool.clone(this.pv),
                        lastIndex: 0,
                        lastTime: initialDefaultFrame
                    }), f *= this.elem.globalData.frameRate, (f -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < f ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = f, this.interpolateShape(f, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
                var u = ShapePropertyFactory.getShapeProp;
                ShapePropertyFactory.getShapeProp = function(f, g, d, p, m) {
                    var h = u(f, g, d, p, m);
                    return h.propertyIndex = g.ix, h.lock = !1, d === 3 ? expressionHelpers.searchExpressions(f, g.pt, h) : d === 4 && expressionHelpers.searchExpressions(f, g.ks, h), h.k && f.addDynamicProperty(h), h
                }
            }

            function initialize$1() {
                addPropertyDecorator()
            }

            function addDecorator() {
                TextProperty.prototype.getExpressionValue = function(e, t) {
                    var r = this.calculateExpression(t);
                    if (e.t !== r) {
                        var n = {};
                        return this.copyData(n, e), n.t = r.toString(), n.__complete = !1, n
                    }
                    return e
                }, TextProperty.prototype.searchProperty = function() {
                    var e = this.searchKeyframes(),
                        t = this.searchExpressions();
                    return this.kf = e || t, this.kf
                }, TextProperty.prototype.searchExpressions = function() {
                    return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                }
            }

            function initialize() {
                addDecorator()
            }

            function SVGComposableEffect() {}
            SVGComposableEffect.prototype = {
                createMergeNode: function(e, t) {
                    var r, n, i = createNS("feMerge");
                    for (i.setAttribute("result", e), n = 0; n < t.length; n += 1)(r = createNS("feMergeNode")).setAttribute("in", t[n]), i.appendChild(r), i.appendChild(r);
                    return i
                }
            };
            var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

            function SVGTintFilter(e, t, r, n, i) {
                this.filterManager = t;
                var a = createNS("feColorMatrix");
                a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", n + "_tint_1"), e.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", n + "_tint_2"), e.appendChild(a), this.matrixFilter = a;
                var s = this.createMergeNode(n, [i, n + "_tint_1", n + "_tint_2"]);
                e.appendChild(s)
            }

            function SVGFillFilter(e, t, r, n) {
                this.filterManager = t;
                var i = createNS("feColorMatrix");
                i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", n), e.appendChild(i), this.matrixFilter = i
            }

            function SVGStrokeEffect(e, t, r) {
                this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = []
            }

            function SVGTritoneFilter(e, t, r, n) {
                this.filterManager = t;
                var i = createNS("feColorMatrix");
                i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(i);
                var a = createNS("feComponentTransfer");
                a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), this.matrixFilter = a;
                var s = createNS("feFuncR");
                s.setAttribute("type", "table"), a.appendChild(s), this.feFuncR = s;
                var o = createNS("feFuncG");
                o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
                var l = createNS("feFuncB");
                l.setAttribute("type", "table"), a.appendChild(l), this.feFuncB = l, e.appendChild(a)
            }

            function SVGProLevelsFilter(e, t, r, n) {
                this.filterManager = t;
                var i = this.filterManager.effectElements,
                    a = createNS("feComponentTransfer");
                (i[10].p.k || i[10].p.v !== 0 || i[11].p.k || i[11].p.v !== 1 || i[12].p.k || i[12].p.v !== 1 || i[13].p.k || i[13].p.v !== 0 || i[14].p.k || i[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (i[17].p.k || i[17].p.v !== 0 || i[18].p.k || i[18].p.v !== 1 || i[19].p.k || i[19].p.v !== 1 || i[20].p.k || i[20].p.v !== 0 || i[21].p.k || i[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (i[24].p.k || i[24].p.v !== 0 || i[25].p.k || i[25].p.v !== 1 || i[26].p.k || i[26].p.v !== 1 || i[27].p.k || i[27].p.v !== 0 || i[28].p.k || i[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (i[31].p.k || i[31].p.v !== 0 || i[32].p.k || i[32].p.v !== 1 || i[33].p.k || i[33].p.v !== 1 || i[34].p.k || i[34].p.v !== 0 || i[35].p.k || i[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)), (i[3].p.k || i[3].p.v !== 0 || i[4].p.k || i[4].p.v !== 1 || i[5].p.k || i[5].p.v !== 1 || i[6].p.k || i[6].p.v !== 0 || i[7].p.k || i[7].p.v !== 1) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), e.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
            }

            function SVGDropShadowEffect(e, t, r, n, i) {
                var a = t.container.globalData.renderConfig.filterSize,
                    s = t.data.fs || a;
                e.setAttribute("x", s.x || a.x), e.setAttribute("y", s.y || a.y), e.setAttribute("width", s.width || a.width), e.setAttribute("height", s.height || a.height), this.filterManager = t;
                var o = createNS("feGaussianBlur");
                o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", n + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, e.appendChild(o);
                var l = createNS("feOffset");
                l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", n + "_drop_shadow_1"), l.setAttribute("result", n + "_drop_shadow_2"), this.feOffset = l, e.appendChild(l);
                var c = createNS("feFlood");
                c.setAttribute("flood-color", "#00ff00"), c.setAttribute("flood-opacity", "1"), c.setAttribute("result", n + "_drop_shadow_3"), this.feFlood = c, e.appendChild(c);
                var u = createNS("feComposite");
                u.setAttribute("in", n + "_drop_shadow_3"), u.setAttribute("in2", n + "_drop_shadow_2"), u.setAttribute("operator", "in"), u.setAttribute("result", n + "_drop_shadow_4"), e.appendChild(u);
                var f = this.createMergeNode(n, [n + "_drop_shadow_4", i]);
                e.appendChild(f)
            }
            extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(e) {
                if (e || this.filterManager._mdf) {
                    var t = this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        n = this.filterManager.effectElements[2].p.v / 100;
                    this.linearFilter.setAttribute("values", linearFilterValue + " " + n + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0")
                }
            }, SVGFillFilter.prototype.renderFrame = function(e) {
                if (e || this.filterManager._mdf) {
                    var t = this.filterManager.effectElements[2].p.v,
                        r = this.filterManager.effectElements[6].p.v;
                    this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
                }
            }, SVGStrokeEffect.prototype.initialize = function() {
                var e, t, r, n, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (this.filterManager.effectElements[1].p.v === 1 ? (n = this.elem.maskManager.masksProperties.length, r = 0) : n = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (t = createNS("g")).setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-dashoffset", 1); r < n; r += 1) e = createNS("path"), t.appendChild(e), this.paths.push({
                    p: e,
                    m: r
                });
                if (this.filterManager.effectElements[10].p.v === 3) {
                    var a = createNS("mask"),
                        s = createElementID();
                    a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
                    var o = createNS("g");
                    for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); i[0];) o.appendChild(i[0]);
                    this.elem.layerElement.appendChild(o), this.masker = a, t.setAttribute("stroke", "#fff")
                } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                    if (this.filterManager.effectElements[10].p.v === 2)
                        for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
                    this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute("mask"), t.setAttribute("stroke", "#fff")
                }
                this.initialized = !0, this.pathMasker = t
            }, SVGStrokeEffect.prototype.renderFrame = function(e) {
                var t;
                this.initialized || this.initialize();
                var r, n, i = this.paths.length;
                for (t = 0; t < i; t += 1)
                    if (this.paths[t].m !== -1 && (r = this.elem.maskManager.viewData[this.paths[t].m], n = this.paths[t].p, (e || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                        var a;
                        if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                            var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                l = n.getTotalLength();
                            a = "0 0 0 " + l * s + " ";
                            var c, u = l * (o - s),
                                f = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                g = Math.floor(u / f);
                            for (c = 0; c < g; c += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                            a += "0 " + 10 * l + " 0 0"
                        } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                        n.setAttribute("stroke-dasharray", a)
                    }
                if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (e || this.filterManager.effectElements[3].p._mdf)) {
                    var d = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
                }
            }, SVGTritoneFilter.prototype.renderFrame = function(e) {
                if (e || this.filterManager._mdf) {
                    var t = this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        n = this.filterManager.effectElements[2].p.v,
                        i = n[0] + " " + r[0] + " " + t[0],
                        a = n[1] + " " + r[1] + " " + t[1],
                        s = n[2] + " " + r[2] + " " + t[2];
                    this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
                }
            }, SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
                var r = createNS(e);
                return r.setAttribute("type", "table"), t.appendChild(r), r
            }, SVGProLevelsFilter.prototype.getTableValue = function(e, t, r, n, i) {
                for (var a, s, o = 0, l = Math.min(e, t), c = Math.max(e, t), u = Array.call(null, {
                        length: 256
                    }), f = 0, g = i - n, d = t - e; o <= 256;) s = (a = o / 256) <= l ? d < 0 ? i : n : a >= c ? d < 0 ? n : i : n + g * Math.pow((a - e) / d, 1 / r), u[f] = s, f += 1, o += 256 / 255;
                return u.join(" ")
            }, SVGProLevelsFilter.prototype.renderFrame = function(e) {
                if (e || this.filterManager._mdf) {
                    var t, r = this.filterManager.effectElements;
                    this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
                }
            }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(e) {
                if (e || this.filterManager._mdf) {
                    if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
                        var t = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])))
                    }
                    if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                        var r = this.filterManager.effectElements[3].p.v,
                            n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                            i = r * Math.cos(n),
                            a = r * Math.sin(n);
                        this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a)
                    }
                }
            };
            var _svgMatteSymbols = [];

            function SVGMatte3Effect(e, t, r) {
                this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
            }

            function SVGGaussianBlurEffect(e, t, r, n) {
                e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
                var i = createNS("feGaussianBlur");
                i.setAttribute("result", n), e.appendChild(i), this.feGaussianBlur = i
            }

            function TransformEffect() {}

            function SVGTransformEffect(e, t) {
                this.init(t)
            }

            function CVTransformEffect(e) {
                this.init(e)
            }
            return SVGMatte3Effect.prototype.findSymbol = function(e) {
                for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
                    if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
                    t += 1
                }
                return null
            }, SVGMatte3Effect.prototype.replaceInParent = function(e, t) {
                var r = e.layerElement.parentNode;
                if (r) {
                    for (var n, i = r.children, a = 0, s = i.length; a < s && i[a] !== e.layerElement;) a += 1;
                    a <= s - 2 && (n = i[a + 1]);
                    var o = createNS("use");
                    o.setAttribute("href", "#" + t), n ? r.insertBefore(o, n) : r.appendChild(o)
                }
            }, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
                if (!this.findSymbol(t)) {
                    var r = createElementID(),
                        n = createNS("mask");
                    n.setAttribute("id", t.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
                    var i = e.globalData.defs;
                    i.appendChild(n);
                    var a = createNS("symbol");
                    a.setAttribute("id", r), this.replaceInParent(t, r), a.appendChild(t.layerElement), i.appendChild(a);
                    var s = createNS("use");
                    s.setAttribute("href", "#" + r), n.appendChild(s), t.data.hd = !1, t.show()
                }
                e.setMatte(t.layerId)
            }, SVGMatte3Effect.prototype.initialize = function() {
                for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, n = t.length; r < n;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
                this.initialized = !0
            }, SVGMatte3Effect.prototype.renderFrame = function() {
                this.initialized || this.initialize()
            }, SVGGaussianBlurEffect.prototype.renderFrame = function(e) {
                if (e || this.filterManager._mdf) {
                    var t = .3 * this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        n = r == 3 ? 0 : t,
                        i = r == 2 ? 0 : t;
                    this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i);
                    var a = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
                    this.feGaussianBlur.setAttribute("edgeMode", a)
                }
            }, TransformEffect.prototype.init = function(e) {
                this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
            }, TransformEffect.prototype.renderFrame = function(e) {
                if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
                    var t = this.effectsManager.effectElements,
                        r = t[0].p.v,
                        n = t[1].p.v,
                        i = t[2].p.v === 1,
                        a = t[3].p.v,
                        s = i ? a : t[4].p.v,
                        o = t[5].p.v,
                        l = t[6].p.v,
                        c = t[7].p.v;
                    this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * s, .01 * a, 1), this.matrix.rotate(-c * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(n[0], n[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0)
                }
            }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
        })
    });
    var qS = E((Ise, RS) => {
        "use strict";
        var ZU = pt(),
            oi = (DS(), ht(OS)),
            JU = FS();
        ZU.define("lottie", RS.exports = function() {
            return {
                lottie: JU,
                createInstance: oi.createInstance,
                cleanupElement: oi.cleanupElement,
                init: oi.init,
                destroy: oi.destroy,
                ready: oi.ready
            }
        })
    });
    var NS = E((Ase, kS) => {
        "use strict";
        var LS = pt();
        LS.define("brand", kS.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                a = ".w-webflow-badge",
                s = window.location,
                o = /PhantomJS/i.test(navigator.userAgent),
                l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                c;
            t.ready = function() {
                var d = n.attr("data-wf-status"),
                    p = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(p) && s.hostname !== p && (d = !0), d && !o && (c = c || f(), g(), setTimeout(g, 500), e(r).off(l, u).on(l, u))
            };

            function u() {
                var d = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(c).attr("style", d ? "display: none !important;" : "")
            }

            function f() {
                var d = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    p = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    m = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return d.append(p, m), d[0]
            }

            function g() {
                var d = i.children(a),
                    p = d.length && d.get(0) === c,
                    m = LS.env("editor");
                if (p) {
                    m && d.remove();
                    return
                }
                d.length && d.remove(), m || i.append(c)
            }
            return t
        })
    });
    var VS = E((Pse, BS) => {
        "use strict";
        var gu = pt();
        gu.define("edit", BS.exports = function(e, t, r) {
            if (r = r || {}, (gu.env("test") || gu.env("frame")) && !r.fixture && !eW()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                a = e(document.documentElement),
                s = document.location,
                o = "hashchange",
                l, c = r.load || g,
                u = !1;
            try {
                u = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            u ? c() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && c() : i.on(o, f).triggerHandler(o);

            function f() {
                l || /\?edit/.test(s.hash) && c()
            }

            function g() {
                l = !0, window.WebflowEditor = !0, i.off(o, f), y(function(S) {
                    e.ajax({
                        url: v("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: a.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: d(S)
                    })
                })
            }

            function d(S) {
                return function(x) {
                    if (!x) {
                        console.error("Could not load editor data");
                        return
                    }
                    x.thirdPartyCookiesSupported = S, p(h(x.bugReporterScriptPath), function() {
                        p(h(x.scriptPath), function() {
                            window.WebflowEditor(x)
                        })
                    })
                }
            }

            function p(S, x) {
                e.ajax({
                    type: "GET",
                    url: S,
                    dataType: "script",
                    cache: !0
                }).then(x, m)
            }

            function m(S, x, T) {
                throw console.error("Could not load editor script: " + x), T
            }

            function h(S) {
                return S.indexOf("//") >= 0 ? S : v("https://editor-api.webflow.com" + S)
            }

            function v(S) {
                return S.replace(/([^:])\/\//g, "$1/")
            }

            function y(S) {
                var x = window.document.createElement("iframe");
                x.src = "https://webflow.com/site/third-party-cookie-check.html", x.style.display = "none", x.sandbox = "allow-scripts allow-same-origin";
                var T = function(_) {
                    _.data === "WF_third_party_cookies_unsupported" ? (b(x, T), S(!1)) : _.data === "WF_third_party_cookies_supported" && (b(x, T), S(!0))
                };
                x.onerror = function() {
                    b(x, T), S(!1)
                }, window.addEventListener("message", T, !1), window.document.body.appendChild(x)
            }

            function b(S, x) {
                window.removeEventListener("message", x, !1), S.remove()
            }
            return n
        });

        function eW() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var zS = E((Cse, GS) => {
        "use strict";
        var tW = pt();
        tW.define("focus-visible", GS.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    a = null,
                    s = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function o(b) {
                    return !!(b && b !== document && b.nodeName !== "HTML" && b.nodeName !== "BODY" && "classList" in b && "contains" in b.classList)
                }

                function l(b) {
                    var S = b.type,
                        x = b.tagName;
                    return !!(x === "INPUT" && s[S] && !b.readOnly || x === "TEXTAREA" && !b.readOnly || b.isContentEditable)
                }

                function c(b) {
                    b.getAttribute("data-wf-focus-visible") || b.setAttribute("data-wf-focus-visible", "true")
                }

                function u(b) {
                    b.getAttribute("data-wf-focus-visible") && b.removeAttribute("data-wf-focus-visible")
                }

                function f(b) {
                    b.metaKey || b.altKey || b.ctrlKey || (o(r.activeElement) && c(r.activeElement), n = !0)
                }

                function g() {
                    n = !1
                }

                function d(b) {
                    o(b.target) && (n || l(b.target)) && c(b.target)
                }

                function p(b) {
                    o(b.target) && b.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(a), a = window.setTimeout(function() {
                        i = !1
                    }, 100), u(b.target))
                }

                function m() {
                    document.visibilityState === "hidden" && (i && (n = !0), h())
                }

                function h() {
                    document.addEventListener("mousemove", y), document.addEventListener("mousedown", y), document.addEventListener("mouseup", y), document.addEventListener("pointermove", y), document.addEventListener("pointerdown", y), document.addEventListener("pointerup", y), document.addEventListener("touchmove", y), document.addEventListener("touchstart", y), document.addEventListener("touchend", y)
                }

                function v() {
                    document.removeEventListener("mousemove", y), document.removeEventListener("mousedown", y), document.removeEventListener("mouseup", y), document.removeEventListener("pointermove", y), document.removeEventListener("pointerdown", y), document.removeEventListener("pointerup", y), document.removeEventListener("touchmove", y), document.removeEventListener("touchstart", y), document.removeEventListener("touchend", y)
                }

                function y(b) {
                    b.target.nodeName && b.target.nodeName.toLowerCase() === "html" || (n = !1, v())
                }
                document.addEventListener("keydown", f, !0), document.addEventListener("mousedown", g, !0), document.addEventListener("pointerdown", g, !0), document.addEventListener("touchstart", g, !0), document.addEventListener("visibilitychange", m, !0), h(), r.addEventListener("focus", d, !0), r.addEventListener("blur", p, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var US = E((wse, jS) => {
        "use strict";
        var HS = pt();
        HS.define("focus", jS.exports = function() {
            var e = [],
                t = !1;

            function r(s) {
                t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
            }

            function n(s) {
                var o = s.target,
                    l = o.tagName;
                return /^a$/i.test(l) && o.href != null || /^(button|textarea)$/i.test(l) && o.disabled !== !0 || /^input$/i.test(l) && /^(button|reset|submit|radio|checkbox)$/i.test(o.type) && !o.disabled || !/^(button|input|textarea|select|a)$/i.test(l) && !Number.isNaN(Number.parseFloat(o.tabIndex)) || /^audio$/i.test(l) || /^video$/i.test(l) && o.controls === !0
            }

            function i(s) {
                n(s) && (t = !0, setTimeout(() => {
                    for (t = !1, s.target.focus(); e.length > 0;) {
                        var o = e.pop();
                        o.target.dispatchEvent(new MouseEvent(o.type, o))
                    }
                }, 0))
            }

            function a() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && HS.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: a
            }
        })
    });
    var $S = E((Mse, XS) => {
        "use strict";
        var vu = window.jQuery,
            Mt = {},
            Wa = [],
            WS = ".w-ix",
            Xa = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, vu(t).triggerHandler(Mt.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, vu(t).triggerHandler(Mt.types.OUTRO))
                }
            };
        Mt.triggers = {};
        Mt.types = {
            INTRO: "w-ix-intro" + WS,
            OUTRO: "w-ix-outro" + WS
        };
        Mt.init = function() {
            for (var e = Wa.length, t = 0; t < e; t++) {
                var r = Wa[t];
                r[0](0, r[1])
            }
            Wa = [], vu.extend(Mt.triggers, Xa)
        };
        Mt.async = function() {
            for (var e in Xa) {
                var t = Xa[e];
                Xa.hasOwnProperty(e) && (Mt.triggers[e] = function(r, n) {
                    Wa.push([t, n])
                })
            }
        };
        Mt.async();
        XS.exports = Mt
    });
    var ZS = E((Ose, QS) => {
        "use strict";
        var yu = $S();

        function KS(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var rW = window.jQuery,
            $a = {},
            YS = ".w-ix",
            nW = {
                reset: function(e, t) {
                    yu.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    yu.triggers.intro(e, t), KS(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    yu.triggers.outro(e, t), KS(t, "COMPONENT_INACTIVE")
                }
            };
        $a.triggers = {};
        $a.types = {
            INTRO: "w-ix-intro" + YS,
            OUTRO: "w-ix-outro" + YS
        };
        rW.extend($a.triggers, nW);
        QS.exports = $a
    });
    var JS = E((Dse, Ht) => {
        function Eu(e) {
            return Ht.exports = Eu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Ht.exports.__esModule = !0, Ht.exports.default = Ht.exports, Eu(e)
        }
        Ht.exports = Eu, Ht.exports.__esModule = !0, Ht.exports.default = Ht.exports
    });
    var Ka = E((Fse, li) => {
        var iW = JS().default;

        function ex(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (ex = function(i) {
                return i ? r : t
            })(e)
        }

        function aW(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || iW(e) !== "object" && typeof e != "function") return {
                default: e
            };
            var r = ex(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
                }
            return n.default = e, r && r.set(e, n), n
        }
        li.exports = aW, li.exports.__esModule = !0, li.exports.default = li.exports
    });
    var tx = E((Rse, ui) => {
        function sW(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ui.exports = sW, ui.exports.__esModule = !0, ui.exports.default = ui.exports
    });
    var nx = E((qse, rx) => {
        var oW = te(),
            lW = ge();
        rx.exports = function(e, t) {
            return lW(oW[e].prototype[t])
        }
    });
    var ax = E((Lse, ix) => {
        sl();
        var uW = nx();
        ix.exports = uW("Array", "includes")
    });
    var ox = E((kse, sx) => {
        var hW = ax();
        sx.exports = hW
    });
    var ux = E((Nse, lx) => {
        var cW = ox();
        lx.exports = cW
    });
    var bu = E((Bse, hx) => {
        var fW = to(),
            pW = fW(Object.getPrototypeOf, Object);
        hx.exports = pW
    });
    var Su = E((Vse, fx) => {
        var dW = Yt(),
            mW = bu(),
            gW = qt(),
            vW = "[object Object]",
            yW = Function.prototype,
            EW = Object.prototype,
            cx = yW.toString,
            bW = EW.hasOwnProperty,
            SW = cx.call(Object);

        function xW(e) {
            if (!gW(e) || dW(e) != vW) return !1;
            var t = mW(e);
            if (t === null) return !0;
            var r = bW.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && cx.call(r) == SW
        }
        fx.exports = xW
    });
    var px = E(xu => {
        "use strict";
        Object.defineProperty(xu, "__esModule", {
            value: !0
        });
        xu.default = _W;

        function _W(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var dx = E((Tu, _u) => {
        "use strict";
        Object.defineProperty(Tu, "__esModule", {
            value: !0
        });
        var TW = px(),
            IW = AW(TW);

        function AW(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var tn;
        typeof self < "u" ? tn = self : typeof window < "u" ? tn = window : typeof global < "u" ? tn = global : typeof _u < "u" ? tn = _u : tn = Function("return this")();
        var PW = (0, IW.default)(tn);
        Tu.default = PW
    });
    var Iu = E(hi => {
        "use strict";
        hi.__esModule = !0;
        hi.ActionTypes = void 0;
        hi.default = yx;
        var CW = Su(),
            wW = vx(CW),
            MW = dx(),
            mx = vx(MW);

        function vx(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var gx = hi.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function yx(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(yx)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                a = t,
                s = [],
                o = s,
                l = !1;

            function c() {
                o === s && (o = s.slice())
            }

            function u() {
                return a
            }

            function f(m) {
                if (typeof m != "function") throw new Error("Expected listener to be a function.");
                var h = !0;
                return c(), o.push(m),
                    function() {
                        if (h) {
                            h = !1, c();
                            var y = o.indexOf(m);
                            o.splice(y, 1)
                        }
                    }
            }

            function g(m) {
                if (!(0, wW.default)(m)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof m.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (l) throw new Error("Reducers may not dispatch actions.");
                try {
                    l = !0, a = i(a, m)
                } finally {
                    l = !1
                }
                for (var h = s = o, v = 0; v < h.length; v++) h[v]();
                return m
            }

            function d(m) {
                if (typeof m != "function") throw new Error("Expected the nextReducer to be a function.");
                i = m, g({
                    type: gx.INIT
                })
            }

            function p() {
                var m, h = f;
                return m = {
                    subscribe: function(y) {
                        if (typeof y != "object") throw new TypeError("Expected the observer to be an object.");

                        function b() {
                            y.next && y.next(u())
                        }
                        b();
                        var S = h(b);
                        return {
                            unsubscribe: S
                        }
                    }
                }, m[mx.default] = function() {
                    return this
                }, m
            }
            return g({
                type: gx.INIT
            }), n = {
                dispatch: g,
                subscribe: f,
                getState: u,
                replaceReducer: d
            }, n[mx.default] = p, n
        }
    });
    var Pu = E(Au => {
        "use strict";
        Au.__esModule = !0;
        Au.default = OW;

        function OW(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var Sx = E(Cu => {
        "use strict";
        Cu.__esModule = !0;
        Cu.default = LW;
        var Ex = Iu(),
            DW = Su(),
            jse = bx(DW),
            FW = Pu(),
            Use = bx(FW);

        function bx(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function RW(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function qW(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: Ex.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + Ex.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function LW(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var a = Object.keys(r);
            if (!1) var s;
            var o;
            try {
                qW(r)
            } catch (l) {
                o = l
            }
            return function() {
                var c = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    u = arguments[1];
                if (o) throw o;
                if (!1) var f;
                for (var g = !1, d = {}, p = 0; p < a.length; p++) {
                    var m = a[p],
                        h = r[m],
                        v = c[m],
                        y = h(v, u);
                    if (typeof y > "u") {
                        var b = RW(m, u);
                        throw new Error(b)
                    }
                    d[m] = y, g = g || y !== v
                }
                return g ? d : c
            }
        }
    });
    var _x = E(wu => {
        "use strict";
        wu.__esModule = !0;
        wu.default = kW;

        function xx(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function kW(e, t) {
            if (typeof e == "function") return xx(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var a = r[i],
                    s = e[a];
                typeof s == "function" && (n[a] = xx(s, t))
            }
            return n
        }
    });
    var Ou = E(Mu => {
        "use strict";
        Mu.__esModule = !0;
        Mu.default = NW;

        function NW() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(a) {
                return a
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(a, s) {
                    return s(a)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var Tx = E(Du => {
        "use strict";
        Du.__esModule = !0;
        var BW = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Du.default = HW;
        var VW = Ou(),
            GW = zW(VW);

        function zW(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function HW() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, a, s) {
                    var o = n(i, a, s),
                        l = o.dispatch,
                        c = [],
                        u = {
                            getState: o.getState,
                            dispatch: function(g) {
                                return l(g)
                            }
                        };
                    return c = t.map(function(f) {
                        return f(u)
                    }), l = GW.default.apply(void 0, c)(o.dispatch), BW({}, o, {
                        dispatch: l
                    })
                }
            }
        }
    });
    var Fu = E(st => {
        "use strict";
        st.__esModule = !0;
        st.compose = st.applyMiddleware = st.bindActionCreators = st.combineReducers = st.createStore = void 0;
        var jW = Iu(),
            UW = rn(jW),
            WW = Sx(),
            XW = rn(WW),
            $W = _x(),
            KW = rn($W),
            YW = Tx(),
            QW = rn(YW),
            ZW = Ou(),
            JW = rn(ZW),
            e4 = Pu(),
            Yse = rn(e4);

        function rn(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        st.createStore = UW.default;
        st.combineReducers = XW.default;
        st.bindActionCreators = KW.default;
        st.applyMiddleware = QW.default;
        st.compose = JW.default
    });
    var Et, Ru, Ot, t4, r4, qu, n4, Ix = pe(() => {
        "use strict";
        Et = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Ru = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, Ot = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, t4 = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, r4 = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, qu = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, n4 = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var ot, i4, Lu = pe(() => {
        "use strict";
        ot = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, i4 = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var a4, Ax = pe(() => {
        "use strict";
        a4 = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var s4, o4, l4, u4, h4, c4, f4, ku, Px = pe(() => {
        "use strict";
        Lu();
        ({
            TRANSFORM_MOVE: s4,
            TRANSFORM_SCALE: o4,
            TRANSFORM_ROTATE: l4,
            TRANSFORM_SKEW: u4,
            STYLE_SIZE: h4,
            STYLE_FILTER: c4,
            STYLE_FONT_VARIATION: f4
        } = ot), ku = {
            [s4]: !0,
            [o4]: !0,
            [l4]: !0,
            [u4]: !0,
            [h4]: !0,
            [c4]: !0,
            [f4]: !0
        }
    });
    var De = {};
    Ge(De, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => w4,
        IX2_ANIMATION_FRAME_CHANGED: () => _4,
        IX2_CLEAR_REQUESTED: () => b4,
        IX2_ELEMENT_STATE_CHANGED: () => C4,
        IX2_EVENT_LISTENER_ADDED: () => S4,
        IX2_EVENT_STATE_CHANGED: () => x4,
        IX2_INSTANCE_ADDED: () => I4,
        IX2_INSTANCE_REMOVED: () => P4,
        IX2_INSTANCE_STARTED: () => A4,
        IX2_MEDIA_QUERIES_DEFINED: () => O4,
        IX2_PARAMETER_CHANGED: () => T4,
        IX2_PLAYBACK_REQUESTED: () => y4,
        IX2_PREVIEW_REQUESTED: () => v4,
        IX2_RAW_DATA_IMPORTED: () => p4,
        IX2_SESSION_INITIALIZED: () => d4,
        IX2_SESSION_STARTED: () => m4,
        IX2_SESSION_STOPPED: () => g4,
        IX2_STOP_REQUESTED: () => E4,
        IX2_TEST_FRAME_RENDERED: () => D4,
        IX2_VIEWPORT_WIDTH_CHANGED: () => M4
    });
    var p4, d4, m4, g4, v4, y4, E4, b4, S4, x4, _4, T4, I4, A4, P4, C4, w4, M4, O4, D4, Cx = pe(() => {
        "use strict";
        p4 = "IX2_RAW_DATA_IMPORTED", d4 = "IX2_SESSION_INITIALIZED", m4 = "IX2_SESSION_STARTED", g4 = "IX2_SESSION_STOPPED", v4 = "IX2_PREVIEW_REQUESTED", y4 = "IX2_PLAYBACK_REQUESTED", E4 = "IX2_STOP_REQUESTED", b4 = "IX2_CLEAR_REQUESTED", S4 = "IX2_EVENT_LISTENER_ADDED", x4 = "IX2_EVENT_STATE_CHANGED", _4 = "IX2_ANIMATION_FRAME_CHANGED", T4 = "IX2_PARAMETER_CHANGED", I4 = "IX2_INSTANCE_ADDED", A4 = "IX2_INSTANCE_STARTED", P4 = "IX2_INSTANCE_REMOVED", C4 = "IX2_ELEMENT_STATE_CHANGED", w4 = "IX2_ACTION_LIST_PLAYBACK_CHANGED", M4 = "IX2_VIEWPORT_WIDTH_CHANGED", O4 = "IX2_MEDIA_QUERIES_DEFINED", D4 = "IX2_TEST_FRAME_RENDERED"
    });
    var Ne = {};
    Ge(Ne, {
        ABSTRACT_NODE: () => MX,
        AUTO: () => EX,
        BACKGROUND: () => pX,
        BACKGROUND_COLOR: () => fX,
        BAR_DELIMITER: () => xX,
        BORDER_COLOR: () => dX,
        BOUNDARY_SELECTOR: () => k4,
        CHILDREN: () => _X,
        COLON_DELIMITER: () => SX,
        COLOR: () => mX,
        COMMA_DELIMITER: () => bX,
        CONFIG_UNIT: () => U4,
        CONFIG_VALUE: () => G4,
        CONFIG_X_UNIT: () => z4,
        CONFIG_X_VALUE: () => N4,
        CONFIG_Y_UNIT: () => H4,
        CONFIG_Y_VALUE: () => B4,
        CONFIG_Z_UNIT: () => j4,
        CONFIG_Z_VALUE: () => V4,
        DISPLAY: () => gX,
        FILTER: () => lX,
        FLEX: () => vX,
        FONT_VARIATION_SETTINGS: () => uX,
        HEIGHT: () => cX,
        HTML_ELEMENT: () => CX,
        IMMEDIATE_CHILDREN: () => TX,
        IX2_ID_DELIMITER: () => F4,
        OPACITY: () => oX,
        PARENT: () => AX,
        PLAIN_OBJECT: () => wX,
        PRESERVE_3D: () => PX,
        RENDER_GENERAL: () => DX,
        RENDER_PLUGIN: () => RX,
        RENDER_STYLE: () => FX,
        RENDER_TRANSFORM: () => OX,
        ROTATE_X: () => tX,
        ROTATE_Y: () => rX,
        ROTATE_Z: () => nX,
        SCALE_3D: () => eX,
        SCALE_X: () => Q4,
        SCALE_Y: () => Z4,
        SCALE_Z: () => J4,
        SIBLINGS: () => IX,
        SKEW: () => iX,
        SKEW_X: () => aX,
        SKEW_Y: () => sX,
        TRANSFORM: () => W4,
        TRANSLATE_3D: () => Y4,
        TRANSLATE_X: () => X4,
        TRANSLATE_Y: () => $4,
        TRANSLATE_Z: () => K4,
        WF_PAGE: () => R4,
        WIDTH: () => hX,
        WILL_CHANGE: () => yX,
        W_MOD_IX: () => L4,
        W_MOD_JS: () => q4
    });
    var F4, R4, q4, L4, k4, N4, B4, V4, G4, z4, H4, j4, U4, W4, X4, $4, K4, Y4, Q4, Z4, J4, eX, tX, rX, nX, iX, aX, sX, oX, lX, uX, hX, cX, fX, pX, dX, mX, gX, vX, yX, EX, bX, SX, xX, _X, TX, IX, AX, PX, CX, wX, MX, OX, DX, FX, RX, wx = pe(() => {
        "use strict";
        F4 = "|", R4 = "data-wf-page", q4 = "w-mod-js", L4 = "w-mod-ix", k4 = ".w-dyn-item", N4 = "xValue", B4 = "yValue", V4 = "zValue", G4 = "value", z4 = "xUnit", H4 = "yUnit", j4 = "zUnit", U4 = "unit", W4 = "transform", X4 = "translateX", $4 = "translateY", K4 = "translateZ", Y4 = "translate3d", Q4 = "scaleX", Z4 = "scaleY", J4 = "scaleZ", eX = "scale3d", tX = "rotateX", rX = "rotateY", nX = "rotateZ", iX = "skew", aX = "skewX", sX = "skewY", oX = "opacity", lX = "filter", uX = "font-variation-settings", hX = "width", cX = "height", fX = "backgroundColor", pX = "background", dX = "borderColor", mX = "color", gX = "display", vX = "flex", yX = "willChange", EX = "AUTO", bX = ",", SX = ":", xX = "|", _X = "CHILDREN", TX = "IMMEDIATE_CHILDREN", IX = "SIBLINGS", AX = "PARENT", PX = "preserve-3d", CX = "HTML_ELEMENT", wX = "PLAIN_OBJECT", MX = "ABSTRACT_NODE", OX = "RENDER_TRANSFORM", DX = "RENDER_GENERAL", FX = "RENDER_STYLE", RX = "RENDER_PLUGIN"
    });
    var Mx = {};
    Ge(Mx, {
        ActionAppliesTo: () => i4,
        ActionTypeConsts: () => ot,
        EventAppliesTo: () => Ru,
        EventBasedOn: () => Ot,
        EventContinuousMouseAxes: () => t4,
        EventLimitAffectedElements: () => r4,
        EventTypeConsts: () => Et,
        IX2EngineActionTypes: () => De,
        IX2EngineConstants: () => Ne,
        InteractionTypeConsts: () => a4,
        QuickEffectDirectionConsts: () => n4,
        QuickEffectIds: () => qu,
        ReducedMotionTypes: () => ku
    });
    var Ye = pe(() => {
        "use strict";
        Ix();
        Lu();
        Ax();
        Px();
        Cx();
        wx()
    });
    var qX, Ox, Dx = pe(() => {
        "use strict";
        Ye();
        ({
            IX2_RAW_DATA_IMPORTED: qX
        } = De), Ox = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case qX:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var nn = E(_e => {
        "use strict";
        Object.defineProperty(_e, "__esModule", {
            value: !0
        });
        var LX = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        _e.clone = Qa;
        _e.addLast = qx;
        _e.addFirst = Lx;
        _e.removeLast = kx;
        _e.removeFirst = Nx;
        _e.insert = Bx;
        _e.removeAt = Vx;
        _e.replaceAt = Gx;
        _e.getIn = Za;
        _e.set = Ja;
        _e.setIn = es;
        _e.update = Hx;
        _e.updateIn = jx;
        _e.merge = Ux;
        _e.mergeDeep = Wx;
        _e.mergeIn = Xx;
        _e.omit = $x;
        _e.addDefaults = Kx;
        var Fx = "INVALID_ARGS";

        function Rx(e) {
            throw new Error(e)
        }

        function Nu(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var kX = {}.hasOwnProperty;

        function Qa(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = Nu(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Qe(e, t, r) {
            var n = r;
            n == null && Rx(Fx);
            for (var i = !1, a = arguments.length, s = Array(a > 3 ? a - 3 : 0), o = 3; o < a; o++) s[o - 3] = arguments[o];
            for (var l = 0; l < s.length; l++) {
                var c = s[l];
                if (c != null) {
                    var u = Nu(c);
                    if (u.length)
                        for (var f = 0; f <= u.length; f++) {
                            var g = u[f];
                            if (!(e && n[g] !== void 0)) {
                                var d = c[g];
                                t && Ya(n[g]) && Ya(d) && (d = Qe(e, t, n[g], d)), !(d === void 0 || d === n[g]) && (i || (i = !0, n = Qa(n)), n[g] = d)
                            }
                        }
                }
            }
            return n
        }

        function Ya(e) {
            var t = typeof e > "u" ? "undefined" : LX(e);
            return e != null && (t === "object" || t === "function")
        }

        function qx(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Lx(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function kx(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Nx(e) {
            return e.length ? e.slice(1) : e
        }

        function Bx(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Vx(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Gx(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), a = 0; a < n; a++) i[a] = e[a];
            return i[t] = r, i
        }

        function Za(e, t) {
            if (!Array.isArray(t) && Rx(Fx), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function Ja(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var a = Qa(i);
            return a[t] = r, a
        }

        function zx(e, t, r, n) {
            var i = void 0,
                a = t[n];
            if (n === t.length - 1) i = r;
            else {
                var s = Ya(e) && Ya(e[a]) ? e[a] : typeof t[n + 1] == "number" ? [] : {};
                i = zx(s, t, r, n + 1)
            }
            return Ja(e, a, i)
        }

        function es(e, t, r) {
            return t.length ? zx(e, t, r, 0) : r
        }

        function Hx(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return Ja(e, t, i)
        }

        function jx(e, t, r) {
            var n = Za(e, t),
                i = r(n);
            return es(e, t, i)
        }

        function Ux(e, t, r, n, i, a) {
            for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
            return o.length ? Qe.call.apply(Qe, [null, !1, !1, e, t, r, n, i, a].concat(o)) : Qe(!1, !1, e, t, r, n, i, a)
        }

        function Wx(e, t, r, n, i, a) {
            for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
            return o.length ? Qe.call.apply(Qe, [null, !1, !0, e, t, r, n, i, a].concat(o)) : Qe(!1, !0, e, t, r, n, i, a)
        }

        function Xx(e, t, r, n, i, a, s) {
            var o = Za(e, t);
            o == null && (o = {});
            for (var l = void 0, c = arguments.length, u = Array(c > 7 ? c - 7 : 0), f = 7; f < c; f++) u[f - 7] = arguments[f];
            return u.length ? l = Qe.call.apply(Qe, [null, !1, !1, o, r, n, i, a, s].concat(u)) : l = Qe(!1, !1, o, r, n, i, a, s), es(e, t, l)
        }

        function $x(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (kX.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var a = {}, s = Nu(e), o = 0; o < s.length; o++) {
                var l = s[o];
                r.indexOf(l) >= 0 || (a[l] = e[l])
            }
            return a
        }

        function Kx(e, t, r, n, i, a) {
            for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++) o[l - 6] = arguments[l];
            return o.length ? Qe.call.apply(Qe, [null, !0, !1, e, t, r, n, i, a].concat(o)) : Qe(!0, !1, e, t, r, n, i, a)
        }
        var NX = {
            clone: Qa,
            addLast: qx,
            addFirst: Lx,
            removeLast: kx,
            removeFirst: Nx,
            insert: Bx,
            removeAt: Vx,
            replaceAt: Gx,
            getIn: Za,
            set: Ja,
            setIn: es,
            update: Hx,
            updateIn: jx,
            merge: Ux,
            mergeDeep: Wx,
            mergeIn: Xx,
            omit: $x,
            addDefaults: Kx
        };
        _e.default = NX
    });
    var Qx, BX, VX, GX, zX, HX, Yx, Zx, Jx = pe(() => {
        "use strict";
        Ye();
        Qx = le(nn()), {
            IX2_PREVIEW_REQUESTED: BX,
            IX2_PLAYBACK_REQUESTED: VX,
            IX2_STOP_REQUESTED: GX,
            IX2_CLEAR_REQUESTED: zX
        } = De, HX = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Yx = Object.create(null, {
            [BX]: {
                value: "preview"
            },
            [VX]: {
                value: "playback"
            },
            [GX]: {
                value: "stop"
            },
            [zX]: {
                value: "clear"
            }
        }), Zx = (e = HX, t) => {
            if (t.type in Yx) {
                let r = [Yx[t.type]];
                return (0, Qx.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var Ue, jX, UX, WX, XX, $X, KX, YX, QX, ZX, JX, e_, e6, t_, r_ = pe(() => {
        "use strict";
        Ye();
        Ue = le(nn()), {
            IX2_SESSION_INITIALIZED: jX,
            IX2_SESSION_STARTED: UX,
            IX2_TEST_FRAME_RENDERED: WX,
            IX2_SESSION_STOPPED: XX,
            IX2_EVENT_LISTENER_ADDED: $X,
            IX2_EVENT_STATE_CHANGED: KX,
            IX2_ANIMATION_FRAME_CHANGED: YX,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: QX,
            IX2_VIEWPORT_WIDTH_CHANGED: ZX,
            IX2_MEDIA_QUERIES_DEFINED: JX
        } = De, e_ = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, e6 = 20, t_ = (e = e_, t) => {
            switch (t.type) {
                case jX:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, Ue.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case UX:
                    return (0, Ue.set)(e, "active", !0);
                case WX:
                    {
                        let {
                            payload: {
                                step: r = e6
                            }
                        } = t;
                        return (0, Ue.set)(e, "tick", e.tick + r)
                    }
                case XX:
                    return e_;
                case YX:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, Ue.set)(e, "tick", r)
                    }
                case $X:
                    {
                        let r = (0, Ue.addLast)(e.eventListeners, t.payload);
                        return (0, Ue.set)(e, "eventListeners", r)
                    }
                case KX:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, Ue.setIn)(e, ["eventState", r], n)
                    }
                case QX:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, Ue.setIn)(e, ["playbackState", r], n)
                    }
                case ZX:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        a = null;
                        for (let s = 0; s < i; s++) {
                            let {
                                key: o,
                                min: l,
                                max: c
                            } = n[s];
                            if (r >= l && r <= c) {
                                a = o;
                                break
                            }
                        }
                        return (0, Ue.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: a
                        })
                    }
                case JX:
                    return (0, Ue.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var Bu = E((doe, n_) => {
        var t6 = Zt(),
            r6 = pr(),
            n6 = Mn();

        function i6(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!r6(t)) {
                    var a = t6(r, 3);
                    t = n6(t), r = function(o) {
                        return a(i[o], o, i)
                    }
                }
                var s = e(t, r, n);
                return s > -1 ? i[a ? t[s] : s] : void 0
            }
        }
        n_.exports = i6
    });
    var Vu = E((moe, i_) => {
        var a6 = Bu(),
            s6 = vo(),
            o6 = a6(s6);
        i_.exports = o6
    });
    var o_ = {};
    Ge(o_, {
        ELEMENT_MATCHES: () => l6,
        FLEX_PREFIXED: () => Gu,
        IS_BROWSER_ENV: () => bt,
        TRANSFORM_PREFIXED: () => hr,
        TRANSFORM_STYLE_PREFIXED: () => rs,
        withBrowser: () => ts
    });
    var s_, bt, ts, l6, Gu, hr, a_, rs, ns = pe(() => {
        "use strict";
        s_ = le(Vu()), bt = typeof window < "u", ts = (e, t) => bt ? e() : t, l6 = ts(() => (0, s_.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Gu = ts(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let a = t[i];
                    if (e.style.display = a, e.style.display === a) return a
                }
                return r
            } catch {
                return r
            }
        }, "flex"), hr = ts(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let a = t[i] + r;
                    if (e.style[a] !== void 0) return a
                }
            }
            return "transform"
        }, "transform"), a_ = hr.split("transform")[0], rs = a_ ? a_ + "TransformStyle" : "transformStyle"
    });
    var zu = E((goe, f_) => {
        var u6 = 4,
            h6 = .001,
            c6 = 1e-7,
            f6 = 10,
            ci = 11,
            is = 1 / (ci - 1),
            p6 = typeof Float32Array == "function";

        function l_(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function u_(e, t) {
            return 3 * t - 6 * e
        }

        function h_(e) {
            return 3 * e
        }

        function as(e, t, r) {
            return ((l_(t, r) * e + u_(t, r)) * e + h_(t)) * e
        }

        function c_(e, t, r) {
            return 3 * l_(t, r) * e * e + 2 * u_(t, r) * e + h_(t)
        }

        function d6(e, t, r, n, i) {
            var a, s, o = 0;
            do s = t + (r - t) / 2, a = as(s, n, i) - e, a > 0 ? r = s : t = s; while (Math.abs(a) > c6 && ++o < f6);
            return s
        }

        function m6(e, t, r, n) {
            for (var i = 0; i < u6; ++i) {
                var a = c_(t, r, n);
                if (a === 0) return t;
                var s = as(t, r, n) - e;
                t -= s / a
            }
            return t
        }
        f_.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var a = p6 ? new Float32Array(ci) : new Array(ci);
            if (t !== r || n !== i)
                for (var s = 0; s < ci; ++s) a[s] = as(s * is, t, n);

            function o(l) {
                for (var c = 0, u = 1, f = ci - 1; u !== f && a[u] <= l; ++u) c += is;
                --u;
                var g = (l - a[u]) / (a[u + 1] - a[u]),
                    d = c + g * is,
                    p = c_(d, t, n);
                return p >= h6 ? m6(l, d, t, n) : p === 0 ? d : d6(l, c, c + is, t, n)
            }
            return function(c) {
                return t === r && n === i ? c : c === 0 ? 0 : c === 1 ? 1 : as(o(c), r, i)
            }
        }
    });
    var pi = {};
    Ge(pi, {
        bounce: () => Q6,
        bouncePast: () => Z6,
        ease: () => g6,
        easeIn: () => v6,
        easeInOut: () => E6,
        easeOut: () => y6,
        inBack: () => z6,
        inCirc: () => N6,
        inCubic: () => _6,
        inElastic: () => U6,
        inExpo: () => q6,
        inOutBack: () => j6,
        inOutCirc: () => V6,
        inOutCubic: () => I6,
        inOutElastic: () => X6,
        inOutExpo: () => k6,
        inOutQuad: () => x6,
        inOutQuart: () => C6,
        inOutQuint: () => O6,
        inOutSine: () => R6,
        inQuad: () => b6,
        inQuart: () => A6,
        inQuint: () => w6,
        inSine: () => D6,
        outBack: () => H6,
        outBounce: () => G6,
        outCirc: () => B6,
        outCubic: () => T6,
        outElastic: () => W6,
        outExpo: () => L6,
        outQuad: () => S6,
        outQuart: () => P6,
        outQuint: () => M6,
        outSine: () => F6,
        swingFrom: () => K6,
        swingFromTo: () => $6,
        swingTo: () => Y6
    });

    function b6(e) {
        return Math.pow(e, 2)
    }

    function S6(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function x6(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function _6(e) {
        return Math.pow(e, 3)
    }

    function T6(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function I6(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function A6(e) {
        return Math.pow(e, 4)
    }

    function P6(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function C6(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function w6(e) {
        return Math.pow(e, 5)
    }

    function M6(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function O6(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function D6(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function F6(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function R6(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function q6(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function L6(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function k6(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function N6(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function B6(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function V6(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function G6(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function z6(e) {
        let t = jt;
        return e * e * ((t + 1) * e - t)
    }

    function H6(e) {
        let t = jt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function j6(e) {
        let t = jt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function U6(e) {
        let t = jt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function W6(e) {
        let t = jt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function X6(e) {
        let t = jt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function $6(e) {
        let t = jt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function K6(e) {
        let t = jt;
        return e * e * ((t + 1) * e - t)
    }

    function Y6(e) {
        let t = jt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Q6(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Z6(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var fi, jt, g6, v6, y6, E6, Hu = pe(() => {
        "use strict";
        fi = le(zu()), jt = 1.70158, g6 = (0, fi.default)(.25, .1, .25, 1), v6 = (0, fi.default)(.42, 0, 1, 1), y6 = (0, fi.default)(0, 0, .58, 1), E6 = (0, fi.default)(.42, 0, .58, 1)
    });
    var d_ = {};
    Ge(d_, {
        applyEasing: () => e$,
        createBezierEasing: () => J6,
        optimizeFloat: () => di
    });

    function di(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function J6(e) {
        return (0, p_.default)(...e)
    }

    function e$(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : di(r ? t > 0 ? r(t) : t : t > 0 && e && pi[e] ? pi[e](t) : t)
    }
    var p_, ju = pe(() => {
        "use strict";
        Hu();
        p_ = le(zu())
    });
    var v_ = {};
    Ge(v_, {
        createElementState: () => g_,
        ixElements: () => d$,
        mergeActionState: () => Uu
    });

    function g_(e, t, r, n, i) {
        let a = r === t$ ? (0, an.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, an.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: a,
            refType: r
        })
    }

    function Uu(e, t, r, n, i) {
        let a = g$(i);
        return (0, an.mergeIn)(e, [t, p$, r], n, a)
    }

    function g$(e) {
        let {
            config: t
        } = e;
        return m$.reduce((r, n) => {
            let i = n[0],
                a = n[1],
                s = t[i],
                o = t[a];
            return s != null && o != null && (r[a] = o), r
        }, {})
    }
    var an, yoe, t$, Eoe, r$, n$, i$, a$, s$, o$, l$, u$, h$, c$, f$, m_, p$, d$, m$, y_ = pe(() => {
        "use strict";
        an = le(nn());
        Ye();
        ({
            HTML_ELEMENT: yoe,
            PLAIN_OBJECT: t$,
            ABSTRACT_NODE: Eoe,
            CONFIG_X_VALUE: r$,
            CONFIG_Y_VALUE: n$,
            CONFIG_Z_VALUE: i$,
            CONFIG_VALUE: a$,
            CONFIG_X_UNIT: s$,
            CONFIG_Y_UNIT: o$,
            CONFIG_Z_UNIT: l$,
            CONFIG_UNIT: u$
        } = Ne), {
            IX2_SESSION_STOPPED: h$,
            IX2_INSTANCE_ADDED: c$,
            IX2_ELEMENT_STATE_CHANGED: f$
        } = De, m_ = {}, p$ = "refState", d$ = (e = m_, t = {}) => {
            switch (t.type) {
                case h$:
                    return m_;
                case c$:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: a,
                            refType: s
                        } = t.payload,
                        {
                            actionTypeId: o
                        } = a,
                        l = e;
                        return (0, an.getIn)(l, [r, n]) !== n && (l = g_(l, n, s, r, a)),
                        Uu(l, r, o, i, a)
                    }
                case f$:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: a
                        } = t.payload;
                        return Uu(e, r, n, i, a)
                    }
                default:
                    return e
            }
        };
        m$ = [
            [r$, s$],
            [n$, o$],
            [i$, l$],
            [a$, u$]
        ]
    });
    var E_ = E(qe => {
        "use strict";
        Object.defineProperty(qe, "__esModule", {
            value: !0
        });
        qe.renderPlugin = qe.getPluginOrigin = qe.getPluginDuration = qe.getPluginDestination = qe.getPluginConfig = qe.createPluginInstance = qe.clearPlugin = void 0;
        var v$ = e => e.value;
        qe.getPluginConfig = v$;
        var y$ = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        qe.getPluginDuration = y$;
        var E$ = e => e || {
            value: 0
        };
        qe.getPluginOrigin = E$;
        var b$ = e => ({
            value: e.value
        });
        qe.getPluginDestination = b$;
        var S$ = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        qe.createPluginInstance = S$;
        var x$ = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        qe.renderPlugin = x$;
        var _$ = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        qe.clearPlugin = _$
    });
    var S_ = E(Le => {
        "use strict";
        Object.defineProperty(Le, "__esModule", {
            value: !0
        });
        Le.renderPlugin = Le.getPluginOrigin = Le.getPluginDuration = Le.getPluginDestination = Le.getPluginConfig = Le.createPluginInstance = Le.clearPlugin = void 0;
        var T$ = e => document.querySelector(`[data-w-id="${e}"]`),
            I$ = () => window.Webflow.require("spline"),
            A$ = (e, t) => e.filter(r => !t.includes(r)),
            P$ = (e, t) => e.value[t];
        Le.getPluginConfig = P$;
        var C$ = () => null;
        Le.getPluginDuration = C$;
        var b_ = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            w$ = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let a = Object.keys(e),
                        s = A$(n, a);
                    return s.length ? s.reduce((l, c) => (l[c] = b_[c], l), e) : e
                }
                return n.reduce((a, s) => (a[s] = b_[s], a), {})
            };
        Le.getPluginOrigin = w$;
        var M$ = e => e.value;
        Le.getPluginDestination = M$;
        var O$ = (e, t) => {
            var r, n;
            let i = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return i ? T$(i) : null
        };
        Le.createPluginInstance = O$;
        var D$ = (e, t, r) => {
            let n = I$(),
                i = n.getInstance(e),
                a = r.config.target.objectId,
                s = o => {
                    if (!o) throw new Error("Invalid spline app passed to renderSpline");
                    let l = a && o.findObjectById(a);
                    if (!l) return;
                    let {
                        PLUGIN_SPLINE: c
                    } = t;
                    c.positionX != null && (l.position.x = c.positionX), c.positionY != null && (l.position.y = c.positionY), c.positionZ != null && (l.position.z = c.positionZ), c.rotationX != null && (l.rotation.x = c.rotationX), c.rotationY != null && (l.rotation.y = c.rotationY), c.rotationZ != null && (l.rotation.z = c.rotationZ), c.scaleX != null && (l.scale.x = c.scaleX), c.scaleY != null && (l.scale.y = c.scaleY), c.scaleZ != null && (l.scale.z = c.scaleZ)
                };
            i ? s(i.spline) : n.setLoadHandler(e, s)
        };
        Le.renderPlugin = D$;
        var F$ = () => null;
        Le.clearPlugin = F$
    });
    var __ = E(Fe => {
        "use strict";
        Object.defineProperty(Fe, "__esModule", {
            value: !0
        });
        Fe.getPluginOrigin = Fe.getPluginDuration = Fe.getPluginDestination = Fe.getPluginConfig = Fe.createPluginInstance = Fe.clearPlugin = void 0;
        Fe.normalizeColor = x_;
        Fe.renderPlugin = void 0;

        function x_(e) {
            let t, r, n, i = 1,
                a = e.replace(/\s/g, "").toLowerCase();
            if (a.startsWith("#")) {
                let s = a.substring(1);
                s.length === 3 ? (t = parseInt(s[0] + s[0], 16), r = parseInt(s[1] + s[1], 16), n = parseInt(s[2] + s[2], 16)) : s.length === 6 && (t = parseInt(s.substring(0, 2), 16), r = parseInt(s.substring(2, 4), 16), n = parseInt(s.substring(4, 6), 16))
            } else if (a.startsWith("rgba")) {
                let s = a.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10), i = parseFloat(s[3])
            } else if (a.startsWith("rgb")) {
                let s = a.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10)
            } else if (a.startsWith("hsla")) {
                let s = a.match(/hsla\(([^)]+)\)/)[1].split(","),
                    o = parseFloat(s[0]),
                    l = parseFloat(s[1].replace("%", "")) / 100,
                    c = parseFloat(s[2].replace("%", "")) / 100;
                i = parseFloat(s[3]);
                let u = (1 - Math.abs(2 * c - 1)) * l,
                    f = u * (1 - Math.abs(o / 60 % 2 - 1)),
                    g = c - u / 2,
                    d, p, m;
                o >= 0 && o < 60 ? (d = u, p = f, m = 0) : o >= 60 && o < 120 ? (d = f, p = u, m = 0) : o >= 120 && o < 180 ? (d = 0, p = u, m = f) : o >= 180 && o < 240 ? (d = 0, p = f, m = u) : o >= 240 && o < 300 ? (d = f, p = 0, m = u) : (d = u, p = 0, m = f), t = Math.round((d + g) * 255), r = Math.round((p + g) * 255), n = Math.round((m + g) * 255)
            } else if (a.startsWith("hsl")) {
                let s = a.match(/hsl\(([^)]+)\)/)[1].split(","),
                    o = parseFloat(s[0]),
                    l = parseFloat(s[1].replace("%", "")) / 100,
                    c = parseFloat(s[2].replace("%", "")) / 100,
                    u = (1 - Math.abs(2 * c - 1)) * l,
                    f = u * (1 - Math.abs(o / 60 % 2 - 1)),
                    g = c - u / 2,
                    d, p, m;
                o >= 0 && o < 60 ? (d = u, p = f, m = 0) : o >= 60 && o < 120 ? (d = f, p = u, m = 0) : o >= 120 && o < 180 ? (d = 0, p = u, m = f) : o >= 180 && o < 240 ? (d = 0, p = f, m = u) : o >= 240 && o < 300 ? (d = f, p = 0, m = u) : (d = u, p = 0, m = f), t = Math.round((d + g) * 255), r = Math.round((p + g) * 255), n = Math.round((m + g) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`, {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
        var R$ = (e, t) => e.value[t];
        Fe.getPluginConfig = R$;
        var q$ = () => null;
        Fe.getPluginDuration = q$;
        var L$ = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return x_(i)
        };
        Fe.getPluginOrigin = L$;
        var k$ = e => e.value;
        Fe.getPluginDestination = k$;
        var N$ = () => null;
        Fe.createPluginInstance = N$;
        var B$ = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: a
                } = t,
                {
                    size: s,
                    red: o,
                    green: l,
                    blue: c,
                    alpha: u
                } = a,
                f;
            s != null && (f = s + i), o != null && c != null && l != null && u != null && (f = `rgba(${o}, ${l}, ${c}, ${u})`), f != null && document.documentElement.style.setProperty(n, f)
        };
        Fe.renderPlugin = B$;
        var V$ = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        Fe.clearPlugin = V$
    });
    var T_ = E(ss => {
        "use strict";
        var Xu = Ka().default;
        Object.defineProperty(ss, "__esModule", {
            value: !0
        });
        ss.pluginMethodMap = void 0;
        var Wu = (Ye(), ht(Mx)),
            G$ = Xu(E_()),
            z$ = Xu(S_()),
            H$ = Xu(__()),
            _oe = ss.pluginMethodMap = new Map([
                [Wu.ActionTypeConsts.PLUGIN_LOTTIE, { ...G$
                }],
                [Wu.ActionTypeConsts.PLUGIN_SPLINE, { ...z$
                }],
                [Wu.ActionTypeConsts.PLUGIN_VARIABLE, { ...H$
                }]
            ])
    });
    var I_ = {};
    Ge(I_, {
        clearPlugin: () => Ju,
        createPluginInstance: () => U$,
        getPluginConfig: () => Ku,
        getPluginDestination: () => Qu,
        getPluginDuration: () => j$,
        getPluginOrigin: () => Yu,
        isPluginType: () => Ir,
        renderPlugin: () => Zu
    });

    function Ir(e) {
        return $u.pluginMethodMap.has(e)
    }
    var $u, Ar, Ku, Yu, j$, Qu, U$, Zu, Ju, eh = pe(() => {
        "use strict";
        ns();
        $u = le(T_());
        Ar = e => t => {
            if (!bt) return () => null;
            let r = $u.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, Ku = Ar("getPluginConfig"), Yu = Ar("getPluginOrigin"), j$ = Ar("getPluginDuration"), Qu = Ar("getPluginDestination"), U$ = Ar("createPluginInstance"), Zu = Ar("renderPlugin"), Ju = Ar("clearPlugin")
    });
    var P_ = E((Aoe, A_) => {
        function W$(e, t) {
            return e == null || e !== e ? t : e
        }
        A_.exports = W$
    });
    var w_ = E((Poe, C_) => {
        function X$(e, t, r, n) {
            var i = -1,
                a = e == null ? 0 : e.length;
            for (n && a && (r = e[++i]); ++i < a;) r = t(r, e[i], i, e);
            return r
        }
        C_.exports = X$
    });
    var O_ = E((Coe, M_) => {
        function $$(e) {
            return function(t, r, n) {
                for (var i = -1, a = Object(t), s = n(t), o = s.length; o--;) {
                    var l = s[e ? o : ++i];
                    if (r(a[l], l, a) === !1) break
                }
                return t
            }
        }
        M_.exports = $$
    });
    var F_ = E((woe, D_) => {
        var K$ = O_(),
            Y$ = K$();
        D_.exports = Y$
    });
    var th = E((Moe, R_) => {
        var Q$ = F_(),
            Z$ = Mn();

        function J$(e, t) {
            return e && Q$(e, t, Z$)
        }
        R_.exports = J$
    });
    var L_ = E((Ooe, q_) => {
        var e8 = pr();

        function t8(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!e8(r)) return e(r, n);
                for (var i = r.length, a = t ? i : -1, s = Object(r);
                    (t ? a-- : ++a < i) && n(s[a], a, s) !== !1;);
                return r
            }
        }
        q_.exports = t8
    });
    var rh = E((Doe, k_) => {
        var r8 = th(),
            n8 = L_(),
            i8 = n8(r8);
        k_.exports = i8
    });
    var B_ = E((Foe, N_) => {
        function a8(e, t, r, n, i) {
            return i(e, function(a, s, o) {
                r = n ? (n = !1, a) : t(r, a, s, o)
            }), r
        }
        N_.exports = a8
    });
    var G_ = E((Roe, V_) => {
        var s8 = w_(),
            o8 = rh(),
            l8 = Zt(),
            u8 = B_(),
            h8 = Re();

        function c8(e, t, r) {
            var n = h8(e) ? s8 : u8,
                i = arguments.length < 3;
            return n(e, l8(t, 4), r, i, o8)
        }
        V_.exports = c8
    });
    var H_ = E((qoe, z_) => {
        var f8 = zs(),
            p8 = Zt(),
            d8 = go(),
            m8 = Math.max,
            g8 = Math.min;

        function v8(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = d8(r), i = r < 0 ? m8(n + i, 0) : g8(i, n - 1)), f8(e, p8(t, 3), i, !0)
        }
        z_.exports = v8
    });
    var U_ = E((Loe, j_) => {
        var y8 = Bu(),
            E8 = H_(),
            b8 = y8(E8);
        j_.exports = b8
    });

    function W_(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function x8(e, t) {
        if (W_(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!S8.call(t, r[i]) || !W_(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var S8, nh, X_ = pe(() => {
        "use strict";
        S8 = Object.prototype.hasOwnProperty;
        nh = x8
    });
    var hT = {};
    Ge(hT, {
        cleanupHTMLElement: () => EK,
        clearAllStyles: () => yK,
        clearObjectCache: () => B8,
        getActionListProgress: () => SK,
        getAffectedElements: () => lh,
        getComputedStyle: () => X8,
        getDestinationValues: () => eK,
        getElementId: () => H8,
        getInstanceId: () => G8,
        getInstanceOrigin: () => Y8,
        getItemConfigByKey: () => J8,
        getMaxDurationItemIndex: () => uT,
        getNamespacedParameterId: () => TK,
        getRenderType: () => sT,
        getStyleProp: () => tK,
        mediaQueriesEqual: () => AK,
        observeStore: () => W8,
        reduceListToGroup: () => xK,
        reifyState: () => j8,
        renderHTMLElement: () => rK,
        shallowEqual: () => nh,
        shouldAllowMediaQuery: () => IK,
        shouldNamespaceEventParameter: () => _K,
        stringifyTarget: () => PK
    });

    function B8() {
        os.clear()
    }

    function G8() {
        return "i" + V8++
    }

    function H8(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + z8++
    }

    function j8({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, cs.default)(e, (s, o) => {
                let {
                    eventTypeId: l
                } = o;
                return s[l] || (s[l] = {}), s[l][o.id] = o, s
            }, {}),
            i = r && r.mediaQueries,
            a = [];
        return i ? a = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: a
            }
        }
    }

    function W8({
        store: e,
        select: t,
        onChange: r,
        comparator: n = U8
    }) {
        let {
            getState: i,
            subscribe: a
        } = e, s = a(l), o = t(i());

        function l() {
            let c = t(i());
            if (c == null) {
                s();
                return
            }
            n(c, o) || (o = c, r(o, e))
        }
        return s
    }

    function Y_(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: a,
                appliesTo: s,
                useEventTarget: o
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: a,
                appliesTo: s,
                useEventTarget: o
            }
        }
        return {}
    }

    function lh({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: a
        } = e;
        if (Array.isArray(a) && a.length > 0) return a.reduce((R, O) => R.concat(lh({
            config: {
                target: O
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: s,
            getQuerySelector: o,
            queryDocument: l,
            getChildElements: c,
            getSiblingElements: u,
            matchSelector: f,
            elementContains: g,
            isSiblingNode: d
        } = i, {
            target: p
        } = e;
        if (!p) return [];
        let {
            id: m,
            objectId: h,
            selector: v,
            selectorGuids: y,
            appliesTo: b,
            useEventTarget: S
        } = Y_(p);
        if (h) return [os.has(h) ? os.get(h) : os.set(h, {}).get(h)];
        if (b === Ru.PAGE) {
            let R = s(m);
            return R ? [R] : []
        }
        let T = (t ? .action ? .config ? .affectedElements ? ? {})[m || v] || {},
            _ = !!(T.id || T.selector),
            P, F, w, C = t && o(Y_(t.target));
        if (_ ? (P = T.limitAffectedElements, F = C, w = o(T)) : F = w = o({
                id: m,
                selector: v,
                selectorGuids: y
            }), t && S) {
            let R = r && (w || S === !0) ? [r] : l(C);
            if (w) {
                if (S === L8) return l(w).filter(O => R.some(M => g(O, M)));
                if (S === $_) return l(w).filter(O => R.some(M => g(M, O)));
                if (S === K_) return l(w).filter(O => R.some(M => d(M, O)))
            }
            return R
        }
        return F == null || w == null ? [] : bt && n ? l(w).filter(R => n.contains(R)) : P === $_ ? l(F, w) : P === q8 ? c(l(F)).filter(f(w)) : P === K_ ? u(l(F)).filter(f(w)) : l(w)
    }

    function X8({
        element: e,
        actionItem: t
    }) {
        if (!bt) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case hn:
            case cn:
            case fn:
            case pn:
            case ps:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function Y8(e, t = {}, r = {}, n, i) {
        let {
            getStyle: a
        } = i, {
            actionTypeId: s
        } = n;
        if (Ir(s)) return Yu(s)(t[s], n);
        switch (n.actionTypeId) {
            case on:
            case ln:
            case un:
            case yi:
                return t[n.actionTypeId] || uh[n.actionTypeId];
            case Ei:
                return $8(t[n.actionTypeId], n.config.filters);
            case bi:
                return K8(t[n.actionTypeId], n.config.fontVariations);
            case nT:
                return {
                    value: (0, Ut.default)(parseFloat(a(e, us)), 1)
                };
            case hn:
                {
                    let o = a(e, Dt),
                        l = a(e, Ft),
                        c, u;
                    return n.config.widthUnit === cr ? c = Q_.test(o) ? parseFloat(o) : parseFloat(r.width) : c = (0, Ut.default)(parseFloat(o), parseFloat(r.width)),
                    n.config.heightUnit === cr ? u = Q_.test(l) ? parseFloat(l) : parseFloat(r.height) : u = (0, Ut.default)(parseFloat(l), parseFloat(r.height)),
                    {
                        widthValue: c,
                        heightValue: u
                    }
                }
            case cn:
            case fn:
            case pn:
                return mK({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: a
                });
            case ps:
                return {
                    value: (0, Ut.default)(a(e, hs), r.display)
                };
            case N8:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function eK({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (Ir(t.actionTypeId)) return Qu(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case on:
            case ln:
            case un:
            case yi:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: a
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: a
                    }
                }
            case hn:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: a
                    } = r,
                    {
                        widthUnit: s,
                        heightUnit: o
                    } = t.config,
                    {
                        widthValue: l,
                        heightValue: c
                    } = t.config;
                    if (!bt) return {
                        widthValue: l,
                        heightValue: c
                    };
                    if (s === cr) {
                        let u = n(e, Dt);
                        i(e, Dt, ""), l = a(e, "offsetWidth"), i(e, Dt, u)
                    }
                    if (o === cr) {
                        let u = n(e, Ft);
                        i(e, Ft, ""), c = a(e, "offsetHeight"), i(e, Ft, u)
                    }
                    return {
                        widthValue: l,
                        heightValue: c
                    }
                }
            case cn:
            case fn:
            case pn:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: a,
                        aValue: s
                    } = t.config;
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: a,
                        aValue: s
                    }
                }
            case Ei:
                return t.config.filters.reduce(Q8, {});
            case bi:
                return t.config.fontVariations.reduce(Z8, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function sT(e) {
        if (/^TRANSFORM_/.test(e)) return tT;
        if (/^STYLE_/.test(e)) return sh;
        if (/^GENERAL_/.test(e)) return ah;
        if (/^PLUGIN_/.test(e)) return rT
    }

    function tK(e, t) {
        return e === sh ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function rK(e, t, r, n, i, a, s, o, l) {
        switch (o) {
            case tT:
                return oK(e, t, r, i, s);
            case sh:
                return gK(e, t, r, i, a, s);
            case ah:
                return vK(e, i, s);
            case rT:
                {
                    let {
                        actionTypeId: c
                    } = i;
                    if (Ir(c)) return Zu(c)(l, t, i)
                }
        }
    }

    function oK(e, t, r, n, i) {
        let a = sK.map(o => {
                let l = uh[o],
                    {
                        xValue: c = l.xValue,
                        yValue: u = l.yValue,
                        zValue: f = l.zValue,
                        xUnit: g = "",
                        yUnit: d = "",
                        zUnit: p = ""
                    } = t[o] || {};
                switch (o) {
                    case on:
                        return `${I8}(${c}${g}, ${u}${d}, ${f}${p})`;
                    case ln:
                        return `${A8}(${c}${g}, ${u}${d}, ${f}${p})`;
                    case un:
                        return `${P8}(${c}${g}) ${C8}(${u}${d}) ${w8}(${f}${p})`;
                    case yi:
                        return `${M8}(${c}${g}, ${u}${d})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: s
            } = i;
        Pr(e, hr, i), s(e, hr, a), hK(n, r) && s(e, rs, O8)
    }

    function lK(e, t, r, n) {
        let i = (0, cs.default)(t, (s, o, l) => `${s} ${l}(${o}${aK(l,r)})`, ""),
            {
                setStyle: a
            } = n;
        Pr(e, mi, n), a(e, mi, i)
    }

    function uK(e, t, r, n) {
        let i = (0, cs.default)(t, (s, o, l) => (s.push(`"${l}" ${o}`), s), []).join(", "),
            {
                setStyle: a
            } = n;
        Pr(e, gi, n), a(e, gi, i)
    }

    function hK({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === on && n !== void 0 || e === ln && n !== void 0 || e === un && (t !== void 0 || r !== void 0)
    }

    function dK(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function mK({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = oh[t],
            a = n(e, i),
            s = fK.test(a) ? a : r[i],
            o = dK(pK, s).split(vi);
        return {
            rValue: (0, Ut.default)(parseInt(o[0], 10), 255),
            gValue: (0, Ut.default)(parseInt(o[1], 10), 255),
            bValue: (0, Ut.default)(parseInt(o[2], 10), 255),
            aValue: (0, Ut.default)(parseFloat(o[3]), 1)
        }
    }

    function gK(e, t, r, n, i, a) {
        let {
            setStyle: s
        } = a;
        switch (n.actionTypeId) {
            case hn:
                {
                    let {
                        widthUnit: o = "",
                        heightUnit: l = ""
                    } = n.config,
                    {
                        widthValue: c,
                        heightValue: u
                    } = r;c !== void 0 && (o === cr && (o = "px"), Pr(e, Dt, a), s(e, Dt, c + o)),
                    u !== void 0 && (l === cr && (l = "px"), Pr(e, Ft, a), s(e, Ft, u + l));
                    break
                }
            case Ei:
                {
                    lK(e, r, n.config, a);
                    break
                }
            case bi:
                {
                    uK(e, r, n.config, a);
                    break
                }
            case cn:
            case fn:
            case pn:
                {
                    let o = oh[n.actionTypeId],
                        l = Math.round(r.rValue),
                        c = Math.round(r.gValue),
                        u = Math.round(r.bValue),
                        f = r.aValue;Pr(e, o, a),
                    s(e, o, f >= 1 ? `rgb(${l},${c},${u})` : `rgba(${l},${c},${u},${f})`);
                    break
                }
            default:
                {
                    let {
                        unit: o = ""
                    } = n.config;Pr(e, i, a),
                    s(e, i, r.value + o);
                    break
                }
        }
    }

    function vK(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case ps:
                {
                    let {
                        value: i
                    } = t.config;i === D8 && bt ? n(e, hs, Gu) : n(e, hs, i);
                    return
                }
        }
    }

    function Pr(e, t, r) {
        if (!bt) return;
        let n = aT[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: a
        } = r, s = i(e, sn);
        if (!s) {
            a(e, sn, n);
            return
        }
        let o = s.split(vi).map(iT);
        o.indexOf(n) === -1 && a(e, sn, o.concat(n).join(vi))
    }

    function oT(e, t, r) {
        if (!bt) return;
        let n = aT[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: a
        } = r, s = i(e, sn);
        !s || s.indexOf(n) === -1 || a(e, sn, s.split(vi).map(iT).filter(o => o !== n).join(vi))
    }

    function yK({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(a => {
            let s = n[a],
                {
                    config: o
                } = s.action,
                {
                    actionListId: l
                } = o,
                c = i[l];
            c && Z_({
                actionList: c,
                event: s,
                elementApi: t
            })
        }), Object.keys(i).forEach(a => {
            Z_({
                actionList: i[a],
                elementApi: t
            })
        })
    }

    function Z_({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(a => {
            J_({
                actionGroup: a,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(a => {
            let {
                continuousActionGroups: s
            } = a;
            s.forEach(o => {
                J_({
                    actionGroup: o,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function J_({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: a,
                config: s
            } = i, o;
            Ir(a) ? o = l => Ju(a)(l, i) : o = lT({
                effect: bK,
                actionTypeId: a,
                elementApi: r
            }), lh({
                config: s,
                event: t,
                elementApi: r
            }).forEach(o)
        })
    }

    function EK(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: a
        } = t;
        if (a === hn) {
            let {
                config: s
            } = t;
            s.widthUnit === cr && n(e, Dt, ""), s.heightUnit === cr && n(e, Ft, "")
        }
        i(e, sn) && lT({
            effect: oT,
            actionTypeId: a,
            elementApi: r
        })(e)
    }

    function bK(e, t, r) {
        let {
            setStyle: n
        } = r;
        oT(e, t, r), n(e, t, ""), t === hr && n(e, rs, "")
    }

    function uT(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: a
            } = n, s = a.delay + a.duration;
            s >= t && (t = s, r = i)
        }), r
    }

    function SK(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: a = 0
        } = t, s = 0, o = 0;
        return r.forEach((l, c) => {
            if (n && c === 0) return;
            let {
                actionItems: u
            } = l, f = u[uT(u)], {
                config: g,
                actionTypeId: d
            } = f;
            i.id === f.id && (o = s + a);
            let p = sT(d) === ah ? 0 : g.duration;
            s += g.delay + p
        }), s > 0 ? di(o / s) : 0
    }

    function xK({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, a = [], s = o => (a.push((0, fs.mergeIn)(o, ["config"], {
            delay: 0,
            duration: 0
        })), o.id === t);
        return n && n.some(({
            actionItems: o
        }) => o.some(s)), i && i.some(o => {
            let {
                continuousActionGroups: l
            } = o;
            return l.some(({
                actionItems: c
            }) => c.some(s))
        }), (0, fs.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: a
                }]
            }
        })
    }

    function _K(e, {
        basedOn: t
    }) {
        return e === Et.SCROLLING_IN_VIEW && (t === Ot.ELEMENT || t == null) || e === Et.MOUSE_MOVE && t === Ot.ELEMENT
    }

    function TK(e, t) {
        return e + k8 + t
    }

    function IK(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function AK(e, t) {
        return nh(e && e.sort(), t && t.sort())
    }

    function PK(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + ih + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + ih + r + ih + n
    }
    var Ut, cs, ls, fs, _8, T8, I8, A8, P8, C8, w8, M8, O8, D8, us, mi, gi, Dt, Ft, eT, F8, R8, $_, q8, K_, L8, hs, sn, cr, vi, k8, ih, tT, ah, sh, rT, on, ln, un, yi, nT, Ei, bi, hn, cn, fn, pn, ps, N8, iT, oh, aT, os, V8, z8, U8, Q_, $8, K8, Q8, Z8, J8, uh, nK, iK, aK, sK, cK, fK, pK, lT, cT = pe(() => {
        "use strict";
        Ut = le(P_()), cs = le(G_()), ls = le(U_()), fs = le(nn());
        Ye();
        X_();
        ju();
        eh();
        ns();
        ({
            BACKGROUND: _8,
            TRANSFORM: T8,
            TRANSLATE_3D: I8,
            SCALE_3D: A8,
            ROTATE_X: P8,
            ROTATE_Y: C8,
            ROTATE_Z: w8,
            SKEW: M8,
            PRESERVE_3D: O8,
            FLEX: D8,
            OPACITY: us,
            FILTER: mi,
            FONT_VARIATION_SETTINGS: gi,
            WIDTH: Dt,
            HEIGHT: Ft,
            BACKGROUND_COLOR: eT,
            BORDER_COLOR: F8,
            COLOR: R8,
            CHILDREN: $_,
            IMMEDIATE_CHILDREN: q8,
            SIBLINGS: K_,
            PARENT: L8,
            DISPLAY: hs,
            WILL_CHANGE: sn,
            AUTO: cr,
            COMMA_DELIMITER: vi,
            COLON_DELIMITER: k8,
            BAR_DELIMITER: ih,
            RENDER_TRANSFORM: tT,
            RENDER_GENERAL: ah,
            RENDER_STYLE: sh,
            RENDER_PLUGIN: rT
        } = Ne), {
            TRANSFORM_MOVE: on,
            TRANSFORM_SCALE: ln,
            TRANSFORM_ROTATE: un,
            TRANSFORM_SKEW: yi,
            STYLE_OPACITY: nT,
            STYLE_FILTER: Ei,
            STYLE_FONT_VARIATION: bi,
            STYLE_SIZE: hn,
            STYLE_BACKGROUND_COLOR: cn,
            STYLE_BORDER: fn,
            STYLE_TEXT_COLOR: pn,
            GENERAL_DISPLAY: ps,
            OBJECT_VALUE: N8
        } = ot, iT = e => e.trim(), oh = Object.freeze({
            [cn]: eT,
            [fn]: F8,
            [pn]: R8
        }), aT = Object.freeze({
            [hr]: T8,
            [eT]: _8,
            [us]: us,
            [mi]: mi,
            [Dt]: Dt,
            [Ft]: Ft,
            [gi]: gi
        }), os = new Map;
        V8 = 1;
        z8 = 1;
        U8 = (e, t) => e === t;
        Q_ = /px/, $8 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = nK[n.type]), r), e || {}), K8 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = iK[n.type] || n.defaultValue || 0), r), e || {});
        Q8 = (e, t) => (t && (e[t.type] = t.value || 0), e), Z8 = (e, t) => (t && (e[t.type] = t.value || 0), e), J8 = (e, t, r) => {
            if (Ir(e)) return Ku(e)(r, t);
            switch (e) {
                case Ei:
                    {
                        let n = (0, ls.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case bi:
                    {
                        let n = (0, ls.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        uh = {
            [on]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [ln]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [un]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [yi]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, nK = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), iK = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), aK = (e, t) => {
            let r = (0, ls.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, sK = Object.keys(uh);
        cK = "\\(([^)]+)\\)", fK = /^rgb/, pK = RegExp(`rgba?${cK}`);
        lT = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case on:
                case ln:
                case un:
                case yi:
                    e(n, hr, r);
                    break;
                case Ei:
                    e(n, mi, r);
                    break;
                case bi:
                    e(n, gi, r);
                    break;
                case nT:
                    e(n, us, r);
                    break;
                case hn:
                    e(n, Dt, r), e(n, Ft, r);
                    break;
                case cn:
                case fn:
                case pn:
                    e(n, oh[t], r);
                    break;
                case ps:
                    e(n, hs, r);
                    break
            }
        }
    });
    var Cr = E(We => {
        "use strict";
        var dn = Ka().default;
        Object.defineProperty(We, "__esModule", {
            value: !0
        });
        We.IX2VanillaUtils = We.IX2VanillaPlugins = We.IX2ElementsReducer = We.IX2Easings = We.IX2EasingUtils = We.IX2BrowserSupport = void 0;
        var CK = dn((ns(), ht(o_)));
        We.IX2BrowserSupport = CK;
        var wK = dn((Hu(), ht(pi)));
        We.IX2Easings = wK;
        var MK = dn((ju(), ht(d_)));
        We.IX2EasingUtils = MK;
        var OK = dn((y_(), ht(v_)));
        We.IX2ElementsReducer = OK;
        var DK = dn((eh(), ht(I_)));
        We.IX2VanillaPlugins = DK;
        var FK = dn((cT(), ht(hT)));
        We.IX2VanillaUtils = FK
    });
    var ms, Wt, RK, qK, LK, kK, NK, BK, ds, fT, VK, GK, hh, zK, HK, jK, UK, pT, dT = pe(() => {
        "use strict";
        Ye();
        ms = le(Cr()), Wt = le(nn()), {
            IX2_RAW_DATA_IMPORTED: RK,
            IX2_SESSION_STOPPED: qK,
            IX2_INSTANCE_ADDED: LK,
            IX2_INSTANCE_STARTED: kK,
            IX2_INSTANCE_REMOVED: NK,
            IX2_ANIMATION_FRAME_CHANGED: BK
        } = De, {
            optimizeFloat: ds,
            applyEasing: fT,
            createBezierEasing: VK
        } = ms.IX2EasingUtils, {
            RENDER_GENERAL: GK
        } = Ne, {
            getItemConfigByKey: hh,
            getRenderType: zK,
            getStyleProp: HK
        } = ms.IX2VanillaUtils, jK = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: a,
                smoothing: s,
                restingValue: o,
                actionTypeId: l,
                customEasingFn: c,
                skipMotion: u,
                skipToValue: f
            } = e, {
                parameters: g
            } = t.payload, d = Math.max(1 - s, .01), p = g[n];
            p == null && (d = 1, p = o);
            let m = Math.max(p, 0) || 0,
                h = ds(m - r),
                v = u ? f : ds(r + h * d),
                y = v * 100;
            if (v === r && e.current) return e;
            let b, S, x, T;
            for (let P = 0, {
                    length: F
                } = i; P < F; P++) {
                let {
                    keyframe: w,
                    actionItems: C
                } = i[P];
                if (P === 0 && (b = C[0]), y >= w) {
                    b = C[0];
                    let R = i[P + 1],
                        O = R && y !== w;
                    S = O ? R.actionItems[0] : null, O && (x = w / 100, T = (R.keyframe - w) / 100)
                }
            }
            let _ = {};
            if (b && !S)
                for (let P = 0, {
                        length: F
                    } = a; P < F; P++) {
                    let w = a[P];
                    _[w] = hh(l, w, b.config)
                } else if (b && S && x !== void 0 && T !== void 0) {
                    let P = (v - x) / T,
                        F = b.config.easing,
                        w = fT(F, P, c);
                    for (let C = 0, {
                            length: R
                        } = a; C < R; C++) {
                        let O = a[C],
                            M = hh(l, O, b.config),
                            $ = (hh(l, O, S.config) - M) * w + M;
                        _[O] = $
                    }
                }
            return (0, Wt.merge)(e, {
                position: v,
                current: _
            })
        }, UK = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: a,
                renderType: s,
                verbose: o,
                actionItem: l,
                destination: c,
                destinationKeys: u,
                pluginDuration: f,
                instanceDelay: g,
                customEasingFn: d,
                skipMotion: p
            } = e, m = l.config.easing, {
                duration: h,
                delay: v
            } = l.config;
            f != null && (h = f), v = g ? ? v, s === GK ? h = 0 : (a || p) && (h = v = 0);
            let {
                now: y
            } = t.payload;
            if (r && n) {
                let b = y - (i + v);
                if (o) {
                    let P = y - i,
                        F = h + v,
                        w = ds(Math.min(Math.max(0, P / F), 1));
                    e = (0, Wt.set)(e, "verboseTimeElapsed", F * w)
                }
                if (b < 0) return e;
                let S = ds(Math.min(Math.max(0, b / h), 1)),
                    x = fT(m, S, d),
                    T = {},
                    _ = null;
                return u.length && (_ = u.reduce((P, F) => {
                    let w = c[F],
                        C = parseFloat(n[F]) || 0,
                        O = (parseFloat(w) - C) * x + C;
                    return P[F] = O, P
                }, {})), T.current = _, T.position = S, S === 1 && (T.active = !1, T.complete = !0), (0, Wt.merge)(e, T)
            }
            return e
        }, pT = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case RK:
                    return t.payload.ixInstances || Object.freeze({});
                case qK:
                    return Object.freeze({});
                case LK:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: a,
                            eventTarget: s,
                            eventStateKey: o,
                            actionListId: l,
                            groupIndex: c,
                            isCarrier: u,
                            origin: f,
                            destination: g,
                            immediate: d,
                            verbose: p,
                            continuous: m,
                            parameterId: h,
                            actionGroups: v,
                            smoothing: y,
                            restingValue: b,
                            pluginInstance: S,
                            pluginDuration: x,
                            instanceDelay: T,
                            skipMotion: _,
                            skipToValue: P
                        } = t.payload,
                        {
                            actionTypeId: F
                        } = i,
                        w = zK(F),
                        C = HK(w, F),
                        R = Object.keys(g).filter(M => g[M] != null && typeof g[M] != "string"),
                        {
                            easing: O
                        } = i.config;
                        return (0, Wt.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: f,
                            destination: g,
                            destinationKeys: R,
                            immediate: d,
                            verbose: p,
                            current: null,
                            actionItem: i,
                            actionTypeId: F,
                            eventId: a,
                            eventTarget: s,
                            eventStateKey: o,
                            actionListId: l,
                            groupIndex: c,
                            renderType: w,
                            isCarrier: u,
                            styleProp: C,
                            continuous: m,
                            parameterId: h,
                            actionGroups: v,
                            smoothing: y,
                            restingValue: b,
                            pluginInstance: S,
                            pluginDuration: x,
                            instanceDelay: T,
                            skipMotion: _,
                            skipToValue: P,
                            customEasingFn: Array.isArray(O) && O.length === 4 ? VK(O) : void 0
                        })
                    }
                case kK:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, Wt.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case NK:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: a
                            } = i;
                        for (let s = 0; s < a; s++) {
                            let o = i[s];
                            o !== r && (n[o] = e[o])
                        }
                        return n
                    }
                case BK:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let a = 0; a < i; a++) {
                            let s = n[a],
                                o = e[s],
                                l = o.continuous ? jK : UK;
                            r = (0, Wt.set)(r, s, l(o, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var WK, XK, $K, mT, gT = pe(() => {
        "use strict";
        Ye();
        ({
            IX2_RAW_DATA_IMPORTED: WK,
            IX2_SESSION_STOPPED: XK,
            IX2_PARAMETER_CHANGED: $K
        } = De), mT = (e = {}, t) => {
            switch (t.type) {
                case WK:
                    return t.payload.ixParameters || {};
                case XK:
                    return {};
                case $K:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var ET = {};
    Ge(ET, {
        default: () => YK
    });
    var vT, yT, KK, YK, bT = pe(() => {
        "use strict";
        vT = le(Fu());
        Dx();
        Jx();
        r_();
        yT = le(Cr());
        dT();
        gT();
        ({
            ixElements: KK
        } = yT.IX2ElementsReducer), YK = (0, vT.combineReducers)({
            ixData: Ox,
            ixRequest: Zx,
            ixSession: t_,
            ixElements: KK,
            ixInstances: pT,
            ixParameters: mT
        })
    });
    var xT = E((Joe, ST) => {
        var QK = Yt(),
            ZK = Re(),
            JK = qt(),
            e9 = "[object String]";

        function t9(e) {
            return typeof e == "string" || !ZK(e) && JK(e) && QK(e) == e9
        }
        ST.exports = t9
    });
    var TT = E((ele, _T) => {
        var r9 = mo(),
            n9 = r9("length");
        _T.exports = n9
    });
    var AT = E((tle, IT) => {
        var i9 = "\\ud800-\\udfff",
            a9 = "\\u0300-\\u036f",
            s9 = "\\ufe20-\\ufe2f",
            o9 = "\\u20d0-\\u20ff",
            l9 = a9 + s9 + o9,
            u9 = "\\ufe0e\\ufe0f",
            h9 = "\\u200d",
            c9 = RegExp("[" + h9 + i9 + l9 + u9 + "]");

        function f9(e) {
            return c9.test(e)
        }
        IT.exports = f9
    });
    var qT = E((rle, RT) => {
        var CT = "\\ud800-\\udfff",
            p9 = "\\u0300-\\u036f",
            d9 = "\\ufe20-\\ufe2f",
            m9 = "\\u20d0-\\u20ff",
            g9 = p9 + d9 + m9,
            v9 = "\\ufe0e\\ufe0f",
            y9 = "[" + CT + "]",
            ch = "[" + g9 + "]",
            fh = "\\ud83c[\\udffb-\\udfff]",
            E9 = "(?:" + ch + "|" + fh + ")",
            wT = "[^" + CT + "]",
            MT = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            OT = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            b9 = "\\u200d",
            DT = E9 + "?",
            FT = "[" + v9 + "]?",
            S9 = "(?:" + b9 + "(?:" + [wT, MT, OT].join("|") + ")" + FT + DT + ")*",
            x9 = FT + DT + S9,
            _9 = "(?:" + [wT + ch + "?", ch, MT, OT, y9].join("|") + ")",
            PT = RegExp(fh + "(?=" + fh + ")|" + _9 + x9, "g");

        function T9(e) {
            for (var t = PT.lastIndex = 0; PT.test(e);) ++t;
            return t
        }
        RT.exports = T9
    });
    var kT = E((nle, LT) => {
        var I9 = TT(),
            A9 = AT(),
            P9 = qT();

        function C9(e) {
            return A9(e) ? P9(e) : I9(e)
        }
        LT.exports = C9
    });
    var BT = E((ile, NT) => {
        var w9 = Vi(),
            M9 = Gi(),
            O9 = pr(),
            D9 = xT(),
            F9 = kT(),
            R9 = "[object Map]",
            q9 = "[object Set]";

        function L9(e) {
            if (e == null) return 0;
            if (O9(e)) return D9(e) ? F9(e) : e.length;
            var t = M9(e);
            return t == R9 || t == q9 ? e.size : w9(e).length
        }
        NT.exports = L9
    });
    var GT = E((ale, VT) => {
        var k9 = "Expected a function";

        function N9(e) {
            if (typeof e != "function") throw new TypeError(k9);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        VT.exports = N9
    });
    var ph = E((sle, zT) => {
        var B9 = Qt(),
            V9 = function() {
                try {
                    var e = B9(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        zT.exports = V9
    });
    var dh = E((ole, jT) => {
        var HT = ph();

        function G9(e, t, r) {
            t == "__proto__" && HT ? HT(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        jT.exports = G9
    });
    var WT = E((lle, UT) => {
        var z9 = dh(),
            H9 = Mi(),
            j9 = Object.prototype,
            U9 = j9.hasOwnProperty;

        function W9(e, t, r) {
            var n = e[t];
            (!(U9.call(e, t) && H9(n, r)) || r === void 0 && !(t in e)) && z9(e, t, r)
        }
        UT.exports = W9
    });
    var KT = E((ule, $T) => {
        var X9 = WT(),
            $9 = Dn(),
            K9 = Li(),
            XT = It(),
            Y9 = Vr();

        function Q9(e, t, r, n) {
            if (!XT(e)) return e;
            t = $9(t, e);
            for (var i = -1, a = t.length, s = a - 1, o = e; o != null && ++i < a;) {
                var l = Y9(t[i]),
                    c = r;
                if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
                if (i != s) {
                    var u = o[l];
                    c = n ? n(u, l, o) : void 0, c === void 0 && (c = XT(u) ? u : K9(t[i + 1]) ? [] : {})
                }
                X9(o, l, c), o = o[l]
            }
            return e
        }
        $T.exports = Q9
    });
    var QT = E((hle, YT) => {
        var Z9 = ji(),
            J9 = KT(),
            e7 = Dn();

        function t7(e, t, r) {
            for (var n = -1, i = t.length, a = {}; ++n < i;) {
                var s = t[n],
                    o = Z9(e, s);
                r(o, s) && J9(a, e7(s, e), o)
            }
            return a
        }
        YT.exports = t7
    });
    var JT = E((cle, ZT) => {
        var r7 = Ri(),
            n7 = bu(),
            i7 = Zs(),
            a7 = Qs(),
            s7 = Object.getOwnPropertySymbols,
            o7 = s7 ? function(e) {
                for (var t = []; e;) r7(t, i7(e)), e = n7(e);
                return t
            } : a7;
        ZT.exports = o7
    });
    var tI = E((fle, eI) => {
        function l7(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        eI.exports = l7
    });
    var nI = E((ple, rI) => {
        var u7 = It(),
            h7 = Bi(),
            c7 = tI(),
            f7 = Object.prototype,
            p7 = f7.hasOwnProperty;

        function d7(e) {
            if (!u7(e)) return c7(e);
            var t = h7(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !p7.call(e, n)) || r.push(n);
            return r
        }
        rI.exports = d7
    });
    var aI = E((dle, iI) => {
        var m7 = eo(),
            g7 = nI(),
            v7 = pr();

        function y7(e) {
            return v7(e) ? m7(e, !0) : g7(e)
        }
        iI.exports = y7
    });
    var oI = E((mle, sI) => {
        var E7 = Ys(),
            b7 = JT(),
            S7 = aI();

        function x7(e) {
            return E7(e, S7, b7)
        }
        sI.exports = x7
    });
    var uI = E((gle, lI) => {
        var _7 = po(),
            T7 = Zt(),
            I7 = QT(),
            A7 = oI();

        function P7(e, t) {
            if (e == null) return {};
            var r = _7(A7(e), function(n) {
                return [n]
            });
            return t = T7(t), I7(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        lI.exports = P7
    });
    var cI = E((vle, hI) => {
        var C7 = Zt(),
            w7 = GT(),
            M7 = uI();

        function O7(e, t) {
            return M7(e, w7(C7(t)))
        }
        hI.exports = O7
    });
    var pI = E((yle, fI) => {
        var D7 = Vi(),
            F7 = Gi(),
            R7 = An(),
            q7 = Re(),
            L7 = pr(),
            k7 = qi(),
            N7 = Bi(),
            B7 = Ni(),
            V7 = "[object Map]",
            G7 = "[object Set]",
            z7 = Object.prototype,
            H7 = z7.hasOwnProperty;

        function j7(e) {
            if (e == null) return !0;
            if (L7(e) && (q7(e) || typeof e == "string" || typeof e.splice == "function" || k7(e) || B7(e) || R7(e))) return !e.length;
            var t = F7(e);
            if (t == V7 || t == G7) return !e.size;
            if (N7(e)) return !D7(e).length;
            for (var r in e)
                if (H7.call(e, r)) return !1;
            return !0
        }
        fI.exports = j7
    });
    var mI = E((Ele, dI) => {
        var U7 = dh(),
            W7 = th(),
            X7 = Zt();

        function $7(e, t) {
            var r = {};
            return t = X7(t, 3), W7(e, function(n, i, a) {
                U7(r, i, t(n, i, a))
            }), r
        }
        dI.exports = $7
    });
    var vI = E((ble, gI) => {
        function K7(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        gI.exports = K7
    });
    var EI = E((Sle, yI) => {
        var Y7 = Wi();

        function Q7(e) {
            return typeof e == "function" ? e : Y7
        }
        yI.exports = Q7
    });
    var SI = E((xle, bI) => {
        var Z7 = vI(),
            J7 = rh(),
            eY = EI(),
            tY = Re();

        function rY(e, t) {
            var r = tY(e) ? Z7 : J7;
            return r(e, eY(t))
        }
        bI.exports = rY
    });
    var _I = E((_le, xI) => {
        var nY = dt(),
            iY = function() {
                return nY.Date.now()
            };
        xI.exports = iY
    });
    var AI = E((Tle, II) => {
        var aY = It(),
            mh = _I(),
            TI = Xi(),
            sY = "Expected a function",
            oY = Math.max,
            lY = Math.min;

        function uY(e, t, r) {
            var n, i, a, s, o, l, c = 0,
                u = !1,
                f = !1,
                g = !0;
            if (typeof e != "function") throw new TypeError(sY);
            t = TI(t) || 0, aY(r) && (u = !!r.leading, f = "maxWait" in r, a = f ? oY(TI(r.maxWait) || 0, t) : a, g = "trailing" in r ? !!r.trailing : g);

            function d(T) {
                var _ = n,
                    P = i;
                return n = i = void 0, c = T, s = e.apply(P, _), s
            }

            function p(T) {
                return c = T, o = setTimeout(v, t), u ? d(T) : s
            }

            function m(T) {
                var _ = T - l,
                    P = T - c,
                    F = t - _;
                return f ? lY(F, a - P) : F
            }

            function h(T) {
                var _ = T - l,
                    P = T - c;
                return l === void 0 || _ >= t || _ < 0 || f && P >= a
            }

            function v() {
                var T = mh();
                if (h(T)) return y(T);
                o = setTimeout(v, m(T))
            }

            function y(T) {
                return o = void 0, g && n ? d(T) : (n = i = void 0, s)
            }

            function b() {
                o !== void 0 && clearTimeout(o), c = 0, n = l = i = o = void 0
            }

            function S() {
                return o === void 0 ? s : y(mh())
            }

            function x() {
                var T = mh(),
                    _ = h(T);
                if (n = arguments, i = this, l = T, _) {
                    if (o === void 0) return p(l);
                    if (f) return clearTimeout(o), o = setTimeout(v, t), d(l)
                }
                return o === void 0 && (o = setTimeout(v, t)), s
            }
            return x.cancel = b, x.flush = S, x
        }
        II.exports = uY
    });
    var CI = E((Ile, PI) => {
        var hY = AI(),
            cY = It(),
            fY = "Expected a function";

        function pY(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(fY);
            return cY(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), hY(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        PI.exports = pY
    });
    var MI = {};
    Ge(MI, {
        actionListPlaybackChanged: () => gn,
        animationFrameChanged: () => vs,
        clearRequested: () => NY,
        elementStateChanged: () => _h,
        eventListenerAdded: () => gs,
        eventStateChanged: () => bh,
        instanceAdded: () => Sh,
        instanceRemoved: () => xh,
        instanceStarted: () => ys,
        mediaQueriesDefined: () => Ih,
        parameterChanged: () => mn,
        playbackRequested: () => LY,
        previewRequested: () => qY,
        rawDataImported: () => gh,
        sessionInitialized: () => vh,
        sessionStarted: () => yh,
        sessionStopped: () => Eh,
        stopRequested: () => kY,
        testFrameRendered: () => BY,
        viewportWidthChanged: () => Th
    });
    var wI, dY, mY, gY, vY, yY, EY, bY, SY, xY, _Y, TY, IY, AY, PY, CY, wY, MY, OY, DY, FY, RY, gh, vh, yh, Eh, qY, LY, kY, NY, gs, BY, bh, vs, mn, Sh, ys, xh, _h, gn, Th, Ih, Es = pe(() => {
        "use strict";
        Ye();
        wI = le(Cr()), {
            IX2_RAW_DATA_IMPORTED: dY,
            IX2_SESSION_INITIALIZED: mY,
            IX2_SESSION_STARTED: gY,
            IX2_SESSION_STOPPED: vY,
            IX2_PREVIEW_REQUESTED: yY,
            IX2_PLAYBACK_REQUESTED: EY,
            IX2_STOP_REQUESTED: bY,
            IX2_CLEAR_REQUESTED: SY,
            IX2_EVENT_LISTENER_ADDED: xY,
            IX2_TEST_FRAME_RENDERED: _Y,
            IX2_EVENT_STATE_CHANGED: TY,
            IX2_ANIMATION_FRAME_CHANGED: IY,
            IX2_PARAMETER_CHANGED: AY,
            IX2_INSTANCE_ADDED: PY,
            IX2_INSTANCE_STARTED: CY,
            IX2_INSTANCE_REMOVED: wY,
            IX2_ELEMENT_STATE_CHANGED: MY,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: OY,
            IX2_VIEWPORT_WIDTH_CHANGED: DY,
            IX2_MEDIA_QUERIES_DEFINED: FY
        } = De, {
            reifyState: RY
        } = wI.IX2VanillaUtils, gh = e => ({
            type: dY,
            payload: { ...RY(e)
            }
        }), vh = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: mY,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), yh = () => ({
            type: gY
        }), Eh = () => ({
            type: vY
        }), qY = ({
            rawData: e,
            defer: t
        }) => ({
            type: yY,
            payload: {
                defer: t,
                rawData: e
            }
        }), LY = ({
            actionTypeId: e = ot.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: a,
            testManual: s,
            verbose: o,
            rawData: l
        }) => ({
            type: EY,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: s,
                eventId: n,
                allowEvents: i,
                immediate: a,
                verbose: o,
                rawData: l
            }
        }), kY = e => ({
            type: bY,
            payload: {
                actionListId: e
            }
        }), NY = () => ({
            type: SY
        }), gs = (e, t) => ({
            type: xY,
            payload: {
                target: e,
                listenerParams: t
            }
        }), BY = (e = 1) => ({
            type: _Y,
            payload: {
                step: e
            }
        }), bh = (e, t) => ({
            type: TY,
            payload: {
                stateKey: e,
                newState: t
            }
        }), vs = (e, t) => ({
            type: IY,
            payload: {
                now: e,
                parameters: t
            }
        }), mn = (e, t) => ({
            type: AY,
            payload: {
                key: e,
                value: t
            }
        }), Sh = e => ({
            type: PY,
            payload: { ...e
            }
        }), ys = (e, t) => ({
            type: CY,
            payload: {
                instanceId: e,
                time: t
            }
        }), xh = e => ({
            type: wY,
            payload: {
                instanceId: e
            }
        }), _h = (e, t, r, n) => ({
            type: MY,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), gn = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: OY,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), Th = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: DY,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), Ih = () => ({
            type: FY
        })
    });
    var Xe = {};
    Ge(Xe, {
        elementContains: () => Ch,
        getChildElements: () => KY,
        getClosestElement: () => Si,
        getProperty: () => jY,
        getQuerySelector: () => Ph,
        getRefType: () => wh,
        getSiblingElements: () => YY,
        getStyle: () => HY,
        getValidDocument: () => WY,
        isSiblingNode: () => $Y,
        matchSelector: () => UY,
        queryDocument: () => XY,
        setStyle: () => zY
    });

    function zY(e, t, r) {
        e.style[t] = r
    }

    function HY(e, t) {
        return e.style[t]
    }

    function jY(e, t) {
        return e[t]
    }

    function UY(e) {
        return t => t[Ah](e)
    }

    function Ph({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(OI) !== -1) {
                let n = e.split(OI),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(FI)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function WY(e) {
        return e == null || e === document.documentElement.getAttribute(FI) ? document : null
    }

    function XY(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function Ch(e, t) {
        return e.contains(t)
    }

    function $Y(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function KY(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: a
            } = i;
            if (a)
                for (let s = 0; s < a; s++) t.push(i[s])
        }
        return t
    }

    function YY(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: a
            } = e[n];
            if (!a || !a.children || !a.children.length || r.indexOf(a) !== -1) continue;
            r.push(a);
            let s = a.firstElementChild;
            for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
        }
        return t
    }

    function wh(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? VY : GY : null
    }
    var DI, Ah, OI, VY, GY, FI, Si, RI = pe(() => {
        "use strict";
        DI = le(Cr());
        Ye();
        ({
            ELEMENT_MATCHES: Ah
        } = DI.IX2BrowserSupport), {
            IX2_ID_DELIMITER: OI,
            HTML_ELEMENT: VY,
            PLAIN_OBJECT: GY,
            WF_PAGE: FI
        } = Ne;
        Si = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[Ah] && r[Ah](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var Mh = E((Cle, LI) => {
        var QY = It(),
            qI = Object.create,
            ZY = function() {
                function e() {}
                return function(t) {
                    if (!QY(t)) return {};
                    if (qI) return qI(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        LI.exports = ZY
    });
    var bs = E((wle, kI) => {
        function JY() {}
        kI.exports = JY
    });
    var xs = E((Mle, NI) => {
        var eQ = Mh(),
            tQ = bs();

        function Ss(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        Ss.prototype = eQ(tQ.prototype);
        Ss.prototype.constructor = Ss;
        NI.exports = Ss
    });
    var zI = E((Ole, GI) => {
        var BI = Fr(),
            rQ = An(),
            nQ = Re(),
            VI = BI ? BI.isConcatSpreadable : void 0;

        function iQ(e) {
            return nQ(e) || rQ(e) || !!(VI && e && e[VI])
        }
        GI.exports = iQ
    });
    var UI = E((Dle, jI) => {
        var aQ = Ri(),
            sQ = zI();

        function HI(e, t, r, n, i) {
            var a = -1,
                s = e.length;
            for (r || (r = sQ), i || (i = []); ++a < s;) {
                var o = e[a];
                t > 0 && r(o) ? t > 1 ? HI(o, t - 1, r, n, i) : aQ(i, o) : n || (i[i.length] = o)
            }
            return i
        }
        jI.exports = HI
    });
    var XI = E((Fle, WI) => {
        var oQ = UI();

        function lQ(e) {
            var t = e == null ? 0 : e.length;
            return t ? oQ(e, 1) : []
        }
        WI.exports = lQ
    });
    var KI = E((Rle, $I) => {
        function uQ(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        $I.exports = uQ
    });
    var ZI = E((qle, QI) => {
        var hQ = KI(),
            YI = Math.max;

        function cQ(e, t, r) {
            return t = YI(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, a = YI(n.length - t, 0), s = Array(a); ++i < a;) s[i] = n[t + i];
                    i = -1;
                    for (var o = Array(t + 1); ++i < t;) o[i] = n[i];
                    return o[t] = r(s), hQ(e, this, o)
                }
        }
        QI.exports = cQ
    });
    var eA = E((Lle, JI) => {
        function fQ(e) {
            return function() {
                return e
            }
        }
        JI.exports = fQ
    });
    var nA = E((kle, rA) => {
        var pQ = eA(),
            tA = ph(),
            dQ = Wi(),
            mQ = tA ? function(e, t) {
                return tA(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: pQ(t),
                    writable: !0
                })
            } : dQ;
        rA.exports = mQ
    });
    var aA = E((Nle, iA) => {
        var gQ = 800,
            vQ = 16,
            yQ = Date.now;

        function EQ(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = yQ(),
                    i = vQ - (n - r);
                if (r = n, i > 0) {
                    if (++t >= gQ) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        iA.exports = EQ
    });
    var oA = E((Ble, sA) => {
        var bQ = nA(),
            SQ = aA(),
            xQ = SQ(bQ);
        sA.exports = xQ
    });
    var uA = E((Vle, lA) => {
        var _Q = XI(),
            TQ = ZI(),
            IQ = oA();

        function AQ(e) {
            return IQ(TQ(e, void 0, _Q), e + "")
        }
        lA.exports = AQ
    });
    var fA = E((Gle, cA) => {
        var hA = ro(),
            PQ = hA && new hA;
        cA.exports = PQ
    });
    var dA = E((zle, pA) => {
        function CQ() {}
        pA.exports = CQ
    });
    var Oh = E((Hle, gA) => {
        var mA = fA(),
            wQ = dA(),
            MQ = mA ? function(e) {
                return mA.get(e)
            } : wQ;
        gA.exports = MQ
    });
    var yA = E((jle, vA) => {
        var OQ = {};
        vA.exports = OQ
    });
    var Dh = E((Ule, bA) => {
        var EA = yA(),
            DQ = Object.prototype,
            FQ = DQ.hasOwnProperty;

        function RQ(e) {
            for (var t = e.name + "", r = EA[t], n = FQ.call(EA, t) ? r.length : 0; n--;) {
                var i = r[n],
                    a = i.func;
                if (a == null || a == e) return i.name
            }
            return t
        }
        bA.exports = RQ
    });
    var Ts = E((Wle, SA) => {
        var qQ = Mh(),
            LQ = bs(),
            kQ = 4294967295;

        function _s(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = kQ, this.__views__ = []
        }
        _s.prototype = qQ(LQ.prototype);
        _s.prototype.constructor = _s;
        SA.exports = _s
    });
    var _A = E((Xle, xA) => {
        function NQ(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        xA.exports = NQ
    });
    var IA = E(($le, TA) => {
        var BQ = Ts(),
            VQ = xs(),
            GQ = _A();

        function zQ(e) {
            if (e instanceof BQ) return e.clone();
            var t = new VQ(e.__wrapped__, e.__chain__);
            return t.__actions__ = GQ(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        TA.exports = zQ
    });
    var CA = E((Kle, PA) => {
        var HQ = Ts(),
            AA = xs(),
            jQ = bs(),
            UQ = Re(),
            WQ = qt(),
            XQ = IA(),
            $Q = Object.prototype,
            KQ = $Q.hasOwnProperty;

        function Is(e) {
            if (WQ(e) && !UQ(e) && !(e instanceof HQ)) {
                if (e instanceof AA) return e;
                if (KQ.call(e, "__wrapped__")) return XQ(e)
            }
            return new AA(e)
        }
        Is.prototype = jQ.prototype;
        Is.prototype.constructor = Is;
        PA.exports = Is
    });
    var MA = E((Yle, wA) => {
        var YQ = Ts(),
            QQ = Oh(),
            ZQ = Dh(),
            JQ = CA();

        function eZ(e) {
            var t = ZQ(e),
                r = JQ[t];
            if (typeof r != "function" || !(t in YQ.prototype)) return !1;
            if (e === r) return !0;
            var n = QQ(r);
            return !!n && e === n[0]
        }
        wA.exports = eZ
    });
    var RA = E((Qle, FA) => {
        var OA = xs(),
            tZ = uA(),
            rZ = Oh(),
            Fh = Dh(),
            nZ = Re(),
            DA = MA(),
            iZ = "Expected a function",
            aZ = 8,
            sZ = 32,
            oZ = 128,
            lZ = 256;

        function uZ(e) {
            return tZ(function(t) {
                var r = t.length,
                    n = r,
                    i = OA.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var a = t[n];
                    if (typeof a != "function") throw new TypeError(iZ);
                    if (i && !s && Fh(a) == "wrapper") var s = new OA([], !0)
                }
                for (n = s ? n : r; ++n < r;) {
                    a = t[n];
                    var o = Fh(a),
                        l = o == "wrapper" ? rZ(a) : void 0;
                    l && DA(l[0]) && l[1] == (oZ | aZ | sZ | lZ) && !l[4].length && l[9] == 1 ? s = s[Fh(l[0])].apply(s, l[3]) : s = a.length == 1 && DA(a) ? s[o]() : s.thru(a)
                }
                return function() {
                    var c = arguments,
                        u = c[0];
                    if (s && c.length == 1 && nZ(u)) return s.plant(u).value();
                    for (var f = 0, g = r ? t[f].apply(this, c) : u; ++f < r;) g = t[f].call(this, g);
                    return g
                }
            })
        }
        FA.exports = uZ
    });
    var LA = E((Zle, qA) => {
        var hZ = RA(),
            cZ = hZ();
        qA.exports = cZ
    });
    var NA = E((Jle, kA) => {
        function fZ(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        kA.exports = fZ
    });
    var VA = E((eue, BA) => {
        var pZ = NA(),
            Rh = Xi();

        function dZ(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Rh(r), r = r === r ? r : 0), t !== void 0 && (t = Rh(t), t = t === t ? t : 0), pZ(Rh(e), t, r)
        }
        BA.exports = dZ
    });
    var KA, YA, QA, ZA, mZ, gZ, vZ, yZ, EZ, bZ, SZ, xZ, _Z, TZ, IZ, AZ, PZ, CZ, wZ, JA, eP, MZ, OZ, DZ, tP, FZ, RZ, rP, qZ, qh, nP, GA, zA, iP, _i, LZ, Rt, aP, kZ, Ze, St, Ti, sP, Lh, HA, kh, NZ, xi, BZ, VZ, GZ, oP, jA, zZ, UA, HZ, jZ, UZ, WA, As, Ps, XA, $A, lP, uP = pe(() => {
        "use strict";
        KA = le(LA()), YA = le(Ui()), QA = le(VA());
        Ye();
        Nh();
        Es();
        ZA = le(Cr()), {
            MOUSE_CLICK: mZ,
            MOUSE_SECOND_CLICK: gZ,
            MOUSE_DOWN: vZ,
            MOUSE_UP: yZ,
            MOUSE_OVER: EZ,
            MOUSE_OUT: bZ,
            DROPDOWN_CLOSE: SZ,
            DROPDOWN_OPEN: xZ,
            SLIDER_ACTIVE: _Z,
            SLIDER_INACTIVE: TZ,
            TAB_ACTIVE: IZ,
            TAB_INACTIVE: AZ,
            NAVBAR_CLOSE: PZ,
            NAVBAR_OPEN: CZ,
            MOUSE_MOVE: wZ,
            PAGE_SCROLL_DOWN: JA,
            SCROLL_INTO_VIEW: eP,
            SCROLL_OUT_OF_VIEW: MZ,
            PAGE_SCROLL_UP: OZ,
            SCROLLING_IN_VIEW: DZ,
            PAGE_FINISH: tP,
            ECOMMERCE_CART_CLOSE: FZ,
            ECOMMERCE_CART_OPEN: RZ,
            PAGE_START: rP,
            PAGE_SCROLL: qZ
        } = Et, qh = "COMPONENT_ACTIVE", nP = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: GA
        } = Ne, {
            getNamespacedParameterId: zA
        } = ZA.IX2VanillaUtils, iP = e => t => typeof t == "object" && e(t) ? !0 : t, _i = iP(({
            element: e,
            nativeEvent: t
        }) => e === t.target), LZ = iP(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), Rt = (0, KA.default)([_i, LZ]), aP = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !NZ[i.eventTypeId]) return i
            }
            return null
        }, kZ = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!aP(e, n)
        }, Ze = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: a,
                id: s
            } = t, {
                actionListId: o,
                autoStopEventId: l
            } = a.config, c = aP(e, l);
            return c && vn({
                store: e,
                eventId: l,
                eventTarget: r,
                eventStateKey: l + GA + n.split(GA)[1],
                actionListId: (0, YA.default)(c, "action.config.actionListId")
            }), vn({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: o
            }), Ii({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: o
            }), i
        }, St = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Ti = {
            handler: St(Rt, Ze)
        }, sP = { ...Ti,
            types: [qh, nP].join(" ")
        }, Lh = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], HA = "mouseover mouseout", kh = {
            types: Lh
        }, NZ = {
            PAGE_START: rP,
            PAGE_FINISH: tP
        }, xi = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, QA.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), BZ = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), VZ = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, a = e.contains(n);
            if (r === "mouseover" && a) return !0;
            let s = e.contains(i);
            return !!(r === "mouseout" && a && s)
        }, GZ = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = xi(), a = r.scrollOffsetValue, l = r.scrollOffsetUnit === "PX" ? a : i * (a || 0) / 100;
            return BZ(t.getBoundingClientRect(), {
                left: 0,
                top: l,
                right: n,
                bottom: i - l
            })
        }, oP = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [qh, nP].indexOf(n) !== -1 ? n === qh : r.isActive, a = { ...r,
                isActive: i
            };
            return (!r || a.isActive !== r.isActive) && e(t, a) || a
        }, jA = e => (t, r) => {
            let n = {
                elementHovered: VZ(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, zZ = e => (t, r) => {
            let n = { ...r,
                elementVisible: GZ(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, UA = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: a
            } = xi(), {
                event: {
                    config: s,
                    eventTypeId: o
                }
            } = t, {
                scrollOffsetValue: l,
                scrollOffsetUnit: c
            } = s, u = c === "PX", f = i - a, g = Number((n / f).toFixed(2));
            if (r && r.percentTop === g) return r;
            let d = (u ? l : a * (l || 0) / 100) / f,
                p, m, h = 0;
            r && (p = g > r.percentTop, m = r.scrollingDown !== p, h = m ? g : r.anchorTop);
            let v = o === JA ? g >= h + d : g <= h - d,
                y = { ...r,
                    percentTop: g,
                    inBounds: v,
                    anchorTop: h,
                    scrollingDown: p
                };
            return r && v && (m || y.inBounds !== r.inBounds) && e(t, y) || y
        }, HZ = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, jZ = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, UZ = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, WA = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, As = (e = !0) => ({ ...sP,
            handler: St(e ? Rt : _i, oP((t, r) => r.isActive ? Ti.handler(t, r) : r))
        }), Ps = (e = !0) => ({ ...sP,
            handler: St(e ? Rt : _i, oP((t, r) => r.isActive ? r : Ti.handler(t, r)))
        }), XA = { ...kh,
            handler: zZ((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: a
                } = i.getState(), {
                    events: s
                } = a;
                return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === eP === r ? (Ze(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, $A = .05, lP = {
            [_Z]: As(),
            [TZ]: Ps(),
            [xZ]: As(),
            [SZ]: Ps(),
            [CZ]: As(!1),
            [PZ]: Ps(!1),
            [IZ]: As(),
            [AZ]: Ps(),
            [RZ]: {
                types: "ecommerce-cart-open",
                handler: St(Rt, Ze)
            },
            [FZ]: {
                types: "ecommerce-cart-close",
                handler: St(Rt, Ze)
            },
            [mZ]: {
                types: "click",
                handler: St(Rt, WA((e, {
                    clickCount: t
                }) => {
                    kZ(e) ? t === 1 && Ze(e) : Ze(e)
                }))
            },
            [gZ]: {
                types: "click",
                handler: St(Rt, WA((e, {
                    clickCount: t
                }) => {
                    t === 2 && Ze(e)
                }))
            },
            [vZ]: { ...Ti,
                types: "mousedown"
            },
            [yZ]: { ...Ti,
                types: "mouseup"
            },
            [EZ]: {
                types: HA,
                handler: St(Rt, jA((e, t) => {
                    t.elementHovered && Ze(e)
                }))
            },
            [bZ]: {
                types: HA,
                handler: St(Rt, jA((e, t) => {
                    t.elementHovered || Ze(e)
                }))
            },
            [wZ]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, a = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: s,
                        selectedAxis: o,
                        continuousParameterGroupId: l,
                        reverse: c,
                        restingState: u = 0
                    } = r, {
                        clientX: f = a.clientX,
                        clientY: g = a.clientY,
                        pageX: d = a.pageX,
                        pageY: p = a.pageY
                    } = n, m = o === "X_AXIS", h = n.type === "mouseout", v = u / 100, y = l, b = !1;
                    switch (s) {
                        case Ot.VIEWPORT:
                            {
                                v = m ? Math.min(f, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case Ot.PAGE:
                            {
                                let {
                                    scrollLeft: S,
                                    scrollTop: x,
                                    scrollWidth: T,
                                    scrollHeight: _
                                } = xi();v = m ? Math.min(S + d, T) / T : Math.min(x + p, _) / _;
                                break
                            }
                        case Ot.ELEMENT:
                        default:
                            {
                                y = zA(i, l);
                                let S = n.type.indexOf("mouse") === 0;
                                if (S && Rt({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let x = t.getBoundingClientRect(),
                                    {
                                        left: T,
                                        top: _,
                                        width: P,
                                        height: F
                                    } = x;
                                if (!S && !HZ({
                                        left: f,
                                        top: g
                                    }, x)) break;b = !0,
                                v = m ? (f - T) / P : (g - _) / F;
                                break
                            }
                    }
                    return h && (v > 1 - $A || v < $A) && (v = Math.round(v)), (s !== Ot.ELEMENT || b || b !== a.elementHovered) && (v = c ? 1 - v : v, e.dispatch(mn(y, v))), {
                        elementHovered: b,
                        clientX: f,
                        clientY: g,
                        pageX: d,
                        pageY: p
                    }
                }
            },
            [qZ]: {
                types: Lh,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: a,
                        clientHeight: s
                    } = xi(), o = i / (a - s);
                    o = n ? 1 - o : o, e.dispatch(mn(r, o))
                }
            },
            [DZ]: {
                types: Lh,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: a,
                        scrollTop: s,
                        scrollWidth: o,
                        scrollHeight: l,
                        clientHeight: c
                    } = xi(), {
                        basedOn: u,
                        selectedAxis: f,
                        continuousParameterGroupId: g,
                        startsEntering: d,
                        startsExiting: p,
                        addEndOffset: m,
                        addStartOffset: h,
                        addOffsetValue: v = 0,
                        endOffsetValue: y = 0
                    } = r, b = f === "X_AXIS";
                    if (u === Ot.VIEWPORT) {
                        let S = b ? a / o : s / l;
                        return S !== i.scrollPercent && t.dispatch(mn(g, S)), {
                            scrollPercent: S
                        }
                    } else {
                        let S = zA(n, g),
                            x = e.getBoundingClientRect(),
                            T = (h ? v : 0) / 100,
                            _ = (m ? y : 0) / 100;
                        T = d ? T : 1 - T, _ = p ? _ : 1 - _;
                        let P = x.top + Math.min(x.height * T, c),
                            w = x.top + x.height * _ - P,
                            C = Math.min(c + w, l),
                            O = Math.min(Math.max(0, c - P), C) / C;
                        return O !== i.scrollPercent && t.dispatch(mn(S, O)), {
                            scrollPercent: O
                        }
                    }
                }
            },
            [eP]: XA,
            [MZ]: XA,
            [JA]: { ...kh,
                handler: UA((e, t) => {
                    t.scrollingDown && Ze(e)
                })
            },
            [OZ]: { ...kh,
                handler: UA((e, t) => {
                    t.scrollingDown || Ze(e)
                })
            },
            [tP]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: St(_i, jZ(Ze))
            },
            [rP]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: St(_i, UZ(Ze))
            }
        }
    });
    var AP = {};
    Ge(AP, {
        observeRequests: () => cJ,
        startActionGroup: () => Ii,
        startEngine: () => Fs,
        stopActionGroup: () => vn,
        stopAllActionGroups: () => _P,
        stopEngine: () => Rs
    });

    function cJ(e) {
        wr({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: dJ
        }), wr({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: mJ
        }), wr({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: gJ
        }), wr({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: vJ
        })
    }

    function fJ(e) {
        wr({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Rs(e), EP({
                    store: e,
                    elementApi: Xe
                }), Fs({
                    store: e,
                    allowEvents: !0
                }), bP()
            }
        })
    }

    function pJ(e, t) {
        let r = wr({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function dJ({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Fs({
                store: r,
                rawData: e,
                allowEvents: !0
            }), bP()
        };
        t ? setTimeout(n, 0) : n()
    }

    function bP() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function mJ(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: a,
            allowEvents: s,
            immediate: o,
            testManual: l,
            verbose: c = !0
        } = e, {
            rawData: u
        } = e;
        if (n && i && u && o) {
            let f = u.actionLists[n];
            f && (u = eJ({
                actionList: f,
                actionItemId: i,
                rawData: u
            }))
        }
        if (Fs({
                store: t,
                rawData: u,
                allowEvents: s,
                testManual: l
            }), n && r === ot.GENERAL_START_ACTION || Bh(r)) {
            vn({
                store: t,
                actionListId: n
            }), xP({
                store: t,
                actionListId: n,
                eventId: a
            });
            let f = Ii({
                store: t,
                eventId: a,
                actionListId: n,
                immediate: o,
                verbose: c
            });
            c && f && t.dispatch(gn({
                actionListId: n,
                isPlaying: !o
            }))
        }
    }

    function gJ({
        actionListId: e
    }, t) {
        e ? vn({
            store: t,
            actionListId: e
        }) : _P({
            store: t
        }), Rs(t)
    }

    function vJ(e, t) {
        Rs(t), EP({
            store: t,
            elementApi: Xe
        })
    }

    function Fs({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(gh(t)), i.active || (e.dispatch(vh({
            hasBoundaryNodes: !!document.querySelector(ws),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (_J(e), yJ(), e.getState().ixSession.hasDefinedMediaQueries && fJ(e)), e.dispatch(yh()), EJ(e, n))
    }

    function yJ() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(hP) === -1 && (e.className += ` ${hP}`)
    }

    function EJ(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: a
            } = e.getState();
            i.active && (e.dispatch(vs(n, a)), t ? pJ(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Rs(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(bJ), iJ(), e.dispatch(Eh())
        }
    }

    function bJ({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function SJ({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: a,
        parameterGroup: s,
        smoothing: o,
        restingValue: l
    }) {
        let {
            ixData: c,
            ixSession: u
        } = e.getState(), {
            events: f
        } = c, g = f[n], {
            eventTypeId: d
        } = g, p = {}, m = {}, h = [], {
            continuousActionGroups: v
        } = s, {
            id: y
        } = s;
        tJ(d, i) && (y = rJ(t, y));
        let b = u.hasBoundaryNodes && r ? Si(r, ws) : null;
        v.forEach(S => {
            let {
                keyframe: x,
                actionItems: T
            } = S;
            T.forEach(_ => {
                let {
                    actionTypeId: P
                } = _, {
                    target: F
                } = _.config;
                if (!F) return;
                let w = F.boundaryMode ? b : null,
                    C = aJ(F) + Vh + P;
                if (m[C] = xJ(m[C], x, _), !p[C]) {
                    p[C] = !0;
                    let {
                        config: R
                    } = _;
                    Ms({
                        config: R,
                        event: g,
                        eventTarget: r,
                        elementRoot: w,
                        elementApi: Xe
                    }).forEach(O => {
                        h.push({
                            element: O,
                            key: C
                        })
                    })
                }
            })
        }), h.forEach(({
            element: S,
            key: x
        }) => {
            let T = m[x],
                _ = (0, Xt.default)(T, "[0].actionItems[0]", {}),
                {
                    actionTypeId: P
                } = _,
                F = Ds(P) ? zh(P)(S, _) : null,
                w = Gh({
                    element: S,
                    actionItem: _,
                    elementApi: Xe
                }, F);
            Hh({
                store: e,
                element: S,
                eventId: n,
                actionListId: a,
                actionItem: _,
                destination: w,
                continuous: !0,
                parameterId: y,
                actionGroups: T,
                smoothing: o,
                restingValue: l,
                pluginInstance: F
            })
        })
    }

    function xJ(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((a, s) => a.keyframe === t ? (i = s, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function _J(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        SP(e), (0, yn.default)(r, (i, a) => {
            let s = lP[a];
            if (!s) {
                console.warn(`IX2 event type not configured: ${a}`);
                return
            }
            wJ({
                logic: s,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && IJ(e)
    }

    function IJ(e) {
        let t = () => {
            SP(e)
        };
        TJ.forEach(r => {
            window.addEventListener(r, t), e.dispatch(gs(window, [r, t]))
        }), t()
    }

    function SP(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(Th({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function wJ({
        logic: e,
        store: t,
        events: r
    }) {
        MJ(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: a
        } = t.getState(), {
            actionLists: s
        } = a, o = AJ(r, CJ);
        if (!(0, pP.default)(o)) return;
        (0, yn.default)(o, (f, g) => {
            let d = r[g],
                {
                    action: p,
                    id: m,
                    mediaQueries: h = a.mediaQueryKeys
                } = d,
                {
                    actionListId: v
                } = p.config;
            sJ(h, a.mediaQueryKeys) || t.dispatch(Ih()), p.actionTypeId === ot.GENERAL_CONTINUOUS_ACTION && (Array.isArray(d.config) ? d.config : [d.config]).forEach(b => {
                let {
                    continuousParameterGroupId: S
                } = b, x = (0, Xt.default)(s, `${v}.continuousParameterGroups`, []), T = (0, fP.default)(x, ({
                    id: F
                }) => F === S), _ = (b.smoothing || 0) / 100, P = (b.restingState || 0) / 100;
                T && f.forEach((F, w) => {
                    let C = m + Vh + w;
                    SJ({
                        store: t,
                        eventStateKey: C,
                        eventTarget: F,
                        eventId: m,
                        eventConfig: b,
                        actionListId: v,
                        parameterGroup: T,
                        smoothing: _,
                        restingValue: P
                    })
                })
            }), (p.actionTypeId === ot.GENERAL_START_ACTION || Bh(p.actionTypeId)) && xP({
                store: t,
                actionListId: v,
                eventId: m
            })
        });
        let l = f => {
                let {
                    ixSession: g
                } = t.getState();
                PJ(o, (d, p, m) => {
                    let h = r[p],
                        v = g.eventState[m],
                        {
                            action: y,
                            mediaQueries: b = a.mediaQueryKeys
                        } = h;
                    if (!Os(b, g.mediaQueryKey)) return;
                    let S = (x = {}) => {
                        let T = i({
                            store: t,
                            element: d,
                            event: h,
                            eventConfig: x,
                            nativeEvent: f,
                            eventStateKey: m
                        }, v);
                        oJ(T, v) || t.dispatch(bh(m, T))
                    };
                    y.actionTypeId === ot.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(h.config) ? h.config : [h.config]).forEach(S) : S()
                })
            },
            c = (0, vP.default)(l, hJ),
            u = ({
                target: f = document,
                types: g,
                throttle: d
            }) => {
                g.split(" ").filter(Boolean).forEach(p => {
                    let m = d ? c : l;
                    f.addEventListener(p, m), t.dispatch(gs(f, [p, m]))
                })
            };
        Array.isArray(n) ? n.forEach(u) : typeof n == "string" && u(e)
    }

    function MJ(e) {
        if (!uJ) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: a
            } = e[n], s = Ph(a);
            t[s] || (i === Et.MOUSE_CLICK || i === Et.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function xP({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: a,
            events: s
        } = n, o = s[r], l = a[t];
        if (l && l.useFirstGroupAsInitialState) {
            let c = (0, Xt.default)(l, "actionItemGroups[0].actionItems", []),
                u = (0, Xt.default)(o, "mediaQueries", n.mediaQueryKeys);
            if (!Os(u, i.mediaQueryKey)) return;
            c.forEach(f => {
                let {
                    config: g,
                    actionTypeId: d
                } = f, p = g ? .target ? .useEventTarget === !0 && g ? .target ? .objectId == null ? {
                    target: o.target,
                    targets: o.targets
                } : g, m = Ms({
                    config: p,
                    event: o,
                    elementApi: Xe
                }), h = Ds(d);
                m.forEach(v => {
                    let y = h ? zh(d)(v, f) : null;
                    Hh({
                        destination: Gh({
                            element: v,
                            actionItem: f,
                            elementApi: Xe
                        }, y),
                        immediate: !0,
                        store: e,
                        element: v,
                        eventId: r,
                        actionItem: f,
                        actionListId: t,
                        pluginInstance: y
                    })
                })
            })
        }
    }

    function _P({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, yn.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                jh(r, e), i && e.dispatch(gn({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function vn({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: a,
            ixSession: s
        } = e.getState(), o = s.hasBoundaryNodes && r ? Si(r, ws) : null;
        (0, yn.default)(a, l => {
            let c = (0, Xt.default)(l, "actionItem.config.target.boundaryMode"),
                u = n ? l.eventStateKey === n : !0;
            if (l.actionListId === i && l.eventId === t && u) {
                if (o && c && !Ch(o, l.element)) return;
                jh(l, e), l.verbose && e.dispatch(gn({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function Ii({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: a = 0,
        immediate: s,
        verbose: o
    }) {
        let {
            ixData: l,
            ixSession: c
        } = e.getState(), {
            events: u
        } = l, f = u[t] || {}, {
            mediaQueries: g = l.mediaQueryKeys
        } = f, d = (0, Xt.default)(l, `actionLists.${i}`, {}), {
            actionItemGroups: p,
            useFirstGroupAsInitialState: m
        } = d;
        if (!p || !p.length) return !1;
        a >= p.length && (0, Xt.default)(f, "config.loop") && (a = 0), a === 0 && m && a++;
        let v = (a === 0 || a === 1 && m) && Bh(f.action ? .actionTypeId) ? f.config.delay : void 0,
            y = (0, Xt.default)(p, [a, "actionItems"], []);
        if (!y.length || !Os(g, c.mediaQueryKey)) return !1;
        let b = c.hasBoundaryNodes && r ? Si(r, ws) : null,
            S = QZ(y),
            x = !1;
        return y.forEach((T, _) => {
            let {
                config: P,
                actionTypeId: F
            } = T, w = Ds(F), {
                target: C
            } = P;
            if (!C) return;
            let R = C.boundaryMode ? b : null;
            Ms({
                config: P,
                event: f,
                eventTarget: r,
                elementRoot: R,
                elementApi: Xe
            }).forEach((M, N) => {
                let z = w ? zh(F)(M, T) : null,
                    $ = w ? lJ(F)(M, T) : null;
                x = !0;
                let A = S === _ && N === 0,
                    D = ZZ({
                        element: M,
                        actionItem: T
                    }),
                    L = Gh({
                        element: M,
                        actionItem: T,
                        elementApi: Xe
                    }, z);
                Hh({
                    store: e,
                    element: M,
                    actionItem: T,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: a,
                    isCarrier: A,
                    computedStyle: D,
                    destination: L,
                    immediate: s,
                    verbose: o,
                    pluginInstance: z,
                    pluginDuration: $,
                    instanceDelay: v
                })
            })
        }), x
    }

    function Hh(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: a,
            immediate: s,
            pluginInstance: o,
            continuous: l,
            restingValue: c,
            eventId: u
        } = n, f = !l, g = KZ(), {
            ixElements: d,
            ixSession: p,
            ixData: m
        } = t.getState(), h = $Z(d, i), {
            refState: v
        } = d[h] || {}, y = wh(i), b = p.reducedMotion && ku[a.actionTypeId], S;
        if (b && l) switch (m.events[u] ? .eventTypeId) {
            case Et.MOUSE_MOVE:
            case Et.MOUSE_MOVE_IN_VIEWPORT:
                S = c;
                break;
            default:
                S = .5;
                break
        }
        let x = JZ(i, v, r, a, Xe, o);
        if (t.dispatch(Sh({
                instanceId: g,
                elementId: h,
                origin: x,
                refType: y,
                skipMotion: b,
                skipToValue: S,
                ...n
            })), TP(document.body, "ix2-animation-started", g), s) {
            OJ(t, g);
            return
        }
        wr({
            store: t,
            select: ({
                ixInstances: T
            }) => T[g],
            onChange: IP
        }), f && t.dispatch(ys(g, p.tick))
    }

    function jh(e, t) {
        TP(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: a,
            refType: s
        } = i[r] || {};
        s === yP && nJ(a, n, Xe), t.dispatch(xh(e.id))
    }

    function TP(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function OJ(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(ys(t, 0)), e.dispatch(vs(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        IP(n[t], e)
    }

    function IP(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: a,
            actionItem: s,
            actionTypeId: o,
            renderType: l,
            current: c,
            groupIndex: u,
            eventId: f,
            eventTarget: g,
            eventStateKey: d,
            actionListId: p,
            isCarrier: m,
            styleProp: h,
            verbose: v,
            pluginInstance: y
        } = e, {
            ixData: b,
            ixSession: S
        } = t.getState(), {
            events: x
        } = b, T = x[f] || {}, {
            mediaQueries: _ = b.mediaQueryKeys
        } = T;
        if (Os(_, S.mediaQueryKey) && (n || r || i)) {
            if (c || l === XZ && i) {
                t.dispatch(_h(a, o, c, s));
                let {
                    ixElements: P
                } = t.getState(), {
                    ref: F,
                    refType: w,
                    refState: C
                } = P[a] || {}, R = C && C[o];
                (w === yP || Ds(o)) && YZ(F, C, R, f, s, h, Xe, l, y)
            }
            if (i) {
                if (m) {
                    let P = Ii({
                        store: t,
                        eventId: f,
                        eventTarget: g,
                        eventStateKey: d,
                        actionListId: p,
                        groupIndex: u + 1,
                        verbose: v
                    });
                    v && !P && t.dispatch(gn({
                        actionListId: p,
                        isPlaying: !1
                    }))
                }
                jh(e, t)
            }
        }
    }
    var fP, Xt, pP, dP, mP, gP, yn, vP, Cs, WZ, Bh, Vh, ws, yP, XZ, hP, Ms, $Z, Gh, wr, KZ, YZ, EP, QZ, ZZ, JZ, eJ, tJ, rJ, Os, nJ, iJ, aJ, sJ, oJ, Ds, zh, lJ, cP, uJ, hJ, TJ, AJ, PJ, CJ, Nh = pe(() => {
        "use strict";
        fP = le(Vu()), Xt = le(Ui()), pP = le(BT()), dP = le(cI()), mP = le(pI()), gP = le(mI()), yn = le(SI()), vP = le(CI());
        Ye();
        Cs = le(Cr());
        Es();
        RI();
        uP();
        WZ = Object.keys(qu), Bh = e => WZ.includes(e), {
            COLON_DELIMITER: Vh,
            BOUNDARY_SELECTOR: ws,
            HTML_ELEMENT: yP,
            RENDER_GENERAL: XZ,
            W_MOD_IX: hP
        } = Ne, {
            getAffectedElements: Ms,
            getElementId: $Z,
            getDestinationValues: Gh,
            observeStore: wr,
            getInstanceId: KZ,
            renderHTMLElement: YZ,
            clearAllStyles: EP,
            getMaxDurationItemIndex: QZ,
            getComputedStyle: ZZ,
            getInstanceOrigin: JZ,
            reduceListToGroup: eJ,
            shouldNamespaceEventParameter: tJ,
            getNamespacedParameterId: rJ,
            shouldAllowMediaQuery: Os,
            cleanupHTMLElement: nJ,
            clearObjectCache: iJ,
            stringifyTarget: aJ,
            mediaQueriesEqual: sJ,
            shallowEqual: oJ
        } = Cs.IX2VanillaUtils, {
            isPluginType: Ds,
            createPluginInstance: zh,
            getPluginDuration: lJ
        } = Cs.IX2VanillaPlugins, cP = navigator.userAgent, uJ = cP.match(/iPad/i) || cP.match(/iPhone/), hJ = 12;
        TJ = ["resize", "orientationchange"];
        AJ = (e, t) => (0, dP.default)((0, gP.default)(e, t), mP.default), PJ = (e, t) => {
            (0, yn.default)(e, (r, n) => {
                r.forEach((i, a) => {
                    let s = n + Vh + a;
                    t(i, n, s)
                })
            })
        }, CJ = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Ms({
                config: t,
                elementApi: Xe
            })
        }
    });
    var CP = E($t => {
        "use strict";
        var DJ = Ka().default,
            FJ = tx().default;
        Object.defineProperty($t, "__esModule", {
            value: !0
        });
        $t.actions = void 0;
        $t.destroy = PP;
        $t.init = NJ;
        $t.setEnv = kJ;
        $t.store = void 0;
        ux();
        var RJ = Fu(),
            qJ = FJ((bT(), ht(ET))),
            Uh = (Nh(), ht(AP)),
            LJ = DJ((Es(), ht(MI)));
        $t.actions = LJ;
        var Wh = $t.store = (0, RJ.createStore)(qJ.default);

        function kJ(e) {
            e() && (0, Uh.observeRequests)(Wh)
        }

        function NJ(e) {
            PP(), (0, Uh.startEngine)({
                store: Wh,
                rawData: e,
                allowEvents: !0
            })
        }

        function PP() {
            (0, Uh.stopEngine)(Wh)
        }
    });
    var DP = E((uue, OP) => {
        "use strict";
        var wP = pt(),
            MP = CP();
        MP.setEnv(wP.env);
        wP.define("ix2", OP.exports = function() {
            return MP
        })
    });
    var RP = E((hue, FP) => {
        "use strict";
        var En = pt();
        En.define("links", FP.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, a = En.env(),
                s = window.location,
                o = document.createElement("a"),
                l = "w--current",
                c = /index\.(html|php)$/,
                u = /\/$/,
                f, g;
            r.ready = r.design = r.preview = d;

            function d() {
                i = a && En.env("design"), g = En.env("slug") || s.pathname || "", En.scroll.off(m), f = [];
                for (var v = document.links, y = 0; y < v.length; ++y) p(v[y]);
                f.length && (En.scroll.on(m), m())
            }

            function p(v) {
                var y = i && v.getAttribute("href-disabled") || v.getAttribute("href");
                if (o.href = y, !(y.indexOf(":") >= 0)) {
                    var b = e(v);
                    if (o.hash.length > 1 && o.host + o.pathname === s.host + s.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(o.hash)) return;
                        var S = e(o.hash);
                        S.length && f.push({
                            link: b,
                            sec: S,
                            active: !1
                        });
                        return
                    }
                    if (!(y === "#" || y === "")) {
                        var x = o.href === s.href || y === g || c.test(y) && u.test(g);
                        h(b, l, x)
                    }
                }
            }

            function m() {
                var v = n.scrollTop(),
                    y = n.height();
                t.each(f, function(b) {
                    var S = b.link,
                        x = b.sec,
                        T = x.offset().top,
                        _ = x.outerHeight(),
                        P = y * .5,
                        F = x.is(":visible") && T + _ - P >= v && T + P <= v + y;
                    b.active !== F && (b.active = F, h(S, l, F))
                })
            }

            function h(v, y, b) {
                var S = v.hasClass(y);
                b && S || !b && !S || (b ? v.addClass(y) : v.removeClass(y))
            }
            return r
        })
    });
    var LP = E((cue, qP) => {
        "use strict";
        var qs = pt();
        qs.define("scroll", qP.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = p() ? null : window.history,
                i = e(window),
                a = e(document),
                s = e(document.body),
                o = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(R) {
                    window.setTimeout(R, 15)
                },
                l = qs.env("editor") ? ".w-editor-body" : "body",
                c = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])",
                u = 'a[href="#"]',
                f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
                g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                d = document.createElement("style");
            d.appendChild(document.createTextNode(g));

            function p() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var m = /^#[a-zA-Z0-9][\w:.-]*$/;

            function h(R) {
                return m.test(R.hash) && R.host + R.pathname === r.host + r.pathname
            }
            let v = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function y() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || v.matches
            }

            function b(R, O) {
                var M;
                switch (O) {
                    case "add":
                        M = R.attr("tabindex"), M ? R.attr("data-wf-tabindex-swap", M) : R.attr("tabindex", "-1");
                        break;
                    case "remove":
                        M = R.attr("data-wf-tabindex-swap"), M ? (R.attr("tabindex", M), R.removeAttr("data-wf-tabindex-swap")) : R.removeAttr("tabindex");
                        break
                }
                R.toggleClass("wf-force-outline-none", O === "add")
            }

            function S(R) {
                var O = R.currentTarget;
                if (!(qs.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className))) {
                    var M = h(O) ? O.hash : "";
                    if (M !== "") {
                        var N = e(M);
                        N.length && (R && (R.preventDefault(), R.stopPropagation()), x(M, R), window.setTimeout(function() {
                            T(N, function() {
                                b(N, "add"), N.get(0).focus({
                                    preventScroll: !0
                                }), b(N, "remove")
                            })
                        }, R ? 0 : 300))
                    }
                }
            }

            function x(R) {
                if (r.hash !== R && n && n.pushState && !(qs.env.chrome && r.protocol === "file:")) {
                    var O = n.state && n.state.hash;
                    O !== R && n.pushState({
                        hash: R
                    }, "", R)
                }
            }

            function T(R, O) {
                var M = i.scrollTop(),
                    N = _(R);
                if (M !== N) {
                    var z = P(R, M, N),
                        $ = Date.now(),
                        A = function() {
                            var D = Date.now() - $;
                            window.scroll(0, F(M, N, D, z)), D <= z ? o(A) : typeof O == "function" && O()
                        };
                    o(A)
                }
            }

            function _(R) {
                var O = e(c),
                    M = O.css("position") === "fixed" ? O.outerHeight() : 0,
                    N = R.offset().top - M;
                if (R.data("scroll") === "mid") {
                    var z = i.height() - M,
                        $ = R.outerHeight();
                    $ < z && (N -= Math.round((z - $) / 2))
                }
                return N
            }

            function P(R, O, M) {
                if (y()) return 0;
                var N = 1;
                return s.add(R).each(function(z, $) {
                    var A = parseFloat($.getAttribute("data-scroll-time"));
                    !isNaN(A) && A >= 0 && (N = A)
                }), (472.143 * Math.log(Math.abs(O - M) + 125) - 2e3) * N
            }

            function F(R, O, M, N) {
                return M > N ? O : R + (O - R) * w(M / N)
            }

            function w(R) {
                return R < .5 ? 4 * R * R * R : (R - 1) * (2 * R - 2) * (2 * R - 2) + 1
            }

            function C() {
                var {
                    WF_CLICK_EMPTY: R,
                    WF_CLICK_SCROLL: O
                } = t;
                a.on(O, f, S), a.on(R, u, function(M) {
                    M.preventDefault()
                }), document.head.insertBefore(d, document.head.firstChild)
            }
            return {
                ready: C
            }
        })
    });
    var NP = E((fue, kP) => {
        "use strict";
        var BJ = pt();
        BJ.define("touch", kP.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(a) {
                return a = typeof a == "string" ? e(a).get(0) : a, a ? new n(a) : null
            };

            function n(a) {
                var s = !1,
                    o = !1,
                    l = Math.min(Math.round(window.innerWidth * .04), 40),
                    c, u;
                a.addEventListener("touchstart", f, !1), a.addEventListener("touchmove", g, !1), a.addEventListener("touchend", d, !1), a.addEventListener("touchcancel", p, !1), a.addEventListener("mousedown", f, !1), a.addEventListener("mousemove", g, !1), a.addEventListener("mouseup", d, !1), a.addEventListener("mouseout", p, !1);

                function f(h) {
                    var v = h.touches;
                    v && v.length > 1 || (s = !0, v ? (o = !0, c = v[0].clientX) : c = h.clientX, u = c)
                }

                function g(h) {
                    if (s) {
                        if (o && h.type === "mousemove") {
                            h.preventDefault(), h.stopPropagation();
                            return
                        }
                        var v = h.touches,
                            y = v ? v[0].clientX : h.clientX,
                            b = y - u;
                        u = y, Math.abs(b) > l && r && String(r()) === "" && (i("swipe", h, {
                            direction: b > 0 ? "right" : "left"
                        }), p())
                    }
                }

                function d(h) {
                    if (s && (s = !1, o && h.type === "mouseup")) {
                        h.preventDefault(), h.stopPropagation(), o = !1;
                        return
                    }
                }

                function p() {
                    s = !1
                }

                function m() {
                    a.removeEventListener("touchstart", f, !1), a.removeEventListener("touchmove", g, !1), a.removeEventListener("touchend", d, !1), a.removeEventListener("touchcancel", p, !1), a.removeEventListener("mousedown", f, !1), a.removeEventListener("mousemove", g, !1), a.removeEventListener("mouseup", d, !1), a.removeEventListener("mouseout", p, !1), a = null
                }
                this.destroy = m
            }

            function i(a, s, o) {
                var l = e.Event(a, {
                    originalEvent: s
                });
                e(s.target).trigger(l, o)
            }
            return t.instance = t.init(document), t
        })
    });
    var BP = E(Xh => {
        "use strict";
        Object.defineProperty(Xh, "__esModule", {
            value: !0
        });
        Xh.default = VJ;

        function VJ(e, t, r, n, i, a, s, o, l, c, u, f, g) {
            return function(d) {
                e(d);
                var p = d.form,
                    m = {
                        name: p.attr("data-name") || p.attr("name") || "Untitled Form",
                        pageId: p.attr("data-wf-page-id") || "",
                        elementId: p.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(p.html()),
                        trackingCookies: n()
                    };
                let h = p.attr("data-wf-flow");
                h && (m.wfFlow = h), i(d);
                var v = a(p, m.fields);
                if (v) return s(v);
                if (m.fileUploads = o(p), l(d), !c) {
                    u(d);
                    return
                }
                f.ajax({
                    url: g,
                    type: "POST",
                    data: m,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(y) {
                    y && y.code === 200 && (d.success = !0), u(d)
                }).fail(function() {
                    u(d)
                })
            }
        }
    });
    var GP = E((due, VP) => {
        "use strict";
        var Ls = pt();
        Ls.define("forms", VP.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, a = window.location,
                s = window.XDomainRequest && !window.atob,
                o = ".w-form",
                l, c = /e(-)?mail/i,
                u = /^\S+@\S+$/,
                f = window.alert,
                g = Ls.env(),
                d, p, m, h = /list-manage[1-9]?.com/i,
                v = t.debounce(function() {
                    f("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                y(), !g && !d && S()
            };

            function y() {
                l = e("html").attr("data-wf-site"), p = "https://webflow.com/api/v1/form/" + l, s && p.indexOf("https://webflow.com") >= 0 && (p = p.replace("https://webflow.com", "https://formdata.webflow.com")), m = `${p}/signFile`, i = e(o + " form"), i.length && i.each(b)
            }

            function b(D, L) {
                var H = e(L),
                    U = e.data(L, o);
                U || (U = e.data(L, o, {
                    form: H
                })), x(U);
                var j = H.closest("div.w-form");
                U.done = j.find("> .w-form-done"), U.fail = j.find("> .w-form-fail"), U.fileUploads = j.find(".w-file-upload"), U.fileUploads.each(function(J) {
                    z(J, U)
                });
                var Y = U.form.attr("aria-label") || U.form.attr("data-name") || "Form";
                U.done.attr("aria-label") || U.form.attr("aria-label", Y), U.done.attr("tabindex", "-1"), U.done.attr("role", "region"), U.done.attr("aria-label") || U.done.attr("aria-label", Y + " success"), U.fail.attr("tabindex", "-1"), U.fail.attr("role", "region"), U.fail.attr("aria-label") || U.fail.attr("aria-label", Y + " failure");
                var Q = U.action = H.attr("action");
                if (U.handler = null, U.redirect = H.attr("data-redirect"), h.test(Q)) {
                    U.handler = O;
                    return
                }
                if (!Q) {
                    if (l) {
                        U.handler = (() => {
                            let J = BP().default;
                            return J(x, a, Ls, w, N, _, f, P, T, l, M, e, p)
                        })();
                        return
                    }
                    v()
                }
            }

            function S() {
                d = !0, n.on("submit", o + " form", function(J) {
                    var X = e.data(this, o);
                    X.handler && (X.evt = J, X.handler(X))
                });
                let D = ".w-checkbox-input",
                    L = ".w-radio-input",
                    H = "w--redirected-checked",
                    U = "w--redirected-focus",
                    j = "w--redirected-focus-visible",
                    Y = ":focus-visible, [data-wf-focus-visible]",
                    Q = [
                        ["checkbox", D],
                        ["radio", L]
                    ];
                n.on("change", o + ' form input[type="checkbox"]:not(' + D + ")", J => {
                    e(J.target).siblings(D).toggleClass(H)
                }), n.on("change", o + ' form input[type="radio"]', J => {
                    e(`input[name="${J.target.name}"]:not(${D})`).map((re, Ae) => e(Ae).siblings(L).removeClass(H));
                    let X = e(J.target);
                    X.hasClass("w-radio-input") || X.siblings(L).addClass(H)
                }), Q.forEach(([J, X]) => {
                    n.on("focus", o + ` form input[type="${J}"]:not(` + X + ")", re => {
                        e(re.target).siblings(X).addClass(U), e(re.target).filter(Y).siblings(X).addClass(j)
                    }), n.on("blur", o + ` form input[type="${J}"]:not(` + X + ")", re => {
                        e(re.target).siblings(X).removeClass(`${U} ${j}`)
                    })
                })
            }

            function x(D) {
                var L = D.btn = D.form.find(':input[type="submit"]');
                D.wait = D.btn.attr("data-wait") || null, D.success = !1, L.prop("disabled", !1), D.label && L.val(D.label)
            }

            function T(D) {
                var L = D.btn,
                    H = D.wait;
                L.prop("disabled", !0), H && (D.label = L.val(), L.val(H))
            }

            function _(D, L) {
                var H = null;
                return L = L || {}, D.find(':input:not([type="submit"]):not([type="file"])').each(function(U, j) {
                    var Y = e(j),
                        Q = Y.attr("type"),
                        J = Y.attr("data-name") || Y.attr("name") || "Field " + (U + 1),
                        X = Y.val();
                    if (Q === "checkbox") X = Y.is(":checked");
                    else if (Q === "radio") {
                        if (L[J] === null || typeof L[J] == "string") return;
                        X = D.find('input[name="' + Y.attr("name") + '"]:checked').val() || null
                    }
                    typeof X == "string" && (X = e.trim(X)), L[J] = X, H = H || C(Y, Q, J, X)
                }), H
            }

            function P(D) {
                var L = {};
                return D.find(':input[type="file"]').each(function(H, U) {
                    var j = e(U),
                        Y = j.attr("data-name") || j.attr("name") || "File " + (H + 1),
                        Q = j.attr("data-value");
                    typeof Q == "string" && (Q = e.trim(Q)), L[Y] = Q
                }), L
            }
            let F = {
                _mkto_trk: "marketo"
            };

            function w() {
                return document.cookie.split("; ").reduce(function(L, H) {
                    let U = H.split("="),
                        j = U[0];
                    if (j in F) {
                        let Y = F[j],
                            Q = U.slice(1).join("=");
                        L[Y] = Q
                    }
                    return L
                }, {})
            }

            function C(D, L, H, U) {
                var j = null;
                return L === "password" ? j = "Passwords cannot be submitted." : D.attr("required") ? U ? c.test(D.attr("type")) && (u.test(U) || (j = "Please enter a valid email address for: " + H)) : j = "Please fill out the required field: " + H : H === "g-recaptcha-response" && !U && (j = "Please confirm you\u2019re not a robot."), j
            }

            function R(D) {
                N(D), M(D)
            }

            function O(D) {
                x(D);
                var L = D.form,
                    H = {};
                if (/^https/.test(a.href) && !/^https/.test(D.action)) {
                    L.attr("method", "post");
                    return
                }
                N(D);
                var U = _(L, H);
                if (U) return f(U);
                T(D);
                var j;
                t.each(H, function(X, re) {
                    c.test(re) && (H.EMAIL = X), /^((full[ _-]?)?name)$/i.test(re) && (j = X), /^(first[ _-]?name)$/i.test(re) && (H.FNAME = X), /^(last[ _-]?name)$/i.test(re) && (H.LNAME = X)
                }), j && !H.FNAME && (j = j.split(" "), H.FNAME = j[0], H.LNAME = H.LNAME || j[1]);
                var Y = D.action.replace("/post?", "/post-json?") + "&c=?",
                    Q = Y.indexOf("u=") + 2;
                Q = Y.substring(Q, Y.indexOf("&", Q));
                var J = Y.indexOf("id=") + 3;
                J = Y.substring(J, Y.indexOf("&", J)), H["b_" + Q + "_" + J] = "", e.ajax({
                    url: Y,
                    data: H,
                    dataType: "jsonp"
                }).done(function(X) {
                    D.success = X.result === "success" || /already/.test(X.msg), D.success || console.info("MailChimp error: " + X.msg), M(D)
                }).fail(function() {
                    M(D)
                })
            }

            function M(D) {
                var L = D.form,
                    H = D.redirect,
                    U = D.success;
                if (U && H) {
                    Ls.location(H);
                    return
                }
                D.done.toggle(U), D.fail.toggle(!U), U ? D.done.focus() : D.fail.focus(), L.toggle(!U), x(D)
            }

            function N(D) {
                D.evt && D.evt.preventDefault(), D.evt = null
            }

            function z(D, L) {
                if (!L.fileUploads || !L.fileUploads[D]) return;
                var H, U = e(L.fileUploads[D]),
                    j = U.find("> .w-file-upload-default"),
                    Y = U.find("> .w-file-upload-uploading"),
                    Q = U.find("> .w-file-upload-success"),
                    J = U.find("> .w-file-upload-error"),
                    X = j.find(".w-file-upload-input"),
                    re = j.find(".w-file-upload-label"),
                    Ae = re.children(),
                    he = J.find(".w-file-upload-error-msg"),
                    Ee = Q.find(".w-file-upload-file"),
                    Pe = Q.find(".w-file-remove-link"),
                    Te = Ee.find(".w-file-upload-file-name"),
                    ne = he.attr("data-w-size-error"),
                    Me = he.attr("data-w-type-error"),
                    xt = he.attr("data-w-generic-error");
                if (g || re.on("click keydown", function(B) {
                        B.type === "keydown" && B.which !== 13 && B.which !== 32 || (B.preventDefault(), X.click())
                    }), re.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), Pe.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), g) X.on("click", function(B) {
                    B.preventDefault()
                }), re.on("click", function(B) {
                    B.preventDefault()
                }), Ae.on("click", function(B) {
                    B.preventDefault()
                });
                else {
                    Pe.on("click keydown", function(B) {
                        if (B.type === "keydown") {
                            if (B.which !== 13 && B.which !== 32) return;
                            B.preventDefault()
                        }
                        X.removeAttr("data-value"), X.val(""), Te.html(""), j.toggle(!0), Q.toggle(!1), re.focus()
                    }), X.on("change", function(B) {
                        H = B.target && B.target.files && B.target.files[0], H && (j.toggle(!1), J.toggle(!1), Y.toggle(!0), Y.focus(), Te.text(H.name), G() || T(L), L.fileUploads[D].uploading = !0, $(H, q))
                    });
                    var Je = re.outerHeight();
                    X.height(Je), X.width(1)
                }

                function I(B) {
                    var V = B.responseJSON && B.responseJSON.msg,
                        K = xt;
                    typeof V == "string" && V.indexOf("InvalidFileTypeError") === 0 ? K = Me : typeof V == "string" && V.indexOf("MaxFileSizeError") === 0 && (K = ne), he.text(K), X.removeAttr("data-value"), X.val(""), Y.toggle(!1), j.toggle(!0), J.toggle(!0), J.focus(), L.fileUploads[D].uploading = !1, G() || x(L)
                }

                function q(B, V) {
                    if (B) return I(B);
                    var K = V.fileName,
                        Z = V.postData,
                        oe = V.fileId,
                        W = V.s3Url;
                    X.attr("data-value", oe), A(W, Z, H, K, k)
                }

                function k(B) {
                    if (B) return I(B);
                    Y.toggle(!1), Q.css("display", "inline-block"), Q.focus(), L.fileUploads[D].uploading = !1, G() || x(L)
                }

                function G() {
                    var B = L.fileUploads && L.fileUploads.toArray() || [];
                    return B.some(function(V) {
                        return V.uploading
                    })
                }
            }

            function $(D, L) {
                var H = new URLSearchParams({
                    name: D.name,
                    size: D.size
                });
                e.ajax({
                    type: "GET",
                    url: `${m}?${H}`,
                    crossDomain: !0
                }).done(function(U) {
                    L(null, U)
                }).fail(function(U) {
                    L(U)
                })
            }

            function A(D, L, H, U, j) {
                var Y = new FormData;
                for (var Q in L) Y.append(Q, L[Q]);
                Y.append("file", H, U), e.ajax({
                    type: "POST",
                    url: D,
                    data: Y,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    j(null)
                }).fail(function(J) {
                    j(J)
                })
            }
            return r
        })
    });
    qS();
    NS();
    VS();
    zS();
    US();
    ZS();
    DP();
    RP();
    LP();
    NP();
    GP();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".cookie-iteraction",
                "originalId": "ee57df41-dec8-4a2c-ccfc-db46ff7b4770",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".cookie-iteraction",
                "originalId": "ee57df41-dec8-4a2c-ccfc-db46ff7b4770",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667386017529
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".cookie-iteraction",
                "originalId": "ee57df41-dec8-4a2c-ccfc-db46ff7b4770",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".cookie-iteraction",
                "originalId": "ee57df41-dec8-4a2c-ccfc-db46ff7b4770",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667386017530
        }
    },
    "actionLists": {
        "a-4": {
            "id": "a-4",
            "title": "COOKIES - OPEN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".fs-cc-banner2_component",
                            "selectorGuids": ["2e59a28f-d205-a201-9a77-6235aa9110c6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".fs-cc-banner2_component",
                            "selectorGuids": ["2e59a28f-d205-a201-9a77-6235aa9110c6"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".fs-cc-banner2_component",
                            "selectorGuids": ["2e59a28f-d205-a201-9a77-6235aa9110c6"]
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 5000,
                        "easing": "ease",
                        "duration": 2000,
                        "target": {
                            "selector": ".fs-cc-banner2_component",
                            "selectorGuids": ["2e59a28f-d205-a201-9a77-6235aa9110c6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667385421235
        },
        "a-5": {
            "id": "a-5",
            "title": "COOKIES - CLOSE",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "selector": ".fs-cc-banner2_component",
                            "selectorGuids": ["2e59a28f-d205-a201-9a77-6235aa9110c6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-banner2_component",
                            "selectorGuids": ["2e59a28f-d205-a201-9a77-6235aa9110c6"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1667385421235
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});