import {q as Z, a5 as il, h as je, x as se, a6 as it, r as g, H as Ge, a7 as ol, a8 as pn, u as Di, a9 as zi, aa as It, l as ar, d as U, J as ye, k as Y, N as qe, Z as Te, E as r, V as K, ab as _t, ac as Ue, m as sl, ad as lr, ae as ir, A as Ne, n as Se, af as or, $ as xt, ag as rl, ah as Ve, ai as Ye, aj as dt, j as $n, g as O, ak as sr, G as rr, al as ur, am as cr, L as ta, an as dr, ao as vr, Q as Ia, ap as fr, c as mr, aq as gr, ar as hr, as as yr, at as br, au as Sr, av as Cr, aw as kr, ax as Vr, ay as wr, az as xr, aA as Pr, aB as Ir, Y as _r} from "./chunks/framework.22d017dd.js";
import {t as Ar} from "./chunks/theme.c296a5cd.js";
function ht(e, n) {
    let t;
    function a() {
        t = il(),
        t.run(()=>n.length ? n(()=>{
            t == null || t.stop(),
            a()
        }
        ) : n())
    }
    Z(e, l=>{
        l && !t ? a() : l || (t == null || t.stop(),
        t = void 0)
    }
    , {
        immediate: !0
    }),
    je(()=>{
        t == null || t.stop()
    }
    )
}
const ke = typeof window < "u"
  , ul = ke && "IntersectionObserver"in window
  , Br = ke && ("ontouchstart"in window || window.navigator.maxTouchPoints > 0);
function jl(e, n, t) {
    Tr(e, n),
    n.set(e, t)
}
function Tr(e, n) {
    if (n.has(e))
        throw new TypeError("Cannot initialize the same private elements twice on an object")
}
function pr(e, n, t) {
    var a = Ni(e, n, "set");
    return $r(e, a, t),
    t
}
function $r(e, n, t) {
    if (n.set)
        n.set.call(e, t);
    else {
        if (!n.writable)
            throw new TypeError("attempted to set read only private field");
        n.value = t
    }
}
function Et(e, n) {
    var t = Ni(e, n, "get");
    return Er(e, t)
}
function Ni(e, n, t) {
    if (!n.has(e))
        throw new TypeError("attempted to " + t + " private field on non-instance");
    return n.get(e)
}
function Er(e, n) {
    return n.get ? n.get.call(e) : n.value
}
function Hi(e, n, t) {
    const a = n.length - 1;
    if (a < 0)
        return e === void 0 ? t : e;
    for (let l = 0; l < a; l++) {
        if (e == null)
            return t;
        e = e[n[l]]
    }
    return e == null || e[n[a]] === void 0 ? t : e[n[a]]
}
function Nt(e, n) {
    if (e === n)
        return !0;
    if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
        return !1;
    const t = Object.keys(e);
    return t.length !== Object.keys(n).length ? !1 : t.every(a=>Nt(e[a], n[a]))
}
function _a(e, n, t) {
    return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"),
    n = n.replace(/^\./, ""),
    Hi(e, n.split("."), t))
}
function Me(e, n, t) {
    if (n == null)
        return e === void 0 ? t : e;
    if (e !== Object(e)) {
        if (typeof n != "function")
            return t;
        const l = n(e, t);
        return typeof l > "u" ? t : l
    }
    if (typeof n == "string")
        return _a(e, n, t);
    if (Array.isArray(n))
        return Hi(e, n, t);
    if (typeof n != "function")
        return t;
    const a = n(e, t);
    return typeof a > "u" ? t : a
}
function mt(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return Array.from({
        length: e
    }, (t,a)=>n + a)
}
function q(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
    if (!(e == null || e === ""))
        return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0
}
function Aa(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e)
}
function Ba(e) {
    return e && "$el"in e ? e.$el : e
}
const Gl = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34,
    shift: 16
})
  , Ta = Object.freeze({
    enter: "Enter",
    tab: "Tab",
    delete: "Delete",
    esc: "Escape",
    space: "Space",
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
    end: "End",
    home: "Home",
    del: "Delete",
    backspace: "Backspace",
    insert: "Insert",
    pageup: "PageUp",
    pagedown: "PageDown",
    shift: "Shift"
});
function ji(e) {
    return Object.keys(e)
}
function Mt(e, n) {
    return n.every(t=>e.hasOwnProperty(t))
}
function on(e, n, t) {
    const a = Object.create(null)
      , l = Object.create(null);
    for (const i in e)
        n.some(o=>o instanceof RegExp ? o.test(i) : o === i) && !(t != null && t.some(o=>o === i)) ? a[i] = e[i] : l[i] = e[i];
    return [a, l]
}
function vt(e, n) {
    const t = {
        ...e
    };
    return n.forEach(a=>delete t[a]),
    t
}
function Ht(e) {
    return on(e, ["class", "style", "id", /^data-/])
}
function Je(e) {
    return e == null ? [] : Array.isArray(e) ? e : [e]
}
function Oe(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
      , t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    return Math.max(n, Math.min(t, e))
}
function Wl(e) {
    const n = e.toString().trim();
    return n.includes(".") ? n.length - n.indexOf(".") - 1 : 0
}
function Ul(e, n) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
    return e + t.repeat(Math.max(0, n - e.length))
}
function Lr(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    const t = [];
    let a = 0;
    for (; a < e.length; )
        t.push(e.substr(a, n)),
        a += n;
    return t
}
function Yl(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
    if (e < n)
        return `${e} B`;
    const t = n === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
    let a = -1;
    for (; Math.abs(e) >= n && a < t.length - 1; )
        e /= n,
        ++a;
    return `${e.toFixed(1)} ${t[a]}B`
}
function Ze() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , t = arguments.length > 2 ? arguments[2] : void 0;
    const a = {};
    for (const l in e)
        a[l] = e[l];
    for (const l in n) {
        const i = e[l]
          , o = n[l];
        if (Aa(i) && Aa(o)) {
            a[l] = Ze(i, o, t);
            continue
        }
        if (Array.isArray(i) && Array.isArray(o) && t) {
            a[l] = t(i, o);
            continue
        }
        a[l] = o
    }
    return a
}
function Gi(e) {
    return e.map(n=>n.type === se ? Gi(n.children) : n).flat()
}
function Ft() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    if (Ft.cache.has(e))
        return Ft.cache.get(e);
    const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
    return Ft.cache.set(e, n),
    n
}
Ft.cache = new Map;
function kn(e, n) {
    if (!n || typeof n != "object")
        return [];
    if (Array.isArray(n))
        return n.map(t=>kn(e, t)).flat(1);
    if (Array.isArray(n.children))
        return n.children.map(t=>kn(e, t)).flat(1);
    if (n.component) {
        if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
            return [n.component];
        if (n.component.subTree)
            return kn(e, n.component.subTree).flat(1)
    }
    return []
}
var Nn = new WeakMap
  , Kt = new WeakMap;
class Mr {
    constructor(n) {
        jl(this, Nn, {
            writable: !0,
            value: []
        }),
        jl(this, Kt, {
            writable: !0,
            value: 0
        }),
        this.size = n
    }
    push(n) {
        Et(this, Nn)[Et(this, Kt)] = n,
        pr(this, Kt, (Et(this, Kt) + 1) % this.size)
    }
    values() {
        return Et(this, Nn).slice(Et(this, Kt)).concat(Et(this, Nn).slice(0, Et(this, Kt)))
    }
}
function Or(e) {
    return "touches"in e ? {
        clientX: e.touches[0].clientX,
        clientY: e.touches[0].clientY
    } : {
        clientX: e.clientX,
        clientY: e.clientY
    }
}
function cl(e) {
    const n = it({})
      , t = g(e);
    return Ge(()=>{
        for (const a in t.value)
            n[a] = t.value[a]
    }
    , {
        flush: "sync"
    }),
    ol(n)
}
function Kn(e, n) {
    return e.includes(n)
}
const Fr = /^on[^a-z]/
  , dl = e=>Fr.test(e);
function Wi(e) {
    return e[2].toLowerCase() + e.slice(3)
}
const ut = ()=>[Function, Array];
function Kl(e, n) {
    return n = "on" + pn(n),
    !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`])
}
function vl(e) {
    for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
        t[a - 1] = arguments[a];
    if (Array.isArray(e))
        for (const l of e)
            l(...t);
    else
        typeof e == "function" && e(...t)
}
function wn(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map(a=>`${a}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
    return [...e.querySelectorAll(t)]
}
function Ui(e, n, t) {
    let a, l = e.indexOf(document.activeElement);
    const i = n === "next" ? 1 : -1;
    do
        l += i,
        a = e[l];
    while ((!a || a.offsetParent == null || !((t == null ? void 0 : t(a)) ?? !0)) && l < e.length && l >= 0);
    return a
}
function Xn(e, n) {
    var a, l, i, o;
    const t = wn(e);
    if (!n)
        (e === document.activeElement || !e.contains(document.activeElement)) && ((a = t[0]) == null || a.focus());
    else if (n === "first")
        (l = t[0]) == null || l.focus();
    else if (n === "last")
        (i = t.at(-1)) == null || i.focus();
    else if (typeof n == "number")
        (o = t[n]) == null || o.focus();
    else {
        const s = Ui(t, n);
        s ? s.focus() : Xn(e, n === "next" ? "first" : "last")
    }
}
function Yi() {}
function tn(e, n) {
    if (!(ke && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`)))
        return null;
    try {
        return !!e && e.matches(n)
    } catch {
        return null
    }
}
const Ki = ["top", "bottom"]
  , Rr = ["start", "end", "left", "right"];
function pa(e, n) {
    let[t,a] = e.split(" ");
    return a || (a = Kn(Ki, t) ? "start" : Kn(Rr, t) ? "top" : "center"),
    {
        side: $a(t, n),
        align: $a(a, n)
    }
}
function $a(e, n) {
    return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e
}
function ba(e) {
    return {
        side: {
            center: "center",
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        }[e.side],
        align: e.align
    }
}
function Sa(e) {
    return {
        side: e.side,
        align: {
            center: "center",
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        }[e.align]
    }
}
function Xl(e) {
    return {
        side: e.align,
        align: e.side
    }
}
function ql(e) {
    return Kn(Ki, e.side) ? "y" : "x"
}
class Qt {
    constructor(n) {
        let {x: t, y: a, width: l, height: i} = n;
        this.x = t,
        this.y = a,
        this.width = l,
        this.height = i
    }
    get top() {
        return this.y
    }
    get bottom() {
        return this.y + this.height
    }
    get left() {
        return this.x
    }
    get right() {
        return this.x + this.width
    }
}
function Zl(e, n) {
    return {
        x: {
            before: Math.max(0, n.left - e.left),
            after: Math.max(0, e.right - n.right)
        },
        y: {
            before: Math.max(0, n.top - e.top),
            after: Math.max(0, e.bottom - n.bottom)
        }
    }
}
function fl(e) {
    const n = e.getBoundingClientRect()
      , t = getComputedStyle(e)
      , a = t.transform;
    if (a) {
        let l, i, o, s, u;
        if (a.startsWith("matrix3d("))
            l = a.slice(9, -1).split(/, /),
            i = +l[0],
            o = +l[5],
            s = +l[12],
            u = +l[13];
        else if (a.startsWith("matrix("))
            l = a.slice(7, -1).split(/, /),
            i = +l[0],
            o = +l[3],
            s = +l[4],
            u = +l[5];
        else
            return new Qt(n);
        const v = t.transformOrigin
          , c = n.x - s - (1 - i) * parseFloat(v)
          , d = n.y - u - (1 - o) * parseFloat(v.slice(v.indexOf(" ") + 1))
          , f = i ? n.width / i : e.offsetWidth + 1
          , m = o ? n.height / o : e.offsetHeight + 1;
        return new Qt({
            x: c,
            y: d,
            width: f,
            height: m
        })
    } else
        return new Qt(n)
}
function Ot(e, n, t) {
    if (typeof e.animate > "u")
        return {
            finished: Promise.resolve()
        };
    let a;
    try {
        a = e.animate(n, t)
    } catch {
        return {
            finished: Promise.resolve()
        }
    }
    return typeof a.finished > "u" && (a.finished = new Promise(l=>{
        a.onfinish = ()=>{
            l(a)
        }
    }
    )),
    a
}
const Wn = new WeakMap;
function Dr(e, n) {
    Object.keys(n).forEach(t=>{
        if (dl(t)) {
            const a = Wi(t)
              , l = Wn.get(e);
            if (n[t] == null)
                l == null || l.forEach(i=>{
                    const [o,s] = i;
                    o === a && (e.removeEventListener(a, s),
                    l.delete(i))
                }
                );
            else if (!l || ![...l].some(i=>i[0] === a && i[1] === n[t])) {
                e.addEventListener(a, n[t]);
                const i = l || new Set;
                i.add([a, n[t]]),
                Wn.has(e) || Wn.set(e, i)
            }
        } else
            n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t])
    }
    )
}
function zr(e, n) {
    Object.keys(n).forEach(t=>{
        if (dl(t)) {
            const a = Wi(t)
              , l = Wn.get(e);
            l == null || l.forEach(i=>{
                const [o,s] = i;
                o === a && (e.removeEventListener(a, s),
                l.delete(i))
            }
            )
        } else
            e.removeAttribute(t)
    }
    )
}
function Nr(e, n) {
    n = Array.isArray(n) ? n.slice(0, -1).map(t=>`'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`
}
const qn = .20689655172413793
  , Hr = e=>e > qn ** 3 ? Math.cbrt(e) : e / (3 * qn ** 2) + 4 / 29
  , jr = e=>e > qn ? e ** 3 : 3 * qn ** 2 * (e - 4 / 29);
function Xi(e) {
    const n = Hr
      , t = n(e[1]);
    return [116 * t - 16, 500 * (n(e[0] / .95047) - t), 200 * (t - n(e[2] / 1.08883))]
}
function qi(e) {
    const n = jr
      , t = (e[0] + 16) / 116;
    return [n(t + e[1] / 500) * .95047, n(t), n(t - e[2] / 200) * 1.08883]
}
const Gr = [[3.2406, -1.5372, -.4986], [-.9689, 1.8758, .0415], [.0557, -.204, 1.057]]
  , Wr = e=>e <= .0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - .055
  , Ur = [[.4124, .3576, .1805], [.2126, .7152, .0722], [.0193, .1192, .9505]]
  , Yr = e=>e <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
function Zi(e) {
    const n = Array(3)
      , t = Wr
      , a = Gr;
    for (let l = 0; l < 3; ++l)
        n[l] = Math.round(Oe(t(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
    return {
        r: n[0],
        g: n[1],
        b: n[2]
    }
}
function ml(e) {
    let {r: n, g: t, b: a} = e;
    const l = [0, 0, 0]
      , i = Yr
      , o = Ur;
    n = i(n / 255),
    t = i(t / 255),
    a = i(a / 255);
    for (let s = 0; s < 3; ++s)
        l[s] = o[s][0] * n + o[s][1] * t + o[s][2] * a;
    return l
}
function Jl(e) {
    return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e)
}
const Ql = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/
  , Kr = {
    rgb: (e,n,t,a)=>({
        r: e,
        g: n,
        b: t,
        a
    }),
    rgba: (e,n,t,a)=>({
        r: e,
        g: n,
        b: t,
        a
    }),
    hsl: (e,n,t,a)=>ei({
        h: e,
        s: n,
        l: t,
        a
    }),
    hsla: (e,n,t,a)=>ei({
        h: e,
        s: n,
        l: t,
        a
    }),
    hsv: (e,n,t,a)=>yt({
        h: e,
        s: n,
        v: t,
        a
    }),
    hsva: (e,n,t,a)=>yt({
        h: e,
        s: n,
        v: t,
        a
    })
};
function gt(e) {
    if (typeof e == "number")
        return {
            r: (e & 16711680) >> 16,
            g: (e & 65280) >> 8,
            b: e & 255
        };
    if (typeof e == "string" && Ql.test(e)) {
        const {groups: n} = e.match(Ql)
          , {fn: t, values: a} = n
          , l = a.split(/,\s*/).map(i=>i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
        return Kr[t](...l)
    } else if (typeof e == "string") {
        let n = e.startsWith("#") ? e.slice(1) : e;
        return [3, 4].includes(n.length) ? n = n.split("").map(t=>t + t).join("") : [6, 8].includes(n.length),
        no(n)
    } else if (typeof e == "object") {
        if (Mt(e, ["r", "g", "b"]))
            return e;
        if (Mt(e, ["h", "s", "l"]))
            return yt(gl(e));
        if (Mt(e, ["h", "s", "v"]))
            return yt(e)
    }
    throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)
}
function yt(e) {
    const {h: n, s: t, v: a, a: l} = e
      , i = s=>{
        const u = (s + n / 60) % 6;
        return a - a * t * Math.max(Math.min(u, 4 - u, 1), 0)
    }
      , o = [i(5), i(3), i(1)].map(s=>Math.round(s * 255));
    return {
        r: o[0],
        g: o[1],
        b: o[2],
        a: l
    }
}
function ei(e) {
    return yt(gl(e))
}
function na(e) {
    if (!e)
        return {
            h: 0,
            s: 1,
            v: 1,
            a: 1
        };
    const n = e.r / 255
      , t = e.g / 255
      , a = e.b / 255
      , l = Math.max(n, t, a)
      , i = Math.min(n, t, a);
    let o = 0;
    l !== i && (l === n ? o = 60 * (0 + (t - a) / (l - i)) : l === t ? o = 60 * (2 + (a - n) / (l - i)) : l === a && (o = 60 * (4 + (n - t) / (l - i)))),
    o < 0 && (o = o + 360);
    const s = l === 0 ? 0 : (l - i) / l
      , u = [o, s, l];
    return {
        h: u[0],
        s: u[1],
        v: u[2],
        a: e.a
    }
}
function Ji(e) {
    const {h: n, s: t, v: a, a: l} = e
      , i = a - a * t / 2
      , o = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i);
    return {
        h: n,
        s: o,
        l: i,
        a: l
    }
}
function gl(e) {
    const {h: n, s: t, l: a, a: l} = e
      , i = a + t * Math.min(a, 1 - a)
      , o = i === 0 ? 0 : 2 - 2 * a / i;
    return {
        h: n,
        s: o,
        v: i,
        a: l
    }
}
function Qi(e) {
    let {r: n, g: t, b: a, a: l} = e;
    return l === void 0 ? `rgb(${n}, ${t}, ${a})` : `rgba(${n}, ${t}, ${a}, ${l})`
}
function eo(e) {
    return Qi(yt(e))
}
function Hn(e) {
    const n = Math.round(e).toString(16);
    return ("00".substr(0, 2 - n.length) + n).toUpperCase()
}
function to(e) {
    let {r: n, g: t, b: a, a: l} = e;
    return `#${[Hn(n), Hn(t), Hn(a), l !== void 0 ? Hn(Math.round(l * 255)) : ""].join("")}`
}
function no(e) {
    e = qr(e);
    let[n,t,a,l] = Lr(e, 2).map(i=>parseInt(i, 16));
    return l = l === void 0 ? l : l / 255,
    {
        r: n,
        g: t,
        b: a,
        a: l
    }
}
function Xr(e) {
    const n = no(e);
    return na(n)
}
function ao(e) {
    return to(yt(e))
}
function qr(e) {
    return e.startsWith("#") && (e = e.slice(1)),
    e = e.replace(/([^0-9a-f])/gi, "F"),
    (e.length === 3 || e.length === 4) && (e = e.split("").map(n=>n + n).join("")),
    e.length !== 6 && (e = Ul(Ul(e, 6), 8, "F")),
    e
}
function Zr(e, n) {
    const t = Xi(ml(e));
    return t[0] = t[0] + n * 10,
    Zi(qi(t))
}
function Jr(e, n) {
    const t = Xi(ml(e));
    return t[0] = t[0] - n * 10,
    Zi(qi(t))
}
function Ea(e) {
    const n = gt(e);
    return ml(n)[1]
}
function Qr(e, n) {
    const t = Ea(e)
      , a = Ea(n)
      , l = Math.max(t, a)
      , i = Math.min(t, a);
    return (l + .05) / (i + .05)
}
function T(e, n) {
    return t=>Object.keys(e).reduce((a,l)=>{
        const o = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
            type: e[l]
        };
        return t && l in t ? a[l] = {
            ...o,
            default: t[l]
        } : a[l] = o,
        n && !a[l].source && (a[l].source = n),
        a
    }
    , {})
}
const X = T({
    class: [String, Array],
    style: {
        type: [String, Array, Object],
        default: null
    }
}, "component");
function Qe(e) {
    if (e._setup = e._setup ?? e.setup,
    !e.name)
        return e;
    if (e._setup) {
        e.props = T(e.props ?? {}, e.name)();
        const n = Object.keys(e.props);
        e.filterProps = function(a) {
            return on(a, n, ["class", "style"])
        }
        ,
        e.props._as = String,
        e.setup = function(a, l) {
            const i = bl();
            if (!i.value)
                return e._setup(a, l);
            const {props: o, provideSubDefaults: s} = su(a, a._as ?? e.name, i)
              , u = e._setup(o, l);
            return s(),
            u
        }
    }
    return e
}
function M() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    return n=>(e ? Qe : Di)(n)
}
function st(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div"
      , t = arguments.length > 2 ? arguments[2] : void 0;
    return M()({
        name: t ?? pn(zi(e.replace(/__/g, "-"))),
        props: {
            tag: {
                type: String,
                default: n
            },
            ...X()
        },
        setup(a, l) {
            let {slots: i} = l;
            return ()=>{
                var o;
                return It(a.tag, {
                    class: [e, a.class],
                    style: a.style
                }, (o = i.default) == null ? void 0 : o.call(i))
            }
        }
    })
}
function lo(e) {
    if (typeof e.getRootNode != "function") {
        for (; e.parentNode; )
            e = e.parentNode;
        return e !== document ? null : document
    }
    const n = e.getRootNode();
    return n !== document && n.getRootNode({
        composed: !0
    }) !== document ? null : n
}
const xn = "cubic-bezier(0.4, 0, 0.2, 1)"
  , eu = "cubic-bezier(0.0, 0, 0.2, 1)"
  , tu = "cubic-bezier(0.4, 0, 1, 1)";
function pe(e, n) {
    const t = ar();
    if (!t)
        throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
    return t
}
function Ct() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
    const n = pe(e).type;
    return Ft((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name))
}
let io = 0
  , Un = new WeakMap;
function Re() {
    const e = pe("getUid");
    if (Un.has(e))
        return Un.get(e);
    {
        const n = io++;
        return Un.set(e, n),
        n
    }
}
Re.reset = ()=>{
    io = 0,
    Un = new WeakMap
}
;
function hl(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    for (; e; ) {
        if (n ? nu(e) : yl(e))
            return e;
        e = e.parentElement
    }
    return document.scrollingElement
}
function Zn(e, n) {
    const t = [];
    if (n && e && !n.contains(e))
        return t;
    for (; e && (yl(e) && t.push(e),
    e !== n); )
        e = e.parentElement;
    return t
}
function yl(e) {
    if (!e || e.nodeType !== Node.ELEMENT_NODE)
        return !1;
    const n = window.getComputedStyle(e);
    return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight
}
function nu(e) {
    if (!e || e.nodeType !== Node.ELEMENT_NODE)
        return !1;
    const n = window.getComputedStyle(e);
    return ["scroll", "auto"].includes(n.overflowY)
}
function au(e) {
    const {provides: n} = pe("injectSelf");
    if (n && e in n)
        return n[e]
}
function lu(e) {
    for (; e; ) {
        if (window.getComputedStyle(e).position === "fixed")
            return !0;
        e = e.offsetParent
    }
    return !1
}
function D(e) {
    const n = pe("useRender");
    n.render = e
}
const Pn = Symbol.for("vuetify:defaults");
function iu(e) {
    return U(e)
}
function bl() {
    const e = ye(Pn);
    if (!e)
        throw new Error("[Vuetify] Could not find defaults instance");
    return e
}
function xe(e, n) {
    const t = bl()
      , a = U(e)
      , l = g(()=>{
        if (qe(n == null ? void 0 : n.disabled))
            return t.value;
        const o = qe(n == null ? void 0 : n.scoped)
          , s = qe(n == null ? void 0 : n.reset)
          , u = qe(n == null ? void 0 : n.root);
        let v = Ze(a.value, {
            prev: t.value
        });
        if (o)
            return v;
        if (s || u) {
            const c = Number(s || 1 / 0);
            for (let d = 0; d <= c && !(!v || !("prev"in v)); d++)
                v = v.prev;
            return v && typeof u == "string" && u in v && (v = Ze(Ze(v, {
                prev: v
            }), v[u])),
            v
        }
        return v.prev ? Ze(v.prev, v) : v
    }
    );
    return Te(Pn, l),
    l
}
function ou(e, n) {
    var t, a;
    return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((a = e.props) == null ? void 0 : a[Ft(n)]) < "u"
}
function su() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , n = arguments.length > 1 ? arguments[1] : void 0
      , t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : bl();
    const a = pe("useDefaults");
    if (n = n ?? a.type.name ?? a.type.__name,
    !n)
        throw new Error("[Vuetify] Could not determine component name");
    const l = g(()=>{
        var u;
        return (u = t.value) == null ? void 0 : u[e._as ?? n]
    }
    )
      , i = new Proxy(e,{
        get(u, v) {
            var d, f, m, h;
            const c = Reflect.get(u, v);
            return v === "class" || v === "style" ? [(d = l.value) == null ? void 0 : d[v], c].filter(y=>y != null) : typeof v == "string" && !ou(a.vnode, v) ? ((f = l.value) == null ? void 0 : f[v]) ?? ((h = (m = t.value) == null ? void 0 : m.global) == null ? void 0 : h[v]) ?? c : c
        }
    })
      , o = Y();
    Ge(()=>{
        if (l.value) {
            const u = Object.entries(l.value).filter(v=>{
                let[c] = v;
                return c.startsWith(c[0].toUpperCase())
            }
            );
            u.length && (o.value = Object.fromEntries(u))
        }
    }
    );
    function s() {
        ht(o, ()=>{
            var u;
            xe(Ze(((u = au(Pn)) == null ? void 0 : u.value) ?? {}, o.value))
        }
        )
    }
    return {
        props: i,
        provideSubDefaults: s
    }
}
const aa = ["sm", "md", "lg", "xl", "xxl"]
  , La = Symbol.for("vuetify:display")
  , ti = {
    mobileBreakpoint: "lg",
    thresholds: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        xxl: 2560
    }
}
  , ru = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ti;
    return Ze(ti, e)
};
function ni(e) {
    return ke && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0
}
function ai(e) {
    return ke && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0
}
function li(e) {
    const n = ke && !e ? window.navigator.userAgent : "ssr";
    function t(h) {
        return !!n.match(h)
    }
    const a = t(/android/i)
      , l = t(/iphone|ipad|ipod/i)
      , i = t(/cordova/i)
      , o = t(/electron/i)
      , s = t(/chrome/i)
      , u = t(/edge/i)
      , v = t(/firefox/i)
      , c = t(/opera/i)
      , d = t(/win/i)
      , f = t(/mac/i)
      , m = t(/linux/i);
    return {
        android: a,
        ios: l,
        cordova: i,
        electron: o,
        chrome: s,
        edge: u,
        firefox: v,
        opera: c,
        win: d,
        mac: f,
        linux: m,
        touch: Br,
        ssr: n === "ssr"
    }
}
function uu(e, n) {
    const {thresholds: t, mobileBreakpoint: a} = ru(e)
      , l = Y(ai(n))
      , i = Y(li(n))
      , o = it({})
      , s = Y(ni(n));
    function u() {
        l.value = ai(),
        s.value = ni()
    }
    function v() {
        u(),
        i.value = li()
    }
    return Ge(()=>{
        const c = s.value < t.sm
          , d = s.value < t.md && !c
          , f = s.value < t.lg && !(d || c)
          , m = s.value < t.xl && !(f || d || c)
          , h = s.value < t.xxl && !(m || f || d || c)
          , y = s.value >= t.xxl
          , S = c ? "xs" : d ? "sm" : f ? "md" : m ? "lg" : h ? "xl" : "xxl"
          , b = typeof a == "number" ? a : t[a]
          , C = s.value < b;
        o.xs = c,
        o.sm = d,
        o.md = f,
        o.lg = m,
        o.xl = h,
        o.xxl = y,
        o.smAndUp = !c,
        o.mdAndUp = !(c || d),
        o.lgAndUp = !(c || d || f),
        o.xlAndUp = !(c || d || f || m),
        o.smAndDown = !(f || m || h || y),
        o.mdAndDown = !(m || h || y),
        o.lgAndDown = !(h || y),
        o.xlAndDown = !y,
        o.name = S,
        o.height = l.value,
        o.width = s.value,
        o.mobile = C,
        o.mobileBreakpoint = a,
        o.platform = i.value,
        o.thresholds = t
    }
    ),
    ke && window.addEventListener("resize", u, {
        passive: !0
    }),
    {
        ...ol(o),
        update: v,
        ssr: !!n
    }
}
function jt() {
    const e = ye(La);
    if (!e)
        throw new Error("Could not find Vuetify display injection");
    return e
}
const cu = {
    collapse: "mdi-chevron-up",
    complete: "mdi-check",
    cancel: "mdi-close-circle",
    close: "mdi-close",
    delete: "mdi-close-circle",
    clear: "mdi-close-circle",
    success: "mdi-check-circle",
    info: "mdi-information",
    warning: "mdi-alert-circle",
    error: "mdi-close-circle",
    prev: "mdi-chevron-left",
    next: "mdi-chevron-right",
    checkboxOn: "mdi-checkbox-marked",
    checkboxOff: "mdi-checkbox-blank-outline",
    checkboxIndeterminate: "mdi-minus-box",
    delimiter: "mdi-circle",
    sortAsc: "mdi-arrow-up",
    sortDesc: "mdi-arrow-down",
    expand: "mdi-chevron-down",
    menu: "mdi-menu",
    subgroup: "mdi-menu-down",
    dropdown: "mdi-menu-down",
    radioOn: "mdi-radiobox-marked",
    radioOff: "mdi-radiobox-blank",
    edit: "mdi-pencil",
    ratingEmpty: "mdi-star-outline",
    ratingFull: "mdi-star",
    ratingHalf: "mdi-star-half-full",
    loading: "mdi-cached",
    first: "mdi-page-first",
    last: "mdi-page-last",
    unfold: "mdi-unfold-more-horizontal",
    file: "mdi-paperclip",
    plus: "mdi-plus",
    minus: "mdi-minus",
    calendar: "mdi-calendar"
}
  , du = {
    component: e=>It(Cl, {
        ...e,
        class: "mdi"
    })
}
  , ne = [String, Function, Object, Array]
  , Ma = Symbol.for("vuetify:icons")
  , la = T({
    icon: {
        type: ne
    },
    tag: {
        type: String,
        required: !0
    }
}, "icon")
  , Oa = M()({
    name: "VComponentIcon",
    props: la(),
    setup(e, n) {
        let {slots: t} = n;
        return ()=>{
            const a = e.icon;
            return r(e.tag, null, {
                default: ()=>{
                    var l;
                    return [e.icon ? r(a, null, null) : (l = t.default) == null ? void 0 : l.call(t)]
                }
            })
        }
    }
})
  , Sl = Qe({
    name: "VSvgIcon",
    inheritAttrs: !1,
    props: la(),
    setup(e, n) {
        let {attrs: t} = n;
        return ()=>r(e.tag, K(t, {
            style: null
        }), {
            default: ()=>[r("svg", {
                class: "v-icon__svg",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                role: "img",
                "aria-hidden": "true"
            }, [Array.isArray(e.icon) ? e.icon.map(a=>Array.isArray(a) ? r("path", {
                d: a[0],
                "fill-opacity": a[1]
            }, null) : r("path", {
                d: a
            }, null)) : r("path", {
                d: e.icon
            }, null)])]
        })
    }
})
  , vu = Qe({
    name: "VLigatureIcon",
    props: la(),
    setup(e) {
        return ()=>r(e.tag, null, {
            default: ()=>[e.icon]
        })
    }
})
  , Cl = Qe({
    name: "VClassIcon",
    props: la(),
    setup(e) {
        return ()=>r(e.tag, {
            class: e.icon
        }, null)
    }
})
  , fu = {
    svg: {
        component: Sl
    },
    class: {
        component: Cl
    }
};
function mu(e) {
    return Ze({
        defaultSet: "mdi",
        sets: {
            ...fu,
            mdi: du
        },
        aliases: {
            ...cu,
            vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", .6]],
            "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"
        }
    }, e)
}
const gu = e=>{
    const n = ye(Ma);
    if (!n)
        throw new Error("Missing Vuetify Icons provide!");
    return {
        iconData: g(()=>{
            var u;
            const a = qe(e);
            if (!a)
                return {
                    component: Oa
                };
            let l = a;
            if (typeof l == "string" && (l = l.trim(),
            l.startsWith("$") && (l = (u = n.aliases) == null ? void 0 : u[l.slice(1)])),
            !l)
                throw new Error(`Could not find aliased icon "${a}"`);
            if (Array.isArray(l))
                return {
                    component: Sl,
                    icon: l
                };
            if (typeof l != "string")
                return {
                    component: Oa,
                    icon: l
                };
            const i = Object.keys(n.sets).find(v=>typeof l == "string" && l.startsWith(`${v}:`))
              , o = i ? l.slice(i.length + 1) : l;
            return {
                component: n.sets[i ?? n.defaultSet].component,
                icon: o
            }
        }
        )
    }
}
  , hu = {
    badge: "Badge",
    close: "Close",
    dataIterator: {
        noResultsText: "No matching records found",
        loadingText: "Loading items..."
    },
    dataTable: {
        itemsPerPageText: "Rows per page:",
        ariaLabel: {
            sortDescending: "Sorted descending.",
            sortAscending: "Sorted ascending.",
            sortNone: "Not sorted.",
            activateNone: "Activate to remove sorting.",
            activateDescending: "Activate to sort descending.",
            activateAscending: "Activate to sort ascending."
        },
        sortBy: "Sort by"
    },
    dataFooter: {
        itemsPerPageText: "Items per page:",
        itemsPerPageAll: "All",
        nextPage: "Next page",
        prevPage: "Previous page",
        firstPage: "First page",
        lastPage: "Last page",
        pageText: "{0}-{1} of {2}"
    },
    dateRangeInput: {
        divider: "to"
    },
    datePicker: {
        ok: "OK",
        cancel: "Cancel",
        range: {
            title: "Select dates",
            header: "Enter dates"
        },
        title: "Select date",
        header: "Enter date",
        input: {
            placeholder: "Enter date"
        }
    },
    noDataText: "No data available",
    carousel: {
        prev: "Previous visual",
        next: "Next visual",
        ariaLabel: {
            delimiter: "Carousel slide {0} of {1}"
        }
    },
    calendar: {
        moreEvents: "{0} more"
    },
    input: {
        clear: "Clear {0}",
        prependAction: "{0} prepended action",
        appendAction: "{0} appended action",
        otp: "Please enter OTP character {0}"
    },
    fileInput: {
        counter: "{0} files",
        counterSize: "{0} files ({1} in total)"
    },
    timePicker: {
        am: "AM",
        pm: "PM"
    },
    pagination: {
        ariaLabel: {
            root: "Pagination Navigation",
            next: "Next page",
            previous: "Previous page",
            page: "Go to page {0}",
            currentPage: "Page {0}, Current page",
            first: "First page",
            last: "Last page"
        }
    },
    stepper: {
        next: "Next",
        prev: "Previous"
    },
    rating: {
        ariaLabel: {
            item: "Rating {0} of {1}"
        }
    },
    loading: "Loading...",
    infiniteScroll: {
        loadMore: "Load more",
        empty: "No more"
    }
}
  , yu = {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
};
function ae(e, n, t) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : d=>d
      , l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : d=>d;
    const i = pe("useProxiedModel")
      , o = U(e[n] !== void 0 ? e[n] : t)
      , s = Ft(n)
      , v = s !== n ? g(()=>{
        var d, f, m, h;
        return e[n],
        !!(((d = i.vnode.props) != null && d.hasOwnProperty(n) || (f = i.vnode.props) != null && f.hasOwnProperty(s)) && ((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${n}`) || (h = i.vnode.props) != null && h.hasOwnProperty(`onUpdate:${s}`)))
    }
    ) : g(()=>{
        var d, f;
        return e[n],
        !!((d = i.vnode.props) != null && d.hasOwnProperty(n) && ((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${n}`)))
    }
    );
    ht(()=>!v.value, ()=>{
        Z(()=>e[n], d=>{
            o.value = d
        }
        )
    }
    );
    const c = g({
        get() {
            const d = e[n];
            return a(v.value ? d : o.value)
        },
        set(d) {
            const f = l(d)
              , m = _t(v.value ? e[n] : o.value);
            m === f || a(m) === d || (o.value = f,
            i == null || i.emit(`update:${n}`, f))
        }
    });
    return Object.defineProperty(c, "externalValue", {
        get: ()=>v.value ? e[n] : o.value
    }),
    c
}
const ii = "$vuetify."
  , oi = (e,n)=>e.replace(/\{(\d+)\}/g, (t,a)=>String(n[+a]))
  , oo = (e,n,t)=>function(a) {
    for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), o = 1; o < l; o++)
        i[o - 1] = arguments[o];
    if (!a.startsWith(ii))
        return oi(a, i);
    const s = a.replace(ii, "")
      , u = e.value && t.value[e.value]
      , v = n.value && t.value[n.value];
    let c = _a(u, s, null);
    return c || (`${a}${e.value}`,
    c = _a(v, s, null)),
    c || (c = a),
    typeof c != "string" && (c = a),
    oi(c, i)
}
;
function so(e, n) {
    return (t,a)=>new Intl.NumberFormat([e.value, n.value],a).format(t)
}
function Ca(e, n, t) {
    const a = ae(e, n, e[n] ?? t.value);
    return a.value = e[n] ?? t.value,
    Z(t, l=>{
        e[n] == null && (a.value = t.value)
    }
    ),
    a
}
function ro(e) {
    return n=>{
        const t = Ca(n, "locale", e.current)
          , a = Ca(n, "fallback", e.fallback)
          , l = Ca(n, "messages", e.messages);
        return {
            name: "vuetify",
            current: t,
            fallback: a,
            messages: l,
            t: oo(t, a, l),
            n: so(t, a),
            provide: ro({
                current: t,
                fallback: a,
                messages: l
            })
        }
    }
}
function bu(e) {
    const n = Y((e == null ? void 0 : e.locale) ?? "en")
      , t = Y((e == null ? void 0 : e.fallback) ?? "en")
      , a = U({
        en: hu,
        ...e == null ? void 0 : e.messages
    });
    return {
        name: "vuetify",
        current: n,
        fallback: t,
        messages: a,
        t: oo(n, t, a),
        n: so(n, t),
        provide: ro({
            current: n,
            fallback: t,
            messages: a
        })
    }
}
const nn = Symbol.for("vuetify:locale");
function Su(e) {
    return e.name != null
}
function Cu(e) {
    const n = e != null && e.adapter && Su(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : bu(e)
      , t = Vu(n, e);
    return {
        ...n,
        ...t
    }
}
function et() {
    const e = ye(nn);
    if (!e)
        throw new Error("[Vuetify] Could not find injected locale instance");
    return e
}
function ku(e) {
    const n = ye(nn);
    if (!n)
        throw new Error("[Vuetify] Could not find injected locale instance");
    const t = n.provide(e)
      , a = wu(t, n.rtl, e)
      , l = {
        ...t,
        ...a
    };
    return Te(nn, l),
    l
}
function Vu(e, n) {
    const t = U((n == null ? void 0 : n.rtl) ?? yu)
      , a = g(()=>t.value[e.current.value] ?? !1);
    return {
        isRtl: a,
        rtl: t,
        rtlClasses: g(()=>`v-locale--is-${a.value ? "rtl" : "ltr"}`)
    }
}
function wu(e, n, t) {
    const a = g(()=>t.rtl ?? n.value[e.current.value] ?? !1);
    return {
        isRtl: a,
        rtl: n,
        rtlClasses: g(()=>`v-locale--is-${a.value ? "rtl" : "ltr"}`)
    }
}
function $e() {
    const e = ye(nn);
    if (!e)
        throw new Error("[Vuetify] Could not find injected rtl instance");
    return {
        isRtl: e.isRtl,
        rtlClasses: e.rtlClasses
    }
}
const Xt = 2.4
  , si = .2126729
  , ri = .7151522
  , ui = .072175
  , xu = .55
  , Pu = .58
  , Iu = .57
  , _u = .62
  , jn = .03
  , ci = 1.45
  , Au = 5e-4
  , Bu = 1.25
  , Tu = 1.25
  , di = .078
  , vi = 12.82051282051282
  , Gn = .06
  , fi = .001;
function mi(e, n) {
    const t = (e.r / 255) ** Xt
      , a = (e.g / 255) ** Xt
      , l = (e.b / 255) ** Xt
      , i = (n.r / 255) ** Xt
      , o = (n.g / 255) ** Xt
      , s = (n.b / 255) ** Xt;
    let u = t * si + a * ri + l * ui
      , v = i * si + o * ri + s * ui;
    if (u <= jn && (u += (jn - u) ** ci),
    v <= jn && (v += (jn - v) ** ci),
    Math.abs(v - u) < Au)
        return 0;
    let c;
    if (v > u) {
        const d = (v ** xu - u ** Pu) * Bu;
        c = d < fi ? 0 : d < di ? d - d * vi * Gn : d - Gn
    } else {
        const d = (v ** _u - u ** Iu) * Tu;
        c = d > -fi ? 0 : d > -di ? d - d * vi * Gn : d + Gn
    }
    return c * 100
}
const In = Symbol.for("vuetify:theme")
  , ce = T({
    theme: String
}, "theme")
  , bn = {
    defaultTheme: "light",
    variations: {
        colors: [],
        lighten: 0,
        darken: 0
    },
    themes: {
        light: {
            dark: !1,
            colors: {
                background: "#FFFFFF",
                surface: "#FFFFFF",
                "surface-variant": "#424242",
                "on-surface-variant": "#EEEEEE",
                primary: "#6200EE",
                "primary-darken-1": "#3700B3",
                secondary: "#03DAC6",
                "secondary-darken-1": "#018786",
                error: "#B00020",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FB8C00"
            },
            variables: {
                "border-color": "#000000",
                "border-opacity": .12,
                "high-emphasis-opacity": .87,
                "medium-emphasis-opacity": .6,
                "disabled-opacity": .38,
                "idle-opacity": .04,
                "hover-opacity": .04,
                "focus-opacity": .12,
                "selected-opacity": .08,
                "activated-opacity": .12,
                "pressed-opacity": .12,
                "dragged-opacity": .08,
                "theme-kbd": "#212529",
                "theme-on-kbd": "#FFFFFF",
                "theme-code": "#F5F5F5",
                "theme-on-code": "#000000"
            }
        },
        dark: {
            dark: !0,
            colors: {
                background: "#121212",
                surface: "#212121",
                "surface-variant": "#BDBDBD",
                "on-surface-variant": "#424242",
                primary: "#BB86FC",
                "primary-darken-1": "#3700B3",
                secondary: "#03DAC5",
                "secondary-darken-1": "#03DAC5",
                error: "#CF6679",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FB8C00"
            },
            variables: {
                "border-color": "#FFFFFF",
                "border-opacity": .12,
                "high-emphasis-opacity": 1,
                "medium-emphasis-opacity": .7,
                "disabled-opacity": .5,
                "idle-opacity": .1,
                "hover-opacity": .04,
                "focus-opacity": .12,
                "selected-opacity": .08,
                "activated-opacity": .12,
                "pressed-opacity": .16,
                "dragged-opacity": .08,
                "theme-kbd": "#212529",
                "theme-on-kbd": "#FFFFFF",
                "theme-code": "#343434",
                "theme-on-code": "#CCCCCC"
            }
        }
    }
};
function pu() {
    var t, a;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bn;
    if (!e)
        return {
            ...bn,
            isDisabled: !0
        };
    const n = {};
    for (const [l,i] of Object.entries(e.themes ?? {})) {
        const o = i.dark || l === "dark" ? (t = bn.themes) == null ? void 0 : t.dark : (a = bn.themes) == null ? void 0 : a.light;
        n[l] = Ze(o, i)
    }
    return Ze(bn, {
        ...e,
        themes: n
    })
}
function $u(e) {
    const n = pu(e)
      , t = U(n.defaultTheme)
      , a = U(n.themes)
      , l = g(()=>{
        const c = {};
        for (const [d,f] of Object.entries(a.value)) {
            const m = c[d] = {
                ...f,
                colors: {
                    ...f.colors
                }
            };
            if (n.variations)
                for (const h of n.variations.colors) {
                    const y = m.colors[h];
                    if (y)
                        for (const S of ["lighten", "darken"]) {
                            const b = S === "lighten" ? Zr : Jr;
                            for (const C of mt(n.variations[S], 1))
                                m.colors[`${h}-${S}-${C}`] = to(b(gt(y), C))
                        }
                }
            for (const h of Object.keys(m.colors)) {
                if (/^on-[a-z]/.test(h) || m.colors[`on-${h}`])
                    continue;
                const y = `on-${h}`
                  , S = gt(m.colors[h])
                  , b = Math.abs(mi(gt(0), S))
                  , C = Math.abs(mi(gt(16777215), S));
                m.colors[y] = C > Math.min(b, 50) ? "#fff" : "#000"
            }
        }
        return c
    }
    )
      , i = g(()=>l.value[t.value])
      , o = g(()=>{
        const c = [];
        i.value.dark && Lt(c, ":root", ["color-scheme: dark"]),
        Lt(c, ":root", gi(i.value));
        for (const [h,y] of Object.entries(l.value))
            Lt(c, `.v-theme--${h}`, [`color-scheme: ${y.dark ? "dark" : "normal"}`, ...gi(y)]);
        const d = []
          , f = []
          , m = new Set(Object.values(l.value).flatMap(h=>Object.keys(h.colors)));
        for (const h of m)
            /^on-[a-z]/.test(h) ? Lt(f, `.${h}`, [`color: rgb(var(--v-theme-${h})) !important`]) : (Lt(d, `.bg-${h}`, [`--v-theme-overlay-multiplier: var(--v-theme-${h}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${h})) !important`, `color: rgb(var(--v-theme-on-${h})) !important`]),
            Lt(f, `.text-${h}`, [`color: rgb(var(--v-theme-${h})) !important`]),
            Lt(f, `.border-${h}`, [`--v-border-color: var(--v-theme-${h})`]));
        return c.push(...d, ...f),
        c.map((h,y)=>y === 0 ? h : `    ${h}`).join("")
    }
    );
    function s() {
        return {
            style: [{
                children: o.value,
                id: "vuetify-theme-stylesheet",
                nonce: n.cspNonce || !1
            }]
        }
    }
    function u(c) {
        if (n.isDisabled)
            return;
        const d = c._context.provides.usehead;
        if (d)
            if (d.push) {
                const f = d.push(s);
                ke && Z(o, ()=>{
                    f.patch(s)
                }
                )
            } else
                ke ? (d.addHeadObjs(g(s)),
                Ge(()=>d.updateDOM())) : d.addHeadObjs(s());
        else {
            let m = function() {
                if (typeof document < "u" && !f) {
                    const h = document.createElement("style");
                    h.type = "text/css",
                    h.id = "vuetify-theme-stylesheet",
                    n.cspNonce && h.setAttribute("nonce", n.cspNonce),
                    f = h,
                    document.head.appendChild(f)
                }
                f && (f.innerHTML = o.value)
            }
              , f = ke ? document.getElementById("vuetify-theme-stylesheet") : null;
            ke ? Z(o, m, {
                immediate: !0
            }) : m()
        }
    }
    const v = g(()=>n.isDisabled ? void 0 : `v-theme--${t.value}`);
    return {
        install: u,
        isDisabled: n.isDisabled,
        name: t,
        themes: a,
        current: i,
        computedThemes: l,
        themeClasses: v,
        styles: o,
        global: {
            name: t,
            current: i
        }
    }
}
function me(e) {
    pe("provideTheme");
    const n = ye(In, null);
    if (!n)
        throw new Error("Could not find Vuetify theme injection");
    const t = g(()=>e.theme ?? (n == null ? void 0 : n.name.value))
      , a = g(()=>n.isDisabled ? void 0 : `v-theme--${t.value}`)
      , l = {
        ...n,
        name: t,
        themeClasses: a
    };
    return Te(In, l),
    l
}
function uo() {
    pe("useTheme");
    const e = ye(In, null);
    if (!e)
        throw new Error("Could not find Vuetify theme injection");
    return e
}
function Lt(e, n, t) {
    e.push(`${n} {
`, ...t.map(a=>`  ${a};
`), `}
`)
}
function gi(e) {
    const n = e.dark ? 2 : 1
      , t = e.dark ? 1 : 2
      , a = [];
    for (const [l,i] of Object.entries(e.colors)) {
        const o = gt(i);
        a.push(`--v-theme-${l}: ${o.r},${o.g},${o.b}`),
        l.startsWith("on-") || a.push(`--v-theme-${l}-overlay-multiplier: ${Ea(i) > .18 ? n : t}`)
    }
    for (const [l,i] of Object.entries(e.variables)) {
        const o = typeof i == "string" && i.startsWith("#") ? gt(i) : void 0
          , s = o ? `${o.r}, ${o.g}, ${o.b}` : void 0;
        a.push(`--v-${l}: ${s ?? i}`)
    }
    return a
}
const Fa = {
    "001": 1,
    AD: 1,
    AE: 6,
    AF: 6,
    AG: 0,
    AI: 1,
    AL: 1,
    AM: 1,
    AN: 1,
    AR: 1,
    AS: 0,
    AT: 1,
    AU: 1,
    AX: 1,
    AZ: 1,
    BA: 1,
    BD: 0,
    BE: 1,
    BG: 1,
    BH: 6,
    BM: 1,
    BN: 1,
    BR: 0,
    BS: 0,
    BT: 0,
    BW: 0,
    BY: 1,
    BZ: 0,
    CA: 0,
    CH: 1,
    CL: 1,
    CM: 1,
    CN: 1,
    CO: 0,
    CR: 1,
    CY: 1,
    CZ: 1,
    DE: 1,
    DJ: 6,
    DK: 1,
    DM: 0,
    DO: 0,
    DZ: 6,
    EC: 1,
    EE: 1,
    EG: 6,
    ES: 1,
    ET: 0,
    FI: 1,
    FJ: 1,
    FO: 1,
    FR: 1,
    GB: 1,
    "GB-alt-variant": 0,
    GE: 1,
    GF: 1,
    GP: 1,
    GR: 1,
    GT: 0,
    GU: 0,
    HK: 0,
    HN: 0,
    HR: 1,
    HU: 1,
    ID: 0,
    IE: 1,
    IL: 0,
    IN: 0,
    IQ: 6,
    IR: 6,
    IS: 1,
    IT: 1,
    JM: 0,
    JO: 6,
    JP: 0,
    KE: 0,
    KG: 1,
    KH: 0,
    KR: 0,
    KW: 6,
    KZ: 1,
    LA: 0,
    LB: 1,
    LI: 1,
    LK: 1,
    LT: 1,
    LU: 1,
    LV: 1,
    LY: 6,
    MC: 1,
    MD: 1,
    ME: 1,
    MH: 0,
    MK: 1,
    MM: 0,
    MN: 1,
    MO: 0,
    MQ: 1,
    MT: 0,
    MV: 5,
    MX: 0,
    MY: 1,
    MZ: 0,
    NI: 0,
    NL: 1,
    NO: 1,
    NP: 0,
    NZ: 1,
    OM: 6,
    PA: 0,
    PE: 0,
    PH: 0,
    PK: 0,
    PL: 1,
    PR: 0,
    PT: 0,
    PY: 0,
    QA: 6,
    RE: 1,
    RO: 1,
    RS: 1,
    RU: 1,
    SA: 0,
    SD: 6,
    SE: 1,
    SG: 0,
    SI: 1,
    SK: 1,
    SM: 1,
    SV: 0,
    SY: 6,
    TH: 0,
    TJ: 1,
    TM: 1,
    TR: 1,
    TT: 0,
    TW: 0,
    UA: 1,
    UM: 0,
    US: 0,
    UY: 1,
    UZ: 1,
    VA: 1,
    VE: 0,
    VI: 0,
    VN: 1,
    WS: 0,
    XK: 1,
    YE: 0,
    ZA: 0,
    ZW: 0
};
function Eu(e, n) {
    const t = [];
    let a = [];
    const l = co(e)
      , i = vo(e)
      , o = l.getDay() - Fa[n.slice(-2).toUpperCase()]
      , s = i.getDay() - Fa[n.slice(-2).toUpperCase()];
    for (let u = 0; u < o; u++) {
        const v = new Date(l);
        v.setDate(v.getDate() - (o - u)),
        a.push(v)
    }
    for (let u = 1; u <= i.getDate(); u++) {
        const v = new Date(e.getFullYear(),e.getMonth(),u);
        a.push(v),
        a.length === 7 && (t.push(a),
        a = [])
    }
    for (let u = 1; u < 7 - s; u++) {
        const v = new Date(i);
        v.setDate(v.getDate() + u),
        a.push(v)
    }
    return t.push(a),
    t
}
function co(e) {
    return new Date(e.getFullYear(),e.getMonth(),1)
}
function vo(e) {
    return new Date(e.getFullYear(),e.getMonth() + 1,0)
}
function Lu(e) {
    const n = e.split("-").map(Number);
    return new Date(n[0],n[1] - 1,n[2])
}
const Mu = /([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))/;
function Ou(e) {
    if (e == null)
        return new Date;
    if (e instanceof Date)
        return e;
    if (typeof e == "string") {
        let n;
        if (Mu.test(e))
            return Lu(e);
        if (n = Date.parse(e),
        !isNaN(n))
            return new Date(n)
    }
    return null
}
const hi = new Date(2e3,0,2);
function Fu(e) {
    const n = Fa[e.slice(-2).toUpperCase()];
    return mt(7).map(t=>{
        const a = new Date(hi);
        return a.setDate(hi.getDate() + n + t),
        new Intl.DateTimeFormat(e,{
            weekday: "narrow"
        }).format(a)
    }
    )
}
function Ru(e, n, t) {
    const a = new Date(e);
    let l = {};
    switch (n) {
    case "fullDateWithWeekday":
        l = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        };
        break;
    case "normalDateWithWeekday":
        l = {
            weekday: "short",
            day: "numeric",
            month: "short"
        };
        break;
    case "keyboardDate":
        l = {};
        break;
    case "monthAndDate":
        l = {
            month: "long",
            day: "numeric"
        };
        break;
    case "monthAndYear":
        l = {
            month: "long",
            year: "numeric"
        };
        break;
    case "dayOfMonth":
        l = {
            day: "numeric"
        };
        break;
    default:
        l = {
            timeZone: "UTC",
            timeZoneName: "short"
        }
    }
    return new Intl.DateTimeFormat(t,l).format(a)
}
function Du(e, n) {
    const t = new Date(e);
    return t.setDate(t.getDate() + n),
    t
}
function zu(e, n) {
    const t = new Date(e);
    return t.setMonth(t.getMonth() + n),
    t
}
function Nu(e) {
    return e.getFullYear()
}
function Hu(e) {
    return e.getMonth()
}
function ju(e) {
    return new Date(e.getFullYear(),0,1)
}
function Gu(e) {
    return new Date(e.getFullYear(),11,31)
}
function Wu(e, n) {
    return Ra(e, n[0]) && Yu(e, n[1])
}
function Uu(e) {
    const n = new Date(e);
    return n instanceof Date && !isNaN(n.getTime())
}
function Ra(e, n) {
    return e.getTime() > n.getTime()
}
function Yu(e, n) {
    return e.getTime() < n.getTime()
}
function yi(e, n) {
    return e.getTime() === n.getTime()
}
function Ku(e, n) {
    return e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear()
}
function Xu(e, n) {
    return e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear()
}
function qu(e, n, t) {
    const a = new Date(e)
      , l = new Date(n);
    return t === "month" ? a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12 : Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24))
}
function Zu(e, n) {
    const t = new Date(e);
    return t.setFullYear(n),
    t
}
class Ju {
    constructor(n) {
        this.locale = n.locale
    }
    date(n) {
        return Ou(n)
    }
    toJsDate(n) {
        return n
    }
    addDays(n, t) {
        return Du(n, t)
    }
    addMonths(n, t) {
        return zu(n, t)
    }
    getWeekArray(n) {
        return Eu(n, this.locale)
    }
    startOfMonth(n) {
        return co(n)
    }
    endOfMonth(n) {
        return vo(n)
    }
    format(n, t) {
        return Ru(n, t, this.locale)
    }
    isEqual(n, t) {
        return yi(n, t)
    }
    isValid(n) {
        return Uu(n)
    }
    isWithinRange(n, t) {
        return Wu(n, t)
    }
    isAfter(n, t) {
        return Ra(n, t)
    }
    isBefore(n, t) {
        return !Ra(n, t) && !yi(n, t)
    }
    isSameDay(n, t) {
        return Ku(n, t)
    }
    isSameMonth(n, t) {
        return Xu(n, t)
    }
    setYear(n, t) {
        return Zu(n, t)
    }
    getDiff(n, t, a) {
        return qu(n, t, a)
    }
    getWeekdays() {
        return Fu(this.locale)
    }
    getYear(n) {
        return Nu(n)
    }
    getMonth(n) {
        return Hu(n)
    }
    startOfYear(n) {
        return ju(n)
    }
    endOfYear(n) {
        return Gu(n)
    }
}
const bi = Symbol.for("vuetify:date-adapter");
function Qu(e) {
    return Ze({
        adapter: Ju,
        locale: {
            af: "af-ZA",
            bg: "bg-BG",
            ca: "ca-ES",
            ckb: "",
            cs: "",
            de: "de-DE",
            el: "el-GR",
            en: "en-US",
            et: "et-EE",
            fa: "fa-IR",
            fi: "fi-FI",
            hr: "hr-HR",
            hu: "hu-HU",
            he: "he-IL",
            id: "id-ID",
            it: "it-IT",
            ja: "ja-JP",
            ko: "ko-KR",
            lv: "lv-LV",
            lt: "lt-LT",
            nl: "nl-NL",
            no: "nn-NO",
            pl: "pl-PL",
            pt: "pt-PT",
            ro: "ro-RO",
            ru: "ru-RU",
            sk: "sk-SK",
            sl: "sl-SI",
            srCyrl: "sr-SP",
            srLatn: "sr-SP",
            sv: "sv-SE",
            th: "th-TH",
            tr: "tr-TR",
            az: "az-AZ",
            uk: "uk-UA",
            vi: "vi-VN",
            zhHans: "zh-CN",
            zhHant: "zh-TW"
        }
    }, e)
}
function ct(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
    const t = U()
      , a = U();
    if (ke) {
        const l = new ResizeObserver(i=>{
            e == null || e(i, l),
            i.length && (n === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect())
        }
        );
        Ue(()=>{
            l.disconnect()
        }
        ),
        Z(t, (i,o)=>{
            o && (l.unobserve(Ba(o)),
            a.value = void 0),
            i && l.observe(Ba(i))
        }
        , {
            flush: "post"
        })
    }
    return {
        resizeRef: t,
        contentRect: sl(a)
    }
}
const Jn = Symbol.for("vuetify:layout")
  , fo = Symbol.for("vuetify:layout-item")
  , Si = 1e3
  , mo = T({
    overlaps: {
        type: Array,
        default: ()=>[]
    },
    fullHeight: Boolean
}, "layout")
  , sn = T({
    name: {
        type: String
    },
    order: {
        type: [Number, String],
        default: 0
    },
    absolute: Boolean
}, "layout-item");
function ec() {
    const e = ye(Jn);
    if (!e)
        throw new Error("[Vuetify] Could not find injected layout");
    return {
        getLayoutItem: e.getLayoutItem,
        mainRect: e.mainRect,
        mainStyles: e.mainStyles
    }
}
function rn(e) {
    const n = ye(Jn);
    if (!n)
        throw new Error("[Vuetify] Could not find injected layout");
    const t = e.id ?? `layout-item-${Re()}`
      , a = pe("useLayoutItem");
    Te(fo, {
        id: t
    });
    const l = Y(!1);
    lr(()=>l.value = !0),
    ir(()=>l.value = !1);
    const {layoutItemStyles: i, layoutItemScrimStyles: o} = n.register(a, {
        ...e,
        active: g(()=>l.value ? !1 : e.active.value),
        id: t
    });
    return Ue(()=>n.unregister(t)),
    {
        layoutItemStyles: i,
        layoutRect: n.layoutRect,
        layoutItemScrimStyles: o
    }
}
const tc = (e,n,t,a)=>{
    let l = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    const i = [{
        id: "",
        layer: {
            ...l
        }
    }];
    for (const o of e) {
        const s = n.get(o)
          , u = t.get(o)
          , v = a.get(o);
        if (!s || !u || !v)
            continue;
        const c = {
            ...l,
            [s.value]: parseInt(l[s.value], 10) + (v.value ? parseInt(u.value, 10) : 0)
        };
        i.push({
            id: o,
            layer: c
        }),
        l = c
    }
    return i
}
;
function go(e) {
    const n = ye(Jn, null)
      , t = g(()=>n ? n.rootZIndex.value - 100 : Si)
      , a = U([])
      , l = it(new Map)
      , i = it(new Map)
      , o = it(new Map)
      , s = it(new Map)
      , u = it(new Map)
      , {resizeRef: v, contentRect: c} = ct()
      , d = g(()=>{
        const I = new Map
          , x = e.overlaps ?? [];
        for (const k of x.filter(w=>w.includes(":"))) {
            const [w,_] = k.split(":");
            if (!a.value.includes(w) || !a.value.includes(_))
                continue;
            const B = l.get(w)
              , p = l.get(_)
              , $ = i.get(w)
              , F = i.get(_);
            !B || !p || !$ || !F || (I.set(_, {
                position: B.value,
                amount: parseInt($.value, 10)
            }),
            I.set(w, {
                position: p.value,
                amount: -parseInt(F.value, 10)
            }))
        }
        return I
    }
    )
      , f = g(()=>{
        const I = [...new Set([...o.values()].map(k=>k.value))].sort((k,w)=>k - w)
          , x = [];
        for (const k of I) {
            const w = a.value.filter(_=>{
                var B;
                return ((B = o.get(_)) == null ? void 0 : B.value) === k
            }
            );
            x.push(...w)
        }
        return tc(x, l, i, s)
    }
    )
      , m = g(()=>!Array.from(u.values()).some(I=>I.value))
      , h = g(()=>f.value[f.value.length - 1].layer)
      , y = g(()=>({
        "--v-layout-left": q(h.value.left),
        "--v-layout-right": q(h.value.right),
        "--v-layout-top": q(h.value.top),
        "--v-layout-bottom": q(h.value.bottom),
        ...m.value ? void 0 : {
            transition: "none"
        }
    }))
      , S = g(()=>f.value.slice(1).map((I,x)=>{
        let {id: k} = I;
        const {layer: w} = f.value[x]
          , _ = i.get(k)
          , B = l.get(k);
        return {
            id: k,
            ...w,
            size: Number(_.value),
            position: B.value
        }
    }
    ))
      , b = I=>S.value.find(x=>x.id === I)
      , C = pe("createLayout")
      , V = Y(!1);
    Ne(()=>{
        V.value = !0
    }
    ),
    Te(Jn, {
        register: (I,x)=>{
            let {id: k, order: w, position: _, layoutSize: B, elementSize: p, active: $, disableTransitions: F, absolute: E} = x;
            o.set(k, w),
            l.set(k, _),
            i.set(k, B),
            s.set(k, $),
            F && u.set(k, F);
            const G = kn(fo, C == null ? void 0 : C.vnode).indexOf(I);
            G > -1 ? a.value.splice(G, 0, k) : a.value.push(k);
            const R = g(()=>S.value.findIndex(Q=>Q.id === k))
              , j = g(()=>t.value + f.value.length * 2 - R.value * 2)
              , L = g(()=>{
                const Q = _.value === "left" || _.value === "right"
                  , re = _.value === "right"
                  , oe = _.value === "bottom"
                  , de = {
                    [_.value]: 0,
                    zIndex: j.value,
                    transform: `translate ${Q ? "X" : "Y"}(${($.value ? 0 : -110) * (re || oe ? -1 : 1)}%)`,
                    position: E.value || t.value !== Si ? "absolute" : "fixed",
                    ...m.value ? void 0 : {
                        transition: "none"
                    }
                };
                if (!V.value)
                    return de;
                const N = S.value[R.value];
                if (!N)
                    throw new Error(`[Vuetify] Could not find layout item "${k}"`);
                const ue = d.value.get(k);
                return ue && (N[ue.position] += ue.amount),
                {
                    ...de,
                    height: Q ? `calc(100% - ${N.top}px - ${N.bottom}px)` : p.value ? `${p.value}px` : void 0,
                    left: re ? void 0 : `${N.left}px`,
                    right: re ? `${N.right}px` : void 0,
                    top: _.value !== "bottom" ? `${N.top}px` : void 0,
                    bottom: _.value !== "top" ? `${N.bottom}px` : void 0,
                    width: Q ? p.value ? `${p.value}px` : void 0 : `calc(100% - ${N.left}px - ${N.right}px)`
                }
            }
            )
              , W = g(()=>({
                zIndex: j.value - 1
            }));
            return {
                layoutItemStyles: L,
                layoutItemScrimStyles: W,
                zIndex: j
            }
        }
        ,
        unregister: I=>{
            o.delete(I),
            l.delete(I),
            i.delete(I),
            s.delete(I),
            u.delete(I),
            a.value = a.value.filter(x=>x !== I)
        }
        ,
        mainRect: h,
        mainStyles: y,
        getLayoutItem: b,
        items: S,
        layoutRect: c,
        rootZIndex: t
    });
    const P = g(()=>["v-layout", {
        "v-layout--full-height": e.fullHeight
    }])
      , A = g(()=>({
        zIndex: t.value,
        position: n ? "relative" : void 0,
        overflow: n ? "hidden" : void 0
    }));
    return {
        layoutClasses: P,
        layoutStyles: A,
        getLayoutItem: b,
        items: S,
        layoutRect: c,
        layoutRef: v
    }
}
function ho() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {blueprint: n, ...t} = e
      , a = Ze(n, t)
      , {aliases: l={}, components: i={}, directives: o={}} = a
      , s = iu(a.defaults)
      , u = uu(a.display, a.ssr)
      , v = $u(a.theme)
      , c = mu(a.icons)
      , d = Cu(a.locale)
      , f = Qu(a.date);
    return {
        install: h=>{
            for (const y in o)
                h.directive(y, o[y]);
            for (const y in i)
                h.component(y, i[y]);
            for (const y in l)
                h.component(y, Qe({
                    ...l[y],
                    name: y,
                    aliasName: l[y].name
                }));
            if (v.install(h),
            h.provide(Pn, s),
            h.provide(La, u),
            h.provide(In, v),
            h.provide(Ma, c),
            h.provide(nn, d),
            h.provide(bi, f),
            ke && a.ssr)
                if (h.$nuxt)
                    h.$nuxt.hook("app:suspense:resolve", ()=>{
                        u.update()
                    }
                    );
                else {
                    const {mount: y} = h;
                    h.mount = function() {
                        const S = y(...arguments);
                        return Se(()=>u.update()),
                        h.mount = y,
                        S
                    }
                }
            Re.reset(),
            h.mixin({
                computed: {
                    $vuetify() {
                        return it({
                            defaults: qt.call(this, Pn),
                            display: qt.call(this, La),
                            theme: qt.call(this, In),
                            icons: qt.call(this, Ma),
                            locale: qt.call(this, nn),
                            date: qt.call(this, bi)
                        })
                    }
                }
            })
        }
        ,
        defaults: s,
        display: u,
        theme: v,
        icons: c,
        locale: d,
        date: f
    }
}
const nc = "3.3.12";
ho.version = nc;
function qt(e) {
    var a, l;
    const n = this.$
      , t = ((a = n.parent) == null ? void 0 : a.provides) ?? ((l = n.vnode.appContext) == null ? void 0 : l.provides);
    if (t && e in t)
        return t[e]
}
const ac = T({
    ...X(),
    ...mo({
        fullHeight: !0
    }),
    ...ce()
}, "VApp")
  , lc = M()({
    name: "VApp",
    props: ac(),
    setup(e, n) {
        let {slots: t} = n;
        const a = me(e)
          , {layoutClasses: l, layoutStyles: i, getLayoutItem: o, items: s, layoutRef: u} = go(e)
          , {rtlClasses: v} = $e();
        return D(()=>{
            var c;
            return r("div", {
                ref: u,
                class: ["v-application", a.themeClasses.value, l.value, v.value, e.class],
                style: [i.value, e.style]
            }, [r("div", {
                class: "v-application__wrap"
            }, [(c = t.default) == null ? void 0 : c.call(t)])])
        }
        ),
        {
            getLayoutItem: o,
            items: s,
            theme: a
        }
    }
});
const le = T({
    tag: {
        type: String,
        default: "div"
    }
}, "tag")
  , yo = T({
    text: String,
    ...X(),
    ...le()
}, "VToolbarTitle")
  , kl = M()({
    name: "VToolbarTitle",
    props: yo(),
    setup(e, n) {
        let {slots: t} = n;
        return D(()=>{
            const a = !!(t.default || t.text || e.text);
            return r(e.tag, {
                class: ["v-toolbar-title", e.class],
                style: e.style
            }, {
                default: ()=>{
                    var l;
                    return [a && r("div", {
                        class: "v-toolbar-title__placeholder"
                    }, [t.text ? t.text() : e.text, (l = t.default) == null ? void 0 : l.call(t)])]
                }
            })
        }
        ),
        {}
    }
})
  , ic = T({
    disabled: Boolean,
    group: Boolean,
    hideOnLeave: Boolean,
    leaveAbsolute: Boolean,
    mode: String,
    origin: String
}, "transition");
function Ke(e, n, t) {
    return M()({
        name: e,
        props: ic({
            mode: t,
            origin: n
        }),
        setup(a, l) {
            let {slots: i} = l;
            const o = {
                onBeforeEnter(s) {
                    a.origin && (s.style.transformOrigin = a.origin)
                },
                onLeave(s) {
                    if (a.leaveAbsolute) {
                        const {offsetTop: u, offsetLeft: v, offsetWidth: c, offsetHeight: d} = s;
                        s._transitionInitialStyles = {
                            position: s.style.position,
                            top: s.style.top,
                            left: s.style.left,
                            width: s.style.width,
                            height: s.style.height
                        },
                        s.style.position = "absolute",
                        s.style.top = `${u}px`,
                        s.style.left = `${v}px`,
                        s.style.width = `${c}px`,
                        s.style.height = `${d}px`
                    }
                    a.hideOnLeave && s.style.setProperty("display", "none", "important")
                },
                onAfterLeave(s) {
                    if (a.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
                        const {position: u, top: v, left: c, width: d, height: f} = s._transitionInitialStyles;
                        delete s._transitionInitialStyles,
                        s.style.position = u || "",
                        s.style.top = v || "",
                        s.style.left = c || "",
                        s.style.width = d || "",
                        s.style.height = f || ""
                    }
                }
            };
            return ()=>{
                const s = a.group ? or : xt;
                return It(s, {
                    name: a.disabled ? "" : e,
                    css: !a.disabled,
                    ...a.group ? void 0 : {
                        mode: a.mode
                    },
                    ...a.disabled ? {} : o
                }, i.default)
            }
        }
    })
}
function bo(e, n) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
    return M()({
        name: e,
        props: {
            mode: {
                type: String,
                default: t
            },
            disabled: Boolean
        },
        setup(a, l) {
            let {slots: i} = l;
            return ()=>It(xt, {
                name: a.disabled ? "" : e,
                css: !a.disabled,
                ...a.disabled ? {} : n
            }, i.default)
        }
    })
}
function So() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height"
      , a = zi(`offset-${t}`);
    return {
        onBeforeEnter(o) {
            o._parent = o.parentNode,
            o._initialStyle = {
                transition: o.style.transition,
                overflow: o.style.overflow,
                [t]: o.style[t]
            }
        },
        onEnter(o) {
            const s = o._initialStyle;
            o.style.setProperty("transition", "none", "important"),
            o.style.overflow = "hidden";
            const u = `${o[a]}px`;
            o.style[t] = "0",
            o.offsetHeight,
            o.style.transition = s.transition,
            e && o._parent && o._parent.classList.add(e),
            requestAnimationFrame(()=>{
                o.style[t] = u
            }
            )
        },
        onAfterEnter: i,
        onEnterCancelled: i,
        onLeave(o) {
            o._initialStyle = {
                transition: "",
                overflow: o.style.overflow,
                [t]: o.style[t]
            },
            o.style.overflow = "hidden",
            o.style[t] = `${o[a]}px`,
            o.offsetHeight,
            requestAnimationFrame(()=>o.style[t] = "0")
        },
        onAfterLeave: l,
        onLeaveCancelled: l
    };
    function l(o) {
        e && o._parent && o._parent.classList.remove(e),
        i(o)
    }
    function i(o) {
        const s = o._initialStyle[t];
        o.style.overflow = o._initialStyle.overflow,
        s != null && (o.style[t] = s),
        delete o._initialStyle
    }
}
const oc = T({
    target: Object
}, "v-dialog-transition")
  , ia = M()({
    name: "VDialogTransition",
    props: oc(),
    setup(e, n) {
        let {slots: t} = n;
        const a = {
            onBeforeEnter(l) {
                l.style.pointerEvents = "none",
                l.style.visibility = "hidden"
            },
            async onEnter(l, i) {
                var f;
                await new Promise(m=>requestAnimationFrame(m)),
                await new Promise(m=>requestAnimationFrame(m)),
                l.style.visibility = "";
                const {x: o, y: s, sx: u, sy: v, speed: c} = ki(e.target, l)
                  , d = Ot(l, [{
                    transform: `translate(${o}px, ${s}px) scale(${u}, ${v})`,
                    opacity: 0
                }, {}], {
                    duration: 225 * c,
                    easing: eu
                });
                (f = Ci(l)) == null || f.forEach(m=>{
                    Ot(m, [{
                        opacity: 0
                    }, {
                        opacity: 0,
                        offset: .33
                    }, {}], {
                        duration: 225 * 2 * c,
                        easing: xn
                    })
                }
                ),
                d.finished.then(()=>i())
            },
            onAfterEnter(l) {
                l.style.removeProperty("pointer-events")
            },
            onBeforeLeave(l) {
                l.style.pointerEvents = "none"
            },
            async onLeave(l, i) {
                var f;
                await new Promise(m=>requestAnimationFrame(m));
                const {x: o, y: s, sx: u, sy: v, speed: c} = ki(e.target, l);
                Ot(l, [{}, {
                    transform: `translate(${o}px, ${s}px) scale(${u}, ${v})`,
                    opacity: 0
                }], {
                    duration: 125 * c,
                    easing: tu
                }).finished.then(()=>i()),
                (f = Ci(l)) == null || f.forEach(m=>{
                    Ot(m, [{}, {
                        opacity: 0,
                        offset: .2
                    }, {
                        opacity: 0
                    }], {
                        duration: 125 * 2 * c,
                        easing: xn
                    })
                }
                )
            },
            onAfterLeave(l) {
                l.style.removeProperty("pointer-events")
            }
        };
        return ()=>e.target ? r(xt, K({
            name: "dialog-transition"
        }, a, {
            css: !1
        }), t) : r(xt, {
            name: "dialog-transition"
        }, t)
    }
});
function Ci(e) {
    var t;
    const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
    return n && [...n]
}
function ki(e, n) {
    const t = e.getBoundingClientRect()
      , a = fl(n)
      , [l,i] = getComputedStyle(n).transformOrigin.split(" ").map(b=>parseFloat(b))
      , [o,s] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
    let u = t.left + t.width / 2;
    o === "left" || s === "left" ? u -= t.width / 2 : (o === "right" || s === "right") && (u += t.width / 2);
    let v = t.top + t.height / 2;
    o === "top" || s === "top" ? v -= t.height / 2 : (o === "bottom" || s === "bottom") && (v += t.height / 2);
    const c = t.width / a.width
      , d = t.height / a.height
      , f = Math.max(1, c, d)
      , m = c / f || 0
      , h = d / f || 0
      , y = a.width * a.height / (window.innerWidth * window.innerHeight)
      , S = y > .12 ? Math.min(1.5, (y - .12) * 10 + 1) : 1;
    return {
        x: u - (l + a.left),
        y: v - (i + a.top),
        sx: m,
        sy: h,
        speed: S
    }
}
const sc = Ke("fab-transition", "center center", "out-in")
  , rc = Ke("dialog-bottom-transition")
  , uc = Ke("dialog-top-transition")
  , Da = Ke("fade-transition")
  , Co = Ke("scale-transition")
  , cc = Ke("scroll-x-transition")
  , dc = Ke("scroll-x-reverse-transition")
  , vc = Ke("scroll-y-transition")
  , fc = Ke("scroll-y-reverse-transition")
  , mc = Ke("slide-x-transition")
  , gc = Ke("slide-x-reverse-transition")
  , Vl = Ke("slide-y-transition")
  , hc = Ke("slide-y-reverse-transition")
  , oa = bo("expand-transition", So())
  , wl = bo("expand-x-transition", So("", !0))
  , yc = T({
    defaults: Object,
    disabled: Boolean,
    reset: [Number, String],
    root: [Boolean, String],
    scoped: Boolean
}, "VDefaultsProvider")
  , ge = M(!1)({
    name: "VDefaultsProvider",
    props: yc(),
    setup(e, n) {
        let {slots: t} = n;
        const {defaults: a, disabled: l, reset: i, root: o, scoped: s} = ol(e);
        return xe(a, {
            reset: i,
            root: o,
            scoped: s,
            disabled: l
        }),
        ()=>{
            var u;
            return (u = t.default) == null ? void 0 : u.call(t)
        }
    }
});
const tt = T({
    height: [Number, String],
    maxHeight: [Number, String],
    maxWidth: [Number, String],
    minHeight: [Number, String],
    minWidth: [Number, String],
    width: [Number, String]
}, "dimension");
function nt(e) {
    return {
        dimensionStyles: g(()=>({
            height: q(e.height),
            maxHeight: q(e.maxHeight),
            maxWidth: q(e.maxWidth),
            minHeight: q(e.minHeight),
            minWidth: q(e.minWidth),
            width: q(e.width)
        }))
    }
}
function bc(e) {
    return {
        aspectStyles: g(()=>{
            const n = Number(e.aspectRatio);
            return n ? {
                paddingBottom: String(1 / n * 100) + "%"
            } : void 0
        }
        )
    }
}
const ko = T({
    aspectRatio: [String, Number],
    contentClass: String,
    inline: Boolean,
    ...X(),
    ...tt()
}, "VResponsive")
  , za = M()({
    name: "VResponsive",
    props: ko(),
    setup(e, n) {
        let {slots: t} = n;
        const {aspectStyles: a} = bc(e)
          , {dimensionStyles: l} = nt(e);
        return D(()=>{
            var i;
            return r("div", {
                class: ["v-responsive", {
                    "v-responsive--inline": e.inline
                }, e.class],
                style: [l.value, e.style]
            }, [r("div", {
                class: "v-responsive__sizer",
                style: a.value
            }, null), (i = t.additional) == null ? void 0 : i.call(t), t.default && r("div", {
                class: ["v-responsive__content", e.contentClass]
            }, [t.default()])])
        }
        ),
        {}
    }
})
  , kt = T({
    transition: {
        type: [Boolean, String, Object],
        default: "fade-transition",
        validator: e=>e !== !0
    }
}, "transition")
  , ot = (e,n)=>{
    let {slots: t} = n;
    const {transition: a, disabled: l, ...i} = e
      , {component: o=xt, ...s} = typeof a == "object" ? a : {};
    return It(o, K(typeof a == "string" ? {
        name: l ? "" : a
    } : s, i, {
        disabled: l
    }), t)
}
;
function Sc(e, n) {
    if (!ul)
        return;
    const t = n.modifiers || {}
      , a = n.value
      , {handler: l, options: i} = typeof a == "object" ? a : {
        handler: a,
        options: {}
    }
      , o = new IntersectionObserver(function() {
        var d;
        let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
          , u = arguments.length > 1 ? arguments[1] : void 0;
        const v = (d = e._observe) == null ? void 0 : d[n.instance.$.uid];
        if (!v)
            return;
        const c = s.some(f=>f.isIntersecting);
        l && (!t.quiet || v.init) && (!t.once || c || v.init) && l(c, s, u),
        c && t.once ? Vo(e, n) : v.init = !0
    }
    ,i);
    e._observe = Object(e._observe),
    e._observe[n.instance.$.uid] = {
        init: !1,
        observer: o
    },
    o.observe(e)
}
function Vo(e, n) {
    var a;
    const t = (a = e._observe) == null ? void 0 : a[n.instance.$.uid];
    t && (t.observer.unobserve(e),
    delete e._observe[n.instance.$.uid])
}
const En = {
    mounted: Sc,
    unmounted: Vo
}
  , wo = T({
    alt: String,
    cover: Boolean,
    eager: Boolean,
    gradient: String,
    lazySrc: String,
    options: {
        type: Object,
        default: ()=>({
            root: void 0,
            rootMargin: void 0,
            threshold: void 0
        })
    },
    sizes: String,
    src: {
        type: [String, Object],
        default: ""
    },
    srcset: String,
    ...ko(),
    ...X(),
    ...kt()
}, "VImg")
  , Dt = M()({
    name: "VImg",
    directives: {
        intersect: En
    },
    props: wo(),
    emits: {
        loadstart: e=>!0,
        load: e=>!0,
        error: e=>!0
    },
    setup(e, n) {
        let {emit: t, slots: a} = n;
        const l = Y("")
          , i = U()
          , o = Y(e.eager ? "loading" : "idle")
          , s = Y()
          , u = Y()
          , v = g(()=>e.src && typeof e.src == "object" ? {
            src: e.src.src,
            srcset: e.srcset || e.src.srcset,
            lazySrc: e.lazySrc || e.src.lazySrc,
            aspect: Number(e.aspectRatio || e.src.aspect || 0)
        } : {
            src: e.src,
            srcset: e.srcset,
            lazySrc: e.lazySrc,
            aspect: Number(e.aspectRatio || 0)
        })
          , c = g(()=>v.value.aspect || s.value / u.value || 0);
        Z(()=>e.src, ()=>{
            d(o.value !== "idle")
        }
        ),
        Z(c, (k,w)=>{
            !k && w && i.value && S(i.value)
        }
        ),
        rl(()=>d());
        function d(k) {
            if (!(e.eager && k) && !(ul && !k && !e.eager)) {
                if (o.value = "loading",
                v.value.lazySrc) {
                    const w = new Image;
                    w.src = v.value.lazySrc,
                    S(w, null)
                }
                v.value.src && Se(()=>{
                    var w, _;
                    if (t("loadstart", ((w = i.value) == null ? void 0 : w.currentSrc) || v.value.src),
                    (_ = i.value) != null && _.complete) {
                        if (i.value.naturalWidth || m(),
                        o.value === "error")
                            return;
                        c.value || S(i.value, null),
                        f()
                    } else
                        c.value || S(i.value),
                        h()
                }
                )
            }
        }
        function f() {
            var k;
            h(),
            o.value = "loaded",
            t("load", ((k = i.value) == null ? void 0 : k.currentSrc) || v.value.src)
        }
        function m() {
            var k;
            o.value = "error",
            t("error", ((k = i.value) == null ? void 0 : k.currentSrc) || v.value.src)
        }
        function h() {
            const k = i.value;
            k && (l.value = k.currentSrc || k.src)
        }
        let y = -1;
        function S(k) {
            let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
            const _ = ()=>{
                clearTimeout(y);
                const {naturalHeight: B, naturalWidth: p} = k;
                B || p ? (s.value = p,
                u.value = B) : !k.complete && o.value === "loading" && w != null ? y = window.setTimeout(_, w) : (k.currentSrc.endsWith(".svg") || k.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1,
                u.value = 1)
            }
            ;
            _()
        }
        const b = g(()=>({
            "v-img__img--cover": e.cover,
            "v-img__img--contain": !e.cover
        }))
          , C = ()=>{
            var _;
            if (!v.value.src || o.value === "idle")
                return null;
            const k = r("img", {
                class: ["v-img__img", b.value],
                src: v.value.src,
                srcset: v.value.srcset,
                alt: e.alt,
                sizes: e.sizes,
                ref: i,
                onLoad: f,
                onError: m
            }, null)
              , w = (_ = a.sources) == null ? void 0 : _.call(a);
            return r(ot, {
                transition: e.transition,
                appear: !0
            }, {
                default: ()=>[Ve(w ? r("picture", {
                    class: "v-img__picture"
                }, [w, k]) : k, [[dt, o.value === "loaded"]])]
            })
        }
          , V = ()=>r(ot, {
            transition: e.transition
        }, {
            default: ()=>[v.value.lazySrc && o.value !== "loaded" && r("img", {
                class: ["v-img__img", "v-img__img--preload", b.value],
                src: v.value.lazySrc,
                alt: e.alt
            }, null)]
        })
          , P = ()=>a.placeholder ? r(ot, {
            transition: e.transition,
            appear: !0
        }, {
            default: ()=>[(o.value === "loading" || o.value === "error" && !a.error) && r("div", {
                class: "v-img__placeholder"
            }, [a.placeholder()])]
        }) : null
          , A = ()=>a.error ? r(ot, {
            transition: e.transition,
            appear: !0
        }, {
            default: ()=>[o.value === "error" && r("div", {
                class: "v-img__error"
            }, [a.error()])]
        }) : null
          , I = ()=>e.gradient ? r("div", {
            class: "v-img__gradient",
            style: {
                backgroundImage: `linear-gradient(${e.gradient})`
            }
        }, null) : null
          , x = Y(!1);
        {
            const k = Z(c, w=>{
                w && (requestAnimationFrame(()=>{
                    requestAnimationFrame(()=>{
                        x.value = !0
                    }
                    )
                }
                ),
                k())
            }
            )
        }
        return D(()=>{
            const [k] = za.filterProps(e);
            return Ve(r(za, K({
                class: ["v-img", {
                    "v-img--booting": !x.value
                }, e.class],
                style: [{
                    width: q(e.width === "auto" ? s.value : e.width)
                }, e.style]
            }, k, {
                aspectRatio: c.value,
                "aria-label": e.alt,
                role: e.alt ? "img" : void 0
            }), {
                additional: ()=>r(se, null, [r(C, null, null), r(V, null, null), r(I, null, null), r(P, null, null), r(A, null, null)]),
                default: a.default
            }), [[Ye("intersect"), {
                handler: d,
                options: e.options
            }, null, {
                once: !0
            }]])
        }
        ),
        {
            currentSrc: l,
            image: i,
            state: o,
            naturalWidth: s,
            naturalHeight: u
        }
    }
})
  , Xe = T({
    border: [Boolean, Number, String]
}, "border");
function at(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ct();
    return {
        borderClasses: g(()=>{
            const a = $n(e) ? e.value : e.border
              , l = [];
            if (a === !0 || a === "")
                l.push(`${n}--border`);
            else if (typeof a == "string" || a === 0)
                for (const i of String(a).split(" "))
                    l.push(`border-${i}`);
            return l
        }
        )
    }
}
function xl(e) {
    return cl(()=>{
        const n = []
          , t = {};
        return e.value.background && (Jl(e.value.background) ? t.backgroundColor = e.value.background : n.push(`bg-${e.value.background}`)),
        e.value.text && (Jl(e.value.text) ? (t.color = e.value.text,
        t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)),
        {
            colorClasses: n,
            colorStyles: t
        }
    }
    )
}
function Fe(e, n) {
    const t = g(()=>({
        text: $n(e) ? e.value : n ? e[n] : null
    }))
      , {colorClasses: a, colorStyles: l} = xl(t);
    return {
        textColorClasses: a,
        textColorStyles: l
    }
}
function Pe(e, n) {
    const t = g(()=>({
        background: $n(e) ? e.value : n ? e[n] : null
    }))
      , {colorClasses: a, colorStyles: l} = xl(t);
    return {
        backgroundColorClasses: a,
        backgroundColorStyles: l
    }
}
const Ae = T({
    elevation: {
        type: [Number, String],
        validator(e) {
            const n = parseInt(e);
            return !isNaN(n) && n >= 0 && n <= 24
        }
    }
}, "elevation");
function Le(e) {
    return {
        elevationClasses: g(()=>{
            const t = $n(e) ? e.value : e.elevation
              , a = [];
            return t == null || a.push(`elevation-${t}`),
            a
        }
        )
    }
}
const Ce = T({
    rounded: {
        type: [Boolean, Number, String],
        default: void 0
    }
}, "rounded");
function we(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ct();
    return {
        roundedClasses: g(()=>{
            const a = $n(e) ? e.value : e.rounded
              , l = [];
            if (a === !0 || a === "")
                l.push(`${n}--rounded`);
            else if (typeof a == "string" || a === 0)
                for (const i of String(a).split(" "))
                    l.push(`rounded-${i}`);
            return l
        }
        )
    }
}
const Cc = [null, "prominent", "default", "comfortable", "compact"]
  , xo = T({
    absolute: Boolean,
    collapse: Boolean,
    color: String,
    density: {
        type: String,
        default: "default",
        validator: e=>Cc.includes(e)
    },
    extended: Boolean,
    extensionHeight: {
        type: [Number, String],
        default: 48
    },
    flat: Boolean,
    floating: Boolean,
    height: {
        type: [Number, String],
        default: 64
    },
    image: String,
    title: String,
    ...Xe(),
    ...X(),
    ...Ae(),
    ...Ce(),
    ...le({
        tag: "header"
    }),
    ...ce()
}, "VToolbar")
  , Na = M()({
    name: "VToolbar",
    props: xo(),
    setup(e, n) {
        var m;
        let {slots: t} = n;
        const {backgroundColorClasses: a, backgroundColorStyles: l} = Pe(O(e, "color"))
          , {borderClasses: i} = at(e)
          , {elevationClasses: o} = Le(e)
          , {roundedClasses: s} = we(e)
          , {themeClasses: u} = me(e)
          , {rtlClasses: v} = $e()
          , c = Y(!!(e.extended || (m = t.extension) != null && m.call(t)))
          , d = g(()=>parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10))
          , f = g(()=>c.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
        return xe({
            VBtn: {
                variant: "text"
            }
        }),
        D(()=>{
            var b;
            const h = !!(e.title || t.title)
              , y = !!(t.image || e.image)
              , S = (b = t.extension) == null ? void 0 : b.call(t);
            return c.value = !!(e.extended || S),
            r(e.tag, {
                class: ["v-toolbar", {
                    "v-toolbar--absolute": e.absolute,
                    "v-toolbar--collapse": e.collapse,
                    "v-toolbar--flat": e.flat,
                    "v-toolbar--floating": e.floating,
                    [`v-toolbar--density-${e.density}`]: !0
                }, a.value, i.value, o.value, s.value, u.value, v.value, e.class],
                style: [l.value, e.style]
            }, {
                default: ()=>[y && r("div", {
                    key: "image",
                    class: "v-toolbar__image"
                }, [t.image ? r(ge, {
                    key: "image-defaults",
                    disabled: !e.image,
                    defaults: {
                        VImg: {
                            cover: !0,
                            src: e.image
                        }
                    }
                }, t.image) : r(Dt, {
                    key: "image-img",
                    cover: !0,
                    src: e.image
                }, null)]), r(ge, {
                    defaults: {
                        VTabs: {
                            height: q(d.value)
                        }
                    }
                }, {
                    default: ()=>{
                        var C, V, P;
                        return [r("div", {
                            class: "v-toolbar__content",
                            style: {
                                height: q(d.value)
                            }
                        }, [t.prepend && r("div", {
                            class: "v-toolbar__prepend"
                        }, [(C = t.prepend) == null ? void 0 : C.call(t)]), h && r(kl, {
                            key: "title",
                            text: e.title
                        }, {
                            text: t.title
                        }), (V = t.default) == null ? void 0 : V.call(t), t.append && r("div", {
                            class: "v-toolbar__append"
                        }, [(P = t.append) == null ? void 0 : P.call(t)])])]
                    }
                }), r(ge, {
                    defaults: {
                        VTabs: {
                            height: q(f.value)
                        }
                    }
                }, {
                    default: ()=>[r(oa, null, {
                        default: ()=>[c.value && r("div", {
                            class: "v-toolbar__extension",
                            style: {
                                height: q(f.value)
                            }
                        }, [S])]
                    })]
                })]
            })
        }
        ),
        {
            contentHeight: d,
            extensionHeight: f
        }
    }
})
  , kc = T({
    scrollTarget: {
        type: String
    },
    scrollThreshold: {
        type: [String, Number],
        default: 300
    }
}, "scroll");
function Vc(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {canScroll: t} = n;
    let a = 0;
    const l = U(null)
      , i = Y(0)
      , o = Y(0)
      , s = Y(0)
      , u = Y(!1)
      , v = Y(!1)
      , c = g(()=>Number(e.scrollThreshold))
      , d = g(()=>Oe((c.value - i.value) / c.value || 0))
      , f = ()=>{
        const m = l.value;
        !m || t && !t.value || (a = i.value,
        i.value = "window"in m ? m.pageYOffset : m.scrollTop,
        v.value = i.value < a,
        s.value = Math.abs(i.value - c.value))
    }
    ;
    return Z(v, ()=>{
        o.value = o.value || i.value
    }
    ),
    Z(u, ()=>{
        o.value = 0
    }
    ),
    Ne(()=>{
        Z(()=>e.scrollTarget, m=>{
            var y;
            const h = m ? document.querySelector(m) : window;
            h && h !== l.value && ((y = l.value) == null || y.removeEventListener("scroll", f),
            l.value = h,
            l.value.addEventListener("scroll", f, {
                passive: !0
            }))
        }
        , {
            immediate: !0
        })
    }
    ),
    Ue(()=>{
        var m;
        (m = l.value) == null || m.removeEventListener("scroll", f)
    }
    ),
    t && Z(t, f, {
        immediate: !0
    }),
    {
        scrollThreshold: c,
        currentScroll: i,
        currentThreshold: s,
        isScrollActive: u,
        scrollRatio: d,
        isScrollingUp: v,
        savedScroll: o
    }
}
function Gt() {
    const e = Y(!1);
    return Ne(()=>{
        window.requestAnimationFrame(()=>{
            e.value = !0
        }
        )
    }
    ),
    {
        ssrBootStyles: g(()=>e.value ? void 0 : {
            transition: "none !important"
        }),
        isBooted: sl(e)
    }
}
const wc = T({
    scrollBehavior: String,
    modelValue: {
        type: Boolean,
        default: !0
    },
    location: {
        type: String,
        default: "top",
        validator: e=>["top", "bottom"].includes(e)
    },
    ...xo(),
    ...sn(),
    ...kc(),
    height: {
        type: [Number, String],
        default: 64
    }
}, "VAppBar")
  , xc = M()({
    name: "VAppBar",
    props: wc(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = U()
          , l = ae(e, "modelValue")
          , i = g(()=>{
            var C;
            const b = new Set(((C = e.scrollBehavior) == null ? void 0 : C.split(" ")) ?? []);
            return {
                hide: b.has("hide"),
                inverted: b.has("inverted"),
                collapse: b.has("collapse"),
                elevate: b.has("elevate"),
                fadeImage: b.has("fade-image")
            }
        }
        )
          , o = g(()=>{
            const b = i.value;
            return b.hide || b.inverted || b.collapse || b.elevate || b.fadeImage || !l.value
        }
        )
          , {currentScroll: s, scrollThreshold: u, isScrollingUp: v, scrollRatio: c} = Vc(e, {
            canScroll: o
        })
          , d = g(()=>e.collapse || i.value.collapse && (i.value.inverted ? c.value > 0 : c.value === 0))
          , f = g(()=>e.flat || i.value.elevate && (i.value.inverted ? s.value > 0 : s.value === 0))
          , m = g(()=>i.value.fadeImage ? i.value.inverted ? 1 - c.value : c.value : void 0)
          , h = g(()=>{
            var V, P;
            if (i.value.hide && i.value.inverted)
                return 0;
            const b = ((V = a.value) == null ? void 0 : V.contentHeight) ?? 0
              , C = ((P = a.value) == null ? void 0 : P.extensionHeight) ?? 0;
            return b + C
        }
        );
        ht(g(()=>!!e.scrollBehavior), ()=>{
            Ge(()=>{
                i.value.hide ? i.value.inverted ? l.value = s.value > u.value : l.value = v.value || s.value < u.value : l.value = !0
            }
            )
        }
        );
        const {ssrBootStyles: y} = Gt()
          , {layoutItemStyles: S} = rn({
            id: e.name,
            order: g(()=>parseInt(e.order, 10)),
            position: O(e, "location"),
            layoutSize: h,
            elementSize: Y(void 0),
            active: l,
            absolute: O(e, "absolute")
        });
        return D(()=>{
            const [b] = Na.filterProps(e);
            return r(Na, K({
                ref: a,
                class: ["v-app-bar", {
                    "v-app-bar--bottom": e.location === "bottom"
                }, e.class],
                style: [{
                    ...S.value,
                    "--v-toolbar-image-opacity": m.value,
                    height: void 0,
                    ...y.value
                }, e.style]
            }, b, {
                collapse: d.value,
                flat: f.value
            }), t)
        }
        ),
        {}
    }
});
const Pc = [null, "default", "comfortable", "compact"]
  , Be = T({
    density: {
        type: String,
        default: "default",
        validator: e=>Pc.includes(e)
    }
}, "density");
function De(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ct();
    return {
        densityClasses: g(()=>`${n}--density-${e.density}`)
    }
}
const Ic = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Wt(e, n) {
    return r(se, null, [e && r("span", {
        key: "overlay",
        class: `${n}__overlay`
    }, null), r("span", {
        key: "underlay",
        class: `${n}__underlay`
    }, null)])
}
const lt = T({
    color: String,
    variant: {
        type: String,
        default: "elevated",
        validator: e=>Ic.includes(e)
    }
}, "variant");
function Ut(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ct();
    const t = g(()=>{
        const {variant: i} = qe(e);
        return `${n}--variant-${i}`
    }
    )
      , {colorClasses: a, colorStyles: l} = xl(g(()=>{
        const {variant: i, color: o} = qe(e);
        return {
            [["elevated", "flat"].includes(i) ? "background" : "text"]: o
        }
    }
    ));
    return {
        colorClasses: a,
        colorStyles: l,
        variantClasses: t
    }
}
const Po = T({
    divided: Boolean,
    ...Xe(),
    ...X(),
    ...Be(),
    ...Ae(),
    ...Ce(),
    ...le(),
    ...ce(),
    ...lt()
}, "VBtnGroup")
  , Ha = M()({
    name: "VBtnGroup",
    props: Po(),
    setup(e, n) {
        let {slots: t} = n;
        const {themeClasses: a} = me(e)
          , {densityClasses: l} = De(e)
          , {borderClasses: i} = at(e)
          , {elevationClasses: o} = Le(e)
          , {roundedClasses: s} = we(e);
        xe({
            VBtn: {
                height: "auto",
                color: O(e, "color"),
                density: O(e, "density"),
                flat: !0,
                variant: O(e, "variant")
            }
        }),
        D(()=>r(e.tag, {
            class: ["v-btn-group", {
                "v-btn-group--divided": e.divided
            }, a.value, i.value, l.value, o.value, s.value, e.class],
            style: e.style
        }, t))
    }
})
  , un = T({
    modelValue: {
        type: null,
        default: void 0
    },
    multiple: Boolean,
    mandatory: [Boolean, String],
    max: Number,
    selectedClass: String,
    disabled: Boolean
}, "group")
  , cn = T({
    value: null,
    disabled: Boolean,
    selectedClass: String
}, "group-item");
function dn(e, n) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    const a = pe("useGroupItem");
    if (!a)
        throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
    const l = Re();
    Te(Symbol.for(`${n.description}:id`), l);
    const i = ye(n, null);
    if (!i) {
        if (!t)
            return i;
        throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)
    }
    const o = O(e, "value")
      , s = g(()=>!!(i.disabled.value || e.disabled));
    i.register({
        id: l,
        value: o,
        disabled: s
    }, a),
    Ue(()=>{
        i.unregister(l)
    }
    );
    const u = g(()=>i.isSelected(l))
      , v = g(()=>u.value && [i.selectedClass.value, e.selectedClass]);
    return Z(u, c=>{
        a.emit("group:selected", {
            value: c
        })
    }
    ),
    {
        id: l,
        isSelected: u,
        toggle: ()=>i.select(l, !u.value),
        select: c=>i.select(l, c),
        selectedClass: v,
        value: o,
        disabled: s,
        group: i
    }
}
function Yt(e, n) {
    let t = !1;
    const a = it([])
      , l = ae(e, "modelValue", [], f=>f == null ? [] : Io(a, Je(f)), f=>{
        const m = Ac(a, f);
        return e.multiple ? m : m[0]
    }
    )
      , i = pe("useGroup");
    function o(f, m) {
        const h = f
          , y = Symbol.for(`${n.description}:id`)
          , b = kn(y, i == null ? void 0 : i.vnode).indexOf(m);
        b > -1 ? a.splice(b, 0, h) : a.push(h)
    }
    function s(f) {
        if (t)
            return;
        u();
        const m = a.findIndex(h=>h.id === f);
        a.splice(m, 1)
    }
    function u() {
        const f = a.find(m=>!m.disabled);
        f && e.mandatory === "force" && !l.value.length && (l.value = [f.id])
    }
    Ne(()=>{
        u()
    }
    ),
    Ue(()=>{
        t = !0
    }
    );
    function v(f, m) {
        const h = a.find(y=>y.id === f);
        if (!(m && (h != null && h.disabled)))
            if (e.multiple) {
                const y = l.value.slice()
                  , S = y.findIndex(C=>C === f)
                  , b = ~S;
                if (m = m ?? !b,
                b && e.mandatory && y.length <= 1 || !b && e.max != null && y.length + 1 > e.max)
                    return;
                S < 0 && m ? y.push(f) : S >= 0 && !m && y.splice(S, 1),
                l.value = y
            } else {
                const y = l.value.includes(f);
                if (e.mandatory && y)
                    return;
                l.value = m ?? !y ? [f] : []
            }
    }
    function c(f) {
        if (e.multiple,
        l.value.length) {
            const m = l.value[0]
              , h = a.findIndex(b=>b.id === m);
            let y = (h + f) % a.length
              , S = a[y];
            for (; S.disabled && y !== h; )
                y = (y + f) % a.length,
                S = a[y];
            if (S.disabled)
                return;
            l.value = [a[y].id]
        } else {
            const m = a.find(h=>!h.disabled);
            m && (l.value = [m.id])
        }
    }
    const d = {
        register: o,
        unregister: s,
        selected: l,
        select: v,
        disabled: O(e, "disabled"),
        prev: ()=>c(a.length - 1),
        next: ()=>c(1),
        isSelected: f=>l.value.includes(f),
        selectedClass: g(()=>e.selectedClass),
        items: g(()=>a),
        getItemIndex: f=>_c(a, f)
    };
    return Te(n, d),
    d
}
function _c(e, n) {
    const t = Io(e, [n]);
    return t.length ? e.findIndex(a=>a.id === t[0]) : -1
}
function Io(e, n) {
    const t = [];
    return n.forEach(a=>{
        const l = e.find(o=>Nt(a, o.value))
          , i = e[a];
        (l == null ? void 0 : l.value) != null ? t.push(l.id) : i != null && t.push(i.id)
    }
    ),
    t
}
function Ac(e, n) {
    const t = [];
    return n.forEach(a=>{
        const l = e.findIndex(i=>i.id === a);
        if (~l) {
            const i = e[l];
            t.push(i.value != null ? i.value : l)
        }
    }
    ),
    t
}
const Pl = Symbol.for("vuetify:v-btn-toggle")
  , Bc = T({
    ...Po(),
    ...un()
}, "VBtnToggle")
  , Tc = M()({
    name: "VBtnToggle",
    props: Bc(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const {isSelected: a, next: l, prev: i, select: o, selected: s} = Yt(e, Pl);
        return D(()=>{
            const [u] = Ha.filterProps(e);
            return r(Ha, K({
                class: ["v-btn-toggle", e.class]
            }, u, {
                style: e.style
            }), {
                default: ()=>{
                    var v;
                    return [(v = t.default) == null ? void 0 : v.call(t, {
                        isSelected: a,
                        next: l,
                        prev: i,
                        select: o,
                        selected: s
                    })]
                }
            })
        }
        ),
        {
            next: l,
            prev: i,
            select: o
        }
    }
});
const pc = ["x-small", "small", "default", "large", "x-large"]
  , Vt = T({
    size: {
        type: [String, Number],
        default: "default"
    }
}, "size");
function vn(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ct();
    return cl(()=>{
        let t, a;
        return Kn(pc, e.size) ? t = `${n}--size-${e.size}` : e.size && (a = {
            width: q(e.size),
            height: q(e.size)
        }),
        {
            sizeClasses: t,
            sizeStyles: a
        }
    }
    )
}
const $c = T({
    color: String,
    start: Boolean,
    end: Boolean,
    icon: ne,
    ...X(),
    ...Vt(),
    ...le({
        tag: "i"
    }),
    ...ce()
}, "VIcon")
  , he = M()({
    name: "VIcon",
    props: $c(),
    setup(e, n) {
        let {attrs: t, slots: a} = n;
        const l = U()
          , {themeClasses: i} = me(e)
          , {iconData: o} = gu(g(()=>l.value || e.icon))
          , {sizeClasses: s} = vn(e)
          , {textColorClasses: u, textColorStyles: v} = Fe(O(e, "color"));
        return D(()=>{
            var d, f;
            const c = (d = a.default) == null ? void 0 : d.call(a);
            return c && (l.value = (f = Gi(c).filter(m=>m.type === sr && m.children && typeof m.children == "string")[0]) == null ? void 0 : f.children),
            r(o.value.component, {
                tag: e.tag,
                icon: o.value.icon,
                class: ["v-icon", "notranslate", i.value, s.value, u.value, {
                    "v-icon--clickable": !!t.onClick,
                    "v-icon--start": e.start,
                    "v-icon--end": e.end
                }, e.class],
                style: [s.value ? void 0 : {
                    fontSize: q(e.size),
                    height: q(e.size),
                    width: q(e.size)
                }, v.value, e.style],
                role: t.onClick ? "button" : void 0,
                "aria-hidden": !t.onClick
            }, {
                default: ()=>[c]
            })
        }
        ),
        {}
    }
});
function Il(e, n) {
    const t = U()
      , a = Y(!1);
    if (ul) {
        const l = new IntersectionObserver(i=>{
            e == null || e(i, l),
            a.value = !!i.find(o=>o.isIntersecting)
        }
        ,n);
        Ue(()=>{
            l.disconnect()
        }
        ),
        Z(t, (i,o)=>{
            o && (l.unobserve(o),
            a.value = !1),
            i && l.observe(i)
        }
        , {
            flush: "post"
        })
    }
    return {
        intersectionRef: t,
        isIntersecting: a
    }
}
const Ec = T({
    bgColor: String,
    color: String,
    indeterminate: [Boolean, String],
    modelValue: {
        type: [Number, String],
        default: 0
    },
    rotate: {
        type: [Number, String],
        default: 0
    },
    width: {
        type: [Number, String],
        default: 4
    },
    ...X(),
    ...Vt(),
    ...le({
        tag: "div"
    }),
    ...ce()
}, "VProgressCircular")
  , _l = M()({
    name: "VProgressCircular",
    props: Ec(),
    setup(e, n) {
        let {slots: t} = n;
        const a = 20
          , l = 2 * Math.PI * a
          , i = U()
          , {themeClasses: o} = me(e)
          , {sizeClasses: s, sizeStyles: u} = vn(e)
          , {textColorClasses: v, textColorStyles: c} = Fe(O(e, "color"))
          , {textColorClasses: d, textColorStyles: f} = Fe(O(e, "bgColor"))
          , {intersectionRef: m, isIntersecting: h} = Il()
          , {resizeRef: y, contentRect: S} = ct()
          , b = g(()=>Math.max(0, Math.min(100, parseFloat(e.modelValue))))
          , C = g(()=>Number(e.width))
          , V = g(()=>u.value ? Number(e.size) : S.value ? S.value.width : Math.max(C.value, 32))
          , P = g(()=>a / (1 - C.value / V.value) * 2)
          , A = g(()=>C.value / V.value * P.value)
          , I = g(()=>q((100 - b.value) / 100 * l));
        return Ge(()=>{
            m.value = i.value,
            y.value = i.value
        }
        ),
        D(()=>r(e.tag, {
            ref: i,
            class: ["v-progress-circular", {
                "v-progress-circular--indeterminate": !!e.indeterminate,
                "v-progress-circular--visible": h.value,
                "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
            }, o.value, s.value, v.value, e.class],
            style: [u.value, c.value, e.style],
            role: "progressbar",
            "aria-valuemin": "0",
            "aria-valuemax": "100",
            "aria-valuenow": e.indeterminate ? void 0 : b.value
        }, {
            default: ()=>[r("svg", {
                style: {
                    transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
                },
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: `0 0 ${P.value} ${P.value}`
            }, [r("circle", {
                class: ["v-progress-circular__underlay", d.value],
                style: f.value,
                fill: "transparent",
                cx: "50%",
                cy: "50%",
                r: a,
                "stroke-width": A.value,
                "stroke-dasharray": l,
                "stroke-dashoffset": 0
            }, null), r("circle", {
                class: "v-progress-circular__overlay",
                fill: "transparent",
                cx: "50%",
                cy: "50%",
                r: a,
                "stroke-width": A.value,
                "stroke-dasharray": l,
                "stroke-dashoffset": I.value
            }, null)]), t.default && r("div", {
                class: "v-progress-circular__content"
            }, [t.default({
                value: b.value
            })])]
        })),
        {}
    }
});
const Vi = {
    center: "center",
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
}
  , At = T({
    location: String
}, "location");
function Bt(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
      , t = arguments.length > 2 ? arguments[2] : void 0;
    const {isRtl: a} = $e();
    return {
        locationStyles: g(()=>{
            if (!e.location)
                return {};
            const {side: i, align: o} = pa(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
            function s(v) {
                return t ? t(v) : 0
            }
            const u = {};
            return i !== "center" && (n ? u[Vi[i]] = `calc(100% - ${s(i)}px)` : u[i] = 0),
            o !== "center" ? n ? u[Vi[o]] = `calc(100% - ${s(o)}px)` : u[o] = 0 : (i === "center" ? u.top = u.left = "50%" : u[{
                top: "left",
                bottom: "left",
                left: "top",
                right: "top"
            }[i]] = "50%",
            u.transform = {
                top: "translateX(-50%)",
                bottom: "translateX(-50%)",
                left: "translateY(-50%)",
                right: "translateY(-50%)",
                center: "translate(-50%, -50%)"
            }[i]),
            u
        }
        )
    }
}
const Lc = T({
    absolute: Boolean,
    active: {
        type: Boolean,
        default: !0
    },
    bgColor: String,
    bgOpacity: [Number, String],
    bufferValue: {
        type: [Number, String],
        default: 0
    },
    clickable: Boolean,
    color: String,
    height: {
        type: [Number, String],
        default: 4
    },
    indeterminate: Boolean,
    max: {
        type: [Number, String],
        default: 100
    },
    modelValue: {
        type: [Number, String],
        default: 0
    },
    reverse: Boolean,
    stream: Boolean,
    striped: Boolean,
    roundedBar: Boolean,
    ...X(),
    ...At({
        location: "top"
    }),
    ...Ce(),
    ...le(),
    ...ce()
}, "VProgressLinear")
  , Al = M()({
    name: "VProgressLinear",
    props: Lc(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = ae(e, "modelValue")
          , {isRtl: l, rtlClasses: i} = $e()
          , {themeClasses: o} = me(e)
          , {locationStyles: s} = Bt(e)
          , {textColorClasses: u, textColorStyles: v} = Fe(e, "color")
          , {backgroundColorClasses: c, backgroundColorStyles: d} = Pe(g(()=>e.bgColor || e.color))
          , {backgroundColorClasses: f, backgroundColorStyles: m} = Pe(e, "color")
          , {roundedClasses: h} = we(e)
          , {intersectionRef: y, isIntersecting: S} = Il()
          , b = g(()=>parseInt(e.max, 10))
          , C = g(()=>parseInt(e.height, 10))
          , V = g(()=>parseFloat(e.bufferValue) / b.value * 100)
          , P = g(()=>parseFloat(a.value) / b.value * 100)
          , A = g(()=>l.value !== e.reverse)
          , I = g(()=>e.indeterminate ? "fade-transition" : "slide-x-transition")
          , x = g(()=>e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
        function k(w) {
            if (!y.value)
                return;
            const {left: _, right: B, width: p} = y.value.getBoundingClientRect()
              , $ = A.value ? p - w.clientX + (B - p) : w.clientX - _;
            a.value = Math.round($ / p * b.value)
        }
        return D(()=>r(e.tag, {
            ref: y,
            class: ["v-progress-linear", {
                "v-progress-linear--absolute": e.absolute,
                "v-progress-linear--active": e.active && S.value,
                "v-progress-linear--reverse": A.value,
                "v-progress-linear--rounded": e.rounded,
                "v-progress-linear--rounded-bar": e.roundedBar,
                "v-progress-linear--striped": e.striped
            }, h.value, o.value, i.value, e.class],
            style: [{
                bottom: e.location === "bottom" ? 0 : void 0,
                top: e.location === "top" ? 0 : void 0,
                height: e.active ? q(C.value) : 0,
                "--v-progress-linear-height": q(C.value),
                ...s.value
            }, e.style],
            role: "progressbar",
            "aria-hidden": e.active ? "false" : "true",
            "aria-valuemin": "0",
            "aria-valuemax": e.max,
            "aria-valuenow": e.indeterminate ? void 0 : P.value,
            onClick: e.clickable && k
        }, {
            default: ()=>[e.stream && r("div", {
                key: "stream",
                class: ["v-progress-linear__stream", u.value],
                style: {
                    ...v.value,
                    [A.value ? "left" : "right"]: q(-C.value),
                    borderTop: `${q(C.value / 2)} dotted`,
                    opacity: x.value,
                    top: `calc(50% - ${q(C.value / 4)})`,
                    width: q(100 - V.value, "%"),
                    "--v-progress-linear-stream-to": q(C.value * (A.value ? 1 : -1))
                }
            }, null), r("div", {
                class: ["v-progress-linear__background", c.value],
                style: [d.value, {
                    opacity: x.value,
                    width: q(e.stream ? V.value : 100, "%")
                }]
            }, null), r(xt, {
                name: I.value
            }, {
                default: ()=>[e.indeterminate ? r("div", {
                    class: "v-progress-linear__indeterminate"
                }, [["long", "short"].map(w=>r("div", {
                    key: w,
                    class: ["v-progress-linear__indeterminate", w, f.value],
                    style: m.value
                }, null))]) : r("div", {
                    class: ["v-progress-linear__determinate", f.value],
                    style: [m.value, {
                        width: q(P.value, "%")
                    }]
                }, null)]
            }), t.default && r("div", {
                class: "v-progress-linear__content"
            }, [t.default({
                value: P.value,
                buffer: V.value
            })])]
        })),
        {}
    }
})
  , Bl = T({
    loading: [Boolean, String]
}, "loader");
function sa(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ct();
    return {
        loaderClasses: g(()=>({
            [`${n}--loading`]: e.loading
        }))
    }
}
function Tl(e, n) {
    var a;
    let {slots: t} = n;
    return r("div", {
        class: `${e.name}__loader`
    }, [((a = t.default) == null ? void 0 : a.call(t, {
        color: e.color,
        isActive: e.active
    })) || r(Al, {
        active: e.active,
        color: e.color,
        height: "2",
        indeterminate: !0
    }, null)])
}
const Mc = ["static", "relative", "fixed", "absolute", "sticky"]
  , fn = T({
    position: {
        type: String,
        validator: e=>Mc.includes(e)
    }
}, "position");
function mn(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ct();
    return {
        positionClasses: g(()=>e.position ? `${n}--${e.position}` : void 0)
    }
}
function _o() {
    var e, n;
    return (n = (e = pe("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router
}
function Ln(e, n) {
    const t = rr("RouterLink")
      , a = g(()=>!!(e.href || e.to))
      , l = g(()=>(a == null ? void 0 : a.value) || Kl(n, "click") || Kl(e, "click"));
    if (typeof t == "string")
        return {
            isLink: a,
            isClickable: l,
            href: O(e, "href")
        };
    const i = e.to ? t.useLink(e) : void 0;
    return {
        isLink: a,
        isClickable: l,
        route: i == null ? void 0 : i.route,
        navigate: i == null ? void 0 : i.navigate,
        isActive: i && g(()=>{
            var o, s;
            return e.exact ? (o = i.isExactActive) == null ? void 0 : o.value : (s = i.isActive) == null ? void 0 : s.value
        }
        ),
        href: g(()=>e.to ? i == null ? void 0 : i.route.value.href : e.href)
    }
}
const Mn = T({
    href: String,
    replace: Boolean,
    to: [String, Object],
    exact: Boolean
}, "router");
let ka = !1;
function Oc(e, n) {
    let t = !1, a, l;
    ke && (Se(()=>{
        window.addEventListener("popstate", i),
        a = e == null ? void 0 : e.beforeEach((o,s,u)=>{
            ka ? t ? n(u) : u() : setTimeout(()=>t ? n(u) : u()),
            ka = !0
        }
        ),
        l = e == null ? void 0 : e.afterEach(()=>{
            ka = !1
        }
        )
    }
    ),
    je(()=>{
        window.removeEventListener("popstate", i),
        a == null || a(),
        l == null || l()
    }
    ));
    function i(o) {
        var s;
        (s = o.state) != null && s.replaced || (t = !0,
        setTimeout(()=>t = !1))
    }
}
function Fc(e, n) {
    Z(()=>{
        var t;
        return (t = e.isActive) == null ? void 0 : t.value
    }
    , t=>{
        e.isLink.value && t && n && Se(()=>{
            n(!0)
        }
        )
    }
    , {
        immediate: !0
    })
}
const ja = Symbol("rippleStop")
  , Rc = 80;
function wi(e, n) {
    e.style.transform = n,
    e.style.webkitTransform = n
}
function Ga(e) {
    return e.constructor.name === "TouchEvent"
}
function Ao(e) {
    return e.constructor.name === "KeyboardEvent"
}
const Dc = function(e, n) {
    var d;
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      , a = 0
      , l = 0;
    if (!Ao(e)) {
        const f = n.getBoundingClientRect()
          , m = Ga(e) ? e.touches[e.touches.length - 1] : e;
        a = m.clientX - f.left,
        l = m.clientY - f.top
    }
    let i = 0
      , o = .3;
    (d = n._ripple) != null && d.circle ? (o = .15,
    i = n.clientWidth / 2,
    i = t.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(n.clientWidth ** 2 + n.clientHeight ** 2) / 2;
    const s = `${(n.clientWidth - i * 2) / 2}px`
      , u = `${(n.clientHeight - i * 2) / 2}px`
      , v = t.center ? s : `${a - i}px`
      , c = t.center ? u : `${l - i}px`;
    return {
        radius: i,
        scale: o,
        x: v,
        y: c,
        centerX: s,
        centerY: u
    }
}
  , Qn = {
    show(e, n) {
        var m;
        let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (!((m = n == null ? void 0 : n._ripple) != null && m.enabled))
            return;
        const a = document.createElement("span")
          , l = document.createElement("span");
        a.appendChild(l),
        a.className = "v-ripple__container",
        t.class && (a.className += ` ${t.class}`);
        const {radius: i, scale: o, x: s, y: u, centerX: v, centerY: c} = Dc(e, n, t)
          , d = `${i * 2}px`;
        l.className = "v-ripple__animation",
        l.style.width = d,
        l.style.height = d,
        n.appendChild(a);
        const f = window.getComputedStyle(n);
        f && f.position === "static" && (n.style.position = "relative",
        n.dataset.previousPosition = "static"),
        l.classList.add("v-ripple__animation--enter"),
        l.classList.add("v-ripple__animation--visible"),
        wi(l, `translate(${s}, ${u}) scale3d(${o},${o},${o})`),
        l.dataset.activated = String(performance.now()),
        setTimeout(()=>{
            l.classList.remove("v-ripple__animation--enter"),
            l.classList.add("v-ripple__animation--in"),
            wi(l, `translate(${v}, ${c}) scale3d(1,1,1)`)
        }
        , 0)
    },
    hide(e) {
        var i;
        if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled))
            return;
        const n = e.getElementsByClassName("v-ripple__animation");
        if (n.length === 0)
            return;
        const t = n[n.length - 1];
        if (t.dataset.isHiding)
            return;
        t.dataset.isHiding = "true";
        const a = performance.now() - Number(t.dataset.activated)
          , l = Math.max(250 - a, 0);
        setTimeout(()=>{
            t.classList.remove("v-ripple__animation--in"),
            t.classList.add("v-ripple__animation--out"),
            setTimeout(()=>{
                var s;
                e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition,
                delete e.dataset.previousPosition),
                ((s = t.parentNode) == null ? void 0 : s.parentNode) === e && e.removeChild(t.parentNode)
            }
            , 300)
        }
        , l)
    }
};
function Bo(e) {
    return typeof e > "u" || !!e
}
function _n(e) {
    const n = {}
      , t = e.currentTarget;
    if (!(!(t != null && t._ripple) || t._ripple.touched || e[ja])) {
        if (e[ja] = !0,
        Ga(e))
            t._ripple.touched = !0,
            t._ripple.isTouch = !0;
        else if (t._ripple.isTouch)
            return;
        if (n.center = t._ripple.centered || Ao(e),
        t._ripple.class && (n.class = t._ripple.class),
        Ga(e)) {
            if (t._ripple.showTimerCommit)
                return;
            t._ripple.showTimerCommit = ()=>{
                Qn.show(e, t, n)
            }
            ,
            t._ripple.showTimer = window.setTimeout(()=>{
                var a;
                (a = t == null ? void 0 : t._ripple) != null && a.showTimerCommit && (t._ripple.showTimerCommit(),
                t._ripple.showTimerCommit = null)
            }
            , Rc)
        } else
            Qn.show(e, t, n)
    }
}
function xi(e) {
    e[ja] = !0
}
function We(e) {
    const n = e.currentTarget;
    if (n != null && n._ripple) {
        if (window.clearTimeout(n._ripple.showTimer),
        e.type === "touchend" && n._ripple.showTimerCommit) {
            n._ripple.showTimerCommit(),
            n._ripple.showTimerCommit = null,
            n._ripple.showTimer = window.setTimeout(()=>{
                We(e)
            }
            );
            return
        }
        window.setTimeout(()=>{
            n._ripple && (n._ripple.touched = !1)
        }
        ),
        Qn.hide(n)
    }
}
function To(e) {
    const n = e.currentTarget;
    n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null),
    window.clearTimeout(n._ripple.showTimer))
}
let An = !1;
function po(e) {
    !An && (e.keyCode === Gl.enter || e.keyCode === Gl.space) && (An = !0,
    _n(e))
}
function $o(e) {
    An = !1,
    We(e)
}
function Eo(e) {
    An && (An = !1,
    We(e))
}
function Lo(e, n, t) {
    const {value: a, modifiers: l} = n
      , i = Bo(a);
    if (i || Qn.hide(e),
    e._ripple = e._ripple ?? {},
    e._ripple.enabled = i,
    e._ripple.centered = l.center,
    e._ripple.circle = l.circle,
    Aa(a) && a.class && (e._ripple.class = a.class),
    i && !t) {
        if (l.stop) {
            e.addEventListener("touchstart", xi, {
                passive: !0
            }),
            e.addEventListener("mousedown", xi);
            return
        }
        e.addEventListener("touchstart", _n, {
            passive: !0
        }),
        e.addEventListener("touchend", We, {
            passive: !0
        }),
        e.addEventListener("touchmove", To, {
            passive: !0
        }),
        e.addEventListener("touchcancel", We),
        e.addEventListener("mousedown", _n),
        e.addEventListener("mouseup", We),
        e.addEventListener("mouseleave", We),
        e.addEventListener("keydown", po),
        e.addEventListener("keyup", $o),
        e.addEventListener("blur", Eo),
        e.addEventListener("dragstart", We, {
            passive: !0
        })
    } else
        !i && t && Mo(e)
}
function Mo(e) {
    e.removeEventListener("mousedown", _n),
    e.removeEventListener("touchstart", _n),
    e.removeEventListener("touchend", We),
    e.removeEventListener("touchmove", To),
    e.removeEventListener("touchcancel", We),
    e.removeEventListener("mouseup", We),
    e.removeEventListener("mouseleave", We),
    e.removeEventListener("keydown", po),
    e.removeEventListener("keyup", $o),
    e.removeEventListener("dragstart", We),
    e.removeEventListener("blur", Eo)
}
function zc(e, n) {
    Lo(e, n, !1)
}
function Nc(e) {
    delete e._ripple,
    Mo(e)
}
function Hc(e, n) {
    if (n.value === n.oldValue)
        return;
    const t = Bo(n.oldValue);
    Lo(e, n, t)
}
const Tt = {
    mounted: zc,
    unmounted: Nc,
    updated: Hc
}
  , pl = T({
    active: {
        type: Boolean,
        default: void 0
    },
    symbol: {
        type: null,
        default: Pl
    },
    flat: Boolean,
    icon: [Boolean, String, Function, Object],
    prependIcon: ne,
    appendIcon: ne,
    block: Boolean,
    stacked: Boolean,
    ripple: {
        type: [Boolean, Object],
        default: !0
    },
    text: String,
    ...Xe(),
    ...X(),
    ...Be(),
    ...tt(),
    ...Ae(),
    ...cn(),
    ...Bl(),
    ...At(),
    ...fn(),
    ...Ce(),
    ...Mn(),
    ...Vt(),
    ...le({
        tag: "button"
    }),
    ...ce(),
    ...lt({
        variant: "elevated"
    })
}, "VBtn")
  , ze = M()({
    name: "VBtn",
    directives: {
        Ripple: Tt
    },
    props: pl(),
    emits: {
        "group:selected": e=>!0
    },
    setup(e, n) {
        let {attrs: t, slots: a} = n;
        const {themeClasses: l} = me(e)
          , {borderClasses: i} = at(e)
          , {colorClasses: o, colorStyles: s, variantClasses: u} = Ut(e)
          , {densityClasses: v} = De(e)
          , {dimensionStyles: c} = nt(e)
          , {elevationClasses: d} = Le(e)
          , {loaderClasses: f} = sa(e)
          , {locationStyles: m} = Bt(e)
          , {positionClasses: h} = mn(e)
          , {roundedClasses: y} = we(e)
          , {sizeClasses: S, sizeStyles: b} = vn(e)
          , C = dn(e, e.symbol, !1)
          , V = Ln(e, t)
          , P = g(()=>{
            var w;
            return e.active !== void 0 ? e.active : V.isLink.value ? (w = V.isActive) == null ? void 0 : w.value : C == null ? void 0 : C.isSelected.value
        }
        )
          , A = g(()=>(C == null ? void 0 : C.disabled.value) || e.disabled)
          , I = g(()=>e.variant === "elevated" && !(e.disabled || e.flat || e.border))
          , x = g(()=>{
            if (e.value !== void 0)
                return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value
        }
        );
        function k(w) {
            var _;
            A.value || V.isLink.value && (w.metaKey || w.ctrlKey || w.shiftKey || w.button !== 0 || t.target === "_blank") || ((_ = V.navigate) == null || _.call(V, w),
            C == null || C.toggle())
        }
        return Fc(V, C == null ? void 0 : C.select),
        D(()=>{
            var F, E;
            const w = V.isLink.value ? "a" : e.tag
              , _ = !!(e.prependIcon || a.prepend)
              , B = !!(e.appendIcon || a.append)
              , p = !!(e.icon && e.icon !== !0)
              , $ = (C == null ? void 0 : C.isSelected.value) && (!V.isLink.value || ((F = V.isActive) == null ? void 0 : F.value)) || !C || ((E = V.isActive) == null ? void 0 : E.value);
            return Ve(r(w, {
                type: w === "a" ? void 0 : "button",
                class: ["v-btn", C == null ? void 0 : C.selectedClass.value, {
                    "v-btn--active": P.value,
                    "v-btn--block": e.block,
                    "v-btn--disabled": A.value,
                    "v-btn--elevated": I.value,
                    "v-btn--flat": e.flat,
                    "v-btn--icon": !!e.icon,
                    "v-btn--loading": e.loading,
                    "v-btn--stacked": e.stacked
                }, l.value, i.value, $ ? o.value : void 0, v.value, d.value, f.value, h.value, y.value, S.value, u.value, e.class],
                style: [$ ? s.value : void 0, c.value, m.value, b.value, e.style],
                disabled: A.value || void 0,
                href: V.href.value,
                onClick: k,
                value: x.value
            }, {
                default: ()=>{
                    var H;
                    return [Wt(!0, "v-btn"), !e.icon && _ && r("span", {
                        key: "prepend",
                        class: "v-btn__prepend"
                    }, [a.prepend ? r(ge, {
                        key: "prepend-defaults",
                        disabled: !e.prependIcon,
                        defaults: {
                            VIcon: {
                                icon: e.prependIcon
                            }
                        }
                    }, a.prepend) : r(he, {
                        key: "prepend-icon",
                        icon: e.prependIcon
                    }, null)]), r("span", {
                        class: "v-btn__content",
                        "data-no-activator": ""
                    }, [!a.default && p ? r(he, {
                        key: "content-icon",
                        icon: e.icon
                    }, null) : r(ge, {
                        key: "content-defaults",
                        disabled: !p,
                        defaults: {
                            VIcon: {
                                icon: e.icon
                            }
                        }
                    }, {
                        default: ()=>{
                            var G;
                            return [((G = a.default) == null ? void 0 : G.call(a)) ?? e.text]
                        }
                    })]), !e.icon && B && r("span", {
                        key: "append",
                        class: "v-btn__append"
                    }, [a.append ? r(ge, {
                        key: "append-defaults",
                        disabled: !e.appendIcon,
                        defaults: {
                            VIcon: {
                                icon: e.appendIcon
                            }
                        }
                    }, a.append) : r(he, {
                        key: "append-icon",
                        icon: e.appendIcon
                    }, null)]), !!e.loading && r("span", {
                        key: "loader",
                        class: "v-btn__loader"
                    }, [((H = a.loader) == null ? void 0 : H.call(a)) ?? r(_l, {
                        color: typeof e.loading == "boolean" ? void 0 : e.loading,
                        indeterminate: !0,
                        size: "23",
                        width: "2"
                    }, null)])]
                }
            }), [[Ye("ripple"), !A.value && e.ripple, null]])
        }
        ),
        {}
    }
})
  , jc = T({
    ...pl({
        icon: "$menu",
        variant: "text"
    })
}, "VAppBarNavIcon")
  , Gc = M()({
    name: "VAppBarNavIcon",
    props: jc(),
    setup(e, n) {
        let {slots: t} = n;
        return D(()=>r(ze, K(e, {
            class: ["v-app-bar-nav-icon"]
        }), t)),
        {}
    }
})
  , Wc = M()({
    name: "VAppBarTitle",
    props: yo(),
    setup(e, n) {
        let {slots: t} = n;
        return D(()=>r(kl, K(e, {
            class: "v-app-bar-title"
        }), t)),
        {}
    }
});
const Oo = st("v-alert-title")
  , Uc = ["success", "info", "warning", "error"]
  , Yc = T({
    border: {
        type: [Boolean, String],
        validator: e=>typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
    },
    borderColor: String,
    closable: Boolean,
    closeIcon: {
        type: ne,
        default: "$close"
    },
    closeLabel: {
        type: String,
        default: "$vuetify.close"
    },
    icon: {
        type: [Boolean, String, Function, Object],
        default: null
    },
    modelValue: {
        type: Boolean,
        default: !0
    },
    prominent: Boolean,
    title: String,
    text: String,
    type: {
        type: String,
        validator: e=>Uc.includes(e)
    },
    ...X(),
    ...Be(),
    ...tt(),
    ...Ae(),
    ...At(),
    ...fn(),
    ...Ce(),
    ...le(),
    ...ce(),
    ...lt({
        variant: "flat"
    })
}, "VAlert")
  , Kc = M()({
    name: "VAlert",
    props: Yc(),
    emits: {
        "click:close": e=>!0,
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {emit: t, slots: a} = n;
        const l = ae(e, "modelValue")
          , i = g(()=>{
            if (e.icon !== !1)
                return e.type ? e.icon ?? `$ ${e.type}` : e.icon
        }
        )
          , o = g(()=>({
            color: e.color ?? e.type,
            variant: e.variant
        }))
          , {themeClasses: s} = me(e)
          , {colorClasses: u, colorStyles: v, variantClasses: c} = Ut(o)
          , {densityClasses: d} = De(e)
          , {dimensionStyles: f} = nt(e)
          , {elevationClasses: m} = Le(e)
          , {locationStyles: h} = Bt(e)
          , {positionClasses: y} = mn(e)
          , {roundedClasses: S} = we(e)
          , {textColorClasses: b, textColorStyles: C} = Fe(O(e, "borderColor"))
          , {t: V} = et()
          , P = g(()=>({
            "aria-label": V(e.closeLabel),
            onClick(A) {
                l.value = !1,
                t("click:close", A)
            }
        }));
        return ()=>{
            const A = !!(a.prepend || i.value)
              , I = !!(a.title || e.title)
              , x = !!(a.close || e.closable);
            return l.value && r(e.tag, {
                class: ["v-alert", e.border && {
                    "v-alert--border": !!e.border,
                    [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
                }, {
                    "v-alert--prominent": e.prominent
                }, s.value, u.value, d.value, m.value, y.value, S.value, c.value, e.class],
                style: [v.value, f.value, h.value, e.style],
                role: "alert"
            }, {
                default: ()=>{
                    var k, w;
                    return [Wt(!1, "v-alert"), e.border && r("div", {
                        key: "border",
                        class: ["v-alert__border", b.value],
                        style: C.value
                    }, null), A && r("div", {
                        key: "prepend",
                        class: "v-alert__prepend"
                    }, [a.prepend ? r(ge, {
                        key: "prepend-defaults",
                        disabled: !i.value,
                        defaults: {
                            VIcon: {
                                density: e.density,
                                icon: i.value,
                                size: e.prominent ? 44 : 28
                            }
                        }
                    }, a.prepend) : r(he, {
                        key: "prepend-icon",
                        density: e.density,
                        icon: i.value,
                        size: e.prominent ? 44 : 28
                    }, null)]), r("div", {
                        class: "v-alert__content"
                    }, [I && r(Oo, {
                        key: "title"
                    }, {
                        default: ()=>{
                            var _;
                            return [((_ = a.title) == null ? void 0 : _.call(a)) ?? e.title]
                        }
                    }), ((k = a.text) == null ? void 0 : k.call(a)) ?? e.text, (w = a.default) == null ? void 0 : w.call(a)]), a.append && r("div", {
                        key: "append",
                        class: "v-alert__append"
                    }, [a.append()]), x && r("div", {
                        key: "close",
                        class: "v-alert__close"
                    }, [a.close ? r(ge, {
                        key: "close-defaults",
                        defaults: {
                            VBtn: {
                                icon: e.closeIcon,
                                size: "x-small",
                                variant: "text"
                            }
                        }
                    }, {
                        default: ()=>{
                            var _;
                            return [(_ = a.close) == null ? void 0 : _.call(a, {
                                props: P.value
                            })]
                        }
                    }) : r(ze, K({
                        key: "close-btn",
                        icon: e.closeIcon,
                        size: "x-small",
                        variant: "text"
                    }, P.value), null)])]
                }
            })
        }
    }
});
const Xc = T({
    text: String,
    clickable: Boolean,
    ...X(),
    ...ce()
}, "VLabel")
  , gn = M()({
    name: "VLabel",
    props: Xc(),
    setup(e, n) {
        let {slots: t} = n;
        return D(()=>{
            var a;
            return r("label", {
                class: ["v-label", {
                    "v-label--clickable": e.clickable
                }, e.class],
                style: e.style
            }, [e.text, (a = t.default) == null ? void 0 : a.call(t)])
        }
        ),
        {}
    }
});
const Fo = Symbol.for("vuetify:selection-control-group")
  , $l = T({
    color: String,
    disabled: {
        type: Boolean,
        default: null
    },
    defaultsTarget: String,
    error: Boolean,
    id: String,
    inline: Boolean,
    falseIcon: ne,
    trueIcon: ne,
    ripple: {
        type: Boolean,
        default: !0
    },
    multiple: {
        type: Boolean,
        default: null
    },
    name: String,
    readonly: Boolean,
    modelValue: null,
    type: String,
    valueComparator: {
        type: Function,
        default: Nt
    },
    ...X(),
    ...Be(),
    ...ce()
}, "SelectionControlGroup")
  , qc = T({
    ...$l({
        defaultsTarget: "VSelectionControl"
    })
}, "VSelectionControlGroup")
  , Ro = M()({
    name: "VSelectionControlGroup",
    props: qc(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = ae(e, "modelValue")
          , l = Re()
          , i = g(()=>e.id || `v-selection-control-group-${l}`)
          , o = g(()=>e.name || i.value)
          , s = new Set;
        return Te(Fo, {
            modelValue: a,
            forceUpdate: ()=>{
                s.forEach(u=>u())
            }
            ,
            onForceUpdate: u=>{
                s.add(u),
                je(()=>{
                    s.delete(u)
                }
                )
            }
        }),
        xe({
            [e.defaultsTarget]: {
                color: O(e, "color"),
                disabled: O(e, "disabled"),
                density: O(e, "density"),
                error: O(e, "error"),
                inline: O(e, "inline"),
                modelValue: a,
                multiple: g(()=>!!e.multiple || e.multiple == null && Array.isArray(a.value)),
                name: o,
                falseIcon: O(e, "falseIcon"),
                trueIcon: O(e, "trueIcon"),
                readonly: O(e, "readonly"),
                ripple: O(e, "ripple"),
                type: O(e, "type"),
                valueComparator: O(e, "valueComparator")
            }
        }),
        D(()=>{
            var u;
            return r("div", {
                class: ["v-selection-control-group", {
                    "v-selection-control-group--inline": e.inline
                }, e.class],
                style: e.style,
                role: e.type === "radio" ? "radiogroup" : void 0
            }, [(u = t.default) == null ? void 0 : u.call(t)])
        }
        ),
        {}
    }
})
  , ra = T({
    label: String,
    trueValue: null,
    falseValue: null,
    value: null,
    ...X(),
    ...$l()
}, "VSelectionControl");
function Zc(e) {
    const n = ye(Fo, void 0)
      , {densityClasses: t} = De(e)
      , a = ae(e, "modelValue")
      , l = g(()=>e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0)
      , i = g(()=>e.falseValue !== void 0 ? e.falseValue : !1)
      , o = g(()=>!!e.multiple || e.multiple == null && Array.isArray(a.value))
      , s = g({
        get() {
            const d = n ? n.modelValue.value : a.value;
            return o.value ? d.some(f=>e.valueComparator(f, l.value)) : e.valueComparator(d, l.value)
        },
        set(d) {
            if (e.readonly)
                return;
            const f = d ? l.value : i.value;
            let m = f;
            o.value && (m = d ? [...Je(a.value), f] : Je(a.value).filter(h=>!e.valueComparator(h, l.value))),
            n ? n.modelValue.value = m : a.value = m
        }
    })
      , {textColorClasses: u, textColorStyles: v} = Fe(g(()=>s.value && !e.error && !e.disabled ? e.color : void 0))
      , c = g(()=>s.value ? e.trueIcon : e.falseIcon);
    return {
        group: n,
        densityClasses: t,
        trueValue: l,
        falseValue: i,
        model: s,
        textColorClasses: u,
        textColorStyles: v,
        icon: c
    }
}
const an = M()({
    name: "VSelectionControl",
    directives: {
        Ripple: Tt
    },
    inheritAttrs: !1,
    props: ra(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {attrs: t, slots: a} = n;
        const {group: l, densityClasses: i, icon: o, model: s, textColorClasses: u, textColorStyles: v, trueValue: c} = Zc(e)
          , d = Re()
          , f = g(()=>e.id || `input-${d}`)
          , m = Y(!1)
          , h = Y(!1)
          , y = U();
        l == null || l.onForceUpdate(()=>{
            y.value && (y.value.checked = s.value)
        }
        );
        function S(V) {
            m.value = !0,
            tn(V.target, ":focus-visible") !== !1 && (h.value = !0)
        }
        function b() {
            m.value = !1,
            h.value = !1
        }
        function C(V) {
            e.readonly && l && Se(()=>l.forceUpdate()),
            s.value = V.target.checked
        }
        return D(()=>{
            var I, x;
            const V = a.label ? a.label({
                label: e.label,
                props: {
                    for: f.value
                }
            }) : e.label
              , [P,A] = Ht(t);
            return r("div", K({
                class: ["v-selection-control", {
                    "v-selection-control--dirty": s.value,
                    "v-selection-control--disabled": e.disabled,
                    "v-selection-control--error": e.error,
                    "v-selection-control--focused": m.value,
                    "v-selection-control--focus-visible": h.value,
                    "v-selection-control--inline": e.inline
                }, i.value, e.class]
            }, P, {
                style: e.style
            }), [r("div", {
                class: ["v-selection-control__wrapper", u.value],
                style: v.value
            }, [(I = a.default) == null ? void 0 : I.call(a), Ve(r("div", {
                class: ["v-selection-control__input"]
            }, [o.value && r(he, {
                key: "icon",
                icon: o.value
            }, null), r("input", K({
                ref: y,
                checked: s.value,
                disabled: !!(e.readonly || e.disabled),
                id: f.value,
                onBlur: b,
                onFocus: S,
                onInput: C,
                "aria-disabled": !!(e.readonly || e.disabled),
                type: e.type,
                value: c.value,
                name: e.name,
                "aria-checked": e.type === "checkbox" ? s.value : void 0
            }, A), null), (x = a.input) == null ? void 0 : x.call(a, {
                model: s,
                textColorClasses: u,
                textColorStyles: v,
                props: {
                    onFocus: S,
                    onBlur: b,
                    id: f.value
                }
            })]), [[Ye("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), V && r(gn, {
                for: f.value,
                clickable: !0
            }, {
                default: ()=>[V]
            })])
        }
        ),
        {
            isFocused: m,
            input: y
        }
    }
})
  , Do = T({
    indeterminate: Boolean,
    indeterminateIcon: {
        type: ne,
        default: "$checkboxIndeterminate"
    },
    ...ra({
        falseIcon: "$checkboxOff",
        trueIcon: "$checkboxOn"
    })
}, "VCheckboxBtn")
  , ln = M()({
    name: "VCheckboxBtn",
    props: Do(),
    emits: {
        "update:modelValue": e=>!0,
        "update:indeterminate": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = ae(e, "indeterminate")
          , l = ae(e, "modelValue");
        function i(u) {
            a.value && (a.value = !1)
        }
        const o = g(()=>a.value ? e.indeterminateIcon : e.falseIcon)
          , s = g(()=>a.value ? e.indeterminateIcon : e.trueIcon);
        return D(()=>r(an, K(e, {
            modelValue: l.value,
            "onUpdate:modelValue": [u=>l.value = u, i],
            class: ["v-checkbox-btn", e.class],
            style: e.style,
            type: "checkbox",
            falseIcon: o.value,
            trueIcon: s.value,
            "aria-checked": a.value ? "mixed" : void 0
        }), t)),
        {}
    }
});
function zo(e) {
    const {t: n} = et();
    function t(a) {
        let {name: l} = a;
        const i = {
            prepend: "prependAction",
            prependInner: "prependAction",
            append: "appendAction",
            appendInner: "appendAction",
            clear: "clear"
        }[l]
          , o = e[`onClick:${l}`]
          , s = o && i ? n(`$vuetify.input.${i}`, e.label ?? "") : void 0;
        return r(he, {
            icon: e[`${l}Icon`],
            "aria-label": s,
            onClick: o
        }, null)
    }
    return {
        InputIcon: t
    }
}
const Jc = T({
    active: Boolean,
    color: String,
    messages: {
        type: [Array, String],
        default: ()=>[]
    },
    ...X(),
    ...kt({
        transition: {
            component: Vl,
            leaveAbsolute: !0,
            group: !0
        }
    })
}, "VMessages")
  , No = M()({
    name: "VMessages",
    props: Jc(),
    setup(e, n) {
        let {slots: t} = n;
        const a = g(()=>Je(e.messages))
          , {textColorClasses: l, textColorStyles: i} = Fe(g(()=>e.color));
        return D(()=>r(ot, {
            transition: e.transition,
            tag: "div",
            class: ["v-messages", l.value, e.class],
            style: [i.value, e.style],
            role: "alert",
            "aria-live": "polite"
        }, {
            default: ()=>[e.active && a.value.map((o,s)=>r("div", {
                class: "v-messages__message",
                key: `${s}-${a.value}`
            }, [t.message ? t.message({
                message: o
            }) : o]))]
        })),
        {}
    }
})
  , ua = T({
    focused: Boolean,
    "onUpdate:focused": ut()
}, "focus");
function pt(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ct();
    const t = ae(e, "focused")
      , a = g(()=>({
        [`${n}--focused`]: t.value
    }));
    function l() {
        t.value = !0
    }
    function i() {
        t.value = !1
    }
    return {
        focusClasses: a,
        isFocused: t,
        focus: l,
        blur: i
    }
}
const Ho = Symbol.for("vuetify:form")
  , Qc = T({
    disabled: Boolean,
    fastFail: Boolean,
    readonly: Boolean,
    modelValue: {
        type: Boolean,
        default: null
    },
    validateOn: {
        type: String,
        default: "input"
    }
}, "form");
function ed(e) {
    const n = ae(e, "modelValue")
      , t = g(()=>e.disabled)
      , a = g(()=>e.readonly)
      , l = Y(!1)
      , i = U([])
      , o = U([]);
    async function s() {
        const c = [];
        let d = !0;
        o.value = [],
        l.value = !0;
        for (const f of i.value) {
            const m = await f.validate();
            if (m.length > 0 && (d = !1,
            c.push({
                id: f.id,
                errorMessages: m
            })),
            !d && e.fastFail)
                break
        }
        return o.value = c,
        l.value = !1,
        {
            valid: d,
            errors: o.value
        }
    }
    function u() {
        i.value.forEach(c=>c.reset())
    }
    function v() {
        i.value.forEach(c=>c.resetValidation())
    }
    return Z(i, ()=>{
        let c = 0
          , d = 0;
        const f = [];
        for (const m of i.value)
            m.isValid === !1 ? (d++,
            f.push({
                id: m.id,
                errorMessages: m.errorMessages
            })) : m.isValid === !0 && c++;
        o.value = f,
        n.value = d > 0 ? !1 : c === i.value.length ? !0 : null
    }
    , {
        deep: !0
    }),
    Te(Ho, {
        register: c=>{
            let {id: d, validate: f, reset: m, resetValidation: h} = c;
            i.value.some(y=>y.id === d),
            i.value.push({
                id: d,
                validate: f,
                reset: m,
                resetValidation: h,
                isValid: null,
                errorMessages: []
            })
        }
        ,
        unregister: c=>{
            i.value = i.value.filter(d=>d.id !== c)
        }
        ,
        update: (c,d,f)=>{
            const m = i.value.find(h=>h.id === c);
            m && (m.isValid = d,
            m.errorMessages = f)
        }
        ,
        isDisabled: t,
        isReadonly: a,
        isValidating: l,
        isValid: n,
        items: i,
        validateOn: O(e, "validateOn")
    }),
    {
        errors: o,
        isDisabled: t,
        isReadonly: a,
        isValidating: l,
        isValid: n,
        items: i,
        validate: s,
        reset: u,
        resetValidation: v
    }
}
function ca() {
    return ye(Ho, null)
}
const jo = T({
    disabled: {
        type: Boolean,
        default: null
    },
    error: Boolean,
    errorMessages: {
        type: [Array, String],
        default: ()=>[]
    },
    maxErrors: {
        type: [Number, String],
        default: 1
    },
    name: String,
    label: String,
    readonly: {
        type: Boolean,
        default: null
    },
    rules: {
        type: Array,
        default: ()=>[]
    },
    modelValue: null,
    validateOn: String,
    validationValue: null,
    ...ua()
}, "validation");
function Go(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ct()
      , t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Re();
    const a = ae(e, "modelValue")
      , l = g(()=>e.validationValue === void 0 ? a.value : e.validationValue)
      , i = ca()
      , o = U([])
      , s = Y(!0)
      , u = g(()=>!!(Je(a.value === "" ? null : a.value).length || Je(l.value === "" ? null : l.value).length))
      , v = g(()=>!!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value)))
      , c = g(()=>!!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value)))
      , d = g(()=>e.errorMessages.length ? Je(e.errorMessages).slice(0, Math.max(0, +e.maxErrors)) : o.value)
      , f = g(()=>{
        let P = (e.validateOn ?? (i == null ? void 0 : i.validateOn.value)) || "input";
        P === "lazy" && (P = "input lazy");
        const A = new Set((P == null ? void 0 : P.split(" ")) ?? []);
        return {
            blur: A.has("blur") || A.has("input"),
            input: A.has("input"),
            submit: A.has("submit"),
            lazy: A.has("lazy")
        }
    }
    )
      , m = g(()=>e.error || e.errorMessages.length ? !1 : e.rules.length ? s.value ? o.value.length || f.value.lazy ? null : !0 : !o.value.length : !0)
      , h = Y(!1)
      , y = g(()=>({
        [`${n}--error`]: m.value === !1,
        [`${n}--dirty`]: u.value,
        [`${n}--disabled`]: v.value,
        [`${n}--readonly`]: c.value
    }))
      , S = g(()=>e.name ?? qe(t));
    rl(()=>{
        i == null || i.register({
            id: S.value,
            validate: V,
            reset: b,
            resetValidation: C
        })
    }
    ),
    Ue(()=>{
        i == null || i.unregister(S.value)
    }
    ),
    Ne(async()=>{
        f.value.lazy || await V(!0),
        i == null || i.update(S.value, m.value, d.value)
    }
    ),
    ht(()=>f.value.input, ()=>{
        Z(l, ()=>{
            if (l.value != null)
                V();
            else if (e.focused) {
                const P = Z(()=>e.focused, A=>{
                    A || V(),
                    P()
                }
                )
            }
        }
        )
    }
    ),
    ht(()=>f.value.blur, ()=>{
        Z(()=>e.focused, P=>{
            P || V()
        }
        )
    }
    ),
    Z(m, ()=>{
        i == null || i.update(S.value, m.value, d.value)
    }
    );
    function b() {
        a.value = null,
        Se(C)
    }
    function C() {
        s.value = !0,
        f.value.lazy ? o.value = [] : V(!0)
    }
    async function V() {
        let P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
        const A = [];
        h.value = !0;
        for (const I of e.rules) {
            if (A.length >= +(e.maxErrors ?? 1))
                break;
            const k = await (typeof I == "function" ? I : ()=>I)(l.value);
            if (k !== !0) {
                if (k !== !1 && typeof k != "string") {
                    console.warn(`${k} is not a valid value. Rule functions must return boolean true or a string.`);
                    continue
                }
                A.push(k || "")
            }
        }
        return o.value = A,
        h.value = !1,
        s.value = P,
        o.value
    }
    return {
        errorMessages: d,
        isDirty: u,
        isDisabled: v,
        isReadonly: c,
        isPristine: s,
        isValid: m,
        isValidating: h,
        reset: b,
        resetValidation: C,
        validate: V,
        validationClasses: y
    }
}
const wt = T({
    id: String,
    appendIcon: ne,
    centerAffix: {
        type: Boolean,
        default: !0
    },
    prependIcon: ne,
    hideDetails: [Boolean, String],
    hint: String,
    persistentHint: Boolean,
    messages: {
        type: [Array, String],
        default: ()=>[]
    },
    direction: {
        type: String,
        default: "horizontal",
        validator: e=>["horizontal", "vertical"].includes(e)
    },
    "onClick:prepend": ut(),
    "onClick:append": ut(),
    ...X(),
    ...Be(),
    ...jo()
}, "VInput")
  , Ee = M()({
    name: "VInput",
    props: {
        ...wt()
    },
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {attrs: t, slots: a, emit: l} = n;
        const {densityClasses: i} = De(e)
          , {rtlClasses: o} = $e()
          , {InputIcon: s} = zo(e)
          , u = Re()
          , v = g(()=>e.id || `input-${u}`)
          , c = g(()=>`${v.value}-messages`)
          , {errorMessages: d, isDirty: f, isDisabled: m, isReadonly: h, isPristine: y, isValid: S, isValidating: b, reset: C, resetValidation: V, validate: P, validationClasses: A} = Go(e, "v-input", v)
          , I = g(()=>({
            id: v,
            messagesId: c,
            isDirty: f,
            isDisabled: m,
            isReadonly: h,
            isPristine: y,
            isValid: S,
            isValidating: b,
            reset: C,
            resetValidation: V,
            validate: P
        }))
          , x = g(()=>{
            var k;
            return (k = e.errorMessages) != null && k.length || !y.value && d.value.length ? d.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages
        }
        );
        return D(()=>{
            var p, $, F, E;
            const k = !!(a.prepend || e.prependIcon)
              , w = !!(a.append || e.appendIcon)
              , _ = x.value.length > 0
              , B = !e.hideDetails || e.hideDetails === "auto" && (_ || !!a.details);
            return r("div", {
                class: ["v-input", `v-input--${e.direction}`, {
                    "v-input--center-affix": e.centerAffix
                }, i.value, o.value, A.value, e.class],
                style: e.style
            }, [k && r("div", {
                key: "prepend",
                class: "v-input__prepend"
            }, [(p = a.prepend) == null ? void 0 : p.call(a, I.value), e.prependIcon && r(s, {
                key: "prepend-icon",
                name: "prepend"
            }, null)]), a.default && r("div", {
                class: "v-input__control"
            }, [($ = a.default) == null ? void 0 : $.call(a, I.value)]), w && r("div", {
                key: "append",
                class: "v-input__append"
            }, [e.appendIcon && r(s, {
                key: "append-icon",
                name: "append"
            }, null), (F = a.append) == null ? void 0 : F.call(a, I.value)]), B && r("div", {
                class: "v-input__details"
            }, [r(No, {
                id: c.value,
                active: _,
                messages: x.value
            }, {
                message: a.message
            }), (E = a.details) == null ? void 0 : E.call(a, I.value)])])
        }
        ),
        {
            reset: C,
            resetValidation: V,
            validate: P
        }
    }
})
  , td = T({
    ...wt(),
    ...vt(Do(), ["inline"])
}, "VCheckbox")
  , nd = M()({
    name: "VCheckbox",
    inheritAttrs: !1,
    props: td(),
    emits: {
        "update:modelValue": e=>!0,
        "update:focused": e=>!0
    },
    setup(e, n) {
        let {attrs: t, slots: a} = n;
        const l = ae(e, "modelValue")
          , {isFocused: i, focus: o, blur: s} = pt(e)
          , u = Re()
          , v = g(()=>e.id || `checkbox-${u}`);
        return D(()=>{
            const [c,d] = Ht(t)
              , [f,m] = Ee.filterProps(e)
              , [h,y] = ln.filterProps(e);
            return r(Ee, K({
                class: ["v-checkbox", e.class]
            }, c, f, {
                modelValue: l.value,
                "onUpdate:modelValue": S=>l.value = S,
                id: v.value,
                focused: i.value,
                style: e.style
            }), {
                ...a,
                default: S=>{
                    let {id: b, messagesId: C, isDisabled: V, isReadonly: P} = S;
                    return r(ln, K(h, {
                        id: b.value,
                        "aria-describedby": C.value,
                        disabled: V.value,
                        readonly: P.value
                    }, d, {
                        modelValue: l.value,
                        "onUpdate:modelValue": A=>l.value = A,
                        onFocus: o,
                        onBlur: s
                    }), a)
                }
            })
        }
        ),
        {}
    }
});
const ad = T({
    start: Boolean,
    end: Boolean,
    icon: ne,
    image: String,
    ...X(),
    ...Be(),
    ...Ce(),
    ...Vt(),
    ...le(),
    ...ce(),
    ...lt({
        variant: "flat"
    })
}, "VAvatar")
  , Pt = M()({
    name: "VAvatar",
    props: ad(),
    setup(e, n) {
        let {slots: t} = n;
        const {themeClasses: a} = me(e)
          , {colorClasses: l, colorStyles: i, variantClasses: o} = Ut(e)
          , {densityClasses: s} = De(e)
          , {roundedClasses: u} = we(e)
          , {sizeClasses: v, sizeStyles: c} = vn(e);
        return D(()=>r(e.tag, {
            class: ["v-avatar", {
                "v-avatar--start": e.start,
                "v-avatar--end": e.end
            }, a.value, l.value, s.value, u.value, v.value, o.value, e.class],
            style: [i.value, c.value, e.style]
        }, {
            default: ()=>{
                var d;
                return [e.image ? r(Dt, {
                    key: "image",
                    src: e.image,
                    alt: "",
                    cover: !0
                }, null) : e.icon ? r(he, {
                    key: "icon",
                    icon: e.icon
                }, null) : (d = t.default) == null ? void 0 : d.call(t), Wt(!1, "v-avatar")]
            }
        })),
        {}
    }
});
const Wo = Symbol.for("vuetify:v-chip-group")
  , ld = T({
    column: Boolean,
    filter: Boolean,
    valueComparator: {
        type: Function,
        default: Nt
    },
    ...X(),
    ...un({
        selectedClass: "v-chip--selected"
    }),
    ...le(),
    ...ce(),
    ...lt({
        variant: "tonal"
    })
}, "VChipGroup")
  , id = M()({
    name: "VChipGroup",
    props: ld(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const {themeClasses: a} = me(e)
          , {isSelected: l, select: i, next: o, prev: s, selected: u} = Yt(e, Wo);
        return xe({
            VChip: {
                color: O(e, "color"),
                disabled: O(e, "disabled"),
                filter: O(e, "filter"),
                variant: O(e, "variant")
            }
        }),
        D(()=>r(e.tag, {
            class: ["v-chip-group", {
                "v-chip-group--column": e.column
            }, a.value, e.class],
            style: e.style
        }, {
            default: ()=>{
                var v;
                return [(v = t.default) == null ? void 0 : v.call(t, {
                    isSelected: l,
                    select: i,
                    next: o,
                    prev: s,
                    selected: u.value
                })]
            }
        })),
        {}
    }
})
  , od = T({
    activeClass: String,
    appendAvatar: String,
    appendIcon: ne,
    closable: Boolean,
    closeIcon: {
        type: ne,
        default: "$delete"
    },
    closeLabel: {
        type: String,
        default: "$vuetify.close"
    },
    draggable: Boolean,
    filter: Boolean,
    filterIcon: {
        type: String,
        default: "$complete"
    },
    label: Boolean,
    link: {
        type: Boolean,
        default: void 0
    },
    pill: Boolean,
    prependAvatar: String,
    prependIcon: ne,
    ripple: {
        type: [Boolean, Object],
        default: !0
    },
    text: String,
    modelValue: {
        type: Boolean,
        default: !0
    },
    onClick: ut(),
    onClickOnce: ut(),
    ...Xe(),
    ...X(),
    ...Be(),
    ...Ae(),
    ...cn(),
    ...Ce(),
    ...Mn(),
    ...Vt(),
    ...le({
        tag: "span"
    }),
    ...ce(),
    ...lt({
        variant: "tonal"
    })
}, "VChip")
  , On = M()({
    name: "VChip",
    directives: {
        Ripple: Tt
    },
    props: od(),
    emits: {
        "click:close": e=>!0,
        "update:modelValue": e=>!0,
        "group:selected": e=>!0,
        click: e=>!0
    },
    setup(e, n) {
        let {attrs: t, emit: a, slots: l} = n;
        const {t: i} = et()
          , {borderClasses: o} = at(e)
          , {colorClasses: s, colorStyles: u, variantClasses: v} = Ut(e)
          , {densityClasses: c} = De(e)
          , {elevationClasses: d} = Le(e)
          , {roundedClasses: f} = we(e)
          , {sizeClasses: m} = vn(e)
          , {themeClasses: h} = me(e)
          , y = ae(e, "modelValue")
          , S = dn(e, Wo, !1)
          , b = Ln(e, t)
          , C = g(()=>e.link !== !1 && b.isLink.value)
          , V = g(()=>!e.disabled && e.link !== !1 && (!!S || e.link || b.isClickable.value))
          , P = g(()=>({
            "aria-label": i(e.closeLabel),
            onClick(x) {
                x.stopPropagation(),
                y.value = !1,
                a("click:close", x)
            }
        }));
        function A(x) {
            var k;
            a("click", x),
            V.value && ((k = b.navigate) == null || k.call(b, x),
            S == null || S.toggle())
        }
        function I(x) {
            (x.key === "Enter" || x.key === " ") && (x.preventDefault(),
            A(x))
        }
        return ()=>{
            const x = b.isLink.value ? "a" : e.tag
              , k = !!(e.appendIcon || e.appendAvatar)
              , w = !!(k || l.append)
              , _ = !!(l.close || e.closable)
              , B = !!(l.filter || e.filter) && S
              , p = !!(e.prependIcon || e.prependAvatar)
              , $ = !!(p || l.prepend)
              , F = !S || S.isSelected.value;
            return y.value && Ve(r(x, {
                class: ["v-chip", {
                    "v-chip--disabled": e.disabled,
                    "v-chip--label": e.label,
                    "v-chip--link": V.value,
                    "v-chip--filter": B,
                    "v-chip--pill": e.pill
                }, h.value, o.value, F ? s.value : void 0, c.value, d.value, f.value, m.value, v.value, S == null ? void 0 : S.selectedClass.value, e.class],
                style: [F ? u.value : void 0, e.style],
                disabled: e.disabled || void 0,
                draggable: e.draggable,
                href: b.href.value,
                tabindex: V.value ? 0 : void 0,
                onClick: A,
                onKeydown: V.value && !C.value && I
            }, {
                default: ()=>{
                    var E;
                    return [Wt(V.value, "v-chip"), B && r(wl, {
                        key: "filter"
                    }, {
                        default: ()=>[Ve(r("div", {
                            class: "v-chip__filter"
                        }, [l.filter ? r(ge, {
                            key: "filter-defaults",
                            disabled: !e.filterIcon,
                            defaults: {
                                VIcon: {
                                    icon: e.filterIcon
                                }
                            }
                        }, l.filter) : r(he, {
                            key: "filter-icon",
                            icon: e.filterIcon
                        }, null)]), [[dt, S.isSelected.value]])]
                    }), $ && r("div", {
                        key: "prepend",
                        class: "v-chip__prepend"
                    }, [l.prepend ? r(ge, {
                        key: "prepend-defaults",
                        disabled: !p,
                        defaults: {
                            VAvatar: {
                                image: e.prependAvatar,
                                start: !0
                            },
                            VIcon: {
                                icon: e.prependIcon,
                                start: !0
                            }
                        }
                    }, l.prepend) : r(se, null, [e.prependIcon && r(he, {
                        key: "prepend-icon",
                        icon: e.prependIcon,
                        start: !0
                    }, null), e.prependAvatar && r(Pt, {
                        key: "prepend-avatar",
                        image: e.prependAvatar,
                        start: !0
                    }, null)])]), r("div", {
                        class: "v-chip__content"
                    }, [((E = l.default) == null ? void 0 : E.call(l, {
                        isSelected: S == null ? void 0 : S.isSelected.value,
                        selectedClass: S == null ? void 0 : S.selectedClass.value,
                        select: S == null ? void 0 : S.select,
                        toggle: S == null ? void 0 : S.toggle,
                        value: S == null ? void 0 : S.value.value,
                        disabled: e.disabled
                    })) ?? e.text]), w && r("div", {
                        key: "append",
                        class: "v-chip__append"
                    }, [l.append ? r(ge, {
                        key: "append-defaults",
                        disabled: !k,
                        defaults: {
                            VAvatar: {
                                end: !0,
                                image: e.appendAvatar
                            },
                            VIcon: {
                                end: !0,
                                icon: e.appendIcon
                            }
                        }
                    }, l.append) : r(se, null, [e.appendIcon && r(he, {
                        key: "append-icon",
                        end: !0,
                        icon: e.appendIcon
                    }, null), e.appendAvatar && r(Pt, {
                        key: "append-avatar",
                        end: !0,
                        image: e.appendAvatar
                    }, null)])]), _ && r("div", K({
                        key: "close",
                        class: "v-chip__close"
                    }, P.value), [l.close ? r(ge, {
                        key: "close-defaults",
                        defaults: {
                            VIcon: {
                                icon: e.closeIcon,
                                size: "x-small"
                            }
                        }
                    }, l.close) : r(he, {
                        key: "close-icon",
                        icon: e.closeIcon,
                        size: "x-small"
                    }, null)])]
                }
            }), [[Ye("ripple"), V.value && e.ripple, null]])
        }
    }
});
const Wa = Symbol.for("vuetify:list");
function Uo() {
    const e = ye(Wa, {
        hasPrepend: Y(!1),
        updateHasPrepend: ()=>null
    })
      , n = {
        hasPrepend: Y(!1),
        updateHasPrepend: t=>{
            t && (n.hasPrepend.value = t)
        }
    };
    return Te(Wa, n),
    e
}
function Yo() {
    return ye(Wa, null)
}
const sd = {
    open: e=>{
        let {id: n, value: t, opened: a, parents: l} = e;
        if (t) {
            const i = new Set;
            i.add(n);
            let o = l.get(n);
            for (; o != null; )
                i.add(o),
                o = l.get(o);
            return i
        } else
            return a.delete(n),
            a
    }
    ,
    select: ()=>null
}
  , Ko = {
    open: e=>{
        let {id: n, value: t, opened: a, parents: l} = e;
        if (t) {
            let i = l.get(n);
            for (a.add(n); i != null && i !== n; )
                a.add(i),
                i = l.get(i);
            return a
        } else
            a.delete(n);
        return a
    }
    ,
    select: ()=>null
}
  , rd = {
    open: Ko.open,
    select: e=>{
        let {id: n, value: t, opened: a, parents: l} = e;
        if (!t)
            return a;
        const i = [];
        let o = l.get(n);
        for (; o != null; )
            i.push(o),
            o = l.get(o);
        return new Set(i)
    }
}
  , El = e=>{
    const n = {
        select: t=>{
            let {id: a, value: l, selected: i} = t;
            if (a = _t(a),
            e && !l) {
                const o = Array.from(i.entries()).reduce((s,u)=>{
                    let[v,c] = u;
                    return c === "on" ? [...s, v] : s
                }
                , []);
                if (o.length === 1 && o[0] === a)
                    return i
            }
            return i.set(a, l ? "on" : "off"),
            i
        }
        ,
        in: (t,a,l)=>{
            let i = new Map;
            for (const o of t || [])
                i = n.select({
                    id: o,
                    value: !0,
                    selected: new Map(i),
                    children: a,
                    parents: l
                });
            return i
        }
        ,
        out: t=>{
            const a = [];
            for (const [l,i] of t.entries())
                i === "on" && a.push(l);
            return a
        }
    };
    return n
}
  , Xo = e=>{
    const n = El(e);
    return {
        select: a=>{
            let {selected: l, id: i, ...o} = a;
            i = _t(i);
            const s = l.has(i) ? new Map([[i, l.get(i)]]) : new Map;
            return n.select({
                ...o,
                id: i,
                selected: s
            })
        }
        ,
        in: (a,l,i)=>{
            let o = new Map;
            return a != null && a.length && (o = n.in(a.slice(0, 1), l, i)),
            o
        }
        ,
        out: (a,l,i)=>n.out(a, l, i)
    }
}
  , ud = e=>{
    const n = El(e);
    return {
        select: a=>{
            let {id: l, selected: i, children: o, ...s} = a;
            return l = _t(l),
            o.has(l) ? i : n.select({
                id: l,
                selected: i,
                children: o,
                ...s
            })
        }
        ,
        in: n.in,
        out: n.out
    }
}
  , cd = e=>{
    const n = Xo(e);
    return {
        select: a=>{
            let {id: l, selected: i, children: o, ...s} = a;
            return l = _t(l),
            o.has(l) ? i : n.select({
                id: l,
                selected: i,
                children: o,
                ...s
            })
        }
        ,
        in: n.in,
        out: n.out
    }
}
  , dd = e=>{
    const n = {
        select: t=>{
            let {id: a, value: l, selected: i, children: o, parents: s} = t;
            a = _t(a);
            const u = new Map(i)
              , v = [a];
            for (; v.length; ) {
                const d = v.shift();
                i.set(d, l ? "on" : "off"),
                o.has(d) && v.push(...o.get(d))
            }
            let c = s.get(a);
            for (; c; ) {
                const d = o.get(c)
                  , f = d.every(h=>i.get(h) === "on")
                  , m = d.every(h=>!i.has(h) || i.get(h) === "off");
                i.set(c, f ? "on" : m ? "off" : "indeterminate"),
                c = s.get(c)
            }
            return e && !l && Array.from(i.entries()).reduce((f,m)=>{
                let[h,y] = m;
                return y === "on" ? [...f, h] : f
            }
            , []).length === 0 ? u : i
        }
        ,
        in: (t,a,l)=>{
            let i = new Map;
            for (const o of t || [])
                i = n.select({
                    id: o,
                    value: !0,
                    selected: new Map(i),
                    children: a,
                    parents: l
                });
            return i
        }
        ,
        out: (t,a)=>{
            const l = [];
            for (const [i,o] of t.entries())
                o === "on" && !a.has(i) && l.push(i);
            return l
        }
    };
    return n
}
  , Bn = Symbol.for("vuetify:nested")
  , qo = {
    id: Y(),
    root: {
        register: ()=>null,
        unregister: ()=>null,
        parents: U(new Map),
        children: U(new Map),
        open: ()=>null,
        openOnSelect: ()=>null,
        select: ()=>null,
        opened: U(new Set),
        selected: U(new Map),
        selectedValues: U([])
    }
}
  , vd = T({
    selectStrategy: [String, Function],
    openStrategy: [String, Object],
    opened: Array,
    selected: Array,
    mandatory: Boolean
}, "nested")
  , fd = e=>{
    let n = !1;
    const t = U(new Map)
      , a = U(new Map)
      , l = ae(e, "opened", e.opened, d=>new Set(d), d=>[...d.values()])
      , i = g(()=>{
        if (typeof e.selectStrategy == "object")
            return e.selectStrategy;
        switch (e.selectStrategy) {
        case "single-leaf":
            return cd(e.mandatory);
        case "leaf":
            return ud(e.mandatory);
        case "independent":
            return El(e.mandatory);
        case "single-independent":
            return Xo(e.mandatory);
        case "classic":
        default:
            return dd(e.mandatory)
        }
    }
    )
      , o = g(()=>{
        if (typeof e.openStrategy == "object")
            return e.openStrategy;
        switch (e.openStrategy) {
        case "list":
            return rd;
        case "single":
            return sd;
        case "multiple":
        default:
            return Ko
        }
    }
    )
      , s = ae(e, "selected", e.selected, d=>i.value.in(d, t.value, a.value), d=>i.value.out(d, t.value, a.value));
    Ue(()=>{
        n = !0
    }
    );
    function u(d) {
        const f = [];
        let m = d;
        for (; m != null; )
            f.unshift(m),
            m = a.value.get(m);
        return f
    }
    const v = pe("nested")
      , c = {
        id: Y(),
        root: {
            opened: l,
            selected: s,
            selectedValues: g(()=>{
                const d = [];
                for (const [f,m] of s.value.entries())
                    m === "on" && d.push(f);
                return d
            }
            ),
            register: (d,f,m)=>{
                f && d !== f && a.value.set(d, f),
                m && t.value.set(d, []),
                f != null && t.value.set(f, [...t.value.get(f) || [], d])
            }
            ,
            unregister: d=>{
                if (n)
                    return;
                t.value.delete(d);
                const f = a.value.get(d);
                if (f) {
                    const m = t.value.get(f) ?? [];
                    t.value.set(f, m.filter(h=>h !== d))
                }
                a.value.delete(d),
                l.value.delete(d)
            }
            ,
            open: (d,f,m)=>{
                v.emit("click:open", {
                    id: d,
                    value: f,
                    path: u(d),
                    event: m
                });
                const h = o.value.open({
                    id: d,
                    value: f,
                    opened: new Set(l.value),
                    children: t.value,
                    parents: a.value,
                    event: m
                });
                h && (l.value = h)
            }
            ,
            openOnSelect: (d,f,m)=>{
                const h = o.value.select({
                    id: d,
                    value: f,
                    selected: new Map(s.value),
                    opened: new Set(l.value),
                    children: t.value,
                    parents: a.value,
                    event: m
                });
                h && (l.value = h)
            }
            ,
            select: (d,f,m)=>{
                v.emit("click:select", {
                    id: d,
                    value: f,
                    path: u(d),
                    event: m
                });
                const h = i.value.select({
                    id: d,
                    value: f,
                    selected: new Map(s.value),
                    children: t.value,
                    parents: a.value,
                    event: m
                });
                h && (s.value = h),
                c.root.openOnSelect(d, f, m)
            }
            ,
            children: t,
            parents: a
        }
    };
    return Te(Bn, c),
    c.root
}
  , Zo = (e,n)=>{
    const t = ye(Bn, qo)
      , a = Symbol(Re())
      , l = g(()=>e.value !== void 0 ? e.value : a)
      , i = {
        ...t,
        id: l,
        open: (o,s)=>t.root.open(l.value, o, s),
        openOnSelect: (o,s)=>t.root.openOnSelect(l.value, o, s),
        isOpen: g(()=>t.root.opened.value.has(l.value)),
        parent: g(()=>t.root.parents.value.get(l.value)),
        select: (o,s)=>t.root.select(l.value, o, s),
        isSelected: g(()=>t.root.selected.value.get(_t(l.value)) === "on"),
        isIndeterminate: g(()=>t.root.selected.value.get(l.value) === "indeterminate"),
        isLeaf: g(()=>!t.root.children.value.get(l.value)),
        isGroupActivator: t.isGroupActivator
    };
    return !t.isGroupActivator && t.root.register(l.value, t.id.value, n),
    Ue(()=>{
        !t.isGroupActivator && t.root.unregister(l.value)
    }
    ),
    n && Te(Bn, i),
    i
}
  , md = ()=>{
    const e = ye(Bn, qo);
    Te(Bn, {
        ...e,
        isGroupActivator: !0
    })
}
  , gd = Qe({
    name: "VListGroupActivator",
    setup(e, n) {
        let {slots: t} = n;
        return md(),
        ()=>{
            var a;
            return (a = t.default) == null ? void 0 : a.call(t)
        }
    }
})
  , hd = T({
    activeColor: String,
    baseColor: String,
    color: String,
    collapseIcon: {
        type: ne,
        default: "$collapse"
    },
    expandIcon: {
        type: ne,
        default: "$expand"
    },
    prependIcon: ne,
    appendIcon: ne,
    fluid: Boolean,
    subgroup: Boolean,
    title: String,
    value: null,
    ...X(),
    ...le()
}, "VListGroup")
  , Ua = M()({
    name: "VListGroup",
    props: hd(),
    setup(e, n) {
        let {slots: t} = n;
        const {isOpen: a, open: l, id: i} = Zo(O(e, "value"), !0)
          , o = g(()=>`v-list-group--id-${String(i.value)}`)
          , s = Yo()
          , {isBooted: u} = Gt();
        function v(m) {
            l(!a.value, m)
        }
        const c = g(()=>({
            onClick: v,
            class: "v-list-group__header",
            id: o.value
        }))
          , d = g(()=>a.value ? e.collapseIcon : e.expandIcon)
          , f = g(()=>({
            VListItem: {
                active: a.value,
                activeColor: e.activeColor,
                baseColor: e.baseColor,
                color: e.color,
                prependIcon: e.prependIcon || e.subgroup && d.value,
                appendIcon: e.appendIcon || !e.subgroup && d.value,
                title: e.title,
                value: e.value
            }
        }));
        return D(()=>r(e.tag, {
            class: ["v-list-group", {
                "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value,
                "v-list-group--fluid": e.fluid,
                "v-list-group--subgroup": e.subgroup,
                "v-list-group--open": a.value
            }, e.class],
            style: e.style
        }, {
            default: ()=>[t.activator && r(ge, {
                defaults: f.value
            }, {
                default: ()=>[r(gd, null, {
                    default: ()=>[t.activator({
                        props: c.value,
                        isOpen: a.value
                    })]
                })]
            }), r(ot, {
                transition: {
                    component: oa
                },
                disabled: !u.value
            }, {
                default: ()=>{
                    var m;
                    return [Ve(r("div", {
                        class: "v-list-group__items",
                        role: "group",
                        "aria-labelledby": o.value
                    }, [(m = t.default) == null ? void 0 : m.call(t)]), [[dt, a.value]])]
                }
            })]
        })),
        {}
    }
});
const Jo = st("v-list-item-subtitle")
  , Qo = st("v-list-item-title")
  , yd = T({
    active: {
        type: Boolean,
        default: void 0
    },
    activeClass: String,
    activeColor: String,
    appendAvatar: String,
    appendIcon: ne,
    baseColor: String,
    disabled: Boolean,
    lines: String,
    link: {
        type: Boolean,
        default: void 0
    },
    nav: Boolean,
    prependAvatar: String,
    prependIcon: ne,
    ripple: {
        type: [Boolean, Object],
        default: !0
    },
    subtitle: [String, Number, Boolean],
    title: [String, Number, Boolean],
    value: null,
    onClick: ut(),
    onClickOnce: ut(),
    ...Xe(),
    ...X(),
    ...Be(),
    ...tt(),
    ...Ae(),
    ...Ce(),
    ...Mn(),
    ...le(),
    ...ce(),
    ...lt({
        variant: "text"
    })
}, "VListItem")
  , bt = M()({
    name: "VListItem",
    directives: {
        Ripple: Tt
    },
    props: yd(),
    emits: {
        click: e=>!0
    },
    setup(e, n) {
        let {attrs: t, slots: a, emit: l} = n;
        const i = Ln(e, t)
          , o = g(()=>e.value === void 0 ? i.href.value : e.value)
          , {select: s, isSelected: u, isIndeterminate: v, isGroupActivator: c, root: d, parent: f, openOnSelect: m} = Zo(o, !1)
          , h = Yo()
          , y = g(()=>{
            var R;
            return e.active !== !1 && (e.active || ((R = i.isActive) == null ? void 0 : R.value) || u.value)
        }
        )
          , S = g(()=>e.link !== !1 && i.isLink.value)
          , b = g(()=>!e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!h))
          , C = g(()=>e.rounded || e.nav)
          , V = g(()=>e.color ?? e.activeColor)
          , P = g(()=>({
            color: y.value ? V.value ?? e.baseColor : e.baseColor,
            variant: e.variant
        }));
        Z(()=>{
            var R;
            return (R = i.isActive) == null ? void 0 : R.value
        }
        , R=>{
            R && f.value != null && d.open(f.value, !0),
            R && m(R)
        }
        , {
            immediate: !0
        });
        const {themeClasses: A} = me(e)
          , {borderClasses: I} = at(e)
          , {colorClasses: x, colorStyles: k, variantClasses: w} = Ut(P)
          , {densityClasses: _} = De(e)
          , {dimensionStyles: B} = nt(e)
          , {elevationClasses: p} = Le(e)
          , {roundedClasses: $} = we(C)
          , F = g(()=>e.lines ? `v-list-item--${e.lines}-line` : void 0)
          , E = g(()=>({
            isActive: y.value,
            select: s,
            isSelected: u.value,
            isIndeterminate: v.value
        }));
        function H(R) {
            var j;
            l("click", R),
            !(c || !b.value) && ((j = i.navigate) == null || j.call(i, R),
            e.value != null && s(!u.value, R))
        }
        function G(R) {
            (R.key === "Enter" || R.key === " ") && (R.preventDefault(),
            H(R))
        }
        return D(()=>{
            const R = S.value ? "a" : e.tag
              , j = a.title || e.title
              , L = a.subtitle || e.subtitle
              , W = !!(e.appendAvatar || e.appendIcon)
              , Q = !!(W || a.append)
              , re = !!(e.prependAvatar || e.prependIcon)
              , oe = !!(re || a.prepend);
            return h == null || h.updateHasPrepend(oe),
            e.activeColor && Nr("active-color", ["color", "base-color"]),
            Ve(r(R, {
                class: ["v-list-item", {
                    "v-list-item--active": y.value,
                    "v-list-item--disabled": e.disabled,
                    "v-list-item--link": b.value,
                    "v-list-item--nav": e.nav,
                    "v-list-item--prepend": !oe && (h == null ? void 0 : h.hasPrepend.value),
                    [`${e.activeClass}`]: e.activeClass && y.value
                }, A.value, I.value, x.value, _.value, p.value, F.value, $.value, w.value, e.class],
                style: [k.value, B.value, e.style],
                href: i.href.value,
                tabindex: b.value ? h ? -2 : 0 : void 0,
                title: e.title,
                onClick: H,
                onKeydown: b.value && !S.value && G
            }, {
                default: ()=>{
                    var de;
                    return [Wt(b.value || y.value, "v-list-item"), oe && r("div", {
                        key: "prepend",
                        class: "v-list-item__prepend"
                    }, [a.prepend ? r(ge, {
                        key: "prepend-defaults",
                        disabled: !re,
                        defaults: {
                            VAvatar: {
                                density: e.density,
                                image: e.prependAvatar
                            },
                            VIcon: {
                                density: e.density,
                                icon: e.prependIcon
                            },
                            VListItemAction: {
                                start: !0
                            }
                        }
                    }, {
                        default: ()=>{
                            var N;
                            return [(N = a.prepend) == null ? void 0 : N.call(a, E.value)]
                        }
                    }) : r(se, null, [e.prependAvatar && r(Pt, {
                        key: "prepend-avatar",
                        density: e.density,
                        image: e.prependAvatar
                    }, null), e.prependIcon && r(he, {
                        key: "prepend-icon",
                        density: e.density,
                        icon: e.prependIcon
                    }, null)])]), r("div", {
                        class: "v-list-item__content",
                        "data-no-activator": ""
                    }, [j && r(Qo, {
                        key: "title"
                    }, {
                        default: ()=>{
                            var N;
                            return [((N = a.title) == null ? void 0 : N.call(a, {
                                title: e.title
                            })) ?? e.title]
                        }
                    }), L && r(Jo, {
                        key: "subtitle"
                    }, {
                        default: ()=>{
                            var N;
                            return [((N = a.subtitle) == null ? void 0 : N.call(a, {
                                subtitle: e.subtitle
                            })) ?? e.subtitle]
                        }
                    }), (de = a.default) == null ? void 0 : de.call(a, E.value)]), Q && r("div", {
                        key: "append",
                        class: "v-list-item__append"
                    }, [a.append ? r(ge, {
                        key: "append-defaults",
                        disabled: !W,
                        defaults: {
                            VAvatar: {
                                density: e.density,
                                image: e.appendAvatar
                            },
                            VIcon: {
                                density: e.density,
                                icon: e.appendIcon
                            },
                            VListItemAction: {
                                end: !0
                            }
                        }
                    }, {
                        default: ()=>{
                            var N;
                            return [(N = a.append) == null ? void 0 : N.call(a, E.value)]
                        }
                    }) : r(se, null, [e.appendIcon && r(he, {
                        key: "append-icon",
                        density: e.density,
                        icon: e.appendIcon
                    }, null), e.appendAvatar && r(Pt, {
                        key: "append-avatar",
                        density: e.density,
                        image: e.appendAvatar
                    }, null)])])]
                }
            }), [[Ye("ripple"), b.value && e.ripple]])
        }
        ),
        {}
    }
})
  , bd = T({
    color: String,
    inset: Boolean,
    sticky: Boolean,
    title: String,
    ...X(),
    ...le()
}, "VListSubheader")
  , es = M()({
    name: "VListSubheader",
    props: bd(),
    setup(e, n) {
        let {slots: t} = n;
        const {textColorClasses: a, textColorStyles: l} = Fe(O(e, "color"));
        return D(()=>{
            const i = !!(t.default || e.title);
            return r(e.tag, {
                class: ["v-list-subheader", {
                    "v-list-subheader--inset": e.inset,
                    "v-list-subheader--sticky": e.sticky
                }, a.value, e.class],
                style: [{
                    textColorStyles: l
                }, e.style]
            }, {
                default: ()=>{
                    var o;
                    return [i && r("div", {
                        class: "v-list-subheader__text"
                    }, [((o = t.default) == null ? void 0 : o.call(t)) ?? e.title])]
                }
            })
        }
        ),
        {}
    }
});
const Sd = T({
    color: String,
    inset: Boolean,
    length: [Number, String],
    thickness: [Number, String],
    vertical: Boolean,
    ...X(),
    ...ce()
}, "VDivider")
  , ts = M()({
    name: "VDivider",
    props: Sd(),
    setup(e, n) {
        let {attrs: t} = n;
        const {themeClasses: a} = me(e)
          , {textColorClasses: l, textColorStyles: i} = Fe(O(e, "color"))
          , o = g(()=>{
            const s = {};
            return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = q(e.length)),
            e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = q(e.thickness)),
            s
        }
        );
        return D(()=>r("hr", {
            class: [{
                "v-divider": !0,
                "v-divider--inset": e.inset,
                "v-divider--vertical": e.vertical
            }, a.value, l.value, e.class],
            style: [o.value, i.value, e.style],
            "aria-orientation": !t.role || t.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
            role: `${t.role || "separator"}`
        }, null)),
        {}
    }
})
  , Cd = T({
    items: Array
}, "VListChildren")
  , ns = M()({
    name: "VListChildren",
    props: Cd(),
    setup(e, n) {
        let {slots: t} = n;
        return Uo(),
        ()=>{
            var a, l;
            return ((a = t.default) == null ? void 0 : a.call(t)) ?? ((l = e.items) == null ? void 0 : l.map(i=>{
                var m, h;
                let {children: o, props: s, type: u, raw: v} = i;
                if (u === "divider")
                    return ((m = t.divider) == null ? void 0 : m.call(t, {
                        props: s
                    })) ?? r(ts, s, null);
                if (u === "subheader")
                    return ((h = t.subheader) == null ? void 0 : h.call(t, {
                        props: s
                    })) ?? r(es, s, null);
                const c = {
                    subtitle: t.subtitle ? y=>{
                        var S;
                        return (S = t.subtitle) == null ? void 0 : S.call(t, {
                            ...y,
                            item: v
                        })
                    }
                    : void 0,
                    prepend: t.prepend ? y=>{
                        var S;
                        return (S = t.prepend) == null ? void 0 : S.call(t, {
                            ...y,
                            item: v
                        })
                    }
                    : void 0,
                    append: t.append ? y=>{
                        var S;
                        return (S = t.append) == null ? void 0 : S.call(t, {
                            ...y,
                            item: v
                        })
                    }
                    : void 0,
                    title: t.title ? y=>{
                        var S;
                        return (S = t.title) == null ? void 0 : S.call(t, {
                            ...y,
                            item: v
                        })
                    }
                    : void 0
                }
                  , [d,f] = Ua.filterProps(s);
                return o ? r(Ua, K({
                    value: s == null ? void 0 : s.value
                }, d), {
                    activator: y=>{
                        let {props: S} = y;
                        return t.header ? t.header({
                            props: {
                                ...s,
                                ...S
                            }
                        }) : r(bt, K(s, S), c)
                    }
                    ,
                    default: ()=>r(ns, {
                        items: o
                    }, t)
                }) : t.item ? t.item({
                    props: s
                }) : r(bt, s, c)
            }
            ))
        }
    }
})
  , as = T({
    items: {
        type: Array,
        default: ()=>[]
    },
    itemTitle: {
        type: [String, Array, Function],
        default: "title"
    },
    itemValue: {
        type: [String, Array, Function],
        default: "value"
    },
    itemChildren: {
        type: [Boolean, String, Array, Function],
        default: "children"
    },
    itemProps: {
        type: [Boolean, String, Array, Function],
        default: "props"
    },
    returnObject: Boolean
}, "list-items");
function Jt(e, n) {
    const t = Me(n, e.itemTitle, n)
      , a = e.returnObject ? n : Me(n, e.itemValue, t)
      , l = Me(n, e.itemChildren)
      , i = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children"in n ? on(n, ["children"])[1] : n : void 0 : Me(n, e.itemProps)
      , o = {
        title: t,
        value: a,
        ...i
    };
    return {
        title: String(o.title ?? ""),
        value: o.value,
        props: o,
        children: Array.isArray(l) ? ls(e, l) : void 0,
        raw: n
    }
}
function ls(e, n) {
    const t = [];
    for (const a of n)
        t.push(Jt(e, a));
    return t
}
function Ll(e) {
    const n = g(()=>ls(e, e.items));
    return kd(n, t=>Jt(e, t))
}
function kd(e, n) {
    function t(l) {
        return l.filter(i=>i !== null || e.value.some(o=>o.value === null)).map(i=>e.value.find(s=>Nt(i, s.value)) ?? n(i))
    }
    function a(l) {
        return l.map(i=>{
            let {value: o} = i;
            return o
        }
        )
    }
    return {
        items: e,
        transformIn: t,
        transformOut: a
    }
}
function Vd(e) {
    return typeof e == "string" || typeof e == "number" || typeof e == "boolean"
}
function wd(e, n) {
    const t = Me(n, e.itemType, "item")
      , a = Vd(n) ? n : Me(n, e.itemTitle)
      , l = Me(n, e.itemValue, void 0)
      , i = Me(n, e.itemChildren)
      , o = e.itemProps === !0 ? on(n, ["children"])[1] : Me(n, e.itemProps)
      , s = {
        title: a,
        value: l,
        ...o
    };
    return {
        type: t,
        title: s.title,
        value: s.value,
        props: s,
        children: t === "item" && i ? is(e, i) : void 0,
        raw: n
    }
}
function is(e, n) {
    const t = [];
    for (const a of n)
        t.push(wd(e, a));
    return t
}
function xd(e) {
    return {
        items: g(()=>is(e, e.items))
    }
}
const Pd = T({
    baseColor: String,
    activeColor: String,
    activeClass: String,
    bgColor: String,
    disabled: Boolean,
    lines: {
        type: [Boolean, String],
        default: "one"
    },
    nav: Boolean,
    ...vd({
        selectStrategy: "single-leaf",
        openStrategy: "list"
    }),
    ...Xe(),
    ...X(),
    ...Be(),
    ...tt(),
    ...Ae(),
    itemType: {
        type: String,
        default: "type"
    },
    ...as(),
    ...Ce(),
    ...le(),
    ...ce(),
    ...lt({
        variant: "text"
    })
}, "VList")
  , da = M()({
    name: "VList",
    props: Pd(),
    emits: {
        "update:selected": e=>!0,
        "update:opened": e=>!0,
        "click:open": e=>!0,
        "click:select": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const {items: a} = xd(e)
          , {themeClasses: l} = me(e)
          , {backgroundColorClasses: i, backgroundColorStyles: o} = Pe(O(e, "bgColor"))
          , {borderClasses: s} = at(e)
          , {densityClasses: u} = De(e)
          , {dimensionStyles: v} = nt(e)
          , {elevationClasses: c} = Le(e)
          , {roundedClasses: d} = we(e)
          , {open: f, select: m} = fd(e)
          , h = g(()=>e.lines ? `v-list--${e.lines}-line` : void 0)
          , y = O(e, "activeColor")
          , S = O(e, "baseColor")
          , b = O(e, "color");
        Uo(),
        xe({
            VListGroup: {
                activeColor: y,
                baseColor: S,
                color: b
            },
            VListItem: {
                activeClass: O(e, "activeClass"),
                activeColor: y,
                baseColor: S,
                color: b,
                density: O(e, "density"),
                disabled: O(e, "disabled"),
                lines: O(e, "lines"),
                nav: O(e, "nav"),
                variant: O(e, "variant")
            }
        });
        const C = Y(!1)
          , V = U();
        function P(w) {
            C.value = !0
        }
        function A(w) {
            C.value = !1
        }
        function I(w) {
            var _;
            !C.value && !(w.relatedTarget && ((_ = V.value) != null && _.contains(w.relatedTarget))) && k()
        }
        function x(w) {
            if (V.value) {
                if (w.key === "ArrowDown")
                    k("next");
                else if (w.key === "ArrowUp")
                    k("prev");
                else if (w.key === "Home")
                    k("first");
                else if (w.key === "End")
                    k("last");
                else
                    return;
                w.preventDefault()
            }
        }
        function k(w) {
            if (V.value)
                return Xn(V.value, w)
        }
        return D(()=>r(e.tag, {
            ref: V,
            class: ["v-list", {
                "v-list--disabled": e.disabled,
                "v-list--nav": e.nav
            }, l.value, i.value, s.value, u.value, c.value, h.value, d.value, e.class],
            style: [o.value, v.value, e.style],
            tabindex: e.disabled || C.value ? -1 : 0,
            role: "listbox",
            "aria-activedescendant": void 0,
            onFocusin: P,
            onFocusout: A,
            onFocus: I,
            onKeydown: x
        }, {
            default: ()=>[r(ns, {
                items: a.value
            }, t)]
        })),
        {
            open: f,
            select: m,
            focus: k
        }
    }
})
  , Id = st("v-list-img")
  , _d = T({
    start: Boolean,
    end: Boolean,
    ...X(),
    ...le()
}, "VListItemAction")
  , Ad = M()({
    name: "VListItemAction",
    props: _d(),
    setup(e, n) {
        let {slots: t} = n;
        return D(()=>r(e.tag, {
            class: ["v-list-item-action", {
                "v-list-item-action--start": e.start,
                "v-list-item-action--end": e.end
            }, e.class],
            style: e.style
        }, t)),
        {}
    }
})
  , Bd = T({
    start: Boolean,
    end: Boolean,
    ...X(),
    ...le()
}, "VListItemMedia")
  , Td = M()({
    name: "VListItemMedia",
    props: Bd(),
    setup(e, n) {
        let {slots: t} = n;
        return D(()=>r(e.tag, {
            class: ["v-list-item-media", {
                "v-list-item-media--start": e.start,
                "v-list-item-media--end": e.end
            }, e.class],
            style: e.style
        }, t)),
        {}
    }
});
function Va(e, n) {
    return {
        x: e.x + n.x,
        y: e.y + n.y
    }
}
function pd(e, n) {
    return {
        x: e.x - n.x,
        y: e.y - n.y
    }
}
function Pi(e, n) {
    if (e.side === "top" || e.side === "bottom") {
        const {side: t, align: a} = e
          , l = a === "left" ? 0 : a === "center" ? n.width / 2 : a === "right" ? n.width : a
          , i = t === "top" ? 0 : t === "bottom" ? n.height : t;
        return Va({
            x: l,
            y: i
        }, n)
    } else if (e.side === "left" || e.side === "right") {
        const {side: t, align: a} = e
          , l = t === "left" ? 0 : t === "right" ? n.width : t
          , i = a === "top" ? 0 : a === "center" ? n.height / 2 : a === "bottom" ? n.height : a;
        return Va({
            x: l,
            y: i
        }, n)
    }
    return Va({
        x: n.width / 2,
        y: n.height / 2
    }, n)
}
const os = {
    static: Ld,
    connected: Od
}
  , $d = T({
    locationStrategy: {
        type: [String, Function],
        default: "static",
        validator: e=>typeof e == "function" || e in os
    },
    location: {
        type: String,
        default: "bottom"
    },
    origin: {
        type: String,
        default: "auto"
    },
    offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function Ed(e, n) {
    const t = U({})
      , a = U();
    ke && (ht(()=>!!(n.isActive.value && e.locationStrategy), i=>{
        var o, s;
        Z(()=>e.locationStrategy, i),
        je(()=>{
            a.value = void 0
        }
        ),
        typeof e.locationStrategy == "function" ? a.value = (o = e.locationStrategy(n, e, t)) == null ? void 0 : o.updateLocation : a.value = (s = os[e.locationStrategy](n, e, t)) == null ? void 0 : s.updateLocation
    }
    ),
    window.addEventListener("resize", l, {
        passive: !0
    }),
    je(()=>{
        window.removeEventListener("resize", l),
        a.value = void 0
    }
    ));
    function l(i) {
        var o;
        (o = a.value) == null || o.call(a, i)
    }
    return {
        contentStyles: t,
        updateLocation: a
    }
}
function Ld() {}
function Md(e, n) {
    n ? e.style.removeProperty("left") : e.style.removeProperty("right");
    const t = fl(e);
    return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0),
    t.y -= parseFloat(e.style.top || 0),
    t
}
function Od(e, n, t) {
    lu(e.activatorEl.value) && Object.assign(t.value, {
        position: "fixed",
        top: 0,
        [e.isRtl.value ? "right" : "left"]: 0
    });
    const {preferredAnchor: l, preferredOrigin: i} = cl(()=>{
        const h = pa(n.location, e.isRtl.value)
          , y = n.origin === "overlap" ? h : n.origin === "auto" ? ba(h) : pa(n.origin, e.isRtl.value);
        return h.side === y.side && h.align === Sa(y).align ? {
            preferredAnchor: Xl(h),
            preferredOrigin: Xl(y)
        } : {
            preferredAnchor: h,
            preferredOrigin: y
        }
    }
    )
      , [o,s,u,v] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map(h=>g(()=>{
        const y = parseFloat(n[h]);
        return isNaN(y) ? 1 / 0 : y
    }
    ))
      , c = g(()=>{
        if (Array.isArray(n.offset))
            return n.offset;
        if (typeof n.offset == "string") {
            const h = n.offset.split(" ").map(parseFloat);
            return h.length < 2 && h.push(0),
            h
        }
        return typeof n.offset == "number" ? [n.offset, 0] : [0, 0]
    }
    );
    let d = !1;
    const f = new ResizeObserver(()=>{
        d && m()
    }
    );
    Z([e.activatorEl, e.contentEl], (h,y)=>{
        let[S,b] = h
          , [C,V] = y;
        C && f.unobserve(C),
        S && f.observe(S),
        V && f.unobserve(V),
        b && f.observe(b)
    }
    , {
        immediate: !0
    }),
    je(()=>{
        f.disconnect()
    }
    );
    function m() {
        if (d = !1,
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>d = !0)
        }
        ),
        !e.activatorEl.value || !e.contentEl.value)
            return;
        const h = e.activatorEl.value.getBoundingClientRect()
          , y = Md(e.contentEl.value, e.isRtl.value)
          , S = Zn(e.contentEl.value)
          , b = 12;
        S.length || (S.push(document.documentElement),
        e.contentEl.value.style.top && e.contentEl.value.style.left || (y.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0),
        y.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
        const C = S.reduce((B,p)=>{
            const $ = p.getBoundingClientRect()
              , F = new Qt({
                x: p === document.documentElement ? 0 : $.x,
                y: p === document.documentElement ? 0 : $.y,
                width: p.clientWidth,
                height: p.clientHeight
            });
            return B ? new Qt({
                x: Math.max(B.left, F.left),
                y: Math.max(B.top, F.top),
                width: Math.min(B.right, F.right) - Math.max(B.left, F.left),
                height: Math.min(B.bottom, F.bottom) - Math.max(B.top, F.top)
            }) : F
        }
        , void 0);
        C.x += b,
        C.y += b,
        C.width -= b * 2,
        C.height -= b * 2;
        let V = {
            anchor: l.value,
            origin: i.value
        };
        function P(B) {
            const p = new Qt(y)
              , $ = Pi(B.anchor, h)
              , F = Pi(B.origin, p);
            let {x: E, y: H} = pd($, F);
            switch (B.anchor.side) {
            case "top":
                H -= c.value[0];
                break;
            case "bottom":
                H += c.value[0];
                break;
            case "left":
                E -= c.value[0];
                break;
            case "right":
                E += c.value[0];
                break
            }
            switch (B.anchor.align) {
            case "top":
                H -= c.value[1];
                break;
            case "bottom":
                H += c.value[1];
                break;
            case "left":
                E -= c.value[1];
                break;
            case "right":
                E += c.value[1];
                break
            }
            return p.x += E,
            p.y += H,
            p.width = Math.min(p.width, u.value),
            p.height = Math.min(p.height, v.value),
            {
                overflows: Zl(p, C),
                x: E,
                y: H
            }
        }
        let A = 0
          , I = 0;
        const x = {
            x: 0,
            y: 0
        }
          , k = {
            x: !1,
            y: !1
        };
        let w = -1;
        for (; !(w++ > 10); ) {
            const {x: B, y: p, overflows: $} = P(V);
            A += B,
            I += p,
            y.x += B,
            y.y += p;
            {
                const F = ql(V.anchor)
                  , E = $.x.before || $.x.after
                  , H = $.y.before || $.y.after;
                let G = !1;
                if (["x", "y"].forEach(R=>{
                    if (R === "x" && E && !k.x || R === "y" && H && !k.y) {
                        const j = {
                            anchor: {
                                ...V.anchor
                            },
                            origin: {
                                ...V.origin
                            }
                        }
                          , L = R === "x" ? F === "y" ? Sa : ba : F === "y" ? ba : Sa;
                        j.anchor = L(j.anchor),
                        j.origin = L(j.origin);
                        const {overflows: W} = P(j);
                        (W[R].before <= $[R].before && W[R].after <= $[R].after || W[R].before + W[R].after < ($[R].before + $[R].after) / 2) && (V = j,
                        G = k[R] = !0)
                    }
                }
                ),
                G)
                    continue
            }
            $.x.before && (A += $.x.before,
            y.x += $.x.before),
            $.x.after && (A -= $.x.after,
            y.x -= $.x.after),
            $.y.before && (I += $.y.before,
            y.y += $.y.before),
            $.y.after && (I -= $.y.after,
            y.y -= $.y.after);
            {
                const F = Zl(y, C);
                x.x = C.width - F.x.before - F.x.after,
                x.y = C.height - F.y.before - F.y.after,
                A += F.x.before,
                y.x += F.x.before,
                I += F.y.before,
                y.y += F.y.before
            }
            break
        }
        const _ = ql(V.anchor);
        return Object.assign(t.value, {
            "--v-overlay-anchor-origin": `${V.anchor.side} ${V.anchor.align}`,
            transformOrigin: `${V.origin.side} ${V.origin.align}`,
            top: q(wa(I)),
            left: e.isRtl.value ? void 0 : q(wa(A)),
            right: e.isRtl.value ? q(wa(-A)) : void 0,
            minWidth: q(_ === "y" ? Math.min(o.value, h.width) : o.value),
            maxWidth: q(Ii(Oe(x.x, o.value === 1 / 0 ? 0 : o.value, u.value))),
            maxHeight: q(Ii(Oe(x.y, s.value === 1 / 0 ? 0 : s.value, v.value)))
        }),
        {
            available: x,
            contentBox: y
        }
    }
    return Z(()=>[l.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], ()=>m()),
    Se(()=>{
        const h = m();
        if (!h)
            return;
        const {available: y, contentBox: S} = h;
        S.height > y.y && requestAnimationFrame(()=>{
            m(),
            requestAnimationFrame(()=>{
                m()
            }
            )
        }
        )
    }
    ),
    {
        updateLocation: m
    }
}
function wa(e) {
    return Math.round(e * devicePixelRatio) / devicePixelRatio
}
function Ii(e) {
    return Math.ceil(e * devicePixelRatio) / devicePixelRatio
}
let Ya = !0;
const ea = [];
function Fd(e) {
    !Ya || ea.length ? (ea.push(e),
    Ka()) : (Ya = !1,
    e(),
    Ka())
}
let _i = -1;
function Ka() {
    cancelAnimationFrame(_i),
    _i = requestAnimationFrame(()=>{
        const e = ea.shift();
        e && e(),
        ea.length ? Ka() : Ya = !0
    }
    )
}
const Yn = {
    none: null,
    close: zd,
    block: Nd,
    reposition: Hd
}
  , Rd = T({
    scrollStrategy: {
        type: [String, Function],
        default: "block",
        validator: e=>typeof e == "function" || e in Yn
    }
}, "VOverlay-scroll-strategies");
function Dd(e, n) {
    if (!ke)
        return;
    let t;
    Ge(async()=>{
        t == null || t.stop(),
        n.isActive.value && e.scrollStrategy && (t = il(),
        await Se(),
        t.active && t.run(()=>{
            var a;
            typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (a = Yn[e.scrollStrategy]) == null || a.call(Yn, n, e, t)
        }
        ))
    }
    ),
    je(()=>{
        t == null || t.stop()
    }
    )
}
function zd(e) {
    function n(t) {
        e.isActive.value = !1
    }
    ss(e.activatorEl.value ?? e.contentEl.value, n)
}
function Nd(e, n) {
    var o;
    const t = (o = e.root.value) == null ? void 0 : o.offsetParent
      , a = [...new Set([...Zn(e.activatorEl.value, n.contained ? t : void 0), ...Zn(e.contentEl.value, n.contained ? t : void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked"))
      , l = window.innerWidth - document.documentElement.offsetWidth
      , i = (s=>yl(s) && s)(t || document.documentElement);
    i && e.root.value.classList.add("v-overlay--scroll-blocked"),
    a.forEach((s,u)=>{
        s.style.setProperty("--v-body-scroll-x", q(-s.scrollLeft)),
        s.style.setProperty("--v-body-scroll-y", q(-s.scrollTop)),
        s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", q(l)),
        s.classList.add("v-overlay-scroll-blocked")
    }
    ),
    je(()=>{
        a.forEach((s,u)=>{
            const v = parseFloat(s.style.getPropertyValue("--v-body-scroll-x"))
              , c = parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));
            s.style.removeProperty("--v-body-scroll-x"),
            s.style.removeProperty("--v-body-scroll-y"),
            s.style.removeProperty("--v-scrollbar-offset"),
            s.classList.remove("v-overlay-scroll-blocked"),
            s.scrollLeft = -v,
            s.scrollTop = -c
        }
        ),
        i && e.root.value.classList.remove("v-overlay--scroll-blocked")
    }
    )
}
function Hd(e, n, t) {
    let a = !1
      , l = -1
      , i = -1;
    function o(s) {
        Fd(()=>{
            var c, d;
            const u = performance.now();
            (d = (c = e.updateLocation).value) == null || d.call(c, s),
            a = (performance.now() - u) / (1e3 / 60) > 2
        }
        )
    }
    i = (typeof requestIdleCallback > "u" ? s=>s() : requestIdleCallback)(()=>{
        t.run(()=>{
            ss(e.activatorEl.value ?? e.contentEl.value, s=>{
                a ? (cancelAnimationFrame(l),
                l = requestAnimationFrame(()=>{
                    l = requestAnimationFrame(()=>{
                        o(s)
                    }
                    )
                }
                )) : o(s)
            }
            )
        }
        )
    }
    ),
    je(()=>{
        typeof cancelIdleCallback < "u" && cancelIdleCallback(i),
        cancelAnimationFrame(l)
    }
    )
}
function ss(e, n) {
    const t = [document, ...Zn(e)];
    t.forEach(a=>{
        a.addEventListener("scroll", n, {
            passive: !0
        })
    }
    ),
    je(()=>{
        t.forEach(a=>{
            a.removeEventListener("scroll", n)
        }
        )
    }
    )
}
const Xa = Symbol.for("vuetify:v-menu")
  , rs = T({
    closeDelay: [Number, String],
    openDelay: [Number, String]
}, "delay");
function us(e, n) {
    const t = {}
      , a = l=>()=>{
        if (!ke)
            return Promise.resolve(!0);
        const i = l === "openDelay";
        return t.closeDelay && window.clearTimeout(t.closeDelay),
        delete t.closeDelay,
        t.openDelay && window.clearTimeout(t.openDelay),
        delete t.openDelay,
        new Promise(o=>{
            const s = parseInt(e[l] ?? 0, 10);
            t[l] = window.setTimeout(()=>{
                n == null || n(i),
                o(i)
            }
            , s)
        }
        )
    }
    ;
    return {
        runCloseDelay: a("closeDelay"),
        runOpenDelay: a("openDelay")
    }
}
const jd = T({
    activator: [String, Object],
    activatorProps: {
        type: Object,
        default: ()=>({})
    },
    openOnClick: {
        type: Boolean,
        default: void 0
    },
    openOnHover: Boolean,
    openOnFocus: {
        type: Boolean,
        default: void 0
    },
    closeOnContentClick: Boolean,
    ...rs()
}, "VOverlay-activator");
function Gd(e, n) {
    let {isActive: t, isTop: a} = n;
    const l = U();
    let i = !1
      , o = !1
      , s = !0;
    const u = g(()=>e.openOnFocus || e.openOnFocus == null && e.openOnHover)
      , v = g(()=>e.openOnClick || e.openOnClick == null && !e.openOnHover && !u.value)
      , {runOpenDelay: c, runCloseDelay: d} = us(e, V=>{
        V === (e.openOnHover && i || u.value && o) && !(e.openOnHover && t.value && !a.value) && (t.value !== V && (s = !0),
        t.value = V)
    }
    )
      , f = {
        onClick: V=>{
            V.stopPropagation(),
            l.value = V.currentTarget || V.target,
            t.value = !t.value
        }
        ,
        onMouseenter: V=>{
            var P;
            (P = V.sourceCapabilities) != null && P.firesTouchEvents || (i = !0,
            l.value = V.currentTarget || V.target,
            c())
        }
        ,
        onMouseleave: V=>{
            i = !1,
            d()
        }
        ,
        onFocus: V=>{
            tn(V.target, ":focus-visible") !== !1 && (o = !0,
            V.stopPropagation(),
            l.value = V.currentTarget || V.target,
            c())
        }
        ,
        onBlur: V=>{
            o = !1,
            V.stopPropagation(),
            d()
        }
    }
      , m = g(()=>{
        const V = {};
        return v.value && (V.onClick = f.onClick),
        e.openOnHover && (V.onMouseenter = f.onMouseenter,
        V.onMouseleave = f.onMouseleave),
        u.value && (V.onFocus = f.onFocus,
        V.onBlur = f.onBlur),
        V
    }
    )
      , h = g(()=>{
        const V = {};
        if (e.openOnHover && (V.onMouseenter = ()=>{
            i = !0,
            c()
        }
        ,
        V.onMouseleave = ()=>{
            i = !1,
            d()
        }
        ),
        u.value && (V.onFocusin = ()=>{
            o = !0,
            c()
        }
        ,
        V.onFocusout = ()=>{
            o = !1,
            d()
        }
        ),
        e.closeOnContentClick) {
            const P = ye(Xa, null);
            V.onClick = ()=>{
                t.value = !1,
                P == null || P.closeParents()
            }
        }
        return V
    }
    )
      , y = g(()=>{
        const V = {};
        return e.openOnHover && (V.onMouseenter = ()=>{
            s && (i = !0,
            s = !1,
            c())
        }
        ,
        V.onMouseleave = ()=>{
            i = !1,
            d()
        }
        ),
        V
    }
    );
    Z(a, V=>{
        V && (e.openOnHover && !i && (!u.value || !o) || u.value && !o && (!e.openOnHover || !i)) && (t.value = !1)
    }
    );
    const S = U();
    Ge(()=>{
        S.value && Se(()=>{
            l.value = Ba(S.value)
        }
        )
    }
    );
    const b = pe("useActivator");
    let C;
    return Z(()=>!!e.activator, V=>{
        V && ke ? (C = il(),
        C.run(()=>{
            Wd(e, b, {
                activatorEl: l,
                activatorEvents: m
            })
        }
        )) : C && C.stop()
    }
    , {
        flush: "post",
        immediate: !0
    }),
    je(()=>{
        C == null || C.stop()
    }
    ),
    {
        activatorEl: l,
        activatorRef: S,
        activatorEvents: m,
        contentEvents: h,
        scrimEvents: y
    }
}
function Wd(e, n, t) {
    let {activatorEl: a, activatorEvents: l} = t;
    Z(()=>e.activator, (u,v)=>{
        if (v && u !== v) {
            const c = s(v);
            c && o(c)
        }
        u && Se(()=>i())
    }
    , {
        immediate: !0
    }),
    Z(()=>e.activatorProps, ()=>{
        i()
    }
    ),
    je(()=>{
        o()
    }
    );
    function i() {
        let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s()
          , v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
        u && Dr(u, K(l.value, v))
    }
    function o() {
        let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s()
          , v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
        u && zr(u, K(l.value, v))
    }
    function s() {
        var c, d;
        let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator, v;
        if (u)
            if (u === "parent") {
                let f = (d = (c = n == null ? void 0 : n.proxy) == null ? void 0 : c.$el) == null ? void 0 : d.parentNode;
                for (; f.hasAttribute("data-no-activator"); )
                    f = f.parentNode;
                v = f
            } else
                typeof u == "string" ? v = document.querySelector(u) : "$el"in u ? v = u.$el : v = u;
        return a.value = (v == null ? void 0 : v.nodeType) === Node.ELEMENT_NODE ? v : null,
        a.value
    }
}
function cs() {
    if (!ke)
        return Y(!1);
    const {ssr: e} = jt();
    if (e) {
        const n = Y(!1);
        return Ne(()=>{
            n.value = !0
        }
        ),
        n
    } else
        return Y(!0)
}
const va = T({
    eager: Boolean
}, "lazy");
function Ml(e, n) {
    const t = Y(!1)
      , a = g(()=>t.value || e.eager || n.value);
    Z(n, ()=>t.value = !0);
    function l() {
        e.eager || (t.value = !1)
    }
    return {
        isBooted: t,
        hasContent: a,
        onAfterLeave: l
    }
}
function hn() {
    const n = pe("useScopeId").vnode.scopeId;
    return {
        scopeId: n ? {
            [n]: ""
        } : void 0
    }
}
const Ai = Symbol.for("vuetify:stack")
  , Sn = it([]);
function Ud(e, n, t) {
    const a = pe("useStack")
      , l = !t
      , i = ye(Ai, void 0)
      , o = it({
        activeChildren: new Set
    });
    Te(Ai, o);
    const s = Y(+n.value);
    ht(e, ()=>{
        var d;
        const c = (d = Sn.at(-1)) == null ? void 0 : d[1];
        s.value = c ? c + 10 : +n.value,
        l && Sn.push([a.uid, s.value]),
        i == null || i.activeChildren.add(a.uid),
        je(()=>{
            if (l) {
                const f = _t(Sn).findIndex(m=>m[0] === a.uid);
                Sn.splice(f, 1)
            }
            i == null || i.activeChildren.delete(a.uid)
        }
        )
    }
    );
    const u = Y(!0);
    l && Ge(()=>{
        var d;
        const c = ((d = Sn.at(-1)) == null ? void 0 : d[0]) === a.uid;
        setTimeout(()=>u.value = c)
    }
    );
    const v = g(()=>!o.activeChildren.size);
    return {
        globalTop: sl(u),
        localTop: v,
        stackStyles: g(()=>({
            zIndex: s.value
        }))
    }
}
function Yd(e) {
    return {
        teleportTarget: g(()=>{
            const t = e.value;
            if (t === !0 || !ke)
                return;
            const a = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
            if (a == null)
                return;
            let l = a.querySelector(":scope > .v-overlay-container");
            return l || (l = document.createElement("div"),
            l.className = "v-overlay-container",
            a.appendChild(l)),
            l
        }
        )
    }
}
function Kd() {
    return !0
}
function ds(e, n, t) {
    if (!e || vs(e, t) === !1)
        return !1;
    const a = lo(n);
    if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target)
        return !1;
    const l = (typeof t.value == "object" && t.value.include || (()=>[]))();
    return l.push(n),
    !l.some(i=>i == null ? void 0 : i.contains(e.target))
}
function vs(e, n) {
    return (typeof n.value == "object" && n.value.closeConditional || Kd)(e)
}
function Xd(e, n, t) {
    const a = typeof t.value == "function" ? t.value : t.value.handler;
    n._clickOutside.lastMousedownWasOutside && ds(e, n, t) && setTimeout(()=>{
        vs(e, t) && a && a(e)
    }
    , 0)
}
function Bi(e, n) {
    const t = lo(e);
    n(document),
    typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t)
}
const fs = {
    mounted(e, n) {
        const t = l=>Xd(l, e, n)
          , a = l=>{
            e._clickOutside.lastMousedownWasOutside = ds(l, e, n)
        }
        ;
        Bi(e, l=>{
            l.addEventListener("click", t, !0),
            l.addEventListener("mousedown", a, !0)
        }
        ),
        e._clickOutside || (e._clickOutside = {
            lastMousedownWasOutside: !1
        }),
        e._clickOutside[n.instance.$.uid] = {
            onClick: t,
            onMousedown: a
        }
    },
    unmounted(e, n) {
        e._clickOutside && (Bi(e, t=>{
            var i;
            if (!t || !((i = e._clickOutside) != null && i[n.instance.$.uid]))
                return;
            const {onClick: a, onMousedown: l} = e._clickOutside[n.instance.$.uid];
            t.removeEventListener("click", a, !0),
            t.removeEventListener("mousedown", l, !0)
        }
        ),
        delete e._clickOutside[n.instance.$.uid])
    }
};
function qd(e) {
    const {modelValue: n, color: t, ...a} = e;
    return r(xt, {
        name: "fade-transition",
        appear: !0
    }, {
        default: ()=>[e.modelValue && r("div", K({
            class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
            style: e.color.backgroundColorStyles.value
        }, a), null)]
    })
}
const Fn = T({
    absolute: Boolean,
    attach: [Boolean, String, Object],
    closeOnBack: {
        type: Boolean,
        default: !0
    },
    contained: Boolean,
    contentClass: null,
    contentProps: null,
    disabled: Boolean,
    noClickAnimation: Boolean,
    modelValue: Boolean,
    persistent: Boolean,
    scrim: {
        type: [Boolean, String],
        default: !0
    },
    zIndex: {
        type: [Number, String],
        default: 2e3
    },
    ...jd(),
    ...X(),
    ...tt(),
    ...va(),
    ...$d(),
    ...Rd(),
    ...ce(),
    ...kt()
}, "VOverlay")
  , St = M()({
    name: "VOverlay",
    directives: {
        ClickOutside: fs
    },
    inheritAttrs: !1,
    props: {
        _disableGlobalStack: Boolean,
        ...Fn()
    },
    emits: {
        "click:outside": e=>!0,
        "update:modelValue": e=>!0,
        afterLeave: ()=>!0
    },
    setup(e, n) {
        let {slots: t, attrs: a, emit: l} = n;
        const i = ae(e, "modelValue")
          , o = g({
            get: ()=>i.value,
            set: j=>{
                j && e.disabled || (i.value = j)
            }
        })
          , {teleportTarget: s} = Yd(g(()=>e.attach || e.contained))
          , {themeClasses: u} = me(e)
          , {rtlClasses: v, isRtl: c} = $e()
          , {hasContent: d, onAfterLeave: f} = Ml(e, o)
          , m = Pe(g(()=>typeof e.scrim == "string" ? e.scrim : null))
          , {globalTop: h, localTop: y, stackStyles: S} = Ud(o, O(e, "zIndex"), e._disableGlobalStack)
          , {activatorEl: b, activatorRef: C, activatorEvents: V, contentEvents: P, scrimEvents: A} = Gd(e, {
            isActive: o,
            isTop: y
        })
          , {dimensionStyles: I} = nt(e)
          , x = cs()
          , {scopeId: k} = hn();
        Z(()=>e.disabled, j=>{
            j && (o.value = !1)
        }
        );
        const w = U()
          , _ = U()
          , {contentStyles: B, updateLocation: p} = Ed(e, {
            isRtl: c,
            contentEl: _,
            activatorEl: b,
            isActive: o
        });
        Dd(e, {
            root: w,
            contentEl: _,
            activatorEl: b,
            isActive: o,
            updateLocation: p
        });
        function $(j) {
            l("click:outside", j),
            e.persistent ? R() : o.value = !1
        }
        function F() {
            return o.value && h.value
        }
        ke && Z(o, j=>{
            j ? window.addEventListener("keydown", E) : window.removeEventListener("keydown", E)
        }
        , {
            immediate: !0
        });
        function E(j) {
            var L, W;
            j.key === "Escape" && h.value && (e.persistent ? R() : (o.value = !1,
            (L = _.value) != null && L.contains(document.activeElement) && ((W = b.value) == null || W.focus())))
        }
        const H = _o();
        ht(()=>e.closeOnBack, ()=>{
            Oc(H, j=>{
                h.value && o.value ? (j(!1),
                e.persistent ? R() : o.value = !1) : j()
            }
            )
        }
        );
        const G = U();
        Z(()=>o.value && (e.absolute || e.contained) && s.value == null, j=>{
            if (j) {
                const L = hl(w.value);
                L && L !== document.scrollingElement && (G.value = L.scrollTop)
            }
        }
        );
        function R() {
            e.noClickAnimation || _.value && Ot(_.value, [{
                transformOrigin: "center"
            }, {
                transform: "scale(1.03)"
            }, {
                transformOrigin: "center"
            }], {
                duration: 150,
                easing: xn
            })
        }
        return D(()=>{
            var j;
            return r(se, null, [(j = t.activator) == null ? void 0 : j.call(t, {
                isActive: o.value,
                props: K({
                    ref: C
                }, V.value, e.activatorProps)
            }), x.value && d.value && r(ur, {
                disabled: !s.value,
                to: s.value
            }, {
                default: ()=>[r("div", K({
                    class: ["v-overlay", {
                        "v-overlay--absolute": e.absolute || e.contained,
                        "v-overlay--active": o.value,
                        "v-overlay--contained": e.contained
                    }, u.value, v.value, e.class],
                    style: [S.value, {
                        top: q(G.value)
                    }, e.style],
                    ref: w
                }, k, a), [r(qd, K({
                    color: m,
                    modelValue: o.value && !!e.scrim
                }, A.value), null), r(ot, {
                    appear: !0,
                    persisted: !0,
                    transition: e.transition,
                    target: b.value,
                    onAfterLeave: ()=>{
                        f(),
                        l("afterLeave")
                    }
                }, {
                    default: ()=>{
                        var L;
                        return [Ve(r("div", K({
                            ref: _,
                            class: ["v-overlay__content", e.contentClass],
                            style: [I.value, B.value]
                        }, P.value, e.contentProps), [(L = t.default) == null ? void 0 : L.call(t, {
                            isActive: o
                        })]), [[dt, o.value], [Ye("click-outside"), {
                            handler: $,
                            closeConditional: F,
                            include: ()=>[b.value]
                        }]])]
                    }
                })])]
            })])
        }
        ),
        {
            activatorEl: b,
            animateClick: R,
            contentEl: _,
            globalTop: h,
            localTop: y,
            updateLocation: p
        }
    }
})
  , xa = Symbol("Forwarded refs");
function Pa(e, n) {
    let t = e;
    for (; t; ) {
        const a = Reflect.getOwnPropertyDescriptor(t, n);
        if (a)
            return a;
        t = Object.getPrototypeOf(t)
    }
}
function rt(e) {
    for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
        t[a - 1] = arguments[a];
    return e[xa] = t,
    new Proxy(e,{
        get(l, i) {
            if (Reflect.has(l, i))
                return Reflect.get(l, i);
            if (!(typeof i == "symbol" || i.startsWith("__"))) {
                for (const o of t)
                    if (o.value && Reflect.has(o.value, i)) {
                        const s = Reflect.get(o.value, i);
                        return typeof s == "function" ? s.bind(o.value) : s
                    }
            }
        },
        has(l, i) {
            if (Reflect.has(l, i))
                return !0;
            if (typeof i == "symbol" || i.startsWith("__"))
                return !1;
            for (const o of t)
                if (o.value && Reflect.has(o.value, i))
                    return !0;
            return !1
        },
        set(l, i, o) {
            if (Reflect.has(l, i))
                return Reflect.set(l, i, o);
            if (typeof i == "symbol" || i.startsWith("__"))
                return !1;
            for (const s of t)
                if (s.value && Reflect.has(s.value, i))
                    return Reflect.set(s.value, i, o);
            return !1
        },
        getOwnPropertyDescriptor(l, i) {
            var s;
            const o = Reflect.getOwnPropertyDescriptor(l, i);
            if (o)
                return o;
            if (!(typeof i == "symbol" || i.startsWith("__"))) {
                for (const u of t) {
                    if (!u.value)
                        continue;
                    const v = Pa(u.value, i) ?? ("_"in u.value ? Pa((s = u.value._) == null ? void 0 : s.setupState, i) : void 0);
                    if (v)
                        return v
                }
                for (const u of t) {
                    const v = u.value && u.value[xa];
                    if (!v)
                        continue;
                    const c = v.slice();
                    for (; c.length; ) {
                        const d = c.shift()
                          , f = Pa(d.value, i);
                        if (f)
                            return f;
                        const m = d.value && d.value[xa];
                        m && c.push(...m)
                    }
                }
            }
        }
    })
}
const Zd = T({
    id: String,
    ...vt(Fn({
        closeDelay: 250,
        closeOnContentClick: !0,
        locationStrategy: "connected",
        openDelay: 300,
        scrim: !1,
        scrollStrategy: "reposition",
        transition: {
            component: ia
        }
    }), ["absolute"])
}, "VMenu")
  , fa = M()({
    name: "VMenu",
    props: Zd(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = ae(e, "modelValue")
          , {scopeId: l} = hn()
          , i = Re()
          , o = g(()=>e.id || `v-menu-${i}`)
          , s = U()
          , u = ye(Xa, null)
          , v = Y(0);
        Te(Xa, {
            register() {
                ++v.value
            },
            unregister() {
                --v.value
            },
            closeParents() {
                setTimeout(()=>{
                    v.value || (a.value = !1,
                    u == null || u.closeParents())
                }
                , 40)
            }
        });
        function c(y) {
            var C, V, P;
            const S = y.relatedTarget
              , b = y.target;
            S !== b && ((C = s.value) != null && C.contentEl) && ((V = s.value) != null && V.globalTop) && ![document, s.value.contentEl].includes(b) && !s.value.contentEl.contains(b) && ((P = wn(s.value.contentEl)[0]) == null || P.focus())
        }
        Z(a, y=>{
            y ? (u == null || u.register(),
            document.addEventListener("focusin", c, {
                once: !0
            })) : (u == null || u.unregister(),
            document.removeEventListener("focusin", c))
        }
        );
        function d() {
            u == null || u.closeParents()
        }
        function f(y) {
            var S, b, C;
            e.disabled || y.key === "Tab" && (Ui(wn((S = s.value) == null ? void 0 : S.contentEl, !1), y.shiftKey ? "prev" : "next", P=>P.tabIndex >= 0) || (a.value = !1,
            (C = (b = s.value) == null ? void 0 : b.activatorEl) == null || C.focus()))
        }
        function m(y) {
            var b;
            if (e.disabled)
                return;
            const S = (b = s.value) == null ? void 0 : b.contentEl;
            S && a.value ? y.key === "ArrowDown" ? (y.preventDefault(),
            Xn(S, "next")) : y.key === "ArrowUp" && (y.preventDefault(),
            Xn(S, "prev")) : ["ArrowDown", "ArrowUp"].includes(y.key) && (a.value = !0,
            y.preventDefault(),
            setTimeout(()=>setTimeout(()=>m(y))))
        }
        const h = g(()=>K({
            "aria-haspopup": "menu",
            "aria-expanded": String(a.value),
            "aria-owns": o.value,
            onKeydown: m
        }, e.activatorProps));
        return D(()=>{
            const [y] = St.filterProps(e);
            return r(St, K({
                ref: s,
                class: ["v-menu", e.class],
                style: e.style
            }, y, {
                modelValue: a.value,
                "onUpdate:modelValue": S=>a.value = S,
                absolute: !0,
                activatorProps: h.value,
                "onClick:outside": d,
                onKeydown: f
            }, l), {
                activator: t.activator,
                default: function() {
                    for (var S = arguments.length, b = new Array(S), C = 0; C < S; C++)
                        b[C] = arguments[C];
                    return r(ge, {
                        root: "VMenu"
                    }, {
                        default: ()=>{
                            var V;
                            return [(V = t.default) == null ? void 0 : V.call(t, ...b)]
                        }
                    })
                }
            })
        }
        ),
        rt({
            id: o,
            ΨopenChildren: v
        }, s)
    }
});
const Jd = T({
    active: Boolean,
    max: [Number, String],
    value: {
        type: [Number, String],
        default: 0
    },
    ...X(),
    ...kt({
        transition: {
            component: Vl
        }
    })
}, "VCounter")
  , ma = M()({
    name: "VCounter",
    functional: !0,
    props: Jd(),
    setup(e, n) {
        let {slots: t} = n;
        const a = g(()=>e.max ? `${e.value} / ${e.max}` : String(e.value));
        return D(()=>r(ot, {
            transition: e.transition
        }, {
            default: ()=>[Ve(r("div", {
                class: ["v-counter", e.class],
                style: e.style
            }, [t.default ? t.default({
                counter: a.value,
                max: e.max,
                value: e.value
            }) : a.value]), [[dt, e.active]])]
        })),
        {}
    }
});
const Qd = T({
    floating: Boolean,
    ...X()
}, "VFieldLabel")
  , Cn = M()({
    name: "VFieldLabel",
    props: Qd(),
    setup(e, n) {
        let {slots: t} = n;
        return D(()=>r(gn, {
            class: ["v-field-label", {
                "v-field-label--floating": e.floating
            }, e.class],
            style: e.style,
            "aria-hidden": e.floating || void 0
        }, t)),
        {}
    }
})
  , ev = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"]
  , ga = T({
    appendInnerIcon: ne,
    bgColor: String,
    clearable: Boolean,
    clearIcon: {
        type: ne,
        default: "$clear"
    },
    active: Boolean,
    centerAffix: {
        type: Boolean,
        default: void 0
    },
    color: String,
    baseColor: String,
    dirty: Boolean,
    disabled: {
        type: Boolean,
        default: null
    },
    error: Boolean,
    flat: Boolean,
    label: String,
    persistentClear: Boolean,
    prependInnerIcon: ne,
    reverse: Boolean,
    singleLine: Boolean,
    variant: {
        type: String,
        default: "filled",
        validator: e=>ev.includes(e)
    },
    "onClick:clear": ut(),
    "onClick:appendInner": ut(),
    "onClick:prependInner": ut(),
    ...X(),
    ...Bl(),
    ...Ce(),
    ...ce()
}, "VField")
  , Rn = M()({
    name: "VField",
    inheritAttrs: !1,
    props: {
        id: String,
        ...ua(),
        ...ga()
    },
    emits: {
        "update:focused": e=>!0,
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {attrs: t, emit: a, slots: l} = n;
        const {themeClasses: i} = me(e)
          , {loaderClasses: o} = sa(e)
          , {focusClasses: s, isFocused: u, focus: v, blur: c} = pt(e)
          , {InputIcon: d} = zo(e)
          , {roundedClasses: f} = we(e)
          , {rtlClasses: m} = $e()
          , h = g(()=>e.dirty || e.active)
          , y = g(()=>!e.singleLine && !!(e.label || l.label))
          , S = Re()
          , b = g(()=>e.id || `input-${S}`)
          , C = g(()=>`${b.value}-messages`)
          , V = U()
          , P = U()
          , A = U()
          , I = g(()=>["plain", "underlined"].includes(e.variant))
          , {backgroundColorClasses: x, backgroundColorStyles: k} = Pe(O(e, "bgColor"))
          , {textColorClasses: w, textColorStyles: _} = Fe(g(()=>e.error || e.disabled ? void 0 : h.value && u.value ? e.color : e.baseColor));
        Z(h, $=>{
            if (y.value) {
                const F = V.value.$el
                  , E = P.value.$el;
                requestAnimationFrame(()=>{
                    const H = fl(F)
                      , G = E.getBoundingClientRect()
                      , R = G.x - H.x
                      , j = G.y - H.y - (H.height / 2 - G.height / 2)
                      , L = G.width / .75
                      , W = Math.abs(L - H.width) > 1 ? {
                        maxWidth: q(L)
                    } : void 0
                      , Q = getComputedStyle(F)
                      , re = getComputedStyle(E)
                      , oe = parseFloat(Q.transitionDuration) * 1e3 || 150
                      , de = parseFloat(re.getPropertyValue("--v-field-label-scale"))
                      , N = re.getPropertyValue("color");
                    F.style.visibility = "visible",
                    E.style.visibility = "hidden",
                    Ot(F, {
                        transform: `translate(${R}px, ${j}px) scale(${de})`,
                        color: N,
                        ...W
                    }, {
                        duration: oe,
                        easing: xn,
                        direction: $ ? "normal" : "reverse"
                    }).finished.then(()=>{
                        F.style.removeProperty("visibility"),
                        E.style.removeProperty("visibility")
                    }
                    )
                }
                )
            }
        }
        , {
            flush: "post"
        });
        const B = g(()=>({
            isActive: h,
            isFocused: u,
            controlRef: A,
            blur: c,
            focus: v
        }));
        function p($) {
            $.target !== document.activeElement && $.preventDefault()
        }
        return D(()=>{
            var R, j, L;
            const $ = e.variant === "outlined"
              , F = l["prepend-inner"] || e.prependInnerIcon
              , E = !!(e.clearable || l.clear)
              , H = !!(l["append-inner"] || e.appendInnerIcon || E)
              , G = l.label ? l.label({
                ...B.value,
                label: e.label,
                props: {
                    for: b.value
                }
            }) : e.label;
            return r("div", K({
                class: ["v-field", {
                    "v-field--active": h.value,
                    "v-field--appended": H,
                    "v-field--center-affix": e.centerAffix ?? !I.value,
                    "v-field--disabled": e.disabled,
                    "v-field--dirty": e.dirty,
                    "v-field--error": e.error,
                    "v-field--flat": e.flat,
                    "v-field--has-background": !!e.bgColor,
                    "v-field--persistent-clear": e.persistentClear,
                    "v-field--prepended": F,
                    "v-field--reverse": e.reverse,
                    "v-field--single-line": e.singleLine,
                    "v-field--no-label": !G,
                    [`v-field--variant-${e.variant}`]: !0
                }, i.value, x.value, s.value, o.value, f.value, m.value, e.class],
                style: [k.value, _.value, e.style],
                onClick: p
            }, t), [r("div", {
                class: "v-field__overlay"
            }, null), r(Tl, {
                name: "v-field",
                active: !!e.loading,
                color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
            }, {
                default: l.loader
            }), F && r("div", {
                key: "prepend",
                class: "v-field__prepend-inner"
            }, [e.prependInnerIcon && r(d, {
                key: "prepend-icon",
                name: "prependInner"
            }, null), (R = l["prepend-inner"]) == null ? void 0 : R.call(l, B.value)]), r("div", {
                class: "v-field__field",
                "data-no-activator": ""
            }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && r(Cn, {
                key: "floating-label",
                ref: P,
                class: [w.value],
                floating: !0,
                for: b.value
            }, {
                default: ()=>[G]
            }), r(Cn, {
                ref: V,
                for: b.value
            }, {
                default: ()=>[G]
            }), (j = l.default) == null ? void 0 : j.call(l, {
                ...B.value,
                props: {
                    id: b.value,
                    class: "v-field__input",
                    "aria-describedby": C.value
                },
                focus: v,
                blur: c
            })]), E && r(wl, {
                key: "clear"
            }, {
                default: ()=>[Ve(r("div", {
                    class: "v-field__clearable",
                    onMousedown: W=>{
                        W.preventDefault(),
                        W.stopPropagation()
                    }
                }, [l.clear ? l.clear() : r(d, {
                    name: "clear"
                }, null)]), [[dt, e.dirty]])]
            }), H && r("div", {
                key: "append",
                class: "v-field__append-inner"
            }, [(L = l["append-inner"]) == null ? void 0 : L.call(l, B.value), e.appendInnerIcon && r(d, {
                key: "append-icon",
                name: "appendInner"
            }, null)]), r("div", {
                class: ["v-field__outline", w.value]
            }, [$ && r(se, null, [r("div", {
                class: "v-field__outline__start"
            }, null), y.value && r("div", {
                class: "v-field__outline__notch"
            }, [r(Cn, {
                ref: P,
                floating: !0,
                for: b.value
            }, {
                default: ()=>[G]
            })]), r("div", {
                class: "v-field__outline__end"
            }, null)]), I.value && y.value && r(Cn, {
                ref: P,
                floating: !0,
                for: b.value
            }, {
                default: ()=>[G]
            })])])
        }
        ),
        {
            controlRef: A
        }
    }
});
function Ol(e) {
    const n = Object.keys(Rn.props).filter(t=>!dl(t) && t !== "class" && t !== "style");
    return on(e, n)
}
const tv = ["color", "file", "time", "date", "datetime-local", "week", "month"]
  , ha = T({
    autofocus: Boolean,
    counter: [Boolean, Number, String],
    counterValue: Function,
    prefix: String,
    placeholder: String,
    persistentPlaceholder: Boolean,
    persistentCounter: Boolean,
    suffix: String,
    type: {
        type: String,
        default: "text"
    },
    modelModifiers: Object,
    ...wt(),
    ...ga()
}, "VTextField")
  , zt = M()({
    name: "VTextField",
    directives: {
        Intersect: En
    },
    inheritAttrs: !1,
    props: ha(),
    emits: {
        "click:control": e=>!0,
        "mousedown:control": e=>!0,
        "update:focused": e=>!0,
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {attrs: t, emit: a, slots: l} = n;
        const i = ae(e, "modelValue")
          , {isFocused: o, focus: s, blur: u} = pt(e)
          , v = g(()=>typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value ?? "").toString().length)
          , c = g(()=>{
            if (t.maxlength)
                return t.maxlength;
            if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
                return e.counter
        }
        )
          , d = g(()=>["plain", "underlined"].includes(e.variant));
        function f(I, x) {
            var k, w;
            !e.autofocus || !I || (w = (k = x[0].target) == null ? void 0 : k.focus) == null || w.call(k)
        }
        const m = U()
          , h = U()
          , y = U()
          , S = g(()=>tv.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
        function b() {
            var I;
            y.value !== document.activeElement && ((I = y.value) == null || I.focus()),
            o.value || s()
        }
        function C(I) {
            a("mousedown:control", I),
            I.target !== y.value && (b(),
            I.preventDefault())
        }
        function V(I) {
            b(),
            a("click:control", I)
        }
        function P(I) {
            I.stopPropagation(),
            b(),
            Se(()=>{
                i.value = null,
                vl(e["onClick:clear"], I)
            }
            )
        }
        function A(I) {
            var k;
            const x = I.target;
            if (i.value = x.value,
            (k = e.modelModifiers) != null && k.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
                const w = [x.selectionStart, x.selectionEnd];
                Se(()=>{
                    x.selectionStart = w[0],
                    x.selectionEnd = w[1]
                }
                )
            }
        }
        return D(()=>{
            const I = !!(l.counter || e.counter || e.counterValue)
              , x = !!(I || l.details)
              , [k,w] = Ht(t)
              , [{modelValue: _, ...B}] = Ee.filterProps(e)
              , [p] = Ol(e);
            return r(Ee, K({
                ref: m,
                modelValue: i.value,
                "onUpdate:modelValue": $=>i.value = $,
                class: ["v-text-field", {
                    "v-text-field--prefixed": e.prefix,
                    "v-text-field--suffixed": e.suffix,
                    "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant)
                }, e.class],
                style: e.style
            }, k, B, {
                centerAffix: !d.value,
                focused: o.value
            }), {
                ...l,
                default: $=>{
                    let {id: F, isDisabled: E, isDirty: H, isReadonly: G, isValid: R} = $;
                    return r(Rn, K({
                        ref: h,
                        onMousedown: C,
                        onClick: V,
                        "onClick:clear": P,
                        "onClick:prependInner": e["onClick:prependInner"],
                        "onClick:appendInner": e["onClick:appendInner"],
                        role: "textbox"
                    }, p, {
                        id: F.value,
                        active: S.value || H.value,
                        dirty: H.value || e.dirty,
                        disabled: E.value,
                        focused: o.value,
                        error: R.value === !1
                    }), {
                        ...l,
                        default: j=>{
                            let {props: {class: L, ...W}} = j;
                            const Q = Ve(r("input", K({
                                ref: y,
                                value: i.value,
                                onInput: A,
                                autofocus: e.autofocus,
                                readonly: G.value,
                                disabled: E.value,
                                name: e.name,
                                placeholder: e.placeholder,
                                size: 1,
                                type: e.type,
                                onFocus: b,
                                onBlur: u
                            }, W, w), null), [[Ye("intersect"), {
                                handler: f
                            }, null, {
                                once: !0
                            }]]);
                            return r(se, null, [e.prefix && r("span", {
                                class: "v-text-field__prefix"
                            }, [r("span", {
                                class: "v-text-field__prefix__text"
                            }, [e.prefix])]), r("div", {
                                class: L,
                                "data-no-activator": ""
                            }, [l.default ? r(se, null, [l.default(), Q]) : cr(Q)]), e.suffix && r("span", {
                                class: "v-text-field__suffix"
                            }, [r("span", {
                                class: "v-text-field__suffix__text"
                            }, [e.suffix])])])
                        }
                    })
                }
                ,
                details: x ? $=>{
                    var F;
                    return r(se, null, [(F = l.details) == null ? void 0 : F.call(l, $), I && r(se, null, [r("span", null, null), r(ma, {
                        active: e.persistentCounter || o.value,
                        value: v.value,
                        max: c.value
                    }, l.counter)])])
                }
                : void 0
            })
        }
        ),
        rt({}, m, h, y)
    }
});
const nv = T({
    renderless: Boolean,
    ...X()
}, "VVirtualScrollItem")
  , av = M()({
    name: "VVirtualScrollItem",
    inheritAttrs: !1,
    props: nv(),
    emits: {
        "update:height": e=>!0
    },
    setup(e, n) {
        let {attrs: t, emit: a, slots: l} = n;
        const {resizeRef: i, contentRect: o} = ct(void 0, "border");
        Z(()=>{
            var s;
            return (s = o.value) == null ? void 0 : s.height
        }
        , s=>{
            s != null && a("update:height", s)
        }
        ),
        D(()=>{
            var s, u;
            return e.renderless ? r(se, null, [(s = l.default) == null ? void 0 : s.call(l, {
                itemRef: i
            })]) : r("div", K({
                ref: i,
                class: ["v-virtual-scroll__item", e.class],
                style: e.style
            }, t), [(u = l.default) == null ? void 0 : u.call(l)])
        }
        )
    }
})
  , Ti = -1
  , pi = 1
  , lv = T({
    itemHeight: {
        type: [Number, String],
        default: 48
    }
}, "virtual");
function iv(e, n, t) {
    const a = Y(0)
      , l = Y(e.itemHeight)
      , i = g({
        get: ()=>parseInt(l.value ?? 0, 10),
        set(x) {
            l.value = x
        }
    })
      , o = U()
      , {resizeRef: s, contentRect: u} = ct();
    Ge(()=>{
        s.value = o.value
    }
    );
    const v = jt()
      , c = new Map;
    let d = Array.from({
        length: n.value.length
    });
    const f = g(()=>{
        const x = (!u.value || o.value === document.documentElement ? v.height.value : u.value.height) - ((t == null ? void 0 : t.value) ?? 0);
        return Math.ceil(x / i.value * 1.7 + 1)
    }
    );
    function m(x, k) {
        i.value = Math.max(i.value, k),
        d[x] = k,
        c.set(n.value[x], k)
    }
    function h(x) {
        return d.slice(0, x).reduce((k,w)=>k + (w || i.value), 0)
    }
    function y(x) {
        const k = n.value.length;
        let w = 0
          , _ = 0;
        for (; _ < x && w < k; )
            _ += d[w++] || i.value;
        return w - 1
    }
    let S = 0;
    function b() {
        if (!o.value || !u.value)
            return;
        const x = u.value.height - 56
          , k = o.value.scrollTop
          , w = k < S ? Ti : pi
          , _ = y(k + x / 2)
          , B = Math.round(f.value / 3)
          , p = _ - B
          , $ = a.value + B * 2 - 1;
        w === Ti && _ <= $ ? a.value = Oe(p, 0, n.value.length) : w === pi && _ >= $ && (a.value = Oe(p, 0, n.value.length - f.value)),
        S = k
    }
    function C(x) {
        if (!o.value)
            return;
        const k = h(x);
        o.value.scrollTop = k
    }
    const V = g(()=>Math.min(n.value.length, a.value + f.value))
      , P = g(()=>n.value.slice(a.value, V.value).map((x,k)=>({
        raw: x,
        index: k + a.value
    })))
      , A = g(()=>h(a.value))
      , I = g(()=>h(n.value.length) - h(V.value));
    return Z(()=>n.value.length, ()=>{
        d = mt(n.value.length).map(()=>i.value),
        c.forEach((x,k)=>{
            const w = n.value.indexOf(k);
            w === -1 ? c.delete(k) : d[w] = x
        }
        )
    }
    ),
    {
        containerRef: o,
        computedItems: P,
        itemHeight: i,
        paddingTop: A,
        paddingBottom: I,
        scrollToIndex: C,
        handleScroll: b,
        handleItemResize: m
    }
}
const ov = T({
    items: {
        type: Array,
        default: ()=>[]
    },
    renderless: Boolean,
    ...lv(),
    ...X(),
    ...tt()
}, "VVirtualScroll")
  , ya = M()({
    name: "VVirtualScroll",
    props: ov(),
    setup(e, n) {
        let {slots: t} = n;
        const a = pe("VVirtualScroll")
          , {dimensionStyles: l} = nt(e)
          , {containerRef: i, handleScroll: o, handleItemResize: s, scrollToIndex: u, paddingTop: v, paddingBottom: c, computedItems: d} = iv(e, O(e, "items"));
        return ht(()=>e.renderless, ()=>{
            Ne(()=>{
                var f;
                i.value = hl(a.vnode.el, !0),
                (f = i.value) == null || f.addEventListener("scroll", o)
            }
            ),
            je(()=>{
                var f;
                (f = i.value) == null || f.removeEventListener("scroll", o)
            }
            )
        }
        ),
        D(()=>{
            const f = d.value.map(m=>r(av, {
                key: m.index,
                renderless: e.renderless,
                "onUpdate:height": h=>s(m.index, h)
            }, {
                default: h=>{
                    var y;
                    return (y = t.default) == null ? void 0 : y.call(t, {
                        item: m.raw,
                        index: m.index,
                        ...h
                    })
                }
            }));
            return e.renderless ? r(se, null, [r("div", {
                class: "v-virtual-scroll__spacer",
                style: {
                    paddingTop: q(v.value)
                }
            }, null), f, r("div", {
                class: "v-virtual-scroll__spacer",
                style: {
                    paddingBottom: q(c.value)
                }
            }, null)]) : r("div", {
                ref: i,
                class: ["v-virtual-scroll", e.class],
                onScroll: o,
                style: [l.value, e.style]
            }, [r("div", {
                class: "v-virtual-scroll__container",
                style: {
                    paddingTop: q(v.value),
                    paddingBottom: q(c.value)
                }
            }, [f])])
        }
        ),
        {
            scrollToIndex: u
        }
    }
});
function Fl(e, n) {
    const t = Y(!1);
    let a;
    function l(s) {
        cancelAnimationFrame(a),
        t.value = !0,
        a = requestAnimationFrame(()=>{
            a = requestAnimationFrame(()=>{
                t.value = !1
            }
            )
        }
        )
    }
    async function i() {
        await new Promise(s=>requestAnimationFrame(s)),
        await new Promise(s=>requestAnimationFrame(s)),
        await new Promise(s=>requestAnimationFrame(s)),
        await new Promise(s=>{
            if (t.value) {
                const u = Z(t, ()=>{
                    u(),
                    s()
                }
                )
            } else
                s()
        }
        )
    }
    async function o(s) {
        var c, d;
        if (s.key === "Tab" && ((c = n.value) == null || c.focus()),
        !["PageDown", "PageUp", "Home", "End"].includes(s.key))
            return;
        const u = (d = e.value) == null ? void 0 : d.$el;
        if (!u)
            return;
        (s.key === "Home" || s.key === "End") && u.scrollTo({
            top: s.key === "Home" ? 0 : u.scrollHeight,
            behavior: "smooth"
        }),
        await i();
        const v = u.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
        if (s.key === "PageDown" || s.key === "Home") {
            const f = u.getBoundingClientRect().top;
            for (const m of v)
                if (m.getBoundingClientRect().top >= f) {
                    m.focus();
                    break
                }
        } else {
            const f = u.getBoundingClientRect().bottom;
            for (const m of [...v].reverse())
                if (m.getBoundingClientRect().bottom <= f) {
                    m.focus();
                    break
                }
        }
    }
    return {
        onListScroll: l,
        onListKeydown: o
    }
}
const Rl = T({
    chips: Boolean,
    closableChips: Boolean,
    eager: Boolean,
    hideNoData: Boolean,
    hideSelected: Boolean,
    menu: Boolean,
    menuIcon: {
        type: ne,
        default: "$dropdown"
    },
    menuProps: {
        type: Object
    },
    multiple: Boolean,
    noDataText: {
        type: String,
        default: "$vuetify.noDataText"
    },
    openOnClear: Boolean,
    valueComparator: {
        type: Function,
        default: Nt
    },
    itemColor: String,
    ...as({
        itemChildren: !1
    })
}, "Select")
  , sv = T({
    ...Rl(),
    ...vt(ha({
        modelValue: null
    }), ["validationValue", "dirty", "appendInnerIcon"]),
    ...kt({
        transition: {
            component: ia
        }
    })
}, "VSelect")
  , rv = M()({
    name: "VSelect",
    props: sv(),
    emits: {
        "update:focused": e=>!0,
        "update:modelValue": e=>!0,
        "update:menu": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const {t: a} = et()
          , l = U()
          , i = U()
          , o = ae(e, "menu")
          , s = g({
            get: ()=>o.value,
            set: E=>{
                var H;
                o.value && !E && ((H = i.value) != null && H.ΨopenChildren) || (o.value = E)
            }
        })
          , {items: u, transformIn: v, transformOut: c} = Ll(e)
          , d = ae(e, "modelValue", [], E=>v(E === null ? [null] : Je(E)), E=>{
            const H = c(E);
            return e.multiple ? H : H[0] ?? null
        }
        )
          , f = ca()
          , m = g(()=>d.value.map(E=>u.value.find(H=>{
            const G = Me(H.raw, e.itemValue)
              , R = Me(E.raw, e.itemValue);
            return G === void 0 || R === void 0 ? !1 : e.returnObject ? e.valueComparator(G, R) : e.valueComparator(H.value, E.value)
        }
        ) || E))
          , h = g(()=>m.value.map(E=>E.props.value))
          , y = Y(!1);
        let S = "", b;
        const C = g(()=>e.hideSelected ? u.value.filter(E=>!m.value.some(H=>H === E)) : u.value)
          , V = g(()=>e.hideNoData && !u.value.length || e.readonly || (f == null ? void 0 : f.isReadonly.value))
          , P = U()
          , {onListScroll: A, onListKeydown: I} = Fl(P, l);
        function x(E) {
            e.openOnClear && (s.value = !0)
        }
        function k() {
            V.value || (s.value = !s.value)
        }
        function w(E) {
            var L, W;
            if (!E.key || e.readonly || f != null && f.isReadonly.value)
                return;
            ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(E.key) && E.preventDefault(),
            ["Enter", "ArrowDown", " "].includes(E.key) && (s.value = !0),
            ["Escape", "Tab"].includes(E.key) && (s.value = !1),
            E.key === "Home" ? (L = P.value) == null || L.focus("first") : E.key === "End" && ((W = P.value) == null || W.focus("last"));
            const H = 1e3;
            function G(Q) {
                const re = Q.key.length === 1
                  , oe = !Q.ctrlKey && !Q.metaKey && !Q.altKey;
                return re && oe
            }
            if (e.multiple || !G(E))
                return;
            const R = performance.now();
            R - b > H && (S = ""),
            S += E.key.toLowerCase(),
            b = R;
            const j = u.value.find(Q=>Q.title.toLowerCase().startsWith(S));
            j !== void 0 && (d.value = [j])
        }
        function _(E) {
            if (e.multiple) {
                const H = h.value.findIndex(G=>e.valueComparator(G, E.value));
                if (H === -1)
                    d.value = [...d.value, E];
                else {
                    const G = [...d.value];
                    G.splice(H, 1),
                    d.value = G
                }
            } else
                d.value = [E],
                s.value = !1
        }
        function B(E) {
            var H;
            (H = P.value) != null && H.$el.contains(E.relatedTarget) || (s.value = !1)
        }
        function p() {
            var E;
            y.value && ((E = l.value) == null || E.focus())
        }
        function $(E) {
            y.value = !0
        }
        function F(E) {
            if (E == null)
                d.value = [];
            else if (tn(l.value, ":autofill") || tn(l.value, ":-webkit-autofill")) {
                const H = u.value.find(G=>G.title === E);
                H && _(H)
            } else
                l.value && (l.value.value = "")
        }
        return D(()=>{
            const E = !!(e.chips || t.chip)
              , H = !!(!e.hideNoData || C.value.length || t["prepend-item"] || t["append-item"] || t["no-data"])
              , G = d.value.length > 0
              , [R] = zt.filterProps(e)
              , j = G || !y.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
            return r(zt, K({
                ref: l
            }, R, {
                modelValue: d.value.map(L=>L.props.value).join(", "),
                "onUpdate:modelValue": F,
                focused: y.value,
                "onUpdate:focused": L=>y.value = L,
                validationValue: d.externalValue,
                dirty: G,
                class: ["v-select", {
                    "v-select--active-menu": s.value,
                    "v-select--chips": !!e.chips,
                    [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
                    "v-select--selected": d.value.length,
                    "v-select--selection-slot": !!t.selection
                }, e.class],
                style: e.style,
                inputmode: "none",
                placeholder: j,
                "onClick:clear": x,
                "onMousedown:control": k,
                onBlur: B,
                onKeydown: w
            }), {
                ...t,
                default: ()=>r(se, null, [r(fa, K({
                    ref: i,
                    modelValue: s.value,
                    "onUpdate:modelValue": L=>s.value = L,
                    activator: "parent",
                    contentClass: "v-select__content",
                    disabled: V.value,
                    eager: e.eager,
                    maxHeight: 310,
                    openOnClick: !1,
                    closeOnContentClick: !1,
                    transition: e.transition,
                    onAfterLeave: p
                }, e.menuProps), {
                    default: ()=>[H && r(da, {
                        ref: P,
                        selected: h.value,
                        selectStrategy: e.multiple ? "independent" : "single-independent",
                        onMousedown: L=>L.preventDefault(),
                        onKeydown: I,
                        onFocusin: $,
                        onScrollPassive: A,
                        tabindex: "-1",
                        color: e.itemColor ?? e.color
                    }, {
                        default: ()=>{
                            var L, W, Q;
                            return [(L = t["prepend-item"]) == null ? void 0 : L.call(t), !C.value.length && !e.hideNoData && (((W = t["no-data"]) == null ? void 0 : W.call(t)) ?? r(bt, {
                                title: a(e.noDataText)
                            }, null)), r(ya, {
                                renderless: !0,
                                items: C.value
                            }, {
                                default: re=>{
                                    var J;
                                    let {item: oe, index: de, itemRef: N} = re;
                                    const ue = K(oe.props, {
                                        ref: N,
                                        key: de,
                                        onClick: ()=>_(oe)
                                    });
                                    return ((J = t.item) == null ? void 0 : J.call(t, {
                                        item: oe,
                                        index: de,
                                        props: ue
                                    })) ?? r(bt, ue, {
                                        prepend: z=>{
                                            let {isSelected: ee} = z;
                                            return r(se, null, [e.multiple && !e.hideSelected ? r(ln, {
                                                key: oe.value,
                                                modelValue: ee,
                                                ripple: !1,
                                                tabindex: "-1"
                                            }, null) : void 0, oe.props.prependIcon && r(he, {
                                                icon: oe.props.prependIcon
                                            }, null)])
                                        }
                                    })
                                }
                            }), (Q = t["append-item"]) == null ? void 0 : Q.call(t)]
                        }
                    })]
                }), m.value.map((L,W)=>{
                    var oe;
                    function Q(de) {
                        de.stopPropagation(),
                        de.preventDefault(),
                        _(L)
                    }
                    const re = {
                        "onClick:close": Q,
                        onMousedown(de) {
                            de.preventDefault(),
                            de.stopPropagation()
                        },
                        modelValue: !0,
                        "onUpdate:modelValue": void 0
                    };
                    return r("div", {
                        key: L.value,
                        class: "v-select__selection"
                    }, [E ? t.chip ? r(ge, {
                        key: "chip-defaults",
                        defaults: {
                            VChip: {
                                closable: e.closableChips,
                                size: "small",
                                text: L.title
                            }
                        }
                    }, {
                        default: ()=>{
                            var de;
                            return [(de = t.chip) == null ? void 0 : de.call(t, {
                                item: L,
                                index: W,
                                props: re
                            })]
                        }
                    }) : r(On, K({
                        key: "chip",
                        closable: e.closableChips,
                        size: "small",
                        text: L.title
                    }, re), null) : ((oe = t.selection) == null ? void 0 : oe.call(t, {
                        item: L,
                        index: W
                    })) ?? r("span", {
                        class: "v-select__selection-text"
                    }, [L.title, e.multiple && W < m.value.length - 1 && r("span", {
                        class: "v-select__selection-comma"
                    }, [ta(",")])])])
                }
                )]),
                "append-inner": function() {
                    var re;
                    for (var L = arguments.length, W = new Array(L), Q = 0; Q < L; Q++)
                        W[Q] = arguments[Q];
                    return r(se, null, [(re = t["append-inner"]) == null ? void 0 : re.call(t, ...W), e.menuIcon ? r(he, {
                        class: "v-select__menu-icon",
                        icon: e.menuIcon
                    }, null) : void 0])
                }
            })
        }
        ),
        rt({
            isFocused: y,
            menu: s,
            select: _
        }, l)
    }
})
  , uv = (e,n,t)=>e == null || n == null ? -1 : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase())
  , ms = T({
    customFilter: Function,
    customKeyFilter: Object,
    filterKeys: [Array, String],
    filterMode: {
        type: String,
        default: "intersection"
    },
    noFilter: Boolean
}, "filter");
function cv(e, n, t) {
    var s;
    const a = []
      , l = (t == null ? void 0 : t.default) ?? uv
      , i = t != null && t.filterKeys ? Je(t.filterKeys) : !1
      , o = Object.keys((t == null ? void 0 : t.customKeyFilter) ?? {}).length;
    if (!(e != null && e.length))
        return a;
    e: for (let u = 0; u < e.length; u++) {
        const v = e[u]
          , c = {}
          , d = {};
        let f = -1;
        if (n && !(t != null && t.noFilter)) {
            if (typeof v == "object") {
                const y = i || Object.keys(v);
                for (const S of y) {
                    const b = Me(v, S, v)
                      , C = (s = t == null ? void 0 : t.customKeyFilter) == null ? void 0 : s[S];
                    if (f = C ? C(b, n, v) : l(b, n, v),
                    f !== -1 && f !== !1)
                        C ? c[S] = f : d[S] = f;
                    else if ((t == null ? void 0 : t.filterMode) === "every")
                        continue e
                }
            } else
                f = l(v, n, v),
                f !== -1 && f !== !1 && (d.title = f);
            const m = Object.keys(d).length
              , h = Object.keys(c).length;
            if (!m && !h || (t == null ? void 0 : t.filterMode) === "union" && h !== o && !m || (t == null ? void 0 : t.filterMode) === "intersection" && (h !== o || !m))
                continue
        }
        a.push({
            index: u,
            matches: {
                ...d,
                ...c
            }
        })
    }
    return a
}
function gs(e, n, t, a) {
    const l = U([])
      , i = U(new Map)
      , o = g(()=>a != null && a.transform ? qe(n).map(a == null ? void 0 : a.transform) : qe(n));
    Ge(()=>{
        const u = typeof t == "function" ? t() : qe(t)
          , v = typeof u != "string" && typeof u != "number" ? "" : String(u)
          , c = cv(o.value, v, {
            customKeyFilter: e.customKeyFilter,
            default: e.customFilter,
            filterKeys: e.filterKeys,
            filterMode: e.filterMode,
            noFilter: e.noFilter
        })
          , d = qe(n)
          , f = []
          , m = new Map;
        c.forEach(h=>{
            let {index: y, matches: S} = h;
            const b = d[y];
            f.push(b),
            m.set(b.value, S)
        }
        ),
        l.value = f,
        i.value = m
    }
    );
    function s(u) {
        return i.value.get(u.value)
    }
    return {
        filteredItems: l,
        filteredMatches: i,
        getMatches: s
    }
}
function dv(e, n, t) {
    if (n == null)
        return e;
    if (Array.isArray(n))
        throw new Error("Multiple matches is not implemented");
    return typeof n == "number" && ~n ? r(se, null, [r("span", {
        class: "v-autocomplete__unmask"
    }, [e.substr(0, n)]), r("span", {
        class: "v-autocomplete__mask"
    }, [e.substr(n, t)]), r("span", {
        class: "v-autocomplete__unmask"
    }, [e.substr(n + t)])]) : e
}
const vv = T({
    autoSelectFirst: {
        type: [Boolean, String]
    },
    search: String,
    ...ms({
        filterKeys: ["title"]
    }),
    ...Rl(),
    ...vt(ha({
        modelValue: null
    }), ["validationValue", "dirty", "appendInnerIcon"]),
    ...kt({
        transition: !1
    })
}, "VAutocomplete")
  , fv = M()({
    name: "VAutocomplete",
    props: vv(),
    emits: {
        "update:focused": e=>!0,
        "update:search": e=>!0,
        "update:modelValue": e=>!0,
        "update:menu": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const {t: a} = et()
          , l = U()
          , i = Y(!1)
          , o = Y(!0)
          , s = Y(!1)
          , u = U()
          , v = ae(e, "menu")
          , c = g({
            get: ()=>v.value,
            set: J=>{
                var z;
                v.value && !J && ((z = u.value) != null && z.ΨopenChildren) || (v.value = J)
            }
        })
          , d = Y(-1)
          , f = g(()=>{
            var J;
            return (J = l.value) == null ? void 0 : J.color
        }
        )
          , {items: m, transformIn: h, transformOut: y} = Ll(e)
          , {textColorClasses: S, textColorStyles: b} = Fe(f)
          , C = ae(e, "search", "")
          , V = ae(e, "modelValue", [], J=>h(J === null ? [null] : Je(J)), J=>{
            const z = y(J);
            return e.multiple ? z : z[0] ?? null
        }
        )
          , P = ca()
          , {filteredItems: A, getMatches: I} = gs(e, m, ()=>o.value ? "" : C.value)
          , x = g(()=>V.value.map(J=>m.value.find(z=>{
            const ee = Me(z.raw, e.itemValue)
              , fe = Me(J.raw, e.itemValue);
            return ee === void 0 || fe === void 0 ? !1 : e.returnObject ? e.valueComparator(ee, fe) : e.valueComparator(z.value, J.value)
        }
        ) || J))
          , k = g(()=>e.hideSelected ? A.value.filter(J=>!x.value.some(z=>z.value === J.value)) : A.value)
          , w = g(()=>x.value.map(J=>J.props.value))
          , _ = g(()=>x.value[d.value])
          , B = g(()=>{
            var z;
            return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && C.value === ((z = k.value[0]) == null ? void 0 : z.title)) && k.value.length > 0 && !o.value && !s.value
        }
        )
          , p = g(()=>e.hideNoData && !m.value.length || e.readonly || (P == null ? void 0 : P.isReadonly.value))
          , $ = U()
          , {onListScroll: F, onListKeydown: E} = Fl($, l);
        function H(J) {
            e.openOnClear && (c.value = !0),
            C.value = ""
        }
        function G() {
            p.value || (c.value = !0)
        }
        function R(J) {
            p.value || (i.value && (J.preventDefault(),
            J.stopPropagation()),
            c.value = !c.value)
        }
        function j(J) {
            var fe, ie, te;
            if (e.readonly || P != null && P.isReadonly.value)
                return;
            const z = l.value.selectionStart
              , ee = w.value.length;
            if ((d.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(J.key)) && J.preventDefault(),
            ["Enter", "ArrowDown"].includes(J.key) && (c.value = !0),
            ["Escape"].includes(J.key) && (c.value = !1),
            B.value && ["Enter", "Tab"].includes(J.key) && ue(A.value[0]),
            J.key === "ArrowDown" && B.value && ((fe = $.value) == null || fe.focus("next")),
            !!e.multiple) {
                if (["Backspace", "Delete"].includes(J.key)) {
                    if (d.value < 0) {
                        J.key === "Backspace" && !C.value && (d.value = ee - 1);
                        return
                    }
                    const ve = d.value;
                    _.value && ue(_.value),
                    d.value = ve >= ee - 1 ? ee - 2 : ve
                }
                if (J.key === "ArrowLeft") {
                    if (d.value < 0 && z > 0)
                        return;
                    const ve = d.value > -1 ? d.value - 1 : ee - 1;
                    x.value[ve] ? d.value = ve : (d.value = -1,
                    l.value.setSelectionRange((ie = C.value) == null ? void 0 : ie.length, (te = C.value) == null ? void 0 : te.length))
                }
                if (J.key === "ArrowRight") {
                    if (d.value < 0)
                        return;
                    const ve = d.value + 1;
                    x.value[ve] ? d.value = ve : (d.value = -1,
                    l.value.setSelectionRange(0, 0))
                }
            }
        }
        function L(J) {
            C.value = J.target.value
        }
        function W(J) {
            if (tn(l.value, ":autofill") || tn(l.value, ":-webkit-autofill")) {
                const z = m.value.find(ee=>ee.title === J.target.value);
                z && ue(z)
            }
        }
        function Q() {
            var J;
            i.value && (o.value = !0,
            (J = l.value) == null || J.focus())
        }
        function re(J) {
            i.value = !0,
            setTimeout(()=>{
                s.value = !0
            }
            )
        }
        function oe(J) {
            s.value = !1
        }
        function de(J) {
            (J == null || J === "" && !e.multiple) && (V.value = [])
        }
        const N = Y(!1);
        function ue(J) {
            if (e.multiple) {
                const z = w.value.findIndex(ee=>e.valueComparator(ee, J.value));
                if (z === -1)
                    V.value = [...V.value, J];
                else {
                    const ee = [...V.value];
                    ee.splice(z, 1),
                    V.value = ee
                }
            } else
                V.value = [J],
                N.value = !0,
                C.value = J.title,
                c.value = !1,
                o.value = !0,
                Se(()=>N.value = !1)
        }
        return Z(i, (J,z)=>{
            var ee;
            J !== z && (J ? (N.value = !0,
            C.value = e.multiple ? "" : String(((ee = x.value.at(-1)) == null ? void 0 : ee.props.title) ?? ""),
            o.value = !0,
            Se(()=>N.value = !1)) : (!e.multiple && !C.value ? V.value = [] : B.value && !s.value && !x.value.some(fe=>{
                let {value: ie} = fe;
                return ie === k.value[0].value
            }
            ) && ue(k.value[0]),
            c.value = !1,
            C.value = "",
            d.value = -1))
        }
        ),
        Z(C, J=>{
            !i.value || N.value || (J && (c.value = !0),
            o.value = !J)
        }
        ),
        D(()=>{
            const J = !!(e.chips || t.chip)
              , z = !!(!e.hideNoData || k.value.length || t["prepend-item"] || t["append-item"] || t["no-data"])
              , ee = V.value.length > 0
              , [fe] = zt.filterProps(e);
            return r(zt, K({
                ref: l
            }, fe, {
                modelValue: C.value,
                "onUpdate:modelValue": de,
                focused: i.value,
                "onUpdate:focused": ie=>i.value = ie,
                validationValue: V.externalValue,
                dirty: ee,
                onInput: L,
                onChange: W,
                class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, {
                    "v-autocomplete--active-menu": c.value,
                    "v-autocomplete--chips": !!e.chips,
                    "v-autocomplete--selection-slot": !!t.selection,
                    "v-autocomplete--selecting-index": d.value > -1
                }, e.class],
                style: e.style,
                readonly: e.readonly,
                placeholder: ee ? void 0 : e.placeholder,
                "onClick:clear": H,
                "onMousedown:control": G,
                onKeydown: j
            }), {
                ...t,
                default: ()=>r(se, null, [r(fa, K({
                    ref: u,
                    modelValue: c.value,
                    "onUpdate:modelValue": ie=>c.value = ie,
                    activator: "parent",
                    contentClass: "v-autocomplete__content",
                    disabled: p.value,
                    eager: e.eager,
                    maxHeight: 310,
                    openOnClick: !1,
                    closeOnContentClick: !1,
                    transition: e.transition,
                    onAfterLeave: Q
                }, e.menuProps), {
                    default: ()=>[z && r(da, {
                        ref: $,
                        selected: w.value,
                        selectStrategy: e.multiple ? "independent" : "single-independent",
                        onMousedown: ie=>ie.preventDefault(),
                        onKeydown: E,
                        onFocusin: re,
                        onFocusout: oe,
                        onScrollPassive: F,
                        tabindex: "-1",
                        color: e.itemColor ?? e.color
                    }, {
                        default: ()=>{
                            var ie, te, ve;
                            return [(ie = t["prepend-item"]) == null ? void 0 : ie.call(t), !k.value.length && !e.hideNoData && (((te = t["no-data"]) == null ? void 0 : te.call(t)) ?? r(bt, {
                                title: a(e.noDataText)
                            }, null)), r(ya, {
                                renderless: !0,
                                items: k.value
                            }, {
                                default: Ie=>{
                                    var yn;
                                    let {item: _e, index: be, itemRef: He} = Ie;
                                    const Dn = K(_e.props, {
                                        ref: He,
                                        key: be,
                                        active: B.value && be === 0 ? !0 : void 0,
                                        onClick: ()=>ue(_e)
                                    });
                                    return ((yn = t.item) == null ? void 0 : yn.call(t, {
                                        item: _e,
                                        index: be,
                                        props: Dn
                                    })) ?? r(bt, Dn, {
                                        prepend: $t=>{
                                            let {isSelected: ft} = $t;
                                            return r(se, null, [e.multiple && !e.hideSelected ? r(ln, {
                                                key: _e.value,
                                                modelValue: ft,
                                                ripple: !1,
                                                tabindex: "-1"
                                            }, null) : void 0, _e.props.prependIcon && r(he, {
                                                icon: _e.props.prependIcon
                                            }, null)])
                                        }
                                        ,
                                        title: ()=>{
                                            var $t, ft;
                                            return o.value ? _e.title : dv(_e.title, ($t = I(_e)) == null ? void 0 : $t.title, ((ft = C.value) == null ? void 0 : ft.length) ?? 0)
                                        }
                                    })
                                }
                            }), (ve = t["append-item"]) == null ? void 0 : ve.call(t)]
                        }
                    })]
                }), x.value.map((ie,te)=>{
                    var _e;
                    function ve(be) {
                        be.stopPropagation(),
                        be.preventDefault(),
                        ue(ie)
                    }
                    const Ie = {
                        "onClick:close": ve,
                        onMousedown(be) {
                            be.preventDefault(),
                            be.stopPropagation()
                        },
                        modelValue: !0,
                        "onUpdate:modelValue": void 0
                    };
                    return r("div", {
                        key: ie.value,
                        class: ["v-autocomplete__selection", te === d.value && ["v-autocomplete__selection--selected", S.value]],
                        style: te === d.value ? b.value : {}
                    }, [J ? t.chip ? r(ge, {
                        key: "chip-defaults",
                        defaults: {
                            VChip: {
                                closable: e.closableChips,
                                size: "small",
                                text: ie.title
                            }
                        }
                    }, {
                        default: ()=>{
                            var be;
                            return [(be = t.chip) == null ? void 0 : be.call(t, {
                                item: ie,
                                index: te,
                                props: Ie
                            })]
                        }
                    }) : r(On, K({
                        key: "chip",
                        closable: e.closableChips,
                        size: "small",
                        text: ie.title
                    }, Ie), null) : ((_e = t.selection) == null ? void 0 : _e.call(t, {
                        item: ie,
                        index: te
                    })) ?? r("span", {
                        class: "v-autocomplete__selection-text"
                    }, [ie.title, e.multiple && te < x.value.length - 1 && r("span", {
                        class: "v-autocomplete__selection-comma"
                    }, [ta(",")])])])
                }
                )]),
                "append-inner": function() {
                    var Ie;
                    for (var ie = arguments.length, te = new Array(ie), ve = 0; ve < ie; ve++)
                        te[ve] = arguments[ve];
                    return r(se, null, [(Ie = t["append-inner"]) == null ? void 0 : Ie.call(t, ...te), e.menuIcon ? r(he, {
                        class: "v-autocomplete__menu-icon",
                        icon: e.menuIcon,
                        onMousedown: R,
                        onClick: Yi
                    }, null) : void 0])
                }
            })
        }
        ),
        rt({
            isFocused: i,
            isPristine: o,
            menu: c,
            search: C,
            filteredItems: A,
            select: ue
        }, l)
    }
});
const mv = T({
    bordered: Boolean,
    color: String,
    content: [Number, String],
    dot: Boolean,
    floating: Boolean,
    icon: ne,
    inline: Boolean,
    label: {
        type: String,
        default: "$vuetify.badge"
    },
    max: [Number, String],
    modelValue: {
        type: Boolean,
        default: !0
    },
    offsetX: [Number, String],
    offsetY: [Number, String],
    textColor: String,
    ...X(),
    ...At({
        location: "top end"
    }),
    ...Ce(),
    ...le(),
    ...ce(),
    ...kt({
        transition: "scale-rotate-transition"
    })
}, "VBadge")
  , gv = M()({
    name: "VBadge",
    inheritAttrs: !1,
    props: mv(),
    setup(e, n) {
        const {backgroundColorClasses: t, backgroundColorStyles: a} = Pe(O(e, "color"))
          , {roundedClasses: l} = we(e)
          , {t: i} = et()
          , {textColorClasses: o, textColorStyles: s} = Fe(O(e, "textColor"))
          , {themeClasses: u} = uo()
          , {locationStyles: v} = Bt(e, !0, c=>(e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(c) ? +(e.offsetY ?? 0) : ["left", "right"].includes(c) ? +(e.offsetX ?? 0) : 0));
        return D(()=>{
            const c = Number(e.content)
              , d = !e.max || isNaN(c) ? e.content : c <= +e.max ? c : `${e.max}+`
              , [f,m] = on(n.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
            return r(e.tag, K({
                class: ["v-badge", {
                    "v-badge--bordered": e.bordered,
                    "v-badge--dot": e.dot,
                    "v-badge--floating": e.floating,
                    "v-badge--inline": e.inline
                }, e.class]
            }, m, {
                style: e.style
            }), {
                default: ()=>{
                    var h, y;
                    return [r("div", {
                        class: "v-badge__wrapper"
                    }, [(y = (h = n.slots).default) == null ? void 0 : y.call(h), r(ot, {
                        transition: e.transition
                    }, {
                        default: ()=>{
                            var S, b;
                            return [Ve(r("span", K({
                                class: ["v-badge__badge", u.value, t.value, l.value, o.value],
                                style: [a.value, s.value, e.inline ? {} : v.value],
                                "aria-atomic": "true",
                                "aria-label": i(e.label, c),
                                "aria-live": "polite",
                                role: "status"
                            }, f), [e.dot ? void 0 : n.slots.badge ? (b = (S = n.slots).badge) == null ? void 0 : b.call(S) : e.icon ? r(he, {
                                icon: e.icon
                            }, null) : d]), [[dt, e.modelValue]])]
                        }
                    })])]
                }
            })
        }
        ),
        {}
    }
});
const hv = T({
    color: String,
    density: String,
    ...X()
}, "VBannerActions")
  , hs = M()({
    name: "VBannerActions",
    props: hv(),
    setup(e, n) {
        let {slots: t} = n;
        return xe({
            VBtn: {
                color: e.color,
                density: e.density,
                variant: "text"
            }
        }),
        D(()=>{
            var a;
            return r("div", {
                class: ["v-banner-actions", e.class],
                style: e.style
            }, [(a = t.default) == null ? void 0 : a.call(t)])
        }
        ),
        {}
    }
})
  , ys = st("v-banner-text")
  , yv = T({
    avatar: String,
    color: String,
    icon: ne,
    lines: String,
    stacked: Boolean,
    sticky: Boolean,
    text: String,
    ...Xe(),
    ...X(),
    ...Be(),
    ...tt(),
    ...Ae(),
    ...At(),
    ...fn(),
    ...Ce(),
    ...le(),
    ...ce()
}, "VBanner")
  , bv = M()({
    name: "VBanner",
    props: yv(),
    setup(e, n) {
        let {slots: t} = n;
        const {borderClasses: a} = at(e)
          , {densityClasses: l} = De(e)
          , {mobile: i} = jt()
          , {dimensionStyles: o} = nt(e)
          , {elevationClasses: s} = Le(e)
          , {locationStyles: u} = Bt(e)
          , {positionClasses: v} = mn(e)
          , {roundedClasses: c} = we(e)
          , {themeClasses: d} = me(e)
          , f = O(e, "color")
          , m = O(e, "density");
        xe({
            VBannerActions: {
                color: f,
                density: m
            }
        }),
        D(()=>{
            const h = !!(e.text || t.text)
              , y = !!(e.avatar || e.icon)
              , S = !!(y || t.prepend);
            return r(e.tag, {
                class: ["v-banner", {
                    "v-banner--stacked": e.stacked || i.value,
                    "v-banner--sticky": e.sticky,
                    [`v-banner--${e.lines}-line`]: !!e.lines
                }, a.value, l.value, s.value, v.value, c.value, d.value, e.class],
                style: [o.value, u.value, e.style],
                role: "banner"
            }, {
                default: ()=>{
                    var b;
                    return [S && r("div", {
                        key: "prepend",
                        class: "v-banner__prepend"
                    }, [t.prepend ? r(ge, {
                        key: "prepend-defaults",
                        disabled: !y,
                        defaults: {
                            VAvatar: {
                                color: f.value,
                                density: m.value,
                                icon: e.icon,
                                image: e.avatar
                            }
                        }
                    }, t.prepend) : r(Pt, {
                        key: "prepend-avatar",
                        color: f.value,
                        density: m.value,
                        icon: e.icon,
                        image: e.avatar
                    }, null)]), r("div", {
                        class: "v-banner__content"
                    }, [h && r(ys, {
                        key: "text"
                    }, {
                        default: ()=>{
                            var C;
                            return [((C = t.text) == null ? void 0 : C.call(t)) ?? e.text]
                        }
                    }), (b = t.default) == null ? void 0 : b.call(t)]), t.actions && r(hs, {
                        key: "actions"
                    }, t.actions)]
                }
            })
        }
        )
    }
});
const Sv = T({
    bgColor: String,
    color: String,
    grow: Boolean,
    mode: {
        type: String,
        validator: e=>!e || ["horizontal", "shift"].includes(e)
    },
    height: {
        type: [Number, String],
        default: 56
    },
    active: {
        type: Boolean,
        default: !0
    },
    ...Xe(),
    ...X(),
    ...Be(),
    ...Ae(),
    ...Ce(),
    ...sn({
        name: "bottom-navigation"
    }),
    ...le({
        tag: "header"
    }),
    ...un({
        modelValue: !0,
        selectedClass: "v-btn--selected"
    }),
    ...ce()
}, "VBottomNavigation")
  , Cv = M()({
    name: "VBottomNavigation",
    props: Sv(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const {themeClasses: a} = uo()
          , {borderClasses: l} = at(e)
          , {backgroundColorClasses: i, backgroundColorStyles: o} = Pe(O(e, "bgColor"))
          , {densityClasses: s} = De(e)
          , {elevationClasses: u} = Le(e)
          , {roundedClasses: v} = we(e)
          , {ssrBootStyles: c} = Gt()
          , d = g(()=>Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0))
          , f = O(e, "active")
          , {layoutItemStyles: m} = rn({
            id: e.name,
            order: g(()=>parseInt(e.order, 10)),
            position: g(()=>"bottom"),
            layoutSize: g(()=>f.value ? d.value : 0),
            elementSize: d,
            active: f,
            absolute: O(e, "absolute")
        });
        return Yt(e, Pl),
        xe({
            VBtn: {
                color: O(e, "color"),
                density: O(e, "density"),
                stacked: g(()=>e.mode !== "horizontal"),
                variant: "text"
            }
        }, {
            scoped: !0
        }),
        D(()=>r(e.tag, {
            class: ["v-bottom-navigation", {
                "v-bottom-navigation--active": f.value,
                "v-bottom-navigation--grow": e.grow,
                "v-bottom-navigation--shift": e.mode === "shift"
            }, a.value, i.value, l.value, s.value, u.value, v.value, e.class],
            style: [o.value, m.value, {
                height: q(d.value),
                transform: `translateY(${q(f.value ? 0 : 100, "%")})`
            }, c.value, e.style]
        }, {
            default: ()=>[t.default && r("div", {
                class: "v-bottom-navigation__content"
            }, [t.default()])]
        })),
        {}
    }
});
const kv = T({
    divider: [Number, String],
    ...X()
}, "VBreadcrumbsDivider")
  , bs = M()({
    name: "VBreadcrumbsDivider",
    props: kv(),
    setup(e, n) {
        let {slots: t} = n;
        return D(()=>{
            var a;
            return r("li", {
                class: ["v-breadcrumbs-divider", e.class],
                style: e.style
            }, [((a = t == null ? void 0 : t.default) == null ? void 0 : a.call(t)) ?? e.divider])
        }
        ),
        {}
    }
})
  , Vv = T({
    active: Boolean,
    activeClass: String,
    activeColor: String,
    color: String,
    disabled: Boolean,
    title: String,
    ...X(),
    ...Mn(),
    ...le({
        tag: "li"
    })
}, "VBreadcrumbsItem")
  , Ss = M()({
    name: "VBreadcrumbsItem",
    props: Vv(),
    setup(e, n) {
        let {slots: t, attrs: a} = n;
        const l = Ln(e, a)
          , i = g(()=>{
            var v;
            return e.active || ((v = l.isActive) == null ? void 0 : v.value)
        }
        )
          , o = g(()=>i.value ? e.activeColor : e.color)
          , {textColorClasses: s, textColorStyles: u} = Fe(o);
        return D(()=>r(e.tag, {
            class: ["v-breadcrumbs-item", {
                "v-breadcrumbs-item--active": i.value,
                "v-breadcrumbs-item--disabled": e.disabled,
                [`${e.activeClass}`]: i.value && e.activeClass
            }, s.value, e.class],
            style: [u.value, e.style],
            "aria-current": i.value ? "page" : void 0
        }, {
            default: ()=>{
                var v, c;
                return [l.isLink.value ? r("a", {
                    class: "v-breadcrumbs-item--link",
                    href: l.href.value,
                    "aria-current": i.value ? "page" : void 0,
                    onClick: l.navigate
                }, [((c = t.default) == null ? void 0 : c.call(t)) ?? e.title]) : ((v = t.default) == null ? void 0 : v.call(t)) ?? e.title]
            }
        })),
        {}
    }
})
  , wv = T({
    activeClass: String,
    activeColor: String,
    bgColor: String,
    color: String,
    disabled: Boolean,
    divider: {
        type: String,
        default: "/"
    },
    icon: ne,
    items: {
        type: Array,
        default: ()=>[]
    },
    ...X(),
    ...Be(),
    ...Ce(),
    ...le({
        tag: "ul"
    })
}, "VBreadcrumbs")
  , xv = M()({
    name: "VBreadcrumbs",
    props: wv(),
    setup(e, n) {
        let {slots: t} = n;
        const {backgroundColorClasses: a, backgroundColorStyles: l} = Pe(O(e, "bgColor"))
          , {densityClasses: i} = De(e)
          , {roundedClasses: o} = we(e);
        xe({
            VBreadcrumbsDivider: {
                divider: O(e, "divider")
            },
            VBreadcrumbsItem: {
                activeClass: O(e, "activeClass"),
                activeColor: O(e, "activeColor"),
                color: O(e, "color"),
                disabled: O(e, "disabled")
            }
        });
        const s = g(()=>e.items.map(u=>typeof u == "string" ? {
            item: {
                title: u
            },
            raw: u
        } : {
            item: u,
            raw: u
        }));
        return D(()=>{
            const u = !!(t.prepend || e.icon);
            return r(e.tag, {
                class: ["v-breadcrumbs", a.value, i.value, o.value, e.class],
                style: [l.value, e.style]
            }, {
                default: ()=>{
                    var v;
                    return [u && r("li", {
                        key: "prepend",
                        class: "v-breadcrumbs__prepend"
                    }, [t.prepend ? r(ge, {
                        key: "prepend-defaults",
                        disabled: !e.icon,
                        defaults: {
                            VIcon: {
                                icon: e.icon,
                                start: !0
                            }
                        }
                    }, t.prepend) : r(he, {
                        key: "prepend-icon",
                        start: !0,
                        icon: e.icon
                    }, null)]), s.value.map((c,d,f)=>{
                        let {item: m, raw: h} = c;
                        return r(se, null, [r(Ss, K({
                            key: m.title,
                            disabled: d >= f.length - 1
                        }, m), {
                            default: t.title ? ()=>{
                                var y;
                                return (y = t.title) == null ? void 0 : y.call(t, {
                                    item: h,
                                    index: d
                                })
                            }
                            : void 0
                        }), d < f.length - 1 && r(bs, null, {
                            default: t.divider ? ()=>{
                                var y;
                                return (y = t.divider) == null ? void 0 : y.call(t, {
                                    item: h,
                                    index: d
                                })
                            }
                            : void 0
                        })])
                    }
                    ), (v = t.default) == null ? void 0 : v.call(t)]
                }
            })
        }
        ),
        {}
    }
});
const Cs = M()({
    name: "VCardActions",
    props: X(),
    setup(e, n) {
        let {slots: t} = n;
        return xe({
            VBtn: {
                variant: "text"
            }
        }),
        D(()=>{
            var a;
            return r("div", {
                class: ["v-card-actions", e.class],
                style: e.style
            }, [(a = t.default) == null ? void 0 : a.call(t)])
        }
        ),
        {}
    }
})
  , ks = st("v-card-subtitle")
  , Vs = st("v-card-title")
  , Pv = T({
    appendAvatar: String,
    appendIcon: ne,
    prependAvatar: String,
    prependIcon: ne,
    subtitle: String,
    title: String,
    ...X(),
    ...Be()
}, "VCardItem")
  , ws = M()({
    name: "VCardItem",
    props: Pv(),
    setup(e, n) {
        let {slots: t} = n;
        return D(()=>{
            var v;
            const a = !!(e.prependAvatar || e.prependIcon)
              , l = !!(a || t.prepend)
              , i = !!(e.appendAvatar || e.appendIcon)
              , o = !!(i || t.append)
              , s = !!(e.title || t.title)
              , u = !!(e.subtitle || t.subtitle);
            return r("div", {
                class: ["v-card-item", e.class],
                style: e.style
            }, [l && r("div", {
                key: "prepend",
                class: "v-card-item__prepend"
            }, [t.prepend ? r(ge, {
                key: "prepend-defaults",
                disabled: !a,
                defaults: {
                    VAvatar: {
                        density: e.density,
                        icon: e.prependIcon,
                        image: e.prependAvatar
                    }
                }
            }, t.prepend) : a && r(Pt, {
                key: "prepend-avatar",
                density: e.density,
                icon: e.prependIcon,
                image: e.prependAvatar
            }, null)]), r("div", {
                class: "v-card-item__content"
            }, [s && r(Vs, {
                key: "title"
            }, {
                default: ()=>{
                    var c;
                    return [((c = t.title) == null ? void 0 : c.call(t)) ?? e.title]
                }
            }), u && r(ks, {
                key: "subtitle"
            }, {
                default: ()=>{
                    var c;
                    return [((c = t.subtitle) == null ? void 0 : c.call(t)) ?? e.subtitle]
                }
            }), (v = t.default) == null ? void 0 : v.call(t)]), o && r("div", {
                key: "append",
                class: "v-card-item__append"
            }, [t.append ? r(ge, {
                key: "append-defaults",
                disabled: !i,
                defaults: {
                    VAvatar: {
                        density: e.density,
                        icon: e.appendIcon,
                        image: e.appendAvatar
                    }
                }
            }, t.append) : i && r(Pt, {
                key: "append-avatar",
                density: e.density,
                icon: e.appendIcon,
                image: e.appendAvatar
            }, null)])])
        }
        ),
        {}
    }
})
  , xs = st("v-card-text")
  , Iv = T({
    appendAvatar: String,
    appendIcon: ne,
    disabled: Boolean,
    flat: Boolean,
    hover: Boolean,
    image: String,
    link: {
        type: Boolean,
        default: void 0
    },
    prependAvatar: String,
    prependIcon: ne,
    ripple: {
        type: [Boolean, Object],
        default: !0
    },
    subtitle: String,
    text: String,
    title: String,
    ...Xe(),
    ...X(),
    ...Be(),
    ...tt(),
    ...Ae(),
    ...Bl(),
    ...At(),
    ...fn(),
    ...Ce(),
    ...Mn(),
    ...le(),
    ...ce(),
    ...lt({
        variant: "elevated"
    })
}, "VCard")
  , _v = M()({
    name: "VCard",
    directives: {
        Ripple: Tt
    },
    props: Iv(),
    setup(e, n) {
        let {attrs: t, slots: a} = n;
        const {themeClasses: l} = me(e)
          , {borderClasses: i} = at(e)
          , {colorClasses: o, colorStyles: s, variantClasses: u} = Ut(e)
          , {densityClasses: v} = De(e)
          , {dimensionStyles: c} = nt(e)
          , {elevationClasses: d} = Le(e)
          , {loaderClasses: f} = sa(e)
          , {locationStyles: m} = Bt(e)
          , {positionClasses: h} = mn(e)
          , {roundedClasses: y} = we(e)
          , S = Ln(e, t)
          , b = g(()=>e.link !== !1 && S.isLink.value)
          , C = g(()=>!e.disabled && e.link !== !1 && (e.link || S.isClickable.value));
        return D(()=>{
            const V = b.value ? "a" : e.tag
              , P = !!(a.title || e.title)
              , A = !!(a.subtitle || e.subtitle)
              , I = P || A
              , x = !!(a.append || e.appendAvatar || e.appendIcon)
              , k = !!(a.prepend || e.prependAvatar || e.prependIcon)
              , w = !!(a.image || e.image)
              , _ = I || k || x
              , B = !!(a.text || e.text);
            return Ve(r(V, {
                class: ["v-card", {
                    "v-card--disabled": e.disabled,
                    "v-card--flat": e.flat,
                    "v-card--hover": e.hover && !(e.disabled || e.flat),
                    "v-card--link": C.value
                }, l.value, i.value, o.value, v.value, d.value, f.value, h.value, y.value, u.value, e.class],
                style: [s.value, c.value, m.value, e.style],
                href: S.href.value,
                onClick: C.value && S.navigate,
                tabindex: e.disabled ? -1 : void 0
            }, {
                default: ()=>{
                    var p;
                    return [w && r("div", {
                        key: "image",
                        class: "v-card__image"
                    }, [a.image ? r(ge, {
                        key: "image-defaults",
                        disabled: !e.image,
                        defaults: {
                            VImg: {
                                cover: !0,
                                src: e.image
                            }
                        }
                    }, a.image) : r(Dt, {
                        key: "image-img",
                        cover: !0,
                        src: e.image
                    }, null)]), r(Tl, {
                        name: "v-card",
                        active: !!e.loading,
                        color: typeof e.loading == "boolean" ? void 0 : e.loading
                    }, {
                        default: a.loader
                    }), _ && r(ws, {
                        key: "item",
                        prependAvatar: e.prependAvatar,
                        prependIcon: e.prependIcon,
                        title: e.title,
                        subtitle: e.subtitle,
                        appendAvatar: e.appendAvatar,
                        appendIcon: e.appendIcon
                    }, {
                        default: a.item,
                        prepend: a.prepend,
                        title: a.title,
                        subtitle: a.subtitle,
                        append: a.append
                    }), B && r(xs, {
                        key: "text"
                    }, {
                        default: ()=>{
                            var $;
                            return [(($ = a.text) == null ? void 0 : $.call(a)) ?? e.text]
                        }
                    }), (p = a.default) == null ? void 0 : p.call(a), a.actions && r(Cs, null, {
                        default: a.actions
                    }), Wt(C.value, "v-card")]
                }
            }), [[Ye("ripple"), C.value && e.ripple]])
        }
        ),
        {}
    }
});
const Av = e=>{
    const {touchstartX: n, touchendX: t, touchstartY: a, touchendY: l} = e
      , i = .5
      , o = 16;
    e.offsetX = t - n,
    e.offsetY = l - a,
    Math.abs(e.offsetY) < i * Math.abs(e.offsetX) && (e.left && t < n - o && e.left(e),
    e.right && t > n + o && e.right(e)),
    Math.abs(e.offsetX) < i * Math.abs(e.offsetY) && (e.up && l < a - o && e.up(e),
    e.down && l > a + o && e.down(e))
}
;
function Bv(e, n) {
    var a;
    const t = e.changedTouches[0];
    n.touchstartX = t.clientX,
    n.touchstartY = t.clientY,
    (a = n.start) == null || a.call(n, {
        originalEvent: e,
        ...n
    })
}
function Tv(e, n) {
    var a;
    const t = e.changedTouches[0];
    n.touchendX = t.clientX,
    n.touchendY = t.clientY,
    (a = n.end) == null || a.call(n, {
        originalEvent: e,
        ...n
    }),
    Av(n)
}
function pv(e, n) {
    var a;
    const t = e.changedTouches[0];
    n.touchmoveX = t.clientX,
    n.touchmoveY = t.clientY,
    (a = n.move) == null || a.call(n, {
        originalEvent: e,
        ...n
    })
}
function $v() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = {
        touchstartX: 0,
        touchstartY: 0,
        touchendX: 0,
        touchendY: 0,
        touchmoveX: 0,
        touchmoveY: 0,
        offsetX: 0,
        offsetY: 0,
        left: e.left,
        right: e.right,
        up: e.up,
        down: e.down,
        start: e.start,
        move: e.move,
        end: e.end
    };
    return {
        touchstart: t=>Bv(t, n),
        touchend: t=>Tv(t, n),
        touchmove: t=>pv(t, n)
    }
}
function Ev(e, n) {
    var s;
    const t = n.value
      , a = t != null && t.parent ? e.parentElement : e
      , l = (t == null ? void 0 : t.options) ?? {
        passive: !0
    }
      , i = (s = n.instance) == null ? void 0 : s.$.uid;
    if (!a || !i)
        return;
    const o = $v(n.value);
    a._touchHandlers = a._touchHandlers ?? Object.create(null),
    a._touchHandlers[i] = o,
    ji(o).forEach(u=>{
        a.addEventListener(u, o[u], l)
    }
    )
}
function Lv(e, n) {
    var i, o;
    const t = (i = n.value) != null && i.parent ? e.parentElement : e
      , a = (o = n.instance) == null ? void 0 : o.$.uid;
    if (!(t != null && t._touchHandlers) || !a)
        return;
    const l = t._touchHandlers[a];
    ji(l).forEach(s=>{
        t.removeEventListener(s, l[s])
    }
    ),
    delete t._touchHandlers[a]
}
const Dl = {
    mounted: Ev,
    unmounted: Lv
}
  , Ps = Symbol.for("vuetify:v-window")
  , Is = Symbol.for("vuetify:v-window-group")
  , _s = T({
    continuous: Boolean,
    nextIcon: {
        type: [Boolean, String, Function, Object],
        default: "$next"
    },
    prevIcon: {
        type: [Boolean, String, Function, Object],
        default: "$prev"
    },
    reverse: Boolean,
    showArrows: {
        type: [Boolean, String],
        validator: e=>typeof e == "boolean" || e === "hover"
    },
    touch: {
        type: [Object, Boolean],
        default: void 0
    },
    direction: {
        type: String,
        default: "horizontal"
    },
    modelValue: null,
    disabled: Boolean,
    selectedClass: {
        type: String,
        default: "v-window-item--active"
    },
    mandatory: {
        type: [Boolean, String],
        default: "force"
    },
    ...X(),
    ...le(),
    ...ce()
}, "VWindow")
  , qa = M()({
    name: "VWindow",
    directives: {
        Touch: Dl
    },
    props: _s(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const {themeClasses: a} = me(e)
          , {isRtl: l} = $e()
          , {t: i} = et()
          , o = Yt(e, Is)
          , s = U()
          , u = g(()=>l.value ? !e.reverse : e.reverse)
          , v = Y(!1)
          , c = g(()=>{
            const P = e.direction === "vertical" ? "y" : "x"
              , I = (u.value ? !v.value : v.value) ? "-reverse" : "";
            return `v-window-${P}${I}-transition`
        }
        )
          , d = Y(0)
          , f = U(void 0)
          , m = g(()=>o.items.value.findIndex(P=>o.selected.value.includes(P.id)));
        Z(m, (P,A)=>{
            const I = o.items.value.length
              , x = I - 1;
            I <= 2 ? v.value = P < A : P === x && A === 0 ? v.value = !0 : P === 0 && A === x ? v.value = !1 : v.value = P < A
        }
        ),
        Te(Ps, {
            transition: c,
            isReversed: v,
            transitionCount: d,
            transitionHeight: f,
            rootRef: s
        });
        const h = g(()=>e.continuous || m.value !== 0)
          , y = g(()=>e.continuous || m.value !== o.items.value.length - 1);
        function S() {
            h.value && o.prev()
        }
        function b() {
            y.value && o.next()
        }
        const C = g(()=>{
            const P = []
              , A = {
                icon: l.value ? e.nextIcon : e.prevIcon,
                class: `v-window__ ${u.value ? "right" : "left"}`,
                onClick: o.prev,
                ariaLabel: i("$vuetify.carousel.prev")
            };
            P.push(h.value ? t.prev ? t.prev({
                props: A
            }) : r(ze, A, null) : r("div", null, null));
            const I = {
                icon: l.value ? e.prevIcon : e.nextIcon,
                class: `v-window__ ${u.value ? "left" : "right"}`,
                onClick: o.next,
                ariaLabel: i("$vuetify.carousel.next")
            };
            return P.push(y.value ? t.next ? t.next({
                props: I
            }) : r(ze, I, null) : r("div", null, null)),
            P
        }
        )
          , V = g(()=>e.touch === !1 ? e.touch : {
            ...{
                left: ()=>{
                    u.value ? S() : b()
                }
                ,
                right: ()=>{
                    u.value ? b() : S()
                }
                ,
                start: A=>{
                    let {originalEvent: I} = A;
                    I.stopPropagation()
                }
            },
            ...e.touch === !0 ? {} : e.touch
        });
        return D(()=>Ve(r(e.tag, {
            ref: s,
            class: ["v-window", {
                "v-window--show-arrows-on-hover": e.showArrows === "hover"
            }, a.value, e.class],
            style: e.style
        }, {
            default: ()=>{
                var P, A;
                return [r("div", {
                    class: "v-window__container",
                    style: {
                        height: f.value
                    }
                }, [(P = t.default) == null ? void 0 : P.call(t, {
                    group: o
                }), e.showArrows !== !1 && r("div", {
                    class: "v-window__controls"
                }, [C.value])]), (A = t.additional) == null ? void 0 : A.call(t, {
                    group: o
                })]
            }
        }), [[Ye("touch"), V.value]])),
        {
            group: o
        }
    }
})
  , Mv = T({
    color: String,
    cycle: Boolean,
    delimiterIcon: {
        type: ne,
        default: "$delimiter"
    },
    height: {
        type: [Number, String],
        default: 500
    },
    hideDelimiters: Boolean,
    hideDelimiterBackground: Boolean,
    interval: {
        type: [Number, String],
        default: 6e3,
        validator: e=>Number(e) > 0
    },
    progress: [Boolean, String],
    verticalDelimiters: [Boolean, String],
    ..._s({
        continuous: !0,
        mandatory: "force",
        showArrows: !0
    })
}, "VCarousel")
  , Ov = M()({
    name: "VCarousel",
    props: Mv(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = ae(e, "modelValue")
          , {t: l} = et()
          , i = U();
        let o = -1;
        Z(a, u),
        Z(()=>e.interval, u),
        Z(()=>e.cycle, v=>{
            v ? u() : window.clearTimeout(o)
        }
        ),
        Ne(s);
        function s() {
            !e.cycle || !i.value || (o = window.setTimeout(i.value.group.next, +e.interval > 0 ? +e.interval : 6e3))
        }
        function u() {
            window.clearTimeout(o),
            window.requestAnimationFrame(s)
        }
        return D(()=>{
            const [v] = qa.filterProps(e);
            return r(qa, K({
                ref: i
            }, v, {
                modelValue: a.value,
                "onUpdate:modelValue": c=>a.value = c,
                class: ["v-carousel", {
                    "v-carousel--hide-delimiter-background": e.hideDelimiterBackground,
                    "v-carousel--vertical-delimiters": e.verticalDelimiters
                }, e.class],
                style: [{
                    height: q(e.height)
                }, e.style]
            }), {
                default: t.default,
                additional: c=>{
                    let {group: d} = c;
                    return r(se, null, [!e.hideDelimiters && r("div", {
                        class: "v-carousel__controls",
                        style: {
                            left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto",
                            right: e.verticalDelimiters === "right" ? 0 : "auto"
                        }
                    }, [d.items.value.length > 0 && r(ge, {
                        defaults: {
                            VBtn: {
                                color: e.color,
                                icon: e.delimiterIcon,
                                size: "x-small",
                                variant: "text"
                            }
                        },
                        scoped: !0
                    }, {
                        default: ()=>[d.items.value.map((f,m)=>{
                            const h = {
                                id: `carousel-item-${f.id}`,
                                "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", m + 1, d.items.value.length),
                                class: [d.isSelected(f.id) && "v-btn--active"],
                                onClick: ()=>d.select(f.id, !0)
                            };
                            return t.item ? t.item({
                                props: h,
                                item: f
                            }) : r(ze, K(f, h), null)
                        }
                        )]
                    })]), e.progress && r(Al, {
                        class: "v-carousel__progress",
                        color: typeof e.progress == "string" ? e.progress : void 0,
                        modelValue: (d.getItemIndex(a.value) + 1) / d.items.value.length * 100
                    }, null)])
                }
                ,
                prev: t.prev,
                next: t.next
            })
        }
        ),
        {}
    }
})
  , As = T({
    reverseTransition: {
        type: [Boolean, String],
        default: void 0
    },
    transition: {
        type: [Boolean, String],
        default: void 0
    },
    ...X(),
    ...cn(),
    ...va()
}, "VWindowItem")
  , Za = M()({
    name: "VWindowItem",
    directives: {
        Touch: Dl
    },
    props: As(),
    emits: {
        "group:selected": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = ye(Ps)
          , l = dn(e, Is)
          , {isBooted: i} = Gt();
        if (!a || !l)
            throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
        const o = Y(!1)
          , s = g(()=>i.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
        function u() {
            !o.value || !a || (o.value = !1,
            a.transitionCount.value > 0 && (a.transitionCount.value -= 1,
            a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)))
        }
        function v() {
            var h;
            o.value || !a || (o.value = !0,
            a.transitionCount.value === 0 && (a.transitionHeight.value = q((h = a.rootRef.value) == null ? void 0 : h.clientHeight)),
            a.transitionCount.value += 1)
        }
        function c() {
            u()
        }
        function d(h) {
            o.value && Se(()=>{
                !s.value || !o.value || !a || (a.transitionHeight.value = q(h.clientHeight))
            }
            )
        }
        const f = g(()=>{
            const h = a.isReversed.value ? e.reverseTransition : e.transition;
            return s.value ? {
                name: typeof h != "string" ? a.transition.value : h,
                onBeforeEnter: v,
                onAfterEnter: u,
                onEnterCancelled: c,
                onBeforeLeave: v,
                onAfterLeave: u,
                onLeaveCancelled: c,
                onEnter: d
            } : !1
        }
        )
          , {hasContent: m} = Ml(e, l.isSelected);
        return D(()=>r(ot, {
            transition: f.value,
            disabled: !i.value
        }, {
            default: ()=>{
                var h;
                return [Ve(r("div", {
                    class: ["v-window-item", l.selectedClass.value, e.class],
                    style: e.style
                }, [m.value && ((h = t.default) == null ? void 0 : h.call(t))]), [[dt, l.isSelected.value]])]
            }
        })),
        {
            groupItem: l
        }
    }
})
  , Fv = T({
    ...wo(),
    ...As()
}, "VCarouselItem")
  , Rv = M()({
    name: "VCarouselItem",
    inheritAttrs: !1,
    props: Fv(),
    setup(e, n) {
        let {slots: t, attrs: a} = n;
        D(()=>{
            const [l] = Dt.filterProps(e)
              , [i] = Za.filterProps(e);
            return r(Za, K({
                class: "v-carousel-item"
            }, i), {
                default: ()=>[r(Dt, K(a, l), t)]
            })
        }
        )
    }
});
const Dv = st("v-code");
const zv = T({
    color: {
        type: Object
    },
    disabled: Boolean,
    dotSize: {
        type: [Number, String],
        default: 10
    },
    height: {
        type: [Number, String],
        default: 150
    },
    width: {
        type: [Number, String],
        default: 300
    },
    ...X()
}, "VColorPickerCanvas")
  , Nv = Qe({
    name: "VColorPickerCanvas",
    props: zv(),
    emits: {
        "update:color": e=>!0,
        "update:position": e=>!0
    },
    setup(e, n) {
        let {emit: t} = n;
        const a = Y(!1)
          , l = Y(!1)
          , i = U({
            x: 0,
            y: 0
        })
          , o = g(()=>{
            const {x: b, y: C} = i.value
              , V = parseInt(e.dotSize, 10) / 2;
            return {
                width: q(e.dotSize),
                height: q(e.dotSize),
                transform: `translate(${q(b - V)}, ${q(C - V)})`
            }
        }
        )
          , s = U()
          , u = Y(parseFloat(e.width))
          , v = Y(parseFloat(e.height))
          , {resizeRef: c} = ct(b=>{
            var P;
            if (!((P = c.value) != null && P.offsetParent))
                return;
            const {width: C, height: V} = b[0].contentRect;
            u.value = C,
            v.value = V
        }
        );
        function d(b, C, V) {
            const {left: P, top: A, width: I, height: x} = V;
            i.value = {
                x: Oe(b - P, 0, I),
                y: Oe(C - A, 0, x)
            }
        }
        function f(b) {
            e.disabled || !s.value || d(b.clientX, b.clientY, s.value.getBoundingClientRect())
        }
        function m(b) {
            b.preventDefault(),
            !e.disabled && (a.value = !0,
            window.addEventListener("mousemove", h),
            window.addEventListener("mouseup", y),
            window.addEventListener("touchmove", h),
            window.addEventListener("touchend", y))
        }
        function h(b) {
            if (e.disabled || !s.value)
                return;
            a.value = !0;
            const C = Or(b);
            d(C.clientX, C.clientY, s.value.getBoundingClientRect())
        }
        function y() {
            window.removeEventListener("mousemove", h),
            window.removeEventListener("mouseup", y),
            window.removeEventListener("touchmove", h),
            window.removeEventListener("touchend", y)
        }
        Z(i, ()=>{
            var V, P;
            if (l.value) {
                l.value = !1;
                return
            }
            if (!s.value)
                return;
            const {x: b, y: C} = i.value;
            t("update:color", {
                h: ((V = e.color) == null ? void 0 : V.h) ?? 0,
                s: Oe(b, 0, u.value) / u.value,
                v: 1 - Oe(C, 0, v.value) / v.value,
                a: ((P = e.color) == null ? void 0 : P.a) ?? 1
            })
        }
        );
        function S() {
            var A;
            if (!s.value)
                return;
            const b = s.value
              , C = b.getContext("2d");
            if (!C)
                return;
            const V = C.createLinearGradient(0, 0, b.width, 0);
            V.addColorStop(0, "hsla(0, 0%, 100%, 1)"),
            V.addColorStop(1, `hsla(${((A = e.color) == null ? void 0 : A.h) ?? 0}, 100%, 50%, 1)`),
            C.fillStyle = V,
            C.fillRect(0, 0, b.width, b.height);
            const P = C.createLinearGradient(0, 0, 0, b.height);
            P.addColorStop(0, "hsla(0, 0%, 100%, 0)"),
            P.addColorStop(1, "hsla(0, 0%, 0%, 1)"),
            C.fillStyle = P,
            C.fillRect(0, 0, b.width, b.height)
        }
        return Z(()=>{
            var b;
            return (b = e.color) == null ? void 0 : b.h
        }
        , S, {
            immediate: !0
        }),
        Z(()=>[u.value, v.value], (b,C)=>{
            S(),
            i.value = {
                x: i.value.x * b[0] / C[0],
                y: i.value.y * b[1] / C[1]
            }
        }
        , {
            flush: "post"
        }),
        Z(()=>e.color, ()=>{
            if (a.value) {
                a.value = !1;
                return
            }
            l.value = !0,
            i.value = e.color ? {
                x: e.color.s * u.value,
                y: (1 - e.color.v) * v.value
            } : {
                x: 0,
                y: 0
            }
        }
        , {
            deep: !0,
            immediate: !0
        }),
        Ne(()=>S()),
        D(()=>r("div", {
            ref: c,
            class: ["v-color-picker-canvas", e.class],
            style: e.style,
            onClick: f,
            onMousedown: m,
            onTouchstart: m
        }, [r("canvas", {
            ref: s,
            width: u.value,
            height: v.value
        }, null), e.color && r("div", {
            class: ["v-color-picker-canvas__dot", {
                "v-color-picker-canvas__dot--disabled": e.disabled
            }],
            style: o.value
        }, null)])),
        {}
    }
});
function Hv(e, n) {
    if (n) {
        const {a: t, ...a} = e;
        return a
    }
    return e
}
function jv(e, n) {
    if (n == null || typeof n == "string") {
        const t = ao(e);
        return e.a === 1 ? t.slice(0, 7) : t
    }
    if (typeof n == "object") {
        let t;
        return Mt(n, ["r", "g", "b"]) ? t = yt(e) : Mt(n, ["h", "s", "l"]) ? t = Ji(e) : Mt(n, ["h", "s", "v"]) && (t = e),
        Hv(t, !Mt(n, ["a"]) && e.a === 1)
    }
    return e
}
const Vn = {
    h: 0,
    s: 0,
    v: 1,
    a: 1
}
  , Ja = {
    inputProps: {
        type: "number",
        min: 0
    },
    inputs: [{
        label: "R",
        max: 255,
        step: 1,
        getValue: e=>Math.round(e.r),
        getColor: (e,n)=>({
            ...e,
            r: Number(n)
        })
    }, {
        label: "G",
        max: 255,
        step: 1,
        getValue: e=>Math.round(e.g),
        getColor: (e,n)=>({
            ...e,
            g: Number(n)
        })
    }, {
        label: "B",
        max: 255,
        step: 1,
        getValue: e=>Math.round(e.b),
        getColor: (e,n)=>({
            ...e,
            b: Number(n)
        })
    }, {
        label: "A",
        max: 1,
        step: .01,
        getValue: e=>{
            let {a: n} = e;
            return n != null ? Math.round(n * 100) / 100 : 1
        }
        ,
        getColor: (e,n)=>({
            ...e,
            a: Number(n)
        })
    }],
    to: yt,
    from: na
};
var Ri;
const Gv = {
    ...Ja,
    inputs: (Ri = Ja.inputs) == null ? void 0 : Ri.slice(0, 3)
}
  , Qa = {
    inputProps: {
        type: "number",
        min: 0
    },
    inputs: [{
        label: "H",
        max: 360,
        step: 1,
        getValue: e=>Math.round(e.h),
        getColor: (e,n)=>({
            ...e,
            h: Number(n)
        })
    }, {
        label: "S",
        max: 1,
        step: .01,
        getValue: e=>Math.round(e.s * 100) / 100,
        getColor: (e,n)=>({
            ...e,
            s: Number(n)
        })
    }, {
        label: "L",
        max: 1,
        step: .01,
        getValue: e=>Math.round(e.l * 100) / 100,
        getColor: (e,n)=>({
            ...e,
            l: Number(n)
        })
    }, {
        label: "A",
        max: 1,
        step: .01,
        getValue: e=>{
            let {a: n} = e;
            return n != null ? Math.round(n * 100) / 100 : 1
        }
        ,
        getColor: (e,n)=>({
            ...e,
            a: Number(n)
        })
    }],
    to: Ji,
    from: gl
}
  , Wv = {
    ...Qa,
    inputs: Qa.inputs.slice(0, 3)
}
  , Bs = {
    inputProps: {
        type: "text"
    },
    inputs: [{
        label: "HEXA",
        getValue: e=>e,
        getColor: (e,n)=>n
    }],
    to: ao,
    from: Xr
}
  , Uv = {
    ...Bs,
    inputs: [{
        label: "HEX",
        getValue: e=>e.slice(0, 7),
        getColor: (e,n)=>n
    }]
}
  , Rt = {
    rgb: Gv,
    rgba: Ja,
    hsl: Wv,
    hsla: Qa,
    hex: Uv,
    hexa: Bs
}
  , Yv = e=>{
    let {label: n, ...t} = e;
    return r("div", {
        class: "v-color-picker-edit__input"
    }, [r("input", t, null), r("span", null, [n])])
}
  , Kv = T({
    color: Object,
    disabled: Boolean,
    mode: {
        type: String,
        default: "rgba",
        validator: e=>Object.keys(Rt).includes(e)
    },
    modes: {
        type: Array,
        default: ()=>Object.keys(Rt),
        validator: e=>Array.isArray(e) && e.every(n=>Object.keys(Rt).includes(n))
    },
    ...X()
}, "VColorPickerEdit")
  , Xv = Qe({
    name: "VColorPickerEdit",
    props: Kv(),
    emits: {
        "update:color": e=>!0,
        "update:mode": e=>!0
    },
    setup(e, n) {
        let {emit: t} = n;
        const a = g(()=>e.modes.map(i=>({
            ...Rt[i],
            name: i
        })))
          , l = g(()=>{
            var s;
            const i = a.value.find(u=>u.name === e.mode);
            if (!i)
                return [];
            const o = e.color ? i.to(e.color) : null;
            return (s = i.inputs) == null ? void 0 : s.map(u=>{
                let {getValue: v, getColor: c, ...d} = u;
                return {
                    ...i.inputProps,
                    ...d,
                    disabled: e.disabled,
                    value: o && v(o),
                    onChange: f=>{
                        const m = f.target;
                        m && t("update:color", i.from(c(o ?? Vn, m.value)))
                    }
                }
            }
            )
        }
        );
        return D(()=>{
            var i;
            return r("div", {
                class: ["v-color-picker-edit", e.class],
                style: e.style
            }, [(i = l.value) == null ? void 0 : i.map(o=>r(Yv, o, null)), a.value.length > 1 && r(ze, {
                icon: "$unfold",
                size: "x-small",
                variant: "plain",
                onClick: ()=>{
                    const o = a.value.findIndex(s=>s.name === e.mode);
                    t("update:mode", a.value[(o + 1) % a.value.length].name)
                }
            }, null)])
        }
        ),
        {}
    }
});
const zl = Symbol.for("vuetify:v-slider");
function el(e, n, t) {
    const a = t === "vertical"
      , l = n.getBoundingClientRect()
      , i = "touches"in e ? e.touches[0] : e;
    return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2)
}
function qv(e, n) {
    return "touches"in e && e.touches.length ? e.touches[0][n] : "changedTouches"in e && e.changedTouches.length ? e.changedTouches[0][n] : e[n]
}
const Ts = T({
    disabled: {
        type: Boolean,
        default: null
    },
    error: Boolean,
    readonly: {
        type: Boolean,
        default: null
    },
    max: {
        type: [Number, String],
        default: 100
    },
    min: {
        type: [Number, String],
        default: 0
    },
    step: {
        type: [Number, String],
        default: 0
    },
    thumbColor: String,
    thumbLabel: {
        type: [Boolean, String],
        default: void 0,
        validator: e=>typeof e == "boolean" || e === "always"
    },
    thumbSize: {
        type: [Number, String],
        default: 20
    },
    showTicks: {
        type: [Boolean, String],
        default: !1,
        validator: e=>typeof e == "boolean" || e === "always"
    },
    ticks: {
        type: [Array, Object]
    },
    tickSize: {
        type: [Number, String],
        default: 2
    },
    color: String,
    trackColor: String,
    trackFillColor: String,
    trackSize: {
        type: [Number, String],
        default: 4
    },
    direction: {
        type: String,
        default: "horizontal",
        validator: e=>["vertical", "horizontal"].includes(e)
    },
    reverse: Boolean,
    ...Ce(),
    ...Ae({
        elevation: 2
    })
}, "Slider")
  , ps = e=>{
    const n = g(()=>parseFloat(e.min))
      , t = g(()=>parseFloat(e.max))
      , a = g(()=>+e.step > 0 ? parseFloat(e.step) : 0)
      , l = g(()=>Math.max(Wl(a.value), Wl(n.value)));
    function i(o) {
        if (o = parseFloat(o),
        a.value <= 0)
            return o;
        const s = Oe(o, n.value, t.value)
          , u = n.value % a.value
          , v = Math.round((s - u) / a.value) * a.value + u;
        return parseFloat(Math.min(v, t.value).toFixed(l.value))
    }
    return {
        min: n,
        max: t,
        step: a,
        decimals: l,
        roundValue: i
    }
}
  , $s = e=>{
    let {props: n, steps: t, onSliderStart: a, onSliderMove: l, onSliderEnd: i, getActiveThumb: o} = e;
    const {isRtl: s} = $e()
      , u = O(n, "reverse")
      , v = g(()=>{
        let N = s.value ? "rtl" : "ltr";
        return n.reverse && (N = N === "rtl" ? "ltr" : "rtl"),
        N
    }
    )
      , {min: c, max: d, step: f, decimals: m, roundValue: h} = t
      , y = g(()=>parseInt(n.thumbSize, 10))
      , S = g(()=>parseInt(n.tickSize, 10))
      , b = g(()=>parseInt(n.trackSize, 10))
      , C = g(()=>(d.value - c.value) / f.value)
      , V = O(n, "disabled")
      , P = g(()=>n.direction === "vertical")
      , A = g(()=>n.error || n.disabled ? void 0 : n.thumbColor ?? n.color)
      , I = g(()=>n.error || n.disabled ? void 0 : n.trackColor ?? n.color)
      , x = g(()=>n.error || n.disabled ? void 0 : n.trackFillColor ?? n.color)
      , k = Y(!1)
      , w = Y(0)
      , _ = U()
      , B = U();
    function p(N) {
        var Ie;
        const ue = n.direction === "vertical"
          , J = ue ? "top" : "left"
          , z = ue ? "height" : "width"
          , ee = ue ? "clientY" : "clientX"
          , {[J]: fe, [z]: ie} = (Ie = _.value) == null ? void 0 : Ie.$el.getBoundingClientRect()
          , te = qv(N, ee);
        let ve = Math.min(Math.max((te - fe - w.value) / ie, 0), 1) || 0;
        return (ue || v.value === "rtl") && (ve = 1 - ve),
        h(c.value + ve * (d.value - c.value))
    }
    const $ = N=>{
        i({
            value: p(N)
        }),
        k.value = !1,
        w.value = 0
    }
      , F = N=>{
        B.value = o(N),
        B.value && (B.value.focus(),
        k.value = !0,
        B.value.contains(N.target) ? w.value = el(N, B.value, n.direction) : (w.value = 0,
        l({
            value: p(N)
        })),
        a({
            value: p(N)
        }))
    }
      , E = {
        passive: !0,
        capture: !0
    };
    function H(N) {
        l({
            value: p(N)
        })
    }
    function G(N) {
        N.stopPropagation(),
        N.preventDefault(),
        $(N),
        window.removeEventListener("mousemove", H, E),
        window.removeEventListener("mouseup", G)
    }
    function R(N) {
        var ue;
        $(N),
        window.removeEventListener("touchmove", H, E),
        (ue = N.target) == null || ue.removeEventListener("touchend", R)
    }
    function j(N) {
        var ue;
        F(N),
        window.addEventListener("touchmove", H, E),
        (ue = N.target) == null || ue.addEventListener("touchend", R, {
            passive: !1
        })
    }
    function L(N) {
        N.preventDefault(),
        F(N),
        window.addEventListener("mousemove", H, E),
        window.addEventListener("mouseup", G, {
            passive: !1
        })
    }
    const W = N=>{
        const ue = (N - c.value) / (d.value - c.value) * 100;
        return Oe(isNaN(ue) ? 0 : ue, 0, 100)
    }
      , Q = O(n, "showTicks")
      , re = g(()=>Q.value ? n.ticks ? Array.isArray(n.ticks) ? n.ticks.map(N=>({
        value: N,
        position: W(N),
        label: N.toString()
    })) : Object.keys(n.ticks).map(N=>({
        value: parseFloat(N),
        position: W(parseFloat(N)),
        label: n.ticks[N]
    })) : C.value !== 1 / 0 ? mt(C.value + 1).map(N=>{
        const ue = c.value + N * f.value;
        return {
            value: ue,
            position: W(ue)
        }
    }
    ) : [] : [])
      , oe = g(()=>re.value.some(N=>{
        let {label: ue} = N;
        return !!ue
    }
    ))
      , de = {
        activeThumbRef: B,
        color: O(n, "color"),
        decimals: m,
        disabled: V,
        direction: O(n, "direction"),
        elevation: O(n, "elevation"),
        hasLabels: oe,
        horizontalDirection: v,
        isReversed: u,
        min: c,
        max: d,
        mousePressed: k,
        numTicks: C,
        onSliderMousedown: L,
        onSliderTouchstart: j,
        parsedTicks: re,
        parseMouseMove: p,
        position: W,
        readonly: O(n, "readonly"),
        rounded: O(n, "rounded"),
        roundValue: h,
        showTicks: Q,
        startOffset: w,
        step: f,
        thumbSize: y,
        thumbColor: A,
        thumbLabel: O(n, "thumbLabel"),
        ticks: O(n, "ticks"),
        tickSize: S,
        trackColor: I,
        trackContainerRef: _,
        trackFillColor: x,
        trackSize: b,
        vertical: P
    };
    return Te(zl, de),
    de
}
  , Zv = T({
    focused: Boolean,
    max: {
        type: Number,
        required: !0
    },
    min: {
        type: Number,
        required: !0
    },
    modelValue: {
        type: Number,
        required: !0
    },
    position: {
        type: Number,
        required: !0
    },
    ripple: {
        type: [Boolean, Object],
        default: !0
    },
    ...X()
}, "VSliderThumb")
  , tl = M()({
    name: "VSliderThumb",
    directives: {
        Ripple: Tt
    },
    props: Zv(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t, emit: a} = n;
        const l = ye(zl)
          , {rtlClasses: i} = $e();
        if (!l)
            throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
        const {thumbColor: o, step: s, vertical: u, disabled: v, thumbSize: c, thumbLabel: d, direction: f, readonly: m, elevation: h, isReversed: y, horizontalDirection: S, mousePressed: b, decimals: C} = l
          , {textColorClasses: V, textColorStyles: P} = Fe(o)
          , {pageup: A, pagedown: I, end: x, home: k, left: w, right: _, down: B, up: p} = Ta
          , $ = [A, I, x, k, w, _, B, p]
          , F = g(()=>s.value ? [1, 2, 3] : [1, 5, 10]);
        function E(G, R) {
            if (!$.includes(G.key))
                return;
            G.preventDefault();
            const j = s.value || .1
              , L = (e.max - e.min) / j;
            if ([w, _, B, p].includes(G.key)) {
                const Q = (S.value === "rtl" ? [w, p] : [_, p]).includes(G.key) ? 1 : -1
                  , re = G.shiftKey ? 2 : G.ctrlKey ? 1 : 0;
                R = R + Q * j * F.value[re]
            } else if (G.key === k)
                R = e.min;
            else if (G.key === x)
                R = e.max;
            else {
                const W = G.key === I ? 1 : -1;
                R = R - W * j * (L > 100 ? L / 10 : 10)
            }
            return Math.max(e.min, Math.min(e.max, R))
        }
        function H(G) {
            const R = E(G, e.modelValue);
            R != null && a("update:modelValue", R)
        }
        return D(()=>{
            const G = q(u.value || y.value ? 100 - e.position : e.position, "%")
              , {elevationClasses: R} = Le(g(()=>v.value ? void 0 : h.value));
            return r("div", {
                class: ["v-slider-thumb", {
                    "v-slider-thumb--focused": e.focused,
                    "v-slider-thumb--pressed": e.focused && b.value
                }, e.class, i.value],
                style: [{
                    "--v-slider-thumb-position": G,
                    "--v-slider-thumb-size": q(c.value)
                }, e.style],
                role: "slider",
                tabindex: v.value ? -1 : 0,
                "aria-valuemin": e.min,
                "aria-valuemax": e.max,
                "aria-valuenow": e.modelValue,
                "aria-readonly": !!m.value,
                "aria-orientation": f.value,
                onKeydown: m.value ? void 0 : H
            }, [r("div", {
                class: ["v-slider-thumb__surface", V.value, R.value],
                style: {
                    ...P.value
                }
            }, null), Ve(r("div", {
                class: ["v-slider-thumb__ripple", V.value],
                style: P.value
            }, null), [[Ye("ripple"), e.ripple, null, {
                circle: !0,
                center: !0
            }]]), r(Co, {
                origin: "bottom center"
            }, {
                default: ()=>{
                    var j;
                    return [Ve(r("div", {
                        class: "v-slider-thumb__label-container"
                    }, [r("div", {
                        class: ["v-slider-thumb__label"]
                    }, [r("div", null, [((j = t["thumb-label"]) == null ? void 0 : j.call(t, {
                        modelValue: e.modelValue
                    })) ?? e.modelValue.toFixed(s.value ? C.value : 1)])])]), [[dt, d.value && e.focused || d.value === "always"]])]
                }
            })])
        }
        ),
        {}
    }
});
const Jv = T({
    start: {
        type: Number,
        required: !0
    },
    stop: {
        type: Number,
        required: !0
    },
    ...X()
}, "VSliderTrack")
  , Es = M()({
    name: "VSliderTrack",
    props: Jv(),
    emits: {},
    setup(e, n) {
        let {slots: t} = n;
        const a = ye(zl);
        if (!a)
            throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
        const {color: l, horizontalDirection: i, parsedTicks: o, rounded: s, showTicks: u, tickSize: v, trackColor: c, trackFillColor: d, trackSize: f, vertical: m, min: h, max: y} = a
          , {roundedClasses: S} = we(s)
          , {backgroundColorClasses: b, backgroundColorStyles: C} = Pe(d)
          , {backgroundColorClasses: V, backgroundColorStyles: P} = Pe(c)
          , A = g(()=>`inset-${m.value ? "block-end" : "inline-start"}`)
          , I = g(()=>m.value ? "height" : "width")
          , x = g(()=>({
            [A.value]: "0%",
            [I.value]: "100%"
        }))
          , k = g(()=>e.stop - e.start)
          , w = g(()=>({
            [A.value]: q(e.start, "%"),
            [I.value]: q(k.value, "%")
        }))
          , _ = g(()=>u.value ? (m.value ? o.value.slice().reverse() : o.value).map((p,$)=>{
            var H;
            const F = m.value ? "bottom" : "margin-inline-start"
              , E = p.value !== h.value && p.value !== y.value ? q(p.position, "%") : void 0;
            return r("div", {
                key: p.value,
                class: ["v-slider-track__tick", {
                    "v-slider-track__tick--filled": p.position >= e.start && p.position <= e.stop,
                    "v-slider-track__tick--first": p.value === h.value,
                    "v-slider-track__tick--last": p.value === y.value
                }],
                style: {
                    [F]: E
                }
            }, [(p.label || t["tick-label"]) && r("div", {
                class: "v-slider-track__tick-label"
            }, [((H = t["tick-label"]) == null ? void 0 : H.call(t, {
                tick: p,
                index: $
            })) ?? p.label])])
        }
        ) : []);
        return D(()=>r("div", {
            class: ["v-slider-track", S.value, e.class],
            style: [{
                "--v-slider-track-size": q(f.value),
                "--v-slider-tick-size": q(v.value),
                direction: m.value ? void 0 : i.value
            }, e.style]
        }, [r("div", {
            class: ["v-slider-track__background", V.value, {
                "v-slider-track__background--opacity": !!l.value || !d.value
            }],
            style: {
                ...x.value,
                ...P.value
            }
        }, null), r("div", {
            class: ["v-slider-track__fill", b.value],
            style: {
                ...w.value,
                ...C.value
            }
        }, null), u.value && r("div", {
            class: ["v-slider-track__ticks", {
                "v-slider-track__ticks--always-show": u.value === "always"
            }]
        }, [_.value])])),
        {}
    }
})
  , Qv = T({
    ...ua(),
    ...Ts(),
    ...wt(),
    modelValue: {
        type: [Number, String],
        default: 0
    }
}, "VSlider")
  , nl = M()({
    name: "VSlider",
    props: Qv(),
    emits: {
        "update:focused": e=>!0,
        "update:modelValue": e=>!0,
        start: e=>!0,
        end: e=>!0
    },
    setup(e, n) {
        let {slots: t, emit: a} = n;
        const l = U()
          , {rtlClasses: i} = $e()
          , o = ps(e)
          , s = ae(e, "modelValue", void 0, I=>o.roundValue(I ?? o.min.value))
          , {min: u, max: v, mousePressed: c, roundValue: d, onSliderMousedown: f, onSliderTouchstart: m, trackContainerRef: h, position: y, hasLabels: S, readonly: b} = $s({
            props: e,
            steps: o,
            onSliderStart: ()=>{
                a("start", s.value)
            }
            ,
            onSliderEnd: I=>{
                let {value: x} = I;
                const k = d(x);
                s.value = k,
                a("end", k)
            }
            ,
            onSliderMove: I=>{
                let {value: x} = I;
                return s.value = d(x)
            }
            ,
            getActiveThumb: ()=>{
                var I;
                return (I = l.value) == null ? void 0 : I.$el
            }
        })
          , {isFocused: C, focus: V, blur: P} = pt(e)
          , A = g(()=>y(s.value));
        return D(()=>{
            const [I,x] = Ee.filterProps(e)
              , k = !!(e.label || t.label || t.prepend);
            return r(Ee, K({
                class: ["v-slider", {
                    "v-slider--has-labels": !!t["tick-label"] || S.value,
                    "v-slider--focused": C.value,
                    "v-slider--pressed": c.value,
                    "v-slider--disabled": e.disabled
                }, i.value, e.class],
                style: e.style
            }, I, {
                focused: C.value
            }), {
                ...t,
                prepend: k ? w=>{
                    var _, B;
                    return r(se, null, [((_ = t.label) == null ? void 0 : _.call(t, w)) ?? e.label ? r(gn, {
                        id: w.id.value,
                        class: "v-slider__label",
                        text: e.label
                    }, null) : void 0, (B = t.prepend) == null ? void 0 : B.call(t, w)])
                }
                : void 0,
                default: w=>{
                    let {id: _, messagesId: B} = w;
                    return r("div", {
                        class: "v-slider__container",
                        onMousedown: b.value ? void 0 : f,
                        onTouchstartPassive: b.value ? void 0 : m
                    }, [r("input", {
                        id: _.value,
                        name: e.name || _.value,
                        disabled: !!e.disabled,
                        readonly: !!e.readonly,
                        tabindex: "-1",
                        value: s.value
                    }, null), r(Es, {
                        ref: h,
                        start: 0,
                        stop: A.value
                    }, {
                        "tick-label": t["tick-label"]
                    }), r(tl, {
                        ref: l,
                        "aria-describedby": B.value,
                        focused: C.value,
                        min: u.value,
                        max: v.value,
                        modelValue: s.value,
                        "onUpdate:modelValue": p=>s.value = p,
                        position: A.value,
                        elevation: e.elevation,
                        onFocus: V,
                        onBlur: P
                    }, {
                        "thumb-label": t["thumb-label"]
                    })])
                }
            })
        }
        ),
        {}
    }
})
  , ef = T({
    color: {
        type: Object
    },
    disabled: Boolean,
    hideAlpha: Boolean,
    ...X()
}, "VColorPickerPreview")
  , tf = Qe({
    name: "VColorPickerPreview",
    props: ef(),
    emits: {
        "update:color": e=>!0
    },
    setup(e, n) {
        let {emit: t} = n;
        return D(()=>{
            var a, l;
            return r("div", {
                class: ["v-color-picker-preview", {
                    "v-color-picker-preview--hide-alpha": e.hideAlpha
                }, e.class],
                style: e.style
            }, [r("div", {
                class: "v-color-picker-preview__dot"
            }, [r("div", {
                style: {
                    background: eo(e.color ?? Vn)
                }
            }, null)]), r("div", {
                class: "v-color-picker-preview__sliders"
            }, [r(nl, {
                class: "v-color-picker-preview__track v-color-picker-preview__hue",
                modelValue: (a = e.color) == null ? void 0 : a.h,
                "onUpdate:modelValue": i=>t("update:color", {
                    ...e.color ?? Vn,
                    h: i
                }),
                step: 0,
                min: 0,
                max: 360,
                disabled: e.disabled,
                thumbSize: 14,
                trackSize: 8,
                trackFillColor: "white",
                hideDetails: !0
            }, null), !e.hideAlpha && r(nl, {
                class: "v-color-picker-preview__track v-color-picker-preview__alpha",
                modelValue: ((l = e.color) == null ? void 0 : l.a) ?? 1,
                "onUpdate:modelValue": i=>t("update:color", {
                    ...e.color ?? Vn,
                    a: i
                }),
                step: 1 / 256,
                min: 0,
                max: 1,
                disabled: e.disabled,
                thumbSize: 14,
                trackSize: 8,
                trackFillColor: "white",
                hideDetails: !0
            }, null)])])
        }
        ),
        {}
    }
});
const nf = Object.freeze({
    base: "#f44336",
    lighten5: "#ffebee",
    lighten4: "#ffcdd2",
    lighten3: "#ef9a9a",
    lighten2: "#e57373",
    lighten1: "#ef5350",
    darken1: "#e53935",
    darken2: "#d32f2f",
    darken3: "#c62828",
    darken4: "#b71c1c",
    accent1: "#ff8a80",
    accent2: "#ff5252",
    accent3: "#ff1744",
    accent4: "#d50000"
})
  , af = Object.freeze({
    base: "#e91e63",
    lighten5: "#fce4ec",
    lighten4: "#f8bbd0",
    lighten3: "#f48fb1",
    lighten2: "#f06292",
    lighten1: "#ec407a",
    darken1: "#d81b60",
    darken2: "#c2185b",
    darken3: "#ad1457",
    darken4: "#880e4f",
    accent1: "#ff80ab",
    accent2: "#ff4081",
    accent3: "#f50057",
    accent4: "#c51162"
})
  , lf = Object.freeze({
    base: "#9c27b0",
    lighten5: "#f3e5f5",
    lighten4: "#e1bee7",
    lighten3: "#ce93d8",
    lighten2: "#ba68c8",
    lighten1: "#ab47bc",
    darken1: "#8e24aa",
    darken2: "#7b1fa2",
    darken3: "#6a1b9a",
    darken4: "#4a148c",
    accent1: "#ea80fc",
    accent2: "#e040fb",
    accent3: "#d500f9",
    accent4: "#aa00ff"
})
  , of = Object.freeze({
    base: "#673ab7",
    lighten5: "#ede7f6",
    lighten4: "#d1c4e9",
    lighten3: "#b39ddb",
    lighten2: "#9575cd",
    lighten1: "#7e57c2",
    darken1: "#5e35b1",
    darken2: "#512da8",
    darken3: "#4527a0",
    darken4: "#311b92",
    accent1: "#b388ff",
    accent2: "#7c4dff",
    accent3: "#651fff",
    accent4: "#6200ea"
})
  , sf = Object.freeze({
    base: "#3f51b5",
    lighten5: "#e8eaf6",
    lighten4: "#c5cae9",
    lighten3: "#9fa8da",
    lighten2: "#7986cb",
    lighten1: "#5c6bc0",
    darken1: "#3949ab",
    darken2: "#303f9f",
    darken3: "#283593",
    darken4: "#1a237e",
    accent1: "#8c9eff",
    accent2: "#536dfe",
    accent3: "#3d5afe",
    accent4: "#304ffe"
})
  , rf = Object.freeze({
    base: "#2196f3",
    lighten5: "#e3f2fd",
    lighten4: "#bbdefb",
    lighten3: "#90caf9",
    lighten2: "#64b5f6",
    lighten1: "#42a5f5",
    darken1: "#1e88e5",
    darken2: "#1976d2",
    darken3: "#1565c0",
    darken4: "#0d47a1",
    accent1: "#82b1ff",
    accent2: "#448aff",
    accent3: "#2979ff",
    accent4: "#2962ff"
})
  , uf = Object.freeze({
    base: "#03a9f4",
    lighten5: "#e1f5fe",
    lighten4: "#b3e5fc",
    lighten3: "#81d4fa",
    lighten2: "#4fc3f7",
    lighten1: "#29b6f6",
    darken1: "#039be5",
    darken2: "#0288d1",
    darken3: "#0277bd",
    darken4: "#01579b",
    accent1: "#80d8ff",
    accent2: "#40c4ff",
    accent3: "#00b0ff",
    accent4: "#0091ea"
})
  , cf = Object.freeze({
    base: "#00bcd4",
    lighten5: "#e0f7fa",
    lighten4: "#b2ebf2",
    lighten3: "#80deea",
    lighten2: "#4dd0e1",
    lighten1: "#26c6da",
    darken1: "#00acc1",
    darken2: "#0097a7",
    darken3: "#00838f",
    darken4: "#006064",
    accent1: "#84ffff",
    accent2: "#18ffff",
    accent3: "#00e5ff",
    accent4: "#00b8d4"
})
  , df = Object.freeze({
    base: "#009688",
    lighten5: "#e0f2f1",
    lighten4: "#b2dfdb",
    lighten3: "#80cbc4",
    lighten2: "#4db6ac",
    lighten1: "#26a69a",
    darken1: "#00897b",
    darken2: "#00796b",
    darken3: "#00695c",
    darken4: "#004d40",
    accent1: "#a7ffeb",
    accent2: "#64ffda",
    accent3: "#1de9b6",
    accent4: "#00bfa5"
})
  , vf = Object.freeze({
    base: "#4caf50",
    lighten5: "#e8f5e9",
    lighten4: "#c8e6c9",
    lighten3: "#a5d6a7",
    lighten2: "#81c784",
    lighten1: "#66bb6a",
    darken1: "#43a047",
    darken2: "#388e3c",
    darken3: "#2e7d32",
    darken4: "#1b5e20",
    accent1: "#b9f6ca",
    accent2: "#69f0ae",
    accent3: "#00e676",
    accent4: "#00c853"
})
  , ff = Object.freeze({
    base: "#8bc34a",
    lighten5: "#f1f8e9",
    lighten4: "#dcedc8",
    lighten3: "#c5e1a5",
    lighten2: "#aed581",
    lighten1: "#9ccc65",
    darken1: "#7cb342",
    darken2: "#689f38",
    darken3: "#558b2f",
    darken4: "#33691e",
    accent1: "#ccff90",
    accent2: "#b2ff59",
    accent3: "#76ff03",
    accent4: "#64dd17"
})
  , mf = Object.freeze({
    base: "#cddc39",
    lighten5: "#f9fbe7",
    lighten4: "#f0f4c3",
    lighten3: "#e6ee9c",
    lighten2: "#dce775",
    lighten1: "#d4e157",
    darken1: "#c0ca33",
    darken2: "#afb42b",
    darken3: "#9e9d24",
    darken4: "#827717",
    accent1: "#f4ff81",
    accent2: "#eeff41",
    accent3: "#c6ff00",
    accent4: "#aeea00"
})
  , gf = Object.freeze({
    base: "#ffeb3b",
    lighten5: "#fffde7",
    lighten4: "#fff9c4",
    lighten3: "#fff59d",
    lighten2: "#fff176",
    lighten1: "#ffee58",
    darken1: "#fdd835",
    darken2: "#fbc02d",
    darken3: "#f9a825",
    darken4: "#f57f17",
    accent1: "#ffff8d",
    accent2: "#ffff00",
    accent3: "#ffea00",
    accent4: "#ffd600"
})
  , hf = Object.freeze({
    base: "#ffc107",
    lighten5: "#fff8e1",
    lighten4: "#ffecb3",
    lighten3: "#ffe082",
    lighten2: "#ffd54f",
    lighten1: "#ffca28",
    darken1: "#ffb300",
    darken2: "#ffa000",
    darken3: "#ff8f00",
    darken4: "#ff6f00",
    accent1: "#ffe57f",
    accent2: "#ffd740",
    accent3: "#ffc400",
    accent4: "#ffab00"
})
  , yf = Object.freeze({
    base: "#ff9800",
    lighten5: "#fff3e0",
    lighten4: "#ffe0b2",
    lighten3: "#ffcc80",
    lighten2: "#ffb74d",
    lighten1: "#ffa726",
    darken1: "#fb8c00",
    darken2: "#f57c00",
    darken3: "#ef6c00",
    darken4: "#e65100",
    accent1: "#ffd180",
    accent2: "#ffab40",
    accent3: "#ff9100",
    accent4: "#ff6d00"
})
  , bf = Object.freeze({
    base: "#ff5722",
    lighten5: "#fbe9e7",
    lighten4: "#ffccbc",
    lighten3: "#ffab91",
    lighten2: "#ff8a65",
    lighten1: "#ff7043",
    darken1: "#f4511e",
    darken2: "#e64a19",
    darken3: "#d84315",
    darken4: "#bf360c",
    accent1: "#ff9e80",
    accent2: "#ff6e40",
    accent3: "#ff3d00",
    accent4: "#dd2c00"
})
  , Sf = Object.freeze({
    base: "#795548",
    lighten5: "#efebe9",
    lighten4: "#d7ccc8",
    lighten3: "#bcaaa4",
    lighten2: "#a1887f",
    lighten1: "#8d6e63",
    darken1: "#6d4c41",
    darken2: "#5d4037",
    darken3: "#4e342e",
    darken4: "#3e2723"
})
  , Cf = Object.freeze({
    base: "#607d8b",
    lighten5: "#eceff1",
    lighten4: "#cfd8dc",
    lighten3: "#b0bec5",
    lighten2: "#90a4ae",
    lighten1: "#78909c",
    darken1: "#546e7a",
    darken2: "#455a64",
    darken3: "#37474f",
    darken4: "#263238"
})
  , kf = Object.freeze({
    base: "#9e9e9e",
    lighten5: "#fafafa",
    lighten4: "#f5f5f5",
    lighten3: "#eeeeee",
    lighten2: "#e0e0e0",
    lighten1: "#bdbdbd",
    darken1: "#757575",
    darken2: "#616161",
    darken3: "#424242",
    darken4: "#212121"
})
  , Vf = Object.freeze({
    black: "#000000",
    white: "#ffffff",
    transparent: "#ffffff00"
})
  , wf = Object.freeze({
    red: nf,
    pink: af,
    purple: lf,
    deepPurple: of,
    indigo: sf,
    blue: rf,
    lightBlue: uf,
    cyan: cf,
    teal: df,
    green: vf,
    lightGreen: ff,
    lime: mf,
    yellow: gf,
    amber: hf,
    orange: yf,
    deepOrange: bf,
    brown: Sf,
    blueGrey: Cf,
    grey: kf,
    shades: Vf
})
  , xf = T({
    swatches: {
        type: Array,
        default: ()=>Pf(wf)
    },
    disabled: Boolean,
    color: Object,
    maxHeight: [Number, String],
    ...X()
}, "VColorPickerSwatches");
function Pf(e) {
    return Object.keys(e).map(n=>{
        const t = e[n];
        return t.base ? [t.base, t.darken4, t.darken3, t.darken2, t.darken1, t.lighten1, t.lighten2, t.lighten3, t.lighten4, t.lighten5] : [t.black, t.white, t.transparent]
    }
    )
}
const If = Qe({
    name: "VColorPickerSwatches",
    props: xf(),
    emits: {
        "update:color": e=>!0
    },
    setup(e, n) {
        let {emit: t} = n;
        return D(()=>r("div", {
            class: ["v-color-picker-swatches", e.class],
            style: [{
                maxHeight: q(e.maxHeight)
            }, e.style]
        }, [r("div", null, [e.swatches.map(a=>r("div", {
            class: "v-color-picker-swatches__swatch"
        }, [a.map(l=>{
            const i = gt(l)
              , o = na(i)
              , s = Qi(i);
            return r("div", {
                class: "v-color-picker-swatches__color",
                onClick: ()=>o && t("update:color", o)
            }, [r("div", {
                style: {
                    background: s
                }
            }, [e.color && Nt(e.color, o) ? r(he, {
                size: "x-small",
                icon: "$success",
                color: Qr(l, "#FFFFFF") > 2 ? "white" : "black"
            }, null) : void 0])])
        }
        )]))])])),
        {}
    }
});
const Ls = T({
    color: String,
    ...Xe(),
    ...X(),
    ...tt(),
    ...Ae(),
    ...At(),
    ...fn(),
    ...Ce(),
    ...le(),
    ...ce()
}, "VSheet")
  , al = M()({
    name: "VSheet",
    props: Ls(),
    setup(e, n) {
        let {slots: t} = n;
        const {themeClasses: a} = me(e)
          , {backgroundColorClasses: l, backgroundColorStyles: i} = Pe(O(e, "color"))
          , {borderClasses: o} = at(e)
          , {dimensionStyles: s} = nt(e)
          , {elevationClasses: u} = Le(e)
          , {locationStyles: v} = Bt(e)
          , {positionClasses: c} = mn(e)
          , {roundedClasses: d} = we(e);
        return D(()=>r(e.tag, {
            class: ["v-sheet", a.value, l.value, o.value, u.value, c.value, d.value, e.class],
            style: [i.value, s.value, v.value, e.style]
        }, t)),
        {}
    }
})
  , _f = T({
    canvasHeight: {
        type: [String, Number],
        default: 150
    },
    disabled: Boolean,
    dotSize: {
        type: [Number, String],
        default: 10
    },
    hideCanvas: Boolean,
    hideSliders: Boolean,
    hideInputs: Boolean,
    mode: {
        type: String,
        default: "rgba",
        validator: e=>Object.keys(Rt).includes(e)
    },
    modes: {
        type: Array,
        default: ()=>Object.keys(Rt),
        validator: e=>Array.isArray(e) && e.every(n=>Object.keys(Rt).includes(n))
    },
    showSwatches: Boolean,
    swatches: Array,
    swatchesMaxHeight: {
        type: [Number, String],
        default: 150
    },
    modelValue: {
        type: [Object, String]
    },
    ...vt(Ls({
        width: 300
    }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"])
}, "VColorPicker")
  , Af = Qe({
    name: "VColorPicker",
    props: _f(),
    emits: {
        "update:modelValue": e=>!0,
        "update:mode": e=>!0
    },
    setup(e) {
        const n = ae(e, "mode")
          , t = U(null)
          , a = ae(e, "modelValue", void 0, o=>{
            if (o == null || o === "")
                return null;
            let s;
            try {
                s = na(gt(o))
            } catch {
                return null
            }
            return t.value && (s = {
                ...s,
                h: t.value.h
            },
            t.value = null),
            s
        }
        , o=>o ? jv(o, e.modelValue) : null)
          , {rtlClasses: l} = $e()
          , i = o=>{
            a.value = o,
            t.value = o
        }
        ;
        return Ne(()=>{
            e.modes.includes(n.value) || (n.value = e.modes[0])
        }
        ),
        xe({
            VSlider: {
                color: void 0,
                trackColor: void 0,
                trackFillColor: void 0
            }
        }),
        D(()=>{
            const [o] = al.filterProps(e);
            return r(al, K({
                rounded: e.rounded,
                elevation: e.elevation,
                theme: e.theme,
                class: ["v-color-picker", l.value, e.class],
                style: [{
                    "--v-color-picker-color-hsv": eo({
                        ...a.value ?? Vn,
                        a: 1
                    })
                }, e.style]
            }, o, {
                maxWidth: e.width
            }), {
                default: ()=>[!e.hideCanvas && r(Nv, {
                    key: "canvas",
                    color: a.value,
                    "onUpdate:color": i,
                    disabled: e.disabled,
                    dotSize: e.dotSize,
                    width: e.width,
                    height: e.canvasHeight
                }, null), (!e.hideSliders || !e.hideInputs) && r("div", {
                    key: "controls",
                    class: "v-color-picker__controls"
                }, [!e.hideSliders && r(tf, {
                    key: "preview",
                    color: a.value,
                    "onUpdate:color": i,
                    hideAlpha: !n.value.endsWith("a"),
                    disabled: e.disabled
                }, null), !e.hideInputs && r(Xv, {
                    key: "edit",
                    modes: e.modes,
                    mode: n.value,
                    "onUpdate:mode": s=>n.value = s,
                    color: a.value,
                    "onUpdate:color": i,
                    disabled: e.disabled
                }, null)]), e.showSwatches && r(If, {
                    key: "swatches",
                    color: a.value,
                    "onUpdate:color": i,
                    maxHeight: e.swatchesMaxHeight,
                    swatches: e.swatches,
                    disabled: e.disabled
                }, null)]
            })
        }
        ),
        {}
    }
});
function Bf(e, n, t) {
    if (n == null)
        return e;
    if (Array.isArray(n))
        throw new Error("Multiple matches is not implemented");
    return typeof n == "number" && ~n ? r(se, null, [r("span", {
        class: "v-combobox__unmask"
    }, [e.substr(0, n)]), r("span", {
        class: "v-combobox__mask"
    }, [e.substr(n, t)]), r("span", {
        class: "v-combobox__unmask"
    }, [e.substr(n + t)])]) : e
}
const Tf = T({
    autoSelectFirst: {
        type: [Boolean, String]
    },
    delimiters: Array,
    ...ms({
        filterKeys: ["title"]
    }),
    ...Rl({
        hideNoData: !0,
        returnObject: !0
    }),
    ...vt(ha({
        modelValue: null
    }), ["validationValue", "dirty", "appendInnerIcon"]),
    ...kt({
        transition: !1
    })
}, "VCombobox")
  , pf = M()({
    name: "VCombobox",
    props: Tf(),
    emits: {
        "update:focused": e=>!0,
        "update:modelValue": e=>!0,
        "update:search": e=>!0,
        "update:menu": e=>!0
    },
    setup(e, n) {
        var J;
        let {emit: t, slots: a} = n;
        const {t: l} = et()
          , i = U()
          , o = Y(!1)
          , s = Y(!0)
          , u = Y(!1)
          , v = U()
          , c = ae(e, "menu")
          , d = g({
            get: ()=>c.value,
            set: z=>{
                var ee;
                c.value && !z && ((ee = v.value) != null && ee.ΨopenChildren) || (c.value = z)
            }
        })
          , f = Y(-1);
        let m = !1;
        const h = g(()=>{
            var z;
            return (z = i.value) == null ? void 0 : z.color
        }
        )
          , {items: y, transformIn: S, transformOut: b} = Ll(e)
          , {textColorClasses: C, textColorStyles: V} = Fe(h)
          , P = ae(e, "modelValue", [], z=>S(Je(z)), z=>{
            const ee = b(z);
            return e.multiple ? ee : ee[0] ?? null
        }
        )
          , A = ca()
          , I = Y(e.multiple ? "" : ((J = P.value[0]) == null ? void 0 : J.title) ?? "")
          , x = g({
            get: ()=>I.value,
            set: z=>{
                var ee;
                if (I.value = z,
                e.multiple || (P.value = [Jt(e, z)]),
                z && e.multiple && ((ee = e.delimiters) != null && ee.length)) {
                    const fe = z.split(new RegExp(`(?:${e.delimiters.join("|")})+`));
                    fe.length > 1 && (fe.forEach(ie=>{
                        ie = ie.trim(),
                        ie && oe(Jt(e, ie))
                    }
                    ),
                    I.value = "")
                }
                z || (f.value = -1),
                s.value = !z
            }
        });
        Z(I, z=>{
            m ? Se(()=>m = !1) : o.value && !d.value && (d.value = !0),
            t("update:search", z)
        }
        ),
        Z(P, z=>{
            var ee;
            e.multiple || (I.value = ((ee = z[0]) == null ? void 0 : ee.title) ?? "")
        }
        );
        const {filteredItems: k, getMatches: w} = gs(e, y, ()=>s.value ? "" : x.value)
          , _ = g(()=>P.value.map(z=>y.value.find(ee=>{
            const fe = Me(ee.raw, e.itemValue)
              , ie = Me(z.raw, e.itemValue);
            return fe === void 0 || ie === void 0 ? !1 : e.returnObject ? e.valueComparator(fe, ie) : e.valueComparator(ee.value, z.value)
        }
        ) || z))
          , B = g(()=>e.hideSelected ? k.value.filter(z=>!_.value.some(ee=>ee.value === z.value)) : k.value)
          , p = g(()=>_.value.map(z=>z.props.value))
          , $ = g(()=>_.value[f.value])
          , F = g(()=>{
            var ee;
            return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && x.value === ((ee = B.value[0]) == null ? void 0 : ee.title)) && B.value.length > 0 && !s.value && !u.value
        }
        )
          , E = g(()=>e.hideNoData && !y.value.length || e.readonly || (A == null ? void 0 : A.isReadonly.value))
          , H = U()
          , {onListScroll: G, onListKeydown: R} = Fl(H, i);
        function j(z) {
            m = !0,
            e.openOnClear && (d.value = !0)
        }
        function L() {
            E.value || (d.value = !0)
        }
        function W(z) {
            E.value || (o.value && (z.preventDefault(),
            z.stopPropagation()),
            d.value = !d.value)
        }
        function Q(z) {
            var ie;
            if (e.readonly || A != null && A.isReadonly.value)
                return;
            const ee = i.value.selectionStart
              , fe = p.value.length;
            if ((f.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(z.key)) && z.preventDefault(),
            ["Enter", "ArrowDown"].includes(z.key) && (d.value = !0),
            ["Escape"].includes(z.key) && (d.value = !1),
            ["Enter", "Escape", "Tab"].includes(z.key) && (F.value && ["Enter", "Tab"].includes(z.key) && oe(k.value[0]),
            s.value = !0),
            z.key === "ArrowDown" && F.value && ((ie = H.value) == null || ie.focus("next")),
            !!e.multiple) {
                if (["Backspace", "Delete"].includes(z.key)) {
                    if (f.value < 0) {
                        z.key === "Backspace" && !x.value && (f.value = fe - 1);
                        return
                    }
                    const te = f.value;
                    $.value && oe($.value),
                    f.value = te >= fe - 1 ? fe - 2 : te
                }
                if (z.key === "ArrowLeft") {
                    if (f.value < 0 && ee > 0)
                        return;
                    const te = f.value > -1 ? f.value - 1 : fe - 1;
                    _.value[te] ? f.value = te : (f.value = -1,
                    i.value.setSelectionRange(x.value.length, x.value.length))
                }
                if (z.key === "ArrowRight") {
                    if (f.value < 0)
                        return;
                    const te = f.value + 1;
                    _.value[te] ? f.value = te : (f.value = -1,
                    i.value.setSelectionRange(0, 0))
                }
                z.key === "Enter" && x.value && (oe(Jt(e, x.value)),
                x.value = "")
            }
        }
        function re() {
            var z;
            o.value && (s.value = !0,
            (z = i.value) == null || z.focus())
        }
        function oe(z) {
            if (e.multiple) {
                const ee = p.value.findIndex(fe=>e.valueComparator(fe, z.value));
                if (ee === -1)
                    P.value = [...P.value, z];
                else {
                    const fe = [...P.value];
                    fe.splice(ee, 1),
                    P.value = fe
                }
                x.value = ""
            } else
                P.value = [z],
                I.value = z.title,
                Se(()=>{
                    d.value = !1,
                    s.value = !0
                }
                )
        }
        function de(z) {
            o.value = !0,
            setTimeout(()=>{
                u.value = !0
            }
            )
        }
        function N(z) {
            u.value = !1
        }
        function ue(z) {
            (z == null || z === "" && !e.multiple) && (P.value = [])
        }
        return Z(k, z=>{
            !z.length && e.hideNoData && (d.value = !1)
        }
        ),
        Z(o, (z,ee)=>{
            z || z === ee || (f.value = -1,
            d.value = !1,
            F.value && !u.value && !_.value.some(fe=>{
                let {value: ie} = fe;
                return ie === B.value[0].value
            }
            ) ? oe(B.value[0]) : e.multiple && x.value && (P.value = [...P.value, Jt(e, x.value)],
            x.value = ""))
        }
        ),
        D(()=>{
            const z = !!(e.chips || a.chip)
              , ee = !!(!e.hideNoData || B.value.length || a["prepend-item"] || a["append-item"] || a["no-data"])
              , fe = P.value.length > 0
              , [ie] = zt.filterProps(e);
            return r(zt, K({
                ref: i
            }, ie, {
                modelValue: x.value,
                "onUpdate:modelValue": [te=>x.value = te, ue],
                focused: o.value,
                "onUpdate:focused": te=>o.value = te,
                validationValue: P.externalValue,
                dirty: fe,
                class: ["v-combobox", {
                    "v-combobox--active-menu": d.value,
                    "v-combobox--chips": !!e.chips,
                    "v-combobox--selection-slot": !!a.selection,
                    "v-combobox--selecting-index": f.value > -1,
                    [`v-combobox--${e.multiple ? "multiple" : "single"}`]: !0
                }, e.class],
                style: e.style,
                readonly: e.readonly,
                placeholder: fe ? void 0 : e.placeholder,
                "onClick:clear": j,
                "onMousedown:control": L,
                onKeydown: Q
            }), {
                ...a,
                default: ()=>r(se, null, [r(fa, K({
                    ref: v,
                    modelValue: d.value,
                    "onUpdate:modelValue": te=>d.value = te,
                    activator: "parent",
                    contentClass: "v-combobox__content",
                    disabled: E.value,
                    eager: e.eager,
                    maxHeight: 310,
                    openOnClick: !1,
                    closeOnContentClick: !1,
                    transition: e.transition,
                    onAfterLeave: re
                }, e.menuProps), {
                    default: ()=>[ee && r(da, {
                        ref: H,
                        selected: p.value,
                        selectStrategy: e.multiple ? "independent" : "single-independent",
                        onMousedown: te=>te.preventDefault(),
                        onKeydown: R,
                        onFocusin: de,
                        onFocusout: N,
                        onScrollPassive: G,
                        tabindex: "-1",
                        color: e.itemColor ?? e.color
                    }, {
                        default: ()=>{
                            var te, ve, Ie;
                            return [(te = a["prepend-item"]) == null ? void 0 : te.call(a), !B.value.length && !e.hideNoData && (((ve = a["no-data"]) == null ? void 0 : ve.call(a)) ?? r(bt, {
                                title: l(e.noDataText)
                            }, null)), r(ya, {
                                renderless: !0,
                                items: B.value
                            }, {
                                default: _e=>{
                                    var $t;
                                    let {item: be, index: He, itemRef: Dn} = _e;
                                    const yn = K(be.props, {
                                        ref: Dn,
                                        key: He,
                                        active: F.value && He === 0 ? !0 : void 0,
                                        onClick: ()=>oe(be)
                                    });
                                    return (($t = a.item) == null ? void 0 : $t.call(a, {
                                        item: be,
                                        index: He,
                                        props: yn
                                    })) ?? r(bt, yn, {
                                        prepend: ft=>{
                                            let {isSelected: zn} = ft;
                                            return r(se, null, [e.multiple && !e.hideSelected ? r(ln, {
                                                key: be.value,
                                                modelValue: zn,
                                                ripple: !1,
                                                tabindex: "-1"
                                            }, null) : void 0, be.props.prependIcon && r(he, {
                                                icon: be.props.prependIcon
                                            }, null)])
                                        }
                                        ,
                                        title: ()=>{
                                            var ft, zn;
                                            return s.value ? be.title : Bf(be.title, (ft = w(be)) == null ? void 0 : ft.title, ((zn = x.value) == null ? void 0 : zn.length) ?? 0)
                                        }
                                    })
                                }
                            }), (Ie = a["append-item"]) == null ? void 0 : Ie.call(a)]
                        }
                    })]
                }), _.value.map((te,ve)=>{
                    var be;
                    function Ie(He) {
                        He.stopPropagation(),
                        He.preventDefault(),
                        oe(te)
                    }
                    const _e = {
                        "onClick:close": Ie,
                        onMousedown(He) {
                            He.preventDefault(),
                            He.stopPropagation()
                        },
                        modelValue: !0,
                        "onUpdate:modelValue": void 0
                    };
                    return r("div", {
                        key: te.value,
                        class: ["v-combobox__selection", ve === f.value && ["v-combobox__selection--selected", C.value]],
                        style: ve === f.value ? V.value : {}
                    }, [z ? a.chip ? r(ge, {
                        key: "chip-defaults",
                        defaults: {
                            VChip: {
                                closable: e.closableChips,
                                size: "small",
                                text: te.title
                            }
                        }
                    }, {
                        default: ()=>{
                            var He;
                            return [(He = a.chip) == null ? void 0 : He.call(a, {
                                item: te,
                                index: ve,
                                props: _e
                            })]
                        }
                    }) : r(On, K({
                        key: "chip",
                        closable: e.closableChips,
                        size: "small",
                        text: te.title
                    }, _e), null) : ((be = a.selection) == null ? void 0 : be.call(a, {
                        item: te,
                        index: ve
                    })) ?? r("span", {
                        class: "v-combobox__selection-text"
                    }, [te.title, e.multiple && ve < _.value.length - 1 && r("span", {
                        class: "v-combobox__selection-comma"
                    }, [ta(",")])])])
                }
                )]),
                "append-inner": function() {
                    var _e;
                    for (var te = arguments.length, ve = new Array(te), Ie = 0; Ie < te; Ie++)
                        ve[Ie] = arguments[Ie];
                    return r(se, null, [(_e = a["append-inner"]) == null ? void 0 : _e.call(a, ...ve), (!e.hideNoData || e.items.length) && e.menuIcon ? r(he, {
                        class: "v-combobox__menu-icon",
                        icon: e.menuIcon,
                        onMousedown: W,
                        onClick: Yi
                    }, null) : void 0])
                }
            })
        }
        ),
        rt({
            isFocused: o,
            isPristine: s,
            menu: d,
            search: x,
            selectionIndex: f,
            filteredItems: k,
            select: oe
        }, i)
    }
});
const $f = T({
    fullscreen: Boolean,
    retainFocus: {
        type: Boolean,
        default: !0
    },
    scrollable: Boolean,
    ...Fn({
        origin: "center center",
        scrollStrategy: "block",
        transition: {
            component: ia
        },
        zIndex: 2400
    })
}, "VDialog")
  , Ef = M()({
    name: "VDialog",
    props: $f(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = ae(e, "modelValue")
          , {scopeId: l} = hn()
          , i = U();
        function o(u) {
            var d, f;
            const v = u.relatedTarget
              , c = u.target;
            if (v !== c && ((d = i.value) != null && d.contentEl) && ((f = i.value) != null && f.globalTop) && ![document, i.value.contentEl].includes(c) && !i.value.contentEl.contains(c)) {
                const m = wn(i.value.contentEl);
                if (!m.length)
                    return;
                const h = m[0]
                  , y = m[m.length - 1];
                v === h ? y.focus() : h.focus()
            }
        }
        ke && Z(()=>a.value && e.retainFocus, u=>{
            u ? document.addEventListener("focusin", o) : document.removeEventListener("focusin", o)
        }
        , {
            immediate: !0
        }),
        Z(a, async u=>{
            var v, c;
            await Se(),
            u ? (v = i.value.contentEl) == null || v.focus({
                preventScroll: !0
            }) : (c = i.value.activatorEl) == null || c.focus({
                preventScroll: !0
            })
        }
        );
        const s = g(()=>K({
            "aria-haspopup": "dialog",
            "aria-expanded": String(a.value)
        }, e.activatorProps));
        return D(()=>{
            const [u] = St.filterProps(e);
            return r(St, K({
                ref: i,
                class: ["v-dialog", {
                    "v-dialog--fullscreen": e.fullscreen,
                    "v-dialog--scrollable": e.scrollable
                }, e.class],
                style: e.style
            }, u, {
                modelValue: a.value,
                "onUpdate:modelValue": v=>a.value = v,
                "aria-modal": "true",
                activatorProps: s.value,
                role: "dialog"
            }, l), {
                activator: t.activator,
                default: function() {
                    for (var v = arguments.length, c = new Array(v), d = 0; d < v; d++)
                        c[d] = arguments[d];
                    return r(ge, {
                        root: "VDialog"
                    }, {
                        default: ()=>{
                            var f;
                            return [(f = t.default) == null ? void 0 : f.call(t, ...c)]
                        }
                    })
                }
            })
        }
        ),
        rt({}, i)
    }
});
const Tn = Symbol.for("vuetify:v-expansion-panel")
  , Lf = ["default", "accordion", "inset", "popout"]
  , Mf = T({
    color: String,
    variant: {
        type: String,
        default: "default",
        validator: e=>Lf.includes(e)
    },
    readonly: Boolean,
    ...X(),
    ...un(),
    ...le(),
    ...ce()
}, "VExpansionPanels")
  , Of = M()({
    name: "VExpansionPanels",
    props: Mf(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        Yt(e, Tn);
        const {themeClasses: a} = me(e)
          , l = g(()=>e.variant && `v-expansion-panels--variant-${e.variant}`);
        return xe({
            VExpansionPanel: {
                color: O(e, "color")
            },
            VExpansionPanelTitle: {
                readonly: O(e, "readonly")
            }
        }),
        D(()=>r(e.tag, {
            class: ["v-expansion-panels", a.value, l.value, e.class],
            style: e.style
        }, t)),
        {}
    }
})
  , Ff = T({
    ...X(),
    ...va()
}, "VExpansionPanelText")
  , Ms = M()({
    name: "VExpansionPanelText",
    props: Ff(),
    setup(e, n) {
        let {slots: t} = n;
        const a = ye(Tn);
        if (!a)
            throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
        const {hasContent: l, onAfterLeave: i} = Ml(e, a.isSelected);
        return D(()=>r(oa, {
            onAfterLeave: i
        }, {
            default: ()=>{
                var o;
                return [Ve(r("div", {
                    class: ["v-expansion-panel-text", e.class],
                    style: e.style
                }, [t.default && l.value && r("div", {
                    class: "v-expansion-panel-text__wrapper"
                }, [(o = t.default) == null ? void 0 : o.call(t)])]), [[dt, a.isSelected.value]])]
            }
        })),
        {}
    }
})
  , Os = T({
    color: String,
    expandIcon: {
        type: ne,
        default: "$expand"
    },
    collapseIcon: {
        type: ne,
        default: "$collapse"
    },
    hideActions: Boolean,
    ripple: {
        type: [Boolean, Object],
        default: !1
    },
    readonly: Boolean,
    ...X()
}, "VExpansionPanelTitle")
  , Fs = M()({
    name: "VExpansionPanelTitle",
    directives: {
        Ripple: Tt
    },
    props: Os(),
    setup(e, n) {
        let {slots: t} = n;
        const a = ye(Tn);
        if (!a)
            throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
        const {backgroundColorClasses: l, backgroundColorStyles: i} = Pe(e, "color")
          , o = g(()=>({
            collapseIcon: e.collapseIcon,
            disabled: a.disabled.value,
            expanded: a.isSelected.value,
            expandIcon: e.expandIcon,
            readonly: e.readonly
        }));
        return D(()=>{
            var s;
            return Ve(r("button", {
                class: ["v-expansion-panel-title", {
                    "v-expansion-panel-title--active": a.isSelected.value
                }, l.value, e.class],
                style: [i.value, e.style],
                type: "button",
                tabindex: a.disabled.value ? -1 : void 0,
                disabled: a.disabled.value,
                "aria-expanded": a.isSelected.value,
                onClick: e.readonly ? void 0 : a.toggle
            }, [r("span", {
                class: "v-expansion-panel-title__overlay"
            }, null), (s = t.default) == null ? void 0 : s.call(t, o.value), !e.hideActions && r("span", {
                class: "v-expansion-panel-title__icon"
            }, [t.actions ? t.actions(o.value) : r(he, {
                icon: a.isSelected.value ? e.collapseIcon : e.expandIcon
            }, null)])]), [[Ye("ripple"), e.ripple]])
        }
        ),
        {}
    }
})
  , Rf = T({
    title: String,
    text: String,
    bgColor: String,
    ...X(),
    ...Ae(),
    ...cn(),
    ...va(),
    ...Ce(),
    ...le(),
    ...Os()
}, "VExpansionPanel")
  , Df = M()({
    name: "VExpansionPanel",
    props: Rf(),
    emits: {
        "group:selected": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = dn(e, Tn)
          , {backgroundColorClasses: l, backgroundColorStyles: i} = Pe(e, "bgColor")
          , {elevationClasses: o} = Le(e)
          , {roundedClasses: s} = we(e)
          , u = g(()=>(a == null ? void 0 : a.disabled.value) || e.disabled)
          , v = g(()=>a.group.items.value.reduce((f,m,h)=>(a.group.selected.value.includes(m.id) && f.push(h),
        f), []))
          , c = g(()=>{
            const f = a.group.items.value.findIndex(m=>m.id === a.id);
            return !a.isSelected.value && v.value.some(m=>m - f === 1)
        }
        )
          , d = g(()=>{
            const f = a.group.items.value.findIndex(m=>m.id === a.id);
            return !a.isSelected.value && v.value.some(m=>m - f === -1)
        }
        );
        return Te(Tn, a),
        xe({
            VExpansionPanelText: {
                eager: O(e, "eager")
            }
        }),
        D(()=>{
            const f = !!(t.text || e.text)
              , m = !!(t.title || e.title);
            return r(e.tag, {
                class: ["v-expansion-panel", {
                    "v-expansion-panel--active": a.isSelected.value,
                    "v-expansion-panel--before-active": c.value,
                    "v-expansion-panel--after-active": d.value,
                    "v-expansion-panel--disabled": u.value
                }, s.value, l.value, e.class],
                style: [i.value, e.style]
            }, {
                default: ()=>{
                    var h;
                    return [r("div", {
                        class: ["v-expansion-panel__shadow", ...o.value]
                    }, null), m && r(Fs, {
                        key: "title",
                        collapseIcon: e.collapseIcon,
                        color: e.color,
                        expandIcon: e.expandIcon,
                        hideActions: e.hideActions,
                        ripple: e.ripple
                    }, {
                        default: ()=>[t.title ? t.title() : e.title]
                    }), f && r(Ms, {
                        key: "text"
                    }, {
                        default: ()=>[t.text ? t.text() : e.text]
                    }), (h = t.default) == null ? void 0 : h.call(t)]
                }
            })
        }
        ),
        {}
    }
});
const zf = T({
    chips: Boolean,
    counter: Boolean,
    counterSizeString: {
        type: String,
        default: "$vuetify.fileInput.counterSize"
    },
    counterString: {
        type: String,
        default: "$vuetify.fileInput.counter"
    },
    multiple: Boolean,
    showSize: {
        type: [Boolean, Number],
        default: !1,
        validator: e=>typeof e == "boolean" || [1e3, 1024].includes(e)
    },
    ...wt({
        prependIcon: "$file"
    }),
    modelValue: {
        type: Array,
        default: ()=>[],
        validator: e=>Je(e).every(n=>n != null && typeof n == "object")
    },
    ...ga({
        clearable: !0
    })
}, "VFileInput")
  , Nf = M()({
    name: "VFileInput",
    inheritAttrs: !1,
    props: zf(),
    emits: {
        "click:control": e=>!0,
        "mousedown:control": e=>!0,
        "update:focused": e=>!0,
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {attrs: t, emit: a, slots: l} = n;
        const {t: i} = et()
          , o = ae(e, "modelValue")
          , {isFocused: s, focus: u, blur: v} = pt(e)
          , c = g(()=>typeof e.showSize != "boolean" ? e.showSize : void 0)
          , d = g(()=>(o.value ?? []).reduce((w,_)=>{
            let {size: B=0} = _;
            return w + B
        }
        , 0))
          , f = g(()=>Yl(d.value, c.value))
          , m = g(()=>(o.value ?? []).map(w=>{
            const {name: _="", size: B=0} = w;
            return e.showSize ? `${_} (${Yl(B, c.value)})` : _
        }
        ))
          , h = g(()=>{
            var _;
            const w = ((_ = o.value) == null ? void 0 : _.length) ?? 0;
            return e.showSize ? i(e.counterSizeString, w, f.value) : i(e.counterString, w)
        }
        )
          , y = U()
          , S = U()
          , b = U()
          , C = g(()=>s.value || e.active)
          , V = g(()=>["plain", "underlined"].includes(e.variant));
        function P() {
            var w;
            b.value !== document.activeElement && ((w = b.value) == null || w.focus()),
            s.value || u()
        }
        function A(w) {
            x(w)
        }
        function I(w) {
            a("mousedown:control", w)
        }
        function x(w) {
            var _;
            (_ = b.value) == null || _.click(),
            a("click:control", w)
        }
        function k(w) {
            w.stopPropagation(),
            P(),
            Se(()=>{
                o.value = [],
                vl(e["onClick:clear"], w)
            }
            )
        }
        return Z(o, w=>{
            (!Array.isArray(w) || !w.length) && b.value && (b.value.value = "")
        }
        ),
        D(()=>{
            const w = !!(l.counter || e.counter)
              , _ = !!(w || l.details)
              , [B,p] = Ht(t)
              , [{modelValue: $, ...F}] = Ee.filterProps(e)
              , [E] = Ol(e);
            return r(Ee, K({
                ref: y,
                modelValue: o.value,
                "onUpdate:modelValue": H=>o.value = H,
                class: ["v-file-input", {
                    "v-text-field--plain-underlined": V.value
                }, e.class],
                style: e.style,
                "onClick:prepend": A
            }, B, F, {
                centerAffix: !V.value,
                focused: s.value
            }), {
                ...l,
                default: H=>{
                    let {id: G, isDisabled: R, isDirty: j, isReadonly: L, isValid: W} = H;
                    return r(Rn, K({
                        ref: S,
                        "prepend-icon": e.prependIcon,
                        onMousedown: I,
                        onClick: x,
                        "onClick:clear": k,
                        "onClick:prependInner": e["onClick:prependInner"],
                        "onClick:appendInner": e["onClick:appendInner"]
                    }, E, {
                        id: G.value,
                        active: C.value || j.value,
                        dirty: j.value,
                        disabled: R.value,
                        focused: s.value,
                        error: W.value === !1
                    }), {
                        ...l,
                        default: Q=>{
                            var de;
                            let {props: {class: re, ...oe}} = Q;
                            return r(se, null, [r("input", K({
                                ref: b,
                                type: "file",
                                readonly: L.value,
                                disabled: R.value,
                                multiple: e.multiple,
                                name: e.name,
                                onClick: N=>{
                                    N.stopPropagation(),
                                    L.value && N.preventDefault(),
                                    P()
                                }
                                ,
                                onChange: N=>{
                                    if (!N.target)
                                        return;
                                    const ue = N.target;
                                    o.value = [...ue.files ?? []]
                                }
                                ,
                                onFocus: P,
                                onBlur: v
                            }, oe, p), null), r("div", {
                                class: re
                            }, [!!((de = o.value) != null && de.length) && (l.selection ? l.selection({
                                fileNames: m.value,
                                totalBytes: d.value,
                                totalBytesReadable: f.value
                            }) : e.chips ? m.value.map(N=>r(On, {
                                key: N,
                                size: "small",
                                color: e.color
                            }, {
                                default: ()=>[N]
                            })) : m.value.join(", "))])])
                        }
                    })
                }
                ,
                details: _ ? H=>{
                    var G, R;
                    return r(se, null, [(G = l.details) == null ? void 0 : G.call(l, H), w && r(se, null, [r("span", null, null), r(ma, {
                        active: !!((R = o.value) != null && R.length),
                        value: h.value
                    }, l.counter)])])
                }
                : void 0
            })
        }
        ),
        rt({}, y, S, b)
    }
});
const Hf = T({
    app: Boolean,
    color: String,
    height: {
        type: [Number, String],
        default: "auto"
    },
    ...Xe(),
    ...X(),
    ...Ae(),
    ...sn(),
    ...Ce(),
    ...le({
        tag: "footer"
    }),
    ...ce()
}, "VFooter")
  , jf = M()({
    name: "VFooter",
    props: Hf(),
    setup(e, n) {
        let {slots: t} = n;
        const {themeClasses: a} = me(e)
          , {backgroundColorClasses: l, backgroundColorStyles: i} = Pe(O(e, "color"))
          , {borderClasses: o} = at(e)
          , {elevationClasses: s} = Le(e)
          , {roundedClasses: u} = we(e)
          , v = Y(32)
          , {resizeRef: c} = ct(m=>{
            m.length && (v.value = m[0].target.clientHeight)
        }
        )
          , d = g(()=>e.height === "auto" ? v.value : parseInt(e.height, 10))
          , {layoutItemStyles: f} = rn({
            id: e.name,
            order: g(()=>parseInt(e.order, 10)),
            position: g(()=>"bottom"),
            layoutSize: d,
            elementSize: g(()=>e.height === "auto" ? void 0 : d.value),
            active: g(()=>e.app),
            absolute: O(e, "absolute")
        });
        return D(()=>r(e.tag, {
            ref: c,
            class: ["v-footer", a.value, l.value, o.value, s.value, u.value, e.class],
            style: [i.value, e.app ? f.value : {
                height: q(e.height)
            }, e.style]
        }, t)),
        {}
    }
})
  , Gf = T({
    ...X(),
    ...Qc()
}, "VForm")
  , Wf = M()({
    name: "VForm",
    props: Gf(),
    emits: {
        "update:modelValue": e=>!0,
        submit: e=>!0
    },
    setup(e, n) {
        let {slots: t, emit: a} = n;
        const l = ed(e)
          , i = U();
        function o(u) {
            u.preventDefault(),
            l.reset()
        }
        function s(u) {
            const v = u
              , c = l.validate();
            v.then = c.then.bind(c),
            v.catch = c.catch.bind(c),
            v.finally = c.finally.bind(c),
            a("submit", v),
            v.defaultPrevented || c.then(d=>{
                var m;
                let {valid: f} = d;
                f && ((m = i.value) == null || m.submit())
            }
            ),
            v.preventDefault()
        }
        return D(()=>{
            var u;
            return r("form", {
                ref: i,
                class: ["v-form", e.class],
                style: e.style,
                novalidate: !0,
                onReset: o,
                onSubmit: s
            }, [(u = t.default) == null ? void 0 : u.call(t, l)])
        }
        ),
        rt(l, i)
    }
});
const Uf = T({
    fluid: {
        type: Boolean,
        default: !1
    },
    ...X(),
    ...le()
}, "VContainer")
  , Yf = M()({
    name: "VContainer",
    props: Uf(),
    setup(e, n) {
        let {slots: t} = n;
        const {rtlClasses: a} = $e();
        return D(()=>r(e.tag, {
            class: ["v-container", {
                "v-container--fluid": e.fluid
            }, a.value, e.class],
            style: e.style
        }, t)),
        {}
    }
})
  , Rs = (()=>aa.reduce((e,n)=>(e[n] = {
    type: [Boolean, String, Number],
    default: !1
},
e), {}))()
  , Ds = (()=>aa.reduce((e,n)=>{
    const t = "offset" + pn(n);
    return e[t] = {
        type: [String, Number],
        default: null
    },
    e
}
, {}))()
  , zs = (()=>aa.reduce((e,n)=>{
    const t = "order" + pn(n);
    return e[t] = {
        type: [String, Number],
        default: null
    },
    e
}
, {}))()
  , $i = {
    col: Object.keys(Rs),
    offset: Object.keys(Ds),
    order: Object.keys(zs)
};
function Kf(e, n, t) {
    let a = e;
    if (!(t == null || t === !1)) {
        if (n) {
            const l = n.replace(e, "");
            a += `-${l}`
        }
        return e === "col" && (a = "v-" + a),
        e === "col" && (t === "" || t === !0) || (a += `-${t}`),
        a.toLowerCase()
    }
}
const Xf = ["auto", "start", "end", "center", "baseline", "stretch"]
  , qf = T({
    cols: {
        type: [Boolean, String, Number],
        default: !1
    },
    ...Rs,
    offset: {
        type: [String, Number],
        default: null
    },
    ...Ds,
    order: {
        type: [String, Number],
        default: null
    },
    ...zs,
    alignSelf: {
        type: String,
        default: null,
        validator: e=>Xf.includes(e)
    },
    ...X(),
    ...le()
}, "VCol")
  , Zf = M()({
    name: "VCol",
    props: qf(),
    setup(e, n) {
        let {slots: t} = n;
        const a = g(()=>{
            const l = [];
            let i;
            for (i in $i)
                $i[i].forEach(s=>{
                    const u = e[s]
                      , v = Kf(i, s, u);
                    v && l.push(v)
                }
                );
            const o = l.some(s=>s.startsWith("v-col-"));
            return l.push({
                "v-col": !o || !e.cols,
                [`v-col-${e.cols}`]: e.cols,
                [`offset-${e.offset}`]: e.offset,
                [`order-${e.order}`]: e.order,
                [`align-self-${e.alignSelf}`]: e.alignSelf
            }),
            l
        }
        );
        return ()=>{
            var l;
            return It(e.tag, {
                class: [a.value, e.class],
                style: e.style
            }, (l = t.default) == null ? void 0 : l.call(t))
        }
    }
})
  , Nl = ["start", "end", "center"]
  , Ns = ["space-between", "space-around", "space-evenly"];
function Hl(e, n) {
    return aa.reduce((t,a)=>{
        const l = e + pn(a);
        return t[l] = n(),
        t
    }
    , {})
}
const Jf = [...Nl, "baseline", "stretch"]
  , Hs = e=>Jf.includes(e)
  , js = Hl("align", ()=>({
    type: String,
    default: null,
    validator: Hs
}))
  , Qf = [...Nl, ...Ns]
  , Gs = e=>Qf.includes(e)
  , Ws = Hl("justify", ()=>({
    type: String,
    default: null,
    validator: Gs
}))
  , em = [...Nl, ...Ns, "stretch"]
  , Us = e=>em.includes(e)
  , Ys = Hl("alignContent", ()=>({
    type: String,
    default: null,
    validator: Us
}))
  , Ei = {
    align: Object.keys(js),
    justify: Object.keys(Ws),
    alignContent: Object.keys(Ys)
}
  , tm = {
    align: "align",
    justify: "justify",
    alignContent: "align-content"
};
function nm(e, n, t) {
    let a = tm[e];
    if (t != null) {
        if (n) {
            const l = n.replace(e, "");
            a += `-${l}`
        }
        return a += `-${t}`,
        a.toLowerCase()
    }
}
const am = T({
    dense: Boolean,
    noGutters: Boolean,
    align: {
        type: String,
        default: null,
        validator: Hs
    },
    ...js,
    justify: {
        type: String,
        default: null,
        validator: Gs
    },
    ...Ws,
    alignContent: {
        type: String,
        default: null,
        validator: Us
    },
    ...Ys,
    ...X(),
    ...le()
}, "VRow")
  , lm = M()({
    name: "VRow",
    props: am(),
    setup(e, n) {
        let {slots: t} = n;
        const a = g(()=>{
            const l = [];
            let i;
            for (i in Ei)
                Ei[i].forEach(o=>{
                    const s = e[o]
                      , u = nm(i, o, s);
                    u && l.push(u)
                }
                );
            return l.push({
                "v-row--no-gutters": e.noGutters,
                "v-row--dense": e.dense,
                [`align-${e.align}`]: e.align,
                [`justify-${e.justify}`]: e.justify,
                [`align-content-${e.alignContent}`]: e.alignContent
            }),
            l
        }
        );
        return ()=>{
            var l;
            return It(e.tag, {
                class: ["v-row", a.value, e.class],
                style: e.style
            }, (l = t.default) == null ? void 0 : l.call(t))
        }
    }
})
  , im = st("v-spacer", "div", "VSpacer")
  , om = T({
    disabled: Boolean,
    modelValue: {
        type: Boolean,
        default: void 0
    },
    ...rs()
}, "VHover")
  , sm = M()({
    name: "VHover",
    props: om(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = ae(e, "modelValue")
          , {runOpenDelay: l, runCloseDelay: i} = us(e, o=>!e.disabled && (a.value = o));
        return ()=>{
            var o;
            return (o = t.default) == null ? void 0 : o.call(t, {
                isHovering: a.value,
                props: {
                    onMouseenter: l,
                    onMouseleave: i
                }
            })
        }
    }
});
const Ks = Symbol.for("vuetify:v-item-group")
  , rm = T({
    ...X(),
    ...un({
        selectedClass: "v-item--selected"
    }),
    ...le(),
    ...ce()
}, "VItemGroup")
  , um = M()({
    name: "VItemGroup",
    props: rm(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const {themeClasses: a} = me(e)
          , {isSelected: l, select: i, next: o, prev: s, selected: u} = Yt(e, Ks);
        return ()=>r(e.tag, {
            class: ["v-item-group", a.value, e.class],
            style: e.style
        }, {
            default: ()=>{
                var v;
                return [(v = t.default) == null ? void 0 : v.call(t, {
                    isSelected: l,
                    select: i,
                    next: o,
                    prev: s,
                    selected: u.value
                })]
            }
        })
    }
})
  , cm = M()({
    name: "VItem",
    props: cn(),
    emits: {
        "group:selected": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const {isSelected: a, select: l, toggle: i, selectedClass: o, value: s, disabled: u} = dn(e, Ks);
        return ()=>{
            var v;
            return (v = t.default) == null ? void 0 : v.call(t, {
                isSelected: a.value,
                selectedClass: o.value,
                select: l,
                toggle: i,
                value: s.value,
                disabled: u.value
            })
        }
    }
});
const dm = st("v-kbd");
const vm = T({
    ...X(),
    ...mo()
}, "VLayout")
  , fm = M()({
    name: "VLayout",
    props: vm(),
    setup(e, n) {
        let {slots: t} = n;
        const {layoutClasses: a, layoutStyles: l, getLayoutItem: i, items: o, layoutRef: s} = go(e);
        return D(()=>{
            var u;
            return r("div", {
                ref: s,
                class: [a.value, e.class],
                style: [l.value, e.style]
            }, [(u = t.default) == null ? void 0 : u.call(t)])
        }
        ),
        {
            getLayoutItem: i,
            items: o
        }
    }
});
const mm = T({
    position: {
        type: String,
        required: !0
    },
    size: {
        type: [Number, String],
        default: 300
    },
    modelValue: Boolean,
    ...X(),
    ...sn()
}, "VLayoutItem")
  , gm = M()({
    name: "VLayoutItem",
    props: mm(),
    setup(e, n) {
        let {slots: t} = n;
        const {layoutItemStyles: a} = rn({
            id: e.name,
            order: g(()=>parseInt(e.order, 10)),
            position: O(e, "position"),
            elementSize: O(e, "size"),
            layoutSize: O(e, "size"),
            active: O(e, "modelValue"),
            absolute: O(e, "absolute")
        });
        return ()=>{
            var l;
            return r("div", {
                class: ["v-layout-item", e.class],
                style: [a.value, e.style]
            }, [(l = t.default) == null ? void 0 : l.call(t)])
        }
    }
})
  , hm = T({
    modelValue: Boolean,
    options: {
        type: Object,
        default: ()=>({
            root: void 0,
            rootMargin: void 0,
            threshold: void 0
        })
    },
    ...X(),
    ...tt(),
    ...le(),
    ...kt({
        transition: "fade-transition"
    })
}, "VLazy")
  , ym = M()({
    name: "VLazy",
    directives: {
        intersect: En
    },
    props: hm(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const {dimensionStyles: a} = nt(e)
          , l = ae(e, "modelValue");
        function i(o) {
            l.value || (l.value = o)
        }
        return D(()=>Ve(r(e.tag, {
            class: ["v-lazy", e.class],
            style: [a.value, e.style]
        }, {
            default: ()=>[l.value && r(ot, {
                transition: e.transition,
                appear: !0
            }, {
                default: ()=>{
                    var o;
                    return [(o = t.default) == null ? void 0 : o.call(t)]
                }
            })]
        }), [[Ye("intersect"), {
            handler: i,
            options: e.options
        }, null]])),
        {}
    }
});
const bm = T({
    locale: String,
    fallbackLocale: String,
    messages: Object,
    rtl: {
        type: Boolean,
        default: void 0
    },
    ...X()
}, "VLocaleProvider")
  , Sm = M()({
    name: "VLocaleProvider",
    props: bm(),
    setup(e, n) {
        let {slots: t} = n;
        const {rtlClasses: a} = ku(e);
        return D(()=>{
            var l;
            return r("div", {
                class: ["v-locale-provider", a.value, e.class],
                style: e.style
            }, [(l = t.default) == null ? void 0 : l.call(t)])
        }
        ),
        {}
    }
});
const Cm = T({
    scrollable: Boolean,
    ...X(),
    ...le({
        tag: "main"
    })
}, "VMain")
  , km = M()({
    name: "VMain",
    props: Cm(),
    setup(e, n) {
        let {slots: t} = n;
        const {mainStyles: a} = ec()
          , {ssrBootStyles: l} = Gt();
        return D(()=>r(e.tag, {
            class: ["v-main", {
                "v-main--scrollable": e.scrollable
            }, e.class],
            style: [a.value, l.value, e.style]
        }, {
            default: ()=>{
                var i, o;
                return [e.scrollable ? r("div", {
                    class: "v-main__scroller"
                }, [(i = t.default) == null ? void 0 : i.call(t)]) : (o = t.default) == null ? void 0 : o.call(t)]
            }
        })),
        {}
    }
});
function Vm(e) {
    let {rootEl: n, isSticky: t, layoutItemStyles: a} = e;
    const l = Y(!1)
      , i = Y(0)
      , o = g(()=>{
        const v = typeof l.value == "boolean" ? "top" : l.value;
        return [t.value ? {
            top: "auto",
            bottom: "auto",
            height: void 0
        } : void 0, l.value ? {
            [v]: q(i.value)
        } : {
            top: a.value.top
        }]
    }
    );
    Ne(()=>{
        Z(t, v=>{
            v ? window.addEventListener("scroll", u, {
                passive: !0
            }) : window.removeEventListener("scroll", u)
        }
        , {
            immediate: !0
        })
    }
    ),
    Ue(()=>{
        window.removeEventListener("scroll", u)
    }
    );
    let s = 0;
    function u() {
        const v = s > window.scrollY ? "up" : "down"
          , c = n.value.getBoundingClientRect()
          , d = parseFloat(a.value.top ?? 0)
          , f = window.scrollY - Math.max(0, i.value - d)
          , m = c.height + Math.max(i.value, d) - window.scrollY - window.innerHeight
          , h = parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y")) || 0;
        c.height < window.innerHeight - d ? (l.value = "top",
        i.value = d) : v === "up" && l.value === "bottom" || v === "down" && l.value === "top" ? (i.value = window.scrollY + c.top - h,
        l.value = !0) : v === "down" && m <= 0 ? (i.value = 0,
        l.value = "bottom") : v === "up" && f <= 0 && (h ? l.value !== "top" && (i.value = -f + h + d,
        l.value = "top") : (i.value = c.top + f,
        l.value = "top")),
        s = window.scrollY
    }
    return {
        isStuck: l,
        stickyStyles: o
    }
}
const wm = 100
  , xm = 20;
function Li(e) {
    const n = 1.41421356237;
    return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * n
}
function Mi(e) {
    if (e.length < 2)
        return 0;
    if (e.length === 2)
        return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
    let n = 0;
    for (let t = e.length - 1; t > 0; t--) {
        if (e[t].t === e[t - 1].t)
            continue;
        const a = Li(n)
          , l = (e[t].d - e[t - 1].d) / (e[t].t - e[t - 1].t);
        n += (l - a) * Math.abs(l),
        t === e.length - 1 && (n *= .5)
    }
    return Li(n) * 1e3
}
function Pm() {
    const e = {};
    function n(l) {
        Array.from(l.changedTouches).forEach(i=>{
            (e[i.identifier] ?? (e[i.identifier] = new Mr(xm))).push([l.timeStamp, i])
        }
        )
    }
    function t(l) {
        Array.from(l.changedTouches).forEach(i=>{
            delete e[i.identifier]
        }
        )
    }
    function a(l) {
        var v;
        const i = (v = e[l]) == null ? void 0 : v.values().reverse();
        if (!i)
            throw new Error(`No samples for touch id ${l}`);
        const o = i[0]
          , s = []
          , u = [];
        for (const c of i) {
            if (o[0] - c[0] > wm)
                break;
            s.push({
                t: c[0],
                d: c[1].clientX
            }),
            u.push({
                t: c[0],
                d: c[1].clientY
            })
        }
        return {
            x: Mi(s),
            y: Mi(u),
            get direction() {
                const {x: c, y: d} = this
                  , [f,m] = [Math.abs(c), Math.abs(d)];
                return f > m && c >= 0 ? "right" : f > m && c <= 0 ? "left" : m > f && d >= 0 ? "down" : m > f && d <= 0 ? "up" : Im()
            }
        }
    }
    return {
        addMovement: n,
        endTouch: t,
        getVelocity: a
    }
}
function Im() {
    throw new Error
}
function _m(e) {
    let {isActive: n, isTemporary: t, width: a, touchless: l, position: i} = e;
    Ne(()=>{
        window.addEventListener("touchstart", b, {
            passive: !0
        }),
        window.addEventListener("touchmove", C, {
            passive: !1
        }),
        window.addEventListener("touchend", V, {
            passive: !0
        })
    }
    ),
    Ue(()=>{
        window.removeEventListener("touchstart", b),
        window.removeEventListener("touchmove", C),
        window.removeEventListener("touchend", V)
    }
    );
    const o = g(()=>["left", "right"].includes(i.value))
      , {addMovement: s, endTouch: u, getVelocity: v} = Pm();
    let c = !1;
    const d = Y(!1)
      , f = Y(0)
      , m = Y(0);
    let h;
    function y(A, I) {
        return (i.value === "left" ? A : i.value === "right" ? document.documentElement.clientWidth - A : i.value === "top" ? A : i.value === "bottom" ? document.documentElement.clientHeight - A : Zt()) - (I ? a.value : 0)
    }
    function S(A) {
        let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        const x = i.value === "left" ? (A - m.value) / a.value : i.value === "right" ? (document.documentElement.clientWidth - A - m.value) / a.value : i.value === "top" ? (A - m.value) / a.value : i.value === "bottom" ? (document.documentElement.clientHeight - A - m.value) / a.value : Zt();
        return I ? Math.max(0, Math.min(1, x)) : x
    }
    function b(A) {
        if (l.value)
            return;
        const I = A.changedTouches[0].clientX
          , x = A.changedTouches[0].clientY
          , k = 25
          , w = i.value === "left" ? I < k : i.value === "right" ? I > document.documentElement.clientWidth - k : i.value === "top" ? x < k : i.value === "bottom" ? x > document.documentElement.clientHeight - k : Zt()
          , _ = n.value && (i.value === "left" ? I < a.value : i.value === "right" ? I > document.documentElement.clientWidth - a.value : i.value === "top" ? x < a.value : i.value === "bottom" ? x > document.documentElement.clientHeight - a.value : Zt());
        (w || _ || n.value && t.value) && (c = !0,
        h = [I, x],
        m.value = y(o.value ? I : x, n.value),
        f.value = S(o.value ? I : x),
        u(A),
        s(A))
    }
    function C(A) {
        const I = A.changedTouches[0].clientX
          , x = A.changedTouches[0].clientY;
        if (c) {
            if (!A.cancelable) {
                c = !1;
                return
            }
            const w = Math.abs(I - h[0])
              , _ = Math.abs(x - h[1]);
            (o.value ? w > _ && w > 3 : _ > w && _ > 3) ? (d.value = !0,
            c = !1) : (o.value ? _ : w) > 3 && (c = !1)
        }
        if (!d.value)
            return;
        A.preventDefault(),
        s(A);
        const k = S(o.value ? I : x, !1);
        f.value = Math.max(0, Math.min(1, k)),
        k > 1 ? m.value = y(o.value ? I : x, !0) : k < 0 && (m.value = y(o.value ? I : x, !1))
    }
    function V(A) {
        if (c = !1,
        !d.value)
            return;
        s(A),
        d.value = !1;
        const I = v(A.changedTouches[0].identifier)
          , x = Math.abs(I.x)
          , k = Math.abs(I.y);
        (o.value ? x > k && x > 400 : k > x && k > 3) ? n.value = I.direction === ({
            left: "right",
            right: "left",
            top: "down",
            bottom: "up"
        }[i.value] || Zt()) : n.value = f.value > .5
    }
    const P = g(()=>d.value ? {
        transform: i.value === "left" ? `translateX(calc(-100% + ${f.value * a.value}px))` : i.value === "right" ? `translateX(calc(100% - ${f.value * a.value}px))` : i.value === "top" ? `translateY(calc(-100% + ${f.value * a.value}px))` : i.value === "bottom" ? `translateY(calc(100% - ${f.value * a.value}px))` : Zt(),
        transition: "none"
    } : void 0);
    return {
        isDragging: d,
        dragProgress: f,
        dragStyles: P
    }
}
function Zt() {
    throw new Error
}
const Am = ["start", "end", "left", "right", "top", "bottom"]
  , Bm = T({
    color: String,
    disableResizeWatcher: Boolean,
    disableRouteWatcher: Boolean,
    expandOnHover: Boolean,
    floating: Boolean,
    modelValue: {
        type: Boolean,
        default: null
    },
    permanent: Boolean,
    rail: {
        type: Boolean,
        default: null
    },
    railWidth: {
        type: [Number, String],
        default: 56
    },
    scrim: {
        type: [Boolean, String],
        default: !0
    },
    image: String,
    temporary: Boolean,
    touchless: Boolean,
    width: {
        type: [Number, String],
        default: 256
    },
    location: {
        type: String,
        default: "start",
        validator: e=>Am.includes(e)
    },
    sticky: Boolean,
    ...Xe(),
    ...X(),
    ...Ae(),
    ...sn(),
    ...Ce(),
    ...le({
        tag: "nav"
    }),
    ...ce()
}, "VNavigationDrawer")
  , Tm = M()({
    name: "VNavigationDrawer",
    props: Bm(),
    emits: {
        "update:modelValue": e=>!0,
        "update:rail": e=>!0
    },
    setup(e, n) {
        let {attrs: t, emit: a, slots: l} = n;
        const {isRtl: i} = $e()
          , {themeClasses: o} = me(e)
          , {borderClasses: s} = at(e)
          , {backgroundColorClasses: u, backgroundColorStyles: v} = Pe(O(e, "color"))
          , {elevationClasses: c} = Le(e)
          , {mobile: d} = jt()
          , {roundedClasses: f} = we(e)
          , m = _o()
          , h = ae(e, "modelValue", null, j=>!!j)
          , {ssrBootStyles: y} = Gt()
          , {scopeId: S} = hn()
          , b = U()
          , C = Y(!1)
          , V = g(()=>e.rail && e.expandOnHover && C.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width))
          , P = g(()=>$a(e.location, i.value))
          , A = g(()=>!e.permanent && (d.value || e.temporary))
          , I = g(()=>e.sticky && !A.value && P.value !== "bottom");
        e.expandOnHover && e.rail != null && Z(C, j=>a("update:rail", !j)),
        e.disableResizeWatcher || Z(A, j=>!e.permanent && Se(()=>h.value = !j)),
        !e.disableRouteWatcher && m && Z(m.currentRoute, ()=>A.value && (h.value = !1)),
        Z(()=>e.permanent, j=>{
            j && (h.value = !0)
        }
        ),
        rl(()=>{
            e.modelValue != null || A.value || (h.value = e.permanent || !d.value)
        }
        );
        const {isDragging: x, dragProgress: k, dragStyles: w} = _m({
            isActive: h,
            isTemporary: A,
            width: V,
            touchless: O(e, "touchless"),
            position: P
        })
          , _ = g(()=>{
            const j = A.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : V.value;
            return x.value ? j * k.value : j
        }
        )
          , {layoutItemStyles: B, layoutItemScrimStyles: p} = rn({
            id: e.name,
            order: g(()=>parseInt(e.order, 10)),
            position: P,
            layoutSize: _,
            elementSize: V,
            active: g(()=>h.value || x.value),
            disableTransitions: g(()=>x.value),
            absolute: g(()=>e.absolute || I.value && typeof $.value != "string")
        })
          , {isStuck: $, stickyStyles: F} = Vm({
            rootEl: b,
            isSticky: I,
            layoutItemStyles: B
        })
          , E = Pe(g(()=>typeof e.scrim == "string" ? e.scrim : null))
          , H = g(()=>({
            ...x.value ? {
                opacity: k.value * .2,
                transition: "none"
            } : void 0,
            ...p.value
        }));
        xe({
            VList: {
                bgColor: "transparent"
            }
        });
        function G() {
            C.value = !0
        }
        function R() {
            C.value = !1
        }
        return D(()=>{
            const j = l.image || e.image;
            return r(se, null, [r(e.tag, K({
                ref: b,
                onMouseenter: G,
                onMouseleave: R,
                class: ["v-navigation-drawer", `v-navigation-drawer--${P.value}`, {
                    "v-navigation-drawer--expand-on-hover": e.expandOnHover,
                    "v-navigation-drawer--floating": e.floating,
                    "v-navigation-drawer--is-hovering": C.value,
                    "v-navigation-drawer--rail": e.rail,
                    "v-navigation-drawer--temporary": A.value,
                    "v-navigation-drawer--active": h.value,
                    "v-navigation-drawer--sticky": I.value
                }, o.value, u.value, s.value, c.value, f.value, e.class],
                style: [v.value, B.value, w.value, y.value, F.value, e.style]
            }, S, t), {
                default: ()=>{
                    var L, W, Q, re;
                    return [j && r("div", {
                        key: "image",
                        class: "v-navigation-drawer__img"
                    }, [l.image ? (L = l.image) == null ? void 0 : L.call(l, {
                        image: e.image
                    }) : r("img", {
                        src: e.image,
                        alt: ""
                    }, null)]), l.prepend && r("div", {
                        class: "v-navigation-drawer__prepend"
                    }, [(W = l.prepend) == null ? void 0 : W.call(l)]), r("div", {
                        class: "v-navigation-drawer__content"
                    }, [(Q = l.default) == null ? void 0 : Q.call(l)]), l.append && r("div", {
                        class: "v-navigation-drawer__append"
                    }, [(re = l.append) == null ? void 0 : re.call(l)])]
                }
            }), r(xt, {
                name: "fade-transition"
            }, {
                default: ()=>[A.value && (x.value || h.value) && !!e.scrim && r("div", K({
                    class: ["v-navigation-drawer__scrim", E.backgroundColorClasses.value],
                    style: [H.value, E.backgroundColorStyles.value],
                    onClick: ()=>h.value = !1
                }, S), null)]
            })])
        }
        ),
        {
            isStuck: $
        }
    }
})
  , pm = Qe({
    name: "VNoSsr",
    setup(e, n) {
        let {slots: t} = n;
        const a = cs();
        return ()=>{
            var l;
            return a.value && ((l = t.default) == null ? void 0 : l.call(t))
        }
    }
});
function $m() {
    const e = U([]);
    dr(()=>e.value = []);
    function n(t, a) {
        e.value[a] = t
    }
    return {
        refs: e,
        updateRef: n
    }
}
const Em = T({
    activeColor: String,
    start: {
        type: [Number, String],
        default: 1
    },
    modelValue: {
        type: Number,
        default: e=>e.start
    },
    disabled: Boolean,
    length: {
        type: [Number, String],
        default: 1,
        validator: e=>e % 1 === 0
    },
    totalVisible: [Number, String],
    firstIcon: {
        type: ne,
        default: "$first"
    },
    prevIcon: {
        type: ne,
        default: "$prev"
    },
    nextIcon: {
        type: ne,
        default: "$next"
    },
    lastIcon: {
        type: ne,
        default: "$last"
    },
    ariaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.root"
    },
    pageAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.page"
    },
    currentPageAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.currentPage"
    },
    firstAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.first"
    },
    previousAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.previous"
    },
    nextAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.next"
    },
    lastAriaLabel: {
        type: String,
        default: "$vuetify.pagination.ariaLabel.last"
    },
    ellipsis: {
        type: String,
        default: "..."
    },
    showFirstLastPage: Boolean,
    ...Xe(),
    ...X(),
    ...Be(),
    ...Ae(),
    ...Ce(),
    ...Vt(),
    ...le({
        tag: "nav"
    }),
    ...ce(),
    ...lt({
        variant: "text"
    })
}, "VPagination")
  , Lm = M()({
    name: "VPagination",
    props: Em(),
    emits: {
        "update:modelValue": e=>!0,
        first: e=>!0,
        prev: e=>!0,
        next: e=>!0,
        last: e=>!0
    },
    setup(e, n) {
        let {slots: t, emit: a} = n;
        const l = ae(e, "modelValue")
          , {t: i, n: o} = et()
          , {isRtl: s} = $e()
          , {themeClasses: u} = me(e)
          , {width: v} = jt()
          , c = Y(-1);
        xe(void 0, {
            scoped: !0
        });
        const {resizeRef: d} = ct(k=>{
            if (!k.length)
                return;
            const {target: w, contentRect: _} = k[0]
              , B = w.querySelector(".v-pagination__list > *");
            if (!B)
                return;
            const p = _.width
              , $ = B.offsetWidth + parseFloat(getComputedStyle(B).marginRight) * 2;
            c.value = y(p, $)
        }
        )
          , f = g(()=>parseInt(e.length, 10))
          , m = g(()=>parseInt(e.start, 10))
          , h = g(()=>e.totalVisible ? parseInt(e.totalVisible, 10) : c.value >= 0 ? c.value : y(v.value, 58));
        function y(k, w) {
            const _ = e.showFirstLastPage ? 5 : 3;
            return Math.max(0, Math.floor(+((k - w * _) / w).toFixed(2)))
        }
        const S = g(()=>{
            if (f.value <= 0 || isNaN(f.value) || f.value > Number.MAX_SAFE_INTEGER)
                return [];
            if (h.value <= 1)
                return [l.value];
            if (f.value <= h.value)
                return mt(f.value, m.value);
            const k = h.value % 2 === 0
              , w = k ? h.value / 2 : Math.floor(h.value / 2)
              , _ = k ? w : w + 1
              , B = f.value - w;
            if (_ - l.value >= 0)
                return [...mt(Math.max(1, h.value - 1), m.value), e.ellipsis, f.value];
            if (l.value - B >= (k ? 1 : 0)) {
                const p = h.value - 1
                  , $ = f.value - p + m.value;
                return [m.value, e.ellipsis, ...mt(p, $)]
            } else {
                const p = Math.max(1, h.value - 3)
                  , $ = p === 1 ? l.value : l.value - Math.ceil(p / 2) + m.value;
                return [m.value, e.ellipsis, ...mt(p, $), e.ellipsis, f.value]
            }
        }
        );
        function b(k, w, _) {
            k.preventDefault(),
            l.value = w,
            _ && a(_, w)
        }
        const {refs: C, updateRef: V} = $m();
        xe({
            VPaginationBtn: {
                color: O(e, "color"),
                border: O(e, "border"),
                density: O(e, "density"),
                size: O(e, "size"),
                variant: O(e, "variant"),
                rounded: O(e, "rounded"),
                elevation: O(e, "elevation")
            }
        });
        const P = g(()=>S.value.map((k,w)=>{
            const _ = B=>V(B, w);
            if (typeof k == "string")
                return {
                    isActive: !1,
                    key: `ellipsis-${w}`,
                    page: k,
                    props: {
                        ref: _,
                        ellipsis: !0,
                        icon: !0,
                        disabled: !0
                    }
                };
            {
                const B = k === l.value;
                return {
                    isActive: B,
                    key: k,
                    page: o(k),
                    props: {
                        ref: _,
                        ellipsis: !1,
                        icon: !0,
                        disabled: !!e.disabled || +e.length < 2,
                        color: B ? e.activeColor : e.color,
                        ariaCurrent: B,
                        ariaLabel: i(B ? e.currentPageAriaLabel : e.pageAriaLabel, k),
                        onClick: p=>b(p, k)
                    }
                }
            }
        }
        ))
          , A = g(()=>{
            const k = !!e.disabled || l.value <= m.value
              , w = !!e.disabled || l.value >= m.value + f.value - 1;
            return {
                first: e.showFirstLastPage ? {
                    icon: s.value ? e.lastIcon : e.firstIcon,
                    onClick: _=>b(_, m.value, "first"),
                    disabled: k,
                    ariaLabel: i(e.firstAriaLabel),
                    ariaDisabled: k
                } : void 0,
                prev: {
                    icon: s.value ? e.nextIcon : e.prevIcon,
                    onClick: _=>b(_, l.value - 1, "prev"),
                    disabled: k,
                    ariaLabel: i(e.previousAriaLabel),
                    ariaDisabled: k
                },
                next: {
                    icon: s.value ? e.prevIcon : e.nextIcon,
                    onClick: _=>b(_, l.value + 1, "next"),
                    disabled: w,
                    ariaLabel: i(e.nextAriaLabel),
                    ariaDisabled: w
                },
                last: e.showFirstLastPage ? {
                    icon: s.value ? e.firstIcon : e.lastIcon,
                    onClick: _=>b(_, m.value + f.value - 1, "last"),
                    disabled: w,
                    ariaLabel: i(e.lastAriaLabel),
                    ariaDisabled: w
                } : void 0
            }
        }
        );
        function I() {
            var w;
            const k = l.value - m.value;
            (w = C.value[k]) == null || w.$el.focus()
        }
        function x(k) {
            k.key === Ta.left && !e.disabled && l.value > +e.start ? (l.value = l.value - 1,
            Se(I)) : k.key === Ta.right && !e.disabled && l.value < m.value + f.value - 1 && (l.value = l.value + 1,
            Se(I))
        }
        return D(()=>r(e.tag, {
            ref: d,
            class: ["v-pagination", u.value, e.class],
            style: e.style,
            role: "navigation",
            "aria-label": i(e.ariaLabel),
            onKeydown: x,
            "data-test": "v-pagination-root"
        }, {
            default: ()=>[r("ul", {
                class: "v-pagination__list"
            }, [e.showFirstLastPage && r("li", {
                key: "first",
                class: "v-pagination__first",
                "data-test": "v-pagination-first"
            }, [t.first ? t.first(A.value.first) : r(ze, K({
                _as: "VPaginationBtn"
            }, A.value.first), null)]), r("li", {
                key: "prev",
                class: "v-pagination__prev",
                "data-test": "v-pagination-prev"
            }, [t.prev ? t.prev(A.value.prev) : r(ze, K({
                _as: "VPaginationBtn"
            }, A.value.prev), null)]), P.value.map((k,w)=>r("li", {
                key: k.key,
                class: ["v-pagination__item", {
                    "v-pagination__item--is-active": k.isActive
                }],
                "data-test": "v-pagination-item"
            }, [t.item ? t.item(k) : r(ze, K({
                _as: "VPaginationBtn"
            }, k.props), {
                default: ()=>[k.page]
            })])), r("li", {
                key: "next",
                class: "v-pagination__next",
                "data-test": "v-pagination-next"
            }, [t.next ? t.next(A.value.next) : r(ze, K({
                _as: "VPaginationBtn"
            }, A.value.next), null)]), e.showFirstLastPage && r("li", {
                key: "last",
                class: "v-pagination__last",
                "data-test": "v-pagination-last"
            }, [t.last ? t.last(A.value.last) : r(ze, K({
                _as: "VPaginationBtn"
            }, A.value.last), null)])])]
        })),
        {}
    }
});
function Mm(e) {
    return Math.floor(Math.abs(e)) * Math.sign(e)
}
const Om = T({
    scale: {
        type: [Number, String],
        default: .5
    },
    ...X()
}, "VParallax")
  , Fm = M()({
    name: "VParallax",
    props: Om(),
    setup(e, n) {
        let {slots: t} = n;
        const {intersectionRef: a, isIntersecting: l} = Il()
          , {resizeRef: i, contentRect: o} = ct()
          , {height: s} = jt()
          , u = U();
        Ge(()=>{
            var m;
            a.value = i.value = (m = u.value) == null ? void 0 : m.$el
        }
        );
        let v;
        Z(l, m=>{
            m ? (v = hl(a.value),
            v = v === document.scrollingElement ? document : v,
            v.addEventListener("scroll", f, {
                passive: !0
            }),
            f()) : v.removeEventListener("scroll", f)
        }
        ),
        Ue(()=>{
            v == null || v.removeEventListener("scroll", f)
        }
        ),
        Z(s, f),
        Z(()=>{
            var m;
            return (m = o.value) == null ? void 0 : m.height
        }
        , f);
        const c = g(()=>1 - Oe(+e.scale));
        let d = -1;
        function f() {
            l.value && (cancelAnimationFrame(d),
            d = requestAnimationFrame(()=>{
                var A;
                const m = ((A = u.value) == null ? void 0 : A.$el).querySelector(".v-img__img");
                if (!m)
                    return;
                const h = v instanceof Document ? document.documentElement.clientHeight : v.clientHeight
                  , y = v instanceof Document ? window.scrollY : v.scrollTop
                  , S = a.value.getBoundingClientRect().top + y
                  , b = o.value.height
                  , C = S + (b - h) / 2
                  , V = Mm((y - C) * c.value)
                  , P = Math.max(1, (c.value * (h - b) + b) / b);
                m.style.setProperty("transform", `translateY(${V}px) scale(${P})`)
            }
            ))
        }
        return D(()=>r(Dt, {
            class: ["v-parallax", {
                "v-parallax--active": l.value
            }, e.class],
            style: e.style,
            ref: u,
            cover: !0,
            onLoadstart: f,
            onLoad: f
        }, t)),
        {}
    }
})
  , Rm = T({
    ...ra({
        falseIcon: "$radioOff",
        trueIcon: "$radioOn"
    })
}, "VRadio")
  , Dm = M()({
    name: "VRadio",
    props: Rm(),
    setup(e, n) {
        let {slots: t} = n;
        return D(()=>r(an, K(e, {
            class: ["v-radio", e.class],
            style: e.style,
            type: "radio"
        }), t)),
        {}
    }
});
const zm = T({
    height: {
        type: [Number, String],
        default: "auto"
    },
    ...wt(),
    ...vt($l(), ["multiple"]),
    trueIcon: {
        type: ne,
        default: "$radioOn"
    },
    falseIcon: {
        type: ne,
        default: "$radioOff"
    },
    type: {
        type: String,
        default: "radio"
    }
}, "VRadioGroup")
  , Nm = M()({
    name: "VRadioGroup",
    inheritAttrs: !1,
    props: zm(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {attrs: t, slots: a} = n;
        const l = Re()
          , i = g(()=>e.id || `radio-group-${l}`)
          , o = ae(e, "modelValue");
        return D(()=>{
            const [s,u] = Ht(t)
              , [v,c] = Ee.filterProps(e)
              , [d,f] = an.filterProps(e)
              , m = a.label ? a.label({
                label: e.label,
                props: {
                    for: i.value
                }
            }) : e.label;
            return r(Ee, K({
                class: ["v-radio-group", e.class],
                style: e.style
            }, s, v, {
                modelValue: o.value,
                "onUpdate:modelValue": h=>o.value = h,
                id: i.value
            }), {
                ...a,
                default: h=>{
                    let {id: y, messagesId: S, isDisabled: b, isReadonly: C} = h;
                    return r(se, null, [m && r(gn, {
                        id: y.value
                    }, {
                        default: ()=>[m]
                    }), r(Ro, K(d, {
                        id: y.value,
                        "aria-describedby": S.value,
                        defaultsTarget: "VRadio",
                        trueIcon: e.trueIcon,
                        falseIcon: e.falseIcon,
                        type: e.type,
                        disabled: b.value,
                        readonly: C.value,
                        "aria-labelledby": m ? y.value : void 0,
                        multiple: !1
                    }, u, {
                        modelValue: o.value,
                        "onUpdate:modelValue": V=>o.value = V
                    }), a)])
                }
            })
        }
        ),
        {}
    }
})
  , Hm = T({
    ...ua(),
    ...wt(),
    ...Ts(),
    strict: Boolean,
    modelValue: {
        type: Array,
        default: ()=>[0, 0]
    }
}, "VRangeSlider")
  , jm = M()({
    name: "VRangeSlider",
    props: Hm(),
    emits: {
        "update:focused": e=>!0,
        "update:modelValue": e=>!0,
        end: e=>!0,
        start: e=>!0
    },
    setup(e, n) {
        let {slots: t, emit: a} = n;
        const l = U()
          , i = U()
          , o = U()
          , {rtlClasses: s} = $e();
        function u(w) {
            if (!l.value || !i.value)
                return;
            const _ = el(w, l.value.$el, e.direction)
              , B = el(w, i.value.$el, e.direction)
              , p = Math.abs(_)
              , $ = Math.abs(B);
            return p < $ || p === $ && _ < 0 ? l.value.$el : i.value.$el
        }
        const v = ps(e)
          , c = ae(e, "modelValue", void 0, w=>w != null && w.length ? w.map(_=>v.roundValue(_)) : [0, 0])
          , {activeThumbRef: d, hasLabels: f, max: m, min: h, mousePressed: y, onSliderMousedown: S, onSliderTouchstart: b, position: C, trackContainerRef: V} = $s({
            props: e,
            steps: v,
            onSliderStart: ()=>{
                a("start", c.value)
            }
            ,
            onSliderEnd: w=>{
                var p;
                let {value: _} = w;
                const B = d.value === ((p = l.value) == null ? void 0 : p.$el) ? [_, c.value[1]] : [c.value[0], _];
                !e.strict && B[0] < B[1] && (c.value = B),
                a("end", c.value)
            }
            ,
            onSliderMove: w=>{
                var $, F, E, H;
                let {value: _} = w;
                const [B,p] = c.value;
                !e.strict && B === p && B !== h.value && (d.value = _ > B ? ($ = i.value) == null ? void 0 : $.$el : (F = l.value) == null ? void 0 : F.$el,
                (E = d.value) == null || E.focus()),
                d.value === ((H = l.value) == null ? void 0 : H.$el) ? c.value = [Math.min(_, p), p] : c.value = [B, Math.max(B, _)]
            }
            ,
            getActiveThumb: u
        })
          , {isFocused: P, focus: A, blur: I} = pt(e)
          , x = g(()=>C(c.value[0]))
          , k = g(()=>C(c.value[1]));
        return D(()=>{
            const [w,_] = Ee.filterProps(e)
              , B = !!(e.label || t.label || t.prepend);
            return r(Ee, K({
                class: ["v-slider", "v-range-slider", {
                    "v-slider--has-labels": !!t["tick-label"] || f.value,
                    "v-slider--focused": P.value,
                    "v-slider--pressed": y.value,
                    "v-slider--disabled": e.disabled
                }, s.value, e.class],
                style: e.style,
                ref: o
            }, w, {
                focused: P.value
            }), {
                ...t,
                prepend: B ? p=>{
                    var $, F;
                    return r(se, null, [(($ = t.label) == null ? void 0 : $.call(t, p)) ?? e.label ? r(gn, {
                        class: "v-slider__label",
                        text: e.label
                    }, null) : void 0, (F = t.prepend) == null ? void 0 : F.call(t, p)])
                }
                : void 0,
                default: p=>{
                    var E, H;
                    let {id: $, messagesId: F} = p;
                    return r("div", {
                        class: "v-slider__container",
                        onMousedown: S,
                        onTouchstartPassive: b
                    }, [r("input", {
                        id: `${$.value}_start`,
                        name: e.name || $.value,
                        disabled: !!e.disabled,
                        readonly: !!e.readonly,
                        tabindex: "-1",
                        value: c.value[0]
                    }, null), r("input", {
                        id: `${$.value}_stop`,
                        name: e.name || $.value,
                        disabled: !!e.disabled,
                        readonly: !!e.readonly,
                        tabindex: "-1",
                        value: c.value[1]
                    }, null), r(Es, {
                        ref: V,
                        start: x.value,
                        stop: k.value
                    }, {
                        "tick-label": t["tick-label"]
                    }), r(tl, {
                        ref: l,
                        "aria-describedby": F.value,
                        focused: P && d.value === ((E = l.value) == null ? void 0 : E.$el),
                        modelValue: c.value[0],
                        "onUpdate:modelValue": G=>c.value = [G, c.value[1]],
                        onFocus: G=>{
                            var R, j, L, W;
                            A(),
                            d.value = (R = l.value) == null ? void 0 : R.$el,
                            c.value[0] === c.value[1] && c.value[1] === h.value && G.relatedTarget !== ((j = i.value) == null ? void 0 : j.$el) && ((L = l.value) == null || L.$el.blur(),
                            (W = i.value) == null || W.$el.focus())
                        }
                        ,
                        onBlur: ()=>{
                            I(),
                            d.value = void 0
                        }
                        ,
                        min: h.value,
                        max: c.value[1],
                        position: x.value
                    }, {
                        "thumb-label": t["thumb-label"]
                    }), r(tl, {
                        ref: i,
                        "aria-describedby": F.value,
                        focused: P && d.value === ((H = i.value) == null ? void 0 : H.$el),
                        modelValue: c.value[1],
                        "onUpdate:modelValue": G=>c.value = [c.value[0], G],
                        onFocus: G=>{
                            var R, j, L, W;
                            A(),
                            d.value = (R = i.value) == null ? void 0 : R.$el,
                            c.value[0] === c.value[1] && c.value[0] === m.value && G.relatedTarget !== ((j = l.value) == null ? void 0 : j.$el) && ((L = i.value) == null || L.$el.blur(),
                            (W = l.value) == null || W.$el.focus())
                        }
                        ,
                        onBlur: ()=>{
                            I(),
                            d.value = void 0
                        }
                        ,
                        min: c.value[0],
                        max: m.value,
                        position: k.value
                    }, {
                        "thumb-label": t["thumb-label"]
                    })])
                }
            })
        }
        ),
        {}
    }
});
const Gm = T({
    name: String,
    itemAriaLabel: {
        type: String,
        default: "$vuetify.rating.ariaLabel.item"
    },
    activeColor: String,
    color: String,
    clearable: Boolean,
    disabled: Boolean,
    emptyIcon: {
        type: ne,
        default: "$ratingEmpty"
    },
    fullIcon: {
        type: ne,
        default: "$ratingFull"
    },
    halfIncrements: Boolean,
    hover: Boolean,
    length: {
        type: [Number, String],
        default: 5
    },
    readonly: Boolean,
    modelValue: {
        type: [Number, String],
        default: 0
    },
    itemLabels: Array,
    itemLabelPosition: {
        type: String,
        default: "top",
        validator: e=>["top", "bottom"].includes(e)
    },
    ripple: Boolean,
    ...X(),
    ...Be(),
    ...Vt(),
    ...le(),
    ...ce()
}, "VRating")
  , Wm = M()({
    name: "VRating",
    props: Gm(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const {t: a} = et()
          , {themeClasses: l} = me(e)
          , i = ae(e, "modelValue")
          , o = g(()=>Oe(parseFloat(i.value), 0, +e.length))
          , s = g(()=>mt(Number(e.length), 1))
          , u = g(()=>s.value.flatMap(y=>e.halfIncrements ? [y - .5, y] : [y]))
          , v = Y(-1)
          , c = g(()=>u.value.map(y=>{
            const S = e.hover && v.value > -1
              , b = o.value >= y
              , C = v.value >= y
              , P = (S ? C : b) ? e.fullIcon : e.emptyIcon
              , A = e.activeColor ?? e.color
              , I = b || C ? A : e.color;
            return {
                isFilled: b,
                isHovered: C,
                icon: P,
                color: I
            }
        }
        ))
          , d = g(()=>[0, ...u.value].map(y=>{
            function S() {
                v.value = y
            }
            function b() {
                v.value = -1
            }
            function C() {
                e.disabled || e.readonly || (i.value = o.value === y && e.clearable ? 0 : y)
            }
            return {
                onMouseenter: e.hover ? S : void 0,
                onMouseleave: e.hover ? b : void 0,
                onClick: C
            }
        }
        ))
          , f = g(()=>e.name ?? `v-rating-${Re()}`);
        function m(y) {
            var k, w;
            let {value: S, index: b, showStar: C=!0} = y;
            const {onMouseenter: V, onMouseleave: P, onClick: A} = d.value[b + 1]
              , I = `${f.value}-${String(S).replace(".", "-")}`
              , x = {
                color: (k = c.value[b]) == null ? void 0 : k.color,
                density: e.density,
                disabled: e.disabled,
                icon: (w = c.value[b]) == null ? void 0 : w.icon,
                ripple: e.ripple,
                size: e.size,
                variant: "plain"
            };
            return r(se, null, [r("label", {
                for: I,
                class: {
                    "v-rating__item--half": e.halfIncrements && S % 1 > 0,
                    "v-rating__item--full": e.halfIncrements && S % 1 === 0
                },
                onMouseenter: V,
                onMouseleave: P,
                onClick: A
            }, [r("span", {
                class: "v-rating__hidden"
            }, [a(e.itemAriaLabel, S, e.length)]), C ? t.item ? t.item({
                ...c.value[b],
                props: x,
                value: S,
                index: b,
                rating: o.value
            }) : r(ze, K({
                "aria-label": a(e.itemAriaLabel, S, e.length)
            }, x), null) : void 0]), r("input", {
                class: "v-rating__hidden",
                name: f.value,
                id: I,
                type: "radio",
                value: S,
                checked: o.value === S,
                tabindex: -1,
                readonly: e.readonly,
                disabled: e.disabled
            }, null)])
        }
        function h(y) {
            return t["item-label"] ? t["item-label"](y) : y.label ? r("span", null, [y.label]) : r("span", null, [ta(" ")])
        }
        return D(()=>{
            var S;
            const y = !!((S = e.itemLabels) != null && S.length) || t["item-label"];
            return r(e.tag, {
                class: ["v-rating", {
                    "v-rating--hover": e.hover,
                    "v-rating--readonly": e.readonly
                }, l.value, e.class],
                style: e.style
            }, {
                default: ()=>[r(m, {
                    value: 0,
                    index: -1,
                    showStar: !1
                }, null), s.value.map((b,C)=>{
                    var V, P;
                    return r("div", {
                        class: "v-rating__wrapper"
                    }, [y && e.itemLabelPosition === "top" ? h({
                        value: b,
                        index: C,
                        label: (V = e.itemLabels) == null ? void 0 : V[C]
                    }) : void 0, r("div", {
                        class: "v-rating__item"
                    }, [e.halfIncrements ? r(se, null, [r(m, {
                        value: b - .5,
                        index: C * 2
                    }, null), r(m, {
                        value: b,
                        index: C * 2 + 1
                    }, null)]) : r(m, {
                        value: b,
                        index: C
                    }, null)]), y && e.itemLabelPosition === "bottom" ? h({
                        value: b,
                        index: C,
                        label: (P = e.itemLabels) == null ? void 0 : P[C]
                    }) : void 0])
                }
                )]
            })
        }
        ),
        {}
    }
});
function Oi(e) {
    const t = Math.abs(e);
    return Math.sign(e) * (t / ((1 / .501 - 2) * (1 - t) + 1))
}
function Fi(e) {
    let {selectedElement: n, containerSize: t, contentSize: a, isRtl: l, currentScrollOffset: i, isHorizontal: o} = e;
    const s = o ? n.clientWidth : n.clientHeight
      , u = o ? n.offsetLeft : n.offsetTop
      , v = l && o ? a - u - s : u
      , c = t + i
      , d = s + v
      , f = s * .4;
    return v <= i ? i = Math.max(v - f, 0) : c <= d && (i = Math.min(i - (c - d - f), a - t)),
    i
}
function Um(e) {
    let {selectedElement: n, containerSize: t, contentSize: a, isRtl: l, isHorizontal: i} = e;
    const o = i ? n.clientWidth : n.clientHeight
      , s = i ? n.offsetLeft : n.offsetTop
      , u = l && i ? a - s - o / 2 - t / 2 : s + o / 2 - t / 2;
    return Math.min(a - t, Math.max(0, u))
}
const Xs = Symbol.for("vuetify:v-slide-group")
  , qs = T({
    centerActive: Boolean,
    direction: {
        type: String,
        default: "horizontal"
    },
    symbol: {
        type: null,
        default: Xs
    },
    nextIcon: {
        type: ne,
        default: "$next"
    },
    prevIcon: {
        type: ne,
        default: "$prev"
    },
    showArrows: {
        type: [Boolean, String],
        validator: e=>typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
    },
    ...X(),
    ...le(),
    ...un({
        selectedClass: "v-slide-group-item--active"
    })
}, "VSlideGroup")
  , ll = M()({
    name: "VSlideGroup",
    props: qs(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const {isRtl: a} = $e()
          , {mobile: l} = jt()
          , i = Yt(e, e.symbol)
          , o = Y(!1)
          , s = Y(0)
          , u = Y(0)
          , v = Y(0)
          , c = g(()=>e.direction === "horizontal")
          , {resizeRef: d, contentRect: f} = ct()
          , {resizeRef: m, contentRect: h} = ct()
          , y = g(()=>i.selected.value.length ? i.items.value.findIndex(L=>L.id === i.selected.value[0]) : -1)
          , S = g(()=>i.selected.value.length ? i.items.value.findIndex(L=>L.id === i.selected.value[i.selected.value.length - 1]) : -1);
        if (ke) {
            let L = -1;
            Z(()=>[i.selected.value, f.value, h.value, c.value], ()=>{
                cancelAnimationFrame(L),
                L = requestAnimationFrame(()=>{
                    if (f.value && h.value) {
                        const W = c.value ? "width" : "height";
                        u.value = f.value[W],
                        v.value = h.value[W],
                        o.value = u.value + 1 < v.value
                    }
                    if (y.value >= 0 && m.value) {
                        const W = m.value.children[S.value];
                        y.value === 0 || !o.value ? s.value = 0 : e.centerActive ? s.value = Um({
                            selectedElement: W,
                            containerSize: u.value,
                            contentSize: v.value,
                            isRtl: a.value,
                            isHorizontal: c.value
                        }) : o.value && (s.value = Fi({
                            selectedElement: W,
                            containerSize: u.value,
                            contentSize: v.value,
                            isRtl: a.value,
                            currentScrollOffset: s.value,
                            isHorizontal: c.value
                        }))
                    }
                }
                )
            }
            )
        }
        const b = Y(!1);
        let C = 0
          , V = 0;
        function P(L) {
            const W = c.value ? "clientX" : "clientY";
            V = (a.value && c.value ? -1 : 1) * s.value,
            C = L.touches[0][W],
            b.value = !0
        }
        function A(L) {
            if (!o.value)
                return;
            const W = c.value ? "clientX" : "clientY"
              , Q = a.value && c.value ? -1 : 1;
            s.value = Q * (V + C - L.touches[0][W])
        }
        function I(L) {
            const W = v.value - u.value;
            s.value < 0 || !o.value ? s.value = 0 : s.value >= W && (s.value = W),
            b.value = !1
        }
        function x() {
            d.value && (d.value[c.value ? "scrollLeft" : "scrollTop"] = 0)
        }
        const k = Y(!1);
        function w(L) {
            if (k.value = !0,
            !(!o.value || !m.value)) {
                for (const W of L.composedPath())
                    for (const Q of m.value.children)
                        if (Q === W) {
                            s.value = Fi({
                                selectedElement: Q,
                                containerSize: u.value,
                                contentSize: v.value,
                                isRtl: a.value,
                                currentScrollOffset: s.value,
                                isHorizontal: c.value
                            });
                            return
                        }
            }
        }
        function _(L) {
            k.value = !1
        }
        function B(L) {
            var W;
            !k.value && !(L.relatedTarget && ((W = m.value) != null && W.contains(L.relatedTarget))) && $()
        }
        function p(L) {
            m.value && (c.value ? L.key === "ArrowRight" ? $(a.value ? "prev" : "next") : L.key === "ArrowLeft" && $(a.value ? "next" : "prev") : L.key === "ArrowDown" ? $("next") : L.key === "ArrowUp" && $("prev"),
            L.key === "Home" ? $("first") : L.key === "End" && $("last"))
        }
        function $(L) {
            var W, Q, re, oe, de;
            if (m.value)
                if (!L)
                    (W = wn(m.value)[0]) == null || W.focus();
                else if (L === "next") {
                    const N = (Q = m.value.querySelector(":focus")) == null ? void 0 : Q.nextElementSibling;
                    N ? N.focus() : $("first")
                } else if (L === "prev") {
                    const N = (re = m.value.querySelector(":focus")) == null ? void 0 : re.previousElementSibling;
                    N ? N.focus() : $("last")
                } else
                    L === "first" ? (oe = m.value.firstElementChild) == null || oe.focus() : L === "last" && ((de = m.value.lastElementChild) == null || de.focus())
        }
        function F(L) {
            const W = s.value + (L === "prev" ? -1 : 1) * u.value;
            s.value = Oe(W, 0, v.value - u.value)
        }
        const E = g(()=>{
            let L = s.value > v.value - u.value ? -(v.value - u.value) + Oi(v.value - u.value - s.value) : -s.value;
            s.value <= 0 && (L = Oi(-s.value));
            const W = a.value && c.value ? -1 : 1;
            return {
                transform: `translate ${c.value ? "X" : "Y"}(${W * L}px)`,
                transition: b.value ? "none" : "",
                willChange: b.value ? "transform" : ""
            }
        }
        )
          , H = g(()=>({
            next: i.next,
            prev: i.prev,
            select: i.select,
            isSelected: i.isSelected
        }))
          , G = g(()=>{
            switch (e.showArrows) {
            case "always":
                return !0;
            case "desktop":
                return !l.value;
            case !0:
                return o.value || Math.abs(s.value) > 0;
            case "mobile":
                return l.value || o.value || Math.abs(s.value) > 0;
            default:
                return !l.value && (o.value || Math.abs(s.value) > 0)
            }
        }
        )
          , R = g(()=>Math.abs(s.value) > 0)
          , j = g(()=>v.value > Math.abs(s.value) + u.value);
        return D(()=>r(e.tag, {
            class: ["v-slide-group", {
                "v-slide-group--vertical": !c.value,
                "v-slide-group--has-affixes": G.value,
                "v-slide-group--is-overflowing": o.value
            }, e.class],
            style: e.style,
            tabindex: k.value || i.selected.value.length ? -1 : 0,
            onFocus: B
        }, {
            default: ()=>{
                var L, W, Q;
                return [G.value && r("div", {
                    key: "prev",
                    class: ["v-slide-group__prev", {
                        "v-slide-group__prev--disabled": !R.value
                    }],
                    onClick: ()=>F("prev")
                }, [((L = t.prev) == null ? void 0 : L.call(t, H.value)) ?? r(Da, null, {
                    default: ()=>[r(he, {
                        icon: a.value ? e.nextIcon : e.prevIcon
                    }, null)]
                })]), r("div", {
                    key: "container",
                    ref: d,
                    class: "v-slide-group__container",
                    onScroll: x
                }, [r("div", {
                    ref: m,
                    class: "v-slide-group__content",
                    style: E.value,
                    onTouchstartPassive: P,
                    onTouchmovePassive: A,
                    onTouchendPassive: I,
                    onFocusin: w,
                    onFocusout: _,
                    onKeydown: p
                }, [(W = t.default) == null ? void 0 : W.call(t, H.value)])]), G.value && r("div", {
                    key: "next",
                    class: ["v-slide-group__next", {
                        "v-slide-group__next--disabled": !j.value
                    }],
                    onClick: ()=>F("next")
                }, [((Q = t.next) == null ? void 0 : Q.call(t, H.value)) ?? r(Da, null, {
                    default: ()=>[r(he, {
                        icon: a.value ? e.prevIcon : e.nextIcon
                    }, null)]
                })])]
            }
        })),
        {
            selected: i.selected,
            scrollTo: F,
            scrollOffset: s,
            focus: $
        }
    }
})
  , Ym = M()({
    name: "VSlideGroupItem",
    props: cn(),
    emits: {
        "group:selected": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = dn(e, Xs);
        return ()=>{
            var l;
            return (l = t.default) == null ? void 0 : l.call(t, {
                isSelected: a.isSelected.value,
                select: a.select,
                toggle: a.toggle,
                selectedClass: a.selectedClass.value
            })
        }
    }
});
const Km = T({
    multiLine: Boolean,
    timeout: {
        type: [Number, String],
        default: 5e3
    },
    vertical: Boolean,
    ...At({
        location: "bottom"
    }),
    ...fn(),
    ...Ce(),
    ...lt(),
    ...ce(),
    ...vt(Fn({
        transition: "v-snackbar-transition"
    }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar")
  , Xm = M()({
    name: "VSnackbar",
    props: Km(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = ae(e, "modelValue")
          , {locationStyles: l} = Bt(e)
          , {positionClasses: i} = mn(e)
          , {scopeId: o} = hn()
          , {themeClasses: s} = me(e)
          , {colorClasses: u, colorStyles: v, variantClasses: c} = Ut(e)
          , {roundedClasses: d} = we(e)
          , f = U();
        Z(a, h),
        Z(()=>e.timeout, h),
        Ne(()=>{
            a.value && h()
        }
        );
        let m = -1;
        function h() {
            window.clearTimeout(m);
            const S = Number(e.timeout);
            !a.value || S === -1 || (m = window.setTimeout(()=>{
                a.value = !1
            }
            , S))
        }
        function y() {
            window.clearTimeout(m)
        }
        return D(()=>{
            const [S] = St.filterProps(e);
            return r(St, K({
                ref: f,
                class: ["v-snackbar", {
                    "v-snackbar--active": a.value,
                    "v-snackbar--multi-line": e.multiLine && !e.vertical,
                    "v-snackbar--vertical": e.vertical
                }, i.value, e.class],
                style: e.style
            }, S, {
                modelValue: a.value,
                "onUpdate:modelValue": b=>a.value = b,
                contentProps: K({
                    class: ["v-snackbar__wrapper", s.value, u.value, d.value, c.value],
                    style: [l.value, v.value],
                    onPointerenter: y,
                    onPointerleave: h
                }, S.contentProps),
                persistent: !0,
                noClickAnimation: !0,
                scrim: !1,
                scrollStrategy: "none",
                _disableGlobalStack: !0
            }, o), {
                default: ()=>[Wt(!1, "v-snackbar"), t.default && r("div", {
                    class: "v-snackbar__content",
                    role: "status",
                    "aria-live": "polite"
                }, [t.default()]), t.actions && r(ge, {
                    defaults: {
                        VBtn: {
                            variant: "text",
                            ripple: !1
                        }
                    }
                }, {
                    default: ()=>[r("div", {
                        class: "v-snackbar__actions"
                    }, [t.actions()])]
                })],
                activator: t.activator
            })
        }
        ),
        rt({}, f)
    }
});
const qm = T({
    indeterminate: Boolean,
    inset: Boolean,
    flat: Boolean,
    loading: {
        type: [Boolean, String],
        default: !1
    },
    ...wt(),
    ...ra()
}, "VSwitch")
  , Zm = M()({
    name: "VSwitch",
    inheritAttrs: !1,
    props: qm(),
    emits: {
        "update:focused": e=>!0,
        "update:modelValue": ()=>!0,
        "update:indeterminate": e=>!0
    },
    setup(e, n) {
        let {attrs: t, slots: a} = n;
        const l = ae(e, "indeterminate")
          , i = ae(e, "modelValue")
          , {loaderClasses: o} = sa(e)
          , {isFocused: s, focus: u, blur: v} = pt(e)
          , c = g(()=>typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color)
          , d = Re()
          , f = g(()=>e.id || `switch-${d}`);
        function m() {
            l.value && (l.value = !1)
        }
        return D(()=>{
            const [h,y] = Ht(t)
              , [S,b] = Ee.filterProps(e)
              , [C,V] = an.filterProps(e)
              , P = U();
            function A(I) {
                var x, k;
                I.stopPropagation(),
                I.preventDefault(),
                (k = (x = P.value) == null ? void 0 : x.input) == null || k.click()
            }
            return r(Ee, K({
                class: ["v-switch", {
                    "v-switch--inset": e.inset
                }, {
                    "v-switch--indeterminate": l.value
                }, o.value, e.class],
                style: e.style
            }, h, S, {
                id: f.value,
                focused: s.value
            }), {
                ...a,
                default: I=>{
                    let {id: x, messagesId: k, isDisabled: w, isReadonly: _, isValid: B} = I;
                    return r(an, K({
                        ref: P
                    }, C, {
                        modelValue: i.value,
                        "onUpdate:modelValue": [p=>i.value = p, m],
                        id: x.value,
                        "aria-describedby": k.value,
                        type: "checkbox",
                        "aria-checked": l.value ? "mixed" : void 0,
                        disabled: w.value,
                        readonly: _.value,
                        onFocus: u,
                        onBlur: v
                    }, y), {
                        ...a,
                        default: ()=>r("div", {
                            class: "v-switch__track",
                            onClick: A
                        }, null),
                        input: p=>{
                            let {textColorClasses: $, textColorStyles: F} = p;
                            return r("div", {
                                class: ["v-switch__thumb", $.value],
                                style: F.value
                            }, [e.loading && r(Tl, {
                                name: "v-switch",
                                active: !0,
                                color: B.value === !1 ? void 0 : c.value
                            }, {
                                default: E=>a.loader ? a.loader(E) : r(_l, {
                                    active: E.isActive,
                                    color: E.color,
                                    indeterminate: !0,
                                    size: "16",
                                    width: "2"
                                }, null)
                            })])
                        }
                    })
                }
            })
        }
        ),
        {}
    }
});
const Jm = T({
    color: String,
    height: [Number, String],
    window: Boolean,
    ...X(),
    ...Ae(),
    ...sn(),
    ...Ce(),
    ...le(),
    ...ce()
}, "VSystemBar")
  , Qm = M()({
    name: "VSystemBar",
    props: Jm(),
    setup(e, n) {
        let {slots: t} = n;
        const {themeClasses: a} = me(e)
          , {backgroundColorClasses: l, backgroundColorStyles: i} = Pe(O(e, "color"))
          , {elevationClasses: o} = Le(e)
          , {roundedClasses: s} = we(e)
          , {ssrBootStyles: u} = Gt()
          , v = g(()=>e.height ?? (e.window ? 32 : 24))
          , {layoutItemStyles: c} = rn({
            id: e.name,
            order: g(()=>parseInt(e.order, 10)),
            position: Y("top"),
            layoutSize: v,
            elementSize: v,
            active: g(()=>!0),
            absolute: O(e, "absolute")
        });
        return D(()=>r(e.tag, {
            class: ["v-system-bar", {
                "v-system-bar--window": e.window
            }, a.value, l.value, o.value, s.value, e.class],
            style: [i.value, c.value, u.value, e.style]
        }, t)),
        {}
    }
});
const Zs = Symbol.for("vuetify:v-tabs")
  , eg = T({
    fixed: Boolean,
    sliderColor: String,
    hideSlider: Boolean,
    direction: {
        type: String,
        default: "horizontal"
    },
    ...vt(pl({
        selectedClass: "v-tab--selected",
        variant: "text"
    }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab")
  , Js = M()({
    name: "VTab",
    props: eg(),
    setup(e, n) {
        let {slots: t, attrs: a} = n;
        const {textColorClasses: l, textColorStyles: i} = Fe(e, "sliderColor")
          , o = g(()=>e.direction === "horizontal")
          , s = Y(!1)
          , u = U()
          , v = U();
        function c(d) {
            var m, h;
            let {value: f} = d;
            if (s.value = f,
            f) {
                const y = (h = (m = u.value) == null ? void 0 : m.$el.parentElement) == null ? void 0 : h.querySelector(".v-tab--selected .v-tab__slider")
                  , S = v.value;
                if (!y || !S)
                    return;
                const b = getComputedStyle(y).color
                  , C = y.getBoundingClientRect()
                  , V = S.getBoundingClientRect()
                  , P = o.value ? "x" : "y"
                  , A = o.value ? "X" : "Y"
                  , I = o.value ? "right" : "bottom"
                  , x = o.value ? "width" : "height"
                  , k = C[P]
                  , w = V[P]
                  , _ = k > w ? C[I] - V[I] : C[P] - V[P]
                  , B = Math.sign(_) > 0 ? o.value ? "right" : "bottom" : Math.sign(_) < 0 ? o.value ? "left" : "top" : "center"
                  , $ = (Math.abs(_) + (Math.sign(_) < 0 ? C[x] : V[x])) / Math.max(C[x], V[x])
                  , F = C[x] / V[x]
                  , E = 1.5;
                Ot(S, {
                    backgroundColor: [b, "currentcolor"],
                    transform: [`translate ${A}(${_}px) scale ${A}(${F})`, `translate ${A}(${_ / E}px) scale ${A}(${($ - 1) / E + 1})`, "none"],
                    transformOrigin: Array(3).fill(B)
                }, {
                    duration: 225,
                    easing: xn
                })
            }
        }
        return D(()=>{
            const [d] = ze.filterProps(e);
            return r(ze, K({
                symbol: Zs,
                ref: u,
                class: ["v-tab", e.class],
                style: e.style,
                tabindex: s.value ? 0 : -1,
                role: "tab",
                "aria-selected": String(s.value),
                active: !1,
                block: e.fixed,
                maxWidth: e.fixed ? 300 : void 0,
                rounded: 0
            }, d, a, {
                "onGroup:selected": c
            }), {
                default: ()=>{
                    var f;
                    return [((f = t.default) == null ? void 0 : f.call(t)) ?? e.text, !e.hideSlider && r("div", {
                        ref: v,
                        class: ["v-tab__slider", l.value],
                        style: i.value
                    }, null)]
                }
            })
        }
        ),
        {}
    }
});
function tg(e) {
    return e ? e.map(n=>typeof n == "string" ? {
        title: n,
        value: n
    } : n) : []
}
const ng = T({
    alignTabs: {
        type: String,
        default: "start"
    },
    color: String,
    fixedTabs: Boolean,
    items: {
        type: Array,
        default: ()=>[]
    },
    stacked: Boolean,
    bgColor: String,
    grow: Boolean,
    height: {
        type: [Number, String],
        default: void 0
    },
    hideSlider: Boolean,
    sliderColor: String,
    ...qs({
        mandatory: "force"
    }),
    ...Be(),
    ...le()
}, "VTabs")
  , ag = M()({
    name: "VTabs",
    props: ng(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = ae(e, "modelValue")
          , l = g(()=>tg(e.items))
          , {densityClasses: i} = De(e)
          , {backgroundColorClasses: o, backgroundColorStyles: s} = Pe(O(e, "bgColor"));
        return xe({
            VTab: {
                color: O(e, "color"),
                direction: O(e, "direction"),
                stacked: O(e, "stacked"),
                fixed: O(e, "fixedTabs"),
                sliderColor: O(e, "sliderColor"),
                hideSlider: O(e, "hideSlider")
            }
        }),
        D(()=>{
            const [u] = ll.filterProps(e);
            return r(ll, K(u, {
                modelValue: a.value,
                "onUpdate:modelValue": v=>a.value = v,
                class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
                    "v-tabs--fixed-tabs": e.fixedTabs,
                    "v-tabs--grow": e.grow,
                    "v-tabs--stacked": e.stacked
                }, i.value, o.value, e.class],
                style: [{
                    "--v-tabs-height": q(e.height)
                }, s.value, e.style],
                role: "tablist",
                symbol: Zs
            }), {
                default: ()=>[t.default ? t.default() : l.value.map(v=>r(Js, K(v, {
                    key: v.title
                }), null))]
            })
        }
        ),
        {}
    }
});
const lg = T({
    fixedHeader: Boolean,
    fixedFooter: Boolean,
    height: [Number, String],
    hover: Boolean,
    ...X(),
    ...Be(),
    ...le(),
    ...ce()
}, "VTable")
  , ig = M()({
    name: "VTable",
    props: lg(),
    setup(e, n) {
        let {slots: t} = n;
        const {themeClasses: a} = me(e)
          , {densityClasses: l} = De(e);
        return D(()=>r(e.tag, {
            class: ["v-table", {
                "v-table--fixed-height": !!e.height,
                "v-table--fixed-header": e.fixedHeader,
                "v-table--fixed-footer": e.fixedFooter,
                "v-table--has-top": !!t.top,
                "v-table--has-bottom": !!t.bottom,
                "v-table--hover": e.hover
            }, a.value, l.value, e.class],
            style: e.style
        }, {
            default: ()=>{
                var i, o, s;
                return [(i = t.top) == null ? void 0 : i.call(t), t.default ? r("div", {
                    class: "v-table__wrapper",
                    style: {
                        height: q(e.height)
                    }
                }, [r("table", null, [t.default()])]) : (o = t.wrapper) == null ? void 0 : o.call(t), (s = t.bottom) == null ? void 0 : s.call(t)]
            }
        })),
        {}
    }
});
const og = T({
    autoGrow: Boolean,
    autofocus: Boolean,
    counter: [Boolean, Number, String],
    counterValue: Function,
    prefix: String,
    placeholder: String,
    persistentPlaceholder: Boolean,
    persistentCounter: Boolean,
    noResize: Boolean,
    rows: {
        type: [Number, String],
        default: 5,
        validator: e=>!isNaN(parseFloat(e))
    },
    maxRows: {
        type: [Number, String],
        validator: e=>!isNaN(parseFloat(e))
    },
    suffix: String,
    modelModifiers: Object,
    ...wt(),
    ...ga()
}, "VTextarea")
  , sg = M()({
    name: "VTextarea",
    directives: {
        Intersect: En
    },
    inheritAttrs: !1,
    props: og(),
    emits: {
        "click:control": e=>!0,
        "mousedown:control": e=>!0,
        "update:focused": e=>!0,
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {attrs: t, emit: a, slots: l} = n;
        const i = ae(e, "modelValue")
          , {isFocused: o, focus: s, blur: u} = pt(e)
          , v = g(()=>typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length)
          , c = g(()=>{
            if (t.maxlength)
                return t.maxlength;
            if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
                return e.counter
        }
        );
        function d(B, p) {
            var $, F;
            !e.autofocus || !B || (F = ($ = p[0].target) == null ? void 0 : $.focus) == null || F.call($)
        }
        const f = U()
          , m = U()
          , h = Y("")
          , y = U()
          , S = g(()=>e.persistentPlaceholder || o.value || e.active);
        function b() {
            var B;
            y.value !== document.activeElement && ((B = y.value) == null || B.focus()),
            o.value || s()
        }
        function C(B) {
            b(),
            a("click:control", B)
        }
        function V(B) {
            a("mousedown:control", B)
        }
        function P(B) {
            B.stopPropagation(),
            b(),
            Se(()=>{
                i.value = "",
                vl(e["onClick:clear"], B)
            }
            )
        }
        function A(B) {
            var $;
            const p = B.target;
            if (i.value = p.value,
            ($ = e.modelModifiers) != null && $.trim) {
                const F = [p.selectionStart, p.selectionEnd];
                Se(()=>{
                    p.selectionStart = F[0],
                    p.selectionEnd = F[1]
                }
                )
            }
        }
        const I = U()
          , x = U(+e.rows)
          , k = g(()=>["plain", "underlined"].includes(e.variant));
        Ge(()=>{
            e.autoGrow || (x.value = +e.rows)
        }
        );
        function w() {
            e.autoGrow && Se(()=>{
                if (!I.value || !m.value)
                    return;
                const B = getComputedStyle(I.value)
                  , p = getComputedStyle(m.value.$el)
                  , $ = parseFloat(B.getPropertyValue("--v-field-padding-top")) + parseFloat(B.getPropertyValue("--v-input-padding-top")) + parseFloat(B.getPropertyValue("--v-field-padding-bottom"))
                  , F = I.value.scrollHeight
                  , E = parseFloat(B.lineHeight)
                  , H = Math.max(parseFloat(e.rows) * E + $, parseFloat(p.getPropertyValue("--v-input-control-height")))
                  , G = parseFloat(e.maxRows) * E + $ || 1 / 0
                  , R = Oe(F ?? 0, H, G);
                x.value = Math.floor((R - $) / E),
                h.value = q(R)
            }
            )
        }
        Ne(w),
        Z(i, w),
        Z(()=>e.rows, w),
        Z(()=>e.maxRows, w),
        Z(()=>e.density, w);
        let _;
        return Z(I, B=>{
            B ? (_ = new ResizeObserver(w),
            _.observe(I.value)) : _ == null || _.disconnect()
        }
        ),
        Ue(()=>{
            _ == null || _.disconnect()
        }
        ),
        D(()=>{
            const B = !!(l.counter || e.counter || e.counterValue)
              , p = !!(B || l.details)
              , [$,F] = Ht(t)
              , [{modelValue: E, ...H}] = Ee.filterProps(e)
              , [G] = Ol(e);
            return r(Ee, K({
                ref: f,
                modelValue: i.value,
                "onUpdate:modelValue": R=>i.value = R,
                class: ["v-textarea v-text-field", {
                    "v-textarea--prefixed": e.prefix,
                    "v-textarea--suffixed": e.suffix,
                    "v-text-field--prefixed": e.prefix,
                    "v-text-field--suffixed": e.suffix,
                    "v-textarea--auto-grow": e.autoGrow,
                    "v-textarea--no-resize": e.noResize || e.autoGrow,
                    "v-text-field--plain-underlined": k.value
                }, e.class],
                style: e.style
            }, $, H, {
                centerAffix: x.value === 1 && !k.value,
                focused: o.value
            }), {
                ...l,
                default: R=>{
                    let {isDisabled: j, isDirty: L, isReadonly: W, isValid: Q} = R;
                    return r(Rn, K({
                        ref: m,
                        style: {
                            "--v-textarea-control-height": h.value
                        },
                        onClick: C,
                        onMousedown: V,
                        "onClick:clear": P,
                        "onClick:prependInner": e["onClick:prependInner"],
                        "onClick:appendInner": e["onClick:appendInner"],
                        role: "textbox"
                    }, G, {
                        active: S.value || L.value,
                        centerAffix: x.value === 1 && !k.value,
                        dirty: L.value || e.dirty,
                        disabled: j.value,
                        focused: o.value,
                        error: Q.value === !1
                    }), {
                        ...l,
                        default: re=>{
                            let {props: {class: oe, ...de}} = re;
                            return r(se, null, [e.prefix && r("span", {
                                class: "v-text-field__prefix"
                            }, [e.prefix]), Ve(r("textarea", K({
                                ref: y,
                                class: oe,
                                value: i.value,
                                onInput: A,
                                autofocus: e.autofocus,
                                readonly: W.value,
                                disabled: j.value,
                                placeholder: e.placeholder,
                                rows: e.rows,
                                name: e.name,
                                onFocus: b,
                                onBlur: u
                            }, de, F), null), [[Ye("intersect"), {
                                handler: d
                            }, null, {
                                once: !0
                            }]]), e.autoGrow && Ve(r("textarea", {
                                class: [oe, "v-textarea__sizer"],
                                "onUpdate:modelValue": N=>i.value = N,
                                ref: I,
                                readonly: !0,
                                "aria-hidden": "true"
                            }, null), [[vr, i.value]]), e.suffix && r("span", {
                                class: "v-text-field__suffix"
                            }, [e.suffix])])
                        }
                    })
                }
                ,
                details: p ? R=>{
                    var j;
                    return r(se, null, [(j = l.details) == null ? void 0 : j.call(l, R), B && r(se, null, [r("span", null, null), r(ma, {
                        active: e.persistentCounter || o.value,
                        value: v.value,
                        max: c.value
                    }, l.counter)])])
                }
                : void 0
            })
        }
        ),
        rt({}, f, m, y)
    }
});
const rg = T({
    withBackground: Boolean,
    ...X(),
    ...ce(),
    ...le()
}, "VThemeProvider")
  , ug = M()({
    name: "VThemeProvider",
    props: rg(),
    setup(e, n) {
        let {slots: t} = n;
        const {themeClasses: a} = me(e);
        return ()=>{
            var l;
            return e.withBackground ? r(e.tag, {
                class: ["v-theme-provider", a.value, e.class],
                style: e.style
            }, {
                default: ()=>{
                    var i;
                    return [(i = t.default) == null ? void 0 : i.call(t)]
                }
            }) : (l = t.default) == null ? void 0 : l.call(t)
        }
    }
});
const cg = T({
    align: {
        type: String,
        default: "center",
        validator: e=>["center", "start"].includes(e)
    },
    direction: {
        type: String,
        default: "vertical",
        validator: e=>["vertical", "horizontal"].includes(e)
    },
    justify: {
        type: String,
        default: "auto",
        validator: e=>["auto", "center"].includes(e)
    },
    side: {
        type: String,
        validator: e=>e == null || ["start", "end"].includes(e)
    },
    lineInset: {
        type: [String, Number],
        default: 0
    },
    lineThickness: {
        type: [String, Number],
        default: 2
    },
    lineColor: String,
    truncateLine: {
        type: String,
        validator: e=>["start", "end", "both"].includes(e)
    },
    ...X(),
    ...Be(),
    ...le(),
    ...ce()
}, "VTimeline")
  , dg = M()({
    name: "VTimeline",
    props: cg(),
    setup(e, n) {
        let {slots: t} = n;
        const {themeClasses: a} = me(e)
          , {densityClasses: l} = De(e)
          , {rtlClasses: i} = $e();
        xe({
            VTimelineDivider: {
                lineColor: O(e, "lineColor")
            },
            VTimelineItem: {
                density: O(e, "density"),
                lineInset: O(e, "lineInset")
            }
        });
        const o = g(()=>{
            const u = e.side ? e.side : e.density !== "default" ? "end" : null;
            return u && `v-timeline--side-${u}`
        }
        )
          , s = g(()=>{
            const u = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
            switch (e.truncateLine) {
            case "both":
                return u;
            case "start":
                return u[0];
            case "end":
                return u[1];
            default:
                return null
            }
        }
        );
        return D(()=>r(e.tag, {
            class: ["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, s.value, {
                "v-timeline--inset-line": !!e.lineInset
            }, a.value, l.value, o.value, i.value, e.class],
            style: [{
                "--v-timeline-line-thickness": q(e.lineThickness)
            }, e.style]
        }, t)),
        {}
    }
})
  , vg = T({
    dotColor: String,
    fillDot: Boolean,
    hideDot: Boolean,
    icon: ne,
    iconColor: String,
    lineColor: String,
    ...X(),
    ...Ce(),
    ...Vt(),
    ...Ae()
}, "VTimelineDivider")
  , fg = M()({
    name: "VTimelineDivider",
    props: vg(),
    setup(e, n) {
        let {slots: t} = n;
        const {sizeClasses: a, sizeStyles: l} = vn(e, "v-timeline-divider__dot")
          , {backgroundColorStyles: i, backgroundColorClasses: o} = Pe(O(e, "dotColor"))
          , {roundedClasses: s} = we(e, "v-timeline-divider__dot")
          , {elevationClasses: u} = Le(e)
          , {backgroundColorClasses: v, backgroundColorStyles: c} = Pe(O(e, "lineColor"));
        return D(()=>r("div", {
            class: ["v-timeline-divider", {
                "v-timeline-divider--fill-dot": e.fillDot
            }, e.class],
            style: e.style
        }, [r("div", {
            class: ["v-timeline-divider__before", v.value],
            style: c.value
        }, null), !e.hideDot && r("div", {
            key: "dot",
            class: ["v-timeline-divider__dot", u.value, s.value, a.value],
            style: l.value
        }, [r("div", {
            class: ["v-timeline-divider__inner-dot", o.value, s.value],
            style: i.value
        }, [t.default ? r(ge, {
            key: "icon-defaults",
            disabled: !e.icon,
            defaults: {
                VIcon: {
                    color: e.iconColor,
                    icon: e.icon,
                    size: e.size
                }
            }
        }, t.default) : r(he, {
            key: "icon",
            color: e.iconColor,
            icon: e.icon,
            size: e.size
        }, null)])]), r("div", {
            class: ["v-timeline-divider__after", v.value],
            style: c.value
        }, null)])),
        {}
    }
})
  , mg = T({
    density: String,
    dotColor: String,
    fillDot: Boolean,
    hideDot: Boolean,
    hideOpposite: {
        type: Boolean,
        default: void 0
    },
    icon: ne,
    iconColor: String,
    lineInset: [Number, String],
    ...X(),
    ...tt(),
    ...Ae(),
    ...Ce(),
    ...Vt(),
    ...le()
}, "VTimelineItem")
  , gg = M()({
    name: "VTimelineItem",
    props: mg(),
    setup(e, n) {
        let {slots: t} = n;
        const {dimensionStyles: a} = nt(e)
          , l = Y(0)
          , i = U();
        return Z(i, o=>{
            var s;
            o && (l.value = ((s = o.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : s.getBoundingClientRect().width) ?? 0)
        }
        , {
            flush: "post"
        }),
        D(()=>{
            var o, s;
            return r("div", {
                class: ["v-timeline-item", {
                    "v-timeline-item--fill-dot": e.fillDot
                }, e.class],
                style: [{
                    "--v-timeline-dot-size": q(l.value),
                    "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${q(e.lineInset)})` : q(0)
                }, e.style]
            }, [r("div", {
                class: "v-timeline-item__body",
                style: a.value
            }, [(o = t.default) == null ? void 0 : o.call(t)]), r(fg, {
                ref: i,
                hideDot: e.hideDot,
                icon: e.icon,
                iconColor: e.iconColor,
                size: e.size,
                elevation: e.elevation,
                dotColor: e.dotColor,
                fillDot: e.fillDot,
                rounded: e.rounded
            }, {
                default: t.icon
            }), e.density !== "compact" && r("div", {
                class: "v-timeline-item__opposite"
            }, [!e.hideOpposite && ((s = t.opposite) == null ? void 0 : s.call(t))])])
        }
        ),
        {}
    }
})
  , hg = T({
    ...X(),
    ...lt({
        variant: "text"
    })
}, "VToolbarItems")
  , yg = M()({
    name: "VToolbarItems",
    props: hg(),
    setup(e, n) {
        let {slots: t} = n;
        return xe({
            VBtn: {
                color: O(e, "color"),
                height: "inherit",
                variant: O(e, "variant")
            }
        }),
        D(()=>{
            var a;
            return r("div", {
                class: ["v-toolbar-items", e.class],
                style: e.style
            }, [(a = t.default) == null ? void 0 : a.call(t)])
        }
        ),
        {}
    }
});
const bg = T({
    id: String,
    text: String,
    ...vt(Fn({
        closeOnBack: !1,
        location: "end",
        locationStrategy: "connected",
        eager: !0,
        minWidth: 0,
        offset: 10,
        openOnClick: !1,
        openOnHover: !0,
        origin: "auto",
        scrim: !1,
        scrollStrategy: "reposition",
        transition: !1
    }), ["absolute", "persistent"])
}, "VTooltip")
  , Sg = M()({
    name: "VTooltip",
    props: bg(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = ae(e, "modelValue")
          , {scopeId: l} = hn()
          , i = Re()
          , o = g(()=>e.id || `v-tooltip-${i}`)
          , s = U()
          , u = g(()=>e.location.split(" ").length > 1 ? e.location : e.location + " center")
          , v = g(()=>e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center")
          , c = g(()=>e.transition ? e.transition : a.value ? "scale-transition" : "fade-transition")
          , d = g(()=>K({
            "aria-describedby": o.value
        }, e.activatorProps));
        return D(()=>{
            const [f] = St.filterProps(e);
            return r(St, K({
                ref: s,
                class: ["v-tooltip", e.class],
                style: e.style,
                id: o.value
            }, f, {
                modelValue: a.value,
                "onUpdate:modelValue": m=>a.value = m,
                transition: c.value,
                absolute: !0,
                location: u.value,
                origin: v.value,
                persistent: !0,
                role: "tooltip",
                activatorProps: d.value,
                _disableGlobalStack: !0
            }, l), {
                activator: t.activator,
                default: function() {
                    var S;
                    for (var m = arguments.length, h = new Array(m), y = 0; y < m; y++)
                        h[y] = arguments[y];
                    return ((S = t.default) == null ? void 0 : S.call(t, ...h)) ?? e.text
                }
            })
        }
        ),
        rt({}, s)
    }
})
  , Cg = M()({
    name: "VValidation",
    props: jo(),
    emits: {
        "update:modelValue": e=>!0
    },
    setup(e, n) {
        let {slots: t} = n;
        const a = Go(e, "validation");
        return ()=>{
            var l;
            return (l = t.default) == null ? void 0 : l.call(t, a)
        }
    }
})
  , kg = Object.freeze(Object.defineProperty({
    __proto__: null,
    VAlert: Kc,
    VAlertTitle: Oo,
    VApp: lc,
    VAppBar: xc,
    VAppBarNavIcon: Gc,
    VAppBarTitle: Wc,
    VAutocomplete: fv,
    VAvatar: Pt,
    VBadge: gv,
    VBanner: bv,
    VBannerActions: hs,
    VBannerText: ys,
    VBottomNavigation: Cv,
    VBreadcrumbs: xv,
    VBreadcrumbsDivider: bs,
    VBreadcrumbsItem: Ss,
    VBtn: ze,
    VBtnGroup: Ha,
    VBtnToggle: Tc,
    VCard: _v,
    VCardActions: Cs,
    VCardItem: ws,
    VCardSubtitle: ks,
    VCardText: xs,
    VCardTitle: Vs,
    VCarousel: Ov,
    VCarouselItem: Rv,
    VCheckbox: nd,
    VCheckboxBtn: ln,
    VChip: On,
    VChipGroup: id,
    VClassIcon: Cl,
    VCode: Dv,
    VCol: Zf,
    VColorPicker: Af,
    VCombobox: pf,
    VComponentIcon: Oa,
    VContainer: Yf,
    VCounter: ma,
    VDefaultsProvider: ge,
    VDialog: Ef,
    VDialogBottomTransition: rc,
    VDialogTopTransition: uc,
    VDialogTransition: ia,
    VDivider: ts,
    VExpandTransition: oa,
    VExpandXTransition: wl,
    VExpansionPanel: Df,
    VExpansionPanelText: Ms,
    VExpansionPanelTitle: Fs,
    VExpansionPanels: Of,
    VFabTransition: sc,
    VFadeTransition: Da,
    VField: Rn,
    VFieldLabel: Cn,
    VFileInput: Nf,
    VFooter: jf,
    VForm: Wf,
    VHover: sm,
    VIcon: he,
    VImg: Dt,
    VInput: Ee,
    VItem: cm,
    VItemGroup: um,
    VKbd: dm,
    VLabel: gn,
    VLayout: fm,
    VLayoutItem: gm,
    VLazy: ym,
    VLigatureIcon: vu,
    VList: da,
    VListGroup: Ua,
    VListImg: Id,
    VListItem: bt,
    VListItemAction: Ad,
    VListItemMedia: Td,
    VListItemSubtitle: Jo,
    VListItemTitle: Qo,
    VListSubheader: es,
    VLocaleProvider: Sm,
    VMain: km,
    VMenu: fa,
    VMessages: No,
    VNavigationDrawer: Tm,
    VNoSsr: pm,
    VOverlay: St,
    VPagination: Lm,
    VParallax: Fm,
    VProgressCircular: _l,
    VProgressLinear: Al,
    VRadio: Dm,
    VRadioGroup: Nm,
    VRangeSlider: jm,
    VRating: Wm,
    VResponsive: za,
    VRow: lm,
    VScaleTransition: Co,
    VScrollXReverseTransition: dc,
    VScrollXTransition: cc,
    VScrollYReverseTransition: fc,
    VScrollYTransition: vc,
    VSelect: rv,
    VSelectionControl: an,
    VSelectionControlGroup: Ro,
    VSheet: al,
    VSlideGroup: ll,
    VSlideGroupItem: Ym,
    VSlideXReverseTransition: gc,
    VSlideXTransition: mc,
    VSlideYReverseTransition: hc,
    VSlideYTransition: Vl,
    VSlider: nl,
    VSnackbar: Xm,
    VSpacer: im,
    VSvgIcon: Sl,
    VSwitch: Zm,
    VSystemBar: Qm,
    VTab: Js,
    VTable: ig,
    VTabs: ag,
    VTextField: zt,
    VTextarea: sg,
    VThemeProvider: ug,
    VTimeline: dg,
    VTimelineItem: gg,
    VToolbar: Na,
    VToolbarItems: yg,
    VToolbarTitle: kl,
    VTooltip: Sg,
    VValidation: Cg,
    VVirtualScroll: ya,
    VWindow: qa,
    VWindowItem: Za
}, Symbol.toStringTag, {
    value: "Module"
}));
function Vg(e, n) {
    const t = n.modifiers || {}
      , a = n.value
      , {once: l, immediate: i, ...o} = t
      , s = !Object.keys(o).length
      , {handler: u, options: v} = typeof a == "object" ? a : {
        handler: a,
        options: {
            attributes: (o == null ? void 0 : o.attr) ?? s,
            characterData: (o == null ? void 0 : o.char) ?? s,
            childList: (o == null ? void 0 : o.child) ?? s,
            subtree: (o == null ? void 0 : o.sub) ?? s
        }
    }
      , c = new MutationObserver(function() {
        let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
          , f = arguments.length > 1 ? arguments[1] : void 0;
        u == null || u(d, f),
        l && Qs(e, n)
    }
    );
    i && (u == null || u([], c)),
    e._mutate = Object(e._mutate),
    e._mutate[n.instance.$.uid] = {
        observer: c
    },
    c.observe(e, v)
}
function Qs(e, n) {
    var t;
    (t = e._mutate) != null && t[n.instance.$.uid] && (e._mutate[n.instance.$.uid].observer.disconnect(),
    delete e._mutate[n.instance.$.uid])
}
const wg = {
    mounted: Vg,
    unmounted: Qs
};
function xg(e, n) {
    var l, i;
    const t = n.value
      , a = {
        passive: !((l = n.modifiers) != null && l.active)
    };
    window.addEventListener("resize", t, a),
    e._onResize = Object(e._onResize),
    e._onResize[n.instance.$.uid] = {
        handler: t,
        options: a
    },
    (i = n.modifiers) != null && i.quiet || t()
}
function Pg(e, n) {
    var l;
    if (!((l = e._onResize) != null && l[n.instance.$.uid]))
        return;
    const {handler: t, options: a} = e._onResize[n.instance.$.uid];
    window.removeEventListener("resize", t, a),
    delete e._onResize[n.instance.$.uid]
}
const Ig = {
    mounted: xg,
    unmounted: Pg
};
function er(e, n) {
    const {self: t=!1} = n.modifiers ?? {}
      , a = n.value
      , l = typeof a == "object" && a.options || {
        passive: !0
    }
      , i = typeof a == "function" || "handleEvent"in a ? a : a.handler
      , o = t ? e : n.arg ? document.querySelector(n.arg) : window;
    o && (o.addEventListener("scroll", i, l),
    e._onScroll = Object(e._onScroll),
    e._onScroll[n.instance.$.uid] = {
        handler: i,
        options: l,
        target: t ? void 0 : o
    })
}
function tr(e, n) {
    var i;
    if (!((i = e._onScroll) != null && i[n.instance.$.uid]))
        return;
    const {handler: t, options: a, target: l=e} = e._onScroll[n.instance.$.uid];
    l.removeEventListener("scroll", t, a),
    delete e._onScroll[n.instance.$.uid]
}
function _g(e, n) {
    n.value !== n.oldValue && (tr(e, n),
    er(e, n))
}
const Ag = {
    mounted: er,
    unmounted: tr,
    updated: _g
}
  , Bg = Object.freeze(Object.defineProperty({
    __proto__: null,
    ClickOutside: fs,
    Intersect: En,
    Mutate: wg,
    Resize: Ig,
    Ripple: Tt,
    Scroll: Ag,
    Touch: Dl
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Tg = ho({
    components: kg,
    directives: Bg
})
  , pg = {
    ...Ar,
    enhanceApp({app: e, router: n, siteData: t}) {
        e.use(Tg)
    }
};
function nr(e) {
    if (e.extends) {
        const n = nr(e.extends);
        return {
            ...n,
            ...e,
            async enhanceApp(t) {
                n.enhanceApp && await n.enhanceApp(t),
                e.enhanceApp && await e.enhanceApp(t)
            }
        }
    }
    return e
}
const en = nr(pg)
  , $g = Di({
    name: "VitePressApp",
    setup() {
        const {site: e} = mr();
        return Ne(()=>{
            Ge(()=>{
                document.documentElement.lang = e.value.lang,
                document.documentElement.dir = e.value.dir
            }
            )
        }
        ),
        gr(),
        hr(),
        yr(),
        en.setup && en.setup(),
        ()=>It(en.Layout)
    }
});
async function Eg() {
    const e = Mg()
      , n = Lg();
    n.provide(br, e);
    const t = Sr(e.route);
    return n.provide(Cr, t),
    n.component("Content", kr),
    n.component("ClientOnly", Vr),
    Object.defineProperties(n.config.globalProperties, {
        $frontmatter: {
            get() {
                return t.frontmatter.value
            }
        },
        $params: {
            get() {
                return t.page.value.params
            }
        }
    }),
    en.enhanceApp && await en.enhanceApp({
        app: n,
        router: e,
        siteData: wr
    }),
    {
        app: n,
        router: e,
        data: t
    }
}
function Lg() {
    return xr($g)
}
function Mg() {
    let e = Ia, n;
    return Pr(t=>{
        let a = Ir(t);
        return a ? (e && (n = a),
        (e || n === a) && (a = a.replace(/\.js$/, ".lean.js")),
        Ia && (e = !1),
        _r(()=>import(a), [])) : null
    }
    , en.NotFound)
}
Ia && Eg().then(({app: e, router: n, data: t})=>{
    n.go().then(()=>{
        fr(n.route, t.site),
        e.mount("#app")
    }
    )
}
);
export {Eg as createApp};

