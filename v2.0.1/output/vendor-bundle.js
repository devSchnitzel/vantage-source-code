function _aureliaConfigureModuleLoader() {
    requirejs.config({
        baseUrl: "src/",
        paths: {
            electron: "../aurelia_project/native/electron",
            assert: "../aurelia_project/native/assert",
            buffer: "../aurelia_project/native/buffer",
            child_process: "../aurelia_project/native/child_process",
            crypto: "../aurelia_project/native/crypto",
            events: "../aurelia_project/native/events",
            fs: "../aurelia_project/native/fs",
            http: "../aurelia_project/native/http",
            https: "../aurelia_project/native/https",
            net: "../aurelia_project/native/net",
            os: "../aurelia_project/native/os",
            path: "../aurelia_project/native/path",
            stream: "../aurelia_project/native/stream",
            timers: "../aurelia_project/native/timers",
            tls: "../aurelia_project/native/tls",
            url: "../aurelia_project/native/url",
            util: "../aurelia_project/native/util",
            zlib: "../aurelia_project/native/zlib",
            text: "../node_modules/text/text",
            tslib: "..\\node_modules\\tslib\\tslib",
            "aurelia-animator-css": "..\\node_modules\\aurelia-animator-css\\dist\\amd\\aurelia-animator-css",
            "aurelia-dependency-injection": "..\\node_modules\\aurelia-dependency-injection\\dist\\amd\\aurelia-dependency-injection",
            "aurelia-binding": "..\\node_modules\\aurelia-binding\\dist\\amd\\aurelia-binding",
            "aurelia-event-aggregator": "..\\node_modules\\aurelia-event-aggregator\\dist\\amd\\aurelia-event-aggregator",
            "aurelia-bootstrapper": "..\\node_modules\\aurelia-bootstrapper\\dist\\amd\\aurelia-bootstrapper",
            "aurelia-fetch-client": "..\\node_modules\\aurelia-fetch-client\\dist\\amd\\aurelia-fetch-client",
            "aurelia-framework": "..\\node_modules\\aurelia-framework\\dist\\amd\\aurelia-framework",
            "aurelia-http-client": "..\\node_modules\\aurelia-http-client\\dist\\amd\\aurelia-http-client",
            "aurelia-history": "..\\node_modules\\aurelia-history\\dist\\amd\\aurelia-history",
            "aurelia-history-browser": "..\\node_modules\\aurelia-history-browser\\dist\\amd\\aurelia-history-browser",
            "aurelia-loader": "..\\node_modules\\aurelia-loader\\dist\\amd\\aurelia-loader",
            "aurelia-loader-default": "..\\node_modules\\aurelia-loader-default\\dist\\amd\\aurelia-loader-default",
            "aurelia-logging-console": "..\\node_modules\\aurelia-logging-console\\dist\\amd\\aurelia-logging-console",
            "aurelia-logging": "..\\node_modules\\aurelia-logging\\dist\\amd\\aurelia-logging",
            "aurelia-metadata": "..\\node_modules\\aurelia-metadata\\dist\\amd\\aurelia-metadata",
            "aurelia-pal-browser": "..\\node_modules\\aurelia-pal-browser\\dist\\amd\\aurelia-pal-browser",
            "aurelia-path": "..\\node_modules\\aurelia-path\\dist\\amd\\aurelia-path",
            "aurelia-pal": "..\\node_modules\\aurelia-pal\\dist\\amd\\aurelia-pal",
            "aurelia-route-recognizer": "..\\node_modules\\aurelia-route-recognizer\\dist\\amd\\aurelia-route-recognizer",
            "aurelia-polyfills": "..\\node_modules\\aurelia-polyfills\\dist\\amd\\aurelia-polyfills",
            "aurelia-router": "..\\node_modules\\aurelia-router\\dist\\amd\\aurelia-router",
            "aurelia-task-queue": "..\\node_modules\\aurelia-task-queue\\dist\\amd\\aurelia-task-queue",
            "aurelia-templating": "..\\node_modules\\aurelia-templating\\dist\\amd\\aurelia-templating",
            "aurelia-templating-binding": "..\\node_modules\\aurelia-templating-binding\\dist\\amd\\aurelia-templating-binding",
            moment: "..\\node_modules\\moment\\moment",
            extend: "..\\node_modules\\extend\\index",
            semver: "..\\node_modules\\semver\\semver",
            yauzl: "..\\node_modules\\yauzl\\index",
            "fd-slicer": "..\\node_modules\\fd-slicer\\index",
            "buffer-crc32": "..\\node_modules\\buffer-crc32\\index",
            pend: "..\\node_modules\\pend\\index",
            "tarball-extract": "..\\node_modules\\tarball-extract\\tarball",
            minipass: "..\\node_modules\\minipass\\index",
            yallist: "..\\node_modules\\yallist\\yallist",
            string_decoder: "..\\node_modules\\string_decoder\\lib\\string_decoder",
            "safe-buffer": "..\\node_modules\\safe-buffer\\index",
            mkdirp: "..\\node_modules\\mkdirp\\index",
            "app-bundle": "../output/app-bundle"
        },
        packages: [{
            name: "tunnel",
            location: "../node_modules/tunnel",
            main: "index"
        }, {
            name: "wget",
            location: "../node_modules/wget",
            main: "index"
        }, {
            name: "minizlib",
            location: "../node_modules/minizlib",
            main: "index"
        }, {
            name: "tar",
            location: "../node_modules/tar",
            main: "index"
        }, {
            name: "aurelia-templating-resources",
            location: "../node_modules/aurelia-templating-resources/dist/amd",
            main: "aurelia-templating-resources"
        }, {
            name: "aurelia-dialog",
            location: "../node_modules/aurelia-dialog/dist/amd",
            main: "aurelia-dialog"
        }, {
            name: "aurelia-templating-router",
            location: "../node_modules/aurelia-templating-router/dist/amd",
            main: "aurelia-templating-router"
        }],
        stubModules: ["text"],
        shim: {},
        bundles: {
            "app-bundle": ["environment", "api", "main", "utility/electron", "utility/disposable", "utility/async", "utility/fs", "editor/editor-provider", "utility/uuid", "editor/editor-manager", "app/disclaimer-dialog", "utility/dialog", "app/install-dialog", "utility/config", "app/update-dialog", "utility/ga", "app/routes", "app/app", "auth/gamercard", "auth/auth-dialog", "auth/auth", "editor/development", "storage/save-storage", "storage/cloud-save-storage", "editor/editor", "editor/providers/github-editor-provider", "editor/providers/disk-editor-provider", "editor/providers/npm-editor-provider", "editor/index", "storage/local-save-storage", "resources/index", "welcome/welcome", "resources/custom-attributes/close-if-click-outside", "resources/custom-attributes/external-href", "resources/elements/inline-svg", "resources/elements/number-input", "resources/elements/selection-input", "resources/value-converters/array", "resources/value-converters/env", "resources/value-converters/number", "resources/value-converters/object", "resources/value-converters/string", "resources/value-converters/time", "app/resources/elements/app-header", "app/resources/elements/donation", "app/resources/elements/games", "app/resources/elements/profile", "app/resources/elements/storage-explorer", "app/resources/elements/support", "app/resources/elements/window-controls", "editor/resources/elements/file-selector", "aurelia-dialog/ai-dialog", "aurelia-dialog/ai-dialog-header", "aurelia-dialog/dialog-controller", "aurelia-dialog/lifecycle", "aurelia-dialog/dialog-result", "aurelia-dialog/ai-dialog-body", "aurelia-dialog/ai-dialog-footer", "aurelia-dialog/attach-focus", "aurelia-dialog/dialog-configuration", "aurelia-dialog/renderer", "aurelia-dialog/dialog-renderer", "aurelia-dialog/dialog-options", "aurelia-dialog/dialog-service", "tar/lib/create", "tar/lib/high-level-opt", "tar/lib/pack", "minizlib/constants", "tar/lib/read-entry", "tar/lib/types", "tar/lib/write-entry", "tar/lib/pax", "tar/lib/header", "tar/lib/large-numbers", "tar/lib/warn-mixin", "tar/lib/winchars", "tar/lib/list", "tar/lib/parse", "tar/lib/replace", "tar/lib/update", "tar/lib/extract", "tar/lib/unpack", "tar/lib/mkdir", "wget/lib/wget", "tunnel/lib/tunnel", "app/constants", "app/utilities", "resources/elements/close-button", "resources/elements/progress-bar", "resources/elements/range-input", "resources/elements/status-ring", "resources/elements/status-tip", "app/resources/elements/sidebar"]
        }
    })
}! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.Promise = e()
    }
}(function() {
    var e, t, n;
    return function e(t, n, r) {
        function i(s, a) {
            if (!n[s]) {
                if (!t[s]) {
                    var u = "function" == typeof _dereq_ && _dereq_;
                    if (!a && u) return u(s, !0);
                    if (o) return o(s, !0);
                    var l = new Error("Cannot find module '" + s + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var c = n[s] = {
                    exports: {}
                };
                t[s][0].call(c.exports, function(e) {
                    var n = t[s][1][e];
                    return i(n || e)
                }, c, c.exports, e, t, n, r)
            }
            return n[s].exports
        }
        for (var o = "function" == typeof _dereq_ && _dereq_, s = 0; s < r.length; s++) i(r[s]);
        return i
    }({
        1: [function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                function t(e) {
                    var t = new n(e),
                        r = t.promise();
                    return t.setHowMany(1), t.setUnwrap(), t.init(), r
                }
                var n = e._SomePromiseArray;
                e.any = function(e) {
                    return t(e)
                }, e.prototype.any = function() {
                    return t(this)
                }
            }
        }, {}],
        2: [function(e, t, n) {
            "use strict";

            function r() {
                this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new l(16), this._normalQueue = new l(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
                var e = this;
                this.drainQueues = function() {
                    e._drainQueues()
                }, this._schedule = u
            }

            function i(e, t, n) {
                this._lateQueue.push(e, t, n), this._queueTick()
            }

            function o(e, t, n) {
                this._normalQueue.push(e, t, n), this._queueTick()
            }

            function s(e) {
                this._normalQueue._pushOne(e), this._queueTick()
            }
            var a;
            try {
                throw new Error
            } catch (e) {
                a = e
            }
            var u = e("./schedule"),
                l = e("./queue"),
                c = e("./util");
            r.prototype.setScheduler = function(e) {
                var t = this._schedule;
                return this._schedule = e, this._customScheduler = !0, t
            }, r.prototype.hasCustomScheduler = function() {
                return this._customScheduler
            }, r.prototype.enableTrampoline = function() {
                this._trampolineEnabled = !0
            }, r.prototype.disableTrampolineIfNecessary = function() {
                c.hasDevTools && (this._trampolineEnabled = !1)
            }, r.prototype.haveItemsQueued = function() {
                return this._isTickUsed || this._haveDrainedQueues
            }, r.prototype.fatalError = function(e, t) {
                t ? (process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n"), process.exit(2)) : this.throwLater(e)
            }, r.prototype.throwLater = function(e, t) {
                if (1 === arguments.length && (t = e, e = function() {
                        throw t
                    }), "undefined" != typeof setTimeout) setTimeout(function() {
                    e(t)
                }, 0);
                else try {
                    this._schedule(function() {
                        e(t)
                    })
                } catch (e) {
                    throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                }
            }, c.hasDevTools ? (r.prototype.invokeLater = function(e, t, n) {
                this._trampolineEnabled ? i.call(this, e, t, n) : this._schedule(function() {
                    setTimeout(function() {
                        e.call(t, n)
                    }, 100)
                })
            }, r.prototype.invoke = function(e, t, n) {
                this._trampolineEnabled ? o.call(this, e, t, n) : this._schedule(function() {
                    e.call(t, n)
                })
            }, r.prototype.settlePromises = function(e) {
                this._trampolineEnabled ? s.call(this, e) : this._schedule(function() {
                    e._settlePromises()
                })
            }) : (r.prototype.invokeLater = i, r.prototype.invoke = o, r.prototype.settlePromises = s), r.prototype._drainQueue = function(e) {
                for (; e.length() > 0;) {
                    var t = e.shift();
                    if ("function" == typeof t) {
                        var n = e.shift(),
                            r = e.shift();
                        t.call(n, r)
                    } else t._settlePromises()
                }
            }, r.prototype._drainQueues = function() {
                this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, this._drainQueue(this._lateQueue)
            }, r.prototype._queueTick = function() {
                this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues))
            }, r.prototype._reset = function() {
                this._isTickUsed = !1
            }, t.exports = r, t.exports.firstLineError = a
        }, {
            "./queue": 26,
            "./schedule": 29,
            "./util": 36
        }],
        3: [function(e, t, n) {
            "use strict";
            t.exports = function(e, t, n, r) {
                var i = !1,
                    o = function(e, t) {
                        this._reject(t)
                    },
                    s = function(e, t) {
                        t.promiseRejectionQueued = !0, t.bindingPromise._then(o, o, null, this, e)
                    },
                    a = function(e, t) {
                        0 == (50397184 & this._bitField) && this._resolveCallback(t.target)
                    },
                    u = function(e, t) {
                        t.promiseRejectionQueued || this._reject(e)
                    };
                e.prototype.bind = function(o) {
                    i || (i = !0, e.prototype._propagateFrom = r.propagateFromFunction(), e.prototype._boundValue = r.boundValueFunction());
                    var l = n(o),
                        c = new e(t);
                    c._propagateFrom(this, 1);
                    var h = this._target();
                    if (c._setBoundTo(l), l instanceof e) {
                        var d = {
                            promiseRejectionQueued: !1,
                            promise: c,
                            target: h,
                            bindingPromise: l
                        };
                        h._then(t, s, void 0, c, d), l._then(a, u, void 0, c, d), c._setOnCancel(l)
                    } else c._resolveCallback(h);
                    return c
                }, e.prototype._setBoundTo = function(e) {
                    void 0 !== e ? (this._bitField = 2097152 | this._bitField, this._boundTo = e) : this._bitField = -2097153 & this._bitField
                }, e.prototype._isBound = function() {
                    return 2097152 == (2097152 & this._bitField)
                }, e.bind = function(t, n) {
                    return e.resolve(n).bind(t)
                }
            }
        }, {}],
        4: [function(e, t, n) {
            "use strict";

            function r() {
                try {
                    Promise === o && (Promise = i)
                } catch (e) {}
                return o
            }
            var i;
            "undefined" != typeof Promise && (i = Promise);
            var o = e("./promise")();
            o.noConflict = r, t.exports = o
        }, {
            "./promise": 22
        }],
        5: [function(e, t, n) {
            "use strict";
            var r = Object.create;
            if (r) {
                var i = r(null),
                    o = r(null);
                i[" size"] = o[" size"] = 0
            }
            t.exports = function(t) {
                function n(e, n) {
                    var r;
                    if (null != e && (r = e[n]), "function" != typeof r) {
                        var i = "Object " + a.classString(e) + " has no method '" + a.toString(n) + "'";
                        throw new t.TypeError(i)
                    }
                    return r
                }

                function r(e) {
                    return n(e, this.pop()).apply(e, this)
                }

                function i(e) {
                    return e[this]
                }

                function o(e) {
                    var t = +this;
                    return t < 0 && (t = Math.max(0, t + e.length)), e[t]
                }
                var s, a = e("./util"),
                    u = a.canEvaluate;
                a.isIdentifier;
                t.prototype.call = function(e) {
                    var t = [].slice.call(arguments, 1);
                    return t.push(e), this._then(r, void 0, void 0, t, void 0)
                }, t.prototype.get = function(e) {
                    var t, n = "number" == typeof e;
                    if (n) t = o;
                    else if (u) {
                        var r = s(e);
                        t = null !== r ? r : i
                    } else t = i;
                    return this._then(t, void 0, void 0, e, void 0)
                }
            }
        }, {
            "./util": 36
        }],
        6: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r, i) {
                var o = e("./util"),
                    s = o.tryCatch,
                    a = o.errorObj,
                    u = t._async;
                t.prototype.break = t.prototype.cancel = function() {
                    if (!i.cancellation()) return this._warn("cancellation is disabled");
                    for (var e = this, t = e; e._isCancellable();) {
                        if (!e._cancelBy(t)) {
                            t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
                            break
                        }
                        var n = e._cancellationParent;
                        if (null == n || !n._isCancellable()) {
                            e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
                            break
                        }
                        e._isFollowing() && e._followee().cancel(), e._setWillBeCancelled(), t = e, e = n
                    }
                }, t.prototype._branchHasCancelled = function() {
                    this._branchesRemainingToCancel--
                }, t.prototype._enoughBranchesHaveCancelled = function() {
                    return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0
                }, t.prototype._cancelBy = function(e) {
                    return e === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), !0))
                }, t.prototype._cancelBranched = function() {
                    this._enoughBranchesHaveCancelled() && this._cancel()
                }, t.prototype._cancel = function() {
                    this._isCancellable() && (this._setCancelled(), u.invoke(this._cancelPromises, this, void 0))
                }, t.prototype._cancelPromises = function() {
                    this._length() > 0 && this._settlePromises()
                }, t.prototype._unsetOnCancel = function() {
                    this._onCancelField = void 0
                }, t.prototype._isCancellable = function() {
                    return this.isPending() && !this._isCancelled()
                }, t.prototype.isCancellable = function() {
                    return this.isPending() && !this.isCancelled()
                }, t.prototype._doInvokeOnCancel = function(e, t) {
                    if (o.isArray(e))
                        for (var n = 0; n < e.length; ++n) this._doInvokeOnCancel(e[n], t);
                    else if (void 0 !== e)
                        if ("function" == typeof e) {
                            if (!t) {
                                var r = s(e).call(this._boundValue());
                                r === a && (this._attachExtraTrace(r.e), u.throwLater(r.e))
                            }
                        } else e._resultCancelled(this)
                }, t.prototype._invokeOnCancel = function() {
                    var e = this._onCancel();
                    this._unsetOnCancel(), u.invoke(this._doInvokeOnCancel, this, e)
                }, t.prototype._invokeInternalOnCancel = function() {
                    this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel())
                }, t.prototype._resultCancelled = function() {
                    this.cancel()
                }
            }
        }, {
            "./util": 36
        }],
        7: [function(e, t, n) {
            "use strict";
            t.exports = function(t) {
                function n(e, n, a) {
                    return function(u) {
                        var l = a._boundValue();
                        e: for (var c = 0; c < e.length; ++c) {
                            var h = e[c];
                            if (h === Error || null != h && h.prototype instanceof Error) {
                                if (u instanceof h) return o(n).call(l, u)
                            } else if ("function" == typeof h) {
                                var d = o(h).call(l, u);
                                if (d === s) return d;
                                if (d) return o(n).call(l, u)
                            } else if (r.isObject(u)) {
                                for (var p = i(h), f = 0; f < p.length; ++f) {
                                    var v = p[f];
                                    if (h[v] != u[v]) continue e
                                }
                                return o(n).call(l, u)
                            }
                        }
                        return t
                    }
                }
                var r = e("./util"),
                    i = e("./es5").keys,
                    o = r.tryCatch,
                    s = r.errorObj;
                return n
            }
        }, {
            "./es5": 13,
            "./util": 36
        }],
        8: [function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                function t() {
                    this._trace = new t.CapturedTrace(r())
                }

                function n() {
                    if (i) return new t
                }

                function r() {
                    var e = o.length - 1;
                    if (e >= 0) return o[e]
                }
                var i = !1,
                    o = [];
                return e.prototype._promiseCreated = function() {}, e.prototype._pushContext = function() {}, e.prototype._popContext = function() {
                    return null
                }, e._peekContext = e.prototype._peekContext = function() {}, t.prototype._pushContext = function() {
                    void 0 !== this._trace && (this._trace._promiseCreated = null, o.push(this._trace))
                }, t.prototype._popContext = function() {
                    if (void 0 !== this._trace) {
                        var e = o.pop(),
                            t = e._promiseCreated;
                        return e._promiseCreated = null, t
                    }
                    return null
                }, t.CapturedTrace = null, t.create = n, t.deactivateLongStackTraces = function() {}, t.activateLongStackTraces = function() {
                    var n = e.prototype._pushContext,
                        o = e.prototype._popContext,
                        s = e._peekContext,
                        a = e.prototype._peekContext,
                        u = e.prototype._promiseCreated;
                    t.deactivateLongStackTraces = function() {
                        e.prototype._pushContext = n, e.prototype._popContext = o, e._peekContext = s, e.prototype._peekContext = a, e.prototype._promiseCreated = u, i = !1
                    }, i = !0, e.prototype._pushContext = t.prototype._pushContext, e.prototype._popContext = t.prototype._popContext, e._peekContext = e.prototype._peekContext = r, e.prototype._promiseCreated = function() {
                        var e = this._peekContext();
                        e && null == e._promiseCreated && (e._promiseCreated = this)
                    }
                }, t
            }
        }, {}],
        9: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n) {
                function r(e, t) {
                    return {
                        promise: t
                    }
                }

                function i() {
                    return !1
                }

                function o(e, t, n) {
                    var r = this;
                    try {
                        e(t, n, function(e) {
                            if ("function" != typeof e) throw new TypeError("onCancel must be a function, got: " + I.toString(e));
                            r._attachCancellationCallback(e)
                        })
                    } catch (e) {
                        return e
                    }
                }

                function s(e) {
                    if (!this._isCancellable()) return this;
                    var t = this._onCancel();
                    void 0 !== t ? I.isArray(t) ? t.push(e) : this._setOnCancel([t, e]) : this._setOnCancel(e)
                }

                function a() {
                    return this._onCancelField
                }

                function u(e) {
                    this._onCancelField = e
                }

                function l() {
                    this._cancellationParent = void 0, this._onCancelField = void 0
                }

                function c(e, t) {
                    if (0 != (1 & t)) {
                        this._cancellationParent = e;
                        var n = e._branchesRemainingToCancel;
                        void 0 === n && (n = 0), e._branchesRemainingToCancel = n + 1
                    }
                    0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo)
                }

                function h(e, t) {
                    0 != (2 & t) && e._isBound() && this._setBoundTo(e._boundTo)
                }

                function d() {
                    var e = this._boundTo;
                    return void 0 !== e && e instanceof t ? e.isFulfilled() ? e.value() : void 0 : e
                }

                function p() {
                    this._trace = new P(this._peekContext())
                }

                function f(e, t) {
                    if (V(e)) {
                        var n = this._trace;
                        if (void 0 !== n && t && (n = n._parent), void 0 !== n) n.attachExtraTrace(e);
                        else if (!e.__stackCleaned__) {
                            var r = S(e);
                            I.notEnumerableProp(e, "stack", r.message + "\n" + r.stack.join("\n")), I.notEnumerableProp(e, "__stackCleaned__", !0)
                        }
                    }
                }

                function v(e, t, n, r, i) {
                    if (void 0 === e && null !== t && Q) {
                        if (void 0 !== i && i._returnedNonUndefined()) return;
                        if (0 == (65535 & r._bitField)) return;
                        n && (n += " ");
                        var o = "",
                            s = "";
                        if (t._trace) {
                            for (var a = t._trace.stack.split("\n"), u = _(a), l = u.length - 1; l >= 0; --l) {
                                var c = u[l];
                                if (!q.test(c)) {
                                    var h = c.match(z);
                                    h && (o = "at " + h[1] + ":" + h[2] + ":" + h[3] + " ");
                                    break
                                }
                            }
                            if (u.length > 0)
                                for (var d = u[0], l = 0; l < a.length; ++l)
                                    if (a[l] === d) {
                                        l > 0 && (s = "\n" + a[l - 1]);
                                        break
                                    }
                        }
                        var p = "a promise was created in a " + n + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + s;
                        r._warn(p, !0, t)
                    }
                }

                function m(e, t) {
                    var n = e + " is deprecated and will be removed in a future version.";
                    return t && (n += " Use " + t + " instead."), g(n)
                }

                function g(e, n, r) {
                    if (oe.warnings) {
                        var i, o = new D(e);
                        if (n) r._attachExtraTrace(o);
                        else if (oe.longStackTraces && (i = t._peekContext())) i.attachExtraTrace(o);
                        else {
                            var s = S(o);
                            o.stack = s.message + "\n" + s.stack.join("\n")
                        }
                        ee("warning", o) || C(o, "", !0)
                    }
                }

                function y(e, t) {
                    for (var n = 0; n < t.length - 1; ++n) t[n].push("From previous event:"), t[n] = t[n].join("\n");
                    return n < t.length && (t[n] = t[n].join("\n")), e + "\n" + t.join("\n")
                }

                function b(e) {
                    for (var t = 0; t < e.length; ++t)(0 === e[t].length || t + 1 < e.length && e[t][0] === e[t + 1][0]) && (e.splice(t, 1), t--)
                }

                function w(e) {
                    for (var t = e[0], n = 1; n < e.length; ++n) {
                        for (var r = e[n], i = t.length - 1, o = t[i], s = -1, a = r.length - 1; a >= 0; --a)
                            if (r[a] === o) {
                                s = a;
                                break
                            } for (var a = s; a >= 0; --a) {
                            var u = r[a];
                            if (t[i] !== u) break;
                            t.pop(), i--
                        }
                        t = r
                    }
                }

                function _(e) {
                    for (var t = [], n = 0; n < e.length; ++n) {
                        var r = e[n],
                            i = "    (No stack trace)" === r || H.test(r),
                            o = i && ne(r);
                        i && !o && (Y && " " !== r.charAt(0) && (r = "    " + r), t.push(r))
                    }
                    return t
                }

                function x(e) {
                    for (var t = e.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < t.length; ++n) {
                        var r = t[n];
                        if ("    (No stack trace)" === r || H.test(r)) break
                    }
                    return n > 0 && "SyntaxError" != e.name && (t = t.slice(n)), t
                }

                function S(e) {
                    var t = e.stack,
                        n = e.toString();
                    return t = "string" == typeof t && t.length > 0 ? x(e) : ["    (No stack trace)"], {
                        message: n,
                        stack: "SyntaxError" == e.name ? t : _(t)
                    }
                }

                function C(e, t, n) {
                    if ("undefined" != typeof console) {
                        var r;
                        if (I.isObject(e)) {
                            var i = e.stack;
                            r = t + U(i, e)
                        } else r = t + String(e);
                        "function" == typeof L ? L(r, n) : "function" != typeof console.log && "object" != typeof console.log || console.log(r)
                    }
                }

                function k(e, t, n, r) {
                    var i = !1;
                    try {
                        "function" == typeof t && (i = !0, "rejectionHandled" === e ? t(r) : t(n, r))
                    } catch (e) {
                        N.throwLater(e)
                    }
                    "unhandledRejection" === e ? ee(e, n, r) || i || C(n, "Unhandled rejection ") : ee(e, r)
                }

                function E(e) {
                    var t;
                    if ("function" == typeof e) t = "[function " + (e.name || "anonymous") + "]";
                    else {
                        t = e && "function" == typeof e.toString ? e.toString() : I.toString(e);
                        if (/\[object [a-zA-Z0-9$_]+\]/.test(t)) try {
                            t = JSON.stringify(e)
                        } catch (e) {}
                        0 === t.length && (t = "(empty array)")
                    }
                    return "(<" + O(t) + ">, no stack trace)"
                }

                function O(e) {
                    return e.length < 41 ? e : e.substr(0, 38) + "..."
                }

                function M() {
                    return "function" == typeof ie
                }

                function R(e) {
                    var t = e.match(re);
                    if (t) return {
                        fileName: t[1],
                        line: parseInt(t[2], 10)
                    }
                }

                function A(e, t) {
                    if (M()) {
                        for (var n, r, i = e.stack.split("\n"), o = t.stack.split("\n"), s = -1, a = -1, u = 0; u < i.length; ++u) {
                            var l = R(i[u]);
                            if (l) {
                                n = l.fileName, s = l.line;
                                break
                            }
                        }
                        for (var u = 0; u < o.length; ++u) {
                            var l = R(o[u]);
                            if (l) {
                                r = l.fileName, a = l.line;
                                break
                            }
                        }
                        s < 0 || a < 0 || !n || !r || n !== r || s >= a || (ne = function(e) {
                            if (B.test(e)) return !0;
                            var t = R(e);
                            return !!(t && t.fileName === n && s <= t.line && t.line <= a)
                        })
                    }
                }

                function P(e) {
                    this._parent = e, this._promisesCreated = 0;
                    var t = this._length = 1 + (void 0 === e ? 0 : e._length);
                    ie(this, P), t > 32 && this.uncycle()
                }
                var T, j, L, F = t._getDomain,
                    N = t._async,
                    D = e("./errors").Warning,
                    I = e("./util"),
                    V = I.canAttachTrace,
                    B = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
                    q = /\((?:timers\.js):\d+:\d+\)/,
                    z = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
                    H = null,
                    U = null,
                    Y = !1,
                    W = !(0 == I.env("BLUEBIRD_DEBUG")),
                    G = !(0 == I.env("BLUEBIRD_WARNINGS") || !W && !I.env("BLUEBIRD_WARNINGS")),
                    $ = !(0 == I.env("BLUEBIRD_LONG_STACK_TRACES") || !W && !I.env("BLUEBIRD_LONG_STACK_TRACES")),
                    Q = 0 != I.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (G || !!I.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
                t.prototype.suppressUnhandledRejections = function() {
                    var e = this._target();
                    e._bitField = -1048577 & e._bitField | 524288
                }, t.prototype._ensurePossibleRejectionHandled = function() {
                    0 == (524288 & this._bitField) && (this._setRejectionIsUnhandled(), N.invokeLater(this._notifyUnhandledRejection, this, void 0))
                }, t.prototype._notifyUnhandledRejectionIsHandled = function() {
                    k("rejectionHandled", T, void 0, this)
                }, t.prototype._setReturnedNonUndefined = function() {
                    this._bitField = 268435456 | this._bitField
                }, t.prototype._returnedNonUndefined = function() {
                    return 0 != (268435456 & this._bitField)
                }, t.prototype._notifyUnhandledRejection = function() {
                    if (this._isRejectionUnhandled()) {
                        var e = this._settledValue();
                        this._setUnhandledRejectionIsNotified(), k("unhandledRejection", j, e, this)
                    }
                }, t.prototype._setUnhandledRejectionIsNotified = function() {
                    this._bitField = 262144 | this._bitField
                }, t.prototype._unsetUnhandledRejectionIsNotified = function() {
                    this._bitField = -262145 & this._bitField
                }, t.prototype._isUnhandledRejectionNotified = function() {
                    return (262144 & this._bitField) > 0
                }, t.prototype._setRejectionIsUnhandled = function() {
                    this._bitField = 1048576 | this._bitField
                }, t.prototype._unsetRejectionIsUnhandled = function() {
                    this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled())
                }, t.prototype._isRejectionUnhandled = function() {
                    return (1048576 & this._bitField) > 0
                }, t.prototype._warn = function(e, t, n) {
                    return g(e, t, n || this)
                }, t.onPossiblyUnhandledRejection = function(e) {
                    var t = F();
                    j = "function" == typeof e ? null === t ? e : I.domainBind(t, e) : void 0
                }, t.onUnhandledRejectionHandled = function(e) {
                    var t = F();
                    T = "function" == typeof e ? null === t ? e : I.domainBind(t, e) : void 0
                };
                var Z = function() {};
                t.longStackTraces = function() {
                    if (N.haveItemsQueued() && !oe.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                    if (!oe.longStackTraces && M()) {
                        var e = t.prototype._captureStackTrace,
                            r = t.prototype._attachExtraTrace;
                        oe.longStackTraces = !0, Z = function() {
                            if (N.haveItemsQueued() && !oe.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                            t.prototype._captureStackTrace = e, t.prototype._attachExtraTrace = r, n.deactivateLongStackTraces(), N.enableTrampoline(), oe.longStackTraces = !1
                        }, t.prototype._captureStackTrace = p, t.prototype._attachExtraTrace = f, n.activateLongStackTraces(), N.disableTrampolineIfNecessary()
                    }
                }, t.hasLongStackTraces = function() {
                    return oe.longStackTraces && M()
                };
                var K = function() {
                        try {
                            if ("function" == typeof CustomEvent) {
                                var e = new CustomEvent("CustomEvent");
                                return I.global.dispatchEvent(e),
                                    function(e, t) {
                                        var n = new CustomEvent(e.toLowerCase(), {
                                            detail: t,
                                            cancelable: !0
                                        });
                                        return !I.global.dispatchEvent(n)
                                    }
                            }
                            if ("function" == typeof Event) {
                                var e = new Event("CustomEvent");
                                return I.global.dispatchEvent(e),
                                    function(e, t) {
                                        var n = new Event(e.toLowerCase(), {
                                            cancelable: !0
                                        });
                                        return n.detail = t, !I.global.dispatchEvent(n)
                                    }
                            }
                            var e = document.createEvent("CustomEvent");
                            return e.initCustomEvent("testingtheevent", !1, !0, {}), I.global.dispatchEvent(e),
                                function(e, t) {
                                    var n = document.createEvent("CustomEvent");
                                    return n.initCustomEvent(e.toLowerCase(), !1, !0, t), !I.global.dispatchEvent(n)
                                }
                        } catch (e) {}
                        return function() {
                            return !1
                        }
                    }(),
                    X = function() {
                        return I.isNode ? function() {
                            return process.emit.apply(process, arguments)
                        } : I.global ? function(e) {
                            var t = "on" + e.toLowerCase(),
                                n = I.global[t];
                            return !!n && (n.apply(I.global, [].slice.call(arguments, 1)), !0)
                        } : function() {
                            return !1
                        }
                    }(),
                    J = {
                        promiseCreated: r,
                        promiseFulfilled: r,
                        promiseRejected: r,
                        promiseResolved: r,
                        promiseCancelled: r,
                        promiseChained: function(e, t, n) {
                            return {
                                promise: t,
                                child: n
                            }
                        },
                        warning: function(e, t) {
                            return {
                                warning: t
                            }
                        },
                        unhandledRejection: function(e, t, n) {
                            return {
                                reason: t,
                                promise: n
                            }
                        },
                        rejectionHandled: r
                    },
                    ee = function(e) {
                        var t = !1;
                        try {
                            t = X.apply(null, arguments)
                        } catch (e) {
                            N.throwLater(e), t = !0
                        }
                        var n = !1;
                        try {
                            n = K(e, J[e].apply(null, arguments))
                        } catch (e) {
                            N.throwLater(e), n = !0
                        }
                        return n || t
                    };
                t.config = function(e) {
                    if (e = Object(e), "longStackTraces" in e && (e.longStackTraces ? t.longStackTraces() : !e.longStackTraces && t.hasLongStackTraces() && Z()), "warnings" in e) {
                        var n = e.warnings;
                        oe.warnings = !!n, Q = oe.warnings, I.isObject(n) && "wForgottenReturn" in n && (Q = !!n.wForgottenReturn)
                    }
                    if ("cancellation" in e && e.cancellation && !oe.cancellation) {
                        if (N.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
                        t.prototype._clearCancellationData = l, t.prototype._propagateFrom = c, t.prototype._onCancel = a, t.prototype._setOnCancel = u, t.prototype._attachCancellationCallback = s, t.prototype._execute = o, te = c, oe.cancellation = !0
                    }
                    return "monitoring" in e && (e.monitoring && !oe.monitoring ? (oe.monitoring = !0, t.prototype._fireEvent = ee) : !e.monitoring && oe.monitoring && (oe.monitoring = !1, t.prototype._fireEvent = i)), t
                }, t.prototype._fireEvent = i, t.prototype._execute = function(e, t, n) {
                    try {
                        e(t, n)
                    } catch (e) {
                        return e
                    }
                }, t.prototype._onCancel = function() {}, t.prototype._setOnCancel = function(e) {}, t.prototype._attachCancellationCallback = function(e) {}, t.prototype._captureStackTrace = function() {}, t.prototype._attachExtraTrace = function() {}, t.prototype._clearCancellationData = function() {}, t.prototype._propagateFrom = function(e, t) {};
                var te = h,
                    ne = function() {
                        return !1
                    },
                    re = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                I.inherits(P, Error), n.CapturedTrace = P, P.prototype.uncycle = function() {
                    var e = this._length;
                    if (!(e < 2)) {
                        for (var t = [], n = {}, r = 0, i = this; void 0 !== i; ++r) t.push(i), i = i._parent;
                        e = this._length = r;
                        for (var r = e - 1; r >= 0; --r) {
                            var o = t[r].stack;
                            void 0 === n[o] && (n[o] = r)
                        }
                        for (var r = 0; r < e; ++r) {
                            var s = t[r].stack,
                                a = n[s];
                            if (void 0 !== a && a !== r) {
                                a > 0 && (t[a - 1]._parent = void 0, t[a - 1]._length = 1), t[r]._parent = void 0, t[r]._length = 1;
                                var u = r > 0 ? t[r - 1] : this;
                                a < e - 1 ? (u._parent = t[a + 1], u._parent.uncycle(), u._length = u._parent._length + 1) : (u._parent = void 0, u._length = 1);
                                for (var l = u._length + 1, c = r - 2; c >= 0; --c) t[c]._length = l, l++;
                                return
                            }
                        }
                    }
                }, P.prototype.attachExtraTrace = function(e) {
                    if (!e.__stackCleaned__) {
                        this.uncycle();
                        for (var t = S(e), n = t.message, r = [t.stack], i = this; void 0 !== i;) r.push(_(i.stack.split("\n"))), i = i._parent;
                        w(r), b(r), I.notEnumerableProp(e, "stack", y(n, r)), I.notEnumerableProp(e, "__stackCleaned__", !0)
                    }
                };
                var ie = function() {
                    var e = /^\s*at\s*/,
                        t = function(e, t) {
                            return "string" == typeof e ? e : void 0 !== t.name && void 0 !== t.message ? t.toString() : E(t)
                        };
                    if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                        Error.stackTraceLimit += 6, H = e, U = t;
                        var n = Error.captureStackTrace;
                        return ne = function(e) {
                                return B.test(e)
                            },
                            function(e, t) {
                                Error.stackTraceLimit += 6, n(e, t), Error.stackTraceLimit -= 6
                            }
                    }
                    var r = new Error;
                    if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return H = /@/, U = t, Y = !0,
                        function(e) {
                            e.stack = (new Error).stack
                        };
                    var i;
                    try {
                        throw new Error
                    } catch (e) {
                        i = "stack" in e
                    }
                    return "stack" in r || !i || "number" != typeof Error.stackTraceLimit ? (U = function(e, t) {
                        return "string" == typeof e ? e : "object" != typeof t && "function" != typeof t || void 0 === t.name || void 0 === t.message ? E(t) : t.toString()
                    }, null) : (H = e, U = t, function(e) {
                        Error.stackTraceLimit += 6;
                        try {
                            throw new Error
                        } catch (t) {
                            e.stack = t.stack
                        }
                        Error.stackTraceLimit -= 6
                    })
                }();
                "undefined" != typeof console && void 0 !== console.warn && (L = function(e) {
                    console.warn(e)
                }, I.isNode && process.stderr.isTTY ? L = function(e, t) {
                    var n = t ? "[33m" : "[31m";
                    console.warn(n + e + "[0m\n")
                } : I.isNode || "string" != typeof(new Error).stack || (L = function(e, t) {
                    console.warn("%c" + e, t ? "color: darkorange" : "color: red")
                }));
                var oe = {
                    warnings: G,
                    longStackTraces: !1,
                    cancellation: !1,
                    monitoring: !1
                };
                return $ && t.longStackTraces(), {
                    longStackTraces: function() {
                        return oe.longStackTraces
                    },
                    warnings: function() {
                        return oe.warnings
                    },
                    cancellation: function() {
                        return oe.cancellation
                    },
                    monitoring: function() {
                        return oe.monitoring
                    },
                    propagateFromFunction: function() {
                        return te
                    },
                    boundValueFunction: function() {
                        return d
                    },
                    checkForgottenReturns: v,
                    setBounds: A,
                    warn: g,
                    deprecated: m,
                    CapturedTrace: P,
                    fireDomEvent: K,
                    fireGlobalEvent: X
                }
            }
        }, {
            "./errors": 12,
            "./util": 36
        }],
        10: [function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                function t() {
                    return this.value
                }

                function n() {
                    throw this.reason
                }
                e.prototype.return = e.prototype.thenReturn = function(n) {
                    return n instanceof e && n.suppressUnhandledRejections(), this._then(t, void 0, void 0, {
                        value: n
                    }, void 0)
                }, e.prototype.throw = e.prototype.thenThrow = function(e) {
                    return this._then(n, void 0, void 0, {
                        reason: e
                    }, void 0)
                }, e.prototype.catchThrow = function(e) {
                    if (arguments.length <= 1) return this._then(void 0, n, void 0, {
                        reason: e
                    }, void 0);
                    var t = arguments[1],
                        r = function() {
                            throw t
                        };
                    return this.caught(e, r)
                }, e.prototype.catchReturn = function(n) {
                    if (arguments.length <= 1) return n instanceof e && n.suppressUnhandledRejections(), this._then(void 0, t, void 0, {
                        value: n
                    }, void 0);
                    var r = arguments[1];
                    r instanceof e && r.suppressUnhandledRejections();
                    var i = function() {
                        return r
                    };
                    return this.caught(n, i)
                }
            }
        }, {}],
        11: [function(e, t, n) {
            "use strict";
            t.exports = function(e, t) {
                function n() {
                    return o(this)
                }

                function r(e, n) {
                    return i(e, n, t, t)
                }
                var i = e.reduce,
                    o = e.all;
                e.prototype.each = function(e) {
                    return i(this, e, t, 0)._then(n, void 0, void 0, this, void 0)
                }, e.prototype.mapSeries = function(e) {
                    return i(this, e, t, t)
                }, e.each = function(e, r) {
                    return i(e, r, t, 0)._then(n, void 0, void 0, e, void 0)
                }, e.mapSeries = r
            }
        }, {}],
        12: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                function n(r) {
                    if (!(this instanceof n)) return new n(r);
                    h(this, "message", "string" == typeof r ? r : t), h(this, "name", e), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this)
                }
                return c(n, Error), n
            }

            function i(e) {
                if (!(this instanceof i)) return new i(e);
                h(this, "name", "OperationalError"), h(this, "message", e), this.cause = e, this.isOperational = !0, e instanceof Error ? (h(this, "message", e.message), h(this, "stack", e.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
            }
            var o, s, a = e("./es5"),
                u = a.freeze,
                l = e("./util"),
                c = l.inherits,
                h = l.notEnumerableProp,
                d = r("Warning", "warning"),
                p = r("CancellationError", "cancellation error"),
                f = r("TimeoutError", "timeout error"),
                v = r("AggregateError", "aggregate error");
            try {
                o = TypeError, s = RangeError
            } catch (e) {
                o = r("TypeError", "type error"), s = r("RangeError", "range error")
            }
            for (var m = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), g = 0; g < m.length; ++g) "function" == typeof Array.prototype[m[g]] && (v.prototype[m[g]] = Array.prototype[m[g]]);
            a.defineProperty(v.prototype, "length", {
                value: 0,
                configurable: !1,
                writable: !0,
                enumerable: !0
            }), v.prototype.isOperational = !0;
            var y = 0;
            v.prototype.toString = function() {
                var e = Array(4 * y + 1).join(" "),
                    t = "\n" + e + "AggregateError of:\n";
                y++, e = Array(4 * y + 1).join(" ");
                for (var n = 0; n < this.length; ++n) {
                    for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), o = 0; o < i.length; ++o) i[o] = e + i[o];
                    r = i.join("\n"), t += r + "\n"
                }
                return y--, t
            }, c(i, Error);
            var b = Error.__BluebirdErrorTypes__;
            b || (b = u({
                CancellationError: p,
                TimeoutError: f,
                OperationalError: i,
                RejectionError: i,
                AggregateError: v
            }), a.defineProperty(Error, "__BluebirdErrorTypes__", {
                value: b,
                writable: !1,
                enumerable: !1,
                configurable: !1
            })), t.exports = {
                Error: Error,
                TypeError: o,
                RangeError: s,
                CancellationError: b.CancellationError,
                OperationalError: b.OperationalError,
                TimeoutError: b.TimeoutError,
                AggregateError: b.AggregateError,
                Warning: d
            }
        }, {
            "./es5": 13,
            "./util": 36
        }],
        13: [function(e, t, n) {
            var r = function() {
                "use strict";
                return void 0 === this
            }();
            if (r) t.exports = {
                freeze: Object.freeze,
                defineProperty: Object.defineProperty,
                getDescriptor: Object.getOwnPropertyDescriptor,
                keys: Object.keys,
                names: Object.getOwnPropertyNames,
                getPrototypeOf: Object.getPrototypeOf,
                isArray: Array.isArray,
                isES5: r,
                propertyIsWritable: function(e, t) {
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    return !(n && !n.writable && !n.set)
                }
            };
            else {
                var i = {}.hasOwnProperty,
                    o = {}.toString,
                    s = {}.constructor.prototype,
                    a = function(e) {
                        var t = [];
                        for (var n in e) i.call(e, n) && t.push(n);
                        return t
                    },
                    u = function(e, t) {
                        return {
                            value: e[t]
                        }
                    },
                    l = function(e, t, n) {
                        return e[t] = n.value, e
                    },
                    c = function(e) {
                        return e
                    },
                    h = function(e) {
                        try {
                            return Object(e).constructor.prototype
                        } catch (e) {
                            return s
                        }
                    },
                    d = function(e) {
                        try {
                            return "[object Array]" === o.call(e)
                        } catch (e) {
                            return !1
                        }
                    };
                t.exports = {
                    isArray: d,
                    keys: a,
                    names: a,
                    defineProperty: l,
                    getDescriptor: u,
                    freeze: c,
                    getPrototypeOf: h,
                    isES5: r,
                    propertyIsWritable: function() {
                        return !0
                    }
                }
            }
        }, {}],
        14: [function(e, t, n) {
            "use strict";
            t.exports = function(e, t) {
                var n = e.map;
                e.prototype.filter = function(e, r) {
                    return n(this, e, r, t)
                }, e.filter = function(e, r, i) {
                    return n(e, r, i, t)
                }
            }
        }, {}],
        15: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r) {
                function i(e, t, n) {
                    this.promise = e, this.type = t, this.handler = n, this.called = !1, this.cancelPromise = null
                }

                function o(e) {
                    this.finallyHandler = e
                }

                function s(e, t) {
                    return null != e.cancelPromise && (arguments.length > 1 ? e.cancelPromise._reject(t) : e.cancelPromise._cancel(), e.cancelPromise = null, !0)
                }

                function a() {
                    return l.call(this, this.promise._target()._settledValue())
                }

                function u(e) {
                    if (!s(this, e)) return d.e = e, d
                }

                function l(e) {
                    var i = this.promise,
                        l = this.handler;
                    if (!this.called) {
                        this.called = !0;
                        var c = this.isFinallyHandler() ? l.call(i._boundValue()) : l.call(i._boundValue(), e);
                        if (c === r) return c;
                        if (void 0 !== c) {
                            i._setReturnedNonUndefined();
                            var p = n(c, i);
                            if (p instanceof t) {
                                if (null != this.cancelPromise) {
                                    if (p._isCancelled()) {
                                        var f = new h("late cancellation observer");
                                        return i._attachExtraTrace(f), d.e = f, d
                                    }
                                    p.isPending() && p._attachCancellationCallback(new o(this))
                                }
                                return p._then(a, u, void 0, this, void 0)
                            }
                        }
                    }
                    return i.isRejected() ? (s(this), d.e = e, d) : (s(this), e)
                }
                var c = e("./util"),
                    h = t.CancellationError,
                    d = c.errorObj,
                    p = e("./catch_filter")(r);
                return i.prototype.isFinallyHandler = function() {
                    return 0 === this.type
                }, o.prototype._resultCancelled = function() {
                    s(this.finallyHandler)
                }, t.prototype._passThrough = function(e, t, n, r) {
                    return "function" != typeof e ? this.then() : this._then(n, r, void 0, new i(this, t, e), void 0)
                }, t.prototype.lastly = t.prototype.finally = function(e) {
                    return this._passThrough(e, 0, l, l)
                }, t.prototype.tap = function(e) {
                    return this._passThrough(e, 1, l)
                }, t.prototype.tapCatch = function(e) {
                    var n = arguments.length;
                    if (1 === n) return this._passThrough(e, 1, void 0, l);
                    var r, i = new Array(n - 1),
                        o = 0;
                    for (r = 0; r < n - 1; ++r) {
                        var s = arguments[r];
                        if (!c.isObject(s)) return t.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + c.classString(s)));
                        i[o++] = s
                    }
                    i.length = o;
                    var a = arguments[r];
                    return this._passThrough(p(i, a, this), 1, void 0, l)
                }, i
            }
        }, {
            "./catch_filter": 7,
            "./util": 36
        }],
        16: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r, i, o, s) {
                function a(e, n, r) {
                    for (var o = 0; o < n.length; ++o) {
                        r._pushContext();
                        var s = p(n[o])(e);
                        if (r._popContext(), s === d) {
                            r._pushContext();
                            var a = t.reject(d.e);
                            return r._popContext(), a
                        }
                        var u = i(s, r);
                        if (u instanceof t) return u
                    }
                    return null
                }

                function u(e, n, i, o) {
                    if (s.cancellation()) {
                        var a = new t(r),
                            u = this._finallyPromise = new t(r);
                        this._promise = a.lastly(function() {
                            return u
                        }), a._captureStackTrace(), a._setOnCancel(this)
                    } else {
                        (this._promise = new t(r))._captureStackTrace()
                    }
                    this._stack = o, this._generatorFunction = e, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof i ? [i].concat(f) : f, this._yieldedPromise = null, this._cancellationPhase = !1
                }
                var l = e("./errors"),
                    c = l.TypeError,
                    h = e("./util"),
                    d = h.errorObj,
                    p = h.tryCatch,
                    f = [];
                h.inherits(u, o), u.prototype._isResolved = function() {
                    return null === this._promise
                }, u.prototype._cleanup = function() {
                    this._promise = this._generator = null, s.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), this._finallyPromise = null)
                }, u.prototype._promiseCancelled = function() {
                    if (!this._isResolved()) {
                        var e, n = void 0 !== this._generator.return;
                        if (n) this._promise._pushContext(), e = p(this._generator.return).call(this._generator, void 0), this._promise._popContext();
                        else {
                            var r = new t.CancellationError("generator .return() sentinel");
                            t.coroutine.returnSentinel = r, this._promise._attachExtraTrace(r), this._promise._pushContext(), e = p(this._generator.throw).call(this._generator, r), this._promise._popContext()
                        }
                        this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(e)
                    }
                }, u.prototype._promiseFulfilled = function(e) {
                    this._yieldedPromise = null, this._promise._pushContext();
                    var t = p(this._generator.next).call(this._generator, e);
                    this._promise._popContext(), this._continue(t)
                }, u.prototype._promiseRejected = function(e) {
                    this._yieldedPromise = null, this._promise._attachExtraTrace(e), this._promise._pushContext();
                    var t = p(this._generator.throw).call(this._generator, e);
                    this._promise._popContext(), this._continue(t)
                }, u.prototype._resultCancelled = function() {
                    if (this._yieldedPromise instanceof t) {
                        var e = this._yieldedPromise;
                        this._yieldedPromise = null, e.cancel()
                    }
                }, u.prototype.promise = function() {
                    return this._promise
                }, u.prototype._run = function() {
                    this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0)
                }, u.prototype._continue = function(e) {
                    var n = this._promise;
                    if (e === d) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(e.e, !1);
                    var r = e.value;
                    if (!0 === e.done) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(r);
                    var o = i(r, this._promise);
                    if (!(o instanceof t) && null === (o = a(o, this._yieldHandlers, this._promise))) return void this._promiseRejected(new c("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", String(r)) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                    o = o._target();
                    var s = o._bitField;
                    0 == (50397184 & s) ? (this._yieldedPromise = o, o._proxy(this, null)) : 0 != (33554432 & s) ? t._async.invoke(this._promiseFulfilled, this, o._value()) : 0 != (16777216 & s) ? t._async.invoke(this._promiseRejected, this, o._reason()) : this._promiseCancelled()
                }, t.coroutine = function(e, t) {
                    if ("function" != typeof e) throw new c("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                    var n = Object(t).yieldHandler,
                        r = u,
                        i = (new Error).stack;
                    return function() {
                        var t = e.apply(this, arguments),
                            o = new r(void 0, void 0, n, i),
                            s = o.promise();
                        return o._generator = t, o._promiseFulfilled(void 0), s
                    }
                }, t.coroutine.addYieldHandler = function(e) {
                    if ("function" != typeof e) throw new c("expecting a function but got " + h.classString(e));
                    f.push(e)
                }, t.spawn = function(e) {
                    if (s.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof e) return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                    var r = new u(e, this),
                        i = r.promise();
                    return r._run(t.spawn), i
                }
            }
        }, {
            "./errors": 12,
            "./util": 36
        }],
        17: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r, i, o, s) {
                var a = e("./util");
                a.canEvaluate, a.tryCatch, a.errorObj;
                t.join = function() {
                    var e, t = arguments.length - 1;
                    if (t > 0 && "function" == typeof arguments[t]) {
                        e = arguments[t];
                        var r
                    }
                    var i = [].slice.call(arguments);
                    e && i.pop();
                    var r = new n(i).promise();
                    return void 0 !== e ? r.spread(e) : r
                }
            }
        }, {
            "./util": 36
        }],
        18: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r, i, o, s) {
                function a(e, t, n, r) {
                    this.constructor$(e), this._promise._captureStackTrace();
                    var i = l();
                    this._callback = null === i ? t : c.domainBind(i, t), this._preservedValues = r === o ? new Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = [], p.invoke(this._asyncInit, this, void 0)
                }

                function u(e, n, i, o) {
                    if ("function" != typeof n) return r("expecting a function but got " + c.classString(n));
                    var s = 0;
                    if (void 0 !== i) {
                        if ("object" != typeof i || null === i) return t.reject(new TypeError("options argument must be an object but it is " + c.classString(i)));
                        if ("number" != typeof i.concurrency) return t.reject(new TypeError("'concurrency' must be a number but it is " + c.classString(i.concurrency)));
                        s = i.concurrency
                    }
                    return s = "number" == typeof s && isFinite(s) && s >= 1 ? s : 0, new a(e, n, s, o).promise()
                }
                var l = t._getDomain,
                    c = e("./util"),
                    h = c.tryCatch,
                    d = c.errorObj,
                    p = t._async;
                c.inherits(a, n), a.prototype._asyncInit = function() {
                    this._init$(void 0, -2)
                }, a.prototype._init = function() {}, a.prototype._promiseFulfilled = function(e, n) {
                    var r = this._values,
                        o = this.length(),
                        a = this._preservedValues,
                        u = this._limit;
                    if (n < 0) {
                        if (n = -1 * n - 1, r[n] = e, u >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0
                    } else {
                        if (u >= 1 && this._inFlight >= u) return r[n] = e, this._queue.push(n), !1;
                        null !== a && (a[n] = e);
                        var l = this._promise,
                            c = this._callback,
                            p = l._boundValue();
                        l._pushContext();
                        var f = h(c).call(p, e, n, o),
                            v = l._popContext();
                        if (s.checkForgottenReturns(f, v, null !== a ? "Promise.filter" : "Promise.map", l), f === d) return this._reject(f.e), !0;
                        var m = i(f, this._promise);
                        if (m instanceof t) {
                            m = m._target();
                            var g = m._bitField;
                            if (0 == (50397184 & g)) return u >= 1 && this._inFlight++, r[n] = m, m._proxy(this, -1 * (n + 1)), !1;
                            if (0 == (33554432 & g)) return 0 != (16777216 & g) ? (this._reject(m._reason()), !0) : (this._cancel(), !0);
                            f = m._value()
                        }
                        r[n] = f
                    }
                    return ++this._totalResolved >= o && (null !== a ? this._filter(r, a) : this._resolve(r), !0)
                }, a.prototype._drainQueue = function() {
                    for (var e = this._queue, t = this._limit, n = this._values; e.length > 0 && this._inFlight < t;) {
                        if (this._isResolved()) return;
                        var r = e.pop();
                        this._promiseFulfilled(n[r], r)
                    }
                }, a.prototype._filter = function(e, t) {
                    for (var n = t.length, r = new Array(n), i = 0, o = 0; o < n; ++o) e[o] && (r[i++] = t[o]);
                    r.length = i, this._resolve(r)
                }, a.prototype.preservedValues = function() {
                    return this._preservedValues
                }, t.prototype.map = function(e, t) {
                    return u(this, e, t, null)
                }, t.map = function(e, t, n, r) {
                    return u(e, t, n, r)
                }
            }
        }, {
            "./util": 36
        }],
        19: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r, i, o) {
                var s = e("./util"),
                    a = s.tryCatch;
                t.method = function(e) {
                    if ("function" != typeof e) throw new t.TypeError("expecting a function but got " + s.classString(e));
                    return function() {
                        var r = new t(n);
                        r._captureStackTrace(), r._pushContext();
                        var i = a(e).apply(this, arguments),
                            s = r._popContext();
                        return o.checkForgottenReturns(i, s, "Promise.method", r), r._resolveFromSyncValue(i), r
                    }
                }, t.attempt = t.try = function(e) {
                    if ("function" != typeof e) return i("expecting a function but got " + s.classString(e));
                    var r = new t(n);
                    r._captureStackTrace(), r._pushContext();
                    var u;
                    if (arguments.length > 1) {
                        o.deprecated("calling Promise.try with more than 1 argument");
                        var l = arguments[1],
                            c = arguments[2];
                        u = s.isArray(l) ? a(e).apply(c, l) : a(e).call(c, l)
                    } else u = a(e)();
                    var h = r._popContext();
                    return o.checkForgottenReturns(u, h, "Promise.try", r), r._resolveFromSyncValue(u), r
                }, t.prototype._resolveFromSyncValue = function(e) {
                    e === s.errorObj ? this._rejectCallback(e.e, !1) : this._resolveCallback(e, !0)
                }
            }
        }, {
            "./util": 36
        }],
        20: [function(e, t, n) {
            "use strict";

            function r(e) {
                return e instanceof Error && c.getPrototypeOf(e) === Error.prototype
            }

            function i(e) {
                var t;
                if (r(e)) {
                    t = new l(e), t.name = e.name, t.message = e.message, t.stack = e.stack;
                    for (var n = c.keys(e), i = 0; i < n.length; ++i) {
                        var o = n[i];
                        h.test(o) || (t[o] = e[o])
                    }
                    return t
                }
                return s.markAsOriginatingFromRejection(e), e
            }

            function o(e, t) {
                return function(n, r) {
                    if (null !== e) {
                        if (n) {
                            var o = i(a(n));
                            e._attachExtraTrace(o), e._reject(o)
                        } else if (t) {
                            var s = [].slice.call(arguments, 1);
                            e._fulfill(s)
                        } else e._fulfill(r);
                        e = null
                    }
                }
            }
            var s = e("./util"),
                a = s.maybeWrapAsError,
                u = e("./errors"),
                l = u.OperationalError,
                c = e("./es5"),
                h = /^(?:name|message|stack|cause)$/;
            t.exports = o
        }, {
            "./errors": 12,
            "./es5": 13,
            "./util": 36
        }],
        21: [function(e, t, n) {
            "use strict";
            t.exports = function(t) {
                function n(e, t) {
                    var n = this;
                    if (!o.isArray(e)) return r.call(n, e, t);
                    var i = a(t).apply(n._boundValue(), [null].concat(e));
                    i === u && s.throwLater(i.e)
                }

                function r(e, t) {
                    var n = this,
                        r = n._boundValue(),
                        i = void 0 === e ? a(t).call(r, null) : a(t).call(r, null, e);
                    i === u && s.throwLater(i.e)
                }

                function i(e, t) {
                    var n = this;
                    if (!e) {
                        var r = new Error(e + "");
                        r.cause = e, e = r
                    }
                    var i = a(t).call(n._boundValue(), e);
                    i === u && s.throwLater(i.e)
                }
                var o = e("./util"),
                    s = t._async,
                    a = o.tryCatch,
                    u = o.errorObj;
                t.prototype.asCallback = t.prototype.nodeify = function(e, t) {
                    if ("function" == typeof e) {
                        var o = r;
                        void 0 !== t && Object(t).spread && (o = n), this._then(o, i, void 0, this, e)
                    }
                    return this
                }
            }
        }, {
            "./util": 36
        }],
        22: [function(e, t, n) {
            "use strict";
            t.exports = function() {
                function n() {}

                function r(e, t) {
                    if (null == e || e.constructor !== i) throw new y("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
                    if ("function" != typeof t) throw new y("expecting a function but got " + p.classString(t))
                }

                function i(e) {
                    e !== w && r(this, e), this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this._resolveFromExecutor(e), this._promiseCreated(), this._fireEvent("promiseCreated", this)
                }

                function o(e) {
                    this.promise._resolveCallback(e)
                }

                function s(e) {
                    this.promise._rejectCallback(e, !1)
                }

                function a(e) {
                    var t = new i(w);
                    t._fulfillmentHandler0 = e, t._rejectionHandler0 = e, t._promise0 = e, t._receiver0 = e
                }
                var u, l = function() {
                        return new y("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")
                    },
                    c = function() {
                        return new i.PromiseInspection(this._target())
                    },
                    h = function(e) {
                        return i.reject(new y(e))
                    },
                    d = {},
                    p = e("./util");
                u = p.isNode ? function() {
                    var e = process.domain;
                    return void 0 === e && (e = null), e
                } : function() {
                    return null
                }, p.notEnumerableProp(i, "_getDomain", u);
                var f = e("./es5"),
                    v = e("./async"),
                    m = new v;
                f.defineProperty(i, "_async", {
                    value: m
                });
                var g = e("./errors"),
                    y = i.TypeError = g.TypeError;
                i.RangeError = g.RangeError;
                var b = i.CancellationError = g.CancellationError;
                i.TimeoutError = g.TimeoutError, i.OperationalError = g.OperationalError, i.RejectionError = g.OperationalError, i.AggregateError = g.AggregateError;
                var w = function() {},
                    _ = {},
                    x = {},
                    S = e("./thenables")(i, w),
                    C = e("./promise_array")(i, w, S, h, n),
                    k = e("./context")(i),
                    E = k.create,
                    O = e("./debuggability")(i, k),
                    M = (O.CapturedTrace, e("./finally")(i, S, x)),
                    R = e("./catch_filter")(x),
                    A = e("./nodeback"),
                    P = p.errorObj,
                    T = p.tryCatch;
                return i.prototype.toString = function() {
                    return "[object Promise]"
                }, i.prototype.caught = i.prototype.catch = function(e) {
                    var t = arguments.length;
                    if (t > 1) {
                        var n, r = new Array(t - 1),
                            i = 0;
                        for (n = 0; n < t - 1; ++n) {
                            var o = arguments[n];
                            if (!p.isObject(o)) return h("Catch statement predicate: expecting an object but got " + p.classString(o));
                            r[i++] = o
                        }
                        return r.length = i, e = arguments[n], this.then(void 0, R(r, e, this))
                    }
                    return this.then(void 0, e)
                }, i.prototype.reflect = function() {
                    return this._then(c, c, void 0, this, void 0)
                }, i.prototype.then = function(e, t) {
                    if (O.warnings() && arguments.length > 0 && "function" != typeof e && "function" != typeof t) {
                        var n = ".then() only accepts functions but was passed: " + p.classString(e);
                        arguments.length > 1 && (n += ", " + p.classString(t)), this._warn(n)
                    }
                    return this._then(e, t, void 0, void 0, void 0)
                }, i.prototype.done = function(e, t) {
                    this._then(e, t, void 0, void 0, void 0)._setIsFinal()
                }, i.prototype.spread = function(e) {
                    return "function" != typeof e ? h("expecting a function but got " + p.classString(e)) : this.all()._then(e, void 0, void 0, _, void 0)
                }, i.prototype.toJSON = function() {
                    var e = {
                        isFulfilled: !1,
                        isRejected: !1,
                        fulfillmentValue: void 0,
                        rejectionReason: void 0
                    };
                    return this.isFulfilled() ? (e.fulfillmentValue = this.value(), e.isFulfilled = !0) : this.isRejected() && (e.rejectionReason = this.reason(), e.isRejected = !0), e
                }, i.prototype.all = function() {
                    return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new C(this).promise()
                }, i.prototype.error = function(e) {
                    return this.caught(p.originatesFromRejection, e)
                }, i.getNewLibraryCopy = t.exports, i.is = function(e) {
                    return e instanceof i
                }, i.fromNode = i.fromCallback = function(e) {
                    var t = new i(w);
                    t._captureStackTrace();
                    var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs,
                        r = T(e)(A(t, n));
                    return r === P && t._rejectCallback(r.e, !0), t._isFateSealed() || t._setAsyncGuaranteed(), t
                }, i.all = function(e) {
                    return new C(e).promise()
                }, i.cast = function(e) {
                    var t = S(e);
                    return t instanceof i || (t = new i(w), t._captureStackTrace(), t._setFulfilled(), t._rejectionHandler0 = e), t
                }, i.resolve = i.fulfilled = i.cast, i.reject = i.rejected = function(e) {
                    var t = new i(w);
                    return t._captureStackTrace(), t._rejectCallback(e, !0), t
                }, i.setScheduler = function(e) {
                    if ("function" != typeof e) throw new y("expecting a function but got " + p.classString(e));
                    return m.setScheduler(e)
                }, i.prototype._then = function(e, t, n, r, o) {
                    var s = void 0 !== o,
                        a = s ? o : new i(w),
                        l = this._target(),
                        c = l._bitField;
                    s || (a._propagateFrom(this, 3), a._captureStackTrace(), void 0 === r && 0 != (2097152 & this._bitField) && (r = 0 != (50397184 & c) ? this._boundValue() : l === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, a));
                    var h = u();
                    if (0 != (50397184 & c)) {
                        var d, f, v = l._settlePromiseCtx;
                        0 != (33554432 & c) ? (f = l._rejectionHandler0, d = e) : 0 != (16777216 & c) ? (f = l._fulfillmentHandler0, d = t, l._unsetRejectionIsUnhandled()) : (v = l._settlePromiseLateCancellationObserver, f = new b("late cancellation observer"), l._attachExtraTrace(f), d = t), m.invoke(v, l, {
                            handler: null === h ? d : "function" == typeof d && p.domainBind(h, d),
                            promise: a,
                            receiver: r,
                            value: f
                        })
                    } else l._addCallbacks(e, t, a, r, h);
                    return a
                }, i.prototype._length = function() {
                    return 65535 & this._bitField
                }, i.prototype._isFateSealed = function() {
                    return 0 != (117506048 & this._bitField)
                }, i.prototype._isFollowing = function() {
                    return 67108864 == (67108864 & this._bitField)
                }, i.prototype._setLength = function(e) {
                    this._bitField = -65536 & this._bitField | 65535 & e
                }, i.prototype._setFulfilled = function() {
                    this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this)
                }, i.prototype._setRejected = function() {
                    this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this)
                }, i.prototype._setFollowing = function() {
                    this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this)
                }, i.prototype._setIsFinal = function() {
                    this._bitField = 4194304 | this._bitField
                }, i.prototype._isFinal = function() {
                    return (4194304 & this._bitField) > 0
                }, i.prototype._unsetCancelled = function() {
                    this._bitField = -65537 & this._bitField
                }, i.prototype._setCancelled = function() {
                    this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this)
                }, i.prototype._setWillBeCancelled = function() {
                    this._bitField = 8388608 | this._bitField
                }, i.prototype._setAsyncGuaranteed = function() {
                    m.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField)
                }, i.prototype._receiverAt = function(e) {
                    var t = 0 === e ? this._receiver0 : this[4 * e - 4 + 3];
                    if (t !== d) return void 0 === t && this._isBound() ? this._boundValue() : t
                }, i.prototype._promiseAt = function(e) {
                    return this[4 * e - 4 + 2]
                }, i.prototype._fulfillmentHandlerAt = function(e) {
                    return this[4 * e - 4 + 0]
                }, i.prototype._rejectionHandlerAt = function(e) {
                    return this[4 * e - 4 + 1]
                }, i.prototype._boundValue = function() {}, i.prototype._migrateCallback0 = function(e) {
                    var t = (e._bitField, e._fulfillmentHandler0),
                        n = e._rejectionHandler0,
                        r = e._promise0,
                        i = e._receiverAt(0);
                    void 0 === i && (i = d), this._addCallbacks(t, n, r, i, null)
                }, i.prototype._migrateCallbackAt = function(e, t) {
                    var n = e._fulfillmentHandlerAt(t),
                        r = e._rejectionHandlerAt(t),
                        i = e._promiseAt(t),
                        o = e._receiverAt(t);
                    void 0 === o && (o = d), this._addCallbacks(n, r, i, o, null)
                }, i.prototype._addCallbacks = function(e, t, n, r, i) {
                    var o = this._length();
                    if (o >= 65531 && (o = 0, this._setLength(0)), 0 === o) this._promise0 = n, this._receiver0 = r, "function" == typeof e && (this._fulfillmentHandler0 = null === i ? e : p.domainBind(i, e)), "function" == typeof t && (this._rejectionHandler0 = null === i ? t : p.domainBind(i, t));
                    else {
                        var s = 4 * o - 4;
                        this[s + 2] = n, this[s + 3] = r, "function" == typeof e && (this[s + 0] = null === i ? e : p.domainBind(i, e)), "function" == typeof t && (this[s + 1] = null === i ? t : p.domainBind(i, t))
                    }
                    return this._setLength(o + 1), o
                }, i.prototype._proxy = function(e, t) {
                    this._addCallbacks(void 0, void 0, t, e, null)
                }, i.prototype._resolveCallback = function(e, t) {
                    if (0 == (117506048 & this._bitField)) {
                        if (e === this) return this._rejectCallback(l(), !1);
                        var n = S(e, this);
                        if (!(n instanceof i)) return this._fulfill(e);
                        t && this._propagateFrom(n, 2);
                        var r = n._target();
                        if (r === this) return void this._reject(l());
                        var o = r._bitField;
                        if (0 == (50397184 & o)) {
                            var s = this._length();
                            s > 0 && r._migrateCallback0(this);
                            for (var a = 1; a < s; ++a) r._migrateCallbackAt(this, a);
                            this._setFollowing(), this._setLength(0), this._setFollowee(r)
                        } else if (0 != (33554432 & o)) this._fulfill(r._value());
                        else if (0 != (16777216 & o)) this._reject(r._reason());
                        else {
                            var u = new b("late cancellation observer");
                            r._attachExtraTrace(u), this._reject(u)
                        }
                    }
                }, i.prototype._rejectCallback = function(e, t, n) {
                    var r = p.ensureErrorObject(e),
                        i = r === e;
                    if (!i && !n && O.warnings()) {
                        var o = "a promise was rejected with a non-error: " + p.classString(e);
                        this._warn(o, !0)
                    }
                    this._attachExtraTrace(r, !!t && i), this._reject(e)
                }, i.prototype._resolveFromExecutor = function(e) {
                    if (e !== w) {
                        var t = this;
                        this._captureStackTrace(), this._pushContext();
                        var n = !0,
                            r = this._execute(e, function(e) {
                                t._resolveCallback(e)
                            }, function(e) {
                                t._rejectCallback(e, n)
                            });
                        n = !1, this._popContext(), void 0 !== r && t._rejectCallback(r, !0)
                    }
                }, i.prototype._settlePromiseFromHandler = function(e, t, n, r) {
                    var i = r._bitField;
                    if (0 == (65536 & i)) {
                        r._pushContext();
                        var o;
                        t === _ ? n && "number" == typeof n.length ? o = T(e).apply(this._boundValue(), n) : (o = P, o.e = new y("cannot .spread() a non-array: " + p.classString(n))) : o = T(e).call(t, n);
                        var s = r._popContext();
                        i = r._bitField, 0 == (65536 & i) && (o === x ? r._reject(n) : o === P ? r._rejectCallback(o.e, !1) : (O.checkForgottenReturns(o, s, "", r, this), r._resolveCallback(o)))
                    }
                }, i.prototype._target = function() {
                    for (var e = this; e._isFollowing();) e = e._followee();
                    return e
                }, i.prototype._followee = function() {
                    return this._rejectionHandler0
                }, i.prototype._setFollowee = function(e) {
                    this._rejectionHandler0 = e
                }, i.prototype._settlePromise = function(e, t, r, o) {
                    var s = e instanceof i,
                        a = this._bitField,
                        u = 0 != (134217728 & a);
                    0 != (65536 & a) ? (s && e._invokeInternalOnCancel(), r instanceof M && r.isFinallyHandler() ? (r.cancelPromise = e, T(t).call(r, o) === P && e._reject(P.e)) : t === c ? e._fulfill(c.call(r)) : r instanceof n ? r._promiseCancelled(e) : s || e instanceof C ? e._cancel() : r.cancel()) : "function" == typeof t ? s ? (u && e._setAsyncGuaranteed(), this._settlePromiseFromHandler(t, r, o, e)) : t.call(r, o, e) : r instanceof n ? r._isResolved() || (0 != (33554432 & a) ? r._promiseFulfilled(o, e) : r._promiseRejected(o, e)) : s && (u && e._setAsyncGuaranteed(), 0 != (33554432 & a) ? e._fulfill(o) : e._reject(o))
                }, i.prototype._settlePromiseLateCancellationObserver = function(e) {
                    var t = e.handler,
                        n = e.promise,
                        r = e.receiver,
                        o = e.value;
                    "function" == typeof t ? n instanceof i ? this._settlePromiseFromHandler(t, r, o, n) : t.call(r, o, n) : n instanceof i && n._reject(o)
                }, i.prototype._settlePromiseCtx = function(e) {
                    this._settlePromise(e.promise, e.handler, e.receiver, e.value)
                }, i.prototype._settlePromise0 = function(e, t, n) {
                    var r = this._promise0,
                        i = this._receiverAt(0);
                    this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(r, e, i, t)
                }, i.prototype._clearCallbackDataAtIndex = function(e) {
                    var t = 4 * e - 4;
                    this[t + 2] = this[t + 3] = this[t + 0] = this[t + 1] = void 0
                }, i.prototype._fulfill = function(e) {
                    var t = this._bitField;
                    if (!((117506048 & t) >>> 16)) {
                        if (e === this) {
                            var n = l();
                            return this._attachExtraTrace(n), this._reject(n)
                        }
                        this._setFulfilled(), this._rejectionHandler0 = e, (65535 & t) > 0 && (0 != (134217728 & t) ? this._settlePromises() : m.settlePromises(this))
                    }
                }, i.prototype._reject = function(e) {
                    var t = this._bitField;
                    if (!((117506048 & t) >>> 16)) {
                        if (this._setRejected(), this._fulfillmentHandler0 = e, this._isFinal()) return m.fatalError(e, p.isNode);
                        (65535 & t) > 0 ? m.settlePromises(this) : this._ensurePossibleRejectionHandled()
                    }
                }, i.prototype._fulfillPromises = function(e, t) {
                    for (var n = 1; n < e; n++) {
                        var r = this._fulfillmentHandlerAt(n),
                            i = this._promiseAt(n),
                            o = this._receiverAt(n);
                        this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, t)
                    }
                }, i.prototype._rejectPromises = function(e, t) {
                    for (var n = 1; n < e; n++) {
                        var r = this._rejectionHandlerAt(n),
                            i = this._promiseAt(n),
                            o = this._receiverAt(n);
                        this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, t)
                    }
                }, i.prototype._settlePromises = function() {
                    var e = this._bitField,
                        t = 65535 & e;
                    if (t > 0) {
                        if (0 != (16842752 & e)) {
                            var n = this._fulfillmentHandler0;
                            this._settlePromise0(this._rejectionHandler0, n, e), this._rejectPromises(t, n)
                        } else {
                            var r = this._rejectionHandler0;
                            this._settlePromise0(this._fulfillmentHandler0, r, e), this._fulfillPromises(t, r)
                        }
                        this._setLength(0)
                    }
                    this._clearCancellationData()
                }, i.prototype._settledValue = function() {
                    var e = this._bitField;
                    return 0 != (33554432 & e) ? this._rejectionHandler0 : 0 != (16777216 & e) ? this._fulfillmentHandler0 : void 0
                }, i.defer = i.pending = function() {
                    return O.deprecated("Promise.defer", "new Promise"), {
                        promise: new i(w),
                        resolve: o,
                        reject: s
                    }
                }, p.notEnumerableProp(i, "_makeSelfResolutionError", l), e("./method")(i, w, S, h, O), e("./bind")(i, w, S, O), e("./cancel")(i, C, h, O), e("./direct_resolve")(i), e("./synchronous_inspection")(i), e("./join")(i, C, S, w, m, u), i.Promise = i, i.version = "3.5.0", e("./map.js")(i, C, h, S, w, O), e("./call_get.js")(i), e("./using.js")(i, h, S, E, w, O), e("./timers.js")(i, w, O), e("./generators.js")(i, h, w, S, n, O), e("./nodeify.js")(i), e("./promisify.js")(i, w), e("./props.js")(i, C, S, h), e("./race.js")(i, w, S, h), e("./reduce.js")(i, C, h, S, w, O), e("./settle.js")(i, C, O), e("./some.js")(i, C, h), e("./filter.js")(i, w), e("./each.js")(i, w), e("./any.js")(i), p.toFastProperties(i), p.toFastProperties(i.prototype), a({
                    a: 1
                }), a({
                    b: 2
                }), a({
                    c: 3
                }), a(1), a(function() {}), a(void 0), a(!1), a(new i(w)), O.setBounds(v.firstLineError, p.lastLineError), i
            }
        }, {
            "./any.js": 1,
            "./async": 2,
            "./bind": 3,
            "./call_get.js": 5,
            "./cancel": 6,
            "./catch_filter": 7,
            "./context": 8,
            "./debuggability": 9,
            "./direct_resolve": 10,
            "./each.js": 11,
            "./errors": 12,
            "./es5": 13,
            "./filter.js": 14,
            "./finally": 15,
            "./generators.js": 16,
            "./join": 17,
            "./map.js": 18,
            "./method": 19,
            "./nodeback": 20,
            "./nodeify.js": 21,
            "./promise_array": 23,
            "./promisify.js": 24,
            "./props.js": 25,
            "./race.js": 27,
            "./reduce.js": 28,
            "./settle.js": 30,
            "./some.js": 31,
            "./synchronous_inspection": 32,
            "./thenables": 33,
            "./timers.js": 34,
            "./using.js": 35,
            "./util": 36
        }],
        23: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r, i, o) {
                function s(e) {
                    switch (e) {
                        case -2:
                            return [];
                        case -3:
                            return {};
                        case -6:
                            return new Map
                    }
                }

                function a(e) {
                    var r = this._promise = new t(n);
                    e instanceof t && r._propagateFrom(e, 3), r._setOnCancel(this), this._values = e, this._length = 0, this._totalResolved = 0, this._init(void 0, -2)
                }
                var u = e("./util");
                u.isArray;
                return u.inherits(a, o), a.prototype.length = function() {
                    return this._length
                }, a.prototype.promise = function() {
                    return this._promise
                }, a.prototype._init = function e(n, o) {
                    var a = r(this._values, this._promise);
                    if (a instanceof t) {
                        a = a._target();
                        var l = a._bitField;
                        if (this._values = a, 0 == (50397184 & l)) return this._promise._setAsyncGuaranteed(), a._then(e, this._reject, void 0, this, o);
                        if (0 == (33554432 & l)) return 0 != (16777216 & l) ? this._reject(a._reason()) : this._cancel();
                        a = a._value()
                    }
                    if (null === (a = u.asArray(a))) {
                        var c = i("expecting an array or an iterable object but got " + u.classString(a)).reason();
                        return void this._promise._rejectCallback(c, !1)
                    }
                    if (0 === a.length) return void(-5 === o ? this._resolveEmptyArray() : this._resolve(s(o)));
                    this._iterate(a)
                }, a.prototype._iterate = function(e) {
                    var n = this.getActualLength(e.length);
                    this._length = n, this._values = this.shouldCopyValues() ? new Array(n) : this._values;
                    for (var i = this._promise, o = !1, s = null, a = 0; a < n; ++a) {
                        var u = r(e[a], i);
                        u instanceof t ? (u = u._target(), s = u._bitField) : s = null, o ? null !== s && u.suppressUnhandledRejections() : null !== s ? 0 == (50397184 & s) ? (u._proxy(this, a), this._values[a] = u) : o = 0 != (33554432 & s) ? this._promiseFulfilled(u._value(), a) : 0 != (16777216 & s) ? this._promiseRejected(u._reason(), a) : this._promiseCancelled(a) : o = this._promiseFulfilled(u, a)
                    }
                    o || i._setAsyncGuaranteed()
                }, a.prototype._isResolved = function() {
                    return null === this._values
                }, a.prototype._resolve = function(e) {
                    this._values = null, this._promise._fulfill(e)
                }, a.prototype._cancel = function() {
                    !this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel())
                }, a.prototype._reject = function(e) {
                    this._values = null, this._promise._rejectCallback(e, !1)
                }, a.prototype._promiseFulfilled = function(e, t) {
                    return this._values[t] = e, ++this._totalResolved >= this._length && (this._resolve(this._values), !0)
                }, a.prototype._promiseCancelled = function() {
                    return this._cancel(), !0
                }, a.prototype._promiseRejected = function(e) {
                    return this._totalResolved++, this._reject(e), !0
                }, a.prototype._resultCancelled = function() {
                    if (!this._isResolved()) {
                        var e = this._values;
                        if (this._cancel(), e instanceof t) e.cancel();
                        else
                            for (var n = 0; n < e.length; ++n) e[n] instanceof t && e[n].cancel()
                    }
                }, a.prototype.shouldCopyValues = function() {
                    return !0
                }, a.prototype.getActualLength = function(e) {
                    return e
                }, a
            }
        }, {
            "./util": 36
        }],
        24: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n) {
                function r(e) {
                    return !_.test(e)
                }

                function i(e) {
                    try {
                        return !0 === e.__isPromisified__
                    } catch (e) {
                        return !1
                    }
                }

                function o(e, t, n) {
                    var r = p.getDataPropertyOrDefault(e, t + n, b);
                    return !!r && i(r)
                }

                function s(e, t, n) {
                    for (var r = 0; r < e.length; r += 2) {
                        var i = e[r];
                        if (n.test(i))
                            for (var o = i.replace(n, ""), s = 0; s < e.length; s += 2)
                                if (e[s] === o) throw new y("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", t))
                    }
                }

                function a(e, t, n, r) {
                    for (var a = p.inheritedDataKeys(e), u = [], l = 0; l < a.length; ++l) {
                        var c = a[l],
                            h = e[c],
                            d = r === x || x(c, h, e);
                        "function" != typeof h || i(h) || o(e, c, t) || !r(c, h, e, d) || u.push(c, h)
                    }
                    return s(u, t, n), u
                }

                function u(e, r, i, o, s, a) {
                    function u() {
                        var i = r;
                        r === d && (i = this);
                        var o = new t(n);
                        o._captureStackTrace();
                        var s = "string" == typeof c && this !== l ? this[c] : e,
                            u = f(o, a);
                        try {
                            s.apply(i, v(arguments, u))
                        } catch (e) {
                            o._rejectCallback(m(e), !0, !0)
                        }
                        return o._isFateSealed() || o._setAsyncGuaranteed(), o
                    }
                    var l = function() {
                            return this
                        }(),
                        c = e;
                    return "string" == typeof c && (e = o), p.notEnumerableProp(u, "__isPromisified__", !0), u
                }

                function l(e, t, n, r, i) {
                    for (var o = new RegExp(S(t) + "$"), s = a(e, t, o, n), u = 0, l = s.length; u < l; u += 2) {
                        var c = s[u],
                            h = s[u + 1],
                            f = c + t;
                        if (r === C) e[f] = C(c, d, c, h, t, i);
                        else {
                            var v = r(h, function() {
                                return C(c, d, c, h, t, i)
                            });
                            p.notEnumerableProp(v, "__isPromisified__", !0), e[f] = v
                        }
                    }
                    return p.toFastProperties(e), e
                }

                function c(e, t, n) {
                    return C(e, t, void 0, e, null, n)
                }
                var h, d = {},
                    p = e("./util"),
                    f = e("./nodeback"),
                    v = p.withAppended,
                    m = p.maybeWrapAsError,
                    g = p.canEvaluate,
                    y = e("./errors").TypeError,
                    b = {
                        __isPromisified__: !0
                    },
                    w = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"],
                    _ = new RegExp("^(?:" + w.join("|") + ")$"),
                    x = function(e) {
                        return p.isIdentifier(e) && "_" !== e.charAt(0) && "constructor" !== e
                    },
                    S = function(e) {
                        return e.replace(/([$])/, "\\$")
                    },
                    C = g ? h : u;
                t.promisify = function(e, t) {
                    if ("function" != typeof e) throw new y("expecting a function but got " + p.classString(e));
                    if (i(e)) return e;
                    t = Object(t);
                    var n = void 0 === t.context ? d : t.context,
                        o = !!t.multiArgs,
                        s = c(e, n, o);
                    return p.copyDescriptors(e, s, r), s
                }, t.promisifyAll = function(e, t) {
                    if ("function" != typeof e && "object" != typeof e) throw new y("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                    t = Object(t);
                    var n = !!t.multiArgs,
                        r = t.suffix;
                    "string" != typeof r && (r = "Async");
                    var i = t.filter;
                    "function" != typeof i && (i = x);
                    var o = t.promisifier;
                    if ("function" != typeof o && (o = C), !p.isIdentifier(r)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
                    for (var s = p.inheritedDataKeys(e), a = 0; a < s.length; ++a) {
                        var u = e[s[a]];
                        "constructor" !== s[a] && p.isClass(u) && (l(u.prototype, r, i, o, n), l(u, r, i, o, n))
                    }
                    return l(e, r, i, o, n)
                }
            }
        }, {
            "./errors": 12,
            "./nodeback": 20,
            "./util": 36
        }],
        25: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r, i) {
                function o(e) {
                    var t, n = !1;
                    if (void 0 !== a && e instanceof a) t = h(e), n = !0;
                    else {
                        var r = c.keys(e),
                            i = r.length;
                        t = new Array(2 * i);
                        for (var o = 0; o < i; ++o) {
                            var s = r[o];
                            t[o] = e[s], t[o + i] = s
                        }
                    }
                    this.constructor$(t), this._isMap = n, this._init$(void 0, n ? -6 : -3)
                }

                function s(e) {
                    var n, s = r(e);
                    return l(s) ? (n = s instanceof t ? s._then(t.props, void 0, void 0, void 0, void 0) : new o(s).promise(), s instanceof t && n._propagateFrom(s, 2), n) : i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")
                }
                var a, u = e("./util"),
                    l = u.isObject,
                    c = e("./es5");
                "function" == typeof Map && (a = Map);
                var h = function() {
                        function e(e, r) {
                            this[t] = e, this[t + n] = r, t++
                        }
                        var t = 0,
                            n = 0;
                        return function(r) {
                            n = r.size, t = 0;
                            var i = new Array(2 * r.size);
                            return r.forEach(e, i), i
                        }
                    }(),
                    d = function(e) {
                        for (var t = new a, n = e.length / 2 | 0, r = 0; r < n; ++r) {
                            var i = e[n + r],
                                o = e[r];
                            t.set(i, o)
                        }
                        return t
                    };
                u.inherits(o, n), o.prototype._init = function() {}, o.prototype._promiseFulfilled = function(e, t) {
                    if (this._values[t] = e, ++this._totalResolved >= this._length) {
                        var n;
                        if (this._isMap) n = d(this._values);
                        else {
                            n = {};
                            for (var r = this.length(), i = 0, o = this.length(); i < o; ++i) n[this._values[i + r]] = this._values[i]
                        }
                        return this._resolve(n), !0
                    }
                    return !1
                }, o.prototype.shouldCopyValues = function() {
                    return !1
                }, o.prototype.getActualLength = function(e) {
                    return e >> 1
                }, t.prototype.props = function() {
                    return s(this)
                }, t.props = function(e) {
                    return s(e)
                }
            }
        }, {
            "./es5": 13,
            "./util": 36
        }],
        26: [function(e, t, n) {
            "use strict";

            function r(e, t, n, r, i) {
                for (var o = 0; o < i; ++o) n[o + r] = e[o + t], e[o + t] = void 0
            }

            function i(e) {
                this._capacity = e, this._length = 0, this._front = 0
            }
            i.prototype._willBeOverCapacity = function(e) {
                return this._capacity < e
            }, i.prototype._pushOne = function(e) {
                var t = this.length();
                this._checkCapacity(t + 1), this[this._front + t & this._capacity - 1] = e, this._length = t + 1
            }, i.prototype.push = function(e, t, n) {
                var r = this.length() + 3;
                if (this._willBeOverCapacity(r)) return this._pushOne(e), this._pushOne(t), void this._pushOne(n);
                var i = this._front + r - 3;
                this._checkCapacity(r);
                var o = this._capacity - 1;
                this[i + 0 & o] = e, this[i + 1 & o] = t, this[i + 2 & o] = n, this._length = r
            }, i.prototype.shift = function() {
                var e = this._front,
                    t = this[e];
                return this[e] = void 0, this._front = e + 1 & this._capacity - 1, this._length--, t
            }, i.prototype.length = function() {
                return this._length
            }, i.prototype._checkCapacity = function(e) {
                this._capacity < e && this._resizeTo(this._capacity << 1)
            }, i.prototype._resizeTo = function(e) {
                var t = this._capacity;
                this._capacity = e, r(this, 0, this, t, this._front + this._length & t - 1)
            }, t.exports = i
        }, {}],
        27: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r, i) {
                function o(e, o) {
                    var u = r(e);
                    if (u instanceof t) return a(u);
                    if (null === (e = s.asArray(e))) return i("expecting an array or an iterable object but got " + s.classString(e));
                    var l = new t(n);
                    void 0 !== o && l._propagateFrom(o, 3);
                    for (var c = l._fulfill, h = l._reject, d = 0, p = e.length; d < p; ++d) {
                        var f = e[d];
                        (void 0 !== f || d in e) && t.cast(f)._then(c, h, void 0, l, null)
                    }
                    return l
                }
                var s = e("./util"),
                    a = function(e) {
                        return e.then(function(t) {
                            return o(t, e)
                        })
                    };
                t.race = function(e) {
                    return o(e, void 0)
                }, t.prototype.race = function() {
                    return o(this, void 0)
                }
            }
        }, {
            "./util": 36
        }],
        28: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r, i, o, s) {
                function a(e, n, r, i) {
                    this.constructor$(e);
                    var s = d();
                    this._fn = null === s ? n : p.domainBind(s, n), void 0 !== r && (r = t.resolve(r), r._attachCancellationCallback(this)), this._initialValue = r, this._currentCancellable = null, this._eachValues = i === o ? Array(this._length) : 0 === i ? null : void 0, this._promise._captureStackTrace(), this._init$(void 0, -5)
                }

                function u(e, t) {
                    this.isFulfilled() ? t._resolve(e) : t._reject(e)
                }

                function l(e, t, n, i) {
                    return "function" != typeof t ? r("expecting a function but got " + p.classString(t)) : new a(e, t, n, i).promise()
                }

                function c(e) {
                    this.accum = e, this.array._gotAccum(e);
                    var n = i(this.value, this.array._promise);
                    return n instanceof t ? (this.array._currentCancellable = n, n._then(h, void 0, void 0, this, void 0)) : h.call(this, n)
                }

                function h(e) {
                    var n = this.array,
                        r = n._promise,
                        i = f(n._fn);
                    r._pushContext();
                    var o;
                    (o = void 0 !== n._eachValues ? i.call(r._boundValue(), e, this.index, this.length) : i.call(r._boundValue(), this.accum, e, this.index, this.length)) instanceof t && (n._currentCancellable = o);
                    var a = r._popContext();
                    return s.checkForgottenReturns(o, a, void 0 !== n._eachValues ? "Promise.each" : "Promise.reduce", r), o
                }
                var d = t._getDomain,
                    p = e("./util"),
                    f = p.tryCatch;
                p.inherits(a, n), a.prototype._gotAccum = function(e) {
                    void 0 !== this._eachValues && null !== this._eachValues && e !== o && this._eachValues.push(e)
                }, a.prototype._eachComplete = function(e) {
                    return null !== this._eachValues && this._eachValues.push(e), this._eachValues
                }, a.prototype._init = function() {}, a.prototype._resolveEmptyArray = function() {
                    this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue)
                }, a.prototype.shouldCopyValues = function() {
                    return !1
                }, a.prototype._resolve = function(e) {
                    this._promise._resolveCallback(e), this._values = null
                }, a.prototype._resultCancelled = function(e) {
                    if (e === this._initialValue) return this._cancel();
                    this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof t && this._currentCancellable.cancel(), this._initialValue instanceof t && this._initialValue.cancel())
                }, a.prototype._iterate = function(e) {
                    this._values = e;
                    var n, r, i = e.length;
                    if (void 0 !== this._initialValue ? (n = this._initialValue, r = 0) : (n = t.resolve(e[0]), r = 1), this._currentCancellable = n, !n.isRejected())
                        for (; r < i; ++r) {
                            var o = {
                                accum: null,
                                value: e[r],
                                index: r,
                                length: i,
                                array: this
                            };
                            n = n._then(c, void 0, void 0, o, void 0)
                        }
                    void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), n._then(u, u, void 0, n, this)
                }, t.prototype.reduce = function(e, t) {
                    return l(this, e, t, null)
                }, t.reduce = function(e, t, n, r) {
                    return l(e, t, n, r)
                }
            }
        }, {
            "./util": 36
        }],
        29: [function(e, t, n) {
            "use strict";
            var r, i = e("./util"),
                o = function() {
                    throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                },
                s = i.getNativePromise();
            if (i.isNode && "undefined" == typeof MutationObserver) {
                var a = global.setImmediate,
                    u = process.nextTick;
                r = i.isRecentNode ? function(e) {
                    a.call(global, e)
                } : function(e) {
                    u.call(process, e)
                }
            } else if ("function" == typeof s && "function" == typeof s.resolve) {
                var l = s.resolve();
                r = function(e) {
                    l.then(e)
                }
            } else r = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? "undefined" != typeof setImmediate ? function(e) {
                setImmediate(e)
            } : "undefined" != typeof setTimeout ? function(e) {
                setTimeout(e, 0)
            } : o : function() {
                var e = document.createElement("div"),
                    t = {
                        attributes: !0
                    },
                    n = !1,
                    r = document.createElement("div");
                new MutationObserver(function() {
                    e.classList.toggle("foo"), n = !1
                }).observe(r, t);
                var i = function() {
                    n || (n = !0, r.classList.toggle("foo"))
                };
                return function(n) {
                    var r = new MutationObserver(function() {
                        r.disconnect(), n()
                    });
                    r.observe(e, t), i()
                }
            }();
            t.exports = r
        }, {
            "./util": 36
        }],
        30: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r) {
                function i(e) {
                    this.constructor$(e)
                }
                var o = t.PromiseInspection;
                e("./util").inherits(i, n), i.prototype._promiseResolved = function(e, t) {
                    return this._values[e] = t, ++this._totalResolved >= this._length && (this._resolve(this._values), !0)
                }, i.prototype._promiseFulfilled = function(e, t) {
                    var n = new o;
                    return n._bitField = 33554432, n._settledValueField = e, this._promiseResolved(t, n)
                }, i.prototype._promiseRejected = function(e, t) {
                    var n = new o;
                    return n._bitField = 16777216, n._settledValueField = e, this._promiseResolved(t, n)
                }, t.settle = function(e) {
                    return r.deprecated(".settle()", ".reflect()"), new i(e).promise()
                }, t.prototype.settle = function() {
                    return t.settle(this)
                }
            }
        }, {
            "./util": 36
        }],
        31: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r) {
                function i(e) {
                    this.constructor$(e), this._howMany = 0, this._unwrap = !1, this._initialized = !1
                }

                function o(e, t) {
                    if ((0 | t) !== t || t < 0) return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
                    var n = new i(e),
                        o = n.promise();
                    return n.setHowMany(t), n.init(), o
                }
                var s = e("./util"),
                    a = e("./errors").RangeError,
                    u = e("./errors").AggregateError,
                    l = s.isArray,
                    c = {};
                s.inherits(i, n), i.prototype._init = function() {
                    if (this._initialized) {
                        if (0 === this._howMany) return void this._resolve([]);
                        this._init$(void 0, -5);
                        var e = l(this._values);
                        !this._isResolved() && e && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
                    }
                }, i.prototype.init = function() {
                    this._initialized = !0, this._init()
                }, i.prototype.setUnwrap = function() {
                    this._unwrap = !0
                }, i.prototype.howMany = function() {
                    return this._howMany
                }, i.prototype.setHowMany = function(e) {
                    this._howMany = e
                }, i.prototype._promiseFulfilled = function(e) {
                    return this._addFulfilled(e), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0)
                }, i.prototype._promiseRejected = function(e) {
                    return this._addRejected(e), this._checkOutcome()
                }, i.prototype._promiseCancelled = function() {
                    return this._values instanceof t || null == this._values ? this._cancel() : (this._addRejected(c), this._checkOutcome())
                }, i.prototype._checkOutcome = function() {
                    if (this.howMany() > this._canPossiblyFulfill()) {
                        for (var e = new u, t = this.length(); t < this._values.length; ++t) this._values[t] !== c && e.push(this._values[t]);
                        return e.length > 0 ? this._reject(e) : this._cancel(), !0
                    }
                    return !1
                }, i.prototype._fulfilled = function() {
                    return this._totalResolved
                }, i.prototype._rejected = function() {
                    return this._values.length - this.length()
                }, i.prototype._addRejected = function(e) {
                    this._values.push(e)
                }, i.prototype._addFulfilled = function(e) {
                    this._values[this._totalResolved++] = e
                }, i.prototype._canPossiblyFulfill = function() {
                    return this.length() - this._rejected()
                }, i.prototype._getRangeError = function(e) {
                    var t = "Input array must contain at least " + this._howMany + " items but contains only " + e + " items";
                    return new a(t)
                }, i.prototype._resolveEmptyArray = function() {
                    this._reject(this._getRangeError(0))
                }, t.some = function(e, t) {
                    return o(e, t)
                }, t.prototype.some = function(e) {
                    return o(this, e)
                }, t._SomePromiseArray = i
            }
        }, {
            "./errors": 12,
            "./util": 36
        }],
        32: [function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                function t(e) {
                    void 0 !== e ? (e = e._target(), this._bitField = e._bitField, this._settledValueField = e._isFateSealed() ? e._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0)
                }
                t.prototype._settledValue = function() {
                    return this._settledValueField
                };
                var n = t.prototype.value = function() {
                        if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
                        return this._settledValue()
                    },
                    r = t.prototype.error = t.prototype.reason = function() {
                        if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
                        return this._settledValue()
                    },
                    i = t.prototype.isFulfilled = function() {
                        return 0 != (33554432 & this._bitField)
                    },
                    o = t.prototype.isRejected = function() {
                        return 0 != (16777216 & this._bitField)
                    },
                    s = t.prototype.isPending = function() {
                        return 0 == (50397184 & this._bitField)
                    },
                    a = t.prototype.isResolved = function() {
                        return 0 != (50331648 & this._bitField)
                    };
                t.prototype.isCancelled = function() {
                    return 0 != (8454144 & this._bitField)
                }, e.prototype.__isCancelled = function() {
                    return 65536 == (65536 & this._bitField)
                }, e.prototype._isCancelled = function() {
                    return this._target().__isCancelled()
                }, e.prototype.isCancelled = function() {
                    return 0 != (8454144 & this._target()._bitField)
                }, e.prototype.isPending = function() {
                    return s.call(this._target())
                }, e.prototype.isRejected = function() {
                    return o.call(this._target())
                }, e.prototype.isFulfilled = function() {
                    return i.call(this._target())
                }, e.prototype.isResolved = function() {
                    return a.call(this._target())
                }, e.prototype.value = function() {
                    return n.call(this._target())
                }, e.prototype.reason = function() {
                    var e = this._target();
                    return e._unsetRejectionIsUnhandled(), r.call(e)
                }, e.prototype._value = function() {
                    return this._settledValue()
                }, e.prototype._reason = function() {
                    return this._unsetRejectionIsUnhandled(), this._settledValue()
                }, e.PromiseInspection = t
            }
        }, {}],
        33: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n) {
                function r(e, r) {
                    if (c(e)) {
                        if (e instanceof t) return e;
                        var i = o(e);
                        if (i === l) {
                            r && r._pushContext();
                            var u = t.reject(i.e);
                            return r && r._popContext(), u
                        }
                        if ("function" == typeof i) {
                            if (s(e)) {
                                var u = new t(n);
                                return e._then(u._fulfill, u._reject, void 0, u, null), u
                            }
                            return a(e, i, r)
                        }
                    }
                    return e
                }

                function i(e) {
                    return e.then
                }

                function o(e) {
                    try {
                        return i(e)
                    } catch (e) {
                        return l.e = e, l
                    }
                }

                function s(e) {
                    try {
                        return h.call(e, "_promise0")
                    } catch (e) {
                        return !1
                    }
                }

                function a(e, r, i) {
                    function o(e) {
                        a && (a._resolveCallback(e), a = null)
                    }

                    function s(e) {
                        a && (a._rejectCallback(e, h, !0), a = null)
                    }
                    var a = new t(n),
                        c = a;
                    i && i._pushContext(), a._captureStackTrace(), i && i._popContext();
                    var h = !0,
                        d = u.tryCatch(r).call(e, o, s);
                    return h = !1, a && d === l && (a._rejectCallback(d.e, !0, !0), a = null), c
                }
                var u = e("./util"),
                    l = u.errorObj,
                    c = u.isObject,
                    h = {}.hasOwnProperty;
                return r
            }
        }, {
            "./util": 36
        }],
        34: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r) {
                function i(e) {
                    this.handle = e
                }

                function o(e) {
                    return clearTimeout(this.handle), e
                }

                function s(e) {
                    throw clearTimeout(this.handle), e
                }
                var a = e("./util"),
                    u = t.TimeoutError;
                i.prototype._resultCancelled = function() {
                    clearTimeout(this.handle)
                };
                var l = function(e) {
                        return c(+this).thenReturn(e)
                    },
                    c = t.delay = function(e, o) {
                        var s, a;
                        return void 0 !== o ? (s = t.resolve(o)._then(l, null, null, e, void 0), r.cancellation() && o instanceof t && s._setOnCancel(o)) : (s = new t(n), a = setTimeout(function() {
                            s._fulfill()
                        }, +e), r.cancellation() && s._setOnCancel(new i(a)), s._captureStackTrace()), s._setAsyncGuaranteed(), s
                    };
                t.prototype.delay = function(e) {
                    return c(e, this)
                };
                var h = function(e, t, n) {
                    var r;
                    r = "string" != typeof t ? t instanceof Error ? t : new u("operation timed out") : new u(t), a.markAsOriginatingFromRejection(r), e._attachExtraTrace(r), e._reject(r), null != n && n.cancel()
                };
                t.prototype.timeout = function(e, t) {
                    e = +e;
                    var n, a, u = new i(setTimeout(function() {
                        n.isPending() && h(n, t, a)
                    }, e));
                    return r.cancellation() ? (a = this.then(), n = a._then(o, s, void 0, u, void 0), n._setOnCancel(u)) : n = this._then(o, s, void 0, u, void 0), n
                }
            }
        }, {
            "./util": 36
        }],
        35: [function(e, t, n) {
            "use strict";
            t.exports = function(t, n, r, i, o, s) {
                function a(e) {
                    setTimeout(function() {
                        throw e
                    }, 0)
                }

                function u(e) {
                    var t = r(e);
                    return t !== e && "function" == typeof e._isDisposable && "function" == typeof e._getDisposer && e._isDisposable() && t._setDisposable(e._getDisposer()), t
                }

                function l(e, n) {
                    function i() {
                        if (s >= l) return c._fulfill();
                        var o = u(e[s++]);
                        if (o instanceof t && o._isDisposable()) {
                            try {
                                o = r(o._getDisposer().tryDispose(n), e.promise)
                            } catch (e) {
                                return a(e)
                            }
                            if (o instanceof t) return o._then(i, a, null, null, null)
                        }
                        i()
                    }
                    var s = 0,
                        l = e.length,
                        c = new t(o);
                    return i(), c
                }

                function c(e, t, n) {
                    this._data = e, this._promise = t, this._context = n
                }

                function h(e, t, n) {
                    this.constructor$(e, t, n)
                }

                function d(e) {
                    return c.isDisposer(e) ? (this.resources[this.index]._setDisposable(e), e.promise()) : e
                }

                function p(e) {
                    this.length = e, this.promise = null, this[e - 1] = null
                }
                var f = e("./util"),
                    v = e("./errors").TypeError,
                    m = e("./util").inherits,
                    g = f.errorObj,
                    y = f.tryCatch,
                    b = {};
                c.prototype.data = function() {
                    return this._data
                }, c.prototype.promise = function() {
                    return this._promise
                }, c.prototype.resource = function() {
                    return this.promise().isFulfilled() ? this.promise().value() : b
                }, c.prototype.tryDispose = function(e) {
                    var t = this.resource(),
                        n = this._context;
                    void 0 !== n && n._pushContext();
                    var r = t !== b ? this.doDispose(t, e) : null;
                    return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, r
                }, c.isDisposer = function(e) {
                    return null != e && "function" == typeof e.resource && "function" == typeof e.tryDispose
                }, m(h, c), h.prototype.doDispose = function(e, t) {
                    return this.data().call(e, e, t)
                }, p.prototype._resultCancelled = function() {
                    for (var e = this.length, n = 0; n < e; ++n) {
                        var r = this[n];
                        r instanceof t && r.cancel()
                    }
                }, t.using = function() {
                    var e = arguments.length;
                    if (e < 2) return n("you must pass at least 2 arguments to Promise.using");
                    var i = arguments[e - 1];
                    if ("function" != typeof i) return n("expecting a function but got " + f.classString(i));
                    var o, a = !0;
                    2 === e && Array.isArray(arguments[0]) ? (o = arguments[0], e = o.length, a = !1) : (o = arguments, e--);
                    for (var u = new p(e), h = 0; h < e; ++h) {
                        var v = o[h];
                        if (c.isDisposer(v)) {
                            var m = v;
                            v = v.promise(), v._setDisposable(m)
                        } else {
                            var b = r(v);
                            b instanceof t && (v = b._then(d, null, null, {
                                resources: u,
                                index: h
                            }, void 0))
                        }
                        u[h] = v
                    }
                    for (var w = new Array(u.length), h = 0; h < w.length; ++h) w[h] = t.resolve(u[h]).reflect();
                    var _ = t.all(w).then(function(e) {
                            for (var t = 0; t < e.length; ++t) {
                                var n = e[t];
                                if (n.isRejected()) return g.e = n.error(), g;
                                if (!n.isFulfilled()) return void _.cancel();
                                e[t] = n.value()
                            }
                            x._pushContext(), i = y(i);
                            var r = a ? i.apply(void 0, e) : i(e),
                                o = x._popContext();
                            return s.checkForgottenReturns(r, o, "Promise.using", x), r
                        }),
                        x = _.lastly(function() {
                            var e = new t.PromiseInspection(_);
                            return l(u, e)
                        });
                    return u.promise = x, x._setOnCancel(u), x
                }, t.prototype._setDisposable = function(e) {
                    this._bitField = 131072 | this._bitField, this._disposer = e
                }, t.prototype._isDisposable = function() {
                    return (131072 & this._bitField) > 0
                }, t.prototype._getDisposer = function() {
                    return this._disposer
                }, t.prototype._unsetDisposable = function() {
                    this._bitField = -131073 & this._bitField, this._disposer = void 0
                }, t.prototype.disposer = function(e) {
                    if ("function" == typeof e) return new h(e, this, i());
                    throw new v
                }
            }
        }, {
            "./errors": 12,
            "./util": 36
        }],
        36: [function(e, t, n) {
            "use strict";

            function r() {
                try {
                    var e = R;
                    return R = null, e.apply(this, arguments)
                } catch (e) {
                    return M.e = e, M
                }
            }

            function i(e) {
                return R = e, r
            }

            function o(e) {
                return null == e || !0 === e || !1 === e || "string" == typeof e || "number" == typeof e
            }

            function s(e) {
                return "function" == typeof e || "object" == typeof e && null !== e
            }

            function a(e) {
                return o(e) ? new Error(m(e)) : e
            }

            function u(e, t) {
                var n, r = e.length,
                    i = new Array(r + 1);
                for (n = 0; n < r; ++n) i[n] = e[n];
                return i[n] = t, i
            }

            function l(e, t, n) {
                if (!E.isES5) return {}.hasOwnProperty.call(e, t) ? e[t] : void 0;
                var r = Object.getOwnPropertyDescriptor(e, t);
                return null != r ? null == r.get && null == r.set ? r.value : n : void 0
            }

            function c(e, t, n) {
                if (o(e)) return e;
                var r = {
                    value: n,
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                };
                return E.defineProperty(e, t, r), e
            }

            function h(e) {
                throw e
            }

            function d(e) {
                try {
                    if ("function" == typeof e) {
                        var t = E.names(e.prototype),
                            n = E.isES5 && t.length > 1,
                            r = t.length > 0 && !(1 === t.length && "constructor" === t[0]),
                            i = j.test(e + "") && E.names(e).length > 0;
                        if (n || r || i) return !0
                    }
                    return !1
                } catch (e) {
                    return !1
                }
            }

            function p(e) {
                function t() {}
                t.prototype = e;
                for (var n = 8; n--;) new t;
                return e
            }

            function f(e) {
                return L.test(e)
            }

            function v(e, t, n) {
                for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t + i + n;
                return r
            }

            function m(e) {
                try {
                    return e + ""
                } catch (e) {
                    return "[no string representation]"
                }
            }

            function g(e) {
                return null !== e && "object" == typeof e && "string" == typeof e.message && "string" == typeof e.name
            }

            function y(e) {
                try {
                    c(e, "isOperational", !0)
                } catch (e) {}
            }

            function b(e) {
                return null != e && (e instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === e.isOperational)
            }

            function w(e) {
                return g(e) && E.propertyIsWritable(e, "stack")
            }

            function _(e) {
                return {}.toString.call(e)
            }

            function x(e, t, n) {
                for (var r = E.names(e), i = 0; i < r.length; ++i) {
                    var o = r[i];
                    if (n(o)) try {
                        E.defineProperty(t, o, E.getDescriptor(e, o))
                    } catch (e) {}
                }
            }

            function S(e) {
                return V ? process.env[e] : void 0
            }

            function C() {
                if ("function" == typeof Promise) try {
                    var e = new Promise(function() {});
                    if ("[object Promise]" === {}.toString.call(e)) return Promise
                } catch (e) {}
            }

            function k(e, t) {
                return e.bind(t)
            }
            var E = e("./es5"),
                O = "undefined" == typeof navigator,
                M = {
                    e: {}
                },
                R, A = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0 !== this ? this : null,
                P = function(e, t) {
                    function n() {
                        this.constructor = e, this.constructor$ = t;
                        for (var n in t.prototype) r.call(t.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = t.prototype[n])
                    }
                    var r = {}.hasOwnProperty;
                    return n.prototype = t.prototype, e.prototype = new n, e.prototype
                },
                T = function() {
                    var e = [Array.prototype, Object.prototype, Function.prototype],
                        t = function(t) {
                            for (var n = 0; n < e.length; ++n)
                                if (e[n] === t) return !0;
                            return !1
                        };
                    if (E.isES5) {
                        var n = Object.getOwnPropertyNames;
                        return function(e) {
                            for (var r = [], i = Object.create(null); null != e && !t(e);) {
                                var o;
                                try {
                                    o = n(e)
                                } catch (e) {
                                    return r
                                }
                                for (var s = 0; s < o.length; ++s) {
                                    var a = o[s];
                                    if (!i[a]) {
                                        i[a] = !0;
                                        var u = Object.getOwnPropertyDescriptor(e, a);
                                        null != u && null == u.get && null == u.set && r.push(a)
                                    }
                                }
                                e = E.getPrototypeOf(e)
                            }
                            return r
                        }
                    }
                    var r = {}.hasOwnProperty;
                    return function(n) {
                        if (t(n)) return [];
                        var i = [];
                        e: for (var o in n)
                            if (r.call(n, o)) i.push(o);
                            else {
                                for (var s = 0; s < e.length; ++s)
                                    if (r.call(e[s], o)) continue e;
                                i.push(o)
                            }
                        return i
                    }
                }(),
                j = /this\s*\.\s*\S+\s*=/,
                L = /^[a-z$_][a-z$_0-9]*$/i,
                F = function() {
                    return "stack" in new Error ? function(e) {
                        return w(e) ? e : new Error(m(e))
                    } : function(e) {
                        if (w(e)) return e;
                        try {
                            throw new Error(m(e))
                        } catch (e) {
                            return e
                        }
                    }
                }(),
                N = function(e) {
                    return E.isArray(e) ? e : null
                };
            if ("undefined" != typeof Symbol && Symbol.iterator) {
                var D = "function" == typeof Array.from ? function(e) {
                    return Array.from(e)
                } : function(e) {
                    for (var t, n = [], r = e[Symbol.iterator](); !(t = r.next()).done;) n.push(t.value);
                    return n
                };
                N = function(e) {
                    return E.isArray(e) ? e : null != e && "function" == typeof e[Symbol.iterator] ? D(e) : null
                }
            }
            var I = "undefined" != typeof process && "[object process]" === _(process).toLowerCase(),
                V = "undefined" != typeof process && void 0 !== process.env,
                B = {
                    isClass: d,
                    isIdentifier: f,
                    inheritedDataKeys: T,
                    getDataPropertyOrDefault: l,
                    thrower: h,
                    isArray: E.isArray,
                    asArray: N,
                    notEnumerableProp: c,
                    isPrimitive: o,
                    isObject: s,
                    isError: g,
                    canEvaluate: O,
                    errorObj: M,
                    tryCatch: i,
                    inherits: P,
                    withAppended: u,
                    maybeWrapAsError: a,
                    toFastProperties: p,
                    filledRange: v,
                    toString: m,
                    canAttachTrace: w,
                    ensureErrorObject: F,
                    originatesFromRejection: b,
                    markAsOriginatingFromRejection: y,
                    classString: _,
                    copyDescriptors: x,
                    hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
                    isNode: I,
                    hasEnvVariables: V,
                    env: S,
                    global: A,
                    getNativePromise: C,
                    domainBind: k
                };
            B.isRecentNode = B.isNode && function() {
                var e = process.versions.node.split(".").map(Number);
                return 0 === e[0] && e[1] > 10 || e[0] > 0
            }(), B.isNode && B.toFastProperties(process);
            try {
                throw new Error
            } catch (e) {
                B.lastLineError = e
            }
            t.exports = B
        }, {
            "./es5": 13
        }]
    }, {}, [4])(4)
}), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise);
var requirejs, require, define;
! function(global, setTimeout) {
    function commentReplace(e, t) {
        return t || ""
    }

    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }

    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }

    function each(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
        }
    }

    function eachReverse(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)); n -= 1);
        }
    }

    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }

    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }

    function eachProp(e, t) {
        var n;
        for (n in e)
            if (hasProp(e, n) && t(e[n], n)) break
    }

    function mixin(e, t, n, r) {
        return t && eachProp(t, function(t, i) {
            !n && hasProp(e, i) || (!r || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[i] = t : (e[i] || (e[i] = {}), mixin(e[i], t, n, r)))
        }), e
    }

    function bind(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(e) {
        throw e
    }

    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function(e) {
            t = t[e]
        }), t
    }

    function makeError(e, t, n, r) {
        var i = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return i.requireType = e, i.requireModules = r, n && (i.originalError = n), i
    }

    function newContext(e) {
        function t(e) {
            var t, n;
            for (t = 0; t < e.length; t++)
                if ("." === (n = e[t])) e.splice(t, 1), t -= 1;
                else if (".." === n) {
                if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1]) continue;
                t > 0 && (e.splice(t - 1, 2), t -= 2)
            }
        }

        function n(e, n, r) {
            var i, o, s, a, u, l, c, h, d, p, f, v = n && n.split("/"),
                m = S.map,
                g = m && m["*"];
            if (e && (e = e.split("/"), l = e.length - 1, S.nodeIdCompat && jsSuffixRegExp.test(e[l]) && (e[l] = e[l].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && v && (f = v.slice(0, v.length - 1), e = f.concat(e)), t(e), e = e.join("/")), r && m && (v || g)) {
                o = e.split("/");
                e: for (s = o.length; s > 0; s -= 1) {
                    if (u = o.slice(0, s).join("/"), v)
                        for (a = v.length; a > 0; a -= 1)
                            if ((i = getOwn(m, v.slice(0, a).join("/"))) && (i = getOwn(i, u))) {
                                c = i, h = s;
                                break e
                            }! d && g && getOwn(g, u) && (d = getOwn(g, u), p = s)
                }!c && d && (c = d, h = p), c && (o.splice(0, h, c), e = o.join("/"))
            }
            return getOwn(S.pkgs, e) || e
        }

        function r(e) {
            isBrowser && each(scripts(), function(t) {
                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === w.contextName) return t.parentNode.removeChild(t), !0
            })
        }

        function i(e) {
            var t = getOwn(S.paths, e);
            if (t && isArray(t) && t.length > 1) return t.shift(), w.require.undef(e), w.makeRequire(null, {
                skipMap: !0
            })([e]), !0
        }

        function o(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function s(e, t, r, i) {
            var s, a, u, l, c = null,
                h = t ? t.name : null,
                d = e,
                p = !0,
                f = "";
            return e || (p = !1, e = "_@r" + (P += 1)), l = o(e), c = l[0], e = l[1], c && (c = n(c, h, i), a = getOwn(M, c)), e && (c ? f = r ? e : a && a.normalize ? a.normalize(e, function(e) {
                return n(e, h, i)
            }) : -1 === e.indexOf("!") ? n(e, h, i) : e : (f = n(e, h, i), l = o(f), c = l[0], f = l[1], r = !0, s = w.nameToUrl(f))), u = !c || a || r ? "" : "_unnormalized" + (T += 1), {
                prefix: c,
                name: f,
                parentMap: t,
                unnormalized: !!u,
                url: s,
                originalName: d,
                isDefine: p,
                id: (c ? c + "!" + f : f) + u
            }
        }

        function a(e) {
            var t = e.id,
                n = getOwn(C, t);
            return n || (n = C[t] = new w.Module(e)), n
        }

        function u(e, t, n) {
            var r = e.id,
                i = getOwn(C, r);
            !hasProp(M, r) || i && !i.defineEmitComplete ? (i = a(e), i.error && "error" === t ? n(i.error) : i.on(t, n)) : "defined" === t && n(M[r])
        }

        function l(e, t) {
            var n = e.requireModules,
                r = !1;
            t ? t(e) : (each(n, function(t) {
                var n = getOwn(C, t);
                n && (n.error = e, n.events.error && (r = !0, n.emit("error", e)))
            }), r || req.onError(e))
        }

        function c() {
            globalDefQueue.length && (each(globalDefQueue, function(e) {
                var t = e[0];
                "string" == typeof t && (w.defQueueMap[t] = !0), O.push(e)
            }), globalDefQueue = [])
        }

        function h(e) {
            delete C[e], delete k[e]
        }

        function d(e, t, n) {
            var r = e.map.id;
            e.error ? e.emit("error", e.error) : (t[r] = !0, each(e.depMaps, function(r, i) {
                var o = r.id,
                    s = getOwn(C, o);
                !s || e.depMatched[i] || n[o] || (getOwn(t, o) ? (e.defineDep(i, M[o]), e.check()) : d(s, t, n))
            }), n[r] = !0)
        }

        function p() {
            var e, t, n = 1e3 * S.waitSeconds,
                o = n && w.startTime + n < (new Date).getTime(),
                s = [],
                a = [],
                u = !1,
                c = !0;
            if (!y) {
                if (y = !0, eachProp(k, function(e) {
                        var n = e.map,
                            l = n.id;
                        if (e.enabled && (n.isDefine || a.push(e), !e.error))
                            if (!e.inited && o) i(l) ? (t = !0, u = !0) : (s.push(l), r(l));
                            else if (!e.inited && e.fetched && n.isDefine && (u = !0, !n.prefix)) return c = !1
                    }), o && s.length) return e = makeError("timeout", "Load timeout for modules: " + s, null, s), e.contextName = w.contextName, l(e);
                c && each(a, function(e) {
                    d(e, {}, {})
                }), o && !t || !u || !isBrowser && !isWebWorker || x || (x = setTimeout(function() {
                    x = 0, p()
                }, 50)), y = !1
            }
        }

        function f(e) {
            hasProp(M, e[0]) || a(s(e[0], null, !0)).init(e[1], e[2])
        }

        function v(e, t, n, r) {
            e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(n, t, !1)
        }

        function m(e) {
            var t = e.currentTarget || e.srcElement;
            return v(t, w.onScriptLoad, "load", "onreadystatechange"), v(t, w.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function g() {
            var e;
            for (c(); O.length;) {
                if (e = O.shift(), null === e[0]) return l(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                f(e)
            }
            w.defQueueMap = {}
        }
        var y, b, w, _, x, S = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            C = {},
            k = {},
            E = {},
            O = [],
            M = {},
            R = {},
            A = {},
            P = 1,
            T = 1;
        return _ = {
            require: function(e) {
                return e.require ? e.require : e.require = w.makeRequire(e.map)
            },
            exports: function(e) {
                if (e.usingExports = !0, e.map.isDefine) return e.exports ? M[e.map.id] = e.exports : e.exports = M[e.map.id] = {}
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        return getOwn(S.config, e.map.id) || {}
                    },
                    exports: e.exports || (e.exports = {})
                }
            }
        }, b = function(e) {
            this.events = getOwn(E, e.id) || {}, this.map = e, this.shim = getOwn(S.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, b.prototype = {
            init: function(e, t, n, r) {
                r = r || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, w.startTime = (new Date).getTime();
                    var e = this.map;
                    if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                    w.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    }))
                }
            },
            load: function() {
                var e = this.map.url;
                R[e] || (R[e] = !0, w.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id,
                        r = this.depExports,
                        i = this.exports,
                        o = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                        i = w.execCb(n, o, r, i)
                                    } catch (t) {
                                        e = t
                                    } else i = w.execCb(n, o, r, i);
                                    if (this.map.isDefine && void 0 === i && (t = this.module, t ? i = t.exports : this.usingExports && (i = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", l(this.error = e)
                                } else i = o;
                                if (this.exports = i, this.map.isDefine && !this.ignore && (M[n] = i, req.onResourceLoad)) {
                                    var s = [];
                                    each(this.depMaps, function(e) {
                                        s.push(e.normalizedMap || e)
                                    }), req.onResourceLoad(w, this.map, s)
                                }
                                h(n), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else hasProp(w.defQueueMap, n) || this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map,
                    t = e.id,
                    r = s(e.prefix);
                this.depMaps.push(r), u(r, "defined", bind(this, function(r) {
                    var i, o, c, d = getOwn(A, this.map.id),
                        p = this.map.name,
                        f = this.map.parentMap ? this.map.parentMap.name : null,
                        v = w.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                    return this.map.unnormalized ? (r.normalize && (p = r.normalize(p, function(e) {
                        return n(e, f, !0)
                    }) || ""), o = s(e.prefix + "!" + p, this.map.parentMap, !0), u(o, "defined", bind(this, function(e) {
                        this.map.normalizedMap = o, this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), void((c = getOwn(C, o.id)) && (this.depMaps.push(o), this.events.error && c.on("error", bind(this, function(e) {
                        this.emit("error", e)
                    })), c.enable()))) : d ? (this.map.url = w.nameToUrl(d), void this.load()) : (i = bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    }), i.error = bind(this, function(e) {
                        this.inited = !0, this.error = e, e.requireModules = [t], eachProp(C, function(e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && h(e.map.id)
                        }), l(e)
                    }), i.fromText = bind(this, function(n, r) {
                        var o = e.name,
                            u = s(o),
                            c = useInteractive;
                        r && (n = r), c && (useInteractive = !1), a(u), hasProp(S.config, t) && (S.config[o] = S.config[t]);
                        try {
                            req.exec(n)
                        } catch (e) {
                            return l(makeError("fromtexteval", "fromText eval for " + t + " failed: " + e, e, [t]))
                        }
                        c && (useInteractive = !0), this.depMaps.push(u), w.completeLoad(o), v([o], i)
                    }), void r.load(e.name, v, i, S))
                })), w.enable(r, this), this.pluginMaps[r.id] = r
            },
            enable: function() {
                k[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
                    var n, r, i;
                    if ("string" == typeof e) {
                        if (e = s(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, i = getOwn(_, e.id)) return void(this.depExports[t] = i(this));
                        this.depCount += 1, u(e, "defined", bind(this, function(e) {
                            this.undefed || (this.defineDep(t, e), this.check())
                        })), this.errback ? u(e, "error", bind(this, this.errback)) : this.events.error && u(e, "error", bind(this, function(e) {
                            this.emit("error", e)
                        }))
                    }
                    n = e.id, r = C[n], hasProp(_, n) || !r || r.enabled || w.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function(e) {
                    var t = getOwn(C, e.id);
                    t && !t.enabled && w.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function(e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            },
            emit: function(e, t) {
                each(this.events[e], function(e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, w = {
            config: S,
            contextName: e,
            registry: C,
            defined: M,
            urlFetched: R,
            defQueue: O,
            defQueueMap: {},
            Module: b,
            makeModuleMap: s,
            nextTick: req.nextTick,
            onError: l,
            configure: function(e) {
                if (e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/"), "string" == typeof e.urlArgs) {
                    var t = e.urlArgs;
                    e.urlArgs = function(e, n) {
                        return (-1 === n.indexOf("?") ? "?" : "&") + t
                    }
                }
                var n = S.shim,
                    r = {
                        paths: !0,
                        bundles: !0,
                        config: !0,
                        map: !0
                    };
                eachProp(e, function(e, t) {
                    r[t] ? (S[t] || (S[t] = {}), mixin(S[t], e, !0, !0)) : S[t] = e
                }), e.bundles && eachProp(e.bundles, function(e, t) {
                    each(e, function(e) {
                        e !== t && (A[e] = t)
                    })
                }), e.shim && (eachProp(e.shim, function(e, t) {
                    isArray(e) && (e = {
                        deps: e
                    }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = w.makeShimExports(e)), n[t] = e
                }), S.shim = n), e.packages && each(e.packages, function(e) {
                    var t, n;
                    e = "string" == typeof e ? {
                        name: e
                    } : e, n = e.name, t = e.location, t && (S.paths[n] = e.location), S.pkgs[n] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }), eachProp(C, function(e, t) {
                    e.inited || e.map.unnormalized || (e.map = s(t, null, !0))
                }), (e.deps || e.callback) && w.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                }
                return t
            },
            makeRequire: function(t, i) {
                function o(n, r, u) {
                    var c, h, d;
                    return i.enableBuildCallback && r && isFunction(r) && (r.__requireJsBuild = !0), "string" == typeof n ? isFunction(r) ? l(makeError("requireargs", "Invalid require call"), u) : t && hasProp(_, n) ? _[n](C[t.id]) : req.get ? req.get(w, n, t, o) : (h = s(n, t, !1, !0), c = h.id, hasProp(M, c) ? M[c] : l(makeError("notloaded", 'Module name "' + c + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (g(), w.nextTick(function() {
                        g(), d = a(s(null, t)), d.skipMap = i.skipMap, d.init(n, r, u, {
                            enabled: !0
                        }), p()
                    }), o)
                }
                return i = i || {}, mixin(o, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var r, i = e.lastIndexOf("."),
                            o = e.split("/")[0],
                            s = "." === o || ".." === o;
                        return -1 !== i && (!s || i > 1) && (r = e.substring(i, e.length), e = e.substring(0, i)), w.nameToUrl(n(e, t && t.id, !0), r, !0)
                    },
                    defined: function(e) {
                        return hasProp(M, s(e, t, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = s(e, t, !1, !0).id, hasProp(M, e) || hasProp(C, e)
                    }
                }), t || (o.undef = function(e) {
                    c();
                    var n = s(e, t, !0),
                        i = getOwn(C, e);
                    i.undefed = !0, r(e), delete M[e], delete R[n.url], delete E[e], eachReverse(O, function(t, n) {
                        t[0] === e && O.splice(n, 1)
                    }), delete w.defQueueMap[e], i && (i.events.defined && (E[e] = i.events), h(e))
                }), o
            },
            enable: function(e) {
                getOwn(C, e.id) && a(e).enable()
            },
            completeLoad: function(e) {
                var t, n, r, o = getOwn(S.shim, e) || {},
                    s = o.exports;
                for (c(); O.length;) {
                    if (n = O.shift(), null === n[0]) {
                        if (n[0] = e, t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    f(n)
                }
                if (w.defQueueMap = {}, r = getOwn(C, e), !t && !hasProp(M, e) && r && !r.inited) {
                    if (!(!S.enforceDefine || s && getGlobal(s))) return i(e) ? void 0 : l(makeError("nodefine", "No define call for " + e, null, [e]));
                    f([e, o.deps || [], o.exportsFn])
                }
                p()
            },
            nameToUrl: function(e, t, n) {
                var r, i, o, s, a, u, l, c = getOwn(S.pkgs, e);
                if (c && (e = c), l = getOwn(A, e)) return w.nameToUrl(l, t, n);
                if (req.jsExtRegExp.test(e)) a = e + (t || "");
                else {
                    for (r = S.paths, i = e.split("/"), o = i.length; o > 0; o -= 1)
                        if (s = i.slice(0, o).join("/"), u = getOwn(r, s)) {
                            isArray(u) && (u = u[0]), i.splice(0, o, u);
                            break
                        } a = i.join("/"), a += t || (/^data\:|^blob\:|\?/.test(a) || n ? "" : ".js"), a = ("/" === a.charAt(0) || a.match(/^[\w\+\.\-]+:/) ? "" : S.baseUrl) + a
                }
                return S.urlArgs && !/^blob\:/.test(a) ? a + S.urlArgs(e, a) : a
            },
            load: function(e, t) {
                req.load(w, e, t)
            },
            execCb: function(e, t, n, r) {
                return t.apply(r, n)
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = m(e);
                    w.completeLoad(t.id)
                }
            },
            onScriptError: function(e) {
                var t = m(e);
                if (!i(t.id)) {
                    var n = [];
                    return eachProp(C, function(e, r) {
                        0 !== r.indexOf("_@r") && each(e.depMaps, function(e) {
                            if (e.id === t.id) return n.push(r), !0
                        })
                    }), l(makeError("scripterror", 'Script error for "' + t.id + (n.length ? '", needed by: ' + n.join(", ") : '"'), e, [t.id]))
                }
            }
        }, w.require = w.makeRequire(), w
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
            if ("interactive" === e.readyState) return interactiveScript = e
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.3.3",
        commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = !1;
    if (void 0 === define) {
        if (void 0 !== requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        void 0 === require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, n, r) {
            var i, o, s = defContextName;
            return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = n, n = r) : e = []), o && o.context && (s = o.context), i = getOwn(contexts, s), i || (i = contexts[s] = req.s.newContext(s)), o && i.configure(o), i.require(e, t, n)
        }, req.config = function(e) {
            return req(e)
        }, req.nextTick = void 0 !== setTimeout ? function(e) {
            setTimeout(e, 4)
        } : function(e) {
            e()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
            req[e] = function() {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], (baseElement = document.getElementsByTagName("base")[0]) && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, n) {
            var r = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return r.type = e.scriptType || "text/javascript", r.charset = "utf-8", r.async = !0, r
        }, req.load = function(e, t, n) {
            var r, i = e && e.config || {};
            if (isBrowser) return r = req.createNode(i, t, n), r.setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), !r.attachEvent || r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, r.attachEvent("onreadystatechange", e.onScriptLoad)), r.src = n, i.onNodeCreated && i.onNodeCreated(r, i, t, n), currentlyAddingScript = r, baseElement ? head.insertBefore(r, baseElement) : head.appendChild(r), currentlyAddingScript = null, r;
            if (isWebWorker) try {
                setTimeout(function() {}, 0), importScripts(n), e.completeLoad(t)
            } catch (r) {
                e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, r, [t]))
            }
        }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
            if (head || (head = e.parentNode), dataMain = e.getAttribute("data-main")) return mainScript = dataMain, cfg.baseUrl || -1 !== mainScript.indexOf("!") || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
        }), define = function(e, t, n) {
            var r, i;
            "string" != typeof e && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, commentReplace).replace(cjsRequireRegExp, function(e, n) {
                t.push(n)
            }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (r = currentlyAddingScript || getInteractiveScript()) && (e || (e = r.getAttribute("data-requiremodule")), i = contexts[r.getAttribute("data-requirecontext")]), i ? (i.defQueue.push([e, t, n]), i.defQueueMap[e] = !0) : globalDefQueue.push([e, t, n])
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text)
        }, req(cfg)
    }
}(this, "undefined" == typeof setTimeout ? void 0 : setTimeout), _aureliaConfigureModuleLoader();
var __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues;
! function(e) {
    function t(e, t) {
        return function(n, r) {
            return e[n] = t ? t(n, r) : r
        }
    }
    var n = "object" == typeof global ? global : "object" == typeof self ? self : "object" == typeof this ? this : {};
    "function" == typeof define && define.amd ? define("tslib", ["exports"], function(r) {
        e(t(n, t(r)))
    }) : e("object" == typeof module && "object" == typeof module.exports ? t(n, t(module.exports)) : t(n))
}(function(e) {
    var t = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(e, t) {
        e.__proto__ = t
    } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
    };
    __extends = function(e, n) {
        function r() {
            this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }, __assign = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        }
        return e
    }, __rest = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && (n[r[i]] = e[r[i]]);
        return n
    }, __decorate = function(e, t, n, r) {
        var i, o = arguments.length,
            s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
        else
            for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
        return o > 3 && s && Object.defineProperty(t, n, s), s
    }, __param = function(e, t) {
        return function(n, r) {
            t(n, r, e)
        }
    }, __metadata = function(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
    }, __awaiter = function(e, t, n, r) {
        return new(n || (n = Promise))(function(i, o) {
            function s(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                e.done ? i(e.value) : new n(function(t) {
                    t(e.value)
                }).then(s, a)
            }
            u((r = r.apply(e, t || [])).next())
        })
    }, __generator = function(e, t) {
        function n(e) {
            return function(t) {
                return r([e, t])
            }
        }

        function r(n) {
            if (i) throw new TypeError("Generator is already executing.");
            for (; u;) try {
                if (i = 1, o && (s = o[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(s = s.call(o, n[1])).done) return s;
                switch (o = 0, s && (n = [0, s.value]), n[0]) {
                    case 0:
                    case 1:
                        s = n;
                        break;
                    case 4:
                        return u.label++, {
                            value: n[1],
                            done: !1
                        };
                    case 5:
                        u.label++, o = n[1], n = [0];
                        continue;
                    case 7:
                        n = u.ops.pop(), u.trys.pop();
                        continue;
                    default:
                        if (s = u.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                            u = 0;
                            continue
                        }
                        if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                            u.label = n[1];
                            break
                        }
                        if (6 === n[0] && u.label < s[1]) {
                            u.label = s[1], s = n;
                            break
                        }
                        if (s && u.label < s[2]) {
                            u.label = s[2], u.ops.push(n);
                            break
                        }
                        s[2] && u.ops.pop(), u.trys.pop();
                        continue
                }
                n = t.call(e, u)
            } catch (e) {
                n = [6, e], o = 0
            } finally {
                i = s = 0
            }
            if (5 & n[0]) throw n[1];
            return {
                value: n[0] ? n[1] : void 0,
                done: !0
            }
        }
        var i, o, s, a, u = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: n(0),
            throw: n(1),
            return: n(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a
    }, __exportStar = function(e, t) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }, __values = function(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator],
            n = 0;
        return t ? t.call(e) : {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        }
    }, __read = function(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, i, o = n.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return s
    }, __spread = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    }, __await = function(e) {
        return this instanceof __await ? (this.v = e, this) : new __await(e)
    }, __asyncGenerator = function(e, t, n) {
        function r(e) {
            c[e] && (l[e] = function(t) {
                return new Promise(function(n, r) {
                    h.push([e, t, n, r]) > 1 || i(e, t)
                })
            })
        }

        function i(e, t) {
            try {
                o(c[e](t))
            } catch (e) {
                u(h[0][3], e)
            }
        }

        function o(e) {
            e.value instanceof __await ? Promise.resolve(e.value.v).then(s, a) : u(h[0][2], e)
        }

        function s(e) {
            i("next", e)
        }

        function a(e) {
            i("throw", e)
        }

        function u(e, t) {
            e(t), h.shift(), h.length && i(h[0][0], h[0][1])
        }
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var l, c = n.apply(e, t || []),
            h = [];
        return l = {}, r("next"), r("throw"), r("return"), l[Symbol.asyncIterator] = function() {
            return this
        }, l
    }, __asyncDelegator = function(e) {
        function t(t, i) {
            e[t] && (n[t] = function(n) {
                return (r = !r) ? {
                    value: __await(e[t](n)),
                    done: "return" === t
                } : i ? i(n) : n
            })
        }
        var n, r;
        return n = {}, t("next"), t("throw", function(e) {
            throw e
        }), t("return"), n[Symbol.iterator] = function() {
            return this
        }, n
    }, __asyncValues = function(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t = e[Symbol.asyncIterator];
        return t ? t.call(e) : "function" == typeof __values ? __values(e) : e[Symbol.iterator]()
    }, e("__extends", __extends), e("__assign", __assign), e("__rest", __rest), e("__decorate", __decorate), e("__param", __param), e("__metadata", __metadata), e("__awaiter", __awaiter), e("__generator", __generator), e("__exportStar", __exportStar), e("__values", __values), e("__read", __read), e("__spread", __spread), e("__await", __await), e("__asyncGenerator", __asyncGenerator), e("__asyncDelegator", __asyncDelegator), e("__asyncValues", __asyncValues)
}), define("aurelia-animator-css", ["exports", "aurelia-templating", "aurelia-pal"], function(e, t, n) {
        "use strict";

        function r(e, n) {
            var r = e.container.get(i);
            e.container.get(t.TemplatingEngine).configureAnimator(r), "function" == typeof n && n(r)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CssAnimator = void 0, e.configure = r;
        var i = e.CssAnimator = function() {
            function e() {
                this.useAnimationDoneClasses = !1, this.animationEnteredClass = "au-entered", this.animationLeftClass = "au-left", this.isAnimating = !1, this.verifyKeyframesExist = !0
            }
            return e.prototype._addMultipleEventListener = function(e, t, n) {
                for (var r = t.split(" "), i = 0, o = r.length; i < o; ++i) e.addEventListener(r[i], n, !1)
            }, e.prototype._removeMultipleEventListener = function(e, t, n) {
                for (var r = t.split(" "), i = 0, o = r.length; i < o; ++i) e.removeEventListener(r[i], n, !1)
            }, e.prototype._getElementAnimationDelay = function(e) {
                var t = n.DOM.getComputedStyle(e),
                    r = void 0,
                    i = void 0;
                if (t.getPropertyValue("animation-delay")) r = "animation-delay";
                else if (t.getPropertyValue("-webkit-animation-delay")) r = "-webkit-animation-delay";
                else {
                    if (!t.getPropertyValue("-moz-animation-delay")) return 0;
                    r = "-moz-animation-delay"
                }
                return i = t.getPropertyValue(r), 1e3 * (i = Number(i.replace(/[^\d\.]/g, "")))
            }, e.prototype._getElementAnimationNames = function(e) {
                var t = n.DOM.getComputedStyle(e),
                    r = void 0;
                if (t.getPropertyValue("animation-name")) r = "";
                else if (t.getPropertyValue("-webkit-animation-name")) r = "-webkit-";
                else {
                    if (!t.getPropertyValue("-moz-animation-name")) return [];
                    r = "-moz-"
                }
                var i = t.getPropertyValue(r + "animation-name");
                return i ? i.split(" ") : []
            }, e.prototype._performSingleAnimate = function(e, n) {
                var r = this;
                return this._triggerDOMEvent(t.animationEvent.animateBegin, e), this.addClass(e, n, !0).then(function(i) {
                    return r._triggerDOMEvent(t.animationEvent.animateActive, e), !1 !== i && r.removeClass(e, n, !0).then(function() {
                        r._triggerDOMEvent(t.animationEvent.animateDone, e)
                    })
                }).catch(function() {
                    r._triggerDOMEvent(t.animationEvent.animateTimeout, e)
                })
            }, e.prototype._triggerDOMEvent = function(e, t) {
                var r = n.DOM.createCustomEvent(e, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: t
                });
                n.DOM.dispatchEvent(r)
            }, e.prototype._animationChangeWithValidKeyframe = function(e, t) {
                var n = e.filter(function(e) {
                    return -1 === t.indexOf(e)
                });
                if (0 === n.length) return !1;
                if (!this.verifyKeyframesExist) return !0;
                var r = window.CSSRule.KEYFRAMES_RULE || window.CSSRule.MOZ_KEYFRAMES_RULE || window.CSSRule.WEBKIT_KEYFRAMES_RULE,
                    i = document.styleSheets;
                try {
                    for (var o = 0; o < i.length; ++o) {
                        var s = null;
                        try {
                            s = i[o].cssRules
                        } catch (e) {}
                        if (s)
                            for (var a = 0; a < s.length; ++a) {
                                var u = s[a];
                                if (u.type === r && -1 !== n.indexOf(u.name)) return !0
                            }
                    }
                } catch (e) {}
                return !1
            }, e.prototype.animate = function(e, t) {
                var n = this;
                return Array.isArray(e) ? Promise.all(e.map(function(e) {
                    return n._performSingleAnimate(e, t)
                })) : this._performSingleAnimate(e, t)
            }, e.prototype.runSequence = function(e) {
                var n = this;
                return this._triggerDOMEvent(t.animationEvent.sequenceBegin, null), e.reduce(function(e, t) {
                    return e.then(function() {
                        return n.animate(t.element, t.className)
                    })
                }, Promise.resolve(!0)).then(function() {
                    n._triggerDOMEvent(t.animationEvent.sequenceDone, null)
                })
            }, e.prototype._stateAnim = function(e, n, r) {
                var i = this,
                    o = "au-" + n,
                    s = o + "-active";
                return new Promise(function(a, u) {
                    var l = e.classList;
                    i._triggerDOMEvent(t.animationEvent[n + "Begin"], e), i.useAnimationDoneClasses && (l.remove(i.animationEnteredClass), l.remove(i.animationLeftClass)), l.add(o);
                    var c = i._getElementAnimationNames(e),
                        h = void 0,
                        d = !1;
                    i._addMultipleEventListener(e, "webkitAnimationStart animationstart", h = function(r) {
                        d = !0, i.isAnimating = !0, i._triggerDOMEvent(t.animationEvent[n + "Active"], e), r.stopPropagation(), r.target.removeEventListener(r.type, h)
                    }, !1);
                    var p = void 0;
                    i._addMultipleEventListener(e, "webkitAnimationEnd animationend", p = function(u) {
                        d && (u.stopPropagation(), l.remove(s), l.remove(o), u.target.removeEventListener(u.type, p), i.useAnimationDoneClasses && void 0 !== r && null !== r && l.add(r), i.isAnimating = !1, i._triggerDOMEvent(t.animationEvent[n + "Done"], e), a(!0))
                    }, !1);
                    var f = e.parentElement,
                        v = 0,
                        m = "data-animator-pending" + n,
                        g = function() {
                            var r = i._getElementAnimationNames(e);
                            i._animationChangeWithValidKeyframe(r, c) || (l.remove(s), l.remove(o), i._removeMultipleEventListener(e, "webkitAnimationEnd animationend", p), i._removeMultipleEventListener(e, "webkitAnimationStart animationstart", h), i._triggerDOMEvent(t.animationEvent[n + "Timeout"], e), a(!1)), f && f.setAttribute(m, +(f.getAttribute(m) || 1) - 1)
                        };
                    if (null !== f && void 0 !== f && (f.classList.contains("au-stagger") || f.classList.contains("au-stagger-enter"))) {
                        var y = +(f.getAttribute(m) || 0);
                        f.setAttribute(m, y + 1), v = i._getElementAnimationDelay(f) * y, i._triggerDOMEvent(t.animationEvent.staggerNext, e), setTimeout(function() {
                            l.add(s), g()
                        }, v)
                    } else l.add(s), g()
                })
            }, e.prototype.enter = function(e) {
                return this._stateAnim(e, "enter", this.animationEnteredClass)
            }, e.prototype.leave = function(e) {
                return this._stateAnim(e, "leave", this.animationLeftClass)
            }, e.prototype.removeClass = function(e, n) {
                var r = this,
                    i = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2];
                return new Promise(function(o, s) {
                    var a = e.classList;
                    if (!a.contains(n) && !a.contains(n + "-add")) return void o(!1);
                    !0 !== i && r._triggerDOMEvent(t.animationEvent.removeClassBegin, e), a.remove(n);
                    var u = r._getElementAnimationNames(e),
                        l = void 0,
                        c = !1;
                    r._addMultipleEventListener(e, "webkitAnimationStart animationstart", l = function(n) {
                        c = !0, r.isAnimating = !0, !0 !== i && r._triggerDOMEvent(t.animationEvent.removeClassActive, e), n.stopPropagation(), n.target.removeEventListener(n.type, l)
                    }, !1);
                    var h = void 0;
                    r._addMultipleEventListener(e, "webkitAnimationEnd animationend", h = function(s) {
                        c && (s.stopPropagation(), a.remove(n + "-remove"), s.target.removeEventListener(s.type, h), r.isAnimating = !1, !0 !== i && r._triggerDOMEvent(t.animationEvent.removeClassDone, e), o(!0))
                    }, !1), a.add(n + "-remove");
                    var d = r._getElementAnimationNames(e);
                    r._animationChangeWithValidKeyframe(d, u) || (a.remove(n + "-remove"), a.remove(n), r._removeMultipleEventListener(e, "webkitAnimationEnd animationend", h), r._removeMultipleEventListener(e, "webkitAnimationStart animationstart", l), !0 !== i && r._triggerDOMEvent(t.animationEvent.removeClassTimeout, e), o(!1))
                })
            }, e.prototype.addClass = function(e, n) {
                var r = this,
                    i = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2];
                return new Promise(function(o, s) {
                    var a = e.classList;
                    !0 !== i && r._triggerDOMEvent(t.animationEvent.addClassBegin, e);
                    var u = void 0,
                        l = !1;
                    r._addMultipleEventListener(e, "webkitAnimationStart animationstart", u = function(n) {
                        l = !0, r.isAnimating = !0, !0 !== i && r._triggerDOMEvent(t.animationEvent.addClassActive, e), n.stopPropagation(), n.target.removeEventListener(n.type, u)
                    }, !1);
                    var c = void 0;
                    r._addMultipleEventListener(e, "webkitAnimationEnd animationend", c = function(s) {
                        l && (s.stopPropagation(), a.add(n), a.remove(n + "-add"), s.target.removeEventListener(s.type, c), r.isAnimating = !1, !0 !== i && r._triggerDOMEvent(t.animationEvent.addClassDone, e), o(!0))
                    }, !1);
                    var h = r._getElementAnimationNames(e);
                    a.add(n + "-add");
                    var d = r._getElementAnimationNames(e);
                    r._animationChangeWithValidKeyframe(d, h) || (a.remove(n + "-add"), a.add(n), r._removeMultipleEventListener(e, "webkitAnimationEnd animationend", c), r._removeMultipleEventListener(e, "webkitAnimationStart animationstart", u), !0 !== i && r._triggerDOMEvent(t.animationEvent.addClassTimeout, e), o(!1))
                })
            }, e
        }()
    }), define("aurelia-binding", ["exports", "aurelia-logging", "aurelia-pal", "aurelia-task-queue", "aurelia-metadata"], function(e, t, n, r, i) {
        "use strict";

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function a(e) {
            if (e in De) return De[e];
            var t = e.charAt(0).toLowerCase() + e.slice(1).replace(/[_.-](\w|$)/g, function(e, t) {
                return t.toUpperCase()
            });
            return De[e] = t, t
        }

        function u(e, t) {
            return {
                bindingContext: e,
                parentOverrideContext: t || null
            }
        }

        function l(e, t, n) {
            var r = t.overrideContext;
            if (n) {
                for (; n && r;) n--, r = r.parentOverrideContext;
                if (n || !r) return;
                return e in r ? r : r.bindingContext
            }
            for (; r && !(e in r) && !(r.bindingContext && e in r.bindingContext);) r = r.parentOverrideContext;
            return r ? e in r ? r : r.bindingContext : t.bindingContext || t.overrideContext
        }

        function c(e, t) {
            return t ? {
                bindingContext: e,
                overrideContext: u(e, u(t))
            } : {
                bindingContext: e,
                overrideContext: u(e)
            }
        }

        function h(e) {
            for (var t = void 0 === this._observerSlots ? 0 : this._observerSlots, n = t; n-- && this[Ve[n]] !== e;);
            if (-1 === n) {
                for (n = 0; this[Ve[n]];) n++;
                this[Ve[n]] = e, e.subscribe(Ie, this), n === t && (this._observerSlots = n + 1)
            }
            void 0 === this._version && (this._version = 0), this[Be[n]] = this._version
        }

        function d(e, t) {
            var n = this.observerLocator.getObserver(e, t);
            h.call(this, n)
        }

        function p(e) {
            var t = this.observerLocator.getArrayObserver(e);
            h.call(this, t)
        }

        function f(e) {
            for (var t = this._observerSlots; t--;)
                if (e || this[Be[t]] !== this._version) {
                    var n = this[Ve[t]];
                    this[Ve[t]] = null, n && n.unsubscribe(Ie, this)
                }
        }

        function v() {
            return function(e) {
                e.prototype.observeProperty = d, e.prototype.observeArray = p, e.prototype.unobserve = f, e.prototype.addObserver = h
            }
        }

        function m(e) {
            for (var t = ze.length, r = 0; r < t;) {
                var i = ze[r];
                if (He[i.__connectQueueId] = !1, i.connect(!0), ++r % 100 == 0 && n.PLATFORM.performance.now() - e > We) break
            }
            ze.splice(0, r), ze.length ? n.PLATFORM.requestAnimationFrame(m) : (Ge = !1, $e = 0)
        }

        function g(e) {
            if ($e < Ye) $e++, e.connect(!1);
            else {
                var t = e.__connectQueueId;
                void 0 === t && (t = Ue, Ue++, e.__connectQueueId = t), He[t] || (ze.push(e), He[t] = !0)
            }
            Ge || (Ge = !0, n.PLATFORM.requestAnimationFrame(m))
        }

        function y(e, t) {
            return !this.hasSubscriber(e, t) && (this._context0 ? this._context1 ? this._context2 ? this._contextsRest ? (this._contextsRest.push(e), this._callablesRest.push(t), !0) : (this._contextsRest = [e], this._callablesRest = [t], !0) : (this._context2 = e, this._callable2 = t, !0) : (this._context1 = e, this._callable1 = t, !0) : (this._context0 = e, this._callable0 = t, !0))
        }

        function b(e, t) {
            if (this._context0 === e && this._callable0 === t) return this._context0 = null, this._callable0 = null, !0;
            if (this._context1 === e && this._callable1 === t) return this._context1 = null, this._callable1 = null, !0;
            if (this._context2 === e && this._callable2 === t) return this._context2 = null, this._callable2 = null, !0;
            var n = this._contextsRest,
                r = void 0;
            return !(!n || !n.length || -1 === (r = n.indexOf(e)) || this._callablesRest[r] !== t) && (n.splice(r, 1), this._callablesRest.splice(r, 1), !0)
        }

        function w(e, t) {
            var n = this._context0,
                r = this._callable0,
                i = this._context1,
                o = this._callable1,
                s = this._context2,
                a = this._callable2,
                u = this._contextsRest ? this._contextsRest.length : 0,
                l = void 0,
                c = void 0,
                h = void 0,
                d = void 0;
            if (u) {
                for (h = Ke.length; h-- && Ke[h];);
                for (h < 0 ? (h = Ke.length, l = [], c = [], Ke.push(!0), Qe.push(l), Ze.push(c)) : (Ke[h] = !0, l = Qe[h], c = Ze[h]), d = u; d--;) l[d] = this._contextsRest[d], c[d] = this._callablesRest[d]
            }
            if (n && (r ? r.call(n, e, t) : n(e, t)), i && (o ? o.call(i, e, t) : i(e, t)), s && (a ? a.call(s, e, t) : s(e, t)), u) {
                for (d = 0; d < u; d++) {
                    var p = c[d],
                        f = l[d];
                    p ? p.call(f, e, t) : f(e, t), l[d] = null, c[d] = null
                }
                Ke[h] = !1
            }
        }

        function _() {
            return !!(this._context0 || this._context1 || this._context2 || this._contextsRest && this._contextsRest.length)
        }

        function x(e, t) {
            if (this._context0 === e && this._callable0 === t || this._context1 === e && this._callable1 === t || this._context2 === e && this._callable2 === t) return !0;
            var n = void 0,
                r = this._contextsRest;
            if (!r || 0 === (n = r.length)) return !1;
            for (var i = this._callablesRest; n--;)
                if (r[n] === e && i[n] === t) return !0;
            return !1
        }

        function S() {
            return function(e) {
                e.prototype.addSubscriber = y, e.prototype.removeSubscriber = b, e.prototype.callSubscribers = w, e.prototype.hasSubscribers = _, e.prototype.hasSubscriber = x
            }
        }

        function C(e) {
            return +e == e >>> 0
        }

        function k(e) {
            return +e
        }

        function E(e, t, n) {
            return {
                index: e,
                removed: t,
                addedCount: n
            }
        }

        function O() {}

        function M(e, t, n, r, i, o) {
            return Je.calcSplices(e, t, n, r, i, o)
        }

        function R(e, t, n, r) {
            return t < n || r < e ? -1 : t === n || r === e ? 0 : e < n ? t < r ? t - n : r - n : r < t ? r - e : t - e
        }

        function A(e, t, n, r) {
            for (var i = E(t, n, r), o = !1, s = 0, a = 0; a < e.length; a++) {
                var u = e[a];
                if (u.index += s, !o) {
                    var l = R(i.index, i.index + i.removed.length, u.index, u.index + u.addedCount);
                    if (l >= 0) {
                        e.splice(a, 1), a--, s -= u.addedCount - u.removed.length, i.addedCount += u.addedCount - l;
                        var c = i.removed.length + u.removed.length - l;
                        if (i.addedCount || c) {
                            var h = u.removed;
                            if (i.index < u.index) {
                                var d = i.removed.slice(0, u.index - i.index);
                                Array.prototype.push.apply(d, h), h = d
                            }
                            if (i.index + i.removed.length > u.index + u.addedCount) {
                                var p = i.removed.slice(u.index + u.addedCount - i.index);
                                Array.prototype.push.apply(h, p)
                            }
                            i.removed = h, u.index < i.index && (i.index = u.index)
                        } else o = !0
                    } else if (i.index < u.index) {
                        o = !0, e.splice(a, 0, i), a++;
                        var f = i.addedCount - i.removed.length;
                        u.index += f, s += f
                    }
                }
            }
            o || e.push(i)
        }

        function P(e, t) {
            for (var n = [], r = 0; r < t.length; r++) {
                var i = t[r];
                switch (i.type) {
                    case "splice":
                        A(n, i.index, i.removed.slice(), i.addedCount);
                        break;
                    case "add":
                    case "update":
                    case "delete":
                        if (!C(i.name)) continue;
                        var o = k(i.name);
                        if (o < 0) continue;
                        A(n, o, [i.oldValue], "delete" === i.type ? 0 : 1);
                        break;
                    default:
                        console.error("Unexpected record type: " + JSON.stringify(i))
                }
            }
            return n
        }

        function T(e, t) {
            var n = [];
            return P(e, t).forEach(function(t) {
                if (1 === t.addedCount && 1 === t.removed.length) return void(t.removed[0] !== e[t.index] && n.push(t));
                n = n.concat(M(e, t.index, t.index + t.addedCount, t.removed, 0, t.removed.length))
            }), n
        }

        function j(e, t, n, r) {
            return {
                type: e,
                object: t,
                key: n,
                oldValue: r
            }
        }

        function L(e) {
            for (var t = new Array(e.size), n = e.keys(), r = 0, i = void 0;
                (i = n.next()) && !i.done;) t[r] = j("added", e, i.value), r++;
            return t
        }

        function F(e, t) {
            return lt.for(e, t)
        }

        function N(e, t, n) {
            for (var r = t.length, i = [], o = 0; o < r; o++) i[o] = t[o].evaluate(e, n);
            return i
        }

        function D(e, t) {
            return null !== e && null !== t ? "string" == typeof e && "string" != typeof t ? e + t.toString() : "string" != typeof e && "string" == typeof t ? e.toString() + t : e + t : null !== e ? e : null !== t ? t : 0
        }

        function I(e, t, n) {
            var r = null === e || void 0 === e ? null : e[t];
            if ("function" == typeof r) return r;
            if (!n && (null === r || void 0 === r)) return null;
            throw new Error(t + " is not a function")
        }

        function V(e, t) {
            if (Array.isArray(e)) return e[parseInt(t, 10)];
            if (e) return e[t];
            if (null !== e && void 0 !== e) return e[t]
        }

        function B(e, t, n) {
            if (Array.isArray(e)) {
                var r = parseInt(t, 10);
                e.length <= r && (e.length = r + 1), e[r] = n
            } else e[t] = n;
            return n
        }

        function q(e) {
            var t = new At;
            return e.accept(t)
        }

        function z(e) {
            return e >= Dt && e <= zt || e === Tn
        }

        function H(e) {
            return wn <= e && e <= Mn || dn <= e && e <= fn || e === bn || e === Yt
        }

        function U(e) {
            return wn <= e && e <= Mn || dn <= e && e <= fn || cn <= e && e <= hn || e === bn || e === Yt
        }

        function Y(e) {
            return cn <= e && e <= hn
        }

        function W(e) {
            return e === _n || e === pn
        }

        function G(e) {
            return e === en || e === Xt
        }

        function $(e) {
            switch (e) {
                case Sn:
                    return It;
                case xn:
                    return Bt;
                case Cn:
                    return qt;
                case kn:
                    return Dt;
                case On:
                    return Vt;
                default:
                    return e
            }
        }

        function Q(e, t) {
            if (!e) throw t || "Assertion failed"
        }

        function Z(e, t) {
            return Dn.for(e, t)
        }

        function K(e) {
            return e.path && e.path[0] || e.deepPath && e.deepPath[0] || e.target
        }

        function X() {
            this.standardStopPropagation(), this.propagationStopped = !0
        }

        function J(e) {
            e.standardStopPropagation = e.stopPropagation, e.stopPropagation = X
        }

        function ee(e) {
            var t = !1;
            e.propagationStopped = !1;
            for (var n = K(e), r = []; n;) {
                if (n.capturedCallbacks) {
                    var i = n.capturedCallbacks[e.type];
                    i && (t || (J(e), t = !0), r.push(i))
                }
                n = n.parentNode
            }
            for (var o = r.length - 1; o >= 0; o--) {
                if ((0, r[o])(e), e.propagationStopped) break
            }
        }

        function te(e) {
            var t = !1;
            e.propagationStopped = !1;
            for (var n = K(e); n && !e.propagationStopped;) {
                if (n.delegatedCallbacks) {
                    var r = n.delegatedCallbacks[e.type];
                    r && (t || (J(e), t = !0), r(e))
                }
                n = n.parentNode
            }
        }

        function ne(e) {
            return !!(e && e.get && e.get.dependencies)
        }

        function re(e, t, n) {
            Object.getOwnPropertyDescriptor(e.prototype, t).get.dependencies = n
        }

        function ie() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function(e, n, r) {
                return r.get.dependencies = t, r
            }
        }

        function oe(e, t, n, r) {
            var i = n.get.dependencies;
            if (!(i instanceof rr)) {
                for (var o = i.length; o--;) i[o] = r.parser.parse(i[o]);
                i = n.get.dependencies = new rr(t, i)
            }
            var s = {
                bindingContext: e,
                overrideContext: u(e)
            };
            return new Xe(s, i, r)
        }

        function se(e) {
            if (void 0 === e || "string" == typeof e) return function(t) {
                i.metadata.define(i.metadata.resource, new mr(e), t)
            };
            i.metadata.define(i.metadata.resource, new mr, e)
        }

        function ae(e) {
            if (void 0 === e || "string" == typeof e) return function(t) {
                i.metadata.define(i.metadata.resource, new gr(e), t)
            };
            i.metadata.define(i.metadata.resource, new gr, e)
        }

        function ue(e) {
            var t = e.au;
            if (void 0 === t) throw new Error('No Aurelia APIs are defined for the element: "' + e.tagName + '".');
            return t
        }

        function le(e, t) {
            return xr.for(e, t)
        }

        function ce(e, t, n) {
            function r(e, t, n, r) {
                var i = void 0 === t;
                i && (e = e.prototype, t = "string" == typeof r ? r : r.name);
                var o = "_" + t,
                    s = {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0
                    },
                    a = r && r.changeHandler || t + "Changed";
                if (n ? "function" == typeof n.initializer && (s.value = n.initializer()) : n = {}, "enumerable" in n || (n.enumerable = !0), delete n.value, delete n.writable, delete n.initializer, Reflect.defineProperty(e, o, s), n.get = function() {
                        return this[o]
                    }, n.set = function(e) {
                        var n = this[o];
                        e !== n && (this[o] = e, Reflect.defineProperty(this, o, {
                            enumerable: !1
                        }), this[a] && this[a](e, n, t))
                    }, n.get.dependencies = [o], !i) return n;
                Reflect.defineProperty(e, t, n)
            }
            return void 0 === t ? function(t, n, i) {
                return r(t, n, i, e)
            } : r(e, t, n)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getSetObserver = e.BindingEngine = e.NameExpression = e.Listener = e.ListenerExpression = e.BindingBehaviorResource = e.ValueConverterResource = e.Call = e.CallExpression = e.Binding = e.BindingExpression = e.ObjectObservationAdapter = e.ObserverLocator = e.SVGAnalyzer = e.presentationAttributes = e.presentationElements = e.elements = e.ComputedExpression = e.ClassObserver = e.SelectValueObserver = e.CheckedObserver = e.ValueAttributeObserver = e.StyleObserver = e.DataAttributeObserver = e.dataAttributeAccessor = e.XLinkAttributeObserver = e.SetterObserver = e.PrimitiveObserver = e.propertyAccessor = e.DirtyCheckProperty = e.DirtyChecker = e.EventManager = e.delegationStrategy = e.getMapObserver = e.ParserImplementation = e.Parser = e.Scanner = e.Lexer = e.Token = e.bindingMode = e.ExpressionCloner = e.Unparser = e.LiteralObject = e.LiteralArray = e.LiteralString = e.LiteralPrimitive = e.PrefixNot = e.Binary = e.CallFunction = e.CallMember = e.CallScope = e.AccessKeyed = e.AccessMember = e.AccessScope = e.AccessThis = e.Conditional = e.Assign = e.ValueConverter = e.BindingBehavior = e.Chain = e.Expression = e.getArrayObserver = e.CollectionLengthObserver = e.ModifyCollectionObserver = e.ExpressionObserver = e.sourceContext = void 0, e.camelCase = a, e.createOverrideContext = u, e.getContextFor = l, e.createScopeForTest = c, e.connectable = v, e.enqueueBindingConnect = g, e.subscriberCollection = S, e.calcSplices = M, e.mergeSplice = A, e.projectArraySplices = T, e.getChangeRecords = L, e.cloneExpression = q, e.hasDeclaredDependencies = ne, e.declarePropertyDependencies = re, e.computedFrom = ie, e.createComputedObserver = oe, e.valueConverter = se, e.bindingBehavior = ae, e.observable = ce;
        for (var he, de, pe, fe, ve, me, ge, ye, be, we, _e, xe, Se, Ce, ke, Ee, Oe, Me, Re, Ae, Pe, Te, je, Le = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(t), Fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }, Ne = (function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }()), De = Object.create(null), Ie = e.sourceContext = "Binding:source", Ve = [], Be = [], qe = 0; qe < 100; qe++) Ve.push("_observer" + qe), Be.push("_observerVersion" + qe);
        var ze = [],
            He = {},
            Ue = 0,
            Ye = 100,
            We = 15,
            Ge = !1,
            $e = 0,
            Qe = [],
            Ze = [],
            Ke = [],
            Xe = e.ExpressionObserver = (he = v(), de = S(), he(pe = de(pe = function() {
                function e(e, t, n, r) {
                    this.scope = e, this.expression = t, this.observerLocator = n, this.lookupFunctions = r
                }
                return e.prototype.getValue = function() {
                    return this.expression.evaluate(this.scope, this.lookupFunctions)
                }, e.prototype.setValue = function(e) {
                    this.expression.assign(this.scope, e)
                }, e.prototype.subscribe = function(e, t) {
                    var n = this;
                    if (this.hasSubscribers() || (this.oldValue = this.expression.evaluate(this.scope, this.lookupFunctions), this.expression.connect(this, this.scope)), this.addSubscriber(e, t), 1 === arguments.length && e instanceof Function) return {
                        dispose: function() {
                            n.unsubscribe(e, t)
                        }
                    }
                }, e.prototype.unsubscribe = function(e, t) {
                    this.removeSubscriber(e, t) && !this.hasSubscribers() && (this.unobserve(!0), this.oldValue = void 0)
                }, e.prototype.call = function() {
                    var e = this.expression.evaluate(this.scope, this.lookupFunctions),
                        t = this.oldValue;
                    e !== t && (this.oldValue = e, this.callSubscribers(e, t)), this._version++, this.expression.connect(this, this.scope), this.unobserve(!1)
                }, e
            }()) || pe) || pe);
        O.prototype = {
            calcEditDistances: function(e, t, n, r, i, o) {
                for (var s = o - i + 1, a = n - t + 1, u = new Array(s), l = void 0, c = void 0, h = 0; h < s; ++h) u[h] = new Array(a), u[h][0] = h;
                for (var d = 0; d < a; ++d) u[0][d] = d;
                for (var p = 1; p < s; ++p)
                    for (var f = 1; f < a; ++f) this.equals(e[t + f - 1], r[i + p - 1]) ? u[p][f] = u[p - 1][f - 1] : (l = u[p - 1][f] + 1, c = u[p][f - 1] + 1, u[p][f] = l < c ? l : c);
                return u
            },
            spliceOperationsFromEditDistances: function(e) {
                for (var t = e.length - 1, n = e[0].length - 1, r = e[t][n], i = []; t > 0 || n > 0;)
                    if (0 !== t)
                        if (0 !== n) {
                            var o = e[t - 1][n - 1],
                                s = e[t - 1][n],
                                a = e[t][n - 1],
                                u = void 0;
                            u = s < a ? s < o ? s : o : a < o ? a : o, u === o ? (o === r ? i.push(0) : (i.push(1), r = o), t--, n--) : u === s ? (i.push(3), t--, r = s) : (i.push(2), n--, r = a)
                        } else i.push(3), t--;
                else i.push(2), n--;
                return i.reverse(), i
            },
            calcSplices: function(e, t, n, r, i, o) {
                var s = 0,
                    a = 0,
                    u = Math.min(n - t, o - i);
                if (0 === t && 0 === i && (s = this.sharedPrefix(e, r, u)), n === e.length && o === r.length && (a = this.sharedSuffix(e, r, u - s)), t += s, i += s, n -= a, o -= a, n - t == 0 && o - i == 0) return [];
                if (t === n) {
                    for (var l = E(t, [], 0); i < o;) l.removed.push(r[i++]);
                    return [l]
                }
                if (i === o) return [E(t, [], n - t)];
                for (var c = this.spliceOperationsFromEditDistances(this.calcEditDistances(e, t, n, r, i, o)), h = void 0, d = [], p = t, f = i, v = 0; v < c.length; ++v) switch (c[v]) {
                    case 0:
                        h && (d.push(h), h = void 0), p++, f++;
                        break;
                    case 1:
                        h || (h = E(p, [], 0)), h.addedCount++, p++, h.removed.push(r[f]), f++;
                        break;
                    case 2:
                        h || (h = E(p, [], 0)), h.addedCount++, p++;
                        break;
                    case 3:
                        h || (h = E(p, [], 0)), h.removed.push(r[f]), f++
                }
                return h && d.push(h), d
            },
            sharedPrefix: function(e, t, n) {
                for (var r = 0; r < n; ++r)
                    if (!this.equals(e[r], t[r])) return r;
                return n
            },
            sharedSuffix: function(e, t, n) {
                for (var r = e.length, i = t.length, o = 0; o < n && this.equals(e[--r], t[--i]);) o++;
                return o
            },
            calculateSplices: function(e, t) {
                return this.calcSplices(e, 0, e.length, t, 0, t.length)
            },
            equals: function(e, t) {
                return e === t
            }
        };
        var Je = new O,
            et = e.ModifyCollectionObserver = (fe = S())(ve = function() {
                function e(e, t) {
                    this.taskQueue = e, this.queued = !1, this.changeRecords = null, this.oldCollection = null, this.collection = t, this.lengthPropertyName = t instanceof Map || t instanceof Set ? "size" : "length"
                }
                return e.prototype.subscribe = function(e, t) {
                    this.addSubscriber(e, t)
                }, e.prototype.unsubscribe = function(e, t) {
                    this.removeSubscriber(e, t)
                }, e.prototype.addChangeRecord = function(e) {
                    if (this.hasSubscribers() || this.lengthObserver) {
                        if ("splice" === e.type) {
                            var t = e.index,
                                n = e.object.length;
                            t > n ? t = n - e.addedCount : t < 0 && (t = n + e.removed.length + t - e.addedCount), t < 0 && (t = 0), e.index = t
                        }
                        null === this.changeRecords ? this.changeRecords = [e] : this.changeRecords.push(e), this.queued || (this.queued = !0, this.taskQueue.queueMicroTask(this))
                    }
                }, e.prototype.flushChangeRecords = function() {
                    (this.changeRecords && this.changeRecords.length || this.oldCollection) && this.call()
                }, e.prototype.reset = function(e) {
                    this.oldCollection = e, this.hasSubscribers() && !this.queued && (this.queued = !0, this.taskQueue.queueMicroTask(this))
                }, e.prototype.getLengthObserver = function() {
                    return this.lengthObserver || (this.lengthObserver = new tt(this.collection))
                }, e.prototype.call = function() {
                    var e = this.changeRecords,
                        t = this.oldCollection,
                        n = void 0;
                    this.queued = !1, this.changeRecords = [], this.oldCollection = null, this.hasSubscribers() && (n = t ? this.collection instanceof Map || this.collection instanceof Set ? L(t) : M(this.collection, 0, this.collection.length, t, 0, t.length) : this.collection instanceof Map || this.collection instanceof Set ? e : T(this.collection, e), this.callSubscribers(n)), this.lengthObserver && this.lengthObserver.call(this.collection[this.lengthPropertyName])
                }, e
            }()) || ve,
            tt = e.CollectionLengthObserver = (me = S())(ge = function() {
                function e(e) {
                    this.collection = e, this.lengthPropertyName = e instanceof Map || e instanceof Set ? "size" : "length", this.currentValue = e[this.lengthPropertyName]
                }
                return e.prototype.getValue = function() {
                    return this.collection[this.lengthPropertyName]
                }, e.prototype.setValue = function(e) {
                    this.collection[this.lengthPropertyName] = e
                }, e.prototype.subscribe = function(e, t) {
                    this.addSubscriber(e, t)
                }, e.prototype.unsubscribe = function(e, t) {
                    this.removeSubscriber(e, t)
                }, e.prototype.call = function(e) {
                    var t = this.currentValue;
                    this.callSubscribers(e, t), this.currentValue = e
                }, e
            }()) || ge,
            nt = Array.prototype.pop,
            rt = Array.prototype.push,
            it = Array.prototype.reverse,
            ot = Array.prototype.shift,
            st = Array.prototype.sort,
            at = Array.prototype.splice,
            ut = Array.prototype.unshift;
        Array.prototype.pop = function() {
            var e = this.length > 0,
                t = nt.apply(this, arguments);
            return e && void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
                type: "delete",
                object: this,
                name: this.length,
                oldValue: t
            }), t
        }, Array.prototype.push = function() {
            var e = rt.apply(this, arguments);
            return void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
                type: "splice",
                object: this,
                index: this.length - arguments.length,
                removed: [],
                addedCount: arguments.length
            }), e
        }, Array.prototype.reverse = function() {
            var e = void 0;
            void 0 !== this.__array_observer__ && (this.__array_observer__.flushChangeRecords(), e = this.slice());
            var t = it.apply(this, arguments);
            return void 0 !== this.__array_observer__ && this.__array_observer__.reset(e), t
        }, Array.prototype.shift = function() {
            var e = this.length > 0,
                t = ot.apply(this, arguments);
            return e && void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
                type: "delete",
                object: this,
                name: 0,
                oldValue: t
            }), t
        }, Array.prototype.sort = function() {
            var e = void 0;
            void 0 !== this.__array_observer__ && (this.__array_observer__.flushChangeRecords(), e = this.slice());
            var t = st.apply(this, arguments);
            return void 0 !== this.__array_observer__ && this.__array_observer__.reset(e), t
        }, Array.prototype.splice = function() {
            var e = at.apply(this, arguments);
            return void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
                type: "splice",
                object: this,
                index: +arguments[0],
                removed: e,
                addedCount: arguments.length > 2 ? arguments.length - 2 : 0
            }), e
        }, Array.prototype.unshift = function() {
            var e = ut.apply(this, arguments);
            return void 0 !== this.__array_observer__ && this.__array_observer__.addChangeRecord({
                type: "splice",
                object: this,
                index: 0,
                removed: [],
                addedCount: arguments.length
            }), e
        }, e.getArrayObserver = F;
        var lt = function(e) {
                function t(t, n) {
                    return o(this, e.call(this, t, n))
                }
                return s(t, e), t.for = function(e, n) {
                    return "__array_observer__" in n || Reflect.defineProperty(n, "__array_observer__", {
                        value: t.create(e, n),
                        enumerable: !1,
                        configurable: !1
                    }), n.__array_observer__
                }, t.create = function(e, n) {
                    return new t(e, n)
                }, t
            }(et),
            ct = e.Expression = function() {
                function e() {
                    this.isChain = !1, this.isAssignable = !1
                }
                return e.prototype.evaluate = function(e, t, n) {
                    throw new Error('Binding expression "' + this + '" cannot be evaluated.')
                }, e.prototype.assign = function(e, t, n) {
                    throw new Error('Binding expression "' + this + '" cannot be assigned to.')
                }, e.prototype.toString = function() {
                    return "undefined" == typeof FEATURE_NO_UNPARSER ? Rt.unparse(this) : Function.prototype.toString.call(this)
                }, e
            }(),
            ht = e.Chain = function(e) {
                function t(t) {
                    var n = o(this, e.call(this));
                    return n.expressions = t, n.isChain = !0, n
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    for (var n = void 0, r = this.expressions, i = void 0, o = 0, s = r.length; o < s; ++o) null !== (i = r[o].evaluate(e, t)) && (n = i);
                    return n
                }, t.prototype.accept = function(e) {
                    return e.visitChain(this)
                }, t
            }(ct),
            dt = e.BindingBehavior = function(e) {
                function t(t, n, r) {
                    var i = o(this, e.call(this));
                    return i.expression = t, i.name = n, i.args = r, i
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    return this.expression.evaluate(e, t)
                }, t.prototype.assign = function(e, t, n) {
                    return this.expression.assign(e, t, n)
                }, t.prototype.accept = function(e) {
                    return e.visitBindingBehavior(this)
                }, t.prototype.connect = function(e, t) {
                    this.expression.connect(e, t)
                }, t.prototype.bind = function(e, t, n) {
                    this.expression.expression && this.expression.bind && this.expression.bind(e, t, n);
                    var r = n.bindingBehaviors(this.name);
                    if (!r) throw new Error('No BindingBehavior named "' + this.name + '" was found!');
                    var i = "behavior-" + this.name;
                    if (e[i]) throw new Error('A binding behavior named "' + this.name + '" has already been applied to "' + this.expression + '"');
                    e[i] = r, r.bind.apply(r, [e, t].concat(N(t, this.args, e.lookupFunctions)))
                }, t.prototype.unbind = function(e, t) {
                    var n = "behavior-" + this.name;
                    e[n].unbind(e, t), e[n] = null, this.expression.expression && this.expression.unbind && this.expression.unbind(e, t)
                }, t
            }(ct),
            pt = e.ValueConverter = function(e) {
                function t(t, n, r, i) {
                    var s = o(this, e.call(this));
                    return s.expression = t, s.name = n, s.args = r, s.allArgs = i, s
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    var n = t.valueConverters(this.name);
                    if (!n) throw new Error('No ValueConverter named "' + this.name + '" was found!');
                    return "toView" in n ? n.toView.apply(n, N(e, this.allArgs, t)) : this.allArgs[0].evaluate(e, t)
                }, t.prototype.assign = function(e, t, n) {
                    var r = n.valueConverters(this.name);
                    if (!r) throw new Error('No ValueConverter named "' + this.name + '" was found!');
                    return "fromView" in r && (t = r.fromView.apply(r, [t].concat(N(e, this.args, n)))), this.allArgs[0].assign(e, t, n)
                }, t.prototype.accept = function(e) {
                    return e.visitValueConverter(this)
                }, t.prototype.connect = function(e, t) {
                    for (var n = this.allArgs, r = n.length; r--;) n[r].connect(e, t)
                }, t
            }(ct),
            ft = e.Assign = function(e) {
                function t(t, n) {
                    var r = o(this, e.call(this));
                    return r.target = t, r.value = n, r.isAssignable = !0, r
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    return this.target.assign(e, this.value.evaluate(e, t))
                }, t.prototype.accept = function(e) {
                    e.visitAssign(this)
                }, t.prototype.connect = function(e, t) {}, t.prototype.assign = function(e, t) {
                    this.value.assign(e, t), this.target.assign(e, t)
                }, t
            }(ct),
            vt = e.Conditional = function(e) {
                function t(t, n, r) {
                    var i = o(this, e.call(this));
                    return i.condition = t, i.yes = n, i.no = r, i
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    return this.condition.evaluate(e, t) ? this.yes.evaluate(e, t) : this.no.evaluate(e, t)
                }, t.prototype.accept = function(e) {
                    return e.visitConditional(this)
                }, t.prototype.connect = function(e, t) {
                    this.condition.connect(e, t), this.condition.evaluate(t) ? this.yes.connect(e, t) : this.no.connect(e, t)
                }, t
            }(ct),
            mt = e.AccessThis = function(e) {
                function t(t) {
                    var n = o(this, e.call(this));
                    return n.ancestor = t, n
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    for (var n = e.overrideContext, r = this.ancestor; r-- && n;) n = n.parentOverrideContext;
                    return r < 1 && n ? n.bindingContext : void 0
                }, t.prototype.accept = function(e) {
                    return e.visitAccessThis(this)
                }, t.prototype.connect = function(e, t) {}, t
            }(ct),
            gt = e.AccessScope = function(e) {
                function t(t, n) {
                    var r = o(this, e.call(this));
                    return r.name = t, r.ancestor = n, r.isAssignable = !0, r
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    return l(this.name, e, this.ancestor)[this.name]
                }, t.prototype.assign = function(e, t) {
                    var n = l(this.name, e, this.ancestor);
                    return n ? n[this.name] = t : void 0
                }, t.prototype.accept = function(e) {
                    return e.visitAccessScope(this)
                }, t.prototype.connect = function(e, t) {
                    var n = l(this.name, t, this.ancestor);
                    e.observeProperty(n, this.name)
                }, t
            }(ct),
            yt = e.AccessMember = function(e) {
                function t(t, n) {
                    var r = o(this, e.call(this));
                    return r.object = t, r.name = n, r.isAssignable = !0, r
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    var n = this.object.evaluate(e, t);
                    return null === n || void 0 === n ? n : n[this.name]
                }, t.prototype.assign = function(e, t) {
                    var n = this.object.evaluate(e);
                    return null !== n && void 0 !== n || (n = {}, this.object.assign(e, n)), n[this.name] = t, t
                }, t.prototype.accept = function(e) {
                    return e.visitAccessMember(this)
                }, t.prototype.connect = function(e, t) {
                    this.object.connect(e, t);
                    var n = this.object.evaluate(t);
                    n && e.observeProperty(n, this.name)
                }, t
            }(ct),
            bt = e.AccessKeyed = function(e) {
                function t(t, n) {
                    var r = o(this, e.call(this));
                    return r.object = t, r.key = n, r.isAssignable = !0, r
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    return V(this.object.evaluate(e, t), this.key.evaluate(e, t))
                }, t.prototype.assign = function(e, t) {
                    return B(this.object.evaluate(e), this.key.evaluate(e), t)
                }, t.prototype.accept = function(e) {
                    return e.visitAccessKeyed(this)
                }, t.prototype.connect = function(e, t) {
                    this.object.connect(e, t);
                    var n = this.object.evaluate(t);
                    if (n instanceof Object) {
                        this.key.connect(e, t);
                        var r = this.key.evaluate(t);
                        null === r || void 0 === r || Array.isArray(n) && "number" == typeof r || e.observeProperty(n, r)
                    }
                }, t
            }(ct),
            wt = e.CallScope = function(e) {
                function t(t, n, r) {
                    var i = o(this, e.call(this));
                    return i.name = t, i.args = n, i.ancestor = r, i
                }
                return s(t, e), t.prototype.evaluate = function(e, t, n) {
                    var r = N(e, this.args, t),
                        i = l(this.name, e, this.ancestor),
                        o = I(i, this.name, n);
                    if (o) return o.apply(i, r)
                }, t.prototype.accept = function(e) {
                    return e.visitCallScope(this)
                }, t.prototype.connect = function(e, t) {
                    for (var n = this.args, r = n.length; r--;) n[r].connect(e, t)
                }, t
            }(ct),
            _t = e.CallMember = function(e) {
                function t(t, n, r) {
                    var i = o(this, e.call(this));
                    return i.object = t, i.name = n, i.args = r, i
                }
                return s(t, e), t.prototype.evaluate = function(e, t, n) {
                    var r = this.object.evaluate(e, t),
                        i = N(e, this.args, t),
                        o = I(r, this.name, n);
                    if (o) return o.apply(r, i)
                }, t.prototype.accept = function(e) {
                    return e.visitCallMember(this)
                }, t.prototype.connect = function(e, t) {
                    if (this.object.connect(e, t), I(this.object.evaluate(t), this.name, !1))
                        for (var n = this.args, r = n.length; r--;) n[r].connect(e, t)
                }, t
            }(ct),
            xt = e.CallFunction = function(e) {
                function t(t, n) {
                    var r = o(this, e.call(this));
                    return r.func = t, r.args = n, r
                }
                return s(t, e), t.prototype.evaluate = function(e, t, n) {
                    var r = this.func.evaluate(e, t);
                    if ("function" == typeof r) return r.apply(null, N(e, this.args, t));
                    if (n || null !== r && void 0 !== r) throw new Error(this.func + " is not a function")
                }, t.prototype.accept = function(e) {
                    return e.visitCallFunction(this)
                }, t.prototype.connect = function(e, t) {
                    if (this.func.connect(e, t), "function" == typeof this.func.evaluate(t))
                        for (var n = this.args, r = n.length; r--;) n[r].connect(e, t)
                }, t
            }(ct),
            St = e.Binary = function(e) {
                function t(t, n, r) {
                    var i = o(this, e.call(this));
                    return i.operation = t, i.left = n, i.right = r, i
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    var n = this.left.evaluate(e, t);
                    switch (this.operation) {
                        case "&&":
                            return n && this.right.evaluate(e, t);
                        case "||":
                            return n || this.right.evaluate(e, t)
                    }
                    var r = this.right.evaluate(e, t);
                    switch (this.operation) {
                        case "==":
                            return n == r;
                        case "===":
                            return n === r;
                        case "!=":
                            return n != r;
                        case "!==":
                            return n !== r
                    }
                    if (null === n || null === r || void 0 === n || void 0 === r) {
                        switch (this.operation) {
                            case "+":
                                return null !== n && void 0 !== n ? n : null !== r && void 0 !== r ? r : 0;
                            case "-":
                                return null !== n && void 0 !== n ? n : null !== r && void 0 !== r ? 0 - r : 0
                        }
                        return null
                    }
                    switch (this.operation) {
                        case "+":
                            return D(n, r);
                        case "-":
                            return n - r;
                        case "*":
                            return n * r;
                        case "/":
                            return n / r;
                        case "%":
                            return n % r;
                        case "<":
                            return n < r;
                        case ">":
                            return n > r;
                        case "<=":
                            return n <= r;
                        case ">=":
                            return n >= r;
                        case "^":
                            return n ^ r
                    }
                    throw new Error("Internal error [" + this.operation + "] not handled")
                }, t.prototype.accept = function(e) {
                    return e.visitBinary(this)
                }, t.prototype.connect = function(e, t) {
                    this.left.connect(e, t);
                    var n = this.left.evaluate(t);
                    "&&" === this.operation && !n || "||" === this.operation && n || this.right.connect(e, t)
                }, t
            }(ct),
            Ct = e.PrefixNot = function(e) {
                function t(t, n) {
                    var r = o(this, e.call(this));
                    return r.operation = t, r.expression = n, r
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    return !this.expression.evaluate(e, t)
                }, t.prototype.accept = function(e) {
                    return e.visitPrefix(this)
                }, t.prototype.connect = function(e, t) {
                    this.expression.connect(e, t)
                }, t
            }(ct),
            kt = e.LiteralPrimitive = function(e) {
                function t(t) {
                    var n = o(this, e.call(this));
                    return n.value = t, n
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    return this.value
                }, t.prototype.accept = function(e) {
                    return e.visitLiteralPrimitive(this)
                }, t.prototype.connect = function(e, t) {}, t
            }(ct),
            Et = e.LiteralString = function(e) {
                function t(t) {
                    var n = o(this, e.call(this));
                    return n.value = t, n
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    return this.value
                }, t.prototype.accept = function(e) {
                    return e.visitLiteralString(this)
                }, t.prototype.connect = function(e, t) {}, t
            }(ct),
            Ot = e.LiteralArray = function(e) {
                function t(t) {
                    var n = o(this, e.call(this));
                    return n.elements = t, n
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    for (var n = this.elements, r = [], i = 0, o = n.length; i < o; ++i) r[i] = n[i].evaluate(e, t);
                    return r
                }, t.prototype.accept = function(e) {
                    return e.visitLiteralArray(this)
                }, t.prototype.connect = function(e, t) {
                    for (var n = this.elements.length, r = 0; r < n; r++) this.elements[r].connect(e, t)
                }, t
            }(ct),
            Mt = e.LiteralObject = function(e) {
                function t(t, n) {
                    var r = o(this, e.call(this));
                    return r.keys = t, r.values = n, r
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    for (var n = {}, r = this.keys, i = this.values, o = 0, s = r.length; o < s; ++o) n[r[o]] = i[o].evaluate(e, t);
                    return n
                }, t.prototype.accept = function(e) {
                    return e.visitLiteralObject(this)
                }, t.prototype.connect = function(e, t) {
                    for (var n = this.keys.length, r = 0; r < n; r++) this.values[r].connect(e, t)
                }, t
            }(ct),
            Rt = null;
        e.Unparser = Rt, "undefined" == typeof FEATURE_NO_UNPARSER && (e.Unparser = Rt = function() {
            function e(e) {
                this.buffer = e
            }
            return e.unparse = function(e) {
                var t = [],
                    n = new Rt(t);
                return e.accept(n), t.join("")
            }, e.prototype.write = function(e) {
                this.buffer.push(e)
            }, e.prototype.writeArgs = function(e) {
                this.write("(");
                for (var t = 0, n = e.length; t < n; ++t) 0 !== t && this.write(","), e[t].accept(this);
                this.write(")")
            }, e.prototype.visitChain = function(e) {
                for (var t = e.expressions, n = 0, r = expression.length; n < r; ++n) 0 !== n && this.write(";"), t[n].accept(this)
            }, e.prototype.visitBindingBehavior = function(e) {
                var t = e.args;
                e.expression.accept(this), this.write("&" + e.name);
                for (var n = 0, r = t.length; n < r; ++n) this.write(":"), t[n].accept(this)
            }, e.prototype.visitValueConverter = function(e) {
                var t = e.args;
                e.expression.accept(this), this.write("|" + e.name);
                for (var n = 0, r = t.length; n < r; ++n) this.write(":"), t[n].accept(this)
            }, e.prototype.visitAssign = function(e) {
                e.target.accept(this), this.write("="), e.value.accept(this)
            }, e.prototype.visitConditional = function(e) {
                e.condition.accept(this), this.write("?"), e.yes.accept(this), this.write(":"), e.no.accept(this)
            }, e.prototype.visitAccessThis = function(e) {
                if (0 === e.ancestor) return void this.write("$this");
                this.write("$parent");
                for (var t = e.ancestor - 1; t--;) this.write(".$parent")
            }, e.prototype.visitAccessScope = function(e) {
                for (var t = e.ancestor; t--;) this.write("$parent.");
                this.write(e.name)
            }, e.prototype.visitAccessMember = function(e) {
                e.object.accept(this), this.write("." + e.name)
            }, e.prototype.visitAccessKeyed = function(e) {
                e.object.accept(this), this.write("["), e.key.accept(this), this.write("]")
            }, e.prototype.visitCallScope = function(e) {
                for (var t = e.ancestor; t--;) this.write("$parent.");
                this.write(e.name), this.writeArgs(e.args)
            }, e.prototype.visitCallFunction = function(e) {
                e.func.accept(this), this.writeArgs(e.args)
            }, e.prototype.visitCallMember = function(e) {
                e.object.accept(this), this.write("." + e.name), this.writeArgs(e.args)
            }, e.prototype.visitPrefix = function(e) {
                this.write("(" + e.operation), e.expression.accept(this), this.write(")")
            }, e.prototype.visitBinary = function(e) {
                e.left.accept(this), this.write(e.operation), e.right.accept(this)
            }, e.prototype.visitLiteralPrimitive = function(e) {
                this.write("" + e.value)
            }, e.prototype.visitLiteralArray = function(e) {
                var t = e.elements;
                this.write("[");
                for (var n = 0, r = t.length; n < r; ++n) 0 !== n && this.write(","), t[n].accept(this);
                this.write("]")
            }, e.prototype.visitLiteralObject = function(e) {
                var t = e.keys,
                    n = e.values;
                this.write("{");
                for (var r = 0, i = t.length; r < i; ++r) 0 !== r && this.write(","), this.write("'" + t[r] + "':"), n[r].accept(this);
                this.write("}")
            }, e.prototype.visitLiteralString = function(e) {
                var t = e.value.replace(/'/g, "'");
                this.write("'" + t + "'")
            }, e
        }());
        var At = e.ExpressionCloner = function() {
                function e() {}
                return e.prototype.cloneExpressionArray = function(e) {
                    for (var t = [], n = e.length; n--;) t[n] = e[n].accept(this);
                    return t
                }, e.prototype.visitChain = function(e) {
                    return new ht(this.cloneExpressionArray(e.expressions))
                }, e.prototype.visitBindingBehavior = function(e) {
                    return new dt(e.expression.accept(this), e.name, this.cloneExpressionArray(e.args))
                }, e.prototype.visitValueConverter = function(e) {
                    return new pt(e.expression.accept(this), e.name, this.cloneExpressionArray(e.args))
                }, e.prototype.visitAssign = function(e) {
                    return new ft(e.target.accept(this), e.value.accept(this))
                }, e.prototype.visitConditional = function(e) {
                    return new vt(e.condition.accept(this), e.yes.accept(this), e.no.accept(this))
                }, e.prototype.visitAccessThis = function(e) {
                    return new mt(e.ancestor)
                }, e.prototype.visitAccessScope = function(e) {
                    return new gt(e.name, e.ancestor)
                }, e.prototype.visitAccessMember = function(e) {
                    return new yt(e.object.accept(this), e.name)
                }, e.prototype.visitAccessKeyed = function(e) {
                    return new bt(e.object.accept(this), e.key.accept(this))
                }, e.prototype.visitCallScope = function(e) {
                    return new wt(e.name, this.cloneExpressionArray(e.args), e.ancestor)
                }, e.prototype.visitCallFunction = function(e) {
                    return new xt(e.func.accept(this), this.cloneExpressionArray(e.args))
                }, e.prototype.visitCallMember = function(e) {
                    return new _t(e.object.accept(this), e.name, this.cloneExpressionArray(e.args))
                }, e.prototype.visitPrefix = function(e) {
                    return new Ct(e.operation, e.expression.accept(this))
                }, e.prototype.visitBinary = function(e) {
                    return new St(e.operation, e.left.accept(this), e.right.accept(this))
                }, e.prototype.visitLiteralPrimitive = function(e) {
                    return new kt(e)
                }, e.prototype.visitLiteralArray = function(e) {
                    return new Ot(this.cloneExpressionArray(e.elements))
                }, e.prototype.visitLiteralObject = function(e) {
                    return new Mt(e.keys, this.cloneExpressionArray(e.values))
                }, e.prototype.visitLiteralString = function(e) {
                    return new Et(e.value)
                }, e
            }(),
            Pt = e.bindingMode = {
                oneTime: 0,
                oneWay: 1,
                twoWay: 2
            },
            Tt = e.Token = function() {
                function e(e, t) {
                    this.index = e, this.text = t
                }
                return e.prototype.withOp = function(e) {
                    return this.opKey = e, this
                }, e.prototype.withGetterSetter = function(e) {
                    return this.key = e, this
                }, e.prototype.withValue = function(e) {
                    return this.value = e, this
                }, e.prototype.toString = function() {
                    return "Token(" + this.text + ")"
                }, e
            }(),
            jt = e.Lexer = function() {
                function e() {}
                return e.prototype.lex = function(e) {
                    for (var t = new Lt(e), n = [], r = t.scanToken(); r;) n.push(r), r = t.scanToken();
                    return n
                }, e
            }(),
            Lt = e.Scanner = function() {
                function e(e) {
                    this.input = e, this.length = e.length, this.peek = 0, this.index = -1, this.advance()
                }
                return e.prototype.scanToken = function() {
                    for (; this.peek <= zt;) {
                        if (++this.index >= this.length) return this.peek = Nt, null;
                        this.peek = this.input.charCodeAt(this.index)
                    }
                    if (H(this.peek)) return this.scanIdentifier();
                    if (Y(this.peek)) return this.scanNumber(this.index);
                    var e = this.index;
                    switch (this.peek) {
                        case tn:
                            return this.advance(), Y(this.peek) ? this.scanNumber(e) : new Tt(e, ".");
                        case Qt:
                        case Zt:
                        case Rn:
                        case Pn:
                        case vn:
                        case gn:
                        case Jt:
                        case rn:
                        case on:
                            return this.scanCharacter(e, String.fromCharCode(this.peek));
                        case $t:
                        case Ut:
                            return this.scanString();
                        case Xt:
                        case en:
                        case Kt:
                        case nn:
                        case Wt:
                        case yn:
                        case ln:
                            return this.scanOperator(e, String.fromCharCode(this.peek));
                        case sn:
                        case un:
                        case Ht:
                        case an:
                            return this.scanComplexOperator(e, an, String.fromCharCode(this.peek), "=");
                        case Gt:
                            return this.scanComplexOperator(e, Gt, "&", "&");
                        case An:
                            return this.scanComplexOperator(e, An, "|", "|");
                        case Tn:
                            for (; z(this.peek);) this.advance();
                            return this.scanToken()
                    }
                    var t = String.fromCharCode(this.peek);
                    return this.error("Unexpected character [" + t + "]"), null
                }, e.prototype.scanCharacter = function(e, t) {
                    return Q(this.peek === t.charCodeAt(0)), this.advance(), new Tt(e, t)
                }, e.prototype.scanOperator = function(e, t) {
                    return Q(this.peek === t.charCodeAt(0)), Q(-1 !== Ft.indexOf(t)), this.advance(), new Tt(e, t).withOp(t)
                }, e.prototype.scanComplexOperator = function(e, t, n, r) {
                    Q(this.peek === n.charCodeAt(0)), this.advance();
                    var i = n;
                    return this.peek === t && (this.advance(), i += r), this.peek === t && (this.advance(), i += r), Q(-1 !== Ft.indexOf(i)), new Tt(e, i).withOp(i)
                }, e.prototype.scanIdentifier = function() {
                    Q(H(this.peek));
                    var e = this.index;
                    for (this.advance(); U(this.peek);) this.advance();
                    var t = this.input.substring(e, this.index),
                        n = new Tt(e, t);
                    return -1 !== Ft.indexOf(t) ? n.withOp(t) : n.withGetterSetter(t), n
                }, e.prototype.scanNumber = function(e) {
                    Q(Y(this.peek));
                    var t = this.index === e;
                    for (this.advance();;) {
                        if (!Y(this.peek))
                            if (this.peek === tn) t = !1;
                            else {
                                if (!W(this.peek)) break;
                                this.advance(), G(this.peek) && this.advance(), Y(this.peek) || this.error("Invalid exponent", -1), t = !1
                            } this.advance()
                    }
                    var n = this.input.substring(e, this.index),
                        r = t ? parseInt(n, 10) : parseFloat(n);
                    return new Tt(e, n).withValue(r)
                }, e.prototype.scanString = function() {
                    Q(this.peek === $t || this.peek === Ut);
                    var e = this.index,
                        t = this.peek;
                    this.advance();
                    for (var n = void 0, r = this.index; this.peek !== t;)
                        if (this.peek === mn) {
                            n || (n = []), n.push(this.input.substring(r, this.index)), this.advance();
                            var i = void 0;
                            if (this.peek === En) {
                                var o = this.input.substring(this.index + 1, this.index + 5);
                                /[A-Z0-9]{4}/.test(o) || this.error("Invalid unicode escape [\\u" + o + "]"), i = parseInt(o, 16);
                                for (var s = 0; s < 5; ++s) this.advance()
                            } else i = $(this.peek), this.advance();
                            n.push(String.fromCharCode(i)), r = this.index
                        } else this.peek === Nt ? this.error("Unterminated quote") : this.advance();
                    var a = this.input.substring(r, this.index);
                    this.advance();
                    var u = this.input.substring(e, this.index),
                        l = a;
                    return null !== n && void 0 !== n && (n.push(a), l = n.join("")), new Tt(e, u).withValue(l)
                }, e.prototype.advance = function() {
                    ++this.index >= this.length ? this.peek = Nt : this.peek = this.input.charCodeAt(this.index)
                }, e.prototype.error = function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                        n = this.index + t;
                    throw new Error("Lexer Error: " + e + " at column " + n + " in expression [" + this.input + "]")
                }, e
            }(),
            Ft = ["undefined", "null", "true", "false", "+", "-", "*", "/", "%", "^", "=", "==", "===", "!=", "!==", "<", ">", "<=", ">=", "&&", "||", "&", "|", "!", "?"],
            Nt = 0,
            Dt = 9,
            It = 10,
            Vt = 11,
            Bt = 12,
            qt = 13,
            zt = 32,
            Ht = 33,
            Ut = 34,
            Yt = 36,
            Wt = 37,
            Gt = 38,
            $t = 39,
            Qt = 40,
            Zt = 41,
            Kt = 42,
            Xt = 43,
            Jt = 44,
            en = 45,
            tn = 46,
            nn = 47,
            rn = 58,
            on = 59,
            sn = 60,
            an = 61,
            un = 62,
            ln = 63,
            cn = 48,
            hn = 57,
            dn = 65,
            pn = 69,
            fn = 90,
            vn = 91,
            mn = 92,
            gn = 93,
            yn = 94,
            bn = 95,
            wn = 97,
            _n = 101,
            xn = 102,
            Sn = 110,
            Cn = 114,
            kn = 116,
            En = 117,
            On = 118,
            Mn = 122,
            Rn = 123,
            An = 124,
            Pn = 125,
            Tn = 160,
            jn = new Tt(-1, null),
            Ln = e.Parser = function() {
                function e() {
                    this.cache = {}, this.lexer = new jt
                }
                return e.prototype.parse = function(e) {
                    return e = e || "", this.cache[e] || (this.cache[e] = new Fn(this.lexer, e).parseChain())
                }, e
            }(),
            Fn = e.ParserImplementation = function() {
                function e(e, t) {
                    this.index = 0, this.input = t, this.tokens = e.lex(t)
                }
                return e.prototype.parseChain = function() {
                    for (var e = !1, t = []; this.optional(";");) e = !0;
                    for (; this.index < this.tokens.length;) {
                        ")" !== this.peek.text && "}" !== this.peek.text && "]" !== this.peek.text || this.error("Unconsumed token " + this.peek.text);
                        var n = this.parseBindingBehavior();
                        for (t.push(n); this.optional(";");) e = !0;
                        e && this.error("Multiple expressions are not allowed.")
                    }
                    return 1 === t.length ? t[0] : new ht(t)
                }, e.prototype.parseBindingBehavior = function() {
                    for (var e = this.parseValueConverter(); this.optional("&");) {
                        var t = this.peek.text,
                            n = [];
                        for (this.advance(); this.optional(":");) n.push(this.parseExpression());
                        e = new dt(e, t, n)
                    }
                    return e
                }, e.prototype.parseValueConverter = function() {
                    for (var e = this.parseExpression(); this.optional("|");) {
                        var t = this.peek.text,
                            n = [];
                        for (this.advance(); this.optional(":");) n.push(this.parseExpression());
                        e = new pt(e, t, n, [e].concat(n))
                    }
                    return e
                }, e.prototype.parseExpression = function() {
                    for (var e = this.peek.index, t = this.parseConditional();
                        "=" === this.peek.text;) {
                        if (!t.isAssignable) {
                            var n = this.index < this.tokens.length ? this.peek.index : this.input.length,
                                r = this.input.substring(e, n);
                            this.error("Expression " + r + " is not assignable")
                        }
                        this.expect("="), t = new ft(t, this.parseConditional())
                    }
                    return t
                }, e.prototype.parseConditional = function() {
                    var e = this.peek.index,
                        t = this.parseLogicalOr();
                    if (this.optional("?")) {
                        var n = this.parseExpression();
                        if (!this.optional(":")) {
                            var r = this.index < this.tokens.length ? this.peek.index : this.input.length,
                                i = this.input.substring(e, r);
                            this.error("Conditional expression " + i + " requires all 3 expressions")
                        }
                        var o = this.parseExpression();
                        t = new vt(t, n, o)
                    }
                    return t
                }, e.prototype.parseLogicalOr = function() {
                    for (var e = this.parseLogicalAnd(); this.optional("||");) e = new St("||", e, this.parseLogicalAnd());
                    return e
                }, e.prototype.parseLogicalAnd = function() {
                    for (var e = this.parseEquality(); this.optional("&&");) e = new St("&&", e, this.parseEquality());
                    return e
                }, e.prototype.parseEquality = function() {
                    for (var e = this.parseRelational();;)
                        if (this.optional("==")) e = new St("==", e, this.parseRelational());
                        else if (this.optional("!=")) e = new St("!=", e, this.parseRelational());
                    else if (this.optional("===")) e = new St("===", e, this.parseRelational());
                    else {
                        if (!this.optional("!==")) return e;
                        e = new St("!==", e, this.parseRelational())
                    }
                }, e.prototype.parseRelational = function() {
                    for (var e = this.parseAdditive();;)
                        if (this.optional("<")) e = new St("<", e, this.parseAdditive());
                        else if (this.optional(">")) e = new St(">", e, this.parseAdditive());
                    else if (this.optional("<=")) e = new St("<=", e, this.parseAdditive());
                    else {
                        if (!this.optional(">=")) return e;
                        e = new St(">=", e, this.parseAdditive())
                    }
                }, e.prototype.parseAdditive = function() {
                    for (var e = this.parseMultiplicative();;)
                        if (this.optional("+")) e = new St("+", e, this.parseMultiplicative());
                        else {
                            if (!this.optional("-")) return e;
                            e = new St("-", e, this.parseMultiplicative())
                        }
                }, e.prototype.parseMultiplicative = function() {
                    for (var e = this.parsePrefix();;)
                        if (this.optional("*")) e = new St("*", e, this.parsePrefix());
                        else if (this.optional("%")) e = new St("%", e, this.parsePrefix());
                    else {
                        if (!this.optional("/")) return e;
                        e = new St("/", e, this.parsePrefix())
                    }
                }, e.prototype.parsePrefix = function() {
                    return this.optional("+") ? this.parsePrefix() : this.optional("-") ? new St("-", new kt(0), this.parsePrefix()) : this.optional("!") ? new Ct("!", this.parsePrefix()) : this.parseAccessOrCallMember()
                }, e.prototype.parseAccessOrCallMember = function() {
                    for (var e = this.parsePrimary();;)
                        if (this.optional(".")) {
                            var t = this.peek.text;
                            if (this.advance(), this.optional("(")) {
                                var n = this.parseExpressionList(")");
                                this.expect(")"), e = e instanceof mt ? new wt(t, n, e.ancestor) : new _t(e, t, n)
                            } else e = e instanceof mt ? new gt(t, e.ancestor) : new yt(e, t)
                        } else if (this.optional("[")) {
                        var r = this.parseExpression();
                        this.expect("]"), e = new bt(e, r)
                    } else {
                        if (!this.optional("(")) return e;
                        var i = this.parseExpressionList(")");
                        this.expect(")"), e = new xt(e, i)
                    }
                }, e.prototype.parsePrimary = function() {
                    if (this.optional("(")) {
                        var e = this.parseExpression();
                        return this.expect(")"), e
                    }
                    if (this.optional("null")) return new kt(null);
                    if (this.optional("undefined")) return new kt(void 0);
                    if (this.optional("true")) return new kt(!0);
                    if (this.optional("false")) return new kt(!1);
                    if (this.optional("[")) {
                        var t = this.parseExpressionList("]");
                        return this.expect("]"), new Ot(t)
                    }
                    if ("{" === this.peek.text) return this.parseObject();
                    if (null !== this.peek.key && void 0 !== this.peek.key) return this.parseAccessOrCallScope();
                    if (null !== this.peek.value && void 0 !== this.peek.value) {
                        var n = this.peek.value;
                        return this.advance(), n instanceof String || "string" == typeof n ? new Et(n) : new kt(n)
                    }
                    if (this.index >= this.tokens.length) throw new Error("Unexpected end of expression: " + this.input);
                    this.error("Unexpected token " + this.peek.text)
                }, e.prototype.parseAccessOrCallScope = function() {
                    var e = this.peek.key;
                    if (this.advance(), "$this" === e) return new mt(0);
                    for (var t = 0;
                        "$parent" === e;)
                        if (t++, this.optional(".")) e = this.peek.key, this.advance();
                        else {
                            if (this.peek === jn || "(" === this.peek.text || ")" === this.peek.text || "[" === this.peek.text || "}" === this.peek.text || "," === this.peek.text) return new mt(t);
                            this.error("Unexpected token " + this.peek.text)
                        } if (this.optional("(")) {
                        var n = this.parseExpressionList(")");
                        return this.expect(")"), new wt(e, n, t)
                    }
                    return new gt(e, t)
                }, e.prototype.parseObject = function() {
                    var e = [],
                        t = [];
                    if (this.expect("{"), "}" !== this.peek.text)
                        do {
                            var n = this.peek,
                                r = n.value;
                            e.push("string" == typeof r ? r : n.text), this.advance(), !n.key || "," !== this.peek.text && "}" !== this.peek.text ? (this.expect(":"), t.push(this.parseExpression())) : (--this.index, t.push(this.parseAccessOrCallScope()))
                        } while (this.optional(","));
                    return this.expect("}"), new Mt(e, t)
                }, e.prototype.parseExpressionList = function(e) {
                    var t = [];
                    if (this.peek.text !== e)
                        do {
                            t.push(this.parseExpression())
                        } while (this.optional(","));
                    return t
                }, e.prototype.optional = function(e) {
                    return this.peek.text === e && (this.advance(), !0)
                }, e.prototype.expect = function(e) {
                    this.peek.text === e ? this.advance() : this.error("Missing expected " + e)
                }, e.prototype.advance = function() {
                    this.index++
                }, e.prototype.error = function(e) {
                    var t = this.index < this.tokens.length ? "at column " + (this.tokens[this.index].index + 1) + " in" : "at the end of the expression";
                    throw new Error("Parser Error: " + e + " " + t + " [" + this.input + "]")
                }, Ne(e, [{
                    key: "peek",
                    get: function() {
                        return this.index < this.tokens.length ? this.tokens[this.index] : jn
                    }
                }]), e
            }(),
            Nn = Map.prototype;
        e.getMapObserver = Z;
        var Dn = function(e) {
                function t(t, n) {
                    return o(this, e.call(this, t, n))
                }
                return s(t, e), t.for = function(e, n) {
                    return "__map_observer__" in n || Reflect.defineProperty(n, "__map_observer__", {
                        value: t.create(e, n),
                        enumerable: !1,
                        configurable: !1
                    }), n.__map_observer__
                }, t.create = function(e, n) {
                    var r = new t(e, n),
                        i = Nn;
                    return i.set === n.set && i.delete === n.delete && i.clear === n.clear || (i = {
                        set: n.set,
                        delete: n.delete,
                        clear: n.clear
                    }), n.set = function() {
                        var e = n.has(arguments[0]),
                            t = e ? "update" : "add",
                            o = n.get(arguments[0]),
                            s = i.set.apply(n, arguments);
                        return e && o === n.get(arguments[0]) || r.addChangeRecord({
                            type: t,
                            object: n,
                            key: arguments[0],
                            oldValue: o
                        }), s
                    }, n.delete = function() {
                        var e = n.has(arguments[0]),
                            t = n.get(arguments[0]),
                            o = i.delete.apply(n, arguments);
                        return e && r.addChangeRecord({
                            type: "delete",
                            object: n,
                            key: arguments[0],
                            oldValue: t
                        }), o
                    }, n.clear = function() {
                        var e = i.clear.apply(n, arguments);
                        return r.addChangeRecord({
                            type: "clear",
                            object: n
                        }), e
                    }, r
                }, t
            }(et),
            In = function() {
                function e(e) {
                    this.eventName = e, this.count = 0
                }
                return e.prototype.increment = function() {
                    1 === ++this.count && n.DOM.addEventListener(this.eventName, ee, !0)
                }, e.prototype.decrement = function() {
                    0 === --this.count && n.DOM.removeEventListener(this.eventName, ee, !0)
                }, e
            }(),
            Vn = function() {
                function e(e) {
                    this.eventName = e, this.count = 0
                }
                return e.prototype.increment = function() {
                    1 === ++this.count && n.DOM.addEventListener(this.eventName, te, !1)
                }, e.prototype.decrement = function() {
                    0 === --this.count && n.DOM.removeEventListener(this.eventName, te)
                }, e
            }(),
            Bn = function() {
                function e() {
                    this.delegatedHandlers = {}, this.capturedHandlers = {}
                }
                return e.prototype.subscribe = function(e, t, n, r) {
                    var i = this,
                        o = void 0,
                        s = void 0,
                        a = void 0;
                    if (r === qn.bubbling) {
                        var u = function() {
                            o = i.delegatedHandlers, a = o[t] || (o[t] = new Vn(t));
                            var r = e.delegatedCallbacks || (e.delegatedCallbacks = {});
                            return a.increment(), r[t] = n, {
                                v: function() {
                                    a.decrement(), r[t] = null
                                }
                            }
                        }();
                        if ("object" === (void 0 === u ? "undefined" : Fe(u))) return u.v
                    }
                    if (r === qn.capturing) {
                        var l = function() {
                            s = i.capturedHandlers, a = s[t] || (s[t] = new In(t));
                            var r = e.capturedCallbacks || (e.capturedCallbacks = {});
                            return a.increment(), r[t] = n, {
                                v: function() {
                                    a.decrement(), r[t] = null
                                }
                            }
                        }();
                        if ("object" === (void 0 === l ? "undefined" : Fe(l))) return l.v
                    }
                    return e.addEventListener(t, n, !1),
                        function() {
                            e.removeEventListener(t, n)
                        }
                }, e
            }(),
            qn = e.delegationStrategy = {
                none: 0,
                capturing: 1,
                bubbling: 2
            },
            zn = e.EventManager = function() {
                function e() {
                    this.elementHandlerLookup = {}, this.eventStrategyLookup = {}, this.registerElementConfig({
                        tagName: "input",
                        properties: {
                            value: ["change", "input"],
                            checked: ["change", "input"],
                            files: ["change", "input"]
                        }
                    }), this.registerElementConfig({
                        tagName: "textarea",
                        properties: {
                            value: ["change", "input"]
                        }
                    }), this.registerElementConfig({
                        tagName: "select",
                        properties: {
                            value: ["change"]
                        }
                    }), this.registerElementConfig({
                        tagName: "content editable",
                        properties: {
                            value: ["change", "input", "blur", "keyup", "paste"]
                        }
                    }), this.registerElementConfig({
                        tagName: "scrollable element",
                        properties: {
                            scrollTop: ["scroll"],
                            scrollLeft: ["scroll"]
                        }
                    }), this.defaultEventStrategy = new Bn
                }
                return e.prototype.registerElementConfig = function(e) {
                    var t = e.tagName.toLowerCase(),
                        n = e.properties,
                        r = void 0;
                    this.elementHandlerLookup[t] = {};
                    for (r in n) n.hasOwnProperty(r) && this.registerElementPropertyConfig(t, r, n[r])
                }, e.prototype.registerElementPropertyConfig = function(e, t, n) {
                    this.elementHandlerLookup[e][t] = this.createElementHandler(n)
                }, e.prototype.createElementHandler = function(e) {
                    return {
                        subscribe: function(t, n) {
                            return e.forEach(function(e) {
                                    t.addEventListener(e, n, !1)
                                }),
                                function() {
                                    e.forEach(function(e) {
                                        t.removeEventListener(e, n)
                                    })
                                }
                        }
                    }
                }, e.prototype.registerElementHandler = function(e, t) {
                    this.elementHandlerLookup[e.toLowerCase()] = t
                }, e.prototype.registerEventStrategy = function(e, t) {
                    this.eventStrategyLookup[e] = t
                }, e.prototype.getElementHandler = function(e, t) {
                    var n = void 0,
                        r = this.elementHandlerLookup;
                    if (e.tagName) {
                        if (n = e.tagName.toLowerCase(), r[n] && r[n][t]) return r[n][t];
                        if ("textContent" === t || "innerHTML" === t) return r["content editable"].value;
                        if ("scrollTop" === t || "scrollLeft" === t) return r["scrollable element"][t]
                    }
                    return null
                }, e.prototype.addEventListener = function(e, t, n, r) {
                    return (this.eventStrategyLookup[t] || this.defaultEventStrategy).subscribe(e, t, n, r)
                }, e
            }(),
            Hn = e.DirtyChecker = function() {
                function e() {
                    this.tracked = [], this.checkDelay = 120
                }
                return e.prototype.addProperty = function(e) {
                    var t = this.tracked;
                    t.push(e), 1 === t.length && this.scheduleDirtyCheck()
                }, e.prototype.removeProperty = function(e) {
                    var t = this.tracked;
                    t.splice(t.indexOf(e), 1)
                }, e.prototype.scheduleDirtyCheck = function() {
                    var e = this;
                    setTimeout(function() {
                        return e.check()
                    }, this.checkDelay)
                }, e.prototype.check = function() {
                    for (var e = this.tracked, t = e.length; t--;) {
                        var n = e[t];
                        n.isDirty() && n.call()
                    }
                    e.length && this.scheduleDirtyCheck()
                }, e
            }(),
            Un = e.DirtyCheckProperty = (ye = S())(be = function() {
                function e(e, t, n) {
                    this.dirtyChecker = e, this.obj = t, this.propertyName = n
                }
                return e.prototype.getValue = function() {
                    return this.obj[this.propertyName]
                }, e.prototype.setValue = function(e) {
                    this.obj[this.propertyName] = e
                }, e.prototype.call = function() {
                    var e = this.oldValue,
                        t = this.getValue();
                    this.callSubscribers(t, e), this.oldValue = t
                }, e.prototype.isDirty = function() {
                    return this.oldValue !== this.obj[this.propertyName]
                }, e.prototype.subscribe = function(e, t) {
                    this.hasSubscribers() || (this.oldValue = this.getValue(), this.dirtyChecker.addProperty(this)), this.addSubscriber(e, t)
                }, e.prototype.unsubscribe = function(e, t) {
                    this.removeSubscriber(e, t) && !this.hasSubscribers() && this.dirtyChecker.removeProperty(this)
                }, e
            }()) || be,
            Yn = Le.getLogger("property-observation"),
            Wn = e.propertyAccessor = {
                getValue: function(e, t) {
                    return e[t]
                },
                setValue: function(e, t, n) {
                    t[n] = e
                }
            },
            Gn = e.PrimitiveObserver = function() {
                function e(e, t) {
                    this.doNotCache = !0, this.primitive = e, this.propertyName = t
                }
                return e.prototype.getValue = function() {
                    return this.primitive[this.propertyName]
                }, e.prototype.setValue = function() {
                    var e = Fe(this.primitive);
                    throw new Error("The " + this.propertyName + " property of a " + e + " (" + this.primitive + ") cannot be assigned.")
                }, e.prototype.subscribe = function() {}, e.prototype.unsubscribe = function() {}, e
            }(),
            $n = e.SetterObserver = (we = S())(_e = function() {
                function e(e, t, n) {
                    this.taskQueue = e, this.obj = t, this.propertyName = n, this.queued = !1, this.observing = !1
                }
                return e.prototype.getValue = function() {
                    return this.obj[this.propertyName]
                }, e.prototype.setValue = function(e) {
                    this.obj[this.propertyName] = e
                }, e.prototype.getterValue = function() {
                    return this.currentValue
                }, e.prototype.setterValue = function(e) {
                    var t = this.currentValue;
                    t !== e && (this.queued || (this.oldValue = t, this.queued = !0, this.taskQueue.queueMicroTask(this)), this.currentValue = e)
                }, e.prototype.call = function() {
                    var e = this.oldValue,
                        t = this.currentValue;
                    this.queued = !1, this.callSubscribers(t, e)
                }, e.prototype.subscribe = function(e, t) {
                    this.observing || this.convertProperty(), this.addSubscriber(e, t)
                }, e.prototype.unsubscribe = function(e, t) {
                    this.removeSubscriber(e, t)
                }, e.prototype.convertProperty = function() {
                    this.observing = !0, this.currentValue = this.obj[this.propertyName], this.setValue = this.setterValue, this.getValue = this.getterValue, Reflect.defineProperty(this.obj, this.propertyName, {
                        configurable: !0,
                        enumerable: !(this.propertyName in this.obj) || this.obj.propertyIsEnumerable(this.propertyName),
                        get: this.getValue.bind(this),
                        set: this.setValue.bind(this)
                    }) || Yn.warn("Cannot observe property '" + this.propertyName + "' of object", this.obj)
                }, e
            }()) || _e,
            Qn = e.XLinkAttributeObserver = function() {
                function e(e, t, n) {
                    this.element = e, this.propertyName = t, this.attributeName = n
                }
                return e.prototype.getValue = function() {
                    return this.element.getAttributeNS("http://www.w3.org/1999/xlink", this.attributeName)
                }, e.prototype.setValue = function(e) {
                    return this.element.setAttributeNS("http://www.w3.org/1999/xlink", this.attributeName, e)
                }, e.prototype.subscribe = function() {
                    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.')
                }, e
            }(),
            Zn = e.dataAttributeAccessor = {
                getValue: function(e, t) {
                    return e.getAttribute(t)
                },
                setValue: function(e, t, n) {
                    return t.setAttribute(n, e)
                }
            },
            Kn = e.DataAttributeObserver = function() {
                function e(e, t) {
                    this.element = e, this.propertyName = t
                }
                return e.prototype.getValue = function() {
                    return this.element.getAttribute(this.propertyName)
                }, e.prototype.setValue = function(e) {
                    return this.element.setAttribute(this.propertyName, e)
                }, e.prototype.subscribe = function() {
                    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.')
                }, e
            }(),
            Xn = e.StyleObserver = function() {
                function e(e, t) {
                    this.element = e, this.propertyName = t, this.styles = null, this.version = 0
                }
                return e.prototype.getValue = function() {
                    return this.element.style.cssText
                }, e.prototype._setProperty = function(e, t) {
                    var n = "";
                    null !== t && void 0 !== t && "function" == typeof t.indexOf && -1 !== t.indexOf("!important") && (n = "important", t = t.replace("!important", "")), this.element.style.setProperty(e, t, n)
                }, e.prototype.setValue = function(e) {
                    var t = this.styles || {},
                        n = void 0,
                        r = this.version;
                    if (null !== e && void 0 !== e)
                        if (e instanceof Object) {
                            var i = void 0;
                            for (n in e) e.hasOwnProperty(n) && (i = e[n], n = n.replace(/([A-Z])/g, function(e) {
                                return "-" + e.toLowerCase()
                            }), t[n] = r, this._setProperty(n, i))
                        } else if (e.length)
                        for (var o = /\s*([\w\-]+)\s*:\s*((?:(?:[\w\-]+\(\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[\w\-]+\(\s*(?:^"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^\)]*)\),?|[^\)]*)\),?|"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^;]*),?\s*)+);?/g, s = void 0; null !== (s = o.exec(e));)(n = s[1]) && (t[n] = r, this._setProperty(n, s[2]));
                    if (this.styles = t, this.version += 1, 0 !== r) {
                        r -= 1;
                        for (n in t) t.hasOwnProperty(n) && t[n] === r && this.element.style.removeProperty(n)
                    }
                }, e.prototype.subscribe = function() {
                    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.')
                }, e
            }(),
            Jn = e.ValueAttributeObserver = (xe = S())(Se = function() {
                function e(e, t, n) {
                    this.element = e, this.propertyName = t, this.handler = n, "files" === t && (this.setValue = function() {})
                }
                return e.prototype.getValue = function() {
                    return this.element[this.propertyName]
                }, e.prototype.setValue = function(e) {
                    e = void 0 === e || null === e ? "" : e, this.element[this.propertyName] !== e && (this.element[this.propertyName] = e, this.notify())
                }, e.prototype.notify = function() {
                    var e = this.oldValue,
                        t = this.getValue();
                    this.callSubscribers(t, e), this.oldValue = t
                }, e.prototype.subscribe = function(e, t) {
                    this.hasSubscribers() || (this.oldValue = this.getValue(), this.disposeHandler = this.handler.subscribe(this.element, this.notify.bind(this))), this.addSubscriber(e, t)
                }, e.prototype.unsubscribe = function(e, t) {
                    this.removeSubscriber(e, t) && !this.hasSubscribers() && (this.disposeHandler(), this.disposeHandler = null)
                }, e
            }()) || Se,
            er = e.CheckedObserver = (Ce = S())(ke = function() {
                function e(e, t, n) {
                    this.element = e, this.handler = t, this.observerLocator = n
                }
                return e.prototype.getValue = function() {
                    return this.value
                }, e.prototype.setValue = function(e) {
                    this.initialSync && this.value === e || (this.arrayObserver && (this.arrayObserver.unsubscribe("CheckedObserver:array", this), this.arrayObserver = null), "checkbox" === this.element.type && Array.isArray(e) && (this.arrayObserver = this.observerLocator.getArrayObserver(e), this.arrayObserver.subscribe("CheckedObserver:array", this)), this.oldValue = this.value, this.value = e, this.synchronizeElement(), this.notify(), this.initialSync || (this.initialSync = !0, this.observerLocator.taskQueue.queueMicroTask(this)))
                }, e.prototype.call = function(e, t) {
                    this.synchronizeElement(), this.valueObserver || (this.valueObserver = this.element.__observers__.model || this.element.__observers__.value, this.valueObserver && this.valueObserver.subscribe("CheckedObserver:value", this))
                }, e.prototype.synchronizeElement = function() {
                    var e = this.value,
                        t = this.element,
                        n = t.hasOwnProperty("model") ? t.model : t.value,
                        r = "radio" === t.type,
                        i = t.matcher || function(e, t) {
                            return e === t
                        };
                    t.checked = r && !!i(e, n) || !r && !0 === e || !r && Array.isArray(e) && -1 !== e.findIndex(function(e) {
                        return !!i(e, n)
                    })
                }, e.prototype.synchronizeValue = function() {
                    var e = this.value,
                        t = this.element,
                        n = t.hasOwnProperty("model") ? t.model : t.value,
                        r = void 0,
                        i = t.matcher || function(e, t) {
                            return e === t
                        };
                    if ("checkbox" === t.type) {
                        if (Array.isArray(e)) return r = e.findIndex(function(e) {
                            return !!i(e, n)
                        }), void(t.checked && -1 === r ? e.push(n) : t.checked || -1 === r || e.splice(r, 1));
                        e = t.checked
                    } else {
                        if (!t.checked) return;
                        e = n
                    }
                    this.oldValue = this.value, this.value = e, this.notify()
                }, e.prototype.notify = function() {
                    var e = this.oldValue,
                        t = this.value;
                    t !== e && this.callSubscribers(t, e)
                }, e.prototype.subscribe = function(e, t) {
                    this.hasSubscribers() || (this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, !1))), this.addSubscriber(e, t)
                }, e.prototype.unsubscribe = function(e, t) {
                    this.removeSubscriber(e, t) && !this.hasSubscribers() && (this.disposeHandler(), this.disposeHandler = null)
                }, e.prototype.unbind = function() {
                    this.arrayObserver && (this.arrayObserver.unsubscribe("CheckedObserver:array", this), this.arrayObserver = null), this.valueObserver && this.valueObserver.unsubscribe("CheckedObserver:value", this)
                }, e
            }()) || ke,
            tr = e.SelectValueObserver = (Ee = S())(Oe = function() {
                function e(e, t, n) {
                    this.element = e, this.handler = t, this.observerLocator = n
                }
                return e.prototype.getValue = function() {
                    return this.value
                }, e.prototype.setValue = function(e) {
                    if (null !== e && void 0 !== e && this.element.multiple && !Array.isArray(e)) throw new Error("Only null or Array instances can be bound to a multi-select.");
                    this.value !== e && (this.arrayObserver && (this.arrayObserver.unsubscribe("SelectValueObserver:array", this), this.arrayObserver = null), Array.isArray(e) && (this.arrayObserver = this.observerLocator.getArrayObserver(e), this.arrayObserver.subscribe("SelectValueObserver:array", this)), this.oldValue = this.value, this.value = e, this.synchronizeOptions(), this.notify(), this.initialSync || (this.initialSync = !0, this.observerLocator.taskQueue.queueMicroTask(this)))
                }, e.prototype.call = function(e, t) {
                    this.synchronizeOptions()
                }, e.prototype.synchronizeOptions = function() {
                    var e = this.value,
                        t = void 0;
                    Array.isArray(e) && (t = !0);
                    for (var n = this.element.options, r = n.length, i = this.element.matcher || function(e, t) {
                            return e === t
                        }; r--;) {
                        (function() {
                            var o = n.item(r),
                                s = o.hasOwnProperty("model") ? o.model : o.value;
                            if (t) return o.selected = -1 !== e.findIndex(function(e) {
                                return !!i(s, e)
                            }), "continue";
                            o.selected = !!i(s, e)
                        })()
                    }
                }, e.prototype.synchronizeValue = function() {
                    for (var e = this, t = this.element.options, n = 0, r = [], i = 0, o = t.length; i < o; i++) {
                        var s = t.item(i);
                        s.selected && (r.push(s.hasOwnProperty("model") ? s.model : s.value), n++)
                    }
                    if (this.element.multiple) {
                        if (Array.isArray(this.value)) {
                            var a = function() {
                                for (var t = e.element.matcher || function(e, t) {
                                        return e === t
                                    }, n = 0; n < e.value.length;) ! function() {
                                    var i = e.value[n]; - 1 === r.findIndex(function(e) {
                                        return t(i, e)
                                    }) ? e.value.splice(n, 1) : n++
                                }();
                                n = 0;
                                for (; n < r.length;) ! function() {
                                    var i = r[n]; - 1 === e.value.findIndex(function(e) {
                                        return t(i, e)
                                    }) && e.value.push(i), n++
                                }();
                                return {
                                    v: void 0
                                }
                            }();
                            if ("object" === (void 0 === a ? "undefined" : Fe(a))) return a.v
                        }
                    } else r = 0 === n ? null : r[0];
                    r !== this.value && (this.oldValue = this.value, this.value = r, this.notify())
                }, e.prototype.notify = function() {
                    var e = this.oldValue,
                        t = this.value;
                    this.callSubscribers(t, e)
                }, e.prototype.subscribe = function(e, t) {
                    this.hasSubscribers() || (this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, !1))), this.addSubscriber(e, t)
                }, e.prototype.unsubscribe = function(e, t) {
                    this.removeSubscriber(e, t) && !this.hasSubscribers() && (this.disposeHandler(), this.disposeHandler = null)
                }, e.prototype.bind = function() {
                    var e = this;
                    this.domObserver = n.DOM.createMutationObserver(function() {
                        e.synchronizeOptions(), e.synchronizeValue()
                    }), this.domObserver.observe(this.element, {
                        childList: !0,
                        subtree: !0
                    })
                }, e.prototype.unbind = function() {
                    this.domObserver.disconnect(), this.domObserver = null, this.arrayObserver && (this.arrayObserver.unsubscribe("SelectValueObserver:array", this), this.arrayObserver = null)
                }, e
            }()) || Oe,
            nr = e.ClassObserver = function() {
                function e(e) {
                    this.element = e, this.doNotCache = !0, this.value = "", this.version = 0
                }
                return e.prototype.getValue = function() {
                    return this.value
                }, e.prototype.setValue = function(e) {
                    var t = this.nameIndex || {},
                        n = this.version,
                        r = void 0,
                        i = void 0;
                    if (null !== e && void 0 !== e && e.length) {
                        r = e.split(/\s+/);
                        for (var o = 0, s = r.length; o < s; o++) "" !== (i = r[o]) && (t[i] = n, this.element.classList.add(i))
                    }
                    if (this.value = e, this.nameIndex = t, this.version += 1, 0 !== n) {
                        n -= 1;
                        for (i in t) t.hasOwnProperty(i) && t[i] === n && this.element.classList.remove(i)
                    }
                }, e.prototype.subscribe = function() {
                    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "class" property is not supported.')
                }, e
            }(),
            rr = e.ComputedExpression = function(e) {
                function t(t, n) {
                    var r = o(this, e.call(this));
                    return r.name = t, r.dependencies = n, r.isAssignable = !0, r
                }
                return s(t, e), t.prototype.evaluate = function(e, t) {
                    return e.bindingContext[this.name]
                }, t.prototype.assign = function(e, t) {
                    e.bindingContext[this.name] = t
                }, t.prototype.accept = function(e) {
                    throw new Error("not implemented")
                }, t.prototype.connect = function(e, t) {
                    for (var n = this.dependencies, r = n.length; r--;) n[r].connect(e, t)
                }, t
            }(ct),
            ir = void 0,
            or = void 0,
            sr = void 0,
            ar = void 0;
        "undefined" == typeof FEATURE_NO_SVG && function() {
            ir = {
                a: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "target", "transform", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
                altGlyph: ["class", "dx", "dy", "externalResourcesRequired", "format", "glyphRef", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
                altGlyphDef: ["id", "xml:base", "xml:lang", "xml:space"],
                altGlyphItem: ["id", "xml:base", "xml:lang", "xml:space"],
                animate: ["accumulate", "additive", "attributeName", "attributeType", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
                animateColor: ["accumulate", "additive", "attributeName", "attributeType", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
                animateMotion: ["accumulate", "additive", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keyPoints", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "origin", "path", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "rotate", "systemLanguage", "to", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
                animateTransform: ["accumulate", "additive", "attributeName", "attributeType", "begin", "by", "calcMode", "dur", "end", "externalResourcesRequired", "fill", "from", "id", "keySplines", "keyTimes", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "type", "values", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
                circle: ["class", "cx", "cy", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "r", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
                clipPath: ["class", "clipPathUnits", "externalResourcesRequired", "id", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
                "color-profile": ["id", "local", "name", "rendering-intent", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
                cursor: ["externalResourcesRequired", "id", "requiredExtensions", "requiredFeatures", "systemLanguage", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
                defs: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
                desc: ["class", "id", "style", "xml:base", "xml:lang", "xml:space"],
                ellipse: ["class", "cx", "cy", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rx", "ry", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
                feBlend: ["class", "height", "id", "in", "in2", "mode", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                feColorMatrix: ["class", "height", "id", "in", "result", "style", "type", "values", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                feComponentTransfer: ["class", "height", "id", "in", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                feComposite: ["class", "height", "id", "in", "in2", "k1", "k2", "k3", "k4", "operator", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                feConvolveMatrix: ["bias", "class", "divisor", "edgeMode", "height", "id", "in", "kernelMatrix", "kernelUnitLength", "order", "preserveAlpha", "result", "style", "targetX", "targetY", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                feDiffuseLighting: ["class", "diffuseConstant", "height", "id", "in", "kernelUnitLength", "result", "style", "surfaceScale", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                feDisplacementMap: ["class", "height", "id", "in", "in2", "result", "scale", "style", "width", "x", "xChannelSelector", "xml:base", "xml:lang", "xml:space", "y", "yChannelSelector"],
                feDistantLight: ["azimuth", "elevation", "id", "xml:base", "xml:lang", "xml:space"],
                feFlood: ["class", "height", "id", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                feFuncA: ["amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space"],
                feFuncB: ["amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space"],
                feFuncG: ["amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space"],
                feFuncR: ["amplitude", "exponent", "id", "intercept", "offset", "slope", "tableValues", "type", "xml:base", "xml:lang", "xml:space"],
                feGaussianBlur: ["class", "height", "id", "in", "result", "stdDeviation", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                feImage: ["class", "externalResourcesRequired", "height", "id", "preserveAspectRatio", "result", "style", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
                feMerge: ["class", "height", "id", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                feMergeNode: ["id", "xml:base", "xml:lang", "xml:space"],
                feMorphology: ["class", "height", "id", "in", "operator", "radius", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                feOffset: ["class", "dx", "dy", "height", "id", "in", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                fePointLight: ["id", "x", "xml:base", "xml:lang", "xml:space", "y", "z"],
                feSpecularLighting: ["class", "height", "id", "in", "kernelUnitLength", "result", "specularConstant", "specularExponent", "style", "surfaceScale", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                feSpotLight: ["id", "limitingConeAngle", "pointsAtX", "pointsAtY", "pointsAtZ", "specularExponent", "x", "xml:base", "xml:lang", "xml:space", "y", "z"],
                feTile: ["class", "height", "id", "in", "result", "style", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                feTurbulence: ["baseFrequency", "class", "height", "id", "numOctaves", "result", "seed", "stitchTiles", "style", "type", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                filter: ["class", "externalResourcesRequired", "filterRes", "filterUnits", "height", "id", "primitiveUnits", "style", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
                font: ["class", "externalResourcesRequired", "horiz-adv-x", "horiz-origin-x", "horiz-origin-y", "id", "style", "vert-adv-y", "vert-origin-x", "vert-origin-y", "xml:base", "xml:lang", "xml:space"],
                "font-face": ["accent-height", "alphabetic", "ascent", "bbox", "cap-height", "descent", "font-family", "font-size", "font-stretch", "font-style", "font-variant", "font-weight", "hanging", "id", "ideographic", "mathematical", "overline-position", "overline-thickness", "panose-1", "slope", "stemh", "stemv", "strikethrough-position", "strikethrough-thickness", "underline-position", "underline-thickness", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "widths", "x-height", "xml:base", "xml:lang", "xml:space"],
                "font-face-format": ["id", "string", "xml:base", "xml:lang", "xml:space"],
                "font-face-name": ["id", "name", "xml:base", "xml:lang", "xml:space"],
                "font-face-src": ["id", "xml:base", "xml:lang", "xml:space"],
                "font-face-uri": ["id", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
                foreignObject: ["class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                g: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
                glyph: ["arabic-form", "class", "d", "glyph-name", "horiz-adv-x", "id", "lang", "orientation", "style", "unicode", "vert-adv-y", "vert-origin-x", "vert-origin-y", "xml:base", "xml:lang", "xml:space"],
                glyphRef: ["class", "dx", "dy", "format", "glyphRef", "id", "style", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
                hkern: ["g1", "g2", "id", "k", "u1", "u2", "xml:base", "xml:lang", "xml:space"],
                image: ["class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "preserveAspectRatio", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
                line: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "x1", "x2", "xml:base", "xml:lang", "xml:space", "y1", "y2"],
                linearGradient: ["class", "externalResourcesRequired", "gradientTransform", "gradientUnits", "id", "spreadMethod", "style", "x1", "x2", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y1", "y2"],
                marker: ["class", "externalResourcesRequired", "id", "markerHeight", "markerUnits", "markerWidth", "orient", "preserveAspectRatio", "refX", "refY", "style", "viewBox", "xml:base", "xml:lang", "xml:space"],
                mask: ["class", "externalResourcesRequired", "height", "id", "maskContentUnits", "maskUnits", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                metadata: ["id", "xml:base", "xml:lang", "xml:space"],
                "missing-glyph": ["class", "d", "horiz-adv-x", "id", "style", "vert-adv-y", "vert-origin-x", "vert-origin-y", "xml:base", "xml:lang", "xml:space"],
                mpath: ["externalResourcesRequired", "id", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
                path: ["class", "d", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "pathLength", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
                pattern: ["class", "externalResourcesRequired", "height", "id", "patternContentUnits", "patternTransform", "patternUnits", "preserveAspectRatio", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "viewBox", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
                polygon: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "points", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
                polyline: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "points", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
                radialGradient: ["class", "cx", "cy", "externalResourcesRequired", "fx", "fy", "gradientTransform", "gradientUnits", "id", "r", "spreadMethod", "style", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
                rect: ["class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rx", "ry", "style", "systemLanguage", "transform", "width", "x", "xml:base", "xml:lang", "xml:space", "y"],
                script: ["externalResourcesRequired", "id", "type", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
                set: ["attributeName", "attributeType", "begin", "dur", "end", "externalResourcesRequired", "fill", "id", "max", "min", "onbegin", "onend", "onload", "onrepeat", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "systemLanguage", "to", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
                stop: ["class", "id", "offset", "style", "xml:base", "xml:lang", "xml:space"],
                style: ["id", "media", "title", "type", "xml:base", "xml:lang", "xml:space"],
                svg: ["baseProfile", "class", "contentScriptType", "contentStyleType", "externalResourcesRequired", "height", "id", "onabort", "onactivate", "onclick", "onerror", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onresize", "onscroll", "onunload", "onzoom", "preserveAspectRatio", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "version", "viewBox", "width", "x", "xml:base", "xml:lang", "xml:space", "y", "zoomAndPan"],
                switch: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "xml:base", "xml:lang", "xml:space"],
                symbol: ["class", "externalResourcesRequired", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "preserveAspectRatio", "style", "viewBox", "xml:base", "xml:lang", "xml:space"],
                text: ["class", "dx", "dy", "externalResourcesRequired", "id", "lengthAdjust", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "textLength", "transform", "x", "xml:base", "xml:lang", "xml:space", "y"],
                textPath: ["class", "externalResourcesRequired", "id", "lengthAdjust", "method", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "spacing", "startOffset", "style", "systemLanguage", "textLength", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space"],
                title: ["class", "id", "style", "xml:base", "xml:lang", "xml:space"],
                tref: ["class", "dx", "dy", "externalResourcesRequired", "id", "lengthAdjust", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "textLength", "x", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
                tspan: ["class", "dx", "dy", "externalResourcesRequired", "id", "lengthAdjust", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "rotate", "style", "systemLanguage", "textLength", "x", "xml:base", "xml:lang", "xml:space", "y"],
                use: ["class", "externalResourcesRequired", "height", "id", "onactivate", "onclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "requiredExtensions", "requiredFeatures", "style", "systemLanguage", "transform", "width", "x", "xlink:actuate", "xlink:arcrole", "xlink:href", "xlink:role", "xlink:show", "xlink:title", "xlink:type", "xml:base", "xml:lang", "xml:space", "y"],
                view: ["externalResourcesRequired", "id", "preserveAspectRatio", "viewBox", "viewTarget", "xml:base", "xml:lang", "xml:space", "zoomAndPan"],
                vkern: ["g1", "g2", "id", "k", "u1", "u2", "xml:base", "xml:lang", "xml:space"]
            }, or = {
                a: !0,
                altGlyph: !0,
                animate: !0,
                animateColor: !0,
                circle: !0,
                clipPath: !0,
                defs: !0,
                ellipse: !0,
                feBlend: !0,
                feColorMatrix: !0,
                feComponentTransfer: !0,
                feComposite: !0,
                feConvolveMatrix: !0,
                feDiffuseLighting: !0,
                feDisplacementMap: !0,
                feFlood: !0,
                feGaussianBlur: !0,
                feImage: !0,
                feMerge: !0,
                feMorphology: !0,
                feOffset: !0,
                feSpecularLighting: !0,
                feTile: !0,
                feTurbulence: !0,
                filter: !0,
                font: !0,
                foreignObject: !0,
                g: !0,
                glyph: !0,
                glyphRef: !0,
                image: !0,
                line: !0,
                linearGradient: !0,
                marker: !0,
                mask: !0,
                "missing-glyph": !0,
                path: !0,
                pattern: !0,
                polygon: !0,
                polyline: !0,
                radialGradient: !0,
                rect: !0,
                stop: !0,
                svg: !0,
                switch: !0,
                symbol: !0,
                text: !0,
                textPath: !0,
                tref: !0,
                tspan: !0,
                use: !0
            }, sr = {
                "alignment-baseline": !0,
                "baseline-shift": !0,
                "clip-path": !0,
                "clip-rule": !0,
                clip: !0,
                "color-interpolation-filters": !0,
                "color-interpolation": !0,
                "color-profile": !0,
                "color-rendering": !0,
                color: !0,
                cursor: !0,
                direction: !0,
                display: !0,
                "dominant-baseline": !0,
                "enable-background": !0,
                "fill-opacity": !0,
                "fill-rule": !0,
                fill: !0,
                filter: !0,
                "flood-color": !0,
                "flood-opacity": !0,
                "font-family": !0,
                "font-size-adjust": !0,
                "font-size": !0,
                "font-stretch": !0,
                "font-style": !0,
                "font-variant": !0,
                "font-weight": !0,
                "glyph-orientation-horizontal": !0,
                "glyph-orientation-vertical": !0,
                "image-rendering": !0,
                kerning: !0,
                "letter-spacing": !0,
                "lighting-color": !0,
                "marker-end": !0,
                "marker-mid": !0,
                "marker-start": !0,
                mask: !0,
                opacity: !0,
                overflow: !0,
                "pointer-events": !0,
                "shape-rendering": !0,
                "stop-color": !0,
                "stop-opacity": !0,
                "stroke-dasharray": !0,
                "stroke-dashoffset": !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
                "stroke-miterlimit": !0,
                "stroke-opacity": !0,
                "stroke-width": !0,
                stroke: !0,
                "text-anchor": !0,
                "text-decoration": !0,
                "text-rendering": !0,
                "unicode-bidi": !0,
                visibility: !0,
                "word-spacing": !0,
                "writing-mode": !0
            };
            var e = function(e) {
                var t = n.DOM.createElement("div");
                return t.innerHTML = e, t.firstChild
            };
            ar = function() {
                function t() {
                    "altglyph" === e("<svg><altGlyph /></svg>").firstElementChild.nodeName && ur.altGlyph && (ur.altglyph = ur.altGlyph, delete ur.altGlyph, ur.altglyphdef = ur.altGlyphDef, delete ur.altGlyphDef, ur.altglyphitem = ur.altGlyphItem, delete ur.altGlyphItem, ur.glyphref = ur.glyphRef, delete ur.glyphRef)
                }
                return t.prototype.isStandardSvgAttribute = function(e, t) {
                    return lr[e] && cr[t] || ur[e] && -1 !== ur[e].indexOf(t)
                }, t
            }()
        }();
        var ur = e.elements = ir,
            lr = e.presentationElements = or,
            cr = e.presentationAttributes = sr,
            hr = e.SVGAnalyzer = ar || function() {
                function e() {}
                return e.prototype.isStandardSvgAttribute = function() {
                    return !1
                }, e
            }(),
            dr = e.ObserverLocator = (Re = Me = function() {
                function e(e, t, n, r, i) {
                    this.taskQueue = e, this.eventManager = t, this.dirtyChecker = n, this.svgAnalyzer = r, this.parser = i, this.adapters = [], this.logger = Le.getLogger("observer-locator")
                }
                return e.prototype.getObserver = function(e, t) {
                    var n = e.__observers__,
                        r = void 0;
                    return n && t in n ? n[t] : (r = this.createPropertyObserver(e, t), r.doNotCache || (void 0 === n && (n = this.getOrCreateObserversLookup(e)), n[t] = r), r)
                }, e.prototype.getOrCreateObserversLookup = function(e) {
                    return e.__observers__ || this.createObserversLookup(e)
                }, e.prototype.createObserversLookup = function(e) {
                    var t = {};
                    return Reflect.defineProperty(e, "__observers__", {
                        enumerable: !1,
                        configurable: !1,
                        writable: !1,
                        value: t
                    }) || this.logger.warn("Cannot add observers to object", e), t
                }, e.prototype.addAdapter = function(e) {
                    this.adapters.push(e)
                }, e.prototype.getAdapterObserver = function(e, t, n) {
                    for (var r = 0, i = this.adapters.length; r < i; r++) {
                        var o = this.adapters[r],
                            s = o.getObserver(e, t, n);
                        if (s) return s
                    }
                    return null
                }, e.prototype.createPropertyObserver = function(e, t) {
                    var r = void 0,
                        i = void 0,
                        o = void 0;
                    if (!(e instanceof Object)) return new Gn(e, t);
                    if (e instanceof n.DOM.Element) {
                        if ("class" === t) return new nr(e);
                        if ("style" === t || "css" === t) return new Xn(e, t);
                        if (i = this.eventManager.getElementHandler(e, t), "value" === t && "select" === e.tagName.toLowerCase()) return new tr(e, i, this);
                        if ("checked" === t && "input" === e.tagName.toLowerCase()) return new er(e, i, this);
                        if (i) return new Jn(e, t, i);
                        if (o = /^xlink:(.+)$/.exec(t)) return new Qn(e, t, o[1]);
                        if ("role" === t && (e instanceof n.DOM.Element || e instanceof n.DOM.SVGElement) || /^\w+:|^data-|^aria-/.test(t) || e instanceof n.DOM.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(e.nodeName, t)) return new Kn(e, t)
                    }
                    if (r = Object.getPropertyDescriptor(e, t), ne(r)) return oe(e, t, r, this);
                    if (r) {
                        var s = r.get || r.set;
                        if (s) {
                            if (s.getObserver) return s.getObserver(e);
                            var a = this.getAdapterObserver(e, t, r);
                            return a || new Un(this.dirtyChecker, e, t)
                        }
                    }
                    return e instanceof Array ? "length" === t ? this.getArrayObserver(e).getLengthObserver() : new Un(this.dirtyChecker, e, t) : e instanceof Map ? "size" === t ? this.getMapObserver(e).getLengthObserver() : new Un(this.dirtyChecker, e, t) : e instanceof Set ? "size" === t ? this.getSetObserver(e).getLengthObserver() : new Un(this.dirtyChecker, e, t) : new $n(this.taskQueue, e, t)
                }, e.prototype.getAccessor = function(e, t) {
                    if (e instanceof n.DOM.Element) {
                        if ("class" === t || "style" === t || "css" === t || "value" === t && ("input" === e.tagName.toLowerCase() || "select" === e.tagName.toLowerCase()) || "checked" === t && "input" === e.tagName.toLowerCase() || "model" === t && "input" === e.tagName.toLowerCase() || /^xlink:.+$/.exec(t)) return this.getObserver(e, t);
                        if (/^\w+:|^data-|^aria-/.test(t) || e instanceof n.DOM.SVGElement && this.svgAnalyzer.isStandardSvgAttribute(e.nodeName, t)) return Zn
                    }
                    return Wn
                }, e.prototype.getArrayObserver = function(e) {
                    return F(this.taskQueue, e)
                }, e.prototype.getMapObserver = function(e) {
                    return Z(this.taskQueue, e)
                }, e.prototype.getSetObserver = function(e) {
                    return le(this.taskQueue, e)
                }, e
            }(), Me.inject = [r.TaskQueue, zn, Hn, hr, Ln], Re),
            pr = (e.ObjectObservationAdapter = function() {
                function e() {}
                return e.prototype.getObserver = function(e, t, n) {
                    throw new Error("BindingAdapters must implement getObserver(object, propertyName).")
                }, e
            }(), e.BindingExpression = function() {
                function e(e, t, n, r, i, o) {
                    this.observerLocator = e, this.targetProperty = t, this.sourceExpression = n, this.mode = r, this.lookupFunctions = i, this.attribute = o, this.discrete = !1
                }
                return e.prototype.createBinding = function(e) {
                    return new fr(this.observerLocator, this.sourceExpression, e, this.targetProperty, this.mode, this.lookupFunctions)
                }, e
            }()),
            fr = e.Binding = (Ae = v())(Pe = function() {
                function e(e, t, n, r, i, o) {
                    this.observerLocator = e, this.sourceExpression = t, this.target = n, this.targetProperty = r, this.mode = i, this.lookupFunctions = o
                }
                return e.prototype.updateTarget = function(e) {
                    this.targetObserver.setValue(e, this.target, this.targetProperty)
                }, e.prototype.updateSource = function(e) {
                    this.sourceExpression.assign(this.source, e, this.lookupFunctions)
                }, e.prototype.call = function(e, t, n) {
                    if (this.isBound) {
                        if (e === Ie) return n = this.targetObserver.getValue(this.target, this.targetProperty), t = this.sourceExpression.evaluate(this.source, this.lookupFunctions), t !== n && this.updateTarget(t), void(this.mode !== Pt.oneTime && (this._version++, this.sourceExpression.connect(this, this.source), this.unobserve(!1)));
                        if ("Binding:target" === e) return void(t !== this.sourceExpression.evaluate(this.source, this.lookupFunctions) && this.updateSource(t));
                        throw new Error("Unexpected call context " + e)
                    }
                }, e.prototype.bind = function(e) {
                    if (this.isBound) {
                        if (this.source === e) return;
                        this.unbind()
                    }
                    this.isBound = !0, this.source = e, this.sourceExpression.bind && this.sourceExpression.bind(this, e, this.lookupFunctions);
                    var t = this.mode;
                    if (!this.targetObserver) {
                        var n = t === Pt.twoWay ? "getObserver" : "getAccessor";
                        this.targetObserver = this.observerLocator[n](this.target, this.targetProperty)
                    }
                    "bind" in this.targetObserver && this.targetObserver.bind();
                    var r = this.sourceExpression.evaluate(e, this.lookupFunctions);
                    this.updateTarget(r), t === Pt.oneWay ? g(this) : t === Pt.twoWay && (this.sourceExpression.connect(this, e), this.targetObserver.subscribe("Binding:target", this))
                }, e.prototype.unbind = function() {
                    this.isBound && (this.isBound = !1, this.sourceExpression.unbind && this.sourceExpression.unbind(this, this.source), this.source = null, "unbind" in this.targetObserver && this.targetObserver.unbind(), this.targetObserver.unsubscribe && this.targetObserver.unsubscribe("Binding:target", this), this.unobserve(!0))
                }, e.prototype.connect = function(e) {
                    if (this.isBound) {
                        if (e) {
                            var t = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
                            this.updateTarget(t)
                        }
                        this.sourceExpression.connect(this, this.source)
                    }
                }, e
            }()) || Pe,
            vr = (e.CallExpression = function() {
                function e(e, t, n, r) {
                    this.observerLocator = e, this.targetProperty = t, this.sourceExpression = n, this.lookupFunctions = r
                }
                return e.prototype.createBinding = function(e) {
                    return new vr(this.observerLocator, this.sourceExpression, e, this.targetProperty, this.lookupFunctions)
                }, e
            }(), e.Call = function() {
                function e(e, t, n, r, i) {
                    this.sourceExpression = t, this.target = n, this.targetProperty = e.getObserver(n, r), this.lookupFunctions = i
                }
                return e.prototype.callSource = function(e) {
                    var t = this.source.overrideContext;
                    Object.assign(t, e), t.$event = e;
                    var n = this.sourceExpression.evaluate(this.source, this.lookupFunctions, !0);
                    delete t.$event;
                    for (var r in e) delete t[r];
                    return n
                }, e.prototype.bind = function(e) {
                    var t = this;
                    if (this.isBound) {
                        if (this.source === e) return;
                        this.unbind()
                    }
                    this.isBound = !0, this.source = e, this.sourceExpression.bind && this.sourceExpression.bind(this, e, this.lookupFunctions), this.targetProperty.setValue(function(e) {
                        return t.callSource(e)
                    })
                }, e.prototype.unbind = function() {
                    this.isBound && (this.isBound = !1, this.sourceExpression.unbind && this.sourceExpression.unbind(this, this.source), this.source = null, this.targetProperty.setValue(null))
                }, e
            }()),
            mr = e.ValueConverterResource = function() {
                function e(e) {
                    this.name = e
                }
                return e.convention = function(t) {
                    if (t.endsWith("ValueConverter")) return new e(a(t.substring(0, t.length - 14)))
                }, e.prototype.initialize = function(e, t) {
                    this.instance = e.get(t)
                }, e.prototype.register = function(e, t) {
                    e.registerValueConverter(t || this.name, this.instance)
                }, e.prototype.load = function(e, t) {}, e
            }(),
            gr = e.BindingBehaviorResource = function() {
                function e(e) {
                    this.name = e
                }
                return e.convention = function(t) {
                    if (t.endsWith("BindingBehavior")) return new e(a(t.substring(0, t.length - 15)))
                }, e.prototype.initialize = function(e, t) {
                    this.instance = e.get(t)
                }, e.prototype.register = function(e, t) {
                    e.registerBindingBehavior(t || this.name, this.instance)
                }, e.prototype.load = function(e, t) {}, e
            }(),
            yr = (e.ListenerExpression = function() {
                function e(e, t, n, r, i, o) {
                    this.eventManager = e, this.targetEvent = t, this.sourceExpression = n, this.delegationStrategy = r, this.discrete = !0, this.preventDefault = i, this.lookupFunctions = o
                }
                return e.prototype.createBinding = function(e) {
                    return new yr(this.eventManager, this.targetEvent, this.delegationStrategy, this.sourceExpression, e, this.preventDefault, this.lookupFunctions)
                }, e
            }(), e.Listener = function() {
                function e(e, t, n, r, i, o, s) {
                    this.eventManager = e, this.targetEvent = t, this.delegationStrategy = n, this.sourceExpression = r, this.target = i, this.preventDefault = o, this.lookupFunctions = s
                }
                return e.prototype.callSource = function(e) {
                    var t = this.source.overrideContext;
                    t.$event = e;
                    var n = this.sourceExpression.evaluate(this.source, this.lookupFunctions, !0);
                    return delete t.$event, !0 !== n && this.preventDefault && e.preventDefault(), n
                }, e.prototype.bind = function(e) {
                    var t = this;
                    if (this.isBound) {
                        if (this.source === e) return;
                        this.unbind()
                    }
                    this.isBound = !0, this.source = e, this.sourceExpression.bind && this.sourceExpression.bind(this, e, this.lookupFunctions), this._disposeListener = this.eventManager.addEventListener(this.target, this.targetEvent, function(e) {
                        return t.callSource(e)
                    }, this.delegationStrategy)
                }, e.prototype.unbind = function() {
                    this.isBound && (this.isBound = !1, this.sourceExpression.unbind && this.sourceExpression.unbind(this, this.source), this.source = null, this._disposeListener(), this._disposeListener = null)
                }, e
            }()),
            br = (e.NameExpression = function() {
                function e(e, t, n) {
                    this.sourceExpression = e, this.apiName = t, this.lookupFunctions = n, this.discrete = !0
                }
                return e.prototype.createBinding = function(t) {
                    return new br(this.sourceExpression, e.locateAPI(t, this.apiName), this.lookupFunctions)
                }, e.locateAPI = function(e, t) {
                    switch (t) {
                        case "element":
                            return e;
                        case "controller":
                            return ue(e).controller;
                        case "view-model":
                            return ue(e).controller.viewModel;
                        case "view":
                            return ue(e).controller.view;
                        default:
                            var n = ue(e)[t];
                            if (void 0 === n) throw new Error('Attempted to reference "' + t + "\", but it was not found amongst the target's API.");
                            return n.viewModel
                    }
                }, e
            }(), function() {
                function e(e, t, n) {
                    this.sourceExpression = e, this.target = t, this.lookupFunctions = n
                }
                return e.prototype.bind = function(e) {
                    if (this.isBound) {
                        if (this.source === e) return;
                        this.unbind()
                    }
                    this.isBound = !0, this.source = e, this.sourceExpression.bind && this.sourceExpression.bind(this, e, this.lookupFunctions), this.sourceExpression.assign(this.source, this.target, this.lookupFunctions)
                }, e.prototype.unbind = function() {
                    this.isBound && (this.isBound = !1, this.sourceExpression.evaluate(this.source, this.lookupFunctions) === this.target && this.sourceExpression.assign(this.source, null, this.lookupFunctions), this.sourceExpression.unbind && this.sourceExpression.unbind(this, this.source), this.source = null)
                }, e
            }()),
            wr = {
                bindingBehaviors: function(e) {
                    return null
                },
                valueConverters: function(e) {
                    return null
                }
            },
            _r = (e.BindingEngine = (je = Te = function() {
                function e(e, t) {
                    this.observerLocator = e, this.parser = t
                }
                return e.prototype.createBindingExpression = function(e, t) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? Pt.oneWay : arguments[2],
                        r = arguments.length <= 3 || void 0 === arguments[3] ? wr : arguments[3];
                    return new pr(this.observerLocator, e, this.parser.parse(t), n, r)
                }, e.prototype.propertyObserver = function(e, t) {
                    var n = this;
                    return {
                        subscribe: function(r) {
                            var i = n.observerLocator.getObserver(e, t);
                            return i.subscribe(r), {
                                dispose: function() {
                                    return i.unsubscribe(r)
                                }
                            }
                        }
                    }
                }, e.prototype.collectionObserver = function(e) {
                    var t = this;
                    return {
                        subscribe: function(n) {
                            var r = void 0;
                            if (e instanceof Array) r = t.observerLocator.getArrayObserver(e);
                            else if (e instanceof Map) r = t.observerLocator.getMapObserver(e);
                            else {
                                if (!(e instanceof Set)) throw new Error("collection must be an instance of Array, Map or Set.");
                                r = t.observerLocator.getSetObserver(e)
                            }
                            return r.subscribe(n), {
                                dispose: function() {
                                    return r.unsubscribe(n)
                                }
                            }
                        }
                    }
                }, e.prototype.expressionObserver = function(e, t) {
                    var n = {
                        bindingContext: e,
                        overrideContext: u(e)
                    };
                    return new Xe(n, this.parser.parse(t), this.observerLocator, wr)
                }, e.prototype.parseExpression = function(e) {
                    return this.parser.parse(e)
                }, e.prototype.registerAdapter = function(e) {
                    this.observerLocator.addAdapter(e)
                }, e
            }(), Te.inject = [dr, Ln], je), Set.prototype);
        e.getSetObserver = le;
        var xr = function(e) {
            function t(t, n) {
                return o(this, e.call(this, t, n))
            }
            return s(t, e), t.for = function(e, n) {
                return "__set_observer__" in n || Reflect.defineProperty(n, "__set_observer__", {
                    value: t.create(e, n),
                    enumerable: !1,
                    configurable: !1
                }), n.__set_observer__
            }, t.create = function(e, n) {
                var r = new t(e, n),
                    i = _r;
                return i.add === n.add && i.delete === n.delete && i.clear === n.clear || (i = {
                    add: n.add,
                    delete: n.delete,
                    clear: n.clear
                }), n.add = function() {
                    var e = n.size,
                        t = i.add.apply(n, arguments);
                    return n.size === e || r.addChangeRecord({
                        type: "add",
                        object: n,
                        value: Array.from(n).pop()
                    }), t
                }, n.delete = function() {
                    var e = n.has(arguments[0]),
                        t = i.delete.apply(n, arguments);
                    return e && r.addChangeRecord({
                        type: "delete",
                        object: n,
                        value: arguments[0]
                    }), t
                }, n.clear = function() {
                    var e = i.clear.apply(n, arguments);
                    return r.addChangeRecord({
                        type: "clear",
                        object: n
                    }), e
                }, r
            }, t
        }(et)
    }), define("aurelia-bootstrapper", ["exports", "aurelia-pal", "aurelia-pal-browser", "aurelia-polyfills"], function(e, t, n) {
        "use strict";

        function r(e) {
            return new Promise(function(t, n) {
                h ? t(e(h)) : c.push(function() {
                    try {
                        t(e(h))
                    } catch (e) {
                        n(e)
                    }
                })
            })
        }

        function i(e) {
            return new Promise(function(t, n) {
                function r() {
                    e.document.removeEventListener("DOMContentLoaded", r), e.removeEventListener("load", r), t(e.document)
                }
                "complete" === e.document.readyState ? t(e.document) : (e.document.addEventListener("DOMContentLoaded", r), e.addEventListener("load", r))
            })
        }

        function o() {
            return t.PLATFORM.Loader ? Promise.resolve(new t.PLATFORM.Loader) : window.System && "function" == typeof window.System.import ? System.normalize("aurelia-bootstrapper").then(function(e) {
                return System.normalize("aurelia-loader-default", e)
            }).then(function(e) {
                return System.import(e).then(function(e) {
                    return new e.DefaultLoader
                })
            }) : "function" == typeof window.require ? new Promise(function(e, t) {
                return require(["aurelia-loader-default"], function(t) {
                    return e(new t.DefaultLoader)
                }, t)
            }) : Promise.reject("No PLATFORM.Loader is defined and there is neither a System API (ES6) or a Require API (AMD) globally available to load your app.")
        }

        function s(e) {
            return e.normalize("aurelia-bootstrapper").then(function(t) {
                return e.normalize("aurelia-framework", t).then(function(n) {
                    return e.map("aurelia-framework", n), Promise.all([e.normalize("aurelia-dependency-injection", n).then(function(t) {
                        return e.map("aurelia-dependency-injection", t)
                    }), e.normalize("aurelia-router", t).then(function(t) {
                        return e.map("aurelia-router", t)
                    }), e.normalize("aurelia-logging-console", t).then(function(t) {
                        return e.map("aurelia-logging-console", t)
                    })]).then(function() {
                        return e.loadModule(n).then(function(e) {
                            return d = e.Aurelia
                        })
                    })
                })
            })
        }

        function a(e, t) {
            return u(e, t, t.getAttribute("aurelia-app") || t.getAttribute("data-aurelia-app"))
        }

        function u(e, t, n) {
            var r = new d(e);
            return r.host = t, r.configModuleId = n || null, n ? e.loadModule(n).then(function(e) {
                if (!e.configure) throw new Error("Cannot initialize module '" + n + "' without a configure function.");
                e.configure(r)
            }) : (r.use.standardConfiguration().developmentLogging(), r.start().then(function() {
                return r.setRoot()
            }))
        }

        function l(e) {
            return r(function(t) {
                var n = new d(t);
                return e(n)
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.bootstrap = l;
        var c = [],
            h = null,
            d = null;
        ! function() {
            i(window).then(function(e) {
                (0, n.initialize)();
                var t = e.querySelectorAll("[aurelia-app],[data-aurelia-app]");
                return o().then(function(e) {
                    return s(e).then(function() {
                        for (var n = 0, r = t.length; n < r; ++n) a(e, t[n]).catch(console.error.bind(console));
                        h = e;
                        for (var i = 0, o = c.length; i < o; ++i) c[i]();
                        c = null
                    })
                })
            })
        }()
    }), define("aurelia-dependency-injection", ["exports", "aurelia-metadata", "aurelia-pal"], function(e, t, n) {
        "use strict";

        function r(e, n) {
            var r = e.inject;
            if ("function" == typeof r) throw new Error("Decorator " + n + ' cannot be used with "inject()".  Please use an array instead.');
            return r || (r = t.metadata.getOwn(t.metadata.paramTypes, e).slice(), e.inject = r), r
        }

        function i(e) {
            return function(t, n, i) {
                r(t, "lazy")[i] = N.of(e)
            }
        }

        function o(e) {
            return function(t, n, i) {
                r(t, "all")[i] = D.of(e)
            }
        }

        function s() {
            var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0],
                t = function(e) {
                    return function(t, n, i) {
                        var o = r(t, "optional");
                        o[i] = I.of(o[i], e)
                    }
                };
            return t("boolean" == typeof e ? e : !0)
        }

        function a(e, t, n) {
            var i = r(e, "parent");
            i[n] = V.of(i[n])
        }

        function u(e, t) {
            return function(n, i, o) {
                var s = r(n, "factory"),
                    a = q.of(e);
                s[o] = t ? a.as(t) : a
            }
        }

        function l(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            var o = function(e) {
                return function(t, i, o) {
                    var s = r(t, "newInstance");
                    s[o] = z.of.apply(z, [s[o]].concat(n)), e && s[o].as(e)
                }
            };
            return arguments.length >= 1 ? o(e) : o()
        }

        function c(e) {
            return function(n) {
                t.metadata.define(t.metadata.invoker, e, n)
            }
        }

        function h(e) {
            var n = function(e) {
                t.metadata.define(t.metadata.invoker, H.instance, e)
            };
            return e ? n(e) : n
        }

        function d(e) {
            return function(n) {
                t.metadata.define(t.metadata.registration, e, n)
            }
        }

        function p(e) {
            return d(new U(e))
        }

        function f(e) {
            var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
            return d(new Y(e, t))
        }

        function v(e) {
            if (null === e || void 0 === e) throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")
        }

        function m(e, t, n, r) {
            for (var i = n.length, o = new Array(i); i--;) o[i] = e.get(n[i]);
            return void 0 !== r && (o = o.concat(r)), Reflect.construct(t, o)
        }

        function g(e) {
            return e.hasOwnProperty("inject") ? "function" == typeof e.inject ? e.inject() : e.inject : []
        }

        function y(e) {
            var n = function(e) {
                var n = e.inject ? e.inject.slice() : null,
                    r = t.metadata.getOwn(t.metadata.paramTypes, e) || W;
                if (n) {
                    for (var i = 0; i < r.length; i++)
                        if (n[i] && n[i] !== r[i]) {
                            var o = n.indexOf(r[i]);
                            o > -1 && n.splice(o, 1), n.splice(o > -1 && o < i ? i - 1 : i, 0, r[i])
                        } else n[i] || (n[i] = r[i]);
                    e.inject = n
                } else e.inject = r
            };
            return e ? n(e) : n
        }

        function b() {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return function(e, r, i) {
                if ("number" == typeof i && 1 === n.length) {
                    var o = e.inject;
                    if ("function" == typeof o) throw new Error('Decorator inject cannot be used with "inject()".  Please use an array instead.');
                    return o || (o = t.metadata.getOwn(t.metadata.paramTypes, e).slice(), e.inject = o), void(o[i] = n[0])
                }
                if (i) {
                    i.value.inject = n
                } else e.inject = n
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Container = e.InvocationHandler = e._emptyParameters = e.SingletonRegistration = e.TransientRegistration = e.FactoryInvoker = e.NewInstance = e.Factory = e.StrategyResolver = e.Parent = e.Optional = e.All = e.Lazy = e.resolver = void 0, e.getDecoratorDependencies = r, e.lazy = i, e.all = o, e.optional = s, e.parent = a, e.factory = u, e.newInstance = l, e.invoker = c, e.invokeAsFactory = h, e.registration = d, e.transient = p, e.singleton = f, e.autoinject = y, e.inject = b;
        var w, _, x, S, C, k, E, O, M, R, A, P, T, j, L, F = e.resolver = t.protocol.create("aurelia:resolver", function(e) {
                return "function" == typeof e.get || "Resolvers must implement: get(container: Container, key: any): any"
            }),
            N = e.Lazy = (w = F())(_ = function() {
                function e(e) {
                    this._key = e
                }
                return e.prototype.get = function(e) {
                    var t = this;
                    return function() {
                        return e.get(t._key)
                    }
                }, e.of = function(t) {
                    return new e(t)
                }, e
            }()) || _,
            D = e.All = (x = F())(S = function() {
                function e(e) {
                    this._key = e
                }
                return e.prototype.get = function(e) {
                    return e.getAll(this._key)
                }, e.of = function(t) {
                    return new e(t)
                }, e
            }()) || S,
            I = e.Optional = (C = F())(k = function() {
                function e(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
                    this._key = e, this._checkParent = t
                }
                return e.prototype.get = function(e) {
                    return e.hasResolver(this._key, this._checkParent) ? e.get(this._key) : null
                }, e.of = function(t) {
                    return new e(t, arguments.length <= 1 || void 0 === arguments[1] || arguments[1])
                }, e
            }()) || k,
            V = e.Parent = (E = F())(O = function() {
                function e(e) {
                    this._key = e
                }
                return e.prototype.get = function(e) {
                    return e.parent ? e.parent.get(this._key) : null
                }, e.of = function(t) {
                    return new e(t)
                }, e
            }()) || O,
            B = e.StrategyResolver = (M = F())(R = function() {
                function e(e, t) {
                    this.strategy = e, this.state = t
                }
                return e.prototype.get = function(e, t) {
                    switch (this.strategy) {
                        case 0:
                            return this.state;
                        case 1:
                            var n = e.invoke(this.state);
                            return this.state = n, this.strategy = 0, n;
                        case 2:
                            return e.invoke(this.state);
                        case 3:
                            return this.state(e, t, this);
                        case 4:
                            return this.state[0].get(e, t);
                        case 5:
                            return e.get(this.state);
                        default:
                            throw new Error("Invalid strategy: " + this.strategy)
                    }
                }, e
            }()) || R,
            q = e.Factory = (A = F())(P = function() {
                function e(e) {
                    this._key = e
                }
                return e.prototype.get = function(e) {
                    var t = this;
                    return function() {
                        for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.invoke(t._key, r)
                    }
                }, e.of = function(t) {
                    return new e(t)
                }, e
            }()) || P,
            z = e.NewInstance = (T = F())(j = function() {
                function e(e) {
                    this.key = e, this.asKey = e;
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    this.dynamicDependencies = n
                }
                return e.prototype.get = function(e) {
                    var t = this.dynamicDependencies.length > 0 ? this.dynamicDependencies.map(function(t) {
                            return t["protocol:aurelia:resolver"] ? t.get(e) : e.get(t)
                        }) : void 0,
                        n = e.invoke(this.key, t);
                    return e.registerInstance(this.asKey, n), n
                }, e.prototype.as = function(e) {
                    return this.asKey = e, this
                }, e.of = function(t) {
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    return new(Function.prototype.bind.apply(e, [null].concat([t], r)))
                }, e
            }()) || j,
            H = e.FactoryInvoker = function() {
                function e() {}
                return e.prototype.invoke = function(e, t, n) {
                    for (var r = n.length, i = new Array(r); r--;) i[r] = e.get(n[r]);
                    return t.apply(void 0, i)
                }, e.prototype.invokeWithDynamicDependencies = function(e, t, n, r) {
                    for (var i = n.length, o = new Array(i); i--;) o[i] = e.get(n[i]);
                    return void 0 !== r && (o = o.concat(r)), t.apply(void 0, o)
                }, e
            }();
        H.instance = new H;
        var U = e.TransientRegistration = function() {
                function e(e) {
                    this._key = e
                }
                return e.prototype.registerResolver = function(e, t, n) {
                    var r = e.getResolver(this._key || t);
                    return void 0 === r ? e.registerTransient(this._key || t, n) : r
                }, e
            }(),
            Y = e.SingletonRegistration = function() {
                function e(e) {
                    var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                    "boolean" == typeof e ? this._registerInChild = e : (this._key = e, this._registerInChild = t)
                }
                return e.prototype.registerResolver = function(e, t, n) {
                    var r = this._registerInChild ? e : e.root,
                        i = r.getResolver(this._key || t);
                    return void 0 === i ? r.registerSingleton(this._key || t, n) : i
                }, e
            }(),
            W = e._emptyParameters = Object.freeze([]);
        t.metadata.registration = "aurelia:registration", t.metadata.invoker = "aurelia:invoker";
        var G = F.decorates,
            $ = e.InvocationHandler = function() {
                function e(e, t, n) {
                    this.fn = e, this.invoker = t, this.dependencies = n
                }
                return e.prototype.invoke = function(e, t) {
                    return void 0 !== t ? this.invoker.invokeWithDynamicDependencies(e, this.fn, this.dependencies, t) : this.invoker.invoke(e, this.fn, this.dependencies)
                }, e
            }(),
            Q = (L = {}, L[0] = {
                invoke: function(e, t) {
                    return new t
                },
                invokeWithDynamicDependencies: m
            }, L[1] = {
                invoke: function(e, t, n) {
                    return new t(e.get(n[0]))
                },
                invokeWithDynamicDependencies: m
            }, L[2] = {
                invoke: function(e, t, n) {
                    return new t(e.get(n[0]), e.get(n[1]))
                },
                invokeWithDynamicDependencies: m
            }, L[3] = {
                invoke: function(e, t, n) {
                    return new t(e.get(n[0]), e.get(n[1]), e.get(n[2]))
                },
                invokeWithDynamicDependencies: m
            }, L[4] = {
                invoke: function(e, t, n) {
                    return new t(e.get(n[0]), e.get(n[1]), e.get(n[2]), e.get(n[3]))
                },
                invokeWithDynamicDependencies: m
            }, L[5] = {
                invoke: function(e, t, n) {
                    return new t(e.get(n[0]), e.get(n[1]), e.get(n[2]), e.get(n[3]), e.get(n[4]))
                },
                invokeWithDynamicDependencies: m
            }, L.fallback = {
                invoke: m,
                invokeWithDynamicDependencies: m
            }, L);
        e.Container = function() {
            function e(e) {
                void 0 === e && (e = {}), this._configuration = e, this._onHandlerCreated = e.onHandlerCreated, this._handlers = e.handlers || (e.handlers = new Map), this._resolvers = new Map, this.root = this, this.parent = null
            }
            return e.prototype.makeGlobal = function() {
                return e.instance = this, this
            }, e.prototype.setHandlerCreatedCallback = function(e) {
                this._onHandlerCreated = e, this._configuration.onHandlerCreated = e
            }, e.prototype.registerInstance = function(e, t) {
                return this.registerResolver(e, new B(0, void 0 === t ? e : t))
            }, e.prototype.registerSingleton = function(e, t) {
                return this.registerResolver(e, new B(1, void 0 === t ? e : t))
            }, e.prototype.registerTransient = function(e, t) {
                return this.registerResolver(e, new B(2, void 0 === t ? e : t))
            }, e.prototype.registerHandler = function(e, t) {
                return this.registerResolver(e, new B(3, t))
            }, e.prototype.registerAlias = function(e, t) {
                return this.registerResolver(t, new B(5, e))
            }, e.prototype.registerResolver = function(e, t) {
                v(e);
                var n = this._resolvers,
                    r = n.get(e);
                return void 0 === r ? n.set(e, t) : 4 === r.strategy ? r.state.push(t) : n.set(e, new B(4, [r, t])), t
            }, e.prototype.autoRegister = function(e, n) {
                if ("function" == typeof(n = void 0 === n ? e : n)) {
                    var r = t.metadata.get(t.metadata.registration, n);
                    return void 0 === r ? this.registerResolver(e, new B(1, n)) : r.registerResolver(this, e, n)
                }
                return this.registerResolver(e, new B(0, n))
            }, e.prototype.autoRegisterAll = function(e) {
                for (var t = e.length; t--;) this.autoRegister(e[t])
            }, e.prototype.unregister = function(e) {
                this._resolvers.delete(e)
            }, e.prototype.hasResolver = function(e) {
                var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                return v(e), this._resolvers.has(e) || t && null !== this.parent && this.parent.hasResolver(e, t)
            }, e.prototype.getResolver = function(e) {
                return this._resolvers.get(e)
            }, e.prototype.get = function(n) {
                if (v(n), n === e) return this;
                if (G(n)) return n.get(this, n);
                var r = this._resolvers.get(n);
                if (void 0 === r) {
                    if (null === this.parent) return this.autoRegister(n).get(this, n);
                    var i = t.metadata.get(t.metadata.registration, n);
                    return void 0 === i ? this.parent._get(n) : i.registerResolver(this, n, n).get(this, n)
                }
                return r.get(this, n)
            }, e.prototype._get = function(e) {
                var t = this._resolvers.get(e);
                return void 0 === t ? null === this.parent ? this.autoRegister(e).get(this, e) : this.parent._get(e) : t.get(this, e)
            }, e.prototype.getAll = function(e) {
                v(e);
                var t = this._resolvers.get(e);
                if (void 0 === t) return null === this.parent ? W : this.parent.getAll(e);
                if (4 === t.strategy) {
                    for (var n = t.state, r = n.length, i = new Array(r); r--;) i[r] = n[r].get(this, e);
                    return i
                }
                return [t.get(this, e)]
            }, e.prototype.createChild = function() {
                var t = new e(this._configuration);
                return t.root = this.root, t.parent = this, t
            }, e.prototype.invoke = function(e, t) {
                try {
                    var r = this._handlers.get(e);
                    return void 0 === r && (r = this._createInvocationHandler(e), this._handlers.set(e, r)), r.invoke(this, t)
                } catch (t) {
                    throw new n.AggregateError("Error invoking " + e.name + ". Check the inner error for details.", t, !0)
                }
            }, e.prototype._createInvocationHandler = function(e) {
                var n = void 0;
                if (void 0 === e.inject) n = t.metadata.getOwn(t.metadata.paramTypes, e) || W;
                else {
                    n = [];
                    for (var r = e;
                        "function" == typeof r;) {
                        var i;
                        (i = n).push.apply(i, g(r)), r = Object.getPrototypeOf(r)
                    }
                }
                var o = t.metadata.getOwn(t.metadata.invoker, e) || Q[n.length] || Q.fallback,
                    s = new $(e, o, n);
                return void 0 !== this._onHandlerCreated ? this._onHandlerCreated(s) : s
            }, e
        }()
    }), define("aurelia-event-aggregator", ["exports", "aurelia-logging"], function(e, t) {
        "use strict";

        function n(e, t, n) {
            try {
                e(t, n)
            } catch (e) {
                a.error(e)
            }
        }

        function r(e, t) {
            try {
                e.handle(t)
            } catch (e) {
                a.error(e)
            }
        }

        function i(e) {
            var t = new l;
            return e.subscribeOnce = function(e, n) {
                return t.subscribeOnce(e, n)
            }, e.subscribe = function(e, n) {
                return t.subscribe(e, n)
            }, e.publish = function(e, n) {
                t.publish(e, n)
            }, t
        }

        function o(e) {
            e.instance(l, i(e.aurelia))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.EventAggregator = void 0, e.includeEventsIn = i, e.configure = o;
        var s = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(t),
            a = s.getLogger("event-aggregator"),
            u = function() {
                function e(e, t) {
                    this.messageType = e, this.callback = t
                }
                return e.prototype.handle = function(e) {
                    e instanceof this.messageType && this.callback.call(null, e)
                }, e
            }(),
            l = e.EventAggregator = function() {
                function e() {
                    this.eventLookup = {}, this.messageHandlers = []
                }
                return e.prototype.publish = function(e, t) {
                    var i = void 0,
                        o = void 0;
                    if (!e) throw new Error("Event was invalid.");
                    if ("string" == typeof e) {
                        if (i = this.eventLookup[e])
                            for (i = i.slice(), o = i.length; o--;) n(i[o], t, e)
                    } else
                        for (i = this.messageHandlers.slice(), o = i.length; o--;) r(i[o], e)
                }, e.prototype.subscribe = function(e, t) {
                    var n = void 0,
                        r = void 0;
                    if (!e) throw new Error("Event channel/type was invalid.");
                    return "string" == typeof e ? (n = t, r = this.eventLookup[e] || (this.eventLookup[e] = [])) : (n = new u(e, t), r = this.messageHandlers), r.push(n), {
                        dispose: function() {
                            var e = r.indexOf(n); - 1 !== e && r.splice(e, 1)
                        }
                    }
                }, e.prototype.subscribeOnce = function(e, t) {
                    var n = this.subscribe(e, function(e, r) {
                        return n.dispose(), t(e, r)
                    });
                    return n
                }, e
            }()
    }), define("aurelia-fetch-client", ["exports"], function(e) {
        "use strict";

        function t(e) {
            return new Blob([JSON.stringify(void 0 !== e ? e : {})], {
                type: "application/json"
            })
        }

        function n(e) {
            if (!e.ok) throw e;
            return e
        }

        function r() {
            this.isRequesting = !!++this.activeRequestCount
        }

        function i() {
            this.isRequesting = !!--this.activeRequestCount
        }

        function o(e) {
            var t = i.bind(this);
            return e.then(t, t), e
        }

        function s(e) {
            var t = {};
            for (var n in e || {}) e.hasOwnProperty(n) && (t[n] = "function" == typeof e[n] ? e[n]() : e[n]);
            return t
        }

        function a(e, t) {
            var n = this.defaults || {},
                r = void 0,
                i = void 0,
                o = void 0,
                a = s(n.headers);
            if (Request.prototype.isPrototypeOf(e)) r = e, o = new Headers(r.headers).get("Content-Type");
            else {
                t || (t = {}), i = t.body;
                var c = i ? {
                        body: i
                    } : null,
                    h = Object.assign({}, n, {
                        headers: {}
                    }, t, c);
                o = new Headers(h.headers).get("Content-Type"),
                    r = new Request(u(this.baseUrl, e), h)
            }
            return !o && new Headers(a).has("content-type") && r.headers.set("Content-Type", new Headers(a).get("content-type")), l(r.headers, a), i && Blob.prototype.isPrototypeOf(i) && i.type && r.headers.set("Content-Type", i.type), r
        }

        function u(e, t) {
            return g.test(t) ? t : (e || "") + t
        }

        function l(e, t) {
            for (var n in t || {}) t.hasOwnProperty(n) && !e.has(n) && e.set(n, t[n])
        }

        function c(e, t) {
            return d(e, t, "request", "requestError")
        }

        function h(e, t, n) {
            return d(e, t, "response", "responseError", n)
        }

        function d(e, t, n, r) {
            for (var i = arguments.length, o = Array(i > 4 ? i - 4 : 0), s = 4; s < i; s++) o[s - 4] = arguments[s];
            return (t || []).reduce(function(e, t) {
                var i = t[n],
                    s = t[r];
                return e.then(i && function(e) {
                    return i.call.apply(i, [t, e].concat(o))
                } || p, s && function(e) {
                    return s.call.apply(s, [t, e].concat(o))
                } || f)
            }, Promise.resolve(e))
        }

        function p(e) {
            return e
        }

        function f(e) {
            throw e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.json = t;
        var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            m = e.HttpClientConfiguration = function() {
                function e() {
                    this.baseUrl = "", this.defaults = {}, this.interceptors = []
                }
                return e.prototype.withBaseUrl = function(e) {
                    return this.baseUrl = e, this
                }, e.prototype.withDefaults = function(e) {
                    return this.defaults = e, this
                }, e.prototype.withInterceptor = function(e) {
                    return this.interceptors.push(e), this
                }, e.prototype.useStandardConfiguration = function() {
                    var e = {
                        credentials: "same-origin"
                    };
                    return Object.assign(this.defaults, e, this.defaults), this.rejectErrorResponses()
                }, e.prototype.rejectErrorResponses = function() {
                    return this.withInterceptor({
                        response: n
                    })
                }, e
            }(),
            g = (e.HttpClient = function() {
                function e() {
                    if (this.activeRequestCount = 0, this.isRequesting = !1, this.isConfigured = !1, this.baseUrl = "", this.defaults = null, this.interceptors = [], "undefined" == typeof fetch) throw new Error("HttpClient requires a Fetch API implementation, but the current environment doesn't support it. You may need to load a polyfill such as https://github.com/github/fetch.")
                }
                return e.prototype.configure = function(e) {
                    var t = void 0;
                    if ("object" === (void 0 === e ? "undefined" : v(e))) t = {
                        defaults: e
                    };
                    else {
                        if ("function" != typeof e) throw new Error("invalid config");
                        t = new m, t.baseUrl = this.baseUrl, t.defaults = Object.assign({}, this.defaults), t.interceptors = this.interceptors;
                        var n = e(t);
                        m.prototype.isPrototypeOf(n) && (t = n)
                    }
                    var r = t.defaults;
                    if (r && Headers.prototype.isPrototypeOf(r.headers)) throw new Error("Default headers must be a plain object.");
                    return this.baseUrl = t.baseUrl, this.defaults = r, this.interceptors = t.interceptors || [], this.isConfigured = !0, this
                }, e.prototype.fetch = function(e) {
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }, t
                }(function(e, t) {
                    var n = this;
                    r.call(this);
                    var i = Promise.resolve().then(function() {
                            return a.call(n, e, t, n.defaults)
                        }),
                        s = c(i, this.interceptors).then(function(e) {
                            var t = null;
                            if (Response.prototype.isPrototypeOf(e)) t = e;
                            else {
                                if (!Request.prototype.isPrototypeOf(e)) throw new Error("An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got [" + e + "]");
                                i = Promise.resolve(e), t = fetch(e)
                            }
                            return i.then(function(e) {
                                return h(t, n.interceptors, e)
                            })
                        });
                    return o.call(this, s)
                }), e
            }(), /^([a-z][a-z0-9+\-.]*:)?\/\//i)
    }), define("aurelia-framework", ["exports", "aurelia-dependency-injection", "aurelia-binding", "aurelia-metadata", "aurelia-templating", "aurelia-loader", "aurelia-task-queue", "aurelia-path", "aurelia-pal", "aurelia-logging"], function(e, t, n, r, i, o, s, a, u, l) {
        "use strict";

        function c() {
            u.DOM.addEventListener("submit", function(e) {
                var t = e.target,
                    n = t.action;
                "form" !== t.tagName.toLowerCase() || n || e.preventDefault()
            })
        }

        function h(e, t) {
            var n = void 0;
            return function r() {
                return n = t.shift(), n ? Promise.resolve(n(e)).then(r) : Promise.resolve()
            }()
        }

        function d(e, t, n) {
            function r(r) {
                return t.loadModule(r).then(function(t) {
                    if ("configure" in t) return Promise.resolve(t.configure(e, n.config || {})).then(function() {
                        e.resourcesRelativeTo = null, g.debug("Configured plugin " + n.moduleId + ".")
                    });
                    e.resourcesRelativeTo = null, g.debug("Loaded plugin " + n.moduleId + ".")
                })
            }
            g.debug("Loading plugin " + n.moduleId + "."), e.resourcesRelativeTo = n.resourcesRelativeTo;
            var i = n.moduleId;
            return n.resourcesRelativeTo.length > 1 ? t.normalize(n.moduleId, n.resourcesRelativeTo[1]).then(function(e) {
                return r(e)
            }) : r(i)
        }

        function p(e, t, n) {
            function r(t) {
                var n = t.moduleId,
                    r = f(n);
                return o(n) && (n = s(n)), e.loader.normalize(n, t.relativeTo).then(function(e) {
                    return {
                        name: t.moduleId,
                        importId: o(t.moduleId) ? a(e, r) : e
                    }
                })
            }

            function o(e) {
                var t = f(e);
                return !!t && ("" !== t && (".js" !== t && ".ts" !== t))
            }

            function s(e) {
                return e.replace(y, "")
            }

            function a(e, t) {
                return s(e) + "." + t
            }
            var u = e.container.get(i.ViewEngine);
            return Promise.all(Object.keys(t).map(function(e) {
                return r(t[e])
            })).then(function(e) {
                var t = [],
                    r = [];
                return e.forEach(function(e) {
                    t.push(void 0), r.push(e.importId)
                }), u.importViewResources(r, t, n)
            })
        }

        function f(e) {
            var t = e.match(y);
            if (t && t.length > 0) return t[0].split(".")[1]
        }

        function v(e) {
            if (e.processed) throw new Error("This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.LogManager = e.FrameworkConfiguration = e.Aurelia = void 0, Object.keys(t).forEach(function(n) {
            "default" !== n && "__esModule" !== n && Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }), Object.keys(n).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return n[t]
                }
            })
        }), Object.keys(r).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return r[t]
                }
            })
        }), Object.keys(i).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return i[t]
                }
            })
        }), Object.keys(o).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return o[t]
                }
            })
        }), Object.keys(s).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return s[t]
                }
            })
        }), Object.keys(a).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return a[t]
                }
            })
        }), Object.keys(u).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return u[t]
                }
            })
        });
        var m = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(l),
            g = (e.Aurelia = function() {
                function e(n, r, s) {
                    this.loader = n || new u.PLATFORM.Loader, this.container = r || (new t.Container).makeGlobal(), this.resources = s || new i.ViewResources, this.use = new b(this), this.logger = m.getLogger("aurelia"), this.hostConfigured = !1, this.host = null, this.use.instance(e, this), this.use.instance(o.Loader, this.loader), this.use.instance(i.ViewResources, this.resources)
                }
                return e.prototype.start = function() {
                    var e = this;
                    return this._started ? this._started : (this.logger.info("Aurelia Starting"), this._started = this.use.apply().then(function() {
                        if (c(), !e.container.hasResolver(i.BindingLanguage)) {
                            var t = "You must configure Aurelia with a BindingLanguage implementation.";
                            throw e.logger.error(t), new Error(t)
                        }
                        e.logger.info("Aurelia Started");
                        var n = u.DOM.createCustomEvent("aurelia-started", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        return u.DOM.dispatchEvent(n), e
                    }))
                }, e.prototype.enhance = function() {
                    var e = this,
                        t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        n = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    return this._configureHost(n || u.DOM.querySelectorAll("body")[0]), new Promise(function(n) {
                        var r = e.container.get(i.TemplatingEngine);
                        e.root = r.enhance({
                            container: e.container,
                            element: e.host,
                            resources: e.resources,
                            bindingContext: t
                        }), e.root.attached(), e._onAureliaComposed(), n(e)
                    })
                }, e.prototype.setRoot = function() {
                    var e = this,
                        t = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0],
                        n = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1],
                        r = {};
                    this.root && this.root.viewModel && this.root.viewModel.router && (this.root.viewModel.router.deactivate(), this.root.viewModel.router.reset()), this._configureHost(n);
                    var o = this.container.get(i.TemplatingEngine);
                    return delete this.container.get(i.CompositionTransaction).initialComposition, t || (t = this.configModuleId ? (0, a.relativeToFile)("./app", this.configModuleId) : "app"), r.viewModel = t, r.container = r.childContainer = this.container, r.viewSlot = this.hostSlot, r.host = this.host, o.compose(r).then(function(t) {
                        return e.root = t, r.viewSlot.attached(), e._onAureliaComposed(), e
                    })
                }, e.prototype._configureHost = function(e) {
                    if (!this.hostConfigured) {
                        if (e = e || this.host, this.host = e && "string" != typeof e ? e : u.DOM.getElementById(e || "applicationHost"), !this.host) throw new Error("No applicationHost was specified.");
                        this.hostConfigured = !0, this.host.aurelia = this, this.hostSlot = new i.ViewSlot(this.host, !0), this.hostSlot.transformChildNodesIntoView(), this.container.registerInstance(u.DOM.boundary, this.host)
                    }
                }, e.prototype._onAureliaComposed = function() {
                    var e = u.DOM.createCustomEvent("aurelia-composed", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    setTimeout(function() {
                        return u.DOM.dispatchEvent(e)
                    }, 1)
                }, e
            }(), m.getLogger("aurelia")),
            y = /\.[^\/.]+$/,
            b = function() {
                function e(e) {
                    var t = this;
                    this.aurelia = e, this.container = e.container, this.info = [], this.processed = !1, this.preTasks = [], this.postTasks = [], this.resourcesToLoad = {}, this.preTask(function() {
                        return e.loader.normalize("aurelia-bootstrapper").then(function(e) {
                            return t.bootstrapperName = e
                        })
                    }), this.postTask(function() {
                        return p(e, t.resourcesToLoad, e.resources)
                    })
                }
                return e.prototype.instance = function(e, t) {
                    return this.container.registerInstance(e, t), this
                }, e.prototype.singleton = function(e, t) {
                    return this.container.registerSingleton(e, t), this
                }, e.prototype.transient = function(e, t) {
                    return this.container.registerTransient(e, t), this
                }, e.prototype.preTask = function(e) {
                    return v(this), this.preTasks.push(e), this
                }, e.prototype.postTask = function(e) {
                    return v(this), this.postTasks.push(e), this
                }, e.prototype.feature = function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        n = /\/index$/i.test(e),
                        r = n || f(e) ? e : e + "/index",
                        i = n ? e.substr(0, e.length - 6) : e;
                    return this.plugin({
                        moduleId: r,
                        resourcesRelativeTo: [i, ""],
                        config: t
                    })
                }, e.prototype.globalResources = function(e) {
                    v(this);
                    for (var t = Array.isArray(e) ? e : arguments, n = void 0, r = this.resourcesRelativeTo || ["", ""], i = 0, o = t.length; i < o; ++i) {
                        if ("string" != typeof(n = t[i])) throw new Error("Invalid resource path [" + n + "]. Resources must be specified as relative module IDs.");
                        var s = r[0],
                            u = r[1],
                            l = n;
                        (n.startsWith("./") || n.startsWith("../")) && "" !== s && (l = (0, a.join)(s, n)), this.resourcesToLoad[l] = {
                            moduleId: l,
                            relativeTo: u
                        }
                    }
                    return this
                }, e.prototype.globalName = function(e, t) {
                    return v(this), this.resourcesToLoad[e] = {
                        moduleId: t,
                        relativeTo: ""
                    }, this
                }, e.prototype.plugin = function(e, t) {
                    return v(this), "string" == typeof e ? this.plugin({
                        moduleId: e,
                        resourcesRelativeTo: [e, ""],
                        config: t || {}
                    }) : (this.info.push(e), this)
                }, e.prototype._addNormalizedPlugin = function(e, t) {
                    var n = this,
                        r = {
                            moduleId: e,
                            resourcesRelativeTo: [e, ""],
                            config: t || {}
                        };
                    return this.plugin(r), this.preTask(function() {
                        var t = [e, n.bootstrapperName];
                        return r.moduleId = e, r.resourcesRelativeTo = t, Promise.resolve()
                    }), this
                }, e.prototype.defaultBindingLanguage = function() {
                    return this._addNormalizedPlugin("aurelia-templating-binding")
                }, e.prototype.router = function() {
                    return this._addNormalizedPlugin("aurelia-templating-router")
                }, e.prototype.history = function() {
                    return this._addNormalizedPlugin("aurelia-history-browser")
                }, e.prototype.defaultResources = function() {
                    return this._addNormalizedPlugin("aurelia-templating-resources")
                }, e.prototype.eventAggregator = function() {
                    return this._addNormalizedPlugin("aurelia-event-aggregator")
                }, e.prototype.basicConfiguration = function() {
                    return this.defaultBindingLanguage().defaultResources().eventAggregator()
                }, e.prototype.standardConfiguration = function() {
                    return this.basicConfiguration().history().router()
                }, e.prototype.developmentLogging = function() {
                    var e = this;
                    return this.preTask(function() {
                        return e.aurelia.loader.normalize("aurelia-logging-console", e.bootstrapperName).then(function(t) {
                            return e.aurelia.loader.loadModule(t).then(function(e) {
                                m.addAppender(new e.ConsoleAppender), m.setLevel(m.logLevel.debug)
                            })
                        })
                    }), this
                }, e.prototype.apply = function() {
                    var e = this;
                    return this.processed ? Promise.resolve() : h(this, this.preTasks).then(function() {
                        var t = e.aurelia.loader,
                            n = e.info,
                            r = void 0;
                        return function i() {
                            return (r = n.shift()) ? d(e, t, r).then(i) : (e.processed = !0, Promise.resolve())
                        }().then(function() {
                            return h(e, e.postTasks)
                        })
                    })
                }, e
            }();
        e.FrameworkConfiguration = b;
        e.LogManager = m
    }), define("aurelia-http-client", ["exports", "aurelia-path", "aurelia-pal"], function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function o(e, t, n, r, i) {
            var o = void 0,
                s = void 0;
            for (o = 0, s = e.length; o < s; ++o) e[o](t, n, r, i)
        }

        function s(e, t, n, r) {
            void 0 !== n.timeout && (r.timeout = n.timeout)
        }

        function a(e, t, n, r) {
            void 0 !== n.callbackParameterName && (r.callbackParameterName = n.callbackParameterName)
        }

        function u(e, t, n, r) {
            void 0 !== n.withCredentials && (r.withCredentials = n.withCredentials)
        }

        function l(e, t, n, r) {
            n.progressCallback && (r.upload.onprogress = n.progressCallback)
        }

        function c(e, t, n, r) {
            n.downloadProgressCallback && (r.onprogress = n.downloadProgressCallback)
        }

        function h(e, t, n, r) {
            var i = n.responseType;
            "json" === i && (i = "text"), r.responseType = i
        }

        function d(e, t, n, r) {
            n.headers.configureXHR(r)
        }

        function p(e, t, r, i) {
            r.skipContentProcessing || n.PLATFORM.global.FormData && r.content instanceof FormData || n.PLATFORM.global.Blob && r.content instanceof Blob || n.PLATFORM.global.ArrayBuffer && r.content instanceof ArrayBuffer || r.content instanceof Document || "string" != typeof r.content && null !== r.content && void 0 !== r.content && (r.content = JSON.stringify(r.content, r.replacer), r.headers.has("Content-Type") || r.headers.add("Content-Type", "application/json"))
        }

        function f() {
            return new S(k, [s, a])
        }

        function v() {
            return new S(n.PLATFORM.XMLHttpRequest, [s, u, l, c, h, p, d])
        }

        function m(e, t) {
            e.pendingRequests.push(t), e.isRequesting = !0
        }

        function g(e, t) {
            var r = e.pendingRequests.indexOf(t);
            e.pendingRequests.splice(r, 1), e.isRequesting = e.pendingRequests.length > 0, e.isRequesting || function() {
                var e = n.DOM.createCustomEvent("aurelia-http-client-requests-drained", {
                    bubbles: !0,
                    cancelable: !0
                });
                setTimeout(function() {
                    return n.DOM.dispatchEvent(e)
                }, 1)
            }()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.HttpClient = e.RequestBuilder = e.HttpRequestMessage = e.JSONPRequestMessage = e.RequestMessageProcessor = e.mimeTypes = e.HttpResponseMessage = e.RequestMessage = e.Headers = void 0, e.timeoutTransformer = s, e.callbackParameterNameTransformer = a, e.credentialsTransformer = u, e.progressTransformer = l, e.downloadProgressTransformer = c, e.responseTypeTransformer = h, e.headerTransformer = d, e.contentTransformer = p, e.createJSONPRequestMessageProcessor = f, e.createHttpRequestMessageProcessor = v;
        var y = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            b = e.Headers = function() {
                function e() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    this.headers = {};
                    for (var t in e) this.headers[t.toLowerCase()] = {
                        key: t,
                        value: e[t]
                    }
                }
                return e.prototype.add = function(e, t) {
                    this.headers[e.toLowerCase()] = {
                        key: e,
                        value: t
                    }
                }, e.prototype.get = function(e) {
                    var t = this.headers[e.toLowerCase()];
                    return t ? t.value : void 0
                }, e.prototype.clear = function() {
                    this.headers = {}
                }, e.prototype.has = function(e) {
                    return this.headers.hasOwnProperty(e.toLowerCase())
                }, e.prototype.configureXHR = function(e) {
                    for (var t in this.headers) this.headers.hasOwnProperty(t) && e.setRequestHeader(this.headers[t].key, this.headers[t].value)
                }, e.parse = function(t) {
                    var n = new e;
                    if (!t) return n;
                    for (var r = t.split("\r\n"), i = 0; i < r.length; i++) {
                        var o = r[i],
                            s = o.indexOf(": ");
                        if (s > 0) {
                            var a = o.substring(0, s),
                                u = o.substring(s + 2);
                            n.add(a, u)
                        }
                    }
                    return n
                }, e
            }(),
            w = e.RequestMessage = function() {
                function e(e, t, n, r) {
                    this.method = e, this.url = t, this.content = n, this.headers = r || new b, this.baseUrl = ""
                }
                return e.prototype.buildFullUrl = function() {
                    var e = /^([a-z][a-z0-9+\-.]*:)?\/\//i,
                        n = e.test(this.url) ? this.url : (0, t.join)(this.baseUrl, this.url);
                    if (this.params) {
                        var r = (0, t.buildQueryString)(this.params);
                        n = r ? n + (this.url.indexOf("?") < 0 ? "?" : "&") + r : n
                    }
                    return n
                }, e
            }(),
            _ = e.HttpResponseMessage = function() {
                function e(e, t, n, r) {
                    if (this.requestMessage = e, this.statusCode = t.status, this.response = t.response || t.responseText, this.isSuccess = t.status >= 200 && t.status < 400, this.statusText = t.statusText, this.reviver = r, this.mimeType = null, t.getAllResponseHeaders) try {
                        this.headers = b.parse(t.getAllResponseHeaders())
                    } catch (e) {
                        t.requestHeaders && (this.headers = new b(t.requestHeaders))
                    } else this.headers = new b;
                    var i = void 0;
                    this.headers && this.headers.headers && (i = this.headers.get("Content-Type")), i && (this.mimeType = n = i.split(";")[0].trim(), x.hasOwnProperty(this.mimeType) && (n = x[this.mimeType])), this.responseType = n
                }
                return y(e, [{
                    key: "content",
                    get: function() {
                        try {
                            return void 0 !== this._content ? this._content : void 0 === this.response || null === this.response || "" === this.response ? (this._content = this.response, this._content) : "json" === this.responseType ? (this._content = JSON.parse(this.response, this.reviver), this._content) : this.reviver ? (this._content = this.reviver(this.response), this._content) : (this._content = this.response, this._content)
                        } catch (e) {
                            if (this.isSuccess) throw e;
                            return this._content = null, this._content
                        }
                    }
                }]), e
            }(),
            x = e.mimeTypes = {
                "text/html": "html",
                "text/javascript": "js",
                "application/javascript": "js",
                "text/json": "json",
                "application/json": "json",
                "application/rss+xml": "rss",
                "application/atom+xml": "atom",
                "application/xhtml+xml": "xhtml",
                "text/markdown": "md",
                "text/xml": "xml",
                "text/mathml": "mml",
                "application/xml": "xml",
                "text/yml": "yml",
                "text/csv": "csv",
                "text/css": "css",
                "text/less": "less",
                "text/stylus": "styl",
                "text/scss": "scss",
                "text/sass": "sass",
                "text/plain": "txt"
            },
            S = e.RequestMessageProcessor = function() {
                function e(e, t) {
                    this.XHRType = e, this.xhrTransformers = t, this.isAborted = !1
                }
                return e.prototype.abort = function() {
                    this.xhr && this.xhr.readyState !== n.PLATFORM.XMLHttpRequest.UNSENT && this.xhr.abort(), this.isAborted = !0
                }, e.prototype.process = function(e, t) {
                    var n = this,
                        r = new Promise(function(e, r) {
                            var i = n.xhr = new n.XHRType;
                            i.onload = function(n) {
                                var o = new _(t, i, t.responseType, t.reviver);
                                o.isSuccess ? e(o) : r(o)
                            }, i.ontimeout = function(e) {
                                r(new _(t, {
                                    response: e,
                                    status: i.status,
                                    statusText: i.statusText
                                }, "timeout"))
                            }, i.onerror = function(e) {
                                r(new _(t, {
                                    response: e,
                                    status: i.status,
                                    statusText: i.statusText
                                }, "error"))
                            }, i.onabort = function(e) {
                                r(new _(t, {
                                    response: e,
                                    status: i.status,
                                    statusText: i.statusText
                                }, "abort"))
                            }
                        });
                    return Promise.resolve(t).then(function(t) {
                        var i = function() {
                                return n.isAborted ? n.xhr.abort() : (n.xhr.open(t.method, t.buildFullUrl(), !0, t.user, t.password), o(n.xhrTransformers, e, n, t, n.xhr), void 0 === t.content ? n.xhr.send() : n.xhr.send(t.content)), r
                            },
                            s = [
                                [i, void 0]
                            ];
                        (t.interceptors || []).forEach(function(e) {
                            (e.request || e.requestError) && s.unshift([e.request ? e.request.bind(e) : void 0, e.requestError ? e.requestError.bind(e) : void 0]), (e.response || e.responseError) && s.push([e.response ? e.response.bind(e) : void 0, e.responseError ? e.responseError.bind(e) : void 0])
                        });
                        for (var a = Promise.resolve(t); s.length;) {
                            var u;
                            a = (u = a).then.apply(u, s.shift())
                        }
                        return a
                    })
                }, e
            }(),
            C = e.JSONPRequestMessage = function(e) {
                function t(t, n) {
                    var i = r(this, e.call(this, "JSONP", t));
                    return i.responseType = "jsonp", i.callbackParameterName = n, i
                }
                return i(t, e), t
            }(w),
            k = function() {
                function e() {}
                return e.prototype.open = function(e, t) {
                    this.method = e, this.url = t, this.callbackName = "jsonp_callback_" + Math.round(1e5 * Math.random())
                }, e.prototype.send = function() {
                    var e = this,
                        t = this.url + (this.url.indexOf("?") >= 0 ? "&" : "?") + encodeURIComponent(this.callbackParameterName) + "=" + this.callbackName,
                        r = n.DOM.createElement("script");
                    r.src = t, r.onerror = function(t) {
                        i(), e.status = 0, e.onerror(new Error("error"))
                    };
                    var i = function() {
                        delete n.PLATFORM.global[e.callbackName], n.DOM.removeNode(r)
                    };
                    n.PLATFORM.global[this.callbackName] = function(t) {
                        i(), void 0 === e.status && (e.status = 200, e.statusText = "OK", e.response = t, e.onload(e))
                    }, n.DOM.appendNode(r), void 0 !== this.timeout && setTimeout(function() {
                        void 0 === e.status && (e.status = 0, e.ontimeout(new Error("timeout")))
                    }, this.timeout)
                }, e.prototype.abort = function() {
                    void 0 === this.status && (this.status = 0, this.onabort(new Error("abort")))
                }, e.prototype.setRequestHeader = function() {}, e
            }(),
            E = e.HttpRequestMessage = function(e) {
                function t(t, n, i, o) {
                    var s = r(this, e.call(this, t, n, i, o));
                    return s.responseType = "json", s
                }
                return i(t, e), t
            }(w),
            O = e.RequestBuilder = function() {
                function e(e) {
                    this.client = e, this.transformers = e.requestTransformers.slice(0), this.useJsonp = !1
                }
                return e.prototype.asDelete = function() {
                    return this._addTransformer(function(e, t, n) {
                        n.method = "DELETE"
                    })
                }, e.prototype.asGet = function() {
                    return this._addTransformer(function(e, t, n) {
                        n.method = "GET"
                    })
                }, e.prototype.asHead = function() {
                    return this._addTransformer(function(e, t, n) {
                        n.method = "HEAD"
                    })
                }, e.prototype.asOptions = function() {
                    return this._addTransformer(function(e, t, n) {
                        n.method = "OPTIONS"
                    })
                }, e.prototype.asPatch = function() {
                    return this._addTransformer(function(e, t, n) {
                        n.method = "PATCH"
                    })
                }, e.prototype.asPost = function() {
                    return this._addTransformer(function(e, t, n) {
                        n.method = "POST"
                    })
                }, e.prototype.asPut = function() {
                    return this._addTransformer(function(e, t, n) {
                        n.method = "PUT"
                    })
                }, e.prototype.asJsonp = function(e) {
                    return this.useJsonp = !0, this._addTransformer(function(t, n, r) {
                        r.callbackParameterName = e
                    })
                }, e.prototype.withUrl = function(e) {
                    return this._addTransformer(function(t, n, r) {
                        r.url = e
                    })
                }, e.prototype.withContent = function(e) {
                    return this._addTransformer(function(t, n, r) {
                        r.content = e
                    })
                }, e.prototype.withBaseUrl = function(e) {
                    return this._addTransformer(function(t, n, r) {
                        r.baseUrl = e
                    })
                }, e.prototype.withParams = function(e) {
                    return this._addTransformer(function(t, n, r) {
                        r.params = e
                    })
                }, e.prototype.withResponseType = function(e) {
                    return this._addTransformer(function(t, n, r) {
                        r.responseType = e
                    })
                }, e.prototype.withTimeout = function(e) {
                    return this._addTransformer(function(t, n, r) {
                        r.timeout = e
                    })
                }, e.prototype.withHeader = function(e, t) {
                    return this._addTransformer(function(n, r, i) {
                        i.headers.add(e, t)
                    })
                }, e.prototype.withCredentials = function(e) {
                    return this._addTransformer(function(t, n, r) {
                        r.withCredentials = e
                    })
                }, e.prototype.withLogin = function(e, t) {
                    return this._addTransformer(function(n, r, i) {
                        i.user = e, i.password = t
                    })
                }, e.prototype.withReviver = function(e) {
                    return this._addTransformer(function(t, n, r) {
                        r.reviver = e
                    })
                }, e.prototype.withReplacer = function(e) {
                    return this._addTransformer(function(t, n, r) {
                        r.replacer = e
                    })
                }, e.prototype.withProgressCallback = function(e) {
                    return this._addTransformer(function(t, n, r) {
                        r.progressCallback = e
                    })
                }, e.prototype.withDownloadProgressCallback = function(e) {
                    return this._addTransformer(function(t, n, r) {
                        r.downloadProgressCallback = e
                    })
                }, e.prototype.withCallbackParameterName = function(e) {
                    return this._addTransformer(function(t, n, r) {
                        r.callbackParameterName = e
                    })
                }, e.prototype.withInterceptor = function(e) {
                    return this._addTransformer(function(t, n, r) {
                        r.interceptors = r.interceptors || [], r.interceptors.unshift(e)
                    })
                }, e.prototype.skipContentProcessing = function() {
                    return this._addTransformer(function(e, t, n) {
                        n.skipContentProcessing = !0
                    })
                }, e.prototype._addTransformer = function(e) {
                    return this.transformers.push(e), this
                }, e.addHelper = function(t, n) {
                    e.prototype[t] = function() {
                        return this._addTransformer(n.apply(this, arguments))
                    }
                }, e.prototype.send = function() {
                    var e = this.useJsonp ? new C : new E;
                    return this.client.send(e, this.transformers)
                }, e
            }();
        e.HttpClient = function() {
            function e() {
                this.isRequesting = !1, this.requestTransformers = [], this.requestProcessorFactories = new Map, this.requestProcessorFactories.set(E, v), this.requestProcessorFactories.set(C, f), this.pendingRequests = []
            }
            return e.prototype.configure = function(e) {
                var t = new O(this);
                return e(t), this.requestTransformers = t.transformers, this
            }, e.prototype.createRequest = function(e) {
                var t = new O(this);
                return e && t.withUrl(e), t
            }, e.prototype.send = function(e, t) {
                var n = this,
                    r = this.requestProcessorFactories.get(e.constructor),
                    i = void 0,
                    o = void 0,
                    s = void 0,
                    a = void 0;
                if (!r) throw new Error("No request message processor factory for " + e.constructor + ".");
                return i = r(), m(this, i), t = t || this.requestTransformers, o = Promise.resolve(e).then(function(e) {
                    for (s = 0, a = t.length; s < a; ++s) t[s](n, i, e);
                    return i.process(n, e).then(function(e) {
                        return g(n, i), e
                    }).catch(function(e) {
                        throw g(n, i), e
                    })
                }), o.abort = o.cancel = function() {
                    i.abort()
                }, o
            }, e.prototype.delete = function(e) {
                return this.createRequest(e).asDelete().send()
            }, e.prototype.get = function(e) {
                return this.createRequest(e).asGet().send()
            }, e.prototype.head = function(e) {
                return this.createRequest(e).asHead().send()
            }, e.prototype.jsonp = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? "jsoncallback" : arguments[1];
                return this.createRequest(e).asJsonp(t).send()
            }, e.prototype.options = function(e) {
                return this.createRequest(e).asOptions().send()
            }, e.prototype.put = function(e, t) {
                return this.createRequest(e).asPut().withContent(t).send()
            }, e.prototype.patch = function(e, t) {
                return this.createRequest(e).asPatch().withContent(t).send()
            }, e.prototype.post = function(e, t) {
                return this.createRequest(e).asPost().withContent(t).send()
            }, e
        }()
    }), define("aurelia-history", ["exports"], function(e) {
        "use strict";

        function t(e) {
            throw new Error("History must implement " + e + "().")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.History = function() {
            function e() {}
            return e.prototype.activate = function(e) {
                t("activate")
            }, e.prototype.deactivate = function() {
                t("deactivate")
            }, e.prototype.getAbsoluteRoot = function() {
                t("getAbsoluteRoot")
            }, e.prototype.navigate = function(e, n) {
                t("navigate")
            }, e.prototype.navigateBack = function() {
                t("navigateBack")
            }, e.prototype.setTitle = function(e) {
                t("setTitle")
            }, e
        }()
    }), define("aurelia-history-browser", ["exports", "aurelia-pal", "aurelia-history"], function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function o(e) {
            e.singleton(n.History, d), e.transient(c, h)
        }

        function s(e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t)
            } else e.hash = "#" + t
        }

        function a(e, t, n) {
            return e + "//" + t + (n ? ":" + n : "")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.BrowserHistory = e.DefaultLinkHandler = e.LinkHandler = void 0, e.configure = o;
        var u, l, c = e.LinkHandler = function() {
                function e() {}
                return e.prototype.activate = function(e) {}, e.prototype.deactivate = function() {}, e
            }(),
            h = e.DefaultLinkHandler = function(e) {
                function n() {
                    var t = r(this, e.call(this));
                    return t.handler = function(e) {
                        var r = n.getEventInfo(e),
                            i = r.shouldHandleEvent,
                            o = r.href;
                        i && (e.preventDefault(), t.history.navigate(o))
                    }, t
                }
                return i(n, e), n.prototype.activate = function(e) {
                    e._hasPushState && (this.history = e, t.DOM.addEventListener("click", this.handler, !0))
                }, n.prototype.deactivate = function() {
                    t.DOM.removeEventListener("click", this.handler)
                }, n.getEventInfo = function(e) {
                    var t = {
                            shouldHandleEvent: !1,
                            href: null,
                            anchor: null
                        },
                        r = n.findClosestAnchor(e.target);
                    if (!r || !n.targetIsThisWindow(r)) return t;
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return t;
                    var i = r.getAttribute("href");
                    t.anchor = r, t.href = i;
                    var o = 1 === e.which,
                        s = i && !("#" === i.charAt(0) || /^[a-z]+:/i.test(i));
                    return t.shouldHandleEvent = o && s, t
                }, n.findClosestAnchor = function(e) {
                    for (; e;) {
                        if ("A" === e.tagName) return e;
                        e = e.parentNode
                    }
                }, n.targetIsThisWindow = function(e) {
                    var n = e.getAttribute("target"),
                        r = t.PLATFORM.global;
                    return !n || n === r.name || "_self" === n || "top" === n && r === r.top
                }, n
            }(c),
            d = e.BrowserHistory = (l = u = function(e) {
                function n(n) {
                    var i = r(this, e.call(this));
                    return i._isActive = !1, i._checkUrlCallback = i._checkUrl.bind(i), i.location = t.PLATFORM.location, i.history = t.PLATFORM.history, i.linkHandler = n, i
                }
                return i(n, e), n.prototype.activate = function(e) {
                    if (this._isActive) throw new Error("History has already been activated.");
                    var n = !!e.pushState;
                    this._isActive = !0, this.options = Object.assign({}, {
                        root: "/"
                    }, this.options, e), this.root = ("/" + this.options.root + "/").replace(f, "/"), this._wantsHashChange = !1 !== this.options.hashChange, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var r = void 0;
                    if (this._hasPushState ? r = "popstate" : this._wantsHashChange && (r = "hashchange"), t.PLATFORM.addEventListener(r, this._checkUrlCallback), this._wantsHashChange && n) {
                        var i = this.location,
                            o = i.pathname.replace(/[^\/]$/, "$&/") === this.root;
                        if (!this._hasPushState && !o) return this.fragment = this._getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                        this._hasPushState && o && i.hash && (this.fragment = this._getHash().replace(p, ""), this.history.replaceState({}, t.DOM.title, this.root + this.fragment + i.search))
                    }
                    if (this.fragment || (this.fragment = this._getFragment()), this.linkHandler.activate(this), !this.options.silent) return this._loadUrl()
                }, n.prototype.deactivate = function() {
                    t.PLATFORM.removeEventListener("popstate", this._checkUrlCallback), t.PLATFORM.removeEventListener("hashchange", this._checkUrlCallback), this._isActive = !1, this.linkHandler.deactivate()
                }, n.prototype.getAbsoluteRoot = function() {
                    return "" + a(this.location.protocol, this.location.hostname, this.location.port) + this.root
                }, n.prototype.navigate = function(e) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        r = n.trigger,
                        i = void 0 === r || r,
                        o = n.replace,
                        a = void 0 !== o && o;
                    if (e && m.test(e)) return this.location.href = e, !0;
                    if (!this._isActive) return !1;
                    if (e = this._getFragment(e || ""), this.fragment === e && !a) return !1;
                    this.fragment = e;
                    var u = this.root + e;
                    if ("" === e && "/" !== u && (u = u.slice(0, -1)), this._hasPushState) u = u.replace("//", "/"), this.history[a ? "replaceState" : "pushState"]({}, t.DOM.title, u);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(u);
                        s(this.location, e, a)
                    }
                    return i ? this._loadUrl(e) : void 0
                }, n.prototype.navigateBack = function() {
                    this.history.back()
                }, n.prototype.setTitle = function(e) {
                    t.DOM.title = e
                }, n.prototype._getHash = function() {
                    return this.location.hash.substr(1)
                }, n.prototype._getFragment = function(e, t) {
                    var n = void 0;
                    return e || (this._hasPushState || !this._wantsHashChange || t ? (e = this.location.pathname + this.location.search, n = this.root.replace(v, ""), e.indexOf(n) || (e = e.substr(n.length))) : e = this._getHash()), "/" + e.replace(p, "")
                }, n.prototype._checkUrl = function() {
                    this._getFragment() !== this.fragment && this._loadUrl()
                }, n.prototype._loadUrl = function(e) {
                    var t = this.fragment = this._getFragment(e);
                    return !!this.options.routeHandler && this.options.routeHandler(t)
                }, n
            }(n.History), u.inject = [c], l),
            p = /^#?\/*|\s+$/g,
            f = /^\/+|\/+$/g,
            v = /\/$/,
            m = /^([a-z][a-z0-9+\-.]*:)?\/\//i
    }), define("aurelia-loader", ["exports", "aurelia-path", "aurelia-metadata"], function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Loader = e.TemplateRegistryEntry = e.TemplateDependency = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = e.TemplateDependency = function(e, t) {
                this.src = e, this.name = t
            },
            o = e.TemplateRegistryEntry = function() {
                function e(e) {
                    this.templateIsLoaded = !1, this.factoryIsReady = !1, this.resources = null, this.dependencies = null, this.address = e, this.onReady = null, this._template = null, this._factory = null
                }
                return e.prototype.addDependency = function(e, r) {
                    var o = "string" == typeof e ? (0, t.relativeToFile)(e, this.address) : n.Origin.get(e).moduleId;
                    this.dependencies.push(new i(o, r))
                }, r(e, [{
                    key: "template",
                    get: function() {
                        return this._template
                    },
                    set: function(e) {
                        var n = this.address,
                            r = void 0,
                            o = void 0,
                            s = void 0,
                            a = void 0;
                        this._template = e, this.templateIsLoaded = !0, r = e.content.querySelectorAll("require"), a = this.dependencies = new Array(r.length);
                        for (var u = 0, l = r.length; u < l; ++u) {
                            if (o = r[u], !(s = o.getAttribute("from"))) throw new Error("<require> element in " + n + ' has no "from" attribute.');
                            a[u] = new i((0, t.relativeToFile)(s, n), o.getAttribute("as")), o.parentNode && o.parentNode.removeChild(o)
                        }
                    }
                }, {
                    key: "factory",
                    get: function() {
                        return this._factory
                    },
                    set: function(e) {
                        this._factory = e, this.factoryIsReady = !0
                    }
                }]), e
            }();
        e.Loader = function() {
            function e() {
                this.templateRegistry = {}
            }
            return e.prototype.map = function(e, t) {
                throw new Error("Loaders must implement map(id, source).")
            }, e.prototype.normalizeSync = function(e, t) {
                throw new Error("Loaders must implement normalizeSync(moduleId, relativeTo).")
            }, e.prototype.normalize = function(e, t) {
                throw new Error("Loaders must implement normalize(moduleId: string, relativeTo: string): Promise<string>.")
            }, e.prototype.loadModule = function(e) {
                throw new Error("Loaders must implement loadModule(id).")
            }, e.prototype.loadAllModules = function(e) {
                throw new Error("Loader must implement loadAllModules(ids).")
            }, e.prototype.loadTemplate = function(e) {
                throw new Error("Loader must implement loadTemplate(url).")
            }, e.prototype.loadText = function(e) {
                throw new Error("Loader must implement loadText(url).")
            }, e.prototype.applyPluginToUrl = function(e, t) {
                throw new Error("Loader must implement applyPluginToUrl(url, pluginName).")
            }, e.prototype.addPlugin = function(e, t) {
                throw new Error("Loader must implement addPlugin(pluginName, implementation).")
            }, e.prototype.getOrCreateTemplateRegistryEntry = function(e) {
                return this.templateRegistry[e] || (this.templateRegistry[e] = new o(e))
            }, e
        }()
    }), define("aurelia-loader-default", ["exports", "aurelia-loader", "aurelia-pal", "aurelia-metadata"], function(e, t, n, r) {
        "use strict";

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e, t) {
            var n = e,
                i = void 0,
                o = void 0;
            n.__useDefault && (n = n.default), r.Origin.set(n, new r.Origin(t, "default"));
            for (i in n) "function" == typeof(o = n[i]) && r.Origin.set(o, new r.Origin(t, i));
            return e
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.DefaultLoader = e.TextTemplateLoader = void 0;
        var a = e.TextTemplateLoader = function() {
                function e() {}
                return e.prototype.loadTemplate = function(e, t) {
                    return e.loadText(t.address).then(function(e) {
                        t.template = n.DOM.createTemplateFromMarkup(e)
                    })
                }, e
            }(),
            u = e.DefaultLoader = function(e) {
                function t() {
                    var t = i(this, e.call(this));
                    t.textPluginName = "text", t.moduleRegistry = Object.create(null), t.useTemplateLoader(new a);
                    var n = t;
                    return t.addPlugin("template-registry-entry", {
                        fetch: function(e) {
                            var t = n.getOrCreateTemplateRegistryEntry(e);
                            return t.templateIsLoaded ? t : n.templateLoader.loadTemplate(n, t).then(function(e) {
                                return t
                            })
                        }
                    }), t
                }
                return o(t, e), t.prototype.useTemplateLoader = function(e) {
                    this.templateLoader = e
                }, t.prototype.loadAllModules = function(e) {
                    for (var t = [], n = 0, r = e.length; n < r; ++n) t.push(this.loadModule(e[n]));
                    return Promise.all(t)
                }, t.prototype.loadTemplate = function(e) {
                    return this._import(this.applyPluginToUrl(e, "template-registry-entry"))
                }, t.prototype.loadText = function(e) {
                    return this._import(this.applyPluginToUrl(e, this.textPluginName)).then(function(e) {
                        return "string" == typeof e ? e : e.default
                    })
                }, t
            }(t.Loader);
        n.PLATFORM.Loader = u, n.PLATFORM.global.System && n.PLATFORM.global.System.import ? (n.PLATFORM.eachModule = function(e) {
            if (System.registry)
                for (var t = System.registry.entries(), n = Array.isArray(t), r = 0, t = n ? t : t[Symbol.iterator]();;) {
                    var i;
                    if (n) {
                        if (r >= t.length) break;
                        i = t[r++]
                    } else {
                        if (r = t.next(), r.done) break;
                        i = r.value
                    }
                    var o = i,
                        s = o[0],
                        a = o[1];
                    try {
                        if (e(s, a)) return
                    } catch (e) {}
                } else {
                    var u = System._loader.modules;
                    for (var l in u) try {
                        if (e(l, u[l].module)) return
                    } catch (e) {}
                }
        }, System.set("text", System.newModule({
            translate: function(e) {
                return 'module.exports = "' + e.source.replace(/(["\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029") + '";'
            }
        })), u.prototype._import = function(e) {
            return System.import(e)
        }, u.prototype.loadModule = function(e) {
            var t = this;
            return System.normalize(e).then(function(e) {
                var n = t.moduleRegistry[e];
                return void 0 !== n ? Promise.resolve(n) : System.import(e).then(function(n) {
                    return t.moduleRegistry[e] = n, s(n, e)
                })
            })
        }, u.prototype.map = function(e, t) {
            var n;
            System.config({
                map: (n = {}, n[e] = t, n)
            })
        }, u.prototype.normalizeSync = function(e, t) {
            return System.normalizeSync(e, t)
        }, u.prototype.normalize = function(e, t) {
            return System.normalize(e, t)
        }, u.prototype.applyPluginToUrl = function(e, t) {
            return e + "!" + t
        }, u.prototype.addPlugin = function(e, t) {
            System.set(e, System.newModule({
                fetch: function(e, n) {
                    var r = t.fetch(e.address);
                    return Promise.resolve(r).then(function(t) {
                        return e.metadata.result = t, ""
                    })
                },
                instantiate: function(e) {
                    return e.metadata.result
                }
            }))
        }) : (n.PLATFORM.global.requirejs && requirejs.s && requirejs.s.contexts && requirejs.s.contexts._ && requirejs.s.contexts._.defined ? n.PLATFORM.eachModule = function(e) {
            var t = requirejs.s.contexts._.defined;
            for (var n in t) try {
                if (e(n, t[n])) return
            } catch (e) {}
        } : n.PLATFORM.eachModule = function(e) {}, u.prototype._import = function(e) {
            return new Promise(function(t, n) {
                require([e], t, n)
            })
        }, u.prototype.loadModule = function(e) {
            var t = this,
                n = this.moduleRegistry[e];
            return void 0 !== n ? Promise.resolve(n) : new Promise(function(n, r) {
                require([e], function(r) {
                    t.moduleRegistry[e] = r, n(s(r, e))
                }, r)
            })
        }, u.prototype.map = function(e, t) {}, u.prototype.normalize = function(e, t) {
            return Promise.resolve(e)
        }, u.prototype.normalizeSync = function(e, t) {
            return e
        }, u.prototype.applyPluginToUrl = function(e, t) {
            return t + "!" + e
        }, u.prototype.addPlugin = function(e, t) {
            define(e, [], {
                load: function(e, n, r) {
                    var i = t.fetch(e);
                    Promise.resolve(i).then(r)
                }
            })
        })
    }), define("aurelia-logging", ["exports"], function(e) {
        "use strict";

        function t() {
            return [this].concat(Array.prototype.slice.call(arguments))
        }

        function n(e) {
            var n = l[e];
            return function() {
                if (!(this.level < n))
                    for (var r = t.apply(this, arguments), i = h.length; i--;) {
                        var o;
                        (o = h[i])[e].apply(o, r)
                    }
            }
        }

        function r() {
            var e = p.prototype;
            e.debug = n("debug"), e.info = n("info"), e.warn = n("warn"), e.error = n("error")
        }

        function i(e) {
            return c[e] || new p(e)
        }

        function o(e) {
            1 === h.push(e) && r()
        }

        function s(e) {
            h = h.filter(function(t) {
                return t !== e
            })
        }

        function a(e) {
            d = e;
            for (var t in c) c[t].setLevel(e)
        }

        function u() {
            return d
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getLogger = i, e.addAppender = o, e.removeAppender = s, e.setLevel = a, e.getLevel = u;
        var l = e.logLevel = {
                none: 0,
                error: 1,
                warn: 2,
                info: 3,
                debug: 4
            },
            c = {},
            h = [],
            d = l.none,
            p = e.Logger = function() {
                function e(e) {
                    var t = c[e];
                    if (t) return t;
                    c[e] = this, this.id = e, this.level = d
                }
                return e.prototype.debug = function(e) {}, e.prototype.info = function(e) {}, e.prototype.warn = function(e) {}, e.prototype.error = function(e) {}, e.prototype.setLevel = function(e) {
                    this.level = e
                }, e
            }()
    }), define("aurelia-logging-console", ["exports", "aurelia-logging"], function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ConsoleAppender = void 0;
        e.ConsoleAppender = function() {
            function e() {}
            return e.prototype.debug = function(e) {
                for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                (t = console).debug.apply(t, ["DEBUG [" + e.id + "]"].concat(r))
            }, e.prototype.info = function(e) {
                for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                (t = console).info.apply(t, ["INFO [" + e.id + "]"].concat(r))
            }, e.prototype.warn = function(e) {
                for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                (t = console).warn.apply(t, ["WARN [" + e.id + "]"].concat(r))
            }, e.prototype.error = function(e) {
                for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                (t = console).error.apply(t, ["ERROR [" + e.id + "]"].concat(r))
            }, e
        }()
    }), define("aurelia-metadata", ["exports", "aurelia-pal"], function(e, t) {
        "use strict";

        function n(e) {
            return e && ("function" == typeof e || "object" === (void 0 === e ? "undefined" : p(e)))
        }

        function r() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = function(e, n, r) {
                var i = t.length;
                if (n) {
                    for (r = r || {
                            value: e[n],
                            writable: !0,
                            configurable: !0,
                            enumerable: !0
                        }; i--;) r = t[i](e, n, r) || r;
                    Object.defineProperty(e, n, r)
                } else
                    for (; i--;) e = t[i](e) || e;
                return e
            };
            return r.on = r, r
        }

        function i(e, t, n) {
            function r(n, r, i) {
                var o = n.constructor.name + "#" + r,
                    s = t ? {} : e || {},
                    a = "DEPRECATION - " + o;
                if ("function" != typeof i.value) throw new SyntaxError("Only methods can be marked as deprecated.");
                return s.message && (a += " - " + s.message), d({}, i, {
                    value: function() {
                        if (s.error) throw new Error(a);
                        return console.warn(a), i.value.apply(this, arguments)
                    }
                })
            }
            return t ? r(e, t, n) : r
        }

        function o(e) {
            function t(t) {
                var r = function(t) {
                    for (var r = "function" == typeof t ? t.prototype : t, i = n.length; i--;) {
                        var o = n[i];
                        Object.defineProperty(r, o, {
                            value: e[o],
                            writable: !0
                        })
                    }
                };
                return t ? r(t) : r
            }
            var n = Object.keys(e);
            return t
        }

        function s() {
            return !0
        }

        function a() {}

        function u(e) {
            return void 0 === e ? e = {} : "function" == typeof e && (e = {
                validate: e
            }), e.validate || (e.validate = s), e.compose || (e.compose = a), e
        }

        function l(e) {
            return function(t) {
                return !0 === e(t)
            }
        }

        function c(e, t) {
            return function(n) {
                var r = t(n);
                if (!0 !== r) throw new Error(r || e + " was not correctly implemented.")
            }
        }

        function h(e, t) {
            t = u(t);
            var n = function n(r) {
                var i = "function" == typeof r ? r.prototype : r;
                t.compose(i), n.assert(i), Object.defineProperty(i, "protocol:" + e, {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: !0
                })
            };
            return n.validate = l(t.validate), n.assert = c(e, t.validate), n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Origin = e.metadata = void 0, e.decorators = r, e.deprecated = i, e.mixin = o, e.protocol = h;
        var d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            f = e.metadata = {
                resource: "aurelia:resource",
                paramTypes: "design:paramtypes",
                propertyType: "design:type",
                properties: "design:properties",
                get: function(e, t, r) {
                    if (n(t)) {
                        var i = f.getOwn(e, t, r);
                        return void 0 === i ? f.get(e, Object.getPrototypeOf(t), r) : i
                    }
                },
                getOwn: function(e, t, r) {
                    if (n(t)) return Reflect.getOwnMetadata(e, t, r)
                },
                define: function(e, t, n, r) {
                    Reflect.defineMetadata(e, t, n, r)
                },
                getOrCreateOwn: function(e, t, n, r) {
                    var i = f.getOwn(e, n, r);
                    return void 0 === i && (i = new t, Reflect.defineMetadata(e, i, n, r)), i
                }
            },
            v = new Map,
            m = Object.freeze({
                moduleId: void 0,
                moduleMember: void 0
            });
        e.Origin = function() {
            function e(e, t) {
                this.moduleId = e, this.moduleMember = t
            }
            return e.get = function(n) {
                var r = v.get(n);
                return void 0 === r && t.PLATFORM.eachModule(function(t, i) {
                    if ("object" === (void 0 === i ? "undefined" : p(i)))
                        for (var o in i) {
                            var s = i[o];
                            if (s === n) return v.set(n, r = new e(t, o)), !0
                        }
                    return i === n && (v.set(n, r = new e(t, "default")), !0)
                }), r || m
            }, e.set = function(e, t) {
                v.set(e, t)
            }, e
        }();
        h.create = function(e, t) {
            t = u(t);
            var n = "protocol:" + e,
                r = function(n) {
                    var r = h(e, t);
                    return n ? r(n) : r
                };
            return r.decorates = function(e) {
                return !0 === e[n]
            }, r.validate = l(t.validate), r.assert = c(e, t.validate), r
        }
    }), define("aurelia-pal", ["exports"], function(e) {
        "use strict";

        function t(e, t, n) {
            if (t) {
                if (t.innerError && n) return t;
                var r = "\n------------------------------------------------\n";
                e += r + "Inner Error:\n", "string" == typeof t ? e += "Message: " + t : (t.message ? e += "Message: " + t.message : e += "Unknown Inner Error Type. Displaying Inner Error as JSON:\n " + JSON.stringify(t, null, "  "), t.stack && (e += "\nInner Error Stack:\n" + t.stack, e += "\nEnd Inner Error Stack")), e += r
            }
            var i = new Error(e);
            return t && (i.innerError = t), i
        }

        function n(t) {
            a || (e.isInitialized = a = !0, "function" != typeof Object.getPropertyDescriptor && (Object.getPropertyDescriptor = function(e, t) {
                for (var n = Object.getOwnPropertyDescriptor(e, t), r = Object.getPrototypeOf(e); void 0 === n && null !== r;) n = Object.getOwnPropertyDescriptor(r, t), r = Object.getPrototypeOf(r);
                return n
            }), t(o, i, s))
        }

        function r() {
            e.isInitialized = a = !1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.AggregateError = t, e.initializePAL = n, e.reset = r;
        var i = e.FEATURE = {},
            o = e.PLATFORM = {
                noop: function() {},
                eachModule: function() {},
                moduleName: function(e) {
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }, t
                }(function(e) {
                    return e
                })
            };
        o.global = function() {
            return "undefined" != typeof self ? self : "undefined" != typeof global ? global : new Function("return this")()
        }();
        var s = e.DOM = {},
            a = e.isInitialized = !1
    }), define("aurelia-pal-browser", ["exports", "aurelia-pal"], function(e, t) {
        "use strict";

        function n() {
            t.isInitialized || (0, t.initializePAL)(function(e, t, n) {
                Object.assign(e, i), Object.assign(t, l), Object.assign(n, h), Object.defineProperty(n, "title", {
                    get: function() {
                        return document.title
                    },
                    set: function(e) {
                        document.title = e
                    }
                }), Object.defineProperty(n, "activeElement", {
                    get: function() {
                        return document.activeElement
                    }
                }), Object.defineProperty(e, "XMLHttpRequest", {
                    get: function() {
                        return e.global.XMLHttpRequest
                    }
                })
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e._DOM = e._FEATURE = e._PLATFORM = void 0, e.initialize = n;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = e._PLATFORM = {
                location: window.location,
                history: window.history,
                addEventListener: function(e, t, n) {
                    this.global.addEventListener(e, t, n)
                },
                removeEventListener: function(e, t, n) {
                    this.global.removeEventListener(e, t, n)
                },
                performance: window.performance,
                requestAnimationFrame: function(e) {
                    return this.global.requestAnimationFrame(e)
                }
            };
        if ("undefined" == typeof FEATURE_NO_IE) {
            void 0 === function() {}.name && Object.defineProperty(Function.prototype, "name", {
                get: function() {
                    var e = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
                    return Object.defineProperty(this, "name", {
                        value: e
                    }), e
                }
            })
        }
        if ("undefined" == typeof FEATURE_NO_IE)
            if ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
                var o = document.createElement("_");
                if (o.classList.add("c1", "c2"), !o.classList.contains("c2")) {
                    var s = function(e) {
                        var t = DOMTokenList.prototype[e];
                        DOMTokenList.prototype[e] = function(e) {
                            for (var n = 0, r = arguments.length; n < r; ++n) e = arguments[n], t.call(this, e)
                        }
                    };
                    s("add"), s("remove")
                }
                o.classList.toggle("c3", !1), o.classList.contains("c3") && function() {
                    var e = DOMTokenList.prototype.toggle;
                    DOMTokenList.prototype.toggle = function(t, n) {
                        return 1 in arguments && !this.contains(t) == !n ? n : e.call(this, t)
                    }
                }(), o = null
            } else ! function() {
                var e = String.prototype.trim,
                    t = Array.prototype.indexOf,
                    n = [],
                    r = function(e, t) {
                        this.name = e, this.code = DOMException[e], this.message = t
                    },
                    i = function(e, n) {
                        if ("" === n) throw new r("SYNTAX_ERR", "An invalid or illegal string was specified");
                        if (/\s/.test(n)) throw new r("INVALID_CHARACTER_ERR", "String contains an invalid character");
                        return t.call(e, n)
                    },
                    o = function(t) {
                        for (var r = e.call(t.getAttribute("class") || ""), i = r ? r.split(/\s+/) : n, o = 0, s = i.length; o < s; ++o) this.push(i[o]);
                        this._updateClassName = function() {
                            t.setAttribute("class", this.toString())
                        }
                    },
                    s = o.prototype = [];
                r.prototype = Error.prototype, s.item = function(e) {
                    return this[e] || null
                }, s.contains = function(e) {
                    return e += "", -1 !== i(this, e)
                }, s.add = function() {
                    var e = arguments,
                        t = 0,
                        n = e.length,
                        r = void 0,
                        o = !1;
                    do {
                        r = e[t] + "", -1 === i(this, r) && (this.push(r), o = !0)
                    } while (++t < n);
                    o && this._updateClassName()
                }, s.remove = function() {
                    var e = arguments,
                        t = 0,
                        n = e.length,
                        r = void 0,
                        o = !1,
                        s = void 0;
                    do {
                        for (r = e[t] + "", s = i(this, r); - 1 !== s;) this.splice(s, 1), o = !0, s = i(this, r)
                    } while (++t < n);
                    o && this._updateClassName()
                }, s.toggle = function(e, t) {
                    e += "";
                    var n = this.contains(e),
                        r = n ? !0 !== t && "remove" : !1 !== t && "add";
                    return r && this[r](e), !0 === t || !1 === t ? t : !n
                }, s.toString = function() {
                    return this.join(" ")
                }, Object.defineProperty(Element.prototype, "classList", {
                    get: function() {
                        return new o(this)
                    },
                    enumerable: !0,
                    configurable: !0
                })
            }();
        if ("undefined" == typeof FEATURE_NO_IE && ("performance" in window == !1 && (window.performance = {}), "now" in window.performance == !1 && function() {
                var e = Date.now();
                performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), window.performance.now = function() {
                    return Date.now() - e
                }
            }(), i.performance = window.performance), "undefined" == typeof FEATURE_NO_IE && function() {
                var e = window.console = window.console || {},
                    t = function() {};
                e.memory || (e.memory = {}), "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",").forEach(function(n) {
                    e[n] || (e[n] = t)
                }), "object" === r(e.log) && "log,info,warn,error,assert,dir,clear,profile,profileEnd".split(",").forEach(function(e) {
                    console[e] = this.bind(console[e], console)
                }, Function.prototype.call)
            }(), "undefined" == typeof FEATURE_NO_IE && (!window.CustomEvent || "function" != typeof window.CustomEvent)) {
            var a = function(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
            };
            a.prototype = window.Event.prototype, window.CustomEvent = a
        }
        if (Element && !Element.prototype.matches) {
            var u = Element.prototype;
            u.matches = u.matchesSelector || u.mozMatchesSelector || u.msMatchesSelector || u.oMatchesSelector || u.webkitMatchesSelector
        }
        var l = e._FEATURE = {
            shadowDOM: !!HTMLElement.prototype.attachShadow,
            scopedCSS: "scoped" in document.createElement("style"),
            htmlTemplateElement: "content" in document.createElement("template"),
            mutationObserver: !(!window.MutationObserver && !window.WebKitMutationObserver),
            ensureHTMLTemplateElement: function(e) {
                return e
            }
        };
        "undefined" == typeof FEATURE_NO_IE && function() {
            var e = function(e) {
                    return "template" === e.tagName && "http://www.w3.org/2000/svg" === e.namespaceURI
                },
                t = function(e) {
                    var t = e.ownerDocument.createElement("template"),
                        r = e.attributes,
                        i = r.length,
                        o = void 0;
                    for (e.parentNode.insertBefore(t, e); i-- > 0;) o = r[i], t.setAttribute(o.name, o.value), e.removeAttribute(o.name);
                    return e.parentNode.removeChild(e), n(t)
                },
                n = function(e) {
                    for (var t = e.content = document.createDocumentFragment(), n = void 0; n = e.firstChild;) t.appendChild(n);
                    return e
                },
                r = function(r) {
                    for (var i = n(r).content, o = i.querySelectorAll("template"), s = 0, a = o.length; s < a; ++s) {
                        var u = o[s];
                        e(u) ? t(u) : n(u)
                    }
                    return r
                };
            l.htmlTemplateElement || (l.ensureHTMLTemplateElement = r)
        }();
        var c = window.ShadowDOMPolyfill || null,
            h = e._DOM = {
                Element: Element,
                SVGElement: SVGElement,
                boundary: "aurelia-dom-boundary",
                addEventListener: function(e, t, n) {
                    document.addEventListener(e, t, n)
                },
                removeEventListener: function(e, t, n) {
                    document.removeEventListener(e, t, n)
                },
                adoptNode: function(e) {
                    return document.adoptNode(e, !0)
                },
                createElement: function(e) {
                    return document.createElement(e)
                },
                createTextNode: function(e) {
                    return document.createTextNode(e)
                },
                createComment: function(e) {
                    return document.createComment(e)
                },
                createDocumentFragment: function() {
                    return document.createDocumentFragment()
                },
                createMutationObserver: function(e) {
                    return new(window.MutationObserver || window.WebKitMutationObserver)(e)
                },
                createCustomEvent: function(e, t) {
                    return new window.CustomEvent(e, t)
                },
                dispatchEvent: function(e) {
                    document.dispatchEvent(e)
                },
                getComputedStyle: function(e) {
                    return window.getComputedStyle(e)
                },
                getElementById: function(e) {
                    return document.getElementById(e)
                },
                querySelectorAll: function(e) {
                    return document.querySelectorAll(e)
                },
                nextElementSibling: function(e) {
                    if (e.nextElementSibling) return e.nextElementSibling;
                    do {
                        e = e.nextSibling
                    } while (e && 1 !== e.nodeType);
                    return e
                },
                createTemplateFromMarkup: function(e) {
                    var t = document.createElement("div");
                    t.innerHTML = e;
                    var n = t.firstElementChild;
                    if (!n || "TEMPLATE" !== n.nodeName) throw new Error("Template markup must be wrapped in a <template> element e.g. <template> \x3c!-- markup here --\x3e </template>");
                    return l.ensureHTMLTemplateElement(n)
                },
                appendNode: function(e, t) {
                    (t || document.body).appendChild(e)
                },
                replaceNode: function(e, t, n) {
                    t.parentNode ? t.parentNode.replaceChild(e, t) : null !== c ? c.unwrap(n).replaceChild(c.unwrap(e), c.unwrap(t)) : n.replaceChild(e, t)
                },
                removeNode: function(e, t) {
                    e.parentNode ? e.parentNode.removeChild(e) : t && (null !== c ? c.unwrap(t).removeChild(c.unwrap(e)) : t.removeChild(e))
                },
                injectStyles: function(e, t, n) {
                    var r = document.createElement("style");
                    return r.innerHTML = e, r.type = "text/css", t = t || document.head, n && t.childNodes.length > 0 ? t.insertBefore(r, t.childNodes[0]) : t.appendChild(r), r
                }
            }
    }), define("aurelia-path", ["exports"], function(e) {
        "use strict";

        function t(e) {
            for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                if ("." === n) e.splice(t, 1), t -= 1;
                else if (".." === n) {
                    if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1]) continue;
                    t > 0 && (e.splice(t - 1, 2), t -= 2)
                }
            }
        }

        function n(e, n) {
            var r = n && n.split("/"),
                i = e.trim().split("/");
            if ("." === i[0].charAt(0) && r) {
                var o = r.slice(0, r.length - 1);
                i.unshift.apply(i, o)
            }
            return t(i), i.join("/")
        }

        function r(e, t) {
            if (!e) return t;
            if (!t) return e;
            var n = e.match(/^([^\/]*?:)\//),
                r = n && n.length > 0 ? n[1] : "";
            e = e.substr(r.length);
            var i = void 0;
            i = 0 === e.indexOf("///") && "file:" === r ? "///" : 0 === e.indexOf("//") ? "//" : 0 === e.indexOf("/") ? "/" : "";
            for (var o = "/" === t.slice(-1) ? "/" : "", s = e.split("/"), a = t.split("/"), u = [], l = 0, c = s.length; l < c; ++l)
                if (".." === s[l]) u.pop();
                else {
                    if ("." === s[l] || "" === s[l]) continue;
                    u.push(s[l])
                } for (var h = 0, d = a.length; h < d; ++h)
                if (".." === a[h]) u.pop();
                else {
                    if ("." === a[h] || "" === a[h]) continue;
                    u.push(a[h])
                } return r + i + u.join("/") + o
        }

        function i(e, t, n) {
            var r = [];
            if (null === t || void 0 === t) return r;
            if (Array.isArray(t))
                for (var o = 0, s = t.length; o < s; o++)
                    if (n) r.push(h(e) + "=" + c(t[o]));
                    else {
                        var a = e + "[" + ("object" === l(t[o]) && null !== t[o] ? o : "") + "]";
                        r = r.concat(i(a, t[o]))
                    }
            else if ("object" !== (void 0 === t ? "undefined" : l(t)) || n) r.push(h(e) + "=" + c(t));
            else
                for (var u in t) r = r.concat(i(e + "[" + u + "]", t[u]));
            return r
        }

        function o(e, t) {
            for (var n = [], r = Object.keys(e || {}).sort(), o = 0, s = r.length; o < s; o++) {
                var a = r[o];
                n = n.concat(i(a, e[a], t))
            }
            return 0 === n.length ? "" : n.join("&")
        }

        function s(e, t) {
            return Array.isArray(e) ? (e.push(t), e) : void 0 !== e ? [e, t] : t
        }

        function a(e, t, n) {
            for (var r = e, i = t.length - 1, o = 0; o <= i; o++) {
                var s = "" === t[o] ? r.length : t[o];
                if (o < i) {
                    var a = r[s] && "object" !== l(r[s]) ? [r[s]] : r[s];
                    r = r[s] = a || (isNaN(t[o + 1]) ? {} : [])
                } else r = r[s] = n
            }
        }

        function u(e) {
            var t = {};
            if (!e || "string" != typeof e) return t;
            var n = e;
            "?" === n.charAt(0) && (n = n.substr(1));
            for (var r = n.replace(/\+/g, " ").split("&"), i = 0; i < r.length; i++) {
                var o = r[i].split("="),
                    u = decodeURIComponent(o[0]);
                if (u) {
                    var l = u.split("]["),
                        c = l.length - 1;
                    if (/\[/.test(l[0]) && /\]$/.test(l[c]) ? (l[c] = l[c].replace(/\]$/, ""), l = l.shift().split("[").concat(l), c = l.length - 1) : c = 0, o.length >= 2) {
                        var h = o[1] ? decodeURIComponent(o[1]) : "";
                        c ? a(t, l, h) : t[u] = s(t[u], h)
                    } else t[u] = !0
                }
            }
            return t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.relativeToFile = n, e.join = r, e.buildQueryString = o, e.parseQueryString = u;
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            c = encodeURIComponent,
            h = function(e) {
                return c(e).replace("%24", "$")
            }
    }), define("aurelia-polyfills", ["aurelia-pal"], function(e) {
        "use strict";
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        };
        "undefined" == typeof FEATURE_NO_ES2015 && (function(n, r) {
            if (!(r in n)) {
                var i, o = e.PLATFORM.global,
                    s = 0,
                    a = "" + Math.random(),
                    u = "__symbol:",
                    l = u.length,
                    c = "__symbol@@" + a,
                    h = "defineProperty",
                    d = "defineProperties",
                    p = "getOwnPropertyNames",
                    f = "getOwnPropertyDescriptor",
                    v = "propertyIsEnumerable",
                    m = n[p],
                    g = n[f],
                    y = n.create,
                    b = n.keys,
                    w = n[h],
                    _ = n[d],
                    x = g(n, p),
                    S = n.prototype,
                    C = S.hasOwnProperty,
                    k = S[v],
                    E = S.toString,
                    O = (Array.prototype.indexOf, function(e, t, n) {
                        C.call(e, c) || w(e, c, {
                            enumerable: !1,
                            configurable: !1,
                            writable: !1,
                            value: {}
                        }), e[c]["@@" + t] = n
                    }),
                    M = function(e, n) {
                        var r = y(e);
                        return null !== n && "object" === (void 0 === n ? "undefined" : t(n)) && m(n).forEach(function(e) {
                            j.call(n, e) && V(r, e, n[e])
                        }), r
                    },
                    R = function(e) {
                        var t = y(e);
                        return t.enumerable = !1, t
                    },
                    A = function() {},
                    P = function(e) {
                        return e != c && !C.call(N, e)
                    },
                    T = function(e) {
                        return e != c && C.call(N, e)
                    },
                    j = function(e) {
                        var t = "" + e;
                        return T(t) ? C.call(this, t) && this[c]["@@" + t] : k.call(this, e)
                    },
                    L = function(e) {
                        return w(S, e, {
                            enumerable: !1,
                            configurable: !0,
                            get: A,
                            set: function(t) {
                                i(this, e, {
                                    enumerable: !1,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                }), O(this, e, !0)
                            }
                        }), N[e] = w(n(e), "constructor", D)
                    },
                    F = function(e) {
                        if (this && this !== o) throw new TypeError("Symbol is not a constructor");
                        return L(u.concat(e || "", a, ++s))
                    },
                    N = y(null),
                    D = {
                        value: F
                    },
                    I = function(e) {
                        return N[e]
                    },
                    V = function(e, t, n) {
                        var r = "" + t;
                        return T(r) ? (i(e, r, n.enumerable ? R(n) : n), O(e, r, !!n.enumerable)) : w(e, t, n), e
                    },
                    B = function(e) {
                        return e = "[object String]" === E.call(e) ? e.split("") : n(e), m(e).filter(T).map(I)
                    };
                x.value = V, w(n, h, x), x.value = B, w(n, r, x), x.value = function(e) {
                    return m(e).filter(P)
                }, w(n, p, x), x.value = function(e, t) {
                    var n = B(t);
                    return n.length ? b(t).concat(n).forEach(function(n) {
                        j.call(t, n) && V(e, n, t[n])
                    }) : _(e, t), e
                }, w(n, d, x), x.value = j, w(S, v, x), x.value = F, w(o, "Symbol", x), x.value = function(e) {
                    var t = u.concat(u, e, a);
                    return t in S ? N[t] : L(t)
                }, w(F, "for", x), x.value = function(e) {
                    return C.call(N, e) ? e.slice(2 * l, -a.length) : void 0
                }, w(F, "keyFor", x), x.value = function(e, t) {
                    var n = g(e, t);
                    return n && T(t) && (n.enumerable = j.call(e, t)), n
                }, w(n, f, x), x.value = function(e, t) {
                    return 1 === arguments.length ? y(e) : M(e, t)
                }, w(n, "create", x), x.value = function() {
                    var e = E.call(this);
                    return "[object String]" === e && T(this) ? "[object Symbol]" : e
                }, w(S, "toString", x);
                try {
                    i = y(w({}, u, {
                        get: function() {
                            return w(this, u, {
                                value: !1
                            })[u]
                        }
                    }))[u] || w
                } catch (e) {
                    i = function(e, t, n) {
                        var r = g(S, t);
                        delete S[t], w(e, t, n), w(S, t, r)
                    }
                }
            }
        }(Object, "getOwnPropertySymbols"), function(e, t) {
            var n, r = e.defineProperty,
                i = e.prototype,
                o = i.toString;
            ["iterator", "match", "replace", "search", "split", "hasInstance", "isConcatSpreadable", "unscopables", "species", "toPrimitive", "toStringTag"].forEach(function(t) {
                if (!(t in Symbol)) switch (r(Symbol, t, {
                    value: Symbol(t)
                }), t) {
                    case "toStringTag":
                        n = e.getOwnPropertyDescriptor(i, "toString"), n.value = function() {
                            var e = o.call(this),
                                t = void 0 === this || null === this ? void 0 : this[Symbol.toStringTag];
                            return void 0 === t ? e : "[object " + t + "]"
                        }, r(i, "toString", n)
                }
            })
        }(Object, Symbol), function(e, t, n) {
            function r() {
                return this
            }
            t[e] || (t[e] = function() {
                var t = 0,
                    n = this,
                    i = {
                        next: function() {
                            var e = n.length <= t;
                            return e ? {
                                done: e
                            } : {
                                done: e,
                                value: n[t++]
                            }
                        }
                    };
                return i[e] = r, i
            }), n[e] || (n[e] = function() {
                var t = String.fromCodePoint,
                    n = this,
                    i = 0,
                    o = n.length,
                    s = {
                        next: function() {
                            var e = o <= i,
                                r = e ? "" : t(n.codePointAt(i));
                            return i += r.length, e ? {
                                done: e
                            } : {
                                done: e,
                                value: r
                            }
                        }
                    };
                return s[e] = r, s
            })
        }(Symbol.iterator, Array.prototype, String.prototype)), "undefined" == typeof FEATURE_NO_ES2015 && (Number.isNaN = Number.isNaN || function(e) {
            return e !== e
        }, Number.isFinite = Number.isFinite || function(e) {
            return "number" == typeof e && isFinite(e)
        }), String.prototype.endsWith && ! function() {
            try {
                return !"ab".endsWith("a", 1)
            } catch (e) {
                return !0
            }
        }() || (String.prototype.endsWith = function(e, t) {
            var n = this.toString();
            ("number" != typeof t || !isFinite(t) || Math.floor(t) !== t || t > n.length) && (t = n.length), t -= e.length;
            var r = n.indexOf(e, t);
            return -1 !== r && r === t
        }), String.prototype.startsWith && ! function() {
            try {
                return !"ab".startsWith("b", 1)
            } catch (e) {
                return !0
            }
        }() || (String.prototype.startsWith = function(e, t) {
            return t = t || 0, this.substr(t, e.length) === e
        }), "undefined" == typeof FEATURE_NO_ES2015 && (Array.from || (Array.from = function() {
            var e = function(e) {
                    return isNaN(e = +e) ? 0 : (e > 0 ? Math.floor : Math.ceil)(e)
                },
                t = function(t) {
                    return t > 0 ? Math.min(e(t), 9007199254740991) : 0
                },
                n = function(e, t, n, r) {
                    try {
                        return t(n, r)
                    } catch (t) {
                        throw "function" == typeof e.return && e.return(), t
                    }
                };
            return function(e) {
                var r, i, o, s, a = Object(e),
                    u = "function" == typeof this ? this : Array,
                    l = arguments.length,
                    c = l > 1 ? arguments[1] : void 0,
                    h = void 0 !== c,
                    d = 0,
                    p = a[Symbol.iterator];
                if (h && (c = c.bind(l > 2 ? arguments[2] : void 0)), void 0 == p || Array.isArray(e))
                    for (r = t(a.length), i = new u(r); r > d; d++) i[d] = h ? c(a[d], d) : a[d];
                else
                    for (s = p.call(a), i = new u; !(o = s.next()).done; d++) i[d] = h ? n(s, c, o.value, d) : o.value;
                return i.length = d, i
            }
        }()), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            configurable: !0,
            writable: !0,
            enumerable: !1,
            value: function(e) {
                if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
                if ("function" != typeof e) throw new TypeError("predicate must be a function");
                for (var t, n = Object(this), r = n.length >>> 0, i = arguments[1], o = 0; o < r; o++)
                    if (t = n[o], e.call(i, t, o, n)) return t
            }
        }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
            configurable: !0,
            writable: !0,
            enumerable: !1,
            value: function(e) {
                if (null === this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
                if ("function" != typeof e) throw new TypeError("predicate must be a function");
                for (var t, n = Object(this), r = n.length >>> 0, i = arguments[1], o = 0; o < r; o++)
                    if (t = n[o], e.call(i, t, o, n)) return o;
                return -1
            }
        })), "undefined" != typeof FEATURE_NO_ES2016 || Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            configurable: !0,
            writable: !0,
            enumerable: !1,
            value: function(e) {
                var t = Object(this),
                    n = parseInt(t.length) || 0;
                if (0 === n) return !1;
                var r, i = parseInt(arguments[1]) || 0;
                i >= 0 ? r = i : (r = n + i) < 0 && (r = 0);
                for (var o; r < n;) {
                    if (o = t[r], e === o || e !== e && o !== o) return !0;
                    r++
                }
                return !1
            }
        }), "undefined" == typeof FEATURE_NO_ES2015 && (function() {
            var e = !1;
            try {
                var t = Object.keys("a");
                e = 1 !== t.length || "0" !== t[0]
            } catch (t) {
                e = !0
            }
            e && (Object.keys = function() {
                var e = Object.prototype.hasOwnProperty,
                    t = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    r = n.length;
                return function(i) {
                    if (void 0 === i || null === i) throw TypeError("Cannot convert undefined or null to object");
                    i = Object(i);
                    var o, s, a = [];
                    for (o in i) e.call(i, o) && a.push(o);
                    if (t)
                        for (s = 0; s < r; s++) e.call(i, n[s]) && a.push(n[s]);
                    return a
                }
            }())
        }(), function(e) {
            "assign" in e || e.defineProperty(e, "assign", {
                configurable: !0,
                writable: !0,
                value: function() {
                    var t = e.getOwnPropertySymbols,
                        n = e.propertyIsEnumerable,
                        r = t ? function(e) {
                            return t(e).filter(n, e)
                        } : function() {
                            return Array.prototype
                        };
                    return function(n) {
                        function i(e) {
                            n[e] = a[e]
                        }!t || n instanceof e || console.warn("problematic Symbols", n);
                        for (var o = 1, s = arguments.length; o < s; ++o) {
                            var a = arguments[o];
                            null !== a && void 0 !== a && e.keys(a).concat(r(a)).forEach(i)
                        }
                        return n
                    }
                }()
            })
        }(Object)), "undefined" == typeof FEATURE_NO_ES2015 && function(e) {
            function t(e, t) {
                function r(e) {
                    if (!this || this.constructor !== r) return new r(e);
                    this._keys = [], this._values = [], this._itp = [], this.objectOnly = t, e && n.call(this, e)
                }
                return t || b(e, "size", {
                    get: m
                }), e.constructor = r, r.prototype = e, r
            }

            function n(e) {
                this.add ? e.forEach(this.add, this) : e.forEach(function(e) {
                    this.set(e[0], e[1])
                }, this)
            }

            function r(e) {
                return this.has(e) && (this._keys.splice(y, 1), this._values.splice(y, 1), this._itp.forEach(function(e) {
                    y < e[0] && e[0]--
                })), -1 < y
            }

            function i(e) {
                return this.has(e) ? this._values[y] : void 0
            }

            function o(e, t) {
                if (this.objectOnly && t !== Object(t)) throw new TypeError("Invalid value used as weak collection key");
                if (t != t || 0 === t)
                    for (y = e.length; y-- && !w(e[y], t););
                else y = e.indexOf(t);
                return -1 < y
            }

            function s(e) {
                return o.call(this, this._values, e)
            }

            function a(e) {
                return o.call(this, this._keys, e)
            }

            function u(e, t) {
                return this.has(e) ? this._values[y] = t : this._values[this._keys.push(e) - 1] = t, this
            }

            function l(e) {
                return this.has(e) || this._values.push(e), this
            }

            function c() {
                (this._keys || 0).length = this._values.length = 0
            }

            function h() {
                return v(this._itp, this._keys)
            }

            function d() {
                return v(this._itp, this._values)
            }

            function p() {
                return v(this._itp, this._keys, this._values)
            }

            function f() {
                return v(this._itp, this._values, this._values)
            }

            function v(e, t, n) {
                var r, i = [0],
                    o = !1;
                return e.push(i), r = {}, r[Symbol.iterator] = function() {
                    return this
                }, r.next = function() {
                    var r, s = i[0];
                    return !o && s < t.length ? (r = n ? [t[s], n[s]] : t[s], i[0]++) : (o = !0, e.splice(e.indexOf(i), 1)), {
                        done: o,
                        value: r
                    }
                }, r
            }

            function m() {
                return this._values.length
            }

            function g(e, t) {
                for (var n = this.entries();;) {
                    var r = n.next();
                    if (r.done) break;
                    e.call(t, r.value[1], r.value[0], this)
                }
            }
            var y, b = Object.defineProperty,
                w = function(e, t) {
                    return e === t || e !== e && t !== t
                };
            if ("undefined" == typeof WeakMap && (e.WeakMap = t({
                    delete: r,
                    clear: c,
                    get: i,
                    has: a,
                    set: u
                }, !0)), "undefined" == typeof Map || "function" != typeof(new Map).values || !(new Map).values().next) {
                var _;
                e.Map = t((_ = {
                    delete: r,
                    has: a,
                    get: i,
                    set: u,
                    keys: h,
                    values: d,
                    entries: p,
                    forEach: g,
                    clear: c
                }, _[Symbol.iterator] = p, _))
            }
            if ("undefined" == typeof Set || "function" != typeof(new Set).values || !(new Set).values().next) {
                var x;
                e.Set = t((x = {
                    has: s,
                    add: l,
                    delete: r,
                    clear: c,
                    keys: d,
                    values: d,
                    entries: f,
                    forEach: g
                }, x[Symbol.iterator] = d, x))
            }
            "undefined" == typeof WeakSet && (e.WeakSet = t({
                delete: r,
                add: l,
                clear: c,
                has: s
            }, !0))
        }(e.PLATFORM.global), "undefined" == typeof FEATURE_NO_ES2015 && function() {
            var n = Function.prototype.bind;
            void 0 === e.PLATFORM.global.Reflect && (e.PLATFORM.global.Reflect = {}), "function" != typeof Reflect.defineProperty && (Reflect.defineProperty = function(e, n, r) {
                if ("object" === (void 0 === e ? "undefined" : t(e)) ? null === e : "function" != typeof e) throw new TypeError("Reflect.defineProperty called on non-object");
                try {
                    return Object.defineProperty(e, n, r), !0
                } catch (e) {
                    return !1
                }
            }), "function" != typeof Reflect.construct && (Reflect.construct = function(e, t) {
                if (t) switch (t.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0], t[1]);
                    case 3:
                        return new e(t[0], t[1], t[2]);
                    case 4:
                        return new e(t[0], t[1], t[2], t[3])
                }
                var r = [null];
                return r.push.apply(r, t), new(n.apply(e, r))
            }), "function" != typeof Reflect.ownKeys && (Reflect.ownKeys = function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            })
        }(), "undefined" == typeof FEATURE_NO_ESNEXT && function() {
            var e = Object.freeze({});
            "function" != typeof Reflect.getOwnMetadata && (Reflect.getOwnMetadata = function(t, n, r) {
                if (n.hasOwnProperty("__metadata__")) return (n.__metadata__[r] || e)[t]
            }), "function" != typeof Reflect.defineMetadata && (Reflect.defineMetadata = function(e, t, n, r) {
                var i = n.hasOwnProperty("__metadata__") ? n.__metadata__ : n.__metadata__ = {};
                (i[r] || (i[r] = {}))[e] = t
            }), "function" != typeof Reflect.metadata && (Reflect.metadata = function(e, t) {
                return function(n, r) {
                    Reflect.defineMetadata(e, t, n, r)
                }
            })
        }()
    }), define("aurelia-route-recognizer", ["exports", "aurelia-path"], function(e, t) {
        "use strict";

        function n(e, t, n, r) {
            var i = e;
            "/" === e.charAt(0) && (i = e.substr(1));
            for (var o = [], s = i.split("/"), a = 0, u = s.length; a < u; ++a) {
                var l = s[a],
                    f = l.match(/^:([^?]+)(\?)?$/);
                if (f) {
                    var v = f,
                        m = v[1],
                        g = v[2];
                    if (-1 !== m.indexOf("=")) throw new Error("Parameter " + m + " in route " + e + " has a default value, which is not supported.");
                    o.push(new h(m, !!g)), t.push(m), n.dynamics++
                } else f = l.match(/^\*(.+)$/), f ? (o.push(new d(f[1])), t.push(f[1]), n.stars++) : "" === l ? o.push(new p) : (o.push(new c(l, r)), n.statics++)
            }
            return o
        }

        function r(e) {
            return e.sort(function(e, t) {
                if (e.types.stars !== t.types.stars) return e.types.stars - t.types.stars;
                if (e.types.stars) {
                    if (e.types.statics !== t.types.statics) return t.types.statics - e.types.statics;
                    if (e.types.dynamics !== t.types.dynamics) return t.types.dynamics - e.types.dynamics
                }
                return e.types.dynamics !== t.types.dynamics ? e.types.dynamics - t.types.dynamics : e.types.statics !== t.types.statics ? t.types.statics - e.types.statics : 0
            })
        }

        function i(e, t) {
            for (var n = [], r = 0, i = e.length; r < i; r++) {
                var o = e[r];
                n.push.apply(n, o.match(t))
            }
            for (var s = n.filter(function(e) {
                    return e.epsilon
                }); s.length > 0;) ! function() {
                var e = [];
                s.forEach(function(t) {
                    n.push.apply(n, t.epsilon), e.push.apply(e, t.epsilon)
                }), s = e.filter(function(e) {
                    return e.epsilon
                })
            }();
            return n
        }

        function o(e, t, n) {
            for (var r = e.handlers, i = e.regex, o = t.match(i), s = 1, a = new f(n), u = 0, l = r.length; u < l; u++) {
                for (var c = r[u], h = c.names, d = {}, p = 0, v = h.length; p < v; p++) d[h[p]] = o[s++];
                a.push({
                    handler: c.handler,
                    params: d,
                    isDynamic: !!h.length
                })
            }
            return a
        }

        function s(e, t) {
            var n = e.put({
                validChars: "/"
            });
            return t.eachChar(function(e) {
                n = n.put(e)
            }), t.optional && (e.epsilon = e.epsilon || [], e.epsilon.push(n)), n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.RouteRecognizer = e.EpsilonSegment = e.StarSegment = e.DynamicSegment = e.StaticSegment = e.State = void 0;
        var a = e.State = function() {
                function e(e) {
                    this.charSpec = e, this.nextStates = []
                }
                return e.prototype.get = function(e) {
                    for (var t = this.nextStates, n = Array.isArray(t), r = 0, t = n ? t : t[Symbol.iterator]();;) {
                        var i;
                        if (n) {
                            if (r >= t.length) break;
                            i = t[r++]
                        } else {
                            if (r = t.next(), r.done) break;
                            i = r.value
                        }
                        var o = i;
                        if (o.charSpec.validChars === e.validChars && o.charSpec.invalidChars === e.invalidChars) return o
                    }
                }, e.prototype.put = function(t) {
                    var n = this.get(t);
                    return n || (n = new e(t), this.nextStates.push(n), t.repeat && n.nextStates.push(n), n)
                }, e.prototype.match = function(e) {
                    for (var t = this.nextStates, n = [], r = 0, i = t.length; r < i; r++) {
                        var o = t[r],
                            s = o.charSpec;
                        void 0 !== s.validChars ? -1 !== s.validChars.indexOf(e) && n.push(o) : void 0 !== s.invalidChars && -1 === s.invalidChars.indexOf(e) && n.push(o)
                    }
                    return n
                }, e
            }(),
            u = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"],
            l = new RegExp("(\\" + u.join("|\\") + ")", "g"),
            c = e.StaticSegment = function() {
                function e(e, t) {
                    this.string = e, this.caseSensitive = t
                }
                return e.prototype.eachChar = function(e) {
                    for (var t = this.string, n = 0, r = t.length; n < r; ++n) {
                        var i = t[n];
                        e({
                            validChars: this.caseSensitive ? i : i.toUpperCase() + i.toLowerCase()
                        })
                    }
                }, e.prototype.regex = function() {
                    return this.string.replace(l, "\\$1")
                }, e.prototype.generate = function() {
                    return this.string
                }, e
            }(),
            h = e.DynamicSegment = function() {
                function e(e, t) {
                    this.name = e, this.optional = t
                }
                return e.prototype.eachChar = function(e) {
                    e({
                        invalidChars: "/",
                        repeat: !0
                    })
                }, e.prototype.regex = function() {
                    return this.optional ? "([^/]+)?" : "([^/]+)"
                }, e.prototype.generate = function(e, t) {
                    return t[this.name] = !0, e[this.name]
                }, e
            }(),
            d = e.StarSegment = function() {
                function e(e) {
                    this.name = e
                }
                return e.prototype.eachChar = function(e) {
                    e({
                        invalidChars: "",
                        repeat: !0
                    })
                }, e.prototype.regex = function() {
                    return "(.+)"
                }, e.prototype.generate = function(e, t) {
                    return t[this.name] = !0, e[this.name]
                }, e
            }(),
            p = e.EpsilonSegment = function() {
                function e() {}
                return e.prototype.eachChar = function() {}, e.prototype.regex = function() {
                    return ""
                }, e.prototype.generate = function() {
                    return ""
                }, e
            }(),
            f = (e.RouteRecognizer = function() {
                function e() {
                    this.rootState = new a, this.names = {}
                }
                return e.prototype.add = function(e) {
                    var t = this;
                    if (Array.isArray(e)) return void e.forEach(function(e) {
                        return t.add(e)
                    });
                    for (var r = this.rootState, i = "^", o = {
                            statics: 0,
                            dynamics: 0,
                            stars: 0
                        }, a = [], u = e.handler.name, l = !0, c = !0, h = n(e.path, a, o, e.caseSensitive), d = 0, f = h.length; d < f; d++) {
                        var v = h[d];
                        v instanceof p || (l = !1, c = c && v.optional, r = s(r, v), i += v.optional ? "/?" : "/", i += v.regex())
                    }
                    if (c)
                        if (l) r = r.put({
                            validChars: "/"
                        }), i += "/";
                        else {
                            var m = this.rootState.put({
                                validChars: "/"
                            });
                            r.epsilon = [m], r = m
                        } var g = [{
                        handler: e.handler,
                        names: a
                    }];
                    if (u)
                        for (var y = Array.isArray(u) ? u : [u], b = 0; b < y.length; b++) this.names[y[b]] = {
                            segments: h,
                            handlers: g
                        };
                    return r.handlers = g, r.regex = new RegExp(i + "$", e.caseSensitive ? "" : "i"), r.types = o, r
                }, e.prototype.handlersFor = function(e) {
                    var t = this.names[e];
                    if (!t) throw new Error("There is no route named " + e);
                    return [].concat(t.handlers)
                }, e.prototype.hasRoute = function(e) {
                    return !!this.names[e]
                }, e.prototype.generate = function(e, n) {
                    var r = this.names[e];
                    if (!r) throw new Error("There is no route named " + e);
                    var i = r.handlers[0].handler;
                    if (i.generationUsesHref) return i.href;
                    for (var o = Object.assign({}, n), s = r.segments, a = {}, u = "", l = 0, c = s.length; l < c; l++) {
                        var h = s[l];
                        if (!(h instanceof p)) {
                            var d = h.generate(o, a);
                            if (null === d || void 0 === d) {
                                if (!h.optional) throw new Error("A value is required for route parameter '" + h.name + "' in route '" + e + "'.")
                            } else u += "/", u += d
                        }
                    }
                    "/" !== u.charAt(0) && (u = "/" + u);
                    for (var f in a) delete o[f];
                    var v = (0, t.buildQueryString)(o);
                    return u += v ? "?" + v : ""
                }, e.prototype.recognize = function(e) {
                    var n = [this.rootState],
                        s = {},
                        a = !1,
                        u = e,
                        l = u.indexOf("?");
                    if (-1 !== l) {
                        var c = u.substr(l + 1, u.length);
                        u = u.substr(0, l), s = (0, t.parseQueryString)(c)
                    }
                    u = decodeURI(u), "/" !== u.charAt(0) && (u = "/" + u);
                    var h = u.length;
                    h > 1 && "/" === u.charAt(h - 1) && (u = u.substr(0, h - 1), a = !0);
                    for (var d = 0, p = u.length; d < p && (n = i(n, u.charAt(d)), n.length); d++);
                    for (var f = [], v = 0, m = n.length; v < m; v++) n[v].handlers && f.push(n[v]);
                    n = r(f);
                    var g = f[0];
                    if (g && g.handlers) return a && "(.+)$" === g.regex.source.slice(-5) && (u += "/"), o(g, u, s)
                }, e
            }(), function(e) {
                this.splice = Array.prototype.splice, this.slice = Array.prototype.slice, this.push = Array.prototype.push, this.length = 0, this.queryParams = e || {}
            })
    }), define("aurelia-router", ["exports", "aurelia-logging", "aurelia-route-recognizer", "aurelia-dependency-injection", "aurelia-history", "aurelia-event-aggregator"], function(e, t, n, r, i, o) {
        "use strict";

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function u(e, t) {
            var n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2];
            return t || "#" === e[0] || (e = "#" + e), t && n && (e = e.substring(1, e.length)), e
        }

        function l(e, t, n, r) {
            if (D.test(e)) return e;
            var i = "";
            return t.length && "/" !== t[0] && (i += "/"), i += t, i.length && "/" === i[i.length - 1] || "/" === e[0] || (i += "/"), i.length && "/" === i[i.length - 1] && "/" === e[0] && (i = i.substring(0, i.length - 1)), u(i + e, n, r)
        }

        function c(e, t, n) {
            return N.test(e) ? u(e, n) : l(e, t, n)
        }

        function h(e, t) {
            return function(e) {
                return Promise.resolve({
                    status: t,
                    output: e,
                    completed: t === I.completed
                })
            }
        }

        function d(e) {
            e.previousInstruction = null, e.plan = null
        }

        function p(e) {
            return e && "function" == typeof e.navigate
        }

        function f(e, t) {
            var n = e.previousInstruction,
                r = e.config,
                i = {};
            if ("redirect" in r) {
                var o = c(r.redirect, m(e));
                return e.queryString && (o += "?" + e.queryString), Promise.reject(new H(o))
            }
            if (n) {
                var s = v(n, e),
                    a = [];
                for (var u in n.viewPortInstructions) ! function(o) {
                    var u = n.viewPortInstructions[o],
                        l = r.viewPorts[o];
                    if (!l) throw new Error('Invalid Route Config: Configuration for viewPort "' + o + '" was not found for route: "' + e.config.route + '."');
                    var c = i[o] = {
                        name: o,
                        config: l,
                        prevComponent: u.component,
                        prevModuleId: u.moduleId
                    };
                    if (u.moduleId !== l.moduleId) c.strategy = Y.replace;
                    else if ("determineActivationStrategy" in u.component.viewModel) {
                        var h;
                        c.strategy = (h = u.component.viewModel).determineActivationStrategy.apply(h, e.lifecycleArgs)
                    } else r.activationStrategy ? c.strategy = r.activationStrategy : c.strategy = s || t ? Y.invokeLifecycle : Y.noChange;
                    if (c.strategy !== Y.replace && u.childRouter) {
                        var d = e.getWildcardPath(),
                            p = u.childRouter._createNavigationInstruction(d, e).then(function(e) {
                                return c.childNavigationInstruction = e, f(e, c.strategy === Y.invokeLifecycle).then(function(t) {
                                    e.plan = t
                                })
                            });
                        a.push(p)
                    }
                }(u);
                return Promise.all(a).then(function() {
                    return i
                })
            }
            for (var l in r.viewPorts) i[l] = {
                name: l,
                strategy: Y.replace,
                config: e.config.viewPorts[l]
            };
            return Promise.resolve(i)
        }

        function v(e, t) {
            var n = e.params,
                r = t.params,
                i = t.config.hasChildRouter ? t.getWildCardName() : null;
            for (var o in r)
                if (o !== i && n[o] !== r[o]) return !0;
            for (var s in n)
                if (s !== i && n[s] !== r[s]) return !0;
            if (!t.options.compareQueryParams) return !1;
            var a = e.queryParams,
                u = t.queryParams;
            for (var l in u)
                if (a[l] !== u[l]) return !0;
            for (var c in a)
                if (a[c] !== u[c]) return !0;
            return !1
        }

        function m(e) {
            var t = [];
            for (e = e.parentInstruction; e;) t.unshift(e.getBaseUrl()), e = e.parentInstruction;
            return t.unshift("/"), t.join("")
        }

        function g(e, t) {
            if ("object" !== (void 0 === e ? "undefined" : L(e))) throw new Error("Invalid Route Config");
            if ("string" != typeof e.route) {
                var n = e.name || "(no name)";
                throw new Error('Invalid Route Config for "' + n + '": You must specify a "route:" pattern.')
            }
            if (!("redirect" in e || e.moduleId || e.navigationStrategy || e.viewPorts)) throw new Error('Invalid Route Config for "' + e.route + '": You must specify a "moduleId:", "redirect:", "navigationStrategy:", or "viewPorts:".')
        }

        function y(e, t, n) {
            return Promise.resolve(t.call(n, e)).then(function() {
                return "viewPorts" in e.config || (e.config.viewPorts = {
                    default: {
                        moduleId: e.config.moduleId
                    }
                }), e
            })
        }

        function b(e, t, n, r) {
            function i(e) {
                return r || C(e) ? o() : n.cancel(e)
            }

            function o() {
                if (a--) try {
                    return k(s[a][t](), i, n.cancel)
                } catch (e) {
                    return n.cancel(e)
                }
                return n()
            }
            var s = w(e, t),
                a = s.length;
            return o()
        }

        function w(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2];
            for (var r in e) {
                var i = e[r],
                    o = i.prevComponent;
                if ((i.strategy === Y.invokeLifecycle || i.strategy === Y.replace) && o) {
                    var s = o.viewModel;
                    t in s && n.push(s)
                }
                i.childNavigationInstruction ? w(i.childNavigationInstruction.plan, t, n) : o && _(o, t, n)
            }
            return n
        }

        function _(e, t, n) {
            var r = e.childRouter;
            if (r && r.currentInstruction) {
                var i = r.currentInstruction.viewPortInstructions;
                for (var o in i) {
                    var s = i[o],
                        a = s.component,
                        u = a.viewModel;
                    t in u && n.push(u), _(a, t, n)
                }
            }
        }

        function x(e, t, n, r) {
            function i(e, t) {
                return r || C(e, t) ? o() : n.cancel(e)
            }

            function o() {
                if (++u < a) try {
                    var e = function() {
                        var e, r = s[u];
                        return {
                            v: k((e = r.viewModel)[t].apply(e, r.lifecycleArgs), function(e) {
                                return i(e, r.router)
                            }, n.cancel)
                        }
                    }();
                    if ("object" === (void 0 === e ? "undefined" : L(e))) return e.v
                } catch (e) {
                    return n.cancel(e)
                }
                return n()
            }
            var s = S(e, t),
                a = s.length,
                u = -1;
            return o()
        }

        function S(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2],
                r = arguments[3],
                i = e.plan;
            return Object.keys(i).filter(function(o) {
                var s = i[o],
                    a = e.viewPortInstructions[o],
                    u = a.component.viewModel;
                (s.strategy === Y.invokeLifecycle || s.strategy === Y.replace) && t in u && n.push({
                    viewModel: u,
                    lifecycleArgs: a.lifecycleArgs,
                    router: r
                }), s.childNavigationInstruction && S(s.childNavigationInstruction, t, n, a.component.childRouter || r)
            }), n
        }

        function C(e, t) {
            return !(e instanceof Error) && (p(e) ? ("function" == typeof e.setRouter && e.setRouter(t), !!e.shouldContinueProcessing) : void 0 === e || e)
        }

        function k(e, t, n) {
            if (e && "function" == typeof e.then) return Promise.resolve(e).then(t).catch(n);
            if (e && "function" == typeof e.subscribe) {
                var r = function() {
                    var r = e;
                    return {
                        v: new X(function(i) {
                            return r.subscribe({
                                next: function() {
                                    i.subscribed && (i.unsubscribe(), t(e))
                                },
                                error: function(e) {
                                    i.subscribed && (i.unsubscribe(), n(e))
                                },
                                complete: function() {
                                    i.subscribed && (i.unsubscribe(), t(e))
                                }
                            })
                        })
                    }
                }();
                if ("object" === (void 0 === r ? "undefined" : L(r))) return r.v
            }
            try {
                return t(e)
            } catch (e) {
                return n(e)
            }
        }

        function E(e, t) {
            var n = O(t),
                r = n.map(function(t) {
                    return M(e, t.navigationInstruction, t.viewPortPlan)
                });
            return Promise.all(r)
        }

        function O(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1],
                n = e.plan;
            for (var r in n) {
                var i = n[r];
                if (i.strategy === Y.replace) t.push({
                    viewPortPlan: i,
                    navigationInstruction: e
                }), i.childNavigationInstruction && O(i.childNavigationInstruction, t);
                else {
                    var o = e.addViewPortInstruction(r, i.strategy, i.prevModuleId, i.prevComponent);
                    i.childNavigationInstruction && (o.childNavigationInstruction = i.childNavigationInstruction, O(i.childNavigationInstruction, t))
                }
            }
            return t
        }

        function M(e, t, n) {
            var r = n.config.moduleId;
            return R(e, t, n.config).then(function(i) {
                var o = t.addViewPortInstruction(n.name, n.strategy, r, i),
                    s = i.childRouter;
                if (s) {
                    var a = t.getWildcardPath();
                    return s._createNavigationInstruction(a, t).then(function(t) {
                        return n.childNavigationInstruction = t, f(t).then(function(n) {
                            return t.plan = n, o.childNavigationInstruction = t, E(e, t)
                        })
                    })
                }
            })
        }

        function R(e, t, n) {
            var r = t.router,
                i = t.lifecycleArgs;
            return e.loadRoute(r, n, t).then(function(e) {
                var t = e.viewModel,
                    o = e.childContainer;
                if (e.router = r, e.config = n, "configureRouter" in t) {
                    var s = function() {
                        var n = o.getChildRouter();
                        return e.childRouter = n, {
                            v: n.configure(function(e) {
                                return t.configureRouter.apply(t, [e, n].concat(i))
                            }).then(function() {
                                return e
                            })
                        }
                    }();
                    if ("object" === (void 0 === s ? "undefined" : L(s))) return s.v
                }
                return e
            })
        }

        function A(e, t, n, r) {
            t && "completed" in t && "output" in t || (t = t || {}, t.output = new Error("Expected router pipeline to return a navigation result, but got [" + JSON.stringify(t) + "] instead."));
            var i = null;
            return p(t.output) ? t.output.navigate(r) : (i = t, t.completed || (t.output instanceof Error && re.error(t.output), T(r))), r._dequeueInstruction(n + 1).then(function(e) {
                return i || e || t
            })
        }

        function P(e, t, n, r) {
            e.resolve(t);
            var i = {
                instruction: e,
                result: t
            };
            if (n) r.events.publish("router:navigation:child:complete", i);
            else {
                r.isNavigating = !1, r.isExplicitNavigation = !1, r.isExplicitNavigationBack = !1;
                var o = void 0;
                if (t.output instanceof Error) o = "error";
                else if (t.completed) {
                    var s = e.queryString ? "?" + e.queryString : "";
                    r.history.previousLocation = e.fragment + s, o = "success"
                } else o = "canceled";
                r.events.publish("router:navigation:" + o, i), r.events.publish("router:navigation:complete", i)
            }
            return t
        }

        function T(e) {
            e.history.previousLocation ? e.navigate(e.history.previousLocation, {
                trigger: !1,
                replace: !0
            }) : e.fallbackRoute ? e.navigate(e.fallbackRoute, {
                trigger: !0,
                replace: !0
            }) : re.error("Router navigation failed, and no previous location or fallbackRoute could be restored.")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.AppRouter = e.PipelineProvider = e.LoadRouteStep = e.RouteLoader = e.ActivateNextStep = e.DeactivatePreviousStep = e.CanActivateNextStep = e.CanDeactivatePreviousStep = e.Router = e.BuildNavigationPlanStep = e.activationStrategy = e.RouterConfiguration = e.RedirectToRoute = e.Redirect = e.NavModel = e.NavigationInstruction = e.CommitChangesStep = e.Pipeline = e.pipelineStatus = void 0, e._normalizeAbsolutePath = u, e._createRootedPath = l, e._resolveUrl = c, e.isNavigationCommand = p, e._buildNavigationPlan = f;
        var j = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(t),
            L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            F = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            N = /^#?\//,
            D = /^([a-z][a-z0-9+\-.]*:)?\/\//i,
            I = e.pipelineStatus = {
                completed: "completed",
                canceled: "canceled",
                rejected: "rejected",
                running: "running"
            },
            V = e.Pipeline = function() {
                function e() {
                    this.steps = []
                }
                return e.prototype.addStep = function(e) {
                    var t = void 0;
                    if ("function" == typeof e) t = e;
                    else {
                        if ("function" == typeof e.getSteps) {
                            for (var n = e.getSteps(), r = 0, i = n.length; r < i; r++) this.addStep(n[r]);
                            return this
                        }
                        t = e.run.bind(e)
                    }
                    return this.steps.push(t), this
                }, e.prototype.run = function(e) {
                    function t() {
                        if (!(++n < r.length)) return t.complete();
                        var i = r[n];
                        try {
                            return i(e, t)
                        } catch (e) {
                            return t.reject(e)
                        }
                    }
                    var n = -1,
                        r = this.steps;
                    return t.complete = h(t, I.completed), t.cancel = h(t, I.canceled), t.reject = h(t, I.rejected), t()
                }, e
            }(),
            B = e.CommitChangesStep = function() {
                function e() {}
                return e.prototype.run = function(e, t) {
                    return e._commitChanges(!0).then(function() {
                        return e._updateTitle(), t()
                    })
                }, e
            }(),
            q = e.NavigationInstruction = function() {
                function e(e) {
                    this.plan = null, this.options = {}, Object.assign(this, e), this.params = this.params || {}, this.viewPortInstructions = {};
                    var t = [],
                        n = this;
                    do {
                        var r = Object.assign({}, n.params);
                        n.config && n.config.hasChildRouter && delete r[n.getWildCardName()], t.unshift(r), n = n.parentInstruction
                    } while (n);
                    var i = Object.assign.apply(Object, [{}, this.queryParams].concat(t));
                    this.lifecycleArgs = [i, this.config, this]
                }
                return e.prototype.getAllInstructions = function() {
                    var e = [this];
                    for (var t in this.viewPortInstructions) {
                        var n = this.viewPortInstructions[t].childNavigationInstruction;
                        n && e.push.apply(e, n.getAllInstructions())
                    }
                    return e
                }, e.prototype.getAllPreviousInstructions = function() {
                    return this.getAllInstructions().map(function(e) {
                        return e.previousInstruction
                    }).filter(function(e) {
                        return e
                    })
                }, e.prototype.addViewPortInstruction = function(e, t, n, r) {
                    var i = Object.assign({}, this.lifecycleArgs[1], {
                        currentViewPort: e
                    });
                    return this.viewPortInstructions[e] = {
                        name: e,
                        strategy: t,
                        moduleId: n,
                        component: r,
                        childRouter: r.childRouter,
                        lifecycleArgs: [].concat(this.lifecycleArgs[0], i, this.lifecycleArgs[2])
                    }
                }, e.prototype.getWildCardName = function() {
                    var e = this.config.route.lastIndexOf("*");
                    return this.config.route.substr(e + 1)
                }, e.prototype.getWildcardPath = function() {
                    var e = this.getWildCardName(),
                        t = this.params[e] || "";
                    return this.queryString && (t += "?" + this.queryString), t
                }, e.prototype.getBaseUrl = function() {
                    var e = this,
                        t = this.fragment;
                    if ("" === t) {
                        var n = this.router.routes.find(function(t) {
                            return t.name === e.config.name && "" !== t.route
                        });
                        n && (t = n.route)
                    }
                    if (!this.params) return t;
                    var r = this.getWildCardName(),
                        i = this.params[r] || "";
                    return i ? (i = encodeURI(i), t.substr(0, t.lastIndexOf(i))) : t
                }, e.prototype._commitChanges = function(e) {
                    var t = this,
                        n = this.router;
                    n.currentInstruction = this, this.previousInstruction && (this.previousInstruction.config.navModel.isActive = !1), this.config.navModel.isActive = !0, n._refreshBaseUrl(), n.refreshNavigation();
                    var r = [],
                        i = [];
                    for (var o in this.viewPortInstructions) ! function(o) {
                        var s = t.viewPortInstructions[o],
                            a = n.viewPorts[o];
                        if (!a) throw new Error("There was no router-view found in the view for " + s.moduleId + ".");
                        s.strategy === Y.replace ? (e && i.push({
                            viewPort: a,
                            viewPortInstruction: s
                        }), r.push(a.process(s, e).then(function(e) {
                            if (s.childNavigationInstruction) return s.childNavigationInstruction._commitChanges()
                        }))) : s.childNavigationInstruction && r.push(s.childNavigationInstruction._commitChanges(e))
                    }(o);
                    return Promise.all(r).then(function() {
                        return i.forEach(function(e) {
                            return e.viewPort.swap(e.viewPortInstruction)
                        }), null
                    }).then(function() {
                        return d(t)
                    })
                }, e.prototype._updateTitle = function() {
                    var e = this._buildTitle();
                    e && this.router.history.setTitle(e)
                }, e.prototype._buildTitle = function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? " | " : arguments[0],
                        t = "",
                        n = [];
                    this.config.navModel.title && (t = this.router.transformTitle(this.config.navModel.title));
                    for (var r in this.viewPortInstructions) {
                        var i = this.viewPortInstructions[r];
                        if (i.childNavigationInstruction) {
                            var o = i.childNavigationInstruction._buildTitle(e);
                            o && n.push(o)
                        }
                    }
                    return n.length && (t = n.join(e) + (t ? e : "") + t), this.router.title && (t += (t ? e : "") + this.router.transformTitle(this.router.title)), t
                }, e
            }(),
            z = e.NavModel = function() {
                function e(e, t) {
                    this.isActive = !1, this.title = null, this.href = null, this.relativeHref = null, this.settings = {}, this.config = null, this.router = e, this.relativeHref = t
                }
                return e.prototype.setTitle = function(e) {
                    this.title = e, this.isActive && this.router.updateTitle()
                }, e
            }(),
            H = e.Redirect = function() {
                function e(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    this.url = e, this.options = Object.assign({
                        trigger: !0,
                        replace: !0
                    }, t), this.shouldContinueProcessing = !1
                }
                return e.prototype.setRouter = function(e) {
                    this.router = e
                }, e.prototype.navigate = function(e) {
                    (this.options.useAppRouter ? e : this.router || e).navigate(this.url, this.options)
                }, e
            }(),
            U = (e.RedirectToRoute = function() {
                function e(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                    this.route = e, this.params = t, this.options = Object.assign({
                        trigger: !0,
                        replace: !0
                    }, n), this.shouldContinueProcessing = !1
                }
                return e.prototype.setRouter = function(e) {
                    this.router = e
                }, e.prototype.navigate = function(e) {
                    (this.options.useAppRouter ? e : this.router || e).navigateToRoute(this.route, this.params, this.options)
                }, e
            }(), e.RouterConfiguration = function() {
                function e() {
                    this.instructions = [], this.options = {}, this.pipelineSteps = []
                }
                return e.prototype.addPipelineStep = function(e, t) {
                    return this.pipelineSteps.push({
                        name: e,
                        step: t
                    }), this
                }, e.prototype.addAuthorizeStep = function(e) {
                    return this.addPipelineStep("authorize", e)
                }, e.prototype.addPreActivateStep = function(e) {
                    return this.addPipelineStep("preActivate", e)
                }, e.prototype.addPreRenderStep = function(e) {
                    return this.addPipelineStep("preRender", e)
                }, e.prototype.addPostRenderStep = function(e) {
                    return this.addPipelineStep("postRender", e)
                }, e.prototype.fallbackRoute = function(e) {
                    return this._fallbackRoute = e, this
                }, e.prototype.map = function(e) {
                    return Array.isArray(e) ? (e.forEach(this.map.bind(this)), this) : this.mapRoute(e)
                }, e.prototype.mapRoute = function(e) {
                    return this.instructions.push(function(t) {
                        var n = [];
                        if (Array.isArray(e.route))
                            for (var r = 0, i = e.route.length; r < i; ++r) {
                                var o = Object.assign({}, e);
                                o.route = e.route[r], n.push(o)
                            } else n.push(Object.assign({}, e));
                        for (var s = void 0, a = 0, u = n.length; a < u; ++a) {
                            var l = n[a];
                            l.settings = l.settings || {}, s || (s = t.createNavModel(l)), t.addRoute(l, s)
                        }
                    }), this
                }, e.prototype.mapUnknownRoutes = function(e) {
                    return this.unknownRouteConfig = e, this
                }, e.prototype.exportToRouter = function(e) {
                    for (var t = this.instructions, n = 0, r = t.length; n < r; ++n) t[n](e);
                    this.title && (e.title = this.title), this.unknownRouteConfig && e.handleUnknownRoutes(this.unknownRouteConfig), this._fallbackRoute && (e.fallbackRoute = this._fallbackRoute), e.options = this.options;
                    var i = this.pipelineSteps;
                    if (i.length) {
                        if (!e.isRoot) throw new Error("Pipeline steps can only be added to the root router");
                        for (var o = e.pipelineProvider, s = 0, a = i.length; s < a; ++s) {
                            var u = i[s],
                                l = u.name,
                                c = u.step;
                            o.addStep(l, c)
                        }
                    }
                }, e
            }()),
            Y = e.activationStrategy = {
                noChange: "no-change",
                invokeLifecycle: "invoke-lifecycle",
                replace: "replace"
            },
            W = e.BuildNavigationPlanStep = function() {
                function e() {}
                return e.prototype.run = function(e, t) {
                    return f(e).then(function(n) {
                        return e.plan = n, t()
                    }).catch(t.cancel)
                }, e
            }(),
            G = e.Router = function() {
                function e(e, t) {
                    var n = this;
                    this.parent = null, this.options = {}, this.transformTitle = function(e) {
                        return n.parent ? n.parent.transformTitle(e) : e
                    }, this.container = e, this.history = t, this.reset()
                }
                return e.prototype.reset = function() {
                    var e = this;
                    this.viewPorts = {}, this.routes = [], this.baseUrl = "", this.isConfigured = !1, this.isNavigating = !1, this.isExplicitNavigation = !1, this.isExplicitNavigationBack = !1, this.navigation = [], this.currentInstruction = null, this._fallbackOrder = 100, this._recognizer = new n.RouteRecognizer, this._childRecognizer = new n.RouteRecognizer, this._configuredPromise = new Promise(function(t) {
                        e._resolveConfiguredPromise = t
                    })
                }, e.prototype.registerViewPort = function(e, t) {
                    t = t || "default", this.viewPorts[t] = e
                }, e.prototype.ensureConfigured = function() {
                    return this._configuredPromise
                }, e.prototype.configure = function(e) {
                    var t = this;
                    this.isConfigured = !0;
                    var n = e,
                        r = void 0;
                    return "function" == typeof e && (r = new U, n = e(r)), Promise.resolve(n).then(function(e) {
                        e && e.exportToRouter && (r = e), r.exportToRouter(t), t.isConfigured = !0, t._resolveConfiguredPromise()
                    })
                }, e.prototype.navigate = function(e, t) {
                    return !this.isConfigured && this.parent ? this.parent.navigate(e, t) : (this.isExplicitNavigation = !0, this.history.navigate(c(e, this.baseUrl, this.history._hasPushState), t))
                }, e.prototype.navigateToRoute = function(e, t, n) {
                    var r = this.generate(e, t);
                    return this.navigate(r, n)
                }, e.prototype.navigateBack = function() {
                    this.isExplicitNavigationBack = !0, this.history.navigateBack()
                }, e.prototype.createChild = function(t) {
                    var n = new e(t || this.container.createChild(), this.history);
                    return n.parent = this, n
                }, e.prototype.generate = function(e, t) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        r = this._recognizer.hasRoute(e);
                    if ((!this.isConfigured || !r) && this.parent) return this.parent.generate(e, t);
                    if (!r) throw new Error("A route with name '" + e + "' could not be found. Check that `name: '" + e + "'` was specified in the route's config.");
                    var i = this._recognizer.generate(e, t),
                        o = l(i, this.baseUrl, this.history._hasPushState, n.absolute);
                    return n.absolute ? "" + this.history.getAbsoluteRoot() + o : o
                }, e.prototype.createNavModel = function(e) {
                    var t = new z(this, "href" in e ? e.href : e.route);
                    return t.title = e.title, t.order = e.nav, t.href = e.href, t.settings = e.settings, t.config = e, t
                }, e.prototype.addRoute = function(e, t) {
                    g(e, this.routes), "viewPorts" in e || e.navigationStrategy || (e.viewPorts = {
                        default: {
                            moduleId: e.moduleId,
                            view: e.view
                        }
                    }), t || (t = this.createNavModel(e)), this.routes.push(e);
                    var n = e.route;
                    "/" === n.charAt(0) && (n = n.substr(1));
                    var r = !0 === e.caseSensitive,
                        i = this._recognizer.add({
                            path: n,
                            handler: e,
                            caseSensitive: r
                        });
                    if (n) {
                        var o = e.settings;
                        delete e.settings;
                        var s = JSON.parse(JSON.stringify(e));
                        e.settings = o, s.route = n + "/*childRoute", s.hasChildRouter = !0, this._childRecognizer.add({
                            path: s.route,
                            handler: s,
                            caseSensitive: r
                        }), s.navModel = t, s.settings = e.settings, s.navigationStrategy = e.navigationStrategy
                    }
                    if (e.navModel = t, (t.order || 0 === t.order) && -1 === this.navigation.indexOf(t)) {
                        if (!t.href && "" !== t.href && (i.types.dynamics || i.types.stars)) throw new Error('Invalid route config for "' + e.route + '" : dynamic routes must specify an "href:" to be included in the navigation model.');
                        "number" != typeof t.order && (t.order = ++this._fallbackOrder), this.navigation.push(t), this.navigation = this.navigation.sort(function(e, t) {
                            return e.order - t.order
                        })
                    }
                }, e.prototype.hasRoute = function(e) {
                    return !!(this._recognizer.hasRoute(e) || this.parent && this.parent.hasRoute(e))
                }, e.prototype.hasOwnRoute = function(e) {
                    return this._recognizer.hasRoute(e)
                }, e.prototype.handleUnknownRoutes = function(e) {
                    var t = this;
                    if (!e) throw new Error("Invalid unknown route handler");
                    this.catchAllHandler = function(n) {
                        return t._createRouteConfig(e, n).then(function(e) {
                            return n.config = e, n
                        })
                    }
                }, e.prototype.updateTitle = function() {
                    if (this.parent) return this.parent.updateTitle();
                    this.currentInstruction && this.currentInstruction._updateTitle()
                }, e.prototype.refreshNavigation = function() {
                    for (var e = this.navigation, t = 0, n = e.length; t < n; t++) {
                        var r = e[t];
                        r.config.href ? r.href = u(r.config.href, this.history._hasPushState) : r.href = l(r.relativeHref, this.baseUrl, this.history._hasPushState)
                    }
                }, e.prototype._refreshBaseUrl = function() {
                    if (this.parent) {
                        var e = this.parent.currentInstruction.getBaseUrl();
                        this.baseUrl = this.parent.baseUrl + e
                    }
                }, e.prototype._createNavigationInstruction = function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                        t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1],
                        n = e,
                        r = "",
                        i = e.indexOf("?"); - 1 !== i && (n = e.substr(0, i), r = e.substr(i + 1));
                    var o = this._recognizer.recognize(e);
                    o && o.length || (o = this._childRecognizer.recognize(e));
                    var s = {
                        fragment: n,
                        queryString: r,
                        config: null,
                        parentInstruction: t,
                        previousInstruction: this.currentInstruction,
                        router: this,
                        options: {
                            compareQueryParams: this.options.compareQueryParams
                        }
                    };
                    if (o && o.length) {
                        var a = o[0],
                            u = new q(Object.assign({}, s, {
                                params: a.params,
                                queryParams: a.queryParams || o.queryParams,
                                config: a.config || a.handler
                            }));
                        return "function" == typeof a.handler ? y(u, a.handler, a) : a.handler && "function" == typeof a.handler.navigationStrategy ? y(u, a.handler.navigationStrategy, a.handler) : Promise.resolve(u)
                    }
                    if (this.catchAllHandler) {
                        return y(new q(Object.assign({}, s, {
                            params: {
                                path: n
                            },
                            queryParams: o && o.queryParams,
                            config: null
                        })), this.catchAllHandler)
                    }
                    return Promise.reject(new Error("Route not found: " + e))
                }, e.prototype._createRouteConfig = function(e, t) {
                    var n = this;
                    return Promise.resolve(e).then(function(e) {
                        return "string" == typeof e ? {
                            moduleId: e
                        } : "function" == typeof e ? e(t) : e
                    }).then(function(e) {
                        return "string" == typeof e ? {
                            moduleId: e
                        } : e
                    }).then(function(e) {
                        return e.route = t.params.path, g(e, n.routes), e.navModel || (e.navModel = n.createNavModel(e)), e
                    })
                }, F(e, [{
                    key: "isRoot",
                    get: function() {
                        return !this.parent
                    }
                }]), e
            }(),
            $ = e.CanDeactivatePreviousStep = function() {
                function e() {}
                return e.prototype.run = function(e, t) {
                    return b(e.plan, "canDeactivate", t)
                }, e
            }(),
            Q = e.CanActivateNextStep = function() {
                function e() {}
                return e.prototype.run = function(e, t) {
                    return x(e, "canActivate", t)
                }, e
            }(),
            Z = e.DeactivatePreviousStep = function() {
                function e() {}
                return e.prototype.run = function(e, t) {
                    return b(e.plan, "deactivate", t, !0)
                }, e
            }(),
            K = e.ActivateNextStep = function() {
                function e() {}
                return e.prototype.run = function(e, t) {
                    return x(e, "activate", t, !0)
                }, e
            }(),
            X = function() {
                function e(e) {
                    this._subscribed = !0, this._subscription = e(this), this._subscribed || this.unsubscribe()
                }
                return e.prototype.unsubscribe = function() {
                    this._subscribed && this._subscription && this._subscription.unsubscribe(), this._subscribed = !1
                }, F(e, [{
                    key: "subscribed",
                    get: function() {
                        return this._subscribed
                    }
                }]), e
            }(),
            J = e.RouteLoader = function() {
                function e() {}
                return e.prototype.loadRoute = function(e, t, n) {
                    throw Error('Route loaders must implement "loadRoute(router, config, navigationInstruction)".')
                }, e
            }(),
            ee = e.LoadRouteStep = function() {
                function e(e) {
                    this.routeLoader = e
                }
                return e.inject = function() {
                    return [J]
                }, e.prototype.run = function(e, t) {
                    return E(this.routeLoader, e).then(t).catch(t.cancel)
                }, e
            }(),
            te = function() {
                function e(e, t, n) {
                    this.steps = [], this.container = e, this.slotName = t, this.slotAlias = n
                }
                return e.prototype.getSteps = function() {
                    var e = this;
                    return this.steps.map(function(t) {
                        return e.container.get(t)
                    })
                }, e
            }(),
            ne = e.PipelineProvider = function() {
                function e(e) {
                    this.container = e, this.steps = [W, $, ee, this._createPipelineSlot("authorize"), Q, this._createPipelineSlot("preActivate", "modelbind"), Z, K, this._createPipelineSlot("preRender", "precommit"), B, this._createPipelineSlot("postRender", "postcomplete")]
                }
                return e.inject = function() {
                    return [r.Container]
                }, e.prototype.createPipeline = function() {
                    var e = this,
                        t = new V;
                    return this.steps.forEach(function(n) {
                        return t.addStep(e.container.get(n))
                    }), t
                }, e.prototype._findStep = function(e) {
                    return this.steps.find(function(t) {
                        return t.slotName === e || t.slotAlias === e
                    })
                }, e.prototype.addStep = function(e, t) {
                    var n = this._findStep(e);
                    if (!n) throw new Error("Invalid pipeline slot name: " + e + ".");
                    n.steps.includes(t) || n.steps.push(t)
                }, e.prototype.removeStep = function(e, t) {
                    var n = this._findStep(e);
                    n && n.steps.splice(n.steps.indexOf(t), 1)
                }, e.prototype._clearSteps = function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                        t = this._findStep(e);
                    t && (t.steps = [])
                }, e.prototype.reset = function() {
                    this._clearSteps("authorize"), this._clearSteps("preActivate"), this._clearSteps("preRender"), this._clearSteps("postRender")
                }, e.prototype._createPipelineSlot = function(e, t) {
                    return new te(this.container, e, t)
                }, e
            }(),
            re = j.getLogger("app-router");
        e.AppRouter = function(e) {
            function t(t, n, r, i) {
                var o = s(this, e.call(this, t, n));
                return o.pipelineProvider = r, o.events = i, o
            }
            return a(t, e), t.inject = function() {
                return [r.Container, i.History, ne, o.EventAggregator]
            }, t.prototype.reset = function() {
                e.prototype.reset.call(this), this.maxInstructionCount = 10, this._queue ? this._queue.length = 0 : this._queue = []
            }, t.prototype.loadUrl = function(e) {
                var t = this;
                return this._createNavigationInstruction(e).then(function(e) {
                    return t._queueInstruction(e)
                }).catch(function(e) {
                    re.error(e), T(t)
                })
            }, t.prototype.registerViewPort = function(t, n) {
                var r = this;
                if (e.prototype.registerViewPort.call(this, t, n), this.isActive) this._dequeueInstruction();
                else {
                    var i = function() {
                        var e = r._findViewModel(t);
                        if ("configureRouter" in e) {
                            if (!r.isConfigured) {
                                var n = function() {
                                    var t = r._resolveConfiguredPromise;
                                    return r._resolveConfiguredPromise = function() {}, {
                                        v: {
                                            v: r.configure(function(t) {
                                                return e.configureRouter(t, r)
                                            }).then(function() {
                                                r.activate(), t()
                                            })
                                        }
                                    }
                                }();
                                if ("object" === (void 0 === n ? "undefined" : L(n))) return n.v
                            }
                        } else r.activate()
                    }();
                    if ("object" === (void 0 === i ? "undefined" : L(i))) return i.v
                }
                return Promise.resolve()
            }, t.prototype.activate = function(e) {
                this.isActive || (this.isActive = !0, this.options = Object.assign({
                    routeHandler: this.loadUrl.bind(this)
                }, this.options, e), this.history.activate(this.options), this._dequeueInstruction())
            }, t.prototype.deactivate = function() {
                this.isActive = !1, this.history.deactivate()
            }, t.prototype._queueInstruction = function(e) {
                var t = this;
                return new Promise(function(n) {
                    e.resolve = n, t._queue.unshift(e), t._dequeueInstruction()
                })
            }, t.prototype._dequeueInstruction = function() {
                var e = this,
                    t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                return Promise.resolve().then(function() {
                    if (!e.isNavigating || t) {
                        var n = e._queue.shift();
                        if (e._queue.length = 0, n) {
                            if (e.isNavigating = !0, n.previousInstruction = e.currentInstruction, t) {
                                if (t === e.maxInstructionCount - 1) return re.error(t + 1 + " navigation instructions have been attempted without success. Restoring last known good location."), T(e), e._dequeueInstruction(t + 1);
                                if (t > e.maxInstructionCount) throw new Error("Maximum navigation attempts exceeded. Giving up.")
                            } else e.events.publish("router:navigation:processing", {
                                instruction: n
                            });
                            return e.pipelineProvider.createPipeline().run(n).then(function(r) {
                                return A(n, r, t, e)
                            }).catch(function(e) {
                                return {
                                    output: e instanceof Error ? e : new Error(e)
                                }
                            }).then(function(r) {
                                return P(n, r, !!t, e)
                            })
                        }
                    }
                })
            }, t.prototype._findViewModel = function(e) {
                if (this.container.viewModel) return this.container.viewModel;
                if (e.container)
                    for (var t = e.container; t;) {
                        if (t.viewModel) return this.container.viewModel = t.viewModel, t.viewModel;
                        t = t.parent
                    }
            }, t
        }(G)
    }), define("aurelia-task-queue", ["exports", "aurelia-pal"], function(e, t) {
        "use strict";

        function n(e) {
            var n = 1,
                r = t.DOM.createMutationObserver(e),
                i = t.DOM.createTextNode("");
            return r.observe(i, {
                    characterData: !0
                }),
                function() {
                    n = -n, i.data = n
                }
        }

        function r(e) {
            return function() {
                function t() {
                    clearTimeout(n), clearInterval(r), e()
                }
                var n = setTimeout(t, 0),
                    r = setInterval(t, 50)
            }
        }

        function i(e, t, n) {
            n && t.stack && "object" === (void 0 === e ? "undefined" : u(e)) && null !== e && (e.stack = a(e.stack) + t.stack), "onError" in t ? t.onError(e) : l ? setImmediate(function() {
                throw e
            }) : setTimeout(function() {
                throw e
            }, 0)
        }

        function o() {
            var e = new Error;
            if (e.stack) return e.stack;
            try {
                throw e
            } catch (e) {
                return e.stack
            }
        }

        function s(e) {
            return e.replace(/^[\s\S]*?\bqueue(Micro)?Task\b[^\n]*\n/, "")
        }

        function a(e) {
            var t = e.lastIndexOf("flushMicroTaskQueue");
            return t < 0 && (t = e.lastIndexOf("flushTaskQueue")) < 0 ? e : (t = e.lastIndexOf("\n", t), t < 0 ? e : e.substr(0, t))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.TaskQueue = void 0;
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            l = "function" == typeof setImmediate;
        e.TaskQueue = function() {
            function e() {
                var e = this;
                this.flushing = !1, this.longStacks = !1, this.microTaskQueue = [], this.microTaskQueueCapacity = 1024, this.taskQueue = [], t.FEATURE.mutationObserver ? this.requestFlushMicroTaskQueue = n(function() {
                    return e.flushMicroTaskQueue()
                }) : this.requestFlushMicroTaskQueue = r(function() {
                    return e.flushMicroTaskQueue()
                }), this.requestFlushTaskQueue = r(function() {
                    return e.flushTaskQueue()
                })
            }
            return e.prototype.queueMicroTask = function(e) {
                this.microTaskQueue.length < 1 && this.requestFlushMicroTaskQueue(), this.longStacks && (e.stack = this.prepareQueueStack("\nEnqueued in MicroTaskQueue by:\n")), this.microTaskQueue.push(e)
            }, e.prototype.queueTask = function(e) {
                this.taskQueue.length < 1 && this.requestFlushTaskQueue(), this.longStacks && (e.stack = this.prepareQueueStack("\nEnqueued in TaskQueue by:\n")), this.taskQueue.push(e)
            }, e.prototype.flushTaskQueue = function() {
                var e = this.taskQueue,
                    t = 0,
                    n = void 0;
                this.taskQueue = [];
                try {
                    for (this.flushing = !0; t < e.length;) n = e[t], this.longStacks && (this.stack = "string" == typeof n.stack ? n.stack : void 0), n.call(), t++
                } catch (e) {
                    i(e, n, this.longStacks)
                } finally {
                    this.flushing = !1
                }
            }, e.prototype.flushMicroTaskQueue = function() {
                var e = this.microTaskQueue,
                    t = this.microTaskQueueCapacity,
                    n = 0,
                    r = void 0;
                try {
                    for (this.flushing = !0; n < e.length;)
                        if (r = e[n], this.longStacks && (this.stack = "string" == typeof r.stack ? r.stack : void 0), r.call(), ++n > t) {
                            for (var o = 0, s = e.length - n; o < s; o++) e[o] = e[o + n];
                            e.length -= n, n = 0
                        }
                } catch (e) {
                    i(e, r, this.longStacks)
                } finally {
                    this.flushing = !1
                }
                e.length = 0
            }, e.prototype.prepareQueueStack = function(e) {
                var t = e + s(o());
                return "string" == typeof this.stack && (t = a(t) + this.stack), t
            }, e
        }()
    }), define("aurelia-templating", ["exports", "aurelia-logging", "aurelia-metadata", "aurelia-pal", "aurelia-path", "aurelia-loader", "aurelia-dependency-injection", "aurelia-binding", "aurelia-task-queue"], function(e, t, n, r, i, o, s, a, u) {
        "use strict";

        function l(e) {
            return "-" + e.toLowerCase()
        }

        function c(e) {
            return (e.charAt(0).toLowerCase() + e.slice(1)).replace(Ye, l)
        }

        function h(e) {
            return !(e.auInterpolationTarget || /[^\t\n\r ]/.test(e.textContent))
        }

        function d(e) {
            var t = function(e) {
                n.metadata.define(n.metadata.resource, new We, e)
            };
            return e ? t(e) : t
        }

        function p(e) {
            throw new Error("BindingLanguage must implement " + e + "().")
        }

        function f(e, t, n, r) {
            if (t) {
                var i = e[t];
                if (i) {
                    if (i !== n) throw new Error("Attempted to register " + r + " when one with the same name already exists. Name: " + t + ".")
                } else e[t] = n
            }
        }

        function v(e) {
            if (void 0 !== e.animatableElement) return e.animatableElement;
            for (var t = e.firstChild; t && 1 !== t.nodeType;) t = t.nextSibling;
            return t && 1 === t.nodeType ? e.animatableElement = t.classList.contains("au-animate") ? t : null : e.animatableElement = null
        }

        function m(e) {
            if (e === r.DOM.Element) return this.element;
            if (e === mt) {
                if (this.boundViewFactory) return this.boundViewFactory;
                var t = this.instruction.viewFactory,
                    n = this.partReplacements;
                return n && (t = n[t.part] || t), this.boundViewFactory = new mt(this, t, n), this.boundViewFactory
            }
            return e === pt ? (void 0 === this.viewSlot && (this.viewSlot = new pt(this.element, this.instruction.anchorIsContainer), this.element.isContentProjectionSource = this.instruction.lifting, this.children.push(this.viewSlot)), this.viewSlot) : e === Ge ? this.elementEvents || (this.elementEvents = new Ge(this.element)) : e === Ue ? this.compositionTransaction || (this.compositionTransaction = this.parent.get(e)) : e === ht ? this.viewResources : e === Ke ? this.instruction : this.superGet(e)
        }

        function g(e, t, n, r, i, o) {
            var s = e.createChild(),
                a = void 0,
                u = void 0;
            for (s.element = t, s.instruction = n, s.children = r, s.viewResources = o, s.partReplacements = i, a = n.providers, u = a.length; u--;) s._resolvers.set(a[u], vt);
            return s.superGet = s.get, s.get = m, s
        }

        function y(e) {
            return this._element.hasAttribute(e)
        }

        function b(e) {
            return this._element.getAttribute(e)
        }

        function w(e, t) {
            this._element.setAttribute(e, t)
        }

        function _(e, t) {
            var n = r.DOM.createComment("anchor");
            if (t) {
                var i = e.firstChild;
                i && "AU-CONTENT" === i.tagName && (n.contentElement = i), n._element = e, n.hasAttribute = y, n.getAttribute = b, n.setAttribute = w
            }
            return r.DOM.replaceNode(n, e), n
        }

        function x(e, t, n, i, o, s, a, u, l) {
            var c = n.behaviorInstructions,
                h = n.expressions,
                d = void 0,
                p = void 0,
                f = void 0,
                v = void 0,
                m = void 0;
            if (n.contentExpression) return o.push(n.contentExpression.createBinding(t.nextSibling)), t.nextSibling.auInterpolationTarget = !0, void t.parentNode.removeChild(t);
            if (n.shadowSlot) {
                var y = r.DOM.createComment("slot"),
                    b = void 0;
                return b = n.slotDestination ? new ut(y, n.slotName, n.slotDestination, n.slotFallbackFactory) : new lt(y, n.slotName, n.slotFallbackFactory), r.DOM.replaceNode(y, t), a[n.slotName] = b, void i.push(b)
            }
            if (c.length)
                for (n.anchorIsContainer || (t = _(t, n.elementInstruction)), e[n.injectorId] = d = g(e[n.parentInjectorId], t, n, s, u, l), p = 0, f = c.length; p < f; ++p) v = c[p], m = v.type.create(d, v, t, o), i.push(m);
            for (p = 0, f = h.length; p < f; ++p) o.push(h[p].createBinding(t))
        }

        function S(e, t) {
            var n = e.split(";"),
                r = void 0,
                i = void 0,
                o = void 0,
                s = void 0,
                a = void 0;
            for (t = t || {}, i = 0; i < n.length; i++) o = n[i], r = o.indexOf(":"), s = o.substring(0, r).trim(), a = o.substring(r + 1).trim(), t[s] = a;
            return t
        }

        function C(e) {
            var t = "";
            for (var n in e) t += n + ":" + e[n] + ";";
            return t
        }

        function k(e, t, n, r, i, o) {
            var s = n.behaviorInstructions,
                a = n.expressions,
                u = n.providers,
                l = n.values,
                c = void 0,
                h = void 0,
                d = void 0,
                p = void 0,
                f = void 0;
            for (c = u.length; c--;) e._resolvers.set(u[c], vt);
            for (var v in l)
                if (f = t.getAttribute(v)) {
                    if ("class" === v) t.setAttribute("class", f + " " + l[v]);
                    else if ("style" === v) {
                        var m = S(l[v]);
                        S(f, m), t.setAttribute("style", C(m))
                    }
                } else t.setAttribute(v, l[v]);
            if (s.length)
                for (c = 0, h = s.length; c < h; ++c) d = s[c], p = d.type.create(e, d, t, i), p.contentView && o.push(p.contentView), r.push(p);
            for (c = 0, h = a.length; c < h; ++c) i.push(a[c].createBinding(t))
        }

        function E() {
            return ++yt
        }

        function O() {
            return (++bt).toString()
        }

        function M(e) {
            var t = e.getAttribute("class"),
                n = O();
            return e.setAttribute("class", t ? t + " au-target" : "au-target"), e.setAttribute("au-target-id", n), n
        }

        function R(e, t, n, i, o) {
            var s = r.DOM.createElement("au-shadow-slot");
            r.DOM.replaceNode(s, n);
            var a = M(s),
                u = Ke.shadowSlot(o);
            if (u.slotName = n.getAttribute("name") || ct.defaultSlotKey, u.slotDestination = n.getAttribute("slot"), n.innerHTML.trim()) {
                for (var l = r.DOM.createDocumentFragment(), c = void 0; c = n.firstChild;) l.appendChild(c);
                u.slotFallbackFactory = e.compile(l, t)
            }
            return i[a] = u, s
        }

        function A(e, t) {
            return t instanceof o.TemplateRegistryEntry ? Promise.resolve(t) : e.loadTemplate(t)
        }

        function P(e, t, n) {
            var r = t.__observers__;
            return void 0 === r && (e.isInitialized || e.initialize(s.Container.instance || new s.Container, t.constructor), r = e.observerLocator.getOrCreateObserversLookup(t), e._ensurePropertiesDefined(t, r)), r[n]
        }

        function T() {
            return ++At
        }

        function j() {
            return !0
        }

        function L() {}

        function F(e, t) {
            return function(r, i, o) {
                var s = "string" == typeof i ? r.constructor : r,
                    a = n.metadata.getOrCreateOwn(n.metadata.resource, Pt, s);
                "string" == typeof e && (e = {
                    selector: e,
                    name: i
                }), o && (o.writable = !0, o.configurable = !0), e.all = t, a.addChildBinding(new Tt(e))
            }
        }

        function N(e) {
            return F(e, !0)
        }

        function D(e) {
            return F(e, !1)
        }

        function I(e, t, n) {
            var r = e.get(t);
            r || (r = [], e.set(t, r)), r.push(n)
        }

        function V(e, t) {
            for (var n = t.binders, r = n.length, i = new Map, o = 0, s = e.length; o < s; ++o) {
                for (var a = e[o], u = a.addedNodes, l = a.removedNodes, c = 0, h = l.length; c < h; ++c) {
                    var d = l[c];
                    if (1 === d.nodeType)
                        for (var p = 0; p < r; ++p) {
                            var f = n[p];
                            f.onRemove(d) && I(i, f, a)
                        }
                }
                for (var v = 0, m = u.length; v < m; ++v) {
                    var g = u[v];
                    if (1 === g.nodeType)
                        for (var y = 0; y < r; ++y) {
                            var b = n[y];
                            b.onAdd(g) && I(i, b, a)
                        }
                }
            }
            i.forEach(function(e, t) {
                null !== t.changeHandler && t.viewModel[t.changeHandler](e)
            })
        }

        function B(e, t) {
            return Array.isArray(t) ? e.removeMany(t, !0) : e.remove(t, !0)
        }

        function q(e) {
            return e.skipActivation || "function" != typeof e.viewModel.activate ? Promise.resolve() : e.viewModel.activate(e.model) || Promise.resolve()
        }

        function z(e, t) {
            if (/[A-Z]/.test(e)) {
                var n = c(e);
                return Ie.getLogger("templating").warn("'" + e + "' is not a valid " + t + " name and has been converted to '" + n + "'. Upper-case letters are not allowed because the DOM is not case-sensitive."), n
            }
            return e
        }

        function H(e) {
            return function(t) {
                n.metadata.define(n.metadata.resource, e, t)
            }
        }

        function U(e) {
            return function(t) {
                if (e instanceof Pt) n.metadata.define(n.metadata.resource, e, t);
                else {
                    var r = n.metadata.getOrCreateOwn(n.metadata.resource, Pt, t);
                    Object.assign(r, e)
                }
            }
        }

        function Y(e) {
            return function(t) {
                n.metadata.getOrCreateOwn(n.metadata.resource, Pt, t).elementName = z(e, "custom element")
            }
        }

        function W(e, t, r) {
            return function(i) {
                var o = n.metadata.getOrCreateOwn(n.metadata.resource, Pt, i);
                o.attributeName = z(e, "custom attribute"), o.attributeDefaultBindingMode = t, o.aliases = r
            }
        }

        function G(e) {
            var t = function(e) {
                n.metadata.getOrCreateOwn(n.metadata.resource, Pt, e).liftsContent = !0
            };
            return e ? t(e) : t
        }

        function $(e, t, r) {
            var i = function(t, r, i) {
                var o = r ? t.constructor : t,
                    s = n.metadata.getOrCreateOwn(n.metadata.resource, Pt, o),
                    a = void 0;
                return r && (e = e || {}, e.name = r), a = new Rt(e), a.registerWith(o, s, i)
            };
            if (!e) return i;
            if (t) {
                var o = e;
                return e = null, i(o, t, r)
            }
            return i
        }

        function Q(e) {
            var t = function(e) {
                n.metadata.getOrCreateOwn(n.metadata.resource, Pt, e).hasDynamicOptions = !0
            };
            return e ? t(e) : t
        }

        function Z(e) {
            var t = "function" != typeof e && e ? e : It,
                r = function(e) {
                    var r = n.metadata.getOrCreateOwn(n.metadata.resource, Pt, e);
                    r.targetShadowDOM = !0, r.shadowDOMOptions = t
                };
            return "function" == typeof e ? r(e) : r
        }

        function K(e) {
            return function(t) {
                n.metadata.getOrCreateOwn(n.metadata.resource, Pt, t).processAttributes = function(t, n, r, i, o) {
                    try {
                        e(t, n, r, i, o)
                    } catch (e) {
                        Ie.getLogger("templating").error(e)
                    }
                }
            }
        }

        function X() {
            return !1
        }

        function J(e) {
            return function(t) {
                n.metadata.getOrCreateOwn(n.metadata.resource, Pt, t).processContent = e ? function(t, n, r, i) {
                    try {
                        return e(t, n, r, i)
                    } catch (e) {
                        return Ie.getLogger("templating").error(e), !1
                    }
                } : X
            }
        }

        function ee(e) {
            var t = function(e) {
                n.metadata.getOrCreateOwn(n.metadata.resource, Pt, e).containerless = !0
            };
            return e ? t(e) : t
        }

        function te(e) {
            return function(t) {
                n.metadata.define(it.viewStrategyMetadataKey, e, t)
            }
        }

        function ne(e) {
            return te(new Je(e))
        }

        function re(e, t, n) {
            return te(new rt(e, t, n))
        }

        function ie(e, t) {
            var r = void 0,
                i = void 0;
            "function" == typeof e ? r = e : (i = e, r = void 0);
            var o = function(e) {
                n.metadata.define(it.viewStrategyMetadataKey, new tt(i, t), e)
            };
            return r ? o(r) : o
        }

        function oe(e) {
            var t = function(e) {
                n.metadata.define(n.metadata.resource, new Dt, e)
            };
            return e ? t(e) : t
        }

        function se() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(e) {
                n.metadata.define(Et.viewModelRequireMetadataKey, t, e)
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.TemplatingEngine = e.ElementConfigResource = e.CompositionEngine = e.SwapStrategies = e.HtmlBehaviorResource = e.BindableProperty = e.BehaviorPropertyObserver = e.Controller = e.ViewEngine = e.ModuleAnalyzer = e.ResourceDescription = e.ResourceModule = e.ViewCompiler = e.ViewFactory = e.BoundViewFactory = e.ViewSlot = e.View = e.ViewResources = e.ShadowDOM = e.ShadowSlot = e.PassThroughSlot = e.SlotCustomAttribute = e.BindingLanguage = e.ViewLocator = e.InlineViewStrategy = e.TemplateRegistryViewStrategy = e.NoViewStrategy = e.ConventionalViewStrategy = e.RelativeViewStrategy = e.viewStrategy = e.TargetInstruction = e.BehaviorInstruction = e.ViewCompileInstruction = e.ResourceLoadContext = e.ElementEvents = e.ViewEngineHooksResource = e.CompositionTransaction = e.CompositionTransactionOwnershipToken = e.CompositionTransactionNotifier = e.Animator = e.animationEvent = void 0, e._hyphenate = c, e._isAllWhitespace = h, e.viewEngineHooks = d, e.children = N, e.child = D, e.resource = H, e.behavior = U, e.customElement = Y, e.customAttribute = W, e.templateController = G, e.bindable = $, e.dynamicOptions = Q, e.useShadowDOM = Z, e.processAttributes = K, e.processContent = J, e.containerless = ee, e.useViewStrategy = te, e.useView = ne, e.inlineView = re, e.noView = ie, e.elementConfig = oe, e.viewResources = se;
        var ae, ue, le, ce, he, de, pe, fe, ve, me, ge, ye, be, we, _e, xe, Se, Ce, ke, Ee, Oe, Me, Re, Ae, Pe, Te, je, Le, Fe, Ne, De, Ie = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(t),
            Ve = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            Be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            qe = (e.animationEvent = {
                enterBegin: "animation:enter:begin",
                enterActive: "animation:enter:active",
                enterDone: "animation:enter:done",
                enterTimeout: "animation:enter:timeout",
                leaveBegin: "animation:leave:begin",
                leaveActive: "animation:leave:active",
                leaveDone: "animation:leave:done",
                leaveTimeout: "animation:leave:timeout",
                staggerNext: "animation:stagger:next",
                removeClassBegin: "animation:remove-class:begin",
                removeClassActive: "animation:remove-class:active",
                removeClassDone: "animation:remove-class:done",
                removeClassTimeout: "animation:remove-class:timeout",
                addClassBegin: "animation:add-class:begin",
                addClassActive: "animation:add-class:active",
                addClassDone: "animation:add-class:done",
                addClassTimeout: "animation:add-class:timeout",
                animateBegin: "animation:animate:begin",
                animateActive: "animation:animate:active",
                animateDone: "animation:animate:done",
                animateTimeout: "animation:animate:timeout",
                sequenceBegin: "animation:sequence:begin",
                sequenceDone: "animation:sequence:done"
            }, e.Animator = function() {
                function e() {}
                return e.prototype.enter = function(e) {
                    return Promise.resolve(!1)
                }, e.prototype.leave = function(e) {
                    return Promise.resolve(!1)
                }, e.prototype.removeClass = function(e, t) {
                    return e.classList.remove(t), Promise.resolve(!1)
                }, e.prototype.addClass = function(e, t) {
                    return e.classList.add(t), Promise.resolve(!1)
                }, e.prototype.animate = function(e, t) {
                    return Promise.resolve(!1)
                }, e.prototype.runSequence = function(e) {}, e.prototype.registerEffect = function(e, t) {}, e.prototype.unregisterEffect = function(e) {}, e
            }()),
            ze = e.CompositionTransactionNotifier = function() {
                function e(e) {
                    this.owner = e, this.owner._compositionCount++
                }
                return e.prototype.done = function() {
                    this.owner._compositionCount--, this.owner._tryCompleteTransaction()
                }, e
            }(),
            He = e.CompositionTransactionOwnershipToken = function() {
                function e(e) {
                    this.owner = e, this.owner._ownershipToken = this, this.thenable = this._createThenable()
                }
                return e.prototype.waitForCompositionComplete = function() {
                    return this.owner._tryCompleteTransaction(), this.thenable
                }, e.prototype.resolve = function() {
                    this._resolveCallback()
                }, e.prototype._createThenable = function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        e._resolveCallback = t
                    })
                }, e
            }(),
            Ue = e.CompositionTransaction = function() {
                function e() {
                    this._ownershipToken = null, this._compositionCount = 0
                }
                return e.prototype.tryCapture = function() {
                    return null === this._ownershipToken ? new He(this) : null
                }, e.prototype.enlist = function() {
                    return new ze(this)
                }, e.prototype._tryCompleteTransaction = function() {
                    if (this._compositionCount <= 0 && (this._compositionCount = 0, null !== this._ownershipToken)) {
                        var e = this._ownershipToken;
                        this._ownershipToken = null, e.resolve()
                    }
                }, e
            }(),
            Ye = /([A-Z])/g,
            We = e.ViewEngineHooksResource = function() {
                function e() {}
                return e.prototype.initialize = function(e, t) {
                    this.instance = e.get(t)
                }, e.prototype.register = function(e, t) {
                    e.registerViewEngineHooks(this.instance)
                }, e.prototype.load = function(e, t) {}, e.convention = function(t) {
                    if (t.endsWith("ViewEngineHooks")) return new e
                }, e
            }(),
            Ge = e.ElementEvents = function() {
                function e(e) {
                    this.element = e, this.subscriptions = {}
                }
                return e.prototype._enqueueHandler = function(e) {
                    this.subscriptions[e.eventName] = this.subscriptions[e.eventName] || [], this.subscriptions[e.eventName].push(e)
                }, e.prototype._dequeueHandler = function(e) {
                    var t = void 0,
                        n = this.subscriptions[e.eventName];
                    return n && (t = n.indexOf(e)) > -1 && n.splice(t, 1), e
                }, e.prototype.publish = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = r.DOM.createCustomEvent(e, {
                            cancelable: i,
                            bubbles: n,
                            detail: t
                        });
                    this.element.dispatchEvent(o)
                }, e.prototype.subscribe = function(e, t) {
                    var n = this,
                        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (t && "function" == typeof t) return t.eventName = e, t.handler = t, t.bubbles = r, t.dispose = function() {
                        n.element.removeEventListener(e, t, r), n._dequeueHandler(t)
                    }, this.element.addEventListener(e, t, r), this._enqueueHandler(t), t
                }, e.prototype.subscribeOnce = function(e, t) {
                    var n = this,
                        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (t && "function" == typeof t) {
                        var i = function() {
                            var i = function e(n) {
                                t(n), e.dispose()
                            };
                            return {
                                v: n.subscribe(e, i, r)
                            }
                        }();
                        if ("object" === (void 0 === i ? "undefined" : Be(i))) return i.v
                    }
                }, e.prototype.dispose = function(e) {
                    if (e && "string" == typeof e) {
                        var t = this.subscriptions[e];
                        if (t)
                            for (; t.length;) {
                                var n = t.pop();
                                n && n.dispose()
                            }
                    } else this.disposeAll()
                }, e.prototype.disposeAll = function() {
                    for (var e in this.subscriptions) this.dispose(e)
                }, e
            }(),
            $e = e.ResourceLoadContext = function() {
                function e() {
                    this.dependencies = {}
                }
                return e.prototype.addDependency = function(e) {
                    this.dependencies[e] = !0
                }, e.prototype.hasDependency = function(e) {
                    return e in this.dependencies
                }, e
            }(),
            Qe = e.ViewCompileInstruction = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.targetShadowDOM = e, this.compileSurrogate = t, this.associatedModuleId = null
            };
        Qe.normal = new Qe;
        var Ze = e.BehaviorInstruction = function() {
            function e() {
                this.initiatedByBehavior = !1, this.enhance = !1, this.partReplacements = null, this.viewFactory = null, this.originalAttrName = null, this.skipContentProcessing = !1, this.contentFactory = null, this.viewModel = null, this.anchorIsContainer = !1, this.host = null, this.attributes = null, this.type = null, this.attrName = null, this.inheritBindingContext = !1
            }
            return e.enhance = function() {
                var t = new e;
                return t.enhance = !0, t
            }, e.unitTest = function(t, n) {
                var r = new e;
                return r.type = t, r.attributes = n || {}, r
            }, e.element = function(t, n) {
                var r = new e;
                return r.type = n, r.attributes = {}, r.anchorIsContainer = !(t.hasAttribute("containerless") || n.containerless), r.initiatedByBehavior = !0, r
            }, e.attribute = function(t, n) {
                var r = new e;
                return r.attrName = t, r.type = n || null, r.attributes = {}, r
            }, e.dynamic = function(t, n, r) {
                var i = new e;
                return i.host = t, i.viewModel = n, i.viewFactory = r, i.inheritBindingContext = !0, i
            }, e
        }();
        Ze.normal = new Ze;
        var Ke = e.TargetInstruction = (ue = ae = function() {
                function e() {
                    this.injectorId = null, this.parentInjectorId = null, this.shadowSlot = !1, this.slotName = null, this.slotFallbackFactory = null, this.contentExpression = null, this.expressions = null, this.behaviorInstructions = null, this.providers = null, this.viewFactory = null, this.anchorIsContainer = !1, this.elementInstruction = null, this.lifting = !1, this.values = null
                }
                return e.shadowSlot = function(t) {
                    var n = new e;
                    return n.parentInjectorId = t, n.shadowSlot = !0, n
                }, e.contentExpression = function(t) {
                    var n = new e;
                    return n.contentExpression = t, n
                }, e.lifting = function(t, n) {
                    var r = new e;
                    return r.parentInjectorId = t, r.expressions = e.noExpressions, r.behaviorInstructions = [n], r.viewFactory = n.viewFactory, r.providers = [n.type.target], r.lifting = !0, r
                }, e.normal = function(t, n, r, i, o, s) {
                    var a = new e;
                    return a.injectorId = t, a.parentInjectorId = n, a.providers = r, a.behaviorInstructions = i, a.expressions = o, a.anchorIsContainer = !s || s.anchorIsContainer, a.elementInstruction = s, a
                }, e.surrogate = function(t, n, r, i) {
                    var o = new e;
                    return o.expressions = r, o.behaviorInstructions = n, o.providers = t, o.values = i, o
                }, e
            }(), ae.noExpressions = Object.freeze([]), ue),
            Xe = e.viewStrategy = n.protocol.create("aurelia:view-strategy", {
                validate: function(e) {
                    return "function" == typeof e.loadViewFactory || "View strategies must implement: loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>"
                },
                compose: function(e) {
                    "function" != typeof e.makeRelativeTo && (e.makeRelativeTo = r.PLATFORM.noop)
                }
            }),
            Je = e.RelativeViewStrategy = (le = Xe())(ce = function() {
                function e(e) {
                    this.path = e, this.absolutePath = null
                }
                return e.prototype.loadViewFactory = function(e, t, n, r) {
                    return null === this.absolutePath && this.moduleId && (this.absolutePath = (0, i.relativeToFile)(this.path, this.moduleId)), t.associatedModuleId = this.moduleId, e.loadViewFactory(this.absolutePath || this.path, t, n, r)
                }, e.prototype.makeRelativeTo = function(e) {
                    null === this.absolutePath && (this.absolutePath = (0, i.relativeToFile)(this.path, e))
                }, e
            }()) || ce,
            et = e.ConventionalViewStrategy = (he = Xe())(de = function() {
                function e(e, t) {
                    this.moduleId = t.moduleId, this.viewUrl = e.convertOriginToViewUrl(t)
                }
                return e.prototype.loadViewFactory = function(e, t, n, r) {
                    return t.associatedModuleId = this.moduleId, e.loadViewFactory(this.viewUrl, t, n, r)
                }, e
            }()) || de,
            tt = e.NoViewStrategy = (pe = Xe())(fe = function() {
                function e(e, t) {
                    this.dependencies = e || null, this.dependencyBaseUrl = t || ""
                }
                return e.prototype.loadViewFactory = function(e, t, n, r) {
                    var i = this.entry,
                        s = this.dependencies;
                    if (i && i.factoryIsReady) return Promise.resolve(null);
                    if (this.entry = i = new o.TemplateRegistryEntry(this.moduleId || this.dependencyBaseUrl), i.dependencies = [], i.templateIsLoaded = !0, null !== s)
                        for (var a = 0, u = s.length; a < u; ++a) {
                            var l = s[a];
                            "string" == typeof l || "function" == typeof l ? i.addDependency(l) : i.addDependency(l.from, l.as)
                        }
                    return t.associatedModuleId = this.moduleId, e.loadViewFactory(i, t, n, r)
                }, e
            }()) || fe,
            nt = e.TemplateRegistryViewStrategy = (ve = Xe())(me = function() {
                function e(e, t) {
                    this.moduleId = e, this.entry = t
                }
                return e.prototype.loadViewFactory = function(e, t, n, r) {
                    var i = this.entry;
                    return i.factoryIsReady ? Promise.resolve(i.factory) : (t.associatedModuleId = this.moduleId, e.loadViewFactory(i, t, n, r))
                }, e
            }()) || me,
            rt = e.InlineViewStrategy = (ge = Xe())(ye = function() {
                function e(e, t, n) {
                    this.markup = e, this.dependencies = t || null, this.dependencyBaseUrl = n || ""
                }
                return e.prototype.loadViewFactory = function(e, t, n, i) {
                    var s = this.entry,
                        a = this.dependencies;
                    if (s && s.factoryIsReady) return Promise.resolve(s.factory);
                    if (this.entry = s = new o.TemplateRegistryEntry(this.moduleId || this.dependencyBaseUrl), s.template = r.DOM.createTemplateFromMarkup(this.markup), null !== a)
                        for (var u = 0, l = a.length; u < l; ++u) {
                            var c = a[u];
                            "string" == typeof c || "function" == typeof c ? s.addDependency(c) : s.addDependency(c.from, c.as)
                        }
                    return t.associatedModuleId = this.moduleId, e.loadViewFactory(s, t, n, i)
                }, e
            }()) || ye,
            it = e.ViewLocator = (we = be = function() {
                function e() {}
                return e.prototype.getViewStrategy = function(t) {
                    if (!t) return null;
                    if ("object" === (void 0 === t ? "undefined" : Be(t)) && "getViewStrategy" in t) {
                        var r = n.Origin.get(t.constructor);
                        return t = t.getViewStrategy(), "string" == typeof t && (t = new Je(t)), Xe.assert(t), r.moduleId && t.makeRelativeTo(r.moduleId), t
                    }
                    if ("string" == typeof t && (t = new Je(t)), Xe.validate(t)) return t;
                    "function" != typeof t && (t = t.constructor);
                    var i = n.Origin.get(t),
                        o = n.metadata.get(e.viewStrategyMetadataKey, t);
                    if (o) i.moduleId && (o.moduleId = i.moduleId);
                    else {
                        if (!i.moduleId) throw new Error("Cannot determine default view strategy for object.", t);
                        o = this.createFallbackViewStrategy(i)
                    }
                    return o
                }, e.prototype.createFallbackViewStrategy = function(e) {
                    return new et(this, e)
                }, e.prototype.convertOriginToViewUrl = function(e) {
                    var t = e.moduleId;
                    return (t.endsWith(".js") || t.endsWith(".ts") ? t.substring(0, t.length - 3) : t) + ".html"
                }, e
            }(), be.viewStrategyMetadataKey = "aurelia:view-strategy", we),
            ot = e.BindingLanguage = function() {
                function e() {}
                return e.prototype.inspectAttribute = function(e, t, n, r) {
                    p("inspectAttribute")
                }, e.prototype.createAttributeInstruction = function(e, t, n, r) {
                    p("createAttributeInstruction")
                }, e.prototype.inspectTextContent = function(e, t) {
                    p("inspectTextContent")
                }, e
            }(),
            st = Object.freeze([]),
            at = e.SlotCustomAttribute = (_e = (0, s.inject)(r.DOM.Element))(xe = function() {
                function e(e) {
                    this.element = e, this.element.auSlotAttribute = this
                }
                return e.prototype.valueChanged = function(e, t) {}, e
            }()) || xe,
            ut = e.PassThroughSlot = function() {
                function e(e, t, n, r) {
                    this.anchor = e, this.anchor.viewSlot = this, this.name = t, this.destinationName = n, this.fallbackFactory = r, this.destinationSlot = null, this.projections = 0, this.contentView = null, new at(this.anchor).value = this.destinationName
                }
                return e.prototype.renderFallbackContent = function(e, t, n, r) {
                    if (null === this.contentView) {
                        this.contentView = this.fallbackFactory.create(this.ownerView.container), this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext);
                        var i = Object.create(null);
                        i[this.destinationSlot.name] = this.destinationSlot, ct.distributeView(this.contentView, i, n, r, this.destinationSlot.name)
                    }
                }, e.prototype.passThroughTo = function(e) {
                    this.destinationSlot = e
                }, e.prototype.addNode = function(t, n, r, i) {
                    if (null !== this.contentView && (this.contentView.removeNodes(), this.contentView.detached(), this.contentView.unbind(), this.contentView = null), n.viewSlot instanceof e) return void n.viewSlot.passThroughTo(this);
                    this.projections++, this.destinationSlot.addNode(t, n, r, i)
                }, e.prototype.removeView = function(e, t) {
                    this.projections--, this.destinationSlot.removeView(e, t), this.needsFallbackRendering && this.renderFallbackContent(null, st, t)
                }, e.prototype.removeAll = function(e) {
                    this.projections = 0, this.destinationSlot.removeAll(e), this.needsFallbackRendering && this.renderFallbackContent(null, st, e)
                }, e.prototype.projectFrom = function(e, t) {
                    this.destinationSlot.projectFrom(e, t)
                }, e.prototype.created = function(e) {
                    this.ownerView = e
                }, e.prototype.bind = function(e) {
                    this.contentView && this.contentView.bind(e.bindingContext, e.overrideContext)
                }, e.prototype.attached = function() {
                    this.contentView && this.contentView.attached()
                }, e.prototype.detached = function() {
                    this.contentView && this.contentView.detached()
                }, e.prototype.unbind = function() {
                    this.contentView && this.contentView.unbind()
                }, Ve(e, [{
                    key: "needsFallbackRendering",
                    get: function() {
                        return this.fallbackFactory && 0 === this.projections
                    }
                }]), e
            }(),
            lt = e.ShadowSlot = function() {
                function e(e, t, n) {
                    this.anchor = e, this.anchor.isContentProjectionSource = !0, this.anchor.viewSlot = this, this.name = t, this.fallbackFactory = n, this.contentView = null, this.projections = 0, this.children = [], this.projectFromAnchors = null, this.destinationSlots = null
                }
                return e.prototype.addNode = function(e, t, n, r, i) {
                        if (null !== this.contentView && (this.contentView.removeNodes(), this.contentView.detached(), this.contentView.unbind(), this.contentView = null), t.viewSlot instanceof ut) return void t.viewSlot.passThroughTo(this);
                        if (null !== this.destinationSlots) ct.distributeNodes(e, [t], this.destinationSlots, this, r);
                        else {
                            t.auOwnerView = e, t.auProjectionSource = n, t.auAssignedSlot = this;
                            var o = this._findAnchor(e, t, n, r);
                            o.parentNode.insertBefore(t, o), this.children.push(t), this.projections++
                        }
                    }, e.prototype.removeView = function(e, t) {
                        if (null !== this.destinationSlots) ct.undistributeView(e, this.destinationSlots, this);
                        else if (this.contentView && this.contentView.hasSlots) ct.undistributeView(e, this.contentView.slots, t);
                        else {
                            var n = this.children.find(function(e) {
                                return e.auSlotProjectFrom === t
                            });
                            if (n) {
                                for (var r = n.auProjectionChildren, i = 0, o = r.length; i < o; ++i) {
                                    var s = r[i];
                                    s.auOwnerView === e && (r.splice(i, 1), e.fragment.appendChild(s), i--, o--, this.projections--)
                                }
                                this.needsFallbackRendering && this.renderFallbackContent(e, st, t)
                            }
                        }
                    }, e.prototype.removeAll = function(e) {
                        if (null !== this.destinationSlots) ct.undistributeAll(this.destinationSlots, this);
                        else if (this.contentView && this.contentView.hasSlots) ct.undistributeAll(this.contentView.slots, e);
                        else {
                            var t = this.children.find(function(t) {
                                return t.auSlotProjectFrom === e
                            });
                            if (t) {
                                for (var n = t.auProjectionChildren, r = 0, i = n.length; r < i; ++r) {
                                    var o = n[r];
                                    o.auOwnerView.fragment.appendChild(o), this.projections--
                                }
                                t.auProjectionChildren = [], this.needsFallbackRendering && this.renderFallbackContent(null, st, e)
                            }
                        }
                    }, e.prototype._findAnchor = function(e, t, n, r) {
                        if (n) {
                            var i = this.children.find(function(e) {
                                return e.auSlotProjectFrom === n
                            });
                            if (i) {
                                if (void 0 !== r)
                                    for (var o = i.auProjectionChildren, s = -1, a = void 0, u = 0, l = o.length; u < l; ++u) {
                                        var c = o[u];
                                        if (c.auOwnerView !== a && (s++, a = c.auOwnerView, s >= r && a !== e)) return o.splice(u, 0, t), c
                                    }
                                return i.auProjectionChildren.push(t), i
                            }
                        }
                        return this.anchor
                    }, e.prototype.projectTo = function(e) {
                        this.destinationSlots = e
                    }, e.prototype.projectFrom = function(e, t) {
                        var n = r.DOM.createComment("anchor"),
                            i = this.anchor.parentNode;
                        n.auSlotProjectFrom = t, n.auOwnerView = e, n.auProjectionChildren = [], i.insertBefore(n, this.anchor), this.children.push(n), null === this.projectFromAnchors && (this.projectFromAnchors = []), this.projectFromAnchors.push(n)
                    },
                    e.prototype.renderFallbackContent = function(e, t, n, r) {
                        if (null === this.contentView && (this.contentView = this.fallbackFactory.create(this.ownerView.container), this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext), this.contentView.insertNodesBefore(this.anchor)), this.contentView.hasSlots) {
                            var i = this.contentView.slots,
                                o = this.projectFromAnchors;
                            if (null !== o)
                                for (var s in i)
                                    for (var a = i[s], u = 0, l = o.length; u < l; ++u) {
                                        var c = o[u];
                                        a.projectFrom(c.auOwnerView, c.auSlotProjectFrom)
                                    }
                            this.fallbackSlots = i, ct.distributeNodes(e, t, i, n, r)
                        }
                    }, e.prototype.created = function(e) {
                        this.ownerView = e
                    }, e.prototype.bind = function(e) {
                        this.contentView && this.contentView.bind(e.bindingContext, e.overrideContext)
                    }, e.prototype.attached = function() {
                        this.contentView && this.contentView.attached()
                    }, e.prototype.detached = function() {
                        this.contentView && this.contentView.detached()
                    }, e.prototype.unbind = function() {
                        this.contentView && this.contentView.unbind()
                    }, Ve(e, [{
                        key: "needsFallbackRendering",
                        get: function() {
                            return this.fallbackFactory && 0 === this.projections
                        }
                    }]), e
            }(),
            ct = e.ShadowDOM = (Ce = Se = function() {
                function e() {}
                return e.getSlotName = function(t) {
                    return void 0 === t.auSlotAttribute ? e.defaultSlotKey : t.auSlotAttribute.value
                }, e.distributeView = function(t, n, r, i, o) {
                    var s = void 0;
                    if (null === t) s = st;
                    else {
                        var a = t.fragment.childNodes,
                            u = a.length;
                        s = new Array(u);
                        for (var l = 0; l < u; ++l) s[l] = a[l]
                    }
                    e.distributeNodes(t, s, n, r, i, o)
                }, e.undistributeView = function(e, t, n) {
                    for (var r in t) t[r].removeView(e, n)
                }, e.undistributeAll = function(e, t) {
                    for (var n in e) e[n].removeAll(t)
                }, e.distributeNodes = function(t, n, r, i, o, s) {
                    for (var a = 0, u = n.length; a < u; ++a) {
                        var l = n[a],
                            c = l.nodeType;
                        if (l.isContentProjectionSource) {
                            l.viewSlot.projectTo(r);
                            for (var d in r) r[d].projectFrom(t, l.viewSlot);
                            n.splice(a, 1), u--, a--
                        } else if (1 === c || 3 === c || l.viewSlot instanceof ut)
                            if (3 === c && h(l)) n.splice(a, 1), u--, a--;
                            else {
                                var p = r[s || e.getSlotName(l)];
                                p && (p.addNode(t, l, i, o), n.splice(a, 1), u--, a--)
                            }
                        else n.splice(a, 1), u--, a--
                    }
                    for (var f in r) {
                        var v = r[f];
                        v.needsFallbackRendering && v.renderFallbackContent(t, n, i, o)
                    }
                }, e
            }(), Se.defaultSlotKey = "__au-default-slot-key__", Ce),
            ht = e.ViewResources = function() {
                function e(e, t) {
                    this.bindingLanguage = null, this.parent = e || null, this.hasParent = null !== this.parent, this.viewUrl = t || "", this.lookupFunctions = {
                        valueConverters: this.getValueConverter.bind(this),
                        bindingBehaviors: this.getBindingBehavior.bind(this)
                    }, this.attributes = Object.create(null), this.elements = Object.create(null), this.valueConverters = Object.create(null), this.bindingBehaviors = Object.create(null), this.attributeMap = Object.create(null), this.values = Object.create(null), this.beforeCompile = this.afterCompile = this.beforeCreate = this.afterCreate = this.beforeBind = this.beforeUnbind = !1
                }
                return e.prototype._tryAddHook = function(e, t) {
                    if ("function" == typeof e[t]) {
                        for (var n = e[t].bind(e), r = 1, i = void 0; void 0 !== this[i = t + r.toString()];) r++;
                        this[t] = !0, this[i] = n
                    }
                }, e.prototype._invokeHook = function(e, t, n, r, i) {
                    if (this.hasParent && this.parent._invokeHook(e, t, n, r, i), this[e]) {
                        this[e + "1"](t, n, r, i);
                        var o = e + "2";
                        if (this[o] && (this[o](t, n, r, i), o = e + "3", this[o])) {
                            this[o](t, n, r, i);
                            for (var s = 4; void 0 !== this[o = e + s.toString()];) this[o](t, n, r, i), s++
                        }
                    }
                }, e.prototype.registerViewEngineHooks = function(e) {
                    this._tryAddHook(e, "beforeCompile"), this._tryAddHook(e, "afterCompile"), this._tryAddHook(e, "beforeCreate"), this._tryAddHook(e, "afterCreate"), this._tryAddHook(e, "beforeBind"), this._tryAddHook(e, "beforeUnbind")
                }, e.prototype.getBindingLanguage = function(e) {
                    return this.bindingLanguage || (this.bindingLanguage = e)
                }, e.prototype.patchInParent = function(e) {
                    var t = this.parent;
                    this.parent = e || null, this.hasParent = null !== this.parent, null === e.parent && (e.parent = t, e.hasParent = null !== t)
                }, e.prototype.relativeToView = function(e) {
                    return (0, i.relativeToFile)(e, this.viewUrl)
                }, e.prototype.registerElement = function(e, t) {
                    f(this.elements, e, t, "an Element")
                }, e.prototype.getElement = function(e) {
                    return this.elements[e] || (this.hasParent ? this.parent.getElement(e) : null)
                }, e.prototype.mapAttribute = function(e) {
                    return this.attributeMap[e] || (this.hasParent ? this.parent.mapAttribute(e) : null)
                }, e.prototype.registerAttribute = function(e, t, n) {
                    this.attributeMap[e] = n, f(this.attributes, e, t, "an Attribute")
                }, e.prototype.getAttribute = function(e) {
                    return this.attributes[e] || (this.hasParent ? this.parent.getAttribute(e) : null)
                }, e.prototype.registerValueConverter = function(e, t) {
                    f(this.valueConverters, e, t, "a ValueConverter")
                }, e.prototype.getValueConverter = function(e) {
                    return this.valueConverters[e] || (this.hasParent ? this.parent.getValueConverter(e) : null)
                }, e.prototype.registerBindingBehavior = function(e, t) {
                    f(this.bindingBehaviors, e, t, "a BindingBehavior")
                }, e.prototype.getBindingBehavior = function(e) {
                    return this.bindingBehaviors[e] || (this.hasParent ? this.parent.getBindingBehavior(e) : null)
                }, e.prototype.registerValue = function(e, t) {
                    f(this.values, e, t, "a value")
                }, e.prototype.getValue = function(e) {
                    return this.values[e] || (this.hasParent ? this.parent.getValue(e) : null)
                }, e
            }(),
            dt = e.View = function() {
                function e(e, t, n, r, i, o, s) {
                    this.container = e, this.viewFactory = t, this.resources = t.resources, this.fragment = n, this.firstChild = n.firstChild, this.lastChild = n.lastChild, this.controllers = r, this.bindings = i, this.children = o, this.slots = s, this.hasSlots = !1, this.fromCache = !1, this.isBound = !1, this.isAttached = !1, this.bindingContext = null, this.overrideContext = null, this.controller = null, this.viewModelScope = null, this.animatableElement = void 0, this._isUserControlled = !1, this.contentView = null;
                    for (var a in s) {
                        this.hasSlots = !0;
                        break
                    }
                }
                return e.prototype.returnToCache = function() {
                    this.viewFactory.returnViewToCache(this)
                }, e.prototype.created = function() {
                    var e = void 0,
                        t = void 0,
                        n = this.controllers;
                    for (e = 0, t = n.length; e < t; ++e) n[e].created(this)
                }, e.prototype.bind = function(e, t, n) {
                    var r = void 0,
                        i = void 0,
                        o = void 0,
                        s = void 0,
                        u = void 0;
                    if (!n || !this._isUserControlled) {
                        if (this.isBound) {
                            if (this.bindingContext === e) return;
                            this.unbind()
                        }
                        for (this.isBound = !0, this.bindingContext = e, this.overrideContext = t || (0, a.createOverrideContext)(e), this.resources._invokeHook("beforeBind", this), i = this.bindings, s = 0, u = i.length; s < u; ++s) i[s].bind(this);
                        for (null !== this.viewModelScope && (e.bind(this.viewModelScope.bindingContext, this.viewModelScope.overrideContext), this.viewModelScope = null), r = this.controllers, s = 0, u = r.length; s < u; ++s) r[s].bind(this);
                        for (o = this.children, s = 0, u = o.length; s < u; ++s) o[s].bind(e, t, !0);
                        this.hasSlots && ct.distributeView(this.contentView, this.slots)
                    }
                }, e.prototype.addBinding = function(e) {
                    this.bindings.push(e), this.isBound && e.bind(this)
                }, e.prototype.unbind = function() {
                    var e = void 0,
                        t = void 0,
                        n = void 0,
                        r = void 0,
                        i = void 0;
                    if (this.isBound) {
                        for (this.isBound = !1, this.resources._invokeHook("beforeUnbind", this), null !== this.controller && this.controller.unbind(), t = this.bindings, r = 0, i = t.length; r < i; ++r) t[r].unbind();
                        for (e = this.controllers, r = 0, i = e.length; r < i; ++r) e[r].unbind();
                        for (n = this.children, r = 0, i = n.length; r < i; ++r) n[r].unbind();
                        this.bindingContext = null, this.overrideContext = null
                    }
                }, e.prototype.insertNodesBefore = function(e) {
                    e.parentNode.insertBefore(this.fragment, e)
                }, e.prototype.appendNodesTo = function(e) {
                    e.appendChild(this.fragment)
                }, e.prototype.removeNodes = function() {
                    for (var e = this.fragment, t = this.firstChild, n = this.lastChild, r = void 0; t && (r = t.nextSibling, e.appendChild(t), t !== n);) t = r
                }, e.prototype.attached = function() {
                    var e = void 0,
                        t = void 0,
                        n = void 0,
                        r = void 0;
                    if (!this.isAttached) {
                        for (this.isAttached = !0, null !== this.controller && this.controller.attached(), e = this.controllers, n = 0, r = e.length; n < r; ++n) e[n].attached();
                        for (t = this.children, n = 0, r = t.length; n < r; ++n) t[n].attached()
                    }
                }, e.prototype.detached = function() {
                    var e = void 0,
                        t = void 0,
                        n = void 0,
                        r = void 0;
                    if (this.isAttached) {
                        for (this.isAttached = !1, null !== this.controller && this.controller.detached(), e = this.controllers, n = 0, r = e.length; n < r; ++n) e[n].detached();
                        for (t = this.children, n = 0, r = t.length; n < r; ++n) t[n].detached()
                    }
                }, e
            }(),
            pt = e.ViewSlot = function() {
                function e(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qe.instance;
                    this.anchor = e, this.anchorIsContainer = t, this.bindingContext = null, this.overrideContext = null, this.animator = n, this.children = [], this.isBound = !1, this.isAttached = !1, this.contentSelectors = null, e.viewSlot = this, e.isContentProjectionSource = !1
                }
                return e.prototype.animateView = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "enter",
                        n = v(e);
                    if (null !== n) switch (t) {
                        case "enter":
                            return this.animator.enter(n);
                        case "leave":
                            return this.animator.leave(n);
                        default:
                            throw new Error("Invalid animation direction: " + t)
                    }
                }, e.prototype.transformChildNodesIntoView = function() {
                    var e = this.anchor;
                    this.children.push({
                        fragment: e,
                        firstChild: e.firstChild,
                        lastChild: e.lastChild,
                        returnToCache: function() {},
                        removeNodes: function() {
                            for (var t = void 0; t = e.lastChild;) e.removeChild(t)
                        },
                        created: function() {},
                        bind: function() {},
                        unbind: function() {},
                        attached: function() {},
                        detached: function() {}
                    })
                }, e.prototype.bind = function(e, t) {
                    var n = void 0,
                        r = void 0,
                        i = void 0;
                    if (this.isBound) {
                        if (this.bindingContext === e) return;
                        this.unbind()
                    }
                    for (this.isBound = !0, this.bindingContext = e = e || this.bindingContext, this.overrideContext = t = t || this.overrideContext, i = this.children, n = 0, r = i.length; n < r; ++n) i[n].bind(e, t, !0)
                }, e.prototype.unbind = function() {
                    if (this.isBound) {
                        var e = void 0,
                            t = void 0,
                            n = this.children;
                        for (this.isBound = !1, this.bindingContext = null, this.overrideContext = null, e = 0, t = n.length; e < t; ++e) n[e].unbind()
                    }
                }, e.prototype.add = function(e) {
                    if (this.anchorIsContainer ? e.appendNodesTo(this.anchor) : e.insertNodesBefore(this.anchor), this.children.push(e), this.isAttached) return e.attached(), this.animateView(e, "enter")
                }, e.prototype.insert = function(e, t) {
                    var n = this.children,
                        r = n.length;
                    return 0 === e && 0 === r || e >= r ? this.add(t) : (t.insertNodesBefore(n[e].firstChild), n.splice(e, 0, t), this.isAttached ? (t.attached(), this.animateView(t, "enter")) : void 0)
                }, e.prototype.move = function(e, t) {
                    if (e !== t) {
                        var n = this.children,
                            r = n[e];
                        r.removeNodes(), r.insertNodesBefore(n[t].firstChild), n.splice(e, 1), n.splice(t, 0, r)
                    }
                }, e.prototype.remove = function(e, t, n) {
                    return this.removeAt(this.children.indexOf(e), t, n)
                }, e.prototype.removeMany = function(e, t, n) {
                    var r = this,
                        i = this.children,
                        o = e.length,
                        s = void 0,
                        a = [];
                    e.forEach(function(e) {
                        if (n) return void e.removeNodes();
                        var t = r.animateView(e, "leave");
                        t ? a.push(t.then(function() {
                            return e.removeNodes()
                        })) : e.removeNodes()
                    });
                    var u = function() {
                        if (r.isAttached)
                            for (s = 0; s < o; ++s) e[s].detached();
                        if (t)
                            for (s = 0; s < o; ++s) e[s].returnToCache();
                        for (s = 0; s < o; ++s) {
                            var n = i.indexOf(e[s]);
                            n >= 0 && i.splice(n, 1)
                        }
                    };
                    return a.length > 0 ? Promise.all(a).then(function() {
                        return u()
                    }) : u()
                }, e.prototype.removeAt = function(e, t, n) {
                    var r = this,
                        i = this.children[e],
                        o = function() {
                            return e = r.children.indexOf(i), i.removeNodes(), r.children.splice(e, 1), r.isAttached && i.detached(), t && i.returnToCache(), i
                        };
                    if (!n) {
                        var s = this.animateView(i, "leave");
                        if (s) return s.then(function() {
                            return o()
                        })
                    }
                    return o()
                }, e.prototype.removeAll = function(e, t) {
                    var n = this,
                        r = this.children,
                        i = r.length,
                        o = void 0,
                        s = [];
                    r.forEach(function(e) {
                        if (t) return void e.removeNodes();
                        var r = n.animateView(e, "leave");
                        r ? s.push(r.then(function() {
                            return e.removeNodes()
                        })) : e.removeNodes()
                    });
                    var a = function() {
                        if (n.isAttached)
                            for (o = 0; o < i; ++o) r[o].detached();
                        if (e)
                            for (o = 0; o < i; ++o) {
                                var t = r[o];
                                t && t.returnToCache()
                            }
                        n.children = []
                    };
                    return s.length > 0 ? Promise.all(s).then(function() {
                        return a()
                    }) : a()
                }, e.prototype.attached = function() {
                    var e = void 0,
                        t = void 0,
                        n = void 0,
                        r = void 0;
                    if (!this.isAttached)
                        for (this.isAttached = !0, n = this.children, e = 0, t = n.length; e < t; ++e) r = n[e], r.attached(), this.animateView(r, "enter")
                }, e.prototype.detached = function() {
                    var e = void 0,
                        t = void 0,
                        n = void 0;
                    if (this.isAttached)
                        for (this.isAttached = !1, n = this.children, e = 0, t = n.length; e < t; ++e) n[e].detached()
                }, e.prototype.projectTo = function(e) {
                    var t = this;
                    this.projectToSlots = e, this.add = this._projectionAdd, this.insert = this._projectionInsert, this.move = this._projectionMove, this.remove = this._projectionRemove, this.removeAt = this._projectionRemoveAt, this.removeMany = this._projectionRemoveMany, this.removeAll = this._projectionRemoveAll, this.children.forEach(function(n) {
                        return ct.distributeView(n, e, t)
                    })
                }, e.prototype._projectionAdd = function(e) {
                    ct.distributeView(e, this.projectToSlots, this), this.children.push(e), this.isAttached && e.attached()
                }, e.prototype._projectionInsert = function(e, t) {
                    0 === e && !this.children.length || e >= this.children.length ? this.add(t) : (ct.distributeView(t, this.projectToSlots, this, e), this.children.splice(e, 0, t), this.isAttached && t.attached())
                }, e.prototype._projectionMove = function(e, t) {
                    if (e !== t) {
                        var n = this.children,
                            r = n[e];
                        ct.undistributeView(r, this.projectToSlots, this), ct.distributeView(r, this.projectToSlots, this, t), n.splice(e, 1), n.splice(t, 0, r)
                    }
                }, e.prototype._projectionRemove = function(e, t) {
                    ct.undistributeView(e, this.projectToSlots, this), this.children.splice(this.children.indexOf(e), 1), this.isAttached && e.detached()
                }, e.prototype._projectionRemoveAt = function(e, t) {
                    var n = this.children[e];
                    ct.undistributeView(n, this.projectToSlots, this), this.children.splice(e, 1), this.isAttached && n.detached()
                }, e.prototype._projectionRemoveMany = function(e, t) {
                    var n = this;
                    e.forEach(function(e) {
                        return n.remove(e, t)
                    })
                }, e.prototype._projectionRemoveAll = function(e) {
                    ct.undistributeAll(this.projectToSlots, this);
                    var t = this.children;
                    if (this.isAttached)
                        for (var n = 0, r = t.length; n < r; ++n) t[n].detached();
                    this.children = []
                }, e
            }(),
            ft = (0, s.resolver)(ke = function() {
                function e() {}
                return e.prototype.get = function(e, t) {
                    var n = t.__providerId__;
                    return n in e ? e[n] : e[n] = e.invoke(t)
                }, e
            }()) || ke,
            vt = new ft,
            mt = e.BoundViewFactory = function() {
                function e(e, t, n) {
                    this.parentContainer = e, this.viewFactory = t, this.factoryCreateInstruction = {
                        partReplacements: n
                    }
                }
                return e.prototype.create = function() {
                    var e = this.viewFactory.create(this.parentContainer.createChild(), this.factoryCreateInstruction);
                    return e._isUserControlled = !0, e
                }, e.prototype.setCacheSize = function(e, t) {
                    this.viewFactory.setCacheSize(e, t)
                }, e.prototype.getCachedView = function() {
                    return this.viewFactory.getCachedView()
                }, e.prototype.returnViewToCache = function(e) {
                    this.viewFactory.returnViewToCache(e)
                }, Ve(e, [{
                    key: "isCaching",
                    get: function() {
                        return this.viewFactory.isCaching
                    }
                }]), e
            }(),
            gt = e.ViewFactory = function() {
                function e(e, t, n) {
                    this.isCaching = !1, this.template = e, this.instructions = t, this.resources = n, this.cacheSize = -1, this.cache = null
                }
                return e.prototype.setCacheSize = function(e, t) {
                    e && ("*" === e ? e = Number.MAX_VALUE : "string" == typeof e && (e = parseInt(e, 10))), -1 !== this.cacheSize && t || (this.cacheSize = e), this.cacheSize > 0 ? this.cache = [] : this.cache = null, this.isCaching = this.cacheSize > 0
                }, e.prototype.getCachedView = function() {
                    return null !== this.cache ? this.cache.pop() || null : null
                }, e.prototype.returnViewToCache = function(e) {
                    e.isAttached && e.detached(), e.isBound && e.unbind(), null !== this.cache && this.cache.length < this.cacheSize && (e.fromCache = !0, this.cache.push(e))
                }, e.prototype.create = function(e, t, n) {
                    t = t || Ze.normal;
                    var r = this.getCachedView();
                    if (null !== r) return r;
                    var i = t.enhance ? this.template : this.template.cloneNode(!0),
                        o = i.querySelectorAll(".au-target"),
                        s = this.instructions,
                        a = this.resources,
                        u = [],
                        l = [],
                        c = [],
                        h = Object.create(null),
                        d = {
                            root: e
                        },
                        p = t.partReplacements,
                        f = void 0,
                        v = void 0,
                        m = void 0,
                        g = void 0,
                        y = void 0;
                    for (this.resources._invokeHook("beforeCreate", this, e, i, t), n && null !== this.surrogateInstruction && k(e, n, this.surrogateInstruction, u, l, c), t.enhance && i.hasAttribute("au-target-id") && (g = i, y = s[g.getAttribute("au-target-id")], x(d, g, y, u, l, c, h, p, a)), f = 0, v = o.length; f < v; ++f) g = o[f], y = s[g.getAttribute("au-target-id")], x(d, g, y, u, l, c, h, p, a);
                    return m = new dt(e, this, i, u, l, c, h), t.initiatedByBehavior || m.created(), this.resources._invokeHook("afterCreate", m), m
                }, e
            }(),
            yt = 0,
            bt = 0,
            wt = e.ViewCompiler = (Ee = (0, s.inject)(ot, ht))(Oe = function() {
                function e(e, t) {
                    this.bindingLanguage = e, this.resources = t
                }
                return e.prototype.compile = function(e, t, n) {
                    t = t || this.resources, n = n || Qe.normal, e = "string" == typeof e ? r.DOM.createTemplateFromMarkup(e) : e;
                    var i = void 0,
                        o = void 0,
                        s = void 0;
                    e.content ? (o = e.getAttribute("part"), s = e.getAttribute("view-cache"), i = r.DOM.adoptNode(e.content)) : i = e, n.targetShadowDOM = n.targetShadowDOM && r.FEATURE.shadowDOM, t._invokeHook("beforeCompile", i, t, n);
                    var a = {};
                    this._compileNode(i, t, a, e, "root", !n.targetShadowDOM);
                    var u = i.firstChild;
                    if (u && 1 === u.nodeType) {
                        var l = u.getAttribute("au-target-id");
                        if (l) {
                            var c = a[l];
                            (c.shadowSlot || c.lifting || c.elementInstruction && !c.elementInstruction.anchorIsContainer) && i.insertBefore(r.DOM.createComment("view"), u)
                        }
                    }
                    var h = new gt(i, a, t);
                    return h.surrogateInstruction = n.compileSurrogate ? this._compileSurrogate(e, t) : null, h.part = o, s && h.setCacheSize(s), t._invokeHook("afterCompile", h), h
                }, e.prototype._compileNode = function(e, t, n, i, o, s) {
                    switch (e.nodeType) {
                        case 1:
                            return this._compileElement(e, t, n, i, o, s);
                        case 3:
                            var a = t.getBindingLanguage(this.bindingLanguage).inspectTextContent(t, e.wholeText);
                            if (a) {
                                var u = r.DOM.createElement("au-marker"),
                                    l = M(u);
                                for ((e.parentNode || i).insertBefore(u, e), e.textContent = " ", n[l] = Ke.contentExpression(a); e.nextSibling && 3 === e.nextSibling.nodeType;)(e.parentNode || i).removeChild(e.nextSibling)
                            } else
                                for (; e.nextSibling && 3 === e.nextSibling.nodeType;) e = e.nextSibling;
                            return e.nextSibling;
                        case 11:
                            for (var c = e.firstChild; c;) c = this._compileNode(c, t, n, e, o, s)
                    }
                    return e.nextSibling
                }, e.prototype._compileSurrogate = function(e, t) {
                    var n = e.tagName.toLowerCase(),
                        r = e.attributes,
                        i = t.getBindingLanguage(this.bindingLanguage),
                        o = void 0,
                        s = void 0,
                        a = void 0,
                        u = void 0,
                        l = void 0,
                        c = void 0,
                        h = void 0,
                        d = void 0,
                        p = void 0,
                        f = void 0,
                        v = [],
                        m = void 0,
                        g = [],
                        y = {},
                        b = !1,
                        w = [];
                    for (u = 0, l = r.length; u < l; ++u) {
                        if (c = r[u], h = c.name, d = c.value, p = i.inspectAttribute(t, n, h, d), (f = t.getAttribute(p.attrName)) && (o = t.mapAttribute(p.attrName)) && (s = f.attributes[o]) && (p.defaultBindingMode = s.defaultBindingMode, p.command || p.expression || (p.command = s.hasOptions ? "options" : null), p.command && "options" !== p.command && f.primaryProperty)) {
                            var _ = f.primaryProperty;
                            h = p.attrName = _.name, p.defaultBindingMode = _.defaultBindingMode
                        }
                        if (a = i.createAttributeInstruction(t, e, p, void 0, f))
                            if (a.alteredAttr && (f = t.getAttribute(a.attrName)), a.discrete) v.push(a);
                            else if (f) {
                            if (a.type = f, this._configureProperties(a, t), f.liftsContent) throw new Error("You cannot place a template controller on a surrogate element.");
                            g.push(a)
                        } else v.push(a.attributes[a.attrName]);
                        else if (f) {
                            if (a = Ze.attribute(h, f), a.attributes[t.mapAttribute(h)] = d, f.liftsContent) throw new Error("You cannot place a template controller on a surrogate element.");
                            g.push(a)
                        } else "id" !== h && "part" !== h && "replace-part" !== h && (b = !0, y[h] = d)
                    }
                    if (v.length || g.length || b) {
                        for (u = 0, l = g.length; u < l; ++u) a = g[u], a.type.compile(this, t, e, a), w.push(a.type.target);
                        for (u = 0, l = v.length; u < l; ++u) m = v[u], void 0 !== m.attrToRemove && e.removeAttribute(m.attrToRemove);
                        return Ke.surrogate(w, g, v, y)
                    }
                    return null
                }, e.prototype._compileElement = function(e, t, n, r, i, o) {
                    var s = e.tagName.toLowerCase(),
                        a = e.attributes,
                        u = [],
                        l = void 0,
                        c = [],
                        h = [],
                        d = t.getBindingLanguage(this.bindingLanguage),
                        p = void 0,
                        f = void 0,
                        v = void 0,
                        m = void 0,
                        g = void 0,
                        y = void 0,
                        b = void 0,
                        w = void 0,
                        _ = void 0,
                        x = void 0,
                        S = void 0,
                        C = void 0,
                        k = void 0,
                        O = void 0,
                        A = void 0,
                        P = void 0;
                    if ("slot" === s) return o && (e = R(this, t, e, n, i)), e.nextSibling;
                    for ("template" === s ? (f = this.compile(e, t), f.part = e.getAttribute("part")) : (v = t.getElement(e.getAttribute("as-element") || s)) && (m = Ze.element(e, v), v.processAttributes(this, t, e, a, m), c.push(m)), y = 0, b = a.length; y < b; ++y) {
                        if (w = a[y], _ = w.name, x = w.value, C = d.inspectAttribute(t, s, _, x), o && "slot" === C.attrName && (C.attrName = _ = "au-slot"), v = t.getAttribute(C.attrName), g = null, v) {
                            if ((O = t.mapAttribute(C.attrName)) && (k = v.attributes[O]) && (C.defaultBindingMode = k.defaultBindingMode, C.command || C.expression || (C.command = k.hasOptions ? "options" : null), C.command && "options" !== C.command && v.primaryProperty)) {
                                var T = v.primaryProperty;
                                _ = C.attrName = T.name, C.defaultBindingMode = T.defaultBindingMode
                            }
                        } else m && (g = m.type.attributes[C.attrName]) && (C.defaultBindingMode = g.defaultBindingMode);
                        if (S = g ? d.createAttributeInstruction(t, e, C, m) : d.createAttributeInstruction(t, e, C, void 0, v))
                            if (S.alteredAttr && (v = t.getAttribute(S.attrName)), S.discrete) u.push(S);
                            else if (v) {
                            if (S.type = v, this._configureProperties(S, t), v.liftsContent) {
                                S.originalAttrName = _, p = S;
                                break
                            }
                            c.push(S)
                        } else g ? m.attributes[C.attrName].targetProperty = g.name : u.push(S.attributes[S.attrName]);
                        else if (v) {
                            if (S = Ze.attribute(_, v), S.attributes[t.mapAttribute(_)] = x, v.liftsContent) {
                                S.originalAttrName = _, p = S;
                                break
                            }
                            c.push(S)
                        } else g && (m.attributes[_] = x)
                    }
                    if (p) p.viewFactory = f, e = p.type.compile(this, t, e, p, r), A = M(e), n[A] = Ke.lifting(i, p);
                    else {
                        if (u.length || c.length) {
                            for (P = !!c.length && E(), y = 0, b = c.length; y < b; ++y) S = c[y], S.type.compile(this, t, e, S, r), h.push(S.type.target);
                            for (y = 0, b = u.length; y < b; ++y) l = u[y], void 0 !== l.attrToRemove && e.removeAttribute(l.attrToRemove);
                            A = M(e), n[A] = Ke.normal(P, i, h, c, u, m)
                        }
                        if (m && m.skipContentProcessing) return e.nextSibling;
                        for (var j = e.firstChild; j;) j = this._compileNode(j, t, n, e, P || i, o)
                    }
                    return e.nextSibling
                }, e.prototype._configureProperties = function(e, t) {
                    var n = e.type,
                        r = e.attrName,
                        i = e.attributes,
                        o = void 0,
                        s = void 0,
                        a = void 0,
                        u = t.mapAttribute(r);
                    u && r in i && u !== r && (i[u] = i[r], delete i[r]);
                    for (s in i) null !== (a = i[s]) && "object" === (void 0 === a ? "undefined" : Be(a)) && (o = n.attributes[s], a.targetProperty = void 0 !== o ? o.name : s)
                }, e
            }()) || Oe,
            _t = e.ResourceModule = function() {
                function e(e) {
                    this.id = e, this.moduleInstance = null, this.mainResource = null, this.resources = null, this.viewStrategy = null, this.isInitialized = !1, this.onLoaded = null, this.loadContext = null
                }
                return e.prototype.initialize = function(e) {
                    var t = this.mainResource,
                        n = this.resources,
                        r = this.viewStrategy;
                    if (!this.isInitialized) {
                        this.isInitialized = !0, void 0 !== t && (t.metadata.viewStrategy = r, t.initialize(e));
                        for (var i = 0, o = n.length; i < o; ++i) t = n[i], t.metadata.viewStrategy = r, t.initialize(e)
                    }
                }, e.prototype.register = function(e, t) {
                    var n = this.mainResource,
                        r = this.resources;
                    void 0 !== n && (n.register(e, t), t = null);
                    for (var i = 0, o = r.length; i < o; ++i) r[i].register(e, t), t = null
                }, e.prototype.load = function(e, t) {
                    if (null !== this.onLoaded) return this.loadContext === t ? Promise.resolve() : this.onLoaded;
                    var n = this.mainResource,
                        r = this.resources,
                        i = void 0;
                    if (void 0 !== n) {
                        i = new Array(r.length + 1), i[0] = n.load(e, t);
                        for (var o = 0, s = r.length; o < s; ++o) i[o + 1] = r[o].load(e, t)
                    } else {
                        i = new Array(r.length);
                        for (var a = 0, u = r.length; a < u; ++a) i[a] = r[a].load(e, t)
                    }
                    return this.loadContext = t, this.onLoaded = Promise.all(i), this.onLoaded
                }, e
            }(),
            xt = e.ResourceDescription = function() {
                function e(e, t, r) {
                    r || (r = n.metadata.get(n.metadata.resource, t)) || (r = new Pt, r.elementName = c(e), n.metadata.define(n.metadata.resource, r, t)), r instanceof Pt ? void 0 === r.elementName ? r.elementName = c(e) : void 0 === r.attributeName ? r.attributeName = c(e) : null === r.attributeName && null === r.elementName && Pt.convention(e, r) : r.name || (r.name = c(e)), this.metadata = r, this.value = t
                }
                return e.prototype.initialize = function(e) {
                    this.metadata.initialize(e, this.value)
                }, e.prototype.register = function(e, t) {
                    this.metadata.register(e, t)
                }, e.prototype.load = function(e, t) {
                    return this.metadata.load(e, this.value, t)
                }, e
            }(),
            St = e.ModuleAnalyzer = function() {
                function e() {
                    this.cache = Object.create(null)
                }
                return e.prototype.getAnalysis = function(e) {
                    return this.cache[e]
                }, e.prototype.analyze = function(e, t, r) {
                    var i = void 0,
                        s = void 0,
                        u = void 0,
                        l = void 0,
                        h = void 0,
                        d = void 0,
                        p = [],
                        f = void 0,
                        v = void 0,
                        m = void 0;
                    if (m = this.cache[e]) return m;
                    m = new _t(e), this.cache[e] = m, "function" == typeof t && (t = {
                        default: t
                    }), r && (i = new xt(r, t[r]));
                    for (h in t) d = t[h], h !== r && "function" == typeof d && (l = n.metadata.get(n.metadata.resource, d), l ? (null === l.attributeName && null === l.elementName && Pt.convention(h, l), null === l.attributeName && null === l.elementName && (l.elementName = c(h)), !i && l instanceof Pt && null !== l.elementName ? i = new xt(h, d, l) : p.push(new xt(h, d, l))) : Xe.decorates(d) ? v = d : d instanceof o.TemplateRegistryEntry ? v = new nt(e, d) : (f = Pt.convention(h)) ? (null === f.elementName || i ? p.push(new xt(h, d, f)) : i = new xt(h, d, f), n.metadata.define(n.metadata.resource, f, d)) : (f = a.ValueConverterResource.convention(h) || a.BindingBehaviorResource.convention(h) || We.convention(h)) ? (p.push(new xt(h, d, f)), n.metadata.define(n.metadata.resource, f, d)) : s || (s = d, u = h));
                    return !i && s && (i = new xt(u, s)), m.moduleInstance = t, m.mainResource = i, m.resources = p, m.viewStrategy = v, m
                }, e
            }(),
            Ct = Ie.getLogger("templating"),
            kt = function() {
                function e(e) {
                    var t = this;
                    e.then(function(e) {
                        return t.viewFactory = e
                    })
                }
                return e.prototype.create = function(e, t, n, r) {
                    return this.viewFactory.create(e, t, n, r)
                }, e.prototype.setCacheSize = function(e, t) {
                    this.viewFactory.setCacheSize(e, t)
                }, e.prototype.getCachedView = function() {
                    return this.viewFactory.getCachedView()
                }, e.prototype.returnViewToCache = function(e) {
                    this.viewFactory.returnViewToCache(e)
                }, Ve(e, [{
                    key: "isCaching",
                    get: function() {
                        return this.viewFactory.isCaching
                    }
                }]), e
            }(),
            Et = e.ViewEngine = (Me = (0, s.inject)(o.Loader, s.Container, wt, St, ht))((Pe = Ae = function() {
                function e(e, t, n, r, i) {
                    this.loader = e, this.container = t, this.viewCompiler = n, this.moduleAnalyzer = r, this.appResources = i, this._pluginMap = {};
                    var o = new Pt;
                    o.attributeName = "au-slot", o.initialize(t, at), o.register(i)
                }
                return e.prototype.addResourcePlugin = function(e, t) {
                    var n = e.replace(".", "") + "-resource-plugin";
                    this._pluginMap[e] = n, this.loader.addPlugin(n, t)
                }, e.prototype.loadViewFactory = function(e, t, n, r) {
                    var i = this;
                    return n = n || new $e, A(this.loader, e).then(function(o) {
                        return o.onReady ? n.hasDependency(e) ? null === o.template ? o.onReady : Promise.resolve(new kt(o.onReady)) : (n.addDependency(e), o.onReady) : (n.addDependency(e), o.onReady = i.loadTemplateResources(o, t, n, r).then(function(e) {
                            if (o.resources = e, null === o.template) return o.factory = null;
                            var n = i.viewCompiler.compile(o.template, e, t);
                            return o.factory = n
                        }), o.onReady)
                    })
                }, e.prototype.loadTemplateResources = function(t, r, o, s) {
                    var a = new ht(this.appResources, t.address),
                        u = t.dependencies,
                        l = void 0,
                        c = void 0;
                    if (r = r || Qe.normal, 0 === u.length && !r.associatedModuleId) return Promise.resolve(a);
                    if (l = u.map(function(e) {
                            return e.src
                        }), c = u.map(function(e) {
                            return e.name
                        }), Ct.debug("importing resources for " + t.address, l), s) {
                        var h = n.metadata.get(e.viewModelRequireMetadataKey, s);
                        if (h) {
                            for (var d = l.length, p = 0, f = h.length; p < f; ++p) {
                                var v = h[p],
                                    m = "function" == typeof v ? n.Origin.get(v).moduleId : (0, i.relativeToFile)(v.src || v, t.address); - 1 === l.indexOf(m) && (l.push(m), c.push(v.as))
                            }
                            Ct.debug("importing ViewModel resources for " + r.associatedModuleId, l.slice(d))
                        }
                    }
                    return this.importViewResources(l, c, a, r, o)
                }, e.prototype.importViewModelResource = function(e, t) {
                    var r = this;
                    return this.loader.loadModule(e).then(function(i) {
                        var o = n.Origin.get(i).moduleId,
                            s = r.moduleAnalyzer.analyze(o, i, t);
                        if (!s.mainResource) throw new Error('No view model found in module "' + e + '".');
                        return s.initialize(r.container), s.mainResource
                    })
                }, e.prototype.importViewResources = function(e, t, r, i, o) {
                    var s = this;
                    return o = o || new $e, i = i || Qe.normal, e = e.map(function(e) {
                        return s._applyLoaderPlugin(e)
                    }), this.loader.loadAllModules(e).then(function(e) {
                        var a = void 0,
                            u = void 0,
                            l = void 0,
                            c = void 0,
                            h = void 0,
                            d = void 0,
                            p = s.container,
                            f = s.moduleAnalyzer,
                            v = new Array(e.length);
                        for (a = 0, u = e.length; a < u; ++a) h = e[a], c = n.Origin.get(h).moduleId, l = f.analyze(c, h), l.initialize(p), l.register(r, t[a]), v[a] = l;
                        for (i.associatedModuleId && (d = f.getAnalysis(i.associatedModuleId)) && d.register(r), a = 0, u = v.length; a < u; ++a) v[a] = v[a].load(p, o);
                        return Promise.all(v).then(function() {
                            return r
                        })
                    })
                }, e.prototype._applyLoaderPlugin = function(e) {
                    var t = e.lastIndexOf(".");
                    if (-1 !== t) {
                        var n = e.substring(t),
                            r = this._pluginMap[n];
                        return void 0 === r ? e : this.loader.applyPluginToUrl(e, r)
                    }
                    return e
                }, e
            }(), Ae.viewModelRequireMetadataKey = "aurelia:view-model-require", Re = Pe)) || Re,
            Ot = e.Controller = function() {
                function e(e, t, n, r) {
                    this.behavior = e, this.instruction = t, this.viewModel = n, this.isAttached = !1, this.view = null, this.isBound = !1, this.scope = null, this.container = r, this.elementEvents = r.elementEvents || null;
                    var i = e.observerLocator.getOrCreateObserversLookup(n),
                        o = e.handlesBind,
                        s = t.attributes,
                        a = this.boundProperties = [],
                        u = e.properties,
                        l = void 0,
                        c = void 0;
                    for (e._ensurePropertiesDefined(n, i), l = 0, c = u.length; l < c; ++l) u[l]._initialize(n, i, s, o, a)
                }
                return e.prototype.created = function(e) {
                    this.behavior.handlesCreated && this.viewModel.created(e, this.view)
                }, e.prototype.automate = function(e, t) {
                    this.view.bindingContext = this.viewModel, this.view.overrideContext = e || (0, a.createOverrideContext)(this.viewModel), this.view._isUserControlled = !0, this.behavior.handlesCreated && this.viewModel.created(t || null, this.view), this.bind(this.view)
                }, e.prototype.bind = function(e) {
                    var t = this.behavior.handlesBind,
                        n = this.boundProperties,
                        r = void 0,
                        i = void 0,
                        o = void 0,
                        s = void 0,
                        u = void 0;
                    if (this.isBound) {
                        if (this.scope === e) return;
                        this.unbind()
                    }
                    for (this.isBound = !0, this.scope = e, r = 0, i = n.length; r < i; ++r) o = n[r], s = o.observer, u = s.selfSubscriber, s.publishing = !1, t && (s.selfSubscriber = null), o.binding.bind(e), s.call(), s.publishing = !0, s.selfSubscriber = u;
                    var l = void 0;
                    null !== this.view ? (t && (this.view.viewModelScope = e), this.viewModel === e.overrideContext.bindingContext ? l = e.overrideContext : this.instruction.inheritBindingContext ? l = (0, a.createOverrideContext)(this.viewModel, e.overrideContext) : (l = (0, a.createOverrideContext)(this.viewModel), l.__parentOverrideContext = e.overrideContext), this.view.bind(this.viewModel, l)) : t && (l = e.overrideContext, void 0 !== e.overrideContext.__parentOverrideContext && this.viewModel.viewFactory && this.viewModel.viewFactory.factoryCreateInstruction.partReplacements && (l = Object.assign({}, e.overrideContext), l.parentOverrideContext = e.overrideContext.__parentOverrideContext), this.viewModel.bind(e.bindingContext, l))
                }, e.prototype.unbind = function() {
                    if (this.isBound) {
                        var e = this.boundProperties,
                            t = void 0,
                            n = void 0;
                        for (this.isBound = !1, this.scope = null, null !== this.view && this.view.unbind(), this.behavior.handlesUnbind && this.viewModel.unbind(), null !== this.elementEvents && this.elementEvents.disposeAll(), t = 0, n = e.length; t < n; ++t) e[t].binding.unbind()
                    }
                }, e.prototype.attached = function() {
                    this.isAttached || (this.isAttached = !0, this.behavior.handlesAttached && this.viewModel.attached(), null !== this.view && this.view.attached())
                }, e.prototype.detached = function() {
                    this.isAttached && (this.isAttached = !1, null !== this.view && this.view.detached(), this.behavior.handlesDetached && this.viewModel.detached())
                }, e
            }(),
            Mt = e.BehaviorPropertyObserver = (Te = (0, a.subscriberCollection)())(je = function() {
                function e(e, t, n, r, i) {
                    this.taskQueue = e, this.obj = t, this.propertyName = n, this.notqueued = !0, this.publishing = !1, this.selfSubscriber = r, this.currentValue = this.oldValue = i
                }
                return e.prototype.getValue = function() {
                    return this.currentValue
                }, e.prototype.setValue = function(e) {
                    var t = this.currentValue;
                    t !== e && (this.oldValue = t, this.currentValue = e, this.publishing && this.notqueued && (this.taskQueue.flushing ? this.call() : (this.notqueued = !1, this.taskQueue.queueMicroTask(this))))
                }, e.prototype.call = function() {
                    var e = this.oldValue,
                        t = this.currentValue;
                    this.notqueued = !0, t !== e && (this.selfSubscriber && this.selfSubscriber(t, e), this.callSubscribers(t, e), this.oldValue = t)
                }, e.prototype.subscribe = function(e, t) {
                    this.addSubscriber(e, t)
                }, e.prototype.unsubscribe = function(e, t) {
                    this.removeSubscriber(e, t)
                }, e
            }()) || je,
            Rt = e.BindableProperty = function() {
                function e(e) {
                    "string" == typeof e ? this.name = e : Object.assign(this, e), this.attribute = this.attribute || c(this.name), null !== this.defaultBindingMode && void 0 !== this.defaultBindingMode || (this.defaultBindingMode = a.bindingMode.oneWay), this.changeHandler = this.changeHandler || null, this.owner = null, this.descriptor = null
                }
                return e.prototype.registerWith = function(e, t, n) {
                    if (t.properties.push(this), t.attributes[this.attribute] = this, this.owner = t, n) return this.descriptor = n, this._configureDescriptor(t, n)
                }, e.prototype._configureDescriptor = function(e, t) {
                    var n = this.name;
                    return t.configurable = !0, t.enumerable = !0, "initializer" in t && (this.defaultValue = t.initializer, delete t.initializer, delete t.writable), "value" in t && (this.defaultValue = t.value, delete t.value, delete t.writable), t.get = function() {
                        return P(e, this, n).getValue()
                    }, t.set = function(t) {
                        P(e, this, n).setValue(t)
                    }, t.get.getObserver = function(t) {
                        return P(e, t, n)
                    }, t
                }, e.prototype.defineOn = function(e, t) {
                    var n = this.name,
                        r = void 0;
                    null === this.changeHandler && (r = n + "Changed") in e.prototype && (this.changeHandler = r), null === this.descriptor && Object.defineProperty(e.prototype, n, this._configureDescriptor(t, {}))
                }, e.prototype.createObserver = function(e) {
                    var t = null,
                        n = this.defaultValue,
                        r = this.changeHandler,
                        i = this.name,
                        o = void 0;
                    if (!this.hasOptions) {
                        if (r in e) t = "propertyChanged" in e ? function(t, n) {
                            e[r](t, n), e.propertyChanged(i, t, n)
                        } : function(t, n) {
                            return e[r](t, n)
                        };
                        else if ("propertyChanged" in e) t = function(t, n) {
                            return e.propertyChanged(i, t, n)
                        };
                        else if (null !== r) throw new Error("Change handler " + r + " was specified but not declared on the class.");
                        return void 0 !== n && (o = "function" == typeof n ? n.call(e) : n),
                            new Mt(this.owner.taskQueue, e, this.name, t, o)
                    }
                }, e.prototype._initialize = function(e, t, n, r, i) {
                    var o = void 0,
                        s = void 0,
                        a = void 0,
                        u = this.defaultValue;
                    if (this.isDynamic)
                        for (var l in n) this._createDynamicProperty(e, t, r, l, n[l], i);
                    else this.hasOptions || (s = t[this.name], null !== n && (o = s.selfSubscriber, a = n[this.attribute], r && (s.selfSubscriber = null), "string" == typeof a ? (e[this.name] = a, s.call()) : a ? i.push({
                        observer: s,
                        binding: a.createBinding(e)
                    }) : void 0 !== u && s.call(), s.selfSubscriber = o), s.publishing = !0)
                }, e.prototype._createDynamicProperty = function(e, t, n, r, i, o) {
                    var s = r + "Changed",
                        a = null,
                        u = void 0,
                        l = void 0;
                    s in e ? a = "propertyChanged" in e ? function(t, n) {
                        e[s](t, n), e.propertyChanged(r, t, n)
                    } : function(t, n) {
                        return e[s](t, n)
                    } : "propertyChanged" in e && (a = function(t, n) {
                        return e.propertyChanged(r, t, n)
                    }), u = t[r] = new Mt(this.owner.taskQueue, e, r, a), Object.defineProperty(e, r, {
                        configurable: !0,
                        enumerable: !0,
                        get: u.getValue.bind(u),
                        set: u.setValue.bind(u)
                    }), n && (u.selfSubscriber = null), "string" == typeof i ? (e[r] = i, u.call()) : i && (l = {
                        observer: u,
                        binding: i.createBinding(e)
                    }, o.push(l)), u.publishing = !0, u.selfSubscriber = a
                }, e
            }(),
            At = 0,
            Pt = e.HtmlBehaviorResource = function() {
                function e() {
                    this.elementName = null, this.attributeName = null, this.attributeDefaultBindingMode = void 0, this.liftsContent = !1, this.targetShadowDOM = !1, this.shadowDOMOptions = null, this.processAttributes = L, this.processContent = j, this.usesShadowDOM = !1, this.childBindings = null, this.hasDynamicOptions = !1, this.containerless = !1, this.properties = [], this.attributes = {}, this.isInitialized = !1, this.primaryProperty = null
                }
                return e.convention = function(t, n) {
                    var r = void 0;
                    return t.endsWith("CustomAttribute") && (r = n || new e, r.attributeName = c(t.substring(0, t.length - 15))), t.endsWith("CustomElement") && (r = n || new e, r.elementName = c(t.substring(0, t.length - 13))), r
                }, e.prototype.addChildBinding = function(e) {
                    null === this.childBindings && (this.childBindings = []), this.childBindings.push(e)
                }, e.prototype.initialize = function(e, t) {
                    var n = t.prototype,
                        i = this.properties,
                        o = this.attributeName,
                        s = this.attributeDefaultBindingMode,
                        l = void 0,
                        c = void 0,
                        h = void 0;
                    if (!this.isInitialized)
                        if (this.isInitialized = !0, t.__providerId__ = T(), this.observerLocator = e.get(a.ObserverLocator), this.taskQueue = e.get(u.TaskQueue), this.target = t, this.usesShadowDOM = this.targetShadowDOM && r.FEATURE.shadowDOM, this.handlesCreated = "created" in n, this.handlesBind = "bind" in n, this.handlesUnbind = "unbind" in n, this.handlesAttached = "attached" in n, this.handlesDetached = "detached" in n, this.htmlName = this.elementName || this.attributeName, null !== o)
                            if (0 === i.length && new Rt({
                                    name: "value",
                                    changeHandler: "valueChanged" in n ? "valueChanged" : null,
                                    attribute: o,
                                    defaultBindingMode: s
                                }).registerWith(t, this), h = i[0], 1 === i.length && "value" === h.name) h.isDynamic = h.hasOptions = this.hasDynamicOptions, h.defineOn(t, this);
                            else {
                                for (l = 0, c = i.length; l < c; ++l)
                                    if (i[l].defineOn(t, this), i[l].primaryProperty) {
                                        if (this.primaryProperty) throw new Error("Only one bindable property on a custom element can be defined as the default");
                                        this.primaryProperty = i[l]
                                    } h = new Rt({
                                    name: "value",
                                    changeHandler: "valueChanged" in n ? "valueChanged" : null,
                                    attribute: o,
                                    defaultBindingMode: s
                                }), h.hasOptions = !0, h.registerWith(t, this)
                            }
                    else
                        for (l = 0, c = i.length; l < c; ++l) i[l].defineOn(t, this)
                }, e.prototype.register = function(e, t) {
                    var n = this;
                    null !== this.attributeName && (e.registerAttribute(t || this.attributeName, this, this.attributeName), Array.isArray(this.aliases) && this.aliases.forEach(function(t) {
                        e.registerAttribute(t, n, n.attributeName)
                    })), null !== this.elementName && e.registerElement(t || this.elementName, this)
                }, e.prototype.load = function(e, t, r, i, o) {
                    var s = this,
                        a = void 0;
                    return null !== this.elementName ? (i = e.get(it).getViewStrategy(i || this.viewStrategy || t), a = new Qe(this.targetShadowDOM, !0), i.moduleId || (i.moduleId = n.Origin.get(t).moduleId), i.loadViewFactory(e.get(Et), a, r, t).then(function(e) {
                        return o && s.viewFactory || (s.viewFactory = e), e
                    })) : Promise.resolve(this)
                }, e.prototype.compile = function(e, t, n, i, o) {
                    if (this.liftsContent) {
                        if (!i.viewFactory) {
                            var s = r.DOM.createElement("template"),
                                a = r.DOM.createDocumentFragment(),
                                u = n.getAttribute("view-cache"),
                                l = n.getAttribute("part");
                            n.removeAttribute(i.originalAttrName), r.DOM.replaceNode(s, n, o), a.appendChild(n), i.viewFactory = e.compile(a, t), l && (i.viewFactory.part = l, n.removeAttribute("part")), u && (i.viewFactory.setCacheSize(u), n.removeAttribute("view-cache")), n = s
                        }
                    } else if (null !== this.elementName) {
                        var c = {};
                        if (this.processContent(e, t, n, i) && n.hasChildNodes()) {
                            for (var d = n.firstChild, p = this.usesShadowDOM ? null : r.DOM.createElement("au-content"), f = void 0, v = void 0; d;) f = d.nextSibling, "TEMPLATE" === d.tagName && (v = d.getAttribute("replace-part")) ? (c[v] = e.compile(d, t), r.DOM.removeNode(d, o), i.partReplacements = c) : null !== p && (3 === d.nodeType && h(d) ? r.DOM.removeNode(d, o) : p.appendChild(d)), d = f;
                            null !== p && p.hasChildNodes() && n.appendChild(p), i.skipContentProcessing = !1
                        } else i.skipContentProcessing = !0
                    }
                    return n
                }, e.prototype.create = function(e, t, n, i) {
                    var o = void 0,
                        s = null;
                    t = t || Ze.normal, n = n || null, i = i || null, null !== this.elementName && n && (this.usesShadowDOM ? (o = n.attachShadow(this.shadowDOMOptions), e.registerInstance(r.DOM.boundary, o)) : (o = n, this.targetShadowDOM && e.registerInstance(r.DOM.boundary, o))), null !== n && (n.au = s = n.au || {});
                    var a = t.viewModel || e.get(this.target),
                        u = new Ot(this, t, a, e),
                        l = this.childBindings,
                        c = void 0;
                    if (this.liftsContent) s.controller = u;
                    else if (null !== this.elementName) {
                        if (c = t.viewFactory || this.viewFactory, e.viewModel = a, c && (u.view = c.create(e, t, n)), null !== n) {
                            if (s.controller = u, u.view) {
                                if (!this.usesShadowDOM && (1 === n.childNodes.length || n.contentElement)) {
                                    var h = n.childNodes[0] || n.contentElement;
                                    u.view.contentView = {
                                        fragment: h
                                    }, h.parentNode && r.DOM.removeNode(h)
                                }
                                if (t.anchorIsContainer) {
                                    if (null !== l)
                                        for (var d = 0, p = l.length; d < p; ++d) u.view.addBinding(l[d].create(n, a, u));
                                    u.view.appendNodesTo(o)
                                } else u.view.insertNodesBefore(o)
                            } else if (null !== l)
                                for (var f = 0, v = l.length; f < v; ++f) i.push(l[f].create(n, a, u))
                        } else if (u.view) {
                            if (u.view.controller = u, null !== l)
                                for (var m = 0, g = l.length; m < g; ++m) u.view.addBinding(l[m].create(t.host, a, u))
                        } else if (null !== l)
                            for (var y = 0, b = l.length; y < b; ++y) i.push(l[y].create(t.host, a, u))
                    } else if (null !== l)
                        for (var w = 0, _ = l.length; w < _; ++w) i.push(l[w].create(n, a, u));
                    return null !== s && (s[this.htmlName] = u), t.initiatedByBehavior && c && u.view.created(), u
                }, e.prototype._ensurePropertiesDefined = function(e, t) {
                    var n = void 0,
                        r = void 0,
                        i = void 0,
                        o = void 0;
                    if (!("__propertiesDefined__" in t))
                        for (t.__propertiesDefined__ = !0, n = this.properties, r = 0, i = n.length; r < i; ++r) void 0 !== (o = n[r].createObserver(e)) && (t[o.propertyName] = o)
                }, e
            }(),
            Tt = function() {
                function e(e) {
                    this.name = e.name, this.changeHandler = e.changeHandler || this.name + "Changed", this.selector = e.selector, this.all = e.all
                }
                return e.prototype.create = function(e, t, n) {
                    return new Lt(this.selector, e, this.name, t, n, this.changeHandler, this.all)
                }, e
            }(),
            jt = [],
            Lt = function() {
                function e(e, t, n, r, i, o, s) {
                    this.selector = e, this.viewHost = t, this.property = n, this.viewModel = r, this.controller = i, this.changeHandler = o in r ? o : null, this.usesShadowDOM = i.behavior.usesShadowDOM, this.all = s, !this.usesShadowDOM && i.view && i.view.contentView ? this.contentView = i.view.contentView : this.contentView = null
                }
                return e.prototype.matches = function(e) {
                    if (e.matches(this.selector)) {
                        if (null === this.contentView) return !0;
                        var t = this.contentView,
                            n = e.auAssignedSlot;
                        if (n && n.projectFromAnchors) {
                            for (var r = n.projectFromAnchors, i = 0, o = r.length; i < o; ++i)
                                if (r[i].auOwnerView === t) return !0;
                            return !1
                        }
                        return e.auOwnerView === t
                    }
                    return !1
                }, e.prototype.bind = function(e) {
                    var t = this.viewHost,
                        n = this.viewModel,
                        i = t.__childObserver__;
                    if (!i) {
                        i = t.__childObserver__ = r.DOM.createMutationObserver(V);
                        var o = {
                            childList: !0,
                            subtree: !this.usesShadowDOM
                        };
                        i.observe(t, o), i.binders = []
                    }
                    if (i.binders.push(this), this.usesShadowDOM) {
                        var s = t.firstElementChild;
                        if (this.all) {
                            var a = n[this.property];
                            for (a ? a.length = 0 : a = n[this.property] = []; s;) this.matches(s) && a.push(s.au && s.au.controller ? s.au.controller.viewModel : s), s = s.nextElementSibling;
                            null !== this.changeHandler && this.viewModel[this.changeHandler](jt)
                        } else
                            for (; s;) {
                                if (this.matches(s)) {
                                    var u = s.au && s.au.controller ? s.au.controller.viewModel : s;
                                    this.viewModel[this.property] = u, null !== this.changeHandler && this.viewModel[this.changeHandler](u);
                                    break
                                }
                                s = s.nextElementSibling
                            }
                    }
                }, e.prototype.onRemove = function(e) {
                    if (this.matches(e)) {
                        var t = e.au && e.au.controller ? e.au.controller.viewModel : e;
                        if (this.all) {
                            var n = this.viewModel[this.property] || (this.viewModel[this.property] = []),
                                r = n.indexOf(t);
                            return -1 !== r && n.splice(r, 1), !0
                        }
                        return !1
                    }
                    return !1
                }, e.prototype.onAdd = function(e) {
                    if (this.matches(e)) {
                        var t = e.au && e.au.controller ? e.au.controller.viewModel : e;
                        if (this.all) {
                            for (var n = this.viewModel[this.property] || (this.viewModel[this.property] = []), r = 0, i = e.previousElementSibling; i;) this.matches(i) && r++, i = i.previousElementSibling;
                            return n.splice(r, 0, t), !0
                        }
                        this.viewModel[this.property] = t, null !== this.changeHandler && this.viewModel[this.changeHandler](t)
                    }
                    return !1
                }, e.prototype.unbind = function() {
                    this.viewHost.__childObserver__ && (this.viewHost.__childObserver__.disconnect(), this.viewHost.__childObserver__ = null)
                }, e
            }(),
            Ft = e.SwapStrategies = {
                before: function(e, t, n) {
                    return void 0 === t ? n() : n().then(function() {
                        return B(e, t)
                    })
                },
                with: function(e, t, n) {
                    return void 0 === t ? n() : Promise.all([B(e, t), n()])
                },
                after: function(e, t, n) {
                    return Promise.resolve(e.removeAll(!0)).then(n)
                }
            },
            Nt = e.CompositionEngine = (Le = (0, s.inject)(Et, it))(Fe = function() {
                function e(e, t) {
                    this.viewEngine = e, this.viewLocator = t
                }
                return e.prototype._swap = function(e, t) {
                    var n = Ft[e.swapOrder] || Ft.after,
                        r = e.viewSlot.children.slice();
                    return n(e.viewSlot, r, function() {
                        return Promise.resolve(e.viewSlot.add(t)).then(function() {
                            e.currentController && e.currentController.unbind()
                        })
                    }).then(function() {
                        e.compositionTransactionNotifier && e.compositionTransactionNotifier.done()
                    })
                }, e.prototype._createControllerAndSwap = function(e) {
                    var t = this;
                    return this.createController(e).then(function(n) {
                        return n.automate(e.overrideContext, e.owningView), e.compositionTransactionOwnershipToken ? e.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function() {
                            return t._swap(e, n.view)
                        }).then(function() {
                            return n
                        }) : t._swap(e, n.view).then(function() {
                            return n
                        })
                    })
                }, e.prototype.createController = function(e) {
                    var t = this,
                        n = void 0,
                        r = void 0,
                        i = void 0,
                        o = void 0;
                    return this.ensureViewModel(e).then(q).then(function() {
                        n = e.childContainer, r = e.viewModel, i = e.viewModelResource, o = i.metadata;
                        var s = t.viewLocator.getViewStrategy(e.view || r);
                        return e.viewResources && s.makeRelativeTo(e.viewResources.viewUrl), o.load(n, i.value, null, s, !0)
                    }).then(function(t) {
                        return o.create(n, Ze.dynamic(e.host, r, t))
                    })
                }, e.prototype.ensureViewModel = function(e) {
                    var t = e.childContainer = e.childContainer || e.container.createChild();
                    if ("string" == typeof e.viewModel) return e.viewModel = e.viewResources ? e.viewResources.relativeToView(e.viewModel) : e.viewModel, this.viewEngine.importViewModelResource(e.viewModel).then(function(n) {
                        return t.autoRegister(n.value), e.host && t.registerInstance(r.DOM.Element, e.host), e.viewModel = t.viewModel = t.get(n.value), e.viewModelResource = n, e
                    });
                    var i = n.metadata.getOrCreateOwn(n.metadata.resource, Pt, e.viewModel.constructor);
                    return i.elementName = i.elementName || "dynamic-element", i.initialize(e.container || t, e.viewModel.constructor), e.viewModelResource = {
                        metadata: i,
                        value: e.viewModel.constructor
                    }, t.viewModel = e.viewModel, Promise.resolve(e)
                }, e.prototype.compose = function(e) {
                    var t = this;
                    e.childContainer = e.childContainer || e.container.createChild(), e.view = this.viewLocator.getViewStrategy(e.view);
                    var n = e.childContainer.get(Ue),
                        r = n.tryCapture();
                    return r ? e.compositionTransactionOwnershipToken = r : e.compositionTransactionNotifier = n.enlist(), e.viewModel ? this._createControllerAndSwap(e) : e.view ? (e.viewResources && e.view.makeRelativeTo(e.viewResources.viewUrl), e.view.loadViewFactory(this.viewEngine, new Qe).then(function(n) {
                        var r = n.create(e.childContainer);
                        return r.bind(e.bindingContext, e.overrideContext), e.compositionTransactionOwnershipToken ? e.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function() {
                            return t._swap(e, r)
                        }).then(function() {
                            return r
                        }) : t._swap(e, r).then(function() {
                            return r
                        })
                    })) : e.viewSlot ? (e.viewSlot.removeAll(), e.compositionTransactionNotifier && e.compositionTransactionNotifier.done(), Promise.resolve(null)) : Promise.resolve(null)
                }, e
            }()) || Fe,
            Dt = e.ElementConfigResource = function() {
                function e() {}
                return e.prototype.initialize = function(e, t) {}, e.prototype.register = function(e, t) {}, e.prototype.load = function(e, t) {
                    var n = new t;
                    e.get(a.EventManager).registerElementConfig(n)
                }, e
            }(),
            It = {
                mode: "open"
            };
        e.TemplatingEngine = (Ne = (0, s.inject)(s.Container, St, wt, Nt))(De = function() {
            function e(e, t, n, r) {
                this._container = e, this._moduleAnalyzer = t, this._viewCompiler = n, this._compositionEngine = r, e.registerInstance(qe, qe.instance = new qe)
            }
            return e.prototype.configureAnimator = function(e) {
                this._container.unregister(qe), this._container.registerInstance(qe, qe.instance = e)
            }, e.prototype.compose = function(e) {
                return this._compositionEngine.compose(e)
            }, e.prototype.enhance = function(e) {
                e instanceof r.DOM.Element && (e = {
                    element: e
                });
                var t = {},
                    n = e.resources || this._container.get(ht);
                this._viewCompiler._compileNode(e.element, n, t, e.element.parentNode, "root", !0);
                var i = new gt(e.element, t, n),
                    o = e.container || this._container.createChild(),
                    s = i.create(o, Ze.enhance());
                return s.bind(e.bindingContext || {}, e.overrideContext), s.firstChild = s.lastChild = s.fragment, s.fragment = r.DOM.createDocumentFragment(), s.attached(), s
            }, e
        }()) || De
    }), define("aurelia-templating-binding", ["exports", "aurelia-logging", "aurelia-binding", "aurelia-templating"], function(e, t, n, r) {
        "use strict";

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function s(e, t) {
            if ("style" === t) m.getLogger("templating-binding").info('Internet Explorer does not support interpolation in "style" attributes.  Use the style attribute\'s alias, "css" instead.');
            else if (e.parentElement && "TEXTAREA" === e.parentElement.nodeName && "textContent" === t) throw new Error('Interpolation binding cannot be used in the content of a textarea element.  Use <textarea value.bind="expression"></textarea> instead.')
        }

        function a(e) {
            e.container.registerSingleton(r.BindingLanguage, S), e.container.registerAlias(r.BindingLanguage, S)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.TemplatingBindingLanguage = e.SyntaxInterpreter = e.ChildInterpolationBinding = e.InterpolationBinding = e.InterpolationBindingExpression = e.AttributeMap = void 0, e.configure = a;
        var u, l, c, h, d, p, f, v, m = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(t),
            g = e.AttributeMap = (l = u = function() {
                function e(e) {
                    this.elements = Object.create(null), this.allElements = Object.create(null), this.svg = e, this.registerUniversal("accesskey", "accessKey"), this.registerUniversal("contenteditable", "contentEditable"), this.registerUniversal("tabindex", "tabIndex"), this.registerUniversal("textcontent", "textContent"), this.registerUniversal("innerhtml", "innerHTML"), this.registerUniversal("scrolltop", "scrollTop"), this.registerUniversal("scrollleft", "scrollLeft"), this.registerUniversal("readonly", "readOnly"), this.register("label", "for", "htmlFor"), this.register("img", "usemap", "useMap"), this.register("input", "maxlength", "maxLength"), this.register("input", "minlength", "minLength"), this.register("input", "formaction", "formAction"), this.register("input", "formenctype", "formEncType"), this.register("input", "formmethod", "formMethod"), this.register("input", "formnovalidate", "formNoValidate"), this.register("input", "formtarget", "formTarget"), this.register("textarea", "maxlength", "maxLength"), this.register("td", "rowspan", "rowSpan"), this.register("td", "colspan", "colSpan"), this.register("th", "rowspan", "rowSpan"), this.register("th", "colspan", "colSpan")
                }
                return e.prototype.register = function(e, t, n) {
                    e = e.toLowerCase(), t = t.toLowerCase(), (this.elements[e] = this.elements[e] || Object.create(null))[t] = n
                }, e.prototype.registerUniversal = function(e, t) {
                    e = e.toLowerCase(), this.allElements[e] = t
                }, e.prototype.map = function(e, t) {
                    if (this.svg.isStandardSvgAttribute(e, t)) return t;
                    e = e.toLowerCase(), t = t.toLowerCase();
                    var r = this.elements[e];
                    return void 0 !== r && t in r ? r[t] : t in this.allElements ? this.allElements[t] : /(?:^data-)|(?:^aria-)|:/.test(t) ? t : (0, n.camelCase)(t)
                }, e
            }(), u.inject = [n.SVGAnalyzer], l),
            y = e.InterpolationBindingExpression = function() {
                function e(e, t, n, r, i, o) {
                    this.observerLocator = e, this.targetProperty = t, this.parts = n, this.mode = r, this.lookupFunctions = i, this.attribute = this.attrToRemove = o, this.discrete = !1
                }
                return e.prototype.createBinding = function(e) {
                    return 3 === this.parts.length ? new w(e, this.observerLocator, this.parts[1], this.mode, this.lookupFunctions, this.targetProperty, this.parts[0], this.parts[2]) : new b(this.observerLocator, this.parts, e, this.targetProperty, this.mode, this.lookupFunctions)
                }, e
            }(),
            b = e.InterpolationBinding = function() {
                function e(e, t, n, r, i, o) {
                    s(n, r), this.observerLocator = e, this.parts = t, this.target = n, this.targetProperty = r, this.targetAccessor = e.getAccessor(n, r), this.mode = i, this.lookupFunctions = o
                }
                return e.prototype.interpolate = function() {
                    if (this.isBound) {
                        for (var e = "", t = this.parts, n = 0, r = t.length; n < r; n++) e += n % 2 == 0 ? t[n] : this["childBinding" + n].value;
                        this.targetAccessor.setValue(e, this.target, this.targetProperty)
                    }
                }, e.prototype.updateOneTimeBindings = function() {
                    for (var e = 1, t = this.parts.length; e < t; e += 2) {
                        var r = this["childBinding" + e];
                        r.mode === n.bindingMode.oneTime && r.call()
                    }
                }, e.prototype.bind = function(e) {
                    if (this.isBound) {
                        if (this.source === e) return;
                        this.unbind()
                    }
                    this.source = e;
                    for (var t = this.parts, n = 1, r = t.length; n < r; n += 2) {
                        var i = new w(this, this.observerLocator, t[n], this.mode, this.lookupFunctions);
                        i.bind(e), this["childBinding" + n] = i
                    }
                    this.isBound = !0, this.interpolate()
                }, e.prototype.unbind = function() {
                    if (this.isBound) {
                        this.isBound = !1, this.source = null;
                        for (var e = this.parts, t = 1, n = e.length; t < n; t += 2) {
                            this["childBinding" + t].unbind()
                        }
                    }
                }, e
            }(),
            w = e.ChildInterpolationBinding = (c = (0, n.connectable)())(h = function() {
                function e(e, t, n, r, i, o, a, u) {
                    e instanceof b ? this.parent = e : (s(e, o), this.target = e, this.targetProperty = o, this.targetAccessor = t.getAccessor(e, o)), this.observerLocator = t, this.sourceExpression = n, this.mode = r, this.lookupFunctions = i, this.left = a, this.right = u
                }
                return e.prototype.updateTarget = function(e) {
                    (e = null === e || void 0 === e ? "" : e.toString()) !== this.value && (this.value = e, this.parent ? this.parent.interpolate() : this.targetAccessor.setValue(this.left + e + this.right, this.target, this.targetProperty))
                }, e.prototype.call = function() {
                    this.isBound && (this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions), this.updateTarget(this.rawValue), this.mode !== n.bindingMode.oneTime && (this._version++, this.sourceExpression.connect(this, this.source), this.rawValue instanceof Array && this.observeArray(this.rawValue), this.unobserve(!1)))
                }, e.prototype.bind = function(e) {
                    if (this.isBound) {
                        if (this.source === e) return;
                        this.unbind()
                    }
                    this.isBound = !0, this.source = e;
                    var t = this.sourceExpression;
                    t.bind && t.bind(this, e, this.lookupFunctions), this.rawValue = t.evaluate(e, this.lookupFunctions), this.updateTarget(this.rawValue), this.mode === n.bindingMode.oneWay && (0, n.enqueueBindingConnect)(this)
                }, e.prototype.unbind = function() {
                    if (this.isBound) {
                        this.isBound = !1;
                        var e = this.sourceExpression;
                        e.unbind && e.unbind(this, this.source), this.source = null, this.value = null, this.rawValue = null, this.unobserve(!0)
                    }
                }, e.prototype.connect = function(e) {
                    this.isBound && (e && (this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions), this.updateTarget(this.rawValue)), this.sourceExpression.connect(this, this.source), this.rawValue instanceof Array && this.observeArray(this.rawValue))
                }, e
            }()) || h,
            _ = e.SyntaxInterpreter = (p = d = function() {
                function e(e, t, n, r) {
                    this.parser = e, this.observerLocator = t, this.eventManager = n, this.attributeMap = r
                }
                return e.prototype.interpret = function(e, t, n, r, i) {
                    return n.command in this ? this[n.command](e, t, n, r, i) : this.handleUnknownCommand(e, t, n, r, i)
                }, e.prototype.handleUnknownCommand = function(e, t, n, r, i) {
                    return m.getLogger("templating-binding").warn("Unknown binding command.", n), r
                }, e.prototype.determineDefaultBindingMode = function(e, t, r) {
                    var i = e.tagName.toLowerCase();
                    return "input" === i && ("value" === t || "files" === t) && "checkbox" !== e.type && "radio" !== e.type || "input" === i && "checked" === t && ("checkbox" === e.type || "radio" === e.type) || ("textarea" === i || "select" === i) && "value" === t || ("textcontent" === t || "innerhtml" === t) && "true" === e.contentEditable || "scrolltop" === t || "scrollleft" === t ? n.bindingMode.twoWay : r && t in r.attributes && r.attributes[t] && r.attributes[t].defaultBindingMode >= n.bindingMode.oneTime ? r.attributes[t].defaultBindingMode : n.bindingMode.oneWay
                }, e.prototype.bind = function(e, t, i, o, s) {
                    var a = o || r.BehaviorInstruction.attribute(i.attrName);
                    return a.attributes[i.attrName] = new n.BindingExpression(this.observerLocator, this.attributeMap.map(t.tagName, i.attrName), this.parser.parse(i.attrValue), i.defaultBindingMode || this.determineDefaultBindingMode(t, i.attrName, s), e.lookupFunctions), a
                }, e.prototype.trigger = function(e, t, r) {
                    return new n.ListenerExpression(this.eventManager, r.attrName, this.parser.parse(r.attrValue), n.delegationStrategy.none, !0, e.lookupFunctions)
                }, e.prototype.capture = function(e, t, r) {
                    return new n.ListenerExpression(this.eventManager, r.attrName, this.parser.parse(r.attrValue), n.delegationStrategy.capturing, !0, e.lookupFunctions)
                }, e.prototype.delegate = function(e, t, r) {
                    return new n.ListenerExpression(this.eventManager, r.attrName, this.parser.parse(r.attrValue), n.delegationStrategy.bubbling, !0, e.lookupFunctions)
                }, e.prototype.call = function(e, t, i, o) {
                    var s = o || r.BehaviorInstruction.attribute(i.attrName);
                    return s.attributes[i.attrName] = new n.CallExpression(this.observerLocator, i.attrName, this.parser.parse(i.attrValue), e.lookupFunctions), s
                }, e.prototype.options = function(e, t, n, i, o) {
                    var s = i || r.BehaviorInstruction.attribute(n.attrName),
                        a = n.attrValue,
                        u = this.language,
                        l = null,
                        c = "",
                        h = void 0,
                        d = void 0,
                        p = void 0,
                        f = !1,
                        v = !1,
                        m = !1;
                    for (d = 0, p = a.length; d < p; ++d) {
                        if (";" !== (h = a[d]) || f)
                            if (":" === h && null === l) m = !0, l = c.trim(), c = "";
                            else {
                                if ("\\" === h) {
                                    c += h, v = !0;
                                    continue
                                }
                                c += h, null !== l && !1 === v && "'" === h && (f = !f)
                            }
                        else m || (l = this._getPrimaryPropertyName(e, o)), n = u.inspectAttribute(e, "?", l, c.trim()), u.createAttributeInstruction(e, t, n, s, o), s.attributes[n.attrName] || (s.attributes[n.attrName] = n.attrValue), c = "", l = null;
                        v = !1
                    }
                    return m || (l = this._getPrimaryPropertyName(e, o)), null !== l && (n = u.inspectAttribute(e, "?", l, c.trim()), u.createAttributeInstruction(e, t, n, s, o), s.attributes[n.attrName] || (s.attributes[n.attrName] = n.attrValue)), s
                }, e.prototype._getPrimaryPropertyName = function(e, t) {
                    var n = e.getAttribute(t.attributeName);
                    return n && n.primaryProperty ? n.primaryProperty.name : null
                }, e.prototype.for = function(e, t, i, o) {
                    var s = void 0,
                        a = void 0,
                        u = void 0,
                        l = void 0,
                        c = void 0;
                    if (l = i.attrValue, c = l.match(/^ *[[].+[\]]/), s = c ? l.split("of ") : l.split(" of "), 2 !== s.length) throw new Error('Incorrect syntax for "for". The form is: "$local of $items" or "[$key, $value] of $items".');
                    return u = o || r.BehaviorInstruction.attribute(i.attrName), c ? (a = s[0].replace(/[[\]]/g, "").replace(/,/g, " ").replace(/\s+/g, " ").trim().split(" "), u.attributes.key = a[0], u.attributes.value = a[1]) : u.attributes.local = s[0], u.attributes.items = new n.BindingExpression(this.observerLocator, "items", this.parser.parse(s[1]), n.bindingMode.oneWay, e.lookupFunctions), u
                }, e.prototype["two-way"] = function(e, t, i, o) {
                    var s = o || r.BehaviorInstruction.attribute(i.attrName);
                    return s.attributes[i.attrName] = new n.BindingExpression(this.observerLocator, this.attributeMap.map(t.tagName, i.attrName), this.parser.parse(i.attrValue), n.bindingMode.twoWay, e.lookupFunctions), s
                }, e.prototype["one-way"] = function(e, t, i, o) {
                    var s = o || r.BehaviorInstruction.attribute(i.attrName);
                    return s.attributes[i.attrName] = new n.BindingExpression(this.observerLocator, this.attributeMap.map(t.tagName, i.attrName), this.parser.parse(i.attrValue), n.bindingMode.oneWay, e.lookupFunctions), s
                }, e.prototype["one-time"] = function(e, t, i, o) {
                    var s = o || r.BehaviorInstruction.attribute(i.attrName);
                    return s.attributes[i.attrName] = new n.BindingExpression(this.observerLocator, this.attributeMap.map(t.tagName, i.attrName), this.parser.parse(i.attrValue), n.bindingMode.oneTime, e.lookupFunctions), s
                }, e
            }(), d.inject = [n.Parser, n.ObserverLocator, n.EventManager, g], p),
            x = {},
            S = e.TemplatingBindingLanguage = (v = f = function(e) {
                function t(t, n, r, o) {
                    var s = i(this, e.call(this));
                    return s.parser = t, s.observerLocator = n, s.syntaxInterpreter = r, s.emptyStringExpression = s.parser.parse("''"), r.language = s, s.attributeMap = o, s
                }
                return o(t, e), t.prototype.inspectAttribute = function(e, t, r, i) {
                    var o = r.split(".");
                    if (x.defaultBindingMode = null, 2 === o.length) x.attrName = o[0].trim(), x.attrValue = i, x.command = o[1].trim(), "ref" === x.command ? (x.expression = new n.NameExpression(this.parser.parse(i), x.attrName, e.lookupFunctions), x.command = null, x.attrName = "ref") : x.expression = null;
                    else if ("ref" === r) x.attrName = r, x.attrValue = i, x.command = null, x.expression = new n.NameExpression(this.parser.parse(i), "element", e.lookupFunctions);
                    else {
                        x.attrName = r, x.attrValue = i, x.command = null;
                        var s = this.parseInterpolation(e, i);
                        x.expression = null === s ? null : new y(this.observerLocator, this.attributeMap.map(t, r), s, n.bindingMode.oneWay, e.lookupFunctions, r)
                    }
                    return x
                }, t.prototype.createAttributeInstruction = function(e, t, n, i, o) {
                    var s = void 0;
                    if (n.expression) {
                        if ("ref" === n.attrName) return n.expression;
                        s = i || r.BehaviorInstruction.attribute(n.attrName), s.attributes[n.attrName] = n.expression
                    } else n.command && (s = this.syntaxInterpreter.interpret(e, t, n, i, o));
                    return s
                }, t.prototype.inspectTextContent = function(e, t) {
                    var r = this.parseInterpolation(e, t);
                    return null === r ? null : new y(this.observerLocator, "textContent", r, n.bindingMode.oneWay, e.lookupFunctions, "textContent")
                }, t.prototype.parseInterpolation = function(e, t) {
                    for (var n = t.indexOf("${", 0), r = t.length, i = void 0, o = 0, s = 0, a = null, u = void 0, l = void 0, c = 0; n >= 0 && n < r - 2;) {
                        s = 1, u = n, n += 2;
                        do {
                            i = t[n], n++, "'" !== i && '"' !== i ? "\\" !== i ? null === a && ("{" === i ? s++ : "}" === i && s--) : n++ : null === a ? a = i : a === i && (a = null)
                        } while (s > 0 && n < r);
                        if (0 !== s) break;
                        l = l || [], "\\" === t[u - 1] && "\\" !== t[u - 2] ? (l[c] = t.substring(o, u - 1) + t.substring(u, n), c++, l[c] = this.emptyStringExpression, c++) : (l[c] = t.substring(o, u), c++, l[c] = this.parser.parse(t.substring(u + 2, n - 1)), c++), o = n, n = t.indexOf("${", n)
                    }
                    return 0 === c ? null : (l[c] = t.substr(o), l)
                }, t
            }(r.BindingLanguage), f.inject = [n.Parser, n.ObserverLocator, _, g], v)
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("moment", t) : e.moment = t()
    }(this, function() {
        "use strict";

        function e() {
            return yr.apply(null, arguments)
        }

        function t(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
        }

        function n(e) {
            return null != e && "[object Object]" === Object.prototype.toString.call(e)
        }

        function r(e) {
            var t;
            for (t in e) return !1;
            return !0
        }

        function i(e) {
            return void 0 === e
        }

        function o(e) {
            return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
        }

        function s(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function a(e, t) {
            var n, r = [];
            for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
            return r
        }

        function u(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function l(e, t) {
            for (var n in t) u(t, n) && (e[n] = t[n]);
            return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function c(e, t, n, r) {
            return gt(e, t, n, r, !0).utc()
        }

        function h() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }
        }

        function d(e) {
            return null == e._pf && (e._pf = h()), e._pf
        }

        function p(e) {
            if (null == e._isValid) {
                var t = d(e),
                    n = wr.call(t.parsedDateParts, function(e) {
                        return null != e
                    }),
                    r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
                e._isValid = r
            }
            return e._isValid
        }

        function f(e) {
            var t = c(NaN);
            return null != e ? l(d(t), e) : d(t).userInvalidated = !0, t
        }

        function v(e, t) {
            var n, r, o;
            if (i(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), i(t._i) || (e._i = t._i), i(t._f) || (e._f = t._f), i(t._l) || (e._l = t._l), i(t._strict) || (e._strict = t._strict), i(t._tzm) || (e._tzm = t._tzm), i(t._isUTC) || (e._isUTC = t._isUTC), i(t._offset) || (e._offset = t._offset), i(t._pf) || (e._pf = d(t)), i(t._locale) || (e._locale = t._locale), _r.length > 0)
                for (n = 0; n < _r.length; n++) r = _r[n], o = t[r], i(o) || (e[r] = o);
            return e
        }

        function m(t) {
            v(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === xr && (xr = !0, e.updateOffset(this), xr = !1)
        }

        function g(e) {
            return e instanceof m || null != e && null != e._isAMomentObject
        }

        function y(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
        }

        function b(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = y(t)), n
        }

        function w(e, t, n) {
            var r, i = Math.min(e.length, t.length),
                o = Math.abs(e.length - t.length),
                s = 0;
            for (r = 0; r < i; r++)(n && e[r] !== t[r] || !n && b(e[r]) !== b(t[r])) && s++;
            return s + o
        }

        function _(t) {
            !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
        }

        function x(t, n) {
            var r = !0;
            return l(function() {
                if (null != e.deprecationHandler && e.deprecationHandler(null, t), r) {
                    for (var i, o = [], s = 0; s < arguments.length; s++) {
                        if (i = "", "object" == typeof arguments[s]) {
                            i += "\n[" + s + "] ";
                            for (var a in arguments[0]) i += a + ": " + arguments[0][a] + ", ";
                            i = i.slice(0, -2)
                        } else i = arguments[s];
                        o.push(i)
                    }
                    _(t + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), r = !1
                }
                return n.apply(this, arguments)
            }, n)
        }

        function S(t, n) {
            null != e.deprecationHandler && e.deprecationHandler(t, n), Sr[t] || (_(n), Sr[t] = !0)
        }

        function C(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function k(e) {
            var t, n;
            for (n in e) t = e[n], C(t) ? this[n] = t : this["_" + n] = t;
            this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }

        function E(e, t) {
            var r, i = l({}, e);
            for (r in t) u(t, r) && (n(e[r]) && n(t[r]) ? (i[r] = {}, l(i[r], e[r]), l(i[r], t[r])) : null != t[r] ? i[r] = t[r] : delete i[r]);
            for (r in e) u(e, r) && !u(t, r) && n(e[r]) && (i[r] = l({}, i[r]));
            return i
        }

        function O(e) {
            null != e && this.set(e)
        }

        function M(e, t, n) {
            var r = this._calendar[e] || this._calendar.sameElse;
            return C(r) ? r.call(t, n) : r
        }

        function R(e) {
            var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
            return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e])
        }

        function A() {
            return this._invalidDate
        }

        function P(e) {
            return this._ordinal.replace("%d", e)
        }

        function T(e, t, n, r) {
            var i = this._relativeTime[n];
            return C(i) ? i(e, t, n, r) : i.replace(/%d/i, e)
        }

        function j(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return C(n) ? n(t) : n.replace(/%s/i, t)
        }

        function L(e, t) {
            var n = e.toLowerCase();
            Pr[n] = Pr[n + "s"] = Pr[t] = e
        }

        function F(e) {
            return "string" == typeof e ? Pr[e] || Pr[e.toLowerCase()] : void 0
        }

        function N(e) {
            var t, n, r = {};
            for (n in e) u(e, n) && (t = F(n)) && (r[t] = e[n]);
            return r
        }

        function D(e, t) {
            Tr[e] = t
        }

        function I(e) {
            var t = [];
            for (var n in e) t.push({
                unit: n,
                priority: Tr[n]
            });
            return t.sort(function(e, t) {
                return e.priority - t.priority
            }), t
        }

        function V(t, n) {
            return function(r) {
                return null != r ? (q(this, t, r), e.updateOffset(this, n), this) : B(this, t)
            }
        }

        function B(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
        }

        function q(e, t, n) {
            e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
        }

        function z(e) {
            return e = F(e), C(this[e]) ? this[e]() : this
        }

        function H(e, t) {
            if ("object" == typeof e) {
                e = N(e);
                for (var n = I(e), r = 0; r < n.length; r++) this[n[r].unit](e[n[r].unit])
            } else if (e = F(e), C(this[e])) return this[e](t);
            return this
        }

        function U(e, t, n) {
            var r = "" + Math.abs(e),
                i = t - r.length;
            return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
        }

        function Y(e, t, n, r) {
            var i = r;
            "string" == typeof r && (i = function() {
                return this[r]()
            }), e && (Nr[e] = i), t && (Nr[t[0]] = function() {
                return U(i.apply(this, arguments), t[1], t[2])
            }), n && (Nr[n] = function() {
                return this.localeData().ordinal(i.apply(this, arguments), e)
            })
        }

        function W(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function G(e) {
            var t, n, r = e.match(jr);
            for (t = 0, n = r.length; t < n; t++) Nr[r[t]] ? r[t] = Nr[r[t]] : r[t] = W(r[t]);
            return function(t) {
                var i, o = "";
                for (i = 0; i < n; i++) o += C(r[i]) ? r[i].call(t, e) : r[i];
                return o
            }
        }

        function $(e, t) {
            return e.isValid() ? (t = Q(t, e.localeData()), Fr[t] = Fr[t] || G(t), Fr[t](e)) : e.localeData().invalidDate()
        }

        function Q(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var r = 5;
            for (Lr.lastIndex = 0; r >= 0 && Lr.test(e);) e = e.replace(Lr, n), Lr.lastIndex = 0, r -= 1;
            return e
        }

        function Z(e, t, n) {
            ei[e] = C(t) ? t : function(e, r) {
                return e && n ? n : t
            }
        }

        function K(e, t) {
            return u(ei, e) ? ei[e](t._strict, t._locale) : new RegExp(X(e))
        }

        function X(e) {
            return J(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
                return t || n || r || i
            }))
        }

        function J(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function ee(e, t) {
            var n, r = t;
            for ("string" == typeof e && (e = [e]), o(t) && (r = function(e, n) {
                    n[t] = b(e)
                }), n = 0; n < e.length; n++) ti[e[n]] = r
        }

        function te(e, t) {
            ee(e, function(e, n, r, i) {
                r._w = r._w || {}, t(e, r._w, r, i)
            })
        }

        function ne(e, t, n) {
            null != t && u(ti, e) && ti[e](t, n._a, n, e)
        }

        function re(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
        }

        function ie(e, n) {
            return e ? t(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || di).test(n) ? "format" : "standalone"][e.month()] : t(this._months) ? this._months : this._months.standalone
        }

        function oe(e, n) {
            return e ? t(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[di.test(n) ? "format" : "standalone"][e.month()] : t(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }

        function se(e, t, n) {
            var r, i, o, s = e.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) o = c([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
            return n ? "MMM" === t ? (i = hi.call(this._shortMonthsParse, s), -1 !== i ? i : null) : (i = hi.call(this._longMonthsParse, s), -1 !== i ? i : null) : "MMM" === t ? -1 !== (i = hi.call(this._shortMonthsParse, s)) ? i : (i = hi.call(this._longMonthsParse, s), -1 !== i ? i : null) : -1 !== (i = hi.call(this._longMonthsParse, s)) ? i : (i = hi.call(this._shortMonthsParse, s), -1 !== i ? i : null)
        }

        function ae(e, t, n) {
            var r, i, o;
            if (this._monthsParseExact) return se.call(this, e, t, n);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
                if (i = c([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
                if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
                if (!n && this._monthsParse[r].test(e)) return r
            }
        }

        function ue(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" == typeof t)
                if (/^\d+$/.test(t)) t = b(t);
                else if (t = e.localeData().monthsParse(t), !o(t)) return e;
            return n = Math.min(e.date(), re(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
        }

        function le(t) {
            return null != t ? (ue(this, t), e.updateOffset(this, !0), this) : B(this, "Month")
        }

        function ce() {
            return re(this.year(), this.month())
        }

        function he(e) {
            return this._monthsParseExact ? (u(this, "_monthsRegex") || pe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = vi), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }

        function de(e) {
            return this._monthsParseExact ? (u(this, "_monthsRegex") || pe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = mi), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
        }

        function pe() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, n, r = [],
                i = [],
                o = [];
            for (t = 0; t < 12; t++) n = c([2e3, t]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
            for (r.sort(e), i.sort(e), o.sort(e), t = 0; t < 12; t++) r[t] = J(r[t]), i[t] = J(i[t]);
            for (t = 0; t < 24; t++) o[t] = J(o[t]);
            this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
        }

        function fe(e) {
            return ve(e) ? 366 : 365
        }

        function ve(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }

        function me() {
            return ve(this.year())
        }

        function ge(e, t, n, r, i, o, s) {
            var a = new Date(e, t, n, r, i, o, s);
            return e < 100 && e >= 0 && isFinite(a.getFullYear()) && a.setFullYear(e), a
        }

        function ye(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
        }

        function be(e, t, n) {
            var r = 7 + t - n;
            return -(7 + ye(e, 0, r).getUTCDay() - t) % 7 + r - 1
        }

        function we(e, t, n, r, i) {
            var o, s, a = (7 + n - r) % 7,
                u = be(e, r, i),
                l = 1 + 7 * (t - 1) + a + u;
            return l <= 0 ? (o = e - 1, s = fe(o) + l) : l > fe(e) ? (o = e + 1, s = l - fe(e)) : (o = e, s = l), {
                year: o,
                dayOfYear: s
            }
        }

        function _e(e, t, n) {
            var r, i, o = be(e.year(), t, n),
                s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
            return s < 1 ? (i = e.year() - 1, r = s + xe(i, t, n)) : s > xe(e.year(), t, n) ? (r = s - xe(e.year(), t, n), i = e.year() + 1) : (i = e.year(), r = s), {
                week: r,
                year: i
            }
        }

        function xe(e, t, n) {
            var r = be(e, t, n),
                i = be(e + 1, t, n);
            return (fe(e) - r + i) / 7
        }

        function Se(e) {
            return _e(e, this._week.dow, this._week.doy).week
        }

        function Ce() {
            return this._week.dow
        }

        function ke() {
            return this._week.doy
        }

        function Ee(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function Oe(e) {
            var t = _e(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function Me(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
        }

        function Re(e, t) {
            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
        }

        function Ae(e, n) {
            return e ? t(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(n) ? "format" : "standalone"][e.day()] : t(this._weekdays) ? this._weekdays : this._weekdays.standalone
        }

        function Pe(e) {
            return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
        }

        function Te(e) {
            return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
        }

        function je(e, t, n) {
            var r, i, o, s = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) o = c([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
            return n ? "dddd" === t ? (i = hi.call(this._weekdaysParse, s), -1 !== i ? i : null) : "ddd" === t ? (i = hi.call(this._shortWeekdaysParse, s), -1 !== i ? i : null) : (i = hi.call(this._minWeekdaysParse, s), -1 !== i ? i : null) : "dddd" === t ? -1 !== (i = hi.call(this._weekdaysParse, s)) ? i : -1 !== (i = hi.call(this._shortWeekdaysParse, s)) ? i : (i = hi.call(this._minWeekdaysParse, s), -1 !== i ? i : null) : "ddd" === t ? -1 !== (i = hi.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = hi.call(this._weekdaysParse, s)) ? i : (i = hi.call(this._minWeekdaysParse, s), -1 !== i ? i : null) : -1 !== (i = hi.call(this._minWeekdaysParse, s)) ? i : -1 !== (i = hi.call(this._weekdaysParse, s)) ? i : (i = hi.call(this._shortWeekdaysParse, s), -1 !== i ? i : null)
        }

        function Le(e, t, n) {
            var r, i, o;
            if (this._weekdaysParseExact) return je.call(this, e, t, n);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
                if (i = c([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
                if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
                if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
                if (!n && this._weekdaysParse[r].test(e)) return r
            }
        }

        function Fe(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = Me(e, this.localeData()), this.add(e - t, "d")) : t
        }

        function Ne(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }

        function De(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
                var t = Re(e, this.localeData());
                return this.day(this.day() % 7 ? t : t - 7)
            }
            return this.day() || 7
        }

        function Ie(e) {
            return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = xi), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }

        function Ve(e) {
            return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Si), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }

        function Be(e) {
            return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ci), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }

        function qe() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, n, r, i, o, s = [],
                a = [],
                u = [],
                l = [];
            for (t = 0; t < 7; t++) n = c([2e3, 1]).day(t), r = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), s.push(r), a.push(i), u.push(o), l.push(r), l.push(i), l.push(o);
            for (s.sort(e), a.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) a[t] = J(a[t]), u[t] = J(u[t]), l[t] = J(l[t]);
            this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
        }

        function ze() {
            return this.hours() % 12 || 12
        }

        function He() {
            return this.hours() || 24
        }

        function Ue(e, t) {
            Y(e, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
        }

        function Ye(e, t) {
            return t._meridiemParse
        }

        function We(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }

        function Ge(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }

        function $e(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function Qe(e) {
            for (var t, n, r, i, o = 0; o < e.length;) {
                for (i = $e(e[o]).split("-"), t = i.length, n = $e(e[o + 1]), n = n ? n.split("-") : null; t > 0;) {
                    if (r = Ze(i.slice(0, t).join("-"))) return r;
                    if (n && n.length >= t && w(i, n, !0) >= t - 1) break;
                    t--
                }
                o++
            }
            return null
        }

        function Ze(e) {
            var t = null;
            if (!Ri[e] && "undefined" != typeof module && module && module.exports) try {
                t = ki._abbr, require("./locale/" + e), Ke(t)
            } catch (e) {}
            return Ri[e]
        }

        function Ke(e, t) {
            var n;
            return e && (n = i(t) ? et(e) : Xe(e, t)) && (ki = n), ki._abbr
        }

        function Xe(e, t) {
            if (null !== t) {
                var n = Mi;
                if (t.abbr = e, null != Ri[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Ri[e]._config;
                else if (null != t.parentLocale) {
                    if (null == Ri[t.parentLocale]) return Ai[t.parentLocale] || (Ai[t.parentLocale] = []), Ai[t.parentLocale].push({
                        name: e,
                        config: t
                    }), null;
                    n = Ri[t.parentLocale]._config
                }
                return Ri[e] = new O(E(n, t)), Ai[e] && Ai[e].forEach(function(e) {
                    Xe(e.name, e.config)
                }), Ke(e), Ri[e]
            }
            return delete Ri[e], null
        }

        function Je(e, t) {
            if (null != t) {
                var n, r = Mi;
                null != Ri[e] && (r = Ri[e]._config), t = E(r, t), n = new O(t), n.parentLocale = Ri[e], Ri[e] = n, Ke(e)
            } else null != Ri[e] && (null != Ri[e].parentLocale ? Ri[e] = Ri[e].parentLocale : null != Ri[e] && delete Ri[e]);
            return Ri[e]
        }

        function et(e) {
            var n;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return ki;
            if (!t(e)) {
                if (n = Ze(e)) return n;
                e = [e]
            }
            return Qe(e)
        }

        function tt() {
            return Er(Ri)
        }

        function nt(e) {
            var t, n = e._a;
            return n && -2 === d(e).overflow && (t = n[ri] < 0 || n[ri] > 11 ? ri : n[ii] < 1 || n[ii] > re(n[ni], n[ri]) ? ii : n[oi] < 0 || n[oi] > 24 || 24 === n[oi] && (0 !== n[si] || 0 !== n[ai] || 0 !== n[ui]) ? oi : n[si] < 0 || n[si] > 59 ? si : n[ai] < 0 || n[ai] > 59 ? ai : n[ui] < 0 || n[ui] > 999 ? ui : -1, d(e)._overflowDayOfYear && (t < ni || t > ii) && (t = ii), d(e)._overflowWeeks && -1 === t && (t = li), d(e)._overflowWeekday && -1 === t && (t = ci), d(e).overflow = t), e
        }

        function rt(e) {
            var t, n, r, i, o, s, a = e._i,
                u = Pi.exec(a) || Ti.exec(a);
            if (u) {
                for (d(e).iso = !0, t = 0, n = Li.length; t < n; t++)
                    if (Li[t][1].exec(u[1])) {
                        i = Li[t][0], r = !1 !== Li[t][2];
                        break
                    } if (null == i) return void(e._isValid = !1);
                if (u[3]) {
                    for (t = 0, n = Fi.length; t < n; t++)
                        if (Fi[t][1].exec(u[3])) {
                            o = (u[2] || " ") + Fi[t][0];
                            break
                        } if (null == o) return void(e._isValid = !1)
                }
                if (!r && null != o) return void(e._isValid = !1);
                if (u[4]) {
                    if (!ji.exec(u[4])) return void(e._isValid = !1);
                    s = "Z"
                }
                e._f = i + (o || "") + (s || ""), ct(e)
            } else e._isValid = !1
        }

        function it(e) {
            var t, n, r, i, o, s, a, u, l = {
                    " GMT": " +0000",
                    " EDT": " -0400",
                    " EST": " -0500",
                    " CDT": " -0500",
                    " CST": " -0600",
                    " MDT": " -0600",
                    " MST": " -0700",
                    " PDT": " -0700",
                    " PST": " -0800"
                },
                c = "YXWVUTSRQPONZABCDEFGHIKLM";
            if (t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), n = Di.exec(t)) {
                if (r = n[1] ? "ddd" + (5 === n[1].length ? ", " : " ") : "", i = "D MMM " + (n[2].length > 10 ? "YYYY " : "YY "), o = "HH:mm" + (n[4] ? ":ss" : ""), n[1]) {
                    var h = new Date(n[2]),
                        p = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][h.getDay()];
                    if (n[1].substr(0, 3) !== p) return d(e).weekdayMismatch = !0, void(e._isValid = !1)
                }
                switch (n[5].length) {
                    case 2:
                        0 === u ? a = " +0000" : (u = c.indexOf(n[5][1].toUpperCase()) - 12, a = (u < 0 ? " -" : " +") + ("" + u).replace(/^-?/, "0").match(/..$/)[0] + "00");
                        break;
                    case 4:
                        a = l[n[5]];
                        break;
                    default:
                        a = l[" GMT"]
                }
                n[5] = a, e._i = n.splice(1).join(""), s = " ZZ", e._f = r + i + o + s, ct(e), d(e).rfc2822 = !0
            } else e._isValid = !1
        }

        function ot(t) {
            var n = Ni.exec(t._i);
            if (null !== n) return void(t._d = new Date(+n[1]));
            rt(t), !1 === t._isValid && (delete t._isValid, it(t), !1 === t._isValid && (delete t._isValid, e.createFromInputFallback(t)))
        }

        function st(e, t, n) {
            return null != e ? e : null != t ? t : n
        }

        function at(t) {
            var n = new Date(e.now());
            return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
        }

        function ut(e) {
            var t, n, r, i, o = [];
            if (!e._d) {
                for (r = at(e), e._w && null == e._a[ii] && null == e._a[ri] && lt(e), null != e._dayOfYear && (i = st(e._a[ni], r[ni]), (e._dayOfYear > fe(i) || 0 === e._dayOfYear) && (d(e)._overflowDayOfYear = !0), n = ye(i, 0, e._dayOfYear), e._a[ri] = n.getUTCMonth(), e._a[ii] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = r[t];
                for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[oi] && 0 === e._a[si] && 0 === e._a[ai] && 0 === e._a[ui] && (e._nextDay = !0, e._a[oi] = 0), e._d = (e._useUTC ? ye : ge).apply(null, o), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[oi] = 24)
            }
        }

        function lt(e) {
            var t, n, r, i, o, s, a, u;
            if (t = e._w, null != t.GG || null != t.W || null != t.E) o = 1, s = 4, n = st(t.GG, e._a[ni], _e(yt(), 1, 4).year), r = st(t.W, 1), ((i = st(t.E, 1)) < 1 || i > 7) && (u = !0);
            else {
                o = e._locale._week.dow, s = e._locale._week.doy;
                var l = _e(yt(), o, s);
                n = st(t.gg, e._a[ni], l.year), r = st(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + o, (t.e < 0 || t.e > 6) && (u = !0)) : i = o
            }
            r < 1 || r > xe(n, o, s) ? d(e)._overflowWeeks = !0 : null != u ? d(e)._overflowWeekday = !0 : (a = we(n, r, i, o, s), e._a[ni] = a.year, e._dayOfYear = a.dayOfYear)
        }

        function ct(t) {
            if (t._f === e.ISO_8601) return void rt(t);
            if (t._f === e.RFC_2822) return void it(t);
            t._a = [], d(t).empty = !0;
            var n, r, i, o, s, a = "" + t._i,
                u = a.length,
                l = 0;
            for (i = Q(t._f, t._locale).match(jr) || [], n = 0; n < i.length; n++) o = i[n], r = (a.match(K(o, t)) || [])[0], r && (s = a.substr(0, a.indexOf(r)), s.length > 0 && d(t).unusedInput.push(s), a = a.slice(a.indexOf(r) + r.length), l += r.length), Nr[o] ? (r ? d(t).empty = !1 : d(t).unusedTokens.push(o), ne(o, r, t)) : t._strict && !r && d(t).unusedTokens.push(o);
            d(t).charsLeftOver = u - l, a.length > 0 && d(t).unusedInput.push(a), t._a[oi] <= 12 && !0 === d(t).bigHour && t._a[oi] > 0 && (d(t).bigHour = void 0), d(t).parsedDateParts = t._a.slice(0), d(t).meridiem = t._meridiem, t._a[oi] = ht(t._locale, t._a[oi], t._meridiem), ut(t), nt(t)
        }

        function ht(e, t, n) {
            var r;
            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (r = e.isPM(n), r && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
        }

        function dt(e) {
            var t, n, r, i, o;
            if (0 === e._f.length) return d(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (i = 0; i < e._f.length; i++) o = 0, t = v({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], ct(t), p(t) && (o += d(t).charsLeftOver, o += 10 * d(t).unusedTokens.length, d(t).score = o, (null == r || o < r) && (r = o, n = t));
            l(e, n || t)
        }

        function pt(e) {
            if (!e._d) {
                var t = N(e._i);
                e._a = a([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                    return e && parseInt(e, 10)
                }), ut(e)
            }
        }

        function ft(e) {
            var t = new m(nt(vt(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
        }

        function vt(e) {
            var n = e._i,
                r = e._f;
            return e._locale = e._locale || et(e._l), null === n || void 0 === r && "" === n ? f({
                nullInput: !0
            }) : ("string" == typeof n && (e._i = n = e._locale.preparse(n)), g(n) ? new m(nt(n)) : (s(n) ? e._d = n : t(r) ? dt(e) : r ? ct(e) : mt(e), p(e) || (e._d = null), e))
        }

        function mt(r) {
            var u = r._i;
            i(u) ? r._d = new Date(e.now()) : s(u) ? r._d = new Date(u.valueOf()) : "string" == typeof u ? ot(r) : t(u) ? (r._a = a(u.slice(0), function(e) {
                return parseInt(e, 10)
            }), ut(r)) : n(u) ? pt(r) : o(u) ? r._d = new Date(u) : e.createFromInputFallback(r)
        }

        function gt(e, i, o, s, a) {
            var u = {};
            return !0 !== o && !1 !== o || (s = o, o = void 0), (n(e) && r(e) || t(e) && 0 === e.length) && (e = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = a, u._l = o, u._i = e, u._f = i, u._strict = s, ft(u)
        }

        function yt(e, t, n, r) {
            return gt(e, t, n, r, !1)
        }

        function bt(e, n) {
            var r, i;
            if (1 === n.length && t(n[0]) && (n = n[0]), !n.length) return yt();
            for (r = n[0], i = 1; i < n.length; ++i) n[i].isValid() && !n[i][e](r) || (r = n[i]);
            return r
        }

        function wt() {
            return bt("isBefore", [].slice.call(arguments, 0))
        }

        function _t() {
            return bt("isAfter", [].slice.call(arguments, 0))
        }

        function xt(e) {
            for (var t in e)
                if (-1 === qi.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
            for (var n = !1, r = 0; r < qi.length; ++r)
                if (e[qi[r]]) {
                    if (n) return !1;
                    parseFloat(e[qi[r]]) !== b(e[qi[r]]) && (n = !0)
                } return !0
        }

        function St() {
            return this._isValid
        }

        function Ct() {
            return Ht(NaN)
        }

        function kt(e) {
            var t = N(e),
                n = t.year || 0,
                r = t.quarter || 0,
                i = t.month || 0,
                o = t.week || 0,
                s = t.day || 0,
                a = t.hour || 0,
                u = t.minute || 0,
                l = t.second || 0,
                c = t.millisecond || 0;
            this._isValid = xt(t), this._milliseconds = +c + 1e3 * l + 6e4 * u + 1e3 * a * 60 * 60, this._days = +s + 7 * o, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = et(), this._bubble()
        }

        function Et(e) {
            return e instanceof kt
        }

        function Ot(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
        }

        function Mt(e, t) {
            Y(e, 0, 0, function() {
                var e = this.utcOffset(),
                    n = "+";
                return e < 0 && (e = -e, n = "-"), n + U(~~(e / 60), 2) + t + U(~~e % 60, 2)
            })
        }

        function Rt(e, t) {
            var n = (t || "").match(e);
            if (null === n) return null;
            var r = n[n.length - 1] || [],
                i = (r + "").match(zi) || ["-", 0, 0],
                o = 60 * i[1] + b(i[2]);
            return 0 === o ? 0 : "+" === i[0] ? o : -o
        }

        function At(t, n) {
            var r, i;
            return n._isUTC ? (r = n.clone(), i = (g(t) || s(t) ? t.valueOf() : yt(t).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + i), e.updateOffset(r, !1), r) : yt(t).local()
        }

        function Pt(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function Tt(t, n, r) {
            var i, o = this._offset || 0;
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
                if ("string" == typeof t) {
                    if (null === (t = Rt(Kr, t))) return this
                } else Math.abs(t) < 16 && !r && (t *= 60);
                return !this._isUTC && n && (i = Pt(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), o !== t && (!n || this._changeInProgress ? $t(this, Ht(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this
            }
            return this._isUTC ? o : Pt(this)
        }

        function jt(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }

        function Lt(e) {
            return this.utcOffset(0, e)
        }

        function Ft(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Pt(this), "m")), this
        }

        function Nt() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var e = Rt(Zr, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
            }
            return this
        }

        function Dt(e) {
            return !!this.isValid() && (e = e ? yt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
        }

        function It() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function Vt() {
            if (!i(this._isDSTShifted)) return this._isDSTShifted;
            var e = {};
            if (v(e, this), e = vt(e), e._a) {
                var t = e._isUTC ? c(e._a) : yt(e._a);
                this._isDSTShifted = this.isValid() && w(e._a, t.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function Bt() {
            return !!this.isValid() && !this._isUTC
        }

        function qt() {
            return !!this.isValid() && this._isUTC
        }

        function zt() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }

        function Ht(e, t) {
            var n, r, i, s = e,
                a = null;
            return Et(e) ? s = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : o(e) ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (a = Hi.exec(e)) ? (n = "-" === a[1] ? -1 : 1, s = {
                y: 0,
                d: b(a[ii]) * n,
                h: b(a[oi]) * n,
                m: b(a[si]) * n,
                s: b(a[ai]) * n,
                ms: b(Ot(1e3 * a[ui])) * n
            }) : (a = Ui.exec(e)) ? (n = "-" === a[1] ? -1 : 1, s = {
                y: Ut(a[2], n),
                M: Ut(a[3], n),
                w: Ut(a[4], n),
                d: Ut(a[5], n),
                h: Ut(a[6], n),
                m: Ut(a[7], n),
                s: Ut(a[8], n)
            }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (i = Wt(yt(s.from), yt(s.to)), s = {}, s.ms = i.milliseconds, s.M = i.months), r = new kt(s), Et(e) && u(e, "_locale") && (r._locale = e._locale), r
        }

        function Ut(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t
        }

        function Yt(e, t) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function Wt(e, t) {
            var n;
            return e.isValid() && t.isValid() ? (t = At(t, e), e.isBefore(t) ? n = Yt(e, t) : (n = Yt(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                milliseconds: 0,
                months: 0
            }
        }

        function Gt(e, t) {
            return function(n, r) {
                var i, o;
                return null === r || isNaN(+r) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = r, r = o), n = "string" == typeof n ? +n : n, i = Ht(n, r), $t(this, i, e), this
            }
        }

        function $t(t, n, r, i) {
            var o = n._milliseconds,
                s = Ot(n._days),
                a = Ot(n._months);
            t.isValid() && (i = null == i || i, o && t._d.setTime(t._d.valueOf() + o * r), s && q(t, "Date", B(t, "Date") + s * r), a && ue(t, B(t, "Month") + a * r), i && e.updateOffset(t, s || a))
        }

        function Qt(e, t) {
            var n = e.diff(t, "days", !0);
            return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
        }

        function Zt(t, n) {
            var r = t || yt(),
                i = At(r, this).startOf("day"),
                o = e.calendarFormat(this, i) || "sameElse",
                s = n && (C(n[o]) ? n[o].call(this, r) : n[o]);
            return this.format(s || this.localeData().calendar(o, this, yt(r)))
        }

        function Kt() {
            return new m(this)
        }

        function Xt(e, t) {
            var n = g(e) ? e : yt(e);
            return !(!this.isValid() || !n.isValid()) && (t = F(i(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
        }

        function Jt(e, t) {
            var n = g(e) ? e : yt(e);
            return !(!this.isValid() || !n.isValid()) && (t = F(i(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
        }

        function en(e, t, n, r) {
            return r = r || "()", ("(" === r[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === r[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
        }

        function tn(e, t) {
            var n, r = g(e) ? e : yt(e);
            return !(!this.isValid() || !r.isValid()) && (t = F(t || "millisecond"), "millisecond" === t ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
        }

        function nn(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t)
        }

        function rn(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t)
        }

        function on(e, t, n) {
            var r, i, o, s;
            return this.isValid() ? (r = At(e, this), r.isValid() ? (i = 6e4 * (r.utcOffset() - this.utcOffset()), t = F(t), "year" === t || "month" === t || "quarter" === t ? (s = sn(this, r), "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (o = this - r, s = "second" === t ? o / 1e3 : "minute" === t ? o / 6e4 : "hour" === t ? o / 36e5 : "day" === t ? (o - i) / 864e5 : "week" === t ? (o - i) / 6048e5 : o), n ? s : y(s)) : NaN) : NaN
        }

        function sn(e, t) {
            var n, r, i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                o = e.clone().add(i, "months");
            return t - o < 0 ? (n = e.clone().add(i - 1, "months"), r = (t - o) / (o - n)) : (n = e.clone().add(i + 1, "months"), r = (t - o) / (n - o)), -(i + r) || 0
        }

        function an() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function un() {
            if (!this.isValid()) return null;
            var e = this.clone().utc();
            return e.year() < 0 || e.year() > 9999 ? $(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : C(Date.prototype.toISOString) ? this.toDate().toISOString() : $(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function ln() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e = "moment",
                t = "";
            this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
            var n = "[" + e + '("]',
                r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                i = t + '[")]';
            return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + i)
        }

        function cn(t) {
            t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
            var n = $(this, t);
            return this.localeData().postformat(n)
        }

        function hn(e, t) {
            return this.isValid() && (g(e) && e.isValid() || yt(e).isValid()) ? Ht({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function dn(e) {
            return this.from(yt(), e)
        }

        function pn(e, t) {
            return this.isValid() && (g(e) && e.isValid() || yt(e).isValid()) ? Ht({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function fn(e) {
            return this.to(yt(), e)
        }

        function vn(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (t = et(e), null != t && (this._locale = t), this)
        }

        function mn() {
            return this._locale
        }

        function gn(e) {
            switch (e = F(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function yn(e) {
            return void 0 === (e = F(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
        }

        function bn() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }

        function wn() {
            return Math.floor(this.valueOf() / 1e3)
        }

        function _n() {
            return new Date(this.valueOf())
        }

        function xn() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }

        function Sn() {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds()
            }
        }

        function Cn() {
            return this.isValid() ? this.toISOString() : null
        }

        function kn() {
            return p(this)
        }

        function En() {
            return l({}, d(this))
        }

        function On() {
            return d(this).overflow
        }

        function Mn() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }

        function Rn(e, t) {
            Y(0, [e, e.length], 0, t)
        }

        function An(e) {
            return Ln.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function Pn(e) {
            return Ln.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function Tn() {
            return xe(this.year(), 1, 4)
        }

        function jn() {
            var e = this.localeData()._week;
            return xe(this.year(), e.dow, e.doy)
        }

        function Ln(e, t, n, r, i) {
            var o;
            return null == e ? _e(this, r, i).year : (o = xe(e, r, i), t > o && (t = o), Fn.call(this, e, t, n, r, i))
        }

        function Fn(e, t, n, r, i) {
            var o = we(e, t, n, r, i),
                s = ye(o.year, 0, o.dayOfYear);
            return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
        }

        function Nn(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }

        function Dn(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }

        function In(e, t) {
            t[ui] = b(1e3 * ("0." + e))
        }

        function Vn() {
            return this._isUTC ? "UTC" : ""
        }

        function Bn() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function qn(e) {
            return yt(1e3 * e)
        }

        function zn() {
            return yt.apply(null, arguments).parseZone()
        }

        function Hn(e) {
            return e
        }

        function Un(e, t, n, r) {
            var i = et(),
                o = c().set(r, t);
            return i[n](o, e)
        }

        function Yn(e, t, n) {
            if (o(e) && (t = e, e = void 0), e = e || "", null != t) return Un(e, t, n, "month");
            var r, i = [];
            for (r = 0; r < 12; r++) i[r] = Un(e, r, n, "month");
            return i
        }

        function Wn(e, t, n, r) {
            "boolean" == typeof e ? (o(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, o(t) && (n = t, t = void 0), t = t || "");
            var i = et(),
                s = e ? i._week.dow : 0;
            if (null != n) return Un(t, (n + s) % 7, r, "day");
            var a, u = [];
            for (a = 0; a < 7; a++) u[a] = Un(t, (a + s) % 7, r, "day");
            return u
        }

        function Gn(e, t) {
            return Yn(e, t, "months")
        }

        function $n(e, t) {
            return Yn(e, t, "monthsShort")
        }

        function Qn(e, t, n) {
            return Wn(e, t, n, "weekdays")
        }

        function Zn(e, t, n) {
            return Wn(e, t, n, "weekdaysShort")
        }

        function Kn(e, t, n) {
            return Wn(e, t, n, "weekdaysMin")
        }

        function Xn() {
            var e = this._data;
            return this._milliseconds = to(this._milliseconds), this._days = to(this._days), this._months = to(this._months), e.milliseconds = to(e.milliseconds), e.seconds = to(e.seconds), e.minutes = to(e.minutes), e.hours = to(e.hours), e.months = to(e.months), e.years = to(e.years), this
        }

        function Jn(e, t, n, r) {
            var i = Ht(t, n);
            return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble()
        }

        function er(e, t) {
            return Jn(this, e, t, 1)
        }

        function tr(e, t) {
            return Jn(this, e, t, -1)
        }

        function nr(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e)
        }

        function rr() {
            var e, t, n, r, i, o = this._milliseconds,
                s = this._days,
                a = this._months,
                u = this._data;
            return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * nr(or(a) + s), s = 0, a = 0), u.milliseconds = o % 1e3, e = y(o / 1e3), u.seconds = e % 60, t = y(e / 60), u.minutes = t % 60, n = y(t / 60), u.hours = n % 24, s += y(n / 24), i = y(ir(s)), a += i, s -= nr(or(i)), r = y(a / 12), a %= 12, u.days = s, u.months = a, u.years = r, this
        }

        function ir(e) {
            return 4800 * e / 146097
        }

        function or(e) {
            return 146097 * e / 4800
        }

        function sr(e) {
            if (!this.isValid()) return NaN;
            var t, n, r = this._milliseconds;
            if ("month" === (e = F(e)) || "year" === e) return t = this._days + r / 864e5, n = this._months + ir(t), "month" === e ? n : n / 12;
            switch (t = this._days + Math.round(or(this._months)), e) {
                case "week":
                    return t / 7 + r / 6048e5;
                case "day":
                    return t + r / 864e5;
                case "hour":
                    return 24 * t + r / 36e5;
                case "minute":
                    return 1440 * t + r / 6e4;
                case "second":
                    return 86400 * t + r / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + r;
                default:
                    throw new Error("Unknown unit " + e)
            }
        }

        function ar() {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12) : NaN
        }

        function ur(e) {
            return function() {
                return this.as(e)
            }
        }

        function lr(e) {
            return e = F(e), this.isValid() ? this[e + "s"]() : NaN
        }

        function cr(e) {
            return function() {
                return this.isValid() ? this._data[e] : NaN
            }
        }

        function hr() {
            return y(this.days() / 7)
        }

        function dr(e, t, n, r, i) {
            return i.relativeTime(t || 1, !!n, e, r)
        }

        function pr(e, t, n) {
            var r = Ht(e).abs(),
                i = yo(r.as("s")),
                o = yo(r.as("m")),
                s = yo(r.as("h")),
                a = yo(r.as("d")),
                u = yo(r.as("M")),
                l = yo(r.as("y")),
                c = i <= bo.ss && ["s", i] || i < bo.s && ["ss", i] || o <= 1 && ["m"] || o < bo.m && ["mm", o] || s <= 1 && ["h"] || s < bo.h && ["hh", s] || a <= 1 && ["d"] || a < bo.d && ["dd", a] || u <= 1 && ["M"] || u < bo.M && ["MM", u] || l <= 1 && ["y"] || ["yy", l];
            return c[2] = t, c[3] = +e > 0, c[4] = n, dr.apply(null, c)
        }

        function fr(e) {
            return void 0 === e ? yo : "function" == typeof e && (yo = e, !0)
        }

        function vr(e, t) {
            return void 0 !== bo[e] && (void 0 === t ? bo[e] : (bo[e] = t, "s" === e && (bo.ss = t - 1), !0))
        }

        function mr(e) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t = this.localeData(),
                n = pr(this, !e, t);
            return e && (n = t.pastFuture(+this, n)), t.postformat(n)
        }

        function gr() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e, t, n, r = wo(this._milliseconds) / 1e3,
                i = wo(this._days),
                o = wo(this._months);
            e = y(r / 60), t = y(e / 60), r %= 60, e %= 60, n = y(o / 12), o %= 12;
            var s = n,
                a = o,
                u = i,
                l = t,
                c = e,
                h = r,
                d = this.asSeconds();
            return d ? (d < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (a ? a + "M" : "") + (u ? u + "D" : "") + (l || c || h ? "T" : "") + (l ? l + "H" : "") + (c ? c + "M" : "") + (h ? h + "S" : "") : "P0D"
        }
        var yr, br;
        br = Array.prototype.some ? Array.prototype.some : function(e) {
            for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++)
                if (r in t && e.call(this, t[r], r, t)) return !0;
            return !1
        };
        var wr = br,
            _r = e.momentProperties = [],
            xr = !1,
            Sr = {};
        e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
        var Cr;
        Cr = Object.keys ? Object.keys : function(e) {
            var t, n = [];
            for (t in e) u(e, t) && n.push(t);
            return n
        };
        var kr, Er = Cr,
            Or = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            Mr = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            Rr = /\d{1,2}/,
            Ar = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            Pr = {},
            Tr = {},
            jr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            Lr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Fr = {},
            Nr = {},
            Dr = /\d/,
            Ir = /\d\d/,
            Vr = /\d{3}/,
            Br = /\d{4}/,
            qr = /[+-]?\d{6}/,
            zr = /\d\d?/,
            Hr = /\d\d\d\d?/,
            Ur = /\d\d\d\d\d\d?/,
            Yr = /\d{1,3}/,
            Wr = /\d{1,4}/,
            Gr = /[+-]?\d{1,6}/,
            $r = /\d+/,
            Qr = /[+-]?\d+/,
            Zr = /Z|[+-]\d\d:?\d\d/gi,
            Kr = /Z|[+-]\d\d(?::?\d\d)?/gi,
            Xr = /[+-]?\d+(\.\d{1,3})?/,
            Jr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            ei = {},
            ti = {},
            ni = 0,
            ri = 1,
            ii = 2,
            oi = 3,
            si = 4,
            ai = 5,
            ui = 6,
            li = 7,
            ci = 8;
        kr = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
            var t;
            for (t = 0; t < this.length; ++t)
                if (this[t] === e) return t;
            return -1
        };
        var hi = kr;
        Y("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), Y("MMM", 0, 0, function(e) {
            return this.localeData().monthsShort(this, e)
        }), Y("MMMM", 0, 0, function(e) {
            return this.localeData().months(this, e)
        }), L("month", "M"), D("month", 8), Z("M", zr), Z("MM", zr, Ir), Z("MMM", function(e, t) {
            return t.monthsShortRegex(e)
        }), Z("MMMM", function(e, t) {
            return t.monthsRegex(e)
        }), ee(["M", "MM"], function(e, t) {
            t[ri] = b(e) - 1
        }), ee(["MMM", "MMMM"], function(e, t, n, r) {
            var i = n._locale.monthsParse(e, r, n._strict);
            null != i ? t[ri] = i : d(n).invalidMonth = e
        });
        var di = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            pi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            fi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            vi = Jr,
            mi = Jr;
        Y("Y", 0, 0, function() {
            var e = this.year();
            return e <= 9999 ? "" + e : "+" + e
        }), Y(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), Y(0, ["YYYY", 4], 0, "year"), Y(0, ["YYYYY", 5], 0, "year"), Y(0, ["YYYYYY", 6, !0], 0, "year"), L("year", "y"), D("year", 1), Z("Y", Qr), Z("YY", zr, Ir), Z("YYYY", Wr, Br), Z("YYYYY", Gr, qr), Z("YYYYYY", Gr, qr), ee(["YYYYY", "YYYYYY"], ni), ee("YYYY", function(t, n) {
            n[ni] = 2 === t.length ? e.parseTwoDigitYear(t) : b(t)
        }), ee("YY", function(t, n) {
            n[ni] = e.parseTwoDigitYear(t)
        }), ee("Y", function(e, t) {
            t[ni] = parseInt(e, 10)
        }), e.parseTwoDigitYear = function(e) {
            return b(e) + (b(e) > 68 ? 1900 : 2e3)
        };
        var gi = V("FullYear", !0);
        Y("w", ["ww", 2], "wo", "week"), Y("W", ["WW", 2], "Wo", "isoWeek"), L("week", "w"), L("isoWeek", "W"), D("week", 5), D("isoWeek", 5), Z("w", zr), Z("ww", zr, Ir), Z("W", zr), Z("WW", zr, Ir), te(["w", "ww", "W", "WW"], function(e, t, n, r) {
            t[r.substr(0, 1)] = b(e)
        });
        var yi = {
            dow: 0,
            doy: 6
        };
        Y("d", 0, "do", "day"), Y("dd", 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e)
        }), Y("ddd", 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e)
        }), Y("dddd", 0, 0, function(e) {
            return this.localeData().weekdays(this, e)
        }), Y("e", 0, 0, "weekday"), Y("E", 0, 0, "isoWeekday"), L("day", "d"), L("weekday", "e"), L("isoWeekday", "E"), D("day", 11), D("weekday", 11), D("isoWeekday", 11), Z("d", zr), Z("e", zr), Z("E", zr), Z("dd", function(e, t) {
            return t.weekdaysMinRegex(e)
        }), Z("ddd", function(e, t) {
            return t.weekdaysShortRegex(e)
        }), Z("dddd", function(e, t) {
            return t.weekdaysRegex(e)
        }), te(["dd", "ddd", "dddd"], function(e, t, n, r) {
            var i = n._locale.weekdaysParse(e, r, n._strict);
            null != i ? t.d = i : d(n).invalidWeekday = e
        }), te(["d", "e", "E"], function(e, t, n, r) {
            t[r] = b(e)
        });
        var bi = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            wi = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            _i = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            xi = Jr,
            Si = Jr,
            Ci = Jr;
        Y("H", ["HH", 2], 0, "hour"), Y("h", ["hh", 2], 0, ze), Y("k", ["kk", 2], 0, He), Y("hmm", 0, 0, function() {
            return "" + ze.apply(this) + U(this.minutes(), 2)
        }), Y("hmmss", 0, 0, function() {
            return "" + ze.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2)
        }), Y("Hmm", 0, 0, function() {
            return "" + this.hours() + U(this.minutes(), 2)
        }), Y("Hmmss", 0, 0, function() {
            return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2)
        }), Ue("a", !0), Ue("A", !1), L("hour", "h"), D("hour", 13), Z("a", Ye), Z("A", Ye), Z("H", zr), Z("h", zr), Z("k", zr), Z("HH", zr, Ir), Z("hh", zr, Ir), Z("kk", zr, Ir), Z("hmm", Hr), Z("hmmss", Ur), Z("Hmm", Hr), Z("Hmmss", Ur), ee(["H", "HH"], oi), ee(["k", "kk"], function(e, t, n) {
            var r = b(e);
            t[oi] = 24 === r ? 0 : r
        }), ee(["a", "A"], function(e, t, n) {
            n._isPm = n._locale.isPM(e), n._meridiem = e
        }), ee(["h", "hh"], function(e, t, n) {
            t[oi] = b(e), d(n).bigHour = !0
        }), ee("hmm", function(e, t, n) {
            var r = e.length - 2;
            t[oi] = b(e.substr(0, r)), t[si] = b(e.substr(r)), d(n).bigHour = !0
        }), ee("hmmss", function(e, t, n) {
            var r = e.length - 4,
                i = e.length - 2;
            t[oi] = b(e.substr(0, r)), t[si] = b(e.substr(r, 2)), t[ai] = b(e.substr(i)), d(n).bigHour = !0
        }), ee("Hmm", function(e, t, n) {
            var r = e.length - 2;
            t[oi] = b(e.substr(0, r)), t[si] = b(e.substr(r))
        }), ee("Hmmss", function(e, t, n) {
            var r = e.length - 4,
                i = e.length - 2;
            t[oi] = b(e.substr(0, r)), t[si] = b(e.substr(r, 2)), t[ai] = b(e.substr(i))
        });
        var ki, Ei = /[ap]\.?m?\.?/i,
            Oi = V("Hours", !0),
            Mi = {
                calendar: Or,
                longDateFormat: Mr,
                invalidDate: "Invalid date",
                ordinal: "%d",
                dayOfMonthOrdinalParse: Rr,
                relativeTime: Ar,
                months: pi,
                monthsShort: fi,
                week: yi,
                weekdays: bi,
                weekdaysMin: _i,
                weekdaysShort: wi,
                meridiemParse: Ei
            },
            Ri = {},
            Ai = {},
            Pi = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Ti = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            ji = /Z|[+-]\d\d(?::?\d\d)?/,
            Li = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            Fi = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            Ni = /^\/?Date\((\-?\d+)/i,
            Di = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
        e.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), e.ISO_8601 = function() {}, e.RFC_2822 = function() {};
        var Ii = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = yt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : f()
            }),
            Vi = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = yt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : f()
            }),
            Bi = function() {
                return Date.now ? Date.now() : +new Date
            },
            qi = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
        Mt("Z", ":"), Mt("ZZ", ""), Z("Z", Kr), Z("ZZ", Kr), ee(["Z", "ZZ"], function(e, t, n) {
            n._useUTC = !0, n._tzm = Rt(Kr, e)
        });
        var zi = /([\+\-]|\d\d)/gi;
        e.updateOffset = function() {};
        var Hi = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Ui = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
        Ht.fn = kt.prototype, Ht.invalid = Ct;
        var Yi = Gt(1, "add"),
            Wi = Gt(-1, "subtract");
        e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Gi = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
            return void 0 === e ? this.localeData() : this.locale(e)
        });
        Y(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), Y(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), Rn("gggg", "weekYear"), Rn("ggggg", "weekYear"), Rn("GGGG", "isoWeekYear"), Rn("GGGGG", "isoWeekYear"), L("weekYear", "gg"), L("isoWeekYear", "GG"), D("weekYear", 1), D("isoWeekYear", 1), Z("G", Qr), Z("g", Qr), Z("GG", zr, Ir), Z("gg", zr, Ir), Z("GGGG", Wr, Br), Z("gggg", Wr, Br), Z("GGGGG", Gr, qr), Z("ggggg", Gr, qr), te(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
            t[r.substr(0, 2)] = b(e)
        }), te(["gg", "GG"], function(t, n, r, i) {
            n[i] = e.parseTwoDigitYear(t)
        }), Y("Q", 0, "Qo", "quarter"), L("quarter", "Q"), D("quarter", 7), Z("Q", Dr), ee("Q", function(e, t) {
            t[ri] = 3 * (b(e) - 1)
        }), Y("D", ["DD", 2], "Do", "date"), L("date", "D"), D("date", 9), Z("D", zr), Z("DD", zr, Ir), Z("Do", function(e, t) {
            return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
        }), ee(["D", "DD"], ii), ee("Do", function(e, t) {
            t[ii] = b(e.match(zr)[0], 10)
        });
        var $i = V("Date", !0);
        Y("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), L("dayOfYear", "DDD"), D("dayOfYear", 4), Z("DDD", Yr), Z("DDDD", Vr), ee(["DDD", "DDDD"], function(e, t, n) {
            n._dayOfYear = b(e)
        }), Y("m", ["mm", 2], 0, "minute"), L("minute", "m"), D("minute", 14), Z("m", zr), Z("mm", zr, Ir), ee(["m", "mm"], si);
        var Qi = V("Minutes", !1);
        Y("s", ["ss", 2], 0, "second"), L("second", "s"), D("second", 15), Z("s", zr), Z("ss", zr, Ir), ee(["s", "ss"], ai);
        var Zi = V("Seconds", !1);
        Y("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), Y(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), Y(0, ["SSS", 3], 0, "millisecond"), Y(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), Y(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), Y(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), Y(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), Y(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), Y(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), L("millisecond", "ms"), D("millisecond", 16), Z("S", Yr, Dr), Z("SS", Yr, Ir), Z("SSS", Yr, Vr);
        var Ki;
        for (Ki = "SSSS"; Ki.length <= 9; Ki += "S") Z(Ki, $r);
        for (Ki = "S"; Ki.length <= 9; Ki += "S") ee(Ki, In);
        var Xi = V("Milliseconds", !1);
        Y("z", 0, 0, "zoneAbbr"), Y("zz", 0, 0, "zoneName");
        var Ji = m.prototype;
        Ji.add = Yi, Ji.calendar = Zt, Ji.clone = Kt, Ji.diff = on, Ji.endOf = yn, Ji.format = cn, Ji.from = hn, Ji.fromNow = dn, Ji.to = pn, Ji.toNow = fn, Ji.get = z, Ji.invalidAt = On, Ji.isAfter = Xt, Ji.isBefore = Jt, Ji.isBetween = en, Ji.isSame = tn, Ji.isSameOrAfter = nn, Ji.isSameOrBefore = rn, Ji.isValid = kn, Ji.lang = Gi, Ji.locale = vn, Ji.localeData = mn, Ji.max = Vi, Ji.min = Ii, Ji.parsingFlags = En, Ji.set = H, Ji.startOf = gn, Ji.subtract = Wi, Ji.toArray = xn, Ji.toObject = Sn, Ji.toDate = _n, Ji.toISOString = un, Ji.inspect = ln, Ji.toJSON = Cn, Ji.toString = an, Ji.unix = wn, Ji.valueOf = bn, Ji.creationData = Mn, Ji.year = gi, Ji.isLeapYear = me, Ji.weekYear = An, Ji.isoWeekYear = Pn, Ji.quarter = Ji.quarters = Nn, Ji.month = le, Ji.daysInMonth = ce, Ji.week = Ji.weeks = Ee, Ji.isoWeek = Ji.isoWeeks = Oe, Ji.weeksInYear = jn, Ji.isoWeeksInYear = Tn, Ji.date = $i, Ji.day = Ji.days = Fe, Ji.weekday = Ne, Ji.isoWeekday = De, Ji.dayOfYear = Dn, Ji.hour = Ji.hours = Oi, Ji.minute = Ji.minutes = Qi, Ji.second = Ji.seconds = Zi, Ji.millisecond = Ji.milliseconds = Xi, Ji.utcOffset = Tt, Ji.utc = Lt, Ji.local = Ft, Ji.parseZone = Nt, Ji.hasAlignedHourOffset = Dt, Ji.isDST = It, Ji.isLocal = Bt, Ji.isUtcOffset = qt, Ji.isUtc = zt, Ji.isUTC = zt, Ji.zoneAbbr = Vn, Ji.zoneName = Bn, Ji.dates = x("dates accessor is deprecated. Use date instead.", $i), Ji.months = x("months accessor is deprecated. Use month instead", le), Ji.years = x("years accessor is deprecated. Use year instead", gi), Ji.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", jt), Ji.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Vt);
        var eo = O.prototype;
        eo.calendar = M, eo.longDateFormat = R, eo.invalidDate = A, eo.ordinal = P, eo.preparse = Hn, eo.postformat = Hn, eo.relativeTime = T, eo.pastFuture = j, eo.set = k, eo.months = ie, eo.monthsShort = oe, eo.monthsParse = ae, eo.monthsRegex = de, eo.monthsShortRegex = he, eo.week = Se, eo.firstDayOfYear = ke, eo.firstDayOfWeek = Ce, eo.weekdays = Ae, eo.weekdaysMin = Te, eo.weekdaysShort = Pe, eo.weekdaysParse = Le, eo.weekdaysRegex = Ie, eo.weekdaysShortRegex = Ve, eo.weekdaysMinRegex = Be, eo.isPM = We, eo.meridiem = Ge, Ke("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 === b(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        }), e.lang = x("moment.lang is deprecated. Use moment.locale instead.", Ke), e.langData = x("moment.langData is deprecated. Use moment.localeData instead.", et);
        var to = Math.abs,
            no = ur("ms"),
            ro = ur("s"),
            io = ur("m"),
            oo = ur("h"),
            so = ur("d"),
            ao = ur("w"),
            uo = ur("M"),
            lo = ur("y"),
            co = cr("milliseconds"),
            ho = cr("seconds"),
            po = cr("minutes"),
            fo = cr("hours"),
            vo = cr("days"),
            mo = cr("months"),
            go = cr("years"),
            yo = Math.round,
            bo = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            wo = Math.abs,
            _o = kt.prototype;
        return _o.isValid = St, _o.abs = Xn, _o.add = er, _o.subtract = tr, _o.as = sr, _o.asMilliseconds = no, _o.asSeconds = ro, _o.asMinutes = io, _o.asHours = oo, _o.asDays = so, _o.asWeeks = ao, _o.asMonths = uo, _o.asYears = lo, _o.valueOf = ar, _o._bubble = rr, _o.get = lr, _o.milliseconds = co, _o.seconds = ho, _o.minutes = po, _o.hours = fo, _o.days = vo, _o.weeks = hr, _o.months = mo, _o.years = go, _o.humanize = mr, _o.toISOString = gr, _o.toString = gr, _o.toJSON = gr, _o.locale = vn, _o.localeData = mn, _o.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", gr), _o.lang = Gi, Y("X", 0, 0, "unix"), Y("x", 0, 0, "valueOf"), Z("x", Qr), Z("X", Xr), ee("X", function(e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10))
            }), ee("x", function(e, t, n) {
                n._d = new Date(b(e))
            }), e.version = "2.18.1",
            function(e) {
                yr = e
            }(yt), e.fn = Ji, e.min = wt, e.max = _t, e.now = Bi, e.utc = c, e.unix = qn, e.months = Gn, e.isDate = s, e.locale = Ke, e.invalid = f, e.duration = Ht, e.isMoment = g, e.weekdays = Qn, e.parseZone = zn, e.localeData = et, e.isDuration = Et, e.monthsShort = $n, e.weekdaysMin = Kn, e.defineLocale = Xe, e.updateLocale = Je, e.locales = tt, e.weekdaysShort = Zn, e.normalizeUnits = F, e.relativeTimeRounding = fr, e.relativeTimeThreshold = vr, e.calendarFormat = Qt, e.prototype = Ji, e
    }), define("extend", ["require", "exports", "module"], function(e, t, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty,
            i = Object.prototype.toString,
            o = function(e) {
                return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === i.call(e)
            },
            s = function(e) {
                if (!e || "[object Object]" !== i.call(e)) return !1;
                var t = r.call(e, "constructor"),
                    n = e.constructor && e.constructor.prototype && r.call(e.constructor.prototype, "isPrototypeOf");
                if (e.constructor && !t && !n) return !1;
                var o;
                for (o in e);
                return void 0 === o || r.call(e, o)
            };
        n.exports = function e() {
            var t, n, r, i, a, u, l = arguments[0],
                c = 1,
                h = arguments.length,
                d = !1;
            for ("boolean" == typeof l && (d = l, l = arguments[1] || {}, c = 2), (null == l || "object" != typeof l && "function" != typeof l) && (l = {}); c < h; ++c)
                if (null != (t = arguments[c]))
                    for (n in t) r = l[n], i = t[n], l !== i && (d && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, l[n] = e(d, u, i)) : void 0 !== i && (l[n] = i));
            return l
        }
    }), define("semver", ["require", "exports", "module"], function(e, t, n) {
        function r(e, t) {
            if (e instanceof s) return e;
            if ("string" != typeof e) return null;
            if (e.length > Q) return null;
            if (!(t ? K[fe] : K[he]).test(e)) return null;
            try {
                return new s(e, t)
            } catch (e) {
                return null
            }
        }

        function i(e, t) {
            var n = r(e, t);
            return n ? n.version : null
        }

        function o(e, t) {
            var n = r(e.trim().replace(/^[=v]+/, ""), t);
            return n ? n.version : null
        }

        function s(e, t) {
            if (e instanceof s) {
                if (e.loose === t) return e;
                e = e.version
            } else if ("string" != typeof e) throw new TypeError("Invalid Version: " + e);
            if (e.length > Q) throw new TypeError("version is longer than " + Q + " characters");
            if (!(this instanceof s)) return new s(e, t);
            $("SemVer", e, t), this.loose = t;
            var n = e.trim().match(t ? K[fe] : K[he]);
            if (!n) throw new TypeError("Invalid Version: " + e);
            if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Z || this.major < 0) throw new TypeError("Invalid major version");
            if (this.minor > Z || this.minor < 0) throw new TypeError("Invalid minor version");
            if (this.patch > Z || this.patch < 0) throw new TypeError("Invalid patch version");
            n[4] ? this.prerelease = n[4].split(".").map(function(e) {
                if (/^[0-9]+$/.test(e)) {
                    var t = +e;
                    if (t >= 0 && t < Z) return t
                }
                return e
            }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
        }

        function a(e, t, n, r) {
            "string" == typeof n && (r = n, n = void 0);
            try {
                return new s(e, n).inc(t, r).version
            } catch (e) {
                return null
            }
        }

        function u(e, t) {
            if (_(e, t)) return null;
            var n = r(e),
                i = r(t);
            if (n.prerelease.length || i.prerelease.length) {
                for (var o in n)
                    if (("major" === o || "minor" === o || "patch" === o) && n[o] !== i[o]) return "pre" + o;
                return "prerelease"
            }
            for (var o in n)
                if (("major" === o || "minor" === o || "patch" === o) && n[o] !== i[o]) return o
        }

        function l(e, t) {
            var n = De.test(e),
                r = De.test(t);
            return n && r && (e = +e, t = +t), n && !r ? -1 : r && !n ? 1 : e < t ? -1 : e > t ? 1 : 0
        }

        function c(e, t) {
            return l(t, e)
        }

        function h(e, t) {
            return new s(e, t).major
        }

        function d(e, t) {
            return new s(e, t).minor
        }

        function p(e, t) {
            return new s(e, t).patch
        }

        function f(e, t, n) {
            return new s(e, n).compare(t)
        }

        function v(e, t) {
            return f(e, t, !0)
        }

        function m(e, t, n) {
            return f(t, e, n)
        }

        function g(e, n) {
            return e.sort(function(e, r) {
                return t.compare(e, r, n)
            })
        }

        function y(e, n) {
            return e.sort(function(e, r) {
                return t.rcompare(e, r, n)
            })
        }

        function b(e, t, n) {
            return f(e, t, n) > 0
        }

        function w(e, t, n) {
            return f(e, t, n) < 0
        }

        function _(e, t, n) {
            return 0 === f(e, t, n)
        }

        function x(e, t, n) {
            return 0 !== f(e, t, n)
        }

        function S(e, t, n) {
            return f(e, t, n) >= 0
        }

        function C(e, t, n) {
            return f(e, t, n) <= 0
        }

        function k(e, t, n, r) {
            var i;
            switch (t) {
                case "===":
                    "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), i = e === n;
                    break;
                case "!==":
                    "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), i = e !== n;
                    break;
                case "":
                case "=":
                case "==":
                    i = _(e, n, r);
                    break;
                case "!=":
                    i = x(e, n, r);
                    break;
                case ">":
                    i = b(e, n, r);
                    break;
                case ">=":
                    i = S(e, n, r);
                    break;
                case "<":
                    i = w(e, n, r);
                    break;
                case "<=":
                    i = C(e, n, r);
                    break;
                default:
                    throw new TypeError("Invalid operator: " + t)
            }
            return i
        }

        function E(e, t) {
            if (e instanceof E) {
                if (e.loose === t) return e;
                e = e.value
            }
            if (!(this instanceof E)) return new E(e, t);
            $("comparator", e, t), this.loose = t, this.parse(e), this.semver === Ie ? this.value = "" : this.value = this.operator + this.semver.version, $("comp", this)
        }

        function O(e, t) {
            if (e instanceof O && e.loose === t) return e;
            if (!(this instanceof O)) return new O(e, t);
            if (this.loose = t, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function(e) {
                    return this.parseRange(e.trim())
                }, this).filter(function(e) {
                    return e.length
                }), !this.set.length) throw new TypeError("Invalid SemVer Range: " + e);
            this.format()
        }

        function M(e, t) {
            return new O(e, t).set.map(function(e) {
                return e.map(function(e) {
                    return e.value
                }).join(" ").trim().split(" ")
            })
        }

        function R(e, t) {
            return $("comp", e), e = j(e, t), $("caret", e), e = P(e, t), $("tildes", e), e = F(e, t), $("xrange", e), e = D(e, t), $("stars", e), e
        }

        function A(e) {
            return !e || "x" === e.toLowerCase() || "*" === e
        }

        function P(e, t) {
            return e.trim().split(/\s+/).map(function(e) {
                return T(e, t)
            }).join(" ")
        }

        function T(e, t) {
            var n = t ? K[ke] : K[Ce];
            return e.replace(n, function(t, n, r, i, o) {
                $("tilde", e, t, n, r, i, o);
                var s;
                return A(n) ? s = "" : A(r) ? s = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : A(i) ? s = ">=" + n + "." + r + ".0 <" + n + "." + (+r + 1) + ".0" : o ? ($("replaceTilde pr", o), "-" !== o.charAt(0) && (o = "-" + o), s = ">=" + n + "." + r + "." + i + o + " <" + n + "." + (+r + 1) + ".0") : s = ">=" + n + "." + r + "." + i + " <" + n + "." + (+r + 1) + ".0", $("tilde return", s), s
            })
        }

        function j(e, t) {
            return e.trim().split(/\s+/).map(function(e) {
                return L(e, t)
            }).join(" ")
        }

        function L(e, t) {
            $("caret", e, t);
            var n = t ? K[Re] : K[Me];
            return e.replace(n, function(t, n, r, i, o) {
                $("caret", e, t, n, r, i, o);
                var s;
                return A(n) ? s = "" : A(r) ? s = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : A(i) ? s = "0" === n ? ">=" + n + "." + r + ".0 <" + n + "." + (+r + 1) + ".0" : ">=" + n + "." + r + ".0 <" + (+n + 1) + ".0.0" : o ? ($("replaceCaret pr", o), "-" !== o.charAt(0) && (o = "-" + o), s = "0" === n ? "0" === r ? ">=" + n + "." + r + "." + i + o + " <" + n + "." + r + "." + (+i + 1) : ">=" + n + "." + r + "." + i + o + " <" + n + "." + (+r + 1) + ".0" : ">=" + n + "." + r + "." + i + o + " <" + (+n + 1) + ".0.0") : ($("no pr"), s = "0" === n ? "0" === r ? ">=" + n + "." + r + "." + i + " <" + n + "." + r + "." + (+i + 1) : ">=" + n + "." + r + "." + i + " <" + n + "." + (+r + 1) + ".0" : ">=" + n + "." + r + "." + i + " <" + (+n + 1) + ".0.0"), $("caret return", s), s
            })
        }

        function F(e, t) {
            return $("replaceXRanges", e, t), e.split(/\s+/).map(function(e) {
                return N(e, t)
            }).join(" ")
        }

        function N(e, t) {
            e = e.trim();
            var n = t ? K[_e] : K[we];
            return e.replace(n, function(t, n, r, i, o, s) {
                $("xRange", e, t, n, r, i, o, s);
                var a = A(r),
                    u = a || A(i),
                    l = u || A(o),
                    c = l;
                return "=" === n && c && (n = ""), a ? t = ">" === n || "<" === n ? "<0.0.0" : "*" : n && c ? (u && (i = 0), l && (o = 0), ">" === n ? (n = ">=", u ? (r = +r + 1, i = 0, o = 0) : l && (i = +i + 1, o = 0)) : "<=" === n && (n = "<", u ? r = +r + 1 : i = +i + 1), t = n + r + "." + i + "." + o) : u ? t = ">=" + r + ".0.0 <" + (+r + 1) + ".0.0" : l && (t = ">=" + r + "." + i + ".0 <" + r + "." + (+i + 1) + ".0"), $("xRange return", t), t
            })
        }

        function D(e, t) {
            return $("replaceStars", e, t), e.trim().replace(K[Fe], "")
        }

        function I(e, t, n, r, i, o, s, a, u, l, c, h, d) {
            return t = A(n) ? "" : A(r) ? ">=" + n + ".0.0" : A(i) ? ">=" + n + "." + r + ".0" : ">=" + t, a = A(u) ? "" : A(l) ? "<" + (+u + 1) + ".0.0" : A(c) ? "<" + u + "." + (+l + 1) + ".0" : h ? "<=" + u + "." + l + "." + c + "-" + h : "<=" + a, (t + " " + a).trim()
        }

        function V(e, t) {
            for (var n = 0; n < e.length; n++)
                if (!e[n].test(t)) return !1;
            if (t.prerelease.length) {
                for (var n = 0; n < e.length; n++)
                    if ($(e[n].semver), e[n].semver !== Ie && e[n].semver.prerelease.length > 0) {
                        var r = e[n].semver;
                        if (r.major === t.major && r.minor === t.minor && r.patch === t.patch) return !0
                    } return !1
            }
            return !0
        }

        function B(e, t, n) {
            try {
                t = new O(t, n)
            } catch (e) {
                return !1
            }
            return t.test(e)
        }

        function q(e, t, n) {
            return e.filter(function(e) {
                return B(e, t, n)
            }).sort(function(e, t) {
                return m(e, t, n)
            })[0] || null
        }

        function z(e, t, n) {
            return e.filter(function(e) {
                return B(e, t, n)
            }).sort(function(e, t) {
                return f(e, t, n)
            })[0] || null
        }

        function H(e, t) {
            try {
                return new O(e, t).range || "*"
            } catch (e) {
                return null
            }
        }

        function U(e, t, n) {
            return W(e, t, "<", n)
        }

        function Y(e, t, n) {
            return W(e, t, ">", n)
        }

        function W(e, t, n, r) {
            e = new s(e, r), t = new O(t, r);
            var i, o, a, u, l;
            switch (n) {
                case ">":
                    i = b, o = C, a = w, u = ">", l = ">=";
                    break;
                case "<":
                    i = w, o = S, a = b, u = "<", l = "<=";
                    break;
                default:
                    throw new TypeError('Must provide a hilo val of "<" or ">"')
            }
            if (B(e, t, r)) return !1;
            for (var c = 0; c < t.set.length; ++c) {
                var h = t.set[c],
                    d = null,
                    p = null;
                if (h.forEach(function(e) {
                        e.semver === Ie && (e = new E(">=0.0.0")), d = d || e, p = p || e, i(e.semver, d.semver, r) ? d = e : a(e.semver, p.semver, r) && (p = e)
                    }), d.operator === u || d.operator === l) return !1;
                if ((!p.operator || p.operator === u) && o(e, p.semver)) return !1;
                if (p.operator === l && a(e, p.semver)) return !1
            }
            return !0
        }

        function G(e, t) {
            var n = r(e, t);
            return n && n.prerelease.length ? n.prerelease : null
        }
        t = n.exports = s;
        var $;
        $ = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? function() {
            var e = Array.prototype.slice.call(arguments, 0);
            e.unshift("SEMVER"), console.log.apply(console, e)
        } : function() {}, t.SEMVER_SPEC_VERSION = "2.0.0";
        var Q = 256,
            Z = Number.MAX_SAFE_INTEGER || 9007199254740991,
            K = t.re = [],
            X = t.src = [],
            J = 0,
            ee = J++;
        X[ee] = "0|[1-9]\\d*";
        var te = J++;
        X[te] = "[0-9]+";
        var ne = J++;
        X[ne] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
        var re = J++;
        X[re] = "(" + X[ee] + ")\\.(" + X[ee] + ")\\.(" + X[ee] + ")";
        var ie = J++;
        X[ie] = "(" + X[te] + ")\\.(" + X[te] + ")\\.(" + X[te] + ")";
        var oe = J++;
        X[oe] = "(?:" + X[ee] + "|" + X[ne] + ")";
        var se = J++;
        X[se] = "(?:" + X[te] + "|" + X[ne] + ")";
        var ae = J++;
        X[ae] = "(?:-(" + X[oe] + "(?:\\." + X[oe] + ")*))";
        var ue = J++;
        X[ue] = "(?:-?(" + X[se] + "(?:\\." + X[se] + ")*))";
        var le = J++;
        X[le] = "[0-9A-Za-z-]+";
        var ce = J++;
        X[ce] = "(?:\\+(" + X[le] + "(?:\\." + X[le] + ")*))";
        var he = J++,
            de = "v?" + X[re] + X[ae] + "?" + X[ce] + "?";
        X[he] = "^" + de + "$";
        var pe = "[v=\\s]*" + X[ie] + X[ue] + "?" + X[ce] + "?",
            fe = J++;
        X[fe] = "^" + pe + "$";
        var ve = J++;
        X[ve] = "((?:<|>)?=?)";
        var me = J++;
        X[me] = X[te] + "|x|X|\\*";
        var ge = J++;
        X[ge] = X[ee] + "|x|X|\\*";
        var ye = J++;
        X[ye] = "[v=\\s]*(" + X[ge] + ")(?:\\.(" + X[ge] + ")(?:\\.(" + X[ge] + ")(?:" + X[ae] + ")?" + X[ce] + "?)?)?";
        var be = J++;
        X[be] = "[v=\\s]*(" + X[me] + ")(?:\\.(" + X[me] + ")(?:\\.(" + X[me] + ")(?:" + X[ue] + ")?" + X[ce] + "?)?)?";
        var we = J++;
        X[we] = "^" + X[ve] + "\\s*" + X[ye] + "$";
        var _e = J++;
        X[_e] = "^" + X[ve] + "\\s*" + X[be] + "$";
        var xe = J++;
        X[xe] = "(?:~>?)";
        var Se = J++;
        X[Se] = "(\\s*)" + X[xe] + "\\s+", K[Se] = new RegExp(X[Se], "g");
        var Ce = J++;
        X[Ce] = "^" + X[xe] + X[ye] + "$";
        var ke = J++;
        X[ke] = "^" + X[xe] + X[be] + "$";
        var Ee = J++;
        X[Ee] = "(?:\\^)";
        var Oe = J++;
        X[Oe] = "(\\s*)" + X[Ee] + "\\s+", K[Oe] = new RegExp(X[Oe], "g");
        var Me = J++;
        X[Me] = "^" + X[Ee] + X[ye] + "$";
        var Re = J++;
        X[Re] = "^" + X[Ee] + X[be] + "$";
        var Ae = J++;
        X[Ae] = "^" + X[ve] + "\\s*(" + pe + ")$|^$";
        var Pe = J++;
        X[Pe] = "^" + X[ve] + "\\s*(" + de + ")$|^$";
        var Te = J++;
        X[Te] = "(\\s*)" + X[ve] + "\\s*(" + pe + "|" + X[ye] + ")", K[Te] = new RegExp(X[Te], "g");
        var je = J++;
        X[je] = "^\\s*(" + X[ye] + ")\\s+-\\s+(" + X[ye] + ")\\s*$";
        var Le = J++;
        X[Le] = "^\\s*(" + X[be] + ")\\s+-\\s+(" + X[be] + ")\\s*$";
        var Fe = J++;
        X[Fe] = "(<|>)?=?\\s*\\*";
        for (var Ne = 0; Ne < J; Ne++) $(Ne, X[Ne]), K[Ne] || (K[Ne] = new RegExp(X[Ne]));
        t.parse = r, t.valid = i, t.clean = o, t.SemVer = s, s.prototype.format = function() {
            return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
        }, s.prototype.toString = function() {
            return this.version
        }, s.prototype.compare = function(e) {
            return $("SemVer.compare", this.version, this.loose, e), e instanceof s || (e = new s(e, this.loose)), this.compareMain(e) || this.comparePre(e)
        }, s.prototype.compareMain = function(e) {
            return e instanceof s || (e = new s(e, this.loose)), l(this.major, e.major) || l(this.minor, e.minor) || l(this.patch, e.patch)
        }, s.prototype.comparePre = function(e) {
            if (e instanceof s || (e = new s(e, this.loose)), this.prerelease.length && !e.prerelease.length) return -1;
            if (!this.prerelease.length && e.prerelease.length) return 1;
            if (!this.prerelease.length && !e.prerelease.length) return 0;
            var t = 0;
            do {
                var n = this.prerelease[t],
                    r = e.prerelease[t];
                if ($("prerelease compare", t, n, r), void 0 === n && void 0 === r) return 0;
                if (void 0 === r) return 1;
                if (void 0 === n) return -1;
                if (n !== r) return l(n, r)
            } while (++t)
        }, s.prototype.inc = function(e, t) {
            switch (e) {
                case "premajor":
                    this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                    break;
                case "preminor":
                    this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                    break;
                case "prepatch":
                    this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                    break;
                case "prerelease":
                    0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                    break;
                case "major":
                    0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                    break;
                case "minor":
                    0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                    break;
                case "patch":
                    0 === this.prerelease.length && this.patch++, this.prerelease = [];
                    break;
                case "pre":
                    if (0 === this.prerelease.length) this.prerelease = [0];
                    else {
                        for (var n = this.prerelease.length; --n >= 0;) "number" == typeof this.prerelease[n] && (this.prerelease[n]++, n = -2); - 1 === n && this.prerelease.push(0)
                    }
                    t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                    break;
                default:
                    throw new Error("invalid increment argument: " + e)
            }
            return this.format(), this.raw = this.version, this
        }, t.inc = a, t.diff = u, t.compareIdentifiers = l;
        var De = /^[0-9]+$/;
        t.rcompareIdentifiers = c, t.major = h, t.minor = d, t.patch = p, t.compare = f, t.compareLoose = v, t.rcompare = m, t.sort = g, t.rsort = y, t.gt = b, t.lt = w, t.eq = _, t.neq = x, t.gte = S, t.lte = C, t.cmp = k, t.Comparator = E;
        var Ie = {};
        E.prototype.parse = function(e) {
            var t = this.loose ? K[Ae] : K[Pe],
                n = e.match(t);
            if (!n) throw new TypeError("Invalid comparator: " + e);
            this.operator = n[1], "=" === this.operator && (this.operator = ""), n[2] ? this.semver = new s(n[2], this.loose) : this.semver = Ie
        }, E.prototype.toString = function() {
            return this.value
        }, E.prototype.test = function(e) {
            return $("Comparator.test", e, this.loose), this.semver === Ie || ("string" == typeof e && (e = new s(e, this.loose)), k(e, this.operator, this.semver, this.loose))
        }, t.Range = O, O.prototype.format = function() {
            return this.range = this.set.map(function(e) {
                return e.join(" ").trim()
            }).join("||").trim(), this.range
        }, O.prototype.toString = function() {
            return this.range
        }, O.prototype.parseRange = function(e) {
            var t = this.loose;
            e = e.trim(), $("range", e, t);
            var n = t ? K[Le] : K[je];
            e = e.replace(n, I), $("hyphen replace", e), e = e.replace(K[Te], "$1$2$3"), $("comparator trim", e, K[Te]), e = e.replace(K[Se], "$1~"), e = e.replace(K[Oe], "$1^"), e = e.split(/\s+/).join(" ");
            var r = t ? K[Ae] : K[Pe],
                i = e.split(" ").map(function(e) {
                    return R(e, t)
                }).join(" ").split(/\s+/);
            return this.loose && (i = i.filter(function(e) {
                return !!e.match(r)
            })), i = i.map(function(e) {
                return new E(e, t)
            })
        }, t.toComparators = M, O.prototype.test = function(e) {
            if (!e) return !1;
            "string" == typeof e && (e = new s(e, this.loose));
            for (var t = 0; t < this.set.length; t++)
                if (V(this.set[t], e)) return !0;
            return !1
        }, t.satisfies = B, t.maxSatisfying = q, t.minSatisfying = z, t.validRange = H, t.ltr = U, t.gtr = Y, t.outside = W, t.prerelease = G
    }), define("yauzl", ["require", "exports", "module", "fs", "zlib", "fd-slicer", "buffer-crc32", "util", "events", "stream", "stream", "stream"], function(e, t, n) {
        function r(e, t, n) {
            "function" == typeof t && (n = t, t = null), null == t && (t = {}), null == t.autoClose && (t.autoClose = !0), null == t.lazyEntries && (t.lazyEntries = !1), null == t.decodeStrings && (t.decodeStrings = !0), null == t.validateEntrySizes && (t.validateEntrySizes = !0), null == n && (n = b), w.open(e, "r", function(e, r) {
                if (e) return n(e);
                i(r, t, function(e, t) {
                    e && w.close(r, b), n(e, t)
                })
            })
        }

        function i(e, t, n) {
            "function" == typeof t && (n = t, t = null), null == t && (t = {}), null == t.autoClose && (t.autoClose = !1), null == t.lazyEntries && (t.lazyEntries = !1), null == t.decodeStrings && (t.decodeStrings = !0), null == t.validateEntrySizes && (t.validateEntrySizes = !0), null == n && (n = b), w.fstat(e, function(r, i) {
                if (r) return n(r);
                s(x.createFromFd(e, {
                    autoClose: !0
                }), i.size, t, n)
            })
        }

        function o(e, t, n) {
            "function" == typeof t && (n = t, t = null), null == t && (t = {}), t.autoClose = !1, null == t.lazyEntries && (t.lazyEntries = !1), null == t.decodeStrings && (t.decodeStrings = !0), null == t.validateEntrySizes && (t.validateEntrySizes = !0), s(x.createFromBuffer(e), e.length, t, n)
        }

        function s(e, t, n, r) {
            "function" == typeof n && (r = n, n = null), null == n && (n = {}), null == n.autoClose && (n.autoClose = !0), null == n.lazyEntries && (n.lazyEntries = !1), null == n.decodeStrings && (n.decodeStrings = !0);
            var i = !!n.decodeStrings;
            if (null == n.validateEntrySizes && (n.validateEntrySizes = !0), null == r && (r = b), "number" != typeof t) throw new Error("expected totalSize parameter to be a number");
            if (t > Number.MAX_SAFE_INTEGER) throw new Error("zip file too large. only file sizes up to 2^52 are supported due to JavaScript's Number type being an IEEE 754 double.");
            e.ref();
            var o = Math.min(65557, t),
                s = new Buffer(o),
                u = t - s.length;
            p(e, s, 0, o, u, function(l) {
                if (l) return r(l);
                for (var c = o - 22; c >= 0; c -= 1)
                    if (101010256 === s.readUInt32LE(c)) {
                        var h = s.slice(c),
                            d = h.readUInt16LE(4);
                        if (0 !== d) return r(new Error("multi-disk zip files are not supported: found disk number: " + d));
                        var f = h.readUInt16LE(10),
                            v = h.readUInt32LE(16),
                            m = h.readUInt16LE(20),
                            b = h.length - 22;
                        if (m !== b) return r(new Error("invalid comment length. expected: " + b + ". found: " + m));
                        var w = i ? g(h, 22, h.length, !1) : h.slice(22);
                        if (65535 !== f && 4294967295 !== v) return r(null, new a(e, v, t, f, w, n.autoClose, n.lazyEntries, i, n.validateEntrySizes));
                        var _ = new Buffer(20),
                            x = u + c - _.length;
                        return void p(e, _, 0, _.length, x, function(o) {
                            if (o) return r(o);
                            if (117853008 !== _.readUInt32LE(0)) return r(new Error("invalid zip64 end of central directory locator signature"));
                            var s = y(_, 8),
                                u = new Buffer(56);
                            p(e, u, 0, u.length, s, function(o) {
                                return o ? r(o) : 101075792 !== u.readUInt32LE(0) ? r(new Error("invalid zip64 end of central directory record signature")) : (f = y(u, 32), v = y(u, 48), r(null, new a(e, v, t, f, w, n.autoClose, n.lazyEntries, i, n.validateEntrySizes)))
                            })
                        })
                    } r(new Error("end of central directory record signature not found"))
            })
        }

        function a(e, t, n, r, i, o, s, a, u) {
            var c = this;
            k.call(c), c.reader = e, c.reader.on("error", function(e) {
                l(c, e)
            }), c.reader.once("close", function() {
                c.emit("close")
            }), c.readEntryCursor = t, c.fileSize = n, c.entryCount = r, c.comment = i, c.entriesRead = 0, c.autoClose = !!o, c.lazyEntries = !!s, c.decodeStrings = !!a, c.validateEntrySizes = !!u, c.isOpen = !0, c.emittedError = !1, c.lazyEntries || c.readEntry()
        }

        function u(e, t) {
            e.autoClose && e.close(), l(e, t)
        }

        function l(e, t) {
            e.emittedError || (e.emittedError = !0, e.emit("error", t))
        }

        function c() {}

        function h(e, t) {
            var n = 31 & e,
                r = (e >> 5 & 15) - 1,
                i = 1980 + (e >> 9 & 127),
                o = 2 * (31 & t),
                s = t >> 5 & 63,
                a = t >> 11 & 31;
            return new Date(i, r, n, a, s, o, 0)
        }

        function d(e) {
            return -1 !== e.indexOf("\\") ? "invalid characters in fileName: " + e : /^[a-zA-Z]:/.test(e) || /^\//.test(e) ? "absolute path: " + e : -1 !== e.split("/").indexOf("..") ? "invalid relative path: " + e : null
        }

        function p(e, t, n, r, i, o) {
            if (0 === r) return setImmediate(function() {
                o(null, new Buffer(0))
            });
            e.read(t, n, r, i, function(e, t) {
                return e ? o(e) : t < r ? o(new Error("unexpected EOF")) : void o()
            })
        }

        function f(e) {
            E.call(this), this.actualByteCount = 0, this.expectedByteCount = e
        }

        function v() {
            k.call(this), this.refCount = 0
        }

        function m(e) {
            O.call(this), this.context = e, this.context.ref(), this.unreffedYet = !1
        }

        function g(e, t, n, r) {
            if (r) return e.toString("utf8", t, n);
            for (var i = "", o = t; o < n; o++) i += R[e[o]];
            return i
        }

        function y(e, t) {
            var n = e.readUInt32LE(t);
            return 4294967296 * e.readUInt32LE(t + 4) + n
        }

        function b(e) {
            if (e) throw e
        }
        var w = e("fs"),
            _ = e("zlib"),
            x = e("fd-slicer"),
            S = e("buffer-crc32"),
            C = e("util"),
            k = e("events").EventEmitter,
            E = e("stream").Transform,
            O = e("stream").PassThrough,
            M = e("stream").Writable;
        t.open = r, t.fromFd = i, t.fromBuffer = o, t.fromRandomAccessReader = s, t.dosDateTimeToDate = h,
            t.validateFileName = d, t.ZipFile = a, t.Entry = c, t.RandomAccessReader = v, C.inherits(a, k), a.prototype.close = function() {
                this.isOpen && (this.isOpen = !1, this.reader.unref())
            }, a.prototype.readEntry = function() {
                var e = this;
                if (e.entryCount === e.entriesRead) return void setImmediate(function() {
                    e.autoClose && e.close(), e.emittedError || e.emit("end")
                });
                if (!e.emittedError) {
                    var t = new Buffer(46);
                    p(e.reader, t, 0, t.length, e.readEntryCursor, function(n) {
                        if (n) return u(e, n);
                        if (!e.emittedError) {
                            var r = new c,
                                i = t.readUInt32LE(0);
                            if (33639248 !== i) return u(e, new Error("invalid central directory file header signature: 0x" + i.toString(16)));
                            if (r.versionMadeBy = t.readUInt16LE(4), r.versionNeededToExtract = t.readUInt16LE(6), r.generalPurposeBitFlag = t.readUInt16LE(8), r.compressionMethod = t.readUInt16LE(10), r.lastModFileTime = t.readUInt16LE(12), r.lastModFileDate = t.readUInt16LE(14), r.crc32 = t.readUInt32LE(16), r.compressedSize = t.readUInt32LE(20), r.uncompressedSize = t.readUInt32LE(24), r.fileNameLength = t.readUInt16LE(28), r.extraFieldLength = t.readUInt16LE(30), r.fileCommentLength = t.readUInt16LE(32), r.internalFileAttributes = t.readUInt16LE(36), r.externalFileAttributes = t.readUInt32LE(38), r.relativeOffsetOfLocalHeader = t.readUInt32LE(42), 64 & r.generalPurposeBitFlag) return u(e, new Error("strong encryption is not supported"));
                            e.readEntryCursor += 46, t = new Buffer(r.fileNameLength + r.extraFieldLength + r.fileCommentLength), p(e.reader, t, 0, t.length, e.readEntryCursor, function(n) {
                                if (n) return u(e, n);
                                if (!e.emittedError) {
                                    var i = 0 != (2048 & r.generalPurposeBitFlag);
                                    r.fileName = e.decodeStrings ? g(t, 0, r.fileNameLength, i) : t.slice(0, r.fileNameLength);
                                    var o = r.fileNameLength + r.extraFieldLength,
                                        s = t.slice(r.fileNameLength, o);
                                    r.extraFields = [];
                                    for (var a = 0; a < s.length - 3;) {
                                        var l = s.readUInt16LE(a + 0),
                                            c = s.readUInt16LE(a + 2),
                                            h = a + 4,
                                            p = h + c;
                                        if (p > s.length) return u(e, new Error("extra field length exceeds extra field buffer size"));
                                        var f = new Buffer(c);
                                        s.copy(f, 0, h, p), r.extraFields.push({
                                            id: l,
                                            data: f
                                        }), a = p
                                    }
                                    if (r.fileComment = e.decodeStrings ? g(t, o, o + r.fileCommentLength, i) : t.slice(o, o + r.fileCommentLength), r.comment = r.fileComment, e.readEntryCursor += t.length, e.entriesRead += 1, 4294967295 === r.uncompressedSize || 4294967295 === r.compressedSize || 4294967295 === r.relativeOffsetOfLocalHeader) {
                                        for (var v = null, a = 0; a < r.extraFields.length; a++) {
                                            var m = r.extraFields[a];
                                            if (1 === m.id) {
                                                v = m.data;
                                                break
                                            }
                                        }
                                        if (null == v) return u(e, new Error("expected zip64 extended information extra field"));
                                        var b = 0;
                                        if (4294967295 === r.uncompressedSize) {
                                            if (b + 8 > v.length) return u(e, new Error("zip64 extended information extra field does not include uncompressed size"));
                                            r.uncompressedSize = y(v, b), b += 8
                                        }
                                        if (4294967295 === r.compressedSize) {
                                            if (b + 8 > v.length) return u(e, new Error("zip64 extended information extra field does not include compressed size"));
                                            r.compressedSize = y(v, b), b += 8
                                        }
                                        if (4294967295 === r.relativeOffsetOfLocalHeader) {
                                            if (b + 8 > v.length) return u(e, new Error("zip64 extended information extra field does not include relative header offset"));
                                            r.relativeOffsetOfLocalHeader = y(v, b), b += 8
                                        }
                                    }
                                    if (e.decodeStrings)
                                        for (var a = 0; a < r.extraFields.length; a++) {
                                            var m = r.extraFields[a];
                                            if (28789 === m.id) {
                                                if (m.data.length < 6) continue;
                                                if (1 !== m.data.readUInt8(0)) continue;
                                                var w = m.data.readUInt32LE(1);
                                                if (S.unsigned(t.slice(0, r.fileNameLength)) !== w) continue;
                                                r.fileName = g(m.data, 5, m.data.length, !0);
                                                break
                                            }
                                        }
                                    if (e.validateEntrySizes && 0 === r.compressionMethod) {
                                        var _ = r.uncompressedSize;
                                        if (r.isEncrypted() && (_ += 12), r.compressedSize !== _) {
                                            var x = "compressed/uncompressed size mismatch for stored file: " + r.compressedSize + " != " + r.uncompressedSize;
                                            return u(e, new Error(x))
                                        }
                                    }
                                    if (e.decodeStrings) {
                                        var C = d(r.fileName);
                                        if (null != C) return u(e, new Error(C))
                                    }
                                    e.emit("entry", r), e.lazyEntries || e.readEntry()
                                }
                            })
                        }
                    })
                }
            }, a.prototype.openReadStream = function(e, t, n) {
                var r = this,
                    i = 0,
                    o = e.compressedSize;
                if (null == n) n = t, t = {};
                else {
                    if (null != t.decrypt) {
                        if (!e.isEncrypted()) throw new Error("options.decrypt can only be specified for encrypted entries");
                        if (!1 !== t.decrypt) throw new Error("invalid options.decrypt value: " + t.decrypt);
                        if (e.isCompressed() && !1 !== t.decompress) throw new Error("entry is encrypted and compressed, and options.decompress !== false")
                    }
                    if (null != t.decompress) {
                        if (!e.isCompressed()) throw new Error("options.decompress can only be specified for compressed entries");
                        if (!1 !== t.decompress && !0 !== t.decompress) throw new Error("invalid options.decompress value: " + t.decompress)
                    }
                    if (null != t.start || null != t.end) {
                        if (e.isCompressed() && !1 !== t.decompress) throw new Error("start/end range not allowed for compressed entry without options.decompress === false");
                        if (e.isEncrypted() && !1 !== t.decrypt) throw new Error("start/end range not allowed for encrypted entry without options.decrypt === false")
                    }
                    if (null != t.start) {
                        if ((i = t.start) < 0) throw new Error("options.start < 0");
                        if (i > e.compressedSize) throw new Error("options.start > entry.compressedSize")
                    }
                    if (null != t.end) {
                        if ((o = t.end) < 0) throw new Error("options.end < 0");
                        if (o > e.compressedSize) throw new Error("options.end > entry.compressedSize");
                        if (o < i) throw new Error("options.end < options.start")
                    }
                }
                if (!r.isOpen) return n(new Error("closed"));
                if (e.isEncrypted() && !1 !== t.decrypt) return n(new Error("entry is encrypted, and options.decrypt !== false"));
                r.reader.ref();
                var s = new Buffer(30);
                p(r.reader, s, 0, s.length, e.relativeOffsetOfLocalHeader, function(a) {
                    try {
                        if (a) return n(a);
                        var u = s.readUInt32LE(0);
                        if (67324752 !== u) return n(new Error("invalid local file header signature: 0x" + u.toString(16)));
                        var l, c = s.readUInt16LE(26),
                            h = s.readUInt16LE(28),
                            d = e.relativeOffsetOfLocalHeader + s.length + c + h;
                        if (0 === e.compressionMethod) l = !1;
                        else {
                            if (8 !== e.compressionMethod) return n(new Error("unsupported compression method: " + e.compressionMethod));
                            l = null == t.decompress || t.decompress
                        }
                        var p = d,
                            v = p + e.compressedSize;
                        if (0 !== e.compressedSize && v > r.fileSize) return n(new Error("file data overflows file bounds: " + p + " + " + e.compressedSize + " > " + r.fileSize));
                        var m = r.reader.createReadStream({
                                start: p + i,
                                end: p + o
                            }),
                            g = m;
                        if (l) {
                            var y = !1,
                                b = _.createInflateRaw();
                            m.on("error", function(e) {
                                setImmediate(function() {
                                    y || b.emit("error", e)
                                })
                            }), m.pipe(b), r.validateEntrySizes ? (g = new f(e.uncompressedSize), b.on("error", function(e) {
                                setImmediate(function() {
                                    y || g.emit("error", e)
                                })
                            }), b.pipe(g)) : g = b, g.destroy = function() {
                                y = !0, b !== g && b.unpipe(g), m.unpipe(b), m.destroy()
                            }
                        }
                        n(null, g)
                    } finally {
                        r.reader.unref()
                    }
                })
            }, c.prototype.getLastModDate = function() {
                return h(this.lastModFileDate, this.lastModFileTime)
            }, c.prototype.isEncrypted = function() {
                return 0 != (1 & this.generalPurposeBitFlag)
            }, c.prototype.isCompressed = function() {
                return 8 === this.compressionMethod
            }, C.inherits(f, E), f.prototype._transform = function(e, t, n) {
                if (this.actualByteCount += e.length, this.actualByteCount > this.expectedByteCount) {
                    var r = "too many bytes in the stream. expected " + this.expectedByteCount + ". got at least " + this.actualByteCount;
                    return n(new Error(r))
                }
                n(null, e)
            }, f.prototype._flush = function(e) {
                if (this.actualByteCount < this.expectedByteCount) {
                    var t = "not enough bytes in the stream. expected " + this.expectedByteCount + ". got only " + this.actualByteCount;
                    return e(new Error(t))
                }
                e()
            }, C.inherits(v, k), v.prototype.ref = function() {
                this.refCount += 1
            }, v.prototype.unref = function() {
                function e(e) {
                    if (e) return t.emit("error", e);
                    t.emit("close")
                }
                var t = this;
                if (t.refCount -= 1, !(t.refCount > 0)) {
                    if (t.refCount < 0) throw new Error("invalid unref");
                    t.close(e)
                }
            }, v.prototype.createReadStream = function(e) {
                var t = e.start,
                    n = e.end;
                if (t === n) {
                    var r = new O;
                    return setImmediate(function() {
                        r.end()
                    }), r
                }
                var i = this._readStreamForRange(t, n),
                    o = !1,
                    s = new m(this);
                i.on("error", function(e) {
                    setImmediate(function() {
                        o || s.emit("error", e)
                    })
                }), s.destroy = function() {
                    i.unpipe(s), s.unref(), i.destroy()
                };
                var a = new f(n - t);
                return s.on("error", function(e) {
                    setImmediate(function() {
                        o || a.emit("error", e)
                    })
                }), a.destroy = function() {
                    o = !0, s.unpipe(a), s.destroy()
                }, i.pipe(s).pipe(a)
            }, v.prototype._readStreamForRange = function(e, t) {
                throw new Error("not implemented")
            }, v.prototype.read = function(e, t, n, r, i) {
                var o = this.createReadStream({
                        start: r,
                        end: r + n
                    }),
                    s = new M,
                    a = 0;
                s._write = function(n, r, i) {
                    n.copy(e, t + a, 0, n.length), a += n.length, i()
                }, s.on("finish", i), o.on("error", function(e) {
                    i(e)
                }), o.pipe(s)
            }, v.prototype.close = function(e) {
                setImmediate(e)
            }, C.inherits(m, O), m.prototype._flush = function(e) {
                this.unref(), e()
            }, m.prototype.unref = function(e) {
                this.unreffedYet || (this.unreffedYet = !0, this.context.unref())
            };
        var R = "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    }), define("buffer-crc32", ["require", "exports", "module", "buffer"], function(e, t, n) {
        function r(e) {
            if (a.isBuffer(e)) return e;
            var t = "function" == typeof a.alloc && "function" == typeof a.from;
            if ("number" == typeof e) return t ? a.alloc(e) : new a(e);
            if ("string" == typeof e) return t ? a.from(e) : new a(e);
            throw new Error("input must be buffer, number, or string, received " + typeof e)
        }

        function i(e) {
            var t = r(4);
            return t.writeInt32BE(e, 0), t
        }

        function o(e, t) {
            e = r(e), a.isBuffer(t) && (t = t.readUInt32BE(0));
            for (var n = -1 ^ ~~t, i = 0; i < e.length; i++) n = u[255 & (n ^ e[i])] ^ n >>> 8;
            return -1 ^ n
        }

        function s() {
            return i(o.apply(null, arguments))
        }
        var a = e("buffer").Buffer,
            u = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
        "undefined" != typeof Int32Array && (u = new Int32Array(u)), s.signed = function() {
            return o.apply(null, arguments)
        }, s.unsigned = function() {
            return o.apply(null, arguments) >>> 0
        }, n.exports = s
    }), define("fd-slicer", ["require", "exports", "module", "fs", "util", "stream", "pend", "events"], function(e, t, n) {
        function r(e, t) {
            t = t || {}, m.call(this), this.fd = e, this.pend = new v, this.pend.max = 1, this.refCount = 0, this.autoClose = !!t.autoClose
        }

        function i(e, t) {
            t = t || {}, d.call(this, t), this.context = e, this.context.ref(), this.start = t.start || 0, this.endOffset = t.end, this.pos = this.start, this.destroyed = !1
        }

        function o(e, t) {
            t = t || {}, p.call(this, t), this.context = e, this.context.ref(), this.start = t.start || 0, this.endOffset = null == t.end ? 1 / 0 : +t.end, this.bytesWritten = 0, this.pos = this.start, this.destroyed = !1, this.on("finish", this.destroy.bind(this))
        }

        function s(e) {
            m.call(this), this.refCount = 0, this.buffer = e
        }

        function a(e) {
            return new s(e)
        }

        function u(e, t) {
            return new r(e, t)
        }
        var l = e("fs"),
            c = e("util"),
            h = e("stream"),
            d = h.Readable,
            p = h.Writable,
            f = h.PassThrough,
            v = e("pend"),
            m = e("events").EventEmitter;
        t.createFromBuffer = a, t.createFromFd = u, t.BufferSlicer = s, t.FdSlicer = r, c.inherits(r, m), r.prototype.read = function(e, t, n, r, i) {
            var o = this;
            o.pend.go(function(s) {
                l.read(o.fd, e, t, n, r, function(e, t, n) {
                    s(), i(e, t, n)
                })
            })
        }, r.prototype.write = function(e, t, n, r, i) {
            var o = this;
            o.pend.go(function(s) {
                l.write(o.fd, e, t, n, r, function(e, t, n) {
                    s(), i(e, t, n)
                })
            })
        }, r.prototype.createReadStream = function(e) {
            return new i(this, e)
        }, r.prototype.createWriteStream = function(e) {
            return new o(this, e)
        }, r.prototype.ref = function() {
            this.refCount += 1
        }, r.prototype.unref = function() {
            function e(e) {
                e ? t.emit("error", e) : t.emit("close")
            }
            var t = this;
            if (t.refCount -= 1, !(t.refCount > 0)) {
                if (t.refCount < 0) throw new Error("invalid unref");
                t.autoClose && l.close(t.fd, e)
            }
        }, c.inherits(i, d), i.prototype._read = function(e) {
            var t = this;
            if (!t.destroyed) {
                var n = Math.min(t._readableState.highWaterMark, e);
                if (null != t.endOffset && (n = Math.min(n, t.endOffset - t.pos)), n <= 0) return t.destroyed = !0, t.push(null), void t.context.unref();
                t.context.pend.go(function(e) {
                    if (t.destroyed) return e();
                    var r = new Buffer(n);
                    l.read(t.context.fd, r, 0, n, t.pos, function(n, i) {
                        n ? t.destroy(n) : 0 === i ? (t.destroyed = !0, t.push(null), t.context.unref()) : (t.pos += i, t.push(r.slice(0, i))), e()
                    })
                })
            }
        }, i.prototype.destroy = function(e) {
            this.destroyed || (e = e || new Error("stream destroyed"), this.destroyed = !0, this.emit("error", e), this.context.unref())
        }, c.inherits(o, p), o.prototype._write = function(e, t, n) {
            var r = this;
            if (!r.destroyed) {
                if (r.pos + e.length > r.endOffset) {
                    var i = new Error("maximum file length exceeded");
                    return i.code = "ETOOBIG", r.destroy(), void n(i)
                }
                r.context.pend.go(function(t) {
                    if (r.destroyed) return t();
                    l.write(r.context.fd, e, 0, e.length, r.pos, function(e, i) {
                        e ? (r.destroy(), t(), n(e)) : (r.bytesWritten += i, r.pos += i, r.emit("progress"), t(), n())
                    })
                })
            }
        }, o.prototype.destroy = function() {
            this.destroyed || (this.destroyed = !0, this.context.unref())
        }, c.inherits(s, m), s.prototype.read = function(e, t, n, r, i) {
            var o = r + n,
                s = o - this.buffer.length,
                a = s > 0 ? s : n;
            this.buffer.copy(e, t, r, o), setImmediate(function() {
                i(null, a)
            })
        }, s.prototype.write = function(e, t, n, r, i) {
            e.copy(this.buffer, r, t, t + n), setImmediate(function() {
                i(null, n, e)
            })
        }, s.prototype.createReadStream = function(e) {
            e = e || {};
            var t = new f(e);
            return t.start = e.start || 0, t.endOffset = e.end, t.pos = t.endOffset || this.buffer.length, t.destroyed = !1, t.write(this.buffer.slice(t.start, t.pos)), t.end(), t.destroy = function() {
                t.destroyed = !0
            }, t
        }, s.prototype.createWriteStream = function(e) {
            var t = this;
            e = e || {};
            var n = new p(e);
            return n.start = e.start || 0, n.endOffset = null == e.end ? this.buffer.length : +e.end, n.bytesWritten = 0, n.pos = n.start, n.destroyed = !1, n._write = function(e, r, i) {
                if (!n.destroyed) {
                    var o = n.pos + e.length;
                    if (o > n.endOffset) {
                        var s = new Error("maximum file length exceeded");
                        return s.code = "ETOOBIG", n.destroyed = !0, void i(s)
                    }
                    e.copy(t.buffer, n.pos, 0, e.length), n.bytesWritten += e.length, n.pos = o, n.emit("progress"), i()
                }
            }, n.destroy = function() {
                n.destroyed = !0
            }, n
        }, s.prototype.ref = function() {
            this.refCount += 1
        }, s.prototype.unref = function() {
            if (this.refCount -= 1, this.refCount < 0) throw new Error("invalid unref")
        }
    }), define("pend", ["require", "exports", "module"], function(e, t, n) {
        function r() {
            this.pending = 0, this.max = 1 / 0, this.listeners = [], this.waiting = [], this.error = null
        }

        function i(e) {
            function t(t) {
                if (r) throw new Error("callback called twice");
                if (r = !0, e.error = e.error || t, e.pending -= 1, e.waiting.length > 0 && e.pending < e.max) o(e, e.waiting.shift());
                else if (0 === e.pending) {
                    var i = e.listeners;
                    e.listeners = [], i.forEach(n)
                }
            }

            function n(t) {
                t(e.error)
            }
            e.pending += 1;
            var r = !1;
            return t
        }

        function o(e, t) {
            t(i(e))
        }
        n.exports = r, r.prototype.go = function(e) {
            this.pending < this.max ? o(this, e) : this.waiting.push(e)
        }, r.prototype.wait = function(e) {
            0 === this.pending ? e(this.error) : this.listeners.push(e)
        }, r.prototype.hold = function() {
            return i(this)
        }
    }), define("tarball-extract", ["require", "exports", "module", "fs", "tar", "zlib", "wget"], function(e, t, n) {
        function r(e, t, n) {
            /(gz|tgz)$/i.test(e) ? o.createReadStream(e).pipe(a.createGunzip()).pipe(s.extract({
                cwd: t
            })).on("error", function(e) {
                n(e)
            }).on("end", function() {
                n(null)
            }) : o.createReadStream(e).pipe(s.extract({
                cwd: t
            })).on("error", function(e) {
                n(e)
            }).on("end", function() {
                n(null)
            })
        }

        function i(e, t, n, i, o) {
            i || (i = {});
            var s = u.download(e, t, i);
            s.on("error", function(e) {
                o("error", {
                    error: e
                })
            }), s.on("end", function(i) {
                r(i, n, function(r, i) {
                    o(null, {
                        url: e,
                        downloadFile: t,
                        destination: n
                    })
                })
            })
        }
        var o = e("fs"),
            s = e("tar"),
            a = e("zlib"),
            u = e("wget");
        t.extractTarball = r, t.extractTarballDownload = i
    }), define("minipass", ["require", "exports", "module", "events", "yallist", "string_decoder"], function(e, t, n) {
        "use strict";
        var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            i = e("events"),
            o = e("yallist"),
            s = Symbol("EOF"),
            a = Symbol("maybeEmitEnd"),
            u = Symbol("emittedEnd"),
            l = Symbol("closed"),
            c = Symbol("read"),
            h = Symbol("flush"),
            d = Symbol("flushChunk"),
            p = e("string_decoder").StringDecoder,
            f = Symbol("encoding"),
            v = Symbol("decoder"),
            m = Symbol("flowing"),
            g = Symbol("resume"),
            y = Symbol("bufferLength"),
            b = Symbol("bufferPush"),
            w = Symbol("bufferShift"),
            _ = Symbol("objectMode"),
            x = function(e) {
                function t(t) {
                    var n = e.call(this) || this;
                    return n[m] = !1, n.pipes = new o, n.buffer = new o, n[_] = t && t.objectMode || !1, n[_] ? n[f] = null : n[f] = t && t.encoding || null, "buffer" === n[f] && (n[f] = null), n[v] = n[f] ? new p(n[f]) : null, n[s] = !1, n[u] = !1, n[l] = !1, n.writable = !0, n.readable = !0, n[y] = 0, n
                }
                return r(t, e), Object.defineProperty(t.prototype, "bufferLength", {
                    get: function() {
                        return this[y]
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "encoding", {
                    get: function() {
                        return this[f]
                    },
                    set: function(e) {
                        var t = this;
                        if (this[_]) throw new Error("cannot set encoding in objectMode");
                        if (this[f] && e !== this[f] && (this[v] && this[v].lastNeed || this[y])) throw new Error("cannot change encoding");
                        this[f] !== e && (this[v] = e ? new p(e) : null, this.buffer.length && (this.buffer = this.buffer.map(function(e) {
                            return t[v].write(e)
                        }))), this[f] = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.setEncoding = function(e) {
                    this.encoding = e
                }, t.prototype.write = function(e, t, n) {
                    if (this[s]) throw new Error("write after end");
                    "function" == typeof t && (n = t, t = "utf8"), t || (t = "utf8"), "string" != typeof e || this[_] || t === this[f] && !this[v].lastNeed || (e = new Buffer(e, t)), Buffer.isBuffer(e) && this[f] && (e = this[v].write(e));
                    try {
                        return this.flowing ? (this.emit("data", e), this.flowing) : (this[b](e), !1)
                    } finally {
                        this.emit("readable"), n && n()
                    }
                }, t.prototype.read = function(e) {
                    try {
                        return 0 === this[y] || 0 === e || e > this[y] ? null : (this[_] && (e = null), this.buffer.length > 1 && !this[_] && (this.encoding ? this.buffer = new o([Array.from(this.buffer).join("")]) : this.buffer = new o([Buffer.concat(Array.from(this.buffer), this[y])])), this[c](e || null, this.buffer.head.value))
                    } finally {
                        this[a]()
                    }
                }, t.prototype[c] = function(e, t) {
                    return e === t.length || null === e ? this[w]() : (this.buffer.head.value = t.slice(e), t = t.slice(0, e), this[y] -= e), this.emit("data", t), this.buffer.length || this[s] || this.emit("drain"), t
                }, t.prototype.end = function(e, t, n) {
                    "function" == typeof e && (n = e, e = null), "function" == typeof t && (n = t, t = "utf8"), e && this.write(e, t), n && this.once("end", n), this[s] = !0, this.writable = !1, this.flowing && this[a]()
                }, t.prototype[g] = function() {
                    this[m] = !0, this.emit("resume"), this.buffer.length ? this[h]() : this[s] ? this[a]() : this.emit("drain")
                }, t.prototype.resume = function() {
                    return this[g]()
                }, t.prototype.pause = function() {
                    this[m] = !1
                }, Object.defineProperty(t.prototype, "flowing", {
                    get: function() {
                        return this[m]
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype[b] = function(e) {
                    return this[_] ? this[y] += 1 : this[y] += e.length, this.buffer.push(e)
                }, t.prototype[w] = function() {
                    return this.buffer.length && (this[_] ? this[y] -= 1 : this[y] -= this.buffer.head.value.length), this.buffer.shift()
                }, t.prototype[h] = function() {
                    do {} while (this[d](this[w]()));
                    this.buffer.length || this[s] || this.emit("drain")
                }, t.prototype[d] = function(e) {
                    return !!e && (this.emit("data", e), this.flowing)
                }, t.prototype.pipe = function(e) {
                    var t = this;
                    return this.pipes.push(e), e.on("drain", function(e) {
                        return t[g]()
                    }), this[g](), e
                }, t.prototype.addEventHandler = function(e, t) {
                    return this.on(e, t)
                }, t.prototype.on = function(t, n) {
                    try {
                        return e.prototype.on.call(this, t, n)
                    } finally {
                        "data" !== t || this.pipes.length || this.flowing || this[g]()
                    }
                }, Object.defineProperty(t.prototype, "emittedEnd", {
                    get: function() {
                        return this[u]
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype[a] = function() {
                    !this[u] && 0 === this.buffer.length && this[s] && (this.emit("end"), this.emit("prefinish"), this.emit("finish"), this[l] && this.emit("close"))
                }, t.prototype.emit = function(t, n) {
                    var r = this;
                    if ("data" === t) {
                        if (!n) return;
                        this.pipes.length && this.pipes.forEach(function(e) {
                            return e.write(n) || r.pause()
                        })
                    } else if ("end" === t) this[v] && (n = this[v].end()) && (this.pipes.forEach(function(e) {
                        return e.write(n)
                    }), e.prototype.emit.call(this, "data", n)), this.pipes.forEach(function(e) {
                        e !== process.stdout && e !== process.stderr && e.end()
                    }), this[u] = !0, this.readable = !1;
                    else if ("close" === t && (this[l] = !0, !this[u])) return;
                    var i = new Array(arguments.length);
                    if (i[0] = t, i[1] = n, arguments.length > 2)
                        for (var o = 2; o < arguments.length; o++) i[o] = arguments[o];
                    try {
                        return e.prototype.emit.apply(this, i)
                    } finally {
                        "end" !== t && this[a]()
                    }
                }, t
            }(i);
        n.exports = x
    }), define("yallist", ["require", "exports", "module"], function(e, t, n) {
        "use strict";

        function r(e) {
            var t = this;
            if (t instanceof r || (t = new r), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach(function(e) {
                t.push(e)
            });
            else if (arguments.length > 0)
                for (var n = 0, i = arguments.length; n < i; n++) t.push(arguments[n]);
            return t
        }

        function i(e, t) {
            e.tail = new s(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++
        }

        function o(e, t) {
            e.head = new s(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++
        }

        function s(e, t, n, r) {
            if (!(this instanceof s)) return new s(e, t, n, r);
            this.list = r, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, n ? (n.prev = this, this.next = n) : this.next = null
        }
        n.exports = r, r.Node = s, r.create = r, r.prototype.removeNode = function(e) {
            if (e.list !== this) throw new Error("removing node which does not belong to this list");
            var t = e.next,
                n = e.prev;
            t && (t.prev = n), n && (n.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = n), e.list.length--, e.next = null, e.prev = null, e.list = null
        }, r.prototype.unshiftNode = function(e) {
            if (e !== this.head) {
                e.list && e.list.removeNode(e);
                var t = this.head;
                e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
            }
        }, r.prototype.pushNode = function(e) {
            if (e !== this.tail) {
                e.list && e.list.removeNode(e);
                var t = this.tail;
                e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
            }
        }, r.prototype.push = function() {
            for (var e = 0, t = arguments.length; e < t; e++) i(this, arguments[e]);
            return this.length
        }, r.prototype.unshift = function() {
            for (var e = 0, t = arguments.length; e < t; e++) o(this, arguments[e]);
            return this.length
        }, r.prototype.pop = function() {
            if (this.tail) {
                var e = this.tail.value;
                return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
            }
        }, r.prototype.shift = function() {
            if (this.head) {
                var e = this.head.value;
                return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
            }
        }, r.prototype.forEach = function(e, t) {
            t = t || this;
            for (var n = this.head, r = 0; null !== n; r++) e.call(t, n.value, r, this), n = n.next
        }, r.prototype.forEachReverse = function(e, t) {
            t = t || this;
            for (var n = this.tail, r = this.length - 1; null !== n; r--) e.call(t, n.value, r, this), n = n.prev
        }, r.prototype.get = function(e) {
            for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next;
            if (t === e && null !== n) return n.value
        }, r.prototype.getReverse = function(e) {
            for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev;
            if (t === e && null !== n) return n.value
        }, r.prototype.map = function(e, t) {
            t = t || this;
            for (var n = new r, i = this.head; null !== i;) n.push(e.call(t, i.value, this)), i = i.next;
            return n
        }, r.prototype.mapReverse = function(e, t) {
            t = t || this;
            for (var n = new r, i = this.tail; null !== i;) n.push(e.call(t, i.value, this)), i = i.prev;
            return n
        }, r.prototype.reduce = function(e, t) {
            var n, r = this.head;
            if (arguments.length > 1) n = t;
            else {
                if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
                r = this.head.next, n = this.head.value
            }
            for (var i = 0; null !== r; i++) n = e(n, r.value, i), r = r.next;
            return n
        }, r.prototype.reduceReverse = function(e, t) {
            var n, r = this.tail;
            if (arguments.length > 1) n = t;
            else {
                if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
                r = this.tail.prev, n = this.tail.value
            }
            for (var i = this.length - 1; null !== r; i--) n = e(n, r.value, i), r = r.prev;
            return n
        }, r.prototype.toArray = function() {
            for (var e = new Array(this.length), t = 0, n = this.head; null !== n; t++) e[t] = n.value, n = n.next;
            return e
        }, r.prototype.toArrayReverse = function() {
            for (var e = new Array(this.length), t = 0, n = this.tail; null !== n; t++) e[t] = n.value, n = n.prev;
            return e
        }, r.prototype.slice = function(e, t) {
            t = t || this.length, t < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
            var n = new r;
            if (t < e || t < 0) return n;
            e < 0 && (e = 0), t > this.length && (t = this.length);
            for (var i = 0, o = this.head; null !== o && i < e; i++) o = o.next;
            for (; null !== o && i < t; i++, o = o.next) n.push(o.value);
            return n
        }, r.prototype.sliceReverse = function(e, t) {
            t = t || this.length, t < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
            var n = new r;
            if (t < e || t < 0) return n;
            e < 0 && (e = 0), t > this.length && (t = this.length);
            for (var i = this.length, o = this.tail; null !== o && i > t; i--) o = o.prev;
            for (; null !== o && i > e; i--, o = o.prev) n.push(o.value);
            return n
        }, r.prototype.reverse = function() {
            for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
                var r = n.prev;
                n.prev = n.next, n.next = r
            }
            return this.head = t, this.tail = e, this
        }
    }), define("safe-buffer", ["require", "exports", "module", "buffer"], function(e, t, n) {
        function r(e, t, n) {
            return o(e, t, n)
        }
        var i = e("buffer"),
            o = i.Buffer;
        o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow ? n.exports = i : (Object.keys(i).forEach(function(e) {
            t[e] = i[e]
        }), t.Buffer = r), Object.keys(o).forEach(function(e) {
            r[e] = o[e]
        }), r.from = function(e, t, n) {
            if ("number" == typeof e) throw new TypeError("Argument must not be a number");
            return o(e, t, n)
        }, r.alloc = function(e, t, n) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            var r = o(e);
            return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r
        }, r.allocUnsafe = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return o(e)
        }, r.allocUnsafeSlow = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return i.SlowBuffer(e)
        }
    }), define("string_decoder", ["require", "exports", "module", "safe-buffer"], function(e, t, n) {
        "use strict";

        function r(e) {
            if (!e) return "utf8";
            for (var t;;) switch (e) {
                case "utf8":
                case "utf-8":
                    return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return "utf16le";
                case "latin1":
                case "binary":
                    return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                    return e;
                default:
                    if (t) return;
                    e = ("" + e).toLowerCase(), t = !0
            }
        }

        function i(e) {
            var t = r(e);
            if ("string" != typeof t && (y.isEncoding === b || !b(e))) throw new Error("Unknown encoding: " + e);
            return t || e
        }

        function o(e) {
            this.encoding = i(e);
            var t;
            switch (this.encoding) {
                case "utf16le":
                    this.text = d, this.end = p, t = 4;
                    break;
                case "utf8":
                    this.fillLast = l, t = 4;
                    break;
                case "base64":
                    this.text = f, this.end = v, t = 3;
                    break;
                default:
                    return this.write = m, void(this.end = g)
            }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = y.allocUnsafe(t)
        }

        function s(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : -1
        }

        function a(e, t, n) {
            var r = t.length - 1;
            if (r < n) return 0;
            var i = s(t[r]);
            return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --r < n ? 0 : (i = s(t[r])) >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --r < n ? 0 : (i = s(t[r]), i >= 0 ? (i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i) : 0)
        }

        function u(e, t, n) {
            if (128 != (192 & t[0])) return e.lastNeed = 0, "�".repeat(n);
            if (e.lastNeed > 1 && t.length > 1) {
                if (128 != (192 & t[1])) return e.lastNeed = 1, "�".repeat(n + 1);
                if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�".repeat(n + 2)
            }
        }

        function l(e) {
            var t = this.lastTotal - this.lastNeed,
                n = u(this, e, t);
            return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
        }

        function c(e, t) {
            var n = a(this, e, t);
            if (!this.lastNeed) return e.toString("utf8", t);
            this.lastTotal = n;
            var r = e.length - (n - this.lastNeed);
            return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r)
        }

        function h(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "�".repeat(this.lastTotal - this.lastNeed) : t
        }

        function d(e, t) {
            if ((e.length - t) % 2 == 0) {
                var n = e.toString("utf16le", t);
                if (n) {
                    var r = n.charCodeAt(n.length - 1);
                    if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
                }
                return n
            }
            return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
        }

        function p(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var n = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, n)
            }
            return t
        }

        function f(e, t) {
            var n = (e.length - t) % 3;
            return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
        }

        function v(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }

        function m(e) {
            return e.toString(this.encoding)
        }

        function g(e) {
            return e && e.length ? this.write(e) : ""
        }
        var y = e("safe-buffer").Buffer,
            b = y.isEncoding || function(e) {
                switch ((e = "" + e) && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            };
        t.StringDecoder = o, o.prototype.write = function(e) {
            if (0 === e.length) return "";
            var t, n;
            if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e))) return "";
                n = this.lastNeed, this.lastNeed = 0
            } else n = 0;
            return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
        }, o.prototype.end = h, o.prototype.text = c, o.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
        }
    }), define("mkdirp", ["require", "exports", "module", "path", "fs"], function(e, t, n) {
        function r(e, t, n, s) {
            "function" == typeof t ? (n = t, t = {}) : t && "object" == typeof t || (t = {
                mode: t
            });
            var a = t.mode,
                u = t.fs || o;
            void 0 === a && (a = 511 & ~process.umask()), s || (s = null);
            var l = n || function() {};
            e = i.resolve(e), u.mkdir(e, a, function(n) {
                if (!n) return s = s || e, l(null, s);
                switch (n.code) {
                    case "ENOENT":
                        r(i.dirname(e), t, function(n, i) {
                            n ? l(n, i) : r(e, t, l, i)
                        });
                        break;
                    default:
                        u.stat(e, function(e, t) {
                            e || !t.isDirectory() ? l(n, s) : l(null, s)
                        })
                }
            })
        }
        var i = e("path"),
            o = e("fs");
        n.exports = r.mkdirp = r.mkdirP = r, r.sync = function e(t, n, r) {
            n && "object" == typeof n || (n = {
                mode: n
            });
            var s = n.mode,
                a = n.fs || o;
            void 0 === s && (s = 511 & ~process.umask()), r || (r = null), t = i.resolve(t);
            try {
                a.mkdirSync(t, s), r = r || t
            } catch (o) {
                switch (o.code) {
                    case "ENOENT":
                        r = e(i.dirname(t), n, r), e(t, n, r);
                        break;
                    default:
                        var u;
                        try {
                            u = a.statSync(t)
                        } catch (e) {
                            throw o
                        }
                        if (!u.isDirectory()) throw o
                }
            }
            return r
        }
    }), define("tunnel/index", ["require", "exports", "module", "./lib/tunnel"], function(e, t, n) {
        n.exports = e("./lib/tunnel")
    }), define("tunnel", ["tunnel/index"], function(e) {
        return e
    }), define("wget/index", ["require", "exports", "module", "./lib/wget", "./lib/wget"], function(e, t, n) {
        t.download = e("./lib/wget").download, t.request = e("./lib/wget").request
    }), define("wget", ["wget/index"], function(e) {
        return e
    }),
    define("minizlib/index", ["require", "exports", "module", "assert", "buffer", "./constants", "minipass"], function(e, t, n) {
        "use strict";
        var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            i = e("assert"),
            o = e("buffer").Buffer,
            s = process.binding("zlib"),
            a = t.constants = e("./constants"),
            u = e("minipass"),
            l = new Map([
                [a.Z_OK, "Z_OK"],
                [a.Z_STREAM_END, "Z_STREAM_END"],
                [a.Z_NEED_DICT, "Z_NEED_DICT"],
                [a.Z_ERRNO, "Z_ERRNO"],
                [a.Z_STREAM_ERROR, "Z_STREAM_ERROR"],
                [a.Z_DATA_ERROR, "Z_DATA_ERROR"],
                [a.Z_MEM_ERROR, "Z_MEM_ERROR"],
                [a.Z_BUF_ERROR, "Z_BUF_ERROR"],
                [a.Z_VERSION_ERROR, "Z_VERSION_ERROR"]
            ]),
            c = new Set([a.Z_NO_FLUSH, a.Z_PARTIAL_FLUSH, a.Z_SYNC_FLUSH, a.Z_FULL_FLUSH, a.Z_FINISH, a.Z_BLOCK]),
            h = new Set([a.Z_FILTERED, a.Z_HUFFMAN_ONLY, a.Z_RLE, a.Z_FIXED, a.Z_DEFAULT_STRATEGY]),
            d = Symbol("opts"),
            p = Symbol("chunkSize"),
            f = Symbol("flushFlag"),
            v = Symbol("finishFlush"),
            m = Symbol("handle"),
            g = Symbol("hadError"),
            y = Symbol("buffer"),
            b = Symbol("offset"),
            w = Symbol("level"),
            _ = Symbol("strategy"),
            x = Symbol("ended"),
            S = function(e) {
                function t(t, n) {
                    var r = e.call(this, t) || this;
                    if (r[x] = !1, r[d] = t = t || {}, r[p] = t.chunkSize || a.Z_DEFAULT_CHUNK, t.flush && !c.has(t.flush)) throw new Error("Invalid flush flag: " + t.flush);
                    if (t.finishFlush && !c.has(t.finishFlush)) throw new Error("Invalid flush flag: " + t.finishFlush);
                    if (r[f] = t.flush || a.Z_NO_FLUSH, r[v] = void 0 !== t.finishFlush ? t.finishFlush : a.Z_FINISH, t.chunkSize && t.chunkSize < a.Z_MIN_CHUNK) throw new Error("Invalid chunk size: " + t.chunkSize);
                    if (t.windowBits && (t.windowBits < a.Z_MIN_WINDOWBITS || t.windowBits > a.Z_MAX_WINDOWBITS)) throw new Error("Invalid windowBits: " + t.windowBits);
                    if (t.level && (t.level < a.Z_MIN_LEVEL || t.level > a.Z_MAX_LEVEL)) throw new Error("Invalid compression level: " + t.level);
                    if (t.memLevel && (t.memLevel < a.Z_MIN_MEMLEVEL || t.memLevel > a.Z_MAX_MEMLEVEL)) throw new Error("Invalid memLevel: " + t.memLevel);
                    if (t.strategy && !h.has(t.strategy)) throw new Error("Invalid strategy: " + t.strategy);
                    if (t.dictionary && !(t.dictionary instanceof o)) throw new Error("Invalid dictionary: it should be a Buffer instance");
                    r[m] = new s.Zlib(n), r[g] = !1, r[m].onerror = function(e, t) {
                        r.close(), r[g] = !0;
                        var n = new Error(e);
                        n.errno = t, n.code = l.get(t), r.emit("error", n)
                    };
                    var i = "number" == typeof t.level ? t.level : a.Z_DEFAULT_COMPRESSION,
                        u = "number" == typeof t.strategy ? t.strategy : a.Z_DEFAULT_STRATEGY;
                    return r[m].init(t.windowBits || a.Z_DEFAULT_WINDOWBITS, i, t.memLevel || a.Z_DEFAULT_MEMLEVEL, u, t.dictionary), r[y] = o.allocUnsafe(r[p]), r[b] = 0, r[w] = i, r[_] = u, r.once("end", r.close), r
                }
                return r(t, e), t.prototype.close = function() {
                    this[m] && (this[m].close(), this[m] = null, this.emit("close"))
                }, t.prototype.params = function(e, t) {
                    if (!this[m]) throw new Error("cannot switch params when binding is closed");
                    if (!this[m].params) throw new Error("not supported in this implementation");
                    if (e < a.Z_MIN_LEVEL || e > a.Z_MAX_LEVEL) throw new RangeError("Invalid compression level: " + e);
                    if (!h.has(t)) throw new TypeError("Invalid strategy: " + t);
                    this[w] === e && this[_] === t || (this.flush(a.Z_SYNC_FLUSH), i(this[m], "zlib binding closed"), this[m].params(e, t), this[g] || (this[w] = e, this[_] = t))
                }, t.prototype.reset = function() {
                    return i(this[m], "zlib binding closed"), this[m].reset()
                }, t.prototype.flush = function(e) {
                    if (void 0 === e && (e = a.Z_FULL_FLUSH), !this.ended) {
                        var t = this[f];
                        this[f] = e, this.write(o.alloc(0)), this[f] = t
                    }
                }, t.prototype.end = function(t, n, r) {
                    return t && this.write(t, n), this.flush(this[v]), this[x] = !0, e.prototype.end.call(this, null, null, r)
                }, Object.defineProperty(t.prototype, "ended", {
                    get: function() {
                        return this[x]
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.write = function(t, n, r) {
                    "function" == typeof n && (r = n, n = "utf8"), "string" == typeof t && (t = new o(t, n));
                    var s = t && t.length,
                        a = this[p] - this[b],
                        u = 0,
                        l = this[f],
                        c = !0;
                    i(this[m], "zlib binding closed");
                    do {
                        var h = this[m].writeSync(l, t, u, s, this[y], this[b], a);
                        if (this[g]) break;
                        var d = h[0],
                            v = h[1],
                            w = a - v;
                        if (i(w >= 0, "have should not go down"), w > 0) {
                            var _ = this[y].slice(this[b], this[b] + w);
                            this[b] += w, c = e.prototype.write.call(this, _) && c
                        }
                        if ((0 === v || this[b] >= this[p]) && (a = this[p], this[b] = 0, this[y] = o.allocUnsafe(this[p])), 0 !== v) break;
                        u += s - d, s = d
                    } while (!this[g]);
                    return r && r(), c
                }, t
            }(u),
            C = function(e) {
                function t(t) {
                    return e.call(this, t, a.DEFLATE) || this
                }
                return r(t, e), t
            }(S),
            k = function(e) {
                function t(t) {
                    return e.call(this, t, a.INFLATE) || this
                }
                return r(t, e), t
            }(S),
            E = function(e) {
                function t(t) {
                    return e.call(this, t, a.GZIP) || this
                }
                return r(t, e), t
            }(S),
            O = function(e) {
                function t(t) {
                    return e.call(this, t, a.GUNZIP) || this
                }
                return r(t, e), t
            }(S),
            M = function(e) {
                function t(t) {
                    return e.call(this, t, a.DEFLATERAW) || this
                }
                return r(t, e), t
            }(S),
            R = function(e) {
                function t(t) {
                    return e.call(this, t, a.INFLATERAW) || this
                }
                return r(t, e), t
            }(S),
            A = function(e) {
                function t(t) {
                    return e.call(this, t, a.UNZIP) || this
                }
                return r(t, e), t
            }(S);
        t.Deflate = C, t.Inflate = k, t.Gzip = E, t.Gunzip = O, t.DeflateRaw = M, t.InflateRaw = R, t.Unzip = A
    }), define("minizlib", ["minizlib/index"], function(e) {
        return e
    }), define("tar/index", ["require", "exports", "module", "./lib/create", "./lib/replace", "./lib/list", "./lib/update", "./lib/extract", "./lib/pack", "./lib/unpack", "./lib/parse", "./lib/read-entry", "./lib/write-entry", "./lib/header", "./lib/pax", "./lib/types"], function(e, t, n) {
        "use strict";
        t.c = t.create = e("./lib/create"), t.r = t.replace = e("./lib/replace"), t.t = t.list = e("./lib/list"), t.u = t.update = e("./lib/update"), t.x = t.extract = e("./lib/extract"), t.Pack = e("./lib/pack"), t.Unpack = e("./lib/unpack"), t.Parse = e("./lib/parse"), t.ReadEntry = e("./lib/read-entry"), t.WriteEntry = e("./lib/write-entry"), t.Header = e("./lib/header"), t.Pax = e("./lib/pax"), t.types = e("./lib/types")
    }), define("tar", ["tar/index"], function(e) {
        return e
    }), define("text", {}), define("electron", [], function() {
        return window.nodeRequire("electron")
    }), define("assert", [], function() {
        return window.nodeRequire("assert")
    }), define("buffer", [], function() {
        return window.nodeRequire("buffer")
    }), define("child_process", [], function() {
        return window.nodeRequire("child_process")
    }), define("crypto", [], function() {
        var e = window.nodeRequire("crypto");
        return delete e.createCredentials, delete e.Credentials, e
    }), define("events", [], function() {
        return window.nodeRequire("events")
    }), define("fs", [], function() {
        return window.nodeRequire("fs")
    }), define("http", [], function() {
        return window.nodeRequire("http")
    }), define("https", [], function() {
        return window.nodeRequire("https")
    }), define("net", [], function() {
        return window.nodeRequire("net")
    }), define("os", [], function() {
        return window.nodeRequire("os")
    }), define("path", [], function() {
        return window.nodeRequire("path")
    }), define("stream", [], function() {
        return window.nodeRequire("stream")
    }), define("timers", [], function() {
        return window.nodeRequire("timers")
    }), define("tls", [], function() {
        return window.nodeRequire("tls")
    }), define("url", [], function() {
        return window.nodeRequire("url")
    }), define("util", [], function() {
        return window.nodeRequire("util")
    }), define("zlib", [], function() {
        return window.nodeRequire("zlib")
    }), define("aurelia-templating-resources/aurelia-templating-resources", ["exports", "aurelia-pal", "./compose", "./if", "./with", "./repeat", "./show", "./hide", "./sanitize-html", "./replaceable", "./focus", "aurelia-templating", "./css-resource", "./html-sanitizer", "./attr-binding-behavior", "./binding-mode-behaviors", "./throttle-binding-behavior", "./debounce-binding-behavior", "./self-binding-behavior", "./signal-binding-behavior", "./binding-signaler", "./update-trigger-binding-behavior", "./abstract-repeater", "./repeat-strategy-locator", "./html-resource-plugin", "./null-repeat-strategy", "./array-repeat-strategy", "./map-repeat-strategy", "./set-repeat-strategy", "./number-repeat-strategy", "./repeat-utilities", "./analyze-view-factory", "./aurelia-hide-style"], function(e, t, n, r, i, o, s, a, u, l, c, h, d, p, f, v, m, g, y, b, w, _, x, S, C, k, E, O, M, R, A, P, T) {
        "use strict";

        function j(e) {
            (0, T.injectAureliaHideStyleAtHead)(), e.globalResources(t.PLATFORM.moduleName("./compose"), t.PLATFORM.moduleName("./if"), t.PLATFORM.moduleName("./with"), t.PLATFORM.moduleName("./repeat"), t.PLATFORM.moduleName("./show"), t.PLATFORM.moduleName("./hide"), t.PLATFORM.moduleName("./replaceable"), t.PLATFORM.moduleName("./sanitize-html"), t.PLATFORM.moduleName("./focus"), t.PLATFORM.moduleName("./binding-mode-behaviors"), t.PLATFORM.moduleName("./self-binding-behavior"), t.PLATFORM.moduleName("./throttle-binding-behavior"), t.PLATFORM.moduleName("./debounce-binding-behavior"), t.PLATFORM.moduleName("./signal-binding-behavior"), t.PLATFORM.moduleName("./update-trigger-binding-behavior"), t.PLATFORM.moduleName("./attr-binding-behavior")), (0, C.configure)(e);
            var n = e.container.get(h.ViewEngine),
                r = {
                    fetch: function(e) {
                        var t;
                        return t = {}, t[e] = (0, d._createCSSResource)(e), t
                    }
                };
            [".css", ".less", ".sass", ".scss", ".styl"].forEach(function(e) {
                return n.addResourcePlugin(e, r)
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.viewsRequireLifecycle = e.unwrapExpression = e.updateOneTimeBinding = e.isOneTime = e.getItemsSourceExpression = e.updateOverrideContext = e.createFullOverrideContext = e.NumberRepeatStrategy = e.SetRepeatStrategy = e.MapRepeatStrategy = e.ArrayRepeatStrategy = e.NullRepeatStrategy = e.RepeatStrategyLocator = e.AbstractRepeater = e.UpdateTriggerBindingBehavior = e.BindingSignaler = e.SignalBindingBehavior = e.SelfBindingBehavior = e.DebounceBindingBehavior = e.ThrottleBindingBehavior = e.TwoWayBindingBehavior = e.OneWayBindingBehavior = e.OneTimeBindingBehavior = e.AttrBindingBehavior = e.configure = e.Focus = e.Replaceable = e.SanitizeHTMLValueConverter = e.HTMLSanitizer = e.Hide = e.Show = e.Repeat = e.With = e.If = e.Compose = void 0, e.Compose = n.Compose, e.If = r.If, e.With = i.With, e.Repeat = o.Repeat, e.Show = s.Show, e.Hide = a.Hide, e.HTMLSanitizer = p.HTMLSanitizer, e.SanitizeHTMLValueConverter = u.SanitizeHTMLValueConverter, e.Replaceable = l.Replaceable, e.Focus = c.Focus, e.configure = j, e.AttrBindingBehavior = f.AttrBindingBehavior, e.OneTimeBindingBehavior = v.OneTimeBindingBehavior, e.OneWayBindingBehavior = v.OneWayBindingBehavior, e.TwoWayBindingBehavior = v.TwoWayBindingBehavior, e.ThrottleBindingBehavior = m.ThrottleBindingBehavior, e.DebounceBindingBehavior = g.DebounceBindingBehavior, e.SelfBindingBehavior = y.SelfBindingBehavior, e.SignalBindingBehavior = b.SignalBindingBehavior, e.BindingSignaler = w.BindingSignaler, e.UpdateTriggerBindingBehavior = _.UpdateTriggerBindingBehavior, e.AbstractRepeater = x.AbstractRepeater, e.RepeatStrategyLocator = S.RepeatStrategyLocator, e.NullRepeatStrategy = k.NullRepeatStrategy, e.ArrayRepeatStrategy = E.ArrayRepeatStrategy, e.MapRepeatStrategy = O.MapRepeatStrategy, e.SetRepeatStrategy = M.SetRepeatStrategy, e.NumberRepeatStrategy = R.NumberRepeatStrategy, e.createFullOverrideContext = A.createFullOverrideContext, e.updateOverrideContext = A.updateOverrideContext, e.getItemsSourceExpression = A.getItemsSourceExpression, e.isOneTime = A.isOneTime, e.updateOneTimeBinding = A.updateOneTimeBinding, e.unwrapExpression = A.unwrapExpression, e.viewsRequireLifecycle = P.viewsRequireLifecycle
    }), define("aurelia-templating-resources", ["aurelia-templating-resources/aurelia-templating-resources"], function(e) {
        return e
    }), define("aurelia-templating-resources/compose", ["exports", "aurelia-dependency-injection", "aurelia-task-queue", "aurelia-templating", "aurelia-pal"], function(e, t, n, r, i) {
        "use strict";

        function o(e, t, n, r) {
            n && Object.defineProperty(e, t, {
                enumerable: n.enumerable,
                configurable: n.configurable,
                writable: n.writable,
                value: n.initializer ? n.initializer.call(r) : void 0
            })
        }

        function s(e, t, n, r, i) {
            var o = {};
            return Object.keys(r).forEach(function(e) {
                o[e] = r[e]
            }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function(n, r) {
                return r(e, t, n) || n
            }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
        }

        function a(e, t) {
            return Object.assign(t, {
                bindingContext: e.bindingContext,
                overrideContext: e.overrideContext,
                owningView: e.owningView,
                container: e.container,
                viewSlot: e.viewSlot,
                viewResources: e.viewResources,
                currentController: e.currentController,
                host: e.element,
                swapOrder: e.swapOrder
            })
        }

        function u(e, t) {
            e.currentInstruction = null, e.compositionEngine.compose(t).then(function(t) {
                e.currentController = t, e.currentViewModel = t ? t.viewModel : null
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Compose = void 0;
        var l, c, h, d, p, f, v, m;
        e.Compose = (l = (0, r.customElement)("compose"), c = (0, t.inject)(i.DOM.Element, t.Container, r.CompositionEngine, r.ViewSlot, r.ViewResources, n.TaskQueue), l(h = (0, r.noView)(h = c((d = function() {
            function e(e, t, n, r, i, s) {
                o(this, "model", p, this), o(this, "view", f, this), o(this, "viewModel", v, this), o(this, "swapOrder", m, this), this.element = e, this.container = t, this.compositionEngine = n, this.viewSlot = r, this.viewResources = i, this.taskQueue = s, this.currentController = null, this.currentViewModel = null
            }
            return e.prototype.created = function(e) {
                this.owningView = e
            }, e.prototype.bind = function(e, t) {
                this.bindingContext = e, this.overrideContext = t, u(this, a(this, {
                    view: this.view,
                    viewModel: this.viewModel,
                    model: this.model
                }))
            }, e.prototype.unbind = function(e, t) {
                this.bindingContext = null, this.overrideContext = null;
                this.viewSlot.removeAll(!0, !0)
            }, e.prototype.modelChanged = function(e, t) {
                var n = this;
                if (this.currentInstruction) return void(this.currentInstruction.model = e);
                this.taskQueue.queueMicroTask(function() {
                    if (n.currentInstruction) return void(n.currentInstruction.model = e);
                    var t = n.currentViewModel;
                    t && "function" == typeof t.activate && t.activate(e)
                })
            }, e.prototype.viewChanged = function(e, t) {
                var n = this,
                    r = a(this, {
                        view: e,
                        viewModel: this.currentViewModel || this.viewModel,
                        model: this.model
                    });
                if (this.currentInstruction) return void(this.currentInstruction = r);
                this.currentInstruction = r, this.taskQueue.queueMicroTask(function() {
                    return u(n, n.currentInstruction)
                })
            }, e.prototype.viewModelChanged = function(e, t) {
                var n = this,
                    r = a(this, {
                        viewModel: e,
                        view: this.view,
                        model: this.model
                    });
                if (this.currentInstruction) return void(this.currentInstruction = r);
                this.currentInstruction = r, this.taskQueue.queueMicroTask(function() {
                    return u(n, n.currentInstruction)
                })
            }, e
        }(), p = s(d.prototype, "model", [r.bindable], {
            enumerable: !0,
            initializer: null
        }), f = s(d.prototype, "view", [r.bindable], {
            enumerable: !0,
            initializer: null
        }), v = s(d.prototype, "viewModel", [r.bindable], {
            enumerable: !0,
            initializer: null
        }), m = s(d.prototype, "swapOrder", [r.bindable], {
            enumerable: !0,
            initializer: null
        }), h = d)) || h) || h) || h)
    }), define("aurelia-templating-resources/if", ["exports", "aurelia-templating", "aurelia-dependency-injection"], function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.If = void 0;
        var r, i, o;
        e.If = (r = (0, t.customAttribute)("if"), i = (0, n.inject)(t.BoundViewFactory, t.ViewSlot), r(o = (0, t.templateController)(o = i(o = function() {
            function e(e, t) {
                this.viewFactory = e, this.viewSlot = t, this.showing = !1, this.view = null, this.bindingContext = null, this.overrideContext = null
            }
            return e.prototype.bind = function(e, t) {
                this.bindingContext = e, this.overrideContext = t, this.valueChanged(this.value)
            }, e.prototype.valueChanged = function(e) {
                var t = this;
                if (this.__queuedChanges) return void this.__queuedChanges.push(e);
                var n = this._runValueChanged(e);
                n instanceof Promise && function() {
                    var e = t.__queuedChanges = [],
                        r = function n() {
                            if (!e.length) return void(t.__queuedChanges = void 0);
                            (t._runValueChanged(e.shift()) || Promise.resolve()).then(n)
                        };
                    n.then(r)
                }()
            }, e.prototype._runValueChanged = function(e) {
                var t = this;
                if (!e) {
                    var n = void 0;
                    return null !== this.view && this.showing && (n = this.viewSlot.remove(this.view), n instanceof Promise ? n.then(function() {
                        return t.view.unbind()
                    }) : this.view.unbind()), this.showing = !1, n
                }
                if (null === this.view && (this.view = this.viewFactory.create()), this.view.isBound || this.view.bind(this.bindingContext, this.overrideContext), !this.showing) return this.showing = !0, this.viewSlot.add(this.view)
            }, e.prototype.unbind = function() {
                null !== this.view && (this.view.unbind(), this.viewFactory.isCaching && (this.showing && (this.showing = !1, this.viewSlot.remove(this.view, !0, !0)), this.view.returnToCache(), this.view = null))
            }, e
        }()) || o) || o) || o)
    }), define("aurelia-templating-resources/with", ["exports", "aurelia-dependency-injection", "aurelia-templating", "aurelia-binding"], function(e, t, n, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.With = void 0;
        var i, o, s;
        e.With = (i = (0, n.customAttribute)("with"), o = (0, t.inject)(n.BoundViewFactory, n.ViewSlot), i(s = (0, n.templateController)(s = o(s = function() {
            function e(e, t) {
                this.viewFactory = e, this.viewSlot = t, this.parentOverrideContext = null, this.view = null
            }
            return e.prototype.bind = function(e, t) {
                this.parentOverrideContext = t, this.valueChanged(this.value)
            }, e.prototype.valueChanged = function(e) {
                var t = (0, r.createOverrideContext)(e, this.parentOverrideContext);
                this.view ? this.view.bind(e, t) : (this.view = this.viewFactory.create(), this.view.bind(e, t), this.viewSlot.add(this.view))
            }, e.prototype.unbind = function() {
                this.parentOverrideContext = null, this.view && this.view.unbind()
            }, e
        }()) || s) || s) || s)
    }), define("aurelia-templating-resources/repeat", ["exports", "aurelia-dependency-injection", "aurelia-binding", "aurelia-templating", "./repeat-strategy-locator", "./repeat-utilities", "./analyze-view-factory", "./abstract-repeater"], function(e, t, n, r, i, o, s, a) {
        "use strict";

        function u(e, t, n, r) {
            n && Object.defineProperty(e, t, {
                enumerable: n.enumerable,
                configurable: n.configurable,
                writable: n.writable,
                value: n.initializer ? n.initializer.call(r) : void 0
            })
        }

        function l(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function c(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function h(e, t, n, r, i) {
            var o = {};
            return Object.keys(r).forEach(function(e) {
                o[e] = r[e]
            }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function(n, r) {
                return r(e, t, n) || n
            }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Repeat = void 0;
        var d, p, f, v, m, g, y, b;
        e.Repeat = (d = (0, r.customAttribute)("repeat"), p = (0, t.inject)(r.BoundViewFactory, r.TargetInstruction, r.ViewSlot, r.ViewResources, n.ObserverLocator, i.RepeatStrategyLocator), d(f = (0, r.templateController)(f = p((v = function(e) {
            function t(t, n, r, i, a, c) {
                var h = l(this, e.call(this, {
                    local: "item",
                    viewsRequireLifecycle: (0, s.viewsRequireLifecycle)(t)
                }));
                return u(h, "items", m, h), u(h, "local", g, h), u(h, "key", y, h), u(h, "value", b, h), h.viewFactory = t, h.instruction = n, h.viewSlot = r, h.lookupFunctions = i.lookupFunctions, h.observerLocator = a, h.key = "key", h.value = "value", h.strategyLocator = c, h.ignoreMutation = !1, h.sourceExpression = (0, o.getItemsSourceExpression)(h.instruction, "repeat.for"), h.isOneTime = (0, o.isOneTime)(h.sourceExpression), h.viewsRequireLifecycle = (0, s.viewsRequireLifecycle)(t), h
            }
            return c(t, e), t.prototype.call = function(e, t) {
                this[e](this.items, t)
            }, t.prototype.bind = function(e, t) {
                this.scope = {
                    bindingContext: e,
                    overrideContext: t
                }, this.matcherBinding = this._captureAndRemoveMatcherBinding(), this.itemsChanged()
            }, t.prototype.unbind = function() {
                this.scope = null, this.items = null, this.matcherBinding = null, this.viewSlot.removeAll(!0), this._unsubscribeCollection()
            }, t.prototype._unsubscribeCollection = function() {
                this.collectionObserver && (this.collectionObserver.unsubscribe(this.callContext, this), this.collectionObserver = null, this.callContext = null)
            }, t.prototype.itemsChanged = function() {
                if (this._unsubscribeCollection(), this.scope) {
                    var e = this.items;
                    if (this.strategy = this.strategyLocator.getStrategy(e), !this.strategy) throw new Error("Value for '" + this.sourceExpression + "' is non-repeatable");
                    this.isOneTime || this._observeInnerCollection() || this._observeCollection(), this.strategy.instanceChanged(this, e)
                }
            }, t.prototype._getInnerCollection = function() {
                var e = (0, o.unwrapExpression)(this.sourceExpression);
                return e ? e.evaluate(this.scope, null) : null
            }, t.prototype.handleCollectionMutated = function(e, t) {
                this.collectionObserver && this.strategy.instanceMutated(this, e, t)
            }, t.prototype.handleInnerCollectionMutated = function(e, t) {
                var n = this;
                if (this.collectionObserver && !this.ignoreMutation) {
                    this.ignoreMutation = !0;
                    var r = this.sourceExpression.evaluate(this.scope, this.lookupFunctions);
                    this.observerLocator.taskQueue.queueMicroTask(function() {
                        return n.ignoreMutation = !1
                    }), r === this.items ? this.itemsChanged() : this.items = r
                }
            }, t.prototype._observeInnerCollection = function() {
                var e = this._getInnerCollection(),
                    t = this.strategyLocator.getStrategy(e);
                return !!t && (this.collectionObserver = t.getCollectionObserver(this.observerLocator, e), !!this.collectionObserver && (this.callContext = "handleInnerCollectionMutated", this.collectionObserver.subscribe(this.callContext, this), !0))
            }, t.prototype._observeCollection = function() {
                var e = this.items;
                this.collectionObserver = this.strategy.getCollectionObserver(this.observerLocator, e), this.collectionObserver && (this.callContext = "handleCollectionMutated", this.collectionObserver.subscribe(this.callContext, this))
            }, t.prototype._captureAndRemoveMatcherBinding = function() {
                if (this.viewFactory.viewFactory)
                    for (var e = this.viewFactory.viewFactory.instructions, t = Object.keys(e), n = 0; n < t.length; n++) {
                        var r = e[t[n]].expressions;
                        if (r)
                            for (; n < r.length; n++)
                                if ("matcher" === r[0].targetProperty) {
                                    var i = r[0];
                                    return r.splice(0, 1), i
                                }
                    }
            }, t.prototype.viewCount = function() {
                return this.viewSlot.children.length
            }, t.prototype.views = function() {
                return this.viewSlot.children
            }, t.prototype.view = function(e) {
                return this.viewSlot.children[e]
            }, t.prototype.matcher = function() {
                return this.matcherBinding ? this.matcherBinding.sourceExpression.evaluate(this.scope, this.matcherBinding.lookupFunctions) : null
            }, t.prototype.addView = function(e, t) {
                var n = this.viewFactory.create();
                n.bind(e, t), this.viewSlot.add(n)
            }, t.prototype.insertView = function(e, t, n) {
                var r = this.viewFactory.create();
                r.bind(t, n), this.viewSlot.insert(e, r)
            }, t.prototype.moveView = function(e, t) {
                this.viewSlot.move(e, t)
            }, t.prototype.removeAllViews = function(e, t) {
                return this.viewSlot.removeAll(e, t)
            }, t.prototype.removeViews = function(e, t, n) {
                return this.viewSlot.removeMany(e, t, n)
            }, t.prototype.removeView = function(e, t, n) {
                return this.viewSlot.removeAt(e, t, n)
            }, t.prototype.updateBindings = function(e) {
                for (var t = e.bindings.length; t--;)(0, o.updateOneTimeBinding)(e.bindings[t]);
                for (t = e.controllers.length; t--;)
                    for (var n = e.controllers[t].boundProperties.length; n--;) {
                        var r = e.controllers[t].boundProperties[n].binding;
                        (0, o.updateOneTimeBinding)(r)
                    }
            }, t
        }(a.AbstractRepeater), m = h(v.prototype, "items", [r.bindable], {
            enumerable: !0,
            initializer: null
        }), g = h(v.prototype, "local", [r.bindable], {
            enumerable: !0,
            initializer: null
        }), y = h(v.prototype, "key", [r.bindable], {
            enumerable: !0,
            initializer: null
        }), b = h(v.prototype, "value", [r.bindable], {
            enumerable: !0,
            initializer: null
        }), f = v)) || f) || f) || f)
    }), define("aurelia-templating-resources/repeat-strategy-locator", ["exports", "./null-repeat-strategy", "./array-repeat-strategy", "./map-repeat-strategy", "./set-repeat-strategy", "./number-repeat-strategy"], function(e, t, n, r, i, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.RepeatStrategyLocator = void 0;
        e.RepeatStrategyLocator = function() {
            function e() {
                this.matchers = [], this.strategies = [], this.addStrategy(function(e) {
                    return null === e || void 0 === e
                }, new t.NullRepeatStrategy), this.addStrategy(function(e) {
                    return e instanceof Array
                }, new n.ArrayRepeatStrategy), this.addStrategy(function(e) {
                    return e instanceof Map
                }, new r.MapRepeatStrategy), this.addStrategy(function(e) {
                    return e instanceof Set
                }, new i.SetRepeatStrategy), this.addStrategy(function(e) {
                    return "number" == typeof e
                }, new o.NumberRepeatStrategy)
            }
            return e.prototype.addStrategy = function(e, t) {
                this.matchers.push(e), this.strategies.push(t)
            }, e.prototype.getStrategy = function(e) {
                for (var t = this.matchers, n = 0, r = t.length; n < r; ++n)
                    if (t[n](e)) return this.strategies[n];
                return null
            }, e
        }()
    }), define("aurelia-templating-resources/null-repeat-strategy", ["exports"], function(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.NullRepeatStrategy = function() {
            function e() {}
            return e.prototype.instanceChanged = function(e, t) {
                e.removeAllViews(!0)
            }, e.prototype.getCollectionObserver = function(e, t) {}, e
        }()
    }), define("aurelia-templating-resources/array-repeat-strategy", ["exports", "./repeat-utilities", "aurelia-binding"], function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ArrayRepeatStrategy = void 0;
        e.ArrayRepeatStrategy = function() {
            function e() {}
            return e.prototype.getCollectionObserver = function(e, t) {
                return e.getArrayObserver(t)
            }, e.prototype.instanceChanged = function(e, n) {
                var r = this,
                    i = n.length;
                if (!n || 0 === i) return void e.removeAllViews(!0, !e.viewsRequireLifecycle);
                var o = e.views(),
                    s = o.length;
                if (0 === s) return void this._standardProcessInstanceChanged(e, n);
                e.viewsRequireLifecycle ? function() {
                    for (var a = o.slice(0), u = e.local, l = e.matcher(), c = [], h = [], d = 0; d < s; d++) {
                        var p = a[d],
                            f = p.bindingContext[u]; - 1 === (0, t.indexOf)(n, f, l) ? h.push(p) : c.push(f)
                    }
                    var v = void 0,
                        m = void 0;
                    c.length > 0 ? (m = e.removeViews(h, !0, !e.viewsRequireLifecycle), v = function() {
                        for (var s = 0; s < i; s++) {
                            var a = n[s],
                                u = (0, t.indexOf)(c, a, l, s),
                                h = void 0;
                            if (-1 === u) {
                                var d = (0, t.createFullOverrideContext)(e, n[s], s, i);
                                e.insertView(s, d.bindingContext, d), c.splice(s, 0, void 0)
                            } else u === s ? (h = o[u], c[u] = void 0) : (h = o[u], e.moveView(u, s), c.splice(u, 1), c.splice(s, 0, void 0));
                            h && (0, t.updateOverrideContext)(h.overrideContext, s, i)
                        }
                        r._inPlaceProcessItems(e, n)
                    }) : (m = e.removeAllViews(!0, !e.viewsRequireLifecycle), v = function() {
                        return r._standardProcessInstanceChanged(e, n)
                    }), m instanceof Promise ? m.then(v) : v()
                }() : this._inPlaceProcessItems(e, n)
            }, e.prototype._standardProcessInstanceChanged = function(e, n) {
                for (var r = 0, i = n.length; r < i; r++) {
                    var o = (0, t.createFullOverrideContext)(e, n[r], r, i);
                    e.addView(o.bindingContext, o)
                }
            }, e.prototype._inPlaceProcessItems = function(e, n) {
                for (var r = n.length, i = e.viewCount(); i > r;) i--, e.removeView(i, !0, !e.viewsRequireLifecycle);
                for (var o = e.local, s = 0; s < i; s++) {
                    var a = e.view(s),
                        u = s === r - 1,
                        l = 0 !== s && !u;
                    a.bindingContext[o] === n[s] && a.overrideContext.$middle === l && a.overrideContext.$last === u || (a.bindingContext[o] = n[s], a.overrideContext.$middle = l, a.overrideContext.$last = u, e.updateBindings(a))
                }
                for (var c = i; c < r; c++) {
                    var h = (0, t.createFullOverrideContext)(e, n[c], c, r);
                    e.addView(h.bindingContext, h)
                }
            }, e.prototype.instanceMutated = function(e, t, r) {
                var i = this;
                if (e.__queuedSplices) {
                    for (var o = 0, s = r.length; o < s; ++o) {
                        var a = r[o],
                            u = a.index,
                            l = a.removed,
                            c = a.addedCount;
                        (0, n.mergeSplice)(e.__queuedSplices, u, l, c)
                    }
                    return void(e.__array = t.slice(0))
                }
                var h = this._runSplices(e, t.slice(0), r);
                h instanceof Promise && function() {
                    var t = e.__queuedSplices = [],
                        n = function n() {
                            if (!t.length) return e.__queuedSplices = void 0, void(e.__array = void 0);
                            var r = i._runSplices(e, e.__array, t) || Promise.resolve();
                            t = e.__queuedSplices = [], r.then(n)
                        };
                    h.then(n)
                }()
            }, e.prototype._runSplices = function(e, n, r) {
                for (var i = this, o = 0, s = [], a = 0, u = r.length; a < u; ++a) {
                    for (var l = r[a], c = l.removed, h = 0, d = c.length; h < d; ++h) {
                        var p = e.removeView(l.index + o + s.length, !0);
                        p instanceof Promise && s.push(p)
                    }
                    o -= l.addedCount
                }
                if (s.length > 0) return Promise.all(s).then(function() {
                    var o = i._handleAddedSplices(e, n, r);
                    (0, t.updateOverrideContexts)(e.views(), o)
                });
                var f = this._handleAddedSplices(e, n, r);
                (0, t.updateOverrideContexts)(e.views(), f)
            }, e.prototype._handleAddedSplices = function(e, n, r) {
                for (var i = void 0, o = void 0, s = n.length, a = 0, u = r.length; a < u; ++a) {
                    var l = r[a],
                        c = i = l.index,
                        h = l.index + l.addedCount;
                    for ((void 0 === o || null === o || o > l.index) && (o = i); c < h; ++c) {
                        var d = (0, t.createFullOverrideContext)(e, n[c], c, s);
                        e.insertView(c, d.bindingContext, d)
                    }
                }
                return o
            }, e
        }()
    }), define("aurelia-templating-resources/repeat-utilities", ["exports", "aurelia-binding"], function(e, t) {
        "use strict";

        function n(e, t) {
            var n = e.length;
            for (t > 0 && (t -= 1); t < n; ++t) i(e[t].overrideContext, t, n)
        }

        function r(e, n, r, o, s) {
            var a = {},
                u = (0, t.createOverrideContext)(a, e.scope.overrideContext);
            return void 0 !== s ? (a[e.key] = s, a[e.value] = n) : a[e.local] = n, i(u, r, o), u
        }

        function i(e, t, n) {
            var r = 0 === t,
                i = t === n - 1,
                o = t % 2 == 0;
            e.$index = t, e.$first = r, e.$last = i, e.$middle = !(r || i), e.$odd = !o, e.$even = o
        }

        function o(e, t) {
            return e.behaviorInstructions.filter(function(e) {
                return e.originalAttrName === t
            })[0].attributes.items.sourceExpression
        }

        function s(e) {
            for (var n = !1; e instanceof t.BindingBehavior;) e = e.expression;
            for (; e instanceof t.ValueConverter;) e = e.expression, n = !0;
            return n ? e : null
        }

        function a(e) {
            for (; e instanceof t.BindingBehavior;) {
                if ("oneTime" === e.name) return !0;
                e = e.expression
            }
            return !1
        }

        function u(e) {
            e.call && e.mode === c ? e.call(t.sourceContext) : e.updateOneTimeBindings && e.updateOneTimeBindings()
        }

        function l(e, t, n, r) {
            if (!n) return e.indexOf(t);
            for (var i = e.length, o = r || 0; o < i; o++)
                if (n(e[o], t)) return o;
            return -1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.updateOverrideContexts = n, e.createFullOverrideContext = r, e.updateOverrideContext = i, e.getItemsSourceExpression = o, e.unwrapExpression = s, e.isOneTime = a, e.updateOneTimeBinding = u, e.indexOf = l;
        var c = t.bindingMode.oneTime
    }), define("aurelia-templating-resources/map-repeat-strategy", ["exports", "./repeat-utilities"], function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.MapRepeatStrategy = void 0;
        e.MapRepeatStrategy = function() {
            function e() {}
            return e.prototype.getCollectionObserver = function(e, t) {
                return e.getMapObserver(t)
            }, e.prototype.instanceChanged = function(e, t) {
                var n = this,
                    r = e.removeAllViews(!0, !e.viewsRequireLifecycle);
                if (r instanceof Promise) return void r.then(function() {
                    return n._standardProcessItems(e, t)
                });
                this._standardProcessItems(e, t)
            }, e.prototype._standardProcessItems = function(e, n) {
                var r = 0,
                    i = void 0;
                n.forEach(function(o, s) {
                    i = (0, t.createFullOverrideContext)(e, o, r, n.size, s), e.addView(i.bindingContext, i), ++r
                })
            }, e.prototype.instanceMutated = function(e, n, r) {
                var i = void 0,
                    o = void 0,
                    s = void 0,
                    a = void 0,
                    u = void 0,
                    l = void 0,
                    c = [],
                    h = void 0;
                for (o = 0, s = r.length; o < s; ++o) switch (l = r[o], i = l.key, l.type) {
                    case "update":
                        u = this._getViewIndexByKey(e, i), h = e.removeView(u, !0, !e.viewsRequireLifecycle), h instanceof Promise && c.push(h), a = (0, t.createFullOverrideContext)(e, n.get(i), u, n.size, i), e.insertView(u, a.bindingContext, a);
                        break;
                    case "add":
                        a = (0, t.createFullOverrideContext)(e, n.get(i), n.size - 1, n.size, i), e.insertView(n.size - 1, a.bindingContext, a);
                        break;
                    case "delete":
                        if (void 0 === l.oldValue) return;
                        u = this._getViewIndexByKey(e, i), h = e.removeView(u, !0, !e.viewsRequireLifecycle), h instanceof Promise && c.push(h);
                        break;
                    case "clear":
                        e.removeAllViews(!0, !e.viewsRequireLifecycle);
                        break;
                    default:
                        continue
                }
                c.length > 0 ? Promise.all(c).then(function() {
                    (0, t.updateOverrideContexts)(e.views(), 0)
                }) : (0, t.updateOverrideContexts)(e.views(), 0)
            }, e.prototype._getViewIndexByKey = function(e, t) {
                var n = void 0,
                    r = void 0,
                    i = void 0;
                for (n = 0, r = e.viewCount(); n < r; ++n)
                    if (i = e.view(n), i.bindingContext[e.key] === t) return n
            }, e
        }()
    }), define("aurelia-templating-resources/set-repeat-strategy", ["exports", "./repeat-utilities"], function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SetRepeatStrategy = void 0;
        e.SetRepeatStrategy = function() {
            function e() {}
            return e.prototype.getCollectionObserver = function(e, t) {
                    return e.getSetObserver(t)
                }, e.prototype.instanceChanged = function(e, t) {
                    var n = this,
                        r = e.removeAllViews(!0, !e.viewsRequireLifecycle);
                    if (r instanceof Promise) return void r.then(function() {
                        return n._standardProcessItems(e, t)
                    });
                    this._standardProcessItems(e, t)
                }, e.prototype._standardProcessItems = function(e, n) {
                    var r = 0,
                        i = void 0;
                    n.forEach(function(o) {
                        i = (0, t.createFullOverrideContext)(e, o, r, n.size), e.addView(i.bindingContext, i), ++r
                    })
                }, e.prototype.instanceMutated = function(e, n, r) {
                    var i = void 0,
                        o = void 0,
                        s = void 0,
                        a = void 0,
                        u = void 0,
                        l = void 0,
                        c = [],
                        h = void 0;
                    for (o = 0, s = r.length; o < s; ++o) switch (l = r[o], i = l.value, l.type) {
                        case "add":
                            a = (0, t.createFullOverrideContext)(e, i, n.size - 1, n.size), e.insertView(n.size - 1, a.bindingContext, a);
                            break;
                        case "delete":
                            u = this._getViewIndexByValue(e, i), h = e.removeView(u, !0, !e.viewsRequireLifecycle), h instanceof Promise && c.push(h);
                            break;
                        case "clear":
                            e.removeAllViews(!0, !e.viewsRequireLifecycle);
                            break;
                        default:
                            continue
                    }
                    c.length > 0 ? Promise.all(c).then(function() {
                        (0, t.updateOverrideContexts)(e.views(), 0)
                    }) : (0, t.updateOverrideContexts)(e.views(), 0)
                },
                e.prototype._getViewIndexByValue = function(e, t) {
                    var n = void 0,
                        r = void 0,
                        i = void 0;
                    for (n = 0, r = e.viewCount(); n < r; ++n)
                        if (i = e.view(n), i.bindingContext[e.local] === t) return n
                }, e
        }()
    }), define("aurelia-templating-resources/number-repeat-strategy", ["exports", "./repeat-utilities"], function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.NumberRepeatStrategy = void 0;
        e.NumberRepeatStrategy = function() {
            function e() {}
            return e.prototype.getCollectionObserver = function() {
                return null
            }, e.prototype.instanceChanged = function(e, t) {
                var n = this,
                    r = e.removeAllViews(!0, !e.viewsRequireLifecycle);
                if (r instanceof Promise) return void r.then(function() {
                    return n._standardProcessItems(e, t)
                });
                this._standardProcessItems(e, t)
            }, e.prototype._standardProcessItems = function(e, n) {
                var r = e.viewCount(),
                    i = void 0,
                    o = void 0,
                    s = void 0,
                    a = void 0;
                if (n = Math.floor(n), (a = r - n) > 0)
                    for (a > r && (a = r), i = 0, o = a; i < o; ++i) e.removeView(r - (i + 1), !0, !e.viewsRequireLifecycle);
                else {
                    for (i = r, o = n; i < o; ++i) s = (0, t.createFullOverrideContext)(e, i, i, o), e.addView(s.bindingContext, s);
                    (0, t.updateOverrideContexts)(e.views(), 0)
                }
            }, e
        }()
    }), define("aurelia-templating-resources/analyze-view-factory", ["exports"], function(e) {
        "use strict";

        function t(e) {
            var t = e.type,
                n = null !== t.elementName ? t.elementName : t.attributeName;
            return -1 === i.indexOf(n) && (t.handlesAttached || t.handlesBind || t.handlesCreated || t.handlesDetached || t.handlesUnbind) || t.viewFactory && r(t.viewFactory) || e.viewFactory && r(e.viewFactory)
        }

        function n(e) {
            var n = e.behaviorInstructions;
            if (n)
                for (var i = n.length; i--;)
                    if (t(n[i])) return !0;
            return e.viewFactory && r(e.viewFactory)
        }

        function r(e) {
            if ("_viewsRequireLifecycle" in e) return e._viewsRequireLifecycle;
            if (e._viewsRequireLifecycle = !1, e.viewFactory) return e._viewsRequireLifecycle = r(e.viewFactory), e._viewsRequireLifecycle;
            if (e.template.querySelector(".au-animate")) return e._viewsRequireLifecycle = !0, !0;
            for (var t in e.instructions)
                if (n(e.instructions[t])) return e._viewsRequireLifecycle = !0, !0;
            return e._viewsRequireLifecycle = !1, !1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.viewsRequireLifecycle = r;
        var i = e.lifecycleOptionalBehaviors = ["focus", "if", "repeat", "show", "with"]
    }), define("aurelia-templating-resources/abstract-repeater", ["exports"], function(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.AbstractRepeater = function() {
            function e(e) {
                Object.assign(this, {
                    local: "items",
                    viewsRequireLifecycle: !0
                }, e)
            }
            return e.prototype.viewCount = function() {
                throw new Error("subclass must implement `viewCount`")
            }, e.prototype.views = function() {
                throw new Error("subclass must implement `views`")
            }, e.prototype.view = function(e) {
                throw new Error("subclass must implement `view`")
            }, e.prototype.matcher = function() {
                throw new Error("subclass must implement `matcher`")
            }, e.prototype.addView = function(e, t) {
                throw new Error("subclass must implement `addView`")
            }, e.prototype.insertView = function(e, t, n) {
                throw new Error("subclass must implement `insertView`")
            }, e.prototype.moveView = function(e, t) {
                throw new Error("subclass must implement `moveView`")
            }, e.prototype.removeAllViews = function(e, t) {
                throw new Error("subclass must implement `removeAllViews`")
            }, e.prototype.removeViews = function(e, t, n) {
                throw new Error("subclass must implement `removeView`")
            }, e.prototype.removeView = function(e, t, n) {
                throw new Error("subclass must implement `removeView`")
            }, e.prototype.updateBindings = function(e) {
                throw new Error("subclass must implement `updateBindings`")
            }, e
        }()
    }), define("aurelia-templating-resources/show", ["exports", "aurelia-dependency-injection", "aurelia-templating", "aurelia-pal", "./aurelia-hide-style"], function(e, t, n, r, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Show = void 0;
        var o, s, a;
        e.Show = (o = (0, n.customAttribute)("show"), s = (0, t.inject)(r.DOM.Element, n.Animator, t.Optional.of(r.DOM.boundary, !0)), o(a = s(a = function() {
            function e(e, t, n) {
                this.element = e, this.animator = t, this.domBoundary = n
            }
            return e.prototype.created = function() {
                (0, i.injectAureliaHideStyleAtBoundary)(this.domBoundary)
            }, e.prototype.valueChanged = function(e) {
                e ? this.animator.removeClass(this.element, i.aureliaHideClassName) : this.animator.addClass(this.element, i.aureliaHideClassName)
            }, e.prototype.bind = function(e) {
                this.valueChanged(this.value)
            }, e
        }()) || a) || a)
    }), define("aurelia-templating-resources/aurelia-hide-style", ["exports", "aurelia-pal"], function(e, t) {
        "use strict";

        function n() {
            t.DOM.injectStyles(o)
        }

        function r(e) {
            t.FEATURE.shadowDOM && e && !e.hasAureliaHideStyle && (e.hasAureliaHideStyle = !0, t.DOM.injectStyles(o, e))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.aureliaHideClassName = void 0, e.injectAureliaHideStyleAtHead = n, e.injectAureliaHideStyleAtBoundary = r;
        var i = e.aureliaHideClassName = "aurelia-hide",
            o = "." + i + " { display:none !important; }"
    }), define("aurelia-templating-resources/hide", ["exports", "aurelia-dependency-injection", "aurelia-templating", "aurelia-pal", "./aurelia-hide-style"], function(e, t, n, r, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Hide = void 0;
        var o, s, a;
        e.Hide = (o = (0, n.customAttribute)("hide"), s = (0, t.inject)(r.DOM.Element, n.Animator, t.Optional.of(r.DOM.boundary, !0)), o(a = s(a = function() {
            function e(e, t, n) {
                this.element = e, this.animator = t, this.domBoundary = n
            }
            return e.prototype.created = function() {
                (0, i.injectAureliaHideStyleAtBoundary)(this.domBoundary)
            }, e.prototype.valueChanged = function(e) {
                e ? this.animator.addClass(this.element, i.aureliaHideClassName) : this.animator.removeClass(this.element, i.aureliaHideClassName)
            }, e.prototype.bind = function(e) {
                this.valueChanged(this.value)
            }, e
        }()) || a) || a)
    }), define("aurelia-templating-resources/sanitize-html", ["exports", "aurelia-binding", "aurelia-dependency-injection", "./html-sanitizer"], function(e, t, n, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SanitizeHTMLValueConverter = void 0;
        var i, o, s;
        e.SanitizeHTMLValueConverter = (i = (0, t.valueConverter)("sanitizeHTML"), o = (0, n.inject)(r.HTMLSanitizer), i(s = o(s = function() {
            function e(e) {
                this.sanitizer = e
            }
            return e.prototype.toView = function(e) {
                return null === e || void 0 === e ? null : this.sanitizer.sanitize(e)
            }, e
        }()) || s) || s)
    }), define("aurelia-templating-resources/html-sanitizer", ["exports"], function(e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        e.HTMLSanitizer = function() {
            function e() {}
            return e.prototype.sanitize = function(e) {
                return e.replace(t, "")
            }, e
        }()
    }), define("aurelia-templating-resources/replaceable", ["exports", "aurelia-dependency-injection", "aurelia-templating"], function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Replaceable = void 0;
        var r, i, o;
        e.Replaceable = (r = (0, n.customAttribute)("replaceable"), i = (0, t.inject)(n.BoundViewFactory, n.ViewSlot), r(o = (0, n.templateController)(o = i(o = function() {
            function e(e, t) {
                this.viewFactory = e, this.viewSlot = t, this.view = null
            }
            return e.prototype.bind = function(e, t) {
                null === this.view && (this.view = this.viewFactory.create(), this.viewSlot.add(this.view)), this.view.bind(e, t)
            }, e.prototype.unbind = function() {
                this.view.unbind()
            }, e
        }()) || o) || o) || o)
    }), define("aurelia-templating-resources/focus", ["exports", "aurelia-templating", "aurelia-binding", "aurelia-dependency-injection", "aurelia-task-queue", "aurelia-pal"], function(e, t, n, r, i, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Focus = void 0;
        var s, a, u;
        e.Focus = (s = (0, t.customAttribute)("focus", n.bindingMode.twoWay), a = (0, r.inject)(o.DOM.Element, i.TaskQueue), s(u = a(u = function() {
            function e(e, t) {
                var n = this;
                this.element = e, this.taskQueue = t, this.isAttached = !1, this.needsApply = !1, this.focusListener = function(e) {
                    n.value = !0
                }, this.blurListener = function(e) {
                    o.DOM.activeElement !== n.element && (n.value = !1)
                }
            }
            return e.prototype.valueChanged = function(e) {
                this.isAttached ? this._apply() : this.needsApply = !0
            }, e.prototype._apply = function() {
                var e = this;
                this.value ? this.taskQueue.queueMicroTask(function() {
                    e.value && e.element.focus()
                }) : this.element.blur()
            }, e.prototype.attached = function() {
                this.isAttached = !0, this.needsApply && (this.needsApply = !1, this._apply()), this.element.addEventListener("focus", this.focusListener), this.element.addEventListener("blur", this.blurListener)
            }, e.prototype.detached = function() {
                this.isAttached = !1, this.element.removeEventListener("focus", this.focusListener), this.element.removeEventListener("blur", this.blurListener)
            }, e
        }()) || u) || u)
    }), define("aurelia-templating-resources/css-resource", ["exports", "aurelia-templating", "aurelia-loader", "aurelia-dependency-injection", "aurelia-path", "aurelia-pal"], function(e, t, n, r, i, o) {
        "use strict";

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function u(e, t) {
            if ("string" != typeof t) throw new Error("Failed loading required CSS file: " + e);
            return t.replace(c, function(t, n) {
                var r = n.charAt(0);
                return "'" !== r && '"' !== r || (n = n.substr(1, n.length - 2)), "url('" + (0, i.relativeToFile)(n, e) + "')"
            })
        }

        function l(e) {
            var n;
            return (0, t.resource)(new h(e))(n = function(e) {
                function t() {
                    return s(this, e.apply(this, arguments))
                }
                return a(t, e), t
            }(d)) || n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e._createCSSResource = l;
        var c = /url\((?!['"]data)([^)]+)\)/gi,
            h = function() {
                function e(e) {
                    this.address = e, this._scoped = null, this._global = !1, this._alreadyGloballyInjected = !1
                }
                return e.prototype.initialize = function(e, t) {
                    this._scoped = new t(this)
                }, e.prototype.register = function(e, t) {
                    "scoped" === t ? e.registerViewEngineHooks(this._scoped) : this._global = !0
                }, e.prototype.load = function(e) {
                    var t = this;
                    return e.get(n.Loader).loadText(this.address).catch(function(e) {
                        return null
                    }).then(function(e) {
                        e = u(t.address, e), t._scoped.css = e, t._global && (t._alreadyGloballyInjected = !0, o.DOM.injectStyles(e))
                    })
                }, e
            }(),
            d = function() {
                function e(e) {
                    this.owner = e, this.css = null
                }
                return e.prototype.beforeCompile = function(e, t, n) {
                    if (n.targetShadowDOM) o.DOM.injectStyles(this.css, e, !0);
                    else if (o.FEATURE.scopedCSS) {
                        var r = o.DOM.injectStyles(this.css, e, !0);
                        r.setAttribute("scoped", "scoped")
                    } else this.owner._alreadyGloballyInjected || (o.DOM.injectStyles(this.css), this.owner._alreadyGloballyInjected = !0)
                }, e
            }()
    }), define("aurelia-templating-resources/attr-binding-behavior", ["exports", "aurelia-binding"], function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.AttrBindingBehavior = void 0;
        e.AttrBindingBehavior = function() {
            function e() {}
            return e.prototype.bind = function(e, n) {
                e.targetObserver = new t.DataAttributeObserver(e.target, e.targetProperty)
            }, e.prototype.unbind = function(e, t) {}, e
        }()
    }), define("aurelia-templating-resources/binding-mode-behaviors", ["exports", "aurelia-binding", "aurelia-metadata"], function(e, t, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.TwoWayBindingBehavior = e.OneWayBindingBehavior = e.OneTimeBindingBehavior = void 0;
        var r, i, o, s = {
            bind: function(e, t, n) {
                e.originalMode = e.mode, e.mode = this.mode
            },
            unbind: function(e, t) {
                e.mode = e.originalMode, e.originalMode = null
            }
        };
        e.OneTimeBindingBehavior = (0, n.mixin)(s)(r = function() {
            this.mode = t.bindingMode.oneTime
        }) || r, e.OneWayBindingBehavior = (0, n.mixin)(s)(i = function() {
            this.mode = t.bindingMode.oneWay
        }) || i, e.TwoWayBindingBehavior = (0, n.mixin)(s)(o = function() {
            this.mode = t.bindingMode.twoWay
        }) || o
    }), define("aurelia-templating-resources/throttle-binding-behavior", ["exports", "aurelia-binding"], function(e, t) {
        "use strict";

        function n(e) {
            var t = this,
                n = this.throttleState,
                r = +new Date - n.last;
            if (r >= n.delay) return clearTimeout(n.timeoutId), n.timeoutId = null, n.last = +new Date, void this.throttledMethod(e);
            n.newValue = e, null === n.timeoutId && (n.timeoutId = setTimeout(function() {
                n.timeoutId = null, n.last = +new Date, t.throttledMethod(n.newValue)
            }, n.delay - r))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ThrottleBindingBehavior = void 0;
        e.ThrottleBindingBehavior = function() {
            function e() {}
            return e.prototype.bind = function(e, r) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
                    o = "updateTarget";
                e.callSource ? o = "callSource" : e.updateSource && e.mode === t.bindingMode.twoWay && (o = "updateSource"), e.throttledMethod = e[o], e.throttledMethod.originalName = o, e[o] = n, e.throttleState = {
                    delay: i,
                    last: 0,
                    timeoutId: null
                }
            }, e.prototype.unbind = function(e, t) {
                e[e.throttledMethod.originalName] = e.throttledMethod, e.throttledMethod = null, clearTimeout(e.throttleState.timeoutId), e.throttleState = null
            }, e
        }()
    }), define("aurelia-templating-resources/debounce-binding-behavior", ["exports", "aurelia-binding"], function(e, t) {
        "use strict";

        function n(e) {
            var t = this,
                n = this.debounceState;
            if (n.immediate) return n.immediate = !1, void this.debouncedMethod(e);
            clearTimeout(n.timeoutId), n.timeoutId = setTimeout(function() {
                return t.debouncedMethod(e)
            }, n.delay)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.DebounceBindingBehavior = void 0;
        e.DebounceBindingBehavior = function() {
            function e() {}
            return e.prototype.bind = function(e, r) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
                    o = "updateTarget";
                e.callSource ? o = "callSource" : e.updateSource && e.mode === t.bindingMode.twoWay && (o = "updateSource"), e.debouncedMethod = e[o], e.debouncedMethod.originalName = o, e[o] = n, e.debounceState = {
                    delay: i,
                    timeoutId: null,
                    immediate: "updateTarget" === o
                }
            }, e.prototype.unbind = function(e, t) {
                e[e.debouncedMethod.originalName] = e.debouncedMethod, e.debouncedMethod = null, clearTimeout(e.debounceState.timeoutId), e.debounceState = null
            }, e
        }()
    }), define("aurelia-templating-resources/self-binding-behavior", ["exports"], function(e) {
        "use strict";

        function t(e) {
            return e.path && e.path[0] || e.deepPath && e.deepPath[0] || e.target
        }

        function n(e) {
            var n = t(e);
            this.target === n && this.selfEventCallSource(e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.SelfBindingBehavior = function() {
            function e() {}
            return e.prototype.bind = function(e, t) {
                if (!e.callSource || !e.targetEvent) throw new Error("Self binding behavior only supports event.");
                e.selfEventCallSource = e.callSource, e.callSource = n
            }, e.prototype.unbind = function(e, t) {
                e.callSource = e.selfEventCallSource, e.selfEventCallSource = null
            }, e
        }()
    }), define("aurelia-templating-resources/signal-binding-behavior", ["exports", "./binding-signaler"], function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SignalBindingBehavior = void 0;
        e.SignalBindingBehavior = function() {
            function e(e) {
                this.signals = e.signals
            }
            return e.inject = function() {
                return [t.BindingSignaler]
            }, e.prototype.bind = function(e, t) {
                if (!e.updateTarget) throw new Error("Only property bindings and string interpolation bindings can be signaled.  Trigger, delegate and call bindings cannot be signaled.");
                if (3 === arguments.length) {
                    var n = arguments[2];
                    (this.signals[n] || (this.signals[n] = [])).push(e), e.signalName = n
                } else {
                    if (!(arguments.length > 3)) throw new Error("Signal name is required.");
                    for (var r = Array.prototype.slice.call(arguments, 2), i = r.length; i--;) {
                        var o = r[i];
                        (this.signals[o] || (this.signals[o] = [])).push(e)
                    }
                    e.signalName = r
                }
            }, e.prototype.unbind = function(e, t) {
                var n = e.signalName;
                if (e.signalName = null, Array.isArray(n))
                    for (var r = n, i = r.length; i--;) {
                        var o = r[i],
                            s = this.signals[o];
                        s.splice(s.indexOf(e), 1)
                    } else {
                        var a = this.signals[n];
                        a.splice(a.indexOf(e), 1)
                    }
            }, e
        }()
    }), define("aurelia-templating-resources/binding-signaler", ["exports", "aurelia-binding"], function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.BindingSignaler = void 0;
        e.BindingSignaler = function() {
            function e() {
                this.signals = {}
            }
            return e.prototype.signal = function(e) {
                var n = this.signals[e];
                if (n)
                    for (var r = n.length; r--;) n[r].call(t.sourceContext)
            }, e
        }()
    }), define("aurelia-templating-resources/update-trigger-binding-behavior", ["exports", "aurelia-binding"], function(e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.UpdateTriggerBindingBehavior = void 0;
        var n, r, i = "The updateTrigger binding behavior can only be applied to two-way bindings on input/select elements.";
        e.UpdateTriggerBindingBehavior = (r = n = function() {
            function e(e) {
                this.eventManager = e
            }
            return e.prototype.bind = function(e, n) {
                for (var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) o[s - 2] = arguments[s];
                if (0 === o.length) throw new Error("The updateTrigger binding behavior requires at least one event name argument: eg <input value.bind=\"firstName & updateTrigger:'blur'\">");
                if (e.mode !== t.bindingMode.twoWay) throw new Error(i);
                var a = e.observerLocator.getObserver(e.target, e.targetProperty);
                if (!a.handler) throw new Error(i);
                e.targetObserver = a, a.originalHandler = e.targetObserver.handler;
                var u = this.eventManager.createElementHandler(o);
                a.handler = u
            }, e.prototype.unbind = function(e, t) {
                e.targetObserver.handler = e.targetObserver.originalHandler, e.targetObserver.originalHandler = null
            }, e
        }(), n.inject = [t.EventManager], r)
    }), define("aurelia-templating-resources/html-resource-plugin", ["exports", "aurelia-templating", "./dynamic-element"], function(e, t, n) {
        "use strict";

        function r(e) {
            return /([^\/^\?]+)\.html/i.exec(e)[1].toLowerCase()
        }

        function i(e) {
            var i = e.container.get(t.ViewEngine),
                o = e.aurelia.loader;
            i.addResourcePlugin(".html", {
                fetch: function(e) {
                    return o.loadTemplate(e).then(function(t) {
                        var i, o = t.template.getAttribute("bindable"),
                            s = r(e);
                        return o ? (o = o.split(",").map(function(e) {
                            return e.trim()
                        }), t.template.removeAttribute("bindable")) : o = [], i = {}, i[s] = (0, n._createDynamicElement)(s, e, o), i
                    })
                }
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getElementName = r, e.configure = i
    }), define("aurelia-templating-resources/dynamic-element", ["exports", "aurelia-templating"], function(e, t) {
        "use strict";

        function n(e, n, r) {
            for (var i, o, s, a = (i = (0, t.customElement)(e), o = (0, t.useView)(n), i(s = o(s = function() {
                    function e() {}
                    return e.prototype.bind = function(e) {
                        this.$parent = e
                    }, e
                }()) || s) || s), u = 0, l = r.length; u < l; ++u)(0, t.bindable)(r[u])(a);
            return a
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e._createDynamicElement = n
    }), define("aurelia-templating-router/aurelia-templating-router", ["exports", "aurelia-pal", "aurelia-router", "./route-loader", "./router-view", "./route-href"], function(e, t, n, r, i, o) {
        "use strict";

        function s(e) {
            e.singleton(n.RouteLoader, r.TemplatingRouteLoader).singleton(n.Router, n.AppRouter).globalResources(t.PLATFORM.moduleName("./router-view"), t.PLATFORM.moduleName("./route-href")), e.container.registerAlias(n.Router, n.AppRouter)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.configure = e.RouteHref = e.RouterView = e.TemplatingRouteLoader = void 0, e.TemplatingRouteLoader = r.TemplatingRouteLoader, e.RouterView = i.RouterView, e.RouteHref = o.RouteHref, e.configure = s
    }), define("aurelia-templating-router", ["aurelia-templating-router/aurelia-templating-router"], function(e) {
        return e
    }), define("aurelia-templating-router/route-loader", ["exports", "aurelia-dependency-injection", "aurelia-templating", "aurelia-router", "aurelia-path", "aurelia-metadata", "./router-view"], function(e, t, n, r, i, o, s) {
        "use strict";

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function l(e) {
            var t, r, i, o = /([^\/^\?]+)\.html/i.exec(e)[1];
            return t = (0, n.customElement)(o), r = (0, n.useView)(e), t(i = r(i = function() {
                function e() {}
                return e.prototype.bind = function(e) {
                    this.$parent = e
                }, e
            }()) || i) || i
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.TemplatingRouteLoader = void 0;
        var c, h;
        e.TemplatingRouteLoader = (c = (0, t.inject)(n.CompositionEngine))(h = function(e) {
            function t(t) {
                var n = a(this, e.call(this));
                return n.compositionEngine = t, n
            }
            return u(t, e), t.prototype.loadRoute = function(e, t) {
                var n = e.container.createChild(),
                    a = /\.html/.test(t.moduleId) ? l(t.moduleId) : (0, i.relativeToFile)(t.moduleId, o.Origin.get(e.container.viewModel.constructor).moduleId),
                    u = {
                        viewModel: a,
                        childContainer: n,
                        view: t.view || t.viewStrategy,
                        router: e
                    };
                return n.registerSingleton(s.RouterViewLocator), n.getChildRouter = function() {
                    var t = void 0;
                    return n.registerHandler(r.Router, function(r) {
                        return t || (t = e.createChild(n))
                    }), n.get(r.Router)
                }, this.compositionEngine.ensureViewModel(u)
            }, t
        }(r.RouteLoader)) || h
    }), define("aurelia-templating-router/router-view", ["exports", "aurelia-dependency-injection", "aurelia-binding", "aurelia-templating", "aurelia-router", "aurelia-metadata", "aurelia-pal"], function(e, t, n, r, i, o, s) {
        "use strict";

        function a(e, t, n, r) {
            n && Object.defineProperty(e, t, {
                enumerable: n.enumerable,
                configurable: n.configurable,
                writable: n.writable,
                value: n.initializer ? n.initializer.call(r) : void 0
            })
        }

        function u(e, t, n, r, i) {
            var o = {};
            return Object.keys(r).forEach(function(e) {
                o[e] = r[e]
            }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function(n, r) {
                return r(e, t, n) || n
            }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.RouterViewLocator = e.RouterView = void 0;
        var l, c, h, d, p, f, v, m, g = (e.RouterView = (l = (0, r.customElement)("router-view"), c = (0, t.inject)(s.DOM.Element, t.Container, r.ViewSlot, i.Router, r.ViewLocator, r.CompositionTransaction, r.CompositionEngine), l(h = (0, r.noView)(h = c((d = function() {
            function e(e, t, n, r, i, o, s) {
                a(this, "swapOrder", p, this), a(this, "layoutView", f, this), a(this, "layoutViewModel", v, this), a(this, "layoutModel", m, this), this.element = e, this.container = t, this.viewSlot = n, this.router = r, this.viewLocator = i, this.compositionTransaction = o, this.compositionEngine = s, this.router.registerViewPort(this, this.element.getAttribute("name")), "initialComposition" in o || (o.initialComposition = !0, this.compositionTransactionNotifier = o.enlist())
            }
            return e.prototype.created = function(e) {
                this.owningView = e
            }, e.prototype.bind = function(e, t) {
                this.container.viewModel = e, this.overrideContext = t
            }, e.prototype.process = function(e, t) {
                var n = this,
                    i = e.component,
                    s = i.childContainer,
                    a = i.viewModel,
                    u = i.viewModelResource,
                    l = u.metadata,
                    c = i.router.currentInstruction.config,
                    h = c.viewPorts ? c.viewPorts[e.name] : {};
                s.get(g)._notify(this);
                var d = {
                        viewModel: h.layoutViewModel || c.layoutViewModel || this.layoutViewModel,
                        view: h.layoutView || c.layoutView || this.layoutView,
                        model: h.layoutModel || c.layoutModel || this.layoutModel,
                        router: e.component.router,
                        childContainer: s,
                        viewSlot: this.viewSlot
                    },
                    p = this.viewLocator.getViewStrategy(i.view || a);
                return p && i.view && p.makeRelativeTo(o.Origin.get(i.router.container.viewModel.constructor).moduleId), l.load(s, u.value, null, p, !0).then(function(i) {
                    n.compositionTransactionNotifier || (n.compositionTransactionOwnershipToken = n.compositionTransaction.tryCapture()), (d.viewModel || d.view) && (e.layoutInstruction = d), e.controller = l.create(s, r.BehaviorInstruction.dynamic(n.element, a, i)), t || n.swap(e)
                })
            }, e.prototype.swap = function(e) {
                var t = this,
                    i = e.layoutInstruction,
                    o = this.view,
                    s = function() {
                        var e = r.SwapStrategies[t.swapOrder] || r.SwapStrategies.after,
                            n = t.viewSlot;
                        e(n, o, function() {
                            return Promise.resolve(n.add(t.view))
                        }).then(function() {
                            t._notify()
                        })
                    },
                    a = function(n) {
                        return e.controller.automate(t.overrideContext, n), t.compositionTransactionOwnershipToken ? t.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function() {
                            return t.compositionTransactionOwnershipToken = null, s()
                        }) : s()
                    };
                return i ? (i.viewModel || (i.viewModel = {}), this.compositionEngine.createController(i).then(function(o) {
                    return r.ShadowDOM.distributeView(e.controller.view, o.slots || o.view.slots), o.automate((0, n.createOverrideContext)(i.viewModel), t.owningView), o.view.children.push(e.controller.view), o.view || o
                }).then(function(e) {
                    return t.view = e, a(e)
                })) : (this.view = e.controller.view, a(this.owningView))
            }, e.prototype._notify = function() {
                this.compositionTransactionNotifier && (this.compositionTransactionNotifier.done(), this.compositionTransactionNotifier = null)
            }, e
        }(), p = u(d.prototype, "swapOrder", [r.bindable], {
            enumerable: !0,
            initializer: null
        }), f = u(d.prototype, "layoutView", [r.bindable], {
            enumerable: !0,
            initializer: null
        }), v = u(d.prototype, "layoutViewModel", [r.bindable], {
            enumerable: !0,
            initializer: null
        }), m = u(d.prototype, "layoutModel", [r.bindable], {
            enumerable: !0,
            initializer: null
        }), h = d)) || h) || h) || h), e.RouterViewLocator = function() {
            function e() {
                var e = this;
                this.promise = new Promise(function(t) {
                    return e.resolve = t
                })
            }
            return e.prototype.findNearest = function() {
                return this.promise
            }, e.prototype._notify = function(e) {
                this.resolve(e)
            }, e
        }())
    }), define("aurelia-templating-router/route-href", ["exports", "aurelia-templating", "aurelia-dependency-injection", "aurelia-router", "aurelia-pal", "aurelia-logging"], function(e, t, n, r, i, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.RouteHref = void 0;
        var s, a, u, l, c, h, d = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(o),
            p = d.getLogger("route-href");
        e.RouteHref = (s = (0, t.customAttribute)("route-href"), a = (0, t.bindable)({
            name: "route",
            changeHandler: "processChange"
        }), u = (0, t.bindable)({
            name: "params",
            changeHandler: "processChange"
        }), l = (0, t.bindable)({
            name: "attribute",
            defaultValue: "href"
        }), c = (0, n.inject)(r.Router, i.DOM.Element), s(h = a(h = u(h = l(h = c(h = function() {
            function e(e, t) {
                this.router = e, this.element = t
            }
            return e.prototype.bind = function() {
                this.isActive = !0, this.processChange()
            }, e.prototype.unbind = function() {
                this.isActive = !1
            }, e.prototype.attributeChanged = function(e, t) {
                t && this.element.removeAttribute(t), this.processChange()
            }, e.prototype.processChange = function() {
                var e = this;
                return this.router.ensureConfigured().then(function() {
                    if (!e.isActive) return null;
                    var t = e.router.generate(e.route, e.params);
                    return e.element.au.controller ? e.element.au.controller.viewModel[e.attribute] = t : e.element.setAttribute(e.attribute, t), null
                }).catch(function(e) {
                    p.error(e)
                })
            }, e
        }()) || h) || h) || h) || h) || h)
    }), define("aurelia-dialog/aurelia-dialog", ["exports", "./ai-dialog", "./ai-dialog-header", "./ai-dialog-body", "./ai-dialog-footer", "./attach-focus", "./dialog-configuration", "./dialog-service", "./dialog-controller", "./dialog-result"], function(e, t, n, r, i, o, s, a, u, l) {
        "use strict";

        function c(e, t) {
            var n = new s.DialogConfiguration(e);
            "function" == typeof t ? t(n) : n.useDefaults(), n._apply()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.DialogResult = e.DialogController = e.DialogService = e.DialogConfiguration = e.AttachFocus = e.AiDialogFooter = e.AiDialogBody = e.AiDialogHeader = e.AiDialog = void 0, Object.defineProperty(e, "AiDialog", {
            enumerable: !0,
            get: function() {
                return t.AiDialog
            }
        }), Object.defineProperty(e, "AiDialogHeader", {
            enumerable: !0,
            get: function() {
                return n.AiDialogHeader
            }
        }), Object.defineProperty(e, "AiDialogBody", {
            enumerable: !0,
            get: function() {
                return r.AiDialogBody
            }
        }), Object.defineProperty(e, "AiDialogFooter", {
            enumerable: !0,
            get: function() {
                return i.AiDialogFooter
            }
        }), Object.defineProperty(e, "AttachFocus", {
            enumerable: !0,
            get: function() {
                return o.AttachFocus
            }
        }), e.configure = c, Object.defineProperty(e, "DialogConfiguration", {
            enumerable: !0,
            get: function() {
                return s.DialogConfiguration
            }
        }), Object.defineProperty(e, "DialogService", {
            enumerable: !0,
            get: function() {
                return a.DialogService
            }
        }), Object.defineProperty(e, "DialogController", {
            enumerable: !0,
            get: function() {
                return u.DialogController
            }
        }), Object.defineProperty(e, "DialogResult", {
            enumerable: !0,
            get: function() {
                return l.DialogResult
            }
        })
    }), define("aurelia-dialog", ["aurelia-dialog/aurelia-dialog"], function(e) {
        return e
    });