import { a as e } from "./rolldown-runtime.js";
import { n as t, v as n, x as r } from "./vendor-react.js";
import { D as i, E as a, O as o, k as s } from "./vendor-ui.js";
import { a as c, i as l, n as u } from "./AdminContext.js";
import { B as d, F as f, H as p, S as m, i as h, j as g, p as _, u as v, } from "./lucide-react.js";
import { a as y, c as b, d as x, f as S, h as C, i as w, l as T, n as E, o as D, r as O, s as k, t as A, u as j, } from "./index.js";
import { t as M } from "./ScrollReveal.js";
import { t as N } from "./storyImages.js";
var P = n();
function ee({ className: e, ...t }) {
  return (0, P.jsx)(`div`, {
    className: c(`animate-pulse rounded-md bg-muted`, e),
    ...t,
  });
}
var F = e(r(), 1),
  te = (e) =>
    e.startsWith(`http`) || e.startsWith(`/`) ? e : `/img/stories/${e}`,
  ne = (0, F.memo)(
    ({ images: e, reverse: t = !1, speed: n = `30s`, onSelect: r }) => {
      let i = (t) =>
        e.map((e, n) =>
          (0, P.jsxs)(
            `div`,
            {
              onClick: (t) => {
                (t.stopPropagation(), r(e));
              },
              className: `w-40 h-52 mobile:w-48 mobile:h-60 sm:w-52 sm:h-64 md:w-64 md:h-80 flex-shrink-0 rounded-xl mobile:rounded-2xl overflow-hidden shadow-lg border border-white/10 group relative transition-transform hover:scale-105 active:scale-95`,
              children: [
                (0, P.jsx)(`img`, {
                  src: te(e),
                  alt: `Travel Story`,
                  className: `w-full h-full object-cover`,
                  loading: `lazy`,
                }),
                (0, P.jsx)(`div`, {
                  className: `absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500`,
                }),
              ],
            },
            `${t}-${n}`,
          ),
        );
      return (0, P.jsx)(`div`, {
        className: `w-full overflow-hidden select-none py-2 mobile:py-3 cursor-pointer`,
        children: (0, P.jsxs)(`div`, {
          className: `flex w-max shrink-0 ${t ? `animate-marquee-reverse` : `animate-marquee`}`,
          style: { animationDuration: n },
          children: [
            (0, P.jsx)(`div`, {
              className: `flex gap-3 mobile:gap-4 sm:gap-6 pr-3 mobile:pr-4 sm:pr-6 flex-shrink-0`,
              children: i(`a`),
            }),
            (0, P.jsx)(`div`, {
              className: `flex gap-3 mobile:gap-4 sm:gap-6 pr-3 mobile:pr-4 sm:pr-6 flex-shrink-0`,
              children: i(`b`),
            }),
          ],
        }),
      });
    },
  );
