define("environment", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = {
        debug: !1,
        testing: !1,
        discordInviteUrl: "https://discord.gg/3ywkYQB",
        apiUrl: "https://api.vantagemods.com",
        gaTrackingId: "UA-100219353-1"
    }
}), define("api", ["require", "exports", "tslib", "aurelia-fetch-client", "aurelia-event-aggregator", "./environment", "url"], function(e, t, i, r, n, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e() {
            this.ea = new n.EventAggregator, this.http = (new r.HttpClient).configure(function(e) {
                e.baseUrl = o.default.apiUrl, e.rejectErrorResponses()
            })
        }
        return e.prototype.setAuthToken = function(e) {
            this.token = "Theory " + e
        }, e.prototype.clearAuthToken = function() {
            this.token = null
        }, e.prototype.onAuthTokenUpdated = function(e) {
            return this.ea.subscribe("token", e)
        }, e.prototype.onUnauthorized = function(e) {
            return this.ea.subscribe("unauthorized", e)
        }, e.prototype.getProxiedAuthUrl = function(e) {
            var t = a.parse(e),
                i = t.query ? "&" + t.query : "";
            return o.default.apiUrl + "/auth/proxy?path=" + encodeURIComponent(t.pathname) + i
        }, e.prototype.fetch = function(e, t) {
            return void 0 === t && (t = {}), i.__awaiter(this, void 0, void 0, function() {
                var r, n, o, a, s, l;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            this.token && (t.headers ? t.headers.Authorization = this.token : t.headers = {
                                Authorization: this.token
                            }), i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]), [4, this.http.fetch(e, t)];
                        case 2:
                            return r = i.sent(), [3, 4];
                        case 3:
                            throw n = i.sent(), 401 !== n.status && 403 !== n.status || this.ea.publish("unauthorized"), n;
                        case 4:
                            return o = r.headers.get("X-Token"), o && (this.setAuthToken(o), this.ea.publish("token", o)), a = r.headers.get("Content-Type"), a && a.includes("application/json") ? [4, r.json()] : [3, 6];
                        case 5:
                            return [2, i.sent()];
                        case 6:
                            return l = (s = Buffer).from, [4, r.arrayBuffer()];
                        case 7:
                            return [2, l.apply(s, [i.sent()])]
                    }
                })
            })
        }, e.prototype.get = function(e) {
            return this.fetch(e, {
                method: "GET"
            })
        }, e.prototype.delete = function(e) {
            return this.fetch(e, {
                method: "DELETE"
            })
        }, e.prototype.post = function(e, t) {
            return this.fetchWithBody("POST", e, t)
        }, e.prototype.put = function(e, t) {
            return this.fetchWithBody("PUT", e, t)
        }, e.prototype.patch = function(e, t) {
            return this.fetchWithBody("PATCH", e, t)
        }, e.prototype.fetchWithBody = function(e, t, i) {
            var r = {
                method: e,
                body: i
            };
            return i instanceof Buffer ? (r.body = i.buffer, r.headers = {
                "Content-Type": "application/octet-stream"
            }) : (r.body = JSON.stringify(i), r.headers = {
                "Content-Type": "application/json"
            }), this.fetch(t, r)
        }, e
    }();
    t.Api = s
}), define("main", ["require", "exports", "tslib", "aurelia-logging-console", "aurelia-logging", "./api", "electron", "./environment", "aurelia-logging", "aurelia-binding"], function(e, t, i, r, n, o, a, s, l, c) {
    "use strict";

    function u(e) {
        return i.__awaiter(this, void 0, void 0, function() {
            return i.__generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return console.info("Vantage v" + a.remote.app.getVersion()), e.use.standardConfiguration().feature("resources").feature("editor").plugin("aurelia-dialog", function(e) {
                            e.useDefaults(), e.settings.lock = !1, e.settings.enableEscClose = !0
                        }), e.use.preTask(function() {
                            if (l.addAppender(new r.ConsoleAppender), s.default.debug) l.setLevel(l.logLevel.debug), p();
                            else if (!d()) return Promise.reject(new Error);
                            return Promise.resolve()
                        }), s.default.debug && e.use.postTask(function() {
                            return window.test = function() {
                                return e.container.get(o.Api).get("/test").then(function(e) {
                                    return console.info(e), e
                                })
                            }, Promise.resolve()
                        }), s.default.testing && e.use.plugin("aurelia-testing"), [4, e.start()];
                    case 1:
                        return t.sent(), e.setRoot("./app/app"), [2]
                }
            })
        })
    }

    function d() {
        var e = function() {};
        if (console.debug = e, l.addAppender = e, console.debug !== e || l.addAppender !== e) return !1;
        var t = {
            configurable: !1,
            writable: !1
        };
        return Object.defineProperty(l, "addAppender", t), Object.defineProperty(console, "debug", t), Object.defineProperty(window, "console", t), setInterval(function() {
            a.remote.getCurrentWindow().webContents.closeDevTools(), console.clear()
        }, 250), !0
    }

    function p() {
        var e = n.getLogger("dirty-check"),
            t = c.DirtyCheckProperty;
        t.prototype.standardSubscribe = t.prototype.subscribe, t.prototype.subscribe = function(t, i) {
            this.standardSubscribe(t, i), e.warn("'" + this.obj.constructor.name + "." + this.propertyName + "' is being dirty checked.", this.obj)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Promise.config({
        longStackTraces: s.default.debug,
        warnings: {
            wForgottenReturn: !1
        }
    }), t.configure = u
}), define("utility/electron", ["require", "exports", "electron"], function(e, t, i) {
    "use strict";

    function r(e) {
        s = e
    }

    function n() {
        return a(i.remote.process.argv)
    }

    function o(e, t) {
        i.remote.getCurrentWindow().isMinimized() && i.remote.getCurrentWindow().restore(), i.remote.getCurrentWindow().focus();
        var r = a(t);
        r && s && s(r)
    }

    function a(e) {
        return e.length <= 1 || -1 === e[1].indexOf("://") ? null : e[1].trim()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i.ipcRenderer.removeAllListeners("argv"), i.ipcRenderer.addListener("argv", o);
    var s;
    t.registerUriHandler = r, t.getLaunchUri = n
}), define("utility/disposable", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("utility/async", ["require", "exports"], function(e, t) {
    "use strict";

    function i(e) {
        return Promise.promisifyAll(e)
    }

    function r(e) {
        return Promise.promisify(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.promisifyAll = i, t.promisify = r;
    var n = function() {
        function e(e) {
            var t = this;
            this.resolvers = [], this.rejectors = [], this.resolved = !1, this.rejected = !1, e.then(function(e) {
                if (t.resolved = !0, t.result = e, t.resolvers) {
                    for (var i = 0, r = t.resolvers; i < r.length; i++) {
                        var n = r[i];
                        try {
                            n(e)
                        } catch (e) {
                            console.warn("Uncaught exception thrown in MultiPromise fulfillment handler.", e)
                        }
                    }
                    t.dispose()
                }
            }).catch(function(e) {
                if (t.rejected = !0, t.result = e, t.rejectors) {
                    for (var i = 0, r = t.rejectors; i < r.length; i++) {
                        var n = r[i];
                        try {
                            n(e)
                        } catch (e) {
                            console.warn("Uncaught exception thrown in MultiPromise rejection handler.", e)
                        }
                    }
                    t.dispose()
                }
            })
        }
        return e.wrap = function(t) {
            return new e(t)
        }, e.prototype.await = function() {
            var e = this;
            return this.resolved ? Promise.resolve(this.result) : this.rejected ? Promise.reject(this.result) : new Promise(function(t, i) {
                e.resolvers && e.rejectors && (e.resolvers.push(t), e.rejectors.push(i))
            })
        }, e.prototype.dispose = function() {
            this.resolvers = null, this.rejectors = null
        }, e
    }();
    t.MultiPromise = n
}), define("utility/fs", ["require", "exports", "tslib", "./async", "electron", "fs", "https", "url", "path"], function(e, t, i, r, n, o, a, s, l) {
    "use strict";

    function c(e, t) {
        return i.__awaiter(this, void 0, void 0, function() {
            var r, n, o, a = this;
            return i.__generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return r = [], o = (n = Promise).all, [4, _.readdirAsync(e)];
                    case 1:
                        return [4, o.apply(n, [s.sent().map(function(n) {
                            return i.__awaiter(a, void 0, void 0, function() {
                                return i.__generator(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, _.statAsync(e + "/" + n)];
                                        case 1:
                                            return i.sent()["is" + t]() && r.push(n), [2]
                                    }
                                })
                            })
                        })])];
                    case 2:
                        return s.sent(), [2, r]
                }
            })
        })
    }

    function u(e) {
        return c(e, "File")
    }

    function d(e) {
        return c(e, "Directory")
    }

    function p(e) {
        return _.statAsync(e)
    }

    function h(e) {
        return _.unlinkAsync(e)
    }

    function f(e) {
        return i.__awaiter(this, void 0, void 0, function() {
            var t, r;
            return i.__generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return i.trys.push([0, 2, , 4]), [4, p(e)];
                    case 1:
                        return t = i.sent(), t.isDirectory ? [2, e] : [3, 4];
                    case 2:
                        return r = i.sent(), [4, f(l.dirname(e))];
                    case 3:
                        return i.sent(), [3, 4];
                    case 4:
                        if (t && t.isFile) throw new Error("Path exists as file.");
                        return [4, _.mkdirAsync(e)];
                    case 5:
                        return i.sent(), [2, e]
                }
            })
        })
    }

    function g(e) {
        return i.__awaiter(this, void 0, void 0, function() {
            var t, r, n, o, a, s;
            return i.__generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, _.readdirAsync(e)];
                    case 1:
                        t = i.sent(), r = 0, n = t, i.label = 2;
                    case 2:
                        return r < n.length ? (o = n[r], a = l.join(e, o), [4, p(a)]) : [3, 8];
                    case 3:
                        return s = i.sent(), s.isDirectory() ? [4, g(a)] : [3, 5];
                    case 4:
                        return i.sent(), [3, 7];
                    case 5:
                        return [4, h(a)];
                    case 6:
                        i.sent(), i.label = 7;
                    case 7:
                        return r++, [3, 2];
                    case 8:
                        return [4, _.rmdirAsync(e)];
                    case 9:
                        return i.sent(), [2]
                }
            })
        })
    }

    function m(e) {
        return i.__awaiter(this, void 0, void 0, function() {
            var t, r;
            return i.__generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return i.trys.push([0, 2, , 3]), [4, p(e)];
                    case 1:
                        return t = i.sent(), [3, 3];
                    case 2:
                        return r = i.sent(), [2];
                    case 3:
                        return t.isDirectory ? [4, g(e)] : [3, 5];
                    case 4:
                        return i.sent(), [3, 7];
                    case 5:
                        return [4, h(e)];
                    case 6:
                        i.sent(), i.label = 7;
                    case 7:
                        return [2]
                }
            })
        })
    }

    function v(e, t) {
        return _.readFileAsync(e, t)
    }

    function b(e, t, i) {
        return _.writeFileAsync(e, t, i)
    }

    function y(e) {
        return new Promise(function(t) {
            return n.remote.dialog.showOpenDialog(n.remote.getCurrentWindow(), e, t)
        })
    }

    function w(e) {
        return new Promise(function(t) {
            return n.remote.dialog.showSaveDialog(n.remote.getCurrentWindow(), e, t)
        })
    }

    function x(e, t) {
        var r = this;
        return new Promise(function(n, o) {
            var l = "string" == typeof t ? _.createWriteStream(t) : t,
                c = s.parse(e);
            a.get({
                protocol: c.protocol,
                host: c.host,
                path: c.path,
                headers: {
                    "User-Agent": "Vantage"
                }
            }, function(e) {
                return i.__awaiter(r, void 0, void 0, function() {
                    var t, r;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (302 !== e.statusCode) return [3, 5];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), t = n, [4, x(e.headers.location, l)];
                            case 2:
                                return t.apply(void 0, [i.sent()]), [3, 4];
                            case 3:
                                return r = i.sent(), o(r), [3, 4];
                            case 4:
                                return [2];
                            case 5:
                                return 200 !== e.statusCode ? (o(e), e.destroy(), [2]) : (e.pipe(l), l.on("finish", function() {
                                    return l.close(n)
                                }), [2])
                        }
                    })
                })
            }).on("error", function(e) {
                _.unlink(t), o(e)
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var _ = r.promisifyAll(o);
    t.getFilesInDirectory = u, t.getSubdirectories = d, t.stat = p, t.unlink = h, t.makeDir = f, t.deleteDir = m, t.readFile = v, t.writeFile = b, t.openFileDialog = y, t.saveFileDialog = w, t.downloadFile = x
}), define("editor/editor-provider", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("utility/uuid", ["require", "exports", "crypto"], function(e, t, i) {
    "use strict";

    function r() {
        return i.randomBytes(20)
    }

    function n(e) {
        var t = 0;
        return s[e[t++]] + s[e[t++]] + s[e[t++]] + s[e[t++]] + "-" + s[e[t++]] + s[e[t++]] + "-" + s[e[t++]] + s[e[t++]] + "-" + s[e[t++]] + s[e[t++]] + "-" + s[e[t++]] + s[e[t++]] + s[e[t++]] + s[e[t++]] + s[e[t++]] + s[e[t++]]
    }

    function o(e) {
        e = e || {};
        var t = (e.rng || r)();
        return t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128, e.binary ? t : n(t)
    }

    function a(e) {
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    for (var s = [], l = 0; l < 256; l++) s[l] = (l + 256).toString(16).substr(1);
    t.v4 = o, t.validateUuid = a
}), define("editor/editor-manager", ["require", "exports", "tslib", "../utility/fs", "../utility/uuid", "../environment", "electron", "semver"], function(e, t, i, r, n, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
        function e() {
            var e = this;
            this.providers = new Map;
            try {
                this.editors = JSON.parse(localStorage.getItem("editors"))
            } catch (e) {}
            Array.isArray(this.editors) || (this.editors = []), window.install = function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    var e, r;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return e = this.parseFullLocator(t), [4, this.install(e[0], e[1])];
                            case 1:
                                return r = i.sent(), console.log(r), [2]
                        }
                    })
                })
            }
        }
        return e.prototype.parseFullLocator = function(e) {
            var t = e.indexOf(":");
            return [e.substr(0, t), e.substr(t + 1)]
        }, e.prototype.persist = function() {
            localStorage.setItem("editors", JSON.stringify(this.editors))
        }, e.prototype.registerProvider = function(e, t) {
            this.providers.set(e, t)
        }, e.prototype.findEditor = function(e) {
            return this.editors.find(function(t) {
                return t.locator === e
            })
        }, e.prototype.fetchEditorInfo = function(e, t) {
            return i.__awaiter(this, void 0, void 0, function() {
                var r, n;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return n = this.readEditorInfo, [4, this.getProvider(e).fetchPackageInfo(t)];
                        case 1:
                            return r = n.apply(this, [i.sent()]), r.provider = e, r.locator = t, [2, r]
                    }
                })
            })
        }, e.prototype.getProvider = function(e) {
            var t = this.providers.get(e);
            if (!t) throw new Error("Unknown provider " + e + ".");
            return t
        }, e.prototype.uninstall = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, n;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (-1 === (t = this.editors.indexOf(e))) return [2];
                            this.editors.splice(t, 1), this.persist(), i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]), [4, this.destroyBrowserSession(e)];
                        case 2:
                            return i.sent(), [3, 4];
                        case 3:
                            return n = i.sent(), [3, 4];
                        case 4:
                            return "disk" === e.provider ? [3, 6] : [4, r.deleteDir(e.location)];
                        case 5:
                            i.sent(), i.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }, e.prototype.destroyBrowserSession = function(e) {
            return new Promise(function(t) {
                a.remote.session.fromPartition(e.partition, void 0).clearStorageData(void 0, t)
            })
        }, e.prototype.install = function(e, t, r) {
            return void 0 === r && (r = !1), i.__awaiter(this, void 0, void 0, function() {
                var n, o, a, s;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return (n = this.editors.find(function(i) {
                                return i.provider === e && i.locator === t
                            })) ? [2, n] : (o = this.getProvider(e), [4, o.fetchEditor(t)]);
                        case 1:
                            return a = i.sent(), [4, this.readLocalEditorInfo(a)];
                        case 2:
                            return s = i.sent(), s.location = a, s.provider = e, s.locator = t, s.official = r, s.homepage || (s.homepage = o.getUrl(t)), s.partition = "persist:" + e + ":" + t, s.id = Date.now(), this.editors.push(s), this.persist(), [2, s]
                    }
                })
            })
        }, e.prototype.refresh = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                var e, t = this;
                return i.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e = this.editors.slice(), [4, Promise.all(e.map(function(e, r) {
                                return i.__awaiter(t, void 0, void 0, function() {
                                    var t, n, a, s;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return i.trys.push([0, 2, , 3]), n = (t = Object).assign, a = [e], [4, this.readLocalEditorInfo(e.location)];
                                            case 1:
                                                return n.apply(t, a.concat([i.sent()])), e.homepage || (e.homepage = this.getProvider(e.provider).getUrl(e.locator)), e.id = r, [3, 3];
                                            case 2:
                                                return s = i.sent(), o.default.debug, this.editors.splice(r, 1), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }))];
                        case 1:
                            return r.sent(), this.persist(), [2]
                    }
                })
            })
        }, e.prototype.checkForUpdates = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                var e, t = this;
                return i.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e = this.editors.filter(function(e) {
                                return "disk" !== e.provider
                            }).slice(), [4, Promise.all(e.map(function(e) {
                                return i.__awaiter(t, void 0, void 0, function() {
                                    var t, r, n;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                t = this.getProvider(e.provider), i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 3, , 4]), [4, t.fetchPackageInfo(e.locator)];
                                            case 2:
                                                return r = i.sent(), [3, 4];
                                            case 3:
                                                return n = i.sent(), [2];
                                            case 4:
                                                return s.gt(r.version, e.version) ? [4, this.uninstall(e)] : [3, 7];
                                            case 5:
                                                return i.sent(), [4, this.install(e.provider, e.locator)];
                                            case 6:
                                                i.sent(), i.label = 7;
                                            case 7:
                                                return [2]
                                        }
                                    })
                                })
                            }))];
                        case 1:
                            return r.sent(), [2]
                    }
                })
            })
        }, e.prototype.readLocalEditorInfo = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, n, o;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return t = this.readEditorInfo, o = (n = JSON).parse, [4, r.readFile(e + "/package.json", "utf8")];
                        case 1:
                            return [2, t.apply(this, [o.apply(n, [i.sent()])])]
                    }
                })
            })
        }, e.prototype.readEditorInfo = function(e) {
            if (!e.hasOwnProperty("vantage")) throw new Error("Editor metadata not found in package.");
            var t = e.vantage;
            return t.author = t.author || e.author || "Unknown", t.version = t.version || e.version, t.homepage = e.homepage, this.validateEditorInfo(t), delete t.location, delete t.locator, delete t.provider, delete t.partition, t
        }, e.prototype.validateEditorInfo = function(e) {
            this.ensureString(e, "scid"), n.validateUuid(e.scid) || this.throwValidationError("scid"), e.containerFilter ? (this.ensureString(e, "containerFilter"), e.containerFilter.startsWith("/") && (e.containerFilter = this.stringToRegExp(e.containerFilter))) : void 0 !== e.containerFilter && this.throwValidationError("containerFilter"), e.fileFilter ? (this.ensureString(e, "fileFilter"), e.fileFilter.startsWith("/") && (e.fileFilter = this.stringToRegExp(e.fileFilter))) : void 0 !== e.fileFilter && this.throwValidationError("fileFilter"), this.ensureString(e, "thumbnailUrl"), e.thumbnailUrl.startsWith("https://") || e.thumbnailUrl.startsWith("http://") || this.throwValidationError("thumbnailUrl"), e.homepage && this.ensureString(e, "homepage"), this.ensureString(e, "version"), s.valid(e.version) || this.throwValidationError("version"), this.ensureString(e, "author"), this.ensureString(e, "game"), this.ensureString(e, "name")
        }, e.prototype.ensureString = function(e, t) {
            e && "string" == typeof e[t] || this.throwValidationError(t)
        }, e.prototype.throwValidationError = function(e) {
            throw new Error('Invalid "' + e + '" property in package.')
        }, e.prototype.stringToRegExp = function(e) {
            var t = e.lastIndexOf("/");
            return new RegExp(e.substr(1, t - 1), e.substr(t + 1))
        }, e
    }();
    t.EditorManager = l
}), define("app/disclaimer-dialog", ["require", "exports", "tslib", "aurelia-dialog", "aurelia-framework", "electron"], function(e, t, i, r, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        var e = t = function(e) {
            this.controller = e, e.settings.lock = !0
        };
        return e.prototype.exit = function() {
            o.remote.app.quit()
        }, e.prototype.agree = function() {
            this.controller.ok(), t.onAgree && t.onAgree()
        }, e = t = i.__decorate([n.inject(r.DialogController), i.__metadata("design:paramtypes", [r.DialogController])], e);
        var t
    }();
    t.DisclaimerDialog = a
}), define("utility/dialog", ["require", "exports", "electron"], function(e, t, i) {
    "use strict";

    function r(e) {
        return new Promise(function(t) {
            i.remote.dialog.showMessageBox(i.remote.getCurrentWindow(), {
                type: "question",
                message: e,
                buttons: ["Yes", "No"]
            }, function(e) {
                return t(0 === e)
            })
        })
    }

    function n(e) {
        return new Promise(function(t) {
            i.remote.dialog.showMessageBox(i.remote.getCurrentWindow(), {
                type: "error",
                message: e
            }, function(e) {
                return t()
            })
        })
    }

    function o(e, t) {
        return new Promise(function(r) {
            i.remote.dialog.showMessageBox(i.remote.getCurrentWindow(), {
                type: "info",
                message: e,
                buttons: t
            }, r)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.showYesNoDialog = r, t.showErrorDialog = n, t.showDialog = o
}), define("app/install-dialog", ["require", "exports", "tslib", "aurelia-dialog", "aurelia-framework", "aurelia-router", "electron", "../editor/editor-manager", "../utility/dialog"], function(e, t, i, r, n, o, a, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = function() {
        function e(e, t, i) {
            this.controller = e, this.editorManager = t, this.router = i, this.editorPath = [], this.editorUrl = "", this.fetching = !1, this.installing = !1, this.installed = !1
        }
        return e.prototype.activate = function(e) {
            e && this.fetchEditor(e)
        }, e.prototype.fetchEditor = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, r, n, o, a, s, c, u = this;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (!(t = e.match(/(^github|npm|disk):(.+)/))) return l.showErrorDialog("Editor paths must start with github: or npm:"), [2];
                            r = t[0], n = t[1], o = t[2], this.fetching = !0, i.label = 1;
                        case 1:
                            return i.trys.push([1, 5, 6, 7]), (a = this.editorManager.editors.find(function(e) {
                                return e.provider === n && e.locator === o
                            })) ? (this.editor = a, this.installed = !0, [3, 4]) : [3, 2];
                        case 2:
                            return s = this, [4, this.editorManager.fetchEditorInfo(n, o)];
                        case 3:
                            s.editor = i.sent(), this.installed = this.editorManager.editors.some(function(e) {
                                return e.provider === u.editor.provider && e.locator === u.editor.locator
                            }), i.label = 4;
                        case 4:
                            return [3, 7];
                        case 5:
                            return c = i.sent(), l.showErrorDialog("The editor you want to install could not be found."), [3, 7];
                        case 6:
                            return this.fetching = !1, [7];
                        case 7:
                            return [2]
                    }
                })
            })
        }, e.prototype.installEditor = function(e, t) {
            var i = this;
            this.installing || (this.installing = !0, this.editorManager.install(e, t).then(function(e) {
                i.installing = !1, i.controller.ok(), i.router.navigateToRoute("editor", {
                    id: e.id
                })
            }, function() {
                i.installing = !1, l.showErrorDialog("There was a problem installing the editor.")
            }))
        }, e.prototype.uninstallEditor = function(e) {
            this.installing || (this.editorManager.uninstall(e), this.controller.ok())
        }, e.prototype.installLocalEditor = function() {
            var e = this,
                t = this.editorPath[0].path;
            this.fetching = !0, this.editorManager.fetchEditorInfo("disk", t).then(function(i) {
                e.fetching = !1, e.installEditor("disk", t)
            }, function() {
                l.showErrorDialog('Editor not found or contains invalid metadata. Check the "vantage" property of package.json.'), e.fetching = !1
            })
        }, e.prototype.close = function() {
            this.controller.ok()
        }, e.prototype.openHomepage = function(e) {
            a.remote.shell.openExternal(e.homepage)
        }, e = i.__decorate([n.inject(r.DialogController, s.EditorManager, o.Router), i.__metadata("design:paramtypes", [r.DialogController, s.EditorManager, o.Router])], e)
    }();
    t.InstallDialog = c
}), define("utility/config", ["require", "exports", "tslib", "aurelia-framework", "../api", "electron", "semver"], function(e, t, i, r, n, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e) {
            this.api = e, this.updateAvailable = !1, this.currentVersion = o.remote.app.getVersion()
        }
        return e.prototype.refresh = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                var e;
                return i.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.api.get("/config")];
                        case 1:
                            return e = t.sent(), this.officialEditors = e.officialEditors, a.gt(e.version, this.currentVersion) && (this.updateAvailable = !0, this.updateVersion = e.version, this.downloadUrl = e.downloadUrl), [2, this]
                    }
                })
            })
        }, e = i.__decorate([r.inject(n.Api), i.__metadata("design:paramtypes", [n.Api])], e)
    }();
    t.AppConfigService = s
}), define("app/update-dialog", ["require", "exports", "tslib", "../utility/config", "aurelia-dialog", "aurelia-framework", "electron"], function(e, t, i, r, n, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = function() {
        function e(e, t) {
            this.controller = e, this.config = t, e.settings.lock = !0
        }
        return e.prototype.downloadNow = function() {
            try {
                a.remote.shell.openExternal(this.config.downloadUrl), a.remote.app.quit()
            } catch (e) {
                alert("Please visit vantagemods.com to download."), this.controller.ok()
            }
        }, e = i.__decorate([o.inject(n.DialogController, r.AppConfigService), i.__metadata("design:paramtypes", [n.DialogController, r.AppConfigService])], e)
    }();
    t.UpdateDialog = s
}), define("utility/ga", ["require", "exports", "tslib", "aurelia-fetch-client", "../environment", "electron", "./uuid", "aurelia-path"], function(e, t, i, r, n, o, a, s) {
    "use strict";

    function l() {
        return screen.width + "x" + screen.height
    }

    function c() {
        return navigator.userAgent
    }

    function u() {
        return screen.colorDepth + "-bits"
    }

    function d() {
        return screen.availWidth + "x" + screen.availHeight
    }

    function p() {
        var e = localStorage.getItem("gaClientId");
        return e || (e = a.v4(), localStorage.setItem("gaClientId", e)), e
    }

    function h(e) {
        return i.__awaiter(this, void 0, void 0, function() {
            var t;
            return i.__generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (!n.default.gaTrackingId) return [2];
                        e = Object.assign({
                            v: v,
                            tid: n.default.gaTrackingId,
                            cid: p(),
                            an: "Vantage",
                            av: o.remote.app.getVersion(),
                            sr: l(),
                            vp: d(),
                            sd: u(),
                            ua: c(),
                            ds: "app"
                        }, e), i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), [4, b.fetch("/collect", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: s.buildQueryString(e),
                            cache: "no-cache"
                        })];
                    case 2:
                        return i.sent(), [3, 4];
                    case 3:
                        return t = i.sent(), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function f(e, t, i, r) {
        return h({
            t: "event",
            ec: e,
            ea: t,
            el: i,
            ev: r,
            cd: m
        })
    }

    function g(e) {
        return m = e, h({
            t: "screenview",
            cd: e
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var m, v = "1",
        b = new r.HttpClient;
    b.baseUrl = "https://www.google-analytics.com", n.default.debug && (b.baseUrl += "/debug"), t.reportEvent = f, t.reportScreen = g
}), define("app/routes", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = [{
        route: "",
        name: "default",
        moduleId: "welcome/welcome"
    }, {
        route: "editor/:id",
        name: "editor",
        moduleId: "editor/editor",
        activationStrategy: "replace"
    }]
}), define("app/app", ["require", "exports", "tslib", "../utility/electron", "aurelia-event-aggregator", "../editor/editor-manager", "./disclaimer-dialog", "./install-dialog", "./update-dialog", "aurelia-dialog", "../utility/config", "../utility/ga", "aurelia-framework", "../environment", "./routes"], function(e, t, i, r, n, o, a, s, l, c, u, d, p, h, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var g = function() {
        function e(e, t, i) {
            this.dialog = e, this.config = t, this.editorManager = i
        }
        return e.prototype.configureRouter = function(e, t) {
            e.title = "Vantage", e.options.root = "/", e.addPipelineStep("postcomplete", m), e.addPipelineStep("preActivate", v), e.map(f.default), e.mapUnknownRoutes("default"), e.fallbackRoute("default"), this.router = t
        }, e.prototype.activate = function() {
            d.reportEvent("App", "Start")
        }, e.prototype.attached = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                var e, t, n = this;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return h.default.debug ? [3, 2] : [4, this.dialog.open({
                                viewModel: a.DisclaimerDialog
                            })];
                        case 1:
                            return i.sent(), [3, 3];
                        case 2:
                            a.DisclaimerDialog.onAgree && a.DisclaimerDialog.onAgree(), i.label = 3;
                        case 3:
                            return [4, this.editorManager.refresh()];
                        case 4:
                            i.sent(), i.label = 5;
                        case 5:
                            return i.trys.push([5, 9, , 10]), [4, this.config.refresh()];
                        case 6:
                            return e = i.sent(), e.updateAvailable ? [4, this.dialog.open({
                                viewModel: l.UpdateDialog
                            })] : [3, 8];
                        case 7:
                            i.sent(), i.label = 8;
                        case 8:
                            return Promise.all(e.officialEditors.map(function(e) {
                                var t = e.indexOf(":");
                                return n.editorManager.install(e.substr(0, t), e.substr(t + 1), !0)
                            })).then(function() {
                                n.editorManager.editors.filter(function(t) {
                                    return t.official && !e.officialEditors.includes(t.provider + ":" + t.locator)
                                }).forEach(function(e) {
                                    return n.editorManager.uninstall(e)
                                })
                            }), [3, 10];
                        case 9:
                            return t = i.sent(), [3, 10];
                        case 10:
                            return r.registerUriHandler(function(e) {
                                return n.handleUri(e)
                            }), this.handleUri(r.getLaunchUri()), setInterval(function() {
                                return n.editorManager.checkForUpdates()
                            }, 6e5), this.editorManager.checkForUpdates(), [2]
                    }
                })
            })
        }, e.prototype.handleUri = function(e) {
            if (e && e.startsWith("vantage://")) {
                var t = e.substr("vantage://".length);
                t.startsWith("install/") && this.dialog.open({
                    viewModel: s.InstallDialog,
                    model: t.substr("install/".length)
                })
            }
        }, e = i.__decorate([p.inject(c.DialogService, u.AppConfigService, o.EditorManager), i.__metadata("design:paramtypes", [c.DialogService, u.AppConfigService, o.EditorManager])], e)
    }();
    t.App = g;
    var m = function() {
            function e() {}
            return e.prototype.run = function(e, t) {
                var i = document.querySelector("router-view");
                return i && (i.scrollTop = 0), t()
            }, e
        }(),
        v = function() {
            function e(e) {
                this.ea = e
            }
            return e.prototype.run = function(e, t) {
                return this.ea.publish("router:pipeline:preActivate"), t()
            }, e = i.__decorate([p.inject(n.EventAggregator), i.__metadata("design:paramtypes", [n.EventAggregator])], e)
        }()
}), define("auth/gamercard", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e
    }();
    t.Gamercard = i
}), define("auth/auth-dialog", ["require", "exports", "tslib", "../utility/dialog", "aurelia-dialog", "aurelia-framework", "electron", "../api"], function(e, t, i, r, n, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = "https://login.live.com/ppsecure/InlineLogin.srf?id=80604&scid=3&Platform=Windows10&cxh=0",
        c = function() {
            function e(e, t) {
                this.controller = e, this.api = t
            }
            return e.prototype.attached = function() {
                var e = this;
                this.frame.addEventListener("ipc-message", function(t) {
                    "invoke" === t.channel && e.invoke.apply(e, [t.args[0]].concat(t.args.slice(1)))
                }), this.frame.addEventListener("dom-ready", function() {
                    e.frame.insertCSS("\n    html, body {\n        width: 100%;\n        height: 99% !important;\n        margin: 0;\n        padding: 0;\n    }\n    header {\n        margin-top: 0 !important;\n    }\n    #idLogos, #msaSignupLink, #idPrivacyLink {\n        display: none;\n    }\n")
                });
                var t = {
                    urls: ["https://login.live.com/*"]
                };
                a.remote.session.fromPartition("persist:auth", void 0).webRequest.onBeforeRequest(t, function(t, i) {
                    i({
                        cancel: !1,
                        redirectURL: e.api.getProxiedAuthUrl(t.url)
                    })
                }), this.frame.src = l
            }, e.prototype.invoke = function(e) {
                for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                for (var r = 0, n = t; r < n.length; r++) {
                    var o = n[r];
                    "string" == typeof o && o.startsWith("<EncryptedData ") && this.handleBinaryDAToken0(o)
                }
            }, e.prototype.handleBinaryDAToken0 = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.api.post("/auth", {
                                    token: e
                                })];
                            case 1:
                                return t = i.sent(), "token" in t ? (this.controller.ok(t), [2]) : [4, r.showYesNoDialog("Your login requires extra verification. You can perform this in your Microsoft account security settings. Do you want to go there now?")];
                            case 2:
                                return n = i.sent(), n ? (a.remote.shell.openExternal("https://account.live.com/Activity?refp=security"), this.frame.src = l) : this.controller.cancel(), [2]
                        }
                    })
                })
            }, e = i.__decorate([o.inject(n.DialogController, s.Api), i.__metadata("design:paramtypes", [n.DialogController, s.Api])], e)
        }();
    t.AuthDialog = c
}), define("auth/auth", ["require", "exports", "tslib", "../app/disclaimer-dialog", "aurelia-event-aggregator", "./auth-dialog", "aurelia-dialog", "aurelia-framework", "../api"], function(e, t, i, r, n, o, a, s, l) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = function() {
        function e(e, t) {
            var i = this;
            this.dialogService = e, this.api = t, this.ea = new n.EventAggregator, this.gamercard = this.loadFromStorage("gamercard"), this.token = this.loadFromStorage("token"), this.api.onAuthTokenUpdated(function(e) {
                i.token = e, i.persist()
            }), this.api.onUnauthorized(function() {
                i.token && (i.signOut(), alert("Your login is no longer valid. Please sign in again."), i.signIn())
            }), this.token && (this.api.setAuthToken(this.token), r.DisclaimerDialog.onAgree = function() {
                return i.refresh()
            })
        }
        return e.prototype.refresh = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                var e;
                return i.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.token ? (e = this, [4, this.api.get("/gamercard")]) : [3, 2];
                        case 1:
                            e.gamercard = t.sent(), this.persist(), t.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, e.prototype.persist = function() {
            localStorage.setItem("token", JSON.stringify(this.token)), localStorage.setItem("gamercard", JSON.stringify(this.gamercard))
        }, e.prototype.loadFromStorage = function(e) {
            var t = localStorage.getItem(e);
            if (t) try {
                return JSON.parse(t)
            } catch (e) {}
            return null
        }, e.prototype.signIn = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                var e;
                return i.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return this.gamercard ? [2, this.gamercard] : this.dialogService.hasActiveDialog ? [2, null] : [4, this.requestAuth()];
                        case 1:
                            return (e = t.sent()) ? (this.set(e.token, e.gamercard), [2, e.gamercard]) : [2, null]
                    }
                })
            })
        }, e.prototype.requestAuth = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                var e;
                return i.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.dialogService.open({
                                viewModel: o.AuthDialog
                            })];
                        case 1:
                            return e = t.sent(), [2, e.wasCancelled ? null : e.output]
                    }
                })
            })
        }, e.prototype.signOut = function() {
            this.token && this.set(null, null)
        }, e.prototype.set = function(e, t) {
            this.token = e, this.gamercard = t, this.token ? this.api.setAuthToken(this.token) : this.api.clearAuthToken(), this.ea.publish("change", t), this.persist()
        }, e.prototype.onGamerChanged = function(e) {
            return this.ea.subscribe("change", e)
        }, e = i.__decorate([s.inject(a.DialogService, l.Api), i.__metadata("design:paramtypes", [a.DialogService, l.Api])], e)
    }();
    t.Auth = c
}), define("editor/development", ["require", "exports", "tslib"], function(e, t, i) {
    "use strict";

    function r(e) {
        return i.__awaiter(this, void 0, void 0, function() {
            var t;
            return i.__generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return i.trys.push([0, 2, , 3]), [4, fetch(e)];
                    case 1:
                        return i.sent(), [2, !0];
                    case 2:
                        return t = i.sent(), [2, !1];
                    case 3:
                        return [2]
                }
            })
        })
    }

    function n(e) {
        return i.__awaiter(this, void 0, void 0, function() {
            return i.__generator(this, function(t) {
                return [2, Promise.race([r("http://127.0.0.1:" + e), new Promise(function(e) {
                    return setTimeout(function() {
                        return e(!1)
                    }, 500)
                })])]
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.portInUse = n
}), define("storage/save-storage", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}), define("storage/cloud-save-storage", ["require", "exports", "tslib", "aurelia-framework", "../auth/auth", "../api"], function(e, t, i, r, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            this.api = e, this.auth = t
        }
        return e.prototype.getTitles = function() {
            return Promise.resolve(this.auth.gamercard.titles)
        }, e.prototype.getContainers = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, r;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (!this.auth.gamercard) return [2, []];
                            i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]), [4, this.api.get("/titles/" + e + "/storage")];
                        case 2:
                            return t = i.sent(), t.forEach(function(e) {
                                return e.files.forEach(function(t) {
                                    return t.container = e
                                })
                            }), [2, t];
                        case 3:
                            return r = i.sent(), [2, []];
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.readFile = function(e, t, i) {
            return this.api.get("/titles/" + e + "/storage/" + encodeURIComponent(t) + "/" + encodeURIComponent(i))
        }, e.prototype.writeFile = function(e, t, r, n) {
            return i.__awaiter(this, void 0, void 0, function() {
                var o, a, s, l = this;
                return i.__generator(this, function(c) {
                    switch (c.label) {
                        case 0:
                            return [4, this.api.post("/titles/" + e + "/storage/" + encodeURIComponent(t) + "/" + encodeURIComponent(r), {
                                size: n.length
                            })];
                        case 1:
                            o = c.sent(), a = "/titles/" + e + "/storage/" + encodeURIComponent(t) + "/" + encodeURIComponent(r), c.label = 2;
                        case 2:
                            return c.trys.push([2, 5, , 7]), [4, Promise.all(o.chunks.map(function(e) {
                                return i.__awaiter(l, void 0, void 0, function() {
                                    var t, r;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return t = n.slice(e.offset, e.offset + e.size), [4, fetch(e.url, {
                                                    method: "PUT",
                                                    headers: {
                                                        "Content-Length": t.length.toString()
                                                    },
                                                    body: t,
                                                    keepalive: !0
                                                })];
                                            case 1:
                                                if (r = i.sent(), !r.ok) throw new Error("Faled to upload chunk.");
                                                return [2]
                                        }
                                    })
                                })
                            }))];
                        case 3:
                            return c.sent(), [4, this.api.patch(a, {
                                commit: o.commit
                            })];
                        case 4:
                            return c.sent(), [3, 7];
                        case 5:
                            return s = c.sent(), [4, this.api.patch(a, {
                                cancel: !0
                            })];
                        case 6:
                            return c.sent(), [3, 7];
                        case 7:
                            return [2]
                    }
                })
            })
        }, e.prototype.deleteFile = function(e, t, i) {
            throw new Error("Not implemented yet.")
        }, e = i.__decorate([r.inject(o.Api, n.Auth), i.__metadata("design:paramtypes", [o.Api, n.Auth])], e)
    }();
    t.CloudSaveStorage = a
}), define("editor/editor", ["require", "exports", "tslib", "../utility/fs", "../storage/cloud-save-storage", "../utility/dialog", "./editor-manager", "aurelia-event-aggregator", "aurelia-framework", "../app/install-dialog", "aurelia-dialog", "./development", "../environment", "aurelia-router", "../auth/auth", "electron", "path"], function(e, t, i, r, n, o, a, s, l, c, u, d, p, h, f, g, m) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var v = function() {
        function e(e, t, i, r, n, o) {
            this.auth = e, this.editorManager = t, this.cloudStorage = i, this.dialogService = r, this.router = n, this.ea = o, this.editorLoaded = !1, this.editorInitialized = !1, this.fileSelectorOpen = !1, this.localFiles = []
        }
        return e.prototype.persistLocalHistory = function() {
            localStorage.setItem("editor-history-" + this.editorInfo.id, JSON.stringify(this.localFiles))
        }, e.prototype.attached = function() {
            var e = this;
            this.frame.addEventListener("ipc-message", function(t) {
                "editor" === t.channel && e.handleEditorMessage(t.args.shift(), t.args)
            }), this.frame.addEventListener("dom-ready", function() {
                e.editorInitialized = !1, e.selectedFile = null, e.disableEditor(), "disk" === e.editorInfo.provider && e.frame.getWebContents().openDevTools()
            })
        }, e.prototype.activate = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, r = this;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return this.editorInfo = this.editorManager.editors.find(function(t) {
                                return t.id == e.id
                            }), p.default.debug, this.loadLocalHistory(), t = "disk" === this.editorInfo.provider, t ? [4, d.portInUse(9050)] : [3, 2];
                        case 1:
                            t = i.sent(), i.label = 2;
                        case 2:
                            return this.editorLocation = t ? "http://127.0.0.1:9050" : this.editorInfo.location, this.authListener = this.auth.onGamerChanged(function() {
                                return r.refreshCloudFiles()
                            }), [2]
                    }
                })
            })
        }, e.prototype.loadLocalHistory = function() {
            var e = this;
            try {
                var t = JSON.parse(window.localStorage.getItem("editor-history-" + this.editorInfo.id));
                this.localFiles = t.slice(), t.forEach(function(t) {
                    return i.__awaiter(e, void 0, void 0, function() {
                        var e, r;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.getLocalFile(t.path, t.lastUsed)];
                                case 1:
                                    return e = i.sent(), e ? Object.assign(t, e) : -1 !== (r = this.localFiles.indexOf(t)) && this.localFiles.splice(r, 1), [2]
                            }
                        })
                    })
                })
            } catch (e) {
                this.localFiles = []
            }
        }, e.prototype.handleEditorMessage = function(e, t) {
            return "initialized" === e ? void(this.editorInitialized = !0) : "dev-tools" === e ? void this.frame.getWebContents().openDevTools() : void(this.statusResolve && this.statusReject && ("loaded" === e && "loading" === this.status ? (t[0] ? this.statusReject(t[0]) : this.statusResolve(), this.statusResolve = null, this.statusReject = null) : "saved" === e && "saving" === this.status && (!t[0] && t[1] instanceof Uint8Array ? this.statusResolve(Buffer.from(t[1])) : this.statusReject(t[0]), this.statusResolve = null, this.statusReject = null)))
        }, e.prototype.toggleFileSelector = function() {
            this.fileSelectorOpen = !this.fileSelectorOpen, this.fileSelectorOpen && !this.cloudContainers && this.refreshCloudFiles()
        }, e.prototype.deactivate = function() {
            this.authListener.dispose()
        }, e.prototype.refreshCloudFiles = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                var e, t = this;
                return i.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            "cloud" === this.getSelectedFileType() && (this.disableEditor(), this.selectedFile = null), this.cloudContainers = [], r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, this.executeWithStatus(function() {
                                return i.__awaiter(t, void 0, void 0, function() {
                                    var e, t;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return e = this, t = this.removeUnsupportedFiles, [4, this.cloudStorage.getContainers(this.editorInfo.scid)];
                                            case 1:
                                                return e.cloudContainers = t.apply(this, [i.sent()]), [2]
                                        }
                                    })
                                })
                            }, "reading")];
                        case 2:
                            return r.sent(), [3, 4];
                        case 3:
                            throw e = r.sent(), alert("An error occurred while reading your saves from the cloud."), e;
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.openLocalFile = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                var e, t;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, r.openFileDialog({})];
                        case 1:
                            return e = i.sent(), e && e[0] ? [4, this.getLocalFile(e[0], Date.now())] : [3, 4];
                        case 2:
                            return t = i.sent(), t ? [4, this.loadLocalSave(t)] : [3, 4];
                        case 3:
                            i.sent(), i.label = 4;
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.getLocalFile = function(e, t) {
            return i.__awaiter(this, void 0, void 0, function() {
                var n, o;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), [4, r.stat(e)];
                        case 1:
                            return n = i.sent(), [2, {
                                path: e,
                                name: m.basename(e),
                                size: n.size,
                                lastUsed: t
                            }];
                        case 2:
                            return o = i.sent(), [2, null];
                        case 3:
                            return [2]
                    }
                })
            })
        }, e.prototype.loadCloudSave = function(e) {
            var t = this;
            return this.load(e, function() {
                return t.cloudStorage.readFile(t.editorInfo.scid, e.container.name, e.name)
            })
        }, e.prototype.loadLocalSave = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.load(e, function() {
                                return r.readFile(e.path)
                            })];
                        case 1:
                            return t.sent(), this.localFiles = this.localFiles.filter(function(t) {
                                return t.path !== e.path
                            }), e.lastUsed = Date.now(), this.localFiles.push(e), this.persistLocalHistory(), [2]
                    }
                })
            })
        }, e.prototype.load = function(e, t) {
            return i.__awaiter(this, void 0, void 0, function() {
                var r, n = this;
                return i.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (this.fileSelectorOpen = !1, this.editorLoaded && this.selectedFile === e) return [2];
                            this.disableEditor(), this.selectedFile = e, o.label = 1;
                        case 1:
                            return o.trys.push([1, 3, , 4]), [4, this.executeWithStatus(function() {
                                return i.__awaiter(n, void 0, void 0, function() {
                                    var e;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return e = this.loadSaveIntoEditor, [4, t()];
                                            case 1:
                                                return [4, e.apply(this, [i.sent()])];
                                            case 2:
                                                return i.sent(), this.enableEditor(), [2]
                                        }
                                    })
                                })
                            }, "loading")];
                        case 2:
                            return o.sent(), [3, 4];
                        case 3:
                            throw r = o.sent(), this.selectedFile = null, alert("An error occurred while loading your save."), r;
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.loadSaveIntoEditor = function(e) {
            var t = this,
                i = new Promise(function(e, i) {
                    t.statusResolve = e, t.statusReject = i
                });
            return this.frame.send("editor", "load", e), i
        }, e.prototype.removeUnsupportedFiles = function(e) {
            var t = this;
            return this.editorInfo.containerFilter && (e = "string" == typeof this.editorInfo.containerFilter ? e.filter(function(e) {
                return e.name === t.editorInfo.containerFilter
            }) : e.filter(function(e) {
                return e.name.match(t.editorInfo.containerFilter)
            })), this.editorInfo.fileFilter && ("string" == typeof this.editorInfo.fileFilter ? e.forEach(function(e) {
                return e.files = e.files.filter(function(e) {
                    return e.name === t.editorInfo.fileFilter
                })
            }) : e.forEach(function(e) {
                return e.files = e.files.filter(function(e) {
                    return e.name.match(t.editorInfo.fileFilter)
                })
            })), e.filter(function(e) {
                return 0 !== e.files.length
            })
        }, e.prototype.save = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                var e;
                return i.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            if (!this.editorLoaded) return [2];
                            if (null === (e = this.getSelectedFileType())) return [2];
                            this.disableEditor(), t.label = 1;
                        case 1:
                            return t.trys.push([1, , 6, 7]), "cloud" !== e ? [3, 3] : [4, this.saveCloudSave(this.selectedFile)];
                        case 2:
                            return t.sent(), [3, 5];
                        case 3:
                            return [4, this.saveLocalSave(this.selectedFile)];
                        case 4:
                            t.sent(), t.label = 5;
                        case 5:
                            return [3, 7];
                        case 6:
                            return this.enableEditor(), [7];
                        case 7:
                            return [2]
                    }
                })
            })
        }, e.prototype.saveCloudSave = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, r, n;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), [4, this.executeWithStatus(this.getBufferFromEditor(), "saving")];
                        case 1:
                            return t = i.sent(), [3, 3];
                        case 2:
                            return r = i.sent(), o.showErrorDialog("An error occurred while saving your data. Your changes have NOT been synced to the cloud."), [3, 3];
                        case 3:
                            return i.trys.push([3, 5, , 6]), [4, this.executeWithStatus(this.uploadSave(e, t), "saving")];
                        case 4:
                            return i.sent(), [3, 6];
                        case 5:
                            throw n = i.sent(), alert("An error occurred while syncing your save to the cloud."), n;
                        case 6:
                            return [2]
                    }
                })
            })
        }, e.prototype.saveLocalSave = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, n, a;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), [4, this.executeWithStatus(this.getBufferFromEditor(), "saving")];
                        case 1:
                            return t = i.sent(), [3, 3];
                        case 2:
                            return n = i.sent(), o.showErrorDialog("An error occurred while saving your data."), [3, 3];
                        case 3:
                            return i.trys.push([3, 5, , 6]), [4, this.executeWithStatus(r.writeFile(e.path, t), "saving")];
                        case 4:
                            return i.sent(), [3, 6];
                        case 5:
                            throw a = i.sent(), alert("An error occurred while saving your file."), a;
                        case 6:
                            return [2]
                    }
                })
            })
        }, e.prototype.getBufferFromEditor = function() {
            var e = this,
                t = new Promise(function(t, i) {
                    e.statusResolve = t, e.statusReject = i
                });
            return this.frame.send("editor", "save"), t
        }, e.prototype.getSelectedFileType = function() {
            var e = this;
            return this.selectedFile ? this.localFiles.includes(this.selectedFile) ? "local" : this.cloudContainers.some(function(t) {
                return t.files.includes(e.selectedFile)
            }) ? "cloud" : null : null
        }, e.prototype.uploadSave = function(e, t) {
            return i.__awaiter(this, void 0, void 0, function() {
                var r;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return e.canEdit ? [4, this.cloudStorage.writeFile(this.editorInfo.scid, e.container.name, e.name, t)] : [3, 2];
                        case 1:
                            return i.sent(), [3, 4];
                        case 2:
                            return [4, o.showDialog("This saved game cannot be synced because it hasn't been whitelisted for modding yet. Please join our Discord to discuss. We will only whitelist saved games that affect single-player gameplay.", ["Join the Discord", "No Thanks"])];
                        case 3:
                            r = i.sent(), 0 === r && g.remote.shell.openExternal(p.default.discordInviteUrl), i.label = 4;
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.executeWithStatus = function(e, t) {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (this.status) return [2, !1];
                            this.status = t, i.label = 1;
                        case 1:
                            return i.trys.push([1, , 6, 7]), e instanceof Promise ? [4, e] : [3, 3];
                        case 2:
                            return [2, i.sent()];
                        case 3:
                            return [4, e()];
                        case 4:
                            return [2, i.sent()];
                        case 5:
                            return [3, 7];
                        case 6:
                            return this.statusResolve = null, this.statusReject = null, this.status = null, [7];
                        case 7:
                            return [2]
                    }
                })
            })
        }, e.prototype.enableEditor = function() {
            this.frame && (this.editorLoaded = !0, this.frame.executeJavaScript('document.body.classList.remove("disabled")', !1))
        }, e.prototype.disableEditor = function() {
            this.editorLoaded = !1, this.frame && this.frame.executeJavaScript('document.body.classList.add("disabled")', !1)
        }, e.prototype.editorFocused = function(e) {
            this.ea.publish("editor-focused", e)
        }, e.prototype.manage = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.dialogService.open({
                                viewModel: c.InstallDialog,
                                model: this.editorInfo.provider + ":" + this.editorInfo.locator
                            })];
                        case 1:
                            return e.sent(), this.editorManager.editors.includes(this.editorInfo) || this.router.navigateToRoute("default"), [2]
                    }
                })
            })
        }, e.prototype.clearLocalSaves = function() {
            "local" === this.getSelectedFileType() && (this.disableEditor(), this.selectedFile = null), this.localFiles = [], this.persistLocalHistory()
        }, e.prototype.removeLocalSave = function(e, t) {
            t.preventDefault(), t.stopPropagation(), this.selectedFile === e && (this.disableEditor(), this.selectedFile = null), this.localFiles.splice(this.localFiles.indexOf(e), 1), this.persistLocalHistory()
        }, e = i.__decorate([l.inject(f.Auth, a.EditorManager, n.CloudSaveStorage, u.DialogService, h.Router, s.EventAggregator), i.__metadata("design:paramtypes", [f.Auth, a.EditorManager, n.CloudSaveStorage, u.DialogService, h.Router, s.EventAggregator])], e)
    }();
    t.Editor = v
}), define("editor/providers/github-editor-provider", ["require", "exports", "tslib", "../../utility/async", "../../utility/fs", "aurelia-fetch-client", "yauzl", "path", "os", "fs"], function(e, t, i, r, n, o, a, s, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
        function e(e) {
            this.cacheDir = e, this.http = (new o.HttpClient).configure(function(e) {
                e.rejectErrorResponses().withBaseUrl("https://api.github.com").withDefaults({
                    headers: {
                        Accept: "application/vnd.github.v3+json"
                    }
                })
            })
        }
        return e.prototype.checkFormat = function(e) {
            return /[a-z0-9_\-]+\/[a-z0-9_\-]+#?[a-z0-9_\-]+/.test(e)
        }, e.prototype.fetchPackageInfo = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, r, n, o, a;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return t = this.getRepoAndTag(e), t.tag ? [3, 2] : (r = t, [4, this.getRelease(e)]);
                        case 1:
                            r.tag = i.sent().tag_name, i.label = 2;
                        case 2:
                            return o = (n = JSON).parse, a = atob, [4, this.get("/repos/" + t.repo + "/contents/package.json?ref=" + encodeURIComponent(t.tag))];
                        case 3:
                            return [2, o.apply(n, [a.apply(void 0, [i.sent().content])])]
                    }
                })
            })
        }, e.prototype.fetchEditor = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, o, l, u, d = this;
                return i.__generator(this, function(p) {
                    switch (p.label) {
                        case 0:
                            return t = s.join(this.cacheDir, e), [4, Promise.all([this.getRelease(e), n.deleteDir(t)])];
                        case 1:
                            return o = p.sent()[0], l = this.getTempDownloadPath(), [4, n.downloadFile(o.zipball_url, l)];
                        case 2:
                            p.sent(), p.label = 3;
                        case 3:
                            return p.trys.push([3, 5, 7, 8]), [4, new Promise(function(e, o) {
                                return i.__awaiter(d, void 0, void 0, function() {
                                    var o, u, d = this;
                                    return i.__generator(this, function(p) {
                                        switch (p.label) {
                                            case 0:
                                                return [4, r.promisify(a.open)(l, {
                                                    lazyEntries: !0
                                                })];
                                            case 1:
                                                return o = p.sent(), u = r.promisify(o.openReadStream.bind(o)), o.readEntry(), o.on("entry", function(e) {
                                                    return i.__awaiter(d, void 0, void 0, function() {
                                                        var r, a;
                                                        return i.__generator(this, function(i) {
                                                            switch (i.label) {
                                                                case 0:
                                                                    return e.fileName.endsWith("/") ? (o.readEntry(), [3, 4]) : [3, 1];
                                                                case 1:
                                                                    return r = s.join(t, e.fileName.substr(e.fileName.indexOf("/") + 1)), [4, n.makeDir(s.dirname(r))];
                                                                case 2:
                                                                    return i.sent(), [4, u(e)];
                                                                case 3:
                                                                    a = i.sent(), a.on("end", function() {
                                                                        return o.readEntry()
                                                                    }), a.pipe(c.createWriteStream(r)), i.label = 4;
                                                                case 4:
                                                                    return [2]
                                                            }
                                                        })
                                                    })
                                                }), o.on("end", function() {
                                                    return e(t)
                                                }), [2]
                                        }
                                    })
                                })
                            })];
                        case 4:
                            return [2, p.sent()];
                        case 5:
                            return u = p.sent(), [4, n.deleteDir(t)];
                        case 6:
                            throw p.sent(), u;
                        case 7:
                            return n.unlink(l), [7];
                        case 8:
                            return [2]
                    }
                })
            })
        }, e.prototype.getRelease = function(e) {
            var t = this.getRepoAndTag(e),
                i = "/repos/" + t.repo + "/releases/" + (t.tag ? "tags/" + t.tag : "latest");
            return this.get(i)
        }, e.prototype.getUrl = function(e) {
            return "https://github.com/" + this.getRepoAndTag(e).repo
        }, e.prototype.getRepoAndTag = function(e) {
            var t = e.split("#");
            return {
                repo: t[0],
                tag: t[1] || void 0
            }
        }, e.prototype.getTempDownloadPath = function() {
            return s.join(l.tmpdir(), "vantage-editor-" + Date.now() + ".zip")
        }, e.prototype.get = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.http.fetch(e)];
                        case 1:
                            return [4, t.sent().json()];
                        case 2:
                            return [2, t.sent()]
                    }
                })
            })
        }, e
    }();
    t.GitHubEditorProvider = u
}), define("editor/providers/disk-editor-provider", ["require", "exports", "tslib", "../../utility/fs"], function(e, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.prototype.getUrl = function(e) {
            return e
        }, e.prototype.fetchPackageInfo = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, n;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return n = (t = JSON).parse, [4, r.readFile(e + "/package.json", "utf8")];
                        case 1:
                            return [2, n.apply(t, [i.sent()])]
                    }
                })
            })
        }, e.prototype.fetchEditor = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(t) {
                    return [2, e]
                })
            })
        }, e
    }();
    t.DiskEditorProvider = n
}), define("editor/providers/npm-editor-provider", ["require", "exports", "tslib", "../../utility/fs", "aurelia-fetch-client", "../../utility/async", "tarball-extract", "semver", "path", "os"], function(e, t, i, r, n, o, a, s, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
        function e(e) {
            this.cacheDir = e, this.http = (new n.HttpClient).configure(function(e) {
                e.rejectErrorResponses().withBaseUrl("https://registry.npmjs.org").withDefaults({
                    headers: {
                        Accept: "application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*"
                    }
                })
            })
        }
        return e.prototype.fetchEditor = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, n, s, c;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return t = l.join(this.cacheDir, e), [4, Promise.all([this.fetchPackageInfo(e), r.deleteDir(t)])];
                        case 1:
                            return n = i.sent()[0], [4, r.makeDir(t)];
                        case 2:
                            i.sent(), s = this.getTempDownloadPath(), i.label = 3;
                        case 3:
                            return i.trys.push([3, 5, 7, 8]), [4, o.promisify(a.extractTarballDownload)(n.dist.tarball, s, t, {})];
                        case 4:
                            return i.sent(), [3, 8];
                        case 5:
                            return c = i.sent(), [4, r.deleteDir(t)];
                        case 6:
                            throw i.sent(), c;
                        case 7:
                            return r.unlink(s), [7];
                        case 8:
                            return [2, l.join(t, "package")]
                    }
                })
            })
        }, e.prototype.fetchPackageInfo = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, this.get(this.getPackageUrl(this.parseLocator(e)))];
                        case 1:
                            return t = i.sent(), t.author = t.author.name, [2, t]
                    }
                })
            })
        }, e.prototype.getPackageUrl = function(e) {
            return "/" + encodeURIComponent((e.org ? "@" + e.org + "/" : "") + e.name) + "/" + encodeURIComponent(e.version || "latest")
        }, e.prototype.parseLocator = function(e) {
            var t;
            if (e.startsWith("@")) {
                var i = e.split("/");
                2 !== i.length && this.throwPackageNameError(), t = i[0], e = i[1], t && /^[-_a-z0-9]+$/.test(t) || this.throwPackageNameError()
            }
            var r, n = e.split("@");
            2 === n.length ? (r = n[1], s.valid(r) || this.throwPackageNameError()) : n.length > 2 && this.throwPackageNameError();
            var o = n[0];
            return o && /^[-_a-z0-9]+$/.test(o) || this.throwPackageNameError(), {
                org: t,
                name: o,
                version: r
            }
        }, e.prototype.getUrl = function(e) {
            var t = this.parseLocator(e);
            return "https://npmjs.com/packages/" + (t.org ? "@" + t.org + "/" : "") + t.name
        }, e.prototype.get = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.http.fetch(e)];
                        case 1:
                            return [4, t.sent().json()];
                        case 2:
                            return [2, t.sent()]
                    }
                })
            })
        }, e.prototype.throwPackageNameError = function() {
            throw new Error("Invalid npm package name.")
        }, e.prototype.getTempDownloadPath = function() {
            return l.join(c.tmpdir(), "vantage-editor-" + Date.now() + ".tar.gz")
        }, e
    }();
    t.NpmEditorProvider = u
}), define("editor/index", ["require", "exports", "tslib", "./providers/github-editor-provider", "./providers/disk-editor-provider", "./providers/npm-editor-provider", "./editor-manager", "../utility/fs", "electron", "path"], function(e, t, i, r, n, o, a, s, l, c) {
    "use strict";

    function u(e) {
        return i.__awaiter(this, void 0, void 0, function() {
            var t, u;
            return i.__generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, s.makeDir(c.join(l.remote.app.getPath("userData"), "Editors"))];
                    case 1:
                        return t = i.sent(), [4, Promise.all([s.makeDir(c.join(t, "github")), s.makeDir(c.join(t, "npm"))])];
                    case 2:
                        return i.sent(), u = new a.EditorManager, u.registerProvider("disk", new n.DiskEditorProvider), u.registerProvider("github", new r.GitHubEditorProvider(c.join(t, "github"))), u.registerProvider("npm", new o.NpmEditorProvider(c.join(t, "npm"))), e.instance(a.EditorManager, u), [2]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.configure = u
}), define("storage/local-save-storage", ["require", "exports", "tslib", "../utility/fs", "path"], function(e, t, i, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e() {
            this.dir = localStorage.getItem("localSaves")
        }
        return Object.defineProperty(e.prototype, "directory", {
            get: function() {
                return this.dir
            },
            set: function(e) {
                e ? localStorage.setItem("localSaves", e) : localStorage.removeItem("localSaves")
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.getTitles = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                var e, t, o, a = this;
                return i.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return this.dir ? (e = [], o = (t = Promise).all, [4, r.getSubdirectories(this.dir)]) : [2, []];
                        case 1:
                            return [4, o.apply(t, [s.sent().map(function(t) {
                                return i.__awaiter(a, void 0, void 0, function() {
                                    var r, o, a;
                                    return i.__generator(this, function(i) {
                                        return r = n.join(this.dir, t), o = t.split("-"), o.length < 2 ? [2] : (a = o.shift().trim(), e.push({
                                            dir: r,
                                            scid: o.join("-").trim(),
                                            name: a,
                                            imageUrl: "/static/images/logo.svg"
                                        }), [2])
                                    })
                                })
                            })])];
                        case 2:
                            return s.sent(), [2, e]
                    }
                })
            })
        }, e.prototype.findTitle = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, this.getTitles()];
                        case 1:
                            if (!(t = i.sent().find(function(t) {
                                    return t.scid === e
                                }))) throw new Error("Title not found.");
                            return [2, t]
                    }
                })
            })
        }, e.prototype.getContainers = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, o, a, s, l, c = this;
                return i.__generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return u.trys.push([0, 2, , 3]), [4, this.findTitle(e)];
                        case 1:
                            return t = u.sent(), [3, 3];
                        case 2:
                            return o = u.sent(), [2, []];
                        case 3:
                            return a = [], l = (s = Promise).all, [4, r.getSubdirectories(t.dir)];
                        case 4:
                            return [4, l.apply(s, [u.sent().map(function(e) {
                                return i.__awaiter(c, void 0, void 0, function() {
                                    var o, s, l, c, u, d = this;
                                    return i.__generator(this, function(p) {
                                        switch (p.label) {
                                            case 0:
                                                return o = n.join(t.dir, e), [4, r.stat(o)];
                                            case 1:
                                                return s = p.sent(), l = {
                                                    name: decodeURIComponent(e),
                                                    size: 0,
                                                    modifiedAt: s.mtime.toISOString(),
                                                    files: []
                                                }, u = (c = Promise).all, [4, r.getFilesInDirectory(o)];
                                            case 2:
                                                return [4, u.apply(c, [p.sent().map(function(e) {
                                                    return i.__awaiter(d, void 0, void 0, function() {
                                                        var t, a;
                                                        return i.__generator(this, function(i) {
                                                            switch (i.label) {
                                                                case 0:
                                                                    return t = n.join(o, e), [4, r.stat(t)];
                                                                case 1:
                                                                    return a = i.sent(), l.size += a.size, l.files.push({
                                                                        container: l,
                                                                        canEdit: !0,
                                                                        name: decodeURIComponent(e),
                                                                        size: a.size
                                                                    }), [2]
                                                            }
                                                        })
                                                    })
                                                })])];
                                            case 3:
                                                return p.sent(), a.push(l), [2]
                                        }
                                    })
                                })
                            })])];
                        case 5:
                            return u.sent(), [2, a]
                    }
                })
            })
        }, e.prototype.buildFilePath = function(e, t, i) {
            return n.join(e.dir, encodeURIComponent(t), encodeURIComponent(i))
        }, e.prototype.readFile = function(e, t, n) {
            return i.__awaiter(this, void 0, void 0, function() {
                var o, a;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return o = r.readFile, a = this.buildFilePath, [4, this.findTitle(e)];
                        case 1:
                            return [4, o.apply(void 0, [a.apply(this, [i.sent(), t, n])])];
                        case 2:
                            return [2, i.sent()]
                    }
                })
            })
        }, e.prototype.writeFile = function(e, t, n, o) {
            return i.__awaiter(this, void 0, void 0, function() {
                var a, s;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return a = r.writeFile, s = this.buildFilePath, [4, this.findTitle(e)];
                        case 1:
                            return [4, a.apply(void 0, [s.apply(this, [i.sent(), t, n]), o])];
                        case 2:
                            return i.sent(), [2]
                    }
                })
            })
        }, e.prototype.deleteFile = function(e, t, n) {
            return i.__awaiter(this, void 0, void 0, function() {
                var o, a;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return o = r.unlink, a = this.buildFilePath, [4, this.findTitle(e)];
                        case 1:
                            return [4, o.apply(void 0, [a.apply(this, [i.sent(), t, n])])];
                        case 2:
                            return i.sent(), [2]
                    }
                })
            })
        }, e
    }();
    t.LocalSaveStorage = o
}), define("resources/index", ["require", "exports"], function(e, t) {
    "use strict";

    function i(e) {
        e.globalResources(["./custom-attributes/close-if-click-outside", "./custom-attributes/external-href", "./elements/inline-svg", "./elements/status-ring.html", "./elements/status-tip.html", "./value-converters/env", "./value-converters/array", "./value-converters/number", "./value-converters/object", "./value-converters/string", "./value-converters/time"])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.configure = i
}), define("welcome/welcome", ["require", "exports", "tslib", "aurelia-framework", "../auth/auth"], function(e, t, i, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e) {
            this.auth = e
        }
        return e = i.__decorate([r.inject(n.Auth), i.__metadata("design:paramtypes", [n.Auth])], e)
    }();
    t.Welcome = o
}), define("resources/custom-attributes/close-if-click-outside", ["require", "exports", "tslib", "aurelia-event-aggregator", "aurelia-framework", "aurelia-dialog"], function(e, t, i, r, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t, i) {
            this.element = e, this.dialogService = t, this.ea = i, this.closeIfClickOutside = this.closeIfClickOutside.bind(this)
        }
        return e.prototype.unbind = function() {
            this.editorListener && (this.editorListener.dispose(), this.editorListener = null), document.removeEventListener("click", this.closeIfClickOutside)
        }, e.prototype.valueChanged = function() {
            this.value ? (this.editorListener = this.ea.subscribe("editor-focused", this.closeIfClickOutside), document.addEventListener("click", this.closeIfClickOutside)) : this.unbind()
        }, e.prototype.closeIfClickOutside = function(e) {
            if (!this.dialogService.hasActiveDialog && !this.element.contains(e.target)) {
                for (var t = e.target; t.parentNode;)
                    if (t = t.parentNode, 11 == t.nodeType) return;
                this.value = !1
            }
        }, e = i.__decorate([n.inject(Element, o.DialogService, r.EventAggregator), n.noView, i.__metadata("design:paramtypes", [Element, o.DialogService, r.EventAggregator])], e)
    }();
    t.CloseIfClickOutsideCustomAttribute = a
}), define("resources/custom-attributes/external-href", ["require", "exports", "tslib", "aurelia-framework", "electron"], function(e, t, i, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e) {
            var t = this;
            this.element = e, this.onClick = function(e) {
                return e.preventDefault(), n.remote.shell.openExternal(t.value), !1
            }
        }
        return e.prototype.attached = function() {
            this.element.addEventListener("click", this.onClick)
        }, e.prototype.detached = function() {
            this.element.removeEventListener("click", this.onClick)
        }, e = i.__decorate([r.inject(Element), r.noView, i.__metadata("design:paramtypes", [Element])], e)
    }();
    t.ExternalHrefCustomAttribute = o
}), define("resources/elements/inline-svg", ["require", "exports", "tslib", "aurelia-framework", "aurelia-http-client", "../../utility/async"], function(e, t, i, r, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = new Map,
        s = new Map,
        l = function() {
            function e(e, t) {
                this.el = e, this.http = t, this.isAttached = !1
            }
            return e.prototype.attached = function() {
                var e = this;
                if (this.isAttached = !0, this.src) {
                    var t = s.get(this.src);
                    if (t) return t.await().then(function() {
                        return e.setDomIfAttached(e.src)
                    });
                    this.setDomIfAttached(this.src)
                }
            }, e.prototype.detached = function() {
                this.isAttached = !1
            }, e.prototype.setDomIfAttached = function(e) {
                var t = this.el.parentNode;
                this.isAttached && t && (t.innerHTML = a.get(e) || "")
            }, e.prototype.isPathAbsolute = function(e) {
                return e.startsWith("https://") || e.startsWith("http://") || e.startsWith("file://") || e.startsWith("/")
            }, e.prototype.srcChanged = function(e) {
                if (e) {
                    if (a.has(e)) return void this.setDomIfAttached(e);
                    if (!s.has(e)) {
                        var t = this.isPathAbsolute(e) ? e : "static/images/" + e;
                        s.set(e, new o.MultiPromise(this.http.createRequest(t).asGet().withResponseType("text").send().then(function(t) {
                            s.delete(e), t.isSuccess && a.set(e, t.content)
                        })))
                    }
                }
            }, i.__decorate([r.bindable, i.__metadata("design:type", String)], e.prototype, "src", void 0), e = i.__decorate([r.containerless(), r.inlineView("<template></template>"), r.customElement("inline-svg"), r.inject(Element, n.HttpClient), i.__metadata("design:paramtypes", [HTMLElement, n.HttpClient])], e)
        }();
    t.InlineSvgCustomElement = l
}), define("resources/elements/number-input", ["require", "exports", "tslib", "aurelia-framework"], function(e, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.prototype.matchPrecision = function(e, t) {
            var i = (e.toString().split(".")[1] || []).length;
            return i > 0 ? parseFloat(t.toPrecision(i)) : t
        }, e.prototype.add = function() {
            this.value = parseFloat(this.value.toString()), this.value += this.step, this.value = this.matchPrecision(this.step, this.value), this.value > this.max && (this.value = this.max)
        }, e.prototype.subtract = function() {
            this.value = parseFloat(this.value.toString()), this.value -= this.step, this.value = this.matchPrecision(this.step, this.value), this.value < this.min && (this.value = this.min)
        }, i.__decorate([r.bindable, i.__metadata("design:type", Number)], e.prototype, "value", void 0), i.__decorate([r.bindable, i.__metadata("design:type", Number)], e.prototype, "min", void 0), i.__decorate([r.bindable, i.__metadata("design:type", Number)], e.prototype, "max", void 0), i.__decorate([r.bindable, i.__metadata("design:type", Number)], e.prototype, "step", void 0), i.__decorate([r.bindable, i.__metadata("design:type", Boolean)], e.prototype, "disabled", void 0), e
    }();
    t.NumberInput = n
}), define("resources/elements/selection-input", ["require", "exports", "tslib", "aurelia-framework"], function(e, t, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e) {
            this.element = e, this.opened = !1, this.closeIfClickOutside = this.closeIfClickOutside.bind(this)
        }
        return e.prototype.open = function() {
            this.opened = !0, document.addEventListener("click", this.closeIfClickOutside)
        }, e.prototype.close = function() {
            this.opened = !1, document.removeEventListener("click", this.closeIfClickOutside)
        }, e.prototype.closeIfClickOutside = function(e) {
            this.element.contains(e.target) || this.close()
        }, e.prototype.setValue = function(e) {
            this.value = e, this.opened = !1
        }, e.prototype.detached = function() {
            this.close()
        }, i.__decorate([r.bindable, i.__metadata("design:type", String)], e.prototype, "value", void 0), i.__decorate([r.bindable, i.__metadata("design:type", Array)], e.prototype, "options", void 0), i.__decorate([r.bindable, i.__metadata("design:type", Boolean)], e.prototype, "disabled", void 0), e = i.__decorate([r.inject(Element), i.__metadata("design:paramtypes", [HTMLElement])], e)
    }();
    t.SelectionInput = n
}), define("resources/value-converters/array", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.prototype.toView = function(e, t, i) {
            return e ? e.map(function(e) {
                return e.hasOwnProperty(t) ? e[t] : i
            }) : []
        }, e
    }();
    t.PluckValueConverter = i;
    var r = function() {
        function e() {}
        return e.prototype.toView = function(e, t) {
            return e && 0 != e.length ? e.slice(0, t) : []
        }, e
    }();
    t.TakeValueConverter = r;
    var n = function() {
        function e() {}
        return e.prototype.toView = function(e, t) {
            return e && 0 !== e.length ? t ? "number" == typeof e[0][t] ? e.sort(function(e, i) {
                return e[t] > i[t] ? 1 : e[t] < i[t] ? -1 : 0
            }) : e.sort(function(e, i) {
                return e[t] && i[t] ? e[t].toString().localeCompare(i[t].toString()) : 0
            }) : e.sort() : []
        }, e
    }();
    t.SortValueConverter = n;
    var o = function() {
        function e() {}
        return e.prototype.toView = function(e) {
            return e && e.slice(0).reverse()
        }, e
    }();
    t.ReverseValueConverter = o;
    var a = function() {
        function e() {}
        return e.prototype.toView = function(e, t) {
            return void 0 === t && (t = ","), e ? e.join(t).replace(/\r/g, "") : ""
        }, e.prototype.fromView = function(e, t) {
            return void 0 === t && (t = ","), e ? e.replace(/\r/g, "").split(t) : []
        }, e
    }();
    t.StringArrayValueConverter = a
}), define("resources/value-converters/env", ["require", "exports", "../../environment"], function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.prototype.toView = function(e, t, r) {
            var n = !!i.default[e];
            return void 0 === t ? n : n ? t : r
        }, e
    }();
    t.EnvValueConverter = r
}), define("resources/value-converters/number", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.prototype.toView = function(e) {
            return e.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,")
        }, e.prototype.fromView = function(e) {
            return parseFloat(e.replace(/,/, ""))
        }, e
    }();
    t.NumberWithCommasValueConverter = i;
    var r = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        n = function() {
            function e() {}
            return e.prototype.toView = function(e, t) {
                if (void 0 === t && (t = 2), 0 === e) return "0 " + r[0];
                var i = Math.floor(Math.log(e) / Math.log(1024));
                return parseFloat((e / Math.pow(1024, i)).toFixed(t)) + " " + r[i]
            }, e
        }();
    t.ByteFormatValueConverter = n
}), define("resources/value-converters/object", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e.prototype.toView = function(e) {
            return e ? Object.getOwnPropertyNames(e).filter(function(e) {
                return !e.startsWith("__")
            }) : []
        }, e
    }();
    t.ObjectKeysValueConverter = i
}), define("resources/value-converters/string", ["require", "exports", "path"], function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.prototype.toView = function(e, t, i) {
            return e.replace(t, i)
        }, e
    }();
    t.ReplaceValueConverter = r;
    var n = function() {
        function e() {}
        return e.prototype.toView = function(e, t) {
            if (!e || e.length <= t) return e;
            var r = i.basename(e);
            if (r.length === t) return r;
            if (r.length >= t - 3) return "..." + r.substr(3);
            if (r.length >= t - 4) return "..." + i.sep + r.substr(3);
            var n = i.dirname(e),
                o = t - r.length - 4,
                a = n.substr(0, o / 2 - 3),
                s = a.lastIndexOf(i.sep); - 1 !== s && (a = a.substr(0, s) + i.sep);
            var l = n.substr(n.length - (o / 2 + 3)),
                c = l.indexOf("\\");
            return -1 !== c && (l = l.substr(c)), a + "..." + l + i.sep + r
        }, e
    }();
    t.LimitPathValueConverter = n
}), define("resources/value-converters/time", ["require", "exports", "moment"], function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.prototype.toView = function(e, t, r) {
            return e ? i(e).format(t || "MMMM DD, YYYY") : r
        }, e
    }();
    t.FriendlyDateValueConverter = r;
    var n = function() {
        function e() {}
        return e.prototype.toView = function(e, t) {
            return "number" == typeof e && (e = new Date(e)), e ? i.utc(e).fromNow() : t || ""
        }, e
    }();
    t.RelativeTimeValueConverter = n;
    var o = function() {
        function e() {}
        return e.prototype.toView = function(e, t, r) {
            return e ? i(e).format(t || "M/D/YY") : r
        }, e
    }();
    t.ShortDateValueConverter = o
}), define("app/resources/elements/app-header", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e
    }();
    t.AppHeader = i
}), define("app/resources/elements/donation", ["require", "exports", "electron"], function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {
            this.disabled = !1
        }
        return e.prototype.visit = function() {
            var e = this;
            this.disabled || (this.disabled = !0, i.remote.shell.openExternal("https://www.patreon.com/vantage"), setTimeout(function() {
                return e.disabled = !1
            }, 1e3))
        }, e
    }();
    t.Donation = r
}), define("app/resources/elements/games", ["require", "exports", "tslib", "../../../editor/editor-manager", "aurelia-router", "aurelia-framework", "aurelia-dialog", "../../install-dialog"], function(e, t, i, r, n, o, a, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l = function() {
        function e(e, t, i) {
            this.router = e, this.editorManager = t, this.dialog = i
        }
        return e.prototype.addGame = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.dialog.open({
                                viewModel: s.InstallDialog
                            })];
                        case 1:
                            return e.sent(), [2]
                    }
                })
            })
        }, e = i.__decorate([o.inject(n.Router, r.EditorManager, a.DialogService), i.__metadata("design:paramtypes", [n.Router, r.EditorManager, a.DialogService])], e)
    }();
    t.GamesCustomElement = l
}), define("app/resources/elements/profile", ["require", "exports", "tslib", "../../../utility/dialog", "aurelia-framework", "../../../auth/auth"], function(e, t, i, r, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e) {
            this.auth = e
        }
        return e.prototype.signOut = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, r.showYesNoDialog("Are you sure you want to sign out?")];
                        case 1:
                            return e.sent() && this.auth.signOut(), [2]
                    }
                })
            })
        }, e = i.__decorate([n.inject(o.Auth), i.__metadata("design:paramtypes", [o.Auth])], e)
    }();
    t.ProfileCustomElement = a
}), define("app/resources/elements/storage-explorer", ["require", "exports", "tslib", "../../../storage/cloud-save-storage", "../../../utility/fs", "../../../utility/dialog", "../../../environment", "aurelia-framework", "../../../auth/auth", "electron"], function(e, t, i, r, n, o, a, s, l, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
        function e(e, t) {
            this.cloud = e, this.auth = t, this.opened = !1, this.containers = {}, this.expandedContainers = {}, this.expandedTitles = {}, this.downloadingFiles = {}, this.uploadingFiles = {}
        }
        return e.prototype.toggle = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return this.opened ? (this.opened = !1, [3, 3]) : [3, 1];
                        case 1:
                            return [4, this.auth.signIn()];
                        case 2:
                            e.sent() && (this.opened = !0), e.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }, e.prototype.toggleTitle = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                var t, r;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return this.expandedTitles[e] = !this.expandedTitles[e], this.containers[e] ? [3, 2] : (t = this.containers, r = e, [4, this.cloud.getContainers(e)]);
                        case 1:
                            t[r] = i.sent(), i.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, e.prototype.toggleContainer = function(e, t) {
            var i = e + "." + t.name;
            this.expandedContainers[i] = !this.expandedContainers[i]
        }, e.prototype.saveAs = function(e, t, r) {
            var o = this,
                a = e + "." + t.name + "." + r.name;
            this.downloadingFiles[a] || this.uploadingFiles[a] || c.remote.dialog.showSaveDialog({
                defaultPath: r.name
            }, function(s) {
                return i.__awaiter(o, void 0, void 0, function() {
                    var o, l, c;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!s) return [2];
                                this.downloadingFiles[a] = !0, i.label = 1;
                            case 1:
                                return i.trys.push([1, 4, 5, 6]), o = n.writeFile, l = [s], [4, this.cloud.readFile(e, t.name, r.name)];
                            case 2:
                                return [4, o.apply(void 0, l.concat([i.sent()]))];
                            case 3:
                                return i.sent(), [3, 6];
                            case 4:
                                throw c = i.sent(), alert("An error occurred while downloading your file."), c;
                            case 5:
                                return this.downloadingFiles[a] = !1, [7];
                            case 6:
                                return [2]
                        }
                    })
                })
            })
        }, e.prototype.replace = function(e, t, r) {
            return i.__awaiter(this, void 0, void 0, function() {
                var s, l, u = this;
                return i.__generator(this, function(d) {
                    switch (d.label) {
                        case 0:
                            return r.canEdit ? [3, 2] : [4, o.showDialog("This saved game has not been whitelisted for modding yet. Please join our Discord to discuss. We will only whitelist saved games that affect single-player gameplay.", ["Join the Discord", "No Thanks"])];
                        case 1:
                            return s = d.sent(), 0 === s && c.remote.shell.openExternal(a.default.discordInviteUrl), [2];
                        case 2:
                            return l = e + "." + t.name + "." + r.name, this.downloadingFiles[l] || this.uploadingFiles[l] ? [2] : (c.remote.dialog.showOpenDialog({
                                defaultPath: r.name
                            }, function(o) {
                                return i.__awaiter(u, void 0, void 0, function() {
                                    var a, s;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                if (!o || !o[0]) return [2];
                                                this.uploadingFiles[l] = !0, i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 4, 5, 6]), [4, n.readFile(o[0])];
                                            case 2:
                                                return a = i.sent(), [4, this.cloud.writeFile(e, t.name, r.name, a)];
                                            case 3:
                                                return i.sent(), t.size = t.size - r.size + a.length, r.size = a.length, [3, 6];
                                            case 4:
                                                throw s = i.sent(), alert("An error occurred while uploading your file."), s;
                                            case 5:
                                                return this.uploadingFiles[l] = !1, [7];
                                            case 6:
                                                return [2]
                                        }
                                    })
                                })
                            }), [2])
                    }
                })
            })
        }, e = i.__decorate([s.inject(r.CloudSaveStorage, l.Auth), i.__metadata("design:paramtypes", [r.CloudSaveStorage, l.Auth])], e)
    }();
    t.StorageExplorer = u
}), define("app/resources/elements/support", ["require", "exports", "electron"], function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {
            this.disabled = !1
        }
        return e.prototype.visit = function() {
            var e = this;
            this.disabled || (this.disabled = !0, i.remote.shell.openExternal("https://www.thetechgame.com/Forums/t=7706816/first-ever-xbox-one-saved-game-mods-teaser-team-vantage.html"), setTimeout(function() {
                return e.disabled = !1
            }, 1e3))
        }, e
    }();
    t.Support = r
}), define("app/resources/elements/window-controls", ["require", "exports", "electron"], function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {
            var e = this;
            this.addIpcListener("main-window-state", function() {
                return e.refresh()
            }), this.refresh()
        }
        return e.prototype.addIpcListener = function(e, t) {
            i.ipcRenderer.removeAllListeners(e), i.ipcRenderer.addListener(e, t)
        }, e.prototype.refresh = function() {
            var e = i.remote.getCurrentWindow();
            this.minimized = e.isMinimized(), this.maximized = e.isMaximized()
        }, e.prototype.minimize = function() {
            i.remote.getCurrentWindow().minimize()
        }, e.prototype.maximize = function() {
            i.remote.getCurrentWindow().maximize()
        }, e.prototype.restore = function() {
            i.remote.getCurrentWindow().unmaximize()
        }, e.prototype.close = function() {
            i.remote.getCurrentWindow().close()
        }, e
    }();
    t.WindowControlsCustomElement = r
}), define("editor/resources/elements/file-selector", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
        function e() {}
        return e
    }();
    t.FileSelector = i
}), define("aurelia-dialog/ai-dialog", ["exports", "aurelia-templating"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.AiDialog = void 0;
    var i, r, n;
    e.AiDialog = (i = (0, t.customElement)("ai-dialog"), r = (0, t.inlineView)("\n  <template>\n    <slot></slot>\n  </template>\n"), i(n = r(n = function() {}) || n) || n)
}), define("aurelia-dialog/ai-dialog-header", ["exports", "aurelia-templating", "./dialog-controller"], function(e, t, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.AiDialogHeader = void 0;
    var r, n, o, a, s;
    e.AiDialogHeader = (r = (0, t.customElement)("ai-dialog-header"), n = (0, t.inlineView)('\n  <template>\n    <button type="button" class="dialog-close" aria-label="Close" if.bind="!controller.settings.lock" click.trigger="controller.cancel()">\n      <span aria-hidden="true">&times;</span>\n    </button>\n\n    <div class="dialog-header-content">\n      <slot></slot>\n    </div>\n  </template>\n'), r(o = n((s = a = function(e) {
        this.controller = e
    }, a.inject = [i.DialogController], o = s)) || o) || o)
}), define("aurelia-dialog/dialog-controller", ["exports", "./lifecycle", "./dialog-result"], function(e, t, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.DialogController = void 0;
    e.DialogController = function() {
        function e(e, t, i, r) {
            this.renderer = e, this.settings = t, this._resolve = i, this._reject = r
        }
        return e.prototype.ok = function(e) {
            return this.close(!0, e)
        }, e.prototype.cancel = function(e) {
            return this.close(!1, e)
        }, e.prototype.error = function(e) {
            var i = this;
            return (0, t.invokeLifecycle)(this.viewModel, "deactivate").then(function() {
                return i.renderer.hideDialog(i)
            }).then(function() {
                i.controller.unbind(), i._reject(e)
            })
        }, e.prototype.close = function(e, r) {
            var n = this;
            return this._closePromise ? this._closePromise : (this._closePromise = (0, t.invokeLifecycle)(this.viewModel, "canDeactivate").then(function(o) {
                if (o) return (0, t.invokeLifecycle)(n.viewModel, "deactivate").then(function() {
                    return n.renderer.hideDialog(n)
                }).then(function() {
                    var t = new i.DialogResult(!e, r);
                    return n.controller.unbind(), n._resolve(t), t
                });
                n._closePromise = void 0
            }, function(e) {
                return n._closePromise = void 0, Promise.reject(e)
            }), this._closePromise)
        }, e
    }()
}), define("aurelia-dialog/lifecycle", ["exports"], function(e) {
    "use strict";

    function t(e, t, i) {
        if ("function" == typeof e[t]) {
            var r = e[t](i);
            return r instanceof Promise ? r : null !== r && void 0 !== r ? Promise.resolve(r) : Promise.resolve(!0)
        }
        return Promise.resolve(!0)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.invokeLifecycle = t
}), define("aurelia-dialog/dialog-result", ["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.DialogResult = function(e, t) {
        this.wasCancelled = !1, this.wasCancelled = e, this.output = t
    }
}), define("aurelia-dialog/ai-dialog-body", ["exports", "aurelia-templating"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.AiDialogBody = void 0;
    var i, r, n;
    e.AiDialogBody = (i = (0, t.customElement)("ai-dialog-body"), r = (0, t.inlineView)("\n  <template>\n    <slot></slot>\n  </template>\n"), i(n = r(n = function() {}) || n) || n)
}), define("aurelia-dialog/ai-dialog-footer", ["exports", "aurelia-templating", "./dialog-controller"], function(e, t, i) {
    "use strict";

    function r(e, t, i, r) {
        i && Object.defineProperty(e, t, {
            enumerable: i.enumerable,
            configurable: i.configurable,
            writable: i.writable,
            value: i.initializer ? i.initializer.call(r) : void 0
        })
    }

    function n(e, t, i, r, n) {
        var o = {};
        return Object.keys(r).forEach(function(e) {
            o[e] = r[e]
        }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = i.slice().reverse().reduce(function(i, r) {
            return r(e, t, i) || i
        }, o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.AiDialogFooter = void 0;
    var o, a, s, l, c, u, d, p;
    e.AiDialogFooter = (o = (0, t.customElement)("ai-dialog-footer"), a = (0, t.inlineView)('\n  <template>\n    <slot></slot>\n\n    <template if.bind="buttons.length > 0">\n      <button type="button" class="btn btn-default" repeat.for="button of buttons" click.trigger="close(button)">${button}</button>\n    </template>\n  </template>\n'), o(s = a((p = d = function() {
        function e(e) {
            r(this, "buttons", c, this), r(this, "useDefaultButtons", u, this), this.controller = e
        }
        return e.prototype.close = function(t) {
            e.isCancelButton(t) ? this.controller.cancel(t) : this.controller.ok(t)
        }, e.prototype.useDefaultButtonsChanged = function(e) {
            e && (this.buttons = ["Cancel", "Ok"])
        }, e.isCancelButton = function(e) {
            return "Cancel" === e
        }, e
    }(), d.inject = [i.DialogController], l = p, c = n(l.prototype, "buttons", [t.bindable], {
        enumerable: !0,
        initializer: function() {
            return []
        }
    }), u = n(l.prototype, "useDefaultButtons", [t.bindable], {
        enumerable: !0,
        initializer: function() {
            return !1
        }
    }), s = l)) || s) || s)
}), define("aurelia-dialog/attach-focus", ["exports", "aurelia-templating"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.AttachFocus = void 0;
    var i, r, n, o;
    e.AttachFocus = (i = (0, t.customAttribute)("attach-focus"))((o = n = function() {
        function e(e) {
            this.value = !0, this.element = e
        }
        return e.prototype.attached = function() {
            this.value && "false" !== this.value && this.element.focus()
        }, e.prototype.valueChanged = function(e) {
            this.value = e
        }, e
    }(), n.inject = [Element], r = o)) || r
}), define("aurelia-dialog/dialog-configuration", ["exports", "./renderer", "./dialog-renderer", "./dialog-options", "aurelia-pal"], function(e, t, i, r, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.DialogConfiguration = void 0;
    var o = i.DialogRenderer,
        a = {
            "ai-dialog": "./ai-dialog",
            "ai-dialog-header": "./ai-dialog-header",
            "ai-dialog-body": "./ai-dialog-body",
            "ai-dialog-footer": "./ai-dialog-footer",
            "attach-focus": "./attach-focus"
        },
        s = "ai-dialog-container,ai-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0}ai-dialog-overlay{opacity:0}ai-dialog-overlay.active{opacity:1}ai-dialog-container{display:block;transition:opacity .2s linear;opacity:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}ai-dialog-container.active{opacity:1}ai-dialog-container>div{padding:30px}ai-dialog-container>div>div{display:block;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto}ai-dialog-container,ai-dialog-container>div,ai-dialog-container>div>div{outline:0}ai-dialog{display:table;box-shadow:0 5px 15px rgba(0,0,0,.5);border:1px solid rgba(0,0,0,.2);border-radius:5px;padding:3;min-width:300px;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;margin:auto;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;background:#fff}ai-dialog>ai-dialog-header{display:block;padding:16px;border-bottom:1px solid #e5e5e5}ai-dialog>ai-dialog-header>button{float:right;border:none;display:block;width:32px;height:32px;background:0 0;font-size:22px;line-height:16px;margin:-14px -16px 0 0;padding:0;cursor:pointer}ai-dialog>ai-dialog-body{display:block;padding:16px}ai-dialog>ai-dialog-footer{display:block;padding:6px;border-top:1px solid #e5e5e5;text-align:right}ai-dialog>ai-dialog-footer button{color:#333;background-color:#fff;padding:6px 12px;font-size:14px;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid #ccc;border-radius:4px;margin:5px 0 5px 5px}ai-dialog>ai-dialog-footer button:disabled{cursor:default;opacity:.45}ai-dialog>ai-dialog-footer button:hover:enabled{color:#333;background-color:#e6e6e6;border-color:#adadad}.ai-dialog-open{overflow:hidden}";
    e.DialogConfiguration = function() {
        function e(e) {
            this.aurelia = e, this.settings = r.dialogOptions, this.resources = [], this.cssText = s, this.renderer = o
        }
        return e.prototype.useDefaults = function() {
            return this.useRenderer(o).useCSS(s).useStandardResources()
        }, e.prototype.useStandardResources = function() {
            return this.useResource("ai-dialog").useResource("ai-dialog-header").useResource("ai-dialog-body").useResource("ai-dialog-footer").useResource("attach-focus")
        }, e.prototype.useResource = function(e) {
            return this.resources.push(e), this
        }, e.prototype.useRenderer = function(e, t) {
            return this.renderer = e, this.settings = Object.assign(this.settings, t || {}), this
        }, e.prototype.useCSS = function(e) {
            return this.cssText = e, this
        }, e.prototype._apply = function() {
            var e = this;
            this.aurelia.transient(t.Renderer, this.renderer), this.resources.forEach(function(t) {
                return e.aurelia.globalResources(a[t])
            }), this.cssText && n.DOM.injectStyles(this.cssText)
        }, e
    }()
}), define("aurelia-dialog/renderer", ["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.Renderer = function() {
        function e() {}
        return e.prototype.getDialogContainer = function() {
            throw new Error("DialogRenderer must implement getDialogContainer().")
        }, e.prototype.showDialog = function(e) {
            throw new Error("DialogRenderer must implement showDialog().")
        }, e.prototype.hideDialog = function(e) {
            throw new Error("DialogRenderer must implement hideDialog().")
        }, e
    }()
}), define("aurelia-dialog/dialog-renderer", ["exports", "aurelia-pal", "aurelia-dependency-injection"], function(e, t, i) {
    "use strict";

    function r(e) {
        var i = e.children[0],
            r = Math.max(t.DOM.querySelectorAll("html")[0].clientHeight, window.innerHeight || 0);
        i.style.marginTop = Math.max((r - i.offsetHeight) / 2, 30) + "px", i.style.marginBottom = Math.max((r - i.offsetHeight) / 2, 30) + "px"
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.DialogRenderer = void 0;
    var n, o = function() {
        var e = null;
        return function() {
            if (e) return e;
            var i = void 0,
                r = t.DOM.createElement("fakeelement"),
                n = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
            for (i in n)
                if (void 0 !== r.style[i]) return e = n[i]
        }
    }();
    (e.DialogRenderer = (0, i.transient)()(n = function() {
        function e() {
            var e = this;
            this._escapeKeyEventHandler = function(t) {
                if (27 === t.keyCode) {
                    var i = e._dialogControllers[e._dialogControllers.length - 1];
                    i && !0 !== i.settings.lock && i.cancel()
                }
            }
        }
        return e.prototype.getDialogContainer = function() {
            return t.DOM.createElement("div")
        }, e.prototype.showDialog = function(e) {
            var i = this,
                n = e.settings,
                a = t.DOM.querySelectorAll("body")[0],
                s = document.createElement("div");
            this.modalOverlay = t.DOM.createElement("ai-dialog-overlay"), this.modalContainer = t.DOM.createElement("ai-dialog-container"), this.anchor = e.slot.anchor, s.appendChild(this.anchor), this.modalContainer.appendChild(s), this.stopPropagation = function(e) {
                e._aureliaDialogHostClicked = !0
            }, this.closeModalClick = function(t) {
                if (n.lock || t._aureliaDialogHostClicked) return !1;
                e.cancel()
            }, e.centerDialog = function() {
                n.centerHorizontalOnly || r(i.modalContainer)
            }, this.modalOverlay.style.zIndex = n.startingZIndex, this.modalContainer.style.zIndex = n.startingZIndex;
            var l = Array.from(a.querySelectorAll("ai-dialog-container")).pop();
            return l ? (l.parentNode.insertBefore(this.modalContainer, l.nextSibling), l.parentNode.insertBefore(this.modalOverlay, l.nextSibling)) : (a.insertBefore(this.modalContainer, a.firstChild), a.insertBefore(this.modalOverlay, a.firstChild)), this._dialogControllers.length || t.DOM.addEventListener("keyup", this._escapeKeyEventHandler), this._dialogControllers.push(e), e.slot.attached(), "function" == typeof n.position ? n.position(this.modalContainer, this.modalOverlay) : e.centerDialog(), this.modalContainer.addEventListener("click", this.closeModalClick), this.anchor.addEventListener("click", this.stopPropagation), new Promise(function(e) {
                function t(i) {
                    i.target === r.modalContainer && (r.modalContainer.removeEventListener(o(), t), e())
                }
                var r = i;
                n.ignoreTransitions ? e() : i.modalContainer.addEventListener(o(), t), i.modalOverlay.classList.add("active"), i.modalContainer.classList.add("active"), a.classList.add("ai-dialog-open")
            })
        }, e.prototype.hideDialog = function(e) {
            var i = this,
                r = e.settings,
                n = t.DOM.querySelectorAll("body")[0];
            this.modalContainer.removeEventListener("click", this.closeModalClick), this.anchor.removeEventListener("click", this.stopPropagation);
            var a = this._dialogControllers.indexOf(e);
            return -1 !== a && this._dialogControllers.splice(a, 1), this._dialogControllers.length || t.DOM.removeEventListener("keyup", this._escapeKeyEventHandler), new Promise(function(e) {
                function t() {
                    n.modalContainer.removeEventListener(o(), t), e()
                }
                var n = i;
                r.ignoreTransitions ? e() : i.modalContainer.addEventListener(o(), t), i.modalOverlay.classList.remove("active"), i.modalContainer.classList.remove("active")
            }).then(function() {
                return n.removeChild(i.modalOverlay), n.removeChild(i.modalContainer), e.slot.detached(), i._dialogControllers.length || n.classList.remove("ai-dialog-open"), Promise.resolve()
            })
        }, e
    }()) || n).prototype._dialogControllers = []
}), define("aurelia-dialog/dialog-options", ["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.dialogOptions = {
        lock: !0,
        centerHorizontalOnly: !1,
        startingZIndex: 1e3,
        ignoreTransitions: !1
    }
}), define("aurelia-dialog/dialog-service", ["exports", "aurelia-metadata", "aurelia-dependency-injection", "aurelia-templating", "./dialog-controller", "./renderer", "./lifecycle", "./dialog-result", "./dialog-options"], function(e, t, i, r, n, o, a, s, l) {
    "use strict";

    function c(e) {
        return e = Object.assign({}, l.dialogOptions, e), e.startingZIndex = l.dialogOptions.startingZIndex, e
    }

    function u(e, t, i) {
        var n = i.renderer.getDialogContainer();
        return d({
            container: e.container,
            childContainer: t,
            model: i.settings.model,
            view: i.settings.view,
            viewModel: i.settings.viewModel,
            viewSlot: new r.ViewSlot(n, !0),
            host: n
        }, e.compositionEngine).then(function(t) {
            return i.viewModel = t.viewModel, i.slot = t.viewSlot, (0, a.invokeLifecycle)(i.viewModel, "canActivate", i.settings.model).then(function(r) {
                if (r) return e.compositionEngine.compose(t).then(function(t) {
                    return e.controllers.push(i), e.hasActiveDialog = !!e.controllers.length, i.controller = t, i.view = t.view, i.renderer.showDialog(i)
                })
            })
        })
    }

    function d(e, i) {
        return "function" == typeof e.viewModel && (e.viewModel = t.Origin.get(e.viewModel).moduleId), "string" == typeof e.viewModel ? i.ensureViewModel(e) : Promise.resolve(e)
    }

    function p(e, t) {
        var i = e.controllers.indexOf(t); - 1 !== i && (e.controllers.splice(i, 1), e.hasActiveDialog = !!e.controllers.length)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.DialogService = void 0;
    var h, f;
    e.DialogService = (f = h = function() {
        function e(e, t) {
            this.container = e, this.compositionEngine = t, this.controllers = [], this.hasActiveDialog = !1
        }
        return e.prototype.open = function(e) {
            return this.openAndYieldController(e).then(function(e) {
                return e.result
            })
        }, e.prototype.openAndYieldController = function(e) {
            var t = this,
                i = this.container.createChild(),
                r = void 0,
                a = new Promise(function(t, a) {
                    r = new n.DialogController(i.get(o.Renderer), c(e), t, a)
                });
            return i.registerInstance(n.DialogController, r), r.result = a, r.result.then(function() {
                p(t, r)
            }, function() {
                p(t, r)
            }), u(this, i, r).then(function() {
                return r
            })
        }, e
    }(), h.inject = [i.Container, r.CompositionEngine], f)
}), define("tar/lib/create", ["require", "exports", "module", "./high-level-opt", "./pack", "fs", "./list", "path"], function(e, t, i) {
    "use strict";
    var r = e("./high-level-opt"),
        n = e("./pack"),
        o = e("fs"),
        a = e("./list"),
        s = e("path"),
        l = (i.exports = function(e, t, i) {
            if ("function" == typeof t && (i = t), Array.isArray(e) && (t = e, e = {}), !t || !Array.isArray(t) || !t.length) throw new TypeError("no files or directories specified");
            var n = r(e);
            if (n.sync && "function" == typeof i) throw new TypeError("callback not supported for sync tar functions");
            if (!n.file && "function" == typeof i) throw new TypeError("callback only supported with file option");
            return n.file && n.sync ? l(n, t) : n.file ? c(n, t, i) : n.sync ? p(n, t) : h(n, t)
        }, function(e, t) {
            var i, r = new n.Sync(e),
                a = !0;
            try {
                i = o.openSync(e.file, "w", e.mode || 438), r.on("data", function(e) {
                    return o.writeSync(i, e, 0, e.length)
                }), r.on("end", function(e) {
                    return o.closeSync(i)
                }), u(r, t), a = !1
            } finally {
                if (a) try {
                    o.closeSync(i)
                } catch (e) {}
            }
        }),
        c = function(e, t, i) {
            var r = new n(e),
                a = o.createWriteStream(e.file, {
                    mode: e.mode || 438
                });
            r.pipe(a);
            var s = new Promise(function(e, t) {
                a.on("error", t), a.on("close", e), r.on("error", t)
            });
            return d(r, t), i ? s.then(i, i) : s
        },
        u = function(e, t) {
            t.forEach(function(t) {
                "@" === t.charAt(0) ? a({
                    file: s.resolve(e.cwd, t.substr(1)),
                    sync: !0,
                    noResume: !0,
                    onentry: function(t) {
                        return e.add(t)
                    }
                }) : e.add(t)
            }), e.end()
        },
        d = function(e, t) {
            for (; t.length;) {
                var i = t.shift();
                if ("@" === i.charAt(0)) return a({
                    file: s.resolve(e.cwd, i.substr(1)),
                    noResume: !0,
                    onentry: function(t) {
                        return e.add(t)
                    }
                }).then(function(i) {
                    return d(e, t)
                });
                e.add(i)
            }
            e.end()
        },
        p = function(e, t) {
            var i = new n.Sync(e);
            return u(i, t), i
        },
        h = function(e, t) {
            var i = new n(e);
            return d(i, t), i
        }
}), define("tar/lib/high-level-opt", ["require", "exports", "module"], function(e, t, i) {
    "use strict";
    var r = new Map([
        ["C", "cwd"],
        ["f", "file"],
        ["z", "gzip"],
        ["P", "preservePaths"],
        ["U", "unlink"],
        ["strip-components", "strip"],
        ["stripComponents", "strip"],
        ["keep-newer", "newer"],
        ["keepNewer", "newer"],
        ["keep-newer-files", "newer"],
        ["keepNewerFiles", "newer"],
        ["k", "keep"],
        ["keep-existing", "keep"],
        ["keepExisting", "keep"],
        ["m", "noMtime"],
        ["no-mtime", "noMtime"],
        ["p", "preserveOwner"],
        ["L", "follow"],
        ["h", "follow"]
    ]);
    i.exports = function(e) {
        return e ? Object.keys(e).map(function(t) {
            return [r.has(t) ? r.get(t) : t, e[t]]
        }).reduce(function(e, t) {
            return e[t[0]] = t[1], e
        }, Object.create(null)) : {}
    }
}), define("tar/lib/pack", ["require", "exports", "module", "minipass", "minizlib", "./read-entry", "./write-entry", "yallist", "fs", "path", "./warn-mixin"], function(e, t, i) {
    "use strict";
    var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
            };
            return function(t, i) {
                function r() {
                    this.constructor = t
                }
                e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        n = function() {
            function e(e, t) {
                this.path = e || "./", this.absolute = t, this.entry = null, this.stat = null, this.readdir = null, this.pending = !1, this.ignore = !1, this.piped = !1
            }
            return e
        }(),
        o = e("minipass"),
        a = e("minizlib"),
        s = e("./read-entry"),
        l = e("./write-entry"),
        c = l.Sync,
        u = l.Tar,
        d = e("yallist"),
        p = Buffer.alloc(1024),
        h = Symbol("onStat"),
        f = Symbol("ended"),
        g = Symbol("queue"),
        m = Symbol("current"),
        v = Symbol("process"),
        b = Symbol("processing"),
        y = Symbol("processJob"),
        w = Symbol("jobs"),
        x = Symbol("jobDone"),
        _ = Symbol("addFSEntry"),
        k = Symbol("addTarEntry"),
        S = Symbol("stat"),
        E = Symbol("readdir"),
        C = Symbol("onreaddir"),
        P = Symbol("pipe"),
        O = Symbol("entry"),
        F = Symbol("entryOpt"),
        D = Symbol("writeEntryClass"),
        A = Symbol("write"),
        M = Symbol("ondrain"),
        z = e("fs"),
        j = e("path"),
        L = e("./warn-mixin"),
        q = L(function(e) {
            function t(t) {
                var i = e.call(this, t) || this;
                return t = t || Object.create(null), i.opt = t, i.cwd = t.cwd || process.cwd(), i.maxReadSize = t.maxReadSize, i.preservePaths = !!t.preservePaths, i.strict = !!t.strict, i.noPax = !!t.noPax, i.prefix = (t.prefix || "").replace(/(\\|\/)+$/, ""), i.linkCache = t.linkCache || new Map, i.statCache = t.statCache || new Map, i.readdirCache = t.readdirCache || new Map, i[D] = l, "function" == typeof t.onwarn && i.on("warn", t.onwarn), i.zip = null, t.gzip ? ("object" != typeof t.gzip && (t.gzip = {}), i.zip = new a.Gzip(t.gzip), i.zip.on("data", function(t) {
                    return e.prototype.write.call(i, t)
                }), i.zip.on("end", function(t) {
                    return e.prototype.end.call(i)
                }), i.zip.on("drain", function(e) {
                    return i[M]()
                }), i.on("resume", function(e) {
                    return i.zip.resume()
                })) : i.on("drain", i[M]), i.portable = !!t.portable, i.noDirRecurse = !!t.noDirRecurse, i.follow = !!t.follow, i.filter = "function" == typeof t.filter ? t.filter : function(e) {
                    return !0
                }, i[g] = new d, i[w] = 0, i.jobs = +t.jobs || 4, i[b] = !1, i[f] = !1, i
            }
            return r(t, e), t.prototype[A] = function(t) {
                return e.prototype.write.call(this, t)
            }, t.prototype.add = function(e) {
                return this.write(e), this
            }, t.prototype.end = function(e) {
                return e && this.write(e), this[f] = !0, this[v](), this
            }, t.prototype.write = function(e) {
                if (this[f]) throw new Error("write after end");
                return e instanceof s ? this[k](e) : this[_](e), this.flowing
            }, t.prototype[k] = function(e) {
                var t = this,
                    i = j.resolve(this.cwd, e.path);
                if (this.prefix && (e.path = this.prefix + "/" + e.path), this.filter(e.path, e)) {
                    var r = new n(e.path, i, !1);
                    r.entry = new u(e, this[F](r)), r.entry.on("end", function(e) {
                        return t[x](r)
                    }), this[w] += 1, this[g].push(r)
                } else e.resume();
                this[v]()
            }, t.prototype[_] = function(e) {
                var t = j.resolve(this.cwd, e);
                this.prefix && (e = this.prefix + "/" + e), this[g].push(new n(e, t)), this[v]()
            }, t.prototype[S] = function(e) {
                var t = this;
                e.pending = !0, this[w] += 1;
                var i = this.follow ? "stat" : "lstat";
                z[i](e.absolute, function(i, r) {
                    e.pending = !1, t[w] -= 1, i ? t.emit("error", i) : t[h](e, r)
                })
            }, t.prototype[h] = function(e, t) {
                this.statCache.set(e.absolute, t), e.stat = t, this.filter(e.path, t) || (e.ignore = !0), this[v]()
            }, t.prototype[E] = function(e) {
                var t = this;
                e.pending = !0, this[w] += 1, z.readdir(e.absolute, function(i, r) {
                    if (e.pending = !1, t[w] -= 1, i) return t.emit("error", i);
                    t[C](e, r)
                })
            }, t.prototype[C] = function(e, t) {
                this.readdirCache.set(e.absolute, t), e.readdir = t, this[v]()
            }, t.prototype[v] = function() {
                if (!this[b]) {
                    this[b] = !0;
                    for (var t = this[g].head; null !== t && this[w] < this.jobs; t = t.next)
                        if (this[y](t.value), t.value.ignore) {
                            var i = t.next;
                            this[g].removeNode(t), t.next = i
                        } this[b] = !1, this[f] && !this[g].length && 0 === this[w] && (this.zip ? this.zip.end(p) : (e.prototype.write.call(this, p), e.prototype.end.call(this)))
                }
            }, Object.defineProperty(t.prototype, m, {
                get: function() {
                    return this[g] && this[g].head && this[g].head.value
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype[x] = function(e) {
                this[g].shift(), this[w] -= 1, this[v]()
            }, t.prototype[y] = function(e) {
                if (!e.pending) {
                    if (e.entry) return void(e !== this[m] || e.piped || this[P](e));
                    if (e.stat || (this.statCache.has(e.absolute) ? this[h](e, this.statCache.get(e.absolute)) : this[S](e)), e.stat && !e.ignore && (this.noDirRecurse || !e.stat.isDirectory() || e.readdir || (this.readdirCache.has(e.absolute) ? this[C](e, this.readdirCache.get(e.absolute)) : this[E](e), e.readdir))) {
                        if (e.entry = this[O](e), !e.entry) return void(e.ignore = !0);
                        e !== this[m] || e.piped || this[P](e)
                    }
                }
            }, t.prototype[F] = function(e) {
                var t = this;
                return {
                    onwarn: function(e, i) {
                        t.warn(e, i)
                    },
                    noPax: this.noPax,
                    cwd: this.cwd,
                    absolute: e.absolute,
                    preservePaths: this.preservePaths,
                    maxReadSize: this.maxReadSize,
                    strict: this.strict,
                    portable: this.portable,
                    linkCache: this.linkCache,
                    statCache: this.statCache
                }
            }, t.prototype[O] = function(e) {
                var t = this;
                this[w] += 1;
                try {
                    return new this[D](e.path, this[F](e)).on("end", function(i) {
                        t[x](e)
                    }).on("error", function(e) {
                        return t.emit("error", e)
                    })
                } catch (e) {
                    this.emit("error", e)
                }
            }, t.prototype[M] = function() {
                this[m] && this[m].entry && this[m].entry.resume()
            }, t.prototype[P] = function(t) {
                var i = this;
                t.piped = !0, t.readdir && t.readdir.forEach(function(e) {
                    var r = "./" === t.path ? "" : t.path.replace(/\/*$/, "/");
                    i[_](r + e)
                });
                var r = t.entry,
                    n = this.zip;
                n ? r.on("data", function(e) {
                    n.write(e) || r.pause()
                }) : r.on("data", function(t) {
                    e.prototype.write.call(i, t) || r.pause()
                })
            }, t.prototype.pause = function() {
                return this.zip && this.zip.pause(), e.prototype.pause.call(this)
            }, t
        }(o)),
        I = function(e) {
            function t(t) {
                var i = e.call(this, t) || this;
                return i[D] = c, i
            }
            return r(t, e), t.prototype.pause = function() {}, t.prototype.resume = function() {}, t.prototype[S] = function(e) {
                var t = this.follow ? "statSync" : "lstatSync";
                this[h](e, z[t](e.absolute))
            }, t.prototype[E] = function(e, t) {
                this[C](e, z.readdirSync(e.absolute))
            }, t.prototype[P] = function(t) {
                var i = this,
                    r = t.entry,
                    n = this.zip;
                t.readdir && t.readdir.forEach(function(e) {
                    i[_](t.path + "/" + e)
                }), n ? r.on("data", function(e) {
                    n.write(e)
                }) : r.on("data", function(t) {
                    e.prototype[A].call(i, t)
                })
            }, t
        }(q);
    q.Sync = I, i.exports = q
}), define("minizlib/constants", ["require", "exports", "module"], function(e, t, i) {
    i.exports = Object.freeze({
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_VERSION_ERROR: -6,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        ZLIB_VERNUM: 4736,
        DEFLATE: 1,
        INFLATE: 2,
        GZIP: 3,
        GUNZIP: 4,
        DEFLATERAW: 5,
        INFLATERAW: 6,
        UNZIP: 7,
        Z_MIN_WINDOWBITS: 8,
        Z_MAX_WINDOWBITS: 15,
        Z_DEFAULT_WINDOWBITS: 15,
        Z_MIN_CHUNK: 64,
        Z_MAX_CHUNK: 1 / 0,
        Z_DEFAULT_CHUNK: 16384,
        Z_MIN_MEMLEVEL: 1,
        Z_MAX_MEMLEVEL: 9,
        Z_DEFAULT_MEMLEVEL: 8,
        Z_MIN_LEVEL: -1,
        Z_MAX_LEVEL: 9,
        Z_DEFAULT_LEVEL: -1
    })
}), define("tar/lib/read-entry", ["require", "exports", "module", "./types", "minipass"], function(e, t, i) {
    "use strict";
    var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
            };
            return function(t, i) {
                function r() {
                    this.constructor = t
                }
                e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        n = (e("./types"), e("minipass")),
        o = Symbol("slurp");
    i.exports = function(e) {
        function t(t, i, r) {
            var n = e.call(this) || this;
            switch (n.extended = i, n.globalExtended = r, n.header = t, n.blockRemain = 512 * Math.ceil(t.size / 512), n.remain = t.size, n.type = t.type, n.meta = !1, n.ignore = !1, n.type) {
                case "File":
                case "OldFile":
                case "Link":
                case "SymbolicLink":
                case "CharacterDevice":
                case "BlockDevice":
                case "Directory":
                case "FIFO":
                case "ContiguousFile":
                case "GNUDumpDir":
                    break;
                case "NextFileHasLongLinkpath":
                case "NextFileHasLongPath":
                case "OldGnuLongPath":
                case "GlobalExtendedHeader":
                case "ExtendedHeader":
                case "OldExtendedHeader":
                    n.meta = !0;
                    break;
                default:
                    n.ignore = !0
            }
            return n.path = t.path, n.mode = t.mode, n.mode && (n.mode = 4095 & n.mode), n.uid = t.uid, n.gid = t.gid, n.uname = t.uname, n.gname = t.gname, n.size = t.size, n.mtime = t.mtime, n.atime = t.atime, n.ctime = t.ctime, n.linkpath = t.linkpath, n.uname = t.uname, n.gname = t.gname, i && n[o](i), r && n[o](r, !0), n
        }
        return r(t, e), t.prototype.write = function(t) {
            var i = t.length;
            if (i > this.blockRemain) throw new Error("writing more to entry than is appropriate");
            var r = this.remain,
                n = this.blockRemain;
            return this.remain = Math.max(0, r - i), this.blockRemain = Math.max(0, n - i), !!this.ignore || (r >= i ? e.prototype.write.call(this, t) : e.prototype.write.call(this, t.slice(0, r)))
        }, t.prototype[o] = function(e, t) {
            for (var i in e) null === e[i] || void 0 === e[i] || t && "path" === i || (this[i] = e[i])
        }, t
    }(n)
}), define("tar/lib/types", ["require", "exports", "module"], function(e, t, i) {
    "use strict";
    t.name = new Map([
        ["0", "File"],
        ["", "OldFile"],
        ["1", "Link"],
        ["2", "SymbolicLink"],
        ["3", "CharacterDevice"],
        ["4", "BlockDevice"],
        ["5", "Directory"],
        ["6", "FIFO"],
        ["7", "ContiguousFile"],
        ["g", "GlobalExtendedHeader"],
        ["x", "ExtendedHeader"],
        ["A", "SolarisACL"],
        ["D", "GNUDumpDir"],
        ["I", "Inode"],
        ["K", "NextFileHasLongLinkpath"],
        ["L", "NextFileHasLongPath"],
        ["M", "ContinuationFile"],
        ["N", "OldGnuLongPath"],
        ["S", "SparseFile"],
        ["V", "TapeVolumeHeader"],
        ["X", "OldExtendedHeader"]
    ]), t.code = new Map(Array.from(t.name).map(function(e) {
        return [e[1], e[0]]
    }))
}), define("tar/lib/write-entry", ["require", "exports", "module", "minipass", "./pax", "./header", "./read-entry", "fs", "path", "./types", "./warn-mixin", "./winchars"], function(e, t, i) {
    "use strict";
    var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
            };
            return function(t, i) {
                function r() {
                    this.constructor = t
                }
                e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        n = e("minipass"),
        o = e("./pax"),
        a = e("./header"),
        s = (e("./read-entry"), e("fs")),
        l = e("path"),
        c = (e("./types"), 16777216),
        u = Symbol("process"),
        d = Symbol("file"),
        p = Symbol("directory"),
        h = Symbol("symlink"),
        f = Symbol("hardlink"),
        g = Symbol("header"),
        m = Symbol("read"),
        v = Symbol("lstat"),
        b = Symbol("onlstat"),
        y = Symbol("onread"),
        w = Symbol("onreadlink"),
        x = Symbol("openfile"),
        _ = Symbol("onopenfile"),
        k = Symbol("close"),
        S = e("./warn-mixin"),
        E = e("./winchars"),
        C = S(function(e) {
            function t(t, i) {
                var r = this;
                if (i = i || {}, r = e.call(this, i) || this, "string" != typeof t) throw new TypeError("path is required");
                if (r.path = t, r.portable = !!i.portable, r.myuid = process.getuid && process.getuid(), r.myuser = process.env.USER || "", r.maxReadSize = i.maxReadSize || c, r.linkCache = i.linkCache || new Map, r.statCache = i.statCache || new Map, r.preservePaths = !!i.preservePaths, r.cwd = i.cwd || process.cwd(), r.strict = !!i.strict, r.noPax = !!i.noPax, "function" == typeof i.onwarn && r.on("warn", i.onwarn), !r.preservePaths && l.win32.isAbsolute(t)) {
                    var n = l.win32.parse(t);
                    r.warn("stripping " + n.root + " from absolute path", t), r.path = t.substr(n.root.length)
                }
                return r.win32 = !!i.win32 || "win32" === process.platform, r.win32 && (r.path = E.decode(r.path.replace(/\\/g, "/")), t = t.replace(/\\/g, "/")), r.absolute = i.absolute || l.resolve(r.cwd, t), "" === r.path && (r.path = "./"), r.statCache.has(r.absolute) ? r[b](r.statCache.get(r.absolute)) : r[v](), r
            }
            return r(t, e), t.prototype[v] = function() {
                var e = this;
                s.lstat(this.absolute, function(t, i) {
                    if (t) return e.emit("error", t);
                    e[b](i)
                })
            }, t.prototype[b] = function(e) {
                this.statCache.set(this.absolute, e), this.stat = e, e.isFile() || (e.size = 0), this.type = F(e), this.emit("stat", e), this[u]()
            }, t.prototype[u] = function() {
                switch (this.type) {
                    case "File":
                        return this[d]();
                    case "Directory":
                        return this[p]();
                    case "SymbolicLink":
                        return this[h]();
                    default:
                        return this.end()
                }
            }, t.prototype[g] = function() {
                this.header = new a({
                    path: this.path,
                    linkpath: this.linkpath,
                    mode: 4095 & this.stat.mode,
                    uid: this.portable ? null : this.stat.uid,
                    gid: this.portable ? null : this.stat.gid,
                    size: this.stat.size,
                    mtime: "Directory" === this.type && this.portable ? null : this.stat.mtime,
                    type: this.type,
                    uname: this.portable ? null : this.stat.uid === this.myuid ? this.myuser : "",
                    atime: this.portable ? null : this.stat.atime,
                    ctime: this.portable ? null : this.stat.ctime
                }), this.header.encode() && !this.noPax && this.write(new o({
                    atime: this.portable ? null : this.header.atime,
                    ctime: this.portable ? null : this.header.ctime,
                    gid: this.portable ? null : this.header.gid,
                    mtime: this.header.mtime,
                    path: this.path,
                    linkpath: this.linkpath,
                    size: this.size,
                    uid: this.portable ? null : this.header.uid,
                    uname: this.portable ? null : this.header.uname,
                    dev: this.portable ? null : this.stat.dev,
                    ino: this.portable ? null : this.stat.ino,
                    nlink: this.portable ? null : this.stat.nlink
                }).encode()), this.write(this.header.block)
            }, t.prototype[p] = function() {
                "/" !== this.path.substr(-1) && (this.path += "/"), this.stat.size = 0, this[g](), this.end()
            }, t.prototype[h] = function() {
                var e = this;
                s.readlink(this.absolute, function(t, i) {
                    if (t) return e.emit("error", t);
                    e[w](i)
                })
            }, t.prototype[w] = function(e) {
                this.linkpath = e, this[g](), this.end()
            }, t.prototype[f] = function(e) {
                this.type = "Link", this.linkpath = l.relative(this.cwd, e), this.stat.size = 0, this[g](), this.end()
            }, t.prototype[d] = function() {
                if (this.stat.nlink > 1) {
                    var e = this.stat.dev + ":" + this.stat.ino;
                    if (this.linkCache.has(e)) {
                        var t = this.linkCache.get(e);
                        if (0 === t.indexOf(this.cwd)) return this[f](t)
                    }
                    this.linkCache.set(e, this.absolute)
                }
                if (this[g](), 0 === this.stat.size) return this.end();
                this[x]()
            }, t.prototype[x] = function() {
                var e = this;
                s.open(this.absolute, "r", function(t, i) {
                    if (t) return e.emit("error", t);
                    e[_](i)
                })
            }, t.prototype[_] = function(e) {
                var t = 512 * Math.ceil(this.stat.size / 512),
                    i = Math.min(t, this.maxReadSize),
                    r = Buffer.allocUnsafe(i);
                this[m](e, r, 0, r.length, 0, this.stat.size, t)
            }, t.prototype[m] = function(e, t, i, r, n, o, a) {
                var l = this;
                s.read(e, t, i, r, n, function(s, c) {
                    if (s) return l[k](e, function(e) {
                        return l.emit("error", s)
                    });
                    l[y](e, t, i, r, n, o, a, c)
                })
            }, t.prototype[k] = function(e, t) {
                s.close(e, t)
            }, t.prototype[y] = function(e, t, i, r, n, o, a, s) {
                if (s <= 0 && o > 0) {
                    var l = new Error("unexpected EOF");
                    l.path = this.absolute, l.syscall = "read", l.code = "EOF", this.emit("error", l)
                }
                if (s === o)
                    for (var c = s; c < r && s < a; c++) t[c + i] = 0, s++, o++;
                var u = 0 === i && s === t.length ? t : t.slice(i, i + s);
                if (o -= s, a -= s, n += s, i += s, this.write(u), !o) return a && this.write(Buffer.alloc(a)), this.end(), void this[k](e, function(e) {
                    return e
                });
                i >= r && (t = Buffer.allocUnsafe(r), i = 0), r = t.length - i, this[m](e, t, i, r, n, o, a)
            }, t
        }(n)),
        P = function(e) {
            function t(t, i) {
                return e.call(this, t, i) || this
            }
            return r(t, e), t.prototype[v] = function() {
                this[b](s.lstatSync(this.absolute))
            }, t.prototype[h] = function() {
                this[w](s.readlinkSync(this.absolute))
            }, t.prototype[x] = function() {
                this[_](s.openSync(this.absolute, "r"))
            }, t.prototype[m] = function(e, t, i, r, n, o, a) {
                var l = !0;
                try {
                    var c = s.readSync(e, t, i, r, n);
                    this[y](e, t, i, r, n, o, a, c), l = !1
                } finally {
                    if (l) try {
                        this[k](e)
                    } catch (e) {}
                }
            }, t.prototype[k] = function(e) {
                s.closeSync(e)
            }, t
        }(C),
        O = S(function(e) {
            function t(t, i) {
                var r = this;
                if (i = i || {}, r = e.call(this, i) || this, r.readEntry = t, r.path = t.path, r.mode = t.mode, r.mode && (r.mode = 4095 & r.mode), r.uid = t.uid, r.gid = t.gid, r.uname = t.uname, r.gname = t.gname, r.size = t.size, r.mtime = t.mtime, r.atime = t.atime, r.ctime = t.ctime, r.linkpath = t.linkpath, r.uname = t.uname, r.gname = t.gname, r.preservePaths = !!i.preservePaths, r.portable = !!i.portable, r.strict = !!i.strict, r.noPax = !!i.noPax, "function" == typeof i.onwarn && r.on("warn", i.onwarn), l.isAbsolute(r.path) && !r.preservePaths) {
                    var n = l.parse(r.path);
                    r.warn("stripping " + n.root + " from absolute path", r.path), r.path = r.path.substr(n.root.length)
                }
                return r.remain = t.size, r.blockRemain = t.blockRemain, r.header = new a({
                    path: r.path,
                    linkpath: r.linkpath,
                    mode: r.mode,
                    uid: r.portable ? null : r.uid,
                    gid: r.portable ? null : r.gid,
                    size: r.size,
                    mtime: r.mtime,
                    type: r.type,
                    uname: r.portable ? null : r.uname,
                    atime: r.portable ? null : r.atime,
                    ctime: r.portable ? null : r.ctime
                }), r.header.encode() && !r.noPax && e.prototype.write.call(r, new o({
                    atime: r.portable ? null : r.atime,
                    ctime: r.portable ? null : r.ctime,
                    gid: r.portable ? null : r.gid,
                    mtime: r.mtime,
                    path: r.path,
                    linkpath: r.linkpath,
                    size: r.size,
                    uid: r.portable ? null : r.uid,
                    uname: r.portable ? null : r.uname,
                    dev: r.portable ? null : r.readEntry.dev,
                    ino: r.portable ? null : r.readEntry.ino,
                    nlink: r.portable ? null : r.readEntry.nlink
                }).encode()), e.prototype.write.call(r, r.header.block), t.pipe(r), r
            }
            return r(t, e), t.prototype.write = function(t) {
                var i = t.length;
                if (i > this.blockRemain) throw new Error("writing more to entry than is appropriate");
                return this.blockRemain -= i, e.prototype.write.call(this, t)
            }, t.prototype.end = function() {
                return this.blockRemain && this.write(Buffer.alloc(this.blockRemain)), e.prototype.end.call(this)
            }, t
        }(n));
    C.Sync = P, C.Tar = O;
    var F = function(e) {
        return e.isFile() ? "File" : e.isDirectory() ? "Directory" : e.isSymbolicLink() ? "SymbolicLink" : "Unsupported"
    };
    i.exports = C
}), define("tar/lib/pax", ["require", "exports", "module", "./header", "path"], function(e, t, i) {
    "use strict";
    var r = e("./header"),
        n = e("path"),
        o = function() {
            function e(e, t) {
                this.atime = e.atime || null, this.charset = e.charset || null, this.comment = e.comment || null, this.ctime = e.ctime || null, this.gid = e.gid || null, this.gname = e.gname || null, this.linkpath = e.linkpath || null, this.mtime = e.mtime || null, this.path = e.path || null, this.size = e.size || null, this.uid = e.uid || null, this.uname = e.uname || null, this.dev = e.dev || null, this.ino = e.ino || null, this.nlink = e.nlink || null, this.global = t || !1
            }
            return e.prototype.encode = function() {
                var e = this.encodeBody();
                if ("" === e) return null;
                for (var t = Buffer.byteLength(e), i = 512 * Math.ceil(1 + t / 512), o = Buffer.allocUnsafe(i), a = 0; a < 512; a++) o[a] = 0;
                new r({
                    path: ("PaxHeader/" + n.basename(this.path)).slice(0, 99),
                    mode: this.mode || 420,
                    uid: this.uid || null,
                    gid: this.gid || null,
                    size: t,
                    mtime: this.mtime || null,
                    type: this.global ? "GlobalExtendedHeader" : "ExtendedHeader",
                    linkpath: "",
                    uname: this.uname || "",
                    gname: this.gname || "",
                    devmaj: 0,
                    devmin: 0,
                    atime: this.atime || null,
                    ctime: this.ctime || null
                }).encode(o), o.write(e, 512, t, "utf8");
                for (var a = t + 512; a < o.length; a++) o[a] = 0;
                return o
            }, e.prototype.encodeBody = function() {
                return this.encodeField("path") + this.encodeField("ctime") + this.encodeField("atime") + this.encodeField("dev") + this.encodeField("ino") + this.encodeField("nlink") + this.encodeField("charset") + this.encodeField("comment") + this.encodeField("gid") + this.encodeField("gname") + this.encodeField("linkpath") + this.encodeField("mtime") + this.encodeField("size") + this.encodeField("uid") + this.encodeField("uname")
            }, e.prototype.encodeField = function(e) {
                if (null === this[e] || void 0 === this[e]) return "";
                var t = this[e] instanceof Date ? this[e].getTime() / 1e3 : this[e],
                    i = " " + ("dev" === e || "ino" === e || "nlink" === e ? "SCHILY." : "") + e + "=" + t + "\n",
                    r = Buffer.byteLength(i),
                    n = Math.floor(Math.log(r) / Math.log(10)) + 1;
                return r + n >= Math.pow(10, n) && (n += 1), n + r + i
            }, e
        }();
    o.parse = function(e, t, i) {
        return new o(a(s(e), t), i)
    };
    var a = function(e, t) {
            return t ? Object.keys(e).reduce(function(t, i) {
                return t[i] = e[i], t
            }, t) : e
        },
        s = function(e) {
            return e.replace(/\n$/, "").split("\n").reduce(l, Object.create(null))
        },
        l = function(e, t) {
            var i = parseInt(t, 10);
            if (i !== Buffer.byteLength(t) + 1) return e;
            t = t.substr((i + " ").length);
            var r = t.split("="),
                n = r.shift().replace(/^SCHILY\.(dev|ino|nlink)/, "$1");
            if (!n) return e;
            var o = r.join("=");
            return e[n] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(n) ? new Date(1e3 * o) : /^[0-9]+$/.test(o) ? +o : o, e
        };
    i.exports = o
}), define("tar/lib/header", ["require", "exports", "module", "./types", "path", "./large-numbers"], function(e, t, i) {
    "use strict";
    var r = e("./types"),
        n = e("path"),
        o = e("./large-numbers"),
        a = Symbol("type"),
        s = function() {
            function e(e, t) {
                this.cksumValid = !1, this.needPax = !1, this.nullBlock = !1, this.block = null, this.path = null, this.mode = null, this.uid = null, this.gid = null, this.size = null, this.mtime = null, this.cksum = null, this[a] = "0", this.linkpath = null, this.uname = null, this.gname = null, this.devmaj = 0, this.devmin = 0, this.atime = null, this.ctime = null, Buffer.isBuffer(e) ? this.decode(e, t || 0) : e && this.set(e)
            }
            return e.prototype.decode = function(e, t) {
                if (t || (t = 0), !(e && e.length >= t + 512)) throw new Error("need 512 bytes for header");
                if (this.path = c(e, t, 100), this.mode = p(e, t + 100, 8), this.uid = p(e, t + 108, 8), this.gid = p(e, t + 116, 8), this.size = p(e, t + 124, 12), this.mtime = u(e, t + 136, 12), this.cksum = p(e, t + 148, 12), this[a] = c(e, t + 156, 1), "" === this[a] && (this[a] = "0"), "0" === this[a] && "/" === this.path.substr(-1) && (this[a] = "5"), "5" === this[a] && (this.size = 0), this.linkpath = c(e, t + 157, 100), "ustar\x0000" === e.slice(t + 257, t + 265).toString())
                    if (this.uname = c(e, t + 265, 32), this.gname = c(e, t + 297, 32), this.devmaj = p(e, t + 329, 8), this.devmin = p(e, t + 337, 8), 0 !== e[t + 475]) {
                        var i = c(e, t + 345, 155);
                        this.path = i + "/" + this.path
                    } else {
                        var i = c(e, t + 345, 130);
                        i && (this.path = i + "/" + this.path), this.atime = u(e, t + 476, 12), this.ctime = u(e, t + 488, 12)
                    } for (var r = 256, n = t; n < t + 148; n++) r += e[n];
                for (var n = t + 156; n < t + 512; n++) r += e[n];
                this.cksumValid = r === this.cksum, null === this.cksum && 256 === r && (this.nullBlock = !0)
            }, e.prototype.encode = function(e, t) {
                if (e || (e = this.block = Buffer.alloc(512), t = 0), t || (t = 0), !(e.length >= t + 512)) throw new Error("need 512 bytes for header");
                var i = this.ctime || this.atime ? 130 : 155,
                    r = l(this.path || "", i),
                    n = r[0],
                    o = r[1];
                this.needPax = r[2], this.needPax = _(e, t, 100, n) || this.needPax, this.needPax = m(e, t + 100, 8, this.mode) || this.needPax, this.needPax = m(e, t + 108, 8, this.uid) || this.needPax, this.needPax = m(e, t + 116, 8, this.gid) || this.needPax, this.needPax = m(e, t + 124, 12, this.size) || this.needPax, this.needPax = w(e, t + 136, 12, this.mtime) || this.needPax, e[t + 156] = this[a].charCodeAt(0), this.needPax = _(e, t + 157, 100, this.linkpath) || this.needPax, e.write("ustar\x0000", t + 257, 8), this.needPax = _(e, t + 265, 32, this.uname) || this.needPax, this.needPax = _(e, t + 297, 32, this.gname) || this.needPax, this.needPax = m(e, t + 329, 8, this.devmaj) || this.needPax, this.needPax = m(e, t + 337, 8, this.devmin) || this.needPax, this.needPax = _(e, t + 345, i, o) || this.needPax, 0 !== e[t + 475] ? this.needPax = _(e, t + 345, 155, o) || this.needPax : (this.needPax = _(e, t + 345, 130, o) || this.needPax, this.needPax = w(e, t + 476, 12, this.atime) || this.needPax, this.needPax = w(e, t + 488, 12, this.ctime) || this.needPax);
                for (var s = 256, c = t; c < t + 148; c++) s += e[c];
                for (var c = t + 156; c < t + 512; c++) s += e[c];
                return this.cksum = s, m(e, t + 148, 8, this.cksum), this.cksumValid = !0, this.needPax
            }, e.prototype.set = function(e) {
                for (var t in e) null !== e[t] && void 0 !== e[t] && (this[t] = e[t])
            }, Object.defineProperty(e.prototype, "type", {
                get: function() {
                    return r.name.get(this[a]) || this[a]
                },
                set: function(e) {
                    r.code.has(e) ? this[a] = r.code.get(e) : this[a] = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "typeKey", {
                get: function() {
                    return this[a]
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(),
        l = function(e, t) {
            var i, r = e,
                o = "",
                a = n.parse(e).root || ".";
            if (Buffer.byteLength(r) < 100) i = [r, o, !1];
            else {
                o = n.dirname(r), r = n.basename(r);
                do {
                    Buffer.byteLength(r) <= 100 && Buffer.byteLength(o) <= t ? i = [r, o, !1] : Buffer.byteLength(r) > 100 && Buffer.byteLength(o) <= t ? i = [r.substr(0, 99), o, !0] : (r = n.join(n.basename(o), r), o = n.dirname(o))
                } while (o !== a && !i);
                i || (i = [e.substr(0, 99), "", !0])
            }
            return i
        },
        c = function(e, t, i) {
            return e.slice(t, t + i).toString("utf8").replace(/\0.*/, "")
        },
        u = function(e, t, i) {
            return d(p(e, t, i))
        },
        d = function(e) {
            return null === e ? null : new Date(1e3 * e)
        },
        p = function(e, t, i) {
            return 128 & e[t] ? o.parse(e.slice(t, t + i)) : f(e, t, i)
        },
        h = function(e) {
            return isNaN(e) ? null : e
        },
        f = function(e, t, i) {
            return h(parseInt(e.slice(t, t + i).toString("utf8").replace(/\0.*$/, "").trim(), 8))
        },
        g = {
            12: 8589934591,
            8: 2097151
        },
        m = function(e, t, i, r) {
            return null !== r && (r > g[i] || r < 0 ? (o.encode(r, e.slice(t, t + i)), !0) : (v(e, t, i, r), !1))
        },
        v = function(e, t, i, r) {
            return e.write(b(r, i), t, i, "ascii")
        },
        b = function(e, t) {
            return y(Math.floor(e).toString(8), t)
        },
        y = function(e, t) {
            return (e.length === t - 1 ? e : new Array(t - e.length - 1).join("0") + e + " ") + "\0"
        },
        w = function(e, t, i, r) {
            return null !== r && m(e, t, i, r.getTime() / 1e3)
        },
        x = new Array(156).join("\0"),
        _ = function(e, t, i, r) {
            return null !== r && (e.write(r + x, t, i, "utf8"), r.length !== Buffer.byteLength(r) || r.length > i)
        };
    i.exports = s
}), define("tar/lib/large-numbers", ["require", "exports", "module"], function(e, t, i) {
    "use strict";
    var r = (t.encode = function(e, t) {
            return t[t.length - 1] = 32, e < 0 ? n(e, t) : r(e, t), t
        }, function(e, t) {
            t[0] = 128;
            for (var i = t.length - 2; i > 0; i--) 0 === e ? t[i] = 0 : (t[i] = e % 256, e = Math.floor(e / 256))
        }),
        n = function(e, t) {
            t[0] = 255;
            var i = !1;
            e *= -1;
            for (var r = t.length - 2; r > 0; r--) {
                var n;
                0 === e ? n = 0 : (n = e % 256, e = Math.floor(e / 256)), i ? t[r] = s(n) : 0 === n ? t[r] = 0 : (i = !0, t[r] = l(n))
            }
        },
        o = (t.parse = function(e) {
            e[e.length - 1];
            return 128 === e[0] ? a(e.slice(1, e.length - 1)) : o(e.slice(1, e.length - 1))
        }, function(e) {
            for (var t = e.length, i = 0, r = !1, n = t - 1; n > -1; n--) {
                var o, a = e[n];
                r ? o = s(a) : 0 === a ? o = a : (r = !0, o = l(a)), 0 !== o && (i += o * Math.pow(256, t - n - 1))
            }
            return -1 * i
        }),
        a = function(e) {
            for (var t = e.length, i = 0, r = t - 1; r > -1; r--) {
                var n = e[r];
                0 !== n && (i += n * Math.pow(256, t - r - 1))
            }
            return i
        },
        s = function(e) {
            return 255 & (255 ^ e)
        },
        l = function(e) {
            return 1 + (255 ^ e) & 255
        }
}), define("tar/lib/warn-mixin", ["require", "exports", "module"], function(e, t, i) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }();
    i.exports = function(e) {
        return function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.warn = function(e, t) {
                if (this.strict)
                    if (t instanceof Error) this.emit("error", t);
                    else {
                        var i = new Error(e);
                        i.data = t, this.emit("error", i)
                    }
                else this.emit("warn", e, t)
            }, t
        }(e)
    }
}), define("tar/lib/winchars", ["require", "exports", "module"], function(e, t, i) {
    "use strict";
    var r = ["|", "<", ">", "?", ":"],
        n = r.map(function(e) {
            return String.fromCharCode(61440 + e.charCodeAt(0))
        }),
        o = new Map(r.map(function(e, t) {
            return [e, n[t]]
        })),
        a = new Map(n.map(function(e, t) {
            return [e, r[t]]
        }));
    i.exports = {
        encode: function(e) {
            return r.reduce(function(e, t) {
                return e.split(t).join(o.get(t))
            }, e)
        },
        decode: function(e) {
            return n.reduce(function(e, t) {
                return e.split(t).join(a.get(t))
            }, e)
        }
    }
}), define("tar/lib/list", ["require", "exports", "module", "./high-level-opt", "./parse", "fs", "path"], function(e, t, i) {
    "use strict";
    var r = e("./high-level-opt"),
        n = e("./parse"),
        o = e("fs"),
        a = e("path"),
        s = (i.exports = function(e, t, i) {
            "function" == typeof e ? (i = e, t = [], e = {}) : Array.isArray(e) && (t = e, e = {}), "function" == typeof t && (i = t, t = []), t || (t = []);
            var n = r(e);
            if (n.sync && "function" == typeof i) throw new TypeError("callback not supported for sync tar functions");
            if (!n.file && "function" == typeof i) throw new TypeError("callback only supported with file option");
            return t.length && l(n, t), n.noResume || s(n), n.file && n.sync ? c(n) : n.file ? u(n, i) : d(n)
        }, function(e) {
            var t = e.onentry;
            e.onentry = t ? function(e) {
                t(e), e.resume()
            } : function(e) {
                return e.resume()
            }
        }),
        l = function(e, t) {
            var i = new Map(t.map(function(e) {
                    return [e.replace(/\/+$/, ""), !0]
                })),
                r = e.filter,
                n = function(e, t) {
                    var r = t || a.parse(e).root || ".",
                        o = e !== r && (i.has(e) ? i.get(e) : n(a.dirname(e), r));
                    return i.set(e, o), o
                };
            e.filter = r ? function(e, t) {
                return r(e, t) && n(e.replace(/\/+$/, ""))
            } : function(e) {
                return n(e.replace(/\/+$/, ""))
            }
        },
        c = function(e) {
            var t, i = d(e),
                r = e.file,
                n = !0;
            try {
                var a = o.statSync(r),
                    s = e.maxReadSize || 16777216;
                if (a.size < s) i.end(o.readFileSync(r));
                else {
                    var l = 0,
                        c = Buffer.allocUnsafe(s);
                    for (t = o.openSync(r, "r"); l < a.size;) {
                        var u = o.readSync(t, c, 0, s, l);
                        l += u, i.write(c.slice(0, u))
                    }
                    i.end()
                }
                n = !1
            } finally {
                if (n && t) try {
                    o.closeSync(t)
                } catch (e) {}
            }
        },
        u = function(e, t) {
            var i = new n(e),
                r = e.maxReadSize || 16777216,
                a = e.file,
                s = new Promise(function(e, t) {
                    i.on("error", t), i.on("end", e), o.stat(a, function(e, n) {
                        if (e) t(e);
                        else if (n.size < r) o.readFile(a, function(e, r) {
                            if (e) return t(e);
                            i.end(r)
                        });
                        else {
                            var s = o.createReadStream(a, {
                                highWaterMark: r
                            });
                            s.on("error", t), s.pipe(i)
                        }
                    })
                });
            return t ? s.then(t, t) : s
        },
        d = function(e) {
            return new n(e)
        }
}), define("tar/lib/parse", ["require", "exports", "module", "./warn-mixin", "path", "./header", "events", "yallist", "./read-entry", "./pax", "minizlib"], function(e, t, i) {
    "use strict";

    function r() {
        return !0
    }
    var n = this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
            };
            return function(t, i) {
                function r() {
                    this.constructor = t
                }
                e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        o = e("./warn-mixin"),
        a = (e("path"), e("./header")),
        s = e("events"),
        l = e("yallist"),
        c = e("./read-entry"),
        u = e("./pax"),
        d = e("minizlib"),
        p = new Buffer([31, 139]),
        h = Symbol("state"),
        f = Symbol("writeEntry"),
        g = Symbol("readEntry"),
        m = Symbol("nextEntry"),
        v = Symbol("processEntry"),
        b = Symbol("extendedHeader"),
        y = Symbol("globalExtendedHeader"),
        w = Symbol("meta"),
        x = Symbol("emitMeta"),
        _ = Symbol("buffer"),
        k = Symbol("queue"),
        S = Symbol("ended"),
        E = Symbol("emittedEnd"),
        C = Symbol("emit"),
        P = Symbol("unzip"),
        O = Symbol("consumeChunk"),
        F = Symbol("consumeChunkSub"),
        D = Symbol("consumeBody"),
        A = Symbol("consumeMeta"),
        M = Symbol("consumeHeader"),
        z = Symbol("consuming"),
        j = Symbol("bufferConcat"),
        L = Symbol("maybeEnd"),
        q = Symbol("writing"),
        I = Symbol("aborted");
    i.exports = o(function(e) {
        function t(t) {
            var i = this;
            return process.hrtime(), t = t || {}, i = e.call(this, t) || this, i.strict = !!t.strict, i.maxMetaEntrySize = t.maxMetaEntrySize || 1048576, i.filter = "function" == typeof t.filter ? t.filter : r, i[k] = new l, i[_] = null, i[g] = null, i[f] = null, i[h] = "begin", i[w] = "", i[b] = null, i[y] = null, i[S] = !1, i[P] = null, i[I] = !1, "function" == typeof t.onwarn && i.on("warn", t.onwarn), "function" == typeof t.onentry && i.on("entry", t.onentry), i
        }
        return n(t, e), t.prototype[M] = function(e, t) {
            var i = this,
                r = new a(e, t);
            if (r.nullBlock) this[C]("nullBlock");
            else if (r.cksumValid)
                if (r.path) {
                    var n = r.type;
                    if (/^(Symbolic)?Link$/.test(n) && !r.linkpath) this.warn("invalid: linkpath required", r);
                    else if (!/^(Symbolic)?Link$/.test(n) && r.linkpath) this.warn("invalid: linkpath forbidden", r);
                    else {
                        var o = this[f] = new c(r, this[b], this[y]);
                        o.meta ? o.size > this.maxMetaEntrySize ? (o.ignore = !0, this[C]("ignoredEntry", o), this[h] = "ignore") : o.size > 0 && (this[w] = "", o.on("data", function(e) {
                            return i[w] += e
                        }), this[h] = "meta") : (this[b] = null, o.ignore = o.ignore || !this.filter(o.path, o), o.ignore ? (this[C]("ignoredEntry", o), this[h] = o.remain ? "ignore" : "begin") : (o.remain ? this[h] = "body" : (this[h] = "begin", o.end()), this[g] ? this[k].push(o) : (this[k].push(o), this[m]())))
                    }
                } else this.warn("invalid: path is required", r);
            else this.warn("invalid entry", r)
        }, t.prototype[v] = function(e) {
            var t = this,
                i = !0;
            return e ? Array.isArray(e) ? this.emit.apply(this, e) : (this[g] = e, this.emit("entry", e), e.emittedEnd || (e.on("end", function(e) {
                return t[m]()
            }), i = !1)) : (this[g] = null, i = !1), i
        }, t.prototype[m] = function() {
            var e = this;
            do {} while (this[v](this[k].shift()));
            if (!this[k].length) {
                var t = this[g];
                !t || t.flowing || t.size === t.remain ? this[q] || this.emit("drain") : t.once("drain", function(t) {
                    return e.emit("drain")
                })
            }
        }, t.prototype[D] = function(e, t) {
            var i = this[f],
                r = i.blockRemain,
                n = r >= e.length && 0 === t ? e : e.slice(t, t + r);
            return i.write(n), i.blockRemain || (this[h] = "begin", this[f] = null, i.end()), n.length
        }, t.prototype[A] = function(e, t) {
            var i = this[f],
                r = this[D](e, t);
            return this[f] || this[x](i), r
        }, t.prototype[C] = function(e, t, i) {
            this[k].length || this[g] ? this[k].push([e, t, i]) : this.emit(e, t, i)
        }, t.prototype[x] = function(e) {
            switch (this[C]("meta", this[w]), e.type) {
                case "ExtendedHeader":
                case "OldExtendedHeader":
                    this[b] = u.parse(this[w], this[b], !1);
                    break;
                case "GlobalExtendedHeader":
                    this[y] = u.parse(this[w], this[y], !0);
                    break;
                case "NextFileHasLongPath":
                case "OldGnuLongPath":
                    this[b] = this[b] || Object.create(null), this[b].path = this[w];
                    break;
                case "NextFileHasLongLinkpath":
                    this[b] = this[b] || Object.create(null), this[b].linkpath = this[w];
                    break;
                default:
                    throw new Error("unknown meta: " + e.type)
            }
        }, t.prototype.abort = function(e, t) {
            this[I] = !0, this.warn(e, t), this.emit("abort")
        }, t.prototype.write = function(e) {
            var t = this;
            if (!this[I]) {
                if (null === this[P] && e) {
                    if (this[_] && (e = Buffer.concat([this[_], e]), this[_] = null), e.length < p.length) return this[_] = e, !0;
                    for (var i = 0; null === this[P] && i < p.length; i++) e[i] !== p[i] && (this[P] = !1);
                    if (null === this[P]) {
                        var r = this[S];
                        return this[S] = !1, this[P] = new d.Unzip, this[P].on("data", function(e) {
                            return t[O](e)
                        }), this[P].on("error", function(e) {
                            return t.abort("zlib error: " + e.message, e)
                        }), this[P].on("end", function(e) {
                            t[S] = !0, t[O]()
                        }), r ? this[P].end(e) : this[P].write(e)
                    }
                }
                this[q] = !0, this[P] ? this[P].write(e) : this[O](e), this[q] = !1;
                var n = !this[k].length && (!this[g] || this[g].flowing);
                return n || this[k].length || this[g].once("drain", function(e) {
                    return t.emit("drain")
                }), n
            }
        }, t.prototype[j] = function(e) {
            e && !this[I] && (this[_] = this[_] ? Buffer.concat([this[_], e]) : e)
        }, t.prototype[L] = function() {
            if (this[S] && !this[E] && !this[I]) {
                this[E] = !0;
                var e = this[f];
                if (e && e.blockRemain) {
                    var t = this[_] ? this[_].length : 0;
                    this.warn("Truncated input (needed " + e.blockRemain + " more bytes, only " + t + " available)", e), this[_] && e.write(this[_]), e.end()
                }
                this[C]("end")
            }
        }, t.prototype[O] = function(e) {
            if (this[z]) this[j](e);
            else if (e || this[_]) {
                if (this[z] = !0, this[_]) {
                    this[j](e);
                    var t = this[_];
                    this[_] = null, this[F](t)
                } else this[F](e);
                for (; this[_] && this[_].length >= 512 && !this[I];) {
                    var t = this[_];
                    this[_] = null, this[F](t)
                }
                this[z] = !1
            } else this[L]();
            this[_] && !this[S] || this[L]()
        }, t.prototype[F] = function(e) {
            for (var t = 0, i = e.length; t + 512 <= i && !this[I];) switch (this[h]) {
                case "begin":
                    this[M](e, t), t += 512;
                    break;
                case "ignore":
                case "body":
                    t += this[D](e, t);
                    break;
                case "meta":
                    t += this[A](e, t);
                    break;
                default:
                    throw new Error("invalid state: " + this[h])
            }
            t < i && (this[_] ? this[_] = Buffer.concat([e.slice(t), this[_]]) : this[_] = e.slice(t))
        }, t.prototype.end = function(e) {
            this[I] || (this[P] ? this[P].end(e) : (this[S] = !0, this.write(e)))
        }, t
    }(s))
}), define("tar/lib/replace", ["require", "exports", "module", "./high-level-opt", "./pack", "./parse", "fs", "./list", "path", "./header"], function(e, t, i) {
    "use strict";
    var r = e("./high-level-opt"),
        n = e("./pack"),
        o = (e("./parse"), e("fs")),
        a = e("./list"),
        s = e("path"),
        l = e("./header"),
        c = (i.exports = function(e, t, i) {
            var n = r(e);
            if (!n.file) throw new TypeError("file is required");
            if (n.gzip) throw new TypeError("cannot append to compressed archives");
            if (!t || !Array.isArray(t) || !t.length) throw new TypeError("no files or directories specified");
            return n.sync ? c(n, t) : u(n, t, i)
        }, function(e, t) {
            var i, r = new n.Sync(e),
                a = !0;
            try {
                try {
                    i = o.openSync(e.file, "r+")
                } catch (t) {
                    if ("ENOENT" !== t.code) throw t;
                    i = o.openSync(e.file, "w+")
                }
                var s, c = o.fstatSync(i),
                    u = Buffer.alloc(512);
                e: for (s = 0; s < c.size; s += 512) {
                    for (var p = 0, h = 0; p < 512; p += h) {
                        if (h = o.readSync(i, u, p, u.length - p, s + p), 0 === s && 31 === u[0] && 139 === u[1]) throw new Error("cannot append to compressed archives");
                        if (!h) break e
                    }
                    var f = new l(u);
                    if (!f.cksumValid) break;
                    var g = 512 * Math.ceil(f.size / 512);
                    if (s + g + 512 > c.size) break;
                    s += g, e.mtimeCache && e.mtimeCache.set(f.path, f.mtime)
                }
                r.on("data", function(e) {
                    o.writeSync(i, e, 0, e.length, s), s += e.length
                }), r.on("end", function(e) {
                    return o.closeSync(i)
                }), d(r, t), a = !1
            } finally {
                if (a) try {
                    o.closeSync(i)
                } catch (e) {}
            }
        }),
        u = function(e, t, i) {
            var r = new n(e),
                a = function(t, i, r) {
                    var n = function(e, i) {
                            e ? o.close(t, function(t) {
                                return r(e)
                            }) : r(null, i)
                        },
                        a = 0;
                    if (0 === i) return n(null, 0);
                    var s = 0,
                        c = Buffer.alloc(512),
                        u = function(r, d) {
                            if (r) return n(r);
                            if ((s += d) < 512 && d) return o.read(t, c, s, c.length - s, a + s, u);
                            if (0 === a && 31 === c[0] && 139 === c[1]) return n(new Error("cannot append to compressed archives"));
                            if (s < 512) return n(null, a);
                            var p = new l(c);
                            if (!p.cksumValid) return n(null, a);
                            var h = 512 * Math.ceil(p.size / 512);
                            return a + h + 512 > i ? n(null, a) : (a += h + 512) >= i ? n(null, a) : (e.mtimeCache && e.mtimeCache.set(p.path, p.mtime), s = 0, void o.read(t, c, 0, 512, a, u))
                        };
                    o.read(t, c, 0, 512, a, u)
                },
                s = new Promise(function(i, n) {
                    r.on("error", n);
                    var s = function(l, c) {
                        if (l) return "ENOENT" === l.code ? o.open(e.file, "w+", s) : n(l);
                        o.fstat(c, function(s, l) {
                            if (s) return n(s);
                            a(c, l.size, function(a, s) {
                                if (a) return n(a);
                                var l = o.createWriteStream(e.file, {
                                    fd: c,
                                    flags: "r+",
                                    start: s
                                });
                                r.pipe(l), l.on("error", n), l.on("close", i), p(r, t)
                            })
                        })
                    };
                    o.open(e.file, "r+", s)
                });
            return i ? s.then(i, i) : s
        },
        d = function(e, t) {
            t.forEach(function(t) {
                "@" === t.charAt(0) ? a({
                    file: s.resolve(e.cwd, t.substr(1)),
                    sync: !0,
                    noResume: !0,
                    onentry: function(t) {
                        return e.add(t)
                    }
                }) : e.add(t)
            }), e.end()
        },
        p = function(e, t) {
            for (; t.length;) {
                var i = t.shift();
                if ("@" === i.charAt(0)) return a({
                    file: s.resolve(e.cwd, i.substr(1)),
                    noResume: !0,
                    onentry: function(t) {
                        return e.add(t)
                    }
                }).then(function(i) {
                    return p(e, t)
                });
                e.add(i)
            }
            e.end()
        }
}), define("tar/lib/update", ["require", "exports", "module", "./high-level-opt", "./replace"], function(e, t, i) {
    "use strict";
    var r = e("./high-level-opt"),
        n = e("./replace"),
        o = (i.exports = function(e, t, i) {
            var a = r(e);
            if (!a.file) throw new TypeError("file is required");
            if (a.gzip) throw new TypeError("cannot append to compressed archives");
            if (!t || !Array.isArray(t) || !t.length) throw new TypeError("no files or directories specified");
            return o(a), n(a, t, i)
        }, function(e) {
            var t = e.filter;
            e.mtimeCache || (e.mtimeCache = new Map), e.filter = t ? function(i, r) {
                return t(i, r) && !(e.mtimeCache.get(i) > r.mtime)
            } : function(t, i) {
                return !(e.mtimeCache.get(t) > i.mtime)
            }
        })
}), define("tar/lib/extract", ["require", "exports", "module", "./high-level-opt", "./unpack", "fs", "path"], function(e, t, i) {
    "use strict";
    var r = e("./high-level-opt"),
        n = e("./unpack"),
        o = e("fs"),
        a = e("path"),
        s = (i.exports = function(e, t, i) {
            "function" == typeof e ? (i = e, t = [], e = {}) : Array.isArray(e) && (t = e, e = {}), "function" == typeof t && (i = t, t = []), t || (t = []);
            var n = r(e);
            if (n.sync && "function" == typeof i) throw new TypeError("callback not supported for sync tar functions");
            if (!n.file && "function" == typeof i) throw new TypeError("callback only supported with file option");
            return t.length && s(n, t), n.file && n.sync ? l(n) : n.file ? c(n, i) : n.sync ? u(n) : d(n)
        }, function(e, t) {
            var i = new Map(t.map(function(e) {
                    return [e.replace(/\/+$/, ""), !0]
                })),
                r = e.filter,
                n = function(e, t) {
                    var r = t || a.parse(e).root || ".",
                        o = e !== r && (i.has(e) ? i.get(e) : n(a.dirname(e), r));
                    return i.set(e, o), o
                };
            e.filter = r ? function(e, t) {
                return r(e, t) && n(e.replace(/\/+$/, ""))
            } : function(e) {
                return n(e.replace(/\/+$/, ""))
            }
        }),
        l = function(e) {
            var t, i = new n.Sync(e),
                r = e.file,
                a = !0;
            try {
                var s = o.statSync(r),
                    l = e.maxReadSize || 16777216;
                if (s.size < l) i.end(o.readFileSync(r));
                else {
                    var c = 0,
                        u = Buffer.allocUnsafe(l);
                    for (t = o.openSync(r, "r"); c < s.size;) {
                        var d = o.readSync(t, u, 0, l, c);
                        c += d, i.write(u.slice(0, d))
                    }
                    i.end(), o.closeSync(t)
                }
                a = !1
            } finally {
                if (a && t) try {
                    o.closeSync(t)
                } catch (e) {}
            }
        },
        c = function(e, t) {
            var i = new n(e),
                r = e.maxReadSize || 16777216,
                a = e.file,
                s = new Promise(function(e, t) {
                    i.on("error", t), i.on("close", e), o.stat(a, function(e, n) {
                        if (e) t(e);
                        else if (n.size < r) o.readFile(a, function(e, r) {
                            if (e) return t(e);
                            i.end(r)
                        });
                        else {
                            var s = o.createReadStream(a, {
                                highWaterMark: r
                            });
                            s.on("error", t), s.pipe(i)
                        }
                    })
                });
            return t ? s.then(t, t) : s
        },
        u = function(e) {
            return new n.Sync(e)
        },
        d = function(e) {
            return new n(e)
        }
}), define("tar/lib/unpack", ["require", "exports", "module", "assert", "events", "./parse", "fs", "path", "./mkdir", "./winchars"], function(e, t, i) {
    "use strict";
    var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
            };
            return function(t, i) {
                function r() {
                    this.constructor = t
                }
                e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        n = e("assert"),
        o = (e("events").EventEmitter,
            e("./parse")),
        a = e("fs"),
        s = e("path"),
        l = e("./mkdir"),
        c = (l.sync, e("./winchars")),
        u = Symbol("onEntry"),
        d = Symbol("checkFs"),
        p = Symbol("makeFs"),
        h = Symbol("file"),
        f = Symbol("directory"),
        g = Symbol("link"),
        m = Symbol("symlink"),
        v = Symbol("hardlink"),
        b = Symbol("unsupported"),
        y = (Symbol("unknown"), Symbol("checkPath")),
        w = Symbol("mkdir"),
        x = Symbol("onError"),
        _ = Symbol("pending"),
        k = Symbol("pend"),
        S = Symbol("unpend"),
        E = Symbol("ended"),
        C = Symbol("maybeClose"),
        P = Symbol("skip"),
        O = function(e) {
            function t(t) {
                var i = e.call(this, t) || this;
                return t || (t = {}), i[_] = 0, i[E] = !1, i.on("end", function(e) {
                    i[E] = !0, i[C]()
                }), i.dirCache = t.dirCache || new Map, void 0 === t.preserveOwner ? i.preserveOwner = process.getuid && 0 === process.getuid() : i.preserveOwner = !!t.preserveOwner, i.win32 = !!t.win32 || "win32" === process.platform, i.newer = !!t.newer, i.keep = !!t.keep, i.noMtime = !!t.noMtime, i.preservePaths = !!t.preservePaths, i.unlink = !!t.unlink, i.cwd = s.resolve(t.cwd || process.cwd()), i.strip = +t.strip || 0, i.umask = "number" == typeof t.umask ? t.umask : process.umask(), i.dmode = t.dmode || 511 & ~i.umask, i.fmode = t.fmode || 438 & ~i.umask, i.on("entry", function(e) {
                    return i[u](e)
                }), i
            }
            return r(t, e), t.prototype[C] = function() {
                this[E] && 0 === this[_] && this.emit("close")
            }, t.prototype[y] = function(e) {
                if (this.strip) {
                    var t = e.path.split(/\/|\\/);
                    if (t.length < this.strip) return !1;
                    e.path = t.slice(this.strip).join("/")
                }
                if (!this.preservePaths) {
                    var i = e.path;
                    if (i.match(/(^|\/|\\)\.\.(\\|\/|$)/)) return this.warn("path contains '..'", i), !1;
                    if (s.win32.isAbsolute(i)) {
                        var r = s.win32.parse(i);
                        this.warn("stripping " + r.root + " from absolute path", i), e.path = i.substr(r.root.length)
                    }
                }
                if (this.win32) {
                    var r = s.win32.parse(e.path);
                    e.path = "" === r.root ? c.encode(e.path) : r.root + c.encode(e.path.substr(r.root.length))
                }
                return s.isAbsolute(e.path) ? e.absolute = e.path : e.absolute = s.resolve(this.cwd, e.path), !0
            }, t.prototype[u] = function(e) {
                if (!this[y](e)) return e.resume();
                switch (n.equal(typeof e.absolute, "string"), e.type) {
                    case "Directory":
                    case "GNUDumpDir":
                        e.mode && (e.mode = 448 | e.mode);
                    case "File":
                    case "OldFile":
                    case "ContiguousFile":
                    case "Link":
                    case "SymbolicLink":
                        return this[d](e);
                    case "CharacterDevice":
                    case "BlockDevice":
                    case "FIFO":
                        return this[b](e)
                }
            }, t.prototype[x] = function(e, t) {
                this.warn(e.message, e), this[S](), t.resume()
            }, t.prototype[w] = function(e, t, i) {
                l(e, {
                    preserve: this.preservePaths,
                    unlink: this.unlink,
                    cache: this.dirCache,
                    cwd: this.cwd,
                    mode: t
                }, i)
            }, t.prototype[h] = function(e) {
                var t = this,
                    i = 4095 & e.mode || this.fmode,
                    r = a.createWriteStream(e.absolute, {
                        mode: i
                    });
                r.on("error", function(i) {
                    return t[x](i, e)
                }), r.on("close", function(i) {
                    e.mtime && !t.noMtime && a.utimes(e.absolute, e.atime || new Date, e.mtime, function(e) {
                        return e
                    }), e.uid && t.preserveOwner && a.chown(e.absolute, e.uid, e.gid || process.getgid(), function(e) {
                        return e
                    }), t[S]()
                }), e.pipe(r)
            }, t.prototype[f] = function(e) {
                var t = this,
                    i = 4095 & e.mode || this.dmode;
                this[w](e.absolute, i, function(i) {
                    if (i) return t[x](i, e);
                    e.mtime && !t.noMtime && a.utimes(e.absolute, e.atime || new Date, e.mtime, function(e) {
                        return e
                    }), e.uid && t.preserveOwner && a.chown(e.absolute, e.uid, e.gid || process.getgid(), function(e) {
                        return e
                    }), t[S](), e.resume()
                })
            }, t.prototype[b] = function(e) {
                this.warn("unsupported entry type: " + e.type, e), e.resume()
            }, t.prototype[m] = function(e) {
                this[g](e, e.linkpath, "symlink")
            }, t.prototype[v] = function(e) {
                this[g](e, s.resolve(this.cwd, e.linkpath), "link")
            }, t.prototype[k] = function() {
                this[_]++
            }, t.prototype[S] = function() {
                this[_]--, this[C]()
            }, t.prototype[P] = function(e) {
                this[S](), e.resume()
            }, t.prototype[d] = function(e) {
                var t = this;
                this[k](), this[w](s.dirname(e.absolute), this.dmode, function(i) {
                    if (i) return t[x](i, e);
                    a.lstat(e.absolute, function(i, r) {
                        r && (t.keep || t.newer && r.mtime > e.mtime) ? t[P](e) : i || "File" === e.type && !t.unlink && r.isFile() ? t[p](null, e) : r.isDirectory() ? "Directory" === e.type ? e.mode && (4095 & r.mode) !== e.mode ? a.chmod(e.absolute, e.mode, function(i) {
                            return t[p](i, e)
                        }) : t[p](null, e) : a.rmdir(e.absolute, function(i) {
                            return t[p](i, e)
                        }) : a.unlink(e.absolute, function(i) {
                            return t[p](i, e)
                        })
                    })
                })
            }, t.prototype[p] = function(e, t) {
                if (e) return this[x](e, t);
                switch (t.type) {
                    case "File":
                    case "OldFile":
                    case "ContiguousFile":
                        return this[h](t);
                    case "Link":
                        return this[v](t);
                    case "SymbolicLink":
                        return this[m](t);
                    case "Directory":
                    case "GNUDumpDir":
                        return this[f](t)
                }
            }, t.prototype[g] = function(e, t, i) {
                var r = this;
                a[i](t, e.absolute, function(t) {
                    if (t) return r[x](t, e);
                    r[S](), e.resume()
                })
            }, t
        }(o),
        F = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return r(t, e), t.prototype[d] = function(e) {
                var t = this[w](s.dirname(e.absolute), this.dmode);
                if (t) return this[x](t, e);
                try {
                    var i = a.lstatSync(e.absolute);
                    if (this.keep || this.newer && i.mtime > e.mtime) return this[P](e);
                    if ("File" === e.type && !this.unlink && i.isFile()) return this[p](null, e);
                    try {
                        return i.isDirectory() ? "Directory" === e.type ? e.mode && (4095 & i.mode) !== e.mode && a.chmodSync(e.absolute, e.mode) : a.rmdirSync(e.absolute) : a.unlinkSync(e.absolute), this[p](null, e)
                    } catch (t) {
                        return this[x](t, e)
                    }
                } catch (t) {
                    return this[p](null, e)
                }
            }, t.prototype[h] = function(e) {
                var t = this,
                    i = 4095 & e.mode || this.fmode;
                try {
                    var r = a.openSync(e.absolute, "w", i);
                    e.on("data", function(e) {
                        return a.writeSync(r, e, 0, e.length, null)
                    }), e.on("end", function(i) {
                        if (e.mtime && !t.noMtime) try {
                            a.futimesSync(r, e.atime || new Date, e.mtime)
                        } catch (e) {}
                        if (e.uid && t.preserveOwner) try {
                            a.fchownSync(r, e.uid, e.gid || process.getgid())
                        } catch (e) {}
                        try {
                            a.closeSync(r)
                        } catch (i) {
                            t[x](i, e)
                        }
                    })
                } catch (t) {
                    this[x](t, e)
                }
            }, t.prototype[f] = function(e) {
                var t = 4095 & e.mode || this.dmode,
                    i = this[w](e.absolute, t);
                if (i) return this[x](i, e);
                if (e.mtime && !this.noMtime) try {
                    a.utimesSync(e.absolute, e.atime || new Date, e.mtime)
                } catch (i) {}
                if (e.uid && this.preserveOwner) try {
                    a.chownSync(e.absolute, e.uid, e.gid || process.getgid())
                } catch (i) {}
                e.resume()
            }, t.prototype[w] = function(e, t) {
                try {
                    return l.sync(e, {
                        preserve: this.preservePaths,
                        unlink: this.unlink,
                        cache: this.dirCache,
                        cwd: this.cwd,
                        mode: t
                    })
                } catch (e) {
                    return e
                }
            }, t.prototype[g] = function(e, t, i) {
                try {
                    a[i + "Sync"](t, e.absolute), e.resume()
                } catch (t) {
                    return this[x](t, e)
                }
            }, t
        }(O);
    O.Sync = F, i.exports = O
}), define("tar/lib/mkdir", ["require", "exports", "module", "mkdirp", "fs", "path"], function(e, t, i) {
    "use strict";
    var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
            };
            return function(t, i) {
                function r() {
                    this.constructor = t
                }
                e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }(),
        n = e("mkdirp"),
        o = e("fs"),
        a = e("path"),
        s = function(e) {
            function t(t, i) {
                var r = e.call(this, "Cannot extract through symbolic link") || this;
                return r.path = i, r.symlink = t, r
            }
            return r(t, e), Object.defineProperty(t.prototype, "name", {
                get: function() {
                    return "SylinkError"
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(Error),
        l = (i.exports = function(e, t, i) {
            var r = 448 | t.mode,
                o = t.preserve,
                s = t.unlink,
                c = t.cache,
                u = t.cwd,
                d = function(t) {
                    t || c.set(e, !0), i(t)
                };
            if (c && !0 === c.get(e) || e === u) return i();
            if (o) return n(e, r, d);
            var p = a.relative(u, e),
                h = p.split(/\/|\\/);
            l(u, h, r, c, s, d)
        }, function(e, t, i, r, n, a) {
            if (!t.length) return a();
            var s = t.shift(),
                u = e + "/" + s;
            if (r.get(u)) return l(u, t, i, r, n, a);
            o.mkdir(u, i, c(u, t, i, r, n, a))
        }),
        c = function(e, t, i, r, n, a) {
            return function(u) {
                u ? o.lstat(e, function(d, p) {
                    if (d) a(d);
                    else if (p.isDirectory()) l(e, t, i, r, n, a);
                    else if (n) o.unlink(e, function(s) {
                        if (s) return a(s);
                        o.mkdir(e, i, c(e, t, i, r, n, a))
                    });
                    else {
                        if (p.isSymbolicLink()) return a(new s(e, e + "/" + t.join("/")));
                        a(u)
                    }
                }) : l(e, t, i, r, n, a)
            }
        };
    i.exports.sync = function(e, t) {
        var i = 448 | t.mode,
            r = t.preserve,
            l = t.unlink,
            c = t.cache,
            u = t.cwd;
        if (!(c && !0 === c.get(e) || e === u)) {
            if (r) return n.sync(e, i), void c.set(e, !0);
            for (var d = a.relative(u, e), p = d.split(/\/|\\/), h = p.shift(), f = u; h && (f += "/" + h); h = p.shift())
                if (!c.get(f)) try {
                    o.mkdirSync(f, i), c.set(f, !0)
                } catch (e) {
                    var g = o.lstatSync(f);
                    if (g.isDirectory()) {
                        c.set(f, !0);
                        continue
                    }
                    if (l) {
                        o.unlinkSync(f), o.mkdirSync(f, i), c.set(f, !0);
                        continue
                    }
                    if (g.isSymbolicLink()) return new s(f, f + "/" + p.join("/"))
                }
            c.set(e, !0)
        }
    }
}), define("wget/lib/wget", ["require", "exports", "module", "http", "https", "tunnel", "url", "util", "fs", "events"], function(e, t, i) {
    "use strict";

    function r(e, t, i) {
        var r, s, l = new p;
        return i && (i = o("download", i)), r = u.parse(e), r.protocol = a(r.protocol), s = n({
            protocol: r.protocol,
            host: r.hostname,
            port: r.port,
            path: r.pathname,
            proxy: i ? i.proxy : void 0,
            method: "GET"
        }, function(e) {
            var i, r, n;
            200 === e.statusCode ? (n = 0, i = e.headers["content-length"], r = d.createWriteStream(t, {
                flags: "a",
                encoding: "binary"
            }), e.on("error", function(e) {
                r.end(), l.emit("error", e)
            }), e.on("data", function(e) {
                n += e.length, l.emit("progress", n / i), r.write(e)
            }), e.on("end", function() {
                r.end(), l.emit("end", t)
            })) : l.emit("error", "Server respond " + e.statusCode)
        }), s.end(), s.on("error", function(e) {
            l.emit("error", e)
        }), l
    }

    function n(e, t) {
        var i, r = {},
            n = {};
        if (e = o("request", e), "http" === e.protocol) {
            if (e.proxy) {
                for (i in e.proxy) "protocol" !== i && (n[i] = e.proxy[i]);
                if ("http" === e.proxy.protocol) e.agent = c.httpOverHttp({
                    proxy: n
                });
                else {
                    if ("https" !== e.proxy.protocol) throw e.proxy.protocol + " proxy is not supported!";
                    e.agent = c.httpOverHttps({
                        proxy: n
                    })
                }
            }
            for (i in e) "protocol" !== i && "proxy" !== i && (r[i] = e[i]);
            return s.request(r, t)
        }
        if ("https" === e.protocol) {
            if (e.proxy) {
                for (i in e.proxy) "protocol" !== i && (n[i] = e.proxy[i]);
                if ("http" === e.proxy.protocol) e.agent = c.httpsOverHttp({
                    proxy: n
                });
                else {
                    if ("https" !== e.proxy.protocol) throw e.proxy.protocol + " proxy is not supported!";
                    e.agent = c.httpsOverHttps({
                        proxy: n
                    })
                }
            }
            for (i in e) "protocol" !== i && "proxy" !== i && (r[i] = e[i]);
            return l.request(r, t)
        }
        throw "only allow http or https request!"
    }

    function o(e, t) {
        var i;
        return "download" === e ? (t.proxy && "string" == typeof t.proxy && (i = u.parse(t.proxy), t.proxy = {}, t.proxy.protocol = a(i.protocol), t.proxy.host = i.hostname, t.proxy.port = i.port, t.proxy.proxyAuth = i.auth, t.proxy.headers = {
            "User-Agent": "Node"
        }), t) : "request" === e ? (t.protocol || (t.protocol = "http"), t.protocol = a(t.protocol), t.proxy && "string" == typeof t.proxy && (i = u.parse(t.proxy), t.proxy = {}, t.proxy.protocol = a(i.protocol), t.proxy.host = i.hostname, t.proxy.port = i.port, t.proxy.proxyAuth = i.auth, t.proxy.headers = {
            "User-Agent": "Node"
        }), t) : void 0
    }

    function a(e) {
        return e.trim().toLowerCase().replace(/:$/, "")
    }
    var s = e("http"),
        l = e("https"),
        c = e("tunnel"),
        u = e("url"),
        d = (e("util"), e("fs")),
        p = e("events").EventEmitter;
    t.download = r, t.request = n
}), define("tunnel/lib/tunnel", ["require", "exports", "module", "net", "tls", "http", "https", "events", "assert", "util"], function(e, t, i) {
    "use strict";

    function r(e) {
        var t = new s(e);
        return t.request = d.request, t
    }

    function n(e) {
        var t = new s(e);
        return t.request = d.request, t.createSocket = l, t
    }

    function o(e) {
        var t = new s(e);
        return t.request = p.request, t
    }

    function a(e) {
        var t = new s(e);
        return t.request = p.request, t.createSocket = l, t
    }

    function s(e) {
        var t = this;
        t.options = e || {}, t.proxyOptions = t.options.proxy || {}, t.maxSockets = t.options.maxSockets || d.Agent.defaultMaxSockets, t.requests = [], t.sockets = [], t.on("free", function(e, i, r) {
            for (var n = 0, o = t.requests.length; n < o; ++n) {
                var a = t.requests[n];
                if (a.host === i && a.port === r) return t.requests.splice(n, 1), void a.request.onSocket(e)
            }
            e.destroy(), t.removeSocket(e)
        })
    }

    function l(e, t) {
        var i = this;
        s.prototype.createSocket.call(i, e, function(r) {
            var n = e.request.getHeader("host"),
                o = c({}, i.options, {
                    socket: r,
                    servername: n ? n.replace(/:.*$/, "") : e.host
                }),
                a = u.connect(0, o);
            i.sockets[i.sockets.indexOf(r)] = a, t(a)
        })
    }

    function c(e) {
        for (var t = 1, i = arguments.length; t < i; ++t) {
            var r = arguments[t];
            if ("object" == typeof r)
                for (var n = Object.keys(r), o = 0, a = n.length; o < a; ++o) {
                    var s = n[o];
                    void 0 !== r[s] && (e[s] = r[s])
                }
        }
        return e
    }
    var u = (e("net"), e("tls")),
        d = e("http"),
        p = e("https"),
        h = e("events"),
        f = e("assert"),
        g = e("util");
    t.httpOverHttp = r, t.httpsOverHttp = n, t.httpOverHttps = o, t.httpsOverHttps = a, g.inherits(s, h.EventEmitter), s.prototype.addRequest = function(e, t, i) {
        var r = this;
        if (r.sockets.length >= this.maxSockets) return void r.requests.push({
            host: t,
            port: i,
            request: e
        });
        r.createSocket({
            host: t,
            port: i,
            request: e
        }, function(n) {
            function o() {
                r.emit("free", n, t, i)
            }

            function a(e) {
                r.removeSocket(n), n.removeListener("free", o), n.removeListener("close", a), n.removeListener("agentRemove", a)
            }
            n.on("free", o), n.on("close", a), n.on("agentRemove", a), e.onSocket(n)
        })
    }, s.prototype.createSocket = function(e, t) {
        function i(e) {
            e.upgrade = !0
        }

        function r(e, t, i) {
            process.nextTick(function() {
                n(e, t, i)
            })
        }

        function n(i, r, n) {
            if (u.removeAllListeners(), r.removeAllListeners(), 200 === i.statusCode) f.equal(n.length, 0), m("tunneling connection has established"), a.sockets[a.sockets.indexOf(s)] = r, t(r);
            else {
                m("tunneling socket could not be established, statusCode=%d", i.statusCode);
                var o = new Error("tunneling socket could not be established, sutatusCode=" + i.statusCode);
                o.code = "ECONNRESET", e.request.emit("error", o), a.removeSocket(s)
            }
        }

        function o(t) {
            u.removeAllListeners(), m("tunneling socket could not be established, cause=%s\n", t.message, t.stack);
            var i = new Error("tunneling socket could not be established, cause=" + t.message);
            i.code = "ECONNRESET", e.request.emit("error", i), a.removeSocket(s)
        }
        var a = this,
            s = {};
        a.sockets.push(s);
        var l = c({}, a.proxyOptions, {
            method: "CONNECT",
            path: e.host + ":" + e.port,
            agent: !1
        });
        l.proxyAuth && (l.headers = l.headers || {}, l.headers["Proxy-Authorization"] = "Basic " + new Buffer(l.proxyAuth).toString("base64")), m("making CONNECT request");
        var u = a.request(l);
        u.useChunkedEncodingByDefault = !1, u.once("response", i), u.once("upgrade", r), u.once("connect", n), u.once("error", o), u.end()
    }, s.prototype.removeSocket = function(e) {
        var t = this.sockets.indexOf(e);
        if (-1 !== t) {
            this.sockets.splice(t, 1);
            var i = this.requests.shift();
            i && this.createSocket(i, function(e) {
                i.request.onSocket(e)
            })
        }
    };
    var m;
    m = process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG) ? function() {
        var e = Array.prototype.slice.call(arguments);
        "string" == typeof e[0] ? e[0] = "TUNNEL: " + e[0] : e.unshift("TUNNEL:"), console.error.apply(console, e)
    } : function() {}, t.debug = m
}), define("text!app/app.html", ["module"], function(e) {
    e.exports = '<template><require from="./app.css"></require><require from="./resources/elements/app-header"></require><require from="./resources/elements/sidebar.html"></require><div class="app-layout"><app-header></app-header><div class="app-bottom"><sidebar></sidebar><div class="app-content"><router-view></router-view></div></div></div></template>'
}), define("text!app/disclaimer-dialog.html", ["module"], function(e) {
    e.exports = '<template><require from="./disclaimer-dialog.css"></require><div class="disclaimer-dialog"><div class="agreement">Using this application and its services may violate the Xbox LIVE Terms of Use, corrupt your saved game data, or incur bandwith or other network-related fees as a result of transferring saved game data and downloading editors. By continuing, you agree that Vantage and its creators are not responsible for anything that happens to your Microsoft account, your Xbox account, your computer, your saved game files, or anything else as a direct or indirect result of using this application.<br><br>Vantage is not affiliated with or endorsed by Microsoft or Xbox.</div><div class="actions"><button class="exit-button" click.delegate="exit()">Exit</button> <button class="agree-button" click.delegate="agree()">Agree</button></div></div></template>'
}), define("text!app/app.css", ["module"], function(e) {
    e.exports = '@import url(../static/fonts/lato/lato.css);@import url(../static/fonts/gotham/gotham.css);.hide{display:none !important}.clearfix:after{content:"";display:block;clear:both}.ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}body{margin:0;padding:0;width:100%;overflow:hidden}*{cursor:default;box-sizing:border-box;-webkit-user-select:none;font-family:Lato}a,img{-webkit-user-drag:none}a,a *,button,button *{cursor:pointer;outline:none}input[type=text],input[type=password]{cursor:initial}.app-layout{width:100vw;height:100vh;display:flex;flex-direction:column}.app-layout app-header{flex:0}.app-layout .app-bottom{flex:1;display:flex;flex-direction:row}.app-layout .app-bottom sidebar{flex:0}.app-layout .app-bottom .app-content{flex:1;position:relative;min-width:0}.app-layout .app-bottom .app-content router-view{display:block;width:100%;height:100%;overflow-y:hidden;position:relative;background-color:#EFF1F3}ai-dialog-overlay{background:transparent;opacity:1 !important}ai-dialog-container{overflow:hidden}ai-dialog-container{overflow:hidden;background:rgba(0,0,0,0.5)}ai-dialog-container>div{animation:dialog-zoom 0.4s ease-out}@keyframes dialog-fade{from{opacity:0}to{opacity:1}}@keyframes dialog-zoom{0%{opacity:0;transform:scale(0)}70%{opacity:1;transform:scale(1.02)}100%{transform:scale(1)}}\n'
}), define("text!app/constants.css", ["module"], function(e) {
    e.exports = ""
}), define("text!app/install-dialog.html", ["module"], function(e) {
    e.exports = '<template><require from="./install-dialog.css"></require><div class="install-dialog"><button class="close-button" click.delegate="close()"><inline-svg src="icons/close.svg"></inline-svg></button><section if.bind="!fetching && !editor"><div class="install-url"><form submit.delegate="fetchEditor(editorUrl)"><input type="text" value.bind="editorUrl" placeholder="github:username/repo"> <button disabled.bind="!editorUrl">Install</button></form></div><div class="actions"><a external-href="https://www.thetechgame.com/Forums/f=312/prefix=vantage/xbox-forum.html" class="ttg">Browse on TTG</a> <a external-href="https://github.com/vantagemods/editor-skeleton">Create an Editor</a> <button class="install-button install-local-button"><label><input type="file" webkitdirectory files.bind="editorPath" change.delegate="installLocalEditor()"> <span>Install Local Editor</span></label></button></div></section><section if.bind="fetching" class="loading"><status-ring></status-ring></section><section if.bind="!fetching && editor" class="install"><img src.bind="editor.thumbnailUrl"><div class="info"><h1 class="title">${editor.game}</h1><h2>${editor.name} by ${editor.author}</h2><button if.bind="!installed" class="install-button ${installing ? \'installing\' : \'\'}" click.delegate="installEditor(editor.provider, editor.locator)">${installing ? \'Installing\' : \'Install Editor\'}<status-ring if.bind="installing"></status-ring></button> <button if.bind="installed && !editor.official" class="install-button" click.delegate="uninstallEditor(editor)">Uninstall<status-ring if.bind="installing"></status-ring></button> <button if.bind="editor.homepage" class="install-button" click.delegate="openHomepage(editor)">Homepage</button></div></section></div></template>'
}), define("text!app/disclaimer-dialog.css", ["module"], function(e) {
    e.exports = ".disclaimer-dialog{width:500px;padding:25px;border-radius:3px;background-color:#f2f2f2}.disclaimer-dialog .agreement{padding-bottom:20px;font-size:14px;line-height:1.4;color:#0C272C;text-align:justify;letter-spacing:0.75px;font-weight:300}.disclaimer-dialog .actions{width:100%;height:40px;display:flex}.disclaimer-dialog .actions button{display:inline;position:relative;text-align:center;border-radius:3px;border:0;font-weight:900;font-size:12px;color:#fff;letter-spacing:0.5px;transition:box-shadow 0.3s}.disclaimer-dialog .actions button,.disclaimer-dialog .actions button *{cursor:pointer}.disclaimer-dialog .actions button.exit-button{flex:1;background-image:linear-gradient(-133deg, #d74921 0%, #e6461a 100%)}.disclaimer-dialog .actions button.exit-button:hover{box-shadow:0 0 10px rgba(215,73,33,0.8)}.disclaimer-dialog .actions button.agree-button{flex:2;margin-left:10px;background-image:linear-gradient(-133deg, #27B54F 0%, #63BF70 100%)}.disclaimer-dialog .actions button.agree-button:hover{box-shadow:0 0 10px rgba(39,181,79,0.8)}\n"
}), define("text!app/update-dialog.html", ["module"], function(e) {
    e.exports = '<template><require from="./update-dialog.css"></require><div class="update-dialog"><div class="message">A new version of Vantage is available!</div><div class="actions"><button class="cancel-button" click.delegate="controller.cancel()">No Thanks</button> <button class="download-button" click.delegate="downloadNow()">Download Now</button></div></div></template>'
}), define("text!app/install-dialog.css", ["module"], function(e) {
    e.exports = '.hide{display:none !important}.clearfix:after,.install-dialog section.install:after{content:"";display:block;clear:both}.ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.install-dialog{width:450px;height:155px;padding:25px;border-radius:3px;background-color:#fff;color:#0C272C;position:relative}.install-dialog h1{font-weight:bold;font-size:18px;color:#0C272C;letter-spacing:1px;margin-top:25px}.install-dialog h1:first-child{margin-top:0}.install-dialog h2{font-weight:normal;font-size:18px;color:#0C272C;letter-spacing:1px}.install-dialog .close-button{border:none;background:transparent;position:absolute;right:10px;top:10px}.install-dialog .close-button svg *{fill:#0C272C}.install-dialog section.loading{text-align:center;margin-top:32px}.install-dialog section.loading h1{margin-bottom:0}.install-dialog section.install img{width:105px;height:105px;float:left;margin-right:20px;border-radius:3px}.install-dialog section.install .info{float:left;margin-top:5px;width:275px}.install-dialog section.install h1{margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.install-dialog section.install h2{margin:2px 0 15px 0;font-size:11px}.install-dialog a,.install-dialog .install-button{display:inline-block;background:transparent;border-radius:3px;height:40px;font-weight:900;font-size:12px;color:#39AF45;letter-spacing:0.5px;line-height:40px;padding:0 13px;border:1px solid #39AF45;transition:background 0.15s, color 0.15s;cursor:pointer;text-decoration:none;margin-right:12px}.install-dialog a.ttg,.install-dialog .install-button.ttg{background:#31B24A;color:#fff}.install-dialog a.ttg:hover,.install-dialog .install-button.ttg:hover{background:#37c652;border-color:#37c652}.install-dialog a:hover,.install-dialog .install-button:hover{background:#39AF45;color:#fff}.install-dialog .install-button status-ring{width:20px;height:20px;margin-left:10px;margin-top:10px;float:right}.install-dialog .install-button status-ring svg{width:20px;height:20px}.install-dialog .install-button status-ring svg *{stroke:#fff}.install-dialog .install-button.installing{background:#39AF45;color:#fff}.install-dialog .install-button.installing,.install-dialog .install-button.installing *{cursor:default}.install-dialog .actions{display:flex;flex-direction:horizontal}.install-dialog .install-local-button{padding:0;margin-right:0}.install-dialog .install-local-button label{display:block;padding:0 13px}.install-dialog .install-local-button input{display:none}.install-dialog .install-url{position:relative;margin-bottom:20px;margin-top:3px}.install-dialog .install-url input{line-height:40px;border-radius:0;border:0;width:100%;display:block;padding:0 10px;outline:none;border-bottom:2px solid #39AF45;font-size:16px}.install-dialog .install-url input,.install-dialog .install-url input::placeholder{font-weight:900;font-size:22.4px;color:#fff;letter-spacing:0.93px}.install-dialog .install-url button{position:absolute;top:8px;right:0;width:70px;height:25px;cursor:pointer;display:block;border-radius:3px;background:#39AF45;border:0;transition:background 0.15s;font-weight:900;font-size:11px;color:#fff;letter-spacing:0.5px;padding-top:2px}.install-dialog .install-url button:disabled{cursor:default;opacity:0.5}.install-dialog .install-url button:hover:not([disabled]){background:#54c760}\n'
}), define("text!auth/auth-dialog.html", ["module"], function(e) {
    e.exports = '<template><require from="./auth-dialog.css"></require><div class="auth-dialog"><webview preload="./auth-bridge.js" class="auth-frame" autosize="on" minwidth="500" minheight="310" partition="persist:auth" disablewebsecurity ref="frame"></webview></div></template>'
}), define("text!app/update-dialog.css", ["module"], function(e) {
    e.exports = ".update-dialog{width:400px;padding:25px;border-radius:3px;background-color:#f2f2f2}.update-dialog .message{padding-bottom:20px;font-size:14px;line-height:1.4;color:#0C272C;text-align:center;letter-spacing:0.75px;font-weight:500}.update-dialog .actions{width:100%;height:40px;display:flex}.update-dialog .actions button{display:inline;position:relative;text-align:center;border-radius:3px;border:0;font-weight:900;font-size:12px;color:#fff;letter-spacing:0.5px;transition:box-shadow 0.3s}.update-dialog .actions button,.update-dialog .actions button *{cursor:pointer}.update-dialog .actions button.cancel-button{flex:1;background-image:linear-gradient(-133deg, #d74921 0%, #e6461a 100%)}.update-dialog .actions button.cancel-button:hover{box-shadow:0 0 10px rgba(215,73,33,0.8)}.update-dialog .actions button.download-button{flex:2;margin-left:10px;background-image:linear-gradient(-133deg, #27B54F 0%, #63BF70 100%)}.update-dialog .actions button.download-button:hover{box-shadow:0 0 10px rgba(39,181,79,0.8)}\n"
}), define("text!editor/editor.html", ["module"], function(e) {
    e.exports = '<template><require from="./editor.css"></require><div class="editor"><div class="editor-header"><div class="thumbnail"><img src.bind="editorInfo.thumbnailUrl"></div><div click.delegate="manage()" class="title">${editorInfo.game}<div class="editor-name">${editorInfo.name} by ${editorInfo.author}</div></div><div if.bind="auth.gamercard && editorInitialized" class="actions"><div class="select ${fileSelectorOpen ? \'open\' : \'\'}" close-if-click-outside.two-way="fileSelectorOpen"><div class="value-wrapper"><div class="value" click.delegate="toggleFileSelector()">${selectedFile ? selectedFile.name : \'Select a file...\'}</div><i class="select-arrow"><inline-svg src="icons/caret-down.svg"></inline-svg></i></div><div class="dropdown"><div class="column cloud"><header><img src="static/images/cloud-saves.svg"> <span>Cloud Saves</span> <button if.bind="!status" click.delegate="refreshCloudFiles()" class="right">Refresh</button></header><div class="loading" if.bind="status === \'reading\'"><status-ring></status-ring></div><div class="empty" if.bind="cloudContainers.length === 0 && status !== \'reading\'">No saves found</div><div class="container" repeat.for="container of cloudContainers"><header><span>${container.name}</span> <span>${container.size | byteFormat} <span class="bullet">•</span> ${container.modifiedAt | relativeTime}</span></header><div repeat.for="file of container.files"><button class="file ${file == selectedFile ? \'selected\' : \'\'}" click.delegate="loadCloudSave(file)"><div class="name">${file.name}</div><div class="meta">${file.size | byteFormat}</div></button></div></div></div><div class="column local"><header><img src="static/images/local-saves.svg"> <span>Local Saves</span> <button click.delegate="openLocalFile()" class="right">Open</button></header><div class="empty" if.bind="localFiles.length === 0">No history</div><div class="container"><header><span>Recent</span> <span if.bind="localFiles.length > 0"><a href="#" click.delegate="clearLocalSaves()">Clear</a></span></header><template repeat.for="file of localFiles | sort:\'lastUsed\' | reverse"><button class="file ${file == selectedFile ? \'selected\' : \'\'}" click.delegate="loadLocalSave(file)"><div class="info"><div class="name">${file.path | limitPath:50}</div><div class="meta">${file.size | byteFormat} <span class="bullet">•</span> ${file.lastUsed | relativeTime}</div></div><div class="actions"><a href="#" click.delegate="removeLocalSave(file, $event)"><i><inline-svg src="icons/close.svg"></inline-svg></i></a></div></button></template></div></div></div></div><button disabled.bind="!editorLoaded" class="action-button" click.trigger="save()">Save</button></div><div if.bind="!auth.gamercard" class="actions"><button class="action-button" click.trigger="auth.signIn()">Sign In</button></div></div><div class="categories"><webview class="editor-frame" ref="frame" focus.trigger="editorFocused($event)" partition.bind="editorInfo.partition" preload="./editor-bridge.js" src="${editorLocation}/index.html"></webview></div></div><status-tip if.bind="status === \'loading\'" title="Downloading..." message="Downloading your saved game file..."></status-tip><status-tip if.bind="status === \'saving\'" title="Syncing..." message="Hang tight, we\'re syncing your changes..."></status-tip></template>'
}), define("text!app/utilities.css", ["module"], function(e) {
    e.exports = '.hide{display:none !important}.clearfix:after{content:"";display:block;clear:both}.ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\n'
}), define("text!welcome/welcome.html", ["module"], function(e) {
    e.exports = '<template><require from="./welcome.css"></require><section class="welcome"><div if.bind="!auth.gamercard" class="sign-in"><h1>Sign in to your Xbox account</h1><button click.trigger="auth.signIn()">Sign In</button><h3>Your information is safe.<br>Nothing is stored on our servers</h3></div><div if.bind="auth.gamercard" class="welcome"><img src.bind="auth.gamercard.gamerpicUrl"><h1>Welcome, ${auth.gamercard.gamertag}</h1><h3><img src="static/images/welcome-arrow.svg" class="arrow"> Select a game to start modding</h3></div></section></template>'
}), define("text!auth/auth-dialog.css", ["module"], function(e) {
    e.exports = ".auth-dialog{padding:30px 40px;border-radius:3px;background-color:#f2f2f2}.auth-dialog .auth-frame{width:475px;height:310px;background-color:#f2f2f2;border:none}\n"
}), define("text!resources/elements/close-button.html", ["module"], function(e) {
    e.exports = '<template><i><inline-svg src="icons/close.svg"></inline-svg></i></template>'
}), define("text!resources/elements/number-input.html", ["module"], function(e) {
    e.exports = '<template class="${disabled ? \'disabled\' : \'\'}"><button click.delegate="subtract()" class="decrement">-</button> <input type="number" value.bind="value"> <button click.delegate="add()" class="increment">+</button></template>'
}), define("text!editor/editor.css", ["module"], function(e) {
    e.exports = '.hide{display:none !important}.clearfix:after{content:"";display:block;clear:both}.ellipsis,.editor .editor-header .title,.editor .editor-header .actions .select .value,.editor .editor-header .actions .select .dropdown .container>header>span,.editor .editor-header .actions .select .dropdown .container .file .name{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.editor{position:relative;display:flex;flex-direction:column;height:100%}.editor .editor-header{display:flex;flex-direction:row;align-items:center;height:72px;background:#31B24A}.editor .editor-header .thumbnail{flex:0;align-self:center}.editor .editor-header .thumbnail img{margin:0 24px;width:40px;height:40px}.editor .editor-header .title{flex:1;font-weight:bold;font-size:16px;color:#fff;letter-spacing:1px;cursor:pointer}.editor .editor-header .title .editor-name{padding-top:5px;font-weight:200;font-size:11px;cursor:pointer}.editor .editor-header .actions{flex:0;white-space:nowrap;display:flex;padding:0 24px}.editor .editor-header .actions .refresh-button{width:30px}.editor .editor-header .actions .refresh-button i{cursor:pointer;display:inline-block;margin-top:7px}.editor .editor-header .actions .refresh-button i *{cursor:pointer}.editor .editor-header .actions .refresh-button i:hover svg *{fill:#79e297;transition:fill 0.15s}.editor .editor-header .actions .action-button{height:30px;padding:0 20px;margin-left:16px;border:0;background:#0C272C;border-radius:3px;font-weight:900;font-size:12px;color:#fff;letter-spacing:0.5px;line-height:16.67px;transition:background 0.15s}.editor .editor-header .actions .action-button:hover{background:#174b54}.editor .editor-header .actions .action-button:disabled{cursor:not-allowed;background:#0C272C}.editor .editor-header .actions .no-saves{color:#fff;font-weight:300;font-size:14px;line-height:30px}.editor .editor-header .actions .select{display:inline-block;width:186px;height:30px}.editor .editor-header .actions .select .value-wrapper{position:relative}.editor .editor-header .actions .select .value-wrapper,.editor .editor-header .actions .select .value-wrapper *{cursor:pointer}.editor .editor-header .actions .select .value-wrapper:hover .value{background:#071E22;color:#fff}.editor .editor-header .actions .select .value-wrapper:hover .select-arrow svg *{fill:#526173}.editor .editor-header .actions .select .value{height:30px;width:100%;padding:0 16px;font-size:12px;color:#02394A;letter-spacing:0.5px;line-height:30px;background:#fff;padding-right:40px;border-radius:3px}.editor .editor-header .actions .select .select-arrow{pointer-events:none;position:absolute;right:10px;top:3px}.editor .editor-header .actions .select .select-arrow svg *{fill:#526173}.editor .editor-header .actions .select .dropdown{display:flex;position:absolute;left:24px;top:64px;right:24px;min-height:135px;max-height:calc(100% - 64px - 24px);z-index:2;background:#0C272C;border-radius:3px;visibility:hidden;opacity:0;overflow:hidden;transition:opacity 0.3s, visibility 0s linear 0.3s}.editor .editor-header .actions .select .dropdown .column{width:50%;float:left;position:relative;display:flex;flex-direction:column;padding-bottom:10px}.editor .editor-header .actions .select .dropdown .column:first-child{border-right:1px solid #485D60}.editor .editor-header .actions .select .dropdown .column .right{float:right}.editor .editor-header .actions .select .dropdown .column .loading{position:absolute;left:50%;top:calc(50% + 24px);transform:translate(-50%, -50%)}.editor .editor-header .actions .select .dropdown .column .empty{font-family:Lato;font-weight:900;font-size:9px;color:#fff;letter-spacing:0.38px;line-height:12.5px;position:absolute;left:50%;top:calc(50% + 24px);transform:translate(-50%, -50%)}.editor .editor-header .actions .select .dropdown .column>header{height:48px;background:#071E22;line-height:44px;padding:0 16px}.editor .editor-header .actions .select .dropdown .column>header>span{font-family:Lato;font-weight:900;font-size:10px;color:#4B6469;letter-spacing:2px;text-transform:uppercase}.editor .editor-header .actions .select .dropdown .column>header img{vertical-align:middle;margin-right:8px}.editor .editor-header .actions .select .dropdown .column>header>button{border-radius:2.25px;background:#103137;font-family:Lato;font-weight:900;font-size:9px;color:#fff;letter-spacing:0.38px;line-height:24px;height:24px;border:0;padding:0 16px;margin-top:12px;transition:background 0.15s}.editor .editor-header .actions .select .dropdown .column>header>button:hover{background:#16434b}.editor .editor-header .actions .select .dropdown .container{padding:0 16px;flex:1;overflow-y:auto}.editor .editor-header .actions .select .dropdown .container::-webkit-scrollbar{background-color:#142328;width:10px;box-shadow:inset 2px 2px 5px 0px rgba(0,0,0,0.3)}.editor .editor-header .actions .select .dropdown .container::-webkit-scrollbar-thumb:window-inactive,.editor .editor-header .actions .select .dropdown .container::-webkit-scrollbar-thumb{background:#295666}.editor .editor-header .actions .select .dropdown .container::-webkit-scrollbar-thumb:window-inactive:hover,.editor .editor-header .actions .select .dropdown .container::-webkit-scrollbar-thumb:hover{background:#306578}.editor .editor-header .actions .select .dropdown .container>header{padding:10px 0 7px 0;display:flex}.editor .editor-header .actions .select .dropdown .container>header>span{height:12px}.editor .editor-header .actions .select .dropdown .container>header>span:first-child{padding-right:5px;flex:1}.editor .editor-header .actions .select .dropdown .container>header,.editor .editor-header .actions .select .dropdown .container>header a{font-family:"Lato";font-weight:bold;font-size:9px;color:#485D60;line-height:12px;letter-spacing:1px;text-decoration:none}.editor .editor-header .actions .select .dropdown .container>header a:hover{text-decoration:underline}.editor .editor-header .actions .select .dropdown .container .file{display:block;width:100%;height:40px;background:#103137;border:1px solid #194249;border-radius:3px;margin-bottom:8px;padding:8px 16px;text-align:left;transition:background 0.15s}.editor .editor-header .actions .select .dropdown .container .file .name{font-family:Lato;font-size:10px;color:#fff;letter-spacing:0.5px;line-height:12px;margin-bottom:2px}.editor .editor-header .actions .select .dropdown .container .file .meta{font-family:Lato;font-weight:bold;font-size:9px;color:#485D60;letter-spacing:1px}.editor .editor-header .actions .select .dropdown .container .file:hover,.editor .editor-header .actions .select .dropdown .container .file.selected{background:#16434b}.editor .editor-header .actions .select .local .container{min-height:77px}.editor .editor-header .actions .select .local .container>header{text-transform:uppercase}.editor .editor-header .actions .select .local .container .file{display:flex;flex-direction:row}.editor .editor-header .actions .select .local .container .file .info{flex:1}.editor .editor-header .actions .select .local .container .file .actions{padding:4px 0 0 0}.editor .editor-header .actions .select .local .container .file .actions svg{width:10px;height:10px}.editor .editor-header .actions .select .local .container .file .actions svg *{fill:rgba(255,255,255,0.5);transition:fill 0.15s}.editor .editor-header .actions .select .local .container .file .actions a:hover svg *{fill:#fff}.editor .editor-header .actions .select.open .dropdown{opacity:1;visibility:visible;transition-delay:0s}.editor .categories{height:100%;flex:1}.editor .categories .editor-frame{height:100%}\n'
}), define("text!resources/elements/progress-bar.html", ["module"], function(e) {
    e.exports = '<template bindable="progress"><div class="value" css.bind="{width: (progress * 100) +\'%\'}"></div></template>'
}), define("text!welcome/welcome.css", ["module"], function(e) {
    e.exports = "section.welcome{position:relative;width:100%;height:100%;display:flex;align-items:center}section.welcome .sign-in,section.welcome .welcome{text-align:center;margin:0 auto}section.welcome .sign-in h1{font-weight:bold;font-size:20px;color:#0C272C;letter-spacing:1px}section.welcome .sign-in h3{opacity:0.5;font-size:12px;color:#0C272C;letter-spacing:0.5px}section.welcome .sign-in button{border-radius:5.6px;background-image:linear-gradient(-133deg, #27B54F 0%, #63BF70 100%);font-weight:900;font-size:22.4px;color:#fff;letter-spacing:0.93px;width:133px;height:56px;border:none;transition:filter 0.15s}section.welcome .sign-in button:hover{filter:brightness(110%)}section.welcome .welcome img{width:125px;height:125px;border-radius:50%}section.welcome .welcome h1{margin:20px 0 0 0;font-weight:bold;font-size:31.25px;color:#39AF45;letter-spacing:0.78px}section.welcome .welcome h3{margin:7px 0 0 0;opacity:0.75;font-size:21.88px;color:#0C272C;letter-spacing:0.78px;position:relative}section.welcome .welcome h3 .arrow{position:absolute;right:100%;top:50%;transform:translate(0, -50%);width:calc()}\n"
}), define("text!resources/elements/range-input.html", ["module"], function(e) {
    e.exports = '<template bindable="value, min, max, step, disabled" class="${disabled ? \'disabled\' : \'\'}"><input type="range" min.bind="min" max.bind="max" step.bind="step" value.bind="value"><label>${value || 0}</label></template>'
}), define("text!resources/elements/status-ring.css", ["module"], function(e) {
    e.exports = "status-ring{position:relative;width:38px;height:38px;transform-origin:50% 50%;animation:status-ring-rotate 1s linear infinite;display:inline-block}status-ring svg{width:100%;height:100%;position:absolute;left:0;top:0}status-ring path{animation:status-ring-dash 4s infinite ease-in-out;stroke-dasharray:100}\n"
}), define("text!resources/elements/selection-input.html", ["module"], function(e) {
    e.exports = '<template class="${opened ? \'opened\' : \'\'} ${disabled ? \'disabled\' : \'\'}"><div click.delegate="open()" class="selection-value">${value || \'---\'}</div><ul class="selection-options"><li repeat.for="option of options" click.delegate="setValue(option)">${option}</li></ul></template>'
}), define("text!resources/elements/status-tip.css", ["module"], function(e) {
    e.exports = "status-tip{position:absolute;left:50%;bottom:0;z-index:2;transform:translate(-50%, 100%);padding:18px;width:280px;background:#fff;border-top-left-radius:6px;border-top-right-radius:6px;border:1px solid #D9E2EB;font-family:Lato-Regular;font-size:10px;color:rgba(16,49,55,0.5);letter-spacing:0.5px;transform:translate(-50%, 0);transition-delay:0s}status-tip strong{display:block;font-weight:900;font-size:14px;color:#02394A;letter-spacing:0.5px;margin-bottom:7px}status-tip .status-ring{float:left;margin-right:18px;display:block}@keyframes status-ring-dash{0%{stroke-dashoffset:100}50%{stroke-dashoffset:25}100%{stroke-dashoffset:100}}@keyframes status-ring-rotate{to{transform:rotate(360deg)}}\n"
}), define("text!resources/elements/status-ring.html", ["module"], function(e) {
    e.exports = '<template><require from="./status-ring.css"></require><inline-svg src="spinner.svg"></inline-svg></template>'
}), define("text!app/resources/elements/app-header.css", ["module"], function(e) {
    e.exports = "app-header{display:block;background:#001011;width:100%;height:56px;-webkit-app-region:drag}app-header .sizer{position:absolute;width:100%;height:6px;-webkit-app-region:no-drag}app-header img{width:118px;height:27px;margin:14.5px 24px}app-header window-controls{float:right;margin:21px;-webkit-app-region:no-drag}\n"
}), define("text!resources/elements/status-tip.html", ["module"], function(e) {
    e.exports = '<template bindable="title,message"><require from="./status-tip.css"></require><div class="status-ring"><status-ring></status-ring></div><div><strong>${title}</strong> ${message}</div></template>'
}), define("text!app/resources/elements/donation.css", ["module"], function(e) {
    e.exports = '.hide{display:none !important}.clearfix:after,donation .goal:after{content:"";display:block;clear:both}.ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}donation{display:block;width:100%;padding:16px 24px;background:#0C272C}donation .goal .label{font-size:11px;color:#fff;letter-spacing:0.5px;float:left}donation .goal .value{font-weight:bold;font-size:11px;color:#39AF45;float:right}donation .goal .value .slash{color:#275B65}donation .goal .value .total{color:#fff}donation .progress{width:100%;height:7px;border-radius:3.5px;background:#103137;margin:10px 0 16px 0}donation .progress .value{height:7px;border-radius:3.5px;background:#40AC3F;transition:width 0.5s}donation button{display:block;width:100%;height:40px;position:relative;text-align:center;background-image:linear-gradient(-133deg, #d74921 0%, #e6461a 100%);border-radius:3px;border:0;font-weight:900;font-size:12px;color:#fff;letter-spacing:0.5px;transition:box-shadow 0.3s;line-height:40px}donation button img{float:left;margin:9px 10px;width:20px;height:20px;vertical-align:middle}donation button,donation button *{cursor:pointer}donation button:after{content:"";width:40px;height:40px;background:url(static/images/icons/caret-right.svg) 25px center no-repeat;display:inline-block;float:right}donation button:hover{box-shadow:0 0 10px rgba(215,73,33,0.8)}\n'
}), define("text!app/resources/elements/app-header.html", ["module"], function(e) {
    e.exports = '<template><require from="./app-header.css"></require><require from="./window-controls"></require><div class="sizer"></div><img src="static/images/logo.svg"><window-controls></window-controls></template>'
}), define("text!app/resources/elements/donation.html", ["module"], function(e) {
    e.exports = '<template><require from="./donation.css"></require><button click.delegate="visit()"><img src="static/images/patreon-logo.svg"> Donate on Patreon</button></template>'
}), define("text!app/resources/elements/games.css", ["module"], function(e) {
    e.exports = '.hide{display:none !important}.clearfix:after{content:"";display:block;clear:both}.ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}games{display:flex;flex-flow:column;width:100%}games header{display:flex;justify-content:center;align-content:center;flex-direction:column;height:24px;background:#103137;padding-left:24px;font-weight:900;font-size:10px;color:rgba(255,255,255,0.25);letter-spacing:2px;text-transform:uppercase}games .games{flex:1;overflow-y:auto}games .games::-webkit-scrollbar{background-color:transparent;width:10px;box-shadow:inset 2px 2px 5px 0px rgba(0,0,0,0.3)}games .games::-webkit-scrollbar-thumb:window-inactive,games .games::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.25)}games .games::-webkit-scrollbar-thumb:window-inactive:hover,games .games::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,0.25)}games .add-game-button{cursor:pointer;display:block;margin:20px auto;width:40px;height:40px;border-radius:50%;background:#103137;border:0;transition:background 0.15s}games .add-game-button svg{width:18px;height:18px;margin:auto;display:block}games .add-game-button svg *{fill:#fff}games .add-game-button:hover{background:#1b545f}games .game{position:relative;display:block;height:60px;position:relative;background:#071E22;border-bottom:1px solid #103137;font-weight:bold;font-size:12px;color:#fff;letter-spacing:0.5px;text-decoration:none;padding-right:24px}games .game:before{content:"";display:block;position:absolute;left:0;top:50%;bottom:50%;width:4px;background:#39AF45;z-index:1;opacity:0;transition:top 0.3s, bottom 0.3s, opacity 0.15s}games .game:hover:before,games .game.highlight:before{top:0;bottom:0;opacity:1}games .game img{width:33px;height:33px;margin:13px 16px 13px 24px;float:left}games .game .label{padding-top:14px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}games .game .label .editor-name{font-size:10px;font-weight:200;padding-top:5px}games .game>div{opacity:0.5;transition:opacity 0.15s}games .game:hover>div,games .game.highlight>div{opacity:1}\n'
}), define("text!app/resources/elements/games.html", ["module"], function(e) {
    e.exports = '<template><require from="./games.css"></require><header>Mods</header><div class="games"><a repeat.for="editor of editorManager.editors | sort:\'game\'" route-href="route: editor; params.bind: {id: editor.id}" class="game ${router.currentInstruction.config.name === \'editor\' && router.currentInstruction.params.id == editor.id ? \'highlight\' : \'\'}"><div><img src.bind="editor.thumbnailUrl" style="width:32px"><div class="label">${editor.game}<div class="editor-name">${editor.provider === \'disk\' ? \'Local Project\' : editor.name}</div></div></div></a><button class="add-game-button" click.delegate="addGame()"><inline-svg src="icons/plus.svg"></inline-svg></button></div></template>'
}), define("text!app/resources/elements/profile.css", ["module"], function(e) {
    e.exports = '.hide{display:none !important}.clearfix:after,profile .profile:after{content:"";display:block;clear:both}.ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}profile{display:block;width:100%;background:#0C272C;position:relative}profile .profile{display:block;padding:16px 24px}profile .profilea{cursor:pointer}profile .profilea *{cursor:pointer}profile .profile img{width:40px;height:40px;border-radius:20px;margin-right:16px;float:left}profile .profile .info{float:left;height:40px}profile .profile .gamertag{display:block;font-weight:bold;font-size:14px;color:#fff;letter-spacing:0.5px}profile .profile .gamerscore{display:block;margin-top:7px;line-height:13px;padding-left:20px;font-weight:900;font-size:9.6px;color:#39AF45;letter-spacing:0.8px;background:url(../../../static/images/gamerscore-icon.svg) center left no-repeat}profile .signout{background:transparent;border:none;position:absolute;right:24px;top:50%;transform:translate(0, -50%);z-index:1}profile .signout svg *{fill:#485D60;transition:fill 0.15s}profile .signout:hover svg *{fill:#fff}\n'
}), define("text!app/resources/elements/sidebar.css", ["module"], function(e) {
    e.exports = "sidebar{display:flex;flex-flow:column;width:280px;min-width:280px;height:calc(100vh - 56px);background:#071E22;position:relative}sidebar games{position:relative;left:0;height:100%}sidebar support{padding-bottom:0px}\n"
}), define("text!app/resources/elements/profile.html", ["module"], function(e) {
    e.exports = '<template><require from="./profile.css"></require><div if.bind="auth.gamercard" class="profile"><img src.bind="auth.gamercard.gamerpicUrl"><div class="info"><span class="gamertag">${auth.gamercard.gamertag}</span> <span class="gamerscore">${auth.gamercard.gamerscore | numberWithCommas}</span></div><button class="signout" click.trigger="signOut()"><i><inline-svg src="icons/power.svg"></inline-svg></i></button></div><a if.bind="!auth.gamercard" route-href="route: default" class="profile"><div class="info"><span class="gamertag">Guest</span> <span class="gamerscore">0</span></div></a></template>'
}), define("text!app/resources/elements/sidebar.html", ["module"], function(e) {
    e.exports = '<template><require from="./sidebar.css"></require><require from="./profile"></require><require from="./games"></require><require from="./support"></require><require from="./donation"></require><require from="./storage-explorer"></require><profile></profile><storage-explorer></storage-explorer><games></games><support></support><donation></donation></template>'
}), define("text!app/resources/elements/storage-explorer.css", ["module"], function(e) {
    e.exports = '.hide{display:none !important}.clearfix:after{content:"";display:block;clear:both}.ellipsis,storage-explorer .titles .title .title-header .name,storage-explorer .containers .container>.header .name,storage-explorer .files .file .save-button .name{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}storage-explorer{position:relative;z-index:999}storage-explorer .toggle-button{width:280px;height:40px;font-weight:900;font-size:10px;color:rgba(255,255,255,0.25);letter-spacing:2px;text-transform:uppercase;padding:0 24px;background:#0C272C;border:0;border-top:1px solid #103137;border-bottom:1px solid #103137;text-align:left;transition:color 0.15s, background 0.15s, border 0.15s}storage-explorer .toggle-button svg{float:right}storage-explorer .toggle-button svg *{fill:#485D60;transition:fill 0.15s}storage-explorer .toggle-button:hover{background:#174b54;border-top:#174b54 1px solid;border-bottom:#174b54 1px solid;color:#fff}storage-explorer .toggle-button:hover svg *{fill:#fff}storage-explorer .explorer{position:fixed;width:400px;overflow-y:auto;background:#071E22;transform:translate(-100%, 0);visibility:hidden;opacity:0;transition:transform 0.2s ease-in-out}storage-explorer .explorer::-webkit-scrollbar{background-color:transparent;width:10px;box-shadow:inset 2px 2px 5px 0px rgba(0,0,0,0.3)}storage-explorer .explorer::-webkit-scrollbar-thumb:window-inactive,storage-explorer .explorer::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.25)}storage-explorer .explorer::-webkit-scrollbar-thumb:window-inactive:hover,storage-explorer .explorer::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,0.25)}storage-explorer ul{margin:0;padding:0;list-style:none}storage-explorer status-ring{display:block;margin:0 auto 15px auto;width:30px;height:30px}storage-explorer .titles .title{position:relative}storage-explorer .titles .title:before{content:"";display:block;position:absolute;left:0;top:50%;bottom:50%;width:4px;background:#27A1F1;z-index:1;opacity:0;transition:top 0.3s, bottom 0.3s, opacity 0.15s}storage-explorer .titles .title:hover:before,storage-explorer .titles .title.highlight:before{top:0;bottom:0;opacity:1}storage-explorer .titles .title .title-wrapper{height:0;overflow:hidden}storage-explorer .titles .title .title-header{display:flex;height:60px;border-top:1px solid #103137;align-items:center;text-decoration:none}storage-explorer .titles .title .title-header .name{flex:1;opacity:0.5;font-size:12px;color:#fff;letter-spacing:0.5px}storage-explorer .titles .title .title-header .name .scid{color:#5a6a6c;font-size:9px}storage-explorer .titles .title .title-header .thumbnail{flex:0;padding:0 16px 0 24px;margin-top:3px}storage-explorer .titles .title .title-header .thumbnail img{width:33px;height:33px}storage-explorer .titles .title .title-header .icon{flex:0;padding:0 24px 0 16px}storage-explorer .titles .title .title-header .icon svg{transition:transform 0.3s}storage-explorer .titles .title:last-child{border-bottom:1px solid #103137}storage-explorer .titles .title.expanded{border-left-color:#27A1F1}storage-explorer .titles .title.expanded .title-header .icon svg{transform:rotate(90deg)}storage-explorer .titles .title.expanded .title-wrapper{height:auto}storage-explorer .containers{background:#0C272C}storage-explorer .containers .container{border-top:1px solid #103137}storage-explorer .containers .container>.header{display:flex;align-items:center;height:42px;text-decoration:none}storage-explorer .containers .container>.header .icon{flex:0;padding:0 25px 0 34px}storage-explorer .containers .container>.header .icon i{display:inline;width:11px;height:11px}storage-explorer .containers .container>.header .icon i.expanded-icon{display:none}storage-explorer .containers .container>.header .name{flex:1;font-size:10px;color:#fff;letter-spacing:0.5px}storage-explorer .containers .container>.header .meta{font-weight:bold;font-size:9px;color:#485D60;letter-spacing:1px;padding:0 24px}storage-explorer .containers .container>.header .meta em{color:#1D4951}storage-explorer .containers .container>.header:hover{background:rgba(255,255,255,0.025)}storage-explorer .containers .container:first-child{border-top:none}storage-explorer .containers .container.expanded>.header i{display:none}storage-explorer .containers .container.expanded>.header i.expanded-icon{display:inline}storage-explorer .files .file{padding:6px 24px 0px 70px}storage-explorer .files .file a{text-decoration:none}storage-explorer .files .file a:hover{background:rgba(255,255,255,0.025);transition:background 0.15s}storage-explorer .files .file:last-child{border-bottom:none;padding-bottom:10px}storage-explorer .files .file .wrapper{height:40px;display:flex;align-items:center;background:#103137;border:1px solid #194249;border-radius:3px}storage-explorer .files .file .save-button{display:flex;flex:1;align-items:center;height:100%}storage-explorer .files .file .save-button .icon{flex:0;padding:0 16px;width:48px;height:16px}storage-explorer .files .file .save-button .name{flex:1;font-size:10px;color:#fff;letter-spacing:0.5px}storage-explorer .files .file .save-button .size{flex:0;font-weight:bold;font-size:9px;color:#485D60;letter-spacing:1px;padding:0 24px;white-space:nowrap}storage-explorer .files .file .save-button status-ring{margin:-2px}storage-explorer .files .file .replace-button{height:100%;border-left:1px solid #194249;height:100%;display:flex;align-items:center}storage-explorer .files .file .replace-button i{display:block;width:13px;margin:0 14px}storage-explorer .files .file .replace-button status-ring{margin:8px 10.5px}storage-explorer .files .file status-ring{width:20px;height:20px}storage-explorer .files .file status-ring svg *{stroke:rgba(255,255,255,0.5)}storage-explorer.open{height:auto}storage-explorer.open .toggle-button{color:#fff;background:#27A1F1;border-top-color:#27A1F1;border-bottom-color:#27A1F1}storage-explorer.open .toggle-button svg *{fill:rgba(255,255,255,0.5)}storage-explorer.open .toggle-button:hover{background:#57b6f4;border-top-color:#57b6f4;border-bottom-color:#57b6f4}storage-explorer.open .toggle-button:hover svg *{fill:#fff}storage-explorer.open .explorer{transform:translate(0, 0);opacity:1;visibility:visible;transition-delay:0s;height:calc(100% - 168px)}\n'
}), define("text!app/resources/elements/storage-explorer.html", ["module"], function(e) {
    e.exports = '<template class="${opened ? \'open\' : \'\'}"><require from="./storage-explorer.css"></require><button class="toggle-button" click.delegate="toggle()">Storage Explorer <i if.bind="opened"><inline-svg src="icons/close.svg"></inline-svg></i><i if.bind="!opened"><inline-svg src="icons/caret-right.svg"></inline-svg></i></button><div class="explorer" close-if-click-outside.two-way="opened"><ul class="titles"><li repeat.for="title of auth.gamercard.titles" class="title ${expandedTitles[title.scid] ? \'expanded highlight\' : \'\'}"><a href="#" class="title-header" click.delegate="toggleTitle(title.scid)"><div class="thumbnail"><img src.bind="title.imageUrl" onerror=\'this.src="static/images/emblem.svg"\'></div><span class="name">${title.name}<br><span class="scid">${title.scid}</span> </span><span class="icon"><inline-svg src="icons/caret-right.svg"></inline-svg></span></a><div class="title-wrapper"><status-ring if.bind="!containers[title.scid]"></status-ring><ul if.bind="containers[title.scid].length" class="containers"><li repeat.for="container of containers[title.scid]" class="container ${expandedContainers[title.scid + \'.\' + container.name] ? \'expanded\' : \'\'}"><a href="#" class="header" click.delegate="toggleContainer(title.scid, container)"><span class="icon"><i class="expanded-icon"><inline-svg src="icons/minus.svg"></inline-svg></i><i><inline-svg src="icons/plus.svg"></inline-svg></i></span><span class="name">${container.name}</span> <span class="meta">${container.size | byteFormat} <em>&bull;</em> ${container.modifiedAt | relativeTime | replace:\' ago\':\'\'}</span></a><ul if.bind="expandedContainers[title.scid + \'.\' + container.name] && container.files.length" class="files"><li repeat.for="file of container.files" class="file"><div class="wrapper"><a href="#" click.trigger="saveAs(title.scid, container, file)" class="save-button"><span class="icon"><i if.bind="!downloadingFiles[title.scid + \'.\' + container.name + \'.\' + file.name]"><inline-svg src="icons/disk.svg"></inline-svg></i><status-ring if.bind="downloadingFiles[title.scid + \'.\' + container.name + \'.\' + file.name]"></status-ring></span><span class="name">${file.name}</span> <span class="size">${file.size | byteFormat}</span> </a><a href="#" click.trigger="replace(title.scid, container, file)" class="replace-button"><i if.bind="!uploadingFiles[title.scid + \'.\' + container.name + \'.\' + file.name]"><inline-svg src="icons/upload.svg"></inline-svg></i><status-ring if.bind="uploadingFiles[title.scid + \'.\' + container.name + \'.\' + file.name]"></status-ring></a></div></li></ul><ul if.bind="expandedContainers[title.scid + \'.\' + container.name] && !container.files.length" class="files"><li class="file"><div class="wrapper"><div class="save-button"><span class="icon"></span> <span class="name">No Files</span></div></div></li></ul></li></ul><ul if.bind="containers[title.scid] && !containers[title.scid].length" class="containers"><li class="container"><div class="header"><span class="icon"></span> <span class="name">No Saves</span></div></li></ul></div></li></ul></div></template>'
}), define("text!app/resources/elements/support.css", ["module"], function(e) {
    e.exports = '.hide{display:none !important}.clearfix:after{content:"";display:block;clear:both}.ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}support{display:block;width:100%;padding:16px 24px;background:#0C272C}support button{display:block;width:100%;height:40px;position:relative;text-align:center;background-image:linear-gradient(-133deg, #238bb6 0%, #29abe1 100%);border-radius:3px;border:0;font-weight:900;font-size:12px;color:#fff;letter-spacing:0.5px;transition:box-shadow 0.3s;line-height:40px}support button img{float:left;margin:10px;width:20px;height:20px;vertical-align:middle}support button,support button *{cursor:pointer}support button:after{content:"";width:40px;height:40px;background:url(static/images/icons/caret-right.svg) 25px center no-repeat;display:inline-block;float:right}support button:hover{box-shadow:0 0 10px rgba(35,139,182,0.8)}\n'
}), define("text!app/resources/elements/support.html", ["module"], function(e) {
    e.exports = '<template><require from="./support.css"></require><button click.delegate="visit()"><img src="static/images/icons/speech-bubble.svg"> Join the Discussion</button></template>'
}), define("text!app/resources/elements/window-controls.css", ["module"], function(e) {
    e.exports = "window-controls{display:inline-block}window-controls ul{list-style:none;margin:0;padding:0;transform:translate(0, -3px)}window-controls ul li{display:inline-block;margin-right:14px;width:14px;height:14px}window-controls ul li:last-child{margin-right:0}window-controls ul li *{cursor:pointer}window-controls ul li svg{width:14px;height:14px}window-controls ul li svg *{transition:opacity 0.15s}window-controls ul li:hover svg *{opacity:1}\n"
}), define("text!app/resources/elements/window-controls.html", ["module"], function(e) {
    e.exports = '<template class="window-controls"><require from="./window-controls.css"></require><ul><li if.bind="!minimized" click.trigger="minimize()"><inline-svg src="icons/app-minimize.svg"></inline-svg></li><li if.bind="!maximized" click.trigger="maximize()"><inline-svg src="icons/app-maximize.svg"></inline-svg></li><li if.bind="maximized" click.trigger="restore()"><inline-svg src="icons/app-restore.svg"></inline-svg></li><li click.trigger="close()"><inline-svg src="icons/app-close.svg"></inline-svg></li></ul></template>'
}), define("text!editor/resources/elements/file-selector.css", ["module"], function(e) {
    e.exports = ""
}), define("text!editor/resources/elements/file-selector.html", ["module"], function(e) {
    e.exports = '<template><require from="./file-selector.css"></require></template>'
});
//# sourceMappingURL=app-bundle.js.map