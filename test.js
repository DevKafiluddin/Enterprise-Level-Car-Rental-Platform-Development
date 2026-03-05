var Ch = e => {
    throw TypeError(e)
}
;
var Ql = (e, t, n) => t.has(e) || Ch("Cannot " + n);
var A = (e, t, n) => (Ql(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , J = (e, t, n) => t.has(e) ? Ch("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , H = (e, t, n, r) => (Ql(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Oe = (e, t, n) => (Ql(e, t, "access private method"),
n);
var Ro = (e, t, n, r) => ({
    set _(i) {
        H(e, t, i, n)
    },
    get _() {
        return A(e, t, r)
    }
});
function _w(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
function Ug(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Wg = {
    exports: {}
}
  , ul = {}
  , Hg = {
    exports: {}
}
  , X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo = Symbol.for("react.element")
  , zw = Symbol.for("react.portal")
  , Bw = Symbol.for("react.fragment")
  , $w = Symbol.for("react.strict_mode")
  , Uw = Symbol.for("react.profiler")
  , Ww = Symbol.for("react.provider")
  , Hw = Symbol.for("react.context")
  , Kw = Symbol.for("react.forward_ref")
  , Gw = Symbol.for("react.suspense")
  , Qw = Symbol.for("react.memo")
  , Yw = Symbol.for("react.lazy")
  , Eh = Symbol.iterator;
function Xw(e) {
    return e === null || typeof e != "object" ? null : (e = Eh && e[Eh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Kg = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Gg = Object.assign
  , Qg = {};
function Hi(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Qg,
    this.updater = n || Kg
}
Hi.prototype.isReactComponent = {};
Hi.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Hi.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Yg() {}
Yg.prototype = Hi.prototype;
function Ed(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Qg,
    this.updater = n || Kg
}
var Td = Ed.prototype = new Yg;
Td.constructor = Ed;
Gg(Td, Hi.prototype);
Td.isPureReactComponent = !0;
var Th = Array.isArray
  , Xg = Object.prototype.hasOwnProperty
  , Pd = {
    current: null
}
  , qg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Zg(e, t, n) {
    var r, i = {}, s = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            Xg.call(t, r) && !qg.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: fo,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: Pd.current
    }
}
function qw(e, t) {
    return {
        $$typeof: fo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function kd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === fo
}
function Zw(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ph = /\/+/g;
function Yl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Zw("" + e.key) : t.toString(36)
}
function ta(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case fo:
            case zw:
                o = !0
            }
        }
    if (o)
        return o = e,
        i = i(o),
        e = r === "" ? "." + Yl(o, 0) : r,
        Th(i) ? (n = "",
        e != null && (n = e.replace(Ph, "$&/") + "/"),
        ta(i, t, n, "", function(u) {
            return u
        })) : i != null && (kd(i) && (i = qw(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Ph, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Th(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + Yl(s, a);
            o += ta(s, t, n, l, i)
        }
    else if (l = Xw(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + Yl(s, a++),
            o += ta(s, t, n, l, i);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Ao(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return ta(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }),
    r
}
function Jw(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Qe = {
    current: null
}
  , na = {
    transition: null
}
  , eS = {
    ReactCurrentDispatcher: Qe,
    ReactCurrentBatchConfig: na,
    ReactCurrentOwner: Pd
};
function Jg() {
    throw Error("act(...) is not supported in production builds of React.")
}
X.Children = {
    map: Ao,
    forEach: function(e, t, n) {
        Ao(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ao(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ao(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!kd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
X.Component = Hi;
X.Fragment = Bw;
X.Profiler = Uw;
X.PureComponent = Ed;
X.StrictMode = $w;
X.Suspense = Gw;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eS;
X.act = Jg;
X.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Gg({}, e.props)
      , i = e.key
      , s = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        o = Pd.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Xg.call(t, l) && !qg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: fo,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
;
X.createContext = function(e) {
    return e = {
        $$typeof: Hw,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Ww,
        _context: e
    },
    e.Consumer = e
}
;
X.createElement = Zg;
X.createFactory = function(e) {
    var t = Zg.bind(null, e);
    return t.type = e,
    t
}
;
X.createRef = function() {
    return {
        current: null
    }
}
;
X.forwardRef = function(e) {
    return {
        $$typeof: Kw,
        render: e
    }
}
;
X.isValidElement = kd;
X.lazy = function(e) {
    return {
        $$typeof: Yw,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Jw
    }
}
;
X.memo = function(e, t) {
    return {
        $$typeof: Qw,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
X.startTransition = function(e) {
    var t = na.transition;
    na.transition = {};
    try {
        e()
    } finally {
        na.transition = t
    }
}
;
X.unstable_act = Jg;
X.useCallback = function(e, t) {
    return Qe.current.useCallback(e, t)
}
;
X.useContext = function(e) {
    return Qe.current.useContext(e)
}
;
X.useDebugValue = function() {}
;
X.useDeferredValue = function(e) {
    return Qe.current.useDeferredValue(e)
}
;
X.useEffect = function(e, t) {
    return Qe.current.useEffect(e, t)
}
;
X.useId = function() {
    return Qe.current.useId()
}
;
X.useImperativeHandle = function(e, t, n) {
    return Qe.current.useImperativeHandle(e, t, n)
}
;
X.useInsertionEffect = function(e, t) {
    return Qe.current.useInsertionEffect(e, t)
}
;
X.useLayoutEffect = function(e, t) {
    return Qe.current.useLayoutEffect(e, t)
}
;
X.useMemo = function(e, t) {
    return Qe.current.useMemo(e, t)
}
;
X.useReducer = function(e, t, n) {
    return Qe.current.useReducer(e, t, n)
}
;
X.useRef = function(e) {
    return Qe.current.useRef(e)
}
;
X.useState = function(e) {
    return Qe.current.useState(e)
}
;
X.useSyncExternalStore = function(e, t, n) {
    return Qe.current.useSyncExternalStore(e, t, n)
}
;
X.useTransition = function() {
    return Qe.current.useTransition()
}
;
X.version = "18.3.1";
Hg.exports = X;
var S = Hg.exports;
const D = Ug(S)
  , ey = _w({
    __proto__: null,
    default: D
}, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tS = S
  , nS = Symbol.for("react.element")
  , rS = Symbol.for("react.fragment")
  , iS = Object.prototype.hasOwnProperty
  , sS = tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , oS = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ty(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        iS.call(t, r) && !oS.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: nS,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: sS.current
    }
}
ul.Fragment = rS;
ul.jsx = ty;
ul.jsxs = ty;
Wg.exports = ul;
var m = Wg.exports
  , ny = {
    exports: {}
}
  , ct = {}
  , ry = {
    exports: {}
}
  , iy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(k, R) {
        var L = k.length;
        k.push(R);
        e: for (; 0 < L; ) {
            var B = L - 1 >>> 1
              , z = k[B];
            if (0 < i(z, R))
                k[B] = R,
                k[L] = z,
                L = B;
            else
                break e
        }
    }
    function n(k) {
        return k.length === 0 ? null : k[0]
    }
    function r(k) {
        if (k.length === 0)
            return null;
        var R = k[0]
          , L = k.pop();
        if (L !== R) {
            k[0] = L;
            e: for (var B = 0, z = k.length, Y = z >>> 1; B < Y; ) {
                var q = 2 * (B + 1) - 1
                  , we = k[q]
                  , Le = q + 1
                  , ee = k[Le];
                if (0 > i(we, L))
                    Le < z && 0 > i(ee, we) ? (k[B] = ee,
                    k[Le] = L,
                    B = Le) : (k[B] = we,
                    k[q] = L,
                    B = q);
                else if (Le < z && 0 > i(ee, L))
                    k[B] = ee,
                    k[Le] = L,
                    B = Le;
                else
                    break e
            }
        }
        return R
    }
    function i(k, R) {
        var L = k.sortIndex - R.sortIndex;
        return L !== 0 ? L : k.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , h = !1
      , x = !1
      , y = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(k) {
        for (var R = n(u); R !== null; ) {
            if (R.callback === null)
                r(u);
            else if (R.startTime <= k)
                r(u),
                R.sortIndex = R.expirationTime,
                t(l, R);
            else
                break;
            R = n(u)
        }
    }
    function b(k) {
        if (y = !1,
        v(k),
        !x)
            if (n(l) !== null)
                x = !0,
                $(C);
            else {
                var R = n(u);
                R !== null && K(b, R.startTime - k)
            }
    }
    function C(k, R) {
        x = !1,
        y && (y = !1,
        g(P),
        P = -1),
        h = !0;
        var L = f;
        try {
            for (v(R),
            d = n(l); d !== null && (!(d.expirationTime > R) || k && !_()); ) {
                var B = d.callback;
                if (typeof B == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var z = B(d.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof z == "function" ? d.callback = z : d === n(l) && r(l),
                    v(R)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var Y = !0;
            else {
                var q = n(u);
                q !== null && K(b, q.startTime - R),
                Y = !1
            }
            return Y
        } finally {
            d = null,
            f = L,
            h = !1
        }
    }
    var E = !1
      , T = null
      , P = -1
      , N = 5
      , M = -1;
    function _() {
        return !(e.unstable_now() - M < N)
    }
    function I() {
        if (T !== null) {
            var k = e.unstable_now();
            M = k;
            var R = !0;
            try {
                R = T(!0, k)
            } finally {
                R ? U() : (E = !1,
                T = null)
            }
        } else
            E = !1
    }
    var U;
    if (typeof p == "function")
        U = function() {
            p(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var O = new MessageChannel
          , Q = O.port2;
        O.port1.onmessage = I,
        U = function() {
            Q.postMessage(null)
        }
    } else
        U = function() {
            w(I, 0)
        }
        ;
    function $(k) {
        T = k,
        E || (E = !0,
        U())
    }
    function K(k, R) {
        P = w(function() {
            k(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(k) {
        k.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || h || (x = !0,
        $(C))
    }
    ,
    e.unstable_forceFrameRate = function(k) {
        0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < k ? Math.floor(1e3 / k) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(k) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = f
        }
        var L = f;
        f = R;
        try {
            return k()
        } finally {
            f = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(k, R) {
        switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            k = 3
        }
        var L = f;
        f = k;
        try {
            return R()
        } finally {
            f = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(k, R, L) {
        var B = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? B + L : B) : L = B,
        k) {
        case 1:
            var z = -1;
            break;
        case 2:
            z = 250;
            break;
        case 5:
            z = 1073741823;
            break;
        case 4:
            z = 1e4;
            break;
        default:
            z = 5e3
        }
        return z = L + z,
        k = {
            id: c++,
            callback: R,
            priorityLevel: k,
            startTime: L,
            expirationTime: z,
            sortIndex: -1
        },
        L > B ? (k.sortIndex = L,
        t(u, k),
        n(l) === null && k === n(u) && (y ? (g(P),
        P = -1) : y = !0,
        K(b, L - B))) : (k.sortIndex = z,
        t(l, k),
        x || h || (x = !0,
        $(C))),
        k
    }
    ,
    e.unstable_shouldYield = _,
    e.unstable_wrapCallback = function(k) {
        var R = f;
        return function() {
            var L = f;
            f = R;
            try {
                return k.apply(this, arguments)
            } finally {
                f = L
            }
        }
    }
}
)(iy);
ry.exports = iy;
var aS = ry.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lS = S
  , ut = aS;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var sy = new Set
  , Os = {};
function Br(e, t) {
    Li(e, t),
    Li(e + "Capture", t)
}
function Li(e, t) {
    for (Os[e] = t,
    e = 0; e < t.length; e++)
        sy.add(t[e])
}
var hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ku = Object.prototype.hasOwnProperty
  , uS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , kh = {}
  , Rh = {};
function cS(e) {
    return Ku.call(Rh, e) ? !0 : Ku.call(kh, e) ? !1 : uS.test(e) ? Rh[e] = !0 : (kh[e] = !0,
    !1)
}
function dS(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function fS(e, t, n, r) {
    if (t === null || typeof t > "u" || dS(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ye(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var De = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    De[e] = new Ye(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    De[t] = new Ye(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    De[e] = new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    De[e] = new Ye(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    De[e] = new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    De[e] = new Ye(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    De[e] = new Ye(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    De[e] = new Ye(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    De[e] = new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Rd = /[\-:]([a-z])/g;
function Ad(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Rd, Ad);
    De[t] = new Ye(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Rd, Ad);
    De[t] = new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Rd, Ad);
    De[t] = new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    De[e] = new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)
});
De.xlinkHref = new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    De[e] = new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Nd(e, t, n, r) {
    var i = De.hasOwnProperty(t) ? De[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (fS(t, n, i, r) && (n = null),
    r || i === null ? cS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var wn = lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , No = Symbol.for("react.element")
  , ei = Symbol.for("react.portal")
  , ti = Symbol.for("react.fragment")
  , Md = Symbol.for("react.strict_mode")
  , Gu = Symbol.for("react.profiler")
  , oy = Symbol.for("react.provider")
  , ay = Symbol.for("react.context")
  , jd = Symbol.for("react.forward_ref")
  , Qu = Symbol.for("react.suspense")
  , Yu = Symbol.for("react.suspense_list")
  , Dd = Symbol.for("react.memo")
  , Dn = Symbol.for("react.lazy")
  , ly = Symbol.for("react.offscreen")
  , Ah = Symbol.iterator;
function is(e) {
    return e === null || typeof e != "object" ? null : (e = Ah && e[Ah] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var me = Object.assign, Xl;
function ms(e) {
    if (Xl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Xl = t && t[1] || ""
        }
    return `
` + Xl + e
}
var ql = !1;
function Zl(e, t) {
    if (!e || ql)
        return "";
    ql = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || i[o] !== s[a]) {
                                var l = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        ql = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? ms(e) : ""
}
function hS(e) {
    switch (e.tag) {
    case 5:
        return ms(e.type);
    case 16:
        return ms("Lazy");
    case 13:
        return ms("Suspense");
    case 19:
        return ms("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Zl(e.type, !1),
        e;
    case 11:
        return e = Zl(e.type.render, !1),
        e;
    case 1:
        return e = Zl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Xu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case ti:
        return "Fragment";
    case ei:
        return "Portal";
    case Gu:
        return "Profiler";
    case Md:
        return "StrictMode";
    case Qu:
        return "Suspense";
    case Yu:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case ay:
            return (e.displayName || "Context") + ".Consumer";
        case oy:
            return (e._context.displayName || "Context") + ".Provider";
        case jd:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Dd:
            return t = e.displayName || null,
            t !== null ? t : Xu(e.type) || "Memo";
        case Dn:
            t = e._payload,
            e = e._init;
            try {
                return Xu(e(t))
            } catch {}
        }
    return null
}
function pS(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Xu(t);
    case 8:
        return t === Md ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function tr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function uy(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function mS(e) {
    var t = uy(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Mo(e) {
    e._valueTracker || (e._valueTracker = mS(e))
}
function cy(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = uy(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ca(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function qu(e, t) {
    var n = t.checked;
    return me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Nh(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = tr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function dy(e, t) {
    t = t.checked,
    t != null && Nd(e, "checked", t, !1)
}
function Zu(e, t) {
    dy(e, t);
    var n = tr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ju(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ju(e, t.type, tr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Mh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ju(e, t, n) {
    (t !== "number" || Ca(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var gs = Array.isArray;
function yi(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + tr(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function ec(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function jh(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(j(92));
            if (gs(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: tr(n)
    }
}
function fy(e, t) {
    var n = tr(t.value)
      , r = tr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Dh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function hy(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function tc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? hy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var jo, py = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (jo = jo || document.createElement("div"),
        jo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = jo.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Is(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ss = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , gS = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ss).forEach(function(e) {
    gS.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ss[t] = Ss[e]
    })
});
function my(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ss.hasOwnProperty(e) && Ss[e] ? ("" + t).trim() : t + "px"
}
function gy(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = my(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var yS = me({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function nc(e, t) {
    if (t) {
        if (yS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function rc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var ic = null;
function Ld(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var sc = null
  , vi = null
  , xi = null;
function Lh(e) {
    if (e = mo(e)) {
        if (typeof sc != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = pl(t),
        sc(e.stateNode, e.type, t))
    }
}
function yy(e) {
    vi ? xi ? xi.push(e) : xi = [e] : vi = e
}
function vy() {
    if (vi) {
        var e = vi
          , t = xi;
        if (xi = vi = null,
        Lh(e),
        t)
            for (e = 0; e < t.length; e++)
                Lh(t[e])
    }
}
function xy(e, t) {
    return e(t)
}
function wy() {}
var Jl = !1;
function Sy(e, t, n) {
    if (Jl)
        return e(t, n);
    Jl = !0;
    try {
        return xy(e, t, n)
    } finally {
        Jl = !1,
        (vi !== null || xi !== null) && (wy(),
        vy())
    }
}
function Vs(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = pl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(j(231, t, typeof n));
    return n
}
var oc = !1;
if (hn)
    try {
        var ss = {};
        Object.defineProperty(ss, "passive", {
            get: function() {
                oc = !0
            }
        }),
        window.addEventListener("test", ss, ss),
        window.removeEventListener("test", ss, ss)
    } catch {
        oc = !1
    }
function vS(e, t, n, r, i, s, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var bs = !1
  , Ea = null
  , Ta = !1
  , ac = null
  , xS = {
    onError: function(e) {
        bs = !0,
        Ea = e
    }
};
function wS(e, t, n, r, i, s, o, a, l) {
    bs = !1,
    Ea = null,
    vS.apply(xS, arguments)
}
function SS(e, t, n, r, i, s, o, a, l) {
    if (wS.apply(this, arguments),
    bs) {
        if (bs) {
            var u = Ea;
            bs = !1,
            Ea = null
        } else
            throw Error(j(198));
        Ta || (Ta = !0,
        ac = u)
    }
}
function $r(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function by(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Oh(e) {
    if ($r(e) !== e)
        throw Error(j(188))
}
function bS(e) {
    var t = e.alternate;
    if (!t) {
        if (t = $r(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return Oh(i),
                    e;
                if (s === r)
                    return Oh(i),
                    t;
                s = s.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, a = i.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function Cy(e) {
    return e = bS(e),
    e !== null ? Ey(e) : null
}
function Ey(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Ey(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ty = ut.unstable_scheduleCallback
  , Ih = ut.unstable_cancelCallback
  , CS = ut.unstable_shouldYield
  , ES = ut.unstable_requestPaint
  , ve = ut.unstable_now
  , TS = ut.unstable_getCurrentPriorityLevel
  , Od = ut.unstable_ImmediatePriority
  , Py = ut.unstable_UserBlockingPriority
  , Pa = ut.unstable_NormalPriority
  , PS = ut.unstable_LowPriority
  , ky = ut.unstable_IdlePriority
  , cl = null
  , Zt = null;
function kS(e) {
    if (Zt && typeof Zt.onCommitFiberRoot == "function")
        try {
            Zt.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Vt = Math.clz32 ? Math.clz32 : NS
  , RS = Math.log
  , AS = Math.LN2;
function NS(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (RS(e) / AS | 0) | 0
}
var Do = 64
  , Lo = 4194304;
function ys(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ka(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = ys(a) : (s &= o,
        s !== 0 && (r = ys(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = ys(o) : s !== 0 && (r = ys(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Vt(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function MS(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function jS(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - Vt(s)
          , a = 1 << o
          , l = i[o];
        l === -1 ? (!(a & n) || a & r) && (i[o] = MS(a, t)) : l <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function lc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Ry() {
    var e = Do;
    return Do <<= 1,
    !(Do & 4194240) && (Do = 64),
    e
}
function eu(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ho(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Vt(t),
    e[t] = n
}
function DS(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Vt(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function Id(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Vt(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var te = 0;
function Ay(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ny, Vd, My, jy, Dy, uc = !1, Oo = [], Kn = null, Gn = null, Qn = null, Fs = new Map, _s = new Map, On = [], LS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Vh(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Kn = null;
        break;
    case "dragenter":
    case "dragleave":
        Gn = null;
        break;
    case "mouseover":
    case "mouseout":
        Qn = null;
        break;
    case "pointerover":
    case "pointerout":
        Fs.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        _s.delete(t.pointerId)
    }
}
function os(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = mo(t),
    t !== null && Vd(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function OS(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Kn = os(Kn, e, t, n, r, i),
        !0;
    case "dragenter":
        return Gn = os(Gn, e, t, n, r, i),
        !0;
    case "mouseover":
        return Qn = os(Qn, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return Fs.set(s, os(Fs.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        _s.set(s, os(_s.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function Ly(e) {
    var t = Sr(e.target);
    if (t !== null) {
        var n = $r(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = by(n),
                t !== null) {
                    e.blockedOn = t,
                    Dy(e.priority, function() {
                        My(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ra(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = cc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            ic = r,
            n.target.dispatchEvent(r),
            ic = null
        } else
            return t = mo(n),
            t !== null && Vd(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Fh(e, t, n) {
    ra(e) && n.delete(t)
}
function IS() {
    uc = !1,
    Kn !== null && ra(Kn) && (Kn = null),
    Gn !== null && ra(Gn) && (Gn = null),
    Qn !== null && ra(Qn) && (Qn = null),
    Fs.forEach(Fh),
    _s.forEach(Fh)
}
function as(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    uc || (uc = !0,
    ut.unstable_scheduleCallback(ut.unstable_NormalPriority, IS)))
}
function zs(e) {
    function t(i) {
        return as(i, e)
    }
    if (0 < Oo.length) {
        as(Oo[0], e);
        for (var n = 1; n < Oo.length; n++) {
            var r = Oo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Kn !== null && as(Kn, e),
    Gn !== null && as(Gn, e),
    Qn !== null && as(Qn, e),
    Fs.forEach(t),
    _s.forEach(t),
    n = 0; n < On.length; n++)
        r = On[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < On.length && (n = On[0],
    n.blockedOn === null); )
        Ly(n),
        n.blockedOn === null && On.shift()
}
var wi = wn.ReactCurrentBatchConfig
  , Ra = !0;
function VS(e, t, n, r) {
    var i = te
      , s = wi.transition;
    wi.transition = null;
    try {
        te = 1,
        Fd(e, t, n, r)
    } finally {
        te = i,
        wi.transition = s
    }
}
function FS(e, t, n, r) {
    var i = te
      , s = wi.transition;
    wi.transition = null;
    try {
        te = 4,
        Fd(e, t, n, r)
    } finally {
        te = i,
        wi.transition = s
    }
}
function Fd(e, t, n, r) {
    if (Ra) {
        var i = cc(e, t, n, r);
        if (i === null)
            cu(e, t, r, Aa, n),
            Vh(e, r);
        else if (OS(i, e, t, n, r))
            r.stopPropagation();
        else if (Vh(e, r),
        t & 4 && -1 < LS.indexOf(e)) {
            for (; i !== null; ) {
                var s = mo(i);
                if (s !== null && Ny(s),
                s = cc(e, t, n, r),
                s === null && cu(e, t, r, Aa, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            cu(e, t, r, null, n)
    }
}
var Aa = null;
function cc(e, t, n, r) {
    if (Aa = null,
    e = Ld(r),
    e = Sr(e),
    e !== null)
        if (t = $r(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = by(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Aa = e,
    null
}
function Oy(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (TS()) {
        case Od:
            return 1;
        case Py:
            return 4;
        case Pa:
        case PS:
            return 16;
        case ky:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var $n = null
  , _d = null
  , ia = null;
function Iy() {
    if (ia)
        return ia;
    var e, t = _d, n = t.length, r, i = "value"in $n ? $n.value : $n.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return ia = i.slice(e, 1 < r ? 1 - r : void 0)
}
function sa(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Io() {
    return !0
}
function _h() {
    return !1
}
function dt(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Io : _h,
        this.isPropagationStopped = _h,
        this
    }
    return me(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Io)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Io)
        },
        persist: function() {},
        isPersistent: Io
    }),
    t
}
var Ki = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, zd = dt(Ki), po = me({}, Ki, {
    view: 0,
    detail: 0
}), _S = dt(po), tu, nu, ls, dl = me({}, po, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Bd,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ls && (ls && e.type === "mousemove" ? (tu = e.screenX - ls.screenX,
        nu = e.screenY - ls.screenY) : nu = tu = 0,
        ls = e),
        tu)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : nu
    }
}), zh = dt(dl), zS = me({}, dl, {
    dataTransfer: 0
}), BS = dt(zS), $S = me({}, po, {
    relatedTarget: 0
}), ru = dt($S), US = me({}, Ki, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), WS = dt(US), HS = me({}, Ki, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), KS = dt(HS), GS = me({}, Ki, {
    data: 0
}), Bh = dt(GS), QS = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, YS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, XS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function qS(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = XS[e]) ? !!t[e] : !1
}
function Bd() {
    return qS
}
var ZS = me({}, po, {
    key: function(e) {
        if (e.key) {
            var t = QS[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = sa(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? YS[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Bd,
    charCode: function(e) {
        return e.type === "keypress" ? sa(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? sa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , JS = dt(ZS)
  , eb = me({}, dl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , $h = dt(eb)
  , tb = me({}, po, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Bd
})
  , nb = dt(tb)
  , rb = me({}, Ki, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , ib = dt(rb)
  , sb = me({}, dl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , ob = dt(sb)
  , ab = [9, 13, 27, 32]
  , $d = hn && "CompositionEvent"in window
  , Cs = null;
hn && "documentMode"in document && (Cs = document.documentMode);
var lb = hn && "TextEvent"in window && !Cs
  , Vy = hn && (!$d || Cs && 8 < Cs && 11 >= Cs)
  , Uh = " "
  , Wh = !1;
function Fy(e, t) {
    switch (e) {
    case "keyup":
        return ab.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function _y(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ni = !1;
function ub(e, t) {
    switch (e) {
    case "compositionend":
        return _y(t);
    case "keypress":
        return t.which !== 32 ? null : (Wh = !0,
        Uh);
    case "textInput":
        return e = t.data,
        e === Uh && Wh ? null : e;
    default:
        return null
    }
}
function cb(e, t) {
    if (ni)
        return e === "compositionend" || !$d && Fy(e, t) ? (e = Iy(),
        ia = _d = $n = null,
        ni = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Vy && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var db = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Hh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!db[e.type] : t === "textarea"
}
function zy(e, t, n, r) {
    yy(r),
    t = Na(t, "onChange"),
    0 < t.length && (n = new zd("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Es = null
  , Bs = null;
function fb(e) {
    qy(e, 0)
}
function fl(e) {
    var t = si(e);
    if (cy(t))
        return e
}
function hb(e, t) {
    if (e === "change")
        return t
}
var By = !1;
if (hn) {
    var iu;
    if (hn) {
        var su = "oninput"in document;
        if (!su) {
            var Kh = document.createElement("div");
            Kh.setAttribute("oninput", "return;"),
            su = typeof Kh.oninput == "function"
        }
        iu = su
    } else
        iu = !1;
    By = iu && (!document.documentMode || 9 < document.documentMode)
}
function Gh() {
    Es && (Es.detachEvent("onpropertychange", $y),
    Bs = Es = null)
}
function $y(e) {
    if (e.propertyName === "value" && fl(Bs)) {
        var t = [];
        zy(t, Bs, e, Ld(e)),
        Sy(fb, t)
    }
}
function pb(e, t, n) {
    e === "focusin" ? (Gh(),
    Es = t,
    Bs = n,
    Es.attachEvent("onpropertychange", $y)) : e === "focusout" && Gh()
}
function mb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return fl(Bs)
}
function gb(e, t) {
    if (e === "click")
        return fl(t)
}
function yb(e, t) {
    if (e === "input" || e === "change")
        return fl(t)
}
function vb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var zt = typeof Object.is == "function" ? Object.is : vb;
function $s(e, t) {
    if (zt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ku.call(t, i) || !zt(e[i], t[i]))
            return !1
    }
    return !0
}
function Qh(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Yh(e, t) {
    var n = Qh(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Qh(n)
    }
}
function Uy(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Uy(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Wy() {
    for (var e = window, t = Ca(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ca(e.document)
    }
    return t
}
function Ud(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function xb(e) {
    var t = Wy()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Uy(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ud(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = Yh(n, s);
                var o = Yh(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var wb = hn && "documentMode"in document && 11 >= document.documentMode
  , ri = null
  , dc = null
  , Ts = null
  , fc = !1;
function Xh(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fc || ri == null || ri !== Ca(r) || (r = ri,
    "selectionStart"in r && Ud(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ts && $s(Ts, r) || (Ts = r,
    r = Na(dc, "onSelect"),
    0 < r.length && (t = new zd("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = ri)))
}
function Vo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var ii = {
    animationend: Vo("Animation", "AnimationEnd"),
    animationiteration: Vo("Animation", "AnimationIteration"),
    animationstart: Vo("Animation", "AnimationStart"),
    transitionend: Vo("Transition", "TransitionEnd")
}
  , ou = {}
  , Hy = {};
hn && (Hy = document.createElement("div").style,
"AnimationEvent"in window || (delete ii.animationend.animation,
delete ii.animationiteration.animation,
delete ii.animationstart.animation),
"TransitionEvent"in window || delete ii.transitionend.transition);
function hl(e) {
    if (ou[e])
        return ou[e];
    if (!ii[e])
        return e;
    var t = ii[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Hy)
            return ou[e] = t[n];
    return e
}
var Ky = hl("animationend")
  , Gy = hl("animationiteration")
  , Qy = hl("animationstart")
  , Yy = hl("transitionend")
  , Xy = new Map
  , qh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cr(e, t) {
    Xy.set(e, t),
    Br(t, [e])
}
for (var au = 0; au < qh.length; au++) {
    var lu = qh[au]
      , Sb = lu.toLowerCase()
      , bb = lu[0].toUpperCase() + lu.slice(1);
    cr(Sb, "on" + bb)
}
cr(Ky, "onAnimationEnd");
cr(Gy, "onAnimationIteration");
cr(Qy, "onAnimationStart");
cr("dblclick", "onDoubleClick");
cr("focusin", "onFocus");
cr("focusout", "onBlur");
cr(Yy, "onTransitionEnd");
Li("onMouseEnter", ["mouseout", "mouseover"]);
Li("onMouseLeave", ["mouseout", "mouseover"]);
Li("onPointerEnter", ["pointerout", "pointerover"]);
Li("onPointerLeave", ["pointerout", "pointerover"]);
Br("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Br("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Br("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Br("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Br("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Br("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var vs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Cb = new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));
function Zh(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    SS(r, t, void 0, e),
    e.currentTarget = null
}
function qy(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    Zh(i, a, u),
                    s = l
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    Zh(i, a, u),
                    s = l
                }
        }
    }
    if (Ta)
        throw e = ac,
        Ta = !1,
        ac = null,
        e
}
function oe(e, t) {
    var n = t[yc];
    n === void 0 && (n = t[yc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Zy(t, e, 2, !1),
    n.add(r))
}
function uu(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Zy(n, e, r, t)
}
var Fo = "_reactListening" + Math.random().toString(36).slice(2);
function Us(e) {
    if (!e[Fo]) {
        e[Fo] = !0,
        sy.forEach(function(n) {
            n !== "selectionchange" && (Cb.has(n) || uu(n, !1, e),
            uu(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Fo] || (t[Fo] = !0,
        uu("selectionchange", !1, t))
    }
}
function Zy(e, t, n, r) {
    switch (Oy(t)) {
    case 1:
        var i = VS;
        break;
    case 4:
        i = FS;
        break;
    default:
        i = Fd
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !oc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function cu(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = Sr(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        r = s = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Sy(function() {
        var u = s
          , c = Ld(n)
          , d = [];
        e: {
            var f = Xy.get(e);
            if (f !== void 0) {
                var h = zd
                  , x = e;
                switch (e) {
                case "keypress":
                    if (sa(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = JS;
                    break;
                case "focusin":
                    x = "focus",
                    h = ru;
                    break;
                case "focusout":
                    x = "blur",
                    h = ru;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = ru;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = zh;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = BS;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = nb;
                    break;
                case Ky:
                case Gy:
                case Qy:
                    h = WS;
                    break;
                case Yy:
                    h = ib;
                    break;
                case "scroll":
                    h = _S;
                    break;
                case "wheel":
                    h = ob;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = KS;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = $h
                }
                var y = (t & 4) !== 0
                  , w = !y && e === "scroll"
                  , g = y ? f !== null ? f + "Capture" : null : f;
                y = [];
                for (var p = u, v; p !== null; ) {
                    v = p;
                    var b = v.stateNode;
                    if (v.tag === 5 && b !== null && (v = b,
                    g !== null && (b = Vs(p, g),
                    b != null && y.push(Ws(p, b, v)))),
                    w)
                        break;
                    p = p.return
                }
                0 < y.length && (f = new h(f,x,null,n,c),
                d.push({
                    event: f,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                f && n !== ic && (x = n.relatedTarget || n.fromElement) && (Sr(x) || x[pn]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                h ? (x = n.relatedTarget || n.toElement,
                h = u,
                x = x ? Sr(x) : null,
                x !== null && (w = $r(x),
                x !== w || x.tag !== 5 && x.tag !== 6) && (x = null)) : (h = null,
                x = u),
                h !== x)) {
                    if (y = zh,
                    b = "onMouseLeave",
                    g = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = $h,
                    b = "onPointerLeave",
                    g = "onPointerEnter",
                    p = "pointer"),
                    w = h == null ? f : si(h),
                    v = x == null ? f : si(x),
                    f = new y(b,p + "leave",h,n,c),
                    f.target = w,
                    f.relatedTarget = v,
                    b = null,
                    Sr(c) === u && (y = new y(g,p + "enter",x,n,c),
                    y.target = v,
                    y.relatedTarget = w,
                    b = y),
                    w = b,
                    h && x)
                        t: {
                            for (y = h,
                            g = x,
                            p = 0,
                            v = y; v; v = qr(v))
                                p++;
                            for (v = 0,
                            b = g; b; b = qr(b))
                                v++;
                            for (; 0 < p - v; )
                                y = qr(y),
                                p--;
                            for (; 0 < v - p; )
                                g = qr(g),
                                v--;
                            for (; p--; ) {
                                if (y === g || g !== null && y === g.alternate)
                                    break t;
                                y = qr(y),
                                g = qr(g)
                            }
                            y = null
                        }
                    else
                        y = null;
                    h !== null && Jh(d, f, h, y, !1),
                    x !== null && w !== null && Jh(d, w, x, y, !0)
                }
            }
            e: {
                if (f = u ? si(u) : window,
                h = f.nodeName && f.nodeName.toLowerCase(),
                h === "select" || h === "input" && f.type === "file")
                    var C = hb;
                else if (Hh(f))
                    if (By)
                        C = yb;
                    else {
                        C = mb;
                        var E = pb
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = gb);
                if (C && (C = C(e, u))) {
                    zy(d, C, n, c);
                    break e
                }
                E && E(e, f, u),
                e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Ju(f, "number", f.value)
            }
            switch (E = u ? si(u) : window,
            e) {
            case "focusin":
                (Hh(E) || E.contentEditable === "true") && (ri = E,
                dc = u,
                Ts = null);
                break;
            case "focusout":
                Ts = dc = ri = null;
                break;
            case "mousedown":
                fc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                fc = !1,
                Xh(d, n, c);
                break;
            case "selectionchange":
                if (wb)
                    break;
            case "keydown":
            case "keyup":
                Xh(d, n, c)
            }
            var T;
            if ($d)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                ni ? Fy(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (Vy && n.locale !== "ko" && (ni || P !== "onCompositionStart" ? P === "onCompositionEnd" && ni && (T = Iy()) : ($n = c,
            _d = "value"in $n ? $n.value : $n.textContent,
            ni = !0)),
            E = Na(u, P),
            0 < E.length && (P = new Bh(P,e,null,n,c),
            d.push({
                event: P,
                listeners: E
            }),
            T ? P.data = T : (T = _y(n),
            T !== null && (P.data = T)))),
            (T = lb ? ub(e, n) : cb(e, n)) && (u = Na(u, "onBeforeInput"),
            0 < u.length && (c = new Bh("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = T))
        }
        qy(d, t)
    })
}
function Ws(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Na(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = Vs(e, n),
        s != null && r.unshift(Ws(e, s, i)),
        s = Vs(e, t),
        s != null && r.push(Ws(e, s, i))),
        e = e.return
    }
    return r
}
function qr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Jh(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        i ? (l = Vs(n, s),
        l != null && o.unshift(Ws(n, l, a))) : i || (l = Vs(n, s),
        l != null && o.push(Ws(n, l, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Eb = /\r\n?/g
  , Tb = /\u0000|\uFFFD/g;
function ep(e) {
    return (typeof e == "string" ? e : "" + e).replace(Eb, `
`).replace(Tb, "")
}
function _o(e, t, n) {
    if (t = ep(t),
    ep(e) !== t && n)
        throw Error(j(425))
}
function Ma() {}
var hc = null
  , pc = null;
function mc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var gc = typeof setTimeout == "function" ? setTimeout : void 0
  , Pb = typeof clearTimeout == "function" ? clearTimeout : void 0
  , tp = typeof Promise == "function" ? Promise : void 0
  , kb = typeof queueMicrotask == "function" ? queueMicrotask : typeof tp < "u" ? function(e) {
    return tp.resolve(null).then(e).catch(Rb)
}
: gc;
function Rb(e) {
    setTimeout(function() {
        throw e
    })
}
function du(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    zs(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    zs(t)
}
function Yn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function np(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Gi = Math.random().toString(36).slice(2)
  , qt = "__reactFiber$" + Gi
  , Hs = "__reactProps$" + Gi
  , pn = "__reactContainer$" + Gi
  , yc = "__reactEvents$" + Gi
  , Ab = "__reactListeners$" + Gi
  , Nb = "__reactHandles$" + Gi;
function Sr(e) {
    var t = e[qt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[pn] || n[qt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = np(e); e !== null; ) {
                    if (n = e[qt])
                        return n;
                    e = np(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function mo(e) {
    return e = e[qt] || e[pn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function si(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function pl(e) {
    return e[Hs] || null
}
var vc = []
  , oi = -1;
function dr(e) {
    return {
        current: e
    }
}
function ae(e) {
    0 > oi || (e.current = vc[oi],
    vc[oi] = null,
    oi--)
}
function re(e, t) {
    oi++,
    vc[oi] = e.current,
    e.current = t
}
var nr = {}
  , Be = dr(nr)
  , et = dr(!1)
  , Or = nr;
function Oi(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return nr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function tt(e) {
    return e = e.childContextTypes,
    e != null
}
function ja() {
    ae(et),
    ae(Be)
}
function rp(e, t, n) {
    if (Be.current !== nr)
        throw Error(j(168));
    re(Be, t),
    re(et, n)
}
function Jy(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(j(108, pS(e) || "Unknown", i));
    return me({}, n, r)
}
function Da(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || nr,
    Or = Be.current,
    re(Be, e),
    re(et, et.current),
    !0
}
function ip(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = Jy(e, t, Or),
    r.__reactInternalMemoizedMergedChildContext = e,
    ae(et),
    ae(Be),
    re(Be, e)) : ae(et),
    re(et, n)
}
var ln = null
  , ml = !1
  , fu = !1;
function ev(e) {
    ln === null ? ln = [e] : ln.push(e)
}
function Mb(e) {
    ml = !0,
    ev(e)
}
function fr() {
    if (!fu && ln !== null) {
        fu = !0;
        var e = 0
          , t = te;
        try {
            var n = ln;
            for (te = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            ln = null,
            ml = !1
        } catch (i) {
            throw ln !== null && (ln = ln.slice(e + 1)),
            Ty(Od, fr),
            i
        } finally {
            te = t,
            fu = !1
        }
    }
    return null
}
var ai = []
  , li = 0
  , La = null
  , Oa = 0
  , pt = []
  , mt = 0
  , Ir = null
  , cn = 1
  , dn = "";
function vr(e, t) {
    ai[li++] = Oa,
    ai[li++] = La,
    La = e,
    Oa = t
}
function tv(e, t, n) {
    pt[mt++] = cn,
    pt[mt++] = dn,
    pt[mt++] = Ir,
    Ir = e;
    var r = cn;
    e = dn;
    var i = 32 - Vt(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - Vt(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        cn = 1 << 32 - Vt(t) + i | n << i | r,
        dn = s + e
    } else
        cn = 1 << s | n << i | r,
        dn = e
}
function Wd(e) {
    e.return !== null && (vr(e, 1),
    tv(e, 1, 0))
}
function Hd(e) {
    for (; e === La; )
        La = ai[--li],
        ai[li] = null,
        Oa = ai[--li],
        ai[li] = null;
    for (; e === Ir; )
        Ir = pt[--mt],
        pt[mt] = null,
        dn = pt[--mt],
        pt[mt] = null,
        cn = pt[--mt],
        pt[mt] = null
}
var at = null
  , ot = null
  , ue = !1
  , It = null;
function nv(e, t) {
    var n = gt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function sp(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        at = e,
        ot = Yn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        at = e,
        ot = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Ir !== null ? {
            id: cn,
            overflow: dn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = gt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        at = e,
        ot = null,
        !0) : !1;
    default:
        return !1
    }
}
function xc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function wc(e) {
    if (ue) {
        var t = ot;
        if (t) {
            var n = t;
            if (!sp(e, t)) {
                if (xc(e))
                    throw Error(j(418));
                t = Yn(n.nextSibling);
                var r = at;
                t && sp(e, t) ? nv(r, n) : (e.flags = e.flags & -4097 | 2,
                ue = !1,
                at = e)
            }
        } else {
            if (xc(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            ue = !1,
            at = e
        }
    }
}
function op(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    at = e
}
function zo(e) {
    if (e !== at)
        return !1;
    if (!ue)
        return op(e),
        ue = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !mc(e.type, e.memoizedProps)),
    t && (t = ot)) {
        if (xc(e))
            throw rv(),
            Error(j(418));
        for (; t; )
            nv(e, t),
            t = Yn(t.nextSibling)
    }
    if (op(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ot = Yn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ot = null
        }
    } else
        ot = at ? Yn(e.stateNode.nextSibling) : null;
    return !0
}
function rv() {
    for (var e = ot; e; )
        e = Yn(e.nextSibling)
}
function Ii() {
    ot = at = null,
    ue = !1
}
function Kd(e) {
    It === null ? It = [e] : It.push(e)
}
var jb = wn.ReactCurrentBatchConfig;
function us(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var a = i.refs;
                o === null ? delete a[s] : a[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function Bo(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function ap(e) {
    var t = e._init;
    return t(e._payload)
}
function iv(e) {
    function t(g, p) {
        if (e) {
            var v = g.deletions;
            v === null ? (g.deletions = [p],
            g.flags |= 16) : v.push(p)
        }
    }
    function n(g, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(g, p),
            p = p.sibling;
        return null
    }
    function r(g, p) {
        for (g = new Map; p !== null; )
            p.key !== null ? g.set(p.key, p) : g.set(p.index, p),
            p = p.sibling;
        return g
    }
    function i(g, p) {
        return g = Jn(g, p),
        g.index = 0,
        g.sibling = null,
        g
    }
    function s(g, p, v) {
        return g.index = v,
        e ? (v = g.alternate,
        v !== null ? (v = v.index,
        v < p ? (g.flags |= 2,
        p) : v) : (g.flags |= 2,
        p)) : (g.flags |= 1048576,
        p)
    }
    function o(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function a(g, p, v, b) {
        return p === null || p.tag !== 6 ? (p = xu(v, g.mode, b),
        p.return = g,
        p) : (p = i(p, v),
        p.return = g,
        p)
    }
    function l(g, p, v, b) {
        var C = v.type;
        return C === ti ? c(g, p, v.props.children, b, v.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Dn && ap(C) === p.type) ? (b = i(p, v.props),
        b.ref = us(g, p, v),
        b.return = g,
        b) : (b = fa(v.type, v.key, v.props, null, g.mode, b),
        b.ref = us(g, p, v),
        b.return = g,
        b)
    }
    function u(g, p, v, b) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = wu(v, g.mode, b),
        p.return = g,
        p) : (p = i(p, v.children || []),
        p.return = g,
        p)
    }
    function c(g, p, v, b, C) {
        return p === null || p.tag !== 7 ? (p = Dr(v, g.mode, b, C),
        p.return = g,
        p) : (p = i(p, v),
        p.return = g,
        p)
    }
    function d(g, p, v) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = xu("" + p, g.mode, v),
            p.return = g,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case No:
                return v = fa(p.type, p.key, p.props, null, g.mode, v),
                v.ref = us(g, null, p),
                v.return = g,
                v;
            case ei:
                return p = wu(p, g.mode, v),
                p.return = g,
                p;
            case Dn:
                var b = p._init;
                return d(g, b(p._payload), v)
            }
            if (gs(p) || is(p))
                return p = Dr(p, g.mode, v, null),
                p.return = g,
                p;
            Bo(g, p)
        }
        return null
    }
    function f(g, p, v, b) {
        var C = p !== null ? p.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return C !== null ? null : a(g, p, "" + v, b);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case No:
                return v.key === C ? l(g, p, v, b) : null;
            case ei:
                return v.key === C ? u(g, p, v, b) : null;
            case Dn:
                return C = v._init,
                f(g, p, C(v._payload), b)
            }
            if (gs(v) || is(v))
                return C !== null ? null : c(g, p, v, b, null);
            Bo(g, v)
        }
        return null
    }
    function h(g, p, v, b, C) {
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return g = g.get(v) || null,
            a(p, g, "" + b, C);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case No:
                return g = g.get(b.key === null ? v : b.key) || null,
                l(p, g, b, C);
            case ei:
                return g = g.get(b.key === null ? v : b.key) || null,
                u(p, g, b, C);
            case Dn:
                var E = b._init;
                return h(g, p, v, E(b._payload), C)
            }
            if (gs(b) || is(b))
                return g = g.get(v) || null,
                c(p, g, b, C, null);
            Bo(p, b)
        }
        return null
    }
    function x(g, p, v, b) {
        for (var C = null, E = null, T = p, P = p = 0, N = null; T !== null && P < v.length; P++) {
            T.index > P ? (N = T,
            T = null) : N = T.sibling;
            var M = f(g, T, v[P], b);
            if (M === null) {
                T === null && (T = N);
                break
            }
            e && T && M.alternate === null && t(g, T),
            p = s(M, p, P),
            E === null ? C = M : E.sibling = M,
            E = M,
            T = N
        }
        if (P === v.length)
            return n(g, T),
            ue && vr(g, P),
            C;
        if (T === null) {
            for (; P < v.length; P++)
                T = d(g, v[P], b),
                T !== null && (p = s(T, p, P),
                E === null ? C = T : E.sibling = T,
                E = T);
            return ue && vr(g, P),
            C
        }
        for (T = r(g, T); P < v.length; P++)
            N = h(T, g, P, v[P], b),
            N !== null && (e && N.alternate !== null && T.delete(N.key === null ? P : N.key),
            p = s(N, p, P),
            E === null ? C = N : E.sibling = N,
            E = N);
        return e && T.forEach(function(_) {
            return t(g, _)
        }),
        ue && vr(g, P),
        C
    }
    function y(g, p, v, b) {
        var C = is(v);
        if (typeof C != "function")
            throw Error(j(150));
        if (v = C.call(v),
        v == null)
            throw Error(j(151));
        for (var E = C = null, T = p, P = p = 0, N = null, M = v.next(); T !== null && !M.done; P++,
        M = v.next()) {
            T.index > P ? (N = T,
            T = null) : N = T.sibling;
            var _ = f(g, T, M.value, b);
            if (_ === null) {
                T === null && (T = N);
                break
            }
            e && T && _.alternate === null && t(g, T),
            p = s(_, p, P),
            E === null ? C = _ : E.sibling = _,
            E = _,
            T = N
        }
        if (M.done)
            return n(g, T),
            ue && vr(g, P),
            C;
        if (T === null) {
            for (; !M.done; P++,
            M = v.next())
                M = d(g, M.value, b),
                M !== null && (p = s(M, p, P),
                E === null ? C = M : E.sibling = M,
                E = M);
            return ue && vr(g, P),
            C
        }
        for (T = r(g, T); !M.done; P++,
        M = v.next())
            M = h(T, g, P, M.value, b),
            M !== null && (e && M.alternate !== null && T.delete(M.key === null ? P : M.key),
            p = s(M, p, P),
            E === null ? C = M : E.sibling = M,
            E = M);
        return e && T.forEach(function(I) {
            return t(g, I)
        }),
        ue && vr(g, P),
        C
    }
    function w(g, p, v, b) {
        if (typeof v == "object" && v !== null && v.type === ti && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case No:
                e: {
                    for (var C = v.key, E = p; E !== null; ) {
                        if (E.key === C) {
                            if (C = v.type,
                            C === ti) {
                                if (E.tag === 7) {
                                    n(g, E.sibling),
                                    p = i(E, v.props.children),
                                    p.return = g,
                                    g = p;
                                    break e
                                }
                            } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Dn && ap(C) === E.type) {
                                n(g, E.sibling),
                                p = i(E, v.props),
                                p.ref = us(g, E, v),
                                p.return = g,
                                g = p;
                                break e
                            }
                            n(g, E);
                            break
                        } else
                            t(g, E);
                        E = E.sibling
                    }
                    v.type === ti ? (p = Dr(v.props.children, g.mode, b, v.key),
                    p.return = g,
                    g = p) : (b = fa(v.type, v.key, v.props, null, g.mode, b),
                    b.ref = us(g, p, v),
                    b.return = g,
                    g = b)
                }
                return o(g);
            case ei:
                e: {
                    for (E = v.key; p !== null; ) {
                        if (p.key === E)
                            if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                                n(g, p.sibling),
                                p = i(p, v.children || []),
                                p.return = g,
                                g = p;
                                break e
                            } else {
                                n(g, p);
                                break
                            }
                        else
                            t(g, p);
                        p = p.sibling
                    }
                    p = wu(v, g.mode, b),
                    p.return = g,
                    g = p
                }
                return o(g);
            case Dn:
                return E = v._init,
                w(g, p, E(v._payload), b)
            }
            if (gs(v))
                return x(g, p, v, b);
            if (is(v))
                return y(g, p, v, b);
            Bo(g, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        p !== null && p.tag === 6 ? (n(g, p.sibling),
        p = i(p, v),
        p.return = g,
        g = p) : (n(g, p),
        p = xu(v, g.mode, b),
        p.return = g,
        g = p),
        o(g)) : n(g, p)
    }
    return w
}
var Vi = iv(!0)
  , sv = iv(!1)
  , Ia = dr(null)
  , Va = null
  , ui = null
  , Gd = null;
function Qd() {
    Gd = ui = Va = null
}
function Yd(e) {
    var t = Ia.current;
    ae(Ia),
    e._currentValue = t
}
function Sc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Si(e, t) {
    Va = e,
    Gd = ui = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Je = !0),
    e.firstContext = null)
}
function bt(e) {
    var t = e._currentValue;
    if (Gd !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        ui === null) {
            if (Va === null)
                throw Error(j(308));
            ui = e,
            Va.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            ui = ui.next = e;
    return t
}
var br = null;
function Xd(e) {
    br === null ? br = [e] : br.push(e)
}
function ov(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Xd(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    mn(e, r)
}
function mn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ln = !1;
function qd(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function av(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function fn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Xn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Z & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        mn(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Xd(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    mn(e, n)
}
function oa(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Id(e, n)
    }
}
function lp(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Fa(e, t, n, r) {
    var i = e.updateQueue;
    Ln = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        o === null ? s = u : o.next = u,
        o = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (s !== null) {
        var d = i.baseState;
        o = 0,
        c = u = l = null,
        a = s;
        do {
            var f = a.lane
              , h = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e
                      , y = a;
                    switch (f = t,
                    h = n,
                    y.tag) {
                    case 1:
                        if (x = y.payload,
                        typeof x == "function") {
                            d = x.call(h, d, f);
                            break e
                        }
                        d = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = y.payload,
                        f = typeof x == "function" ? x.call(h, d, f) : x,
                        f == null)
                            break e;
                        d = me({}, d, f);
                        break e;
                    case 2:
                        Ln = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = i.effects,
                f === null ? i.effects = [a] : f.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = h,
                l = d) : c = c.next = h,
                o |= f;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                i.lastBaseUpdate = f,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d),
        i.baseState = l,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                o |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        Fr |= o,
        e.lanes = o,
        e.memoizedState = d
    }
}
function up(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(j(191, i));
                i.call(r)
            }
        }
}
var go = {}
  , Jt = dr(go)
  , Ks = dr(go)
  , Gs = dr(go);
function Cr(e) {
    if (e === go)
        throw Error(j(174));
    return e
}
function Zd(e, t) {
    switch (re(Gs, t),
    re(Ks, e),
    re(Jt, go),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : tc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = tc(t, e)
    }
    ae(Jt),
    re(Jt, t)
}
function Fi() {
    ae(Jt),
    ae(Ks),
    ae(Gs)
}
function lv(e) {
    Cr(Gs.current);
    var t = Cr(Jt.current)
      , n = tc(t, e.type);
    t !== n && (re(Ks, e),
    re(Jt, n))
}
function Jd(e) {
    Ks.current === e && (ae(Jt),
    ae(Ks))
}
var fe = dr(0);
function _a(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var hu = [];
function ef() {
    for (var e = 0; e < hu.length; e++)
        hu[e]._workInProgressVersionPrimary = null;
    hu.length = 0
}
var aa = wn.ReactCurrentDispatcher
  , pu = wn.ReactCurrentBatchConfig
  , Vr = 0
  , pe = null
  , Te = null
  , Re = null
  , za = !1
  , Ps = !1
  , Qs = 0
  , Db = 0;
function Ie() {
    throw Error(j(321))
}
function tf(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!zt(e[n], t[n]))
            return !1;
    return !0
}
function nf(e, t, n, r, i, s) {
    if (Vr = s,
    pe = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    aa.current = e === null || e.memoizedState === null ? Vb : Fb,
    e = n(r, i),
    Ps) {
        s = 0;
        do {
            if (Ps = !1,
            Qs = 0,
            25 <= s)
                throw Error(j(301));
            s += 1,
            Re = Te = null,
            t.updateQueue = null,
            aa.current = _b,
            e = n(r, i)
        } while (Ps)
    }
    if (aa.current = Ba,
    t = Te !== null && Te.next !== null,
    Vr = 0,
    Re = Te = pe = null,
    za = !1,
    t)
        throw Error(j(300));
    return e
}
function rf() {
    var e = Qs !== 0;
    return Qs = 0,
    e
}
function Kt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Re === null ? pe.memoizedState = Re = e : Re = Re.next = e,
    Re
}
function Ct() {
    if (Te === null) {
        var e = pe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Te.next;
    var t = Re === null ? pe.memoizedState : Re.next;
    if (t !== null)
        Re = t,
        Te = e;
    else {
        if (e === null)
            throw Error(j(310));
        Te = e,
        e = {
            memoizedState: Te.memoizedState,
            baseState: Te.baseState,
            baseQueue: Te.baseQueue,
            queue: Te.queue,
            next: null
        },
        Re === null ? pe.memoizedState = Re = e : Re = Re.next = e
    }
    return Re
}
function Ys(e, t) {
    return typeof t == "function" ? t(e) : t
}
function mu(e) {
    var t = Ct()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = Te
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var a = o = null
          , l = null
          , u = s;
        do {
            var c = u.lane;
            if ((Vr & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                o = r) : l = l.next = d,
                pe.lanes |= c,
                Fr |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? o = r : l.next = a,
        zt(r, t.memoizedState) || (Je = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            pe.lanes |= s,
            Fr |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function gu(e) {
    var t = Ct()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
            o = o.next;
        while (o !== i);
        zt(s, t.memoizedState) || (Je = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function uv() {}
function cv(e, t) {
    var n = pe
      , r = Ct()
      , i = t()
      , s = !zt(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    Je = !0),
    r = r.queue,
    sf(hv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || Re !== null && Re.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Xs(9, fv.bind(null, n, r, i, t), void 0, null),
        Ae === null)
            throw Error(j(349));
        Vr & 30 || dv(n, t, i)
    }
    return i
}
function dv(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = pe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    pe.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function fv(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    pv(t) && mv(e)
}
function hv(e, t, n) {
    return n(function() {
        pv(t) && mv(e)
    })
}
function pv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !zt(e, n)
    } catch {
        return !0
    }
}
function mv(e) {
    var t = mn(e, 1);
    t !== null && Ft(t, e, 1, -1)
}
function cp(e) {
    var t = Kt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ys,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Ib.bind(null, pe, e),
    [t.memoizedState, e]
}
function Xs(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = pe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    pe.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function gv() {
    return Ct().memoizedState
}
function la(e, t, n, r) {
    var i = Kt();
    pe.flags |= e,
    i.memoizedState = Xs(1 | t, n, void 0, r === void 0 ? null : r)
}
function gl(e, t, n, r) {
    var i = Ct();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Te !== null) {
        var o = Te.memoizedState;
        if (s = o.destroy,
        r !== null && tf(r, o.deps)) {
            i.memoizedState = Xs(t, n, s, r);
            return
        }
    }
    pe.flags |= e,
    i.memoizedState = Xs(1 | t, n, s, r)
}
function dp(e, t) {
    return la(8390656, 8, e, t)
}
function sf(e, t) {
    return gl(2048, 8, e, t)
}
function yv(e, t) {
    return gl(4, 2, e, t)
}
function vv(e, t) {
    return gl(4, 4, e, t)
}
function xv(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function wv(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    gl(4, 4, xv.bind(null, t, e), n)
}
function of() {}
function Sv(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && tf(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function bv(e, t) {
    var n = Ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && tf(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Cv(e, t, n) {
    return Vr & 21 ? (zt(n, t) || (n = Ry(),
    pe.lanes |= n,
    Fr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Je = !0),
    e.memoizedState = n)
}
function Lb(e, t) {
    var n = te;
    te = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = pu.transition;
    pu.transition = {};
    try {
        e(!1),
        t()
    } finally {
        te = n,
        pu.transition = r
    }
}
function Ev() {
    return Ct().memoizedState
}
function Ob(e, t, n) {
    var r = Zn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Tv(e))
        Pv(t, n);
    else if (n = ov(e, t, n, r),
    n !== null) {
        var i = Ge();
        Ft(n, e, r, i),
        kv(n, t, r)
    }
}
function Ib(e, t, n) {
    var r = Zn(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Tv(e))
        Pv(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , a = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                zt(a, o)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    Xd(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = ov(e, t, i, r),
        n !== null && (i = Ge(),
        Ft(n, e, r, i),
        kv(n, t, r))
    }
}
function Tv(e) {
    var t = e.alternate;
    return e === pe || t !== null && t === pe
}
function Pv(e, t) {
    Ps = za = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function kv(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Id(e, n)
    }
}
var Ba = {
    readContext: bt,
    useCallback: Ie,
    useContext: Ie,
    useEffect: Ie,
    useImperativeHandle: Ie,
    useInsertionEffect: Ie,
    useLayoutEffect: Ie,
    useMemo: Ie,
    useReducer: Ie,
    useRef: Ie,
    useState: Ie,
    useDebugValue: Ie,
    useDeferredValue: Ie,
    useTransition: Ie,
    useMutableSource: Ie,
    useSyncExternalStore: Ie,
    useId: Ie,
    unstable_isNewReconciler: !1
}
  , Vb = {
    readContext: bt,
    useCallback: function(e, t) {
        return Kt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: bt,
    useEffect: dp,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        la(4194308, 4, xv.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return la(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return la(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Kt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Kt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Ob.bind(null, pe, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Kt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: cp,
    useDebugValue: of,
    useDeferredValue: function(e) {
        return Kt().memoizedState = e
    },
    useTransition: function() {
        var e = cp(!1)
          , t = e[0];
        return e = Lb.bind(null, e[1]),
        Kt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = pe
          , i = Kt();
        if (ue) {
            if (n === void 0)
                throw Error(j(407));
            n = n()
        } else {
            if (n = t(),
            Ae === null)
                throw Error(j(349));
            Vr & 30 || dv(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        dp(hv.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        Xs(9, fv.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Kt()
          , t = Ae.identifierPrefix;
        if (ue) {
            var n = dn
              , r = cn;
            n = (r & ~(1 << 32 - Vt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Qs++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Db++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Fb = {
    readContext: bt,
    useCallback: Sv,
    useContext: bt,
    useEffect: sf,
    useImperativeHandle: wv,
    useInsertionEffect: yv,
    useLayoutEffect: vv,
    useMemo: bv,
    useReducer: mu,
    useRef: gv,
    useState: function() {
        return mu(Ys)
    },
    useDebugValue: of,
    useDeferredValue: function(e) {
        var t = Ct();
        return Cv(t, Te.memoizedState, e)
    },
    useTransition: function() {
        var e = mu(Ys)[0]
          , t = Ct().memoizedState;
        return [e, t]
    },
    useMutableSource: uv,
    useSyncExternalStore: cv,
    useId: Ev,
    unstable_isNewReconciler: !1
}
  , _b = {
    readContext: bt,
    useCallback: Sv,
    useContext: bt,
    useEffect: sf,
    useImperativeHandle: wv,
    useInsertionEffect: yv,
    useLayoutEffect: vv,
    useMemo: bv,
    useReducer: gu,
    useRef: gv,
    useState: function() {
        return gu(Ys)
    },
    useDebugValue: of,
    useDeferredValue: function(e) {
        var t = Ct();
        return Te === null ? t.memoizedState = e : Cv(t, Te.memoizedState, e)
    },
    useTransition: function() {
        var e = gu(Ys)[0]
          , t = Ct().memoizedState;
        return [e, t]
    },
    useMutableSource: uv,
    useSyncExternalStore: cv,
    useId: Ev,
    unstable_isNewReconciler: !1
};
function Mt(e, t) {
    if (e && e.defaultProps) {
        t = me({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function bc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : me({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var yl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? $r(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ge()
          , i = Zn(e)
          , s = fn(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = Xn(e, s, i),
        t !== null && (Ft(t, e, i, r),
        oa(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ge()
          , i = Zn(e)
          , s = fn(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Xn(e, s, i),
        t !== null && (Ft(t, e, i, r),
        oa(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ge()
          , r = Zn(e)
          , i = fn(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Xn(e, i, r),
        t !== null && (Ft(t, e, r, n),
        oa(t, e, r))
    }
};
function fp(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !$s(n, r) || !$s(i, s) : !0
}
function Rv(e, t, n) {
    var r = !1
      , i = nr
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = bt(s) : (i = tt(t) ? Or : Be.current,
    r = t.contextTypes,
    s = (r = r != null) ? Oi(e, i) : nr),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = yl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function hp(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && yl.enqueueReplaceState(t, t.state, null)
}
function Cc(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    qd(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = bt(s) : (s = tt(t) ? Or : Be.current,
    i.context = Oi(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (bc(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && yl.enqueueReplaceState(i, i.state, null),
    Fa(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function _i(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += hS(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function yu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Ec(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var zb = typeof WeakMap == "function" ? WeakMap : Map;
function Av(e, t, n) {
    n = fn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ua || (Ua = !0,
        Lc = r),
        Ec(e, t)
    }
    ,
    n
}
function Nv(e, t, n) {
    n = fn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Ec(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Ec(e, t),
        typeof r != "function" && (qn === null ? qn = new Set([this]) : qn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function pp(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new zb;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = eC.bind(null, e, t, n),
    t.then(e, e))
}
function mp(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function gp(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = fn(-1, 1),
    t.tag = 2,
    Xn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Bb = wn.ReactCurrentOwner
  , Je = !1;
function Ue(e, t, n, r) {
    t.child = e === null ? sv(t, null, n, r) : Vi(t, e.child, n, r)
}
function yp(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return Si(t, i),
    r = nf(e, t, n, r, s, i),
    n = rf(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    gn(e, t, i)) : (ue && n && Wd(t),
    t.flags |= 1,
    Ue(e, t, r, i),
    t.child)
}
function vp(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !pf(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Mv(e, t, s, r, i)) : (e = fa(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : $s,
        n(o, r) && e.ref === t.ref)
            return gn(e, t, i)
    }
    return t.flags |= 1,
    e = Jn(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Mv(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if ($s(s, r) && e.ref === t.ref)
            if (Je = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Je = !0);
            else
                return t.lanes = e.lanes,
                gn(e, t, i)
    }
    return Tc(e, t, n, r, i)
}
function jv(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            re(di, rt),
            rt |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                re(di, rt),
                rt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            re(di, rt),
            rt |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        re(di, rt),
        rt |= r;
    return Ue(e, t, i, n),
    t.child
}
function Dv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Tc(e, t, n, r, i) {
    var s = tt(n) ? Or : Be.current;
    return s = Oi(t, s),
    Si(t, i),
    n = nf(e, t, n, r, s, i),
    r = rf(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    gn(e, t, i)) : (ue && r && Wd(t),
    t.flags |= 1,
    Ue(e, t, n, i),
    t.child)
}
function xp(e, t, n, r, i) {
    if (tt(n)) {
        var s = !0;
        Da(t)
    } else
        s = !1;
    if (Si(t, i),
    t.stateNode === null)
        ua(e, t),
        Rv(t, n, r),
        Cc(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var l = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = bt(u) : (u = tt(n) ? Or : Be.current,
        u = Oi(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && hp(t, o, r, u),
        Ln = !1;
        var f = t.memoizedState;
        o.state = f,
        Fa(t, r, o, i),
        l = t.memoizedState,
        a !== r || f !== l || et.current || Ln ? (typeof c == "function" && (bc(t, n, c, r),
        l = t.memoizedState),
        (a = Ln || fp(t, n, a, r, f, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        o.props = r,
        o.state = l,
        o.context = u,
        r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        av(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : Mt(t.type, a),
        o.props = u,
        d = t.pendingProps,
        f = o.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = bt(l) : (l = tt(n) ? Or : Be.current,
        l = Oi(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || f !== l) && hp(t, o, r, l),
        Ln = !1,
        f = t.memoizedState,
        o.state = f,
        Fa(t, r, o, i);
        var x = t.memoizedState;
        a !== d || f !== x || et.current || Ln ? (typeof h == "function" && (bc(t, n, h, r),
        x = t.memoizedState),
        (u = Ln || fp(t, n, u, r, f, x, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, l)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        o.props = r,
        o.state = x,
        o.context = l,
        r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Pc(e, t, n, r, s, i)
}
function Pc(e, t, n, r, i, s) {
    Dv(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && ip(t, n, !1),
        gn(e, t, s);
    r = t.stateNode,
    Bb.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = Vi(t, e.child, null, s),
    t.child = Vi(t, null, a, s)) : Ue(e, t, a, s),
    t.memoizedState = r.state,
    i && ip(t, n, !0),
    t.child
}
function Lv(e) {
    var t = e.stateNode;
    t.pendingContext ? rp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rp(e, t.context, !1),
    Zd(e, t.containerInfo)
}
function wp(e, t, n, r, i) {
    return Ii(),
    Kd(i),
    t.flags |= 256,
    Ue(e, t, n, r),
    t.child
}
var kc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Rc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ov(e, t, n) {
    var r = t.pendingProps, i = fe.current, s = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    re(fe, i & 1),
    e === null)
        return wc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = wl(o, r, 0, null),
        e = Dr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Rc(n),
        t.memoizedState = kc,
        e) : af(t, o));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return $b(e, t, o, r, a, i, n);
    if (s) {
        s = r.fallback,
        o = t.mode,
        i = e.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Jn(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? s = Jn(a, s) : (s = Dr(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? Rc(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = kc,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Jn(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function af(e, t) {
    return t = wl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function $o(e, t, n, r) {
    return r !== null && Kd(r),
    Vi(t, e.child, null, n),
    e = af(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function $b(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = yu(Error(j(422))),
        $o(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = wl({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = Dr(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && Vi(t, e.child, null, o),
        t.child.memoizedState = Rc(o),
        t.memoizedState = kc,
        s);
    if (!(t.mode & 1))
        return $o(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(j(419)),
        r = yu(s, r, void 0),
        $o(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    Je || a) {
        if (r = Ae,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            mn(e, i),
            Ft(r, e, i, -1))
        }
        return hf(),
        r = yu(Error(j(421))),
        $o(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = tC.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    ot = Yn(i.nextSibling),
    at = t,
    ue = !0,
    It = null,
    e !== null && (pt[mt++] = cn,
    pt[mt++] = dn,
    pt[mt++] = Ir,
    cn = e.id,
    dn = e.overflow,
    Ir = t),
    t = af(t, r.children),
    t.flags |= 4096,
    t)
}
function Sp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Sc(e.return, t, n)
}
function vu(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function Iv(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (Ue(e, t, r.children, n),
    r = fe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Sp(e, n, t);
                else if (e.tag === 19)
                    Sp(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (re(fe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && _a(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            vu(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && _a(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            vu(t, !0, n, null, s);
            break;
        case "together":
            vu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ua(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function gn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Fr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Jn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Jn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Ub(e, t, n) {
    switch (t.tag) {
    case 3:
        Lv(t),
        Ii();
        break;
    case 5:
        lv(t);
        break;
    case 1:
        tt(t.type) && Da(t);
        break;
    case 4:
        Zd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        re(Ia, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (re(fe, fe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ov(e, t, n) : (re(fe, fe.current & 1),
            e = gn(e, t, n),
            e !== null ? e.sibling : null);
        re(fe, fe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Iv(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        re(fe, fe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        jv(e, t, n)
    }
    return gn(e, t, n)
}
var Vv, Ac, Fv, _v;
Vv = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ac = function() {}
;
Fv = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Cr(Jt.current);
        var s = null;
        switch (n) {
        case "input":
            i = qu(e, i),
            r = qu(e, r),
            s = [];
            break;
        case "select":
            i = me({}, i, {
                value: void 0
            }),
            r = me({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = ec(e, i),
            r = ec(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ma)
        }
        nc(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Os.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}),
                            n[o] = l[o])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Os.hasOwnProperty(u) ? (l != null && u === "onScroll" && oe("scroll", e),
                    s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
_v = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function cs(e, t) {
    if (!ue)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Wb(e, t, n) {
    var r = t.pendingProps;
    switch (Hd(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ve(t),
        null;
    case 1:
        return tt(t.type) && ja(),
        Ve(t),
        null;
    case 3:
        return r = t.stateNode,
        Fi(),
        ae(et),
        ae(Be),
        ef(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (zo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        It !== null && (Vc(It),
        It = null))),
        Ac(e, t),
        Ve(t),
        null;
    case 5:
        Jd(t);
        var i = Cr(Gs.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Fv(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return Ve(t),
                null
            }
            if (e = Cr(Jt.current),
            zo(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[qt] = t,
                r[Hs] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < vs.length; i++)
                        oe(vs[i], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    Nh(r, s),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    jh(r, s),
                    oe("invalid", r)
                }
                nc(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var a = s[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && _o(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && _o(r.textContent, a, e),
                        i = ["children", "" + a]) : Os.hasOwnProperty(o) && a != null && o === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    Mo(r),
                    Mh(r, s, !0);
                    break;
                case "textarea":
                    Mo(r),
                    Dh(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = Ma)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = hy(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[qt] = t,
                e[Hs] = r,
                Vv(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = rc(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < vs.length; i++)
                            oe(vs[i], e);
                        i = r;
                        break;
                    case "source":
                        oe("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        i = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Nh(e, r),
                        i = qu(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = me({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        jh(e, r),
                        i = ec(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    nc(n, i),
                    a = i;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? gy(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && py(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Is(e, l) : typeof l == "number" && Is(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Os.hasOwnProperty(s) ? l != null && s === "onScroll" && oe("scroll", e) : l != null && Nd(e, s, l, o))
                        }
                    switch (n) {
                    case "input":
                        Mo(e),
                        Mh(e, r, !1);
                        break;
                    case "textarea":
                        Mo(e),
                        Dh(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + tr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? yi(e, !!r.multiple, s, !1) : r.defaultValue != null && yi(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = Ma)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ve(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            _v(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = Cr(Gs.current),
            Cr(Jt.current),
            zo(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[qt] = t,
                (s = r.nodeValue !== n) && (e = at,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        _o(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && _o(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[qt] = t,
                t.stateNode = r
        }
        return Ve(t),
        null;
    case 13:
        if (ae(fe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ue && ot !== null && t.mode & 1 && !(t.flags & 128))
                rv(),
                Ii(),
                t.flags |= 98560,
                s = !1;
            else if (s = zo(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(j(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(j(317));
                    s[qt] = t
                } else
                    Ii(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ve(t),
                s = !1
            } else
                It !== null && (Vc(It),
                It = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || fe.current & 1 ? ke === 0 && (ke = 3) : hf())),
        t.updateQueue !== null && (t.flags |= 4),
        Ve(t),
        null);
    case 4:
        return Fi(),
        Ac(e, t),
        e === null && Us(t.stateNode.containerInfo),
        Ve(t),
        null;
    case 10:
        return Yd(t.type._context),
        Ve(t),
        null;
    case 17:
        return tt(t.type) && ja(),
        Ve(t),
        null;
    case 19:
        if (ae(fe),
        s = t.memoizedState,
        s === null)
            return Ve(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                cs(s, !1);
            else {
                if (ke !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = _a(e),
                        o !== null) {
                            for (t.flags |= 128,
                            cs(s, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                e = o.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return re(fe, fe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && ve() > zi && (t.flags |= 128,
                r = !0,
                cs(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = _a(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    cs(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !ue)
                        return Ve(t),
                        null
                } else
                    2 * ve() - s.renderingStartTime > zi && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    cs(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = ve(),
        t.sibling = null,
        n = fe.current,
        re(fe, r ? n & 1 | 2 : n & 1),
        t) : (Ve(t),
        null);
    case 22:
    case 23:
        return ff(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? rt & 1073741824 && (Ve(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function Hb(e, t) {
    switch (Hd(t),
    t.tag) {
    case 1:
        return tt(t.type) && ja(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Fi(),
        ae(et),
        ae(Be),
        ef(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Jd(t),
        null;
    case 13:
        if (ae(fe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            Ii()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ae(fe),
        null;
    case 4:
        return Fi(),
        null;
    case 10:
        return Yd(t.type._context),
        null;
    case 22:
    case 23:
        return ff(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Uo = !1
  , _e = !1
  , Kb = typeof WeakSet == "function" ? WeakSet : Set
  , V = null;
function ci(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ye(e, t, r)
            }
        else
            n.current = null
}
function Nc(e, t, n) {
    try {
        n()
    } catch (r) {
        ye(e, t, r)
    }
}
var bp = !1;
function Gb(e, t) {
    if (hc = Ra,
    e = Wy(),
    Ud(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var h; d !== n || i !== 0 && d.nodeType !== 3 || (a = o + i),
                        d !== s || r !== 0 && d.nodeType !== 3 || (l = o + r),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (h = d.firstChild) !== null; )
                            f = d,
                            d = h;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === i && (a = o),
                            f === s && ++c === r && (l = o),
                            (h = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (pc = {
        focusedElem: e,
        selectionRange: n
    },
    Ra = !1,
    V = t; V !== null; )
        if (t = V,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            V = e;
        else
            for (; V !== null; ) {
                t = V;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var y = x.memoizedProps
                                  , w = x.memoizedState
                                  , g = t.stateNode
                                  , p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Mt(t.type, y), w);
                                g.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (b) {
                    ye(t, t.return, b)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    V = e;
                    break
                }
                V = t.return
            }
    return x = bp,
    bp = !1,
    x
}
function ks(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && Nc(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function vl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Mc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function zv(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    zv(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[qt],
    delete t[Hs],
    delete t[yc],
    delete t[Ab],
    delete t[Nb])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Bv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Cp(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Bv(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function jc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ma));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (jc(e, t, n),
        e = e.sibling; e !== null; )
            jc(e, t, n),
            e = e.sibling
}
function Dc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Dc(e, t, n),
        e = e.sibling; e !== null; )
            Dc(e, t, n),
            e = e.sibling
}
var Ne = null
  , Ot = !1;
function kn(e, t, n) {
    for (n = n.child; n !== null; )
        $v(e, t, n),
        n = n.sibling
}
function $v(e, t, n) {
    if (Zt && typeof Zt.onCommitFiberUnmount == "function")
        try {
            Zt.onCommitFiberUnmount(cl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        _e || ci(n, t);
    case 6:
        var r = Ne
          , i = Ot;
        Ne = null,
        kn(e, t, n),
        Ne = r,
        Ot = i,
        Ne !== null && (Ot ? (e = Ne,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ne.removeChild(n.stateNode));
        break;
    case 18:
        Ne !== null && (Ot ? (e = Ne,
        n = n.stateNode,
        e.nodeType === 8 ? du(e.parentNode, n) : e.nodeType === 1 && du(e, n),
        zs(e)) : du(Ne, n.stateNode));
        break;
    case 4:
        r = Ne,
        i = Ot,
        Ne = n.stateNode.containerInfo,
        Ot = !0,
        kn(e, t, n),
        Ne = r,
        Ot = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!_e && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && Nc(n, t, o),
                i = i.next
            } while (i !== r)
        }
        kn(e, t, n);
        break;
    case 1:
        if (!_e && (ci(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                ye(n, t, a)
            }
        kn(e, t, n);
        break;
    case 21:
        kn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (_e = (r = _e) || n.memoizedState !== null,
        kn(e, t, n),
        _e = r) : kn(e, t, n);
        break;
    default:
        kn(e, t, n)
    }
}
function Ep(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Kb),
        t.forEach(function(r) {
            var i = nC.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function kt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Ne = a.stateNode,
                        Ot = !1;
                        break e;
                    case 3:
                        Ne = a.stateNode.containerInfo,
                        Ot = !0;
                        break e;
                    case 4:
                        Ne = a.stateNode.containerInfo,
                        Ot = !0;
                        break e
                    }
                    a = a.return
                }
                if (Ne === null)
                    throw Error(j(160));
                $v(s, o, i),
                Ne = null,
                Ot = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (u) {
                ye(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Uv(t, e),
            t = t.sibling
}
function Uv(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (kt(t, e),
        Ht(e),
        r & 4) {
            try {
                ks(3, e, e.return),
                vl(3, e)
            } catch (y) {
                ye(e, e.return, y)
            }
            try {
                ks(5, e, e.return)
            } catch (y) {
                ye(e, e.return, y)
            }
        }
        break;
    case 1:
        kt(t, e),
        Ht(e),
        r & 512 && n !== null && ci(n, n.return);
        break;
    case 5:
        if (kt(t, e),
        Ht(e),
        r & 512 && n !== null && ci(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Is(i, "")
            } catch (y) {
                ye(e, e.return, y)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && dy(i, s),
                    rc(a, o);
                    var u = rc(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var c = l[o]
                          , d = l[o + 1];
                        c === "style" ? gy(i, d) : c === "dangerouslySetInnerHTML" ? py(i, d) : c === "children" ? Is(i, d) : Nd(i, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        Zu(i, s);
                        break;
                    case "textarea":
                        fy(i, s);
                        break;
                    case "select":
                        var f = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var h = s.value;
                        h != null ? yi(i, !!s.multiple, h, !1) : f !== !!s.multiple && (s.defaultValue != null ? yi(i, !!s.multiple, s.defaultValue, !0) : yi(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Hs] = s
                } catch (y) {
                    ye(e, e.return, y)
                }
        }
        break;
    case 6:
        if (kt(t, e),
        Ht(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (y) {
                ye(e, e.return, y)
            }
        }
        break;
    case 3:
        if (kt(t, e),
        Ht(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                zs(t.containerInfo)
            } catch (y) {
                ye(e, e.return, y)
            }
        break;
    case 4:
        kt(t, e),
        Ht(e);
        break;
    case 13:
        kt(t, e),
        Ht(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (cf = ve())),
        r & 4 && Ep(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (_e = (u = _e) || c,
        kt(t, e),
        _e = u) : kt(t, e),
        Ht(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (V = e,
                c = e.child; c !== null; ) {
                    for (d = V = c; V !== null; ) {
                        switch (f = V,
                        h = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ks(4, f, f.return);
                            break;
                        case 1:
                            ci(f, f.return);
                            var x = f.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (y) {
                                    ye(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            ci(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Pp(d);
                                continue
                            }
                        }
                        h !== null ? (h.return = f,
                        V = h) : Pp(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            i = d.stateNode,
                            u ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = my("display", o))
                        } catch (y) {
                            ye(e, e.return, y)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (y) {
                            ye(e, e.return, y)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        kt(t, e),
        Ht(e),
        r & 4 && Ep(e);
        break;
    case 21:
        break;
    default:
        kt(t, e),
        Ht(e)
    }
}
function Ht(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Bv(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Is(i, ""),
                r.flags &= -33);
                var s = Cp(e);
                Dc(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = Cp(e);
                jc(e, a, o);
                break;
            default:
                throw Error(j(161))
            }
        } catch (l) {
            ye(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Qb(e, t, n) {
    V = e,
    Wv(e)
}
function Wv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null; ) {
        var i = V
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Uo;
            if (!o) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || _e;
                a = Uo;
                var u = _e;
                if (Uo = o,
                (_e = l) && !u)
                    for (V = i; V !== null; )
                        o = V,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? kp(i) : l !== null ? (l.return = o,
                        V = l) : kp(i);
                for (; s !== null; )
                    V = s,
                    Wv(s),
                    s = s.sibling;
                V = i,
                Uo = a,
                _e = u
            }
            Tp(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            V = s) : Tp(e)
    }
}
function Tp(e) {
    for (; V !== null; ) {
        var t = V;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        _e || vl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !_e)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Mt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && up(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            up(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && zs(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                    }
                _e || t.flags & 512 && Mc(t)
            } catch (f) {
                ye(t, t.return, f)
            }
        }
        if (t === e) {
            V = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            V = n;
            break
        }
        V = t.return
    }
}
function Pp(e) {
    for (; V !== null; ) {
        var t = V;
        if (t === e) {
            V = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            V = n;
            break
        }
        V = t.return
    }
}
function kp(e) {
    for (; V !== null; ) {
        var t = V;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    vl(4, t)
                } catch (l) {
                    ye(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        ye(t, i, l)
                    }
                }
                var s = t.return;
                try {
                    Mc(t)
                } catch (l) {
                    ye(t, s, l)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Mc(t)
                } catch (l) {
                    ye(t, o, l)
                }
            }
        } catch (l) {
            ye(t, t.return, l)
        }
        if (t === e) {
            V = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            V = a;
            break
        }
        V = t.return
    }
}
var Yb = Math.ceil
  , $a = wn.ReactCurrentDispatcher
  , lf = wn.ReactCurrentOwner
  , vt = wn.ReactCurrentBatchConfig
  , Z = 0
  , Ae = null
  , be = null
  , je = 0
  , rt = 0
  , di = dr(0)
  , ke = 0
  , qs = null
  , Fr = 0
  , xl = 0
  , uf = 0
  , Rs = null
  , Ze = null
  , cf = 0
  , zi = 1 / 0
  , an = null
  , Ua = !1
  , Lc = null
  , qn = null
  , Wo = !1
  , Un = null
  , Wa = 0
  , As = 0
  , Oc = null
  , ca = -1
  , da = 0;
function Ge() {
    return Z & 6 ? ve() : ca !== -1 ? ca : ca = ve()
}
function Zn(e) {
    return e.mode & 1 ? Z & 2 && je !== 0 ? je & -je : jb.transition !== null ? (da === 0 && (da = Ry()),
    da) : (e = te,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Oy(e.type)),
    e) : 1
}
function Ft(e, t, n, r) {
    if (50 < As)
        throw As = 0,
        Oc = null,
        Error(j(185));
    ho(e, n, r),
    (!(Z & 2) || e !== Ae) && (e === Ae && (!(Z & 2) && (xl |= n),
    ke === 4 && In(e, je)),
    nt(e, r),
    n === 1 && Z === 0 && !(t.mode & 1) && (zi = ve() + 500,
    ml && fr()))
}
function nt(e, t) {
    var n = e.callbackNode;
    jS(e, t);
    var r = ka(e, e === Ae ? je : 0);
    if (r === 0)
        n !== null && Ih(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Ih(n),
        t === 1)
            e.tag === 0 ? Mb(Rp.bind(null, e)) : ev(Rp.bind(null, e)),
            kb(function() {
                !(Z & 6) && fr()
            }),
            n = null;
        else {
            switch (Ay(r)) {
            case 1:
                n = Od;
                break;
            case 4:
                n = Py;
                break;
            case 16:
                n = Pa;
                break;
            case 536870912:
                n = ky;
                break;
            default:
                n = Pa
            }
            n = Zv(n, Hv.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Hv(e, t) {
    if (ca = -1,
    da = 0,
    Z & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (bi() && e.callbackNode !== n)
        return null;
    var r = ka(e, e === Ae ? je : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ha(e, r);
    else {
        t = r;
        var i = Z;
        Z |= 2;
        var s = Gv();
        (Ae !== e || je !== t) && (an = null,
        zi = ve() + 500,
        jr(e, t));
        do
            try {
                Zb();
                break
            } catch (a) {
                Kv(e, a)
            }
        while (!0);
        Qd(),
        $a.current = s,
        Z = i,
        be !== null ? t = 0 : (Ae = null,
        je = 0,
        t = ke)
    }
    if (t !== 0) {
        if (t === 2 && (i = lc(e),
        i !== 0 && (r = i,
        t = Ic(e, i))),
        t === 1)
            throw n = qs,
            jr(e, 0),
            In(e, r),
            nt(e, ve()),
            n;
        if (t === 6)
            In(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !Xb(i) && (t = Ha(e, r),
            t === 2 && (s = lc(e),
            s !== 0 && (r = s,
            t = Ic(e, s))),
            t === 1))
                throw n = qs,
                jr(e, 0),
                In(e, r),
                nt(e, ve()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                xr(e, Ze, an);
                break;
            case 3:
                if (In(e, r),
                (r & 130023424) === r && (t = cf + 500 - ve(),
                10 < t)) {
                    if (ka(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        Ge(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = gc(xr.bind(null, e, Ze, an), t);
                    break
                }
                xr(e, Ze, an);
                break;
            case 4:
                if (In(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - Vt(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = ve() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Yb(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = gc(xr.bind(null, e, Ze, an), r);
                    break
                }
                xr(e, Ze, an);
                break;
            case 5:
                xr(e, Ze, an);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return nt(e, ve()),
    e.callbackNode === n ? Hv.bind(null, e) : null
}
function Ic(e, t) {
    var n = Rs;
    return e.current.memoizedState.isDehydrated && (jr(e, t).flags |= 256),
    e = Ha(e, t),
    e !== 2 && (t = Ze,
    Ze = n,
    t !== null && Vc(t)),
    e
}
function Vc(e) {
    Ze === null ? Ze = e : Ze.push.apply(Ze, e)
}
function Xb(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!zt(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function In(e, t) {
    for (t &= ~uf,
    t &= ~xl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Vt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Rp(e) {
    if (Z & 6)
        throw Error(j(327));
    bi();
    var t = ka(e, 0);
    if (!(t & 1))
        return nt(e, ve()),
        null;
    var n = Ha(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = lc(e);
        r !== 0 && (t = r,
        n = Ic(e, r))
    }
    if (n === 1)
        throw n = qs,
        jr(e, 0),
        In(e, t),
        nt(e, ve()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    xr(e, Ze, an),
    nt(e, ve()),
    null
}
function df(e, t) {
    var n = Z;
    Z |= 1;
    try {
        return e(t)
    } finally {
        Z = n,
        Z === 0 && (zi = ve() + 500,
        ml && fr())
    }
}
function _r(e) {
    Un !== null && Un.tag === 0 && !(Z & 6) && bi();
    var t = Z;
    Z |= 1;
    var n = vt.transition
      , r = te;
    try {
        if (vt.transition = null,
        te = 1,
        e)
            return e()
    } finally {
        te = r,
        vt.transition = n,
        Z = t,
        !(Z & 6) && fr()
    }
}
function ff() {
    rt = di.current,
    ae(di)
}
function jr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Pb(n)),
    be !== null)
        for (n = be.return; n !== null; ) {
            var r = n;
            switch (Hd(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ja();
                break;
            case 3:
                Fi(),
                ae(et),
                ae(Be),
                ef();
                break;
            case 5:
                Jd(r);
                break;
            case 4:
                Fi();
                break;
            case 13:
                ae(fe);
                break;
            case 19:
                ae(fe);
                break;
            case 10:
                Yd(r.type._context);
                break;
            case 22:
            case 23:
                ff()
            }
            n = n.return
        }
    if (Ae = e,
    be = e = Jn(e.current, null),
    je = rt = t,
    ke = 0,
    qs = null,
    uf = xl = Fr = 0,
    Ze = Rs = null,
    br !== null) {
        for (t = 0; t < br.length; t++)
            if (n = br[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        br = null
    }
    return e
}
function Kv(e, t) {
    do {
        var n = be;
        try {
            if (Qd(),
            aa.current = Ba,
            za) {
                for (var r = pe.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                za = !1
            }
            if (Vr = 0,
            Re = Te = pe = null,
            Ps = !1,
            Qs = 0,
            lf.current = null,
            n === null || n.return === null) {
                ke = 1,
                qs = t,
                be = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , a = n
                  , l = t;
                if (t = je,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var h = mp(o);
                    if (h !== null) {
                        h.flags &= -257,
                        gp(h, o, a, s, t),
                        h.mode & 1 && pp(s, u, t),
                        t = h,
                        l = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var y = new Set;
                            y.add(l),
                            t.updateQueue = y
                        } else
                            x.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            pp(s, u, t),
                            hf();
                            break e
                        }
                        l = Error(j(426))
                    }
                } else if (ue && a.mode & 1) {
                    var w = mp(o);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        gp(w, o, a, s, t),
                        Kd(_i(l, a));
                        break e
                    }
                }
                s = l = _i(l, a),
                ke !== 4 && (ke = 2),
                Rs === null ? Rs = [s] : Rs.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var g = Av(s, l, t);
                        lp(s, g);
                        break e;
                    case 1:
                        a = l;
                        var p = s.type
                          , v = s.stateNode;
                        if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (qn === null || !qn.has(v)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var b = Nv(s, a, t);
                            lp(s, b);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Yv(n)
        } catch (C) {
            t = C,
            be === n && n !== null && (be = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Gv() {
    var e = $a.current;
    return $a.current = Ba,
    e === null ? Ba : e
}
function hf() {
    (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    Ae === null || !(Fr & 268435455) && !(xl & 268435455) || In(Ae, je)
}
function Ha(e, t) {
    var n = Z;
    Z |= 2;
    var r = Gv();
    (Ae !== e || je !== t) && (an = null,
    jr(e, t));
    do
        try {
            qb();
            break
        } catch (i) {
            Kv(e, i)
        }
    while (!0);
    if (Qd(),
    Z = n,
    $a.current = r,
    be !== null)
        throw Error(j(261));
    return Ae = null,
    je = 0,
    ke
}
function qb() {
    for (; be !== null; )
        Qv(be)
}
function Zb() {
    for (; be !== null && !CS(); )
        Qv(be)
}
function Qv(e) {
    var t = qv(e.alternate, e, rt);
    e.memoizedProps = e.pendingProps,
    t === null ? Yv(e) : be = t,
    lf.current = null
}
function Yv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Hb(n, t),
            n !== null) {
                n.flags &= 32767,
                be = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ke = 6,
                be = null;
                return
            }
        } else if (n = Wb(n, t, rt),
        n !== null) {
            be = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            be = t;
            return
        }
        be = t = e
    } while (t !== null);
    ke === 0 && (ke = 5)
}
function xr(e, t, n) {
    var r = te
      , i = vt.transition;
    try {
        vt.transition = null,
        te = 1,
        Jb(e, t, n, r)
    } finally {
        vt.transition = i,
        te = r
    }
    return null
}
function Jb(e, t, n, r) {
    do
        bi();
    while (Un !== null);
    if (Z & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (DS(e, s),
    e === Ae && (be = Ae = null,
    je = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Wo || (Wo = !0,
    Zv(Pa, function() {
        return bi(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = vt.transition,
        vt.transition = null;
        var o = te;
        te = 1;
        var a = Z;
        Z |= 4,
        lf.current = null,
        Gb(e, n),
        Uv(n, e),
        xb(pc),
        Ra = !!hc,
        pc = hc = null,
        e.current = n,
        Qb(n),
        ES(),
        Z = a,
        te = o,
        vt.transition = s
    } else
        e.current = n;
    if (Wo && (Wo = !1,
    Un = e,
    Wa = i),
    s = e.pendingLanes,
    s === 0 && (qn = null),
    kS(n.stateNode),
    nt(e, ve()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Ua)
        throw Ua = !1,
        e = Lc,
        Lc = null,
        e;
    return Wa & 1 && e.tag !== 0 && bi(),
    s = e.pendingLanes,
    s & 1 ? e === Oc ? As++ : (As = 0,
    Oc = e) : As = 0,
    fr(),
    null
}
function bi() {
    if (Un !== null) {
        var e = Ay(Wa)
          , t = vt.transition
          , n = te;
        try {
            if (vt.transition = null,
            te = 16 > e ? 16 : e,
            Un === null)
                var r = !1;
            else {
                if (e = Un,
                Un = null,
                Wa = 0,
                Z & 6)
                    throw Error(j(331));
                var i = Z;
                for (Z |= 4,
                V = e.current; V !== null; ) {
                    var s = V
                      , o = s.child;
                    if (V.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (V = u; V !== null; ) {
                                    var c = V;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ks(8, c, s)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        V = d;
                                    else
                                        for (; V !== null; ) {
                                            c = V;
                                            var f = c.sibling
                                              , h = c.return;
                                            if (zv(c),
                                            c === u) {
                                                V = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                V = f;
                                                break
                                            }
                                            V = h
                                        }
                                }
                            }
                            var x = s.alternate;
                            if (x !== null) {
                                var y = x.child;
                                if (y !== null) {
                                    x.child = null;
                                    do {
                                        var w = y.sibling;
                                        y.sibling = null,
                                        y = w
                                    } while (y !== null)
                                }
                            }
                            V = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        V = o;
                    else
                        e: for (; V !== null; ) {
                            if (s = V,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ks(9, s, s.return)
                                }
                            var g = s.sibling;
                            if (g !== null) {
                                g.return = s.return,
                                V = g;
                                break e
                            }
                            V = s.return
                        }
                }
                var p = e.current;
                for (V = p; V !== null; ) {
                    o = V;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null)
                        v.return = o,
                        V = v;
                    else
                        e: for (o = p; V !== null; ) {
                            if (a = V,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        vl(9, a)
                                    }
                                } catch (C) {
                                    ye(a, a.return, C)
                                }
                            if (a === o) {
                                V = null;
                                break e
                            }
                            var b = a.sibling;
                            if (b !== null) {
                                b.return = a.return,
                                V = b;
                                break e
                            }
                            V = a.return
                        }
                }
                if (Z = i,
                fr(),
                Zt && typeof Zt.onPostCommitFiberRoot == "function")
                    try {
                        Zt.onPostCommitFiberRoot(cl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            te = n,
            vt.transition = t
        }
    }
    return !1
}
function Ap(e, t, n) {
    t = _i(n, t),
    t = Av(e, t, 1),
    e = Xn(e, t, 1),
    t = Ge(),
    e !== null && (ho(e, 1, t),
    nt(e, t))
}
function ye(e, t, n) {
    if (e.tag === 3)
        Ap(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ap(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (qn === null || !qn.has(r))) {
                    e = _i(n, e),
                    e = Nv(t, e, 1),
                    t = Xn(t, e, 1),
                    e = Ge(),
                    t !== null && (ho(t, 1, e),
                    nt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function eC(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ge(),
    e.pingedLanes |= e.suspendedLanes & n,
    Ae === e && (je & n) === n && (ke === 4 || ke === 3 && (je & 130023424) === je && 500 > ve() - cf ? jr(e, 0) : uf |= n),
    nt(e, t)
}
function Xv(e, t) {
    t === 0 && (e.mode & 1 ? (t = Lo,
    Lo <<= 1,
    !(Lo & 130023424) && (Lo = 4194304)) : t = 1);
    var n = Ge();
    e = mn(e, t),
    e !== null && (ho(e, t, n),
    nt(e, n))
}
function tC(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Xv(e, n)
}
function nC(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    r !== null && r.delete(t),
    Xv(e, n)
}
var qv;
qv = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || et.current)
            Je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Je = !1,
                Ub(e, t, n);
            Je = !!(e.flags & 131072)
        }
    else
        Je = !1,
        ue && t.flags & 1048576 && tv(t, Oa, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ua(e, t),
        e = t.pendingProps;
        var i = Oi(t, Be.current);
        Si(t, n),
        i = nf(null, t, r, e, i, n);
        var s = rf();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        tt(r) ? (s = !0,
        Da(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        qd(t),
        i.updater = yl,
        t.stateNode = i,
        i._reactInternals = t,
        Cc(t, r, e, n),
        t = Pc(null, t, r, !0, s, n)) : (t.tag = 0,
        ue && s && Wd(t),
        Ue(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ua(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = iC(r),
            e = Mt(r, e),
            i) {
            case 0:
                t = Tc(null, t, r, e, n);
                break e;
            case 1:
                t = xp(null, t, r, e, n);
                break e;
            case 11:
                t = yp(null, t, r, e, n);
                break e;
            case 14:
                t = vp(null, t, r, Mt(r.type, e), n);
                break e
            }
            throw Error(j(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Mt(r, i),
        Tc(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Mt(r, i),
        xp(e, t, r, i, n);
    case 3:
        e: {
            if (Lv(t),
            e === null)
                throw Error(j(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            av(e, t),
            Fa(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = _i(Error(j(423)), t),
                    t = wp(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = _i(Error(j(424)), t),
                    t = wp(e, t, r, n, i);
                    break e
                } else
                    for (ot = Yn(t.stateNode.containerInfo.firstChild),
                    at = t,
                    ue = !0,
                    It = null,
                    n = sv(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Ii(),
                r === i) {
                    t = gn(e, t, n);
                    break e
                }
                Ue(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return lv(t),
        e === null && wc(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        mc(r, i) ? o = null : s !== null && mc(r, s) && (t.flags |= 32),
        Dv(e, t),
        Ue(e, t, o, n),
        t.child;
    case 6:
        return e === null && wc(t),
        null;
    case 13:
        return Ov(e, t, n);
    case 4:
        return Zd(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Vi(t, null, r, n) : Ue(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Mt(r, i),
        yp(e, t, r, i, n);
    case 7:
        return Ue(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ue(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            re(Ia, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (zt(s.value, o)) {
                    if (s.children === i.children && !et.current) {
                        t = gn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            o = s.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = fn(-1, n & -n),
                                        l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    Sc(s.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(j(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            Sc(o, n, t),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            Ue(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Si(t, n),
        i = bt(i),
        r = r(i),
        t.flags |= 1,
        Ue(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Mt(r, t.pendingProps),
        i = Mt(r.type, i),
        vp(e, t, r, i, n);
    case 15:
        return Mv(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Mt(r, i),
        ua(e, t),
        t.tag = 1,
        tt(r) ? (e = !0,
        Da(t)) : e = !1,
        Si(t, n),
        Rv(t, r, i),
        Cc(t, r, i, n),
        Pc(null, t, r, !0, e, n);
    case 19:
        return Iv(e, t, n);
    case 22:
        return jv(e, t, n)
    }
    throw Error(j(156, t.tag))
}
;
function Zv(e, t) {
    return Ty(e, t)
}
function rC(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function gt(e, t, n, r) {
    return new rC(e,t,n,r)
}
function pf(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function iC(e) {
    if (typeof e == "function")
        return pf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === jd)
            return 11;
        if (e === Dd)
            return 14
    }
    return 2
}
function Jn(e, t) {
    var n = e.alternate;
    return n === null ? (n = gt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function fa(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        pf(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case ti:
            return Dr(n.children, i, s, t);
        case Md:
            o = 8,
            i |= 8;
            break;
        case Gu:
            return e = gt(12, n, t, i | 2),
            e.elementType = Gu,
            e.lanes = s,
            e;
        case Qu:
            return e = gt(13, n, t, i),
            e.elementType = Qu,
            e.lanes = s,
            e;
        case Yu:
            return e = gt(19, n, t, i),
            e.elementType = Yu,
            e.lanes = s,
            e;
        case ly:
            return wl(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case oy:
                    o = 10;
                    break e;
                case ay:
                    o = 9;
                    break e;
                case jd:
                    o = 11;
                    break e;
                case Dd:
                    o = 14;
                    break e;
                case Dn:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = gt(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Dr(e, t, n, r) {
    return e = gt(7, e, r, t),
    e.lanes = n,
    e
}
function wl(e, t, n, r) {
    return e = gt(22, e, r, t),
    e.elementType = ly,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function xu(e, t, n) {
    return e = gt(6, e, null, t),
    e.lanes = n,
    e
}
function wu(e, t, n) {
    return t = gt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function sC(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = eu(0),
    this.expirationTimes = eu(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = eu(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function mf(e, t, n, r, i, s, o, a, l) {
    return e = new sC(e,t,n,a,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = gt(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    qd(s),
    e
}
function oC(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ei,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Jv(e) {
    if (!e)
        return nr;
    e = e._reactInternals;
    e: {
        if ($r(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (tt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (tt(n))
            return Jy(e, n, t)
    }
    return t
}
function e0(e, t, n, r, i, s, o, a, l) {
    return e = mf(n, r, !0, e, i, s, o, a, l),
    e.context = Jv(null),
    n = e.current,
    r = Ge(),
    i = Zn(n),
    s = fn(r, i),
    s.callback = t ?? null,
    Xn(n, s, i),
    e.current.lanes = i,
    ho(e, i, r),
    nt(e, r),
    e
}
function Sl(e, t, n, r) {
    var i = t.current
      , s = Ge()
      , o = Zn(i);
    return n = Jv(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = fn(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Xn(i, t, o),
    e !== null && (Ft(e, i, o, s),
    oa(e, i, o)),
    o
}
function Ka(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Np(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function gf(e, t) {
    Np(e, t),
    (e = e.alternate) && Np(e, t)
}
function aC() {
    return null
}
var t0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function yf(e) {
    this._internalRoot = e
}
bl.prototype.render = yf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    Sl(e, t, null, null)
}
;
bl.prototype.unmount = yf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        _r(function() {
            Sl(null, e, null, null)
        }),
        t[pn] = null
    }
}
;
function bl(e) {
    this._internalRoot = e
}
bl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = jy();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < On.length && t !== 0 && t < On[n].priority; n++)
            ;
        On.splice(n, 0, e),
        n === 0 && Ly(e)
    }
}
;
function vf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Cl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Mp() {}
function lC(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Ka(o);
                s.call(u)
            }
        }
        var o = e0(t, r, e, 0, null, !1, !1, "", Mp);
        return e._reactRootContainer = o,
        e[pn] = o.current,
        Us(e.nodeType === 8 ? e.parentNode : e),
        _r(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Ka(l);
            a.call(u)
        }
    }
    var l = mf(e, 0, !1, null, null, !1, !1, "", Mp);
    return e._reactRootContainer = l,
    e[pn] = l.current,
    Us(e.nodeType === 8 ? e.parentNode : e),
    _r(function() {
        Sl(t, l, n, r)
    }),
    l
}
function El(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = Ka(o);
                a.call(l)
            }
        }
        Sl(t, o, e, i)
    } else
        o = lC(n, t, e, i, r);
    return Ka(o)
}
Ny = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = ys(t.pendingLanes);
            n !== 0 && (Id(t, n | 1),
            nt(t, ve()),
            !(Z & 6) && (zi = ve() + 500,
            fr()))
        }
        break;
    case 13:
        _r(function() {
            var r = mn(e, 1);
            if (r !== null) {
                var i = Ge();
                Ft(r, e, 1, i)
            }
        }),
        gf(e, 1)
    }
}
;
Vd = function(e) {
    if (e.tag === 13) {
        var t = mn(e, 134217728);
        if (t !== null) {
            var n = Ge();
            Ft(t, e, 134217728, n)
        }
        gf(e, 134217728)
    }
}
;
My = function(e) {
    if (e.tag === 13) {
        var t = Zn(e)
          , n = mn(e, t);
        if (n !== null) {
            var r = Ge();
            Ft(n, e, t, r)
        }
        gf(e, t)
    }
}
;
jy = function() {
    return te
}
;
Dy = function(e, t) {
    var n = te;
    try {
        return te = e,
        t()
    } finally {
        te = n
    }
}
;
sc = function(e, t, n) {
    switch (t) {
    case "input":
        if (Zu(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = pl(r);
                    if (!i)
                        throw Error(j(90));
                    cy(r),
                    Zu(r, i)
                }
            }
        }
        break;
    case "textarea":
        fy(e, n);
        break;
    case "select":
        t = n.value,
        t != null && yi(e, !!n.multiple, t, !1)
    }
}
;
xy = df;
wy = _r;
var uC = {
    usingClientEntryPoint: !1,
    Events: [mo, si, pl, yy, vy, df]
}
  , ds = {
    findFiberByHostInstance: Sr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , cC = {
    bundleType: ds.bundleType,
    version: ds.version,
    rendererPackageName: ds.rendererPackageName,
    rendererConfig: ds.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Cy(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ds.findFiberByHostInstance || aC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ho.isDisabled && Ho.supportsFiber)
        try {
            cl = Ho.inject(cC),
            Zt = Ho
        } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uC;
ct.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vf(t))
        throw Error(j(200));
    return oC(e, t, null, n)
}
;
ct.createRoot = function(e, t) {
    if (!vf(e))
        throw Error(j(299));
    var n = !1
      , r = ""
      , i = t0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = mf(e, 1, !1, null, null, n, !1, r, i),
    e[pn] = t.current,
    Us(e.nodeType === 8 ? e.parentNode : e),
    new yf(t)
}
;
ct.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = Cy(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ct.flushSync = function(e) {
    return _r(e)
}
;
ct.hydrate = function(e, t, n) {
    if (!Cl(t))
        throw Error(j(200));
    return El(null, e, t, !0, n)
}
;
ct.hydrateRoot = function(e, t, n) {
    if (!vf(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = t0;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = e0(t, null, e, 1, n ?? null, i, !1, s, o),
    e[pn] = t.current,
    Us(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new bl(t)
}
;
ct.render = function(e, t, n) {
    if (!Cl(t))
        throw Error(j(200));
    return El(null, e, t, !1, n)
}
;
ct.unmountComponentAtNode = function(e) {
    if (!Cl(e))
        throw Error(j(40));
    return e._reactRootContainer ? (_r(function() {
        El(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[pn] = null
        })
    }),
    !0) : !1
}
;
ct.unstable_batchedUpdates = df;
ct.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Cl(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return El(e, t, n, !1, r)
}
;
ct.version = "18.3.1-next-f1338f8080-20240426";
function n0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n0)
        } catch (e) {
            console.error(e)
        }
}
n0(),
ny.exports = ct;
var yo = ny.exports;
const r0 = Ug(yo);
var i0, jp = yo;
i0 = jp.createRoot,
jp.hydrateRoot;
const dC = 1
  , fC = 1e6;
let Su = 0;
function hC() {
    return Su = (Su + 1) % Number.MAX_SAFE_INTEGER,
    Su.toString()
}
const bu = new Map
  , Dp = e => {
    if (bu.has(e))
        return;
    const t = setTimeout( () => {
        bu.delete(e),
        Ns({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , fC);
    bu.set(e, t)
}
  , pC = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, dC)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Dp(n) : e.toasts.forEach(r => {
                Dp(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , ha = [];
let pa = {
    toasts: []
};
function Ns(e) {
    pa = pC(pa, e),
    ha.forEach(t => {
        t(pa)
    }
    )
}
function mC({...e}) {
    const t = hC()
      , n = i => Ns({
        type: "UPDATE_TOAST",
        toast: {
            ...i,
            id: t
        }
    })
      , r = () => Ns({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Ns({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: i => {
                i || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function s0() {
    const [e,t] = S.useState(pa);
    return S.useEffect( () => (ha.push(t),
    () => {
        const n = ha.indexOf(t);
        n > -1 && ha.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: mC,
        dismiss: n => Ns({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function Pe(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(i) {
        if (e == null || e(i),
        n === !1 || !i.defaultPrevented)
            return t == null ? void 0 : t(i)
    }
}
function Lp(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function o0(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const s = Lp(i, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const s = r[i];
                    typeof s == "function" ? s() : Lp(e[i], null)
                }
            }
    }
}
function Bt(...e) {
    return S.useCallback(o0(...e), e)
}
function Tl(e, t=[]) {
    let n = [];
    function r(s, o) {
        const a = S.createContext(o)
          , l = n.length;
        n = [...n, o];
        const u = d => {
            var g;
            const {scope: f, children: h, ...x} = d
              , y = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a
              , w = S.useMemo( () => x, Object.values(x));
            return m.jsx(y.Provider, {
                value: w,
                children: h
            })
        }
        ;
        u.displayName = s + "Provider";
        function c(d, f) {
            var y;
            const h = ((y = f == null ? void 0 : f[e]) == null ? void 0 : y[l]) || a
              , x = S.useContext(h);
            if (x)
                return x;
            if (o !== void 0)
                return o;
            throw new Error(`\`${d}\` must be used within \`${s}\``)
        }
        return [u, c]
    }
    const i = () => {
        const s = n.map(o => S.createContext(o));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return S.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return i.scopeName = e,
    [r, gC(i, ...t)]
}
function gC(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(i => ({
            useScope: i(),
            scopeName: i.scopeName
        }));
        return function(s) {
            const o = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(s)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return S.useMemo( () => ({
                [`__scope${t.scopeName}`]: o
            }), [o])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Ga(e) {
    const t = vC(e)
      , n = S.forwardRef( (r, i) => {
        const {children: s, ...o} = r
          , a = S.Children.toArray(s)
          , l = a.find(wC);
        if (l) {
            const u = l.props.children
              , c = a.map(d => d === l ? S.Children.count(u) > 1 ? S.Children.only(null) : S.isValidElement(u) ? u.props.children : null : d);
            return m.jsx(t, {
                ...o,
                ref: i,
                children: S.isValidElement(u) ? S.cloneElement(u, void 0, c) : null
            })
        }
        return m.jsx(t, {
            ...o,
            ref: i,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var yC = Ga("Slot");
function vC(e) {
    const t = S.forwardRef( (n, r) => {
        const {children: i, ...s} = n;
        if (S.isValidElement(i)) {
            const o = bC(i)
              , a = SC(s, i.props);
            return i.type !== S.Fragment && (a.ref = r ? o0(r, o) : o),
            S.cloneElement(i, a)
        }
        return S.Children.count(i) > 1 ? S.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var a0 = Symbol("radix.slottable");
function xC(e) {
    const t = ({children: n}) => m.jsx(m.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = a0,
    t
}
function wC(e) {
    return S.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === a0
}
function SC(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const i = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? i && s ? n[r] = (...a) => {
            const l = s(...a);
            return i(...a),
            l
        }
        : i && (n[r] = i) : r === "style" ? n[r] = {
            ...i,
            ...s
        } : r === "className" && (n[r] = [i, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function bC(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function CC(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Tl(t)
      , [i,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , o = y => {
        const {scope: w, children: g} = y
          , p = D.useRef(null)
          , v = D.useRef(new Map).current;
        return m.jsx(i, {
            scope: w,
            itemMap: v,
            collectionRef: p,
            children: g
        })
    }
    ;
    o.displayName = t;
    const a = e + "CollectionSlot"
      , l = Ga(a)
      , u = D.forwardRef( (y, w) => {
        const {scope: g, children: p} = y
          , v = s(a, g)
          , b = Bt(w, v.collectionRef);
        return m.jsx(l, {
            ref: b,
            children: p
        })
    }
    );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = Ga(c)
      , h = D.forwardRef( (y, w) => {
        const {scope: g, children: p, ...v} = y
          , b = D.useRef(null)
          , C = Bt(w, b)
          , E = s(c, g);
        return D.useEffect( () => (E.itemMap.set(b, {
            ref: b,
            ...v
        }),
        () => void E.itemMap.delete(b))),
        m.jsx(f, {
            [d]: "",
            ref: C,
            children: p
        })
    }
    );
    h.displayName = c;
    function x(y) {
        const w = s(e + "CollectionConsumer", y);
        return D.useCallback( () => {
            const p = w.collectionRef.current;
            if (!p)
                return [];
            const v = Array.from(p.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort( (E, T) => v.indexOf(E.ref.current) - v.indexOf(T.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: o,
        Slot: u,
        ItemSlot: h
    }, x, r]
}
var EC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Xe = EC.reduce( (e, t) => {
    const n = Ga(`Primitive.${t}`)
      , r = S.forwardRef( (i, s) => {
        const {asChild: o, ...a} = i
          , l = o ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        m.jsx(l, {
            ...a,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function l0(e, t) {
    e && yo.flushSync( () => e.dispatchEvent(t))
}
function rr(e) {
    const t = S.useRef(e);
    return S.useEffect( () => {
        t.current = e
    }
    ),
    S.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function TC(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = rr(e);
    S.useEffect( () => {
        const r = i => {
            i.key === "Escape" && n(i)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var PC = "DismissableLayer", Fc = "dismissableLayer.update", kC = "dismissableLayer.pointerDownOutside", RC = "dismissableLayer.focusOutside", Op, u0 = S.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), xf = S.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: s, onInteractOutside: o, onDismiss: a, ...l} = e
      , u = S.useContext(u0)
      , [c,d] = S.useState(null)
      , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,h] = S.useState({})
      , x = Bt(t, T => d(T))
      , y = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = y.indexOf(w)
      , p = c ? y.indexOf(c) : -1
      , v = u.layersWithOutsidePointerEventsDisabled.size > 0
      , b = p >= g
      , C = NC(T => {
        const P = T.target
          , N = [...u.branches].some(M => M.contains(P));
        !b || N || (i == null || i(T),
        o == null || o(T),
        T.defaultPrevented || a == null || a())
    }
    , f)
      , E = MC(T => {
        const P = T.target;
        [...u.branches].some(M => M.contains(P)) || (s == null || s(T),
        o == null || o(T),
        T.defaultPrevented || a == null || a())
    }
    , f);
    return TC(T => {
        p === u.layers.size - 1 && (r == null || r(T),
        !T.defaultPrevented && a && (T.preventDefault(),
        a()))
    }
    , f),
    S.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Op = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Ip(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Op)
            }
    }
    , [c, f, n, u]),
    S.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        Ip())
    }
    , [c, u]),
    S.useEffect( () => {
        const T = () => h({});
        return document.addEventListener(Fc, T),
        () => document.removeEventListener(Fc, T)
    }
    , []),
    m.jsx(Xe.div, {
        ...l,
        ref: x,
        style: {
            pointerEvents: v ? b ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Pe(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Pe(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Pe(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
xf.displayName = PC;
var AC = "DismissableLayerBranch"
  , c0 = S.forwardRef( (e, t) => {
    const n = S.useContext(u0)
      , r = S.useRef(null)
      , i = Bt(t, r);
    return S.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    m.jsx(Xe.div, {
        ...e,
        ref: i
    })
}
);
c0.displayName = AC;
function NC(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = rr(e)
      , r = S.useRef(!1)
      , i = S.useRef( () => {}
    );
    return S.useEffect( () => {
        const s = a => {
            if (a.target && !r.current) {
                let l = function() {
                    d0(kC, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", i.current),
                i.current = l,
                t.addEventListener("click", i.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", i.current);
            r.current = !1
        }
          , o = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(o),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", i.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function MC(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = rr(e)
      , r = S.useRef(!1);
    return S.useEffect( () => {
        const i = s => {
            s.target && !r.current && d0(RC, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Ip() {
    const e = new CustomEvent(Fc);
    document.dispatchEvent(e)
}
function d0(e, t, n, {discrete: r}) {
    const i = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? l0(i, s) : i.dispatchEvent(s)
}
var jC = xf
  , DC = c0
  , ir = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {}
  , LC = "Portal"
  , f0 = S.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [i,s] = S.useState(!1);
    ir( () => s(!0), []);
    const o = n || i && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return o ? r0.createPortal(m.jsx(Xe.div, {
        ...r,
        ref: t
    }), o) : null
}
);
f0.displayName = LC;
function OC(e, t) {
    return S.useReducer( (n, r) => t[n][r] ?? n, e)
}
var wf = e => {
    const {present: t, children: n} = e
      , r = IC(t)
      , i = typeof n == "function" ? n({
        present: r.isPresent
    }) : S.Children.only(n)
      , s = Bt(r.ref, VC(i));
    return typeof n == "function" || r.isPresent ? S.cloneElement(i, {
        ref: s
    }) : null
}
;
wf.displayName = "Presence";
function IC(e) {
    const [t,n] = S.useState()
      , r = S.useRef(null)
      , i = S.useRef(e)
      , s = S.useRef("none")
      , o = e ? "mounted" : "unmounted"
      , [a,l] = OC(o, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return S.useEffect( () => {
        const u = Ko(r.current);
        s.current = a === "mounted" ? u : "none"
    }
    , [a]),
    ir( () => {
        const u = r.current
          , c = i.current;
        if (c !== e) {
            const f = s.current
              , h = Ko(u);
            e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
            i.current = e
        }
    }
    , [e, l]),
    ir( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = h => {
                const y = Ko(r.current).includes(h.animationName);
                if (h.target === t && y && (l("ANIMATION_END"),
                !i.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , f = h => {
                h.target === t && (s.current = Ko(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: S.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function Ko(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function VC(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var FC = ey[" useInsertionEffect ".trim().toString()] || ir;
function _C({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [i,s,o] = zC({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : i;
    {
        const c = S.useRef(e !== void 0);
        S.useEffect( () => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, r])
    }
    const u = S.useCallback(c => {
        var d;
        if (a) {
            const f = BC(c) ? c(e) : c;
            f !== e && ((d = o.current) == null || d.call(o, f))
        } else
            s(c)
    }
    , [a, e, s, o]);
    return [l, u]
}
function zC({defaultProp: e, onChange: t}) {
    const [n,r] = S.useState(e)
      , i = S.useRef(n)
      , s = S.useRef(t);
    return FC( () => {
        s.current = t
    }
    , [t]),
    S.useEffect( () => {
        var o;
        i.current !== n && ((o = s.current) == null || o.call(s, n),
        i.current = n)
    }
    , [n, i]),
    [n, r, s]
}
function BC(e) {
    return typeof e == "function"
}
var $C = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , UC = "VisuallyHidden"
  , Pl = S.forwardRef( (e, t) => m.jsx(Xe.span, {
    ...e,
    ref: t,
    style: {
        ...$C,
        ...e.style
    }
}));
Pl.displayName = UC;
var WC = Pl
  , Sf = "ToastProvider"
  , [bf,HC,KC] = CC("Toast")
  , [h0,sD] = Tl("Toast", [KC])
  , [GC,kl] = h0(Sf)
  , p0 = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: i="right", swipeThreshold: s=50, children: o} = e
      , [a,l] = S.useState(null)
      , [u,c] = S.useState(0)
      , d = S.useRef(!1)
      , f = S.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Sf}\`. Expected non-empty \`string\`.`),
    m.jsx(bf.Provider, {
        scope: t,
        children: m.jsx(GC, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: i,
            swipeThreshold: s,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: S.useCallback( () => c(h => h + 1), []),
            onToastRemove: S.useCallback( () => c(h => h - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: f,
            children: o
        })
    })
}
;
p0.displayName = Sf;
var m0 = "ToastViewport"
  , QC = ["F8"]
  , _c = "toast.viewportPause"
  , zc = "toast.viewportResume"
  , g0 = S.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=QC, label: i="Notifications ({hotkey})", ...s} = e
      , o = kl(m0, n)
      , a = HC(n)
      , l = S.useRef(null)
      , u = S.useRef(null)
      , c = S.useRef(null)
      , d = S.useRef(null)
      , f = Bt(t, d, o.onViewportChange)
      , h = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , x = o.toastCount > 0;
    S.useEffect( () => {
        const w = g => {
            var v;
            r.length !== 0 && r.every(b => g[b] || g.code === b) && ((v = d.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    S.useEffect( () => {
        const w = l.current
          , g = d.current;
        if (x && w && g) {
            const p = () => {
                if (!o.isClosePausedRef.current) {
                    const E = new CustomEvent(_c);
                    g.dispatchEvent(E),
                    o.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (o.isClosePausedRef.current) {
                    const E = new CustomEvent(zc);
                    g.dispatchEvent(E),
                    o.isClosePausedRef.current = !1
                }
            }
              , b = E => {
                !w.contains(E.relatedTarget) && v()
            }
              , C = () => {
                w.contains(document.activeElement) || v()
            }
            ;
            return w.addEventListener("focusin", p),
            w.addEventListener("focusout", b),
            w.addEventListener("pointermove", p),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", p),
            window.addEventListener("focus", v),
            () => {
                w.removeEventListener("focusin", p),
                w.removeEventListener("focusout", b),
                w.removeEventListener("pointermove", p),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [x, o.isClosePausedRef]);
    const y = S.useCallback( ({tabbingDirection: w}) => {
        const p = a().map(v => {
            const b = v.ref.current
              , C = [b, ...aE(b)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? p.reverse() : p).flat()
    }
    , [a]);
    return S.useEffect( () => {
        const w = d.current;
        if (w) {
            const g = p => {
                var C, E, T;
                const v = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !v) {
                    const P = document.activeElement
                      , N = p.shiftKey;
                    if (p.target === w && N) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const I = y({
                        tabbingDirection: N ? "backwards" : "forwards"
                    })
                      , U = I.findIndex(O => O === P);
                    Cu(I.slice(U + 1)) ? p.preventDefault() : N ? (E = u.current) == null || E.focus() : (T = c.current) == null || T.focus()
                }
            }
            ;
            return w.addEventListener("keydown", g),
            () => w.removeEventListener("keydown", g)
        }
    }
    , [a, y]),
    m.jsxs(DC, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", h),
        tabIndex: -1,
        style: {
            pointerEvents: x ? void 0 : "none"
        },
        children: [x && m.jsx(Bc, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = y({
                    tabbingDirection: "forwards"
                });
                Cu(w)
            }
        }), m.jsx(bf.Slot, {
            scope: n,
            children: m.jsx(Xe.ol, {
                tabIndex: -1,
                ...s,
                ref: f
            })
        }), x && m.jsx(Bc, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = y({
                    tabbingDirection: "backwards"
                });
                Cu(w)
            }
        })]
    })
}
);
g0.displayName = m0;
var y0 = "ToastFocusProxy"
  , Bc = S.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...i} = e
      , s = kl(y0, n);
    return m.jsx(Pl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: o => {
            var u;
            const a = o.relatedTarget;
            !((u = s.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
Bc.displayName = y0;
var vo = "Toast"
  , YC = "toast.swipeStart"
  , XC = "toast.swipeMove"
  , qC = "toast.swipeCancel"
  , ZC = "toast.swipeEnd"
  , v0 = S.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: i, onOpenChange: s, ...o} = e
      , [a,l] = _C({
        prop: r,
        defaultProp: i ?? !0,
        onChange: s,
        caller: vo
    });
    return m.jsx(wf, {
        present: n || a,
        children: m.jsx(tE, {
            open: a,
            ...o,
            ref: t,
            onClose: () => l(!1),
            onPause: rr(e.onPause),
            onResume: rr(e.onResume),
            onSwipeStart: Pe(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Pe(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: Pe(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Pe(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
v0.displayName = vo;
var [JC,eE] = h0(vo, {
    onClose() {}
})
  , tE = S.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: i, open: s, onClose: o, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: h, ...x} = e
      , y = kl(vo, n)
      , [w,g] = S.useState(null)
      , p = Bt(t, O => g(O))
      , v = S.useRef(null)
      , b = S.useRef(null)
      , C = i || y.duration
      , E = S.useRef(0)
      , T = S.useRef(C)
      , P = S.useRef(0)
      , {onToastAdd: N, onToastRemove: M} = y
      , _ = rr( () => {
        var Q;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((Q = y.viewport) == null || Q.focus()),
        o()
    }
    )
      , I = S.useCallback(O => {
        !O || O === 1 / 0 || (window.clearTimeout(P.current),
        E.current = new Date().getTime(),
        P.current = window.setTimeout(_, O))
    }
    , [_]);
    S.useEffect( () => {
        const O = y.viewport;
        if (O) {
            const Q = () => {
                I(T.current),
                u == null || u()
            }
              , $ = () => {
                const K = new Date().getTime() - E.current;
                T.current = T.current - K,
                window.clearTimeout(P.current),
                l == null || l()
            }
            ;
            return O.addEventListener(_c, $),
            O.addEventListener(zc, Q),
            () => {
                O.removeEventListener(_c, $),
                O.removeEventListener(zc, Q)
            }
        }
    }
    , [y.viewport, C, l, u, I]),
    S.useEffect( () => {
        s && !y.isClosePausedRef.current && I(C)
    }
    , [s, C, y.isClosePausedRef, I]),
    S.useEffect( () => (N(),
    () => M()), [N, M]);
    const U = S.useMemo( () => w ? T0(w) : null, [w]);
    return y.viewport ? m.jsxs(m.Fragment, {
        children: [U && m.jsx(nE, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: U
        }), m.jsx(JC, {
            scope: n,
            onClose: _,
            children: yo.createPortal(m.jsx(bf.ItemSlot, {
                scope: n,
                children: m.jsx(jC, {
                    asChild: !0,
                    onEscapeKeyDown: Pe(a, () => {
                        y.isFocusedToastEscapeKeyDownRef.current || _(),
                        y.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: m.jsx(Xe.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": y.swipeDirection,
                        ...x,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: Pe(e.onKeyDown, O => {
                            O.key === "Escape" && (a == null || a(O.nativeEvent),
                            O.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0,
                            _()))
                        }
                        ),
                        onPointerDown: Pe(e.onPointerDown, O => {
                            O.button === 0 && (v.current = {
                                x: O.clientX,
                                y: O.clientY
                            })
                        }
                        ),
                        onPointerMove: Pe(e.onPointerMove, O => {
                            if (!v.current)
                                return;
                            const Q = O.clientX - v.current.x
                              , $ = O.clientY - v.current.y
                              , K = !!b.current
                              , k = ["left", "right"].includes(y.swipeDirection)
                              , R = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max
                              , L = k ? R(0, Q) : 0
                              , B = k ? 0 : R(0, $)
                              , z = O.pointerType === "touch" ? 10 : 2
                              , Y = {
                                x: L,
                                y: B
                            }
                              , q = {
                                originalEvent: O,
                                delta: Y
                            };
                            K ? (b.current = Y,
                            Go(XC, d, q, {
                                discrete: !1
                            })) : Vp(Y, y.swipeDirection, z) ? (b.current = Y,
                            Go(YC, c, q, {
                                discrete: !1
                            }),
                            O.target.setPointerCapture(O.pointerId)) : (Math.abs(Q) > z || Math.abs($) > z) && (v.current = null)
                        }
                        ),
                        onPointerUp: Pe(e.onPointerUp, O => {
                            const Q = b.current
                              , $ = O.target;
                            if ($.hasPointerCapture(O.pointerId) && $.releasePointerCapture(O.pointerId),
                            b.current = null,
                            v.current = null,
                            Q) {
                                const K = O.currentTarget
                                  , k = {
                                    originalEvent: O,
                                    delta: Q
                                };
                                Vp(Q, y.swipeDirection, y.swipeThreshold) ? Go(ZC, h, k, {
                                    discrete: !0
                                }) : Go(qC, f, k, {
                                    discrete: !0
                                }),
                                K.addEventListener("click", R => R.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), y.viewport)
        })]
    }) : null
}
)
  , nE = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , i = kl(vo, t)
      , [s,o] = S.useState(!1)
      , [a,l] = S.useState(!1);
    return sE( () => o(!0)),
    S.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : m.jsx(f0, {
        asChild: !0,
        children: m.jsx(Pl, {
            ...r,
            children: s && m.jsxs(m.Fragment, {
                children: [i.label, " ", n]
            })
        })
    })
}
  , rE = "ToastTitle"
  , x0 = S.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return m.jsx(Xe.div, {
        ...r,
        ref: t
    })
}
);
x0.displayName = rE;
var iE = "ToastDescription"
  , w0 = S.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return m.jsx(Xe.div, {
        ...r,
        ref: t
    })
}
);
w0.displayName = iE;
var S0 = "ToastAction"
  , b0 = S.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? m.jsx(E0, {
        altText: n,
        asChild: !0,
        children: m.jsx(Cf, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${S0}\`. Expected non-empty \`string\`.`),
    null)
}
);
b0.displayName = S0;
var C0 = "ToastClose"
  , Cf = S.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , i = eE(C0, n);
    return m.jsx(E0, {
        asChild: !0,
        children: m.jsx(Xe.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: Pe(e.onClick, i.onClose)
        })
    })
}
);
Cf.displayName = C0;
var E0 = S.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...i} = e;
    return m.jsx(Xe.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...i,
        ref: t
    })
}
);
function T0(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        oE(r)) {
            const i = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!i)
                if (s) {
                    const o = r.dataset.radixToastAnnounceAlt;
                    o && t.push(o)
                } else
                    t.push(...T0(r))
        }
    }
    ),
    t
}
function Go(e, t, n, {discrete: r}) {
    const i = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? l0(i, s) : i.dispatchEvent(s)
}
var Vp = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , i = Math.abs(e.y)
      , s = r > i;
    return t === "left" || t === "right" ? s && r > n : !s && i > n
}
;
function sE(e= () => {}
) {
    const t = rr(e);
    ir( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function oE(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function aE(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const i = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Cu(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var lE = p0
  , P0 = g0
  , k0 = v0
  , R0 = x0
  , A0 = w0
  , N0 = b0
  , M0 = Cf;
function j0(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = j0(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function D0() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = j0(e)) && (r && (r += " "),
        r += t);
    return r
}
const Fp = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , _p = D0
  , Ef = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return _p(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: i, defaultVariants: s} = t
      , o = Object.keys(i).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = s == null ? void 0 : s[u];
        if (c === null)
            return null;
        const f = Fp(c) || Fp(d);
        return i[u][f]
    }
    )
      , a = n && Object.entries(n).reduce( (u, c) => {
        let[d,f] = c;
        return f === void 0 || (u[d] = f),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: f, ...h} = c;
        return Object.entries(h).every(x => {
            let[y,w] = x;
            return Array.isArray(w) ? w.includes({
                ...s,
                ...a
            }[y]) : {
                ...s,
                ...a
            }[y] === w
        }
        ) ? [...u, d, f] : u
    }
    , []);
    return _p(e, o, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uE = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , L0 = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dE = S.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: i="", children: s, iconNode: o, ...a}, l) => S.createElement("svg", {
    ref: l,
    ...cE,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: L0("lucide", i),
    ...a
}, [...o.map( ([u,c]) => S.createElement(u, c)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = (e, t) => {
    const n = S.forwardRef( ({className: r, ...i}, s) => S.createElement(dE, {
        ref: s,
        iconNode: t,
        className: L0(`lucide-${uE(e)}`, r),
        ...i
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fE = xe("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hE = xe("Award", [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {
    cx: "12",
    cy: "8",
    r: "6",
    key: "1vp47v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pE = xe("CalendarDays", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}], ["path", {
    d: "M8 14h.01",
    key: "6423bh"
}], ["path", {
    d: "M12 14h.01",
    key: "1etili"
}], ["path", {
    d: "M16 14h.01",
    key: "1gbofw"
}], ["path", {
    d: "M8 18h.01",
    key: "lrp35t"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}], ["path", {
    d: "M16 18h.01",
    key: "kzsmim"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = xe("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mE = xe("Car", [["path", {
    d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
    key: "5owen"
}], ["circle", {
    cx: "7",
    cy: "17",
    r: "2",
    key: "u2ysq9"
}], ["path", {
    d: "M9 17h6",
    key: "r8uit2"
}], ["circle", {
    cx: "17",
    cy: "17",
    r: "2",
    key: "axvx0g"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = xe("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O0 = xe("CreditCard", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10",
    key: "1b3vmo"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gE = xe("Fuel", [["line", {
    x1: "3",
    x2: "15",
    y1: "22",
    y2: "22",
    key: "xegly4"
}], ["line", {
    x1: "4",
    x2: "14",
    y1: "9",
    y2: "9",
    key: "xcnuvu"
}], ["path", {
    d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",
    key: "16j0yd"
}], ["path", {
    d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
    key: "7cu91f"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I0 = xe("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tf = xe("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yE = xe("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vE = xe("PackagePlus", [["path", {
    d: "M16 16h6",
    key: "100bgy"
}], ["path", {
    d: "M19 13v6",
    key: "85cyf1"
}], ["path", {
    d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
    key: "e7tb2h"
}], ["path", {
    d: "m7.5 4.27 9 5.15",
    key: "1c824w"
}], ["polyline", {
    points: "3.29 7 12 12 20.71 7",
    key: "ousv84"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "22",
    y2: "12",
    key: "a4e8g8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pf = xe("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xE = xe("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V0 = xe("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wE = xe("SlidersHorizontal", [["line", {
    x1: "21",
    x2: "14",
    y1: "4",
    y2: "4",
    key: "obuewd"
}], ["line", {
    x1: "10",
    x2: "3",
    y1: "4",
    y2: "4",
    key: "1q6298"
}], ["line", {
    x1: "21",
    x2: "12",
    y1: "12",
    y2: "12",
    key: "1iu8h1"
}], ["line", {
    x1: "8",
    x2: "3",
    y1: "12",
    y2: "12",
    key: "ntss68"
}], ["line", {
    x1: "21",
    x2: "16",
    y1: "20",
    y2: "20",
    key: "14d8ph"
}], ["line", {
    x1: "12",
    x2: "3",
    y1: "20",
    y2: "20",
    key: "m0wm8r"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "2",
    y2: "6",
    key: "14e1ph"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "10",
    y2: "14",
    key: "1i6ji0"
}], ["line", {
    x1: "16",
    x2: "16",
    y1: "18",
    y2: "22",
    key: "1lctlv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SE = xe("Smile", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M8 14s1.5 2 4 2 4-2 4-2",
    key: "1y1vjs"
}], ["line", {
    x1: "9",
    x2: "9.01",
    y1: "9",
    y2: "9",
    key: "yxxnd0"
}], ["line", {
    x1: "15",
    x2: "15.01",
    y1: "9",
    y2: "9",
    key: "1p4y9e"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F0 = xe("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _0 = xe("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kf = xe("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bE = xe("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , Rf = "-"
  , CE = e => {
    const t = TE(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: o => {
            const a = o.split(Rf);
            return a[0] === "" && a.length !== 1 && a.shift(),
            z0(a, t) || EE(o)
        }
        ,
        getConflictingClassGroupIds: (o, a) => {
            const l = n[o] || [];
            return a && r[o] ? [...l, ...r[o]] : l
        }
    }
}
  , z0 = (e, t) => {
    var o;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , i = r ? z0(e.slice(1), r) : void 0;
    if (i)
        return i;
    if (t.validators.length === 0)
        return;
    const s = e.join(Rf);
    return (o = t.validators.find( ({validator: a}) => a(s))) == null ? void 0 : o.classGroupId
}
  , Bp = /^\[(.+)\]$/
  , EE = e => {
    if (Bp.test(e)) {
        const t = Bp.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , TE = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return kE(Object.entries(e.classGroups), n).forEach( ([s,o]) => {
        $c(o, r, s, t)
    }
    ),
    r
}
  , $c = (e, t, n, r) => {
    e.forEach(i => {
        if (typeof i == "string") {
            const s = i === "" ? t : $p(t, i);
            s.classGroupId = n;
            return
        }
        if (typeof i == "function") {
            if (PE(i)) {
                $c(i(r), t, n, r);
                return
            }
            t.validators.push({
                validator: i,
                classGroupId: n
            });
            return
        }
        Object.entries(i).forEach( ([s,o]) => {
            $c(o, $p(t, s), n, r)
        }
        )
    }
    )
}
  , $p = (e, t) => {
    let n = e;
    return t.split(Rf).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , PE = e => e.isThemeGetter
  , kE = (e, t) => t ? e.map( ([n,r]) => {
    const i = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([o,a]) => [t + o, a])) : s);
    return [n, i]
}
) : e
  , RE = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const i = (s, o) => {
        n.set(s, o),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let o = n.get(s);
            if (o !== void 0)
                return o;
            if ((o = r.get(s)) !== void 0)
                return i(s, o),
                o
        },
        set(s, o) {
            n.has(s) ? n.set(s, o) : i(s, o)
        }
    }
}
  , B0 = "!"
  , AE = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , i = t[0]
      , s = t.length
      , o = a => {
        const l = [];
        let u = 0, c = 0, d;
        for (let w = 0; w < a.length; w++) {
            let g = a[w];
            if (u === 0) {
                if (g === i && (r || a.slice(w, w + s) === t)) {
                    l.push(a.slice(c, w)),
                    c = w + s;
                    continue
                }
                if (g === "/") {
                    d = w;
                    continue
                }
            }
            g === "[" ? u++ : g === "]" && u--
        }
        const f = l.length === 0 ? a : a.substring(c)
          , h = f.startsWith(B0)
          , x = h ? f.substring(1) : f
          , y = d && d > c ? d - c : void 0;
        return {
            modifiers: l,
            hasImportantModifier: h,
            baseClassName: x,
            maybePostfixModifierPosition: y
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: o
    }) : o
}
  , NE = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , ME = e => ({
    cache: RE(e.cacheSize),
    parseClassName: AE(e),
    ...CE(e)
})
  , jE = /\s+/
  , DE = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i} = t
      , s = []
      , o = e.trim().split(jE);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
        const u = o[l]
          , {modifiers: c, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: h} = n(u);
        let x = !!h
          , y = r(x ? f.substring(0, h) : f);
        if (!y) {
            if (!x) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (y = r(f),
            !y) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            x = !1
        }
        const w = NE(c).join(":")
          , g = d ? w + B0 : w
          , p = g + y;
        if (s.includes(p))
            continue;
        s.push(p);
        const v = i(y, x);
        for (let b = 0; b < v.length; ++b) {
            const C = v[b];
            s.push(g + C)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function LE() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = $0(t)) && (r && (r += " "),
        r += n);
    return r
}
const $0 = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = $0(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function OE(e, ...t) {
    let n, r, i, s = o;
    function o(l) {
        const u = t.reduce( (c, d) => d(c), e());
        return n = ME(u),
        r = n.cache.get,
        i = n.cache.set,
        s = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const c = DE(l, n);
        return i(l, c),
        c
    }
    return function() {
        return s(LE.apply(null, arguments))
    }
}
const se = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , U0 = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , IE = /^\d+\/\d+$/
  , VE = new Set(["px", "full", "screen"])
  , FE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , _E = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , zE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , BE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , $E = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , sn = e => Ci(e) || VE.has(e) || IE.test(e)
  , Rn = e => Qi(e, "length", XE)
  , Ci = e => !!e && !Number.isNaN(Number(e))
  , Eu = e => Qi(e, "number", Ci)
  , fs = e => !!e && Number.isInteger(Number(e))
  , UE = e => e.endsWith("%") && Ci(e.slice(0, -1))
  , G = e => U0.test(e)
  , An = e => FE.test(e)
  , WE = new Set(["length", "size", "percentage"])
  , HE = e => Qi(e, WE, W0)
  , KE = e => Qi(e, "position", W0)
  , GE = new Set(["image", "url"])
  , QE = e => Qi(e, GE, ZE)
  , YE = e => Qi(e, "", qE)
  , hs = () => !0
  , Qi = (e, t, n) => {
    const r = U0.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , XE = e => _E.test(e) && !zE.test(e)
  , W0 = () => !1
  , qE = e => BE.test(e)
  , ZE = e => $E.test(e)
  , JE = () => {
    const e = se("colors")
      , t = se("spacing")
      , n = se("blur")
      , r = se("brightness")
      , i = se("borderColor")
      , s = se("borderRadius")
      , o = se("borderSpacing")
      , a = se("borderWidth")
      , l = se("contrast")
      , u = se("grayscale")
      , c = se("hueRotate")
      , d = se("invert")
      , f = se("gap")
      , h = se("gradientColorStops")
      , x = se("gradientColorStopPositions")
      , y = se("inset")
      , w = se("margin")
      , g = se("opacity")
      , p = se("padding")
      , v = se("saturate")
      , b = se("scale")
      , C = se("sepia")
      , E = se("skew")
      , T = se("space")
      , P = se("translate")
      , N = () => ["auto", "contain", "none"]
      , M = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , _ = () => ["auto", G, t]
      , I = () => [G, t]
      , U = () => ["", sn, Rn]
      , O = () => ["auto", Ci, G]
      , Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , $ = () => ["solid", "dashed", "dotted", "double", "none"]
      , K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , k = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , R = () => ["", "0", G]
      , L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , B = () => [Ci, G];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [hs],
            spacing: [sn, Rn],
            blur: ["none", "", An, G],
            brightness: B(),
            borderColor: [e],
            borderRadius: ["none", "", "full", An, G],
            borderSpacing: I(),
            borderWidth: U(),
            contrast: B(),
            grayscale: R(),
            hueRotate: B(),
            invert: R(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [UE, Rn],
            inset: _(),
            margin: _(),
            opacity: B(),
            padding: I(),
            saturate: B(),
            scale: B(),
            sepia: R(),
            skew: B(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", G]
            }],
            container: ["container"],
            columns: [{
                columns: [An]
            }],
            "break-after": [{
                "break-after": L()
            }],
            "break-before": [{
                "break-before": L()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Q(), G]
            }],
            overflow: [{
                overflow: M()
            }],
            "overflow-x": [{
                "overflow-x": M()
            }],
            "overflow-y": [{
                "overflow-y": M()
            }],
            overscroll: [{
                overscroll: N()
            }],
            "overscroll-x": [{
                "overscroll-x": N()
            }],
            "overscroll-y": [{
                "overscroll-y": N()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", fs, G]
            }],
            basis: [{
                basis: _()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", G]
            }],
            grow: [{
                grow: R()
            }],
            shrink: [{
                shrink: R()
            }],
            order: [{
                order: ["first", "last", "none", fs, G]
            }],
            "grid-cols": [{
                "grid-cols": [hs]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", fs, G]
                }, G]
            }],
            "col-start": [{
                "col-start": O()
            }],
            "col-end": [{
                "col-end": O()
            }],
            "grid-rows": [{
                "grid-rows": [hs]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [fs, G]
                }, G]
            }],
            "row-start": [{
                "row-start": O()
            }],
            "row-end": [{
                "row-end": O()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", G]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", G]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...k()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...k(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...k(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [T]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [T]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
            }],
            "min-w": [{
                "min-w": [G, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [An]
                }, An]
            }],
            h: [{
                h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [G, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", An, Rn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Eu]
            }],
            "font-family": [{
                font: [hs]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Ci, Eu]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", sn, G]
            }],
            "list-image": [{
                "list-image": ["none", G]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", G]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [g]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [g]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...$(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", sn, Rn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", sn, G]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", G]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [g]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Q(), KE]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", HE]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, QE]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [x]
            }],
            "gradient-via-pos": [{
                via: [x]
            }],
            "gradient-to-pos": [{
                to: [x]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [g]
            }],
            "border-style": [{
                border: [...$(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [g]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [i]
            }],
            "border-color-x": [{
                "border-x": [i]
            }],
            "border-color-y": [{
                "border-y": [i]
            }],
            "border-color-s": [{
                "border-s": [i]
            }],
            "border-color-e": [{
                "border-e": [i]
            }],
            "border-color-t": [{
                "border-t": [i]
            }],
            "border-color-r": [{
                "border-r": [i]
            }],
            "border-color-b": [{
                "border-b": [i]
            }],
            "border-color-l": [{
                "border-l": [i]
            }],
            "divide-color": [{
                divide: [i]
            }],
            "outline-style": [{
                outline: ["", ...$()]
            }],
            "outline-offset": [{
                "outline-offset": [sn, G]
            }],
            "outline-w": [{
                outline: [sn, Rn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: U()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [g]
            }],
            "ring-offset-w": [{
                "ring-offset": [sn, Rn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", An, YE]
            }],
            "shadow-color": [{
                shadow: [hs]
            }],
            opacity: [{
                opacity: [g]
            }],
            "mix-blend": [{
                "mix-blend": [...K(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": K()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", An, G]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [g]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [o]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [o]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [o]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
            }],
            duration: [{
                duration: B()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", G]
            }],
            delay: [{
                delay: B()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", G]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [b]
            }],
            "scale-x": [{
                "scale-x": [b]
            }],
            "scale-y": [{
                "scale-y": [b]
            }],
            rotate: [{
                rotate: [fs, G]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", G]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [sn, Rn, Eu]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , eT = OE(JE);
function Wt(...e) {
    return eT(D0(e))
}
const tT = lE
  , H0 = S.forwardRef( ({className: e, ...t}, n) => m.jsx(P0, {
    ref: n,
    className: Wt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
H0.displayName = P0.displayName;
const nT = Ef("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , K0 = S.forwardRef( ({className: e, variant: t, ...n}, r) => m.jsx(k0, {
    ref: r,
    className: Wt(nT({
        variant: t
    }), e),
    ...n
}));
K0.displayName = k0.displayName;
const rT = S.forwardRef( ({className: e, ...t}, n) => m.jsx(N0, {
    ref: n,
    className: Wt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
rT.displayName = N0.displayName;
const G0 = S.forwardRef( ({className: e, ...t}, n) => m.jsx(M0, {
    ref: n,
    className: Wt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: m.jsx(kf, {
        className: "h-4 w-4"
    })
}));
G0.displayName = M0.displayName;
const Q0 = S.forwardRef( ({className: e, ...t}, n) => m.jsx(R0, {
    ref: n,
    className: Wt("text-sm font-semibold", e),
    ...t
}));
Q0.displayName = R0.displayName;
const Y0 = S.forwardRef( ({className: e, ...t}, n) => m.jsx(A0, {
    ref: n,
    className: Wt("text-sm opacity-90", e),
    ...t
}));
Y0.displayName = A0.displayName;
function iT() {
    const {toasts: e} = s0();
    return m.jsxs(tT, {
        children: [e.map(function({id: t, title: n, description: r, action: i, ...s}) {
            return m.jsxs(K0, {
                ...s,
                children: [m.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && m.jsx(Q0, {
                        children: n
                    }), r && m.jsx(Y0, {
                        children: r
                    })]
                }), i, m.jsx(G0, {})]
            }, t)
        }), m.jsx(H0, {})]
    })
}
var Up = ["light", "dark"]
  , sT = "(prefers-color-scheme: dark)"
  , oT = S.createContext(void 0)
  , aT = {
    setTheme: e => {}
    ,
    themes: []
}
  , lT = () => {
    var e;
    return (e = S.useContext(oT)) != null ? e : aT
}
;
S.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: i, defaultTheme: s, value: o, attrs: a, nonce: l}) => {
    let u = s === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(x => `'${x}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , d = i ? Up.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , f = (x, y=!1, w=!0) => {
        let g = o ? o[x] : x
          , p = y ? x + "|| ''" : `'${g}'`
          , v = "";
        return i && w && !y && Up.includes(x) && (v += `d.style.colorScheme = '${x}';`),
        n === "class" ? y || g ? v += `c.add(${p})` : v += "null" : g && (v += `d[s](n,${p})`),
        v
    }
      , h = e ? `!function(){${c}${f(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${sT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(s, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}else{${f(s, !1, !1)};}${d}}catch(t){}}();`;
    return S.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
}
);
var uT = e => {
    switch (e) {
    case "success":
        return fT;
    case "info":
        return pT;
    case "warning":
        return hT;
    case "error":
        return mT;
    default:
        return null
    }
}
  , cT = Array(12).fill(0)
  , dT = ({visible: e, className: t}) => D.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, D.createElement("div", {
    className: "sonner-spinner"
}, cT.map( (n, r) => D.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , fT = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , hT = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , pT = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , mT = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, D.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , gT = D.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, D.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), D.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , yT = () => {
    let[e,t] = D.useState(document.hidden);
    return D.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Uc = 1
  , vT = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , i = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Uc++
              , s = this.toasts.find(a => a.id === i)
              , o = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i),
            s ? this.toasts = this.toasts.map(a => a.id === i ? (this.publish({
                ...a,
                ...e,
                id: i,
                title: n
            }),
            {
                ...a,
                ...e,
                id: i,
                dismissible: o,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: o,
                id: i
            }),
            i
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), i = n !== void 0, s, o = r.then(async l => {
                if (s = ["resolve", l],
                D.isValidElement(l))
                    i = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (wT(l) && !l.ok) {
                    i = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    i = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async l => {
                if (s = ["reject", l],
                t.error !== void 0) {
                    i = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , c = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var l;
                i && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => o.then( () => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Uc++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , qe = new vT
  , xT = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Uc++;
    return qe.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , wT = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , ST = xT
  , bT = () => qe.toasts
  , CT = () => qe.getActiveToasts();
Object.assign(ST, {
    success: qe.success,
    info: qe.info,
    warning: qe.warning,
    error: qe.error,
    custom: qe.custom,
    message: qe.message,
    promise: qe.promise,
    dismiss: qe.dismiss,
    loading: qe.loading
}, {
    getHistory: bT,
    getToasts: CT
});
function ET(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
ET(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Qo(e) {
    return e.label !== void 0
}
var TT = 3
  , PT = "32px"
  , kT = "16px"
  , Wp = 4e3
  , RT = 356
  , AT = 14
  , NT = 20
  , MT = 200;
function Rt(...e) {
    return e.filter(Boolean).join(" ")
}
function jT(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var DT = e => {
    var t, n, r, i, s, o, a, l, u, c, d;
    let {invert: f, toast: h, unstyled: x, interacting: y, setHeights: w, visibleToasts: g, heights: p, index: v, toasts: b, expanded: C, removeToast: E, defaultRichColors: T, closeButton: P, style: N, cancelButtonStyle: M, actionButtonStyle: _, className: I="", descriptionClassName: U="", duration: O, position: Q, gap: $, loadingIcon: K, expandByDefault: k, classNames: R, icons: L, closeButtonAriaLabel: B="Close toast", pauseWhenPageIsHidden: z} = e
      , [Y,q] = D.useState(null)
      , [we,Le] = D.useState(null)
      , [ee,Hr] = D.useState(!1)
      , [Sn,pr] = D.useState(!1)
      , [bn,Kr] = D.useState(!1)
      , [Cn,To] = D.useState(!1)
      , [Wl,Po] = D.useState(!1)
      , [Hl,ns] = D.useState(0)
      , [Gr,yh] = D.useState(0)
      , rs = D.useRef(h.duration || O || Wp)
      , vh = D.useRef(null)
      , mr = D.useRef(null)
      , Nw = v === 0
      , Mw = v + 1 <= g
      , ft = h.type
      , Qr = h.dismissible !== !1
      , jw = h.className || ""
      , Dw = h.descriptionClassName || ""
      , ko = D.useMemo( () => p.findIndex(W => W.toastId === h.id) || 0, [p, h.id])
      , Lw = D.useMemo( () => {
        var W;
        return (W = h.closeButton) != null ? W : P
    }
    , [h.closeButton, P])
      , xh = D.useMemo( () => h.duration || O || Wp, [h.duration, O])
      , Kl = D.useRef(0)
      , Yr = D.useRef(0)
      , wh = D.useRef(0)
      , Xr = D.useRef(null)
      , [Ow,Iw] = Q.split("-")
      , Sh = D.useMemo( () => p.reduce( (W, ne, le) => le >= ko ? W : W + ne.height, 0), [p, ko])
      , bh = yT()
      , Vw = h.invert || f
      , Gl = ft === "loading";
    Yr.current = D.useMemo( () => ko * $ + Sh, [ko, Sh]),
    D.useEffect( () => {
        rs.current = xh
    }
    , [xh]),
    D.useEffect( () => {
        Hr(!0)
    }
    , []),
    D.useEffect( () => {
        let W = mr.current;
        if (W) {
            let ne = W.getBoundingClientRect().height;
            return yh(ne),
            w(le => [{
                toastId: h.id,
                height: ne,
                position: h.position
            }, ...le]),
            () => w(le => le.filter(Et => Et.toastId !== h.id))
        }
    }
    , [w, h.id]),
    D.useLayoutEffect( () => {
        if (!ee)
            return;
        let W = mr.current
          , ne = W.style.height;
        W.style.height = "auto";
        let le = W.getBoundingClientRect().height;
        W.style.height = ne,
        yh(le),
        w(Et => Et.find(Tt => Tt.toastId === h.id) ? Et.map(Tt => Tt.toastId === h.id ? {
            ...Tt,
            height: le
        } : Tt) : [{
            toastId: h.id,
            height: le,
            position: h.position
        }, ...Et])
    }
    , [ee, h.title, h.description, w, h.id]);
    let En = D.useCallback( () => {
        pr(!0),
        ns(Yr.current),
        w(W => W.filter(ne => ne.toastId !== h.id)),
        setTimeout( () => {
            E(h)
        }
        , MT)
    }
    , [h, E, w, Yr]);
    D.useEffect( () => {
        if (h.promise && ft === "loading" || h.duration === 1 / 0 || h.type === "loading")
            return;
        let W;
        return C || y || z && bh ? ( () => {
            if (wh.current < Kl.current) {
                let ne = new Date().getTime() - Kl.current;
                rs.current = rs.current - ne
            }
            wh.current = new Date().getTime()
        }
        )() : rs.current !== 1 / 0 && (Kl.current = new Date().getTime(),
        W = setTimeout( () => {
            var ne;
            (ne = h.onAutoClose) == null || ne.call(h, h),
            En()
        }
        , rs.current)),
        () => clearTimeout(W)
    }
    , [C, y, h, ft, z, bh, En]),
    D.useEffect( () => {
        h.delete && En()
    }
    , [En, h.delete]);
    function Fw() {
        var W, ne, le;
        return L != null && L.loading ? D.createElement("div", {
            className: Rt(R == null ? void 0 : R.loader, (W = h == null ? void 0 : h.classNames) == null ? void 0 : W.loader, "sonner-loader"),
            "data-visible": ft === "loading"
        }, L.loading) : K ? D.createElement("div", {
            className: Rt(R == null ? void 0 : R.loader, (ne = h == null ? void 0 : h.classNames) == null ? void 0 : ne.loader, "sonner-loader"),
            "data-visible": ft === "loading"
        }, K) : D.createElement(dT, {
            className: Rt(R == null ? void 0 : R.loader, (le = h == null ? void 0 : h.classNames) == null ? void 0 : le.loader),
            visible: ft === "loading"
        })
    }
    return D.createElement("li", {
        tabIndex: 0,
        ref: mr,
        className: Rt(I, jw, R == null ? void 0 : R.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, R == null ? void 0 : R.default, R == null ? void 0 : R[ft], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[ft]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = h.richColors) != null ? r : T,
        "data-styled": !(h.jsx || h.unstyled || x),
        "data-mounted": ee,
        "data-promise": !!h.promise,
        "data-swiped": Wl,
        "data-removed": Sn,
        "data-visible": Mw,
        "data-y-position": Ow,
        "data-x-position": Iw,
        "data-index": v,
        "data-front": Nw,
        "data-swiping": bn,
        "data-dismissible": Qr,
        "data-type": ft,
        "data-invert": Vw,
        "data-swipe-out": Cn,
        "data-swipe-direction": we,
        "data-expanded": !!(C || k && ee),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": b.length - v,
            "--offset": `${Sn ? Hl : Yr.current}px`,
            "--initial-height": k ? "auto" : `${Gr}px`,
            ...N,
            ...h.style
        },
        onDragEnd: () => {
            Kr(!1),
            q(null),
            Xr.current = null
        }
        ,
        onPointerDown: W => {
            Gl || !Qr || (vh.current = new Date,
            ns(Yr.current),
            W.target.setPointerCapture(W.pointerId),
            W.target.tagName !== "BUTTON" && (Kr(!0),
            Xr.current = {
                x: W.clientX,
                y: W.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var W, ne, le, Et;
            if (Cn || !Qr)
                return;
            Xr.current = null;
            let Tt = Number(((W = mr.current) == null ? void 0 : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , Tn = Number(((ne = mr.current) == null ? void 0 : ne.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , gr = new Date().getTime() - ((le = vh.current) == null ? void 0 : le.getTime())
              , Pt = Y === "x" ? Tt : Tn
              , Pn = Math.abs(Pt) / gr;
            if (Math.abs(Pt) >= NT || Pn > .11) {
                ns(Yr.current),
                (Et = h.onDismiss) == null || Et.call(h, h),
                Le(Y === "x" ? Tt > 0 ? "right" : "left" : Tn > 0 ? "down" : "up"),
                En(),
                To(!0),
                Po(!1);
                return
            }
            Kr(!1),
            q(null)
        }
        ,
        onPointerMove: W => {
            var ne, le, Et, Tt;
            if (!Xr.current || !Qr || ((ne = window.getSelection()) == null ? void 0 : ne.toString().length) > 0)
                return;
            let Tn = W.clientY - Xr.current.y
              , gr = W.clientX - Xr.current.x
              , Pt = (le = e.swipeDirections) != null ? le : jT(Q);
            !Y && (Math.abs(gr) > 1 || Math.abs(Tn) > 1) && q(Math.abs(gr) > Math.abs(Tn) ? "x" : "y");
            let Pn = {
                x: 0,
                y: 0
            };
            Y === "y" ? (Pt.includes("top") || Pt.includes("bottom")) && (Pt.includes("top") && Tn < 0 || Pt.includes("bottom") && Tn > 0) && (Pn.y = Tn) : Y === "x" && (Pt.includes("left") || Pt.includes("right")) && (Pt.includes("left") && gr < 0 || Pt.includes("right") && gr > 0) && (Pn.x = gr),
            (Math.abs(Pn.x) > 0 || Math.abs(Pn.y) > 0) && Po(!0),
            (Et = mr.current) == null || Et.style.setProperty("--swipe-amount-x", `${Pn.x}px`),
            (Tt = mr.current) == null || Tt.style.setProperty("--swipe-amount-y", `${Pn.y}px`)
        }
    }, Lw && !h.jsx ? D.createElement("button", {
        "aria-label": B,
        "data-disabled": Gl,
        "data-close-button": !0,
        onClick: Gl || !Qr ? () => {}
        : () => {
            var W;
            En(),
            (W = h.onDismiss) == null || W.call(h, h)
        }
        ,
        className: Rt(R == null ? void 0 : R.closeButton, (i = h == null ? void 0 : h.classNames) == null ? void 0 : i.closeButton)
    }, (s = L == null ? void 0 : L.close) != null ? s : gT) : null, h.jsx || S.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : D.createElement(D.Fragment, null, ft || h.icon || h.promise ? D.createElement("div", {
        "data-icon": "",
        className: Rt(R == null ? void 0 : R.icon, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || Fw() : null, h.type !== "loading" ? h.icon || (L == null ? void 0 : L[ft]) || uT(ft) : null) : null, D.createElement("div", {
        "data-content": "",
        className: Rt(R == null ? void 0 : R.content, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content)
    }, D.createElement("div", {
        "data-title": "",
        className: Rt(R == null ? void 0 : R.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? D.createElement("div", {
        "data-description": "",
        className: Rt(U, Dw, R == null ? void 0 : R.description, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), S.isValidElement(h.cancel) ? h.cancel : h.cancel && Qo(h.cancel) ? D.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || M,
        onClick: W => {
            var ne, le;
            Qo(h.cancel) && Qr && ((le = (ne = h.cancel).onClick) == null || le.call(ne, W),
            En())
        }
        ,
        className: Rt(R == null ? void 0 : R.cancelButton, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton)
    }, h.cancel.label) : null, S.isValidElement(h.action) ? h.action : h.action && Qo(h.action) ? D.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || _,
        onClick: W => {
            var ne, le;
            Qo(h.action) && ((le = (ne = h.action).onClick) == null || le.call(ne, W),
            !W.defaultPrevented && En())
        }
        ,
        className: Rt(R == null ? void 0 : R.actionButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.actionButton)
    }, h.action.label) : null))
}
;
function Hp() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function LT(e, t) {
    let n = {};
    return [e, t].forEach( (r, i) => {
        let s = i === 1
          , o = s ? "--mobile-offset" : "--offset"
          , a = s ? kT : PT;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${o}-${u}`] = a : n[`${o}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var OT = S.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: i=["altKey", "KeyT"], expand: s, closeButton: o, className: a, offset: l, mobileOffset: u, theme: c="light", richColors: d, duration: f, style: h, visibleToasts: x=TT, toastOptions: y, dir: w=Hp(), gap: g=AT, loadingIcon: p, icons: v, containerAriaLabel: b="Notifications", pauseWhenPageIsHidden: C} = e
      , [E,T] = D.useState([])
      , P = D.useMemo( () => Array.from(new Set([r].concat(E.filter(z => z.position).map(z => z.position)))), [E, r])
      , [N,M] = D.useState([])
      , [_,I] = D.useState(!1)
      , [U,O] = D.useState(!1)
      , [Q,$] = D.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , K = D.useRef(null)
      , k = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , R = D.useRef(null)
      , L = D.useRef(!1)
      , B = D.useCallback(z => {
        T(Y => {
            var q;
            return (q = Y.find(we => we.id === z.id)) != null && q.delete || qe.dismiss(z.id),
            Y.filter( ({id: we}) => we !== z.id)
        }
        )
    }
    , []);
    return D.useEffect( () => qe.subscribe(z => {
        if (z.dismiss) {
            T(Y => Y.map(q => q.id === z.id ? {
                ...q,
                delete: !0
            } : q));
            return
        }
        setTimeout( () => {
            r0.flushSync( () => {
                T(Y => {
                    let q = Y.findIndex(we => we.id === z.id);
                    return q !== -1 ? [...Y.slice(0, q), {
                        ...Y[q],
                        ...z
                    }, ...Y.slice(q + 1)] : [z, ...Y]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    D.useEffect( () => {
        if (c !== "system") {
            $(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")),
        typeof window > "u")
            return;
        let z = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            z.addEventListener("change", ({matches: Y}) => {
                $(Y ? "dark" : "light")
            }
            )
        } catch {
            z.addListener( ({matches: q}) => {
                try {
                    $(q ? "dark" : "light")
                } catch (we) {
                    console.error(we)
                }
            }
            )
        }
    }
    , [c]),
    D.useEffect( () => {
        E.length <= 1 && I(!1)
    }
    , [E]),
    D.useEffect( () => {
        let z = Y => {
            var q, we;
            i.every(Le => Y[Le] || Y.code === Le) && (I(!0),
            (q = K.current) == null || q.focus()),
            Y.code === "Escape" && (document.activeElement === K.current || (we = K.current) != null && we.contains(document.activeElement)) && I(!1)
        }
        ;
        return document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
    }
    , [i]),
    D.useEffect( () => {
        if (K.current)
            return () => {
                R.current && (R.current.focus({
                    preventScroll: !0
                }),
                R.current = null,
                L.current = !1)
            }
    }
    , [K.current]),
    D.createElement("section", {
        ref: t,
        "aria-label": `${b} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, P.map( (z, Y) => {
        var q;
        let[we,Le] = z.split("-");
        return E.length ? D.createElement("ol", {
            key: z,
            dir: w === "auto" ? Hp() : w,
            tabIndex: -1,
            ref: K,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": Q,
            "data-y-position": we,
            "data-lifted": _ && E.length > 1 && !s,
            "data-x-position": Le,
            style: {
                "--front-toast-height": `${((q = N[0]) == null ? void 0 : q.height) || 0}px`,
                "--width": `${RT}px`,
                "--gap": `${g}px`,
                ...h,
                ...LT(l, u)
            },
            onBlur: ee => {
                L.current && !ee.currentTarget.contains(ee.relatedTarget) && (L.current = !1,
                R.current && (R.current.focus({
                    preventScroll: !0
                }),
                R.current = null))
            }
            ,
            onFocus: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || L.current || (L.current = !0,
                R.current = ee.relatedTarget)
            }
            ,
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                U || I(!1)
            }
            ,
            onDragEnd: () => I(!1),
            onPointerDown: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || O(!0)
            }
            ,
            onPointerUp: () => O(!1)
        }, E.filter(ee => !ee.position && Y === 0 || ee.position === z).map( (ee, Hr) => {
            var Sn, pr;
            return D.createElement(DT, {
                key: ee.id,
                icons: v,
                index: Hr,
                toast: ee,
                defaultRichColors: d,
                duration: (Sn = y == null ? void 0 : y.duration) != null ? Sn : f,
                className: y == null ? void 0 : y.className,
                descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                invert: n,
                visibleToasts: x,
                closeButton: (pr = y == null ? void 0 : y.closeButton) != null ? pr : o,
                interacting: U,
                position: z,
                style: y == null ? void 0 : y.style,
                unstyled: y == null ? void 0 : y.unstyled,
                classNames: y == null ? void 0 : y.classNames,
                cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                removeToast: B,
                toasts: E.filter(bn => bn.position == ee.position),
                heights: N.filter(bn => bn.position == ee.position),
                setHeights: M,
                expandByDefault: s,
                gap: g,
                loadingIcon: p,
                expanded: _,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const IT = ({...e}) => {
    const {theme: t="system"} = lT();
    return m.jsx(OT, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , VT = ["top", "right", "bottom", "left"]
  , sr = Math.min
  , it = Math.max
  , Qa = Math.round
  , Yo = Math.floor
  , or = e => ({
    x: e,
    y: e
})
  , FT = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , _T = {
    start: "end",
    end: "start"
};
function Wc(e, t, n) {
    return it(e, sr(t, n))
}
function yn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function vn(e) {
    return e.split("-")[0]
}
function Yi(e) {
    return e.split("-")[1]
}
function Af(e) {
    return e === "x" ? "y" : "x"
}
function Nf(e) {
    return e === "y" ? "height" : "width"
}
function ar(e) {
    return ["top", "bottom"].includes(vn(e)) ? "y" : "x"
}
function Mf(e) {
    return Af(ar(e))
}
function zT(e, t, n) {
    n === void 0 && (n = !1);
    const r = Yi(e)
      , i = Mf(e)
      , s = Nf(i);
    let o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (o = Ya(o)),
    [o, Ya(o)]
}
function BT(e) {
    const t = Ya(e);
    return [Hc(e), t, Hc(t)]
}
function Hc(e) {
    return e.replace(/start|end/g, t => _T[t])
}
function $T(e, t, n) {
    const r = ["left", "right"]
      , i = ["right", "left"]
      , s = ["top", "bottom"]
      , o = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? i : r : t ? r : i;
    case "left":
    case "right":
        return t ? s : o;
    default:
        return []
    }
}
function UT(e, t, n, r) {
    const i = Yi(e);
    let s = $T(vn(e), n === "start", r);
    return i && (s = s.map(o => o + "-" + i),
    t && (s = s.concat(s.map(Hc)))),
    s
}
function Ya(e) {
    return e.replace(/left|right|bottom|top/g, t => FT[t])
}
function WT(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function X0(e) {
    return typeof e != "number" ? WT(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Xa(e) {
    const {x: t, y: n, width: r, height: i} = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}
function Kp(e, t, n) {
    let {reference: r, floating: i} = e;
    const s = ar(t)
      , o = Mf(t)
      , a = Nf(o)
      , l = vn(t)
      , u = s === "y"
      , c = r.x + r.width / 2 - i.width / 2
      , d = r.y + r.height / 2 - i.height / 2
      , f = r[a] / 2 - i[a] / 2;
    let h;
    switch (l) {
    case "top":
        h = {
            x: c,
            y: r.y - i.height
        };
        break;
    case "bottom":
        h = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        h = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        h = {
            x: r.x - i.width,
            y: d
        };
        break;
    default:
        h = {
            x: r.x,
            y: r.y
        }
    }
    switch (Yi(t)) {
    case "start":
        h[o] -= f * (n && u ? -1 : 1);
        break;
    case "end":
        h[o] += f * (n && u ? -1 : 1);
        break
    }
    return h
}
const HT = async (e, t, n) => {
    const {placement: r="bottom", strategy: i="absolute", middleware: s=[], platform: o} = n
      , a = s.filter(Boolean)
      , l = await (o.isRTL == null ? void 0 : o.isRTL(t));
    let u = await o.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: c, y: d} = Kp(u, r, l)
      , f = r
      , h = {}
      , x = 0;
    for (let y = 0; y < a.length; y++) {
        const {name: w, fn: g} = a[y]
          , {x: p, y: v, data: b, reset: C} = await g({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: i,
            middlewareData: h,
            rects: u,
            platform: o,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = p ?? c,
        d = v ?? d,
        h = {
            ...h,
            [w]: {
                ...h[w],
                ...b
            }
        },
        C && x <= 50 && (x++,
        typeof C == "object" && (C.placement && (f = C.placement),
        C.rects && (u = C.rects === !0 ? await o.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : C.rects),
        {x: c, y: d} = Kp(u, f, l)),
        y = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: i,
        middlewareData: h
    }
}
;
async function Zs(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: i, platform: s, rects: o, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: f=!1, padding: h=0} = yn(t, e)
      , x = X0(h)
      , w = a[f ? d === "floating" ? "reference" : "floating" : d]
      , g = Xa(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    }))
      , p = d === "floating" ? {
        x: r,
        y: i,
        width: o.floating.width,
        height: o.floating.height
    } : o.reference
      , v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating))
      , b = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = Xa(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: p,
        offsetParent: v,
        strategy: l
    }) : p);
    return {
        top: (g.top - C.top + x.top) / b.y,
        bottom: (C.bottom - g.bottom + x.bottom) / b.y,
        left: (g.left - C.left + x.left) / b.x,
        right: (C.right - g.right + x.right) / b.x
    }
}
const KT = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: i, rects: s, platform: o, elements: a, middlewareData: l} = t
          , {element: u, padding: c=0} = yn(e, t) || {};
        if (u == null)
            return {};
        const d = X0(c)
          , f = {
            x: n,
            y: r
        }
          , h = Mf(i)
          , x = Nf(h)
          , y = await o.getDimensions(u)
          , w = h === "y"
          , g = w ? "top" : "left"
          , p = w ? "bottom" : "right"
          , v = w ? "clientHeight" : "clientWidth"
          , b = s.reference[x] + s.reference[h] - f[h] - s.floating[x]
          , C = f[h] - s.reference[h]
          , E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
        let T = E ? E[v] : 0;
        (!T || !await (o.isElement == null ? void 0 : o.isElement(E))) && (T = a.floating[v] || s.floating[x]);
        const P = b / 2 - C / 2
          , N = T / 2 - y[x] / 2 - 1
          , M = sr(d[g], N)
          , _ = sr(d[p], N)
          , I = M
          , U = T - y[x] - _
          , O = T / 2 - y[x] / 2 + P
          , Q = Wc(I, O, U)
          , $ = !l.arrow && Yi(i) != null && O !== Q && s.reference[x] / 2 - (O < I ? M : _) - y[x] / 2 < 0
          , K = $ ? O < I ? O - I : O - U : 0;
        return {
            [h]: f[h] + K,
            data: {
                [h]: Q,
                centerOffset: O - Q - K,
                ...$ && {
                    alignmentOffset: K
                }
            },
            reset: $
        }
    }
})
  , GT = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, middlewareData: s, rects: o, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: c=!0, crossAxis: d=!0, fallbackPlacements: f, fallbackStrategy: h="bestFit", fallbackAxisSideDirection: x="none", flipAlignment: y=!0, ...w} = yn(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const g = vn(i)
              , p = ar(a)
              , v = vn(a) === a
              , b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , C = f || (v || !y ? [Ya(a)] : BT(a))
              , E = x !== "none";
            !f && E && C.push(...UT(a, y, x, b));
            const T = [a, ...C]
              , P = await Zs(t, w)
              , N = [];
            let M = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (c && N.push(P[g]),
            d) {
                const O = zT(i, o, b);
                N.push(P[O[0]], P[O[1]])
            }
            if (M = [...M, {
                placement: i,
                overflows: N
            }],
            !N.every(O => O <= 0)) {
                var _, I;
                const O = (((_ = s.flip) == null ? void 0 : _.index) || 0) + 1
                  , Q = T[O];
                if (Q)
                    return {
                        data: {
                            index: O,
                            overflows: M
                        },
                        reset: {
                            placement: Q
                        }
                    };
                let $ = (I = M.filter(K => K.overflows[0] <= 0).sort( (K, k) => K.overflows[1] - k.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!$)
                    switch (h) {
                    case "bestFit":
                        {
                            var U;
                            const K = (U = M.filter(k => {
                                if (E) {
                                    const R = ar(k.placement);
                                    return R === p || R === "y"
                                }
                                return !0
                            }
                            ).map(k => [k.placement, k.overflows.filter(R => R > 0).reduce( (R, L) => R + L, 0)]).sort( (k, R) => k[1] - R[1])[0]) == null ? void 0 : U[0];
                            K && ($ = K);
                            break
                        }
                    case "initialPlacement":
                        $ = a;
                        break
                    }
                if (i !== $)
                    return {
                        reset: {
                            placement: $
                        }
                    }
            }
            return {}
        }
    }
};
function Gp(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Qp(e) {
    return VT.some(t => e[t] >= 0)
}
const QT = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...i} = yn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await Zs(t, {
                        ...i,
                        elementContext: "reference"
                    })
                      , o = Gp(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: o,
                            referenceHidden: Qp(o)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await Zs(t, {
                        ...i,
                        altBoundary: !0
                    })
                      , o = Gp(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: o,
                            escaped: Qp(o)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function YT(e, t) {
    const {placement: n, platform: r, elements: i} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , o = vn(n)
      , a = Yi(n)
      , l = ar(n) === "y"
      , u = ["left", "top"].includes(o) ? -1 : 1
      , c = s && l ? -1 : 1
      , d = yn(t, e);
    let {mainAxis: f, crossAxis: h, alignmentAxis: x} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof x == "number" && (h = a === "end" ? x * -1 : x),
    l ? {
        x: h * c,
        y: f * u
    } : {
        x: f * u,
        y: h * c
    }
}
const XT = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: i, y: s, placement: o, middlewareData: a} = t
              , l = await YT(t, e);
            return o === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: i + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: o
                }
            }
        }
    }
}
  , qT = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: i} = t
              , {mainAxis: s=!0, crossAxis: o=!1, limiter: a={
                fn: w => {
                    let {x: g, y: p} = w;
                    return {
                        x: g,
                        y: p
                    }
                }
            }, ...l} = yn(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await Zs(t, l)
              , d = ar(vn(i))
              , f = Af(d);
            let h = u[f]
              , x = u[d];
            if (s) {
                const w = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , p = h + c[w]
                  , v = h - c[g];
                h = Wc(p, h, v)
            }
            if (o) {
                const w = d === "y" ? "top" : "left"
                  , g = d === "y" ? "bottom" : "right"
                  , p = x + c[w]
                  , v = x - c[g];
                x = Wc(p, x, v)
            }
            const y = a.fn({
                ...t,
                [f]: h,
                [d]: x
            });
            return {
                ...y,
                data: {
                    x: y.x - n,
                    y: y.y - r,
                    enabled: {
                        [f]: s,
                        [d]: o
                    }
                }
            }
        }
    }
}
  , ZT = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: i, rects: s, middlewareData: o} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = yn(e, t)
              , c = {
                x: n,
                y: r
            }
              , d = ar(i)
              , f = Af(d);
            let h = c[f]
              , x = c[d];
            const y = yn(a, t)
              , w = typeof y == "number" ? {
                mainAxis: y,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...y
            };
            if (l) {
                const v = f === "y" ? "height" : "width"
                  , b = s.reference[f] - s.floating[v] + w.mainAxis
                  , C = s.reference[f] + s.reference[v] - w.mainAxis;
                h < b ? h = b : h > C && (h = C)
            }
            if (u) {
                var g, p;
                const v = f === "y" ? "width" : "height"
                  , b = ["top", "left"].includes(vn(i))
                  , C = s.reference[d] - s.floating[v] + (b && ((g = o.offset) == null ? void 0 : g[d]) || 0) + (b ? 0 : w.crossAxis)
                  , E = s.reference[d] + s.reference[v] + (b ? 0 : ((p = o.offset) == null ? void 0 : p[d]) || 0) - (b ? w.crossAxis : 0);
                x < C ? x = C : x > E && (x = E)
            }
            return {
                [f]: h,
                [d]: x
            }
        }
    }
}
  , JT = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, rects: s, platform: o, elements: a} = t
              , {apply: l= () => {}
            , ...u} = yn(e, t)
              , c = await Zs(t, u)
              , d = vn(i)
              , f = Yi(i)
              , h = ar(i) === "y"
              , {width: x, height: y} = s.floating;
            let w, g;
            d === "top" || d === "bottom" ? (w = d,
            g = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = d,
            w = f === "end" ? "top" : "bottom");
            const p = y - c.top - c.bottom
              , v = x - c.left - c.right
              , b = sr(y - c[w], p)
              , C = sr(x - c[g], v)
              , E = !t.middlewareData.shift;
            let T = b
              , P = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = p),
            E && !f) {
                const M = it(c.left, 0)
                  , _ = it(c.right, 0)
                  , I = it(c.top, 0)
                  , U = it(c.bottom, 0);
                h ? P = x - 2 * (M !== 0 || _ !== 0 ? M + _ : it(c.left, c.right)) : T = y - 2 * (I !== 0 || U !== 0 ? I + U : it(c.top, c.bottom))
            }
            await l({
                ...t,
                availableWidth: P,
                availableHeight: T
            });
            const N = await o.getDimensions(a.floating);
            return x !== N.width || y !== N.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Al() {
    return typeof window < "u"
}
function Xi(e) {
    return q0(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function lt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function rn(e) {
    var t;
    return (t = (q0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function q0(e) {
    return Al() ? e instanceof Node || e instanceof lt(e).Node : !1
}
function $t(e) {
    return Al() ? e instanceof Element || e instanceof lt(e).Element : !1
}
function tn(e) {
    return Al() ? e instanceof HTMLElement || e instanceof lt(e).HTMLElement : !1
}
function Yp(e) {
    return !Al() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof lt(e).ShadowRoot
}
function xo(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: i} = Ut(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
}
function eP(e) {
    return ["table", "td", "th"].includes(Xi(e))
}
function Nl(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function jf(e) {
    const t = Df()
      , n = $t(e) ? Ut(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function tP(e) {
    let t = lr(e);
    for (; tn(t) && !Bi(t); ) {
        if (jf(t))
            return t;
        if (Nl(t))
            return null;
        t = lr(t)
    }
    return null
}
function Df() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Bi(e) {
    return ["html", "body", "#document"].includes(Xi(e))
}
function Ut(e) {
    return lt(e).getComputedStyle(e)
}
function Ml(e) {
    return $t(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function lr(e) {
    if (Xi(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Yp(e) && e.host || rn(e);
    return Yp(t) ? t.host : t
}
function Z0(e) {
    const t = lr(e);
    return Bi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : tn(t) && xo(t) ? t : Z0(t)
}
function Js(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const i = Z0(e)
      , s = i === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , o = lt(i);
    if (s) {
        const a = Kc(o);
        return t.concat(o, o.visualViewport || [], xo(i) ? i : [], a && n ? Js(a) : [])
    }
    return t.concat(i, Js(i, [], n))
}
function Kc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function J0(e) {
    const t = Ut(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const i = tn(e)
      , s = i ? e.offsetWidth : n
      , o = i ? e.offsetHeight : r
      , a = Qa(n) !== s || Qa(r) !== o;
    return a && (n = s,
    r = o),
    {
        width: n,
        height: r,
        $: a
    }
}
function Lf(e) {
    return $t(e) ? e : e.contextElement
}
function Ei(e) {
    const t = Lf(e);
    if (!tn(t))
        return or(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: i, $: s} = J0(t);
    let o = (s ? Qa(n.width) : n.width) / r
      , a = (s ? Qa(n.height) : n.height) / i;
    return (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: o,
        y: a
    }
}
const nP = or(0);
function ex(e) {
    const t = lt(e);
    return !Df() || !t.visualViewport ? nP : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function rP(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== lt(e) ? !1 : t
}
function zr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const i = e.getBoundingClientRect()
      , s = Lf(e);
    let o = or(1);
    t && (r ? $t(r) && (o = Ei(r)) : o = Ei(e));
    const a = rP(s, n, r) ? ex(s) : or(0);
    let l = (i.left + a.x) / o.x
      , u = (i.top + a.y) / o.y
      , c = i.width / o.x
      , d = i.height / o.y;
    if (s) {
        const f = lt(s)
          , h = r && $t(r) ? lt(r) : r;
        let x = f
          , y = Kc(x);
        for (; y && r && h !== x; ) {
            const w = Ei(y)
              , g = y.getBoundingClientRect()
              , p = Ut(y)
              , v = g.left + (y.clientLeft + parseFloat(p.paddingLeft)) * w.x
              , b = g.top + (y.clientTop + parseFloat(p.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            c *= w.x,
            d *= w.y,
            l += v,
            u += b,
            x = lt(y),
            y = Kc(x)
        }
    }
    return Xa({
        width: c,
        height: d,
        x: l,
        y: u
    })
}
function iP(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: i} = e;
    const s = i === "fixed"
      , o = rn(r)
      , a = t ? Nl(t.floating) : !1;
    if (r === o || a && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = or(1);
    const c = or(0)
      , d = tn(r);
    if ((d || !d && !s) && ((Xi(r) !== "body" || xo(o)) && (l = Ml(r)),
    tn(r))) {
        const f = zr(r);
        u = Ei(r),
        c.x = f.x + r.clientLeft,
        c.y = f.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y
    }
}
function sP(e) {
    return Array.from(e.getClientRects())
}
function Gc(e, t) {
    const n = Ml(e).scrollLeft;
    return t ? t.left + n : zr(rn(e)).left + n
}
function oP(e) {
    const t = rn(e)
      , n = Ml(e)
      , r = e.ownerDocument.body
      , i = it(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = it(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let o = -n.scrollLeft + Gc(e);
    const a = -n.scrollTop;
    return Ut(r).direction === "rtl" && (o += it(t.clientWidth, r.clientWidth) - i),
    {
        width: i,
        height: s,
        x: o,
        y: a
    }
}
function aP(e, t) {
    const n = lt(e)
      , r = rn(e)
      , i = n.visualViewport;
    let s = r.clientWidth
      , o = r.clientHeight
      , a = 0
      , l = 0;
    if (i) {
        s = i.width,
        o = i.height;
        const u = Df();
        (!u || u && t === "fixed") && (a = i.offsetLeft,
        l = i.offsetTop)
    }
    return {
        width: s,
        height: o,
        x: a,
        y: l
    }
}
function lP(e, t) {
    const n = zr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , i = n.left + e.clientLeft
      , s = tn(e) ? Ei(e) : or(1)
      , o = e.clientWidth * s.x
      , a = e.clientHeight * s.y
      , l = i * s.x
      , u = r * s.y;
    return {
        width: o,
        height: a,
        x: l,
        y: u
    }
}
function Xp(e, t, n) {
    let r;
    if (t === "viewport")
        r = aP(e, n);
    else if (t === "document")
        r = oP(rn(e));
    else if ($t(t))
        r = lP(t, n);
    else {
        const i = ex(e);
        r = {
            ...t,
            x: t.x - i.x,
            y: t.y - i.y
        }
    }
    return Xa(r)
}
function tx(e, t) {
    const n = lr(e);
    return n === t || !$t(n) || Bi(n) ? !1 : Ut(n).position === "fixed" || tx(n, t)
}
function uP(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Js(e, [], !1).filter(a => $t(a) && Xi(a) !== "body")
      , i = null;
    const s = Ut(e).position === "fixed";
    let o = s ? lr(e) : e;
    for (; $t(o) && !Bi(o); ) {
        const a = Ut(o)
          , l = jf(o);
        !l && a.position === "fixed" && (i = null),
        (s ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || xo(o) && !l && tx(e, o)) ? r = r.filter(c => c !== o) : i = a,
        o = lr(o)
    }
    return t.set(e, r),
    r
}
function cP(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: i} = e;
    const o = [...n === "clippingAncestors" ? Nl(t) ? [] : uP(t, this._c) : [].concat(n), r]
      , a = o[0]
      , l = o.reduce( (u, c) => {
        const d = Xp(t, c, i);
        return u.top = it(d.top, u.top),
        u.right = sr(d.right, u.right),
        u.bottom = sr(d.bottom, u.bottom),
        u.left = it(d.left, u.left),
        u
    }
    , Xp(t, a, i));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function dP(e) {
    const {width: t, height: n} = J0(e);
    return {
        width: t,
        height: n
    }
}
function fP(e, t, n) {
    const r = tn(t)
      , i = rn(t)
      , s = n === "fixed"
      , o = zr(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = or(0);
    if (r || !r && !s)
        if ((Xi(t) !== "body" || xo(i)) && (a = Ml(t)),
        r) {
            const h = zr(t, !0, s, t);
            l.x = h.x + t.clientLeft,
            l.y = h.y + t.clientTop
        } else
            i && (l.x = Gc(i));
    let u = 0
      , c = 0;
    if (i && !r && !s) {
        const h = i.getBoundingClientRect();
        c = h.top + a.scrollTop,
        u = h.left + a.scrollLeft - Gc(i, h)
    }
    const d = o.left + a.scrollLeft - l.x - u
      , f = o.top + a.scrollTop - l.y - c;
    return {
        x: d,
        y: f,
        width: o.width,
        height: o.height
    }
}
function Tu(e) {
    return Ut(e).position === "static"
}
function qp(e, t) {
    if (!tn(e) || Ut(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return rn(e) === n && (n = n.ownerDocument.body),
    n
}
function nx(e, t) {
    const n = lt(e);
    if (Nl(e))
        return n;
    if (!tn(e)) {
        let i = lr(e);
        for (; i && !Bi(i); ) {
            if ($t(i) && !Tu(i))
                return i;
            i = lr(i)
        }
        return n
    }
    let r = qp(e, t);
    for (; r && eP(r) && Tu(r); )
        r = qp(r, t);
    return r && Bi(r) && Tu(r) && !jf(r) ? n : r || tP(e) || n
}
const hP = async function(e) {
    const t = this.getOffsetParent || nx
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: fP(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function pP(e) {
    return Ut(e).direction === "rtl"
}
const mP = {
    convertOffsetParentRelativeRectToViewportRelativeRect: iP,
    getDocumentElement: rn,
    getClippingRect: cP,
    getOffsetParent: nx,
    getElementRects: hP,
    getClientRects: sP,
    getDimensions: dP,
    getScale: Ei,
    isElement: $t,
    isRTL: pP
};
function gP(e, t) {
    let n = null, r;
    const i = rn(e);
    function s() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function o(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        s();
        const {left: u, top: c, width: d, height: f} = e.getBoundingClientRect();
        if (a || t(),
        !d || !f)
            return;
        const h = Yo(c)
          , x = Yo(i.clientWidth - (u + d))
          , y = Yo(i.clientHeight - (c + f))
          , w = Yo(u)
          , p = {
            rootMargin: -h + "px " + -x + "px " + -y + "px " + -w + "px",
            threshold: it(0, sr(1, l)) || 1
        };
        let v = !0;
        function b(C) {
            const E = C[0].intersectionRatio;
            if (E !== l) {
                if (!v)
                    return o();
                E ? o(!1, E) : r = setTimeout( () => {
                    o(!1, 1e-7)
                }
                , 1e3)
            }
            v = !1
        }
        try {
            n = new IntersectionObserver(b,{
                ...p,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(b,p)
        }
        n.observe(e)
    }
    return o(!0),
    s
}
function yP(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: i=!0, ancestorResize: s=!0, elementResize: o=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = Lf(e)
      , c = i || s ? [...u ? Js(u) : [], ...Js(t)] : [];
    c.forEach(g => {
        i && g.addEventListener("scroll", n, {
            passive: !0
        }),
        s && g.addEventListener("resize", n)
    }
    );
    const d = u && a ? gP(u, n) : null;
    let f = -1
      , h = null;
    o && (h = new ResizeObserver(g => {
        let[p] = g;
        p && p.target === u && h && (h.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var v;
            (v = h) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && h.observe(u),
    h.observe(t));
    let x, y = l ? zr(e) : null;
    l && w();
    function w() {
        const g = zr(e);
        y && (g.x !== y.x || g.y !== y.y || g.width !== y.width || g.height !== y.height) && n(),
        y = g,
        x = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var g;
        c.forEach(p => {
            i && p.removeEventListener("scroll", n),
            s && p.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (g = h) == null || g.disconnect(),
        h = null,
        l && cancelAnimationFrame(x)
    }
}
const vP = XT
  , xP = qT
  , wP = GT
  , SP = JT
  , bP = QT
  , Zp = KT
  , CP = ZT
  , EP = (e, t, n) => {
    const r = new Map
      , i = {
        platform: mP,
        ...n
    }
      , s = {
        ...i.platform,
        _c: r
    };
    return HT(e, t, {
        ...i,
        platform: s
    })
}
;
var ma = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function qa(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, i;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!qa(e[r], t[r]))
                    return !1;
            return !0
        }
        if (i = Object.keys(e),
        n = i.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, i[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = i[r];
            if (!(s === "_owner" && e.$$typeof) && !qa(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function rx(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Jp(e, t) {
    const n = rx(e);
    return Math.round(t * n) / n
}
function Pu(e) {
    const t = S.useRef(e);
    return ma( () => {
        t.current = e
    }
    ),
    t
}
function TP(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: i, elements: {reference: s, floating: o}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [c,d] = S.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [f,h] = S.useState(r);
    qa(f, r) || h(r);
    const [x,y] = S.useState(null)
      , [w,g] = S.useState(null)
      , p = S.useCallback(k => {
        k !== E.current && (E.current = k,
        y(k))
    }
    , [])
      , v = S.useCallback(k => {
        k !== T.current && (T.current = k,
        g(k))
    }
    , [])
      , b = s || x
      , C = o || w
      , E = S.useRef(null)
      , T = S.useRef(null)
      , P = S.useRef(c)
      , N = l != null
      , M = Pu(l)
      , _ = Pu(i)
      , I = Pu(u)
      , U = S.useCallback( () => {
        if (!E.current || !T.current)
            return;
        const k = {
            placement: t,
            strategy: n,
            middleware: f
        };
        _.current && (k.platform = _.current),
        EP(E.current, T.current, k).then(R => {
            const L = {
                ...R,
                isPositioned: I.current !== !1
            };
            O.current && !qa(P.current, L) && (P.current = L,
            yo.flushSync( () => {
                d(L)
            }
            ))
        }
        )
    }
    , [f, t, n, _, I]);
    ma( () => {
        u === !1 && P.current.isPositioned && (P.current.isPositioned = !1,
        d(k => ({
            ...k,
            isPositioned: !1
        })))
    }
    , [u]);
    const O = S.useRef(!1);
    ma( () => (O.current = !0,
    () => {
        O.current = !1
    }
    ), []),
    ma( () => {
        if (b && (E.current = b),
        C && (T.current = C),
        b && C) {
            if (M.current)
                return M.current(b, C, U);
            U()
        }
    }
    , [b, C, U, M, N]);
    const Q = S.useMemo( () => ({
        reference: E,
        floating: T,
        setReference: p,
        setFloating: v
    }), [p, v])
      , $ = S.useMemo( () => ({
        reference: b,
        floating: C
    }), [b, C])
      , K = S.useMemo( () => {
        const k = {
            position: n,
            left: 0,
            top: 0
        };
        if (!$.floating)
            return k;
        const R = Jp($.floating, c.x)
          , L = Jp($.floating, c.y);
        return a ? {
            ...k,
            transform: "translate(" + R + "px, " + L + "px)",
            ...rx($.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: R,
            top: L
        }
    }
    , [n, a, $.floating, c.x, c.y]);
    return S.useMemo( () => ({
        ...c,
        update: U,
        refs: Q,
        elements: $,
        floatingStyles: K
    }), [c, U, Q, $, K])
}
const PP = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: i} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Zp({
                element: r.current,
                padding: i
            }).fn(n) : {} : r ? Zp({
                element: r,
                padding: i
            }).fn(n) : {}
        }
    }
}
  , kP = (e, t) => ({
    ...vP(e),
    options: [e, t]
})
  , RP = (e, t) => ({
    ...xP(e),
    options: [e, t]
})
  , AP = (e, t) => ({
    ...CP(e),
    options: [e, t]
})
  , NP = (e, t) => ({
    ...wP(e),
    options: [e, t]
})
  , MP = (e, t) => ({
    ...SP(e),
    options: [e, t]
})
  , jP = (e, t) => ({
    ...bP(e),
    options: [e, t]
})
  , DP = (e, t) => ({
    ...PP(e),
    options: [e, t]
});
var LP = "Arrow"
  , ix = S.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: i=5, ...s} = e;
    return m.jsx(Xe.svg, {
        ...s,
        ref: t,
        width: r,
        height: i,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : m.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
ix.displayName = LP;
var OP = ix;
function IP(e) {
    const [t,n] = S.useState(void 0);
    return ir( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(i => {
                if (!Array.isArray(i) || !i.length)
                    return;
                const s = i[0];
                let o, a;
                if ("borderBoxSize"in s) {
                    const l = s.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    o = u.inlineSize,
                    a = u.blockSize
                } else
                    o = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: o,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var sx = "Popper"
  , [ox,ax] = Tl(sx)
  , [oD,lx] = ox(sx)
  , ux = "PopperAnchor"
  , cx = S.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...i} = e
      , s = lx(ux, n)
      , o = S.useRef(null)
      , a = Bt(t, o);
    return S.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || o.current)
    }
    ),
    r ? null : m.jsx(Xe.div, {
        ...i,
        ref: a
    })
}
);
cx.displayName = ux;
var Of = "PopperContent"
  , [VP,FP] = ox(Of)
  , dx = S.forwardRef( (e, t) => {
    var ee, Hr, Sn, pr, bn, Kr;
    const {__scopePopper: n, side: r="bottom", sideOffset: i=0, align: s="center", alignOffset: o=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: d="partial", hideWhenDetached: f=!1, updatePositionStrategy: h="optimized", onPlaced: x, ...y} = e
      , w = lx(Of, n)
      , [g,p] = S.useState(null)
      , v = Bt(t, Cn => p(Cn))
      , [b,C] = S.useState(null)
      , E = IP(b)
      , T = (E == null ? void 0 : E.width) ?? 0
      , P = (E == null ? void 0 : E.height) ?? 0
      , N = r + (s !== "center" ? "-" + s : "")
      , M = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , _ = Array.isArray(u) ? u : [u]
      , I = _.length > 0
      , U = {
        padding: M,
        boundary: _.filter(zP),
        altBoundary: I
    }
      , {refs: O, floatingStyles: Q, placement: $, isPositioned: K, middlewareData: k} = TP({
        strategy: "fixed",
        placement: N,
        whileElementsMounted: (...Cn) => yP(...Cn, {
            animationFrame: h === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [kP({
            mainAxis: i + P,
            alignmentAxis: o
        }), l && RP({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? AP() : void 0,
            ...U
        }), l && NP({
            ...U
        }), MP({
            ...U,
            apply: ({elements: Cn, rects: To, availableWidth: Wl, availableHeight: Po}) => {
                const {width: Hl, height: ns} = To.reference
                  , Gr = Cn.floating.style;
                Gr.setProperty("--radix-popper-available-width", `${Wl}px`),
                Gr.setProperty("--radix-popper-available-height", `${Po}px`),
                Gr.setProperty("--radix-popper-anchor-width", `${Hl}px`),
                Gr.setProperty("--radix-popper-anchor-height", `${ns}px`)
            }
        }), b && DP({
            element: b,
            padding: a
        }), BP({
            arrowWidth: T,
            arrowHeight: P
        }), f && jP({
            strategy: "referenceHidden",
            ...U
        })]
    })
      , [R,L] = px($)
      , B = rr(x);
    ir( () => {
        K && (B == null || B())
    }
    , [K, B]);
    const z = (ee = k.arrow) == null ? void 0 : ee.x
      , Y = (Hr = k.arrow) == null ? void 0 : Hr.y
      , q = ((Sn = k.arrow) == null ? void 0 : Sn.centerOffset) !== 0
      , [we,Le] = S.useState();
    return ir( () => {
        g && Le(window.getComputedStyle(g).zIndex)
    }
    , [g]),
    m.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Q,
            transform: K ? Q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: we,
            "--radix-popper-transform-origin": [(pr = k.transformOrigin) == null ? void 0 : pr.x, (bn = k.transformOrigin) == null ? void 0 : bn.y].join(" "),
            ...((Kr = k.hide) == null ? void 0 : Kr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: m.jsx(VP, {
            scope: n,
            placedSide: R,
            onArrowChange: C,
            arrowX: z,
            arrowY: Y,
            shouldHideArrow: q,
            children: m.jsx(Xe.div, {
                "data-side": R,
                "data-align": L,
                ...y,
                ref: v,
                style: {
                    ...y.style,
                    animation: K ? void 0 : "none"
                }
            })
        })
    })
}
);
dx.displayName = Of;
var fx = "PopperArrow"
  , _P = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , hx = S.forwardRef(function(t, n) {
    const {__scopePopper: r, ...i} = t
      , s = FP(fx, r)
      , o = _P[s.placedSide];
    return m.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [o]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: m.jsx(OP, {
            ...i,
            ref: n,
            style: {
                ...i.style,
                display: "block"
            }
        })
    })
});
hx.displayName = fx;
function zP(e) {
    return e !== null
}
var BP = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, g, p;
        const {placement: n, rects: r, middlewareData: i} = t
          , o = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = o ? 0 : e.arrowWidth
          , l = o ? 0 : e.arrowHeight
          , [u,c] = px(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , f = (((g = i.arrow) == null ? void 0 : g.x) ?? 0) + a / 2
          , h = (((p = i.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
        let x = ""
          , y = "";
        return u === "bottom" ? (x = o ? d : `${f}px`,
        y = `${-l}px`) : u === "top" ? (x = o ? d : `${f}px`,
        y = `${r.floating.height + l}px`) : u === "right" ? (x = `${-l}px`,
        y = o ? d : `${h}px`) : u === "left" && (x = `${r.floating.width + l}px`,
        y = o ? d : `${h}px`),
        {
            data: {
                x,
                y
            }
        }
    }
});
function px(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var $P = cx
  , UP = dx
  , WP = hx
  , [jl,aD] = Tl("Tooltip", [ax])
  , If = ax()
  , mx = "TooltipProvider"
  , HP = 700
  , em = "tooltip.open"
  , [KP,gx] = jl(mx)
  , yx = e => {
    const {__scopeTooltip: t, delayDuration: n=HP, skipDelayDuration: r=300, disableHoverableContent: i=!1, children: s} = e
      , o = S.useRef(!0)
      , a = S.useRef(!1)
      , l = S.useRef(0);
    return S.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    m.jsx(KP, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: S.useCallback( () => {
            window.clearTimeout(l.current),
            o.current = !1
        }
        , []),
        onClose: S.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => o.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: S.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: i,
        children: s
    })
}
;
yx.displayName = mx;
var vx = "Tooltip"
  , [lD,Dl] = jl(vx)
  , Qc = "TooltipTrigger"
  , GP = S.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , i = Dl(Qc, n)
      , s = gx(Qc, n)
      , o = If(n)
      , a = S.useRef(null)
      , l = Bt(t, a, i.onTriggerChange)
      , u = S.useRef(!1)
      , c = S.useRef(!1)
      , d = S.useCallback( () => u.current = !1, []);
    return S.useEffect( () => () => document.removeEventListener("pointerup", d), [d]),
    m.jsx($P, {
        asChild: !0,
        ...o,
        children: m.jsx(Xe.button, {
            "aria-describedby": i.open ? i.contentId : void 0,
            "data-state": i.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: Pe(e.onPointerMove, f => {
                f.pointerType !== "touch" && !c.current && !s.isPointerInTransitRef.current && (i.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: Pe(e.onPointerLeave, () => {
                i.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: Pe(e.onPointerDown, () => {
                i.open && i.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", d, {
                    once: !0
                })
            }
            ),
            onFocus: Pe(e.onFocus, () => {
                u.current || i.onOpen()
            }
            ),
            onBlur: Pe(e.onBlur, i.onClose),
            onClick: Pe(e.onClick, i.onClose)
        })
    })
}
);
GP.displayName = Qc;
var QP = "TooltipPortal"
  , [uD,YP] = jl(QP, {
    forceMount: void 0
})
  , $i = "TooltipContent"
  , xx = S.forwardRef( (e, t) => {
    const n = YP($i, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: i="top", ...s} = e
      , o = Dl($i, e.__scopeTooltip);
    return m.jsx(wf, {
        present: r || o.open,
        children: o.disableHoverableContent ? m.jsx(wx, {
            side: i,
            ...s,
            ref: t
        }) : m.jsx(XP, {
            side: i,
            ...s,
            ref: t
        })
    })
}
)
  , XP = S.forwardRef( (e, t) => {
    const n = Dl($i, e.__scopeTooltip)
      , r = gx($i, e.__scopeTooltip)
      , i = S.useRef(null)
      , s = Bt(t, i)
      , [o,a] = S.useState(null)
      , {trigger: l, onClose: u} = n
      , c = i.current
      , {onPointerInTransitChange: d} = r
      , f = S.useCallback( () => {
        a(null),
        d(!1)
    }
    , [d])
      , h = S.useCallback( (x, y) => {
        const w = x.currentTarget
          , g = {
            x: x.clientX,
            y: x.clientY
        }
          , p = tk(g, w.getBoundingClientRect())
          , v = nk(g, p)
          , b = rk(y.getBoundingClientRect())
          , C = sk([...v, ...b]);
        a(C),
        d(!0)
    }
    , [d]);
    return S.useEffect( () => () => f(), [f]),
    S.useEffect( () => {
        if (l && c) {
            const x = w => h(w, c)
              , y = w => h(w, l);
            return l.addEventListener("pointerleave", x),
            c.addEventListener("pointerleave", y),
            () => {
                l.removeEventListener("pointerleave", x),
                c.removeEventListener("pointerleave", y)
            }
        }
    }
    , [l, c, h, f]),
    S.useEffect( () => {
        if (o) {
            const x = y => {
                const w = y.target
                  , g = {
                    x: y.clientX,
                    y: y.clientY
                }
                  , p = (l == null ? void 0 : l.contains(w)) || (c == null ? void 0 : c.contains(w))
                  , v = !ik(g, o);
                p ? f() : v && (f(),
                u())
            }
            ;
            return document.addEventListener("pointermove", x),
            () => document.removeEventListener("pointermove", x)
        }
    }
    , [l, c, o, u, f]),
    m.jsx(wx, {
        ...e,
        ref: s
    })
}
)
  , [qP,ZP] = jl(vx, {
    isInside: !1
})
  , JP = xC("TooltipContent")
  , wx = S.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: s, onPointerDownOutside: o, ...a} = e
      , l = Dl($i, n)
      , u = If(n)
      , {onClose: c} = l;
    return S.useEffect( () => (document.addEventListener(em, c),
    () => document.removeEventListener(em, c)), [c]),
    S.useEffect( () => {
        if (l.trigger) {
            const d = f => {
                const h = f.target;
                h != null && h.contains(l.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", d, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", d, {
                capture: !0
            })
        }
    }
    , [l.trigger, c]),
    m.jsx(xf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        onFocusOutside: d => d.preventDefault(),
        onDismiss: c,
        children: m.jsxs(UP, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [m.jsx(JP, {
                children: r
            }), m.jsx(qP, {
                scope: n,
                isInside: !0,
                children: m.jsx(WC, {
                    id: l.contentId,
                    role: "tooltip",
                    children: i || r
                })
            })]
        })
    })
}
);
xx.displayName = $i;
var Sx = "TooltipArrow"
  , ek = S.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , i = If(n);
    return ZP(Sx, n).isInside ? null : m.jsx(WP, {
        ...i,
        ...r,
        ref: t
    })
}
);
ek.displayName = Sx;
function tk(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , i = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, s)) {
    case s:
        return "left";
    case i:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function nk(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function rk(e) {
    const {top: t, right: n, bottom: r, left: i} = e;
    return [{
        x: i,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: i,
        y: r
    }]
}
function ik(e, t) {
    const {x: n, y: r} = e;
    let i = !1;
    for (let s = 0, o = t.length - 1; s < t.length; o = s++) {
        const a = t[s]
          , l = t[o]
          , u = a.x
          , c = a.y
          , d = l.x
          , f = l.y;
        c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (i = !i)
    }
    return i
}
function sk(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    ok(t)
}
function ok(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , o = t[t.length - 2];
            if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x))
                t.pop();
            else
                break
        }
        t.push(i)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const i = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , o = n[n.length - 2];
            if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x))
                n.pop();
            else
                break
        }
        n.push(i)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var ak = yx
  , bx = xx;
const lk = ak
  , uk = S.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => m.jsx(bx, {
    ref: r,
    sideOffset: t,
    className: Wt("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
uk.displayName = bx.displayName;
var Ll = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Ol = typeof window > "u" || "Deno"in globalThis;
function jt() {}
function ck(e, t) {
    return typeof e == "function" ? e(t) : e
}
function dk(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function fk(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Yc(e, t) {
    return typeof e == "function" ? e(t) : e
}
function hk(e, t) {
    return typeof e == "function" ? e(t) : e
}
function tm(e, t) {
    const {type: n="all", exact: r, fetchStatus: i, predicate: s, queryKey: o, stale: a} = e;
    if (o) {
        if (r) {
            if (t.queryHash !== Vf(o, t.options))
                return !1
        } else if (!to(t.queryKey, o))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || i && i !== t.state.fetchStatus || s && !s(t))
}
function nm(e, t) {
    const {exact: n, status: r, predicate: i, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (eo(t.options.mutationKey) !== eo(s))
                return !1
        } else if (!to(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}
function Vf(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || eo)(e)
}
function eo(e) {
    return JSON.stringify(e, (t, n) => Xc(n) ? Object.keys(n).sort().reduce( (r, i) => (r[i] = n[i],
    r), {}) : n)
}
function to(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => to(e[n], t[n])) : !1
}
function Cx(e, t) {
    if (e === t)
        return e;
    const n = rm(e) && rm(t);
    if (n || Xc(e) && Xc(t)) {
        const r = n ? e : Object.keys(e)
          , i = r.length
          , s = n ? t : Object.keys(t)
          , o = s.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let c = 0; c < o; c++) {
            const d = n ? c : s[c];
            (!n && l.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0,
            u++) : (a[d] = Cx(e[d], t[d]),
            a[d] === e[d] && e[d] !== void 0 && u++)
        }
        return i === o && u === i ? e : a
    }
    return t
}
function rm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Xc(e) {
    if (!im(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!im(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function im(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function pk(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function mk(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Cx(e, t) : t
}
function gk(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function yk(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Ff = Symbol();
function Ex(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Ff ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Pr, Vn, Pi, Og, vk = (Og = class extends Ll {
    constructor() {
        super();
        J(this, Pr);
        J(this, Vn);
        J(this, Pi);
        H(this, Pi, t => {
            if (!Ol && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        A(this, Vn) || this.setEventListener(A(this, Pi))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = A(this, Vn)) == null || t.call(this),
        H(this, Vn, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Pi, t),
        (n = A(this, Vn)) == null || n.call(this),
        H(this, Vn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        A(this, Pr) !== t && (H(this, Pr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof A(this, Pr) == "boolean" ? A(this, Pr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Pr = new WeakMap,
Vn = new WeakMap,
Pi = new WeakMap,
Og), Tx = new vk, ki, Fn, Ri, Ig, xk = (Ig = class extends Ll {
    constructor() {
        super();
        J(this, ki, !0);
        J(this, Fn);
        J(this, Ri);
        H(this, Ri, t => {
            if (!Ol && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        A(this, Fn) || this.setEventListener(A(this, Ri))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = A(this, Fn)) == null || t.call(this),
        H(this, Fn, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Ri, t),
        (n = A(this, Fn)) == null || n.call(this),
        H(this, Fn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        A(this, ki) !== t && (H(this, ki, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return A(this, ki)
    }
}
,
ki = new WeakMap,
Fn = new WeakMap,
Ri = new WeakMap,
Ig), Za = new xk;
function wk() {
    let e, t;
    const n = new Promise( (i, s) => {
        e = i,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(i) {
        Object.assign(n, i),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = i => {
        r({
            status: "fulfilled",
            value: i
        }),
        e(i)
    }
    ,
    n.reject = i => {
        r({
            status: "rejected",
            reason: i
        }),
        t(i)
    }
    ,
    n
}
function Sk(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Px(e) {
    return (e ?? "online") === "online" ? Za.isOnline() : !0
}
var kx = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function ku(e) {
    return e instanceof kx
}
function Rx(e) {
    let t = !1, n = 0, r = !1, i;
    const s = wk()
      , o = y => {
        var w;
        r || (f(new kx(y)),
        (w = e.abort) == null || w.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => Tx.isFocused() && (e.networkMode === "always" || Za.isOnline()) && e.canRun()
      , c = () => Px(e.networkMode) && e.canRun()
      , d = y => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, y),
        i == null || i(),
        s.resolve(y))
    }
      , f = y => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, y),
        i == null || i(),
        s.reject(y))
    }
      , h = () => new Promise(y => {
        var w;
        i = g => {
            (r || u()) && y(g)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var y;
        i = void 0,
        r || (y = e.onContinue) == null || y.call(e)
    }
    )
      , x = () => {
        if (r)
            return;
        let y;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            y = w ?? e.fn()
        } catch (g) {
            y = Promise.reject(g)
        }
        Promise.resolve(y).then(d).catch(g => {
            var E;
            if (r)
                return;
            const p = e.retry ?? (Ol ? 0 : 3)
              , v = e.retryDelay ?? Sk
              , b = typeof v == "function" ? v(n, g) : v
              , C = p === !0 || typeof p == "number" && n < p || typeof p == "function" && p(n, g);
            if (t || !C) {
                f(g);
                return
            }
            n++,
            (E = e.onFail) == null || E.call(e, n, g),
            pk(b).then( () => u() ? void 0 : h()).then( () => {
                t ? f(g) : x()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: o,
        continue: () => (i == null || i(),
        s),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? x() : h().then(x),
        s)
    }
}
var bk = e => setTimeout(e, 0);
function Ck() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , i = bk;
    const s = a => {
        t ? e.push(a) : i( () => {
            n(a)
        }
        )
    }
      , o = () => {
        const a = e;
        e = [],
        a.length && i( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || o()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            s( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            i = a
        }
    }
}
var We = Ck(), kr, Vg, Ax = (Vg = class {
    constructor() {
        J(this, kr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        dk(this.gcTime) && H(this, kr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Ol ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        A(this, kr) && (clearTimeout(A(this, kr)),
        H(this, kr, void 0))
    }
}
,
kr = new WeakMap,
Vg), Ai, Rr, ht, Ar, Fe, uo, Nr, Dt, on, Fg, Ek = (Fg = class extends Ax {
    constructor(t) {
        super();
        J(this, Dt);
        J(this, Ai);
        J(this, Rr);
        J(this, ht);
        J(this, Ar);
        J(this, Fe);
        J(this, uo);
        J(this, Nr);
        H(this, Nr, !1),
        H(this, uo, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        H(this, Ar, t.client),
        H(this, ht, A(this, Ar).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        H(this, Ai, Pk(this.options)),
        this.state = t.state ?? A(this, Ai),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = A(this, Fe)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...A(this, uo),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && A(this, ht).remove(this)
    }
    setData(t, n) {
        const r = mk(this.state.data, t, this.options);
        return Oe(this, Dt, on).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Oe(this, Dt, on).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, i;
        const n = (r = A(this, Fe)) == null ? void 0 : r.promise;
        return (i = A(this, Fe)) == null || i.cancel(t),
        n ? n.then(jt).catch(jt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(A(this, Ai))
    }
    isActive() {
        return this.observers.some(t => hk(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ff || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Yc(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !fk(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = A(this, Fe)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = A(this, Fe)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        A(this, ht).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (A(this, Fe) && (A(this, Nr) ? A(this, Fe).cancel({
            revert: !0
        }) : A(this, Fe).cancelRetry()),
        this.scheduleGc()),
        A(this, ht).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Oe(this, Dt, on).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (A(this, Fe))
                return A(this, Fe).continueRetry(),
                A(this, Fe).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const f = this.observers.find(h => h.options.queryFn);
            f && this.setOptions(f.options)
        }
        const r = new AbortController
          , i = f => {
            Object.defineProperty(f, "signal", {
                enumerable: !0,
                get: () => (H(this, Nr, !0),
                r.signal)
            })
        }
          , s = () => {
            const f = Ex(this.options, n)
              , x = ( () => {
                const y = {
                    client: A(this, Ar),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return i(y),
                y
            }
            )();
            return H(this, Nr, !1),
            this.options.persister ? this.options.persister(f, x, this) : f(x)
        }
          , a = ( () => {
            const f = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: A(this, Ar),
                state: this.state,
                fetchFn: s
            };
            return i(f),
            f
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        H(this, Rr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && Oe(this, Dt, on).call(this, {
            type: "fetch",
            meta: (d = a.fetchOptions) == null ? void 0 : d.meta
        });
        const l = f => {
            var h, x, y, w;
            ku(f) && f.silent || Oe(this, Dt, on).call(this, {
                type: "error",
                error: f
            }),
            ku(f) || ((x = (h = A(this, ht).config).onError) == null || x.call(h, f, this),
            (w = (y = A(this, ht).config).onSettled) == null || w.call(y, this.state.data, f, this)),
            this.scheduleGc()
        }
        ;
        return H(this, Fe, Rx({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: f => {
                var h, x, y, w;
                if (f === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(f)
                } catch (g) {
                    l(g);
                    return
                }
                (x = (h = A(this, ht).config).onSuccess) == null || x.call(h, f, this),
                (w = (y = A(this, ht).config).onSettled) == null || w.call(y, f, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (f, h) => {
                Oe(this, Dt, on).call(this, {
                    type: "failed",
                    failureCount: f,
                    error: h
                })
            }
            ,
            onPause: () => {
                Oe(this, Dt, on).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Oe(this, Dt, on).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        A(this, Fe).start()
    }
}
,
Ai = new WeakMap,
Rr = new WeakMap,
ht = new WeakMap,
Ar = new WeakMap,
Fe = new WeakMap,
uo = new WeakMap,
Nr = new WeakMap,
Dt = new WeakSet,
on = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...Tk(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return H(this, Rr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const i = t.error;
            return ku(i) && i.revert && A(this, Rr) ? {
                ...A(this, Rr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: i,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: i,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    We.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        A(this, ht).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Fg);
function Tk(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Px(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Pk(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Qt, _g, kk = (_g = class extends Ll {
    constructor(t={}) {
        super();
        J(this, Qt);
        this.config = t,
        H(this, Qt, new Map)
    }
    build(t, n, r) {
        const i = n.queryKey
          , s = n.queryHash ?? Vf(i, n);
        let o = this.get(s);
        return o || (o = new Ek({
            client: t,
            queryKey: i,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(i)
        }),
        this.add(o)),
        o
    }
    add(t) {
        A(this, Qt).has(t.queryHash) || (A(this, Qt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = A(this, Qt).get(t.queryHash);
        n && (t.destroy(),
        n === t && A(this, Qt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        We.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return A(this, Qt).get(t)
    }
    getAll() {
        return [...A(this, Qt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => tm(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => tm(t, r)) : n
    }
    notify(t) {
        We.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        We.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        We.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Qt = new WeakMap,
_g), Yt, $e, Mr, Xt, Nn, zg, Rk = (zg = class extends Ax {
    constructor(t) {
        super();
        J(this, Xt);
        J(this, Yt);
        J(this, $e);
        J(this, Mr);
        this.mutationId = t.mutationId,
        H(this, $e, t.mutationCache),
        H(this, Yt, []),
        this.state = t.state || Ak(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        A(this, Yt).includes(t) || (A(this, Yt).push(t),
        this.clearGcTimeout(),
        A(this, $e).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        H(this, Yt, A(this, Yt).filter(n => n !== t)),
        this.scheduleGc(),
        A(this, $e).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        A(this, Yt).length || (this.state.status === "pending" ? this.scheduleGc() : A(this, $e).remove(this))
    }
    continue() {
        var t;
        return ((t = A(this, Mr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, o, a, l, u, c, d, f, h, x, y, w, g, p, v, b, C, E, T, P;
        const n = () => {
            Oe(this, Xt, Nn).call(this, {
                type: "continue"
            })
        }
        ;
        H(this, Mr, Rx({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (N, M) => {
                Oe(this, Xt, Nn).call(this, {
                    type: "failed",
                    failureCount: N,
                    error: M
                })
            }
            ,
            onPause: () => {
                Oe(this, Xt, Nn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => A(this, $e).canRun(this)
        }));
        const r = this.state.status === "pending"
          , i = !A(this, Mr).canStart();
        try {
            if (r)
                n();
            else {
                Oe(this, Xt, Nn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: i
                }),
                await ((o = (s = A(this, $e).config).onMutate) == null ? void 0 : o.call(s, t, this));
                const M = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                M !== this.state.context && Oe(this, Xt, Nn).call(this, {
                    type: "pending",
                    context: M,
                    variables: t,
                    isPaused: i
                })
            }
            const N = await A(this, Mr).start();
            return await ((c = (u = A(this, $e).config).onSuccess) == null ? void 0 : c.call(u, N, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, N, t, this.state.context)),
            await ((x = (h = A(this, $e).config).onSettled) == null ? void 0 : x.call(h, N, null, this.state.variables, this.state.context, this)),
            await ((w = (y = this.options).onSettled) == null ? void 0 : w.call(y, N, null, t, this.state.context)),
            Oe(this, Xt, Nn).call(this, {
                type: "success",
                data: N
            }),
            N
        } catch (N) {
            try {
                throw await ((p = (g = A(this, $e).config).onError) == null ? void 0 : p.call(g, N, t, this.state.context, this)),
                await ((b = (v = this.options).onError) == null ? void 0 : b.call(v, N, t, this.state.context)),
                await ((E = (C = A(this, $e).config).onSettled) == null ? void 0 : E.call(C, void 0, N, this.state.variables, this.state.context, this)),
                await ((P = (T = this.options).onSettled) == null ? void 0 : P.call(T, void 0, N, t, this.state.context)),
                N
            } finally {
                Oe(this, Xt, Nn).call(this, {
                    type: "error",
                    error: N
                })
            }
        } finally {
            A(this, $e).runNext(this)
        }
    }
}
,
Yt = new WeakMap,
$e = new WeakMap,
Mr = new WeakMap,
Xt = new WeakSet,
Nn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    We.batch( () => {
        A(this, Yt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        A(this, $e).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
zg);
function Ak() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var un, Lt, co, Bg, Nk = (Bg = class extends Ll {
    constructor(t={}) {
        super();
        J(this, un);
        J(this, Lt);
        J(this, co);
        this.config = t,
        H(this, un, new Set),
        H(this, Lt, new Map),
        H(this, co, 0)
    }
    build(t, n, r) {
        const i = new Rk({
            mutationCache: this,
            mutationId: ++Ro(this, co)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(i),
        i
    }
    add(t) {
        A(this, un).add(t);
        const n = Xo(t);
        if (typeof n == "string") {
            const r = A(this, Lt).get(n);
            r ? r.push(t) : A(this, Lt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (A(this, un).delete(t)) {
            const n = Xo(t);
            if (typeof n == "string") {
                const r = A(this, Lt).get(n);
                if (r)
                    if (r.length > 1) {
                        const i = r.indexOf(t);
                        i !== -1 && r.splice(i, 1)
                    } else
                        r[0] === t && A(this, Lt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = Xo(t);
        if (typeof n == "string") {
            const r = A(this, Lt).get(n)
              , i = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !i || i === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = Xo(t);
        if (typeof n == "string") {
            const i = (r = A(this, Lt).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (i == null ? void 0 : i.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        We.batch( () => {
            A(this, un).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            A(this, un).clear(),
            A(this, Lt).clear()
        }
        )
    }
    getAll() {
        return Array.from(A(this, un))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => nm(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => nm(t, n))
    }
    notify(t) {
        We.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return We.batch( () => Promise.all(t.map(n => n.continue().catch(jt))))
    }
}
,
un = new WeakMap,
Lt = new WeakMap,
co = new WeakMap,
Bg);
function Xo(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function sm(e) {
    return {
        onFetch: (t, n) => {
            var c, d, f, h, x;
            const r = t.options
              , i = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction
              , s = ((h = t.state.data) == null ? void 0 : h.pages) || []
              , o = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let y = !1;
                const w = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? y = !0 : t.signal.addEventListener("abort", () => {
                            y = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , g = Ex(t.options, t.fetchOptions)
                  , p = async (v, b, C) => {
                    if (y)
                        return Promise.reject();
                    if (b == null && v.pages.length)
                        return Promise.resolve(v);
                    const T = ( () => {
                        const _ = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: b,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w(_),
                        _
                    }
                    )()
                      , P = await g(T)
                      , {maxPages: N} = t.options
                      , M = C ? yk : gk;
                    return {
                        pages: M(v.pages, P, N),
                        pageParams: M(v.pageParams, b, N)
                    }
                }
                ;
                if (i && s.length) {
                    const v = i === "backward"
                      , b = v ? Mk : om
                      , C = {
                        pages: s,
                        pageParams: o
                    }
                      , E = b(r, C);
                    a = await p(C, E, v)
                } else {
                    const v = e ?? s.length;
                    do {
                        const b = l === 0 ? o[0] ?? r.initialPageParam : om(r, a);
                        if (l > 0 && b == null)
                            break;
                        a = await p(a, b),
                        l++
                    } while (l < v)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var y, w;
                return (w = (y = t.options).persister) == null ? void 0 : w.call(y, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function om(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function Mk(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var ge, _n, zn, Ni, Mi, Bn, ji, Di, $g, jk = ($g = class {
    constructor(e={}) {
        J(this, ge);
        J(this, _n);
        J(this, zn);
        J(this, Ni);
        J(this, Mi);
        J(this, Bn);
        J(this, ji);
        J(this, Di);
        H(this, ge, e.queryCache || new kk),
        H(this, _n, e.mutationCache || new Nk),
        H(this, zn, e.defaultOptions || {}),
        H(this, Ni, new Map),
        H(this, Mi, new Map),
        H(this, Bn, 0)
    }
    mount() {
        Ro(this, Bn)._++,
        A(this, Bn) === 1 && (H(this, ji, Tx.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            A(this, ge).onFocus())
        }
        )),
        H(this, Di, Za.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            A(this, ge).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Ro(this, Bn)._--,
        A(this, Bn) === 0 && ((e = A(this, ji)) == null || e.call(this),
        H(this, ji, void 0),
        (t = A(this, Di)) == null || t.call(this),
        H(this, Di, void 0))
    }
    isFetching(e) {
        return A(this, ge).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return A(this, _n).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = A(this, ge).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = A(this, ge).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Yc(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return A(this, ge).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , i = A(this, ge).get(r.queryHash)
          , s = i == null ? void 0 : i.state.data
          , o = ck(t, s);
        if (o !== void 0)
            return A(this, ge).build(this, r).setData(o, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return We.batch( () => A(this, ge).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = A(this, ge).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = A(this, ge);
        We.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = A(this, ge);
        return We.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = We.batch( () => A(this, ge).findAll(e).map(i => i.cancel(n)));
        return Promise.all(r).then(jt).catch(jt)
    }
    invalidateQueries(e, t={}) {
        return We.batch( () => (A(this, ge).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = We.batch( () => A(this, ge).findAll(e).filter(i => !i.isDisabled() && !i.isStatic()).map(i => {
            let s = i.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(jt)),
            i.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(jt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = A(this, ge).build(this, t);
        return n.isStaleByTime(Yc(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(jt).catch(jt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = sm(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(jt).catch(jt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = sm(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Za.isOnline() ? A(this, _n).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return A(this, ge)
    }
    getMutationCache() {
        return A(this, _n)
    }
    getDefaultOptions() {
        return A(this, zn)
    }
    setDefaultOptions(e) {
        H(this, zn, e)
    }
    setQueryDefaults(e, t) {
        A(this, Ni).set(eo(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...A(this, Ni).values()]
          , n = {};
        return t.forEach(r => {
            to(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        A(this, Mi).set(eo(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...A(this, Mi).values()]
          , n = {};
        return t.forEach(r => {
            to(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...A(this, zn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Vf(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Ff && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...A(this, zn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        A(this, ge).clear(),
        A(this, _n).clear()
    }
}
,
ge = new WeakMap,
_n = new WeakMap,
zn = new WeakMap,
Ni = new WeakMap,
Mi = new WeakMap,
Bn = new WeakMap,
ji = new WeakMap,
Di = new WeakMap,
$g), Dk = S.createContext(void 0), Lk = ({client: e, children: t}) => (S.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
m.jsx(Dk.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function no() {
    return no = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    no.apply(this, arguments)
}
var Wn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Wn || (Wn = {}));
const am = "popstate";
function Ok(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: s, search: o, hash: a} = r.location;
        return qc("", {
            pathname: s,
            search: o,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : Ja(i)
    }
    return Vk(t, n, null, e)
}
function Ce(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Nx(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Ik() {
    return Math.random().toString(36).substr(2, 8)
}
function lm(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function qc(e, t, n, r) {
    return n === void 0 && (n = null),
    no({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? qi(t) : t, {
        state: n,
        key: t && t.key || r || Ik()
    })
}
function Ja(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function qi(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Vk(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: s=!1} = r
      , o = i.history
      , a = Wn.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    o.replaceState(no({}, o.state, {
        idx: u
    }), ""));
    function c() {
        return (o.state || {
            idx: null
        }).idx
    }
    function d() {
        a = Wn.Pop;
        let w = c()
          , g = w == null ? null : w - u;
        u = w,
        l && l({
            action: a,
            location: y.location,
            delta: g
        })
    }
    function f(w, g) {
        a = Wn.Push;
        let p = qc(y.location, w, g);
        u = c() + 1;
        let v = lm(p, u)
          , b = y.createHref(p);
        try {
            o.pushState(v, "", b)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            i.location.assign(b)
        }
        s && l && l({
            action: a,
            location: y.location,
            delta: 1
        })
    }
    function h(w, g) {
        a = Wn.Replace;
        let p = qc(y.location, w, g);
        u = c();
        let v = lm(p, u)
          , b = y.createHref(p);
        o.replaceState(v, "", b),
        s && l && l({
            action: a,
            location: y.location,
            delta: 0
        })
    }
    function x(w) {
        let g = i.location.origin !== "null" ? i.location.origin : i.location.href
          , p = typeof w == "string" ? w : Ja(w);
        return p = p.replace(/ $/, "%20"),
        Ce(g, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,g)
    }
    let y = {
        get action() {
            return a
        },
        get location() {
            return e(i, o)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(am, d),
            l = w,
            () => {
                i.removeEventListener(am, d),
                l = null
            }
        },
        createHref(w) {
            return t(i, w)
        },
        createURL: x,
        encodeLocation(w) {
            let g = x(w);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: f,
        replace: h,
        go(w) {
            return o.go(w)
        }
    };
    return y
}
var um;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(um || (um = {}));
function Fk(e, t, n) {
    return n === void 0 && (n = "/"),
    _k(e, t, n, !1)
}
function _k(e, t, n, r) {
    let i = typeof t == "string" ? qi(t) : t
      , s = _f(i.pathname || "/", n);
    if (s == null)
        return null;
    let o = Mx(e);
    zk(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let u = qk(s);
        a = Yk(o[l], u, r)
    }
    return a
}
function Mx(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (s, o, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: o,
            route: s
        };
        l.relativePath.startsWith("/") && (Ce(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = er([r, l.relativePath])
          , c = n.concat(l);
        s.children && s.children.length > 0 && (Ce(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Mx(s.children, t, c, u)),
        !(s.path == null && !s.index) && t.push({
            path: u,
            score: Gk(u, s.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (s, o) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
            i(s, o);
        else
            for (let l of jx(s.path))
                i(s, o, l)
    }
    ),
    t
}
function jx(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [s, ""] : [s];
    let o = jx(r.join("/"))
      , a = [];
    return a.push(...o.map(l => l === "" ? s : [s, l].join("/"))),
    i && a.push(...o),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function zk(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Qk(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Bk = /^:[\w-]+$/
  , $k = 3
  , Uk = 2
  , Wk = 1
  , Hk = 10
  , Kk = -2
  , cm = e => e === "*";
function Gk(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(cm) && (r += Kk),
    t && (r += Uk),
    n.filter(i => !cm(i)).reduce( (i, s) => i + (Bk.test(s) ? $k : s === "" ? Wk : Hk), r)
}
function Qk(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Yk(e, t, n) {
    let {routesMeta: r} = e
      , i = {}
      , s = "/"
      , o = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , c = s === "/" ? t : t.slice(s.length) || "/"
          , d = dm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = dm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !d)
            return null;
        Object.assign(i, d.params),
        o.push({
            params: i,
            pathname: er([s, d.pathname]),
            pathnameBase: t2(er([s, d.pathnameBase])),
            route: f
        }),
        d.pathnameBase !== "/" && (s = er([s, d.pathnameBase]))
    }
    return o
}
function dm(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Xk(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let s = i[0]
      , o = s.replace(/(.)\/+$/, "$1")
      , a = i.slice(1);
    return {
        params: r.reduce( (u, c, d) => {
            let {paramName: f, isOptional: h} = c;
            if (f === "*") {
                let y = a[d] || "";
                o = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const x = a[d];
            return h && !x ? u[f] = void 0 : u[f] = (x || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: s,
        pathnameBase: o,
        pattern: e
    }
}
function Xk(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Nx(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function qk(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Nx(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function _f(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function Zk(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? qi(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Jk(n, t) : t,
        search: n2(r),
        hash: r2(i)
    }
}
function Jk(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Ru(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function e2(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Dx(e, t) {
    let n = e2(e);
    return t ? n.map( (r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Lx(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = qi(e) : (i = no({}, e),
    Ce(!i.pathname || !i.pathname.includes("?"), Ru("?", "pathname", "search", i)),
    Ce(!i.pathname || !i.pathname.includes("#"), Ru("#", "pathname", "hash", i)),
    Ce(!i.search || !i.search.includes("#"), Ru("#", "search", "hash", i)));
    let s = e === "" || i.pathname === "", o = s ? "/" : i.pathname, a;
    if (o == null)
        a = n;
    else {
        let d = t.length - 1;
        if (!r && o.startsWith("..")) {
            let f = o.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                d -= 1;
            i.pathname = f.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let l = Zk(i, a)
      , u = o && o !== "/" && o.endsWith("/")
      , c = (s || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"),
    l
}
const er = e => e.join("/").replace(/\/\/+/g, "/")
  , t2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , n2 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , r2 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function i2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Ox = ["post", "put", "patch", "delete"];
new Set(Ox);
const s2 = ["get", ...Ox];
new Set(s2);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ro() {
    return ro = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ro.apply(this, arguments)
}
const zf = S.createContext(null)
  , o2 = S.createContext(null)
  , Ur = S.createContext(null)
  , Il = S.createContext(null)
  , Wr = S.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Ix = S.createContext(null);
function a2(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    wo() || Ce(!1);
    let {basename: r, navigator: i} = S.useContext(Ur)
      , {hash: s, pathname: o, search: a} = Fx(e, {
        relative: n
    })
      , l = o;
    return r !== "/" && (l = o === "/" ? r : er([r, o])),
    i.createHref({
        pathname: l,
        search: a,
        hash: s
    })
}
function wo() {
    return S.useContext(Il) != null
}
function Zi() {
    return wo() || Ce(!1),
    S.useContext(Il).location
}
function Vx(e) {
    S.useContext(Ur).static || S.useLayoutEffect(e)
}
function l2() {
    let {isDataRoute: e} = S.useContext(Wr);
    return e ? S2() : u2()
}
function u2() {
    wo() || Ce(!1);
    let e = S.useContext(zf)
      , {basename: t, future: n, navigator: r} = S.useContext(Ur)
      , {matches: i} = S.useContext(Wr)
      , {pathname: s} = Zi()
      , o = JSON.stringify(Dx(i, n.v7_relativeSplatPath))
      , a = S.useRef(!1);
    return Vx( () => {
        a.current = !0
    }
    ),
    S.useCallback(function(u, c) {
        if (c === void 0 && (c = {}),
        !a.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let d = Lx(u, JSON.parse(o), s, c.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : er([t, d.pathname])),
        (c.replace ? r.replace : r.push)(d, c.state, c)
    }, [t, r, o, s, e])
}
function Fx(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = S.useContext(Ur)
      , {matches: i} = S.useContext(Wr)
      , {pathname: s} = Zi()
      , o = JSON.stringify(Dx(i, r.v7_relativeSplatPath));
    return S.useMemo( () => Lx(e, JSON.parse(o), s, n === "path"), [e, o, s, n])
}
function c2(e, t) {
    return d2(e, t)
}
function d2(e, t, n, r) {
    wo() || Ce(!1);
    let {navigator: i} = S.useContext(Ur)
      , {matches: s} = S.useContext(Wr)
      , o = s[s.length - 1]
      , a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = Zi(), c;
    if (t) {
        var d;
        let w = typeof t == "string" ? qi(t) : t;
        l === "/" || (d = w.pathname) != null && d.startsWith(l) || Ce(!1),
        c = w
    } else
        c = u;
    let f = c.pathname || "/"
      , h = f;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let x = Fk(e, {
        pathname: h
    })
      , y = g2(x && x.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: er([l, i.encodeLocation ? i.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : er([l, i.encodeLocation ? i.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), s, n, r);
    return t && y ? S.createElement(Il.Provider, {
        value: {
            location: ro({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Wn.Pop
        }
    }, y) : y
}
function f2() {
    let e = w2()
      , t = i2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? S.createElement("pre", {
        style: i
    }, n) : null, null)
}
const h2 = S.createElement(f2, null);
class p2 extends S.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? S.createElement(Wr.Provider, {
            value: this.props.routeContext
        }, S.createElement(Ix.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function m2(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = S.useContext(zf);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Wr.Provider, {
        value: t
    }, r)
}
function g2(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let c = o.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || Ce(!1),
        o = o.slice(0, Math.min(o.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
            let d = o[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
            d.route.id) {
                let {loaderData: f, errors: h} = n
                  , x = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || x) {
                    l = !0,
                    u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (c, d, f) => {
        let h, x = !1, y = null, w = null;
        n && (h = a && d.route.id ? a[d.route.id] : void 0,
        y = d.route.errorElement || h2,
        l && (u < 0 && f === 0 ? (x = !0,
        w = null) : u === f && (x = !0,
        w = d.route.hydrateFallbackElement || null)));
        let g = t.concat(o.slice(0, f + 1))
          , p = () => {
            let v;
            return h ? v = y : x ? v = w : d.route.Component ? v = S.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = c,
            S.createElement(m2, {
                match: d,
                routeContext: {
                    outlet: c,
                    matches: g,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? S.createElement(p2, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: h,
            children: p(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var _x = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(_x || {})
  , el = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(el || {});
function y2(e) {
    let t = S.useContext(zf);
    return t || Ce(!1),
    t
}
function v2(e) {
    let t = S.useContext(o2);
    return t || Ce(!1),
    t
}
function x2(e) {
    let t = S.useContext(Wr);
    return t || Ce(!1),
    t
}
function zx(e) {
    let t = x2()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Ce(!1),
    n.route.id
}
function w2() {
    var e;
    let t = S.useContext(Ix)
      , n = v2(el.UseRouteError)
      , r = zx(el.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function S2() {
    let {router: e} = y2(_x.UseNavigateStable)
      , t = zx(el.UseNavigateStable)
      , n = S.useRef(!1);
    return Vx( () => {
        n.current = !0
    }
    ),
    S.useCallback(function(i, s) {
        s === void 0 && (s = {}),
        n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, ro({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
function b2(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Zr(e) {
    Ce(!1)
}
function C2(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=Wn.Pop, navigator: s, static: o=!1, future: a} = e;
    wo() && Ce(!1);
    let l = t.replace(/^\/*/, "/")
      , u = S.useMemo( () => ({
        basename: l,
        navigator: s,
        static: o,
        future: ro({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, s, o]);
    typeof r == "string" && (r = qi(r));
    let {pathname: c="/", search: d="", hash: f="", state: h=null, key: x="default"} = r
      , y = S.useMemo( () => {
        let w = _f(c, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: d,
                hash: f,
                state: h,
                key: x
            },
            navigationType: i
        }
    }
    , [l, c, d, f, h, x, i]);
    return y == null ? null : S.createElement(Ur.Provider, {
        value: u
    }, S.createElement(Il.Provider, {
        children: n,
        value: y
    }))
}
function E2(e) {
    let {children: t, location: n} = e;
    return c2(Zc(t), n)
}
new Promise( () => {}
);
function Zc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return S.Children.forEach(e, (r, i) => {
        if (!S.isValidElement(r))
            return;
        let s = [...t, i];
        if (r.type === S.Fragment) {
            n.push.apply(n, Zc(r.props.children, s));
            return
        }
        r.type !== Zr && Ce(!1),
        !r.props.index || !r.props.children || Ce(!1);
        let o = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = Zc(r.props.children, s)),
        n.push(o)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Jc() {
    return Jc = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Jc.apply(this, arguments)
}
function T2(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, s;
    for (s = 0; s < r.length; s++)
        i = r[s],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function P2(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function k2(e, t) {
    return e.button === 0 && (!t || t === "_self") && !P2(e)
}
const R2 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , A2 = "6";
try {
    window.__reactRouterVersion = A2
} catch {}
const N2 = "startTransition"
  , fm = ey[N2];
function M2(e) {
    let {basename: t, children: n, future: r, window: i} = e
      , s = S.useRef();
    s.current == null && (s.current = Ok({
        window: i,
        v5Compat: !0
    }));
    let o = s.current
      , [a,l] = S.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: u} = r || {}
      , c = S.useCallback(d => {
        u && fm ? fm( () => l(d)) : l(d)
    }
    , [l, u]);
    return S.useLayoutEffect( () => o.listen(c), [o, c]),
    S.useEffect( () => b2(r), [r]),
    S.createElement(C2, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r
    })
}
const j2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , D2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , st = S.forwardRef(function(t, n) {
    let {onClick: r, relative: i, reloadDocument: s, replace: o, state: a, target: l, to: u, preventScrollReset: c, viewTransition: d} = t, f = T2(t, R2), {basename: h} = S.useContext(Ur), x, y = !1;
    if (typeof u == "string" && D2.test(u) && (x = u,
    j2))
        try {
            let v = new URL(window.location.href)
              , b = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u)
              , C = _f(b.pathname, h);
            b.origin === v.origin && C != null ? u = C + b.search + b.hash : y = !0
        } catch {}
    let w = a2(u, {
        relative: i
    })
      , g = L2(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: d
    });
    function p(v) {
        r && r(v),
        v.defaultPrevented || g(v)
    }
    return S.createElement("a", Jc({}, f, {
        href: x || w,
        onClick: y || s ? r : p,
        ref: n,
        target: l
    }))
});
var hm;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(hm || (hm = {}));
var pm;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(pm || (pm = {}));
function L2(e, t) {
    let {target: n, replace: r, state: i, preventScrollReset: s, relative: o, viewTransition: a} = t === void 0 ? {} : t
      , l = l2()
      , u = Zi()
      , c = Fx(e, {
        relative: o
    });
    return S.useCallback(d => {
        if (k2(d, n)) {
            d.preventDefault();
            let f = r !== void 0 ? r : Ja(u) === Ja(c);
            l(e, {
                replace: f,
                state: i,
                preventScrollReset: s,
                relative: o,
                viewTransition: a
            })
        }
    }
    , [u, l, c, r, i, n, e, s, o, a])
}
const O2 = Ef("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-gold-light shadow-lg",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            hero: "bg-gradient-gold text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300",
            "outline-gold": "border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-md px-8 text-base",
            xl: "h-14 rounded-lg px-10 text-lg",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , xt = S.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...i}, s) => {
    const o = r ? yC : "button";
    return m.jsx(o, {
        className: Wt(O2({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...i
    })
}
);
xt.displayName = "Button";
const Bf = S.createContext({});
function $f(e) {
    const t = S.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const I2 = typeof window < "u"
  , Bx = I2 ? S.useLayoutEffect : S.useEffect
  , Vl = S.createContext(null);
function Uf(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function tl(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const nn = (e, t, n) => n > t ? t : n < e ? e : n;
let Fl = () => {}
  , Ui = () => {}
;
const xn = {}
  , $x = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Ux(e) {
    return typeof e == "object" && e !== null
}
const Wx = e => /^0[^.\s]+$/u.test(e);
function Hx(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const wt = e => e
  , V2 = (e, t) => n => t(e(n))
  , So = (...e) => e.reduce(V2)
  , io = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
;
class Wf {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Uf(this.subscriptions, t),
        () => tl(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const St = e => e * 1e3
  , yt = e => e / 1e3;
function Kx(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Gx = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , F2 = 1e-7
  , _2 = 12;
function z2(e, t, n, r, i) {
    let s, o, a = 0;
    do
        o = t + (n - t) / 2,
        s = Gx(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > F2 && ++a < _2);
    return o
}
function bo(e, t, n, r) {
    if (e === t && n === r)
        return wt;
    const i = s => z2(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Gx(i(s), t, r)
}
const Qx = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Yx = e => t => 1 - e(1 - t)
  , Xx = bo(.33, 1.53, .69, .99)
  , Hf = Yx(Xx)
  , qx = Qx(Hf)
  , Zx = e => (e *= 2) < 1 ? .5 * Hf(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Kf = e => 1 - Math.sin(Math.acos(e))
  , Jx = Yx(Kf)
  , e1 = Qx(Kf)
  , B2 = bo(.42, 0, 1, 1)
  , $2 = bo(0, 0, .58, 1)
  , t1 = bo(.42, 0, .58, 1)
  , U2 = e => Array.isArray(e) && typeof e[0] != "number"
  , n1 = e => Array.isArray(e) && typeof e[0] == "number"
  , mm = {
    linear: wt,
    easeIn: B2,
    easeInOut: t1,
    easeOut: $2,
    circIn: Kf,
    circInOut: e1,
    circOut: Jx,
    backIn: Hf,
    backInOut: qx,
    backOut: Xx,
    anticipate: Zx
}
  , W2 = e => typeof e == "string"
  , gm = e => {
    if (n1(e)) {
        Ui(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
        const [t,n,r,i] = e;
        return bo(t, n, r, i)
    } else if (W2(e))
        return Ui(mm[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"),
        mm[e];
    return e
}
  , qo = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , ym = {
    value: null,
    addProjectionMetrics: null
};
function H2(e, t) {
    let n = new Set
      , r = new Set
      , i = !1
      , s = !1;
    const o = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = 0;
    function u(d) {
        o.has(d) && (c.schedule(d),
        e()),
        l++,
        d(a)
    }
    const c = {
        schedule: (d, f=!1, h=!1) => {
            const y = h && i ? n : r;
            return f && o.add(d),
            y.has(d) || y.add(d),
            d
        }
        ,
        cancel: d => {
            r.delete(d),
            o.delete(d)
        }
        ,
        process: d => {
            if (a = d,
            i) {
                s = !0;
                return
            }
            i = !0,
            [n,r] = [r, n],
            n.forEach(u),
            t && ym.value && ym.value.frameloop[t].push(l),
            l = 0,
            n.clear(),
            i = !1,
            s && (s = !1,
            c.process(d))
        }
    };
    return c
}
const K2 = 40;
function r1(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = () => n = !0
      , o = qo.reduce( (v, b) => (v[b] = H2(s, t ? b : void 0),
    v), {})
      , {setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: h, postRender: x} = o
      , y = () => {
        const v = xn.useManualTiming ? i.timestamp : performance.now();
        n = !1,
        xn.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(v - i.timestamp, K2), 1)),
        i.timestamp = v,
        i.isProcessing = !0,
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        x.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(y))
    }
      , w = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(y)
    }
    ;
    return {
        schedule: qo.reduce( (v, b) => {
            const C = o[b];
            return v[b] = (E, T=!1, P=!1) => (n || w(),
            C.schedule(E, T, P)),
            v
        }
        , {}),
        cancel: v => {
            for (let b = 0; b < qo.length; b++)
                o[qo[b]].cancel(v)
        }
        ,
        state: i,
        steps: o
    }
}
const {schedule: ie, cancel: ur, state: Me, steps: Au} = r1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : wt, !0);
let ga;
function G2() {
    ga = void 0
}
const He = {
    now: () => (ga === void 0 && He.set(Me.isProcessing || xn.useManualTiming ? Me.timestamp : performance.now()),
    ga),
    set: e => {
        ga = e,
        queueMicrotask(G2)
    }
}
  , i1 = e => t => typeof t == "string" && t.startsWith(e)
  , s1 = i1("--")
  , Q2 = i1("var(--")
  , Gf = e => Q2(e) ? Y2.test(e.split("/*")[0].trim()) : !1
  , Y2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function vm(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const Ji = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , so = {
    ...Ji,
    transform: e => nn(0, 1, e)
}
  , Zo = {
    ...Ji,
    default: 1
}
  , Ms = e => Math.round(e * 1e5) / 1e5
  , Qf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function X2(e) {
    return e == null
}
const q2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Yf = (e, t) => n => !!(typeof n == "string" && q2.test(n) && n.startsWith(e) || t && !X2(n) && Object.prototype.hasOwnProperty.call(n, t))
  , o1 = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,s,o,a] = r.match(Qf);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , Z2 = e => nn(0, 255, e)
  , Nu = {
    ...Ji,
    transform: e => Math.round(Z2(e))
}
  , Er = {
    test: Yf("rgb", "red"),
    parse: o1("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Nu.transform(e) + ", " + Nu.transform(t) + ", " + Nu.transform(n) + ", " + Ms(so.transform(r)) + ")"
};
function J2(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const ed = {
    test: Yf("#"),
    parse: J2,
    transform: Er.transform
}
  , Co = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Mn = Co("deg")
  , en = Co("%")
  , F = Co("px")
  , eR = Co("vh")
  , tR = Co("vw")
  , xm = {
    ...en,
    parse: e => en.parse(e) / 100,
    transform: e => en.transform(e * 100)
}
  , fi = {
    test: Yf("hsl", "hue"),
    parse: o1("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + en.transform(Ms(t)) + ", " + en.transform(Ms(n)) + ", " + Ms(so.transform(r)) + ")"
}
  , Se = {
    test: e => Er.test(e) || ed.test(e) || fi.test(e),
    parse: e => Er.test(e) ? Er.parse(e) : fi.test(e) ? fi.parse(e) : ed.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Er.transform(e) : fi.transform(e),
    getAnimatableNone: e => {
        const t = Se.parse(e);
        return t.alpha = 0,
        Se.transform(t)
    }
}
  , nR = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function rR(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Qf)) == null ? void 0 : t.length) || 0) + (((n = e.match(nR)) == null ? void 0 : n.length) || 0) > 0
}
const a1 = "number"
  , l1 = "color"
  , iR = "var"
  , sR = "var("
  , wm = "${}"
  , oR = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function oo(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let s = 0;
    const a = t.replace(oR, l => (Se.test(l) ? (r.color.push(s),
    i.push(l1),
    n.push(Se.parse(l))) : l.startsWith(sR) ? (r.var.push(s),
    i.push(iR),
    n.push(l)) : (r.number.push(s),
    i.push(a1),
    n.push(parseFloat(l))),
    ++s,
    wm)).split(wm);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}
function u1(e) {
    return oo(e).values
}
function c1(e) {
    const {split: t, types: n} = oo(e)
      , r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o],
            i[o] !== void 0) {
                const a = n[o];
                a === a1 ? s += Ms(i[o]) : a === l1 ? s += Se.transform(i[o]) : s += i[o]
            }
        return s
    }
}
const aR = e => typeof e == "number" ? 0 : Se.test(e) ? Se.getAnimatableNone(e) : e;
function lR(e) {
    const t = u1(e);
    return c1(e)(t.map(aR))
}
const _t = {
    test: rR,
    parse: u1,
    createTransformer: c1,
    getAnimatableNone: lR
};
function Mu(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function uR({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!t)
        i = s = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        i = Mu(l, a, e + 1 / 3),
        s = Mu(l, a, e),
        o = Mu(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function nl(e, t) {
    return n => n > 0 ? t : e
}
const he = (e, t, n) => e + (t - e) * n
  , ju = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , cR = [ed, Er, fi]
  , dR = e => cR.find(t => t.test(e));
function Sm(e) {
    const t = dR(e);
    if (Fl(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
    !t)
        return !1;
    let n = t.parse(e);
    return t === fi && (n = uR(n)),
    n
}
const bm = (e, t) => {
    const n = Sm(e)
      , r = Sm(t);
    if (!n || !r)
        return nl(e, t);
    const i = {
        ...n
    };
    return s => (i.red = ju(n.red, r.red, s),
    i.green = ju(n.green, r.green, s),
    i.blue = ju(n.blue, r.blue, s),
    i.alpha = he(n.alpha, r.alpha, s),
    Er.transform(i))
}
  , td = new Set(["none", "hidden"]);
function fR(e, t) {
    return td.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function hR(e, t) {
    return n => he(e, t, n)
}
function Xf(e) {
    return typeof e == "number" ? hR : typeof e == "string" ? Gf(e) ? nl : Se.test(e) ? bm : gR : Array.isArray(e) ? d1 : typeof e == "object" ? Se.test(e) ? bm : pR : nl
}
function d1(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (s, o) => Xf(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
function pR(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Xf(e[i])(e[i], t[i]));
    return i => {
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
function mR(e, t) {
    const n = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let i = 0; i < t.values.length; i++) {
        const s = t.types[i]
          , o = e.indexes[s][r[s]]
          , a = e.values[o] ?? 0;
        n[i] = a,
        r[s]++
    }
    return n
}
const gR = (e, t) => {
    const n = _t.createTransformer(t)
      , r = oo(e)
      , i = oo(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? td.has(e) && !i.values.length || td.has(t) && !r.values.length ? fR(e, t) : So(d1(mR(r, i), i.values), n) : (Fl(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"),
    nl(e, t))
}
;
function f1(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? he(e, t, n) : Xf(e)(e, t)
}
const yR = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: (n=!0) => ie.update(t, n),
        stop: () => ur(t),
        now: () => Me.isProcessing ? Me.timestamp : He.now()
    }
}
  , h1 = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
        r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , rl = 2e4;
function qf(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < rl; )
        t += n,
        r = e.next(t);
    return t >= rl ? 1 / 0 : t
}
function vR(e, t=100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    })
      , i = Math.min(qf(r), rl);
    return {
        type: "keyframes",
        ease: s => r.next(i * s).value / t,
        duration: yt(i)
    }
}
const xR = 5;
function p1(e, t, n) {
    const r = Math.max(t - xR, 0);
    return Kx(n - e(r), t - r)
}
const de = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Du = .001;
function wR({duration: e=de.duration, bounce: t=de.bounce, velocity: n=de.velocity, mass: r=de.mass}) {
    let i, s;
    Fl(e <= St(de.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let o = 1 - t;
    o = nn(de.minDamping, de.maxDamping, o),
    e = nn(de.minDuration, de.maxDuration, yt(e)),
    o < 1 ? (i = u => {
        const c = u * o
          , d = c * e
          , f = c - n
          , h = nd(u, o)
          , x = Math.exp(-d);
        return Du - f / h * x
    }
    ,
    s = u => {
        const d = u * o * e
          , f = d * n + n
          , h = Math.pow(o, 2) * Math.pow(u, 2) * e
          , x = Math.exp(-d)
          , y = nd(Math.pow(u, 2), o);
        return (-i(u) + Du > 0 ? -1 : 1) * ((f - h) * x) / y
    }
    ) : (i = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -Du + c * d
    }
    ,
    s = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const a = 5 / e
      , l = bR(i, s, a);
    if (e = St(e),
    isNaN(l))
        return {
            stiffness: de.stiffness,
            damping: de.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const SR = 12;
function bR(e, t, n) {
    let r = n;
    for (let i = 1; i < SR; i++)
        r = r - e(r) / t(r);
    return r
}
function nd(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const CR = ["duration", "bounce"]
  , ER = ["stiffness", "damping", "mass"];
function Cm(e, t) {
    return t.some(n => e[n] !== void 0)
}
function TR(e) {
    let t = {
        velocity: de.velocity,
        stiffness: de.stiffness,
        damping: de.damping,
        mass: de.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Cm(e, ER) && Cm(e, CR))
        if (t.velocity = 0,
        e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , s = 2 * nn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: de.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = wR({
                ...e,
                velocity: 0
            });
            t = {
                ...t,
                ...n,
                mass: de.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function il(e=de.visualDuration, t=de.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const s = n.keyframes[0]
      , o = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: s
    }
      , {stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: h} = TR({
        ...n,
        velocity: -yt(n.velocity || 0)
    })
      , x = f || 0
      , y = u / (2 * Math.sqrt(l * c))
      , w = o - s
      , g = yt(Math.sqrt(l / c))
      , p = Math.abs(w) < 5;
    r || (r = p ? de.restSpeed.granular : de.restSpeed.default),
    i || (i = p ? de.restDelta.granular : de.restDelta.default);
    let v;
    if (y < 1) {
        const C = nd(g, y);
        v = E => {
            const T = Math.exp(-y * g * E);
            return o - T * ((x + y * g * w) / C * Math.sin(C * E) + w * Math.cos(C * E))
        }
    } else if (y === 1)
        v = C => o - Math.exp(-g * C) * (w + (x + g * w) * C);
    else {
        const C = g * Math.sqrt(y * y - 1);
        v = E => {
            const T = Math.exp(-y * g * E)
              , P = Math.min(C * E, 300);
            return o - T * ((x + y * g * w) * Math.sinh(P) + C * w * Math.cosh(P)) / C
        }
    }
    const b = {
        calculatedDuration: h && d || null,
        next: C => {
            const E = v(C);
            if (h)
                a.done = C >= d;
            else {
                let T = C === 0 ? x : 0;
                y < 1 && (T = C === 0 ? St(x) : p1(v, C, E));
                const P = Math.abs(T) <= r
                  , N = Math.abs(o - E) <= i;
                a.done = P && N
            }
            return a.value = a.done ? o : E,
            a
        }
        ,
        toString: () => {
            const C = Math.min(qf(b), rl)
              , E = h1(T => b.next(C * T).value, C, 30);
            return C + "ms " + E
        }
        ,
        toTransition: () => {}
    };
    return b
}
il.applyToOptions = e => {
    const t = vR(e, 100, il);
    return e.ease = t.ease,
    e.duration = St(t.duration),
    e.type = "keyframes",
    e
}
;
function rd({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , h = P => a !== void 0 && P < a || l !== void 0 && P > l
      , x = P => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
    let y = n * t;
    const w = d + y
      , g = o === void 0 ? w : o(w);
    g !== w && (y = g - d);
    const p = P => -y * Math.exp(-P / r)
      , v = P => g + p(P)
      , b = P => {
        const N = p(P)
          , M = v(P);
        f.done = Math.abs(N) <= u,
        f.value = f.done ? g : M
    }
    ;
    let C, E;
    const T = P => {
        h(f.value) && (C = P,
        E = il({
            keyframes: [f.value, x(f.value)],
            velocity: p1(v, P, f.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return T(0),
    {
        calculatedDuration: null,
        next: P => {
            let N = !1;
            return !E && C === void 0 && (N = !0,
            b(P),
            T(P)),
            C !== void 0 && P >= C ? E.next(P - C) : (!N && b(P),
            f)
        }
    }
}
function PR(e, t, n) {
    const r = []
      , i = n || xn.mix || f1
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let a = i(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || wt : t;
            a = So(l, a)
        }
        r.push(a)
    }
    return r
}
function kR(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (Ui(s === t.length, "Both input and output ranges must be the same length", "range-length"),
    s === 1)
        return () => t[0];
    if (s === 2 && t[0] === t[1])
        return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = PR(t, r, i)
      , l = a.length
      , u = c => {
        if (o && c < e[0])
            return t[0];
        let d = 0;
        if (l > 1)
            for (; d < e.length - 2 && !(c < e[d + 1]); d++)
                ;
        const f = io(e[d], e[d + 1], c);
        return a[d](f)
    }
    ;
    return n ? c => u(nn(e[0], e[s - 1], c)) : u
}
function RR(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = io(0, t, r);
        e.push(he(n, 1, i))
    }
}
function AR(e) {
    const t = [0];
    return RR(t, e.length - 1),
    t
}
function NR(e, t) {
    return e.map(n => n * t)
}
function MR(e, t) {
    return e.map( () => t || t1).splice(0, e.length - 1)
}
function js({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = U2(r) ? r.map(gm) : gm(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = NR(n && n.length === t.length ? n : AR(t), e)
      , a = kR(o, t, {
        ease: Array.isArray(i) ? i : MR(t, i)
    });
    return {
        calculatedDuration: e,
        next: l => (s.value = a(l),
        s.done = l >= e,
        s)
    }
}
const jR = e => e !== null;
function Zf(e, {repeat: t, repeatType: n="loop"}, r, i=1) {
    const s = e.filter(jR)
      , a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !a || r === void 0 ? s[a] : r
}
const DR = {
    decay: rd,
    inertia: rd,
    tween: js,
    keyframes: js,
    spring: il
};
function m1(e) {
    typeof e.type == "string" && (e.type = DR[e.type])
}
class Jf {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const LR = e => e / 100;
class eh extends Jf {
    constructor(t) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var r, i;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== He.now() && this.tick(He.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r))
        }
        ,
        this.options = t,
        this.initAnimation(),
        this.play(),
        t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: t} = this;
        m1(t);
        const {type: n=js, repeat: r=0, repeatDelay: i=0, repeatType: s, velocity: o=0} = t;
        let {keyframes: a} = t;
        const l = n || js;
        l !== js && typeof a[0] != "number" && (this.mixKeyframes = So(LR, f1(a[0], a[1])),
        a = [0, 100]);
        const u = l({
            ...t,
            keyframes: a
        });
        s === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -o
        })),
        u.calculatedDuration === null && (u.calculatedDuration = qf(u));
        const {calculatedDuration: c} = u;
        this.calculatedDuration = c,
        this.resolvedDuration = c + i,
        this.totalDuration = this.resolvedDuration * (r + 1) - i,
        this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n=!1) {
        const {generator: r, totalDuration: i, mixKeyframes: s, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: l} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: u=0, keyframes: c, repeat: d, repeatType: f, repeatDelay: h, type: x, onUpdate: y, finalKeyframe: w} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)),
        n ? this.currentTime = t : this.updateTime(t);
        const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1)
          , p = this.playbackSpeed >= 0 ? g < 0 : g > i;
        this.currentTime = Math.max(g, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let v = this.currentTime
          , b = r;
        if (d) {
            const P = Math.min(this.currentTime, i) / a;
            let N = Math.floor(P)
              , M = P % 1;
            !M && P >= 1 && (M = 1),
            M === 1 && N--,
            N = Math.min(N, d + 1),
            !!(N % 2) && (f === "reverse" ? (M = 1 - M,
            h && (M -= h / a)) : f === "mirror" && (b = o)),
            v = nn(0, 1, M) * a
        }
        const C = p ? {
            done: !1,
            value: c[0]
        } : b.next(v);
        s && (C.value = s(C.value));
        let {done: E} = C;
        !p && l !== null && (E = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
        return T && x !== rd && (C.value = Zf(c, this.options, w, this.speed)),
        y && y(C.value),
        T && this.finish(),
        C
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return yt(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + yt(t)
    }
    get time() {
        return yt(this.currentTime)
    }
    set time(t) {
        var n;
        t = St(t),
        this.currentTime = t,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
        (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(He.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = yt(this.currentTime))
    }
    play() {
        var i, s;
        if (this.isStopped)
            return;
        const {driver: t=yR, startTime: n} = this.options;
        this.driver || (this.driver = t(o => this.tick(o))),
        (s = (i = this.options).onPlay) == null || s.call(i);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(He.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        t.observe(this)
    }
}
function OR(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
const Tr = e => e * 180 / Math.PI
  , id = e => {
    const t = Tr(Math.atan2(e[1], e[0]));
    return sd(t)
}
  , IR = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: id,
    rotateZ: id,
    skewX: e => Tr(Math.atan(e[1])),
    skewY: e => Tr(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , sd = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , Em = id
  , Tm = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , Pm = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , VR = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Tm,
    scaleY: Pm,
    scale: e => (Tm(e) + Pm(e)) / 2,
    rotateX: e => sd(Tr(Math.atan2(e[6], e[5]))),
    rotateY: e => sd(Tr(Math.atan2(-e[2], e[0]))),
    rotateZ: Em,
    rotate: Em,
    skewX: e => Tr(Math.atan(e[4])),
    skewY: e => Tr(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function od(e) {
    return e.includes("scale") ? 1 : 0
}
function ad(e, t) {
    if (!e || e === "none")
        return od(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, i;
    if (n)
        r = VR,
        i = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = IR,
        i = a
    }
    if (!i)
        return od(t);
    const s = r[t]
      , o = i[1].split(",").map(_R);
    return typeof s == "function" ? s(o) : o[s]
}
const FR = (e, t) => {
    const {transform: n="none"} = getComputedStyle(e);
    return ad(n, t)
}
;
function _R(e) {
    return parseFloat(e.trim())
}
const es = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ts = new Set(es)
  , km = e => e === Ji || e === F
  , zR = new Set(["x", "y", "z"])
  , BR = es.filter(e => !zR.has(e));
function $R(e) {
    const t = [];
    return BR.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const Hn = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: (e, {transform: t}) => ad(t, "x"),
    y: (e, {transform: t}) => ad(t, "y")
};
Hn.translateX = Hn.x;
Hn.translateY = Hn.y;
const Lr = new Set;
let ld = !1
  , ud = !1
  , cd = !1;
function g1() {
    if (ud) {
        const e = Array.from(Lr).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = $R(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([s,o]) => {
                var a;
                (a = r.getValue(s)) == null || a.set(o)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    ud = !1,
    ld = !1,
    Lr.forEach(e => e.complete(cd)),
    Lr.clear()
}
function y1() {
    Lr.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (ud = !0)
    }
    )
}
function UR() {
    cd = !0,
    y1(),
    g1(),
    cd = !1
}
class th {
    constructor(t, n, r, i, s, o=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = s,
        this.isAsync = o
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Lr.add(this),
        ld || (ld = !0,
        ie.read(y1),
        ie.resolveKeyframes(g1))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        if (t[0] === null) {
            const s = i == null ? void 0 : i.get()
              , o = t[t.length - 1];
            if (s !== void 0)
                t[0] = s;
            else if (r && n) {
                const a = r.readValue(n, o);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = o),
            i && s === void 0 && i.set(t[0])
        }
        OR(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
        Lr.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Lr.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const WR = e => e.startsWith("--");
function HR(e, t, n) {
    WR(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const KR = {};
function v1(e, t) {
    const n = Hx(e);
    return () => KR[t] ?? n()
}
const GR = v1( () => window.ScrollTimeline !== void 0, "scrollTimeline")
  , x1 = v1( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , xs = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Rm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: xs([0, .65, .55, 1]),
    circOut: xs([.55, 0, 1, .45]),
    backIn: xs([.31, .01, .66, -.59]),
    backOut: xs([.33, 1.53, .69, .99])
};
function w1(e, t) {
    if (e)
        return typeof e == "function" ? x1() ? h1(e, t) : "ease-out" : n1(e) ? xs(e) : Array.isArray(e) ? e.map(n => w1(n, t) || Rm.easeOut) : Rm[e]
}
function QR(e, t, n, {delay: r=0, duration: i=300, repeat: s=0, repeatType: o="loop", ease: a="easeOut", times: l}={}, u=void 0) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const d = w1(a, i);
    Array.isArray(d) && (c.easing = d);
    const f = {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    };
    return u && (f.pseudoElement = u),
    e.animate(c, f)
}
function S1(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function YR({type: e, ...t}) {
    return S1(e) && x1() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
    t.ease ?? (t.ease = "easeOut"),
    t)
}
class b1 extends Jf {
    constructor(t) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !t)
            return;
        const {element: n, name: r, keyframes: i, pseudoElement: s, allowFlatten: o=!1, finalKeyframe: a, onComplete: l} = t;
        this.isPseudoElement = !!s,
        this.allowFlatten = o,
        this.options = t,
        Ui(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const u = YR(t);
        this.animation = QR(n, r, i, u, s),
        u.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !s) {
                const c = Zf(i, this.options, a, this.speed);
                this.updateMotionValue && this.updateMotionValue(c),
                HR(n, r, c),
                this.animation.cancel()
            }
            l == null || l(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: t} = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var n, r, i;
        const t = (n = this.options) == null ? void 0 : n.element;
        !this.isPseudoElement && (t != null && t.isConnected) && ((i = (r = this.animation).commitStyles) == null || i.call(r))
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return yt(Number(t))
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + yt(t)
    }
    get time() {
        return yt(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = St(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null),
        this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t
    }
    attachTimeline({timeline: t, rangeStart: n, rangeEnd: r, observe: i}) {
        var s;
        return this.allowFlatten && ((s = this.animation.effect) == null || s.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        t && GR() ? (this.animation.timeline = t,
        n && (this.animation.rangeStart = n),
        r && (this.animation.rangeEnd = r),
        wt) : i(this)
    }
}
const C1 = {
    anticipate: Zx,
    backInOut: qx,
    circInOut: e1
};
function XR(e) {
    return e in C1
}
function qR(e) {
    typeof e.ease == "string" && XR(e.ease) && (e.ease = C1[e.ease])
}
const Lu = 10;
class ZR extends b1 {
    constructor(t) {
        qR(t),
        m1(t),
        super(t),
        t.startTime !== void 0 && (this.startTime = t.startTime),
        this.options = t
    }
    updateMotionValue(t) {
        const {motionValue: n, onUpdate: r, onComplete: i, element: s, ...o} = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new eh({
            ...o,
            autoplay: !1
        })
          , l = Math.max(Lu, He.now() - this.startTime)
          , u = nn(0, Lu, l - Lu);
        n.setWithVelocity(a.sample(Math.max(0, l - u)).value, a.sample(l).value, u),
        a.stop()
    }
}
const Am = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (_t.test(e) || e === "0") && !e.startsWith("url("));
function JR(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function eA(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const s = e[e.length - 1]
      , o = Am(i, t)
      , a = Am(s, t);
    return Fl(o === a, `You are trying to animate ${t} from "${i}" to "${s}". "${o ? s : i}" is not an animatable value.`, "value-not-animatable"),
    !o || !a ? !1 : JR(e) || (n === "spring" || S1(n)) && r
}
function dd(e) {
    e.duration = 0,
    e.type = "keyframes"
}
const tA = new Set(["opacity", "clipPath", "filter", "transform"])
  , nA = Hx( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function rA(e) {
    var c;
    const {motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: s, type: o} = e;
    if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: l, transformTemplate: u} = t.owner.getProps();
    return nA() && n && tA.has(n) && (n !== "transform" || !u) && !l && !r && i !== "mirror" && s !== 0 && o !== "inertia"
}
const iA = 40;
class sA extends Jf {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: o="loop", keyframes: a, name: l, motionValue: u, element: c, ...d}) {
        var x;
        super(),
        this.stop = () => {
            var y, w;
            this._animation && (this._animation.stop(),
            (y = this.stopTimeline) == null || y.call(this)),
            (w = this.keyframeResolver) == null || w.cancel()
        }
        ,
        this.createdAt = He.now();
        const f = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            name: l,
            motionValue: u,
            element: c,
            ...d
        }
          , h = (c == null ? void 0 : c.KeyframeResolver) || th;
        this.keyframeResolver = new h(a, (y, w, g) => this.onKeyframesResolved(y, w, f, !g),l,u,c),
        (x = this.keyframeResolver) == null || x.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, i) {
        var w, g;
        this.keyframeResolver = void 0;
        const {name: s, type: o, velocity: a, delay: l, isHandoff: u, onUpdate: c} = r;
        this.resolvedAt = He.now(),
        eA(t, s, o, a) || ((xn.instantAnimations || !l) && (c == null || c(Zf(t, r, n))),
        t[0] = t[t.length - 1],
        dd(r),
        r.repeat = 0);
        const f = {
            startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > iA ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        }
          , h = !u && rA(f)
          , x = (g = (w = f.motionValue) == null ? void 0 : w.owner) == null ? void 0 : g.current
          , y = h ? new ZR({
            ...f,
            element: x
        }) : new eh(f);
        y.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(wt),
        this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = y
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then( () => {}
        )
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
        UR()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(),
        (t = this.keyframeResolver) == null || t.cancel()
    }
}
function E1(e, t, n, r=0, i=1) {
    const s = Array.from(e).sort( (u, c) => u.sortNodePosition(c)).indexOf(t)
      , o = e.size
      , a = (o - 1) * r;
    return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r
}
const oA = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function aA(e) {
    const t = oA.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
const lA = 4;
function T1(e, t, n=1) {
    Ui(n <= lA, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [r,i] = aA(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return $x(o) ? parseFloat(o) : o
    }
    return Gf(i) ? T1(i, t, n + 1) : i
}
const uA = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , cA = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , dA = {
    type: "keyframes",
    duration: .8
}
  , fA = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , hA = (e, {keyframes: t}) => t.length > 2 ? dA : ts.has(e) ? e.startsWith("scale") ? cA(t[1]) : uA : fA
  , pA = e => e !== null;
function mA(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(pA)
      , s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
function P1(e, t) {
    if (e != null && e.inherit && t) {
        const {inherit: n, ...r} = e;
        return {
            ...t,
            ...r
        }
    }
    return e
}
function nh(e, t) {
    const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
    return n !== e ? P1(n, e) : n
}
function gA({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const rh = (e, t, n, r={}, i, s) => o => {
    const a = nh(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - St(l);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: f => {
            t.set(f),
            a.onUpdate && a.onUpdate(f)
        }
        ,
        onComplete: () => {
            o(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    gA(a) || Object.assign(c, hA(e, c)),
    c.duration && (c.duration = St(c.duration)),
    c.repeatDelay && (c.repeatDelay = St(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (dd(c),
    c.delay === 0 && (d = !0)),
    (xn.instantAnimations || xn.skipAnimations || i != null && i.shouldSkipAnimations) && (d = !0,
    dd(c),
    c.delay = 0),
    c.allowFlatten = !a.type && !a.ease,
    d && !s && t.get() !== void 0) {
        const f = mA(c.keyframes, a);
        if (f !== void 0) {
            ie.update( () => {
                c.onUpdate(f),
                c.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new eh(c) : new sA(c)
}
;
function Nm(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function ih(e, t, n, r) {
    if (typeof t == "function") {
        const [i,s] = Nm(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,s] = Nm(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}
function Ti(e, t, n) {
    const r = e.getProps();
    return ih(r, t, n !== void 0 ? n : r.custom, e)
}
const k1 = new Set(["width", "height", "top", "left", "right", "bottom", ...es])
  , Mm = 30
  , yA = e => !isNaN(parseFloat(e));
class vA {
    constructor(t, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            var s;
            const i = He.now();
            if (this.updatedAt !== i && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
                for (const o of this.dependents)
                    o.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = He.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = yA(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Wf);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            ie.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = He.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Mm)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Mm);
        return Kx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Wi(e, t) {
    return new vA(e,t)
}
const fd = e => Array.isArray(e);
function xA(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Wi(n))
}
function wA(e) {
    return fd(e) ? e[e.length - 1] || 0 : e
}
function SA(e, t) {
    const n = Ti(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const a = wA(s[o]);
        xA(e, o, a)
    }
}
const ze = e => !!(e && e.getVelocity);
function bA(e) {
    return !!(ze(e) && e.add)
}
function hd(e, t) {
    const n = e.getValue("willChange");
    if (bA(n))
        return n.add(t);
    if (!n && xn.WillChange) {
        const r = new xn.WillChange("auto");
        e.addValue("willChange", r),
        r.add(t)
    }
}
function sh(e) {
    return e.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
}
const CA = "framerAppearId"
  , R1 = "data-" + sh(CA);
function A1(e) {
    return e.props[R1]
}
function EA({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function N1(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: s, transitionEnd: o, ...a} = t;
    const l = e.getDefaultTransition();
    s = s ? P1(s, l) : l;
    const u = s == null ? void 0 : s.reduceMotion;
    r && (s = r);
    const c = []
      , d = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
        const h = e.getValue(f, e.latestValues[f] ?? null)
          , x = a[f];
        if (x === void 0 || d && EA(d, f))
            continue;
        const y = {
            delay: n,
            ...nh(s || {}, f)
        }
          , w = h.get();
        if (w !== void 0 && !h.isAnimating && !Array.isArray(x) && x === w && !y.velocity)
            continue;
        let g = !1;
        if (window.MotionHandoffAnimation) {
            const b = A1(e);
            if (b) {
                const C = window.MotionHandoffAnimation(b, f, ie);
                C !== null && (y.startTime = C,
                g = !0)
            }
        }
        hd(e, f);
        const p = u ?? e.shouldReduceMotion;
        h.start(rh(f, h, x, p && k1.has(f) ? {
            type: !1
        } : y, e, g));
        const v = h.animation;
        v && c.push(v)
    }
    if (o) {
        const f = () => ie.update( () => {
            o && SA(e, o)
        }
        );
        c.length ? Promise.all(c).then(f) : f()
    }
    return c
}
function pd(e, t, n={}) {
    var l;
    const r = Ti(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {transition: i=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(N1(e, r, n)) : () => Promise.resolve()
      , o = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: d, staggerDirection: f} = i;
        return TA(e, t, u, c, d, f, n)
    }
    : () => Promise.resolve()
      , {when: a} = i;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [s, o] : [o, s];
        return u().then( () => c())
    } else
        return Promise.all([s(), o(n.delay)])
}
function TA(e, t, n=0, r=0, i=0, s=1, o) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
        a.push(pd(l, t, {
            ...o,
            delay: n + (typeof r == "function" ? 0 : r) + E1(e.variantChildren, l, r, i, s)
        }).then( () => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}
function PA(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => pd(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = pd(e, t, n);
    else {
        const i = typeof t == "function" ? Ti(e, t, n.custom) : t;
        r = Promise.all(N1(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const kA = {
    test: e => e === "auto",
    parse: e => e
}
  , M1 = e => t => t.test(e)
  , j1 = [Ji, F, en, Mn, tR, eR, kA]
  , jm = e => j1.find(M1(e));
function RA(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Wx(e) : !0
}
const AA = new Set(["brightness", "contrast", "saturate", "opacity"]);
function NA(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Qf) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = AA.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const MA = /\b([a-z-]*)\(.*?\)/gu
  , md = {
    ..._t,
    getAnimatableNone: e => {
        const t = e.match(MA);
        return t ? t.map(NA).join(" ") : e
    }
}
  , gd = {
    ..._t,
    getAnimatableNone: e => {
        const t = _t.parse(e);
        return _t.createTransformer(e)(t.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
            ...r,
            alpha: 1
        } : r))
    }
}
  , Dm = {
    ...Ji,
    transform: Math.round
}
  , jA = {
    rotate: Mn,
    rotateX: Mn,
    rotateY: Mn,
    rotateZ: Mn,
    scale: Zo,
    scaleX: Zo,
    scaleY: Zo,
    scaleZ: Zo,
    skew: Mn,
    skewX: Mn,
    skewY: Mn,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: so,
    originX: xm,
    originY: xm,
    originZ: F
}
  , oh = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    inset: F,
    insetBlock: F,
    insetBlockStart: F,
    insetBlockEnd: F,
    insetInline: F,
    insetInlineStart: F,
    insetInlineEnd: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    paddingBlock: F,
    paddingBlockStart: F,
    paddingBlockEnd: F,
    paddingInline: F,
    paddingInlineStart: F,
    paddingInlineEnd: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    marginBlock: F,
    marginBlockStart: F,
    marginBlockEnd: F,
    marginInline: F,
    marginInlineStart: F,
    marginInlineEnd: F,
    fontSize: F,
    backgroundPositionX: F,
    backgroundPositionY: F,
    ...jA,
    zIndex: Dm,
    fillOpacity: so,
    strokeOpacity: so,
    numOctaves: Dm
}
  , DA = {
    ...oh,
    color: Se,
    backgroundColor: Se,
    outlineColor: Se,
    fill: Se,
    stroke: Se,
    borderColor: Se,
    borderTopColor: Se,
    borderRightColor: Se,
    borderBottomColor: Se,
    borderLeftColor: Se,
    filter: md,
    WebkitFilter: md,
    mask: gd,
    WebkitMask: gd
}
  , D1 = e => DA[e]
  , LA = new Set([md, gd]);
function L1(e, t) {
    let n = D1(e);
    return LA.has(n) || (n = _t),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const OA = new Set(["auto", "none", "0"]);
function IA(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const s = e[r];
        typeof s == "string" && !OA.has(s) && oo(s).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const s of t)
            e[s] = L1(n, i)
}
class VA extends th {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let d = t[c];
            if (typeof d == "string" && (d = d.trim(),
            Gf(d))) {
                const f = T1(d, n.current);
                f !== void 0 && (t[c] = f),
                c === t.length - 1 && (this.finalKeyframe = d)
            }
        }
        if (this.resolveNoneKeyframes(),
        !k1.has(r) || t.length !== 2)
            return;
        const [i,s] = t
          , o = jm(i)
          , a = jm(s)
          , l = vm(i)
          , u = vm(s);
        if (l !== u && Hn[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (o !== a)
            if (km(o) && km(a))
                for (let c = 0; c < t.length; c++) {
                    const d = t[c];
                    typeof d == "string" && (t[c] = parseFloat(d))
                }
            else
                Hn[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            (t[i] === null || RA(t[i])) && r.push(i);
        r.length && IA(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Hn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var a;
        const {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current)
            return;
        const i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const s = r.length - 1
          , o = r[s];
        r[s] = Hn[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
        (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach( ([l,u]) => {
            t.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const FA = new Set(["opacity", "clipPath", "filter", "transform"]);
function O1(e, t, n) {
    if (e == null)
        return [];
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        const i = document.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e).filter(r => r != null)
}
const I1 = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function yd(e) {
    return Ux(e) && "offsetHeight"in e
}
const {schedule: ah, cancel: cD} = r1(queueMicrotask, !1)
  , Nt = {
    x: !1,
    y: !1
};
function V1() {
    return Nt.x || Nt.y
}
function _A(e) {
    return e === "x" || e === "y" ? Nt[e] ? null : (Nt[e] = !0,
    () => {
        Nt[e] = !1
    }
    ) : Nt.x || Nt.y ? null : (Nt.x = Nt.y = !0,
    () => {
        Nt.x = Nt.y = !1
    }
    )
}
function F1(e, t) {
    const n = O1(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function zA(e) {
    return !(e.pointerType === "touch" || V1())
}
function BA(e, t, n={}) {
    const [r,i,s] = F1(e, n);
    return r.forEach(o => {
        let a = !1, l = !1, u;
        const c = () => {
            o.removeEventListener("pointerleave", x)
        }
          , d = w => {
            u && (u(w),
            u = void 0),
            c()
        }
          , f = w => {
            a = !1,
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && (l = !1,
            d(w))
        }
          , h = () => {
            a = !0,
            window.addEventListener("pointerup", f, i),
            window.addEventListener("pointercancel", f, i)
        }
          , x = w => {
            if (w.pointerType !== "touch") {
                if (a) {
                    l = !0;
                    return
                }
                d(w)
            }
        }
          , y = w => {
            if (!zA(w))
                return;
            l = !1;
            const g = t(o, w);
            typeof g == "function" && (u = g,
            o.addEventListener("pointerleave", x, i))
        }
        ;
        o.addEventListener("pointerenter", y, i),
        o.addEventListener("pointerdown", h, i)
    }
    ),
    s
}
const _1 = (e, t) => t ? e === t ? !0 : _1(e, t.parentElement) : !1
  , lh = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , $A = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function UA(e) {
    return $A.has(e.tagName) || e.isContentEditable === !0
}
const WA = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function HA(e) {
    return WA.has(e.tagName) || e.isContentEditable === !0
}
const ya = new WeakSet;
function Lm(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Ou(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const KA = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Lm( () => {
        if (ya.has(n))
            return;
        Ou(n, "down");
        const i = Lm( () => {
            Ou(n, "up")
        }
        )
          , s = () => Ou(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", s, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function Om(e) {
    return lh(e) && !V1()
}
const Im = new WeakSet;
function GA(e, t, n={}) {
    const [r,i,s] = F1(e, n)
      , o = a => {
        const l = a.currentTarget;
        if (!Om(a) || Im.has(a))
            return;
        ya.add(l),
        n.stopPropagation && Im.add(a);
        const u = t(l, a)
          , c = (h, x) => {
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            ya.has(l) && ya.delete(l),
            Om(h) && typeof u == "function" && u(h, {
                success: x
            })
        }
          , d = h => {
            c(h, l === window || l === document || n.useGlobalTarget || _1(l, h.target))
        }
          , f = h => {
            c(h, !1)
        }
        ;
        window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i)
    }
    ;
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        yd(a) && (a.addEventListener("focus", u => KA(u, i)),
        !UA(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
    s
}
function uh(e) {
    return Ux(e) && "ownerSVGElement"in e
}
const va = new WeakMap;
let jn;
const z1 = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : uh(r) && "getBBox"in r ? r.getBBox()[t] : r[n]
  , QA = z1("inline", "width", "offsetWidth")
  , YA = z1("block", "height", "offsetHeight");
function XA({target: e, borderBoxSize: t}) {
    var n;
    (n = va.get(e)) == null || n.forEach(r => {
        r(e, {
            get width() {
                return QA(e, t)
            },
            get height() {
                return YA(e, t)
            }
        })
    }
    )
}
function qA(e) {
    e.forEach(XA)
}
function ZA() {
    typeof ResizeObserver > "u" || (jn = new ResizeObserver(qA))
}
function JA(e, t) {
    jn || ZA();
    const n = O1(e);
    return n.forEach(r => {
        let i = va.get(r);
        i || (i = new Set,
        va.set(r, i)),
        i.add(t),
        jn == null || jn.observe(r)
    }
    ),
    () => {
        n.forEach(r => {
            const i = va.get(r);
            i == null || i.delete(t),
            i != null && i.size || jn == null || jn.unobserve(r)
        }
        )
    }
}
const xa = new Set;
let hi;
function eN() {
    hi = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        xa.forEach(t => t(e))
    }
    ,
    window.addEventListener("resize", hi)
}
function tN(e) {
    return xa.add(e),
    hi || eN(),
    () => {
        xa.delete(e),
        !xa.size && typeof hi == "function" && (window.removeEventListener("resize", hi),
        hi = void 0)
    }
}
function Vm(e, t) {
    return typeof e == "function" ? tN(e) : JA(e, t)
}
function nN(e) {
    return uh(e) && e.tagName === "svg"
}
const rN = [...j1, Se, _t]
  , iN = e => rN.find(M1(e))
  , Fm = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , pi = () => ({
    x: Fm(),
    y: Fm()
})
  , _m = () => ({
    min: 0,
    max: 0
})
  , Ee = () => ({
    x: _m(),
    y: _m()
})
  , sN = new WeakMap;
function _l(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function ao(e) {
    return typeof e == "string" || Array.isArray(e)
}
const ch = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , dh = ["initial", ...ch];
function zl(e) {
    return _l(e.animate) || dh.some(t => ao(e[t]))
}
function B1(e) {
    return !!(zl(e) || e.variants)
}
function oN(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , s = n[r];
        if (ze(i))
            e.addValue(r, i);
        else if (ze(s))
            e.addValue(r, Wi(i, {
                owner: e
            }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, Wi(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const vd = {
    current: null
}
  , $1 = {
    current: !1
}
  , aN = typeof window < "u";
function lN() {
    if ($1.current = !0,
    !!aN)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => vd.current = e.matches;
            e.addEventListener("change", t),
            t()
        } else
            vd.current = !1
}
const zm = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let sl = {};
function U1(e) {
    sl = e
}
function uN() {
    return sl
}
class cN {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, skipAnimations: s, blockInitialAnimation: o, visualState: a}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = th,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const h = He.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h,
            ie.render(this.render, !1, !0))
        }
        ;
        const {latestValues: u, renderState: c} = a;
        this.latestValues = u,
        this.baseTarget = {
            ...u
        },
        this.initialValues = n.initial ? {
            ...u
        } : {},
        this.renderState = c,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.skipAnimationsConfig = s,
        this.options = l,
        this.blockInitialAnimation = !!o,
        this.isControllingVariants = zl(n),
        this.isVariantNode = B1(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: d, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const x = f[h];
            u[h] !== void 0 && ze(x) && x.set(u[h])
        }
    }
    mount(t) {
        var n, r;
        if (this.hasBeenMounted)
            for (const i in this.initialValues)
                (n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
                this.latestValues[i] = this.initialValues[i];
        this.current = t,
        sN.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (i, s) => this.bindToMotionValue(s, i)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : ($1.current || lN(),
        this.shouldReduceMotion = vd.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        (r = this.parent) == null || r.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
        ur(this.notifyUpdate),
        ur(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t),
        this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
        n.accelerate && FA.has(t) && this.current instanceof HTMLElement) {
            const {factory: o, keyframes: a, times: l, ease: u, duration: c} = n.accelerate
              , d = new b1({
                element: this.current,
                name: t,
                keyframes: a,
                times: l,
                ease: u,
                duration: St(c)
            })
              , f = o(d);
            this.valueSubscriptions.set(t, () => {
                f(),
                d.cancel()
            }
            );
            return
        }
        const r = ts.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", o => {
            this.latestValues[t] = o,
            this.props.onUpdate && ie.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let s;
        typeof window < "u" && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            s && s(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in sl) {
            const n = sl[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(),
                s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ee()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < zm.length; r++) {
            const i = zm[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = "on" + i
              , o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = oN(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Wi(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && ($x(r) || Wx(r)) ? r = parseFloat(r) : !iN(r) && _t.test(n) && (r = L1(t, n)),
        this.setBaseTarget(t, ze(r) ? r.get() : r)),
        ze(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var s;
        const {initial: n} = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const o = ih(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
            o && (r = o[t])
        }
        if (n && r !== void 0)
            return r;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !ze(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Wf),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        ah.render(this.render)
    }
}
class W1 extends cN {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = VA
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        ze(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class hr {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function H1({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function dN({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function fN(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Iu(e) {
    return e === void 0 || e === 1
}
function xd({scale: e, scaleX: t, scaleY: n}) {
    return !Iu(e) || !Iu(t) || !Iu(n)
}
function wr(e) {
    return xd(e) || K1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function K1(e) {
    return Bm(e.x) || Bm(e.y)
}
function Bm(e) {
    return e && e !== "0%"
}
function ol(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function $m(e, t, n, r, i) {
    return i !== void 0 && (e = ol(e, i, r)),
    ol(e, n, r) + t
}
function wd(e, t=0, n=1, r, i) {
    e.min = $m(e.min, t, n, r, i),
    e.max = $m(e.max, t, n, r, i)
}
function G1(e, {x: t, y: n}) {
    wd(e.x, t.translate, t.scale, t.originPoint),
    wd(e.y, n.translate, n.scale, n.originPoint)
}
const Um = .999999999999
  , Wm = 1.0000000000001;
function hN(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let a = 0; a < i; a++) {
        s = n[a],
        o = s.projectionDelta;
        const {visualElement: l} = s.options;
        l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && gi(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        G1(e, o)),
        r && wr(s.latestValues) && gi(e, s.latestValues))
    }
    t.x < Wm && t.x > Um && (t.x = 1),
    t.y < Wm && t.y > Um && (t.y = 1)
}
function mi(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function Hm(e, t, n, r, i=.5) {
    const s = he(e.min, e.max, i);
    wd(e, t, n, s, r)
}
function Km(e, t) {
    return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e
}
function gi(e, t) {
    Hm(e.x, Km(t.x, e.x), t.scaleX, t.scale, t.originX),
    Hm(e.y, Km(t.y, e.y), t.scaleY, t.scale, t.originY)
}
function Q1(e, t) {
    return H1(fN(e.getBoundingClientRect(), t))
}
function pN(e, t, n) {
    const r = Q1(e, n)
      , {scroll: i} = t;
    return i && (mi(r.x, i.offset.x),
    mi(r.y, i.offset.y)),
    r
}
const mN = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , gN = es.length;
function yN(e, t, n) {
    let r = ""
      , i = !0;
    for (let s = 0; s < gN; s++) {
        const o = es[s]
          , a = e[o];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number")
            l = a === (o.startsWith("scale") ? 1 : 0);
        else {
            const u = parseFloat(a);
            l = o.startsWith("scale") ? u === 1 : u === 0
        }
        if (!l || n) {
            const u = I1(a, oh[o]);
            if (!l) {
                i = !1;
                const c = mN[o] || o;
                r += `${c}(${u}) `
            }
            n && (t[o] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function fh(e, t, n) {
    const {style: r, vars: i, transformOrigin: s} = e;
    let o = !1
      , a = !1;
    for (const l in t) {
        const u = t[l];
        if (ts.has(l)) {
            o = !0;
            continue
        } else if (s1(l)) {
            i[l] = u;
            continue
        } else {
            const c = I1(u, oh[l]);
            l.startsWith("origin") ? (a = !0,
            s[l] = c) : r[l] = c
        }
    }
    if (t.transform || (o || n ? r.transform = yN(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: u="50%", originZ: c=0} = s;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}
function Y1(e, {style: t, vars: n}, r, i) {
    const s = e.style;
    let o;
    for (o in t)
        s[o] = t[o];
    i == null || i.applyProjectionStyles(s, r);
    for (o in n)
        s.setProperty(o, n[o])
}
function Gm(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const ps = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (F.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Gm(e, t.target.x)
          , r = Gm(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , vN = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = _t.parse(e);
        if (i.length > 5)
            return r;
        const s = _t.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        i[0 + o] /= a,
        i[1 + o] /= l;
        const u = he(a, l, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
    }
}
  , Sd = {
    borderRadius: {
        ...ps,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ps,
    borderTopRightRadius: ps,
    borderBottomLeftRadius: ps,
    borderBottomRightRadius: ps,
    boxShadow: vN
};
function X1(e, {layout: t, layoutId: n}) {
    return ts.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Sd[e] || e === "opacity")
}
function hh(e, t, n) {
    var o;
    const r = e.style
      , i = t == null ? void 0 : t.style
      , s = {};
    if (!r)
        return s;
    for (const a in r)
        (ze(r[a]) || i && ze(i[a]) || X1(a, e) || ((o = n == null ? void 0 : n.getValue(a)) == null ? void 0 : o.liveStyle) !== void 0) && (s[a] = r[a]);
    return s
}
function xN(e) {
    return window.getComputedStyle(e)
}
class wN extends W1 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Y1
    }
    readValueFromInstance(t, n) {
        var r;
        if (ts.has(n))
            return (r = this.projection) != null && r.isProjecting ? od(n) : FR(t, n);
        {
            const i = xN(t)
              , s = (s1(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return Q1(t, n)
    }
    build(t, n, r) {
        fh(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return hh(t, n, r)
    }
}
const SN = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , bN = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function CN(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? SN : bN;
    e[s.offset] = `${-r}`,
    e[s.array] = `${t} ${n}`
}
const EN = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function q1(e, {attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: s=1, pathOffset: o=0, ...a}, l, u, c) {
    if (fh(e, a, u),
    l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: f} = e;
    d.transform && (f.transform = d.transform,
    delete d.transform),
    (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%",
    delete d.transformOrigin),
    f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box",
    delete d.transformBox);
    for (const h of EN)
        d[h] !== void 0 && (f[h] = d[h],
        delete d[h]);
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && CN(d, i, s, o, !1)
}
const Z1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , J1 = e => typeof e == "string" && e.toLowerCase() === "svg";
function TN(e, t, n, r) {
    Y1(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(Z1.has(i) ? i : sh(i), t.attrs[i])
}
function ew(e, t, n) {
    const r = hh(e, t, n);
    for (const i in e)
        if (ze(e[i]) || ze(t[i])) {
            const s = es.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        }
    return r
}
class PN extends W1 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = Ee
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (ts.has(n)) {
            const r = D1(n);
            return r && r.default || 0
        }
        return n = Z1.has(n) ? n : sh(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return ew(t, n, r)
    }
    build(t, n, r) {
        q1(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, i) {
        TN(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = J1(t.tagName),
        super.mount(t)
    }
}
const kN = dh.length;
function tw(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? tw(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < kN; n++) {
        const r = dh[n]
          , i = e.props[r];
        (ao(i) || i === !1) && (t[r] = i)
    }
    return t
}
function nw(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const RN = [...ch].reverse()
  , AN = ch.length;
function NN(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => PA(e, n, r)))
}
function MN(e) {
    let t = NN(e)
      , n = Qm()
      , r = !0
      , i = !1;
    const s = u => (c, d) => {
        var h;
        const f = Ti(e, d, u === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
        if (f) {
            const {transition: x, transitionEnd: y, ...w} = f;
            c = {
                ...c,
                ...w,
                ...y
            }
        }
        return c
    }
    ;
    function o(u) {
        t = u(e)
    }
    function a(u) {
        const {props: c} = e
          , d = tw(e.parent) || {}
          , f = []
          , h = new Set;
        let x = {}
          , y = 1 / 0;
        for (let g = 0; g < AN; g++) {
            const p = RN[g]
              , v = n[p]
              , b = c[p] !== void 0 ? c[p] : d[p]
              , C = ao(b)
              , E = p === u ? v.isActive : null;
            E === !1 && (y = g);
            let T = b === d[p] && b !== c[p] && C;
            if (T && (r || i) && e.manuallyAnimateOnMount && (T = !1),
            v.protectedKeys = {
                ...x
            },
            !v.isActive && E === null || !b && !v.prevProp || _l(b) || typeof b == "boolean")
                continue;
            if (p === "exit" && v.isActive && E !== !0) {
                v.prevResolvedValues && (x = {
                    ...x,
                    ...v.prevResolvedValues
                });
                continue
            }
            const P = jN(v.prevProp, b);
            let N = P || p === u && v.isActive && !T && C || g > y && C
              , M = !1;
            const _ = Array.isArray(b) ? b : [b];
            let I = _.reduce(s(p), {});
            E === !1 && (I = {});
            const {prevResolvedValues: U={}} = v
              , O = {
                ...U,
                ...I
            }
              , Q = k => {
                N = !0,
                h.has(k) && (M = !0,
                h.delete(k)),
                v.needsAnimating[k] = !0;
                const R = e.getValue(k);
                R && (R.liveStyle = !1)
            }
            ;
            for (const k in O) {
                const R = I[k]
                  , L = U[k];
                if (x.hasOwnProperty(k))
                    continue;
                let B = !1;
                fd(R) && fd(L) ? B = !nw(R, L) : B = R !== L,
                B ? R != null ? Q(k) : h.add(k) : R !== void 0 && h.has(k) ? Q(k) : v.protectedKeys[k] = !0
            }
            v.prevProp = b,
            v.prevResolvedValues = I,
            v.isActive && (x = {
                ...x,
                ...I
            }),
            (r || i) && e.blockInitialAnimation && (N = !1);
            const $ = T && P;
            N && (!$ || M) && f.push(..._.map(k => {
                const R = {
                    type: p
                };
                if (typeof k == "string" && (r || i) && !$ && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: L} = e
                      , B = Ti(L, k);
                    if (L.enteringChildren && B) {
                        const {delayChildren: z} = B.transition || {};
                        R.delay = E1(L.enteringChildren, e, z)
                    }
                }
                return {
                    animation: k,
                    options: R
                }
            }
            ))
        }
        if (h.size) {
            const g = {};
            if (typeof c.initial != "boolean") {
                const p = Ti(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
                p && p.transition && (g.transition = p.transition)
            }
            h.forEach(p => {
                const v = e.getBaseTarget(p)
                  , b = e.getValue(p);
                b && (b.liveStyle = !0),
                g[p] = v ?? null
            }
            ),
            f.push({
                animation: g
            })
        }
        let w = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (w = !1),
        r = !1,
        i = !1,
        w ? t(f) : Promise.resolve()
    }
    function l(u, c) {
        var f;
        if (n[u].isActive === c)
            return Promise.resolve();
        (f = e.variantChildren) == null || f.forEach(h => {
            var x;
            return (x = h.animationState) == null ? void 0 : x.setActive(u, c)
        }
        ),
        n[u].isActive = c;
        const d = a(u);
        for (const h in n)
            n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: a,
        setActive: l,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = Qm(),
            i = !0
        }
    }
}
function jN(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !nw(t, e) : !1
}
function yr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Qm() {
    return {
        animate: yr(!0),
        whileInView: yr(),
        whileHover: yr(),
        whileTap: yr(),
        whileDrag: yr(),
        whileFocus: yr(),
        exit: yr()
    }
}
function Ym(e, t) {
    e.min = t.min,
    e.max = t.max
}
function At(e, t) {
    Ym(e.x, t.x),
    Ym(e.y, t.y)
}
function Xm(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
const rw = 1e-4
  , DN = 1 - rw
  , LN = 1 + rw
  , iw = .01
  , ON = 0 - iw
  , IN = 0 + iw;
function Ke(e) {
    return e.max - e.min
}
function VN(e, t, n) {
    return Math.abs(e - t) <= n
}
function qm(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = he(t.min, t.max, e.origin),
    e.scale = Ke(n) / Ke(t),
    e.translate = he(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= DN && e.scale <= LN || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= ON && e.translate <= IN || isNaN(e.translate)) && (e.translate = 0)
}
function Ds(e, t, n, r) {
    qm(e.x, t.x, n.x, r ? r.originX : void 0),
    qm(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Zm(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Ke(t)
}
function FN(e, t, n) {
    Zm(e.x, t.x, n.x),
    Zm(e.y, t.y, n.y)
}
function Jm(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Ke(t)
}
function al(e, t, n) {
    Jm(e.x, t.x, n.x),
    Jm(e.y, t.y, n.y)
}
function eg(e, t, n, r, i) {
    return e -= t,
    e = ol(e, 1 / n, r),
    i !== void 0 && (e = ol(e, 1 / i, r)),
    e
}
function _N(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (en.test(t) && (t = parseFloat(t),
    t = he(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let a = he(s.min, s.max, r);
    e === s && (a -= t),
    e.min = eg(e.min, t, n, a, i),
    e.max = eg(e.max, t, n, a, i)
}
function tg(e, t, [n,r,i], s, o) {
    _N(e, t[n], t[r], t[i], t.scale, s, o)
}
const zN = ["x", "scaleX", "originX"]
  , BN = ["y", "scaleY", "originY"];
function ng(e, t, n, r) {
    tg(e.x, t, zN, n ? n.x : void 0, r ? r.x : void 0),
    tg(e.y, t, BN, n ? n.y : void 0, r ? r.y : void 0)
}
function rg(e) {
    return e.translate === 0 && e.scale === 1
}
function sw(e) {
    return rg(e.x) && rg(e.y)
}
function ig(e, t) {
    return e.min === t.min && e.max === t.max
}
function $N(e, t) {
    return ig(e.x, t.x) && ig(e.y, t.y)
}
function sg(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function ow(e, t) {
    return sg(e.x, t.x) && sg(e.y, t.y)
}
function og(e) {
    return Ke(e.x) / Ke(e.y)
}
function ag(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
function Gt(e) {
    return [e("x"), e("y")]
}
function UN(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y
      , o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: h, skewY: x} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        d && (r += `rotateX(${d}deg) `),
        f && (r += `rotateY(${f}deg) `),
        h && (r += `skewX(${h}deg) `),
        x && (r += `skewY(${x}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const aw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , WN = aw.length
  , lg = e => typeof e == "string" ? parseFloat(e) : e
  , ug = e => typeof e == "number" || F.test(e);
function HN(e, t, n, r, i, s) {
    i ? (e.opacity = he(0, n.opacity ?? 1, KN(r)),
    e.opacityExit = he(t.opacity ?? 1, 0, GN(r))) : s && (e.opacity = he(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let o = 0; o < WN; o++) {
        const a = `border${aw[o]}Radius`;
        let l = cg(t, a)
          , u = cg(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || ug(l) === ug(u) ? (e[a] = Math.max(he(lg(l), lg(u), r), 0),
        (en.test(u) || en.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = he(t.rotate || 0, n.rotate || 0, r))
}
function cg(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const KN = lw(0, .5, Jx)
  , GN = lw(.5, .95, wt);
function lw(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(io(e, t, r))
}
function QN(e, t, n) {
    const r = ze(e) ? e : Wi(e);
    return r.start(rh("", r, t, n)),
    r.animation
}
function lo(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const YN = (e, t) => e.depth - t.depth;
class XN {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Uf(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        tl(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(YN),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function qN(e, t) {
    const n = He.now()
      , r = ({timestamp: i}) => {
        const s = i - n;
        s >= t && (ur(r),
        e(s - t))
    }
    ;
    return ie.setup(r, !0),
    () => ur(r)
}
function wa(e) {
    return ze(e) ? e.get() : e
}
class ZN {
    constructor() {
        this.members = []
    }
    add(t) {
        Uf(this.members, t);
        for (let n = this.members.length - 1; n >= 0; n--) {
            const r = this.members[n];
            if (r === t || r === this.lead || r === this.prevLead)
                continue;
            const i = r.instance;
            (!i || i.isConnected === !1) && !r.snapshot && (tl(this.members, r),
            r.unmount())
        }
        t.scheduleRender()
    }
    remove(t) {
        if (tl(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        var n;
        for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
            const i = this.members[r];
            if (i.isPresent !== !1 && ((n = i.instance) == null ? void 0 : n.isConnected) !== !1)
                return this.promote(i),
                !0
        }
        return !1
    }
    promote(t, n) {
        var i;
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.updateSnapshot(),
            t.scheduleRender();
            const {layoutDependency: s} = r.options
              , {layoutDependency: o} = t.options;
            (s === void 0 || s !== o) && (t.resumeFrom = r,
            n && (r.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            (i = t.root) != null && i.isUpdating && (t.isLayoutDirty = !0)),
            t.options.crossfade === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            var n, r, i, s, o;
            (r = (n = t.options).onExitComplete) == null || r.call(n),
            (o = (i = t.resumingFrom) == null ? void 0 : (s = i.options).onExitComplete) == null || o.call(s)
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => t.instance && t.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        var t;
        (t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0)
    }
}
const Sa = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , Vu = ["", "X", "Y", "Z"]
  , JN = 1e3;
let eM = 0;
function Fu(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function uw(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = A1(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: s} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", ie, !(i || s))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && uw(r)
}
function cw({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, a=t == null ? void 0 : t()) {
            this.id = eM++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(rM),
                this.nodes.forEach(aM),
                this.nodes.forEach(lM),
                this.nodes.forEach(iM)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new XN)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Wf),
            this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o) {
            if (this.instance)
                return;
            this.isSVG = uh(o) && !nN(o),
            this.instance = o;
            const {layoutId: a, layout: l, visualElement: u} = this.options;
            if (u && !u.current && u.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            e) {
                let c, d = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                ie.read( () => {
                    d = window.innerWidth
                }
                ),
                e(o, () => {
                    const h = window.innerWidth;
                    h !== d && (d = h,
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = qN(f, 250),
                    Sa.hasAnimatedSinceResize && (Sa.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(hg)))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: h}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || u.getDefaultTransition() || hM
                  , {onLayoutAnimationStart: y, onLayoutAnimationComplete: w} = u.getProps()
                  , g = !this.targetLayout || !ow(this.targetLayout, h)
                  , p = !d && f;
                if (this.options.layoutRoot || this.resumeFrom || p || d && (g || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const v = {
                        ...nh(x, "layout"),
                        onPlay: y,
                        onComplete: w
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (v.delay = 0,
                    v.type = !1),
                    this.startAnimation(v),
                    this.setAnimationOrigin(c, p)
                } else
                    d || hg(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = h
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            ur(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(uM),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && uw(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(dg);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(fg);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(oM),
            this.nodes.forEach(tM),
            this.nodes.forEach(nM)) : this.nodes.forEach(fg),
            this.clearAllSnapshots();
            const a = He.now();
            Me.delta = nn(0, 1e3 / 60, a - Me.timestamp),
            Me.timestamp = a,
            Me.isProcessing = !0,
            Au.update.process(Me),
            Au.preRender.process(Me),
            Au.render.process(Me),
            Me.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            ah.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(sM),
            this.sharedNodes.forEach(cM)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            ie.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            ie.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !Ke(this.snapshot.measuredBox.x) && !Ke(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected = Ee(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !sw(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            o && this.instance && (a || wr(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)),
            pM(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: o} = this.options;
            if (!o)
                return Ee();
            const a = o.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(mM))) {
                const {scroll: c} = this.root;
                c && (mi(a.x, c.offset.x),
                mi(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(o) {
            var l;
            const a = Ee();
            if (At(a, o),
            (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: d, options: f} = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && At(a, o),
                mi(a.x, d.offset.x),
                mi(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(o, a=!1) {
            const l = Ee();
            At(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && gi(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                wr(c.latestValues) && gi(l, c.latestValues)
            }
            return wr(this.latestValues) && gi(l, this.latestValues),
            l
        }
        removeTransform(o) {
            const a = Ee();
            At(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !wr(u.latestValues))
                    continue;
                xd(u.latestValues) && u.updateSnapshot();
                const c = Ee()
                  , d = u.measurePageBox();
                At(c, d),
                ng(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return wr(this.latestValues) && ng(a, this.latestValues),
            a
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Me.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: c, layoutId: d} = this.options;
            if (!this.layout || !(c || d))
                return;
            this.resolvedRelativeTargetAt = Me.timestamp;
            const f = this.getClosestProjectingParent();
            f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ee(),
            this.targetWithTransforms = Ee()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            FN(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : At(this.target, this.layout.layoutBox),
            G1(this.target, this.targetDelta)) : At(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || xd(this.parent.latestValues) || K1(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(o, a, l) {
            this.relativeParent = o,
            this.linkedParentVersion = o.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = Ee(),
            this.relativeTargetOrigin = Ee(),
            al(this.relativeTargetOrigin, a, l),
            At(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var x;
            const o = this.getLead()
              , a = !!this.resumingFrom || this !== o;
            let l = !0;
            if ((this.isProjectionDirty || (x = this.parent) != null && x.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === Me.timestamp && (l = !1),
            l)
                return;
            const {layout: u, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || c))
                return;
            At(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , f = this.treeScale.y;
            hN(this.layoutCorrected, this.treeScale, this.path, a),
            o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox,
            o.targetWithTransforms = Ee());
            const {target: h} = o;
            if (!h) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Xm(this.prevProjectionDelta.x, this.projectionDelta.x),
            Xm(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Ds(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== f || !ag(this.projectionDelta.x, this.prevProjectionDelta.x) || !ag(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", h))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
            o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = pi(),
            this.projectionDelta = pi(),
            this.projectionDeltaWithTransform = pi()
        }
        setAnimationOrigin(o, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = pi();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = Ee()
              , h = l ? l.source : void 0
              , x = this.layout ? this.layout.source : void 0
              , y = h !== x
              , w = this.getStack()
              , g = !w || w.members.length <= 1
              , p = !!(y && !g && this.options.crossfade === !0 && !this.path.some(fM));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = b => {
                const C = b / 1e3;
                pg(d.x, o.x, C),
                pg(d.y, o.y, C),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (al(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                dM(this.relativeTarget, this.relativeTargetOrigin, f, C),
                v && $N(this.relativeTarget, v) && (this.isProjectionDirty = !1),
                v || (v = Ee()),
                At(v, this.relativeTarget)),
                y && (this.animationValues = c,
                HN(c, u, this.latestValues, C, p, g)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = C
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            var a, l, u;
            this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
            this.pendingAnimation && (ur(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = ie.update( () => {
                Sa.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Wi(0)),
                this.motionValue.jump(0, !1),
                this.currentAnimation = QN(this.motionValue, [0, 1e3], {
                    ...o,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: c => {
                        this.mixTargetDelta(c),
                        o.onUpdate && o.onUpdate(c)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(JN),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = o;
            if (!(!a || !l || !u)) {
                if (this !== o && this.layout && u && dw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Ee();
                    const d = Ke(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min,
                    l.x.max = l.x.min + d;
                    const f = Ke(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min,
                    l.y.max = l.y.min + f
                }
                At(a, l),
                gi(a, c),
                Ds(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new ZN),
            this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var a;
            const {layoutId: o} = this.options;
            return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: o} = this.options;
            return o ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let a = !1;
            const {latestValues: l} = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const u = {};
            l.z && Fu("z", o, u, this.animationValues);
            for (let c = 0; c < Vu.length; c++)
                Fu(`rotate${Vu[c]}`, o, u, this.animationValues),
                Fu(`skew${Vu[c]}`, o, u, this.animationValues);
            o.render();
            for (const c in u)
                o.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            o.scheduleRender()
        }
        applyProjectionStyles(o, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                o.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                o.visibility = "",
                o.opacity = "",
                o.pointerEvents = wa(a == null ? void 0 : a.pointerEvents) || "",
                o.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                o.pointerEvents = wa(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !wr(this.latestValues) && (o.transform = l ? l({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            o.visibility = "";
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let d = UN(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (d = l(c, d)),
            o.transform = d;
            const {x: f, y: h} = this.projectionDelta;
            o.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`,
            u.animationValues ? o.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const x in Sd) {
                if (c[x] === void 0)
                    continue;
                const {correct: y, applyTo: w, isCSSVariable: g} = Sd[x]
                  , p = d === "none" ? c[x] : y(c[x], u);
                if (w) {
                    const v = w.length;
                    for (let b = 0; b < v; b++)
                        o[w[b]] = p
                } else
                    g ? this.options.visualElement.renderState.vars[x] = p : o[x] = p
            }
            this.options.layoutId && (o.pointerEvents = u === this ? wa(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(dg),
            this.root.sharedNodes.clear()
        }
    }
}
function tM(e) {
    e.updateLayout()
}
function nM(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = t.source !== e.layout.source;
        s === "size" ? Gt(d => {
            const f = o ? t.measuredBox[d] : t.layoutBox[d]
              , h = Ke(f);
            f.min = r[d].min,
            f.max = f.min + h
        }
        ) : dw(s, t.layoutBox, r) && Gt(d => {
            const f = o ? t.measuredBox[d] : t.layoutBox[d]
              , h = Ke(r[d]);
            f.max = f.min + h,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + h)
        }
        );
        const a = pi();
        Ds(a, r, t.layoutBox);
        const l = pi();
        o ? Ds(l, e.applyTransform(i, !0), t.measuredBox) : Ds(l, r, t.layoutBox);
        const u = !sw(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: h} = d;
                if (f && h) {
                    const x = Ee();
                    al(x, t.layoutBox, f.layoutBox);
                    const y = Ee();
                    al(y, r, h.layoutBox),
                    ow(x, y) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = y,
                    e.relativeTargetOrigin = x,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function rM(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function iM(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function sM(e) {
    e.clearSnapshot()
}
function dg(e) {
    e.clearMeasurements()
}
function fg(e) {
    e.isLayoutDirty = !1
}
function oM(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function hg(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function aM(e) {
    e.resolveTargetDelta()
}
function lM(e) {
    e.calcProjection()
}
function uM(e) {
    e.resetSkewAndRotation()
}
function cM(e) {
    e.removeLeadSnapshot()
}
function pg(e, t, n) {
    e.translate = he(t.translate, 0, n),
    e.scale = he(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function mg(e, t, n, r) {
    e.min = he(t.min, n.min, r),
    e.max = he(t.max, n.max, r)
}
function dM(e, t, n, r) {
    mg(e.x, t.x, n.x, r),
    mg(e.y, t.y, n.y, r)
}
function fM(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const hM = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , gg = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , yg = gg("applewebkit/") && !gg("chrome/") ? Math.round : wt;
function vg(e) {
    e.min = yg(e.min),
    e.max = yg(e.max)
}
function pM(e) {
    vg(e.x),
    vg(e.y)
}
function dw(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !VN(og(t), og(n), .2)
}
function mM(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const gM = cw({
    attachResizeListener: (e, t) => lo(e, "resize", t),
    measureScroll: () => {
        var e, t;
        return {
            x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , _u = {
    current: void 0
}
  , fw = cw({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!_u.current) {
            const e = new gM({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            _u.current = e
        }
        return _u.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , ph = S.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function xg(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function yM(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const s = xg(i, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const s = r[i];
                    typeof s == "function" ? s() : xg(e[i], null)
                }
            }
    }
}
function vM(...e) {
    return S.useCallback(yM(...e), e)
}
class xM extends S.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const r = n.offsetParent
              , i = yd(r) && r.offsetWidth || 0
              , s = yd(r) && r.offsetHeight || 0
              , o = this.props.sizeRef.current;
            o.height = n.offsetHeight || 0,
            o.width = n.offsetWidth || 0,
            o.top = n.offsetTop,
            o.left = n.offsetLeft,
            o.right = i - o.width - o.left,
            o.bottom = s - o.height - o.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function wM({children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: s}) {
    var f;
    const o = S.useId()
      , a = S.useRef(null)
      , l = S.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
      , {nonce: u} = S.useContext(ph)
      , c = ((f = e.props) == null ? void 0 : f.ref) ?? (e == null ? void 0 : e.ref)
      , d = vM(a, c);
    return S.useInsertionEffect( () => {
        const {width: h, height: x, top: y, left: w, right: g, bottom: p} = l.current;
        if (t || s === !1 || !a.current || !h || !x)
            return;
        const v = n === "left" ? `left: ${w}` : `right: ${g}`
          , b = r === "bottom" ? `bottom: ${p}` : `top: ${y}`;
        a.current.dataset.motionPopId = o;
        const C = document.createElement("style");
        u && (C.nonce = u);
        const E = i ?? document.head;
        return E.appendChild(C),
        C.sheet && C.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${x}px !important;
            ${v}px !important;
            ${b}px !important;
          }
        `),
        () => {
            E.contains(C) && E.removeChild(C)
        }
    }
    , [t]),
    m.jsx(xM, {
        isPresent: t,
        childRef: a,
        sizeRef: l,
        pop: s,
        children: s === !1 ? e : S.cloneElement(e, {
            ref: d
        })
    })
}
const SM = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o, anchorX: a, anchorY: l, root: u}) => {
    const c = $f(bM)
      , d = S.useId();
    let f = !0
      , h = S.useMemo( () => (f = !1,
    {
        id: d,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: x => {
            c.set(x, !0);
            for (const y of c.values())
                if (!y)
                    return;
            r && r()
        }
        ,
        register: x => (c.set(x, !1),
        () => c.delete(x))
    }), [n, c, r]);
    return s && f && (h = {
        ...h
    }),
    S.useMemo( () => {
        c.forEach( (x, y) => c.set(y, !1))
    }
    , [n]),
    S.useEffect( () => {
        !n && !c.size && r && r()
    }
    , [n]),
    e = m.jsx(wM, {
        pop: o === "popLayout",
        isPresent: n,
        anchorX: a,
        anchorY: l,
        root: u,
        children: e
    }),
    m.jsx(Vl.Provider, {
        value: h,
        children: e
    })
}
;
function bM() {
    return new Map
}
function hw(e=!0) {
    const t = S.useContext(Vl);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , s = S.useId();
    S.useEffect( () => {
        if (e)
            return i(s)
    }
    , [e]);
    const o = S.useCallback( () => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const Jo = e => e.key || "";
function wg(e) {
    const t = [];
    return S.Children.forEach(e, n => {
        S.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const CM = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: s="sync", propagate: o=!1, anchorX: a="left", anchorY: l="top", root: u}) => {
    const [c,d] = hw(o)
      , f = S.useMemo( () => wg(e), [e])
      , h = o && !c ? [] : f.map(Jo)
      , x = S.useRef(!0)
      , y = S.useRef(f)
      , w = $f( () => new Map)
      , g = S.useRef(new Set)
      , [p,v] = S.useState(f)
      , [b,C] = S.useState(f);
    Bx( () => {
        x.current = !1,
        y.current = f;
        for (let P = 0; P < b.length; P++) {
            const N = Jo(b[P]);
            h.includes(N) ? (w.delete(N),
            g.current.delete(N)) : w.get(N) !== !0 && w.set(N, !1)
        }
    }
    , [b, h.length, h.join("-")]);
    const E = [];
    if (f !== p) {
        let P = [...f];
        for (let N = 0; N < b.length; N++) {
            const M = b[N]
              , _ = Jo(M);
            h.includes(_) || (P.splice(N, 0, M),
            E.push(M))
        }
        return s === "wait" && E.length && (P = E),
        C(wg(P)),
        v(f),
        null
    }
    const {forceRender: T} = S.useContext(Bf);
    return m.jsx(m.Fragment, {
        children: b.map(P => {
            const N = Jo(P)
              , M = o && !c ? !1 : f === b || h.includes(N)
              , _ = () => {
                if (g.current.has(N))
                    return;
                if (g.current.add(N),
                w.has(N))
                    w.set(N, !0);
                else
                    return;
                let I = !0;
                w.forEach(U => {
                    U || (I = !1)
                }
                ),
                I && (T == null || T(),
                C(y.current),
                o && (d == null || d()),
                r && r())
            }
            ;
            return m.jsx(SM, {
                isPresent: M,
                initial: !x.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: i,
                mode: s,
                root: u,
                onExitComplete: M ? void 0 : _,
                anchorX: a,
                anchorY: l,
                children: P
            }, N)
        }
        )
    })
}
  , pw = S.createContext({
    strict: !1
})
  , Sg = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let bg = !1;
function EM() {
    if (bg)
        return;
    const e = {};
    for (const t in Sg)
        e[t] = {
            isEnabled: n => Sg[t].some(r => !!n[r])
        };
    U1(e),
    bg = !0
}
function mw() {
    return EM(),
    uN()
}
function TM(e) {
    const t = mw();
    for (const n in e)
        t[n] = {
            ...t[n],
            ...e[n]
        };
    U1(t)
}
const PM = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function ll(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || PM.has(e)
}
let gw = e => !ll(e);
function kM(e) {
    typeof e == "function" && (gw = t => t.startsWith("on") ? !ll(t) : e(t))
}
try {
    kM(require("@emotion/is-prop-valid").default)
} catch {}
function RM(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (gw(i) || n === !0 && ll(i) || !t && !ll(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
const Bl = S.createContext({});
function AM(e, t) {
    if (zl(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || ao(n) ? n : void 0,
            animate: ao(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function NM(e) {
    const {initial: t, animate: n} = AM(e, S.useContext(Bl));
    return S.useMemo( () => ({
        initial: t,
        animate: n
    }), [Cg(t), Cg(n)])
}
function Cg(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const mh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function yw(e, t, n) {
    for (const r in t)
        !ze(t[r]) && !X1(r, n) && (e[r] = t[r])
}
function MM({transformTemplate: e}, t) {
    return S.useMemo( () => {
        const n = mh();
        return fh(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function jM(e, t) {
    const n = e.style || {}
      , r = {};
    return yw(r, n, e),
    Object.assign(r, MM(e, t)),
    r
}
function DM(e, t) {
    const n = {}
      , r = jM(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const vw = () => ({
    ...mh(),
    attrs: {}
});
function LM(e, t, n, r) {
    const i = S.useMemo( () => {
        const s = vw();
        return q1(s, t, J1(r), e.transformTemplate, e.style),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        yw(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
const OM = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function gh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(OM.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function IM(e, t, n, {latestValues: r}, i, s=!1, o) {
    const l = (o ?? gh(e) ? LM : DM)(t, r, i, e)
      , u = RM(t, typeof e == "string", s)
      , c = e !== S.Fragment ? {
        ...u,
        ...l,
        ref: n
    } : {}
      , {children: d} = t
      , f = S.useMemo( () => ze(d) ? d.get() : d, [d]);
    return S.createElement(e, {
        ...c,
        children: f
    })
}
function VM({scrapeMotionValuesFromProps: e, createRenderState: t}, n, r, i) {
    return {
        latestValues: FM(n, r, i, e),
        renderState: t()
    }
}
function FM(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const f in s)
        i[f] = wa(s[f]);
    let {initial: o, animate: a} = e;
    const l = zl(e)
      , u = B1(e);
    t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const d = c ? a : o;
    if (d && typeof d != "boolean" && !_l(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
            const x = ih(e, f[h]);
            if (x) {
                const {transitionEnd: y, transition: w, ...g} = x;
                for (const p in g) {
                    let v = g[p];
                    if (Array.isArray(v)) {
                        const b = c ? v.length - 1 : 0;
                        v = v[b]
                    }
                    v !== null && (i[p] = v)
                }
                for (const p in y)
                    i[p] = y[p]
            }
        }
    }
    return i
}
const xw = e => (t, n) => {
    const r = S.useContext(Bl)
      , i = S.useContext(Vl)
      , s = () => VM(e, t, r, i);
    return n ? s() : $f(s)
}
  , _M = xw({
    scrapeMotionValuesFromProps: hh,
    createRenderState: mh
})
  , zM = xw({
    scrapeMotionValuesFromProps: ew,
    createRenderState: vw
})
  , BM = Symbol.for("motionComponentSymbol");
function $M(e, t, n) {
    const r = S.useRef(n);
    S.useInsertionEffect( () => {
        r.current = n
    }
    );
    const i = S.useRef(null);
    return S.useCallback(s => {
        var a;
        s && ((a = e.onMount) == null || a.call(e, s));
        const o = r.current;
        if (typeof o == "function")
            if (s) {
                const l = o(s);
                typeof l == "function" && (i.current = l)
            } else
                i.current ? (i.current(),
                i.current = null) : o(s);
        else
            o && (o.current = s);
        t && (s ? t.mount(s) : t.unmount())
    }
    , [t])
}
const ww = S.createContext({});
function Jr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function UM(e, t, n, r, i, s) {
    var v, b;
    const {visualElement: o} = S.useContext(Bl)
      , a = S.useContext(pw)
      , l = S.useContext(Vl)
      , u = S.useContext(ph)
      , c = u.reducedMotion
      , d = u.skipAnimations
      , f = S.useRef(null)
      , h = S.useRef(!1);
    r = r || a.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: s
    }),
    h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
    const x = f.current
      , y = S.useContext(ww);
    x && !x.projection && i && (x.type === "html" || x.type === "svg") && WM(f.current, n, i, y);
    const w = S.useRef(!1);
    S.useInsertionEffect( () => {
        x && w.current && x.update(n, l)
    }
    );
    const g = n[R1]
      , p = S.useRef(!!g && typeof window < "u" && !((v = window.MotionHandoffIsComplete) != null && v.call(window, g)) && ((b = window.MotionHasOptimisedAnimation) == null ? void 0 : b.call(window, g)));
    return Bx( () => {
        h.current = !0,
        x && (w.current = !0,
        window.MotionIsMounted = !0,
        x.updateFeatures(),
        x.scheduleRenderMicrotask(),
        p.current && x.animationState && x.animationState.animateChanges())
    }
    ),
    S.useEffect( () => {
        x && (!p.current && x.animationState && x.animationState.animateChanges(),
        p.current && (queueMicrotask( () => {
            var C;
            (C = window.MotionHandoffMarkAsComplete) == null || C.call(window, g)
        }
        ),
        p.current = !1),
        x.enteringChildren = void 0)
    }
    ),
    x
}
function WM(e, t, n, r) {
    const {layoutId: i, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : Sw(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || a && Jr(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        crossfade: c,
        layoutScroll: l,
        layoutRoot: u
    })
}
function Sw(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : Sw(e.parent)
}
function zu(e, {forwardMotionProps: t=!1, type: n}={}, r, i) {
    r && TM(r);
    const s = n ? n === "svg" : gh(e)
      , o = s ? zM : _M;
    function a(u, c) {
        let d;
        const f = {
            ...S.useContext(ph),
            ...u,
            layoutId: HM(u)
        }
          , {isStatic: h} = f
          , x = NM(u)
          , y = o(u, h);
        if (!h && typeof window < "u") {
            KM();
            const w = GM(f);
            d = w.MeasureLayout,
            x.visualElement = UM(e, y, f, i, w.ProjectionNode, s)
        }
        return m.jsxs(Bl.Provider, {
            value: x,
            children: [d && x.visualElement ? m.jsx(d, {
                visualElement: x.visualElement,
                ...f
            }) : null, IM(e, u, $M(y, x.visualElement, c), y, h, t, s)]
        })
    }
    a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const l = S.forwardRef(a);
    return l[BM] = e,
    l
}
function HM({layoutId: e}) {
    const t = S.useContext(Bf).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function KM(e, t) {
    S.useContext(pw).strict
}
function GM(e) {
    const t = mw()
      , {drag: n, layout: r} = t;
    if (!n && !r)
        return {};
    const i = {
        ...n,
        ...r
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
function QM(e, t) {
    if (typeof Proxy > "u")
        return zu;
    const n = new Map
      , r = (s, o) => zu(s, o, e, t)
      , i = (s, o) => r(s, o);
    return new Proxy(i,{
        get: (s, o) => o === "create" ? r : (n.has(o) || n.set(o, zu(o, void 0, e, t)),
        n.get(o))
    })
}
const YM = (e, t) => t.isSVG ?? gh(e) ? new PN(t) : new wN(t,{
    allowProjection: e !== S.Fragment
});
class XM extends hr {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = MN(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        _l(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) == null || t.call(this)
    }
}
let qM = 0;
class ZM extends hr {
    constructor() {
        super(...arguments),
        this.id = qM++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => {
            n(this.id)
        }
        )
    }
    mount() {
        const {register: t, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const JM = {
    animation: {
        Feature: XM
    },
    exit: {
        Feature: ZM
    }
};
function Eo(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const ej = e => t => lh(t) && e(t, Eo(t));
function Ls(e, t, n, r) {
    return lo(e, t, ej(n), r)
}
const bw = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , Eg = (e, t) => Math.abs(e - t);
function tj(e, t) {
    const n = Eg(e.x, t.x)
      , r = Eg(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
const Tg = new Set(["auto", "scroll"]);
class Cw {
    constructor(t, n, {transformPagePoint: r, contextWindow: i=window, dragSnapToOrigin: s=!1, distanceThreshold: o=3, element: a}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = h => {
            this.handleScroll(h.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const h = $u(this.lastMoveEventInfo, this.history)
              , x = this.startEvent !== null
              , y = tj(h.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!x && !y)
                return;
            const {point: w} = h
              , {timestamp: g} = Me;
            this.history.push({
                ...w,
                timestamp: g
            });
            const {onStart: p, onMove: v} = this.handlers;
            x || (p && p(this.lastMoveEvent, h),
            this.startEvent = this.lastMoveEvent),
            v && v(this.lastMoveEvent, h)
        }
        ,
        this.handlePointerMove = (h, x) => {
            this.lastMoveEvent = h,
            this.lastMoveEventInfo = Bu(x, this.transformPagePoint),
            ie.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (h, x) => {
            this.end();
            const {onEnd: y, onSessionEnd: w, resumeAnimation: g} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && g && g(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const p = $u(h.type === "pointercancel" ? this.lastMoveEventInfo : Bu(x, this.transformPagePoint), this.history);
            this.startEvent && y && y(h, p),
            w && w(h, p)
        }
        ,
        !lh(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.distanceThreshold = o,
        this.contextWindow = i || window;
        const l = Eo(t)
          , u = Bu(l, this.transformPagePoint)
          , {point: c} = u
          , {timestamp: d} = Me;
        this.history = [{
            ...c,
            timestamp: d
        }];
        const {onSessionStart: f} = n;
        f && f(t, $u(u, this.history)),
        this.removeListeners = So(Ls(this.contextWindow, "pointermove", this.handlePointerMove), Ls(this.contextWindow, "pointerup", this.handlePointerUp), Ls(this.contextWindow, "pointercancel", this.handlePointerUp)),
        a && this.startScrollTracking(a)
    }
    startScrollTracking(t) {
        let n = t.parentElement;
        for (; n; ) {
            const r = getComputedStyle(n);
            (Tg.has(r.overflowX) || Tg.has(r.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }),
            n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n)
            return;
        const r = t === window
          , i = r ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: t.scrollLeft,
            y: t.scrollTop
        }
          , s = {
            x: i.x - n.x,
            y: i.y - n.y
        };
        s.x === 0 && s.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x,
        this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x,
        this.history[0].y -= s.y),
        this.scrollPositions.set(t, i),
        ie.update(this.updatePoint, !0))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        ur(this.updatePoint)
    }
}
function Bu(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Pg(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function $u({point: e}, t) {
    return {
        point: e,
        delta: Pg(e, Ew(t)),
        offset: Pg(e, nj(t)),
        velocity: rj(t, .1)
    }
}
function nj(e) {
    return e[0]
}
function Ew(e) {
    return e[e.length - 1]
}
function rj(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = Ew(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > St(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    r === e[0] && e.length > 2 && i.timestamp - r.timestamp > St(t) * 2 && (r = e[1]);
    const s = yt(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function ij(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? he(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? he(n, e, r.max) : Math.min(e, n)),
    e
}
function kg(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function sj(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: kg(e.x, n, i),
        y: kg(e.y, t, r)
    }
}
function Rg(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function oj(e, t) {
    return {
        x: Rg(e.x, t.x),
        y: Rg(e.y, t.y)
    }
}
function aj(e, t) {
    let n = .5;
    const r = Ke(e)
      , i = Ke(t);
    return i > r ? n = io(t.min, t.max - r, e.min) : r > i && (n = io(e.min, e.max - i, t.min)),
    nn(0, 1, n)
}
function lj(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const bd = .35;
function uj(e=bd) {
    return e === !1 ? e = 0 : e === !0 && (e = bd),
    {
        x: Ag(e, "left", "right"),
        y: Ag(e, "top", "bottom")
    }
}
function Ag(e, t, n) {
    return {
        min: Ng(e, t),
        max: Ng(e, n)
    }
}
function Ng(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const cj = new WeakMap;
class dj {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Ee(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1, distanceThreshold: r}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const s = d => {
            n && this.snapToCursor(Eo(d).point),
            this.stopAnimation()
        }
          , o = (d, f) => {
            const {drag: h, dragPropagation: x, onDragStart: y} = this.getProps();
            if (h && !x && (this.openDragLock && this.openDragLock(),
            this.openDragLock = _A(h),
            !this.openDragLock))
                return;
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Gt(g => {
                let p = this.getAxisMotionValue(g).get() || 0;
                if (en.test(p)) {
                    const {projection: v} = this.visualElement;
                    if (v && v.layout) {
                        const b = v.layout.layoutBox[g];
                        b && (p = Ke(b) * (parseFloat(p) / 100))
                    }
                }
                this.originPoint[g] = p
            }
            ),
            y && ie.update( () => y(d, f), !1, !0),
            hd(this.visualElement, "transform");
            const {animationState: w} = this.visualElement;
            w && w.setActive("whileDrag", !0)
        }
          , a = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f;
            const {dragPropagation: h, dragDirectionLock: x, onDirectionLock: y, onDrag: w} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: g} = f;
            if (x && this.currentDirection === null) {
                this.currentDirection = hj(g),
                this.currentDirection !== null && y && y(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, g),
            this.updateAxis("y", f.point, g),
            this.visualElement.render(),
            w && ie.update( () => w(d, f), !1, !0)
        }
          , l = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.stop(d, f),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , u = () => {
            const {dragSnapToOrigin: d} = this.getProps();
            (d || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new Cw(t,{
            onSessionStart: s,
            onStart: o,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: r,
            contextWindow: bw(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent
          , i = n || this.latestPanInfo
          , s = this.isDragging;
        if (this.cancel(),
        !s || !i || !r)
            return;
        const {velocity: o} = i;
        this.startAnimation(o);
        const {onDragEnd: a} = this.getProps();
        a && ie.postRender( () => a(r, i))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !ea(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = ij(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        var s;
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout
          , i = this.constraints;
        t && Jr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = sj(r.layoutBox, t) : this.constraints = !1,
        this.elastic = uj(n),
        i !== this.constraints && !Jr(t) && r && this.constraints && !this.hasMutatedConstraints && Gt(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = lj(r.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Jr(t))
            return !1;
        const r = t.current;
        Ui(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = pN(r, i.root, this.visualElement.getTransformPagePoint());
        let o = oj(i.layout.layoutBox, s);
        if (n) {
            const a = n(dN(o));
            this.hasMutatedConstraints = !!a,
            a && (o = H1(a))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = Gt(c => {
            if (!ea(c, n, this.currentDirection))
                return;
            let d = l && l[c] || {};
            o && (d = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6
              , h = i ? 40 : 1e7
              , x = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...d
            };
            return this.startAxisValueAnimation(c, x)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return hd(this.visualElement, t),
        r.start(rh(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Gt(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Gt(n => {
            const {drag: r} = this.getProps();
            if (!ea(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: a} = i.layout.layoutBox[n]
                  , l = s.get() || 0;
                s.set(t[n] - he(o, a, .5) + l)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Jr(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Gt(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[o] = aj({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.constraints = !1,
        this.resolveConstraints(),
        Gt(o => {
            if (!ea(o, t, null))
                return;
            const a = this.getAxisMotionValue(o)
              , {min: l, max: u} = this.constraints[o];
            a.set(he(l, u, i[o]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        cj.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Ls(t, "pointerdown", u => {
            const {drag: c, dragListener: d=!0} = this.getProps()
              , f = u.target
              , h = f !== t && HA(f);
            c && d && !h && this.start(u)
        }
        );
        let r;
        const i = () => {
            const {dragConstraints: u} = this.getProps();
            Jr(u) && u.current && (this.constraints = this.resolveRefConstraints(),
            r || (r = fj(t, u.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: s} = this.visualElement
          , o = s.addEventListener("measure", i);
        s && !s.layout && (s.root && s.root.updateScroll(),
        s.updateLayout()),
        ie.read(i);
        const a = lo(window, "resize", () => this.scalePositionWithinConstraints())
          , l = s.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: c}) => {
            this.isDragging && c && (Gt(d => {
                const f = this.getAxisMotionValue(d);
                f && (this.originPoint[d] += u[d].translate,
                f.set(f.get() + u[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            a(),
            n(),
            o(),
            l && l(),
            r && r()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=bd, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: a
        }
    }
}
function Mg(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return
        }
        e()
    }
}
function fj(e, t, n) {
    const r = Vm(e, Mg(n))
      , i = Vm(t, Mg(n));
    return () => {
        r(),
        i()
    }
}
function ea(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function hj(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class pj extends hr {
    constructor(t) {
        super(t),
        this.removeGroupControls = wt,
        this.removeListeners = wt,
        this.controls = new dj(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || wt
    }
    update() {
        const {dragControls: t} = this.node.getProps()
          , {dragControls: n} = this.node.prevProps || {};
        t !== n && (this.removeGroupControls(),
        t && (this.removeGroupControls = t.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const Uu = e => (t, n) => {
    e && ie.update( () => e(t, n), !1, !0)
}
;
class mj extends hr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = wt
    }
    onPointerDown(t) {
        this.session = new Cw(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: bw(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: Uu(t),
            onStart: Uu(n),
            onMove: Uu(r),
            onEnd: (s, o) => {
                delete this.session,
                i && ie.postRender( () => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Ls(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let Wu = !1;
class gj extends S.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        Wu && s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        Sa.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , {projection: o} = r;
        return o && (o.isPresent = s,
        t.layoutDependency !== n && o.setOptions({
            ...o.options,
            layoutDependency: n
        }),
        Wu = !0,
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || ie.postRender( () => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        ah.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        Wu = !0,
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function Tw(e) {
    const [t,n] = hw()
      , r = S.useContext(Bf);
    return m.jsx(gj, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: S.useContext(ww),
        isPresent: t,
        safeToRemove: n
    })
}
const yj = {
    pan: {
        Feature: mj
    },
    drag: {
        Feature: pj,
        ProjectionNode: fw,
        MeasureLayout: Tw
    }
};
function jg(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , s = r[i];
    s && ie.postRender( () => s(t, Eo(t)))
}
class vj extends hr {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = BA(t, (n, r) => (jg(this.node, r, "Start"),
        i => jg(this.node, i, "End"))))
    }
    unmount() {}
}
class xj extends hr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = So(lo(this.node.current, "focus", () => this.onFocus()), lo(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Dg(e, t, n) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , s = r[i];
    s && ie.postRender( () => s(t, Eo(t)))
}
class wj extends hr {
    mount() {
        const {current: t} = this.node;
        if (!t)
            return;
        const {globalTapTarget: n, propagate: r} = this.node.props;
        this.unmount = GA(t, (i, s) => (Dg(this.node, s, "Start"),
        (o, {success: a}) => Dg(this.node, o, a ? "End" : "Cancel")), {
            useGlobalTarget: n,
            stopPropagation: (r == null ? void 0 : r.tap) === !1
        })
    }
    unmount() {}
}
const Cd = new WeakMap
  , Hu = new WeakMap
  , Sj = e => {
    const t = Cd.get(e.target);
    t && t(e)
}
  , bj = e => {
    e.forEach(Sj)
}
;
function Cj({root: e, ...t}) {
    const n = e || document;
    Hu.has(n) || Hu.set(n, {});
    const r = Hu.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(bj,{
        root: e,
        ...t
    })),
    r[i]
}
function Ej(e, t, n) {
    const r = Cj(t);
    return Cd.set(e, n),
    r.observe(e),
    () => {
        Cd.delete(e),
        r.unobserve(e)
    }
}
const Tj = {
    some: 0,
    all: 1
};
class Pj extends hr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : Tj[i]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            s && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: d} = this.node.getProps()
              , f = u ? c : d;
            f && f(l)
        }
        ;
        return Ej(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(kj(t, n)) && this.startObserver()
    }
    unmount() {}
}
function kj({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const Rj = {
    inView: {
        Feature: Pj
    },
    tap: {
        Feature: wj
    },
    focus: {
        Feature: xj
    },
    hover: {
        Feature: vj
    }
}
  , Aj = {
    layout: {
        ProjectionNode: fw,
        MeasureLayout: Tw
    }
}
  , Nj = {
    ...JM,
    ...Rj,
    ...yj,
    ...Aj
}
  , ce = QM(Nj, YM)
  , Lg = [{
    label: "Home",
    path: "/"
}, {
    label: "Cars",
    path: "/cars"
}, {
    label: "About",
    path: "/about"
}, {
    label: "Contact",
    path: "/contact"
}]
  , Mj = () => {
    const [e,t] = S.useState(!1)
      , n = Zi();
    return m.jsxs("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50",
        children: [m.jsx("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: m.jsxs("div", {
                className: "flex items-center justify-between h-20",
                children: [m.jsx(st, {
                    to: "/",
                    className: "flex items-center gap-2",
                    children: m.jsx("span", {
                        className: "text-2xl font-display font-bold text-gradient-gold",
                        children: "Golden Key"
                    })
                }), m.jsx("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: Lg.map(r => m.jsx(st, {
                        to: r.path,
                        className: `text-sm font-medium transition-colors duration-300 ${n.pathname === r.path ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
                        children: r.label
                    }, r.path))
                }), m.jsxs("div", {
                    className: "hidden md:flex items-center gap-4",
                    children: [m.jsxs("a", {
                        href: "tel:+971000000000",
                        className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors",
                        children: [m.jsx(Pf, {
                            className: "w-4 h-4"
                        }), m.jsx("span", {
                            children: "+971 00 000 0000"
                        })]
                    }), m.jsx(xt, {
                        variant: "hero",
                        size: "default",
                        asChild: !0,
                        children: m.jsx(st, {
                            to: "/cars",
                            children: "Book Now"
                        })
                    })]
                }), m.jsx("button", {
                    onClick: () => t(!e),
                    className: "md:hidden text-foreground p-2",
                    children: e ? m.jsx(kf, {
                        className: "w-6 h-6"
                    }) : m.jsx(yE, {
                        className: "w-6 h-6"
                    })
                })]
            })
        }), m.jsx(CM, {
            children: e && m.jsx(ce.div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                className: "md:hidden bg-background border-b border-border",
                children: m.jsxs("div", {
                    className: "container mx-auto px-4 py-6 flex flex-col gap-4",
                    children: [Lg.map(r => m.jsx(st, {
                        to: r.path,
                        onClick: () => t(!1),
                        className: `text-lg font-medium py-2 ${n.pathname === r.path ? "text-primary" : "text-muted-foreground"}`,
                        children: r.label
                    }, r.path)), m.jsx(xt, {
                        variant: "hero",
                        size: "lg",
                        className: "mt-2",
                        asChild: !0,
                        children: m.jsx(st, {
                            to: "/cars",
                            onClick: () => t(!1),
                            children: "Book Now"
                        })
                    })]
                })
            })
        })]
    })
}
  , jj = () => m.jsx("footer", {
    className: "bg-secondary border-t border-border",
    children: m.jsxs("div", {
        className: "container mx-auto px-4 lg:px-8 py-16",
        children: [m.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",
            children: [m.jsxs("div", {
                children: [m.jsx("h3", {
                    className: "text-2xl font-display font-bold text-gradient-gold mb-4",
                    children: "Golden Key"
                }), m.jsx("p", {
                    className: "text-muted-foreground text-sm leading-relaxed",
                    children: "Premium car rental experience in the UAE. Luxury vehicles, exceptional service, unforgettable journeys."
                })]
            }), m.jsxs("div", {
                children: [m.jsx("h4", {
                    className: "font-display font-semibold text-foreground mb-4",
                    children: "Quick Links"
                }), m.jsx("ul", {
                    className: "space-y-3",
                    children: ["Home", "Cars", "About Us", "Contact", "FAQ"].map(e => m.jsx("li", {
                        children: m.jsx(st, {
                            to: "/",
                            className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                            children: e
                        })
                    }, e))
                })]
            }), m.jsxs("div", {
                children: [m.jsx("h4", {
                    className: "font-display font-semibold text-foreground mb-4",
                    children: "Legal"
                }), m.jsx("ul", {
                    className: "space-y-3",
                    children: ["Terms & Conditions", "Privacy Policy", "Cancellation Policy"].map(e => m.jsx("li", {
                        children: m.jsx(st, {
                            to: "/",
                            className: "text-sm text-muted-foreground hover:text-primary transition-colors",
                            children: e
                        })
                    }, e))
                })]
            }), m.jsxs("div", {
                children: [m.jsx("h4", {
                    className: "font-display font-semibold text-foreground mb-4",
                    children: "Contact Us"
                }), m.jsxs("ul", {
                    className: "space-y-3",
                    children: [m.jsxs("li", {
                        className: "flex items-center gap-3 text-sm text-muted-foreground",
                        children: [m.jsx(Pf, {
                            className: "w-4 h-4 text-primary"
                        }), "+971 00 000 0000"]
                    }), m.jsxs("li", {
                        className: "flex items-center gap-3 text-sm text-muted-foreground",
                        children: [m.jsx(I0, {
                            className: "w-4 h-4 text-primary"
                        }), "info@goldenkey.ae"]
                    }), m.jsxs("li", {
                        className: "flex items-start gap-3 text-sm text-muted-foreground",
                        children: [m.jsx(Tf, {
                            className: "w-4 h-4 text-primary mt-0.5"
                        }), "Dubai, United Arab Emirates"]
                    })]
                })]
            })]
        }), m.jsx("div", {
            className: "border-t border-border mt-12 pt-8 text-center",
            children: m.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "© 2026 Golden Key Car Rental L.L.C. All rights reserved."
            })
        })]
    })
})
  , $l = ({children: e}) => m.jsxs("div", {
    className: "min-h-screen flex flex-col",
    children: [m.jsx(Mj, {}), m.jsx("main", {
        className: "flex-1 pt-20",
        children: e
    }), m.jsx(jj, {})]
})
  , Dj = "/assets/hero-car-DsP6eL7z.jpg"
  , Lj = () => m.jsxs("section", {
    className: "relative min-h-[90vh] flex items-center overflow-hidden",
    children: [m.jsxs("div", {
        className: "absolute inset-0",
        children: [m.jsx("img", {
            src: Dj,
            alt: "Premium luxury car",
            className: "w-full h-full object-cover"
        }), m.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"
        }), m.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
        })]
    }), m.jsxs("div", {
        className: "container mx-auto px-4 lg:px-8 relative z-10",
        children: [m.jsxs("div", {
            className: "max-w-2xl",
            children: [m.jsx(ce.p, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                className: "text-primary text-sm font-medium tracking-[0.3em] uppercase mb-4",
                children: "Golden Key Car Rental"
            }), m.jsxs(ce.h1, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    delay: .1
                },
                className: "text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6",
                children: ["Premium Car", " ", m.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Rental"
                }), " ", "Experience"]
            }), m.jsx(ce.p, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    delay: .2
                },
                className: "text-lg text-muted-foreground mb-8 max-w-lg",
                children: "Discover luxury vehicles at competitive prices. From elegant sedans to powerful SUVs — your perfect ride awaits."
            }), m.jsxs(ce.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6,
                    delay: .3
                },
                className: "flex gap-4",
                children: [m.jsx(xt, {
                    variant: "hero",
                    size: "xl",
                    asChild: !0,
                    children: m.jsx(st, {
                        to: "/cars",
                        children: "Browse Cars"
                    })
                }), m.jsx(xt, {
                    variant: "outline-gold",
                    size: "xl",
                    asChild: !0,
                    children: m.jsx(st, {
                        to: "/contact",
                        children: "Contact Us"
                    })
                })]
            })]
        }), m.jsx(ce.div, {
            initial: {
                opacity: 0,
                y: 40
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .7,
                delay: .5
            },
            className: "mt-16 bg-card/80 backdrop-blur-xl border border-border rounded-xl p-6",
            children: m.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end",
                children: [m.jsxs("div", {
                    children: [m.jsx("label", {
                        className: "text-xs text-muted-foreground mb-1.5 block",
                        children: "Pick-up Location"
                    }), m.jsxs("div", {
                        className: "flex items-center gap-2 bg-secondary rounded-lg px-3 py-2.5",
                        children: [m.jsx(Tf, {
                            className: "w-4 h-4 text-primary"
                        }), m.jsx("input", {
                            type: "text",
                            placeholder: "Dubai, UAE",
                            className: "bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
                        })]
                    })]
                }), m.jsxs("div", {
                    children: [m.jsx("label", {
                        className: "text-xs text-muted-foreground mb-1.5 block",
                        children: "Pick-up Date"
                    }), m.jsxs("div", {
                        className: "flex items-center gap-2 bg-secondary rounded-lg px-3 py-2.5",
                        children: [m.jsx(zp, {
                            className: "w-4 h-4 text-primary"
                        }), m.jsx("input", {
                            type: "date",
                            className: "bg-transparent text-sm text-foreground outline-none w-full"
                        })]
                    })]
                }), m.jsxs("div", {
                    children: [m.jsx("label", {
                        className: "text-xs text-muted-foreground mb-1.5 block",
                        children: "Return Date"
                    }), m.jsxs("div", {
                        className: "flex items-center gap-2 bg-secondary rounded-lg px-3 py-2.5",
                        children: [m.jsx(zp, {
                            className: "w-4 h-4 text-primary"
                        }), m.jsx("input", {
                            type: "date",
                            className: "bg-transparent text-sm text-foreground outline-none w-full"
                        })]
                    })]
                }), m.jsxs("div", {
                    children: [m.jsx("label", {
                        className: "text-xs text-muted-foreground mb-1.5 block",
                        children: "Pick-up Time"
                    }), m.jsxs("div", {
                        className: "flex items-center gap-2 bg-secondary rounded-lg px-3 py-2.5",
                        children: [m.jsx(Rl, {
                            className: "w-4 h-4 text-primary"
                        }), m.jsx("input", {
                            type: "time",
                            className: "bg-transparent text-sm text-foreground outline-none w-full"
                        })]
                    })]
                }), m.jsxs(xt, {
                    variant: "hero",
                    size: "lg",
                    className: "w-full",
                    children: [m.jsx(xE, {
                        className: "w-4 h-4 mr-2"
                    }), "Search"]
                })]
            })
        })]
    })]
})
  , Ul = [{
    id: "1",
    name: "Range Rover Vogue",
    brand: "Land Rover",
    type: "SUV",
    year: 2024,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 450,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
    rating: 4.9,
    available: !0,
    features: ["Bluetooth", "GPS", "AC", "Cruise Control", "Leather Seats"],
    mileage: "250 km/day"
}, {
    id: "2",
    name: "Mercedes S-Class",
    brand: "Mercedes",
    type: "Sedan",
    year: 2024,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 550,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
    rating: 4.8,
    available: !0,
    features: ["Bluetooth", "GPS", "AC", "Massage Seats", "Night Vision"],
    mileage: "300 km/day"
}, {
    id: "3",
    name: "BMW X7",
    brand: "BMW",
    type: "SUV",
    year: 2024,
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    pricePerDay: 400,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    rating: 4.7,
    available: !0,
    features: ["Bluetooth", "GPS", "AC", "Panoramic Roof", "Heated Seats"],
    mileage: "250 km/day"
}, {
    id: "4",
    name: "Porsche 911 Carrera",
    brand: "Porsche",
    type: "Sports",
    year: 2024,
    seats: 2,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 800,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    rating: 5,
    available: !0,
    features: ["Bluetooth", "GPS", "AC", "Sport Mode", "Carbon Fiber"],
    mileage: "200 km/day"
}, {
    id: "5",
    name: "Audi Q8",
    brand: "Audi",
    type: "SUV",
    year: 2024,
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    pricePerDay: 380,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
    rating: 4.6,
    available: !1,
    features: ["Bluetooth", "GPS", "AC", "Matrix LED", "Virtual Cockpit"],
    mileage: "300 km/day"
}, {
    id: "6",
    name: "Rolls Royce Ghost",
    brand: "Rolls Royce",
    type: "Sedan",
    year: 2024,
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 1500,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80",
    rating: 5,
    available: !0,
    features: ["Bluetooth", "GPS", "AC", "Starlight Ceiling", "Champagne Cooler"],
    mileage: "Unlimited"
}]
  , Pw = ({car: e, index: t=0}) => m.jsxs(ce.div, {
    initial: {
        opacity: 0,
        y: 30
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: !0
    },
    transition: {
        duration: .5,
        delay: t * .1
    },
    className: "group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500",
    children: [m.jsxs("div", {
        className: "relative overflow-hidden aspect-[16/10]",
        children: [m.jsx("img", {
            src: e.image,
            alt: e.name,
            className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",
            loading: "lazy"
        }), !e.available && m.jsx("div", {
            className: "absolute inset-0 bg-background/70 flex items-center justify-center",
            children: m.jsx("span", {
                className: "text-sm font-medium text-muted-foreground",
                children: "Not Available"
            })
        }), m.jsxs("div", {
            className: "absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1",
            children: [m.jsx(F0, {
                className: "w-3.5 h-3.5 fill-primary text-primary"
            }), m.jsx("span", {
                className: "text-xs font-medium text-foreground",
                children: e.rating
            })]
        })]
    }), m.jsxs("div", {
        className: "p-5",
        children: [m.jsx("p", {
            className: "text-xs text-muted-foreground uppercase tracking-wider mb-1",
            children: e.brand
        }), m.jsx("h3", {
            className: "font-display text-lg font-semibold text-foreground mb-3",
            children: e.name
        }), m.jsxs("div", {
            className: "flex items-center gap-4 text-xs text-muted-foreground mb-4",
            children: [m.jsxs("span", {
                className: "flex items-center gap-1",
                children: [m.jsx(_0, {
                    className: "w-3.5 h-3.5"
                }), " ", e.seats, " Seats"]
            }), m.jsxs("span", {
                className: "flex items-center gap-1",
                children: [m.jsx(gE, {
                    className: "w-3.5 h-3.5"
                }), " ", e.fuel]
            }), m.jsx("span", {
                children: e.transmission
            })]
        }), m.jsxs("div", {
            className: "flex items-center justify-between",
            children: [m.jsxs("div", {
                children: [m.jsxs("span", {
                    className: "text-xl font-bold text-gradient-gold",
                    children: ["AED ", e.pricePerDay]
                }), m.jsx("span", {
                    className: "text-xs text-muted-foreground",
                    children: " /day"
                })]
            }), m.jsx(xt, {
                variant: "outline-gold",
                size: "sm",
                asChild: !0,
                disabled: !e.available,
                children: m.jsx(st, {
                    to: `/cars/${e.id}`,
                    children: "View Details"
                })
            })]
        })]
    })]
})
  , Oj = () => {
    const e = Ul.filter(t => t.available).slice(0, 4);
    return m.jsx("section", {
        className: "py-24 bg-gradient-dark",
        children: m.jsxs("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: [m.jsxs(ce.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-16",
                children: [m.jsx("p", {
                    className: "text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3",
                    children: "Our Fleet"
                }), m.jsxs("h2", {
                    className: "text-3xl md:text-5xl font-display font-bold text-foreground",
                    children: ["Featured ", m.jsx("span", {
                        className: "text-gradient-gold",
                        children: "Vehicles"
                    })]
                })]
            }), m.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                children: e.map( (t, n) => m.jsx(Pw, {
                    car: t,
                    index: n
                }, t.id))
            }), m.jsx(ce.div, {
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0
                },
                className: "text-center mt-12",
                children: m.jsx(xt, {
                    variant: "outline-gold",
                    size: "lg",
                    asChild: !0,
                    children: m.jsxs(st, {
                        to: "/cars",
                        children: ["View All Cars ", m.jsx(fE, {
                            className: "w-4 h-4 ml-2"
                        })]
                    })
                })
            })]
        })
    })
}
  , Ij = [{
    icon: V0,
    title: "Premium Vehicles",
    desc: "Handpicked luxury fleet maintained to the highest standards."
}, {
    icon: bE,
    title: "Instant Booking",
    desc: "Seamless online booking with instant confirmation."
}, {
    icon: Rl,
    title: "24/7 Support",
    desc: "Round-the-clock assistance for a worry-free experience."
}, {
    icon: O0,
    title: "Flexible Pricing",
    desc: "Competitive rates with no hidden fees or charges."
}]
  , Vj = () => m.jsx("section", {
    className: "py-24 bg-secondary",
    children: m.jsxs("div", {
        className: "container mx-auto px-4 lg:px-8",
        children: [m.jsxs(ce.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-16",
            children: [m.jsx("p", {
                className: "text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3",
                children: "Why Us"
            }), m.jsxs("h2", {
                className: "text-3xl md:text-5xl font-display font-bold text-foreground",
                children: ["Why Choose ", m.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Golden Key"
                })]
            })]
        }), m.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
            children: Ij.map( (e, t) => m.jsxs(ce.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .1
                },
                className: "text-center p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-500",
                children: [m.jsx("div", {
                    className: "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5",
                    children: m.jsx(e.icon, {
                        className: "w-6 h-6 text-primary"
                    })
                }), m.jsx("h3", {
                    className: "font-display text-lg font-semibold text-foreground mb-2",
                    children: e.title
                }), m.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: e.desc
                })]
            }, e.title))
        })]
    })
})
  , Fj = [{
    icon: mE,
    label: "Choose Car",
    num: "01"
}, {
    icon: pE,
    label: "Select Dates",
    num: "02"
}, {
    icon: vE,
    label: "Add Extras",
    num: "03"
}, {
    icon: O0,
    label: "Secure Payment",
    num: "04"
}, {
    icon: SE,
    label: "Enjoy Your Ride",
    num: "05"
}]
  , _j = () => m.jsx("section", {
    className: "py-24 bg-gradient-dark",
    children: m.jsxs("div", {
        className: "container mx-auto px-4 lg:px-8",
        children: [m.jsxs(ce.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-16",
            children: [m.jsx("p", {
                className: "text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3",
                children: "Process"
            }), m.jsxs("h2", {
                className: "text-3xl md:text-5xl font-display font-bold text-foreground",
                children: ["How It ", m.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Works"
                })]
            })]
        }), m.jsx("div", {
            className: "flex flex-col md:flex-row items-center justify-between gap-8",
            children: Fj.map( (e, t) => m.jsxs(ce.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .12
                },
                className: "flex flex-col items-center text-center flex-1",
                children: [m.jsxs("div", {
                    className: "relative mb-4",
                    children: [m.jsx("div", {
                        className: "w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center",
                        children: m.jsx(e.icon, {
                            className: "w-8 h-8 text-primary"
                        })
                    }), m.jsx("span", {
                        className: "absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-gold text-primary-foreground text-xs font-bold flex items-center justify-center",
                        children: e.num
                    })]
                }), m.jsx("h3", {
                    className: "font-display font-semibold text-foreground",
                    children: e.label
                })]
            }, e.label))
        })]
    })
})
  , zj = [{
    name: "Ahmed Al Maktoum",
    text: "Outstanding service and impeccable vehicles. Golden Key made my trip unforgettable.",
    rating: 5
}, {
    name: "Sarah Johnson",
    text: "The booking process was seamless. The car was in perfect condition. Highly recommended!",
    rating: 5
}, {
    name: "Mohammed Hassan",
    text: "Best car rental experience in Dubai. Premium cars, fair prices, excellent support.",
    rating: 5
}]
  , Bj = () => m.jsx("section", {
    className: "py-24 bg-secondary",
    children: m.jsxs("div", {
        className: "container mx-auto px-4 lg:px-8",
        children: [m.jsxs(ce.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center mb-16",
            children: [m.jsx("p", {
                className: "text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3",
                children: "Testimonials"
            }), m.jsxs("h2", {
                className: "text-3xl md:text-5xl font-display font-bold text-foreground",
                children: ["What Our Clients ", m.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Say"
                })]
            })]
        }), m.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
            children: zj.map( (e, t) => m.jsxs(ce.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: t * .1
                },
                className: "bg-card border border-border rounded-xl p-8",
                children: [m.jsx("div", {
                    className: "flex gap-1 mb-4",
                    children: Array.from({
                        length: e.rating
                    }).map( (n, r) => m.jsx(F0, {
                        className: "w-4 h-4 fill-primary text-primary"
                    }, r))
                }), m.jsxs("p", {
                    className: "text-foreground text-sm leading-relaxed mb-6",
                    children: ['"', e.text, '"']
                }), m.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [m.jsx("div", {
                        className: "w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm",
                        children: e.name.charAt(0)
                    }), m.jsx("span", {
                        className: "font-medium text-sm text-foreground",
                        children: e.name
                    })]
                })]
            }, e.name))
        })]
    })
})
  , $j = () => m.jsxs("section", {
    className: "py-24 bg-gradient-dark relative overflow-hidden",
    children: [m.jsx("div", {
        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]"
    }), m.jsx("div", {
        className: "container mx-auto px-4 lg:px-8 relative z-10",
        children: m.jsxs(ce.div, {
            initial: {
                opacity: 0,
                y: 30
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            className: "text-center max-w-2xl mx-auto",
            children: [m.jsxs("h2", {
                className: "text-3xl md:text-5xl font-display font-bold text-foreground mb-6",
                children: ["Ready to ", m.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Drive"
                }), "?"]
            }), m.jsx("p", {
                className: "text-muted-foreground text-lg mb-10",
                children: "Book your premium vehicle today and experience the Golden Key difference. Early payment discounts available."
            }), m.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [m.jsx(xt, {
                    variant: "hero",
                    size: "xl",
                    asChild: !0,
                    children: m.jsx(st, {
                        to: "/cars",
                        children: "Book Your Car Now"
                    })
                }), m.jsx(xt, {
                    variant: "outline-gold",
                    size: "xl",
                    asChild: !0,
                    children: m.jsx(st, {
                        to: "/contact",
                        children: "WhatsApp Inquiry"
                    })
                })]
            })]
        })
    })]
})
  , Uj = () => m.jsxs($l, {
    children: [m.jsx(Lj, {}), m.jsx(Oj, {}), m.jsx(Vj, {}), m.jsx(_j, {}), m.jsx(Bj, {}), m.jsx($j, {})]
})
  , Wj = ["All", ...new Set(Ul.map(e => e.brand))]
  , Hj = ["All", ...new Set(Ul.map(e => e.type))]
  , Kj = ["All", "Automatic", "Manual"]
  , Gj = ["All", "Petrol", "Diesel", "Electric", "Hybrid"]
  , Qj = () => {
    const [e,t] = S.useState("All")
      , [n,r] = S.useState("All")
      , [i,s] = S.useState("All")
      , [o,a] = S.useState("All")
      , [l,u] = S.useState(!1)
      , c = S.useMemo( () => Ul.filter(f => !(e !== "All" && f.brand !== e || n !== "All" && f.type !== n || i !== "All" && f.transmission !== i || o !== "All" && f.fuel !== o)), [e, n, i, o])
      , d = ({label: f, value: h, onChange: x, options: y}) => m.jsxs("div", {
        children: [m.jsx("label", {
            className: "text-xs text-muted-foreground mb-1.5 block",
            children: f
        }), m.jsx("select", {
            value: h,
            onChange: w => x(w.target.value),
            className: "w-full bg-secondary text-foreground text-sm rounded-lg px-3 py-2.5 border border-border outline-none focus:border-primary",
            children: y.map(w => m.jsx("option", {
                value: w,
                children: w
            }, w))
        })]
    });
    return m.jsx($l, {
        children: m.jsx("section", {
            className: "py-12 bg-gradient-dark min-h-screen",
            children: m.jsxs("div", {
                className: "container mx-auto px-4 lg:px-8",
                children: [m.jsxs(ce.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "text-center mb-12",
                    children: [m.jsx("p", {
                        className: "text-primary text-sm font-medium tracking-[0.3em] uppercase mb-3",
                        children: "Our Fleet"
                    }), m.jsxs("h1", {
                        className: "text-3xl md:text-5xl font-display font-bold text-foreground",
                        children: ["Explore Our ", m.jsx("span", {
                            className: "text-gradient-gold",
                            children: "Collection"
                        })]
                    })]
                }), m.jsx("div", {
                    className: "lg:hidden mb-6",
                    children: m.jsxs(xt, {
                        variant: "outline-gold",
                        onClick: () => u(!l),
                        children: [l ? m.jsx(kf, {
                            className: "w-4 h-4 mr-2"
                        }) : m.jsx(wE, {
                            className: "w-4 h-4 mr-2"
                        }), l ? "Hide Filters" : "Filters"]
                    })
                }), m.jsxs("div", {
                    className: "flex gap-8",
                    children: [m.jsx("aside", {
                        className: `${l ? "block" : "hidden"} lg:block w-full lg:w-64 shrink-0`,
                        children: m.jsxs("div", {
                            className: "bg-card border border-border rounded-xl p-6 space-y-5 sticky top-28",
                            children: [m.jsx("h3", {
                                className: "font-display font-semibold text-foreground",
                                children: "Filters"
                            }), m.jsx(d, {
                                label: "Brand",
                                value: e,
                                onChange: t,
                                options: Wj
                            }), m.jsx(d, {
                                label: "Type",
                                value: n,
                                onChange: r,
                                options: Hj
                            }), m.jsx(d, {
                                label: "Transmission",
                                value: i,
                                onChange: s,
                                options: Kj
                            }), m.jsx(d, {
                                label: "Fuel",
                                value: o,
                                onChange: a,
                                options: Gj
                            })]
                        })
                    }), m.jsxs("div", {
                        className: "flex-1",
                        children: [m.jsxs("p", {
                            className: "text-sm text-muted-foreground mb-6",
                            children: [c.length, " vehicles found"]
                        }), m.jsx("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6",
                            children: c.map( (f, h) => m.jsx(Pw, {
                                car: f,
                                index: h
                            }, f.id))
                        }), c.length === 0 && m.jsx("div", {
                            className: "text-center py-20",
                            children: m.jsx("p", {
                                className: "text-muted-foreground",
                                children: "No cars match your filters."
                            })
                        })]
                    })]
                })]
            })
        })
    })
}
  , Yj = [{
    icon: V0,
    title: "Trust & Safety",
    description: "Every vehicle undergoes rigorous inspection and maintenance to ensure your safety on every journey."
}, {
    icon: hE,
    title: "Premium Quality",
    description: "We curate only the finest luxury and performance vehicles from the world's most prestigious brands."
}, {
    icon: _0,
    title: "Customer First",
    description: "Our dedicated team provides personalized service tailored to your unique travel needs."
}, {
    icon: Rl,
    title: "24/7 Support",
    description: "Round-the-clock assistance ensures you're never alone, whether it's day or night."
}]
  , Xj = () => m.jsxs($l, {
    children: [m.jsx("section", {
        className: "relative py-24 lg:py-32 bg-secondary",
        children: m.jsxs("div", {
            className: "container mx-auto px-4 lg:px-8 text-center",
            children: [m.jsxs(ce.h1, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "text-4xl lg:text-6xl font-display font-bold mb-6",
                children: ["About ", m.jsx("span", {
                    className: "text-gradient-gold",
                    children: "Golden Key"
                })]
            }), m.jsx(ce.p, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: .1
                },
                className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                children: "Delivering premium car rental experiences across the UAE since 2020. We combine luxury vehicles with exceptional service."
            })]
        })
    }), m.jsx("section", {
        className: "py-20",
        children: m.jsx("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: m.jsxs("div", {
                className: "max-w-3xl mx-auto text-center",
                children: [m.jsx("h2", {
                    className: "text-3xl font-display font-bold mb-6",
                    children: "Our Story"
                }), m.jsx("p", {
                    className: "text-muted-foreground leading-relaxed mb-4",
                    children: "Golden Key Car Rental was founded with a vision to redefine the car rental experience in the UAE. We believe that every journey deserves a vehicle that matches the ambition of the driver."
                }), m.jsx("p", {
                    className: "text-muted-foreground leading-relaxed",
                    children: "From sleek sports cars to spacious luxury SUVs, our fleet is meticulously maintained to deliver performance, comfort, and style on every trip."
                })]
            })
        })
    }), m.jsx("section", {
        className: "py-20 bg-secondary",
        children: m.jsxs("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: [m.jsx("h2", {
                className: "text-3xl font-display font-bold text-center mb-12",
                children: "Our Values"
            }), m.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: Yj.map( (e, t) => m.jsxs(ce.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: t * .1
                    },
                    className: "text-center p-6",
                    children: [m.jsx("div", {
                        className: "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4",
                        children: m.jsx(e.icon, {
                            className: "w-6 h-6 text-primary"
                        })
                    }), m.jsx("h3", {
                        className: "font-display font-semibold text-lg mb-2",
                        children: e.title
                    }), m.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: e.description
                    })]
                }, e.title))
            })]
        })
    })]
})
  , ba = S.forwardRef( ({className: e, type: t, ...n}, r) => m.jsx("input", {
    type: t,
    className: Wt("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
ba.displayName = "Input";
const kw = S.forwardRef( ({className: e, ...t}, n) => m.jsx("textarea", {
    className: Wt("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: n,
    ...t
}));
kw.displayName = "Textarea";
var qj = "Label"
  , Rw = S.forwardRef( (e, t) => m.jsx(Xe.label, {
    ...e,
    ref: t,
    onMouseDown: n => {
        var i;
        n.target.closest("button, input, select, textarea") || ((i = e.onMouseDown) == null || i.call(e, n),
        !n.defaultPrevented && n.detail > 1 && n.preventDefault())
    }
}));
Rw.displayName = qj;
var Aw = Rw;
const Zj = Ef("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , ws = S.forwardRef( ({className: e, ...t}, n) => m.jsx(Aw, {
    ref: n,
    className: Wt(Zj(), e),
    ...t
}));
ws.displayName = Aw.displayName;
const Jj = [{
    icon: Pf,
    label: "Phone",
    value: "+971 00 000 0000",
    href: "tel:+971000000000"
}, {
    icon: I0,
    label: "Email",
    value: "info@goldenkey.ae",
    href: "mailto:info@goldenkey.ae"
}, {
    icon: Tf,
    label: "Address",
    value: "Dubai, United Arab Emirates"
}, {
    icon: Rl,
    label: "Working Hours",
    value: "24/7 Available"
}]
  , eD = () => {
    const {toast: e} = s0()
      , [t,n] = S.useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
      , r = i => {
        i.preventDefault(),
        e({
            title: "Message Sent",
            description: "We'll get back to you within 24 hours."
        }),
        n({
            name: "",
            email: "",
            phone: "",
            message: ""
        })
    }
    ;
    return m.jsxs($l, {
        children: [m.jsx("section", {
            className: "relative py-24 lg:py-32 bg-secondary",
            children: m.jsxs("div", {
                className: "container mx-auto px-4 lg:px-8 text-center",
                children: [m.jsxs(ce.h1, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "text-4xl lg:text-6xl font-display font-bold mb-6",
                    children: ["Contact ", m.jsx("span", {
                        className: "text-gradient-gold",
                        children: "Us"
                    })]
                }), m.jsx(ce.p, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .1
                    },
                    className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                    children: "Have a question or ready to book? We're here to help."
                })]
            })
        }), m.jsx("section", {
            className: "py-20",
            children: m.jsx("div", {
                className: "container mx-auto px-4 lg:px-8",
                children: m.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16",
                    children: [m.jsxs(ce.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        children: [m.jsx("h2", {
                            className: "text-2xl font-display font-bold mb-6",
                            children: "Send a Message"
                        }), m.jsxs("form", {
                            onSubmit: r,
                            className: "space-y-5",
                            children: [m.jsxs("div", {
                                children: [m.jsx(ws, {
                                    htmlFor: "name",
                                    children: "Full Name"
                                }), m.jsx(ba, {
                                    id: "name",
                                    value: t.name,
                                    onChange: i => n({
                                        ...t,
                                        name: i.target.value
                                    }),
                                    required: !0,
                                    className: "mt-1.5"
                                })]
                            }), m.jsxs("div", {
                                children: [m.jsx(ws, {
                                    htmlFor: "email",
                                    children: "Email"
                                }), m.jsx(ba, {
                                    id: "email",
                                    type: "email",
                                    value: t.email,
                                    onChange: i => n({
                                        ...t,
                                        email: i.target.value
                                    }),
                                    required: !0,
                                    className: "mt-1.5"
                                })]
                            }), m.jsxs("div", {
                                children: [m.jsx(ws, {
                                    htmlFor: "phone",
                                    children: "Phone"
                                }), m.jsx(ba, {
                                    id: "phone",
                                    type: "tel",
                                    value: t.phone,
                                    onChange: i => n({
                                        ...t,
                                        phone: i.target.value
                                    }),
                                    className: "mt-1.5"
                                })]
                            }), m.jsxs("div", {
                                children: [m.jsx(ws, {
                                    htmlFor: "message",
                                    children: "Message"
                                }), m.jsx(kw, {
                                    id: "message",
                                    rows: 5,
                                    value: t.message,
                                    onChange: i => n({
                                        ...t,
                                        message: i.target.value
                                    }),
                                    required: !0,
                                    className: "mt-1.5"
                                })]
                            }), m.jsx(xt, {
                                type: "submit",
                                variant: "hero",
                                size: "lg",
                                children: "Send Message"
                            })]
                        })]
                    }), m.jsxs(ce.div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        children: [m.jsx("h2", {
                            className: "text-2xl font-display font-bold mb-6",
                            children: "Get in Touch"
                        }), m.jsx("div", {
                            className: "space-y-6",
                            children: Jj.map(i => m.jsxs("div", {
                                className: "flex items-start gap-4",
                                children: [m.jsx("div", {
                                    className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0",
                                    children: m.jsx(i.icon, {
                                        className: "w-5 h-5 text-primary"
                                    })
                                }), m.jsxs("div", {
                                    children: [m.jsx("p", {
                                        className: "font-medium text-foreground",
                                        children: i.label
                                    }), i.href ? m.jsx("a", {
                                        href: i.href,
                                        className: "text-muted-foreground hover:text-primary transition-colors",
                                        children: i.value
                                    }) : m.jsx("p", {
                                        className: "text-muted-foreground",
                                        children: i.value
                                    })]
                                })]
                            }, i.label))
                        })]
                    })]
                })
            })
        })]
    })
}
  , tD = () => {
    const e = Zi();
    return S.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    m.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: m.jsxs("div", {
            className: "text-center",
            children: [m.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), m.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), m.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , nD = new jk
  , rD = () => m.jsx(Lk, {
    client: nD,
    children: m.jsxs(lk, {
        children: [m.jsx(iT, {}), m.jsx(IT, {}), m.jsx(M2, {
            children: m.jsxs(E2, {
                children: [m.jsx(Zr, {
                    path: "/",
                    element: m.jsx(Uj, {})
                }), m.jsx(Zr, {
                    path: "/cars",
                    element: m.jsx(Qj, {})
                }), m.jsx(Zr, {
                    path: "/about",
                    element: m.jsx(Xj, {})
                }), m.jsx(Zr, {
                    path: "/contact",
                    element: m.jsx(eD, {})
                }), m.jsx(Zr, {
                    path: "*",
                    element: m.jsx(tD, {})
                })]
            })
        })]
    })
});
i0(document.getElementById("root")).render(m.jsx(rD, {}));