ne.displayName = `MarqueeRow`;
var re = () => {
  let { homeContent: e } = u(),
    [t, n] = (0, F.useState)(!1),
    [r, i] = (0, F.useState)(null),
    a = (0, F.useMemo)(
      () =>
        e?.communityImages && e.communityImages.length > 0
          ? e.communityImages
          : N,
      [e?.communityImages],
    ),
    [o, c, l] = (0, F.useMemo)(() => {
      if (a.length === 0) return [[], [], []];
      let e = [...a];
      for (; e.length < 60;) e = [...e, ...a];
      let t = [],
        n = [],
        r = [];
      return (
        e.forEach((e, i) => {
          i % 3 == 0 ? t.push(e) : i % 3 == 1 ? n.push(e) : r.push(e);
        }),
        [t, n, r]
      );
    }, [a]),
    d = (0, F.useCallback)((e) => {
      (i(e), n(!0));
    }, []);
  return (0, P.jsxs)(`div`, {
    className: `relative py-12 bg-white overflow-hidden`,
    children: [
      (0, P.jsxs)(`div`, {
        className: `space-y-3 mobile:space-y-4 ${t ? `marquee-paused` : ``}`,
        children: [
          (0, P.jsx)(ne, { images: o, speed: `80s`, onSelect: d }),
          (0, P.jsx)(ne, { images: c, reverse: !0, speed: `75s`, onSelect: d }),
          (0, P.jsx)(ne, { images: l, speed: `90s`, onSelect: d }),
        ],
      }),
      (0, P.jsx)(T, {
        open: !!r,
        onOpenChange: (e) => {
          e || (i(null), n(!1));
        },
        children: (0, P.jsxs)(j, {
          className: `max-w-4xl border-none bg-transparent shadow-none p-0 flex items-center justify-center`,
          closeClassName: `text-white hover:text-red-500 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2.5 right-4 top-4 mobile:right-6 mobile:top-6 transition-all duration-300 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:outline-none focus:outline-none [&>svg]:w-5 [&>svg]:h-5`,
          children: [
            (0, P.jsx)(x, {
              className: `sr-only`,
              children: `Travel Story Image`,
            }),
            r &&
            (0, P.jsx)(s.div, {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              className: `relative max-h-[90vh] w-auto overflow-hidden rounded-2xl shadow-2xl`,
              children: (0, P.jsx)(`img`, {
                src: te(r),
                alt: `Full view`,
                className: `max-h-[90vh] w-auto object-contain`,
              }),
            }),
          ],
        }),
      }),
    ],
  });
};
function I(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`,
    );
  return e;
}
function ie(e, t) {
  ((e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t));
}
var L = {
  autoSleep: 120,
  force3D: `auto`,
  nullTargetWarn: 1,
  units: { lineHeight: `` },
},
  ae = { duration: 0.5, overwrite: !1, delay: 0 },
  oe,
  R,
  z,
  se = 1e8,
  B = 1 / se,
  ce = Math.PI * 2,
  le = ce / 4,
  ue = 0,
  de = Math.sqrt,
  fe = Math.cos,
  pe = Math.sin,
  V = function (e) {
    return typeof e == `string`;
  },
  H = function (e) {
    return typeof e == `function`;
  },
  me = function (e) {
    return typeof e == `number`;
  },
  he = function (e) {
    return e === void 0;
  },
  ge = function (e) {
    return typeof e == `object`;
  },
  U = function (e) {
    return e !== !1;
  },
  _e = function () {
    return typeof window < `u`;
  },
  ve = function (e) {
    return H(e) || V(e);
  },
  ye =
    (typeof ArrayBuffer == `function` && ArrayBuffer.isView) || function () { },
  W = Array.isArray,
  be = /random\([^)]+\)/g,
  xe = /,\s*/g,
  Se = /(?:-?\.?\d|\.)+/gi,
  Ce = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  we = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Te = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Ee = /[+-]=-?[.\d]+/,
  De = /[^,'"\[\]\s]+/gi,
  Oe = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  G,
  ke,
  Ae,
  je,
  Me = {},
  Ne = {},
  Pe,
  Fe = function (e) {
    return (Ne = ut(e, Me)) && Er;
  },
  Ie = function (e, t) {
    return console.warn(
      `Invalid property`,
      e,
      `set to`,
      t,
      `Missing plugin? gsap.registerPlugin()`,
    );
  },
  Le = function (e, t) {
    return !t && console.warn(e);
  },
  Re = function (e, t) {
    return (e && (Me[e] = t) && Ne && (Ne[e] = t)) || Me;
  },
  ze = function () {
    return 0;
  },
  Be = { suppressEvents: !0, isStart: !0, kill: !1 },
  Ve = { suppressEvents: !0, kill: !1 },
  He = { suppressEvents: !0 },
  Ue = {},
  We = [],
  Ge = {},
  Ke,
  qe = {},
  Je = {},
  Ye = 30,
  Xe = [],
  Ze = ``,
  Qe = function (e) {
    var t = e[0],
      n,
      r;
    if ((ge(t) || H(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (r = Xe.length; r-- && !Xe[r].targetTest(t););
      n = Xe[r];
    }
    for (r = e.length; r--;)
      (e[r] && (e[r]._gsap || (e[r]._gsap = new Ln(e[r], n)))) ||
        e.splice(r, 1);
    return e;
  },
  $e = function (e) {
    return e._gsap || Qe(Kt(e))[0]._gsap;
  },
  et = function (e, t, n) {
    return (n = e[t]) && H(n)
      ? e[t]()
      : (he(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  K = function (e, t) {
    return (e = e.split(`,`)).forEach(t) || e;
  },
  q = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  J = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  tt = function (e, t) {
    var n = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      n === `+` ? e + r : n === `-` ? e - r : n === `*` ? e * r : e / r
    );
  },
  nt = function (e, t) {
    for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
    return r < n;
  },
  rt = function () {
    var e = We.length,
      t = We.slice(0),
      n,
      r;
    for (Ge = {}, We.length = 0, n = 0; n < e; n++)
      ((r = t[n]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
  },
  it = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  at = function (e, t, n, r) {
    (We.length && !R && rt(),
      e.render(t, n, r || !!(R && t < 0 && it(e))),
      We.length && !R && rt());
  },
  ot = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + ``).match(De).length < 2
      ? t
      : V(e)
        ? e.trim()
        : e;
  },
  st = function (e) {
    return e;
  },
  ct = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  lt = function (e) {
    return function (t, n) {
      for (var r in n)
        r in t || (r === `duration` && e) || r === `ease` || (t[r] = n[r]);
    };
  },
  ut = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  dt = function e(t, n) {
    for (var r in n)
      r !== `__proto__` &&
        r !== `constructor` &&
        r !== `prototype` &&
        (t[r] = ge(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
    return t;
  },
  ft = function (e, t) {
    var n = {},
      r;
    for (r in e) r in t || (n[r] = e[r]);
    return n;
  },
  pt = function (e) {
    var t = e.parent || G,
      n = e.keyframes ? lt(W(e.keyframes)) : ct;
    if (U(e.inherit))
      for (; t;) (n(e, t.vars.defaults), (t = t.parent || t._dp));
    return e;
  },
  mt = function (e, t) {
    for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
    return n < 0;
  },
  ht = function (e, t, n, r, i) {
    (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
    var a = e[r],
      o;
    if (i) for (o = t[i]; a && a[i] > o;) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  },
  gt = function (e, t, n, r) {
    (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
    var i = t._prev,
      a = t._next;
    (i ? (i._next = a) : e[n] === t && (e[n] = a),
      a ? (a._prev = i) : e[r] === t && (e[r] = i),
      (t._next = t._prev = t.parent = null));
  },
  _t = function (e, t) {
    (e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0));
  },
  vt = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n;) ((n._dirty = 1), (n = n.parent));
    return e;
  },
  yt = function (e) {
    for (var t = e.parent; t && t.parent;)
      ((t._dirty = 1), t.totalDuration(), (t = t.parent));
    return e;
  },
  bt = function (e, t, n, r) {
    return (
      e._startAt &&
      (R
        ? e._startAt.revert(Ve)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
        e._startAt.render(t, !0, r))
    );
  },
  xt = function e(t) {
    return !t || (t._ts && e(t.parent));
  },
  St = function (e) {
    return e._repeat ? Ct(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Ct = function (e, t) {
    var n = Math.floor((e = J(e / t)));
    return e && n === e ? n - 1 : n;
  },
  wt = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  Tt = function (e) {
    return (e._end = J(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || B) || 0),
    ));
  },
  Et = function (e, t) {
    var n = e._dp;
    return (
      n &&
      n.smoothChildTiming &&
      e._ts &&
      ((e._start = J(
        n._time -
        (e._ts > 0
          ? t / e._ts
          : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts),
      )),
        Tt(e),
        n._dirty || vt(n, e)),
      e
    );
  },
  Dt = function (e, t) {
    var n;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((n = wt(e.rawTime(), t)),
          (!t._dur || Vt(0, t.totalDuration(), n) - t._tTime > B) &&
          t.render(n, !0)),
        vt(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp;)
          (n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp));
      e._zTime = -B;
    }
  },
  Ot = function (e, t, n, r) {
    return (
      t.parent && _t(t),
      (t._start = J(
        (me(n) ? n : n || e !== G ? Rt(e, n, t) : e._time) + t._delay,
      )),
      (t._end = J(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0),
      )),
      ht(e, t, `_first`, `_last`, e._sort ? `_start` : 0),
      Mt(t) || (e._recent = t),
      r || Dt(e, t),
      e._ts < 0 && Et(e, e._tTime),
      e
    );
  },
  kt = function (e, t) {
    return (
      (Me.ScrollTrigger || Ie(`scrollTrigger`, t)) &&
      Me.ScrollTrigger.create(t, e)
    );
  },
  At = function (e, t, n, r, i) {
    if ((Kn(e, t, i), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      !R &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Ke !== wn.frame
    )
      return (We.push(e), (e._lazy = [i, r]), 1);
  },
  jt = function e(t) {
    var n = t.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
  },
  Mt = function (e) {
    var t = e.data;
    return t === `isFromStart` || t === `isStart`;
  },
  Nt = function (e, t, n, r) {
    var i = e.ratio,
      a =
        t < 0 ||
          (!t &&
            ((!e._start && jt(e) && !(!e._initted && Mt(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !Mt(e))))
          ? 0
          : 1,
      o = e._rDelay,
      s = 0,
      c,
      l,
      u;
    if (
      (o &&
        e._repeat &&
        ((s = Vt(0, e._tDur, t)),
          (l = Ct(s, o)),
          e._yoyo && l & 1 && (a = 1 - a),
          l !== Ct(e._tTime, o) &&
          ((i = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
        a !== i || R || r || e._zTime === B || (!t && e._zTime))
    ) {
      if (!e._initted && At(e, t, r, n, s)) return;
      for (
        u = e._zTime,
        e._zTime = t || (n ? B : 0),
        n ||= t && !u,
        e.ratio = a,
        e._from && (a = 1 - a),
        e._time = 0,
        e._tTime = s,
        c = e._pt;
        c;
      )
        (c.r(a, c.d), (c = c._next));
      (t < 0 && bt(e, t, n, !0),
        e._onUpdate && !n && un(e, `onUpdate`),
        s && e._repeat && !n && e.parent && un(e, `onRepeat`),
        (t >= e._tDur || t < 0) &&
        e.ratio === a &&
        (a && _t(e, 1),
          !n &&
          !R &&
          (un(e, a ? `onComplete` : `onReverseComplete`, !0),
            e._prom && e._prom())));
    } else e._zTime ||= t;
  },
  Pt = function (e, t, n) {
    var r;
    if (n > t)
      for (r = e._first; r && r._start <= n;) {
        if (r.data === `isPause` && r._start > t) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= n;) {
        if (r.data === `isPause` && r._start < t) return r;
        r = r._prev;
      }
  },
  Ft = function (e, t, n, r) {
    var i = e._repeat,
      a = J(t) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !r && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = i ? (i < 0 ? 1e10 : J(a * (i + 1) + e._rDelay * i)) : a),
      o > 0 && !r && Et(e, (e._tTime = e._tDur * o)),
      e.parent && Tt(e),
      n || vt(e.parent, e),
      e
    );
  },
  It = function (e) {
    return e instanceof zn ? vt(e) : Ft(e, e._dur);
  },
  Lt = { _start: 0, endTime: ze, totalDuration: ze },
  Rt = function e(t, n, r) {
    var i = t.labels,
      a = t._recent || Lt,
      o = t.duration() >= se ? a.endTime(!1) : t._dur,
      s,
      c,
      l;
    return V(n) && (isNaN(n) || n in i)
      ? ((c = n.charAt(0)),
        (l = n.substr(-1) === `%`),
        (s = n.indexOf(`=`)),
        c === `<` || c === `>`
          ? (s >= 0 && (n = n.replace(/=/, ``)),
            (c === `<` ? a._start : a.endTime(a._repeat >= 0)) +
            (parseFloat(n.substr(1)) || 0) *
            (l ? (s < 0 ? a : r).totalDuration() / 100 : 1))
          : s < 0
            ? (n in i || (i[n] = o), i[n])
            : ((c = parseFloat(n.charAt(s - 1) + n.substr(s + 1))),
              l && r && (c = (c / 100) * (W(r) ? r[0] : r).totalDuration()),
              s > 1 ? e(t, n.substr(0, s - 1), r) + c : o + c))
      : n == null
        ? o
        : +n;
  },
  zt = function (e, t, n) {
    var r = me(t[1]),
      i = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[i],
      o,
      s;
    if ((r && (a.duration = t[1]), (a.parent = n), e)) {
      for (o = a, s = n; s && !(`immediateRender` in o);)
        ((o = s.vars.defaults || {}), (s = U(s.vars.inherit) && s.parent));
      ((a.immediateRender = U(o.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[i - 1]));
    }
    return new Q(t[0], a, t[i + 1]);
  },
  Bt = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  Vt = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  Y = function (e, t) {
    return !V(e) || !(t = Oe.exec(e)) ? `` : t[1];
  },
  Ht = function (e, t, n) {
    return Bt(n, function (n) {
      return Vt(e, t, n);
    });
  },
  Ut = [].slice,
  Wt = function (e, t) {
    return (
      e &&
      ge(e) &&
      `length` in e &&
      ((!t && !e.length) || (e.length - 1 in e && ge(e[0]))) &&
      !e.nodeType &&
      e !== ke
    );
  },
  Gt = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (e) {
        var r;
        return (V(e) && !t) || Wt(e, 1)
          ? (r = n).push.apply(r, Kt(e))
          : n.push(e);
      }) || n
    );
  },
  Kt = function (e, t, n) {
    return z && !t && z.selector
      ? z.selector(e)
      : V(e) && !n && (Ae || !Tn())
        ? Ut.call((t || je).querySelectorAll(e), 0)
        : W(e)
          ? Gt(e, n)
          : Wt(e)
            ? Ut.call(e, 0)
            : e
              ? [e]
              : [];
  },
  qt = function (e) {
    return (
      (e = Kt(e)[0] || Le(`Invalid scope`) || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return Kt(
          t,
          n.querySelectorAll
            ? n
            : n === e
              ? Le(`Invalid scope`) || je.createElement(`div`)
              : e,
        );
      }
    );
  },
  Jt = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Yt = function (e) {
    if (H(e)) return e;
    var t = ge(e) ? e : { each: e },
      n = Mn(t.ease),
      r = t.from || 0,
      i = parseFloat(t.base) || 0,
      a = {},
      o = r > 0 && r < 1,
      s = isNaN(r) || o,
      c = t.axis,
      l = r,
      u = r;
    return (
      V(r)
        ? (l = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !o && s && ((l = r[0]), (u = r[1])),
      function (e, o, d) {
        var f = (d || t).length,
          p = a[f],
          m,
          h,
          g,
          _,
          v,
          y,
          b,
          x,
          S;
        if (!p) {
          if (((S = t.grid === `auto` ? 0 : (t.grid || [1, se])[1]), !S)) {
            for (
              b = -se;
              b < (b = d[S++].getBoundingClientRect().left) && S < f;
            );
            S < f && S--;
          }
          for (
            p = a[f] = [],
            m = s ? Math.min(S, f) * l - 0.5 : r % S,
            h = S === se ? 0 : s ? (f * u) / S - 0.5 : (r / S) | 0,
            b = 0,
            x = se,
            y = 0;
            y < f;
            y++
          )
            ((g = (y % S) - m),
              (_ = h - ((y / S) | 0)),
              (p[y] = v = c ? Math.abs(c === `y` ? _ : g) : de(g * g + _ * _)),
              v > b && (b = v),
              v < x && (x = v));
          (r === `random` && Jt(p),
            (p.max = b - x),
            (p.min = x),
            (p.v = f =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                (S > f
                  ? f - 1
                  : c
                    ? c === `y`
                      ? f / S
                      : S
                    : Math.max(S, f / S)) ||
                0) * (r === `edges` ? -1 : 1)),
            (p.b = f < 0 ? i - f : i),
            (p.u = Y(t.amount || t.each) || 0),
            (n = n && f < 0 ? jn(n) : n));
        }
        return (
          (f = (p[e] - p.min) / p.max || 0),
          J(p.b + (n ? n(f) : f) * p.v) + p.u
        );
      }
    );
  },
  Xt = function (e) {
    var t = 10 ** ((e + ``).split(`.`)[1] || ``).length;
    return function (n) {
      var r = J(Math.round(parseFloat(n) / e) * e * t);
      return (r - (r % 1)) / t + (me(n) ? 0 : Y(n));
    };
  },
  Zt = function (e, t) {
    var n = W(e),
      r,
      i;
    return (
      !n &&
      ge(e) &&
      ((r = n = e.radius || se),
        e.values
          ? ((e = Kt(e.values)), (i = !me(e[0])) && (r *= r))
          : (e = Xt(e.increment))),
      Bt(
        t,
        n
          ? H(e)
            ? function (t) {
              return ((i = e(t)), Math.abs(i - t) <= r ? i : t);
            }
            : function (t) {
              for (
                var n = parseFloat(i ? t.x : t),
                a = parseFloat(i ? t.y : 0),
                o = se,
                s = 0,
                c = e.length,
                l,
                u;
                c--;
              )
                (i
                  ? ((l = e[c].x - n), (u = e[c].y - a), (l = l * l + u * u))
                  : (l = Math.abs(e[c] - n)),
                  l < o && ((o = l), (s = c)));
              return (
                (s = !r || o <= r ? e[s] : t),
                i || s === t || me(t) ? s : s + Y(t)
              );
            }
          : Xt(e),
      )
    );
  },
  Qt = function (e, t, n, r) {
    return Bt(W(e) ? !t : n === !0 ? !!(n = 0) : !r, function () {
      return W(e)
        ? e[~~(Math.random() * e.length)]
        : (n ||= 1e-5) &&
        (r = n < 1 ? 10 ** ((n + ``).length - 2) : 1) &&
        Math.floor(
          Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) *
          n *
          r,
        ) / r;
    });
  },
  $t = function () {
    var e = [...arguments];
    return function (t) {
      return e.reduce(function (e, t) {
        return t(e);
      }, t);
    };
  },
  en = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || Y(n));
    };
  },
  tn = function (e, t, n) {
    return sn(e, t, 0, 1, n);
  },
  nn = function (e, t, n) {
    return Bt(n, function (n) {
      return e[~~t(n)];
    });
  },
  rn = function e(t, n, r) {
    var i = n - t;
    return W(t)
      ? nn(t, e(0, t.length), n)
      : Bt(r, function (e) {
        return ((i + ((e - t) % i)) % i) + t;
      });
  },
  an = function e(t, n, r) {
    var i = n - t,
      a = i * 2;
    return W(t)
      ? nn(t, e(0, t.length - 1), n)
      : Bt(r, function (e) {
        return ((e = (a + ((e - t) % a)) % a || 0), t + (e > i ? a - e : e));
      });
  },
  on = function (e) {
    return e.replace(be, function (e) {
      var t = e.indexOf(`[`) + 1,
        n = e.substring(t || 7, t ? e.indexOf(`]`) : e.length - 1).split(xe);
      return Qt(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5);
    });
  },
  sn = function (e, t, n, r, i) {
    var a = t - e,
      o = r - n;
    return Bt(i, function (t) {
      return n + (((t - e) / a) * o || 0);
    });
  },
  cn = function e(t, n, r, i) {
    var a = isNaN(t + n)
      ? 0
      : function (e) {
        return (1 - e) * t + e * n;
      };
    if (!a) {
      var o = V(t),
        s = {},
        c,
        l,
        u,
        d,
        f;
      if ((r === !0 && (i = 1) && (r = null), o))
        ((t = { p: t }), (n = { p: n }));
      else if (W(t) && !W(n)) {
        for (u = [], d = t.length, f = d - 2, l = 1; l < d; l++)
          u.push(e(t[l - 1], t[l]));
        (d--,
          (a = function (e) {
            e *= d;
            var t = Math.min(f, ~~e);
            return u[t](e - t);
          }),
          (r = n));
      } else i || (t = ut(W(t) ? [] : {}, t));
      if (!u) {
        for (c in n) Vn.call(s, t, c, `get`, n[c]);
        a = function (e) {
          return sr(e, s) || (o ? t.p : t);
        };
      }
    }
    return Bt(r, a);
  },
  ln = function (e, t, n) {
    var r = e.labels,
      i = se,
      a,
      o,
      s;
    for (a in r)
      ((o = r[a] - t),
        o < 0 == !!n && o && i > (o = Math.abs(o)) && ((s = a), (i = o)));
    return s;
  },
  un = function (e, t, n) {
    var r = e.vars,
      i = r[t],
      a = z,
      o = e._ctx,
      s,
      c,
      l;
    if (i)
      return (
        (s = r[t + `Params`]),
        (c = r.callbackScope || e),
        n && We.length && rt(),
        o && (z = o),
        (l = s ? i.apply(c, s) : i.call(c)),
        (z = a),
        l
      );
  },
  dn = function (e) {
    return (
      _t(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!R),
      e.progress() < 1 && un(e, `onInterrupt`),
      e
    );
  },
  fn,
  pn = [],
  mn = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), _e() || e.headless)) {
        var t = e.name,
          n = H(e),
          r =
            t && !n && e.init
              ? function () {
                this._props = [];
              }
              : e,
          i = {
            init: ze,
            render: sr,
            add: Vn,
            kill: lr,
            modifier: cr,
            rawVars: 0,
          },
          a = {
            targetTest: 0,
            get: 0,
            getSetter: rr,
            aliases: {},
            register: 0,
          };
        if ((Tn(), e !== r)) {
          if (qe[t]) return;
          (ct(r, ct(ft(e, i), a)),
            ut(r.prototype, ut(i, ft(e, a))),
            (qe[(r.prop = t)] = r),
            e.targetTest && (Xe.push(r), (Ue[t] = 1)),
            (t =
              (t === `css` ? `CSS` : t.charAt(0).toUpperCase() + t.substr(1)) +
              `Plugin`));
        }
        (Re(t, r), e.register && e.register(Er, r, fr));
      } else pn.push(e);
  },
  X = 255,
  hn = {
    aqua: [0, X, X],
    lime: [0, X, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, X],
    navy: [0, 0, 128],
    white: [X, X, X],
    olive: [128, 128, 0],
    yellow: [X, X, 0],
    orange: [X, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [X, 0, 0],
    pink: [X, 192, 203],
    cyan: [0, X, X],
    transparent: [X, X, X, 0],
  },
  gn = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (n - t) * e * 6
        : e < 0.5
          ? n
          : e * 3 < 2
            ? t + (n - t) * (2 / 3 - e) * 6
            : t) *
        X +
        0.5) |
      0
    );
  },
  _n = function (e, t, n) {
    var r = e ? (me(e) ? [e >> 16, (e >> 8) & X, e & X] : 0) : hn.black,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    if (!r) {
      if ((e.substr(-1) === `,` && (e = e.substr(0, e.length - 1)), hn[e]))
        r = hn[e];
      else if (e.charAt(0) === `#`) {
        if (
          (e.length < 6 &&
            ((i = e.charAt(1)),
              (a = e.charAt(2)),
              (o = e.charAt(3)),
              (e =
                `#` +
                i +
                i +
                a +
                a +
                o +
                o +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ``))),
            e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & X, r & X, parseInt(e.substr(7), 16) / 255]
          );
        ((e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & X, e & X]));
      } else if (e.substr(0, 3) === `hsl`) {
        if (((r = p = e.match(Se)), !t))
          ((s = (r[0] % 360) / 360),
            (c = r[1] / 100),
            (l = r[2] / 100),
            (a = l <= 0.5 ? l * (c + 1) : l + c - l * c),
            (i = l * 2 - a),
            r.length > 3 && (r[3] *= 1),
            (r[0] = gn(s + 1 / 3, i, a)),
            (r[1] = gn(s, i, a)),
            (r[2] = gn(s - 1 / 3, i, a)));
        else if (~e.indexOf(`=`))
          return ((r = e.match(Ce)), n && r.length < 4 && (r[3] = 1), r);
      } else r = e.match(Se) || hn.transparent;
      r = r.map(Number);
    }
    return (
      t &&
      !p &&
      ((i = r[0] / X),
        (a = r[1] / X),
        (o = r[2] / X),
        (u = Math.max(i, a, o)),
        (d = Math.min(i, a, o)),
        (l = (u + d) / 2),
        u === d
          ? (s = c = 0)
          : ((f = u - d),
            (c = l > 0.5 ? f / (2 - u - d) : f / (u + d)),
            (s =
              u === i
                ? (a - o) / f + (a < o ? 6 : 0)
                : u === a
                  ? (o - i) / f + 2
                  : (i - a) / f + 4),
            (s *= 60)),
        (r[0] = ~~(s + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(l * 100 + 0.5))),
      n && r.length < 4 && (r[3] = 1),
      r
    );
  },
  vn = function (e) {
    var t = [],
      n = [],
      r = -1;
    return (
      e.split(bn).forEach(function (e) {
        var i = e.match(we) || [];
        (t.push.apply(t, i), n.push((r += i.length + 1)));
      }),
      (t.c = n),
      t
    );
  },
  yn = function (e, t, n) {
    var r = ``,
      i = (e + r).match(bn),
      a = t ? `hsla(` : `rgba(`,
      o = 0,
      s,
      c,
      l,
      u;
    if (!i) return e;
    if (
      ((i = i.map(function (e) {
        return (
          (e = _n(e, t, 1)) &&
          a +
          (t ? e[0] + `,` + e[1] + `%,` + e[2] + `%,` + e[3] : e.join(`,`)) +
          `)`
        );
      })),
        n && ((l = vn(e)), (s = n.c), s.join(r) !== l.c.join(r)))
    )
      for (c = e.replace(bn, `1`).split(we), u = c.length - 1; o < u; o++)
        r +=
          c[o] +
          (~s.indexOf(o)
            ? i.shift() || a + `0,0,0,0)`
            : (l.length ? l : i.length ? i : n).shift());
    if (!c)
      for (c = e.split(bn), u = c.length - 1; o < u; o++) r += c[o] + i[o];
    return r + c[u];
  },
  bn = (function () {
    var e = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,
      t;
    for (t in hn) e += `|` + t + `\\b`;
    return RegExp(e + `)`, `gi`);
  })(),
  xn = /hsl[a]?\(/,
  Sn = function (e) {
    var t = e.join(` `),
      n;
    if (((bn.lastIndex = 0), bn.test(t)))
      return (
        (n = xn.test(t)),
        (e[1] = yn(e[1], n)),
        (e[0] = yn(e[0], n, vn(e[1]))),
        !0
      );
  },
  Cn,
  wn = (function () {
    var e = Date.now,
      t = 500,
      n = 33,
      r = e(),
      i = r,
      a = 1e3 / 240,
      o = a,
      s = [],
      c,
      l,
      u,
      d,
      f,
      p,
      m = function u(m) {
        var h = e() - i,
          g = m === !0,
          _,
          v,
          y,
          b;
        if (
          ((h > t || h < 0) && (r += h - n),
            (i += h),
            (y = i - r),
            (_ = y - o),
            (_ > 0 || g) &&
            ((b = ++d.frame),
              (f = y - d.time * 1e3),
              (d.time = y /= 1e3),
              (o += _ + (_ >= a ? 4 : a - _)),
              (v = 1)),
            g || (c = l(u)),
            v)
        )
          for (p = 0; p < s.length; p++) s[p](y, f, b, m);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (e) {
          return f / (1e3 / (e || 60));
        },
        wake: function () {
          Pe &&
            (!Ae &&
              _e() &&
              ((ke = Ae = window),
                (je = ke.document || {}),
                (Me.gsap = Er),
                (ke.gsapVersions ||= []).push(Er.version),
                Fe(Ne || ke.GreenSockGlobals || (!ke.gsap && ke) || {}),
                pn.forEach(mn)),
              (u = typeof requestAnimationFrame < `u` && requestAnimationFrame),
              c && d.sleep(),
              (l =
                u ||
                function (e) {
                  return setTimeout(e, (o - d.time * 1e3 + 1) | 0);
                }),
              (Cn = 1),
              m(2));
        },
        sleep: function () {
          ((u ? cancelAnimationFrame : clearTimeout)(c), (Cn = 0), (l = ze));
        },
        lagSmoothing: function (e, r) {
          ((t = e || 1 / 0), (n = Math.min(r || 33, t)));
        },
        fps: function (e) {
          ((a = 1e3 / (e || 240)), (o = d.time * 1e3 + a));
        },
        add: function (e, t, n) {
          var r = t
            ? function (t, n, i, a) {
              (e(t, n, i, a), d.remove(r));
            }
            : e;
          return (d.remove(e), s[n ? `unshift` : `push`](r), Tn(), r);
        },
        remove: function (e, t) {
          ~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--;
        },
        _listeners: s,
      }),
      d
    );
  })(),
  Tn = function () {
    return !Cn && wn.wake();
  },
  Z = {},
  En = /^[\d.\-M][\d.\-,\s]/,
  Dn = /["']/g,
  On = function (e) {
    for (
      var t = {},
      n = e.substr(1, e.length - 3).split(`:`),
      r = n[0],
      i = 1,
      a = n.length,
      o,
      s,
      c;
      i < a;
      i++
    )
      ((s = n[i]),
        (o = i === a - 1 ? s.length : s.lastIndexOf(`,`)),
        (c = s.substr(0, o)),
        (t[r] = isNaN(c) ? c.replace(Dn, ``).trim() : +c),
        (r = s.substr(o + 1).trim()));
    return t;
  },
  kn = function (e) {
    var t = e.indexOf(`(`) + 1,
      n = e.indexOf(`)`),
      r = e.indexOf(`(`, t);
    return e.substring(t, ~r && r < n ? e.indexOf(`)`, n + 1) : n);
  },
  An = function (e) {
    var t = (e + ``).split(`(`),
      n = Z[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(
        null,
        ~e.indexOf(`{`) ? [On(t[1])] : kn(e).split(`,`).map(ot),
      )
      : Z._CE && En.test(e)
        ? Z._CE(``, e)
        : n;
  },
  jn = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Mn = function (e, t) {
    return (e && (H(e) ? e : Z[e] || An(e))) || t;
  },
  Nn = function (e, t, n, r) {
    (n === void 0 &&
      (n = function (e) {
        return 1 - t(1 - e);
      }),
      r === void 0 &&
      (r = function (e) {
        return e < 0.5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2;
      }));
    var i = { easeIn: t, easeOut: n, easeInOut: r },
      a;
    return (
      K(e, function (e) {
        for (var t in ((Z[e] = Me[e] = i), (Z[(a = e.toLowerCase())] = n), i))
          Z[
            a + (t === `easeIn` ? `.in` : t === `easeOut` ? `.out` : `.inOut`)
          ] = Z[e + `.` + t] = i[t];
      }),
      i
    );
  },
  Pn = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  Fn = function e(t, n, r) {
    var i = n >= 1 ? n : 1,
      a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      o = (a / ce) * (Math.asin(1 / i) || 0),
      s = function (e) {
        return e === 1 ? 1 : i * 2 ** (-10 * e) * pe((e - o) * a) + 1;
      },
      c =
        t === `out`
          ? s
          : t === `in`
            ? function (e) {
              return 1 - s(1 - e);
            }
            : Pn(s);
    return (
      (a = ce / a),
      (c.config = function (n, r) {
        return e(t, n, r);
      }),
      c
    );
  },
  In = function e(t, n) {
    n === void 0 && (n = 1.70158);
    var r = function (e) {
      return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
    },
      i =
        t === `out`
          ? r
          : t === `in`
            ? function (e) {
              return 1 - r(1 - e);
            }
            : Pn(r);
    return (
      (i.config = function (n) {
        return e(t, n);
      }),
      i
    );
  };
(K(`Linear,Quad,Cubic,Quart,Quint,Strong`, function (e, t) {
  var n = t < 5 ? t + 1 : t;
  Nn(
    e + `,Power` + (n - 1),
    t
      ? function (e) {
        return e ** +n;
      }
      : function (e) {
        return e;
      },
    function (e) {
      return 1 - (1 - e) ** n;
    },
    function (e) {
      return e < 0.5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2;
    },
  );
}),
  (Z.Linear.easeNone = Z.none = Z.Linear.easeIn),
  Nn(`Elastic`, Fn(`in`), Fn(`out`), Fn()),
  (function (e, t) {
    var n = 1 / t,
      r = 2 * n,
      i = 2.5 * n,
      a = function (a) {
        return a < n
          ? e * a * a
          : a < r
            ? e * (a - 1.5 / t) ** 2 + 0.75
            : a < i
              ? e * (a -= 2.25 / t) * a + 0.9375
              : e * (a - 2.625 / t) ** 2 + 0.984375;
      };
    Nn(
      `Bounce`,
      function (e) {
        return 1 - a(1 - e);
      },
      a,
    );
  })(7.5625, 2.75),
  Nn(`Expo`, function (e) {
    return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
  }),
  Nn(`Circ`, function (e) {
    return -(de(1 - e * e) - 1);
  }),
  Nn(`Sine`, function (e) {
    return e === 1 ? 1 : -fe(e * le) + 1;
  }),
  Nn(`Back`, In(`in`), In(`out`), In()),
  (Z.SteppedEase =
    Z.steps =
    Me.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var n = 1 / e,
          r = e + +!t,
          i = +!!t,
          a = 1 - B;
        return function (e) {
          return (((r * Vt(0, a, e)) | 0) + i) * n;
        };
      },
    }),
  (ae.ease = Z[`quad.out`]),
  K(
    `onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,
    function (e) {
      return (Ze += e + `,` + e + `Params,`);
    },
  ));
var Ln = function (e, t) {
  ((this.id = ue++),
    (e._gsap = this),
    (this.target = e),
    (this.harness = t),
    (this.get = t ? t.get : et),
    (this.set = t ? t.getSetter : rr));
},
  Rn = (function () {
    function e(e) {
      ((this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
        ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        Ft(this, +e.duration, 1, 1),
        (this.data = e.data),
        z && ((this._ctx = z), z.data.push(this)),
        Cn || wn.wake());
    }
    var t = e.prototype;
    return (
      (t.delay = function (e) {
        return e || e === 0
          ? (this.parent &&
            this.parent.smoothChildTiming &&
            this.startTime(this._start + e - this._delay),
            (this._delay = e),
            this)
          : this._delay;
      }),
      (t.duration = function (e) {
        return arguments.length
          ? this.totalDuration(
            this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e,
          )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (e) {
        return arguments.length
          ? ((this._dirty = 0),
            Ft(
              this,
              this._repeat < 0
                ? e
                : (e - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (t.totalTime = function (e, t) {
        if ((Tn(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (Et(this, e), !n._dp || n.parent || Dt(n, this); n && n.parent;)
            (n.parent._time !==
              n._start +
              (n._ts >= 0
                ? n._tTime / n._ts
                : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && e < this._tDur) ||
              (this._ts < 0 && e > 0) ||
              (!this._tDur && !e)) &&
            Ot(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== e ||
            (!this._dur && !t) ||
            (this._initted && Math.abs(this._zTime) === B) ||
            (!this._initted && this._dur && e) ||
            (!e && !this._initted && (this.add || this._ptLookup))) &&
          (this._ts || (this._pTime = e), at(this, e, t)),
          this
        );
      }),
      (t.time = function (e, t) {
        return arguments.length
          ? this.totalTime(
            Math.min(this.totalDuration(), e + St(this)) %
            (this._dur + this._rDelay) || (e ? this._dur : 0),
            t,
          )
          : this._time;
      }),
      (t.totalProgress = function (e, t) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * e, t)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (t.progress = function (e, t) {
        return arguments.length
          ? this.totalTime(
            this.duration() *
            (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) +
            St(this),
            t,
          )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : +(this.rawTime() > 0);
      }),
      (t.iteration = function (e, t) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (e - 1) * n, t)
          : this._repeat
            ? Ct(this._tTime, n) + 1
            : 1;
      }),
      (t.timeScale = function (e, t) {
        if (!arguments.length) return this._rts === -B ? 0 : this._rts;
        if (this._rts === e) return this;
        var n =
          this.parent && this._ts ? wt(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +e || 0),
          (this._ts = this._ps || e === -B ? 0 : this._rts),
          this.totalTime(
            Vt(-Math.abs(this._delay), this.totalDuration(), n),
            t !== !1,
          ),
          Tt(this),
          yt(this)
        );
      }),
      (t.paused = function (e) {
        return arguments.length
          ? (this._ps !== e &&
            ((this._ps = e),
              e
                ? ((this._pTime =
                  this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Tn(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                    Math.abs(this._zTime) !== B &&
                    (this._tTime -= B),
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (e) {
        if (arguments.length) {
          this._start = J(e);
          var t = this.parent || this._dp;
          return (
            t &&
            (t._sort || !this.parent) &&
            Ot(t, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (t.endTime = function (e) {
        return (
          this._start +
          (U(e) ? this.totalDuration() : this.duration()) /
          Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (e) {
        var t = this.parent || this._dp;
        return t
          ? e &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? wt(t.rawTime(e), this)
              : this._tTime
          : this._tTime;
      }),
      (t.revert = function (e) {
        e === void 0 && (e = He);
        var t = R;
        return (
          (R = e),
          it(this) &&
          (this.timeline && this.timeline.revert(e),
            this.totalTime(-0.01, e.suppressEvents)),
          this.data !== `nested` && e.kill !== !1 && this.kill(),
          (R = t),
          this
        );
      }),
      (t.globalTime = function (e) {
        for (var t = this, n = arguments.length ? e : t.rawTime(); t;)
          ((n = t._start + n / (Math.abs(t._ts) || 1)), (t = t._dp));
        return !this.parent && this._sat ? this._sat.globalTime(e) : n;
      }),
      (t.repeat = function (e) {
        return arguments.length
          ? ((this._repeat = e === 1 / 0 ? -2 : e), It(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (t.repeatDelay = function (e) {
        if (arguments.length) {
          var t = this._time;
          return ((this._rDelay = e), It(this), t ? this.time(t) : this);
        }
        return this._rDelay;
      }),
      (t.yoyo = function (e) {
        return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
      }),
      (t.seek = function (e, t) {
        return this.totalTime(Rt(this, e), U(t));
      }),
      (t.restart = function (e, t) {
        return (
          this.play().totalTime(e ? -this._delay : 0, U(t)),
          this._dur || (this._zTime = -B),
          this
        );
      }),
      (t.play = function (e, t) {
        return (e != null && this.seek(e, t), this.reversed(!1).paused(!1));
      }),
      (t.reverse = function (e, t) {
        return (
          e != null && this.seek(e || this.totalDuration(), t),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (e, t) {
        return (e != null && this.seek(e, t), this.paused(!0));
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (e) {
        return arguments.length
          ? (!!e !== this.reversed() &&
            this.timeScale(-this._rts || (e ? -B : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -B), this);
      }),
      (t.isActive = function () {
        var e = this.parent || this._dp,
          t = this._start,
          n;
        return !!(
          !e ||
          (this._ts &&
            this._initted &&
            e.isActive() &&
            (n = e.rawTime(!0)) >= t &&
            n < this.endTime(!0) - B)
        );
      }),
      (t.eventCallback = function (e, t, n) {
        var r = this.vars;
        return arguments.length > 1
          ? (t
            ? ((r[e] = t),
              n && (r[e + `Params`] = n),
              e === `onUpdate` && (this._onUpdate = t))
            : delete r[e],
            this)
          : r[e];
      }),
      (t.then = function (e) {
        var t = this,
          n = t._prom;
        return new Promise(function (r) {
          var i = H(e) ? e : st,
            a = function () {
              var e = t.then;
              ((t.then = null),
                n && n(),
                H(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                r(i),
                (t.then = e));
            };
          (t._initted && t.totalProgress() === 1 && t._ts >= 0) ||
            (!t._tTime && t._ts < 0)
            ? a()
            : (t._prom = a);
        });
      }),
      (t.kill = function () {
        dn(this);
      }),
      e
    );
  })();
ct(Rn.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -B,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var zn = (function (e) {
  ie(t, e);
  function t(t, n) {
    var r;
    return (
      t === void 0 && (t = {}),
      (r = e.call(this, t) || this),
      (r.labels = {}),
      (r.smoothChildTiming = !!t.smoothChildTiming),
      (r.autoRemoveChildren = !!t.autoRemoveChildren),
      (r._sort = U(t.sortChildren)),
      G && Ot(t.parent || G, I(r), n),
      t.reversed && r.reverse(),
      t.paused && r.paused(!0),
      t.scrollTrigger && kt(I(r), t.scrollTrigger),
      r
    );
  }
  var n = t.prototype;
  return (
    (n.to = function (e, t, n) {
      return (zt(0, arguments, this), this);
    }),
    (n.from = function (e, t, n) {
      return (zt(1, arguments, this), this);
    }),
    (n.fromTo = function (e, t, n, r) {
      return (zt(2, arguments, this), this);
    }),
    (n.set = function (e, t, n) {
      return (
        (t.duration = 0),
        (t.parent = this),
        pt(t).repeatDelay || (t.repeat = 0),
        (t.immediateRender = !!t.immediateRender),
        new Q(e, t, Rt(this, n), 1),
        this
      );
    }),
    (n.call = function (e, t, n) {
      return Ot(this, Q.delayedCall(0, e, t), n);
    }),
    (n.staggerTo = function (e, t, n, r, i, a, o) {
      return (
        (n.duration = t),
        (n.stagger = n.stagger || r),
        (n.onComplete = a),
        (n.onCompleteParams = o),
        (n.parent = this),
        new Q(e, n, Rt(this, i)),
        this
      );
    }),
    (n.staggerFrom = function (e, t, n, r, i, a, o) {
      return (
        (n.runBackwards = 1),
        (pt(n).immediateRender = U(n.immediateRender)),
        this.staggerTo(e, t, n, r, i, a, o)
      );
    }),
    (n.staggerFromTo = function (e, t, n, r, i, a, o, s) {
      return (
        (r.startAt = n),
        (pt(r).immediateRender = U(r.immediateRender)),
        this.staggerTo(e, t, r, i, a, o, s)
      );
    }),
    (n.render = function (e, t, n) {
      var r = this._time,
        i = this._dirty ? this.totalDuration() : this._tDur,
        a = this._dur,
        o = e <= 0 ? 0 : J(e),
        s = this._zTime < 0 != e < 0 && (this._initted || !a),
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y;
      if (
        (this !== G && o > i && e >= 0 && (o = i), o !== this._tTime || n || s)
      ) {
        if (
          (r !== this._time &&
            a &&
            ((o += this._time - r), (e += this._time - r)),
            (c = o),
            (g = this._start),
            (h = this._ts),
            (p = !h),
            s && (a || (r = this._zTime), (e || !t) && (this._zTime = e)),
            this._repeat)
        ) {
          if (
            ((v = this._yoyo),
              (f = a + this._rDelay),
              this._repeat < -1 && e < 0)
          )
            return this.totalTime(f * 100 + e, t, n);
          if (
            ((c = J(o % f)),
              o === i
                ? ((d = this._repeat), (c = a))
                : ((_ = J(o / f)),
                  (d = ~~_),
                  d && d === _ && ((c = a), d--),
                  c > a && (c = a)),
              (_ = Ct(this._tTime, f)),
              !r &&
              this._tTime &&
              _ !== d &&
              this._tTime - _ * f - this._dur <= 0 &&
              (_ = d),
              v && d & 1 && ((c = a - c), (y = 1)),
              d !== _ && !this._lock)
          ) {
            var b = v && _ & 1,
              x = b === (v && d & 1);
            if (
              (d < _ && (b = !b),
                (r = b ? 0 : o % a ? a : o),
                (this._lock = 1),
                (this.render(r || (y ? 0 : J(d * f)), t, !a)._lock = 0),
                (this._tTime = o),
                !t && this.parent && un(this, `onRepeat`),
                this.vars.repeatRefresh &&
                !y &&
                ((this.invalidate()._lock = 1), (_ = d)),
                (r && r !== this._time) ||
                p !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act) ||
                ((a = this._dur),
                  (i = this._tDur),
                  x &&
                  ((this._lock = 2),
                    (r = b ? a : -1e-4),
                    this.render(r, !0),
                    this.vars.repeatRefresh && !y && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !p))
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((m = Pt(this, J(r), J(c))), m && (o -= c - (c = m._start))),
            (this._tTime = o),
            (this._time = c),
            (this._act = !!h),
            this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = e),
              (r = 0)),
            !r && o && a && !t && !_ && (un(this, `onStart`), this._tTime !== o))
        )
          return this;
        if (c >= r && e >= 0)
          for (l = this._first; l;) {
            if (
              ((u = l._next), (l._act || c >= l._start) && l._ts && m !== l)
            ) {
              if (l.parent !== this) return this.render(e, t, n);
              if (
                (l.render(
                  l._ts > 0
                    ? (c - l._start) * l._ts
                    : (l._dirty ? l.totalDuration() : l._tDur) +
                    (c - l._start) * l._ts,
                  t,
                  n,
                ),
                  c !== this._time || (!this._ts && !p))
              ) {
                ((m = 0), u && (o += this._zTime = -B));
                break;
              }
            }
            l = u;
          }
        else {
          l = this._last;
          for (var S = e < 0 ? e : c; l;) {
            if (((u = l._prev), (l._act || S <= l._end) && l._ts && m !== l)) {
              if (l.parent !== this) return this.render(e, t, n);
              if (
                (l.render(
                  l._ts > 0
                    ? (S - l._start) * l._ts
                    : (l._dirty ? l.totalDuration() : l._tDur) +
                    (S - l._start) * l._ts,
                  t,
                  n || (R && it(l)),
                ),
                  c !== this._time || (!this._ts && !p))
              ) {
                ((m = 0), u && (o += this._zTime = S ? -B : B));
                break;
              }
            }
            l = u;
          }
        }
        if (
          m &&
          !t &&
          (this.pause(),
            (m.render(c >= r ? 0 : -B)._zTime = c >= r ? 1 : -1),
            this._ts)
        )
          return ((this._start = g), Tt(this), this.render(e, t, n));
        (this._onUpdate && !t && un(this, `onUpdate`, !0),
          ((o === i && this._tTime >= this.totalDuration()) || (!o && r)) &&
          (g === this._start || Math.abs(h) !== Math.abs(this._ts)) &&
          (this._lock ||
            ((e || !a) &&
              ((o === i && this._ts > 0) || (!o && this._ts < 0)) &&
              _t(this, 1),
              !t &&
              !(e < 0 && !r) &&
              (o || r || !i) &&
              (un(
                this,
                o === i && e >= 0 ? `onComplete` : `onReverseComplete`,
                !0,
              ),
                this._prom &&
                !(o < i && this.timeScale() > 0) &&
                this._prom()))));
      }
      return this;
    }),
    (n.add = function (e, t) {
      var n = this;
      if ((me(t) || (t = Rt(this, t, e)), !(e instanceof Rn))) {
        if (W(e))
          return (
            e.forEach(function (e) {
              return n.add(e, t);
            }),
            this
          );
        if (V(e)) return this.addLabel(e, t);
        if (H(e)) e = Q.delayedCall(0, e);
        else return this;
      }
      return this === e ? this : Ot(this, e, t);
    }),
    (n.getChildren = function (e, t, n, r) {
      (e === void 0 && (e = !0),
        t === void 0 && (t = !0),
        n === void 0 && (n = !0),
        r === void 0 && (r = -se));
      for (var i = [], a = this._first; a;)
        (a._start >= r &&
          (a instanceof Q
            ? t && i.push(a)
            : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))),
          (a = a._next));
      return i;
    }),
    (n.getById = function (e) {
      for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
        if (t[n].vars.id === e) return t[n];
    }),
    (n.remove = function (e) {
      return V(e)
        ? this.removeLabel(e)
        : H(e)
          ? this.killTweensOf(e)
          : (e.parent === this && gt(this, e),
            e === this._recent && (this._recent = this._last),
            vt(this));
    }),
    (n.totalTime = function (t, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
          this._ts &&
          (this._start = J(
            wn.time -
            (this._ts > 0
              ? t / this._ts
              : (this.totalDuration() - t) / -this._ts),
          )),
          e.prototype.totalTime.call(this, t, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (e, t) {
      return ((this.labels[e] = Rt(this, t)), this);
    }),
    (n.removeLabel = function (e) {
      return (delete this.labels[e], this);
    }),
    (n.addPause = function (e, t, n) {
      var r = Q.delayedCall(0, t || ze, n);
      return (
        (r.data = `isPause`),
        (this._hasPause = 1),
        Ot(this, r, Rt(this, e))
      );
    }),
    (n.removePause = function (e) {
      var t = this._first;
      for (e = Rt(this, e); t;)
        (t._start === e && t.data === `isPause` && _t(t), (t = t._next));
    }),
    (n.killTweensOf = function (e, t, n) {
      for (var r = this.getTweensOf(e, n), i = r.length; i--;)
        Wn !== r[i] && r[i].kill(e, t);
      return this;
    }),
    (n.getTweensOf = function (e, t) {
      for (var n = [], r = Kt(e), i = this._first, a = me(t), o; i;)
        (i instanceof Q
          ? nt(i._targets, r) &&
          (a
            ? (!Wn || (i._initted && i._ts)) &&
            i.globalTime(0) <= t &&
            i.globalTime(i.totalDuration()) > t
            : !t || i.isActive()) &&
          n.push(i)
          : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o),
          (i = i._next));
      return n;
    }),
    (n.tweenTo = function (e, t) {
      t ||= {};
      var n = this,
        r = Rt(n, e),
        i = t,
        a = i.startAt,
        o = i.onStart,
        s = i.onStartParams,
        c = i.immediateRender,
        l,
        u = Q.to(
          n,
          ct(
            {
              ease: t.ease || `none`,
              lazy: !1,
              immediateRender: !1,
              time: r,
              overwrite: `auto`,
              duration:
                t.duration ||
                Math.abs(
                  (r - (a && `time` in a ? a.time : n._time)) / n.timeScale(),
                ) ||
                B,
              onStart: function () {
                if ((n.pause(), !l)) {
                  var e =
                    t.duration ||
                    Math.abs(
                      (r - (a && `time` in a ? a.time : n._time)) /
                      n.timeScale(),
                    );
                  (u._dur !== e && Ft(u, e, 0, 1).render(u._time, !0, !0),
                    (l = 1));
                }
                o && o.apply(u, s || []);
              },
            },
            t,
          ),
        );
      return c ? u.render(0) : u;
    }),
    (n.tweenFromTo = function (e, t, n) {
      return this.tweenTo(t, ct({ startAt: { time: Rt(this, e) } }, n));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (e) {
      return (e === void 0 && (e = this._time), ln(this, Rt(this, e)));
    }),
    (n.previousLabel = function (e) {
      return (e === void 0 && (e = this._time), ln(this, Rt(this, e), 1));
    }),
    (n.currentLabel = function (e) {
      return arguments.length
        ? this.seek(e, !0)
        : this.previousLabel(this._time + B);
    }),
    (n.shiftChildren = function (e, t, n) {
      n === void 0 && (n = 0);
      var r = this._first,
        i = this.labels,
        a;
      for (e = J(e); r;)
        (r._start >= n && ((r._start += e), (r._end += e)), (r = r._next));
      if (t) for (a in i) i[a] >= n && (i[a] += e);
      return vt(this);
    }),
    (n.invalidate = function (t) {
      var n = this._first;
      for (this._lock = 0; n;) (n.invalidate(t), (n = n._next));
      return e.prototype.invalidate.call(this, t);
    }),
    (n.clear = function (e) {
      e === void 0 && (e = !0);
      for (var t = this._first, n; t;)
        ((n = t._next), this.remove(t), (t = n));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        e && (this.labels = {}),
        vt(this)
      );
    }),
    (n.totalDuration = function (e) {
      var t = 0,
        n = this,
        r = n._last,
        i = se,
        a,
        o,
        s;
      if (arguments.length)
        return n.timeScale(
          (n._repeat < 0 ? n.duration() : n.totalDuration()) /
          (n.reversed() ? -e : e),
        );
      if (n._dirty) {
        for (s = n.parent; r;)
          ((a = r._prev),
            r._dirty && r.totalDuration(),
            (o = r._start),
            o > i && n._sort && r._ts && !n._lock
              ? ((n._lock = 1), (Ot(n, r, o - r._delay, 1)._lock = 0))
              : (i = o),
            o < 0 &&
            r._ts &&
            ((t -= o),
              ((!s && !n._dp) || (s && s.smoothChildTiming)) &&
              ((n._start += J(o / n._ts)), (n._time -= o), (n._tTime -= o)),
              n.shiftChildren(-o, !1, -1 / 0),
              (i = 0)),
            r._end > t && r._ts && (t = r._end),
            (r = a));
        (Ft(n, n === G && n._time > t ? n._time : t, 1, 1), (n._dirty = 0));
      }
      return n._tDur;
    }),
    (t.updateRoot = function (e) {
      if ((G._ts && (at(G, wt(e, G)), (Ke = wn.frame)), wn.frame >= Ye)) {
        Ye += L.autoSleep || 120;
        var t = G._first;
        if ((!t || !t._ts) && L.autoSleep && wn._listeners.length < 2) {
          for (; t && !t._ts;) t = t._next;
          t || wn.sleep();
        }
      }
    }),
    t
  );
})(Rn);
ct(zn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Bn = function (e, t, n, r, i, a, o) {
  var s = new fr(this._pt, e, t, 0, 1, or, null, i),
    c = 0,
    l = 0,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _;
  for (
    s.b = n,
    s.e = r,
    n += ``,
    r += ``,
    (g = ~r.indexOf(`random(`)) && (r = on(r)),
    a && ((_ = [n, r]), a(_, e, t), (n = _[0]), (r = _[1])),
    d = n.match(Te) || [];
    (u = Te.exec(r));
  )
    ((p = u[0]),
      (m = r.substring(c, u.index)),
      f ? (f = (f + 1) % 5) : m.substr(-5) === `rgba(` && (f = 1),
      p !== d[l++] &&
      ((h = parseFloat(d[l - 1]) || 0),
        (s._pt = {
          _next: s._pt,
          p: m || l === 1 ? m : `,`,
          s: h,
          c: p.charAt(1) === `=` ? tt(h, p) - h : parseFloat(p) - h,
          m: f && f < 4 ? Math.round : 0,
        }),
        (c = Te.lastIndex)));
  return (
    (s.c = c < r.length ? r.substring(c, r.length) : ``),
    (s.fp = o),
    (Ee.test(r) || g) && (s.e = 0),
    (this._pt = s),
    s
  );
},
  Vn = function (e, t, n, r, i, a, o, s, c, l) {
    H(r) && (r = r(i || 0, e, a));
    var u = e[t],
      d =
        n === `get`
          ? H(u)
            ? c
              ? e[
                t.indexOf(`set`) || !H(e[`get` + t.substr(3)])
                  ? t
                  : `get` + t.substr(3)
              ](c)
              : e[t]()
            : u
          : n,
      f = H(u) ? (c ? tr : er) : $n,
      p;
    if (
      (V(r) &&
        (~r.indexOf(`random(`) && (r = on(r)),
          r.charAt(1) === `=` &&
          ((p = tt(d, r) + (Y(d) || 0)), (p || p === 0) && (r = p))),
        !l || d !== r || Gn)
    )
      return !isNaN(d * r) && r !== ``
        ? ((p = new fr(
          this._pt,
          e,
          t,
          +d || 0,
          r - (d || 0),
          typeof u == `boolean` ? ar : ir,
          0,
          f,
        )),
          c && (p.fp = c),
          o && p.modifier(o, this, e),
          (this._pt = p))
        : (!u && !(t in e) && Ie(t, r),
          Bn.call(this, e, t, d, r, f, s || L.stringFilter, c));
  },
  Hn = function (e, t, n, r, i) {
    if (
      (H(e) && (e = Xn(e, i, t, n, r)),
        !ge(e) || (e.style && e.nodeType) || W(e) || ye(e))
    )
      return V(e) ? Xn(e, i, t, n, r) : e;
    var a = {},
      o;
    for (o in e) a[o] = Xn(e[o], i, t, n, r);
    return a;
  },
  Un = function (e, t, n, r, i, a) {
    var o, s, c, l;
    if (
      qe[e] &&
      (o = new qe[e]()).init(
        i,
        o.rawVars ? t[e] : Hn(t[e], r, i, a, n),
        n,
        r,
        a,
      ) !== !1 &&
      ((n._pt = s = new fr(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)),
        n !== fn)
    )
      for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--;)
        c[o._props[l]] = s;
    return o;
  },
  Wn,
  Gn,
  Kn = function e(t, n, r) {
    var i = t.vars,
      a = i.ease,
      o = i.startAt,
      s = i.immediateRender,
      c = i.lazy,
      l = i.onUpdate,
      u = i.runBackwards,
      d = i.yoyoEase,
      f = i.keyframes,
      p = i.autoRevert,
      m = t._dur,
      h = t._startAt,
      g = t._targets,
      _ = t.parent,
      v = _ && _.data === `nested` ? _.vars.targets : g,
      y = t._overwrite === `auto` && !oe,
      b = t.timeline,
      x = i.easeReverse || d,
      S,
      C,
      w,
      T,
      E,
      D,
      O,
      k,
      A,
      j,
      M,
      N,
      P;
    if (
      (b && (!f || !a) && (a = `none`),
        (t._ease = Mn(a, ae.ease)),
        (t._rEase = x && (Mn(x) || t._ease)),
        (t._from = !b && !!i.runBackwards),
        t._from && (t.ratio = 1),
        !b || (f && !i.stagger))
    ) {
      if (
        ((k = g[0] ? $e(g[0]).harness : 0),
          (N = k && i[k.prop]),
          (S = ft(i, Ue)),
          h &&
          (h._zTime < 0 && h.progress(1),
            n < 0 && u && s && !p ? h.render(-1, !0) : h.revert(u && m ? Ve : Be),
            (h._lazy = 0)),
          o)
      ) {
        if (
          (_t(
            (t._startAt = Q.set(
              g,
              ct(
                {
                  data: `isStart`,
                  overwrite: !1,
                  parent: _,
                  immediateRender: !0,
                  lazy: !h && U(c),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    l &&
                    function () {
                      return un(t, `onUpdate`);
                    },
                  stagger: 0,
                },
                o,
              ),
            )),
          ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (R || (!s && !p)) && t._startAt.revert(Ve),
            s && m && n <= 0 && r <= 0)
        ) {
          n && (t._zTime = n);
          return;
        }
      } else if (u && m && !h) {
        if (
          (n && (s = !1),
            (w = ct(
              {
                overwrite: !1,
                data: `isFromStart`,
                lazy: s && !h && U(c),
                immediateRender: s,
                stagger: 0,
                parent: _,
              },
              S,
            )),
            N && (w[k.prop] = N),
            _t((t._startAt = Q.set(g, w))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            n < 0 && (R ? t._startAt.revert(Ve) : t._startAt.render(-1, !0)),
            (t._zTime = n),
            !s)
        )
          e(t._startAt, B, B);
        else if (!n) return;
      }
      for (
        t._pt = t._ptCache = 0, c = (m && U(c)) || (c && !m), C = 0;
        C < g.length;
        C++
      ) {
        if (
          ((E = g[C]),
            (O = E._gsap || Qe(g)[C]._gsap),
            (t._ptLookup[C] = j = {}),
            Ge[O.id] && We.length && rt(),
            (M = v === g ? C : v.indexOf(E)),
            k &&
            (A = new k()).init(E, N || S, t, M, v) !== !1 &&
            ((t._pt = T =
              new fr(t._pt, E, A.name, 0, 1, A.render, A, 0, A.priority)),
              A._props.forEach(function (e) {
                j[e] = T;
              }),
              A.priority && (D = 1)),
            !k || N)
        )
          for (w in S)
            qe[w] && (A = Un(w, S, t, M, E, v))
              ? A.priority && (D = 1)
              : (j[w] = T =
                Vn.call(t, E, w, `get`, S[w], M, v, 0, i.stringFilter));
        (t._op && t._op[C] && t.kill(E, t._op[C]),
          y &&
          t._pt &&
          ((Wn = t),
            G.killTweensOf(E, j, t.globalTime(n)),
            (P = !t.parent),
            (Wn = 0)),
          t._pt && c && (Ge[O.id] = 1));
      }
      (D && dr(t), t._onInit && t._onInit(t));
    }
    ((t._onUpdate = l),
      (t._initted = (!t._op || t._pt) && !P),
      f && n <= 0 && b.render(se, !0, !0));
  },
  qn = function (e, t, n, r, i, a, o, s) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      l,
      u,
      d,
      f;
    if (!c)
      for (
        c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length;
        f--;
      ) {
        if (((l = d[f][t]), l && l.d && l.d._pt))
          for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
        if (!l)
          return (
            (Gn = 1),
            (e.vars[t] = `+=0`),
            Kn(e, o),
            (Gn = 0),
            s
              ? Le(
                t +
                ` not eligible for reset. Try splitting into individual properties`,
              )
              : 1
          );
        c.push(l);
      }
    for (f = c.length; f--;)
      ((u = c[f]),
        (l = u._pt || u),
        (l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c),
        (l.c = n - l.s),
        (u.e &&= q(n) + Y(u.e)),
        (u.b &&= l.s + Y(u.b)));
  },
  Jn = function (e, t) {
    var n = e[0] ? $e(e[0]).harness : 0,
      r = n && n.aliases,
      i,
      a,
      o,
      s;
    if (!r) return t;
    for (a in ((i = ut({}, t)), r))
      if (a in i) for (s = r[a].split(`,`), o = s.length; o--;) i[s[o]] = i[a];
    return i;
  },
  Yn = function (e, t, n, r) {
    var i = t.ease || r || `power1.inOut`,
      a,
      o;
    if (W(t))
      ((o = n[e] || (n[e] = [])),
        t.forEach(function (e, n) {
          return o.push({ t: (n / (t.length - 1)) * 100, v: e, e: i });
        }));
    else
      for (a in t)
        ((o = n[a] || (n[a] = [])),
          a === `ease` || o.push({ t: parseFloat(e), v: t[a], e: i }));
  },
  Xn = function (e, t, n, r, i) {
    return H(e)
      ? e.call(t, n, r, i)
      : V(e) && ~e.indexOf(`random(`)
        ? on(e)
        : e;
  },
  Zn =
    Ze +
    `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,
  Qn = {};
K(Zn + `,id,stagger,delay,duration,paused,scrollTrigger`, function (e) {
  return (Qn[e] = 1);
});
var Q = (function (e) {
  ie(t, e);
  function t(t, n, r, i) {
    var a;
    (typeof n == `number` && ((r.duration = n), (n = r), (r = null)),
      (a = e.call(this, i ? n : pt(n)) || this));
    var o = a.vars,
      s = o.duration,
      c = o.delay,
      l = o.immediateRender,
      u = o.stagger,
      d = o.overwrite,
      f = o.keyframes,
      p = o.defaults,
      m = o.scrollTrigger,
      h = n.parent || G,
      g = (W(t) || ye(t) ? me(t[0]) : `length` in n) ? [t] : Kt(t),
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w;
    if (
      ((a._targets = g.length
        ? Qe(g)
        : Le(
          `GSAP target ` + t + ` not found. https://gsap.com`,
          !L.nullTargetWarn,
        ) || []),
        (a._ptLookup = []),
        (a._overwrite = d),
        f || u || ve(s) || ve(c))
    ) {
      n = a.vars;
      var T = n.easeReverse || n.yoyoEase;
      if (
        ((_ = a.timeline =
          new zn({
            data: `nested`,
            defaults: p || {},
            targets: h && h.data === `nested` ? h.vars.targets : g,
          })),
          _.kill(),
          (_.parent = _._dp = I(a)),
          (_._start = 0),
          u || ve(s) || ve(c))
      ) {
        if (((b = g.length), (C = u && Yt(u)), ge(u)))
          for (x in u) ~Zn.indexOf(x) && ((w ||= {}), (w[x] = u[x]));
        for (v = 0; v < b; v++)
          ((y = ft(n, Qn)),
            (y.stagger = 0),
            T && (y.easeReverse = T),
            w && ut(y, w),
            (S = g[v]),
            (y.duration = +Xn(s, I(a), v, S, g)),
            (y.delay = (+Xn(c, I(a), v, S, g) || 0) - a._delay),
            !u &&
            b === 1 &&
            y.delay &&
            ((a._delay = c = y.delay), (a._start += c), (y.delay = 0)),
            _.to(S, y, C ? C(v, S, g) : 0),
            (_._ease = Z.none));
        _.duration() ? (s = c = 0) : (a.timeline = 0);
      } else if (f) {
        (pt(ct(_.vars.defaults, { ease: `none` })),
          (_._ease = Mn(f.ease || n.ease || `none`)));
        var E = 0,
          D,
          O,
          k;
        if (W(f))
          (f.forEach(function (e) {
            return _.to(g, e, `>`);
          }),
            _.duration());
        else {
          for (x in ((y = {}), f))
            x === `ease` || x === `easeEach` || Yn(x, f[x], y, f.easeEach);
          for (x in y)
            for (
              D = y[x].sort(function (e, t) {
                return e.t - t.t;
              }),
              E = 0,
              v = 0;
              v < D.length;
              v++
            )
              ((O = D[v]),
                (k = {
                  ease: O.e,
                  duration: ((O.t - (v ? D[v - 1].t : 0)) / 100) * s,
                }),
                (k[x] = O.v),
                _.to(g, k, E),
                (E += k.duration));
          _.duration() < s && _.to({}, { duration: s - _.duration() });
        }
      }
      s || a.duration((s = _.duration()));
    } else a.timeline = 0;
    return (
      d === !0 && !oe && ((Wn = I(a)), G.killTweensOf(g), (Wn = 0)),
      Ot(h, I(a), r),
      n.reversed && a.reverse(),
      n.paused && a.paused(!0),
      (l ||
        (!s &&
          !f &&
          a._start === J(h._time) &&
          U(l) &&
          xt(I(a)) &&
          h.data !== `nested`)) &&
      ((a._tTime = -B), a.render(Math.max(0, -c) || 0)),
      m && kt(I(a), m),
      a
    );
  }
  var n = t.prototype;
  return (
    (n.render = function (e, t, n) {
      var r = this._time,
        i = this._tDur,
        a = this._dur,
        o = e < 0,
        s = e > i - B && !o ? i : e < B ? 0 : e,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h;
      if (!a) Nt(this, e, t, n);
      else if (
        s !== this._tTime ||
        !e ||
        n ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== o) ||
        this._lazy
      ) {
        if (((c = s), (h = this.timeline), this._repeat)) {
          if (((d = a + this._rDelay), this._repeat < -1 && o))
            return this.totalTime(d * 100 + e, t, n);
          if (
            ((c = J(s % d)),
              s === i
                ? ((u = this._repeat), (c = a))
                : ((f = J(s / d)),
                  (u = ~~f),
                  u && u === f ? ((c = a), u--) : c > a && (c = a)),
              (p = this._yoyo && u & 1),
              p && (c = a - c),
              (f = Ct(this._tTime, d)),
              c === r && !n && this._initted && u === f)
          )
            return ((this._tTime = s), this);
          u !== f &&
            this.vars.repeatRefresh &&
            !p &&
            !this._lock &&
            c !== d &&
            this._initted &&
            ((this._lock = n = 1),
              (this.render(J(d * u), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (At(this, o ? e : c, n, t, s)) return ((this._tTime = 0), this);
          if (r !== this._time && !(n && this.vars.repeatRefresh && u !== f))
            return this;
          if (a !== this._dur) return this.render(e, t, n);
        }
        if (this._rEase) {
          var g = c < r;
          if (g !== this._inv) {
            var _ = g ? r : a - r;
            ((this._inv = g),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = r),
              (this._invRecip = _ ? (g ? -1 : 1) / _ : 0),
              (this._invScale = g ? -this.ratio : 1 - this.ratio),
              (this._invEase = g ? this._rEase : this._ease));
          }
          this.ratio = m =
            this._invRatio +
            this._invScale *
            this._invEase((c - this._invTime) * this._invRecip);
        } else this.ratio = m = this._ease(c / a);
        if (
          (this._from && (this.ratio = m = 1 - m),
            (this._tTime = s),
            (this._time = c),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            !r && s && !t && !f && (un(this, `onStart`), this._tTime !== s))
        )
          return this;
        for (l = this._pt; l;) (l.r(m, l.d), (l = l._next));
        ((h && h.render(e < 0 ? e : h._dur * h._ease(c / this._dur), t, n)) ||
          (this._startAt && (this._zTime = e)),
          this._onUpdate &&
          !t &&
          (o && bt(this, e, t, n), un(this, `onUpdate`)),
          this._repeat &&
          u !== f &&
          this.vars.onRepeat &&
          !t &&
          this.parent &&
          un(this, `onRepeat`),
          (s === this._tDur || !s) &&
          this._tTime === s &&
          (o && !this._onUpdate && bt(this, e, !0, !0),
            (e || !a) &&
            ((s === this._tDur && this._ts > 0) || (!s && this._ts < 0)) &&
            _t(this, 1),
            !t &&
            !(o && !r) &&
            (s || r || p) &&
            (un(this, s === i ? `onComplete` : `onReverseComplete`, !0),
              this._prom && !(s < i && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (t) {
      return (
        (!t || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(t),
        e.prototype.invalidate.call(this, t)
      );
    }),
    (n.resetTo = function (e, t, n, r, i) {
      (Cn || wn.wake(), this._ts || this.play());
      var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        o;
      return (
        this._initted || Kn(this, a),
        (o = this._ease(a / this._dur)),
        qn(this, e, t, n, r, o, a, i)
          ? this.resetTo(e, t, n, r, 1)
          : (Et(this, 0),
            this.parent ||
            ht(
              this._dp,
              this,
              `_first`,
              `_last`,
              this._dp._sort ? `_start` : 0,
            ),
            this.render(0))
      );
    }),
    (n.kill = function (e, t) {
      if ((t === void 0 && (t = `all`), !e && (!t || t === `all`)))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? dn(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!R),
          this
        );
      if (this.timeline) {
        var n = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(e, t, Wn && Wn.vars.overwrite !== !0)
            ._first || dn(this),
          this.parent &&
          n !== this.timeline.totalDuration() &&
          Ft(this, (this._dur * this.timeline._tDur) / n, 0, 1),
          this
        );
      }
      var r = this._targets,
        i = e ? Kt(e) : r,
        a = this._ptLookup,
        o = this._pt,
        s,
        c,
        l,
        u,
        d,
        f,
        p;
      if ((!t || t === `all`) && mt(r, i))
        return (t === `all` && (this._pt = 0), dn(this));
      for (
        s = this._op = this._op || [],
        t !== `all` &&
        (V(t) &&
          ((d = {}),
            K(t, function (e) {
              return (d[e] = 1);
            }),
            (t = d)),
          (t = Jn(r, t))),
        p = r.length;
        p--;
      )
        if (~i.indexOf(r[p]))
          for (d in ((c = a[p]),
            t === `all`
              ? ((s[p] = t), (u = c), (l = {}))
              : ((l = s[p] = s[p] || {}), (u = t)),
            u))
            ((f = c && c[d]),
              f &&
              ((!(`kill` in f.d) || f.d.kill(d) === !0) && gt(this, f, `_pt`),
                delete c[d]),
              l !== `all` && (l[d] = 1));
      return (this._initted && !this._pt && o && dn(this), this);
    }),
    (t.to = function (e, n) {
      return new t(e, n, arguments[2]);
    }),
    (t.from = function (e, t) {
      return zt(1, arguments);
    }),
    (t.delayedCall = function (e, n, r, i) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: e,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i,
      });
    }),
    (t.fromTo = function (e, t, n) {
      return zt(2, arguments);
    }),
    (t.set = function (e, n) {
      return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n));
    }),
    (t.killTweensOf = function (e, t, n) {
      return G.killTweensOf(e, t, n);
    }),
    t
  );
})(Rn);
(ct(Q.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  K(`staggerTo,staggerFrom,staggerFromTo`, function (e) {
    Q[e] = function () {
      var t = new zn(),
        n = Ut.call(arguments, 0);
      return (n.splice(e === `staggerFromTo` ? 5 : 4, 0, 0), t[e].apply(t, n));
    };
  }));
var $n = function (e, t, n) {
  return (e[t] = n);
},
  er = function (e, t, n) {
    return e[t](n);
  },
  tr = function (e, t, n, r) {
    return e[t](r.fp, n);
  },
  nr = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  rr = function (e, t) {
    return H(e[t]) ? er : he(e[t]) && e.setAttribute ? nr : $n;
  },
  ir = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  ar = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  or = function (e, t) {
    var n = t._pt,
      r = ``;
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; n;)
        ((r =
          n.p +
          (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) +
          r),
          (n = n._next));
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  },
  sr = function (e, t) {
    for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
  },
  cr = function (e, t, n, r) {
    for (var i = this._pt, a; i;)
      ((a = i._next), i.p === r && i.modifier(e, t, n), (i = a));
  },
  lr = function (e) {
    for (var t = this._pt, n, r; t;)
      ((r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? gt(this, t, `_pt`)
          : t.dep || (n = 1),
        (t = r));
    return !n;
  },
  ur = function (e, t, n, r) {
    r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
  },
  dr = function (e) {
    for (var t = e._pt, n, r, i, a; t;) {
      for (n = t._next, r = i; r && r.pr > t.pr;) r = r._next;
      ((t._prev = r ? r._prev : a) ? (t._prev._next = t) : (i = t),
        (t._next = r) ? (r._prev = t) : (a = t),
        (t = n));
    }
    e._pt = i;
  },
  fr = (function () {
    function e(e, t, n, r, i, a, o, s, c) {
      ((this.t = t),
        (this.s = r),
        (this.c = i),
        (this.p = n),
        (this.r = a || ir),
        (this.d = o || this),
        (this.set = s || $n),
        (this.pr = c || 0),
        (this._next = e),
        e && (e._prev = this));
    }
    var t = e.prototype;
    return (
      (t.modifier = function (e, t, n) {
        ((this.mSet = this.mSet || this.set),
          (this.set = ur),
          (this.m = e),
          (this.mt = n),
          (this.tween = t));
      }),
      e
    );
  })();
(K(
  Ze +
  `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,
  function (e) {
    return (Ue[e] = 1);
  },
),
  (Me.TweenMax = Me.TweenLite = Q),
  (Me.TimelineLite = Me.TimelineMax = zn),
  (G = new zn({
    sortChildren: !1,
    defaults: ae,
    autoRemoveChildren: !0,
    id: `root`,
    smoothChildTiming: !0,
  })),
  (L.stringFilter = Sn));
var pr = [],
  mr = {},
  hr = [],
  gr = 0,
  _r = 0,
  vr = function (e) {
    return (mr[e] || hr).map(function (e) {
      return e();
    });
  },
  yr = function () {
    var e = Date.now(),
      t = [];
    e - gr > 2 &&
      (vr(`matchMediaInit`),
        pr.forEach(function (e) {
          var n = e.queries,
            r = e.conditions,
            i,
            a,
            o,
            s;
          for (a in n)
            ((i = ke.matchMedia(n[a]).matches),
              i && (o = 1),
              i !== r[a] && ((r[a] = i), (s = 1)));
          s && (e.revert(), o && t.push(e));
        }),
        vr(`matchMediaRevert`),
        t.forEach(function (e) {
          return e.onMatch(e, function (t) {
            return e.add(null, t);
          });
        }),
        (gr = e),
        vr(`matchMedia`));
  },
  br = (function () {
    function e(e, t) {
      ((this.selector = t && qt(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = _r++),
        e && this.add(e));
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        H(e) && ((n = t), (t = e), (e = H));
        var r = this,
          i = function () {
            var e = z,
              i = r.selector,
              a;
            return (
              e && e !== r && e.data.push(r),
              n && (r.selector = qt(n)),
              (z = r),
              (a = t.apply(r, arguments)),
              H(a) && r._r.push(a),
              (z = e),
              (r.selector = i),
              (r.isReverted = !1),
              a
            );
          };
        return (
          (r.last = i),
          e === H
            ? i(r, function (e) {
              return r.add(null, e);
            })
            : e
              ? (r[e] = i)
              : i
        );
      }),
      (t.ignore = function (e) {
        var t = z;
        ((z = null), e(this), (z = t));
      }),
      (t.getTweens = function () {
        var t = [];
        return (
          this.data.forEach(function (n) {
            return n instanceof e
              ? t.push.apply(t, n.getTweens())
              : n instanceof Q &&
              !(n.parent && n.parent.data === `nested`) &&
              t.push(n);
          }),
          t
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (e, t) {
        var n = this;
        if (
          (e
            ? (function () {
              for (var t = n.getTweens(), r = n.data.length, i; r--;)
                ((i = n.data[r]),
                  i.data === `isFlip` &&
                  (i.revert(),
                    i.getChildren(!0, !0, !1).forEach(function (e) {
                      return t.splice(t.indexOf(e), 1);
                    })));
              for (
                t
                  .map(function (e) {
                    return {
                      g:
                        e._dur ||
                          e._delay ||
                          (e._sat && !e._sat.vars.immediateRender)
                          ? e.globalTime(0)
                          : -1 / 0,
                      t: e,
                    };
                  })
                  .sort(function (e, t) {
                    return t.g - e.g || -1 / 0;
                  })
                  .forEach(function (t) {
                    return t.t.revert(e);
                  }),
                r = n.data.length;
                r--;
              )
                ((i = n.data[r]),
                  i instanceof zn
                    ? i.data !== `nested` &&
                    (i.scrollTrigger && i.scrollTrigger.revert(), i.kill())
                    : !(i instanceof Q) && i.revert && i.revert(e));
              (n._r.forEach(function (t) {
                return t(e, n);
              }),
                (n.isReverted = !0));
            })()
            : this.data.forEach(function (e) {
              return e.kill && e.kill();
            }),
            this.clear(),
            t)
        )
          for (var r = pr.length; r--;)
            pr[r].id === this.id && pr.splice(r, 1);
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      e
    );
  })(),
  xr = (function () {
    function e(e) {
      ((this.contexts = []), (this.scope = e), z && z.data.push(this));
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        ge(e) || (e = { matches: e });
        var r = new br(0, n || this.scope),
          i = (r.conditions = {}),
          a,
          o,
          s;
        for (o in (z && !r.selector && (r.selector = z.selector),
          this.contexts.push(r),
          (t = r.add(`onMatch`, t)),
          (r.queries = e),
          e))
          o === `all`
            ? (s = 1)
            : ((a = ke.matchMedia(e[o])),
              a &&
              (pr.indexOf(r) < 0 && pr.push(r),
                (i[o] = a.matches) && (s = 1),
                a.addListener
                  ? a.addListener(yr)
                  : a.addEventListener(`change`, yr)));
        return (
          s &&
          t(r, function (e) {
            return r.add(null, e);
          }),
          this
        );
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      (t.kill = function (e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      e
    );
  })(),
  Sr = {
    registerPlugin: function () {
      [...arguments].forEach(function (e) {
        return mn(e);
      });
    },
    timeline: function (e) {
      return new zn(e);
    },
    getTweensOf: function (e, t) {
      return G.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, r) {
      V(e) && (e = Kt(e)[0]);
      var i = $e(e || {}).get,
        a = n ? st : ot;
      return (
        n === `native` && (n = ``),
        e &&
        (t
          ? a(((qe[t] && qe[t].get) || i)(e, t, n, r))
          : function (t, n, r) {
            return a(((qe[t] && qe[t].get) || i)(e, t, n, r));
          })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = Kt(e)), e.length > 1)) {
        var r = e.map(function (e) {
          return Er.quickSetter(e, t, n);
        }),
          i = r.length;
        return function (e) {
          for (var t = i; t--;) r[t](e);
        };
      }
      e = e[0] || {};
      var a = qe[t],
        o = $e(e),
        s = (o.harness && (o.harness.aliases || {})[t]) || t,
        c = a
          ? function (t) {
            var r = new a();
            ((fn._pt = 0),
              r.init(e, n ? t + n : t, fn, 0, [e]),
              r.render(1, r),
              fn._pt && sr(1, fn));
          }
          : o.set(e, s);
      return a
        ? c
        : function (t) {
          return c(e, s, n ? t + n : t, o, 1);
        };
    },
    quickTo: function (e, t, n) {
      var r,
        i = Er.to(
          e,
          ct(
            ((r = {}), (r[t] = `+=0.1`), (r.paused = !0), (r.stagger = 0), r),
            n || {},
          ),
        ),
        a = function (e, n, r) {
          return i.resetTo(t, e, n, r);
        };
      return ((a.tween = i), a);
    },
    isTweening: function (e) {
      return G.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return (e && e.ease && (e.ease = Mn(e.ease, ae.ease)), dt(ae, e || {}));
    },
    config: function (e) {
      return dt(L, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        r = e.plugins,
        i = e.defaults,
        a = e.extendTimeline;
      ((r || ``).split(`,`).forEach(function (e) {
        return (
          e && !qe[e] && !Me[e] && Le(t + ` effect requires ` + e + ` plugin.`)
        );
      }),
        (Je[t] = function (e, t, r) {
          return n(Kt(e), ct(t || {}, i), r);
        }),
        a &&
        (zn.prototype[t] = function (e, n, r) {
          return this.add(Je[t](e, ge(n) ? n : (r = n) && {}, this), r);
        }));
    },
    registerEase: function (e, t) {
      Z[e] = Mn(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? Mn(e, t) : Z;
    },
    getById: function (e) {
      return G.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new zn(e),
        r,
        i;
      for (
        n.smoothChildTiming = U(e.smoothChildTiming),
        G.remove(n),
        n._dp = 0,
        n._time = n._tTime = G._time,
        r = G._first;
        r;
      )
        ((i = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof Q &&
              r.vars.onComplete === r._targets[0]
            )) &&
          Ot(n, r, r._start - r._delay),
          (r = i));
      return (Ot(G, n, 0), n);
    },
    context: function (e, t) {
      return e ? new br(e, t) : z;
    },
    matchMedia: function (e) {
      return new xr(e);
    },
    matchMediaRefresh: function () {
      return (
        pr.forEach(function (e) {
          var t = e.conditions,
            n,
            r;
          for (r in t) t[r] && ((t[r] = !1), (n = 1));
          n && e.revert();
        }) || yr()
      );
    },
    addEventListener: function (e, t) {
      var n = mr[e] || (mr[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = mr[e],
        r = n && n.indexOf(t);
      r >= 0 && n.splice(r, 1);
    },
    utils: {
      wrap: rn,
      wrapYoyo: an,
      distribute: Yt,
      random: Qt,
      snap: Zt,
      normalize: tn,
      getUnit: Y,
      clamp: Ht,
      splitColor: _n,
      toArray: Kt,
      selector: qt,
      mapRange: sn,
      pipe: $t,
      unitize: en,
      interpolate: cn,
      shuffle: Jt,
    },
    install: Fe,
    effects: Je,
    ticker: wn,
    updateRoot: zn.updateRoot,
    plugins: qe,
    globalTimeline: G,
    core: {
      PropTween: fr,
      globals: Re,
      Tween: Q,
      Timeline: zn,
      Animation: Rn,
      getCache: $e,
      _removeLinkedListItem: gt,
      reverting: function () {
        return R;
      },
      context: function (e) {
        return (e && z && (z.data.push(e), (e._ctx = z)), z);
      },
      suppressOverwrites: function (e) {
        return (oe = e);
      },
    },
  };
(K(`to,from,fromTo,delayedCall,set,killTweensOf`, function (e) {
  return (Sr[e] = Q[e]);
}),
  wn.add(zn.updateRoot),
  (fn = Sr.to({}, { duration: 0 })));
var Cr = function (e, t) {
  for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;)
    n = n._next;
  return n;
},
  wr = function (e, t) {
    var n = e._targets,
      r,
      i,
      a;
    for (r in t)
      for (i = n.length; i--;)
        ((a = e._ptLookup[i][r]),
          (a &&= a.d) &&
          (a._pt && (a = Cr(a, r)),
            a && a.modifier && a.modifier(t[r], e, n[i], r)));
  },
  Tr = function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (e, n, r) {
        r._onInit = function (e) {
          var r, i;
          if (
            (V(n) &&
              ((r = {}),
                K(n, function (e) {
                  return (r[e] = 1);
                }),
                (n = r)),
              t)
          ) {
            for (i in ((r = {}), n)) r[i] = t(n[i]);
            n = r;
          }
          wr(e, n);
        };
      },
    };
  },
  Er =
    Sr.registerPlugin(
      {
        name: `attr`,
        init: function (e, t, n, r, i) {
          var a, o, s;
          for (a in ((this.tween = n), t))
            ((s = e.getAttribute(a) || ``),
              (o = this.add(
                e,
                `setAttribute`,
                (s || 0) + ``,
                t[a],
                r,
                i,
                0,
                0,
                a,
              )),
              (o.op = a),
              (o.b = s),
              this._props.push(a));
        },
        render: function (e, t) {
          for (var n = t._pt; n;)
            (R ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next));
        },
      },
      {
        name: `endArray`,
        headless: 1,
        init: function (e, t) {
          for (var n = t.length; n--;)
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      Tr(`roundProps`, Xt),
      Tr(`modifiers`),
      Tr(`snap`, Zt),
    ) || Sr;
((Q.version = zn.version = Er.version = `3.15.0`),
  (Pe = 1),
  _e() && Tn(),
  Z.Power0,
  Z.Power1,
  Z.Power2,
  Z.Power3,
  Z.Power4,
  Z.Linear,
  Z.Quad,
  Z.Cubic,
  Z.Quart,
  Z.Quint,
  Z.Strong,
  Z.Elastic,
  Z.Back,
  Z.SteppedEase,
  Z.Bounce,
  Z.Sine,
  Z.Expo,
  Z.Circ);
var Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr = function () {
    return typeof window < `u`;
  },
  Fr = {},
  Ir = 180 / Math.PI,
  Lr = Math.PI / 180,
  Rr = Math.atan2,
  zr = 1e8,
  Br = /([A-Z])/g,
  Vr = /(left|right|width|margin|padding|x)/i,
  Hr = /[\s,\(]\S/,
  Ur = {
    autoAlpha: `opacity,visibility`,
    scale: `scaleX,scaleY`,
    alpha: `opacity`,
  },
  Wr = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  Gr = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t,
    );
  },
  Kr = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t,
    );
  },
  qr = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t,
    );
  },
  Jr = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Yr = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  Xr = function (e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
  },
  Zr = function (e, t, n) {
    return (e.style[t] = n);
  },
  Qr = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  $r = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  ei = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  ti = function (e, t, n, r, i) {
    var a = e._gsap;
    ((a.scaleX = a.scaleY = n), a.renderTransform(i, a));
  },
  ni = function (e, t, n, r, i) {
    var a = e._gsap;
    ((a[t] = n), a.renderTransform(i, a));
  },
  $ = `transform`,
  ri = $ + `Origin`,
  ii = function e(t, n) {
    var r = this,
      i = this.target,
      a = i.style,
      o = i._gsap;
    if (t in Fr && a) {
      if (((this.tfm = this.tfm || {}), t !== `transform`))
        ((t = Ur[t] || t),
          ~t.indexOf(`,`)
            ? t.split(`,`).forEach(function (e) {
              return (r.tfm[e] = Ci(i, e));
            })
            : (this.tfm[t] = o.x ? o[t] : Ci(i, t)),
          t === ri && (this.tfm.zOrigin = o.zOrigin));
      else
        return Ur.transform.split(`,`).forEach(function (t) {
          return e.call(r, t, n);
        });
      if (this.props.indexOf($) >= 0) return;
      (o.svg &&
        ((this.svgo = i.getAttribute(`data-svg-origin`)),
          this.props.push(ri, n, ``)),
        (t = $));
    }
    (a || n) && this.props.push(t, n, a[t]);
  },
  ai = function (e) {
    e.translate &&
      (e.removeProperty(`translate`),
        e.removeProperty(`scale`),
        e.removeProperty(`rotate`));
  },
  oi = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      r = t._gsap,
      i,
      a;
    for (i = 0; i < e.length; i += 3)
      e[i + 1]
        ? e[i + 1] === 2
          ? t[e[i]](e[i + 2])
          : (t[e[i]] = e[i + 2])
        : e[i + 2]
          ? (n[e[i]] = e[i + 2])
          : n.removeProperty(
            e[i].substr(0, 2) === `--`
              ? e[i]
              : e[i].replace(Br, `-$1`).toLowerCase(),
          );
    if (this.tfm) {
      for (a in this.tfm) r[a] = this.tfm[a];
      (r.svg &&
        (r.renderTransform(),
          t.setAttribute(`data-svg-origin`, this.svgo || ``)),
        (i = Nr()),
        (!i || !i.isStart) &&
        !n[$] &&
        (ai(n),
          r.zOrigin &&
          n[ri] &&
          ((n[ri] += ` ` + r.zOrigin + `px`),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1)));
    }
  },
  si = function (e, t) {
    var n = { target: e, props: [], revert: oi, save: ii };
    return (
      e._gsap || Er.core.getCache(e),
      t &&
      e.style &&
      e.nodeType &&
      t.split(`,`).forEach(function (e) {
        return n.save(e);
      }),
      n
    );
  },
  ci,
  li = function (e, t) {
    var n = Or.createElementNS
      ? Or.createElementNS(
        (t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`),
        e,
      )
      : Or.createElement(e);
    return n && n.style ? n : Or.createElement(e);
  },
  ui = function e(t, n, r) {
    var i = getComputedStyle(t);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(Br, `-$1`).toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && e(t, fi(n) || n, 1)) ||
      ``
    );
  },
  di = `O,Moz,ms,Ms,Webkit`.split(`,`),
  fi = function (e, t, n) {
    var r = (t || jr).style,
      i = 5;
    if (e in r && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      i-- && !(di[i] + e in r);
    );
    return i < 0 ? null : (i === 3 ? `ms` : i >= 0 ? di[i] : ``) + e;
  },
  pi = function () {
    Pr() &&
      window.document &&
      ((Dr = window),
        (Or = Dr.document),
        (kr = Or.documentElement),
        (jr = li(`div`) || { style: {} }),
        li(`div`),
        ($ = fi($)),
        (ri = $ + `Origin`),
        (jr.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`),
        (ci = !!fi(`perspective`)),
        (Nr = Er.core.reverting),
        (Ar = 1));
  },
  mi = function (e) {
    var t = e.ownerSVGElement,
      n = li(
        `svg`,
        (t && t.getAttribute(`xmlns`)) || `http://www.w3.org/2000/svg`,
      ),
      r = e.cloneNode(!0),
      i;
    ((r.style.display = `block`), n.appendChild(r), kr.appendChild(n));
    try {
      i = r.getBBox();
    } catch { }
    return (n.removeChild(r), kr.removeChild(n), i);
  },
  hi = function (e, t) {
    for (var n = t.length; n--;)
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  gi = function (e) {
    var t, n;
    try {
      t = e.getBBox();
    } catch {
      ((t = mi(e)), (n = 1));
    }
    return (
      (t && (t.width || t.height)) || n || (t = mi(e)),
      t && !t.width && !t.x && !t.y
        ? {
          x: +hi(e, [`x`, `cx`, `x1`]) || 0,
          y: +hi(e, [`y`, `cy`, `y1`]) || 0,
          width: 0,
          height: 0,
        }
        : t
    );
  },
  _i = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && gi(e));
  },
  vi = function (e, t) {
    if (t) {
      var n = e.style,
        r;
      (t in Fr && t !== ri && (t = $),
        n.removeProperty
          ? ((r = t.substr(0, 2)),
            (r === `ms` || t.substr(0, 6) === `webkit`) && (t = `-` + t),
            n.removeProperty(
              r === `--` ? t : t.replace(Br, `-$1`).toLowerCase(),
            ))
          : n.removeAttribute(t));
    }
  },
  yi = function (e, t, n, r, i, a) {
    var o = new fr(e._pt, t, n, 0, 1, a ? Xr : Yr);
    return ((e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o);
  },
  bi = { deg: 1, rad: 1, turn: 1 },
  xi = { grid: 1, flex: 1 },
  Si = function e(t, n, r, i) {
    var a = parseFloat(r) || 0,
      o = (r + ``).trim().substr((a + ``).length) || `px`,
      s = jr.style,
      c = Vr.test(n),
      l = t.tagName.toLowerCase() === `svg`,
      u = (l ? `client` : `offset`) + (c ? `Width` : `Height`),
      d = 100,
      f = i === `px`,
      p = i === `%`,
      m,
      h,
      g,
      _;
    if (i === o || !a || bi[i] || bi[o]) return a;
    if (
      (o !== `px` && !f && (a = e(t, n, r, `px`)),
        (_ = t.getCTM && _i(t)),
        (p || o === `%`) && (Fr[n] || ~n.indexOf(`adius`)))
    )
      return (
        (m = _ ? t.getBBox()[c ? `width` : `height`] : t[u]),
        q(p ? (a / m) * d : (a / 100) * m)
      );
    if (
      ((s[c ? `width` : `height`] = d + (f ? o : i)),
        (h =
          (i !== `rem` && ~n.indexOf(`adius`)) ||
            (i === `em` && t.appendChild && !l)
            ? t
            : t.parentNode),
        _ && (h = (t.ownerSVGElement || {}).parentNode),
        (!h || h === Or || !h.appendChild) && (h = Or.body),
        (g = h._gsap),
        g && p && g.width && c && g.time === wn.time && !g.uncache)
    )
      return q((a / g.width) * d);
    if (p && (n === `height` || n === `width`)) {
      var v = t.style[n];
      ((t.style[n] = d + i), (m = t[u]), v ? (t.style[n] = v) : vi(t, n));
    } else
      ((p || o === `%`) &&
        !xi[ui(h, `display`)] &&
        (s.position = ui(t, `position`)),
        h === t && (s.position = `static`),
        h.appendChild(jr),
        (m = jr[u]),
        h.removeChild(jr),
        (s.position = `absolute`));
    return (
      c && p && ((g = $e(h)), (g.time = wn.time), (g.width = h[u])),
      q(f ? (m * a) / d : m && a ? (d / m) * a : 0)
    );
  },
  Ci = function (e, t, n, r) {
    var i;
    return (
      Ar || pi(),
      t in Ur &&
      t !== `transform` &&
      ((t = Ur[t]), ~t.indexOf(`,`) && (t = t.split(`,`)[0])),
      Fr[t] && t !== `transform`
        ? ((i = Fi(e, r)),
          (i =
            t === `transformOrigin`
              ? i.svg
                ? i.origin
                : Ii(ui(e, ri)) + ` ` + i.zOrigin + `px`
              : i[t]))
        : ((i = e.style[t]),
          (!i || i === `auto` || r || ~(i + ``).indexOf(`calc(`)) &&
          (i =
            (Oi[t] && Oi[t](e, t, n)) ||
            ui(e, t) ||
            et(e, t) ||
            +(t === `opacity`))),
      n && !~(i + ``).trim().indexOf(` `) ? Si(e, t, i, n) + n : i
    );
  },
  wi = function (e, t, n, r) {
    if (!n || n === `none`) {
      var i = fi(t, e, 1),
        a = i && ui(e, i, 1);
      a && a !== n
        ? ((t = i), (n = a))
        : t === `borderColor` && (n = ui(e, `borderTopColor`));
    }
    var o = new fr(this._pt, e.style, t, 0, 1, or),
      s = 0,
      c = 0,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b;
    if (
      ((o.b = n),
        (o.e = r),
        (n += ``),
        (r += ``),
        r.substring(0, 6) === `var(--` &&
        (r = ui(e, r.substring(4, r.indexOf(`)`)))),
        r === `auto` &&
        ((m = e.style[t]),
          (e.style[t] = r),
          (r = ui(e, t) || r),
          m ? (e.style[t] = m) : vi(e, t)),
        (l = [n, r]),
        Sn(l),
        (n = l[0]),
        (r = l[1]),
        (d = n.match(we) || []),
        (b = r.match(we) || []),
        b.length)
    ) {
      for (; (u = we.exec(r));)
        ((h = u[0]),
          (_ = r.substring(s, u.index)),
          p
            ? (p = (p + 1) % 5)
            : (_.substr(-5) === `rgba(` || _.substr(-5) === `hsla(`) && (p = 1),
          h !== (m = d[c++] || ``) &&
          ((f = parseFloat(m) || 0),
            (y = m.substr((f + ``).length)),
            h.charAt(1) === `=` && (h = tt(f, h) + y),
            (g = parseFloat(h)),
            (v = h.substr((g + ``).length)),
            (s = we.lastIndex - v.length),
            v ||
            ((v = v || L.units[t] || y),
              s === r.length && ((r += v), (o.e += v))),
            y !== v && (f = Si(e, t, m, v) || 0),
            (o._pt = {
              _next: o._pt,
              p: _ || c === 1 ? _ : `,`,
              s: f,
              c: g - f,
              m: (p && p < 4) || t === `zIndex` ? Math.round : 0,
            })));
      o.c = s < r.length ? r.substring(s, r.length) : ``;
    } else o.r = t === `display` && r === `none` ? Xr : Yr;
    return (Ee.test(r) && (o.e = 0), (this._pt = o), o);
  },
  Ti = { top: `0%`, bottom: `100%`, left: `0%`, right: `100%`, center: `50%` },
  Ei = function (e) {
    var t = e.split(` `),
      n = t[0],
      r = t[1] || `50%`;
    return (
      (n === `top` || n === `bottom` || r === `left` || r === `right`) &&
      ((e = n), (n = r), (r = e)),
      (t[0] = Ti[n] || n),
      (t[1] = Ti[r] || r),
      t.join(` `)
    );
  },
  Di = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        r = n.style,
        i = t.u,
        a = n._gsap,
        o,
        s,
        c;
      if (i === `all` || i === !0) ((r.cssText = ``), (s = 1));
      else
        for (i = i.split(`,`), c = i.length; --c > -1;)
          ((o = i[c]),
            Fr[o] && ((s = 1), (o = o === `transformOrigin` ? ri : $)),
            vi(n, o));
      s &&
        (vi(n, $),
          a &&
          (a.svg && n.removeAttribute(`transform`),
            (r.scale = r.rotate = r.translate = `none`),
            Fi(n, 1),
            (a.uncache = 1),
            ai(r)));
    }
  },
  Oi = {
    clearProps: function (e, t, n, r, i) {
      if (i.data !== `isFromStart`) {
        var a = (e._pt = new fr(e._pt, t, n, 0, 0, Di));
        return ((a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1);
      }
    },
  },
  ki = [1, 0, 0, 1, 0, 0],
  Ai = {},
  ji = function (e) {
    return e === `matrix(1, 0, 0, 1, 0, 0)` || e === `none` || !e;
  },
  Mi = function (e) {
    var t = ui(e, $);
    return ji(t) ? ki : t.substr(7).match(Ce).map(q);
  },
  Ni = function (e, t) {
    var n = e._gsap || $e(e),
      r = e.style,
      i = Mi(e),
      a,
      o,
      s,
      c;
    return n.svg && e.getAttribute(`transform`)
      ? ((s = e.transform.baseVal.consolidate().matrix),
        (i = [s.a, s.b, s.c, s.d, s.e, s.f]),
        i.join(`,`) === `1,0,0,1,0,0` ? ki : i)
      : (i === ki &&
        !e.offsetParent &&
        e !== kr &&
        !n.svg &&
        ((s = r.display),
          (r.display = `block`),
          (a = e.parentNode),
          (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
          ((c = 1), (o = e.nextElementSibling), kr.appendChild(e)),
          (i = Mi(e)),
          s ? (r.display = s) : vi(e, `display`),
          c &&
          (o
            ? a.insertBefore(e, o)
            : a
              ? a.appendChild(e)
              : kr.removeChild(e))),
        t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
  },
  Pi = function (e, t, n, r, i, a) {
    var o = e._gsap,
      s = i || Ni(e, !0),
      c = o.xOrigin || 0,
      l = o.yOrigin || 0,
      u = o.xOffset || 0,
      d = o.yOffset || 0,
      f = s[0],
      p = s[1],
      m = s[2],
      h = s[3],
      g = s[4],
      _ = s[5],
      v = t.split(` `),
      y = parseFloat(v[0]) || 0,
      b = parseFloat(v[1]) || 0,
      x,
      S,
      C,
      w;
    (n
      ? s !== ki &&
      (S = f * h - p * m) &&
      ((C = (h / S) * y + b * (-m / S) + (m * _ - h * g) / S),
        (w = y * (-p / S) + (f / S) * b - (f * _ - p * g) / S),
        (y = C),
        (b = w))
      : ((x = gi(e)),
        (y = x.x + (~v[0].indexOf(`%`) ? (y / 100) * x.width : y)),
        (b = x.y + (~(v[1] || v[0]).indexOf(`%`) ? (b / 100) * x.height : b))),
      r || (r !== !1 && o.smooth)
        ? ((g = y - c),
          (_ = b - l),
          (o.xOffset = u + (g * f + _ * m) - g),
          (o.yOffset = d + (g * p + _ * h) - _))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = y),
      (o.yOrigin = b),
      (o.smooth = !!r),
      (o.origin = t),
      (o.originIsAbsolute = !!n),
      (e.style[ri] = `0px 0px`),
      a &&
      (yi(a, o, `xOrigin`, c, y),
        yi(a, o, `yOrigin`, l, b),
        yi(a, o, `xOffset`, u, o.xOffset),
        yi(a, o, `yOffset`, d, o.yOffset)),
      e.setAttribute(`data-svg-origin`, y + ` ` + b));
  },
  Fi = function (e, t) {
    var n = e._gsap || new Ln(e);
    if (`x` in n && !t && !n.uncache) return n;
    var r = e.style,
      i = n.scaleX < 0,
      a = `px`,
      o = `deg`,
      s = getComputedStyle(e),
      c = ui(e, ri) || `0`,
      l = (u = d = m = h = g = _ = v = y = 0),
      u,
      d,
      f = (p = 1),
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w,
      T,
      E,
      D,
      O,
      k,
      A,
      j,
      M,
      N,
      P,
      ee,
      F,
      te,
      ne,
      re,
      I;
    return (
      (n.svg = !!(e.getCTM && _i(e))),
      s.translate &&
      ((s.translate !== `none` ||
        s.scale !== `none` ||
        s.rotate !== `none`) &&
        (r[$] =
          (s.translate === `none`
            ? ``
            : `translate3d(` +
            (s.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) +
            `) `) +
          (s.rotate === `none` ? `` : `rotate(` + s.rotate + `) `) +
          (s.scale === `none`
            ? ``
            : `scale(` + s.scale.split(` `).join(`,`) + `) `) +
          (s[$] === `none` ? `` : s[$])),
        (r.scale = r.rotate = r.translate = `none`)),
      (S = Ni(e, n.svg)),
      n.svg &&
      (n.uncache
        ? ((N = e.getBBox()),
          (c = n.xOrigin - N.x + `px ` + (n.yOrigin - N.y) + `px`),
          (M = ``))
        : (M = !t && e.getAttribute(`data-svg-origin`)),
        Pi(e, M || c, !!M || n.originIsAbsolute, n.smooth !== !1, S)),
      (b = n.xOrigin || 0),
      (x = n.yOrigin || 0),
      S !== ki &&
      ((E = S[0]),
        (D = S[1]),
        (O = S[2]),
        (k = S[3]),
        (l = A = S[4]),
        (u = j = S[5]),
        S.length === 6
          ? ((f = Math.sqrt(E * E + D * D)),
            (p = Math.sqrt(k * k + O * O)),
            (m = E || D ? Rr(D, E) * Ir : 0),
            (_ = O || k ? Rr(O, k) * Ir + m : 0),
            _ && (p *= Math.abs(Math.cos(_ * Lr))),
            n.svg && ((l -= b - (b * E + x * O)), (u -= x - (b * D + x * k))))
          : ((I = S[6]),
            (ne = S[7]),
            (ee = S[8]),
            (F = S[9]),
            (te = S[10]),
            (re = S[11]),
            (l = S[12]),
            (u = S[13]),
            (d = S[14]),
            (C = Rr(I, te)),
            (h = C * Ir),
            C &&
            ((w = Math.cos(-C)),
              (T = Math.sin(-C)),
              (M = A * w + ee * T),
              (N = j * w + F * T),
              (P = I * w + te * T),
              (ee = A * -T + ee * w),
              (F = j * -T + F * w),
              (te = I * -T + te * w),
              (re = ne * -T + re * w),
              (A = M),
              (j = N),
              (I = P)),
            (C = Rr(-O, te)),
            (g = C * Ir),
            C &&
            ((w = Math.cos(-C)),
              (T = Math.sin(-C)),
              (M = E * w - ee * T),
              (N = D * w - F * T),
              (P = O * w - te * T),
              (re = k * T + re * w),
              (E = M),
              (D = N),
              (O = P)),
            (C = Rr(D, E)),
            (m = C * Ir),
            C &&
            ((w = Math.cos(C)),
              (T = Math.sin(C)),
              (M = E * w + D * T),
              (N = A * w + j * T),
              (D = D * w - E * T),
              (j = j * w - A * T),
              (E = M),
              (A = N)),
            h &&
            Math.abs(h) + Math.abs(m) > 359.9 &&
            ((h = m = 0), (g = 180 - g)),
            (f = q(Math.sqrt(E * E + D * D + O * O))),
            (p = q(Math.sqrt(j * j + I * I))),
            (C = Rr(A, j)),
            (_ = Math.abs(C) > 2e-4 ? C * Ir : 0),
            (y = re ? 1 / (re < 0 ? -re : re) : 0)),
        n.svg &&
        ((M = e.getAttribute(`transform`)),
          (n.forceCSS = e.setAttribute(`transform`, ``) || !ji(ui(e, $))),
          M && e.setAttribute(`transform`, M))),
      Math.abs(_) > 90 &&
      Math.abs(_) < 270 &&
      (i
        ? ((f *= -1), (_ += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
        : ((p *= -1), (_ += _ <= 0 ? 180 : -180))),
      (t ||= n.uncache),
      (n.x =
        l -
        ((n.xPercent =
          l &&
          ((!t && n.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        a),
      (n.y =
        u -
        ((n.yPercent =
          u &&
          ((!t && n.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        a),
      (n.z = d + a),
      (n.scaleX = q(f)),
      (n.scaleY = q(p)),
      (n.rotation = q(m) + o),
      (n.rotationX = q(h) + o),
      (n.rotationY = q(g) + o),
      (n.skewX = _ + o),
      (n.skewY = v + o),
      (n.transformPerspective = y + a),
      (n.zOrigin = parseFloat(c.split(` `)[2]) || (!t && n.zOrigin) || 0) &&
      (r[ri] = Ii(c)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = L.force3D),
      (n.renderTransform = n.svg ? Ui : ci ? Hi : Ri),
      (n.uncache = 0),
      n
    );
  },
  Ii = function (e) {
    return (e = e.split(` `))[0] + ` ` + e[1];
  },
  Li = function (e, t, n) {
    var r = Y(t);
    return q(parseFloat(t) + parseFloat(Si(e, `x`, n + `px`, r))) + r;
  },
  Ri = function (e, t) {
    ((t.z = `0px`),
      (t.rotationY = t.rotationX = `0deg`),
      (t.force3D = 0),
      Hi(e, t));
  },
  zi = `0deg`,
  Bi = `0px`,
  Vi = `) `,
  Hi = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.z,
      c = n.rotation,
      l = n.rotationY,
      u = n.rotationX,
      d = n.skewX,
      f = n.skewY,
      p = n.scaleX,
      m = n.scaleY,
      h = n.transformPerspective,
      g = n.force3D,
      _ = n.target,
      v = n.zOrigin,
      y = ``,
      b = (g === `auto` && e && e !== 1) || g === !0;
    if (v && (u !== zi || l !== zi)) {
      var x = parseFloat(l) * Lr,
        S = Math.sin(x),
        C = Math.cos(x),
        w;
      ((x = parseFloat(u) * Lr),
        (w = Math.cos(x)),
        (a = Li(_, a, S * w * -v)),
        (o = Li(_, o, -Math.sin(x) * -v)),
        (s = Li(_, s, C * w * -v + v)));
    }
    (h !== Bi && (y += `perspective(` + h + Vi),
      (r || i) && (y += `translate(` + r + `%, ` + i + `%) `),
      (b || a !== Bi || o !== Bi || s !== Bi) &&
      (y +=
        s !== Bi || b
          ? `translate3d(` + a + `, ` + o + `, ` + s + `) `
          : `translate(` + a + `, ` + o + Vi),
      c !== zi && (y += `rotate(` + c + Vi),
      l !== zi && (y += `rotateY(` + l + Vi),
      u !== zi && (y += `rotateX(` + u + Vi),
      (d !== zi || f !== zi) && (y += `skew(` + d + `, ` + f + Vi),
      (p !== 1 || m !== 1) && (y += `scale(` + p + `, ` + m + Vi),
      (_.style[$] = y || `translate(0, 0)`));
  },
  Ui = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.rotation,
      c = n.skewX,
      l = n.skewY,
      u = n.scaleX,
      d = n.scaleY,
      f = n.target,
      p = n.xOrigin,
      m = n.yOrigin,
      h = n.xOffset,
      g = n.yOffset,
      _ = n.forceCSS,
      v = parseFloat(a),
      y = parseFloat(o),
      b,
      x,
      S,
      C,
      w;
    ((s = parseFloat(s)),
      (c = parseFloat(c)),
      (l = parseFloat(l)),
      l && ((l = parseFloat(l)), (c += l), (s += l)),
      s || c
        ? ((s *= Lr),
          (c *= Lr),
          (b = Math.cos(s) * u),
          (x = Math.sin(s) * u),
          (S = Math.sin(s - c) * -d),
          (C = Math.cos(s - c) * d),
          c &&
          ((l *= Lr),
            (w = Math.tan(c - l)),
            (w = Math.sqrt(1 + w * w)),
            (S *= w),
            (C *= w),
            l &&
            ((w = Math.tan(l)),
              (w = Math.sqrt(1 + w * w)),
              (b *= w),
              (x *= w))),
          (b = q(b)),
          (x = q(x)),
          (S = q(S)),
          (C = q(C)))
        : ((b = u), (C = d), (x = S = 0)),
      ((v && !~(a + ``).indexOf(`px`)) || (y && !~(o + ``).indexOf(`px`))) &&
      ((v = Si(f, `x`, a, `px`)), (y = Si(f, `y`, o, `px`))),
      (p || m || h || g) &&
      ((v = q(v + p - (p * b + m * S) + h)),
        (y = q(y + m - (p * x + m * C) + g))),
      (r || i) &&
      ((w = f.getBBox()),
        (v = q(v + (r / 100) * w.width)),
        (y = q(y + (i / 100) * w.height))),
      (w =
        `matrix(` + b + `,` + x + `,` + S + `,` + C + `,` + v + `,` + y + `)`),
      f.setAttribute(`transform`, w),
      _ && (f.style[$] = w));
  },
  Wi = function (e, t, n, r, i) {
    var a = 360,
      o = V(i),
      s = parseFloat(i) * (o && ~i.indexOf(`rad`) ? Ir : 1) - r,
      c = r + s + `deg`,
      l,
      u;
    return (
      o &&
      ((l = i.split(`_`)[1]),
        l === `short` && ((s %= a), s !== s % (a / 2) && (s += s < 0 ? a : -a)),
        l === `cw` && s < 0
          ? (s = ((s + a * zr) % a) - ~~(s / a) * a)
          : l === `ccw` && s > 0 && (s = ((s - a * zr) % a) - ~~(s / a) * a)),
      (e._pt = u = new fr(e._pt, t, n, r, s, Gr)),
      (u.e = c),
      (u.u = `deg`),
      e._props.push(n),
      u
    );
  },
  Gi = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  Ki = function (e, t, n) {
    var r = Gi({}, n._gsap),
      i = `perspective,force3D,transformOrigin,svgOrigin`,
      a = n.style,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    for (s in (r.svg
      ? ((c = n.getAttribute(`transform`)),
        n.setAttribute(`transform`, ``),
        (a[$] = t),
        (o = Fi(n, 1)),
        vi(n, $),
        n.setAttribute(`transform`, c))
      : ((c = getComputedStyle(n)[$]), (a[$] = t), (o = Fi(n, 1)), (a[$] = c)),
      Fr))
      ((c = r[s]),
        (l = o[s]),
        c !== l &&
        i.indexOf(s) < 0 &&
        ((f = Y(c)),
          (p = Y(l)),
          (u = f === p ? parseFloat(c) : Si(n, s, c, p)),
          (d = parseFloat(l)),
          (e._pt = new fr(e._pt, o, s, u, d - u, Wr)),
          (e._pt.u = p || 0),
          e._props.push(s)));
    Gi(o, r);
  };
K(`padding,margin,Width,Radius`, function (e, t) {
  var n = `Top`,
    r = `Right`,
    i = `Bottom`,
    a = `Left`,
    o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function (n) {
      return t < 2 ? e + n : `border` + n + e;
    });
  Oi[t > 1 ? `border` + e : e] = function (e, t, n, r, i) {
    var a, s;
    if (arguments.length < 4)
      return (
        (a = o.map(function (t) {
          return Ci(e, t, n);
        })),
        (s = a.join(` `)),
        s.split(a[0]).length === 5 ? a[0] : s
      );
    ((a = (r + ``).split(` `)),
      (s = {}),
      o.forEach(function (e, t) {
        return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
      }),
      e.init(t, s, i));
  };
});
var qi = {
  name: `css`,
  register: pi,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, r, i) {
    var a = this._props,
      o = e.style,
      s = n.vars.startAt,
      c,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w;
    for (m in (Ar || pi(),
      (this.styles = this.styles || si(e)),
      (C = this.styles.props),
      (this.tween = n),
      t))
      if (m !== `autoRound` && ((l = t[m]), !(qe[m] && Un(m, t, n, r, e, i)))) {
        if (
          ((f = typeof l),
            (p = Oi[m]),
            f === `function` && ((l = l.call(n, r, e, i)), (f = typeof l)),
            f === `string` && ~l.indexOf(`random(`) && (l = on(l)),
            p)
        )
          p(this, e, m, l, n) && (S = 1);
        else if (m.substr(0, 2) === `--`)
          ((c = (getComputedStyle(e).getPropertyValue(m) + ``).trim()),
            (l += ``),
            (bn.lastIndex = 0),
            bn.test(c) ||
            ((h = Y(c)),
              (g = Y(l)),
              g ? h !== g && (c = Si(e, m, c, g) + g) : h && (l += h)),
            this.add(o, `setProperty`, c, l, r, i, 0, 0, m),
            a.push(m),
            C.push(m, 0, o[m]));
        else if (f !== `undefined`) {
          if (
            (s && m in s
              ? ((c = typeof s[m] == `function` ? s[m].call(n, r, e, i) : s[m]),
                V(c) && ~c.indexOf(`random(`) && (c = on(c)),
                Y(c + ``) ||
                c === `auto` ||
                (c += L.units[m] || Y(Ci(e, m)) || ``),
                (c + ``).charAt(1) === `=` && (c = Ci(e, m)))
              : (c = Ci(e, m)),
              (d = parseFloat(c)),
              (_ = f === `string` && l.charAt(1) === `=` && l.substr(0, 2)),
              _ && (l = l.substr(2)),
              (u = parseFloat(l)),
              m in Ur &&
              (m === `autoAlpha` &&
                (d === 1 && Ci(e, `visibility`) === `hidden` && u && (d = 0),
                  C.push(`visibility`, 0, o.visibility),
                  yi(
                    this,
                    o,
                    `visibility`,
                    d ? `inherit` : `hidden`,
                    u ? `inherit` : `hidden`,
                    !u,
                  )),
                m !== `scale` &&
                m !== `transform` &&
                ((m = Ur[m]), ~m.indexOf(`,`) && (m = m.split(`,`)[0]))),
              (v = m in Fr),
              v)
          ) {
            if (
              (this.styles.save(m),
                (w = l),
                f === `string` && l.substring(0, 6) === `var(--`)
            ) {
              if (
                ((l = ui(e, l.substring(4, l.indexOf(`)`)))),
                  l.substring(0, 5) === `calc(`)
              ) {
                var T = e.style.perspective;
                ((e.style.perspective = l),
                  (l = ui(e, `perspective`)),
                  T ? (e.style.perspective = T) : vi(e, `perspective`));
              }
              u = parseFloat(l);
            }
            if (
              (y ||
                ((b = e._gsap),
                  (b.renderTransform && !t.parseTransform) ||
                  Fi(e, t.parseTransform),
                  (x = t.smoothOrigin !== !1 && b.smooth),
                  (y = this._pt =
                    new fr(this._pt, o, $, 0, 1, b.renderTransform, b, 0, -1)),
                  (y.dep = 1)),
                m === `scale`)
            )
              ((this._pt = new fr(
                this._pt,
                b,
                `scaleY`,
                b.scaleY,
                (_ ? tt(b.scaleY, _ + u) : u) - b.scaleY || 0,
                Wr,
              )),
                (this._pt.u = 0),
                a.push(`scaleY`, m),
                (m += `X`));
            else if (m === `transformOrigin`) {
              (C.push(ri, 0, o[ri]),
                (l = Ei(l)),
                b.svg
                  ? Pi(e, l, 0, x, 0, this)
                  : ((g = parseFloat(l.split(` `)[2]) || 0),
                    g !== b.zOrigin && yi(this, b, `zOrigin`, b.zOrigin, g),
                    yi(this, o, m, Ii(c), Ii(l))));
              continue;
            } else if (m === `svgOrigin`) {
              Pi(e, l, 1, x, 0, this);
              continue;
            } else if (m in Ai) {
              Wi(this, b, m, d, _ ? tt(d, _ + l) : l);
              continue;
            } else if (m === `smoothOrigin`) {
              yi(this, b, `smooth`, b.smooth, l);
              continue;
            } else if (m === `force3D`) {
              b[m] = l;
              continue;
            } else if (m === `transform`) {
              Ki(this, l, e);
              continue;
            }
          } else m in o || (m = fi(m) || m);
          if (v || ((u || u === 0) && (d || d === 0) && !Hr.test(l) && m in o))
            ((h = (c + ``).substr((d + ``).length)),
              (u ||= 0),
              (g = Y(l) || (m in L.units ? L.units[m] : h)),
              h !== g && (d = Si(e, m, c, g)),
              (this._pt = new fr(
                this._pt,
                v ? b : o,
                m,
                d,
                (_ ? tt(d, _ + u) : u) - d,
                !v && (g === `px` || m === `zIndex`) && t.autoRound !== !1
                  ? Jr
                  : Wr,
              )),
              (this._pt.u = g || 0),
              v && w !== l
                ? ((this._pt.b = c), (this._pt.e = w), (this._pt.r = qr))
                : h !== g &&
                g !== `%` &&
                ((this._pt.b = c), (this._pt.r = Kr)));
          else if (m in o) wi.call(this, e, m, c, _ ? _ + l : l);
          else if (m in e) this.add(e, m, c || e[m], _ ? _ + l : l, r, i);
          else if (m !== `parseTransform`) {
            Ie(m, l);
            continue;
          }
          (v ||
            (m in o
              ? C.push(m, 0, o[m])
              : typeof e[m] == `function`
                ? C.push(m, 2, e[m]())
                : C.push(m, 1, c || e[m])),
            a.push(m));
        }
      }
    S && dr(this);
  },
  render: function (e, t) {
    if (t.tween._time || !Nr())
      for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
    else t.styles.revert();
  },
  get: Ci,
  aliases: Ur,
  getSetter: function (e, t, n) {
    var r = Ur[t];
    return (
      r && r.indexOf(`,`) < 0 && (t = r),
      t in Fr && t !== ri && (e._gsap.x || Ci(e, `x`))
        ? n && Mr === n
          ? t === `scale`
            ? ei
            : $r
          : (Mr = n || {}) && (t === `scale` ? ti : ni)
        : e.style && !he(e.style[t])
          ? Zr
          : ~t.indexOf(`-`)
            ? Qr
            : rr(e, t)
    );
  },
  core: { _removeProperty: vi, _getMatrix: Ni },
};
((Er.utils.checkPrefix = fi),
  (Er.core.getStyleSaver = si),
  (function (e, t, n, r) {
    var i = K(e + `,` + t + `,` + n, function (e) {
      Fr[e] = 1;
    });
    (K(t, function (e) {
      ((L.units[e] = `deg`), (Ai[e] = 1));
    }),
      (Ur[i[13]] = e + `,` + t),
      K(r, function (e) {
        var t = e.split(`:`);
        Ur[t[1]] = i[t[0]];
      }));
  })(
    `x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,
    `rotation,rotationX,rotationY,skewX,skewY`,
    `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,
    `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`,
  ),
  K(
    `x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,
    function (e) {
      L.units[e] = `px`;
    },
  ),
  Er.registerPlugin(qi));
var Ji = Er.registerPlugin(qi) || Er;
Ji.core.Tween;
function Yi({
  className: e = ``,
  images: t = [],
  containerWidth: n = 400,
  containerHeight: r = 400,
  animationDelay: i = 0.5,
  animationStagger: a = 0.06,
  easeType: o = `elastic.out(1, 0.8)`,
  transformStyles: s = [
    `rotate(12deg) translate(-250px)`,
    `rotate(6deg) translate(-125px)`,
    `rotate(-3deg)`,
    `rotate(-12deg) translate(125px)`,
    `rotate(4deg) translate(250px)`,
  ],
  enableHover: c = !0,
  children: l,
}) {
  let u = (0, F.useRef)(null),
    [d, f] = (0, F.useState)(null),
    p = (e) => {
      window.innerWidth < 640 && (d === e ? (f(null), v()) : (f(e), _(e, !0)));
    };
  (0, F.useEffect)(() => {
    let e = Ji.context(() => {
      Ji.fromTo(
        `.card`,
        { scale: 0 },
        { scale: 1, stagger: a, ease: o, delay: i },
      );
    }, u);
    return () => e.revert();
  }, [a, o, i]);
  let m = (e) =>
    /rotate\([\s\S]*?\)/.test(e)
      ? e.replace(/rotate\([\s\S]*?\)/, `rotate(0deg)`)
      : e === `none`
        ? `rotate(0deg)`
        : `${e} rotate(0deg)`.trim(),
    h = (e) => {
      let t = e;
      return (
        (t = t.replace(/rotate\([^)]*\)/g, `rotate(0deg)`)),
        (t = t.replace(/translate\([^)]*\)/g, `translate(0px)`)),
        t
      );
    },
    g = (e, t) => {
      let n = /translate\(([-0-9.]+)px\)/,
        r = e.match(n);
      if (r) {
        let i = parseFloat(r[1]) + t;
        return e.replace(n, `translate(${i}px)`);
      } else
        return e === `none` ? `translate(${t}px)` : `${e} translate(${t}px)`;
    },
    _ = (e, n = !1) => {
      if (!c || !u.current) return;
      let r = Ji.utils.selector(u),
        i = l ? l.length : t.length;
      for (let t = 0; t < i; t++) {
        let i = r(`.card-${t}`);
        Ji.killTweensOf(i);
        let a = s[t] || `none`;
        if (t === e) {
          let e = n || window.innerWidth < 640 ? h(a) : m(a);
          Ji.to(i, {
            transform: e,
            zIndex: 10,
            duration: 0.4,
            ease: `back.out(1.4)`,
            overwrite: `auto`,
          });
        } else {
          let n = g(
            a,
            t < e
              ? window.innerWidth < 640
                ? -70
                : -200
              : window.innerWidth < 640
                ? 70
                : 200,
          ),
            r = Math.abs(e - t) * 0.05;
          Ji.to(i, {
            transform: n,
            zIndex: 1,
            duration: 0.4,
            ease: `back.out(1.4)`,
            delay: r,
            overwrite: `auto`,
          });
        }
      }
    },
    v = () => {
      if (!c || !u.current) return;
      let e = Ji.utils.selector(u),
        n = l ? l.length : t.length;
      for (let t = 0; t < n; t++) {
        let n = e(`.card-${t}`);
        Ji.killTweensOf(n);
        let r = s[t] || `none`;
        Ji.to(n, {
          transform: r,
          zIndex: t,
          duration: 0.4,
          ease: `back.out(1.4)`,
          overwrite: `auto`,
        });
      }
    };
  return (0, P.jsx)(`div`, {
    className: `bounceCardsContainer ${e}`,
    ref: u,
    style: { position: `relative`, width: n, height: r, overflow: `visible` },
    children: l
      ? l.map((e, t) =>
        (0, P.jsx)(
          `div`,
          {
            className: `card card-${t}`,
            style: { transform: s[t] ?? `none`, zIndex: t },
            onMouseEnter: () => _(t),
            onMouseLeave: v,
            onClick: () => p(t),
            children: e,
          },
          t,
        ),
      )
      : t.map((e, t) =>
        (0, P.jsx)(
          `div`,
          {
            className: `card card-${t}`,
            style: { transform: s[t] ?? `none`, zIndex: t },
            onMouseEnter: () => _(t),
            onMouseLeave: v,
            onClick: () => p(t),
            children: (0, P.jsx)(`img`, {
              className: `image`,
              src: e,
              alt: `card-${t}`,
            }),
          },
          t,
        ),
      ),
  });
}
function Xi({
  to: e,
  from: t = 0,
  duration: n = 2,
  delay: r = 0,
  className: s = ``,
  suffix: c = ``,
}) {
  let l = o(t),
    u = i(l, { damping: 30, stiffness: 100 }),
    d = (0, F.useRef)(null),
    f = a(d, { once: !0, margin: `-100px` });
  return (
    (0, F.useEffect)(() => {
      if (f) {
        let t = setTimeout(() => {
          let t = Zi(l, e, n);
          return () => t.stop();
        }, r * 1e3);
        return () => clearTimeout(t);
      }
    }, [f, e, n, r, l]),
    (0, F.useEffect)(
      () =>
        u.on(`change`, (e) => {
          d.current && (d.current.textContent = Math.floor(e).toString() + c);
        }),
      [u, c],
    ),
    (0, P.jsxs)(`span`, { ref: d, className: s, children: [t, c] })
  );
}
function Zi(e, t, n) {
  let r = e.get(),
    i = performance.now(),
    a,
    o = (s) => {
      let c = (s - i) / 1e3,
        l = Math.min(c / n, 1),
        u = l * (2 - l);
      (e.set(r + (t - r) * u), l < 1 && (a = requestAnimationFrame(o)));
    };
  return (
    (a = requestAnimationFrame(o)),
    { stop: () => cancelAnimationFrame(a) }
  );
}
var Qi = () => {
  let { destinations: e, homeContent: n, contactContent: r } = u(),
    { toast: i } = C(),
    [a, o] = (0, F.useState)(1),
    [s, c] = (0, F.useState)(!1),
    [x, T] = (0, F.useState)(!1),
    [j, N] = (0, F.useState)(null),
    [te, ne] = (0, F.useState)(0);
  (0, F.useEffect)(() => {
    let e = setInterval(() => {
      ne((e) => (e + 1) % 15);
    }, 2e3);
    return () => clearInterval(e);
  }, []);
  (0, F.useEffect)(() => {
    window.scrollTo(0, 0);
  }, []);
  let [I, ie] = (0, F.useState)({
    destination: ``,
    travelMonth: ``,
    duration: ``,
    numPersons: ``,
    name: ``,
    email: ``,
    whatsapp: ``,
    language: ``,
  }),
    L = e.filter((e) => e.featured),
    ae = (e) => {
      let { name: t, value: n } = e.target;
      ie((e) => ({ ...e, [t]: n }));
    },
    oe = (e, t) => {
      ie((n) => ({ ...n, [e]: t }));
    },
    R = () => {
      if (!I.destination || !I.travelMonth || !I.duration || !I.numPersons) {
        i({
          title: `Missing Fields`,
          description: `Please fill in all fields to proceed.`,
          variant: `destructive`,
        });
        return;
      }
      o(2);
    },
    z = async (e) => {
      if (
        (e.preventDefault(), !I.name || !I.email || !I.whatsapp || !I.language)
      ) {
        i({
          title: `Missing Fields`,
          description: `Please fill in all fields to submit.`,
          variant: `destructive`,
        });
        return;
      }
      c(!0);
      let t = `*New Quote Request - Planet Life*%0A%0A*Name:* ${I.name}%0A*WhatsApp:* ${I.whatsapp}%0A*Email:* ${I.email}%0A*Destination:* ${I.destination}%0A*Month:* ${I.travelMonth}%0A*Duration:* ${I.duration}%0A*Persons:* ${I.numPersons}%0A*Preferred Language:* ${I.language}`,
        n = r.phone.replace(/[^0-9]/g, ``),
        a = `https://wa.me/${n.length === 10 ? `91${n}` : n}?text=${t}`;
      (await new Promise((e) => setTimeout(e, 800)),
        i({
          title: `Redirecting to Travel Desk...`,
          description: `Sending your request to our travel experts.`,
        }),
        window.open(a, `_blank`),
        c(!1),
        o(1),
        ie({
          destination: ``,
          travelMonth: ``,
          duration: ``,
          numPersons: ``,
          name: ``,
          email: ``,
          whatsapp: ``,
          language: ``,
        }));
    };
  return (0, P.jsxs)(`div`, {
    className: `min-h-screen bg-white`,
    children: [
      (0, P.jsxs)(A, {
        children: [
          (0, P.jsx)(`title`, {
            children: `Planet Life | Customized International Adventures`,
          }),
          (0, P.jsx)(`meta`, {
            name: `description`,
            content: `Experience the epitome of luxury and adventure with our customized international journeys. Let our experts plan your perfect trip.`,
          }),
          (0, P.jsx)(`meta`, {
            property: `og:title`,
            content: `Planet Life | Customized International Adventures`,
          }),
          (0, P.jsx)(`meta`, {
            property: `og:description`,
            content: `Experience the epitome of luxury and adventure with our customized international journeys.`,
          }),
          (0, P.jsx)(`meta`, { property: `og:type`, content: `website` }),
          (0, P.jsx)(`meta`, {
            name: `twitter:card`,
            content: `summary_large_image`,
          }),
        ],
      }),
      (0, P.jsxs)(`section`, {
        className: `relative min-h-screen w-full overflow-hidden flex flex-col`,
        children: [
          (0, P.jsx)(`video`, {
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            preload: `metadata`,
            poster: `/hero-bg.jpg`,
            className: `absolute inset-0 w-full h-full object-cover`,
            children: (0, P.jsx)(`source`, {
              src: S(n.heroVideo || `hero-video.mp4`),
              type: `video/mp4`,
            }),
          }),
          (0, P.jsx)(`div`, { className: `absolute inset-0 bg-black/50` }),
          (0, P.jsxs)(`div`, {
            className: `relative container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col lg:flex-row items-center justify-center lg:justify-center pt-24 mobile:pt-28 lg:pt-32 pb-10 mobile:pb-14 z-10 gap-8 lg:gap-16 xl:gap-24`,
            children: [
              (0, P.jsx)(`div`, {
                className: `text-white w-full lg:w-[55%] lg:max-w-[620px] z-10 text-center lg:text-left flex flex-col items-center lg:items-start justify-center`,
                children: (0, P.jsxs)(M, {
                  children: [
                    (0, P.jsx)(`h1`, {
                      className: `text-2xl xs:text-3xl mobile:text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 lg:mb-6 pt-[10px] leading-[1.1] drop-shadow-2xl text-white uppercase tracking-tight`,
                      children: n.heroTitle,
                    }),
                    (0, P.jsx)(`p`, {
                      className: `text-sm mobile:text-base sm:text-lg md:text-xl lg:text-2xl mb-8 lg:mb-10 pt-[10px] text-white/90 font-medium max-w-lg drop-shadow-md leading-relaxed mx-auto lg:mx-0`,
                      children: n.heroSubtitle,
                    }),
                    (0, P.jsx)(l, {
                      asChild: !0,
                      size: `lg`,
                      className: `inline-flex bg-red-600 hover:bg-black text-white rounded-full px-5 mobile:px-6 sm:px-8 py-4 mobile:py-5 sm:py-6 text-xs mobile:text-sm sm:text-base shadow-xl transition-all hover:scale-105 font-extrabold uppercase mb-6 mobile:mb-8 lg:mb-0`,
                      children: (0, P.jsxs)(t, {
                        to: `/packages?lead=true`,
                        children: [
                          `Let's Explore `,
                          (0, P.jsx)(p, {
                            className: `ml-2 h-4 w-4 sm:h-5 sm:w-5`,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, P.jsx)(`div`, {
                className: `hidden lg:flex lg:w-[340px] xl:w-[380px] flex-shrink-0`,
                children: (0, P.jsxs)(`div`, {
                  className: `bg-white/10 backdrop-blur-xl rounded-2xl p-5 xl:p-6 border border-white/20 shadow-2xl w-full`,
                  children: [
                    (0, P.jsxs)(`div`, {
                      className: `text-center mb-6`,
                      children: [
                        (0, P.jsx)(`h3`, {
                          className: `text-white text-xl sm:text-2xl font-bold font-heading mb-1`,
                          children: `Plan Your Trip`,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `text-white/70 text-xs sm:text-sm`,
                          children: `Tell us your preferences & we\u2019ll craft your dream journey`,
                        }),
                      ],
                    }),
                    (0, P.jsxs)(`form`, {
                      id: `heroLeadForm`,
                      onSubmit: function (ev) {
                        ev.preventDefault();
                        var fd = new FormData(ev.target);
                        var dest = fd.get(`destination`) || `Not specified`;
                        var trip = fd.get(`tripType`) || `Not specified`;
                        var name = fd.get(`name`) || ``;
                        var phone = fd.get(`phone`) || ``;
                        var month = fd.get(`travelMonth`) || `Not specified`;
                        var msg =
                          `*New Trip Inquiry*%0A%0A*Name:* ` +
                          encodeURIComponent(name) +
                          `%0A*Phone:* ` +
                          encodeURIComponent(phone) +
                          `%0A*Destination:* ` +
                          encodeURIComponent(dest) +
                          `%0A*Trip Type:* ` +
                          encodeURIComponent(trip) +
                          `%0A*Travel Month:* ` +
                          encodeURIComponent(month);
                        window.open(
                          `https://wa.me/919994553297?text=` + msg,
                          `_blank`,
                        );
                      },
                      className: `space-y-4`,
                      children: [
                        (0, P.jsx)(`div`, {
                          children: (0, P.jsxs)(`select`, {
                            name: `destination`,
                            className: `w-full bg-white/10 border border-white/30 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-white/60 focus:ring-1 focus:ring-white/30 transition-all appearance-none cursor-pointer`,
                            style: {
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E")`,
                              backgroundRepeat: `no-repeat`,
                              backgroundPosition: `right 12px center`,
                            },
                            children: [
                              (0, P.jsx)(`option`, {
                                value: ``,
                                disabled: !0,
                                selected: !0,
                                className: `text-gray-900 bg-white`,
                                children: `Select Destination`,
                              }),
                              ...[...(e || [])]
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((t) =>
                                  (0, P.jsx)(
                                    `option`,
                                    {
                                      value: t.name,
                                      className: `text-gray-900 bg-white`,
                                      children: t.name,
                                    },
                                    t.id,
                                  ),
                                ),
                              (0, P.jsx)(`option`, {
                                value: `Other`,
                                className: `text-gray-900 bg-white`,
                                children: `Other`,
                              }),
                            ],
                          }),
                        }),
                        (0, P.jsx)(`div`, {
                          children: (0, P.jsxs)(`select`, {
                            name: `tripType`,
                            className: `w-full bg-white/10 border border-white/30 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-white/60 focus:ring-1 focus:ring-white/30 transition-all appearance-none cursor-pointer`,
                            style: {
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E")`,
                              backgroundRepeat: `no-repeat`,
                              backgroundPosition: `right 12px center`,
                            },
                            children: [
                              (0, P.jsx)(`option`, {
                                value: ``,
                                disabled: !0,
                                selected: !0,
                                className: `text-gray-900 bg-white`,
                                children: `Select Trip Type`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `Family`,
                                className: `text-gray-900 bg-white`,
                                children: `Family`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `Couple`,
                                className: `text-gray-900 bg-white`,
                                children: `Couple`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `Corporate`,
                                className: `text-gray-900 bg-white`,
                                children: `Corporate`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `Friends`,
                                className: `text-gray-900 bg-white`,
                                children: `Friends`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `Solo`,
                                className: `text-gray-900 bg-white`,
                                children: `Solo`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `Honeymoon`,
                                className: `text-gray-900 bg-white`,
                                children: `Honeymoon`,
                              }),
                            ],
                          }),
                        }),
                        (0, P.jsx)(`div`, {
                          children: (0, P.jsx)(`input`, {
                            name: `name`,
                            type: `text`,
                            required: !0,
                            placeholder: `Your Name`,
                            className: `w-full bg-white/10 border border-white/30 text-white placeholder-white/50 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-white/60 focus:ring-1 focus:ring-white/30 transition-all`,
                          }),
                        }),
                        (0, P.jsx)(`div`, {
                          children: (0, P.jsx)(`input`, {
                            name: `phone`,
                            type: `tel`,
                            required: !0,
                            placeholder: `WhatsApp Number`,
                            className: `w-full bg-white/10 border border-white/30 text-white placeholder-white/50 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-white/60 focus:ring-1 focus:ring-white/30 transition-all`,
                          }),
                        }),
                        (0, P.jsx)(`div`, {
                          children: (0, P.jsxs)(`select`, {
                            name: `travelMonth`,
                            className: `w-full bg-white/10 border border-white/30 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-white/60 focus:ring-1 focus:ring-white/30 transition-all appearance-none cursor-pointer`,
                            style: {
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='white' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E")`,
                              backgroundRepeat: `no-repeat`,
                              backgroundPosition: `right 12px center`,
                            },
                            children: [
                              (0, P.jsx)(`option`, {
                                value: ``,
                                disabled: !0,
                                selected: !0,
                                className: `text-gray-900 bg-white`,
                                children: `Travel Month`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `January`,
                                className: `text-gray-900 bg-white`,
                                children: `January`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `February`,
                                className: `text-gray-900 bg-white`,
                                children: `February`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `March`,
                                className: `text-gray-900 bg-white`,
                                children: `March`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `April`,
                                className: `text-gray-900 bg-white`,
                                children: `April`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `May`,
                                className: `text-gray-900 bg-white`,
                                children: `May`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `June`,
                                className: `text-gray-900 bg-white`,
                                children: `June`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `July`,
                                className: `text-gray-900 bg-white`,
                                children: `July`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `August`,
                                className: `text-gray-900 bg-white`,
                                children: `August`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `September`,
                                className: `text-gray-900 bg-white`,
                                children: `September`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `October`,
                                className: `text-gray-900 bg-white`,
                                children: `October`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `November`,
                                className: `text-gray-900 bg-white`,
                                children: `November`,
                              }),
                              (0, P.jsx)(`option`, {
                                value: `December`,
                                className: `text-gray-900 bg-white`,
                                children: `December`,
                              }),
                            ],
                          }),
                        }),
                        (0, P.jsx)(`button`, {
                          type: `submit`,
                          className: `w-full bg-red-600 hover:bg-red-700 text-white font-black py-8 rounded-xl uppercase text-base tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]`,
                          children: `Submit Inquiry`,
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `flex items-center justify-center gap-4 mt-2 text-white/50 text-[10px] uppercase tracking-widest`,
                          children: [
                            (0, P.jsx)(`span`, { children: `Instant Reply` }),
                            (0, P.jsx)(`span`, { children: `\u00B7` }),
                            (0, P.jsx)(`span`, { children: `24/7 Support` }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, P.jsx)(`div`, {
            className: `relative bg-white border-t border-gray-100 shadow-2xl py-4 mobile:py-6 md:py-8 z-20`,
            children: (0, P.jsx)(`div`, {
              className: `container mx-auto px-3 mobile:px-4`,
              children: (0, P.jsxs)(`div`, {
                className: `grid grid-cols-2 md:grid-cols-4 gap-4 mobile:gap-5 md:gap-6`,
                children: [
                  (0, P.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, P.jsx)(`div`, {
                        className: `flex-shrink-0 bg-red-50 p-1.5 rounded-full`,
                        children: (0, P.jsx)(v, {
                          className: `w-4 h-4 text-red-600 fill-red-600`,
                        }),
                      }),
                      (0, P.jsxs)(`div`, {
                        className: `flex flex-col min-w-0`,
                        children: [
                          (0, P.jsx)(`p`, {
                            className: `font-extrabold text-[10px] mobile:text-xs text-black font-sans uppercase truncate`,
                            children: `4.9/5 Ratings`,
                          }),
                          (0, P.jsx)(`p`, {
                            className: `text-[7px] mobile:text-[8px] text-black/50 font-black uppercase tracking-tighter truncate`,
                            children: `On Google Reviews`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, P.jsx)(`div`, {
                        className: `flex-shrink-0 bg-red-50 p-1.5 rounded-full`,
                        children: (0, P.jsx)(g, {
                          className: `w-4 h-4 text-red-600`,
                        }),
                      }),
                      (0, P.jsxs)(`div`, {
                        className: `flex flex-col min-w-0`,
                        children: [
                          (0, P.jsx)(`p`, {
                            className: `font-extrabold text-[10px] mobile:text-xs text-black font-sans uppercase truncate`,
                            children: `24/7 Support`,
                          }),
                          (0, P.jsx)(`p`, {
                            className: `text-[7px] mobile:text-[8px] text-black/50 font-black uppercase tracking-tighter truncate`,
                            children: `Trip Assistance`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, P.jsx)(`div`, {
                        className: `flex-shrink-0 bg-red-50 p-1.5 rounded-full`,
                        children: (0, P.jsx)(_, {
                          className: `w-4 h-4 text-red-600`,
                        }),
                      }),
                      (0, P.jsxs)(`div`, {
                        className: `flex flex-col min-w-0`,
                        children: [
                          (0, P.jsx)(`p`, {
                            className: `font-extrabold text-[10px] mobile:text-xs text-black font-sans uppercase truncate`,
                            children: `100% Secure`,
                          }),
                          (0, P.jsx)(`p`, {
                            className: `text-[7px] mobile:text-[8px] text-black/50 font-black uppercase tracking-tighter truncate`,
                            children: `Payment Protection`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, P.jsx)(`div`, {
                        className: `flex-shrink-0 bg-red-50 p-1.5 rounded-full`,
                        children: (0, P.jsx)(f, {
                          className: `w-4 h-4 text-red-600`,
                        }),
                      }),
                      (0, P.jsxs)(`div`, {
                        className: `flex flex-col min-w-0`,
                        children: [
                          (0, P.jsx)(`p`, {
                            className: `font-extrabold text-[10px] mobile:text-xs text-black font-sans uppercase truncate`,
                            children: `Customized`,
                          }),
                          (0, P.jsx)(`p`, {
                            className: `text-[7px] mobile:text-[8px] text-black/50 font-black uppercase tracking-tighter truncate`,
                            children: `Tailor-made Trips`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      (0, P.jsxs)(`section`, {
        className: `py-12 mobile:py-16 md:py-24 bg-gray-50 overflow-hidden`,
        children: [
          (0, P.jsx)(`div`, {
            className: `container mx-auto px-3 mobile:px-4 mb-8 mobile:mb-12 md:mb-16`,
            children: (0, P.jsx)(M, {
              width: `100%`,
              children: (0, P.jsxs)(`div`, {
                className: `w-full flex flex-col items-center text-center`,
                children: [
                  (0, P.jsxs)(`div`, {
                    className: `flex items-center gap-2 mobile:gap-3 sm:gap-4 bg-white px-4 mobile:px-6 sm:px-10 py-3 mobile:py-4 sm:py-5 rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-black/5 mb-8 mobile:mb-10 md:mb-14 transition-all duration-500 mx-auto group`,
                    children: [
                      (0, P.jsx)(`div`, {
                        className: `flex text-yellow-400`,
                        children: [...[, , , , ,]].map((e, t) =>
                          (0, P.jsx)(
                            v,
                            { className: `w-5 h-5 fill-current` },
                            t,
                          ),
                        ),
                      }),
                      (0, P.jsx)(`div`, {
                        className: `h-6 w-px bg-gray-100 mx-2`,
                      }),
                      (0, P.jsxs)(`div`, {
                        className: `flex items-center gap-2 sm:gap-3`,
                        children: [
                          (0, P.jsxs)(`svg`, {
                            width: `24`,
                            height: `24`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            xmlns: `http://www.w3.org/2000/svg`,
                            className: `w-5 h-5 sm:w-6 sm:h-6`,
                            children: [
                              (0, P.jsx)(`path`, {
                                d: `M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,
                                fill: `#4285F4`,
                              }),
                              (0, P.jsx)(`path`, {
                                d: `M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,
                                fill: `#34A853`,
                              }),
                              (0, P.jsx)(`path`, {
                                d: `M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z`,
                                fill: `#FBBC05`,
                              }),
                              (0, P.jsx)(`path`, {
                                d: `M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z`,
                                fill: `#EA4335`,
                              }),
                            ],
                          }),
                          (0, P.jsx)(`span`, {
                            className: `text-foreground font-bold text-sm mobile:text-base sm:text-lg md:text-xl tracking-tight`,
                            children: `4.9/5 Rating`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, P.jsxs)(`h2`, {
                    className: `text-2xl xs:text-3xl mobile:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-foreground mb-6 mobile:mb-8 md:mb-10 uppercase tracking-tighter leading-[0.85] max-w-5xl mx-auto`,
                    children: [
                      `What Our `,
                      (0, P.jsx)(`span`, {
                        className: `text-red-600`,
                        children: `Travelers`,
                      }),
                      ` `,
                      (0, P.jsx)(`br`, { className: `hidden sm:block` }),
                      ` Say on`,
                      ` `,
                      (0, P.jsxs)(`span`, {
                        className: `normal-case`,
                        children: [
                          (0, P.jsx)(`span`, {
                            className: `text-[#4285F4]`,
                            children: `G`,
                          }),
                          (0, P.jsx)(`span`, {
                            className: `text-[#EA4335]`,
                            children: `o`,
                          }),
                          (0, P.jsx)(`span`, {
                            className: `text-[#FBBC05]`,
                            children: `o`,
                          }),
                          (0, P.jsx)(`span`, {
                            className: `text-[#4285F4]`,
                            children: `g`,
                          }),
                          (0, P.jsx)(`span`, {
                            className: `text-[#34A853]`,
                            children: `l`,
                          }),
                          (0, P.jsx)(`span`, {
                            className: `text-[#EA4335]`,
                            children: `e`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `flex items-center justify-center gap-8 w-full max-w-md mx-auto`,
                    children: [
                      (0, P.jsx)(`div`, {
                        className: `h-px flex-grow bg-primary/20`,
                      }),
                      (0, P.jsx)(`p`, {
                        className: `text-primary font-bold uppercase tracking-[0.4em] text-[11px] whitespace-nowrap`,
                        children: `Trusted Excellence`,
                      }),
                      (0, P.jsx)(`div`, {
                        className: `h-px flex-grow bg-primary/20`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          (0, P.jsx)(`div`, {
            className: `relative space-y-6 cursor-pointer overflow-hidden w-full ${x ? `marquee-paused` : ``}`,
            onClick: () => T(!x),
            children: (() => {
              let e = n.reviews || [],
                t = Math.ceil(e.length / 2),
                r = e.slice(0, t),
                i = e.slice(t),
                a = (e) => {
                  if (e.length === 0) return [];
                  let t = [...e];
                  for (; t.length < 15;) t = [...t, ...e];
                  return t;
                },
                o = a(r),
                s = a(i);
              return (0, P.jsxs)(P.Fragment, {
                children: [
                  (0, P.jsxs)(`div`, {
                    className: `flex w-max animate-marquee whitespace-nowrap`,
                    style: { animationDuration: `80s` },
                    children: [
                      (0, P.jsx)(`div`, {
                        className: `flex gap-6 pr-6 flex-shrink-0`,
                        children: o.map((e, t) =>
                          (0, P.jsxs)(
                            `div`,
                            {
                              className: `inline-block w-[260px] mobile:w-[300px] sm:w-[350px] bg-white p-5 mobile:p-6 sm:p-8 rounded-2xl mobile:rounded-3xl shadow-xl border border-gray-100 flex-shrink-0`,
                              children: [
                                (0, P.jsx)(`div`, {
                                  className: `flex items-center gap-1 text-yellow-400 mb-4`,
                                  children: [...[, , , , ,]].map((e, t) =>
                                    (0, P.jsx)(
                                      v,
                                      { className: `w-4 h-4 fill-current` },
                                      t,
                                    ),
                                  ),
                                }),
                                (0, P.jsxs)(`p`, {
                                  className: `text-gray-700 font-medium mb-6 whitespace-normal line-clamp-3`,
                                  children: [`"`, e.text, `"`],
                                }),
                                (0, P.jsxs)(`div`, {
                                  className: `flex items-center gap-3`,
                                  children: [
                                    (0, P.jsx)(`div`, {
                                      className: `w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-extrabold uppercase`,
                                      children: e.name ? e.name[0] : `U`,
                                    }),
                                    (0, P.jsxs)(`div`, {
                                      children: [
                                        (0, P.jsx)(`p`, {
                                          className: `font-extrabold text-black uppercase text-sm`,
                                          children: e.name,
                                        }),
                                        (0, P.jsx)(`p`, {
                                          className: `text-[10px] text-gray-400 font-bold uppercase tracking-widest`,
                                          children: `Google Local Guide`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            `a-${t}`,
                          ),
                        ),
                      }),
                      (0, P.jsx)(`div`, {
                        className: `flex gap-6 pr-6 flex-shrink-0`,
                        children: o.map((e, t) =>
                          (0, P.jsxs)(
                            `div`,
                            {
                              className: `inline-block w-[260px] mobile:w-[300px] sm:w-[350px] bg-white p-5 mobile:p-6 sm:p-8 rounded-2xl mobile:rounded-3xl shadow-xl border border-gray-100 flex-shrink-0`,
                              children: [
                                (0, P.jsx)(`div`, {
                                  className: `flex items-center gap-1 text-yellow-400 mb-4`,
                                  children: [...[, , , , ,]].map((e, t) =>
                                    (0, P.jsx)(
                                      v,
                                      { className: `w-4 h-4 fill-current` },
                                      t,
                                    ),
                                  ),
                                }),
                                (0, P.jsxs)(`p`, {
                                  className: `text-gray-700 font-medium mb-6 whitespace-normal line-clamp-3`,
                                  children: [`"`, e.text, `"`],
                                }),
                                (0, P.jsxs)(`div`, {
                                  className: `flex items-center gap-3`,
                                  children: [
                                    (0, P.jsx)(`div`, {
                                      className: `w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-extrabold uppercase`,
                                      children: e.name ? e.name[0] : `U`,
                                    }),
                                    (0, P.jsxs)(`div`, {
                                      children: [
                                        (0, P.jsx)(`p`, {
                                          className: `font-extrabold text-black uppercase text-sm`,
                                          children: e.name,
                                        }),
                                        (0, P.jsx)(`p`, {
                                          className: `text-[10px] text-gray-400 font-bold uppercase tracking-widest`,
                                          children: `Google Local Guide`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            `b-${t}`,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `flex w-max animate-marquee-reverse whitespace-nowrap`,
                    style: { animationDuration: `80s` },
                    children: [
                      (0, P.jsx)(`div`, {
                        className: `flex gap-6 pr-6 flex-shrink-0`,
                        children: s.map((e, t) =>
                          (0, P.jsxs)(
                            `div`,
                            {
                              className: `inline-block w-[260px] mobile:w-[300px] sm:w-[350px] bg-white p-5 mobile:p-6 sm:p-8 rounded-2xl mobile:rounded-3xl shadow-xl border border-gray-100 flex-shrink-0`,
                              children: [
                                (0, P.jsx)(`div`, {
                                  className: `flex items-center gap-1 text-yellow-400 mb-4`,
                                  children: [...[, , , , ,]].map((e, t) =>
                                    (0, P.jsx)(
                                      v,
                                      { className: `w-4 h-4 fill-current` },
                                      t,
                                    ),
                                  ),
                                }),
                                (0, P.jsxs)(`p`, {
                                  className: `text-gray-700 font-medium mb-6 whitespace-normal line-clamp-3`,
                                  children: [`"`, e.text, `"`],
                                }),
                                (0, P.jsxs)(`div`, {
                                  className: `flex items-center gap-3`,
                                  children: [
                                    (0, P.jsx)(`div`, {
                                      className: `w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-extrabold uppercase`,
                                      children: e.name ? e.name[0] : `U`,
                                    }),
                                    (0, P.jsxs)(`div`, {
                                      children: [
                                        (0, P.jsx)(`p`, {
                                          className: `font-extrabold text-black uppercase text-sm`,
                                          children: e.name,
                                        }),
                                        (0, P.jsx)(`p`, {
                                          className: `text-[10px] text-gray-400 font-bold uppercase tracking-widest`,
                                          children: `Google Local Guide`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            `a-${t}`,
                          ),
                        ),
                      }),
                      (0, P.jsx)(`div`, {
                        className: `flex gap-6 pr-6 flex-shrink-0`,
                        children: s.map((e, t) =>
                          (0, P.jsxs)(
                            `div`,
                            {
                              className: `inline-block w-[260px] mobile:w-[300px] sm:w-[350px] bg-white p-5 mobile:p-6 sm:p-8 rounded-2xl mobile:rounded-3xl shadow-xl border border-gray-100 flex-shrink-0`,
                              children: [
                                (0, P.jsx)(`div`, {
                                  className: `flex items-center gap-1 text-yellow-400 mb-4`,
                                  children: [...[, , , , ,]].map((e, t) =>
                                    (0, P.jsx)(
                                      v,
                                      { className: `w-4 h-4 fill-current` },
                                      t,
                                    ),
                                  ),
                                }),
                                (0, P.jsxs)(`p`, {
                                  className: `text-gray-700 font-medium mb-6 whitespace-normal line-clamp-3`,
                                  children: [`"`, e.text, `"`],
                                }),
                                (0, P.jsxs)(`div`, {
                                  className: `flex items-center gap-3`,
                                  children: [
                                    (0, P.jsx)(`div`, {
                                      className: `w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-extrabold uppercase`,
                                      children: e.name ? e.name[0] : `U`,
                                    }),
                                    (0, P.jsxs)(`div`, {
                                      children: [
                                        (0, P.jsx)(`p`, {
                                          className: `font-extrabold text-black uppercase text-sm`,
                                          children: e.name,
                                        }),
                                        (0, P.jsx)(`p`, {
                                          className: `text-[10px] text-gray-400 font-bold uppercase tracking-widest`,
                                          children: `Google Local Guide`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            `b-${t}`,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              });
            })(),
          }),
          (0, P.jsx)(`div`, {
            className: `text-center mt-12`,
            children: (0, P.jsxs)(`a`, {
              href: `https://www.google.com/search?sca_esv=dc6fd344f330d302&sxsrf=ANbL-n5zNpmeznTGL4xiNvM06zRyYMJZQw:1777698875004&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWFby6vVy3rIBrwEGiZbtZejsCvQeB_s5YGcdL2uzybV-Z3nyGcskvStqakj4-_IFb8ORs1KzVcaQL9_H1DHg0jsz_at&q=Planet+Life+Reviews&sa=X&ved=2ahUKEwjy_div7JmUAxUpR_EDHW32IO8Q0bkNegQILhAH&biw=1536&bih=730&dpr=1.25`,
              target: `_blank`,
              rel: `noopener noreferrer`,
              className: `inline-flex items-center gap-2 bg-[#3a0909] text-white font-extrabold uppercase text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:scale-105 hover:bg-red-600 tracking-widest`,
              children: [
                `Read All 500+ Google Reviews `,
                (0, P.jsx)(p, { className: `w-4 h-4` }),
              ],
            }),
          }),
        ],
      }),
      (0, P.jsxs)(`section`, {
        id: `strangers`,
        className: `py-20 mobile:py-24 md:py-32 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-white/5`,
        children: [
          (0, P.jsx)(`div`, {
            className: `absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.15)_0%,_transparent_70%)]`,
          }),
          (0, P.jsxs)(`div`, {
            className: `container mx-auto px-4 relative z-10`,
            children: [
              (0, P.jsx)(`div`, {
                className: `flex justify-center w-full mb-8 mobile:mb-10 md:mb-12`,
                children: (0, P.jsx)(M, {
                  direction: `up`,
                  width: `100%`,
                  children: (0, P.jsxs)(`div`, {
                    className: `text-center max-w-4xl mx-auto`,
                    children: [
                      (0, P.jsx)(`span`, {
                        className: `text-red-600 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 block drop-shadow-lg`,
                        children: `Our Signature Experience`,
                      }),
                      (0, P.jsxs)(`h2`, {
                        className: `text-4xl mobile:text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-6 uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400`,
                        children: [
                          `Strangers Trips: `,
                          (0, P.jsx)(`br`, {}),
                          (0, P.jsx)(`span`, {
                            className: `text-red-600`,
                            children: `Travel Alone,`,
                          }),
                          ` Not Lonely`,
                        ],
                      }),
                      (0, P.jsxs)(`p`, {
                        className: `text-lg mobile:text-xl text-white/60 leading-relaxed font-medium max-w-2xl mx-auto`,
                        children: [
                          `Join our exclusive group adventures designed for solo travelers. `,
                          (0, P.jsx)(`br`, {
                            className: `hidden mobile:block`,
                          }),
                          `Start as strangers, return as a lifelong family.`,
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, P.jsxs)(`div`, {
                className: `flex flex-col items-center w-full overflow-visible`,
                children: [
                  (0, P.jsx)(`div`, {
                    className: `flex justify-center items-center h-[350px] mobile:h-[450px] md:h-[500px] relative overflow-visible w-full`,
                    children: (0, P.jsx)(M, {
                      direction: `up`,
                      delay: 0.2,
                      width: `100%`,
                      overflow: `visible`,
                      children: (0, P.jsx)(`div`, {
                        className: `flex justify-center items-center w-full overflow-visible`,
                        children: (() => {
                          let e = n.strangerTrips || [],
                            r = (e.length - 1) / 2,
                            i = e.map((e, t) => {
                              let n = t - r;
                              return `rotate(${n * 8}deg) translate(${n * 55}px)`;
                            }),
                            a = e.map((e, t) => {
                              let n = t - r;
                              return `rotate(${n * 8}deg) translate(${n * 150}px)`;
                            });
                          return (0, P.jsx)(Yi, {
                            containerWidth: window.innerWidth < 640 ? 240 : 700,
                            containerHeight:
                              window.innerWidth < 640 ? 300 : 500,
                            className: `z-10`,
                            enableHover: !0,
                            transformStyles: window.innerWidth < 640 ? i : a,
                            children: e.map((e, n) =>
                              (0, P.jsxs)(
                                `div`,
                                {
                                  className: `relative w-full h-full group/card`,
                                  children: [
                                    (0, P.jsx)(`img`, {
                                      src: S(e.image),
                                      alt: e.title,
                                      className: `w-full h-full object-cover`,
                                    }),
                                    (0, P.jsx)(`div`, {
                                      className: `absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent`,
                                    }),
                                    (0, P.jsxs)(`div`, {
                                      className: `absolute top-2 left-2 mobile:top-4 mobile:left-4 flex flex-wrap gap-1.5 items-center`,
                                      children: [
                                        (0, P.jsx)(`span`, {
                                          className: `bg-red-600 text-white text-[9px] mobile:text-[10px] font-black px-2 py-1 mobile:px-3 mobile:py-1.5 rounded-full uppercase tracking-widest shadow-lg`,
                                          children: e.month,
                                        }),
                                        e.status &&
                                        (0, P.jsx)(`span`, {
                                          className: `text-white text-[9px] mobile:text-[10px] font-black px-2 py-1 mobile:px-3 mobile:py-1.5 rounded-full uppercase tracking-widest shadow-lg ${e.status === `upcoming` ? `bg-emerald-600 border border-emerald-500/30` : `bg-neutral-600/80 border border-white/10 backdrop-blur-sm`}`,
                                          children: e.status,
                                        }),
                                      ],
                                    }),
                                    (0, P.jsxs)(`div`, {
                                      className: `absolute bottom-0 left-0 right-0 p-3 mobile:p-6 text-left`,
                                      children: [
                                        (0, P.jsx)(`h3`, {
                                          className: `text-sm mobile:text-xl md:text-2xl font-heading font-black uppercase tracking-tighter text-white mb-1 mobile:mb-2 leading-none`,
                                          children: e.title,
                                        }),
                                        (0, P.jsx)(`div`, {
                                          className: `flex items-center gap-4 mb-2 mobile:mb-4`,
                                          children: (0, P.jsxs)(`div`, {
                                            className: `flex items-center gap-1.5 text-white/70 text-[9px] mobile:text-[10px] font-bold uppercase`,
                                            children: [
                                              (0, P.jsx)(d, {
                                                className: `w-2.5 h-2.5 mobile:w-3 mobile:h-3 text-red-500`,
                                              }),
                                              ` `,
                                              e.date,
                                            ],
                                          }),
                                        }),
                                        (0, P.jsxs)(`div`, {
                                          className: `flex items-center justify-between border-t border-white/10 pt-2 mobile:pt-4`,
                                          children: [
                                            (0, P.jsx)(`div`, {
                                              children: (0, P.jsx)(`span`, {
                                                className: `text-[9px] mobile:text-[10px] font-black text-white/60 uppercase tracking-widest`,
                                                children: `Strangers Trip`,
                                              }),
                                            }),
                                            (0, P.jsx)(t, {
                                              to: e.link,
                                              className: `bg-red-600 p-1.5 mobile:p-2.5 rounded-full hover:scale-110 transition-transform shadow-lg`,
                                              children: (0, P.jsx)(p, {
                                                className: `w-3 h-3 mobile:w-4 mobile:h-4 text-white`,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.id || n,
                              ),
                            ),
                          });
                        })(),
                      }),
                    }),
                  }),
                  (0, P.jsx)(M, {
                    direction: `up`,
                    delay: 0.3,
                    width: `100%`,
                    children: (0, P.jsxs)(`div`, {
                      className: `flex flex-col items-center text-center max-w-3xl mx-auto mt-12 mobile:mt-16 md:mt-20`,
                      children: [
                        (0, P.jsxs)(`div`, {
                          className: `mb-12`,
                          children: [
                            (0, P.jsx)(`div`, {
                              className: `text-7xl mobile:text-8xl md:text-9xl font-heading font-black text-red-600 select-none mb-2 leading-none`,
                              children: (0, P.jsx)(Xi, {
                                to: 15,
                                suffix: `+`,
                                duration: 2.5,
                              }),
                            }),
                            (0, P.jsxs)(`div`, {
                              className: `space-y-1`,
                              children: [
                                (0, P.jsx)(`p`, {
                                  className: `text-xl mobile:text-2xl font-black text-white uppercase tracking-tight`,
                                  children: `Successfully Conducted`,
                                }),
                                (0, P.jsx)(`p`, {
                                  className: `text-white/40 font-bold uppercase text-[10px] mobile:text-xs tracking-[0.3em]`,
                                  children: `International Strangers Trips`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `flex flex-col sm:flex-row gap-6 w-full justify-center`,
                          children: [
                            (0, P.jsx)(l, {
                              asChild: !0,
                              size: `lg`,
                              className: `bg-red-600 hover:bg-white hover:text-red-600 text-white rounded-full px-12 py-8 font-black uppercase tracking-widest text-xs shadow-2xl transition-all hover:scale-105`,
                              children: (0, P.jsxs)(t, {
                                to: `/packages?lead=true`,
                                children: [
                                  `View All Packages `,
                                  (0, P.jsx)(p, { className: `ml-2 w-5 h-5` }),
                                ],
                              }),
                            }),
                            (0, P.jsx)(l, {
                              asChild: !0,
                              variant: `outline`,
                              size: `lg`,
                              className: `border-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-black rounded-full px-12 py-8 font-black uppercase tracking-widest text-xs transition-all backdrop-blur-sm`,
                              children: (0, P.jsx)(t, {
                                to: `/about`,
                                children: `Our Story`,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, P.jsx)(`section`, {
        className: `py-12 mobile:py-16 md:py-24 bg-gray-50`,
        children: (0, P.jsxs)(`div`, {
          className: `container mx-auto px-4`,
          children: [
            (0, P.jsxs)(`div`, {
              className: `text-center mb-10 mobile:mb-14 md:mb-20 max-w-3xl mx-auto`,
              children: [
                (0, P.jsx)(`span`, {
                  className: `text-primary font-bold tracking-[0.2em] mobile:tracking-[0.3em] uppercase text-[10px] mobile:text-xs mb-3 mobile:mb-4 block`,
                  children: `World-Class Experiences`,
                }),
                (0, P.jsx)(`h2`, {
                  className: `text-2xl xs:text-3xl mobile:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4 mobile:mb-6 uppercase tracking-tight`,
                  children: (() => {
                    let e = n.destinationsTitle || `Trending Destinations`,
                      t = e.split(` `);
                    if (t.length > 1) {
                      let e = t.pop();
                      return (0, P.jsxs)(P.Fragment, {
                        children: [
                          t.join(` `),
                          ` `,
                          (0, P.jsx)(`span`, {
                            className: `text-red-600`,
                            children: e,
                          }),
                        ],
                      });
                    }
                    return e;
                  })(),
                }),
                (0, P.jsx)(`p`, {
                  className: `text-lg text-muted-foreground mb-10 leading-relaxed`,
                  children:
                    n.destinationsSubtitle ||
                    `Explore our most popular international destinations, handpicked for your perfect vacation.`,
                }),
                (0, P.jsx)(`div`, {
                  className: `w-20 h-1 bg-primary mx-auto rounded-full`,
                }),
              ],
            }),
            (0, P.jsx)(`div`, {
              className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`,
              children:
                e.length === 0
                  ? Array.from({ length: 3 }).map((e, t) =>
                    (0, P.jsxs)(
                      `div`,
                      {
                        className: `h-[300px] mobile:h-[380px] md:h-[450px] rounded-[1.5rem] mobile:rounded-[2rem] overflow-hidden bg-white p-3 mobile:p-4 space-y-3 mobile:space-y-4`,
                        children: [
                          (0, P.jsx)(ee, {
                            className: `w-full h-2/3 rounded-2xl`,
                          }),
                          (0, P.jsx)(ee, { className: `w-3/4 h-8` }),
                          (0, P.jsx)(ee, { className: `w-1/2 h-6` }),
                          (0, P.jsxs)(`div`, {
                            className: `flex justify-between items-center pt-4`,
                            children: [
                              (0, P.jsx)(ee, { className: `w-24 h-10` }),
                              (0, P.jsx)(ee, {
                                className: `w-12 h-12 rounded-full`,
                              }),
                            ],
                          }),
                        ],
                      },
                      t,
                    ),
                  )
                  : L.slice(0, 6).map((e, n) =>
                    (0, P.jsx)(
                      M,
                      {
                        delay: n * 0.1,
                        width: `100%`,
                        overflow: `visible`,
                        children: (0, P.jsx)(t, {
                          to: `/destination/${e.id}`,
                          className: `group block h-full`,
                          children: (0, P.jsxs)(`div`, {
                            className: `relative h-[300px] mobile:h-[380px] md:h-[450px] rounded-[1.5rem] mobile:rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 bg-white`,
                            children: [
                              (0, P.jsx)(`img`, {
                                src: S(e.image),
                                alt: e.name,
                                loading: `lazy`,
                                decoding: `async`,
                                className: `w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`,
                              }),
                              (0, P.jsx)(`div`, {
                                className: `absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent duration-500 group-hover:from-red-600/90`,
                              }),
                              (0, P.jsxs)(`div`, {
                                className: `absolute bottom-0 left-0 right-0 p-4 mobile:p-6 sm:p-8 text-white transform transition-all duration-500 translate-y-4 group-hover:translate-y-0`,
                                children: [
                                  (0, P.jsxs)(`div`, {
                                    className: `flex justify-between items-end mb-2`,
                                    children: [
                                      (0, P.jsx)(`h3`, {
                                        className: `text-xl mobile:text-2xl sm:text-3xl font-sans font-extrabold mb-1 text-white uppercase`,
                                        children: e.name,
                                      }),
                                      (0, P.jsxs)(`div`, {
                                        className: `bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter mb-2 shadow-lg`,
                                        children: [
                                          e.packages.length,
                                          ` Packages`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, P.jsxs)(`div`, {
                                    className: `flex items-center gap-2 text-white/90 mb-6 font-bold uppercase text-xs tracking-widest`,
                                    children: [
                                      (0, P.jsx)(m, {
                                        className: `w-4 h-4 text-red-600`,
                                      }),
                                      (0, P.jsx)(`span`, {
                                        children: e.country,
                                      }),
                                    ],
                                  }),
                                  (0, P.jsxs)(`div`, {
                                    className: `border-t border-white/20 pt-6 mt-2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0`,
                                    children: [
                                      (0, P.jsx)(`p`, {
                                        className: `text-[10px] text-white/70 uppercase tracking-[0.2em] font-black mb-1`,
                                        children: `Starting From`,
                                      }),
                                      (0, P.jsxs)(`p`, {
                                        className: `text-2xl font-extrabold text-white`,
                                        children: [
                                          `₹`,
                                          e.packages.length > 0
                                            ? Math.min(
                                              ...e.packages.map(
                                                (e) => e.price,
                                              ),
                                            ).toLocaleString()
                                            : `0`,
                                        ],
                                      }),
                                      (0, P.jsx)(`span`, {
                                        className: `bg-white text-black p-4 rounded-full hover:bg-black hover:text-white transition-all shadow-xl`,
                                        children: (0, P.jsx)(p, {
                                          className: `w-5 h-5`,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      },
                      e.id,
                    ),
                  ),
            }),
            (0, P.jsx)(`div`, {
              className: `text-center mt-10 mobile:mt-14 md:mt-20`,
              children: (0, P.jsx)(l, {
                asChild: !0,
                size: `lg`,
                className: `bg-black hover:bg-red-600 text-white rounded-full px-6 mobile:px-8 sm:px-12 py-5 mobile:py-6 sm:py-8 text-sm mobile:text-base sm:text-lg font-extrabold uppercase transition-all duration-300 shadow-2xl tracking-wider sm:tracking-widest`,
                children: (0, P.jsx)(t, {
                  to: `/destinations`,
                  children: `View All Destinations`,
                }),
              }),
            }),
          ],
        }),
      }),
(() => {
    const [active, setActive] = (0, F.useState)({ name: "ARUDHES", logo: "/assets/images/arudhes.png" });
    const companies = [
        { name: "ARUDHES", logo: "/assets/images/arudhes.png" },
        { name: "ASK JEWELLERY", logo: "/assets/images/ask_jewellery.png" },
        { name: "BHARAT PETROLIUM", logo: "/assets/images/bharat_petrolium.png" },
        { name: "DIVA SECRET", logo: "/assets/images/diva_secret.png" },
        { name: "GWC DATA AI", logo: "/assets/images/gwc_data ai.png" },
        { name: "NEW TECH CHENNAI", logo: "/assets/images/new_tech_chennai.png" },
        { name: "SUPREME ELECTRO CONTROL", logo: "/assets/images/supreme_electro_control.png" },
        { name: "ZOHO", logo: "/assets/images/zoho.png" }
    ];

    (0, F.useEffect)(() => {
        const timer = setInterval(() => {
            setActive(currentActive => {
                const currentIndex = companies.findIndex(c => c.name === currentActive.name);
                const nextIndex = (currentIndex + 1) % companies.length;
                return companies[nextIndex];
            });
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (0, P.jsxs)("section", {
        className: "trusted-section",
        children: [
            (0, P.jsx)("style", {
                dangerouslySetInnerHTML: {
                    __html: `
                        .trusted-section { min-height:100vh; padding:100px 8%; position:relative; overflow:hidden; background:#050505; color:white; font-family:"Inter",sans-serif; }
                        .trusted-section::before { content:""; position:absolute; width:600px; height:600px; background:radial-gradient(circle,#ff2d2d15,transparent 70%); top:-250px; left:-250px; pointer-events:none; }
                        .grid-bg { position:absolute; inset:0; background: linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px); background-size:50px 50px; pointer-events:none; }
                        .trusted-container { position:relative; z-index:2; display:grid; grid-template-columns:1fr 0.9fr; gap:80px; align-items:center; }
                        .left-content { max-width:600px; }
                        .trusted-tag { color:#ff4040; font-size:12px; letter-spacing:4px; font-weight:700; margin-bottom:20px; text-transform: uppercase; }
                        .trusted-title { font-size:72px; line-height:1; font-weight:900; margin-bottom:50px; color: white !important; }
                        .trusted-title span { color:#ff2d2d; }
                        .preview-card { background:rgba(255,255,255,.04); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,.08); border-radius:28px; padding:40px; min-height:300px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; transition:.3s; }
                        .preview-card:hover { border-color:#ff2d2d; box-shadow: 0 0 40px rgba(255,0,0,.15); }
                        .preview-logo { width:150px; height:150px; object-fit:contain; margin-bottom:25px; transition: .3s; }
                        .preview-title { font-size:32px; font-weight:700; transition: .3s; color: white !important; }
                        .company-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; }
                        .company-card { height:110px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); backdrop-filter:blur(20px); border-radius:18px; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:.3s; }
                        .company-card img { width:70px; height:70px; object-fit:contain; transition: .3s; }
                        .company-card:hover, .company-card.active { transform:translateY(-4px); border-color:#ff2d2d; box-shadow: 0 0 20px rgba(255,0,0,.20); background: rgba(255,45,45,.08); }
                        @media(max-width:900px) {
                            .trusted-container { grid-template-columns:1fr; gap:40px; }
                            .trusted-title { font-size:44px; text-align:center; }
                            .trusted-tag { text-align:center; }
                            .preview-card { min-height:220px; }
                            .company-grid { display:flex; overflow-x:auto; gap:14px; padding-bottom:10px; scroll-snap-type:x mandatory; scrollbar-width:none; }
                            .company-grid::-webkit-scrollbar { display:none; }
                            .company-card { min-width:90px; height:90px; flex-shrink:0; scroll-snap-align:center; }
                        }
                    `
                }
            }),
            (0, P.jsx)("div", { className: "grid-bg" }),
            (0, P.jsxs)("div", {
                className: "trusted-container",
                children: [
                    (0, P.jsxs)("div", {
                        className: "left-content",
                        children: [
                            (0, P.jsx)("div", { className: "trusted-tag", children: "TRUSTED PARTNERS" }),
                            (0, P.jsxs)("h2", {
                                className: "trusted-title",
                                children: [
                                    "Trusted By Leading ",
                                    (0, P.jsx)("span", { children: "Organizations" })
                                ]
                            }),
                            (0, P.jsxs)("div", {
                                className: "preview-card",
                                children: [
                                    (0, P.jsx)("img", {
                                        className: "preview-logo",
                                        src: active.logo,
                                        alt: active.name
                                    }),
                                    (0, P.jsx)("h3", {
                                        className: "preview-title",
                                        children: active.name
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, P.jsx)("div", {
                        className: "company-grid",
                        children: companies.map((company, index) => (
                            (0, P.jsx)("div", {
                                key: index,
                                className: `company-card ${active.name === company.name ? "active" : ""}`,
                                onMouseEnter: () => setActive(company),
                                onClick: () => setActive(company),
                                children: (0, P.jsx)("img", {
                                    src: company.logo,
                                    alt: company.name
                                })
                            })
                        ))
                    })
                ]
            })
        ]
    });
})(),
      (0, P.jsxs)(`section`, {
        className: `py-12 mobile:py-16 md:py-24 bg-white overflow-hidden`,
        children: [
          (0, P.jsx)(`div`, {
            className: `container mx-auto px-3 mobile:px-4 mb-8 mobile:mb-12 md:mb-16`,
            children: (0, P.jsx)(M, {
              width: `100%`,
              children: (0, P.jsxs)(`div`, {
                className: `flex flex-col items-center text-center`,
                children: [
                  (0, P.jsx)(`span`, {
                    className: `text-muted-foreground font-bold tracking-[0.2em] mobile:tracking-[0.3em] uppercase text-[10px] mobile:text-xs mb-3 mobile:mb-4 block`,
                    children: `Traveler Community`,
                  }),
                  (0, P.jsx)(`h2`, {
                    className: `text-2xl xs:text-3xl mobile:text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-foreground mb-4 mobile:mb-6 md:mb-8 uppercase tracking-tighter whitespace-pre-line`,
                    children: (
                      n.communityTitle || `Happy Customers, Happy Stories`
                    )
                      .split(/(Customers|Stories)/gi)
                      .map((e, t) =>
                        /customers/i.test(e) || /stories/i.test(e)
                          ? (0, P.jsx)(
                            `span`,
                            { className: `text-red-600`, children: e },
                            t,
                          )
                          : e,
                      ),
                  }),
                  (0, P.jsx)(`p`, {
                    className: `text-sm mobile:text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 mobile:mb-12 md:mb-16 font-medium leading-relaxed whitespace-pre-line`,
                    children:
                      n.communitySubtitle ||
                      `Join thousands of satisfied travelers who have explored the world with us.
Every picture tells a story of adventure and joy.`,
                  }),
                ],
              }),
            }),
          }),
          (0, P.jsx)(re, {}),
          (0, P.jsx)(`div`, {
            className: `container mx-auto px-4 text-center mt-8 mobile:mt-12 md:mt-16`,
            children: (0, P.jsx)(l, {
              size: `lg`,
              className: `bg-black hover:bg-red-600 text-white rounded-full px-6 mobile:px-8 sm:px-12 py-5 mobile:py-6 sm:py-8 font-extrabold uppercase tracking-wider sm:tracking-widest transition-all duration-300 shadow-2xl hover:scale-105`,
              children: `View Instagram Stories`,
            }),
          }),
        ],
      }),
    ],
  });
};
export { Qi as default };
